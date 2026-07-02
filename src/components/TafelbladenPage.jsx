// Tafelbladen-pagina "/tafelbladen" — printbare tafel-werkbladen + diploma.
// Onderdeel van de print-lijn (Mark 2026-07-02, na het Leesladder-succes):
// kies je tafels en print per tafel een werkblad (op volgorde + door elkaar
// + deelsommen), een mix-blad, een tempo-toets en een invulbaar tafeldiploma.
// Sommen worden met een seed gegenereerd: "Nieuwe sommen" geeft een vers blad,
// dus eindeloos herprintbaar. Antwoordbladen zitten er gewoon bij (geen slot —
// tafel-antwoorden kent elke ouder); e-mail-opt-in via GratisLesmateriaal.

import { useEffect, useMemo, useState } from "react";
import { BRAND } from "../brand.js";
import { track } from "../utils.js";
import GratisLesmateriaal from "./GratisLesmateriaal.jsx";

// Print-CSS — zelfde recept als Leesladder/Oefenpakket, inclusief de
// overflow-fix (zonder die kapte Chrome het printwerk af op 1 pagina).
const PRINT_CSS = `
@media print {
  html, body { overflow: visible !important; height: auto !important; max-width: none !important; }
  #root { min-height: 0 !important; }
  body * { visibility: hidden !important; }
  .tafels-print, .tafels-print * { visibility: visible !important; }
  .tafels-print {
    position: absolute !important;
    top: 0; left: 0; right: 0;
    margin: 0 !important;
    background: #fff !important;
  }
  .tafels-noprint { display: none !important; }
  .tafels-sheet {
    box-shadow: none !important;
    margin: 0 auto !important;
    page-break-after: always;
    border: none !important;
  }
  .tafels-sheet:last-child { page-break-after: auto; }
  @page { margin: 14mm 12mm; }
}
`;

