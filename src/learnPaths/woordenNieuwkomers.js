// Leerpad: Woorden — de eerste woorden in het Nederlands (nieuwkomers).
// Gebouwd 24 sep 2026 voor het Nieuwkomer-pakket. 20 vragen in 4 delen (school,
// thuis en eten, lichaam en kleuren, doe-woorden). Een korte Nederlandse vraag (sinds 26 sep met
// plaatjes bij de antwoorden waar de set er een heeft, zie nieuwkomersPicto.js),
// het kind kiest het Nederlandse woord; de eigen taal (en/ar/uk/tr/ro/bg) alleen na een tik.
// Zonder gekozen taal staat Engels erbij. Elke stap begint met uitleg in drie stappen.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { pictoVoor } from "./nieuwkomersPicto.js";
const stepEmojis = ["🏫", "🏠", "🧍", "✋", "💬"];
const chapters = [
  { letter: "A", title: "Welke woorden hoor ik op school?", emoji: "🏫", from: 0, to: 0 },
  { letter: "B", title: "Welke woorden hoor ik thuis en bij het eten?", emoji: "🏠", from: 1, to: 1 },
  { letter: "C", title: "Hoe heten mijn lichaam en de kleuren?", emoji: "🧍", from: 2, to: 2 },
  { letter: "D", title: "Wat moet ik doen in de klas?", emoji: "✋", from: 3, to: 3 },
  { letter: "E", title: "Hoe zeg ik hoe ik me voel?", emoji: "💬", from: 4, to: 4 },
];

