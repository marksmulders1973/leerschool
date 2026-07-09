// Redactiebladen-pagina "/redactiebladen" — printbare bundel verhaaltjessommen
// (redactiesommen), onderdeel van de print-lijn (Mark 2026-07-02).
// De sommen komen rechtstreeks uit het redactiesommen-leerpad (eigen werk,
// Cito-stijl): lezen → zelf de som bedenken → rekenen. Mét kladruimte per som,
// een ouderpagina met het stappenplan + signaalwoorden-tabel, en een
// antwoordsleutel met korte uitleg achter de e-mail-poort (zelfde recept als
// het oefenpakket; wie al ontgrendelde hoeft niets opnieuw te doen).

import { useEffect, useRef, useState } from "react";
import { BRAND } from "../brand.js";
import PrintFooter from "../shared/ui/PrintFooter.jsx";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import redactiePad from "../learnPaths/redactiesommen.js";
import { shuffleOptiesSeeded } from "../shared/shuffleOpties.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

const PRINT_CSS = `
@media print {
  html, body { overflow: visible !important; height: auto !important; max-width: none !important; }
  #root { min-height: 0 !important; }
  body * { visibility: hidden !important; }
  .redactie-print, .redactie-print * { visibility: visible !important; }
  .redactie-print {
    position: absolute !important;
    top: 0; left: 0; right: 0;
    margin: 0 !important;
    background: #fff !important;
  }
  .redactie-noprint { display: none !important; }
  .redactie-sheet {
    box-shadow: none !important;
    margin: 0 auto !important;
    page-break-after: always;
    border: none !important;
  }
  .redactie-sheet:last-child { page-break-after: auto; }
  .redactie-vraag { break-inside: avoid; page-break-inside: avoid; }
  @page { margin: 16mm 14mm; }
}
`;

const MAIL_DONE_KEY = "lk_redactiebladen_mail";
const ANDERE_KEYS = ["lk_oefenpakket_mail", "lk_leesladder_mail"];

function isGeldig(c) {
  return Array.isArray(c.options) && c.options.length >= 2 && Number.isInteger(c.answer) && c.answer >= 0 && c.answer < c.options.length;
}
function korteUitleg(c) {
  const u = c.uitlegPad;
  if (!u) return "";
  if (u.niveaus?.basis) return u.niveaus.basis;
  if (Array.isArray(u.stappen) && u.stappen[0]?.tekst) return u.stappen[0].tekst;
  if (u.theorie) return u.theorie;
  return "";
}
function mdNaarHtml(t = "") {
  return t
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\*)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
}
function stripMd(t = "") {
  return t.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
}
function schoonTitel(t = "") {
  return t.replace(/\s*[—-]\s*~?\d+\s*min.*$/i, "").trim();
}

// Hoofdstukken (= stappen) met geldige vragen uit het leerpad.
function bouwHoofdstukken() {
  const chapters = redactiePad.chapters || [];
  const out = [];
  (redactiePad.steps || []).forEach((step, i) => {
    const ch = chapters.find((c) => i >= c.from && i <= c.to);
    // Seeded optie-hussel (fix 2026-07-08): juiste antwoord staat in de data
    // vrijwel altijd op index 0 → geprinte sleutel was bijna overal "A".
    // Seeded zodat een eerder geprint blad blijft matchen met een later
    // ontgrendelde antwoordsleutel.
    const vragen = (step.checks || []).map((c, ci) => ({ c, ci })).filter(({ c }) => isGeldig(c)).map(({ c, ci }) => {
      const g = shuffleOptiesSeeded(c, `${redactiePad.id}::${i}::${ci}`);
      return { q: g.q, options: g.options, answer: g.answer, uitleg: korteUitleg(g) };
    });
    if (vragen.length) out.push({ titel: schoonTitel(ch?.title || step.title), emoji: ch?.emoji || "➕", vragen });
  });
  return out;
}

function leadSource() {
  try {
    const p = new URLSearchParams(window.location.search);
    const utm = p.get("utm_source");
    if (utm) return `utm:${utm}${p.get("utm_campaign") ? "/" + p.get("utm_campaign") : ""}`.slice(0, 80);
    const intern = sessionStorage.getItem("lk_lead_src");
    if (intern) return intern.slice(0, 80);
    const ref = document.referrer;
    if (ref) {
      const h = new URL(ref).hostname.replace(/^www\./, "");
      if (h && !h.includes("leerkwartier")) return `ref:${h}`.slice(0, 80);
    }
  } catch {}
  return "redactiebladen-direct";
}

