// Leerpad: In de klas 2 — zelf werken en fijne gevoelens (nieuwkomers).
// Gebouwd 2 okt 2026 op verzoek van een taalklas-docent: "pak je werkboek", "wat moet ik doen als
// ik klaar ben?", "als ik de juf niet mag storen, hoe kom ik dan aan een antwoord?" en fijne gevoelens
// (in deel 1 stonden alleen nare gevoelens). 20 vragen in 4 delen, zelfde opbouw als In de klas.
// Vertalingen in nieuwkomersSteun.js (vulSteun); antwoorden blijven Nederlands.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { vulSteun } from "./nieuwkomersHelpers.js";
import { voegFoutUitlegToe, zinReden } from "./nieuwkomersFoutUitleg.js";
const stepEmojis = ["📒", "✅", "🤫", "😊"];
const chapters = [
  { letter: "A", title: "Hoe begin ik aan mijn werk?", emoji: "📒", from: 0, to: 0 },
  { letter: "B", title: "Ik ben klaar. Wat nu?", emoji: "✅", from: 1, to: 1 },
  { letter: "C", title: "De juf is bezig. Wat doe ik?", emoji: "🤫", from: 2, to: 2 },
  { letter: "D", title: "Hoe zeg ik dat ik me fijn voel?", emoji: "😊", from: 3, to: 3 },
];

// Goed antwoord staat steeds eerst; LearnPath schudt de opties.
const vg = (q, options, hint, extra = {}) => ({ q, options, answer: 0, wrongHints: options.map((_, i) => (i === 0 ? null : hint)), ...extra });

const deel1 = [
  vg("De juf zegt: pak je werkboek. Wat doe je?", ["Ik pak mijn werkboek.", "Ik pak mijn jas.", "Ik ga naar buiten.", "Ik ga slapen."], "De juf wil dat je gaat werken."),
  vg("Je weet niet welke bladzijde. Wat vraag je?", ["Welke bladzijde?", "Is het pauze?", "Hoe heet je?", "Waar is de bal?"], "Je zoekt de goede bladzijde in je boek."),
  vg("Je hebt geen potlood. Wat vraag je aan het kind naast je?", ["Mag ik je potlood lenen?", "Ga weg!", "Tot morgen!", "Ik ben moe."], "Je wilt even een potlood van een ander kind."),
  vg("De juf zegt: werk zachtjes. Wat doe je?", ["Ik praat zachtjes.", "Ik roep heel hard.", "Ik ga zingen.", "Ik loop weg."], "Zachtjes = niet hard."),
  vg("De juf zegt: begin maar. Wat doe je?", ["Ik begin met mijn werk.", "Ik ga naar huis.", "Ik ga spelen.", "Ik doe niets."], "Beginnen = nu gaan werken."),
];

const deel2 = [
  vg("Je bent klaar met je werk. Wat vraag je aan de juf?", ["Wat moet ik nu doen?", "Mag ik naar huis?", "Waar is de bal?", "Hoe heet je?"], "Je werk is af. Je wilt weten wat je daarna doet."),
  vg("Op het bord staat: klaar? Lees een boek. Je bent klaar. Wat doe je?", ["Ik pak een boek en lees.", "Ik ga naar buiten.", "Ik ga praten.", "Ik ga slapen."], "Kijk wat er op het bord staat."),
  vg("Je bent klaar. Waar leg je je werkboek?", ["In mijn la.", "Op de grond.", "In de prullenbak.", "Buiten."], "Je boek moet netjes weg."),
  vg("Je wilt dat de juf je werk nakijkt. Wat vraag je?", ["Wilt u mijn werk nakijken?", "Mag ik naar buiten?", "Tot morgen!", "Ik heb honger."], "Nakijken = kijken of het goed is."),
  vg("Jij bent klaar. Een ander kind nog niet. Wat doe je?", ["Ik ben stil en wacht.", "Ik praat heel hard.", "Ik pak zijn werk af.", "Ik loop door de klas."], "Het andere kind is nog aan het werk."),
];

