// Leerpad: Meer woorden — thema's (nieuwkomers). Gebouwd 27 sep 2026 (doorgroeiplan; Mark: "doe wat
// het meest oplevert" → woordenschat was de grootste zwakte t.o.v. andere pakketten). 25 nieuwe
// woorden in 5 thema's die alle nieuwkomermethodes hebben: kleding, eten en drinken, in huis,
// buiten en onderweg, je lichaam. Zelfde vorm als het eerste Woordenpad (woordenNieuwkomers.js):
// korte Nederlandse vraag, Nederlandse antwoorden mét de/het, eigen taal alleen na een tik; bij
// een fout zegt de app wat het gekozen woord wél is. Afleiders komen uit hetzelfde thema, maar
// nooit een tweede antwoord dat ook zou passen (sok niet bij "wat doe je aan je voeten?").
// Vertalingen AR/UK/TR (en sinds 30 sep 2026 RO/BG) door Claude, kort en simpel — moedertaalcheck staat open (N5).

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { pictoVoor } from "./nieuwkomersPicto.js";

const stepEmojis = ["👕", "🍚", "🛏️", "🚲", "💪"];
const chapters = [
  { letter: "A", title: "Wat trek ik aan?", emoji: "👕", from: 0, to: 0 },
  { letter: "B", title: "Wat eet en drink ik?", emoji: "🍚", from: 1, to: 1 },
  { letter: "C", title: "Wat is er in huis?", emoji: "🛏️", from: 2, to: 2 },
  { letter: "D", title: "Wat zie ik buiten?", emoji: "🚲", from: 3, to: 3 },
  { letter: "E", title: "Hoe heten de delen van mijn lichaam?", emoji: "💪", from: 4, to: 4 },
];

const S = (en, ar, uk, tr, ro, bg) => ({ en, ar, uk, tr, ro, bg });

// Vertaalknopje bij elk antwoord.
const WOORDENBOEK = {
  "de broek": S("the trousers", "البنطال", "штани", "pantolon", "pantalonii", "панталонът"),
  "de trui": S("the jumper / sweater", "الكنزة", "светр", "kazak", "puloverul", "пуловерът"),
  "de schoen": S("the shoe", "الحذاء", "черевик", "ayakkabı", "pantoful", "обувката"),
  "de sok": S("the sock", "الجورب", "шкарпетка", "çorap", "șoseta", "чорапът"),
  "de muts": S("the woolly hat", "القبعة الصوفية", "шапка", "bere", "căciula", "шапката"),
  "de rijst": S("the rice", "الأرز", "рис", "pirinç", "orezul", "оризът"),
  "het ei": S("the egg", "البيضة", "яйце", "yumurta", "oul", "яйцето"),
  "de soep": S("the soup", "الحساء", "суп", "çorba", "supa", "супата"),
  "de thee": S("the tea", "الشاي", "чай", "çay", "ceaiul", "чаят"),
  "de aardappel": S("the potato", "البطاطا", "картопля", "patates", "cartoful", "картофът"),
  "de keuken": S("the kitchen", "المطبخ", "кухня", "mutfak", "bucătăria", "кухнята"),
  "het bed": S("the bed", "السرير", "ліжко", "yatak", "patul", "леглото"),
  "de kast": S("the cupboard / wardrobe", "الخزانة", "шафа", "dolap", "dulapul", "шкафът"),
  "de lamp": S("the lamp", "المصباح", "лампа", "lamba", "lampa", "лампата"),
  "de badkamer": S("the bathroom", "الحمّام", "ванна кімната", "banyo", "baia", "банята"),
  "de fiets": S("the bicycle", "الدرّاجة", "велосипед", "bisiklet", "bicicleta", "колелото"),
  "de bus": S("the bus", "الحافلة", "автобус", "otobüs", "autobuzul", "автобусът"),
  "de straat": S("the street", "الشارع", "вулиця", "sokak", "strada", "улицата"),
  "de winkel": S("the shop", "المتجر", "магазин", "dükkân", "magazinul", "магазинът"),
  "het park": S("the park", "الحديقة العامة", "парк", "park", "parcul", "паркът"),
  "de arm": S("the arm", "الذراع", "рука (від плеча)", "kol", "brațul", "ръката (от рамото)"),
  "het been": S("the leg", "الساق", "нога", "bacak", "piciorul", "кракът"),
  "de vinger": S("the finger", "الإصبع", "палець", "parmak", "degetul", "пръстът"),
  "de tand": S("the tooth", "السنّ", "зуб", "diş", "dintele", "зъбът"),
  "het haar": S("the hair", "الشعر", "волосся", "saç", "părul", "косата"),
};