export default function RedactiebladenPage({ setPage } = {}) {
  const [email, setEmail] = useState("");
  const [mailStatus, setMailStatus] = useState("idle");
  const emailRef = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Gratis redactiesommen-bundel (printbaar) — verhaaltjessommen oefenen — " + BRAND.name;
    const style = document.createElement("style");
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    try {
      if (localStorage.getItem(MAIL_DONE_KEY) || ANDERE_KEYS.some((k) => localStorage.getItem(k))) setMailStatus("done");
    } catch {}
    track("redactiebladen_open", { source: leadSource() });
    return () => { document.title = prevTitle; document.head.removeChild(style); };
  }, []);

  function scrollNaarFormulier() {
    try {
      emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => emailRef.current?.focus(), 400);
    } catch {}
  }

  async function meldAan(e) {
    e.preventDefault();
    const adres = email.trim();
    if (!adres.includes("@") || adres.length < 5) { setMailStatus("error"); return; }
    setMailStatus("busy");
    try {
      const source = leadSource();
      const { error } = await supabase.from("upgrade_waitlist").insert({ email: adres, plan: "redactiebladen", source });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(MAIL_DONE_KEY, "1"); } catch {}
      track("redactiebladen_mail_signup", { source });
      setMailStatus("done");
    } catch { setMailStatus("error"); }
  }

  let teller = 0;
  const hoofdstukken = bouwHoofdstukken().map((h) => ({
    ...h,
    vragen: h.vragen.map((v) => ({ ...v, nr: ++teller })),
  }));
  const totaal = teller;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 80px" }}>
      <div className="redactie-noprint" style={{ marginBottom: 24 }}>
        <button onClick={() => setPage && setPage("home")} aria-label="Naar de homepage" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer", padding: 0, marginBottom: 6 }}>
          <svg viewBox="0 0 100 100" style={{ width: 22, height: 22 }} aria-hidden="true"><path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" /></svg>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--color-text, #e8edf5)" }}>{BRAND.name}</span>
          <span style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>· naar home</span>
        </button>
        <div>
          <button onClick={() => setPage && setPage("printen")} style={{ background: "transparent", border: "none", color: "var(--color-text-muted, #8899aa)", cursor: "pointer", fontSize: 14, padding: 0, marginBottom: 12 }}>
            ← Alle printbare pakketten
          </button>
        </div>

        <h1 style={{ fontSize: 26, margin: "0 0 8px", color: "var(--color-text, #e8edf5)" }}>
          📝 Redactiesommen-bundel — verhaaltjessommen op papier
        </h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 18px", lineHeight: 1.5 }}>
          Verhaaltjessommen zijn hét struikelblok bij rekenen: het rekenen lukt wel, het
          <strong style={{ color: "var(--color-text, #e8edf5)" }}> lezen en kiezen van de som</strong> niet. Deze bundel bevat{" "}
          {totaal} sommen in Cito-stijl, opgebouwd van signaalwoorden naar twee-stap-sommen — met
          kladruimte per som, een ouderpagina met het stappenplan en een antwoordsleutel met uitleg.
        </p>

        <div style={{ border: "1.5px solid rgba(66,165,245,0.4)", background: "rgba(66,165,245,0.08)", borderRadius: 14, padding: "16px 18px", marginBottom: 20 }}>
          {mailStatus === "done" ? (
            <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 15, lineHeight: 1.5 }}>
              ✓ <strong>Gelukt!</strong> De antwoordsleutel met uitleg staat achterin de bundel.
              Je krijgt elke week 15 minuten gratis oefenstof in je mail. 💚
            </div>
          ) : (
            <form onSubmit={meldAan}>
              <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 17, fontWeight: 800, marginBottom: 4 }}>
                🔑 Samen nakijken — mét uitleg per som?
              </div>
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, marginBottom: 12, lineHeight: 1.55 }}>
                De bundel print je <strong style={{ color: "var(--color-text, #e8edf5)" }}>gratis</strong>. Vul je e-mail in en je
                krijgt er meteen bij: <strong style={{ color: "var(--color-text, #e8edf5)" }}>de antwoordsleutel met korte uitleg per som</strong> +
                elke week een nieuw oefenkwartiertje.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <input ref={emailRef} type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (mailStatus === "error") setMailStatus("idle"); }} placeholder="jouw@email.nl" aria-label="E-mailadres"
                  style={{ flex: "1 1 200px", minWidth: 0, padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text, #e8edf5)", fontSize: 16 }} />
                <button type="submit" disabled={mailStatus === "busy"}
                  style={{ padding: "12px 22px", borderRadius: 10, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 15, fontWeight: 800, cursor: mailStatus === "busy" ? "wait" : "pointer" }}>
                  {mailStatus === "busy" ? "Even bezig…" : "Stuur de antwoordsleutel →"}
                </button>
              </div>
              {mailStatus === "error" && <div style={{ color: "#ff8a65", fontSize: 13, marginTop: 8 }}>Vul een geldig e-mailadres in en probeer het opnieuw.</div>}
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 11.5, marginTop: 9 }}>🔒 Geen spam. Uitschrijven met 1 klik.</div>
            </form>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <button onClick={() => { track("redactiebladen_print"); window.print(); }}
            style={{ padding: "14px 28px", borderRadius: 12, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 17, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(66,165,245,0.35)" }}>
            🖨️ Opslaan als PDF / Printen
          </button>
          <span style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>{totaal} sommen · {hoofdstukken.length} hoofdstukken</span>
        </div>
      </div>

      {/* ── Printbare bundel ─────────────────────────────── */}
      <div className="redactie-print">
        <Sheet>
          <div style={{ textAlign: "center", paddingTop: 50 }}>
            <div style={{ fontSize: 54, marginBottom: 8 }}>📝</div>
            <div style={{ fontSize: 13, letterSpacing: 2, color: "#6b7785", fontWeight: 700 }}>{BRAND.name.toUpperCase()} · REDACTIESOMMEN</div>
            <h2 style={{ fontSize: 30, margin: "10px 0 4px", color: "#1a2332" }}>Verhaaltjessommen oefenen</h2>
            <div style={{ fontSize: 18, color: "#46546a", marginBottom: 26 }}>Groep 5 t/m 8</div>
            <div style={{ display: "inline-block", textAlign: "left", background: "#f4f7fb", borderRadius: 12, padding: "18px 26px" }}>
              <div style={{ fontWeight: 700, color: "#1a2332", marginBottom: 8 }}>In deze bundel:</div>
              {hoofdstukken.map((h, i) => (
                <div key={i} style={{ color: "#3a4658", fontSize: 15, marginBottom: 4 }}>
                  {h.emoji} {h.titel} <span style={{ color: "#8893a3", fontSize: 13 }}>— {h.vragen.length} sommen</span>
                </div>
              ))}
              <div style={{ color: "#1a2332", fontSize: 15, marginTop: 10, fontWeight: 700, borderTop: "1px solid #dde3ec", paddingTop: 8 }}>
                ✏️ Totaal {totaal} sommen + antwoordsleutel met uitleg
              </div>
            </div>
            <div style={{ marginTop: 36, color: "#6b7785", fontSize: 14, lineHeight: 1.7 }}>
              <p style={{ margin: "0 0 4px" }}><strong>Naam:</strong> ______________________________</p>
              <p style={{ margin: 0 }}><strong>Datum:</strong> ______________________________</p>
            </div>
            <div style={{ marginTop: 44, color: "#9aa6b4", fontSize: 12 }}>© {BRAND.publisher} · {BRAND.domain} · Eigen oefensommen in Cito-stijl.</div>
          </div>
        </Sheet>

        <Sheet>
          <SectieKop emoji="👪" label="Voor de ouder — het stappenplan" />
          <Alinea titel="Waarom zijn verhaaltjessommen zo lastig?">
            Niet door het rekenen, maar door het lezen: je kind moet zélf bedenken
            wélke som er in het verhaal verstopt zit. Dat is precies wat de
            Doorstroomtoets toetst. Oefen daarom niet alleen het antwoord, maar
            vooral de weg ernaartoe.
          </Alinea>
          <Alinea titel="Het stappenplan (laat je kind dit hardop doen)">
            1. Lees de som twee keer. 2. Wat wordt er gevraagd? Zeg het in je eigen
            woorden. 3. Welke getallen heb je nodig — en welke zijn afleiders?
            4. Kies de bewerking (zie de signaalwoorden hieronder). 5. Reken uit in
            de kladruimte. 6. Check: kan dit antwoord kloppen?
          </Alinea>
          <div style={{ margin: "18px 0", background: "#f4f7fb", borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 14, marginBottom: 8, fontFamily: "Arial, sans-serif" }}>🔎 Signaalwoorden-spiekbrief</div>
            <div style={{ fontSize: 13.5, color: "#3a4658", lineHeight: 1.8 }}>
              <strong>Optellen (+):</strong> samen, totaal, in totaal, erbij<br />
              <strong>Aftrekken (−):</strong> verschil, over, rest, minder dan, weggegeven<br />
              <strong>Vermenigvuldigen (×):</strong> per, elk, iedereen krijgt, per stuk<br />
              <strong>Delen (÷):</strong> gelijk verdeeld, hoeveel ieder, in groepen van
            </div>
          </div>
          <Alinea titel="Bij een fout antwoord">
            Vraag eerst: "welke som heb je gemaakt?" — vaak zit de fout in de keuze,
            niet in het rekenen. Kijk dan samen in de antwoordsleutel achterin: daar
            staat per som een korte uitleg. Online op {BRAND.domain} staat bij elke
            som uitleg op drie niveaus.
          </Alinea>
        </Sheet>

        {hoofdstukken.map((h, hi) => (
          <Sheet key={hi}>
            <SectieKop emoji={h.emoji} label={`${hi + 1}. ${h.titel}`} />
            {h.vragen.map((v) => (
              <div key={v.nr} className="redactie-vraag" style={{ marginBottom: 18, breakInside: "avoid" }}>
                <div style={{ fontSize: 15, color: "#1a2332", marginBottom: 8, lineHeight: 1.5 }}
                  dangerouslySetInnerHTML={{ __html: `<strong>${v.nr}.</strong> ${mdNaarHtml(v.q)}` }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 18px", paddingLeft: 18, marginBottom: 6 }}>
                  {v.options.map((opt, i) => (
                    <div key={i} style={{ fontSize: 14, color: "#3a4658", lineHeight: 1.5 }}
                      dangerouslySetInnerHTML={{ __html: `<strong>${LETTERS[i]}.</strong>&nbsp; ${mdNaarHtml(String(opt))}` }} />
                  ))}
                </div>
                <div style={{ marginLeft: 18, borderBottom: "1px dotted #c9d2de", paddingBottom: 14, fontSize: 11.5, color: "#9aa6b4" }}>
                  🖊️ klad:
                </div>
              </div>
            ))}
          </Sheet>
        ))}

        {mailStatus === "done" ? (
          <Sheet>
            <SectieKop emoji="✅" label="Antwoordsleutel & uitleg" />
            <p style={{ color: "#6b7785", fontSize: 13, marginTop: -8, marginBottom: 18 }}>
              Vraag bij een fout eerst "welke som maakte je?" en bespreek dan de uitleg.
            </p>
            {hoofdstukken.map((h, hi) => (
              <div key={hi} style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 700, color: "#46546a", fontSize: 13, margin: "6px 0 4px", fontFamily: "Arial, sans-serif" }}>{h.emoji} {hi + 1}. {h.titel}</div>
                {h.vragen.map((v) => (
                  <div key={v.nr} className="redactie-vraag" style={{ marginBottom: 6, fontSize: 13, lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 700, color: "#1a2332" }}>{v.nr}. {LETTERS[v.answer]}</span>{" "}
                    <span style={{ color: "#3a4658" }}>({stripMd(String(v.options[v.answer]))})</span>
                    {v.uitleg && <span style={{ color: "#6b7785" }}> — {stripMd(v.uitleg)}</span>}
                  </div>
                ))}
              </div>
            ))}
            <div style={{ marginTop: 24, paddingTop: 14, borderTop: "1px solid #e3e8ef", textAlign: "center", fontSize: 13, color: "#6b7785" }}>
              Meer printbaar oefenmateriaal: {BRAND.domain}/printen
            </div>
          </Sheet>
        ) : (
          <Sheet>
            <SectieKop emoji="🔒" label="Antwoordsleutel & uitleg (vergrendeld)" />
            <p style={{ color: "#6b7785", fontSize: 14, lineHeight: 1.6, marginTop: -4 }}>
              De antwoordsleutel met korte uitleg per som is <strong>vergrendeld</strong>. Vul je
              e-mailadres in om hem gratis te ontgrendelen — daarna print hij gewoon mee.
            </p>
            <button type="button" className="redactie-noprint" onClick={scrollNaarFormulier}
              style={{ marginTop: 14, padding: "13px 24px", borderRadius: 12, border: "none", background: "#42a5f5", color: "#0b1224", fontSize: 16, fontWeight: 800, cursor: "pointer" }}>
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
    <div className="redactie-sheet" style={{ background: "#fff", color: "#1a2332", width: "100%", maxWidth: 740, margin: "0 auto 24px", padding: "40px 44px", borderRadius: 8, boxShadow: "0 6px 30px rgba(0,0,0,0.4)", fontFamily: "Georgia, 'Times New Roman', serif", boxSizing: "border-box" }}>
      {children}
      <PrintFooter />
    </div>
  );
}
function SectieKop({ emoji, label }) {
  return <h3 style={{ fontSize: 20, color: "#1a2332", margin: "0 0 16px", paddingBottom: 8, borderBottom: "2px solid #1a2332", fontFamily: "Arial, sans-serif" }}>{emoji} {label}</h3>;
}
function Alinea({ titel, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 15, marginBottom: 3, fontFamily: "Arial, sans-serif" }}>{titel}</div>
      <p style={{ margin: 0, fontSize: 14.5, color: "#3a4658", lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}