// 🌍 Woordenboekje voor het vertaalknopje bij elk ANTWOORD (Mark 24 sep 2026: hij tikte op
// 'de stoel' om te vertalen en dat telde als fout antwoord → dus een knopje ernaast).
// Bewuste keuze: dit verklapt het antwoord als je alle vier tikt, maar het kind leest dan
// wél vier Nederlandse woorden mét de/het naast de eigen taal — leren, geen toets.
const WOORDENBOEK = {
  "de tafel": { en: "the table", ar: "الطاولة", uk: "стіл", tr: "masa", ro: "masa", bg: "масата" },
  "de stoel": { en: "the chair", ar: "الكرسي", uk: "стілець", tr: "sandalye", ro: "scaunul", bg: "столът" },
  "de deur": { en: "the door", ar: "الباب", uk: "двері", tr: "kapı", ro: "ușa", bg: "вратата" },
  "het raam": { en: "the window", ar: "النافذة", uk: "вікно", tr: "pencere", ro: "fereastra", bg: "прозорецът" },
  "de tas": { en: "the bag", ar: "الحقيبة", uk: "сумка", tr: "çanta", ro: "geanta", bg: "чантата" },
  "de pen": { en: "the pen", ar: "القلم", uk: "ручка", tr: "kalem", ro: "pixul", bg: "химикалката" },
  "het boek": { en: "the book", ar: "الكتاب", uk: "книжка", tr: "kitap", ro: "cartea", bg: "книгата" },
  "het bord": { en: "the board (in class)", ar: "السبّورة", uk: "дошка", tr: "tahta", ro: "tabla (din clasă)", bg: "дъската (в класа)" },
  "de jas": { en: "the coat", ar: "المعطف", uk: "куртка", tr: "mont", ro: "geaca", bg: "якето" },
  "de juf": { en: "the (female) teacher", ar: "المعلّمة", uk: "вчителька", tr: "kadın öğretmen", ro: "învățătoarea", bg: "учителката" },
  "de meester": { en: "the (male) teacher", ar: "المعلّم", uk: "вчитель", tr: "erkek öğretmen", ro: "învățătorul", bg: "учителят" },
  "het kind": { en: "the child", ar: "الطفل", uk: "дитина", tr: "çocuk", ro: "copilul", bg: "детето" },
  "de moeder": { en: "the mother", ar: "الأم", uk: "мама", tr: "anne", ro: "mama", bg: "майката" },
  "het huis": { en: "the house", ar: "البيت", uk: "будинок", tr: "ev", ro: "casa", bg: "къщата" },
  "de school": { en: "the school", ar: "المدرسة", uk: "школа", tr: "okul", ro: "școala", bg: "училището" },
  "de auto": { en: "the car", ar: "السيارة", uk: "машина", tr: "araba", ro: "mașina", bg: "колата" },
  "de tuin": { en: "the garden", ar: "الحديقة", uk: "сад", tr: "bahçe", ro: "grădina", bg: "градината" },
  "de melk": { en: "the milk", ar: "الحليب", uk: "молоко", tr: "süt", ro: "laptele", bg: "млякото" },
  "de appel": { en: "the apple", ar: "التفاحة", uk: "яблуко", tr: "elma", ro: "mărul", bg: "ябълката" },
  "het water": { en: "the water", ar: "الماء", uk: "вода", tr: "su", ro: "apa", bg: "водата" },
  "het brood": { en: "the bread", ar: "الخبز", uk: "хліб", tr: "ekmek", ro: "pâinea", bg: "хлябът" },
  "de kaas": { en: "the cheese", ar: "الجبن", uk: "сир", tr: "peynir", ro: "brânza", bg: "кашкавалът" },
  "de banaan": { en: "the banana", ar: "الموزة", uk: "банан", tr: "muz", ro: "banana", bg: "бананът" },
  "de vader": { en: "the father", ar: "الأب", uk: "тато", tr: "baba", ro: "tatăl", bg: "бащата" },
  "de zus": { en: "the sister", ar: "الأخت", uk: "сестра", tr: "kız kardeş", ro: "sora", bg: "сестрата" },
  "het hoofd": { en: "the head", ar: "الرأس", uk: "голова", tr: "baş", ro: "capul", bg: "главата" },
  "de hand": { en: "the hand", ar: "اليد", uk: "рука (кисть)", tr: "el", ro: "mâna", bg: "ръката (китката)" },
  "de voet": { en: "the foot", ar: "القدم", uk: "стопа", tr: "ayak", ro: "laba piciorului", bg: "стъпалото" },
  "de buik": { en: "the belly", ar: "البطن", uk: "живіт", tr: "karın", ro: "burta", bg: "коремът" },
  "het oog": { en: "the eye", ar: "العين", uk: "око", tr: "göz", ro: "ochiul", bg: "окото" },
  "het oor": { en: "the ear", ar: "الأذن", uk: "вухо", tr: "kulak", ro: "urechea", bg: "ухото" },
  "de neus": { en: "the nose", ar: "الأنف", uk: "ніс", tr: "burun", ro: "nasul", bg: "носът" },
  "de mond": { en: "the mouth", ar: "الفم", uk: "рот", tr: "ağız", ro: "gura", bg: "устата" },
  "rood": { en: "red", ar: "أحمر", uk: "червоний", tr: "kırmızı", ro: "roșu", bg: "червен" },
  "blauw": { en: "blue", ar: "أزرق", uk: "синій", tr: "mavi", ro: "albastru", bg: "син" },
  "geel": { en: "yellow", ar: "أصفر", uk: "жовтий", tr: "sarı", ro: "galben", bg: "жълт" },
  "groen": { en: "green", ar: "أخضر", uk: "зелений", tr: "yeşil", ro: "verde", bg: "зелен" },
  "wit": { en: "white", ar: "أبيض", uk: "білий", tr: "beyaz", ro: "alb", bg: "бял" },
  // Deel D — doe-woorden uit de LOWAN-schooltaalwoordenlijst (instructiewoorden).
  "schrijven": { en: "to write", ar: "يكتب", uk: "писати", tr: "yazmak", ro: "a scrie", bg: "пиша" },
  "lezen": { en: "to read", ar: "يقرأ", uk: "читати", tr: "okumak", ro: "a citi", bg: "чета" },
  "knippen": { en: "to cut (with scissors)", ar: "يقصّ", uk: "вирізати ножицями", tr: "makasla kesmek", ro: "a tăia (cu foarfeca)", bg: "режа (с ножица)" },
  "plakken": { en: "to glue / to stick", ar: "يلصق", uk: "клеїти", tr: "yapıştırmak", ro: "a lipi", bg: "лепя" },
  "luisteren": { en: "to listen", ar: "يستمع", uk: "слухати", tr: "dinlemek", ro: "a asculta", bg: "слушам" },
  "kijken": { en: "to look", ar: "ينظر", uk: "дивитися", tr: "bakmak", ro: "a privi", bg: "гледам" },
  "opruimen": { en: "to tidy up", ar: "يرتّب", uk: "прибирати", tr: "toplamak (ortalığı)", ro: "a face ordine", bg: "разтребвам" },
  "tekenen": { en: "to draw", ar: "يرسم", uk: "малювати", tr: "resim çizmek", ro: "a desena", bg: "рисувам" },
  "kleuren": { en: "to colour", ar: "يلوّن", uk: "розфарбовувати", tr: "boyamak", ro: "a colora", bg: "оцветявам" },
  "tellen": { en: "to count", ar: "يعدّ", uk: "рахувати", tr: "saymak", ro: "a număra", bg: "броя" },
  // Deel E (26 sep 2026) — gevoelswoorden (LOWAN-schooltaalwoordenlijst noemt emotiewoorden apart):
  // een kind dat net in een nieuw land is, moet kunnen zeggen dat het bang, moe of ziek is.
  "blij": { en: "happy", ar: "سعيد", uk: "радий", tr: "mutlu", ro: "bucuros", bg: "радостен" },
  "verdrietig": { en: "sad", ar: "حزين", uk: "сумний", tr: "üzgün", ro: "trist", bg: "тъжен" },
  "boos": { en: "angry", ar: "غاضب", uk: "сердитий", tr: "kızgın", ro: "supărat", bg: "ядосан" },
  "bang": { en: "scared", ar: "خائف", uk: "наляканий", tr: "korkmuş", ro: "speriat", bg: "уплашен" },
  "moe": { en: "tired", ar: "متعب", uk: "втомлений", tr: "yorgun", ro: "obosit", bg: "уморен" },
  "ziek": { en: "ill / sick", ar: "مريض", uk: "хворий", tr: "hasta", ro: "bolnav", bg: "болен" },
};

