// Leerpad: Globalisering + Wereldongelijkheid — HAVO/VWO Aardrijkskunde
// CSE-onderwerp. Wereldhandel, MNCs, ontwikkelingslanden, ongelijkheid,
// SDG's, migratie, milieu-impact.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🌐", "🏭", "📊", "🚶", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is globalisering?", emoji: "🌐", from: 0, to: 0 },
  { letter: "B", title: "Wereldhandel + MNCs", emoji: "🏭", from: 1, to: 1 },
  { letter: "C", title: "Ongelijkheid Noord-Zuid", emoji: "📊", from: 2, to: 2 },
  { letter: "D", title: "Migratie + remittances", emoji: "🚶", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — SDG's + toekomst", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Wat is globalisering ──────────────────────────────
  {
    title: "Globalisering — vier dimensies",
    explanation:
      "**Globalisering** = wereldwijde toename van verbindingen tussen mensen, bedrijven, regeringen en culturen.\n\n**Vier dimensies**:\n\n**1. Economisch**:\n• Vrije handel via verdragen (WTO, NAFTA, EU).\n• Multinationale ondernemingen (Apple, Shell, Toyota) wereldwijd actief.\n• Wereldwijde toeleveringsketens (chip ontworpen in VS, geproduceerd in Taiwan, geassembleerd in China, verkocht in Europa).\n• Financiële markten: aandelen + valuta 24/7 verhandelbaar.\n\n**2. Cultureel**:\n• Hollywood-films, K-pop, mode wereldwijd.\n• McDonald's, Starbucks, Nike als 'wereldmerken'.\n• Engels als lingua franca.\n• Sociale media verbinden mensen.\n• Risico: 'McDonaldisatie' — verlies van lokale culturen.\n\n**3. Politiek**:\n• Internationale organisaties: VN, NAVO, WHO, EU.\n• Internationale verdragen: klimaat, mensenrechten, handel.\n• Probleem: nationale soevereiniteit vs supranationale beslissingen.\n\n**4. Technologisch**:\n• Internet wereldwijd toegankelijk.\n• Cloud + AI: in seconden communiceren met andere kant aarde.\n• Vliegverkeer + container-schepen efficiënt + goedkoop.\n• Containerisatie (jaren 1960) revolutioneerde wereldhandel.\n\n**Drie golven van globalisering**:\n• **1.0 (1500-1800)**: ontdekkingsreizen, kolonisatie, slavenhandel.\n• **2.0 (1800-1914)**: industriële revolutie, stoom + telegraaf, eerste massa-handel.\n• **3.0 (1980-nu)**: digitaal, containers, val Sovjet-Unie, China's opening.\n\n**Positief**:\n• Armoede wereldwijd halveerde sinds 1990 (1,9 mld → 700 mln in extreme armoede).\n• Goedkopere goederen voor consument.\n• Kennis-uitwisseling, medische vooruitgang.\n• Vrede tussen handelspartners (peace through commerce-theorie).\n\n**Negatief**:\n• Banen-verlies in westen (industrie naar lage-loon-landen).\n• Ongelijkheid binnen landen stijgt (winnaars: hoogopgeleid; verliezers: industrie-arbeider).\n• Milieu-impact: lange transportketens, fast fashion.\n• Cultureel uitvlakken.\n• Pandemie-verspreiding (COVID-19 wereldwijd in 3 maanden).\n• Financiële crises wereldwijd (2008).\n\n**Anti-globalisering** / **dé-globalisering**:\n• Trump-tarieven 2018+ tegen China.\n• Brexit 2016: VK uit EU.\n• Yellow Vest-protesten (Frankrijk).\n• 'America First', 'Make America Great Again'-bewegingen wereldwijd.\n• COVID + Oekraïne-oorlog: bedrijven herzien 'just-in-time'-ketens → re-shoring.",
    checks: [
      {
        q: "**Globalisering** heeft welke 4 dimensies?",
        options: [
          "Economisch, cultureel, politiek, technologisch",
          "Alleen economisch",
          "Sport + kunst + reizen + werk",
          "Geen onderscheid"
        ],
        answer: 0,
        wrongHints: [null, "Onvolledig.", "Niet de 4 categorieën.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Holistische analyse", tekst: "Globalisering is breed verschijnsel met economische (handel, MNCs), culturele (Hollywood, taal), politieke (VN, EU) en technologische (internet, containers) facetten. Niet één daarvan verklaart alles." }],
          niveaus: { basis: "Eco/cult/pol/tech. A.", simpeler: "4 hoofdgebieden. A.", nogSimpeler: "4 dim = A." },
        },
      },
      {
        q: "Wat verlaagde drastisch transportkosten + maakte wereldhandel mogelijk (jaren 1960)?",
        options: [
          "Containerisatie (standaard containers)",
          "Telegraaf",
          "Internet",
          "Stoomschip"
        ],
        answer: 0,
        wrongHints: [null, "Niet — 19e eeuw.", "Niet — apart.", "Niet — 19e eeuw."],
        uitlegPad: {
          stappen: [
            { titel: "Standaard maakt alles efficiënt", tekst: "Containers met standaard formaat (20-ft, 40-ft) → laden/lossen schip in uren ipv weken → kosten 90% omlaag → vandaag bijna alles in containers vervoerd. Maritime Innovation prijs. China's exporttegelijk mogelijk gemaakt." },
          ],
          niveaus: { basis: "Containers. A.", simpeler: "Standaard containers. A.", nogSimpeler: "Container = A." },
        },
      },
      {
        q: "Extreme armoede wereld is sinds 1990:",
        options: [
          "Bijna gehalveerd (1,9 mld → 700 mln)",
          "Verdubbeld",
          "Gelijk gebleven",
          "Compleet verdwenen"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — gedaald.", "Helaas nog niet."],
        uitlegPad: {
          stappen: [
            { titel: "Grootste daling ooit", tekst: "China + India trokken honderden miljoenen uit armoede via industrialisatie + globalisering. Sub-Sahara Afrika daling minder snel. Wereldbank-cijfers (<$2,15/dag): 36% (1990) → ~9% (2024). Eén positieve kant van globalisering." },
          ],
          theorie: "COVID + voedselcrisis 2020-2022 tijdelijke terugval.",
          niveaus: { basis: "Halvering. A.", simpeler: "Veel minder armoede. A.", nogSimpeler: "↓ = A." },
        },
      },
      {
        q: "Welke is een **politiek** aspect van globalisering?",
        options: [
          "Internationale organisaties (VN, WHO, EU)",
          "Hollywood-films",
          "iPhone-productie keten",
          "Internet"
        ],
        answer: 0,
        wrongHints: [null, "Cultureel.", "Economisch.", "Technologisch."],
        uitlegPad: {
          stappen: [{ titel: "Bestuur op wereldschaal", tekst: "VN (193 landen) lost conflicten op. WHO coördineert gezondheid. EU = supranationaal bestuur. Spanning: nationale soevereiniteit vs wereldwijde aanpak (klimaat vereist samenwerking, maar landen kiezen vaak eigen belang)." }],
          niveaus: { basis: "Politiek = organisaties. A.", simpeler: "VN, EU, NAVO. A.", nogSimpeler: "VN = A." },
        },
      },
      {
        q: "**Brexit** (2016) past bij welke trend?",
        options: [
          "De-globalisering / anti-globalisering",
          "Hyperglobalisering",
          "Politieke integratie",
          "Vrije handel"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Terug naar nationaal", tekst: "VK verliet EU → terug naar zelfstandige handel/regels. Symbolisch voor wereldwijde anti-globalisering-beweging: Trump (VS), Brexit (UK), Le Pen (FR), Modi-protectionisme (India). Reactie op verliezers van globalisering + verlies nationale identiteit." },
          ],
          niveaus: { basis: "De-globalisering. A.", simpeler: "Terug naar nationaal. A.", nogSimpeler: "Anti-glob = A." },
        },
      },
    ],
  },

  // ─── B. Wereldhandel + MNCs ───────────────────────────────
  {
    title: "Wereldhandel + Multinationale Ondernemingen",
    explanation:
      "**Wereldhandel** = goederen + diensten tussen landen.\n\n**WTO** (World Trade Organization, 1995):\n• 164 leden (~98% wereldhandel).\n• Doel: vrije handel, regels-gebaseerde aanpak.\n• Beslecht handelsgeschillen.\n• Opvolger van GATT (1947).\n\n**Vrijhandel-akkoorden**:\n• **EU**: 27 lidstaten, één markt + munt (eurozone).\n• **NAFTA** (1994) → USMCA (2020): VS-Canada-Mexico.\n• **ASEAN**: 10 Zuidoost-Aziatische landen.\n• **Mercosur**: Zuid-Amerika.\n• **CPTPP**: 11 Pacifische landen.\n\n**Comparatief voordeel** (Ricardo, 1817):\n• Elk land specialiseert in wat het RELATIEF efficiënter produceert.\n• Voorbeeld: NL = tulpen + tech, China = elektronica, Saudi-Arabië = olie.\n• Iedereen wint (theoretisch).\n\n**Multinationale Onderneming (MNC)**:\n• Bedrijf met activiteiten in meerdere landen.\n• Top-MNCs naar omzet: Walmart, Amazon, Apple, Shell, Saudi Aramco, Sinopec.\n• MNC's vaak groter dan landen-economieën (Apple omzet > BBP Portugal).\n\n**Strategieën**:\n• **Off-shoring**: productie naar lage-loon-land (NL fabriek → China).\n• **Near-shoring**: dichterbij vestigen (NL → Polen ipv China).\n• **Re-shoring**: terug naar thuisland (COVID+geopolitiek-trend).\n• **Outsourcing**: dienst uitbesteden aan ander bedrijf.\n\n**Toeleveringsketens (supply chains)**:\n• Voorbeeld iPhone: ontwerp Cupertino → metaal Australië/Congo → chip TSMC Taiwan → assemblage Foxconn China → verkoop wereldwijd.\n• 'Just-in-time': geen voorraad, lever-op-aanvraag → efficiënt MAAR kwetsbaar.\n• COVID-disruptie 2020+: tekorten chips, semiconductor-oorlog.\n\n**BTW = TVA = VAT**:\n• Indirecte belasting op consumptie, niet productie.\n• In EU 15-27% (NL: 9% basis, 21% luxe).\n• Verschilt per land → reden waarom auto's in Duitsland goedkoper kunnen zijn dan NL.\n\n**Handelsbalans**:\n• Export > import → handelsoverschot (Duitsland, China).\n• Import > export → handelstekort (VS, UK).\n• Tekort niet altijd slecht (kan investeringen aantrekken).\n\n**Belastingontwijking door MNCs**:\n• Winst verschuiven naar lage-belasting-landen (Ierland 12,5%, Luxemburg, Bermuda).\n• 'Sandwich-structuren', 'tax havens'.\n• G20-akkoord 2021: globale minimum-belasting 15% → tegen 2024-2025 invoeren.",
    checks: [
      {
        q: "Wat is **comparatief voordeel** (Ricardo)?",
        options: [
          "Elk land specialiseert in wat het relatief efficiënter produceert",
          "Sterkste land wint altijd",
          "Geen handel nodig",
          "Alles produceren"
        ],
        answer: 0,
        wrongHints: [null, "Niet — beide kunnen winnen.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Iedereen wint door specialisatie", tekst: "Ricardo's inzicht (1817): zelfs als één land in ALLES beter is, is het toch winstgevend voor beide om te specialiseren in waar comparatief voordeel groter is + te ruilen. Klassiek voorbeeld: wijn (Portugal) + textiel (Engeland)." },
          ],
          niveaus: { basis: "Specialisatie. A.", simpeler: "Maak waar je goed in bent + ruil. A.", nogSimpeler: "Specialiseren = A." },
        },
      },
      {
        q: "**WTO** = World Trade Organization. Doel?",
        options: [
          "Vrije handel + handelsgeschillen beslechten",
          "Klimaat regelen",
          "Mensenrechten beschermen",
          "Militair samenwerken"
        ],
        answer: 0,
        wrongHints: [null, "Niet — VN-Klimaat.", "Niet — Mensenrechten-Raad.", "Niet — NAVO."],
        uitlegPad: {
          stappen: [{ titel: "Sinds 1995", tekst: "WTO is supranationaal handelsforum. 164 leden onderhandelen tariefverlagingen + lossen geschillen op via rechtbank-systeem. Voorbeeld: Boeing vs Airbus dispute over subsidies (jarenlange WTO-zaak)." }],
          niveaus: { basis: "Handel + geschillen. A.", simpeler: "Vrije handel regelen. A.", nogSimpeler: "WTO = handel. A." },
        },
      },
      {
        q: "**Off-shoring** is:",
        options: [
          "Productie verplaatsen naar lage-loon-land",
          "Productie terughalen",
          "Naar zee-platform",
          "Belastingontwijking"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is re-shoring.", "Onzin.", "Niet — verwant maar anders."],
        uitlegPad: {
          stappen: [
            { titel: "Naar elders verhuizen", tekst: "Veel westerse bedrijven verplaatsten productie naar China/Vietnam/Bangladesh in jaren 1990-2010 voor lagere lonen. Resultaat: industriële banen-verlies in westen, opkomst Aziatische economieën. Recent: re-shoring trend door geopolitieke risico's." },
          ],
          niveaus: { basis: "Naar laag-loon land. A.", simpeler: "Productie verhuizen. A.", nogSimpeler: "Off-shore = A." },
        },
      },
      {
        q: "**G20-akkoord 2021** introduceerde:",
        options: [
          "Globale minimum-vennootschapsbelasting 15%",
          "Klimaatakkoord",
          "Migratiequota",
          "Handelsverbod China"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Parijs 2015.", "Niet — geen wereldwijd verdrag.", "Niet — bilaterale tarieven."],
        uitlegPad: {
          stappen: [
            { titel: "Eind 'race to the bottom'", tekst: "Voor 2021 verschoven MNCs winst naar belasting-paradijzen (Ierland 12,5%, Bermuda 0%). G20: 'minimum 15% wereldwijd → geen ontwijking-voordeel'. Implementatie 2024-2026 wereldwijd. Apple, Google, etc. raken voordeel kwijt." },
          ],
          niveaus: { basis: "15% minimum. A.", simpeler: "Belasting-minimum globaal. A.", nogSimpeler: "15% = A." },
        },
      },
      {
        q: "Een **iPhone** wordt gemaakt via:",
        options: [
          "Wereldwijde toeleveringsketen (chip Taiwan, assemblage China, ontwerp VS, mineralen Afrika)",
          "Alles in VS",
          "Alles in China",
          "Alleen Europa"
        ],
        answer: 0,
        wrongHints: [null, "Niet correct.", "Niet — multi-land.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "200+ leveranciers wereldwijd", tekst: "Apple ontwerp in Cupertino. TSMC (Taiwan) maakt A-chip. Foxconn (China) assembleert. Schermen Samsung (Zuid-Korea). Camera Sony (Japan). Mineralen: cobalt (Congo), lithium (Chili). Verkoop wereldwijd. Voorbeeld van extreme globalisering." },
          ],
          niveaus: { basis: "Wereldketen. A.", simpeler: "Veel landen samen. A.", nogSimpeler: "Globaal = A." },
        },
      },
    ],
  },

  // ─── C. Ongelijkheid Noord-Zuid ───────────────────────────
  {
    title: "Noord-Zuid kloof + ontwikkelingslanden",
    explanation:
      "**Indeling wereldlanden** (Wereldbank op basis BBP/capita):\n• **Hoge inkomen** ($13 845+): Noord-Amerika, West-Europa, Japan, Australië, Zuid-Korea, Saudi-Arabië.\n• **Boven-midden** ($4466-$13 845): China, Brazilië, Rusland, Mexico, Turkije.\n• **Onder-midden** ($1136-$4466): India, Indonesië, Egypte, Nigeria, Vietnam.\n• **Laag** (<$1136): Burundi, Centraal-Afrikaanse Rep., Somalië, Zuid-Soedan.\n\n**'Globale Noorden'** = rijke landen (deels figuurlijk, niet alleen geografisch). **'Globale Zuiden'** = ontwikkelingslanden.\n\n**MOL** (Minst Ontwikkelde Landen, VN-categorie):\n• 46 landen, 1 mld mensen.\n• Vooral Afrika ten zuiden van Sahara.\n• Toegang tot specifieke ontwikkelingshulp + handelvoorkeur.\n\n**Indicatoren**:\n• **BBP per capita** (PPP): geeft koopkracht aan. NL ~$60k, India ~$8k, Burundi ~$800.\n• **HDI** (Human Development Index): combineert BBP + onderwijs + levensduur. Noorwegen 0,96, Niger 0,40.\n• **Gini-coëfficient**: ongelijkheid binnen land.\n• **Levensverwachting**: Japan 84 j, Sierra Leone 55 j.\n• **Onderwijs-jaren**: rijk land ~12, arm land ~5.\n\n**Theorieën over ontwikkeling**:\n\n**1. Modernisatie-theorie** (Rostow 1960):\n• Alle landen doorlopen 5 fasen: tradities → 'take-off' → industriële → consumptie.\n• Optimistisch: arm land kan rijk worden via WTO-handel + technologie.\n• Bekritiseerd: simplificeert + negeert kolonisatie-erfenis.\n\n**2. Afhankelijkheidstheorie** (Frank, Wallerstein):\n• Arme landen zijn 'afhankelijk' van rijke door koloniale + neo-koloniale relaties.\n• Wereldsysteem: kern (rijk) — semi-perifirie — periferie (arm).\n• Rijke landen voorkomen actief dat armere zich ontwikkelen.\n\n**3. Institutionele theorie** (Acemoglu + Robinson, 'Why Nations Fail'):\n• Verschil zit in instituties (inclusief vs extractief).\n• Inclusief: democratie, eigendomsrechten, vrije pers → groei.\n• Extractief: dictatuur, kleine elite, corruptie → stagnatie.\n• Noord vs Zuid Korea: zelfde volk, totaal andere instituties → enorme welvaartskloof.\n\n**Oorzaken onderontwikkeling**:\n• Kolonisatie-erfenis (kunstmatige grenzen, exploitatie).\n• Resource curse (rijk aan grondstoffen → corruptie, conflict — Nigeria-olie, Congo-mineralen).\n• Klimaat: tropisch = meer ziektes, slechtere oogsten.\n• Conflict: oorlog vernietigt economie + onderwijs.\n• Slechte instituties.\n\n**Ontwikkelingshulp**:\n• OECD-leden: ~0,3-0,7% van BBP officieel ontwikkelingshulp (ODA).\n• NL: ~0,5% van BBP = ~€5 mld.\n• Effectiviteit-debat: directe hulp vs handel vs onderwijs.\n• **Microfinanciering** (Yunus, Bangladesh, Nobel 2006): kleine leningen aan armen → ondernemerschap.\n\n**Succesverhalen**:\n• **Zuid-Korea**: 1960 net zo arm als Ghana. Vandaag: top-15 economie. Via onderwijs + industrialisatie.\n• **China**: 1980 BBP/capita $200. 2024: $13 000+. 800 mln uit armoede getrokken.\n• **Vietnam, Bangladesh, Rwanda**: snel-stijgers.\n\n**Falen-cases**:\n• Venezuela: oil-rijkdom verkwist door corruptie + slecht beleid.\n• Zimbabwe: hyperinflatie + landonteigening.\n• Argentinië: rijk in 1900, daalt continu.",
    checks: [
      {
        q: "Wat is **HDI**?",
        options: [
          "Human Development Index — BBP + onderwijs + levensduur gecombineerd",
          "Alleen BBP",
          "Aantal soldaten",
          "Olie-productie"
        ],
        answer: 0,
        wrongHints: [null, "Onvolledig.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Breder dan economie", tekst: "Ontwikkeld door VN (UNDP) als kritiek op 'BBP alleen'. Combineert BBP/capita + onderwijs-jaren + levensverwachting. Schaal 0-1. Noorwegen, Zwitserland top (~0,96). Niger laag (~0,40). Geeft completer beeld van welzijn." },
          ],
          niveaus: { basis: "BBP+onderwijs+leven. A.", simpeler: "Drie indicatoren samen. A.", nogSimpeler: "HDI = A." },
        },
      },
      {
        q: "**Resource curse** = ?",
        options: [
          "Landen met veel grondstoffen ontwikkelen vaak slecht (corruptie, conflict)",
          "Geen grondstoffen = arm",
          "Grondstoffen brengen welvaart",
          "Geen verband"
        ],
        answer: 0,
        wrongHints: [null, "Niet altijd waar.", "Vaak tegenovergesteld.", "Wel verband."],
        uitlegPad: {
          stappen: [
            { titel: "Vloek van overvloed", tekst: "Paradox: olie/diamanten/cobalt-rijke landen vaak armer dan grondstofschamele. Reden: corruptie (elite steelt opbrengsten), conflict (rebellengroepen vechten om mijnen), verwaarlozing onderwijs/industrie, valuta-overwaardering. Voorbeelden: Nigeria-olie, Congo-cobalt, Sierra Leone-diamanten." },
          ],
          theorie: "Uitzonderingen: Noorwegen (olie) goed beheerd via staatsfonds. Botswana (diamanten) democratisch en stabiel.",
          niveaus: { basis: "Grondstoffen → vaak slecht. A.", simpeler: "Rijk aan iets = ramp soms. A.", nogSimpeler: "Vloek = A." },
        },
      },
      {
        q: "**Zuid-Korea** is sinds 1960 economisch:",
        options: [
          "Van arm-land tot top-15 economie wereldwijd",
          "Gelijk gebleven",
          "Achteruitgegaan",
          "Altijd rijk geweest"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Onjuist — was arm."],
        uitlegPad: {
          stappen: [
            { titel: "Miracle on the Han River", tekst: "1960: BBP/capita zelfde als Ghana, Nigeria. Strategie: investeren in onderwijs, export-gerichte industrialisatie (eerst textiel, dan staal, scheepsbouw, auto's, elektronica, semiconductoren). Vandaag: Samsung, LG, Hyundai = wereld-spelers. Top-12 economie. Klassiek 'ontwikkelings-mirakel'." },
          ],
          niveaus: { basis: "Van arm tot top. A.", simpeler: "Heel snel ontwikkeld. A.", nogSimpeler: "Stijger = A." },
        },
      },
      {
        q: "**Microfinanciering** (Yunus, Nobel 2006):",
        options: [
          "Kleine leningen aan armen om eigen bedrijf te starten",
          "Internationale bankenfusies",
          "Belastingen verlagen",
          "Hulp-pakketten"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Niet specifiek.", "Niet directe hulp."],
        uitlegPad: {
          stappen: [
            { titel: "Grameen Bank in Bangladesh", tekst: "Yunus ontdekte: armen kunnen geen bankleningen krijgen (geen onderpand). Microfinanciering: $50-500 leningen, vooral aan vrouwen, voor naaimachine/koe/winkel. Terugbetalings-tarief 95%+ (onderling-druk werkt). Verdiend Yunus Nobelvredesprijs 2006. Wereldwijd nu uitgerold." },
          ],
          niveaus: { basis: "Kleine leningen armen. A.", simpeler: "Mini-leningen voor ondernemerschap. A.", nogSimpeler: "Micro = A." },
        },
      },
      {
        q: "**Volgens institutionele theorie** (Acemoglu) ligt verschil rijk/arm in:",
        options: [
          "Soort instituties (inclusief vs extractief)",
          "Klimaat alleen",
          "Cultuur alleen",
          "Toeval"
        ],
        answer: 0,
        wrongHints: [null, "Speelt rol maar niet hoofdfactor.", "Idem.", "Niet — patronen aanwezig."],
        uitlegPad: {
          stappen: [
            { titel: "'Why Nations Fail' 2012", tekst: "Bewijs: Noord vs Zuid Korea (zelfde mens, ander instituut → enorme welvaartskloof). Inclusieve instituties (democratie, eigendomsrecht, vrije markt, gelijke kansen) → innovatie + groei. Extractieve (elite steelt, geen rechten) → stagnatie." },
          ],
          niveaus: { basis: "Instituties. A.", simpeler: "Goede regels = groei. A.", nogSimpeler: "Insts = A." },
        },
      },
    ],
  },

  // ─── D. Migratie + remittances ────────────────────────────
  {
    title: "Migratie + Remittances",
    explanation:
      "**Migratie** = mensen verhuizen tussen landen.\n\n**Types**:\n• **Economische migrant**: betere job zoeken.\n• **Vluchteling** (UNHCR): oorlog/vervolging, beschermd onder Vluchtelingenverdrag 1951.\n• **Asielzoeker**: aanvraag-procedure voor vluchteling-status.\n• **Statushouder**: erkend vluchteling met verblijfsvergunning.\n• **Klimaat-migrant**: door droogte, overstroming, zeespiegelstijging.\n\n**Wereldwijde cijfers** (UN 2024):\n• ~281 mln internationale migranten (~3,6% wereldbevolking).\n• ~117 mln gedwongen verplaatst (vluchtelingen + intern).\n• Oekraïne 2022+: 8+ mln vluchtelingen → grootste Europese crisis sinds WO2.\n• Syrië, Afghanistan, Venezuela, Zuid-Soedan grootste herkomstlanden.\n\n**Push-factoren** (waarom vertrekken):\n• Armoede + werkloosheid.\n• Oorlog + vervolging.\n• Natuurrampen + klimaat.\n• Politieke onderdrukking.\n\n**Pull-factoren** (waarom naar daar):\n• Beter werk + lonen.\n• Familie al daar.\n• Veiligheid + rechten.\n• Onderwijs + zorg.\n\n**Migratie-corridors**:\n• Mexico → VS.\n• Afrika → Europa (via Middellandse Zee).\n• Syrië → Turkije + Europa.\n• Filipijnen → Saudi-Arabië + Hong Kong (huishoudwerk).\n• Bangladesh + India → Golfstaten (bouw).\n\n**Remittances** (geld dat migranten naar familie thuis sturen):\n• Wereldwijd ~$650 mld/jaar (2023).\n• Top-ontvangers: India ($125 mld), Mexico ($63 mld), China ($50 mld), Filipijnen ($40 mld).\n• Voor sommige landen >20% BBP (Tonga, Kirgizië, Tadzjikistan, Haïti).\n• Vaak GROTER dan officiële ontwikkelingshulp + buitenlandse investering.\n• Direct effect armoedebestrijding: gaat naar families.\n\n**Brain drain vs brain gain**:\n• **Drain**: ontwikkeld land trekt hoog-opgeleiden weg (doctoren, ingenieurs) → herkomstland verliest.\n• **Gain**: thuisland profiteert van remittances + return-migranten met nieuwe kennis.\n• Netto-effect debattabel; verschilt per geval.\n\n**Migratie + Europa**:\n• EU-vrij verkeer binnen Schengen-zone.\n• Externe migratie complex: Dublin-verdrag (asielaanvraag in eerste EU-land), 'turkse deal' 2016.\n• Politiek explosief onderwerp.\n\n**Migratie-balans NL**:\n• Sinds 1960s netto-immigratie (eerst gastarbeiders Turkije/Marokko, dan EU-werkers, vluchtelingen).\n• 2024: ~17,9 mln inwoners, ~25% migratie-achtergrond (1e/2e generatie).\n\n**Demografische uitdagingen**:\n• Rijke landen verouderen (Duitsland, Japan, Italië).\n• Arme landen jong en groeien (Nigeria 2050: ~400 mln inwoners → 3e land wereld).\n• Migratie deels antwoord op westerse arbeidstekort.",
    checks: [
      {
        q: "**Remittances** zijn:",
        options: [
          "Geld dat migranten naar familie thuis sturen",
          "Belasting op migranten",
          "Reiskosten",
          "Visa-kosten"
        ],
        answer: 0,
        wrongHints: [null, "Niet — andere kant op.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Belangrijk voor herkomstland", tekst: "Migrant in rijk land verdient + stuurt deel naar familie in arm land. Wereldwijd ~$650 mld/jaar — meer dan alle ontwikkelingshulp samen. Voor Tonga, Tadzjikistan = >20% BBP. Direct effect armoedebestrijding." },
          ],
          niveaus: { basis: "Geld naar huis. A.", simpeler: "Migrant stuurt geld familie. A.", nogSimpeler: "Remit = A." },
        },
      },
      {
        q: "Een **vluchteling** verschilt van **economische migrant** door:",
        options: [
          "Vlucht voor oorlog/vervolging (beschermd door Vluchtelingenverdrag 1951)",
          "Komt uit Afrika",
          "Heeft geen geld",
          "Geen verschil"
        ],
        answer: 0,
        wrongHints: [null, "Geografisch onafhankelijk.", "Beide kunnen rijk/arm zijn.", "Wel verschil — juridisch."],
        uitlegPad: {
          stappen: [
            { titel: "Juridische bescherming", tekst: "Vluchteling = gedwongen vertrek door gevaar (oorlog, politieke vervolging, etnische zuivering). UN-Conventie 1951: landen mogen vluchtelingen NIET terugsturen naar gevaar (non-refoulement). Asiel-procedure bepaalt status. Economische migrant = vrijwillige keuze beter leven." },
          ],
          niveaus: { basis: "Vlucht gedwongen. A.", simpeler: "Vluchteling = gevaar. A.", nogSimpeler: "Gevaar = A." },
        },
      },
      {
        q: "**Brain drain** is:",
        options: [
          "Verlies van hoog-opgeleiden uit herkomstland naar rijk land",
          "Hersenoperatie",
          "Computer-uitval",
          "Geheugenverlies"
        ],
        answer: 0,
        wrongHints: [null, "Niet medisch.", "Niet tech.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Talent-emigratie", tekst: "Klassiek voorbeeld: Filipijnse verpleegkundigen + dokters trekken naar VS/UK voor 5× zo hoog salaris → Filipijnen verliest gezondheidszorg-personeel. India: software-ingenieurs naar Silicon Valley. Tegenwicht: remittances + soms terugkeer met expertise (return-migrants)." },
          ],
          niveaus: { basis: "Hoog-opgeleiden weg. A.", simpeler: "Slimme mensen vertrekken. A.", nogSimpeler: "Brain drain = A." },
        },
      },
      {
        q: "Belangrijkste **Europese migratie-crisis sinds WO2** in 2022:",
        options: ["Oekraïners vluchtend voor Russische invasie (8+ mln)", "Syriërs", "Afghanen", "Verkeersongelukken"],
        answer: 0,
        wrongHints: [null, "Niet 2022-piek.", "Niet 2022.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Massa-vlucht binnen weken", tekst: "Russische invasie 24 feb 2022 → in 6 weken 5 mln Oekraïners weg (vooral vrouwen + kinderen). Polen alleen 3 mln. EU activeerde Temporary Protection Directive → directe rechten zonder asiel-procedure. NL ~100k. Cijfer 8+ mln blijft uit huis (intern + extern verplaatst)." },
          ],
          niveaus: { basis: "Oekraïne. A.", simpeler: "Oekraïens vluchtelingen. A.", nogSimpeler: "Oekr = A." },
        },
      },
      {
        q: "**Push-factor** voor migratie is bv:",
        options: [
          "Oorlog of armoede in herkomstland",
          "Goed werk in doelland",
          "Familie in doelland",
          "Veiligheid in doelland"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is pull.", "Idem.", "Idem."],
        uitlegPad: {
          stappen: [{ titel: "Push = wegduwen", tekst: "Push = redenen om TE VERTREKKEN uit herkomstland (oorlog, armoede, vervolging, klimaat). Pull = redenen NAAR doelland te komen (werk, veiligheid, familie). Migratie wordt vaak gedreven door combinatie." }],
          niveaus: { basis: "Push = wegduwen. A.", simpeler: "Push = nadeel thuis. A.", nogSimpeler: "Push = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — SDG's + toekomst van globalisering",
    explanation:
      "**Sustainable Development Goals (SDGs)**:\n• 17 doelen vastgesteld door VN-lidstaten 2015.\n• Te bereiken **2030**.\n• Vervangen oudere Millennium Development Goals.\n\n**De 17 SDGs (kort)**:\n1. Geen armoede.\n2. Geen honger.\n3. Goede gezondheid.\n4. Kwaliteits-onderwijs.\n5. Genderqaliteit.\n6. Schoon water + sanitair.\n7. Schone betaalbare energie.\n8. Eerlijk werk + economische groei.\n9. Industrie + innovatie + infrastructuur.\n10. Ongelijkheid verminderen.\n11. Duurzame steden + gemeenschappen.\n12. Verantwoorde consumptie + productie.\n13. Klimaatactie.\n14. Leven onder water.\n15. Leven op land.\n16. Vrede + justitie + sterke instituties.\n17. Partnerschap voor de doelen.\n\n**Voortgang 2024**:\n• Slechts ~15% van SDGs op koers.\n• COVID + Oekraïne-oorlog + voedselcrisis vertraagden.\n• Klimaat-SDG (#13) sterk achter — emissies stijgen nog.\n• Genderqaliteit (#5) langzaam vooruit.\n• Onderwijs (#4) wel verbetering wereldwijd.\n\n**Drie scenario's voor toekomst globalisering**:\n\n**1. Hyper-globalisering blijft**:\n• Internet + technologie verder integratie.\n• Klimaat-actie + pandemie-vereisten wereldwijde samenwerking.\n• Lage handelstarieven herstellen.\n\n**2. Geleidelijke de-globalisering**:\n• Re-shoring + near-shoring versterkt.\n• Bedrijven kiezen weer voor leveringszekerheid > absolute kost.\n• Regionalisatie: Europa, NAFTA, ASEAN sterken.\n\n**3. Geopolitieke breuk** (Cold War 2.0):\n• VS-China-decoupling versnelt.\n• Chip-oorlog (semiconductor sanctions).\n• Twee parallelle technologie-blokken.\n• Trade-routes hertekenen (Belt + Road China, IPEF VS).\n\n**Klimaat als integratie-factor**:\n• Niemand lost klimaat alleen op → vereist samenwerking.\n• COP-conferenties (jaarlijks), maar resultaten gemengd.\n• Carbon Border Adjustment (EU 2026+): import-belasting op CO₂-intensieve goederen → druk op niet-klimaat-actieve landen.\n\n**AI + automatisering**:\n• Volgende globaliseringgolf: digitale diensten.\n• Bv. callcenters India → AI-chatbots wereldwijd.\n• Risico: ontwikkelde markten verliezen routine-banen, ontwikkelingslanden verliezen instap-banen.\n\n**Nederland's positie**:\n• Klein open economie, sterk afhankelijk van handel.\n• Rotterdam grootste Europese haven.\n• Schiphol Europese hub.\n• Multinationals: Shell, Unilever, Philips, ASML.\n• Per saldo voordeel van globalisering, kwetsbaar bij de-globalisering.\n\n**Persoonlijk perspectief**:\n• Als consument: kies bewust (eerlijke handel, lokaal, fair fashion).\n• Als kiezer: stem op partijen met klimaat + internationale samenwerking.\n• Als wereldburger: erken privilege + verantwoordelijkheid van rijke landen.",
    checks: [
      {
        q: "**SDG #13** is:",
        options: ["Klimaatactie", "Geen armoede", "Genderqaliteit", "Onderwijs"],
        answer: 0,
        wrongHints: [null, "Niet — #1.", "Niet — #5.", "Niet — #4."],
        uitlegPad: {
          stappen: [{ titel: "Klimaat-doel", tekst: "Klimaat onder 1,5°C, klimaat-resilient samenleving, klimaatfinanciering arm-land. Helaas sterkst achterstand → emissies stijgen nog. CO₂ atmosfeer 420 ppm (vs doel onder 450). Beslissingen volgende 10 jaar cruciaal." }],
          niveaus: { basis: "#13 = klimaat. A.", simpeler: "Klimaatactie. A.", nogSimpeler: "Klimaat = A." },
        },
      },
      {
        q: "**SDGs** vervangen welke oudere doelen?",
        options: [
          "Millennium Development Goals (2000-2015)",
          "Olympische idealen",
          "EU-richtlijnen",
          "WO2-akkoorden"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "MDG → SDG", tekst: "MDGs (2000-2015): 8 doelen, vooral armoede + gezondheid in arme landen. Resultaten gemengd (sommige gehaald, andere niet). Vervangen 2015 door 17 SDGs: breder + voor ALLE landen (ook rijke moeten klimaat + ongelijkheid aanpakken)." },
          ],
          niveaus: { basis: "MDGs. A.", simpeler: "Millenium-doelen. A.", nogSimpeler: "MDG = A." },
        },
      },
      {
        q: "**Carbon Border Adjustment** (EU 2026):",
        options: [
          "Importbelasting op CO₂-intensieve goederen uit niet-klimaat-actieve landen",
          "Vrijhandelsakkoord",
          "Migratie-quota",
          "Internet-belasting"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — handelsbarrière.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Voorkomt 'carbon leakage'", tekst: "EU-bedrijven hebben CO₂-prijs (ETS). Buiten EU vaak niet → bedrijven verhuizen → CO₂-uitstoot verplaatst (leakage). CBAM: importbelasting gelijk aan EU-CO₂-prijs voor staal, cement, aluminium etc. Pressure op China/India om eigen klimaatbeleid → druk op globale klimaat-actie." },
          ],
          niveaus: { basis: "CO₂-importbelasting. A.", simpeler: "Vervuilende import betalt extra. A.", nogSimpeler: "CBAM = A." },
        },
      },
      {
        q: "**Voortgang SDGs** in 2024:",
        options: [
          "Slechts ~15% op koers — meeste achter",
          "Allemaal gehaald",
          "Niet gemeten",
          "Geen vertraging"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel gemeten (VN-rapport).", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Achterstand groot", tekst: "VN Sustainable Development Report 2024: minder dan 1/5 op koers voor 2030. COVID-pandemie + voedselcrisis + Oekraïne-oorlog + klimaatschade vertraagden. Vereist drastische versnelling laatste 6 jaar." },
          ],
          niveaus: { basis: "Veel achter. A.", simpeler: "Niet halen 2030. A.", nogSimpeler: "Achter = A." },
        },
      },
      {
        q: "**Re-shoring** is:",
        options: [
          "Productie terug naar thuisland (omgekeerd off-shoring)",
          "Klimaat-actie",
          "Migratie",
          "Off-shoring uitbreiden"
        ],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Strategie-omkering", tekst: "Na decennia productie naar China → COVID-disrupties + politiek risico (Taiwan, sancties) → bedrijven herzien. Voorbeelden: Apple plaatst deel productie naar India + Vietnam, autoindustrie meer in VS/Mexico. Trend versterkt sinds 2020." },
          ],
          niveaus: { basis: "Terug naar huis. A.", simpeler: "Productie terughalen. A.", nogSimpeler: "Re-shore = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const globaliseringHavoVwo = {
  id: "globalisering-havo-vwo",
  title: "Globalisering + Wereldongelijkheid (HAVO/VWO Aardrijkskunde)",
  emoji: "🌐",
  level: "havo-vwo-4-5",
  subject: "aardrijkskunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Aardrijkskunde — Globalisering + Ontwikkeling (CSE-onderwerp)",
  prerequisites: [
    { id: "bevolking-migratie-aardrijkskunde", title: "Bevolking + Migratie", niveau: "vmbo-3" },
  ],
  intro:
    "Globalisering + Wereldongelijkheid voor HAVO/VWO eindexamen — 4 dimensies, WTO + MNCs, Noord-Zuid kloof, theorieën (modernisatie/afhankelijkheid/institutioneel), migratie + remittances, SDGs + toekomstscenario's. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "globalisering",
    "wereldhandel", "WTO",
    "EU", "NAFTA", "ASEAN", "Mercosur",
    "vrijhandel",
    "comparatief voordeel", "Ricardo",
    "MNC", "multinational",
    "off-shoring", "re-shoring", "near-shoring",
    "outsourcing",
    "toeleveringsketen", "supply chain",
    "containerisatie",
    "handelsbalans",
    "belastingontwijking", "tax haven",
    "G20", "globale belasting",
    "Noord-Zuid", "ontwikkelingsland",
    "BBP per capita", "PPP",
    "HDI", "Human Development Index",
    "MOL", "minst ontwikkeld",
    "modernisatie", "Rostow",
    "afhankelijkheidstheorie", "Frank", "Wallerstein",
    "wereldsysteem",
    "Acemoglu", "Why Nations Fail",
    "instituties", "inclusief vs extractief",
    "resource curse",
    "ontwikkelingshulp", "ODA",
    "microfinanciering", "Yunus", "Grameen",
    "Zuid-Korea",
    "China", "India",
    "migratie", "vluchteling", "asielzoeker",
    "push pull",
    "remittances",
    "brain drain", "brain gain",
    "Oekraïne 2022",
    "Vluchtelingenverdrag 1951",
    "SDG", "Sustainable Development Goals",
    "Parijs-akkoord",
    "Carbon Border Adjustment", "CBAM",
    "de-globalisering",
    "AI automatisering",
  ],
  chapters,
  steps,
};

export default globaliseringHavoVwo;
