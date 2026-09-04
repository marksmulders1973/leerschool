// 🎟️ Code-balk bovenaan de homepage (Mark 27 aug: "de code moet blijven —
// afspraak Den Haag — maar moet direct op home zichtbaar zijn; en wees
// duidelijk ná activatie: dikke letters"). Drie standen:
//   1. geen code → klein goudkleurig balkje "Code gekregen? Vul hem hier in"
//      dat openklapt naar een invulveld;
//   2. code actief (net ingevuld óf via de QR-link) → DIKKE bevestiging die
//      bij elk bezoek blijft staan: "✅ OOIEVAARSPAS-CODE ACTIEF!" — zodat een
//      pashouder nooit hoeft te twijfelen of het gelukt is;
//   3. foutje → vriendelijke uitleg in B1-taal (spelling / onbekende code).
// De QR-route (?partner=CODE) blijft de hoofdweg en verandert niet; dit is de
// zichtbare handmatige ingang die partners hun leden beloven. Het bestaande
// "🎟️ Ik heb een code"-veld in het pakket-scherm blijft ook gewoon werken.
import { useMemo, useState } from "react";
import supabase from "../supabase.js";
import { bewaarKoppeling } from "../shared/koppeling.js";
import { actievePartnerCode, partnerFamilieTot, zetPartnerCodeHandmatig } from "../features/referral/partnerCode.js";
import { PARTNER_NAMEN } from "./PartnerWelkom.jsx";
import { track } from "../utils.js";

function naamVoor(code) {
  if (!code) return null;
  if (code.startsWith("OOIEVAAR")) return "de Gemeente Den Haag (Ooievaarspas)";
  return PARTNER_NAMEN[code] || null;
}

// 🏅 Logo's in het ere-scherm — ALLEEN partners waarvan het logo al met hun
// akkoord op co-branded materiaal staat (flyers/bedankpagina). Nieuwe partner?
// Eerst toestemming vragen ("mogen we uw logo in ons welkom-scherm tonen?"),
// dan regel erbij. Ooievaarspas bewust nog zonder logo (komt via het
// tekst-formulier van de gemeente).
export const PARTNER_LOGOS = {
  VBROTTERDAM2027: "/drukwerk/logo-voedselbank-rotterdam.svg",
  ALKMAAR2027: "/drukwerk/logo-voedselbank-alkmaar.png",
  BUURTGEZINNEN2027: "/drukwerk/logo-buurtgezinnen.png",
  SCHOOLSCOOL2027: "/drukwerk/logo-schoolscool-twente.png",
  SABA2027: "/drukwerk/logo-qwl-saba.png", // Mark-akkoord 27 aug; akkoord-vraag aan Tiffany meenemen in de volgende mail
  KINDERHULP2027: "/drukwerk/logo-kinderhulp.png", // Mark-go 1 sep; logo staat al op de co-branded flyer die Marion ontving
};

const KEY_EER = "lk_partner_eer_gezien";

