// ══════════════════════════════════════════════════════════════════════
// Werkblad voor de klas — leerkracht-kanaal Fase 1 (Mark 5 aug 2026,
// docs/LEERKRACHT-WERKBLAD-PLAN.md).
//
// De leerkracht krijgt één vraag ("Waar wil je een werkblad over?"), kiest
// een oefenpad, en print een A4-werkblad met 12 opgaven uit de checks van
// dat pad + een apart antwoordblad. Onderaan élk vel staat een QR + korte
// uitleg naar leerkwartier.app — het kind neemt het papier mee naar huis,
// de ouder of verzorger scant, en zo werkt elk werkblad als flyer.
//
// Bron = de checks van de leerpaden zelf (zelfde recept als het Oefenboekje
// op maat): printen via window.print, €0, geen server, geen AI. QR wordt
// client-side getekend met het `qrcode`-pakket (lazy geladen, geen calls).
// Examen-paden doen niet mee (authentieke vragen niet als los blad printen).
// ══════════════════════════════════════════════════════════════════════
import { useState, useEffect, useMemo, useRef } from "react";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { getLearnPath } from "../../learnPaths/pathLoaders.js";
import PrintKnoppen from "../../shared/ui/PrintKnoppen.jsx";
import { shuffleOptiesSeeded } from "../../shared/shuffleOpties.js";
import { generateCode, track } from "../../utils.js";
import { saveQuiz } from "../../data/repos/quizzesRepo.js";
import { TAKENLIJST_TYPE } from "../../data/takenlijst.js";

// Snelkeuzes = de tien Cito-kern-struikelonderwerpen uit het bouwplan, zodat
// een leerkracht in één tik klaar is zonder te hoeven zoeken.
const SNELKEUZES = [
  { id: "breuken-po", label: "🍕 Breuken" },
  { id: "procenten-po", label: "💯 Procenten" },
  { id: "kommagetallen-po", label: "🔢 Kommagetallen" },
  { id: "omzetten-breuk-procent-komma-po", label: "🔁 Breuk ↔ procent ↔ komma" },
  { id: "redactiesommen-pad", label: "📖 Verhaaltjessommen" },
  { id: "werkwoordsspelling-dt", label: "✏️ d/t + 't kofschip" },
  { id: "werkwoord-tijden-po", label: "⏰ Werkwoordstijden" },
  { id: "spelling-ei-ij-au-ou", label: "📝 ei/ij + au/ou" },
  { id: "begrijpend-lezen-teksten-po", label: "📚 Begrijpend lezen" },
  { id: "verwijswoorden-begrijpend-lezen-po", label: "👉 Verwijswoorden" },
];

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const MAX_OPGAVEN = 12;

// Kleine markdown-opschoner voor print (zelfde als oefenboekje).
function schoon(s) {
  return String(s ?? "")
    .replace(/\*\*/g, "")
    .replace(/(^|[^\w])[*_]([^*_]+)[*_]/g, "$1$2")
    .replace(/\$/g, "")
    .trim();
}

