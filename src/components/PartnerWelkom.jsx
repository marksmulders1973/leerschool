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

import { useMemo, useState, useEffect } from "react";
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";
import { actievePartnerCode, partnerFamilieTot, partnerCodeBekend } from "../features/referral/partnerCode.js";
import { telAntwoordVoorVriend } from "../features/referral/referral.js";
import { track } from "../utils.js";

// 🎯 Scan → meteen dóén (Mark-go 28 aug 2026, na nulmeting 37 banner-shows /
// 0 kliks): de scanner landt direct in drie échte vraagjes ín de banner.
// Elk antwoord telt via telAntwoordVoorVriend() mee voor de partner-plek —
// na vraag 3 is de gezins-plek dus vanzelf geactiveerd (bestaande mechaniek).
// Vragen zijn B1, groep-onafhankelijk en laten de uitleg-USP meteen proeven.
const PROEF_VRAGEN = [
  {
    q: "In een doos zitten 6 eierdozen met elk 10 eieren. Hoeveel eieren zijn dat samen?",
    options: ["16", "56", "60", "66"],
    answer: 2,
    uitleg: "6 × 10 = 60. Zie je het woord \"elk\"? Dan is het een keersom!",
  },
  {
    q: "Welke zin is goed geschreven?",
    options: ["hij word", "hij wordt", "hij wort", "hij wordd"],
    answer: 1,
    uitleg: "Bij hij/zij/het komt er een t achter de stam: hij wordt — ook al hoor je hem niet.",
  },
  {
    q: "Lisa pakt haar paraplu en trekt haar laarzen aan. Wat voor weer is het?",
    options: ["Het regent", "Het sneeuwt", "De zon schijnt", "Het is bloedheet"],
    answer: 0,
    uitleg: "Dat stond er niet létterlijk — maar de paraplu en laarzen verklappen het. Zo werkt begrijpend lezen!",
  },
];

