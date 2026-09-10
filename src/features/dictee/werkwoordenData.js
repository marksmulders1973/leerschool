// 🔤 Werkwoordspellingtest (Mark 10 sep 2026, via het schoolblad van Brian, groep 8):
// zoals op school — een zin met een gat, tussen haakjes het hele werkwoord en
// een tijd-hint (t.t. / v.t.; niets = voltooid deelwoord of bijvoeglijk gebruikt),
// het kind typt de juiste vorm. Vier vormen met het schoolsymbool:
//   ○ tegenwoordige tijd · □ verleden tijd · △ voltooid deelwoord · ▢ bijvoeglijk gebruikt vd
// Eigen zinnen (géén kopie van het schoolblad — vaste regel bij toetsmateriaal).
// Werkt op de dictee-motor (WerkwoordenPage.jsx): typveld, letter-voor-letter
// vergelijking, regel bij een fout, score per vorm, weekrapport, klaarzetten met code.

export const VORMEN = {
  tt:  { symbool: "○", naam: "tegenwoordige tijd", hint: "t.t.", kort: "t.t." },
  vt:  { symbool: "□", naam: "verleden tijd", hint: "v.t.", kort: "v.t." },
  vd:  { symbool: "△", naam: "voltooid deelwoord", hint: "", kort: "vd" },
  bvd: { symbool: "▢", naam: "bijvoeglijk gebruikt voltooid deelwoord", hint: "", kort: "bijv. vd" },
};

export const REGELS = {
  tt: "Tegenwoordige tijd: ik = de stam; hij/zij/het/jij-erachter = stam + t, óók als je de t niet hoort (hij vindt, zij wordt). Truc: vervang door 'lopen' — hoor je 'loopt'? Dan + t.",
  vt: "Verleden tijd: zeg het hele werkwoord en kijk naar de laatste klank vóór -en. Staat die in 't kofschip (t, k, f, s, ch, p)? Dan -te(n), anders -de(n). Let op dubbelop: wachten → wachtte. Sterk werkwoord? Dan verandert de klinker (zwerven → zwierf).",
  vd: "Voltooid deelwoord: ge- + stam + t of d ('t kofschip), nooit -dt. Begint het werkwoord met be-, ge-, ver-, ont-, her- of er-? Dan geen ge- ervoor. Sterk werkwoord: eindigt op -en (geschreven).",
  bvd: "Bijvoeglijk gebruikt: het voltooid deelwoord + e (de gebakken aardappels, de verbrande koekjes). Schrijf het zo lang als het voltooid deelwoord: verbrand → verbrande. Dubbele klinker vóór één medeklinker wordt enkel: vergroot → vergrote.",
};

