// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 6 (Iedereen betaalt belasting)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.

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

const stepEmojis = ["🧾", "🛒", "💼", "🎁", "📋", "🤝", "🏛️"];

const chapters = [
  { letter: "A", title: "Soorten belastingen", emoji: "🧾", from: 0, to: 0 },
  { letter: "B", title: "Wat je dagelijks betaalt", emoji: "🛒", from: 1, to: 1 },
  { letter: "C", title: "Inkomstenbelasting", emoji: "💼", from: 2, to: 3 },
  { letter: "D", title: "Toeslagen", emoji: "🎁", from: 4, to: 4 },
  { letter: "E", title: "Praktijk", emoji: "🏛️", from: 5, to: 6 },
];

const steps = [
  // ─── Stap 1: Soorten belastingen ─────────────────────────
  {
    title: "Soorten belastingen — direct, indirect, premies",
    explanation: "**Belasting** = verplichte betaling aan de overheid, zonder dat je daar direct iets voor terugkrijgt.\n\n**Twee hoofdsoorten**:\n\n**Directe belastingen** — betaald op basis van wie je bent / wat je verdient.\n• **Inkomstenbelasting (IB)** — over je inkomen\n• **Vennootschapsbelasting (VPB)** — over winst van BV's\n• **Erfbelasting** — bij erven (5%-40% boven vrijstelling)\n• **Schenkbelasting** — bij grote schenkingen\n• **Vermogensbelasting (Box 3)** — over spaargeld + beleggingen boven vrijstelling\n\n**Indirecte belastingen** — zit verstopt in de prijs van iets.\n• **BTW (omzetbelasting)** — bij elke aankoop\n• **Accijns** — alcohol, tabak, brandstof\n• **Motorrijtuigenbelasting** — auto-bezitters\n• **Overdrachtsbelasting** — bij koop huis (2% normaal, 0% starter < 35 jr)\n\n**Premies** — lijkt op belasting, maar bedoeld voor iets specifieks.\n• **AOW-premie** — voor latere ouderdomsuitkering\n• **Zorgverzekeringspremie** — voor zorg\n• **WW-premie** — voor werkloosheidsuitkering\n• Werkgever betaalt deel + werknemer betaalt deel\n\n**Verschil belasting vs premie**:\n• **Belasting** → algemene pot van de overheid\n• **Premie** → specifiek doel, je krijgt later iets terug\n\n**Wie int wat?**\n• **Belastingdienst** (Rijksoverheid): IB, BTW, VPB, accijns, etc.\n• **UWV**: WW-premie\n• **Gemeente**: OZB, hondenbelasting, toeristenbelasting\n• **Provincie**: opcenten op motorrijtuigenbelasting\n• **Waterschap**: waterschapsbelasting\n\n**Geschiedenis kort**:\n• Vroeger: vooral indirecte belasting (op zout, brood, ramen)\n• Nu: vooral inkomstenbelasting + BTW\n• Trend: minder belasting op werk, meer op vervuiling/CO2\n\n**Totaal belastingdruk in NL**: ~38% van BBP.\nVergelijk: Denemarken ~46%, USA ~27%.",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SOORTEN BELASTINGEN</text>
<rect x="20" y="40" width="135" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">DIRECT</text>
<text x="87" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">inkomstenbel. (IB)</text>
<text x="87" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vennootschap (VPB)</text>
<text x="87" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">erf · vermogen</text>
<rect x="165" y="40" width="135" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">INDIRECT</text>
<text x="232" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BTW</text>
<text x="232" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">accijns</text>
<text x="232" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">overdracht · MRB</text>
<rect x="20" y="130" width="280" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="148" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">PREMIES — voor specifiek doel</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">AOW · zorgverzekering · WW</text>
<text x="160" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">NL belastingdruk ~38% BBP</text>
</svg>`,
    checks: [
      {
        q: "Welke belasting zit verstopt in de prijs van een glas frisdrank?",
        options: ["BTW (indirect)", "Inkomstenbelasting", "Vennootschapsbelasting", "Erfbelasting"],
        answer: 0,
        wrongHints: [null, "IB betaal je over loon.", "VPB is voor BV's over winst.", "Erfbelasting alleen bij erven."],
      },
      {
        q: "Wat is het verschil tussen **belasting** en **premie**?",
        options: ["Premie heeft specifiek doel; belasting gaat naar algemene pot", "Premie is altijd hoger", "Belasting is alleen voor rijken", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Hoogte verschilt per regeling.", "Iedereen betaalt belasting.", "Wel verschil — qua doel."],
      },
      {
        q: "**AOW-premie** — wat is het?",
        options: ["Premie — voor latere ouderdomsuitkering", "Algemene belasting", "Een toeslag", "Korting op IB"],
        answer: 0,
        wrongHints: [null, "Heeft specifiek doel.", "Niet hetzelfde als toeslag.", "Geen korting."],
      },
      {
        q: "**Erfbelasting** — direct of indirect?",
        options: ["Direct (op basis wat je krijgt)", "Indirect", "Premie", "Geen belasting"],
        answer: 0,
        wrongHints: [null, "Geen prijs.", "Geen specifiek doel.", "Bestaat zeker."],
      },
      {
        q: "Wie int de **OZB** (onroerendezaakbelasting)?",
        options: ["De gemeente", "De Rijksoverheid", "De provincie", "Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Lokaal, niet Rijk.", "Provincie heeft andere belastingen.", "Belastingdienst doet Rijksbelastingen."],
      },
      {
        q: "Hoeveel **belastingdruk** heeft NL ongeveer (% BBP)?",
        options: ["~38%", "~10%", "~70%", "~95%"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Te hoog.", "Veel te hoog."],
      },
    ],
  },
  // ─── Stap 2: BTW en accijns ──────────────────────────────
  {
    title: "BTW en accijns — wat je dagelijks betaalt",
    explanation: "**BTW (Belasting Toegevoegde Waarde / omzetbelasting)** wordt geheven op bijna alle verkopen.\n\nNederland heeft **3 tarieven**:\n• **21%** — algemeen (kleding, elektronica, restaurant, koeriersdienst, advies)\n• **9%** — laag (boodschappen, water, boeken, kapper, OV, hotel, bioscoop)\n• **0%** — export en sommige zorg\n\n**Voorbeeld 1**: spelcomputer €484 inclusief 21% BTW\n• Prijs zonder BTW: €484 / 1,21 = €400\n• BTW: €84\n\n**Voorbeeld 2**: brood €2,18 inclusief 9% BTW\n• Prijs zonder BTW: €2,18 / 1,09 = €2,00\n• BTW: €0,18\n\n**Wie betaalt en wie int?**\n• **Consument** betaalt BTW (inbegrepen in prijs)\n• **Ondernemer** int BTW + draagt af aan Belastingdienst (per kwartaal)\n• Ondernemer mag eigen BTW-uitgaven (op zakelijke aankopen) aftrekken\n\n**Accijns** = extra belasting bovenop BTW op specifieke producten.\n• **Tabak** (~50% van prijs sigaret = accijns + BTW)\n• **Alcohol** (per liter pure alcohol)\n• **Brandstof** (~€0,80 per liter benzine = accijns + BTW)\n• **Suikerhoudende dranken** (sinds 2024)\n\n**Waarom accijns?**\n1. **Geld** voor de overheid (~€20 mrd/jaar)\n2. **Ontmoediging** schadelijk gedrag (roken, alcohol, vervuiling)\n3. **Milieu** — hoge accijns op fossiele brandstof helpt energietransitie\n\n**Overdrachtsbelasting**:\n• 2% bij koop huis (was 6% tot 2021)\n• 0% voor starters tot 35 jaar (eenmalig, huis < ~€500.000)\n\n**Motorrijtuigenbelasting (MRB)**:\n• Per auto, gebaseerd op gewicht + brandstoftype\n• Provincie-opcenten erbij (verschillen per provincie)\n• Elektrische auto: 0% MRB tot 2025 (langzaam afgebouwd)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BTW + ACCIJNS</text>
<rect x="35" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="75" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="18" font-family="Arial" font-weight="bold">21%</text>
<text x="75" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">algemeen</text>
<text x="75" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">restaurant, kleding</text>
<rect x="120" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="18" font-family="Arial" font-weight="bold">9%</text>
<text x="160" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">laag</text>
<text x="160" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">eten, kapper, OV</text>
<rect x="205" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="245" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="18" font-family="Arial" font-weight="bold">0%</text>
<text x="245" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">export, zorg</text>
<rect x="20" y="120" width="280" height="60" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.5"/>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">+ ACCIJNS bovenop BTW</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">tabak (~50%) · brandstof (~€0,80/L) · alcohol</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">geld + ontmoediging + milieu</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">MRB · overdracht · suiker (2024)</text>
</svg>`,
    checks: [
      {
        q: "Een fiets kost €330 inclusief 21% BTW. Wat is de prijs **zonder BTW**?",
        options: ["€272,73", "€260,70", "€309,30", "€110"],
        answer: 0,
        wrongHints: [null, "Niet 21% van €330 aftrekken — delen door 1,21.", "Net niet — €330 / 1,21.", "Dat is alleen het BTW-bedrag."],
      },
      {
        q: "Hoeveel BTW zit in een product van **€121 inclusief 21% BTW**?",
        options: ["€21", "€25,41", "€121", "€100"],
        answer: 0,
        wrongHints: [null, "Niet 21% van €121.", "Dat is hele prijs.", "Dat is excl. BTW."],
      },
      {
        q: "Welk BTW-tarief geldt voor **boodschappen**?",
        options: ["9% (laag)", "21%", "0%", "25%"],
        answer: 0,
        wrongHints: [null, "21% is voor andere dingen.", "0% is alleen export/zorg.", "25% bestaat niet als NL-tarief."],
      },
      {
        q: "Waarom heft de overheid hoge **accijns op tabak**?",
        options: ["Ontmoediging + extra inkomsten", "Belonen voor roken", "Tabak is duur om te maken", "Buitenlandse merken helpen"],
        answer: 0,
        wrongHints: [null, "Onlogisch.", "Productie is goedkoop.", "Geldt voor alle merken."],
      },
      {
        q: "**Overdrachtsbelasting** voor een starter (jonger dan 35) bij koop huis < €500k:",
        options: ["0%", "2%", "6%", "21%"],
        answer: 0,
        wrongHints: [null, "Was vroeger 2%, nu 0% voor starters.", "Tot 2021 zo.", "BTW-tarief, niet overdracht."],
      },
      {
        q: "Een ondernemer ontvangt **€1.000 omzet inclusief 9% BTW**. Hoeveel BTW houdt hij apart?",
        options: ["Ongeveer €83", "€90", "€100", "€9"],
        answer: 0,
        wrongHints: [null, "Niet 9% van €1.000 — dat is incl.", "Te veel.", "Te weinig."],
      },
    ],
  },
  // ─── Stap 3: Inkomstenbelasting ─────────────────────────
  {
    title: "Inkomstenbelasting — schijven en boxen",
    explanation: "**Inkomstenbelasting (IB)** betaal je over je inkomen — loon, winst uit eigen bedrijf, AOW, etc.\n\n**Drie boxen**:\n• **Box 1**: inkomen uit werk + eigen woning (lonen, winst, AOW, pensioen)\n• **Box 2**: aanmerkelijk belang (5%+ aandelen in BV)\n• **Box 3**: vermogen (spaargeld + beleggingen) boven vrijstelling\n\n**Box 1 — schijven (2024 vereenvoudigd)**:\n• Schijf 1: tot ~€38.441 → **36,97%**\n• Schijf 2: vanaf ~€75.518 → **49,5%**\n\nDit heet **progressieve belasting** — sterke schouders dragen zwaardere lasten.\n\n**Voorbeeld**: bruto €50.000\n• Eerste €38.441 × 36,97% = €14.218\n• Rest €11.559 × 49,5% = €5.722 → **NEE!** Schijf 2 begint pas vanaf €75.518\n• Dus: alles in schijf 1 → €50.000 × 36,97% = €18.485\n\n**Voorbeeld**: bruto €100.000\n• Schijf 1: €38.441 × 36,97% = €14.218\n• Tussenstuk €37.077 × 36,97% = €13.706 (zelfde tarief in deel 1b)\n• Boven €75.518: €24.482 × 49,5% = €12.119\n• Totaal: ~€40.043 IB voor aftrek\n\n**Heffingskortingen** (verlagen je belasting):\n• **Algemene heffingskorting**: voor iedereen (max ~€3.300, daalt met hoger inkomen)\n• **Arbeidskorting**: voor mensen die werken (max ~€5.000)\n• **Inkomensafhankelijke combinatiekorting (IACK)**: voor werkende ouders met kind\n\n**Voorbeeld**: bruto €30.000 → IB ~€11.000 → min heffingskortingen ~€4.500 → te betalen ~€6.500.\n\n**Sociale premies** worden ook ingehouden:\n• **AOW** (~17,9% in schijf 1, valt erin)\n• **ZVW** (zorg, ~5,3%)\n• **WLZ** (langdurige zorg, ~9,65%)\n\nDeze zitten meestal in dezelfde inhouding — daarom heet het 'loonheffing'.\n\n**Aangifte doen**:\n• Voor 1 mei (of na uitstel)\n• Online via Mijn Belastingdienst (DigiD)\n• Vaak 'vooraf ingevuld' — controleren + indienen\n• Werkenden krijgen vaak teruggave (te veel ingehouden)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PROGRESSIEVE IB (BOX 1)</text>
<rect x="40" y="50" width="200" height="22" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1"/>
<text x="140" y="65" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">schijf 1 — 36,97%</text>
<rect x="40" y="78" width="160" height="22" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1"/>
<text x="120" y="93" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">schijf 2 — 49,5%</text>
<text x="40" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€0</text>
<text x="140" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€38.441</text>
<text x="195" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€75.518+</text>
<text x="160" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">– heffingskortingen = lager</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ sociale premies (AOW, ZVW, WLZ)</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">3 boxen: werk · ab · vermogen</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">aangifte vóór 1 mei via Mijn Belastingdienst</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent **progressief** in inkomstenbelasting?",
        options: ["Hoger inkomen → hoger percentage in hoogste schijf", "Belasting elk jaar hoger", "Iedereen evenveel", "Belasting daalt met inkomen"],
        answer: 0,
        wrongHints: [null, "Progressief = stijgend BINNEN 1 jaar.", "Dat is vlaktaks.", "Dat zou degressief zijn."],
      },
      {
        q: "Wat hoort in **Box 1**?",
        options: ["Loon, winst, AOW, eigen woning", "Alleen aandelen", "Alleen spaargeld", "Niets"],
        answer: 0,
        wrongHints: [null, "Aanmerkelijk belang = Box 2.", "Spaargeld = Box 3.", "Werkenden hebben Box 1."],
      },
      {
        q: "Wat is een **heffingskorting**?",
        options: ["Bedrag dat van je te betalen IB wordt afgehaald", "Korting in winkel", "Type spaarrekening", "Rente op spaargeld"],
        answer: 0,
        wrongHints: [null, "Niets met winkels.", "Spaarrekening is iets anders.", "Rente is iets anders."],
      },
      {
        q: "Wie houdt **loonheffing** in op je salaris?",
        options: ["De werkgever", "De werknemer zelf", "Belastingdienst direct", "De vakbond"],
        answer: 0,
        wrongHints: [null, "Werknemer krijgt netto.", "Belastingdienst krijgt via werkgever.", "Vakbond doet onderhandelingen."],
      },
      {
        q: "Wanneer moet je IB-aangifte uiterlijk doen?",
        options: ["Voor 1 mei (of na uitstel)", "1 januari", "31 december", "Geen deadline"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te laat — vóór 1 mei.", "Wel deadline."],
      },
      {
        q: "**Box 3** belasting gaat over:",
        options: ["Spaargeld + beleggingen boven vrijstelling", "Werk-inkomen", "Aandelen in BV", "Erfenis"],
        answer: 0,
        wrongHints: [null, "Werk = Box 1.", "Ab = Box 2.", "Erfbelasting is apart."],
      },
    ],
  },
  // ─── Stap 4: Heffingskortingen detail ────────────────────
  {
    title: "Heffingskortingen — wat scheelt het je?",
    explanation: "**Heffingskortingen** halen geld van je te betalen belasting AF. Ze maken werken aantrekkelijker en helpen lagere inkomens.\n\n**Belangrijkste heffingskortingen 2024**:\n\n**1. Algemene heffingskorting (AHK)** — voor iedereen\n• Max ~€3.362 bij laag inkomen\n• Daalt geleidelijk met hoger inkomen (uitfasering)\n• Vanaf ~€75k: €0\n• 'Solidariteit met laag inkomen'ingebakken\n\n**2. Arbeidskorting** — voor mensen die werken\n• Max ~€5.532 bij midden-inkomen (~€39k)\n• Daalt boven dat inkomen\n• Stimuleert werken — 'werk loont'\n\n**3. Inkomensafhankelijke combinatiekorting (IACK)** — werkende ouders\n• Max ~€2.690\n• Voor ouders met kind &lt; 12 jaar\n• Helpt werkende ouders met kosten\n\n**4. Ouderenkorting** — vanaf AOW-leeftijd\n• Max ~€1.916 bij laag inkomen\n• Helpt gepensioneerden met laag pensioen\n\n**5. Jonggehandicaptenkorting** — Wajong-uitkering\n\n**Hoe werkt het optellen?**\n\nVoorbeeld werkende met inkomen €30.000:\n• IB schijf 1: €30.000 × 36,97% = €11.091\n• Algemene heffingskorting: ~€3.000\n• Arbeidskorting: ~€4.500\n• Te betalen: €11.091 - €3.000 - €4.500 = **€3.591**\n\nWerkende ouder verdient €40.000, kind van 8:\n• IB: €40.000 × 36,97% = €14.788\n• AHK: ~€2.500\n• Arbeidskorting: ~€5.000\n• IACK: ~€2.000\n• Te betalen: €14.788 - €9.500 = **€5.288**\n\n**Werk loont** (vooral bij midden-inkomens):\n• Bij €0 → geen IB maar geen arbeidskorting\n• Bij €30k → IB betaald, maar arbeidskorting maakt netto-effect klein\n• Werken levert meer op dan uitkering\n\n**Politieke discussie**:\n• Marginale druk (extra belasting bij €1 meer verdienen) loopt op tot 80% bij sommige inkomens\n• Maakt extra werken minder aantrekkelijk\n• Heffingskortingen + toeslagen creëren complexiteit",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">HEFFINGSKORTINGEN</text>
<rect x="20" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">ALGEMENE</text>
<text x="87" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">max €3.362 (iedereen)</text>
<rect x="165" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">ARBEIDS</text>
<text x="232" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">max €5.532 (werkenden)</text>
<rect x="20" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">IACK</text>
<text x="87" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">werkende ouders</text>
<rect x="165" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">OUDEREN</text>
<text x="232" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vanaf AOW</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€30k werkende:</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">IB €11k - korting €7,5k = €3,5k</text>
<text x="160" y="205" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">'werk loont' = stimulans om te werken</text>
</svg>`,
    checks: [
      {
        q: "**Arbeidskorting** krijg je als:",
        options: ["Je arbeidsinkomen verdient (een baan of zelfstandig)", "Je geen werk hebt", "Je gepensioneerd bent", "Je student bent"],
        answer: 0,
        wrongHints: [null, "Geen werk = geen arbeidskorting.", "Pensioen ≠ arbeid.", "Studie zonder bijbaan ook niet."],
      },
      {
        q: "Wie krijgt de **algemene heffingskorting**?",
        options: ["Iedereen, maar daalt bij hoger inkomen", "Alleen rijken", "Alleen werknemers", "Niemand"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Voor iedereen.", "Bestaat zeker."],
      },
      {
        q: "Wat is **IACK** voor?",
        options: ["Werkende ouders met kind onder 12", "Iedereen", "Alleen vrouwen", "Alleen mannen"],
        answer: 0,
        wrongHints: [null, "Niet algemeen.", "Niet geslachtgebonden.", "Niet geslachtgebonden."],
      },
      {
        q: "IB van €11.000, heffingskortingen totaal €4.500. **Hoeveel betaal je?**",
        options: ["€6.500", "€11.000", "€4.500", "€15.500"],
        answer: 0,
        wrongHints: [null, "Korting niet meegenomen.", "Dat is alleen de korting.", "Niet optellen."],
      },
      {
        q: "Wat is de **uitfasering** van een heffingskorting?",
        options: ["Korting wordt kleiner naarmate je inkomen stijgt", "Korting groeit", "Korting blijft gelijk", "Korting verdwijnt na 1 jaar"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel verandering.", "Niet jaarlijks weg."],
      },
      {
        q: "**Werk loont** betekent in deze context:",
        options: ["Door arbeidskorting is netto-effect van werken positief", "Iedereen verdient hetzelfde", "Werk is verplicht", "Werk is altijd zwaar"],
        answer: 0,
        wrongHints: [null, "Niet iedereen.", "Niet verplicht.", "Niet wat de term betekent."],
      },
    ],
  },
  // ─── Stap 5: Toeslagen ──────────────────────────────────
  {
    title: "Toeslagen — extra steun van de overheid",
    explanation: "**Toeslagen** = bedragen die de Belastingdienst maandelijks uitbetaalt aan mensen met laag inkomen. Doel: helpen met specifieke kosten.\n\n**5 hoofdtoeslagen** (afhankelijk van inkomen + situatie):\n\n**1. Zorgtoeslag**\n• Voor zorgverzekeringspremie\n• 2024: max ~€127/mnd voor 1 persoon, ~€243 voor stel\n• Vanaf ~€37k inkomen vervalt voor alleenstaanden\n\n**2. Huurtoeslag**\n• Bij sociale huurwoning (huur < ~€880/mnd)\n• Inkomensgrens (~€33k alleenstaande)\n• Vermogensgrens (~€36k spaargeld)\n• Hoogte: hangt af van huur + inkomen\n\n**3. Kinderopvangtoeslag**\n• Voor opvang/crèche-kosten\n• Beide ouders moeten werken/studeren\n• Tot ~96% vergoeding voor lage inkomens\n• Per uur, per kind\n\n**4. Kindgebonden budget (KGB)**\n• Extra geld voor kinderen, inkomensafhankelijk\n• 2024: max ~€2.000/jaar voor 1 kind\n\n**5. Kinderbijslag (AKW)**\n• Vast bedrag per kind, ongeacht inkomen\n• ~€280/kwartaal per kind van 6-11 jr\n• Iedereen krijgt het — geen toets\n• Strikt geen 'toeslag' maar volksverzekering\n\n**Voorbeeld huishouden** (alleenstaande ouder, 1 kind, €25k inkomen):\n• Zorgtoeslag: ~€100/mnd\n• Huurtoeslag: ~€280/mnd (bij €700 huur)\n• Kindgebonden budget: ~€150/mnd\n• Kinderbijslag: ~€95/mnd\n• Kinderopvangtoeslag: variabel\n• → Aanvulling van >€600/mnd op €25k inkomen\n\n**Probleem 1: complexiteit**\n• 5 verschillende systemen, allemaal met eigen voorwaarden\n• Veel mensen vragen niet aan waar ze recht op hebben\n• Niet-gebruik bij ~10-20%\n\n**Probleem 2: terugvorderingen**\n• Toeslag krijg je vooraf, op basis van GESCHAT inkomen\n• Verdien je meer → terugbetalen (soms duizenden euro's later)\n• Toeslagenaffaire: 26.000 ouders ten onrechte beschuldigd, jaren financiële nood\n\n**Toekomst**:\n• Politieke wens: simpeler systeem (bv. vlaktaks + meer toeslagen ineens)\n• Maar moeilijk: elke verandering raakt iemand",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">5 TOESLAGEN</text>
<rect x="20" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="10" font-family="Arial">zorgtoeslag</text>
<rect x="165" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial">huurtoeslag</text>
<rect x="20" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial">kinderopvangtoeslag</text>
<rect x="165" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="100" text-anchor="middle" fill="${COLORS.alt}" font-size="10" font-family="Arial">kindgebonden budget</text>
<rect x="20" y="120" width="280" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.muted}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">+ kinderbijslag (vast, voor iedereen)</text>
<rect x="20" y="160" width="280" height="40" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="178" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">⚠ TERUGVORDERINGS-RISICO</text>
<text x="160" y="192" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">verdien meer dan geschat = terugbetalen</text>
</svg>`,
    checks: [
      {
        q: "Welke toeslag krijg je voor je **zorgverzekering**?",
        options: ["Zorgtoeslag", "Huurtoeslag", "Kinderbijslag", "AOW"],
        answer: 0,
        wrongHints: [null, "Voor huur.", "Voor kinderen.", "Voor pensioen."],
      },
      {
        q: "Wie krijgt **kinderbijslag**?",
        options: ["Iedere ouder met kind, ongeacht inkomen", "Alleen lage inkomens", "Alleen werkenden", "Alleen alleenstaanden"],
        answer: 0,
        wrongHints: [null, "Onafhankelijk van inkomen.", "Onafhankelijk van werk.", "Voor alle ouders."],
      },
      {
        q: "Wat ging er mis bij de **toeslagenaffaire**?",
        options: ["~26.000 ouders ten onrechte beschuldigd, jaren financiële nood", "Te veel toeslagen uitbetaald", "Toeslagen afgeschaft", "Niets"],
        answer: 0,
        wrongHints: [null, "Niet kwestie van te veel.", "Toeslagen bestaan nog.", "Wel groot schandaal."],
      },
      {
        q: "Wat gebeurt als je toeslag krijgt op basis van **te laag geschat inkomen**?",
        options: ["Je moet later terugbetalen", "Je krijgt extra", "Niets", "Je krijgt een boete"],
        answer: 0,
        wrongHints: [null, "Niet extra.", "Wel iets.", "Boete bij FRAUDE, niet bij verkeerde schatting."],
      },
      {
        q: "Wie krijgt **kinderopvangtoeslag**?",
        options: ["Werkende/studerende ouders die opvang/crèche gebruiken", "Iedere ouder", "Alleen alleenstaanden", "Geen ouders"],
        answer: 0,
        wrongHints: [null, "Niet zonder werk.", "Niet leeftijd-gebonden.", "Wel ouders."],
      },
      {
        q: "**Niet-gebruik** van toeslagen — wat is het probleem?",
        options: ["~10-20% van rechthebbenden vraagt niet aan", "Iedereen vraagt te veel aan", "Toeslagen zijn ongezond", "Niets"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Geen gezondheidsissue.", "Wel een probleem."],
      },
    ],
  },
  // ─── Stap 6: Belastingmoraal ────────────────────────
  {
    title: "Belastingmoraal — eerlijk of slim?",
    explanation: "Niet iedereen betaalt belasting eerlijk. Drie hoofdvormen van 'minder betalen':\n\n**1. Belastingontwijking (legaal)**\n• Slim gebruik maken van mazen in de wet\n• Bv. internationale concerns die winst verschuiven naar landen met lage belasting (Ierland 12,5% VPB ipv NL 25%)\n• Bv. familiebedrijven die erfbelasting omzeilen via BV-structuur\n• 'Slim' maar moreel discutabel\n\n**2. Belastingontduiking (illegaal)**\n• Bewust niet aangeven (verzwijgen)\n• Inkomen niet melden\n• Onkosten verzinnen\n• Boete + naheffing + soms gevangenis\n\n**3. Zwart geld**\n• Inkomen waarover geen belasting wordt betaald\n• Bv. cash-betalingen (tuinman, klusjesman) zonder factuur\n• Schat in NL: 5-15% van BBP zit in zwart circuit\n\n**Waarom is belasting eerlijk betalen belangrijk?**\n• **Solidariteit**: iedereen draagt bij naar vermogen\n• **Functie overheid**: zonder belasting geen scholen, zorg, dijken\n• **Eerlijke markt**: bedrijven die belasting ontwijken hebben oneerlijk voordeel\n• **Verzorgingsstaat**: alleen mogelijk met hoge belasting-naleving\n\n**Belastingmoraal in NL**: relatief hoog (~80% vindt belasting betalen normaal). Vergelijking: Italië, Griekenland aanzienlijk lager.\n\n**Wat is een 'belastingparadijs'?**\n• Land met heel lage belasting + geheimhouding\n• Bv. Kaaimaneilanden, Bahama's, Panama\n• Vroeger ook NL voor sommige internationale constructies (rulings)\n• OESO + EU werken aan strenger toezicht (BEPS-regels)\n\n**Recente schandalen**:\n• **Panama Papers** (2016): 11,5 miljoen documenten over geheime offshore-bedrijven\n• **Pandora Papers** (2021): 12 miljoen documenten, 130 wereldleiders genoemd\n• **LuxLeaks** (2014): geheime belastingafspraken Luxemburg met grote bedrijven\n\n**Effect op samenleving**:\n• Minder belasting van rijken/multinationals → meer van werknemers/MKB\n• Verlies vertrouwen in systeem\n• Internationale samenwerking nodig (één land kan het niet alleen)\n\n**Wat doet de Belastingdienst?**\n• Controles + boekenonderzoek\n• Risicoanalyse via algoritmes (let op: toeslagenaffaire)\n• Boetes + naheffingen + soms strafrechtelijke vervolging\n• Internationale samenwerking (OESO, EU)\n\n**Burgers en eerlijkheid**:\n• De meeste mensen betalen IB direct via loonheffing → niet veel ontduiking mogelijk\n• Zzp'ers/ondernemers hebben meer ruimte\n• Vermogenden hebben adviseurs die mazen vinden",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BELASTINGMORAAL</text>
<rect x="20" y="40" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">ONTWIJKING</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">legaal — slim</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">discutabel</text>
<rect x="165" y="40" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">ONTDUIKING</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">illegaal — verzwijgen</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">boete + cel</text>
<rect x="20" y="100" width="280" height="40" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.2" stroke-dasharray="3 2"/>
<text x="160" y="118" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">ZWART GELD</text>
<text x="160" y="132" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">cash zonder factuur — 5-15% BBP</text>
<text x="160" y="165" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Belastingparadijzen → BEPS</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Panama Papers · Pandora Papers · LuxLeaks</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">NL belastingmoraal: relatief hoog</text>
</svg>`,
    checks: [
      {
        q: "Wat is **belastingontwijking**?",
        options: ["Legaal slim gebruik maken van mazen in de wet", "Belasting niet aangeven (verzwijgen)", "Belasting kwijt raken", "Belasting betalen op tijd"],
        answer: 0,
        wrongHints: [null, "Dat is ontduiking.", "Niet 'kwijtraken'.", "Tegendeel."],
      },
      {
        q: "Wat is **belastingontduiking**?",
        options: ["Bewust niet aangeven of verzwijgen — illegaal", "Slim gebruik mazen", "Hetzelfde als ontwijking", "Brave belastingbetaling"],
        answer: 0,
        wrongHints: [null, "Dat is ontwijking, legaal.", "Verschil is wel/niet legaal.", "Tegendeel."],
      },
      {
        q: "Een tuinman die contant betaald wordt zonder factuur:",
        options: ["Mogelijk zwart geld — geen belasting/BTW betaald", "Gewone betaling", "Nieuwe wet", "Een toeslag"],
        answer: 0,
        wrongHints: [null, "Wel verdacht.", "Niet wat wet betekent.", "Geen toeslag."],
      },
      {
        q: "Wat zijn de **Panama Papers**?",
        options: ["Lekken van documenten over geheime offshore-bedrijven (2016)", "Een belasting", "Een nieuw verdrag", "Een soort contract"],
        answer: 0,
        wrongHints: [null, "Geen belasting.", "Geen verdrag — onthulling.", "Niet contractueel."],
      },
      {
        q: "Waarom is **eerlijke belasting** belangrijk?",
        options: ["Solidariteit + financiering overheid + eerlijke markt", "Niemand vindt het belangrijk", "Alleen voor rijken", "Alleen tijdens crisis"],
        answer: 0,
        wrongHints: [null, "Wel belangrijk.", "Voor iedereen.", "Altijd."],
      },
      {
        q: "Een **belastingparadijs** is:",
        options: ["Land met zeer lage belasting + geheimhouding", "Land waar geen belasting bestaat", "Een vakantiebestemming", "Een soort verzekering"],
        answer: 0,
        wrongHints: [null, "Vaak nog wel iets, maar laag.", "Niet specifiek vakantie.", "Geen verzekering."],
      },
    ],
  },
  // ─── Stap 7: De Belastingdienst ──────────────────────
  {
    title: "De Belastingdienst — hoe werkt het in praktijk?",
    explanation: "De **Belastingdienst** is een overheidsorganisatie die:\n• Belasting + premies int\n• Toeslagen uitbetaalt\n• Aangifte controleert\n• Naheffingen + boetes oplegt\n• Internationaal samenwerkt\n\n**Belangrijke contactpunten voor jou (vroeger of later):**\n\n**1. Aangifte inkomstenbelasting**\n• Ieder jaar voor 1 mei\n• Online via Mijn Belastingdienst (login met DigiD)\n• Vaak vooraf ingevuld (loon, banksaldo, hypotheek)\n• Controleren + indienen\n• Werkenden krijgen vaak teruggave; zzp'ers betalen meestal bij\n\n**2. Voorlopige aanslag**\n• Ondernemers + grote uitgaven (hypotheekrente)\n• Belasting wordt al maandelijks afgedragen of teruggegeven\n• Voorkomt grote bedragen ineens\n\n**3. Toeslagen aanvragen**\n• Via mijn.toeslagen.nl\n• Schat je inkomen voor het komende jaar\n• Wijziging melden! (anders later terugvorderen)\n\n**4. Bezwaar maken**\n• Niet eens met aanslag? 6 weken om bezwaar te maken\n• Kosteloos (eerste lijn)\n• Daarna eventueel rechter (bestuursrecht)\n\n**5. Betalen**\n• Aanslag krijg je per brief of digitaal\n• Op tijd betalen (anders rente + boete)\n• Mogelijkheid betalingsregeling bij grote bedragen\n\n**Sancties**:\n• **Te laat aangifte**: boete €385-€5.514\n• **Te laag aangegeven (slordig)**: 25-50% boete\n• **Opzettelijk te laag (fraude)**: tot 100% + strafrecht\n• **Nahef-bevoegdheid**: 5 jaar (12 jaar bij buitenland)\n\n**Tips voor jou**:\n• **Bewaar bonnen + facturen** (7 jaar)\n• **Check loonstrookje** klopt\n• **Doe aangifte op tijd** (vóór 1 mei)\n• **Vraag toeslagen aan** waar je recht op hebt\n• **Wijzig inkomen-schatting** als je werk vindt/verliest — voorkomt terugvorderingen\n\n**Belastingdienst is digitaal**:\n• DigiD voor alle online zaken\n• App 'Mijn Belastingdienst'\n• Belastingtelefoon: 0800-0543 (gratis)\n\n**Toeslagenaffaire (2018-2020)**:\n• Belastingdienst gebruikte algoritme dat onterecht ouders aanmerkte als fraudeur\n• Veel families in armoede gestort, kinderen uit huis geplaatst\n• Compensatieregeling loopt nog\n• Leidt tot hervorming + andere werkwijze\n\n**Tip voor zzp/ondernemers (later voor jou):**\n• Houd ~30% omzet apart voor belasting + BTW\n• Anders sta je voor verrassing bij aangifte",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BELASTINGDIENST</text>
<rect x="20" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">AANGIFTE IB</text>
<text x="87" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vóór 1 mei via DigiD</text>
<rect x="165" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">TOESLAGEN</text>
<text x="232" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">mijn.toeslagen.nl</text>
<rect x="20" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">BEZWAAR</text>
<text x="87" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">6 weken termijn</text>
<rect x="165" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">BOETES</text>
<text x="232" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">25-100% bij fraude</text>
<rect x="20" y="145" width="280" height="40" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="160" y="163" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">⚠ TOESLAGENAFFAIRE</text>
<text x="160" y="178" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">algoritme onterecht ouders gestraft</text>
<text x="160" y="205" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">bewaar bonnen 7 jaar</text>
</svg>`,
    checks: [
      {
        q: "Wanneer doe je **aangifte inkomstenbelasting**?",
        options: ["Vóór 1 mei elk jaar", "1 januari", "31 december", "Vrije keuze"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te laat.", "Wel deadline."],
      },
      {
        q: "Hoe log je in op **Mijn Belastingdienst**?",
        options: ["Met DigiD", "Met je BSN alleen", "Met e-mail + wachtwoord", "Met paspoort"],
        answer: 0,
        wrongHints: [null, "BSN alleen onvoldoende.", "Niet via gewone account.", "Paspoort = identificatie, niet inlog."],
      },
      {
        q: "Hoe lang heb je om **bezwaar** te maken?",
        options: ["6 weken na de aanslag", "1 dag", "1 jaar", "Onbeperkt"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Wel termijn."],
      },
      {
        q: "Wat gebeurt bij **opzettelijk te laag aangeven (fraude)**?",
        options: ["Boete tot 100% + mogelijk strafrecht", "Geen sanctie", "Korting", "Een waarschuwing"],
        answer: 0,
        wrongHints: [null, "Wel sanctie.", "Tegendeel.", "Vaak veel meer dan waarschuwing."],
      },
      {
        q: "Hoe lang moet je administratie **bewaren**?",
        options: ["7 jaar (wettelijke bewaarplicht)", "1 jaar", "1 maand", "Niet"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Veel te kort.", "Wel verplicht."],
      },
      {
        q: "**Toeslagenaffaire**: wat ging mis?",
        options: ["Algoritme markeerde ouders ten onrechte als fraudeur", "Te veel toeslagen uitbetaald", "Toeslagen afgeschaft", "Niets bijzonders"],
        answer: 0,
        wrongHints: [null, "Probleem was juist te veel terugvordering.", "Bestaan nog.", "Echt schandaal."],
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
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 6",
  intro:
    "Hoofdstuk 6 van Pincode 7e ed. VMBO-GT 4: directe + indirecte belastingen, BTW + accijns, IB + schijven + boxen, heffingskortingen, toeslagen, belastingmoraal, de Belastingdienst. 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "belasting", "directe belasting", "indirecte belasting",
    "inkomstenbelasting", "ib", "vennootschapsbelasting", "vpb",
    "erfbelasting", "schenkbelasting", "vermogensbelasting", "box 1", "box 2", "box 3",
    "btw", "omzetbelasting", "21%", "9%", "0%",
    "accijns", "tabak", "alcohol", "brandstof",
    "overdrachtsbelasting", "starter", "motorrijtuigenbelasting", "mrb",
    "premie", "aow-premie", "zorgverzekeringspremie", "ww-premie",
    "schijven", "progressieve belasting", "vlaktaks",
    "heffingskorting", "algemene heffingskorting", "arbeidskorting", "iack",
    "ouderenkorting", "loonheffing",
    "toeslag", "zorgtoeslag", "huurtoeslag", "kinderopvangtoeslag",
    "kindgebonden budget", "kinderbijslag",
    "belastingontwijking", "belastingontduiking", "zwart geld", "belastingparadijs",
    "panama papers", "pandora papers", "luxleaks",
    "belastingdienst", "digid", "aangifte", "aanslag", "bezwaar",
    "toeslagenaffaire", "ozb",
    "pincode hoofdstuk 6", "pincode hoofdstuk f",
  ],
  chapters,
  steps,
};

export default pincodeBelasting;
