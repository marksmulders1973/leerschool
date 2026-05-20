// Leerpad: Energie + Hulpbronnen — HAVO/VWO Aardrijkskunde
// CSE-onderwerp. Fossiel vs hernieuwbaar, geopolitiek, schaarste,
// energietransitie, kritieke materialen.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["⛽", "☀️", "🌍", "🔋", "🏆"];

const chapters = [
  { letter: "A", title: "Fossiele brandstoffen", emoji: "⛽", from: 0, to: 0 },
  { letter: "B", title: "Hernieuwbare energie", emoji: "☀️", from: 1, to: 1 },
  { letter: "C", title: "Geopolitiek + OPEC", emoji: "🌍", from: 2, to: 2 },
  { letter: "D", title: "Kritieke materialen + waterstof", emoji: "🔋", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — energietransitie", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Fossiele brandstoffen ─────────────────────────────
  {
    title: "Fossiele brandstoffen — olie, gas, kolen",
    explanation:
      "**Fossiele brandstoffen** = ontstaan miljoenen jaren geleden uit dode planten/dieren onder druk + warmte.\n\n**Drie hoofdtypes**:\n\n**1. Aardolie (petroleum)**:\n• Ontstaan uit zee-organismen 100-400 mln jaar geleden.\n• Vloeibaar, makkelijk te transporteren.\n• Raffinage geeft benzine, diesel, kerosine, asfalt, plastic-grondstof.\n• Hoofdbronnen: Saudi-Arabië, Rusland, VS (fracking), Iran, Iraq, China, Brazilië, Venezuela.\n• ~100 mln vaten/dag wereldwijd (~13 mld L/dag).\n\n**2. Aardgas**:\n• Methaan (CH₄) + andere lichte koolwaterstoffen.\n• Ontstaan zoals olie.\n• Schoner branden dan kolen/olie (minder CO₂ + roet).\n• Hoofdbronnen: VS (shale-gas-revolutie), Rusland (export naar Europa), Iran, Qatar, Australië.\n• Nederland: Groningen-gasveld grootste van EU (gas-winning vermindert door aardbevingen sinds 2019).\n\n**3. Steenkool**:\n• Ontstaan uit veen-planten 300-360 mln jaar geleden (Carboon).\n• Veel CO₂ + giftige stoffen bij verbranding.\n• Hoofdbronnen: China (gigant), Australië, Indonesië, Rusland, India.\n• 30% wereldenergie nog steeds — vooral elektriciteit in arme + groeiende landen.\n\n**Voordelen fossiel**:\n• Hoge energiedichtheid.\n• Bestaande infrastructuur (raffinaderijen, pijpleidingen, tankstations).\n• Goedkoop bij beschikbaarheid.\n• Werkt 24/7 (in tegenstelling tot zon + wind).\n\n**Nadelen**:\n• **Eindig** — opraking binnen ~50 jaar bij huidig tempo (olie + gas), kolen ~150 jaar.\n• **Klimaatverandering** — CO₂-uitstoot hoofdoorzaak.\n• **Luchtvervuiling** — fijnstof, NOx, SOx.\n• **Geopolitieke spanning** — wie bezit, controleert.\n• **Olierampen** (Exxon Valdez 1989, BP Deepwater Horizon 2010).\n\n**Fracking (hydraulisch breken)**:\n• Water + chemicaliën onder hoge druk in gesteente → schalie barst → gas/olie vrij.\n• VS-revolutie: van importeur naar exporteur sinds 2015.\n• Kritiek: grondwater-vervuiling, aardbevingen (Groningen!), methaan-lekken.\n\n**Groningen-gas**:\n• Ontdekt 1959, grootste EU-veld.\n• Decennia financierde NL-welvaartsstaat ('gasbel').\n• Sinds 2012 stijgend aantal aardbevingen door winning.\n• Productie stapsgewijs afgebouwd, 2024 vrijwel nul.\n• Schade-vergoeding > 6 mld €, nog steeds onvolledig.\n\n**Energie-eenheden** (CSE-tip):\n• Joule (J): SI-eenheid energie.\n• Kilowattuur (kWh): commercieel = 3,6 MJ.\n• Ton oliequivalent (toe): ~42 GJ. Compare-eenheid voor fossiele brandstoffen.\n• BTU (British Thermal Unit): VS-gebruik.\n\n**Wereld-energie-mix** (2024, IEA):\n• Olie: 30%.\n• Steenkool: 27%.\n• Aardgas: 22%.\n• Hernieuwbaar (zon, wind, water, biomassa): 14%.\n• Nucleair: 4%.\n• Fossiel = ~79% nog steeds.",
    checks: [
      {
        q: "**Aardolie** ontstaat uit:",
        options: [
          "Dode zee-organismen miljoenen jaren geleden (100-400 mln j)",
          "Vulkanen",
          "Recente afval",
          "Dieren van afgelopen 1000 jaar"
        ],
        answer: 0,
        wrongHints: [null, "Niet — apart proces.", "Niet — duurt veel langer.", "Veel ouder."],
        uitlegPad: {
          stappen: [
            { titel: "Geologisch proces", tekst: "Algen + plankton zonken naar zeebodem → bedekt door sediment → druk + warmte → koolwaterstoffen. Daarom 'fossiele' brandstof. Niet hernieuwbaar in mensentijdschaal. Opraking-zorg: peak oil-debat." },
          ],
          niveaus: { basis: "Zee-organismen miljoenen jaren. A.", simpeler: "Oude zeedieren onder druk. A.", nogSimpeler: "Oud = A." },
        },
      },
      {
        q: "**Groningen-gas**:",
        options: [
          "Grootste EU-veld, winning afgebouwd door aardbevingen",
          "Klein veld",
          "Nooit gewonnen",
          "Olie ipv gas"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Decennia NL-welvaart", tekst: "Ontdekt 1959. Financierde welvaartsstaat NL (~€450 mld over decennia). Sinds 2012 toenemende aardbevingen → huizen-schade → boze burgers → kabinet besloot productie af te bouwen. 1 okt 2023 officieel gesloten (alleen reserve-veiligheid)." },
          ],
          niveaus: { basis: "Afgebouwd door bevingen. A.", simpeler: "Aardbevingen → stop. A.", nogSimpeler: "Stop = A." },
        },
      },
      {
        q: "**Aardgas** (CH₄) is **schoner** dan steenkool omdat:",
        options: [
          "Minder CO₂ + minder roet/zwavel per energie-eenheid",
          "Geen CO₂",
          "Hernieuwbaar",
          "Geen verschil"
        ],
        answer: 0,
        wrongHints: [null, "Wel CO₂.", "Tegenovergesteld.", "Wel verschil."],
        uitlegPad: {
          stappen: [
            { titel: "Energie per CO₂", tekst: "Methaan-verbranding: CH₄ + 2 O₂ → CO₂ + 2 H₂O. Per kWh ~50% minder CO₂ dan kolen. Geen roet, weinig zwavel/stikstofoxiden. Gas dus 'transitie-brandstof' tussen kolen + hernieuwbaar. Maar methaan-lek (uit pijpleidingen) is zelf zeer sterk broeikasgas (28× CO₂)." },
          ],
          niveaus: { basis: "Minder CO₂ + roet. A.", simpeler: "Schoner per kWh. A.", nogSimpeler: "Schoner = A." },
        },
      },
      {
        q: "**Fracking** = ?",
        options: [
          "Water + chemicaliën onder druk in gesteente om olie/gas vrij te maken",
          "Direct boren",
          "Hernieuwbare techniek",
          "Schoonmaken"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geavanceerde techniek.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "VS-revolutie", tekst: "Hydraulic fracturing: water + zand + chemicaliën onder hoge druk → schalie-gesteente barst → gas/olie stroomt vrij. Maakt VS sinds 2015 grootste olie- + gasproducent. Controverse: grondwater-vervuiling, methaan-lek, aardbevingen (Oklahoma). NL: alleen Groningen heeft conventionele winning, geen fracking." },
          ],
          niveaus: { basis: "Hoge druk water in gesteente. A.", simpeler: "Steen barst → gas eruit. A.", nogSimpeler: "Frack = A." },
        },
      },
      {
        q: "Wereld-energie-mix 2024: fossiel + nucleair + hernieuwbaar:",
        options: [
          "~79% fossiel + 4% nucleair + 14% hernieuwbaar",
          "50/50 fossiel/hernieuwbaar",
          "100% hernieuwbaar",
          "100% fossiel"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld huidig.", "Niet helaas.", "Niet meer."],
        uitlegPad: {
          stappen: [
            { titel: "Transitie nog ver", tekst: "Ondanks wind + zon-boom: fossiel domineert wereldwijd. Olie ~30%, kolen ~27%, gas ~22%. Hernieuwbaar groeit snel maar van laag aandeel. Nucleair stabiel laag (~4%). EU ~22% hernieuwbaar, NL ~17% (groeiend)." },
          ],
          niveaus: { basis: "Fossiel 79%. A.", simpeler: "Nog veel fossiel. A.", nogSimpeler: "79% = A." },
        },
      },
    ],
  },

  // ─── B. Hernieuwbare energie ──────────────────────────────
  {
    title: "Hernieuwbare energie — zon, wind, water, biomassa",
    explanation:
      "**Hernieuwbaar** = bron raakt niet op + onbeperkt te gebruiken.\n\n**1. Zonne-energie**:\n• **PV (photovoltaïsch)**: zonnepanelen → directe elektriciteit.\n  - Silicium-cellen, rendement ~20-25% (top: 47%).\n  - Sinds 2010 90% goedkoper → goedkoopste energiebron wereldwijd.\n  - NL: 23 GW geïnstalleerd 2024.\n• **Thermisch**: zonneboilers verwarmen water.\n• **Concentrated Solar Power (CSP)**: spiegels concentreren licht → smelt zout → stoom → turbine. Vooral woestijn.\n\n**2. Windenergie**:\n• Wind draait turbine → generator → elektriciteit.\n• Onshore (op land) vs offshore (op zee — meer wind, minder bezwaren bewoners).\n• Moderne turbine: 8-15 MW per stuk, hoogte 200+ m, blad 100+ m.\n• NL: 9 GW wind-capaciteit, doel 21 GW offshore in 2030.\n• Top-landen: China, VS, Duitsland, India.\n\n**3. Waterkracht**:\n• Stuwdammen + waterval drijft turbines.\n• 16% van wereld-elektriciteit (na fossiel).\n• Top: China (Three Gorges-dam, grootst ter wereld), Brazilië, Canada, VS.\n• Voordeel: 24/7 + opslag (water in meer).\n• Nadeel: ecosystemen verstoord, soms verdrijving bewoners.\n\n**4. Biomassa**:\n• Organisch materiaal (hout, mest, gewasresten) verbranden of vergisten.\n• Bio-ethanol uit suikerriet/maïs voor brandstof (Brazilië, VS).\n• Biogas uit mest/afval.\n• Controversieel: 'CO₂-neutraal' alleen als hernieuwbaar geteeld, geen ontbossing.\n\n**5. Geothermische energie**:\n• Warmte uit aardkorst.\n• Hot-spots (IJsland, Italië, Indonesië, Kenia, Filipijnen).\n• In NL beperkt — diepe-bodem-geothermie experimenteel.\n\n**6. Getijdenenergie**:\n• Eb + vloed drijft turbines.\n• Voorspelbaar (in tegenstelling tot zon + wind).\n• Beperkt — alleen specifieke kusten geschikt.\n• Voorbeeld: Rance-getijdencentrale (Frankrijk, 1966), Tidal Lagoon Swansea (UK, gepland).\n\n**7. Golfenergie**:\n• Bewegende oceaangolven → elektriciteit.\n• Experimenteel, kleine schaal.\n\n**Voordelen hernieuwbaar**:\n• Geen CO₂.\n• Geen luchtvervuiling.\n• Eindeloos beschikbaar.\n• Geen geopolitieke afhankelijkheid (zon schijnt overal).\n• Werkgelegenheid lokaal.\n\n**Nadelen**:\n• **Intermittentie**: zon + wind niet altijd.\n• **Opslag** nodig (batterijen, waterstof, pumped hydro).\n• Hoge initiële kosten (al sterk gedaald).\n• Landgebruik (windparken, zonneparken).\n• Esthetiek + biodiversiteit-impact.\n• Productie panelen + batterijen vereist mineralen (zie stap D).\n\n**Levelized Cost of Energy (LCOE)** 2024 (per MWh):\n• Solar PV: $30-40 (goedkoopste!).\n• Onshore wind: $35-50.\n• Offshore wind: $70-90.\n• Combined-cycle gas: $50-70.\n• Kolen: $60-90.\n• Nucleair (nieuw): $130-200 (duur door veiligheid).\n\nHernieuwbaar is NU economisch concurrerend zonder subsidie.\n\n**Nederland**:\n• Klimaatakkoord 2019: 49% CO₂-reductie 2030, klimaatneutraal 2050.\n• Veel offshore wind (Noordzee).\n• Zonnepanelen op daken sterk gegroeid (subsidie + salderingsregeling).\n• Nog veel werk: warmte (huizen), industrie, transport.",
    checks: [
      {
        q: "**Goedkoopste** energiebron 2024 (per MWh):",
        options: ["Solar PV (~$30-40)", "Kolen", "Nucleair nieuw", "Olie"],
        answer: 0,
        wrongHints: [null, "Niet — duurder.", "Veel duurder.", "Veel duurder."],
        uitlegPad: {
          stappen: [
            { titel: "Solar-revolutie", tekst: "Sinds 2010: solar 90% goedkoper. Vandaag goedkoper dan ALLE fossiel + nucleair. Wind tweede. China bouwt zonneparken sneller dan rest wereld samen. Verandering verloopt sneller dan voorspeld 10 jaar geleden." },
          ],
          niveaus: { basis: "Solar. A.", simpeler: "Zon = goedkoopste. A.", nogSimpeler: "Solar = A." },
        },
      },
      {
        q: "**Three Gorges Dam** (China) is:",
        options: [
          "Grootste waterkracht-installatie wereld",
          "Klein experimenteel project",
          "Kolencentrale",
          "Olie-platform"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "22,5 GW capaciteit", tekst: "Yangtze-rivier, geopend 2012. Pompt water via 32 turbines van 700 MW. Stuwdam 185 m hoog. Massief project: 1,3 mln mensen verplaatst, ecosystemen verstoord (Yangtze-dolfijn uitgestorven). Genereert ~1% China's elektriciteit." },
          ],
          niveaus: { basis: "Grootste waterkracht. A.", simpeler: "Reusachtige dam. A.", nogSimpeler: "Three Gorges = A." },
        },
      },
      {
        q: "**Intermittentie** = ?",
        options: [
          "Hernieuwbaar (zon/wind) niet altijd beschikbaar → opslag nodig",
          "Constante levering",
          "Tijdmeting",
          "Niets"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet specifiek.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Kern-uitdaging transitie", tekst: "Zon schijnt overdag. Wind waait soms wel/niet. Geen 24/7 zoals gas/kolen/nuclear. Oplossingen: batterijen (Lithium-ion, opslag-uren), pumped hydro (water omhoog → omlaag bij vraag), waterstof (lange-termijn opslag), netwerk-koppeling (Europa: zon Spanje + wind Noorzee + waterkracht Noorwegen)." },
          ],
          niveaus: { basis: "Niet altijd beschikbaar. A.", simpeler: "Zon/wind variabel. A.", nogSimpeler: "Intermittent = A." },
        },
      },
      {
        q: "**Biobrandstof** is controversieel als:",
        options: [
          "Ontbossing voor palmolie of mais-velden vs voedsel",
          "Goedkoop",
          "Schoon",
          "Hernieuwbaar"
        ],
        answer: 0,
        wrongHints: [null, "Niet kritiek-punt.", "Voordeel.", "Voordeel."],
        uitlegPad: {
          stappen: [
            { titel: "'Food vs Fuel' debat", tekst: "Brazilië teelt suikerriet voor bio-ethanol → minder ruimte voedsel + Amazone-ontbossing. Indonesië palmolie voor biodiesel → tropische ontbossing. VS-mais voor ethanol gebruikt 40% mais-oogst → voedselprijzen hoger. Argument: bio uit afval (mest, restproducten) OK, maar specifiek teelt voor fuel = problematisch." },
          ],
          niveaus: { basis: "Ontbossing/voedsel-conflict. A.", simpeler: "Voedsel-grond gebruikt voor fuel. A.", nogSimpeler: "Conflict = A." },
        },
      },
      {
        q: "**Offshore wind** (op zee) voordeel boven onshore (op land):",
        options: [
          "Meer + constantere wind + minder bezwaren bewoners",
          "Goedkoper",
          "Geen wind",
          "Geen verschil"
        ],
        answer: 0,
        wrongHints: [null, "Duurder.", "Tegenovergesteld.", "Wel verschil."],
        uitlegPad: {
          stappen: [
            { titel: "Noordzee-bonanza", tekst: "Op zee: 20-30% hogere capaciteitsfactor (meer wind). Geen 'not in my backyard' bezwaar. Maar duurder bouwen + onderhouden. NL plant 21 GW offshore 2030, 70 GW 2050 — voldoende voor halve nationale stroom-vraag. Doggersbank-veld UK = grootste wereld in aanbouw." },
          ],
          niveaus: { basis: "Meer wind + minder bezwaren. A.", simpeler: "Zee = meer wind. A.", nogSimpeler: "Wind zee = A." },
        },
      },
    ],
  },

  // ─── C. Geopolitiek + OPEC ────────────────────────────────
  {
    title: "Geopolitiek + OPEC — wie controleert energie?",
    explanation:
      "**Energie = geopolitiek wapen** door eeuwen.\n\n**OPEC** (Organization of Petroleum Exporting Countries):\n• Opgericht 1960 Bagdad. Hoofdkantoor Wenen.\n• 12 leden: Saudi-Arabië, Iran, Iraq, Koeweit, VAE, Venezuela, Algerije, Libië, Nigeria, Gabon, Equatoriaal-Guinea, Republiek Congo.\n• Doel: olie-productie + prijzen coördineren.\n• Controleert ~30% wereldproductie, ~80% bewezen reserves.\n\n**OPEC+ (sinds 2016)**:\n• OPEC + Rusland + Mexico + Kazachstan etc.\n• Werkt vaak samen om prijzen te sturen.\n\n**Olie-crises in geschiedenis**:\n\n**1973 Oliecrisis**:\n• Yom Kippoer-oorlog (Israel vs Arabieren).\n• Arabische OPEC-leden boycotten landen die Israel steunden.\n• Olie-prijzen ×4 in maanden.\n• Westen: benzine-rantsoenering, autoloze zondagen, recessie.\n• Begin 'oliecrisis-bewustzijn' + alternatieven zoeken.\n\n**1979 Tweede oliecrisis**:\n• Iraanse Revolutie (Ayatollah Khomeini).\n• Iran-export valt weg.\n• Prijzen verdubbelden.\n\n**1990 Iraq-Koeweit + Golfoorlog**:\n• Iraq invadeert Koeweit (zomer 1990) over olie-grenzen.\n• VS-coalitie verdrijft Iraq vroeg 1991.\n• Olie-prijzen schoten omhoog + daarna omlaag.\n\n**2008 Olie-piek**:\n• $147/vat juli 2008 (record).\n• Speculatie + groeiende vraag China + voorraad-zorgen.\n• Daalde scherp tijdens financiële crisis 2008-09.\n\n**2014-16 + 2020 Olie-instortingen**:\n• Shale-revolutie VS + zwakkere vraag → overschot.\n• 2020 COVID-shutdown: olie-vraag stortte → kortstondig NEGATIEVE prijs voor WTI (mei 2020).\n\n**2022 Oekraïne-oorlog**:\n• Rusland invadeert Oekraïne feb 2022.\n• Westerse sancties op Russische olie + gas.\n• Europa zwaar afhankelijk van Russisch gas (~40% importen) → energie-crisis 2022.\n• Gasprijzen ×10 zomer 2022. Inflatie schoot omhoog.\n• Lesgeven over geopolitieke afhankelijkheid → versnelde transitie.\n\n**Nord Stream-pijpleidingen**:\n• Russisch gas direct naar DE via Oostzee.\n• Nord Stream 1 (2011), Nord Stream 2 (klaar 2021, niet geopend).\n• Sept 2022: explosie + lekkage. Sabotage — daders nog onduidelijk (Rusland? Oekraïne? VS? speculaties).\n\n**Vandaag**:\n• VS = grootste olie- + gas-producent (door shale).\n• Saudi-Arabië + Rusland zwaargewichten OPEC+.\n• China = grootste importeur.\n• EU diversificeert weg van Rusland: LNG uit VS/Qatar/Noorwegen.\n• Energie-transitie: minder oliebehoefte = minder OPEC-macht?\n\n**Energiezekerheid** = belangrijke politieke prioriteit:\n• Diversificatie van bronnen + leveranciers.\n• Eigen productie (incl. hernieuwbaar).\n• Strategische reserves (NL: 90 dagen-import).\n• Internationale samenwerking (IEA).\n\n**Nederland-positie**:\n• Olie + gas-importeur (eigen Groningen afgebouwd).\n• Rotterdam = grootste olie-haven Europa, raffinaderij-centrum.\n• Schiphol + transport-sector grote energie-gebruikers.\n• Energie-transitie nodig voor onafhankelijkheid + klimaat.",
    checks: [
      {
        q: "**OPEC** controleert ongeveer:",
        options: [
          "~30% wereld-productie + ~80% bewezen reserves",
          "100% wereld-olie",
          "Niets",
          "Alleen Amerikaanse olie"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Niet — VS apart."],
        uitlegPad: {
          stappen: [
            { titel: "Kartel met macht", tekst: "12 leden onder leiding Saudi-Arabië. Coördineren productie → invloed wereldprijs. Reservoirs vooral Midden-Oosten + Zuid-Amerika + Afrika. Productie-quota maandelijks beslist. Saudi heeft 'spare capacity' = kan extra produceren in crisis." },
          ],
          niveaus: { basis: "30%/80%. A.", simpeler: "Veel reserves, deel productie. A.", nogSimpeler: "OPEC = A." },
        },
      },
      {
        q: "**1973 Oliecrisis** veroorzaakt door:",
        options: [
          "Arabische OPEC-boycot na Israel-oorlog",
          "Schaarste reserve",
          "Pandemie",
          "Aardbeving"
        ],
        answer: 0,
        wrongHints: [null, "Niet — politiek.", "Niet bestaand.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Yom Kippoer-oorlog gevolg", tekst: "Egypt + Syrië vielen Israel aan okt 1973. VS + NL + andere westerse landen steunden Israel. Arabische OPEC reageerde met boycot → olie ×4. NL: autoloze zondagen, hamster-rijdrang. Begin van energie-bewustzijn West. Versnelde isolatie-techniek + alternatieven." },
          ],
          niveaus: { basis: "Arabische boycot. A.", simpeler: "Politieke boycot. A.", nogSimpeler: "Boycot = A." },
        },
      },
      {
        q: "**Oekraïne-oorlog 2022** + energie:",
        options: [
          "EU verloor Russisch gas → energie-crisis + diversificatie versneld",
          "Geen impact",
          "Olieprijzen daalden",
          "VS minder gas-export"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Wake-up call afhankelijkheid", tekst: "EU was ~40% afhankelijk van Russisch gas (DE bijna 60%). Sancties tegen Rusland + Russen draaiden gas dicht → prijzen 10× hoger zomer 2022. EU haastte: LNG uit VS/Qatar, hernieuwbaar versnellen, energiebesparing. Pijnlijk maar leerzaam: energie-onafhankelijkheid is strategisch belang." },
          ],
          niveaus: { basis: "EU verloor Russisch gas. A.", simpeler: "Geen Rus-gas meer. A.", nogSimpeler: "Crisis 2022 = A." },
        },
      },
      {
        q: "Wie is **grootste olie- + gas-producent** wereld 2024?",
        options: ["VS (door shale-revolutie)", "Saudi-Arabië", "Rusland", "China"],
        answer: 0,
        wrongHints: [null, "Niet meer #1.", "Niet meer #1.", "Niet — importeur."],
        uitlegPad: {
          stappen: [
            { titel: "Shale-revolutie 2010+", tekst: "Fracking-techniek heeft VS van importeur naar exporteur veranderd. Sinds 2018 grootste olie-producent + grootste gas-producent. Saudi-Arabië #2 olie. Rusland #2 gas. VS exporteert nu LNG naar EU als alternatief voor Rusland." },
          ],
          niveaus: { basis: "VS. A.", simpeler: "Verenigde Staten. A.", nogSimpeler: "VS = A." },
        },
      },
      {
        q: "**Nord Stream-pijpleidingen** sept 2022:",
        options: [
          "Sabotage/explosie in Oostzee — daders onduidelijk",
          "Geopend",
          "Verlengd",
          "Geen relevant nieuws"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Mysterieuze sabotage", tekst: "Nord Stream 1 (operationeel) + Nord Stream 2 (klaar maar niet geopend wegens Oekraïne-oorlog) explodeerden gelijktijdig. Vier gaten in pijp, gas in Oostzee. Onderzoeken nog lopend. Verdachten: Rusland zelf? Oekraïne? VS? Eind 2024: forse focus op Oekraïens-gerelateerde actoren in onderzoek." },
          ],
          niveaus: { basis: "Explosie/sabotage. A.", simpeler: "Pijpleidingen kapot. A.", nogSimpeler: "Sabotage = A." },
        },
      },
    ],
  },

  // ─── D. Kritieke materialen + waterstof ───────────────────
  {
    title: "Kritieke materialen + waterstof-economie",
    explanation:
      "**Energietransitie heeft nieuwe grondstoffen nodig**.\n\n**Kritieke materialen voor transitie**:\n\n**1. Lithium**:\n• Batterijen (EV, telefoon, opslag).\n• Grootste reserves: Bolivia (Salar de Uyuni), Chili, Argentinië ('Lithium Driehoek') + Australië.\n• China controleert verwerking.\n• Prijs ×4 in 2021-22 door EV-boom.\n\n**2. Kobalt**:\n• Batterij-component (kathode).\n• ~70% wereldproductie in **DR Congo** — vaak in slechte omstandigheden (kinder-arbeid in 'artisanale' mijnen).\n• China koopt op + verwerkt.\n• Tesla + andere fabrikanten zoeken alternatieve chemie (LFP-batterij zonder kobalt).\n\n**3. Nikkel**:\n• Batterij-kathode.\n• Indonesië = grootste producent (deels uit regenwoud-mijnbouw, controversieel).\n• Rusland + Filipijnen.\n\n**4. Zeldzame aarden (rare earths)**:\n• 17 elementen (neodymium, dysprosium, etc.).\n• Vereist voor permanent-magneten in EV-motoren + windturbines.\n• 80%+ China produceert + verwerkt (dominante positie).\n• Soms gebruikt als geopolitiek wapen.\n\n**5. Koper**:\n• Voor elektrificatie (kabels, motoren).\n• EV gebruikt 4× zoveel koper als verbrandingsmotor-auto.\n• Top: Chili, Peru, China.\n• Zorgen over opraking: huidige reserves voldoende tot ~2050.\n\n**6. Silicium**:\n• Zonnepanelen.\n• Volop beschikbaar (zand), maar 'solar-grade' vereist zuivering.\n• China domineert productie panelen (>80% wereld).\n\n**Geopolitiek**:\n• EU + VS willen minder afhankelijk van China.\n• 'Critical Raw Materials Act' EU 2023: lijst van 34 kritieke materialen.\n• 'Inflation Reduction Act' VS 2022: $370 mld voor schone energie + binnenlandse productie.\n• Re-shoring + 'friend-shoring' (binnen alliantie).\n\n**Recycling + circulaire economie**:\n• Lithium-batterijen: ~5% gerecycled nu. Doel EU: 50% in 2030.\n• Zonnepanelen: nog niet veel afval (jonge industrie), maar piek komt 2030+.\n• Belangrijk: doelbewust ontwerp voor demontage.\n\n**Waterstof-economie** (groot toekomst-belofte):\n\n**Hoe ontstaat waterstof?**\n• **Groene H₂**: elektrolyse water (H₂O → H₂ + ½O₂) met hernieuwbare elektriciteit. Echt schoon.\n• **Blauwe H₂**: uit aardgas + CO₂ afvangen (CCS). Tussenoplossing.\n• **Grijze H₂**: uit aardgas zonder CCS. Vervuilend (huidige norm, ~95% productie).\n• **Pink/Roze H₂**: uit nucleaire elektriciteit.\n\n**Toepassingen**:\n• **Industrie**: staal-productie (groene staal), kunstmest (Haber-Bosch), raffinage.\n• **Zware transport**: schepen, vliegtuigen, vrachtwagens (waar batterij te zwaar is).\n• **Lange-termijn opslag**: zon overdag → H₂ → terug in elektriciteit avond/seizoenen.\n• **Verwarming**: omstreden (warmtepomp efficiënter).\n\n**Uitdagingen**:\n• 30% energie-verlies bij elektrolyse.\n• Opslag (compressie of vloeibaar bij -253°C).\n• Infrastructuur (pijpleidingen niet altijd geschikt).\n• Veiligheid (waterstof is heel licht + ontvlambaar — Hindenburg 1937).\n\n**Nederland-rol**:\n• Rotterdamse haven = potentiële Europese H₂-hub.\n• Noordzee-wind → H₂-productie (gepland).\n• Pijplijn-netwerk Gasunie wordt waterstof-klaar gemaakt.\n• Tata Steel IJmuiden wil groene staal — vereist groene H₂.",
    checks: [
      {
        q: "**Kobalt** voor batterijen komt vooral uit:",
        options: [
          "DR Congo (~70% wereldproductie)",
          "Australië",
          "Saudi-Arabië",
          "Nederland"
        ],
        answer: 0,
        wrongHints: [null, "Niet — apart materiaal.", "Niet — olie.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Ethisch debat", tekst: "DR Congo dominantie + slechte arbeidsomstandigheden in 'artisanale' mijnen (kinderen, geen veiligheid). Tesla, Apple proberen 'kobalt-vrije' batterijen (LFP-chemie). Politiek: hoe responsabel sourcen? Mensenrechten-rapporten + supply-chain-audits versterken." },
          ],
          niveaus: { basis: "DR Congo. A.", simpeler: "Afrika hoofdbron. A.", nogSimpeler: "Congo = A." },
        },
      },
      {
        q: "**Zeldzame aarden** worden voor ~80%+ geproduceerd door:",
        options: ["China", "VS", "Australië", "Wereldwijd verdeeld"],
        answer: 0,
        wrongHints: [null, "Veel minder.", "Heeft reserves maar produceert weinig.", "Nee — geconcentreerd."],
        uitlegPad: {
          stappen: [
            { titel: "Geopolitiek wapen", tekst: "China domineert via mijnen Inner Mongolië + low-cost verwerking. Gebruikte 2010-conflict met Japan dreiging te onderbreken → wereldwijde paniek. Sindsdien: VS + Australië + EU haasten zich eigen mijnen op te starten (bijv. Mountain Pass California). Maar inhalen duurt jaren." },
          ],
          niveaus: { basis: "China. A.", simpeler: "China dominant. A.", nogSimpeler: "China = A." },
        },
      },
      {
        q: "**Groene waterstof** wordt gemaakt door:",
        options: [
          "Elektrolyse water met hernieuwbare elektriciteit (H₂O → H₂ + O₂)",
          "Aardgas-reformatie",
          "Olie-raffinage",
          "Direct uit lucht"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is grijs of blauw.", "Niet.", "Niet — geen H₂ in lucht."],
        uitlegPad: {
          stappen: [
            { titel: "Echt schoon — bij hernieuwbare bron", tekst: "Elektrolyzer: 2 elektroden in water, stroom erop, water splitst in waterstof + zuurstof. Bij gebruik (in brandstofcel of verbranding): H₂ + O₂ → H₂O + energie. **Geen CO₂ als input + output schone water**. Maar duur — alleen rendabel bij goedkope hernieuwbare stroom + opschaling." },
          ],
          niveaus: { basis: "Elektrolyse + hernieuwbaar. A.", simpeler: "Water gesplitst door zon-stroom. A.", nogSimpeler: "Elektrolyse = A." },
        },
      },
      {
        q: "**Lithium-driehoek** ligt in:",
        options: [
          "Bolivia + Chili + Argentinië",
          "China + Mongolia + Rusland",
          "Australië + Nieuw-Zeeland",
          "VS + Canada + Mexico"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Australië wel groot, maar geen 'driehoek'.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Hoogvlakte zout-vlaktes", tekst: "Salar de Uyuni (Bolivia), Atacama (Chili), Hombre Muerto (Argentinië). Lithium in zout-pekel, uitdroging in basins. ~55% wereld-reserves hier. China + Australië groot in productie (uit hardrock-mijnen). EV-boom → Bolivia/Chili-belang voor toekomst." },
          ],
          niveaus: { basis: "Bolivia/Chili/Argentinië. A.", simpeler: "Zuid-Amerika hoogvlakte. A.", nogSimpeler: "Triangle = A." },
        },
      },
      {
        q: "Een **EV-auto** gebruikt hoeveel keer meer koper dan benzine-auto?",
        options: ["~4× meer", "Net zoveel", "Half zoveel", "10× meer"],
        answer: 0,
        wrongHints: [null, "Niet — meer.", "Tegenovergesteld.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Elektrificatie = koper-massa", tekst: "Verbrandingsauto: ~20 kg koper. EV: ~80 kg (motor-wikkelingen, batterij-cellen, kabels). EV-boom → koper-vraag explodeert. Zorg over voldoende mijnbouw-capaciteit voor 2030+. Mogelijk koper-tekort + prijspiek." },
          ],
          niveaus: { basis: "4×. A.", simpeler: "4 keer meer. A.", nogSimpeler: "4× = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Energietransitie + Nederland",
    explanation:
      "**Energietransitie** = overgang van fossiel naar hernieuwbaar + efficiency.\n\n**Doelen NL** (Klimaatakkoord 2019):\n• 49% CO₂-reductie tegen 2030 (vs 1990).\n• 95% reductie tegen 2050 (= klimaatneutraal).\n• 70% hernieuwbare elektriciteit 2030.\n• Aardgasvrije woningen 2050.\n• Verbod nieuwe benzine/diesel-auto-verkoop 2035 (EU).\n\n**Vijf sectoren**:\n\n**1. Elektriciteit** (~20% NL-uitstoot):\n• Kolencentrales sluiten (Hemweg 2019, Maasvlakte 3 + Onyx + RWE 2030).\n• Offshore wind boom (Noordzee).\n• Zonnepanelen op daken + zonneparken.\n• Kernenergie-debat: 2 nieuwe centrales gepland 2035.\n\n**2. Gebouwde omgeving** (~15%):\n• Aardgasvrij: warmtepomp, warmtenet, isolatie.\n• Subsidies (ISDE) + verplichting nieuwbouw zonder gas.\n• Hybride warmtepomp tussenoplossing.\n• Renovatie 7 mln woningen — gigantisch.\n\n**3. Industrie** (~30%):\n• Tata Steel (CO₂-grootverbruiker NL).\n• Chemische industrie (Shell, DSM, Dow).\n• Elektrificatie + groene H₂ + CCS.\n• ETS (EU emissiehandel) + nationale heffing.\n\n**4. Transport** (~20%):\n• Elektrificatie personenauto's (NL-leider EU: ~30% nieuwe verkoop EV in 2024).\n• Vrachtwagens via H₂ of batterij.\n• Vliegen + scheepvaart moeilijkste (high energy density nodig).\n• OV elektrificeren + fiets.\n\n**5. Landbouw** (~15%):\n• Veehouderij grootste uitstoter (methaan + lachgas).\n• Stikstof-crisis 2019+ — boeren moeten reduceren.\n• Plantaardige eiwitten + voedsel-systeem-verandering.\n\n**Uitdagingen NL**:\n\n**Netcongestie**:\n• Stroomnet kan groei zon + EV niet bijhouden.\n• Wachtlijst voor aansluiting bedrijven + zonneparken.\n• TenneT + netbeheerders investeren €100 mld+ tot 2050.\n\n**Vergunning + draagvlak**:\n• Windmolens lokaal vaak afgewezen (visueel, geluid).\n• Zonneparken op landbouwgrond = discussie.\n• Lange procedures vertragen.\n\n**Financiering**:\n• Subsidies (SDE++, ISDE) = miljarden per jaar.\n• Wie betaalt? Belastingen + stroom-rekening.\n• Sociale rechtvaardigheid: huur-woning vs koop-woning verschil.\n\n**Internationale context**:\n\n**Klimaat-akkoord Parijs** (2015):\n• <1,5-2°C opwarming.\n• Nationally Determined Contributions (NDC's).\n• Loss & Damage-fonds (2022) voor arme landen.\n\n**China + India**:\n• China #1 emitter (~30% wereld), maar ook #1 in zonne- + wind-bouw.\n• India groeit snel, kolenafhankelijk maar zon-investering.\n\n**EU Green Deal**:\n• 55% reductie 2030 (vs 1990).\n• Carbon Border Adjustment (CBAM) 2026.\n• Verbod fossiele auto's 2035.\n\n**VS Inflation Reduction Act 2022**:\n• $370 mld klimaat + schone energie.\n• Belastingvoordeel EV + zonnepanelen + thuisefficiëntie.\n• Re-shoring batterij + zonnepanelen-productie.\n\n**Hoop + realisme**:\n• Solar + wind goedkoper dan kolen → markt-logica werkt mee.\n• EV's verbreiden snel.\n• Maar tempo nog niet voldoende voor 1,5°C.\n• 2°C-pad realistisch met sterke actie.\n• Tipping points (Amazon, Antarctische ijskap) urgent.\n\n**Persoonlijke acties**:\n• Vegetarisch eten (groot effect).\n• Minder vliegen.\n• Elektrische auto / fiets / OV.\n• Energiebesparing thuis (isoleren, LED, slimme thermostaat).\n• Zonnepanelen.\n• Stem op klimaat-bewuste partijen.\n• Investering: pensioen + bank in groene fondsen.",
    checks: [
      {
        q: "**NL Klimaatakkoord 2019** doel 2030:",
        options: [
          "49% CO₂-reductie vs 1990",
          "Geen doel",
          "100% reductie",
          "10% reductie"
        ],
        answer: 0,
        wrongHints: [null, "Wel doel.", "Niet realistisch 2030.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Stevig + bindend", tekst: "Ambitieus doel: bijna halveren in 11 jaar. Gerelateerd aan EU-Green-Deal-55%-doel. Vereist grootschalige actie alle sectoren. NL was 2024 ongeveer op 30% reductie sinds 1990 → versnelling nodig." },
          ],
          niveaus: { basis: "49%. A.", simpeler: "Bijna halveren 2030. A.", nogSimpeler: "49% = A." },
        },
      },
      {
        q: "**Grootste CO₂-uitstoter sector NL** is:",
        options: [
          "Industrie (~30%)",
          "Transport (~20%)",
          "Gebouwde omgeving (~15%)",
          "Landbouw (~15%)"
        ],
        answer: 0,
        wrongHints: [null, "Tweede.", "Derde-vierde.", "Idem."],
        uitlegPad: {
          stappen: [
            { titel: "Tata + chemie + raffinage", tekst: "Industrie = grootste deel: Tata Steel (#1 emitter NL), Shell/Pernis-raffinaderij, chemie-cluster Zuid-NL. Moeilijkst te elektrificeren door hoge-temperatuur-processen. Vereist groene H₂ + CCS. EU emissiehandel (ETS) bestraft sterk." },
          ],
          niveaus: { basis: "Industrie 30%. A.", simpeler: "Fabrieken hoogste. A.", nogSimpeler: "Industrie = A." },
        },
      },
      {
        q: "**Netcongestie** in NL:",
        options: [
          "Stroomnet vol — kan groei van zonne + EV niet aan",
          "Geen probleem",
          "Alleen 's nachts",
          "Alleen op platteland"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Hele dag.", "Ook stad."],
        uitlegPad: {
          stappen: [
            { titel: "Onverwacht knelpunt", tekst: "Tweede helft 2024: bedrijven die zonneparken willen bouwen krijgen 'geen aansluiting' van netbeheerder. Stroomnet ontworpen voor centrale grote centrales, niet vele kleine bronnen + grote vraag-pieken (EV-laadstations). TenneT investeert €100 mld+ tot 2050. Sociale + economische impact (industrie kan niet uitbreiden)." },
          ],
          niveaus: { basis: "Net vol. A.", simpeler: "Stroomnet kan niet aan. A.", nogSimpeler: "Net vol = A." },
        },
      },
      {
        q: "**Verbod nieuwe benzine/diesel-auto-verkoop** EU vanaf:",
        options: ["2035", "2025", "2050", "Geen verbod"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te laat.", "Wel verbod gepland."],
        uitlegPad: {
          stappen: [
            { titel: "Akkoord 2022", tekst: "EU-deal: vanaf 2035 alleen nieuwe auto's met nul CO₂-emissie. Bestaande auto's mogen blijven rijden + tweedehands-markt blijft. Duitsland eiste uitzondering voor e-fuels (synthetische brandstof) — komt mogelijk. NL volgt EU. Autofabrikanten investeren miljarden in EV-productie." },
          ],
          niveaus: { basis: "2035. A.", simpeler: "Geen nieuwe benzine 2035. A.", nogSimpeler: "2035 = A." },
        },
      },
      {
        q: "**Persoonlijke actie** met grootste klimaat-impact:",
        options: [
          "Plantaardig dieet + minder vliegen + EV/fiets ipv auto",
          "LED-lampen",
          "Recyclen",
          "Plastic vermijden"
        ],
        answer: 0,
        wrongHints: [null, "Helpt iets maar marginaal.", "Idem.", "Idem."],
        uitlegPad: {
          stappen: [
            { titel: "Hieronder enorm verschil", tekst: "Onderzoek Wynes & Nicholas 2017: top-acties klimaat:\n1. Geen extra kind (~58 ton CO₂/jaar levenslang).\n2. Geen auto (2,4 ton).\n3. Vluchten vermijden (~1,6 ton per lange reis).\n4. Plantaardig dieet (0,8 ton).\nKleine acties (recyclen, LED) <0,2 ton elk. Niet alleen-of, maar groot belangrijker dan klein." },
          ],
          niveaus: { basis: "Dieet + minder vliegen. A.", simpeler: "Eten + reizen = top. A.", nogSimpeler: "Levensstijl = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const energieHulpbronnenHavoVwo = {
  id: "energie-hulpbronnen-havo-vwo",
  title: "Energie + Hulpbronnen (HAVO/VWO Aardrijkskunde)",
  emoji: "⛽",
  level: "havo-vwo-4-5",
  subject: "aardrijkskunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Aardrijkskunde — Energie + Hulpbronnen + Geopolitiek (CSE)",
  prerequisites: [
    { id: "globalisering-havo-vwo", title: "Globalisering", niveau: "havo-3F" },
    { id: "atmosfeer-klimaat-havo-vwo", title: "Atmosfeer + Klimaat", niveau: "havo-3F" },
  ],
  intro:
    "Energie + Hulpbronnen voor HAVO/VWO eindexamen — fossiele brandstoffen (olie/gas/kolen + Groningen), hernieuwbaar (zon/wind/water/biomassa), OPEC + geopolitiek (oliecrises + Oekraïne 2022), kritieke materialen + waterstof, energietransitie NL + persoonlijke acties. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "energie", "hulpbronnen",
    "fossiele brandstof",
    "olie", "petroleum",
    "aardgas", "methaan",
    "steenkool",
    "fracking", "shale",
    "Groningen", "aardbevingen",
    "hernieuwbare energie",
    "zonne-energie", "PV", "zonnepaneel",
    "windenergie", "offshore wind", "onshore",
    "waterkracht", "Three Gorges",
    "biomassa", "biobrandstof", "ethanol",
    "geothermie",
    "getijdenenergie",
    "OPEC", "OPEC+",
    "oliecrisis 1973", "1979 Iran",
    "Pearl Harbor",
    "Oekraïne 2022", "Nord Stream",
    "kritieke materialen",
    "lithium", "lithium-driehoek",
    "kobalt", "DR Congo",
    "nikkel",
    "zeldzame aarden", "rare earths",
    "koper",
    "waterstof", "H2",
    "groene waterstof", "blauwe waterstof",
    "elektrolyse",
    "intermittentie", "energie-opslag",
    "Klimaatakkoord NL",
    "Green Deal EU",
    "Inflation Reduction Act",
    "netcongestie",
    "Tata Steel",
    "EV", "elektrische auto",
    "warmtepomp",
    "aardgasvrij",
    "Parijs-akkoord",
    "energietransitie",
  ],
  chapters,
  steps,
};

export default energieHulpbronnenHavoVwo;