// Korte Nederlandse vraag + vertaling (de vertaling noemt het goede woord niet).
const VRAAG = {
  "de broek": { nl: "Wat trek je aan over je benen?", ...S("What do you put on over your legs?", "ماذا تلبس فوق ساقيك؟", "Що ти вдягаєш на ноги, щоб їх прикрити?", "Bacaklarına ne giyersin?", "Ce îmbraci pe picioare?", "Какво обличаш на краката си?") },
  "de trui": { nl: "Wat trek je over je shirt aan als het koud is?", ...S("What do you put on over your shirt when it is cold?", "ماذا تلبس فوق قميصك عندما يكون الجو باردًا؟", "Що ти вдягаєш поверх футболки, коли холодно?", "Hava soğukken tişörtünün üstüne ne giyersin?", "Ce îmbraci peste tricou când e frig?", "Какво обличаш върху тениската, когато е студено?") },
  "de schoen": { nl: "Wat doe je aan je voeten als je naar buiten gaat?", ...S("What do you put on your feet when you go outside?", "ماذا تلبس في قدميك عندما تخرج؟", "Що ти взуваєш, коли йдеш надвір?", "Dışarı çıkarken ayağına ne giyersin?", "Ce încalți când ieși afară?", "Какво обуваш, когато излизаш навън?") },
  "de sok": { nl: "Wat trek je aan je voet, nog vóór je schoen?", ...S("What do you put on your foot, before your shoe?", "ماذا تلبس في قدمك قبل الحذاء؟", "Що ти вдягаєш на ногу ще до взуття?", "Ayakkabından önce ayağına ne giyersin?", "Ce pui pe picior, înainte de pantof?", "Какво слагаш на крака си, преди обувката?") },
  "de muts": { nl: "Wat zet je op je hoofd als het koud is?", ...S("What do you put on your head when it is cold?", "ماذا تضع على رأسك عندما يكون الجو باردًا؟", "Що ти вдягаєш на голову, коли холодно?", "Hava soğukken başına ne takarsın?", "Ce pui pe cap când e frig?", "Какво слагаш на главата си, когато е студено?") },
  "de rijst": { nl: "Kleine witte korrels. Je eet ze warm, vaak met groente. Wat is het?", ...S("Small white grains. You eat them warm, often with vegetables. What is it?", "حبوب بيضاء صغيرة. تأكلها ساخنة، غالبًا مع الخضار. ما هي؟", "Маленькі білі зернятка. Їх їдять теплими, часто з овочами. Що це?", "Küçük beyaz taneler. Sıcak yersin, çoğu zaman sebzeyle. Nedir?", "Boabe mici și albe. Le mănânci calde, adesea cu legume. Ce este?", "Малки бели зрънца. Ядеш ги топли, често със зеленчуци. Какво е това?") },
  "het ei": { nl: "Wat legt een kip?", ...S("What does a chicken lay?", "ماذا تضع الدجاجة؟", "Що несе курка?", "Tavuk ne yumurtlar?", "Ce face găina?", "Какво снася кокошката?") },
  "de soep": { nl: "Je eet het warm met een lepel uit een kom. Wat is het?", ...S("You eat it warm with a spoon from a bowl. What is it?", "تأكله ساخنًا بالملعقة من وعاء. ما هو؟", "Це їдять теплим ложкою з миски. Що це?", "Kaseden kaşıkla sıcak yersin. Nedir?", "O mănânci caldă cu lingura dintr-un bol. Ce este?", "Ядеш я топла с лъжица от купа. Какво е това?") },
  "de thee": { nl: "Wat drink je warm uit een kopje?", ...S("What do you drink warm from a cup?", "ماذا تشرب ساخنًا من كوب؟", "Що ти п'єш гарячим із чашки?", "Fincandan sıcak ne içersin?", "Ce bei cald dintr-o ceașcă?", "Какво пиеш топло от чаша?") },
  "de aardappel": { nl: "Het groeit in de grond. Je maakt er friet van. Wat is het?", ...S("It grows in the ground. You make chips from it. What is it?", "ينمو في الأرض. تصنع منه البطاطا المقلية. ما هو؟", "Росте в землі. З неї роблять картоплю фрі. Що це?", "Toprakta yetişir. Ondan kızartma yaparsın. Nedir?", "Crește în pământ. Îl mănânci prăjit sau fiert. Ce este?", "Расте в земята. Ядеш го пържен или варен. Какво е това?") },
  "de keuken": { nl: "In welke kamer kook je?", ...S("In which room do you cook?", "في أي غرفة تطبخ؟", "У якій кімнаті готують їжу?", "Hangi odada yemek pişirirsin?", "În ce cameră gătești?", "В коя стая готвиш?") },
  "het bed": { nl: "Waar slaap je 's nachts in?", ...S("What do you sleep in at night?", "أين تنام في الليل؟", "У чому ти спиш уночі?", "Gece nerede uyursun?", "În ce dormi noaptea?", "В какво спиш нощем?") },
  "de kast": { nl: "Waar leg je je kleren in?", ...S("Where do you put your clothes?", "أين تضع ملابسك؟", "Куди ти кладеш свій одяг?", "Kıyafetlerini nereye koyarsın?", "Unde îți pui hainele?", "Къде слагаш дрехите си?") },
  "de lamp": { nl: "Wat doe je aan als het donker is?", ...S("What do you switch on when it is dark?", "ماذا تشعل عندما يكون الظلام؟", "Що ти вмикаєш, коли темно?", "Hava karanlıkken neyi açarsın?", "Ce aprinzi când e întuneric?", "Какво включваш, когато е тъмно?") },
  "de badkamer": { nl: "In welke kamer was je je?", ...S("In which room do you wash yourself?", "في أي غرفة تغتسل؟", "У якій кімнаті ти миєшся?", "Hangi odada yıkanırsın?", "În ce cameră te speli?", "В коя стая се миеш?") },
  "de fiets": { nl: "Hij heeft twee wielen. Je trapt met je voeten. Wat is het?", ...S("It has two wheels. You pedal with your feet. What is it?", "لها عجلتان. تدوس بقدميك. ما هي؟", "У нього два колеса. Ти крутиш педалі ногами. Що це?", "İki tekerleği var. Ayaklarınla pedal çevirirsin. Nedir?", "Are două roți. Pedalezi cu picioarele. Ce este?", "Има две колела. Въртиш педалите с крака. Какво е това?") },
  "de bus": { nl: "Een grote auto. Veel mensen rijden samen mee. Wat is het?", ...S("A big vehicle. Many people ride in it together. What is it?", "سيارة كبيرة. يركب فيها كثير من الناس معًا. ما هي؟", "Велика машина. У ній їде багато людей разом. Що це?", "Büyük bir araç. Birçok insan birlikte biner. Nedir?", "O mașină mare. Mulți oameni merg cu ea împreună. Ce este?", "Голяма кола. Много хора пътуват в нея заедно. Какво е това?") },
  "de straat": { nl: "Waar rijden de auto's langs je huis?", ...S("Where do the cars drive past your house?", "أين تمرّ السيارات بجانب بيتك؟", "Де їздять машини повз твій дім?", "Arabalar evinin önünden nerede geçer?", "Pe unde trec mașinile pe lângă casa ta?", "Къде минават колите покрай къщата ти?") },
  "de winkel": { nl: "Waar koop je brood en melk?", ...S("Where do you buy bread and milk?", "أين تشتري الخبز والحليب؟", "Де ти купуєш хліб і молоко?", "Ekmek ve sütü nereden alırsın?", "De unde cumperi pâine și lapte?", "Откъде купуваш хляб и мляко?") },
  "het park": { nl: "Waar speel je buiten op het gras, bij de bomen?", ...S("Where do you play outside on the grass, near the trees?", "أين تلعب في الخارج على العشب قرب الأشجار؟", "Де ти граєшся надворі на траві, біля дерев?", "Dışarıda, ağaçların yanında çimenlerde nerede oynarsın?", "Unde te joci afară pe iarbă, lângă copaci?", "Къде играеш навън на тревата, до дърветата?") },
  "de arm": { nl: "Wat zit er tussen je schouder en je hand?", ...S("What is between your shoulder and your hand?", "ماذا يوجد بين كتفك ويدك؟", "Що є між плечем і долонею?", "Omzunla elin arasında ne var?", "Ce este între umăr și mână?", "Какво е между рамото и дланта ти?") },
  "het been": { nl: "Waarmee loop en ren je? Je hebt er twee.", ...S("What do you walk and run with? You have two.", "بماذا تمشي وتركض؟ لديك اثنتان.", "Чим ти ходиш і бігаєш? Їх у тебе дві.", "Neyle yürür ve koşarsın? İki tane var.", "Cu ce mergi și alergi? Ai două.", "С какво ходиш и тичаш? Имаш два.") },
  "de vinger": { nl: "Je hand heeft er vijf. Wat zijn het?", ...S("Your hand has five of them. What are they?", "في يدك خمسة منها. ما هي؟", "На руці їх п'ять. Що це?", "Elinde beş tane var. Nedir?", "Mâna ta are cinci. Ce sunt?", "Ръката ти има пет от тях. Какво са те?") },
  "de tand": { nl: "Je poetst ze elke dag in je mond. Wat zijn het?", ...S("You brush them every day in your mouth. What are they?", "تنظّفها بالفرشاة كل يوم في فمك. ما هي؟", "Ти чистиш їх щодня в роті. Що це?", "Her gün ağzında onları fırçalarsın. Nedir?", "Îi speli în fiecare zi în gură. Ce sunt?", "Миеш ги всеки ден в устата си. Какво са те?") },
  "het haar": { nl: "Wat kam je op je hoofd?", ...S("What do you comb on your head?", "ماذا تمشّط على رأسك؟", "Що ти розчісуєш на голові?", "Başında neyi tararsın?", "Ce piepteni pe cap?", "Какво решеш на главата си?") },
};

