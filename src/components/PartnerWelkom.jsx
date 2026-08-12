// 🤝 Partner-welkom (idee #22, Mark-akkoord 10 aug 2026): wie via een
// flyer-QR binnenkomt (?partner=CODE of de bulk-flyer met utm_source=qr-flyer)
// zag tot nu toe de gewone home — niets zei "je zit goed". Deze banner staat
// bovenaan home en doet drie dingen:
//   1. herkenning: "Welkom via [partner]!" (Spark Fest krijgt een eigen
//      festival-groet — 1.000 goodybags op 18 okt 2026);
//   2. de belofte in B1-taal uitspreken die partnerCode.js al waarmaakt
//      (gratis gezins-extra's t/m de Doorstroomtoets 2027, claim na 3
//      antwoorden — die mechaniek verandert hier NIET);
//   3. ouder-voorrang: de ouder of verzorger meteen de goede route wijzen.
// ⚖️ OOIEVAAR-codes tonen bewust de NEUTRALE variant zonder organisatienaam:
// bureau Ooievaarspas vroeg OP-content van de site te halen zolang de
// vriend-aanvraag loopt (zie docs/AFSPRAKEN-OOIEVAARSPAS.md).
// DEELACTIE2027 (vrienden-actie) slaan we over — die flow heeft eigen UX.

import { useMemo, useState } from "react";
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";
import { actievePartnerCode, partnerFamilieTot } from "../features/referral/partnerCode.js";
import { track } from "../utils.js";

// Nette weergavenamen per code (DB-org_naam bevat interne aantekeningen).
// Nieuwe partner-code? Regel erbij — onbekende codes vallen terug op de
// neutrale groet, dus vergeten is nooit kapot.
const PARTNER_NAMEN = {
  AANZET2027: "Bibliotheek AanZet",
  ALKMAAR2027: "Voedselbank Alkmaar",
  ALMERE2027: "de nieuwe bibliotheek in Almere",
  AMSTELLAND2027: "Bibliotheek Amstelland",
  APELDOORN2027: "Leergeld Apeldoorn-Voorst",
  BREDA2027: "Voedselbank Breda",
  EINDHOVEN2027: "Bibliotheek Eindhoven",
  ENSCHEDE2027: "Voedselbank Enschede-Haaksbergen",
  GORINCHEM2027: "Voedselbank Gorinchem",
  HEUVELLAND2027: "Leergeld Maastricht en Heuvelland",
  HUMANITAS2027: "Humanitas",
  IMC2027: "IMC Weekendschool",
  JEF2027: "het Jeugdeducatiefonds",
  JINC2027: "JINC",
  LELYSTAD2027: "Voedselbank Lelystad",
  MAASTRICHT2027: "Voedselbank Maastricht",
  NIJMEGEN2027: "Voedselbank Nijmegen-Overbetuwe",
  PURMEREND2027: "Voedselbank Purmerend",
  ROTTERDAM2027: "Bibliotheek Rotterdam",
  ROTTERDAMPAS2027: "de Rotterdampas",
  SAM2027: "Sam& voor alle kinderen",
  SCHOOLSCOOL2027: "School's cool Twente",
  SMALLINGERLAND2027: "Voedselbank Smallingerland",
  STUDIEZALEN2027: "Studiezalen",
  VBROTTERDAM2027: "Voedselbank Rotterdam",
  WESTFRIES2027: "Westfriese Bibliotheken",
  ZAANSTREEK2027: "Voedselbank Zaanstreek",
};

const KEY_DICHT = "lk_partner_welkom_dicht";

function bepaalVariant() {
  let code = null;
  let viaQrFlyer = false;
  try {
    const params = new URLSearchParams(window.location.search);
    viaQrFlyer = params.get("utm_source") === "qr-flyer";
    // Eerst de URL zelf lezen: vangPartnerCode() (App-effect) draait pas ná
    // de eerste render, dus localStorage kan hier nog leeg zijn.
    const uitUrl = (params.get("partner") || "").trim().toUpperCase();
    code = (/^[A-Z0-9-]{1,20}$/.test(uitUrl) ? uitUrl : null) || actievePartnerCode();
  } catch { /* geen URL-toegang = geen banner */ }

  if (code === "DEELACTIE2027") return null;
  if (code) {
    if (code === "HAARLEMMERMEER2027") return { soort: "sparkfest", code };
    if (code.startsWith("OOIEVAAR")) return { soort: "neutraal", code };
    const naam = PARTNER_NAMEN[code];
    return naam ? { soort: "partner", code, naam } : { soort: "neutraal", code };
  }
  if (viaQrFlyer) return { soort: "flyer" };
  return null;
}