// Klein deterministisch toevalletje — zelfde seed = zelfde blad (herprintbaar).
function maakRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (rng() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALLE_TAFELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function TafelbladenPage({ setPage } = {}) {
  const [gekozen, setGekozen] = useState([2, 3, 4, 5, 10]);
  const [metDelen, setMetDelen] = useState(true);
  const [metTempo, setMetTempo] = useState(true);
  const [seed, setSeed] = useState(1);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Gratis tafel-werkbladen printen (+ tafeldiploma) — " + BRAND.name;
    const style = document.createElement("style");
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    track("tafelbladen_open");
    return () => {
      document.title = prevTitle;
      document.head.removeChild(style);
    };
  }, []);

  function toggle(n) {
    setGekozen((g) => (g.includes(n) ? g.filter((x) => x !== n) : [...g, n].sort((a, b) => a - b)));
  }

  // Alle bladen in één keer genereren uit de seed.
  const bladen = useMemo(() => {
    const rng = maakRng(seed * 7919 + 13);
    const perTafel = gekozen.map((n) => {
      const volgorde = ALLE_TAFELS.map((i) => ({ a: i, b: n }));
      const hussel = shuffle(volgorde, rng);
      const delen = shuffle(ALLE_TAFELS.map((i) => ({ p: i * n, d: n, q: i })), rng);
      return { n, volgorde, hussel, delen };
    });
    const mixBron = [];
    gekozen.forEach((n) => ALLE_TAFELS.forEach((i) => mixBron.push({ a: i, b: n })));
    // Bij weinig gekozen tafels is de bron kleiner dan het blad — dan vullen
    // we aan met herhaalde (opnieuw gehusselde) sommen; herhaling is bij
    // tempo-oefenen juist prima.
    const vul = (doel) => {
      const uit = [];
      while (uit.length < doel && mixBron.length) uit.push(...shuffle(mixBron, rng));
      return uit.slice(0, doel);
    };
    const mix = vul(48);
    const tempo = vul(60);
    return { perTafel, mix, tempo };
  }, [gekozen, seed]);

  const aantalBladen =
    bladen.perTafel.length + (gekozen.length >= 2 ? 1 : 0) + (metTempo && gekozen.length >= 1 ? 1 : 0) + 1;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 80px" }}>
      {/* ── Scherm-only bediening ─────────────────────────── */}
      <div className="tafels-noprint" style={{ marginBottom: 24 }}>
        <button
          onClick={() => setPage && setPage("home")}
          aria-label="Naar de homepage van Leerkwartier"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer", padding: 0, marginBottom: 6 }}
        >
          <svg viewBox="0 0 100 100" style={{ width: 22, height: 22, flexShrink: 0 }} aria-hidden="true">
            <path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" />
          </svg>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--color-text, #e8edf5)" }}>{BRAND.name}</span>
          <span style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>· naar home</span>
        </button>
        <div>
          <button onClick={() => setPage && setPage("printen")} style={{ background: "transparent", border: "none", color: "var(--color-text-muted, #8899aa)", cursor: "pointer", fontSize: 14, padding: 0, marginBottom: 12 }}>
            ← Alle printbare pakketten
          </button>
        </div>

        <h1 style={{ fontSize: 26, margin: "0 0 8px", color: "var(--color-text, #e8edf5)" }}>
          ✖️ Tafel-werkbladen — kies, print, oefen
        </h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 18px", lineHeight: 1.5 }}>
          Kies de tafels en print per tafel een werkblad met <strong style={{ color: "var(--color-text, #e8edf5)" }}>op volgorde · door
          elkaar{metDelen ? " · deelsommen" : ""}</strong>, plus een mix-blad, {metTempo ? "een tempo-toets " : ""}en een invulbaar
          <strong style={{ color: "var(--color-text, #e8edf5)" }}> tafeldiploma</strong> 🏆. Elke keer verse sommen — dus print zo vaak je wilt.
        </p>

        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 8 }}>Welke tafels?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {ALLE_TAFELS.map((n) => {
            const aan = gekozen.includes(n);
            return (
              <button key={n} onClick={() => toggle(n)} style={{
                width: 46, height: 40, borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer",
                border: aan ? "1.5px solid var(--color-accent, #42a5f5)" : "1.5px solid rgba(255,255,255,0.15)",
                background: aan ? "rgba(66,165,245,0.15)" : "transparent",
                color: aan ? "var(--color-text, #e8edf5)" : "var(--color-text-muted, #8899aa)",
              }}>
                {n}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 18 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--color-text, #e8edf5)", fontSize: 14, cursor: "pointer" }}>
            <input type="checkbox" checked={metDelen} onChange={() => setMetDelen(!metDelen)} /> Ook deelsommen
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--color-text, #e8edf5)", fontSize: 14, cursor: "pointer" }}>
            <input type="checkbox" checked={metTempo} onChange={() => setMetTempo(!metTempo)} /> Tempo-toets (5 minuten)
          </label>
          <button onClick={() => setSeed((s) => s + 1)} style={{ padding: "7px 14px", borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.2)", background: "transparent", color: "var(--color-text, #e8edf5)", cursor: "pointer", fontSize: 14 }}>
            🔀 Nieuwe sommen
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <button
            onClick={() => { track("tafelbladen_print", { tafels: gekozen.join(",") }); window.print(); }}
            disabled={gekozen.length === 0}
            style={{
              padding: "14px 28px", borderRadius: 12, border: "none",
              background: gekozen.length === 0 ? "rgba(255,255,255,0.1)" : "var(--color-accent, #42a5f5)",
              color: gekozen.length === 0 ? "#888" : "#0b1224", fontSize: 17, fontWeight: 700,
              cursor: gekozen.length === 0 ? "not-allowed" : "pointer",
              boxShadow: gekozen.length === 0 ? "none" : "0 4px 16px rgba(66,165,245,0.35)",
            }}
          >
            🖨️ Opslaan als PDF / Printen
          </button>
          <span style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
            {gekozen.length === 0 ? "Kies eerst een tafel" : `± ${aantalBladen + 1} pagina's incl. diploma & antwoorden`}
          </span>
        </div>

        <div style={{ marginTop: 22 }}>
          <GratisLesmateriaal source="tafelbladen" compact />
        </div>
      </div>

      {/* ── De printbare bladen ───────────────────────────── */}
      <div className="tafels-print">
        {bladen.perTafel.map(({ n, volgorde, hussel, delen }) => (
          <Sheet key={n}>
            <BladKop titel={`De tafel van ${n}`} sub={metDelen ? "op volgorde · door elkaar · deelsommen" : "op volgorde · door elkaar"} />
            <div style={{ display: "grid", gridTemplateColumns: metDelen ? "1fr 1fr 1fr" : "1fr 1fr", gap: "0 26px" }}>
              <div>
                <KolomKop>Op volgorde</KolomKop>
                {volgorde.map((s, i) => <Som key={i}>{s.a} × {s.b} = ____</Som>)}
              </div>
              <div>
                <KolomKop>Door elkaar</KolomKop>
                {hussel.map((s, i) => <Som key={i}>{s.a} × {s.b} = ____</Som>)}
              </div>
              {metDelen && (
                <div>
                  <KolomKop>Deelsommen</KolomKop>
                  {delen.map((s, i) => <Som key={i}>{s.p} : {s.d} = ____</Som>)}
                </div>
              )}
            </div>
            <BladVoet />
          </Sheet>
        ))}

        {gekozen.length >= 2 && (
          <Sheet>
            <BladKop titel="Mix-blad" sub={`alle sommen door elkaar — tafels van ${gekozen.join(", ")}`} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 26px" }}>
              {[0, 1, 2].map((k) => (
                <div key={k}>
                  {bladen.mix.slice(k * 16, k * 16 + 16).map((s, i) => <Som key={i}>{s.a} × {s.b} = ____</Som>)}
                </div>
              ))}
            </div>
            <BladVoet />
          </Sheet>
        )}

        {metTempo && gekozen.length >= 1 && (
          <Sheet>
            <BladKop titel="⏱️ Tempo-toets — 5 minuten" sub="zet een wekker · maak zoveel je kunt · fouten tellen dubbel niet, gewoon proberen!" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0 20px" }}>
              {[0, 1, 2, 3].map((k) => (
                <div key={k}>
                  {bladen.tempo.slice(k * 15, k * 15 + 15).map((s, i) => (
                    <div key={i} style={{ fontSize: 13.5, color: "#1a2332", padding: "3.5px 0", borderBottom: "1px dotted #dde3ec" }}>
                      {s.a} × {s.b} = ____
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, fontSize: 13, color: "#6b7785" }}>
              Gehaald: ______ sommen in 5 minuten · vorige keer: ______ — versla jezelf, niet een ander! 💪
            </div>
          </Sheet>
        )}

        {/* Tafeldiploma */}
        <Sheet>
          <div style={{ border: "3px double #1a2332", borderRadius: 14, padding: "34px 30px", textAlign: "center" }}>
            <div style={{ fontSize: 44 }}>🏆</div>
            <div style={{ fontSize: 13, letterSpacing: 3, color: "#6b7785", fontWeight: 700, marginTop: 4 }}>
              {BRAND.name.toUpperCase()} · TAFELDIPLOMA
            </div>
            <h2 style={{ fontSize: 30, margin: "12px 0 4px", color: "#1a2332" }}>Tafeldiploma</h2>
            <p style={{ fontSize: 15, color: "#3a4658", margin: "0 0 22px" }}>Dit diploma is behaald door:</p>
            <div style={{ fontSize: 20, color: "#1a2332", borderBottom: "2px solid #1a2332", display: "inline-block", minWidth: 300, paddingBottom: 4, marginBottom: 26 }}>
              &nbsp;
            </div>
            <div style={{ display: "inline-block", textAlign: "left" }}>
              {gekozen.map((n) => (
                <div key={n} style={{ fontSize: 15, color: "#3a4658", padding: "5px 0", borderBottom: "1px dotted #dde3ec" }}>
                  ⬜ De tafel van <strong>{n}</strong> — gehaald op: __________ · tijd: ______
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: 34, fontSize: 14, color: "#3a4658" }}>
              <span>Datum: ______________</span>
              <span>Handtekening juf/meester/ouder: ______________</span>
            </div>
            <div style={{ marginTop: 22, fontSize: 12, color: "#9aa6b4" }}>
              Tip voor de ouder: één tafel per keer aftekenen — klein succes, groot effect. · {BRAND.domain}
            </div>
          </div>
        </Sheet>

        {/* Antwoordbladen (compact) */}
        <Sheet>
          <BladKop titel="✅ Antwoorden" sub="voor de nakijker" />
          {bladen.perTafel.map(({ n, hussel, delen }) => (
            <div key={n} style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 14, marginBottom: 3, fontFamily: "Arial, sans-serif" }}>Tafel van {n}</div>
              <div style={{ fontSize: 12.5, color: "#3a4658", lineHeight: 1.7 }}>
                <em>Door elkaar:</em> {hussel.map((s) => `${s.a}×${s.b}=${s.a * s.b}`).join(" · ")}
                {metDelen && (<><br /><em>Delen:</em> {delen.map((s) => `${s.p}:${s.d}=${s.q}`).join(" · ")}</>)}
              </div>
            </div>
          ))}
          {gekozen.length >= 2 && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 14, marginBottom: 3, fontFamily: "Arial, sans-serif" }}>Mix-blad</div>
              <div style={{ fontSize: 12.5, color: "#3a4658", lineHeight: 1.7 }}>
                {bladen.mix.map((s) => `${s.a}×${s.b}=${s.a * s.b}`).join(" · ")}
              </div>
            </div>
          )}
          <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid #e3e8ef", textAlign: "center", fontSize: 13, color: "#6b7785" }}>
            Meer printbaar oefenmateriaal (werkboek Doorstroomtoets, Leesladder begrijpend lezen): {BRAND.domain}/printen
          </div>
        </Sheet>
      </div>
    </div>
  );
}

function Sheet({ children }) {
  return (
    <div className="tafels-sheet" style={{ background: "#fff", color: "#1a2332", width: "100%", maxWidth: 740, margin: "0 auto 24px", padding: "36px 40px", borderRadius: 8, boxShadow: "0 6px 30px rgba(0,0,0,0.4)", fontFamily: "Georgia, 'Times New Roman', serif", boxSizing: "border-box" }}>
      {children}
    </div>
  );
}

function BladKop({ titel, sub }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #1a2332", paddingBottom: 6 }}>
        <h3 style={{ fontSize: 20, color: "#1a2332", margin: 0, fontFamily: "Arial, sans-serif" }}>{titel}</h3>
        <span style={{ fontSize: 11, color: "#8893a3" }}>{BRAND.name}</span>
      </div>
      <div style={{ fontSize: 12.5, color: "#6b7785", marginTop: 4 }}>{sub}</div>
      <div style={{ fontSize: 13, color: "#3a4658", marginTop: 8 }}>
        Naam: ____________________ &nbsp;·&nbsp; Datum: ____________
      </div>
    </div>
  );
}

function KolomKop({ children }) {
  return <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 13.5, margin: "0 0 6px", fontFamily: "Arial, sans-serif", background: "#eef2f8", borderRadius: 5, padding: "4px 8px" }}>{children}</div>;
}

function Som({ children }) {
  return <div style={{ fontSize: 15, color: "#1a2332", padding: "4.5px 0", borderBottom: "1px dotted #dde3ec" }}>{children}</div>;
}

function BladVoet() {
  return (
    <div style={{ marginTop: 14, fontSize: 13, color: "#6b7785" }}>
      Goed: ______ &nbsp;·&nbsp; Tijd: ______ &nbsp;·&nbsp; 🌟 als alles goed is: kleur een ster op je diploma-blad!
    </div>
  );
}
