// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2023 tijdvak 2
// 2026-05-10: vijfde pilot — 7 vragen geverifieerd tegen origineel.
// Bron: examenblad.nl, examen 0233 GT 2023-2.

const chapters = [
  { letter: "A", title: "Gemeente & belasting", emoji: "🏛️", from: 0, to: 2 },
  { letter: "B", title: "Inflatie & koopkracht", emoji: "📊", from: 3, to: 4 },
  { letter: "C", title: "Internationale handel & valuta", emoji: "🌍", from: 5, to: 6 },
];

const steps = [
  // V12
  {
    title: "Vraag 12 — gemeentelijke inkomstenbron",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 12. Doorklik voor de Pincode-uitleg in **De overheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "De OZB is een belangrijke inkomstenbron van een gemeente. Welke inkomstenbron heeft een gemeente nog meer?",
        options: [
          "afvalstoffenheffing",
          "belasting toegevoegde waarde (btw)",
          "loonheffing",
          "vennootschapsbelasting",
        ],
        answer: 0,
        wrongHints: [
          null,
          "BTW is een Rijksbelasting, gaat naar de Belastingdienst.",
          "Loonheffing is voor de Rijksoverheid (loon-IB + premies).",
          "VPB is voor BV's, gaat naar het Rijk.",
        ],
        explanation: "De afvalstoffenheffing wordt door de gemeente geheven om de kosten van vuilnisophalen + verwerking te dekken. Andere gemeentebelastingen zijn OZB (onroerendezaakbelasting), hondenbelasting en toeristenbelasting. BTW, loonheffing en VPB zijn Rijksbelastingen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 12",
        leerpadLink: { id: "pincode-overheid", title: "De overheid" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'afvalstoffenheffing', 'OZB', 'BTW', 'loonheffing', 'VPB' — anders kun je de opties niet plaatsen" },
          { id: "pincode-belasting", title: "Belasting", niveau: "vmbo-3", why: "weten dat er verschillende soorten belastingen zijn (directe vs indirecte, gemeente vs Rijk)" },
          { id: "pincode-overheid", title: "Taken van de overheid", niveau: "vmbo-3", why: "Rijk/provincie/gemeente — welke laag heft welke belasting — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Welke 3 overheidslagen heffen belasting?", tekst: "Rijk (= heel NL), provincie en gemeente. Elke laag heeft eigen belastingen." },
            { titel: "Welke belastingen zijn voor de GEMEENTE?", tekst: "OZB (huiseigenaren), afvalstoffenheffing, hondenbelasting, toeristenbelasting, parkeergeld." },
            { titel: "Welke zijn voor het RIJK?", tekst: "BTW, loonheffing, inkomstenbelasting, vennootschapsbelasting (VPB), accijns." },
            { titel: "Loop de 4 opties langs", tekst: "Afvalstoffenheffing = gemeente ✓. BTW, loonheffing, VPB = Rijk ✗." },
          ],
          woorden: [
            { woord: "OZB", uitleg: "Onroerendezaakbelasting — gemeentebelasting die huiseigenaren betalen, gebaseerd op WOZ-waarde." },
            { woord: "afvalstoffenheffing", uitleg: "Gemeentebelasting voor ophalen + verwerken van vuilnis." },
            { woord: "BTW", uitleg: "Belasting toegevoegde waarde — Rijksbelasting op aankopen (21% standaard, 9% laag tarief)." },
            { woord: "VPB", uitleg: "Vennootschapsbelasting — Rijksbelasting op winst van BV's en NV's." },
            { woord: "loonheffing", uitleg: "Rijksbelasting die je werkgever inhoudt op je loon en doorbetaalt aan de Belastingdienst." },
          ],
          theorie: "**Welke overheidslaag krijgt welk geld?**\n\n• **Rijk** (Belastingdienst): BTW, loonheffing, IB, VPB, accijns, motorrijtuigenbelasting (deels)\n• **Provincie**: opcenten op motorrijtuigenbelasting, leges\n• **Gemeente**: OZB, afvalstoffenheffing, rioolheffing, hondenbelasting, toeristenbelasting, parkeergeld\n\nDe gemeente krijgt dus relatief weinig — meeste belastinggeld stroomt naar het Rijk en wordt later via het 'gemeentefonds' verdeeld over gemeenten.",
          voorbeelden: [
            { type: "gemeente", tekst: "Jij gooit een vuilniszak in de container → de gemeente betaalt de ophaler → die kosten betaalt jouw huishouden via afvalstoffenheffing op de gemeentelijke aanslag." },
            { type: "rijk", tekst: "Je koopt een nieuwe telefoon van €600 → daarvan is ~€104 BTW (21%) → gaat naar Rijk." },
          ],
          basiskennis: [
            { onderwerp: "Wat is een belasting?", uitleg: "Verplichte betaling aan de overheid waar je geen directe tegenprestatie voor krijgt — gebruikt voor algemene voorzieningen (wegen, onderwijs, defensie)." },
          ],
          niveaus: {
            basis: "Gemeentebelasting → afvalstoffenheffing. Antwoord A.",
            simpeler: "Wat doet je gemeente voor jou? Vuilnis ophalen. Wie betaalt dat? Jouw huishouden, via afvalstoffenheffing op de gemeentelijke aanslag. BTW, loonheffing en VPB gaan naar het Rijk (Belastingdienst), niet naar de gemeente.",
            nogSimpeler: "Vuilnis = gemeente = afvalstoffenheffing = A.",
          },
        },
      },
    ],
  },
  // V14
  {
    title: "Vraag 14 — WOZ-waarde in IB",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 14. Doorklik voor de Pincode-uitleg in **Belasting** (stap 'Inkomstenbelasting').",
    emoji: "🎓",
    checks: [
      {
        q: "Adriaan moet de WOZ-waarde ook invullen in de aangifte inkomstenbelasting. Waarvoor wordt de WOZ-waarde gebruikt bij de aangifte inkomstenbelasting?",
        options: [
          "om de hoogte van de aftrekposten te bepalen",
          "om de hoogte van de heffingskortingen te bepalen",
          "om de hypotheekrenteaftrek te bepalen",
          "om het eigenwoningforfait te bepalen",
        ],
        answer: 3,
        wrongHints: [
          "Aftrekposten zijn een ander onderdeel van IB-aangifte.",
          "Heffingskortingen zijn standaard, niet WOZ-afhankelijk.",
          "Hypotheekrenteaftrek = aftrekken van betaalde hypotheekrente, niet WOZ.",
          null,
        ],
        explanation: "Eigenaren van een huis betalen IB over een fictief 'eigenwoningforfait' — een percentage van de WOZ-waarde dat wordt opgeteld bij het inkomen. WOZ-waarde × ~0,35% (2024) = bedrag dat als inkomen geldt voor IB-berekening.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 14",
        leerpadLink: { id: "pincode-belasting", title: "Belasting" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'WOZ-waarde', 'eigenwoningforfait', 'hypotheekrenteaftrek', 'aftrekpost'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "vraag scant op kernwoord 'aangifte IB' — welk WOZ-onderdeel hoort daar wél bij" },
          { id: "pincode-belasting", title: "Belasting", niveau: "vmbo-3", why: "Box 1 inkomstenbelasting + eigen woning — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is WOZ-waarde?", tekst: "Geschatte waarde van je woning, vastgesteld door de gemeente. Wordt elk jaar opnieuw bepaald." },
            { titel: "Waarvoor gebruikt de gemeente de WOZ?", tekst: "Voor de OZB (gemeentebelasting voor huiseigenaren)." },
            { titel: "Waarvoor gebruikt de Belastingdienst (Rijk) de WOZ?", tekst: "Voor het 'eigenwoningforfait' — een fictief inkomen dat huiseigenaren bij hun belastbaar inkomen moeten optellen." },
            { titel: "Loop opties langs", tekst: "Aftrekposten: nee. Heffingskortingen: nee (vast bedrag). Hypotheekrenteaftrek: gaat over BETAALDE rente, niet WOZ. Eigenwoningforfait: ja → antwoord D." },
          ],
          woorden: [
            { woord: "WOZ-waarde", uitleg: "Waardering Onroerende Zaken — gemeentelijke schatting van de marktwaarde van je woning per 1 januari." },
            { woord: "eigenwoningforfait", uitleg: "Fictief inkomen dat huiseigenaren bij hun inkomen optellen voor de IB. Berekening: WOZ × ~0,35% (varieert per jaar)." },
            { woord: "hypotheekrenteaftrek", uitleg: "Betaalde rente op je hypotheek mag je AFTREKKEN van je inkomen → minder belasting betalen." },
            { woord: "aftrekpost", uitleg: "Bedrag dat je van je inkomen mag aftrekken (giften, hypotheekrente, ziektekosten boven drempel)." },
          ],
          theorie: "**Eigen huis in IB:**\n\n+ Eigenwoningforfait (= WOZ × ~0,35%) → BIJ inkomen\n− Hypotheekrente betaalde dat jaar → AF van inkomen\n= Netto-effect op je belastbaar inkomen\n\nOmdat het forfait klein is en de rente vaak groot, krijgen huiseigenaren met hypotheek vaak GELD TERUG van de Belastingdienst.",
          voorbeelden: [
            { type: "berekening", tekst: "Adriaan: WOZ €300.000 × 0,35% = €1.050 eigenwoningforfait. Betaalde €4.000 hypotheekrente. Netto: €1.050 − €4.000 = −€2.950 lager belastbaar inkomen." },
          ],
          basiskennis: [
            { onderwerp: "Inkomstenbelasting basics", uitleg: "Iedereen met inkomen betaalt IB. Hoe hoger je inkomen, hoe meer % belasting. Aftrekposten verlagen je belastbaar inkomen → minder belasting." },
          ],
          niveaus: {
            basis: "WOZ × percentage = eigenwoningforfait → bij inkomen → IB-berekening. Antwoord D.",
            simpeler: "Bezit je een huis? Dan rekent de Belastingdienst alsof je dat huis je 'inkomen' geeft (een fictief bedrag). Dat heet eigenwoningforfait — en wordt berekend met de WOZ-waarde. Dus de WOZ heeft de Belastingdienst nodig om dat bedrag te bepalen.",
            nogSimpeler: "WOZ → eigenwoningforfait → D.",
          },
        },
      },
    ],
  },
  // V36
  {
    title: "Vraag 36 — vermogensrendementsheffing",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 36. Doorklik voor de Pincode-uitleg in **Belasting** (stap 'Soorten belastingen').",
    emoji: "🎓",
    checks: [
      {
        q: "Spaargeld levert nauwelijks rente op. Tegelijkertijd moeten huishoudens met veel spaargeld belasting betalen over dit spaargeld. Hoe noemen we deze belasting?",
        options: [
          "belasting toegevoegde waarde",
          "loonheffing",
          "onroerendezaakbelasting",
          "vermogensrendementsheffing",
        ],
        answer: 3,
        wrongHints: [
          "BTW geldt voor aankopen, niet voor spaargeld.",
          "Loonheffing geldt voor inkomen uit arbeid.",
          "OZB geldt voor onroerend goed (huis), niet spaargeld.",
          null,
        ],
        explanation: "De vermogensrendementsheffing (Box 3 IB) heft belasting over je vermogen (spaargeld + beleggingen) boven de vrijstelling (~€57.000 in 2024). De Belastingdienst gaat uit van een fictief rendement, los van de werkelijke rente.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 36",
        leerpadLink: { id: "pincode-belasting", title: "Belasting" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'vermogen', 'rendement', 'vermogensrendementsheffing', 'fictief rendement'" },
          { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart", niveau: "vmbo-3", why: "verschil tussen INKOMEN (loon) en VERMOGEN (spaargeld+bezit) — sleutel om de juiste belasting te kiezen" },
          { id: "pincode-belasting", title: "Belasting", niveau: "vmbo-3", why: "soorten belastingen + Box 3 vermogen — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de situatie?", tekst: "Je hebt veel spaargeld op de bank. De rente is laag (bijna 0%) maar de overheid wil tóch belasting hebben." },
            { titel: "Op basis waarvan?", tekst: "Op basis van je VERMOGEN — dus hoeveel spaargeld + beleggingen je hebt. Niet op je inkomen of je huis." },
            { titel: "Hoe heet die belasting?", tekst: "Vermogensrendementsheffing (Box 3 in de IB). Heeft 'rendement' in de naam omdat de Belastingdienst doet alsof je rendement op je vermogen krijgt." },
          ],
          woorden: [
            { woord: "vermogen", uitleg: "Alles wat je BEZIT minus je schulden: spaargeld + beleggingen + waardevolle spullen − leningen." },
            { woord: "rendement", uitleg: "Wat je OPBRENGT met geld: rente op spaargeld, dividend op aandelen, koerswinst." },
            { woord: "vermogensrendementsheffing", uitleg: "Belasting op je vermogen (spaargeld + beleggingen) boven de vrijstelling (~€57.000 in 2024). Berekend op fictief rendement." },
            { woord: "fictief rendement", uitleg: "Een door de overheid AANGENOMEN opbrengst — los van wat je echt verdient. Soms hoger dan de echte rente." },
          ],
          theorie: "**Box 3 (vermogensrendementsheffing):**\n\n• Vrijstelling: ~€57.000 per persoon (2024). Daaronder = geen heffing.\n• Daarboven: Belastingdienst gaat uit van fictief rendement (bv. 6%) en heft daar 36% belasting over.\n• Echte rente doet er niet toe — ook bij 0% rente betaal je belasting alsof je 6% verdiende.\n\nDit was politiek omstreden — Hoge Raad heeft het in 2021 ook deels onterecht verklaard.",
          voorbeelden: [
            { type: "weinig spaargeld", tekst: "Spaargeld €30.000 → onder vrijstelling → 0 vermogensrendementsheffing." },
            { type: "veel spaargeld", tekst: "Spaargeld €157.000 → €100.000 boven vrijstelling → fictief rendement 6% × €100.000 = €6.000 → 36% belasting = €2.160." },
          ],
          basiskennis: [
            { onderwerp: "Box 1, 2, 3 in IB", uitleg: "Box 1 = inkomen uit arbeid + huis. Box 2 = aanmerkelijk belang in bedrijf. Box 3 = vermogen (spaargeld + beleggingen)." },
          ],
          niveaus: {
            basis: "Belasting over spaargeld = vermogensrendementsheffing. Antwoord D.",
            simpeler: "BTW = op aankopen. Loonheffing = op je loon. OZB = op je huis. Maar hier gaat het over je SPAARGELD = vermogen → vermogensrendementsheffing.",
            nogSimpeler: "Spaargeld = vermogen = D.",
          },
        },
      },
    ],
  },
  // V26
  {
    title: "Vraag 26 — koopkracht stijgt wanneer",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 26. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "Inflatie kan ook gevolgen hebben voor de koopkracht van de familie Sitalsing. In welke situatie zal de koopkracht van de familie Sitalsing stijgen ten opzichte van het vorige jaar?",
        options: [
          "als de nominale loondaling in procenten hoger is dan de inflatie",
          "als de nominale loonstijging in procenten hoger is dan de inflatie",
          "als de nominale loonstijging in procenten lager is dan de inflatie",
        ],
        answer: 1,
        wrongHints: [
          "Loon DAALT — dan kun je sowieso minder kopen, ook als inflatie meevalt.",
          null,
          "Stijging lager dan inflatie = koopkracht-VERLIES, niet winst.",
        ],
        explanation: "Koopkracht stijgt als je loon meer toeneemt dan de prijzen. Bv. loon +5%, inflatie +3% → reële koopkracht-toename van ~2%. Als loon stijgt maar minder dan inflatie, gaat je koopkracht juist achteruit.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 26",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'koopkracht', 'nominaal loon', 'inflatie' — anders blijven de antwoordopties wartaal" },
          { id: "procenten-po", title: "Procenten", niveau: "po-1F", why: "twee percentages (loonstijging vs inflatie) vergelijken — welke is groter" },
          { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart", niveau: "vmbo-3", why: "koopkracht-formule (reëel ≈ nominaal − inflatie) — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is koopkracht?", tekst: "Hoeveel je met je loon KAN KOPEN. Stijgt = je kunt meer kopen. Daalt = je kunt minder kopen." },
            { titel: "Wat zijn de 2 factoren?", tekst: "Je LOON (nominaal = euro's op je loonstrookje) én de PRIJZEN (inflatie). Beide veranderen elk jaar." },
            { titel: "Wanneer stijgt koopkracht?", tekst: "Als loon HARDER stijgt dan prijzen. Loon +5% en inflatie +3% → koopkracht ~+2%. Loon +2% en inflatie +5% → koopkracht ~−3%." },
          ],
          woorden: [
            { woord: "koopkracht", uitleg: "Hoeveel je met je geld kan kopen. = nominaal loon ÷ prijspeil." },
            { woord: "nominaal loon", uitleg: "Het euro-bedrag op je loonstrookje. Wat je echt aan geld krijgt." },
            { woord: "reëel loon", uitleg: "Wat je nominaal loon WAARD is in koopkracht (gecorrigeerd voor inflatie)." },
            { woord: "inflatie", uitleg: "De gemiddelde stijging van prijzen per jaar (gemeten via CPI = consumentenprijsindex)." },
          ],
          theorie: "**Vuistregel koopkracht:**\n\nReële verandering ≈ nominale loonverandering − inflatie\n\n• Loon +5%, inflatie +3% → koopkracht +2% ✓\n• Loon +2%, inflatie +5% → koopkracht −3% ✗\n• Loon +0%, inflatie +3% → koopkracht −3% ✗\n• Loon −2%, inflatie +1% → koopkracht −3% ✗ (sowieso minder, want loon daalt)\n\nKortom: koopkracht stijgt ALLEEN als loon meer stijgt dan inflatie.",
          voorbeelden: [
            { type: "winst", tekst: "Familie verdiende €40.000. Krijgt 6% loonsverhoging → €42.400. Inflatie was 2% → koopkracht stijgt ~4%." },
            { type: "verlies", tekst: "Familie verdiende €40.000. Krijgt 1% loonsverhoging → €40.400. Inflatie was 4% → koopkracht daalt ~3% — duurder leven, weinig extra." },
          ],
          basiskennis: [
            { onderwerp: "Verschil nominaal en reëel", uitleg: "Nominaal = in euro's. Reëel = in wat je ervan kan kopen. Bij inflatie verschillen die twee — reëel is lager dan nominaal." },
          ],
          niveaus: {
            basis: "Loon stijgt > inflatie → koopkracht stijgt. Antwoord B.",
            simpeler: "Stel: vorig jaar kocht je voor €100 boodschappen. Dit jaar zijn dezelfde boodschappen €105 (5% inflatie). Krijgt jouw loon ook +5%? Dan blijft koopkracht gelijk. Krijg je MEER (+7%)? Dan stijgt koopkracht. Minder of niks? Dan daalt koopkracht.",
            nogSimpeler: "Loonstijging > inflatie = koopkracht stijgt = B.",
          },
        },
      },
    ],
  },
  // V27
  {
    title: "Vraag 27 — koopkracht beschermen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 27. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'ECB en monetair beleid').",
    emoji: "🎓",
    checks: [
      {
        q: "De ECB is niet van plan om het rentebeleid aan te passen. Er zijn echter nog andere maatregelen om de koopkracht van burgers op peil te houden. Met welk van onderstaande maatregelen kan de koopkracht op peil gehouden worden?",
        options: [
          "vergroting van de winstmarges door bedrijven",
          "verhoging van de btw",
          "verlaging van de heffingskortingen",
          "volledige prijscompensatie in de lonen",
        ],
        answer: 3,
        wrongHints: [
          "Hogere winstmarges = hogere prijzen = koopkracht ZAKT.",
          "BTW omhoog = alle producten duurder = koopkracht ZAKT.",
          "Heffingskorting omlaag = meer belasting = koopkracht ZAKT.",
          null,
        ],
        explanation: "Volledige prijscompensatie betekent dat lonen automatisch meegroeien met de inflatie — koopkracht blijft daardoor op peil. Vakbonden onderhandelen hier vaak over in CAO's. De andere maatregelen verlagen koopkracht juist.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 27",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'prijscompensatie', 'heffingskorting', 'winstmarge', 'BTW'" },
          { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart", niveau: "vmbo-3", why: "koopkracht-basis: wat verlaagt koopkracht en wat houdt 'm op peil" },
          { id: "pincode-buitenland-eu", title: "Nederland en het buitenland", niveau: "vmbo-4", why: "ECB-rentebeleid + macro-instrumenten — context van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat moet er bewaard blijven?", tekst: "De KOOPKRACHT van burgers — dat ze niet minder kunnen kopen door inflatie." },
            { titel: "Hoe doe je dat?", tekst: "Loon meelaten stijgen met de prijzen. Dat heet PRIJSCOMPENSATIE in lonen." },
            { titel: "Loop opties langs", tekst: "Winstmarges groter = prijzen stijgen meer = koopkracht ZAKT ✗. BTW omhoog = alles duurder = ZAKT ✗. Heffingskorting omlaag = meer belasting = ZAKT ✗. Volledige prijscompensatie = lonen volgen inflatie = OP PEIL ✓." },
          ],
          woorden: [
            { woord: "prijscompensatie", uitleg: "Loonsverhoging die precies gelijk is aan de inflatie — koopkracht blijft op peil." },
            { woord: "heffingskorting", uitleg: "Vast bedrag dat van je belasting wordt afgetrokken — verlaagt te betalen IB. Verhoging = meer netto-inkomen." },
            { woord: "winstmarge", uitleg: "Wat een bedrijf per product overhoudt aan winst. Hogere marge = meestal hogere verkoopprijs." },
            { woord: "rentebeleid ECB", uitleg: "De Europese Centrale Bank kan rente verhogen om inflatie te remmen. In dit examen-jaar wilde de ECB dat NIET." },
          ],
          theorie: "**Hoe houd je koopkracht op peil bij inflatie?**\n\n• **Lonen omhoog** met inflatie (prijscompensatie) → meeste effect\n• Heffingskortingen verhogen → meer netto over\n• BTW verlagen → boodschappen goedkoper\n• Subsidies geven (energietoeslag) → kosten verlichten\n\n**NIET helpend:**\n• Winstmarges bedrijven groter → prijzen omhoog\n• BTW verhogen → alles duurder\n• Heffingskortingen verlagen → minder netto",
          voorbeelden: [
            { type: "CAO", tekst: "Vakbond eist 5% loonsverhoging want inflatie was 5% → volledige prijscompensatie → koopkracht blijft gelijk." },
            { type: "energietoeslag", tekst: "Overheid gaf in 2022 €1.300 energietoeslag aan minima om gestegen energiekosten te compenseren." },
          ],
          basiskennis: [
            { onderwerp: "Inflatie + koopkracht", uitleg: "Inflatie alleen zegt niets over hoe rijk/arm je bent — het gaat om VERSCHIL tussen prijsstijging en je inkomensstijging." },
          ],
          niveaus: {
            basis: "Lonen meelaten stijgen met inflatie = volledige prijscompensatie = D.",
            simpeler: "Als boodschappen 5% duurder worden, en jouw loon stijgt OOK 5%, dan koop je nog steeds dezelfde boodschappen. Dat is wat 'volledige prijscompensatie' doet — koopkracht blijft op peil. De andere 3 opties maken het juist duurder of geven je minder netto.",
            nogSimpeler: "Lonen mee met prijzen = D.",
          },
        },
      },
    ],
  },
  // V28
  {
    title: "Vraag 28 — invoerrechten op Chinees staal",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 28. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'Beschermingsmaatregelen').",
    emoji: "🎓",
    checks: [
      {
        q: "Wat is een gevolg voor bedrijven in de VS als er invoerrechten geheven worden op Chinees staal?",
        options: [
          "Bedrijven in de VS kopen meer staal uit eigen land, omdat de importprijzen van Chinees staal dalen.",
          "Bedrijven in de VS kopen meer staal uit eigen land, omdat de importprijzen van Chinees staal stijgen.",
          "Bedrijven in de VS kopen minder staal uit eigen land, omdat de importprijzen van Chinees staal dalen.",
          "Bedrijven in de VS kopen minder staal uit eigen land, omdat de importprijzen van Chinees staal stijgen.",
        ],
        answer: 1,
        wrongHints: [
          "Tegendeel — invoerrechten maken Chinees staal DUURDER, niet goedkoper.",
          null,
          "Tegendeel op beide punten.",
          "Inconsistent — als import duurder wordt, kopen ze meer eigen, niet minder.",
        ],
        explanation: "Invoerrechten op Chinees staal = Chinees staal wordt duurder (importprijs stijgt door heffing). Amerikaanse bedrijven gaan dan kopen bij eigen Amerikaanse staalproducenten — die zijn relatief goedkoper geworden. Dat is precies het doel van protectionisme: eigen industrie beschermen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 28",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'invoerrecht', 'importprijs', 'protectionisme', 'vrijhandel'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "redenering volgen: A maakt B duurder → C kiest D — meerdere stappen in 1 zin" },
          { id: "pincode-buitenland-eu", title: "Nederland en het buitenland", niveau: "vmbo-4", why: "internationale handel + beschermingsmaatregelen — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wie heft het invoerrecht?", tekst: "De VS heft een belasting op Chinees staal dat de VS binnenkomt." },
            { titel: "Wat gebeurt er met de prijs?", tekst: "Chinees staal wordt voor VS-bedrijven DUURDER (heffing wordt doorberekend in de prijs)." },
            { titel: "Wat doen VS-bedrijven dan?", tekst: "Ze gaan vaker kopen bij eigen VS-staalproducenten — die zijn relatief goedkoper geworden." },
            { titel: "Wat is het effect?", tekst: "Meer staal verkocht in eigen land (VS) — dat is precies het doel van invoerrechten: eigen industrie beschermen." },
          ],
          woorden: [
            { woord: "invoerrecht", uitleg: "Belasting bij de douane wanneer een product een land binnenkomt. Maakt import duurder." },
            { woord: "protectionisme", uitleg: "Beleid om eigen producenten te beschermen tegen buitenlandse concurrentie via heffingen, quota of subsidies." },
            { woord: "importprijs", uitleg: "De prijs die importeurs betalen voor een buitenlands product, INCLUSIEF heffingen." },
            { woord: "vrijhandel", uitleg: "Tegenovergestelde van protectionisme — geen heffingen, vrij verkeer van goederen tussen landen." },
          ],
          theorie: "**Effect van invoerrechten:**\n\n1. Buitenlandse product wordt DUURDER (heffing erop)\n2. Eigen product wordt RELATIEF goedkoper\n3. Bedrijven kopen meer EIGEN producten\n4. Eigen industrie wordt beschermd, kan groeien\n\nKeerzijde: handelspartner (China) heft vaak vergeldingsmaatregelen → handelsoorlog. Consumenten betalen uiteindelijk meer.",
          voorbeelden: [
            { type: "Trump 2018", tekst: "VS legde 25% invoerrecht op Chinees staal → US Steel kreeg meer orders, maar Amerikaanse autobouwers (Ford, GM) klaagden over duurder staal voor hun fabriek." },
            { type: "EU 2024", tekst: "EU heeft invoerrechten op Chinese elektrische auto's gelegd → Europese auto-industrie beter beschermd, maar EV's worden duurder voor consumenten." },
          ],
          basiskennis: [
            { onderwerp: "Vraag en aanbod", uitleg: "Als prijs van A stijgt, schuiven kopers naar B (substitutie). Hier: Chinees staal duurder → kopers schuiven naar Amerikaans staal." },
          ],
          niveaus: {
            basis: "Heffing op Chinees staal → Chinees duurder → VS-bedrijven kopen meer eigen staal. Antwoord B.",
            simpeler: "Stel je voor: Chinees staal kostte $1.000/ton. VS heft 25% heffing → kost nu $1.250 voor VS-bedrijven. Amerikaans staal kostte $1.100/ton — was te duur, nu goedkoper. VS-bedrijven schuiven over naar Amerikaans staal.",
            nogSimpeler: "Heffing maakt China duurder → koop meer eigen → B.",
          },
        },
      },
    ],
  },
  // V30
  {
    title: "Vraag 30 — wisselkoers China en dollar",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 30. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'Wisselkoersen').",
    emoji: "🎓",
    checks: [
      {
        q: "Wat gebeurt er met de koers van de dollar als China in grote hoeveelheden dollars opkoopt?",
        options: [
          "Door de grote Chinese vraag naar dollars daalt de koers van de dollar.",
          "Door de grote Chinese vraag naar dollars stijgt de koers van de dollar.",
          "Door het grote Chinese aanbod van dollars daalt de koers van de dollar.",
          "Door het grote Chinese aanbod van dollars stijgt de koers van de dollar.",
        ],
        answer: 1,
        wrongHints: [
          "Hoge VRAAG = duurder, niet goedkoper.",
          null,
          "China KOOPT dollars (vraag) — geen aanbod.",
          "China KOOPT dollars (vraag) — geen aanbod.",
        ],
        explanation: "Wet van vraag en aanbod werkt ook voor valuta. Veel vraag naar dollars (China koopt) → koers dollar stijgt. Net zoals bij elke andere markt: hoge vraag + onveranderd aanbod = hogere prijs.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 30",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'wisselkoers', 'vraag', 'aanbod', 'valuta'" },
          { id: "pincode-ondernemen", title: "Ondernemen", niveau: "vmbo-4", why: "wet van vraag en aanbod — basisprincipe dat ook voor valuta geldt" },
          { id: "pincode-buitenland-eu", title: "Nederland en het buitenland", niveau: "vmbo-4", why: "wisselkoersen + valutamarkt — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet China?", tekst: "China KOOPT in grote hoeveelheden dollars. Kopen = vraag." },
            { titel: "Wat gebeurt met de koers bij meer vraag?", tekst: "Bij meer vraag naar iets stijgt de prijs (= koers). Dat is de wet van vraag en aanbod." },
            { titel: "Conclusie", tekst: "China koopt = vraag naar dollars stijgt = dollarkoers STIJGT. Antwoord B." },
          ],
          woorden: [
            { woord: "wisselkoers", uitleg: "De prijs van een vreemde valuta uitgedrukt in eigen valuta. Bv. $1 = €0,92." },
            { woord: "vraag", uitleg: "Hoeveel kopers iets willen kopen tegen een bepaalde prijs. Veel vraag = prijs stijgt." },
            { woord: "aanbod", uitleg: "Hoeveel verkopers iets willen verkopen. Veel aanbod = prijs daalt." },
            { woord: "valuta", uitleg: "Geldsoorten van landen: euro, dollar, yen, yuan, etc." },
          ],
          theorie: "**Wisselkoers werkt als markt:**\n\n• Veel vraag naar valuta X = X wordt duurder (koers stijgt)\n• Veel aanbod van valuta X = X wordt goedkoper (koers daalt)\n\n**Wie veroorzaakt vraag naar dollars?**\n• Kopers van Amerikaanse producten (moeten dollars hebben)\n• Beleggers in Amerikaanse aandelen\n• Centrale banken die dollar-reserves opbouwen (zoals China)\n\n**Wie veroorzaakt aanbod van dollars?**\n• Amerikanen die EU-producten kopen (geven dollars uit)\n• Amerikaanse beleggers in EU-aandelen",
          voorbeelden: [
            { type: "vraag stijgt", tekst: "Als veel mensen ineens dollars willen (vakantie VS, beleggen) → dollar wordt duurder voor Europeanen → koers EUR/USD daalt." },
            { type: "aanbod stijgt", tekst: "Als de Federal Reserve veel dollars BIJ MAAKT → meer dollars in omloop → dollar wordt minder waard." },
          ],
          basiskennis: [
            { onderwerp: "Wet van vraag en aanbod", uitleg: "Werkt op alle markten: meer vraag = duurder, meer aanbod = goedkoper. Geldt ook voor valuta." },
          ],
          niveaus: {
            basis: "China KOOPT (= vraag) dollars → vraag dollars stijgt → koers dollar stijgt. Antwoord B.",
            simpeler: "Stel je voor: een land koopt veel iPhones. Wat doet de iPhone-prijs? Stijgen, want iedereen wil ze. Hetzelfde met dollars: China koopt veel dollars → veel vraag → dollar wordt duurder = stijgt in waarde.",
            nogSimpeler: "Kopen = vraag = prijs omhoog = B.",
          },
        },
      },
    ],
  },
];

const examenEconomie2023T2 = {
  id: "examen-economie-2023-t2",
  title: "Examen oefenen — Economie 2023 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2023-T2",
  intro:
    "7 echte examenvragen uit VMBO-GL/TL economie 2023 tijdvak 2. Per vraag de echte antwoorden, didactische denkprikkels, inhoudelijke uitleg, doorklik naar Pincode-leerpad. Vragen die grafiek/cirkel/schema vereisen (V7, V9, V18, V34, V39, V42) zijn weggelaten.",
  triggerKeywords: [
    "examen 2023 tijdvak 2", "examen oefenen", "echte examenvragen",
    "afvalstoffenheffing", "woz eigenwoningforfait", "vermogensrendementsheffing",
    "koopkracht prijscompensatie", "ecb rente", "invoerrechten chinees staal",
    "china dollars wisselkoers",
  ],
  chapters,
  steps,
};

export default examenEconomie2023T2;