// zin met ___ op de plek van het werkwoord · inf = hele werkwoord · tijd = vorm · vorm = goed antwoord
// tip = extra uitleg bij een fout (optioneel) · ook = andere goede schrijfwijzen (optioneel)
export const ZINNEN = [
  // ○ tegenwoordige tijd
  { zin: "Mijn zus ___ volgend jaar twaalf.", inf: "worden", tijd: "tt", vorm: "wordt" },
  { zin: "Hij ___ rekenen het leukste vak.", inf: "vinden", tijd: "tt", vorm: "vindt" },
  { zin: "___ jij morgen mee naar de dierentuin?", inf: "rijden", tijd: "tt", vorm: "Rijd", tip: "Staat 'jij' áchter het werkwoord? Dan alleen de stam: rijd jij." },
  { zin: "Het ___ vaak dat de bus te laat is.", inf: "gebeuren", tijd: "tt", vorm: "gebeurt" },
  { zin: "De juf ___ altijd geduldig op onze vragen.", inf: "antwoorden", tijd: "tt", vorm: "antwoordt" },
  { zin: "Ik ___ van spannende boeken.", inf: "houden", tijd: "tt", vorm: "houd", tip: "Bij 'ik' alleen de stam: ik houd, zonder t." },
  { zin: "___ je moe van al dat rennen?", inf: "worden", tijd: "tt", vorm: "Word", tip: "'Je' staat achter het werkwoord, dus alleen de stam: word je." },
  { zin: "Zij ___ volgende maand naar Groningen.", inf: "verhuizen", tijd: "tt", vorm: "verhuist", tip: "De stam van verhuizen is verhuis (z wordt s), plus t." },
  { zin: "De bakker ___ elke ochtend vers brood.", inf: "bakken", tijd: "tt", vorm: "bakt" },
  { zin: "Mijn oom ___ altijd over vroeger.", inf: "praten", tijd: "tt", vorm: "praat", tip: "De stam is praat; die eindigt al op een t, dus er komt geen tweede t bij." },
  { zin: "Jij ___ dit vast een leuk cadeau.", inf: "vinden", tijd: "tt", vorm: "vindt", tip: "Staat 'jij' vóór het werkwoord? Dan stam + t: jij vindt." },
  { zin: "Het meisje ___ de kat uit de boom.", inf: "redden", tijd: "tt", vorm: "redt" },
  { zin: "De burgemeester ___ morgen de nieuwe brug.", inf: "openen", tijd: "tt", vorm: "opent" },
  { zin: "___ jij het ook zo warm hier?", inf: "vinden", tijd: "tt", vorm: "Vind" },
  { zin: "Mijn opa ___ al vijftig jaar in hetzelfde huis.", inf: "wonen", tijd: "tt", vorm: "woont" },
  { zin: "Het regenwater ___ door de goot naar beneden.", inf: "stromen", tijd: "tt", vorm: "stroomt" },
  { zin: "Zij ___ het team naar de finale.", inf: "leiden", tijd: "tt", vorm: "leidt" },
  { zin: "Hij ___ zijn vinger aan de hete pan.", inf: "branden", tijd: "tt", vorm: "brandt" },
  { zin: "De kapper ___ mijn haar elke maand.", inf: "knippen", tijd: "tt", vorm: "knipt" },
  { zin: "Jij ___ later vast een goede kok.", inf: "worden", tijd: "tt", vorm: "wordt" },
  { zin: "De trein ___ om acht uur precies.", inf: "vertrekken", tijd: "tt", vorm: "vertrekt" },
  { zin: "Mijn tante ___ haar huis aan toeristen.", inf: "verhuren", tijd: "tt", vorm: "verhuurt" },
  { zin: "De hond ___ nooit, hij blaft alleen.", inf: "bijten", tijd: "tt", vorm: "bijt" },
  { zin: "Ik ___ het jammer dat het feest niet doorgaat.", inf: "vinden", tijd: "tt", vorm: "vind" },
  { zin: "Zij ___ de sommen altijd heel netjes.", inf: "berekenen", tijd: "tt", vorm: "berekent" },
  { zin: "De conciërge ___ de deur om vijf uur.", inf: "sluiten", tijd: "tt", vorm: "sluit" },

  // □ verleden tijd
  { zin: "De klant ___ beleefd naar de openingstijden.", inf: "informeren", tijd: "vt", vorm: "informeerde" },
  { zin: "De gemeente ___ vorig jaar de weg naar het dorp.", inf: "verbreden", tijd: "vt", vorm: "verbreedde", tip: "Stam verbreed + de = verbreedde, met twee d's." },
  { zin: "Opa ___ vroeger pijp, maar hij is gestopt.", inf: "roken", tijd: "vt", vorm: "rookte" },
  { zin: "Wij ___ gisteren in de stromende regen naar school.", inf: "fietsen", tijd: "vt", vorm: "fietsten" },
  { zin: "Zij ___ de prijzen van drie winkels.", inf: "vergelijken", tijd: "vt", vorm: "vergeleek", tip: "Sterk werkwoord: vergelijken → vergeleek (klinker verandert)." },
  { zin: "De kinderen ___ een half uur op de bus.", inf: "wachten", tijd: "vt", vorm: "wachtten", tip: "Stam wacht + ten = wachtten, met twee t's (meervoud)." },
  { zin: "Hij ___ urenlang over zijn nieuwe game.", inf: "praten", tijd: "vt", vorm: "praatte", tip: "Stam praat + te = praatte, met twee t's." },
  { zin: "Mijn moeder ___ dat ze de snelste van het gezin was.", inf: "bewijzen", tijd: "vt", vorm: "bewees", tip: "Sterk werkwoord: bewijzen → bewees." },
  { zin: "De reddingsbrigade ___ de zwemmer uit de golven.", inf: "redden", tijd: "vt", vorm: "redde" },
  { zin: "Ik ___ een pakketje, maar het kwam niet.", inf: "verwachten", tijd: "vt", vorm: "verwachtte", tip: "Stam verwacht + te = verwachtte." },
  { zin: "De leerlingen ___ blaadjes voor het herfstwerkstuk.", inf: "verzamelen", tijd: "vt", vorm: "verzamelden" },
  { zin: "Het ___ vorige week dat de stroom uitviel.", inf: "gebeuren", tijd: "vt", vorm: "gebeurde" },
  { zin: "De kok ___ de soep en deed er zout bij.", inf: "proeven", tijd: "vt", vorm: "proefde", tip: "Stam proef (v wordt f); f staat in 't kofschip? Nee — het gaat om de klank vóór -en: proeVen, dus -de." },
  { zin: "Oma ___ een sjaal voor de winter.", inf: "breien", tijd: "vt", vorm: "breide" },
  { zin: "De boer ___ elke ochtend om zes uur de koeien.", inf: "melken", tijd: "vt", vorm: "molk", ook: ["melkte"], tip: "Sterk werkwoord: melken → molk (melkte mag ook)." },
  { zin: "Wij ___ na een lange vlucht op Schiphol.", inf: "landen", tijd: "vt", vorm: "landden", tip: "Stam land + den = landden, met twee d's." },
  { zin: "Mijn broer ___ gisteravond urenlang door de stad.", inf: "zwerven", tijd: "vt", vorm: "zwierf", tip: "Sterk werkwoord: zwerven → zwierf." },
  { zin: "De juf ___ de klas in vier groepjes.", inf: "verdelen", tijd: "vt", vorm: "verdeelde" },
  { zin: "Zij ___ meteen op mijn bericht.", inf: "antwoorden", tijd: "vt", vorm: "antwoordde", tip: "Stam antwoord + de = antwoordde." },
  { zin: "De kinderen ___ om de grap van de meester.", inf: "lachen", tijd: "vt", vorm: "lachten" },
  { zin: "De storm ___ een deel van het strandpaviljoen.", inf: "verwoesten", tijd: "vt", vorm: "verwoestte", tip: "Stam verwoest + te = verwoestte." },
  { zin: "Ik ___ even uit op het bankje in het park.", inf: "rusten", tijd: "vt", vorm: "rustte" },
  { zin: "Hij ___ elke week van plan.", inf: "veranderen", tijd: "vt", vorm: "veranderde" },
  { zin: "De hond ___ de hele nacht door.", inf: "blaffen", tijd: "vt", vorm: "blafte" },
  { zin: "De koks ___ het eten voordat het naar de gasten ging.", inf: "proeven", tijd: "vt", vorm: "proefden" },
  { zin: "Zij ___ gisteren tien euro op het schoolplein.", inf: "vinden", tijd: "vt", vorm: "vond", tip: "Sterk werkwoord: vinden → vond." },

  // △ voltooid deelwoord
  { zin: "De zwemmer heeft de sterke stroming ___.", inf: "overleven", tijd: "vd", vorm: "overleefd", tip: "Geen ge- (het begint met over- dat hier onbeklemtoond is); stam overleef + d, want leVen: v is niet 't kofschip." },
  { zin: "Wij hebben de hele middag in het park ___.", inf: "voetballen", tijd: "vd", vorm: "gevoetbald" },
  { zin: "Mijn vader heeft de schuur groen ___.", inf: "verven", tijd: "vd", vorm: "geverfd", tip: "Stam verf + d: kijk naar verVen, de v is niet 't kofschip." },
  { zin: "De klas heeft een lied voor de juf ___.", inf: "oefenen", tijd: "vd", vorm: "geoefend" },
  { zin: "Heb jij je huiswerk al ___?", inf: "maken", tijd: "vd", vorm: "gemaakt" },
  { zin: "De kat heeft de melk in één keer ___.", inf: "opdrinken", tijd: "vd", vorm: "opgedronken", tip: "Scheidbaar werkwoord: op + ge + dronken." },
  { zin: "Ik heb mijn sleutels overal ___.", inf: "zoeken", tijd: "vd", vorm: "gezocht", tip: "Sterk werkwoord: zoeken → gezocht." },
  { zin: "De brandweer heeft het vuur snel ___.", inf: "blussen", tijd: "vd", vorm: "geblust" },
  { zin: "Zij heeft haar oma een lange brief ___.", inf: "schrijven", tijd: "vd", vorm: "geschreven" },
  { zin: "De gemeente heeft de speeltuin helemaal ___.", inf: "vernieuwen", tijd: "vd", vorm: "vernieuwd", tip: "Begint met ver-: geen ge- ervoor." },
  { zin: "Wij hebben de auto vanmorgen ___.", inf: "wassen", tijd: "vd", vorm: "gewassen" },
  { zin: "Hij heeft zijn broek ___ bij het klimmen.", inf: "scheuren", tijd: "vd", vorm: "gescheurd" },
  { zin: "De leerlingen hebben een kaart voor de zieke meester ___.", inf: "versturen", tijd: "vd", vorm: "verstuurd" },
  { zin: "Mijn zus heeft haar kamer eindelijk ___.", inf: "opruimen", tijd: "vd", vorm: "opgeruimd" },
  { zin: "De koks hebben het eten ___ voordat het naar de gasten ging.", inf: "proeven", tijd: "vd", vorm: "geproefd" },
  { zin: "Het meisje heeft de puzzel in tien minuten ___.", inf: "oplossen", tijd: "vd", vorm: "opgelost" },
  { zin: "Wij hebben het feest tot laat ___.", inf: "vieren", tijd: "vd", vorm: "gevierd" },
  { zin: "De jongen heeft de bal in de sloot ___.", inf: "gooien", tijd: "vd", vorm: "gegooid" },
  { zin: "Heb je de deur goed ___?", inf: "sluiten", tijd: "vd", vorm: "gesloten" },
  { zin: "Mijn ouders hebben een nieuwe koelkast ___.", inf: "bestellen", tijd: "vd", vorm: "besteld", tip: "Begint met be-: geen ge- ervoor." },
  { zin: "De meester heeft de som op het bord ___.", inf: "voordoen", tijd: "vd", vorm: "voorgedaan" },
  { zin: "Ik heb saus op mijn shirt ___.", inf: "morsen", tijd: "vd", vorm: "gemorst" },
  { zin: "De vogels hebben een nest in de boom ___.", inf: "bouwen", tijd: "vd", vorm: "gebouwd" },
  { zin: "Zij heeft de hele nacht ___.", inf: "dansen", tijd: "vd", vorm: "gedanst" },
  { zin: "De directeur heeft de brief ___.", inf: "ondertekenen", tijd: "vd", vorm: "ondertekend", tip: "Onder- is hier onbeklemtoond: geen ge- ervoor." },
  { zin: "Wij hebben onze fietsen bij de ingang ___.", inf: "neerzetten", tijd: "vd", vorm: "neergezet" },

  // ▢ bijvoeglijk gebruikt voltooid deelwoord
  { zin: "De ___ rijst gooiden we weg.", inf: "aanbranden", tijd: "bvd", vorm: "aangebrande" },
  { zin: "Dit is de meest ___ video van het jaar.", inf: "bekijken", tijd: "bvd", vorm: "bekeken", tip: "Sterk voltooid deelwoord op -en krijgt geen extra e: de bekeken video." },
  { zin: "De ___ sneeuw liep de goot in.", inf: "smelten", tijd: "bvd", vorm: "gesmolten" },
  { zin: "De door de storm ___ schuur wordt gesloopt.", inf: "verwoesten", tijd: "bvd", vorm: "verwoeste", tip: "Voltooid deelwoord verwoest + e = verwoeste (één t)." },
  { zin: "De ___ taart was binnen tien minuten op.", inf: "meebrengen", tijd: "bvd", vorm: "meegebrachte" },
  { zin: "De ___ walvis werd door vrijwilligers geholpen.", inf: "stranden", tijd: "bvd", vorm: "gestrande", tip: "Voltooid deelwoord gestrand + e = gestrande (één d)." },
  { zin: "Het ___ glas lag over de hele vloer.", inf: "breken", tijd: "bvd", vorm: "gebroken" },
  { zin: "De ___ koekjes rookten nog na.", inf: "verbranden", tijd: "bvd", vorm: "verbrande" },
  { zin: "De pas ___ muur mag je niet aanraken.", inf: "verven", tijd: "bvd", vorm: "geverfde" },
  { zin: "Wij aten de ___ aardappels met een saus.", inf: "bakken", tijd: "bvd", vorm: "gebakken" },
  { zin: "De ___ tas lag nog op het schoolplein.", inf: "vergeten", tijd: "bvd", vorm: "vergeten" },
  { zin: "Het ___ horloge kwam na een week terug.", inf: "verliezen", tijd: "bvd", vorm: "verloren" },
  { zin: "De ___ eieren zijn voor het ontbijt.", inf: "koken", tijd: "bvd", vorm: "gekookte" },
  { zin: "De ___ fiets rijdt weer als nieuw.", inf: "repareren", tijd: "bvd", vorm: "gerepareerde" },
  { zin: "De ___ cadeaus liggen klaar op tafel.", inf: "uitkiezen", tijd: "bvd", vorm: "uitgekozen" },
  { zin: "De ___ worst komt van de slager op de hoek.", inf: "roken", tijd: "bvd", vorm: "gerookte" },
  { zin: "Het ___ plaatje hangt nu boven de bank.", inf: "vergroten", tijd: "bvd", vorm: "vergrote", tip: "Vergroot + e: de dubbele o wordt enkel, want de lettergreep is open: ver-gro-te." },
  { zin: "De ___ vrachtwagen reed het terrein af.", inf: "laden", tijd: "bvd", vorm: "geladen" },
  { zin: "De ___ hut in de tuin is bijna klaar.", inf: "bouwen", tijd: "bvd", vorm: "gebouwde" },
  { zin: "Het ___ fietspad is veel veiliger.", inf: "verbreden", tijd: "bvd", vorm: "verbrede", tip: "Verbreed + e: dubbele e wordt enkel: ver-bre-de." },
  { zin: "De ___ spullen leverden honderd euro op.", inf: "verkopen", tijd: "bvd", vorm: "verkochte" },
  { zin: "De ___ brief ligt in de la.", inf: "ondertekenen", tijd: "bvd", vorm: "ondertekende" },
  { zin: "De ___ groenten liggen in de vergiet.", inf: "spoelen", tijd: "bvd", vorm: "gespoelde" },
  { zin: "De ___ hond kwam kwispelend terug.", inf: "redden", tijd: "bvd", vorm: "geredde", tip: "Gered + e: de d wordt dubbel, anders zeg je 'gerede'." },
];

