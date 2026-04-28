// Leerpad: Tekstanalyse — Nederlands havo 4
// 14 stappen in 5 hoofdstukken (A t/m E).
// Niveau: havo 4-5, examenstof leesvaardigheid (tekstbegrip).
// Focus: tekstdoel/structuur/alinea-analyse — geen overlap met argumentatieleer
// (= argumentschema's + drogredenen) of schrijfvaardigheid (= produceren).

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  blue: "#5b86b8",
  paars: "#a060ff",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = [
  "🎯", "👥", "💡",                 // A. Tekst doorgronden
  "❓", "❔", "🗂️",                 // B. Structuur ontleden
  "🧱", "🔗", "🚦",                 // C. Alinea-niveau
  "⚖️", "📚", "🔍",                 // D. Inhoud beoordelen
  "🎓", "🏆",                       // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Tekst doorgronden", emoji: "🎯", from: 0, to: 2 },
  { letter: "B", title: "Structuur ontleden", emoji: "🗂️", from: 3, to: 5 },
  { letter: "C", title: "Alinea-niveau", emoji: "🔗", from: 6, to: 8 },
  { letter: "D", title: "Inhoud beoordelen", emoji: "🔍", from: 9, to: 11 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 12, to: 13 },
];

const steps = [
  // ─── A. Tekst doorgronden ─────────────────────────────
  {
    title: "Wat is het tekstdoel?",
    explanation: "Iedere tekst heeft een **doel**. Op het examen wordt vrijwel altijd gevraagd: *\"Wat is het hoofddoel van deze tekst?\"* Vier hoofddoelen die regelmatig terugkomen:\n\n**1. Overtuigen** — schrijver wil dat lezer iets denkt of doet (= betoog).\n**2. Informeren** — schrijver wil lezer iets nieuws vertellen (= bericht, nieuws).\n**3. Uitleggen** — schrijver maakt iets duidelijk (= uiteenzetting, achtergrondartikel).\n**4. Beschouwen** — schrijver legt meerdere kanten van iets bloot (= beschouwing, opiniestuk).\n\n**Vijfde, minder vaak op havo-examen**: **onderhouden / amuseren** (= column, satire, verhaal). Komt op vwo soms terug.\n\n**Hoe vind je het doel?** Kijk naar:\n• De **toon**: subjectief & geëngageerd → overtuigen. Neutraal-feitelijk → informeren/uitleggen. Afwegend → beschouwen.\n• De **slotzin**: een advies of oproep → overtuigen. Een afweging → beschouwen. Een samenvatting → uiteenzetting.\n• Het **soort bron**: krant-bericht → informeren. Opiniepagina → overtuigen of beschouwen. Wetenschapskatern → uiteenzetting.\n\n**Voorbeelden**:\n• \"De maximumsnelheid moet omlaag.\" → overtuigen\n• \"Onderzoek toont dat 38% van havo-leerlingen te weinig slaapt.\" → informeren\n• \"Hoe werkt fotosynthese?\" → uitleggen\n• \"Voor en tegen van een verbod op vuurwerk.\" → beschouwen",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">vier hoofddoelen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">overtuigen</text>
<text x="135" y="78" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ subjectief, geëngageerd</text>
<text x="35" y="102" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">informeren</text>
<text x="135" y="102" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ feiten, nieuw, neutraal</text>
<text x="35" y="126" fill="${COLORS.blue}" font-size="12" font-family="Arial" font-weight="bold">uitleggen</text>
<text x="135" y="126" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ hoe werkt X (uiteenzetting)</text>
<text x="35" y="150" fill="${COLORS.paars}" font-size="12" font-family="Arial" font-weight="bold">beschouwen</text>
<text x="135" y="150" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ kanten naast elkaar</text>
<text x="150" y="176" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kijk naar toon, slotzin, soort bron</text>
</svg>`,
    checks: [
      {
        q: "*Een artikel in de wetenschapskatern legt stap voor stap uit hoe een hybride-motor werkt, zonder mening of voorkeur.* — Wat is het hoofddoel?",
        options: ["Uitleggen", "Overtuigen", "Beschouwen", "Onderhouden"],
        answer: 0,
        wrongHints: [
          null,
          "Overtuigen vereist een mening of standpunt. Hier is geen voorkeur.",
          "Beschouwen zet meerdere standpunten naast elkaar. Hier wordt iets uitgelegd, niet afgewogen.",
          "Onderhouden zou bij een column of verhaal passen. Wetenschapskatern + neutraal = ander doel.",
        ],
      },
      {
        q: "*Een opiniestuk eindigt met: \"Het is hoog tijd dat de regering ingrijpt.\"* — Welk hoofddoel suggereert deze slotzin?",
        options: ["Overtuigen", "Informeren", "Beschouwen", "Uitleggen"],
        answer: 0,
        wrongHints: [
          null,
          "Een oproep tot actie is geen feitelijke informatie-overdracht. Welk doel past bij \"Het is hoog tijd dat...\"?",
          "Beschouwen zet kanten naast elkaar. Hier wordt juist een conclusie geforceerd: actie nu.",
          "Een uiteenzetting eindigt neutraal. Hier wordt aangedrongen op handelen — dat is andere intentie.",
        ],
      },
    ],
  },
  {
    title: "Wie is de doelgroep?",
    explanation: "De **doelgroep** is voor wie de tekst is geschreven. Je kunt 'm afleiden uit:\n\n**1. De bron** — waar staat de tekst?\n• *NRC, Volkskrant* → hoogopgeleide volwassenen\n• *AD, Telegraaf* → breed publiek volwassenen\n• *Quest, NWT* → geïnteresseerden in wetenschap (jongere lezers ook welkom)\n• Schoolkrant → leerlingen\n• Vakblad → professionals in dat vak\n\n**2. De toon en woordkeus**\n• Veel jargon zonder uitleg → vakgenoten\n• Begrippen worden uitgelegd → algemeen publiek\n• Spreektaal-elementen → jongeren\n• Formeel + lange zinnen → ouder of hoger opgeleid publiek\n\n**3. Wat de schrijver bekend veronderstelt**\nAls de schrijver schrijft \"zoals iedereen weet, vond de Slag bij Waterloo plaats in 1815\" — dan veronderstelt hij dat zijn lezers dat (kunnen) weten. Dat is een aanwijzing voor het opleidingsniveau.\n\n**Voorbeelden**:\n• Vol jargon over kernfusie zonder uitleg → vakblad voor natuurkundigen\n• \"De ionen in het plasma — dat zijn elektrisch geladen deeltjes — bewegen...\" → algemene wetenschapskatern, lezer hoeft geen voorkennis te hebben\n\n**Examenvraag**: \"Voor wie is deze tekst bedoeld?\" — kijk naar 1+2+3 samen, geef een passend antwoord (bv. \"hoger opgeleide volwassenen met interesse in wetenschap\").",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">doelgroep — drie aanwijzingen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">1. de bron</text>
<text x="125" y="78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(krant, vakblad, schoolblad)</text>
<text x="35" y="102" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">2. toon + jargon</text>
<text x="155" y="102" fill="${COLORS.muted}" font-size="11" font-family="Arial">(formeel ↔ informeel)</text>
<text x="35" y="126" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">3. veronderstelde voorkennis</text>
<text x="35" y="160" fill="${COLORS.text}" font-size="11" font-family="Arial">→ combineer alle drie voor een passend antwoord</text>
</svg>`,
    checks: [
      {
        q: "*Een tekst gebruikt veel medische vakjargon (\"contra-indicatie\", \"comorbiditeit\") zonder uitleg.* — Wie is waarschijnlijk de doelgroep?",
        options: [
          "Medisch geschoolde lezers (artsen, verpleegkundigen)",
          "Basisschoolleerlingen",
          "Algemeen publiek",
          "Patiënten zonder medische achtergrond",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vakjargon is voor basisschool veel te ingewikkeld. Voor wie is jargon zonder uitleg meestal bedoeld?",
          "Algemeen publiek krijgt meestal *uitleg* van vakwoorden. Hier worden ze als bekend verondersteld.",
          "Patiënten zonder achtergrond zouden uitleg krijgen. Vakjargon zonder uitleg duidt op een ander publiek.",
        ],
      },
    ],
  },
  {
    title: "De hoofdgedachte vinden",
    explanation: "De **hoofdgedachte** (ook: kernidee) is wat de schrijver in de hele tekst probeert te zeggen — samen te vatten in **één zin**. Examenvraag: *\"Wat is de hoofdgedachte van deze tekst?\"*\n\n**Drie technieken**:\n\n**1. Lees alleen de inleiding en het slot**\n• De inleiding kondigt de hoofdgedachte vaak aan.\n• Het slot herhaalt 'm in andere woorden.\n• Vergelijk: wat overlap is, dat is de kern.\n\n**2. Vat elke alinea in één zin samen**\n• Wat is het topic sentence van elke alinea?\n• Zet die zinnen op een rij. De rode draad daarin = hoofdgedachte.\n\n**3. Vraag jezelf**\n*\"Als ik dit artikel in één tweet zou samenvatten — wat zeg ik dan?\"* (max 280 tekens)\n\n**Voorbeeld**:\nTekst: *\"De maximumsnelheid moet omlaag. Lagere snelheden besparen CO2. Ze leiden tot minder verkeersdoden. De extra reistijd is verwaarloosbaar.\"*\n→ Hoofdgedachte: *\"De maximumsnelheid moet omlaag, want milieu en veiligheid winnen meer dan de minimale tijdverlies kost.\"*\n\n**Verschil met onderwerp**:\n• **Onderwerp** = waar de tekst over gaat (één woord/zinsdeel: *\"de maximumsnelheid\"*).\n• **Hoofdgedachte** = wat de schrijver erover **stelt** (volzin met standpunt of conclusie).\n\nVerwarrend: een examenvraag naar de hoofdgedachte vraagt om een **volledige zin** met een claim — niet een woord of thema.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">hoofdgedachte — 3 technieken</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="11" font-family="Arial">1. inleiding + slot vergelijken</text>
<text x="35" y="96" fill="${COLORS.text}" font-size="11" font-family="Arial">2. topic sentence per alinea op rij</text>
<text x="35" y="116" fill="${COLORS.text}" font-size="11" font-family="Arial">3. samenvatten als 1 tweet</text>
<line x1="30" y1="128" x2="270" y2="128" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="148" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">onderwerp = waar over</text>
<text x="35" y="166" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">hoofdgedachte = wat de schrijver stelt</text>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">examen vraagt altijd om een volzin</text>
</svg>`,
    checks: [
      {
        q: "*Een tekst gaat over schermtijd bij jongeren. Welke optie is de hoofdgedachte (niet alleen het onderwerp)?*",
        options: [
          "Te veel schermtijd schaadt de schoolprestaties van jongeren en moet daarom worden beperkt.",
          "Schermtijd bij jongeren.",
          "Smartphones.",
          "Onderzoek naar jongeren.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is alleen het onderwerp (waar de tekst over gaat). De hoofdgedachte bevat een claim of conclusie.",
          "Te kort en geen claim. Hoofdgedachte = volzin met wat de schrijver vindt.",
          "Te vaag. Welke optie geeft de boodschap van de schrijver?",
        ],
      },
    ],
  },

  // ─── B. Structuur ontleden ────────────────────────────
  {
    title: "Hoofdvraag van een tekst",
    explanation: "Veel teksten zijn opgebouwd rond een centrale **hoofdvraag** die de schrijver beantwoordt. Voorbeelden:\n\n• *\"Moet de maximumsnelheid omlaag?\"* (betoog) → schrijver beantwoordt met ja/nee + redenen.\n• *\"Hoe is de woningmarktcrisis ontstaan?\"* (uiteenzetting) → schrijver legt oorzaken uit.\n• *\"Is werken-tot-67 nog houdbaar?\"* (beschouwing) → schrijver weegt af.\n\n**Hoe vind je de hoofdvraag?**\n\n**Methode 1**: Soms staat de hoofdvraag **letterlijk** in de inleiding (vooral bij beschouwing en uiteenzetting).\n\n**Methode 2**: Vorm de hoofdvraag zelf op basis van de hoofdgedachte. Zet de hoofdgedachte om in een vraag.\n• Hoofdgedachte: *\"De maximumsnelheid moet omlaag wegens milieu en veiligheid.\"*\n• Hoofdvraag: *\"Moet de maximumsnelheid omlaag?\"*\n\n**Methode 3**: Kijk naar de **titel** van de tekst — vaak een verkorte hoofdvraag of antwoord.\n• \"Snelheid omlaag, doden omlaag\" → hoofdvraag: *\"Heeft een lagere maximumsnelheid effect op verkeersveiligheid?\"*\n\n**Belangrijk**: een goede hoofdvraag is:\n• Eén zin\n• Bevat het hele onderwerp\n• Is open of gesloten (alle types kunnen)\n• Past bij het hele artikel — niet één alinea\n\n**Examenvraag**: \"Geef de hoofdvraag van deze tekst\" — formuleer 'm zelf in één zin als ie er niet expliciet staat.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">hoofdvraag = centrale vraag</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">methode 1: letterlijk in inleiding</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">methode 2: hoofdgedachte → vraag</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">methode 3: titel als clue</text>
<line x1="30" y1="124" x2="270" y2="124" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="146" fill="${COLORS.muted}" font-size="11" font-family="Arial">"De max-snelheid moet omlaag" =</text>
<text x="35" y="164" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">hoofdvraag: Moet de max-snelheid omlaag?</text>
</svg>`,
    checks: [
      {
        q: "*Hoofdgedachte van een tekst: \"Sociale media zijn schadelijk voor jongeren en zouden boven de 13 jaar pas mogen.\" Wat is de bijbehorende hoofdvraag?*",
        options: [
          "Zijn sociale media schadelijk voor jongeren?",
          "Wat zijn sociale media?",
          "Wie heeft sociale media uitgevonden?",
          "Hoeveel jongeren gebruiken TikTok?",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een definitie-vraag past bij een uiteenzetting met een ander doel. De hoofdgedachte hier gaat over schade — welke vraag past dáárbij?",
          "Een geschiedenis-vraag past niet bij deze hoofdgedachte (= over schade en leeftijdsgrens).",
          "Een statistiek-vraag is een deelvraag, geen hoofdvraag van een tekst die over schade gaat.",
        ],
      },
    ],
  },
  {
    title: "Deelvragen — onderwerpen per alinea",
    explanation: "**Deelvragen** zijn de kleinere vragen die *samen* het antwoord op de hoofdvraag opbouwen. Vaak heeft elke alinea een eigen deelvraag.\n\n**Voorbeeld**:\n• Hoofdvraag: *\"Moet de maximumsnelheid omlaag?\"*\n• Deelvraag 1 (= alinea 1): *\"Wat zijn de milieu-effecten van een lagere snelheid?\"*\n• Deelvraag 2 (= alinea 2): *\"Hoe verandert de verkeersveiligheid?\"*\n• Deelvraag 3 (= alinea 3): *\"Hoeveel extra reistijd kost het?\"*\n• Deelvraag 4 (= alinea 4): *\"Wat zeggen tegenstanders, en kloppen hun argumenten?\"*\n\nElke alinea = antwoord op één deelvraag. Bij elkaar = totaal antwoord op de hoofdvraag.\n\n**Hoe herken je deelvragen?**\n\n**1. Topic sentence van elke alinea**\nDe topic sentence (de eerste zin van een alinea) bevat vaak het deel-onderwerp. Vorm dat om naar een vraag.\n\n**2. Kop boven elke alinea (in lange artikelen)**\nIn online artikelen staan vaak tussenkoppen die als kant-en-klare deelvragen functioneren.\n\n**3. Signaalwoorden tussen alinea's**\n*\"Ten eerste, ten tweede, daarnaast\"* signaleren dat hier een nieuwe deelvraag begint.\n\n**Examen-vraagtype**: \"Geef de deelvragen van deze tekst.\" Antwoord: een lijst van vragen, in dezelfde volgorde als de alinea's.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<rect x="80" y="32" width="140" height="28" rx="6" fill="rgba(255,213,79,0.20)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">hoofdvraag</text>
<line x1="100" y1="60" x2="60" y2="84" stroke="${COLORS.muted}" stroke-width="1"/>
<line x1="150" y1="60" x2="150" y2="84" stroke="${COLORS.muted}" stroke-width="1"/>
<line x1="200" y1="60" x2="240" y2="84" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="20" y="86" width="80" height="28" rx="5" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="60" y="104" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">deelvraag 1</text>
<rect x="110" y="86" width="80" height="28" rx="5" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="104" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">deelvraag 2</text>
<rect x="200" y="86" width="80" height="28" rx="5" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="240" y="104" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">deelvraag 3</text>
<text x="35" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">→ elke alinea beantwoordt 1 deelvraag</text>
<text x="35" y="158" fill="${COLORS.text}" font-size="11" font-family="Arial">→ samen vormen ze het hele antwoord</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vorm uit topic sentences of tussenkoppen</text>
</svg>`,
    checks: [
      {
        q: "*Hoofdvraag: \"Hoe is de woningmarktcrisis ontstaan?\" Welke optie is een logische deelvraag?*",
        options: [
          "Welke rol speelt de lage rente sinds 2010?",
          "Wat is een woning?",
          "Hoeveel mensen wonen in Nederland?",
          "Bestaat er een woningmarktcrisis?",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een definitie-vraag is geen deelvraag van een tekst die ontstaan-vragen behandelt. Welke past bij een oorzaak-analyse?",
          "Algemene statistiek over inwoners is geen deelvraag van een tekst over de oorzaak van de crisis.",
          "Dat is geen deelvraag — het twijfelt aan de hoofdvraag zelf, in plaats van die op te bouwen.",
        ],
      },
    ],
  },
  {
    title: "Tekstindeling — kop, romp, slot",
    explanation: "De **tekstindeling** is de globale opbouw van een tekst. De klassieke indeling — die je op het examen vaak moet herkennen — is **inleiding (=kop), middenstuk (=romp), slot**.\n\n**Inleiding** (alinea 1, soms 2)\n• Aanleiding\n• Vraag of stelling\n• Eventueel aankondiging structuur\n\n**Middenstuk** (de bulk, meestal 60-80% van de tekst)\n• Bevat de daadwerkelijke uitwerking\n• Per alinea één deel-onderwerp / argument / perspectief\n\n**Slot** (laatste alinea, soms twee)\n• Samenvatting + conclusie / advies / open vraag\n\n**Examen-vraagtypen**:\n\n**1. \"Welke alinea's vormen de inleiding?\"**\nMeestal alinea 1 of 1+2. Aanwijzing: hier staat de centrale vraag/stelling, geen uitwerking.\n\n**2. \"Welke alinea's vormen het slot?\"**\nMeestal de laatste 1-2 alinea's. Aanwijzing: \"concluderend\", \"al met al\", \"kortom\", advies-toon.\n\n**3. \"Hoe is de tekst opgebouwd?\"**\nGeef indeling met alinea-nummers: \"Inleiding 1-2, middenstuk 3-7, slot 8-9.\"\n\n**Belangrijk**: er kunnen ook **andere indelingen** zijn:\n• **Probleem-oplossing**: probleem schetsen → mogelijke oplossingen → keuze\n• **Chronologisch**: gebeurtenis 1 → 2 → 3\n• **Vergelijkend**: optie A → optie B → afweging\n• **Voor-/nadelen**: voordelen → nadelen → eigen positie\n\n**Examenvraag**: \"Welke indelingsprincipe gebruikt de schrijver?\" Kies dan uit deze types.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">tekstindeling</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="230" height="22" rx="4" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">inleiding (alinea 1-2)</text>
<rect x="35" y="90" width="230" height="46" rx="4" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="110" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">middenstuk (alinea 3-N)</text>
<text x="150" y="125" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">bulk · uitwerking · 60-80%</text>
<rect x="35" y="142" width="230" height="22" rx="4" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="158" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">slot (laatste alinea)</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ook: probleem-oplossing, chronologisch, voor/nadelen</text>
</svg>`,
    checks: [
      {
        q: "*De laatste alinea van een tekst begint met \"Concluderend laat zich vaststellen dat...\". Tot welk deel hoort deze alinea?*",
        options: ["Slot", "Inleiding", "Middenstuk", "Aanleiding"],
        answer: 0,
        wrongHints: [
          null,
          "De inleiding kondigt aan, vat niet samen. \"Concluderend\" is juist een afsluitend signaal.",
          "Het middenstuk werkt argumenten/onderwerpen uit. Hier wordt afgesloten met een conclusie.",
          "Aanleiding staat juist vooraan in de inleiding (waarom schrijven we hier nu over). Niet het einde.",
        ],
      },
    ],
  },

  // ─── C. Alinea-niveau ─────────────────────────────────
  {
    title: "Functie van een alinea",
    explanation: "Iedere alinea heeft een **functie** binnen de tekst — een specifieke rol die ze speelt in de opbouw. Examen-vraagtype: *\"Wat is de functie van alinea 4?\"* Veel voorkomende functies:\n\n**1. Inleidend** — opent het onderwerp, schetst de aanleiding.\n**2. Stellend** — bevat de hoofdgedachte / centrale stelling.\n**3. Ondersteunend** — geeft een argument of voorbeeld bij een eerdere claim.\n**4. Uitwerkend** — diept een eerder genoemd punt verder uit.\n**5. Tegenstellend** — geeft een tegenargument of contrasterend perspectief.\n**6. Samenvattend** — vat eerdere alinea's samen.\n**7. Concluderend** — trekt de eindconclusie.\n**8. Voorbeelden gevend** — illustreert met concrete cases.\n**9. Definiërend** — geeft uitleg over een begrip dat in de tekst gebruikt wordt.\n**10. Afsluitend / oproep** — eindigt de tekst met een advies of vraag.\n\n**Hoe bepaal je de functie?**\n\n**1. Lees de alinea zelf** — wat doet 'm in essentie?\n**2. Lees de alinea's eromheen** — hoe verhoudt deze zich tot wat ervoor en erna staat?\n**3. Let op signaalwoorden binnen de alinea** — *\"echter\" = tegenstellend; \"bijvoorbeeld\" = voorbeeld gevend; \"concluderend\" = concluderend.*\n\n**Voorbeeld**:\n*Alinea 3*: \"Echter — niet iedereen is overtuigd. Tegenstanders wijzen op de extra kosten van de maatregel.\"\n→ Functie: **tegenstellend** (introduceert tegenargument).\n\n**Examen-tip**: het antwoord moet kort en specifiek zijn (één tot drie woorden). Niet \"de alinea geeft informatie\" — dat zegt niks.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">veel-voorkomende alinea-functies</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">• inleidend / stellend / ondersteunend</text>
<text x="35" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">• uitwerkend / tegenstellend</text>
<text x="35" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">• samenvattend / concluderend</text>
<text x="35" y="127" fill="${COLORS.text}" font-size="11" font-family="Arial">• voorbeelden gevend / definiërend</text>
<text x="35" y="145" fill="${COLORS.text}" font-size="11" font-family="Arial">• afsluitend / oproep</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">signaalwoord binnen alinea is vaak de gever</text>
</svg>`,
    checks: [
      {
        q: "*Een alinea begint met: \"Echter — er is ook een kant die vaak vergeten wordt. Tegenstanders stellen dat...\" — Welke functie heeft deze alinea?*",
        options: [
          "Tegenstellend (introduceert tegenargument)",
          "Concluderend",
          "Inleidend",
          "Voorbeelden gevend",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Concluderend = de tekst afsluiten. Hier wordt juist een nieuw perspectief geïntroduceerd, geen einde.",
          "Inleidend opent de hele tekst. Deze alinea staat midden in een tekst en biedt iets nieuws aan.",
          "Een voorbeeld is een illustratie. Hier wordt een tegen-perspectief gegeven, geen concrete case.",
        ],
      },
    ],
  },
  {
    title: "Verbanden tussen alinea's",
    explanation: "Alinea's hangen niet los — ze hebben **verbanden** met elkaar. Examen-vraagtype: *\"Welk verband bestaat er tussen alinea 3 en 4?\"* Veel voorkomende verbanden:\n\n**1. Toevoegend** — alinea 4 voegt een argument toe aan alinea 3.\n**2. Tegenstellend** — alinea 4 weerlegt of contrasteert alinea 3.\n**3. Oorzaak-gevolg** — alinea 3 noemt oorzaak, alinea 4 het gevolg.\n**4. Voorbeeld** — alinea 4 illustreert wat in alinea 3 algemeen werd gesteld.\n**5. Uitwerking** — alinea 4 werkt iets uit dat in alinea 3 alleen werd genoemd.\n**6. Vergelijking** — alinea 3 en 4 vergelijken twee dingen.\n**7. Conclusie** — alinea 4 trekt de conclusie uit alinea 3 (en eerdere).\n\n**Aanwijzingen voor het verband**:\n\n**Signaalwoorden aan begin van de tweede alinea**:\n• *\"Daarnaast\", \"Bovendien\"* → toevoegend\n• *\"Echter\", \"Aan de andere kant\"* → tegenstellend\n• *\"Daardoor\", \"Met als gevolg\"* → oorzaak-gevolg\n• *\"Zo\", \"Bijvoorbeeld\", \"Neem het geval van\"* → voorbeeld\n• *\"Concluderend\", \"Kortom\"* → conclusie\n\n**Inhoudelijke check**: lees de twee alinea's na elkaar. Zou er logisch een woord als \"echter\" of \"daardoor\" tussen passen? Dat woord verklapt het verband.\n\n**Tip**: examen-antwoord moet kort en concreet zijn. Niet *\"er is een verband\"*, maar *\"alinea 4 weerlegt het argument uit alinea 3 (= tegenstellend verband)\"*.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">verbanden tussen alinea's</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">+ toevoegend:</text>
<text x="135" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">daarnaast, bovendien</text>
<text x="35" y="92" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">↔ tegenstellend:</text>
<text x="155" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">echter, anderzijds</text>
<text x="35" y="110" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">→ gevolg:</text>
<text x="115" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">daardoor, met als gevolg</text>
<text x="35" y="128" fill="${COLORS.paars}" font-size="11" font-family="Arial" font-weight="bold">ex voorbeeld:</text>
<text x="135" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">zo, bijvoorbeeld</text>
<text x="35" y="146" fill="${COLORS.blue}" font-size="11" font-family="Arial" font-weight="bold">∑ conclusie:</text>
<text x="125" y="146" fill="${COLORS.text}" font-size="11" font-family="Arial">concluderend, kortom</text>
<text x="150" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">eerste woord van 2e alinea = vaak de hint</text>
</svg>`,
    checks: [
      {
        q: "*Alinea 3 stelt: \"De maatregel zou kosteneffectief zijn.\" Alinea 4 begint met: \"Echter, uit cijfers blijkt dat de implementatie miljoenen kost.\" — Welk verband?*",
        options: [
          "Tegenstellend (alinea 4 spreekt alinea 3 tegen)",
          "Toevoegend",
          "Oorzaak-gevolg",
          "Voorbeeld",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Toevoegend = aanvullen in dezelfde richting. Hier wordt juist iets *tegen* de eerste alinea gezet.",
          "Oorzaak-gevolg = X leidt tot Y. Hier wordt X juist betwist, niet als oorzaak voor iets anders gepresenteerd.",
          "Een voorbeeld illustreert. Hier wordt geen voorbeeld gegeven, maar een tegen-claim.",
        ],
      },
    ],
  },
  {
    title: "Signaalwoorden lezen — de schrijver verklapt",
    explanation: "We hebben signaalwoorden eerder bekeken bij **schrijfvaardigheid** (= ze zelf gebruiken). Bij **tekstanalyse** ga je ze omgekeerd inzetten: ze **detecteren** in een gegeven tekst om snel structuur en relaties op te pikken.\n\n**Snel-scan-techniek voor het examen**:\n1. Lees eerst de tekst snel door en **omcirkel of streep alle signaalwoorden** aan.\n2. Daarna heb je de skelet-structuur in beeld zonder de hele tekst diep gelezen te hebben.\n3. Beantwoord daarna de vragen — vaak zit het antwoord precies bij een signaalwoord.\n\n**Belangrijkste signaalwoorden + wat ze verklappen**:\n\n| Signaalwoord | Verklapt | Examen-vraag |\n|---|---|---|\n| *want, omdat, doordat, immers* | Argument volgt | \"Wat is het argument voor X?\" |\n| *echter, hoewel, toch* | Tegenstelling/weerlegging | \"Welk tegenargument noemt de schrijver?\" |\n| *daardoor, met als gevolg* | Gevolg-relatie | \"Wat is het gevolg van X?\" |\n| *bijvoorbeeld, zo, neem het geval* | Voorbeeld volgt | \"Welk voorbeeld geeft de schrijver?\" |\n| *ten eerste, ten tweede, daarnaast* | Lijstargumentatie | \"Welke argumenten gebruikt de schrijver?\" |\n| *concluderend, kortom, al met al* | Conclusie | \"Wat is de conclusie?\" |\n| *volgens X, aldus Y* | Bron / autoriteit | \"Welke bron haalt de schrijver aan?\" |\n\n**Trainingstip**: lees op het examen de vraag éérst, dan de tekst. Dan weet je waar je op moet letten en kun je gericht het bijbehorende signaalwoord zoeken.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">signaalwoorden = examen-cheat</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">1. lees eerst de vraag</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">2. scan tekst voor signaalwoord</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">3. antwoord zit vaak in die zin</text>
<line x1="30" y1="124" x2="270" y2="124" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="146" fill="${COLORS.muted}" font-size="11" font-family="Arial">"want" = argument | "echter" = tegen</text>
<text x="35" y="164" fill="${COLORS.muted}" font-size="11" font-family="Arial">"daardoor" = gevolg | "concluderend" = slot</text>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">streep ze aan tijdens 1e lezing</text>
</svg>`,
    checks: [
      {
        q: "*Examenvraag: \"Welk gevolg noemt de schrijver van een lagere snelheidslimiet?\" Welke signaalwoord-zin scan je het eerst?*",
        options: [
          "\"...met als gevolg dat de luchtkwaliteit aantoonbaar verbetert.\"",
          "\"Echter, niet iedereen is hiervan overtuigd.\"",
          "\"Bijvoorbeeld in Duitsland wordt al getest.\"",
          "\"Concluderend kan worden gesteld dat...\"",
        ],
        answer: 0,
        wrongHints: [
          null,
          "\"Echter\" wijst op een tegenstelling — handig voor een vraag over tegenargument, niet over gevolg.",
          "\"Bijvoorbeeld\" leidt een illustratie in — handig voor een vraag over voorbeeld, niet over gevolg.",
          "\"Concluderend\" wijst op de eindconclusie. Maar specifiek het gevolg-signaal is iets anders.",
        ],
      },
    ],
  },

  // ─── D. Inhoud beoordelen ─────────────────────────────
  {
    title: "Feit of mening?",
    explanation: "Op het examen wordt vaak gevraagd: *\"Is deze zin een feit of een mening?\"*\n\n**Feit**: een uitspraak die je objectief kunt **controleren** of bewijzen. Cijfers, jaartallen, definities, gemeten gegevens.\n• ✓ \"In 2024 telde Nederland 17,9 miljoen inwoners.\" *(controleerbaar bij CBS)*\n• ✓ \"Het kookpunt van water op zeeniveau is 100°C.\"\n• ✓ \"De Tweede Wereldoorlog eindigde in 1945.\"\n\n**Mening**: een uitspraak die een **oordeel of voorkeur** uitdrukt. Niet objectief te toetsen — er is over te discussiëren.\n• ✗ \"Nederland is een prachtig land om in te wonen.\"\n• ✗ \"De zorgkosten zijn veel te hoog.\"\n• ✗ \"Klassieke muziek is verheffender dan popmuziek.\"\n\n**Tussenvorm — meningen vermomd als feiten**: pas op!\n• \"Iedereen weet dat sociale media schadelijk zijn.\" → klinkt feitelijk maar is een mening (gegeneraliseerde opinie).\n• \"Dat de regering faalt is duidelijk.\" → klinkt zeker maar is een oordeel.\n\n**Test**: kun je het tegendeel beweren zonder dom te lijken?\n• \"Water kookt bij 100°C\" → tegendeel is gewoon onjuist (= feit).\n• \"De zorgkosten zijn te hoog\" → tegendeel kan ook verdedigd worden (= mening).\n\n**Belangrijk onderscheid**:\n• Een **feit met bron** is sterker (\"Volgens het CBS slaapt 38% van...\") dan een feit zonder bron.\n• Een **mening met argumentatie** is sterker dan een blote mening.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<rect x="35" y="62" width="105" height="80" rx="8" fill="rgba(0,200,83,0.12)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="87" y="84" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">FEIT</text>
<text x="87" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">controleerbaar</text>
<text x="87" y="119" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">cijfers, jaartallen,</text>
<text x="87" y="133" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">metingen</text>
<rect x="160" y="62" width="105" height="80" rx="8" fill="rgba(255,112,67,0.12)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="212" y="84" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">MENING</text>
<text x="212" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">oordeel / voorkeur</text>
<text x="212" y="119" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">over te</text>
<text x="212" y="133" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">discussiëren</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">test: kun je tegendeel beweren zonder dom te lijken?</text>
</svg>`,
    checks: [
      {
        q: "*Welke zin is een MENING (geen feit)?*",
        options: [
          "De zorgpremie is in 2025 met €40 per maand gestegen.",
          "Sociale media zijn schadelijk voor kinderen.",
          "Het IPCC-rapport van 2024 voorspelt een zeespiegelstijging van 30 cm tegen 2050.",
          "In Nederland geldt sinds 2019 een rookverbod in horeca.",
        ],
        answer: 1,
        wrongHints: [
          "Dat is een controleerbaar getal. De juiste optie is iets dat je niet objectief kunt toetsen.",
          null,
          "Een onderzoeksrapport met specifieke cijfers is feitelijk — toetsbaar bij de bron. Welke optie is een waardeoordeel?",
          "Een wettelijke regeling met datum is feitelijk. Welke optie bevat een waardeoordeel?",
        ],
      },
      {
        q: "*\"Iedereen weet inmiddels dat thuiswerken de productiviteit verhoogt.\"* — Wat is dit?",
        options: [
          "Een mening (vermomd als feit door 'iedereen weet')",
          "Een feit",
          "Een argumentatie",
          "Een conclusie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "\"Iedereen weet\" is geen objectieve toetsing. Het probeert vanzelfsprekend te klinken, maar er valt over te discussiëren.",
          "Een argumentatie heeft *waarom*-onderbouwing. Hier wordt iets als bekend aangenomen zonder onderbouwing.",
          "Een conclusie volgt op argumenten. Hier ontbreken die — alleen een appel op vanzelfsprekendheid.",
        ],
      },
    ],
  },
  {
    title: "Bron-strategie van de schrijver",
    explanation: "Schrijvers gebruiken **bronnen** om hun tekst geloofwaardig te maken. Op het examen wordt vaak gevraagd: *\"Welke bronnen gebruikt de schrijver, en wat doen ze voor zijn betoog?\"*\n\n**Soorten bronnen**:\n\n**1. Wetenschappelijk onderzoek** — onderzoeksinstituten, universiteiten\n• \"Onderzoek van de TU Delft toont aan dat...\"\n• Sterk: objectief, peer-reviewed.\n\n**2. Officiële instanties** — CBS, RIVM, WHO, IPCC, OESO\n• \"Volgens cijfers van het CBS...\"\n• Sterk: gezaghebbend en publiek toegankelijk.\n\n**3. Experts en deskundigen**\n• \"Hoogleraar arbeidsrecht Anna Jansen stelt: '...' \"\n• Sterk **als** de expert deskundig is op het juiste vakgebied.\n\n**4. Ervaringsdeskundigen / persoonlijke verhalen**\n• \"Patiënte Marlies (58) vertelt: '...' \"\n• Krachtig om empathie op te wekken, maar **één geval = geen statistiek**.\n\n**5. Vergelijking met andere landen / situaties**\n• \"In Zweden werd dezelfde maatregel ingevoerd, met als resultaat...\"\n• Sterk als de situaties vergelijkbaar zijn.\n\n**Examen-vraagtypen**:\n• *\"Welke bron noemt de schrijver in alinea 4?\"* → letterlijk uit de tekst\n• *\"Wat is het effect van die bron op het betoog?\"* → maakt geloofwaardig / wekt empathie / toont consensus / etc.\n• *\"Is die bron geschikt voor dit onderwerp?\"* → kritisch denken: deskundig genoeg? actueel? selectief geciteerd?\n\n**Kritische blik**: een schrijver kan bronnen ook **selectief** gebruiken (alleen de bronnen aanhalen die zijn standpunt steunen). Op het examen wordt soms gevraagd: \"Geef een bron die ontbreekt — een tegen-perspectief.\"",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">soorten bronnen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="11" font-family="Arial">• onderzoek (TU, universiteit)</text>
<text x="35" y="92" fill="${COLORS.good}" font-size="11" font-family="Arial">• officiële instanties (CBS, RIVM)</text>
<text x="35" y="110" fill="${COLORS.good}" font-size="11" font-family="Arial">• experts / hoogleraren</text>
<text x="35" y="128" fill="${COLORS.warm}" font-size="11" font-family="Arial">• ervaringsdeskundigen (1 geval ≠ stat.)</text>
<text x="35" y="146" fill="${COLORS.warm}" font-size="11" font-family="Arial">• vergelijking met andere landen</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.alt}" font-size="10" font-family="Arial" font-style="italic">let op: selectieve bron-keuze = examen-vraag</text>
</svg>`,
    checks: [
      {
        q: "*Een betoog over zorgkosten haalt alleen artsen aan en geen patiënten of verzekeraars. Welk soort kritiek is hier passend?*",
        options: [
          "De schrijver gebruikt selectieve bronnen — alleen één perspectief.",
          "De schrijver gebruikt geen bronnen.",
          "De bronnen zijn ondeskundig.",
          "Er ontbreekt een conclusie.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er worden wel bronnen gebruikt (artsen). De kritiek zit in welke kanten *ontbreken*.",
          "Artsen zijn wel deskundig op hun gebied. De kritiek gaat niet over deskundigheid.",
          "Dat is een aparte vraag (conclusie-aanwezigheid). Hier gaat het specifiek over bron-keuze.",
        ],
      },
    ],
  },
  {
    title: "Objectiviteit en perspectief",
    explanation: "**Objectiviteit** = neutraal weergeven, alle kanten gelijkwaardig behandelen. **Subjectiviteit** = vanuit één perspectief schrijven, met voorkeur of oordeel.\n\nOp het examen wordt vaak gevraagd: *\"Schrijft de auteur objectief of subjectief?\"* of *\"Vanuit welk perspectief is deze tekst geschreven?\"*\n\n**Aanwijzingen voor SUBJECTIEF schrijven**:\n• \"Ik\" of \"wij\" gebruiken (= persoonlijke positie)\n• Waarderende bijvoeglijke naamwoorden: *\"schandalig\", \"prachtig\", \"belachelijk\", \"absurd\"*\n• Versterkers en uitroeptekens: *\"echt waar!\", \"natuurlijk\", \"vanzelfsprekend\"*\n• Selectieve bron-keuze (één kant uitlichten)\n• Retorische vragen (\"Hoe lang gaan we hiermee door?\")\n• Spotnaam of kaderbepalend taalgebruik (\"de zogenaamde 'experts' \")\n\n**Aanwijzingen voor OBJECTIEF schrijven**:\n• \"De\" of \"het\" zonder ik-vorm\n• Neutrale werkwoorden: *\"stelt\", \"meent\", \"toont aan\"* (geen \"beweert\" of \"klaagt\")\n• Bronnen uit verschillende kampen\n• Beide kanten van een argument\n• Geen waardeoordelen — alleen feitelijke beschrijvingen\n\n**Soms is subjectiviteit op zijn plaats**:\n• Een column of opinie-stuk hoort subjectief — dat is het genre.\n• Een nieuwsbericht hoort objectief — anders schendt het de journalistieke regels.\n\n**Examenvraag**: *\"Geef twee zinnen die de subjectieve toon van de schrijver tonen.\"* → zoek waarderende bijvoeglijke naamwoorden, versterkers, of expliciete \"ik vind\"-zinnen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<rect x="35" y="62" width="105" height="80" rx="8" fill="rgba(255,112,67,0.12)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="87" y="84" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">SUBJECTIEF</text>
<text x="87" y="103" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">"ik vind", "schandalig"</text>
<text x="87" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">retorische vragen</text>
<text x="87" y="133" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">selectieve bronnen</text>
<rect x="160" y="62" width="105" height="80" rx="8" fill="rgba(0,200,83,0.12)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="212" y="84" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">OBJECTIEF</text>
<text x="212" y="103" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">"de", "stelt", "toont"</text>
<text x="212" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">beide kanten</text>
<text x="212" y="133" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">neutrale toon</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">column = subjectief OK · nieuwsbericht ≠ subjectief</text>
</svg>`,
    checks: [
      {
        q: "*\"Het is werkelijk schandalig hoe de regering met dit dossier omgaat.\"* — Welk kenmerk maakt deze zin subjectief?",
        options: [
          "Het waardeoordeel \"schandalig\" + de versterker \"werkelijk\"",
          "De zin is te kort",
          "Er staat een hoofdletter",
          "Er ontbreekt een bron",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Lengte zegt niets over subjectiviteit. Welke woorden in de zin verraden een persoonlijk oordeel?",
          "Hoofdletters zijn standaard. Ze maken een zin niet subjectief.",
          "Een ontbrekende bron is een aparte kritiek. Subjectiviteit zit in de woordkeus van de zin zelf.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Eindopdracht — vier gemixte vragen",
    explanation: "Vier vragen op examenniveau havo 4 leesvaardigheid. Alles wat je geleerd hebt komt langs: tekstdoel, hoofdgedachte, alinea-functie, signaalwoord-detectie.\n\n**Tip voor het examen-moment**:\n1. **Lees eerst de vragen**, dan pas de tekst — dan weet je waar je op moet letten.\n2. **Streep signaalwoorden aan** tijdens de eerste lezing.\n3. **Noteer per alinea kort de functie** (in steekwoorden in de marge).\n4. **Beantwoord met kort, concreet antwoord**: examen-correctoren waarderen één tot drie woorden voor functie-vragen, één volzin voor hoofdgedachte.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">tekst-</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial" font-weight="bold">analyse</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">examenstof leesvaardigheid 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Een tekst eindigt met: \"De regering moet dit beleid herzien — en wel zo snel mogelijk.\"* — Welk hoofddoel suggereert dit slot?",
        options: [
          "Overtuigen",
          "Informeren",
          "Beschouwen",
          "Uitleggen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Informeren = neutrale feiten. Hier wordt aangedrongen op handelen — andere intentie.",
          "Beschouwen weegt af. Hier wordt juist één conclusie geforceerd.",
          "Uitleggen is informatieoverdracht. Hier is sprake van een oproep, niet van uitleg.",
        ],
      },
      {
        q: "*Alinea begint met: \"Concluderend kan worden gesteld dat de drie genoemde maatregelen samen de gewenste daling kunnen bewerkstelligen.\"* — Welke functie heeft deze alinea?",
        options: [
          "Concluderend / samenvattend (slot)",
          "Inleidend",
          "Tegenstellend",
          "Voorbeelden gevend",
        ],
        answer: 0,
        wrongHints: [
          null,
          "\"Concluderend\" wijst juist op een afsluiting, niet op een opening van de tekst.",
          "Tegenstellend zou \"echter\" of \"daarentegen\" als signaal hebben. Hier staat een conclusie-signaal.",
          "Voorbeelden gevend zou \"bijvoorbeeld\" of \"zo\" als signaal hebben. Conclusie ≠ voorbeeld.",
        ],
      },
      {
        q: "*Welke optie is de hoofdgedachte (geen onderwerp, geen deelvraag) van een tekst?*",
        options: [
          "Een hogere belasting op suiker zou de volksgezondheid aantoonbaar verbeteren.",
          "Suiker.",
          "Hoeveel suiker eet een Nederlander gemiddeld?",
          "Suikerbelasting in Nederland.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Eén woord is geen hoofdgedachte — alleen het onderwerp. Welke optie is een volzin met claim?",
          "Een vraag is geen hoofdgedachte. Een hoofdgedachte is een uitspraak met een standpunt of conclusie.",
          "Dat is alleen een thema-formulering. Een hoofdgedachte bevat wat de schrijver erover *stelt*.",
        ],
      },
      {
        q: "*\"Iedereen weet dat klassieke muziek beter is dan moderne muziek.\"* — Wat is dit?",
        options: [
          "Een mening (vermomd als feit door \"iedereen weet\")",
          "Een feit",
          "Een argumentatie",
          "Een drogreden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "\"Beter\" is een waardeoordeel — niet objectief toetsbaar. Welke categorie past?",
          "Een argumentatie heeft *waarom*-onderbouwing. Hier wordt iets als vanzelfsprekend gepresenteerd zonder onderbouwing.",
          "Drogredenen zijn onjuiste *argumentvormen* (zoals ad hominem). Hier is geen argumentvorm — alleen een opinie als feit verpakt.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tekstanalyse = {
  id: "tekstanalyse",
  title: "Tekstanalyse",
  emoji: "🔍",
  level: "havo4-5",
  subject: "taal",
  intro:
    "Examenstof havo 4-5 leesvaardigheid: tekstdoel + doelgroep herkennen, hoofdgedachte/hoofdvraag/deelvragen vinden, alinea-functies en verbanden analyseren, feit ↔ mening onderscheiden, bron-strategie en objectiviteit beoordelen. Complementair aan argumentatieleer (= argumenten + drogredenen) en schrijfvaardigheid (= produceren).",
  triggerKeywords: [
    "tekstanalyse", "tekstdoel", "tekstsoort", "doelgroep",
    "hoofdgedachte", "hoofdvraag", "deelvraag", "deelvragen",
    "tekstindeling", "alinea-functie", "verbanden alineas",
    "signaalwoorden lezen", "feit of mening", "objectief",
    "subjectief", "bron", "leesvaardigheid examen",
  ],
  chapters,
  steps,
};

export default tekstanalyse;
