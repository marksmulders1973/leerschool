// Leerpad: In de klas — Nederlands voor de eerste weken (nieuwkomers).
// Gebouwd 24 sep 2026 voor het Nieuwkomer-pakket. 20 vragen in 4 delen.
// Elke vraag heeft `steun`: dezelfde situatie in vier steuntalen (en/ar/uk/tr),
// zodat het kind snapt wát er gevraagd wordt; de antwoorden blijven Nederlands.
// Korte zinnen, geen uitdrukkingen, elke stap begint met uitleg in drie stappen.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { vulSteun } from "./nieuwkomersHelpers.js";
import { voegFoutUitlegToe, zinReden } from "./nieuwkomersFoutUitleg.js";
const stepEmojis = ["🙋", "🏫", "🤝", "💬"];
const chapters = [
  { letter: "A", title: "Vragen aan de juf of meester", emoji: "🙋", from: 0, to: 0 },
  { letter: "B", title: "Op school", emoji: "🏫", from: 1, to: 1 },
  { letter: "C", title: "Met andere kinderen", emoji: "🤝", from: 2, to: 2 },
  { letter: "D", title: "Hoe voel je je?", emoji: "💬", from: 3, to: 3 },
];

const v = (q, options, answer, hint, steun, extra = {}) => ({ q, options, answer, wrongHints: options.map((_, i) => (i === answer ? null : hint)), steun, ...extra });

const deel1 = [
  v("Je moet naar de wc. Wat zeg je?", ["Mag ik naar de wc?", "Ik ben klaar.", "Waar is mijn jas?", "Ik heb honger."], 0, "Je wilt naar de wc. Vraag het.",
    { en: "You need the toilet. What do you say?", ar: "تحتاج إلى الحمّام. ماذا تقول؟", uk: "Тобі треба в туалет. Що ти скажеш?", tr: "Tuvalete gitmen gerekiyor. Ne dersin?" },
    { uitlegPad: {
      stappen: [
        { titel: "Vragen mag altijd", tekst: "Op school mag je altijd iets **vragen**. Je begint met: **Mag ik…?**" },
        { titel: "De zin", tekst: "**Mag ik naar de wc?** Dat is genoeg. De juf of meester zegt ja." },
        { titel: "Zeg het rustig", tekst: "Steek je hand op. Wacht even. Zeg de zin." },
      ],
      woorden: [{ woord: "mag ik", uitleg: "Zo begin je een vraag om iets te doen." }, { woord: "wc", uitleg: "Toilet." }],
      theorie: "Iets vragen = Mag ik…?",
      voorbeelden: [{ type: "stap", tekst: "Mag ik water drinken?" }, { type: "stap", tekst: "Mag ik mijn jas pakken?" }],
      basiskennis: [{ onderwerp: "Truc", uitleg: "Hand omhoog, dan de zin." }],
      niveaus: { basis: "Zeg: Mag ik naar de wc?", simpeler: "Begin met 'Mag ik'. Dan wat je wilt.", nogSimpeler: "Mag ik naar de wc?" },
    } }),
  v("Je snapt de uitleg niet. Wat zeg je?", ["Ik snap het niet.", "Dank je wel.", "Tot morgen!", "Ik ben er."], 0, "Je begrijpt het niet. Zeg dat eerlijk.",
    { en: "You don't understand the explanation. What do you say?", ar: "لم تفهم الشرح. ماذا تقول؟", uk: "Ти не зрозумів пояснення. Що ти скажеш?", tr: "Açıklamayı anlamadın. Ne dersin?" }),
  v("De juf praat te snel. Wat vraag je?", ["Kunt u het nog een keer zeggen?", "Mag ik naar buiten?", "Waar is de bal?", "Ik ga naar huis."], 0, "Je wilt het nog een keer horen.",
    { en: "The teacher speaks too fast. What do you ask?", ar: "المعلّمة تتكلّم بسرعة. ماذا تسأل؟", uk: "Учителька говорить надто швидко. Що ти запитаєш?", tr: "Öğretmen çok hızlı konuşuyor. Ne sorarsın?" }),
  v("Je weet een woord niet. Wat vraag je?", ["Wat betekent dit woord?", "Hoe laat is het?", "Mag ik spelen?", "Is het pauze?"], 0, "Je wilt weten wat het woord betekent.",
    { en: "You don't know a word. What do you ask?", ar: "لا تعرف كلمة. ماذا تسأل؟", uk: "Ти не знаєш слово. Що ти запитаєш?", tr: "Bir kelimeyi bilmiyorsun. Ne sorarsın?" }),
  v("Je bent klaar met je werk. Wat zeg je?", ["Ik ben klaar.", "Ik snap het niet.", "Mag ik naar de wc?", "Waar woon je?"], 0, "Je werk is af.",
    { en: "You finished your work. What do you say?", ar: "أنهيت عملك. ماذا تقول؟", uk: "Ти закінчив роботу. Що ти скажеш?", tr: "İşini bitirdin. Ne dersin?" }),
];

