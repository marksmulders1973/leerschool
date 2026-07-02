// Leesladder-pagina "/leesladder" — printbaar begrijpend-lezen-pakket dat
// KLEIN begint (5 zinnen) en per trede opbouwt naar echte toets-lengte.
//
// Waarom (Mark 2026-07-02, voor Brian): veel kinderen lopen bij begrijpend
// lezen vast op de LENGTE van de tekst, niet op het lezen zelf. Een collega
// zei het eerder al: "begin met heel weinig tekst en bouw op." Dit pakket is
// die tekstlengte-ladder op papier: succes-ervaring eerst, dan pas langer.
//
// Zelfde patroon als OefenpakketPage: WYSIWYG witte A4-vellen, printen via
// de browser (window.print → "Opslaan als PDF"), vragen gratis, de
// antwoordsleutel-met-uitleg ontgrendelt na e-mail (lead-magnet).
// Alle teksten zijn eigen werk — geen overgenomen toets- of boekteksten.

import { useEffect, useRef, useState } from "react";
import { BRAND } from "../brand.js";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import { VERSIES } from "./leesladderData.js";

const LETTERS = ["A", "B", "C", "D"];

// Drie versies met elk 15 teksten (zelfde treden, zelfde lees-trucs) — zie
// leesladderData.js. Versie B/C bestaan zodat een kind dat het antwoord al
// zag, met verse teksten hetzelfde BEGRIP kan oefenen (Mark 2026-07-02).
// De opties worden per vraag deterministisch gehusseld zodat het goede
// antwoord netjes over A-D spreidt ("de antwoorden waren vaak A").
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function husselVraag(v, seedStr) {
  let s = hashSeed(seedStr);
  const rnd = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const idx = v.options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = (rnd() * (i + 1)) | 0;
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return { ...v, options: idx.map((i) => v.options[i]), answer: idx.indexOf(v.answer) };
}

// ── Print-stylesheet (zelfde truc als het oefenpakket) ──────────
const PRINT_CSS = `
@media print {
  /* index.html zet html,body op overflow-x:hidden — dat laat Chrome het
     printwerk afkappen op 1 pagina. In print alles vrijgeven. */
  html, body { overflow: visible !important; height: auto !important; max-width: none !important; }
  #root { min-height: 0 !important; }
  body * { visibility: hidden !important; }
  .leesladder-print, .leesladder-print * { visibility: visible !important; }
  .leesladder-print {
    position: absolute !important;
    top: 0; left: 0; right: 0;
    margin: 0 !important;
    background: #fff !important;
  }
  .leesladder-noprint { display: none !important; }
  .leesladder-sheet {
    box-shadow: none !important;
    margin: 0 auto !important;
    page-break-after: always;
    border: none !important;
  }
  .leesladder-sheet:last-child { page-break-after: auto; }
  .leesladder-vraag, .leesladder-tekst { break-inside: avoid; page-break-inside: avoid; }
  @page { margin: 16mm 14mm; }
}
`;

const MAIL_DONE_KEY = "lk_leesladder_mail";
// Wie het Doorstroomtoets-oefenpakket al ontgrendelde, hoeft hier niet
// nóg een keer zijn e-mail in te vullen (zelfde ouder, zelfde belofte).
const OEFENPAKKET_MAIL_KEY = "lk_oefenpakket_mail";

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
  return "leesladder-direct";
}

