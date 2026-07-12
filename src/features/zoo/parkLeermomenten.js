// 🌍 Park-leermomenten — "heel de wereld is een leerschool" (Mark 12 jul 2026).
// Alles in het park moet benoembaar zijn: tik op een ding → je ziet wat het IS,
// hoe het WERKT en één klik naar het leerpad erover. Zelfde gedachte als de
// uitvinders-kabouters (uitvindersData.js) en de muntjes-leermomenten
// (economieLeermomenten.js), maar dan voor de gewone park-objecten zelf.
//
// F1 (12 jul): de trein is een STOOMTREIN geworden (rookpluim in ParkProps) en
// is aantikbaar → dit leermoment. Volgende objecten (F2, alleen met BESTAANDE
// leerpaden — harde regel: leerpadId moet in pathManifest bestaan):
//   boom → hout/fotosynthese · achtbaan → hellingsgraad (verhoudingen-po) +
//   ijzer/staal · reuzenrad → cirkel/omtrek · ballonnen → lucht/gassen.
//
// Vorm-afspraak: zelfde velden als een uitvinders-tafereel, zodat het bestaande
// tafereel-paneel in ZookwartierGame.jsx het 1-op-1 kan tonen:
//   { id, emoji, titel, praatje (≤3 zinnen kind-taal), weetje, leerpadId, leerLabel }
// Geen dev-jargon in de teksten (regel: woorden die een kind van 10 kent).

export const PARK_LEERMOMENTEN = {
  stoomtrein: {
    id: "stoomtrein",
    emoji: "🚂",
    titel: "De stoomtrein",
    praatje:
      "Dit is een échte stoomtrein! In de ketel brandt een vuur dat water zó heet maakt dat het stoom wordt. Die stoom duwt met veel kracht een zuiger heen en weer — en die laat de wielen draaien. Deze slimme machine veranderde zo'n 200 jaar geleden de hele wereld: fabrieken, treinen, stoomboten. Dat noemen we de industriële revolutie.",
    weetje:
      "De allereerste trein van Nederland reed in 1839 van Amsterdam naar Haarlem. Sommige mensen waren bang dat je lichaam kapot zou gaan als je sneller ging dan een galopperend paard. Viel gelukkig mee!",
    leerpadId: "industriele-revolutie-po",
    leerLabel: "De industriële revolutie",
  },
};

export const LEERMOMENT_BY_ID = PARK_LEERMOMENTEN;
