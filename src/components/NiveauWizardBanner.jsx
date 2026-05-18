import { useState } from "react";

// P0-4 (4-agent-audit 2026-05-18): 3-vragen-onboarding-wizard die de
// niveau-keuze auto-zet voor leerlingen die op "sla over" klikten of via
// een deeplink zonder klas binnen kwamen.
//
// Agent C-bevinding: 175 paden met level-strings als "klas2-3-vmbo-vwo"
// = dev-jargon. Maar voor het kind zelf vragen we hier in gewone taal:
// 1) PO of VO? (basisschool of middelbaar)
// 2) Welke groep/klas?
// 3) (alleen VO) Welk schoolniveau? (vmbo/havo/vwo)
//
// Resultaat: setUserLevel + setUserSchoolType worden gevuld zodat alle
// rol-filters (LearnPathsHub PO/VO, CitoPage groep, etc.) goed werken.
// Localstorage-flag `lk_niveau_wizard_done` voorkomt herhalen.

const PO_GROEPEN = [
  { key: "groep1", label: "Groep 1" },
  { key: "groep2", label: "Groep 2" },
  { key: "groep3", label: "Groep 3" },
  { key: "groep4", label: "Groep 4" },
  { key: "groep5", label: "Groep 5" },
  { key: "groep6", label: "Groep 6" },
  { key: "groep7", label: "Groep 7" },
  { key: "groep8", label: "Groep 8" },
];

const VO_KLASSEN = [
  { key: "klas1", label: "Klas 1" },
  { key: "klas2", label: "Klas 2" },
  { key: "klas3", label: "Klas 3" },
  { key: "klas4", label: "Klas 4" },
  { key: "klas5", label: "Klas 5" },
  { key: "klas6", label: "Klas 6" },
];

const VO_NIVEAUS = [
  { key: "vmbo-tl", label: "VMBO" },
  { key: "havo", label: "HAVO" },
  { key: "vwo", label: "VWO" },
];