// 🎉 Ere-scherm (Mark 27 aug: "de deler wordt geëerd" + "fullscreen, op basis
// van de Ooievaarspas-landingspagina van 26 aug"): één keer, direct na
// activatie (getypt of via de QR-link). Layout = de landingspagina-kop:
// Leerkwartier-logo links, partner-beeldmerk in een witte cirkel rechts in de
// hoek, badge + groet + belofte + grote groene knop. De gemeente (OOIEVAAR*)
// krijgt de navy-look van het origineel; andere partners dezelfde opbouw in
// de warme lichte stijl met hún logo.
function EerScherm({ code, onVerder }) {
  const naam = naamVoor(code);
  const isOP = code.startsWith("OOIEVAAR");
  const isEN = code.startsWith("SABA"); // Saba-gezinnen zijn Engelstalig → Engels ere-scherm
  const logo = isOP ? "/drukwerk/op-ooievaar.svg" : (PARTNER_LOGOS[code] || null);
  const blijvend = isOP; // uit de code zelf, zodat óók de preview-weergave klopt
  const donker = isOP;
  const tekstKleur = donker ? "#dce5ee" : "#3a4658";
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, background: donker ? "#14283c" : "linear-gradient(160deg,#f6faf2,#e7f6ec)", overflowY: "auto" }}>
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "30px 22px 44px" }}>
        {/* kop: Leerkwartier links · partner-beeldmerk rechts in de hoek */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="/logo.jpg" alt="Leerkwartier" style={{ width: 66, height: 66, borderRadius: 15, background: "#fff", objectFit: "contain" }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: "800 18px/1.25 system-ui", color: donker ? "#fff" : "#14283c" }}>Leerkwartier</div>
            <div style={{ font: "600 12px/1.35 system-ui", color: donker ? "#b9c6d4" : "#5a6775", marginTop: 2 }}>
              {isEN ? "Fifteen minutes a day — truly understand what you learn." : "Een kwartier per dag — écht begrijpen wat je leert."}
            </div>
          </div>
          {logo && (isOP ? (
            <div style={{ width: 74, height: 74, borderRadius: "50%", background: "#fff", display: "grid", placeItems: "center", boxShadow: "0 3px 12px rgba(0,0,0,0.25)", flexShrink: 0 }}>
              <img src={logo} alt={naam || "partner"} style={{ maxHeight: 48, maxWidth: 56, objectFit: "contain" }} />
            </div>
          ) : (
            // wit kader dat meegroeit: brede logo's (zoals VB Rotterdam) blijven
            // leesbaar, vierkante (zoals QWL Saba) blijven mooi compact
            <div style={{ height: 74, minWidth: 74, maxWidth: 160, borderRadius: 18, background: "#fff", display: "grid", placeItems: "center", padding: "8px 12px", boxShadow: "0 3px 12px rgba(0,0,0,0.18)", flexShrink: 0 }}>
              <img src={logo} alt={naam || "partner"} style={{ maxHeight: 54, maxWidth: 132, objectFit: "contain" }} />
            </div>
          ))}
        </div>
        {isOP && (
          <div style={{ display: "inline-block", background: "#7ab52d", color: "#0e2010", font: "800 13px system-ui", padding: "7px 14px", borderRadius: 999, marginTop: 22 }}>
            ✓ Vriend van de Ooievaarspas
          </div>
        )}
        <h1 style={{ font: "900 27px/1.25 system-ui", color: donker ? "#fff" : "#14283c", margin: isOP ? "12px 0 10px" : "24px 0 10px" }}>
          {isOP ? "Welkom, Ooievaarspashouders!" : isEN ? "Welcome to Leerkwartier!" : "Welkom bij Leerkwartier!"}
        </h1>
        <p style={{ font: "600 15px/1.6 system-ui", color: tekstKleur, margin: 0 }}>
          {isEN
            ? <>How wonderful that you found us through <strong style={{ color: "#0a7d43" }}>the Queen Wilhelmina Library</strong>.</>
            : <>Wat fijn dat u ons heeft gevonden via <strong style={{ color: donker ? "#fff" : "#0a7d43" }}>{naam || "een van onze partners"}</strong>.</>}
        </p>
        <div style={{ background: donker ? "rgba(122,181,45,0.16)" : "#f2f8ec", border: "2px solid " + (donker ? "rgba(122,181,45,0.55)" : "#bcd99a"), borderRadius: 14, padding: "16px 18px", margin: "18px 0 0" }}>
          <p style={{ font: "600 14.5px/1.55 system-ui", color: donker ? "#eaf3dc" : "#3a4658", margin: 0 }}>
            {isOP
              ? <>Onze afspraak met de gemeente Den Haag: heeft uw gezin een Ooievaarspas? Dan is het Familie-pakket van Leerkwartier <strong style={{ color: donker ? "#b8e07a" : "#3f7015" }}>blijvend gratis</strong>.</>
              : isEN
                ? <>Thanks to them, the Family package is <strong style={{ color: "#3f7015" }}>free for your family all of 2027</strong> — through December 31, 2027.</>
                : blijvend
                  ? <>Dankzij hen is het Familie-pakket voor uw gezin <strong style={{ color: "#3f7015" }}>blijvend gratis</strong>.</>
                  : <>Dankzij hen is het Familie-pakket voor uw gezin <strong style={{ color: "#3f7015" }}>gratis in heel 2027</strong> — tot en met 31 december 2027.</>}
          </p>
        </div>
        <button
          onClick={onVerder}
          style={{ marginTop: 24, width: "100%", border: "none", borderRadius: 14, padding: "16px", font: "800 18px system-ui", color: "#fff", background: "linear-gradient(135deg,#7ab52d,#5c9420)", boxShadow: "0 6px 18px rgba(122,181,45,0.35)", cursor: "pointer" }}
        >
          {isEN ? "▶ Start practicing — free" : "▶ Begin met oefenen — gratis"}
        </button>
        {/* "Ook zonder code gratis" bewust weggelaten (Mark 27 aug): waar, maar
            op dít moment haalt het de waarde van de code onderuit. */}
        <div style={{ font: "600 12px/1.5 system-ui", color: donker ? "#b9c6d4" : "#5a6775", textAlign: "center", marginTop: 10 }}>
          {isEN
            ? "Works on phones, tablets and computers. No account needed, no ads."
            : "Werkt op telefoon, tablet en computer. Geen account nodig, geen reclame."}
        </div>
      </div>
    </div>
  );
}

