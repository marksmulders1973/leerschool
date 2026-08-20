// leesladderWoorden.js — de Woordenlijst van de Leesladder (Mark + Brian,
// 2026-07-10: Brian kende "stuifmeel" niet). Eén centrale lijst met moeilijke
// woorden in kindertaal; de pagina vindt ze automatisch in álle teksten
// (versie A/B/C) en zet ze:
//   1. met een stippellijntje in de tekst ("deze staat achterin"), en
//   2. alfabetisch in de Woordenlijst NA het antwoordblad — eerst raden uit
//      de zin (dat is de Doorstroomtoets-vaardigheid!), opzoeken mag altijd.
//
// SPELREGELS voor deze lijst:
// - Kindertaal, één of twee zinnetjes, geen jargon.
// - GEEN woorden opnemen waar een toetsvraag over gaat (smullen, besmettelijk,
//   fabeltje, microplastics, salto, chicle, echolocatie...) — anders verklapt
//   de lijst het antwoord. Ook geen woorden die de tekst zélf al uitlegt.
// - Sleutel = de vorm zoals hij in de tekst staat (we matchen op heel woord).

export const WOORDHULP = {
  "allergisch": "ergens ziek, jeukerig of niezerig van worden, terwijl anderen er geen last van hebben.",
  "astronauten": "mensen die in een raket de ruimte in gaan om daar te werken.",
  "aswolk": "een reuzenwolk van as en stof die uit een vulkaan komt.",
  "brutale": "brutaal = gewoon doen wat eigenlijk niet mag, zonder het te vragen.",
  "burchten": "een burcht is een stevig huis van takken en modder dat een bever bouwt, half onder water.",
  "dirigent": "de baas van een orkest; met zwaaiende armen geeft hij de maat aan.",
  "dolenthousiast": "zó blij en opgewonden dat je bijna niet stil kunt staan.",
  "dolgraag": "heel, heel erg graag.",
  "donsjas": "een dikke jas gevuld met zachte veertjes — lekker warm.",
  "evenwicht": "mooi in balans: niet te veel en niet te weinig.",
  "flinterdun": "zó dun als een velletje papier, bijna doorzichtig.",
  "gaas": "een soort hek van dun ijzerdraad met gaatjes, zoals voor een konijnenhok.",
  "gluurt": "gluren = stiekem even kijken zonder dat iemand het ziet.",
  "gracht": "een brede sloot met water, vroeger rondom een kasteel gegraven tegen vijanden.",
  "grotendeels": "voor het grootste deel; bijna helemaal.",
  "hars": "kleverig, goudkleurig sap dat uit een boom komt.",
  "heus": "echt waar; een écht(e).",
  "hurkt": "hurken = door je knieën zakken tot je bijna op de grond zit.",
  "ingedikt": "dikker gemaakt: het meeste vocht is eruit, dus het wordt stevig.",
  "invoering": "het moment waarop een nieuwe regel voor het eerst gaat gelden.",
  "kauw": "een zwarte vogel, familie van de kraai. Slim en nergens bang voor.",
  "klam": "een beetje vochtig en plakkerig.",
  "krokante": "krokant = lekker knapperig, het kraakt als je erop bijt.",
  "kwetsbare": "kwetsbaar = iets dat makkelijk kapot kan gaan en extra bescherming nodig heeft.",
  "libellen": "glanzende insecten met vier doorzichtige vleugels; ze scheren over het water.",
  "milieuorganisaties": "clubs van mensen die opkomen voor de natuur.",
  "moppert": "mopperen = een beetje boos in jezelf praten omdat iets niet lukt.",
  "nauwelijks": "bijna niet.",
  "nauwkeurig": "heel precies, zonder foutjes.",
  "nectar": "zoet sapje diep in een bloem; bijen en vlinders drinken het.",
  "non-stop": "zonder ook maar één keer te stoppen.",
  "oogsten": "de oogst = alles wat op het land is gegroeid om te eten; oogsten = dat binnenhalen.",
  "orkest": "een grote groep muzikanten die samen muziek maakt.",
  "pek": "dikke, plakkerige zwarte smurrie; gloeiend heet werd het vroeger als wapen gebruikt.",
  "pikkedonker": "zó donker dat je helemaal niets meer ziet.",
  "profiteren": "ergens voordeel van hebben; er beter van worden.",
  "rakelings": "er nét langs, bijna ertegenaan.",
  "rasters": "een raster is een stevig hek van draad.",
  "runt": "runnen = ervoor zorgen dat iets blijft draaien; de baas zijn over het werk.",
  "rustgevend": "iets waar je vanzelf rustig van wordt.",
  "schuw": "snel bang voor mensen; blijft liever ver uit de buurt.",
  "slierten": "lange, dunne flarden — zoals linten die door de lucht zweven.",
  "specialiteit": "het gerecht of kunstje waar iemand extra goed in is en beroemd om wordt.",
  "staaldraad": "dun 'touw' van staal (een soort ijzer) — heel sterk.",
  "stuifmeel": "heel fijn geel poeder uit een bloem. Bijen brengen het naar andere bloemen, en zo kunnen er nieuwe zaadjes en vruchten groeien.",
  "verjagen": "wegjagen.",
  "veroorloven": "je iets kunnen veroorloven = er genoeg geld voor hebben.",
  "vervoermiddel": "iets waarmee je van de ene plek naar de andere reist, zoals een fiets, bus of auto.",
  "verteren": "eten in je buik zó klein afbreken dat je lichaam het kan gebruiken.",
  "voorouders": "je familie van heel lang geleden — de opa's en oma's van je opa's en oma's.",
  "vacht": "de dikke laag haren van een dier.",
  "waterbeheerders": "mensen van wie het werk is om te zorgen voor dijken, sloten en rivieren.",
  "westenwind": "wind die uit het westen komt (bij ons: van zee).",
  "wijsje": "een kort, makkelijk liedje.",
  "zeekaarten": "landkaarten van de zee, zodat schepen weten waar ze veilig kunnen varen.",
  "zeldzaam": "iets dat je bijna nooit ziet of tegenkomt.",
  "zuiver": "een zuivere noot = een toon die precies goed klinkt, niet vals.",
};