const deel2 = [
  v("Het is tijd voor gym. Waar ga je heen?", ["Naar de gymzaal.", "Naar de wc.", "Naar huis.", "Naar de winkel."], 0, "Gym doe je in de gymzaal.",
    { en: "It is time for PE (gym). Where do you go?", ar: "حان وقت الرياضة. إلى أين تذهب؟", uk: "Час фізкультури. Куди ти йдеш?", tr: "Beden eğitimi zamanı. Nereye gidersin?" },
    { uitlegPad: {
      stappen: [
        { titel: "Plekken op school", tekst: "De **klas** is waar je leert. De **gymzaal** is waar je sport. Het **plein** is buiten." },
        { titel: "Gym", tekst: "**Gym** is sport op school. Je doet gymkleren aan. Je gaat naar de **gymzaal**." },
        { titel: "Onthoud", tekst: "gym = sport · gymzaal = de zaal voor sport." },
      ],
      woorden: [{ woord: "gymzaal", uitleg: "De zaal waar je sport." }, { woord: "plein", uitleg: "Buiten, waar je speelt in de pauze." }],
      theorie: "Elke les heeft een plek: klas, gymzaal, plein.",
      voorbeelden: [{ type: "stap", tekst: "Pauze → plein." }, { type: "stap", tekst: "Rekenen → klas." }],
      basiskennis: [{ onderwerp: "Truc", uitleg: "Gym hoort bij gymzaal." }],
      niveaus: { basis: "Gym is in de gymzaal.", simpeler: "Sport op school = gymzaal.", nogSimpeler: "Gymzaal." },
    } }),
  v("De bel gaat. Wat betekent dat?", ["De pauze begint of is klaar.", "Je moet naar huis.", "Er is brand.", "Je krijgt eten."], 0, "De bel zegt: nu begint of eindigt iets.",
    { en: "The bell rings. What does that mean?", ar: "يرنّ الجرس. ماذا يعني ذلك؟", uk: "Дзвонить дзвінок. Що це означає?", tr: "Zil çalıyor. Bu ne anlama gelir?" }),
  v("Je jas hangt aan de…", ["kapstok", "tafel", "deur", "stoel"], 0, "Jassen hangen aan een haak.",
    { en: "Your coat hangs on the…", ar: "معطفك معلّق على…", uk: "Твоя куртка висить на…", tr: "Montun … asılı." }),
  v("Het is pauze. Waar speel je?", ["Op het plein.", "In de gymzaal.", "Op de wc.", "In de auto."], 0, "In de pauze ga je naar buiten.",
    { en: "It is break time. Where do you play?", ar: "حان وقت الاستراحة. أين تلعب؟", uk: "Перерва. Де ти граєшся?", tr: "Teneffüs zamanı. Nerede oynarsın?" }),
  v("Je hebt je boek vergeten. Wat zeg je?", ["Ik ben mijn boek vergeten.", "Ik heb een hond.", "Het is mooi weer.", "Ik ben acht jaar."], 0, "Zeg wat je vergeten bent.",
    { en: "You forgot your book. What do you say?", ar: "نسيت كتابك. ماذا تقول؟", uk: "Ти забув книжку. Що ти скажеш?", tr: "Kitabını unuttun. Ne dersin?" }),
];

