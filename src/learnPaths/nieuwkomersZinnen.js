// 🗣️ Klaszinnen met plaatje (30 sep 2026, na de mail van een nieuwkomers-directeur: "het waardevolst
// zijn de ZINNEN — Mag ik naar de wc? Ik snap het niet. Mag ik meedoen? — woordenlijsten hebben we al
// via de methode"). Voor "Kijken en luisteren" → Zinnen: Zinkaarten + Luister en kies, zonder lezen.
//
// Plaatjes: alleen Mulberry Symbols (Steve Lee), CC BY-SA 4.0, ongewijzigd in public/picto/. Elk plaatje
// is op een contactvel (120 px, wit) bekeken: het plaatje moet de BETEKENIS van de zin laten zien.
// `groep`: plaatjes die op elkaar lijken of hetzelfde bedoelen komen nooit samen in één
// Luister-en-kies-vraag (bv. honger en dorst: allebei een gezicht met een denkwolkje).
//
// Weggelaten (geen duidelijk plaatje in de set, of te veel gelijkenis):
//   Dank je wel (geen symbool voor bedanken; handen schudden/geven betekent iets anders) ·
//   Tot morgen! (zelfde zwaaiend poppetje als Goedemorgen) · Ik ben bang / blij / boos / verdrietig
//   (vier gezichten, op telefoonformaat niet uit elkaar te houden — zelfde oordeel als de kliktest van
//   26 sep) · Wat betekent dit woord? (woordenboek lijkt op het boek) · Ik ben mijn boek vergeten
//   (geen symbool voor vergeten) · Hoe heet je? · Mag ik spelen? (valt samen met Mag ik meedoen?) ·
//   Ik wacht op mijn beurt (rij poppetjes lijkt op meedoen) · Kunt u mij helpen? (Mulberry "help" =
//   twee handen naar elkaar toe; leest als geven of handen schudden).
//
// Vertalingen (en/ar/uk/tr/ro/bg): waar dezelfde zin al in het leerpad "In de klas" stond, is die
// vertaling overgenomen (inDeKlasNieuwkomers.js / nieuwkomersSteun.js). De andere staan in
// NAKIJKEN_ZINNEN: door Claude vertaald, nog door een moedertaalspreker laten nakijken.
const P = (naam) => `/picto/${naam}.svg`;

export const ZIN_THEMAS = [
  { id: "vragen-juf", thema: "Vragen aan de juf" },
  { id: "in-de-klas", thema: "In de klas" },
  { id: "samen-spelen", thema: "Samen spelen" },
  { id: "hoe-voel-ik-me", thema: "Hoe voel ik me" },
  { id: "regels-klas", thema: "Regels in de klas" }, // 2 okt 2026: klassenregels met plaatje (wens taalklas-docent)
];

