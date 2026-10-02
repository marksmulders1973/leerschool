// Leerpad: Woorden 3 — kleuren, vormen, groot en klein, tijd en praten (nieuwkomers).
// Gebouwd 2 okt 2026 om gaten in de LOWAN-schooltaalwoordenlijst (minimumwoorden groep 1) te vullen:
// zie docs/LOWAN-DEKKING.md en scripts/lowanDekking.mjs. 26 vragen in 5 delen.
// Vertalingen in nieuwkomersSteun.js (vulSteun); antwoorden blijven Nederlands.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { vulSteun } from "./nieuwkomersHelpers.js";
const stepEmojis = ["🎨", "🔺", "📍", "🕒", "💭"];
const chapters = [
  { letter: "A", title: "Welke kleur is het?", emoji: "🎨", from: 0, to: 0 },
  { letter: "B", title: "Welke vorm? Groot of klein?", emoji: "🔺", from: 1, to: 1 },
  { letter: "C", title: "Waar is het? Hoeveel?", emoji: "📍", from: 2, to: 2 },
  { letter: "D", title: "Wanneer? Wie is aan de beurt?", emoji: "🕒", from: 3, to: 3 },
  { letter: "E", title: "Denken en vertellen", emoji: "💭", from: 4, to: 4 },
];

// Goed antwoord staat steeds eerst; LearnPath schudt de opties.
const vg = (q, options, hint, extra = {}) => ({ q, options, answer: 0, wrongHints: options.map((_, i) => (i === 0 ? null : hint)), ...extra });

const deel1 = [
  vg("Welke kleur heeft chocola?", ["Bruin.", "Groen.", "Roze.", "Wit."], "Denk aan een reep chocola."),
  vg("Welke kleur heeft een olifant?", ["Grijs.", "Geel.", "Paars.", "Rood."], "Een olifant is niet vrolijk gekleurd."),
  vg("Rood en blauw samen. Welke kleur krijg je?", ["Paars.", "Groen.", "Bruin.", "Wit."], "Meng rood met blauw."),
  vg("Welke kleur heeft een varken?", ["Roze.", "Blauw.", "Zwart.", "Groen."], "Een varken is lichtrood."),
  vg("Het is nacht. Welke kleur heeft de lucht?", ["Zwart.", "Geel.", "Roze.", "Wit."], "In de nacht is het donker."),
];

const deel2 = [
  vg("Welke vorm heeft een bord?", ["Een cirkel.", "Een driehoek.", "Een lijn.", "Een vierkant."], "Een bord is rond."),
  vg("Een vorm met drie hoeken. Hoe heet die?", ["Een driehoek.", "Een cirkel.", "Een vierkant.", "Een lijn."], "Drie hoeken = drie-hoek."),
  vg("Een olifant is groot. Een muis is…", ["Klein.", "Groot.", "Hoog.", "Dik."], "Een muis is het tegenovergestelde van groot."),
  vg("Een toren gaat tot in de lucht. De toren is…", ["Hoog.", "Klein.", "Dun.", "Kort."], "Hij gaat ver naar boven."),
  vg("Welk boek heeft veel bladzijden?", ["Het dikke boek.", "Het dunne boek.", "Het kleine boek.", "Het lege boek."], "Veel bladzijden = dik."),
];

const deel3 = [
  vg("De school is naast je huis. Is de school ver weg of dichtbij?", ["Dichtbij.", "Ver weg.", "Hoog.", "Leeg."], "Naast je huis = niet ver."),
  vg("Leg het boek op de tafel. Waar is het boek nu?", ["Het boek ligt erop.", "Het boek ligt eruit.", "Het boek ligt ver weg.", "Het boek is weg."], "Op de tafel = erop."),
  vg("Pak de pen uit je etui. Wat doe je met de pen?", ["Ik haal de pen eruit.", "Ik leg de pen erop.", "Ik gooi de pen weg.", "Ik eet de pen."], "Uit het etui = eruit."),
  vg("Je eet de helft van je appel. Wat heb je nog?", ["Een halve appel.", "Een hele appel.", "Twee appels.", "Geen appel."], "De helft = half."),
  vg("Hoeveel dagen heeft een week?", ["Zeven.", "Zes.", "Vijf.", "Tien."], "Maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag."),
  vg("Tel: vier, vijf, … Welk getal komt nu?", ["Zes.", "Zeven.", "Drie.", "Tien."], "Na vijf komt één meer."),
];

