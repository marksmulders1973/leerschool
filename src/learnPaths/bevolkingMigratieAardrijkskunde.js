// Leerpad: Bevolking + migratie — klas 2-3 onderbouw VO.
// Onderdeel aardrijkskunde. Referentieniveau 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  azie: "#ffd54f",
  afrika: "#ff7043",
  europa: "#42a5f5",
  amerika: "#9575cd",
  oceanie: "#26a69a",
  highlight: "#ff8a65",
};

const stepEmojis = ["🌍", "🏙️", "✈️", "↔️", "🇳🇱", "🏆"];

const chapters = [
  { letter: "A", title: "Wereldbevolking + groei", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Spreiding + dichtheid", emoji: "🏙️", from: 1, to: 1 },
  { letter: "C", title: "Migratie — soorten", emoji: "✈️", from: 2, to: 2 },
  { letter: "D", title: "Push + pull factoren", emoji: "↔️", from: 3, to: 3 },
  { letter: "E", title: "Nederland als migratie-land", emoji: "🇳🇱", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function bevolkingsSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Wereldbevolking — verdeling per continent (~8 mld)</text>

<rect x="20" y="50" width="280" height="22" fill="${COLORS.azie}" opacity="0.85"/>
<text x="160" y="66" text-anchor="middle" fill="#0e1014" font-size="11" font-family="Arial" font-weight="bold">Azië — 4,7 mld (59%)</text>

<rect x="20" y="78" width="80" height="22" fill="${COLORS.afrika}" opacity="0.85"/>
<text x="60" y="94" text-anchor="middle" fill="#0e1014" font-size="10" font-family="Arial" font-weight="bold">Afrika 1,5 mld</text>

<rect x="20" y="106" width="40" height="22" fill="${COLORS.europa}" opacity="0.85"/>
<text x="40" y="122" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">Europa</text>

<rect x="20" y="134" width="45" height="22" fill="${COLORS.amerika}" opacity="0.85"/>
<text x="42" y="150" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">Amerika</text>

<rect x="20" y="162" width="8" height="22" fill="${COLORS.oceanie}" opacity="0.85"/>
<text x="40" y="178" fill="${COLORS.text}" font-size="9" font-family="Arial">Oceanië</text>

<text x="120" y="122" fill="${COLORS.text}" font-size="9" font-family="Arial">~750 mln (10%)</text>
<text x="120" y="150" fill="${COLORS.text}" font-size="9" font-family="Arial">~1 mld (13%)</text>
<text x="55" y="178" fill="${COLORS.text}" font-size="9" font-family="Arial">~45 mln</text>

<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Azië = grootst (China + India samen al ~2,8 mld)</text>
</svg>`;
}

const steps = [
  // STAP 1: Wereldbevolking
  {
    title: "Wereldbevolking — hoe groei + verdeling?",
    explanation:
      "Op aarde leven ongeveer **8 miljard mensen** *(2024)*.\n\n**Hoe groeide de wereldbevolking?**\n• **1800**: ~1 miljard.\n• **1927**: 2 miljard *(127 jaar later)*.\n• **1960**: 3 miljard *(33 jaar later — versnelt!)*.\n• **1974**: 4 miljard.\n• **1987**: 5 miljard.\n• **1999**: 6 miljard.\n• **2011**: 7 miljard.\n• **2022**: 8 miljard.\n\nIn 200 jaar **8 keer zoveel** mensen! Dit heet **bevolkingsexplosie**.\n\n**Waarom?**\n• Betere **medische zorg** *(minder kindersterfte, langer leven)*.\n• Betere **voeding** *(landbouw-revolutie 19e-20e eeuw)*.\n• Bestrijding van **infectieziekten** *(vaccinaties, antibiotica)*.\n• Schoner **drinkwater + riolering**.\n\n**Nu groeit het minder snel**:\n• Vooral **Afrika** groeit nog hard.\n• **Europa + Oost-Azië** krimpen *(weinig kinderen)*.\n• Wereldbevolking zou rond **10 miljard** pieken in ~2080-2100.\n\n**Bevolkingscijfers per continent (2024)**:\n• **Azië**: ~4,7 miljard *(grootst — 59% van wereld)*.\n• **Afrika**: ~1,5 miljard *(snel groeiend)*.\n• **Europa**: ~750 miljoen *(stabiel/krimpt)*.\n• **Amerika** *(Noord + Zuid)*: ~1 miljard.\n• **Oceanië**: ~45 miljoen.\n\n**Grootste landen** *(qua mensen)*:\n1. **India** ~1,44 miljard *(2023 grootste, voorbij China)*.\n2. **China** ~1,42 miljard.\n3. **VS** ~333 miljoen.\n4. **Indonesië** ~278 miljoen.\n5. **Pakistan** ~240 miljoen.\n6. **Nigeria** ~225 miljoen.\n7. **Brazilië** ~215 miljoen.\n\n**Geboortecijfer + sterftecijfer**:\n• **Geboortecijfer** = aantal geboortes per 1000 inwoners per jaar.\n• **Sterftecijfer** = aantal sterfgevallen per 1000.\n• **Natuurlijke aanwas** = geboortecijfer − sterftecijfer.\n\nNL: ~10 geboortes − ~9 sterftes = ~1 per 1000 per jaar = klein.\nAfrika gemiddeld: ~30 geboortes − ~7 sterftes = ~23 per 1000 = veel.\n\n**Toets-feitje**:\n**Vergrijzing** = bevolking wordt gemiddeld ouder. Speelt nu in **Europa, Japan, China**. Gevolgen: minder werkenden, meer ouderen die zorg nodig hebben.",
    svg: bevolkingsSvg(),
    checks: [
      {
        q: "Hoeveel mensen op aarde **nu** (2024)?",
        options: ["~8 miljard", "~1 miljard", "~80 miljard", "~100 miljoen"],
        answer: 0,
        wrongHints: [null, "Rond 1800 waren er ongeveer zoveel mensen. Is de wereldbevolking sindsdien gegroeid?", "Waar zou het voedsel voor zoveel mensen vandaan moeten komen? Hoe groot is de wereldbevolking echt?", "Nederland heeft al bijna 18 miljoen inwoners. Kan de hele wereld er dan maar 100 miljoen hebben?"],
      },
      {
        q: "Welk **continent** heeft de meeste mensen?",
        options: ["Azië", "Afrika", "Europa", "Amerika"],
        answer: 0,
        wrongHints: [null, "Afrika groeit het snelst, maar in welk werelddeel liggen de twee landen met de meeste inwoners?", "Europa heeft zo'n 750 miljoen inwoners. Is dat veel vergeleken met de grootste landen ter wereld?", "Noord- en Zuid-Amerika hebben samen ruim 1 miljard inwoners. In welk werelddeel liggen de twee grootste landen?"],
      },
      {
        q: "Welk **land** heeft sinds 2023 de meeste mensen?",
        options: ["India", "China", "VS", "Indonesië"],
        answer: 0,
        wrongHints: [null, "China was tot 2023 nummer 1, maar daar daalt het aantal inwoners nu. Welk land is China voorbijgegaan?", "De VS heeft zo'n 340 miljoen inwoners en staat op plek 3. Welke twee landen hebben er elk meer dan een miljard?", "Indonesië heeft zo'n 280 miljoen inwoners en staat op plek 4. Welke twee landen hebben er elk meer dan een miljard?"],
      },
      {
        q: "Wat is **vergrijzing**?",
        options: ["Bevolking wordt gemiddeld ouder", "Bevolking wordt steeds kleiner", "Bevolking trekt naar het platteland", "Bevolking wordt gemiddeld jonger"],
        answer: 0,
        wrongHints: [null, "Krimpen is iets anders. Waar doet het woord 'grijs' je aan denken?", "Verhuizen is migratie. Waar doet het woord 'grijs' je aan denken?", "Wie krijgt er grijze haren: jonge of oude mensen?"],
      },
      {
        q: "**Bevolkingsgroei** wordt gemeten via?",
        options: ["Geboorten − sterften + (immigratie − emigratie)", "Geboorten − sterften (zonder migratie)", "Geboorten + sterften + immigratie + emigratie", "Immigratie − emigratie (zonder geboorten)"],
        answer: 0,
        wrongHints: [null, "Dat is de natuurlijke groei. Tellen mensen die naar of uit het land verhuizen niet mee?", "Gaat de bevolking omhoog als er iemand sterft of vertrekt?", "Onvolledig — er worden ook mensen geboren en er sterven mensen."],
      },
      {
        q: "Een **bevolkingspiramide** met smalle top + brede basis duidt op?",
        options: ["Jonge bevolking met veel geboorten", "Oude bevolking met veel vergrijzing", "Krimpende bevolking met weinig geboorten", "Bevolking die vooral door migratie groeit"],
        answer: 0,
        wrongHints: [null, "Bij vergrijzing is de top breed. Hoe ziet deze piramide eruit?", "Weinig geboorten geeft een smalle onderkant. Klopt dat met een brede basis?", "Migranten zijn vaak jonge volwassenen; dat maakt het midden dikker. Wat zegt een brede basis?"],
      },
    ],
  },

  // STAP 2: Spreiding + dichtheid
  {
    title: "Spreiding + bevolkingsdichtheid",
    explanation:
      "Mensen wonen **niet gelijkmatig** over de aarde verdeeld.\n\n**Waar wonen de meeste mensen?**\n• **Kustgebieden** *(zee = handel, vis, water)*.\n• **Rivierdalen** *(water, vruchtbare grond)*.\n• **Vlaktes** *(makkelijk bouwen + landbouw)*.\n• **Gematigd klimaat** *(niet te koud, niet te heet)*.\n• **Steden** *(meer werk, voorzieningen)*.\n\n**Waar wonen weinig mensen?**\n• **Woestijnen** *(geen water — Sahara, Gobi)*.\n• **Poolgebieden** *(te koud — Antarctica, Noord-Siberië)*.\n• **Hooggebergte** *(te steil + dunne lucht — Himalaya, Andes)*.\n• **Tropisch regenwoud** *(moeilijk bewerkbaar — Amazone, Congo)*.\n\n**Bevolkingsdichtheid**:\n• = aantal mensen per **km²**.\n• Formule: **bevolking ÷ oppervlakte** = mensen/km².\n\n**Voorbeelden** *(per km²)*:\n• **Monaco** *(stadstaat)*: ~25.000 mensen/km² — dichtst.\n• **Bangladesh**: ~1.200 mensen/km².\n• **Nederland**: ~520 mensen/km² — een van de dichtstbevolkte landen van de EU.\n• **Wereldgemiddelde**: ~60 mensen/km².\n• **Canada**: ~4 mensen/km² — heel leeg.\n• **Mongolië**: ~2 mensen/km².\n• **Groenland**: ~0,03 mensen/km² — bijna leeg.\n\n**Toets-truc — dichtheid berekenen**:\n*'Land X heeft 10 miljoen inwoners en 100.000 km² oppervlakte. Dichtheid?'*\n• 10.000.000 ÷ 100.000 = **100 mensen/km²**.\n\n**Stad versus platteland**:\n• Wereldwijd woont nu **~57% in steden** *(stedelijk)*.\n• 2050 verwacht: **~70%**.\n• In NL: ~92% van mensen in stedelijk gebied *(zeer hoge urbanisatie)*.\n\n**Verstedelijking (urbanisatie)**:\n• Mensen **trekken naar steden** voor werk en opleiding.\n• **Megasteden** = steden met **>10 miljoen** inwoners.\n• Voorbeelden: Tokio (~37 mln), Delhi (~32 mln), Shanghai (~28 mln), São Paulo, Mexico-Stad, Caïro.\n\n**Sloppenwijken (favela / slum)**:\n• Komen voor in snel groeiende steden *(Rio, Mumbai, Lagos)*.\n• Mensen migreren naar stad zonder voldoende huizen → bouwen zelf hutten op vrije grond.\n• Vaak slechte voorzieningen *(water, riool, school)*.\n\n**Randstad (Nederland)**:\n• Verzamelnaam voor **Amsterdam + Rotterdam + Den Haag + Utrecht** + omgeving.\n• Ongeveer **8 miljoen mensen** in een gebied van 12.000 km².\n• Hoogste bevolkingsdichtheid van NL.\n• **Vinex-wijken** = grote nieuwbouwwijken uit jaren '90-'00 (Leidsche Rijn, Almere, Pijnacker etc).\n\n**toetsvraag**:\n*'Waarom is Nederland dichtbevolkt?'* → kleine oppervlakte, goede ligging aan zee + rivieren, vruchtbare grond, sterke economie.",
    checks: [
      {
        q: "Wat is **bevolkingsdichtheid**?",
        options: ["Aantal inwoners per km²", "Totaal aantal inwoners", "Geboorten per 1000 inwoners", "Oppervlakte van een land in km²"],
        answer: 0,
        wrongHints: [null, "China heeft veel inwoners, maar ook heel veel ruimte. Zegt het totaal dan hoe dicht mensen op elkaar wonen?", "Geboorten per 1000 inwoners is het geboortecijfer. Gaat 'dicht' over geboren worden of over ruimte?", "Alleen de oppervlakte zegt niets over hoeveel mensen er wonen. Wat moet je er nog bij nemen?"],
      },
      {
        q: "Waar wonen weinig mensen?",
        options: ["Droge woestijngebieden", "Hellingen van vulkanen", "Rivierdelta's die overstromen", "Kusten waar orkanen komen"],
        answer: 0,
        wrongHints: [null, "Vulkanische grond is erg vruchtbaar: op Java wonen miljoenen mensen vlak bij vulkanen. Is dat weinig?", "In de delta's van Bangladesh en Egypte wonen juist heel veel mensen, ondanks het water. Waarom zou dat zijn?", "Langs kusten als die van Florida en Bangladesh wonen veel mensen, ondanks de orkanen. Wat heb je elke dag nodig dat in sommige gebieden bijna ontbreekt?"],
      },
      {
        q: "**10 miljoen inwoners** op **100.000 km²**. Dichtheid?",
        options: ["100 mensen/km²", "10 mensen/km²", "1000 mensen/km²", "1 mens/km²"],
        answer: 0,
        wrongHints: [null, "Reken na: 10.000.000 gedeeld door 100.000. Hoeveel nullen streep je weg?", "Tel de nullen nog eens: hoeveel blijven er over bij 10.000.000 ÷ 100.000?", "Je deelt inwoners door km². Komt daar echt 1 uit?"],
        uitlegPad: {
          stappen: [
            { titel: "Formule", tekst: "Bevolkingsdichtheid = totale bevolking ÷ oppervlakte." },
            { titel: "Reken uit", tekst: "10.000.000 mensen ÷ 100.000 km² = 100 mensen per km²." },
          ],
          woorden: [{ woord: "km²", uitleg: "Vierkante kilometer — gebied van 1 km bij 1 km." }],
          theorie: "Dichtheid = mensen ÷ oppervlakte.",
          voorbeelden: [{ type: "stap", tekst: "Nederland: 17,9M ÷ 34.000 km² = ~527 mensen/km²." }],
          basiskennis: [{ onderwerp: "Eenheden", uitleg: "1 mln = 1.000.000. 100K = 100.000." }],
          niveaus: {
            basis: "10M ÷ 100K = 100 mensen/km².",
            simpeler: "Deel het aantal mensen door de oppervlakte: 10.000.000 ÷ 100.000 = 100.",
            nogSimpeler: "100",
          },
        },
      },
      {
        q: "Wat is de **Randstad**?",
        options: ["De vier grote steden in het westen", "De steden langs de grote rivieren", "Amsterdam met de steden eromheen", "De vier grootste steden van Brabant"],
        answer: 0,
        wrongHints: [null, "Langs de grote rivieren liggen Nijmegen en Arnhem. Liggen die in het westen van het land?", "Amsterdam hoort erbij, maar welke andere grote steden liggen er nog meer in een ring?", "Eindhoven en Tilburg liggen in het zuiden. In welk deel van het land ligt de Randstad?"],
      },
      {
        q: "**Verstedelijking** (urbanisatie) = ?",
        options: ["Steeds meer mensen wonen in steden", "Steeds minder mensen wonen in steden", "Steeds meer mensen wonen op het platteland", "Steden en platteland blijven even groot"],
        answer: 0,
        wrongHints: [null, "'Stedelijk' komt van stad. Worden steden dan kleiner of groter?", "Dat is de andere kant op. Van welk woord komt 'verstedelijking'?", "Er verandert juist veel. Welk woord zit er in 'verstedelijking'?"],
      },
      {
        q: "Een **krimpregio** in NL is een gebied waar?",
        options: ["Bevolking afneemt", "Bevolking groeit", "Bevolking gelijk blijft", "Veel nieuwe wijken komen"],
        answer: 0,
        wrongHints: [null, "Groeiende regio's liggen vaak rond grote steden. Wat zegt het woord 'krimp'?", "Als er niets verandert, waarom zou je het dan een krimpregio noemen?", "Nieuwe wijken bouw je waar mensen bij komen. Wat gebeurt er in een krimpregio?"],
      },
    ],
  },

  // STAP 3: Migratie — soorten
  {
    title: "Migratie — soorten en redenen",
    explanation:
      "**Migratie** = mensen die **verhuizen** van het ene gebied naar het andere — vaak naar een ander land.\n\n**Soorten migratie**:\n\n**1. Naar richting**:\n• **Emigratie** = uit eigen land vertrekken *(uit-, dus weggaan)*. Wie emigreert is een **emigrant**.\n• **Immigratie** = in een ander land komen wonen *(in-, dus binnenkomen)*. Wie immigreert is een **immigrant**.\nDezelfde persoon: emigrant uit land A, immigrant in land B.\n\n**2. Naar afstand**:\n• **Interne migratie** = binnen 1 land *(bv. van platteland naar stad)*.\n• **Internationale migratie** = tussen landen.\n• **Continentale migratie** = van het ene continent naar het andere.\n\n**3. Naar reden**:\n• **Vrijwillige migratie** = je kiest zelf *(werk, studie, liefde, klimaat)*.\n• **Gedwongen migratie** = je moet weg *(oorlog, vervolging, ramp)*.\n  - **Vluchteling** = mens die zijn land ontvlucht door vervolging/oorlog. Heeft recht op asiel volgens **Vluchtelingenverdrag (1951)**.\n  - **Asielzoeker** = wacht op beslissing of hij vluchteling-status krijgt.\n  - **Ontheemde / IDP** = vluchteling binnen eigen land.\n\n**4. Naar duur**:\n• **Permanente migratie** = voorgoed verhuizen.\n• **Tijdelijke migratie** = voor bepaalde tijd *(seizoenswerk, studie)*.\n• **Pendelen** = dagelijks heen-en-weer *(bv. wonen in stad X, werken in stad Y)*.\n\n**Beroemde grote migratie-stromen** in geschiedenis:\n• **Volksverhuizingen** *(4e-7e eeuw)* — Germaanse volken naar West-Europa.\n• **Naar Amerika** *(15e-20e eeuw)* — Europeanen + slaven uit Afrika.\n• **Werknemers naar Europa** *(1960-'70)* — Marokkanen, Turken naar NL/Duitsland.\n• **Vluchtelingen na oorlogen** *(WO2, Joegoslavië, Syrië)*.\n\n**Cijfers wereld (2024)**:\n• ~280 miljoen mensen wonen buiten hun geboorteland *(~3,5% wereldbevolking)*.\n• ~36 miljoen **vluchtelingen** (UNHCR).\n• ~120 miljoen **ontheemden** totaal (incl. binnen eigen land).\n\n**Toets-feitje**:\n• **Asielzoeker ≠ economisch migrant.**\n  - Asielzoeker: vlucht voor gevaar.\n  - Economisch migrant: zoekt beter leven (krijgt daarom meestal geen asiel).\n\n**Belangrijke termen**:\n• **Diaspora** = mensen van 1 volk die verspreid wonen *(Joodse, Armeense, Ierse, etc.)*.\n• **Naturalisatie** = vreemdeling die NL-paspoort krijgt.\n• **Repatriëren** = terugkeren naar geboorteland.",
    checks: [
      {
        q: "Wat is **emigratie**?",
        options: ["Je land verlaten om elders te wonen", "Een nieuw land binnenkomen om te wonen", "Binnen je eigen land verhuizen", "Een tijdje naar het buitenland reizen"],
        answer: 0,
        wrongHints: [null, "Een land binnenkomen heet immigratie (met de i van 'in'). Waar staat de e van emigratie voor?", "Verhuizen binnen je land heet interne migratie. Steek je bij emigratie een grens over?", "Na een reis kom je weer thuis. Ga je bij emigratie ook weer terug?"],
      },
      {
        q: "Wat is een **vluchteling**?",
        options: ["Iemand die zijn land moet verlaten door oorlog of vervolging", "Iemand die een paar weken op vakantie gaat naar een ander land", "Iemand die naar een ander land verhuist voor beter betaald werk", "Iemand die een jaar in het buitenland gaat studeren"],
        answer: 0,
        wrongHints: [null, "Een toerist gaat na de vakantie gewoon terug naar huis.", "Dat is een economische migrant: die kiest zelf om te vertrekken.", "Een student vertrekt vrijwillig en voor een tijdje."],
      },
      {
        q: "Wat is **interne migratie**?",
        options: ["Binnen één land verhuizen", "Naar een ander land verhuizen", "Naar een ander continent verhuizen", "Voor vakantie op reis gaan"],
        answer: 0,
        wrongHints: [null, "Verhuizen naar een ander land heet internationale migratie. Wat betekent 'intern'?", "Dat is nog verder weg. Wat betekent 'intern'?", "Reizen is niet verhuizen: je komt weer thuis."],
      },
      {
        q: "Wat is een **diaspora**?",
        options: ["Verspreid wonende mensen van één volk", "Een buurland met dezelfde taal", "Een kamp voor mensen op de vlucht", "Een uitwisselingsprogramma voor studenten"],
        answer: 0,
        wrongHints: [null, "Een diaspora is geen land. Gaat het over een plek of over mensen?", "Een kamp is één plek. Denk aan Surinaamse Nederlanders of Turkse Duitsers: wat hebben die gemeen?", "Uitwisseling duurt maar even. Gaat een diaspora over tijdelijk reizen?"],
      },
    ],
  },

  // STAP 4: Push + pull
  {
    title: "Push- en pull-factoren",
    explanation:
      "Waarom **verhuizen mensen**? Twee soorten factoren:\n\n**1. Push-factoren** *(duwen mensen WEG van een gebied)*:\n• **Oorlog + geweld** *(Syrië, Oekraïne)*.\n• **Vervolging** *(politiek, religieus, etnisch)*.\n• **Armoede** + werkloosheid.\n• **Honger** + droogte.\n• **Natuurramp** *(aardbeving, overstroming)*.\n• **Klimaatverandering** *(droge gebieden onleefbaar)*.\n• **Slechte gezondheidszorg + onderwijs**.\n• **Corruptie + onveiligheid**.\n\n**2. Pull-factoren** *(trekken mensen NAAR een gebied)*:\n• **Veilig** + vrede.\n• **Werk** + goede economie.\n• **Hoger inkomen** + welvaart.\n• **Goede gezondheidszorg + onderwijs**.\n• **Vrijheid** *(politiek, religieus)*.\n• **Familie/vrienden** al daar.\n• **Beter klimaat**.\n\n**Beslissing om te migreren**:\n• Weegt **push** *(redenen om weg te gaan)* tegen **pull** *(redenen om ergens heen)*.\n• Plus: kosten + risico's reis.\n• Plus: barrières *(grensbewaking, visumeisen)*.\n\n**Voorbeeld — Syrische vluchteling**:\n• **Push**: oorlog sinds 2011, bombardementen, vervolging.\n• **Pull (in Europa)**: veiligheid, asielmogelijkheid, soms familie.\n• **Reis**: gevaarlijk *(Middellandse Zee — duizenden mensen verdronken)*.\n• **Barrière**: hoge muren in Hongarije/Polen, lange asielprocedures.\n\n**Voorbeeld — Mexicaan naar VS**:\n• **Push**: armoede, gewelddadige drugskartels, weinig werk.\n• **Pull**: hogere lonen, familie in VS.\n• **Barrière**: muur, grensbewaking, deportatie.\n\n**Brain drain**:\n• Hoogopgeleide mensen *(dokters, ingenieurs)* verlaten arme landen voor rijke landen.\n• Verlies voor het arme land *(geen artsen meer)*.\n• Winst voor het rijke land.\n\n**Toets-feitje**:\nNiet alle migratie is pijnlijk. **Sommige migratie is positief**:\n• Studie in buitenland → terugkeer met nieuwe kennis.\n• Expats die jaren werken in een ander land.\n• Pensionado's naar Spanje of Portugal.\n\n**toetsvraag**:\n*'Wat is een push-factor?'*\n→ reden om weg te gaan uit gebied *(oorlog, armoede, ramp)*.\n\n*'Wat is een pull-factor?'*\n→ reden om naar een gebied te komen *(werk, veiligheid, familie)*.",
    checks: [
      {
        q: "Wat is een **push-factor**?",
        options: ["Reden om weg te gaan", "Reden om aan te komen", "Reden om te blijven", "Reden om terug te keren"],
        answer: 0,
        wrongHints: [null, "Wat een land aantrekkelijk maakt, trekt je aan: dat is pull. Wat doet een push met je?", "Push betekent duwen. Blijf je staan als je geduwd wordt?", "Terugkeren naar je geboorteland heet remigratie. Waar duwt een push-factor je vandaan?"],
      },
      {
        q: "Welke is een **pull-factor**?",
        options: ["Goed werk en een veilig land", "Oorlog in je eigen land", "Hongersnood door misoogst", "Een overstroming of aardbeving"],
        answer: 0,
        wrongHints: [null, "Oorlog duwt mensen wég — dat is een push-factor.", "Honger duwt mensen wég — push-factor.", "Een ramp duwt mensen wég — push-factor."],
      },
      {
        q: "Wat is **brain drain**?",
        options: ["Hoogopgeleiden verlaten arme landen", "Hoogopgeleiden keren terug naar hun geboorteland", "Laagopgeleiden trekken naar rijke landen", "Studenten gaan een half jaar op uitwisseling"],
        answer: 0,
        wrongHints: [null, "Dan wint het land juist kennis — 'drain' betekent wegvloeien.", "Het gaat om 'brains' — wie zijn dat?", "Tijdelijk, en ze komen terug — wat stroomt er bij brain drain weg?"],
      },
      {
        q: "Wat is de **belangrijkste push-factor** voor Syrische vluchtelingen?",
        options: ["Oorlog", "Droogte", "Werkloosheid", "Aardbeving"],
        answer: 0,
        wrongHints: [null, "Droogte speelde vóór 2011 wel mee, maar was dat de reden dat miljoenen mensen in korte tijd moesten vluchten?", "Weinig werk speelt mee, maar daarvoor vlucht je niet halsoverkop met je hele gezin. Wat gebeurde er vanaf 2011 in Syrië?", "De zware aardbeving was pas in 2023, toen al miljoenen Syriërs gevlucht waren. Wat begon er in 2011?"],
      },
    ],
  },

  // STAP 5: Nederland
  {
    title: "Nederland als migratie-land",
    explanation:
      "Nederland heeft een **lange migratie-geschiedenis** *(beide kanten — naar binnen én buiten)*.\n\n**Vroege immigratie** *(17e-19e eeuw)*:\n• **Joden uit Portugal/Spanje** *(rond 1600, na Inquisitie)*.\n• **Hugenoten uit Frankrijk** *(na 1685, vervolging Lodewijk XIV)*.\n• Tolerante NL Republiek was toevluchtsoord.\n\n**Emigratie uit NL** *(19e-20e eeuw)*:\n• **Naar Amerika** *(rond 1850-1920)* — landbouwers naar Michigan, Iowa.\n• **Na WO2 naar Canada, Australië, NZ** — overheid stimuleerde *('vol' land)*.\n• ~500.000 NL'ers vertrokken in 1945-1965.\n\n**Naar Nederland** *(20e eeuw)*:\n\n**1950-'60: gastarbeiders**\n• Tekort aan arbeiders tijdens de wederopbouw.\n• Eerst **Italianen + Spanjaarden**, later **Marokkanen + Turken**.\n• 'Gast' = idee was tijdelijk; veel bleven en lieten hun gezin overkomen.\n\n**Na 1975: Surinamers**\n• Suriname werd onafhankelijk → veel Surinamers naar NL.\n• Nu ~350.000 NL'ers met Surinaamse achtergrond.\n\n**Na 1990: Joegoslavië, Somalië, Irak, Afghanistan, Syrië**\n• Oorlog + vervolging → vluchtelingen.\n• Verschillende grote 'golven'.\n\n**Na 2022: Oekraïne**\n• Russische invasie → ~100.000 Oekraïners in NL *(eerst tijdelijke status)*.\n\n**Andere groepen**:\n• **Polen, Roemenen, Bulgaren** *(arbeidsmigranten na EU-uitbreiding 2004/2007)*.\n• **Studenten** uit India, China, etc.\n• **Expats** *(hoogopgeleide werknemers)*.\n\n**Nu (2024)**:\n• ~25% van NL'ers heeft **migratie-achtergrond** *(zelf of ouder geboren in buitenland)*.\n• Steden zoals Amsterdam, Rotterdam: meer dan 50% migratie-achtergrond.\n• Discussie: integratie, taal, woningnood.\n\n**Asielbeleid Nederland**:\n• Wie vlucht voor vervolging kan **asiel** aanvragen.\n• **IND** *(Immigratie- en Naturalisatiedienst)* beslist.\n• Eerst in **aanmeldcentrum** *(Ter Apel, Zevenaar)*.\n• Daarna **AZC** *(asielzoekerscentrum)*.\n• Beslissing duurt soms maanden tot jaren.\n• Bij toekenning: **status** *(verblijfsvergunning)* + woning toegewezen.\n\n**Discussie + integratie**:\n• **Integratie** = meedoen aan samenleving *(taal, werk, school)*.\n• **Inburgering** = verplichte cursus + examen voor nieuwkomers.\n• **Taal** is sleutel — daarom NT2-cursussen.\n• Veel discussie over toelating + opvang in Nederlandse politiek.\n\n**Vinex-effect + verkleuring steden**:\nIn jaren '90 verhuisden veel autochtone Nederlanders naar **nieuwbouwwijken** *(Vinex)* aan rand stad. Tegelijk kwamen veel migranten naar binnenstad → **'verkleuring'** stad. Daarom verschillende samenstellingen per wijk.\n\n**Toets-feitje**:\nDe term '**allochtoon**' *(letterlijk: van elders)* wordt sinds 2016 officieel niet meer gebruikt door **CBS**. Vervangen door 'persoon met migratie-achtergrond'.",
    checks: [
      {
        q: "Wanneer kwamen de eerste **gastarbeiders**?",
        options: ["1950-'60", "1900-'20", "1975-'85", "1990-'00"],
        answer: 0,
        wrongHints: [null, "Rond 1900 vertrokken juist veel Nederlanders naar het buitenland. Wanneer was er na de Tweede Wereldoorlog een tekort aan arbeiders?", "Rond 1975 kwamen vooral Surinamers en de gezinnen van gastarbeiders. Wanneer kwamen de arbeiders zelf?", "Rond 1990 woonden de eerste gastarbeiders al lang in Nederland. Wanneer haalden fabrieken ze voor het eerst?"],
      },
      {
        q: "Hoeveel % NL'ers heeft **migratie-achtergrond** (2024)?",
        options: ["~25%", "~5%", "~75%", "~50%"],
        answer: 0,
        wrongHints: [null, "Kijk eens om je heen in de klas of op straat. Is het echt maar 1 op de 20?", "Dan zou 3 van de 4 mensen een migratieachtergrond hebben. Klopt dat voor heel Nederland?", "In steden als Amsterdam en Rotterdam is het ongeveer de helft. Geldt dat ook voor heel Nederland?"],
      },
      {
        q: "Wat is een **AZC**?",
        options: ["Asielzoekerscentrum", "Algemeen zorgcentrum", "Arbeidsmigrantencentrum", "Vertrekcentrum asielzoekers"],
        answer: 0,
        wrongHints: [null, "Bij een zorgcentrum denk je aan ouderen of zieken. Voor wie is een AZC bedoeld?", "Arbeidsmigranten komen voor werk en regelen zelf hun woning. Wie wacht er in een AZC op een besluit?", "In een vertrekcentrum wonen mensen bij wie het besluit al 'nee' is. Waar wacht je óp dat besluit?"],
      },
      {
        q: "Welke **nieuwe groep** kwam vanaf **2022** in grote aantallen naar Nederland?",
        options: ["Oekraïners", "Syriërs", "Polen", "Surinamers"],
        answer: 0,
        wrongHints: [null, "Veel Syriërs kwamen rond 2015, op de vlucht voor de burgeroorlog. Welke oorlog begon in februari 2022?", "Polen kwamen vooral na 2004, toen ze in de EU vrij mochten werken. Wie moest er vanaf 2022 vluchten?", "Veel Surinamers kwamen rond de onafhankelijkheid in 1975. Welk land werd in 2022 binnengevallen?"],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — bevolking & migratie mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: bevolking, dichtheid, migratie, push/pull, NL.\n\nVeel succes!",
    checks: [
      {
        q: "Wereldbevolking nu?",
        options: ["~8 miljard", "~1 miljard", "~80 miljard", "~10 miljoen"],
        answer: 0,
        wrongHints: [null, "Rond 1800 waren er ongeveer zoveel mensen. Is de bevolking sindsdien gegroeid?", "Waar zou het voedsel voor zoveel mensen vandaan moeten komen? Is dat getal realistisch?", "Alleen Nederland heeft al bijna 18 miljoen inwoners. Kan de hele wereld dan minder hebben?"],
      },
      {
        q: "Wat is **bevolkingsdichtheid**?",
        options: ["Aantal inwoners per km²", "Totaal aantal inwoners", "Oppervlakte van een land in km²", "Geboorten per 1000 inwoners"],
        answer: 0,
        wrongHints: [null, "China heeft veel inwoners, maar ook heel veel ruimte. Zegt het totaal dan hoe dicht mensen op elkaar wonen?", "Alleen de oppervlakte zegt niets over hoeveel mensen er wonen. Wat moet je er nog bij nemen?", "Geboorten per 1000 inwoners is het geboortecijfer. Gaat 'dicht' over geboren worden of over ruimte?"],
      },
      {
        q: "Welke is een **push-factor**?",
        options: ["Oorlog in het land", "Een goede school", "Veiligheid op straat", "Genoeg werk in de buurt"],
        answer: 0,
        wrongHints: [null, "Een goede school trekt mensen aan — dat is een pull-factor.", "Veiligheid trekt aan — pull-factor.", "Werk trekt aan — pull-factor."],
      },
      {
        q: "Welk **land** heeft sinds 2023 de meeste mensen?",
        options: ["India", "China", "VS", "Rusland"],
        answer: 0,
        wrongHints: [null, "China was tot 2023 nummer 1, maar daar daalt het aantal inwoners nu. Welk land is China voorbijgegaan?", "De VS heeft zo'n 340 miljoen inwoners en staat op plek 3. Welke twee landen hebben er elk meer dan een miljard?", "Rusland is het grootste land van de wereld, maar heeft maar zo'n 145 miljoen inwoners. Welke twee landen hebben er meer dan een miljard?"],
      },
      {
        q: "Welke 4 steden vormen samen de **Randstad**?",
        options: ["Amsterdam + Rotterdam + Den Haag + Utrecht", "Amsterdam + Rotterdam + Den Haag + Eindhoven", "Amsterdam + Rotterdam + Utrecht + Haarlem", "Rotterdam + Den Haag + Utrecht + Almere"],
        answer: 0,
        wrongHints: [null, "Eindhoven is groot, maar ligt in Brabant. Ligt dat in het westen van het land?", "Haarlem ligt wel in de Randstad, maar is geen van de vier grote steden. Welke stad met de regering ontbreekt?", "Almere is snel gegroeid, maar hoort niet bij de vier grote steden. Welke grootste stad van het land ontbreekt?"],
      },
      {
        q: "Wat is een **megastad**?",
        options: ["Steden met >10 miljoen inwoners", "Landen met >100 miljoen inwoners", "Steden met veel wolkenkrabbers", "Hoofdsteden van grote landen"],
        answer: 0,
        wrongHints: [null, "Een megastad is een stad, geen land. Waar gaat het om?", "Wolkenkrabbers zeggen iets over hoogte. Waar draait 'mega' om?", "Sommige megasteden zijn hoofdstad, maar niet allemaal (denk aan Mumbai). Waar draait 'mega' om?"],
      },
      {
        q: "**Push-factoren** zorgen ervoor dat mensen ___?",
        options: ["Weggaan uit hun land", "Naar een land komen", "In hun land blijven", "Terugkeren naar hun land"],
        answer: 0,
        wrongHints: [null, "Wat je naar een land toe trekt, heet een pull-factor. Wat doet een push-factor?", "Push betekent duwen. Blijf je staan als je geduwd wordt?", "Terugkeren naar je geboorteland heet remigratie. Waar duwt een push-factor je vandaan?"],
      },
      {
        q: "Welke is een **pull-factor** voor migratie?",
        options: ["Beter werk in nieuw land", "Oorlog in eigen land", "Armoede in eigen land", "Hongersnood in eigen land"],
        answer: 0,
        wrongHints: [null, "Oorlog duwt mensen wég — push-factor.", "Armoede duwt mensen wég — push-factor.", "Honger duwt mensen wég — push-factor."],
      },
      {
        q: "**Open vraag**: hoeveel **inwoners** heeft Nederland ongeveer (in miljoen)?",
        kind: "open",
        acceptedAnswers: ["17", "17,5", "17.5", "17 miljoen", "ruim 17", "18", "18 miljoen", "bijna 18"],
        explanation: "Nederland heeft ~18 miljoen inwoners (2025).",
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bevolkingMigratieAardrijkskunde = {
  id: "bevolking-migratie-aardrijkskunde",
  title: "Bevolking + migratie (klas 2-3)",
  emoji: "🌍",
  level: "klas2-3",
  subject: "aardrijkskunde",
  referentieNiveau: "2F",
  sloThema: "Aardrijkskunde — bevolking + migratie",
  prerequisites: [
    { id: "continenten-wereld-po", title: "Continenten en wereldkennis", niveau: "po-1F" },
    { id: "topografie-nederland", title: "Topografie Nederland", niveau: "po-1F" },
  ],
  intro:
    "Bevolking + migratie voor klas 2-3 — 8 miljard wereldbevolking, dichtheid, spreiding (kustgebieden, rivieren), migratie-soorten (emi/immi, vluchteling/asielzoeker), push+pull-factoren, NL als migratieland (gastarbeiders, Surinamers, Oekraïners). ~15 min.",
  triggerKeywords: [
    "bevolking", "wereldbevolking", "vergrijzing",
    "bevolkingsdichtheid", "randstad", "verstedelijking",
    "migratie", "emigratie", "immigratie",
    "vluchteling", "asielzoeker",
    "push pull factor", "gastarbeider",
  ],
  chapters,
  steps,
};

export default bevolkingMigratieAardrijkskunde;
