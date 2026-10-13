// Leerpad: Staatsinrichting Nederland sinds 1848
// VMBO-GT eindexamen-syllabus geschiedenis+staatsinrichting (verplicht).
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  oranje: "#ef6c00",
  rood: "#c62828",
  blauw: "#1565c0",
  goud: "#ffd54f",
};

const stepEmojis = ["👑", "📜", "⚖️", "🏛️", "🏆"];

const chapters = [
  { letter: "A", title: "Vóór 1848", emoji: "👑", from: 0, to: 0 },
  { letter: "B", title: "Thorbecke + grondwet 1848", emoji: "📜", from: 1, to: 1 },
  { letter: "C", title: "Trias politica + grondrechten", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Regering + parlement vandaag", emoji: "🏛️", from: 3, to: 3 },
  { letter: "E", title: "Eind-opdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Vóór 1848 ─────────────────────────────────────────
  {
    title: "Vóór 1848 — de koning bepaalde alles",
    explanation:
      "In de jaren **1815-1848** was Nederland een koninkrijk waarin **koning Willem I** (en later Willem II) zelf de macht had. Dat leek op een **absolute monarchie**.\n\n**Hoe werkte het toen**:\n• De koning benoemde **ministers** die alleen verantwoording aflegden aan hem (niet aan het volk).\n• Er was een **Staten-Generaal** (parlement), maar dat had weinig macht.\n• Weinig vrijheid van pers en onderwijs.\n• Stemrecht alleen voor rijke mannen — vrouwen + arbeiders geen stem.\n\n**Waarom 1848 een omslag werd**:\n• In heel Europa: **revolutiejaar 1848**. In Parijs viel de koning, in Wenen opstand, in Duitsland kort een parlement.\n• Koning Willem II was bang voor dezelfde opstand in Nederland.\n• Hij zei later: *'Ik ben van conservatief in één nacht liberaal geworden.'*\n• Resultaat: de **grondwet van 1848** werd ingevoerd — door **Johan Rudolph Thorbecke** geschreven.\n\n**Toets-/examen-feit**: Thorbecke = liberaal, schreef de grondwet, vader van de moderne Nederlandse democratie.",
    checks: [
      {
        q: "Welke koning regeerde NL in **1848** toen de grondwet werd herzien?",
        options: ["Willem II", "Willem I", "Willem III", "Lodewijk Napoleon"],
        answer: 0,
        wrongHints: [null, "Willem I trad al in 1840 af.", "Deze koning begon pas in 1849, een jaar na de nieuwe grondwet.", "Lodewijk Napoleon was koning van 1806 tot 1810, veel eerder."],
        uitlegPad: {
          stappen: [{ titel: "Willem II + Thorbecke", tekst: "Willem I (1815-1840) → Willem II (1840-1849). In 1848 dwingt de Europese revolutie-dreiging Willem II om de grondwet te laten herzien door Thorbecke." }],
          woorden: [{ woord: "monarchie", uitleg: "Staat met een koning of koningin als staatshoofd." }],
          theorie: "Willem-koningen volgorde: I (1815), II (1840), III (1849), Wilhelmina (1890), Juliana (1948), Beatrix (1980), Willem-Alexander (2013).",
          voorbeelden: [{ type: "feit", tekst: "Willem II zei zelf: 'Ik ben in één nacht van conservatief liberaal geworden.'" }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Verwar niet: Willem I = vader (koning vanaf 1815), Willem II = zoon (koning vanaf 1840, grondwet 1848)." }],
          niveaus: { basis: "Willem II.", simpeler: "1848 grondwet = koning Willem II + Thorbecke.", nogSimpeler: "Willem II" },
        },
      },
      {
        q: "Wat is een **absolute monarchie**?",
        options: ["Koning heeft zelf alle macht","Koning is alleen ceremonieel","Koning en parlement delen macht","Adel kiest wie er koning wordt"],
        answer: 0,
        wrongHints: [null, "Zo is het nu in Nederland. Hoe was het vóór er grondwetten waren die de koning beperkten?", "Dan is het een constitutionele monarchie: de grondwet en het parlement beperken de koning.", "Een gekozen koning bestond wel, bijvoorbeeld in Polen. Maar 'absoluut' zegt iets over zijn macht, niet over hoe hij koning werd."],
        uitlegPad: {
          stappen: [{ titel: "Absolute = onbeperkte macht", tekst: "Absoluut = onbeperkt. De koning beslist over wetten, ministers, leger, recht. Voorbeeld: Frankrijk vóór 1789 (Lodewijk XIV — 'L'État, c'est moi'). NL 1815-1848 was een gematigde versie." }],
          woorden: [{ woord: "absoluut", uitleg: "Volledig, onbeperkt." }, { woord: "monarch", uitleg: "Koning of koningin als staatshoofd." }],
          theorie: "Tegenovergesteld = constitutionele monarchie (koning gebonden aan grondwet — NL na 1848).",
          voorbeelden: [{ type: "vergelijk", tekst: "Absoluut: koning bepaalt zelf belastingen. Constitutioneel: parlement bepaalt belastingen, koning tekent." }],
          niveaus: { basis: "Koning heeft alle macht.", simpeler: "Absoluut = onbeperkt. Koning bepaalt alles.", nogSimpeler: "Onbeperkt" },
        },
      },
      {
        q: "Welk **Europees jaar** was de directe aanleiding voor de Nederlandse grondwetsherziening?",
        options: ["1848 — revolutiejaar","1789 — Franse Revolutie","1846 — aardappelcrisis","1830 — Belgische Opstand"],
        answer: 0,
        wrongHints: [null, "De Franse Revolutie inspireerde wel, maar lag zestig jaar eerder. Wat gebeurde er vlak vóór de herziening in Europa?", "De aardappelziekte zorgde in 1845-1847 voor honger en onrust, maar Willem II veranderde pas later in één nacht van mening. Waardoor?", "De Belgische Opstand was achttien jaar eerder. Welke onrust in Europa maakte Willem II bang?"],
        uitlegPad: {
          stappen: [{ titel: "1848 = revolutie-jaar Europa", tekst: "In 1848 vielen tegelijk koningen/regeringen in Frankrijk (Lodewijk Filips), Oostenrijk (Metternich), Italië, Duitsland. Massa-opstanden. Willem II vreesde hetzelfde in NL → wilde voorkomen door zelf hervorming." }],
          theorie: "1848 staat in elk Europees geschiedenisboek als kantelpunt: einde absolute monarchieën, opkomst grondwetten.",
          niveaus: { basis: "1848.", simpeler: "Europese revoluties 1848 = directe aanleiding.", nogSimpeler: "1848" },
        },
      },
      {
        q: "**Vóór 1848**: welke groep had stemrecht in Nederland?",
        options: ["Alleen rijke mannen","Iedereen vanaf 18 jaar","Alleen adel en geestelijken","Alle mannen vanaf 25 jaar"],
        answer: 0,
        wrongHints: [null, "Iedereen vanaf 18 mag pas sinds 1972 stemmen.", "De adel had wel een eigen plek in de Provinciale Staten, maar ook rijke burgers mochten meebeslissen. Waar hing stemrecht van af?", "Kiesrecht voor alle mannen kwam pas in 1917."],
        uitlegPad: {
          stappen: [{ titel: "Census-kiesrecht", tekst: "Census-kiesrecht: alleen wie genoeg belasting betaalde mocht stemmen. Resultaat: ~10% van mannen, 0% vrouwen. Pas in **1917 algemeen mannen-kiesrecht**, **1919 vrouwen-kiesrecht** (Aletta Jacobs)." }],
          woorden: [{ woord: "census-kiesrecht", uitleg: "Stemrecht gekoppeld aan inkomen of bezit." }, { woord: "algemeen kiesrecht", uitleg: "Iedereen volwassene mag stemmen, ongeacht inkomen/geslacht." }],
          theorie: "Toets-examen-feit: vrouwenkiesrecht NL 1919, eerder dan bijvoorbeeld Frankrijk en België.",
          niveaus: { basis: "Alleen rijke mannen.", simpeler: "Census = je moest rijk genoeg zijn", nogSimpeler: "Rijke mannen" },
        },
      },
      {
        q: "Welke **liberale denker** schreef de grondwet van 1848?",
        options: ["Johan Rudolph Thorbecke", "Guillaume Groen van Prinsterer", "Gijsbert Karel van Hogendorp", "Abraham Kuyper"],
        answer: 0,
        wrongHints: [null, "Groen van Prinsterer was juist geen liberaal, maar een christelijke politicus.", "Van Hogendorp schreef de grondwet van 1814, niet die van 1848.", "Kuyper werd pas later bekend en was geen liberaal."],
        uitlegPad: {
          stappen: [{ titel: "Thorbecke = grondlegger", tekst: "Johan Rudolph Thorbecke (1798-1872), liberaal hoogleraar in Leiden. Op verzoek van Willem II schreef hij (met een commissie) in 1848 de nieuwe grondwet. Wordt gezien als **vader van de moderne Nederlandse democratie**." }],
          woorden: [{ woord: "liberaal", uitleg: "Politieke stroming: nadruk op individuele vrijheid + beperkte staatsmacht." }],
          theorie: "Standbeelden van Thorbecke staan in Amsterdam (Thorbeckeplein) + Den Haag.",
          niveaus: { basis: "Thorbecke.", simpeler: "Thorbecke = liberaal, schreef grondwet 1848.", nogSimpeler: "Thorbecke" },
        },
      },
    ],
  },

  // ─── B. Thorbecke + grondwet 1848 ─────────────────────────
  {
    title: "Thorbecke's grondwet — wat veranderde er?",
    explanation:
      "De **grondwet van 1848** maakte van Nederland een **constitutionele monarchie met parlementaire democratie**. De koning bleef, maar zijn macht werd ingekaderd door regels.\n\n**De 4 grootste veranderingen**:\n\n**1. Ministers verantwoordelijk aan parlement** (niet meer aan koning alleen)\n• Vóór: koning benoemde ministers, ontsloeg ze zelf.\n• Na 1848 (vast sinds 1866-1868): ministers hebben het **vertrouwen van de Tweede Kamer** nodig. Bij motie van wantrouwen → aftreden.\n• → De **macht verschuift van koning naar parlement**.\n\n**2. Direct kiesrecht voor Tweede Kamer** (al was 't beperkt door census)\n• Vóór: leden gekozen door provinciale staten of door koning.\n• Na 1848: directe verkiezing door stemgerechtigde burgers.\n\n**3. Grondrechten ingevoerd**:\n• Vrijheid van **godsdienst** (kerken zelf kiezen)\n• Vrijheid van **drukpers** (kranten mogen kritisch schrijven)\n• Vrijheid van **onderwijs** (zelf scholen oprichten)\n• Vrijheid van **vereniging** (groepen mogen organiseren)\n\n**4. Onschendbaarheid van de koning**\n• De koning kan **persoonlijk niet vervolgd** worden voor wetten/besluiten.\n• Maar: **ministers zijn verantwoordelijk** — als iets misgaat, is het de minister die opstapt, niet de koning.\n\n**Slogan om te onthouden**: *'De koning is onschendbaar, de ministers zijn verantwoordelijk.'*",
    checks: [
      {
        q: "Welke 4 vrijheden (**grondrechten**) zaten in de grondwet van 1848?",
        options: ["Godsdienst, pers, onderwijs, vereniging","Kiesrecht, staking, betoging, privacy","Arbeid, wonen, zorg, inkomen","Wapenbezit, handel, reizen, taal"],
        answer: 0,
        wrongHints: [null, "Staken, betogen en privacy werden pas in de 20e eeuw grondrechten, en kiesrecht voor iedereen pas in 1917 en 1919.", "Dat zijn sociale grondrechten. Die kwamen pas in de grondwet van 1983.", "Een recht op wapenbezit staat in de Amerikaanse grondwet. Welke vrijheden wilden de Nederlandse liberalen in 1848?"],
        uitlegPad: {
          stappen: [{ titel: "De 4 vrijheden van 1848", tekst: "Geloof + Pers + Onderwijs + Vereniging — vier vrijheden in de grondwet. Ezelsbruggetje: **G-P-O-V**: Geef Pers Onderwijs Vrijheid." }],
          woorden: [{ woord: "grondrecht", uitleg: "Recht dat de overheid moet respecteren, in grondwet vastgelegd." }],
          theorie: "Vrijheden zorgen voor: kerken zelf kiezen, kranten kritisch schrijven, scholen zelf stichten (= bijzonder onderwijs), groepen zoals vakbonden mogen organiseren.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bijzonder onderwijs (katholiek/protestants/islamitisch) = grondrecht onderwijsvrijheid." }],
          niveaus: { basis: "Godsdienst pers onderwijs vereniging.", simpeler: "G-P-O-V = vier 1848-vrijheden", nogSimpeler: "GPOV" },
        },
      },
      {
        q: "Wat betekent: *'De koning is **onschendbaar**, de ministers zijn **verantwoordelijk**'*?",
        options: ["Ministers zijn aanspreekbaar, de koning niet", "Koning mag ministers zomaar ontslaan", "Koning en ministers maken zelf de wetten", "Koning beslist, ministers voeren uit"],
        answer: 0,
        wrongHints: [null, "Mag wel formeel, maar in praktijk nooit: ministers zijn de echte bestuurders.", "Wetten maken regering en parlement samen.", "Na 1848 beslist de koning juist niet meer zelf. Wie moet zich verantwoorden in de Kamer?"],
        uitlegPad: {
          stappen: [{ titel: "Twee kanten van de medaille", tekst: "**Onschendbaar** = de koning kan persoonlijk niet voor de rechter gedaagd worden voor staatszaken. **Verantwoordelijk** = de minister tekent mee, dus die is wél aansprakelijk. Bij misser → minister af, koning blijft." }],
          woorden: [{ woord: "onschendbaar", uitleg: "Kan niet juridisch vervolgd worden." }, { woord: "verantwoordelijk", uitleg: "Aansprakelijk voor wat er gebeurt." }],
          theorie: "Toets-examen-vraag-klassieker: 'Wie tekent een wet?' → Koning + minister beide. → Bij fout: minister af.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Toeslagenaffaire 2021: kabinet trad af, koning bleef." }],
          niveaus: { basis: "Koning niet vervolgbaar, minister stapt op.", simpeler: "Onschendbaar koning + verantwoordelijke ministers", nogSimpeler: "Minister af, koning blijft" },
        },
      },
      {
        q: "**Direct kiesrecht** voor de Tweede Kamer betekent:",
        options: ["Burgers kiezen zelf de Kamerleden","De koning benoemt de Kamerleden","Provincies kiezen de Kamerleden","Partijen wijzen de Kamerleden aan"],
        answer: 0,
        wrongHints: [null, "Vóór 1848 benoemde de koning de leden van de Eerste Kamer. Voor de Tweede Kamer veranderde in 1848 iets anders.", "Zo ging het vóór 1848: dat heet indirect kiesrecht.", "Partijen zetten wel kandidaten op een lijst, maar wie beslist er uiteindelijk wie er in de Kamer komt?"],
        uitlegPad: {
          stappen: [{ titel: "Direct ≠ indirect", tekst: "Direct kiesrecht: burger → kandidaat (vandaag: lijst-partij). Indirect: burger → tussenpersoon → kandidaat. 1848 = direct voor Tweede Kamer. Eerste Kamer = nog indirect (door provinciale staten gekozen)." }],
          woorden: [{ woord: "direct kiesrecht", uitleg: "Burger kiest zelf z'n vertegenwoordiger." }],
          theorie: "1848 introduceerde direct stemrecht voor Tweede Kamer; Eerste Kamer bleef en blijft indirect (provinciale staten kiezen).",
          niveaus: { basis: "Burgers stemmen direct.", simpeler: "Direct = jij stemt op kandidaat.", nogSimpeler: "Direct" },
        },
      },
      {
        q: "**Motie van wantrouwen** door de Tweede Kamer: wat is gevolg?",
        options: ["De minister moet aftreden", "De Tweede Kamer wordt ontbonden", "De wet wordt opnieuw besproken", "De rechter onderzoekt de minister"],
        answer: 0,
        wrongHints: [null, "Niet automatisch: pas als het kabinet valt, kunnen er nieuwe verkiezingen komen.", "Een motie van wantrouwen gaat niet over een wet, maar over vertrouwen.", "Een motie is een politiek middel, geen rechtszaak. Kan een minister zonder steun van de Kamer verder?"],
        uitlegPad: {
          stappen: [{ titel: "Vertrouwens-regel sinds 1848", tekst: "Ministers hebben vertrouwen van Tweede Kamer nodig om aan te blijven. Bij **motie van wantrouwen** (= meerderheid Kamer zegt 'wij vertrouwen u niet') → minister treedt af. Soms hele kabinet → nieuwe verkiezingen." }],
          woorden: [{ woord: "motie van wantrouwen", uitleg: "Verklaring van Tweede Kamer dat minister niet meer mag aanblijven." }],
          theorie: "Voorbeeld 2023: Rutte IV-kabinet viel niet over wantrouwen maar over asielbeleid. Bij motie wantrouwen → meestal direct vertrek.",
          niveaus: { basis: "Minister af.", simpeler: "Wantrouwen → minister moet stoppen.", nogSimpeler: "Aftreden" },
        },
      },
      {
        q: "Het document met **alle rechten en regels** van een staat heet:",
        options: ["Grondwet","Wetboek","Verdrag","Convenant"],
        answer: 0,
        wrongHints: [null, "Een wetboek bundelt losse wetten, zoals het Wetboek van Strafrecht. Welk document staat daarboven?", "Een verdrag is een afspraak tussen landen, niet de basis van één staat.", "Een convenant is een afspraak tussen partijen, vaak zonder harde regels."],
        uitlegPad: {
          stappen: [{ titel: "Grondwet = fundament", tekst: "**Grondwet** (constitutie) = hoogste wet. Alle andere wetten moeten daarmee in lijn zijn. Bevat staatsinrichting + grondrechten." }],
          woorden: [{ woord: "constitutie", uitleg: "Synoniem voor grondwet." }],
          theorie: "NL-grondwet is uit 1814/1815 (oudste basis) maar werd zwaar herzien in 1848 (Thorbecke) en 1983 (laatste grote herziening met o.a. discriminatie-verbod).",
          niveaus: { basis: "Grondwet.", simpeler: "Hoogste wet = grondwet.", nogSimpeler: "Grondwet" },
        },
      },
    ],
  },

  // ─── C. Trias politica + grondrechten ─────────────────────
  {
    title: "Trias politica — drie machten gescheiden",
    explanation:
      "**Trias politica** = scheiding der machten. Bedacht door **Montesquieu** (Franse Verlichting, 1748). Doel: geen enkele persoon of groep krijgt te veel macht.\n\n**De 3 machten in Nederland**:\n\n**1. Wetgevende macht** — maakt wetten\n• Regering (kabinet) + Tweede Kamer + Eerste Kamer **samen**.\n• Regering dient wet-voorstel in, Kamers debatteren en stemmen.\n\n**2. Uitvoerende macht** — voert wetten uit\n• Regering (= koning + ministers).\n• Voorbeeld: politie handhaaft, Belastingdienst int, scholen geven onderwijs.\n\n**3. Rechterlijke macht** — beoordeelt + spreekt recht\n• Onafhankelijke rechters: rechtbank, gerechtshof, Hoge Raad.\n• Voor levenslang benoemd → kan niet ontslagen worden door regering of parlement → echte onafhankelijkheid.\n\n**Waarom scheiding belangrijk**: anders zou bv. de regering eigen wetten kunnen maken én uitvoeren én zichzelf vrijspreken → dictatuur-risico.\n\n**Examen-truc**: bij 'wie doet X?'-vragen:\n• Wet maken → Tweede + Eerste Kamer (+ regering).\n• Wet uitvoeren → regering (ministers + ambtenaren).\n• Rechtspreken → onafhankelijke rechter.\n\n**Grondrechten 1848 + uitbreidingen**:\n• Sinds 1983: **discriminatie-verbod** (art. 1) = iedereen gelijke behandeling, geen onderscheid op ras/geloof/geslacht/seksuele geaardheid.\n• Recht op vrije meningsuiting, demonstreren, betoging.",
    checks: [
      {
        q: "Welke **3 machten** scheidt Montesquieu's trias politica?",
        options: ["Wetgevend / uitvoerend / rechterlijk", "Leger / politie / belasting", "Koning / ministers / volk", "Gemeente / provincie / Rijk"],
        answer: 0,
        wrongHints: [null, "Niet: die zijn allemaal onderdeel van de uitvoerende macht.", "Niet: dat is een rangorde van personen, geen scheiding van taken.", "Dat zijn de drie bestuurslagen, geen machten."],
        uitlegPad: {
          stappen: [{ titel: "W-U-R: wetgevend, uitvoerend, rechterlijk", tekst: "Trias = drie. Politica = staats-. Drie machten: wetten MAKEN (wetgevend), wetten UITVOEREN (uitvoerend), wetten BEOORDELEN/STRAFFEN (rechterlijk). Allemaal apart, zodat geen één alles bepaalt." }],
          woorden: [{ woord: "trias politica", uitleg: "Scheiding van de drie staatsmachten: wetgevend + uitvoerend + rechterlijk." }, { woord: "Montesquieu", uitleg: "Franse filosoof (1689-1755), Verlichting, schreef 'De l'esprit des lois' (1748)." }],
          theorie: "Toets-truc: ezelsbruggetje WUR — Wet maken, Uitvoeren, Recht spreken.",
          niveaus: { basis: "Wetgevend / uitvoerend / rechterlijk.", simpeler: "WUR = drie functies van staat", nogSimpeler: "WUR" },
        },
      },
      {
        q: "**Wie maakt een wet** in Nederland?",
        options: ["Regering en beide Kamers samen", "De koning, met zijn handtekening", "De minister die de wet bedenkt", "De rechters van de Hoge Raad"],
        answer: 0,
        wrongHints: [null, "De koning tekent wel, maar bedenkt en kiest de wet niet zelf.", "De minister dient een wetsvoorstel in, maar daarna moeten de Kamers stemmen.", "Niet: de rechter past de wet toe, maakt hem niet."],
        uitlegPad: {
          stappen: [{ titel: "Wet-traject", tekst: "1) Regering dient **wet-voorstel** in. 2) Tweede Kamer debatteert + stemt (meerderheid nodig). 3) Eerste Kamer toetst + stemt. 4) Koning + verantwoordelijke minister tekenen. 5) Publicatie in Staatsblad → wet is geldig." }],
          theorie: "Voorbeeld: nieuwe verkeerswet — minister van Infrastructuur dient in, beide Kamers nemen het aan, koning + minister tekenen.",
          niveaus: { basis: "Regering + 2 Kamers.", simpeler: "Wet = voorstel + 2 Kamers + handtekening", nogSimpeler: "Regering + Kamers" },
        },
      },
      {
        q: "**Rechters** worden benoemd voor:",
        options: ["Het leven","4 jaar","Tot 65 jaar precies","Tot de regering ze ontslaat"],
        answer: 0,
        wrongHints: [null, "Vier jaar is de termijn van de Tweede Kamer. Waarom zou een rechter niet steeds opnieuw benoemd willen worden?", "Ze gaan rond hun 70e met pensioen, niet op 65. Hoe lang geldt hun benoeming volgens de grondwet?", "Niet: dat zou hun onafhankelijkheid breken."],
        uitlegPad: {
          stappen: [{ titel: "Levenslange benoeming = onafhankelijkheid", tekst: "Rechters benoemd **voor het leven** (in praktijk tot pensioen ~70). Reden: een rechter mag GEEN angst hebben dat regering hem ontslaat als hij ongunstig oordeelt. Dat beschermt **onafhankelijkheid van de rechterlijke macht**." }],
          woorden: [{ woord: "onafhankelijkheid", uitleg: "Niet afhankelijk van een andere instantie voor je baan/oordeel." }],
          theorie: "Toets-link: in landen zonder onafhankelijke rechter (bv. dictaturen) kan regering rechters ontslaan die ongunstig oordelen — dan is rechtspraak een schijn-instituut.",
          niveaus: { basis: "Voor het leven.", simpeler: "Levenslang = onafhankelijk van regering", nogSimpeler: "Levenslang" },
        },
      },
      {
        q: "Welk **grondrecht** uit 1983 art. 1 verbiedt **discriminatie**?",
        options: ["Gelijke behandeling","Vrijheid van godsdienst","Onderwijsvrijheid","Vrijheid van pers"],
        answer: 0,
        wrongHints: [null, "Vrijheid van godsdienst is een grondrecht uit 1848, maar het gaat over je eigen geloof. Welk artikel uit 1983 gaat over discriminatie?", "Onderwijsvrijheid staat in artikel 23 en komt al uit 1848. Het discriminatieverbod staat ergens anders.", "Persvrijheid staat in artikel 7 en gaat over je mening drukken. Het discriminatieverbod staat ergens anders."],
        uitlegPad: {
          stappen: [{ titel: "Art. 1 grondwet (1983)", tekst: "*'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook, is niet toegestaan.'* Toegevoegd in 1983-grondwetsherziening." }],
          woorden: [{ woord: "discriminatie", uitleg: "Ongelijke behandeling op basis van een persoonlijk kenmerk." }],
          theorie: "Voor het examen: art. 1 = anti-discriminatie. Daterend 1983 (NIET 1848 — vergissing-val).",
          niveaus: { basis: "Gelijke behandeling.", simpeler: "Art. 1 = anti-discriminatie", nogSimpeler: "Anti-discriminatie" },
        },
      },
      {
        q: "Een gemeente weigert iemand een baan vanwege **religie**. Welke wet is overtreden?",
        options: ["Grondwet artikel 1", "Grondwet artikel 7", "Grondwet artikel 23", "Grondwet artikel 6"],
        answer: 0,
        wrongHints: [null, "Artikel 7 gaat over vrijheid van meningsuiting. Welk artikel verbiedt discriminatie?", "Artikel 23 gaat over de vrijheid van onderwijs.", "Artikel 6 gaat over vrijheid van godsdienst: je mag je geloof belijden. Maar hier wordt iemand anders behandeld vanwege zijn geloof."],
        uitlegPad: {
          stappen: [{ titel: "Religie + baan = art. 1", tekst: "Discriminatie op godsdienst bij werk = directe overtreding van **grondwet art. 1**. Slachtoffer kan klagen bij **College voor de Rechten van de Mens** of naar de rechter." }],
          theorie: "Discriminatie-gronden in art. 1: godsdienst / levensovertuiging / politieke gezindheid / ras / geslacht / handicap / seksuele gerichtheid / 'of welke grond dan ook' (open lijst).",
          niveaus: { basis: "Art. 1 grondwet.", simpeler: "Religie-discriminatie = art. 1 gelijke behandeling", nogSimpeler: "Art. 1" },
        },
      },
    ],
  },

  // ─── D. Regering + parlement vandaag ──────────────────────
  {
    title: "Regering, parlement, koning vandaag",
    explanation:
      "Hoe is **Nederland nu** ingericht?\n\n**1. Koning Willem-Alexander (2013-)** — staatshoofd, ceremonieel.\n• Tekent wetten + benoemt formeel regering.\n• Houdt **Troonrede** op derde dinsdag van september (= Prinsjesdag).\n• Geen politieke uitspraken in openbaar.\n• Onschendbaar (zie deel B).\n\n**2. Regering (kabinet)** — uitvoerende macht.\n• Koning + ministers + staatssecretarissen.\n• Voorzitter = **Minister-President** (de premier).\n• Ministers leiden departementen (Onderwijs, Financiën, Justitie, etc.).\n• Komen samen in **Ministerraad** (elke vrijdag).\n\n**3. Parlement (Staten-Generaal)** — wetgevende macht (samen met regering).\n• **Tweede Kamer**: 150 leden, gekozen door volk, eens per 4 jaar (of eerder bij val kabinet).\n• **Eerste Kamer**: 75 leden, gekozen door **provinciale staten** (indirect).\n• Tweede Kamer = controleert regering, dient wetten in, kan motie van wantrouwen indienen.\n• Eerste Kamer = toetst wetten op kwaliteit + grondwettigheid.\n\n**4. Verkiezingen**:\n• Tweede Kamer: elke 4 jaar (of eerder).\n• Provinciale staten: elke 4 jaar (laatste 2023) → kiezen Eerste Kamer.\n• Europees Parlement: elke 5 jaar (laatste 2024).\n• Gemeenteraad: elke 4 jaar.\n\n**5. Politieke partijen**:\n• Veel partijen in de Tweede Kamer, zoals PVV, GL-PvdA, VVD, D66, CDA, SP en BBB.\n• Geen partij heeft een meerderheid → **coalitie** nodig (meerdere partijen samen).\n\n**Onthoud voor het examen**:\n• 150 = Tweede Kamer, 75 = Eerste Kamer.\n• Premier ≠ koning. Koning is staatshoofd, premier leidt regering.\n• Prinsjesdag = 3e dinsdag september = Troonrede + Miljoenennota.",
    checks: [
      {
        q: "Hoeveel zetels heeft de **Tweede Kamer**?",
        options: ["150","75","100","225"],
        answer: 0,
        wrongHints: [null, "Dat getal hoort bij de Eerste Kamer, niet de Tweede.", "Honderd klinkt rond, maar de Tweede Kamer is groter: sinds 1956 heeft ze meer zetels.", "Dat is de som van beide Kamers samen, niet alleen de Tweede Kamer."],
        uitlegPad: {
          stappen: [{ titel: "150 = Tweede Kamer", tekst: "Sinds 1956 heeft de Tweede Kamer **150 leden** (eerder 100). Een partij heeft meerderheid bij **76 of meer** zetels. Geen enkele partij heeft dat alleen → coalitie." }],
          theorie: "Examen-feit: Tweede Kamer 150, Eerste Kamer 75. Onthoud: 'Tweede' is groter (150) dan 'Eerste' (75) — tegenintuïtief maar zo is het.",
          niveaus: { basis: "150.", simpeler: "Tweede Kamer = 150 leden", nogSimpeler: "150" },
        },
      },
      {
        q: "Wie kiezen de leden van de **Eerste Kamer**?",
        options: ["Provinciale Staten","Burgers direct","Koning","Tweede Kamer"],
        answer: 0,
        wrongHints: [null, "Niet — directe verkiezing alleen voor Tweede Kamer.", "Niet — sinds 1848 niet meer.", "Niet — Kamers kiezen elkaar niet."],
        uitlegPad: {
          stappen: [{ titel: "Indirect via provincies", tekst: "Burgers stemmen op **provinciale staten** (provinciale verkiezingen). Provinciale staten kiezen vervolgens de **Eerste Kamer** (75 leden). Dus indirect kiesrecht voor de Eerste Kamer — zoals sinds 1848 geregeld." }],
          woorden: [{ woord: "indirect kiesrecht", uitleg: "Burger kiest een tussenpersoon die op zijn beurt de uiteindelijke vertegenwoordiger kiest." }],
          niveaus: { basis: "Provinciale staten.", simpeler: "Eerste Kamer = via provincies", nogSimpeler: "Provincies" },
        },
      },
      {
        q: "Wanneer is **Prinsjesdag**?",
        options: ["Derde dinsdag van september","Derde dinsdag van mei","Eerste dinsdag van oktober","Laatste vrijdag van augustus"],
        answer: 0,
        wrongHints: [null, "In mei is Verantwoordingsdag. Prinsjesdag, met de Troonrede, valt in een andere maand.", "Dan zijn de begrotingsdebatten al bezig. De Troonrede komt eerder.", "Eind augustus is het nog zomerreces in de Kamer."],
        uitlegPad: {
          stappen: [{ titel: "3e dinsdag september", tekst: "**Prinsjesdag** = derde dinsdag van september. Koning leest **Troonrede** voor (regerings-plannen volgend jaar) in Den Haag. Minister van Financiën biedt **Miljoenennota** aan (begroting). De Gouden Koets wordt voorlopig niet gebruikt." }],
          theorie: "Onthoud: 3-9-D (derde dinsdag, september = 9e maand, Dinsdag).",
          niveaus: { basis: "Derde dinsdag september.", simpeler: "Prinsjesdag = 3e di sept", nogSimpeler: "Sept" },
        },
      },
      {
        q: "Wie is **voorzitter** van de regering (= minister-president)?",
        options: ["Politicus namens de coalitiepartijen", "De koning, als hoofd van de staat", "Voorzitter van de Tweede Kamer", "Politicus gekozen door alle kiezers"],
        answer: 0,
        wrongHints: [null, "Niet: de koning is staatshoofd, geen premier.", "Niet: de Kamervoorzitter leidt de debatten in de Kamer.", "In Nederland kiezen we geen premier rechtstreeks: we kiezen de Tweede Kamer."],
        uitlegPad: {
          stappen: [{ titel: "Premier = politiek, koning = staatshoofd", tekst: "**Minister-president** (premier) leidt het kabinet. Hij/zij wordt na verkiezingen voorgedragen door de partij die de coalitie vormt. Koning benoemt formeel, maar de keuze is politiek. Premier = woordvoerder kabinet + voorzitter ministerraad." }],
          theorie: "Onderscheid: koning = staatshoofd (ceremonieel). Premier = regeringsleider (politiek). Beide bestaan naast elkaar.",
          niveaus: { basis: "Politicus uit coalitie.", simpeler: "Premier ≠ koning. Premier = politicus", nogSimpeler: "Politicus" },
        },
      },
      {
        q: "Wat gebeurt er normaal **na de val** van een kabinet?",
        options: ["Nieuwe Tweede Kamer-verkiezingen","De koning kiest een nieuwe premier","De oppositie gaat regeren","Er komt een volksraadpleging"],
        answer: 0,
        wrongHints: [null, "Sinds 2012 speelt de koning geen rol meer bij de formatie. Wie bepaalt wie er gaat regeren?", "De oppositie heeft geen meerderheid, anders was ze geen oppositie. Wat is dan nodig?", "Een referendum gaat over één onderwerp, niet over wie er regeert."],
        uitlegPad: {
          stappen: [{ titel: "Val → demissionair → verkiezingen", tekst: "Kabinet valt = ministers leveren ontslag in bij koning. Kabinet wordt **demissionair** (= alleen lopende zaken). Koning ontbindt Tweede Kamer → nieuwe verkiezingen → formatie → nieuw kabinet." }],
          woorden: [{ woord: "demissionair", uitleg: "Een kabinet dat is afgetreden maar nog wel lopende taken vervult tot een nieuw kabinet er is." }],
          theorie: "Voorbeeld: Rutte IV viel juli 2023 → demissionair → verkiezingen nov 2023 → formatie → kabinet Schoof juli 2024.",
          niveaus: { basis: "Nieuwe verkiezingen.", simpeler: "Val kabinet → verkiezingen", nogSimpeler: "Verkiezingen" },
        },
      },
    ],
  },

  // ─── E. Eind-opdracht ─────────────────────────────────────
  {
    title: "Examen-eindopdracht — staatsinrichting NL",
    explanation:
      "Mix van vragen over staatsinrichting Nederland 1848-nu. Echte VMBO-eindexamen-stijl.\n\n**Strategie**:\n• Lees vraag zorgvuldig — let op of het over 1848 of vandaag gaat.\n• Bij twijfel: sluit duidelijk foute opties uit.\n• Onthoud kerngetallen: 1848 grondwet, 1917/1919 algemeen kiesrecht, 150/75 Kamers.\n\nVeel succes!",
    checks: [
      {
        q: "Welk **politiek systeem** heeft Nederland sinds 1848?",
        options: ["Constitutionele monarchie", "Absolute monarchie", "Republiek met een president", "Verlicht despotisme"],
        answer: 0,
        wrongHints: [null, "Niet: die was vóór 1848.", "Niet: Nederland heeft nog een koning.", "Dan regeert een vorst alleen, maar 'verlicht'. Na 1848 mocht de koning juist niet meer alleen beslissen."],
        uitlegPad: {
          stappen: [{ titel: "Twee labels samen", tekst: "**Constitutionele monarchie** = koning gebonden aan grondwet. **Parlementaire democratie** = parlement = baas, ministers verantwoordelijk aan parlement. NL is beide tegelijk sinds 1848." }],
          niveaus: { basis: "Constitutionele monarchie + parlementaire democratie.", simpeler: "Koning + grondwet + parlement", nogSimpeler: "Constitutionele monarchie" },
        },
      },
      {
        q: "Wanneer kregen **vrouwen** stemrecht in Nederland?",
        options: ["1919","1848","1917","1965"],
        answer: 0,
        wrongHints: [null, "In 1848 mochten alleen rijke mannen stemmen.", "In 1917 kregen alle mannen kiesrecht. Vrouwen konden toen wel gekozen worden, maar nog niet zelf stemmen.", "Te laat: in 1965 stemden vrouwen al tientallen jaren."],
        uitlegPad: {
          stappen: [{ titel: "1917 mannen, 1919 vrouwen", tekst: "**Algemeen mannen-kiesrecht 1917**. **Vrouwen-kiesrecht passief 1917** (mochten gekozen worden, eerst Suze Groeneweg, SDAP), **actief 1919** (mochten zelf stemmen). Bekende voorvechtster: **Aletta Jacobs**, eerste vrouwelijke arts NL." }],
          woorden: [{ woord: "passief kiesrecht", uitleg: "Recht om gekozen te worden." }, { woord: "actief kiesrecht", uitleg: "Recht om te stemmen." }],
          niveaus: { basis: "1919.", simpeler: "Vrouwen actief kiesrecht 1919", nogSimpeler: "1919" },
        },
      },
      {
        q: "*'De koning is onschendbaar, de ministers zijn verantwoordelijk.'* — sinds welk jaar?",
        options: ["1848","1814","1917","1983"],
        answer: 0,
        wrongHints: [null, "Eerste grondwet, nog geen ministeriële verantwoordelijkheid.", "Algemeen kiesrecht, niet hier.", "Discriminatie-artikel, niet ministeriële verantwoordelijkheid."],
        uitlegPad: {
          stappen: [{ titel: "1848-kernregel", tekst: "Deze regel is dé hoeksteen van Thorbecke's 1848-grondwet — moment waarop NL van absolute naar constitutionele monarchie ging." }],
          niveaus: { basis: "1848.", simpeler: "Regel komt uit grondwet 1848", nogSimpeler: "1848" },
        },
      },
      {
        q: "Welke macht is **rechterlijk**?",
        options: ["Rechtbanken en de Hoge Raad", "Tweede Kamer en Eerste Kamer", "Regering en ambtenaren", "Gemeenteraad en Provinciale Staten"],
        answer: 0,
        wrongHints: [null, "De Kamers maken samen met de regering de wetten: dat is de wetgevende macht.", "Regering en ambtenaren voeren de wetten uit: dat is de uitvoerende macht.", "Dat zijn de volksvertegenwoordigers van gemeente en provincie. Zij spreken geen recht."],
        uitlegPad: {
          stappen: [{ titel: "Rechterlijke macht = onafhankelijke rechters", tekst: "Wetgevend = Kamers + regering. Uitvoerend = regering + ambtenaren. Rechterlijk = onafhankelijke rechters (rechtbank → gerechtshof → Hoge Raad)." }],
          niveaus: { basis: "Rechtbanken + Hoge Raad.", simpeler: "Rechterlijk = rechters", nogSimpeler: "Rechters" },
        },
      },
      {
        q: "Welke 4 partijen vormden in 2024 samen het **kabinet Schoof**?",
        options: ["PVV + VVD + NSC + BBB","PvdA + GL + D66 + CDA","SP + ChristenUnie + SGP + DENK","FvD + JA21 + BVNL + 50Plus"],
        answer: 0,
        wrongHints: [null, "Oppositie-partijen 2024, geen coalitie.", "Kleinere/oppositie-partijen 2024.", "Rechts-conservatieve oppositie, geen coalitie."],
        uitlegPad: {
          stappen: [{ titel: "Coalitie 2024", tekst: "Na Tweede Kamer-verkiezingen 22 november 2023 (PVV grootste): formatie leidde tot **PVV + VVD + NSC + BBB**. Premier: Dick Schoof (technocraat, niet partij-gebonden). Beëdigd 2 juli 2024." }],
          theorie: "Onthoud-truc: 'P-V-N-B' (PVV-VVD-NSC-BBB).",
          niveaus: { basis: "PVV + VVD + NSC + BBB.", simpeler: "Coalitie Schoof = P-V-N-B", nogSimpeler: "PVNB" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const staatsinrichting1848 = {
  id: "staatsinrichting-1848",
  title: "Staatsinrichting Nederland 1848-nu",
  emoji: "🏛️",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "vmbo-gt-CSE",
  sloThema: "Geschiedenis + Staatsinrichting VMBO — Thorbecke + grondwet 1848",
  prerequisites: [
    { id: "tijdvakken-geschiedenis", title: "Tijdvakken", niveau: "po-1F" },
    { id: "nederlandse-staat-maatschappijleer", title: "De Nederlandse staat", niveau: "po-1F" },
    { id: "politiek-democratie-po", title: "Politiek & democratie", niveau: "po-1F" },
  ],
  intro:
    "Hoe ontstond ons huidige politieke systeem? Van koning Willem II (1848) via Thorbecke naar koning Willem-Alexander + de regering van nu. VMBO-GT eindexamen-stof. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "staatsinrichting", "grondwet", "Thorbecke", "1848",
    "constitutionele monarchie", "parlementaire democratie",
    "trias politica", "Montesquieu",
    "Tweede Kamer", "Eerste Kamer", "regering", "kabinet",
    "minister-president", "premier", "Prinsjesdag",
    "kiesrecht", "Aletta Jacobs", "Willem II", "Willem-Alexander",
    "ministeriële verantwoordelijkheid", "onschendbaar",
    "grondrecht", "discriminatie", "art. 1",
  ],
  chapters,
  steps,
};

export default staatsinrichting1848;
