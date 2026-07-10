// Dictees-pagina "/dictees" — printbare voorlees-dictees per spellingregel,
// onderdeel van de print-lijn (Mark 2026-07-02). Het echte dictee-formaat:
// de OUDER krijgt een voorleesblad (woord → zin → woord, plus de regel om ná
// afloop te bespreken), het KIND een invulblad met genummerde schrijflijnen.
// Alle woordenlijsten zijn eigen samenstellingen rond de klassieke regels van
// groep 5-8. Geen e-mail-slot (de ouder hééft de antwoorden al — dat is het
// voorleesblad); wel het GratisLesmateriaal-opt-in-blok op het scherm.

import PrintKnoppen from "../shared/ui/PrintKnoppen.jsx";
import { useEffect, useState } from "react";
import { BRAND } from "../brand.js";
import PrintFooter from "../shared/ui/PrintFooter.jsx";
import { track } from "../utils.js";
import GratisLesmateriaal from "./GratisLesmateriaal.jsx";

const PRINT_CSS = `
@media print {
  html, body { overflow: visible !important; height: auto !important; max-width: none !important; }
  #root { min-height: 0 !important; }
  body * { visibility: hidden !important; }
  .dictee-print, .dictee-print * { visibility: visible !important; }
  .dictee-print {
    position: absolute !important;
    top: 0; left: 0; right: 0;
    margin: 0 !important;
    background: #fff !important;
  }
  .dictee-noprint { display: none !important; }
  .dictee-sheet {
    box-shadow: none !important;
    margin: 0 auto !important;
    page-break-after: always;
    border: none !important;
  }
  .dictee-sheet:last-child { page-break-after: auto; }
  .dictee-item { break-inside: avoid; page-break-inside: avoid; }
  @page { margin: 16mm 14mm; }
}
`;

