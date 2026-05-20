// Leerpad: Filosofie — HAVO/VWO algemeen
// Inleiding tot filosofie: hoofdvragen + grote denkers + stromingen.
// Apart van filosofieVwo (VWO-specifiek programma).
// 5 stappen × ~5 checks.

const stepEmojis = ["🤔", "⛪", "🌅", "💭", "🏆"];

const chapters = [
  { letter: "A", title: "Oudheid (Socrates/Plato/Aristoteles)", emoji: "🤔", from: 0, to: 0 },
  { letter: "B", title: "Middeleeuwen + Verlichting", emoji: "⛪", from: 1, to: 1 },
  { letter: "C", title: "Moderne tijd (Kant/Hegel/Marx)", emoji: "🌅", from: 2, to: 2 },
  { letter: "D", title: "20e eeuw + nu", emoji: "💭", from: 3, to: 3 },
  { letter: "E", title: "Toegepaste ethiek", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Oudheid ───────────────────────────────────────────
  {
    title: "Wat is filosofie? — Socrates, Plato, Aristoteles",
    explanation:
      "**Filosofie** = 'liefde voor wijsheid' (Grieks: philo + sophia). Nadenken over fundamentele vragen.\n\n**Hoofdgebieden**:\n• **Metafysica**: wat IS er? (werkelijkheid, God, ziel)\n• **Epistemologie**: wat KUNNEN we weten?\n• **Ethiek**: wat is GOED handelen?\n• **Logica**: hoe redeneren we GELDIG?\n• **Esthetiek**: wat is SCHOONHEID?\n• **Politieke filosofie**: hoe samenleven?\n\n**Klassiek Griekenland** (500-300 v.Chr.) = bakermat westerse filosofie.\n\n**Socrates** (470-399 v.Chr.):\n• Schreef NIETS zelf op (alleen via Plato bekend).\n• **Socratische methode**: vragen stellen om aannames bloot te leggen.\n• Beroemd: 'Ik weet dat ik niets weet.'\n• Veroordeeld tot drinken gif (gifbeker met dolle kervel) voor 'verleiden jeugd'.\n• Voorbeeld voor 'eerlijk denken kost soms leven'.\n\n**Plato** (427-347 v.Chr.):\n• Leerling van Socrates.\n• Stichtte Academie in Athene.\n• **Ideeën-leer**: werkelijke wereld is ideeën-wereld; wat wij zien is schaduw (grot-allegorie).\n• Politiek: 'Republiek' — filosoof-koning regeert.\n• Ziel onsterfelijk.\n\n**Plato's Grot-allegorie**:\nMensen in grot, vastgebonden, kijken naar schaduwen op muur (= wat onze zintuigen waarnemen). Eén persoon breekt los, gaat naar buiten, ziet de echte wereld (= ideeën). Wanneer hij teruggaat om anderen te bevrijden, geloven ze hem niet. → filosoof = bevrijder met onmogelijke taak.\n\n**Aristoteles** (384-322 v.Chr.):\n• Leerling van Plato. Leraar van Alexander de Grote.\n• Stichtte Lyceum.\n• **Empirisme + observatie**: leer door waarnemen (in tegenstelling Plato's pure ideeën).\n• Schreef over ALLES: logica, biologie, fysica, ethiek, politiek, poëzie.\n• **Logica**: syllogisme (Alle X zijn Y; A is X → A is Y).\n• **Ethiek (Nicomachean)**: deugd-ethiek. Geluk = leven volgens deugden.\n• **Politiek**: mens is politiek dier; democratie + andere staatsvormen.\n• Domineerde Westers denken 1800 jaar (tot Galileo).\n\n**Pre-socratici** (vóór Socrates):\n• Thales: water = oer-element.\n• Heraclitus: 'alles stroomt' (panta rhei).\n• Pythagoras: getallen = essentie werkelijkheid.\n• Democritus: atoom-theorie (alles uit ondeelbare deeltjes).\n\n**Andere oudheid**:\n• **Stoïcisme** (Seneca, Marcus Aurelius): aanvaarden wat je niet kunt veranderen, controleer wat WEL.\n• **Epicurus**: matig genot + vriendschap = geluk.\n• **Skepticisme**: alles in twijfel trekken.",
    checks: [
      {
        q: "**Socrates** geloofde dat:",
        options: [
          "Vragen stellen leidt tot waarheid ('socratische methode')",
          "Boeken schrijven essentieel",
          "Geld is doel van leven",
          "Wetenschap belangrijker dan filosofie"
        ],
        answer: 0,
        wrongHints: [null, "Schreef niets zelf.", "Tegenovergesteld.", "Filosofie + wetenschap waren één."],
        uitlegPad: {
          stappen: [{ titel: "'Maieutiek' = vroedvrouw-methode", tekst: "Socrates vergeleek zichzelf met vroedvrouw: niet zelf bevallen maar anderen helpen hun ideeën 'baren'. Door vragen te stellen ontdekt mens zelf wat hij denkt. 'Ik weet dat ik niets weet' = vertrekpunt voor eerlijk onderzoek." }],
          niveaus: { basis: "Vragen stellen. A.", simpeler: "Socratisch = vraag-methode. A.", nogSimpeler: "Vragen = A." },
        },
      },
      {
        q: "**Plato's grot-allegorie** symboliseert:",
        options: [
          "Onze zintuigen tonen schaduwen; ware werkelijkheid is in ideeën",
          "Mensen in grot leven",
          "Donker is beter",
          "Geen filosofie nodig"
        ],
        answer: 0,
        wrongHints: [null, "Letterlijk verkeerd.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "'Politeia' boek 7", tekst: "Vastgebonden mensen in grot zien alleen schaduwen op muur (= zintuiglijke wereld). Filosoof bevrijdt zichzelf, ziet zon (= waarheid/Goed). Teruggekeerd worden ze niet geloofd. Plato's punt: filosofische waarheid is verborgen + ongemakkelijk." },
          ],
          niveaus: { basis: "Zintuig vs waarheid. A.", simpeler: "Wat we zien = niet echt. A.", nogSimpeler: "Grot = A." },
        },
      },
      {
        q: "**Aristoteles** stond voor:",
        options: [
          "Observatie + empirisme — leren door waarnemen",
          "Pure ideeën-wereld",
          "Goden bestuderen alleen",
          "Geen wetenschap"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is Plato.", "Niet primair.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Wetenschappelijk denken", tekst: "Aristoteles brak met Plato's pure-ideeën. Hij observeerde dieren, plantte planten, verzamelde data. Vader van biologie + logica. Voorbeeld: classificeerde ~500 dier-soorten. Klassiek empirisme begin. Domineerde tot 1500." },
          ],
          niveaus: { basis: "Observatie. A.", simpeler: "Empirisme = waarnemen. A.", nogSimpeler: "Observatie = A." },
        },
      },
      {
        q: "**Stoïcisme** leert:",
        options: [
          "Aanvaard wat je niet kunt veranderen; controle wat je WEL kunt",
          "Vermijd alle gevoelens",
          "Voorname leven",
          "Materialisme"
        ],
        answer: 0,
        wrongHints: [null, "Niet vermijden — beheersen.", "Niet specifiek.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Stoa-school Athene", tekst: "Marcus Aurelius (Romeinse keizer): 'Meditaties' — dagboek met stoïsche reflecties. Epictetus: 'Wat in onze macht ligt: oordeel, neiging. Buiten onze macht: lichaam, bezit, reputatie.' Vandaag heropleving als 'modern stoicism' + self-help (Tim Ferriss e.a.)." },
          ],
          niveaus: { basis: "Aanvaarden + controle. A.", simpeler: "Sta sterk bij tegenslag. A.", nogSimpeler: "Stoa = A." },
        },
      },
      {
        q: "Wat is **metafysica**?",
        options: [
          "Filosofie over wat 'IS' — werkelijkheid, God, ziel",
          "Filosofie over taal",
          "Filosofie over kunst",
          "Wiskunde"
        ],
        answer: 0,
        wrongHints: [null, "Niet — taalfilosofie.", "Niet — esthetiek.", "Niet — apart vak."],
        uitlegPad: {
          stappen: [{ titel: "Naar fysica + verder", tekst: "Aristoteles' boek 'na de fysica' = metafysica. Onderzoekt fundamentele aard werkelijkheid: bestaat God? Wat is ziel? Vrije wil? Wat is 'zijn'? Klassieke filosofische onderwerp." }],
          niveaus: { basis: "Wat is. A.", simpeler: "Werkelijkheid + God-vragen. A.", nogSimpeler: "Meta = A." },
        },
      },
    ],
  },

  // ─── B. Middeleeuwen + Verlichting ────────────────────────
  {
    title: "Middeleeuwen + Verlichting — Augustinus tot Kant-voorlopers",
    explanation:
      "**Middeleeuwen** (500-1500): filosofie domineerd door **religie** (Christendom in West, Islam in Midden-Oosten).\n\n**Christelijke filosofie**:\n• **Augustinus** (354-430): zonde-doctrine, vrije wil, predestinatie. 'Bekentenissen' = klassieke autobiografie.\n• **Thomas Aquinas** (1225-1274): combineerde Aristoteles + Christendom. Vijf bewijzen voor God's bestaan ('Summa Theologica'). Officieel-katholieke filosoof.\n\n**Islamitische filosofie**:\n• **Al-Farabi**, **Avicenna (Ibn Sina)**, **Averroës (Ibn Rushd)** — bewaarden + ontwikkelden Griekse filosofie tijdens Europese 'donkere middeleeuwen'.\n• Via vertaalbeweging Toledo (12e eeuw) keerde Aristoteles via Arabisch terug naar Europa.\n\n**Renaissance** (1300-1600):\n• Herontdekking klassieke teksten.\n• **Humanisme**: focus op mens, niet alleen God.\n• Erasmus (Rotterdam, 1466-1536): 'Lof der Zotheid' — kritiek op kerk.\n• Machiavelli: 'De Vorst' — politiek realisme, doel heiligt middel.\n\n**Wetenschappelijke revolutie** (1500-1700):\n• Galileo, Newton, Kepler.\n• Brak met aristoteliaanse middeleeuwse fysica.\n• Filosofie + wetenschap nog één vak.\n\n**Verlichting** (1650-1800) = **Filosofie van de Rede**:\n\n**Rationalisme** (kennis komt uit rede):\n• **Descartes** (1596-1650, Frans-NL): 'Cogito ergo sum' (Ik denk, dus ik ben). Methodische twijfel. Dualisme lichaam/geest.\n• **Spinoza** (1632-1677, NL): God = Natuur. Determinisme. 'Ethica'.\n• **Leibniz** (1646-1716): monaden-theorie, optimisme ('beste van alle mogelijke werelden' — Voltaire bespotte dit in 'Candide').\n\n**Empirisme** (kennis komt uit ervaring):\n• **Locke** (1632-1704, Brits): mens geboren als 'tabula rasa' (lege lei). Natuurrechten: leven, vrijheid, eigendom. Inspireerde Amerikaanse Onafhankelijkheid 1776.\n• **Berkeley** (1685-1753): radicaal idealisme — 'esse est percipi' (bestaan = waargenomen worden).\n• **Hume** (1711-1776, Schots): twijfel aan oorzakelijkheid + zelf. Inspireerde Kant.\n\n**Verlichtingsidealen**:\n• Vrijheid van denken.\n• Tolerantie.\n• Wetenschappelijke methode.\n• Mensenrechten.\n• Scheiding kerk + staat.\n• Democratie.\n\n**Voltaire** (1694-1778): satirische auteur, kritisch op kerk + monarchie. 'Écrasez l'infâme' (verniel het schandaal).\n**Rousseau** (1712-1778): 'Du contrat social' — soevereiniteit van het volk. 'De mens is geboren vrij, maar overal in ketens.' Inspireerde Franse Revolutie.\n**Diderot** + d'Alembert: Encyclopédie — eerste algemene-kennis-werk om volk te onderwijzen.\n\n**Kant** (1724-1804): synthese rationalisme + empirisme.\n• 'Kritik der reinen Vernunft' (1781).\n• Kennis = rede STRUCTUREERT zintuiglijke data.\n• Plicht-ethiek: categorische imperatief.\n• Verlichting = 'Habe Mut, dich deines eigenen Verstandes zu bedienen!' (Heb moed om eigen verstand te gebruiken).",
    checks: [
      {
        q: "**Descartes'** beroemde uitspraak:",
        options: [
          "'Cogito ergo sum' — Ik denk, dus ik ben",
          "'God is dood'",
          "'Het is wat het is'",
          "'Ik weet dat ik niets weet'"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Nietzsche.", "Onzin.", "Niet — Socrates."],
        uitlegPad: {
          stappen: [
            { titel: "Onbetwijfelbaar startpunt", tekst: "Descartes begon met alles te twijfelen (kan ik mijn zintuigen vertrouwen? mijn gedachten? misschien is alles droom of demon-bedrog?). Maar als hij denkt, MOET hij bestaan om te denken. 'Ik denk dus ik ben' = onwrikbaar fundament voor verdere kennis." },
          ],
          niveaus: { basis: "Ik denk dus ik ben. A.", simpeler: "Cogito ergo sum. A.", nogSimpeler: "Cogito = A." },
        },
      },
      {
        q: "**Tabula rasa** (Locke) betekent:",
        options: [
          "Mens geboren als 'lege lei' — kennis komt uit ervaring",
          "Tafel met gerechten",
          "Aangeboren kennis bestaat",
          "Aristoteles"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Tegenovergesteld.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Empirisme-fundament", tekst: "Locke: bij geboorte kent baby NIETS. Alle kennis komt uit zintuiglijke ervaring. Tegen-Plato's aangeboren ideeën. Implicatie: onderwijs cruciaal, mensen vormbaar. Inspireerde Amerikaanse + Franse Revolutie (gelijke kansen vanaf geboorte)." },
          ],
          niveaus: { basis: "Lege lei bij geboorte. A.", simpeler: "Niets aangeboren. A.", nogSimpeler: "Leeg = A." },
        },
      },
      {
        q: "**Spinoza** vereenzelvigde:",
        options: [
          "God met de Natuur (pantheïsme)",
          "Wetenschap met religie",
          "Kunst met filosofie",
          "Niets"
        ],
        answer: 0,
        wrongHints: [null, "Niet — apart.", "Niet specifiek.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Deus sive Natura", tekst: "Spinoza: God = Natuur. Geen apart wezen buiten universum, maar het universum ZELF is goddelijk. Werd om deze visie vervloekt door joodse gemeenschap Amsterdam (cherem 1656). Vandaag invloedrijke filosoof, Einstein noemde hem zijn voorbeeld." },
          ],
          niveaus: { basis: "God = Natuur. A.", simpeler: "Universum = God. A.", nogSimpeler: "Pantheïsme = A." },
        },
      },
      {
        q: "**Verlichting**-motto van Kant:",
        options: [
          "'Heb moed om eigen verstand te gebruiken' (Sapere aude!)",
          "'God dient'",
          "'Geld is alles'",
          "'Geen denken'"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Onzin.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "1784 'Was ist Aufklärung?'", tekst: "Kant: Verlichting = uitgaan uit zelf-veroorzaakte onmondigheid. Niet anderen (priester, autoriteit) laten denken voor jou. SAPERE AUDE = durf te weten. Kernidee Verlichting + zelfontwikkeling tot vandaag." },
          ],
          niveaus: { basis: "Heb moed te denken. A.", simpeler: "Eigen denken durven. A.", nogSimpeler: "Sapere aude = A." },
        },
      },
      {
        q: "**Thomas Aquinas** combineerde:",
        options: [
          "Aristoteles met Christendom",
          "Plato met Boeddhisme",
          "Wetenschap met magie",
          "Niets"
        ],
        answer: 0,
        wrongHints: [null, "Onjuist.", "Niet zijn werk.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Synthese 13e eeuw", tekst: "Toen Aristoteles' werken terugkwamen via Arabische vertalingen → conflict met kerk. Aquinas (Dominicaanse monnik) integreerde Aristoteles' logica + observatie in katholieke theologie. 'Summa Theologica' = grote werk. Vijf bewijzen voor God's bestaan. Officieel katholiek filosoof." },
          ],
          niveaus: { basis: "Aristoteles + Christendom. A.", simpeler: "Filo + religie samen. A.", nogSimpeler: "Aquinas = A." },
        },
      },
    ],
  },

  // ─── C. Moderne tijd ──────────────────────────────────────
  {
    title: "Moderne tijd — Kant, Hegel, Marx, Nietzsche",
    explanation:
      "**Kant** (1724-1804) — 'Copernicaanse omwenteling' in filosofie:\n• Niet onze geest past zich aan werkelijkheid aan, MAAR werkelijkheid past zich aan onze geest (categorieën).\n• 'Ding-aan-zich' (Ding-an-sich) niet kenbaar; we kennen alleen verschijningen.\n• **Categorische imperatief** (ethiek): 'Handel zo dat de maxime van je handelen tot algemene wet zou kunnen worden.' = behandel anderen zoals je zelf behandeld wilt worden.\n• Plichtethiek: doe het goede omdat het PLICHT is, niet voor gevolgen.\n\n**Hegel** (1770-1831):\n• **Dialectiek**: these → antithese → synthese.\n• Geschiedenis = ontvouwing van de Geest (Geist).\n• Dialectische beweging stuwt geschiedenis vooruit.\n• Inspireerde Marx (omkeer naar materialisme).\n\n**Marx** (1818-1883):\n• Hegel + materialisme = historisch materialisme.\n• Geschiedenis = klassenstrijd.\n• Kapitalisme: arbeider verkoopt arbeidskracht; kapitalist neemt meerwaarde.\n• Voorspelde proletarische revolutie → socialisme → communisme.\n• 'Communistisch Manifest' (1848) met Engels.\n• 'Het Kapitaal' (1867).\n• Praktische impact enorm: Russische Revolutie 1917, Chinese 1949.\n\n**Schopenhauer** (1788-1860):\n• Pessimistisch: leven is lijden, gedreven door 'Wil'.\n• Verlichting via kunst (vooral muziek) + ascese.\n• Beïnvloedde Nietzsche, Wagner, Freud.\n\n**Nietzsche** (1844-1900):\n• 'God is dood' — niet jubelend maar diagnostisch: oude waarden verdwijnen.\n• **Übermensch** (overmens): creëer je eigen waarden.\n• Kritiek op christelijke 'slavemoral' (deemoed, lijden).\n• 'Wille zur Macht' = wil tot macht.\n• Later misbruikt door Nazi's (zus Elisabeth herschreef werk).\n• Klassiek: 'Also sprach Zarathustra', 'Voorbij goed en kwaad', 'Genealogie van de moraal'.\n\n**Utilitarisme** (Bentham + Mill):\n• Bentham (1748-1832): grootste geluk voor grootste aantal.\n• 'Hedonic calculus': meet plezier vs pijn voor elke beslissing.\n• Mill (1806-1873): 'Utilitarianism' (1861). Verfijning: kwalitatief verschil tussen genoegens (Beethoven > junk-food).\n• 'On Liberty' (1859): individuele vrijheid mag pas beperkt als ander schade ondervindt (harm principle).\n\n**Kierkegaard** (1813-1855):\n• Vader van existentialisme.\n• 'De sprong in geloof' — religieus engagement is irrationele keuze.\n• Authenticiteit + individu boven 'kudde'.\n\n**Pragmatisme** (Amerikaans, 1870+):\n• William James, John Dewey, Charles Peirce.\n• 'Waarheid' = wat WERKT in praktijk.\n• Geen vaste essenties; alles in ontwikkeling.\n\n**Drie groot-stromingen 19e eeuw**:\n• **Liberalisme** (Locke + Mill): individuele vrijheid.\n• **Socialisme** (Marx): collectieve eigendom.\n• **Conservatisme** (Burke): traditie + voorzichtigheid.\n• Strijd vandaag nog aanwezig in politiek.",
    checks: [
      {
        q: "Kant's **categorische imperatief**:",
        options: [
          "Handel zo dat je actie tot algemene wet kan worden — soort 'Gouden Regel'",
          "Doe wat je wil",
          "Volg God",
          "Maximaliseer plezier"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — Kant seculier.", "Niet — utilitarisme."],
        uitlegPad: {
          stappen: [
            { titel: "Universaliseren", tekst: "Voorbeeld liegen: als IEDEREEN zou liegen, werkt taal niet → tegenstrijdig → liegen verboden. Niet liegen omdat je gepakt wordt, maar omdat het logisch onmogelijk algemeen kan worden. Strenge plichtethiek." },
          ],
          niveaus: { basis: "Universele wet. A.", simpeler: "Maak van actie algemene regel. A.", nogSimpeler: "Cat. imp. = A." },
        },
      },
      {
        q: "**Marx** zag geschiedenis als:",
        options: [
          "Klassenstrijd tussen onderdrukten + onderdrukkers",
          "Goddelijke wil",
          "Toeval",
          "Geen patroon"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — patroon.", "Wel patroon."],
        uitlegPad: {
          stappen: [
            { titel: "Historisch materialisme", tekst: "Marx: door tijd heen klassenstrijd: meester vs slaaf → adel vs boer → kapitalist vs arbeider. Klassenstrijd drijft historische verandering. Voorspelling: arbeiders revolutioneren → klasseloze maatschappij. Praktijk-implementatie (Stalin, Mao) liep slecht af." },
          ],
          niveaus: { basis: "Klassenstrijd. A.", simpeler: "Klassen vechten in tijd. A.", nogSimpeler: "Klassen = A." },
        },
      },
      {
        q: "**'God is dood'** is uitspraak van:",
        options: ["Nietzsche", "Kant", "Marx", "Spinoza"],
        answer: 0,
        wrongHints: [null, "Niet — religieus.", "Niet — economie.", "Niet — God = Natuur."],
        uitlegPad: {
          stappen: [
            { titel: "Diagnose, niet juich-kreet", tekst: "Nietzsche bedoelde: christelijke God + traditionele waarden verliezen autoriteit door wetenschap + secularisatie. Niemand gelooft echt meer. Probleem: hoe nu morele basis? Antwoord: Übermensch creëert eigen waarden. Veel-misbegrepen als atheïsme-overwinning; meer als crisis-vaststelling." },
          ],
          niveaus: { basis: "Nietzsche. A.", simpeler: "Friedrich Nietzsche. A.", nogSimpeler: "Nietzsche = A." },
        },
      },
      {
        q: "**Utilitarisme** (Bentham/Mill):",
        options: [
          "Grootste geluk voor grootste aantal mensen",
          "Plicht boven gevolg",
          "Individu boven groep",
          "Niets"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is Kant.", "Tegenovergesteld.", "Wel filosofie."],
        uitlegPad: {
          stappen: [
            { titel: "Gevolgen-ethiek", tekst: "Bentham (1789): meet geluk + pijn voor alle betrokkenen, kies actie met meeste netto-geluk. Mill verfijnde: kwalitatieve verschillen (Socrates ontevreden > varken tevreden). Praktisch: veel beleid (kosten-baten-analyse) impliciet utilitaristisch. Kritiek: kan minderheden offeren voor meerderheid." },
          ],
          niveaus: { basis: "Meeste geluk. A.", simpeler: "Wat maakt meeste mensen blij. A.", nogSimpeler: "Geluk = A." },
        },
      },
      {
        q: "Hegel's **dialectiek**:",
        options: [
          "These → antithese → synthese (oppositie + samenkomst)",
          "Argumenten in cirkel",
          "Geen patroon",
          "Wiskundig bewijs"
        ],
        answer: 0,
        wrongHints: [null, "Niet — vooruitgang.", "Wel patroon.", "Niet specifiek."],
        uitlegPad: {
          stappen: [
            { titel: "Drie-staps-beweging", tekst: "Een idee (these) roept tegenoverstelling op (antithese). Conflict resulteert in nieuwe synthese die deels beide bevat. Synthese wordt nieuwe these → cyclus herhaalt. Marx draaide om: niet ideeën maar economische klassen drijven dialectiek." },
          ],
          niveaus: { basis: "These/anti/synthese. A.", simpeler: "Conflict → samen. A.", nogSimpeler: "Dialectiek = A." },
        },
      },
    ],
  },

  // ─── D. 20e + 21e eeuw ────────────────────────────────────
  {
    title: "20e + 21e eeuw — Existentialisme, postmodern, contemporair",
    explanation:
      "**Existentialisme** (na WO2):\n• 'Existentie gaat aan essentie vooraf' — we bestaan eerst, daarna kiezen we wie we zijn.\n• Tegen-essentialisme (er is geen 'vaste menselijke natuur').\n\n**Hoofdfiguren**:\n• **Heidegger** (1889-1976, DE): 'Sein und Zeit' (1927) — analyse van mens-zijn (Dasein) + tijdelijkheid. Controversieel om NSDAP-lidmaatschap.\n• **Sartre** (1905-1980, FR): 'L'être et le néant' (1943). Mens is 'veroordeeld tot vrijheid'. Geen God = mens schept eigen betekenis. Existentialisme + marxisme combineren. Weigerde Nobelprijs.\n• **De Beauvoir** (1908-1986, FR): 'Le deuxième sexe' (1949) — feministische klassieker. 'Je wordt niet vrouw geboren, je wordt het.'\n• **Camus** (1913-1960, FR): 'Le mythe de Sisyphe' (1942) — absurditeit van leven. Hoe leven met zinloosheid? Antwoord: rebellie. Nobel 1957.\n\n**Frankfurter Schule** (kritische theorie):\n• Adorno, Horkheimer, Marcuse, Habermas, Benjamin.\n• Marx + Freud + cultuur-kritiek.\n• 'Dialektik der Aufklärung' (1944): zelfs Verlichting kon leiden tot Auschwitz door instrumentale rede.\n• Habermas: 'communicatieve rationaliteit' — vrije discussie als basis voor democratie.\n\n**Postmodernisme** (1960+):\n• **Foucault** (1926-1984, FR): macht is overal, wetenschap zelf machts-instrument. 'Disciplineren en straffen': panopticon-metafoor. Geschiedenis van sexualiteit, gevangenis, gekheid.\n• **Derrida** (1930-2004, FR): deconstructie — tegenstellingen in teksten ontwarden.\n• **Lyotard**: einde van grote verhalen (Marxisme, Liberalisme, Religie).\n• Kritiek: relativisme + onleesbare proza.\n\n**Analytische filosofie** (Anglo-Amerikaans):\n• **Russell**, **Wittgenstein**: focus op logica + taal-analyse.\n• Wittgenstein 'Tractatus' (1921): grenzen van wat zegbaar is.\n• Later: 'Filosofische Onderzoekingen' — taal als 'spel' met regels.\n• **Quine**, **Kripke**: ontologie + necessiteit.\n\n**Politieke filosofie 20e eeuw**:\n• **Rawls** (1921-2002, USA): 'A Theory of Justice' (1971). Veil of ignorance — ontwerp samenleving zonder te weten wat je positie wordt. Maximin-principe: maximaliseer minimum-welstand.\n• **Nozick** (1938-2002): libertair tegenwicht Rawls. 'Anarchy, State, Utopia' (1974). Minimale staat.\n• **Hannah Arendt** (1906-1975): 'Banaliteit van het kwaad' — Eichmann was geen monster, gewoon ambtenaar. Totalitarisme-analyse.\n\n**Mensenrechten + Ubuntu**:\n• Universele Verklaring 1948 na WO2.\n• Ubuntu (Afrika): 'ik ben omdat wij zijn'. Gemeenschap > individu.\n• Confucianisme (China): harmonie, traditie, familie.\n\n**Contemporair (sinds 2000)**:\n• **Peter Singer** (Australisch): dier-rechten ('Animal Liberation' 1975), effectief altruïsme. Utilitarist.\n• **Martha Nussbaum** (USA): 'capabilities approach' (Sen + Nussbaum) — wat MOETEN mensen kunnen om bloeiend leven te leiden?\n• **Slavoj Žižek** (Slovenië): hedendaagse cultuur-criticus, mediagenie.\n• **Yuval Noah Harari**: 'Sapiens', 'Homo Deus' — populaire grote-verhaal-filosofie.\n• Klimaat-ethiek + AI-ethiek = nieuwe velden.",
    checks: [
      {
        q: "**'Je wordt niet vrouw geboren, je wordt het'** is van:",
        options: ["Simone de Beauvoir", "Sartre", "Camus", "Foucault"],
        answer: 0,
        wrongHints: [null, "Niet — wel haar partner.", "Niet — anders.", "Niet — postmodern."],
        uitlegPad: {
          stappen: [
            { titel: "'Le deuxième sexe' 1949", tekst: "De Beauvoir: 'vrouwelijkheid' is sociale constructie, niet biologisch lot. Vrouwen leren op te treden als 'het andere' van mannen. Klassieker tweede-feministische-golf, basis voor moderne genderstudies. Schreef ook 'De grijze leeftijd' over ouder-worden." },
          ],
          niveaus: { basis: "De Beauvoir. A.", simpeler: "Beauvoir = feministisch. A.", nogSimpeler: "Beauv = A." },
        },
      },
      {
        q: "**Rawls'** 'veil of ignorance' vraagt:",
        options: [
          "Ontwerp samenleving zonder te weten welke positie je zelf krijgt",
          "Sluit ogen voor onrecht",
          "Negeer geschiedenis",
          "Geen oordeel"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Hypothetische start-positie", tekst: "Stel: je gaat samenleving ontwerpen + weet niet of je rijk/arm, man/vrouw, wit/zwart, gezond/ziek, hoog/laag-opgeleid wordt. Welke regels kies je? Rawls: meeste mensen zouden basisinkomen + gezondheidszorg + onderwijs zekerstellen (je zou tot 'onderkant' kunnen behoren). Beroemd liberaal-progressief argument." },
          ],
          niveaus: { basis: "Onbekende positie. A.", simpeler: "Ontwerp rechtvaardig zonder eigenbelang. A.", nogSimpeler: "Veil = A." },
        },
      },
      {
        q: "**Foucault** stelde dat:",
        options: [
          "Macht is overal, ook in 'neutrale' kennis + instituties",
          "Macht alleen bij koningen",
          "Geen macht",
          "Macht alleen via geweld"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel macht.", "Niet exclusief."],
        uitlegPad: {
          stappen: [
            { titel: "Power/knowledge", tekst: "Foucault: scholen, ziekenhuizen, gevangenissen, psychiatrie disciplineren mensen subtieler dan direct geweld. Wetenschap (sexualiteit, criminaliteit) zelf creëert categorieën die mensen beheersen. Panopticon (Bentham-design): cel-ontwerp waar bewaker iedereen kan zien zonder zelf gezien te worden → mensen disciplineren zichzelf." },
          ],
          niveaus: { basis: "Macht overal. A.", simpeler: "Kennis = macht. A.", nogSimpeler: "Foucault = A." },
        },
      },
      {
        q: "**Hannah Arendt's** 'banaliteit van het kwaad':",
        options: [
          "Holocaust-uitvoerder Eichmann was gewone ambtenaar, geen monster",
          "Kwaad is altijd spectaculair",
          "Geen kwaad in moderne tijd",
          "Geen filosofie hierover"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "'Eichmann in Jerusalem' 1963", tekst: "Arendt volgde proces tegen Eichmann (Holocaust-bureaucraat). Zag geen demonisch monster maar bureaucratische middelmaat die orders volgde zonder na te denken. Kwaad ontstaat door gedachtenloosheid + conformisme, niet alleen door bewust evil. Controversieel: critici vonden ze Eichmann te zacht beoordeelde." },
          ],
          niveaus: { basis: "Gewone ambtenaar = kwaad. A.", simpeler: "Banaal kwaad. A.", nogSimpeler: "Banaliteit = A." },
        },
      },
      {
        q: "**Peter Singer** is bekend om:",
        options: [
          "Dier-rechten + effectief altruïsme (utilitarist)",
          "Existentialisme",
          "Tegen vegetarisme",
          "Anti-wetenschap"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld stroming.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "'Animal Liberation' 1975", tekst: "Singer: morele cirkel uitbreiden naar dieren (ze voelen pijn). 'Speciesisme' (zoals racisme of seksisme) is onhoudbaar. Argumenteert tegen vee-industrie. Effectief altruïsme: geef aan organisaties die meeste levens redden per euro. Controversieel: ook standpunt over zwaar-gehandicapte baby's." },
          ],
          niveaus: { basis: "Dier-rechten. A.", simpeler: "Dieren ook moreel telt. A.", nogSimpeler: "Singer = A." },
        },
      },
    ],
  },

  // ─── E. Toegepaste ethiek ─────────────────────────────────
  {
    title: "Eindopdracht — Toegepaste ethiek (AI, klimaat, abortus)",
    explanation:
      "**Toegepaste ethiek** = filosofie op concrete dilemma's.\n\n**Drie hoofdbenaderingen** (uit eerdere stappen):\n• **Deontologie** (Kant): regels + plichten. Sommige dingen NOOIT, ongeacht gevolgen.\n• **Utilitarisme** (Bentham/Mill): wat maximaliseert totaal welzijn?\n• **Deugd-ethiek** (Aristoteles): wat zou een goed mens doen? Karakter > regels.\n\n**Hedendaagse dilemma's**:\n\n**1. Klimaat-ethiek**:\n• Verantwoordelijkheid huidige naar toekomstige generaties.\n• Rijke landen veroorzaken meer CO₂, arme landen lijden meer.\n• Individuele actie vs systemische (wat zin?).\n• Eco-modernisme vs degrowth.\n\n**2. AI-ethiek**:\n• Bias in algoritmen (gezichtsherkenning werkt slecht op zwart).\n• Werkloosheid door automatisering.\n• Privacy + surveillance.\n• Autonoom rijden + 'trolley-probleem' op weg.\n• AGI (artificial general intelligence): risico voor mensheid?\n• ChatGPT + creatief werk + onderwijs.\n\n**3. Bio-ethiek**:\n• **Abortus**: vs leven-vanaf-conceptie OF vrouwelijk-zelfbeschikkingsrecht.\n• **Euthanasie**: NL toegestaan onder strikte voorwaarden (1994+).\n• Stamcellen + IVF + embryo-selectie.\n• Genetische manipulatie (CRISPR): designer-baby's?\n• Orgaandonatie (NL: actief donor-systeem sinds 2020 — iedereen donor tenzij anders aangegeven).\n\n**4. Vlees-ethiek**:\n• 70+ mld dieren per jaar geslacht.\n• Klimaatimpact (livestock 14% global CO₂).\n• Gezondheids-impact.\n• Trolley-vergelijking: zou je iets eten dat lijdt voor klein plezier?\n\n**5. Migratie-ethiek**:\n• Recht op vrij bewegen?\n• Rijke landen morele plicht arme te helpen?\n• Conflict tussen nationale soevereiniteit + universele mensenrechten.\n\n**6. Werk + AI**:\n• Universal Basic Income — werkloosheid in AI-tijdperk opvangen.\n• Recht op werk vs recht op vrijheid van werk.\n\n**Klassiek dilemma — trolley-probleem** (Philippa Foot 1967):\nEen tram rijdt op 5 mensen af. Je kan wissel omzetten → tram doodt 1 ander mens. Doe je het?\n• Utilitarist: ja, 5 > 1.\n• Deontoloog: nee, je VERMOORDT actief 1 onschuldig (verschilt van 'laten sterven').\n• Andere variant: duw dikke man van brug om tram te stoppen → meeste mensen weigeren. Waarom anders? Iets met DIRECTE actie + handelen.\n\n**Drogredenen** in ethische debatten:\n• **Hellend vlak**: 'als A toelaat, dan ook B, dan Z'.\n• **Ad hominem**: persoon aanvallen ipv argument.\n• **Stropop**: tegenstanders standpunt verzwakken.\n• **Beroep op natuur**: 'natuurlijk dus goed'.\n\n**Hoe ethisch denken?**:\n1. Identificeer dilemma + betrokkenen.\n2. Wat zegt elke benadering (deontoloog/utilitarist/deugd)?\n3. Welke waarden conflicteren? (vrijheid vs gelijkheid? individu vs gemeenschap?)\n4. Hellingsvlak echt of bangmakerij?\n5. Maak eigen positie + onderbouw met argumenten.\n6. Sta open voor andere posities.\n\n**Vier hoofdwaarden Westerse ethiek**:\n• Vrijheid.\n• Gelijkheid.\n• Solidariteit.\n• Verantwoordelijkheid.\n\nSpanning daartussen drijft veel politiek debat.\n\n**Praktisch advies**:\n• Vorm eigen mening + lees diverse bronnen.\n• Praat met mensen die anders denken.\n• Onderbouw je standpunt — niet 'omdat ik het voel'.\n• Sta open voor revisie bij nieuw bewijs.",
    checks: [
      {
        q: "**Trolley-probleem**: wissel omzetten dood 1, anders sterven 5. Wat zegt utilitarist?",
        options: [
          "Doe het — 5 redden is meer welzijn dan 1 doden",
          "Niet doen — actief doden is verbod",
          "Geen mening",
          "Vraag iemand anders"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is deontoloog.", "Wel filosofische antwoord.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Reken-ethiek", tekst: "Utilitarist telt geluk + ellende. 5 levens > 1 leven → schakelen is moreel verplicht (volgens deze school). Maar bij 'dikke man van brug duwen': intuïtief verzet — directere actie voelt slechter. Filosofen blijven discussiëren of dit consistent is." },
          ],
          niveaus: { basis: "Doen — 5>1. A.", simpeler: "Meer redden = doen. A.", nogSimpeler: "5>1 = A." },
        },
      },
      {
        q: "**Deontologie** (Kant) zou bij trolley-probleem zeggen:",
        options: [
          "Niet doen — actief doden van onschuldige is altijd verkeerd",
          "Doen — 5>1",
          "Geen mening",
          "Doe wat je wil"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is utilitarist.", "Wel mening.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Geen middel-doel-rechtvaardiging", tekst: "Kant: behandel mensen nooit ALLEEN als middel. Actief de tram doorsturen → gebruik je 1 persoon als instrument om 5 te redden → ongeoorloofd. Verschil tussen: laten sterven (5 niet redden) en actief doden (1 doodrijden). Veel mensen voelen dit verschil intuïtief." },
          ],
          niveaus: { basis: "Niet doden. A.", simpeler: "Actief doden = nooit. A.", nogSimpeler: "Niet doen = A." },
        },
      },
      {
        q: "**Drogreden 'hellend vlak'** is:",
        options: [
          "'Als A toelaten, dan ook B, dan Z' — onbewezen domino-redenering",
          "Logische argumentatie",
          "Wiskundig bewijs",
          "Persoonlijke voorkeur"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Niet specifiek."],
        uitlegPad: {
          stappen: [
            { titel: "Veel-gebruikt + vaak fout", tekst: "Voorbeeld: 'Als euthanasie wettelijk wordt, eindigen we bij ongewenste ouderen actief vermoorden.' Maar: geen bewijs dat A → B → Z onvermijdelijk. Sommige hellende-vlakken kloppen wel (waakzaamheid nodig), andere zijn bangmakerij. Onderscheid: zijn er buffers + checks in proces?" },
          ],
          niveaus: { basis: "Onbewezen domino. A.", simpeler: "A leidt onvermijdelijk tot Z = vaak fout. A.", nogSimpeler: "Hellend = A." },
        },
      },
      {
        q: "**NL euthanasie-wet** vereist:",
        options: [
          "Strikte voorwaarden + arts-beoordeling + lijden zonder uitzicht",
          "Alleen patiënt-aanvraag",
          "Verboden",
          "Iedereen kan euthanasie krijgen"
        ],
        answer: 0,
        wrongHints: [null, "Onvolledig.", "Niet — toegestaan.", "Niet — strikt."],
        uitlegPad: {
          stappen: [
            { titel: "1994 wet, 2002 verfijnd", tekst: "NL eerste land met legalisering. Vereist: ondraaglijk + uitzichtloos lijden, vrijwillig + weloverwogen verzoek, geen alternatief, second opinion onafhankelijk arts. Toetsings-commissie controleert achteraf. ~10 000 euthanasie-verzoeken/jaar, ~7000 uitgevoerd. Internationaal blijft NL voorloper." },
          ],
          niveaus: { basis: "Strikte voorwaarden. A.", simpeler: "Arts + lijden vereist. A.", nogSimpeler: "Strikt = A." },
        },
      },
      {
        q: "**Vier hoofdwaarden** westerse ethiek:",
        options: [
          "Vrijheid, gelijkheid, solidariteit, verantwoordelijkheid",
          "Macht, geld, rust, plezier",
          "God, koning, vaderland",
          "Geen vaste set"
        ],
        answer: 0,
        wrongHints: [null, "Niet ethisch.", "Tegenovergesteld Verlichting.", "Wel set."],
        uitlegPad: {
          stappen: [
            { titel: "Frankrijk-trio uitgebreid", tekst: "Franse Revolutie: 'Liberté, égalité, fraternité' (vrijheid, gelijkheid, broederschap = solidariteit). Plus moderne toevoeging 'verantwoordelijkheid'. Politiek liberaal: focus op vrijheid. Sociaal-democratisch: gelijkheid. Conservatief: verantwoordelijkheid. Communautair: solidariteit. Geen recept maar balans." },
          ],
          niveaus: { basis: "4 waarden. A.", simpeler: "Vrijheid + gelijkheid + ... A.", nogSimpeler: "4 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const filosofieHavoVwo = {
  id: "filosofie-havo-vwo",
  title: "Filosofie (HAVO/VWO algemeen)",
  emoji: "🤔",
  level: "havo-vwo-4-5",
  subject: "filosofie",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Filosofie — Inleidend (HAVO + VWO)",
  prerequisites: [],
  intro:
    "Filosofie voor HAVO/VWO algemeen — oudheid (Socrates/Plato/Aristoteles), middeleeuwen + verlichting (Augustinus tot Kant-voorlopers), moderne tijd (Kant/Hegel/Marx/Nietzsche/Mill), 20e + 21e eeuw (existentialisme tot Rawls + Singer), toegepaste ethiek (klimaat/AI/bio). 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "filosofie",
    "metafysica", "epistemologie", "ethiek", "logica",
    "Socrates", "socratische methode",
    "Plato", "ideeën-leer", "grot-allegorie",
    "Aristoteles", "syllogisme", "Lyceum",
    "stoïcisme", "Marcus Aurelius",
    "Augustinus",
    "Aquinas", "Summa Theologica",
    "humanisme", "Erasmus",
    "rationalisme",
    "Descartes", "cogito",
    "Spinoza", "pantheïsme",
    "empirisme",
    "Locke", "tabula rasa",
    "Hume",
    "Verlichting",
    "Voltaire", "Rousseau",
    "Kant", "categorische imperatief", "Sapere aude",
    "Hegel", "dialectiek",
    "Marx", "historisch materialisme",
    "Nietzsche", "God is dood", "Übermensch",
    "Schopenhauer",
    "utilitarisme", "Bentham", "Mill",
    "Kierkegaard",
    "existentialisme",
    "Sartre", "veroordeeld tot vrijheid",
    "Simone de Beauvoir",
    "Camus", "absurditeit",
    "Frankfurter Schule", "Adorno", "Habermas",
    "Foucault", "panopticon", "macht",
    "Derrida", "deconstructie",
    "Wittgenstein",
    "Rawls", "veil of ignorance",
    "Nozick", "libertair",
    "Hannah Arendt", "banaliteit van het kwaad",
    "Peter Singer", "dier-rechten",
    "Yuval Harari",
    "trolley-probleem",
    "klimaat-ethiek", "AI-ethiek",
    "bio-ethiek", "euthanasie", "abortus",
  ],
  chapters,
  steps,
};

export default filosofieHavoVwo;