export const KLASZINNEN = [
  // ── Vragen aan de juf ──
  { id: "wc", zin: "Mag ik naar de wc?", plaatje: P("wc"), thema: "Vragen aan de juf",
    vertaling: { en: "May I go to the toilet?", ar: "هل يمكنني الذهاب إلى الحمّام؟", uk: "Можна мені в туалет?", tr: "Tuvalete gidebilir miyim?", ro: "Pot să merg la toaletă?", bg: "Може ли да отида до тоалетната?" } },
  { id: "drinken", zin: "Mag ik water drinken?", plaatje: P("drinken"), thema: "Vragen aan de juf",
    vertaling: { en: "May I drink water?", ar: "هل يمكنني أن أشرب ماء؟", uk: "Можна мені попити води?", tr: "Su içebilir miyim?", ro: "Pot să beau apă?", bg: "Може ли да пия вода?" } },
  { id: "pen", zin: "Mag ik een pen?", plaatje: P("pen"), thema: "Vragen aan de juf",
    vertaling: { en: "May I have a pen?", ar: "هل يمكنني أن آخذ قلمًا؟", uk: "Можна мені ручку?", tr: "Bir kalem alabilir miyim?", ro: "Pot să primesc un pix?", bg: "Може ли една химикалка?" } },
  { id: "nog-een-keer", zin: "Kunt u het nog een keer zeggen?", plaatje: P("luisteren"), thema: "Vragen aan de juf",
    vertaling: { en: "Can you say it again?", ar: "هل يمكنك أن تقولها مرة أخرى؟", uk: "Можете повторити ще раз?", tr: "Bir daha söyler misiniz?", ro: "Puteți să repetați?", bg: "Може ли да го кажете пак?" } },
  { id: "snap-niet", zin: "Ik snap het niet.", plaatje: P("snap-het-niet"), thema: "Vragen aan de juf", groep: "vraag",
    vertaling: { en: "I don't understand.", ar: "لا أفهم.", uk: "Я не розумію.", tr: "Anlamıyorum.", ro: "Nu înțeleg.", bg: "Не разбирам." } },
  { id: "vragen", zin: "Mag ik iets vragen?", plaatje: P("vragen"), thema: "Vragen aan de juf", groep: "vraag",
    vertaling: { en: "May I ask something?", ar: "هل يمكنني أن أسأل شيئًا؟", uk: "Можна мені щось запитати?", tr: "Bir şey sorabilir miyim?", ro: "Pot să întreb ceva?", bg: "Може ли да попитам нещо?" } },

  // ── In de klas ──
  { id: "goedemorgen", zin: "Goedemorgen!", plaatje: P("hallo"), thema: "In de klas",
    vertaling: { en: "Good morning!", ar: "صباح الخير!", uk: "Доброго ранку!", tr: "Günaydın!", ro: "Bună dimineața!", bg: "Добро утро!" } },
  { id: "klaar", zin: "Ik ben klaar.", plaatje: P("klaar"), thema: "In de klas",
    vertaling: { en: "I am done.", ar: "لقد انتهيت.", uk: "Я закінчив.", tr: "Bitirdim.", ro: "Am terminat.", bg: "Готов съм." } },
  { id: "tas", zin: "Waar is mijn tas?", plaatje: P("tas"), thema: "In de klas",
    vertaling: { en: "Where is my bag?", ar: "أين حقيبتي؟", uk: "Де мій рюкзак?", tr: "Çantam nerede?", ro: "Unde este ghiozdanul meu?", bg: "Къде е раницата ми?" } },
  { id: "naar-buiten", zin: "Mag ik naar buiten?", plaatje: P("naar-buiten"), thema: "In de klas",
    vertaling: { en: "May I go outside?", ar: "هل يمكنني الخروج؟", uk: "Можна мені вийти надвір?", tr: "Dışarı çıkabilir miyim?", ro: "Pot să ies afară?", bg: "Може ли да изляза навън?" } },
  { id: "handen-wassen", zin: "Mag ik mijn handen wassen?", plaatje: P("handen-wassen"), thema: "In de klas",
    vertaling: { en: "May I wash my hands?", ar: "هل يمكنني أن أغسل يديّ؟", uk: "Можна мені помити руки?", tr: "Ellerimi yıkayabilir miyim?", ro: "Pot să mă spăl pe mâini?", bg: "Може ли да си измия ръцете?" } },
  { id: "jas", zin: "Mag ik mijn jas pakken?", plaatje: P("jas"), thema: "In de klas",
    vertaling: { en: "May I get my coat?", ar: "هل يمكنني أن آخذ معطفي؟", uk: "Можна мені взяти куртку?", tr: "Montumu alabilir miyim?", ro: "Pot să-mi iau geaca?", bg: "Може ли да си взема якето?" } },

  // ── Samen spelen ──
  { id: "meedoen", zin: "Mag ik meedoen?", plaatje: P("meedoen"), thema: "Samen spelen",
    vertaling: { en: "May I join?", ar: "هل يمكنني المشاركة؟", uk: "Можна мені приєднатися?", tr: "Ben de katılabilir miyim?", ro: "Pot să mă joc și eu?", bg: "Може ли и аз да играя?" } },
  { id: "stop", zin: "Stop, ik wil dat niet.", plaatje: P("stop"), thema: "Samen spelen",
    vertaling: { en: "Stop, I don't want that.", ar: "توقّف، لا أريد ذلك.", uk: "Стоп, я цього не хочу.", tr: "Dur, bunu istemiyorum.", ro: "Stop, nu vreau asta.", bg: "Стоп, не искам това." } },
  { id: "schommelen", zin: "Mag ik schommelen?", plaatje: P("schommelen"), thema: "Samen spelen",
    vertaling: { en: "May I go on the swing?", ar: "هل يمكنني أن ألعب على الأرجوحة؟", uk: "Можна мені погойдатися?", tr: "Salıncakta sallanabilir miyim?", ro: "Pot să mă dau în leagăn?", bg: "Може ли да се полюлея?" } },
  { id: "bal", zin: "Mag ik de bal?", plaatje: P("bal"), thema: "Samen spelen",
    vertaling: { en: "May I have the ball?", ar: "هل يمكنني أن آخذ الكرة؟", uk: "Можна мені м'яч?", tr: "Topu alabilir miyim?", ro: "Pot să iau mingea?", bg: "Може ли топката?" } },

  // ── Hoe voel ik me ──
  { id: "pijn", zin: "Ik heb pijn.", plaatje: P("hoofdpijn"), thema: "Hoe voel ik me", groep: "lijf",
    vertaling: { en: "I have pain.", ar: "عندي ألم.", uk: "У мене болить.", tr: "Ağrım var.", ro: "Mă doare.", bg: "Боли ме." } },
  { id: "overgeven", zin: "Ik moet overgeven.", plaatje: P("overgeven"), thema: "Hoe voel ik me", groep: "lijf",
    vertaling: { en: "I am going to be sick.", ar: "سأتقيّأ.", uk: "Мене зараз знудить.", tr: "Kusacağım.", ro: "Îmi vine să vomit.", bg: "Ще повърна." } },
  { id: "ziek", zin: "Ik ben ziek.", plaatje: P("ziek"), thema: "Hoe voel ik me",
    vertaling: { en: "I am ill.", ar: "أنا مريض.", uk: "Я хворий.", tr: "Hastayım.", ro: "Sunt bolnav.", bg: "Болен съм." } },
  { id: "moe", zin: "Ik ben moe.", plaatje: P("moe"), thema: "Hoe voel ik me",
    vertaling: { en: "I am tired.", ar: "أنا متعب.", uk: "Я втомився.", tr: "Yorgunum.", ro: "Sunt obosit.", bg: "Уморен съм." } },
  { id: "honger", zin: "Ik heb honger.", plaatje: P("honger"), thema: "Hoe voel ik me", groep: "denkwolk",
    vertaling: { en: "I am hungry.", ar: "أنا جائع.", uk: "Я хочу їсти.", tr: "Açım.", ro: "Mi-e foame.", bg: "Гладен съм." } },
  { id: "dorst", zin: "Ik heb dorst.", plaatje: P("dorst"), thema: "Hoe voel ik me", groep: "denkwolk",
    vertaling: { en: "I am thirsty.", ar: "أنا عطشان.", uk: "Я хочу пити.", tr: "Susadım.", ro: "Mi-e sete.", bg: "Жаден съм." } },
  // ── Regels in de klas (2 okt 2026) — plaatjes: Mulberry Symbols (quiet, work_2, group_work, whisper, think, work_book, queue) ──
  { id: "stil", zin: "Ik ben stil.", plaatje: P("stil-zijn"), thema: "Regels in de klas",
    vertaling: {en: "I am quiet.",ar: "أنا هادئ.",uk: "Я тихий.",tr: "Sessizim.",ro: "Stau liniștit.",bg: "Тих съм."} },
  { id: "luister-juf", zin: "Ik luister naar de juf.", plaatje: P("luisteren"), thema: "Regels in de klas",
    vertaling: {en: "I listen to the teacher.",ar: "أستمع إلى المعلمة.",uk: "Я слухаю вчительку.",tr: "Öğretmeni dinliyorum.",ro: "O ascult pe doamna învățătoare.",bg: "Слушам учителката."} },
  { id: "zelf-werken", zin: "Ik werk zelf.", plaatje: P("zelf-werken"), thema: "Regels in de klas",
    vertaling: {en: "I work on my own.",ar: "أعمل بنفسي.",uk: "Я працюю сам.",tr: "Kendi başıma çalışıyorum.",ro: "Lucrez singur.",bg: "Работя сам."} },
  { id: "samenwerken", zin: "We werken samen.", plaatje: P("samenwerken"), thema: "Regels in de klas",
    vertaling: {en: "We work together.",ar: "نعمل معًا.",uk: "Ми працюємо разом.",tr: "Birlikte çalışıyoruz.",ro: "Lucrăm împreună.",bg: "Работим заедно."} },
  { id: "zachtjes", zin: "Ik praat zachtjes.", plaatje: P("fluisteren"), thema: "Regels in de klas",
    vertaling: {en: "I talk quietly.",ar: "أتكلم بهدوء.",uk: "Я говорю тихо.",tr: "Sessizce konuşuyorum.",ro: "Vorbesc încet.",bg: "Говоря тихо."} },
  { id: "nadenken", zin: "Ik denk even na.", plaatje: P("nadenken"), thema: "Regels in de klas",
    vertaling: {en: "I think for a moment.",ar: "أفكر قليلًا.",uk: "Я трохи подумаю.",tr: "Biraz düşünüyorum.",ro: "Mă gândesc puțin.",bg: "Помислям малко."} },
  { id: "werkboek", zin: "Ik pak mijn werkboek.", plaatje: P("werkboek"), thema: "Regels in de klas", groep: "boek",
    vertaling: {en: "I get my workbook.",ar: "آخذ كتاب التمارين.",uk: "Я беру свій робочий зошит.",tr: "Çalışma kitabımı alıyorum.",ro: "Îmi iau caietul de lucru.",bg: "Вземам работната си тетрадка."} },
  { id: "lees-boek", zin: "Ik lees een boek.", plaatje: P("lezen"), thema: "Regels in de klas", groep: "boek",
    vertaling: {en: "I read a book.",ar: "أقرأ كتابًا.",uk: "Я читаю книжку.",tr: "Kitap okuyorum.",ro: "Citesc o carte.",bg: "Чета книга."} },
  { id: "klaar", zin: "Ik ben klaar.", plaatje: P("klaar"), thema: "Regels in de klas",
    vertaling: {en: "I am done.",ar: "انتهيت.",uk: "Я закінчив.",tr: "Bitirdim.",ro: "Am terminat.",bg: "Готов съм."} },
  { id: "rij", zin: "Ik sta in de rij.", plaatje: P("in-de-rij"), thema: "Regels in de klas",
    vertaling: {en: "I stand in line.",ar: "أقف في الطابور.",uk: "Я стою в черзі.",tr: "Sırada duruyorum.",ro: "Stau la rând.",bg: "Стоя на опашката."} },
  { id: "opruimen", zin: "Ik ruim op.", plaatje: P("opruimen"), thema: "Regels in de klas",
    vertaling: {en: "I tidy up.",ar: "أرتّب.",uk: "Я прибираю.",tr: "Topluyorum.",ro: "Fac ordine.",bg: "Разтребвам."} },
];

// Zinnen waarvan de vertaling NIEUW is (niet uit het leerpad "In de klas"): nakijken door een
// moedertaalspreker. "Mag ik water drinken?" en "Ik heb pijn." komen uit nieuwkomersSteun.js
// (Engels/Arabisch daar uit de uitleg-zin gehaald; Turks zonder de NL-herhaling tussen haakjes).
export const NAKIJKEN_ZINNEN = [
  "Mag ik een pen?", "Mag ik iets vragen?", "Waar is mijn tas?",
  "Mag ik mijn handen wassen?", "Mag ik mijn jas pakken?", "Stop, ik wil dat niet.",
  "Mag ik schommelen?", "Mag ik de bal?", "Ik moet overgeven.", "Ik ben ziek.", "Ik heb dorst.",
  "Ik ben stil.", "Ik luister naar de juf.", "Ik werk zelf.", "We werken samen.", "Ik praat zachtjes.", "Ik denk even na.", "Ik pak mijn werkboek.", "Ik lees een boek.", "Ik ben klaar.", "Ik sta in de rij.", "Ik ruim op.",
];

/** Zinnen van één thema, in de volgorde hierboven. */
export const zinnenVan = (thema) => KLASZINNEN.filter((z) => z.thema === thema);
