// ══════════════════════════════════════════════════════════════════════
// Oefenboekje op maat — Familie-feature 3 "Printbaar op maat" (Mark 31 jul 2026).
//
// Premium Familie-laag: een printbaar oefenboekje op maat met precies dat waar
// een kind moeite mee heeft. Twee bronnen:
//   • CONCEPT-modus  — kies (of deeplink ?pad=<id>) één onderwerp. Gebruikt door
//     de OefenboekjeTrigger op het klaar-scherm van een leerpad.
//   • HISTORIE-modus — samengesteld uit de OEFENGESCHIEDENIS: de zwakste
//     concepten van dit kind (mastery-records → kiesZwakkeConcepten). Bereik via
//     ?bron=historie of de "uit de oefengeschiedenis"-knop. Zo wordt het écht
//     "op maat", niet "kies zelf maar iets".
//
// Bron = de checks van de leerpaden zelf (oefenitems + antwoordblad). Kosten €0:
// printen/PDF via de browser (window.print), geen server, geen AI. Zie memory
// idea_studiebol_premium_printbare_hulp.
//
// Zichtbaarheid: bèta-live binnen de Familie-laag (Mark 1 aug: niet meer geheim);
// zodra de paywall live gaat → achter PaywallGate "oefenboekje-op-maat" (Familie).
// ══════════════════════════════════════════════════════════════════════
import { useState, useEffect, useRef, useMemo } from "react";
import { getLearnPath } from "../../learnPaths/pathLoaders.js";
import PrintKnoppen from "../../shared/ui/PrintKnoppen.jsx";
import { shuffleOptiesSeeded } from "../../shared/shuffleOpties.js";
import { FamilieMeer } from "../familie/familieUi.jsx";
import { loadMasteryForPlayer } from "../mastery/mastery.js";
import { kiesZwakkeConcepten, verdeelItems } from "./opMaat.js";

// Presets = een handvol veelvoorkomende struikelonderwerpen zodat Mark kan
// spelen zonder pad-id's te kennen. De trigger deeplinkt met ?pad=<id>.
const PRESETS = [
  { id: "delen-po", label: "➗ Delen" },
  { id: "tafels-po", label: "✖️ Tafels" },
  { id: "breuken-po", label: "🍕 Breuken" },
  { id: "spelling-ei-ij-au-ou", label: "📝 Spelling ei/ij" },
  { id: "topografie-europa-po", label: "🌍 Topografie Europa" },
];

const LETTERS = ["A", "B", "C", "D", "E", "F"];

// Huidige speler-naam uit localStorage (zelfde bron als de Paraatheidsmeter).
function huidigeSpelerNaam() {
  try {
    const u = JSON.parse(localStorage.getItem("ls_user") || "{}");
    return (u.name || "").trim();
  } catch {
    return "";
  }
}

// Kleine markdown-opschoner voor print (vet/cursief-tekens weg, $-latex kaal).
function schoon(s) {
  return String(s ?? "")
    .replace(/\*\*/g, "")
    .replace(/(^|[^\w])[*_]([^*_]+)[*_]/g, "$1$2")
    .replace(/\$/g, "")
    .trim();
}

// Bouw de oefenitems uit de checks van een pad: platgeslagen, max N, met een
// nette vraag + opties + juist antwoord + korte uitleg voor het antwoordblad.
function bouwItems(path, max = 12) {
  if (!path || !Array.isArray(path.steps)) return [];
  const items = [];
  for (const step of path.steps) {
    const checks = step.checks || (step.check ? [step.check] : []);
    for (const c of checks) {
      if (!c || !c.q || !Array.isArray(c.options)) continue;
      // Opties schudden zoals de app zelf doet — anders is het juiste antwoord
      // altijd "A" (bron-checks hebben answer:0) en ziet een kind het patroon.
      // Seeded = deterministisch (zelfde boekje bij herprinten).
      const q = shuffleOptiesSeeded(
        { ...c, answer: typeof c.answer === "number" ? c.answer : c.options.indexOf(c.answer) },
        `${path.id || "boekje"}::${items.length}`
      );
      const ans = q.answer;
      if (ans < 0 || ans >= q.options.length) continue;
      const uitleg = schoon(
        c.uitlegPad?.niveaus?.basis ||
          (Array.isArray(c.uitlegPad?.stappen) ? c.uitlegPad.stappen[0]?.tekst : "") ||
          c.explanation ||
          ""
      );
      items.push({
        vraag: schoon(c.q),
        opties: q.options.map((o) => schoon(o)),
        goedIdx: ans,
        goedTekst: schoon(q.options[ans]),
        uitleg,
      });
      if (items.length >= max) return items;
    }
  }
  return items;
}

