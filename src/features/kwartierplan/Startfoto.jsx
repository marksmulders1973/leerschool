// Startfoto — Kwartierplan stap 2 (sessie 1, 2026-07-07).
//
// Full-screen overlay: het kind beantwoordt 12 vragen (4 per pijler),
// ~5-7 minuten. Geen uitleg tussendoor (dit is een foto, geen les) — wel
// korte momentum-bevestigingen bij de pijler-wissels. Daarna een rapport
// voor de ouder: score per pijler + 3-5 aanbevolen onderwerpen, opgeslagen
// als baseline zodat latere rapporten "+X% sinds de startfoto" kunnen tonen.
//
// Anti-spoof: tijd per vraag wordt gemeten; gemiddeld < 8 s = "snel
// geklikt"-kanttekening in het rapport (positief geframed, nooit
// beschuldigend — ontwerp-doc risico 2 "surveillance-gevoel").

import { useState, useEffect, useRef } from "react";
import useFocusTrap from "../../shared/hooks/useFocusTrap.js";
import { sanitizeSvg } from "../../shared/sanitizeSvg.js";
import { buildStartfoto, aanbevolenPaden, PIJLERS } from "./startfotoBuilder.js";
import { saveStartfoto } from "./kwartierplanRepo.js";

const PIJLER_BY_ID = Object.fromEntries(PIJLERS.map((p) => [p.id, p]));

function SvgFiguur({ svg }) {
  if (!svg) return null;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "12px 0", padding: 12, background: "#162033", borderRadius: 12 }}
      dangerouslySetInnerHTML={{
        __html: sanitizeSvg(svg.replace(/<svg\b([^>]*)>/i, (m, attrs) => {
          const cleaned = attrs
            .replace(/\s(width|height)=("[^"]*"|'[^']*')/gi, "")
            .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "");
          return `<svg${cleaned} style="width:100%;max-width:420px;height:auto;display:block;">`;
        })),
      }}
    />
  );
}

