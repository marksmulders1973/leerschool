// Oefenpakket-pagina "/oefenpakket" — genereert een print-/PDF-klaar
// Doorstroomtoets-oefenpakket uit de echte app-vragen (rekenen, taal,
// studievaardigheden groep 8).
//
// Doel: ouder van groep 7/8 print thuis een nette set oefenvragen + een
// antwoordsleutel met korte uitleg. WYSIWYG: op het scherm zie je dezelfde
// witte A4-vellen die de printer/PDF maakt.
//
// Bewust geen externe PDF-library: we gebruiken de browser-printdialoog
// (window.print → "Opslaan als PDF"). Werkt overal, nul dependencies,
// nul Vercel-config.
//
// Visie-bewaker: de app-kern blijft gratis (gratis-belofte). Dit pakket is
// een gratis lead-magnet — geen koop-knop in de app. Mark kan hetzelfde
// pakket los exporteren en als product verkopen; dat gebeurt buiten de app.

import { useEffect, useMemo, useState } from "react";
import { BRAND } from "../brand.js";
import rekenenPad from "../learnPaths/doorstroomtoetsRekenenG8.js";
import taalPad from "../learnPaths/doorstroomtoetsTaalG8.js";
import studiePad from "../learnPaths/doorstroomtoetsStudievaardighedenG8.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

// ── Vragen uit een leerpad halen ────────────────────────────────
// Elk pad: pad.steps[].checks[] met { q, options, answer, uitlegPad }.
// We pakken alleen echte meerkeuzevragen (>=2 opties, geldig antwoord).
function korteUitleg(check) {
  const u = check.uitlegPad;
  if (!u) return "";
  if (u.niveaus?.basis) return u.niveaus.basis;
  if (Array.isArray(u.stappen) && u.stappen[0]?.tekst) return u.stappen[0].tekst;
  if (u.theorie) return u.theorie;
  return "";
}

function vragenUitPad(pad, max) {
  const out = [];
  for (const step of pad.steps || []) {
    for (const check of step.checks || []) {
      if (
        Array.isArray(check.options) &&
        check.options.length >= 2 &&
        Number.isInteger(check.answer) &&
        check.answer >= 0 &&
        check.answer < check.options.length
      ) {
        out.push({
          q: check.q,
          options: check.options,
          answer: check.answer,
          uitleg: korteUitleg(check),
        });
      }
      if (out.length >= max) return out;
    }
  }
  return out;
}

// Mini-markdown: **vet** en *cursief* → HTML. Strip overige tekens niet,
// vragen bevatten soms ·, €, breuken — die mogen blijven.
function mdNaarHtml(tekst = "") {
  return tekst
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\*)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
}

const ONDERWERPEN = [
  { id: "rekenen", label: "Rekenen", emoji: "🔢", pad: rekenenPad, max: 10 },
  { id: "taal", label: "Taal", emoji: "📖", pad: taalPad, max: 10 },
  { id: "studie", label: "Studievaardigheden", emoji: "🗺️", pad: studiePad, max: 8 },
];

// Print-stylesheet: bij printen verbergen we de hele app en tonen alleen
// het pakket. Klassieke visibility-truc zodat alle layout-chrome wegvalt.
const PRINT_CSS = `
@media print {
  body * { visibility: hidden !important; }
  .oefenpakket-print, .oefenpakket-print * { visibility: visible !important; }
  .oefenpakket-print {
    position: absolute !important;
    top: 0; left: 0; right: 0;
    margin: 0 !important;
    background: #fff !important;
  }
  .oefenpakket-noprint { display: none !important; }
  .oefenpakket-sheet {
    box-shadow: none !important;
    margin: 0 auto !important;
    page-break-after: always;
    border: none !important;
  }
  .oefenpakket-sheet:last-child { page-break-after: auto; }
  @page { margin: 16mm 14mm; }
}
`;