export default function PartnerWelkom({ onOuder, onOefenen }) {
  const variant = useMemo(bepaalVariant, []);
  const [dicht, setDicht] = useState(() => {
    try { return localStorage.getItem(KEY_DICHT) === "1"; } catch { return false; }
  });
  const [getoond, setGetoond] = useState(false);

  if (!variant || dicht) return null;

  if (!getoond) {
    setGetoond(true);
    try {
      if (!sessionStorage.getItem("lk_partner_welkom_toon")) {
        sessionStorage.setItem("lk_partner_welkom_toon", "1");
        track("partner_welkom_toon", { soort: variant.soort, code: variant.code || null });
      }
    } catch { /* meting mag nooit de banner breken */ }
  }

  const blijvend = variant.code ? partnerFamilieTot() === null : false;
  const extrasZin = blijvend
    ? "Jouw gezin kan hier blijvend gratis oefenen."
    : "Jouw gezin krijgt straks ook alle gezins-extra's gratis, tot en met de toets van 2027.";

  let titel, tekst;
  if (variant.soort === "sparkfest") {
    titel = "Welkom, Spark Fest-bezoeker! 🎉";
    tekst = `Je zit hier goed. Oefenen voor de Doorstroomtoets is gratis. En omdat jouw flyer uit de Spark Fest-goodybag komt, krijgt jouw hele gezin ook alle gezins-extra's gratis — tot en met de toets van 2027.`;
  } else if (variant.soort === "partner") {
    titel = `Welkom via ${variant.naam}! 💛`;
    tekst = `Je zit hier goed. Oefenen voor de Doorstroomtoets is gratis. ${extrasZin}`;
  } else if (variant.soort === "neutraal") {
    titel = "Welkom! 💛";
    tekst = `Je zit hier goed. Je komt via een van onze partners. Oefenen voor de Doorstroomtoets is gratis. ${extrasZin}`;
  } else {
    titel = "Flyer gescand? Welkom! 💛";
    tekst = "Je zit hier goed. Oefenen voor de Doorstroomtoets is gratis — voor groep 6, 7 en 8, en voor de VMBO-examens. Je hebt geen account nodig.";
  }

  const accent = variant.soort === "sparkfest" ? "#ff8a65" : "#ffd54f";

  const sluit = () => {
    try { localStorage.setItem(KEY_DICHT, "1"); } catch { /* */ }
    setDicht(true);
  };

  return (
    <div
      className="lk-content-wide"
      style={{
        margin: "10px auto 4px", maxWidth: 560, position: "relative",
        background: variant.soort === "sparkfest"
          ? "linear-gradient(135deg, rgba(255,138,101,0.16), rgba(255,213,79,0.12))"
          : "rgba(255,213,79,0.10)",
        border: `1.5px solid ${accent}66`,
        borderRadius: 16, padding: "16px 18px 14px",
      }}
    >
      <button
        onClick={sluit}
        aria-label="Welkomstbericht sluiten"
        style={{
          position: "absolute", top: 8, right: 10, border: "none", background: "none",
          color: "rgba(255,255,255,0.55)", fontSize: 18, cursor: "pointer", padding: 4,
        }}
      >
        ✕
      </button>
      <div style={{
        fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 800,
        color: "#fff", marginBottom: 6, paddingRight: 24,
      }}>
        {titel}
      </div>
      <div style={{
        fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55,
        color: "rgba(255,255,255,0.88)", marginBottom: 12,
      }}>
        <VoorleesBlok tekst={`${titel.replace(/[🎉💛]/g, "")}. ${tekst}`} accent={accent}>
          {tekst}
        </VoorleesBlok>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {onOuder && (
          <button
            onClick={() => { track("partner_welkom_ouder", { code: variant.code || null }); onOuder(); }}
            style={{
              width: "100%", padding: "13px 16px", borderRadius: 12, border: "none",
              background: `linear-gradient(135deg, ${accent}, #ffb300)`,
              color: "#1a1a00", fontFamily: "var(--font-display)",
              fontSize: 15.5, fontWeight: 800, cursor: "pointer",
            }}
          >
            👨‍👩‍👧 Ik ben ouder of verzorger — zo werkt het
          </button>
        )}
        {onOefenen && (
          <button
            onClick={() => { track("partner_welkom_oefenen", { code: variant.code || null }); sluit(); onOefenen(); }}
            style={{
              width: "100%", padding: "11px 16px", borderRadius: 12,
              border: "1.5px solid rgba(255,255,255,0.25)", background: "none",
              color: "#fff", fontFamily: "var(--font-display)",
              fontSize: 14.5, fontWeight: 700, cursor: "pointer",
            }}
          >
            🚀 Ik wil meteen oefenen
          </button>
        )}
      </div>
    </div>
  );
}