// Nette weergavenamen per code (DB-org_naam bevat interne aantekeningen).
// Nieuwe partner-code? Regel erbij — onbekende codes vallen terug op de
// neutrale groet, dus vergeten is nooit kapot.
export const PARTNER_NAMEN = {
  AANZET2027: "Bibliotheek AanZet",
  ALKMAAR2027: "Voedselbank Alkmaar",
  ALMERE2027: "de nieuwe bibliotheek in Almere",
  AMSTELLAND2027: "Bibliotheek Amstelland",
  APELDOORN2027: "Leergeld Apeldoorn-Voorst",
  BREDA2027: "Voedselbank Breda",
  BUURTGEZINNEN2027: "Buurtgezinnen",
  DONGEN2027: "Voedselbank Dongen",
  EINDHOVEN2027: "Bibliotheek Eindhoven",
  HAARLEMMERMEER2027: "Stichting Leergeld Haarlemmermeer (Spark Fest)",
  ENSCHEDE2027: "Voedselbank Enschede-Haaksbergen",
  BEGELEIDING2027: "uw leerlingbegeleider",
  GORINCHEM2027: "Voedselbank Gorinchem",
  HEUVELLAND2027: "Leergeld Maastricht en Heuvelland",
  HUMANITAS2027: "Humanitas",
  IMC2027: "IMC Weekendschool",
  JEF2027: "het Jeugdeducatiefonds",
  JINC2027: "JINC",
  KINDERHULP2027: "Nationaal Fonds Kinderhulp",
  LELYSTAD2027: "Voedselbank Lelystad",
  MAASTRICHT2027: "Voedselbank Maastricht",
  NIJMEGEN2027: "Voedselbank Nijmegen-Overbetuwe",
  // 🧪 Mark's persoonlijke demo-/testcode (28 aug 2026): alleen voor Mark zelf
  // en mensen die hij kent — niet publiceren, niet op flyers. Reset: ?codereset=1
  PRO2027: "Mark, de maker van Leerkwartier",
  PURMEREND2027: "Voedselbank Purmerend",
  ROTTERDAM2027: "Bibliotheek Rotterdam",
  ROTTERDAMPAS2027: "de Rotterdampas",
  SABA2027: "Queen Wilhelmina Library (Saba)",
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
  // Proef-vraagjes-state: welke vraag, wat is er gekozen, klaar?
  const [vraagIdx, setVraagIdx] = useState(0);
  const [keuze, setKeuze] = useState(null);
  const proefKlaar = vraagIdx >= PROEF_VRAGEN.length;
  // F3 (Fable-review 2 sep 2026): een code die we niet in PARTNER_NAMEN kennen
  // (soort "neutraal") checken we tegen de DB. Onbekend → geen gratis-belofte
  // maar een vriendelijke "code onbekend"-kaart. null = check kon niet.
  const [bekend, setBekend] = useState(null);
  useEffect(() => {
    if (!variant?.code || variant.soort !== "neutraal" || variant.code.startsWith("OOIEVAAR")) return;
    let actief = true;
    partnerCodeBekend(variant.code).then((b) => { if (actief) setBekend(b); });
    return () => { actief = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant?.code]);

  if (!variant || dicht) return null;

  if (bekend === false) {
    return (
      <div className="lk-content-wide" style={{ margin: "10px auto 4px", maxWidth: 560, background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.18)", borderRadius: 16, padding: "14px 18px" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, marginBottom: 4 }}>Deze code kennen we niet 🤔</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.5, opacity: 0.85 }}>
          De code <strong>{variant.code}</strong> staat niet in onze lijst. Kijk nog even op je flyer of mail.
          Oefenen is sowieso gratis — daar heb je geen code voor nodig.
        </div>
        {onOefenen && (
          <button onClick={onOefenen} style={{ marginTop: 10, padding: "8px 14px", borderRadius: 10, border: "none", background: "#ffd54f", color: "#1a1a2e", fontWeight: 800, cursor: "pointer" }}>
            Gratis oefenen →
          </button>
        )}
      </div>
    );
  }

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
    : "Jouw gezin krijgt straks ook alle gezins-extra's gratis, heel 2027 (tot en met 31 december 2027).";

  let titel, tekst;
  if (variant.soort === "sparkfest") {
    titel = "Welkom, Spark Fest-bezoeker! 🎉";
    tekst = `Je zit hier goed. Oefenen voor de Doorstroomtoets is gratis. En omdat jouw flyer uit de Spark Fest-goodybag komt, krijgt jouw hele gezin ook alle gezins-extra's gratis — heel 2027 (tot en met 31 december 2027).`;
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
      {/* 🎯 Scan → meteen dóén (28 aug 2026): drie proef-vraagjes ín de banner.
          Geen klik nodig — vraag 1 staat er al. Elk antwoord telt mee voor de
          partner-plek (telAntwoordVoorVriend); na vraag 3 is die geactiveerd. */}
      {!proefKlaar ? (
        <div style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "12px 14px", marginBottom: 10 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 800, color: accent, marginBottom: 6 }}>
            🎓 PROBEER &apos;T METEEN — VRAAG {vraagIdx + 1} VAN {PROEF_VRAGEN.length}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.5, marginBottom: 10 }}>
            {PROEF_VRAGEN[vraagIdx].q}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {PROEF_VRAGEN[vraagIdx].options.map((opt, i) => {
              const beantwoord = keuze !== null;
              const juist = i === PROEF_VRAGEN[vraagIdx].answer;
              const dit = keuze === i;
              return (
                <button
                  key={i}
                  disabled={beantwoord}
                  onClick={() => {
                    setKeuze(i);
                    telAntwoordVoorVriend();
                    try { track("partner_welkom_vraag", { n: vraagIdx + 1, goed: juist, code: variant.code || null }); } catch { /* */ }
                  }}
                  style={{
                    padding: "11px 10px", borderRadius: 10, cursor: beantwoord ? "default" : "pointer",
                    fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700,
                    border: beantwoord && juist ? "2px solid #00e676" : dit ? "2px solid #ff8a80" : "1.5px solid rgba(255,255,255,0.22)",
                    background: beantwoord && juist ? "rgba(0,230,118,0.15)" : dit ? "rgba(255,138,128,0.12)" : "rgba(255,255,255,0.06)",
                    color: "#fff",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {keuze !== null && (
            <div style={{ marginTop: 10 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,0.9)", background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.3)", borderRadius: 10, padding: "9px 12px" }}>
                {keuze === PROEF_VRAGEN[vraagIdx].answer ? "✅ Goed zo! " : "💡 Bijna! "}
                {PROEF_VRAGEN[vraagIdx].uitleg}
              </div>
              <button
                onClick={() => { setKeuze(null); setVraagIdx((n) => n + 1); }}
                style={{
                  marginTop: 8, width: "100%", padding: "11px 14px", borderRadius: 10, border: "none",
                  background: `linear-gradient(135deg, ${accent}, #ffb300)`, color: "#1a1a00",
                  fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 800, cursor: "pointer",
                }}
              >
                {vraagIdx + 1 < PROEF_VRAGEN.length ? "Volgende vraag →" : "Klaar — laat zien! 🎉"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div style={{ background: "rgba(0,230,118,0.10)", border: "1.5px solid rgba(0,230,118,0.4)", borderRadius: 12, padding: "12px 14px", marginBottom: 10 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#69f0ae", marginBottom: 4 }}>
            🎉 Drie vragen gedaan — zo werkt Leerkwartier!
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,0.9)" }}>
            Bij elke fout krijg je uitleg tot je het snapt — geen &quot;fout, volgende&quot;.
            {variant.code ? " En jullie gratis gezins-plek is nu meteen actief. 💛" : ""}
          </div>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {onOefenen && (
          <button
            onClick={() => { track("partner_welkom_oefenen", { code: variant.code || null }); sluit(); onOefenen(); }}
            style={proefKlaar ? {
              width: "100%", padding: "14px 16px", borderRadius: 12, border: "none",
              background: `linear-gradient(135deg, ${accent}, #ffb300)`,
              color: "#1a1a00", fontFamily: "var(--font-display)",
              fontSize: 16, fontWeight: 800, cursor: "pointer",
            } : {
              width: "100%", padding: "10px 16px", borderRadius: 12,
              border: "1.5px solid rgba(255,255,255,0.22)", background: "none",
              color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-display)",
              fontSize: 13.5, fontWeight: 700, cursor: "pointer",
            }}
          >
            🚀 {proefKlaar ? "Verder oefenen — gratis" : "Liever meteen het hele overzicht"}
          </button>
        )}
        {onOuder && (
          <button
            onClick={() => { track("partner_welkom_ouder", { code: variant.code || null }); onOuder(); }}
            style={{
              width: "100%", padding: "10px 16px", borderRadius: 12,
              border: "1.5px solid rgba(255,255,255,0.22)", background: "none",
              color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-display)",
              fontSize: 13.5, fontWeight: 700, cursor: "pointer",
            }}
          >
            👨‍👩‍👧 Ik ben ouder of verzorger — zo werkt het
          </button>
        )}
      </div>
    </div>
  );
}
