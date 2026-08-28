// Kwartierplan-sectie in het OuderDashboard (sessie 1: doel + startfoto).
//
// Flow voor de ouder: (1) doel zetten — "voor welk niveau gaan jullie
// oefenen?", (2) startfoto laten maken door het kind, (3) het persoonlijke
// dag-plan (sessie 2, teaser onderaan). Positieve toon, verplichte
// realiteits-disclaimers (geen "je haalt het wel/niet" — ontwerp-doc).

import { useState, useEffect, useRef } from "react";
import useFocusTrap from "../../shared/hooks/useFocusTrap.js";
import { loadKwartierplan, saveGoal } from "./kwartierplanRepo.js";
import { PIJLERS } from "./startfotoBuilder.js";
import Startfoto from "./Startfoto.jsx";

export const TARGET_LEVELS = [
  { id: "vmbo-bb", label: "VMBO basis (BB)" },
  { id: "vmbo-kb", label: "VMBO kader (KB)" },
  { id: "vmbo-gt", label: "VMBO-GT / TL (mavo)" },
  { id: "havo", label: "HAVO" },
  { id: "havo-vwo", label: "HAVO/VWO" },
  { id: "vwo", label: "VWO" },
];

const TARGET_EVENTS = [
  { id: "doorstroomtoets-2027", label: "Doorstroomtoets (eind jan 2027)", defaultDate: "2027-01-25" },
  { id: "doorstroomtoets-2028", label: "Doorstroomtoets (begin feb 2028)", defaultDate: "2028-02-01" },
  { id: "eigen-doel", label: "Eigen doel / anders", defaultDate: "" },
];

const GRADES = ["groep 6", "groep 7", "groep 8"];

const levelLabel = (id) => TARGET_LEVELS.find((l) => l.id === id)?.label || id;
const eventLabel = (id) => TARGET_EVENTS.find((e) => e.id === id)?.label || id;

function DoelModal({ childName, goal, onSave, onClose }) {
  const [level, setLevel] = useState(goal?.target_level || "");
  const [event, setEvent] = useState(goal?.target_event || "doorstroomtoets-2027");
  const [date, setDate] = useState(goal?.target_date || "2027-01-25");
  const [grade, setGrade] = useState(goal?.current_grade || "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const trapRef = useFocusTrap(true, { onEsc: onClose });

  const kiesEvent = (id) => {
    setEvent(id);
    const def = TARGET_EVENTS.find((e) => e.id === id)?.defaultDate;
    if (def) setDate(def);
  };

  const opslaan = async () => {
    if (!level) { setError("Kies eerst een niveau."); return; }
    setBusy(true);
    setError(null);
    const { error: err } = await onSave({ targetLevel: level, targetEvent: event, targetDate: date || null, currentGrade: grade || null });
    setBusy(false);
    if (err) setError(err.message);
    else onClose();
  };

  const veld = { width: "100%", padding: "11px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background: "#141d31", color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14, minHeight: "var(--tap-target-min, 44px)" };
  const label = { display: "block", fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,0.65)", margin: "12px 0 5px" };

  return (
    <div
      ref={trapRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Doel zetten voor ${childName}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
    >
      <div style={{ background: "linear-gradient(135deg, #1a2238, #0f1626)", border: "1px solid rgba(255,213,79,0.35)", borderRadius: 16, padding: "20px 18px", maxWidth: 420, width: "100%", maxHeight: "90dvh", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, color: "#ffd54f" }}>
            🎯 Doel voor {childName}
          </div>
          <button onClick={onClose} aria-label="Sluiten" style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 22, cursor: "pointer", minWidth: "var(--tap-target-min, 44px)", minHeight: "var(--tap-target-min, 44px)" }}>×</button>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: "0 0 4px" }}>
          Voor welk niveau gaan jullie oefenen? Dit stuurt de startfoto en straks het dag-plan.
        </p>

        <label style={label} htmlFor="kwp-level">Niveau waar jullie voor oefenen</label>
        <select id="kwp-level" value={level} onChange={(e) => setLevel(e.target.value)} style={veld}>
          <option value="">— kies een niveau —</option>
          {TARGET_LEVELS.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
        </select>

        <label style={label} htmlFor="kwp-event">Waar werken jullie naartoe?</label>
        <select id="kwp-event" value={event} onChange={(e) => kiesEvent(e.target.value)} style={veld}>
          {TARGET_EVENTS.map((ev) => <option key={ev.id} value={ev.id}>{ev.label}</option>)}
        </select>

        <label style={label} htmlFor="kwp-date">Datum-doel</label>
        <input id="kwp-date" type="date" value={date || ""} onChange={(e) => setDate(e.target.value)} style={veld} />

        <label style={label} htmlFor="kwp-grade">In welke groep zit {childName} nu?</label>
        <select id="kwp-grade" value={grade} onChange={(e) => setGrade(e.target.value)} style={veld}>
          <option value="">— kies —</option>
          {GRADES.map((g) => <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>)}
        </select>

        <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: "14px 0" }}>
          Eerlijk is eerlijk: Leerkwartier helpt oefenen — geen garanties. Het schooladvies
          van groep 8 telt voor de overgang, niet onze app. Wij laten alleen zien waar je
          kind staat en wat helpt om te groeien.
        </div>

        {error && <div style={{ fontSize: 12, color: "#ff8a80", marginBottom: 10 }}>{error}</div>}

        <button
          onClick={opslaan}
          disabled={busy}
          style={{ width: "100%", padding: "13px 16px", borderRadius: 12, border: "none", cursor: busy ? "wait" : "pointer", background: "linear-gradient(135deg, #ffd54f, #ffb300)", color: "#1a1a00", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, minHeight: "var(--tap-target-min, 44px)" }}
        >
          {busy ? "Opslaan…" : goal ? "Doel bijwerken" : "Doel vastleggen"}
        </button>
      </div>
    </div>
  );
}

