// Leerpad: Woorden — de eerste woorden in het Nederlands (nieuwkomers).
// Gebouwd 24 sep 2026 voor het Nieuwkomer-pakket. 20 vragen in 4 delen (school,
// thuis en eten, lichaam en kleuren, doe-woorden). Geen plaatjes: een korte Nederlandse vraag,
// het kind kiest het Nederlandse woord; de eigen taal (en/ar/uk/tr) alleen na een tik.
// Zonder gekozen taal staat Engels erbij. Elke stap begint met uitleg in drie stappen.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
const stepEmojis = ["🏫", "🏠", "🧍", "✋"];
const chapters = [
  { letter: "A", title: "Op school", emoji: "🏫", from: 0, to: 0 },
  { letter: "B", title: "Thuis en eten", emoji: "🏠", from: 1, to: 1 },
  { letter: "C", title: "Lichaam en kleuren", emoji: "🧍", from: 2, to: 2 },
  { letter: "D", title: "Doe-woorden in de klas", emoji: "✋", from: 3, to: 3 },
];

// 🌍 Woordenboekje voor het vertaalknopje bij elk ANTWOORD (Mark 24 sep 2026: hij tikte op
// 'de stoel' om te vertalen en dat telde als fout antwoord → dus een knopje ernaast).
// Bewuste keuze: dit verklapt het antwoord als je alle vier tikt, maar het kind leest dan
// wél vier Nederlandse woorden mét de/het naast de eigen taal — leren, geen toets.
const WOORDENBOEK = {
  "de tafel": { en: "the table", ar: "الطاولة", uk: "стіл", tr: "masa" },
  "de stoel": { en: "the chair", ar: "الكرسي", uk: "стілець", tr: "sandalye" },
  "de deur": { en: "the door", ar: "الباب", uk: "двері", tr: "kapı" },
  "het raam": { en: "the window", ar: "النافذة", uk: "вікно", tr: "pencere" },
  "de tas": { en: "the bag", ar: "الحقيبة", uk: "сумка", tr: "çanta" },
  "de pen": { en: "the pen", ar: "القلم", uk: "ручка", tr: "kalem" },
  "het boek": { en: "the book", ar: "الكتاب", uk: "книжка", tr: "kitap" },
  "het bord": { en: "the board (in class)", ar: "السبّورة", uk: "дошка", tr: "tahta" },
  "de jas": { en: "the coat", ar: "المعطف", uk: "куртка", tr: "mont" },
  "de juf": { en: "the (female) teacher", ar: "المعلّمة", uk: "вчителька", tr: "kadın öğretmen" },
  "de meester": { en: "the (male) teacher", ar: "المعلّم", uk: "вчитель", tr: "erkek öğretmen" },
  "het kind": { en: "the child", ar: "الطفل", uk: "дитина", tr: "çocuk" },
  "de moeder": { en: "the mother", ar: "الأم", uk: "мама", tr: "anne" },
  "het huis": { en: "the house", ar: "البيت", uk: "будинок", tr: "ev" },
  "de school": { en: "the school", ar: "المدرسة", uk: "школа", tr: "okul" },
  "de auto": { en: "the car", ar: "السيارة", uk: "машина", tr: "araba" },
  "de tuin": { en: "the garden", ar: "الحديقة", uk: "сад", tr: "bahçe" },
  "de melk": { en: "the milk", ar: "الحليب", uk: "молоко", tr: "süt" },
  "de appel": { en: "the apple", ar: "التفاحة", uk: "яблуко", tr: "elma" },
  "het water": { en: "the water", ar: "الماء", uk: "вода", tr: "su" },
  "het brood": { en: "the bread", ar: "الخبز", uk: "хліб", tr: "ekmek" },
  "de kaas": { en: "the cheese", ar: "الجبن", uk: "сир", tr: "peynir" },
  "de banaan": { en: "the banana", ar: "الموزة", uk: "банан", tr: "muz" },
  "de vader": { en: "the father", ar: "الأب", uk: "тато", tr: "baba" },
  "de zus": { en: "the sister", ar: "الأخت", uk: "сестра", tr: "kız kardeş" },
  "het hoofd": { en: "the head", ar: "الرأس", uk: "голова", tr: "baş" },
  "de hand": { en: "the hand", ar: "اليد", uk: "рука (кисть)", tr: "el" },
  "de voet": { en: "the foot", ar: "القدم", uk: "стопа", tr: "ayak" },
  "de buik": { en: "the belly", ar: "البطن", uk: "живіт", tr: "karın" },
  "het oog": { en: "the eye", ar: "العين", uk: "око", tr: "göz" },
  "het oor": { en: "the ear", ar: "الأذن", uk: "вухо", tr: "kulak" },
  "de neus": { en: "the nose", ar: "الأنف", uk: "ніс", tr: "burun" },
  "de mond": { en: "the mouth", ar: "الفم", uk: "рот", tr: "ağız" },
  "rood": { en: "red", ar: "أحمر", uk: "червоний", tr: "kırmızı" },
  "blauw": { en: "blue", ar: "أزرق", uk: "синій", tr: "mavi" },
  "geel": { en: "yellow", ar: "أصفر", uk: "жовтий", tr: "sarı" },
  "groen": { en: "green", ar: "أخضر", uk: "зелений", tr: "yeşil" },
  "wit": { en: "white", ar: "أبيض", uk: "білий", tr: "beyaz" },
  // Deel D — doe-woorden uit de LOWAN-schooltaalwoordenlijst (instructiewoorden).
  "schrijven": { en: "to write", ar: "يكتب", uk: "писати", tr: "yazmak" },
  "lezen": { en: "to read", ar: "يقرأ", uk: "читати", tr: "okumak" },
  "knippen": { en: "to cut (with scissors)", ar: "يقصّ", uk: "вирізати ножицями", tr: "makasla kesmek" },
  "plakken": { en: "to glue / to stick", ar: "يلصق", uk: "клеїти", tr: "yapıştırmak" },
  "luisteren": { en: "to listen", ar: "يستمع", uk: "слухати", tr: "dinlemek" },
  "kijken": { en: "to look", ar: "ينظر", uk: "дивитися", tr: "bakmak" },
  "opruimen": { en: "to tidy up", ar: "يرتّب", uk: "прибирати", tr: "toplamak (ortalığı)" },
  "tekenen": { en: "to draw", ar: "يرسم", uk: "малювати", tr: "resim çizmek" },
  "kleuren": { en: "to colour", ar: "يلوّن", uk: "розфарбовувати", tr: "boyamak" },
  "tellen": { en: "to count", ar: "يعدّ", uk: "рахувати", tr: "saymak" },
};