// Eerste bruikbare uitgewerkte voorbeeld (voor de "zo doe je het"-box vooraan).
function eersteVoorbeeld(path) {
  if (!path || !Array.isArray(path.steps)) return "";
  for (const step of path.steps) {
    const checks = step.checks || (step.check ? [step.check] : []);
    for (const c of checks) {
      const t = c?.uitlegPad?.niveaus?.basis || c?.explanation;
      if (t) return schoon(t);
    }
  }
  return "";
}

export default function OefenboekjePagina({ setPage }) {
  const params = (() => {
    try { return new URLSearchParams(window.location.search || ""); } catch { return new URLSearchParams(); }
  })();
  const [modus, setModus] = useState(() =>
    params.get("bron") === "historie" || params.get("historie") === "1" ? "historie" : "concept"
  );
  const [pathId, setPathId] = useState(() => params.get("pad") || "delen-po");
  const [path, setPath] = useState(null);
  const [laadFout, setLaadFout] = useState(false);
  const [naam, setNaam] = useState("");
  const reqRef = useRef(0);

  // ── CONCEPT-modus: één gekozen pad laden ──
  useEffect(() => {
    if (modus !== "concept") return;
    const my = ++reqRef.current;
    setPath(null);
    setLaadFout(false);
    getLearnPath(pathId)
      .then((p) => {
        if (my !== reqRef.current) return; // een nieuwere keuze wint (race-guard)
        if (!p) setLaadFout(true);
        else setPath(p);
      })
      .catch(() => {
        if (my === reqRef.current) setLaadFout(true);
      });
  }, [pathId, modus]);

  // ── HISTORIE-modus: zwakste concepten van dit kind → gemengd boekje ──
  const [histItems, setHistItems] = useState([]);
  const [histConcepten, setHistConcepten] = useState([]);
  const [histStatus, setHistStatus] = useState("laden"); // laden | leeg | klaar

  useEffect(() => {
    if (modus !== "historie") return;
    let alive = true;
    setHistStatus("laden");
    const speler = huidigeSpelerNaam();
    if (!speler) {
      setHistStatus("leeg");
      setHistConcepten([]);
      setHistItems([]);
      return;
    }
    loadMasteryForPlayer(speler)
      .then(async (recs) => {
        const zwak = kiesZwakkeConcepten(recs, { maxConcepten: 4 });
        if (!zwak.length) {
          if (alive) { setHistStatus("leeg"); setHistConcepten([]); setHistItems([]); }
          return;
        }
        const verdeling = verdeelItems(zwak.length, 12);
        const paden = await Promise.all(zwak.map((z) => getLearnPath(z.id).catch(() => null)));
        if (!alive) return;
        const items = [];
        paden.forEach((p, i) => { if (p) items.push(...bouwItems(p, verdeling[i])); });
        setHistConcepten(zwak);
        setHistItems(items);
        setHistStatus(items.length ? "klaar" : "leeg");
      })
      .catch(() => { if (alive) setHistStatus("leeg"); });
    return () => { alive = false; };
  }, [modus]);

  const conceptItems = useMemo(() => bouwItems(path), [path]);
  const voorbeeld = useMemo(() => eersteVoorbeeld(path), [path]);

  // Actieve bron afhankelijk van de modus.
  const items = modus === "historie" ? histItems : conceptItems;
  const conceptTitel = modus === "historie" ? "Jouw oefenpunten" : (path?.title ? schoon(path.title) : "");
  const conceptEmoji = modus === "historie" ? "🎯" : (path?.emoji || "📘");

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .boekje-print, .boekje-print * { visibility: visible !important; }
          .boekje-print { position: absolute; left: 0; top: 0; width: 100%; color: #000; background: #fff; }
          .boekje-noprint { display: none !important; }
          .boekje-pagina { page-break-after: always; }
          .boekje-pagina:last-child { page-break-after: auto; }
          @page { margin: 16mm 14mm; }
        }
      `}</style>

      {/* ── Bediening (niet mee-printen) ── */}
      <div className="boekje-noprint" style={{ maxWidth: 760, margin: "0 auto", padding: "18px 16px 8px" }}>
        <button onClick={() => setPage && setPage("familie")} style={linkBtn}>← terug</button>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, margin: 0 }}>
            📘 Oefenboekje op maat
          </h1>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>
            bèta
          </span>
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.55, marginTop: 6 }}>
          Een printbaar oefenboekje met precies dat waar je kind moeite mee heeft — méér oefening op
          één onderwerp, met een uitgewerkt voorbeeld vooraf en een antwoordblad achteraan.
        </p>

        {/* Modus-schakelaar */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", margin: "12px 0 4px", fontSize: 13, flexWrap: "wrap" }}>
          <span style={{ color: "var(--color-text-muted, #8899aa)" }}>Vul het boekje met:</span>
          <button onClick={() => setModus("concept")} style={pill(modus === "concept")}>een gekozen onderwerp</button>
          <button onClick={() => setModus("historie")} style={pill(modus === "historie")}>🎯 uit de oefengeschiedenis</button>
        </div>

        {/* CONCEPT-modus: onderwerp kiezen */}
        {modus === "concept" && (
          <>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", margin: "10px 0 6px" }}>Kies een onderwerp</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {PRESETS.map((p) => {
                const aan = p.id === pathId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPathId(p.id)}
                    style={{
                      padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700,
                      border: aan ? "1.5px solid #ffd54f" : "1.5px solid rgba(255,255,255,0.18)",
                      background: aan ? "rgba(255,213,79,0.14)" : "rgba(255,255,255,0.05)",
                      color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)",
                    }}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* HISTORIE-modus: welke onderwerpen zijn gekozen + status */}
        {modus === "historie" && (
          <div style={{ margin: "6px 0 2px" }}>
            {histStatus === "laden" && (
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>Oefengeschiedenis wordt bekeken…</div>
            )}
            {histStatus === "leeg" && (
              <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.55, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px 14px" }}>
                Nog niet genoeg oefening om zwakke plekken te vinden — of alles gaat al goed! 🎉 Oefen eerst een paar
                onderwerpen, of kies hierboven <b>een gekozen onderwerp</b> om alvast een boekje te maken.
              </div>
            )}
            {histStatus === "klaar" && histConcepten.length > 0 && (
              <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.6 }}>
                Samengesteld uit de onderwerpen waar nog winst zit:
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                  {histConcepten.map((z) => (
                    <span key={z.id} style={{ fontSize: 12.5, fontWeight: 700, color: "#69f0ae", background: "rgba(126,240,162,0.10)", border: "1px solid rgba(126,240,162,0.35)", borderRadius: 999, padding: "3px 10px" }}>
                      {schoon(z.title) || z.id}{z.pct != null ? ` · ${z.pct}%` : ""}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Naam (optioneel) */}
        <div style={{ marginTop: 12 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)" }}>
            Naam op het boekje (mag leeg):{" "}
            <input
              value={naam}
              onChange={(e) => setNaam(e.target.value.slice(0, 30))}
              placeholder="bijv. Sophie"
              style={{ marginLeft: 6, padding: "7px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "inherit", fontSize: 14 }}
            />
          </label>
        </div>

        <div style={{ marginTop: 16 }}>
          {items.length > 0 ? (
            <PrintKnoppen trackPrefix="oefenboekje" trackProps={{ pad: pathId, modus }} />
          ) : (
            <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
              {modus === "historie"
                ? (histStatus === "leeg" ? "" : "Boekje wordt samengesteld…")
                : laadFout ? "Dit onderwerp kon niet geladen worden." : "Boekje wordt samengesteld…"}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <>
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "18px 0" }} />
            <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)" }}>
              👇 Hieronder een voorbeeld van hoe het boekje eruitziet. Klik op <b>Printen</b> of <b>Opslaan als PDF</b>.
            </div>
          </>
        )}
      </div>

      {/* ── Het printbare boekje ── */}
      {items.length > 0 && (
        <div className="boekje-print" style={{ maxWidth: 760, margin: "0 auto", padding: "0 16px 40px" }}>
          {/* Voorblad */}
          <div className="boekje-pagina" style={{ ...vel, textAlign: "center", paddingTop: 60 }}>
            <div style={{ fontSize: 54 }}>{conceptEmoji}</div>
            <h2 style={{ fontSize: 30, fontWeight: 900, margin: "10px 0 4px", color: "#111" }}>Oefenboekje op maat</h2>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#c8102e", marginBottom: 30 }}>{conceptTitel}</div>
            <div style={{ fontSize: 16, color: "#333", lineHeight: 2.2, maxWidth: 380, margin: "0 auto", textAlign: "left" }}>
              <div>Naam: <span style={{ borderBottom: "1.5px solid #999", display: "inline-block", minWidth: 200 }}>{naam ? " " + naam : ""}</span></div>
              <div>Datum: <span style={{ borderBottom: "1.5px solid #999", display: "inline-block", minWidth: 200 }}></span></div>
            </div>
            <div style={{ marginTop: 40, fontSize: 13, color: "#777" }}>
              {modus === "historie"
                ? <>Extra oefenen op jouw <b>persoonlijke oefenpunten</b> — {items.length} opgaven. Antwoorden achterin.</>
                : <>Extra oefenen op <b>{conceptTitel.toLowerCase()}</b> — {items.length} opgaven. Antwoorden achterin.</>}
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "#aaa" }}>Leerkwartier · leerkwartier.app</div>
          </div>

          {/* Uitgewerkt voorbeeld (alleen concept-modus — één onderwerp) */}
          {voorbeeld && modus === "concept" && (
            <div className="boekje-pagina" style={vel}>
              <h3 style={kop}>💡 Zo doe je het</h3>
              <div style={{ border: "1.5px solid #ddd", borderRadius: 10, padding: "16px 18px", fontSize: 15.5, lineHeight: 1.7, color: "#222", background: "#faf7ee" }}>
                {voorbeeld}
              </div>
            </div>
          )}

          {/* Oefenvragen */}
          <div className="boekje-pagina" style={vel}>
            <h3 style={kop}>✏️ Oefenvragen</h3>
            <div style={{ fontSize: 13, color: "#777", marginBottom: 14 }}>Zet een rondje om het goede antwoord. Schrijf er eventueel bij hoe je het uitrekende.</div>
            {items.map((it, i) => (
              <div key={i} style={{ marginBottom: 18, breakInside: "avoid" }}>
                <div style={{ fontWeight: 700, fontSize: 15.5, color: "#111", marginBottom: 6 }}>{i + 1}. {it.vraag}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 22px", paddingLeft: 10 }}>
                  {it.opties.map((o, j) => (
                    <div key={j} style={{ fontSize: 14.5, color: "#222" }}>
                      <b>{LETTERS[j]}.</b> {o}
                    </div>
                  ))}
                </div>
                <div style={{ borderBottom: "1px dotted #bbb", height: 20, marginTop: 8 }} />
              </div>
            ))}
          </div>

          {/* Antwoordblad */}
          <div className="boekje-pagina" style={vel}>
            <h3 style={kop}>✅ Antwoorden</h3>
            <div style={{ fontSize: 13, color: "#777", marginBottom: 12 }}>Voor de ouder/begeleider — kijk samen na.</div>
            {items.map((it, i) => (
              <div key={i} style={{ marginBottom: 10, fontSize: 14.5, color: "#222", lineHeight: 1.5 }}>
                <b>{i + 1}. {LETTERS[it.goedIdx]} — {it.goedTekst}</b>
                {it.uitleg && <span style={{ color: "#555" }}> · {it.uitleg}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
      <FamilieMeer setPage={setPage} huidig="oefenboekje" />
    </div>
  );
}

const linkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };
const vel = { background: "#fff", color: "#111", borderRadius: 12, padding: "28px 30px", marginBottom: 20, boxShadow: "0 2px 10px rgba(0,0,0,0.25)" };
const kop = { fontSize: 20, fontWeight: 900, color: "#111", margin: "0 0 12px", borderBottom: "2px solid #c8102e", paddingBottom: 6 };
function pill(aan) {
  return {
    padding: "6px 13px", borderRadius: 20, cursor: "pointer", fontSize: 12.5, fontWeight: 700,
    border: aan ? "1.5px solid #ffd54f" : "1.5px solid rgba(255,255,255,0.18)",
    background: aan ? "rgba(255,213,79,0.14)" : "rgba(255,255,255,0.05)",
    color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)",
  };
}