// Wat het gekozen woord wél is (foutscherm), in eenvoudig Nederlands.
const BETEKENIS = {
  "de broek": "een broek trek je aan over je benen",
  "de trui": "een trui trek je over je shirt aan als het koud is",
  "de schoen": "een schoen doe je aan als je naar buiten gaat",
  "de sok": "een sok trek je aan je voet, onder je schoen",
  "de muts": "een muts zet je op je hoofd als het koud is",
  "de rijst": "rijst zijn kleine witte korrels die je warm eet",
  "het ei": "een ei komt van de kip",
  "de soep": "soep eet je warm met een lepel",
  "de thee": "thee drink je warm uit een kopje",
  "de aardappel": "een aardappel groeit in de grond",
  "de keuken": "in de keuken kook je",
  "het bed": "in een bed slaap je",
  "de kast": "in een kast leg je je spullen of kleren",
  "de lamp": "een lamp geeft licht",
  "de badkamer": "in de badkamer was je je",
  "de fiets": "op een fiets rijd je met twee wielen",
  "de bus": "in een bus rijden veel mensen mee",
  "de straat": "op de straat rijden auto's",
  "de winkel": "in een winkel koop je iets",
  "het park": "in een park speel je buiten op het gras",
  "de arm": "je arm zit tussen je schouder en je hand",
  "het been": "met je benen loop je",
  "de vinger": "aan je hand zitten vijf vingers",
  "de tand": "met je tanden bijt je",
  "het haar": "je haar zit op je hoofd",
};

