// Oefenpakket-pagina "/oefenpakket" — genereert een print-/PDF-klaar
// Doorstroomtoets-werkboek uit de echte app-vragen (rekenen, taal,
// studievaardigheden groep 8).
//
// Doel: ouder van groep 7/8 print thuis een compleet, net oefenwerkboek —
// per onderdeel ingedeeld in hoofdstukken, met een ouder-instructiepagina en
// een volledige antwoordsleutel met korte uitleg. WYSIWYG: op het scherm zie
// je dezelfde witte A4-vellen die de printer/PDF maakt.
//
// Bewust geen externe PDF-library: we gebruiken de browser-printdialoog
// (window.print → "Opslaan als PDF"). Werkt overal, nul dependencies.
//
// Visie-bewaker: de app-kern blijft gratis (gratis-belofte). Dit pakket is
// een gratis lead-magnet — geen koop-knop in de app. Vragen zijn eigen werk
// "in stijl van" de Doorstroomtoets, géén officiële Cito/IEP-vragen
// (copyright-policy). Externe link naar Cito's gratis voorbeeldboekje voor
// echte voorbeelden.

import PrintKnoppen from "../shared/ui/PrintKnoppen.jsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { BRAND } from "../brand.js";
import PrintFooter from "../shared/ui/PrintFooter.jsx";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import { shuffleOptiesSeeded } from "../shared/shuffleOpties.js";
import rekenenPad from "../learnPaths/doorstroomtoetsRekenenG8.js";
import taalPad from "../learnPaths/doorstroomtoetsTaalG8.js";
import studiePad from "../learnPaths/doorstroomtoetsStudievaardighedenG8.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const CITO_VOORBEELD_URL =
  "https://cito.nl/onderwijs/primair-onderwijs/doorstroomtoets-leerling-in-beeld";

const OMVANG = {
  compact: { label: "Compact", perHoofdstuk: 8, sub: "± snelle oefenronde" },
  normaal: { label: "Normaal", perHoofdstuk: 16, sub: "± compleet werkboek" },
  compleet: { label: "Compleet", perHoofdstuk: 999, sub: "± alle vragen" },
};

const ONDERWERPEN = [
  { id: "rekenen", label: "Rekenen", emoji: "🔢", pad: rekenenPad },
  { id: "taal", label: "Taal", emoji: "📖", pad: taalPad },
  { id: "studie", label: "Studievaardigheden", emoji: "🗺️", pad: studiePad },
];

// ── Helpers ─────────────────────────────────────────────────────
function isGeldig(check) {
  return (
    Array.isArray(check.options) &&
    check.options.length >= 2 &&
    Number.isInteger(check.answer) &&
    check.answer >= 0 &&
    check.answer < check.options.length
  );
}

function korteUitleg(check) {
  const u = check.uitlegPad;
  if (!u) return "";
  if (u.niveaus?.basis) return u.niveaus.basis;
  if (Array.isArray(u.stappen) && u.stappen[0]?.tekst) return u.stappen[0].tekst;
  if (u.theorie) return u.theorie;
  return "";
}

// "Breuken & decimalen — ~20 min" → "Breuken & decimalen"
function schoonHoofdstuk(titel = "") {
  return titel.replace(/\s*[—-]\s*~?\d+\s*min.*$/i, "").trim();
}

// Werkboek-structuur per onderwerp: hoofdstukken (= stappen) met vragen.
function werkboekUitPad(pad, perHoofdstuk) {
  const chapters = pad.chapters || [];
  const hoofdstukken = [];
  (pad.steps || []).forEach((step, i) => {
    const ch = chapters.find((c) => i >= c.from && i <= c.to);
    const titel = schoonHoofdstuk(ch?.title || step.title || `Deel ${i + 1}`);
    const emoji = ch?.emoji || "•";
    // Opties SEEDED schudden (fix 2026-07-08): in de pad-data staat het juiste
    // antwoord vrijwel altijd op index 0 — de geprinte antwoordsleutel was
    // daardoor bijna overal "A". Seeded (niet random) omdat de sleutel pas
    // later ontgrendelt (e-mail) — een werkboek van gisteren moet matchen met
    // een sleutel die vandaag geprint wordt.
    const vragen = (step.checks || [])
      .map((c, ci) => ({ c, ci }))
      .filter(({ c }) => isGeldig(c))
      .slice(0, perHoofdstuk)
      .map(({ c, ci }) => {
        const g = shuffleOptiesSeeded(c, `${pad.id}::${i}::${ci}`);
        return {
          q: g.q,
          options: g.options,
          answer: g.answer,
          uitleg: korteUitleg(g),
        };
      });
    if (vragen.length) hoofdstukken.push({ titel, emoji, vragen });
  });
  return hoofdstukken;
}

