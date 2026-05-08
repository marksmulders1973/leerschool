// AgeGate — first-visit modal die leeftijd vraagt + bij <16 ouder-aanwezig-
// bevestiging. Voldoet aan AVG art. 8 (jonger dan 16 = ouderlijke toestemming
// nodig). Bewaart consent in localStorage als gestructureerde JSON-blob.
//
// Sprint-2 G1 v1 (2026-05-08): self-attest model. v2 = e-mail-verificatie van
// ouder via Edge Function — buiten scope deze sessie.
//
// Gebruik in App.jsx:
//   <AgeGate />  // rendert null als consent al gegeven
//
// Het Component leest zelf de localStorage flag; zonder consent → modal-overlay.

import { useEffect, useState } from "react";
import { BRAND } from "../brand.js";
import { track } from "../utils.js";
import useFocusTrap from "../shared/hooks/useFocusTrap.js";

const KEY = "lk_age_consent_v1";

export function hasConsent() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;
    const obj = JSON.parse(raw);
    return obj && obj.confirmedAt && (obj.ageGroup === "16+" || obj.parentPresent === true);
  } catch {
    return false;
  }
}

export default function AgeGate() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState("age");          // age → parent (if <16) → done
  const [ageGroup, setAgeGroup] = useState(null);   // "<13" | "13-15" | "16+"
  const [parentEmail, setParentEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  useEffect(() => {
    if (!hasConsent()) setShow(true);
  }, []);

  // Focus-trap: AgeGate is non-dismissible (geen Esc) — gebruiker MOET kiezen.
  const trapRef = useFocusTrap(show);

  if (!show) return null;

  const opslaan = (data) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ ...data, confirmedAt: new Date().toISOString() }));
    } catch {}
    try { track("age_gate_consent", { age_group: data.ageGroup, parent_email_given: !!data.parentEmail }); } catch {}
    setShow(false);
  };

  const onAge = (group) => {
    setAgeGroup(group);
    if (group === "16+") {
      opslaan({ ageGroup: group, parentPresent: false });
    } else {
      setStep("parent");
    }
  };

  const onParentSubmit = () => {
    const email = parentEmail.trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailErr("Vul een geldig e-mailadres in (of laat leeg als ouder erbij is).");
      return;
    }
    opslaan({ ageGroup, parentPresent: true, parentEmail: email || null });
  };

  return (
    <div
      ref={trapRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      style={{
        position: "fixed", inset: 0, zIndex: 10001,
        background: "rgba(0,0,0,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
    >
      <div style={{
        background: "#0d1b2e",
        border: "1px solid rgba(0,212,255,0.3)",
        borderRadius: 24,
        padding: "32px 26px",
        maxWidth: 380,
        width: "100%",
        boxShadow: "0 12px 60px rgba(0,0,0,0.7)",
      }}>
        <div style={{ fontSize: 44, textAlign: "center", marginBottom: 12 }} aria-hidden="true">👋</div>
        <h2 id="age-gate-title" style={{
          fontFamily: "var(--font-display, sans-serif)",
          fontSize: 22, fontWeight: 700, color: "#00e676",
          textAlign: "center", margin: "0 0 6px",
        }}>
          Welkom bij {BRAND.name}
        </h2>
        <p style={{
          fontFamily: "var(--font-body, sans-serif)",
          fontSize: 13, color: "rgba(255,255,255,0.7)",
          textAlign: "center", lineHeight: 1.5, margin: "0 0 20px",
        }}>
          Voor je kind veilig kan oefenen vragen we eerst hoe oud je bent.
          Voor kinderen onder de 16 vragen we ook even of een ouder er bij is.
        </p>

        {step === "age" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { id: "<13",   label: "Ik ben jonger dan 13",   sub: "groep 1-7" },
              { id: "13-15", label: "Ik ben 13, 14 of 15",     sub: "groep 8 / klas 1-3" },
              { id: "16+",   label: "Ik ben 16 jaar of ouder", sub: "klas 4+ of volwassene" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => onAge(opt.id)}
                style={{
                  textAlign: "left",
                  padding: "14px 16px",
                  background: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.30)",
                  borderRadius: 14,
                  color: "#fff",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14, fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {opt.label}
                <span style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2, fontWeight: 400 }}>
                  {opt.sub}
                </span>
              </button>
            ))}
          </div>
        )}

        {step === "parent" && (
          <>
            <div style={{
              padding: "12px 14px",
              background: "rgba(255,183,77,0.08)",
              border: "1px solid rgba(255,183,77,0.3)",
              borderRadius: 12,
              fontSize: 13,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 14,
              lineHeight: 1.5,
            }}>
              <strong style={{ color: "#ffb74d" }}>Onder de 16?</strong> Vraag dan
              een ouder/voogd om hier akkoord te geven. (AVG art. 8)
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0 0 8px" }}>
              <strong>E-mail van ouder</strong> (optioneel — helpt ons later contact te zoeken)
            </p>
            <input
              type="email"
              value={parentEmail}
              onChange={(e) => { setParentEmail(e.target.value); setEmailErr(""); }}
              placeholder="ouder@voorbeeld.nl"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14,
                marginBottom: emailErr ? 4 : 14,
                boxSizing: "border-box",
              }}
            />
            {emailErr && (
              <div style={{ color: "#ff7043", fontSize: 12, marginBottom: 12 }}>{emailErr}</div>
            )}
            <button
              onClick={onParentSubmit}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: 14,
                border: "none",
                background: "linear-gradient(135deg, #00C853, #00e676)",
                color: "#fff",
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: 15, fontWeight: 800,
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0,200,83,0.4)",
              }}
            >
              ✅ Mijn ouder is erbij — verder
            </button>
            <button
              onClick={() => { setStep("age"); setAgeGroup(null); }}
              style={{
                width: "100%",
                marginTop: 8,
                padding: "10px",
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              ← Andere leeftijd kiezen
            </button>
          </>
        )}

        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 16, lineHeight: 1.4 }}>
          We slaan alleen je leeftijdscategorie op in deze browser. Geen e-mail,
          geen profiel. <a href="/privacy.html" target="_blank" rel="noreferrer" style={{ color: "#00d4ff" }}>Privacybeleid</a>.
        </p>
      </div>
    </div>
  );
}