const deel3 = [
  vg("De juf helpt een ander kind. Je hebt een vraag. Wat doe je eerst?", ["Ik kijk zelf nog een keer.", "Ik roep: juf, juf!", "Ik stop met werken.", "Ik ga huilen."], "Misschien vind je het antwoord zelf."),
  vg("Je snapt het nog niet. De juf is bezig. Wat doe je?", ["Ik vraag het aan een kind naast mij.", "Ik loop naar buiten.", "Ik ga slapen.", "Ik gooi mijn werk weg."], "Een ander kind kan je ook helpen."),
  vg("Hoe vraag je hulp aan het kind naast je?", ["Kun je mij helpen?", "Ga weg!", "Tot morgen!", "Ik ben moe."], "Je wilt hulp. Vraag het vriendelijk."),
  vg("De juf heeft nu geen tijd. Wat doe je met je vraag?", ["Ik wacht tot de juf tijd heeft.", "Ik ga schreeuwen.", "Ik ga naar huis.", "Ik doe niets meer."], "De juf komt straks. Even geduld."),
  vg("Je kunt niet verder met een som. Wat doe je terwijl je wacht?", ["Ik ga verder met de volgende som.", "Ik doe niets.", "Ik ga naar buiten.", "Ik pak een spel."], "Je kunt al wel iets anders doen."),
];

const deel4 = [
  vg("Je hebt een mooie tekening gemaakt. Hoe voel je je?", ["Ik ben trots.", "Ik ben boos.", "Ik ben bang.", "Ik heb pijn."], "Je hebt iets moois gemaakt. Dat voelt goed."),
  vg("Je speelt met een vriend. Het is leuk. Hoe voel je je?", ["Ik ben blij.", "Ik ben moe.", "Ik ben boos.", "Ik heb honger."], "Leuk spelen = je lacht."),
  vg("De juf vraagt: hoe gaat het? Het gaat goed. Wat zeg je?", ["Het gaat goed, dank u.", "Ik ben ziek.", "Ik snap het niet.", "Tot morgen!"], "Het gaat goed met je. Zeg dat."),
  vg("Het was een fijne dag op school. Wat zeg je thuis?", ["Ik had een leuke dag.", "Ik heb pijn.", "Ik ben bang.", "Ik ben moe."], "Fijn = leuk."),
  vg("De som was moeilijk, maar nu snap je hem. Hoe voel je je?", ["Ik voel me goed.", "Ik ben verdrietig.", "Ik ben bang.", "Ik ben boos."], "Eindelijk snap je het. Dat voelt fijn."),
];

const steps = [
  { title: "Aan het werk", explanation: "De juf of meester zegt wat je gaat doen.\n\n**Pak je werkboek.** **Begin maar.** **Werk zachtjes.**\n\nWeet je iets niet? Vraag: **Welke bladzijde?** of **Mag ik je potlood lenen?**", checks: deel1 },
  { title: "Ik ben klaar", explanation: "Je werk is af. Wat nu?\n\nVraag: **Wat moet ik nu doen?**\nKijk op het **bord**: daar staat soms wat je mag doen.\nLeg je boek netjes in je **la**.\n\nAndere kinderen werken nog: wees **stil**.", checks: deel2 },
  { title: "De juf is bezig", explanation: "Soms helpt de juf of meester een ander kind. Dan mag je even niet storen.\n\n1. **Kijk zelf** nog een keer.\n2. **Vraag een kind** naast je: **Kun je mij helpen?**\n3. **Wacht** rustig. Ga verder met de **volgende som**.\n\nDe juf komt straks bij je.", checks: deel3 },
  { title: "Fijne gevoelens", explanation: "Je kunt ook zeggen dat je je **fijn** voelt.\n\n**Ik ben blij.** **Ik ben trots.** **Ik voel me goed.**\n**Het gaat goed, dank u.**\n\nDe juf of meester vindt het fijn om dat te horen.", checks: deel4 },
];
vulSteun(steps);
voegFoutUitlegToe(steps, zinReden);
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const inDeKlas2Nieuwkomers = {
  id: "in-de-klas-2-nieuwkomers",
  title: "In de klas 2 — zelf werken en fijne gevoelens (nieuwkomers)",
  emoji: "📒",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Mondelinge taalvaardigheid — schooltaal",
  prerequisites: [{ id: "in-de-klas-nieuwkomers", title: "In de klas", niveau: "nieuwkomers" }],
  intro: "Zelf aan het werk, wat je doet als je klaar bent, wat je doet als de juf bezig is, en hoe je zegt dat je je fijn voelt. Met steun in je eigen taal. ~10 min.",
  triggerKeywords: ["nieuwkomers", "in de klas", "schooltaal", "zelfstandig werken", "ik ben klaar", "gevoelens", "nt2"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN,
};

export default inDeKlas2Nieuwkomers;