// Checks van een pad → platte print-opgaven met antwoord + korte uitleg.
// Seeded geschud: herprinten geeft hetzelfde blad.
function bouwItems(path, max = MAX_OPGAVEN) {
  if (!path || !Array.isArray(path.steps)) return [];
  const items = [];
  for (const step of path.steps) {
    const checks = step.checks || (step.check ? [step.check] : []);
    for (const c of checks) {
      if (!c || !c.q || !Array.isArray(c.options)) continue;
      const q = shuffleOptiesSeeded(
        { ...c, answer: typeof c.answer === "number" ? c.answer : c.options.indexOf(c.answer) },
        `${path.id || "werkblad"}::${items.length}`
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

export default function WerkbladPagina({ onClose, userId }) {
  const params = (() => {
    try { return new URLSearchParams(window.location.search || ""); } catch { return new URLSearchParams(); }
  })();
  const [pathId, setPathId] = useState(() => params.get("pad") || "");
  const [zoek, setZoek] = useState("");
  const [path, setPath] = useState(null);
  const [laadFout, setLaadFout] = useState(false);
  const [metAntwoordblad, setMetAntwoordblad] = useState(true);
  const [qrUrl, setQrUrl] = useState("");
  // Digitale uitgang: deelcode voor de klas (1-taak-takenlijst in quizzes,
  // zelfde patroon als TakenlijstMaker — leerlingen vullen de code in).
  const [deelcode, setDeelcode] = useState(null);
  const [codeQr, setCodeQr] = useState("");
  const [codeBezig, setCodeBezig] = useState(false);
  const [codeFout, setCodeFout] = useState("");
  const reqRef = useRef(0);

  // Alle paden uit het manifest, zonder examen-paden.
  const paden = useMemo(() => {
    const arr = Array.isArray(pathManifest) ? pathManifest : Object.values(pathManifest);
    return arr.filter((p) => p && p.id && p.title && !String(p.id).startsWith("examen-"));
  }, []);

  const resultaten = useMemo(() => {
    const q = zoek.trim().toLowerCase();
    if (q.length < 2) return [];
    return paden
      .filter((p) => `${p.title} ${p.subject} ${(p.triggerKeywords || []).join(" ")}`.toLowerCase().includes(q))
      .slice(0, 25);
  }, [zoek, paden]);

  // Gekozen pad laden (race-guard zoals oefenboekje).
  useEffect(() => {
    if (!pathId) { setPath(null); return; }
    const my = ++reqRef.current;
    setPath(null);
    setLaadFout(false);
    setDeelcode(null);
    setCodeQr("");
    setCodeFout("");
    getLearnPath(pathId)
      .then((p) => {
        if (my !== reqRef.current) return;
        if (!p) setLaadFout(true);
        else setPath(p);
      })
      .catch(() => { if (my === reqRef.current) setLaadFout(true); });
  }, [pathId]);

  // QR naar het digitale pad — de thuis-route van het werkblad. Lazy import
  // zodat het qrcode-pakket alleen laadt op deze pagina.
  const thuisLink = pathId
    ? `https://leerkwartier.app/leren/pad?id=${encodeURIComponent(pathId)}&utm_source=werkblad`
    : "https://leerkwartier.app";
  useEffect(() => {
    let alive = true;
    setQrUrl("");
    if (!pathId) return;
    import("qrcode")
      .then((QR) => QR.toDataURL(thuisLink, { margin: 1, width: 160, color: { dark: "#111111", light: "#ffffff" } }))
      .then((url) => { if (alive) setQrUrl(url); })
      .catch(() => { /* geen QR = werkblad toont alleen de URL, blijft bruikbaar */ });
    return () => { alive = false; };
  }, [pathId, thuisLink]);

  // QR van de deelcode — leerlingen scannen of typen de code.
  useEffect(() => {
    let alive = true;
    setCodeQr("");
    if (!deelcode) return;
    import("qrcode")
      .then((QR) => QR.toDataURL(`https://leerkwartier.app/?code=${deelcode.code}`, { margin: 1, width: 160, color: { dark: "#111111", light: "#ffffff" } }))
      .then((url) => { if (alive) setCodeQr(url); })
      .catch(() => { /* code als tekst blijft werken */ });
    return () => { alive = false; };
  }, [deelcode]);

  const items = useMemo(() => bouwItems(path), [path]);
  const titel = path?.title ? schoon(path.title) : "";
  const emoji = path?.emoji || "📝";

  async function maakDeelcode() {
    if (!path || codeBezig) return;
    setCodeBezig(true);
    setCodeFout("");
    const code = generateCode();
    const manifest = paden.find((p) => p.id === pathId);
    const obj = {
      type: TAKENLIJST_TYPE,
      id: "taken-" + Date.now(),
      code,
      title: titel,
      intro: null,
      created_by: userId || null,
      created_at: new Date().toISOString(),
      taken: [{ id: "t0", title: titel, pathId, stepCount: manifest?.stepCount || 0 }],
    };
    const { error } = await saveQuiz({ id: obj.id, code, quiz: obj, userId });
    setCodeBezig(false);
    if (error) { setCodeFout("Deelcode maken lukte niet. Probeer het zo nog eens."); return; }
    try { track("werkblad_deelcode", { pad: pathId }); } catch { /* */ }
    setDeelcode({ code });
  }

  const voet = (
    <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "2px solid #c8102e", marginTop: 22, paddingTop: 12 }}>
      {qrUrl && <img src={qrUrl} alt="QR-code naar leerkwartier.app" style={{ width: 74, height: 74 }} />}
      <div style={{ fontSize: 12.5, color: "#333", lineHeight: 1.55 }}>
        <b>Thuis verder oefenen?</b> Scan de code met een telefoon,
        of ga naar <b>leerkwartier.app</b>.<br />
        Gratis oefenen — geen account nodig. Voor ouders en verzorgers: de app legt elke som uit, steeds simpeler tot het kwartje valt.
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .werkblad-print, .werkblad-print * { visibility: visible !important; }
          .werkblad-print { position: absolute; left: 0; top: 0; width: 100%; color: #000; background: #fff; }
          .werkblad-noprint { display: none !important; }
          .werkblad-vel { page-break-after: always; }
          .werkblad-vel:last-child { page-break-after: auto; }
          @page { margin: 14mm 13mm; }
        }
      `}</style>

      {/* ── Bediening (niet mee-printen) ── */}
      <div className="werkblad-noprint" style={{ maxWidth: 760, margin: "0 auto", padding: "18px 16px 8px" }}>
        <button onClick={() => onClose && onClose()} style={{ background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 }}>← terug</button>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, margin: "8px 0 4px" }}>🖨️ Werkblad voor je klas</h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.55, margin: "0 0 14px" }}>
          Kies een onderwerp en print een werkblad met 12 opgaven — plus een apart antwoordblad voor jou.
          Onderaan het blad staat een QR-code, zodat leerlingen thuis gratis verder kunnen oefenen.
        </p>

        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 6 }}>Waar wil je een werkblad over?</div>
        <input
          value={zoek}
          onChange={(e) => setZoek(e.target.value)}
          placeholder="Zoek een onderwerp… bv. breuken, spelling, klokkijken"
          style={{ width: "100%", boxSizing: "border-box", padding: "11px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "inherit", fontSize: 14, marginBottom: 8 }}
        />
        {resultaten.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 240, overflowY: "auto", marginBottom: 10 }}>
            {resultaten.map((p) => (
              <button key={p.id} onClick={() => { setPathId(p.id); setZoek(""); }} style={{ textAlign: "left", cursor: "pointer", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 10, padding: "9px 12px", display: "flex", alignItems: "center", gap: 10, color: "inherit" }}>
                <span aria-hidden="true">{p.emoji || "📝"}</span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 14, fontWeight: 700 }}>{p.title}</span>
                  <span style={{ display: "block", fontSize: 11.5, color: "rgba(255,255,255,0.55)" }}>{p.subject}</span>
                </span>
              </button>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          {SNELKEUZES.map((p) => {
            const aan = p.id === pathId;
            return (
              <button
                key={p.id}
                onClick={() => setPathId(p.id)}
                style={{
                  padding: "8px 13px", borderRadius: 10, cursor: "pointer", fontSize: 13.5, fontWeight: 700,
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

        {pathId && (
          <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", marginBottom: 12, cursor: "pointer" }}>
            <input type="checkbox" checked={metAntwoordblad} onChange={(e) => setMetAntwoordblad(e.target.checked)} />
            Antwoordblad meeprinten (laatste vel — houd dat zelf)
          </label>
        )}

        {pathId && (
          items.length > 0 ? (
            <PrintKnoppen trackPrefix="werkblad" trackProps={{ pad: pathId }} />
          ) : (
            <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
              {laadFout ? "Dit onderwerp kon niet geladen worden." : "Werkblad wordt samengesteld…"}
            </div>
          )
        )}

        {/* Digitale uitgang: hetzelfde onderwerp als klas-opdracht met deelcode. */}
        {items.length > 0 && (
          <div style={{ marginTop: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>💻 Liever digitaal met je klas?</div>
            {!deelcode ? (
              <>
                <div style={{ fontSize: 13, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.55, marginBottom: 10 }}>
                  Maak een deelcode: leerlingen vullen 'm in op leerkwartier.app en oefenen dit onderwerp
                  online — met uitleg bij elke fout, zonder account.
                </div>
                <button onClick={maakDeelcode} disabled={codeBezig} style={{ padding: "11px 18px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#00c853,#00e676)", color: "#06211a", fontSize: 14, fontWeight: 800, cursor: "pointer", opacity: codeBezig ? 0.7 : 1 }}>
                  {codeBezig ? "Bezig…" : "🔢 Maak deelcode voor je klas"}
                </button>
                {codeFout && <div style={{ color: "#ff8a80", fontSize: 13, marginTop: 8 }}>{codeFout}</div>}
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                {codeQr && <img src={codeQr} alt={`QR-code voor deelcode ${deelcode.code}`} style={{ width: 96, height: 96, borderRadius: 8, background: "#fff", padding: 4 }} />}
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 12, color: "var(--color-text-muted, #9aa4c7)" }}>Deelcode — zet op het bord of in de klas-app</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, letterSpacing: 3, color: "#69f0ae" }}>{deelcode.code}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
                    <button onClick={() => { try { navigator.clipboard?.writeText(deelcode.code); } catch { /* */ } }} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)", color: "inherit", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>📋 Kopieer code</button>
                    <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Oefenen in Leerkwartier: vul code ${deelcode.code} in op leerkwartier.app, of open: https://leerkwartier.app/?code=${deelcode.code}`)}`, "_blank", "noopener")} style={{ padding: "8px 12px", borderRadius: 8, border: "none", background: "#25D366", color: "#06281a", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>Deel via WhatsApp</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {items.length > 0 && (
          <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)", marginTop: 14 }}>
            👇 Hieronder zie je hoe het werkblad eruitziet. Klik op <b>Printen</b> of <b>Opslaan als PDF</b>.
          </div>
        )}
      </div>

      {/* ── Het printbare werkblad ── */}
      {items.length > 0 && (
        <div className="werkblad-print" style={{ maxWidth: 760, margin: "0 auto", padding: "0 16px 40px" }}>
          {/* Werkblad-vel */}
          <div className="werkblad-vel" style={vel}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "2px solid #c8102e", paddingBottom: 8, marginBottom: 12 }}>
              <div style={{ fontSize: 19, fontWeight: 900, color: "#111" }}>{emoji} {titel}</div>
              <div style={{ fontSize: 12.5, color: "#666", fontWeight: 700 }}>Leerkwartier · werkblad · ±15 minuten</div>
            </div>
            <div style={{ display: "flex", gap: 26, fontSize: 14, color: "#333", marginBottom: 14 }}>
              <div>Naam: <span style={lijn(180)}></span></div>
              <div>Datum: <span style={lijn(110)}></span></div>
            </div>
            <div style={{ fontSize: 12.5, color: "#777", marginBottom: 12 }}>Zet een rondje om het goede antwoord. Schrijf op de stippellijn hoe je het uitrekende.</div>
            {items.map((it, i) => (
              <div key={i} style={{ marginBottom: 14, breakInside: "avoid" }}>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: "#111", marginBottom: 5 }}>{i + 1}. {it.vraag}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 20px", paddingLeft: 10 }}>
                  {it.opties.map((o, j) => (
                    <div key={j} style={{ fontSize: 13.5, color: "#222" }}>
                      <b>{LETTERS[j]}.</b> {o}
                    </div>
                  ))}
                </div>
                <div style={{ borderBottom: "1px dotted #bbb", height: 16, marginTop: 6 }} />
              </div>
            ))}
            {voet}
          </div>

          {/* Antwoordblad (apart vel, voor de leerkracht) */}
          {metAntwoordblad && (
            <div className="werkblad-vel" style={vel}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "2px solid #c8102e", paddingBottom: 8, marginBottom: 12 }}>
                <div style={{ fontSize: 19, fontWeight: 900, color: "#111" }}>✅ Antwoordblad — {titel}</div>
                <div style={{ fontSize: 12.5, color: "#666", fontWeight: 700 }}>voor de leerkracht</div>
              </div>
              {items.map((it, i) => (
                <div key={i} style={{ marginBottom: 9, fontSize: 13.5, color: "#222", lineHeight: 1.5 }}>
                  <b>{i + 1}. {LETTERS[it.goedIdx]} — {it.goedTekst}</b>
                  {it.uitleg && <span style={{ color: "#555" }}> · {it.uitleg}</span>}
                </div>
              ))}
              {voet}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const vel = { background: "#fff", color: "#111", borderRadius: 12, padding: "26px 28px", marginBottom: 20, boxShadow: "0 2px 10px rgba(0,0,0,0.25)" };
function lijn(breedte) {
  return { borderBottom: "1.5px solid #999", display: "inline-block", minWidth: breedte };
}
