// Leerpad: Filosofie kernbegrippen — VWO (HAVO keuze)
// Eindexamen-CSE-stof: kennis/ethiek/zijn/politiek/recht.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  ratio: "#42a5f5",
  empir: "#66bb6a",
  ethiek: "#ef6c00",
  politiek: "#ab47bc",
  hl: "#ffd54f",
};

const stepEmojis = ["🧠", "👁️", "⚖️", "🏛️", "🏆"];

const chapters = [
  { letter: "A", title: "Kennisleer (epistemologie)", emoji: "🧠", from: 0, to: 0 },
  { letter: "B", title: "Zijnsleer (metafysica)", emoji: "👁️", from: 1, to: 1 },
  { letter: "C", title: "Ethiek", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Politiek + recht", emoji: "🏛️", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Kennisleer ────────────────────────────────────────
  {
    title: "Kennisleer — wat is kennis?",
    explanation:
      "**Epistemologie** = kennisleer. Vraag: 'Wat kunnen we weten + hoe weten we het?'\n\n**Klassieke definitie kennis** (Plato): kennis = gerechtvaardigde + ware overtuiging.\n• Je gelooft dat X.\n• X is waar.\n• Je hebt goede reden / bewijs voor X.\nAlle drie nodig.\n\n**Twee hoofdstromingen**:\n\n**1. Rationalisme** (kennis uit denken/rede):\n• **René Descartes** (1596-1650): *Cogito, ergo sum* ('Ik denk, dus ik ben').\n• Methodische twijfel: betwijfel alles tot je iets onbetwijfelbaars vindt → bewustzijn van denken zelf is onbetwijfelbaar.\n• Wiskunde + logica als ideaal — zuiver denken levert zekere kennis.\n• **Plato**, **Leibniz**, **Spinoza** ook rationalisten.\n\n**2. Empirisme** (kennis uit ervaring/zintuigen):\n• **John Locke** (1632-1704): *tabula rasa* — geest begint als 'leeg schrijfblok', kennis komt uit ervaring.\n• **David Hume** (1711-1776): zelfs causaliteit (oorzaak-gevolg) is gewoonte van denken, geen objectieve waarheid.\n• Wetenschap = systematisch waarnemen + experimenteren.\n• Locke, Berkeley, Hume = grote drie empiristen.\n\n**Synthese — Kant** (1724-1804):\n• Combineerde beide: zintuigen leveren ruw materiaal (ervaring), maar **categorieën van denken** (oorzaak, ruimte, tijd) structureren ze.\n• Onderscheid:\n  - **Fenomeen** (wat we waarnemen) — kennen we wel.\n  - **Noumenon / ding-an-sich** (de werkelijkheid zelf) — kennen we **niet** rechtstreeks.\n• Werk: *Kritik der reinen Vernunft* (1781).\n\n**Verschillende soorten kennis**:\n• **A priori**: vóór ervaring (wiskunde, logica).\n• **A posteriori**: ná ervaring (empirisch).\n• **Analytisch**: definitie maakt waar ('alle vrijgezellen zijn ongehuwd').\n• **Synthetisch**: betekenis voegt iets toe ('water kookt bij 100°C op zeeniveau').\n\n**Wetenschapsfilosofie**:\n• **Karl Popper** (1902-1994): wetenschap = **falsificeerbaar** (kan worden weerlegd). Niet bewezen, maar tot dusver niet weerlegd. *Logik der Forschung*.\n• **Thomas Kuhn** (1922-1996): wetenschap groeit niet alleen lineair — soms **paradigma-wissel** (revolutie). *The Structure of Scientific Revolutions*.\n• **Paul Feyerabend**: 'anything goes' — geen vaste methode.\n\n**Postmoderne kritiek**:\n• **Foucault**: kennis + macht verweven. 'Macht/kennis'.\n• **Derrida**: deconstructie — teksten + concepten zijn vol tegenstellingen.\n• **Lyotard**: 'einde van grote verhalen' (Marxisme, Verlichting).\n\n**Scepticisme**:\n• **Antiek**: Pyrrho — onthouding van oordeel.\n• **Modern**: Descartes-twijfel als methode.\n• **Hedendaags**: Matrix-twijfel — kunnen we weten of we niet in simulatie zitten?\n\n**Cito-pattern**:\n• Vraag stelt scenario → 'wat zou rationalist/empirist hierover zeggen?'\n• Vraag: 'welk standpunt verdedigt auteur in tekst?'\n• Onderscheid maken tussen kennis-typen.",
    checks: [
      {
        q: "Wie zei **Cogito, ergo sum**?",
        options: ["René Descartes","John Locke","Plato","Kant"],
        answer: 0,
        wrongHints: [null, "Niet — empirist.", "Niet — Antiek.", "Niet — synthese."],
        uitlegPad: {
          stappen: [{ titel: "1637", tekst: "**René Descartes** (1596-1650) in *Discours de la méthode* (1637) + *Meditationes* (1641). 'Cogito, ergo sum' = 'Ik denk, dus ik ben'. Onbetwijfelbaar startpunt voor zekere kennis." }],
          niveaus: { basis: "Descartes. A.", simpeler: "Cogito = Descartes = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Empirist** John Locke gebruikt term *tabula rasa* voor:",
        options: ["Geest als leeg schrijfblok bij geboorte","Belastingbrief","Stoel","Kunstwerk"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Tabula rasa = leeg blad", tekst: "**Locke** stelde: bij geboorte is geest een **tabula rasa** (leeg schrijfblok). Alle kennis ontstaat via ervaring (zintuigen + reflectie). Tegen rationalisten die zeiden dat we aangeboren kennis hebben (Plato: anamnese, Descartes: ideeën van God)." }],
          niveaus: { basis: "Leeg blad. A.", simpeler: "Tabula rasa = leeg = A.", nogSimpeler: "Leeg = A." },
        },
      },
      {
        q: "Welke kennis is **analytisch**?",
        options: ["Alle vrijgezellen zijn ongehuwd","Water kookt bij 100°C","Aarde is rond","Sokrates was leraar"],
        answer: 0,
        wrongHints: [null, "Empirisch, niet analytisch.", "Empirisch.", "Historisch (empirisch)."],
        uitlegPad: {
          stappen: [{ titel: "Analytisch = definitie", tekst: "**Analytisch**: waarheid volgt uit **definitie** van termen. 'Vrijgezel' = 'ongehuwde man' → 'alle vrijgezellen zijn ongehuwd' is automatisch waar zonder waarneming. **Synthetisch**: betekenis voegt iets toe wat moet worden gecheckt." }],
          theorie: "Kant onderscheidde: analytisch a priori (wiskunde), synthetisch a posteriori (empirisch), en uitvond synthetisch a priori (controversieel).",
          niveaus: { basis: "Vrijgezel/ongehuwd. A.", simpeler: "Definitie-waar = analytisch = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Volgens **Karl Popper** is wetenschap:",
        options: ["Falsificeerbaar (kan worden weerlegd)","Bewezen waar","Subjectief","Hetzelfde als religie"],
        answer: 0,
        wrongHints: [null, "Niet — pseudoscience claimt vaak dit.", "Niet — kan objectief streven.", "Niet — fundamenteel anders."],
        uitlegPad: {
          stappen: [{ titel: "Falsifikatie-criterium", tekst: "**Popper**: theorie is **wetenschappelijk** als ze in principe **gefalsifieerd** (weerlegd) kan worden door waarneming. Theorie nooit definitief 'bewezen', alleen 'nog niet weerlegd'. Astrologie + freudianisme = niet falsificeerbaar = pseudoscience volgens Popper." }],
          theorie: "Cito-pattern: 'is X wetenschap volgens Popper?' → kan deze claim getest + weerlegd worden?",
          niveaus: { basis: "Falsificeerbaar. A.", simpeler: "Popper = falsifieerbaar = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Kant** onderscheidde *Fenomeen* van *Ding-an-sich*. Wat kunnen we kennen?",
        options: ["Fenomenen (wat we waarnemen)","Ding-an-sich rechtstreeks","Beide","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — fundamenteel verborgen.", "Niet — alleen fenomenen.", "Wel iets."],
        uitlegPad: {
          stappen: [{ titel: "Beperkte kennis", tekst: "**Kant**: zintuigen + categorieën-denken (oorzaak/ruimte/tijd) leveren **fenomeen** (wat verschijnt). Werkelijkheid zelf (**Ding-an-sich, noumenon**) blijft principieel **onkenbaar**. We kennen alleen 'gefilterde' versie." }],
          theorie: "Compromis tussen rationalisme (Descartes — kennis vanuit denken) en empirisme (Locke/Hume — alleen uit ervaring).",
          niveaus: { basis: "Fenomenen. A.", simpeler: "Alleen fenomeen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Zijnsleer (metafysica) ────────────────────────────
  {
    title: "Zijnsleer — wat bestaat?",
    explanation:
      "**Metafysica / ontologie** = leer van het zijn. Vraag: 'Wat bestaat fundamenteel?'\n\n**Klassieke posities**:\n\n**Materialisme / fysicalisme**:\n• Alleen fysieke materie bestaat — zelfs gedachten = neuronen-activiteit.\n• Democritus (Antiek): atomen + leegte.\n• Hedendaags: meeste wetenschappers, neurowetenschap.\n• Probleem: 'qualia' (hoe rood-rood voelt) — verklaar dat met enkel hersencellen?\n\n**Idealisme**:\n• Bewustzijn / idee is fundamenteel; materie is afgeleid of zelfs illusie.\n• Plato: ideeën-wereld (transcendent).\n• Berkeley (empirist!): 'esse est percipi' (zijn is waargenomen worden).\n• Hegel: wereld als ontwikkeling van geest (Geist).\n\n**Dualisme**:\n• Twee soorten substantie: lichaam (materie) en geest (denken).\n• **Descartes**: lichaam en geest interacteren via pijnappelklier (niet overtuigend).\n• Probleem 'mind-body': hoe communiceren ze?\n\n**Monisme**:\n• Slechts één soort fundamentele substantie.\n• Spinoza: God = natuur, alles is uitdrukking van één substantie (panentheïsme).\n• Materialistisch monisme: alleen materie.\n• Idealistisch monisme: alleen geest.\n\n**Andere belangrijke vragen metafysica**:\n\n**Vrije wil**:\n• **Determinisme**: alles gebeurt door eerdere oorzaken → geen vrije wil.\n• **Libertarisme** (in filosofie): mens heeft echte vrije keuze.\n• **Compatibilisme** (Hume, Dennett): vrije wil + determinisme verzoenbaar; 'vrij' = handelen volgens eigen verlangens (zonder externe dwang), zelfs als verlangens zelf bepaald zijn.\n\n**Identiteit en persoon**:\n• Schip van Theseus: alle planken vervangen → nog hetzelfde schip?\n• Mens-identiteit: cellen vervangen elke 7 jaar, ben ik nog dezelfde?\n• Locke: identiteit door psychologische continuïteit (geheugen).\n• Derek Parfit: identiteit is graduele zaak, niet binair.\n\n**Tijd**:\n• Augustinus: 'Wat is tijd? Als niemand het vraagt, weet ik het; als je vraagt, weet ik het niet.'\n• A-theorie: tijd vloeit (heden bestaat, verleden + toekomst niet).\n• B-theorie: tijd is 'block universe' — alle momenten bestaan even reëel.\n• Einstein-relativiteit ondermijnt absoluut nu.\n\n**Toeval vs noodzaak**:\n• Antiek: Aristoteles — vier oorzaken (materiële, formele, efficiënte, finale).\n• Modern: David Hume — causaliteit is gewoonte van denken, niet observeerbaar in dingen zelf.\n• Quantum: echt toeval op subatomair niveau? Of verborgen variabelen (Einstein hoopte)?\n\n**God**:\n• **Theïsme**: God bestaat (klassiek monotheïstisch).\n• **Atheïsme**: geen God.\n• **Agnosticisme**: niet te weten.\n• **Pantheïsme**: God = natuur (Spinoza).\n• Argumenten:\n  - **Ontologisch** (Anselm, Descartes): uit begrip 'volmaakt wezen' volgt bestaan.\n  - **Kosmologisch** (Aquinas): alles heeft oorzaak → eerste oorzaak = God.\n  - **Teleologisch / design** (Paley): complex ontwerp → ontwerper.\n  - **Moreel** (Kant): morele wet vergt rechter.\n• Kritiek: probleem van het kwaad — als God almachtig + goed, waarom lijden?\n\n**Posthumane / transhumanisme**:\n• AI, gen-modificatie, neurale interfaces → mens verandert.\n• Nick Bostrom, Ray Kurzweil: post-mens.\n• Filosofisch: kunnen machines bewustzijn hebben? (China-kamer Searle: nee, vervangbare regels ≠ begrip).",
    checks: [
      {
        q: "Wie zegt: 'esse est **percipi**' (zijn = waargenomen worden)?",
        options: ["George Berkeley","Plato","Aristoteles","Hume"],
        answer: 0,
        wrongHints: [null, "Niet — ander concept.", "Niet — vier oorzaken.", "Niet — anders."],
        uitlegPad: {
          stappen: [{ titel: "Idealistische empirist", tekst: "**George Berkeley** (1685-1753): 'esse est percipi' = bestaan = waargenomen worden. Voorbeeld: tafel bestaat zolang iemand hem ziet. God ziet altijd alles → alles blijft bestaan. Empirist-idealist." }],
          theorie: "Limerick Knox: 'There was once a young man who said \"God / Must think it exceedingly odd / If he finds that this tree / Continues to be / When there's no one about in the quad...\"'",
          niveaus: { basis: "Berkeley. A.", simpeler: "Esse=percipi = Berkeley = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **dualisme** (Descartes) zijn er hoeveel substanties?",
        options: ["Twee — lichaam + geest","Een","Drie","Oneindig"],
        answer: 0,
        wrongHints: [null, "Niet — monisme.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Lichaam vs geest", tekst: "**Cartesiaans dualisme**: twee fundamenteel verschillende substanties: **res extensa** (uitgebreide ding = materie) en **res cogitans** (denkende ding = geest). Hoe interacteren ze? Probleem 'mind-body'." }],
          niveaus: { basis: "Twee. A.", simpeler: "Dualisme = 2 = A.", nogSimpeler: "2 = A." },
        },
      },
      {
        q: "Welk standpunt verzoent **vrije wil + determinisme**?",
        options: ["Compatibilisme","Libertarisme","Hard determinisme","Idealisme"],
        answer: 0,
        wrongHints: [null, "Niet — verwerpt determinisme.", "Niet — verwerpt vrije wil.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Hume + Dennett", tekst: "**Compatibilisme**: vrije wil + determinisme **zijn niet in conflict**. 'Vrij' = handelen volgens eigen wensen + redenering (zonder externe dwang), zelfs als die wensen zelf oorzakelijk bepaald zijn. Verschillend van Cartesiaans-libertarisch 'absoluut vrije wil'." }],
          theorie: "Cito-pattern: 'past dit bij compatibilisme of libertarisme?' Beoordeel definitie.",
          niveaus: { basis: "Compatibilisme. A.", simpeler: "Verzoenen = compatib = A.", nogSimpeler: "Compat = A." },
        },
      },
      {
        q: "Wat is het **probleem van het kwaad**?",
        options: ["Hoe kan God almachtig + goed zijn bij veel lijden?","Wat is moreel kwaad?","Hoe stop je oorlog?","Wat is zonde?"],
        answer: 0,
        wrongHints: [null, "Andere vraag (ethiek).", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Theodicee", tekst: "**Probleem van het kwaad**: als God **almachtig + alwetend + goed** is, waarom is er lijden? Drie eigenschappen lijken onverenigbaar met realiteit van lijden. Klassiek atheïstisch argument. Theologen verdedigen met 'theodicee': vrije wil (Plantinga), zielsvorming, mysterie." }],
          niveaus: { basis: "God + lijden onverenigbaar. A.", simpeler: "Prob kwaad = God+lijden = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Volgens **Spinoza** is alles:",
        options: ["Uitdrukking van één substantie (God=Natuur)","Twee aparte werelden","Toeval","Illusie"],
        answer: 0,
        wrongHints: [null, "Niet — monist.", "Niet relevant.", "Niet — niet idealist."],
        uitlegPad: {
          stappen: [{ titel: "Deus sive Natura", tekst: "**Spinoza** (1632-1677, Amsterdam): één substantie = **God = Natuur** (panentheïsme). Alle dingen = uitdrukkingen ('modi') van deze ene substantie. Geen aparte 'God' tegenover wereld. **Joods-Portugese** filosoof, uitgesloten uit synagoge voor zijn ideeën." }],
          theorie: "Einstein: 'Ik geloof in de God van Spinoza' (de wetmatigheden van natuur, niet persoonlijke God).",
          niveaus: { basis: "Eén substantie. A.", simpeler: "Spinoza = God=Natuur = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Ethiek ────────────────────────────────────────────
  {
    title: "Ethiek — wat is goed?",
    explanation:
      "**Ethiek** = moraal-filosofie. Vraag: 'Wat is moreel goed of fout? Hoe moet ik handelen?'\n\n**Drie grote ethische scholen**:\n\n**1. Deontologie** (regel-ethiek):\n• **Immanuel Kant** (1724-1804).\n• Handelingen zijn goed/fout om hun aard, niet uitkomst.\n• **Categorische imperatief**: 'Handel alleen volgens die stelregel waarvan je tegelijk kunt willen dat zij algemene wet zou worden.'\n• Toets: **kan iedereen dit doen?** Bv. liegen: als iedereen liegt, vertrouwt niemand meer → onmogelijk → liegen fout.\n• Mensen zijn **doel op zich**, nooit louter middel.\n\n**2. Consequentialisme / utilitarisme**:\n• **Jeremy Bentham** (1748-1832), **John Stuart Mill** (1806-1873).\n• Handelingen goed/fout om uitkomst (gevolgen).\n• **Grootste geluk voor grootste aantal** (Bentham's hedonistisch calculus).\n• Mill nuanceerde: kwalitatieve geluk-verschillen (Sokrates onvoldaan > zwijn voldaan).\n• Klassiek dilemma: **Trolleyprobleem** — switch trein-spoor om 1 te doden ipv 5? Utilitarist: ja.\n\n**3. Deugd-ethiek**:\n• **Aristoteles** (384-322 v.Chr.) in *Nicomachische Ethiek*.\n• Niet 'wat te doen' maar 'wat voor mens te zijn'.\n• **Eudaimonia** = goed leven, bloei, geluk via deugd.\n• **Gulden middenweg**: deugd ligt tussen twee uitersten (moed = tussen lafheid en roekeloosheid).\n• Belangrijkste deugden: wijsheid, moed, matigheid, rechtvaardigheid (vier kardinale).\n• Recent comeback: **Alasdair MacIntyre** *After Virtue* (1981), Martha Nussbaum.\n\n**Andere stromingen**:\n\n**Contractualisme** (Hobbes, Rawls):\n• Moraal ontstaat uit sociaal contract — wat zou ieder redelijk persoon accepteren?\n• Rawls: 'sluier van onwetendheid' — kies principes alsof je niet weet wie je wordt in maatschappij.\n\n**Care-ethiek**:\n• Carol Gilligan, Joan Tronto, Nel Noddings.\n• Kritiek op abstracte regels — moraal ontstaat in concrete relaties + zorg.\n• Feministische impuls jaren '80.\n\n**Moreel relativisme**:\n• Moraal afhankelijk van cultuur, geen universele waarden.\n• Kritiek: kunnen we dan slavernij of vrouwenbesnijdenis bekritiseren? Vaak afgewezen door filosofen.\n\n**Hedonisme**:\n• Plezier = enig goed (Epicurus, Bentham extreem).\n• Niet noodzakelijk zinnelijk — Epicurus zelf zocht 'ataraxia' (zielsrust).\n\n**Toegepaste ethiek-onderwerpen** (Cito-favoriet voor case-vragen):\n\n**Trolleyprobleem**:\n• Treinwagon raast op 5 mensen af. Je kunt switch trekken → wagon gaat ander spoor → 1 doodt. Doen?\n• Variant: dikke man duwen om wagon te stoppen?\n• Utilitarist: ja (5>1). Deontoloog: nee (mens gebruiken als middel).\n\n**Euthanasie + medische ethiek**:\n• Recht op zelfbeschikking vs heiligheid leven.\n• NL: euthanasie wettelijk toegestaan onder voorwaarden (sinds 2002, uitbreiding 2024 voor 1-12 jarigen).\n• Klassiek debat: actief vs passief, voltooid leven, dementie.\n\n**Klimaatethiek**:\n• Wie heeft welke verantwoordelijkheid?\n• Toekomstige generaties: tellen die mee?\n• Rijke vs arme landen.\n\n**AI-ethiek**:\n• Autonome wapens, self-driving cars (trolley-dilemma!).\n• Privacy, surveillance.\n• AI-vooringenomenheid (bias).\n• Werkgelegenheid + werkloosheid.\n\n**Dierenethiek**:\n• **Peter Singer**: speciecism (soortisme) = vorm van discriminatie. Plant-based eten moreel verplicht?\n• Tom Regan: dieren-rechten.\n• Tegenovergesteld: utilitarisme ook in dieren-debat (lijdenscapaciteit).",
    checks: [
      {
        q: "Wie formuleerde de **categorische imperatief**?",
        options: ["Immanuel Kant","John Stuart Mill","Aristoteles","Plato"],
        answer: 0,
        wrongHints: [null, "Niet — utilitarist.", "Niet — deugd-ethiek.", "Niet — Antiek."],
        uitlegPad: {
          stappen: [{ titel: "Deontologisch principe", tekst: "**Kant** in *Grundlegung zur Metaphysik der Sitten* (1785). **Categorische imperatief**: handel alleen volgens regel die je tot universele wet zou willen maken. Toets: zou iedereen dit kunnen doen zonder zelf-tegenspraak?\n\n2e formule: 'Behandel mensen nooit louter als middel, maar altijd ook als doel op zich.'" }],
          niveaus: { basis: "Kant. A.", simpeler: "Cat. imp. = Kant = A.", nogSimpeler: "Kant = A." },
        },
      },
      {
        q: "**Utilitarisme** beoordeelt handeling op:",
        options: ["Gevolgen (geluk-maximalisatie)","Bedoeling","Aard handeling zelf","Regelconformiteit"],
        answer: 0,
        wrongHints: [null, "Niet — speelt rol bij Kant.", "Niet — dat is deontologie.", "Niet — dat is regel-ethiek."],
        uitlegPad: {
          stappen: [{ titel: "Consequenties tellen", tekst: "**Utilitarisme** (Bentham, Mill): handeling is goed als ze **grootste geluk voor grootste aantal** oplevert. Beoordeel **gevolgen**, niet intentie of regel. Klassieke critiek: rechtvaardigt slechte middelen voor goed doel (organen oogsten van 1 om 5 te redden?)." }],
          niveaus: { basis: "Gevolgen. A.", simpeler: "Utili = gevolgen = A.", nogSimpeler: "Gevolg = A." },
        },
      },
      {
        q: "Aristotelische **eudaimonia** betekent:",
        options: ["Goed leven / menselijke bloei","Geluksgevoel (kort)","Roem","Rijkdom"],
        answer: 0,
        wrongHints: [null, "Te eng — eudaimonia is dieper.", "Niet — externe goed.", "Niet — extern."],
        uitlegPad: {
          stappen: [{ titel: "Bloei door deugd", tekst: "**Eudaimonia** (εὐδαιμονία) = goed leven / bloei / flourishing. Niet alleen geluksgevoel, maar **kompleet leven volgens deugd + redelijk handelen**. Iemand kan tijdelijk lijden maar nog steeds eudaimon zijn als hij deugdzaam leeft. Hedendaagse vertaling: 'flourishing' beter dan 'happiness'." }],
          niveaus: { basis: "Goed leven. A.", simpeler: "Eudaimonia = bloei = A.", nogSimpeler: "Bloei = A." },
        },
      },
      {
        q: "**Trolleyprobleem**: utilitarist zou switch trekken?",
        options: ["Ja (5 redden > 1 doden)","Nee (mens gebruiken als middel)","Geen oordeel","Wachten"],
        answer: 0,
        wrongHints: [null, "Niet — deontoloog zou dat zeggen.", "Niet — wel oordeel.", "Niet — moet kiezen."],
        uitlegPad: {
          stappen: [{ titel: "Calculatie", tekst: "**Utilitarist**: 5 mensen levens > 1. Switch trekken minimaliseert dood. Doen.\n\n**Deontoloog (Kant)**: switch trekken = actief 1 persoon doden = persoon gebruiken als middel = fout. Nee (niet actief tussenkomen).\n\nVarianten testen intuïties verder: dikke man duwen (zelfde getal-uitkomst, maar lichamelijk anders) → veel mensen vinden dat erger." }],
          niveaus: { basis: "Ja. A.", simpeler: "Utili = ja = A.", nogSimpeler: "Ja = A." },
        },
      },
      {
        q: "**Peter Singer** introduceerde term:",
        options: ["Speciecism (soortisme)","Categorische imperatief","Tabula rasa","Trolleyprobleem"],
        answer: 0,
        wrongHints: [null, "Niet — Kant.", "Niet — Locke.", "Niet — Foot."],
        uitlegPad: {
          stappen: [{ titel: "Dier-ethiek", tekst: "**Peter Singer** (1946-) Australisch filosoof, *Animal Liberation* (1975). **Speciecism / soortisme** = discriminatie op basis van soort, analoog aan racisme of seksisme. Stelling: lijdenscapaciteit = wat telt, niet soort. Implicatie: vleeseten moreel problematisch." }],
          theorie: "Singer is utilitarist — toepassing utilisme op dieren. Tegenstander Tom Regan: dieren-rechten-theorie (deontologisch).",
          niveaus: { basis: "Speciecism. A.", simpeler: "Singer = speciecism = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Politiek + recht ──────────────────────────────────
  {
    title: "Politieke filosofie + rechtsfilosofie",
    explanation:
      "**Politieke filosofie**: hoe zou samenleving georganiseerd moeten zijn? Wat is rechtvaardigheid?\n\n**Sociaal-contract-traditie**:\n\n**Thomas Hobbes** (1588-1679) — *Leviathan* (1651):\n• Natuurtoestand: 'oorlog van allen tegen allen' (*bellum omnium contra omnes*).\n• Leven nat-toestand: 'eenzaam, arm, smerig, brutaal en kort'.\n• Daarom: mensen sluiten **sociaal contract** → geven macht aan absolute soeverein (Leviathan).\n• Tegen anarchie → autoritaire staat aanvaardbaar.\n\n**John Locke** (1632-1704) — *Two Treatises of Government* (1689):\n• Natuurtoestand: vrijheid + gelijkheid (niet oorlog!).\n• Maar geen rechter → onveiligheid eigendommen.\n• Sociaal contract → beperkte overheid die natuurrechten beschermt (leven, vrijheid, eigendom).\n• Recht op opstand bij tirannie.\n• Invloed: Amerikaanse Onafhankelijkheid 1776.\n\n**Jean-Jacques Rousseau** (1712-1778) — *Du contrat social* (1762):\n• 'De mens is vrij geboren, maar overal in ketenen.'\n• 'Algemene wil' (*volonté générale*) → niet gewoon meerderheid maar gemeenschappelijk belang.\n• Burgers zijn vrij door ondergeschiktheid aan wetten die ze zelf hebben gegeven.\n• Invloed: Franse Revolutie 1789.\n\n**John Rawls** (1921-2002) — *A Theory of Justice* (1971):\n• 'Sluier van onwetendheid' (veil of ignorance): kies principes zonder te weten wie je bent (rijk/arm/man/vrouw/etc.).\n• Twee principes:\n  1. Gelijke basis-vrijheden voor allen.\n  2. **Verschilprincipe**: ongelijkheid alleen acceptabel als ze meest kwetsbaren ten goede komt.\n• Liberaal links — invloed op sociaal-democratie.\n\n**Robert Nozick** (1938-2002) — *Anarchy, State, and Utopia* (1974):\n• Reactie op Rawls.\n• Libertarisme: minimale staat ('night-watchman').\n• Belasting = dwangarbeid (gelijk aan slavernij).\n• Recht op eigendom heilig.\n\n**Karl Marx** (1818-1883):\n• Kritiek op kapitalisme: uitbuiting van arbeiders door eigenaren-productiemiddelen.\n• Klassenstrijd → revolutie → communisme.\n• *Das Kapital* + *Communistisch Manifest* (1848 met Engels).\n\n**Hannah Arendt** (1906-1975):\n• *The Origins of Totalitarianism* (1951), *Eichmann in Jerusalem* (1963).\n• **Banaliteit van het kwaad**: Eichmann (nazi) was geen monster maar gehoorzame ambtenaar zonder reflectie.\n• Belang van politiek handelen + publieke ruimte.\n\n**Friedrich Nietzsche** (1844-1900):\n• 'God is dood' = einde transcendente moraal.\n• Übermensch — schept eigen waarden.\n• 'Wil tot macht'.\n• Misbruikt door Nazi's; eigenlijk kritisch op antisemitisme + nationalisme.\n\n**Michel Foucault** (1926-1984):\n• Macht is overal — niet alleen bij staat.\n• Discipline (gevangenis, school, ziekenhuis) → 'governmentality'.\n• *Surveiller et punir* (1975), *Histoire de la sexualité*.\n\n**Liberale democratie + alternatieven**:\n• **Liberale democratie**: vrijheid + verkiezingen + rechtsstaat (NL, EU, VS).\n• **Illiberale democratie** (Hongarije Orbán, Turkije Erdoğan): verkiezingen maar pers + rechters onder druk.\n• **Autocratie / dictatuur** (China, NK): geen vrije verkiezingen.\n• **Anarchisme**: geen staat (Kropotkin, Bakunin).\n• **Communisme**: collectief bezit (Marx, Lenin).\n• **Fascisme**: nationalistisch + autoritair (Mussolini, Hitler) — failliet bewezen WO2.\n\n**Rechtsfilosofie**:\n\n**Natuurrechtleer**:\n• Recht boven mens-wet bestaat (God, natuur, rede).\n• Antigone: goddelijk recht > koning's wet.\n• Locke: natuurrechten.\n• Universele Verklaring Rechten Mens (1948) — basis.\n\n**Rechtspositivisme**:\n• Recht = wat wettelijk vastgelegd is.\n• Hans Kelsen: recht is hiërarchisch systeem normen.\n• Tegen-argument na Nuremberg: 'just following orders' niet voldoende.\n\n**Rule of Law** (rechtsstaat):\n• Iedereen, ook overheid, onder wet.\n• Scheiding der machten (Montesquieu): wetgevend / uitvoerend / rechterlijk.\n• Onafhankelijke rechters.\n\n**Mensenrechten-debat**:\n• Universeel (UVRM 1948)?\n• Westerse oorsprong = westers concept?\n• Aziatische waarden-debat (Lee Kuan Yew, Singapore).\n• Vaak schending in praktijk — China, Rusland, Iran.\n\n**Internationale rechtsorde**:\n• VN, Veiligheidsraad (5 permanente: VS/RU/CN/UK/FR met veto).\n• ICJ (Den Haag): geschillen tussen staten.\n• ICC (Den Haag): individuele oorlogsmisdaden.\n• Critiek: VS + grootmachten erkennen ICC niet altijd.",
    checks: [
      {
        q: "**Hobbes' natuurtoestand** wordt beschreven als:",
        options: ["Oorlog van allen tegen allen","Paradijs","Communistisch","Vrij + vredig"],
        answer: 0,
        wrongHints: [null, "Niet — Rousseau-achtig.", "Niet relevant.", "Niet — dat is Locke/Rousseau."],
        uitlegPad: {
          stappen: [{ titel: "Bellum omnium...", tekst: "**Hobbes** in *Leviathan*: zonder staat = 'oorlog van allen tegen allen' (bellum omnium contra omnes). Leven 'solitary, poor, nasty, brutish, and short'. Daarom geven mensen macht af aan absolute soeverein voor veiligheid." }],
          niveaus: { basis: "Oorlog allen tegen allen. A.", simpeler: "Hobbes natuur = oorlog = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Rawls' sluier van onwetendheid** test:",
        options: ["Welke principes je kiest als je niet weet wie je wordt","Of je liegt","Of je veel weet","Of God bestaat"],
        answer: 0,
        wrongHints: [null, "Niet — andere methode.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Onpartijdig kiezen", tekst: "**Rawls' veil of ignorance**: stel je zou principes voor maatschappij kiezen zonder te weten of je rijk/arm, man/vrouw, gezond/ziek wordt. Dan kies je principes die meest kwetsbaren beschermen (omdat je dat zelf zou kunnen zijn). Resultaat: redelijk egalitaire samenleving." }],
          niveaus: { basis: "Welke principes. A.", simpeler: "Sluier = onbevooroordeeld kiezen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Banaliteit van het kwaad** — wie introduceerde dit?",
        options: ["Hannah Arendt (Eichmann in Jerusalem)","Nietzsche","Marx","Aristoteles"],
        answer: 0,
        wrongHints: [null, "Niet — andere concepten.", "Niet — eerder.", "Niet — antiek."],
        uitlegPad: {
          stappen: [{ titel: "Eichmann-proces 1961", tekst: "**Arendt** (1906-1975) over Adolf Eichmann (nazi-bureaucraat verantwoordelijk voor deportatie Joden): geen monster maar gehoorzame ambtenaar zonder kritische reflectie. **Banaliteit van het kwaad** = grote misdaden begaan door 'gewone mensen' die functioneren zonder oordeel. Boek 1963, omstreden indertijd." }],
          theorie: "Toepassing modern: hoe systemen kwaad mogelijk maken (slavernij, holocaust, ecologische crisis) — niet door 'monsters' maar door routine + onreflexieve mensen.",
          niveaus: { basis: "Arendt. A.", simpeler: "Banaliteit = Arendt = A.", nogSimpeler: "Arendt = A." },
        },
      },
      {
        q: "**Montesquieu's** scheiding der machten:",
        options: ["Wetgevend / uitvoerend / rechterlijk","Staat / kerk","Rijk / arm","Stad / platteland"],
        answer: 0,
        wrongHints: [null, "Niet — andere scheiding.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Trias politica", tekst: "**Montesquieu** in *De l'esprit des lois* (1748): **trias politica** = drie machten gescheiden:\n• **Wetgevend** (parlement maakt wet).\n• **Uitvoerend** (regering past toe).\n• **Rechterlijk** (rechters beoordelen).\n\nOm tirannie te voorkomen. Basis moderne rechtsstaten." }],
          niveaus: { basis: "Wetg/uitv/rechtsp. A.", simpeler: "Trias = 3 machten = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "**Nozick** stelt:",
        options: ["Belasting voor herverdeling = dwangarbeid","Volledig communisme","Religieuze staat","Anarchie"],
        answer: 0,
        wrongHints: [null, "Niet — tegen.", "Niet relevant.", "Niet — wel staat (minimaal)."],
        uitlegPad: {
          stappen: [{ titel: "Libertarisme rechts", tekst: "**Robert Nozick** in *Anarchy, State, and Utopia* (1974): libertarisme. Staat moet minimaal zijn (alleen veiligheid + recht). **Herverdeling-belasting** = staat dwingt jou te werken voor anderen = vorm dwangarbeid. Recht op eigendom heilig. Reactie op Rawls' egalitarisme." }],
          theorie: "Cito-pattern: Rawls vs Nozick is klassiek debat: gelijkheid vs vrijheid.",
          niveaus: { basis: "Belasting=dwang. A.", simpeler: "Nozick = libertair = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — filosofie mix",
    explanation:
      "Mix van kennisleer + zijnsleer + ethiek + politiek.\n\nVeel succes!",
    checks: [
      {
        q: "**Aristoteles' deugd** ligt volgens hem:",
        options: ["Tussen twee uitersten (gulden middenweg)","Aan extreme kant","Bij meerderheid","Bij God"],
        answer: 0,
        wrongHints: [null, "Niet — deugd ligt in midden.", "Niet — niet democratisch.", "Niet — humanistisch."],
        uitlegPad: {
          stappen: [{ titel: "Gulden middenweg", tekst: "**Aristoteles**: deugd = **mediocritas / golden mean** tussen twee uitersten. Moed = tussen lafheid (te weinig) en roekeloosheid (te veel). Vrijgevigheid = tussen gierigheid en verkwisting. Niet voor elke eigenschap — pure rechtvaardigheid heeft geen tegendeel." }],
          niveaus: { basis: "Midden. A.", simpeler: "Aristoteles = midden = A.", nogSimpeler: "Midden = A." },
        },
      },
      {
        q: "**Foucault** stelt: macht is:",
        options: ["Overal aanwezig + relationeel","Alleen bij staat","Verboden","Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet — Foucault's punt.", "Niet relevant.", "Bestaat wel."],
        uitlegPad: {
          stappen: [{ titel: "Macht-relaties overal", tekst: "**Michel Foucault** stelt dat **macht overal aanwezig** is — niet alleen bij staat, ook in school, ziekenhuis, gevangenis, familie. Macht produceert kennis ('discours'). Niet alleen onderdrukkend maar ook normerend." }],
          niveaus: { basis: "Overal. A.", simpeler: "Foucault = overal macht = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Volgens **deontoloog** is liegen:",
        options: ["Altijd fout (ongeacht uitkomst)","Goed als het helpt","Geen issue","Soms goed soms fout op basis gevolg"],
        answer: 0,
        wrongHints: [null, "Niet — utilitarist.", "Niet — wel issue.", "Niet — dat is consequentialist."],
        uitlegPad: {
          stappen: [{ titel: "Regel zonder uitzondering", tekst: "**Deontologie (Kant)**: handeling beoordeeld op aard, niet uitkomst. **Liegen** = niet universaliseerbaar (als iedereen liegt, geen vertrouwen). Dus altijd fout. Beroemd-extreem voorbeeld: Kant zei zelfs **geen liegen tegen moordenaar** die vraagt waar slachtoffer is.\n\n(Niet alle deontologen volgen Kant zo strikt — moderne kunnen 'witte leugen' toestaan.)" }],
          niveaus: { basis: "Altijd fout. A.", simpeler: "Deontoloog liegt nooit = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Communisme** volgens Marx wordt bereikt door:",
        options: ["Klassenstrijd → revolutie","Gebed","Verkiezingen","Geleidelijk debat"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — radicaler.", "Niet — Marx ziet dat onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Marxistische theorie", tekst: "**Marx**: kapitalisme bevat tegenstellingen → arbeiders (proletariaat) worden bewust → **revolutie** tegen bezittende klasse (bourgeoisie). Daarna 'dictatuur van proletariaat' → uiteindelijk klassenloze + staatsloze samenleving (communisme).\n\nPraktijk 20e eeuw: Sovjet-Unie + China stopten op 'dictatuur'-fase, geen echte communisme bereikt." }],
          niveaus: { basis: "Klassenstrijd. A.", simpeler: "Marx = revolutie = A.", nogSimpeler: "Revol. = A." },
        },
      },
      {
        q: "**Nietzsche's** beroemde uitspraak 'God is dood' betekent:",
        options: ["Einde transcendente moraal — mensen moeten zelf waarden scheppen","God is letterlijk gestorven","God bestaat niet","Atheïsme verplicht"],
        answer: 0,
        wrongHints: [null, "Niet — metaforisch.", "Klopt impliciet maar de uitspraak gaat verder.", "Niet — culturele observatie."],
        uitlegPad: {
          stappen: [{ titel: "Cultureel feit", tekst: "**Nietzsche** in *Die fröhliche Wissenschaft* (1882): 'Gott ist tot'. Geen feitelijke claim — **cultuurdiagnose**: na Verlichting + wetenschap geloven westerse mensen niet meer in God. Probleem: traditionele moraal hing aan God. Wat nu? Nietzsche zelf: schep eigen waarden (Übermensch).\n\nMisbruikt door Nazi's; Nietzsche zelf was anti-antisemitisme + anti-nationalisme." }],
          niveaus: { basis: "Einde moraal. A.", simpeler: "God dood = einde moraal = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const filosofieVwo = {
  id: "filosofie-vwo",
  title: "Filosofie kernbegrippen (VWO)",
  emoji: "🤔",
  level: "vwo",
  subject: "filosofie",
  referentieNiveau: "vwo-CSE-filosofie",
  sloThema: "Filosofie VWO — kernbegrippen kennisleer/ethiek/zijn/politiek eindexamen",
  prerequisites: [],
  intro:
    "Filosofie VWO eindexamen-kernbegrippen. Kennisleer (Descartes-rationalisme vs Locke-empirisme + Kant-synthese + Popper-falsifikatie), zijnsleer (materialisme/idealisme/dualisme + vrije wil), ethiek (Kant-deontologie + Mill-utilitarisme + Aristoteles-deugd + trolleyprobleem), politieke filosofie (Hobbes/Locke/Rousseau/Rawls/Nozick/Marx/Arendt). ~15-20 min.",
  triggerKeywords: [
    "filosofie", "filosofische",
    "epistemologie", "kennisleer",
    "rationalisme", "empirisme",
    "Descartes", "cogito",
    "Locke", "Hume", "Berkeley", "tabula rasa",
    "Kant", "categorische imperatief",
    "fenomeen", "noumenon", "ding-an-sich",
    "Popper", "falsifikatie",
    "Kuhn", "paradigma",
    "Foucault", "macht",
    "metafysica", "ontologie",
    "materialisme", "idealisme", "dualisme",
    "vrije wil", "compatibilisme", "determinisme",
    "Spinoza",
    "ethiek", "moraal",
    "deontologie", "utilitarisme",
    "Mill", "Bentham",
    "Aristoteles", "eudaimonia", "deugd-ethiek",
    "trolleyprobleem",
    "Peter Singer", "speciecism",
    "politieke filosofie",
    "Hobbes", "Leviathan",
    "Rousseau", "sociaal contract",
    "Rawls", "sluier van onwetendheid",
    "Nozick", "libertarisme",
    "Marx", "klassenstrijd",
    "Arendt", "banaliteit kwaad",
    "Nietzsche", "God is dood",
    "Montesquieu", "trias politica",
    "natuurrecht", "rechtspositivisme",
    "rechtsstaat",
  ],
  chapters,
  steps,
};

export default filosofieVwo;