export default function NiveauWizardBanner({ onSetLevel, onSetSchoolType }) {
  const [stap, setStap] = useState(0); // 0=intro, 1=schoolsoort, 2=klas, 3=niveau
  const [schoolsoort, setSchoolsoort] = useState(null); // "po" | "vo"

  const dismiss = () => {
    try { localStorage.setItem("lk_niveau_wizard_done", "1"); } catch {}
    onSetLevel && onSetLevel(null, { dismissed: true });
  };

  const kiesGroep = (key) => {
    try { localStorage.setItem("lk_niveau_wizard_done", "1"); } catch {}
    onSetLevel && onSetLevel(key);
  };

  const kiesNiveau = (klasKey, niveauKey) => {
    try { localStorage.setItem("lk_niveau_wizard_done", "1"); } catch {}
    onSetSchoolType && onSetSchoolType(niveauKey);
    onSetLevel && onSetLevel(klasKey);
  };

  // Stap 0: intro met "ja, helpen" / "nee, skip" keuze.
  if (stap === 0) {
    return (
      <div style={{
        marginBottom: 14,
        padding: "16px 18px",
        background: "linear-gradient(135deg, rgba(0,212,255,0.14), rgba(0,176,255,0.06))",
        border: "1px solid rgba(0,212,255,0.45)",
        borderRadius: 14,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <span style={{ fontSize: 28 }}>👋</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#00d4ff", lineHeight: 1.3 }}>
              Snel de juiste vragen vinden
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>
              In 2 vragen kies je de groep of klas — dan krijg je vragen op jouw niveau.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setStap(1)}
            style={{
              flex: 1,
              padding: "10px 14px",
              background: "linear-gradient(135deg, #00b0ff, #00d4ff)",
              border: "none",
              borderRadius: 10,
              color: "var(--color-text-strong)",
              fontFamily: "var(--font-display)",
              fontSize: 13, fontWeight: 800,
              cursor: "pointer",
            }}
          >
            ▶ Start (2 vragen)
          </button>
          <button
            onClick={dismiss}
            style={{
              padding: "10px 14px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 10,
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-body)",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Overslaan
          </button>
        </div>
      </div>
    );
  }

  // Stap 1: schoolsoort.
  if (stap === 1) {
    return (
      <div style={containerStyle()}>
        <Header n="1 van 2" titel="Op welke school zit je?" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <KeuzeKnop
            emoji="🎒"
            titel="Basisschool"
            sub="Groep 1 t/m 8"
            kleur="#00b0ff"
            onClick={() => { setSchoolsoort("po"); setStap(2); }}
          />
          <KeuzeKnop
            emoji="🎓"
            titel="Middelbaar"
            sub="VMBO · HAVO · VWO"
            kleur="#7c3aed"
            onClick={() => { setSchoolsoort("vo"); setStap(2); }}
          />
        </div>
      </div>
    );
  }

  // Stap 2 PO: kies groep direct (geen niveau-vraag nodig).
  if (stap === 2 && schoolsoort === "po") {
    return (
      <div style={containerStyle()}>
        <Header n="2 van 2" titel="In welke groep zit je?" onBack={() => setStap(1)} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {PO_GROEPEN.map((g) => (
            <button key={g.key} onClick={() => kiesGroep(g.key)} style={pillStyle("#00b0ff")}>
              {g.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Stap 2 VO: kies klas eerst, dan niveau.
  if (stap === 2 && schoolsoort === "vo") {
    return (
      <div style={containerStyle()}>
        <Header n="2 van 2" titel="Welke klas + niveau?" onBack={() => setStap(1)} />
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 6, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase" }}>Klas</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6, marginBottom: 10 }}>
          {VO_KLASSEN.map((k) => (
            <button key={k.key} onClick={() => setStap(3 + parseInt(k.key.replace("klas",""), 10))} style={pillStyle("#7c3aed")}>
              {k.label.replace("Klas ","")}
            </button>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4, lineHeight: 1.4 }}>
          Kies eerst je klas; daarna vragen we VMBO/HAVO/VWO.
        </div>
      </div>
    );
  }

  // Stap 3+: VO niveau (klasKey gecodeerd in stap 3..8).
  if (stap >= 4 && schoolsoort === "vo") {
    const klasNr = stap - 3;
    const klasKey = `klas${klasNr}`;
    return (
      <div style={containerStyle()}>
        <Header n="Bijna klaar" titel={`Klas ${klasNr} — VMBO, HAVO of VWO?`} onBack={() => setStap(2)} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {VO_NIVEAUS.map((n) => (
            <button key={n.key} onClick={() => kiesNiveau(klasKey, n.key)} style={pillStyle("#7c3aed")}>
              {n.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

function containerStyle() {
  return {
    marginBottom: 14,
    padding: "14px 16px",
    background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,176,255,0.04))",
    border: "1px solid rgba(0,212,255,0.40)",
    borderRadius: 14,
  };
}

function Header({ n, titel, onBack }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      {onBack && (
        <button
          onClick={onBack}
          style={{ background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 8, padding: "4px 10px", color: "rgba(255,255,255,0.7)", fontSize: 13, cursor: "pointer" }}
          aria-label="Terug"
        >←</button>
      )}
      <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: 0.4 }}>{n}</span>
      <span style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "var(--color-text-strong)" }}>{titel}</span>
    </div>
  );
}

function KeuzeKnop({ emoji, titel, sub, kleur, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "16px 14px",
        background: `${kleur}18`,
        border: `1.5px solid ${kleur}66`,
        borderRadius: 12,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        color: "var(--color-text-strong)",
        transition: "transform 150ms, background 150ms",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = `${kleur}30`; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = `${kleur}18`; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <span style={{ fontSize: 30 }}>{emoji}</span>
      <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: kleur }}>{titel}</span>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{sub}</span>
    </button>
  );
}

function pillStyle(kleur) {
  return {
    padding: "10px 8px",
    background: `${kleur}14`,
    border: `1px solid ${kleur}55`,
    borderRadius: 10,
    color: "var(--color-text-strong)",
    fontFamily: "var(--font-display)",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 150ms",
  };
}
