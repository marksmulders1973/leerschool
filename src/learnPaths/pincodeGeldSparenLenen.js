// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk B
// Gesplitst uit pincodeEconomieVmboGt4.js (2026-05-09): 1 hoofdstuk = 1 leerpad,
// past bij Leerkwartier 15-min-chunks en de UI-logica "1 pad = 1 thema".

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["💱", "🏦", "💳"];

const chapters = [
  { letter: "B", title: "Geld genoeg?", emoji: "💱", from: 0, to: 2 },
];

const steps = [

  {
    title: "Functies van geld",
    explanation: "Vroeger ruilden mensen direct (**ruilhandel**): jij geeft een schaap, ik geef brood. Nadelen: misschien wil ik geen schaap, en hoeveel brood is een schaap waard?\n\nGeld lost dit op. Het heeft **drie functies**:\n\n**1. Ruilmiddel**: je betaalt met geld, geen ingewikkelde ruil meer nodig.\n\n**2. Rekenmiddel**: alles heeft een prijs in euro's, dus je kunt makkelijk vergelijken (€20 vs €15).\n\n**3. Spaarmiddel (oppotmiddel)**: je kunt geld bewaren voor later — een schaap zou doodgaan, geld niet.\n\n**Soorten geld**:\n• **Chartaal geld**: munten en bankbiljetten\n• **Giraal geld**: tegoed op een rekening (bijna alle betalingen tegenwoordig)",
    svg: `<svg viewBox="0 0 300 180">
<rect x="30" y="40" width="80" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="70" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">💱</text>
<text x="70" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">ruilmiddel</text>
<rect x="115" y="40" width="80" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="155" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">🧮</text>
<text x="155" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">rekenmiddel</text>
<rect x="200" y="40" width="80" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🐷</text>
<text x="240" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">spaarmiddel</text>
<text x="150" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">chartaal: munten/biljetten · giraal: op de bank</text>
</svg>`,
    checks: [
      {
        q: "Welke functie van geld gebruik je als je een prijs in een folder vergelijkt?",
        options: ["Rekenmiddel", "Ruilmiddel", "Spaarmiddel", "Productiemiddel"],
        answer: 0,
        wrongHints: [null, "Ruilmiddel gebruik je tijdens het betalen, niet bij vergelijken.", "Sparen is iets opzijzetten — niet vergelijken.", "Productiemiddel is geen geldfunctie."],
      },
      {
        q: "Wat is **giraal geld**?",
        options: ["Geld op je bankrekening", "Munten in je portemonnee", "Gouden baren", "Geld dat je hebt verdiend met werken"],
        answer: 0,
        wrongHints: [null, "Dat is chartaal.", "Goud is een waardeobject, geen modern betaalmiddel.", "Dat zegt iets over hoe je het kreeg, niet over de soort geld."],
      },
    ],
  },
  {
    title: "Banken — sparen en rente",
    explanation: "**Banken** doen drie dingen:\n1. **Geld bewaren** (betaal- en spaarrekening)\n2. **Geld lenen** (hypotheek, persoonlijke lening)\n3. **Betalingen regelen** (overschrijvingen, pinnen)\n\n**Sparen**: je geeft de bank tijdelijk je geld. De bank betaalt je **rente** als beloning.\n\nVoorbeeld: je zet €1000 op een spaarrekening met 2% rente per jaar.\n• Na 1 jaar: €1000 × 1,02 = **€1020**\n• Na 2 jaar: €1020 × 1,02 = **€1040,40**\n\nDe rente over rente heet **samengestelde rente** — het wordt elk jaar groter.\n\n**Reden om te sparen**: voor onverwachte uitgaven, een doel (auto, vakantie), of voor later (pensioen).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="50" y="40" width="200" height="40" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="150" y="64" text-anchor="middle" fill="${COLORS.geld}" font-size="14" font-family="Arial" font-weight="bold">€1000 op spaarrekening</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">+ 2% rente per jaar</text>
<text x="150" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€1020 → €1040,40 → €1061,20</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">samengestelde rente — groeit ieder jaar</text>
</svg>`,
    checks: [
      {
        q: "Je zet €500 op een spaarrekening met **3% rente** per jaar. Hoeveel staat er na 1 jaar?",
        options: ["€515", "€503", "€530", "€553"],
        answer: 0,
        wrongHints: [null, "3% van €500 is geen 3 euro — dat is 0,6%.", "Dat zou 6% rente zijn, niet 3%.", "Dat is ongeveer 10% — veel te veel."],
      },
      {
        q: "Wat is **samengestelde rente**?",
        options: ["Rente die je ook over de eerder ontvangen rente krijgt", "Een speciaal soort lening", "Hogere rente bij een zakelijke rekening", "Belasting op spaargeld"],
        answer: 0,
        wrongHints: [null, "Lening en spaarrekening zijn verschillende producten.", "Niet specifiek aan zakelijk gebonden.", "Dat is vermogensbelasting, een ander concept."],
      },
    ],
  },
  {
    title: "Lenen — kredietvormen en risico",
    explanation: "**Lenen** is geld krijgen dat je **later moet terugbetalen**, vaak met **rente**.\n\n**Soorten leningen**:\n\n**Hypotheek**: lange lening om een huis te kopen. Looptijd vaak 20-30 jaar. Rente lager omdat het huis als onderpand dient.\n\n**Persoonlijke lening**: vast bedrag, vaste maandlasten over een paar jaar (bv. €5000 over 4 jaar).\n\n**Doorlopend krediet**: kredietruimte tot een limiet — flexibel, maar vaak hoge rente.\n\n**Rood staan**: tijdelijk negatief op je betaalrekening. Hoge rente.\n\n**Risico**: kun je het terugbetalen? Banken kijken naar:\n• Inkomen (kun je de maandlasten betalen?)\n• Bestaande schulden (BKR-toets)\n• Onderpand bij grote leningen\n\n**Vuistregel**: leen niet meer dan ~30% van je netto-inkomen aan vaste maandlasten.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">LENEN — soorten</text>
<rect x="20" y="40" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="80" y="61" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">hypotheek</text>
<rect x="160" y="40" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="220" y="61" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">persoonlijke lening</text>
<rect x="20" y="84" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="80" y="105" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">doorlopend krediet</text>
<rect x="160" y="84" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="220" y="105" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">rood staan</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vuistregel: max ~30% netto-inkomen</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">aan vaste maandlasten</text>
</svg>`,
    checks: [
      {
        q: "Welke leenvorm heeft een huis als **onderpand**?",
        options: ["Hypotheek", "Persoonlijke lening", "Rood staan", "Studielening"],
        answer: 0,
        wrongHints: [null, "Persoonlijke lening heeft meestal geen onderpand — daarom hogere rente.", "Rood staan is voor kortdurend tekort op je rekening.", "Studielening is bij DUO; geen huis als onderpand."],
      },
      {
        q: "Waarom heeft **rood staan** vaak een hoge rente?",
        options: ["Het is geen lange-termijn-lening en de bank loopt risico", "Banken willen klanten straffen", "Het is illegaal", "Omdat de overheid dat verplicht"],
        answer: 0,
        wrongHints: [null, "Niet om te 'straffen' — het is gewoon prijszetting voor risico.", "Rood staan is wel legaal (binnen je limiet).", "De rente wordt door de bank bepaald, niet door de overheid."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeGeldSparenLenen = {
  id: "pincode-geld-sparen-lenen",
  title: "Geld, sparen en lenen",
  emoji: "💱",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk B",
  intro:
    "Functies van geld, banken, samengestelde rente en kredietvormen met hun risico's. Hoofdstuk B van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "geld",
    "ruilhandel",
    "ruilmiddel",
    "rekenmiddel",
    "spaarmiddel",
    "chartaal",
    "giraal",
    "bank",
    "sparen",
    "rente",
    "samengestelde rente",
    "lenen",
    "krediet",
    "hypotheek",
    "persoonlijke lening",
    "doorlopend krediet",
    "rood staan",
    "bkr",
    "onderpand",
    "pincode hoofdstuk b",
  ],
  chapters,
  steps,
};

export default pincodeGeldSparenLenen;
