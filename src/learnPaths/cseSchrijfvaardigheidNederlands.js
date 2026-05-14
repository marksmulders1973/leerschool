// Leerpad: CSE Nederlands — schrijfvaardigheid — klas 3-4.
// Onderdeel productieve vaardigheid Nederlands. Referentieniveau 2F-3F.
// 6 stappen met uitlegPad. Parallel met CSE-engels-schrijf-pad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  formal: "#42a5f5",
  informal: "#ffd54f",
  betoog: "#ff7043",
  structure: "#9575cd",
};

const stepEmojis = ["✉️", "📝", "💬", "📋", "✅", "🏆"];

const chapters = [
  { letter: "A", title: "Formele brief / mail", emoji: "✉️", from: 0, to: 0 },
  { letter: "B", title: "Betoog + opiniestuk", emoji: "💬", from: 1, to: 1 },
  { letter: "C", title: "Verslag + verhaal", emoji: "📝", from: 2, to: 2 },
  { letter: "D", title: "Samenvatten", emoji: "📋", from: 3, to: 3 },
  { letter: "E", title: "Veelgemaakte fouten", emoji: "✅", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function brieffSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Formele brief — opbouw</text>

${[
  { y: 40, lab: "1. Adressering", txt: "afzender + ontvanger + datum" },
  { y: 67, lab: "2. Aanhef", txt: "Geachte heer/mevrouw ..." },
  { y: 94, lab: "3. Aanleiding", txt: "Hierbij schrijf ik u over ..." },
  { y: 121, lab: "4. Hoofdtekst", txt: "uitleg + reden + verzoek (2-3 alinea's)" },
  { y: 148, lab: "5. Slot", txt: "verzoek + dank + verwachting" },
  { y: 175, lab: "6. Ondertekening", txt: "Hoogachtend, [naam]" },
].map((s, i) => `
<rect x="20" y="${s.y - 12}" width="280" height="22" rx="4" fill="${i % 2 ? "rgba(66,165,245,0.10)" : "rgba(255,213,79,0.10)"}" stroke="${i % 2 ? COLORS.formal : COLORS.informal}" stroke-width="1"/>
<text x="30" y="${s.y + 3}" fill="${i % 2 ? COLORS.formal : COLORS.informal}" font-size="10" font-family="Arial" font-weight="bold">${s.lab}</text>
<text x="130" y="${s.y + 3}" fill="${COLORS.text}" font-size="10" font-family="Arial">${s.txt}</text>
`).join("")}
</svg>`;
}

const steps = [
  // STAP 1: Formele brief
  {
    title: "Formele brief / e-mail",
    explanation:
      "Een **formele brief** schrijf je aan een instelling, bedrijf of overheid. Bv. klacht, sollicitatie, verzoek, vraag.\n\n**6 onderdelen — vaste volgorde**:\n\n**1. Adressering**:\n• **Afzender** linksboven: jouw naam + adres + postcode + plaats.\n• **Datum** rechtsboven: '15 mei 2026'.\n• **Ontvanger** boven *(links of rechts)*: bedrijfsnaam + adres.\n\n**2. Aanhef** *(uit het hoofd)*:\n• **Naam bekend**: 'Geachte heer Jansen,' / 'Geachte mevrouw De Vries,'\n• **Naam onbekend**: 'Geachte heer/mevrouw,'\n• **Achternaam** gebruiken, niet voornaam.\n• Met **komma**, niet uitroepteken.\n\n**3. Onderwerp** *(optioneel, in e-mail)*:\n• 'Betreft: klacht over kapotte fiets'.\n• Of vetgedrukt boven aanhef.\n\n**4. Aanleiding** *(eerste alinea)*:\n• Waarom schrijf je?\n• 'Hierbij schrijf ik u over de fiets die ik op 12 mei bij u kocht.'\n• 'Naar aanleiding van uw advertentie ...'\n• 'Met deze brief wil ik mijn ongenoegen uiten over ...'\n\n**5. Hoofdtekst** *(2-3 alinea's)*:\n• Wat is gebeurd?\n• Wat zijn de feiten? *(datum, bedrag, bestelnummer)*.\n• Wat is je standpunt?\n• Verwijs naar bewijzen *(bonnetje, e-mail)*.\n\n**6. Slot**:\n• Wat verwacht je?\n• 'Ik verzoek u om mij een vervangende fiets te leveren.'\n• 'Ik kijk uit naar uw reactie.'\n• 'Ik dank u alvast voor uw medewerking.'\n\n**7. Ondertekening**:\n• **Naam bekend** in aanhef → 'Met vriendelijke groet,' of 'Hoogachtend,' + handtekening + naam.\n• **Heel formeel**: 'Hoogachtend,'.\n• **Iets vriendelijker**: 'Met vriendelijke groet,' *(MVG)*.\n\n**Formele toon — wel + niet**:\n\n**Wel**:\n• Volledige zinnen.\n• Beleefde woorden: 'u', 'verzoek', 'graag'.\n• Geen samentrekkingen *(u-vorm)*.\n• Geen emoji.\n• Spelling + grammatica correct.\n\n**Niet**:\n• 'Hoi!' / 'Hey!' als aanhef.\n• 'Ik vond het echt klote'.\n• Smileys.\n• Slang.\n• Spelling-fouten.\n\n**Voorbeeld formele brief**:\n```\nAnna van Dijk                    [datum]\nHoofdstraat 5\n3500 AB Utrecht                  Utrecht, 15 mei 2026\n\nFiets-handel Jansen\nPostbus 100\n3500 BB Utrecht\n\nBetreft: klacht over kapotte fiets\n\nGeachte heer Jansen,\n\nHierbij schrijf ik u over de fiets die ik op\n12 mei 2026 bij u kocht (bestelnummer 4452).\nBij ontvangst bleek de fiets een gebroken pedaal\nte hebben, waardoor hij niet bruikbaar is.\n\nIk verzoek u om de fiets te vervangen of mij\nhet aankoopbedrag terug te storten. Ik kijk uit\nnaar uw reactie.\n\nMet vriendelijke groet,\n\n[handtekening]\nAnna van Dijk\n```\n\n**Cito-vragen**:\n*'Welke aanhef is formeel?'* → Geachte heer/mevrouw.\n*'Welke ondertekening is zeer formeel?'* → Hoogachtend.\n*'Schrijf je samentrekkingen in formele brief?'* → Nee.",
    svg: brieffSvg(),
    checks: [
      {
        q: "Welke is een **formele aanhef**?",
        options: ["Geachte heer Jansen,", "Hoi Tom!", "Hey daar,", "Lieve Anna,"],
        answer: 0,
        wrongHints: [null, "Informeel.", "Informeel.", "Informeel."],
      },
      {
        q: "**Zeer formele** ondertekening?",
        options: ["Hoogachtend,", "Doei!", "Liefs,", "Tot snel!"],
        answer: 0,
        wrongHints: [null, "Informeel.", "Persoonlijk.", "Informeel."],
      },
      {
        q: "Mag je **'je/jij'** in formele brief?",
        options: ["Nee, 'u' gebruiken", "Ja, maakt niet uit", "Soms", "Alleen aan vrienden"],
        answer: 0,
        wrongHints: [null, "Wel uit.", "Vrijwel nooit.", "Niet voor formele brief."],
      },
      {
        q: "Wat hoort in **aanleiding** *(eerste alinea)*?",
        options: ["Waarom je schrijft", "Slot-verzoek", "Adres", "Aanhef"],
        answer: 0,
        wrongHints: [null, "Komt in slot.", "Boven.", "Vóór aanleiding."],
      },
    ],
  },

  // STAP 2: Betoog
  {
    title: "Betoog + opiniestuk",
    explanation:
      "Een **betoog** is een tekst waarin je een **standpunt** verdedigt met **argumenten** om de lezer te overtuigen.\n\n**Structuur betoog** *(uit het hoofd!)*:\n\n**1. Inleiding**:\n• Onderwerp.\n• Je **stelling** *(standpunt)*.\n• Wat je gaat bespreken.\n\nVoorbeeld:\n*'Moeten scholen een langere zomervakantie krijgen? Naar mijn mening is dit een goede zaak omdat leerlingen rust nodig hebben.'*\n\n**2. Middenstuk** *(2-3 alinea's met argumenten)*:\n\n**Argument 1** *(sterkste)*:\n• Stel argument.\n• Onderbouw met **bewijs**: feit / voorbeeld / statistiek.\n• 'Ten eerste, ...'.\n\n**Argument 2**:\n• Tweede reden.\n• 'Daarnaast ...' / 'Bovendien ...'.\n\n**Argument 3 (optioneel)**:\n• Derde reden.\n• 'Ten slotte ...'.\n\n**3. Tegenwerping + weerlegging** *(sterkere betoog)*:\n• 'Sommigen beweren dat ...'.\n• Waarom dit niet (helemaal) klopt.\n• 'Echter, in werkelijkheid ...'.\n\n**4. Slot**:\n• Samenvatting van argumenten.\n• Versterking van stelling.\n• Soms: oproep tot actie.\n\nVoorbeeld slot:\n*'Kortom, een langere zomervakantie zou leerlingen ten goede komen. Het is tijd om dit serieus te overwegen.'*\n\n**Soorten argumenten** *(uit het hoofd!)*:\n\n**1. Feitelijk** — gebaseerd op data/onderzoek.\n• 'Volgens het CBS rookt 20% van Nederlanders.'\n• 'Een studie van de Universiteit Utrecht laat zien dat ...'.\n\n**2. Emotioneel** — appel op gevoel.\n• 'Denk aan de kinderen die ...'.\n• 'Het is hartverscheurend dat ...'.\n\n**3. Moreel** — wat is goed/fout?\n• 'Het is oneerlijk dat ...'.\n• 'We hebben de plicht om ...'.\n\n**4. Praktisch** — werkt het of niet?\n• 'In Frankrijk werkt deze regel goed.'\n\n**5. Autoriteit** — iemand met gezag.\n• 'Volgens de minister ...'.\n• 'De WHO adviseert ...'.\n\n**6. Voorbeeld** — illustratie.\n• 'Een voorbeeld is ...'.\n\n**Signaalwoorden** voor betoog *(uit het hoofd)*:\n\n• **Eerst noemen**: ten eerste, allereerst, om te beginnen.\n• **Toevoegen**: daarnaast, bovendien, ook, verder.\n• **Tegenovergesteld**: echter, daarentegen, maar, hoewel.\n• **Reden**: omdat, want, doordat, vanwege.\n• **Gevolg**: dus, daarom, vandaar, zodoende.\n• **Voorbeeld**: zoals, bijvoorbeeld, neem nou.\n• **Conclusie**: kortom, samenvattend, alles afwegend.\n\n**Betogend vs beschouwend** — verschil:\n• **Betogend**: **kiest 1 kant** + verdedigt.\n• **Beschouwend**: **weegt pro + contra** zonder duidelijke conclusie.\n\nBij CSE: meestal **betogend gevraagd** *(stel je standpunt + verdedig)*.\n\n**Cito-tips**:\n• **Houd je aan woordaantal** *(meestal 200-300 woorden)*.\n• **Sterk eindigen** met conclusie.\n• **Tegenwerping** is +punten — toont diepte.\n• **Spelling + grammatica** check.",
    checks: [
      {
        q: "Wat is een **stelling** in betoog?",
        options: ["Je standpunt", "Een feit", "Een vraag", "Een voorbeeld"],
        answer: 0,
        wrongHints: [null, "Stelling = mening.", "Geen vraag.", "Geen voorbeeld."],
      },
      {
        q: "*'Volgens onderzoek van TU Delft ...'* — welk argument?",
        options: ["Autoriteit", "Emotioneel", "Praktisch", "Moreel"],
        answer: 0,
        wrongHints: [null, "Geen emotie.", "Niet praktisch.", "Niet over goed/fout."],
      },
      {
        q: "Verschil **betogend** en **beschouwend**?",
        options: ["Betogend kiest 1 kant; beschouwend weegt pro+contra", "Geen verschil", "Betogend is langer", "Beschouwend is feitelijk"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Niet primair.", "Niet primair."],
      },
      {
        q: "Welk signaalwoord = **gevolg**?",
        options: ["dus", "echter", "omdat", "zoals"],
        answer: 0,
        wrongHints: [null, "Tegenstelling.", "Reden.", "Voorbeeld."],
      },
    ],
  },

  // STAP 3: Verslag + verhaal
  {
    title: "Verslag + verhaal",
    explanation:
      "**Verslag** en **verhaal** zijn andere schrijfvormen waar je op CSE Nederlands mee te maken kunt krijgen.\n\n**Verslag** = beschrijving van iets dat gebeurd is.\n\n**Soorten verslagen**:\n• **Reisverslag** *(vakantie, schoolreis)*.\n• **Practicumverslag** *(natuurkunde-experiment)*.\n• **Wedstrijdverslag** *(sport)*.\n• **Boek- of filmrecensie**.\n• **Excursie-verslag**.\n\n**Structuur verslag**:\n\n**1. Titel + introductie**:\n• Wat was de activiteit?\n• Datum, plek, betrokken personen.\n\n**2. Wat is er gebeurd?** *(chronologisch)*:\n• In volgorde van tijd.\n• Belangrijkste gebeurtenissen.\n• Signaalwoorden van tijd: eerst, daarna, vervolgens, ten slotte.\n\n**3. Beschrijving**:\n• Wat heb je gezien?\n• Wat heb je gedaan?\n• Wat heb je geleerd?\n\n**4. Slot**:\n• Conclusie / mening.\n• Wat is opvallend geweest?\n• Wat heb je eruit gehaald?\n\n**Tijd**:\n• Verslagen vaak in **verleden tijd** *(was, ging, deed)*.\n• Soms in tegenwoordige tijd voor levendigheid *(hij staat op de berg en kijkt naar beneden)*.\n• **Consistent** — niet wisselen.\n\n---\n\n**Verhaal** = creatieve fictie of waar gebeurd verhaal.\n\n**Onderdelen** *(klassieke structuur)*:\n\n**1. Begin (expositie)**:\n• Wie zijn de personages?\n• Waar speelt het?\n• Wanneer?\n• Wat is de uitgangs-situatie?\n\n**2. Opbouw**:\n• Wat gebeurt er?\n• Welke gebeurtenissen leiden tot het probleem?\n\n**3. Hoogtepunt (climax)**:\n• Het kritieke moment.\n• Spanning op zijn hoogst.\n\n**4. Afloop (ontknoping)**:\n• Hoe loopt het af?\n• Welke conclusies trekken personages?\n• Open eind of vast eind?\n\n**Personages**:\n• **Hoofdpersoon** *(protagonist)*.\n• **Tegenstander** *(antagonist)* — als die er is.\n• **Bijfiguren**.\n\n**Verteller-perspectief**:\n• **Ik-perspectief**: 'Ik liep door de straat ...' *(persoonlijk, direct)*.\n• **Hij/zij-perspectief** *(personaal)*: 'Tom liep door de straat ...' *(alleen wat 1 persoon ziet/voelt)*.\n• **Alwetende verteller**: weet alles, ziet in elke persoon. *'Tom liep door de straat en dacht: ... Lisa, in haar huis, was juist aan het ...'.*\n\n**Tips voor verhaal**:\n• **Spanning opbouwen** — niet meteen alles vertellen.\n• **Beschrijven** wat personages **zien, horen, ruiken, voelen**.\n• **Dialoog** kort + gericht.\n• **Show, don't tell**: niet 'Tom was bang' maar 'Tom's handen trilden, hij stond stil'.\n• **Klein detail** maakt scène levend.\n\n**Cito-tip — verschil verslag/verhaal**:\n• **Verslag** = wat **echt** gebeurd is, neutraal.\n• **Verhaal** = vaak **fictie**, met spanning/beleving.\n\n**Cito-vraag**:\n*'Wat is verschil tussen verslag en betoog?'*\n→ Verslag = wat is gebeurd, neutraal. Betoog = standpunt verdedigen met argumenten.\n\n*'Welk perspectief is 'ik liep...'?'*\n→ Ik-perspectief.",
    checks: [
      {
        q: "Verschil **verslag** en **betoog**?",
        options: ["Verslag = wat is gebeurd; betoog = standpunt verdedigen", "Geen verschil", "Verslag is langer", "Betoog is fictie"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Niet primair.", "Niet — betoog is feitelijk."],
      },
      {
        q: "*'Ik liep door de straat'* = welk perspectief?",
        options: ["Ik-perspectief", "Hij/zij-perspectief", "Alwetend", "Geen"],
        answer: 0,
        wrongHints: [null, "Niet — gebruikt ik.", "Niet — alleen 1 persoon.", "Wel iets — ik-vorm."],
      },
      {
        q: "Welke tijd vooral bij **verslagen**?",
        options: ["Verleden tijd", "Tegenwoordige", "Toekomst", "Voorwaardelijk"],
        answer: 0,
        wrongHints: [null, "Soms, voor levendigheid.", "Bijna nooit.", "Geen tijd-categorie."],
      },
      {
        q: "Wat is **'show, don't tell'**?",
        options: ["Beschrijf wat personage doet/voelt i.p.v. zeggen", "Niet vertellen", "Plaatjes gebruiken", "Stel niet"],
        answer: 0,
        wrongHints: [null, "Andere betekenis.", "Niet alleen plaatjes.", "Niet bedoeld."],
      },
    ],
  },

  // STAP 4: Samenvatten
  {
    title: "Samenvatten",
    explanation:
      "**Samenvatten** = een tekst **korter** maken in **eigen woorden**, met behoud van **hoofdgedachte**.\n\n**Doel**:\n• Tonen dat je tekst begrijpt.\n• Niet kopiëren — herformuleren.\n• Hoofdpunten + structuur behouden.\n\n**Stappenplan samenvatting**:\n\n**Stap 1 — Lees rustig**:\n• Gehele tekst eerst.\n• Markeer hoofdgedachte + kernpunten.\n\n**Stap 2 — Maak schema**:\n• Hoofdgedachte = welk thema?\n• 3-5 kernpunten = wat zegt de schrijver?\n• Weglaten: details, voorbeelden, herhalingen.\n\n**Stap 3 — Schrijf in eigen woorden**:\n• Gebruik **synoniemen**.\n• Verander **zinsbouw**.\n• Niet kopiëren!\n\n**Stap 4 — Check woordenaantal**:\n• Opdracht zegt vaak '50-100 woorden'. Tel.\n• Maak korter als te lang.\n\n**Stap 5 — Lees terug**:\n• Klopt het? Hoofdgedachte er nog in?\n• Spelling + grammatica?\n\n**Voorbeeld**:\n*Originele tekst (300 woorden)*: 'Klimaatverandering is een groot probleem. De aarde wordt warmer door uitstoot van broeikasgassen, vooral CO2. Mensen verbranden fossiele brandstoffen voor energie. Hierdoor smelt poolijs, stijgt zeespiegel, en sterven soorten uit. Volgens het IPCC moeten we voor 2030 onze uitstoot halveren ...'\n\n*Samenvatting (50 woorden)*:\n*'Klimaatverandering is een grote bedreiging. De aarde warmt op door menselijke CO2-uitstoot uit fossiele brandstoffen. Gevolgen zijn smeltend ijs, zeespiegel-stijging en soorten-verlies. Het IPCC roept op tot 50% minder uitstoot vóór 2030.'*\n\n**Synoniemen** *(om te parafraseren)*:\n• 'groot probleem' → 'belangrijke bedreiging', 'major issue'.\n• 'wordt warmer' → 'warmt op'.\n• 'uitstoot' → 'emissie'.\n• 'mensen' → 'menselijke activiteit'.\n• 'verbranden' → 'gebruiken voor energie'.\n• 'sterven uit' → 'verdwijnen', 'gaan verloren'.\n\n**Wat WEGLATEN in samenvatting**:\n• **Details** *(specifieke getallen behalve hoofdfeit)*.\n• **Voorbeelden** *(illustraties)*.\n• **Anekdotes** *(persoonlijke verhalen)*.\n• **Herhalingen** *(zelfde idee 2x)*.\n• **Zijpaden** *(onderwerpen die niet bij hoofdthema horen)*.\n\n**Wat MEENEMEN**:\n• **Hoofdgedachte** *(in zin 1)*.\n• **3-5 belangrijkste argumenten of feiten**.\n• **Conclusie** van schrijver *(als duidelijk)*.\n\n**Veelgemaakte fouten**:\n\n**1. Te lang**:\n• Te dichtbij origineel.\n• Voorbeelden meegenomen.\n• Oplossing: opnieuw schrijven, korter.\n\n**2. Te kort**:\n• Hoofdgedachte gemist.\n• Belangrijke punten weggelaten.\n• Oplossing: cruciale punten toevoegen.\n\n**3. Letterlijk kopiëren**:\n• Cito ziet dat → punten-aftrek.\n• Oplossing: synonyms + andere zinsbouw.\n\n**4. Eigen mening toevoegen**:\n• Samenvatting = **neutraal**, niet jouw mening.\n• Oplossing: alleen wat schrijver zegt.\n\n**Cito-tip — terugloop-controle**:\nLees je samenvatting + check:\n• Snapt iemand die de tekst niet kent, het hoofdpunt?\n• Heb je geen voorbeelden? Geen herhalingen?\n• Klopt het woordenaantal?",
    checks: [
      {
        q: "Wat doe je met **voorbeelden** in samenvatting?",
        options: ["Weglaten", "Allemaal meenemen", "Letterlijk overnemen", "Eigen mening toevoegen"],
        answer: 0,
        wrongHints: [null, "Te lang.", "Plagiat.", "Niet neutraal."],
      },
      {
        q: "Hoeveel kernpunten ongeveer in samenvatting?",
        options: ["3-5", "10+", "1", "Alle alinea's"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Te veel."],
      },
      {
        q: "Wat is **plagiat** bij samenvatting?",
        options: ["Letterlijk overnemen uit tekst", "Eigen woorden", "Synoniemen gebruiken", "Korter maken"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — wat moet.", "Goed — synonyms helpt.", "Goed — samenvatten."],
      },
      {
        q: "Een samenvatting moet **neutraal** zijn — wat betekent dit?",
        options: ["Geen eigen mening", "Geen woorden", "Geen feiten", "Geen lengte"],
        answer: 0,
        wrongHints: [null, "Wel woorden.", "Wel feiten.", "Wel lengte (woordaantal)."],
      },
    ],
  },

  // STAP 5: Veelgemaakte fouten
  {
    title: "Veelgemaakte fouten — vermijden",
    explanation:
      "**Top-10 schrijf-fouten Nederlands**:\n\n**1. d / t / dt — werkwoordsvervoeging** *('t kofschip)*:\n• 'Hij wordt' *(stam + t)* niet 'hij word'.\n• 'Ik word' *(alleen stam, geen t)*.\n• Verleden: 'fietste' *(stam 'fiets' op 's' → 't kofschip → -te)*. Niet 'fietsde'.\n→ Zie pad **werkwoordsspelling-dt**.\n\n**2. ei / ij + au / ou**:\n• Geen regel — uit hoofd leren.\n• 'klein', 'meisje', 'reizen' = ei.\n• 'mijn', 'krijgen', 'tijd' = ij.\n• 'oude', 'kous', 'hou' = ou.\n• 'auto', 'paus' = au.\n→ Zie pad **spelling-ei-ij-au-ou**.\n\n**3. Hoofdletters**:\n• Aan begin zin: 'Het regent.'\n• Namen: 'Anna', 'De Vries'.\n• Plaatsen: 'Amsterdam', 'Nederland'.\n• Talen: 'Nederlands', 'Engels' *(in NL!)*.\n• **Géén** hoofdletter: maanden, dagen, seizoenen.\n\n**4. Komma's**:\n• Bij opsomming: 'appels, peren en bananen' *(geen komma vóór 'en')*.\n• Vóór 'maar' / 'omdat' / 'als': ', maar', ', omdat'.\n• Bij directe rede: 'Mama zei: \"Kom maar.\"' *(dubbele punt)*.\n\n**5. Voornaamwoorden**:\n• 'hun' = bezittelijk meervoud *(hun huis)*.\n• 'hen' = persoonlijk meervoud, na voorzetsel *(geef het aan hen)*.\n• 'zij' / 'ze' = onderwerp.\n• 'haar' / 'hem' = lijdend voorwerp.\n\n**6. Als / dan**:\n• **Vergelijken**: groter **dan** *(niet 'groter als')*.\n• **Tijd**: **als** ik thuiskom *(niet 'dan ik thuiskom')*.\n\n• 'Hij is groter **dan** ik.' ✓\n• 'Hij is groter **als** ik.' ✗ (informeel, niet op CSE)\n\n**7. Sinds / vanaf**:\n• **Sinds**: vanaf een **moment in verleden tot nu**.\n  - 'Ik woon hier sinds 2020.' (start: 2020 → tot nu)\n• **Vanaf**: vanaf een **specifiek moment** *(kan toekomst)*.\n  - 'Vanaf morgen ga ik sporten.'\n\n**8. Liggen / leggen**:\n• **Liggen** = positie *(intransitief)*: 'Het boek ligt op tafel.'\n• **Leggen** = actie *(transitief)*: 'Ik leg het boek op tafel.'\n\n• 'Ik lig het boek neer' ✗.\n• 'Ik leg het boek neer' ✓.\n\n**9. Werkwoorden niet bij elkaar in zin**:\nNederlandse hoofdzin: SVO *(subject-verb-object)*.\nNederlandse bijzin: SOV *(subject-object-verb — werkwoord achteraan)*.\n\nBijzin met 'omdat': '... omdat ik morgen ga.' *(werkwoord eind)*.\nNiet: '... omdat ik ga morgen.'\n\n**10. Spreektaal vs schrijftaal**:\n• 'meneer' / 'mevrouw' — niet 'pa' / 'ma' in formele brief.\n• Volledige zinnen — geen afbreken.\n• Niet: 'Heb je m'n boek?'. Wel: 'Heb je mijn boek?'.\n\n**Bonus: dezelfde/dezelfde verschil**:\n• **Dezelfde** = de + zelfde *(de-woord enkelvoud)*: dezelfde fiets.\n• **Hetzelfde** = het + zelfde *(het-woord enkelvoud)*: hetzelfde boek.\n• **Dezelfde** ook bij meervoud: dezelfde boeken.\n\n**Cito-tip**:\nMaak een **eindcheck** op:\n• d/t-fouten.\n• Hoofdletters.\n• Komma's vóór 'maar' / 'omdat'.\n• 'als' vs 'dan' bij vergelijken.",
    checks: [
      {
        q: "**Hij wordt** of **hij word**?",
        options: ["Hij wordt (stam + t)", "Hij word", "Beide goed", "Hij worden"],
        answer: 0,
        wrongHints: [null, "Mist t.", "Wel verschil.", "Plural fout."],
      },
      {
        q: "**Groter dan ik** of **groter als ik**?",
        options: ["Groter dan ik (vergelijken)", "Groter als ik", "Beide goed", "Geen van beide"],
        answer: 0,
        wrongHints: [null, "Informeel/fout.", "Standaard taal: 'dan'.", "Wel — 'dan'."],
      },
      {
        q: "Verschil **liggen** en **leggen**?",
        options: ["Liggen = positie, leggen = actie", "Geen verschil", "Beide goed", "Liggen voor mensen"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Niet uitwisselbaar.", "Niet."],
      },
      {
        q: "**Sinds** of **vanaf** 2020?",
        options: ["Sinds (begin tot nu)", "Vanaf", "Beide", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Vanaf is voor losse start-moment.", "Klein verschil.", "Wel verschil."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — schrijfvaardigheid mix",
    explanation:
      "Mix-toets in CSE-stijl. Door elkaar: formeel, betoog, verslag, samenvatten, fouten.\n\nVeel succes!",
    checks: [
      {
        q: "**Formele aanhef** (naam onbekend)?",
        options: ["Geachte heer/mevrouw,", "Hoi!", "Lieve familie,", "Beste vriend,"],
        answer: 0,
        wrongHints: [null, "Informeel.", "Persoonlijk.", "Informeel."],
      },
      {
        q: "**Hoogachtend** — hoe formeel?",
        options: ["Zeer formeel", "Informeel", "Persoonlijk", "Slang"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Welk signaalwoord = **conclusie**?",
        options: ["Kortom", "Ten eerste", "Echter", "Zoals"],
        answer: 0,
        wrongHints: [null, "Eerste argument.", "Tegenstelling.", "Voorbeeld."],
      },
      {
        q: "**Plagiat** in samenvatting = wat?",
        options: ["Letterlijk overnemen", "Eigen woorden", "Korter maken", "Synoniemen"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel doel.", "Goed — synonyms."],
      },
      {
        q: "**Ik fietste** of **ik fietsde**?",
        options: ["Ik fietste ('t kofschip)", "Ik fietsde", "Beide", "Ik fiets"],
        answer: 0,
        wrongHints: [null, "Verkeerde uitgang.", "1 is fout.", "Tegenwoordige tijd."],
      },
      {
        q: "Welk **perspectief** is *'Tom liep door de straat. Hij was moe.'*?",
        options: ["Hij/zij-perspectief (personaal)", "Ik-perspectief", "Alwetend", "Geen"],
        answer: 0,
        wrongHints: [null, "Niet 'ik'.", "Geen meerdere personages-inzicht.", "Wel iets."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cseSchrijfvaardigheidNederlands = {
  id: "cse-schrijfvaardigheid-nederlands",
  title: "CSE Nederlands — schrijfvaardigheid (klas 3-4)",
  emoji: "✉️",
  level: "klas3-4",
  subject: "taal",
  referentieNiveau: "3F",
  sloThema: "Nederlands — schrijfvaardigheid CSE",
  prerequisites: [
    { id: "cse-leesvaardigheid-nederlands", title: "CSE Nederlands leesvaardigheid", niveau: "3F" },
    { id: "werkwoordsspelling-dt", title: "Werkwoordsspelling d/t", niveau: "2F" },
  ],
  intro:
    "CSE Nederlands schrijfvaardigheid voor klas 3-4 — formele brief (Geachte/Hoogachtend), betoog (stelling+3 argumenten+tegenwerping+slot), verslag + verhaal (perspectief, tijdgebruik), samenvatten (synoniemen, kernpunten), top-10 fouten (d/t, als/dan, liggen/leggen). ~15 min.",
  triggerKeywords: [
    "nederlands schrijfvaardigheid", "CSE nederlands schrijven",
    "formele brief", "betoog", "verslag",
    "Geachte heer", "Hoogachtend",
    "als dan", "liggen leggen",
  ],
  chapters,
  steps,
};

export default cseSchrijfvaardigheidNederlands;