// Woord-vraag (Mark 25 sep 2026: "we gaan niet iets in het Arabisch schrijven en dan vragen wat dat
// woord in het Nederlands betekent — alles is Nederlands, de vertaling is alleen om te lezen als je
// een woord niet kent"). Dus: een korte Nederlandse vraag, Nederlandse antwoorden; de eigen taal
// verschijnt pas na een tik op de vraag of het taalknopje. Let op: de vertaling van de vraag mag
// het goede woord niet noemen (bv. niet "تكتب" bij "Wat doe je?" → schrijven).
const VRAAG = {
  "de tafel": { nl: "Waar zit je aan als je eet of werkt?", en: "What do you sit at when you eat or work?", ar: "أين تجلس عندما تأكل أو تعمل؟", uk: "За чим ти сидиш, коли їси або працюєш?", tr: "Yemek yerken ya da çalışırken neyin başında oturursun?" },
  "de stoel": { nl: "Waar zit je op?", en: "What do you sit on?", ar: "على ماذا تجلس؟", uk: "На чому ти сидиш?", tr: "Neyin üstünde oturursun?" },
  "het boek": { nl: "Daar staan verhalen in. Je leest erin. Wat is het?", en: "It has stories in it. You read it. What is it?", ar: "فيه قصص وأنت تقرأ فيه. ما هو؟", uk: "У ньому є історії. Ти його читаєш. Що це?", tr: "İçinde hikâyeler var, onu okursun. Nedir?" },
  "de pen": { nl: "Waarmee schrijf je?", en: "What do you write with?", ar: "بماذا تكتب؟", uk: "Чим ти пишеш?", tr: "Ne ile yazarsın?" },
  "de juf": { nl: "Een vrouw geeft les in de klas. Hoe noem je haar?", en: "A woman teaches in the class. What do you call her?", ar: "امرأة تدرّس في الصف. ماذا تسمّيها؟", uk: "Жінка навчає в класі. Як ти її називаєш?", tr: "Sınıfta bir kadın ders veriyor. Ona ne dersin?" },
  "het huis": { nl: "Waar woon je met je familie?", en: "Where do you live with your family?", ar: "أين تسكن مع عائلتك؟", uk: "Де ти живеш зі своєю сім’єю?", tr: "Ailenle nerede yaşarsın?" },
  "het brood": { nl: "Waar maak je een boterham van?", en: "What do you make a sandwich from?", ar: "من ماذا تصنع شطيرة؟", uk: "З чого ти робиш бутерброд?", tr: "Sandviçi neyle yaparsın?" },
  "het water": { nl: "Wat komt er uit de kraan? Je kunt het drinken.", en: "What comes out of the tap? You can drink it.", ar: "ماذا يخرج من الحنفية؟ يمكنك أن تشربه.", uk: "Що тече з крана? Це можна пити.", tr: "Musluktan ne akar? Onu içebilirsin." },
  "de appel": { nl: "Welk fruit is rond en rood of groen?", en: "Which fruit is round and red or green?", ar: "أيّ فاكهة مستديرة وحمراء أو خضراء؟", uk: "Який фрукт круглий і червоний або зелений?", tr: "Hangi meyve yuvarlak ve kırmızı ya da yeşildir?" },
  "de moeder": { nl: "Een ander woord voor mama is …", en: "Another word for mum is …", ar: "كلمة أخرى لـ«ماما» هي …", uk: "Інше слово для «мама» — …", tr: "«Mama» için başka bir kelime …" },
  "het hoofd": { nl: "Waar zet je een pet op?", en: "What do you put a cap on?", ar: "على ماذا تضع القبعة؟", uk: "На що ти вдягаєш кепку?", tr: "Şapkayı nereye takarsın?" },
  "de hand": { nl: "Waarmee pak je iets?", en: "What do you pick something up with?", ar: "بماذا تمسك شيئًا؟", uk: "Чим ти береш щось?", tr: "Bir şeyi neyle tutarsın?" },
  "het oog": { nl: "Waarmee kijk je?", en: "What do you look with?", ar: "بماذا تنظر؟", uk: "Чим ти дивишся?", tr: "Neyle bakarsın?" },
  "rood": { nl: "Welke kleur heeft een aardbei?", en: "What colour is a strawberry?", ar: "ما لون الفراولة؟", uk: "Якого кольору полуниця?", tr: "Çilek ne renktir?" },
  "blauw": { nl: "Welke kleur heeft de lucht als de zon schijnt?", en: "What colour is the sky when the sun shines?", ar: "ما لون السماء عندما تشرق الشمس؟", uk: "Якого кольору небо, коли світить сонце?", tr: "Güneş parlarken gökyüzü ne renktir?" },
  "schrijven": { nl: "Je maakt letters met je pen. Wat doe je?", en: "You make letters with your pen. What are you doing?", ar: "تصنع حروفًا بقلمك. ماذا تفعل؟", uk: "Ти робиш букви ручкою. Що ти робиш?", tr: "Kalemle harfler yapıyorsun. Ne yapıyorsun?" },
  "knippen": { nl: "Je hebt een schaar en papier in je hand. Wat doe je?", en: "You have scissors and paper in your hand. What do you do?", ar: "في يدك مقصّ وورقة. ماذا تفعل؟", uk: "У тебе в руці ножиці й папір. Що ти робиш?", tr: "Elinde makas ve kâğıt var. Ne yaparsın?" },
  "luisteren": { nl: "De juf praat. Je bent stil en hoort wat ze zegt. Wat doe je?", en: "The teacher talks. You are quiet and hear what she says. What are you doing?", ar: "المعلّمة تتكلّم. أنت هادئ وتسمع ما تقوله. ماذا تفعل؟", uk: "Учителька говорить. Ти тихо сидиш і чуєш, що вона каже. Що ти робиш?", tr: "Öğretmen konuşuyor. Sessizsin ve söylediğini duyuyorsun. Ne yapıyorsun?" },
  "opruimen": { nl: "Je legt alles terug op zijn plek. Wat doe je?", en: "You put everything back in its place. What are you doing?", ar: "تعيد كل شيء إلى مكانه. ماذا تفعل؟", uk: "Ти кладеш усе на своє місце. Що ти робиш?", tr: "Her şeyi yerine koyuyorsun. Ne yapıyorsun?" },
  "kleuren": { nl: "Je maakt een tekening vol met rood, blauw en geel. Wat doe je?", en: "You fill a drawing with red, blue and yellow. What are you doing?", ar: "تملأ رسمة بالأحمر والأزرق والأصفر. ماذا تفعل؟", uk: "Ти заповнюєш малюнок червоним, синім і жовтим. Що ти робиш?", tr: "Bir resmi kırmızı, mavi ve sarıyla dolduruyorsun. Ne yapıyorsun?" },
};
// Herschreven padteksten (uitleg, intro) met hun vertaling voor de tik.
const TEKST_STEUN = {
  "Lees de vraag. Kies het **Nederlandse** woord dat past. Ken je een woord niet? **Tik** erop: dan zie je het in jouw taal.": { en: "Read the question. Choose the **Dutch** word that fits. Don't know a word? **Tap** it: then you see it in your language.", ar: "اقرأ السؤال. اختر الكلمة **الهولندية** المناسبة. لا تعرف كلمة؟ **اضغط** عليها: فتراها بلغتك.", uk: "Прочитай запитання. Вибери **нідерландське** слово, яке підходить. Не знаєш слова? **Натисни** на нього: і побачиш його своєю мовою.", tr: "Soruyu oku. Uyan **Felemenkçe** kelimeyi seç. Bir kelimeyi bilmiyor musun? Ona **dokun**: kendi dilinde görürsün." },
  "Aan de tafel eet je. Op de stoel zit je.": { en: "You eat at the table. You sit on the chair.", ar: "على الطاولة تأكل. على الكرسي تجلس.", uk: "За столом ти їси. На стільці ти сидиш.", tr: "Masada yemek yersin. Sandalyede oturursun." },
  "Lees de vraag en kies het **Nederlandse** woord dat past.\n\nLeer elk woord met **de** of **het** ervoor: de tafel, het boek.\n\nKen je een woord niet? Tik erop, dan zie je het in jouw taal.": { en: "Read the question and choose the **Dutch** word that fits.\n\nLearn every word with **de** or **het** in front: de tafel, het boek.\n\nDon't know a word? Tap it to see it in your language.", ar: "اقرأ السؤال واختر الكلمة **الهولندية** المناسبة.\n\nتعلّم كل كلمة مع **de** أو **het** قبلها: de tafel، het boek.\n\nلا تعرف كلمة؟ اضغط عليها لتراها بلغتك.", uk: "Прочитай запитання і вибери **нідерландське** слово, яке підходить.\n\nВчи кожне слово з **de** або **het** перед ним: de tafel, het boek.\n\nНе знаєш слова? Натисни на нього, і побачиш його своєю мовою.", tr: "Soruyu oku ve uyan **Felemenkçe** kelimeyi seç.\n\nHer kelimeyi önündeki **de** ya da **het** ile öğren: de tafel, het boek.\n\nBir kelimeyi bilmiyor musun? Ona dokun, kendi dilinde gör." },
  "Twintig woorden voor school, thuis, eten, lichaam, kleuren en doe-woorden. Lees de vraag en kies het goede woord. Tik op een woord als je het niet kent. ~12 min.": { en: "Twenty words for school, home, food, body, colours and action words. Read the question and choose the right word. Tap a word if you don't know it. ~12 min.", ar: "عشرون كلمة للمدرسة والبيت والطعام والجسم والألوان وكلمات الأفعال. اقرأ السؤال واختر الكلمة الصحيحة. اضغط على كلمة إذا كنت لا تعرفها. ~12 دقيقة.", uk: "Двадцять слів про школу, дім, їжу, тіло, кольори і дії. Прочитай запитання і вибери правильне слово. Натисни на слово, якщо не знаєш його. ~12 хв.", tr: "Okul, ev, yemek, vücut, renkler ve eylemler için yirmi kelime. Soruyu oku ve doğru kelimeyi seç. Bilmediğin bir kelimeye dokun. ~12 dk." },
};
let zaad = 7;
const rnd = () => { zaad = (zaad * 9301 + 49297) % 233280; return zaad / 233280; };
const schud = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
// Foutscherm-hint (Mark 25 sep 2026: "wat betekent dit, kijk naar het woord in jouw taal?" —
// de oude hint herhaalde alleen de opdracht). Nu: welk woord je koos en wat dát betekent in
// je eigen taal, zodat je ziet waaróm het niet past. Tekst hangt alleen af van het gekozen
// woord (niet van de vraag), dus één vertaling per woord klopt in elke vraag.
const HINT_STEUN = {};
const foutHint = (o) => {
  const t = WOORDENBOEK[o];
  const nl = `Jij koos '${o}'. Dat is een ander woord. Probeer het nog eens.`;
  if (t && !HINT_STEUN[nl]) HINT_STEUN[nl] = {
    en: `You chose '${o}'. That means: ${t.en}. Try again.`,
    ar: `اخترت «${o}». معناها: ${t.ar}. حاول مرة أخرى.`,
    uk: `Ти вибрав(-ла) «${o}». Це означає: ${t.uk}. Спробуй ще раз.`,
    tr: `'${o}' seçtin. Anlamı: ${t.tr}. Tekrar dene.`,
  };
  return nl;
};
const w = (goed, fout, extra = {}) => {
  const { nl: q, ...steun } = VRAAG[goed];
  const opts = schud([goed, ...fout]);
  const answer = opts.indexOf(goed);
  return { q, options: opts, answer, wrongHints: opts.map((o, i) => (i === answer ? null : foutHint(o))), steun, steunOpties: Object.fromEntries(opts.map((o) => [o, WOORDENBOEK[o]]).filter(([, v]) => v)), ...extra };
};