export default function CodeBalk() {
  // 👀 Preview-modus (Mark 27 aug: "ik wil alle ere-pagina's persoonlijk zien
  // en goedkeuren"): /?erescherm=CODE toont het ere-scherm van die code ALTIJD,
  // puur als kijk-versie — er wordt niets op het apparaat gezet en niets gemeten.
  const { previewCode, urlPartner } = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      // 🔄 Test-hulp (Mark 27 aug): /?codereset=1 haalt de vastgezette code van
      // dít apparaat — zelf resetten tijdens het testen, op elk toestel.
      if (params.get("codereset") === "1") {
        localStorage.removeItem("lk_partner_code");
        localStorage.removeItem("lk_partner_status");
        sessionStorage.removeItem(KEY_EER);
      }
      const c = (params.get("erescherm") || "").trim().toUpperCase();
      // QR-binnenkomst (?partner=CODE): de URL zelf lezen — de opslag wordt pas
      // ná de eerste render gevuld (App-effect), en juist bij de állereerste
      // scan moet het ere-scherm verschijnen (QR-test 27 aug: deed hij niet).
      const p = (params.get("partner") || "").trim().toUpperCase();
      return {
        previewCode: /^[A-Z0-9-]{3,20}$/.test(c) ? c : null,
        urlPartner: /^[A-Z0-9-]{3,20}$/.test(p) && p !== "DEELACTIE2027" ? p : null,
      };
    } catch { return { previewCode: null, urlPartner: null }; }
  }, []);
  const [previewOpen, setPreviewOpen] = useState(true);

  // ✅ Den Haag GOEDGEKEURD door Mark (27 aug, na de test-fase): OOIEVAAR-codes
  // zetten weer blijvend vast, zoals elke partner. De vlag blijft staan als
  // herbruikbaar keur-mechanisme: nieuwe grote partner in keurfase? Tijdelijk
  // op diens prefix zetten (zie memory feedback_partner_ereschermen_testwerkwijze).
  const TEST_OOIEVAAR = false;
  const [testEer, setTestEer] = useState(null);
  const [actief, setActief] = useState(() => {
    const c = urlPartner || actievePartnerCode();
    if (TEST_OOIEVAAR && c && c.startsWith("OOIEVAAR")) {
      try { localStorage.removeItem("lk_partner_code"); } catch { /* */ }
      return null;
    }
    return c;
  });
  const [open, setOpen] = useState(false);
  const [invoer, setInvoer] = useState("");
  const [fout, setFout] = useState(null);
  const [netGezet, setNetGezet] = useState(false);
  // ⏳ TEST-FASE (Mark 27 aug: "blijvend laten voorlopig, anders moet ik alles
  // steeds resetten"): het ere-scherm komt bij élke nieuwe sessie terug zolang
  // er een code actief is (sessionStorage i.p.v. localStorage — app sluiten en
  // openen = scherm weer). Ná de test-fase terug naar één keer per apparaat:
  // sessionStorage hieronder weer vervangen door localStorage met KEY_EER.
  const [eer, setEer] = useState(() => {
    try { return !!(urlPartner || actievePartnerCode()) && !sessionStorage.getItem(KEY_EER); } catch { return false; }
  });
  const sluitEer = () => {
    try { sessionStorage.setItem(KEY_EER, "1"); } catch { /* */ }
    setEer(false);
  };

  const [koppelTip, setKoppelTip] = useState(null);
  const activeer = async () => {
    setFout(null);
    setKoppelTip(null);
    // 🔐 Slimme herkenning (Mark 27 aug): een KOPPELCODE (thuis/school) is 4-8
    // tekens zónder "2027"; organisatie-codes eindigen altijd op 2027. Een
    // koppelcode hoort bij een kind-profiel → doorsturen naar de leerling-
    // pagina, mét de code onthouden zodat je 'm niet opnieuw hoeft te typen.
    const kaal = (invoer || "").trim().toUpperCase();
    // TEST-FASE: OOIEVAAR-code → alleen het ere-scherm tonen, niets vastzetten.
    if (TEST_OOIEVAAR && kaal.startsWith("OOIEVAAR")) {
      setTestEer(kaal);
      setInvoer("");
      return;
    }
    if (/^[A-Z0-9]{4,8}$/.test(kaal) && !kaal.includes("2027")) {
      // 🔐 Koppelcode (thuis/school). Fix 27 aug: een harde sprong naar
      // /leerling kaatst bij een koude landing bewust terug naar home
      // (Mark-besluit 7 aug) — dus als er al een kind-naam op dit apparaat
      // staat, koppelen we hier DIRECT via dezelfde RPC als de leerling-pagina.
      // Zonder naam: vriendelijk uitleggen wat eerst moet (+ de code onthouden,
      // zodat de leerling-pagina hem alsnog vooringevuld oppakt).
      let naam = null;
      try { naam = (JSON.parse(localStorage.getItem("ls_user") || "{}").name || "").trim() || null; } catch { /* */ }
      if (naam) {
        try {
          const { data, error } = await supabase.rpc("claim_link_code", { p_code: kaal, p_child_name: naam });
          if (!error && data?.ok) {
            bewaarKoppeling({ naam, linkId: data.link_id, rol: data.rol || "ouder", vanWie: data.van_wie });
            setKoppelTip({ klaar: true, rol: data.rol, naam });
            setInvoer("");
            return;
          }
          if (!error && data?.error === "code_invalid_or_expired") {
            setFout("Deze koppelcode klopt niet of is verlopen. Vraag om een nieuwe code.");
            return;
          }
        } catch { /* val terug op de uitleg-route hieronder */ }
      }
      try { sessionStorage.setItem("lk_koppelcode_voorstel", kaal); } catch { /* */ }
      setKoppelTip({ klaar: false });
      return;
    }
    const r = await zetPartnerCodeHandmatig(invoer);
    if (r.ok) {
      setActief(r.code);
      setNetGezet(true);
      setEer(true); // 🎉 de deler eren — daarna blijft de groene balk staan
      try { track("code_balk_actief", { code: r.code }); } catch { /* */ }
    } else if (r.reden === "al-actief") {
      setActief(r.code); // er stond al een (andere) code — toon die als actief
    } else if (r.reden === "onbekend") {
      setFout("Deze code kennen we niet. Kijk de spelling even na, of vraag het na bij wie je de code kreeg.");
    } else {
      setFout("Die code klopt niet helemaal — kijk de spelling even na.");
    }
  };

  if (previewCode && previewOpen) return <EerScherm code={previewCode} onVerder={() => setPreviewOpen(false)} />;

  if (testEer) return <EerScherm code={testEer} onVerder={() => setTestEer(null)} />;

  if (eer && actief) return <EerScherm code={actief} onVerder={sluitEer} />;

  // Stand 2 — code actief: pas NU weten we van wie de code is (Mark 27 aug:
  // "de banner is voor iedereen hetzelfde; pas na invullen het welkom") →
  // welkom met partnernaam + dikke, blijvende bevestiging.
  if (actief) {
    const naam = naamVoor(actief);
    const blijvend = partnerFamilieTot() === null;
    return (
      <div className="lk-content-wide" style={{ maxWidth: 560, margin: "10px auto 4px", background: "#e7f6ec", border: "2px solid #0a7d43", borderRadius: 14, padding: "12px 16px", textAlign: "center" }}>
        <div style={{ font: "700 13.5px/1.35 system-ui", color: "#2e5a41" }}>
          💛 {naam ? `Welkom via ${naam}!` : "Welkom!"}
        </div>
        <div style={{ font: "900 17px/1.3 system-ui", color: "#0a7d43", letterSpacing: 0.4, marginTop: 2 }}>
          ✅ JOUW CODE IS ACTIEF
        </div>
        <div style={{ font: "600 12.5px/1.45 system-ui", color: "#2e5a41", marginTop: 3 }}>
          {blijvend
            ? "Alle gezins-extra's zijn blijvend gratis voor jouw gezin."
            : "Alle gezins-extra's zijn gratis voor jouw gezin, heel 2027 (tot en met 31 december 2027)."}
          {netGezet ? " Veel oefenplezier! 🎉" : ""}
        </div>
        {/* 🔄 Reset-knopje BLIJFT (Mark 27 aug: "kan denk ik geen kwaad"):
            handig voor testen én voor gezinnen op een gedeeld/geleend toestel.
            Per ongeluk gedrukt = geen ramp — code opnieuw invullen herstelt
            alles, er gaat niets verloren. */}
        <button
          onClick={() => {
            try {
              localStorage.removeItem("lk_partner_code");
              localStorage.removeItem("lk_partner_status");
              localStorage.removeItem(KEY_EER);
              sessionStorage.removeItem(KEY_EER);
            } catch { /* */ }
            setActief(null);
            setEer(false);
            setNetGezet(false);
          }}
          style={{ marginTop: 8, border: "none", background: "transparent", font: "600 11px system-ui", color: "#7a8a7f", textDecoration: "underline", cursor: "pointer" }}
        >
          🔄 code van dit apparaat halen
        </button>
      </div>
    );
  }

  // Stand 1/3 — nog geen code: uitnodiging + invulveld.
  return (
    <div className="lk-content-wide" style={{ maxWidth: 560, margin: "10px auto 4px", background: "#fffaf0", border: "1.5px solid #e6c65a", borderRadius: 14, padding: open ? "12px 16px" : "9px 14px" }}>
      {!open ? (
        <button
          onClick={() => { setOpen(true); try { track("code_balk_open", {}); } catch { /* */ } }}
          style={{ width: "100%", border: "none", background: "transparent", cursor: "pointer", font: "700 13.5px system-ui", color: "#7a5b00", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
        >
          🎟️ Code gekregen?&nbsp;<span style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>Vul hem hier in</span>
        </button>
      ) : (
        <div>
          <div style={{ font: "800 13.5px/1.4 system-ui", color: "#7a5b00", marginBottom: 4 }}>
            🎟️ Vul je code in — van je gemeente, de voedselbank of de bibliotheek, óf de koppelcode van je vader, moeder, juf of meester:
          </div>
          {/* Geruststelling (28 aug 2026): mensen openden de balk zonder code
              en dachten dat ze er één nodig hadden om te mogen oefenen. */}
          <div style={{ font: "600 12px/1.45 system-ui", color: "#8a7a3d", marginBottom: 8 }}>
            Geen code? Geen probleem — oefenen is gratis, ook zonder code. Een code van een organisatie geeft je gezin daarbovenop alle Familie-extra&apos;s cadeau; met een koppelcode van thuis of school kunnen zij meekijken hoe het gaat.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              className="lk-codebalk-input"
              value={invoer}
              onChange={(e) => setInvoer(e.target.value.toUpperCase())}
              onKeyDown={(e) => { if (e.key === "Enter") activeer(); }}
              placeholder="JOUWCODE2027"
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              style={{ flex: 1, minWidth: 0, border: "1.5px solid #d7c98a", borderRadius: 10, padding: "10px 12px", font: "800 14px system-ui", letterSpacing: 1, background: "#fff", color: "#1a2233", caretColor: "#0a7d43" }}
            />
            <button onClick={activeer} style={{ border: "none", borderRadius: 10, padding: "10px 16px", font: "800 13.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#0a7d43,#0b6b39)", cursor: "pointer", whiteSpace: "nowrap" }}>
              Activeren
            </button>
          </div>
          {fout && <div style={{ font: "600 12px/1.4 system-ui", color: "#b42318", marginTop: 7 }}>{fout}</div>}
          {koppelTip && (koppelTip.klaar ? (
            <div style={{ marginTop: 8, background: "rgba(0,200,83,0.10)", border: "1.5px solid rgba(0,150,60,0.5)", borderRadius: 10, padding: "10px 12px" }}>
              <div style={{ font: "700 13px/1.45 system-ui", color: "#0a7d43" }}>
                ✓ Gekoppeld{koppelTip.naam ? ` als ${koppelTip.naam}` : ""}! {koppelTip.rol === "leraar"
                  ? "Je juf of meester kan nu lessen voor je klaarzetten."
                  : "Je ouder of verzorger kan nu je voortgang zien."}
              </div>
            </div>
          ) : (
            <div style={{ marginTop: 8, background: "rgba(124,58,237,0.08)", border: "1.5px solid rgba(124,58,237,0.4)", borderRadius: 10, padding: "10px 12px" }}>
              <div style={{ font: "700 12.5px/1.45 system-ui", color: "#5b21b6" }}>
                🔐 Dit is een <strong>koppelcode</strong> van thuis of school — die hoort bij jóuw naam. Tik bovenaan op "Ik ben leerling" en kies je naam; daarna koppelen we je meteen. Je hoeft de code niet nog een keer in te typen, we hebben hem onthouden.
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
