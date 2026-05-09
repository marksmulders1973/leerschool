// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk F
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

const stepEmojis = ["🧾", "🛒", "💼"];

const chapters = [
  { letter: "F", title: "Iedereen betaalt belasting", emoji: "🧾", from: 0, to: 2 },
];

const steps = [

  {
    title: "Soorten belastingen",
    explanation: "**Belasting**: verplichte betaling aan de overheid, zonder dat je daar direct iets voor terugkrijgt.\n\nTwee hoofdsoorten:\n\n**Directe belastingen**: betaald op basis van wie je bent / wat je verdient.\n• **Inkomstenbelasting (IB)**: over je inkomen.\n• **Vennootschapsbelasting (VPB)**: over winst van BV's.\n• **Erfbelasting**: bij erven.\n\n**Indirecte belastingen**: zit verstopt in de prijs van iets.\n• **BTW (omzetbelasting)**: bij elke aankoop.\n• **Accijns**: op alcohol, tabak, brandstof.\n\n**Premies**: lijkt op belasting maar bedoeld voor iets specifieks.\n• **AOW-premie** voor latere ouderdomsuitkering.\n• **Zorgverzekeringspremie** voor zorg.\n• **WW-premie** voor werkloosheidsuitkering.\n\nVerschil belasting vs premie:\n• Belasting → algemene pot van de overheid.\n• Premie → specifiek doel, je krijgt later iets terug.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BELASTINGEN</text>
<rect x="20" y="40" width="130" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="85" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">DIRECT</text>
<text x="85" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">inkomstenbelasting</text>
<text x="85" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vennootschap (VPB)</text>
<text x="85" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">erfbelasting</text>
<rect x="160" y="40" width="130" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="225" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">INDIRECT</text>
<text x="225" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BTW (in elke prijs)</text>
<text x="225" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">accijns alcohol/tabak</text>
<text x="225" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">brandstof</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">premies = specifiek doel · belasting = algemene pot</text>
</svg>`,
    checks: [
      {
        q: "Welke belasting zit verstopt in de prijs van een glas frisdrank?",
        options: ["BTW (indirect)", "Inkomstenbelasting", "Vennootschapsbelasting", "Erfbelasting"],
        answer: 0,
        wrongHints: [null, "Inkomstenbelasting betaal je over je loon, niet bij een drankje.", "VPB is voor BV's over winst.", "Erfbelasting betaal je alleen bij een erfenis."],
      },
      {
        q: "Wat is het verschil tussen **belasting** en **premie**?",
        options: ["Premie heeft een specifiek doel; belasting gaat naar de algemene pot", "Premie is altijd hoger", "Belasting is alleen voor rijke mensen", "Er is geen verschil"],
        answer: 0,
        wrongHints: [null, "Hoogte verschilt per regeling, geen vaste verhouding.", "Iedereen betaalt belasting (BTW bij aankoop bijvoorbeeld).", "Er is wel verschil — qua doel en wat je terugkrijgt."],
      },
    
      {
        q: "**AOW-premie** — is dit een belasting of een premie?",
        options: ["Premie — voor een specifiek doel (latere AOW-uitkering)", "Belasting — gaat naar algemene pot", "Allebei tegelijk", "Geen van beide"],
        answer: 0,
        wrongHints: [null, "Voor de AOW is het juist gekoppeld aan een specifiek doel.", "Het is een duidelijke premie, geen mengvorm.", "Het bestaat wel — staat op je loonstrookje."],
      },
      {
        q: "**Erfbelasting** — direct of indirect?",
        options: ["Direct (op basis van wat je krijgt)", "Indirect (zit in een prijs)", "Premie", "Geen van beide"],
        answer: 0,
        wrongHints: [null, "Erfbelasting zit niet in de prijs van iets.", "Geen specifiek doel — algemene belasting.", "Het bestaat zeker als belasting."],
      },
      {
        q: "**BTW** — direct of indirect?",
        options: ["Indirect — verstopt in de prijs", "Direct — op je inkomen", "Premie", "Geen belasting"],
        answer: 0,
        wrongHints: [null, "BTW betaal je niet over je inkomen, maar bij elke aankoop.", "Geen premie — geen specifiek doel als terugkrijgen.", "BTW is wél belasting — staat op elke kassabon."],
      },
    ],
  },
  {
    title: "BTW en accijns",
    explanation: "**BTW (Belasting Toegevoegde Waarde / omzetbelasting)** wordt geheven op bijna alle verkopen.\n\nNederland heeft 3 tarieven:\n• **21%** — algemeen tarief (kleding, elektronica, restaurant)\n• **9%** — laag tarief (boodschappen, water, boeken, kapper)\n• **0%** — voor specifieke gevallen (export, sommige zorg)\n\nVoorbeeld: een spelcomputer staat in de winkel voor €484.\n• Prijs zonder BTW: €400\n• BTW 21%: €84\n• Totaal: €484\n\n**Accijns**: extra belasting bovenop de BTW op specifieke producten.\n• Tabak\n• Alcohol\n• Brandstof (benzine, diesel)\n• Suikerhoudende dranken (vanaf 2024)\n\nWaarom accijns?\n1. Geld voor de overheid\n2. **Ontmoediging**: hoge accijns op tabak om roken minder aantrekkelijk te maken\n3. **Milieu**: hoge accijns op fossiele brandstof",
    svg: `<svg viewBox="0 0 300 180">
<rect x="40" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="70" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="14" font-family="Arial" font-weight="bold">21%</text>
<text x="70" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">algemeen</text>
<rect x="120" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="14" font-family="Arial" font-weight="bold">9%</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">laag</text>
<rect x="200" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="230" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">0%</text>
<text x="230" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">export/zorg</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">+ accijns op tabak · alcohol · brandstof</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ontmoediging + extra inkomsten</text>
</svg>`,
    checks: [
      {
        q: "Een fiets kost €330 inclusief 21% BTW. Wat is de prijs **zonder BTW**?",
        options: ["€272,73", "€260,70", "€309,30", "€110"],
        answer: 0,
        wrongHints: [null, "Niet 21% van €330 aftrekken — je moet delen door 1,21.", "Net niet — €330 / 1,21.", "Dat is alleen het BTW-bedrag, niet de prijs zonder BTW."],
      },
      {
        q: "Waarom heft de overheid hoge accijns op **tabak**?",
        options: ["Om roken te ontmoedigen + extra inkomsten", "Om mensen te belonen voor roken", "Omdat tabak duur is om te maken", "Om buitenlandse merken te helpen"],
        answer: 0,
        wrongHints: [null, "Belonen voor schadelijk gedrag is onlogisch — accijns is ontmoediging.", "Productiekosten zijn relatief laag; accijns is een politieke keuze.", "Accijns geldt voor alle merken in NL, ongeacht herkomst."],
      },
    
      {
        q: "Welk **BTW-tarief** geldt voor boodschappen (eten/drinken)?",
        options: ["9% (laag tarief)", "21% (algemeen tarief)", "0%", "25%"],
        answer: 0,
        wrongHints: [null, "21% is voor andere dingen (kleding, elektronica).", "0% is voor specifieke gevallen (export, sommige zorg).", "25% bestaat niet als NL-tarief."],
      },
      {
        q: "Een product kost **€100 zonder BTW**. Wat is de prijs **inclusief 21% BTW**?",
        options: ["€121", "€100", "€79", "€79"],
        answer: 0,
        wrongHints: [null, "Inclusief BTW is meer dan zonder.", "Dat zou aftrek zijn, niet bijtelling.", "Reken: €100 × 1,21."],
      },
      {
        q: "Waarom heft de overheid **hoge accijns op brandstof**?",
        options: ["Inkomsten + ontmoediging vanwege milieu/CO2", "Brandstof is duur om te produceren", "Internationale verplichting", "Om automakers te helpen"],
        answer: 0,
        wrongHints: [null, "Productiekosten zijn relatief laag, accijns zit erbovenop.", "Geen verplichting van bovenaf — eigen keuze NL.", "Eerder andersom — accijns ontmoedigt rijden."],
      },
    ],
  },
  {
    title: "Inkomstenbelasting en premies",
    explanation: "**Inkomstenbelasting (IB)** betaal je over je inkomen — loon, winst uit eigen bedrijf, AOW, etc.\n\nNederland heeft **schijven**: hoe hoger je inkomen, hoe hoger het tarief over het bedrag in die schijf.\n\nVoorbeeld 2024 (vereenvoudigd):\n• Schijf 1: tot ~€38.000 → 36,93%\n• Schijf 2: vanaf ~€75.000 → 49,5%\n\nDit heet **progressieve belasting** — sterke schouders dragen zwaardere lasten.\n\n**Heffingskortingen** verlagen de belasting:\n• **Algemene heffingskorting**: voor iedereen.\n• **Arbeidskorting**: voor mensen die werken.\n\nVoorbeeld: bruto loon €30.000.\n• Belasting in schijf 1: ~€11.000\n• Min heffingskortingen: ~€4.500\n• Te betalen: ~€6.500\n• Netto inkomen: ~€23.500\n\nVerder betaal je ook **sociale premies**: AOW, ZVW (zorg), WW.\n\nDe werkgever houdt belasting + premies meteen in op je loonstrookje (loonheffing).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PROGRESSIEVE BELASTING</text>
<rect x="40" y="50" width="200" height="22" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1"/>
<text x="140" y="65" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">schijf 1 — 36,93%</text>
<rect x="40" y="78" width="160" height="22" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1"/>
<text x="120" y="93" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">schijf 2 — 49,5%</text>
<text x="40" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€0</text>
<text x="140" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€38.000</text>
<text x="195" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€75.000+</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">– heffingskortingen = lagere belasting</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">+ sociale premies (AOW, zorgverzekering, WW)</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent **progressief** in inkomstenbelasting?",
        options: ["Hoger inkomen → hoger percentage belasting in de hoogste schijf", "Belasting wordt elk jaar hoger", "Iedereen betaalt evenveel", "Belasting daalt met inkomen"],
        answer: 0,
        wrongHints: [null, "Progressief = stijgende schaal binnen 1 jaar, niet 'elk jaar duurder'.", "Dat is een vlaktaks — Nederland heeft schijven.", "Tegenovergesteld — dat zou degressief zijn."],
      },
      {
        q: "Wat is een **heffingskorting**?",
        options: ["Bedrag dat van je te betalen belasting wordt afgehaald", "Korting in de winkel met een speciale pas", "Een soort spaarrekening", "De rente die je krijgt op spaargeld"],
        answer: 0,
        wrongHints: [null, "Niets met winkels — pure belastingterm.", "Spaarrekening is bankproduct, geen belasting.", "Rente is iets anders dan een korting op belasting."],
      },
    
      {
        q: "Wie houdt **loonheffing** in op je salaris?",
        options: ["De werkgever", "De werknemer zelf", "De Belastingdienst direct", "De vakbond"],
        answer: 0,
        wrongHints: [null, "Werknemers krijgen het netto bedrag — werkgever doet de inhouding.", "Belastingdienst krijgt het via de werkgever.", "Vakbond doet aan onderhandelingen, geen inhouding."],
      },
      {
        q: "Persoon A verdient €30.000, persoon B €100.000. Door **progressieve belasting** betaalt:",
        options: ["Persoon B verhoudingsgewijs een hoger percentage", "Beide hetzelfde percentage", "Persoon A meer percentage", "Allebei vrijgesteld"],
        answer: 0,
        wrongHints: [null, "Bij vlaktaks is dat zo, maar NL heeft schijven.", "Tegenovergesteld — zwakkere schouders dragen lichter.", "Niemand boven minimum is helemaal vrijgesteld."],
      },
      {
        q: "**Arbeidskorting** krijg je als:",
        options: ["Je een baan hebt en arbeidsinkomen verdient", "Je geen werk hebt", "Je gepensioneerd bent", "Je zelfstandige bent zonder personeel"],
        answer: 0,
        wrongHints: [null, "Arbeids = werken — geen werk, geen arbeidskorting.", "Pensioen is geen arbeidsinkomen.", "Zzp'ers krijgen wel arbeidskorting — als ze winst maken uit arbeid."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeBelasting = {
  id: "pincode-belasting",
  title: "Belasting",
  emoji: "🧾",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk F",
  intro:
    "Directe en indirecte belastingen, BTW-tarieven, accijns en de progressieve inkomstenbelasting met heffingskortingen. Hoofdstuk F van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "belasting",
    "directe belasting",
    "indirecte belasting",
    "inkomstenbelasting",
    "ib",
    "vennootschapsbelasting",
    "vpb",
    "erfbelasting",
    "btw",
    "omzetbelasting",
    "accijns",
    "tabak",
    "alcohol",
    "brandstof",
    "premie",
    "aow-premie",
    "zorgverzekeringspremie",
    "ww-premie",
    "schijven",
    "progressieve belasting",
    "heffingskorting",
    "arbeidskorting",
    "loonheffing",
    "pincode hoofdstuk f",
  ],
  chapters,
  steps,
};

export default pincodeBelasting;