// Mini-markdown: **vet** en *cursief* → HTML (veilig ge-escaped).
function mdNaarHtml(tekst = "") {
  return tekst
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\*)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
}

function stripMd(t = "") {
  return t.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
}

// Print-stylesheet: bij printen verbergen we de hele app en tonen alleen
// het werkboek. Klassieke visibility-truc zodat alle layout-chrome wegvalt.
const PRINT_CSS = `
@media print {
  /* index.html zet html,body op overflow-x:hidden — dat laat Chrome het
     printwerk afkappen op 1 pagina. In print alles vrijgeven. */
  html, body { overflow: visible !important; height: auto !important; max-width: none !important; }
  #root { min-height: 0 !important; }
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
  .oefenpakket-vraag { break-inside: avoid; page-break-inside: avoid; }
  .oefenpakket-hoofdstuk { break-after: avoid; page-break-after: avoid; }
  @page { margin: 16mm 14mm; }
}
`;

const MAIL_DONE_KEY = "lk_oefenpakket_mail";

// Bron van de lead bepalen (Mark 2026-06-07): voorheen werd `source` nooit
// opgeslagen, dus we wisten niet via welk kanaal iemand binnenkwam. Volgorde:
// 1) UTM uit de URL (betaalde/social-campagnes), 2) interne home-CTA-vlag,
// 3) externe referrer-hostname, 4) anders 'oefenpakket-direct'.
function leadSource() {
  try {
    const p = new URLSearchParams(window.location.search);
    const utm = p.get("utm_source");
    if (utm) {
      const camp = p.get("utm_campaign");
      return `utm:${utm}${camp ? "/" + camp : ""}`.slice(0, 80);
    }
    const intern = sessionStorage.getItem("lk_lead_src");
    if (intern) return intern.slice(0, 80);
    const ref = document.referrer;
    if (ref) {
      const h = new URL(ref).hostname.replace(/^www\./, "");
      if (h && !h.includes("leerkwartier")) return `ref:${h}`.slice(0, 80);
    }
  } catch {}
  return "oefenpakket-direct";
}