// Woord-vraag (Mark 25 sep 2026: "we gaan niet iets in het Arabisch schrijven en dan vragen wat dat
// woord in het Nederlands betekent — alles is Nederlands, de vertaling is alleen om te lezen als je
// een woord niet kent"). Dus: een korte Nederlandse vraag, Nederlandse antwoorden; de eigen taal
// verschijnt pas na een tik op de vraag of het taalknopje. Let op: de vertaling van de vraag mag
// het goede woord niet noemen (bv. niet "تكتب" bij "Wat doe je?" → schrijven).
const VRAAG = {
  "de tafel": { nl: "Waar zit je aan als je eet of werkt?", en: "What do you sit at when you eat or work?", ar: "أين تجلس عندما تأكل أو تعمل؟", uk: "За чим ти сидиш, коли їси або працюєш?", tr: "Yemek yerken ya da çalışırken neyin başında oturursun?", ro: "La ce stai când mănânci sau lucrezi?", bg: "Пред какво седиш, когато ядеш или работиш?" },
  "de stoel": { nl: "Waar zit je op?", en: "What do you sit on?", ar: "على ماذا تجلس؟", uk: "На чому ти сидиш?", tr: "Neyin üstünde oturursun?", ro: "Pe ce stai?", bg: "На какво седиш?" },
  "het boek": { nl: "Daar staan verhalen in. Je leest erin. Wat is het?", en: "It has stories in it. You read it. What is it?", ar: "فيه قصص وأنت تقرأ فيه. ما هو؟", uk: "У ньому є історії. Ти його читаєш. Що це?", tr: "İçinde hikâyeler var, onu okursun. Nedir?", ro: "În ea sunt povești. O citești. Ce este?", bg: "В нея има приказки. Четеш я. Какво е това?" },
  "de pen": { nl: "Waarmee schrijf je?", en: "What do you write with?", ar: "بماذا تكتب؟", uk: "Чим ти пишеш?", tr: "Ne ile yazarsın?", ro: "Cu ce scrii?", bg: "С какво пишеш?" },
  "de juf": { nl: "Een vrouw geeft les in de klas. Hoe noem je haar?", en: "A woman teaches in the class. What do you call her?", ar: "امرأة تدرّس في الصف. ماذا تسمّيها؟", uk: "Жінка навчає в класі. Як ти її називаєш?", tr: "Sınıfta bir kadın ders veriyor. Ona ne dersin?", ro: "O femeie predă în clasă. Cum îi spui?", bg: "Една жена преподава в класа. Как я наричаш?" },
  "het huis": { nl: "Waar woon je met je familie?", en: "Where do you live with your family?", ar: "أين تسكن مع عائلتك؟", uk: "Де ти живеш зі своєю сім’єю?", tr: "Ailenle nerede yaşarsın?", ro: "Unde locuiești cu familia ta?", bg: "Къде живееш със семейството си?" },
  "het brood": { nl: "Waar maak je een boterham van?", en: "What do you make a sandwich from?", ar: "من ماذا تصنع شطيرة؟", uk: "З чого ти робиш бутерброд?", tr: "Sandviçi neyle yaparsın?", ro: "Din ce faci un sandviș?", bg: "От какво правиш сандвич?" },
  "het water": { nl: "Wat komt er uit de kraan? Je kunt het drinken.", en: "What comes out of the tap? You can drink it.", ar: "ماذا يخرج من الحنفية؟ يمكنك أن تشربه.", uk: "Що тече з крана? Це можна пити.", tr: "Musluktan ne akar? Onu içebilirsin.", ro: "Ce curge de la robinet? Poți să bei.", bg: "Какво тече от чешмата? Можеш да го пиеш." },
  "de appel": { nl: "Welk fruit is rond en rood of groen?", en: "Which fruit is round and red or green?", ar: "أيّ فاكهة مستديرة وحمراء أو خضراء؟", uk: "Який фрукт круглий і червоний або зелений?", tr: "Hangi meyve yuvarlak ve kırmızı ya da yeşildir?", ro: "Ce fruct este rotund și roșu sau verde?", bg: "Кой плод е кръгъл и червен или зелен?" },
  "de moeder": { nl: "Een ander woord voor mama is …", en: "Another word for mum is …", ar: "كلمة أخرى لـ«ماما» هي …", uk: "Інше слово для «мама» — …", tr: "«Mama» için başka bir kelime …", ro: "Un alt cuvânt pentru „mama” este …", bg: "Друга дума за „мама“ е …" },
  "het hoofd": { nl: "Waar zet je een pet op?", en: "What do you put a cap on?", ar: "على ماذا تضع القبعة؟", uk: "На що ти вдягаєш кепку?", tr: "Şapkayı nereye takarsın?", ro: "Pe ce pui o șapcă?", bg: "На какво слагаш шапка?" },
  "de hand": { nl: "Waarmee pak je iets?", en: "What do you pick something up with?", ar: "بماذا تمسك شيئًا؟", uk: "Чим ти береш щось?", tr: "Bir şeyi neyle tutarsın?", ro: "Cu ce apuci ceva?", bg: "С какво хващаш нещо?" },
  "het oog": { nl: "Waarmee kijk je?", en: "What do you look with?", ar: "بماذا تنظر؟", uk: "Чим ти дивишся?", tr: "Neyle bakarsın?", ro: "Cu ce te uiți?", bg: "С какво гледаш?" },
  "rood": { nl: "Welke kleur heeft een aardbei?", en: "What colour is a strawberry?", ar: "ما لون الفراولة؟", uk: "Якого кольору полуниця?", tr: "Çilek ne renktir?", ro: "Ce culoare are o căpșună?", bg: "Какъв цвят е ягодата?" },
  "blauw": { nl: "Welke kleur heeft de lucht als de zon schijnt?", en: "What colour is the sky when the sun shines?", ar: "ما لون السماء عندما تشرق الشمس؟", uk: "Якого кольору небо, коли світить сонце?", tr: "Güneş parlarken gökyüzü ne renktir?", ro: "Ce culoare are cerul când strălucește soarele?", bg: "Какъв цвят е небето, когато грее слънцето?" },
  "schrijven": { nl: "Je maakt letters met je pen. Wat doe je?", en: "You make letters with your pen. What are you doing?", ar: "تصنع حروفًا بقلمك. ماذا تفعل؟", uk: "Ти робиш букви ручкою. Що ти робиш?", tr: "Kalemle harfler yapıyorsun. Ne yapıyorsun?", ro: "Faci litere cu pixul. Ce faci?", bg: "Правиш букви с химикалката. Какво правиш?" },
  "knippen": { nl: "Je hebt een schaar en papier in je hand. Wat doe je?", en: "You have scissors and paper in your hand. What do you do?", ar: "في يدك مقصّ وورقة. ماذا تفعل؟", uk: "У тебе в руці ножиці й папір. Що ти робиш?", tr: "Elinde makas ve kâğıt var. Ne yaparsın?", ro: "Ai o foarfecă și hârtie în mână. Ce faci?", bg: "Имаш ножица и хартия в ръката си. Какво правиш?" },
  "luisteren": { nl: "De juf praat. Je bent stil en hoort wat ze zegt. Wat doe je?", en: "The teacher talks. You are quiet and hear what she says. What are you doing?", ar: "المعلّمة تتكلّم. أنت هادئ وتسمع ما تقوله. ماذا تفعل؟", uk: "Учителька говорить. Ти тихо сидиш і чуєш, що вона каже. Що ти робиш?", tr: "Öğretmen konuşuyor. Sessizsin ve söylediğini duyuyorsun. Ne yapıyorsun?", ro: "Învățătoarea vorbește. Tu stai liniștit și auzi ce spune. Ce faci?", bg: "Учителката говори. Ти мълчиш и чуваш какво казва. Какво правиш?" },
  "opruimen": { nl: "Je legt alles terug op zijn plek. Wat doe je?", en: "You put everything back in its place. What are you doing?", ar: "تعيد كل شيء إلى مكانه. ماذا تفعل؟", uk: "Ти кладеш усе на своє місце. Що ти робиш?", tr: "Her şeyi yerine koyuyorsun. Ne yapıyorsun?", ro: "Pui totul la loc. Ce faci?", bg: "Слагаш всичко на мястото му. Какво правиш?" },
  "blij": { nl: "Je lacht. Je hebt een fijne dag. Hoe voel je je?", en: "You laugh. You are having a nice day. How do you feel?", ar: "أنت تضحك. يومك جميل. كيف تشعر؟", uk: "Ти смієшся. У тебе гарний день. Як ти почуваєшся?", tr: "Gülüyorsun. Güzel bir gün geçiriyorsun. Nasıl hissediyorsun?", ro: "Râzi. Ai o zi frumoasă. Cum te simți?", bg: "Смееш се. Имаш хубав ден. Как се чувстваш?" },
  "verdrietig": { nl: "Je beste vriend gaat verhuizen. Je moet huilen. Hoe voel je je?", en: "Your best friend is moving away. You have to cry. How do you feel?", ar: "صديقك المفضّل سينتقل إلى مكان آخر. أنت تبكي. كيف تشعر؟", uk: "Твій найкращий друг переїжджає. Ти плачеш. Як ти почуваєшся?", tr: "En iyi arkadaşın taşınıyor. Ağlıyorsun. Nasıl hissediyorsun?", ro: "Cel mai bun prieten al tău se mută. Îți vine să plângi. Cum te simți?", bg: "Най-добрият ти приятел се мести. Плаче ти се. Как се чувстваш?" },
  "boos": { nl: "Iemand duwt je in de rij. Je stampt met je voet. Hoe voel je je?", en: "Someone pushes you in the line. You stamp your foot. How do you feel?", ar: "أحدهم يدفعك في الطابور. تضرب الأرض بقدمك. كيف تشعر؟", uk: "Хтось штовхає тебе в черзі. Ти тупаєш ногою. Як ти почуваєшся?", tr: "Sırada biri seni itiyor. Ayağını yere vuruyorsun. Nasıl hissediyorsun?", ro: "Cineva te împinge la rând. Bați din picior. Cum te simți?", bg: "Някой те бута на опашката. Тропаш с крак. Как се чувстваш?" },
  "bang": { nl: "Er zit een grote spin op je arm. Je wilt weglopen. Hoe voel je je?", en: "There is a big spider on your arm. You want to run away. How do you feel?", ar: "على ذراعك عنكبوت كبير. تريد أن تهرب. كيف تشعر؟", uk: "На твоїй руці великий павук. Ти хочеш утекти. Як ти почуваєшся?", tr: "Kolunda büyük bir örümcek var. Kaçmak istiyorsun. Nasıl hissediyorsun?", ro: "Ai un păianjen mare pe braț. Vrei să fugi. Cum te simți?", bg: "На ръката ти има голям паяк. Искаш да избягаш. Как се чувстваш?" },
  "moe": { nl: "Je gaapt. Je ogen vallen dicht. Hoe voel je je?", en: "You yawn. Your eyes are closing. How do you feel?", ar: "أنت تتثاءب. عيناك تنغلقان. كيف تشعر؟", uk: "Ти позіхаєш. Очі заплющуються. Як ти почуваєшся?", tr: "Esniyorsun. Gözlerin kapanıyor. Nasıl hissediyorsun?", ro: "Caști. Ți se închid ochii. Cum te simți?", bg: "Прозяваш се. Очите ти се затварят. Как се чувстваш?" },
  "kleuren": { nl: "Je maakt een tekening vol met rood, blauw en geel. Wat doe je?", en: "You fill a drawing with red, blue and yellow. What are you doing?", ar: "تملأ رسمة بالأحمر والأزرق والأصفر. ماذا تفعل؟", uk: "Ти заповнюєш малюнок червоним, синім і жовтим. Що ти робиш?", tr: "Bir resmi kırmızı, mavi ve sarıyla dolduruyorsun. Ne yapıyorsun?", ro: "Umpli un desen cu roșu, albastru și galben. Ce faci?", bg: "Пълниш рисунка с червено, синьо и жълто. Какво правиш?" },
};
// Herschreven padteksten (uitleg, intro) met hun vertaling voor de tik.
const TEKST_STEUN = {
  // Deel E "Hoe voel je je?" — hulp was onvertaald (kliktest 26 sep 2026).
  "Hoe voel je je? **Blij**, **verdrietig**, **boos**, **bang**, **moe** of **ziek**.": {"en": "How do you feel? **Happy**, **sad**, **angry**, **scared**, **tired** or **ill**.", "ar": "كيف تشعر؟ **سعيد**، **حزين**، **غاضب**، **خائف**، **متعب** أو **مريض**.", "uk": "Як ти почуваєшся? **Радий**, **сумний**, **сердитий**, **наляканий**, **втомлений** чи **хворий**.", "tr": "Nasıl hissediyorsun? **Mutlu**, **üzgün**, **kızgın**, **korkmuş**, **yorgun** ya da **hasta**.", "ro": "Cum te simți? **Bucuros**, **trist**, **supărat**, **speriat**, **obosit** sau **bolnav**.", "bg": "Как се чувстваш? **Радостен**, **тъжен**, **ядосан**, **уплашен**, **уморен** или **болен**."},
  "Zeg het tegen de juf of meester: **Ik ben blij.** **Ik ben moe.** **Ik voel me niet lekker.**": {"en": "Tell the teacher: **Ik ben blij.** (I am happy.) **Ik ben moe.** (I am tired.) **Ik voel me niet lekker.** (I don't feel well.)", "ar": "قلها للمعلّمة أو المعلّم: **Ik ben blij.** (أنا سعيد.) **Ik ben moe.** (أنا متعب.) **Ik voel me niet lekker.** (لا أشعر أنني بخير.)", "uk": "Скажи це вчительці або вчителю: **Ik ben blij.** (Я радий.) **Ik ben moe.** (Я втомився.) **Ik voel me niet lekker.** (Мені погано.)", "tr": "Öğretmene söyle: **Ik ben blij.** (Mutluyum.) **Ik ben moe.** (Yorgunum.) **Ik voel me niet lekker.** (Kendimi iyi hissetmiyorum.)", "ro": "Spune-i învățătoarei sau învățătorului: **Ik ben blij.** (Sunt bucuros.) **Ik ben moe.** (Sunt obosit.) **Ik voel me niet lekker.** (Nu mă simt bine.)", "bg": "Кажи на учителката или учителя: **Ik ben blij.** (Радостен съм.) **Ik ben moe.** (Уморен съм.) **Ik voel me niet lekker.** (Не се чувствам добре.)"},
  "Ben je **verdrietig** of **bang**? Zeg het. De juf of meester wil het weten.": {"en": "Are you **sad** or **scared**? Say it. The teacher wants to know.", "ar": "هل أنت **حزين** أو **خائف**؟ قلها. المعلّمة أو المعلّم يريد أن يعرف.", "uk": "Тобі **сумно** чи **страшно**? Скажи про це. Вчителька або вчитель хоче це знати.", "tr": "**Üzgün** ya da **korkmuş** musun? Söyle. Öğretmenin bunu bilmek ister.", "ro": "Ești **trist** sau **speriat**? Spune. Învățătoarea sau învățătorul vrea să știe.", "bg": "**Тъжен** ли си или **уплашен**? Кажи го. Учителката или учителят иска да знае."},
  "Je lacht, je hebt het fijn.": {"en": "You laugh, you feel good.", "ar": "تضحك، وتشعر بالراحة.", "uk": "Ти смієшся, тобі добре.", "tr": "Gülüyorsun, kendini iyi hissediyorsun.", "ro": "Râzi, te simți bine.", "bg": "Смееш се, добре ти е."},
  "Je moet huilen.": {"en": "You feel like crying.", "ar": "تريد أن تبكي.", "uk": "Тобі хочеться плакати.", "tr": "Ağlaman geliyor.", "ro": "Îți vine să plângi.", "bg": "Плаче ти се."},
  "Ik ben … + het gevoel. Ik voel me niet lekker = ik ben een beetje ziek.": {"en": "Ik ben … + the feeling. Ik voel me niet lekker = I am a bit ill.", "ar": "Ik ben … + الشعور. Ik voel me niet lekker = أنا مريض قليلًا.", "uk": "Ik ben … + почуття. Ik voel me niet lekker = я трохи хворий.", "tr": "Ik ben … + duygu. Ik voel me niet lekker = biraz hastayım.", "ro": "Ik ben … + sentimentul. Ik voel me niet lekker = sunt puțin bolnav.", "bg": "Ik ben … + чувството. Ik voel me niet lekker = малко съм болен."},
  "Ik ben blij.": {"en": "I am happy.", "ar": "أنا سعيد.", "uk": "Я радий.", "tr": "Mutluyum.", "ro": "Sunt bucuros.", "bg": "Радостен съм."},
  "Ik ben bang.": {"en": "I am scared.", "ar": "أنا خائف.", "uk": "Мені страшно.", "tr": "Korkuyorum.", "ro": "Mi-e frică.", "bg": "Страх ме е."},
  "Wijs naar je gezicht en zeg het gevoel hardop.": {"en": "Point to your face and say the feeling out loud.", "ar": "أشر إلى وجهك وقل الشعور بصوت عالٍ.", "uk": "Покажи на своє обличчя і скажи почуття вголос.", "tr": "Yüzünü göster ve duyguyu yüksek sesle söyle.", "ro": "Arată spre fața ta și spune sentimentul cu voce tare.", "bg": "Посочи лицето си и кажи чувството на глас."},
  "Kies het Nederlandse woord.": {"en": "Choose the Dutch word.", "ar": "اختر الكلمة الهولندية.", "uk": "Вибери нідерландське слово.", "tr": "Felemenkçe kelimeyi seç.", "ro": "Alege cuvântul olandez.", "bg": "Избери нидерландската дума."},
  "Je lacht = je bent blij.": {"en": "You laugh = you are happy.", "ar": "تضحك = أنت سعيد.", "uk": "Ти смієшся = ти радий.", "tr": "Gülüyorsun = mutlusun.", "ro": "Râzi = ești bucuros.", "bg": "Смееш се = радостен си."},
  "Gevoelens": {"en": "Feelings", "ar": "المشاعر", "uk": "Почуття", "tr": "Duygular", "ro": "Sentimente", "bg": "Чувства"},
  "Zeg het": {"en": "Say it", "ar": "قلها", "uk": "Скажи це", "tr": "Söyle", "ro": "Spune", "bg": "Кажи го"},
  "Dat mag altijd": {"en": "That is always allowed", "ar": "هذا مسموح دائمًا", "uk": "Це можна завжди", "tr": "Bu her zaman olur", "ro": "Asta e voie întotdeauna", "bg": "Това винаги може"},
  "Truc": {"en": "Trick", "ar": "حيلة", "uk": "Хитрість", "tr": "Püf noktası", "ro": "Truc", "bg": "Трик"},
  "Lees de vraag. Kies het **Nederlandse** woord dat past. Ken je een woord niet? **Tik** op het knopje ernaast: dan zie je het in jouw taal.": { en: "Read the question. Choose the **Dutch** word that fits. Don't know a word? **Tap** the small button next to it: then you see it in your language.", ar: "اقرأ السؤال. اختر الكلمة **الهولندية** المناسبة. لا تعرف كلمة؟ **اضغط** على الزر الصغير بجانبها: فتراها بلغتك.", uk: "Прочитай запитання. Вибери **нідерландське** слово, яке підходить. Не знаєш слова? **Натисни** на кнопочку поруч: і побачиш його своєю мовою.", tr: "Soruyu oku. Uyan **Felemenkçe** kelimeyi seç. Bir kelimeyi bilmiyor musun? Yanındaki küçük düğmeye **dokun**: kendi dilinde görürsün.", ro: "Citește întrebarea. Alege cuvântul **olandez** care se potrivește. Nu știi un cuvânt? **Apasă** pe butonul mic de lângă el: îl vezi în limba ta.", bg: "Прочети въпроса. Избери **нидерландската** дума, която пасва. Не знаеш някоя дума? **Докосни** малкото копче до нея: ще я видиш на твоя език." },
  "Aan de tafel eet je. Op de stoel zit je.": { en: "You eat at the table. You sit on the chair.", ar: "على الطاولة تأكل. على الكرسي تجلس.", uk: "За столом ти їси. На стільці ти сидиш.", tr: "Masada yemek yersin. Sandalyede oturursun.", ro: "La masă mănânci. Pe scaun stai.", bg: "На масата ядеш. На стола седиш." },
  "Lees de vraag en kies het **Nederlandse** woord dat past.\n\nLeer elk woord met **de** of **het** ervoor: de tafel, het boek.\n\nKen je een woord niet? Tik op het knopje ernaast, dan zie je het in jouw taal.": { en: "Read the question and choose the **Dutch** word that fits.\n\nLearn every word with **de** or **het** in front: de tafel, het boek.\n\nDon't know a word? Tap the small button next to it to see it in your language.", ar: "اقرأ السؤال واختر الكلمة **الهولندية** المناسبة.\n\nتعلّم كل كلمة مع **de** أو **het** قبلها: de tafel، het boek.\n\nلا تعرف كلمة؟ اضغط على الزر الصغير بجانبها لتراها بلغتك.", uk: "Прочитай запитання і вибери **нідерландське** слово, яке підходить.\n\nВчи кожне слово з **de** або **het** перед ним: de tafel, het boek.\n\nНе знаєш слова? Натисни на кнопочку поруч, і побачиш його своєю мовою.", tr: "Soruyu oku ve uyan **Felemenkçe** kelimeyi seç.\n\nHer kelimeyi önündeki **de** ya da **het** ile öğren: de tafel, het boek.\n\nBir kelimeyi bilmiyor musun? Yanındaki küçük düğmeye dokun, kendi dilinde gör.", ro: "Citește întrebarea și alege cuvântul **olandez** care se potrivește.\n\nÎnvață fiecare cuvânt cu **de** sau **het** în față: de tafel, het boek.\n\nNu știi un cuvânt? Apasă pe butonul mic de lângă el și îl vezi în limba ta.", bg: "Прочети въпроса и избери **нидерландската** дума, която пасва.\n\nУчи всяка дума с **de** или **het** отпред: de tafel, het boek.\n\nНе знаеш някоя дума? Докосни малкото копче до нея и ще я видиш на твоя език." },
  "Vijfentwintig woorden voor school, thuis, eten, lichaam, kleuren, doe-woorden en gevoelens. Lees de vraag en kies het goede woord. Ken je een woord niet? Tik op het knopje ernaast. ~15 min.": { en: "Twenty-five words for school, home, food, body, colours, action words and feelings. Read the question and choose the right word. Don't know a word? Tap the small button next to it. ~15 min.", ar: "خمس وعشرون كلمة للمدرسة والبيت والطعام والجسم والألوان وكلمات الأفعال والمشاعر. اقرأ السؤال واختر الكلمة الصحيحة. لا تعرف كلمة؟ اضغط على الزر الصغير بجانبها. ~15 دقيقة.", uk: "Двадцять п’ять слів про школу, дім, їжу, тіло, кольори, дії та почуття. Прочитай запитання і вибери правильне слово. Не знаєш слова? Натисни на кнопочку поруч. ~15 хв.", tr: "Okul, ev, yemek, vücut, renkler, eylemler ve duygular için yirmi beş kelime. Soruyu oku ve doğru kelimeyi seç. Bir kelimeyi bilmiyor musun? Yanındaki küçük düğmeye dokun. ~15 dk.", ro: "Douăzeci și cinci de cuvinte pentru școală, acasă, mâncare, corp, culori, verbe și sentimente. Citește întrebarea și alege cuvântul potrivit. Nu știi un cuvânt? Apasă pe butonul mic de lângă el. ~15 min.", bg: "Двадесет и пет думи за училище, вкъщи, храна, тяло, цветове, думи за действия и чувства. Прочети въпроса и избери правилната дума. Не знаеш някоя дума? Докосни малкото копче до нея. ~15 мин." },
  "Woorden voor hoe je je **voelt**: **blij**, **verdrietig**, **boos**, **bang**, **moe**, **ziek**.\n\nZeg het tegen de juf of meester: **Ik ben moe.** **Ik voel me niet lekker.**\n\nBen je verdrietig of bang? Zeg het. Dat mag altijd.": { en: "Words for how you **feel**: **blij** (happy), **verdrietig** (sad), **boos** (angry), **bang** (scared), **moe** (tired), **ziek** (ill).\n\nTell the teacher: **Ik ben moe.** (I am tired.) **Ik voel me niet lekker.** (I don't feel well.)\n\nAre you sad or scared? Say it. That is always allowed.", ar: "كلمات تقول كيف **تشعر**: **blij** (سعيد)، **verdrietig** (حزين)، **boos** (غاضب)، **bang** (خائف)، **moe** (متعب)، **ziek** (مريض).\n\nقل للمعلّم أو المعلّمة: **Ik ben moe.** (أنا متعب.) **Ik voel me niet lekker.** (لا أشعر أنني بخير.)\n\nهل أنت حزين أو خائف؟ قل ذلك. هذا مسموح دائمًا.", uk: "Слова про те, як ти **почуваєшся**: **blij** (радий), **verdrietig** (сумний), **boos** (сердитий), **bang** (наляканий), **moe** (втомлений), **ziek** (хворий).\n\nСкажи вчительці або вчителю: **Ik ben moe.** (Я втомився.) **Ik voel me niet lekker.** (Мені погано.)\n\nТобі сумно або страшно? Скажи про це. Це можна завжди.", tr: "Nasıl **hissettiğini** anlatan kelimeler: **blij** (mutlu), **verdrietig** (üzgün), **boos** (kızgın), **bang** (korkmuş), **moe** (yorgun), **ziek** (hasta).\n\nÖğretmene söyle: **Ik ben moe.** (Yorgunum.) **Ik voel me niet lekker.** (Kendimi iyi hissetmiyorum.)\n\nÜzgün ya da korkmuş musun? Söyle. Bu her zaman serbest.", ro: "Cuvinte pentru cum te **simți**: **blij** (bucuros), **verdrietig** (trist), **boos** (supărat), **bang** (speriat), **moe** (obosit), **ziek** (bolnav).\n\nSpune-i învățătoarei sau învățătorului: **Ik ben moe.** (Sunt obosit.) **Ik voel me niet lekker.** (Nu mă simt bine.)\n\nEști trist sau speriat? Spune. Asta e voie întotdeauna.", bg: "Думи за това как се **чувстваш**: **blij** (радостен), **verdrietig** (тъжен), **boos** (ядосан), **bang** (уплашен), **moe** (уморен), **ziek** (болен).\n\nКажи на учителката или учителя: **Ik ben moe.** (Уморен съм.) **Ik voel me niet lekker.** (Не се чувствам добре.)\n\nТъжен ли си или уплашен? Кажи го. Това винаги може." },
};
let zaad = 7;
const rnd = () => { zaad = (zaad * 9301 + 49297) % 233280; return zaad / 233280; };
const schud = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
// Foutscherm-hint (Mark 25 sep 2026: "wat betekent dit, kijk naar het woord in jouw taal?" —
// de oude hint herhaalde alleen de opdracht). Nu: welk woord je koos en wat dát betekent in
// je eigen taal, zodat je ziet waaróm het niet past. Tekst hangt alleen af van het gekozen
// woord (niet van de vraag), dus één vertaling per woord klopt in elke vraag.
const HINT_STEUN = {};
// Mark 25 sep 2026: "waar zit je op? Ik zeg 'de tas', maar bij de uitleg zie ik niet: nee, een
// tas is iets om je spullen in te doen." Dus: bij een fout antwoord zeggen wat het gekozen woord
// wél is, in eenvoudig Nederlands. Tik = hetzelfde woord in de eigen taal.
const BETEKENIS = {
  "de deur": "een deur doe je open en dicht om een kamer in of uit te gaan",
  "de tafel": "aan een tafel zit je om te eten of te werken",
  "het raam": "door een raam kijk je naar buiten",
  "de stoel": "op een stoel zit je",
  "de pen": "met een pen schrijf je",
  "de tas": "een tas is iets om je spullen in te doen",
  "het bord": "op het bord schrijft de juf, of van een bord eet je",
  "het boek": "in een boek lees je",
  "de jas": "een jas trek je aan als het buiten koud is",
  "de meester": "een meester is een man die les geeft",
  "de moeder": "je moeder is je mama",
  "de juf": "een juf is een vrouw die les geeft",
  "het kind": "een kind is een jongen of meisje, zoals jij",
  "de school": "op school leer je",
  "de tuin": "een tuin is buiten bij het huis, met gras en bloemen",
  "de auto": "in een auto rijd je over de weg",
  "het huis": "in een huis woon je",
  "het water": "water drink je, het komt uit de kraan",
  "het brood": "van brood maak je een boterham",
  "de melk": "melk is wit en komt van de koe",
  "de appel": "een appel is rond fruit, rood of groen",
  "de kaas": "kaas is geel en leg je op je brood",
  "de banaan": "een banaan is lang, geel fruit",
  "de zus": "je zus is een meisje in jouw familie",
  "de vader": "je vader is je papa",
  "de hand": "met je hand pak je iets",
  "de buik": "je buik zit in het midden van je lichaam",
  "het hoofd": "je hoofd zit bovenaan je lichaam",
  "de voet": "op je voeten sta en loop je",
  "het oog": "met je ogen kijk je",
  "het oor": "met je oren hoor je",
  "de mond": "met je mond eet en praat je",
  "de neus": "met je neus ruik je",
  "geel": "geel is de kleur van een banaan",
  "rood": "rood is de kleur van een aardbei",
  "blauw": "blauw is de kleur van de lucht",
  "groen": "groen is de kleur van gras",
  "wit": "wit is de kleur van melk",
  "tekenen": "tekenen is een plaatje maken met een potlood",
  "schrijven": "schrijven is letters maken",
  "lezen": "lezen doe je met een boek",
  "tellen": "tellen is 1, 2, 3, 4 zeggen",
  "knippen": "knippen doe je met een schaar",
  "kijken": "kijken doe je met je ogen",
  "plakken": "plakken doe je met lijm",
  "kleuren": "kleuren is een tekening vol maken met kleur",
  "luisteren": "luisteren doe je met je oren",
  "opruimen": "opruimen is alles terugleggen op zijn plek",
  "blij": "blij ben je als je lacht en het fijn hebt",
  "verdrietig": "verdrietig ben je als je moet huilen",
  "boos": "boos ben je als iets niet eerlijk is",
  "bang": "bang ben je als je wilt weglopen of je wilt verstoppen",
  "moe": "moe ben je als je wilt slapen",
  "ziek": "ziek ben je als je je niet lekker voelt",
};
const foutHint = (o) => {
  const t = WOORDENBOEK[o];
  const zin = BETEKENIS[o];
  const nl = zin ? `Nee, ${zin}. Probeer het nog eens.` : `Nee, dat is een ander woord. Probeer het nog eens.`;
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
const w = (goed, fout, extra = {}) => {
  const { nl: q, ...steun } = VRAAG[goed];
  const opts = schud([goed, ...fout]);
  const answer = opts.indexOf(goed);
  return { q, options: opts, answer, wrongHints: opts.map((o, i) => (i === answer ? null : foutHint(o))), steun, steunOpties: Object.fromEntries(opts.map((o) => [o, WOORDENBOEK[o]]).filter(([, v]) => v)), picto: pictoVoor(opts), ...extra };
};

const school = [
  w("de tafel", ["de stoel", "de deur", "het raam"], { uitlegPad: {
    stappen: [
      { titel: "Zo werkt dit", tekst: "Lees de vraag. Kies het **Nederlandse** woord dat past. Ken je een woord niet? **Tik** op het knopje ernaast: dan zie je het in jouw taal." },
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

// Deel E (26 sep 2026): gevoelswoorden. Veel nieuwkomers hebben iets zwaars meegemaakt; "ik ben bang"
// of "ik voel me niet lekker" kunnen zeggen is dan misschien wel het belangrijkste woord van de week.
// Geen enge situaties in de vragen (geen oorlog, geen harde knallen) — alledaags en veilig.
// Andere situaties dan In de klas deel 4 (bal afpakken, blaffende hond): die twee komen samen in het klassikaal-setje.
const gevoel = [
  w("blij", ["verdrietig", "boos", "moe"], { uitlegPad: {
    stappen: [
      { titel: "Gevoelens", tekst: "Hoe voel je je? **Blij**, **verdrietig**, **boos**, **bang**, **moe** of **ziek**." },
      { titel: "Zeg het", tekst: "Zeg het tegen de juf of meester: **Ik ben blij.** **Ik ben moe.** **Ik voel me niet lekker.**" },
      { titel: "Dat mag altijd", tekst: "Ben je **verdrietig** of **bang**? Zeg het. De juf of meester wil het weten." },
    ],
    woorden: [{ woord: "blij", uitleg: "Je lacht, je hebt het fijn." }, { woord: "verdrietig", uitleg: "Je moet huilen." }],
    theorie: "Ik ben … + het gevoel. Ik voel me niet lekker = ik ben een beetje ziek.",
    voorbeelden: [{ type: "stap", tekst: "Ik ben blij." }, { type: "stap", tekst: "Ik ben bang." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Wijs naar je gezicht en zeg het gevoel hardop." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Je lacht = je bent blij.", nogSimpeler: "blij" },
  } }),
  w("verdrietig", ["blij", "moe", "boos"]), // kliktest 26 sep 2026: bang/ziek konden ook bij huilen
  w("boos", ["blij", "moe", "bang"]),
  w("bang", ["boos", "blij", "moe"]),
  w("moe", ["ziek", "blij", "boos"]),
];

const steps = [
  { title: "Op school", explanation: "Lees de vraag en kies het **Nederlandse** woord dat past.\n\nLeer elk woord met **de** of **het** ervoor: de tafel, het boek.\n\nKen je een woord niet? Tik op het knopje ernaast, dan zie je het in jouw taal.", checks: school },
  { title: "Thuis en eten", explanation: "Woorden voor **thuis** en **eten**.\n\nZeg ze hardop. Wijs ze aan in huis.", checks: thuis },
  { title: "Lichaam en kleuren", explanation: "Woorden voor je **lichaam** en voor **kleuren**.\n\nWijs aan wat je zegt. Zo onthoud je het.", checks: lichaam },
  { title: "Doe-woorden in de klas", explanation: "De juf of meester zegt vaak wat je moet **doen**.\n\n**Schrijf**, **knip**, **luister**, **ruim op**, **kleur**.\n\nDoe het woord meteen na: pak een pen als je **schrijven** hoort. Zo onthoud je het.", checks: doen },
  { title: "Hoe voel je je?", explanation: "Woorden voor hoe je je **voelt**: **blij**, **verdrietig**, **boos**, **bang**, **moe**, **ziek**.\n\nZeg het tegen de juf of meester: **Ik ben moe.** **Ik voel me niet lekker.**\n\nBen je verdrietig of bang? Zeg het. Dat mag altijd.", checks: gevoel },
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
  intro: "Vijfentwintig woorden voor school, thuis, eten, lichaam, kleuren, doe-woorden en gevoelens. Lees de vraag en kies het goede woord. Ken je een woord niet? Tik op het knopje ernaast. ~15 min.",
  triggerKeywords: ["nieuwkomers", "woorden", "woordenschat", "nt2", "eerste woorden", "nederlands leren", "de het"],
  chapters,
  steps,
  steunTeksten: { ...NIEUWKOMERS_STEUN, ...TEKST_STEUN, ...HINT_STEUN }, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default woordenNieuwkomers;
