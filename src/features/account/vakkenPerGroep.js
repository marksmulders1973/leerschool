// Curriculum-kaart basisonderwijs (Mark 12 aug 2026: "doe onderzoek wat er
// gemiddeld aan vakken gegeven wordt per groep en maak ze inzichtelijk").
//
// Bron: de landelijke kerndoelen PO + wat gangbare methodes per leerjaar
// aanbieden. De vakgebieden uit de kerndoelen: Nederlands (technisch lezen,
// begrijpend lezen, taal/woordenschat, spelling), rekenen/wiskunde, Engels
// (verplicht, op de meeste scholen vanaf groep 6/7), oriëntatie op jezelf en
// de wereld (natuur & techniek, aardrijkskunde, geschiedenis, verkeer) en
// studievaardigheden richting de doorstroomtoets. Gym/creatief laten we
// bewust weg — daar oefent een app niets zinnigs aan.
//
// Per groep: de vak-id's zoals de leerpaden ze gebruiken (subject-key),
// kern-vakken eerst (doorstroomtoets-kern), wereld-vakken daarna.
// `vanaf`-notities verklaren waarom een vak in die groep verschijnt.

export const VAK_INFO = {
  rekenen: { titel: "Rekenen", emoji: "🔢" },
  taal: { titel: "Taal & lezen", emoji: "✏️" },
  spelling: { titel: "Spelling", emoji: "📝" },
  "begrijpend-lezen": { titel: "Begrijpend lezen", emoji: "📖" },
  engels: { titel: "Engels", emoji: "📕" },
  studievaardigheden: { titel: "Studievaardigheden", emoji: "🧠" },
  natuur: { titel: "Natuur & techniek", emoji: "🌱" },
  aardrijkskunde: { titel: "Aardrijkskunde", emoji: "🌍" },
  geschiedenis: { titel: "Geschiedenis", emoji: "🏛️" },
  verkeer: { titel: "Verkeer", emoji: "🚸" },
};

// Wat een kind in deze groep op school ongeveer krijgt (app-relevante vakken).
export const VAKKEN_PER_GROEP = {
  3: ["rekenen", "taal", "spelling"],
  4: ["rekenen", "taal", "spelling", "begrijpend-lezen", "natuur", "verkeer"],
  5: ["rekenen", "taal", "spelling", "begrijpend-lezen", "natuur", "aardrijkskunde", "geschiedenis", "verkeer"],
  6: ["rekenen", "taal", "spelling", "begrijpend-lezen", "engels", "natuur", "aardrijkskunde", "geschiedenis", "verkeer"],
  7: ["rekenen", "taal", "spelling", "begrijpend-lezen", "engels", "studievaardigheden", "natuur", "aardrijkskunde", "geschiedenis", "verkeer"],
  8: ["rekenen", "taal", "spelling", "begrijpend-lezen", "engels", "studievaardigheden", "natuur", "aardrijkskunde", "geschiedenis"],
};

// Korte school-context per groep×vak — toont wáárom dit vak er nu bij hoort.
export const VAK_NOTITIE = {
  "3|taal": "leren lezen — dé klus van groep 3",
  "3|rekenen": "getallen tot 20, erbij en eraf",
  "3|spelling": "je eerste woorden schrijven",
  "4|rekenen": "de tafels! En rekenen tot 100",
  "4|begrijpend-lezen": "start: korte teksten snappen",
  "4|natuur": "seizoenen, dieren en planten",
  "4|verkeer": "veilig op straat en op de fiets",
  "5|aardrijkskunde": "start: jouw omgeving en Nederland",
  "5|geschiedenis": "start: vroeger en nu",
  "6|engels": "op veel scholen start Engels hier",
  "6|aardrijkskunde": "topografie van Nederland",
  "7|verkeer": "🚦 het verkeersexamen is dit jaar!",
  "7|studievaardigheden": "samenvatten, opzoeken, plannen",
  "7|aardrijkskunde": "topografie van Europa",
  "8|studievaardigheden": "vast onderdeel van de doorstroomtoets",
  "8|aardrijkskunde": "topografie van de wereld",
};

export function vakkenVoorGroep(groep) {
  return VAKKEN_PER_GROEP[groep] || VAKKEN_PER_GROEP[8];
}

export function vakNotitie(groep, vak) {
  return VAK_NOTITIE[`${groep}|${vak}`] || "";
}
