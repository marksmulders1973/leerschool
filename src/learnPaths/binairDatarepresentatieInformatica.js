// Leerpad: Binair & datarepresentatie — Informatica HAVO/VWO
// Bits/bytes, decimaal<->binair, hexadecimaal + RGB, tekst (ASCII/Unicode),
// beeld + geluid digitaal + compressie. 4 stappen x ~4 checks.

const stepEmojis = ["🔢", "🎨", "🔤", "🖼️"];

const chapters = [
  { letter: "A", title: "Bits, bytes & binair tellen", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Hexadecimaal & kleuren (RGB)", emoji: "🎨", from: 1, to: 1 },
  { letter: "C", title: "Tekst digitaal — ASCII & Unicode", emoji: "🔤", from: 2, to: 2 },
  { letter: "D", title: "Beeld, geluid & compressie", emoji: "🖼️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Bits, bytes & binair ──────────────────────────────
  {
    title: "Bits, bytes & binair tellen",
    explanation:
      "Een computer kent maar **twee toestanden**: stroom aan (1) of uit (0). Eén zo'n 0-of-1 heet een **bit** (binary digit). Alles in een computer — tekst, beeld, geluid — is uiteindelijk een rij bits.\n\n**Byte:** 8 bits samen = 1 **byte**. Met 8 bits kun je 2⁸ = **256** verschillende waarden maken (0 t/m 255).\n\n**Binair tellen** (tweetallig stelsel):\n• Decimaal (ons gewone stelsel) gebruikt 10 cijfers (0-9), plaatswaarden ×10: 1, 10, 100, 1000…\n• Binair gebruikt 2 cijfers (0 en 1), plaatswaarden ×2: **1, 2, 4, 8, 16, 32, 64, 128**…\n\n**Binair → decimaal:** tel de plaatswaarden op waar een 1 staat.\nVoorbeeld `1101`:\n```\n 8  4  2  1\n 1  1  0  1   →  8 + 4 + 0 + 1 = 13\n```\n\n**Eenheden** (groottes van bestanden):\n• 1 **kilobyte** (KB) ≈ 1000 bytes\n• 1 **megabyte** (MB) ≈ 1000 KB\n• 1 **gigabyte** (GB) ≈ 1000 MB\n• 1 **terabyte** (TB) ≈ 1000 GB\n(Strikt genomen werken computers met machten van 2: 1 KiB = 1024 bytes — maar voor schijven/internet wordt vaak 1000 gebruikt.)",
    checks: [
      {
        q: "Hoeveel verschillende waarden kun je maken met **1 byte** (8 bits)?",
        options: ["256", "8", "128", "1000"],
        answer: 0,
        wrongHints: [null, "Dat is het aantal bits, niet het aantal waarden.", "Bijna — dat is met 7 bits.", "Dat is ongeveer 1 kilobyte."],
        uitlegPad: {
          stappen: [{ titel: "2 tot de macht 8", tekst: "Elke bit heeft 2 mogelijkheden (0 of 1). Met 8 bits achter elkaar: 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = **2⁸ = 256** combinaties. Die lopen van 0000 0000 (= 0) t/m 1111 1111 (= 255). Daarom gaat een kleurkanaal of een teken vaak 0 t/m 255." }],
          niveaus: { basis: "2⁸ = 256.", simpeler: "8 bits → 256 waarden", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk decimaal getal is het binaire getal **1101**?",
        options: ["13", "11", "26", "1101"],
        answer: 0,
        wrongHints: [null, "Je hebt een plaatswaarde gemist — let op de 8.", "Dat is het dubbele; je telde een plaats te hoog.", "Binair lees je niet als 'duizendhonderdéén'."],
        uitlegPad: {
          stappen: [{ titel: "Plaatswaarden optellen", tekst: "Zet de plaatswaarden erboven (van rechts naar links: 1, 2, 4, 8):\n```\n 8  4  2  1\n 1  1  0  1\n```\nTel op waar een **1** staat: 8 + 4 + 0 + 1 = **13**." }],
          niveaus: { basis: "8+4+0+1 = 13.", simpeler: "1101 = 8+4+1 = 13", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **bit**?",
        options: ["Eén 0 of 1", "8 bytes", "Eén teken tekst", "Een soort bestand"],
        answer: 0,
        wrongHints: [null, "Andersom: een byte bestaat juist uit bits.", "Een teken kost meestal 1 of meer bytes, geen 1 bit.", "Te groot — een bit is de kleinste eenheid."],
        uitlegPad: {
          stappen: [{ titel: "De kleinste eenheid", tekst: "Een **bit** (binary digit) is de allerkleinste eenheid: één **0 of 1** (stroom uit of aan). 8 bits samen = 1 **byte**. Alle data is uiteindelijk een lange rij bits." }],
          niveaus: { basis: "Een 0 of 1.", simpeler: "Bit = 0 of 1", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke plaatswaarden horen bij de **eerste 4 bits** (rechts beginnend) in binair?",
        options: ["1, 2, 4, 8", "1, 10, 100, 1000", "0, 1, 2, 3", "2, 4, 6, 8"],
        answer: 0,
        wrongHints: [null, "Dat is het decimale (tientallige) stelsel.", "Dat zijn de bit-posities, niet hun waarden.", "Plaatswaarden verdubbelen telkens — niet +2."],
        uitlegPad: {
          stappen: [{ titel: "Telkens × 2", tekst: "In binair verdubbelt elke plaats naar links: **1, 2, 4, 8**, 16, 32, 64, 128… (machten van 2). Vergelijk met decimaal, waar het ×10 gaat: 1, 10, 100, 1000." }],
          niveaus: { basis: "1, 2, 4, 8.", simpeler: "Binair verdubbelt: 1-2-4-8", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Hexadecimaal & RGB ────────────────────────────────
  {
    title: "Hexadecimaal & kleuren (RGB)",
    explanation:
      "Lange rijen bits zijn voor mensen lastig te lezen. Daarom gebruiken informatici vaak **hexadecimaal** (zestientallig): korter en netjes om te zetten naar bits.\n\n**Hexadecimaal (hex):** 16 'cijfers':\n```\n0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F\n                      10 11 12 13 14 15\n```\nDus **A = 10, B = 11, … F = 15**.\n\n**Waarom handig?** Eén hex-teken = precies **4 bits** (een 'nibble'). Dus **2 hex-tekens = 1 byte**.\n• `F` hex = 1111 binair = 15\n• `FF` hex = 1111 1111 = **255**\n\n**Kleuren — het RGB-model:**\nEen scherm maakt kleur met drie lichtjes per pixel: **R**ood, **G**roen, **B**lauw. Elk kanaal is 1 byte (0-255). Samen 3 bytes = **24-bit kleur** = 256 × 256 × 256 ≈ **16,7 miljoen** kleuren.\n\nKleuren worden vaak als **hex-code** geschreven, `#RRGGBB`:\n• `#FF0000` = rood (R=255, G=0, B=0)\n• `#00FF00` = groen\n• `#0000FF` = blauw\n• `#FFFFFF` = wit (alles max) · `#000000` = zwart (alles uit)\n• `#FFFF00` = geel (rood + groen)",
    checks: [
      {
        q: "Welke waarde heeft het hex-teken **A**?",
        options: ["10", "1", "11", "16"],
        answer: 0,
        wrongHints: [null, "A is geen 1 — het komt ná de 9.", "Dat is B.", "16 is het grondtal; A zelf is kleiner."],
        uitlegPad: {
          stappen: [{ titel: "Na de 9 komen letters", tekst: "Hexadecimaal heeft 16 cijfers. Na 0-9 ga je verder met letters: **A = 10**, B = 11, C = 12, D = 13, E = 14, F = 15. Zo passen er 16 waarden in één teken." }],
          niveaus: { basis: "A = 10.", simpeler: "Hex A = 10 =", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **bits** stelt één hexadecimaal teken voor?",
        options: ["4", "1", "8", "16"],
        answer: 0,
        wrongHints: [null, "Dat is een bit zelf, niet wat één hex-teken dekt.", "8 bits = 2 hex-tekens (1 byte).", "16 is het aantal mogelijke waarden, niet het aantal bits."],
        uitlegPad: {
          stappen: [{ titel: "Een nibble", tekst: "Met 4 bits maak je 2⁴ = 16 waarden — precies genoeg voor de 16 hex-tekens (0-F). Dus **1 hex-teken = 4 bits** (een 'nibble'), en **2 hex-tekens = 1 byte**. Daarom is hex zo handig: het sluit netjes aan op bytes." }],
          niveaus: { basis: "4 bits.", simpeler: "1 hex = 4 bits", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke kleur is hex-code **#FF0000** in RGB?",
        options: ["Rood", "Blauw", "Wit", "Groen"],
        answer: 0,
        wrongHints: [null, "Blauw zou #0000FF zijn.", "Wit is #FFFFFF (alle kanalen max).", "Groen zou #00FF00 zijn."],
        uitlegPad: {
          stappen: [{ titel: "#RRGGBB lezen", tekst: "Een hex-kleur is `#RRGGBB`: de eerste twee tekens = **R**ood, dan **G**roen, dan **B**lauw, elk 00-FF (0-255). `#FF0000` = rood op max (255), groen 0, blauw 0 → **rood**." }],
          niveaus: { basis: "R=255, rest 0 → rood.", simpeler: "#FF0000 = rood", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel kleuren kun je maken met **24-bit RGB** (1 byte per kanaal)?",
        options: ["Ongeveer 16,7 miljoen", "256", "24", "1024"],
        answer: 0,
        wrongHints: [null, "256 is het aantal waarden per kanaal, niet het totaal.", "24 is het aantal bits, niet het aantal kleuren.", "Veel te weinig — denk aan 256 × 256 × 256."],
        uitlegPad: {
          stappen: [{ titel: "256 × 256 × 256", tekst: "Elk kanaal (R, G, B) heeft 256 waarden. Alle combinaties: 256 × 256 × 256 = **16.777.216** ≈ **16,7 miljoen** kleuren. Daarom heet 24-bit kleur ook wel 'truecolor'." }],
          niveaus: { basis: "256³ ≈ 16,7 mln.", simpeler: "24-bit = ~16,7 miljoen kleuren", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Tekst digitaal ────────────────────────────────────
  {
    title: "Tekst digitaal — ASCII & Unicode",
    explanation:
      "Een computer slaat geen letters op, maar **getallen**. Een afspraak (een 'tekenset') koppelt elk teken aan een getal.\n\n**ASCII** (jaren '60):\n• Gebruikt **7 bits** → 2⁷ = **128** tekens.\n• Genoeg voor het Engelse alfabet, cijfers en leestekens.\n• Bekende codes: **'A' = 65**, 'B' = 66 … 'a' = 97, en het cijferteken **'0' = 48**.\n• Probleem: geen é, ë, ç, ñ, Chinese tekens of emoji.\n\n**Unicode + UTF-8** (modern):\n• **Unicode** geeft élk teken ter wereld een nummer (>149.000 tekens): alle talen, symbolen én **emoji**.\n• **UTF-8** is de manier waarop die nummers in bytes worden opgeslagen. Het is **variabel**: een teken kost **1 tot 4 bytes**.\n  - Gewone ASCII-tekens kosten in UTF-8 nog steeds **1 byte** → UTF-8 is **achterwaarts compatibel** met ASCII.\n  - é, ë → 2 bytes · veel emoji → 4 bytes.\n• UTF-8 is vandaag de standaard op het web.\n\n**Belangrijk:** een 'letter' op je scherm is dus altijd eerst een getal, en dat getal is weer bits.",
    checks: [
      {
        q: "Een computer slaat tekst eigenlijk op als…",
        options: ["Getallen volgens een afgesproken tekenset", "Foto's van letters", "Klanken", "Niets — letters zijn al digitaal"],
        answer: 0,
        wrongHints: [null, "Nee, geen plaatjes — er zit een getalcode achter.", "Dat is geluid, niet tekst.", "Een letter is geen 'gegeven' op zich — er is een code nodig."],
        uitlegPad: {
          stappen: [{ titel: "Teken → getal → bits", tekst: "Een tekenset (zoals ASCII of Unicode) spreekt af welk **getal** bij welk teken hoort. Dat getal wordt als bits opgeslagen. Zo wordt elke letter uiteindelijk een rij nullen en enen." }],
          niveaus: { basis: "Getallen via een tekenset.", simpeler: "Tekst = getallen (tekenset)", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk getal hoort in **ASCII** bij de hoofdletter **'A'**?",
        options: ["65", "1", "26", "97"],
        answer: 0,
        wrongHints: [null, "Niet 1 — ASCII begint niet bij A.", "Dat is de plaats in het alfabet, niet de ASCII-code.", "97 is de kleine letter 'a'."],
        uitlegPad: {
          stappen: [{ titel: "A = 65, a = 97", tekst: "In ASCII begint de hoofdletter **'A' bij 65**, 'B' = 66, enzovoort. De kleine letters beginnen bij **'a' = 97**. Het verschil tussen hoofd- en kleine letter is dus precies 32." }],
          niveaus: { basis: "'A' = 65.", simpeler: "ASCII A = 65", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarvoor heb je **Unicode/UTF-8** nodig in plaats van ASCII?",
        options: ["Voor alle talen, symbolen én emoji", "Om sneller te rekenen", "Om bestanden te verkleinen", "Alleen voor hoofdletters"],
        answer: 0,
        wrongHints: [null, "Het gaat om méér tekens, niet om rekensnelheid.", "Compressie is iets anders.", "ASCII kon hoofdletters allang aan."],
        uitlegPad: {
          stappen: [{ titel: "128 tekens is te weinig", tekst: "ASCII heeft maar 128 tekens — geen é, geen Chinees, geen emoji. **Unicode** geeft élk teken ter wereld een nummer, en **UTF-8** slaat dat op (1-4 bytes per teken). Daarom kun je 🙂 en 'café' gewoon typen." }],
          niveaus: { basis: "Alle talen + emoji.", simpeler: "Unicode = alles + emoji", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel **bytes** kost een gewoon ASCII-teken (bv. 'k') in **UTF-8**?",
        options: ["1 byte", "4 bytes", "Altijd 2 bytes", "Een halve byte"],
        answer: 0,
        wrongHints: [null, "4 bytes is voor zware tekens zoals veel emoji.", "UTF-8 is juist variabel, niet altijd 2.", "Minder dan een byte kan een teken niet zijn."],
        uitlegPad: {
          stappen: [{ titel: "UTF-8 is achterwaarts compatibel", tekst: "UTF-8 gebruikt **1 byte** voor de oude ASCII-tekens (a-z, 0-9, leestekens). Speciale tekens kosten meer: é → 2 bytes, veel emoji → 4 bytes. Dat 'gewone tekst = 1 byte' maakt UTF-8 compatibel met ASCII." }],
          niveaus: { basis: "1 byte.", simpeler: "ASCII-teken in UTF-8 = 1 byte", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Beeld, geluid & compressie ────────────────────────
  {
    title: "Beeld, geluid & compressie",
    explanation:
      "**Beeld (bitmap/raster):**\n• Een foto bestaat uit **pixels** (beeldpunten) in een raster.\n• **Resolutie** = aantal pixels, bv. **1920 × 1080** (Full HD) = ruim 2 miljoen pixels.\n• Elke pixel heeft een kleur, vaak 24-bit RGB (3 bytes). Meer pixels of meer kleurdiepte → groter bestand én scherper beeld.\n\n**Geluid:**\n• Geluid is een golf. De computer meet die golf heel vaak per seconde: **sampling**.\n• **Samplefrequentie** in hertz (Hz): cd-kwaliteit = **44.100 samples per seconde** (44,1 kHz).\n• **Bitdiepte** = hoe nauwkeurig elke meting is (bv. 16 bits).\n• Meer samples + meer bits = beter geluid, maar groter bestand.\n\n**Compressie** — bestanden kleiner maken:\n• **Lossless** (verliesvrij): je krijgt de data **exact** terug. Voorbeelden: **PNG**, **ZIP**, FLAC. Goed voor tekst, schermafbeeldingen.\n• **Lossy** (met verlies): gooit details weg die je nauwelijks ziet/hoort → veel kleiner, maar je krijgt het **niet exact** terug. Voorbeelden: **JPG** (foto), **MP3** (muziek), MP4 (video).\n\n**Vuistregel:** verliesvrij = kwaliteit behouden; lossy = klein bestand, kleine kwaliteitsdip.",
    checks: [
      {
        q: "Waaruit bestaat een digitale **foto** (bitmap)?",
        options: ["Pixels met elk een kleur", "Lijnen en wiskundige vormen", "Losse letters", "Geluidsgolven"],
        answer: 0,
        wrongHints: [null, "Dat is juist een vector-afbeelding, niet een bitmap.", "Letters horen bij tekst, niet bij een foto.", "Golven horen bij geluid."],
        uitlegPad: {
          stappen: [{ titel: "Raster van beeldpunten", tekst: "Een bitmap/rasterfoto is een raster van **pixels**, elk met een eigen kleur (vaak 24-bit RGB). Hoe meer pixels (hogere **resolutie**, bv. 1920×1080), hoe scherper — maar ook hoe groter het bestand." }],
          niveaus: { basis: "Pixels met kleur.", simpeler: "Foto = pixels", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent een hogere **samplefrequentie** (Hz) bij geluid?",
        options: ["Vaker meten per seconde → beter geluid", "Hogere toonhoogte", "Een korter bestand", "Minder kleuren"],
        answer: 0,
        wrongHints: [null, "Het gaat om méétmomenten, niet direct om de toon.", "Hogere kwaliteit maakt het bestand juist groter.", "Kleuren horen bij beeld, niet bij geluid."],
        uitlegPad: {
          stappen: [{ titel: "Sampling", tekst: "Bij **sampling** meet de computer de geluidsgolf heel vaak per seconde. Meer metingen (hogere **samplefrequentie**, in Hz; cd = 44.100 Hz) = nauwkeurigere weergave = beter geluid, maar een groter bestand." }],
          niveaus: { basis: "Vaker meten = beter geluid.", simpeler: "Meer Hz = beter geluid", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk formaat gebruikt **lossy** (met verlies) compressie?",
        options: ["JPG", "PNG", "ZIP", "Tekstbestand (.txt)"],
        answer: 0,
        wrongHints: [null, "PNG is juist verliesvrij.", "ZIP geeft de data exact terug — verliesvrij.", "Platte tekst wordt niet 'lossy' opgeslagen."],
        uitlegPad: {
          stappen: [{ titel: "JPG gooit details weg", tekst: "**JPG** (foto's) en MP3 (muziek) zijn **lossy**: ze gooien details weg die je nauwelijks merkt → veel kleiner bestand, maar je krijgt het origineel **niet exact** terug. **PNG** en **ZIP** zijn **lossless**: exact terug, maar minder klein." }],
          niveaus: { basis: "JPG = lossy.", simpeler: "Lossy = JPG", nogSimpeler: "A." },
        },
      },
      {
        q: "Je wilt een schermafbeelding met scherpe tekst opslaan **zonder kwaliteitsverlies**. Wat kies je?",
        options: ["PNG (lossless)", "JPG (lossy)", "MP3", "Een lagere resolutie"],
        answer: 0,
        wrongHints: [null, "JPG maakt tekstranden juist wazig (lossy-artefacten).", "MP3 is voor geluid, niet voor beeld.", "Resolutie verlagen kost juist kwaliteit."],
        uitlegPad: {
          stappen: [{ titel: "Scherpe randen = lossless", tekst: "Voor schermafbeeldingen, logo's en tekst kies je **PNG** (lossless): scherpe randen blijven scherp, want de data komt exact terug. JPG is bedoeld voor foto's en maakt scherpe tekstranden korrelig/wazig." }],
          niveaus: { basis: "PNG = verliesvrij.", simpeler: "Tekst scherp houden = PNG", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const binairDatarepresentatieInformatica = {
  id: "binair-datarepresentatie-informatica",
  title: "Binair & datarepresentatie (Informatica)",
  emoji: "🔢",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-datarepresentatie",
  sloThema: "Informatica HAVO/VWO — hoe data (getallen, tekst, beeld, geluid) digitaal wordt opgeslagen",
  prerequisites: [
    { id: "machten", title: "Machten", niveau: "klas1-2" },
  ],
  intro:
    "Hoe slaat een computer álles op met alleen 0 en 1? Je leert bits & bytes en binair tellen, hexadecimaal + kleuren (RGB-hexcodes zoals #FF0000), hoe tekst werkt (ASCII vs Unicode/UTF-8 + emoji) en hoe beeld en geluid digitaal worden (pixels, sampling) plus lossless vs lossy compressie. ~15 min.",
  triggerKeywords: [
    "binair", "bit", "byte", "binaire", "tweetallig",
    "hexadecimaal", "hex", "nibble",
    "RGB", "kleurcode", "#FF0000", "truecolor", "24-bit",
    "ASCII", "Unicode", "UTF-8", "tekenset",
    "datarepresentatie", "data representatie",
    "pixel", "resolutie", "bitmap", "raster",
    "sampling", "samplefrequentie", "bitdiepte",
    "compressie", "lossless", "lossy", "JPG", "PNG", "MP3",
    "kilobyte", "megabyte", "gigabyte",
  ],
  chapters,
  steps,
};

export default binairDatarepresentatieInformatica;
