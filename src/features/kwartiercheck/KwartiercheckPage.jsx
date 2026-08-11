import { useState, useRef } from "react";
import supabase from "../../supabase";
import { CONCEPTEN, VAK_VOLGORDE, VAK_LABELS } from "./conceptMapping.js";
import { getVragenVoorConcept } from "./questions.js";
import { track } from "../../utils.js";
import { GratisBadge } from "../../subscription/ProBadge.jsx";

// ── Constanten ────────────────────────────────────────────────────
const OORDELEN = { beheerst: "beheerst", gedeeltelijk: "gedeeltelijk", nogniet: "nogniet" };
const OORDEEL_LABELS = {
  beheerst:     { emoji: "✅", tekst: "Beheerst",     kleur: "#00c853" },
  gedeeltelijk: { emoji: "🟡", tekst: "Bijna daar",   kleur: "#ffc107" },
  nogniet:      { emoji: "❌", tekst: "Nog niet",     kleur: "#ff5252" },
};

// Zeker-weten-meter (WhatsApp-feedback 11 aug: "alles gegokt, toch beheers ik
// dingen" + "12 vragen is te weinig voor een eerlijk beeld"). Twee wapens:
//  1. "Beheerst" vraagt nu een BEVESTIGINGSVRAAG: N1 goed + N2 goed + nóg een
//     andere niveau-1-vraag goed. Twee keer gokken is geluk; drie keer bijna
//     nooit. De extra vraag komt alleen bij kinderen die op "beheerst" af
//     koersen, dus de check blijft ~15 minuten.
//  2. Gok-detectie op snelheid: is élk goede antwoord binnen GOK_MS bevestigd
//     (te snel om de vraag echt te lezen), dan zeggen we eerlijk "Bijna daar"
//     in plaats van "Beheerst".
const GOK_MS = 3000;

// Adaptive scoring per concept:
//  - Niveau 1 fout → nogniet (stop meteen)
//  - N1 goed, niveau 2 fout → gedeeltelijk
//  - N1 + N2 goed, bevestiging (2e niveau-1-vraag) fout → gedeeltelijk
//  - N1 + N2 + bevestiging goed → beheerst (tenzij alles verdacht snel ging)
function bepaalOordeel(antwoorden, vragen) {
  const n1 = antwoorden.find((a) => a.niveau === 1);
  const n2 = antwoorden.find((a) => a.niveau === 2);
  if (!n1) return null;
  if (!n1.goed) return OORDELEN.nogniet;
  if (!n2) return OORDELEN.beheerst; // geen niveau-2-vraag beschikbaar — voordeel van de twijfel
  if (!n2.goed) return OORDELEN.gedeeltelijk;
  // Bevestigingsvraag (2e niveau-1-vraag, andere index dan de eerste).
  const bevestiging = antwoorden.filter((a) => a.niveau === 1)[1];
  const tweedeN1Bestaat = Array.isArray(vragen)
    && vragen.filter((v) => v.niveau === 1).length >= 2;
  if (tweedeN1Bestaat && !bevestiging) return OORDELEN.gedeeltelijk; // hoort niet voor te komen
  if (bevestiging && !bevestiging.goed) return OORDELEN.gedeeltelijk;
  // Gok-detectie: alle antwoorden verdacht snel → niet "beheerst" claimen.
  const msKnown = antwoorden.filter((a) => typeof a.ms === "number");
  if (msKnown.length === antwoorden.length && msKnown.every((a) => a.ms < GOK_MS)) {
    return OORDELEN.gedeeltelijk;
  }
  return OORDELEN.beheerst;
}