// ── De dictees: per spellingregel 10 woorden in draagzinnen ─────
const DICTEES = [
  {
    id: "eij", titel: "ei of ij?", emoji: "🥚",
    regel: "Er is geen trucje dat altijd werkt: ei/ij-woorden moet je uit je hoofd leren. Wel handig: er zijn veel mínder ei-woorden dan ij-woorden. Twijfel je? Dan is de lange ij het vaakst goed.",
    items: [
      { woord: "trein", zin: "De trein vertrekt om negen uur." },
      { woord: "eiland", zin: "Op het eiland staat een vuurtoren." },
      { woord: "schilderij", zin: "Het schilderij hangt scheef aan de muur." },
      { woord: "allebei", zin: "We willen allebei het laatste koekje." },
      { woord: "pijn", zin: "Na het voetballen heeft hij pijn aan zijn knie." },
      { woord: "reiziger", zin: "De reiziger zoekt het juiste perron." },
      { woord: "ijzer", zin: "Het hek is gemaakt van ijzer." },
      { woord: "plein", zin: "De kinderen spelen op het plein." },
      { woord: "bijzonder", zin: "Wat een bijzonder mooie dag is dit!" },
      { woord: "klein", zin: "Het kleine hondje past in de fietstas." },
    ],
  },
  {
    id: "auou", titel: "au of ou?", emoji: "🧊",
    regel: "Ook au/ou is leerwerk. Ezelsbruggetje dat vaak helpt: veel 'koude' woorden hebben ou (koud, oud, goud, hout, zout) — en au hoor je vaak bij een uitroep (au!, gauw, miauw).",
    items: [
      { woord: "koud", zin: "In januari is het buiten erg koud." },
      { woord: "gauw", zin: "Kom gauw, de film begint!" },
      { woord: "vrouw", zin: "Die vrouw is de burgemeester van ons dorp." },
      { woord: "zout", zin: "Er zit te veel zout in de soep." },
      { woord: "pauze", zin: "In de pauze eten we een appel." },
      { woord: "blauw", zin: "De lucht is vandaag helemaal blauw." },
      { woord: "benauwd", zin: "In de volle bus werd het benauwd." },
      { woord: "houden", zin: "Wij houden allebei van pannenkoeken." },
      { woord: "oud", zin: "Mijn opa is tachtig jaar oud." },
      { woord: "miauw", zin: "De kat zegt miauw als hij honger heeft." },
    ],
  },
  {
    id: "dt", titel: "d, t of dt aan het eind?", emoji: "🐴",
    regel: "Hoor je aan het eind een t, maak het woord dan langer: hond → honden (dus een d!). Bij werkwoorden: stam + t bij hij/zij/het (hij wordt, zij vindt) — ook als de stam al op een d eindigt.",
    items: [
      { woord: "hond", zin: "De hond rent achter de bal aan." },
      { woord: "paard", zin: "Het paard staat in de wei." },
      { woord: "antwoord", zin: "Weet jij het antwoord op deze vraag?" },
      { woord: "verband", zin: "De dokter doet verband om mijn arm." },
      { woord: "hard", zin: "De muziek staat veel te hard." },
      { woord: "brand", zin: "De brandweer blust de brand snel." },
      { woord: "wordt", zin: "Mijn zusje wordt morgen acht jaar. Schrijf op: wordt." },
      { woord: "vindt", zin: "Hij vindt spruitjes niet lekker. Schrijf op: vindt." },
      { woord: "gebeurt", zin: "Er gebeurt vandaag iets spannends. Schrijf op: gebeurt." },
      { woord: "word", zin: "Ik word later uitvinder. Schrijf op: word." },
    ],
  },
  {
    id: "openGesloten", titel: "één of twee? (bomen/bommen)", emoji: "🌳",
    regel: "Hoor je een lange klank (aa, ee, oo, uu) aan het eind van een klankgroep? Dan schrijf je hem met één letter: bo-men. Hoor je een korte klank? Dan krijgt de medeklinker erna een maatje: bom-men.",
    items: [
      { woord: "bomen", zin: "In het park staan hoge bomen." },
      { woord: "bommen", zin: "In het museum leren we over bommen uit de oorlog." },
      { woord: "manen", zin: "Het paard heeft prachtige manen." },
      { woord: "mannen", zin: "Twee mannen tillen de zware kast." },
      { woord: "spelen", zin: "Na school gaan we buiten spelen." },
      { woord: "spellen", zin: "Moeilijke woorden moet je goed spellen." },
      { woord: "muren", zin: "De muren van het kasteel zijn dik." },
      { woord: "koren", zin: "De boer maait het koren op het land." },
      { woord: "snorren", zin: "Sommige katten hebben lange snorren." },
      { woord: "ballen", zin: "In de gymzaal liggen wel twintig ballen." },
    ],
  },
  {
    id: "verklein", titel: "verkleinwoorden", emoji: "🐣",
    regel: "Verkleinwoorden eindigen op -je, -tje, -etje, -pje of -kje. Luister goed naar het grondwoord: ring → ringetje, boom → boompje, ketting → kettinkje, auto → autootje (extra o!).",
    items: [
      { woord: "huisje", zin: "De kabouter woont in een klein huisje." },
      { woord: "boompje", zin: "We planten een boompje in de tuin." },
      { woord: "ringetje", zin: "Ze draagt een zilveren ringetje." },
      { woord: "jasje", zin: "Doe je jasje aan, het regent." },
      { woord: "bloemetje", zin: "Hij plukt een bloemetje voor oma." },
      { woord: "koekje", zin: "Bij de thee krijg je één koekje." },
      { woord: "mannetje", zin: "Op het bord staat een grappig mannetje." },
      { woord: "autootje", zin: "Het speelgoedautootje rijdt onder de bank." },
      { woord: "kettinkje", zin: "Het kettinkje van de fiets is los." },
      { woord: "vogeltje", zin: "Een vogeltje zingt in de boom." },
    ],
  },
  {
    id: "weet", titel: "weetwoorden (leenwoorden)", emoji: "🎁",
    regel: "Deze woorden komen uit andere talen — je kunt de spelling niet horen, je moet hem wéten. Vaak met een c die als k of s klinkt, of een vreemde lettercombinatie. Gewoon vaak zien en schrijven!",
    items: [
      { woord: "cadeau", zin: "Ik krijg een cadeau voor mijn verjaardag." },
      { woord: "circus", zin: "In het circus jongleert een clown." },
      { woord: "chocolade", zin: "Warme chocolade met slagroom, graag!" },
      { woord: "machine", zin: "De machine maakt een zoemend geluid." },
      { woord: "baby", zin: "De baby slaapt in de kinderwagen." },
      { woord: "hobby", zin: "Tekenen is mijn liefste hobby." },
      { woord: "taxi", zin: "We nemen een taxi naar het station." },
      { woord: "politie", zin: "De politie regelt het verkeer." },
      { woord: "vakantie", zin: "In de vakantie gaan we kamperen." },
      { woord: "computer", zin: "De computer moet even opnieuw opstarten." },
    ],
  },
];