export default function OefenpakketPage({ setPage } = {}) {
  const [actief, setActief] = useState({ rekenen: true, taal: true, studie: true });
  const [omvang, setOmvang] = useState("normaal");
  const [email, setEmail] = useState("");
  // 'idle' | 'busy' | 'done' | 'error' — 'done' ook als eerder al ingevuld.
  const [mailStatus, setMailStatus] = useState("idle");
  const emailRef = useRef(null);

  // Vanuit de vergrendelde antwoordsleutel onderaan: scroll terug naar het
  // e-mailveld en focus het, zodat de bezoeker op het moment van verlangen
  // (ze zien de slot-pagina) direct kan ontgrendelen. Conversie-fix 2026-06-07.
  function scrollNaarFormulier() {
    try {
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => emailRef.current?.focus(), 400);
    } catch {}
  }

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Gratis Doorstroomtoets oefenpakket (printbaar) — Leerkwartier";
    const style = document.createElement("style");
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    try {
      if ([MAIL_DONE_KEY, "lk_leesladder_mail", "lk_redactiebladen_mail"].some((k) => localStorage.getItem(k))) setMailStatus("done");
    } catch {}
    return () => {
      document.title = prevTitle;
      document.head.removeChild(style);
    };
  }, []);

  async function meldAan(e) {
    e.preventDefault();
    const adres = email.trim();
    if (!adres.includes("@") || adres.length < 5) {
      setMailStatus("error");
      return;
    }
    setMailStatus("busy");
    try {
      const source = leadSource();
      const { error } = await supabase
        .from("upgrade_waitlist")
        .insert({ email: adres, plan: "oefenpakket", source });
      // Dubbele inschrijving (unique-constraint) telt als succes.
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(MAIL_DONE_KEY, "1"); } catch {}
      track("oefenpakket_mail_signup", { omvang, source });
      setMailStatus("done");
    } catch {
      setMailStatus("error");
    }
  }

  const perHoofdstuk = OMVANG[omvang].perHoofdstuk;

  const secties = useMemo(
    () =>
      ONDERWERPEN.filter((o) => actief[o.id]).map((o) => ({
        ...o,
        hoofdstukken: werkboekUitPad(o.pad, perHoofdstuk),
      })),
    [actief, perHoofdstuk]
  );

  const totaal = secties.reduce(
    (n, s) => n + s.hoofdstukken.reduce((m, h) => m + h.vragen.length, 0),
    0
  );

  // Doorlopende vraagnummering over het hele pakket (voor de antwoordsleutel).
  let teller = 0;
  const genummerd = secties.map((s) => ({
    ...s,
    hoofdstukken: s.hoofdstukken.map((h) => ({
      ...h,
      vragen: h.vragen.map((v) => ({ ...v, nr: ++teller })),
    })),
  }));

  function toggle(id) {
    setActief((a) => ({ ...a, [id]: !a[id] }));
  }

  const geschatteMin = Math.max(5, Math.round(totaal * 0.75));

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 80px" }}>
      {/* ── Scherm-only bediening ───────────────────────────── */}
      <div className="oefenpakket-noprint" style={{ marginBottom: 24 }}>
        {/* Klikbare Leerkwartier-home (Mark 2026-06-03): bezoekers landen via
            posts/bio direct op deze pagina en zagen geen weg naar de home — het
            voelde alsof deze ene pagina "alles" was. Een klikbaar merk-logo is de
            universele home-affordance. Quarter-circle = brand-mark uit HomePage. */}
        <button
          onClick={() => setPage && setPage("home")}
          aria-label="Naar de homepage van Leerkwartier"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "transparent", border: "none", cursor: "pointer",
            padding: 0, marginBottom: 12,
          }}
        >
          <svg viewBox="0 0 100 100" style={{ width: 22, height: 22, flexShrink: 0 }} aria-hidden="true">
            <path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" />
          </svg>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--color-text, #e8edf5)", letterSpacing: "-0.01em" }}>
            {BRAND.name}
          </span>
          <span style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>· naar home</span>
        </button>

        <div>
          <button
            onClick={() => setPage && setPage("cito")}
            style={{
              background: "transparent", border: "none",
              color: "var(--color-text-muted, #8899aa)", cursor: "pointer",
              fontSize: 14, padding: 0, marginBottom: 12,
            }}
          >
            ← Terug naar Doorstroomtoets
          </button>
        </div>

        <h1 style={{ fontSize: 26, margin: "0 0 8px", color: "var(--color-text, #e8edf5)" }}>
          📄 Gratis Doorstroomtoets-oefenpakket
        </h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 18px", lineHeight: 1.5 }}>
          Print thuis een compleet oefenwerkboek voor groep 7/8 — per onderdeel
          ingedeeld in hoofdstukken, met een ouder-uitlegpagina en een volledige
          antwoordsleutel. Kies de onderdelen en de omvang, en klik op{" "}
          <strong>Opslaan als PDF</strong>. Vragen in stijl van de Doorstroomtoets
          (Cito/IEP), gemaakt door {BRAND.publisher}.
        </p>

        {/* Onderdelen — Mark-test 16 jul: hij drukte op "Rekenen" om rekenen te
            kiezen en zette 'm daarmee juist UIT (alles staat standaard aan).
            Fix: (1) hint-regel die uitlegt dat het schakelaars zijn, (2) AAN =
            merk-groen met vinkje, UIT = grijs met ➕ — zo is de stand in één
            oogopslag te lezen. */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 4 }}>
          Onderdelen
        </div>
        <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", marginBottom: 8 }}>
          Alles staat aan — tik op een onderdeel om het uit of weer aan te zetten.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
          {ONDERWERPEN.map((o) => {
            const aan = actief[o.id];
            return (
              <button
                key={o.id}
                onClick={() => toggle(o.id)}
                aria-pressed={aan}
                style={{
                  padding: "10px 16px", borderRadius: 999,
                  border: aan ? "1.5px solid #00C853" : "1.5px dashed rgba(255,255,255,0.25)",
                  background: aan ? "rgba(0,200,83,0.18)" : "transparent",
                  color: aan ? "var(--color-text, #e8edf5)" : "var(--color-text-muted, #8899aa)",
                  cursor: "pointer", fontSize: 15, fontWeight: 600,
                }}
              >
                {aan ? "✓ " : "➕ "}{o.emoji} {o.label}
              </button>
            );
          })}
        </div>

        {/* Omvang */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 8 }}>
          Omvang
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
          {Object.entries(OMVANG).map(([key, o]) => {
            const aan = omvang === key;
            return (
              <button
                key={key}
                onClick={() => setOmvang(key)}
                aria-pressed={aan}
                style={{
                  padding: "8px 16px", borderRadius: 12, textAlign: "left",
                  border: aan ? "1.5px solid #00C853" : "1.5px solid rgba(255,255,255,0.15)",
                  background: aan ? "rgba(0,200,83,0.18)" : "transparent",
                  color: aan ? "var(--color-text, #e8edf5)" : "var(--color-text-muted, #8899aa)",
                  cursor: "pointer", fontSize: 14, fontWeight: 600,
                }}
              >
                {aan ? "✓ " : ""}{o.label}
                <span style={{ display: "block", fontSize: 11, fontWeight: 400, opacity: 0.8 }}>{o.sub}</span>
              </button>
            );
          })}
        </div>

        {/* E-mail-drempel: de VRAGEN zijn gratis printbaar, maar de
            ANTWOORDSLEUTEL ontgrendelt pas na e-mail (2026-06-02, Mark).
            Reden: 15 bezoekers, 0 aanmeldingen toen alles gratis was — de
            antwoorden zijn de waarde die de opt-in waard maakt. */}
        <div
          style={{
            border: "1.5px solid rgba(66,165,245,0.4)",
            background: "rgba(66,165,245,0.08)",
            borderRadius: 14, padding: "16px 18px", marginBottom: 20,
          }}
        >
          {mailStatus === "done" ? (
            <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 15, lineHeight: 1.5 }}>
              ✓ <strong>Gelukt!</strong> De volledige antwoordsleutel met uitleg staat nu
              achterin het werkboek. En vanaf nu krijg je <strong>elke week 15 minuten
              gratis extra oefenstof</strong> in je mail. Veel succes met oefenen! 💚
            </div>
          ) : (
            <form onSubmit={meldAan}>
              <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 17, fontWeight: 800, marginBottom: 4 }}>
                🔑 Weet jij straks of je kind het goed heeft?
              </div>
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, marginBottom: 12, lineHeight: 1.55 }}>
                Het hele werkboek print je <strong style={{ color: "var(--color-text, #e8edf5)" }}>gratis</strong>. Vul je e-mail in en je krijgt er meteen bij:
                {" "}<strong style={{ color: "var(--color-text, #e8edf5)" }}>de volledige antwoordsleutel mét korte uitleg</strong>
                {" "}— zo kun je samen nakijken én uitleggen waaróm iets goed is. Plus
                {" "}<strong style={{ color: "var(--color-text, #e8edf5)" }}>elke week een nieuw oefenkwartiertje</strong> voor de Doorstroomtoets.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <input
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (mailStatus === "error") setMailStatus("idle"); }}
                  placeholder="jouw@email.nl"
                  aria-label="E-mailadres"
                  style={{
                    flex: "1 1 200px", minWidth: 0, padding: "12px 14px",
                    borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.06)", color: "var(--color-text, #e8edf5)",
                    fontSize: 16,
                  }}
                />
                <button
                  type="submit"
                  disabled={mailStatus === "busy"}
                  style={{
                    padding: "12px 22px", borderRadius: 10, border: "none",
                    background: "var(--color-accent, #42a5f5)", color: "#0b1224",
                    fontSize: 15, fontWeight: 800,
                    cursor: mailStatus === "busy" ? "wait" : "pointer",
                  }}
                >
                  {mailStatus === "busy" ? "Even bezig…" : "Stuur de antwoordsleutel →"}
                </button>
              </div>
              {mailStatus === "error" && (
                <div style={{ color: "#ff8a65", fontSize: 13, marginTop: 8 }}>
                  Vul een geldig e-mailadres in en probeer het opnieuw.
                </div>
              )}
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 11.5, marginTop: 9, lineHeight: 1.5 }}>
                🔒 Geen spam. We delen je adres nooit met anderen. Uitschrijven met 1 klik.
              </div>
            </form>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <PrintKnoppen trackPrefix="oefenpakket" trackProps={{ omvang, source: leadSource() }} disabled={totaal === 0} />
          <span style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
            {totaal} {totaal === 1 ? "vraag" : "vragen"} · ± {geschatteMin} min oefenen
          </span>
        </div>

        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13, marginTop: 14, lineHeight: 1.5 }}>
          💡 Tip: kies in het printvenster bij <em>Bestemming</em> de optie
          “Opslaan als PDF”. Op iPhone/iPad: deel-knop → “Druk af” → knijp open
          om als PDF te bewaren.
        </p>

        {/* Kruislink naar de Leesladder (2026-07-02): ouders die dit pakket
            printen, hebben vaak óók een kind dat begrijpend-lezen-teksten te
            lang vindt — dat is precies waar de Leesladder voor is. */}
        <button
          onClick={() => setPage && setPage("leesladder")}
          style={{
            marginTop: 6, padding: "12px 16px", borderRadius: 12, textAlign: "left",
            border: "1.5px solid rgba(0,200,83,0.4)", background: "rgba(0,200,83,0.08)",
            color: "var(--color-text, #e8edf5)", cursor: "pointer", fontSize: 14, lineHeight: 1.5,
            display: "block", width: "100%",
          }}
        >
          🪜 <strong>Nieuw: de Leesladder</strong> — begrijpend lezen oefenen in kleine
          stapjes. Begint bij teksten van 5 zinnen, bouwt op naar toets-lengte. Ook
          gratis printbaar →
        </button>
      </div>

      {/* ── Het printbare werkboek (WYSIWYG witte vellen) ─────── */}
      <div className="oefenpakket-print">
        {/* Voorblad */}
        <Sheet>
          <div style={{ textAlign: "center", paddingTop: 50 }}>
            <div style={{ fontSize: 54, marginBottom: 8 }}>📘</div>
            <div style={{ fontSize: 13, letterSpacing: 2, color: "#6b7785", fontWeight: 700 }}>
              {BRAND.name.toUpperCase()} · OEFENWERKBOEK
            </div>
            <h2 style={{ fontSize: 30, margin: "10px 0 4px", color: "#1a2332" }}>
              Doorstroomtoets oefenen
            </h2>
            <div style={{ fontSize: 18, color: "#46546a", marginBottom: 26 }}>Groep 7 &amp; 8</div>

            <div style={{ display: "inline-block", textAlign: "left", background: "#f4f7fb", borderRadius: 12, padding: "18px 26px" }}>
              <div style={{ fontWeight: 700, color: "#1a2332", marginBottom: 8 }}>In dit werkboek:</div>
              {genummerd.map((s) => (
                <div key={s.id} style={{ color: "#3a4658", fontSize: 15, marginBottom: 4 }}>
                  {s.emoji} {s.label} — {s.hoofdstukken.reduce((m, h) => m + h.vragen.length, 0)} vragen
                  <span style={{ color: "#8893a3", fontSize: 13 }}>
                    {" "}({s.hoofdstukken.length} hoofdstukken)
                  </span>
                </div>
              ))}
              <div style={{ color: "#1a2332", fontSize: 15, marginTop: 10, fontWeight: 700, borderTop: "1px solid #dde3ec", paddingTop: 8 }}>
                ✏️ Totaal {totaal} oefenvragen + antwoordsleutel met uitleg
              </div>
            </div>

            <div style={{ marginTop: 36, color: "#6b7785", fontSize: 14, lineHeight: 1.7 }}>
              <p style={{ margin: "0 0 4px" }}><strong>Naam:</strong> ______________________________</p>
              <p style={{ margin: 0 }}><strong>Datum:</strong> ______________________________</p>
            </div>

            <div style={{ marginTop: 44, color: "#9aa6b4", fontSize: 12, lineHeight: 1.5 }}>
              © {BRAND.publisher} · {BRAND.domain} · Oefenvragen in stijl van de
              Doorstroomtoets — geen officiële Cito/IEP-vragen.
            </div>
          </div>
        </Sheet>

        {/* Ouder-instructiepagina */}
        <Sheet>
          <SectieKop emoji="👪" label="Voor de ouder — zo gebruik je dit werkboek" />
          <Alinea titel="Wat is de Doorstroomtoets?">
            De Doorstroomtoets (sinds 2024 — vroeger de Cito-eindtoets) wordt
            gemaakt in groep 8, in de eerste twee weken van februari. Hij test
            rekenen, taal en studievaardigheden. Dit werkboek oefent precies die
            onderdelen, in dezelfde stijl.
          </Alinea>
          <Alinea titel="Hoe pak je het aan?">
            Niet alles in één keer. Een kwartier per dag werkt aantoonbaar beter
            dan één lange sessie per week. Laat je kind één hoofdstuk per keer
            maken (± 15 minuten), bespreek daarna samen de antwoorden.
          </Alinea>
          <Alinea titel="Wat doe je bij een fout antwoord?">
            Geef niet meteen het juiste antwoord. Lees samen de korte uitleg in
            de antwoordsleutel achterin, en laat je kind de vraag dan opnieuw
            proberen. Begrijpen &gt; raden.
          </Alinea>
          <Alinea titel="Meer oefenen — met uitleg op 3 niveaus">
            Online op {BRAND.domain} opent bij elke fout een uitleg op drie
            niveaus (basis / simpeler / nog simpeler) en een leerpad over het
            onderliggende concept. Gratis te gebruiken.
          </Alinea>
          <div style={{ marginTop: 24, background: "#fff8e6", border: "1px solid #f0d98a", borderRadius: 10, padding: "14px 18px", fontSize: 13.5, color: "#5c4d1f", lineHeight: 1.55 }}>
            <strong>Officiële voorbeelden?</strong> Cito stelt een gratis
            voorbeeldopgavenboekje beschikbaar. Zoek op “Cito Leerling in Beeld
            voorbeeldopgaven” of kijk op{" "}
            <span style={{ textDecoration: "underline" }}>{CITO_VOORBEELD_URL.replace("https://", "")}</span>.
            De vragen in dit werkboek zijn eigen oefenvragen in dezelfde stijl —
            géén overgenomen toetsvragen.
          </div>
        </Sheet>

        {/* Opgaven per onderwerp → per hoofdstuk */}
        {genummerd.map((s) => (
          <Sheet key={s.id}>
            <SectieKop emoji={s.emoji} label={s.label} />
            {s.hoofdstukken.map((h, hi) => (
              <div key={hi} style={{ marginBottom: 22 }}>
                <h4
                  className="oefenpakket-hoofdstuk"
                  style={{
                    fontSize: 15, color: "#1a2332", margin: "0 0 12px",
                    fontFamily: "Arial, sans-serif",
                    background: "#eef2f8", borderRadius: 6, padding: "7px 12px",
                  }}
                >
                  {h.emoji} {hi + 1}. {h.titel}
                  <span style={{ color: "#8893a3", fontWeight: 400, fontSize: 12 }}>
                    {" "}· {h.vragen.length} vragen
                  </span>
                </h4>
                {h.vragen.map((v) => (
                  <Opgave key={v.nr} v={v} />
                ))}
              </div>
            ))}
          </Sheet>
        ))}

        {/* Antwoordsleutel — ontgrendelt pas na e-mail (Mark 2026-06-02) */}
        {mailStatus === "done" ? (
        <Sheet>
          <SectieKop emoji="✅" label="Antwoordsleutel & uitleg" />
          <p style={{ color: "#6b7785", fontSize: 13, marginTop: -8, marginBottom: 18 }}>
            Voor ouders/begeleiders. Bespreek bij een fout antwoord eerst de
            uitleg en laat je kind de vraag opnieuw proberen.
          </p>
          {genummerd.map((s) => (
            <div key={s.id} style={{ marginBottom: 14, breakInside: "avoid" }}>
              <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 15, margin: "14px 0 8px", fontFamily: "Arial, sans-serif", borderBottom: "1px solid #dde3ec", paddingBottom: 4 }}>
                {s.emoji} {s.label}
              </div>
              {s.hoofdstukken.map((h, hi) => (
                <div key={hi} style={{ marginBottom: 10 }}>
                  <div style={{ fontWeight: 700, color: "#46546a", fontSize: 13, margin: "6px 0 4px" }}>
                    {h.emoji} {hi + 1}. {h.titel}
                  </div>
                  {h.vragen.map((v) => (
                    <div key={v.nr} className="oefenpakket-vraag" style={{ marginBottom: 6, fontSize: 13, lineHeight: 1.45 }}>
                      <span style={{ fontWeight: 700, color: "#1a2332" }}>
                        {v.nr}. {LETTERS[v.answer] ?? "?"}
                      </span>{" "}
                      <span style={{ color: "#3a4658" }}>({v.options?.[v.answer] != null ? stripMd(v.options[v.answer]) : "—"})</span>
                      {v.uitleg && <span style={{ color: "#6b7785" }}> — {stripMd(v.uitleg)}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 28, paddingTop: 16, borderTop: "1px solid #e3e8ef", textAlign: "center" }}>
            <div style={{ color: "#46546a", fontSize: 14, fontWeight: 600 }}>
              Meer oefenen met uitleg op 3 niveaus?
            </div>
            <div style={{ color: "#6b7785", fontSize: 13, marginTop: 4 }}>
              Gratis op {BRAND.domain} — een leerkwartier per dag.
            </div>
          </div>
        </Sheet>
        ) : (
          <Sheet>
            <SectieKop emoji="🔒" label="Antwoordsleutel & uitleg (vergrendeld)" />
            <p style={{ color: "#6b7785", fontSize: 14, lineHeight: 1.6, marginTop: -4 }}>
              De volledige antwoordsleutel met korte uitleg is <strong>vergrendeld</strong>.
              Vul je e-mailadres in om hem gratis te ontgrendelen — daarna verschijnt hij
              hier en kun je hem meeprinten.
            </p>
            <button
              type="button"
              className="oefenpakket-noprint"
              onClick={scrollNaarFormulier}
              style={{
                marginTop: 14, padding: "13px 24px", borderRadius: 12, border: "none",
                background: "#42a5f5", color: "#0b1224", fontSize: 16, fontWeight: 800,
                cursor: "pointer", boxShadow: "0 4px 16px rgba(66,165,245,0.35)",
              }}
            >
              🔓 Ontgrendel de antwoorden (gratis)
            </button>
          </Sheet>
        )}
      </div>
    </div>
  );
}

function Sheet({ children }) {
  return (
    <div
      className="oefenpakket-sheet"
      style={{
        background: "#fff", color: "#1a2332", width: "100%", maxWidth: 740,
        margin: "0 auto 24px", padding: "40px 44px", borderRadius: 8,
        boxShadow: "0 6px 30px rgba(0,0,0,0.4)",
        fontFamily: "Georgia, 'Times New Roman', serif", boxSizing: "border-box",
      }}
    >
      {children}
      <PrintFooter />
    </div>
  );
}

function SectieKop({ emoji, label }) {
  return (
    <h3
      style={{
        fontSize: 20, color: "#1a2332", margin: "0 0 16px",
        paddingBottom: 8, borderBottom: "2px solid #1a2332",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {emoji} {label}
    </h3>
  );
}

function Alinea({ titel, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 15, marginBottom: 3, fontFamily: "Arial, sans-serif" }}>
        {titel}
      </div>
      <p style={{ margin: 0, fontSize: 14.5, color: "#3a4658", lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

function Opgave({ v }) {
  return (
    <div className="oefenpakket-vraag" style={{ marginBottom: 16, breakInside: "avoid" }}>
      <div
        style={{ fontSize: 15, color: "#1a2332", marginBottom: 8, lineHeight: 1.45 }}
        dangerouslySetInnerHTML={{ __html: `<strong>${v.nr}.</strong> ${mdNaarHtml(v.q)}` }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 18px", paddingLeft: 18 }}>
        {v.options.map((opt, i) => (
          <div
            key={i}
            style={{ fontSize: 14, color: "#3a4658", lineHeight: 1.5 }}
            dangerouslySetInnerHTML={{ __html: `<strong>${LETTERS[i]}.</strong>&nbsp; ${mdNaarHtml(opt)}` }}
          />
        ))}
      </div>
    </div>
  );
}