// ── kiezen ─────────────────────────────────────────────────────
const KEY_RECENT = "lk_ww_recent";
function schud(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

/** n zinnen, evenwichtig over de gekozen vormen; recent gehad wordt gemeden */
export function kiesTest(n = 20, vormen = ["tt", "vt", "vd", "bvd"]) {
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem(KEY_RECENT) || "[]"); } catch { /* */ }
  const perVorm = Math.max(1, Math.round(n / vormen.length));
  let uit = [];
  for (const v of vormen) {
    const alle = ZINNEN.filter((z) => z.tijd === v);
    const vers = alle.filter((z) => !recent.includes(z.zin));
    const pool = vers.length >= perVorm ? vers : alle;
    uit = uit.concat(schud(pool).slice(0, perVorm));
  }
  uit = schud(uit).slice(0, n);
  try { localStorage.setItem(KEY_RECENT, JSON.stringify(uit.map((z) => z.zin).concat(recent).slice(0, 60))); } catch { /* */ }
  return uit.map((z) => ({ ...z }));
}

// ── vervoegen (voor de werkwoorden van school) ─────────────────
// Regelmatige werkwoorden via de spellingregels; sterke/onregelmatige uit de tabel.
const STERK = {
  // inf: [hij (tt), vt enkelvoud, vt meervoud, vd]
  lopen: ["loopt", "liep", "liepen", "gelopen"], zien: ["ziet", "zag", "zagen", "gezien"], komen: ["komt", "kwam", "kwamen", "gekomen"],
  gaan: ["gaat", "ging", "gingen", "gegaan"], doen: ["doet", "deed", "deden", "gedaan"], eten: ["eet", "at", "aten", "gegeten"],
  drinken: ["drinkt", "dronk", "dronken", "gedronken"], vinden: ["vindt", "vond", "vonden", "gevonden"], beginnen: ["begint", "begon", "begonnen", "begonnen"],
  schrijven: ["schrijft", "schreef", "schreven", "geschreven"], lezen: ["leest", "las", "lazen", "gelezen"], geven: ["geeft", "gaf", "gaven", "gegeven"],
  nemen: ["neemt", "nam", "namen", "genomen"], krijgen: ["krijgt", "kreeg", "kregen", "gekregen"], spreken: ["spreekt", "sprak", "spraken", "gesproken"],
  breken: ["breekt", "brak", "braken", "gebroken"], rijden: ["rijdt", "reed", "reden", "gereden"], kijken: ["kijkt", "keek", "keken", "gekeken"],
  blijven: ["blijft", "bleef", "bleven", "gebleven"], vliegen: ["vliegt", "vloog", "vlogen", "gevlogen"], zwemmen: ["zwemt", "zwom", "zwommen", "gezwommen"],
  zingen: ["zingt", "zong", "zongen", "gezongen"], springen: ["springt", "sprong", "sprongen", "gesprongen"], vallen: ["valt", "viel", "vielen", "gevallen"],
  vangen: ["vangt", "ving", "vingen", "gevangen"], houden: ["houdt", "hield", "hielden", "gehouden"], slapen: ["slaapt", "sliep", "sliepen", "geslapen"],
  staan: ["staat", "stond", "stonden", "gestaan"], vergeten: ["vergeet", "vergat", "vergaten", "vergeten"], vertrekken: ["vertrekt", "vertrok", "vertrokken", "vertrokken"],
  worden: ["wordt", "werd", "werden", "geworden"], zijn: ["is", "was", "waren", "geweest"], hebben: ["heeft", "had", "hadden", "gehad"],
  zoeken: ["zoekt", "zocht", "zochten", "gezocht"], kopen: ["koopt", "kocht", "kochten", "gekocht"], verkopen: ["verkoopt", "verkocht", "verkochten", "verkocht"],
  brengen: ["brengt", "bracht", "brachten", "gebracht"], denken: ["denkt", "dacht", "dachten", "gedacht"], weten: ["weet", "wist", "wisten", "geweten"],
  zitten: ["zit", "zat", "zaten", "gezeten"], liggen: ["ligt", "lag", "lagen", "gelegen"], lachen: ["lacht", "lachte", "lachten", "gelachen"],
  sluiten: ["sluit", "sloot", "sloten", "gesloten"], schieten: ["schiet", "schoot", "schoten", "geschoten"], kiezen: ["kiest", "koos", "kozen", "gekozen"],
  verliezen: ["verliest", "verloor", "verloren", "verloren"], bieden: ["biedt", "bood", "boden", "geboden"], trekken: ["trekt", "trok", "trokken", "getrokken"],
  helpen: ["helpt", "hielp", "hielpen", "geholpen"], sterven: ["sterft", "stierf", "stierven", "gestorven"], zwerven: ["zwerft", "zwierf", "zwierven", "gezworven"],
  bewijzen: ["bewijst", "bewees", "bewezen", "bewezen"], vergelijken: ["vergelijkt", "vergeleek", "vergeleken", "vergeleken"], smelten: ["smelt", "smolt", "smolten", "gesmolten"],
  bakken: ["bakt", "bakte", "bakten", "gebakken"], wassen: ["wast", "waste", "wasten", "gewassen"], laden: ["laadt", "laadde", "laadden", "geladen"],
  bekijken: ["bekijkt", "bekeek", "bekeken", "bekeken"], overleven: ["overleeft", "overleefde", "overleefden", "overleefd"], gebeuren: ["gebeurt", "gebeurde", "gebeurden", "gebeurd"],
};
const KOFSCHIP = ["t", "k", "f", "s", "ch", "p"];
const GEEN_GE = ["be", "ge", "ver", "ont", "her", "er"];

