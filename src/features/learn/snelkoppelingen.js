// 🔎 Snelkoppelingen in de zoekbalk (Mark 9 sep 2026: "in de zoekbalk tik ik
// dictee en vind niets … dat geldt vast voor meer losse onderwerpen, maak
// alles vindbaar"). De zoekbalk doorzocht alleen leerpaden; losse pagina's
// (dictee, park, game, toetsen, printbladen, ouder/leerkracht…) waren
// onvindbaar. Deze lijst maakt ze vindbaar op gewone kinder- en ouderwoorden.
// Alleen openbare pagina's — geheime previews (familie, diploma…) staan er
// bewust niet in.

export const SNELKOPPELINGEN = [
  { id: "dictee", emoji: "✍️", label: "Dictee met Charley", uitleg: "Charley zegt een zin, jij schrijft het woord. Spelling oefenen met je oren.", pad: "/dictee",
    woorden: ["dictee", "dictees", "dictée", "diktee", "dikte", "charley", "luisteren en schrijven", "woorden schrijven", "spellingdictee", "woordjes"] },
  { id: "dictees-print", emoji: "🖨️", label: "Dictees om te printen", uitleg: "Voorleesblad voor thuis + invulblad voor het kind, per spellingregel.", pad: "/dictees",
    woorden: ["dictee printen", "dictees", "voorleesblad", "dictee thuis", "printdictee"] },
  { id: "park", emoji: "🐾", label: "Mijn Park", uitleg: "Je eigen 3D-park: bouwen, dieren, leren bij elke plek.", pad: "/dierentuin",
    woorden: ["park", "mijn park", "dierentuin", "zoo", "bouwen", "dieren", "spel", "spelen", "munten", "zeppelin", "vulkaan", "auto", "kabelbaan"] },
  { id: "samen", emoji: "🏫", label: "Samen bouwen met een parkcode", uitleg: "Eén code, iedereen in hetzelfde park. Ook met de hele klas.", pad: "/dierentuin",
    woorden: ["samen", "samen bouwen", "parkcode", "vrienden", "klas park", "samen spelen", "multiplayer", "code park"] },
  { id: "imposter", emoji: "🎮", label: "Wie is de imposter?", uitleg: "Game in het park: taken zijn sommen, één speler doet alsof. ☰ → 🎮.", pad: "/dierentuin",
    woorden: ["imposter", "impostor", "wie is de imposter", "game", "among us", "verrader", "bots", "spelleider"] },
  { id: "doorstroomtoets", emoji: "🎯", label: "Doorstroomtoets oefentoets", uitleg: "Oefentoets in de stijl van de Doorstroomtoets, met uitleg bij elke fout.", pad: "/doorstroomtoets-oefentoets",
    woorden: ["doorstroomtoets", "cito", "citotoets", "eindtoets", "oefentoets", "toets", "groep 8", "iep", "route 8", "schooladvies"] },
  { id: "examens", emoji: "🎓", label: "Echte examens", uitleg: "Authentieke VMBO-examens: oefenen met uitleg of inzien als PDF.", pad: "/examens",
    woorden: ["examen", "examens", "eindexamen", "vmbo", "havo", "vwo", "examenbundel", "pdf", "oude examens"] },
  { id: "vandaag", emoji: "📅", label: "Vraag van de dag", uitleg: "Elke dag één vraag, in een minuut klaar.", pad: "/vandaag",
    woorden: ["vandaag", "vraag van de dag", "dagvraag", "dagelijkse vraag"] },
  { id: "kwartiercheck", emoji: "🧭", label: "Kwartiercheck", uitleg: "In een kwartier zien waar je staat, per onderdeel.", pad: "/kwartiercheck",
    woorden: ["kwartiercheck", "niveau", "waar sta ik", "niveautest", "check", "hoe goed ben ik"] },
  { id: "start", emoji: "🚀", label: "Start-kwartier", uitleg: "Nieuw hier? Begin met een kort kwartier op je eigen niveau.", pad: "/start",
    woorden: ["start", "beginnen", "nieuw", "eerste keer", "hoe begin ik", "starten"] },
  { id: "oefenpakket", emoji: "📦", label: "Oefenpakket (printbaar)", uitleg: "Werkbladen voor thuis, per groep.", pad: "/oefenpakket",
    woorden: ["oefenpakket", "werkblad", "werkbladen", "pakket", "huiswerk", "oefenbladen"] },
  { id: "printen", emoji: "🖨️", label: "Alles om te printen", uitleg: "Tafelbladen, redactiesommen, dictees, leesladder: alles op papier.", pad: "/printen",
    woorden: ["printen", "print", "papier", "printbaar", "uitprinten", "pdf printen"] },
  { id: "leesladder", emoji: "📖", label: "Leesladder", uitleg: "Begrijpend lezen dat klein begint en opbouwt tot toets-lengte.", pad: "/leesladder",
    woorden: ["leesladder", "lezen oefenen", "leesteksten", "begrijpend lezen printen", "leesniveau"] },
  { id: "begrijpend-lezen", emoji: "📚", label: "Begrijpend lezen", uitleg: "Teksten met vragen, op je eigen groep.", pad: "/begrijpend-lezen",
    woorden: ["begrijpend lezen", "tekst begrijpen", "leesvragen", "lezen"] },
  { id: "tafels", emoji: "✖️", label: "Tafels oefenen", uitleg: "Alle tafels, met trucs en tempo.", pad: "/tafels",
    woorden: ["tafels", "tafel", "keersommen", "vermenigvuldigen", "tafel van", "keer"] },
  { id: "tafelbladen", emoji: "🖨️", label: "Tafelbladen (print)", uitleg: "Werkbladen met tafels om te printen.", pad: "/tafelbladen",
    woorden: ["tafelbladen", "tafels printen", "tafelblad"] },
  { id: "redactiesommen", emoji: "🧮", label: "Verhaaltjessommen", uitleg: "Redactiesommen: het verhaal lezen en de som eruit halen.", pad: "/redactiesommen",
    woorden: ["redactiesommen", "verhaaltjessommen", "verhaalsommen", "redactiesom", "sommen met tekst"] },
  { id: "spelling", emoji: "✏️", label: "Spelling", uitleg: "Spellingregels oefenen per groep.", pad: "/spelling",
    woorden: ["spelling", "spellen", "spellingregels", "d of t", "werkwoorden", "werkwoordspelling"] },
  { id: "woordenschat", emoji: "🔤", label: "Woordenschat", uitleg: "Moeilijke woorden leren met betekenis en zin.", pad: "/woordenschat",
    woorden: ["woordenschat", "moeilijke woorden", "betekenis", "woorden leren", "synoniemen"] },
  { id: "brugklas", emoji: "🎒", label: "Brugklas-bundel", uitleg: "Oefenbundel voor klas 1 havo/vwo.", pad: "/brugklas",
    woorden: ["brugklas", "klas 1", "middelbare school", "eerste klas", "voortgezet onderwijs"] },
  { id: "weekschema", emoji: "🗓️", label: "Weekschema voor op de koelkast", uitleg: "Een kwartier per dag, in een printbaar schema.", pad: "/weekschema",
    woorden: ["weekschema", "koelkast", "planning", "schema", "rooster", "weekplanning"] },
  { id: "mijn", emoji: "🏠", label: "Mijn pagina", uitleg: "Je eigen plek: poppetje, voortgang, dictee, park.", pad: "/mijn",
    woorden: ["mijn pagina", "profiel", "avatar", "poppetje", "mijn plek", "account", "naam"] },
  { id: "voortgang", emoji: "📈", label: "Mijn voortgang", uitleg: "Wat je al kunt en waar je nog aan werkt.", pad: "/voortgang",
    woorden: ["voortgang", "resultaten", "score", "scores", "hoe ver ben ik", "wat kan ik al"] },
  { id: "kampioenen", emoji: "🏆", label: "Kampioenen", uitleg: "Wie oefende het meest deze week.", pad: "/kampioenen",
    woorden: ["kampioenen", "kampioen", "ranglijst", "scorebord", "wie is de beste", "top"] },
  { id: "herkansing", emoji: "🔁", label: "Herkansing", uitleg: "Je fouten van eerder nog een keer.", pad: "/herkansing",
    woorden: ["herkansing", "fouten", "opnieuw", "nog een keer", "foute vragen"] },
  { id: "leerlijn", emoji: "🧵", label: "Leerlijn", uitleg: "Alles op volgorde, van groep 3 tot examen.", pad: "/leerlijn",
    woorden: ["leerlijn", "volgorde", "curriculum", "overzicht", "wat moet ik leren"] },
  { id: "ouder", emoji: "👪", label: "Voor thuis (ouder of verzorger)", uitleg: "Meekijken, klaarzetten, weekrapport.", pad: "/ouder",
    woorden: ["ouder", "ouders", "verzorger", "thuis", "meekijken", "weekrapport", "klaarzetten", "papa", "mama", "opa", "oma"] },
  { id: "leerkracht", emoji: "🧑‍🏫", label: "Voor de leerkracht", uitleg: "Werkblad, toets maken, klaarzetten, parkcode voor de klas.", pad: "/leerkracht",
    woorden: ["leerkracht", "juf", "meester", "school", "klas", "docent", "toets maken", "klassen", "leraar"] },
  { id: "tips", emoji: "💡", label: "Wensenbord", uitleg: "Een wens, tip of fout melden. De maker antwoordt.", pad: "/tips",
    woorden: ["tip", "tips", "wens", "wensen", "wensenbord", "idee", "fout melden", "feedback", "klacht", "melden"] },
  { id: "maatje", emoji: "🐶", label: "Maatje in je broekzak", uitleg: "Praten met je maatje, dat groeit als jij leert.", pad: "/maatje",
    woorden: ["maatje", "buddy", "praten", "hond", "kat", "huisdier"] },
  { id: "vonk", emoji: "💡", label: "Hulp bij deze vraag (Vonk)", uitleg: "Snap je een vraag niet? Vonk legt 'm uit in drie stappen.", pad: "/vonk",
    woorden: ["vonk", "hulp", "ai", "uitleg", "snap ik niet", "help", "uitleggen"] },
  { id: "rondleiding", emoji: "🧭", label: "Rondleiding", uitleg: "In twee minuten zien wat er allemaal is.", pad: "/rondleiding",
    woorden: ["rondleiding", "wat is er", "uitleg app", "hoe werkt het", "help me"] },
  { id: "parken", emoji: "🌍", label: "Parken van anderen", uitleg: "Kijk bij andere kinderen in het park.", pad: "/parken",
    woorden: ["parken", "galerij", "andere parken", "kijken bij anderen"] },
];

const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9àâäéèêëïîôöùûüç ]/g, " ").replace(/\s+/g, " ").trim();

/** snelkoppelingen die bij de zoektekst passen (max 3), beste eerst */
export function zoekSnelkoppelingen(query) {
  const q = norm(query);
  if (q.length < 2) return [];
  const qWoorden = q.split(" ").filter((w) => w.length >= 2);
  const uit = [];
  for (const s of SNELKOPPELINGEN) {
    let score = 0;
    for (const w of s.woorden) {
      const nw = norm(w);
      if (nw === q) score = Math.max(score, 100);
      else if (nw.startsWith(q) || q.startsWith(nw)) score = Math.max(score, 80);
      else if (q.includes(nw)) score = Math.max(score, 60);
      else if (qWoorden.some((qw) => qw.length >= 4 && (nw.includes(qw) || qw.includes(nw)))) score = Math.max(score, 30);
    }
    if (norm(s.label).includes(q)) score = Math.max(score, 50);
    if (score > 0) uit.push({ ...s, score });
  }
  return uit.sort((a, b) => b.score - a.score).slice(0, 3);
}
