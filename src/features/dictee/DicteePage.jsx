// ✍️ Dictee met Charley (9 sep 2026) — wens van Djess via het wensenbord.
//
// Mark's opzet: Charley zegt eerst de hele zin ("Wij lopen naar het park."),
// dan "Schrijf op het woord: park." Het kind ziet de zin met een gat en typt
// alleen dat woord. Typt het kind na ~3 s nog niets, dan herhaalt Charley
// "Schrijf het woord: park." (max 2×), daarna verschijnt de eerste letter als
// hint. Korte zinnen, 10 woorden per dictee, direct feedback: goed = groen;
// fout = het goede woord met de foute letters rood + de spellingregel in één
// zin (die Charley ook voorleest). Resultaat telt mee in het weekrapport voor
// thuis (mastery: taalverzorging) en in het oefenpad-overzicht (pad 'dictee').
// Verstaanbaarheid verschilt per apparaat (browserstem) — daarom het gat in de
// zin: het kind hoeft alleen dat ene woord goed te horen, en kan altijd op
// "🔊 Nog een keer" tikken. Zonder stem (geen speechSynthesis) valt het terug
// op "lees-dictee": de zin verschijnt kort mét het woord, verdwijnt, en dan typ je.
import { useEffect, useMemo, useRef, useState } from "react";
import supabase from "../../supabase";
import { spreekMetMeelezen } from "../../shared/spraakTekst.js";
import { track } from "../../utils.js";
import { recordAnswerForPath, recordRefAnswer } from "../mastery/mastery.js";
import { DICTEE, GROEPEN, kiesDictee, vergelijk } from "./dicteeData.js";

const WACHT_MS = 3200;      // zo lang wacht Charley op de eerste letter
const MAX_HERHAAL = 2;
const PAD_ID = "dictee-spelling";

