// Leerpad: Verkeersregels + verkeersveiligheid - groep 6-8.
// Cito burgerschap + verkeersexamen groep 7. 1F. 5 stappen.

const stepEmojis = ["🚦", "🚲", "🚸", "🚓", "🏆"];

const chapters = [
  { letter: "A", title: "Verkeersborden + lichten", emoji: "🚦", from: 0, to: 0 },
  { letter: "B", title: "Fiets in verkeer", emoji: "🚲", from: 1, to: 1 },
  { letter: "C", title: "Voorrang + voetgangers", emoji: "🚸", from: 2, to: 2 },
  { letter: "D", title: "Veilig + politie", emoji: "🚓", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Verkeersborden + verkeerslichten",
    explanation:
      "**Verkeersborden** = ronde, driehoekige of vierkante borden die regels geven.\nKleur + vorm vertellen wat ze betekenen.\n\n**Verbodsborden** *(rood + wit, rond)*:\nIets **mag niet**.\n• 🚫 Geslotenverklaring *(in beide richtingen)*.\n• 🚷 Geen voetgangers.\n• 🚳 Geen fietsen.\n• 🛑 Stoppen *(verplicht stoppen)*.\n• 📵 Geen mobielgebruik in auto.\n• Inhaal-verbod.\n• Snelheid-verbod *(50, 80, etc. doorgekruist)*.\n\n**Gebodsborden** *(blauw + wit, rond)*:\nIets **moet**.\n• Verplicht fietspad *(blauw met wit fiets)*.\n• Verplicht voetpad.\n• Rijrichting *(pijl)*.\n• Maximumsnelheid *(blauwe cirkel met getal)*.\n\n**Waarschuwingsborden** *(rood + wit, driehoek met punt boven)*:\nLet op gevaar.\n• Voorrangskruising.\n• Steile helling.\n• Bocht.\n• Wegversmalling.\n• Spoorwegovergang.\n• Kinderen *(school)*.\n\n**Voorrangsborden** *(geel of wit, rond/driehoek punt onder)*:\nWie heeft voorrang.\n• Voorrangsweg *(geel ruitje met wit)*.\n• Verleen voorrang *(driehoek punt naar onder)*.\n• Stop-bord *(8-hoekig rood)*.\n\n**Informatieborden** *(blauw + wit, vierkant)*:\nNuttige info.\n• Voetgangersoversteekplaats *(zebrapad)*.\n• Parkeren.\n• Wijzers naar plaats.\n• Snelweg-vluchtstrook.\n\n**Verkeerslichten** 🚦:\n\n**Voor auto's**:\n• 🔴 **Rood**: stoppen.\n• 🟡 **Geel**: voorzichtig — bijna rood. Stop als kan.\n• 🟢 **Groen**: rijden mag.\n• Knipperend geel: kruising met voorrang voor wegverkeer — extra opletten.\n\n**Voor fietsers**:\nKleinere lichten, vaak naast auto-lichten.\nIcoon van fiets erin.\n\n**Voor voetgangers**:\nIcoon van lopende persoon.\n• 🔴 Rood mannetje = niet oversteken.\n• 🟢 Groen mannetje = wel oversteken.\n• Soms knipperend groen = bijna rood, schiet op.\n\n**Cito-feitje**:\n**Stoplicht-cyclus** in NL: meestal 60-90 seconden totaal. Wachten op groen kan irriteren — gebruik die tijd om om je heen te kijken naar verkeer.",
    checks: [
      {
        q: "Wat betekent **rood rond met witte streep**?",
        options: ["Verbod (mag niet)", "Gebod", "Waarschuwing", "Info"],
        answer: 0,
        wrongHints: [null, "Blauw.", "Driehoek.", "Vierkant."],
        uitlegPad: {
          stappen: [
            { titel: "Vorm + kleur = soort bord", tekst: "Verkeersborden hebben een **logica** in vorm en kleur. Eenmaal geleerd, herken je ze in 1 oogopslag." },
            { titel: "Rond + rood = VERBOD", tekst: "Een ROND bord met een RODE rand betekent een **verbod** (iets mag NIET). Bv: inrijden verboden, fietsen verboden, parkeren verboden." },
            { titel: "Andere vormen + kleuren", tekst: "**Rond + blauw** = gebod (je MOET dit doen). **Driehoek + rood** = waarschuwing (gevaar). **Vierkant + blauw** = informatie. **8-hoek + rood** = STOP (uniek)." },
          ],
          woorden: [
            { woord: "verbodsbord", uitleg: "Rond met rode rand — iets mag NIET." },
            { woord: "gebodsbord", uitleg: "Rond + blauw — iets MOET." },
            { woord: "waarschuwingsbord", uitleg: "Driehoek + rood — gevaar." },
          ],
          theorie: "Cito-truc verkeersborden: ROND ROOD = NEE (verbod). ROND BLAUW = MOET (gebod). DRIEHOEK = LET OP (gevaar). VIERKANT = INFO. 8-HOEK = STOP.",
          voorbeelden: [
            { type: "stap", tekst: "Rond bord met rode rand + fiets erin = fietsen verboden." },
            { type: "stap", tekst: "Rond blauw bord met fiets erin = verplicht fietspad (moet je gebruiken)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Rood = stop/verboden. Blauw = ok/gebod. Driehoek = gevaar." }],
          niveaus: {
            basis: "Rond + rood = verbodsbord (mag niet).",
            simpeler: "Rood = nee. Blauw = ja-moet. Driehoek = gevaar.",
            nogSimpeler: "Rond + rood = verbod.",
          },
        },
      },
      {
        q: "Wat doet **driehoek met punt boven**?",
        options: ["Waarschuwen voor gevaar", "Verbieden", "Voorrang geven", "Niets"],
        answer: 0,
        wrongHints: [null, "Rond.", "Punt onder.", "Wel."],
      },
      {
        q: "**Geel verkeerslicht** = ?",
        options: ["Voorzichtig — stoppen als kan", "Hard rijden", "Niets", "Hetzelfde als rood"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel actie.", "Bijna maar specifiek dit."],
      },
      {
        q: "**Stop-bord** vorm?",
        options: ["8-hoekig (rood)", "Driehoek", "Rond", "Vierkant"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Fiets in verkeer",
    explanation:
      "Fietsers in NL: **ongeveer 23 miljoen fietsen** *(meer fietsen dan inwoners)*. Fietsen is normaal in NL — maar wel met regels.\n\n**Fiets-uitrusting** *(verplicht)*:\n• **Wit-of-geel licht voor**.\n• **Rood licht achter** *(geen knipperend!)*.\n• **Reflectoren** op trappers + wielen + achteren *(reflector op zadel).\n• **Bel**.\n• Twee **goed-werkende remmen**.\n\n**Verplicht in donker + slecht weer** — wel-licht.\n**Boete**: €70 bij ontbreken licht.\n\n**Veilige fietsen**:\n• **Helm dragen** *(advies, niet wettelijk in NL)*.\n• Vooral kinderen + e-bike gebruikers.\n• Sinds 2025 verplicht voor speed-pedelec.\n\n**Regels op de fiets**:\n\n**1. Houd rechts** 👉\n• Fiets aan rechterkant van fietspad of weg.\n• Inhalen alleen links.\n\n**2. Niet appen / bellen** 📵\n• **Wettelijk verboden** sinds **2019**.\n• Boete: €160.\n• Geldt voor: telefoon vasthouden, sms, video, foto.\n• Bellen via koptelefoon zonder telefoon vasthouden = wel toegestaan *(niet aanbevolen)*.\n\n**3. Verlichting aan** 💡\n• 's Avonds + slecht zicht.\n• Boete: €70.\n\n**4. Geen alcohol** 🍷\n• Boven 0,5 promille verboden te fietsen.\n• Boete: tot €400.\n• Voor jongeren onder 18: 0,0 promille.\n\n**5. Niet hand vasthouden** 🚲\n• Sturen met 2 handen.\n• Hand voor richting aangeven is **wel** toegestaan *(arm uitsteken)*.\n\n**6. Voorrang regels** 👈\n• Op fietspad: meestal voorrang.\n• Op gewone weg: zelfde voorrangsregels als auto.\n• Bij gelijkwaardige kruising: **rechts heeft voorrang**.\n\n**7. Geen bromfietsen op fietspad** *(in dorpen)*\n• Wel: e-bike *(elektrisch tot 25 km/u)*.\n• Niet: snorfiets in bebouwde kom op fietspad *(daar moet die op rijbaan).*\n\n**Verkeersexamen groep 7**:\nVeel scholen doen **theoretisch verkeersexamen** in groep 7 *(april)*.\n• Multiple-choice toets *(50 vragen)*.\n• 80% goed = geslaagd.\n• Daarna **praktisch verkeersexamen** *(fietsen door wijk met verkeers-instructeur)*.\n• Slaag-diploma uitgereikt door politie.\n\n**Tips voor verkeersexamen**:\n• Studeer ANWB-verkeersborden *(boekje 'Op weg met je fiets')*.\n• Maak praktijk-rondjes met ouder/oma.\n• Oefen hand uitsteken *(richting aangeven)*.\n• Schoolverkeerskwis online beschikbaar.\n\n**Cito-feitje**:\nNL heeft **35.000 km fietspaden** — meeste per inwoner ter wereld. Bekendste fietsroute: **LF-routes** *(Lange Fietsroutes, 12 routes door hele NL)*.",
    checks: [
      {
        q: "**Mobielgebruik op fiets** wettelijk?",
        options: ["Verboden sinds 2019, boete €160", "Toegestaan", "Alleen handsfree", "Geen wet"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet aanbevolen.", "Wel wet."],
        uitlegPad: {
          stappen: [
            { titel: "Sinds 2019 verboden", tekst: "Op de fiets met je **mobiel** in de hand mag NIET meer. Sinds **1 juli 2019** is dat in NL bij wet verboden. Dat geldt voor zowel telefoon BELLEN als SCROLLEN/CHATTEN/SPEL." },
            { titel: "Hoge boete: €160", tekst: "Krijg je gepakt door politie? Dan kost het **€160 boete** (in 2024). Voor kinderen onder 18 wordt vaak met ouders gesproken. Maar daarna gewoon boete." },
            { titel: "Waarom verboden?", tekst: "**Afleiding** in verkeer is heel gevaarlijk. Onderzoek: 1 in elke 4 fietsongelukken heeft te maken met mobielgebruik. Snel zelfs eventjes naar je scherm kijken = niet meer letten op auto's." },
          ],
          woorden: [
            { woord: "afleiding", uitleg: "Niet meer letten op verkeer." },
            { woord: "wet 1 juli 2019", uitleg: "Datum dat mobielgebruik op fiets verboden werd." },
          ],
          theorie: "Cito-feit: ook **handsfree** bellen op fiets via oortjes mag, maar oppassen — het mag NIET als je een telefoon vasthoudt. Smartwatch checken op pols = ook verboden.",
          voorbeelden: [
            { type: "stap", tekst: "Telefoon op stuur-houder GEBRUIKEN (route-app), zonder aanraken = OK." },
            { type: "stap", tekst: "Telefoon in hand om bericht te lezen = verboden (€160)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vuistregel: 2 handen op het stuur = altijd veilig. Mobiel pakken = niet." }],
          niveaus: {
            basis: "Mobiel op fiets verboden sinds 2019 (boete €160).",
            simpeler: "Geen telefoon in hand op fiets. Te gevaarlijk.",
            nogSimpeler: "Mobiel = verboden op fiets.",
          },
        },
      },
      {
        q: "**Helm** verplicht in NL?",
        options: ["Alleen advies (niet wettelijk)", "Wel verplicht", "Niet bestaand", "Alleen jong"],
        answer: 0,
        wrongHints: [null, "Niet.", "Wel.", "Speed-pedelec wel."],
      },
      {
        q: "Bij **gelijkwaardige kruising** voorrang?",
        options: ["Rechts", "Links", "Tegen", "Niemand"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een gelijkwaardige kruising?", tekst: "Een **gelijkwaardige kruising** is een kruispunt zonder verkeerslichten, zonder voorrangsborden — alle wegen lijken even belangrijk." },
            { titel: "De regel: rechts gaat voor", tekst: "Op zo'n kruising heeft de auto/fietser die VAN RECHTS komt **voorrang**. Dus jij moet stoppen voor iemand die van rechts komt. Iemand van LINKS moet voor jou stoppen." },
            { titel: "Waarom rechts?", tekst: "Internationale afspraak (en wettelijk in NL): rechts heeft voorrang. Door deze duidelijke regel weet iedereen wat te doen, ook bij rustige kruispunten zonder borden." },
          ],
          woorden: [
            { woord: "gelijkwaardige kruising", uitleg: "Kruispunt zonder borden of lichten — alle wegen even belangrijk." },
            { woord: "voorrang", uitleg: "Eerst mogen rijden." },
          ],
          theorie: "Cito-truc: bij gelijkwaardige kruising = 'rechts voor'. Bij voorrangsweg (haaietanden op de weg of bord met scheve balk) = ANDERS, dan moet jij voorrang verlenen aan de doorgaande weg.",
          voorbeelden: [
            { type: "stap", tekst: "Op fiets door rustige woonwijk: kruispunt zonder borden. Auto van rechts komt → jij wacht." },
            { type: "stap", tekst: "Voor jou een hoofdweg met haaietanden geschilderd op jouw weg = je moet voorrang verlenen, ook al ben jij van rechts." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Geen borden = rechts voor. Met haaietanden = niet rechts voor maar de andere weg." }],
          niveaus: {
            basis: "Gelijkwaardige kruising → rechts heeft voorrang.",
            simpeler: "Iemand van rechts → jij stopt eerst.",
            nogSimpeler: "Rechts voor.",
          },
        },
      },
      {
        q: "**Promillegrens** fietsen NL?",
        options: ["0,5 (boven = verboden)", "1,0", "Geen grens", "0,0"],
        answer: 0,
        wrongHints: [null, "Te hoog.", "Wel grens.", "Voor jongeren onder 18 wel."],
      },
    ],
  },
  {
    title: "Voorrang + voetgangers",
    explanation:
      "**Voorrang** = wie eerst mag gaan op kruising.\n\n**Algemene regels**:\n\n**1. Voorrangsweg** *(geel ruitje)*:\n• Verkeer op die weg heeft voorrang.\n• Verkeer van zijweg moet wachten.\n\n**2. Verleen voorrang** *(driehoek punt onder)* of 'Haaientanden' op grond:\n• Jij moet wachten.\n• Verkeer van rechts + voor heeft voorrang.\n\n**3. Stop-bord** *(8-hoek)*:\n• Volledig stoppen.\n• Daarna voorrang verlenen.\n\n**4. Gelijkwaardige kruising** *(zonder borden)*:\n• **Rechts heeft voorrang** *(in NL)*.\n• Onthoud: rechts = winnaar.\n\n**5. Rotonde** 🔄:\n• Verkeer **op rotonde** heeft voorrang.\n• Verkeer dat binnen wil komen wacht.\n• Hand uitsteken bij verlaten *(rechts).\n• Geen voorrang bij invoegen.\n\n**6. Voetgangers oversteekplaats / zebrapad** 🦓:\n• Voetgangers hebben **voorrang** op zebrapad.\n• Auto's + fietsers moeten stoppen.\n• Voetganger die WIL oversteken = ook voorrang *(hand opsteken)*.\n\n**7. Verkeer rechtsaf bij stoplicht groen**:\n• Voorrang voor: voetganger op zelfde tak *(die kant op steek)*.\n• Voorrang voor: fietsen op kruisend fietspad *(als die voorrangsweg-bord hebben)*.\n\n**Voetgangers in verkeer**:\n\n**1. Trottoir / stoep** 🚶\n• Voetgangers lopen op stoep, NIET op fietspad of weg.\n• Buiten bebouwde kom: berm, zo veel mogelijk **links** *(tegen verkeer in)* — zie verkeer aankomen.\n\n**2. Oversteken**:\n• Liefst op **zebrapad** of bij **stoplicht**.\n• Anders: kijken **links → rechts → links** + luisteren.\n• Als straat veilig: rustig oversteken.\n\n**3. Met groep / klas**:\n• Voorste persoon = leider, achterste persoon = sluitstuk.\n• Looplijn met handen vast voor kleintjes.\n\n**4. 's Nachts**:\n• Wit / licht-kleurige kleding aan.\n• Reflecterende sticker op jas / tas.\n• Hond aan kort lijntje.\n\n**Voor scholen**:\n• Vaak **brigadier** *(persoon met stopbord)* helpt oversteken.\n• Schoolzones: 30 km/u + extra waarschuwing.\n• Geen parkeren binnen 5 meter van kruising of zebrapad.\n\n**Hulpdiensten** 🚑:\n• **Ambulance, brandweer, politie** met **zwaailicht + sirene**:\n• Verkeer moet **opzij gaan** + indien nodig stoppen.\n• Door rood mogen.\n• Niet inhalen.\n\n**Cito-feitje**:\n**Per jaar sterven ongeveer 80 kinderen** in verkeer in NL *(0-14 jaar)*. Meeste door auto. Daarom verkeersregels belangrijk + helm aanbevolen.",
    checks: [
      {
        q: "Bij **gelijkwaardige kruising**: wie heeft voorrang?",
        options: ["Rechts", "Links", "Geen voorrang", "Vooruit"],
        answer: 0,
        wrongHints: [null, "Niet.", "Wel.", "Niet."],
      },
      {
        q: "Op **rotonde**: wie heeft voorrang?",
        options: ["Verkeer op rotonde", "Verkeer dat invoegt", "Geen", "Helft helft"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel.", "Niet."],
      },
      {
        q: "Bij **zebrapad** wie heeft voorrang?",
        options: ["Voetganger", "Auto", "Fietser", "Geen"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel."],
      },
      {
        q: "**Sirene + zwaailicht** politie?",
        options: ["Opzij gaan / stoppen", "Negeren", "Volgen", "Race"],
        answer: 0,
        wrongHints: [null, "Gevaarlijk.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Veilig + politie + ongeluk",
    explanation:
      "**Veiligheidsregels**:\n\n**1. Verkeersregels = wet** 📜\n• Niet alleen advies.\n• Boetes bij overtreden.\n• Bij ernstige overtreding: voor rechter.\n\n**2. Houd afstand**:\n• Tussen jou en voorganger.\n• Vuistregel auto: **2 seconden** *(in droog weer)*, 4 sec bij regen.\n• Fiets: niet vlak achter ander.\n\n**3. Voorspel verkeer**:\n• Kijk vooruit: wat doet auto verderop?\n• Anticipeer: bal op weg → kind kan volgen.\n• Niet alleen op rechte stukken kijken.\n\n**4. Zichtbaar zijn** 💡\n• Lichte kleding 's nachts.\n• Verlichting fiets aan.\n• Niet in dode hoek vrachtwagen *(rechts naast cabine)*.\n\n**Politie + verkeer** 🚓:\n\n**Wat doet politie?**\n• Verkeerscontroles *(snelheid, alcohol, mobiel, licht).*\n• Helpt bij ongelukken.\n• Houdt verkeer aan na overtreding.\n• Leert kinderen verkeer op scholen.\n\n**Boetes** *(2024)*:\n• Door rood rijden auto: €260.\n• Door rood fiets: €110.\n• Te hard rijden: €30-€600 *(afhankelijk km/u boven)*.\n• Geen licht fiets: €70.\n• Mobiel op fiets: €160.\n• Mobiel in auto: €420 + 1 punt rijbewijs.\n• Geen gordel: €160.\n• Alcohol auto: €350+ + rijbewijs in.\n\n**Punten op rijbewijs** *(volwassenen, beginners 5 jaar)*:\n• Te veel punten → rijbewijs ingenomen.\n• Voor jongeren: strenger.\n\n**Bij ongeluk** 🚑:\n\n**Wat doe je?**\n\n**1. Zorg voor veiligheid** *(jouw + anderen)*:\n• Niet in midden weg blijven staan.\n• Knipperlichten of waarschuwingsdriehoek.\n\n**2. Bel 112** *(als gewonden of grote schade)*:\n• Politie + ambulance + brandweer.\n• Gratis vanaf alle telefoons.\n• Vertel: WAAR, WAT, AANTAL gewonden.\n\n**3. Wacht op hulp**:\n• Niet zelf gewonden verplaatsen *(kan letsel verergeren)*.\n• Tenzij gevaar *(brand, water)*.\n\n**4. Bij kleine schade**:\n• Aanrijdingformulier invullen.\n• Adressen + verzekering uitwisselen.\n• Foto's maken voor verzekering.\n\n**5. Getuige zijn**:\n• Naam + adres geven aan politie.\n• Eerlijk verklaren wat je zag.\n\n**Eerste hulp (EHBO)** 🩹:\n\n**Wat doe je bij gewond persoon?**\n• Praat met persoon — niet alleen laten.\n• Niet bewegen *(behalve gevaar)*.\n• Kijk of ademt + bewust is.\n• Bij bloeding: druk op wond met doek.\n• Wacht op ambulance.\n\n**Kinderen vaak EHBO-cursus op school**.\n\n**Cito-feitje**:\nGroep 7-8 leerlingen krijgen vaak **VEILIG VERKEER**-cursus van **Veilig Verkeer Nederland (VVN)** of **3VO**. Lessen over fietsroute, anticiperen, dode hoek vrachtwagen.",
    checks: [
      {
        q: "Welk nummer bij **ongeluk + gewonden**?",
        options: ["112", "0900-8844", "Geen", "06-..."],
        answer: 0,
        wrongHints: [null, "Politie niet-spoed.", "Wel.", "Niet."],
      },
      {
        q: "Wat is een **dode hoek**?",
        options: ["Plek waar chauffeur jou niet ziet", "Hoek van weg", "Niet bestaand", "Lichtbron"],
        answer: 0,
        wrongHints: [null, "Niet specifiek.", "Wel.", "Niet."],
      },
      {
        q: "Wat doe je bij **gewond persoon**?",
        options: ["Praat + niet bewegen + 112 bel", "Direct verplaatsen", "Negeren", "Filmen"],
        answer: 0,
        wrongHints: [null, "Kan letsel verergeren.", "Niet.", "Niet eerst."],
      },
      {
        q: "**Door rood rijden** auto-boete (2024)?",
        options: ["~€260", "Geen", "€10", "€10.000"],
        answer: 0,
        wrongHints: [null, "Wel.", "Te weinig.", "Te veel."],
      },
    ],
  },
  {
    title: "Eind-toets — verkeer mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Rood rond met witte streep** = ?", options: ["Verbod", "Gebod", "Waarschuwing", "Info"], answer: 0, wrongHints: [null, "Blauw.", "Driehoek.", "Vierkant."] },
      { q: "**Rotonde** voorrang?", options: ["Verkeer op rotonde", "Invoegers", "Geen", "Rechtdoor"], answer: 0, wrongHints: [null, "Niet.", "Wel.", "Niet."] },
      { q: "**Mobiel op fiets** boete?", options: ["€160 (sinds 2019)", "Geen", "€10", "€1000"], answer: 0, wrongHints: [null, "Wel.", "Te weinig.", "Te veel."] },
      { q: "Bij **zebrapad** voorrang?", options: ["Voetganger", "Auto", "Fiets", "Geen"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "**Spoednummer** ongeluk?", options: ["112", "0900", "Geen", "06"], answer: 0, wrongHints: [null, "Niet spoed.", "Wel.", "Niet."] },
      { q: "**Helm** verplicht in NL?", options: ["Advies (niet wettelijk)", "Wettelijk", "Geen helm bestaat", "Alleen kind"], answer: 0, wrongHints: [null, "Niet voor gewone fiets.", "Wel.", "Niet wettelijk."] },
      { q: "Bij **gelijkwaardige kruising** zonder borden — wie heeft voorrang?", options: ["Verkeer van rechts","Verkeer van links","Eerste die er is","Auto's altijd"], answer: 0, wrongHints: [null, "Andersom.", "Niet.", "Niet — fietser ook."] },
      { q: "Welke kleur **fietsverlichting** voor (volgens NL wet)?", options: ["Wit","Geel","Rood","Blauw"], answer: 0, wrongHints: [null, "Niet wettelijk.", "Achter, niet voor.", "Niet — politiekleur."] },
      { q: "**Stoplicht** — wat doet oranje (geel)?", options: ["Waarschuwing: bijna rood","Rijden mag","Stop direct","Maak vaart"], answer: 0, wrongHints: [null, "Niet — kan veranderen.", "Soms wel, soms doorrijden veilig.", "Niet — vertragen."] },
      { q: "**Maximum snelheid** binnen bebouwde kom (NL)?", options: ["50 km/u","30 km/u","80 km/u","100 km/u"], answer: 0, wrongHints: [null, "Soms — zone 30.", "Buiten.", "Snelweg."] },
      { q: "Maximum snelheid **autosnelweg** overdag?", options: ["100 km/u","130 km/u","80 km/u","50 km/u"], answer: 0, wrongHints: [null, "Tot 2020.", "Buiten bebouwd.", "Bebouwd."] },
      { q: "**Veiligheidsgordel** auto — verplicht?", options: ["Ja, voor alle inzittenden","Alleen voorin","Alleen achterin","Niet wettelijk"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "Welke bord-vorm is een **gebod**?", options: ["Blauwe rond","Rode rond","Driehoek","Vierkant"], answer: 0, wrongHints: [null, "Verbod.", "Waarschuwing.", "Info."] },
      { q: "Welke bord-vorm is een **waarschuwing**?", options: ["Driehoek (rood randje)","Blauw rond","Rood rond","Vierkant"], answer: 0, wrongHints: [null, "Gebod.", "Verbod.", "Info."] },
      { q: "Wat doe je bij **brand** thuis?", options: ["Verlaat huis + bel 112","Blijven","Niets","Vrienden bellen"], answer: 0, wrongHints: [null, "Gevaarlijk.", "Niet.", "Eerst 112."] },
      { q: "**Mobiel op fiets** is sinds welk jaar verboden?", options: ["2019","2010","2025","Niet verboden"], answer: 0, wrongHints: [null, "Eerder niet.", "Niet.", "Wel."] },
      { q: "Welke kant rijdt verkeer in NL?", options: ["Rechts","Links","Beide","Random"], answer: 0, wrongHints: [null, "VK.", "Niet.", "Niet."] },
      { q: "Wat is **EHBO**?", options: ["Eerste Hulp Bij Ongelukken","Een ziekenhuis","Politie","Niet relevant"], answer: 0, wrongHints: [null, "Andere zorg.", "Niet.", "Wel."] },
      { q: "Wat doe je bij een **bewusteloos** persoon?", options: ["Bel 112 + check ademhaling","Wakker schudden hard","Negeren","Eten geven"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Gevaarlijk."] },
      { q: "Welke leeftijd is **fietsexamen** in NL?", options: ["Groep 7 (~10-11 jaar)","Groep 1","Klas 1","Volwassen"], answer: 0, wrongHints: [null, "Te jong.", "Niet basisschool.", "Niet."] },
      { q: "Welke kant heeft de **rechterbinnenkant** bij een rotonde?", options: ["Verkeer op rotonde heeft voorrang","Invoegers","Geen voorrang","Random"], answer: 0, wrongHints: [null, "Andersom.", "Wel voorrang.", "Niet."] },
      { q: "Welke **lampen** moet je aan op fiets in donker?", options: ["Voor wit + achter rood","Geen","Blauw + groen","Random"], answer: 0, wrongHints: [null, "Wel verplicht.", "Niet wettelijk.", "Niet."] },
      { q: "Wat is **defensief rijden**?", options: ["Voorzichtig + anticiperen op anderen","Aanvallend","Niet relevant","Reclame"], answer: 0, wrongHints: [null, "Tegengestelde.", "Wel.", "Niet."] },
      { q: "Welke **wegmarkering** mag je niet overschrijden?", options: ["Doorgetrokken witte streep","Onderbroken streep","Geen markering","Random"], answer: 0, wrongHints: [null, "Mag wel.", "Wel.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verkeersregelsVeiligheidPo = {
  id: "verkeersregels-veiligheid-po",
  title: "Verkeersregels + veiligheid (Cito groep 6-8)",
  emoji: "🚦",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / verkeer",
  prerequisites: [],
  intro:
    "Verkeersregels voor Cito groep 6-8 + verkeersexamen groep 7 — verkeersborden (verbod/gebod/waarschuwing/info) + lichten + fiets-uitrusting + regels (mobiel verboden, alcohol grens) + voorrang (rechts/rotonde/zebrapad) + politie + 112 + EHBO. ~15 min.",
  triggerKeywords: [
    "verkeer", "verkeersregels",
    "verkeersbord", "verbodsbord", "gebodsbord", "waarschuwing",
    "verkeerslicht", "stoplicht", "rood groen",
    "fiets", "fietsverlichting", "helm",
    "voorrang", "rotonde", "zebrapad",
    "voetganger",
    "verkeersexamen", "VVN",
    "112", "EHBO",
  ],
  chapters,
  steps,
};

export default verkeersregelsVeiligheidPo;