// Welke vragen sturen we voor één concept? Adaptief:
//  N1 → bij fout: stop (nogniet)
//     → bij goed: N2 → bij fout: stop (gedeeltelijk)
//                    → bij goed: 2e N1-vraag (bevestiging) → stop
// Max 3 vragen per concept; de derde alleen op de route naar "beheerst".
function volgendeVraagIdx(vragen, antwoorden) {
  // Selecteer op níveau, niet op array-index: de vragenlijst bevat per
  // concept meerdere niveau-1-vragen (1a/1b), dus index 1 is NIET niveau 2.
  if (antwoorden.length === 0) {
    const i = vragen.findIndex((v) => v.niveau === 1);
    return i === -1 ? null : i;
  }
  const laatste = antwoorden[antwoorden.length - 1];
  if (!laatste.goed) return null;       // fout → oordeel vastgesteld, klaar
  const n2Beantwoord = antwoorden.some((a) => a.niveau === 2);
  if (!n2Beantwoord) {
    const i = vragen.findIndex((v) => v.niveau === 2);
    return i === -1 ? null : i;
  }
  // N1 + N2 goed → bevestigingsvraag: een niveau-1-vraag die nog niet is gebruikt.
  const n1Aantal = antwoorden.filter((a) => a.niveau === 1).length;
  if (n1Aantal >= 2) return null; // bevestiging al beantwoord → klaar
  const gebruikt = new Set(antwoorden.map((a) => a.idx).filter((x) => x != null));
  const i = vragen.findIndex((v, vi) => v.niveau === 1 && !gebruikt.has(vi));
  return i === -1 ? null : i;
}

// ── Stijlen ──────────────────────────────────────────────────────
const S = {
  page: {
    minHeight: "100vh",
    background: "#0f1729",
    color: "#e0e6f0",
    fontFamily: "var(--font-body, system-ui, sans-serif)",
    padding: "0 0 48px",
  },
  header: {
    padding: "16px 20px 12px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 14,
    padding: "20px 18px",
  },
  btn: {
    padding: "13px 22px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--font-display, system-ui, sans-serif)",
    fontSize: 15,
    fontWeight: 700,
    transition: "opacity 0.15s",
  },
};