const school = [
  w("de tafel", ["de stoel", "de deur", "het raam"], { uitlegPad: {
    stappen: [
      { titel: "Zo werkt dit", tekst: "Lees de vraag. Kies het **Nederlandse** woord dat past. Ken je een woord niet? **Tik** erop: dan zie je het in jouw taal." },
      { titel: "De tafel", tekst: "Aan een **tafel** zit je. Je werkt eraan. Je eet eraan." },
      { titel: "de en het", tekst: "In het Nederlands hoort **de** of **het** bij een woord. Leer ze samen: **de tafel**, **het raam**." },
    ],
    woorden: [{ woord: "de tafel", uitleg: "Daar zit je aan." }, { woord: "de stoel", uitleg: "Daar zit je op." }],
    theorie: "Leer het woord altijd mét de of het.",
    voorbeelden: [{ type: "stap", tekst: "de tafel, de stoel, de deur" }, { type: "stap", tekst: "het raam, het boek, het bord" }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Zeg het woord hardop met de of het ervoor." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Aan de tafel eet je. Op de stoel zit je.", nogSimpeler: "de tafel" },
  } }),
  w("de stoel", ["de tafel", "de tas", "de pen"]),
  w("het boek", ["de pen", "de tas", "het bord"]),
  w("de pen", ["het boek", "de stoel", "de jas"]),
  w("de juf", ["de meester", "het kind", "de moeder"]),
];

