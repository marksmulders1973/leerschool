// Topografie-check vragenbank (groep 6-8). Gedeeld door:
//  • src/components/TopografieCheck.jsx — de 10-vragen-toets op de wereldbol-reclame
//  • api/send-oefenblad.js — bouwt het persoonlijke oefenblad-mailtje (uitslag +
//    10 vragen + uitleg + antwoordsleutel voor de ouder)
// ID-gebaseerd: de client stuurt alléén de id's van de fout-beantwoorde vragen;
// de server zoekt de inhoud op (geen door de gebruiker aangeleverde mail-tekst).
//
// Dit is het EERSTE vak van de "Leerkwartier-ouder-check". De motor is bewust
// vak-onafhankelijk (zie api/send-oefenblad.js → bouwOefenbladHtml): later pluggen
// rekenen/taal/etc. in met hun eigen bank in hetzelfde formaat.
//
// Feiten met zorg gecontroleerd; de "lastige hoofdsteden" (Bern, Canberra, Ottawa,
// Brasília) zijn bewust gekozen omdat kinderen daar het vaakst de mist mee in gaan.

export const TOPO_VRAGEN = [
  { id: "hs-frankrijk",   vraag: "Wat is de hoofdstad van Frankrijk?",            opties: ["Parijs", "Lyon", "Marseille", "Bordeaux"],                antwoord: 0, goed: "Parijs",          uitleg: "Parijs is de grootste stad én de hoofdstad van Frankrijk — bekend van de Eiffeltoren.", regio: "Europa" },
  { id: "hs-duitsland",   vraag: "Wat is de hoofdstad van Duitsland?",            opties: ["München", "Berlijn", "Hamburg", "Frankfurt"],             antwoord: 1, goed: "Berlijn",         uitleg: "Berlijn ligt in het oosten van Duitsland en is sinds de hereniging (1990) weer de hoofdstad.", regio: "Europa" },
  { id: "hs-spanje",      vraag: "Wat is de hoofdstad van Spanje?",               opties: ["Barcelona", "Sevilla", "Madrid", "Valencia"],             antwoord: 2, goed: "Madrid",          uitleg: "Madrid ligt precies in het midden van Spanje. Barcelona is groot maar niet de hoofdstad.", regio: "Europa" },
  { id: "hs-italie",      vraag: "Wat is de hoofdstad van Italië?",               opties: ["Milaan", "Rome", "Napels", "Turijn"],                     antwoord: 1, goed: "Rome",            uitleg: "Rome is de hoofdstad — met het Colosseum en Vaticaanstad er middenin.", regio: "Europa" },
  { id: "hs-vk",          vraag: "Wat is de hoofdstad van het Verenigd Koninkrijk (Engeland)?", opties: ["Manchester", "Londen", "Liverpool", "Birmingham"], antwoord: 1, goed: "Londen", uitleg: "Londen, aan de rivier de Theems — bekend van de Big Ben en de dubbeldekkers.", regio: "Europa" },
  { id: "hs-portugal",    vraag: "Wat is de hoofdstad van Portugal?",             opties: ["Porto", "Lissabon", "Faro", "Braga"],                     antwoord: 1, goed: "Lissabon",        uitleg: "Lissabon ligt aan de Atlantische Oceaan. Porto is de tweede stad (van de portwijn).", regio: "Europa" },
  { id: "hs-zwitserland", vraag: "Wat is de hoofdstad van Zwitserland?",          opties: ["Zürich", "Genève", "Bern", "Basel"],                      antwoord: 2, goed: "Bern",            uitleg: "Strikvraag! Niet Zürich of Genève (die zijn groter), maar Bern is de hoofdstad.", regio: "Europa" },
  { id: "hs-belgie",      vraag: "Wat is de hoofdstad van België?",               opties: ["Antwerpen", "Brussel", "Gent", "Brugge"],                 antwoord: 1, goed: "Brussel",         uitleg: "Brussel is ook de hoofdstad van de Europese Unie (EU).", regio: "Europa" },
  { id: "hs-australie",   vraag: "Wat is de hoofdstad van Australië?",            opties: ["Sydney", "Melbourne", "Canberra", "Perth"],               antwoord: 2, goed: "Canberra",        uitleg: "Sydney is het grootst, maar Canberra werd gekozen om de ruzie tussen Sydney en Melbourne te beslechten.", regio: "Oceanië" },
  { id: "hs-vs",          vraag: "Wat is de hoofdstad van de Verenigde Staten?",  opties: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],  antwoord: 1, goed: "Washington D.C.", uitleg: "New York is het bekendst, maar Washington D.C. is de hoofdstad — met het Witte Huis.", regio: "Noord-Amerika" },
  { id: "hs-canada",      vraag: "Wat is de hoofdstad van Canada?",               opties: ["Toronto", "Vancouver", "Ottawa", "Montreal"],             antwoord: 2, goed: "Ottawa",          uitleg: "Toronto is groter, maar Ottawa is de hoofdstad van Canada.", regio: "Noord-Amerika" },
  { id: "hs-brazilie",    vraag: "Wat is de hoofdstad van Brazilië?",             opties: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],    antwoord: 2, goed: "Brasília",        uitleg: "Rio is beroemder, maar Brasília werd in 1960 speciaal als hoofdstad in het binnenland gebouwd.", regio: "Zuid-Amerika" },
  { id: "hs-japan",       vraag: "Wat is de hoofdstad van Japan?",                opties: ["Osaka", "Tokio", "Kyoto", "Nagoya"],                      antwoord: 1, goed: "Tokio",           uitleg: "Tokio is een van de grootste steden ter wereld én de hoofdstad van Japan.", regio: "Azië" },
  { id: "hs-egypte",      vraag: "Wat is de hoofdstad van Egypte?",               opties: ["Caïro", "Alexandrië", "Luxor", "Gizeh"],                  antwoord: 0, goed: "Caïro",           uitleg: "Caïro ligt aan de Nijl, vlak bij de piramides van Gizeh.", regio: "Afrika" },
  { id: "wd-egypte",      vraag: "In welk werelddeel ligt Egypte?",               opties: ["Azië", "Afrika", "Europa", "Oceanië"],                    antwoord: 1, goed: "Afrika",          uitleg: "Egypte ligt in het noordoosten van Afrika (Nijl + piramides).", regio: "Afrika" },
  { id: "wd-brazilie",    vraag: "In welk werelddeel ligt Brazilië?",             opties: ["Noord-Amerika", "Zuid-Amerika", "Afrika", "Azië"],        antwoord: 1, goed: "Zuid-Amerika",    uitleg: "Brazilië is het grootste land van Zuid-Amerika (met het Amazoneregenwoud).", regio: "Zuid-Amerika" },
  { id: "wd-japan",       vraag: "In welk werelddeel ligt Japan?",                opties: ["Azië", "Oceanië", "Europa", "Afrika"],                    antwoord: 0, goed: "Azië",            uitleg: "Japan is een eilandengroep in het oosten van Azië.", regio: "Azië" },
  { id: "wd-australie",   vraag: "In welk werelddeel ligt Australië?",            opties: ["Azië", "Afrika", "Oceanië", "Zuid-Amerika"],              antwoord: 2, goed: "Oceanië",         uitleg: "Australië is het grootste land van werelddeel Oceanië.", regio: "Oceanië" },
  { id: "wd-marokko",     vraag: "In welk werelddeel ligt Marokko?",              opties: ["Europa", "Afrika", "Azië", "Oceanië"],                    antwoord: 1, goed: "Afrika",          uitleg: "Marokko ligt in het noordwesten van Afrika, vlak bij Spanje (Straat van Gibraltar).", regio: "Afrika" },
  { id: "feit-grootste",  vraag: "Wat is het grootste werelddeel?",               opties: ["Afrika", "Azië", "Europa", "Noord-Amerika"],              antwoord: 1, goed: "Azië",            uitleg: "Azië is veruit het grootst én heeft de meeste mensen (China + India samen ~2,8 miljard).", regio: "Wereld" },
  { id: "feit-koudste",   vraag: "Welk werelddeel is het koudst?",                opties: ["Europa", "Antarctica", "Azië", "Zuid-Amerika"],           antwoord: 1, goed: "Antarctica",      uitleg: "Antarctica ligt rond de Zuidpool — een ijswoestijn van -50 tot -80 °C.", regio: "Wereld" },
  { id: "feit-aantal",    vraag: "Hoeveel werelddelen zijn er?",                  opties: ["5", "6", "7", "8"],                                       antwoord: 2, goed: "7",               uitleg: "7: Noord-Amerika, Zuid-Amerika, Europa, Afrika, Azië, Oceanië en Antarctica.", regio: "Wereld" },
];

// Pak n willekeurige vragen (voor de toets).
export function kiesToetsVragen(alle, n = 10) {
  const kopie = [...alle];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie.slice(0, Math.min(n, kopie.length));
}

// Voor het oefenblad: de fout-beantwoorde vragen eerst, daarna aangevuld tot
// `aantal` met andere vragen (zodat de mail altijd een vol blad heeft).
export function bouwOefenbladVragen(foutIds, aantal = 10) {
  const opId = new Map(TOPO_VRAGEN.map((v) => [v.id, v]));
  const fout = (foutIds || []).map((id) => opId.get(id)).filter(Boolean);
  const gekozen = [...fout];
  const gehad = new Set(gekozen.map((v) => v.id));
  for (const v of TOPO_VRAGEN) {
    if (gekozen.length >= aantal) break;
    if (!gehad.has(v.id)) { gekozen.push(v); gehad.add(v.id); }
  }
  return gekozen.slice(0, aantal);
}

export default TOPO_VRAGEN;