// Regex die alle woordhulp-woorden als heel woord vindt (langste eerst,
// zodat "waterbeheerders" niet halverwege op iets korters matcht).
function maakWoordRegex() {
  return new RegExp(
    "\\b(" +
      Object.keys(WOORDHULP)
        .sort((a, b) => b.length - a.length)
        .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|") +
      ")\\b",
    "gi"
  );
}
let WOORD_REGEX = maakWoordRegex();

// Leesladder 2 (20 aug 2026) voegt eigen woorden toe: lijst aanvullen en de
// regex opnieuw opbouwen (die wordt anders één keer bij het laden bevroren).
export function voegWoordenToe(extra) {
  Object.assign(WOORDHULP, extra || {});
  WOORD_REGEX = maakWoordRegex();
}

// Splitst een tekst in stukken: gewone strings en { woord } voor een match.
export function splitsOpWoorden(tekst) {
  const delen = [];
  let vorige = 0;
  for (const m of tekst.matchAll(WOORD_REGEX)) {
    if (m.index > vorige) delen.push(tekst.slice(vorige, m.index));
    delen.push({ woord: m[0] });
    vorige = m.index + m[0].length;
  }
  if (vorige < tekst.length) delen.push(tekst.slice(vorige));
  return delen;
}

// Alle woordhulp-woorden die in een lijst teksten voorkomen — alfabetisch,
// als [sleutel, uitleg]-paren voor de Woordenlijst achterin.
export function gebruikteWoorden(teksten) {
  const gevonden = new Set();
  for (const t of teksten) {
    for (const m of t.matchAll(WOORD_REGEX)) gevonden.add(m[0].toLowerCase());
  }
  return [...gevonden].sort((a, b) => a.localeCompare(b, "nl")).map((w) => [w, WOORDHULP[w]]);
}