const thuis = [
  w("het huis", ["de school", "de auto", "de tuin"], { uitlegPad: {
    stappen: [
      { titel: "Thuis", tekst: "**Thuis** is waar je woont. Dat is je **huis**." },
      { titel: "In huis", tekst: "In huis zijn de **keuken** (koken), de **kamer** (zitten) en de **slaapkamer** (slapen)." },
      { titel: "Eten", tekst: "**Brood**, **water**, **melk**, **appel**: woorden die je elke dag hoort." },
    ],
    woorden: [{ woord: "het huis", uitleg: "Waar je woont." }, { woord: "de keuken", uitleg: "Waar je kookt." }],
    theorie: "Huis = waar je woont.",
    voorbeelden: [{ type: "stap", tekst: "Ik ga naar huis." }, { type: "stap", tekst: "Mama is in de keuken." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Zeg elke dag één woord hardop in huis." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Waar je woont = het huis.", nogSimpeler: "het huis" },
  } }),
  w("het brood", ["de melk", "de appel", "het water"]),
  w("het water", ["de melk", "het brood", "de kaas"]),
  w("de appel", ["de banaan", "het brood", "de kaas"]),
  w("de moeder", ["de vader", "de juf", "de zus"]),
];

const lichaam = [
  w("het hoofd", ["de hand", "de voet", "de buik"], { uitlegPad: {
    stappen: [
      { titel: "Je lichaam", tekst: "**Hoofd** (boven), **buik** (midden), **voet** (onder). **Hand**: daar pak je mee." },
      { titel: "Kleuren", tekst: "**Rood**, **blauw**, **geel**, **groen**. Kijk om je heen: wat is rood?" },
      { titel: "Wijs aan", tekst: "Zeg het woord en **wijs** het aan. Zo onthoud je het sneller." },
    ],
    woorden: [{ woord: "het hoofd", uitleg: "Bovenaan je lichaam." }, { woord: "de hand", uitleg: "Daar pak je mee." }],
    theorie: "Wijs aan wat je zegt.",
    voorbeelden: [{ type: "stap", tekst: "Dit is mijn hand." }, { type: "stap", tekst: "De appel is rood." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Woord + aanwijzen." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Bovenaan je lichaam = het hoofd.", nogSimpeler: "het hoofd" },
  } }),
  w("de hand", ["de voet", "het oog", "het oor"]),
  w("het oog", ["het oor", "de neus", "de mond"]),
  w("rood", ["blauw", "geel", "groen"]),
  w("blauw", ["rood", "geel", "wit"]),
];

// Deel D (24 sep 2026): doe-woorden uit de LOWAN-schooltaalwoordenlijst — de woorden
// die een kind moet kennen om een opdracht in de klas te begrijpen. Geen plaatjes:
// het woord staat in de eigen taal + "doe het na" (wijs-en-doe, zoals TPR).
const doen = [
  w("schrijven", ["lezen", "tekenen", "tellen"], { uitlegPad: {
    stappen: [
      { titel: "Doe-woorden", tekst: "Een **doe-woord** zegt wat je **doet**: schrijven, knippen, luisteren." },
      { titel: "Doe het na", tekst: "Hoor je **schrijven**? Pak je pen. Hoor je **luisteren**? Wees stil en kijk naar de juf." },
      { titel: "In de klas", tekst: "De juf zegt vaak: **Schrijf** je naam. **Knip** het uit. **Ruim** je tafel **op**." },
    ],
    woorden: [{ woord: "schrijven", uitleg: "Letters maken met een pen of potlood." }, { woord: "opruimen", uitleg: "Alles terugleggen op zijn plek." }],
    theorie: "Doe-woord = wat je doet.",
    voorbeelden: [{ type: "stap", tekst: "Schrijf je naam." }, { type: "stap", tekst: "Knip het uit." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Doe het woord meteen na met je handen." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Letters maken met een pen = schrijven.", nogSimpeler: "schrijven" },
  } }),
  w("knippen", ["plakken", "kleuren", "kijken"]),
  w("luisteren", ["kijken", "lezen", "schrijven"]),
  w("opruimen", ["tekenen", "tellen", "plakken"]),
  w("kleuren", ["knippen", "lezen", "luisteren"]),
];

const steps = [
  { title: "Op school", explanation: "Lees de vraag en kies het **Nederlandse** woord dat past.\n\nLeer elk woord met **de** of **het** ervoor: de tafel, het boek.\n\nKen je een woord niet? Tik erop, dan zie je het in jouw taal.", checks: school },
  { title: "Thuis en eten", explanation: "Woorden voor **thuis** en **eten**.\n\nZeg ze hardop. Wijs ze aan in huis.", checks: thuis },
  { title: "Lichaam en kleuren", explanation: "Woorden voor je **lichaam** en voor **kleuren**.\n\nWijs aan wat je zegt. Zo onthoud je het.", checks: lichaam },
  { title: "Doe-woorden in de klas", explanation: "De juf of meester zegt vaak wat je moet **doen**.\n\n**Schrijf**, **knip**, **luister**, **ruim op**, **kleur**.\n\nDoe het woord meteen na: pak een pen als je **schrijven** hoort. Zo onthoud je het.", checks: doen },
];
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordenNieuwkomers = {
  id: "woorden-nieuwkomers",
  title: "Woorden — je eerste Nederlandse woorden (nieuwkomers)",
  emoji: "🔤",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Woordenschat — basiswoorden",
  prerequisites: [],
  intro: "Twintig woorden voor school, thuis, eten, lichaam, kleuren en doe-woorden. Lees de vraag en kies het goede woord. Tik op een woord als je het niet kent. ~12 min.",
  triggerKeywords: ["nieuwkomers", "woorden", "woordenschat", "nt2", "eerste woorden", "nederlands leren", "de het"],
  chapters,
  steps,
  steunTeksten: { ...NIEUWKOMERS_STEUN, ...TEKST_STEUN, ...HINT_STEUN }, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default woordenNieuwkomers;
