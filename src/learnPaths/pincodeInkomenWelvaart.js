// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 1 (Inkomen en welvaart)
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

const stepEmojis = ["🍞", "🛠️", "💼", "📊", "📈", "🌍", "⚖️"];

const chapters = [
  { letter: "A", title: "Schaarste en productie", emoji: "🍞", from: 0, to: 1 },
  { letter: "B", title: "Inkomen", emoji: "💼", from: 2, to: 3 },
  { letter: "C", title: "Welvaart", emoji: "📈", from: 4, to: 6 },
];

const steps = [
  // ─── Stap 1: Schaarste, behoeften en goederen ─────────────
  {
    title: "Schaarste, behoeften en goederen",
    explanation: "**Economie** gaat over keuzes maken bij **schaarste** — er is altijd meer gewenst dan beschikbaar.\n\n**Behoeften**: dingen die je nodig hebt of wil. Verdeling:\n• **Primaire behoeften**: noodzakelijk om te leven (eten, drinken, onderdak, kleding)\n• **Secundaire behoeften**: aangenaam maar niet noodzakelijk (smartphone, vakantie, sneakers)\n\nWat primair of secundair is, kan **per persoon en tijd verschillen**. Voor jou is een telefoon misschien gevoelsmatig essentieel, voor je opa niet.\n\n**Goederen** vervullen behoeften:\n• **Vrije goederen**: gratis, in overvloed beschikbaar (lucht, zonlicht, zeewater)\n• **Schaarse goederen**: kosten geld of moeite (alles in de winkel)\n• **Consumptiegoederen**: voor direct gebruik door consumenten (brood, kleding)\n• **Kapitaalgoederen**: gebruikt om iets ANDERS te maken (oven van de bakker, vrachtauto)\n\n**Productiefactoren** zijn nodig om iets te maken — komt in volgende stap diepgaand.\n\n**Kies-dwang**: bij schaarste moet je kiezen. **Opportunity cost** = wat je opgeeft door iets anders niet te doen. Voorbeeld: je kiest voor een avond uit (€40) → je kunt die €40 niet sparen voor je rijbewijs.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">SCHAARSTE = KIEZEN</text>
<rect x="40" y="42" width="100" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="90" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">behoeften</text>
<text x="90" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">groot</text>
<text x="155" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="18" font-family="Arial" font-weight="bold">&gt;</text>
<rect x="170" y="42" width="100" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">middelen</text>
<text x="220" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">beperkt</text>
<text x="160" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">→ je moet kiezen</text>
<rect x="20" y="130" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="148" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">primair</text>
<text x="87" y="163" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">eten · drinken · onderdak</text>
<text x="87" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">noodzakelijk</text>
<rect x="165" y="130" width="135" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="232" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">secundair</text>
<text x="232" y="163" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">smartphone · vakantie</text>
<text x="232" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">aangenaam</text>
</svg>`,
    checks: [
      {
        q: "Een **smartphone** voor een 16-jarige is een ... behoefte.",
        options: ["Secundaire behoefte", "Primaire behoefte", "Vrije behoefte", "Geen behoefte"],
        answer: 0,
        wrongHints: [null, "Primair = nodig om te leven (eten/onderdak).", "'Vrij' is een goederentype, geen behoeftetype.", "Er is wel behoefte — anders zou je hem niet willen."],
        uitlegPad: {
          stappen: [{ titel: "Primair of secundair?", tekst: "Primair = nodig om te LEVEN (eten, drinken, onderdak, kleding). Secundair = aangenaam maar niet noodzakelijk. Een smartphone is leuk maar niet vitaal → secundair." }],
          woorden: [{ woord: "primaire behoefte", uitleg: "Noodzakelijk om te leven: voedsel, water, onderdak, kleding." }, { woord: "secundaire behoefte", uitleg: "Aangenaam, niet noodzakelijk: smartphone, vakantie, sneakers." }],
          theorie: "Behoeften-indeling kan PER PERSOON verschillen, maar pas op met gevoel: 'ik kan niet zonder mijn telefoon' is gevoel — economisch blijft het secundair omdat je niet sterft zonder.",
          voorbeelden: [{ type: "primair", tekst: "Avondeten, regenjas, dak boven je hoofd." }, { type: "secundair", tekst: "Smartphone, vakantie, sneakers." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Vraag: 'kan ik leven zonder dit?'. Ja → secundair. Nee → primair." }],
          niveaus: { basis: "Smartphone = secundair = A.", simpeler: "Zonder smartphone leef je gewoon door. Zonder eten/onderdak niet. Smartphone is dus secundair. = A.", nogSimpeler: "Niet vitaal = secundair = A." },
        },
      },
      {
        q: "**Lucht** is een voorbeeld van:",
        options: ["Vrij goed", "Schaars goed", "Kapitaalgoed", "Consumptiegoed"],
        answer: 0,
        wrongHints: [null, "Lucht is gratis en in overvloed.", "Kapitaalgoed maakt je iets anders mee.", "Consumptie kan, maar 'vrij' is specifieker."],
        uitlegPad: {
          stappen: [{ titel: "Vrij of schaars?", tekst: "Vrij goed = GRATIS en in OVERVLOED beschikbaar. Schaars = kost geld of moeite. Lucht ademen kost niks en is overal → vrij goed." }],
          woorden: [{ woord: "vrij goed", uitleg: "Gratis + onbeperkt: lucht, zonlicht, zeewater (voor zwemmen)." }, { woord: "schaars goed", uitleg: "Kost geld of moeite om te krijgen. Alles in de winkel." }],
          theorie: "In economie kijken we vooral naar SCHAARSE goederen — daar moet je kiezen. Vrije goederen vragen geen economische beslissing.",
          voorbeelden: [{ type: "vrij", tekst: "Lucht, zonlicht, regenwater." }, { type: "schaars", tekst: "Brood, kleren, telefoon — kost geld." }],
          basiskennis: [{ onderwerp: "Pas op", uitleg: "Schone lucht in een vervuilde stad kan WEL schaars worden — dan is het geen vrij goed meer." }],
          niveaus: { basis: "Lucht = vrij goed = A.", simpeler: "Lucht is gratis en overal. Iedereen kan ademen zonder te betalen. Dus: vrij goed. = A.", nogSimpeler: "Gratis + overvloed = vrij = A." },
        },
      },
      {
        q: "Brood dat je in de winkel koopt om vandaag op te eten:",
        options: ["Consumptiegoed", "Kapitaalgoed", "Vrij goed", "Productiegoed"],
        answer: 0,
        wrongHints: [null, "Kapitaalgoed = waarmee je iets ANDERS maakt.", "Brood kost geld, dus niet vrij.", "Geen standaardterm in Pincode."],
        uitlegPad: {
          stappen: [{ titel: "Direct gebruiken of meer maken?", tekst: "Consumptiegoed = jij EET het zelf op / gebruikt het direct. Kapitaalgoed = je MAAKT er iets ANDERS mee. Brood eet je op → consumptie." }],
          woorden: [{ woord: "consumptiegoed", uitleg: "Direct gebruikt door consument (brood, kleding, snoep)." }, { woord: "kapitaalgoed", uitleg: "Gebruikt om IETS ANDERS te maken (oven, vrachtwagen, machine)." }],
          theorie: "Hetzelfde voorwerp kan beide zijn — afhankelijk van WIE en WAARVOOR. Een bakker die brood verkoopt: voor de bakker is meel een kapitaalgoed (om brood mee te maken), voor jou is brood een consumptiegoed (om op te eten).",
          voorbeelden: [{ type: "consumptie", tekst: "Brood, kleren, ijsje — voor direct gebruik." }, { type: "kapitaal", tekst: "Oven, taxi, vrachtwagen — om iets ANDERS te maken/leveren." }],
          basiskennis: [{ onderwerp: "Ezelsbruggetje", uitleg: "Consument → consumptiegoed. Producent → kapitaalgoed." }],
          niveaus: { basis: "Brood = consumptie = A.", simpeler: "Jij eet het brood op. Je maakt er niks ANDERS mee. Dus consumptiegoed. = A.", nogSimpeler: "Opgeten = consumptie = A." },
        },
      },
      {
        q: "Wat is **opportunity cost** (offerkost)?",
        options: ["Wat je opgeeft door voor iets anders te kiezen", "De prijs in de winkel", "Belasting over een aankoop", "Wat een ondernemer betaalt voor reclame"],
        answer: 0,
        wrongHints: [null, "Dat is gewoon de prijs.", "Belasting is iets anders.", "Reclamekosten ook iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Kiezen = offer brengen", tekst: "Bij schaarste moet je KIEZEN. Wat je niet kiest, geef je OP. Dat opgegeven alternatief = opportunity cost." }],
          woorden: [{ woord: "opportunity cost", uitleg: "Engels voor 'offerkost'. Wat je opgeeft door A te kiezen i.p.v. B." }],
          theorie: "Opportunity cost is meer dan de PRIJS in euro's — het is wat je ECHT mist door je keuze. €40 uitgeven aan een avond uit = €40 niet sparen voor rijbewijs. De OFFER is dat sparen.",
          voorbeelden: [{ type: "geld", tekst: "Je kiest snowboarden (€500) → kunt geen nieuwe telefoon kopen → offer = telefoon." }, { type: "tijd", tekst: "Je kiest 2 uur Netflix → 2 uur niet leren → offer = je toets-cijfer." }],
          basiskennis: [{ onderwerp: "Niet alleen geld", uitleg: "Opportunity cost geldt ook voor TIJD en aandacht — alles dat schaars is." }],
          niveaus: { basis: "Wat je opgeeft door iets anders te kiezen. A.", simpeler: "Kies je A? Dan krijg je B niet. Die gemiste B = opportunity cost. = A.", nogSimpeler: "Gemiste keuze = A." },
        },
      },
      {
        q: "Wanneer is iets **schaars** in economische zin?",
        options: ["De vraag is groter dan het beschikbare aanbod", "Het is helemaal op", "Het is duur", "Het is mooi"],
        answer: 0,
        wrongHints: [null, "Niet 'op' — er is iets, alleen niet genoeg.", "Duur is een gevolg, geen definitie.", "Schoonheid heeft niets met schaarste te maken."],
        uitlegPad: {
          stappen: [{ titel: "Vraag > aanbod", tekst: "Schaars = mensen WILLEN meer dan er beschikbaar is. Niet 'op', niet 'duur' — gewoon: meer gewenst dan voorhanden." }],
          woorden: [{ woord: "schaarste", uitleg: "Toestand waarin de vraag groter is dan het aanbod. Reden voor economisch keuze-maken." }, { woord: "vraag", uitleg: "Wat mensen willen kopen tegen een prijs." }, { woord: "aanbod", uitleg: "Wat verkopers willen leveren tegen een prijs." }],
          theorie: "Schaarste is de basis van ALLE economie. Zonder schaarste hoef je niet te kiezen. De prijs is een GEVOLG van schaarste (hogere schaarste → hogere prijs).",
          voorbeelden: [{ type: "schaars", tekst: "Concertkaartjes Adele: 50.000 fans, 5.000 stoelen → schaars." }, { type: "niet schaars", tekst: "Lucht: iedereen kan ademen → niet schaars." }],
          basiskennis: [{ onderwerp: "Mooi ≠ schaars", uitleg: "Een mooie zonsondergang is mooi maar niet schaars — iedereen kan ervan genieten." }],
          niveaus: { basis: "Vraag > aanbod = schaars. A.", simpeler: "Veel mensen willen iets, maar er is niet genoeg → schaars. = A.", nogSimpeler: "Meer willen dan er is = A." },
        },
      },
      {
        q: "De **oven van een bakker** is een voorbeeld van een:",
        options: ["Kapitaalgoed", "Consumptiegoed", "Vrij goed", "Primaire behoefte"],
        answer: 0,
        wrongHints: [null, "Bakker eet de oven niet zelf op.", "Een oven is niet gratis of in overvloed.", "Een goed is geen behoefte."],
        uitlegPad: {
          stappen: [{ titel: "Wat maakt de oven mogelijk?", tekst: "De bakker gebruikt de oven om BROOD te maken — dus iets ANDERS produceren. Goederen die je gebruikt om te produceren = kapitaalgoederen." }],
          woorden: [{ woord: "kapitaalgoed", uitleg: "Goederen waarmee je iets ANDERS produceert: machines, gebouwen, vrachtwagens." }],
          theorie: "Kapitaalgoed = productiemiddel. De bakker investeert €5.000 in een oven (kapitaalgoed) zodat hij brood (consumptiegoed) kan maken. De oven gaat 10 jaar mee — duurzaam kapitaal.",
          voorbeelden: [{ type: "kapitaal-bakker", tekst: "Oven, deegmachine, koeling — voor brood-productie." }, { type: "consumptie-klant", tekst: "Brood, koffie, koek — voor klant-consumptie." }],
          basiskennis: [{ onderwerp: "Behoefte vs goed", uitleg: "Behoefte = wat je WIL. Goed = OBJECT dat behoefte vervult. Een oven is geen behoefte." }],
          niveaus: { basis: "Oven maakt iets anders = kapitaal. A.", simpeler: "Bakker eet oven niet op — hij maakt er BROOD mee. Goederen waarmee je iets maakt = kapitaalgoed. = A.", nogSimpeler: "Maken-mee = kapitaal = A." },
        },
      },
    ],
  },
  // ─── Stap 2: Productiefactoren ─────────────────────────────
  {
    title: "Productiefactoren — wat heb je nodig om te maken?",
    explanation: "Om iets te produceren heb je **vier productiefactoren** nodig:\n\n**1. Arbeid** — werk dat mensen leveren\n• Bij een bakker: het werk van bakker, verkoper, schoonmaker\n• Beloning: **loon** (of voor zelfstandige: arbeidsinkomen)\n\n**2. Natuur** — alles wat de natuur biedt\n• Grond, lucht, water, grondstoffen (graan, hout, olie)\n• Beloning: **pacht** (huur voor grond) of **rente op natuurproducten**\n\n**3. Kapitaal** — geld én apparatuur waarmee je produceert\n• **Vast kapitaal**: gebouwen, machines, vrachtwagens (gaan jaren mee)\n• **Vlottend kapitaal**: voorraden, geld om in te kopen (verbruikt zich)\n• Beloning: **rente** (op geleend geld) of **dividend** (winstuitkering aan aandeelhouders)\n\n**4. Ondernemerschap** — het organiseren, risico nemen\n• Combineert de eerste drie productiefactoren\n• Neemt beslissingen, draagt risico\n• Beloning: **winst** (of verlies)\n\n**Voorbeeld bakker De Korenbloem**:\n• **Arbeid**: 2 bakkers + 1 verkoper\n• **Natuur**: graan, water\n• **Kapitaal**: oven, winkel, bakvormen, voorraad meel\n• **Ondernemerschap**: de bakker zelf, die alles plant\n\n**Beloningsoverzicht** (komt elk examen voor!):\n| Productiefactor | Beloning |\n|---|---|\n| Arbeid | Loon |\n| Natuur | Pacht |\n| Kapitaal | Rente / Dividend |\n| Ondernemerschap | Winst |",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">4 PRODUCTIEFACTOREN</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="35" y="60" fill="${COLORS.vraag}" font-size="20" font-family="Arial">👷</text>
<text x="60" y="58" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">ARBEID</text>
<text x="60" y="75" fill="${COLORS.text}" font-size="9" font-family="Arial">werk van mensen</text>
<text x="60" y="88" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ loon</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="180" y="60" fill="${COLORS.geld}" font-size="20" font-family="Arial">🌾</text>
<text x="205" y="58" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">NATUUR</text>
<text x="205" y="75" fill="${COLORS.text}" font-size="9" font-family="Arial">grond, grondstof</text>
<text x="205" y="88" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ pacht</text>
<rect x="20" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="35" y="125" fill="${COLORS.warm}" font-size="20" font-family="Arial">🏭</text>
<text x="60" y="123" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">KAPITAAL</text>
<text x="60" y="140" fill="${COLORS.text}" font-size="9" font-family="Arial">geld, machines</text>
<text x="60" y="153" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ rente/dividend</text>
<rect x="165" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="180" y="125" fill="${COLORS.alt}" font-size="20" font-family="Arial">🚀</text>
<text x="205" y="123" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">ONDERNEMER</text>
<text x="205" y="140" fill="${COLORS.text}" font-size="9" font-family="Arial">organiseren, risico</text>
<text x="205" y="153" fill="${COLORS.geld}" font-size="9" font-family="Arial" font-weight="bold">→ winst</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">elke productie heeft alle 4 nodig</text>
<text x="160" y="205" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kapitaal: vast (gebouw) + vlottend (voorraad)</text>
</svg>`,
    checks: [
      {
        q: "Welke beloning hoort bij **arbeid**?",
        options: ["Loon", "Pacht", "Rente", "Winst"],
        answer: 0,
        wrongHints: [null, "Pacht hoort bij natuur (grond).", "Rente hoort bij kapitaal.", "Winst hoort bij ondernemerschap."],
        uitlegPad: {
          stappen: [{ titel: "Beloningstabel", tekst: "Arbeid → loon. Natuur → pacht. Kapitaal → rente/dividend. Ondernemerschap → winst." }],
          woorden: [{ woord: "loon", uitleg: "Beloning voor arbeid (werk dat een werknemer levert)." }, { woord: "arbeid", uitleg: "De productiefactor 'werk van mensen'." }],
          theorie: "Elke productiefactor heeft een EIGEN beloning — onthoud de tabel uit het hoofd, komt elk jaar terug op examen.",
          voorbeelden: [{ type: "praktijk", tekst: "Werknemer van AH = arbeid → loon. Eigenaar van AH-pand verhuurt = natuur → pacht." }],
          basiskennis: [{ onderwerp: "Ezelsbruggetje", uitleg: "A-L-N-P-K-R-O-W: Arbeid-Loon, Natuur-Pacht, Kapitaal-Rente, Ondernemer-Winst." }],
          niveaus: { basis: "Arbeid → loon. A.", simpeler: "Werk leveren = arbeid. Daarvoor krijg je loon. = A.", nogSimpeler: "Arbeid = loon = A." },
        },
      },
      {
        q: "Een **vrachtauto** van een transportbedrijf is welke productiefactor?",
        options: ["Kapitaal (vast kapitaal)", "Arbeid", "Natuur", "Ondernemerschap"],
        answer: 0,
        wrongHints: [null, "Arbeid = werk van mensen.", "Natuur = grondstoffen, niet voertuigen.", "Ondernemerschap = beslissingen, niet voertuigen."],
        uitlegPad: {
          stappen: [{ titel: "Wat zijn kapitaalgoederen?", tekst: "Een vrachtauto is een GEMAAKT productiemiddel dat jaren meegaat → vast kapitaal." }],
          woorden: [{ woord: "vast kapitaal", uitleg: "Duurzame productiemiddelen die jaren meegaan: gebouwen, machines, voertuigen." }, { woord: "vlottend kapitaal", uitleg: "Voorraden en kasgeld — verbruikt zich snel." }],
          theorie: "Vast vs vlottend kapitaal: een vrachtauto rijdt jaren rond (vast). Diesel die erin gaat wordt elke rit opgemaakt (vlottend).",
          voorbeelden: [{ type: "vast", tekst: "Oven, vrachtauto, fabriek, computer." }, { type: "vlottend", tekst: "Voorraad meel, kasgeld, brandstof." }],
          basiskennis: [{ onderwerp: "Niet natuur", uitleg: "Natuur = grondstoffen (graan, olie). Vrachtauto is door mensen GEMAAKT — dus kapitaal." }],
          niveaus: { basis: "Vrachtauto = vast kapitaal = A.", simpeler: "Vrachtauto is gemaakt + gaat jaren mee = vast kapitaalgoed. = A.", nogSimpeler: "Voertuig = kapitaal = A." },
        },
      },
      {
        q: "Een boer **verhuurt land** aan een tomatenkweker en krijgt **€500/mnd**. Hoe heet dit inkomen?",
        options: ["Pacht", "Loon", "Winst", "Rente"],
        answer: 0,
        wrongHints: [null, "Loon = voor arbeid.", "Winst = voor ondernemerschap.", "Rente = voor uitlenen van geld."],
        uitlegPad: {
          stappen: [{ titel: "Wie levert wat?", tekst: "De boer levert NATUUR (land) → de beloning voor natuur heet pacht." }],
          woorden: [{ woord: "pacht", uitleg: "Huur voor het gebruik van grond/land. Beloning voor productiefactor 'natuur'." }],
          theorie: "Pacht is specifiek voor LAND/grond. Voor een gebouw zou je 'huur' zeggen (en die hoort bij kapitaal, geen pacht).",
          voorbeelden: [{ type: "pacht", tekst: "Boer verhuurt 5 ha aan tulpenkweker = pacht." }, { type: "huur kapitaal", tekst: "Bakker huurt winkelpand van vastgoedmaatschappij = huur (kapitaal)." }],
          basiskennis: [{ onderwerp: "Verwarring", uitleg: "Veel leerlingen kiezen 'rente' — maar rente is voor GELD uitlenen, niet land." }],
          niveaus: { basis: "Land verhuren = pacht. A.", simpeler: "Land = natuur. Beloning voor natuur = pacht. = A.", nogSimpeler: "Land = pacht = A." },
        },
      },
      {
        q: "Wat is **vlottend kapitaal**?",
        options: ["Voorraden en kasgeld die snel vervangen worden", "Een gebouw", "Een vrachtauto", "De bakker zelf"],
        answer: 0,
        wrongHints: [null, "Gebouw = vast kapitaal.", "Vrachtauto = vast kapitaal.", "De ondernemer is geen kapitaal."],
        uitlegPad: {
          stappen: [{ titel: "Vlottend vs vast", tekst: "Vlottend = verbruikt zich SNEL (voorraad, kasgeld). Vast = gaat JAREN mee (gebouw, machine)." }],
          woorden: [{ woord: "vlottend kapitaal", uitleg: "Productiemiddelen die zich snel verbruiken: voorraden, kasgeld, halffabricaten." }, { woord: "vast kapitaal", uitleg: "Duurzame productiemiddelen: gebouwen, machines, vrachtwagens." }],
          theorie: "De bakker heeft beide nodig: oven (vast) + meel-voorraad (vlottend). Zonder voorraad geen brood te bakken; zonder oven geen brood te bakken.",
          voorbeelden: [{ type: "vlottend", tekst: "Meel-voorraad, kasgeld, diesel in de tank." }, { type: "vast", tekst: "Oven, mengmachine, winkelpand." }],
          basiskennis: [{ onderwerp: "Tijd-test", uitleg: "Gaat het langer dan 1 jaar mee? Vast. Verbruikt binnen weken? Vlottend." }],
          niveaus: { basis: "Voorraad + kasgeld = vlottend. A.", simpeler: "Vlottend = snel verbruikt (zoals voorraad). Vast = duurzaam (zoals oven). = A.", nogSimpeler: "Verbruikt = vlottend = A." },
        },
      },
      {
        q: "De ondernemer **draagt risico**. Wat is daarvoor de beloning?",
        options: ["Winst (of verlies)", "Loon", "Pacht", "Niets"],
        answer: 0,
        wrongHints: [null, "Loon = voor arbeid van werknemer.", "Pacht = voor natuur (grond).", "Risico nemen levert in geld iets op (of kost iets)."],
        uitlegPad: {
          stappen: [{ titel: "Risico = winst OF verlies", tekst: "Ondernemer brengt productiefactoren samen + neemt risico. Als het lukt = winst. Als het mislukt = verlies." }],
          woorden: [{ woord: "winst", uitleg: "Wat overblijft na alle kosten zijn betaald. Beloning voor ondernemerschap." }, { woord: "verlies", uitleg: "Als kosten hoger zijn dan omzet. Negatieve winst." }],
          theorie: "Winst is een ONZEKERE beloning. Werknemers krijgen LOON (zekere beloning). Verschil: ondernemer kan rijk worden óf failliet gaan; werknemer krijgt zijn loon ook bij slechte maand.",
          voorbeelden: [{ type: "winst", tekst: "Bakker bakt 100 broden, verkoopt voor €200, kosten €120 → winst €80." }, { type: "verlies", tekst: "Bakker verkoopt 60 brood (rest weggegooid) → kost €120, omzet €120 → 0. Bij hagel: omzet €90, kosten €120 → verlies €30." }],
          basiskennis: [{ onderwerp: "Niet 'niets'", uitleg: "Iemand die risico draagt KRIJGT iets — winst — anders zou niemand ondernemer worden." }],
          niveaus: { basis: "Ondernemen = winst. A.", simpeler: "De ondernemer draagt risico. Lukt het? Winst. Mislukt? Verlies. Beloning = winst (of negatieve winst). = A.", nogSimpeler: "Risico = winst = A." },
        },
      },
      {
        q: "Welke productiefactor levert een **mijnbouwbedrijf vooral**?",
        options: ["Natuur (grondstoffen)", "Arbeid alleen", "Kapitaal alleen", "Ondernemerschap alleen"],
        answer: 0,
        wrongHints: [null, "Mijnbouw heeft alle 4 nodig — maar de output IS natuur.", "Idem.", "Idem."],
        uitlegPad: {
          stappen: [{ titel: "Wat KOMT uit een mijn?", tekst: "Mijnbouw haalt steenkool, ijzererts, koper, goud uit de grond → dat is NATUUR (grondstoffen)." }],
          woorden: [{ woord: "natuur", uitleg: "Productiefactor: alles wat de NATUUR biedt — grond, lucht, water, grondstoffen." }, { woord: "grondstof", uitleg: "Ruwe materiaal uit natuur dat je bewerkt tot eindproduct." }],
          theorie: "Een mijn HEEFT ook arbeid (mijnwerkers), kapitaal (machines) en ondernemerschap (leiding) nodig — maar wat het LEVERT aan de economie zijn grondstoffen = natuur.",
          voorbeelden: [{ type: "natuur-bedrijven", tekst: "Mijnbouw, oliemaatschappij (Shell), bosbouw, visserij." }, { type: "andere productiefactor", tekst: "Bakkerij = vooral arbeid. Bank = vooral kapitaal. Software-startup = vooral ondernemerschap." }],
          basiskennis: [{ onderwerp: "Wat levert het?", uitleg: "Kijk altijd naar de OUTPUT: een mijn levert grondstoffen, dat is natuur." }],
          niveaus: { basis: "Mijn = natuur. A.", simpeler: "Mijnbouw haalt steenkool/ijzer/goud UIT DE GROND. Dat is wat de natuur biedt = natuur. = A.", nogSimpeler: "Uit grond = natuur = A." },
        },
      },
    ],
  },
  // ─── Stap 3: Soorten inkomen ───────────────────────────────
  {
    title: "Soorten inkomen — bruto, netto, primair, secundair",
    explanation: "**Inkomen** = geld dat je ontvangt. Belangrijke termen voor je examen:\n\n**Brutoloon**: wat de werkgever betaalt — vóór belasting en premies.\n**Nettoloon**: wat er op je rekening komt — ná aftrek van loonheffing en sociale premies.\n\n**Voorbeeld**: bruto €2.500 → werkgever houdt €600 in (loonheffing + premies) → netto €1.900.\n\n**Primair inkomen** — verdiend door een productiefactor te leveren:\n• **Loon** (arbeid)\n• **Pacht** (natuur — verhuren van land)\n• **Rente** (kapitaal — geld uitlenen)\n• **Winst** (ondernemerschap)\n\n**Secundair inkomen** — ontvangen ZONDER een productiefactor te leveren:\n• **Uitkeringen** (AOW, bijstand, WW, WIA)\n• **Toeslagen** (huurtoeslag, zorgtoeslag, kinderbijslag, kindgebonden budget)\n• **Studiefinanciering**\n\nSecundair inkomen komt vooral van de overheid en wordt gefinancierd uit belastingen.\n\n**Besteedbaar inkomen** = nettoloon + ontvangen toeslagen − betaalde lasten (bv. huur, hypotheek).\n\n**Voorbeeld huishouden**:\n• Netto loon: €2.000\n• Zorgtoeslag: €100\n• Huurtoeslag: €150\n• Huur: €900\n• → Besteedbaar inkomen: €2.000 + €100 + €150 - €900 = **€1.350**\n\n**Persoonlijk inkomen** vs **gezinsinkomen**:\n• Persoonlijk = van 1 persoon\n• Gezinsinkomen = alle inkomens van gezinsleden samen",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BRUTO → NETTO → BESTEEDBAAR</text>
<rect x="40" y="40" width="240" height="28" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="13" font-family="Arial" font-weight="bold">BRUTO €2500</text>
<text x="160" y="84" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">− €600 (loonheffing + premies)</text>
<rect x="60" y="92" width="200" height="28" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="110" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">NETTO €1900</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ toeslagen (zorg, huur)</text>
<text x="160" y="152" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">− vaste lasten (huur, hypotheek)</text>
<rect x="80" y="160" width="160" height="28" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="178" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BESTEEDBAAR</text>
</svg>`,
    checks: [
      {
        q: "Iemand verhuurt een appartement en ontvangt **€1200 huur**. Welk soort inkomen is dat?",
        options: ["Primair (uit kapitaal/natuur)", "Secundair", "Brutoloon", "Toeslag"],
        answer: 0,
        wrongHints: [null, "Secundair = zonder productiefactor te leveren.", "Loon = voor arbeid.", "Toeslag krijg je van de overheid."],
        uitlegPad: {
          stappen: [{ titel: "Welke productiefactor?", tekst: "Verhuurder STELT een appartement BESCHIKBAAR = levert kapitaal (gebouw). Primair inkomen ontstaat altijd uit een productiefactor." }],
          woorden: [{ woord: "primair inkomen", uitleg: "Verdiend door productiefactor leveren: loon (arbeid), pacht (natuur), rente (kapitaal), winst (ondernemerschap)." }, { woord: "secundair inkomen", uitleg: "Krijg je ZONDER productiefactor: toeslag, uitkering, kinderbijslag." }],
          theorie: "Test: verricht iemand een PRESTATIE in ruil? Ja → primair. Nee → secundair (overdracht van de overheid).",
          voorbeelden: [{ type: "primair", tekst: "Loon, pacht, huur, rente, dividend, winst." }, { type: "secundair", tekst: "AOW, bijstand, huurtoeslag, kinderbijslag." }],
          basiskennis: [{ onderwerp: "Huur van appartement", uitleg: "Eigenaar verhuurt z'n bezit = productiefactor kapitaal. Beloning = primair inkomen." }],
          niveaus: { basis: "Huur uit verhuur = primair. A.", simpeler: "Hij STELT zijn appartement beschikbaar = productiefactor. Daarvoor krijgt hij geld = primair inkomen. = A.", nogSimpeler: "Verhuren = primair = A." },
        },
      },
      {
        q: "Bij wie hoort de **zorgtoeslag** thuis?",
        options: ["Secundair inkomen", "Primair inkomen", "Loon", "Winst"],
        answer: 0,
        wrongHints: [null, "Toeslag is geen primair inkomen.", "Loon krijg je voor arbeid.", "Winst = voor ondernemers."],
        uitlegPad: {
          stappen: [{ titel: "Toeslag = overheid geeft", tekst: "Zorgtoeslag krijg je VAN de overheid om je zorgverzekering te kunnen betalen. Je leverde geen productiefactor → secundair." }],
          woorden: [{ woord: "zorgtoeslag", uitleg: "Bedrag van overheid voor huishoudens met laag inkomen om zorgpremie te helpen betalen." }, { woord: "toeslag", uitleg: "Vorm van secundair inkomen, overdracht van overheid." }],
          theorie: "Alle TOESLAGEN (zorg, huur, kinderopvang, kindgebonden budget) zijn secundair inkomen — overdrachten van Belastingdienst aan huishoudens.",
          voorbeelden: [{ type: "toeslagen", tekst: "Zorgtoeslag (~€127/mnd 2024), huurtoeslag, kinderopvangtoeslag." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Krijg je het ZONDER tegenprestatie? Ja → secundair. Levert je productiefactor? Nee → secundair." }],
          niveaus: { basis: "Toeslag = secundair. A.", simpeler: "Zorgtoeslag krijg je gewoon van overheid — niet voor werk. Dus secundair. = A.", nogSimpeler: "Toeslag = secundair = A." },
        },
      },
      {
        q: "Brutoloon **€3.000**, loonheffing en premies samen **€750**. Wat is het **nettoloon**?",
        options: ["€2.250", "€3.750", "€2.750", "€2.000"],
        answer: 0,
        wrongHints: [null, "Bij netto haal je inhoudingen ER AF.", "Net niet — alle €750 moet eraf.", "Te veel afgetrokken."],
        uitlegPad: {
          stappen: [{ titel: "Bruto − inhoudingen = netto", tekst: "Werkgever betaalt €3.000 (bruto). Inhoudingen €750 gaan naar Belastingdienst. Op bankrekening: €3.000 − €750 = €2.250." }],
          woorden: [{ woord: "brutoloon", uitleg: "Loonafspraak vóór belasting + premies." }, { woord: "nettoloon", uitleg: "Wat op je rekening komt nadat loonheffing + premies zijn ingehouden." }, { woord: "loonheffing", uitleg: "Voorheffing op inkomstenbelasting." }],
          theorie: "De som: NETTO = BRUTO − inhoudingen. Inhoudingen = loonheffing + sociale premies (WW, AOW, ZVW). Werkgever maakt netto-bedrag aan jou over, inhoudingen aan Belastingdienst.",
          voorbeelden: [{ type: "berekening", tekst: "€3.000 bruto − €750 inhoudingen = €2.250 netto." }, { type: "loonstrook", tekst: "Op je loonstrook zie je: bruto, inhoudingen onder elkaar, netto onderaan." }],
          basiskennis: [{ onderwerp: "Min teken", uitleg: "Bij netto trek je AF, niet erbij. Bruto > netto, altijd." }],
          niveaus: { basis: "€3.000 − €750 = €2.250. A.", simpeler: "Bruto bedrag MIN inhoudingen = netto. €3.000 − €750 = €2.250. = A.", nogSimpeler: "Aftrekken = A." },
        },
      },
      {
        q: "Een gezin: netto €2.500, zorgtoeslag €120, huurtoeslag €200, huur €1.000. **Besteedbaar inkomen**?",
        options: ["€1.820", "€2.500", "€3.820", "€820"],
        answer: 0,
        wrongHints: [null, "Vergeet de toeslagen + huur niet.", "Te veel — huur is min.", "Te weinig — toeslagen zijn plus."],
        uitlegPad: {
          stappen: [{ titel: "Wat zit erin?", tekst: "Besteedbaar = netto + toeslagen − vaste lasten. €2.500 + €120 + €200 − €1.000 = €1.820." }],
          woorden: [{ woord: "besteedbaar inkomen", uitleg: "Geld dat over is om VRIJ te besteden (boodschappen, kleding, sport) na vaste lasten." }],
          theorie: "Besteedbaar = netto + toeslagen − vaste lasten. Toeslagen er PLUS bij (extra geld). Vaste lasten (huur, hypotheek, premies) gaan ERAF.",
          voorbeelden: [{ type: "rekenstap", tekst: "Netto €2.500 + Zorgtoeslag €120 + Huurtoeslag €200 − Huur €1.000 = €1.820." }],
          basiskennis: [{ onderwerp: "Plus en min", uitleg: "Toeslagen zijn ontvangen geld = PLUS. Huur is uitgegeven geld = MIN." }],
          niveaus: { basis: "2500+120+200−1000 = 1820. A.", simpeler: "Begin met €2.500. Tel zorgtoeslag €120 en huurtoeslag €200 erbij = €2.820. Trek huur €1.000 af = €1.820. = A.", nogSimpeler: "1820 = A." },
        },
      },
      {
        q: "Wat is een voorbeeld van **primair inkomen**?",
        options: ["Loon van een baan", "AOW-uitkering", "Huurtoeslag", "Studiefinanciering"],
        answer: 0,
        wrongHints: [null, "AOW = secundair (zonder werk).", "Toeslag = secundair.", "Studiefin. = secundair."],
        uitlegPad: {
          stappen: [{ titel: "Welke krijg je voor PRESTATIE?", tekst: "Loon krijg je voor WERK (arbeid leveren) = primair. AOW, toeslagen, studiefin. krijg je van overheid zonder werk = secundair." }],
          woorden: [{ woord: "primair inkomen", uitleg: "Beloning voor productiefactor (loon/pacht/rente/winst)." }, { woord: "secundair inkomen", uitleg: "Overdracht van overheid zonder tegenprestatie." }],
          theorie: "Onderscheid is essentieel voor het examen — komt elk jaar terug. Onthoud: PRESTATIE vraag bij elke optie. Wel prestatie → primair. Niet → secundair.",
          voorbeelden: [{ type: "primair", tekst: "Loon, pacht, huur (uit kapitaal), rente, dividend, winst." }, { type: "secundair", tekst: "AOW, bijstand, WW, alle toeslagen, studiefinanciering, kinderbijslag." }],
          basiskennis: [{ onderwerp: "AOW = uitkering", uitleg: "Veel leerlingen kiezen AOW als primair. Maar AOW krijg je gewoon omdat je 67 wordt, niet voor werk. Dus secundair." }],
          niveaus: { basis: "Loon = primair. A.", simpeler: "Voor LOON moet je werken (arbeid leveren). Daarom primair. AOW/toeslag/studiefin. krijg je gewoon = secundair. = A.", nogSimpeler: "Loon = primair = A." },
        },
      },
      {
        q: "Wat is het verschil tussen **bruto** en **netto**?",
        options: ["Bruto = vóór inhoudingen, netto = ná inhoudingen", "Hetzelfde", "Bruto is minder dan netto", "Bruto is voor zzp'ers"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Bruto is altijd MEER.", "Geldt voor iedereen."],
        uitlegPad: {
          stappen: [{ titel: "Bruto = vol bedrag", tekst: "Bruto = wat de werkgever AFSPREEKT. Netto = wat OVERBLIJFT na inhouding van loonheffing + premies." }],
          woorden: [{ woord: "bruto", uitleg: "Vóór inhoudingen. Wat op loonafspraak staat." }, { woord: "netto", uitleg: "Na inhoudingen. Wat op je rekening verschijnt." }],
          theorie: "BRUTO is altijd > NETTO. Ezelsbruggetje: 'B is groter dan N omdat B voor Bedrag is dat je krijgt OP papier; N is wat Netto in je portemonnee komt'.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bruto €3.000 − loonheffing €450 − premies €300 = netto €2.250." }],
          basiskennis: [{ onderwerp: "Geldt voor iedereen", uitleg: "Niet alleen voor zzp'ers — elke werknemer en uitkeringsgerechtigde heeft bruto- en netto-bedragen." }],
          niveaus: { basis: "Bruto vóór, netto na. A.", simpeler: "Bruto = volle bedrag uit contract. Netto = wat OVER is na belasting/premies. = A.", nogSimpeler: "Vóór en na = A." },
        },
      },
    ],
  },
  // ─── Stap 4: Inkomensverdeling ───────────────────────────
  {
    title: "Inkomensverdeling — eerlijk of ongelijk?",
    explanation: "Niet iedereen verdient evenveel. **Inkomensverdeling** = hoe inkomen verdeeld is over de bevolking.\n\n**Gemiddelde** vs **mediaan**:\n• Gemiddelde inkomen NL ~€42.000/jaar\n• Mediaan inkomen NL ~€36.000/jaar\nVerschil ontstaat door enkele zeer hoge inkomens (CEO's) die het gemiddelde optrekken. **Mediaan** zegt vaak meer over 'de meeste Nederlanders'.\n\n**Lorenz-curve** — visualiseert ongelijkheid:\n• X-as: % van de bevolking (oplopend van arm naar rijk)\n• Y-as: % van het totale inkomen\n• Bij **perfecte gelijkheid**: rechte diagonaal (10% mensen = 10% inkomen)\n• Bij **ongelijkheid**: curve buigt naar onderen-rechts (10% mensen = 3% inkomen, etc.)\n\nHoe verder de curve van de diagonaal afwijkt → hoe **schevere inkomensverdeling**.\n\n**Gini-coëfficient**:\n• 0 = perfect gelijk\n• 1 = volledig ongelijk (1 persoon heeft alles)\n• Nederland: ~0,28 (relatief gelijk)\n• VS: ~0,40 (ongelijker)\n• Zuid-Afrika: ~0,63 (zeer ongelijk)\n\n**Waarom verdienen mensen verschillend?**\n• Opleiding (hoger opgeleid → hoger loon)\n• Schaarste (verpleegkundige nu schaars → hoger loon)\n• Sector (IT > horeca)\n• Ervaring + leeftijd\n• Verantwoordelijkheid (CEO > administratief medewerker)\n• Geluk + netwerk\n\n**Inkomensverdeling beleid** (door overheid):\n• **Progressieve belasting**: rijken betalen verhoudingsgewijs meer\n• **Toeslagen**: mensen met laag inkomen krijgen meer steun\n• **Minimumloon**: niemand mag onder €X verdienen\n• **AOW**: iedereen krijgt een basis-pensioen",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">LORENZ-CURVE</text>
<line x1="50" y1="40" x2="50" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="50" y1="180" x2="280" y2="180" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="30" y="50" fill="${COLORS.text}" font-size="9" font-family="Arial">% inkomen</text>
<text x="240" y="195" fill="${COLORS.text}" font-size="9" font-family="Arial">% bevolking</text>
<line x1="50" y1="180" x2="280" y2="40" stroke="${COLORS.geld}" stroke-width="2" stroke-dasharray="3 2"/>
<text x="270" y="50" fill="${COLORS.geld}" font-size="9" font-family="Arial">gelijk</text>
<path d="M 50,180 Q 130,170 170,150 T 280,40" fill="none" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<text x="200" y="155" fill="${COLORS.aanbod}" font-size="10" font-family="Arial" font-weight="bold">werkelijk</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Gini = 0 (gelijk) → 1 (ongelijk). NL ~0,28</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **mediaan**-inkomen?",
        options: ["Het middelste inkomen — helft verdient meer, helft minder", "Het hoogste inkomen", "Gemiddelde inkomen", "Minimumloon"],
        answer: 0,
        wrongHints: [null, "Mediaan = midden, niet hoogste.", "Gemiddelde wordt door extremen vertekend.", "Minimum is wettelijke ondergrens."],
        uitlegPad: {
          stappen: [{ titel: "Mediaan = middelste", tekst: "Zet alle inkomens op rij van laag naar hoog. Het inkomen IN HET MIDDEN is de mediaan. Helft van de mensen verdient minder, helft verdient meer." }],
          woorden: [{ woord: "mediaan", uitleg: "Middelste waarde in een gesorteerde rij. Niet gevoelig voor extremen." }, { woord: "gemiddelde", uitleg: "Som van alle waarden gedeeld door het aantal. Wordt door enkele extreme hoge waarden naar boven getrokken." }],
          theorie: "Mediaan vs gemiddelde: bij 9 mensen die €30k verdienen + 1 CEO die €1mln verdient: gemiddelde = €127k, mediaan = €30k. De mediaan zegt eerlijker iets over 'de meeste mensen'.",
          voorbeelden: [{ type: "berekening", tekst: "Inkomens: 25k, 30k, 32k, 35k, 38k, 40k, 42k, 50k, 1000k. Mediaan = €38k (5e van 9). Gemiddelde = €143k. Welke is realistischer? Mediaan." }],
          basiskennis: [{ onderwerp: "Niet hoogste", uitleg: "Mediaan ≠ maximum. Maximum is altijd de hoogste; mediaan is de middelste." }],
          niveaus: { basis: "Mediaan = middelste. A.", simpeler: "Zet alle inkomens op rij. Het inkomen IN HET MIDDEN = mediaan. Helft minder, helft meer. = A.", nogSimpeler: "Middelste = A." },
        },
      },
      {
        q: "Een **Lorenz-curve** dichtbij de diagonaal betekent:",
        options: ["Inkomens zijn relatief gelijk verdeeld", "Inkomens zijn zeer ongelijk", "Niemand verdient iets", "Alle inkomens zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Hoe schever, hoe ongelijker.", "Gemiddeld is wel positief.", "Op de diagonaal = perfect gelijk; dichtbij = bijna gelijk."],
        uitlegPad: {
          stappen: [{ titel: "Diagonaal = gelijk", tekst: "De diagonaal is de lijn van perfecte gelijkheid (10% mensen = 10% inkomen). Hoe DICHTER de werkelijke curve bij de diagonaal, hoe GELIJKER de verdeling." }],
          woorden: [{ woord: "Lorenz-curve", uitleg: "Grafiek die laat zien welk % van de bevolking welk % van het inkomen heeft." }, { woord: "diagonaal", uitleg: "Lijn van linksonder naar rechtsboven — perfecte gelijkheid." }],
          theorie: "Bij PERFECTE gelijkheid: 50% van de mensen heeft 50% van het inkomen. Lijn loopt langs diagonaal. Bij ongelijkheid: 50% van de mensen heeft maar 20% van het inkomen — curve buigt naar onderen-rechts.",
          voorbeelden: [{ type: "NL", tekst: "NL heeft Gini ~0,28, Lorenz vrij dicht bij diagonaal — relatief gelijk." }, { type: "ZA", tekst: "Zuid-Afrika Gini ~0,63, Lorenz ver onder diagonaal — zeer ongelijk." }],
          basiskennis: [{ onderwerp: "Curve onder diagonaal", uitleg: "De curve loopt altijd ONDER de diagonaal. Hoe verder eronder, hoe schever." }],
          niveaus: { basis: "Bij diagonaal = gelijk. A.", simpeler: "Diagonaal = perfecte gelijkheid. Dichterbij = bijna gelijk. = A.", nogSimpeler: "Dichtbij = gelijk = A." },
        },
      },
      {
        q: "Een land heeft **Gini = 0,55**. Wat zegt dat?",
        options: ["Aanzienlijke ongelijkheid", "Perfect gelijk", "Iedereen heeft hetzelfde", "Geen mensen meer"],
        answer: 0,
        wrongHints: [null, "Gini 0 = perfect gelijk.", "Tegenovergesteld.", "Onzin-antwoord."],
        uitlegPad: {
          stappen: [{ titel: "Gini-schaal", tekst: "Gini 0 = perfect gelijk (iedereen evenveel). Gini 1 = volledig ongelijk (1 persoon heeft alles). 0,55 ligt richting de bovenkant — aanzienlijke ongelijkheid." }],
          woorden: [{ woord: "Gini-coëfficient", uitleg: "Maatstaf voor inkomensongelijkheid op schaal 0 (gelijk) tot 1 (volledig ongelijk)." }],
          theorie: "Gini-referenties: NL ~0,28 (relatief gelijk), Duitsland ~0,30, VS ~0,40 (ongelijker), Brazilië ~0,50, Zuid-Afrika ~0,63 (extreem ongelijk). 0,55 = duidelijke ongelijkheid.",
          voorbeelden: [{ type: "vergelijking", tekst: "Gini 0,28 (NL) → curve dichtbij diagonaal. Gini 0,55 → curve ver onder diagonaal." }],
          basiskennis: [{ onderwerp: "Niet 'perfect gelijk'", uitleg: "Perfect gelijk = Gini 0. Hogere getallen = ongelijker." }],
          niveaus: { basis: "0,55 is hoog = ongelijk. A.", simpeler: "Gini 0 = perfect gelijk. Gini 1 = uiterst ongelijk. 0,55 is meer dan de helft naar ongelijk = aanzienlijk ongelijk. = A.", nogSimpeler: "Hoog = ongelijk = A." },
        },
      },
      {
        q: "Welke maatregel **vermindert inkomensongelijkheid**?",
        options: ["Progressieve belasting + toeslagen voor lage inkomens", "Belasting verlagen voor rijken", "Minimumloon afschaffen", "Geen toeslagen meer"],
        answer: 0,
        wrongHints: [null, "Vergroot ongelijkheid.", "Vergroot ongelijkheid.", "Vergroot ongelijkheid."],
        uitlegPad: {
          stappen: [{ titel: "Wat verkleint verschil?", tekst: "Progressieve belasting = rijken betalen MEER % belasting. Toeslagen = lagen krijgen iets extra. Beide trekken de uitersten naar elkaar toe → ongelijkheid daalt." }],
          woorden: [{ woord: "progressieve belasting", uitleg: "Tarief stijgt mee met het inkomen — hoe meer je verdient, hoe hoger % belasting." }, { woord: "nivellering", uitleg: "Inkomensverschillen KLEINER maken." }],
          theorie: "Twee logica's: (1) belasting bij rijken weghalen verlaagt hun inkomen, (2) toeslagen verhogen het inkomen van lagen. Resultaat: nivellering. De andere opties doen het tegenovergestelde (denivellering).",
          voorbeelden: [{ type: "NL", tekst: "NL: IB-schijven 37%-49% (progressief) + zorg/huur/kindertoeslag. Resultaat: lage Gini ~0,28." }],
          basiskennis: [{ onderwerp: "Twee kanten", uitleg: "Effectieve nivellering komt van TWEE kanten: belasting UP voor hoog + steun voor laag. Eén kant alleen werkt minder." }],
          niveaus: { basis: "Progressief + toeslagen = nivellering. A.", simpeler: "Rijken meer belasting + lagen meer toeslag = verschillen kleiner = inkomensongelijkheid omlaag. = A.", nogSimpeler: "Beide = A." },
        },
      },
      {
        q: "Waarom verdient een **arts** vaak meer dan een **verkoper**?",
        options: ["Schaarste van vaardigheden + lange opleiding", "Toeval", "Artsen werken minder", "Verkopers willen niet meer"],
        answer: 0,
        wrongHints: [null, "Niet toeval — markt-mechanisme.", "Vaak juist meer uren.", "Loon wordt door markt + werkgever bepaald."],
        uitlegPad: {
          stappen: [{ titel: "Markt voor arbeid", tekst: "Artsen zijn SCHAARS (lange opleiding, niet iedereen kan het). Vraag is hoog, aanbod laag → hoog loon. Verkopers zijn er veel — markt biedt minder hoog." }],
          woorden: [{ woord: "schaarste van arbeid", uitleg: "Weinig mensen hebben deze vaardigheden — vraag > aanbod → hoog loon." }, { woord: "opleidingsinvestering", uitleg: "Jaren studeren = uitgestelde inkomsten + studieschuld → moet later worden gecompenseerd met hoger loon." }],
          theorie: "Lonen worden bepaald door vraag-en-aanbod op de arbeidsmarkt. Schaarste, opleiding, ervaring, verantwoordelijkheid en sector bepalen samen het loon. Niet toeval.",
          voorbeelden: [{ type: "schaars", tekst: "Arts (8+ jaar opleiding), IT-architect, advocaat → hoog loon." }, { type: "minder schaars", tekst: "Verkoper, kassier, schoonmaker → lager loon (veel aanbod)." }],
          basiskennis: [{ onderwerp: "Geen waardeoordeel", uitleg: "Hoger loon ≠ 'belangrijker werk'. Verkopers/schoonmakers zijn onmisbaar, maar markt biedt minder doordat aanbod groter is." }],
          niveaus: { basis: "Schaarste + opleiding = hoger loon. A.", simpeler: "Weinig artsen + lange opleiding nodig = werkgevers moeten meer betalen. Verkopers zijn er veel = lager loon. = A.", nogSimpeler: "Schaarste = A." },
        },
      },
      {
        q: "Wat is het verschil tussen **gemiddelde** en **mediane** inkomen?",
        options: ["Gemiddelde wordt door enkele extremen omhoog getrokken", "Geen verschil", "Mediaan is altijd hoger", "Gemiddelde is voor mannen, mediaan voor vrouwen"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Gemiddelde is meestal hoger.", "Geen geslacht-onderscheid."],
        uitlegPad: {
          stappen: [{ titel: "Twee maatstaven", tekst: "Gemiddelde = alle inkomens optellen + delen door aantal. Mediaan = middelste in gesorteerde rij. Extreem hoge inkomens trekken het GEMIDDELDE op, maar de MEDIAAN blijft gelijk." }],
          woorden: [{ woord: "gemiddelde", uitleg: "Som / aantal. Gevoelig voor extremen." }, { woord: "mediaan", uitleg: "Middelste waarde. Robuust tegen extremen." }],
          theorie: "Voorbeeld: een CEO van €10mln onder 9 mensen met €30k verandert: GEMIDDELDE springt van €30k naar €1mln. MEDIAAN blijft €30k. Daarom gebruiken overheden vaak mediaan voor 'modaal inkomen NL'.",
          voorbeelden: [{ type: "NL", tekst: "NL gemiddelde inkomen ~€42k, mediaan ~€36k. Verschil van €6k door enkele zeer rijken." }],
          basiskennis: [{ onderwerp: "Welke nemen?", uitleg: "Voor 'de meeste mensen' → mediaan. Voor totale opbrengst belasting → gemiddelde." }],
          niveaus: { basis: "Extremen trekken gemiddelde op. A.", simpeler: "Gemiddelde wordt door enkele heel-hoge inkomens omhoog getrokken. Mediaan blijft eerlijk. = A.", nogSimpeler: "Extremen = A." },
        },
      },
    ],
  },
  // ─── Stap 5: Welvaart, inflatie en koopkracht ─────────────
  {
    title: "Welvaart, inflatie en koopkracht",
    explanation: "**Welvaart** = in hoeverre kun je behoeften vervullen.\n• **Welvaart in enge zin**: alleen materiële zaken (geld, spullen)\n• **Welvaart in ruime zin**: ook gezondheid, milieu, vrije tijd, veiligheid, geluk\n\n**Inflatie** = prijzen stijgen gemiddeld. Het CBS meet dit met de **Consumentenprijsindex (CPI)**:\n• 2023 = basisjaar → CPI = 100\n• 2024: CPI = 104 → 4% inflatie\n• 2025: CPI = 108 → 8% sinds basisjaar\n\n**Koopkracht** = hoeveel je kunt kopen voor je inkomen.\n• Loon stijgt 2%, prijzen stijgen 4% → koopkracht **daalt** ~2%\n• Loon stijgt 5%, prijzen stijgen 2% → koopkracht **stijgt** ~3%\n\n**Reële vs nominale loonstijging**:\n• Nominaal = wat in euro's op je strookje verandert (bv. +3%)\n• Reëel = je echte koopkracht (bv. nominaal +3% min inflatie 2% = +1% reëel)\n\n**Voorbeelden CPI per consumptiepost**:\n• Energie steeg in 2022 met +50% → grote impact op huishoudens\n• Voedsel: ~10% in 2023\n• Diensten (kapper, restaurant): ~5%/jaar gemiddeld\n\n**Waarom inflatie?**\n• Energieprijzen (gas, olie) stijgen\n• Te veel geld in omloop\n• Krapte arbeidsmarkt → hogere lonen → hogere prijzen\n• Verstoring aanbod (oorlog, pandemie)\n\n**Deflatie** = prijzen dalen. Klinkt goed, maar mensen stellen aankopen uit (wachten tot het goedkoper is) → economie krimpt.\n\n**ECB-doel**: inflatie ~2% per jaar (gezond niveau).",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PRIJS BROOD DOOR DE TIJD</text>
<rect x="50" y="40" width="40" height="100" fill="${COLORS.geld}" opacity="0.5"/>
<text x="70" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2010</text>
<text x="70" y="170" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">€1,50</text>
<rect x="120" y="55" width="40" height="85" fill="${COLORS.warm}" opacity="0.5"/>
<text x="140" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2018</text>
<text x="140" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">€2,00</text>
<rect x="190" y="65" width="40" height="75" fill="${COLORS.oranje}" opacity="0.5"/>
<text x="210" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2023</text>
<text x="210" y="170" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">€2,50</text>
<rect x="260" y="55" width="40" height="85" fill="${COLORS.aanbod}" opacity="0.6"/>
<text x="280" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2026</text>
<text x="280" y="170" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">€2,80</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">+87% in 16 jaar = inflatie</text>
</svg>`,
    checks: [
      {
        q: "Je inkomen stijgt **3%**, prijzen stijgen **5%**. Wat gebeurt met je koopkracht?",
        options: ["Daalt met ongeveer 2%", "Stijgt met 3%", "Stijgt met 8%", "Blijft gelijk"],
        answer: 0,
        wrongHints: [null, "Loon wel hoger, maar prijzen sneller.", "Niet optellen.", "Alleen gelijk als beide percentages gelijk zijn."],
        uitlegPad: {
          stappen: [{ titel: "Vuistregel", tekst: "Reële verandering ≈ nominale loonstijging − inflatie. +3% − 5% = −2% → koopkracht daalt." }],
          woorden: [{ woord: "koopkracht", uitleg: "Hoeveel je echt kan kopen voor je geld. Daalt als prijzen sneller stijgen dan loon." }, { woord: "reëel", uitleg: "Gecorrigeerd voor inflatie." }],
          theorie: "Twee getallen vergelijken: stijgt loon HARDER dan prijzen → koopkracht UP. Stijgt loon MINDER hard → koopkracht DOWN. Hier: 3% < 5% → −2%.",
          voorbeelden: [{ type: "stijging", tekst: "Vorig jaar verdiende je €1.000, kocht je boodschappen €100. Nu €1.030. Boodschappen kosten €105. Je hebt 1030/105 ≈ 9,8 mandjes (was 10) → −2%." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Inflatie + loonstijging optellen is FOUT. Aftrek je inflatie van loonstijging." }],
          niveaus: { basis: "3% − 5% = −2%. A.", simpeler: "Loon +3%, prijzen +5%. Prijzen winnen → je houdt minder over. ~2% minder. = A.", nogSimpeler: "Daalt 2% = A." },
        },
      },
      {
        q: "Wat meet het **CPI**?",
        options: ["De gemiddelde prijsstijging van consumentengoederen", "De koopkracht per persoon", "Het totaal inkomen in NL", "Werkloosheidscijfer"],
        answer: 0,
        wrongHints: [null, "Koopkracht volgt UIT CPI.", "Dat is BBP.", "Werkloosheid is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Wat staat in de letters?", tekst: "CPI = Consumenten-Prijs-Index. Het meet hoeveel duurder boodschappen + woonlasten + diensten + transport gemiddeld geworden zijn." }],
          woorden: [{ woord: "CPI", uitleg: "Consumentenprijsindex. Maatstaf voor inflatie. Basisjaar = 100." }, { woord: "consumentengoederen", uitleg: "Producten die huishoudens kopen: voedsel, kleding, vervoer, energie, diensten." }],
          theorie: "CBS meet maandelijks een 'mandje' van ~120.000 prijzen door heel NL. Daar komt CPI uit. Stijging CPI = inflatie.",
          voorbeelden: [{ type: "berekening", tekst: "Mandje boodschappen 2023: €100. Zelfde mandje 2024: €104. CPI 2024 = 104 → 4% inflatie." }],
          basiskennis: [{ onderwerp: "Niet BBP", uitleg: "BBP = totale productie van een land. CPI = prijspeil. Twee verschillende dingen." }],
          niveaus: { basis: "CPI = prijsstijging consumentengoederen. A.", simpeler: "CPI meet hoe duur boodschappen/wonen/vervoer gemiddeld worden. Stijgt CPI = prijzen omhoog = inflatie. = A.", nogSimpeler: "Prijzen = A." },
        },
      },
      {
        q: "**CPI 2025 = 108** (basis 2023 = 100). Hoeveel zijn de prijzen gestegen sinds 2023?",
        options: ["8%", "108%", "0,8%", "1,08%"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te klein.", "Dat is de factor (1,08), niet het percentage."],
        uitlegPad: {
          stappen: [{ titel: "Verschil met basisjaar", tekst: "Basis 2023 = 100. 2025 = 108. Verschil: 108 − 100 = 8. Dat is 8% van 100 → prijzen 8% gestegen." }],
          woorden: [{ woord: "indexcijfer", uitleg: "Getal dat verandering laat zien t.o.v. basisjaar (100). 108 = 8% boven basis." }],
          theorie: "Formule: (CPI_nieuw − CPI_basis) / CPI_basis × 100% = stijging%. Hier: (108 − 100) / 100 × 100% = 8%.",
          voorbeelden: [{ type: "berekening", tekst: "Mandje 2023: €100. Mandje 2025: €108. Dat is €8 / €100 = 8%." }],
          basiskennis: [{ onderwerp: "Niet 108%", uitleg: "108 is het INDEXCIJFER (inclusief basis). De STIJGING is 8%, niet 108%." }],
          niveaus: { basis: "108 − 100 = 8%. A.", simpeler: "Basis is 100. Nu 108. Verschil 8. Op 100 is dat 8% gestegen. = A.", nogSimpeler: "8 = 8% = A." },
        },
      },
      {
        q: "Wat is **welvaart in ruime zin**?",
        options: ["Inkomen + gezondheid + milieu + vrije tijd", "Alleen inkomen", "Alleen gezondheid", "Alleen vakantiedagen"],
        answer: 0,
        wrongHints: [null, "Inkomen alleen = enge zin.", "Gezondheid is onderdeel.", "Vrije tijd is onderdeel."],
        uitlegPad: {
          stappen: [{ titel: "Smal vs breed", tekst: "Enge zin = ALLEEN materiële welvaart (geld, spullen, BBP). Ruime zin = ALLES dat je leven beter maakt (gezondheid, milieu, veiligheid, vrije tijd, geluk)." }],
          woorden: [{ woord: "welvaart enge zin", uitleg: "Materieel: inkomen + bezittingen + BBP." }, { woord: "welvaart ruime zin", uitleg: "Materieel + immaterieel: gezondheid, milieu, sociale relaties." }],
          theorie: "BBP meet ENGE welvaart. RUIME welvaart wordt gemeten met andere maten (HDI, Better Life Index, Brede Welvaart-monitor CBS).",
          voorbeelden: [{ type: "verschil", tekst: "Land A: €40k BBP, slechte lucht, lange werkdagen. Land B: €30k BBP, schone lucht, veel vrije tijd. A = rijker (enge zin). B = wellicht 'beter leven' (ruime zin)." }],
          basiskennis: [{ onderwerp: "Niet enkel één", uitleg: "Ruime zin omvat MEERDERE dimensies, niet enkel één. Inkomen blijft erin zitten, plus extra." }],
          niveaus: { basis: "Meerdere dimensies = ruime zin. A.", simpeler: "Ruime zin = breder dan alleen geld. Ook gezondheid, milieu, vrije tijd, geluk. = A.", nogSimpeler: "Breed = A." },
        },
      },
      {
        q: "Wat is **deflatie**?",
        options: ["Prijzen dalen gemiddeld", "Prijzen stijgen", "Lonen dalen", "Geen prijsverandering"],
        answer: 0,
        wrongHints: [null, "Dat is inflatie.", "Lonen ≠ prijzen.", "Dan zou inflatie 0 zijn."],
        uitlegPad: {
          stappen: [{ titel: "Tegenovergesteld van inflatie", tekst: "Inflatie = prijzen STIJGEN. Deflatie = prijzen DALEN. CPI gaat omlaag." }],
          woorden: [{ woord: "deflatie", uitleg: "Gemiddelde DALING van prijzen. Tegenover-gesteld van inflatie." }, { woord: "inflatie", uitleg: "Gemiddelde STIJGING van prijzen." }],
          theorie: "Deflatie klinkt aantrekkelijk (boodschappen worden goedkoper!) maar is gevaarlijk: mensen wachten met aankopen ('volgende maand nog goedkoper'), economie krimpt, banen verdwijnen. ECB streeft naar +2% inflatie, niet 0% of −%.",
          voorbeelden: [{ type: "Japan 1990s", tekst: "Japan had jarenlang deflatie in jaren '90 → 'verloren decennium' van trage groei." }],
          basiskennis: [{ onderwerp: "Niet lonen", uitleg: "Deflatie gaat over PRIJZEN, niet lonen. Lonen kunnen los van prijzen veranderen." }],
          niveaus: { basis: "Prijzen DALEN. A.", simpeler: "Inflatie = prijzen omhoog. Deflatie = prijzen omlaag. = A.", nogSimpeler: "Omlaag = A." },
        },
      },
      {
        q: "Wat is het verschil tussen **nominale** en **reële** loonstijging?",
        options: ["Reëel = nominale stijging min inflatie (echte koopkracht)", "Geen verschil", "Nominaal is altijd hoger dan reëel", "Reëel is voor mannen"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Nominaal kan ook lager zijn (bij hoge inflatie).", "Geen geslacht-onderscheid."],
        uitlegPad: {
          stappen: [{ titel: "Twee verschillende metingen", tekst: "Nominaal = wat in EURO'S op je strookje verandert (+3%). Reëel = wat je echt meer KAN KOPEN (+3% − 2% inflatie = +1% reëel)." }],
          woorden: [{ woord: "nominaal", uitleg: "In geldbedragen, zonder rekening te houden met inflatie." }, { woord: "reëel", uitleg: "Gecorrigeerd voor inflatie. Vertelt over werkelijke koopkracht." }],
          theorie: "Formule: reëel ≈ nominaal − inflatie. Reëel kan POSITIEF (je gaat erop vooruit) of NEGATIEF (achteruit) zijn. Soms is nominaal positief maar reëel negatief — dat voelen huishoudens als 'we hebben meer geld, maar kunnen minder kopen'.",
          voorbeelden: [{ type: "2022", tekst: "NL-lonen +3,5% nominaal. Inflatie ~10%. Reëel −6,5% — iedereen voelde zich armer ondanks loonstijging." }],
          basiskennis: [{ onderwerp: "Beide kunnen + en −", uitleg: "Nominaal is niet 'altijd hoger'. Bij hyperinflatie kan nominaal +50% en reëel −20% zijn." }],
          niveaus: { basis: "Reëel = nominaal − inflatie. A.", simpeler: "Nominaal = euro's op papier. Reëel = wat je daar echt voor kan kopen na inflatie. = A.", nogSimpeler: "Min inflatie = A." },
        },
      },
    ],
  },
  // ─── Stap 6: BBP en welvaart vs welzijn ─────────────────
  {
    title: "BBP — meet welvaart, niet welzijn",
    explanation: "**BBP (Bruto Binnenlands Product)** = totale waarde van alles wat in een jaar in Nederland wordt geproduceerd.\n\nNL BBP ~€1.000 miljard/jaar.\n\nBBP is dé maatstaf voor **economische welvaart**.\n\n**BBP per hoofd** = BBP / aantal inwoners.\nNL: ~€56.000 per persoon.\nMonaco: ~€200.000 per persoon (extreem hoog).\nEthiopië: ~€1.000 per persoon.\n\n**Hoe wordt BBP gemeten?** Drie kanten — geven hetzelfde antwoord:\n• **Productie**: alle toegevoegde waarde\n• **Inkomen**: alle lonen, winsten, rentes\n• **Bestedingen**: consumptie + investeringen + overheid + (export-import)\n\n**Beperkingen van BBP**:\n• ✗ **Vrijwilligerswerk** telt niet mee (geen geldstroom)\n• ✗ **Huishoudwerk** telt niet (oma die op kleinkinderen past)\n• ✗ **Zwart geld** telt niet (informele economie)\n• ✗ **Milieuschade** telt niet (vervuiling = geen aftrek)\n• ✗ **Geluk en gezondheid** komen er niet in voor\n\n**Welvaart vs welzijn**:\n• **Welvaart** = materieel, in geld uitdrukbaar (wat BBP meet)\n• **Welzijn** = bredere kwaliteit van leven (hoe je je voelt)\n\n**Alternatieve indices**:\n• **HDI** (Human Development Index): inkomen + onderwijs + levensverwachting\n• **Better Life Index** (OESO): 11 dimensies, ook werk-privé balans\n• **Gross National Happiness** (Bhutan): geluk-meting\n\n**Voorbeeld 2 landen vergelijken**:\n• Land A: BBP/hoofd €40.000, levensverwachting 75, gelukscore 6/10\n• Land B: BBP/hoofd €30.000, levensverwachting 82, gelukscore 8/10\n→ Land A 'rijker', maar B heeft mogelijk meer **welzijn**.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WAT MEET BBP?</text>
<rect x="20" y="40" width="280" height="32" rx="6" fill="rgba(105,240,174,0.15)" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="59" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">✓ WAT BBP MEET</text>
<text x="160" y="69" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">betaalde productie · loon · winst · belasting</text>
<rect x="20" y="80" width="280" height="65" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="160" y="98" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">✗ WAT BBP NIET MEET</text>
<text x="160" y="113" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrijwilligerswerk · huishoudwerk · zwart geld</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">milieuschade · geluk · gezondheid</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">→ welvaart ≠ welzijn</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">Alternatief: HDI, Better Life Index</text>
</svg>`,
    checks: [
      {
        q: "Wat is **BBP** in eenvoudige bewoording?",
        options: ["Totale waarde van alle productie in NL in 1 jaar", "Belasting per Nederlander", "Bijbaan + Pensioen Beleid", "Brutoloon van iedereen samen"],
        answer: 0,
        wrongHints: [null, "Geen belasting-term.", "Geen Nederlandse term.", "Bruto loon is een onderdeel, maar BBP omvat ook winst, belasting, etc."],
        uitlegPad: {
          stappen: [{ titel: "BBP = totale productie", tekst: "Bruto Binnenlands Product = ALLES wat in NL geproduceerd wordt in 1 jaar, opgeteld in euro's. NL: ~€1.000 miljard." }],
          woorden: [{ woord: "BBP", uitleg: "Bruto Binnenlands Product. Totale waarde productie in 1 jaar." }, { woord: "productie", uitleg: "Alles wat gemaakt + geleverd wordt: goederen + diensten." }],
          theorie: "BBP meet drie kanten van dezelfde munt: (1) wat wordt geproduceerd, (2) wie krijgt het inkomen, (3) wie geeft het uit. Drie methodes leveren hetzelfde antwoord — daarom betrouwbaar.",
          voorbeelden: [{ type: "NL", tekst: "NL ~€1.000 mrd BBP / 17 mln inwoners = €56k per hoofd." }, { type: "VS", tekst: "VS ~$27 biljoen BBP / 333 mln = $81k per hoofd." }],
          basiskennis: [{ onderwerp: "Belasting ≠ BBP", uitleg: "Belasting is een DEEL van BBP, niet BBP zelf. Idem brutoloon — slechts een component." }],
          niveaus: { basis: "BBP = totale productie. A.", simpeler: "Alles wat NL in 1 jaar produceert, in euro's = BBP. = A.", nogSimpeler: "Totale productie = A." },
        },
      },
      {
        q: "Wat telt **NIET mee** in het BBP?",
        options: ["Vrijwilligerswerk in een buurthuis", "Loon van een leraar", "Huur van een woning", "Verkoop van een auto"],
        answer: 0,
        wrongHints: [null, "Loon = inkomen, telt mee.", "Huur = vermogensinkomen, telt mee.", "Verkoop = transactie, telt mee."],
        uitlegPad: {
          stappen: [{ titel: "Geen geldstroom = geen BBP", tekst: "BBP telt alleen wat in GELD wordt verhandeld. Vrijwilligers krijgen niks → geen geldstroom → telt niet mee, ook al is het waardevol werk." }],
          woorden: [{ woord: "informele economie", uitleg: "Werk zonder factuur of loon (vrijwilligerswerk, huishoudwerk, oma die past) — economisch waardevol maar niet in BBP." }],
          theorie: "BBP-blinde vlekken: vrijwilligers, huishouden, mantelzorg, zwart werk, milieuschade. Een buurthuis 1 dag per week schoonmaken telt evenveel als 'thuis koffie drinken' = €0.",
          voorbeelden: [{ type: "in BBP", tekst: "Leraar krijgt loon → BBP. Huurder betaalt huur → BBP. Auto-verkoop → BBP." }, { type: "niet in BBP", tekst: "Vrijwilliger bij buurthuis, oma die op kleinkind past, jij die de afwas doet." }],
          basiskennis: [{ onderwerp: "Daarom kritiek", uitleg: "Hierom kritiek op BBP als enige maatstaf — sluit veel waarde uit." }],
          niveaus: { basis: "Vrijwilligerswerk = geen geld = geen BBP. A.", simpeler: "Geen factuur, geen loon → BBP telt 't niet. Vrijwilligerswerk is gratis = niet in BBP. = A.", nogSimpeler: "Gratis = niet in BBP = A." },
        },
      },
      {
        q: "**BBP per hoofd** vergelijkt:",
        options: ["Welvaart tussen landen (totaal BBP / aantal inwoners)", "Inkomen van rijken", "Belasting per persoon", "Aantal banen per persoon"],
        answer: 0,
        wrongHints: [null, "Niet specifiek rijken.", "Niet belasting.", "Geen banen-cijfer."],
        uitlegPad: {
          stappen: [{ titel: "Wat is de formule?", tekst: "BBP per hoofd = totaal BBP / aantal inwoners. Geeft een 'gemiddelde welvaart per persoon'. Handig om landen van verschillende grootte te vergelijken." }],
          woorden: [{ woord: "BBP per hoofd", uitleg: "BBP gedeeld door bevolking. Maat voor gemiddelde welvaart in een land." }],
          theorie: "Waarom per hoofd? Totaal BBP van China is groter dan dat van Zwitserland, maar Zwitserland heeft veel hogere welvaart PER PERSOON. Per-hoofd-cijfer corrigeert daarvoor.",
          voorbeelden: [{ type: "vergelijking", tekst: "NL ~€56k per hoofd. India ~€2,5k per hoofd. NL totaal BBP kleiner dan India, maar per hoofd 22x hoger." }],
          basiskennis: [{ onderwerp: "Niet inkomen van rijken", uitleg: "Per hoofd is GEMIDDELDE. Zegt niets over verdeling. Lorenz/Gini meten verdeling." }],
          niveaus: { basis: "BBP / inwoners. A.", simpeler: "Totale productie van land delen door aantal mensen. Geeft gemiddelde welvaart per persoon. = A.", nogSimpeler: "Per persoon = A." },
        },
      },
      {
        q: "Wat is het verschil tussen **welvaart en welzijn**?",
        options: ["Welvaart = materieel, welzijn = bredere kwaliteit van leven", "Geen verschil", "Welvaart is voor rijken", "Welzijn is alleen gezondheid"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Welvaart geldt voor iedereen.", "Welzijn is breder."],
        uitlegPad: {
          stappen: [{ titel: "Materieel vs breder", tekst: "Welvaart = wat je in EURO'S kan uitdrukken (BBP, inkomen, bezit). Welzijn = hoe je je echt voelt (geluk, gezondheid, vrije tijd, sociale relaties)." }],
          woorden: [{ woord: "welvaart", uitleg: "Materiële zijde van een goed leven — meetbaar in geld." }, { woord: "welzijn", uitleg: "Bredere kwaliteit van leven — niet altijd in geld te vangen." }],
          theorie: "Hoog BBP correleert vaak met welzijn (rijke landen leven langer + gezonder), maar niet altijd. Sommige landen 'kopen' welvaart ten koste van milieu/stress/lange werkdagen → welzijn daalt.",
          voorbeelden: [{ type: "USA-NL", tekst: "VS heeft hoger BBP/hoofd dan NL, maar NL scoort hoger op Better Life Index (werk-privé balans, gezondheidszorg, geluk)." }],
          basiskennis: [{ onderwerp: "Welzijn is BREDER", uitleg: "Welzijn omvat gezondheid, milieu, vrije tijd, sociale relaties — niet alleen gezondheid." }],
          niveaus: { basis: "Welvaart materieel, welzijn breder. A.", simpeler: "Welvaart = geld + spullen. Welzijn = breder: gezondheid, plezier, milieu. = A.", nogSimpeler: "Geld vs breder = A." },
        },
      },
      {
        q: "Wat meet de **HDI**?",
        options: ["Inkomen + onderwijs + levensverwachting", "Alleen BBP", "Aantal toeristen", "Hoeveel auto's er rijden"],
        answer: 0,
        wrongHints: [null, "BBP is enkel inkomen — HDI breder.", "Toerisme is aparte indicator.", "Niet HDI."],
        uitlegPad: {
          stappen: [{ titel: "HDI = drie dimensies", tekst: "Human Development Index combineert: (1) inkomen per hoofd, (2) onderwijs (gemiddelde + verwachte schooljaren), (3) levensverwachting." }],
          woorden: [{ woord: "HDI", uitleg: "Human Development Index. VN-maat voor menselijke ontwikkeling, 0 (laag) tot 1 (hoog)." }],
          theorie: "HDI is een alternatief voor BBP. Een land kan rijk zijn (hoog BBP) maar slechte HDI hebben als onderwijs of gezondheid achterblijft. Norway, NL en Zwitserland scoren hoog (~0,95). Sub-Sahara-Afrika lager.",
          voorbeelden: [{ type: "NL", tekst: "NL HDI ~0,94 (zeer hoog). Niger HDI ~0,40 (zeer laag). NL leeft langer + meer school + hoger inkomen." }],
          basiskennis: [{ onderwerp: "Niet alleen BBP", uitleg: "BBP zit IN HDI (deel 1), maar HDI heeft 2 extra factoren." }],
          niveaus: { basis: "3 dimensies inkomen + school + leven. A.", simpeler: "HDI combineert: hoe rijk, hoe goed onderwijs, hoe lang mensen leven. = A.", nogSimpeler: "Inkomen+school+leven = A." },
        },
      },
      {
        q: "Een land heeft **hoog BBP** maar veel milieuvervuiling. Wat zegt dat?",
        options: ["Welvaart is hoog, maar welzijn lager dan BBP suggereert", "Welzijn is automatisch hoog", "Het BBP is fout gemeten", "Milieu telt niet voor welvaart"],
        answer: 0,
        wrongHints: [null, "Hoog BBP geeft niet automatisch welzijn.", "BBP-meting is consistent — welzijn is breder.", "Milieu telt wel voor welzijn, niet voor BBP."],
        uitlegPad: {
          stappen: [{ titel: "BBP telt vervuiling niet", tekst: "BBP meet PRODUCTIE in geld. Vervuiling kost ook geld, maar wordt NIET afgetrokken van BBP. Een fabriek die rivier verziekt verhoogt BBP (productie) maar verlaagt welzijn." }],
          woorden: [{ woord: "milieuschade", uitleg: "Negatieve effecten van productie op natuur/gezondheid. Niet in BBP verrekend." }],
          theorie: "Dit is een KERNKRITIEK op BBP: het beloont productie ongeacht milieukosten. Daarom roepen onderzoekers om 'groen BBP' of 'Brede Welvaart' indicatoren.",
          voorbeelden: [{ type: "China", tekst: "China heeft enorme BBP-groei + zware luchtvervuiling in steden. BBP-cijfer ziet er mooi uit; gezondheidskosten en levensverwachting laten andere kant zien." }],
          basiskennis: [{ onderwerp: "BBP is consistent", uitleg: "BBP-meting is technisch correct — het MEET niet alles. Geen meetfout." }],
          niveaus: { basis: "BBP hoog, welzijn lager. A.", simpeler: "Hoog BBP = veel productie. Maar veel vervuiling = ongezond + nare omgeving = welzijn lager. = A.", nogSimpeler: "BBP ≠ welzijn = A." },
        },
      },
    ],
  },
  // ─── Stap 7: Inkomensbeleid ──────────────────────────────
  {
    title: "Inkomensbeleid — minimumloon, toeslagen, AOW",
    explanation: "De overheid grijpt in om inkomens **rechtvaardiger** te verdelen. Dit heet **inkomensbeleid**.\n\n**Minimumloon** (per 2026 ~€1.900/mnd bruto voor 21+):\n• Wettelijk laagste loon\n• Voorkomt dat werkgevers extreem lage lonen betalen\n• Geldt vanaf 21 jaar; lager voor jongeren (jeugd-minimumloon)\n\n**Toeslagen** (Belastingdienst):\n• **Zorgtoeslag**: voor zorgverzekeringspremie als inkomen laag is\n• **Huurtoeslag**: bij sociale huurwoning + laag inkomen\n• **Kinderopvangtoeslag**: voor crèche-kosten\n• **Kindgebonden budget**: extra geld voor kinderen\n• **Kinderbijslag**: vast bedrag per kind, ongeacht inkomen\n\n**Uitkeringen** (UWV/gemeente):\n• **AOW**: vanaf pensioenleeftijd (~67), basis-pensioen voor iedereen die in NL gewoond heeft\n• **WW** (Werkloosheidswet): tijdelijk, na ontslag, ~70% van laatste loon\n• **WIA/WGA**: bij arbeidsongeschiktheid\n• **Bijstand**: vangnet als je geen ander inkomen hebt\n\n**Pensioen — 3 pijlers**:\n1. **AOW** (overheid) — basis voor iedereen\n2. **Aanvullend pensioen** (werkgever) — opgebouwd via pensioenfonds tijdens werk\n3. **Eigen pensioenpotje** (zelf sparen, lijfrente)\n\n**Progressieve belasting** als inkomensherverdeler:\n• Lager inkomen → lager percentage belasting\n• Hoger inkomen → hoger percentage\n• → Verschil tussen rijk en arm wordt kleiner\n\n**Effect inkomensbeleid**:\n• NL heeft een van de **meest gelijke inkomensverdelingen** ter wereld (Gini ~0,28)\n• Mede dankzij sterk uitkeringssysteem en progressieve belasting\n• Tradeoff: hogere belasting = minder netto voor wie veel verdient",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">INKOMENSBELEID</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">MINIMUMLOON</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">~€1900 bruto/mnd</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vanaf 21 jaar</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">TOESLAGEN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">zorg · huur · kinderopvang</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">inkomensafhankelijk</text>
<rect x="20" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="123" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">UITKERINGEN</text>
<text x="87" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">AOW · WW · bijstand</text>
<text x="87" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">UWV / gemeente</text>
<rect x="165" y="105" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="123" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">PENSIOEN 3 PIJLERS</text>
<text x="232" y="139" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">AOW · werkgever · eigen</text>
<text x="232" y="151" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">na ~67 jaar</text>
<text x="160" y="195" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">+ progressieve belasting</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">NL: relatief gelijke verdeling, Gini ~0,28</text>
</svg>`,
    checks: [
      {
        q: "Wat is **minimumloon**?",
        options: ["Wettelijk vastgelegd laagste loon dat werkgevers mogen betalen", "Het gemiddelde loon", "Loon van een directeur", "Pensioen-basisbedrag"],
        answer: 0,
        wrongHints: [null, "Gemiddelde is veel hoger.", "Directeur = hoog loon.", "Pensioen is iets anders (AOW)."],
        uitlegPad: {
          stappen: [{ titel: "Wet beschermt loner", tekst: "Minimumloon = WETTELIJKE ondergrens. Werkgever mag niet minder betalen. Beschermt werknemers tegen extreem lage lonen." }],
          woorden: [{ woord: "minimumloon", uitleg: "Wettelijk laagste uurloon/maandloon dat werkgevers mogen betalen. Geldt vanaf 21 jaar; jongeren krijgen jeugd-minimumloon." }],
          theorie: "Bedrag wordt elk half jaar bijgesteld voor inflatie. Per 2026 ~€1.900 bruto/maand voor 21+. Werkgevers MOETEN dit betalen, ook bij oneindig laag-geschoold werk.",
          voorbeelden: [{ type: "praktijk", tekst: "Schoonmaker 21+ heeft recht op €1.900/mnd bruto, ook als werkgever liever €1.500 betaalt." }],
          basiskennis: [{ onderwerp: "Niet gemiddelde", uitleg: "Minimum = ondergrens. Gemiddelde NL-loon ligt rond €42k bruto/jaar (~€3.500/mnd). Veel hoger dan minimum." }],
          niveaus: { basis: "Wettelijk laagste loon. A.", simpeler: "De wet bepaalt het laagste loon dat een werkgever mag betalen. Minder mag niet. = A.", nogSimpeler: "Wettelijk = A." },
        },
      },
      {
        q: "Wie krijgt **AOW**?",
        options: ["Iedereen vanaf pensioenleeftijd (~67) die in NL heeft gewoond", "Alleen mensen die werken", "Alleen ondernemers", "Alleen wie geen vermogen heeft"],
        answer: 0,
        wrongHints: [null, "Niet vereiste werk-status.", "AOW geldt voor iedereen.", "Vermogen geen vereiste."],
        uitlegPad: {
          stappen: [{ titel: "AOW = basis voor IEDEREEN", tekst: "AOW is een basis-pensioen dat IEDEREEN krijgt vanaf de pensioenleeftijd (~67), ongeacht werk-historie of vermogen. Voorwaarde: hier gewoond hebben." }],
          woorden: [{ woord: "AOW", uitleg: "Algemene Ouderdomswet. Basis-pensioen voor iedereen vanaf pensioenleeftijd." }, { woord: "pensioenleeftijd", uitleg: "Leeftijd waarop AOW ingaat. Stijgt mee met levensverwachting (~67 in 2024)." }],
          theorie: "AOW wordt betaald uit de AOW-premie (~17,9%) die werkenden betalen. Het is een omslagsysteem: huidige werkenden financieren huidige gepensioneerden.",
          voorbeelden: [{ type: "iedereen", tekst: "Iemand die alleen huisvrouw was: krijgt AOW. CEO van Shell: krijgt ook AOW. Bedrag is gelijk voor iedereen." }],
          basiskennis: [{ onderwerp: "Niet werk-afhankelijk", uitleg: "AOW kent geen werk-eis (in tegenstelling tot WW). Iedereen die 50 jaar in NL woonde krijgt vol AOW." }],
          niveaus: { basis: "Iedereen vanaf ~67. A.", simpeler: "AOW krijg je gewoon omdat je 67 wordt en hier gewoond hebt. Niet vereiste werk. = A.", nogSimpeler: "Iedereen 67+ = A." },
        },
      },
      {
        q: "Welke toeslag krijg je bij **huur in een sociale woning + laag inkomen**?",
        options: ["Huurtoeslag", "Zorgtoeslag", "Kinderbijslag", "Geen toeslag"],
        answer: 0,
        wrongHints: [null, "Zorgtoeslag is voor zorgkosten.", "Kinderbijslag is voor kinderen.", "Wel toeslag mogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Match toeslag aan kost", tekst: "Elke toeslag dekt een SPECIFIEKE kost. Huur betalen = huurtoeslag. Zorgverzekering betalen = zorgtoeslag. Voor kinderen = kinderbijslag." }],
          woorden: [{ woord: "huurtoeslag", uitleg: "Bijdrage van de overheid in huurkosten als je sociale huur hebt + laag inkomen." }, { woord: "sociale woning", uitleg: "Huurwoning onder een maximale huur (~€880/2024), beheerd door woningcorporatie." }],
          theorie: "Voorwaarden: huurprijs onder grens, inkomen onder bovengrens, huishouden-samenstelling. Hoogte hangt af van huur en inkomen — kan honderden euro's/maand zijn.",
          voorbeelden: [{ type: "praktijk", tekst: "Student huurt sociale woning €600. Inkomen €18.000. Krijgt ~€250/mnd huurtoeslag." }],
          basiskennis: [{ onderwerp: "Pas op", uitleg: "Niet elke huur = huurtoeslag. Particuliere verhuur boven grens = geen recht." }],
          niveaus: { basis: "Huurtoeslag. A.", simpeler: "Huur betalen + laag inkomen → huurtoeslag. = A.", nogSimpeler: "Huur = A." },
        },
      },
      {
        q: "Wat zijn de **3 pijlers van pensioen**?",
        options: ["AOW + werkgevers-pensioen + eigen pensioenpotje", "Brutoloon, nettoloon, vakantiegeld", "Belasting, premie, toeslag", "Werk, vrije tijd, slaap"],
        answer: 0,
        wrongHints: [null, "Geen pensioen-componenten.", "Geen pensioen-componenten.", "Geen economische termen."],
        uitlegPad: {
          stappen: [{ titel: "Drie lagen", tekst: "Pijler 1: AOW van overheid (basis). Pijler 2: aanvullend pensioen via werkgever (opgebouwd in dienst). Pijler 3: eigen sparen/lijfrente (vrijwillig extra)." }],
          woorden: [{ woord: "AOW", uitleg: "Pijler 1: basis-pensioen voor iedereen." }, { woord: "aanvullend pensioen", uitleg: "Pijler 2: bedrag dat werkgever + werknemer samen opbouwen tijdens loopbaan." }, { woord: "lijfrente", uitleg: "Pijler 3: eigen pensioenpotje, vaak via verzekeraar." }],
          theorie: "Waarom 3 pijlers? AOW alleen is te laag om van rond te komen. Werkgevers-pensioen + eigen sparen vullen het aan. Gemiddelde NL pensionado krijgt AOW (~€1.300/mnd) + aanvullend (~€800/mnd) = €2.100/mnd.",
          voorbeelden: [{ type: "iemand zonder pijler 2", tekst: "Zzp'er bouwt geen werkgevers-pensioen. Moet meer sparen in pijler 3 of accepteren lager inkomen op 67." }],
          basiskennis: [{ onderwerp: "Niet bruto/netto", uitleg: "Bruto/netto/vakantiegeld zijn loon-onderdelen, geen pensioen-pijlers." }],
          niveaus: { basis: "AOW + werkgever + eigen. A.", simpeler: "3 lagen pensioen: (1) AOW van overheid, (2) werkgevers-pensioen, (3) eigen sparen. = A.", nogSimpeler: "3 lagen = A." },
        },
      },
      {
        q: "Een student verliest haar bijbaan en heeft geen ander inkomen. Welke uitkering?",
        options: ["Bijstand (vangnet via gemeente)", "AOW", "WW (werkloosheidswet)", "WIA"],
        answer: 0,
        wrongHints: [null, "AOW pas vanaf 67.", "WW vereist eerder werkverleden + minimum aantal weken.", "WIA = arbeidsongeschiktheid."],
        uitlegPad: {
          stappen: [{ titel: "Voor wie welke uitkering?", tekst: "Bijstand = laatste vangnet voor wie GEEN ander inkomen en geen recht op WW/WIA heeft. Studenten met bijbaan komen meestal niet aan WW-uren — bijstand is wat overblijft." }],
          woorden: [{ woord: "bijstand", uitleg: "Vangnet via gemeente voor wie geen ander inkomen heeft. Sociaal minimum." }, { woord: "WW", uitleg: "Tijdelijke uitkering na ontslag — vereist eerder werk + premie-betaling." }, { woord: "WIA", uitleg: "Arbeidsongeschiktheidsuitkering bij ziekte > 2 jaar." }],
          theorie: "Volgorde van vangnet: eerst kijken naar verzekeringen (WW/WIA) → werkverleden? Anders → bijstand via gemeente. Student met klein bijbaantje haalt meestal niet de WW-eis (mín. 26 weken gewerkt).",
          voorbeelden: [{ type: "WW", tekst: "Volwassene 5 jaar in dienst, ontslagen → WW (~70% laatste loon, max 24 mnd)." }, { type: "bijstand", tekst: "Student met bijbaantje (10u/wk) verliest baan → onvoldoende WW-rechten → bijstand." }],
          basiskennis: [{ onderwerp: "Niet AOW", uitleg: "AOW pas vanaf pensioenleeftijd ~67. Student is ver van AOW-leeftijd." }],
          niveaus: { basis: "Bijstand. A.", simpeler: "Student heeft te weinig werkjaren voor WW. Bijstand is het laatste vangnet via gemeente. = A.", nogSimpeler: "Vangnet = A." },
        },
      },
      {
        q: "Hoe maakt **progressieve belasting** inkomens gelijker?",
        options: ["Hoger inkomen → hoger percentage belasting → minder verschil netto", "Iedereen betaalt hetzelfde", "Lagere inkomens betalen meer", "Geen invloed"],
        answer: 0,
        wrongHints: [null, "Dat is vlaktaks.", "Tegenovergesteld.", "Wel grote invloed."],
        uitlegPad: {
          stappen: [{ titel: "Hoe meer, hoe zwaarder", tekst: "Bij progressieve belasting STIJGT het BELASTING-percentage met je inkomen. €30k betaalt 37%, €100k betaalt 49% over hoogste schijf. Resultaat: hoge inkomens leveren relatief meer in." }],
          woorden: [{ woord: "progressieve belasting", uitleg: "Tarief stijgt met inkomen. Hoe hoger je inkomen, hoe hoger % belasting." }, { woord: "vlaktaks", uitleg: "Iedereen betaalt zelfde percentage, ongeacht inkomen. (Tegengesteld aan progressief.)" }],
          theorie: "NL IB-systeem (2024): tot ~€38k = 36,93%. €38k-€73k = 36,93%. Boven €73k = 49,50%. Voor schaalverdeling: rijken betalen relatief meer → netto-verschil tussen rijk en arm wordt kleiner.",
          voorbeelden: [{ type: "rekensom", tekst: "A verdient €30k bruto → ~€11k IB → netto €19k. B verdient €100k → ~€38k IB → netto €62k. Bruto-verschil €70k → netto-verschil €43k. Verkleind door progressie." }],
          basiskennis: [{ onderwerp: "Niet 'lagere betalen meer'", uitleg: "Bij progressief betalen LAGEREN minder %, niet meer. Bij regressief (zoals BTW) dragen lagere inkomens % relatief zwaarder." }],
          niveaus: { basis: "Hoger % bij hoger inkomen. A.", simpeler: "Wie meer verdient, betaalt een groter PERCENTAGE belasting. Dat trekt netto-inkomens dichter naar elkaar toe. = A.", nogSimpeler: "Meer = meer % = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeInkomenWelvaart = {
  id: "pincode-inkomen-welvaart",
  title: "Inkomen en welvaart",
  emoji: "🍞",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 1",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Hoofdstuk 1 van Pincode 7e ed. VMBO-GT 4: schaarste, productiefactoren, inkomen, inkomensverdeling, welvaart/inflatie, BBP, en inkomensbeleid (minimumloon/toeslagen/AOW). 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "inkomen", "welvaart", "schaarste", "behoeften", "primaire behoefte", "secundaire behoefte",
    "vrije goederen", "schaarse goederen", "consumptiegoederen", "kapitaalgoederen",
    "productiefactoren", "arbeid", "natuur", "kapitaal", "ondernemerschap", "vast kapitaal", "vlottend kapitaal",
    "loon", "pacht", "rente", "winst", "dividend",
    "bruto", "netto", "primair inkomen", "secundair inkomen", "besteedbaar inkomen",
    "lorenz", "gini", "mediaan", "inkomensverdeling", "ongelijkheid",
    "inflatie", "koopkracht", "cpi", "consumentenprijsindex", "deflatie", "reëel loon", "nominaal loon",
    "bbp", "bruto binnenlands product", "welzijn", "hdi", "better life",
    "minimumloon", "aow", "ww", "bijstand", "wia",
    "toeslag", "zorgtoeslag", "huurtoeslag", "kinderbijslag", "kindgebonden budget",
    "pensioen", "pensioenfonds", "lijfrente",
    "progressieve belasting", "vlaktaks", "inkomensbeleid",
    "pincode hoofdstuk 1", "pincode hoofdstuk a",
  ],
  chapters,
  steps,
};

export default pincodeInkomenWelvaart;
