// Leerpad: Opdrachtwoorden — wat moet ik doen op mijn blad? (nieuwkomers, trede 3 "de brug").
// Gebouwd 3 okt 2026 (Mark: "overgangsbrug van nieuwkomer-niveau naar de gewone app"). De sprong
// naar de gewone app zit vooral in de taal van opdrachten: omcirkel, onderstreep, vul in, kruis
// aan… Wie die woorden niet kent, loopt vast, ook als de som zelf makkelijk is. 20 vragen in 4
// delen, zelfde opbouw als In de klas 2. Vertalingen in nieuwkomersSteun.js (vulSteun);
// antwoorden blijven Nederlands.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { vulSteun } from "./nieuwkomersHelpers.js";
import { voegFoutUitlegToe, zinReden } from "./nieuwkomersFoutUitleg.js";
const stepEmojis = ["✏️", "📝", "🔢", "🤔"];
const chapters = [
  { letter: "A", title: "Wat moet je doen met je pen?", emoji: "✏️", from: 0, to: 0 },
  { letter: "B", title: "Schrijven en invullen", emoji: "📝", from: 1, to: 1 },
  { letter: "C", title: "Lezen, tellen en rekenen", emoji: "🔢", from: 2, to: 2 },
  { letter: "D", title: "Kiezen en nadenken", emoji: "🤔", from: 3, to: 3 },
];

// Goed antwoord staat steeds eerst; LearnPath schudt de opties.
const vg = (q, options, hint, extra = {}) => ({ q, options, answer: 0, wrongHints: options.map((_, i) => (i === 0 ? null : hint)), ...extra });

const deel1 = [
  vg("Op je blad staat: omcirkel de appel. Wat doe je?", ["Ik zet een rondje om de appel.", "Ik zet een kruisje op de appel.", "Ik kleur de appel rood.", "Ik schrijf het woord appel op."], "Omcirkelen = er een cirkel omheen tekenen."),
  vg("Op je blad staat: onderstreep het woord. Wat doe je?", ["Ik zet een streep onder het woord.", "Ik zet een rondje om het woord.", "Ik gum het woord uit.", "Ik lees het woord hardop."], "Onder-streep: kijk naar het begin van het woord."),
  vg("Op je blad staat: kruis het goede antwoord aan. Wat doe je?", ["Ik zet een kruisje bij het goede antwoord.", "Ik zet een kruisje bij alle antwoorden.", "Ik schrijf het antwoord over.", "Ik kleur het hele blad."], "Aankruisen = een kruisje zetten. Maar bij welk antwoord?"),
  vg("Op je blad staat: zet een streep door het foute woord. Wat doe je?", ["Ik zet een streep door het foute woord.", "Ik zet een streep onder het goede woord.", "Ik schrijf het foute woord nog een keer.", "Ik zet een rondje om het foute woord."], "Doorstrepen = een streep door het woord heen."),
  vg("Op je blad staat: trek een lijn van de hond naar het hok. Wat doe je?", ["Ik trek een lijn van de hond naar het hok.", "Ik teken een nieuwe hond.", "Ik kleur het hok.", "Ik zet een kruisje op de hond."], "Een lijn trekken = twee dingen met elkaar verbinden."),
];

const deel2 = [
  vg("Op je blad staat: vul in. Er staat een lege plek. Wat doe je?", ["Ik schrijf het goede woord op de lege plek.", "Ik laat de plek leeg.", "Ik teken een bloem op de plek.", "Ik gum de zin uit."], "Invullen = de lege plek vol maken."),
  vg("De juf zegt: schrijf je naam erboven. Wat doe je?", ["Ik schrijf mijn naam bovenaan het blad.", "Ik schrijf mijn naam onderaan het blad.", "Ik zeg mijn naam hardop.", "Ik schrijf de naam van de juf."], "Erboven = bovenaan, helemaal boven op het blad."),
  vg("Op je blad staat: schrijf het antwoord op. Wat doe je?", ["Ik schrijf het antwoord met mijn potlood.", "Ik zeg het antwoord tegen een vriend.", "Ik denk aan het antwoord.", "Ik wijs het antwoord aan."], "Opschrijven = met je pen of potlood op papier."),
  vg("Op je blad staat: maak de zin af. De zin is: Ik eet een … Wat doe je?", ["Ik schrijf een woord aan het eind, bijvoorbeeld appel.", "Ik begin een nieuwe zin.", "Ik gum de zin uit.", "Ik lees de zin en ga verder."], "Afmaken = de zin is nog niet klaar. Er mist iets aan het eind."),
  vg("De juf zegt: sla de bladzijde om. Wat doe je?", ["Ik ga naar de volgende bladzijde.", "Ik doe mijn boek dicht.", "Ik scheur de bladzijde eruit.", "Ik begin weer bij de eerste bladzijde."], "Omslaan = de bladzijde draaien. Naar welke kant?"),
];