export default function DicteesPage({ setPage } = {}) {
  const [gekozen, setGekozen] = useState(DICTEES.map((d) => d.id));

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Gratis spelling-dictees printen (voorlees-dictee per regel) — " + BRAND.name;
    const style = document.createElement("style");
    style.textContent = PRINT_CSS;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
    track("dictees_open");
    return () => { document.title = prevTitle; document.head.removeChild(style); };
  }, []);

  function toggle(id) {
    setGekozen((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));
  }
  const actief = DICTEES.filter((d) => gekozen.includes(d.id));

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 16px 80px" }}>
      <div className="dictee-noprint" style={{ marginBottom: 24 }}>
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
          🔤 Spelling-dictees — jij leest voor, je kind schrijft
        </h1>
        <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 18px", lineHeight: 1.5 }}>
          Zes voorlees-dictees van elk 10 woorden, per spellingregel (ei/ij, au/ou, d/t,
          bomen/bommen, verkleinwoorden, weetwoorden). Jij krijgt een <strong style={{ color: "var(--color-text, #e8edf5)" }}>voorleesblad
          mét de regel</strong>, je kind een <strong style={{ color: "var(--color-text, #e8edf5)" }}>invulblad met schrijflijnen</strong>.
          Vijf minuten per dictee — perfect voor aan de keukentafel.
        </p>

        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 8 }}>Welke dictees?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
          {DICTEES.map((d) => {
            const aan = gekozen.includes(d.id);
            return (
              <button key={d.id} onClick={() => toggle(d.id)} style={{
                padding: "9px 14px", borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: "pointer",
                border: aan ? "1.5px solid var(--color-accent, #42a5f5)" : "1.5px solid rgba(255,255,255,0.15)",
                background: aan ? "rgba(66,165,245,0.15)" : "transparent",
                color: aan ? "var(--color-text, #e8edf5)" : "var(--color-text-muted, #8899aa)",
              }}>
                {aan ? "✓ " : ""}{d.emoji} {d.titel}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <PrintKnoppen trackPrefix="dictees" trackProps={{ dictees: gekozen.join(",") }} disabled={actief.length === 0} />
          <span style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
            {actief.length === 0 ? "Kies eerst een dictee" : `${actief.length} dictees · ${actief.length * 10} woorden`}
          </span>
        </div>

        <div style={{ marginTop: 22 }}>
          <GratisLesmateriaal source="dictees" compact />
        </div>
      </div>

      {/* ── Printbaar ────────────────────────────────────── */}
      <div className="dictee-print">
        {/* Ouderpagina */}
        <Sheet>
          <SectieKop emoji="👪" label="Voor de ouder — zo geef je een dictee" />
          <Alinea titel="Het ritueel (5 minuten per dictee)">
            Geef je kind het invulblad (achterin). Lees per woord voor:
            eerst het <strong>woord</strong>, dan de <strong>zin</strong>, dan het woord
            nóg een keer. Je kind schrijft alleen het woord op. Niet te snel —
            en niet helpen tijdens het schrijven.
          </Alinea>
          <Alinea titel="Nakijken doe je sámen">
            Laat je kind zelf nakijken terwijl jij de woorden spelt. Fout woord?
            Niet erg: streep het niet weg, maar schrijf het goede woord ernaast.
            Lees daarna de <strong>regel</strong> voor die boven het dictee staat —
            dán landt hij, precies op het moment van de fout.
          </Alinea>
          <Alinea titel="Herhalen werkt">
            Foute woorden komen op een briefje op de koelkast en doen volgende
            week gewoon weer mee. Drie keer goed = eraf. Zo bouw je in een paar
            weken een persoonlijke woordenlijst af.
          </Alinea>
          <Alinea titel="Meer oefenen">
            Online op {BRAND.domain} staan spelling-oefeningen met uitleg op drie
            niveaus — gratis. Zoek op "spelling".
          </Alinea>
        </Sheet>

        {/* Voorleesbladen (voor de ouder) */}
        {actief.map((d, di) => (
          <Sheet key={d.id}>
            <SectieKop emoji={d.emoji} label={`Dictee ${di + 1} — ${d.titel}`} />
            <div style={{ background: "#eef7ee", border: "1px solid #bcd9bc", borderRadius: 10, padding: "12px 16px", fontSize: 13.5, color: "#274427", lineHeight: 1.6, marginBottom: 16 }}>
              <strong>📖 De regel (voorlezen ná het nakijken):</strong> {d.regel}
            </div>
            <div style={{ fontSize: 12.5, color: "#6b7785", marginBottom: 12 }}>
              Voorlezen per woord: <em>woord → zin → woord</em>. Je kind schrijft alleen het woord.
            </div>
            {d.items.map((it, i) => (
              <div key={i} className="dictee-item" style={{ display: "flex", gap: 12, padding: "7px 0", borderBottom: "1px dotted #dde3ec", fontSize: 14.5, color: "#1a2332" }}>
                <span style={{ fontWeight: 700, width: 26, flexShrink: 0 }}>{i + 1}.</span>
                <span style={{ fontWeight: 700, minWidth: 110, flexShrink: 0 }}>{it.woord}</span>
                <span style={{ color: "#3a4658" }}>„{it.zin}”</span>
              </div>
            ))}
            <div style={{ marginTop: 14, fontSize: 13, color: "#6b7785" }}>Goed: ______ van de 10 · foute woorden → koelkastbriefje 🧲</div>
          </Sheet>
        ))}

        {/* Invulbladen (voor het kind) — 2 dictees per blad */}
        {Array.from({ length: Math.ceil(actief.length / 2) }).map((_, blad) => (
          <Sheet key={`invul${blad}`}>
            <SectieKop emoji="✏️" label="Invulblad — schrijf de woorden op" />
            <div style={{ fontSize: 13, color: "#3a4658", marginBottom: 14 }}>Naam: ____________________ · Datum: ____________</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 34px" }}>
              {actief.slice(blad * 2, blad * 2 + 2).map((d, k) => (
                <div key={d.id}>
                  <div style={{ fontWeight: 700, color: "#1a2332", fontSize: 14.5, marginBottom: 10, fontFamily: "Arial, sans-serif", background: "#eef2f8", borderRadius: 6, padding: "6px 10px" }}>
                    {d.emoji} Dictee {blad * 2 + k + 1} — {d.titel}
                  </div>
                  {d.items.map((_, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 17 }}>
                      <span style={{ fontSize: 13.5, color: "#6b7785", width: 22 }}>{i + 1}.</span>
                      <span style={{ flex: 1, borderBottom: "1.5px solid #9aa6b4", height: 20 }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "#9aa6b4", textAlign: "center" }}>{BRAND.name} · {BRAND.domain}/printen</div>
          </Sheet>
        ))}
      </div>
    </div>
  );
}

function Sheet({ children }) {
  return (
    <div className="dictee-sheet" style={{ background: "#fff", color: "#1a2332", width: "100%", maxWidth: 740, margin: "0 auto 24px", padding: "40px 44px", borderRadius: 8, boxShadow: "0 6px 30px rgba(0,0,0,0.4)", fontFamily: "Georgia, 'Times New Roman', serif", boxSizing: "border-box" }}>
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
