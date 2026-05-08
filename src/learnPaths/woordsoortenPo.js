// Leerpad: Woordsoorten herkennen — voor groep 5-8
// 5 stappen. zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, lidwoord, voornaamwoord.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#7c4dff",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["📦","🏃","🌈","🅰️","🏆"];

const chapters = [
  { letter: "A", title: "Zelfstandig naamwoord", emoji: "📦", from: 0, to: 0 },
  { letter: "B", title: "Werkwoord", emoji: "🏃", from: 1, to: 1 },
  { letter: "C", title: "Bijvoeglijk naamwoord", emoji: "🌈", from: 2, to: 2 },
  { letter: "D", title: "Lidwoord & voornaamwoord", emoji: "🅰️", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Zelfstandig naamwoord — woorden voor 'iets'",
    explanation: "Een **zelfstandig naamwoord** is een woord voor een **persoon, dier, ding, plaats of gevoel**.\n\n**Voorbeelden**:\n• Persoon: jongen, meisje, juf, dokter\n• Dier: hond, kat, paard, giraf\n• Ding: tafel, fiets, computer, boek\n• Plaats: school, Amsterdam, park\n• Gevoel: blijdschap, verdriet, angst\n\n**Test om te checken — zet er 'de' of 'het' voor**:\n• **de** hond ✓ — zelfst. naamwoord\n• **het** boek ✓ — zelfst. naamwoord\n• 'de mooi' — past niet → mooi is GEEN zelfst. naamwoord (is bijvoeglijk).\n\n**Enkelvoud / meervoud**:\n• boek → boeken\n• kat → katten\n• kind → kinderen\n• vis → vissen of vissen (afhankelijk van betekenis)\n\n**Eigennamen** (specifieke namen):\n• Tom, Lisa — namen van mensen.\n• Amsterdam, Spanje — plaatsnamen.\n• Schrijven met **hoofdletter**.\n\n**Verschil eigennaam vs gewoon zelfst. naamwoord**:\n• 'jongen' = elke willekeurige jongen.\n• 'Tom' = een specifieke jongen.\n\n**Cito-tip**:\nKun je 'de' of 'het' ervoor zetten? Dan is het zelfstandig naamwoord.",
    checks: [
      {
        q: "Welk woord is een **zelfstandig naamwoord**?",
        options: ["fiets","fietsen","snel","mooi"],
        answer: 0,
        wrongHints: [null,"Werkwoord (de bezigheid).","Bijvoeglijk naamwoord — beschrijft hoe.","Bijvoeglijk naamwoord."],
      },
      {
        q: "*'De **dappere** ridder vocht **fel**.'* — welk is een zelfst. naamwoord?",
        options: ["ridder","dappere","fel","De"],
        answer: 0,
        wrongHints: [null,"Beschrijft de ridder — bijvoeglijk.","Beschrijft hoe — bijwoord.","Lidwoord."],
      },
      {
        q: "Welke is **GEEN** zelfst. naamwoord?",
        options: ["loopt","tafel","Amsterdam","verdriet"],
        answer: 0,
        wrongHints: [null,"Wel — de tafel.","Wel — eigennaam.","Wel — gevoel."],
      },
    ],
  },

  {
    title: "Werkwoord — woorden voor doen of zijn",
    explanation: "Een **werkwoord** is een woord dat zegt wat iets/iemand **doet** of **is**.\n\n**Voorbeelden**:\n• Doe-werkwoorden: lopen, eten, fietsen, leren, springen\n• 'Zijn'-werkwoorden: zijn, hebben, blijven, worden\n\n**Test**:\n• Zet er 'ik' voor: *'ik loop'* ✓ → werkwoord.\n• Of 'ik ben' / 'ik heb' = ook werkwoord.\n\n**Vorm verandert** afhankelijk van wie:\n• ik **loop** / hij **loopt** / wij **lopen**\n• ik **ben** / hij **is** / wij **zijn**\n\n**Tijd verandert** ook:\n• Tegenwoordig: ik loop\n• Verleden: ik liep\n• Toekomst: ik zal lopen / ik ga lopen\n\n**Hele werkwoord** (infinitief):\n• De vorm zonder veranderingen: lopen, eten, kopen, schrijven.\n• Eindigt op -en (meestal).\n\n**Hulp-werkwoord vs hoofd-werkwoord**:\n• 'Ik **heb** gelopen' — heb = hulp-ww, gelopen = hoofd-ww.\n• Twee werkwoorden samen = hulp + hoofd.\n\n**Cito-vraag-typen**:\n• Onderstreep alle werkwoorden.\n• Wat is het hele werkwoord van 'liep'? → lopen.\n• Welk woord is het werkwoord in zin X?\n\n**Cito-tip**:\nWerkwoorden kun je vervoegen *(ik / jij / hij)*. Andere woorden niet.",
    checks: [
      {
        q: "Welk woord is een **werkwoord**?",
        options: ["springen","sprong","springer","sprongen-festival"],
        answer: 0,
        wrongHints: [null,"Dit is verleden tijd — wel werkwoord-vorm! Kies hele werkwoord.","Geen werkwoord (eindigt op -er = persoon).","Bestaat niet, fantasie."],
      },
      {
        q: "*'Tom **schopt** de **bal** weg.'* — welk woord is het werkwoord?",
        options: ["schopt","Tom","bal","weg"],
        answer: 0,
        wrongHints: [null,"Eigennaam.","Zelfst. naamwoord.","Bijwoord (richting)."],
      },
      {
        q: "Wat is het **hele werkwoord** van 'liep'?",
        options: ["lopen","liepen","loop","lopend"],
        answer: 0,
        wrongHints: [null,"Verleden tijd meervoud.","Tegenwoordige tijd-vorm.","Een 'ing-vorm' — niet de hele."],
      },
      {
        q: "*'Ik **heb** mijn boek **gelezen**.'* — welk is het hulpwerkwoord?",
        options: ["heb","gelezen","mijn","boek"],
        answer: 0,
        wrongHints: [null,"Hoofdwerkwoord.","Voornaamwoord.","Zelfst. naamwoord."],
      },
    ],
  },

  {
    title: "Bijvoeglijk naamwoord — beschrijft een ding",
    explanation: "Een **bijvoeglijk naamwoord** beschrijft een **eigenschap** van een persoon of ding.\n\n**Voorbeelden**:\n• mooi, lelijk, groot, klein, snel, langzaam, blauw, leuk, eng\n\n**Test**:\n• Past het tussen 'de' en een zelfstandig naamwoord?\n• 'de **mooie** auto' ✓ — mooi is bijvoeglijk.\n• 'de **fiets** auto' — past niet → fiets is GEEN bijvoeglijk.\n\n**Plaats in zin**:\n1. **Vóór het zelfst. naamwoord**: 'de mooie auto'\n2. **Na een werkwoord** ('zijn', 'worden', 'lijken'): 'De auto is **mooi**.'\n\n**Vorm verandert**:\n• 'mooi' staat alleen of na werkwoord: *'De auto is mooi.'*\n• 'mooie' krijgt -e als het vóór een woord staat: *'de mooie auto'*.\n• Geen -e bij **het**-woord enkelvoud zonder lidwoord/onbepaald: *'een mooi huis'* (niet 'mooie').\n\n**Vergelijken**:\n• mooi — mooi**er** — het mooi**st**\n• groot — groter — grootst\n• onregelmatig: goed — beter — best\n\n**Cito-vraag-typen**:\n• Welk woord is het bijvoeglijk naamwoord?\n• Schrijf in vergelijkende trap: 'snel' → ?\n\n**Cito-tip**:\nProbeer 'is' of 'wordt' ertussen: *'De auto is **mooi**'* → mooi = bijvoeglijk.",
    checks: [
      {
        q: "Welk woord is een **bijvoeglijk naamwoord**?",
        options: ["snel","auto","rijden","de"],
        answer: 0,
        wrongHints: [null,"Zelfst. naamwoord.","Werkwoord.","Lidwoord."],
      },
      {
        q: "*'De **slimme** **leerling** maakte de **toets**.'* — welk is bijvoeglijk?",
        options: ["slimme","leerling","toets","maakte"],
        answer: 0,
        wrongHints: [null,"Zelfst. naamwoord.","Zelfst. naamwoord.","Werkwoord."],
      },
      {
        q: "Vergelijkende trap van **'snel'**?",
        options: ["sneller","snellere","snelste","snel-er"],
        answer: 0,
        wrongHints: [null,"Past bij zelfst. naamwoord *(de snellere auto)*.","Dat is 'overtreffende' trap.","Geen streepje."],
      },
      {
        q: "*'De **lekkere** **taart** is **op**.'* — welk is GEEN bijvoeglijk?",
        options: ["op","lekkere","Geen, alle","De taart"],
        answer: 0,
        wrongHints: [null,"Wel bijvoeglijk.","'op' is bijwoord van plaats/toestand.","Eén woord moet je kiezen."],
      },
    ],
  },

  {
    title: "Lidwoord & voornaamwoord",
    explanation: "**Lidwoord**: een **klein woordje** voor een zelfst. naamwoord.\n\n**Bepaalde lidwoorden** (specifiek):\n• **de** — bij 'de'-woorden: de hond, de auto, de man\n• **het** — bij 'het'-woorden: het boek, het kind, het huis\n\n**Onbepaalde lidwoord** (algemeen):\n• **een** — voor alle: een hond, een boek, een huis\n\n**Test**:\n• Past 'de', 'het' of 'een' ervoor? Dan is het volgende woord een zelfst. naamwoord.\n• Lidwoord is **altijd** klein woordje voor een zelfst. naamwoord.\n\n**Voornaamwoord**: vervangt een naam of een zelfst. naamwoord.\n\n**Persoonlijk voornaamwoord** (verwijzen naar personen):\n• ik / jij / hij / zij / wij / jullie / zij\n• mij / jou / hem / haar / ons / hen\n\n**Bezittelijk voornaamwoord** (van wie iets is):\n• mijn, jouw, zijn, haar, ons, jullie, hun\n\n**Aanwijzend voornaamwoord** (ergens naar wijzen):\n• deze, die, dit, dat\n• 'Deze auto is van mij.' / 'Die appel is groen.'\n\n**Vragend voornaamwoord** (vragen mee stellen):\n• wie, wat, welke\n• 'Wie is dat?' / 'Wat zeg je?'\n\n**Cito-tip**:\n• Lidwoord = **de/het/een** vóór een zelfst. naamwoord.\n• Voornaamwoord = vervangt een naam (ik, hij, dit, die...).",
    checks: [
      {
        q: "Welke is een **lidwoord**?",
        options: ["het","mij","mijn","wie"],
        answer: 0,
        wrongHints: [null,"Persoonlijk voornaamwoord.","Bezittelijk voornaamwoord.","Vragend voornaamwoord."],
      },
      {
        q: "*'**Mijn** fiets is groen.'* — welk soort woord is 'mijn'?",
        options: ["bezittelijk voornaamwoord","persoonlijk voornaamwoord","lidwoord","bijvoeglijk naamwoord"],
        answer: 0,
        wrongHints: [null,"Niet 'ik/jij/hij'.","Geen lidwoord.","Geen eigenschap."],
      },
      {
        q: "*'**Wie** zit daar?'* — welk soort woord is 'wie'?",
        options: ["vragend voornaamwoord","persoonlijk voornaamwoord","lidwoord","werkwoord"],
        answer: 0,
        wrongHints: [null,"Niet 'ik/jij/hij'.","Geen lidwoord.","Geen werkwoord."],
      },
      {
        q: "*'**Deze** appel is rood.'* — welk soort woord is 'deze'?",
        options: ["aanwijzend voornaamwoord","lidwoord","bijvoeglijk naamwoord","werkwoord"],
        answer: 0,
        wrongHints: [null,"Geen 'de/het/een'.","Geen eigenschap.","Geen werkwoord."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — woordsoorten mix",
    explanation: "Mix-toets: zelfst. nw, werkwoord, bijvoeglijk, lidwoord, voornaamwoord.",
    checks: [
      {
        q: "*'De rode auto rijdt snel.'* — welk woord is een **werkwoord**?",
        options: ["rijdt","auto","rode","snel"],
        answer: 0,
        wrongHints: [null,"Zelfst. naamwoord.","Bijvoeglijk naamwoord.","Bijwoord/bijvoeglijk."],
      },
      {
        q: "*'Mijn lieve hond Buddy is groot.'* — welk woord is een **eigennaam**?",
        options: ["Buddy","hond","Mijn","groot"],
        answer: 0,
        wrongHints: [null,"Soort dier — geen specifieke naam.","Bezittelijk voornaamwoord.","Bijvoeglijk."],
      },
      {
        q: "*'Het kind is blij.'* — welk soort woord is **'het'**?",
        options: ["lidwoord","persoonlijk voornaamwoord","bezittelijk voornaamwoord","bijvoeglijk naamwoord"],
        answer: 0,
        wrongHints: [null,"Hier niet — staat vóór 'kind'.","Geen 'mijn/jouw'.","Geen eigenschap."],
      },
      {
        q: "*'Tom rent **snel** naar huis.'* — welk soort woord is 'snel'?",
        options: ["bijwoord/bijvoeglijk","werkwoord","lidwoord","voornaamwoord"],
        answer: 0,
        wrongHints: [null,"Geen werkwoord.","Geen 'de/het/een'.","Geen verwijzer."],
      },
      {
        q: "Welke is een **persoonlijk voornaamwoord**?",
        options: ["zij","de","mijn","welke"],
        answer: 0,
        wrongHints: [null,"Lidwoord.","Bezittelijk voornaamwoord.","Vragend voornaamwoord."],
      },
      {
        q: "*'Wij hebben **een** mooi huis gekocht.'* — welk woord is het lidwoord?",
        options: ["een","Wij","mooi","huis"],
        answer: 0,
        wrongHints: [null,"Persoonlijk voornaamwoord.","Bijvoeglijk.","Zelfst. naamwoord."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordsoortenPo = {
  id: "woordsoorten-po",
  title: "Woordsoorten herkennen — Cito groep 5-8",
  emoji: "🔤",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — woordsoorten",
  intro:
    "Zelfstandig naamwoord, werkwoord, bijvoeglijk naamwoord, lidwoord, voornaamwoord. Cito-stijl. ~12 min.",
  triggerKeywords: [
    "woordsoorten","zelfstandig naamwoord","werkwoord","bijvoeglijk",
    "lidwoord","voornaamwoord","persoonlijk","bezittelijk","aanwijzend",
  ],
  chapters,
  steps,
};

export default woordsoortenPo;