// ═══════════════════════════════════════════════════════════════════
// Scherm 1: Introstap (naam + groep)
// ═══════════════════════════════════════════════════════════════════
function IntroScherm({ email, naam, groep, onStart }) {
  const [localNaam, setLocalNaam] = useState(naam || "");
  const [localGroep, setLocalGroep] = useState(groep || "8");

  const valid = localNaam.trim().length >= 2;

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "28px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>🔍</div>
        <h1 style={{ fontFamily: "var(--font-display, system-ui)", fontSize: 24, color: "#fff", margin: "0 0 8px" }}>
          Gratis Kwartiercheck
          <GratisBadge size="md" style={{ marginLeft: 10 }} />
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>
          Ontdek in ~15 minuten per onderwerp of jouw kind het <em>beheerst</em>,{" "}
          <em>bijna snapt</em> of nog <em>extra oefening</em> nodig heeft.
          Daarna krijg je per e-mail een persoonlijk weekschema.
        </p>
      </div>

      <div style={{ ...S.card, display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 4, display: "block" }}>
            Naam van je kind
          </label>
          <input
            type="text"
            value={localNaam}
            onChange={(e) => setLocalNaam(e.target.value)}
            placeholder="bv. Emma"
            style={{
              width: "100%", padding: "11px 14px",
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 10, color: "#e0e6f0", fontSize: 15, fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 4, display: "block" }}>
            Groep
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            {["6", "7", "8"].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setLocalGroep(g)}
                style={{
                  ...S.btn,
                  flex: 1, padding: "10px 0",
                  background: localGroep === g ? "rgba(255,107,53,0.2)" : "rgba(255,255,255,0.05)",
                  border: localGroep === g ? "1.5px solid #ff6b35" : "1px solid rgba(255,255,255,0.12)",
                  color: localGroep === g ? "#ff6b35" : "rgba(255,255,255,0.6)",
                  fontSize: 16,
                }}
              >Groep {g}</button>
            ))}
          </div>
        </div>

        <button
          type="button"
          disabled={!valid}
          onClick={() => onStart(localNaam.trim(), localGroep)}
          style={{
            ...S.btn,
            width: "100%",
            background: valid ? "linear-gradient(135deg, #ff6b35, #ff8c42)" : "rgba(255,255,255,0.08)",
            color: valid ? "#fff" : "rgba(255,255,255,0.3)",
            marginTop: 4,
          }}
        >
          Start de check →
        </button>
      </div>

      <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 16 }}>
        12 onderwerpen · max 3 vragen per onderwerp · geen account nodig
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Scherm 2: Quiz-flow per concept
// ═══════════════════════════════════════════════════════════════════
function QuizScherm({ naam, groep, onDone }) {
  const totaal = CONCEPTEN.length;
  const [conceptIdx, setConceptIdx] = useState(0);
  const [antwoordenPerConcept, setAntwoordenPerConcept] = useState({});
  const [gekozenOptie, setGekozenOptie] = useState(null);
  const [bevestigd, setBevestigd] = useState(false);

  const concept = CONCEPTEN[conceptIdx];
  const vragen = getVragenVoorConcept(concept.id);
  const antwoorden = antwoordenPerConcept[concept.id] || [];
  const vraagIdx = volgendeVraagIdx(vragen, antwoorden);
  const vraag = vraagIdx !== null ? vragen[vraagIdx] : null;

  const progressPct = Math.round((conceptIdx / totaal) * 100);

  // Zeker-weten-meter: meet hoe snel er geantwoord wordt (gok-detectie).
  const vraagStartRef = useRef(Date.now());

  const bevestigAntwoord = () => {
    if (gekozenOptie === null || !vraag) return;
    const goed = gekozenOptie === vraag.correct;
    const ms = Date.now() - vraagStartRef.current;
    const nieuw = [...antwoorden, { niveau: vraag.niveau, goed, idx: vraagIdx, ms }];
    const bijgewerkt = { ...antwoordenPerConcept, [concept.id]: nieuw };
    setAntwoordenPerConcept(bijgewerkt);
    setBevestigd(true);

    // Na korte vertraging: volgende vraag of volgend concept
    setTimeout(() => {
      setGekozenOptie(null);
      setBevestigd(false);
      vraagStartRef.current = Date.now();
      const volgende = volgendeVraagIdx(vragen, nieuw);
      if (volgende !== null) {
        // Nog een vraag voor dit concept
      } else {
        // Concept klaar
        if (conceptIdx + 1 < totaal) {
          setConceptIdx(conceptIdx + 1);
        } else {
          // Alle concepten klaar — oordelen berekenen en door
          const scores = {};
          CONCEPTEN.forEach((c) => {
            const ant = bijgewerkt[c.id] || [];
            scores[c.id] = { oordeel: bepaalOordeel(ant, getVragenVoorConcept(c.id)) || OORDELEN.nogniet };
          });
          onDone(scores);
        }
      }
    }, goed ? 600 : 900);
  };

  if (!vraag) return null; // edge case

  return (
    <div style={{ maxWidth: 580, margin: "0 auto", padding: "20px 18px" }}>
      {/* Voortgangsbalk */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>
          <span>Concept {conceptIdx + 1} / {totaal}</span>
          <span>{progressPct}% klaar</span>
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 99 }}>
          <div style={{ height: "100%", width: `${progressPct}%`, background: "linear-gradient(90deg, #ff6b35, #ffc107)", borderRadius: 99, transition: "width 0.4s" }} />
        </div>
      </div>

      {/* Concept-label */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6, color: "rgba(255,255,255,0.4)" }}>
          {VAK_LABELS[concept.vak]} — {concept.label}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>
          Vraag {antwoorden.length + 1}
        </div>
      </div>

      {/* Vraag */}
      <div style={{ ...S.card, marginBottom: 14 }}>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.55 }}>
          {vraag.vraag}
        </p>
      </div>

      {/* Opties */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {vraag.opties.map((opt, i) => {
          let bg = "rgba(255,255,255,0.04)";
          let border = "1px solid rgba(255,255,255,0.1)";
          let color = "#e0e6f0";
          if (gekozenOptie === i) {
            if (!bevestigd) {
              bg = "rgba(255,107,53,0.15)"; border = "1.5px solid #ff6b35"; color = "#ff6b35";
            } else if (i === vraag.correct) {
              bg = "rgba(0,200,83,0.15)"; border = "1.5px solid #00c853"; color = "#00c853";
            } else {
              bg = "rgba(255,82,82,0.15)"; border = "1.5px solid #ff5252"; color = "#ff5252";
            }
          } else if (bevestigd && i === vraag.correct) {
            bg = "rgba(0,200,83,0.1)"; border = "1px solid rgba(0,200,83,0.4)"; color = "#00c853";
          }
          return (
            <button
              key={i}
              type="button"
              disabled={bevestigd}
              onClick={() => !bevestigd && setGekozenOptie(i)}
              style={{
                ...S.btn,
                textAlign: "left", fontSize: 14, fontWeight: 500,
                background: bg, border, color,
                padding: "12px 16px",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Bevestig-knop */}
      <button
        type="button"
        disabled={gekozenOptie === null || bevestigd}
        onClick={bevestigAntwoord}
        style={{
          ...S.btn,
          width: "100%",
          background: gekozenOptie !== null && !bevestigd ? "linear-gradient(135deg, #ff6b35, #ff8c42)" : "rgba(255,255,255,0.06)",
          color: gekozenOptie !== null && !bevestigd ? "#fff" : "rgba(255,255,255,0.25)",
        }}
      >
        Bevestig antwoord
      </button>

      <div style={{ textAlign: "center", marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
        {naam} · Groep {groep}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Scherm 3: Resultaten + e-mailcapture
// ═══════════════════════════════════════════════════════════════════
function ResultaatScherm({ naam, groep, email, scores, onHome }) {
  const [localEmail, setLocalEmail] = useState(email || "");
  const [verzonden, setVerzonden] = useState(false);
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");

  const heeftGap = CONCEPTEN.some((c) => scores[c.id]?.oordeel !== OORDELEN.beheerst);
  const topGaps = CONCEPTEN
    .filter((c) => scores[c.id]?.oordeel === OORDELEN.nogniet)
    .concat(CONCEPTEN.filter((c) => scores[c.id]?.oordeel === OORDELEN.gedeeltelijk))
    .slice(0, 3);

  const verstuurMail = async () => {
    if (!localEmail || !localEmail.includes("@")) { setFout("Voer een geldig e-mailadres in."); return; }
    setBezig(true);
    setFout("");
    try {
      track("kwartiercheck_mail_aangevraagd", { groep });
      const res = await fetch("/api/kwartiercheck-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: localEmail, naam_kind: naam, groep, scores }),
      });
      if (!res.ok) throw new Error("server");
      setVerzonden(true);
    } catch {
      setFout("Iets ging mis. Probeer het opnieuw.");
    } finally {
      setBezig(false);
    }
  };

  return (
    <div style={{ maxWidth: 620, margin: "0 auto", padding: "24px 18px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>📊</div>
        <h2 style={{ fontFamily: "var(--font-display, system-ui)", fontSize: 22, color: "#fff", margin: "0 0 6px" }}>
          Kwartiercheck klaar voor {naam}
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0 }}>Groep {groep}</p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "8px auto 0", maxWidth: 440, lineHeight: 1.5 }}>
          Dit is een <strong>eerste indruk</strong> op basis van een paar vragen per onderwerp — geen toets.
          "Beheerst" verschijnt pas na drie goede antwoorden op rij; zeker weten doe je door het
          onderwerp in de app te oefenen.
        </p>
      </div>

      {/* Scores per vak */}
      {VAK_VOLGORDE.map((vak) => {
        const vakConcepten = CONCEPTEN.filter((c) => c.vak === vak);
        return (
          <div key={vak} style={{ ...S.card, marginBottom: 12 }}>
            <div style={{ fontFamily: "var(--font-display, system-ui)", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>
              {VAK_LABELS[vak]}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {vakConcepten.map((c) => {
                const o = scores[c.id]?.oordeel || OORDELEN.nogniet;
                const lbl = OORDEEL_LABELS[o];
                return (
                  <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 16, minWidth: 22 }}>{lbl.emoji}</span>
                    <span style={{ flex: 1, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{c.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: lbl.kleur }}>{lbl.tekst}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Aanbevelingen */}
      {heeftGap && topGaps.length > 0 && (
        <div style={{ ...S.card, background: "rgba(255,107,53,0.07)", border: "1px solid rgba(255,107,53,0.2)", marginBottom: 16 }}>
          <div style={{ fontFamily: "var(--font-display, system-ui)", fontSize: 13, fontWeight: 700, color: "#ff8c42", marginBottom: 8 }}>
            💡 Aanbevolen om als eerste te oefenen
          </div>
          {topGaps.map((c) => (
            <div key={c.id} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>
              → {c.label}
            </div>
          ))}
        </div>
      )}

      {/* E-mailcapture */}
      {!verzonden ? (
        <div style={{ ...S.card, background: "rgba(0,200,83,0.06)", border: "1px solid rgba(0,200,83,0.2)", marginBottom: 16 }}>
          <div style={{ fontFamily: "var(--font-display, system-ui)", fontSize: 14, fontWeight: 700, color: "#00c853", marginBottom: 6 }}>
            📬 Stuur het weekschema naar je mail
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: "0 0 12px", lineHeight: 1.5 }}>
            Ontvang een persoonlijk weekschema op basis van deze check — met directe oefenlinks per onderwerp.
          </p>
          <input
            type="email"
            value={localEmail}
            onChange={(e) => setLocalEmail(e.target.value)}
            placeholder="jouw@email.nl"
            style={{
              width: "100%", padding: "11px 14px", marginBottom: 10,
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 10, color: "#e0e6f0", fontSize: 14, fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
          {fout && <div style={{ fontSize: 12, color: "#ff5252", marginBottom: 8 }}>{fout}</div>}
          <button
            type="button"
            disabled={bezig}
            onClick={verstuurMail}
            style={{
              ...S.btn,
              width: "100%",
              background: "linear-gradient(135deg, #00c853, #69f0ae)",
              color: "#003a15",
              opacity: bezig ? 0.6 : 1,
            }}
          >
            {bezig ? "Versturen..." : "Stuur weekschema →"}
          </button>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: "8px 0 0", textAlign: "center" }}>
            Geen spam. Je krijgt het overzicht + daarna elke maandag één week uit het plan (max 4 mails totaal). Afmelden kan altijd.
          </p>
        </div>
      ) : (
        <div style={{ ...S.card, background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.25)", marginBottom: 16, textAlign: "center" }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>✅</div>
          <div style={{ fontWeight: 700, color: "#00c853", marginBottom: 4 }}>Mail verstuurd!</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            Check je inbox op {localEmail} — het weekschema staat erin.
          </div>
        </div>
      )}

      {/* Terugknop */}
      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          onClick={onHome}
          style={{ ...S.btn, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", fontSize: 13 }}
        >
          ← Terug naar Leerkwartier
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// Hoofd-component
// ═══════════════════════════════════════════════════════════════════
export default function KwartiercheckPage({ emailVanIntro, onHome }) {
  const [stap, setStap] = useState("intro"); // "intro" | "quiz" | "resultaat"
  const [naam, setNaam] = useState("");
  const [groep, setGroep] = useState("8");
  const [scores, setScores] = useState(null);

  const handleStart = (n, g) => {
    setNaam(n);
    setGroep(g);
    track("kwartiercheck_gestart", { groep: g });
    setStap("quiz");
  };

  const handleQuizDone = (scoreData) => {
    setScores(scoreData);
    track("kwartiercheck_klaar", { groep });
    setStap("resultaat");
  };

  return (
    <div style={S.page}>
      {/* Header */}
      <div style={S.header}>
        <button
          type="button"
          onClick={onHome}
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 22, padding: 0 }}
        >←</button>
        <div style={{ fontFamily: "var(--font-display, system-ui)", fontSize: 16, fontWeight: 700 }}>
          Kwartiercheck
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Leerkwartier</div>
      </div>

      {stap === "intro" && (
        <IntroScherm
          email={emailVanIntro || ""}
          naam=""
          groep="8"
          onStart={handleStart}
        />
      )}
      {stap === "quiz" && (
        <QuizScherm
          naam={naam}
          groep={groep}
          onDone={handleQuizDone}
        />
      )}
      {stap === "resultaat" && scores && (
        <ResultaatScherm
          naam={naam}
          groep={groep}
          email={emailVanIntro || ""}
          scores={scores}
          onHome={onHome}
        />
      )}
    </div>
  );
}