const deel3 = [
  vg("Op je blad staat: lees de zin. Wat doe je?", ["Ik kijk naar de woorden en lees ze.", "Ik schrijf de zin over.", "Ik teken de zin.", "Ik sla de zin over."], "Lezen = met je ogen naar de woorden kijken."),
  vg("Op je blad staat: tel de ballen. Wat doe je?", ["Ik tel hoeveel ballen er zijn.", "Ik kleur de ballen.", "Ik teken een bal erbij.", "Ik zet een kruisje op één bal."], "Tellen = 1, 2, 3, … Hoeveel zijn het er?"),
  vg("Op je blad staat: reken uit. 4 + 3 = … Wat doe je?", ["Ik reken het antwoord uit en schrijf 7.", "Ik schrijf de som over.", "Ik zet een rondje om de 4.", "Ik laat het leeg."], "Uitrekenen = het antwoord van de som vinden."),
  vg("Op je blad staat: vergelijk. Welke toren is hoger? Wat doe je?", ["Ik kijk naar allebei en zoek de hoogste.", "Ik kijk alleen naar de eerste toren.", "Ik teken een nieuwe toren.", "Ik tel de torens."], "Vergelijken = naar twee dingen kijken. Wat is het verschil?"),
  vg("Op je blad staat: hoeveel meer? Tim heeft 5 knikkers. Sara heeft 3. Wat reken je uit?", ["Hoeveel Tim er meer heeft dan Sara.", "Hoeveel knikkers ze samen hebben.", "Hoeveel knikkers Sara heeft.", "Hoe oud Tim is."], "Meer = wat is het verschil tussen de twee?"),
];

const deel4 = [
  vg("Op je blad staat: kies het goede woord. Wat doe je?", ["Ik kies één woord dat past.", "Ik schrijf alle woorden op.", "Ik kies geen woord.", "Ik verzin een nieuw woord."], "Kiezen = er één uitzoeken. Welke past?"),
  vg("Op je blad staat: welke hoort er niet bij? Appel, peer, banaan, schoen. Wat zoek je?", ["Het ding dat anders is dan de rest.", "Het ding dat ik het lekkerst vind.", "Het eerste woord.", "Het langste woord."], "Drie dingen lijken op elkaar. Eén niet."),
  vg("Op je blad staat: is het goed of fout? 2 + 2 = 5. Wat doe je?", ["Ik kijk of het klopt. Het is fout.", "Ik schrijf 2 + 2 = 5 over.", "Ik zeg dat het goed is.", "Ik sla de vraag over."], "Goed of fout = klopt het, of klopt het niet?"),
  vg("Op je blad staat: zet in de goede volgorde. 3, 1, 2. Wat doe je?", ["Ik zet ze zo neer: 1, 2, 3.", "Ik laat ze zo staan.", "Ik tel ze bij elkaar op.", "Ik zet ze zo neer: 3, 2, 1."], "Volgorde = wat komt eerst, wat komt daarna?"),
  vg("De juf zegt: leg uit hoe je het weet. Wat doe je?", ["Ik vertel waarom mijn antwoord klopt.", "Ik zeg alleen het antwoord.", "Ik zeg: ik weet het niet.", "Ik ben stil."], "Uitleggen = vertellen hoe je erover dacht."),
];

const steps = [
  { title: "Met je pen", explanation: "Op een werkblad staat wat je moet doen.\n\n**Omcirkel** = zet er een rondje om.\n**Onderstreep** = zet er een streep onder.\n**Kruis aan** = zet er een kruisje bij.\n**Streep door** = zet er een streep door.\n**Trek een lijn** = verbind twee dingen.", checks: deel1 },
  { title: "Schrijven en invullen", explanation: "**Vul in** = schrijf iets op de lege plek.\n**Schrijf op** = schrijf het met je potlood.\n**Maak af** = er mist nog iets. Schrijf het erbij.\n**Schrijf je naam erboven** = je naam bovenaan het blad.\n**Sla de bladzijde om** = ga naar de volgende bladzijde.", checks: deel2 },
  { title: "Lezen, tellen en rekenen", explanation: "**Lees** = kijk naar de woorden.\n**Tel** = 1, 2, 3… hoeveel zijn het?\n**Reken uit** = zoek het antwoord van de som.\n**Vergelijk** = kijk naar twee dingen. Wat is het verschil?\n**Hoeveel meer?** = hoe groot is het verschil?", checks: deel3 },
  { title: "Kiezen en nadenken", explanation: "**Kies** = zoek er één uit.\n**Welke hoort er niet bij?** = één ding is anders.\n**Goed of fout?** = klopt het of niet?\n**Zet in de goede volgorde** = wat komt eerst?\n**Leg uit** = vertel hoe je het weet.", checks: deel4 },
];
vulSteun(steps);
voegFoutUitlegToe(steps, zinReden);
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const opdrachtwoordenNieuwkomers = {
  id: "opdrachtwoorden-nieuwkomers",
  title: "Opdrachtwoorden — wat moet ik doen op mijn blad? (nieuwkomers)",
  emoji: "✏️",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Mondelinge taalvaardigheid — schooltaal",
  prerequisites: [{ id: "in-de-klas-2-nieuwkomers", title: "In de klas 2", niveau: "nieuwkomers" }],
  intro: "Omcirkel, onderstreep, kruis aan, vul in, reken uit, vergelijk: de woorden die op elk werkblad staan. Als je die kent, kun je ook in de gewone app verder. Met steun in je eigen taal. ~10 min.",
  triggerKeywords: ["nieuwkomers", "opdrachtwoorden", "instructietaal", "omcirkel", "onderstreep", "vul in", "werkblad", "schooltaal", "nt2"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN,
};

export default opdrachtwoordenNieuwkomers;
