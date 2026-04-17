import { useState, useEffect, useRef } from "react";
import styles from "../styles.js";
import { LEVELS } from "../constants.js";

const ONBOARDING_STEPS = [
  { emoji: "📚", title: "Echte examenvragen, echte boeken", desc: "Echte voorbereiding voor je examen. Geen giswerk, gewoon oefenen wat telt." },
  { emoji: "🤖", title: "Studiebol maakt vragen voor jou", desc: "Elke quiz is anders, ook over jouw eigen schoolboek" },
  { emoji: "🏆", title: "Verdien je plek op het scorebord", desc: "Speel elke dag voor een langere streak" },
];

export default function HomePage({ onSelectRole, onBack, userName, setUserName, setUserLevel, setUserSchoolType, pendingCode, authUser, onGoogleLogin, onLogout, onSaveProfile, onOnboardingStart }) {
  const [name, setName] = useState(userName);
  const [shake, setShake] = useState(false);
  const [step, setStep] = useState(pendingCode ? "name" : "role");
  const [pendingRole, setPendingRole] = useState(pendingCode ? "leerling" : null);
  const [level, setLevel] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [activeRole, setActiveRole] = useState(0);
  const audioCtxRef = useRef(null);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    try { return !localStorage.getItem("ls_onboarded"); } catch { return false; }
  });

  const finishOnboarding = () => {
    try { localStorage.setItem("ls_onboarded", "1"); } catch {}
    setShowOnboarding(false);
  };

  const roleLabels = { leerling: "leerling", student: "student", teacher: "leerkracht" };
  const levelOptions = { leerling: [1,2,3,4,5,6,7,8], student: [1,2,3,4,5,6], teacher: [] };

  const playBeep = (freq) => {
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.18);
    } catch(e) {}
  };

  // Geen wisselanimatie meer — balken altijd rustig leesbaar
  useEffect(() => {}, [step]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ls_user");
      if (saved) {
        const d = JSON.parse(saved);
        if (d.name) setName(d.name);
        if (d.level) setLevel(d.level);
      }
    } catch {}
  }, []);

  // Naam automatisch invullen vanuit Google profiel
  useEffect(() => {
    if (authUser && !name.trim()) {
      const googleName = authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email?.split("@")[0] || "";
      if (googleName) setName(googleName);
    }
  }, [authUser]);

  const handleRoleClick = (role) => {
    onOnboardingStart?.();
    setPendingRole(role);
    setLevel("");
    setSchoolType("");
    setStep("name");
  };

  const handleConfirm = () => {
    const effectiveName = name.trim() ||
      (authUser && (authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email?.split("@")[0])) ||
      "";
    if (!effectiveName) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    if (!name.trim()) setName(effectiveName);
    setUserName(effectiveName);
    setUserLevel(level);
    setUserSchoolType?.(schoolType);
    try { localStorage.setItem("ls_user", JSON.stringify({ name: effectiveName, level, role: pendingRole, schoolType })); } catch {}
    try { onSaveProfile?.({ name: effectiveName, level, role: pendingRole, schoolType }); } catch {}
    onSelectRole(pendingRole);
  };

  return (
    <div style={styles.page}>
      {showOnboarding && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 20,
        }}>
          <div style={{
            background: "#0d1b2e",
            border: "1px solid rgba(0,212,255,0.25)",
            borderRadius: 24,
            padding: "36px 28px",
            maxWidth: 360,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 8px 48px rgba(0,0,0,0.7)",
          }}>
            {/* Step dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28 }}>
              {ONBOARDING_STEPS.map((_, i) => (
                <div key={i} style={{
                  width: i === onboardingStep ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === onboardingStep ? "#00d4ff" : "rgba(0,212,255,0.25)",
                  transition: "all 0.3s ease",
                }} />
              ))}
            </div>

            <div style={{ fontSize: 56, marginBottom: 16 }}>{ONBOARDING_STEPS[onboardingStep].emoji}</div>
            <div style={{
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#00d4ff",
              marginBottom: 10,
              lineHeight: 1.2,
            }}>{ONBOARDING_STEPS[onboardingStep].title}</div>
            <div style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.5,
            }}>{ONBOARDING_STEPS[onboardingStep].desc}</div>

            {onboardingStep < ONBOARDING_STEPS.length - 1 ? (
              <button
                onClick={() => setOnboardingStep(s => s + 1)}
                style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, #0072ff, #00d4ff)",
                  color: "#fff", fontFamily: "'Fredoka', sans-serif",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,212,255,0.35)",
                }}
              >
                Volgende →
              </button>
            ) : (
              <button
                onClick={finishOnboarding}
                style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, #00c853, #00e676)",
                  color: "#fff", fontFamily: "'Fredoka', sans-serif",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,200,83,0.4)",
                }}
              >
                Beginnen! 🚀
              </button>
            )}
          </div>
        </div>
      )}
      <div style={styles.heroSection}>

        {/* Slime banner */}
        <div style={{ position: "relative", marginBottom: 18, textAlign: "center" }}>
          <div style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 21,
            fontWeight: 700,
            color: "#00d4ff",
            letterSpacing: 0.5,
            animation: "slimeWave 3.5s ease-in-out infinite",
            display: "inline-block",
            textShadow: "0 0 18px rgba(0,212,255,0.7), 0 0 40px rgba(0,180,255,0.4)",
          }}>
            Elke studiebol slaagt
          </div>
          {/* drip drops */}
          {["25%","42%","60%","77%"].map((left, i) => (
            <div key={i} style={{
              position: "absolute",
              bottom: -4,
              left,
              width: 6,
              height: 0,
              background: "radial-gradient(ellipse at top, #00d4ff, #0066aa)",
              borderRadius: "0 0 50% 50%",
              animation: `slimeDrip ${2.2 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }} />
          ))}
        </div>

        <div style={{
          position: "relative",
          width: "90%",
          maxWidth: 360,
          marginBottom: 24,
        }}>
          <div style={{
            position: "absolute",
            inset: -24,
            background: "radial-gradient(ellipse at center, rgba(30,100,200,0.4) 0%, transparent 70%)",
            borderRadius: 50,
            zIndex: 0,
            pointerEvents: "none",
          }} />
          <video
            src="/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: 18,
              boxShadow: "0 6px 32px rgba(15,70,180,0.55)",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        <p style={styles.subtitle}>Ik ken alle Nederlandse schoolboeken</p>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 15,
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          marginTop: -18,
          marginBottom: 10,
          lineHeight: 1.5,
          maxWidth: 320,
        }}>
          Oefen met <strong style={{ color: "#00d4ff" }}>echte examenvragen</strong> voor rekenen, taal, aardrijkskunde en meer
        </p>

        <p style={{ fontFamily: "'Nunito', sans-serif", color: "#556677", fontSize: 11, marginTop: -16, marginBottom: 4, textAlign: "center" }}>
          © Smulsoft &nbsp;·&nbsp; <a href="/privacy.html" style={{ color: "#556677" }}>Privacybeleid</a>
        </p>
        <p style={{ fontFamily: "'Nunito', sans-serif", color: "#445566", fontSize: 10, marginBottom: 20, textAlign: "center" }}>
          Deze app is in ontwikkeling en kan fouten bevatten.
        </p>

        {step === "role" && (
          <div style={{ width: "100%", maxWidth: 360 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { role: "leerling", emoji: "🎒", label: "leerling", sub: "groep 1 t/m 8", color: "#0072ff", glow: "rgba(0,114,255,0.35)", glowAnim: "roleGlowBlue 2s ease-in-out infinite" },
                { role: "student", emoji: "🎓", label: "student", sub: "klas 1 t/m 6 · MAVO/HAVO/VWO/Gym", color: "#7c3aed", glow: "rgba(124,58,237,0.35)", glowAnim: "roleGlowPurple 2s ease-in-out infinite 0.3s" },
                { role: "teacher", emoji: "📋", label: "leerkracht", sub: "maak quizzes voor je klas", color: "#00897b", glow: "rgba(0,137,123,0.35)", glowAnim: "roleGlowGreen 2s ease-in-out infinite 0.6s" },
              ].map(({ role, emoji, label, sub, color }, idx) => (
                <button key={role} onClick={() => handleRoleClick(role)} style={{
                  width: "100%",
                  border: "none",
                  padding: "18px 20px",
                  cursor: "pointer",
                  borderRadius: 18,
                  background: "#ffffff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  textAlign: "left",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = `0 6px 24px rgba(0,0,0,0.22)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.18)"; }}
                >
                  <span style={{ fontSize: 32, flexShrink: 0 }}>{emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "#999", marginBottom: 2 }}>
                      Ik ben een
                    </div>
                    <div style={{
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: color,
                      lineHeight: 1.1,
                    }}>{label}</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700, color: "#333", marginTop: 3 }}>{sub}</div>
                  </div>
                  <span style={{ fontSize: 22, color: color }}>›</span>
                </button>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 14, animation: "pulseDown 1.4s ease-in-out infinite" }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                ↑ kies jouw rol om te starten
              </span>
            </div>
          </div>
        )}

        {step === "name" && (
          <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
            {pendingCode ? (
              <div style={{
                background: "rgba(0,200,83,0.15)", borderRadius: 16,
                padding: "12px 16px", textAlign: "center",
                border: "1px solid rgba(0,200,83,0.3)",
              }}>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: "#00e676" }}>🎯 Quiz gevonden!</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#aabbcc", marginTop: 4 }}>Vul je naam in en de quiz start meteen</div>
              </div>
            ) : (
              <div style={{
                background: "rgba(255,255,255,0.06)", borderRadius: 16,
                padding: "10px 14px", display: "flex", alignItems: "center", gap: 10,
              }}>
                <img src="/bol.jpg" alt="" style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover" }} />
                <div>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Je koos:</div>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 17, fontWeight: 700, color: "#fff" }}>{roleLabels[pendingRole]}</div>
                </div>
                <button onClick={() => setStep("role")} style={{
                  marginLeft: "auto", background: "none", border: "none",
                  color: "rgba(255,255,255,0.75)", fontSize: 13, cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                }}>← terug</button>
              </div>
            )}

            <div style={{ ...styles.nameInput, animation: shake ? "shake 0.5s ease" : "none" }}>
              <label style={styles.inputLabel}>Wat is je naam?</label>
              <input
                style={styles.textInput}
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
                placeholder="Vul je naam in..."
                onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
              />
            </div>

            {levelOptions[pendingRole]?.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <label style={{ ...styles.inputLabel, marginBottom: 0 }}>
                    {pendingRole === "leerling" ? "Welke groep zit je in?" : "Welke klas zit je in?"}
                  </label>
                  <button onClick={() => setLevel("")} style={{
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 8, padding: "4px 10px",
                    color: "rgba(255,255,255,0.85)", fontSize: 12, cursor: "pointer",
                    fontFamily: "'Nunito', sans-serif",
                  }}>sla over →</button>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {levelOptions[pendingRole].map(n => (
                    <button key={n} onClick={() => setLevel(String(n))} style={{
                      width: 38, height: 38, borderRadius: 10,
                      border: level === String(n) ? "2px solid #00d4ff" : "1px solid rgba(255,255,255,0.15)",
                      background: level === String(n) ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.05)",
                      color: level === String(n) ? "#00d4ff" : "rgba(255,255,255,0.6)",
                      fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700,
                      cursor: "pointer",
                    }}>{n}</button>
                  ))}
                </div>
              </div>
            )}

            {pendingRole === "student" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ ...styles.inputLabel, marginBottom: 0 }}>Welk type onderwijs volg je?</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    { id: "mavo", label: "MAVO",      color: "#f59e0b" },
                    { id: "havo", label: "HAVO",      color: "#3b82f6" },
                    { id: "vwo",  label: "VWO",       color: "#8b5cf6" },
                    { id: "gym",  label: "Gymnasium", color: "#ec4899" },
                  ].map(({ id, label, color }) => {
                    const sel = schoolType === id;
                    return (
                      <button key={id} onClick={() => setSchoolType(sel ? "" : id)} style={{
                        padding: "7px 14px", borderRadius: 10, cursor: "pointer",
                        border: sel ? `2px solid ${color}` : "1px solid rgba(255,255,255,0.15)",
                        background: sel ? `${color}22` : "rgba(255,255,255,0.05)",
                        color: sel ? color : "rgba(255,255,255,0.6)",
                        fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700,
                      }}>{label}</button>
                    );
                  })}
                </div>
              </div>
            )}

            {authUser ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,200,83,0.12)", border: "1px solid rgba(0,200,83,0.3)", borderRadius: 16, padding: "12px 16px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,200,83,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✓</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 14, color: "#00e676" }}>Ingelogd</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{authUser.email}</div>
                  </div>
                  <button onClick={onLogout} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 12, cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}>Uitloggen</button>
                </div>
                <button onClick={handleConfirm} style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, #00c853, #00897b)",
                  color: "#fff", fontFamily: "'Fredoka', sans-serif",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,200,83,0.4)",
                }}>
                  Doorgaan →
                </button>
              </>
            ) : (
              <>
                <button onClick={handleConfirm} style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                  color: "#fff", fontFamily: "'Fredoka', sans-serif",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(13,71,161,0.5)",
                }}>
                  Doorgaan als gast
                </button>
                <button onClick={onGoogleLogin} style={{
                  width: "100%", padding: "15px", borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "#ffffff",
                  color: "#333", fontFamily: "'Fredoka', sans-serif",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}>
                  <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                  Inloggen met Google
                </button>
              </>
            )}
          </div>
        )}

        {step === "role" && <button
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            width: "100%", maxWidth: 360, background: "#25D366", color: "#fff", border: "none",
            borderRadius: 16, padding: "16px 20px", fontFamily: "'Fredoka', sans-serif",
            fontSize: 16, fontWeight: 600, cursor: "pointer", marginTop: 24,
            boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
          }}
          onClick={() => {
            const text = `Ken je studiebol al?\n\nSamen slim worden met leuke vragen! Oefenen voor school was nog nooit zo leuk.\n\n👉 Open de app: https://www.studiebol.online`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Deel met je klas via WhatsApp
        </button>}
      </div>

      <style>{`
        input, select, textarea { color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; }
        input::placeholder { color: #667788 !important; -webkit-text-fill-color: #667788 !important; }
        select option { background: #1e2d45; color: #ffffff; }
        @keyframes correctGlow { 0% { box-shadow: 0 0 0 0 rgba(40,167,69,0.4); } 70% { box-shadow: 0 0 0 15px rgba(40,167,69,0); } 100% { box-shadow: 0 0 0 0 rgba(40,167,69,0); } }
        @keyframes wrongShake { 0%,100% { transform: translateX(0); } 15%,45%,75% { transform: translateX(-6px); } 30%,60%,90% { transform: translateX(6px); } }
        @keyframes timerPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes scoreFloat { 0% { opacity:1; transform:translateY(0) scale(1); } 100% { opacity:0; transform:translateY(-40px) scale(1.5); } }
        @keyframes popIn { 0% { transform:scale(0.5); opacity:0; } 70% { transform:scale(1.1); } 100% { transform:scale(1); opacity:1; } }
        @keyframes confetti { 0% { transform:translateY(0) rotate(0deg); opacity:1; } 100% { transform:translateY(-200px) rotate(720deg); opacity:0; } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeBg { from { opacity:0; } to { opacity:1; } }
        @keyframes roleGlowBlue {
          0%, 100% { text-shadow: 0 0 8px rgba(0,114,255,0.4), 0 0 20px rgba(0,114,255,0.2); }
          50% { text-shadow: 0 0 16px rgba(0,180,255,0.9), 0 0 40px rgba(0,114,255,0.5); }
        }
        @keyframes roleGlowPurple {
          0%, 100% { text-shadow: 0 0 8px rgba(124,58,237,0.4), 0 0 20px rgba(124,58,237,0.2); }
          50% { text-shadow: 0 0 16px rgba(160,100,255,0.9), 0 0 40px rgba(124,58,237,0.5); }
        }
        @keyframes roleGlowGreen {
          0%, 100% { text-shadow: 0 0 8px rgba(0,137,123,0.4), 0 0 20px rgba(0,137,123,0.2); }
          50% { text-shadow: 0 0 16px rgba(0,200,160,0.9), 0 0 40px rgba(0,137,123,0.5); }
        }
        @keyframes pulseDown {
          0%, 100% { opacity: 0.5; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(4px); }
        }
        @keyframes arrowBounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes slimeWave {
          0%, 100% { transform: scaleX(1) scaleY(1) translateY(0px); filter: drop-shadow(0 6px 4px rgba(0,212,255,0.35)); }
          25% { transform: scaleX(1.04) scaleY(0.96) translateY(-2px); filter: drop-shadow(0 10px 6px rgba(0,212,255,0.5)); }
          50% { transform: scaleX(0.97) scaleY(1.05) translateY(3px); filter: drop-shadow(0 3px 8px rgba(0,212,255,0.6)); }
          75% { transform: scaleX(1.03) scaleY(0.98) translateY(-1px); filter: drop-shadow(0 8px 5px rgba(0,212,255,0.4)); }
        }
        @keyframes slimeDrip {
          0%, 80%, 100% { height: 0px; opacity: 0; }
          40%, 60% { height: 14px; opacity: 0.7; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countDown {
          from { transform: scale(1.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes correctFlash {
          0% { background: #d4edda; }
          100% { background: transparent; }
        }
        @keyframes wrongFlash {
          0% { background: #f8d7da; }
          100% { background: transparent; }
        }
      `}</style>
    </div>
  );
}