const deel3 = [
  v("Een kind vraagt: 'Hoe heet je?' Wat zeg je?", ["Ik heet … (je naam).", "Dank je wel.", "Tot ziens.", "Ik snap het niet."], 0, "Zeg je naam.",
    { en: "A child says: 'What is your name?' What do you say?", ar: "يقول طفل: 'ما اسمك؟' ماذا تقول؟", uk: "Дитина каже: «Як тебе звати?» Що ти скажеш?", tr: "Bir çocuk 'Adın ne?' diyor. Ne dersin?" },
    { uitlegPad: {
      stappen: [
        { titel: "Jezelf voorstellen", tekst: "**Hoe heet je?** = wat is je naam. Je zegt: **Ik heet …** en dan je naam." },
        { titel: "Meer vragen", tekst: "**Hoe oud ben je?** → **Ik ben … jaar.** **Waar kom je vandaan?** → **Ik kom uit …**" },
        { titel: "Vriendelijk", tekst: "Kijk het kind aan. Lach. Dat helpt meer dan woorden." },
      ],
      woorden: [{ woord: "heten", uitleg: "Je naam hebben. Ik heet Sam." }],
      theorie: "Hoe heet je? → Ik heet …",
      voorbeelden: [{ type: "stap", tekst: "Hoe heet je? Ik heet Amira." }, { type: "stap", tekst: "Hoe oud ben je? Ik ben negen jaar." }],
      basiskennis: [{ onderwerp: "Truc", uitleg: "Ik heet + naam." }],
      niveaus: { basis: "Zeg: Ik heet … en je naam.", simpeler: "Ik heet Sam.", nogSimpeler: "Ik heet …" },
    } }),
  v("Je wilt meespelen. Wat vraag je?", ["Mag ik meedoen?", "Ik ben klaar.", "Waar is de juf?", "Het is koud."], 0, "Vraag of je mee mag doen.",
    { en: "You want to join the game. What do you ask?", ar: "تريد أن تلعب معهم. ماذا تسأل؟", uk: "Ти хочеш приєднатися до гри. Що ти запитаєш?", tr: "Oyuna katılmak istiyorsun. Ne sorarsın?" }),
  v("Iemand helpt je. Wat zeg je?", ["Dank je wel.", "Ik heet Ali.", "Mag ik naar de wc?", "Nee."], 0, "Je bedankt iemand.",
    { en: "Someone helps you. What do you say?", ar: "شخص يساعدك. ماذا تقول؟", uk: "Хтось тобі допомагає. Що ти скажеш?", tr: "Biri sana yardım ediyor. Ne dersin?" }),
  v("Je wilt iets niet. Wat mag je zeggen?", ["Nee, dat wil ik niet.", "Ja, goed.", "Dank je wel.", "Tot morgen."], 0, "Je mag altijd nee zeggen.",
    { en: "You don't want something. What may you say?", ar: "لا تريد شيئًا. ماذا يمكنك أن تقول؟", uk: "Ти чогось не хочеш. Що ти можеш сказати?", tr: "Bir şeyi istemiyorsun. Ne diyebilirsin?" }),
  v("De school is uit. Wat zeg je tegen de juf?", ["Tot morgen!", "Goedemorgen!", "Mag ik meedoen?", "Ik snap het niet."], 0, "Aan het eind van de dag zeg je dag.",
    { en: "School is over. What do you say to the teacher?", ar: "انتهت المدرسة. ماذا تقول للمعلّمة؟", uk: "Уроки закінчилися. Що ти скажеш учительці?", tr: "Okul bitti. Öğretmene ne dersin?" }),
];

