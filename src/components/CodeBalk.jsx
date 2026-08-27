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
import { useState } from "react";
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
const PARTNER_LOGOS = {
  VBROTTERDAM2027: "/drukwerk/logo-voedselbank-rotterdam.svg",
  ALKMAAR2027: "/drukwerk/logo-voedselbank-alkmaar.png",
  BUURTGEZINNEN2027: "/drukwerk/logo-buurtgezinnen.png",
  SCHOOLSCOOL2027: "/drukwerk/logo-schoolscool-twente.png",
};

const KEY_EER = "lk_partner_eer_gezien";

// 🎉 Ere-scherm (Mark 27 aug: "de deler wordt geëerd"): één keer, direct na
// activatie (getypt of via de QR-link) — groot dank-moment voor de partner,
// mét logo als daar toestemming voor is, daarna door naar de app.
function EerScherm({ code, onVerder }) {
  const naam = naamVoor(code);
  const logo = PARTNER_LOGOS[code] || null;
  const blijvend = partnerFamilieTot() === null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(10,20,14,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
      <div style={{ width: "min(440px, 94vw)", background: "#fff", borderRadius: 20, boxShadow: "0 14px 50px rgba(0,0,0,.35)", padding: "30px 26px", textAlign: "center" }}>
        {logo
          ? <img src={logo} alt={naam || "partner"} style={{ maxHeight: 64, maxWidth: 260, objectFit: "contain", marginBottom: 14 }} />
          : <div style={{ fontSize: 44, marginBottom: 6 }}>💛</div>}
        <div style={{ font: "900 21px/1.25 system-ui", color: "#16233f" }}>Welkom bij Leerkwartier!</div>
        <p style={{ font: "600 14.5px/1.55 system-ui", color: "#3a4658", margin: "10px 0 0" }}>
          Wat fijn dat u ons heeft gevonden via{" "}
          <strong style={{ color: "#0a7d43" }}>{naam || "een van onze partners"}</strong>.
        </p>
        <p style={{ font: "600 14.5px/1.55 system-ui", color: "#3a4658", margin: "8px 0 0" }}>
          {blijvend
            ? "Dankzij hen krijgt uw gezin alle gezins-extra's blijvend gratis."
            : "Dankzij hen krijgt uw gezin alle gezins-extra's gratis — tot en met de toets van 2027."}
        </p>
        <button
          onClick={onVerder}
          style={{ marginTop: 18, width: "100%", border: "none", borderRadius: 12, padding: "13px 16px", font: "800 15px system-ui", color: "#fff", background: "linear-gradient(135deg,#0a7d43,#0b6b39)", cursor: "pointer" }}
        >
          Verder naar de app →
        </button>
        <div style={{ font: "600 11.5px system-ui", color: "#8893a3", marginTop: 10 }}>Oefenen is voor iedereen gratis — ook zonder code.</div>
      </div>
    </div>
  );
}

export default function CodeBalk() {
  const [actief, setActief] = useState(() => actievePartnerCode());
  const [open, setOpen] = useState(false);
  const [invoer, setInvoer] = useState("");
  const [fout, setFout] = useState(null);
  const [netGezet, setNetGezet] = useState(false);
  // Ere-scherm één keer tonen: direct na typen, óf bij het eerste bezoek met
  // een code die via de QR-link binnenkwam.
  const [eer, setEer] = useState(() => {
    try { return !!actievePartnerCode() && !localStorage.getItem(KEY_EER); } catch { return false; }
  });
  const sluitEer = () => {
    try { localStorage.setItem(KEY_EER, "1"); } catch { /* */ }
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
    if (/^[A-Z0-9]{4,8}$/.test(kaal) && !kaal.includes("2027")) {
      try { sessionStorage.setItem("lk_koppelcode_voorstel", kaal); } catch { /* */ }
      setKoppelTip(kaal);
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
            : "Alle gezins-extra's zijn gratis voor jouw gezin, tot en met de toets van 2027."}
          {netGezet ? " Veel oefenplezier! 🎉" : ""}
        </div>
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
          <div style={{ font: "800 13.5px/1.4 system-ui", color: "#7a5b00", marginBottom: 8 }}>
            🎟️ Vul je code in — bijvoorbeeld van je gemeente, de voedselbank of de bibliotheek:
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
          {koppelTip && (
            <div style={{ marginTop: 8, background: "rgba(124,58,237,0.08)", border: "1.5px solid rgba(124,58,237,0.4)", borderRadius: 10, padding: "10px 12px" }}>
              <div style={{ font: "700 12.5px/1.45 system-ui", color: "#5b21b6" }}>
                🔐 Dit lijkt een <strong>koppelcode</strong> van thuis of school! Die vul je in op je eigen leerling-pagina — we hebben hem alvast voor je onthouden.
              </div>
              <button
                onClick={() => { window.location.href = "/leerling"; }}
                style={{ marginTop: 8, border: "none", borderRadius: 10, padding: "9px 14px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#7c3aed,#a78bfa)", cursor: "pointer" }}
              >
                Naar mijn pagina →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
