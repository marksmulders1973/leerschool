import { useMemo, useState } from "react";
import pathManifest from "../learnPaths/pathManifest.generated.json";
import { generateCode } from "../utils.js";
import { saveQuiz } from "../data/repos/quizzesRepo.js";
import { TAKENLIJST_TYPE } from "../data/takenlijst.js";

// TakenlijstMaker — leerkracht-kant van Brian's takenlijst-idee (2026-06-28).
// De leerkracht geeft een titel, kiest een paar leerpaden uit het manifest, en
// krijgt een deelcode. Slaat op in de bestaande quizzes-tabel (type-discriminator
// "takenlijst"), zodat de leerling-flow (TakenlijstView) 'm via de code opent.
//
// Props: onClose() — terug naar het leerkracht-dashboard. userId? — created_by.
export default function TakenlijstMaker({ onClose, userId, onWerkblad }) {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [zoek, setZoek] = useState("");
  const [taken, setTaken] = useState([]); // [{ pathId, title, stepCount, subject, emoji }]
  const [opgeslagen, setOpgeslagen] = useState(null); // { code }
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");

  // Alle paden, gesorteerd op vak → titel. Metadata-only (geen zware import).
  const paden = useMemo(() => {
    const arr = Array.isArray(pathManifest) ? pathManifest : Object.values(pathManifest);
    return arr.filter((p) => p && p.id && p.title);
  }, []);

  const resultaten = useMemo(() => {
    const q = zoek.trim().toLowerCase();
    if (q.length < 2) return [];
    const gekozen = new Set(taken.map((t) => t.pathId));
    return paden
      .filter((p) => !gekozen.has(p.id))
      .filter((p) => `${p.title} ${p.subject} ${(p.triggerKeywords || []).join(" ")}`.toLowerCase().includes(q))
      .slice(0, 25);
  }, [zoek, paden, taken]);

  function voegToe(p) {
    setTaken((cur) => [...cur, { pathId: p.id, title: p.title, stepCount: p.stepCount || 0, subject: p.subject, emoji: p.emoji || "📝" }]);
    setZoek("");
  }
  function verwijder(pathId) {
    setTaken((cur) => cur.filter((t) => t.pathId !== pathId));
  }

  async function maak() {
    if (!title.trim()) { setFout("Geef de takenlijst een titel (bv. 'Week 24 — spelling')."); return; }
    if (taken.length === 0) { setFout("Voeg minstens één taak toe."); return; }
    setBezig(true); setFout("");
    const code = generateCode();
    const obj = {
      type: TAKENLIJST_TYPE,
      id: "taken-" + Date.now(),
      code,
      title: title.trim(),
      intro: intro.trim() || null,
      created_by: userId || null,
      created_at: new Date().toISOString(),
      taken: taken.map((t, i) => ({ id: "t" + i, title: t.title, pathId: t.pathId, stepCount: t.stepCount })),
    };
    const { error } = await saveQuiz({ id: obj.id, code, quiz: obj, userId });
    setBezig(false);
    if (error) { setFout("Opslaan mislukt. Probeer het zo nog eens."); return; }
    setOpgeslagen({ code });
  }

  const inputStyle = {
    width: "100%", boxSizing: "border-box", padding: "11px 14px", borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)",
    color: "#fff", fontFamily: "var(--font-body)", fontSize: 14,
  };

  // ── Klaar-scherm met deelcode ──
  if (opgeslagen) {
    const deelTekst = `Takenlijst "${title.trim()}" in Leerkwartier — vul de code ${opgeslagen.code} in op leerkwartier.app, of open: https://leerkwartier.app/?code=${opgeslagen.code}`;
    return (
      <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0f1729,#162033)", color: "#fff", padding: "24px 16px 96px" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginTop: 20 }}>✅</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, margin: "8px 0" }}>Takenlijst klaar!</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Deel deze code met je klas. Leerlingen vullen 'm in op leerkwartier.app.</p>
          <div style={{ background: "rgba(0,200,83,0.12)", border: "1.5px solid rgba(0,200,83,0.4)", borderRadius: 14, padding: "18px", margin: "16px 0" }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Deelcode</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 800, letterSpacing: 3, color: "#69f0ae" }}>{opgeslagen.code}</div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={() => { try { navigator.clipboard?.writeText(opgeslagen.code); } catch {} }} style={{ ...inputStyle, width: "auto", cursor: "pointer", fontWeight: 700 }}>📋 Kopieer code</button>
            <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(deelTekst)}`, "_blank", "noopener")} style={{ background: "#25D366", color: "#06281a", border: "none", borderRadius: 10, padding: "11px 16px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>Deel via WhatsApp</button>
          </div>
          {onWerkblad && (
            <button onClick={onWerkblad} style={{ marginTop: 14, background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", borderRadius: 10, padding: "11px 16px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
              🖨️ Print er een werkblad bij
            </button>
          )}
          <button onClick={onClose} style={{ marginTop: 22, background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 14, cursor: "pointer", textDecoration: "underline" }}>← Terug naar dashboard</button>
        </div>
      </div>
    );
  }

  // ── Maak-scherm ──
  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0f1729,#162033)", color: "#fff", padding: "24px 16px 96px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "#69f0ae", fontWeight: 700 }}>📋 Nieuwe takenlijst</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 13, cursor: "pointer" }}>✕ sluiten</button>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, margin: "0 0 4px" }}>Zet een lijstje klaar voor je klas</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.75)", margin: "0 0 16px" }}>
          Kies een paar leerpaden. Je leerlingen vinken ze af terwijl ze leren — en krijgen een beloning als de lijst af is.
        </p>

        <label style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>Titel</label>
        <input value={title} onChange={(e) => { setTitle(e.target.value); if (fout) setFout(""); }} placeholder="bv. Week 24 — spelling" style={{ ...inputStyle, margin: "6px 0 12px" }} />

        <label style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>Bericht aan de klas <span style={{ opacity: 0.55, fontWeight: 400 }}>(mag leeg)</span></label>
        <input value={intro} onChange={(e) => setIntro(e.target.value)} placeholder="bv. Maak deze taken vóór vrijdag. Succes!" style={{ ...inputStyle, margin: "6px 0 16px" }} />

        {/* Gekozen taken */}
        {taken.length > 0 && (
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>Taken ({taken.length})</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {taken.map((t, i) => (
                <div key={t.pathId} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.3)", borderRadius: 10, padding: "9px 12px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#69f0ae", fontSize: 13 }}>{i + 1}.</span>
                  <span aria-hidden="true">{t.emoji}</span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: 14 }}>{t.title}</span>
                  <button onClick={() => verwijder(t.pathId)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 16 }}>✕</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Zoek + toevoegen */}
        <label style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>Taak toevoegen</label>
        <input value={zoek} onChange={(e) => setZoek(e.target.value)} placeholder="Zoek een onderwerp… bv. breuken, spelling, kaartlezen" style={{ ...inputStyle, margin: "6px 0 8px" }} />
        {resultaten.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 260, overflowY: "auto", marginBottom: 14 }}>
            {resultaten.map((p) => (
              <button key={p.id} onClick={() => voegToe(p)} style={{ textAlign: "left", cursor: "pointer", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 10, padding: "9px 12px", display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
                <span aria-hidden="true">{p.emoji || "📝"}</span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 14, fontWeight: 700 }}>{p.title}</span>
                  <span style={{ display: "block", fontSize: 11.5, color: "rgba(255,255,255,0.55)" }}>{p.subject} · {p.stepCount || "?"} stappen</span>
                </span>
                <span style={{ color: "#69f0ae", fontSize: 18 }}>＋</span>
              </button>
            ))}
          </div>
        )}

        {fout && <div style={{ color: "#ff8a80", fontSize: 13, marginBottom: 10 }}>{fout}</div>}

        <button onClick={maak} disabled={bezig} style={{ width: "100%", padding: "13px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#00c853,#00e676)", color: "#06211a", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, cursor: "pointer", opacity: bezig ? 0.7 : 1 }}>
          {bezig ? "Bezig…" : "Maak takenlijst + krijg deelcode →"}
        </button>
      </div>
    </div>
  );
}
