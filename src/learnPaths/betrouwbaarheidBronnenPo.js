// Leerpad: Betrouwbaarheid van bronnen — groep 7-8 PO.
// Doorstroomtoets-onderdeel STUDIEVAARDIGHEDEN (sloThema-prefix bepaalt pijler).
// Mediawijsheid: wie zegt het, feit/mening/reclame, controleren, datum, bron kiezen.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wie zegt het? (de bron)", emoji: "👤", from: 0, to: 0 },
  { letter: "B", title: "Feit, mening of reclame?", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Klopt het? Controleren & datum", emoji: "📆", from: 2, to: 2 },
  { letter: "D", title: "In het echt: welke bron vertrouw je?", emoji: "🌐", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wie zegt het ──────────────────────────────────────
  {
    title: "Wie zegt het? — kijk naar de bron",
    explanation:
      "Niet alle informatie is even **betrouwbaar**. Voordat je iets gelooft, kijk je naar de **bron**: wie heeft het geschreven, en weet die er verstand van?\n\n" +
      "**Betrouwbaar** is informatie vaak als:\n" +
      "• een **deskundige** of officiële instantie het zegt (een arts, een museum, de overheid);\n" +
      "• er een **naam en bron** bij staan.\n\n" +
      "**Minder betrouwbaar** is informatie:\n" +
      "• zonder auteur of bron;\n" +
      "• van iemand die er geen verstand van heeft of er iets aan wil verdienen.\n\n" +
      "Vraag je dus altijd af: *wie zegt dit, en hoe weet die het?*",
    checks: [
      {
        q: "Je zoekt informatie over gezond eten. Welke bron is het meest betrouwbaar?",
        options: [
          "het Voedingscentrum (deskundigen over voeding)",
          "een reclame van een snoepmerk",
          "een willekeurige post van een onbekende",
          "een vriend die het ergens hoorde",
        ],
        answer: 0,
        wrongHints: [null, "Een snoepmerk wil vooral verkopen — niet objectief.", "Een onbekende zonder bron is moeilijk te vertrouwen.", "'Ergens gehoord' is geen betrouwbare bron."],
        uitlegPad: {
          stappen: [{ titel: "Deskundige = betrouwbaar", tekst: "Het Voedingscentrum bestaat uit deskundigen en wil je niet iets verkopen. Dat is de betrouwbaarste bron." }],
          niveaus: {
            basis: "Een deskundige/officiële instantie is het betrouwbaarst.",
            simpeler: "Welke bron heeft er echt verstand van én wil je niets verkopen?",
            nogSimpeler: "Wie weet het best iets over voeding?",
          },
        },
      },
      {
        q: "Waarom kijk je wie iets geschreven heeft?",
        options: [
          "om te weten of die er verstand van heeft",
          "om te zien hoe lang de tekst is",
          "om de mooiste plaatjes te vinden",
          "dat maakt niet uit",
        ],
        answer: 0,
        wrongHints: [null, "De lengte zegt niets over betrouwbaarheid.", "Plaatjes maken iets niet betrouwbaar.", "Het maakt juist veel uit wie het zegt."],
        uitlegPad: {
          stappen: [{ titel: "Kennis van de schrijver", tekst: "Als de schrijver een deskundige is, is de informatie waarschijnlijk betrouwbaarder." }],
          niveaus: {
            basis: "Je checkt of de schrijver er verstand van heeft.",
            simpeler: "Geloof je iemand met of zonder verstand van het onderwerp eerder?",
            nogSimpeler: "Is het belangrijk wie iets zegt? Ja.",
          },
        },
      },
      {
        q: "Welke bron weet er waarschijnlijk het meest van dinosauriërs?",
        options: [
          "een natuurhistorisch museum",
          "een grappig filmpje zonder uitleg",
          "een advertentie voor speelgoed-dino's",
          "een verzonnen verhaal",
        ],
        answer: 0,
        wrongHints: [null, "Een grappig filmpje is niet bedoeld om je iets te leren.", "Een advertentie wil verkopen.", "Een verhaal is verzonnen, geen feiten."],
        uitlegPad: {
          stappen: [{ titel: "Museum = deskundig", tekst: "Een natuurhistorisch museum heeft echte kennis over dinosauriërs. Dat is de betrouwbaarste bron." }],
          niveaus: {
            basis: "Een museum heeft deskundige kennis → betrouwbaar.",
            simpeler: "Welke bron is er om je écht iets te leren?",
            nogSimpeler: "Wie weet het meest van dino's: een museum of een advertentie?",
          },
        },
      },
      {
        q: "Een website zonder auteur en zonder bron is...",
        options: ["minder betrouwbaar", "altijd betrouwbaar", "altijd waar", "een officiële bron"],
        answer: 0,
        wrongHints: [null, "Juist niet — zonder bron weet je niet wie het zegt.", "Zonder bron kun je het niet controleren.", "Een officiële bron noemt juist wél wie erachter zit."],
        uitlegPad: {
          stappen: [{ titel: "Geen bron = voorzichtig", tekst: "Zonder auteur of bron weet je niet wie het zegt of hoe ze het weten. Dan is het minder betrouwbaar." }],
          niveaus: {
            basis: "Geen auteur/bron → minder betrouwbaar.",
            simpeler: "Vertrouw je iets eerder mét of zónder bron?",
            nogSimpeler: "Is informatie zonder bron betrouwbaar?",
          },
        },
      },
      {
        q: "Wie kun je het best vertrouwen over hoe je een wond verzorgt?",
        options: [
          "een huisarts",
          "een influencer die pleisters verkoopt",
          "een willekeurig forum",
          "een stripverhaal",
        ],
        answer: 0,
        wrongHints: [null, "Die wil vooral pleisters verkopen.", "Op een forum kan iedereen zomaar iets roepen.", "Een stripverhaal is verzonnen, geen medische bron."],
        uitlegPad: {
          stappen: [{ titel: "Deskundige = arts", tekst: "Een huisarts heeft er medisch verstand van en wil je niets verkopen — de betrouwbaarste bron over wondverzorging." }],
          niveaus: {
            basis: "Een arts is de deskundige bron over een wond.",
            simpeler: "Wie heeft er medisch verstand van én verkoopt je niets?",
            nogSimpeler: "Wie weet het best hoe je een wond verzorgt?",
          },
        },
      },
      {
        q: "Twee websites zeggen iets anders. Welke vertrouw je eerder?",
        options: [
          "de site met een auteur én bronvermelding",
          "de site zonder auteur",
          "de site met de meeste reclame",
          "de site met de grootste letters",
        ],
        answer: 0,
        wrongHints: [null, "Zonder auteur weet je niet wie het zegt.", "Veel reclame is juist een waarschuwing.", "Lettergrootte zegt niets over betrouwbaarheid."],
        uitlegPad: {
          stappen: [{ titel: "Auteur + bron", tekst: "Een site die laat zien wie het schreef en waar de info vandaan komt, kun je controleren — dus betrouwbaarder." }],
          niveaus: {
            basis: "De site met auteur én bronvermelding is betrouwbaarder.",
            simpeler: "Welke site kun je nacontroleren: met of zonder bron?",
            nogSimpeler: "Vertrouw je een site mét of zónder auteur eerder?",
          },
        },
      },
    ],
  },

  // ─── B. Feit, mening of reclame ───────────────────────────
  {
    title: "Feit, mening of reclame?",
    explanation:
      "Betrouwbare informatie geeft vooral **feiten** die je kunt controleren. Pas op met:\n\n" +
      "• **Meningen** — wat iemand vindt (mooi, het beste). Niet per se waar voor iedereen.\n" +
      "• **Reclame** — wil je iets **verkopen**. Gebruikt overdreven woorden ('de allerbeste!').\n\n" +
      "Een betrouwbare bron probeert je niet iets aan te smeren en gebruikt geen overdreven taal, maar geeft nuchtere feiten met uitleg.",
    checks: [
      {
        q: "Een website zegt: 'Ons product is het allerbeste ter wereld!' Is dat betrouwbare informatie?",
        options: [
          "nee, het is reclame",
          "ja, het staat op internet",
          "ja, want het klinkt zeker",
          "ja, het is een feit",
        ],
        answer: 0,
        wrongHints: [null, "Niet alles op internet is waar.", "Zeker klinken maakt iets niet waar.", "'Allerbeste' kun je niet bewijzen — geen feit."],
        uitlegPad: {
          stappen: [{ titel: "Verkopen = reclame", tekst: "De site wil het product verkopen en gebruikt overdreven woorden. Dat is reclame, geen betrouwbaar feit." }],
          niveaus: {
            basis: "'Het allerbeste!' van de verkoper zelf = reclame.",
            simpeler: "Wil deze bron je iets verkopen? Dan is het reclame.",
            nogSimpeler: "Is 'wij zijn de beste' een feit of reclame?",
          },
        },
      },
      {
        q: "Betrouwbare informatie geeft vooral...",
        options: [
          "feiten die je kunt controleren",
          "overdreven woorden",
          "alleen meningen",
          "grappige plaatjes",
        ],
        answer: 0,
        wrongHints: [null, "Overdreven woorden horen bij reclame.", "Meningen zijn niet voor iedereen waar.", "Plaatjes zeggen niets over betrouwbaarheid."],
        uitlegPad: {
          stappen: [{ titel: "Feiten = controleerbaar", tekst: "Betrouwbare bronnen geven feiten die je kunt nakijken, geen overdreven reclame of losse meningen." }],
          niveaus: {
            basis: "Betrouwbare info = controleerbare feiten.",
            simpeler: "Geeft een goede bron feiten of overdreven reclame?",
            nogSimpeler: "Wat is betrouwbaarder: een feit of een mening?",
          },
        },
      },
      {
        q: "Hoe herken je dat iets reclame is?",
        options: [
          "het wil je iets laten kopen",
          "het noemt een datum",
          "het heeft een auteur",
          "het geeft een bron",
        ],
        answer: 0,
        wrongHints: [null, "Een datum hoort juist bij betrouwbare info.", "Een auteur maakt iets juist betrouwbaarder.", "Een bron noemen is juist een goed teken."],
        uitlegPad: {
          stappen: [{ titel: "Doel = verkopen", tekst: "Reclame wil je iets laten kopen en prijst het product overdreven aan." }],
          niveaus: {
            basis: "Reclame herken je doordat het iets wil verkopen.",
            simpeler: "Wat wil reclame: je informeren of je iets laten kopen?",
            nogSimpeler: "Wil reclame dat je koopt?",
          },
        },
      },
      {
        q: "Welke zin komt het meest uit een betrouwbare informatieve bron?",
        options: [
          "De maan draait in ongeveer 27 dagen om de aarde.",
          "Onze maankijker is de allerbeste!",
          "De maan is het mooiste wat er is.",
          "Koop nu met korting!",
        ],
        answer: 0,
        wrongHints: [null, "'Allerbeste' is reclame.", "'Mooiste' is een mening.", "Dat is reclame."],
        uitlegPad: {
          stappen: [{ titel: "Controleerbaar feit", tekst: "Dat de maan in ~27 dagen om de aarde draait, is een te controleren feit — typisch voor een betrouwbare bron." }],
          niveaus: {
            basis: "Het controleerbare feit over de maan is de betrouwbare zin.",
            simpeler: "Welke zin is een feit en geen reclame of mening?",
            nogSimpeler: "Welke zin kun je opzoeken/controleren?",
          },
        },
      },
      {
        q: "Welke zin is een mening?",
        options: [
          "Dit is het leukste boek ooit.",
          "Het boek heeft 200 bladzijden.",
          "Het boek kwam uit in 2020.",
          "De schrijver heet Anna.",
        ],
        answer: 0,
        wrongHints: [null, "Het aantal bladzijden kun je tellen — dat is een feit.", "Een jaartal kun je nakijken — een feit.", "De naam van de schrijver is een feit."],
        uitlegPad: {
          stappen: [{ titel: "Mening = wat iemand vindt", tekst: "'Het leukste ooit' is wat iemand víndt — niet voor iedereen waar. Dat is een mening; de rest zijn controleerbare feiten." }],
          niveaus: {
            basis: "'Leukste boek ooit' is een mening, geen feit.",
            simpeler: "Welke zin is wat iemand vindt, en kun je niet bewijzen?",
            nogSimpeler: "Is 'het leukste ooit' een feit of een mening?",
          },
        },
      },
      {
        q: "'Nu 50% korting — koop snel!' Wat voor tekst is dit?",
        options: [
          "reclame",
          "een feit",
          "een nieuwsbericht",
          "een mening van een deskundige",
        ],
        answer: 0,
        wrongHints: [null, "Een feit kun je controleren; dit wil je iets laten kopen.", "Een nieuwsbericht informeert, dit verkoopt.", "Een deskundige geeft uitleg, geen kortingsactie."],
        uitlegPad: {
          stappen: [{ titel: "Verkopen = reclame", tekst: "'Koop snel!' met korting wil je iets laten kopen — dat is reclame, geen betrouwbare informatie." }],
          niveaus: {
            basis: "Een kortingsoproep om te kopen = reclame.",
            simpeler: "Wil deze tekst je informeren of iets verkopen?",
            nogSimpeler: "Is 'koop snel met korting' reclame?",
          },
        },
      },
    ],
  },

  // ─── C. Controleren & datum ───────────────────────────────
  {
    title: "Klopt het? — controleren en de datum",
    explanation:
      "Ook bij een nette bron is het slim te **controleren** of iets klopt:\n\n" +
      "• **Vergelijk meerdere bronnen.** Zeggen verschillende betrouwbare bronnen hetzelfde? Dan klopt het waarschijnlijk.\n" +
      "• **Let op de datum.** Oude informatie kan **verouderd** zijn (bijv. 'de snelste computer' uit 1990).\n" +
      "• **Eén bron is niet genoeg** voor schokkend nieuws — check het eerst ergens anders.\n\n" +
      "Twijfel je? Zoek nog een betrouwbare bron erbij.",
    checks: [
      {
        q: "Hoe controleer je het best of informatie klopt?",
        options: [
          "kijken of meerdere betrouwbare bronnen het zeggen",
          "kijken of het mooi is opgemaakt",
          "kijken of er veel kleuren in staan",
          "het gewoon geloven",
        ],
        answer: 0,
        wrongHints: [null, "Mooie opmaak zegt niets over of het klopt.", "Kleuren maken iets niet waar.", "Zomaar geloven is juist niet slim."],
        uitlegPad: {
          stappen: [{ titel: "Meerdere bronnen", tekst: "Als verschillende betrouwbare bronnen hetzelfde zeggen, klopt het waarschijnlijk." }],
          niveaus: {
            basis: "Controleer door meerdere bronnen te vergelijken.",
            simpeler: "Geloof je iets eerder als één of als meerdere bronnen het zeggen?",
            nogSimpeler: "Helpt het om iets bij een tweede bron te checken?",
          },
        },
      },
      {
        q: "Je vindt informatie uit 1995 over 'de snelste computer'. Wat is het probleem?",
        options: [
          "de informatie is verouderd",
          "er is niets mis mee",
          "het is reclame",
          "er staat een auteur bij",
        ],
        answer: 0,
        wrongHints: [null, "Computers zijn sindsdien veel sneller — dus wél een probleem.", "Het is niet per se reclame.", "Een auteur is juist goed; het gaat hier om de oude datum."],
        uitlegPad: {
          stappen: [{ titel: "Let op de datum", tekst: "Informatie uit 1995 over computers is achterhaald: de snelste computer is allang anders. De info is verouderd." }],
          niveaus: {
            basis: "Oude info kan verouderd zijn → check de datum.",
            simpeler: "Is informatie over snelle computers uit 1995 nog actueel?",
            nogSimpeler: "Is 30 jaar oude techniek-info nog up-to-date?",
          },
        },
      },
      {
        q: "Iemand deelt schokkend nieuws op social media, zonder bron. Wat doe je het best?",
        options: [
          "eerst checken bij een betrouwbare bron",
          "het meteen doorsturen",
          "het direct geloven",
          "er een mening over geven",
        ],
        answer: 0,
        wrongHints: [null, "Doorsturen vóór je het checkt kan nepnieuws verspreiden.", "Zonder bron is direct geloven niet slim.", "Eerst checken of het waar is, gaat vóór een mening geven."],
        uitlegPad: {
          stappen: [{ titel: "Eerst checken", tekst: "Schokkend nieuws zonder bron eerst controleren bij een betrouwbare bron, anders verspreid je misschien nepnieuws." }],
          niveaus: {
            basis: "Check schokkend nieuws zonder bron eerst ergens betrouwbaars.",
            simpeler: "Doorsturen of eerst checken? Eerst checken.",
            nogSimpeler: "Geloof je nieuws zonder bron meteen?",
          },
        },
      },
      {
        q: "Twee betrouwbare bronnen zeggen iets verschillends. Wat is verstandig?",
        options: [
          "nog een bron erbij zoeken en voorzichtig zijn",
          "de eerste maar geloven",
          "allebei negeren",
          "zelf iets verzinnen",
        ],
        answer: 0,
        wrongHints: [null, "Zomaar de eerste kiezen is niet zorgvuldig.", "Negeren helpt je niet verder.", "Verzinnen is nooit betrouwbaar."],
        uitlegPad: {
          stappen: [{ titel: "Derde bron", tekst: "Als bronnen elkaar tegenspreken, zoek je een extra bron en blijf je voorzichtig met de conclusie." }],
          niveaus: {
            basis: "Bij tegenspraak: extra bron zoeken en voorzichtig zijn.",
            simpeler: "Wat doe je als bronnen het oneens zijn? Nog een checken.",
            nogSimpeler: "Helpt een derde bron als twee elkaar tegenspreken?",
          },
        },
      },
      {
        q: "Waarom is de datum van een artikel belangrijk?",
        options: [
          "informatie kan na verloop van tijd verouderen",
          "langere teksten zijn altijd beter",
          "oude teksten zijn altijd fout",
          "de datum maakt de tekst mooier",
        ],
        answer: 0,
        wrongHints: [null, "Lengte zegt niets over of het klopt.", "Oud is niet automatisch fout, maar kan wel verouderd zijn.", "Een datum is voor controle, niet voor de sier."],
        uitlegPad: {
          stappen: [{ titel: "Actueel?", tekst: "Met de datum zie je of informatie nog actueel is. Sommige feiten veranderen (records, techniek, prijzen)." }],
          niveaus: {
            basis: "De datum laat zien of de info nog actueel is.",
            simpeler: "Kan informatie na een tijd verouderd raken?",
            nogSimpeler: "Helpt de datum om te zien of iets nog klopt?",
          },
        },
      },
      {
        q: "Eén bericht zegt dat een bekende diersoort plots is uitgestorven. Wat doe je het best?",
        options: [
          "checken bij een betrouwbare nieuws- of natuurbron",
          "het meteen geloven",
          "het direct doorsturen naar iedereen",
          "er meteen ruzie over maken",
        ],
        answer: 0,
        wrongHints: [null, "Eén bericht zonder check kan nepnieuws zijn.", "Doorsturen vóór de check verspreidt mogelijk onzin.", "Eerst nagaan of het klopt gaat vóór een reactie."],
        uitlegPad: {
          stappen: [{ titel: "Eerst checken", tekst: "Groot nieuws uit één bron eerst controleren bij een betrouwbare bron voor je het gelooft of deelt." }],
          niveaus: {
            basis: "Eén bron met groot nieuws: eerst checken bij een betrouwbare bron.",
            simpeler: "Geloof je groot nieuws uit één bron meteen, of check je het?",
            nogSimpeler: "Eerst checken of meteen doorsturen?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — welke bron vertrouw je?",
    explanation:
      "Bij de Doorstroomtoets (en bij een werkstuk) moet je de **beste bron kiezen**. Vraag je steeds af:\n\n" +
      "1. **Wie** zegt het — een deskundige/officiële bron of een onbekende?\n" +
      "2. **Wil** de bron iets verkopen (reclame) of objectief informeren?\n" +
      "3. **Klopt** het met andere bronnen, en is het **actueel**?\n\n" +
      "Officiële bronnen (overheid, KNMI, encyclopedie, museum) controleren hun informatie en zijn daarom vaak het betrouwbaarst.",
    checks: [
      {
        q: "Je maakt een werkstuk over het weer en klimaat. Welke bron is het best?",
        options: [
          "het KNMI (het officiële weerinstituut)",
          "een mening op een forum",
          "een advertentie voor regenjassen",
          "een grappig weer-meme",
        ],
        answer: 0,
        wrongHints: [null, "Een mening op een forum is niet per se juist.", "Een advertentie wil verkopen.", "Een meme is voor de lol, geen betrouwbare info."],
        uitlegPad: {
          stappen: [{ titel: "Officieel instituut", tekst: "Het KNMI is het officiële weer- en klimaatinstituut met deskundige, gecontroleerde informatie." }],
          niveaus: {
            basis: "Het KNMI is de officiële, deskundige bron over het weer.",
            simpeler: "Welke bron heeft er echt verstand van het weer?",
            nogSimpeler: "Wie weet het meest over het weer: het KNMI of een forum?",
          },
        },
      },
      {
        q: "Voor de hoofdstad van een land, welke bron is het betrouwbaarst?",
        options: [
          "een atlas of encyclopedie",
          "een grapje van een klasgenoot",
          "een reclamefolder",
          "een verzonnen verhaal",
        ],
        answer: 0,
        wrongHints: [null, "Een grapje is geen betrouwbare bron.", "Reclame gaat niet over aardrijkskunde-feiten.", "Een verhaal is verzonnen."],
        uitlegPad: {
          stappen: [{ titel: "Naslagwerk", tekst: "Een atlas of encyclopedie geeft gecontroleerde, feitelijke informatie over landen en hoofdsteden." }],
          niveaus: {
            basis: "Een atlas/encyclopedie is betrouwbaar voor zulke feiten.",
            simpeler: "Waar zoek je een hoofdstad op: een atlas of een grapje?",
            nogSimpeler: "Welke is een naslagwerk met feiten?",
          },
        },
      },
      {
        q: "Waarom is een officiële website (bijvoorbeeld van de overheid) vaak betrouwbaar?",
        options: [
          "ze controleren hun informatie zorgvuldig",
          "het ziet er mooi uit",
          "het staat op internet",
          "ze gebruiken veel uitroeptekens",
        ],
        answer: 0,
        wrongHints: [null, "Mooi ogen maakt iets niet betrouwbaar.", "Op internet staat ook veel onzin.", "Veel uitroeptekens horen juist bij reclame."],
        uitlegPad: {
          stappen: [{ titel: "Gecontroleerde info", tekst: "Officiële bronnen controleren hun informatie en zijn verantwoordelijk voor wat ze publiceren — daarom betrouwbaar." }],
          niveaus: {
            basis: "Officiële bronnen controleren hun informatie zorgvuldig.",
            simpeler: "Waarom vertrouw je de overheid eerder dan een willekeurige site?",
            nogSimpeler: "Controleert een officiële bron zijn informatie?",
          },
        },
      },
      {
        q: "Wat is de slimste eerste vraag bij een bron die je niet kent?",
        options: [
          "wie heeft dit geschreven en waarom?",
          "hoeveel plaatjes staan erin?",
          "welke kleur heeft de website?",
          "hoe snel laadt de pagina?",
        ],
        answer: 0,
        wrongHints: [null, "Het aantal plaatjes zegt niets over betrouwbaarheid.", "Kleur zegt niets over of het klopt.", "Laadsnelheid zegt niets over de inhoud."],
        uitlegPad: {
          stappen: [{ titel: "Wie & waarom", tekst: "De belangrijkste vraag is: wie heeft het geschreven en met welk doel (informeren of verkopen)?" }],
          niveaus: {
            basis: "Vraag eerst: wie zegt dit en waarom?",
            simpeler: "Wat zegt het meest over betrouwbaarheid: de auteur of de kleur?",
            nogSimpeler: "Is 'wie schreef het?' een goede eerste vraag?",
          },
        },
      },
      {
        q: "Voor een spreekbeurt over gezonde tanden, welke bron is het best?",
        options: [
          "een tandarts of het Voedingscentrum",
          "een snoepreclame",
          "een grappig filmpje zonder uitleg",
          "een losse mening op social media",
        ],
        answer: 0,
        wrongHints: [null, "Een snoepreclame wil verkopen.", "Een grappig filmpje leert je niets betrouwbaars.", "Een losse mening is niet per se waar."],
        uitlegPad: {
          stappen: [{ titel: "Deskundige bron", tekst: "Een tandarts of het Voedingscentrum heeft echte kennis over gezonde tanden en wil je niets verkopen." }],
          niveaus: {
            basis: "Een tandarts/Voedingscentrum is de deskundige bron.",
            simpeler: "Welke bron heeft er verstand van én verkoopt niets?",
            nogSimpeler: "Wie weet het meest over tanden: een tandarts of een reclame?",
          },
        },
      },
      {
        q: "Wat is JUIST GEEN teken van een betrouwbare bron?",
        options: [
          "veel uitroeptekens en 'koop nu!'",
          "een genoemde auteur",
          "een bronvermelding",
          "een recente datum",
        ],
        answer: 0,
        wrongHints: [null, "Een auteur maakt een bron juist betrouwbaarder.", "Een bronvermelding is juist een goed teken.", "Een recente datum is juist gunstig."],
        uitlegPad: {
          stappen: [{ titel: "Reclame-taal = waarschuwing", tekst: "Uitroeptekens en 'koop nu!' horen bij reclame. Auteur, bronvermelding en een recente datum zijn juist góede tekens." }],
          niveaus: {
            basis: "'Koop nu!' met uitroeptekens is geen teken van betrouwbaarheid.",
            simpeler: "Welk kenmerk hoort bij reclame in plaats van bij een betrouwbare bron?",
            nogSimpeler: "Is 'koop nu!!!' een teken van een betrouwbare bron?",
          },
        },
      },
      {
        q: "Onderaan een artikel staat een lijst met bronnen. Waarom is dat handig?",
        options: [
          "je kunt nakijken waar de informatie vandaan komt",
          "het maakt het artikel langer",
          "het staat gewoon mooi",
          "het is verplicht voor plaatjes",
        ],
        answer: 0,
        wrongHints: [null, "Het gaat niet om lengte, maar om controleerbaarheid.", "Niet voor de sier, maar om te kunnen controleren.", "Bronnen gaan over de inhoud, niet over plaatjes."],
        uitlegPad: {
          stappen: [{ titel: "Controleerbaar", tekst: "Met een bronnenlijst kun je zelf nakijken waar de informatie vandaan komt — dat maakt het betrouwbaarder." }],
          niveaus: {
            basis: "Een bronnenlijst laat je nacontroleren waar de info vandaan komt.",
            simpeler: "Helpt een bronnenlijst om de informatie te checken?",
            nogSimpeler: "Kun je met bronnen nakijken of iets klopt?",
          },
        },
      },
    ],
  },
];

export default {
  id: "betrouwbaarheid-bronnen-po",
  title: "Betrouwbaarheid van bronnen",
  subject: "studievaardigheden",
  level: "groep7-8",
  sloThema: "studievaardigheden-bronnen",
  chapters,
  steps,
  prerequisites: [],
};
