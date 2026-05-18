// Leerpad: Informatiebronnen — groep 6-8 PO.
// Cito-Doorstroomtoets onderdeel "Informatiebronnen" (10 van 40 studievaardigheden-
// vragen, 25%). Tweede grootste Cito-gat dat 4-agent-audit B 2026-05-18 vond.
//
// 5 stappen × ~5 checks = ~25 Cito-stijl oefenvragen.
// Referentieniveau 1F.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  highlight: "#ffd54f",
  accent: "#ff6b35",
  alt: "#42a5f5",
};

const stepEmojis = ["🔍", "📖", "📑", "✅", "🏆"];

const chapters = [
  { letter: "A", title: "Welke bron kies je?", emoji: "🔍", from: 0, to: 0 },
  { letter: "B", title: "Woordenboek & alfabetisch zoeken", emoji: "📖", from: 1, to: 1 },
  { letter: "C", title: "Inhoudsopgave & index", emoji: "📑", from: 2, to: 2 },
  { letter: "D", title: "Betrouwbaarheid + fake news", emoji: "✅", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Welke bron ────────────────────────────────────────
  {
    title: "Welke informatie-bron pas je waar?",
    explanation:
      "Voor verschillende vragen gebruik je **verschillende bronnen**. Cito test of je de juiste kiest.\n\n**Bron-soorten**:\n• **Woordenboek** *(Van Dale)*: voor **woord-betekenis**, spelling. Bv. wat betekent 'oligarchie'?\n• **Encyclopedie** *(Wikipedia, Winkler Prins)*: voor **brede info** over onderwerp. Bv. 'Hoe ontstond de Tweede Wereldoorlog?'.\n• **Atlas**: voor **kaarten + topografie**. Bv. 'Waar ligt Kazachstan?'.\n• **Schoolboek**: voor **vak-specifieke** uitleg op jouw niveau.\n• **Krantenartikel**: voor **actuele** gebeurtenissen (laatste maand/jaar).\n• **Wetenschappelijk artikel**: voor **bewezen onderzoek** (moeilijker te lezen, voor wie dieper wil).\n• **Internet-zoekmachine**: snelle eerste check, MAAR — niet alles is waar.\n• **Mensen** *(juf, ouder, expert)*: voor uitleg + persoonlijke ervaring.\n\n**Cito-truc**: kijk wat de vraag ZOEKT.\n• Betekenis-vraag → woordenboek.\n• 'Wat is...' over onderwerp → encyclopedie.\n• 'Waar ligt...' → atlas.\n• 'Wat gebeurde gisteren?' → krant.\n\n**Veel-gemaakte fout**: alles via Wikipedia. Sommige info staat sneller in een atlas of woordenboek. Bovendien: Wikipedia is niet altijd het meest betrouwbaar — daarover meer in deel D.",
    checks: [
      {
        q: "Je wilt weten **wat 'innovatie' betekent**. Welke bron?",
        options: ["Woordenboek","Atlas","Krant","Encyclopedie"],
        answer: 0,
        wrongHints: [null, "Een atlas heeft kaarten, geen woord-betekenis.", "Krant geeft nieuws, geen betekenis.", "Encyclopedie geeft brede info — voor betekenis is woordenboek directer."],
        uitlegPad: {
          stappen: [{ titel: "Betekenis = woordenboek", tekst: "Een woordenboek (Van Dale, online of papier) geeft per woord een korte betekenis. 'Innovatie = vernieuwing'. Encyclopedie geeft veel meer info dan je nodig hebt." }],
          woorden: [{ woord: "woordenboek", uitleg: "Lijst van woorden met betekenis + spelling, alfabetisch." }],
          theorie: "Cito-regel: voor woord-betekenis altijd woordenboek (Van Dale). Voor concept-uitleg encyclopedie (Wikipedia).",
          voorbeelden: [{ type: "controle", tekst: "Wat betekent 'oligarchie'? → woordenboek: 'regering door enkele personen'." }],
          basiskennis: [{ onderwerp: "Niet verwarren", uitleg: "Woordenboek = wat het woord BETEKENT. Encyclopedie = wat het FENOMEEN is (geschiedenis, voorbeelden, etc.)." }],
          niveaus: { basis: "Betekenis = woordenboek. A.", simpeler: "Voor wat een woord betekent → woordenboek. A.", nogSimpeler: "Woordenboek = A." },
        },
      },
      {
        q: "Je zoekt **waar Kazachstan ligt** op de wereldkaart. Welke bron?",
        options: ["Atlas","Woordenboek","Encyclopedie","Krant"],
        answer: 0,
        wrongHints: [null, "Woordenboek heeft geen kaarten.", "Encyclopedie noemt wel land, maar kaart sneller.", "Krant heeft geen wereldkaarten."],
        uitlegPad: {
          stappen: [{ titel: "Plek = atlas", tekst: "Een atlas is een **kaartenboek**. Voor 'waar ligt...' altijd atlas (papier of online via Google Maps)." }],
          woorden: [{ woord: "atlas", uitleg: "Kaartenboek met landen, steden, water, gebergte etc." }],
          theorie: "Voor topografie + ligging → atlas. Voor land-info (bevolking, taal) → encyclopedie.",
          voorbeelden: [{ type: "controle", tekst: "'Wat zijn de hoofdsteden van Europa?' → atlas-pagina Europa." }],
          niveaus: { basis: "Waar ligt = atlas. A.", simpeler: "Voor kaarten en ligging → atlas. A.", nogSimpeler: "Atlas = A." },
        },
      },
      {
        q: "Je wilt weten **wat er gisteren in het journaal was**. Welke bron?",
        options: ["Krant of nieuws-site","Woordenboek","Atlas","Encyclopedie"],
        answer: 0,
        wrongHints: [null, "Woordenboek heeft geen nieuws.", "Atlas is kaartenboek, geen nieuws.", "Encyclopedie loopt achter op nieuws."],
        uitlegPad: {
          stappen: [{ titel: "Actueel nieuws = krant", tekst: "Voor 'wat gebeurde gisteren' → krant of nieuws-site (NOS, AD, Volkskrant). Encyclopedie is altijd weken/maanden achter." }],
          woorden: [{ woord: "actueel", uitleg: "Van vandaag/deze week." }],
          theorie: "Actueel → krant. Verleden (>1 jaar) → encyclopedie of geschiedenisboek.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'Wie won gisteren de wedstrijd?' → sport-krant of nu.nl." }],
          niveaus: { basis: "Nieuws = krant. A.", simpeler: "Actueel → krant of nieuws-site. A.", nogSimpeler: "Krant = A." },
        },
      },
      {
        q: "Welke bron is het beste voor een **werkstuk over de Romeinen**?",
        options: ["Encyclopedie + schoolboek","Woordenboek alleen","Atlas alleen","Krant van vandaag"],
        answer: 0,
        wrongHints: [null, "Woordenboek geeft alleen woord-betekenis, te weinig info.", "Atlas heeft kaarten maar geen geschiedenis-uitleg.", "Krant heeft geen Romeinse geschiedenis."],
        uitlegPad: {
          stappen: [{ titel: "Werkstuk = brede bron", tekst: "Een werkstuk vraagt **brede info** + **structuur**. Combineer **encyclopedie** (Wikipedia of Winkler Prins) voor algemeen + **schoolboek** voor jouw-niveau-uitleg. Atlas erbij als je kaarten nodig hebt." }],
          niveaus: { basis: "Encyclopedie + schoolboek. A.", simpeler: "Werkstuk → brede info → encyclopedie. A.", nogSimpeler: "Encyclopedie = A." },
        },
      },
      {
        q: "Welke informatie krijg je het BESTE van **een expert/leerkracht**?",
        options: ["Uitleg op jouw niveau + jouw vraag beantwoord","Een lijst van alle feiten","Een kaart","De spelling van een woord"],
        answer: 0,
        wrongHints: [null, "Daarvoor pak je een naslag-bron, geen mens.", "Daarvoor is een atlas.", "Daarvoor is een woordenboek."],
        uitlegPad: {
          stappen: [{ titel: "Mens = persoonlijke uitleg", tekst: "Een expert kan **luisteren naar JOUW vraag** en uitleg geven op JOUW niveau — beter dan een boek dat alles vertelt. Vraag de juf voor uitleg, niet voor spelling." }],
          niveaus: { basis: "Expert = persoonlijke uitleg. A.", simpeler: "Mens kan luisteren en jouw vraag aanpakken. A.", nogSimpeler: "Expert = A." },
        },
      },
    ],
  },

  // ─── B. Woordenboek & alfabetisch zoeken ──────────────────
  {
    title: "Woordenboek — alfabetisch zoeken",
    explanation:
      "In een woordenboek staan woorden **alfabetisch**: van A naar Z. Cito test of je snel kunt zoeken.\n\n**Alfabetische volgorde — Cito-regels**:\n1. Eerst kijken naar de **eerste letter** van het woord.\n2. Gelijke eerste letter? → vergelijk **tweede letter**.\n3. Gelijke tweede ook? → derde letter, etc.\n\n**Voorbeeld**: 'banaan' komt voor 'beer' (a komt vóór e in 'b**a**naan' vs 'b**e**er').\n\n**Cito-bladzijde-truc**: bovenaan elke bladzijde staan **trefwoorden** (eerste + laatste woord op die bladzijde). Bv. 'baan — bever'. Het gezochte woord 'banaan' valt daarbinnen → die bladzijde.\n\n**Trefwoord vinden**:\n• 'kat' opzoeken? → 'k' → 'ka...' → 'kat'.\n• Hoofdvorm gebruiken: 'liep' → kijken bij 'lopen' (hele werkwoord). 'kinderen' → 'kind' (enkelvoud).\n\n**Cito-letters die op elkaar lijken**:\n• Geen onderscheid IJ vs Y in oudere woordenboeken — kijk bij I.\n• Onze (Nederlandse) alfabet: A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z (26 letters).",
    checks: [
      {
        q: "In het woordenboek: welk woord komt **eerst** alfabetisch?",
        options: ["aap","appel","auto","azijn"],
        answer: 0,
        wrongHints: [null, "Bijna — vergelijk 2e letter: aa vs ap. Aa < ap.", "Vergelijk: a-a vs a-u. Aa < au.", "Vergelijk: a-a vs a-z. Aa < az."],
        uitlegPad: {
          stappen: [{ titel: "Tweede letter vergelijken", tekst: "Alle 4 beginnen met **a**. Kijk dan naar 2e letter: aap (**a**), appel (**p**), auto (**u**), azijn (**z**). A < P < U < Z dus 'aap' eerst." }],
          woorden: [{ woord: "alfabetisch", uitleg: "Volgorde A-B-C-D...Z." }],
          theorie: "Eerste letter hetzelfde? → tweede letter. Tweede ook hetzelfde? → derde letter. Etc.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'kat' < 'koe' want a < o in 2e letter." }],
          basiskennis: [{ onderwerp: "Alfabet onthouden", uitleg: "Bij twijfel: zing het ABC-liedje door. a-b-c-d-e-f-g, h-i-j-k-l-m-n-o-p..." }],
          niveaus: { basis: "aap eerst (aa<ap<au<az). A.", simpeler: "Alle a-, dan 2e letter: a<p<u<z. → aap. A.", nogSimpeler: "Aap. A." },
        },
      },
      {
        q: "Op een bladzijde staan bovenaan: *'koers — komkommer'*. Welk woord vind je op deze bladzijde?",
        options: ["kok","kameel","krant","loek"],
        answer: 0,
        wrongHints: [null, "'Kameel' start met 'ka' — komt VOOR 'koers' op kaart.", "'Krant' komt NA 'komkommer' (kr > kom).", "'Loek' begint met 'l' — andere bladzijde."],
        uitlegPad: {
          stappen: [{ titel: "Tussen 2 trefwoorden", tekst: "Bovenaan staan **eerste + laatste woord** van die bladzijde. 'koers — komkommer' → ergens daartussen vind je 'kok' (koers < kok < komkommer in alfabet)." }],
          woorden: [{ woord: "trefwoord", uitleg: "Eerste/laatste woord bovenaan een woordenboek-bladzijde." }],
          theorie: "Cito-truc: vergelijk gezocht woord met trefwoorden. Eerste-trefwoord ≤ gezochte ≤ laatste-trefwoord → goede bladzijde.",
          voorbeelden: [{ type: "controle", tekst: "Trefwoorden 'app — auto'. 'Aubergine' past (auto < aubergine? Nee — kijk weer: 'au' = 'au', dan 't' vs 'b' → auto < aubergine). Dus zit hier niet. Volgende bladzijde." }],
          basiskennis: [{ onderwerp: "Wat als woord trefwoord IS", uitleg: "Als gezochte woord exact = trefwoord, dan staat het op die bladzijde (vaak helemaal bovenaan of onderaan)." }],
          niveaus: { basis: "Kok past tussen koers en komkommer. A.", simpeler: "koers < kok < komkommer = ja, kok zit ertussen. A.", nogSimpeler: "Kok = A." },
        },
      },
      {
        q: "Je zoekt **'liep'** in het woordenboek. Onder welk woord vind je het?",
        options: ["lopen","lieg","liep","leven"],
        answer: 0,
        wrongHints: [null, "Geen woord — kijk naar het hele werkwoord.", "Niet — andere stam.", "Niet — als losse vorm staat 't niet."],
        uitlegPad: {
          stappen: [{ titel: "Hele werkwoord opzoeken", tekst: "Vervoegde werkwoorden (liep, loop, lopen) staan onder **hele werkwoord = 'lopen'**. Vergeet niet: 'kat-katten' staat onder 'kat' (enkelvoud)." }],
          woorden: [{ woord: "hele werkwoord", uitleg: "Vorm op -en: lopen, denken, zwemmen." }],
          theorie: "Vervoegde vorm → herleid naar hele werkwoord. Meervoud → herleid naar enkelvoud.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'gegeten' → eten. 'kinderen' → kind. 'aardigste' → aardig." }],
          basiskennis: [{ onderwerp: "Onregelmatig", uitleg: "'liep' = verleden tijd van 'lopen'. 'Was' = 'zijn'. 'Zag' = 'zien'." }],
          niveaus: { basis: "Liep → lopen. A.", simpeler: "Vervoegd werkwoord → opzoeken onder hele werkwoord. A.", nogSimpeler: "Lopen = A." },
        },
      },
      {
        q: "Welke 3 woorden staan in **alfabetische volgorde**?",
        options: ["appel, banaan, citroen","banaan, appel, citroen","citroen, banaan, appel","appel, citroen, banaan"],
        answer: 0,
        wrongHints: [null, "Niet — appel komt VOOR banaan.", "Niet — citroen komt NA banaan.", "Niet — banaan komt VOOR citroen."],
        uitlegPad: {
          stappen: [{ titel: "A-B-C", tekst: "**a**ppel (a) → **b**anaan (b) → **c**itroen (c). A → B → C = alfabetische volgorde ✓." }],
          niveaus: { basis: "a-b-c → appel-banaan-citroen. A.", simpeler: "Volgorde a-b-c: appel, banaan, citroen. A.", nogSimpeler: "ABC = A." },
        },
      },
      {
        q: "Het woord **'oligarchie'** — hoe spel je het in een Cito-vraag waarbij je het opzoekt? Welk woord ligt het DICHTSTE bij?",
        options: ["oliebol","monarchie","democratie","oligine"],
        answer: 0,
        wrongHints: [null, "Niet — begint met 'm', andere bladzijde.", "Niet — begint met 'd'.", "Niet bestaand woord."],
        uitlegPad: {
          stappen: [{ titel: "Eerste 3 letters tellen", tekst: "**'oli'** is de start. Op de bladzijde 'oliebol — olijfboom' zou 'oligarchie' staan. Andere woorden met 'mon-', 'dem-' staan op compleet andere bladzijden." }],
          niveaus: { basis: "Oliebol — zelfde start. A.", simpeler: "'Oli'-woorden bij elkaar. A.", nogSimpeler: "Oliebol = A." },
        },
      },
    ],
  },

  // ─── C. Inhoudsopgave & index ─────────────────────────────
  {
    title: "Inhoudsopgave & index — info zoeken in boek",
    explanation:
      "In een boek (encyclopedie, schoolboek, naslagwerk) zoek je niet alfabetisch door alles. Je gebruikt **inhoudsopgave** (vooraan) of **index** (achteraan).\n\n**Inhoudsopgave** (vooraan):\n• Lijst van **hoofdstukken** + paginanummer.\n• Geeft **overzicht** van wat er IN het boek staat.\n• Bv. 'Hoofdstuk 3 — Romeinen ... blz 45'.\n\n**Index** = **trefwoordenregister** (achteraan):\n• **Alfabetische** lijst van trefwoorden + paginanummers.\n• Geeft snel toegang tot **specifieke onderwerpen**.\n• Bv. 'Caesar ... 47, 89-91, 156'.\n\n**Welke gebruik je wanneer?**\n• Wil je weten of het boek **GEHEEL over X gaat** → inhoudsopgave.\n• Wil je weten **WAAR een specifiek woord staat** → index.\n• Bv. werkstuk Romeinen, je hebt Wikipedia + boek. In boek 'Caesar' opzoeken → **index**.\n\n**Cito-vraag-favoriet**: bij encyclopedie of schoolboek vraag de Cito vaak: 'In welk hoofdstuk vind je info over X?' (= inhoudsopgave-vaardigheid) of 'Op welke bladzijde vind je een gegeven feit?' (= index).\n\n**Bibliotheek-klassen** *(bonus, vaak een Cito-vraag)*: in de bib hebben boeken classificatie-nummers (bv. 870 voor geschiedenis NL, 580 voor planten). Maar voor groep 8 voldoende: **fictie** (verhalen) staat op **schrijver alfabetisch**, **non-fictie** (waar gebeurd) op **onderwerp-nummer**.",
    checks: [
      {
        q: "Welk **deel van een boek** geeft een lijst van hoofdstukken vooraf?",
        options: ["Inhoudsopgave","Index","Voorwoord","Glossarium"],
        answer: 0,
        wrongHints: [null, "Index is alfabetisch + achterin.", "Voorwoord is een tekst, geen lijst.", "Glossarium is een woordenlijst met betekenissen."],
        uitlegPad: {
          stappen: [{ titel: "Vooraan = inhoudsopgave", tekst: "Vooraan in een boek staat de **inhoudsopgave** met hoofdstukken + paginanummers in volgorde. Achteraan staat de **index** (trefwoorden alfabetisch)." }],
          woorden: [{ woord: "inhoudsopgave", uitleg: "Lijst hoofdstukken met paginanummers vooraan in boek." }],
          theorie: "Vooraan = inhoudsopgave (volgorde). Achteraan = index (alfabetisch).",
          niveaus: { basis: "Inhoudsopgave. A.", simpeler: "Lijst hoofdstukken vooraf = inhoudsopgave. A.", nogSimpeler: "Inhoudsopgave = A." },
        },
      },
      {
        q: "Je zoekt in een geschiedenisboek **alles over 'Karel V'**. Welk deel kun je het beste raadplegen?",
        options: ["Index — daar staan alle pagina's met Karel V","Inhoudsopgave","Glossarium","Voorwoord"],
        answer: 0,
        wrongHints: [null, "Inhoudsopgave noemt hoofdstuk, maar index alle plekken.", "Glossarium is betekenis, geen plek-vinder.", "Voorwoord is niet zoek-tool."],
        uitlegPad: {
          stappen: [{ titel: "Specifiek = index", tekst: "Wil je **ALLE plekken** waar 'Karel V' voorkomt? → index (achteraan). 'Karel V ... 47, 89-91, 156' = drie verspreide plekken in het boek." }],
          theorie: "Index = trefwoorden + paginanummers, alfabetisch. Beste zoek-tool voor specifieke namen/begrippen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Zoek 'Anne Frank' in een WO2-boek → kijk in de index achteraan." }],
          niveaus: { basis: "Index. A.", simpeler: "Specifieke naam → index achteraan. A.", nogSimpeler: "Index = A." },
        },
      },
      {
        q: "*'Hoofdstuk 4 — Middeleeuwen ... blz 58'* — dit hoort bij?",
        options: ["Inhoudsopgave","Index","Bibliografie","Voetnoot"],
        answer: 0,
        wrongHints: [null, "Niet — index is alfabetisch.", "Bibliografie = boekenlijst.", "Voetnoot = uitleg onderaan bladzijde."],
        uitlegPad: {
          stappen: [{ titel: "Hoofdstuk + pagina = inhoudsopgave", tekst: "**'Hoofdstuk 4 — Onderwerp ... blz N'** = klassieke inhoudsopgave-stijl. Volgorde: hoofdstuk 1, 2, 3, 4...." }],
          niveaus: { basis: "Inhoudsopgave. A.", simpeler: "'Hoofdstuk N ... blz N' = inhoudsopgave. A.", nogSimpeler: "Hoofdstuk = A." },
        },
      },
      {
        q: "In een bibliotheek vind je **een spannende roman over een speurder**. Waar zoek je?",
        options: ["Bij fictie — alfabetisch op schrijver","Bij non-fictie","Bij naslag","Bij stripboeken"],
        answer: 0,
        wrongHints: [null, "Non-fictie = waar gebeurd. Roman = verzonnen.", "Naslag = woordenboeken/encyclopedieën.", "Niet — geen strip."],
        uitlegPad: {
          stappen: [{ titel: "Roman = fictie", tekst: "Romans = **verhalen, verzonnen** = fictie-afdeling. Daar staan ze **alfabetisch op achternaam schrijver**. Bv. 'A. Achterberg' bij A, 'B. de Beer' bij B." }],
          woorden: [{ woord: "fictie", uitleg: "Verzonnen verhaal (roman, sprookje, sciencefiction)." }, { woord: "non-fictie", uitleg: "Echt gebeurd / feiten (geschiedenis, biografie, naslag)." }],
          theorie: "Fictie → alfabetisch schrijver. Non-fictie → onderwerp/classificatie-nummer.",
          niveaus: { basis: "Fictie, alfabetisch schrijver. A.", simpeler: "Verzonnen verhaal = fictie. A.", nogSimpeler: "Fictie = A." },
        },
      },
      {
        q: "Wat staat er in een **glossarium** van een schoolboek?",
        options: ["Moeilijke woorden + uitleg","Hoofdstukken","Schrijvers","Kaarten"],
        answer: 0,
        wrongHints: [null, "Hoofdstukken zijn in inhoudsopgave.", "Schrijvers in bibliografie.", "Kaarten zijn in atlas of bijlage."],
        uitlegPad: {
          stappen: [{ titel: "Glossarium = mini-woordenboek", tekst: "Een **glossarium** is een **woordenlijst** achterin een boek met de **moeilijke vak-woorden** + **uitleg**. Bv. bij geschiedenis-boek: 'feodalisme = systeem waarbij...'" }],
          woorden: [{ woord: "glossarium", uitleg: "Lijst van moeilijke woorden + uitleg in een boek (vakwoordenboek)." }],
          theorie: "Cito-vraag-soms: 'Wat is het verschil tussen glossarium en index?' → glossarium geeft BETEKENIS van vakwoord, index geeft PAGINA.",
          niveaus: { basis: "Glossarium = vakwoorden + uitleg. A.", simpeler: "Moeilijke woorden achterin = glossarium. A.", nogSimpeler: "Vakwoorden = A." },
        },
      },
    ],
  },

  // ─── D. Betrouwbaarheid + fake news ────────────────────────
  {
    title: "Betrouwbaarheid — fake news + AI + bronnen vergelijken",
    explanation:
      "Niet alle info is **waar**. Cito test of je betrouwbare van onbetrouwbare bronnen kunt onderscheiden. Belangrijk in tijd van **fake news + AI**.\n\n**Vragen om te checken**:\n1. **WIE schreef het?** Expert of anoniem? Naam-met-functie = betrouwbaarder.\n2. **WANNEER?** Recent of 10 jaar oud? Recente info weegt vaak zwaarder (behalve bij geschiedenis).\n3. **WAAR gepubliceerd?** Officiële site (overheid, krant) of random blog?\n4. **WAAROM?** Wil de schrijver iets verkopen / overtuigen? Dan oppassen.\n5. **CHECK 2e bron**: zegt een tweede onafhankelijke bron hetzelfde?\n\n**Primaire vs secundaire bron**:\n• **Primair** = direct van bron. Bv. dagboek Anne Frank, originele wet, ooggetuige.\n• **Secundair** = iemand anders die het beschrijft. Bv. schoolboek over Anne Frank.\n• Cito waardeert primaire bronnen vaak hoger (dichter bij feiten).\n\n**AI-gegenereerde teksten** (ChatGPT, Bard):\n• AI VERZINT soms feiten (= 'hallucineren'). Niet automatisch waar!\n• Cito-tip: AI-info ALTIJD checken via 2e bron.\n\n**Wikipedia**:\n• Door **iedereen aanpasbaar** = niet altijd 100% correct.\n• Voor **algemeen** redelijk goed, voor **omstreden** opletten.\n• Cito-truc: kijk naar **bronnen-lijst onderaan** Wikipedia-artikel. Veel/goede bronnen = betrouwbaarder.\n\n**Fake news-signalen**:\n• Sensationele kop ('JE WILT NIET WETEN WAT...').\n• Anonieme schrijver.\n• Geen bron-vermelding.\n• Beweringen zonder bewijs.\n• Vaak gedeeld op social media zonder krantvermelding.",
    checks: [
      {
        q: "Welke bron is **het meest betrouwbaar** voor info over de Tweede Wereldoorlog?",
        options: ["NIOD-website (Nederlands oorlogsinstituut)","Random YouTube-vlogger","TikTok-post zonder bron","Anonieme blog"],
        answer: 0,
        wrongHints: [null, "Vlogger = vaak mening, geen historicus.", "TikTok zonder bron = onbetrouwbaar.", "Anoniem = wie schreef? Niet te checken."],
        uitlegPad: {
          stappen: [{ titel: "Officiële instituten", tekst: "**NIOD** = Nederlands Instituut voor Oorlogsdocumentatie. Wetenschappelijk, primaire bronnen, peer-reviewed. Hoogste betrouwbaarheid voor WO2-info." }],
          woorden: [{ woord: "instituut", uitleg: "Officiële organisatie voor onderzoek." }],
          theorie: "Hiërarchie: wetenschappelijk instituut > krant/overheid > Wikipedia (met bronnen) > blog > social media zonder bron.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Voor klimaat → KNMI of IPCC (wetenschap) > krantenartikel > anonieme blog." }],
          niveaus: { basis: "NIOD. A.", simpeler: "Wetenschappelijk instituut = meest betrouwbaar. A.", nogSimpeler: "NIOD = A." },
        },
      },
      {
        q: "Wat is een **primaire bron** over Anne Frank?",
        options: ["Het dagboek van Anne Frank zelf","Schoolboek over Anne Frank","Film over Anne Frank","Wikipedia-artikel"],
        answer: 0,
        wrongHints: [null, "Niet — iemand anders schreef dat (secundair).", "Niet — gebaseerd op het dagboek (secundair).", "Niet — samenvat van bronnen (secundair)."],
        uitlegPad: {
          stappen: [{ titel: "Primair = direct van bron", tekst: "Het dagboek **schreef Anne zelf**. Direct van de bron. Schoolboek/film/wiki = iemand anders interpreteert haar dagboek (secundair)." }],
          woorden: [{ woord: "primaire bron", uitleg: "Direct van de persoon/gebeurtenis zelf (dagboek, ooggetuige, originele wet)." }, { woord: "secundaire bron", uitleg: "Iemand anders die de primaire bron beschrijft." }],
          theorie: "Cito-tip: primaire bron = origineel. Secundair = afgeleid. Onderzoek waardeert primair hoger.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Primair: brief van Rembrandt aan Saskia. Secundair: schoolboek-uitleg over hun relatie." }],
          niveaus: { basis: "Dagboek zelf = primair. A.", simpeler: "Anne schreef het zelf = direct van bron. A.", nogSimpeler: "Dagboek = A." },
        },
      },
      {
        q: "Welke is een **fake news-signaal**?",
        options: ["Sensationele kop + geen bronvermelding","Krantenartikel met datum + auteur","Wetenschappelijk artikel met bronnenlijst","Wikipedia met 20 verwijzingen"],
        answer: 0,
        wrongHints: [null, "Niet — datum + auteur = juist betrouwbaar.", "Niet — bronnenlijst = teken van degelijkheid.", "Niet — veel bronnen = beter te checken."],
        uitlegPad: {
          stappen: [{ titel: "Sensationeel + anoniem = fake-signalen", tekst: "Fake news-kenmerken: SCHREEUWERIGE KOPPEN, geen schrijver-naam, geen bronvermelding, vraagt om delen ('deel met iedereen!'). Een artikel met datum + auteur + bronnen = juist betrouwbaarder." }],
          niveaus: { basis: "Sensationeel + geen bron = fake. A.", simpeler: "Schreeuwerig + anoniem = waarschuwing. A.", nogSimpeler: "Geen bron = A." },
        },
      },
      {
        q: "Wat moet je doen als ChatGPT je iets vertelt?",
        options: ["Altijd checken via een 2e betrouwbare bron","Direct geloven en gebruiken","Doorsturen naar vrienden","Op TikTok zetten"],
        answer: 0,
        wrongHints: [null, "Niet — AI kan hallucineren (verzinnen).", "Niet — info nog niet gecheckt!", "Niet — geen bron-verificatie."],
        uitlegPad: {
          stappen: [{ titel: "AI hallucineert", tekst: "AI zoals ChatGPT **verzint soms feiten** zonder dat 't merkt — dat heet 'hallucineren'. ALTIJD checken via Wikipedia/krant/expert voor je 't gebruikt in een werkstuk." }],
          woorden: [{ woord: "hallucineren", uitleg: "Wanneer AI iets verzint dat NIET waar is." }],
          theorie: "AI-output = goede STARTpunt, geen EINDpunt. 2e bron = altijd nodig.",
          voorbeelden: [{ type: "voorbeeld", tekst: "ChatGPT zegt: 'Napoleon won bij Waterloo'. Check → klopt niet, hij verloor er." }],
          niveaus: { basis: "2e bron checken. A.", simpeler: "AI = checken bij 2e bron. A.", nogSimpeler: "Checken = A." },
        },
      },
      {
        q: "Welk Wikipedia-artikel is waarschijnlijk **het MEEST betrouwbaar**?",
        options: ["Artikel met 50 bronvermeldingen onderaan","Artikel zonder bronnen","Artikel met 'omstreden'-banner","Artikel van 1 week oud zonder bronnen"],
        answer: 0,
        wrongHints: [null, "Geen bronnen = niet te checken.", "'Omstreden'-banner = waarschuwing.", "Geen bronnen blijft een probleem."],
        uitlegPad: {
          stappen: [{ titel: "Bronnen-aantal = betrouwbaarheid-signaal", tekst: "Veel **goede** bronnen onderaan = veel mensen hebben dit nagekeken. Bronnen kun je zelf naast leggen. Geen bronnen = anders dan een meningstekst." }],
          theorie: "Wikipedia-checklist: hoeveel bronnen? Bekende bronnen? 'Omstreden'-banner? Recent bewerkt?",
          niveaus: { basis: "Veel bronnen = betrouwbaarder. A.", simpeler: "Bronnen-lijst toont onderzoek = check. A.", nogSimpeler: "Bronnen = A." },
        },
      },
    ],
  },

  // ─── E. Cito-eindopdracht ─────────────────────────────────
  {
    title: "Cito-eindopdracht — bronnen door elkaar",
    explanation:
      "Mix van bron-kiezen + alfabetisch + inhoudsopgave/index + betrouwbaarheid. Cito-stijl door elkaar.\n\n**Strategie eindopdracht**:\n• Lees de hele vraag — wat ZOEKT de leerling?\n• Welke bron past het beste?\n• Twijfel? Sluit duidelijk foute opties uit.\n\nVeel succes!",
    checks: [
      {
        q: "Voor een **werkstuk over duurzaamheid** — welke combinatie van bronnen is het BESTE?",
        options: ["Wetenschappelijk artikel + krant + interview met expert","Alleen TikTok-video's","Alleen een woordenboek","Eén Wikipedia-artikel"],
        answer: 0,
        wrongHints: [null, "TikTok = vaak meningen, geen onderzoek.", "Woordenboek geeft alleen betekenis, geen werkstuk-stof.", "Eén bron = niet vergelijkbaar."],
        uitlegPad: {
          stappen: [{ titel: "Combineren = sterker werkstuk", tekst: "Werkstuk-best practice: combineer **3 soorten bronnen** — wetenschap (feiten), actueel (krant/nieuws) en persoonlijk (interview). Niet 1 bron klakkeloos overnemen." }],
          niveaus: { basis: "3 bronnen combineren. A.", simpeler: "Wetenschap + actueel + mens = sterk. A.", nogSimpeler: "Combineren = A." },
        },
      },
      {
        q: "Welk woord komt **derde** alfabetisch: kraan, krant, kralen?",
        options: ["krant","kraan","kralen","alle drie"],
        answer: 0,
        wrongHints: [null, "Bijna — vergelijk 3e/4e letter: kraan vs kralen vs krant. Kraan < kralen < krant.", "Dat is eerste.", "Niet — er IS een volgorde."],
        uitlegPad: {
          stappen: [{ titel: "3e letter vergelijken bij gelijke 1+2", tekst: "Alle 3 beginnen met 'kra'. Kijk 4e letter: kra**a**n (a) < kra**l**en (l) < kra**n**t (n). A<L<N → kraan, kralen, krant. Derde = krant." }],
          niveaus: { basis: "Krant derde. A.", simpeler: "Volgorde: kraan, kralen, krant → 3e = krant. A.", nogSimpeler: "Krant = A." },
        },
      },
      {
        q: "Een tekst zegt: *'Wist je dat de maan eigenlijk een spiegel is? Deel deze waarheid!'* Wat doe je?",
        options: ["Niet delen, niet geloven — geen bron + raar","Direct delen op WhatsApp","Mailen naar de juf","Op Wikipedia zetten"],
        answer: 0,
        wrongHints: [null, "Niet — fake news verspreiden!", "Niet voor je gecheckt hebt.", "Niet bewerken zonder bron."],
        uitlegPad: {
          stappen: [{ titel: "Fake news-signaal", tekst: "Sensationele 'wist je dat' + 'deel!' + onlogische claim ('maan = spiegel') + geen bronvermelding = **fake news**. Niet delen, niet geloven, eerst check via NASA of wetenschapssite." }],
          niveaus: { basis: "Niet delen. A.", simpeler: "Geen bron + 'deel!' = fake. A.", nogSimpeler: "Fake = A." },
        },
      },
      {
        q: "Je hebt 30 sec om in een **geschiedenisboek** info over **'Karel V'** te vinden. Waar kijk je?",
        options: ["Index achteraan","Hoofdstuk 1","Voorwoord","Hele boek doorbladeren"],
        answer: 0,
        wrongHints: [null, "Niet — alleen als toevallig Karel V hier behandeld wordt.", "Voorwoord = inleiding, geen feiten.", "Niet — duurt veel te lang."],
        uitlegPad: {
          stappen: [{ titel: "Specifieke naam = index", tekst: "**Index achteraan** = alfabetisch. Zoek 'Karel V' → pagina-nummers. Direct naar de juiste plek. 30 sec genoeg." }],
          niveaus: { basis: "Index. A.", simpeler: "Specifieke naam → index achteraan. A.", nogSimpeler: "Index = A." },
        },
      },
      {
        q: "Voor de spelling van het woord **'metaforisch'** — welke bron?",
        options: ["Woordenboek","Encyclopedie","Atlas","Krant"],
        answer: 0,
        wrongHints: [null, "Encyclopedie geeft betekenis maar woordenboek heeft spelling-check sneller.", "Atlas heeft geen woorden.", "Krant heeft geen spelling-uitleg."],
        uitlegPad: {
          stappen: [{ titel: "Spelling = woordenboek", tekst: "Woordenboek geeft **spelling + betekenis** per woord. Voor spelling-check: woordenboek (Van Dale) of online groene-boekje." }],
          niveaus: { basis: "Woordenboek. A.", simpeler: "Voor spelling → woordenboek. A.", nogSimpeler: "Woordenboek = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const informatiebronnenPo = {
  id: "informatiebronnen-po",
  title: "Informatiebronnen (Cito groep 6-8)",
  emoji: "🔍",
  level: "groep6-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — informatiebronnen / Doorstroomtoets-onderdeel",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen-strategie", niveau: "po-1F" },
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "po-1F" },
  ],
  intro:
    "Bronnen voor de Cito-Doorstroomtoets — woordenboek, atlas, encyclopedie, inhoudsopgave + index, betrouwbaarheid + fake news. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "informatiebron", "bron", "woordenboek", "alfabetisch",
    "encyclopedie", "atlas", "index", "inhoudsopgave",
    "betrouwbaar", "fake news", "primaire bron", "secundaire bron",
    "wikipedia", "ChatGPT", "AI", "hallucineren",
    "studievaardigheden", "naslag", "bibliotheek",
  ],
  chapters,
  steps,
};

export default informatiebronnenPo;