/** stam volgens de spellingregels (lopen → loop, bakken → bak, leven → leef, reizen → reis,
 *  tekenen → teken, luisteren → luister, proberen → probeer) */
// -eren: klemtoon is niet aan de spelling te zien. Standaard: één klinker + één medeklinker vóór -er = klemtoon op -eer (proberen, studeren, noteren, repareren); medeklinkercluster of tweeklank ervoor = stomme e (luisteren, kleuteren, bibberen). Uitzonderingen in twee lijstjes; de ouder kan de vormen altijd zelf aanpassen.
const SCHWA_ER = ["leveren", "hameren", "kleveren", "zeveren", "verzekeren", "verbeteren", "kieperen", "wapperen", "bibberen", "flonkeren", "beheren"];
const KLEMTOON_ER = ["informeren", "trakteren", "sorteren", "marcheren", "protesteren", "presenteren", "concentreren", "accepteren", "exporteren", "importeren", "transporteren", "monteren", "demonstreren", "registreren", "respecteren", "corrigeren", "reserveren", "observeren", "serveren", "conserveren", "waarderen", "passeren", "parkeren", "adverteren", "arresteren", "investeren", "testeren", "starten", "installeren", "kalmeren", "halveren", "verkeren", "fungeren", "dirigeren"];
export function stamVan(inf) {
  const lower = inf.toLowerCase();
  let b = lower.replace(/en$/, "");
  if (!b) return inf;
  if (/(bb|dd|ff|gg|kk|ll|mm|nn|pp|rr|ss|tt)$/.test(b)) b = b.slice(0, -1);
  else {
    const m = b.match(/(^|[^aeiouy])([aeou])([^aeiouy])$/);
    if (m) {
      const klinker = m[2], voor = b.slice(0, -2);
      let verdubbel = true;
      if (klinker === "e") {
        const eind = b.slice(-2);
        if (eind === "el" || eind === "en" || eind === "em") verdubbel = voor.replace(/^(be|ge|ver|ont|her|er)/, "").search(/[aeiouy]/) < 0; // spelen → speel, tekenen → teken
        else if (eind === "er") {
          if (KLEMTOON_ER.includes(lower)) verdubbel = true;
          else if (SCHWA_ER.includes(lower)) verdubbel = false;
          else verdubbel = !/[^aeiouy]{2}$/.test(voor) && !/(aa|ee|oo|uu|eu|ui|oe|ie|ei|ij|ou|au)[^aeiouy]$/.test(voor); // proberen → probeer · luisteren → luister · kleuteren → kleuter
        }
      }
      if (verdubbel) b = b.slice(0, -1) + klinker + b.slice(-1);
    }
  }
  if (b.endsWith("v")) b = b.slice(0, -1) + "f";
  if (b.endsWith("z")) b = b.slice(0, -1) + "s";
  return b;
}
function kofschip(inf) {
  const kern = inf.toLowerCase().replace(/en$/, "");
  return KOFSCHIP.some((k) => kern.endsWith(k)) && !/[vz]$/.test(kern);
}
/** alle vormen van een werkwoord; onregelmatig via de tabel, anders via de regels */
export function vervoeg(infRuw) {
  const inf = String(infRuw || "").trim().toLowerCase();
  if (!/^[a-zë]{3,}en$/.test(inf)) return null;
  if (STERK[inf]) { const [tt, vt, vtm, vd] = STERK[inf]; return { inf, tt, vt, vtm, vd, bvd: bvdVan(vd), sterk: true }; }
  const stam = stamVan(inf);
  const t = kofschip(inf) ? "t" : "d";
  const tt = stam.endsWith("t") ? stam : stam + "t";
  const vt = stam + t + "e";
  const vtm = stam + t + "en";
  const geenGe = GEEN_GE.some((p) => inf.startsWith(p) && inf.length > p.length + 3);
  // ge- vóór een klinker krijgt een trema bij i, e en u: geïnformeerd, geëindigd, geüpload (niet bij a/o: geaccepteerd, geopend)
  const ge = geenGe ? "" : ({ i: "geï", e: "geë", u: "geü" }[stam[0]] || "ge");
  const rest = ge.length > 2 && ge !== "ge" ? stam.slice(1) : stam;
  let vd = ge + rest + (stam.endsWith(t) ? "" : t);
  if (stam.endsWith("d") && t === "d") vd = ge + rest; // redden → gered
  return { inf, tt, vt, vtm, vd, bvd: bvdVan(vd), sterk: false };
}
function bvdVan(vd) {
  if (vd.endsWith("en")) return vd;                                   // gebakken → gebakken
  const m = vd.match(/([aeou])\1([td])$/);                            // vergroot → vergrote
  if (m) return vd.slice(0, -3) + m[1] + m[2] + "e";
  if (/[aeiou]d$/.test(vd) && !/[aeiou]{2}d$/.test(vd)) return vd + "de"; // gered → geredde
  return vd + "e";
}