export default function LeesladderPage({ setPage } = {}) {
  const [versie, setVersie] = useState("A");
  const [email, setEmail] = useState("");
  const [mailStatus, setMailStatus] = useState("idle");
  const emailRef = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "De Leesladder — begrijpend lezen oefenen in kleine stapjes (printbaar) — " + BRAND.name;
    const style = document.createElement("style");
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    try {
      if (localStorage.getItem(MAIL_DONE_KEY) || localStorage.getItem(OEFENPAKKET_MAIL_KEY)) setMailStatus("done");
    } catch {}
    track("leesladder_open", { source: leadSource() });
    return () => {
      document.title = prevTitle;
      document.head.removeChild(style);
    };
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
    if (!adres.includes("@") || adres.length < 5) {
      setMailStatus("error");
      return;
    }
    setMailStatus("busy");
    try {
      const source = leadSource();
      const { error } = await supabase
        .from("upgrade_waitlist")
        .insert({ email: adres, plan: "leesladder", source });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(MAIL_DONE_KEY, "1"); } catch {}
      track("leesladder_mail_signup", { source });
      setMailStatus("done");
    } catch {
      setMailStatus("error");
    }
  }

  // Doorlopende vraagnummering voor de antwoordsleutel + optie-hussel per versie.
  let teller = 0;
  const treden = VERSIES[versie].map((t, ti) => ({
    ...t,
    teksten: t.teksten.map((tx, xi) => ({
      ...tx,
      vragen: tx.vragen.map((v, vi) => ({ ...husselVraag(v, `${versie}-${ti}-${xi}-${vi}`), nr: ++teller })),
    })),
  }));
  const totaal = teller;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 80px" }}>
      {/* ── Scherm-only bediening ───────────────────────────── */}
      <div className="leesladder-noprint" style={{ marginBottom: 24 }}>
        <button
          onClick={() => setPage && setPage("home")}
          aria-label="Naar de homepage van Leerkwartier"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer", padding: 0, marginBottom: 12 }}
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
          <button onClick={() => setPage && setPage("printen")} style={{ background: "transparent", border: "none", color: "var(--color-text-muted, #8899aa)", cursor: "pointer", fontSize: 14, padding: 0, marginBottom: 12 }}>
            ← Alle printbare pakketten
          </button>
        </div>

        <h1 style={{ fontSize: 26, margin: "0 0 8px", color: "var(--color-text, #e8edf5)" }}>
          🪜 De Leesladder — begrijpend lezen in kleine stapjes
        </h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 18px", lineHeight: 1.5 }}>
          Vindt je kind de teksten bij begrijpend lezen <strong style={{ color: "var(--color-text, #e8edf5)" }}>te lang</strong>?
          De Leesladder begint bij teksten van <strong style={{ color: "var(--color-text, #e8edf5)" }}>vijf zinnen</strong> en
          bouwt in vier treden op naar echte toets-lengte. Er zijn <strong style={{ color: "var(--color-text, #e8edf5)" }}>drie versies</strong> met
          elk 15 teksten en {totaal} vragen — zelfde opbouw en dezelfde lees-trucs, maar andere verhalen. Zo oefent je kind
          na een fout het <em>begrip</em>, niet het onthouden antwoord. Plus een ouderpagina en een antwoordsleutel die bij
          elke vraag uitlegt <em>waaróm</em> het antwoord klopt. Print gratis via <strong>Opslaan als PDF</strong>.
        </p>

        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 8 }}>Welke versie?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
          {["A", "B", "C"].map((vv) => {
            const aan = versie === vv;
            return (
              <button key={vv} onClick={() => setVersie(vv)} style={{
                padding: "9px 18px", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer",
                border: aan ? "1.5px solid var(--color-accent, #42a5f5)" : "1.5px solid rgba(255,255,255,0.15)",
                background: aan ? "rgba(66,165,245,0.15)" : "transparent",
                color: aan ? "var(--color-text, #e8edf5)" : "var(--color-text-muted, #8899aa)",
              }}>
                {aan ? "✓ " : ""}Versie {vv}
                <span style={{ display: "block", fontSize: 11, fontWeight: 400, opacity: 0.8 }}>
                  {vv === "A" ? "start hier" : "andere teksten"}
                </span>
              </button>
            );
          })}
        </div>

        {/* E-mail-poort: vragen gratis, antwoordsleutel na e-mail (zelfde
            bewezen recept als het oefenpakket). */}
        <div style={{ border: "1.5px solid rgba(66,165,245,0.4)", background: "rgba(66,165,245,0.08)", borderRadius: 14, padding: "16px 18px", marginBottom: 20 }}>
          {mailStatus === "done" ? (
            <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 15, lineHeight: 1.5 }}>
              ✓ <strong>Gelukt!</strong> De antwoordsleutel met uitleg staat nu achterin
              het pakket. En je krijgt <strong>elke week 15 minuten gratis extra
              oefenstof</strong> in je mail. Veel leesplezier samen! 💚
            </div>
          ) : (
            <form onSubmit={meldAan}>
              <div style={{ color: "var(--color-text, #e8edf5)", fontSize: 17, fontWeight: 800, marginBottom: 4 }}>
                🔑 Wil je ook kunnen nakijken — mét uitleg per vraag?
              </div>
              <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, marginBottom: 12, lineHeight: 1.55 }}>
                De hele Leesladder print je <strong style={{ color: "var(--color-text, #e8edf5)" }}>gratis</strong>.
                Vul je e-mail in en je krijgt er meteen bij: <strong style={{ color: "var(--color-text, #e8edf5)" }}>de
                antwoordsleutel waarin elke vraag kort wordt uitgelegd</strong> — zodat jij het als
                ouder óók kunt voordoen. Plus elke week een nieuw oefenkwartiertje.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <input
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (mailStatus === "error") setMailStatus("idle"); }}
                  placeholder="jouw@email.nl"
                  aria-label="E-mailadres"
                  style={{ flex: "1 1 200px", minWidth: 0, padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text, #e8edf5)", fontSize: 16 }}
                />
                <button
                  type="submit"
                  disabled={mailStatus === "busy"}
                  style={{ padding: "12px 22px", borderRadius: 10, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 15, fontWeight: 800, cursor: mailStatus === "busy" ? "wait" : "pointer" }}
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
          <button
            onClick={() => { track("leesladder_print"); window.print(); }}
            style={{ padding: "14px 28px", borderRadius: 12, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 17, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(66,165,245,0.35)" }}
          >
            🖨️ Opslaan als PDF / Printen
          </button>
          <span style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
            Versie {versie} · 15 teksten · {totaal} vragen · 4 treden
          </span>
        </div>

        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13, marginTop: 14, lineHeight: 1.5 }}>
          💡 Tip: kies in het printvenster bij <em>Bestemming</em> de optie “Opslaan als
          PDF”. Ook fijn: print alleen de trede waar je kind nu is — elke trede begint
          op een nieuwe pagina. Liever online oefenen met uitleg op 3 niveaus? Dat kan
          gratis op {BRAND.domain}.
        </p>
      </div>

      {/* ── Het printbare pakket ─────────────────────────────── */}
      <div className="leesladder-print">
        {/* Voorblad */}
        <Sheet>
          <div style={{ textAlign: "center", paddingTop: 50 }}>
            <div style={{ fontSize: 54, marginBottom: 8 }}>🪜</div>
            <div style={{ fontSize: 13, letterSpacing: 2, color: "#6b7785", fontWeight: 700 }}>
              {BRAND.name.toUpperCase()} · LEESLADDER
            </div>
            <h2 style={{ fontSize: 30, margin: "10px 0 4px", color: "#1a2332" }}>
              Begrijpend lezen in kleine stapjes
            </h2>
            <div style={{ fontSize: 18, color: "#46546a", marginBottom: 6 }}>Groep 5 t/m 8</div>
            <div style={{ display: "inline-block", fontSize: 14, fontWeight: 700, color: "#1a2332", border: "2px solid #1a2332", borderRadius: 999, padding: "4px 18px", marginBottom: 22 }}>
              Versie {versie}
            </div>

            <div style={{ display: "inline-block", textAlign: "left", background: "#f4f7fb", borderRadius: 12, padding: "18px 26px" }}>
              <div style={{ fontWeight: 700, color: "#1a2332", marginBottom: 8 }}>De ladder:</div>
              {treden.map((t) => (
                <div key={t.nr} style={{ color: "#3a4658", fontSize: 15, marginBottom: 4 }}>
                  {t.emoji} Trede {t.nr}: {t.titel}
                  <span style={{ color: "#8893a3", fontSize: 13 }}> — {t.teksten.length} teksten</span>
                </div>
              ))}
              <div style={{ color: "#1a2332", fontSize: 15, marginTop: 10, fontWeight: 700, borderTop: "1px solid #dde3ec", paddingTop: 8 }}>
                ✏️ Totaal {totaal} vragen + antwoordsleutel met uitleg
              </div>
            </div>

            <div style={{ marginTop: 36, color: "#6b7785", fontSize: 14, lineHeight: 1.7 }}>
              <p style={{ margin: "0 0 4px" }}><strong>Naam:</strong> ______________________________</p>
              <p style={{ margin: 0 }}><strong>Ik ben nu op trede:</strong> 1 · 2 · 3 · 4</p>
            </div>

            <div style={{ marginTop: 44, color: "#9aa6b4", fontSize: 12, lineHeight: 1.5 }}>
              © {BRAND.publisher} · {BRAND.domain} · Alle teksten zijn eigen oefenteksten.
            </div>
          </div>
        </Sheet>

        {/* Ouder-pagina: de ladder-methode */}
        <Sheet>
          <SectieKop emoji="👪" label="Voor de ouder — zo werkt de Leesladder" />
          <Alinea titel="Waarom klein beginnen?">
            Veel kinderen kúnnen best lezen, maar haken af op de lengte van de
            tekst. Bij een tekst van vijf zinnen lukt het wél — en dat
            succes-gevoel is precies de brandstof om door te gaan. Elke trede
            maakt de tekst iets langer, terwijl de vragen hetzelfde soort
            denkwerk blijven vragen. Zo went je kind stap voor stap aan langere
            teksten, zonder het gevoel te verzuipen.
          </Alinea>
          <Alinea titel="Hoe gebruik je het pakket?">
            Eén of twee teksten per dag is genoeg — een kwartiertje. Laat je
            kind de tekst lezen (hardop mag, zeker op trede 1 en 2), de vragen
            maken, en kijk daarna sámen na met de antwoordsleutel achterin.
            Blijf minstens een paar dagen op dezelfde trede.
          </Alinea>
          <Alinea titel="Wanneer naar de volgende trede?">
            Vuistregel: gaat ruim driekwart van de vragen goed én vindt je kind
            het “makkelijk”? Dan mag de volgende trede. Gaat het mis, zak dan
            gewoon een trede terug — dat is geen falen, dat is trainen.
          </Alinea>
          <Alinea titel="Wat doe je bij een fout antwoord?">
            Niet het goede antwoord voorzeggen. Vraag: “Waar in de tekst kun je
            het vinden?” en lees die zin samen nog een keer. In de
            antwoordsleutel staat per vraag een korte uitleg mét de lees-truc
            (bijvoorbeeld: verwijswoorden wijzen terug naar de zin ervoor).
            Die trucs zijn het échte doel van dit pakket.
          </Alinea>
          <Alinea titel="Verder oefenen">
            Online op {BRAND.domain} staat meer begrijpend lezen, met uitleg op
            drie niveaus bij elke fout — gratis. Zoek op “begrijpend lezen”.
          </Alinea>
          <div style={{ marginTop: 22, background: "#eef7ee", border: "1px solid #bcd9bc", borderRadius: 10, padding: "14px 18px", fontSize: 13.5, color: "#274427", lineHeight: 1.6 }}>
            <strong>De lees-trucs die in dit pakket geoefend worden:</strong>{" "}
            hoofdgedachte vinden · details terugzoeken · verwijswoorden (hij/dat/zij)
            · signaalwoorden (maar/daarom/omdat/toch) · woorden raden uit de zin ·
            conclusies trekken · volgorde · feit of mening · het doel van de schrijver.
            Bij elke vraag in de antwoordsleutel staat welke truc erbij hoort.
          </div>
        </Sheet>

        {/* De vier treden */}
        {treden.map((t) => (
          <Sheet key={t.nr}>
            <SectieKop emoji={t.emoji} label={`Trede ${t.nr} — ${t.titel}`} />
            <p style={{ color: "#6b7785", fontSize: 13.5, marginTop: -8, marginBottom: 6 }}>{t.sub}</p>
            <p style={{ color: "#46546a", fontSize: 13.5, marginTop: 0, marginBottom: 18, background: "#f4f7fb", borderRadius: 8, padding: "8px 12px" }}>
              ⭐ {t.kindTip}
            </p>
            {t.teksten.map((tx, ti) => (
              <div key={ti} className="leesladder-tekst" style={{ marginBottom: 26 }}>
                <h4 style={{ fontSize: 15, color: "#1a2332", margin: "0 0 8px", fontFamily: "Arial, sans-serif", background: "#eef2f8", borderRadius: 6, padding: "7px 12px" }}>
                  📖 Tekst {t.nr}.{ti + 1} — {tx.titel}
                </h4>
                <div style={{ border: "1px solid #dde3ec", borderRadius: 8, padding: "14px 18px", fontSize: 14.5, lineHeight: 1.75, color: "#1a2332", marginBottom: 12, whiteSpace: "pre-line" }}>
                  {tx.tekst}
                </div>
                {tx.vragen.map((v) => (
                  <div key={v.nr} className="leesladder-vraag" style={{ marginBottom: 14, breakInside: "avoid" }}>
                    <div style={{ fontSize: 15, color: "#1a2332", marginBottom: 7, lineHeight: 1.45 }}>
                      <strong>{v.nr}.</strong> {v.q}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 18px", paddingLeft: 18 }}>
                      {v.options.map((opt, i) => (
                        <div key={i} style={{ fontSize: 14, color: "#3a4658", lineHeight: 1.5 }}>
                          <strong>{LETTERS[i]}.</strong>&nbsp; {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div style={{ fontSize: 12.5, color: "#8893a3", paddingLeft: 2 }}>
                  Goed: ____ van de {tx.vragen.length}
                </div>
              </div>
            ))}
          </Sheet>
        ))}

        {/* Antwoordsleutel — na e-mail */}
        {mailStatus === "done" ? (
          <Sheet>
            <SectieKop emoji="✅" label={`Antwoordsleutel & lees-trucs — versie ${versie}`} />
            <p style={{ color: "#6b7785", fontSize: 13, marginTop: -8, marginBottom: 18 }}>
              Voor ouders/begeleiders. Bespreek bij een fout eerst de uitleg
              (mét de lees-truc), en laat je kind de vraag dan opnieuw proberen.
            </p>
            {treden.map((t) => (
              <div key={t.nr} style={{ marginBottom: 14, breakInside: "avoid" }}>
                <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 15, margin: "14px 0 8px", fontFamily: "Arial, sans-serif", borderBottom: "1px solid #dde3ec", paddingBottom: 4 }}>
                  {t.emoji} Trede {t.nr} — {t.titel}
                </div>
                {t.teksten.map((tx, ti) => (
                  <div key={ti} style={{ marginBottom: 10 }}>
                    <div style={{ fontWeight: 700, color: "#46546a", fontSize: 13, margin: "6px 0 4px" }}>
                      📖 {t.nr}.{ti + 1} {tx.titel}
                    </div>
                    {tx.vragen.map((v) => (
                      <div key={v.nr} className="leesladder-vraag" style={{ marginBottom: 7, fontSize: 13, lineHeight: 1.5 }}>
                        <span style={{ fontWeight: 700, color: "#1a2332" }}>{v.nr}. {LETTERS[v.answer]}</span>{" "}
                        <span style={{ color: "#3a4658" }}>({v.options[v.answer]})</span>
                        <span style={{ color: "#8893a3" }}> · truc: {v.type}</span>
                        <span style={{ color: "#6b7785" }}> — {v.uitleg}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <div style={{ marginTop: 28, paddingTop: 16, borderTop: "1px solid #e3e8ef", textAlign: "center" }}>
              <div style={{ color: "#46546a", fontSize: 14, fontWeight: 600 }}>
                Klaar met de ladder? Online staat meer — met uitleg op 3 niveaus.
              </div>
              <div style={{ color: "#6b7785", fontSize: 13, marginTop: 4 }}>
                Gratis op {BRAND.domain} — een leerkwartier per dag.
              </div>
            </div>
          </Sheet>
        ) : (
          <Sheet>
            <SectieKop emoji="🔒" label="Antwoordsleutel & lees-trucs (vergrendeld)" />
            <p style={{ color: "#6b7785", fontSize: 14, lineHeight: 1.6, marginTop: -4 }}>
              De antwoordsleutel — met per vraag de goede letter, de <strong>lees-truc</strong> en
              een korte uitleg — is <strong>vergrendeld</strong>. Vul je e-mailadres in om hem
              gratis te ontgrendelen; daarna verschijnt hij hier en print hij gewoon mee.
            </p>
            <button
              type="button"
              className="leesladder-noprint"
              onClick={scrollNaarFormulier}
              style={{ marginTop: 14, padding: "13px 24px", borderRadius: 12, border: "none", background: "#42a5f5", color: "#0b1224", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 16px rgba(66,165,245,0.35)" }}
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
      className="leesladder-sheet"
      style={{ background: "#fff", color: "#1a2332", width: "100%", maxWidth: 740, margin: "0 auto 24px", padding: "40px 44px", borderRadius: 8, boxShadow: "0 6px 30px rgba(0,0,0,0.4)", fontFamily: "Georgia, 'Times New Roman', serif", boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

function SectieKop({ emoji, label }) {
  return (
    <h3 style={{ fontSize: 20, color: "#1a2332", margin: "0 0 16px", paddingBottom: 8, borderBottom: "2px solid #1a2332", fontFamily: "Arial, sans-serif" }}>
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
