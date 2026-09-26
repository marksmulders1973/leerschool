// 🙋 Kant-en-klare setjes voor "Klassikaal op het digibord" (idee 1, Mark 25 sep 2026: "doe
// idee 1 maar"). Grootste drempel was dat de juf eerst zelf een toets moest bouwen. Nu: op
// leerkwartier.app/klassikaal (of via /klas) kies je groep + setje en je staat meteen met
// A-B-C-D-kaartjes voor de klas. Geen account nodig. Vragen komen uit bestaande leerpaden.
import { useState } from "react";
import { track } from "../../utils.js";
import { buildTopicQuiz } from "../practice/buildTopicQuiz.js";
import { kiesStartPaden, verweefVragen } from "../onboarding/startKwartier.js";

const AANTAL = 10;
const bordbaar = (v) => v && !v.svg && !v.bronTekst && !v.tekst && !v.passage && !v.image;

const laadPad = async (pathId, aantal) => {
  try {
    const { quiz, questions } = await buildTopicQuiz({ pathId, aantal: aantal + 6 }); // ruimte voor weggefilterde vragen
    return { titel: quiz.title, vragen: questions };
  } catch {
    return { titel: "", vragen: [] };
  }
};

function setjes(groep) {
  const paden = kiesStartPaden("groep" + groep);
  // Op vak zoeken, niet op positie: sinds 26 sep (idee BF) opent het start-kwartier in groep 6-8 met taal.
  const rekenPad = paden.find((p) => /breuken|procenten|rekenen|tafels|getallen|tellen|delen/.test(p)) || paden[0];
  const taalPad = paden.find((p) => /werkwoord|taal|spelling/.test(p)) || paden[1];
  return [
    { id: "mix", titel: `Doorstroomtoets-mix groep ${groep}`, uitleg: "Rekenen, taal, lezen en wereld door elkaar.", laad: async () => {
      const perPad = await Promise.all(paden.map(async (p) => (await laadPad(p, 3)).vragen));
      return verweefVragen(perPad.map((l) => l.filter(bordbaar)), AANTAL);
    } },
    { id: "rekenen", titel: `Rekenen groep ${groep}`, uitleg: "Tien rekenvragen op groepsniveau.", laad: async () => (await laadPad(rekenPad, AANTAL)).vragen.filter(bordbaar).slice(0, AANTAL) },
    { id: "taal", titel: `Taal groep ${groep}`, uitleg: "Tien taalvragen op groepsniveau.", laad: async () => (await laadPad(taalPad, AANTAL)).vragen.filter(bordbaar).slice(0, AANTAL) },
  ];
}

const TAALKLAS = [
  { id: "woorden", titel: "Taalklas: eerste woorden", uitleg: "Waar zit je op? Waarmee schrijf je? Voor nieuwkomers.", laad: async () => (await laadPad("woorden-nieuwkomers", AANTAL)).vragen.slice(0, AANTAL) },
  { id: "indeklas", titel: "Taalklas: zinnen in de klas", uitleg: "Mag ik naar de wc? Ik snap het niet. Voor nieuwkomers.", laad: async () => (await laadPad("in-de-klas-nieuwkomers", AANTAL)).vragen.slice(0, AANTAL) },
  // 26 sep 2026: gevoelens (Woorden deel E + In de klas deel 4). Samen oefenen op het bord is veilig:
  // niemand hoeft over zichzelf te vertellen, de klas leert de woorden om het later wél te kunnen zeggen.
  { id: "gevoelens", titel: "Taalklas: hoe voel je je?", uitleg: "Blij, verdrietig, boos, bang, moe. Ik voel me niet goed. Voor nieuwkomers.", laad: async () => {
    const stuk = async (pathId, stap) => { try { return (await buildTopicQuiz({ pathId, stapIndexen: [stap] })).questions; } catch { return []; } };
    const [w, z] = await Promise.all([stuk("woorden-nieuwkomers", 4), stuk("in-de-klas-nieuwkomers", 3)]);
    return verweefVragen([w, z], AANTAL);
  } },
  { id: "rekentaal", titel: "Taalklas: rekentaal", uitleg: "Meer, minder, samen, weg, verdelen. Voor nieuwkomers.", laad: async () => (await laadPad("rekentaal-nieuwkomers", AANTAL)).vragen.slice(0, AANTAL) },
];

