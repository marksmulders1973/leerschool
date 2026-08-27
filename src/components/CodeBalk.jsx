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
  if (code.startsWith("OOIEVAAR")) return "Ooievaarspas";
  return PARTNER_NAMEN[code] || null;
}

export default function CodeBalk() {
  const [actief, setActief] = useState(() => actievePartnerCode());
  const [open, setOpen] = useState(false);
  const [invoer, setInvoer] = useState("");
  const [fout, setFout] = useState(null);
  const [netGezet, setNetGezet] = useState(false);

  const activeer = async () => {
    setFout(null);
    const r = await zetPartnerCodeHandmatig(invoer);
    if (r.ok) {
      setActief(r.code);
      setNetGezet(true);
      try { track("code_balk_actief", { code: r.code }); } catch { /* */ }
    } else if (r.reden === "al-actief") {
      setActief(r.code); // er stond al een (andere) code — toon die als actief
    } else if (r.reden === "onbekend") {
      setFout("Deze code kennen we niet. Kijk de spelling even na, of vraag het na bij wie je de code kreeg.");
    } else {
      setFout("Die code klopt niet helemaal — kijk de spelling even na.");
    }
  };

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
              value={invoer}
              onChange={(e) => setInvoer(e.target.value.toUpperCase())}
              onKeyDown={(e) => { if (e.key === "Enter") activeer(); }}
              placeholder="JOUWCODE2027"
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              style={{ flex: 1, minWidth: 0, border: "1.5px solid #d7c98a", borderRadius: 10, padding: "10px 12px", font: "800 14px system-ui", letterSpacing: 1 }}
            />
            <button onClick={activeer} style={{ border: "none", borderRadius: 10, padding: "10px 16px", font: "800 13.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#0a7d43,#0b6b39)", cursor: "pointer", whiteSpace: "nowrap" }}>
              Activeren
            </button>
          </div>
          {fout && <div style={{ font: "600 12px/1.4 system-ui", color: "#b42318", marginTop: 7 }}>{fout}</div>}
        </div>
      )}
    </div>
  );
}