// 🌍 Steun-tik (Mark 24 sep 2026): ook elk ANTWOORD is tikbaar → eigen taal.
// Volgorde = deel1 + deel2 + deel3 (15 vragen × 4 opties × 4 talen).
const OPTIES_STEUN = [
  {"en": ["May I go to the toilet?", "I am done.", "Where is my coat?", "I am hungry."], "ar": ["هل يمكنني الذهاب إلى الحمّام؟", "لقد انتهيت.", "أين معطفي؟", "أنا جائع."], "uk": ["Можна мені в туалет?", "Я закінчив.", "Де моя куртка?", "Я хочу їсти."], "tr": ["Tuvalete gidebilir miyim?", "Bitirdim.", "Montum nerede?", "Açım."]},
  {"en": ["I don't understand.", "Thank you.", "See you tomorrow!", "I am here."], "ar": ["لا أفهم.", "شكرًا.", "إلى الغد!", "أنا هنا."], "uk": ["Я не розумію.", "Дякую.", "До завтра!", "Я тут."], "tr": ["Anlamıyorum.", "Teşekkür ederim.", "Yarın görüşürüz!", "Buradayım."]},
  {"en": ["Can you say it again?", "May I go outside?", "Where is the ball?", "I am going home."], "ar": ["هل يمكنك أن تقولها مرة أخرى؟", "هل يمكنني الخروج؟", "أين الكرة؟", "سأذهب إلى البيت."], "uk": ["Можете повторити ще раз?", "Можна мені вийти надвір?", "Де м'яч?", "Я йду додому."], "tr": ["Bir daha söyler misiniz?", "Dışarı çıkabilir miyim?", "Top nerede?", "Eve gidiyorum."]},
  {"en": ["What does this word mean?", "What time is it?", "May I play?", "Is it break time?"], "ar": ["ماذا تعني هذه الكلمة؟", "كم الساعة؟", "هل يمكنني اللعب؟", "هل هي الاستراحة؟"], "uk": ["Що означає це слово?", "Котра година?", "Можна мені погратися?", "Це перерва?"], "tr": ["Bu kelime ne demek?", "Saat kaç?", "Oynayabilir miyim?", "Teneffüs mü?"]},
  {"en": ["I am done.", "I don't understand.", "May I go to the toilet?", "Where do you live?"], "ar": ["لقد انتهيت.", "لا أفهم.", "هل يمكنني الذهاب إلى الحمّام؟", "أين تسكن؟"], "uk": ["Я закінчив.", "Я не розумію.", "Можна мені в туалет?", "Де ти живеш?"], "tr": ["Bitirdim.", "Anlamıyorum.", "Tuvalete gidebilir miyim?", "Nerede oturuyorsun?"]},
  {"en": ["To the gym hall.", "To the toilet.", "Home.", "To the shop."], "ar": ["إلى صالة الرياضة.", "إلى الحمّام.", "إلى البيت.", "إلى المتجر."], "uk": ["До спортзалу.", "До туалету.", "Додому.", "До магазину."], "tr": ["Spor salonuna.", "Tuvalete.", "Eve.", "Dükkâna."]},
  {"en": ["The break starts or ends.", "You must go home.", "There is a fire.", "You get food."], "ar": ["تبدأ الاستراحة أو تنتهي.", "يجب أن تذهب إلى البيت.", "هناك حريق.", "ستحصل على طعام."], "uk": ["Перерва починається або закінчується.", "Ти маєш іти додому.", "Пожежа.", "Ти отримаєш їжу."], "tr": ["Teneffüs başlıyor ya da bitiyor.", "Eve gitmen gerekiyor.", "Yangın var.", "Yemek alıyorsun."]},
  {"en": ["coat rack", "table", "door", "chair"], "ar": ["علّاقة المعاطف", "الطاولة", "الباب", "الكرسي"], "uk": ["вішалка", "стіл", "двері", "стілець"], "tr": ["askı", "masa", "kapı", "sandalye"]},
  {"en": ["In the playground.", "In the gym hall.", "In the toilet.", "In the car."], "ar": ["في ساحة المدرسة.", "في صالة الرياضة.", "في الحمّام.", "في السيارة."], "uk": ["На шкільному майданчику.", "У спортзалі.", "У туалеті.", "У машині."], "tr": ["Okul bahçesinde.", "Spor salonunda.", "Tuvalette.", "Arabada."]},
  {"en": ["I forgot my book.", "I have a dog.", "The weather is nice.", "I am eight years old."], "ar": ["نسيت كتابي.", "عندي كلب.", "الطقس جميل.", "عمري ثماني سنوات."], "uk": ["Я забув свою книжку.", "У мене є собака.", "Гарна погода.", "Мені вісім років."], "tr": ["Kitabımı unuttum.", "Bir köpeğim var.", "Hava güzel.", "Sekiz yaşındayım."]},
  {"en": ["My name is … (your name).", "Thank you.", "Goodbye.", "I don't understand."], "ar": ["اسمي … (اسمك).", "شكرًا.", "إلى اللقاء.", "لا أفهم."], "uk": ["Мене звати … (твоє ім'я).", "Дякую.", "До побачення.", "Я не розумію."], "tr": ["Benim adım … (senin adın).", "Teşekkür ederim.", "Hoşça kal.", "Anlamıyorum."]},
  {"en": ["May I join?", "I am done.", "Where is the teacher?", "It is cold."], "ar": ["هل يمكنني المشاركة؟", "لقد انتهيت.", "أين المعلّمة؟", "الجو بارد."], "uk": ["Можна мені приєднатися?", "Я закінчив.", "Де вчителька?", "Холодно."], "tr": ["Ben de katılabilir miyim?", "Bitirdim.", "Öğretmen nerede?", "Hava soğuk."]},
  {"en": ["Thank you.", "My name is Ali.", "May I go to the toilet?", "No."], "ar": ["شكرًا.", "اسمي علي.", "هل يمكنني الذهاب إلى الحمّام؟", "لا."], "uk": ["Дякую.", "Мене звати Алі.", "Можна мені в туалет?", "Ні."], "tr": ["Teşekkür ederim.", "Benim adım Ali.", "Tuvalete gidebilir miyim?", "Hayır."]},
  {"en": ["No, I don't want that.", "Yes, okay.", "Thank you.", "See you tomorrow."], "ar": ["لا، لا أريد ذلك.", "نعم، حسنًا.", "شكرًا.", "إلى الغد."], "uk": ["Ні, я цього не хочу.", "Так, добре.", "Дякую.", "До завтра."], "tr": ["Hayır, bunu istemiyorum.", "Evet, tamam.", "Teşekkür ederim.", "Yarın görüşürüz."]},
  {"en": ["See you tomorrow!", "Good morning!", "May I join?", "I don't understand."], "ar": ["إلى الغد!", "صباح الخير!", "هل يمكنني المشاركة؟", "لا أفهم."], "uk": ["До завтра!", "Доброго ранку!", "Можна мені приєднатися?", "Я не розумію."], "tr": ["Yarın görüşürüz!", "Günaydın!", "Ben de katılabilir miyim?", "Anlamıyorum."]},
];
[...deel1, ...deel2, ...deel3].forEach((c, i) => {
  const o = OPTIES_STEUN[i]; if (!o) return;
  // Map op optie-TEKST (niet positie): de app schudt de antwoorden.
  c.steunOpties = Object.fromEntries(c.options.map((tekst, k) => [tekst, { en: o.en[k], ar: o.ar[k], uk: o.uk[k], tr: o.tr[k] }]));
});

