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
    explanation: "**Belasting** = verplichte betaling aan de overheid, zonder dat je daar direct iets voor terugkrijgt.\n\n**Twee hoofdsoorten**:\n\n**Directe belastingen** — betaald op basis van wie je bent / wat je verdient.\n• **Inkomstenbelasting (IB)** — over je inkomen\n• **Vennootschapsbelasting (VPB)** — over winst van BV's\n• **Erfbelasting** — bij erven (10%-40% boven vrijstelling)\n• **Schenkbelasting** — bij grote schenkingen\n• **Vermogensbelasting (Box 3)** — over spaargeld + beleggingen boven vrijstelling\n\n**Indirecte belastingen** — zit verstopt in de prijs van iets.\n• **BTW (omzetbelasting)** — bij elke aankoop\n• **Accijns** — alcohol, tabak, brandstof\n• **Motorrijtuigenbelasting** — auto-bezitters\n• **Overdrachtsbelasting** — bij koop huis (2% normaal, 0% starter < 35 jr)\n\n**Premies** — lijkt op belasting, maar bedoeld voor iets specifieks.\n• **AOW-premie** — voor latere ouderdomsuitkering\n• **Zorgverzekeringspremie** — voor zorg\n• **WW-premie** — voor werkloosheidsuitkering\n• Wordt via de loonheffing betaald (WW-premie betaalt de werkgever)\n\n**Verschil belasting vs premie**:\n• **Belasting** → algemene pot van de overheid\n• **Premie** → specifiek doel, je krijgt later iets terug\n\n**Wie int wat?**\n• **Belastingdienst** (Rijksoverheid): IB, BTW, VPB, accijns, etc.\n• **UWV**: keert de WW uit (de premie loopt via de Belastingdienst)\n• **Gemeente**: OZB, hondenbelasting, toeristenbelasting\n• **Provincie**: opcenten op motorrijtuigenbelasting\n• **Waterschap**: waterschapsbelasting\n\n**Geschiedenis kort**:\n• Vroeger: vooral indirecte belasting (op zout, brood, ramen)\n• Nu: vooral inkomstenbelasting + BTW\n• Trend: minder belasting op werk, meer op vervuiling/CO2\n\n**Totaal belastingdruk in NL**: ~38% van BBP.\nVergelijk: Denemarken ~46%, USA ~27%.",
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
        options: ["BTW", "Inkomstenbelasting", "Vennootschapsbelasting", "Erfbelasting"],
        answer: 0,
        wrongHints: [null, "Inkomstenbelasting betaal je over je loon. Betaal je die ook als je iets koopt?", "Vennootschapsbelasting betaalt een BV over haar winst, niet jij als koper.", "Erfbelasting betaal je alleen over een erfenis. Hoe heet de belasting die al in een prijs is verwerkt?"],
        uitlegPad: {
          stappen: [{ titel: "Indirect = in de prijs", tekst: "Bij een aankoop betaal je BTW automatisch — die zit verwerkt in de eindprijs. Daarom 'indirect': je ziet 't niet apart, maar het zit erin." }],
          woorden: [{ woord: "BTW", uitleg: "Belasting Toegevoegde Waarde. 9% (eten/drinken) of 21% (rest). Inbegrepen in prijs." }, { woord: "indirecte belasting", uitleg: "Belasting via aankopen, niet apart aangeslagen." }],
          theorie: "Frisdrank valt onder 9%-tarief (eten/drinken). Glas €3? Dan zit er ~€0,25 BTW in (9% van excl-prijs €2,75). Daarnaast zit er verbruiksbelasting op frisdrank (flink verhoogd in 2024).",
          voorbeelden: [{ type: "frisdrank", tekst: "Glas Cola €3 in café = ~€2,75 excl + €0,25 BTW + horeca-marge." }, { type: "tegenovergesteld", tekst: "IB over loon = direct (je krijgt aanslag). BTW = indirect (zit in prijs)." }],
          basiskennis: [{ onderwerp: "Niet IB/VPB/erf", uitleg: "IB = over loon. VPB = over BV-winst. Erf = bij overlijden. Geen van die zit in frisdrank." }],
          niveaus: { basis: "BTW = indirect.", simpeler: "Bij elke aankoop betaal je BTW automatisch — die zit verstopt in de prijs.", nogSimpeler: "In prijs = BTW" },
        },
      },
      {
        q: "Wat is het verschil tussen **belasting** en **premie**?",
        options: ["Premie is voor een vast doel, belasting niet", "Premie is vrijwillig, belasting is verplicht", "Premie betaal je over bezit, belasting over loon", "Belasting is een vast bedrag, premie een percentage"],
        answer: 0,
        wrongHints: [null, "Ook de AOW-premie is verplicht en gaat automatisch van je loon af. Waarin verschilt premie dan wel?", "Premies en belasting worden allebei over je inkomen berekend. Kijk eens naar waar het geld naartoe gaat.", "Zowel belasting als premie is meestal een percentage van je inkomen. Wat is dan het echte verschil?"],
        uitlegPad: {
          stappen: [{ titel: "Doel maakt verschil", tekst: "Belasting: gaat naar grote pot van Rijk → besteed aan veel dingen (zorg, onderwijs, defensie). Premie: gaat naar SPECIFIEK fonds (AOW, WW) waaruit jij later ontvangt." }],
          woorden: [{ woord: "belasting", uitleg: "Verplichte betaling zonder direct tegenhanger. IB, BTW, VPB." }, { woord: "premie", uitleg: "Verplichte betaling voor specifieke verzekering/voorziening. AOW, WW, zorgverzekering." }],
          theorie: "Praktisch verschil: belasting voelt 'kwijt'. Premie voelt als investering — je krijgt later iets (pensioen, uitkering bij ontslag, zorgvergoeding).",
          voorbeelden: [{ type: "belasting", tekst: "€500 IB-aanslag → naar Rijk → besteed waar regering wil." }, { type: "premie", tekst: "€150 zorgpremie/mnd → naar zorgverzekeraar → terugbetaalt jouw doktersbezoek." }],
          basiskennis: [{ onderwerp: "Geen hoogte-verschil", uitleg: "Premie kan laag of hoog zijn, belasting ook. Verschil zit in BESTEMMING." }],
          niveaus: { basis: "Doel vs algemene pot.", simpeler: "Premie = voor specifiek doel (AOW/zorg). Belasting = voor algemene overheidsuitgaven.", nogSimpeler: "Doel = premie" },
        },
      },
      {
        q: "**AOW-premie** — wat is het?",
        options: ["Een verplichte bijdrage waaruit de AOW betaald wordt", "Een uitkering die je krijgt vanaf de AOW-leeftijd", "Een spaarpot op je eigen naam voor je AOW", "Een belasting die gepensioneerden over hun AOW betalen"],
        answer: 0,
        wrongHints: [null, "Dat is de AOW zelf, die krijg je later. Krijg je een premie, of betaal je hem?", "Het geld komt niet op een rekening op jouw naam. Wat leerde je over het omslagstelsel?", "Wie de AOW-leeftijd heeft bereikt, betaalt juist géén AOW-premie meer. Wie betaalt hem dan?"],
        uitlegPad: {
          stappen: [{ titel: "Pensioen-financiering", tekst: "AOW-premie (~17,9% van loon) wordt automatisch ingehouden. Specifiek voor het AOW-fonds — daaruit krijgt iedereen vanaf pensioenleeftijd basis-pensioen." }],
          woorden: [{ woord: "AOW", uitleg: "Algemene Ouderdomswet. Basis-pensioen voor iedereen vanaf 67 jaar." }, { woord: "omslagstelsel", uitleg: "Huidige werkenden betalen voor huidige gepensioneerden. Niet 'jouw' premie wacht op je." }],
          theorie: "AOW-premie is GEEN belasting (gaat niet naar algemene pot) maar ook geen toeslag (jij betaalt, geen ontvanger). Het is een verzekeringspremie voor het AOW-stelsel.",
          voorbeelden: [{ type: "loonstrook", tekst: "Bruto €3.000 → loonheffing inclusief AOW-premie €600 → netto €2.400. AOW-deel daarvan ~€350." }],
          basiskennis: [{ onderwerp: "Specifiek doel", uitleg: "Premie heeft altijd SPECIFIEK doel (zorg/AOW/WW). Belasting heeft dat niet." }],
          niveaus: { basis: "Premie voor AOW.", simpeler: "AOW-premie = betaling voor het AOW-pensioenstelsel. Heeft specifiek doel = premie.", nogSimpeler: "Premie AOW" },
        },
      },
      {
        q: "**Erfbelasting** — direct of indirect?",
        options: ["Direct: de erfgenaam krijgt zelf een aanslag", "Indirect: de notaris houdt het in en draagt af", "Een heffing: betaling voor een overheidsdienst", "Een premie: het geld gaat naar een vast doel"],
        answer: 0,
        wrongHints: [null, "De notaris helpt bij de erfenis, maar op wiens naam komt de aanslag? En zit erfbelasting in een prijs?", "Bij een heffing zoals leges krijg je iets terug, bijvoorbeeld een paspoort. Krijg je iets terug voor erfbelasting?", "Een premie betaal je voor een vast doel, zoals de AOW. Gaat erfbelasting naar één vast doel?"],
        uitlegPad: {
          stappen: [{ titel: "Direct = wat je krijgt", tekst: "Erfbelasting wordt geheven over wat JIJ erft (boven vrijstelling). Belastingdienst stuurt JOU een aanslag. Direct verbonden aan jouw situatie = directe belasting." }],
          woorden: [{ woord: "erfbelasting", uitleg: "Belasting bij erven boven vrijstelling. Tarief 10%-40% afhankelijk van wie en hoeveel." }, { woord: "directe belasting", uitleg: "Belasting op basis van wie je bent / wat je verdient/erft." }],
          theorie: "Vrijstelling: partner €795k, kinderen €25k, andere €2.658 (2024). Boven vrijstelling: 10% (partner/kinderen) tot 40% (verre familie/vreemden).",
          voorbeelden: [{ type: "kind erft", tekst: "Kind erft €100k → vrijstelling €25k → 10% over €75k = €7.500 erfbelasting." }, { type: "verre familie", tekst: "Neef erft €100k → vrijstelling €2.658 → 30% over €97k = €29k. Veel hoger." }],
          basiskennis: [{ onderwerp: "Niet indirect", uitleg: "Geen prijs van product — direct over je nieuwe vermogen." }],
          niveaus: { basis: "Direct.", simpeler: "Erfbelasting krijg JIJ aangeslagen over wat jij erft. Persoonlijke aanslag = direct.", nogSimpeler: "Direct" },
        },
      },
      {
        q: "Wie int de **OZB** (onroerendezaakbelasting)?",
        options: ["De gemeente", "De Rijksoverheid", "De provincie", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "De OZB gaat over huizen en panden in jouw woonplaats. Welke overheid zit daar het dichtst bij?", "De provincie heft opcenten op de motorrijtuigenbelasting, maar niet de OZB.", "De Belastingdienst int Rijksbelastingen zoals btw en inkomstenbelasting. Hoort de OZB daarbij?"],
        uitlegPad: {
          stappen: [{ titel: "Lokale belasting", tekst: "OZB is een GEMEENTELIJKE belasting — gemeente bepaalt tarief + int het zelf. Andere overheidslagen hebben hun eigen belastingen." }],
          woorden: [{ woord: "OZB", uitleg: "Onroerendezaakbelasting. Gemeentebelasting voor huiseigenaren, op basis van WOZ-waarde." }, { woord: "WOZ-waarde", uitleg: "Gemeentelijke schatting woningwaarde per 1 januari." }],
          theorie: "Wie heft wat? Rijk: IB, BTW, VPB, accijns. Provincie: opcenten MRB. Gemeente: OZB, hondenbelasting, toeristen, parkeer. Waterschap: waterschapsbelasting. Elk eigen bron.",
          voorbeelden: [{ type: "praktijk", tekst: "Huis WOZ €350k × 0,1% gemeentetarief = €350 OZB/jaar op gemeentelijke aanslag." }],
          basiskennis: [{ onderwerp: "Niet Belastingdienst", uitleg: "Belastingdienst is Rijksdienst. OZB is gemeente — eigen aanslag, eigen inning." }],
          niveaus: { basis: "Gemeente.", simpeler: "OZB = gemeentebelasting over huis. Gemeente bepaalt + int.", nogSimpeler: "Gemeente" },
        },
      },
      {
        q: "Hoeveel **belastingdruk** heeft NL ongeveer (% BBP)?",
        options: ["~38%", "~10%", "~55%", "~25%"],
        answer: 0,
        wrongHints: [null, "Met 10% zouden zorg, onderwijs en wegen niet te betalen zijn. Hoeveel is het ongeveer wel?", "Zo hoog is het zelfs in Denemarken en Frankrijk niet. Nederland zit lager.", "Dat is ongeveer het niveau van de Verenigde Staten. Nederland heft meer."],
        uitlegPad: {
          stappen: [{ titel: "~38% BBP NL", tekst: "Totaal belasting + sociale premies = ~38% van NL BBP. Daarmee hoort NL bij Europese middenmoot — niet hoogste, niet laagste." }],
          woorden: [{ woord: "belastingdruk", uitleg: "Totale belasting + premies als % van BBP. Maatstaf voor 'hoe groot' de overheid is." }],
          theorie: "Vergelijking: Denemarken ~46% (een van de hoogste), Zweden ~44%, NL ~38%, Duitsland ~38%, USA ~27%. Verzorgingsstaten zoals NL/Scandinavië hebben hogere belastingdruk dan liberale economieën.",
          voorbeelden: [{ type: "NL", tekst: "BBP ~€1.000 mrd × 38% = ~€380 mrd belasting + premies per jaar." }],
          basiskennis: [{ onderwerp: "Niet 70%/95%", uitleg: "Geen land in EU komt boven 50%. 95% zou betekenen overheid neemt bijna alles — onmogelijk." }],
          niveaus: { basis: "~38%.", simpeler: "Nederland: ongeveer 38% van het BBP is belasting + premies.", nogSimpeler: "38%" },
        },
      },
    ],
  },
  // ─── Stap 2: BTW en accijns ──────────────────────────────
  {
    title: "BTW en accijns — wat je dagelijks betaalt",
    explanation: "**BTW (Belasting Toegevoegde Waarde / omzetbelasting)** wordt geheven op bijna alle verkopen.\n\nNederland heeft **3 tarieven**:\n• **21%** — algemeen (kleding, elektronica, alcohol, koeriersdienst, advies; sinds 2026 ook hotelovernachtingen)\n• **9%** — laag (boodschappen, eten in een restaurant, water, boeken, kapper, OV, bioscoop)\n• **0%** — export (en sommige zorg is helemaal vrijgesteld van btw)\n\n**Voorbeeld 1**: spelcomputer €484 inclusief 21% BTW\n• Prijs zonder BTW: €484 / 1,21 = €400\n• BTW: €84\n\n**Voorbeeld 2**: brood €2,18 inclusief 9% BTW\n• Prijs zonder BTW: €2,18 / 1,09 = €2,00\n• BTW: €0,18\n\n**Wie betaalt en wie int?**\n• **Consument** betaalt BTW (inbegrepen in prijs)\n• **Ondernemer** int BTW + draagt af aan Belastingdienst (per kwartaal)\n• Ondernemer mag eigen BTW-uitgaven (op zakelijke aankopen) aftrekken\n\n**Accijns** = extra belasting bovenop BTW op specifieke producten.\n• **Tabak** (~75% van prijs sigaret = accijns + BTW)\n• **Alcohol** (per liter pure alcohol)\n• **Brandstof** (ruim €0,75 accijns per liter benzine, plus BTW)\n• **Frisdrank** (verbruiksbelasting, flink verhoogd in 2024)\n\n**Waarom accijns?**\n1. **Geld** voor de overheid (miljarden per jaar)\n2. **Ontmoediging** schadelijk gedrag (roken, alcohol, vervuiling)\n3. **Milieu** — hoge accijns op fossiele brandstof helpt energietransitie\n\n**Overdrachtsbelasting**:\n• 2% bij koop eigen woning (was 6% tot 2011)\n• 0% voor starters tot 35 jaar (eenmalig, tot een woningwaarde-grens van ruim €500.000)\n\n**Motorrijtuigenbelasting (MRB)**:\n• Per auto, gebaseerd op gewicht + brandstoftype\n• Provincie-opcenten erbij (verschillen per provincie)\n• Elektrische auto: tot en met 2024 geen MRB; daarna wordt die korting afgebouwd",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BTW + ACCIJNS</text>
<rect x="35" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="75" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="18" font-family="Arial" font-weight="bold">21%</text>
<text x="75" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">algemeen</text>
<text x="75" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">kleding, elektronica</text>
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
        options: ["€272,73", "€260,70", "€309,30", "€300,00"],
        answer: 0,
        wrongHints: [null, "Niet 21% van €330 aftrekken — de 21% gaat over de prijs zónder btw.", "Net niet — €330 is 121% van de prijs zonder btw. Reken terug naar 100%.", "Je deelde door 1,1. Bij 21% btw is de prijs mét btw 121% — waardoor moet je dan delen?"],
        uitlegPad: {
          stappen: [{ titel: "Delen door 1,21", tekst: "Inclusief = excl × 1,21. Andersom: excl = incl / 1,21. €330 / 1,21 = €272,73 zonder BTW. BTW-deel: €330 − €272,73 = €57,27." }],
          woorden: [{ woord: "exclusief BTW", uitleg: "Prijs vóór BTW erbij komt. Wat verkoper zelf overhoudt." }, { woord: "rekentruc", uitleg: "Incl → excl: delen door 1,21 (bij 21%) of 1,09 (bij 9%)." }],
          theorie: "Veelgemaakte fout: 21% van €330 aftrekken = €69,30 → €260,70. FOUT! 21% gaat over het EXCL-bedrag, niet incl. Daarom delen, niet aftrekken.",
          voorbeelden: [{ type: "controle", tekst: "€272,73 × 1,21 = €330. ✓" }],
          basiskennis: [{ onderwerp: "Niet aftrekken", uitleg: "Incl naar excl = DELEN. Niet 21% er afhalen — dat is wiskundig onjuist." }],
          niveaus: { basis: "330 / 1,21 = 272,73.", simpeler: "€330 / 1,21 = €272,73 excl. (Dit klopt: €272,73 × 1,21 = €330.)", nogSimpeler: "€272,73" },
        },
      },
      {
        q: "Hoeveel BTW zit in een product van **€121 inclusief 21% BTW**?",
        options: ["€21", "€25,41", "€12,10", "€100"],
        answer: 0,
        wrongHints: [null, "Je nam 21% van de prijs mét btw. Over welk bedrag wordt de 21% eigenlijk berekend?", "Dat is 10% van €121. Welk percentage hoort bij de prijs zonder btw, en welk bij de prijs mét btw?", "€100 is de prijs zonder btw. Welk deel van de €121 is dan de btw?"],
        uitlegPad: {
          stappen: [{ titel: "Twee-staps", tekst: "(1) Excl = €121 / 1,21 = €100. (2) BTW = incl − excl = €121 − €100 = €21." }],
          woorden: [{ woord: "BTW-deel", uitleg: "Bedrag aan BTW dat naar Belastingdienst gaat." }],
          theorie: "Vuistregel: bij 21% tarief is BTW ongeveer 17,4% van het INCL-bedrag (= 0,21 / 1,21).",
          voorbeelden: [{ type: "berekening", tekst: "€121 / 1,21 = €100 → €121 − €100 = €21 BTW." }],
          basiskennis: [{ onderwerp: "Niet 21% × €121", uitleg: "= €25,41, fout. 21% gaat over excl, niet incl." }],
          niveaus: { basis: "121/1,21 = 100, BTW 21.", simpeler: "€121 incl ÷ 1,21 = €100 excl. Verschil = €21 BTW.", nogSimpeler: "€21" },
        },
      },
      {
        q: "Welk BTW-tarief geldt voor **boodschappen**?",
        options: ["9%", "21%", "0%", "25%"],
        answer: 0,
        wrongHints: [null, "21% is het hoge tarief, bijvoorbeeld voor kleding en elektronica. Geldt dat ook voor eten?", "0% geldt vooral bij export naar het buitenland. Betaal je in de supermarkt echt geen btw?", "25% is het tarief in landen als Denemarken en Zweden, niet in Nederland."],
        uitlegPad: {
          stappen: [{ titel: "Eten/drinken = 9%", tekst: "Voedsel (geen alcohol) valt onder het LAGE tarief van 9%. Ook drinken (water/sap), kapper, OV, boeken." }],
          woorden: [{ woord: "9%-tarief", uitleg: "Verlaagde BTW voor basisbehoeften en cultuur." }, { woord: "21%-tarief", uitleg: "Algemene BTW. Voor de meeste niet-basis producten." }],
          theorie: "9%-categorieën: voedsel, drinken (excl alcohol), water, boeken, openbaar vervoer, kapper, bioscoop. 21%: alle andere goederen + diensten.",
          voorbeelden: [{ type: "9%", tekst: "Brood, melk, fruit, restaurant, sportles, treintickets." }, { type: "21%", tekst: "Kleding, elektronica, bier (alcohol), benzine, meubel." }],
          basiskennis: [{ onderwerp: "Geen 25%", uitleg: "Geen NL-tarief op 25%. Bestaat in Denemarken, niet NL." }],
          niveaus: { basis: "Boodschappen = 9%.", simpeler: "Boodschappen vallen onder lage BTW = 9%. Niet 21%.", nogSimpeler: "Eten = 9%" },
        },
      },
      {
        q: "Waarom heft de overheid hoge **accijns op tabak**?",
        options: ["Roken ontmoedigen en geld ophalen", "Om tabaksboeren in NL te beschermen", "Om goedkope smokkelsigaretten te weren", "Omdat tabak een luxeproduct is"],
        answer: 0,
        wrongHints: [null, "Nederland heeft nauwelijks tabaksboeren, en accijns geldt voor alle tabak. Wat wil de overheid bereiken bij rokers?", "Hogere prijzen maken smokkel juist aantrekkelijker. Wat moet de hoge prijs dan wél doen?", "Luxe is geen reden voor accijns: op sieraden zit gewoon btw. Wat maakt tabak anders dan sieraden?"],
        uitlegPad: {
          stappen: [{ titel: "Twee doelen tegelijk", tekst: "Hoge accijns op tabak: (1) inkomsten voor staat (~€3 mrd/jaar), (2) ontmoediging — hogere prijs = minder rokers, vooral jongeren." }],
          woorden: [{ woord: "accijns", uitleg: "Extra belasting bovenop BTW op specifieke producten. Tabak, alcohol, brandstof." }, { woord: "sin tax", uitleg: "Engelse term: 'zondebelasting'. Belasting op schadelijk gedrag." }],
          theorie: "Pakje sigaretten 2024: ~€10. Daarvan ~€7,50 = accijns + BTW. Effect: rookcijfers NL dalen al jaren, deels door accijnsverhogingen. Win-win voor staat (inkomsten + minder zorgkosten later).",
          voorbeelden: [{ type: "tabak", tekst: "Pakje €10: ~€2 productiekosten + €1 winst voor verkoopketen + €7 accijns/BTW." }, { type: "alcohol", tekst: "Per liter wijn ~€1 accijns. Per liter sterke drank veel meer." }],
          basiskennis: [{ onderwerp: "Niet productiekosten", uitleg: "Sigaretten produceren is goedkoop. Hoge prijs = belasting, niet productie." }],
          niveaus: { basis: "Ontmoediging + inkomsten.", simpeler: "Hoge accijns op tabak = (1) overheid verdient eraan, (2) ontmoedigt roken.", nogSimpeler: "2 doelen" },
        },
      },
      {
        q: "**Overdrachtsbelasting** voor een starter (jonger dan 35) bij koop huis < €500k:",
        options: ["0%", "2%", "6%", "10,4%"],
        answer: 0,
        wrongHints: [null, "Dat is het gewone tarief — geldt er voor jonge starters een uitzondering?", "6% was het tarief voor woningen tot 2011. Geldt er nu voor jonge starters iets anders?", "Zo'n hoog tarief geldt voor bedrijfspanden. Wie zelf in het huis gaat wonen, betaalt minder."],
        uitlegPad: {
          stappen: [{ titel: "Startersregeling", tekst: "Sinds 2021: starters tot 35 jaar + huis onder de woningwaarde-grens (2024: €510k) → 0% overdrachtsbelasting. Eenmalig. Doel: starters helpen op de huizenmarkt." }],
          woorden: [{ woord: "startersregeling", uitleg: "Vrijstelling overdrachtsbelasting voor 18-35-jarige starters." }, { woord: "overdrachtsbelasting", uitleg: "Belasting bij koop bestaande woning. 2% standaard, 0% starters, hoger tarief voor beleggers (2023-2025: 10,4%; vanaf 2026: 8%)." }],
          theorie: "Niet-starters (35+) of duurder huis (>€510k): 2%. Beleggers (tweede huis): hoger tarief (2023-2025: 10,4%; vanaf 2026: 8%). Veranderlijk beleid — check actuele regels.",
          voorbeelden: [{ type: "starter", tekst: "26 jaar koopt eerste huis €400k → 0% overdracht = €0 (bespaart €8k)." }, { type: "regulier", tekst: "40 jaar koopt huis €400k → 2% = €8.000 overdrachtsbelasting." }],
          basiskennis: [{ onderwerp: "Niet 2% meer voor starters", uitleg: "Was 2% tot 2021. Nu 0% voor jonge starters — recente regelwijziging." }],
          niveaus: { basis: "0% voor starters.", simpeler: "Jonger dan 35 + huis onder de grens (2024: €510k) = 0% overdrachtsbelasting (starter-vrijstelling).", nogSimpeler: "0%" },
        },
      },
      {
        q: "Een ondernemer ontvangt **€1.000 omzet inclusief 9% BTW**. Hoeveel BTW houdt hij apart?",
        options: ["€83", "€90", "€100", "€9"],
        answer: 0,
        wrongHints: [null, "Je nam 9% van €1.000, maar dat bedrag is al inclusief btw. Over welk bedrag wordt de 9% berekend?", "Dat is 10% van €1.000. Klopt het tarief, en is die €1.000 inclusief of exclusief BTW?", "Dat is maar 0,9% van €1.000. Met welk percentage moet je rekenen?"],
        uitlegPad: {
          stappen: [{ titel: "Twee-staps", tekst: "(1) Excl = €1.000 / 1,09 = €917,43. (2) BTW = €1.000 − €917,43 = €82,57. Afgerond €83." }],
          woorden: [{ woord: "BTW-afdracht", uitleg: "Bedrag aan BTW dat ondernemer per kwartaal aan Belastingdienst overmaakt." }],
          theorie: "Vuistregel: bij 9% tarief is BTW ~8,3% van incl. Bij 21% tarief ~17,4%. Handig voor schatten zonder rekenmachine.",
          voorbeelden: [{ type: "Sam friet", tekst: "200 friet × €5 = €1.000 omzet incl 9% BTW → €917 excl + €83 BTW apart voor Belastingdienst." }],
          basiskennis: [{ onderwerp: "Niet 9% × €1000", uitleg: "= €90. Fout, want €1.000 is INCL, niet excl." }],
          niveaus: { basis: "1000/1,09 ≈ 917, BTW 83.", simpeler: "€1.000 incl 9% / 1,09 = €917 excl. Verschil ~€83 BTW.", nogSimpeler: "~€83" },
        },
      },
    ],
  },
  // ─── Stap 3: Inkomstenbelasting ─────────────────────────
  {
    title: "Inkomstenbelasting — schijven en boxen",
    explanation: "**Inkomstenbelasting (IB)** betaal je over je inkomen — loon, winst uit eigen bedrijf, AOW, etc.\n\n**Drie boxen**:\n• **Box 1**: inkomen uit werk + eigen woning (lonen, winst, AOW, pensioen)\n• **Box 2**: aanmerkelijk belang (5%+ aandelen in BV)\n• **Box 3**: vermogen (spaargeld + beleggingen) boven vrijstelling\n\n**Box 1 — schijven (2024, vereenvoudigd)**:\n• Schijf 1: tot ~€75.518 → **36,97%**\n• Schijf 2: boven ~€75.518 → **49,5%**\n\nDit heet **progressieve belasting** — sterke schouders dragen zwaardere lasten.\n\n**Voorbeeld**: bruto €50.000\n• Valt helemaal in schijf 1 → €50.000 × 36,97% = €18.485\n\n**Voorbeeld**: bruto €100.000\n• Schijf 1: €75.518 × 36,97% = €27.919\n• Boven €75.518: €24.482 × 49,5% = €12.119\n• Totaal: ~€40.038 IB voor aftrek\n\n**Heffingskortingen** (verlagen je belasting):\n• **Algemene heffingskorting**: voor iedereen (max ~€3.300, daalt met hoger inkomen)\n• **Arbeidskorting**: voor mensen die werken (max ~€5.000)\n• **Inkomensafhankelijke combinatiekorting (IACK)**: voor werkende ouders met kind\n\n**Voorbeeld**: bruto €30.000 → IB ~€11.000 → min heffingskortingen ~€7.500 → te betalen ~€3.500.\n\n**Sociale premies** worden ook ingehouden:\n• **AOW** (~17,9%) en **WLZ** (langdurige zorg, ~9,65%) — deze zitten al in het tarief van 36,97%\n• **ZVW** (zorg) — bij werknemers betaalt de werkgever deze bijdrage\n\nDeze zitten meestal in dezelfde inhouding — daarom heet het 'loonheffing'.\n\n**Aangifte doen**:\n• Voor 1 mei (of na uitstel)\n• Online via Mijn Belastingdienst (DigiD)\n• Vaak 'vooraf ingevuld' — controleren + indienen\n• Werkenden krijgen vaak teruggave (te veel ingehouden)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PROGRESSIEVE IB (BOX 1)</text>
<rect x="40" y="50" width="200" height="22" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1"/>
<text x="140" y="65" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">schijf 1 — 36,97%</text>
<rect x="40" y="78" width="160" height="22" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1"/>
<text x="120" y="93" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">schijf 2 — 49,5%</text>
<text x="40" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€0</text>
<text x="140" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">tot €75.518</text>
<text x="195" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">daarboven</text>
<text x="160" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">– heffingskortingen = lager</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ sociale premies (AOW, ZVW, WLZ)</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">3 boxen: werk · ab · vermogen</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">aangifte vóór 1 mei via Mijn Belastingdienst</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent **progressief** in inkomstenbelasting?",
        options: ["Hoger inkomen → hoger tarief", "Tarief stijgt elk jaar opnieuw", "Iedereen betaalt hetzelfde %", "Hoger inkomen → lager tarief"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om de tijd. Waarmee stijgt het tarief bij progressief dan wel?", "Eén percentage voor iedereen heet een vlaktaks. Wat verandert er bij progressief?", "Dan zouden mensen met meer inkomen een kleiner deel betalen. Dat heet regressief."],
        uitlegPad: {
          stappen: [{ titel: "Trapsgewijs stijgen", tekst: "Progressief = belasting-percentage STIJGT met hoger inkomen. NL: tot ~€75k = 36,97%, daarboven 49,5%. Wie meer verdient draagt zwaarder bij." }],
          woorden: [{ woord: "progressieve belasting", uitleg: "Tarief stijgt mee met inkomen. Sterke schouders zwaarder belast." }, { woord: "vlaktaks", uitleg: "Iedereen zelfde percentage. Tegenovergesteld systeem." }],
          theorie: "Doel: inkomensverschillen kleiner maken. Mensen met €100k betalen relatief MEER % dan mensen met €30k. NL Gini ~0,28 dankzij progressie + toeslagen.",
          voorbeelden: [{ type: "€30k", tekst: "Heel inkomen in schijf 1 → 36,97%." }, { type: "€100k", tekst: "Eerste €75k in schijf 1 → 36,97%. Rest €25k in schijf 2 → 49,5%. Gemiddeld: ~40%." }],
          basiskennis: [{ onderwerp: "Niet 'elk jaar hoger'", uitleg: "Progressief = binnen 1 jaar trapsgewijs stijgen. Niet jaar op jaar verhoging." }],
          niveaus: { basis: "Hoger inkomen = hoger %.", simpeler: "Progressief = wie meer verdient, betaalt een hoger percentage belasting.", nogSimpeler: "Trap omhoog" },
        },
      },
      {
        q: "Wat hoort in **Box 1**?",
        options: ["Loon, winst, eigen woning", "Aandelen in je eigen BV", "Spaargeld en beleggingen", "Erfenissen en schenkingen"],
        answer: 0,
        wrongHints: [null, "Een aanmerkelijk belang in je eigen BV = Box 2.", "Spaargeld en beleggingen vallen in een andere box. Welke box is voor inkomen uit werk?", "Daarvoor bestaat een aparte belasting, buiten de boxen."],
        uitlegPad: {
          stappen: [{ titel: "Werk + woning", tekst: "Box 1 = inkomen uit WERK + EIGEN WONING. Loon, winst zzp, AOW, pensioen, hypotheekrenteaftrek, eigenwoningforfait. De grootste box voor verreweg de meeste mensen." }],
          woorden: [{ woord: "Box 1", uitleg: "Inkomen uit werk en eigen woning. Progressief belast." }, { woord: "Box 2", uitleg: "Aanmerkelijk belang (5%+ aandelen in BV). 24,5%-31% belast." }, { woord: "Box 3", uitleg: "Vermogen (spaargeld + beleggingen) boven vrijstelling. Fictief rendement belast." }],
          theorie: "Werknemers + zzp + gepensioneerden = Box 1. DGA's met BV ook Box 2. Spaarders/beleggers ook Box 3.",
          voorbeelden: [{ type: "loonwerker", tekst: "Lerares: salaris + eigenwoningforfait + hypotheekrenteaftrek = allemaal Box 1." }, { type: "gemixt", tekst: "BV-eigenaar: zijn DGA-loon = Box 1. Aandelen in eigen BV = Box 2. Spaarrekening = Box 3." }],
          basiskennis: [{ onderwerp: "Werk = box 1", uitleg: "Alle 'verdiende inkomen' (loon, winst, uitkering) = box 1." }],
          niveaus: { basis: "Loon + woning.", simpeler: "Box 1 = inkomen uit werken (loon/winst/AOW) + eigen huis.", nogSimpeler: "Werk = box 1" },
        },
      },
      {
        q: "Wat is een **heffingskorting**?",
        options: ["Een bedrag dat van je te betalen belasting afgaat", "Een bedrag dat van je belastbaar inkomen afgaat", "Een toeslag die je elke maand op je rekening krijgt", "Korting op de btw als je veel tegelijk koopt"],
        answer: 0,
        wrongHints: [null, "Dat is een aftrekpost: die verlaagt je inkomen. Een heffingskorting gaat ergens anders van af — waarvan?", "Een toeslag krijg je uitgekeerd. Een korting op een 'heffing' — waar gaat die vanaf?", "Btw-korting voor grote aankopen bestaat niet. In welke aangifte zie je een heffingskorting terug?"],
        uitlegPad: {
          stappen: [{ titel: "Korting op te betalen IB", tekst: "Heffingskorting = bedrag dat van je te betalen IB AFGAAT. Verschillend van aftrekpost (= van inkomen af). Heffingskorting werkt 1-op-1: €100 korting = €100 minder IB." }],
          woorden: [{ woord: "heffingskorting", uitleg: "Direct bedrag in mindering op te betalen IB. Voorbeelden: algemene, arbeids, IACK." }, { woord: "aftrekpost", uitleg: "Bedrag dat van INKOMEN af gaat → minder IB-grondslag → minder belasting." }],
          theorie: "Verschil: €1.000 aftrekpost bij 37% = €370 minder belasting. €1.000 heffingskorting = €1.000 minder belasting. Heffingskorting is sterker per euro.",
          voorbeelden: [{ type: "berekening", tekst: "IB €15.000 berekend. Heffingskortingen totaal €4.500. Te betalen: €10.500." }],
          basiskennis: [{ onderwerp: "Niet winkel", uitleg: "'Korting' verwart soms — niet als winkel-korting. Korting op te betalen belasting." }],
          niveaus: { basis: "Bedrag in mindering op IB.", simpeler: "Heffingskorting gaat 1-op-1 van je IB af. €500 korting = €500 minder belasting.", nogSimpeler: "Af van IB" },
        },
      },
      {
        q: "Wie houdt **loonheffing** in op je salaris?",
        options: ["De werkgever", "De werknemer zelf", "De Belastingdienst zelf", "De bank waar je loon binnenkomt"],
        answer: 0,
        wrongHints: [null, "Op je loonstrook zie je dat het al is afgetrokken. Wie deed dat voordat jij je geld kreeg?", "De Belastingdienst krijgt het geld wel, maar haalt het niet zelf van je loon af. Wie doet dat?", "De bank zet alleen het geld op je rekening. Wie rekent je nettoloon uit?"],
        uitlegPad: {
          stappen: [{ titel: "Werkgever = inhouder", tekst: "Loonheffing = voorinhouding van IB + sociale premies. Werkgever houdt het in op brutoloon en draagt af aan Belastingdienst. Werknemer krijgt netto bedrag." }],
          woorden: [{ woord: "loonheffing", uitleg: "Voorinhouding van IB + AOW/ZVW/WLZ-premies op brutoloon. Werkgever int + draagt af." }, { woord: "loonbelasting", uitleg: "Onderdeel van loonheffing — specifiek IB-deel." }],
          theorie: "Voordeel voorinhouding: belasting wordt verspreid over jaar, niet 1× per jaar. Werkgever krijgt verklaring (loon­heffings­korting) van werknemer → bepaalt welke kortingen toepasbaar.",
          voorbeelden: [{ type: "loonstrook", tekst: "Bruto €3.500 − loonheffing €1.050 = netto €2.450. Loonheffing gaat naar Rijk." }],
          basiskennis: [{ onderwerp: "Niet werknemer zelf", uitleg: "Werknemer zelf doet AANGIFTE vóór 1 mei (correctie). Inhouding loopt via werkgever." }],
          niveaus: { basis: "Werkgever.", simpeler: "Werkgever houdt loonheffing in op brutoloon en stuurt het naar Belastingdienst.", nogSimpeler: "Werkgever" },
        },
      },
      {
        q: "Wanneer moet je IB-aangifte uiterlijk doen?",
        options: ["Vóór 1 mei", "Vóór 1 januari", "Vóór 31 december", "Vóór 1 juli"],
        answer: 0,
        wrongHints: [null, "Op 1 januari is het jaar net voorbij en heb je je jaaropgaaf nog niet. Kan de aangifte dan al klaar zijn?", "Dan zit je al bijna een heel jaar verder. Valt de deadline eerder of later?", "Dan ben je te laat. Weet je in welke maand veel ouders met hun aangifte bezig zijn?"],
        uitlegPad: {
          stappen: [{ titel: "1 mei standaard", tekst: "Aangifte over jaar X moet vóór 1 mei van jaar X+1. Bij uitstel (kan via 'verlenging'): tot 1 sept. Bij belastingadviseur: vaak tot eind jaar X+1." }],
          woorden: [{ woord: "IB-aangifte", uitleg: "Jaarlijkse opgave van inkomen + aftrekposten + correctie van loonheffing." }, { woord: "uitstel", uitleg: "Verzoek bij Belastingdienst om later in te dienen." }],
          theorie: "Aangifte tegenwoordig vaak 'vooraf ingevuld' (Belastingdienst kent veel via banken/werkgever). Werknemers krijgen vaak teruggave omdat te veel loonheffing was ingehouden.",
          voorbeelden: [{ type: "praktijk", tekst: "Aangifte 2024 → indienen vóór 1 mei 2025. Vooringevuld via Mijn Belastingdienst (DigiD)." }],
          basiskennis: [{ onderwerp: "Niet 1 januari", uitleg: "Op 1 januari heeft Belastingdienst nog niets — werkgevers leveren pas begin van het jaar de jaaropgaaf." }],
          niveaus: { basis: "Vóór 1 mei.", simpeler: "Standaard deadline IB-aangifte = 1 mei. Bij uitstel: 1 september.", nogSimpeler: "1 mei" },
        },
      },
      {
        q: "**Box 3** belasting gaat over:",
        options: ["Spaargeld en beleggingen", "Inkomen uit werk en eigen woning", "Aandelen in je eigen BV", "Een erfenis die je krijgt"],
        answer: 0,
        wrongHints: [null, "Inkomen uit werk en je eigen woning horen in Box 1. Welke box gaat over vermogen?", "Een aanmerkelijk belang in je eigen BV valt in Box 2.", "Over een erfenis betaal je erfbelasting, een aparte belasting buiten de boxen."],
        uitlegPad: {
          stappen: [{ titel: "Vermogen-box", tekst: "Box 3 = belasting over VERMOGEN: spaargeld + beleggingen + tweede huis − schulden. Vrijstelling 2024: ~€57k per persoon. Daarboven belast op fictief rendement." }],
          woorden: [{ woord: "Box 3", uitleg: "Vermogensrendementsheffing. Belasting over fictief rendement op vermogen boven vrijstelling." }, { woord: "vrijstelling", uitleg: "Bedrag waarboven Box 3-belasting wordt geheven. 2024: ~€57k per persoon." }],
          theorie: "Tarief: ~36% over fictief rendement. Voor 2024 ~6% fictief op aandelen, ~1,4% op spaargeld → effectief 0,5-2% van vermogen per jaar. Box 3 staat politiek onder druk vanwege onrechtvaardigheid (rente was 0% maar fictief 6%).",
          voorbeelden: [{ type: "spaarder", tekst: "Spaargeld €100k − vrijstelling €57k = €43k belast. Fictief 1,4% rendement = €602. Belast 36% = €217 Box 3 / jr." }],
          basiskennis: [{ onderwerp: "Niet werk", uitleg: "Werk-inkomen = box 1. BV-aandelen = box 2. Erf = aparte erfbelasting." }],
          niveaus: { basis: "Spaargeld + beleggingen boven vrijstelling.", simpeler: "Box 3 = belasting over je vermogen (spaargeld/beleggingen) boven ~€57k vrijstelling.", nogSimpeler: "Vermogen = box 3" },
        },
      },
    ],
  },
  // ─── Stap 4: Heffingskortingen detail ────────────────────
  {
    title: "Heffingskortingen — wat scheelt het je?",
    explanation: "**Heffingskortingen** halen geld van je te betalen belasting AF. Ze maken werken aantrekkelijker en helpen lagere inkomens.\n\n**Belangrijkste heffingskortingen 2024**:\n\n**1. Algemene heffingskorting (AHK)** — voor iedereen\n• Max ~€3.362 bij laag inkomen\n• Daalt geleidelijk met hoger inkomen (uitfasering)\n• Vanaf ~€75k: €0\n• 'Solidariteit met laag inkomen' ingebakken\n\n**2. Arbeidskorting** — voor mensen die werken\n• Max ~€5.532 bij midden-inkomen (~€39k)\n• Daalt boven dat inkomen\n• Stimuleert werken — 'werk loont'\n\n**3. Inkomensafhankelijke combinatiekorting (IACK)** — werkende ouders\n• Max ~€2.690\n• Voor ouders met kind &lt; 12 jaar\n• Helpt werkende ouders met kosten\n\n**4. Ouderenkorting** — vanaf AOW-leeftijd\n• Max ~€1.916 bij laag inkomen\n• Helpt gepensioneerden met laag pensioen\n\n**5. Jonggehandicaptenkorting** — Wajong-uitkering\n\n**Hoe werkt het optellen?**\n\nVoorbeeld werkende met inkomen €30.000:\n• IB schijf 1: €30.000 × 36,97% = €11.091\n• Algemene heffingskorting: ~€3.000\n• Arbeidskorting: ~€4.500\n• Te betalen: €11.091 - €3.000 - €4.500 = **€3.591**\n\nWerkende ouder verdient €40.000, kind van 8:\n• IB: €40.000 × 36,97% = €14.788\n• AHK: ~€2.500\n• Arbeidskorting: ~€5.000\n• IACK: ~€2.000\n• Te betalen: €14.788 - €9.500 = **€5.288**\n\n**Werk loont** (vooral bij midden-inkomens):\n• Bij €0 → geen IB maar geen arbeidskorting\n• Bij €30k → IB betaald, maar arbeidskorting maakt netto-effect klein\n• Werken levert meer op dan uitkering\n\n**Politieke discussie**:\n• Marginale druk (extra belasting bij €1 meer verdienen) loopt op tot 80% bij sommige inkomens\n• Maakt extra werken minder aantrekkelijk\n• Heffingskortingen + toeslagen creëren complexiteit",
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
        options: ["Je met werk een inkomen verdient", "Je een uitkering krijgt en werk zoekt", "Je minstens 36 uur per week werkt", "Je student bent zonder bijbaan"],
        answer: 0,
        wrongHints: [null, "Een uitkering is geen loon uit werk, ook niet als je solliciteert. Waar staat 'arbeid' in arbeidskorting voor?", "Ook wie maar een paar uur per week werkt, krijgt arbeidskorting. Waar hangt hij dan van af?", "Studeren is geen betaald werk. Wanneer krijg je de korting dan wel?"],
        uitlegPad: {
          stappen: [{ titel: "Werken-bonus", tekst: "Arbeidskorting krijg je alleen als je ARBEIDSINKOMEN hebt — loon uit baan of winst uit zelfstandige. Niet bij uitkering/pensioen/studiebeurs." }],
          woorden: [{ woord: "arbeidskorting", uitleg: "Heffingskorting voor werkenden. Max ~€5.500/jaar bij midden-inkomen. Stimulans om te werken." }, { woord: "arbeidsinkomen", uitleg: "Loon (werknemer) of winst (zelfstandige) — geen uitkering/AOW/studiebeurs." }],
          theorie: "Doel: 'werk loont'. Iemand met werk houdt netto MEER over dan iemand met uitkering (zelfde brutoloon). Bedoeld om mensen aan werk te helpen.",
          voorbeelden: [{ type: "werker", tekst: "Bruto €30k werk → IB €11k − algemene korting €3k − arbeidskorting €4,5k = €3,5k IB." }, { type: "uitkering", tekst: "Bijstand €30k → IB €11k − algemene korting €3k = €8k IB. €4,5k meer dan werker." }],
          basiskennis: [{ onderwerp: "Niet bij geen werk", uitleg: "Uitkering/pensioen geen arbeid → geen arbeidskorting." }],
          niveaus: { basis: "Arbeidsinkomen vereist.", simpeler: "Arbeidskorting alleen als je WERKT (baan/zelfstandig). Niet bij uitkering.", nogSimpeler: "Werken" },
        },
      },
      {
        q: "Wie krijgt de **algemene heffingskorting**?",
        options: ["Iedereen, maar minder bij hoger inkomen", "Iedereen, maar meer bij hoger inkomen", "Alleen werknemers met een vast contract", "Iedereen precies hetzelfde bedrag"],
        answer: 0,
        wrongHints: [null, "Dan zouden rijkere mensen meer korting krijgen dan mensen met weinig geld. Werkt de korting zo, of andersom?", "Ook wie geen loon heeft, bijvoorbeeld met AOW of een uitkering, betaalt belasting. Krijgen zij dan nooit korting?", "Denk aan het woord 'uitfasering': blijft de korting voor elk inkomen even groot?"],
        uitlegPad: {
          stappen: [{ titel: "Iedereen, dalend", tekst: "Algemene heffingskorting (AHK) krijgt IEDEREEN met inkomen. Bij laag inkomen max (~€3.300/jr). Daalt geleidelijk bij stijgend inkomen. Boven ~€75k: €0." }],
          woorden: [{ woord: "algemene heffingskorting", uitleg: "Basis-heffingskorting voor iedereen. Wordt uitgefaseerd bij hoog inkomen." }, { woord: "uitfasering", uitleg: "Korting wordt kleiner naarmate inkomen hoger wordt." }],
          theorie: "Solidariteit ingebakken: lage inkomens profiteren maximaal, hoge inkomens niet meer. Versterkt herverdelend effect van progressieve IB.",
          voorbeelden: [{ type: "laag", tekst: "Inkomen €15k → AHK ~€3.300 vol (laagste schijf)." }, { type: "midden", tekst: "Inkomen €50k → AHK ~€1.500 (deels uitgefaseerd)." }, { type: "hoog", tekst: "Inkomen €80k → AHK €0 (volledig weg)." }],
          basiskennis: [{ onderwerp: "Niet alleen rijken/werknemers", uitleg: "Iedereen met inkomen krijgt het — werker, uitkering, pensioen. Tegendeel van wat de naam suggereert." }],
          niveaus: { basis: "Iedereen, dalend bij hoog.", simpeler: "AHK krijgt iedereen. Lage inkomens max, hoge inkomens steeds minder, boven €75k niets.", nogSimpeler: "Iedereen dalend" },
        },
      },
      {
        q: "Wat is **IACK** voor?",
        options: ["Werkende ouders met kind onder 12", "Werkende ouders met een kind onder 18", "Ouders met een kind onder 12, ook zonder werk", "Alleenstaande ouders met een kind onder 4"],
        answer: 0,
        wrongHints: [null, "Tot 18 jaar krijg je kinderbijslag. Geldt voor de IACK dezelfde leeftijdsgrens?", "Kijk naar het woord 'combinatie' in de naam — een combinatie van wat?", "Zegt de naam iets over alleenstaand zijn? En kijk nog eens naar de leeftijdsgrens."],
        uitlegPad: {
          stappen: [{ titel: "Werkende ouders helpen", tekst: "IACK = Inkomensafhankelijke Combinatiekorting. Voor werkende ouders met kind onder 12. Doel: combinatie werk + zorg ondersteunen." }],
          woorden: [{ woord: "IACK", uitleg: "Inkomensafhankelijke Combinatiekorting. Heffingskorting voor werkende ouders met jonge kinderen." }],
          theorie: "Voorwaarden: (1) werkend (arbeidsinkomen), (2) kind onder 12 in huishouden, (3) niet de meestverdienende partner (bij stel). Max ~€2.700/jr bij midden-inkomen.",
          voorbeelden: [{ type: "moeder", tekst: "Moeder met kind 6, werkt 4 dagen, verdient €30k → IACK ~€2.500/jr extra heffingskorting." }],
          basiskennis: [{ onderwerp: "Niet geslachtgebonden", uitleg: "Voor BEIDE ouders, ongeacht geslacht. Hoofdverdiener krijgt 'm meestal niet — kleinere verdiener wel." }],
          niveaus: { basis: "Werkende ouders < 12 jr kind.", simpeler: "IACK = extra korting voor ouders die werken én een jong kind hebben.", nogSimpeler: "Werk+kind" },
        },
      },
      {
        q: "IB van €11.000, heffingskortingen totaal €4.500. **Hoeveel betaal je?**",
        options: ["€6.500", "€11.000", "€4.500", "€15.500"],
        answer: 0,
        wrongHints: [null, "Dat is de belasting vóór de korting. Wat doe je met de €4.500?", "€4.500 is de korting zelf. Hoeveel blijft er over van de €11.000?", "Je telde de korting erbij op. Maakt een korting het bedrag hoger of lager?"],
        uitlegPad: {
          stappen: [{ titel: "IB − kortingen", tekst: "IB-betaling = berekende IB − heffingskortingen. €11.000 − €4.500 = €6.500 daadwerkelijk te betalen." }],
          woorden: [{ woord: "te betalen belasting", uitleg: "Eindbedrag na alle aftrek + heffingskortingen." }],
          theorie: "Formule: (brutoinkomen × tarief) − aftrekposten × tarief − heffingskortingen = te betalen IB. Heffingskorting werkt EUR-voor-EUR.",
          voorbeelden: [{ type: "berekening", tekst: "€11k IB − €3k AHK − €1,5k arbeidskorting = €6,5k te betalen." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "Heffingskortingen worden AFGETROKKEN, niet bijgeteld. €11k + €4,5k = €15,5k zou fout zijn." }],
          niveaus: { basis: "11000 − 4500 = 6500.", simpeler: "IB van €11k MINUS heffingskortingen €4,5k = €6,5k betalen.", nogSimpeler: "€6.500" },
        },
      },
      {
        q: "Wat is de **uitfasering** van een heffingskorting?",
        options: ["Korting wordt kleiner naarmate je inkomen stijgt", "Korting wordt groter naarmate je inkomen stijgt", "Korting wordt kleiner naarmate je ouder wordt", "Korting wordt kleiner als je partner ook werkt"],
        answer: 0,
        wrongHints: [null, "Dan zou wie meer verdient steeds meer korting krijgen. Dat gebeurt alleen bij de laagste inkomens. Wat gebeurt er daarna?", "Leeftijd speelt hier geen rol. Waar hangt de hoogte van een heffingskorting van af?", "Of je partner werkt, verandert deze korting niet. Waar hangt de hoogte van een heffingskorting van af?"],
        uitlegPad: {
          stappen: [{ titel: "Geleidelijk afbouwen", tekst: "Uitfasering = korting wordt KLEINER met stijgend inkomen. Niet plotseling in één keer, maar geleidelijk (% per €1.000 extra). Voorkomt dat €1 extra inkomen €1.000 minder korting betekent." }],
          woorden: [{ woord: "uitfaseren", uitleg: "Geleidelijk afbouwen — vaak per €1 extra inkomen X cent korting minder." }, { woord: "marginaal effect", uitleg: "Effect op netto-inkomen van €1 extra bruto. Door uitfasering kan dat verrassend laag zijn (50%+ belasting+korting-verlies)." }],
          theorie: "Algemene heffingskorting faseert uit tussen €25k en €75k. Per €1 extra inkomen vermindert AHK met ~6 cent. Voor hoog-betaalden bouwt effectieve belastingdruk op (50%+).",
          voorbeelden: [{ type: "berekening", tekst: "Inkomen €30k: AHK €3.000. Inkomen €60k: AHK €1.500. Verschil van €1.500 over €30k extra inkomen = 5% extra effectieve belastingdruk." }],
          basiskennis: [{ onderwerp: "Niet 'verdwijnt na 1 jaar'", uitleg: "Uitfasering gebeurt op basis van INKOMEN, niet tijd." }],
          niveaus: { basis: "Daalt bij hoger inkomen.", simpeler: "Uitfasering = korting wordt minder als je meer verdient — geleidelijk, niet ineens.", nogSimpeler: "Daalt" },
        },
      },
      {
        q: "**Werk loont** betekent in deze context:",
        options: ["Door arbeidskorting houd je netto meer over", "Door een hoger minimumloon verdien je bruto meer", "Door toeslagen houd je zonder werk meer over", "Door minder uren te werken betaal je minder belasting"],
        answer: 0,
        wrongHints: [null, "Het minimumloon gaat over je brutoloon. 'Werk loont' gaat over wat de belasting met je netto doet — hoe?", "Dat is juist het probleem dat 'werk loont' wil oplossen. Wat moet er gebeuren als je gaat werken?", "Minder uren betekent ook minder loon. Gaat 'loont' over meer werken of over minder werken?"],
        uitlegPad: {
          stappen: [{ titel: "Politiek doel", tekst: "'Werk loont' = beleidsdoel dat werken financieel aantrekkelijker moet zijn dan uitkering. Arbeidskorting + IACK zorgen daarvoor — werkenden houden netto meer over." }],
          woorden: [{ woord: "werk loont", uitleg: "Beleidsprincipe: werkenden houden via arbeidskorting netto meer over dan uitkeringsontvangers met zelfde brutoloon." }],
          theorie: "Zonder arbeidskorting zou werken nauwelijks netto-verschil maken met uitkering. Door arbeidskorting (~€5k) heeft werker meestal €300-500/mnd meer netto. Stimuleert om aan werk te gaan/blijven.",
          voorbeelden: [{ type: "vergelijking", tekst: "Werker €30k → netto ~€26k. Bijstandontvanger €15k → netto ~€14k. Werker verdient veel meer." }],
          basiskennis: [{ onderwerp: "Niet 'zwaar' of 'verplicht'", uitleg: "Term gaat over FINANCIEEL voordeel werken, niet over zwaarte/plicht." }],
          niveaus: { basis: "Werk levert netto meer op.", simpeler: "'Werk loont' = werkenden houden netto meer over dan uitkeringsontvangers, dankzij arbeidskorting.", nogSimpeler: "Werk = meer netto" },
        },
      },
    ],
  },
  // ─── Stap 5: Toeslagen ──────────────────────────────────
  {
    title: "Toeslagen — extra steun van de overheid",
    explanation: "**Toeslagen** = bedragen die de Belastingdienst maandelijks uitbetaalt aan mensen met laag inkomen. Doel: helpen met specifieke kosten.\n\n**5 hoofdtoeslagen** (afhankelijk van inkomen + situatie):\n\n**1. Zorgtoeslag**\n• Voor zorgverzekeringspremie\n• 2024: max ~€127/mnd voor 1 persoon, ~€243 voor stel\n• Vanaf ~€37k inkomen vervalt voor alleenstaanden\n\n**2. Huurtoeslag**\n• Bij sociale huurwoning (huur < ~€880/mnd)\n• Inkomensafhankelijk (bij hoger inkomen wordt hij lager of vervalt hij)\n• Vermogensgrens (~€36k spaargeld)\n• Hoogte: hangt af van huur + inkomen\n\n**3. Kinderopvangtoeslag**\n• Voor opvang/crèche-kosten\n• Beide ouders moeten werken/studeren\n• Tot ~96% vergoeding voor lage inkomens\n• Per uur, per kind\n\n**4. Kindgebonden budget (KGB)**\n• Extra geld voor kinderen, inkomensafhankelijk\n• 2024: max ~€2.500/jaar voor 1 kind\n\n**5. Kinderbijslag (AKW)**\n• Vast bedrag per kind, ongeacht inkomen\n• ~€340/kwartaal per kind van 6-11 jr\n• Iedereen krijgt het — geen toets\n• Strikt geen 'toeslag' maar volksverzekering\n\n**Voorbeeld huishouden** (alleenstaande ouder, 1 kind, €25k inkomen):\n• Zorgtoeslag: ~€100/mnd\n• Huurtoeslag: ~€280/mnd (bij €700 huur)\n• Kindgebonden budget: ~€150/mnd\n• Kinderbijslag: ~€95/mnd\n• Kinderopvangtoeslag: variabel\n• → Aanvulling van >€600/mnd op €25k inkomen\n\n**Probleem 1: complexiteit**\n• 5 verschillende systemen, allemaal met eigen voorwaarden\n• Veel mensen vragen niet aan waar ze recht op hebben\n• Niet-gebruik bij ~10-20%\n\n**Probleem 2: terugvorderingen**\n• Toeslag krijg je vooraf, op basis van GESCHAT inkomen\n• Verdien je meer → terugbetalen (soms duizenden euro's later)\n• Toeslagenaffaire: 26.000 ouders ten onrechte beschuldigd, jaren financiële nood\n\n**Toekomst**:\n• Politieke wens: simpeler systeem (bv. vlaktaks + meer toeslagen ineens)\n• Maar moeilijk: elke verandering raakt iemand",
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
        wrongHints: [null, "Huurtoeslag helpt bij de huur van je woning, niet bij je verzekering.", "Kinderbijslag krijg je voor de kosten van je kinderen. Waar gaat de vraag over?", "AOW is het basispensioen voor ouderen, geen toeslag voor een verzekering."],
        uitlegPad: {
          stappen: [{ titel: "Naam = kost", tekst: "Zorgtoeslag = vergoeding voor zorgverzekeringspremie. Naam zegt het al. Andere toeslagen voor andere kosten: huur, kinderopvang, kindgebonden." }],
          woorden: [{ woord: "zorgtoeslag", uitleg: "Maandelijkse bijdrage van overheid in zorgpremie als inkomen onder grens (~€37k alleenstaande)." }],
          theorie: "2024: max ~€127/mnd alleenstaande, ~€243 stel. Vraag aan via mijn.toeslagen.nl met DigiD. Voorlopig op basis van geschat jaarinkomen.",
          voorbeelden: [{ type: "praktijk", tekst: "Student €15k inkomen → zorgtoeslag ~€127/mnd → bedekt grootste deel zorgpremie €140/mnd." }],
          basiskennis: [{ onderwerp: "Niet AOW", uitleg: "AOW is pensioen, niet toeslag. Toeslagen worden door Belastingdienst uitbetaald." }],
          niveaus: { basis: "Zorgtoeslag.", simpeler: "Voor zorgverzekering = zorgtoeslag.", nogSimpeler: "Zorg" },
        },
      },
      {
        q: "Wie krijgt **kinderbijslag**?",
        options: ["Iedere ouder met kind, ongeacht inkomen", "Iedere ouder, maar minder bij hoog inkomen", "Alleen ouders die allebei werken", "Ouders met een kind tot 21 jaar"],
        answer: 0,
        wrongHints: [null, "Dat geldt voor het kindgebonden budget. Hangt de kinderbijslag ook af van wat je verdient?", "Moet je werken om kinderbijslag te krijgen? Denk aan ouders met een uitkering.", "Kinderbijslag stopt als je kind 18 wordt; daarna is er studiefinanciering. Waar hangt het verder van af?"],
        uitlegPad: {
          stappen: [{ titel: "Universeel — geen toets", tekst: "Kinderbijslag (AKW) = vast bedrag per kwartaal per kind. IEDERE ouder krijgt dit, ongeacht inkomen, werksituatie, gezinsvorm. Strikt geen 'toeslag' maar volksverzekering." }],
          woorden: [{ woord: "AKW", uitleg: "Algemene Kinderbijslagwet. Iedere ouder krijgt het, betaald uit de algemene middelen." }, { woord: "kindgebonden budget", uitleg: "Aanvullend op kinderbijslag, WEL inkomensafhankelijk. Voor lage/midden-inkomens." }],
          theorie: "Bedrag stijgt met leeftijd kind: 0-5: ~€275/kwartaal. 6-11: ~€336. 12-17: ~€395. Via SVB uitbetaald, niet Belastingdienst.",
          voorbeelden: [{ type: "iedereen", tekst: "Ouder met €30k of €500k → beiden krijgen dezelfde kinderbijslag (~€336/kwartaal voor 8-jarige)." }],
          basiskennis: [{ onderwerp: "Niet inkomensafhankelijk", uitleg: "Onderscheid kinderbijslag (universeel) vs kindgebonden budget (inkomensafhankelijk)." }],
          niveaus: { basis: "Iedere ouder.", simpeler: "Kinderbijslag = elk gezin krijgt vast bedrag per kind, ongeacht inkomen.", nogSimpeler: "Iedereen" },
        },
      },
      {
        q: "Wat ging er mis bij de **toeslagenaffaire**?",
        options: ["Ouders werden onterecht als fraudeur aangemerkt", "Er werden veel te veel toeslagen uitbetaald", "Alle toeslagen werden in één keer afgeschaft", "Het was alleen een korte computerstoring"],
        answer: 0,
        wrongHints: [null, "Het probleem was niet dat er te veel werd uitbetaald.", "Toeslagen bestaan nog steeds. Wat overkwam de ouders zelf?", "Een storing is snel opgelost — deze affaire leidde zelfs tot het aftreden van het kabinet. Wat was er zo ernstig?"],
        uitlegPad: {
          stappen: [{ titel: "Algoritme + ambtenaren = drama", tekst: "Belastingdienst gebruikte algoritme dat ouders ten onrechte aanmerkte als fraudeur (vaak met migratie-achtergrond). Toeslagen werden plotseling stopgezet en er werd soms tienduizenden euro's teruggevorderd. Families failliet, kinderen uit huis." }],
          woorden: [{ woord: "toeslagenaffaire", uitleg: "Schandaal (vooral 2013-2019, onthuld 2018-2020) waarbij ~26.000 ouders ten onrechte als fraudeur werden behandeld." }, { woord: "risicomodel (algoritme)", uitleg: "Risico-systeem dat o.a. discriminerend werkte." }],
          theorie: "Compensatieregeling loopt nog (€30k+ per ouder). Leidde tot vallen kabinet Rutte III (2021). Wijst op gevaar van algoritmes zonder menselijk toezicht + structureel racisme in het systeem.",
          voorbeelden: [{ type: "schadebeeld", tekst: "Ouder krijgt €5k toeslag → algoritme markeert als 'fraude' → €100k naheffing + boete → schulden → uithuisplaatsing → jaren strijd." }],
          basiskennis: [{ onderwerp: "Niet 'te veel uitbetaald'", uitleg: "Het probleem was ONTERECHTE beschuldiging, niet te veel uitbetaling." }],
          niveaus: { basis: "Onterechte fraudebeschuldigingen.", simpeler: "Belastingdienst beschuldigde 26.000 ouders ten onrechte van fraude → families in financiële nood.", nogSimpeler: "Schandaal" },
        },
      },
      {
        q: "Wat gebeurt als je toeslag krijgt op basis van **te laag geschat inkomen**?",
        options: ["Je moet later terugbetalen", "Je krijgt later extra geld bij", "Niets, je mag het houden", "Je krijgt meteen een boete"],
        answer: 0,
        wrongHints: [null, "Je echte inkomen was hoger dan gedacht — had je dan recht op meer of op minder toeslag?", "De Belastingdienst rekent achteraf alles na met je echte inkomen. Wat gebeurt er dan?", "Een boete krijg je bij fraude. Een schatting die achteraf te laag blijkt, is geen fraude — wat gebeurt er dan wel?"],
        uitlegPad: {
          stappen: [{ titel: "Verrekening achteraf", tekst: "Toeslagen krijg je op basis van GESCHAT inkomen. Werkelijk inkomen wordt achteraf gecontroleerd (na IB-aangifte). Te weinig geschat = te veel toeslag = TERUGBETALEN. Geen boete (mits geen fraude)." }],
          woorden: [{ woord: "terugvordering", uitleg: "Belastingdienst vraagt te veel ontvangen toeslagen terug." }, { woord: "inkomenswijziging", uitleg: "Melden zodra inkomen verandert — voorkomt terugvordering." }],
          theorie: "Tip: schat je inkomen RUIM. Liever te weinig toeslag krijgen + nakrijgen dan te veel + terugbetalen. Of: gebruik de officiële proefberekening.",
          voorbeelden: [{ type: "schadebeeld", tekst: "Geschat €20k → werkelijk €30k (extra bijbaan) → te veel zorgtoeslag → €600 terugbetalen." }],
          basiskennis: [{ onderwerp: "Niet boete", uitleg: "Verkeerde schatting ≠ fraude. Geen boete, wel terugbetalen." }],
          niveaus: { basis: "Terugbetalen.", simpeler: "Te laag inkomen geschat → te veel toeslag gehad → Belastingdienst vordert terug.", nogSimpeler: "Terugbetalen" },
        },
      },
      {
        q: "Wie krijgt **kinderopvangtoeslag**?",
        options: ["Werkende ouders die kinderopvang gebruiken", "Ouders die kinderopvang gebruiken, ook zonder werk", "Werkende ouders bij wie opa en oma oppassen", "Ouders die thuisblijven om voor hun kind te zorgen"],
        answer: 0,
        wrongHints: [null, "Wie niet werkt of studeert, kan vaak zelf oppassen. Is opvang gebruiken dan genoeg om de toeslag te krijgen?", "Oppas door familie is meestal geen geregistreerde kinderopvang. Telt dat mee voor de toeslag?", "Bij thuisblijven betaal je niets voor opvang. Waar is de toeslag dan voor bedoeld?"],
        uitlegPad: {
          stappen: [{ titel: "Twee voorwaarden", tekst: "Kinderopvangtoeslag krijg je als (1) je kind naar formele opvang/crèche/BSO gaat én (2) BEIDE ouders werken of studeren. Anders geen recht." }],
          woorden: [{ woord: "kinderopvangtoeslag", uitleg: "Tegemoetkoming in kinderopvangkosten voor werkende/studerende ouders." }, { woord: "formele opvang", uitleg: "Geregistreerde kinderopvang (in LRK-register). Oma die oppast telt niet (tenzij als geregistreerde gastouder)." }],
          theorie: "Toeslag tot ~96% bij lage inkomens, dalend bij hoog inkomen. Per uur, per kind, max uren afhankelijk van werkuren. Reden voor 2-verdieners-vriendelijk beleid.",
          voorbeelden: [{ type: "stel", tekst: "Twee werkende ouders, kind 3 op crèche €1.000/mnd → toeslag €700-900 afhankelijk van inkomen." }],
          basiskennis: [{ onderwerp: "Niet iedere ouder", uitleg: "Geen opvang gebruikt = geen toeslag. Niet werkend = geen toeslag." }],
          niveaus: { basis: "Werkende/studerende ouders.", simpeler: "Kinderopvangtoeslag = bijdrage in crèche-kosten als je werkt of studeert.", nogSimpeler: "Werk + opvang" },
        },
      },
      {
        q: "**Niet-gebruik** van toeslagen — wat is het probleem?",
        options: ["Veel mensen met recht vragen hem niet aan", "Veel mensen vragen hem aan zonder recht", "Mensen laten de toeslag op hun spaarrekening staan", "Mensen geven de toeslag aan iets anders uit"],
        answer: 0,
        wrongHints: [null, "Aanvragen zonder recht is misbruik of fraude. 'Niet-gebruik' gaat over mensen die iets laten liggen — wie?", "Wat je met een uitbetaalde toeslag doet, mag je grotendeels zelf weten. Waar slaat 'niet-gebruik' dan op?", "Waaraan je de toeslag uitgeeft, mag je grotendeels zelf weten. Waar slaat 'niet-gebruik' dan op?"],
        uitlegPad: {
          stappen: [{ titel: "Geld blijft liggen", tekst: "Veel mensen vragen toeslagen NIET aan waar ze wel recht op hebben — vanwege: onbekendheid, schaamte, ingewikkelde procedure, angst voor terugvordering. ~10-20% niet-gebruik." }],
          woorden: [{ woord: "niet-gebruik", uitleg: "Recht hebben op toeslag/voorziening maar deze niet aanvragen." }, { woord: "toeslagcomplexiteit", uitleg: "5 verschillende toeslagen, elk met eigen voorwaarden — drempel voor gebruik." }],
          theorie: "Vooral kwetsbare groepen (laag opgeleid, migratie-achtergrond, ouderen) lopen toeslagen mis. Goed bedoeld stelsel werkt voor hen niet. Politieke wens: vereenvoudiging, automatische toekenning waar mogelijk.",
          voorbeelden: [{ type: "schadebeeld", tekst: "Lage-inkomen-huishouden met recht op €3k/jr toeslagen → vraagt niets aan → leeft armer dan nodig." }],
          basiskennis: [{ onderwerp: "Niet 'iedereen vraagt te veel'", uitleg: "Tegendeel. Velen vragen JUIST NIET aan wat ze recht hebben." }],
          niveaus: { basis: "10-20% vraagt niet aan.", simpeler: "Veel mensen weten niet dat ze toeslag kunnen krijgen + vragen het niet aan.", nogSimpeler: "Niet-gebruik" },
        },
      },
    ],
  },
  // ─── Stap 6: Belastingmoraal ────────────────────────
  {
    title: "Belastingmoraal — eerlijk of slim?",
    explanation: "Niet iedereen betaalt belasting eerlijk. Drie hoofdvormen van 'minder betalen':\n\n**1. Belastingontwijking (legaal)**\n• Slim gebruik maken van mazen in de wet\n• Bv. internationale concerns die winst verschuiven naar landen met lage belasting (Ierland 12,5% VPB ipv NL ruim 25%; sinds 2024 geldt voor grote concerns een minimum van 15%)\n• Bv. familiebedrijven die erfbelasting omzeilen via BV-structuur\n• 'Slim' maar moreel discutabel\n\n**2. Belastingontduiking (illegaal)**\n• Bewust niet aangeven (verzwijgen)\n• Inkomen niet melden\n• Onkosten verzinnen\n• Boete + naheffing + soms gevangenis\n\n**3. Zwart geld**\n• Inkomen waarover geen belasting wordt betaald\n• Bv. cash-betalingen (tuinman, klusjesman) zonder factuur\n• Schat in NL: 5-15% van BBP zit in zwart circuit\n\n**Waarom is belasting eerlijk betalen belangrijk?**\n• **Solidariteit**: iedereen draagt bij naar vermogen\n• **Functie overheid**: zonder belasting geen scholen, zorg, dijken\n• **Eerlijke markt**: bedrijven die belasting ontwijken hebben oneerlijk voordeel\n• **Verzorgingsstaat**: alleen mogelijk met hoge belasting-naleving\n\n**Belastingmoraal in NL**: relatief hoog (~80% vindt belasting betalen normaal). Vergelijking: Italië, Griekenland aanzienlijk lager.\n\n**Wat is een 'belastingparadijs'?**\n• Land met heel lage belasting + geheimhouding\n• Bv. Kaaimaneilanden, Bahama's, Panama\n• Vroeger ook NL voor sommige internationale constructies (rulings)\n• OESO + EU werken aan strenger toezicht (BEPS-regels)\n\n**Recente schandalen**:\n• **Panama Papers** (2016): 11,5 miljoen documenten over geheime offshore-bedrijven\n• **Pandora Papers** (2021): 12 miljoen documenten, ruim 300 politici genoemd (onder wie 35 (oud-)wereldleiders)\n• **LuxLeaks** (2014): geheime belastingafspraken Luxemburg met grote bedrijven\n\n**Effect op samenleving**:\n• Minder belasting van rijken/multinationals → meer van werknemers/MKB\n• Verlies vertrouwen in systeem\n• Internationale samenwerking nodig (één land kan het niet alleen)\n\n**Wat doet de Belastingdienst?**\n• Controles + boekenonderzoek\n• Risicoanalyse via algoritmes (let op: toeslagenaffaire)\n• Boetes + naheffingen + soms strafrechtelijke vervolging\n• Internationale samenwerking (OESO, EU)\n\n**Burgers en eerlijkheid**:\n• De meeste mensen betalen IB direct via loonheffing → niet veel ontduiking mogelijk\n• Zzp'ers/ondernemers hebben meer ruimte\n• Vermogenden hebben adviseurs die mazen vinden",
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
        options: ["Legaal gebruikmaken van mazen in de wet", "Inkomen bewust verzwijgen voor de fiscus", "Kwijtschelding van je belastingschuld", "Je belasting op tijd en volledig betalen"],
        answer: 0,
        wrongHints: [null, "Bewust verzwijgen is illegaal en heet ontduiking. Wat is het verschil met ontwijken?", "Kwijtschelding vraag je aan als je echt niet kunt betalen — dat is iets anders.", "Dat is gewoon netjes betalen. 'Ontwijken' klinkt anders."],
        uitlegPad: {
          stappen: [{ titel: "Legaal maar discutabel", tekst: "Ontwijking = via SLIMME constructies binnen de wet minder belasting betalen. Niet strafbaar, wel moreel omstreden. Bedrijven verschuiven winst naar lage-belasting-landen." }],
          woorden: [{ woord: "belastingontwijking", uitleg: "Legaal vermijden van belasting via wets-mazen of internationale constructies." }, { woord: "agressieve tax planning", uitleg: "Extreme vorm van ontwijking via creatieve constructies." }],
          theorie: "Bekend: Apple parkeert winst via Ierland (~12,5% VPB) ipv VS (21%) of NL (25,8%). Starbucks 'leent' royalty's tussen dochters om winst te verschuiven. Legaal maar publiek negatief.",
          voorbeelden: [{ type: "MNC", tekst: "Multinationals: winst-verschuiving naar Bermuda/Ierland. Legaal, miljarden minder VPB." }, { type: "particulier", tekst: "Familiebedrijf in BV-structuur om erfbelasting te verlagen. Legaal." }],
          basiskennis: [{ onderwerp: "Niet ontduiking", uitleg: "Ontwijking = legaal. Ontduiking = illegaal (verzwijgen)." }],
          niveaus: { basis: "Legaal mazen gebruiken.", simpeler: "Ontwijking = slim binnen de wet minder belasting. Moreel grijs gebied.", nogSimpeler: "Legaal slim" },
        },
      },
      {
        q: "Wat is **belastingontduiking**?",
        options: ["Bewust niet aangeven of verzwijgen — illegaal", "Slim gebruikmaken van mazen in de wet — legaal", "Te laat aangifte doen door een vergissing", "Uitstel van betaling aanvragen — legaal"],
        answer: 0,
        wrongHints: [null, "Gebruikmaken van mazen in de wet heet ontwijking. Is ontduiken ook legaal?", "Een vergissing is geen opzet. Wat maakt ontduiking strafbaar?", "Uitstel vraag je netjes aan bij de Belastingdienst. Bij ontduiking probeer je iets te verbergen — wat?"],
        uitlegPad: {
          stappen: [{ titel: "Illegaal verzwijgen", tekst: "Ontduiking = bewust verzwijgen van inkomen of bezit. Bijv. cash-inkomsten niet aangeven, fictieve onkosten opvoeren. ILLEGAAL — boete + naheffing + soms gevangenis." }],
          woorden: [{ woord: "belastingontduiking", uitleg: "Illegaal niet aangeven of verlagen van te betalen belasting." }, { woord: "fiscaal vergrijp", uitleg: "Officiële term voor ontduiking — leidt tot boete 25-100% + strafrecht." }],
          theorie: "Sancties: vergrijpboete van meestal 25% (grove schuld) of 50% (opzet), wettelijk maximaal 100%. Bij grote bedragen ook strafrecht (gevangenis). Belastingdienst kan tot 12 jaar terug bij buitenland.",
          voorbeelden: [{ type: "ontduiking", tekst: "Zzp'er verzwijgt 50% omzet → ontdekt na 5 jaar → naheffing €50k + 50% boete €25k = €75k." }],
          basiskennis: [{ onderwerp: "Verschil legaal/illegaal", uitleg: "Ontwijking ≠ ontduiking. Een letter verschil, groot juridisch verschil." }],
          niveaus: { basis: "Verzwijgen = illegaal.", simpeler: "Ontduiking = bewust verzwijgen, illegaal. Boete tot 100% + gevangenis.", nogSimpeler: "Illegaal" },
        },
      },
      {
        q: "Een tuinman die contant betaald wordt zonder factuur:",
        options: ["Mogelijk zwart werk zonder belasting", "Een gift, die de tuinman niet hoeft op te geven", "Witwassen, omdat contant betalen verboden is", "Belastingontwijking: legaal gebruik van regels"],
        answer: 0,
        wrongHints: [null, "Een gift krijg je zonder er iets voor te doen. De tuinman heeft gewerkt — is dit dan nog een gift?", "Contant betalen mag gewoon, en witwassen gaat over geld uit misdaad. Is het geld van deze klant crimineel?", "Ontwijken gebeurt binnen de regels van de wet. Valt dit binnen de regels?"],
        uitlegPad: {
          stappen: [{ titel: "Geen factuur = geen spoor", tekst: "Contant + geen factuur = vaak zwart werk. Tuinman geeft inkomen niet aan IB en draagt geen BTW af. Klant 'spaart' BTW. Beide profiteren — Belastingdienst verliest." }],
          woorden: [{ woord: "zwart geld", uitleg: "Inkomsten waarvan geen belasting/BTW is betaald — meestal cash transacties zonder factuur." }, { woord: "informele economie", uitleg: "Werk buiten officiële economie om. Schat 5-15% BBP NL." }],
          theorie: "Beide partijen riskeren: tuinman bij ontdekking boete + naheffing. Klant: zonder factuur heb je weinig rechten bij schade of slecht werk. Risico vooral bij grote werken.",
          voorbeelden: [{ type: "klein", tekst: "€100 cash voor knippen heg — onbekend bij Belastingdienst, vaak ongestraft." }, { type: "groot", tekst: "€10k aan tuinaanleg cash zonder factuur → groot risico bij ontdekking." }],
          basiskennis: [{ onderwerp: "Niet 'gewoon'", uitleg: "Cash zonder factuur is wel WERKEND maar BUITEN de belastingregels. Mogelijk illegaal." }],
          niveaus: { basis: "Zwart geld.", simpeler: "Cash zonder factuur = vaak zwart werk → geen belasting betaald.", nogSimpeler: "Geen factuur = zwart" },
        },
      },
      {
        q: "Wat zijn de **Panama Papers**?",
        options: ["Gelekte documenten over geheime offshore-bedrijven", "Een rapport van de EU over belastingparadijzen", "Een verdrag tussen Panama en de EU over belasting", "Contracten voor schepen door het Panamakanaal"],
        answer: 0,
        wrongHints: [null, "De EU maakt wel een openbare lijst van belastingparadijzen, maar dat is gewoon beleid. Waarom waren de Panama Papers zo'n schandaal?", "Een verdrag wordt openlijk gesloten — waarom stond dit dan als schandaal in de krant?", "Klinkt logisch bij Panama — maar waarom kwamen deze 'papers' dan wereldwijd in het nieuws?"],
        uitlegPad: {
          stappen: [{ titel: "Megaschandaal 2016", tekst: "Panama Papers = lekken van 11,5 miljoen documenten van advocatenkantoor Mossack Fonseca in Panama. Onthulde geheime offshore-bedrijven van wereldleiders, sterren, criminelen — gebruikt voor belastingontwijking + witwassen." }],
          woorden: [{ woord: "Panama Papers", uitleg: "2016 datalek over offshore-bedrijven. Onderzocht door 400 journalisten wereldwijd." }, { woord: "offshore-bedrijf", uitleg: "Bedrijf gevestigd in laag-belasting/geheim land om belasting te ontwijken." }],
          theorie: "Gevolgen: IJslandse premier afgetreden, Britse premier Cameron in moeilijkheden, internationaal onderzoek + nieuwe wetten. Daarna ook Paradise Papers (2017), Pandora Papers (2021) — zelfde patroon, nieuwe namen.",
          voorbeelden: [{ type: "leiders", tekst: "Zo'n 140 politici genoemd in de Panama Papers, onder wie (oud-)regeringsleiders en mensen rond Poetin." }],
          basiskennis: [{ onderwerp: "Niet wet/verdrag", uitleg: "Papers zijn ONTHULLINGEN, geen wetgeving. Wel aanleiding voor nieuwe wetten." }],
          niveaus: { basis: "Lek over offshore-bedrijven.", simpeler: "Panama Papers = enorm datalek dat geheime belasting-constructies van wereldleiders onthulde.", nogSimpeler: "Mega-lek" },
        },
      },
      {
        q: "Waarom is **eerlijke belasting** belangrijk?",
        options: ["Zodat iedereen bijdraagt en bedrijven gelijke kansen hebben", "Zodat iedereen precies hetzelfde bedrag betaalt", "Zodat je zelf kiest waaraan je belastinggeld opgaat", "Zodat de overheid spaargeld heeft voor een crisis"],
        answer: 0,
        wrongHints: [null, "Is hetzelfde bedrag voor arm en rijk eerlijk? Denk aan 'bijdragen naar vermogen'.", "Waar belastinggeld heen gaat, beslist de politiek — niet ieder voor zich. Waar dient het geld wel voor?", "Wegen, scholen en zorg kosten elk jaar geld, ook als er geen crisis is."],
        uitlegPad: {
          stappen: [{ titel: "Drie redenen", tekst: "(1) SOLIDARITEIT: iedereen draagt bij naar vermogen. (2) FINANCIERING: zonder belasting geen zorg/onderwijs/wegen. (3) EERLIJKE MARKT: bedrijven die ontwijken hebben voordeel boven brave concurrenten." }],
          woorden: [{ woord: "belastingmoraal", uitleg: "Mate waarin burgers belasting eerlijk betalen + accepteren." }, { woord: "free-rider", uitleg: "Iemand die wel gebruikt maakt van overheidsvoorzieningen maar niet betaalt." }],
          theorie: "NL belastingmoraal relatief hoog (~80% vindt eerlijk betalen normaal). Vergelijk: Italië, Griekenland veel lager → grijzere economie + slechtere voorzieningen → vicieuze cirkel.",
          voorbeelden: [{ type: "ondernemer", tekst: "Eerlijke ondernemer betaalt €50k VPB. Concurrent ontwijkt naar €10k → laatste kan goedkoper aanbieden, verdringt eerlijke." }],
          basiskennis: [{ onderwerp: "Voor iedereen", uitleg: "Niet alleen rijken — iedereen profiteert van werkende overheid, dus iedereen moet bijdragen." }],
          niveaus: { basis: "3 redenen.", simpeler: "Eerlijk betalen = solidariteit + financiering overheid + eerlijke concurrentie.", nogSimpeler: "Allemaal mee" },
        },
      },
      {
        q: "Een **belastingparadijs** is:",
        options: ["Land met heel lage belasting en veel geheimhouding", "Land met hoge belasting maar veel toeslagen", "Land waar het belastinggeld goed besteed wordt", "Land waar winkels geen btw hoeven te rekenen"],
        answer: 0,
        wrongHints: [null, "Dat lijkt meer op een verzorgingsstaat zoals Nederland. Waarom zou een bedrijf zijn winst juist ergens anders onderbrengen?", "'Paradijs' gaat hier niet over goed besteed geld. Voor wie is zo'n land een paradijs: voor de eigen burgers of voor buitenlandse bedrijven?", "Btw betalen gewone kopers in de winkel. Waarom zouden juist grote bedrijven en rijke mensen hun geld daar parkeren?"],
        uitlegPad: {
          stappen: [{ titel: "Lage belasting + geheim", tekst: "Belastingparadijs = land met (1) zeer lage of geen belasting voor bepaalde inkomsten, (2) geheimhouding (banken hoeven niet te delen met andere landen). Lokt geld + bedrijven aan." }],
          woorden: [{ woord: "belastingparadijs", uitleg: "Land waar belasting laag is + transparantie minimaal. Aantrekkelijk voor ontwijking." }, { woord: "BEPS", uitleg: "Base Erosion and Profit Shifting. OESO-programma tegen belastingontwijking via paradijzen." }],
          theorie: "Bekende: Kaaimaneilanden (0% VPB), Bermuda, Bahama's, Panama, Liechtenstein. Nederland werd zelf gezien als 'doorvoer-paradijs' voor royalty-constructies — sinds 2020 strenger.",
          voorbeelden: [{ type: "Apple", tekst: "Apple parkeerde $250 mrd winst via Ierland → 0,005% effectieve belasting. EU eiste €13 mrd naheffing." }],
          basiskennis: [{ onderwerp: "Niet 'geen belasting'", uitleg: "Meeste paradijzen hebben WEL belasting, maar zeer laag. Pure 0% bestaat zelden." }],
          niveaus: { basis: "Lage belasting + geheim.", simpeler: "Belastingparadijs = land met heel lage belasting + waar overheid niet meekijkt.", nogSimpeler: "Laag + geheim" },
        },
      },
    ],
  },
  // ─── Stap 7: De Belastingdienst ──────────────────────
  {
    title: "De Belastingdienst — hoe werkt het in praktijk?",
    explanation: "De **Belastingdienst** is een overheidsorganisatie die:\n• Belasting + premies int\n• Toeslagen uitbetaalt\n• Aangifte controleert\n• Naheffingen + boetes oplegt\n• Internationaal samenwerkt\n\n**Belangrijke contactpunten voor jou (vroeger of later):**\n\n**1. Aangifte inkomstenbelasting**\n• Ieder jaar voor 1 mei\n• Online via Mijn Belastingdienst (login met DigiD)\n• Vaak vooraf ingevuld (loon, banksaldo, hypotheek)\n• Controleren + indienen\n• Werkenden krijgen vaak teruggave; zzp'ers betalen meestal bij\n\n**2. Voorlopige aanslag**\n• Ondernemers + grote uitgaven (hypotheekrente)\n• Belasting wordt al maandelijks afgedragen of teruggegeven\n• Voorkomt grote bedragen ineens\n\n**3. Toeslagen aanvragen**\n• Via mijn.toeslagen.nl\n• Schat je inkomen voor het komende jaar\n• Wijziging melden! (anders later terugvorderen)\n\n**4. Bezwaar maken**\n• Niet eens met aanslag? 6 weken om bezwaar te maken\n• Kosteloos (eerste lijn)\n• Daarna eventueel rechter (bestuursrecht)\n\n**5. Betalen**\n• Aanslag krijg je per brief of digitaal\n• Op tijd betalen (anders rente + boete)\n• Mogelijkheid betalingsregeling bij grote bedragen\n\n**Sancties**:\n• **Te laat aangifte**: boete €385-€5.514\n• **Te laag aangegeven (grove schuld)**: meestal 25% boete\n• **Opzettelijk te laag (fraude)**: meestal 50%, maximaal 100% + strafrecht\n• **Nahef-bevoegdheid**: 5 jaar (12 jaar bij buitenland)\n\n**Tips voor jou**:\n• **Bewaar bonnen + facturen** (7 jaar)\n• **Check loonstrookje** klopt\n• **Doe aangifte op tijd** (vóór 1 mei)\n• **Vraag toeslagen aan** waar je recht op hebt\n• **Wijzig inkomen-schatting** als je werk vindt/verliest — voorkomt terugvorderingen\n\n**Belastingdienst is digitaal**:\n• DigiD voor alle online zaken\n• App 'Mijn Belastingdienst'\n• Belastingtelefoon: 0800-0543 (gratis)\n\n**Toeslagenaffaire (onthuld 2018-2020)**:\n• Belastingdienst gebruikte algoritme dat onterecht ouders aanmerkte als fraudeur\n• Veel families in armoede gestort, kinderen uit huis geplaatst\n• Compensatieregeling loopt nog\n• Leidt tot hervorming + andere werkwijze\n\n**Tip voor zzp/ondernemers (later voor jou):**\n• Houd ~30% omzet apart voor belasting + BTW\n• Anders sta je voor verrassing bij aangifte",
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
        options: ["Vóór 1 mei elk jaar", "Vóór 1 januari elk jaar", "Vóór 31 december elk jaar", "Vóór 1 juli elk jaar"],
        answer: 0,
        wrongHints: [null, "Op 1 januari is het jaar net voorbij en heb je je jaaropgaaf nog niet. Kan de aangifte dan al klaar zijn?", "Dan zit je al bijna een heel jaar verder. Valt de deadline eerder of later?", "Dan ben je te laat. Weet je in welke maand veel ouders met hun aangifte bezig zijn?"],
        uitlegPad: {
          stappen: [{ titel: "1 mei standaard", tekst: "Standaard deadline IB-aangifte = 1 mei van het jaar daarna (over 2024 → vóór 1 mei 2025). Bij uitstel via Belastingdienst: tot 1 september." }],
          woorden: [{ woord: "aangifte", uitleg: "Jaarlijkse opgave van inkomen + aftrekposten via Belastingdienst." }, { woord: "uitstel", uitleg: "Verzoek voor later indienen — meestal automatisch toegekend bij Belastingadviseur." }],
          theorie: "Vooraf ingevuld via Mijn Belastingdienst (DigiD). Werkenden krijgen vaak teruggave (te veel ingehouden loonheffing). Te laat = boete €385+.",
          voorbeelden: [{ type: "praktijk", tekst: "Loontrekker: 5 minuten check + indienen. Zzp'er: complex, 2-5 uur." }],
          basiskennis: [{ onderwerp: "Niet vrije keuze", uitleg: "Wel deadline, anders boete oplopend tot €5.514 voor recidivisten." }],
          niveaus: { basis: "Vóór 1 mei.", simpeler: "IB-aangifte moet vóór 1 mei (standaard). Anders: uitstel of boete.", nogSimpeler: "1 mei" },
        },
      },
      {
        q: "Hoe log je in op **Mijn Belastingdienst**?",
        options: ["Met DigiD", "Met je BSN alleen", "Met e-mail + wachtwoord", "Met paspoort"],
        answer: 0,
        wrongHints: [null, "Je BSN staat op veel papieren en pasjes. Is dat genoeg om veilig in te loggen?", "De overheid gebruikt geen los account per website. Met welk inlogmiddel kom je bij alle overheidssites binnen?", "Met je paspoort laat je aan een loket zien wie je bent. Hoe log je online in?"],
        uitlegPad: {
          stappen: [{ titel: "DigiD-systeem", tekst: "Alle overheidsdiensten online via DigiD: gebruikersnaam + wachtwoord + meestal 2FA via SMS of DigiD-app. BSN identificeert je, DigiD authenticeert je." }],
          woorden: [{ woord: "DigiD", uitleg: "Digitale identiteit voor overheidsdiensten. Gratis aan te vragen via DigiD.nl." }, { woord: "BSN", uitleg: "Burgerservicenummer. Uniek identificatienummer — staat op ID-bewijs." }],
          theorie: "DigiD-app vervangt steeds vaker SMS-codes. Veiliger + sneller. Voor Mijn Belastingdienst + Toeslagen + UWV + gemeente. Belangrijk: DigiD nooit delen!",
          voorbeelden: [{ type: "praktijk", tekst: "Login: gebruikersnaam + wachtwoord → SMS-code of DigiD-app-bevestiging → toegang Mijn Belastingdienst." }],
          basiskennis: [{ onderwerp: "Niet BSN alleen", uitleg: "BSN is bekend bij velen — onvoldoende beveiliging. DigiD voegt wachtwoord + 2FA toe." }],
          niveaus: { basis: "DigiD.", simpeler: "Inloggen overheidsdiensten = DigiD (gebruikersnaam + wachtwoord + bevestiging).", nogSimpeler: "DigiD" },
        },
      },
      {
        q: "Hoe lang heb je om **bezwaar** te maken?",
        options: ["6 weken na de aanslag", "2 weken na de aanslag", "1 jaar na de aanslag", "3 maanden na de aanslag"],
        answer: 0,
        wrongHints: [null, "Twee weken is krap om je papieren op orde te krijgen. De wet geeft je meer tijd.", "Een jaar is veel te ruim; de termijn is een stuk korter.", "Drie maanden is te ruim. Hoeveel weken geeft de wet je?"],
        uitlegPad: {
          stappen: [{ titel: "6 weken bezwaartermijn", tekst: "Vanaf datum aanslag heb je 6 weken om bezwaar te maken bij de Belastingdienst. Bezwaar moet schriftelijk (brief of digitaal via Mijn Belastingdienst), gemotiveerd." }],
          woorden: [{ woord: "bezwaar", uitleg: "Eerste stap als je het niet eens bent met aanslag. Belastingdienst kijkt opnieuw." }, { woord: "beroep", uitleg: "Tweede stap na afgewezen bezwaar — via bestuursrechter. Ook 6 weken termijn." }],
          theorie: "Bezwaar = kosteloos. Beroep = griffierecht (~€50-300). Daarna hoger beroep mogelijk. Belastingdienst kan zelf aanslag terugnemen of aanpassen — vaak gunstig.",
          voorbeelden: [{ type: "praktijk", tekst: "Aanslag €5.000 in september → bezwaar mogelijk tot eind oktober. Stuur brief met argumenten." }],
          basiskennis: [{ onderwerp: "Niet onbeperkt", uitleg: "Na 6 weken vervalt bezwaarrecht. Termijn strikt." }],
          niveaus: { basis: "6 weken.", simpeler: "Bezwaar mogelijk binnen 6 weken na aanslagdatum. Daarna te laat.", nogSimpeler: "6 weken" },
        },
      },
      {
        q: "Wat gebeurt bij **opzettelijk te laag aangeven (fraude)**?",
        options: ["Een boete tot 100% en mogelijk strafvervolging", "Je betaalt het verschil terug, met wat rente", "Een boete van hooguit 10% van het bedrag", "Je toeslagen worden een jaar stopgezet"],
        answer: 0,
        wrongHints: [null, "Nabetalen met rente hoort bij een vergissing. Bij opzet komt er meer bij — wat?", "Een lage boete past bij een slordigheid. Opzettelijk is zwaarder — hoe hoog kan het dan worden?", "Toeslagen staan los van je aangifte. Welke straf hoort bij opzettelijk te laag aangeven?"],
        uitlegPad: {
          stappen: [{ titel: "Zware sancties bij opzet", tekst: "Bij OPZETTELIJK te laag aangeven: boete tot 100% van naheffing + bij grote bedragen strafrechtelijke vervolging (gevangenisstraf). Belastingdienst werkt samen met OM." }],
          woorden: [{ woord: "vergrijpboete", uitleg: "Fiscale boete bij vergrijp: meestal 25% (grove schuld) of 50% (opzet), maximaal 100%." }, { woord: "fiscaal strafrecht", uitleg: "Strafrechtelijke vervolging bij grote belastingfraude. Tot 6 jaar gevangenis." }],
          theorie: "Praktijk: Belastingdienst geeft meestal eerst kans op vrijwillige verbetering. Maar opzet ontdekt = volledige boete. Bekende zaken: grote vastgoedfraudes.",
          voorbeelden: [{ type: "opzet", tekst: "Zzp'er verzwijgt €100k omzet → naheffing €40k + boete 100% = €80k totaal + strafrechtelijk onderzoek." }],
          basiskennis: [{ onderwerp: "Niet korting", uitleg: "Geen 'korting' of waarschuwing bij opzettelijke fraude. Direct boete + soms cel." }],
          niveaus: { basis: "100% boete + strafrecht.", simpeler: "Opzettelijke fraude: tot 100% boete bovenop naheffing + mogelijk gevangenis.", nogSimpeler: "Streng" },
        },
      },
      {
        q: "Hoe lang moet je administratie **bewaren**?",
        options: ["Als ondernemer: 7 jaar", "Als ondernemer: 1 jaar", "Als ondernemer: 5 jaar", "Als ondernemer: 3 jaar"],
        answer: 0,
        wrongHints: [null, "Na een jaar kan de Belastingdienst nog steeds komen controleren. Hoe lang moet je het dan bewaren?", "Particulieren houden vaak 5 jaar aan, omdat de Belastingdienst zo lang terug kan navorderen. Voor een ondernemer is de bewaarplicht langer.", "Ook na 3 jaar kan de Belastingdienst nog controleren. De bewaarplicht is langer."],
        uitlegPad: {
          stappen: [{ titel: "7 jaar", tekst: "Wettelijke bewaarplicht administratie = 7 jaar. Voor onroerend goed: 10 jaar. Belastingdienst kan tot 5 jaar terug controleren (12 jaar bij buitenland)." }],
          woorden: [{ woord: "bewaarplicht", uitleg: "Wettelijke verplichting administratie minimaal X jaar bewaren. Papier of digitaal." }],
          theorie: "Wat bewaren: facturen (verstuurd + ontvangen), bonnen, bankafschriften, contracten, jaarrekeningen, BTW-aangiftes. Te vroeg weggegooid = boete + ongunstige conclusie (Belastingdienst gaat ervan uit dat het tegen jou pleit).",
          voorbeelden: [{ type: "praktijk", tekst: "Zzp 2024 → bewaar bonnen + admin tot 2031. Daarna mag weg." }],
          basiskennis: [{ onderwerp: "Niet alleen ondernemers", uitleg: "Particulieren ook: hypotheekrente-bewijzen, giften, ziektekosten — voor IB-aangifte + controle." }],
          niveaus: { basis: "7 jaar.", simpeler: "Administratie 7 jaar bewaren. Niet weggooien — wettelijke plicht.", nogSimpeler: "7 jaar" },
        },
      },
      {
        q: "**Toeslagenaffaire**: wat ging mis?",
        options: ["Een algoritme zag ouders ten onrechte als fraudeur", "Ouders kregen door een computerfout dubbel uitbetaald", "Banken rekenden ouders te hoge rente op toeslagen", "Kinderopvangbedrijven hielden de toeslag zelf"],
        answer: 0,
        wrongHints: [null, "Het probleem zat niet in te veel uitbetalen, maar in het terugvorderen. Wie werd daarvan de dupe?", "Banken keren geen toeslagen uit; dat doet de Belastingdienst. Wat deed die dienst verkeerd?", "Niet de opvang, maar de ouders waren de dupe. Wat overkwam hen?"],
        uitlegPad: {
          stappen: [{ titel: "Algoritme zonder check", tekst: "Belastingdienst gebruikte algoritme dat ouders aanmerkte als fraudeur (vaak met migratieachtergrond). Toeslagen stopgezet, soms tienduizenden euro's teruggevorderd. Geen menselijke check. ~26.000 ouders in financiële nood." }],
          woorden: [{ woord: "toeslagenaffaire", uitleg: "Schandaal (onthuld 2018-2020): onterechte fraudebeschuldigingen via een risico-algoritme." }, { woord: "algoritmische besluitvorming", uitleg: "Beslissingen door computer-systeem zonder menselijke tussenkomst — risico op fouten + bias." }],
          theorie: "Gevolgen: kabinet Rutte III viel (2021). Compensatieregeling €30k+ per ouder loopt nog. Hervorming Belastingdienst. Wereldwijd voorbeeld van gevaren algoritmes zonder menselijk toezicht.",
          voorbeelden: [{ type: "schadebeeld", tekst: "Ouder met dubbele nationaliteit krijgt €5k kinderopvangtoeslag → algoritme markeert → 'fraude' → naheffing €120k → schuldsanering → kinderen uit huis geplaatst." }],
          basiskennis: [{ onderwerp: "Geen te veel uitbetaling", uitleg: "Probleem was niet teveel — was onterechte BESCHULDIGING + terugvordering van mensen die niets fout deden." }],
          niveaus: { basis: "Onterechte fraudebeschuldigingen.", simpeler: "26.000 ouders door algoritme ten onrechte fraudeur genoemd → grote financiële nood + uithuisplaatsingen.", nogSimpeler: "Schandaal" },
        },
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
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
    { id: "pincode-overheid", title: "Taken van de overheid", niveau: "vmbo-3" },
  ],
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