const deel4 = [
  vg("Niet gisteren, niet morgen, maar nu. Hoe heet die dag?", ["Vandaag.", "Gisteren.", "Morgen.", "Week."], "De dag van nu."),
  vg("De dag vóór vandaag. Hoe heet die?", ["Gisteren.", "Morgen.", "Vandaag.", "Middag."], "Die dag is al voorbij."),
  vg("Het is 12 uur. Je hebt gegeten. Welk deel van de dag begint nu?", ["De middag.", "De nacht.", "De ochtend.", "De week."], "Na 12 uur is het…"),
  vg("De juf zegt: jij bent aan de beurt. Wat betekent dat?", ["Nu mag jij.", "Je moet stil zijn.", "Je mag naar huis.", "Je bent klaar."], "Aan de beurt = nu jij."),
  vg("Je wilt iets zeggen in de klas. Wat doe je eerst?", ["Ik steek mijn vinger op.", "Ik roep heel hard.", "Ik loop naar de juf.", "Ik ga staan."], "Zo laat je de juf zien dat je iets wilt zeggen."),
];

const deel5 = [
  vg("Je weet het antwoord niet meteen. Wat doe je?", ["Ik denk even na.", "Ik ga huilen.", "Ik stop.", "Ik roep: weet ik niet!"], "Neem even de tijd."),
  vg("Je wilt de juf iets over je weekend vertellen. Wat zeg je?", ["Ik wil iets vertellen.", "Ik ben klaar.", "Mag ik naar buiten?", "Tot morgen!"], "Vertellen = iets zeggen over wat je deed."),
  vg("Waarom heb je een jas aan?", ["Omdat het koud is.", "Omdat het warm is.", "Omdat ik blij ben.", "Omdat het pauze is."], "Een jas houdt je warm."),
  vg("Een som is niet moeilijk. De som is…", ["Makkelijk.", "Moeilijk.", "Groot.", "Eng."], "Niet moeilijk = makkelijk."),
  vg("Je hebt een nieuwe vriend. Je bent heel blij. Hoe voel je je?", ["Ik ben gelukkig.", "Ik ben ziek.", "Ik ben bang.", "Ik ben moe."], "Heel blij = gelukkig."),
  vg("Je bent een beetje bang, maar je doet het toch. Wat zeg je?", ["Ik durf het!", "Ik wil naar huis.", "Ik ben klaar.", "Ik heb honger."], "Durven = het toch doen."),
];

const steps = [
  { title: "Kleuren", explanation: "Alles om je heen heeft een **kleur**.\n\n**bruin** · **grijs** · **paars** · **roze** · **zwart**\n\nVraag: **Welke kleur is het?**", checks: deel1 },
  { title: "Vormen, groot en klein", explanation: "**Een cirkel** is rond. **Een driehoek** heeft drie hoeken.\n\n**groot** ↔ **klein** · **hoog** · **dik** ↔ **dun**", checks: deel2 },
  { title: "Waar? Hoeveel?", explanation: "**dichtbij** ↔ **ver weg**\n**erop** (op iets) · **eruit** (uit iets)\n**half** = de helft\n\nTellen: … vier, vijf, **zes**, **zeven** …", checks: deel3 },
  { title: "Tijd en beurt", explanation: "**gisteren** → **vandaag** → **morgen**\nNa 12 uur is het **middag**.\n\n**Aan de beurt** = nu mag jij.\nIets zeggen? **Steek je vinger op.**", checks: deel4 },
  { title: "Denken en vertellen", explanation: "**Ik denk even na.** **Ik wil iets vertellen.**\n**Waarom?** → **Omdat …**\n\n**makkelijk** ↔ **moeilijk**\n**Ik ben gelukkig.** **Ik durf het!**", checks: deel5 },
];
vulSteun(steps);
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woorden3Nieuwkomers = {
  id: "woorden-3-nieuwkomers",
  title: "Woorden 3 — kleuren, vormen, tijd en praten (nieuwkomers)",
  emoji: "🎨",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Woordenschat — schooltaalwoorden (LOWAN)",
  prerequisites: [{ id: "woorden-2-nieuwkomers", title: "Meer woorden", niveau: "nieuwkomers" }],
  intro: "Kleuren, vormen, groot en klein, waar en wanneer, en woorden om te denken en te vertellen. Met steun in je eigen taal. ~15 min.",
  triggerKeywords: ["nieuwkomers", "kleuren", "vormen", "groot klein", "gisteren vandaag", "schooltaal", "lowan", "nt2"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN,
};

export default woorden3Nieuwkomers;
