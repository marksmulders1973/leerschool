// Leerpad: Werkwoordsvervoeging Duits — klas 1-2.
// Onderdeel Duits grammatica. Referentieniveau 2F.
// 6 stappen met uitlegPad. Sluit op naamvallen-duits.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  pres: "#80cbc4",
  prat: "#ffd54f",
  perf: "#ff8a65",
  highlight: "#42a5f5",
};

const stepEmojis = ["📝", "1️⃣", "⚡", "⏪", "✅", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een werkwoord?", emoji: "📝", from: 0, to: 0 },
  { letter: "B", title: "Tegenwoordige tijd", emoji: "1️⃣", from: 1, to: 1 },
  { letter: "C", title: "Onregelmatige werkwoorden", emoji: "⚡", from: 2, to: 2 },
  { letter: "D", title: "Verleden tijd (Präteritum)", emoji: "⏪", from: 3, to: 3 },
  { letter: "E", title: "Voltooid (Perfekt)", emoji: "✅", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function vervoegingTabelSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Vervoeging 'gehen' (gaan) — tegenwoordige tijd</text>

<line x1="40" y1="42" x2="280" y2="42" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="50" y="58" fill="${COLORS.pres}" font-size="12" font-family="Arial" font-weight="bold">ich</text>
<text x="200" y="58" fill="${COLORS.text}" font-size="12" font-family="Courier New, monospace">gehe</text>

<text x="50" y="80" fill="${COLORS.pres}" font-size="12" font-family="Arial" font-weight="bold">du</text>
<text x="200" y="80" fill="${COLORS.text}" font-size="12" font-family="Courier New, monospace">gehst</text>

<text x="50" y="102" fill="${COLORS.pres}" font-size="12" font-family="Arial" font-weight="bold">er/sie/es</text>
<text x="200" y="102" fill="${COLORS.text}" font-size="12" font-family="Courier New, monospace">geht</text>

<text x="50" y="124" fill="${COLORS.pres}" font-size="12" font-family="Arial" font-weight="bold">wir</text>
<text x="200" y="124" fill="${COLORS.text}" font-size="12" font-family="Courier New, monospace">gehen</text>

<text x="50" y="146" fill="${COLORS.pres}" font-size="12" font-family="Arial" font-weight="bold">ihr</text>
<text x="200" y="146" fill="${COLORS.text}" font-size="12" font-family="Courier New, monospace">geht</text>

<text x="50" y="168" fill="${COLORS.pres}" font-size="12" font-family="Arial" font-weight="bold">sie/Sie</text>
<text x="200" y="168" fill="${COLORS.text}" font-size="12" font-family="Courier New, monospace">gehen</text>
</svg>`;
}

const steps = [
  // STAP 1: Werkwoorden basis
  {
    title: "Wat is een werkwoord?",
    explanation:
      "Een **werkwoord** beschrijft een **handeling** of **toestand**. In Duits noem je dit **das Verb**.\n\n**Vorm**:\nEen Duits werkwoord eindigt **altijd** op **-en** of **-n** in de infinitief *(de basisvorm)*:\n• **gehen** *(gaan)*\n• **spielen** *(spelen)*\n• **lernen** *(leren)*\n• **trinken** *(drinken)*\n• **wandern** *(wandelen)*\n• **lächeln** *(lachen)*\n\n**Stam + uitgang**:\nElke werkwoord-vorm bestaat uit **stam + uitgang**.\n• gehen → **geh** (stam) + **en** (uitgang).\n• Bij vervoeging blijft stam meestal hetzelfde, uitgang verandert.\n\n**Persoonlijke voornaamwoorden** *(uit het hoofd!)*:\n• **ich** = ik\n• **du** = jij\n• **er** = hij\n• **sie** = zij (vrouw, enkelvoud)\n• **es** = het\n• **wir** = wij\n• **ihr** = jullie\n• **sie** = zij (meervoud)\n• **Sie** = u (formeel, hoofdletter)\n\n**Verschil 'sie' en 'Sie'**:\n• **klein 'sie'** = zij (vrouw enkelvoud) of zij (meervoud).\n• **groot 'Sie'** = u (formeel).\n\n**Hoofdletters bij Duits — extra opvallend**:\nIn Duits krijgen **alle zelfstandige naamwoorden** hoofdletter:\n• der **Hund** (de hond)\n• die **Katze** (de kat)\n• das **Buch** (het boek)\n• die **Schule** (de school)\n\nDit is anders dan in Nederlands of Engels.\n\n**Tijden in Duits** *(net als NL)*:\n• **Präsens** (tegenwoordige tijd): ich gehe.\n• **Präteritum** (verleden tijd): ich ging.\n• **Perfekt** (voltooid): ich bin gegangen.\n• **Plusquamperfekt** (voorvoltooid): ich war gegangen.\n• **Futur** (toekomst): ich werde gehen.\n\nVoor klas 1-2: vooral Präsens + Perfekt + Präteritum.\n\n**Cito-vraag**:\n*'Wat is de infinitief van 'gaan' in Duits?'* → **gehen**.\n*'Welk persoonlijk voornaamwoord betekent jij?'* → **du**.",
    svg: vervoegingTabelSvg(),
    checks: [
      {
        q: "Wat betekent **'gehen'**?",
        options: ["gaan", "geven", "blijven", "stoppen"],
        answer: 0,
        wrongHints: [null, "Dat is 'geben'.", "Dat is 'bleiben'.", "Dat is 'stoppen'."],
      },
      {
        q: "Welke Duitse woord betekent **'jij'**?",
        options: ["du", "ich", "er", "Sie"],
        answer: 0,
        wrongHints: [null, "Ik.", "Hij.", "Formeel u."],
      },
      {
        q: "Welk verschil tussen **'sie'** en **'Sie'**?",
        options: ["sie = zij, Sie = u (formeel)", "Geen verschil", "Verkeerd gespeld", "sie = man, Sie = vrouw"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Beide correct.", "Niet."],
      },
      {
        q: "Wat krijgt in Duits **altijd hoofdletter**?",
        options: ["Zelfstandige naamwoorden", "Werkwoorden", "Bijvoeglijke naamwoorden", "Voornaamwoorden"],
        answer: 0,
        wrongHints: [null, "Niet automatisch.", "Niet automatisch.", "Soms (Sie = u)."],
      },
    ],
  },

  // STAP 2: Präsens
  {
    title: "Tegenwoordige tijd (Präsens)",
    explanation:
      "**Präsens** = tegenwoordige tijd.\n\n**Regelmatige werkwoorden** — formule: **stam + uitgang**.\n\nVoorbeeld: **gehen** (gaan) → stam = **geh**.\n\n| Persoon | Uitgang | Vorm |\n|---|---|---|\n| ich | **-e** | ich geh**e** |\n| du | **-st** | du geh**st** |\n| er/sie/es | **-t** | er geh**t** |\n| wir | **-en** | wir geh**en** |\n| ihr | **-t** | ihr geh**t** |\n| sie/Sie | **-en** | sie geh**en** |\n\n**Andere voorbeelden** met dezelfde uitgangen:\n\n**spielen** (spelen):\n• ich spiele, du spielst, er spielt, wir spielen, ihr spielt, sie spielen.\n\n**lernen** (leren):\n• ich lerne, du lernst, er lernt, wir lernen, ihr lernt, sie lernen.\n\n**trinken** (drinken):\n• ich trinke, du trinkst, er trinkt, wir trinken, ihr trinkt, sie trinken.\n\n**Bijzondere stam-eindigingen**:\n\n**Stam eindigt op -t, -d, -m, -n** → tussen-e voor uitspraak:\n• **arbeiten** (werken): du arbeit**est**, er arbeit**et**, ihr arbeit**et**.\n• **finden** (vinden): du find**est**, er find**et**, ihr find**et**.\n• **öffnen** (openen): du öffn**est**, er öffn**et**.\n\nReden: anders niet uit te spreken ('arbeitst' is te moeilijk).\n\n**Stam eindigt op -s, -ß, -z, -tz** → **du** krijgt alleen -t (geen -st):\n• **heißen** (heten): du heißt *(niet heißst)*.\n• **tanzen** (dansen): du tanzt.\n• **sitzen** (zitten): du sitzt.\n\n**Cito-vragen**:\n*'Vervoeg 'spielen' voor 'er'.'* → er spielt.\n*'Vervoeg 'lernen' voor 'wir'.'* → wir lernen.\n*'Vervoeg 'arbeiten' voor 'du'.'* → du arbeitest.\n\n**Tip — onthoud de patroon**:\n• **ich**: -e\n• **du**: -st\n• **er/sie/es**: -t\n• **wir/sie/Sie**: -en (= infinitief)\n• **ihr**: -t (zelfde als er, maar voor meervoud)\n\n**Bekende werkwoorden vertaling**:\n• machen — maken/doen.\n• sagen — zeggen.\n• kommen — komen.\n• laufen — lopen/rennen.\n• stehen — staan.\n• sehen — zien.\n• kaufen — kopen.\n• arbeiten — werken.\n• wohnen — wonen.\n• reisen — reizen.",
    checks: [
      {
        q: "**ich + spielen** → ?",
        options: ["ich spiele", "ich spielst", "ich spielt", "ich spielen"],
        answer: 0,
        wrongHints: [null, "Voor 'du'.", "Voor 'er/sie/es'.", "Voor 'wir/sie/Sie'."],
      },
      {
        q: "**er + lernen** → ?",
        options: ["er lernt", "er lerne", "er lernst", "er lernen"],
        answer: 0,
        wrongHints: [null, "Voor 'ich'.", "Voor 'du'.", "Voor 'wir'."],
      },
      {
        q: "**wir + gehen** → ?",
        options: ["wir gehen", "wir gehe", "wir geht", "wir gehst"],
        answer: 0,
        wrongHints: [null, "Voor ich.", "Voor er/ihr.", "Voor du."],
      },
      {
        q: "**du + arbeiten** → ?",
        options: ["du arbeitest", "du arbeitst", "du arbeite", "du arbeitt"],
        answer: 0,
        wrongHints: [null, "Niet uit te spreken.", "Voor ich.", "Niet correct."],
        uitlegPad: {
          stappen: [
            { titel: "Stam eindigt op -t/-d", tekst: "Bij werkwoorden waarvan de stam op -t, -d, -m, -n eindigt, voeg je een tussen-e in." },
            { titel: "arbeiten — stam arbeit", tekst: "arbeit eindigt op -t. Bij 'du': normaal -st → 'arbeitst' lastig uit te spreken. Daarom: -est = du arbeitest." },
          ],
          woorden: [{ woord: "tussen-e", uitleg: "Een -e tussen stam en uitgang om uitspraak makkelijker te maken." }],
          theorie: "Stam op -t/-d/-m/-n + uitspraak-problemen → tussen-e (-est i.p.v. -st, -et i.p.v. -t).",
          voorbeelden: [{ type: "stap", tekst: "finden → du findest. öffnen → er öffnet." }],
          basiskennis: [{ onderwerp: "Voor uitspraak", uitleg: "Anders zou je 2 medeklinkers achter elkaar krijgen die geen vloeiende uitspraak geven." }],
          niveaus: {
            basis: "du arbeitest. A.",
            simpeler: "Werkwoord arbeiten. Stam = arbeit (eindigt op -t). Bij du komt normaal -st erbij maar 'arbeitst' is te moeilijk. Daarom tussen-e: du arbeitest. = A.",
            nogSimpeler: "arbeitest = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Onregelmatige
  {
    title: "Onregelmatige werkwoorden — sein, haben, werden",
    explanation:
      "Sommige veel-gebruikte werkwoorden zijn **onregelmatig** — uit het hoofd leren!\n\n**De 3 belangrijkste**:\n\n**1. sein** (zijn) — totaal onregelmatig:\n| ich | bin |\n| du | bist |\n| er/sie/es | ist |\n| wir | sind |\n| ihr | seid |\n| sie/Sie | sind |\n\nVoorbeelden:\n• Ich **bin** zwölf Jahre alt.\n• Du **bist** mein Freund.\n• Wir **sind** Schüler.\n\n**2. haben** (hebben):\n| ich | habe |\n| du | hast |\n| er/sie/es | hat |\n| wir | haben |\n| ihr | habt |\n| sie/Sie | haben |\n\nVoorbeelden:\n• Ich **habe** einen Hund.\n• Du **hast** Hunger.\n• Sie **hat** ein Buch.\n\n**3. werden** (worden):\n| ich | werde |\n| du | wirst |\n| er/sie/es | wird |\n| wir | werden |\n| ihr | werdet |\n| sie/Sie | werden |\n\nVoorbeelden:\n• Ich **werde** Lehrer.\n• Es **wird** kalt.\n\n**Andere onregelmatige met klinker-verandering** *(zogenoemde sterke werkwoorden)*:\nDe stamklinker verandert bij **du** en **er/sie/es**.\n\n**a → ä** *(umlaut)*:\n• **fahren** (rijden): ich fahre, du **fährst**, er **fährt**.\n• **schlafen** (slapen): du **schläfst**, er **schläft**.\n• **laufen** (lopen): du **läufst**, er **läuft**.\n\n**e → i**:\n• **geben** (geven): ich gebe, du **gibst**, er **gibt**.\n• **nehmen** (nemen): du **nimmst**, er **nimmt**.\n• **sprechen** (spreken): du **sprichst**, er **spricht**.\n• **essen** (eten): du **isst**, er **isst**.\n• **helfen** (helpen): du **hilfst**, er **hilft**.\n\n**e → ie**:\n• **sehen** (zien): du **siehst**, er **sieht**.\n• **lesen** (lezen): du **liest**, er **liest**.\n\n**Cito-vraag**:\n*'Vervoeg 'sein' voor 'wir'.'* → wir sind.\n*'Vervoeg 'haben' voor 'du'.'* → du hast.\n*'Vervoeg 'fahren' voor 'er'.'* → er fährt.\n\n**Tip — meeste onregelmatige zijn alledaagse werkwoorden**:\nDie kom je dagelijks tegen, dus oefenen helpt veel.",
    checks: [
      {
        q: "**ich + sein** → ?",
        options: ["ich bin", "ich ist", "ich sein", "ich bist"],
        answer: 0,
        wrongHints: [null, "Voor er/sie/es.", "Niet vervoegd.", "Voor du."],
      },
      {
        q: "**du + haben** → ?",
        options: ["du hast", "du hat", "du habst", "du habt"],
        answer: 0,
        wrongHints: [null, "Voor er.", "Niet correct.", "Voor ihr."],
      },
      {
        q: "**er + fahren** → ?",
        options: ["er fährt", "er fahrt", "er fährst", "er fahren"],
        answer: 0,
        wrongHints: [null, "Mist umlaut.", "Voor du.", "Voor wir."],
      },
      {
        q: "**du + sehen** → ?",
        options: ["du siehst", "du sehst", "du sieht", "du seht"],
        answer: 0,
        wrongHints: [null, "Mist verandering.", "Voor er.", "Voor ihr."],
      },
    ],
  },

  // STAP 4: Präteritum
  {
    title: "Verleden tijd — Präteritum",
    explanation:
      "**Präteritum** = verleden tijd. Gebruikt vooral in **schrijftaal** (boeken, kranten, verhalen).\n\n**Regelmatige werkwoorden** — formule: **stam + -te + uitgang**.\n\nVoorbeeld: **spielen** (spelen):\n| ich | spiel**te** |\n| du | spiel**test** |\n| er/sie/es | spiel**te** |\n| wir | spiel**ten** |\n| ihr | spiel**tet** |\n| sie/Sie | spiel**ten** |\n\nAndere voorbeelden:\n• **lernen**: ich lernte, du lerntest, er lernte.\n• **machen**: ich machte, er machte.\n• **wohnen**: ich wohnte, wir wohnten.\n\n**Stam eindigt op -t/-d** → tussen-e *(-tete)*:\n• **arbeiten**: ich arbeit**ete**, du arbeit**etest**.\n• **finden**: ich fand *(onregelmatig)* — let op.\n\n**Onregelmatige werkwoorden** — stamklinker verandert.\n\n**Belangrijkste onregelmatige Präteritum** *(top 20 uit het hoofd)*:\n\n| Infinitief | Präteritum |\n|---|---|\n| sein | war (ich war) |\n| haben | hatte (ich hatte) |\n| werden | wurde (ich wurde) |\n| gehen | ging |\n| kommen | kam |\n| sehen | sah |\n| geben | gab |\n| nehmen | nahm |\n| fahren | fuhr |\n| schlafen | schlief |\n| lesen | las |\n| schreiben | schrieb |\n| sprechen | sprach |\n| essen | aß |\n| trinken | trank |\n| finden | fand |\n| stehen | stand |\n| sitzen | saß |\n| laufen | lief |\n| bleiben | blieb |\n\n**Persoonsvorm bij onregelmatige Präteritum**:\nDeze krijgen **geen extra uitgang** bij ich + er/sie/es. Wel bij du en ihr.\n\n**ging**:\n| ich | ging |\n| du | gingst |\n| er/sie/es | ging |\n| wir | gingen |\n| ihr | gingt |\n| sie/Sie | gingen |\n\n**war**:\n| ich | war |\n| du | warst |\n| er/sie/es | war |\n| wir | waren |\n| ihr | wart |\n| sie/Sie | waren |\n\n**Voorbeeldzinnen**:\n• Gestern **ging** ich nach Hause. *(Gisteren ging ik naar huis.)*\n• Ich **war** in Berlin. *(Ik was in Berlijn.)*\n• Wir **hatten** Spaß. *(Wij hadden plezier.)*\n\n**Cito-vraag**:\n*'Wat is Präteritum van 'gehen'?'* → ging.\n*'Wat is Präteritum van 'sein' (ich)?'* → war.\n*'Wat is Präteritum van 'haben' (er)?'* → hatte.\n\n**Tip — verschil met spreektaal**:\nIn dagelijks spreken gebruikt men meestal **Perfekt** (zie volgende stap), niet Präteritum. Maar Präteritum komt altijd voor in boeken.",
    checks: [
      {
        q: "Präteritum van **'sein' (ich)** = ?",
        options: ["war", "bin", "habe", "ging"],
        answer: 0,
        wrongHints: [null, "Tegenwoordige tijd.", "Van haben.", "Van gehen."],
      },
      {
        q: "Präteritum van **'haben' (er)** = ?",
        options: ["hatte", "hat", "habe", "hattet"],
        answer: 0,
        wrongHints: [null, "Tegenwoordig.", "Voor ich.", "Voor ihr."],
      },
      {
        q: "Präteritum van **'gehen' (wir)** = ?",
        options: ["gingen", "ging", "gehen", "gingt"],
        answer: 0,
        wrongHints: [null, "Voor ich/er.", "Tegenwoordig.", "Voor ihr."],
      },
      {
        q: "Präteritum van **'spielen' (ich)** = ?",
        options: ["spielte", "spiele", "gespielt", "spielen"],
        answer: 0,
        wrongHints: [null, "Tegenwoordig.", "Voltooid deelwoord.", "Infinitief."],
      },
    ],
  },

  // STAP 5: Perfekt
  {
    title: "Voltooid — Perfekt",
    explanation:
      "**Perfekt** = voltooid tijd. **Hoofdvorm in spreektaal!**\n\n**Formule**: **hulpwerkwoord (haben of sein) + voltooid deelwoord (Partizip II)**.\n\n**Hulpwerkwoord kiezen**:\n• **haben** voor de **meeste** werkwoorden.\n• **sein** voor werkwoorden van **beweging** *(gehen, kommen, fahren, fliegen)* en **toestand-verandering** *(werden, einschlafen, sterben)*.\n\n**Voltooid deelwoord — regelmatig**:\nFormule: **ge- + stam + -t**.\n• spielen → **gespielt**.\n• lernen → **gelernt**.\n• machen → **gemacht**.\n• kaufen → **gekauft**.\n• arbeiten → **gearbeitet** *(tussen-e)*.\n\n**Voltooid deelwoord — onregelmatig**:\nFormule: **ge- + stam (verandert) + -en**.\n\nBekendste onregelmatige *(uit het hoofd!)*:\n\n| Infinitief | Partizip II | Hulpw. |\n|---|---|---|\n| sein | gewesen | sein |\n| haben | gehabt | haben |\n| werden | geworden | sein |\n| gehen | gegangen | sein |\n| kommen | gekommen | sein |\n| sehen | gesehen | haben |\n| geben | gegeben | haben |\n| nehmen | genommen | haben |\n| fahren | gefahren | sein |\n| schlafen | geschlafen | haben |\n| lesen | gelesen | haben |\n| schreiben | geschrieben | haben |\n| essen | gegessen | haben |\n| trinken | getrunken | haben |\n| finden | gefunden | haben |\n| sprechen | gesprochen | haben |\n\n**Voorbeeldzinnen**:\n• Ich **habe** Fußball **gespielt**. *(Ik heb voetbal gespeeld.)*\n• Du **bist** nach Hause **gegangen**. *(Jij bent naar huis gegaan.)*\n• Wir **haben** ein Buch **gelesen**. *(Wij hebben een boek gelezen.)*\n• Sie **ist** Lehrerin **geworden**. *(Zij is leraar geworden.)*\n\n**Volgorde in zin**:\n• Hulpwerkwoord op **2e plek**.\n• Partizip II **aan het eind** van de zin.\n• Bv. *'Ich **habe** gestern Fußball **gespielt**.'*\n\n**Trennbare werkwoorden** *(scheidbare)*:\n• aufstehen → aufgestanden *(ge tussen zelfgemaakt-deel en stam)*.\n• einkaufen → eingekauft.\n• fernsehen → ferngesehen.\n\n**Cito-vraag**:\n*'Welk hulpwerkwoord bij 'gehen' in Perfekt?'* → **sein** (beweging).\n*'Welk hulpwerkwoord bij 'lesen'?'* → **haben** (geen beweging).\n*'Partizip II van 'spielen'?'* → **gespielt**.\n*'Partizip II van 'gehen'?'* → **gegangen**.\n\n**Tip — kies hulpwerkwoord**:\n• Beweging *(ergens naartoe)*? → **sein**.\n• Toestand-verandering *(worden, ontwaken)*? → **sein**.\n• Verder → **haben**.",
    checks: [
      {
        q: "Welk hulpwerkwoord bij **'gehen' in Perfekt**?",
        options: ["sein (beweging)", "haben", "werden", "machen"],
        answer: 0,
        wrongHints: [null, "Niet voor beweging.", "Geen hulpwerkwoord hier.", "Geen hulpwerkwoord."],
      },
      {
        q: "Partizip II van **'spielen'** = ?",
        options: ["gespielt", "gespielen", "spielen", "spielte"],
        answer: 0,
        wrongHints: [null, "Niet -en.", "Infinitief.", "Präteritum."],
      },
      {
        q: "**'Ich ___ gestern Fußball ___ .'** (Perfekt 'spielen')",
        options: ["habe ... gespielt", "bin ... gespielt", "habe ... spielen", "bin ... gegangen"],
        answer: 0,
        wrongHints: [null, "Spielen is haben, niet sein.", "Niet Partizip II.", "Verkeerd werkwoord."],
      },
      {
        q: "Partizip II van **'gehen'** = ?",
        options: ["gegangen", "gegehen", "gehen", "ging"],
        answer: 0,
        wrongHints: [null, "Spelling fout.", "Infinitief.", "Präteritum."],
        uitlegPad: {
          stappen: [
            { titel: "Onregelmatig", tekst: "gehen is een sterk werkwoord. Stamklinker verandert + voltooid deelwoord eindigt op -en (niet -t)." },
            { titel: "Vorm", tekst: "ge- + gang + -en = gegangen. Hulpwerkwoord = sein (omdat 'gaan' beweging is)." },
          ],
          woorden: [{ woord: "Partizip II", uitleg: "Duitse term voor voltooid deelwoord." }],
          theorie: "Onregelmatige werkwoorden volgen vaste lijst — uit hoofd leren.",
          voorbeelden: [{ type: "stap", tekst: "Ich bin nach Hause gegangen. = Ik ben naar huis gegaan." }],
          basiskennis: [{ onderwerp: "Top 20 onregelmatige", uitleg: "Wie deze 20 kent, kan al heel veel in Duits." }],
          niveaus: {
            basis: "gegangen. A.",
            simpeler: "gehen is onregelmatig (sterk). Voltooid deelwoord = gegangen. In zin met 'sein' als hulpwerkwoord. = A.",
            nogSimpeler: "gegangen = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — Duits werkwoorden mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: Präsens, Präteritum, Perfekt.\n\nVeel succes!",
    checks: [
      {
        q: "**du + machen** → ?",
        options: ["du machst", "du mache", "du macht", "du machen"],
        answer: 0,
        wrongHints: [null, "Voor ich.", "Voor er.", "Voor wir."],
      },
      {
        q: "**er + sein** → ?",
        options: ["er ist", "er bist", "er bin", "er sind"],
        answer: 0,
        wrongHints: [null, "Voor du.", "Voor ich.", "Voor wir/sie."],
      },
      {
        q: "Präteritum van **'gehen' (ich)** = ?",
        options: ["ich ging", "ich gehe", "ich gegangen", "ich gehst"],
        answer: 0,
        wrongHints: [null, "Tegenwoordig.", "Partizip II.", "Voor du."],
      },
      {
        q: "Partizip II van **'haben'** = ?",
        options: ["gehabt", "gehaben", "haben", "hatte"],
        answer: 0,
        wrongHints: [null, "Niet -en.", "Infinitief.", "Präteritum."],
      },
      {
        q: "**'Wir ___ ins Kino ___ .'** Perfekt 'gehen'.",
        options: ["sind ... gegangen", "haben ... gegangen", "sind ... gehen", "war ... gegangen"],
        answer: 0,
        wrongHints: [null, "Niet haben.", "Niet infinitief.", "Niet Präteritum + Partizip mix."],
      },
      {
        q: "**er + lesen** in Präsens → ?",
        options: ["er liest", "er lest", "er liesst", "er lesen"],
        answer: 0,
        wrongHints: [null, "Mist klinker-verandering.", "Spelling fout.", "Infinitief."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werkwoordsvervoegingDuits = {
  id: "werkwoordsvervoeging-duits",
  title: "Werkwoorden Duits (klas 1-2)",
  emoji: "📝",
  level: "klas1-2",
  subject: "duits",
  referentieNiveau: "2F",
  sloThema: "Duits — werkwoordsvervoeging",
  prerequisites: [
    { id: "naamvallen-duits", title: "Naamvallen Duits", niveau: "2F" },
  ],
  intro:
    "Werkwoorden Duits voor klas 1-2 — infinitief op -en, persoonlijke voornaamwoorden (ich/du/er/sie/wir/ihr/sie/Sie), Präsens regelmatig + onregelmatig (sein/haben/werden + sterke werkwoorden a→ä, e→i, e→ie), Präteritum (war/hatte/ging), Perfekt (haben/sein + Partizip II). ~15 min.",
  triggerKeywords: [
    "duits werkwoord", "werkwoordsvervoeging duits",
    "präsens", "präteritum", "perfekt",
    "sein", "haben", "werden",
    "ich bin", "du hast", "er ist",
    "Partizip II", "gegangen", "gespielt",
  ],
  chapters,
  steps,
};

export default werkwoordsvervoegingDuits;