export default function Startfoto({ parentUserId, childName, heeftBaseline, onClose, onSaved }) {
  const [fase, setFase] = useState("laden"); // laden | intro | vragen | rapport | fout
  const [vragen, setVragen] = useState([]);
  const [idx, setIdx] = useState(0);
  const [antwoorden, setAntwoorden] = useState([]); // { pijler, correct, ms }
  const [rapport, setRapport] = useState(null);
  const [saveError, setSaveError] = useState(null);
  const vraagStartRef = useRef(0);

  const trapRef = useFocusTrap(true, {
    onEsc: () => {
      if (fase === "vragen") {
        if (window.confirm("Stoppen met de startfoto? De antwoorden tot nu toe worden niet bewaard.")) onClose();
      } else {
        onClose();
      }
    },
  });

  useEffect(() => {
    let alive = true;
    buildStartfoto()
      .then((v) => {
        if (!alive) return;
        if (v.length < 6) { setFase("fout"); return; }
        setVragen(v);
        setFase("intro");
      })
      .catch(() => { if (alive) setFase("fout"); });
    return () => { alive = false; };
  }, []);

  const startVragen = () => {
    setFase("vragen");
    vraagStartRef.current = Date.now();
  };

  const kies = async (optIdx) => {
    const vraag = vragen[idx];
    const ms = Date.now() - vraagStartRef.current;
    const volgende = [...antwoorden, { pijler: vraag.pijler, correct: optIdx === vraag.answer, ms }];
    setAntwoorden(volgende);
    if (idx + 1 < vragen.length) {
      setIdx(idx + 1);
      vraagStartRef.current = Date.now();
      return;
    }
    // Klaar — rapport bouwen + opslaan.
    const scores = {};
    for (const p of PIJLERS) scores[p.id] = { correct: 0, total: 0 };
    for (const a of volgende) {
      if (!scores[a.pijler]) scores[a.pijler] = { correct: 0, total: 0 };
      scores[a.pijler].total += 1;
      if (a.correct) scores[a.pijler].correct += 1;
    }
    const paden = aanbevolenPaden(scores);
    const totaalMs = volgende.reduce((s, a) => s + a.ms, 0);
    const avgSeconds = Math.round(totaalMs / volgende.length / 100) / 10;
    const rushed = avgSeconds < 8;
    const correctTotal = volgende.filter((a) => a.correct).length;
    setRapport({ scores, paden, avgSeconds, rushed, correctTotal, totaal: volgende.length });
    setFase("rapport");
    const { error } = await saveStartfoto({
      parentUserId, childName,
      perPijlerScores: scores,
      recommendedPaths: paden,
      questionsTotal: volgende.length,
      correctTotal,
      avgSeconds,
      rushed,
      isBaseline: !heeftBaseline,
    });
    if (error) setSaveError(error.message);
    else if (onSaved) onSaved();
  };

  const vraag = vragen[idx];
  const pijler = vraag ? PIJLER_BY_ID[vraag.pijler] : null;
  // Momentum-regel bij de start van een nieuwe pijler (behalve de eerste).
  const nieuwePijler = idx > 0 && vragen[idx - 1] && vragen[idx - 1].pijler !== vraag?.pijler;

  return (
    <div
      ref={trapRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Startfoto van ${childName}`}
      style={{
        position: "fixed", inset: 0, zIndex: 10000,
        background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)",
        overflowY: "auto", padding: "20px 16px 40px",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto", fontFamily: "var(--font-body)", color: "var(--color-text)" }}>

        {fase === "laden" && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-display)" }}>
            Vragen klaarzetten…
          </div>
        )}

        {fase === "fout" && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>😕</div>
            <div style={{ marginBottom: 16 }}>De startfoto kon niet geladen worden. Probeer het later nog eens.</div>
            <button onClick={onClose} style={knopSecundair()}>Sluiten</button>
          </div>
        )}

        {fase === "intro" && (
          <div style={{ textAlign: "center", paddingTop: 28 }}>
            <div style={{ fontSize: 46, marginBottom: 8 }}>📸</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "var(--color-text-strong)", margin: "0 0 10px" }}>
              Startfoto voor {childName}
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", margin: "0 0 6px" }}>
              Geef het toestel aan <strong style={{ color: "#ffd54f" }}>{childName}</strong>.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: "0 0 18px" }}>
              {vragen.length} vragen over taal, rekenen en studievaardigheden — ongeveer 5 minuten.
              Het is geen toets: fout mag, gokken hoeft niet. Zo zien we samen waar je nu staat.
            </p>
            <button onClick={startVragen} autoFocus style={knopPrimair()}>
              Ik ben er klaar voor →
            </button>
            <div>
              <button onClick={onClose} style={{ ...knopTekst(), marginTop: 14 }}>Toch niet nu</button>
            </div>
          </div>
        )}

        {fase === "vragen" && vraag && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, color: "#ffd54f" }}>
                {pijler?.emoji} {pijler?.label}
              </span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                Vraag {idx + 1} van {vragen.length}
              </span>
            </div>
            <div style={{ height: 5, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden", marginBottom: 14 }}>
              <div style={{ width: `${(idx / vragen.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #ffd54f, #00c853)", transition: "width 200ms ease" }} />
            </div>
            {nieuwePijler && (
              <div style={{ fontSize: 12.5, color: "#69f0ae", fontWeight: 700, marginBottom: 10, fontFamily: "var(--font-display)" }}>
                💪 Goed bezig — nu {pijler?.label.toLowerCase()}!
              </div>
            )}
            <div style={{ fontSize: 16, lineHeight: 1.55, color: "var(--color-text-strong)", whiteSpace: "pre-line", marginBottom: 8 }}>
              {vraag.q}
            </div>
            <SvgFiguur svg={vraag.svg} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
              {vraag.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => kies(i)}
                  style={{
                    textAlign: "left", padding: "13px 16px", borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.05)",
                    color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14.5,
                    lineHeight: 1.4, cursor: "pointer", minHeight: "var(--tap-target-min, 44px)",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {fase === "rapport" && rapport && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 18 }}>
              <div style={{ fontSize: 40, marginBottom: 6 }}>🎉</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--color-text-strong)", margin: "0 0 4px" }}>
                Klaar, goed gedaan {childName}!
              </h2>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                Geef het toestel maar terug — hieronder staat de startfoto.
              </p>
            </div>

            <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.03)", padding: "14px 16px", marginBottom: 12 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.75)", marginBottom: 10 }}>
                📊 Score per onderdeel ({rapport.correctTotal}/{rapport.totaal} goed)
              </div>
              {PIJLERS.map((p) => {
                const s = rapport.scores[p.id] || { correct: 0, total: 0 };
                const pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
                const kleur = pct >= 75 ? "#00c853" : pct >= 50 ? "#ffd54f" : "#ff7043";
                return (
                  <div key={p.id} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                      <span>{p.emoji} {p.label}</span>
                      <span style={{ color: kleur, fontWeight: 700 }}>{s.correct}/{s.total}</span>
                    </div>
                    <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: kleur }} />
                    </div>
                  </div>
                );
              })}
              {rapport.rushed && (
                <div style={{ fontSize: 12, color: "#ffb74d", marginTop: 8, lineHeight: 1.5 }}>
                  ⚡ De vragen zijn vlot beantwoord (gem. {rapport.avgSeconds}s per vraag) — de foto
                  is misschien wat minder scherp. Rustig opnieuw doen mag altijd.
                </div>
              )}
            </div>

            {rapport.paden.length > 0 && (
              <div style={{ borderRadius: 14, border: "1px solid rgba(0,200,83,0.25)", background: "rgba(0,200,83,0.05)", padding: "14px 16px", marginBottom: 12 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#69f0ae", marginBottom: 8 }}>
                  🧭 Hiermee zou ik beginnen
                </div>
                {rapport.paden.map((p) => (
                  <div key={p.id} style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 5, lineHeight: 1.4 }}>
                    {p.emoji} {p.title}
                  </div>
                ))}
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginTop: 8, lineHeight: 1.5 }}>
                  In de volgende update maakt Leerkwartier hier automatisch een dag-voor-dag
                  kwartierplan van. Je kind vindt deze onderwerpen nu al via 📚 Leren.
                </div>
              </div>
            )}

            <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 16 }}>
              De startfoto is een momentopname om samen te oefenen — geen voorspelling.
              Leerkwartier helpt oefenen; het schooladvies komt van school.
            </div>

            {saveError && (
              <div style={{ fontSize: 12, color: "#ff8a80", marginBottom: 10 }}>
                Opslaan lukte niet ({saveError}) — de uitslag hierboven blijft zichtbaar tot je dit scherm sluit.
              </div>
            )}

            <button onClick={onClose} autoFocus style={{ ...knopPrimair(), width: "100%" }}>
              Klaar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function knopPrimair() {
  return {
    padding: "13px 26px", borderRadius: 12, border: "none", cursor: "pointer",
    background: "linear-gradient(135deg, #ffd54f, #ffb300)", color: "#1a1a00",
    fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800,
    minHeight: "var(--tap-target-min, 44px)",
  };
}

function knopSecundair() {
  return {
    padding: "11px 20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong)",
    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer",
    minHeight: "var(--tap-target-min, 44px)",
  };
}

function knopTekst() {
  return {
    background: "none", border: "none", cursor: "pointer",
    color: "rgba(255,255,255,0.45)", fontSize: 12.5, textDecoration: "underline",
    fontFamily: "var(--font-body)", minHeight: "var(--tap-target-min, 44px)",
  };
}