// Mark 9 sep 2026: "bij dictee staan de letters in het wit tegen een witte achtergrond" —
// de pagina erfde kleuren van de app-schil (donker thema / dark mode van de telefoon).
// Daarom hier alles expliciet: lichte achtergrond, donkere tekst, lichte kleurstelling
// voor invoervelden (colorScheme light zodat dark mode ze niet zwart maakt).
// 📬 E-mailhaakje op het eindscherm (Mark 18 jun 2026: elke reclame/landing vraagt om e-mail;
// 9 sep: "hiermee kunnen we reclame maken"). Ouder laat adres achter → weekrapport (plan 'dictee').
function DicteeMailHaakje({ groep, score, totaal }) {
  const [email, setEmail] = useState("");
  const [stand, setStand] = useState("");
  const stuur = async (e) => {
    e.preventDefault();
    const m = email.trim(); if (!m.includes("@")) { setStand("Vul een geldig e-mailadres in."); return; }
    setStand("Even bezig…");
    try {
      const { error } = await supabase.from("upgrade_waitlist").insert({ email: m, plan: "dictee", source: "dictee-eindscherm", kind_groep: String(groep || ""), consent_at: new Date().toISOString() });
      if (error) throw error;
      setStand("✓ Gelukt! Het eerste weekrapport komt maandag."); setEmail("");
      try { track("dictee_email", { groep, score, totaal }); } catch { /* */ }
    } catch { setStand("Ging niet door — probeer het later nog eens."); }
  };
  return (
    <form onSubmit={stuur} style={{ background: "#fff8e1", border: "1px solid #f3d27a", borderRadius: 14, padding: "12px 14px", margin: "12px 0", color: "#1c2840" }}>
      <div style={{ font: "800 14px system-ui" }}>📬 Elke maandag dit resultaat in de mail van je ouder of verzorger?</div>
      <div style={{ fontSize: 13, color: "#556", margin: "4px 0 8px" }}>Gratis weekrapport: welke woorden goed gingen en welke regel nog oefenen vraagt. Uitschrijven kan altijd.</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e-mail van ouder of verzorger" style={{ flex: "1 1 180px", padding: "10px 12px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", color: "#1c2840", colorScheme: "light", fontSize: 15, minWidth: 0 }} />
        <button type="submit" style={{ border: "none", borderRadius: 10, padding: "10px 14px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>Ja, graag</button>
      </div>
      {stand && <div style={{ fontSize: 13, marginTop: 6, color: stand.startsWith("✓") ? "#146c43" : "#7a5a00" }}>{stand}</div>}
    </form>
  );
}

// 🔊 Spreekbare versie van een spellingregel (Mark 9 sep 2026: "Hij/zij nu: vergader + t."
// klonk raar — de schuine streep en de losse t sprak Charley slecht uit). Op het scherm
// blijft de regel zoals hij is; alleen wat Charley zégt wordt omgezet:
//   "/" → " of "  ·  "+" → " plus "  ·  "=" → " is "  ·  losse letters → "de letter t"
//   gespelde reeksen "s-c-h" → "s, c, h" (letternamen)  ·  suffix "-isch" → "isch"
export function spreekbaar(tekst) {
  let t = String(tekst || "");
  t = t.replace(/\s*\/\s*/g, " of ");
  t = t.replace(/\s*\+\s*/g, " plus ");
  t = t.replace(/\s*=\s*/g, " is ");
  // gespelde reeksen van 1-2 letters met streepjes: s-c-h, t-r-e-i-n, n-g, i-e, ch-t
  t = t.replace(/(?<![a-zA-Z])([a-zA-Z]{1,2})((?:-[a-zA-Z]{1,2})+)(?![a-zA-Z])/g, (m) => m.split("-").join(", "));
  // suffix met streepje vooraan: -isch, -lijk, -ig, -en, -eau → zonder streepje
  t = t.replace(/(^|\s)-([a-zA-Z])/g, "$1$2");
  // losse enkele letter (niet "u"/"n"/"o" als woord in gewone zinnen — die komen in regels niet voor)
  t = t.replace(/(?<![a-zA-Z'\-,])(?<!\b(?:een|korte|lange|Korte|Lange|letter) )([a-zA-Z])(?=[\s.:;!?]|$)/g, (m, l) => (["u"].includes(l.toLowerCase()) ? m : `de letter ${l}`));
  // twee dezelfde letters: "twee a's" → "twee keer de letter a"
  t = t.replace(/twee ([a-z])'s/g, "twee keer de letter $1");
  t = t.replace(/de letter de letter/g, "de letter");
  // "een e", "korte a", "lange aa" en gespelde reeksen "t, r, e" blijven kaal
  t = t.replace(/\b(een|korte|lange) de letter /gi, "$1 ");
  t = t.replace(/, de letter ([a-zA-Z])\b/g, ", $1");
  return t.replace(/\s+/g, " ").trim();
}

// 📋 Woorden van school (Familie-haak, Mark 9 sep 2026: "bouw de schoolwoordenlijst").
// Een ouder plakt of typt de dicteewoorden van deze week; Charley leest ze voor
// ("Schrijf op het woord: …"), bij een fout spelt hij het woord. Lijst blijft op
// dit apparaat staan (localStorage), max 30 woorden. Hoort straks bij Familie,
// nu gratis (paywall UIT tot 2027). Foto-import = latere stap (tekstherkenning).
// 🔊 Klinkt-hetzelfde-woorden (Mark 10 sep 2026: "ik zei mail, spelde expres meel — klinkt hetzelfde,
// schrijf je anders"). Bij een los schoolwoord zonder zin zegt Charley er een zin bij, zodat het
// kind weet welk woord bedoeld is. Sleutel = het woord zoals het in de lijst staat (kleine letters).
const HOMOFONEN = {
  mail: "Ik stuur je een mail op de computer.", meel: "Van meel bak je brood.",
  hart: "Mijn hart klopt snel.", hard: "De steen is hard.",
  wij: "Wij gaan naar school.", wei: "De koe staat in de wei.",
  zij: "Zij is mijn zus.", zei: "Hij zei dat het goed was.",
  eis: "De eis was streng.", ijs: "Ik eet een ijsje van ijs.",
  peil: "Het water staat op peil.", pijl: "Hij schiet een pijl.",
  steil: "De berg is steil.", stijl: "Dat is een mooie stijl van schrijven.",
  reizen: "Wij reizen naar Spanje.", rijzen: "Het brood moet rijzen.",
  leiden: "Wij leiden de hond aan de riem.", lijden: "Hij moet veel pijn lijden.",
  rauw: "Het vlees is nog rauw.", rouw: "Zij is in de rouw na het verlies.",
  nog: "Ik wil nog een koekje.", noch: "Hij wil noch thee noch koffie.",
  moet: "Ik moet naar huis.", moed: "Hij heeft veel moed.",
  wil: "Ik wil spelen.", wild: "Het dier is wild.",
  bos: "Wij lopen in het bos.", bosch: "Den Bosch is een stad.",
  hei: "De hei is paars.", hij: "Hij is mijn broer.",
  lei: "Zij schreef op een lei.", lij: "De boot ligt aan lij.",
  vlijt: "Met vlijt kom je ver.", vleit: "Hij vleit haar met mooie woorden.",
  weiden: "De schapen weiden in het gras.", wijden: "Zij wijden een kerk in.",
  bei: "De bei is een bes.", bij: "De bij zoemt om de bloem.",
  rei: "De rei van dansers.", rij: "Ga in de rij staan.",
  kou: "Ik heb het koud van de kou.", kauw: "Een kauw is een zwarte vogel.",
  gauw: "Kom gauw!", gouw: "De gouw is een streek.",
  raad: "Ik weet geen raad.", raat: "Bijen maken een honingraat.",
  graat: "Er zit een graat in de vis.", graad: "Het is twintig graden, één graad warmer.",
  wand: "De wand is wit.", want: "Ik ga naar bed, want ik ben moe.",
  wat: "Wat is dat?", wad: "Het wad valt droog bij eb.",
  hout: "De tafel is van hout.", houdt: "Zij houdt van paarden.",
  wordt: "Hij wordt tien.", word: "Ik word moe.",
  vind: "Ik vind dit leuk.", vindt: "Zij vindt dit leuk.",
  bestuur: "Het bestuur vergadert.", bestuurt: "Hij bestuurt de auto.",
  weet: "Ik weet het antwoord.", weed: "Weed is een drug.",
  nacht: "In de nacht is het donker.", dacht: "Ik dacht aan jou.",
};
function parseWoorden(tekst) {
  const uit = [];
  for (let r of String(tekst || "").split(/[\n,;]+/)) {
    r = r.replace(/^\s*(\d+[.)]|[-•*])\s*/, "").trim();
    if (!r) continue;
    // "mail (computer)" of "mail - ik stuur je een mail": woord + eigen context (Mark 10 sep)
    let context = "";
    const m = r.match(/^([^\s(–:-][^(–:-]*?)\s*(?:\(([^)]+)\)|[–:-]\s*(.+))\s*$/);
    if (m) { r = m[1].trim(); context = (m[2] || m[3] || "").trim(); }
    if (r.length > 30 || /\s.*\s.*\s/.test(r)) continue; // geen hele zinnen als woord
    if (!uit.some((w) => w.woord.toLowerCase() === r.toLowerCase())) uit.push({ woord: r, context });
  }
  return uit.slice(0, 30);
}
/** context-zin die Charley erbij zegt: eigen context uit de lijst, anders de ingebouwde klinkt-hetzelfde-zin */
function contextVoor(w, eigen) {
  if (eigen) return /\s/.test(eigen) ? eigen : `zoals in: ${eigen}`;
  return HOMOFONEN[String(w).toLowerCase()] || "";
}
function schoolItems(woorden) {
  return woorden.map((o) => {
    const w = typeof o === "string" ? o : o.woord;
    const ctx = contextVoor(w, typeof o === "string" ? "" : o.context);
    return { zin: w, woord: w, los: true, cat: "school", context: ctx, regel: `Zo schrijf je het: ${w.split("").join("-")}.` };
  });
}
// 📬 Klaarzetten voor je kind of je klas (Mark 10 sep 2026: "als ouder wil ik die woorden als dictee
// kunnen klaarzetten voor je kind, of als leraar voor de klas"). De lijst gaat naar Supabase
// (dictee_lijsten) onder een code van 6 tekens; het kind opent /dictee?lijst=CODE en de lijst
// staat klaar op zijn apparaat. Zelfde patroon als parkcode en klaargezette oefeningen.
// 🔑 Code invullen (kind/leerling) — en ?lijst=CODE in de link opent de lijst vanzelf
function LijstCode({ onGeladen }) {
  const [code, setCode] = useState("");
  const [stand, setStand] = useState("");
  const laad = async (c) => {
    setStand("Even zoeken…");
    try { const l = await haalLijst(c); if (!l) { setStand("Geen lijst met deze code."); return; } setStand(""); onGeladen(l); }
    catch { setStand("Ophalen lukte niet. Probeer het nog eens."); }
  };
  useEffect(() => {
    try { const c = new URLSearchParams(window.location.search).get("lijst"); if (c) { setCode(c.toUpperCase()); laad(c); } } catch { /* */ }
  }, []); // eslint-disable-line
  return (
    <div style={{ background: "#fff", border: "2px solid #cde3d6", borderRadius: 14, padding: "12px 16px", margin: "14px 0 0", color: "#1c2840" }}>
      <div style={{ font: "900 15px system-ui" }}>🔑 Code gekregen van je ouder of juf?</div>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="bijv. K7PX2M" maxLength={6} autoCapitalize="characters" autoCorrect="off" spellCheck={false} style={{ flex: "1 1 120px", padding: "10px 12px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", color: "#1c2840", colorScheme: "light", font: "800 18px system-ui", letterSpacing: 3, minWidth: 0 }} />
        <button onClick={() => laad(code)} disabled={code.length !== 6} style={{ ...KNOP, opacity: code.length !== 6 ? .5 : 1 }}>▶ Start</button>
      </div>
      {stand && <div style={{ fontSize: 13, marginTop: 6, color: "#7a5a00" }}>{stand}</div>}
    </div>
  );
}
const CODE_TEKENS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function maakCode() { let c = ""; for (let i = 0; i < 6; i++) c += CODE_TEKENS[Math.floor(Math.random() * CODE_TEKENS.length)]; return c; }
async function zetLijstKlaar({ naam, woorden, rol }) {
  const { data: { user } = {} } = await supabase.auth.getUser();
  if (!user) throw new Error("geen sessie");
  for (let poging = 0; poging < 4; poging++) {
    const code = maakCode();
    const { error } = await supabase.from("dictee_lijsten").insert({ code, naam, woorden, door: user.id, rol });
    if (!error) return code;
    if (!/duplicate|unique/i.test(error.message)) throw error;
  }
  throw new Error("code maken lukte niet");
}
async function haalLijst(code) {
  const c = String(code || "").trim().toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(c)) return null;
  const { data } = await supabase.from("dictee_lijsten").select("code,naam,woorden").eq("code", c).maybeSingle();
  if (data) { try { supabase.rpc("dictee_lijst_geopend", { p_code: c }); } catch { /* */ } }
  return data || null;
}
function SchoolWoorden({ groep, onStart }) {
  const [bewaard, setBewaard] = useState(() => { try { return JSON.parse(localStorage.getItem("lk_dictee_school") || "null"); } catch { return null; } });
  const [open, setOpen] = useState(!bewaard);
  const [tekst, setTekst] = useState(bewaard ? bewaard.woorden.join("\n") : "");
  const [naam, setNaam] = useState(bewaard?.naam || "");
  const woorden = parseWoorden(tekst);
  const bewaar = () => {
    if (woorden.length < 3) return;
    const lijst = { naam: naam.trim() || "Woorden van school", woorden: woorden.map((w) => (w.context ? `${w.woord} (${w.context})` : w.woord)), datum: new Date().toISOString().slice(0, 10) };
    try { localStorage.setItem("lk_dictee_school", JSON.stringify(lijst)); } catch { /* */ }
    setBewaard(lijst); setOpen(false);
    try { track("dictee_school_bewaard", { n: woorden.length, groep }); } catch { /* */ }
  };
  const [klaar, setKlaar] = useState(() => { try { return JSON.parse(localStorage.getItem("lk_dictee_school_code") || "null"); } catch { return null; } });
  const [bezig, setBezig] = useState(false);
  const [melding, setMelding] = useState("");
  const zetKlaar = async (rol) => {
    if (!bewaard || bezig) return;
    setBezig(true); setMelding("");
    try {
      const code = await zetLijstKlaar({ naam: bewaard.naam, woorden: bewaard.woorden, rol });
      const info = { code, rol, naam: bewaard.naam, n: bewaard.woorden.length, datum: bewaard.datum };
      setKlaar(info); try { localStorage.setItem("lk_dictee_school_code", JSON.stringify(info)); } catch { /* */ }
      try { track("dictee_klaargezet", { rol, n: bewaard.woorden.length }); } catch { /* */ }
    } catch (e) { setMelding("Klaarzetten lukte niet. Probeer het nog eens."); }
    setBezig(false);
  };
  const link = klaar ? `https://leerkwartier.app/dictee?lijst=${klaar.code}` : "";
  const waTekst = klaar ? (klaar.rol === "leerkracht"
    ? `Dictee-woorden van deze week staan klaar in Leerkwartier. Open deze link, of typ code ${klaar.code} op leerkwartier.app/dictee: ${link}`
    : `Je dictee-woorden staan klaar! Open deze link en Charley leest ze voor: ${link}`) : "";
  const pil = <span style={{ display: "inline-block", padding: "2px 9px", borderRadius: 20, background: "#fff3c4", border: "1px solid #e6c65a", color: "#7a5a00", font: "800 11px system-ui", marginLeft: 6, verticalAlign: "middle" }}>Familie · nu gratis</span>;
  return (
    <div style={{ background: "#fff", border: "2px solid #cde3d6", borderRadius: 14, padding: "14px 16px", margin: "14px 0", color: "#1c2840" }}>
      <div style={{ font: "900 16px system-ui" }}>📋 Woorden van school {pil}</div>
      <div style={{ fontSize: 13.5, color: "#556", margin: "4px 0 10px" }}>Plak of typ de dicteewoorden van deze week (uit Parro, de mail of het papiertje). Charley leest ze voor en je kind oefent precies wat op school komt.</div>
      {bewaard && !open && (
        <div>
          <div style={{ fontSize: 14 }}><b>{bewaard.naam}</b> · {bewaard.woorden.length} woorden · bewaard {bewaard.datum}</div>
          <div style={{ fontSize: 13, color: "#556", margin: "4px 0 10px" }}>{bewaard.woorden.join(" · ")}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button onClick={() => { try { track("dictee_school_start", { n: bewaard.woorden.length, groep }); } catch { /* */ } onStart(schoolItems(parseWoorden(bewaard.woorden.join("\n")))); }} style={KNOP}>▶ Dictee met deze woorden</button>
            <button onClick={() => setOpen(true)} style={KNOP2}>✏️ Wijzigen</button>
          </div>
          <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px dashed #cde3d6" }}>
            <div style={{ font: "800 14px system-ui" }}>📬 Klaarzetten voor je kind of je klas</div>
            <div style={{ fontSize: 13, color: "#556", margin: "4px 0 8px" }}>Je krijgt een code en een link. Op het apparaat van je kind (of op het bord) staat de lijst dan klaar, en Charley leest hem daar voor.</div>
            {!klaar || klaar.naam !== bewaard.naam || klaar.n !== bewaard.woorden.length ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={() => zetKlaar("ouder")} disabled={bezig} style={{ ...KNOP, padding: "9px 14px", font: "800 13.5px system-ui", opacity: bezig ? .6 : 1 }}>👪 Zet klaar voor mijn kind</button>
                <button onClick={() => zetKlaar("leerkracht")} disabled={bezig} style={{ ...KNOP2, padding: "9px 14px", font: "800 13.5px system-ui" }}>🧑‍🏫 Zet klaar voor mijn klas</button>
              </div>
            ) : (
              <div style={{ background: "#eef6ff", border: "1px solid #bcd6f5", borderRadius: 12, padding: "10px 12px" }}>
                <div style={{ font: "900 22px system-ui", letterSpacing: 3, color: "#1f4fa8" }}>{klaar.code}</div>
                <div style={{ fontSize: 13, color: "#556", margin: "2px 0 8px" }}>{klaar.rol === "leerkracht" ? "Zet deze code op het bord: leerlingen typen hem op leerkwartier.app/dictee. Of deel de link." : "Deel de link met je kind, of laat het de code typen op leerkwartier.app/dictee."}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <a href={`https://wa.me/?text=${encodeURIComponent(waTekst)}`} target="_blank" rel="noopener noreferrer" onClick={() => { try { track("dictee_klaargezet_deel", { via: "whatsapp" }); } catch { /* */ } }} style={{ ...KNOP, background: "linear-gradient(135deg,#25d366,#128c7e)", textDecoration: "none", padding: "9px 14px", font: "800 13.5px system-ui" }}>📲 Deel via WhatsApp</a>
                  <button onClick={async () => { try { await navigator.clipboard.writeText(link); setMelding("Link gekopieerd ✓"); } catch { setMelding("Kopiëren lukte niet"); } setTimeout(() => setMelding(""), 2500); }} style={{ ...KNOP2, padding: "9px 14px", font: "800 13.5px system-ui" }}>🔗 Kopieer link</button>
                  <button onClick={() => { setKlaar(null); try { localStorage.removeItem("lk_dictee_school_code"); } catch { /* */ } }} style={{ ...KNOP2, padding: "9px 14px", font: "800 13.5px system-ui" }}>Nieuwe code</button>
                </div>
              </div>
            )}
            {melding && <div style={{ fontSize: 13, marginTop: 6, color: melding.includes("✓") ? "#146c43" : "#b42318" }}>{melding}</div>}
          </div>
        </div>
      )}
      {open && (
        <div>
          <input value={naam} onChange={(e) => setNaam(e.target.value)} placeholder="naam van de lijst, bv. week 37 of thema herfst" style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", color: "#1c2840", colorScheme: "light", fontSize: 14, marginBottom: 8 }} />
          <div style={{ fontSize: 12.5, color: "#556", margin: "0 0 6px" }}>Klinkt een woord als een ander woord (mail/meel, hart/hard)? Zet erachter tussen haakjes waar het over gaat: <b>mail (computer)</b>. Charley zegt dat er dan bij. Bekende twijfelwoorden krijgen vanzelf een zin.</div>
          <textarea value={tekst} onChange={(e) => setTekst(e.target.value)} rows={6} placeholder={"één woord per regel, of met komma's:\nvriendinnen, pannenkoek, mail (computer), …"} style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", color: "#1c2840", colorScheme: "light", font: "600 15px system-ui", lineHeight: 1.5 }} />
          <div style={{ fontSize: 12.5, color: woorden.length >= 3 ? "#146c43" : "#7a5a00", margin: "6px 0 10px" }}>{woorden.length} {woorden.length === 1 ? "woord" : "woorden"} herkend{woorden.length < 3 ? " · minstens 3 nodig" : ""}{woorden.length >= 30 ? " · maximaal 30" : ""}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button onClick={bewaar} disabled={woorden.length < 3} style={{ ...KNOP, opacity: woorden.length < 3 ? .5 : 1 }}>Bewaar de lijst</button>
            {bewaard && <button onClick={() => setOpen(false)} style={KNOP2}>Annuleer</button>}
          </div>
        </div>
      )}
    </div>
  );
}

// 📱 Autocorrectie-waarschuwing (Mark 10 sep 2026: "met dictee heb ik autocorrectie
// op de telefoon"). De app kan het toetsenbord niet dwingen; het invoerveld vraagt
// erom (autoCorrect/autoCapitalize/spellCheck uit — werkt op iPhone, op Android
// deels). Daarom op een telefoon één keer deze tip, weg te klikken.
function AutocorrectieTip() {
  const isTelefoon = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isApple = typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const [weg, setWeg] = useState(() => { try { return localStorage.getItem("lk_dictee_autocorrectie_tip") === "1"; } catch { return false; } });
  if (!isTelefoon || weg) return null;
  const sluit = () => { setWeg(true); try { localStorage.setItem("lk_dictee_autocorrectie_tip", "1"); } catch { /* */ } };
  return (
    <div style={{ background: "#fff8e1", border: "1px solid #f3d27a", borderRadius: 14, padding: "12px 14px", margin: "12px 0", color: "#1c2840" }}>
      <div style={{ font: "800 14.5px system-ui" }}>📱 Zet autocorrectie even uit</div>
      <div style={{ fontSize: 13.5, color: "#556", margin: "4px 0 8px", lineHeight: 1.45 }}>
        Anders verbetert je telefoon het woord vóór je het controleert, en dan oefen je niets.{" "}
        {isApple
          ? <>Op een iPhone: <b>Instellingen → Algemeen → Toetsenbord → Autocorrectie</b> uit.</>
          : <>Op Android (Gboard): houd de <b>komma-toets</b> ingedrukt → tandwiel → <b>Tekstcorrectie → Autocorrectie</b> uit. Of typ langzaam en kijk vóór je op Controleer tikt of het woord nog is wat jij typte.</>}
      </div>
      <button onClick={sluit} style={{ border: "none", borderRadius: 999, padding: "8px 14px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>Begrepen</button>
    </div>
  );
}

const W = { maxWidth: 560, margin: "0 auto", padding: "16px 16px 40px", fontFamily: "system-ui, Segoe UI, sans-serif", color: "#1c2840", background: "#f6f9fc", minHeight: "100vh", colorScheme: "light", boxSizing: "border-box" };
const KNOP = { border: "none", borderRadius: 999, padding: "12px 20px", font: "800 16px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" };
const KNOP2 = { ...KNOP, color: "#1c2840", background: "#eef2f7" };

// 🌉 "Nog één woord"-brug (dagrapport 10 sep 2026, idee 1 ochtend): een fout
// woord krijgt een knop naar het leerpad van die spellingregel, zodat een
// dictee-bezoeker een oefenaar wordt. Categorie (dicteeData.cat) → pad-id.
const CAT_NAAR_PAD = [
  [/werkwoord|d of t|voltooid deelwoord|verleden tijd|gebeurd|vd /i, "werkwoordsspelling-dt", "werkwoorden en d/t"],
  [/ei\/ij|au\/ou/i, "spelling-ei-ij-au-ou", "ei/ij en au/ou"],
  [/hoofdletter|apostrof|leesteken/i, "leestekens-hoofdletters-po", "hoofdletters en leestekens"],
];
function padVoorCat(cat) {
  for (const [re, pad, naam] of CAT_NAAR_PAD) if (re.test(cat || "")) return { pad, naam };
  return { pad: "spelling-overige-po", naam: "spellingregels" };
}
function OefenRegelKnop({ cat, groep }) {
  const { pad, naam } = padVoorCat(cat);
  const href = `/leren/pad?id=${encodeURIComponent(pad)}&utm_source=dictee&utm_campaign=brug`;
  return (
    <a href={href} onClick={() => { try { track("dictee_naar_pad", { pad, cat, groep }); } catch { /* */ } }}
      style={{ display: "inline-block", marginTop: 4, padding: "5px 11px", borderRadius: 999, background: "#e6f4ea", color: "#146c43", font: "800 12.5px system-ui", textDecoration: "none" }}>
      ✏️ Oefen: {naam} →
    </a>
  );
}

const kanSpreken = () => typeof window !== "undefined" && !!window.speechSynthesis;
function groepUit(level) {
  const m = String(level || "").match(/(\d)/); const g = m ? +m[1] : null;
  return g && GROEPEN.includes(g) ? g : null;
}
function metGat(zin, woord) {
  const i = zin.indexOf(woord);
  if (i < 0) return { voor: zin, na: "" };
  return { voor: zin.slice(0, i), na: zin.slice(i + woord.length) };
}

export default function DicteePage({ userName = "", userLevel = "", onTerug }) {
  const [groep, setGroep] = useState(() => { try { return +localStorage.getItem("lk_dictee_groep") || groepUit(userLevel); } catch { return groepUit(userLevel); } });
  const [fase, setFase] = useState("kies");          // kies | dictee | klaar
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [status, setStatus] = useState("luister");   // luister | typen | goed | fout
  const [invoer, setInvoer] = useState("");
  const [hint, setHint] = useState(false);
  const [uitkomst, setUitkomst] = useState([]);      // per item {goed, getypt}
  const [spreekt, setSpreekt] = useState(false);
  const [leesModus, setLeesModus] = useState(!kanSpreken());
  const [toonZin, setToonZin] = useState(false);     // lees-dictee: zin kort tonen
  const inputRef = useRef(null);
  const stopRef = useRef(null);
  const wachtRef = useRef(null);
  const herhaalRef = useRef(0);
  const invoerRef = useRef("");
  invoerRef.current = invoer;
  const item = items[idx];
  const gat = useMemo(() => (item ? metGat(item.zin, item.woord) : null), [item]);

  const stopAlles = () => { if (stopRef.current) { try { stopRef.current(); } catch { /* */ } stopRef.current = null; } clearTimeout(wachtRef.current); setSpreekt(false); };
  useEffect(() => () => stopAlles(), []);

  const zeg = (tekst, onEnd) => {
    stopAlles();
    if (!kanSpreken()) { onEnd && onEnd(); return; }
    setSpreekt(true);
    stopRef.current = spreekMetMeelezen(tekst, { rate: 0.92, onEnd: () => { setSpreekt(false); onEnd && onEnd(); } });
  };
  const wachtOpTypen = () => {
    clearTimeout(wachtRef.current);
    wachtRef.current = setTimeout(() => {
      if (invoerRef.current.trim()) return;
      if (herhaalRef.current < MAX_HERHAAL) { herhaalRef.current += 1; zeg(`Schrijf het woord: ${item.woord}.`, wachtOpTypen); }
      else setHint(true);
    }, WACHT_MS);
  };

  // een nieuw woord aanbieden
  useEffect(() => {
    if (fase !== "dictee" || !item) return;
    setInvoer(""); setHint(false); setStatus("luister"); herhaalRef.current = 0;
    if (leesModus) {
      setToonZin(true);
      const t = setTimeout(() => { setToonZin(false); setStatus("typen"); setTimeout(() => inputRef.current?.focus(), 50); }, 3500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => zeg(item.los ? `Schrijf op het woord: ${item.woord}.${item.context ? ` ${item.context}` : ""}` : `${item.zin} Schrijf op het woord: ${item.woord}.`, () => { setStatus("typen"); setTimeout(() => inputRef.current?.focus(), 50); wachtOpTypen(); }), 300);
    return () => { clearTimeout(t); stopAlles(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, idx, item, leesModus]);

  const start = (g, lijst = null) => {
    const gekozen = lijst || kiesDictee(g, 10);
    try { localStorage.setItem("lk_dictee_groep", String(g)); } catch { /* */ }
    setGroep(g); setItems(gekozen); setIdx(0); setUitkomst([]);
    // 10 sep 2026 (dagrapport: 8 starts, 0 afgemaakt, meesten stopten vóór het eerste woord):
    // eerst een geluidscheck. Charley praat meteen in de tik zelf — telefoons staan spraak
    // pas toe na een tik — en het kind start pas als het hem hoort. Anders lees-dictee.
    setFase("check");
    if (kanSpreken()) zeg("Hoi, ik ben Charley! Hoor je mij? Tik dan op de groene knop, dan beginnen we.");
    try { track("dictee_start", { groep: g, n: gekozen.length, stem: kanSpreken() ? 1 : 0, bron: lijst ? "school" : "lijst" }); } catch { /* */ }
  };
  const nogEenKeer = () => { if (!item) return; herhaalRef.current = 0; zeg(status === "luister" && !item.los ? `${item.zin} Schrijf op het woord: ${item.woord}.` : `Schrijf het woord: ${item.woord}.${item.los && item.context ? ` ${item.context}` : ""}`, () => { if (status !== "goed" && status !== "fout") { setStatus("typen"); wachtOpTypen(); } }); };

  const controleer = () => {
    if (!item || !invoer.trim() || status === "goed" || status === "fout") return;
    clearTimeout(wachtRef.current);
    const r = vergelijk(invoer, item.woord, item.ook);
    setStatus(r.goed ? "goed" : "fout");
    setUitkomst((u) => [...u.slice(0, idx), { goed: r.goed, getypt: invoer.trim(), letters: r.letters }]);
    try { track("dictee_woord", { groep, goed: r.goed ? 1 : 0, cat: item.cat, hint: hint ? 1 : 0 }); track("question_answered", { bron: "dictee", subject: "spelling", level: String(groep), is_correct: r.goed }); } catch { /* */ }
    try { if (userName) recordAnswerForPath({ playerName: userName, pathId: PAD_ID, isCorrect: r.goed }); } catch { /* */ }
    zeg(r.goed ? "Goed zo!" : `Bijna. Het is: ${item.woord}. ${spreekbaar(item.regel)}`);
  };
  const volgende = () => {
    stopAlles();
    if (idx + 1 < items.length) { setIdx(idx + 1); return; }
    const score = uitkomst.filter((u) => u?.goed).length;
    setFase("klaar");
    try { track("dictee_klaar", { groep, score, n: items.length }); } catch { /* */ }
    try { if (userName) recordRefAnswer({ playerName: userName, onderdeel: "taalverzorging", ref: "1F", isCorrect: false, attemptsDelta: items.length, correctDelta: score }); } catch { /* */ }
    zeg(score === items.length ? "Alles goed. Wat een kanjer!" : score >= items.length / 2 ? `${score} van de ${items.length} goed. Goed gedaan!` : `${score} goed. Oefenen helpt, kom morgen nog eens.`);
  };
  const fouten = items.filter((_, i) => uitkomst[i] && !uitkomst[i].goed);

  // ── schermen ──
  if (fase === "kies") {
    return (
      <div style={W}>
        <button onClick={onTerug} style={{ ...KNOP2, padding: "8px 14px", font: "700 14px system-ui", marginBottom: 12 }}>← Terug</button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ fontSize: 44 }}>🐕</div>
          <div><div style={{ font: "900 24px system-ui" }}>Dictee met Charley</div><div style={{ color: "#556", fontSize: 14 }}>Charley zegt een zin en dan één woord. Jij typt dat woord.</div></div>
        </div>
        <div style={{ background: "#f4faf6", border: "1px solid #cde3d6", borderRadius: 14, padding: "14px 16px", margin: "12px 0", fontSize: 15, lineHeight: 1.5, color: "#1c2840" }}>
          <b>Zo werkt het:</b> 10 woorden. Je hoort de zin, je ziet de zin met een gat, en je typt het woord dat Charley zegt. Fout? Dan zie je meteen hoe het wél moet, en waarom.
          {!kanSpreken() && <div style={{ marginTop: 8, color: "#7a5a00" }}>Op dit apparaat kan Charley niet praten. Dan wordt het een <b>lees-dictee</b>: de zin verschijnt even mét het woord, verdwijnt, en dan typ je het.</div>}
        </div>
        <div style={{ font: "800 15px system-ui", margin: "14px 0 6px" }}>In welke groep zit je?</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {GROEPEN.map((g) => (
            <button key={g} onClick={() => start(g)} style={{ ...KNOP, background: g === groep ? "linear-gradient(135deg,#2e9e4f,#1f7a3a)" : "#3a4754", minWidth: 84 }}>Groep {g}</button>
          ))}
        </div>
        <AutocorrectieTip />
        <LijstCode onGeladen={(lijst) => { const items = schoolItems(parseWoorden((lijst.woorden || []).join("\n"))); try { localStorage.setItem("lk_dictee_school", JSON.stringify({ naam: lijst.naam, woorden: lijst.woorden, datum: new Date().toISOString().slice(0, 10), code: lijst.code })); } catch { /* */ } try { track("dictee_lijst_geopend", { code: lijst.code, n: items.length }); } catch { /* */ } start(groep, items); }} />
        <SchoolWoorden groep={groep} onStart={(lijst) => start(groep, lijst)} />
        <p style={{ color: "#778", fontSize: 12.5, marginTop: 14 }}>Tip: zet het geluid aan. Tik op 🔊 als je Charley niet goed verstaat. {DICTEE[groep || 6].length} woorden per groep; elke keer een andere mix.</p>
      </div>
    );
  }

  if (fase === "check") {
    return (
      <div style={W}>
        <button onClick={() => { stopAlles(); setFase("kies"); }} style={{ ...KNOP2, padding: "8px 14px", font: "700 14px system-ui", marginBottom: 12 }}>← Terug</button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ fontSize: 44 }}>🐕</div>
          <div style={{ flex: 1, background: "#fff", border: "2px solid #cde3d6", borderRadius: 16, padding: "12px 14px", fontSize: 16, lineHeight: 1.5, color: "#1c2840" }}>
            {kanSpreken() ? <>Hoi, ik ben Charley! <b>Hoor je mij?</b> {spreekt ? "🔊" : ""}</> : <>Op dit apparaat kan ik niet praten. Dan doen we een <b>lees-dictee</b>.</>}
          </div>
        </div>
        <div style={{ background: "#fff8e1", border: "1px solid #f3d27a", borderRadius: 14, padding: "12px 14px", margin: "10px 0 14px", color: "#1c2840", fontSize: 14 }}>
          🔊 <b>Zet je geluid aan</b> en haal de telefoon van stil. Charley zegt straks een zin en dan het woord dat je moet schrijven.
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {kanSpreken() && <button onClick={() => { stopAlles(); try { track("dictee_check", { hoort: 1, groep }); } catch { /* */ } setFase("dictee"); }} style={{ ...KNOP, fontSize: 18, padding: "14px 22px" }}>✅ Ik hoor Charley, start!</button>}
          {kanSpreken() && <button onClick={() => { herhaalRef.current = 0; zeg("Hoi, ik ben Charley! Hoor je mij nu?"); }} style={KNOP2}>🔊 Nog een keer</button>}
          <button onClick={() => { stopAlles(); setLeesModus(true); try { track("dictee_check", { hoort: 0, groep }); } catch { /* */ } setFase("dictee"); }} style={KNOP2}>{kanSpreken() ? "Ik hoor niets → lees-dictee" : "▶ Start het lees-dictee"}</button>
        </div>
        <p style={{ color: "#778", fontSize: 12.5, marginTop: 14 }}>Bij een lees-dictee zie je de zin 3 seconden mét het woord; daarna typ je het uit je hoofd.</p>
      </div>
    );
  }

  if (fase === "klaar") {
    const score = uitkomst.filter((u) => u?.goed).length;
    return (
      <div style={W}>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ fontSize: 54 }}>{score === items.length ? "🏆" : score >= items.length / 2 ? "🎉" : "💪"}</div>
          <div style={{ font: "900 28px system-ui" }}>{score} van de {items.length} goed</div>
          <div style={{ color: "#556", marginTop: 4 }}>Groep {groep} · Charley: {score === items.length ? "wat een kanjer!" : score >= items.length / 2 ? "goed gedaan!" : "oefenen helpt, morgen weer?"}</div>
        </div>
        {fouten.length > 0 && (
          <div style={{ background: "#fff5f5", border: "1px solid #f3c9c9", borderRadius: 14, padding: "12px 14px", margin: "12px 0" }}>
            <div style={{ font: "800 15px system-ui", marginBottom: 6 }}>Nog even kijken:</div>
            {fouten.map((f, i) => (
              <div key={i} style={{ padding: "6px 0", borderTop: i ? "1px solid #f0dcdc" : "none", fontSize: 14.5, lineHeight: 1.45 }}>
                <b style={{ color: "#146c43" }}>{f.woord}</b> <span style={{ color: "#888" }}>(jij schreef: {uitkomst[items.indexOf(f)]?.getypt})</span><br />
                <span style={{ color: "#445" }}>{f.regel}</span><br />
                <OefenRegelKnop cat={f.cat} groep={groep} />
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          {fouten.length > 0 && <button onClick={() => start(groep, fouten)} style={KNOP}>🔁 Fouten nog een keer</button>}
          <button onClick={() => start(groep)} style={fouten.length ? KNOP2 : KNOP}>✍️ Nieuw dictee</button>
          <button onClick={onTerug} style={KNOP2}>Klaar</button>
        </div>
        <DicteeMailHaakje groep={groep} score={score} totaal={items.length} />
        <p style={{ color: "#778", fontSize: 12.5, marginTop: 14 }}>Je score telt mee in het weekrapport voor thuis (spelling).</p>
      </div>
    );
  }

  // ── het dictee zelf ──
  const u = uitkomst[idx];
  return (
    <div style={W}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <button onClick={() => { stopAlles(); setFase("kies"); }} style={{ ...KNOP2, padding: "8px 14px", font: "700 14px system-ui" }}>← Stop</button>
        <div style={{ font: "800 14px system-ui", color: "#556" }}>Woord {idx + 1} van {items.length} · {item.los ? "woorden van school" : `groep ${groep}`}</div>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ fontSize: 40, lineHeight: 1 }}>🐕</div>
        <div style={{ flex: 1, background: "#fff", border: "2px solid #cde3d6", borderRadius: 16, padding: "12px 14px", fontSize: 15, lineHeight: 1.5, color: "#1c2840" }}>
          {status === "luister" && !leesModus && <span>{spreekt ? "🔊 Luister goed…" : "Charley komt eraan…"}</span>}
          {leesModus && toonZin && <span><b>Lees goed:</b> {item.zin}</span>}
          {(status === "typen" || (leesModus && !toonZin && status !== "goed" && status !== "fout")) && <span>Schrijf op het woord dat je hoorde.{hint ? <> Het begint met een <b style={{ fontSize: 18 }}>{item.woord[0]}</b>.</> : null}</span>}
          {status === "goed" && <span style={{ color: "#146c43", fontWeight: 800 }}>✅ Goed zo!</span>}
          {status === "fout" && <span><span style={{ color: "#b42318", fontWeight: 800 }}>Bijna!</span> Het is <b>{item.woord}</b>. {item.regel}</span>}
        </div>
      </div>

      {/* de zin met het gat */}
      <div style={{ font: "700 22px/1.5 system-ui", background: "#f4faf6", border: "1px solid #cde3d6", borderRadius: 14, padding: "14px 16px", margin: "6px 0 12px", minHeight: 64, color: "#1c2840" }}>
        {gat.voor}
        {status === "goed" || status === "fout" ? (
          <span style={{ display: "inline-block", borderBottom: "3px solid", borderColor: status === "goed" ? "#146c43" : "#b42318", padding: "0 4px" }}>
            {(u?.letters || []).map((l, i) => <span key={i} style={{ color: l.ok ? "#146c43" : "#b42318", textDecoration: l.ok ? "none" : "none" }}>{l.d || ""}</span>)}
          </span>
        ) : (
          <span style={{ display: "inline-block", minWidth: Math.max(70, item.woord.length * 15), borderBottom: "3px solid #8a939c", padding: "0 4px", color: "#8a939c" }}>{invoer || " "}</span>
        )}
        {gat.na}
      </div>
      {status === "fout" && <div style={{ fontSize: 13.5, color: "#556", margin: "-6px 0 10px" }}>Jij schreef: <span style={{ textDecoration: "line-through" }}>{u?.getypt}</span></div>}

      <form onSubmit={(e) => { e.preventDefault(); controleer(); }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input ref={inputRef} value={invoer} onChange={(e) => { setInvoer(e.target.value); clearTimeout(wachtRef.current); }} disabled={status === "goed" || status === "fout" || (status === "luister" && !leesModus)}
          placeholder="typ het woord" autoComplete="off" autoCapitalize="none" autoCorrect="off" spellCheck={false} inputMode="text" enterKeyHint="done" name="lk_dictee_woord_zonder_correctie" data-gramm="false"
          style={{ flex: "1 1 200px", border: "2px solid #9fb0c6", borderRadius: 12, padding: "12px 14px", font: "800 20px system-ui", color: "#1c2840", background: "#fff", colorScheme: "light", minWidth: 0 }} />
        {status === "goed" || status === "fout" ? (
          <button type="button" onClick={volgende} style={KNOP}>{idx + 1 < items.length ? "Volgende →" : "Klaar →"}</button>
        ) : (
          <button type="submit" disabled={!invoer.trim()} style={{ ...KNOP, opacity: invoer.trim() ? 1 : .5 }}>✓ Controleer</button>
        )}
        {!leesModus && <button type="button" onClick={nogEenKeer} style={KNOP2}>🔊 Nog een keer</button>}
        {leesModus && status !== "goed" && status !== "fout" && <button type="button" onClick={() => { setToonZin(true); setTimeout(() => setToonZin(false), 2500); }} style={KNOP2}>👀 Laat nog eens zien</button>}
      </form>
      <div style={{ display: "flex", gap: 4, marginTop: 14 }}>
        {items.map((_, i) => <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: uitkomst[i] ? (uitkomst[i].goed ? "#146c43" : "#b42318") : i === idx ? "#8a939c" : "#e3e8ee" }} />)}
      </div>
      {!leesModus && <p style={{ color: "#778", fontSize: 12.5, marginTop: 12 }}>Versta je Charley slecht? Tik op 🔊, of <button type="button" onClick={() => { stopAlles(); setLeesModus(true); }} style={{ border: "none", background: "none", color: "#2f6fd6", font: "700 12.5px system-ui", cursor: "pointer", padding: 0 }}>doe een lees-dictee</button>.</p>}
    </div>
  );
}