export default function OefenpakketPage({ setPage } = {}) {
  const [actief, setActief] = useState({ rekenen: true, taal: true, studie: true });

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Gratis Doorstroomtoets oefenpakket (printbaar) — Leerkwartier";
    const style = document.createElement("style");
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      document.head.removeChild(style);
    };
  }, []);

  const secties = useMemo(
    () =>
      ONDERWERPEN.filter((o) => actief[o.id]).map((o) => ({
        ...o,
        vragen: vragenUitPad(o.pad, o.max),
      })),
    [actief]
  );

  const totaal = secties.reduce((n, s) => n + s.vragen.length, 0);

  // Doorlopende vraagnummering over alle secties voor de antwoordsleutel.
  let teller = 0;
  const genummerd = secties.map((s) => ({
    ...s,
    vragen: s.vragen.map((v) => ({ ...v, nr: ++teller })),
  }));

  function toggle(id) {
    setActief((a) => ({ ...a, [id]: !a[id] }));
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 80px" }}>
      {/* ── Scherm-only bediening ───────────────────────────── */}
      <div className="oefenpakket-noprint" style={{ marginBottom: 24 }}>
        <button
          onClick={() => setPage && setPage("cito")}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--color-text-muted, #8899aa)",
            cursor: "pointer",
            fontSize: 14,
            padding: 0,
            marginBottom: 12,
          }}
        >
          ← Terug naar Doorstroomtoets
        </button>

        <h1 style={{ fontSize: 26, margin: "0 0 8px", color: "var(--color-text, #e8edf5)" }}>
          📄 Gratis Doorstroomtoets-oefenpakket
        </h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 18px", lineHeight: 1.5 }}>
          Print thuis een net oefenpakket voor groep 7/8 — met antwoordsleutel en
          korte uitleg. Kies de onderwerpen en klik op <strong>Opslaan als PDF</strong>.
          De vragen zijn in stijl van de Doorstroomtoets (Cito/IEP), gemaakt door {BRAND.publisher}.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
          {ONDERWERPEN.map((o) => {
            const aan = actief[o.id];
            return (
              <button
                key={o.id}
                onClick={() => toggle(o.id)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: aan
                    ? "1.5px solid var(--color-accent, #42a5f5)"
                    : "1.5px solid rgba(255,255,255,0.15)",
                  background: aan ? "rgba(66,165,245,0.15)" : "transparent",
                  color: aan ? "var(--color-text, #e8edf5)" : "var(--color-text-muted, #8899aa)",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                {aan ? "✓ " : ""}
                {o.emoji} {o.label}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <button
            onClick={() => window.print()}
            disabled={totaal === 0}
            style={{
              padding: "14px 28px",
              borderRadius: 12,
              border: "none",
              background:
                totaal === 0 ? "rgba(255,255,255,0.1)" : "var(--color-accent, #42a5f5)",
              color: totaal === 0 ? "#888" : "#0b1224",
              fontSize: 17,
              fontWeight: 700,
              cursor: totaal === 0 ? "not-allowed" : "pointer",
              boxShadow: totaal === 0 ? "none" : "0 4px 16px rgba(66,165,245,0.35)",
            }}
          >
            🖨️ Opslaan als PDF / Printen
          </button>
          <span style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
            {totaal} {totaal === 1 ? "vraag" : "vragen"} geselecteerd
          </span>
        </div>

        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13, marginTop: 14, lineHeight: 1.5 }}>
          💡 Tip: kies in het printvenster bij <em>Bestemming</em> de optie
          “Opslaan als PDF”. Op iPhone/iPad: deel-knop → “Druk af” → knijp open
          om als PDF te bewaren.
        </p>
      </div>

      {/* ── Het printbare pakket (WYSIWYG witte vellen) ───────── */}
      <div className="oefenpakket-print">
        {/* Voorblad */}
        <Sheet>
          <div style={{ textAlign: "center", paddingTop: 60 }}>
            <div style={{ fontSize: 54, marginBottom: 8 }}>📘</div>
            <div style={{ fontSize: 13, letterSpacing: 2, color: "#6b7785", fontWeight: 700 }}>
              {BRAND.name.toUpperCase()} · OEFENPAKKET
            </div>
            <h2 style={{ fontSize: 30, margin: "10px 0 4px", color: "#1a2332" }}>
              Doorstroomtoets oefenen
            </h2>
            <div style={{ fontSize: 18, color: "#46546a", marginBottom: 28 }}>Groep 7 &amp; 8</div>

            <div
              style={{
                display: "inline-block",
                textAlign: "left",
                background: "#f4f7fb",
                borderRadius: 12,
                padding: "18px 26px",
                margin: "0 auto",
              }}
            >
              <div style={{ fontWeight: 700, color: "#1a2332", marginBottom: 8 }}>
                In dit pakket:
              </div>
              {genummerd.map((s) => (
                <div key={s.id} style={{ color: "#3a4658", fontSize: 15, marginBottom: 4 }}>
                  {s.emoji} {s.label} — {s.vragen.length} vragen
                </div>
              ))}
              <div style={{ color: "#3a4658", fontSize: 15, marginTop: 8, fontWeight: 600 }}>
                ✏️ Totaal {totaal} oefenvragen + antwoordsleutel met uitleg
              </div>
            </div>

            <div style={{ marginTop: 40, color: "#6b7785", fontSize: 14, lineHeight: 1.6 }}>
              <p style={{ margin: "0 0 4px" }}>
                <strong>Naam:</strong> ______________________________
              </p>
              <p style={{ margin: 0 }}>
                <strong>Datum:</strong> ______________________________
              </p>
            </div>

            <div style={{ marginTop: 50, color: "#9aa6b4", fontSize: 12 }}>
              © {BRAND.publisher} · {BRAND.domain} · Oefenvragen in stijl van de
              Doorstroomtoets — geen officiële Cito/IEP-vragen.
            </div>
          </div>
        </Sheet>

        {/* Opgaven per onderwerp */}
        {genummerd.map((s) => (
          <Sheet key={s.id}>
            <SectieKop emoji={s.emoji} label={s.label} />
            {s.vragen.map((v) => (
              <Opgave key={v.nr} v={v} />
            ))}
          </Sheet>
        ))}

        {/* Antwoordsleutel */}
        <Sheet>
          <SectieKop emoji="✅" label="Antwoordsleutel & uitleg" />
          <p style={{ color: "#6b7785", fontSize: 13, marginTop: -8, marginBottom: 18 }}>
            Voor ouders/begeleiders. Bespreek bij een fout antwoord eerst de
            uitleg en laat je kind de vraag opnieuw proberen.
          </p>
          {genummerd.map((s) => (
            <div key={s.id} style={{ marginBottom: 14 }}>
              <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 14, margin: "10px 0 6px" }}>
                {s.emoji} {s.label}
              </div>
              {s.vragen.map((v) => (
                <div key={v.nr} style={{ marginBottom: 8, fontSize: 13.5, lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, color: "#1a2332" }}>
                    {v.nr}. {LETTERS[v.answer]}
                  </span>{" "}
                  <span style={{ color: "#3a4658" }}>
                    ({stripMd(v.options[v.answer])})
                  </span>
                  {v.uitleg && (
                    <span style={{ color: "#6b7785" }}> — {stripMd(v.uitleg)}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 30, paddingTop: 16, borderTop: "1px solid #e3e8ef", textAlign: "center" }}>
            <div style={{ color: "#46546a", fontSize: 14, fontWeight: 600 }}>
              Meer oefenen met uitleg op 3 niveaus?
            </div>
            <div style={{ color: "#6b7785", fontSize: 13, marginTop: 4 }}>
              Gratis op {BRAND.domain} — een leerkwartier per dag.
            </div>
          </div>
        </Sheet>
      </div>
    </div>
  );
}

function stripMd(t = "") {
  return t.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
}

function Sheet({ children }) {
  return (
    <div
      className="oefenpakket-sheet"
      style={{
        background: "#fff",
        color: "#1a2332",
        width: "100%",
        maxWidth: 740,
        margin: "0 auto 24px",
        padding: "40px 44px",
        borderRadius: 8,
        boxShadow: "0 6px 30px rgba(0,0,0,0.4)",
        fontFamily: "Georgia, 'Times New Roman', serif",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

function SectieKop({ emoji, label }) {
  return (
    <h3
      style={{
        fontSize: 20,
        color: "#1a2332",
        margin: "0 0 16px",
        paddingBottom: 8,
        borderBottom: "2px solid #1a2332",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {emoji} {label}
    </h3>
  );
}

function Opgave({ v }) {
  return (
    <div style={{ marginBottom: 18, breakInside: "avoid" }}>
      <div
        style={{ fontSize: 15, color: "#1a2332", marginBottom: 8, lineHeight: 1.45 }}
        dangerouslySetInnerHTML={{ __html: `<strong>${v.nr}.</strong> ${mdNaarHtml(v.q)}` }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 18px", paddingLeft: 18 }}>
        {v.options.map((opt, i) => (
          <div
            key={i}
            style={{ fontSize: 14, color: "#3a4658", lineHeight: 1.5 }}
            dangerouslySetInnerHTML={{
              __html: `<strong>${LETTERS[i]}.</strong>&nbsp; ${mdNaarHtml(opt)}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
