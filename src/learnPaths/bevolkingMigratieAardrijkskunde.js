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
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
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
      "Op aarde leven ongeveer **8 miljard mensen** *(2024)*.\n\n**Hoe groeide de wereldbevolking?**\n• **1800**: ~1 miljard.\n• **1927**: 2 miljard *(127 jaar later)*.\n• **1960**: 3 miljard *(33 jaar later — versnelt!)*.\n• **1974**: 4 miljard.\n• **1987**: 5 miljard.\n• **1999**: 6 miljard.\n• **2011**: 7 miljard.\n• **2022**: 8 miljard.\n\nIn 200 jaar **8 keer zoveel** mensen! Dit heet **bevolkingsexplosie**.\n\n**Waarom?**\n• Betere **medische zorg** *(minder kindersterfte, langer leven)*.\n• Betere **voeding** *(landbouw-revolutie 19e-20e eeuw)*.\n• Bestrijding van **infectieziekten** *(vaccinaties, antibiotica)*.\n• Schoner **drinkwater + riolering**.\n\n**Nu groeit het minder snel**:\n• Vooral **Afrika** groeit nog hard.\n• **Europa + Oost-Azië** krimpen *(weinig kinderen)*.\n• Wereldbevolking zou rond **10 miljard** pieken in ~2080-2100.\n\n**Bevolkingscijfers per continent (2024)**:\n• **Azië**: ~4,7 miljard *(grootst — 59% van wereld)*.\n• **Afrika**: ~1,5 miljard *(snel groeiend)*.\n• **Europa**: ~750 miljoen *(stabiel/krimpt)*.\n• **Amerika** *(Noord + Zuid)*: ~1 miljard.\n• **Oceanië**: ~45 miljoen.\n\n**Grootste landen** *(qua mensen)*:\n1. **India** ~1,44 miljard *(2023 grootste, voorbij China)*.\n2. **China** ~1,42 miljard.\n3. **VS** ~333 miljoen.\n4. **Indonesië** ~278 miljoen.\n5. **Pakistan** ~240 miljoen.\n6. **Nigeria** ~225 miljoen.\n7. **Brazilië** ~215 miljoen.\n\n**Geboortecijfer + sterftecijfer**:\n• **Geboortecijfer** = aantal geboortes per 1000 inwoners per jaar.\n• **Sterftecijfer** = aantal sterfgevallen per 1000.\n• **Natuurlijke aanwas** = geboortecijfer − sterftecijfer.\n\nNL: ~10 geboortes − ~9 sterftes = ~1 per 1000 per jaar = klein.\nAfrika gemiddeld: ~30 geboortes − ~7 sterftes = ~23 per 1000 = veel.\n\n**Cito-feitje**:\n**Vergrijzing** = bevolking wordt gemiddeld ouder. Speelt nu in **Europa, Japan, China**. Gevolgen: minder werkenden, meer ouderen die zorg nodig hebben.",
    svg: bevolkingsSvg(),
    checks: [
      {
        q: "Hoeveel mensen op aarde **nu** (2024)?",
        options: ["~8 miljard", "~1 miljard", "~80 miljard", "~100 miljoen"],
        answer: 0,
        wrongHints: [null, "Was in 1800.", "Veel te veel.", "Veel te weinig."],
      },
      {
        q: "Welk **continent** heeft de meeste mensen?",
        options: ["Azië", "Afrika", "Europa", "Amerika"],
        answer: 0,
        wrongHints: [null, "Tweede.", "Veel minder.", "Veel minder."],
      },
      {
        q: "Welk **land** heeft sinds 2023 de meeste mensen?",
        options: ["India", "China", "VS", "Indonesië"],
        answer: 0,
        wrongHints: [null, "Was tot 2023 grootst.", "Veel kleiner.", "4e plaats."],
      },
      {
        q: "Wat is **vergrijzing**?",
        options: ["Bevolking wordt gemiddeld ouder", "Bevolking sterft uit", "Bevolking verhuist", "Bevolking jonger"],
        answer: 0,
        wrongHints: [null, "Niet uitsterven.", "Niet verhuizen.", "Tegenovergesteld."],
      },
      {
        q: "**Bevolkingsgroei** wordt gemeten via?",
        options: ["Geboorten − sterften + (immigratie − emigratie)", "Alleen geboortes", "Alleen sterftes", "Random"],
        answer: 0,
        wrongHints: [null, "Onvolledig.", "Tegenovergesteld effect.", "Geen formule."],
      },
      {
        q: "Een **bevolkingspiramide** met smalle top + brede basis duidt op?",
        options: ["Jong bevolking + hoge geboorte (ontwikkelingsland)", "Vergrijzing", "Krimpend land", "Migratie"],
        answer: 0,
        wrongHints: [null, "Andersom — brede top.", "Andere oorzaak.", "Niet direct."],
      },
    ],
  },

  // STAP 2: Spreiding + dichtheid
  {
    title: "Spreiding + bevolkingsdichtheid",
    explanation:
      "Mensen wonen **niet gelijkmatig** over de aarde verdeeld.\n\n**Waar wonen de meeste mensen?**\n• **Kustgebieden** *(zee = handel, vis, water)*.\n• **Rivierdalen** *(water, vruchtbare grond)*.\n• **Vlaktes** *(makkelijk bouwen + landbouw)*.\n• **Gematigd klimaat** *(niet te koud, niet te heet)*.\n• **Steden** *(meer werk, voorzieningen)*.\n\n**Waar wonen weinig mensen?**\n• **Woestijnen** *(geen water — Sahara, Gobi)*.\n• **Poolgebieden** *(te koud — Antarctica, Noord-Siberië)*.\n• **Hooggebergte** *(te steil + dunne lucht — Himalaya, Andes)*.\n• **Tropisch regenwoud** *(moeilijk bewerkbaar — Amazone, Congo)*.\n\n**Bevolkingsdichtheid**:\n• = aantal mensen per **km²**.\n• Formule: **bevolking ÷ oppervlakte** = mensen/km².\n\n**Voorbeelden** *(per km²)*:\n• **Monaco** *(stadstaat)*: ~25.000 mensen/km² — dichtst.\n• **Bangladesh**: ~1.200 mensen/km².\n• **Nederland**: ~520 mensen/km² — een van de dichtst in EU.\n• **Wereldgemiddelde**: ~60 mensen/km².\n• **Canada**: ~4 mensen/km² — heel leeg.\n• **Mongolië**: ~2 mensen/km².\n• **Groenland**: ~0,03 mensen/km² — bijna leeg.\n\n**Cito-truc — dichtheid berekenen**:\n*'Land X heeft 10 miljoen inwoners en 100.000 km² oppervlakte. Dichtheid?'*\n• 10.000.000 ÷ 100.000 = **100 mensen/km²**.\n\n**Stad versus platteland**:\n• Wereldwijd woont nu **~57% in steden** *(stedelijk)*.\n• 2050 verwacht: **~70%**.\n• In NL: ~92% van mensen in stedelijk gebied *(zeer hoge urbanisatie)*.\n\n**Verstedelijking (urbanisatie)**:\n• Mensen **trekken naar steden** voor werk en opleiding.\n• **Megasteden** = steden met **>10 miljoen** inwoners.\n• Voorbeelden: Tokio (~37 mln), Delhi (~32 mln), Shanghai (~28 mln), São Paulo, Mexico-Stad, Caïro.\n\n**Sloppenwijken (favela / slum)**:\n• Komen voor in snel groeiende steden *(Rio, Mumbai, Lagos)*.\n• Mensen migreren naar stad zonder voldoende huizen → bouwen zelf hutten op vrije grond.\n• Vaak slechte voorzieningen *(water, riool, school)*.\n\n**Randstad (Nederland)**:\n• Verzamelnaam voor **Amsterdam + Rotterdam + Den Haag + Utrecht** + omgeving.\n• Ongeveer **8 miljoen mensen** in een gebied van 12.000 km².\n• Hoogste bevolkingsdichtheid van NL.\n• **Vinex-wijken** = grote nieuwbouwwijken uit jaren '90-'00 (Leidsche Rijn, Almere, Pijnacker etc).\n\n**Cito-vraag**:\n*'Waarom is Nederland dichtbevolkt?'* → kleine oppervlakte, goede ligging aan zee + rivieren, vruchtbare grond, sterke economie.",
    checks: [
      {
        q: "Wat is **bevolkingsdichtheid**?",
        options: ["Mensen per km²", "Aantal kinderen", "Aantal landen", "Aantal steden"],
        answer: 0,
        wrongHints: [null, "Niet dichtheid.", "Niet dichtheid.", "Niet dichtheid."],
      },
      {
        q: "Waar wonen weinig mensen?",
        options: ["Woestijnen + poolgebieden + hooggebergte", "Kustgebieden", "Rivierdalen", "Vlaktes"],
        answer: 0,
        wrongHints: [null, "Veel mensen.", "Veel mensen.", "Veel mensen."],
      },
      {
        q: "**10 miljoen inwoners** op **100.000 km²**. Dichtheid?",
        options: ["100 mensen/km²", "10 mensen/km²", "1000 mensen/km²", "1 mensen/km²"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Te weinig."],
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
            basis: "10M ÷ 100K = 100 mensen/km². A.",
            simpeler: "Deel het aantal mensen door de oppervlakte: 10.000.000 ÷ 100.000 = 100. = A.",
            nogSimpeler: "100 = A.",
          },
        },
      },
      {
        q: "Wat is de **Randstad**?",
        options: ["Amsterdam + Rotterdam + Den Haag + Utrecht + omgeving", "Heel Nederland", "Alleen Amsterdam", "Een buurland"],
        answer: 0,
        wrongHints: [null, "Niet heel NL.", "Slechts deel.", "Geen buurland."],
      },
      {
        q: "**Verstedelijking** (urbanisatie) = ?",
        options: ["Steeds meer mensen wonen in steden", "Steden krimpen", "Platteland groeit", "Niets verandert"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Andere richting.", "Wel verandering."],
      },
      {
        q: "Een **krimpregio** in NL is een gebied waar?",
        options: ["Bevolking afneemt", "Bevolking groeit", "Gelijk blijft", "Geen bevolking"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet relevant.", "Onmogelijk."],
      },
    ],
  },

  // STAP 3: Migratie — soorten
  {
    title: "Migratie — soorten en redenen",
    explanation:
      "**Migratie** = mensen die **verhuizen** van het ene gebied naar het andere — vaak naar een ander land.\n\n**Soorten migratie**:\n\n**1. Naar richting**:\n• **Emigratie** = uit eigen land vertrekken *(uit-, dus weggaan)*. Wie emigreert is een **emigrant**.\n• **Immigratie** = in een ander land komen wonen *(in-, dus binnenkomen)*. Wie immigreert is een **immigrant**.\nDezelfde persoon: emigrant uit land A, immigrant in land B.\n\n**2. Naar afstand**:\n• **Interne migratie** = binnen 1 land *(bv. van platteland naar stad)*.\n• **Internationale migratie** = tussen landen.\n• **Continentale migratie** = van het ene continent naar het andere.\n\n**3. Naar reden**:\n• **Vrijwillige migratie** = je kiest zelf *(werk, studie, liefde, klimaat)*.\n• **Gedwongen migratie** = je moet weg *(oorlog, vervolging, ramp)*.\n  - **Vluchteling** = mens die zijn land ontvlucht door vervolging/oorlog. Heeft recht op asiel volgens **Vluchtelingenverdrag (1951)**.\n  - **Asielzoeker** = wacht op beslissing of hij vluchteling-status krijgt.\n  - **Ontheemde / IDP** = vluchteling binnen eigen land.\n\n**4. Naar duur**:\n• **Permanente migratie** = voorgoed verhuizen.\n• **Tijdelijke migratie** = voor bepaalde tijd *(seizoenswerk, studie)*.\n• **Pendelen** = dagelijks heen-en-weer *(bv. wonen in stad X, werken in stad Y)*.\n\n**Beroemde grote migratie-stromen** in geschiedenis:\n• **Volksverhuizingen** *(4e-7e eeuw)* — Germaanse volken naar West-Europa.\n• **Naar Amerika** *(15e-20e eeuw)* — Europeanen + slaven uit Afrika.\n• **Werknemers naar Europa** *(1960-'70)* — Marokkanen, Turken naar NL/Duitsland.\n• **Vluchtelingen na oorlogen** *(WO2, Joegoslavië, Syrië)*.\n\n**Cijfers wereld (2024)**:\n• ~280 miljoen mensen wonen buiten hun geboorteland *(~3,5% wereldbevolking)*.\n• ~36 miljoen **vluchtelingen** (UNHCR).\n• ~120 miljoen **ontheemden** totaal (incl. binnen eigen land).\n\n**Cito-feitje**:\n• **Asielzoeker ≠ economisch migrant.**\n  - Asielzoeker: vlucht voor gevaar.\n  - Economisch migrant: zoekt beter leven (mag wettelijk meestal niet).\n\n**Belangrijke termen**:\n• **Diaspora** = mensen van 1 volk die verspreid wonen *(Joodse, Armeense, Iers, etc.)*.\n• **Naturalisatie** = vreemdeling die NL-paspoort krijgt.\n• **Repatriëren** = terugkeren naar geboorteland.",
    checks: [
      {
        q: "Wat is **emigratie**?",
        options: ["Eigen land verlaten", "Andere land binnenkomen", "Binnen eigen stad", "Naar het buitenland reizen"],
        answer: 0,
        wrongHints: [null, "Dat is immigratie.", "Niet emigratie.", "Reizen is geen verhuizen."],
      },
      {
        q: "Wat is een **vluchteling**?",
        options: ["Iemand die vlucht voor oorlog/vervolging", "Toerist", "Werknemer", "Student"],
        answer: 0,
        wrongHints: [null, "Geen vluchteling.", "Economische migrant.", "Tijdelijke migrant."],
      },
      {
        q: "Wat is **interne migratie**?",
        options: ["Binnen 1 land verhuizen", "Tussen landen", "Tussen continenten", "Reizen"],
        answer: 0,
        wrongHints: [null, "Dat is internationaal.", "Dat is continentaal.", "Reizen = niet verhuizen."],
      },
      {
        q: "Wat is een **diaspora**?",
        options: ["Verspreid wonende mensen van 1 volk", "Een buurland", "Een vluchtelingenkamp", "Een uitwisselingsprogramma"],
        answer: 0,
        wrongHints: [null, "Geen land.", "Geen kamp.", "Geen programma."],
      },
    ],
  },

  // STAP 4: Push + pull
  {
    title: "Push- en pull-factoren",
    explanation:
      "Waarom **verhuizen mensen**? Twee soorten factoren:\n\n**1. Push-factoren** *(duwen mensen WEG van een gebied)*:\n• **Oorlog + geweld** *(Syrië, Oekraïne)*.\n• **Vervolging** *(politiek, religieus, etnisch)*.\n• **Armoede** + werkloosheid.\n• **Honger** + droogte.\n• **Natuurramp** *(aardbeving, overstroming)*.\n• **Klimaatverandering** *(droge gebieden onleefbaar)*.\n• **Slechte gezondheidszorg + onderwijs**.\n• **Corruptie + onveiligheid**.\n\n**2. Pull-factoren** *(trekken mensen NAAR een gebied)*:\n• **Veilig** + vrede.\n• **Werk** + goede economie.\n• **Hoger inkomen** + welvaart.\n• **Goede gezondheidszorg + onderwijs**.\n• **Vrijheid** *(politiek, religieus)*.\n• **Familie/vrienden** al daar.\n• **Beter klimaat**.\n\n**Beslissing om te migreren**:\n• Weegt **push** *(redenen om weg te gaan)* tegen **pull** *(redenen om ergens heen)*.\n• Plus: kosten + risico's reis.\n• Plus: barrières *(grensbewaking, visumeisen)*.\n\n**Voorbeeld — Syrische vluchteling**:\n• **Push**: oorlog sinds 2011, bombardementen, vervolging.\n• **Pull (in Europa)**: veiligheid, asielmogelijkheid, soms familie.\n• **Reis**: gevaarlijk *(Middellandse Zee — duizenden mensen verdronken)*.\n• **Barrière**: hoge muren in Hongarije/Polen, lange asielprocedures.\n\n**Voorbeeld — Mexicaan naar VS**:\n• **Push**: armoede, gewelddadig drugskartel, weinig werk.\n• **Pull**: hogere lonen, familie in VS.\n• **Barrière**: muur, grensbewaking, deportatie.\n\n**Brain drain**:\n• Hoogopgeleide mensen *(dokters, ingenieurs)* verlaten arme landen voor rijke landen.\n• Verlies voor het arme land *(geen artsen meer)*.\n• Winst voor het rijke land.\n\n**Cito-feitje**:\nNiet alle migratie is pijnlijk. **Sommige migratie is positief**:\n• Studie in buitenland → terugkeer met nieuwe kennis.\n• Expats die jaren werken in een ander land.\n• Pensionado's naar Spanje of Portugal.\n\n**Cito-vraag**:\n*'Wat is een push-factor?'*\n→ reden om weg te gaan uit gebied *(oorlog, armoede, ramp)*.\n\n*'Wat is een pull-factor?'*\n→ reden om naar een gebied te komen *(werk, veiligheid, familie)*.",
    checks: [
      {
        q: "Wat is een **push-factor**?",
        options: ["Reden om weg te gaan (oorlog, armoede)", "Reden om aan te komen", "Reden om te blijven", "Reden om te bezoeken"],
        answer: 0,
        wrongHints: [null, "Dat is pull.", "Tegengesteld.", "Niet specifiek migratie."],
      },
      {
        q: "Welke is een **pull-factor**?",
        options: ["Goed werk + veilig land", "Oorlog", "Hongersnood", "Ramp"],
        answer: 0,
        wrongHints: [null, "Push.", "Push.", "Push."],
      },
      {
        q: "Wat is **brain drain**?",
        options: ["Hoogopgeleiden verlaten arme landen", "Onderwijs in zee", "Vergeetachtigheid", "Te veel werk"],
        answer: 0,
        wrongHints: [null, "Geen geografie-onderwerp.", "Geen migratie-term.", "Geen migratie-term."],
      },
      {
        q: "Welke is een **belangrijkste push-factor** voor Syrische vluchtelingen?",
        options: ["Oorlog (2011-)", "Klimaat", "Werkloosheid", "Onderwijs"],
        answer: 0,
        wrongHints: [null, "Speelt wel mee maar oorlog primair.", "Speelt mee.", "Niet hoofd-push."],
      },
    ],
  },

  // STAP 5: Nederland
  {
    title: "Nederland als migratie-land",
    explanation:
      "Nederland heeft een **lange migratie-geschiedenis** *(beide kanten — naar binnen én buiten)*.\n\n**Vroege immigratie** *(17e-19e eeuw)*:\n• **Joden uit Portugal/Spanje** *(rond 1600, na Inquisitie)*.\n• **Hugenoten uit Frankrijk** *(na 1685, vervolging Lodewijk XIV)*.\n• Tolerante NL Republiek was toevluchtsoord.\n\n**Emigratie uit NL** *(19e-20e eeuw)*:\n• **Naar Amerika** *(rond 1850-1920)* — landbouwers naar Michigan, Iowa.\n• **Na WO2 naar Canada, Australië, NZ** — overheid stimuleerde *('vol' land)*.\n• ~500.000 NL'ers vertrokken in 1945-1965.\n\n**Naar Nederland** *(20e eeuw)*:\n\n**1950-'60: gastarbeiders**\n• Tekort aan arbeiders na opbouw.\n• Eerst **Italianen + Spanjaarden**, later **Marokkanen + Turken**.\n• 'Gast' = idee was tijdelijk; veel bleven en namen gezin over.\n\n**Na 1975: Surinamers**\n• Suriname werd onafhankelijk → veel Surinamers naar NL.\n• Nu ~350.000 NL'ers met Surinaamse achtergrond.\n\n**Na 1990: Joegoslavië, Somalië, Irak, Afghanistan, Syrië**\n• Oorlog + vervolging → vluchtelingen.\n• Verschillende grote 'golven'.\n\n**Na 2022: Oekraïne**\n• Russische invasie → ~100.000 Oekraïners in NL *(eerst tijdelijke status)*.\n\n**Andere groepen**:\n• **Polen, Roemenen, Bulgaren** *(arbeidsmigranten na EU-uitbreiding 2004/2007)*.\n• **Studenten** uit India, China, etc.\n• **Expats** *(hoogopgeleide werknemers)*.\n\n**Nu (2024)**:\n• ~25% van NL'ers heeft **migratie-achtergrond** *(zelf of ouder geboren in buitenland)*.\n• Steden zoals Amsterdam, Rotterdam: meer dan 50% migratie-achtergrond.\n• Discussie: integratie, taal, woningnood.\n\n**Asielbeleid Nederland**:\n• Wie vlucht voor vervolging kan **asiel** aanvragen.\n• **IND** *(Immigratie- en Naturalisatiedienst)* beslist.\n• Eerst in **aanmeldcentrum** *(Ter Apel, Zevenaar)*.\n• Daarna **AZC** *(asielzoekerscentrum)*.\n• Beslissing duurt soms maanden tot jaren.\n• Bij toekenning: **status** *(verblijfsvergunning)* + woning toegewezen.\n\n**Discussie + integratie**:\n• **Integratie** = meedoen aan samenleving *(taal, werk, school)*.\n• **Inburgering** = verplichte cursus + examen voor nieuwkomers.\n• **Taal** is sleutel — daarom NT2-cursussen.\n• Veel discussie over toelating + opvang in Nederlandse politiek.\n\n**Vinex-effect + verkleuring steden**:\nIn jaren '90 verhuisden veel autochtone Nederlanders naar **nieuwbouwwijken** *(Vinex)* aan rand stad. Tegelijk kwamen veel migranten naar binnenstad → **'verkleuring'** stad. Daarom verschillende samenstellingen per wijk.\n\n**Cito-feitje**:\nDe term '**allochtoon**' *(letterlijk: van elders)* wordt sinds 2016 officieel niet meer gebruikt door **CBS**. Vervangen door 'persoon met migratie-achtergrond'.",
    checks: [
      {
        q: "Wanneer kwamen de eerste **gastarbeiders**?",
        options: ["1950-'60", "1900-'20", "1850-'70", "2000+"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te vroeg.", "Veel later."],
      },
      {
        q: "Hoeveel % NL'ers heeft **migratie-achtergrond** (2024)?",
        options: ["~25%", "~5%", "~75%", "~50%"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Te veel — eerder helft in grote steden."],
      },
      {
        q: "Wat is een **AZC**?",
        options: ["Asielzoekerscentrum", "Algemeen Ziekenhuis", "Amsterdamse Zorg", "Antwerps Centrum"],
        answer: 0,
        wrongHints: [null, "Niet AZC.", "Niet AZC.", "Niet NL."],
      },
      {
        q: "Welke groep kwam na **2022**?",
        options: ["Oekraïners (oorlog Rusland)", "Marokkanen", "Surinamers", "Polen"],
        answer: 0,
        wrongHints: [null, "Eerder gastarbeiders.", "1975+.", "Sinds 2004 EU."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — bevolking & migratie mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: bevolking, dichtheid, migratie, push/pull, NL.\n\nVeel succes!",
    checks: [
      {
        q: "Wereldbevolking nu?",
        options: ["~8 miljard", "~1 miljard", "~80 miljard", "~10 miljoen"],
        answer: 0,
        wrongHints: [null, "1800.", "Onmogelijk.", "Te weinig."],
      },
      {
        q: "Wat is **bevolkingsdichtheid**?",
        options: ["Mensen per km²", "Aantal kinderen", "Aantal landen", "Aantal geboortes"],
        answer: 0,
        wrongHints: [null, "Niet dichtheid.", "Niet dichtheid.", "Geboortecijfer."],
      },
      {
        q: "Welke is een **push-factor**?",
        options: ["Oorlog in het land", "Goede school", "Veiligheid", "Werk"],
        answer: 0,
        wrongHints: [null, "Pull.", "Pull.", "Pull."],
      },
      {
        q: "Welk **land** heeft sinds 2023 de meeste mensen?",
        options: ["India", "China", "VS", "Rusland"],
        answer: 0,
        wrongHints: [null, "Was nummer 1 tot 2023.", "Veel kleiner.", "Veel kleiner."],
      },
      {
        q: "Welke 4 steden vormen samen de **Randstad**?",
        options: ["Amsterdam + Rotterdam + Den Haag + Utrecht", "4 grootste steden NL", "Amsterdam + Eindhoven + Tilburg + Groningen", "Den Haag + Maastricht + Leeuwarden + Zwolle"],
        answer: 0,
        wrongHints: [null, "Klopt qua omvang grootendeels, maar specifiek deze 4.", "Niet de Randstad.", "Niet de Randstad."],
      },
      {
        q: "Wat is een **megasteden**?",
        options: ["Steden met >10 miljoen inwoners", "Hele grote landen", "Steden met veel wolkenkrabbers", "Hoofdsteden"],
        answer: 0,
        wrongHints: [null, "Niet steden.", "Niet definitie.", "Sommige wel maar niet alle."],
      },
      {
        q: "**Push-factoren** zorgen ervoor dat mensen ___?",
        options: ["Weggaan uit hun land", "Naar een land komen", "Niets doen", "Sterven"],
        answer: 0,
        wrongHints: [null, "Dat zijn pull-factoren.", "Niet relevant.", "Te zwaar."],
      },
      {
        q: "Welke is een **pull-factor** voor migratie?",
        options: ["Beter werk in nieuw land", "Oorlog in eigen land", "Geen geld", "Hongersnood"],
        answer: 0,
        wrongHints: [null, "Push-factor.", "Push-factor.", "Push-factor."],
      },
      {
        q: "**Open vraag**: hoeveel **inwoners** heeft Nederland ongeveer (in miljoen)?",
        kind: "open",
        acceptedAnswers: ["17", "17,5", "17.5", "17 miljoen", "ruim 17"],
        explanation: "Nederland heeft ~17,5 miljoen inwoners (2025).",
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
    "Bevolking + migratie voor klas 2-3 — 8 miljard wereldbevolking, dichtheid, spreiding (kustgebieden, rivieren), migratie-soorten (emi/immi, vluchteling/asielzoeker), push+pull-factoren, NL als migratieland (gastarbeiders, Surinaamse, Oekraïners). ~15 min.",
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