// Deel 4 (24 sep 2026): emotiewoorden uit de LOWAN-schooltaalwoordenlijst (bang, blij, boos,
// verdrietig, moe, ziek, pijn). Traumasensitief: zeggen hoe je je voelt mag altijd.
// Vertalingen komen uit nieuwkomersSteun.js (vulSteun).
const vg = (q, options, hint, extra = {}) => ({ q, options, answer: 0, wrongHints: options.map((_, i) => (i === 0 ? null : hint)), ...extra });
const deel4 = [
  vg("Je hoofd doet zeer. Wat zeg je tegen de juf?", ["Ik heb pijn.", "Ik ben blij.", "Ik heb honger.", "Ik ben klaar."], "Zeer doen = pijn. Zeg dat tegen de juf.", { uitlegPad: {
    stappen: [
      { titel: "Het mag altijd", tekst: "Zeggen hoe je je **voelt** mag altijd. De juf of meester wil het weten en helpt je." },
      { titel: "Zo zeg je het", tekst: "**Ik heb pijn.** **Ik voel me niet goed.** **Ik ben bang.** **Ik ben moe.**" },
      { titel: "Wijs het aan", tekst: "Weet je het woord niet? **Wijs** aan waar het zeer doet. Of tik op de zin voor jouw taal." },
    ],
    woorden: [{ woord: "pijn", uitleg: "Het doet zeer." }, { woord: "bang", uitleg: "Je bent ergens van geschrokken of je vindt iets eng." }, { woord: "verdrietig", uitleg: "Je bent niet blij; misschien moet je huilen." }],
    theorie: "Ik ben + gevoel. Ik heb + pijn of honger.",
    voorbeelden: [{ type: "stap", tekst: "Ik ben blij." }, { type: "stap", tekst: "Ik heb pijn in mijn buik." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Ik ben bang, blij, boos, moe. Ik heb pijn, honger." }],
    niveaus: { basis: "Zeg: Ik heb pijn.", simpeler: "Zeer = pijn.", nogSimpeler: "Ik heb pijn." },
  } }),
  vg("Je bent ziek. Wat zeg je tegen de juf?", ["Ik voel me niet goed.", "Ik ben blij.", "Mag ik meedoen?", "Tot morgen!"], "Ziek zijn = je voelt je niet goed."),
  vg("Een hond blaft heel hard. Je schrikt. Hoe voel je je?", ["Ik ben bang.", "Ik ben blij.", "Ik heb honger.", "Ik ben klaar."], "Schrikken van iets engs = bang."),
  vg("Iemand pakt steeds je bal af. Hoe voel je je?", ["Ik ben boos.", "Ik ben blij.", "Ik ben moe.", "Ik heb honger."], "Iemand doet iets wat niet mag. Dan ben je niet blij, maar…"),
  vg("Je hebt slecht geslapen. Hoe voel je je?", ["Ik ben moe.", "Ik ben boos.", "Ik heb pijn.", "Ik ben blij."], "Weinig slaap = je wilt graag slapen."),
];

const steps = [
  { title: "Vragen aan de juf of meester", explanation: "Op school mag je **altijd** iets vragen.\n\nBegin met **Mag ik…?** of **Kunt u…?**\n\nSteek je hand op. Wacht. Zeg de zin. Dat is genoeg.", checks: deel1 },
  { title: "Op school", explanation: "Op school zijn plekken en regels.\n\nDe **klas**: leren. De **gymzaal**: sport. Het **plein**: buiten spelen.\n\nDe **bel** zegt: nu begint iets, of nu is iets klaar.", checks: deel2 },
  { title: "Met andere kinderen", explanation: "Zo maak je vrienden.\n\n**Hoe heet je?** → **Ik heet …**\n**Mag ik meedoen?** → dan speel je mee.\n**Dank je wel** als iemand je helpt.\n\nEn: **nee** zeggen mag altijd.", checks: deel3 },
  { title: "Hoe voel je je?", explanation: "Zeggen hoe je je **voelt** mag **altijd**.\n\n**Ik ben** blij · bang · boos · moe · verdrietig.\n**Ik heb** pijn · honger.\n**Ik voel me niet goed.**\n\nDe juf of meester wil het weten en helpt je.", checks: deel4 },
];
vulSteun(steps);
voegFoutUitlegToe(steps, zinReden); // fout antwoord: wanneer zeg je die zin wél (Mark 25 sep)
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const inDeKlasNieuwkomers = {
  id: "in-de-klas-nieuwkomers",
  title: "In de klas — Nederlands voor de eerste weken (nieuwkomers)",
  emoji: "🙋",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Mondelinge taalvaardigheid — schooltaal",
  prerequisites: [],
  intro: "De zinnen die je de eerste weken op school nodig hebt: vragen, plekken, vrienden maken. Met steun in je eigen taal. ~10 min.",
  triggerKeywords: ["nieuwkomers", "in de klas", "schooltaal", "mag ik", "nt2", "eerste woorden", "nederlands leren"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default inDeKlasNieuwkomers;
