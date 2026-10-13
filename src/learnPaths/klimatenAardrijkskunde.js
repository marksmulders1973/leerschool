// Leerpad: Klimaten en klimaatzones — Aardrijkskunde onderbouw VO
// 10 stappen in 4 hoofdstukken (A t/m D).

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  trop: "#43a047", subtrop: "#fbc02d", gematigd: "#42a5f5",
  landkl: "#8d6e63", pool: "#90caf9", hoog: "#ce93d8",
};

const stepEmojis = ["☀️", "🌐", "🌴", "🏜️", "🍂", "🌾", "🧊", "⛰️", "🌡️", "🏆"];

const chapters = [
  { letter: "A", title: "Klimaat — wat is het?", emoji: "☀️", from: 0, to: 1 },
  { letter: "B", title: "De klimaatzones", emoji: "🌐", from: 2, to: 7 },
  { letter: "C", title: "Klimaatverandering", emoji: "🌡️", from: 8, to: 8 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 9, to: 9 },
];

const steps = [
  {
    title: "Weer of klimaat? — verschil",
    explanation: "**Weer** is hoe het *vandaag* of *deze week* is — zon, regen, wind, temperatuur op één moment. Het verandert constant.\n\n**Klimaat** is het **gemiddelde weer** over een lange periode (minstens 30 jaar) op een plek. Het zegt iets over wat je kunt verwachten.\n\n**Voorbeelden**:\n• 'Vandaag regent het in Amsterdam' → **weer**.\n• 'Nederland heeft een gematigd zeeklimaat' → **klimaat**.\n• 'Het is 25 °C in juli' → weer (één meting).\n• 'In juli is het in Spanje gemiddeld 30 °C' → klimaat.\n\nMeteorologen kijken naar weer (vandaag, morgen). Klimatologen kijken naar klimaat (lange tijd, patronen).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="120" height="120" rx="10" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="80" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WEER</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vandaag</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">deze week</text>
<text x="80" y="124" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">verandert snel</text>
<rect x="160" y="30" width="120" height="120" rx="10" fill="rgba(66,165,245,0.10)" stroke="${COLORS.gematigd}" stroke-width="2"/>
<text x="220" y="55" text-anchor="middle" fill="${COLORS.gematigd}" font-size="13" font-family="Arial" font-weight="bold">KLIMAAT</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">gemiddelde</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">≥ 30 jaar</text>
<text x="220" y="124" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">verandert langzaam</text>
</svg>`,
    checks: [
      {
        q: "Wat is klimaat?",
        options: ["Het gemiddelde weer over 30 jaar","Het gemiddelde weer over één jaar","De temperatuur op één plek nu","Het weer tijdens een heel seizoen"],
        answer: 0,
        wrongHints: [null, "Eén jaar kan toevallig erg nat of warm zijn. Over hoeveel jaar neem je het gemiddelde voor klimaat?", "Eén meting op één moment: is dat weer of klimaat?", "Een seizoen duurt maar een paar maanden. Is dat lang genoeg om iets over klimaat te zeggen?"],
        uitlegPad: {
          stappen: [{ titel: "Weer = nu, klimaat = lang", tekst: "Weer = nu/vandaag/deze week. Klimaat = gemiddelde van weer over MINSTENS 30 jaar. Bv. NL klimaat = gematigd zeeklimaat (vast patroon decennia). NL weer vandaag = misschien zonnig + 22°C." }],
          woorden: [{ woord: "klimaat", uitleg: "Gemiddeld weer over lange tijd (≥30 jaar)." }, { woord: "meteoroloog", uitleg: "Wetenschapper weer-voorspelling." }, { woord: "klimatoloog", uitleg: "Wetenschapper langetermijn-klimaat." }],
          theorie: "30 jaar minimum nodig om patronen te zien. Anders ziet verandering eruit als natuurlijk schommelen.",
          voorbeelden: [{ type: "vergelijk", tekst: "Weer: 'morgen 18°C'. Klimaat: 'in juli gemiddeld 18°C in NL'." }],
          basiskennis: [{ onderwerp: "Niet weer", uitleg: "Vandaag/morgen/één meting = weer, niet klimaat. Patronen over decennia = klimaat." }],
          niveaus: { basis: "Gemiddeld weer 30 jaar.", simpeler: "Klimaat = lang-gemiddeld weer (≥30 jaar).", nogSimpeler: "Lang weer" },
        },
      },
      {
        q: "Welke uitspraak gaat over **klimaat**?",
        options: ["Italië heeft warme zomers en milde winters","In Rome regent het op dit moment flink","Morgen wordt het in Milaan 18 °C en droog","Afgelopen zomer was Italië extreem heet en droog"],
        answer: 0,
        wrongHints: [null, "'Op dit moment': gaat dat over één moment of over een lange periode?", "Een voorspelling voor morgen gaat over één dag. Is dat weer of klimaat?", "Eén zomer is één keer, ook al duurt die drie maanden. Over hoeveel jaren gaat klimaat?"],
        uitlegPad: {
          stappen: [{ titel: "Algemene uitspraak = klimaat", tekst: "Italië heeft warme zomers en milde winters = algemene uitspraak, geldt elk jaar = KLIMAAT. Andere opties gaan over één MOMENT of één keer (nu, morgen, afgelopen zomer) = WEER." }],
          woorden: [{ woord: "patroon", uitleg: "Iets dat zich herhaalt over tijd. Klimaat = patroon. Weer = momentopname." }],
          theorie: "Truc: bevat de uitspraak woorden als 'gemiddeld/altijd/meestal/het hele jaar'? → klimaat. Bevat 'nu/vandaag/morgen/deze week'? → weer.",
          voorbeelden: [{ type: "test", tekst: "'NL heeft regen het hele jaar' = klimaat. 'NL heeft vandaag regen' = weer. 'Sahara is droog' = klimaat. 'Sahara is vandaag droog' = weer." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "'Nu', 'morgen', 'vandaag' = weer-woorden. Patroon-uitspraken = klimaat." }],
          niveaus: { basis: "Italië-uitspraak.", simpeler: "'Italië heeft warme zomers' = patroon = klimaat. Andere = momenten = weer.", nogSimpeler: "Patroon" },
        },
      },
    ],
  },
  {
    title: "Hoe ontstaan klimaten? — de zon",
    explanation: "Klimaten ontstaan vooral door de **zon**. Maar de zon schijnt niet overal even sterk.\n\n**Hoe verder van de evenaar, hoe minder zonkracht** — om twee redenen:\n1. **Schuine inval**: bij de polen valt het zonlicht onder een kleine (schuine) hoek → het verspreidt zich over een groter oppervlak en is dus minder sterk per m².\n2. **Lange weg door de atmosfeer**: licht moet daar verder door de atmosfeer, en verliest meer energie.\n\nDaardoor zijn er drie hoofdgroepen:\n• Bij de **evenaar** (0° breedte): heel warm — *tropisch klimaat*.\n• Tussen evenaar en polen (~25°-65°): lekker temperatuurverschil — *gematigd klimaat*.\n• Bij de **polen** (90°): heel koud — *poolklimaat*.\n\nNaast de zon spelen ook **zee/oceaan** (verzacht het klimaat) en **hoogte** (hoe hoger, hoe kouder) een rol.",
    svg: `<svg viewBox="0 0 300 200">
<circle cx="150" cy="100" r="70" fill="${COLORS.gematigd}" opacity="0.25" stroke="${COLORS.gematigd}" stroke-width="2"/>
<line x1="80" y1="100" x2="220" y2="100" stroke="${COLORS.warm}" stroke-width="1" stroke-dasharray="3"/>
<text x="225" y="105" fill="${COLORS.warm}" font-size="10" font-family="Arial">evenaar</text>
<rect x="80" y="92" width="140" height="16" fill="${COLORS.trop}" opacity="0.4"/>
<text x="150" y="104" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">tropisch</text>
<rect x="100" y="60" width="100" height="12" fill="${COLORS.gematigd}" opacity="0.5"/>
<rect x="100" y="128" width="100" height="12" fill="${COLORS.gematigd}" opacity="0.5"/>
<text x="150" y="69" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">gematigd</text>
<text x="150" y="137" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">gematigd</text>
<rect x="120" y="35" width="60" height="10" fill="${COLORS.pool}" opacity="0.6"/>
<rect x="120" y="155" width="60" height="10" fill="${COLORS.pool}" opacity="0.6"/>
<text x="150" y="42" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">pool</text>
<text x="150" y="163" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">pool</text>
</svg>`,
    checks: [
      {
        q: "Waar is de zonkracht het grootst?",
        options: ["Bij de evenaar", "Bij de Noordpool", "Bij de Zuidpool", "In Nederland"],
        answer: 0,
        wrongHints: [null, "Bij de polen valt het zonlicht heel schuin. Wordt het daar dan warm?", "De Zuidpool heeft hetzelfde als de Noordpool: heel schuin zonlicht. Waar valt het zonlicht het meest recht?", "Nederland ligt op 52° NB — valt het zonlicht hier recht of schuin?"],
        uitlegPad: {
          stappen: [{ titel: "Evenaar = recht onder zon", tekst: "Bij de evenaar (0° breedte) valt zonlicht RECHT op aarde. Maximum kracht per m². Bij polen schuin → verspreid over groter oppervlak → minder kracht per plek. Vandaar evenaar = warmst, polen = koudst." }],
          woorden: [{ woord: "evenaar", uitleg: "Denkbeeldige cirkel rond aarde, 0° breedte. Verdeelt aarde in noordelijk + zuidelijk halfrond." }, { woord: "zoninval", uitleg: "Hoek waarin zonlicht op aarde valt. Recht = sterk. Schuin = zwak." }],
          theorie: "3 hoofdgebieden: tropisch (rond evenaar, heet), gematigd (midden, 4 seizoenen), pool (boven/onder, koud).",
          voorbeelden: [{ type: "schuine inval", tekst: "Zaklamp recht op tafel = kleine, felle plek. Schuin = grote, zwakke plek. Zelfde licht, andere kracht per m². Zo werkt zon ook." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Polen = pool = schuin = koud. Hoogte = ook koud (~0,6°C/100m kouder)." }],
          niveaus: { basis: "Evenaar.", simpeler: "Evenaar = recht onder zon, sterkste zonkracht.", nogSimpeler: "Evenaar" },
        },
      },
      {
        q: "Waarom is het bij de polen zo koud?",
        options: ["Het zonlicht valt er heel schuin in","De polen staan dichter bij de zon","De aarde draait daar langzamer rond","Er waait steeds ijskoude wind vanaf zee"],
        answer: 0,
        wrongHints: [null, "De afstand tot de zon is voor de polen en de evenaar bijna gelijk. Wat is er dan anders aan het zonlicht?", "De hele aarde draait in 24 uur één keer rond; dat bepaalt dag en nacht, niet de warmte. Wat is er bij de polen anders dan bij de evenaar?", "Wind verplaatst kou, maar waar komt die kou vandaan?"],
        uitlegPad: {
          stappen: [{ titel: "Schuine zoninval = zwak", tekst: "Bij polen valt zonlicht onder zeer schuine hoek (bijna horizontaal). Dezelfde hoeveelheid licht wordt verspreid over een veel groter oppervlak → minder warmte per m². Plus: zomer is heel kort + winter zonder zon (poolnacht)." }],
          woorden: [{ woord: "poolnacht", uitleg: "Bij polen blijft zon hele winter onder horizon (~6 maanden). Daarna 'middernachtszon' (zon nooit onder)." }, { woord: "albedo", uitleg: "Hoeveel licht een oppervlak weerkaatst. IJs weerkaatst veel (90%). Daarom blijft pool koud." }],
          theorie: "Niet afstand tot zon: aarde-zon afstand verschilt slechts 3% (zomer↔winter). Wel zoninval-hoek. Plus albedo-effect: ijs weerkaatst licht, blijft koud.",
          voorbeelden: [{ type: "feit", tekst: "Antarctica gemiddelde wintertemp: -49°C. Centrum: -89°C (laagst ooit gemeten). Bij evenaar zelden onder 18°C." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Polen niet dichter bij zon (afstand ~vast). De draaiing van de aarde bepaalt dag en nacht, niet de kou. Wind verplaatst kou, maar maakt die niet." }],
          niveaus: { basis: "Schuine zoninval.", simpeler: "Polen koud omdat zon schuin valt, weinig kracht per m².", nogSimpeler: "Schuine zon" },
        },
      },
    ],
  },
  {
    title: "Tropisch klimaat (A)",
    explanation: "**Ligging**: rond de evenaar, tussen ~23° NB en 23° ZB.\n\n**Kenmerken**:\n• Het hele jaar **warm** (≥ 18 °C, vaak 25-30 °C).\n• Geen seizoenen zoals wij die kennen.\n• Veel **regen** (bij de savanne alleen in de natte tijd).\n\n**Subtypes**:\n• **Tropisch regenwoud (Af)**: het hele jaar warm én nat. *Voorbeelden: Amazonegebied, Congo.*\n• **Savanne (Aw)**: warm met een **droge** en een **natte** tijd. Grasvlaktes met losse bomen. *Voorbeelden: groot deel van Afrika, India.*\n\n**Wat groeit er?**\n• Regenwoud: enorme bomen, lianen, tropische dieren.\n• Savanne: gras, acacia's, leeuwen, zebra's, olifanten.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.trop}" opacity="0.18" stroke="${COLORS.trop}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.trop}" font-size="14" font-family="Arial" font-weight="bold">TROPISCH 🌴</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Warm jaar rond (≥18°C)</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Veel regen</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Bij de evenaar</text>
</svg>`,
    checks: [
      {
        q: "Welk gebied heeft een tropisch regenwoudklimaat?",
        options: ["Amazonegebied", "Savannes van Kenia", "Middellandse Zeegebied", "Siberië"],
        answer: 0,
        wrongHints: [null, "In Kenia zie je grasland met losse bomen. Is het daar het hele jaar nat?", "Daar zijn de zomers heet en droog. Past dat bij een regenwoud?", "Siberië heeft lange, strenge winters. Past dat bij een regenwoud?"],
        uitlegPad: {
          stappen: [{ titel: "Amazone — grootste regenwoud", tekst: "Amazonegebied (Brazilië/Peru/Colombia) ligt rond evenaar. Hele jaar warm (25-30°C) + heel veel regen (2000+ mm/jaar). Daarom: tropisch regenwoud. Andere regenwouden: Congo (Afrika), Indonesië (Azië)." }],
          woorden: [{ woord: "Amazonegebied", uitleg: "5,5 mln km² regenwoud in Zuid-Amerika. Grootste regenwoud wereld." }, { woord: "regenwoud", uitleg: "Bos met veel bomen + veel regen. Klimaat: warm + nat hele jaar." }],
          theorie: "Tropisch regenwoud-klimaat (Af in Köppen-systeem): T>18°C alle maanden + >60mm regen elke maand. Voldoet Amazone, Congo, Indonesië.",
          voorbeelden: [{ type: "andere", tekst: "Andere klimaten in de opties: savanne Kenia (Aw). Middellandse Zeegebied = mediterraan (Cs). Siberië = landklimaat / boreaal (Dfc)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Kenia-savanne = droge tijd. Middellandse Zee = droge zomers. Siberië = koud noord." }],
          niveaus: { basis: "Amazonegebied.", simpeler: "Tropisch regenwoud = Amazone, Congo, Indonesië.", nogSimpeler: "Amazone" },
        },
      },
      {
        q: "Wat is het verschil tussen regenwoud en savanne?",
        options: ["Savanne heeft een droge en natte tijd, regenwoud is altijd nat","Regenwoud heeft een droge en natte tijd, savanne is altijd nat","Savanne is het hele jaar koel, regenwoud is het hele jaar heet","Savanne ligt dicht bij de polen, regenwoud bij de evenaar"],
        answer: 0,
        wrongHints: [null, "Kijk welk landschap een dicht, altijd groen bos heeft. Kan zo'n bos maandenlang zonder regen?", "Allebei liggen ze in de tropen. Hoe warm is het daar het hele jaar?", "Waar leven leeuwen, zebra's en olifanten? Is dat ver in het noorden, of rond de evenaar?"],
        uitlegPad: {
          stappen: [{ titel: "Droog vs nat seizoen", tekst: "Regenwoud (Af) = hele jaar nat + warm. Savanne (Aw) = warm met TWEE seizoenen: droog + nat. Verschil = regenpatroon, niet temperatuur. Beide tropisch (warm)." }],
          woorden: [{ woord: "savanne", uitleg: "Tropisch grasland met losse bomen (acacia's). Wisselend droog/nat." }, { woord: "regenwoud", uitleg: "Dicht bos, altijd vochtig + warm." }],
          theorie: "Vegetatie: regenwoud = enorme bomen + lianen. Savanne = gras + acacia's (grootste 5-10 m). Dieren: regenwoud = apen, jaguars. Savanne = leeuwen, zebra's, olifanten.",
          voorbeelden: [{ type: "voorbeelden", tekst: "Regenwoud: Amazone, Congo. Savanne: Serengeti (Tanzania), Indiase grasvelden. Beide rond evenaar, allebei warm." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Beide warm (niet kouder). Geen sneeuw (te warm). Bij evenaar (niet polen)." }],
          niveaus: { basis: "Droog/nat tijd verschil.", simpeler: "Savanne = droge + natte tijd. Regenwoud = altijd nat. Beide tropisch.", nogSimpeler: "Droog seizoen" },
        },
      },
    ],
  },
  {
    title: "Subtropisch / woestijnklimaat (B)",
    explanation: "**Ligging**: zone *direct boven* en *onder* de tropen (~20°-35°). Veel zon, weinig regen.\n\n**Twee belangrijke subtypes**:\n\n**B-woestijn (BW)**\n• Heel **droog** (<250 mm regen per jaar).\n• Overdag heet, 's nachts koud.\n• *Voorbeelden: Sahara, Atacama, Australische binnenland.*\n\n**B-steppe (BS)**\n• Iets meer regen dan woestijn (250-500 mm).\n• Korte grasvlaktes — geen bomen.\n• *Voorbeelden: rand van Sahara (Sahel), grote vlakten van centraal Azië.*\n\n**Mediterraan klimaat (Cs)** — een speciaal subtropisch klimaat:\n• Warme **droge** zomers, milde **natte** winters.\n• *Voorbeelden: Italië, Spanje, Griekenland, Californië.*",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.subtrop}" opacity="0.20" stroke="${COLORS.subtrop}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.subtrop}" font-size="14" font-family="Arial" font-weight="bold">SUBTROPISCH 🏜️</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Veel zon, weinig regen</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Woestijn / steppe</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Mediterraan = droge zomer</text>
</svg>`,
    checks: [
      {
        q: "Welk klimaat heeft Spanje?",
        options: ["Mediterraan", "Woestijnklimaat", "Gematigd zeeklimaat", "Landklimaat"],
        answer: 0,
        wrongHints: [null, "Spanje is in de zomer heet en droog, maar in de winter regent het er wel. Is het dan een woestijn?", "Dat heeft Nederland: regen in alle seizoenen. Hoe zijn de zomers in Spanje?", "Een landklimaat heeft strenge winters. Hoe zijn de winters aan de Spaanse kust?"],
        uitlegPad: {
          stappen: [{ titel: "Mediterraan = droge zomer", tekst: "Spanje + Italië + Griekenland + Zuid-Frankrijk: mediterraan klimaat (Cs). Warme, DROGE zomers (>25°C, weinig regen). Milde, NATTE winters (~10°C). Speciaal subtype. Naam: van 'Middellandse Zee' (Latijn medius + terra = midden + land)." }],
          woorden: [{ woord: "mediterraan", uitleg: "'Aan Middellandse Zee'. Klimaattype met droge zomer + natte winter." }],
          theorie: "Andere mediterrane gebieden wereldwijd: Californië, Centraal-Chili, deel Zuid-Afrika, Zuid-Australië. Allemaal westkant continent, ~30-45° breedte. Goed voor: druiven (wijn!), olijven, citrus.",
          voorbeelden: [{ type: "feit", tekst: "Madrid zomertemp ~35°C, vrijwel geen regen. Wintertemp ~6°C, wel regen. NL juist: zomer milder + regen hele jaar." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Woestijn = vrijwel geen regen (Spanje wel 's winters). Zeeklimaat = regen hele jaar, koele zomer. Land = extreem (Spanje juist mild)." }],
          niveaus: { basis: "Mediterraan.", simpeler: "Spanje = mediterraan (subtropisch): droge zomer, natte winter.", nogSimpeler: "Mediterraan" },
        },
      },
      {
        q: "Wat heeft de Sahara?",
        options: ["Woestijnklimaat", "Steppeklimaat", "Savanneklimaat", "Mediterraan klimaat"],
        answer: 0,
        wrongHints: [null, "Een steppe is droog grasland met net genoeg regen voor gras. Groeit er in het grootste deel van de Sahara gras?", "Een savanne heeft een natte tijd met veel regen. Heeft de Sahara die ook?", "Langs de Middellandse Zee regent het 's winters flink. Valt er in de Sahara ook zoveel regen?"],
        uitlegPad: {
          stappen: [{ titel: "Sahara — grootste woestijn", tekst: "Sahara (Noord-Afrika) = grootste WARME woestijn wereld. 9 mln km² (bijna zo groot als de VS!). Woestijnklimaat (BW): <250 mm regen/jaar. Heet overdag (50°C), koud nacht (kan vriezen). Geen vegetatie behalve oases." }],
          woorden: [{ woord: "woestijn", uitleg: "Gebied met <250 mm regen/jaar. Kan heet (Sahara) of koud (Gobi)." }, { woord: "oase", uitleg: "Plek in woestijn met water uit ondergrondse bron. Mensen + planten daar." }],
          theorie: "Andere grote woestijnen: Australië-binnenland, Gobi (Mongolië), Atacama (Chili, droogste), Arabische woestijn. Ontstaan door subtropische hogedruk (lucht droogt).",
          voorbeelden: [{ type: "schaal", tekst: "Sahara 9 mln km². Atacama is droogste plek aarde (sommige plekken 0 mm regen sinds metingen). Vergelijk: NL ~800 mm regen/jaar." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Steppe = net genoeg regen voor gras. Savanne = WEL regen-seizoen. Mediterraan = veel meer regen." }],
          niveaus: { basis: "Woestijnklimaat.", simpeler: "Sahara = woestijn (BW), heet en heel droog (<250 mm regen).", nogSimpeler: "Woestijn" },
        },
      },
    ],
  },
  {
    title: "Gematigd klimaat (C) — Nederland",
    explanation: "**Ligging**: tussen ~35° en 60° breedte. Hier woont een groot deel van de wereldbevolking.\n\n**Kenmerken**:\n• Vier duidelijke **seizoenen**: lente, zomer, herfst, winter.\n• Niet extreem warm, niet extreem koud.\n• Genoeg regen, gespreid over het jaar.\n\n**Twee subtypes** belangrijk voor Nederland:\n\n**Zeeklimaat (Cfb)** — Nederland!\n• Zachte winters (>0 °C gemiddeld), koele zomers (~17 °C).\n• Het hele jaar regen.\n• Komt door de **zee** + de westenwind die zachte oceaanlucht aanvoert.\n\n**Landklimaat (Dfb)** — niet in NL\n• Verder van zee → koudere winters (-10 °C of lager) en warmere zomers (>20 °C).\n• *Voorbeelden: Polen, Oekraïne, midden van Rusland.*\n\nHet **verschil**: hoe verder van zee, hoe groter het temperatuurverschil tussen zomer en winter.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.gematigd}" opacity="0.18" stroke="${COLORS.gematigd}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.gematigd}" font-size="14" font-family="Arial" font-weight="bold">GEMATIGD 🍂</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• 4 seizoenen</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Zeeklimaat (NL): zacht</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Landklimaat: extreem</text>
</svg>`,
    checks: [
      {
        q: "Welk klimaat heeft Nederland?",
        options: ["Gematigd zeeklimaat", "Subpolair klimaat", "Mediterraan klimaat", "Gematigd landklimaat"],
        answer: 0,
        wrongHints: [null, "Subpolair is het klimaat van Noord-Scandinavië: lange, ijskoude winters. Zijn de winters in Nederland zo?", "Mediterraan heeft hete, droge zomers. Zijn de zomers in Nederland zo droog?", "Een landklimaat heeft strenge winters, ver van zee. Ligt Nederland ver van zee?"],
        uitlegPad: {
          stappen: [{ titel: "Cfb — gematigd zeeklimaat", tekst: "Nederland heeft gematigd zeeklimaat (Cfb). Kenmerken: zachte winters (~3°C gem), koele zomers (~17°C), regen het hele jaar (~800 mm), 4 seizoenen. Zee zorgt voor 'verzachting' — temperaturen schommelen minder dan binnenland." }],
          woorden: [{ woord: "Cfb", uitleg: "Köppen-code. C=gematigd, f=geen droog seizoen, b=warme zomer (niet heet)." }, { woord: "verzachting", uitleg: "Zee houdt warmte langer vast → minder extreem temperatuurverschil zomer↔winter." }],
          theorie: "Zelfde klimaat: VK, Ierland, België, Noord-Duitsland, Denemarken, NW Frankrijk. Allemaal westkust Europa onder invloed Golfstroom + westenwind.",
          voorbeelden: [{ type: "vergelijk", tekst: "NL januari ~3°C. Polen (landklimaat, zelfde breedte) januari -3°C. Verschil = afstand tot zee." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Subpolair = lange ijskoude winter. Mediterraan = droge zomer. Landklimaat = extreme winter." }],
          niveaus: { basis: "Gematigd zeeklimaat.", simpeler: "NL = gematigd zeeklimaat (Cfb), zacht door zee.", nogSimpeler: "Zeeklimaat" },
        },
      },
      {
        q: "Waarom is het in Nederland 's winters zo zacht?",
        options: ["Westenwind brengt warmte van de oceaan","Hogedrukgebieden blijven boven Nederland hangen","De warmte van steden en fabrieken","De Alpen houden koude lucht tegen"],
        answer: 0,
        wrongHints: [null, "Een hogedrukgebied brengt in de winter juist vaak vorst. Welke wind waait er meestal in Nederland, en waar komt die vandaan?", "Steden zijn iets warmer, maar ook op het platteland zijn de winters zacht. Wat werkt er op héél Nederland?", "De Alpen liggen ver in het zuiden. Kunnen die koude lucht uit het oosten en noorden tegenhouden?"],
        uitlegPad: {
          stappen: [{ titel: "Golfstroom + westenwind", tekst: "Atlantische Oceaan + Golfstroom voert warm zeewater + lucht aan vanaf Mexicaanse Golf naar Europa. Westenwind blaast die warme lucht naar binnenland. Resultaat: NL veel zachter dan zelfde breedte zonder zee (bv. Canada centraal-binnenland)." }],
          woorden: [{ woord: "Golfstroom", uitleg: "Warme zeestroming Caribische Zee → Atlantische Oceaan → Noordwest-Europa. Brengt warmte." }, { woord: "westenwind", uitleg: "Wind die uit het westen blaast. In NL dominant door rotatie aarde + drukverschillen." }],
          theorie: "Zonder de invloed van de zee zou NL veel koudere winters hebben, zoals Canada-binnenland op dezelfde breedte (Calgary ~-10°C in januari). Nu: +3°C gemiddeld — dat verschil komt door de zee.",
          voorbeelden: [{ type: "vergelijk", tekst: "Canada zelfde breedte (Calgary 52° N): januari -10°C. Amsterdam 52° N: januari +3°C. Atlantische Oceaan effect." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Hogedruk brengt 's winters juist vaak vorst. Steden = klein effect. De Alpen liggen te ver weg om koude lucht tegen te houden." }],
          niveaus: { basis: "Zee + westenwind.", simpeler: "NL zacht 's winters door warme zee + westenwind uit Atlantische Oceaan.", nogSimpeler: "Zee warm" },
        },
      },
    ],
  },
  {
    title: "Landklimaat (D) en koud klimaat",
    explanation: "**Landklimaat** ligt verder van zee. Het is **extremer**: hete zomers én koude winters.\n\n**Kenmerken**:\n• Grote temperatuurverschillen tussen zomer en winter.\n• Minder regen dan zeeklimaat.\n• *Voorbeelden: Polen, Rusland, midden van Canada.*\n\n**Boreaal klimaat (Dfc)** — naaldwouden:\n• Lange koude winters, korte koele zomers.\n• Naaldbomen (taiga): dennen, sparren.\n• *Voorbeelden: Siberië, Canada, Scandinavië (noordelijk deel).*\n\n**Geheugentruc**: 'Land' in landklimaat = midden in continent → ver van zee → extreem.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.landkl}" opacity="0.20" stroke="${COLORS.landkl}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.landkl}" font-size="14" font-family="Arial" font-weight="bold">LANDKLIMAAT 🌲</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Heet in zomer, koud in winter</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Ver van zee (binnenland)</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Naaldbossen / taiga</text>
</svg>`,
    checks: [
      {
        q: "Wat klopt over **landklimaat**?",
        options: ["Hete zomers en strenge winters","Het hele jaar constant warm","Het is het hele jaar koud","Veel regen, vooral 's winters"],
        answer: 0,
        wrongHints: [null, "Het hele jaar warm hoort bij de tropen. Wat doet een groot continent met de temperatuur in zomer en winter?", "Het hele jaar koud past bij de polen. Hoe zijn de zomers diep in een continent?", "Veel regen en zachte winters horen bij een zeeklimaat. Wat verandert er als je ver van de zee woont?"],
        uitlegPad: {
          stappen: [{ titel: "Ver van zee = extreem", tekst: "Landklimaat (D) = ver van zee, midden in continent. Zonder zee-verzachting: hete zomers (>20°C) + koude winters (<-10°C). Verschil 30+ graden zomer↔winter. Minder regen. Voorbeelden: Polen, Centraal-Rusland, Canada-binnenland." }],
          woorden: [{ woord: "landklimaat", uitleg: "Klimaat met groot temperatuurverschil zomer↔winter. Land = continentaal." }, { woord: "continentaliteit", uitleg: "Hoe sterk een plek 'landklimaat-achtig' is. Bepaald door afstand tot zee." }],
          theorie: "Vergelijk zeeklimaat (NL): klein verschil zomer↔winter (~14°C). Landklimaat (Polen): groot verschil (~25°C). Hoe verder in continent: groter contrast.",
          voorbeelden: [{ type: "cijfers", tekst: "Moskou (Centraal-Rusland, landklimaat): januari -10°C, juli +19°C. Verschil 29°C. NL: januari +3°C, juli +17°C. Verschil 14°C." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Constant warm = tropisch (A). Hele jaar koud = pool (E). Zeeklimaat = milde winter + regen hele jaar." }],
          niveaus: { basis: "Groot zomer-winter verschil.", simpeler: "Landklimaat = extreme zomers + winters door afstand tot zee.", nogSimpeler: "Extreem" },
        },
      },
      {
        q: "Waar vind je een landklimaat?",
        options: ["Centraal Rusland", "Nederland", "Brazilië", "Egypte"],
        answer: 0,
        wrongHints: [null, "Nederland ligt aan zee. Welk klimaat hoort daarbij?", "Brazilië ligt grotendeels in de tropen. Zijn daar strenge winters?", "Egypte is bijna helemaal woestijn. Waar vind je, ver van zee, hete zomers en strenge winters?"],
        uitlegPad: {
          stappen: [{ titel: "Centraal Rusland = ver van zee", tekst: "Centraal-Rusland (Moskou, Siberië) ligt 1000+ km van zee. Extreme winter (-20°C) + warme zomer (+25°C). Voorbeeld landklimaat (D). Andere landklimaten: Polen, Oekraïne, Kazachstan, midden Canada, midden VS." }],
          woorden: [{ woord: "binnenland", uitleg: "Gebied ver van kust. Wordt sterker beïnvloed door land dan door zee." }],
          theorie: "Regel: hoe verder van zee, hoe groter dag/nacht- en zomer/winter-verschil. Land warmt snel op en koelt snel af. Water (zee) verandert traag.",
          voorbeelden: [{ type: "cijfers", tekst: "Moskou jan: -10°C / jul: +19°C. NL jan: +3°C / jul: +17°C. Op ongeveer dezelfde breedte (~52-56° NB) — verschil door zee/land." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "NL = zeeklimaat. Brazilië = tropisch (bij evenaar). Egypte = woestijn (subtropisch droog)." }],
          niveaus: { basis: "Centraal Rusland.", simpeler: "Landklimaat = midden continent. Centraal Rusland = voorbeeld.", nogSimpeler: "Rusland" },
        },
      },
    ],
  },
  {
    title: "Poolklimaat (E)",
    explanation: "**Ligging**: bij de **Noord- en Zuidpool**, en hoge breedten (boven 65°).\n\n**Kenmerken**:\n• Heel **koud**. De warmste maand komt zelden boven de 10 °C.\n• Bijna geen regen — meeste neerslag valt als sneeuw.\n• Vaak permanent ijs of bevroren bodem (**permafrost**).\n\n**Twee subtypes**:\n\n**Toendraklimaat (ET)**\n• Korte zomer waarin er nog korte vegetatie groeit (mossen, gras).\n• *Voorbeelden: Noord-Siberië, noordelijk Canada, IJsland, delen van Groenland.*\n\n**IJsklimaat (EF)**\n• Het hele jaar onder 0 °C — alleen ijs.\n• *Voorbeelden: Antarctica, midden van Groenland.*\n\n**Wie woont er?** Vrijwel niemand in de ijskap. In toendragebieden leven volken zoals de Inuit.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.pool}" opacity="0.20" stroke="${COLORS.pool}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.pool}" font-size="14" font-family="Arial" font-weight="bold">POOLKLIMAAT 🧊</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Heel koud (≤10°C zomer)</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Toendra: mossen, korte zomer</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• IJskap: altijd onder 0°C</text>
</svg>`,
    checks: [
      {
        q: "Wat is **permafrost**?",
        options: ["Bodem die altijd bevroren is","Bodem die elke winter even bevriest","IJs dat altijd op een bergtop ligt","Een ijsberg die in zee drijft"],
        answer: 0,
        wrongHints: [null, "In Nederland bevriest de bovenste laag grond soms een paar weken en ontdooit dan weer. Hoe is dat in Siberië en Alaska?", "IJs dat op een bergtop blijft liggen heet een gletsjer of ijskap. Ligt permafrost bovenop het land, of zit het ergens anders?", "Een ijsberg drijft weg en smelt langzaam. Permafrost blijft altijd op dezelfde plek. Wat is het dan?"],
        uitlegPad: {
          stappen: [{ titel: "Permanent bevroren grond", tekst: "Permafrost = bodem die minstens 2 jaar achter elkaar onder 0°C blijft. Dus altijd bevroren, ook 's zomers. Vooral in poolgebieden (Siberië, noord-Canada, Alaska, Antarctica). Bovenlaag kan in zomer ontdooien, maar dieper blijft ijs." }],
          woorden: [{ woord: "permafrost", uitleg: "'Permanent' + 'frost' (vorst). Permanent bevroren bodem." }, { woord: "toendra", uitleg: "Vlak gebied met permafrost. Korte zomer, geen bomen, mossen + grassen." }],
          theorie: "Permafrost-gebieden: ~25% landoppervlak Noordelijk Halfrond. Door klimaatverandering smelt het — risico: vrijkomen broeikasgassen (methaan) + bodem zakt in.",
          voorbeelden: [{ type: "feit", tekst: "Sommige permafrost in Siberië is duizenden jaren oud. Er zitten nog goed bewaarde mammoetkadavers in." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet de grond die 's winters even bevriest en dan ontdooit. Geen gletsjer of ijsberg: permafrost zit ín de bodem." }],
          niveaus: { basis: "Bevroren bodem.", simpeler: "Permafrost = altijd bevroren grond (>2 jaar).", nogSimpeler: "Bevroren" },
        },
      },
      {
        q: "Welk gebied heeft een ijsklimaat?",
        options: ["Antarctica", "Siberië", "IJsland", "Noord-Canada"],
        answer: 0,
        wrongHints: [null, "Siberië heeft strenge winters, maar in de zomer wordt het er warm. Ligt daar het hele jaar ijs?", "Ondanks de naam heeft IJsland een koel zeeklimaat met groen gras. Waar ligt het hele jaar een dikke ijskap?", "In Noord-Canada ligt toendra: in de zomer ontdooit de bovenlaag. Waar blijft het altijd onder nul?"],
        uitlegPad: {
          stappen: [{ titel: "Antarctica — koudste op aarde", tekst: "IJsklimaat (EF in Köppen) = hele jaar onder 0°C. Vrijwel alleen op Antarctica (zuidpool, 14 mln km²) en midden-Groenland. Geen vegetatie. Soms tot -89°C (laagste ooit gemeten). Geen permanente bewoning behalve wetenschappers." }],
          woorden: [{ woord: "ijsklimaat", uitleg: "Koudste klimaat. Hele jaar onder 0°C." }, { woord: "Antarctica", uitleg: "Zuidpool-continent. 98% bedekt met ijs. Geen vaste bevolking." }],
          theorie: "Verschil ijsklimaat (EF) vs toendraklimaat (ET): toendra heeft KORTE zomer >0°C, ijs nooit. Antarctica binnenland = ijs (EF). Antarctica kust + arctische randen = toendra (ET).",
          voorbeelden: [{ type: "feiten", tekst: "Antarctica heeft 70% wereld-zoetwater (in ijs). IJslaag max 4 km dik. Als alles smelt: zeespiegel +60 m." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Siberië = landklimaat (warme zomer). IJsland = koel zeeklimaat, ondanks de naam. Noord-Canada = toendra (zomer boven 0°C)." }],
          niveaus: { basis: "Antarctica.", simpeler: "IJsklimaat = altijd onder 0°C. Antarctica = voorbeeld.", nogSimpeler: "Antarctica" },
        },
      },
    ],
  },
  {
    title: "Hoogteklimaat — bergen",
    explanation: "**Hoe hoger je komt, hoe kouder het wordt** — gemiddeld zo'n **0,6 °C kouder per 100 meter** stijging.\n\nDaarom kan het op een berg in een tropisch land toch vriezen op de top — denk aan **Kilimanjaro** (Tanzania, vlak bij de evenaar, maar 5895 m hoog → besneeuwde top).\n\n**Verticale klimaatzones** in een berg:\n• Onderaan: het lokale klimaat (bv. tropisch).\n• Hoger: gematigd, dan koud, dan eeuwige sneeuw.\n\n**Voorbeelden**:\n• Andes (Zuid-Amerika).\n• Himalaya (Mount Everest, 8848 m — eeuwig ijs).\n• Alpen (Europa).\n\n**Praktisch**: bergvolkeren leven op verschillende hoogten en passen wat ze verbouwen aan op de hoogte (mais beneden, aardappel midden, lama's hoog).",
    svg: `<svg viewBox="0 0 300 180">
<polygon points="40,150 150,30 260,150" fill="${COLORS.hoog}" opacity="0.30" stroke="${COLORS.hoog}" stroke-width="2"/>
<rect x="40" y="120" width="220" height="30" fill="${COLORS.trop}" opacity="0.4"/>
<text x="150" y="140" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">tropisch / gematigd (laag)</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">koud (midden)</text>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.pool}" font-size="11" font-family="Arial" font-weight="bold">eeuwige sneeuw 🏔️</text>
<text x="20" y="90" fill="${COLORS.muted}" font-size="9" font-family="Arial">↑ 0,6°C kouder/100m</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel kouder wordt het ongeveer per 100 m hoogte?",
        options: ["0,6 °C", "6 °C", "0,06 °C", "1,5 °C"],
        answer: 0,
        wrongHints: [null, "6 °C is de afname per kilometer, dus per 1000 m. Hoeveel is het dan per 100 m?", "Dan zou het op een berg van 3000 m maar 2 graden kouder zijn. Klopt dat met de sneeuw op de Alpen?", "Dan zou het op 2000 m al 30 graden kouder zijn dan beneden. Klopt dat met wandelen in de Alpen in de zomer?"],
        uitlegPad: {
          stappen: [{ titel: "0,6°C kouder per 100m", tekst: "Vuistregel: temperatuur daalt ~0,6°C per 100m stijging (vochtige lucht) tot ~1°C (droge lucht). Dus 1 km hoger = ~6°C kouder. 5 km hoger = ~30°C kouder. Vandaar besneeuwde bergtoppen, ook in warme landen." }],
          woorden: [{ woord: "lapse rate", uitleg: "Engelse term voor temperatuurdaling per hoogte. NL: 'verticale temperatuurgradiënt'." }],
          theorie: "Reden: lucht hoger = minder druk = zet uit = koeler. Vandaar berg-effect. Werkt ook lokaal: dal-bodem zomer warm, bergtop koud.",
          voorbeelden: [{ type: "berekening", tekst: "Strand zee-niveau: 30°C. 1 km hoger berg: 30 - 6 = 24°C. Mount Everest 8848m: 30 - 53 = -23°C. Klopt: Everest = ijskoud." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Niet 6°C (dat is per 1000 m). Niet 0,06°C (te weinig). Niet 1,5°C (te veel). Wel kouder met hoogte." }],
          niveaus: { basis: "0,6°C/100m.", simpeler: "Hoogte = kouder, ~0,6°C per 100m omhoog.", nogSimpeler: "0,6" },
        },
      },
      {
        q: "Hoe kan er sneeuw liggen op de Kilimanjaro, terwijl die vlak bij de evenaar staat?",
        options: ["Hoogte zorgt dat het toch koud wordt","Het is daar winter als het bij ons zomer is","Het is een uitgedoofde vulkaan","Er valt daar veel meer regen dan elders"],
        answer: 0,
        wrongHints: [null, "Zo dicht bij de evenaar is er nauwelijks verschil tussen zomer en winter. Wat is er dan bijzonder aan deze berg?", "Het is een vulkaan, maar dat zorgt niet voor sneeuw. Wat is er nog meer bijzonder aan deze berg?", "Neerslag is nodig voor sneeuw, maar boven nul valt die als regen. Waarom is het boven op de berg onder nul?"],
        uitlegPad: {
          stappen: [{ titel: "5895m → diep onder vriespunt", tekst: "Kilimanjaro (Tanzania) is 5895m hoog. Op zee-niveau bij evenaar: ~25°C. Op 5895m: 25 - 35 = ongeveer -10°C. Daarom: besneeuwde top ondanks ligging op evenaar! Hoogte > breedte voor klimaat." }],
          woorden: [{ woord: "Kilimanjaro", uitleg: "Hoogste berg Afrika. Tanzania. 5895m. Vulkaan (slapend)." }, { woord: "hoogteklimaat", uitleg: "Klimaat door hoogte ipv breedte. Verticale klimaatzones op bergen." }],
          theorie: "Op berg ontstaan VERTICALE klimaatzones: tropisch beneden → gematigd → koud → eeuwige sneeuw. Andere voorbeelden: Andes (tropisch op evenaar, sneeuw boven 5000m), Himalaya.",
          voorbeelden: [{ type: "klimaatzorgen", tekst: "Kilimanjaro-sneeuw is 80% gesmolten sinds 1912 door klimaatverandering. Verwacht volledige verdwijning ~2050. Cultureel verlies." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Bij de evenaar is er nauwelijks zomer of winter. Vulkaan-zijn levert geen sneeuw op. Veel neerslag geeft alleen sneeuw als het koud genoeg is." }],
          niveaus: { basis: "Hoogte koelt.", simpeler: "Kilimanjaro 5895m hoog → ~-10°C top → sneeuw mogelijk ondanks evenaar.", nogSimpeler: "Hoogte" },
        },
      },
    ],
  },

  // C
  {
    title: "Klimaatverandering — wat gebeurt er?",
    explanation: "Het wereldklimaat **verandert**: gemiddeld is het de laatste 150 jaar ~1,2 °C warmer geworden — vooral door menselijk gedrag.\n\n**Oorzaak**: **broeikasgassen** (CO₂, methaan) blijven in de atmosfeer en houden warmte vast (broeikaseffect). Bronnen:\n• Fossiele brandstoffen (kolen, olie, gas) verbranden voor energie en transport.\n• Ontbossing.\n• Veeteelt (koeien stoten methaan uit).\n\n**Gevolgen**:\n• Smelten van **gletsjers en poolijs** → **zeespiegelstijging**.\n• Meer **extreem weer**: hittegolven, zware buien, droogtes, bosbranden.\n• Klimaatzones schuiven op (gematigd wordt warmer; mediterraan wordt droger).\n• Soorten dreigen uit te sterven door verandering van leefomgeving.\n\n**Wat helpt**:\n• Minder fossiel, meer zon/wind.\n• Bossen herstellen.\n• Energie besparen.\n• Internationale afspraken (**Akkoord van Parijs**, 2015): doel max 1,5-2 °C opwarming.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="20" width="260" height="50" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">🌡️ +1,2°C (sinds 1850)</text>
<text x="150" y="58" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">door broeikasgassen (CO₂, methaan)</text>
<text x="20" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">• zeespiegel stijgt</text>
<text x="20" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">• extreem weer (hitte, droogte)</text>
<text x="20" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">• klimaatzones schuiven op</text>
<text x="20" y="160" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Akkoord van Parijs (2015): max 1,5°C</text>
</svg>`,
    checks: [
      {
        q: "Wat is de hoofdoorzaak van klimaatverandering?",
        options: ["Uitstoot van broeikasgassen door mensen","Het ozongat door cfk's van mensen","Schommelingen in de baan van de aarde","De zon straalt de laatste eeuw steeds feller"],
        answer: 0,
        wrongHints: [null, "Het ozongat laat meer uv-straling door, maar warmt de aarde nauwelijks op. Wat houdt de warmte dan wel vast?", "Die baanschommelingen duren tienduizenden jaren. Kunnen ze de snelle opwarming sinds 1850 verklaren?", "Satellieten meten de zon sinds 1978: die is niet feller geworden. Wat is er dan wél veranderd?"],
        uitlegPad: {
          stappen: [{ titel: "Mensen + broeikasgassen", tekst: "Klimaatverandering = aarde warmer (sinds 1850 +1,2°C). Hoofdoorzaak: MENSEN stoten broeikasgassen uit (CO2, methaan, lachgas). Bronnen: fossiele brandstoffen (kolen+olie+gas), ontbossing, veeteelt (koeien-methaan), industrie. Gevolg: meer warmte vastgehouden in atmosfeer." }],
          woorden: [{ woord: "broeikaseffect", uitleg: "Gassen in atmosfeer houden warmte vast (als deken). Natuurlijk maar nu versterkt." }, { woord: "CO2", uitleg: "Kooldioxide. Belangrijkste broeikasgas. Vrij bij verbranden fossiele brandstoffen." }, { woord: "methaan", uitleg: "CH4. Sterker broeikasgas dan CO2 (per kilo ~25× sterker, gerekend over 100 jaar). Van veeteelt + lekkende gas-pijpen." }],
          theorie: "IPCC (wetenschappelijk panel): 95%+ zeker dat klimaatverandering door mensen komt. Vulkanen stoten ~1% van menselijke CO2 uit. Zon-uitstraling vrijwel vast.",
          voorbeelden: [{ type: "cijfers", tekst: "Mensen stoten 35 miljard ton CO2/jaar uit. Alle vulkanen samen: 0,3 mrd ton. Mensen 100× meer." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Ozongat komt door cfk's en warmt de aarde nauwelijks op. Vulkanen klein. Baanschommelingen duren tienduizenden jaren. Zon vrijwel constante uitstraling (volgens metingen)." }],
          niveaus: { basis: "Broeikasgassen door mensen.", simpeler: "Klimaatverandering door mensen die broeikasgassen uitstoten (CO2).", nogSimpeler: "Mensen+CO2" },
        },
      },
      {
        q: "Wat is een gevolg van klimaatverandering?",
        options: ["Zeespiegel stijgt door smeltend ijs","De ozonlaag wordt dunner door de warmte","Woestijnen krijgen meer regen en worden groen","Er vallen minder stormen en hoosbuien"],
        answer: 0,
        wrongHints: [null, "Het ozongat komt door cfk's, niet door opwarming. Welk gevolg komt wél door de warmte?", "Door warmte verdampt er juist meer water. Worden droge gebieden dan natter of droger?", "Warmere lucht kan meer water bevatten. Worden buien dan zwaarder of lichter?"],
        uitlegPad: {
          stappen: [{ titel: "Zeespiegel stijgt", tekst: "Klimaatverandering veroorzaakt: (1) smeltend ijs op land (Groenland + Antarctica) → meer water in zee. (2) Uitzetten zeewater (warm = meer volume). Resultaat: zeespiegel stijgt ~3-4 mm/jaar. Tegen 2100: +30-100 cm. Lage landen (NL, Bangladesh, Malediven) bedreigd." }],
          woorden: [{ woord: "zeespiegelstijging", uitleg: "Niveau zee gaat omhoog. Door smelt + warmere-water-uitzet." }, { woord: "Akkoord van Parijs", uitleg: "VN-klimaatakkoord 2015. Doel: max 1,5-2°C opwarming." }],
          theorie: "Andere gevolgen: meer extreem weer (hittegolven, stormen, droogtes), klimaatzones schuiven op, soorten sterven uit, oogst-problemen, migratie. Allemaal effecten van die +1,2°C nu.",
          voorbeelden: [{ type: "concreet", tekst: "Sinds 1900 zeespiegel +20 cm. Versnelt: 1900-1990 = 1,4 mm/jaar. Nu: 4 mm/jaar. NL beschermt zich met versterkte dijken." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Ozongat komt door cfk's, niet door warmte. IJs smelt (geen aangroei) → zee stijgt. Buien worden juist zwaarder." }],
          niveaus: { basis: "Zeespiegel stijgt.", simpeler: "Gevolg klimaatverandering = zeespiegel stijgt door smeltend ijs.", nogSimpeler: "Zee stijgt" },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — klimaat herkennen",
    explanation: "Tijd om alles toe te passen. Bij elke beschrijving: welk klimaat is het?\n\n**Snelle samenvatting**:\n\n| Klimaat | Kenmerk | Voorbeeld |\n|---|---|---|\n| Tropisch (A) | Warm, veel regen, bij evenaar | Brazilië, Congo |\n| Droog (B) | Veel zon, weinig regen, woestijn | Sahara, Atacama |\n| Gematigd (C) | 4 seizoenen, zacht | Nederland (zee), Spanje (mediterraan) |\n| Landklimaat (D) | Koude winters, warme zomers | Polen, Rusland |\n| Koud / pool (E) | Heel koud, weinig groei | Antarctica, IJsland |\n| Hoogte (H) | Koud door hoogte | Andes, Himalaya |\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">A B C D E + H</text>
<text x="20" y="50" fill="${COLORS.trop}" font-size="11" font-family="Arial">A = tropisch (evenaar)</text>
<text x="20" y="70" fill="${COLORS.subtrop}" font-size="11" font-family="Arial">B = droog (woestijn / steppe)</text>
<text x="20" y="90" fill="${COLORS.gematigd}" font-size="11" font-family="Arial">C = gematigd (NL!)</text>
<text x="20" y="110" fill="${COLORS.landkl}" font-size="11" font-family="Arial">D = landklimaat</text>
<text x="20" y="130" fill="${COLORS.pool}" font-size="11" font-family="Arial">E = pool (heel koud)</text>
<text x="20" y="150" fill="${COLORS.hoog}" font-size="11" font-family="Arial">H = hoogte (bergen)</text>
</svg>`,
    checks: [
      {
        q: "Welk klimaat: \"Het hele jaar warm, veel regen, ligt rond de evenaar\"?",
        options: ["Tropisch regenwoud (A)", "Mediterraan (Cs)", "Gematigd zeeklimaat (C)", "Savanne (Aw)"],
        answer: 0,
        wrongHints: [null, "Mediterraan heeft droge zomers. Valt er dan het hele jaar veel regen?", "Een gematigd zeeklimaat heeft koele winters. Is het daar het hele jaar warm?", "Een savanne ligt ook in de tropen, maar heeft een lange droge tijd. Past 'veel regen' het hele jaar daarbij?"],
        uitlegPad: {
          stappen: [{ titel: "Warm + regen + evenaar = tropisch", tekst: "Beschrijving matcht tropisch regenwoud (A): warm hele jaar + veel regen + bij evenaar. Voorbeelden: Amazonegebied, Congo, Indonesië." }],
          woorden: [{ woord: "Köppen-classificatie", uitleg: "Klimaatindeling van Wladimir Köppen. A=tropisch, B=droog, C=gematigd, D=land, E=pool." }],
          theorie: "Onderscheid binnen tropisch (A): Af = regenwoud (hele jaar nat). Aw = savanne (droog seizoen). Vraag hier zegt 'veel regen' = Af.",
          voorbeelden: [{ type: "uitsluiten", tekst: "Mediterraan = droge zomer (niet hele jaar). Gematigd = 4 seizoenen, niet hele jaar warm. Toendra = koud." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "'Hele jaar warm' = tropisch sleutelwoord. '+evenaar' bevestigt." }],
          niveaus: { basis: "Tropisch (A).", simpeler: "Warm hele jaar + veel regen + evenaar = tropisch regenwoud.", nogSimpeler: "A" },
        },
      },
      {
        q: "Welk klimaat: \"Vier seizoenen, zachte winters, regen door het hele jaar\"?",
        options: ["Gematigd zeeklimaat", "Mediterraan klimaat", "Subpolair klimaat", "Gematigd landklimaat"],
        answer: 0,
        wrongHints: [null, "Mediterraan heeft zachte winters, maar droge zomers. Regent het daar het hele jaar door?", "Subpolair heeft lange, ijskoude winters. Past 'zachte winters' daarbij?", "Een landklimaat heeft strenge winters. Past 'zachte winters' daarbij?"],
        uitlegPad: {
          stappen: [{ titel: "Klassieke NL-beschrijving", tekst: "Vier seizoenen + zachte winters + regen hele jaar = Cfb = gematigd zeeklimaat. NL voorbeeld. Ook UK, Ierland, België, NW Frankrijk, Denemarken." }],
          woorden: [{ woord: "Cfb", uitleg: "Köppen. C=gematigd, f=geen droog seizoen, b=warme (niet hete) zomer." }],
          theorie: "Kenmerken in volgorde: (1) 4 seizoenen = gematigd. (2) Zachte winter = zee-invloed (Cfb). (3) Regen hele jaar = 'f' (geen droog seizoen).",
          voorbeelden: [{ type: "uitsluiten", tekst: "Tropisch = geen seizoenen. Woestijn = nauwelijks regen. IJsklimaat = nooit boven 0°C." }],
          basiskennis: [{ onderwerp: "Klassieker", uitleg: "'NL-beschrijving' = Cfb gematigd zeeklimaat. Hele NL valt hieronder." }],
          niveaus: { basis: "Gematigd zeeklimaat.", simpeler: "4 seizoenen + zacht + regen = gematigd zeeklimaat (NL).", nogSimpeler: "Cfb" },
        },
      },
      {
        q: "Welk klimaat: \"Heel droog, overdag heet, 's nachts koud\"?",
        options: ["Woestijnklimaat", "Savanneklimaat", "Mediterraan klimaat", "Steppeklimaat"],
        answer: 0,
        wrongHints: [null, "Op de savanne valt in de natte tijd veel regen. Is het daar dan het hele jaar heel droog?", "Aan de Middellandse Zee regent het 's winters, en de zee houdt de nachten mild. Past 'heel droog en 's nachts koud' daarbij?", "Een steppe is droog, maar er valt genoeg regen voor gras. Is dat 'heel droog'?"],
        uitlegPad: {
          stappen: [{ titel: "Woestijn — extreem dag/nacht", tekst: "Woestijnklimaat (BW): bijna geen regen + grote temperatuurverschillen dag/nacht. Overdag tot 50°C (Sahara), 's nachts onder 0°C kan. Reden: geen wolken/water → snel warm overdag, snel koud 's nachts." }],
          woorden: [{ woord: "BW", uitleg: "B = droog. W = woestijn (Wüste, Duits)." }],
          theorie: "Vegetatie isoleert warmte. In woestijn: geen planten, geen wolken → grond geeft 's nachts alle warmte terug aan ruimte. Vandaar koude nachten.",
          voorbeelden: [{ type: "feit", tekst: "Sahara overdag 45°C, nacht 5°C. Verschil 40°C op één dag! In tropisch regenwoud: 25°C dag, 23°C nacht (verschil 2°C)." }],
          basiskennis: [{ onderwerp: "Sleutelwoorden", uitleg: "'Heel droog' = woestijn (BW). 'Dag/nacht verschil' = woestijn. 'Heet overdag + koud nacht' = woestijn." }],
          niveaus: { basis: "Woestijnklimaat.", simpeler: "Droog + heet overdag + koud nacht = woestijnklimaat (BW).", nogSimpeler: "Woestijn" },
        },
      },
      {
        q: "Welk klimaat heeft Centraal Rusland?",
        options: ["Landklimaat (D)", "Mediterraan (Cs)", "Zeeklimaat (C)", "Hoogteklimaat (H)"],
        answer: 0,
        wrongHints: [null, "Mediterraan vind je langs de Middellandse Zee, veel zuidelijker. Ligt Centraal Rusland aan zo'n zee?", "Een zeeklimaat vind je dicht bij de zee. Ligt Centraal Rusland aan zee?", "Een hoogteklimaat vind je in hoge bergen. Is Centraal Rusland bergachtig of vlak?"],
        uitlegPad: {
          stappen: [{ titel: "Ver van zee = landklimaat", tekst: "Centraal Rusland (rond Moskou, Siberië) ligt 1000+ km van zee. Resultaat: extreme winters (-10 tot -40°C) + warme zomers (+20°C). Klassiek landklimaat (D). Plus boreaal (Dfc) verder noord met naaldwouden (taiga)." }],
          woorden: [{ woord: "boreaal", uitleg: "Naaldwoud-klimaat (Dfc). Subtype landklimaat. Siberië + Canada + Scandinavië." }, { woord: "taiga", uitleg: "Naaldwoud-gordel in het noorden. Grootste bosgebied op aarde." }],
          theorie: "Vergelijk Moskou (landklimaat): januari -10°C, juli +19°C. NL Amsterdam (zeeklimaat, zelfde breedte): januari +3°C, juli +17°C. Zelfde breedte, ander klimaat door zee-afstand.",
          voorbeelden: [{ type: "uitsluiten", tekst: "Mediterraan = bij Middellandse Zee (Spanje, Italië). Tropisch = bij evenaar. Hoogte = bergen (Rusland-Europa grotendeels vlak)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Ver van zee + extreme winter/zomer = landklimaat (D). Centraal Rusland past perfect." }],
          niveaus: { basis: "Landklimaat.", simpeler: "Centraal Rusland ver van zee = landklimaat (D), extreme zomer/winter.", nogSimpeler: "Land" },
        },
      },
      {
        q: "Wat is een **moesson**?",
        options: ["Seizoenswind met een natte en een droge tijd","Zware storm die boven de oceaan ontstaat","Warme, droge wind die van de bergen af waait","Koude wind uit het noorden in de winter"],
        answer: 0,
        wrongHints: [null, "Een storm duurt een paar dagen. Hoe lang duurt een moesson?", "Zo'n warme, droge bergwind heet föhn. Waar staat de moesson om bekend?", "Denk aan India: wat gebeurt er daar in de natte tijd van het jaar?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een moesson?", tekst: "**Moesson** is een **seizoens-wind** die elke 6 maanden van richting verandert. Veroorzaakt twee duidelijke seizoenen:\n• **Droge moesson** — wind uit binnenland, geen regen\n• **Natte moesson** — wind uit zee, veel regen + overstromingen" },
            { titel: "Waar?", tekst: "Vooral **Zuid-Azië**: India, Bangladesh, Pakistan, Sri Lanka, Myanmar, Thailand, Vietnam, China-zuid.\n\nIn India duurt natte moesson **juni-september**. Mumbai kan in die maanden 1.500-2.000 mm regen krijgen (NL: ~800 mm per heel jaar!). Cyclus is voorspelbaar — boeren plannen oogst eromheen." },
            { titel: "Toets-feit: klimaat + economie", tekst: "Moesson = levensader Azië:\n• Rijst-bouw afhankelijk van regen\n• Miljarden mensen afhankelijk van moesson\n• Te weinig regen = droogte/honger\n• Te veel regen = overstromingen + ziektes\n• Klimaatverandering maakt moesson onvoorspelbaarder" },
          ],
          woorden: [
            { woord: "moesson", uitleg: "Seizoens-wind met droog/nat-wisseling. Vooral Azië." },
            { woord: "tropisch", uitleg: "Klimaat bij evenaar — warm + veel regen." },
            { woord: "cycloon", uitleg: "Tropische storm — Azië noemt het anders dan orkaan (VS) of tyfoon (Grote Oceaan)." },
          ],
          theorie: "Andere klimaat-fenomenen toetsstof:\n• **El Niño** — opwarming van de Grote Oceaan, beïnvloedt wereldweer\n• **Föhn** — droge bergwind (Alpen)\n• **Mistral** — koude wind Frankrijk\n• **Sirocco** — hete wind Sahara → Italië",
          voorbeelden: [
            { type: "feit", tekst: "Cherrapunji (India) is een van de natste plekken op aarde — ~11.000 mm regen/jaar door moesson." },
          ],
          basiskennis: [{ onderwerp: "Niet storm", uitleg: "Moesson is regenseizoen-systeem, geen aparte storm. Wel zware regenval mogelijk." }],
          niveaus: { basis: "Seizoens-wind droog/nat.", simpeler: "Moesson = seizoens-wind die 6 maanden uit zee waait (nat) en 6 maanden uit binnenland (droog). Vooral Zuid-Azië, India.", nogSimpeler: "Wisselwind" },
        },
      },
      {
        q: "Wat zijn **klimaatzones** Köppen?",
        options: ["Indeling van de aarde naar temperatuur en regen","Indeling van de aarde in tijdzones van een uur","Indeling van de aarde in gordels van passaatwind","Indeling van de aarde naar afstand tot de evenaar"],
        answer: 0,
        wrongHints: [null, "Tijdzones gaan over de klok, niet over het weer over vele jaren. Waar keek Köppen naar?", "Passaatwinden horen bij de luchtstromen rond de aarde. Deelde Köppen de aarde in naar wind, of naar iets anders?", "Afstand tot de evenaar speelt mee, maar het milde Nederland en het ijzige Labrador in Canada liggen even ver noordelijk. Waar keek Köppen dan naar?"],
        uitlegPad: {
          stappen: [
            { titel: "Köppen-systeem 1900", tekst: "**Wladimir Köppen** (Duits-Russisch klimatoloog, 1846-1940) bedacht in 1900 een systeem om klimaten in te delen. Nog steeds standaard:\n• **A** — Tropisch (warm + nat, evenaar)\n• **B** — Droog (woestijn + steppe)\n• **C** — Gematigd (NL = Cfb)\n• **D** — Continentaal/land (Rusland)\n• **E** — Polair (Antarctica + Noordpool)\n\nElke groep heeft subtypes (Cfb, Csa, Aw, etc.)." },
            { titel: "Nederland = Cfb", tekst: "NL valt onder **Cfb** = **gematigd zeeklimaat**:\n• **C** = gematigd (geen extremen)\n• **f** = vol jaar nat (volle regen)\n• **b** = warmste maand 10-22°C\n\nKenmerken: milde winter (3-5°C), koele zomer (17-19°C), regen heel jaar. Door **Noordzee + Golfstroom** stabieler dan landen op zelfde breedte." },
            { titel: "Toets-feit: 5 klimaatgordels herkennen", tekst: "**Wereld-kaart klimaten** (van evenaar naar pool):\n• Evenaar: A — tropisch (Amazone, Congo)\n• Subtropen: B — woestijn (Sahara, Australië)\n• Gematigd: C — Europa, oostkust VS\n• Continentaal: D — Rusland, Canada-binnen\n• Pool: E — Antarctica, Groenland\n\nCito vraagt vaak: 'Welk klimaat hoort bij land X?'" },
          ],
          woorden: [
            { woord: "Köppen-classificatie", uitleg: "Wereldwijd systeem voor klimaat-indeling. A-E hoofdgroepen + subtypes." },
            { woord: "Cfb", uitleg: "Klimaat-code NL: gematigd, vol jaar nat, warmste maand 10-22°C." },
            { woord: "Golfstroom", uitleg: "Warme zee-stroming uit Caribisch gebied → Noord-Atlantische Oceaan → houdt NL/UK 5-10°C warmer dan zou moeten." },
          ],
          theorie: "Toets-kaart-vragen:\n• Locatie op kaart → welk klimaat?\n• Klimaat → welke landen passen?\n• Effect klimaat op natuur (regenwoud-tropisch, woestijn-droog, etc.)",
          voorbeelden: [
            { type: "feit", tekst: "Spanje-zuid = Csa (mediterraan, droge zomer). NL = Cfb (vol jaar nat). Beide C maar verschillende sub." },
          ],
          basiskennis: [{ onderwerp: "5 letters onthouden", uitleg: "ABCDE = Tropisch/Droog/Gematigd/Land/Polair. Toets-letters wel kunnen plaatsen." }],
          niveaus: { basis: "5 hoofdgroepen A-B-C-D-E.", simpeler: "Köppen verdeelt wereld-klimaten in 5 groepen: A tropisch, B droog, C gematigd (NL), D land, E polair.", nogSimpeler: "5 klimaten" },
        },
      },
      {
        q: "Wat is een **broeikaseffect**?",
        options: ["Gassen in de lucht houden warmte vast","Warmte die uit de aardkern opstijgt","Gat in de ozonlaag door gassen","Zonlicht dat door wolken wordt teruggekaatst"],
        answer: 0,
        wrongHints: [null, "De aarde wordt vooral door de zon verwarmd, niet van binnenuit. Wat houdt die zonnewarmte vast?", "Dat is een ander probleem (de ozonlaag) — wat houdt de warmte vast?", "Wolken kaatsen licht terug — maar wat houdt de warmte bij de aarde vast?"],
        uitlegPad: {
          stappen: [
            { titel: "Hoe werkt broeikaseffect?", tekst: "**Broeikaseffect** = natuurlijk proces waarbij gassen in atmosfeer **zonnewarmte vasthouden**, vergelijkbaar met glas in een broeikas.\n\n**Stappen**:\n1. Zon stuurt warmte naar aarde\n2. Aarde absorbeert + straalt warmte terug (infrarood)\n3. **Broeikasgassen** (CO₂, methaan, waterdamp) absorberen die infrarood-straling\n4. Warmte blijft in atmosfeer → aarde warmer\n\nZonder broeikaseffect: aarde zou gemiddeld -18°C zijn. Met natuurlijk effect: +15°C. Daarmee leven mogelijk." },
            { titel: "Versterkt broeikaseffect = klimaatverandering", tekst: "Probleem: **mensen maken te veel CO₂** sinds Industriële Revolutie:\n• Verbranden olie/kolen/gas\n• Ontbossing (bomen halen CO₂ uit lucht)\n• Veehouderij (methaan)\n• CO₂ in atmosfeer 280 ppm (1850) → 425 ppm (2024) = +50%\n• Gevolg: aarde +1,2°C warmer (versterkt broeikaseffect)\n\nDaarom: klimaatverandering = mensgemaakte versterking van natuurlijk proces." },
          ],
          woorden: [
            { woord: "broeikasgas", uitleg: "Gas dat warmte vasthoudt: CO₂, methaan (CH₄), lachgas (N₂O), waterdamp." },
            { woord: "atmosfeer", uitleg: "Luchtlaag rond aarde — gemiddeld 100 km hoog. Bevat alle broeikasgassen." },
            { woord: "infrarood", uitleg: "Onzichtbare straling met warmte. Aarde straalt dit uit." },
          ],
          theorie: "Top broeikasgassen-bijdrage opwarming:\n• **CO₂** — 76% (vooral fossiele brandstoffen)\n• **Methaan (CH₄)** — 16% (vee + rijst + lekkende gas-pijp)\n• **Lachgas (N₂O)** — 6% (mest + industrie)\n• **F-gassen** — 2% (koelkast + airco)\n\nCO₂ blijft 100-300 jaar in lucht. Methaan: 10-12 jaar maar 80× sterker effect.",
          voorbeelden: [
            { type: "feit", tekst: "Venus heeft EXTREEM broeikaseffect — atmosfeer 96% CO₂ → oppervlakte 460°C. Loodsmeltende temperatuur." },
            { type: "feit", tekst: "Mars heeft nauwelijks atmosfeer → bijna geen broeikaseffect → -60°C gemiddeld." },
          ],
          basiskennis: [{ onderwerp: "Niet alles slecht", uitleg: "Natuurlijk broeikaseffect = ESSENTIEEL voor leven. Versterking door mens = problematisch." }],
          niveaus: { basis: "Gassen houden warmte vast.", simpeler: "Broeikaseffect = CO₂ + andere gassen in lucht houden zonnewarmte vast. Beetje is goed (leven mogelijk). Te veel = klimaatverandering.", nogSimpeler: "Warmte vasthouden" },
        },
      },
      { q: "Welk klimaat heeft NL?", options: ["Gematigd zeeklimaat","Gematigd landklimaat","Mediterraan klimaat","Subpolair klimaat"], answer: 0, wrongHints: [null, "Een landklimaat heeft strenge winters. Zijn de winters in Nederland streng?", "Mediterraan heeft hete, droge zomers. Hoe zijn de zomers in Nederland?", "Subpolair heeft lange, ijskoude winters en korte zomers. Klopt dat voor Nederland?"] },
      { q: "**Tropisch klimaat** is rond?", options: ["De evenaar","De poolcirkels","De Middellandse Zee","De Sahara"], answer: 0, wrongHints: [null, "Bij de poolcirkels valt het zonlicht heel schuin. Is het daar warm?", "Daar is het in de winter koel en nat. Waar is het het hele jaar warm?", "De Sahara is heet, maar heel droog: woestijnklimaat. Waar is het het hele jaar warm én nat?"] },
      { q: "**Woestijnklimaat** is vooral?", options: ["Droog","Nat","Koud","Tropisch"], answer: 0, wrongHints: [null, "Welke planten groeien er in een woestijn? Wat zegt dat over water?", "'s Nachts kan het in de woestijn koud worden. Maar wat geldt er dag én nacht, het hele jaar?", "Tropisch betekent warm en vaak heel nat. Past dat bij een woestijn?"] },
      { q: "Waarmee meet je **temperatuur**?", options: ["Thermometer","Barometer","Anemometer","Hygrometer"], answer: 0, wrongHints: [null, "'Baro' betekent druk. Wat meet een barometer dus?", "'Anemos' is Grieks voor wind. Wat meet je met een anemometer?", "'Hygro' betekent vocht. Wat meet je met een hygrometer?"] },
      { q: "Welk klimaat heeft de **Sahara**?", options: ["Woestijn","Tropisch","Steppe","Bergklimaat"], answer: 0, wrongHints: [null, "Een tropisch klimaat heeft veel regen en regenwoud. Zie je dat in de Sahara?", "Een steppe is droog grasland met wat regen. Is de Sahara grasland?", "De Sahara is vooral een groot, laag en vlak gebied. Past een bergklimaat daarbij?"] },
      { q: "Wat is **klimaat** versus **weer**?", options: ["Klimaat = lange termijn; weer = nu","Klimaat = nu; weer = lange termijn","Klimaat = een dag; weer = een maand","Klimaat = temperatuur; weer = regen"], answer: 0, wrongHints: [null, "Welke van de twee hoort bij 'vandaag', en welke bij 30 jaar?", "Welke van de twee hoort bij een kort moment, en welke bij een lange periode?", "Beide gaan over temperatuur én regen — waar zit het verschil dan?"] },
      { q: "Welk **gas** is hoofd-broeikasgas?", options: ["CO₂","O₂","N₂","H₂"], answer: 0, wrongHints: [null, "O₂ is zuurstof, het gas dat je inademt. Houdt dat warmte vast?", "N₂ is stikstof: 78% van de lucht, maar geen broeikasgas. Welk gas komt uit uitlaten en schoorstenen?", "H₂ is waterstof; daar zit bijna niets van in de lucht. Welk gas ontstaat bij het verbranden van kolen en olie?"] },
      { q: "Waarvan is het **smelten van poolijs** een gevolg?", options: ["Het versterkte broeikaseffect","Het gat in de ozonlaag","Zure regen door uitlaatgassen","Meer zout in het zeewater"], answer: 0, wrongHints: [null, "Het ozongat laat meer uv-straling door, maar dat warmt de aarde nauwelijks op. Wat laat ijs smelten?", "Zure regen tast bossen en gebouwen aan. Maakt dat het ijs op de polen warmer?", "Zout water bevriest minder snel, maar het zeewater is niet zouter geworden. Wat is er wél veranderd?"] },
      { q: "In welke klimaatzone vind je **toendra**?", options: ["Subpolair","Landklimaat","Woestijn","Gematigd"], answer: 0, wrongHints: [null, "In een landklimaat groeien grote naaldbossen (taiga). Groeien er op de toendra bomen?", "Een woestijn is vooral droog. Wat is op de toendra het grootste probleem voor planten?", "In Nederland groeien gewoon bomen. Op de toendra niet — waarom niet?"] },
      { q: "Wat is een **moesson**?", options: ["Seizoenswind met veel regen","Korte, zware storm op zee","Droge zomerwind uit de woestijn","Koude winterwind uit het noorden"], answer: 0, wrongHints: [null, "Een storm duurt een paar dagen. Hoe lang duurt een moesson?", "Een droge woestijnwind zoals de sirocco brengt hitte en stof. Wat brengt de moesson in India in de zomer?", "Een koude noordenwind zoals de mistral in Frankrijk brengt kou. Wat gebeurt er in Azië in de natte tijd?"] },
      { q: "Op welk continent ligt het **Amazone-regenwoud**?", options: ["Zuid-Amerika","Afrika","Azië","Australië"], answer: 0, wrongHints: [null, "Afrika heeft ook een groot regenwoud, maar dat heet het Congo-regenwoud. Door welk werelddeel stroomt de Amazone?", "Azië heeft regenwoud op Borneo. Door welk werelddeel stroomt de rivier de Amazone?", "Australië is vooral woestijn en savanne."] },
      { q: "Wat is een **gevolg** van klimaatopwarming?", options: ["Zeespiegel-stijging","Groter ozongat","Minder zuurstof","Meer zee-ijs rond de Noordpool"], answer: 0, wrongHints: [null, "Het ozongat komt door cfk's, niet door opwarming. Welk gevolg komt wél door de warmte?", "De hoeveelheid zuurstof in de lucht verandert nauwelijks. Wat verandert er wél als het overal warmer wordt?", "Kijk naar satellietbeelden van de laatste veertig jaar: wordt het ijs rond de Noordpool groter of kleiner?"] },
      { q: "Welk type **regen** komt door bergen?", options: ["Stuwingsregen","Convectieregen","Frontale regen","Motregen"], answer: 0, wrongHints: [null, "Convectieregen ontstaat door opstijgende warme lucht op hete dagen. Wat doet een berg met lucht die ertegenaan waait?", "Frontale regen ontstaat waar warme en koude lucht botsen. Welke regen ontstaat als lucht tegen een berg omhoog moet?", "Motregen zegt iets over de druppels, niet over hoe regen ontstaat."] },
      { q: "Wat doet de **Golfstroom**?", options: ["Transporteert warm water van de tropen naar Europa","Transporteert koud water van de polen naar Europa","Transporteert warm water van Europa naar de tropen","Zorgt voor eb en vloed langs de kust"], answer: 0, wrongHints: [null, "Dan zou het in NL juist kouder zijn — is het hier mild of koud?", "Andersom — waar is het zeewater het warmst?", "Eb en vloed komen door de maan."] },
      { q: "Wat zijn de **Köppen**-zones?", options: ["Internationale klimaat-classificatie","Indeling van gesteenten","Schaal voor de sterkte van aardbevingen","Indeling van tijdzones"], answer: 0, wrongHints: [null, "Gesteenten worden anders ingedeeld — het gaat hier over het weer op lange termijn.", "Dat is de schaal van Richter.", "Tijdzones gaan over de klok, niet over het weer."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const klimatenAardrijkskunde = {
  id: "klimaten-aardrijkskunde",
  title: "Klimaten en klimaatzones",
  emoji: "🌍",
  level: "klas1-3",
  subject: "aardrijkskunde",
  // SLO-kerndoelen aardrijkskunde (G4 batch 3): klimaten, weer, klimaatverandering.
  referentieNiveau: "2F",
  sloKerndoelen: [42, 43],
  sloThema: "Aardrijkskunde — klimaten",
  prerequisites: [
    { id: "werelddelen-landen-po", title: "Werelddelen + landen", niveau: "po-1F" },
    { id: "weersvoorspelling-po", title: "Weer + voorspellen", niveau: "po-1F" },
  ],
  intro:
    "Het verschil tussen weer en klimaat, hoe klimaatzones ontstaan door zon en zee, de 5 hoofdklimaten (A-E) plus hoogteklimaat, met klimaatverandering tot slot. Eerste pad aardrijkskunde onderbouw.",
  triggerKeywords: [
    "klimaat", "klimaten", "klimaatzone", "klimaatzones",
    "weer", "weer en klimaat",
    "tropisch", "regenwoud", "savanne",
    "subtropisch", "woestijn", "mediterraan",
    "gematigd", "zeeklimaat", "landklimaat",
    "polen", "toendra", "permafrost", "ijsklimaat",
    "hoogteklimaat", "kilimanjaro",
    "klimaatverandering", "broeikaseffect", "CO2", "akkoord van parijs",
    "evenaar", "breedtegraad",
  ],
  chapters,
  steps,
};

export default klimatenAardrijkskunde;