const S = {
  wrap: { maxWidth: 900, margin: "0 auto", padding: "16px 20px 60px", color: "var(--color-text)", fontFamily: "var(--font-body)" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12, marginBottom: 20 },
  kaart: { textAlign: "left", padding: "16px 18px", borderRadius: 16, cursor: "pointer", background: "var(--color-bg-surface)", border: "1px solid var(--color-border-soft)", color: "var(--color-text)", fontFamily: "var(--font-body)" },
  knopLicht: { padding: "10px 16px", borderRadius: 12, cursor: "pointer", fontWeight: 700, fontSize: 15, fontFamily: "var(--font-body)", background: "var(--color-bg-surface)", color: "var(--color-text)", border: "1px solid var(--color-border-soft)" },
};

export default function KlasSetjes({ groep: startGroep = 7, onStart, onEigenToets, onTerug }) {
  const [groep, setGroep] = useState([6, 7, 8].includes(startGroep) ? startGroep : 7);
  const [bezig, setBezig] = useState(null);
  const [fout, setFout] = useState("");

  const kies = async (s) => {
    if (bezig) return;
    setBezig(s.id); setFout("");
    // Klassikaal = alleen vraag + antwoorden op het bord: vragen met een plaatje of leestekst vallen af.
    const vragen = (await s.laad()).filter((v) => bordbaar(v) && Array.isArray(v.options) && v.options.length >= 2 && v.options.length <= 6);
    setBezig(null);
    if (!vragen.length) { setFout("Dit setje laadt nu even niet. Probeer een ander setje."); return; }
    track("digibord_setje", { setje: s.id, groep, vragen: vragen.length });
    onStart({ id: `setje-${s.id}-${groep}`, title: s.titel }, vragen);
  };

  const Kaart = ({ s }) => (
    <button type="button" style={{ ...S.kaart, opacity: bezig && bezig !== s.id ? 0.5 : 1 }} onClick={() => kies(s)} disabled={!!bezig}>
      <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{s.titel}</div>
      <div style={{ fontSize: 14.5, color: "var(--color-text-muted)" }}>{bezig === s.id ? "Vragen laden…" : s.uitleg}</div>
    </button>
  );

  return (
    <div style={S.wrap}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 24 }}>🙋 Klassikaal op het digibord</h2>
        {onTerug && <button style={S.knopLicht} onClick={onTerug}>← Terug</button>}
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.55, margin: "0 0 14px" }}>
        Kies een setje van tien vragen. Zet het op het <strong>digibord</strong>, de kinderen houden een <strong>A-, B-, C- of D-kaartje</strong> omhoog (of steken hun hand op), jij telt en tikt de aantallen in. Je ziet meteen hoeveel procent van de klas het goed had. Geen account nodig.
      </p>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 14 }}>
        <span style={{ fontSize: 15, color: "var(--color-text-muted)" }}>Welke groep?</span>
        {[6, 7, 8].map((g) => (
          <button key={g} type="button" onClick={() => setGroep(g)} aria-pressed={g === groep}
            style={{ padding: "8px 14px", borderRadius: 999, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-body)",
              color: g === groep ? "#0b1224" : "var(--color-text)", background: g === groep ? "var(--color-brand-primary)" : "var(--color-bg-surface)",
              border: "2px solid " + (g === groep ? "var(--color-brand-primary)" : "var(--color-border-soft)") }}>
            groep {g}
          </button>
        ))}
      </div>
      <div style={S.grid}>{setjes(groep).map((s) => <Kaart key={s.id + groep} s={s} />)}</div>
      <div style={{ fontWeight: 800, fontSize: 17, margin: "4px 0 10px" }}>Voor de taalklas (nieuwkomers)</div>
      <div style={S.grid}>{TAALKLAS.map((s) => <Kaart key={s.id} s={s} />)}</div>
      {fout && <p style={{ color: "#ff7043", fontWeight: 700 }}>{fout}</p>}
      {onEigenToets && (
        <p style={{ fontSize: 14.5, color: "var(--color-text-muted)" }}>
          Liever je eigen vragen, in je eigen volgorde?{" "}
          <button type="button" onClick={onEigenToets} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--color-brand-primary)", fontWeight: 700, fontSize: 14.5, fontFamily: "inherit" }}>
            Maak een toets →
          </button>{" "}Bij elke toets staat de knop "Klassikaal op het digibord".
        </p>
      )}
    </div>
  );
}
