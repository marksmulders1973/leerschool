// Leerpad: Samenvatten / hoofdgedachte vinden — voor groep 5-8
// 5 stappen, studievaardigheden / leesvaardigheid.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#ec407a",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["💭","🔍","✏️","📝","🏆"];

const chapters = [
  { letter: "A", title: "Wat is hoofdgedachte?", emoji: "💭", from: 0, to: 0 },
  { letter: "B", title: "Hoofdgedachte vinden", emoji: "🔍", from: 1, to: 1 },
  { letter: "C", title: "Hoofd vs bijzaken", emoji: "✏️", from: 2, to: 2 },
  { letter: "D", title: "Samenvatting maken", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een hoofdgedachte?",
    explanation: "**Hoofdgedachte** = waar de tekst **vooral over gaat**. De **kernboodschap** in 1 of 2 zinnen samengevat.\n\n**Voorbeeld** — een tekst over voetbal:\n*'Voetbal is wereldwijd de populairste sport. Miljoenen mensen kijken WK-finales. Er zijn voetbal-clubs in elk land. Kinderen beginnen al jong met voetballen op school.'*\n\n**Hoofdgedachte**: *'Voetbal is een populaire sport over de hele wereld.'*\n\n**Niet de hoofdgedachte**:\n• 'Kinderen beginnen jong met voetballen' — dat is een **detail**, geen hoofdpunt.\n• 'WK-finales worden bekeken door miljoenen' — ook detail.\n\n**Verschil hoofdgedachte vs onderwerp**:\n• **Onderwerp** = waar gaat het over? *(1 woord/zin: 'voetbal')*.\n• **Hoofdgedachte** = wat zegt de tekst over dat onderwerp? *(volle zin)*.\n\n**Hoofdgedachte staat vaak**:\n1. **In de eerste zin** van de alinea.\n2. **In de laatste zin** als samenvatting.\n3. **In de titel** of kop.\n\n**Cito-vraag-typen**:\n• 'Wat is de hoofdgedachte van deze tekst?'\n• 'Welke zin geeft het beste de hoofdgedachte weer?'\n• 'Welk antwoord beschrijft het hoofdpunt?'\n\n**Cito-tip**:\nVraag jezelf: *'Wat zou ik vertellen aan iemand die de tekst niet heeft gelezen?'* — dat is de hoofdgedachte.",
    checks: [
      {
        q: "Wat is een **hoofdgedachte**?",
        options: ["De kernboodschap","De titel","Een klein detail","De eerste letter"],
        answer: 0,
        wrongHints: [null,"Soms staat ie in titel, maar 't is meer.","Andersom — geen detail.","Nee, geen letter."],
      },
      {
        q: "Verschil **onderwerp** en **hoofdgedachte**?",
        options: ["Onderwerp = waarover, hoofdgedachte = wat ervan gezegd","Onderwerp komt na hoofdgedachte","Geen verschil","Onderwerp altijd 1 woord"],
        answer: 0,
        wrongHints: [null,"Onderwerp komt vaak eerst.","Wel verschil.","Niet altijd."],
      },
      {
        q: "Tekst: 'Honden zijn loyaal. Ze beschermen je. Ze spelen graag.'\n\n**Hoofdgedachte**?",
        options: ["Honden zijn fijne huisdieren","Honden bijten soms","Katten zijn beter","Honden eten veel"],
        answer: 0,
        wrongHints: [null,"Niet vermeld in tekst.","Niet vermeld.","Niet vermeld."],
      },
    ],
  },

  {
    title: "Hoofdgedachte vinden — strategieën",
    explanation: "**Hoe vind je de hoofdgedachte?**\n\n**1. Lees de titel** — geeft vaak een hint.\n• Titel 'Voordelen van fietsen' → hoofdgedachte = 'fietsen heeft voordelen'.\n\n**2. Lees de eerste zin van elke alinea** — vaak 'topic-sentence'.\n• Eerste zinnen geven samenvatting van de alinea.\n\n**3. Lees de laatste alinea / conclusie** — geeft samenvatting.\n\n**4. Vraag: 'Wat is het rode draadje?'**\n• Wat komt steeds terug?\n• Wat is het hoofdthema dat alle alinea's verbindt?\n\n**5. Sleutelwoorden tellen**:\n• Welke woorden komen vaak voor?\n• Bijv. tekst over 'vrienden' — hoofdgedachte gaat over vriendschap.\n\n**Cito-fout 1**:\nKiezen voor een **detail** in plaats van het hoofdpunt.\n• Tekst over voetbal: detail = 'Messi is wereldspeler'.\n• Hoofd = 'voetbal is populair wereldwijd'.\n\n**Cito-fout 2**:\nKiezen voor een **te algemene** stelling.\n• Te algemeen: 'sporten zijn leuk'.\n• Beter: 'voetbal is wereldwijd populair'.\n\n**Cito-fout 3**:\nKiezen voor een **mening die NIET in tekst staat**.\n• Tekst zegt nergens dat 'tennis beter is dan voetbal'.\n• Antwoord moet komen uit de tekst.\n\n**Cito-tip**:\nHet juiste antwoord is meestal in **eigen woorden** wat de tekst zegt — niet een letterlijke quote. Maar wel binnen de tekst-info.",
    checks: [
      {
        q: "Waar **vind je vaak** de hoofdgedachte in een tekst?",
        options: ["Titel of eerste zin","Midden van zin 5","Helemaal niet","In de plaatjes"],
        answer: 0,
        wrongHints: [null,"Niet specifiek genoeg.","Wel — in titel/eerste zin.","Plaatjes ondersteunen, niet de hoofd."],
      },
      {
        q: "Tekst: 'Kinderen leren beter na een goed ontbijt. Wetenschappers vergeleken kinderen mét en zónder ontbijt. Kinderen mét ontbijt scoorden hoger.'\n\n**Hoofdgedachte**?",
        options: ["Ontbijt helpt bij leren","Wetenschappers doen onderzoeken","Kinderen ontbijten thuis","Cornflakes zijn goed"],
        answer: 0,
        wrongHints: [null,"Detail, niet hoofd.","Niet expliciet besproken.","Niet vermeld."],
      },
      {
        q: "Cito-fout — wat is **GEEN goede hoofdgedachte**?",
        options: ["Een detail uit de tekst","Wat tekst zegt in eigen woorden","Wat tekst herhaalt over alle alinea's","De rode draad"],
        answer: 0,
        wrongHints: [null,"Wel goed.","Wel goed.","Wel goed."],
      },
    ],
  },

  {
    title: "Hoofdzaken vs bijzaken",
    explanation: "**Hoofdzaak** = belangrijke informatie. **Bijzaak** = extra detail.\n\n**Hoe verschil zien**:\n• **Hoofdzaak**: ondersteunt direct de hoofdgedachte.\n• **Bijzaak**: leuk detail, maar niet essentieel.\n\n**Voorbeeld** — over hond:\n*'De hond is een trouwe huisdier. Hij beschermt zijn baasje en speelt graag. De buurman heeft ook een hond, een witte bouvier van 4 jaar oud. Honden eten meestal brokjes.'*\n\n**Hoofdzaken**:\n• Hond is trouwe huisdier.\n• Hij beschermt zijn baasje.\n• Hij speelt graag.\n\n**Bijzaken** *(weglaten kan)*:\n• 'Buurman heeft een witte bouvier van 4 jaar' — leuk detail, maar niet over 'hond als huisdier'.\n• 'Honden eten brokjes' — wel waar, maar gaat naast het hoofdpunt.\n\n**Truc — kun je het schrappen?**\nLees de tekst zonder een zin. Verandert de hoofdboodschap? Nee → bijzaak. Ja → hoofdzaak.\n\n**Soorten bijzaken**:\n1. **Voorbeelden** *(soms hoofdzaak, soms bij)*.\n2. **Anecdotes** — verhaaltjes (bij).\n3. **Cijfers en details** — extra info (bij).\n4. **Zijwegen** — info die het onderwerp ietsje raakt (bij).\n\n**Cito-vraag-typen**:\n• 'Welke zin is een **bijzaak**?'\n• 'Welke informatie is **NIET** essentieel?'\n• 'Welk feit kun je **weglaten** zonder de boodschap te verliezen?'",
    checks: [
      {
        q: "Tekst: 'Fietsen is gezond. Het is goed voor je hart en je spieren. Mijn oom Henk fietst elke dag 20 km.'\n\n**Welke zin is een bijzaak**?",
        options: ["Mijn oom Henk fietst elke dag 20 km.","Fietsen is gezond.","Het is goed voor hart.","Het is goed voor spieren."],
        answer: 0,
        wrongHints: [null,"Hoofdzaak.","Hoofdzaak.","Hoofdzaak."],
      },
      {
        q: "Hoofdzaak of bijzaak: **'Beren slapen 's winters'**? *(in een tekst over winterslaap)*.",
        options: ["Hoofdzaak","Bijzaak","Geen van beide","Geen tekst"],
        answer: 0,
        wrongHints: [null,"Direct over winterslaap → hoofd.","Wel relevant.","Wel."],
      },
      {
        q: "**Truc** om te checken hoofd vs bij?",
        options: ["Schrap de zin — verandert de boodschap?","Tel de woorden","Kijk naar kleur","Kijk naar plaatje"],
        answer: 0,
        wrongHints: [null,"Geen zin.","Geen criterium.","Geen criterium."],
      },
    ],
  },

  {
    title: "Samenvatting maken",
    explanation: "**Samenvatten** = de tekst korter maken zonder de hoofdboodschap te verliezen.\n\n**Goede samenvatting bevat**:\n1. **Hoofdgedachte** (1 zin).\n2. **Hoofdzaken** *(belangrijke punten)*.\n3. **In eigen woorden** (niet kopiëren).\n4. **Korter dan origineel** *(meestal ~25-30%)*.\n\n**Goede samenvatting bevat NIET**:\n• Bijzaken / details.\n• Voorbeelden (tenzij essentieel).\n• Eigen mening (alleen wat tekst zegt).\n• Letterlijke kopie van zinnen.\n\n**Stappen om samen te vatten**:\n1. **Lees** de hele tekst eerst.\n2. **Onderstreep** hoofdpunten in elke alinea.\n3. **Schrap** bijzaken.\n4. **Schrijf** in 3-5 zinnen wat de tekst zegt.\n5. **Controleer**: klopt jouw samenvatting met origineel?\n\n**Voorbeeld**:\n**Tekst**: *'Vrienden zijn belangrijk. Ze geven je steun in moeilijke tijden. Mijn vriend Jan heeft me geholpen toen ik mijn fiets kwijt was. Vrienden vieren ook leuke momenten met je. Onderzoek toont dat mensen met vrienden langer leven.'*\n\n**Samenvatting**: *'Vrienden zijn belangrijk: ze geven steun, vieren leuke momenten, en mensen met vrienden leven zelfs langer.'*\n\n*(Zit niet in: 'mijn vriend Jan en de fiets' — dat is een bijzaak/anecdote)*.\n\n**Cito-tip**:\nGoede samenvatting kan **opnieuw uitgelegd** worden door iemand die de tekst niet kent. Test: leg de samenvatting voor → snapt iemand het?",
    checks: [
      {
        q: "Wat hoort **NIET** in een goede samenvatting?",
        options: ["Eigen mening","Hoofdgedachte","Hoofdzaken","Eigen woorden"],
        answer: 0,
        wrongHints: [null,"Hoort wel.","Hoort wel.","Hoort wel — eigen woorden goed."],
      },
      {
        q: "Hoe lang is een **goede** samenvatting meestal?",
        options: ["Korter dan origineel","Langer dan origineel","Even lang","Heel lang"],
        answer: 0,
        wrongHints: [null,"Niet samenvatten.","Niet samenvatten.","Niet samenvatten."],
      },
      {
        q: "Tekst: 'Mensen drinken water voor gezondheid. Water spoelt afvalstoffen weg. Water zorgt voor hydratatie. Mijn opa drinkt 2 liter per dag.'\n\n**Wat staat NIET in een goede samenvatting**?",
        options: ["Mijn opa's 2 liter per dag","Mensen drinken water","Water spoelt afval","Hydratatie"],
        answer: 0,
        wrongHints: [null,"Hoort wel.","Hoort wel.","Hoort wel."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — samenvatten mix",
    explanation: "Mix-toets: hoofdgedachte vinden, hoofd/bij scheiden, samenvatten.",
    checks: [
      {
        q: "Tekst: 'Apen zijn slim. Ze gebruiken stokken om termieten uit holen te halen. In Afrika is dit gezien bij chimpansees.'\n\n**Hoofdgedachte**?",
        options: ["Apen zijn slim — ze gebruiken gereedschap","Termieten leven in holen","Chimpansees komen uit Afrika","Stokken zijn handig"],
        answer: 0,
        wrongHints: [null,"Detail.","Detail.","Detail."],
      },
      {
        q: "Welke zin is een **bijzaak** in een tekst over 'gezond eten'?",
        options: ["Mijn moeder kookt elke maandag pasta","Groenten geven vitaminen","Fruit is gezond","Suiker is ongezond"],
        answer: 0,
        wrongHints: [null,"Hoofdzaak.","Hoofdzaak.","Hoofdzaak."],
      },
      {
        q: "Wat is **NIET** een goed samenvattings-strategie?",
        options: ["Letterlijk kopiëren van zinnen","Eigen woorden","Hoofdpunten kiezen","Kort houden"],
        answer: 0,
        wrongHints: [null,"Wel goed.","Wel goed.","Wel goed."],
      },
      {
        q: "Tekst gaat over voordelen van fietsen. Welke is een **slechte hoofdgedachte**?",
        options: ["Fietsen is gevaarlijk","Fietsen is gezond","Fietsen is milieuvriendelijk","Fietsen is goedkoop"],
        answer: 0,
        wrongHints: [null,"Past wel.","Past wel.","Past wel."],
      },
      {
        q: "Hoofdgedachte staat vaak in:",
        options: ["Titel of eerste zin","Voetnoten","Plaatjes","Bibliografie"],
        answer: 0,
        wrongHints: [null,"Niet de hoofd.","Niet de hoofd.","Niet de hoofd."],
      },
      {
        q: "Tekst: 'Honden helpen blinden. Ze leiden de baas veilig over straat. Hun training duurt 2 jaar.'\n\n**Bijzaak**?",
        options: ["Hun training duurt 2 jaar","Honden helpen blinden","Veilig over straat","Geen, alles hoofd"],
        answer: 0,
        wrongHints: [null,"Hoofdzaak.","Hoofdzaak.","Wel een bijzaak — training-duur."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const samenvattenHoofdgedachtePo = {
  id: "samenvatten-hoofdgedachte-po",
  title: "Samenvatten en hoofdgedachte — Cito groep 5-8",
  emoji: "💭",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — leesvaardigheid",
  intro:
    "Hoofdgedachte vinden, hoofd/bijzaken scheiden, samenvatting maken. Cito-stijl. ~12 min.",
  triggerKeywords: [
    "samenvatten","samenvatting","hoofdgedachte","kerngedachte","onderwerp",
    "hoofdzaak","bijzaak","leesvaardigheid","studievaardigheden","tekst",
  ],
  chapters,
  steps,
};

export default samenvattenHoofdgedachtePo;
