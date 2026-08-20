// 🪜🪜 Leesladder 2 — "de zware ladder" (Mark 20 aug 2026: Brian is door
// ladder 1 heen en vindt hem nu makkelijk — "eerst moeilijk, dus het werkt.
// Maak nog 3 setjes, maar moeilijker"). Drie verse versies D/E/F met dezelfde
// treden-opbouw als ladder 1, maar: langere teksten (t/m ±330 woorden,
// brugklas-lengte), zwaardere signaalwoorden (hoewel/desondanks/tenzij),
// valstrik-afleiders die letterlijk in de tekst staan, mening-vs-feit,
// samenvat-vragen en combineren over alinea's heen.
//
// 💛 FAMILIE-LAAG (Mark 20 aug: "de extra 3 kunnen weer onder familie"):
// tijdens de bèta gratis te proberen; bij de paywall-lancering (2027) hoort
// ladder 2 bij Familie. Ladder 1 blijft altijd gratis.

import { VERSIE_D, WOORDHULP_D } from "./versieD.js";
import { VERSIE_E, WOORDHULP_E } from "./versieE.js";
import { VERSIE_F, WOORDHULP_F } from "./versieF.js";
import { voegWoordenToe } from "../leesladderWoorden.js";

export const TREDE_META2 = [
  { nr: 1, titel: "Stevige mini's", sub: "± 8 zinnen — korte tekst, maar de vragen prikken dieper", emoji: "🪜", kindTip: "Lees rustig. Let extra op woorden als 'hoewel' en 'toch' — die draaien de zin om." },
  { nr: 2, titel: "Volle alinea's", sub: "± 150 woorden — hier staan de valstrik-antwoorden tussen", emoji: "🪜🪜", kindTip: "Een antwoord dat letterlijk in de tekst staat, kan tóch fout zijn. Lees de vraag twee keer." },
  { nr: 3, titel: "Lange leesteksten", sub: "± 230 woorden — samenvatten en meningen herkennen", emoji: "🪜🪜🪜", kindTip: "Vraag je per alinea af: wat is hier het mini-onderwerp? Dat helpt bij de samenvat-vragen." },
  { nr: 4, titel: "Brugklas-lengte", sub: "± 330 woorden — informatie uit meerdere alinea's combineren", emoji: "🪜🪜🪜🪜", kindTip: "Sommige antwoorden vind je alleen door twee alinea's aan elkaar te plakken. Terugbladeren is slim, niet vals." },
];

export const VERSIES2 = {
  D: TREDE_META2.map((m, i) => ({ ...m, teksten: VERSIE_D[i] })),
  E: TREDE_META2.map((m, i) => ({ ...m, teksten: VERSIE_E[i] })),
  F: TREDE_META2.map((m, i) => ({ ...m, teksten: VERSIE_F[i] })),
};

// Stippellijn-woordhulp: de niveau-2-woorden schuiven aan bij de centrale
// lijst (zelfde spelregels — nooit een woord waar een vraag over gaat).
voegWoordenToe({ ...WOORDHULP_D, ...WOORDHULP_E, ...WOORDHULP_F });