const HINT_STEUN = {};
const foutHint = (o) => {
  const t = WOORDENBOEK[o];
  const nl = BETEKENIS[o] ? `Nee, ${BETEKENIS[o]}. Probeer het nog eens.` : "Nee, dat is een ander woord. Probeer het nog eens.";
  if (t && !HINT_STEUN[nl]) HINT_STEUN[nl] = {
    en: `No, '${o}' means: ${t.en}. Try again.`,
    ar: `لا، «${o}» معناها: ${t.ar}. حاول مرة أخرى.`,
    uk: `Ні, «${o}» означає: ${t.uk}. Спробуй ще раз.`,
    tr: `Hayır, '${o}' demek: ${t.tr}. Tekrar dene.`,
    ro: `Nu, „${o}” înseamnă: ${t.ro}. Mai încearcă o dată.`,
    bg: `Не, „${o}“ означава: ${t.bg}. Опитай пак.`,
  };
  return nl;
};

let zaad = 11;
const rnd = () => { zaad = (zaad * 9301 + 49297) % 233280; return zaad / 233280; };
const schud = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const w = (goed, fout, extra = {}) => {
  const { nl: q, ...steun } = VRAAG[goed];
  const opts = schud([goed, ...fout]);
  const answer = opts.indexOf(goed);
  return { q, options: opts, answer, wrongHints: opts.map((o, i) => (i === answer ? null : foutHint(o))), steun, steunOpties: Object.fromEntries(opts.map((o) => [o, WOORDENBOEK[o]]).filter(([, v]) => v)), picto: pictoVoor(opts), ...extra };
};
// Korte uitleg per thema (eerste vraag van elke stap).
const uitleg = (thema, zin, a, b, voorbeeld) => ({ uitlegPad: {
  stappen: [
    { titel: thema, tekst: zin },
    { titel: "de en het", tekst: "Leer elk woord mét **de** of **het**: **" + a + "**, **" + b + "**." },
  ],
  woorden: [{ woord: a, uitleg: BETEKENIS[a] }, { woord: b, uitleg: BETEKENIS[b] }],
  theorie: "Leer het woord altijd mét de of het.",
  voorbeelden: [{ type: "stap", tekst: voorbeeld }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Zeg het woord hardop en wijs het aan." }],
  niveaus: { basis: "Kies het Nederlandse woord.", simpeler: BETEKENIS[a], nogSimpeler: a },
} });

const kleding = [
  w("de broek", ["de muts", "de schoen", "de sok"], uitleg("Kleding", "Woorden voor **kleren**: wat trek je aan?", "de broek", "de trui", "Ik trek mijn broek aan.")),
  w("de trui", ["de schoen", "de sok", "de broek"]),
  w("de schoen", ["de muts", "de trui", "de broek"]),
  w("de sok", ["de muts", "de trui", "de broek"]),
  w("de muts", ["de sok", "de broek", "de schoen"]),
];
const eten = [
  w("de rijst", ["de soep", "de thee", "het ei"], uitleg("Eten en drinken", "Woorden voor **eten** en **drinken**.", "de rijst", "het ei", "Ik eet rijst met groente.")),
  w("het ei", ["de rijst", "de soep", "de aardappel"]),
  w("de soep", ["het ei", "de thee", "de aardappel"]), // niet rijst: die eet je ook met een lepel uit een kom
  w("de thee", ["de rijst", "het ei", "de aardappel"]),
  w("de aardappel", ["het ei", "de thee", "de rijst"]),
];
const huis = [
  w("de keuken", ["de badkamer", "de kast", "de lamp"], uitleg("In huis", "Woorden voor de **kamers** en **spullen** in huis.", "de keuken", "het bed", "Mama kookt in de keuken.")),
  w("het bed", ["de kast", "de lamp", "de keuken"]),
  w("de kast", ["de lamp", "het bed", "de badkamer"]),
  w("de lamp", ["de kast", "het bed", "de keuken"]),
  w("de badkamer", ["de keuken", "de kast", "de lamp"]),
];
const buiten = [
  w("de fiets", ["de bus", "de straat", "de winkel"], uitleg("Buiten", "Woorden voor **buiten** en **onderweg**.", "de fiets", "de bus", "Ik ga met de fiets naar school.")),
  w("de bus", ["de fiets", "de winkel", "het park"]),
  w("de straat", ["het park", "de winkel", "de fiets"]),
  w("de winkel", ["het park", "de straat", "de bus"]),
  w("het park", ["de winkel", "de straat", "de bus"]),
];
const lichaam = [
  w("de arm", ["het been", "de tand", "het haar"], uitleg("Je lichaam", "Nog meer woorden voor je **lichaam**.", "de arm", "het been", "Ik steek mijn arm op.")),
  w("het been", ["de arm", "de vinger", "het haar"]),
  w("de vinger", ["de tand", "de arm", "het been"]),
  w("de tand", ["het haar", "de vinger", "de arm"]),
  w("het haar", ["de tand", "de vinger", "het been"]),
];

const UITLEG_STAP = "Lees de vraag en kies het **Nederlandse** woord dat past.\n\nLeer elk woord met **de** of **het** ervoor.\n\nKen je een woord niet? Tik op het knopje ernaast, dan zie je het in jouw taal.";
const steps = [
  { title: "Kleding", explanation: UITLEG_STAP, checks: kleding },
  { title: "Eten en drinken", explanation: UITLEG_STAP, checks: eten },
  { title: "In huis", explanation: UITLEG_STAP, checks: huis },
  { title: "Buiten en onderweg", explanation: UITLEG_STAP, checks: buiten },
  { title: "Je lichaam", explanation: UITLEG_STAP, checks: lichaam },
];
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

// Tikbare padteksten (titels, uitleg, uitlegPad) → EN/AR/UK/TR.
const TEKST_STEUN = {
  [UITLEG_STAP]: S("Read the question and choose the **Dutch** word that fits.\n\nLearn every word with **de** or **het** in front.\n\nDon't know a word? Tap the small button next to it to see it in your language.", "اقرأ السؤال واختر الكلمة **الهولندية** المناسبة.\n\nتعلّم كل كلمة مع **de** أو **het** قبلها.\n\nلا تعرف كلمة؟ اضغط على الزر الصغير بجانبها لتراها بلغتك.", "Прочитай запитання і вибери **нідерландське** слово, яке підходить.\n\nВчи кожне слово з **de** або **het** перед ним.\n\nНе знаєш слова? Натисни на кнопочку поруч, і побачиш його своєю мовою.", "Soruyu oku ve uyan **Felemenkçe** kelimeyi seç.\n\nHer kelimeyi önündeki **de** ya da **het** ile öğren.\n\nBir kelimeyi bilmiyor musun? Yanındaki küçük düğmeye dokun, kendi dilinde gör.", "Citește întrebarea și alege cuvântul **olandez** care se potrivește.\n\nÎnvață fiecare cuvânt cu **de** sau **het** în față.\n\nNu știi un cuvânt? Apasă pe butonul mic de lângă el și îl vezi în limba ta.", "Прочети въпроса и избери **нидерландската** дума, която пасва.\n\nУчи всяка дума с **de** или **het** отпред.\n\nНе знаеш някоя дума? Докосни малкото копче до нея и ще я видиш на твоя език."),
  "Meer woorden": S("More words", "كلمات أكثر", "Більше слів", "Daha fazla kelime", "Mai multe cuvinte", "Още думи"),
  "Meer woorden — kleding, eten, huis, buiten, lichaam (nieuwkomers)": S("More words — clothes, food, home, outside, body (newcomers)", "كلمات أكثر — الملابس، الطعام، البيت، الخارج، الجسم (للقادمين الجدد)", "Більше слів — одяг, їжа, дім, надворі, тіло (для новоприбулих)", "Daha fazla kelime — kıyafet, yiyecek, ev, dışarısı, vücut (yeni gelenler)", "Mai multe cuvinte — haine, mâncare, acasă, afară, corp (nou-veniți)", "Още думи — дрехи, храна, вкъщи, навън, тяло (новодошли)"),
  "Kleding": S("Clothes", "الملابس", "Одяг", "Kıyafetler", "Haine", "Дрехи"),
  "Eten en drinken": S("Food and drink", "الطعام والشراب", "Їжа і напої", "Yiyecek ve içecek", "Mâncare și băutură", "Храна и напитки"),
  "In huis": S("In the house", "في البيت", "Удома", "Evde", "În casă", "Вкъщи"),
  "Buiten en onderweg": S("Outside and on the way", "في الخارج وفي الطريق", "Надворі й у дорозі", "Dışarıda ve yolda", "Afară și pe drum", "Навън и на път"),
  "Buiten": S("Outside", "في الخارج", "Надворі", "Dışarıda", "Afară", "Навън"),
  "Je lichaam": S("Your body", "جسمك", "Твоє тіло", "Vücudun", "Corpul tău", "Твоето тяло"),
  "de en het": S("de and het", "de و het", "de і het", "de ve het", "de și het", "de и het"),
  "Truc": S("Trick", "حيلة", "Хитрість", "Püf noktası", "Truc", "Трик"),
  "Wat trek ik aan?": S("What do I put on?", "ماذا ألبس؟", "Що я вдягаю?", "Ne giyerim?", "Ce îmbrac?", "Какво обличам?"),
  "Wat eet en drink ik?": S("What do I eat and drink?", "ماذا آكل وأشرب؟", "Що я їм і п'ю?", "Ne yer ve içerim?", "Ce mănânc și ce beau?", "Какво ям и пия?"),
  "Wat is er in huis?": S("What is in the house?", "ماذا يوجد في البيت؟", "Що є вдома?", "Evde neler var?", "Ce este în casă?", "Какво има вкъщи?"),
  "Wat zie ik buiten?": S("What do I see outside?", "ماذا أرى في الخارج؟", "Що я бачу надворі?", "Dışarıda ne görürüm?", "Ce văd afară?", "Какво виждам навън?"),
  "Hoe heten de delen van mijn lichaam?": S("What are the parts of my body called?", "ما أسماء أجزاء جسمي؟", "Як називаються частини мого тіла?", "Vücudumun bölümlerinin adı ne?", "Cum se numesc părțile corpului meu?", "Как се казват частите на тялото ми?"),
  "Woorden voor **kleren**: wat trek je aan?": S("Words for **clothes**: what do you put on?", "كلمات عن **الملابس**: ماذا تلبس؟", "Слова про **одяг**: що ти вдягаєш?", "**Kıyafet** kelimeleri: ne giyersin?", "Cuvinte pentru **haine**: ce îmbraci?", "Думи за **дрехи**: какво обличаш?"),
  "Woorden voor **eten** en **drinken**.": S("Words for **food** and **drink**.", "كلمات عن **الطعام** و**الشراب**.", "Слова про **їжу** і **напої**.", "**Yiyecek** ve **içecek** kelimeleri.", "Cuvinte pentru **mâncare** și **băutură**.", "Думи за **храна** и **напитки**."),
  "Woorden voor de **kamers** en **spullen** in huis.": S("Words for the **rooms** and **things** in the house.", "كلمات عن **الغرف** و**الأشياء** في البيت.", "Слова про **кімнати** й **речі** вдома.", "Evdeki **odalar** ve **eşyalar** için kelimeler.", "Cuvinte pentru **camerele** și **lucrurile** din casă.", "Думи за **стаите** и **нещата** вкъщи."),
  "Woorden voor **buiten** en **onderweg**.": S("Words for **outside** and **on the way**.", "كلمات عن **الخارج** و**الطريق**.", "Слова про **вулицю** і **дорогу**.", "**Dışarısı** ve **yol** için kelimeler.", "Cuvinte pentru **afară** și **pe drum**.", "Думи за **навън** и **на път**."),
  "Nog meer woorden voor je **lichaam**.": S("More words for your **body**.", "كلمات أخرى عن **جسمك**.", "Ще слова про твоє **тіло**.", "**Vücudun** için daha fazla kelime.", "Mai multe cuvinte pentru **corpul** tău.", "Още думи за твоето **тяло**."),
  "Leer het woord altijd mét de of het.": S("Always learn the word with de or het.", "تعلّم الكلمة دائمًا مع de أو het.", "Завжди вчи слово з de або het.", "Kelimeyi her zaman de ya da het ile öğren.", "Învață mereu cuvântul cu de sau het.", "Винаги учи думата с de или het."),
  "Zeg het woord hardop en wijs het aan.": S("Say the word out loud and point to it.", "قل الكلمة بصوت عالٍ وأشر إليها.", "Скажи слово вголос і покажи на нього.", "Kelimeyi yüksek sesle söyle ve onu göster.", "Spune cuvântul cu voce tare și arată-l.", "Кажи думата на глас и я посочи."),
  "Kies het Nederlandse woord.": S("Choose the Dutch word.", "اختر الكلمة الهولندية.", "Вибери нідерландське слово.", "Felemenkçe kelimeyi seç.", "Alege cuvântul olandez.", "Избери нидерландската дума."),
  "Ik trek mijn broek aan.": S("I put on my trousers.", "ألبس بنطالي.", "Я вдягаю штани.", "Pantolonumu giyiyorum.", "Îmi pun pantalonii.", "Обличам си панталона."),
  "Ik eet rijst met groente.": S("I eat rice with vegetables.", "آكل الأرز مع الخضار.", "Я їм рис з овочами.", "Sebzeli pirinç yiyorum.", "Mănânc orez cu legume.", "Ям ориз със зеленчуци."),
  "Mama kookt in de keuken.": S("Mum cooks in the kitchen.", "ماما تطبخ في المطبخ.", "Мама готує на кухні.", "Annem mutfakta yemek pişiriyor.", "Mama gătește în bucătărie.", "Мама готви в кухнята."),
  "Ik ga met de fiets naar school.": S("I go to school by bike.", "أذهب إلى المدرسة بالدرّاجة.", "Я їду до школи на велосипеді.", "Okula bisikletle gidiyorum.", "Merg la școală cu bicicleta.", "Отивам на училище с колело."),
  "Ik steek mijn arm op.": S("I put up my arm.", "أرفع ذراعي.", "Я піднімаю руку.", "Kolumu kaldırıyorum.", "Ridic brațul.", "Вдигам ръка."),
  "Meer woorden: kleding, eten en drinken, in huis, buiten en je lichaam. Vijfentwintig nieuwe woorden. Lees de vraag en kies het goede woord. Ken je een woord niet? Tik op het knopje ernaast. ~15 min.":
    S("More words: clothes, food and drink, in the house, outside and your body. Twenty-five new words. Read the question and choose the right word. Don't know a word? Tap the small button next to it. ~15 min.", "كلمات أكثر: الملابس، الطعام والشراب، في البيت، في الخارج وجسمك. خمس وعشرون كلمة جديدة. اقرأ السؤال واختر الكلمة الصحيحة. لا تعرف كلمة؟ اضغط على الزر الصغير بجانبها. ~15 دقيقة.", "Більше слів: одяг, їжа й напої, удома, надворі та твоє тіло. Двадцять п'ять нових слів. Прочитай запитання і вибери правильне слово. Не знаєш слова? Натисни на кнопочку поруч. ~15 хв.", "Daha fazla kelime: kıyafetler, yiyecek ve içecek, evde, dışarıda ve vücudun. Yirmi beş yeni kelime. Soruyu oku ve doğru kelimeyi seç. Bir kelimeyi bilmiyor musun? Yanındaki küçük düğmeye dokun. ~15 dk.", "Mai multe cuvinte: haine, mâncare și băutură, în casă, afară și corpul tău. Douăzeci și cinci de cuvinte noi. Citește întrebarea și alege cuvântul potrivit. Nu știi un cuvânt? Apasă pe butonul mic de lângă el. ~15 min.", "Още думи: дрехи, храна и напитки, вкъщи, навън и твоето тяло. Двадесет и пет нови думи. Прочети въпроса и избери правилната дума. Не знаеш някоя дума? Докосни малкото копче до нея. ~15 мин."),
};
// "Leer elk woord mét de of het: **de broek**, **de trui**." per thema.
for (const [a, b] of [["de broek", "de trui"], ["de rijst", "het ei"], ["de keuken", "het bed"], ["de fiets", "de bus"], ["de arm", "het been"]]) {
  TEKST_STEUN["Leer elk woord mét **de** of **het**: **" + a + "**, **" + b + "**."] = S(
    `Learn every word with **de** or **het**: **${a}**, **${b}**.`,
    `تعلّم كل كلمة مع **de** أو **het**: **${a}**، **${b}**.`,
    `Вчи кожне слово з **de** або **het**: **${a}**, **${b}**.`,
    `Her kelimeyi **de** ya da **het** ile öğren: **${a}**, **${b}**.`,
    `Învață fiecare cuvânt cu **de** sau **het**: **${a}**, **${b}**.`,
    `Учи всяка дума с **de** или **het**: **${a}**, **${b}**.`);
}
// De betekenis-zinnen staan ook als uitleg in het uitlegPad → tikbaar maken.
for (const [woord, zin] of Object.entries(BETEKENIS)) {
  const t = WOORDENBOEK[woord];
  if (t && !TEKST_STEUN[zin]) TEKST_STEUN[zin] = S(`${woord} = ${t.en}`, `${woord} = ${t.ar}`, `${woord} = ${t.uk}`, `${woord} = ${t.tr}`, `${woord} = ${t.ro}`, `${woord} = ${t.bg}`);
}

const woorden2Nieuwkomers = {
  id: "woorden-2-nieuwkomers",
  title: "Meer woorden — kleding, eten, huis, buiten, lichaam (nieuwkomers)",
  emoji: "🧺",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Woordenschat — basiswoorden per thema",
  prerequisites: [{ id: "woorden-nieuwkomers", title: "Woorden — je eerste Nederlandse woorden", niveau: "groep3-4" }],
  intro: "Meer woorden: kleding, eten en drinken, in huis, buiten en je lichaam. Vijfentwintig nieuwe woorden. Lees de vraag en kies het goede woord. Ken je een woord niet? Tik op het knopje ernaast. ~15 min.",
  triggerKeywords: ["nieuwkomers", "woorden", "woordenschat", "nt2", "kleding", "eten", "lichaam", "de het"],
  chapters,
  steps,
  steunTeksten: { ...NIEUWKOMERS_STEUN, ...WOORDENBOEK, ...TEKST_STEUN, ...HINT_STEUN }, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default woorden2Nieuwkomers;