// Oefenzinnen voor eigen werkwoorden (geen bijvoeglijk gebruik: dat past niet bij elk werkwoord).
const FRAMES = {
  tt: ["Hij ___ elke dag.", "Zij ___ altijd heel snel.", "Mijn buurman ___ iedere ochtend.", "Het kind ___ graag."],
  vt: ["Gisteren ___ hij de hele middag.", "Vorige week ___ zij twee keer.", "Mijn opa ___ vroeger elke dag.", "Toen ___ het meisje opeens."],
  vd: ["Hij heeft gisteren lang ___.", "Wij hebben het al ___.", "Zij heeft het vanmorgen ___.", "Heb jij ook ___?"],
};
export function itemsVoorWerkwoorden(infs, vormen = ["tt", "vt", "vd"]) {
  const uit = [];
  infs.forEach((raw, i) => {
    const v = vervoeg(raw);
    if (!v) return;
    vormen.forEach((tijd, j) => {
      const frame = FRAMES[tijd][(i + j) % FRAMES[tijd].length];
      const vorm = tijd === "vt" && /^(Wij|Zij .*twee)/.test(frame) ? v.vt : v[tijd];
      uit.push({ zin: frame, inf: v.inf, tijd, vorm, eigen: true, sterk: v.sterk });
    });
  });
  return schud(uit);
}
export function parseWerkwoorden(tekst) {
  const uit = [];
  for (let r of String(tekst || "").split(/[\n,;]+/)) {
    r = r.replace(/^\s*(\d+[.)]|[-•*])\s*/, "").trim().toLowerCase();
    if (!r || /\s/.test(r) || r.length > 25) continue;
    if (!r.endsWith("en")) continue;
    if (!uit.includes(r)) uit.push(r);
  }
  return uit.slice(0, 30);
}