export default function KwartierplanSectie({ authUser, childName }) {
  const [goal, setGoal] = useState(null);
  const [laatsteFoto, setLaatsteFoto] = useState(null);
  const [geladen, setGeladen] = useState(false);
  const [toonDoelModal, setToonDoelModal] = useState(false);
  const [toonStartfoto, setToonStartfoto] = useState(false);

  // Race-guard (bug-jacht 7/7): bij snel kind-wisselen mag een trage response
  // van het vórige kind de state van het nieuwe kind niet overschrijven.
  const laadVoorRef = useRef(null);
  const herlaad = () => {
    if (!authUser || !childName) return;
    const voor = `${authUser.id}:${childName}`;
    laadVoorRef.current = voor;
    loadKwartierplan(authUser.id, childName).then(({ goal: g, laatsteFoto: f }) => {
      if (laadVoorRef.current !== voor) return; // verouderde response
      setGoal(g);
      setLaatsteFoto(f);
      setGeladen(true);
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setGeladen(false); setGoal(null); setLaatsteFoto(null); herlaad(); }, [authUser?.id, childName]);

  if (!authUser || !childName) return null;

  const fotoDatum = laatsteFoto
    ? new Date(laatsteFoto.taken_at).toLocaleDateString("nl-NL", { day: "numeric", month: "short" })
    : null;
  const scores = laatsteFoto?.per_pijler_scores || {};

  return (
    <div style={{ borderRadius: 16, border: "1px solid rgba(255,213,79,0.30)", background: "rgba(255,213,79,0.05)", padding: "16px 18px" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#ffd54f", marginBottom: 4 }}>
        📋 Kwartierplan voor {childName}
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 14 }}>
        Samen gericht oefenen: zet een doel, maak een startfoto, en Leerkwartier bouwt
        daar een 15-minuten-per-dag-plan omheen.
      </div>

      {/* Stap 1 — doel */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 20 }} aria-hidden="true">🎯</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, color: "var(--color-text-strong)" }}>
            {goal ? levelLabel(goal.target_level) : "Stap 1 — zet een doel"}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>
            {goal
              ? `${eventLabel(goal.target_event)}${goal.current_grade ? ` · nu in ${goal.current_grade}` : ""}`
              : "Voor welk niveau gaan jullie oefenen?"}
          </div>
        </div>
        <button
          onClick={() => setToonDoelModal(true)}
          disabled={!geladen}
          style={{ padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(255,213,79,0.5)", background: goal ? "transparent" : "rgba(255,213,79,0.15)", color: "#ffd54f", fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", minHeight: "var(--tap-target-min, 44px)" }}
        >
          {goal ? "✏️ wijzig" : "Doel zetten"}
        </button>
      </div>

      {/* Stap 2 — startfoto */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 20 }} aria-hidden="true">📸</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, color: "var(--color-text-strong)" }}>
            {laatsteFoto ? `Startfoto van ${fotoDatum}` : "Stap 2 — de startfoto"}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>
            {laatsteFoto
              ? PIJLERS.map((p) => {
                  const s = scores[p.id];
                  return s ? `${p.label} ${s.correct}/${s.total}` : null;
                }).filter(Boolean).join(" · ")
              : `12 vragen, ±5 min — ${childName} maakt 'm zelf`}
          </div>
        </div>
        <button
          onClick={() => setToonStartfoto(true)}
          disabled={!geladen}
          style={{ padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(255,213,79,0.5)", background: laatsteFoto ? "transparent" : "rgba(255,213,79,0.15)", color: "#ffd54f", fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", minHeight: "var(--tap-target-min, 44px)" }}
        >
          {laatsteFoto ? "Opnieuw" : "Startfoto maken"}
        </button>
      </div>

      {/* Stap 3 — teaser */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0 2px", borderTop: "1px solid rgba(255,255,255,0.06)", opacity: 0.55 }}>
        <span style={{ fontSize: 20 }} aria-hidden="true">🗓️</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, color: "var(--color-text-strong)" }}>
            Stap 3 — het dag-plan
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>
            Automatisch 15-min-plan uit de startfoto + seintje als het gedaan is — komt in de volgende update.
          </div>
        </div>
      </div>

      {toonDoelModal && (
        <DoelModal
          childName={childName}
          goal={goal}
          onSave={async (velden) => {
            const res = await saveGoal({ parentUserId: authUser.id, childName, ...velden });
            if (!res.error) herlaad();
            return res;
          }}
          onClose={() => setToonDoelModal(false)}
        />
      )}

      {toonStartfoto && (
        <Startfoto
          parentUserId={authUser.id}
          childName={childName}
          heeftBaseline={!!laatsteFoto}
          onClose={() => setToonStartfoto(false)}
          onSaved={herlaad}
        />
      )}
    </div>
  );
}
