// 🌍 Steunteksten voor de vier nieuwkomerpaden (Mark 24 sep 2026: "alles moet vertaalbaar zijn,
// anders kunnen ze het niet lezen"). NL-tekst → {en, ar, uk, tr}. Titels, uitleg per stap, hints,
// uitlegPad-teksten en woorden. Door Claude vertaald (kort, kindertaal) — AR/UK/TR nog door een
// moedertaalspreker laten nakijken. LearnPath zoekt hierin via <SteunTekst> (SteunTik.jsx).
// Nieuwe tekst in een nieuwkomerpad? Voeg hier de vertaling toe, anders is hij niet tikbaar.
// 30 sep 2026: "ro" (Roemeens) en "bg" (Bulgaars) toegevoegd op verzoek van een nieuwkomersschool — door Claude
// vertaald vanuit het NL, nog door een moedertaalspreker laten nakijken.
const NIEUWKOMERS_STEUN = {
 "In de klas — Nederlands voor de eerste weken (nieuwkomers)": {
  "en": "In class — Dutch for the first weeks (newcomers)",
  "ar": "في الصف — الهولندية للأسابيع الأولى (للقادمين الجدد)",
  "uk": "У класі — нідерландська для перших тижнів (новенькі)",
  "tr": "Sınıfta — ilk haftalar için Felemenkçe (yeni gelenler)",
  "ro": "În clasă — neerlandeză pentru primele săptămâni (nou-veniți)",
  "bg": "В клас — нидерландски за първите седмици (новодошли)"
 },
 "De zinnen die je de eerste weken op school nodig hebt: vragen, plekken, vrienden maken. Met steun in je eigen taal. ~10 min.": {
  "en": "The sentences you need in your first weeks at school: asking things, places, making friends. With help in your own language. ~10 min.",
  "ar": "الجمل التي تحتاجها في الأسابيع الأولى في المدرسة: أسئلة، أماكن، تكوين أصدقاء. مع مساعدة بلغتك. ~10 دقائق.",
  "uk": "Речення, які тобі потрібні в перші тижні в школі: питання, місця, як знайти друзів. З підтримкою твоєю мовою. ~10 хв.",
  "tr": "Okulda ilk haftalarda gereken cümleler: sorular, yerler, arkadaş edinmek. Kendi dilinde destekle. ~10 dk.",
  "ro": "Propozițiile de care ai nevoie în primele săptămâni la școală: întrebări, locuri, cum îți faci prieteni. Cu sprijin în limba ta. ~10 min.",
  "bg": "Изреченията, които са ти нужни през първите седмици в училище: въпроси, места, как да намериш приятели. С помощ на твоя език. ~10 мин."
 },
 "Vragen aan de juf of meester": {
  "en": "Asking the teacher",
  "ar": "أسئلة للمعلمة أو المعلم",
  "uk": "Питання до вчительки або вчителя",
  "tr": "Öğretmene sorular",
  "ro": "Întrebări pentru doamna sau domnul învățător",
  "bg": "Въпроси към учителката или учителя"
 },
 "Op school": {
  "en": "At school",
  "ar": "في المدرسة",
  "uk": "У школі",
  "tr": "Okulda",
  "ro": "La școală",
  "bg": "В училище"
 },
 "Met andere kinderen": {
  "en": "With other children",
  "ar": "مع أطفال آخرين",
  "uk": "З іншими дітьми",
  "tr": "Diğer çocuklarla",
  "ro": "Cu alți copii",
  "bg": "С други деца"
 },
 "Op school mag je **altijd** iets vragen.\n\nBegin met **Mag ik…?** of **Kunt u…?**\n\nSteek je hand op. Wacht. Zeg de zin. Dat is genoeg.": {
  "en": "At school you may **always** ask something.\n\nStart with **Mag ik…?** (= May I…?) or **Kunt u…?** (= Can you…?)\n\nPut your hand up. Wait. Say the sentence. That is enough.",
  "ar": "في المدرسة يمكنك **دائمًا** أن تسأل.\n\nابدأ بـ **Mag ik…?** (= هل يمكنني…؟) أو **Kunt u…?** (= هل يمكنك…؟)\n\nارفع يدك. انتظر. قل الجملة. هذا يكفي.",
  "uk": "У школі **завжди** можна щось запитати.\n\nПочни з **Mag ik…?** (= Можна мені…?) або **Kunt u…?** (= Чи можете ви…?)\n\nПідніми руку. Зачекай. Скажи речення. Цього досить.",
  "tr": "Okulda **her zaman** bir şey sorabilirsin.\n\n**Mag ik…?** (= …yapabilir miyim?) veya **Kunt u…?** (= …yapabilir misiniz?) ile başla.\n\nElini kaldır. Bekle. Cümleyi söyle. Bu kadar yeter.",
  "ro": "La școală poți **întotdeauna** să întrebi ceva.\n\nÎncepe cu **Mag ik…?** (= Pot să…?) sau **Kunt u…?** (= Puteți să…?)\n\nRidică mâna. Așteaptă. Spune propoziția. Este de ajuns.",
  "bg": "В училище **винаги** можеш да попиташ нещо.\n\nЗапочни с **Mag ik…?** (= Може ли да…?) или **Kunt u…?** (= Можете ли да…?)\n\nВдигни ръка. Изчакай. Кажи изречението. Това е достатъчно."
 },
 "Je wilt naar de wc. Vraag het.": {
  "en": "You want to go to the toilet. Ask.",
  "ar": "تريد الذهاب إلى الحمام. اسأل.",
  "uk": "Ти хочеш у туалет. Запитай.",
  "tr": "Tuvalete gitmek istiyorsun. Sor.",
  "ro": "Vrei să mergi la toaletă. Întreabă.",
  "bg": "Искаш да отидеш до тоалетната. Попитай."
 },
 "Vragen mag altijd": {
  "en": "You may always ask",
  "ar": "السؤال مسموح دائمًا",
  "uk": "Питати можна завжди",
  "tr": "Sormak her zaman serbest",
  "ro": "Poți întreba întotdeauna",
  "bg": "Винаги можеш да питаш"
 },
 "Op school mag je altijd iets **vragen**. Je begint met: **Mag ik…?**": {
  "en": "At school you may always **ask** something. You start with: **Mag ik…?** (= May I…?)",
  "ar": "في المدرسة يمكنك دائمًا أن **تسأل**. تبدأ بـ: **Mag ik…?** (= هل يمكنني…؟)",
  "uk": "У школі завжди можна щось **запитати**. Ти починаєш так: **Mag ik…?** (= Можна мені…?)",
  "tr": "Okulda her zaman bir şey **sorabilirsin**. Şöyle başlarsın: **Mag ik…?** (= …yapabilir miyim?)",
  "ro": "La școală poți întotdeauna să **întrebi** ceva. Începi cu: **Mag ik…?** (= Pot să…?)",
  "bg": "В училище винаги можеш да **попиташ** нещо. Започваш с: **Mag ik…?** (= Може ли да…?)"
 },
 "De zin": {
  "en": "The sentence",
  "ar": "الجملة",
  "uk": "Речення",
  "tr": "Cümle",
  "ro": "Propoziția",
  "bg": "Изречението"
 },
 "**Mag ik naar de wc?** Dat is genoeg. De juf of meester zegt ja.": {
  "en": "**Mag ik naar de wc?** (= May I go to the toilet?) That is enough. The teacher says yes.",
  "ar": "**Mag ik naar de wc?** (= هل يمكنني الذهاب إلى الحمام؟) هذا يكفي. المعلمة أو المعلم يقول نعم.",
  "uk": "**Mag ik naar de wc?** (= Можна мені в туалет?) Цього досить. Вчителька або вчитель скаже «так».",
  "tr": "**Mag ik naar de wc?** (= Tuvalete gidebilir miyim?) Bu kadar yeter. Öğretmen evet der.",
  "ro": "**Mag ik naar de wc?** (= Pot să merg la toaletă?) Este de ajuns. Doamna sau domnul învățător spune da.",
  "bg": "**Mag ik naar de wc?** (= Може ли да отида до тоалетната?) Това е достатъчно. Учителката или учителят казва „да“."
 },
 "Zeg het rustig": {
  "en": "Say it calmly",
  "ar": "قلها بهدوء",
  "uk": "Скажи спокійно",
  "tr": "Sakin söyle",
  "ro": "Spune-o calm",
  "bg": "Кажи го спокойно"
 },
 "Steek je hand op. Wacht even. Zeg de zin.": {
  "en": "Put your hand up. Wait a bit. Say the sentence.",
  "ar": "ارفع يدك. انتظر قليلًا. قل الجملة.",
  "uk": "Підніми руку. Трохи зачекай. Скажи речення.",
  "tr": "Elini kaldır. Biraz bekle. Cümleyi söyle.",
  "ro": "Ridică mâna. Așteaptă puțin. Spune propoziția.",
  "bg": "Вдигни ръка. Изчакай малко. Кажи изречението."
 },
 "mag ik": {
  "en": "may I",
  "ar": "هل يمكنني",
  "uk": "можна мені",
  "tr": "…yapabilir miyim",
  "ro": "pot să",
  "bg": "може ли да"
 },
 "Zo begin je een vraag om iets te doen.": {
  "en": "This is how you start asking to do something.",
  "ar": "هكذا تبدأ سؤالًا لتفعل شيئًا.",
  "uk": "Так ти починаєш прохання щось зробити.",
  "tr": "Bir şey yapmak için soruya böyle başlarsın.",
  "ro": "Așa începi o întrebare ca să faci ceva.",
  "bg": "Така започваш въпрос, за да направиш нещо."
 },
 "wc": {
  "en": "toilet",
  "ar": "الحمام",
  "uk": "туалет",
  "tr": "tuvalet",
  "ro": "toaletă",
  "bg": "тоалетна"
 },
 "Toilet.": {
  "en": "Toilet.",
  "ar": "المرحاض.",
  "uk": "Туалет.",
  "tr": "Tuvalet.",
  "ro": "Toaletă.",
  "bg": "Тоалетна."
 },
 "Iets vragen = Mag ik…?": {
  "en": "Asking something = \"Mag ik…?\" (= May I…?)",
  "ar": "أن تطلب شيئًا = «Mag ik…?» (هل يمكنني…؟)",
  "uk": "Щось попросити = «Mag ik…?» (= Можна мені…?)",
  "tr": "Bir şey istemek = \"Mag ik…?\" (…yapabilir miyim?)",
  "ro": "A cere ceva = „Mag ik…?” (= Pot să…?)",
  "bg": "Да поискаш нещо = „Mag ik…?“ (= Може ли да…?)"
 },
 "Mag ik water drinken?": {
  "en": "\"Mag ik water drinken?\" (= May I drink water?)",
  "ar": "«Mag ik water drinken?» = هل يمكنني أن أشرب ماء؟",
  "uk": "Можна мені попити води?",
  "tr": "Su içebilir miyim?",
  "ro": "Pot să beau apă?",
  "bg": "Може ли да пия вода?"
 },
 "Mag ik mijn jas pakken?": {
  "en": "\"Mag ik mijn jas pakken?\" (= May I get my coat?)",
  "ar": "«Mag ik mijn jas pakken?» = هل يمكنني أن آخذ معطفي؟",
  "uk": "Можна мені взяти куртку?",
  "tr": "Montumu alabilir miyim?",
  "ro": "Pot să îmi iau haina?",
  "bg": "Може ли да си взема якето?"
 },
 "Truc": {
  "en": "Trick",
  "ar": "حيلة",
  "uk": "Порада",
  "tr": "Püf noktası",
  "ro": "Truc",
  "bg": "Трик"
 },
 "Hand omhoog, dan de zin.": {
  "en": "Hand up, then the sentence.",
  "ar": "اليد إلى أعلى، ثم الجملة.",
  "uk": "Рука вгору, потім речення.",
  "tr": "Önce el yukarı, sonra cümle.",
  "ro": "Mâna sus, apoi propoziția.",
  "bg": "Ръката горе, после изречението."
 },
 "Zeg: Mag ik naar de wc?": {
  "en": "Say: \"Mag ik naar de wc?\" (= May I go to the toilet?)",
  "ar": "قل: «Mag ik naar de wc?» (هل يمكنني الذهاب إلى الحمام؟)",
  "uk": "Скажи: «Mag ik naar de wc?» (= Можна мені в туалет?)",
  "tr": "Söyle: \"Mag ik naar de wc?\" (Tuvalete gidebilir miyim?)",
  "ro": "Spune: „Mag ik naar de wc?” (= Pot să merg la toaletă?)",
  "bg": "Кажи: „Mag ik naar de wc?“ (= Може ли да отида до тоалетната?)"
 },
 "Begin met 'Mag ik'. Dan wat je wilt.": {
  "en": "Start with \"Mag ik\" (= May I). Then what you want.",
  "ar": "ابدأ بـ «Mag ik». ثم ما تريده.",
  "uk": "Почни з «Mag ik» (= Можна мені). Потім те, що ти хочеш.",
  "tr": "\"Mag ik\" ile başla. Sonra ne istediğini söyle.",
  "ro": "Începe cu „Mag ik” (= Pot să). Apoi ce vrei.",
  "bg": "Започни с „Mag ik“ (= Може ли да). После това, което искаш."
 },
 "Mag ik naar de wc?": {
  "en": "May I go to the toilet?",
  "ar": "«Mag ik naar de wc?» = هل يمكنني الذهاب إلى الحمام؟",
  "uk": "Можна мені в туалет?",
  "tr": "Tuvalete gidebilir miyim?",
  "ro": "Pot să merg la toaletă?",
  "bg": "Може ли да отида до тоалетната?"
 },
 "Je begrijpt het niet. Zeg dat eerlijk.": {
  "en": "You don't understand. Say so honestly.",
  "ar": "أنت لا تفهم. قل ذلك بصدق.",
  "uk": "Ти не розумієш. Скажи це чесно.",
  "tr": "Anlamıyorsun. Bunu dürüstçe söyle.",
  "ro": "Nu înțelegi. Spune asta sincer.",
  "bg": "Не разбираш. Кажи го честно."
 },
 "Je wilt het nog een keer horen.": {
  "en": "You want to hear it one more time.",
  "ar": "تريد أن تسمعه مرة أخرى.",
  "uk": "Ти хочеш почути це ще раз.",
  "tr": "Bir kez daha duymak istiyorsun.",
  "ro": "Vrei să auzi încă o dată.",
  "bg": "Искаш да го чуеш още веднъж."
 },
 "Je wilt weten wat het woord betekent.": {
  "en": "You want to know what the word is.",
  "ar": "تريد أن تعرف ما هي الكلمة.",
  "uk": "Ти хочеш знати, що це за слово.",
  "tr": "Kelimenin ne olduğunu bilmek istiyorsun.",
  "ro": "Vrei să știi ce înseamnă cuvântul.",
  "bg": "Искаш да знаеш какво означава думата."
 },
 "Je werk is af.": {
  "en": "Your work is done.",
  "ar": "عملك انتهى.",
  "uk": "Твоя робота готова.",
  "tr": "İşin bitti.",
  "ro": "Ți-ai terminat treaba.",
  "bg": "Работата ти е готова."
 },
 "Op school zijn plekken en regels.\n\nDe **klas**: leren. De **gymzaal**: sport. Het **plein**: buiten spelen.\n\nDe **bel** zegt: nu begint iets, of nu is iets klaar.": {
  "en": "At school there are places and rules.\n\nThe **klas** (classroom): learning. The **gymzaal** (gym hall): sport. The **plein** (playground): playing outside.\n\nThe **bel** (bell) says: now something starts, or now something ends.",
  "ar": "في المدرسة أماكن وقواعد.\n\n**الصف** («de klas»): للتعلم. **صالة الرياضة** («de gymzaal»): للرياضة. **الساحة** («het plein»): للعب في الخارج.\n\n**الجرس** («de bel») يقول: الآن يبدأ شيء، أو الآن ينتهي شيء.",
  "uk": "У школі є місця і правила.\n\n**Клас** («klas»): вчитися. **Спортзал** («gymzaal»): спорт. **Шкільний двір** («plein»): гратися надворі.\n\n**Дзвоник** («bel») каже: зараз щось починається або зараз щось закінчується.",
  "tr": "Okulda yerler ve kurallar var.\n\n**Sınıf** (\"klas\"): öğrenmek. **Spor salonu** (\"gymzaal\"): spor. **Bahçe** (\"plein\"): dışarıda oynamak.\n\n**Zil** (\"bel\") der ki: şimdi bir şey başlıyor ya da bitiyor.",
  "ro": "La școală sunt locuri și reguli.\n\n**Clasa** („klas”): înveți. **Sala de sport** („gymzaal”): sport. **Curtea** („plein”): joacă afară.\n\n**Clopoțelul** („bel”) spune: acum începe ceva sau acum s-a terminat ceva.",
  "bg": "В училище има места и правила.\n\n**Класната стая** („klas“): учене. **Физкултурният салон** („gymzaal“): спорт. **Дворът** („plein“): игра навън.\n\n**Звънецът** („bel“) казва: сега започва нещо или сега нещо свършва."
 },
 "Gym doe je in de gymzaal.": {
  "en": "You do gym in the gym hall.",
  "ar": "تمارس الرياضة («gym») في صالة الرياضة («gymzaal»).",
  "uk": "Фізкультура («gym») — у спортзалі («gymzaal»).",
  "tr": "Beden eğitimini spor salonunda yaparsın.",
  "ro": "Sportul („gym”) îl faci în sala de sport („gymzaal”).",
  "bg": "Физкултура („gym“) правиш във физкултурния салон („gymzaal“)."
 },
 "Plekken op school": {
  "en": "Places at school",
  "ar": "أماكن في المدرسة",
  "uk": "Місця в школі",
  "tr": "Okuldaki yerler",
  "ro": "Locuri la școală",
  "bg": "Места в училище"
 },
 "De **klas** is waar je leert. De **gymzaal** is waar je sport. Het **plein** is buiten.": {
  "en": "The **klas** (classroom) is where you learn. The **gymzaal** (gym hall) is where you do sport. The **plein** (playground) is outside.",
  "ar": "**الصف** («klas») هو مكان التعلم. **صالة الرياضة** («gymzaal») هي مكان الرياضة. **الساحة** («plein») في الخارج.",
  "uk": "**Клас** («klas») — де ти вчишся. **Спортзал** («gymzaal») — де ти займаєшся спортом. **Шкільний двір** («plein») — надворі.",
  "tr": "**Sınıf** (\"klas\") öğrendiğin yerdir. **Spor salonu** (\"gymzaal\") spor yaptığın yerdir. **Bahçe** (\"plein\") dışarıdadır.",
  "ro": "**Clasa** („klas”) este locul unde înveți. **Sala de sport** („gymzaal”) este locul unde faci sport. **Curtea** („plein”) este afară.",
  "bg": "**Класната стая** („klas“) е там, където учиш. **Физкултурният салон** („gymzaal“) е там, където спортуваш. **Дворът** („plein“) е навън."
 },
 "Gym": {
  "en": "Gym",
  "ar": "الرياضة",
  "uk": "Фізкультура",
  "tr": "Beden eğitimi",
  "ro": "Ora de sport",
  "bg": "Физкултура"
 },
 "**Gym** is sport op school. Je doet gymkleren aan. Je gaat naar de **gymzaal**.": {
  "en": "**Gym** is sport at school. You put on gym clothes. You go to the **gymzaal** (gym hall).",
  "ar": "**Gym** هي الرياضة في المدرسة. تلبس ملابس الرياضة. تذهب إلى **صالة الرياضة** («gymzaal»).",
  "uk": "**Фізкультура** («gym») — це спорт у школі. Ти вдягаєш спортивний одяг. Ти йдеш у **спортзал** («gymzaal»).",
  "tr": "**Beden eğitimi** (\"gym\") okulda spordur. Spor kıyafetlerini giyersin. **Spor salonuna** (\"gymzaal\") gidersin.",
  "ro": "**Ora de sport** („gym”) este sport la școală. Îți pui hainele de sport. Mergi în **sala de sport** („gymzaal”).",
  "bg": "**Физкултура** („gym“) е спорт в училище. Обличаш спортни дрехи. Отиваш във **физкултурния салон** („gymzaal“)."
 },
 "Onthoud": {
  "en": "Remember",
  "ar": "تذكّر",
  "uk": "Запам'ятай",
  "tr": "Unutma",
  "ro": "Ține minte",
  "bg": "Запомни"
 },
 "gym = sport · gymzaal = de zaal voor sport.": {
  "en": "gym = sport · gymzaal = the hall for sport.",
  "ar": "gym = رياضة · gymzaal = القاعة للرياضة.",
  "uk": "gym = спорт · gymzaal = зал для спорту.",
  "tr": "gym = spor · gymzaal = spor salonu.",
  "ro": "gym = sport · gymzaal = sala pentru sport.",
  "bg": "gym = спорт · gymzaal = салонът за спорт."
 },
 "gymzaal": {
  "en": "gym hall",
  "ar": "صالة الرياضة",
  "uk": "спортзал",
  "tr": "spor salonu",
  "ro": "sala de sport",
  "bg": "физкултурен салон"
 },
 "De zaal waar je sport.": {
  "en": "The hall where you do sport.",
  "ar": "القاعة التي تمارس فيها الرياضة.",
  "uk": "Зал, де ти займаєшся спортом.",
  "tr": "Spor yaptığın salon.",
  "ro": "Sala unde faci sport.",
  "bg": "Салонът, където спортуваш."
 },
 "plein": {
  "en": "playground",
  "ar": "الساحة",
  "uk": "шкільний двір",
  "tr": "okul bahçesi",
  "ro": "curtea școlii",
  "bg": "училищен двор"
 },
 "Buiten, waar je speelt in de pauze.": {
  "en": "Outside, where you play at break time.",
  "ar": "في الخارج، حيث تلعب في الاستراحة.",
  "uk": "Надворі, де ти граєшся на перерві.",
  "tr": "Dışarısı, teneffüste oynadığın yer.",
  "ro": "Afară, unde te joci în pauză.",
  "bg": "Навън, където играеш в междучасието."
 },
 "Elke les heeft een plek: klas, gymzaal, plein.": {
  "en": "Every lesson has a place: klas (classroom), gymzaal (gym hall), plein (playground).",
  "ar": "لكل درس مكان: الصف، صالة الرياضة، الساحة.",
  "uk": "Кожен урок має своє місце: клас, спортзал, шкільний двір.",
  "tr": "Her dersin bir yeri var: sınıf, spor salonu, bahçe.",
  "ro": "Fiecare lecție are un loc: clasa, sala de sport, curtea.",
  "bg": "Всеки урок си има място: класна стая, физкултурен салон, двор."
 },
 "Pauze → plein.": {
  "en": "Break → playground.",
  "ar": "الاستراحة → الساحة.",
  "uk": "Перерва → шкільний двір.",
  "tr": "Teneffüs → bahçe.",
  "ro": "Pauză → curte.",
  "bg": "Междучасие → двор."
 },
 "Rekenen → klas.": {
  "en": "Maths → classroom.",
  "ar": "الحساب → الصف.",
  "uk": "Математика → клас.",
  "tr": "Matematik → sınıf.",
  "ro": "Matematică → clasă.",
  "bg": "Математика → класна стая."
 },
 "Gym hoort bij gymzaal.": {
  "en": "Gym goes with the gym hall.",
  "ar": "الرياضة مكانها صالة الرياضة.",
  "uk": "Фізкультура — це спортзал.",
  "tr": "Beden eğitimi spor salonunda olur.",
  "ro": "Ora de sport merge cu sala de sport.",
  "bg": "Физкултурата върви с физкултурния салон."
 },
 "Gym is in de gymzaal.": {
  "en": "Gym is in the gym hall.",
  "ar": "الرياضة في صالة الرياضة.",
  "uk": "Фізкультура — у спортзалі.",
  "tr": "Beden eğitimi spor salonundadır.",
  "ro": "Ora de sport este în sala de sport.",
  "bg": "Физкултурата е във физкултурния салон."
 },
 "Sport op school = gymzaal.": {
  "en": "Sport at school = gym hall.",
  "ar": "الرياضة في المدرسة = صالة الرياضة.",
  "uk": "Спорт у школі = спортзал.",
  "tr": "Okulda spor = spor salonu.",
  "ro": "Sport la școală = sala de sport.",
  "bg": "Спорт в училище = физкултурен салон."
 },
 "Gymzaal.": {
  "en": "Gym hall.",
  "ar": "صالة الرياضة.",
  "uk": "Спортзал.",
  "tr": "Spor salonu.",
  "ro": "Sala de sport.",
  "bg": "Физкултурен салон."
 },
 "De bel zegt: nu begint of eindigt iets.": {
  "en": "The bell says: now something starts or ends.",
  "ar": "الجرس يقول: الآن يبدأ شيء أو ينتهي.",
  "uk": "Дзвоник каже: зараз щось починається або закінчується.",
  "tr": "Zil der ki: şimdi bir şey başlıyor ya da bitiyor.",
  "ro": "Clopoțelul spune: acum începe sau se termină ceva.",
  "bg": "Звънецът казва: сега нещо започва или свършва."
 },
 "Jassen hangen aan een haak.": {
  "en": "Coats hang on a hook.",
  "ar": "المعاطف تُعلَّق على علّاقة.",
  "uk": "Куртки висять на гачку.",
  "tr": "Montlar askıya asılır.",
  "ro": "Hainele stau agățate într-un cuier.",
  "bg": "Якетата висят на закачалка."
 },
 "In de pauze ga je naar buiten.": {
  "en": "At break time you go outside.",
  "ar": "في الاستراحة تخرج إلى الخارج.",
  "uk": "На перерві ти йдеш надвір.",
  "tr": "Teneffüste dışarı çıkarsın.",
  "ro": "În pauză ieși afară.",
  "bg": "В междучасието излизаш навън."
 },
 "Zeg wat je vergeten bent.": {
  "en": "Say what you forgot.",
  "ar": "قل ما نسيته.",
  "uk": "Скажи, що ти забув.",
  "tr": "Neyi unuttuğunu söyle.",
  "ro": "Spune ce ai uitat.",
  "bg": "Кажи какво си забравил."
 },
 "Zo maak je vrienden.\n\n**Hoe heet je?** → **Ik heet …**\n**Mag ik meedoen?** → dan speel je mee.\n**Dank je wel** als iemand je helpt.\n\nEn: **nee** zeggen mag altijd.": {
  "en": "This is how you make friends.\n\n**Hoe heet je?** (= What is your name?) → **Ik heet …** (= My name is …)\n**Mag ik meedoen?** (= Can I join?) → then you play along.\n**Dank je wel** (= Thank you) when someone helps you.\n\nAnd: saying **nee** (= no) is always okay.",
  "ar": "هكذا تكوّن أصدقاء.\n\n**Hoe heet je?** (= ما اسمك؟) → **Ik heet …** (= اسمي …)\n**Mag ik meedoen?** (= هل يمكنني أن ألعب معكم؟) → ثم تلعب معهم.\n**Dank je wel** (= شكرًا) عندما يساعدك أحد.\n\nو: قول **nee** (= لا) مسموح دائمًا.",
  "uk": "Так ти знаходиш друзів.\n\n**Hoe heet je?** (= Як тебе звати?) → **Ik heet …** (= Мене звати …)\n**Mag ik meedoen?** (= Можна мені з вами?) → тоді ти граєш разом.\n**Dank je wel** (= Дякую) — коли хтось тобі допомагає.\n\nІ ще: сказати **nee** (= ні) можна завжди.",
  "tr": "Böyle arkadaş edinirsin.\n\n**Hoe heet je?** (= Adın ne?) → **Ik heet …** (= Benim adım …)\n**Mag ik meedoen?** (= Katılabilir miyim?) → o zaman birlikte oynarsın.\n**Dank je wel** (= Teşekkür ederim) biri sana yardım edince.\n\nVe: **nee** (= hayır) demek her zaman serbest.",
  "ro": "Așa îți faci prieteni.\n\n**Hoe heet je?** (= Cum te cheamă?) → **Ik heet …** (= Mă cheamă …)\n**Mag ik meedoen?** (= Pot să mă joc și eu?) → apoi te joci împreună cu ei.\n**Dank je wel** (= Mulțumesc) când cineva te ajută.\n\nȘi: să spui **nee** (= nu) este întotdeauna voie.",
  "bg": "Така си намираш приятели.\n\n**Hoe heet je?** (= Как се казваш?) → **Ik heet …** (= Казвам се …)\n**Mag ik meedoen?** (= Може ли да играя с вас?) → тогава играеш заедно с тях.\n**Dank je wel** (= Благодаря) когато някой ти помогне.\n\nИ още: да кажеш **nee** (= не) винаги може."
 },
 "Zeg je naam.": {
  "en": "Say your name.",
  "ar": "قل اسمك.",
  "uk": "Скажи своє ім'я.",
  "tr": "Adını söyle.",
  "ro": "Spune-ți numele.",
  "bg": "Кажи името си."
 },
 "Jezelf voorstellen": {
  "en": "Saying who you are",
  "ar": "تعرّف بنفسك",
  "uk": "Знайомство",
  "tr": "Kendini tanıtmak",
  "ro": "Să te prezinți",
  "bg": "Запознанство"
 },
 "**Hoe heet je?** = wat is je naam. Je zegt: **Ik heet …** en dan je naam.": {
  "en": "**Hoe heet je?** = what is your name. You say: **Ik heet …** (= My name is …) and then your name.",
  "ar": "**Hoe heet je?** = ما اسمك. تقول: **Ik heet …** (= اسمي …) ثم اسمك.",
  "uk": "**Hoe heet je?** (= Як тебе звати?) = яке твоє ім'я. Ти кажеш: **Ik heet …** (= Мене звати …) і потім своє ім'я.",
  "tr": "**Hoe heet je?** = adın ne. Şöyle dersin: **Ik heet …** (= Benim adım …) ve sonra adın.",
  "ro": "**Hoe heet je?** (= Cum te cheamă?) = care este numele tău. Tu spui: **Ik heet …** (= Mă cheamă …) și apoi numele tău.",
  "bg": "**Hoe heet je?** (= Как се казваш?) = какво е името ти. Ти казваш: **Ik heet …** (= Казвам се …) и после името си."
 },
 "Meer vragen": {
  "en": "More questions",
  "ar": "أسئلة أخرى",
  "uk": "Ще питання",
  "tr": "Daha çok soru",
  "ro": "Mai multe întrebări",
  "bg": "Още въпроси"
 },
 "**Hoe oud ben je?** → **Ik ben … jaar.** **Waar kom je vandaan?** → **Ik kom uit …**": {
  "en": "**Hoe oud ben je?** (= How old are you?) → **Ik ben … jaar.** (= I am … years old.) **Waar kom je vandaan?** (= Where are you from?) → **Ik kom uit …** (= I am from …)",
  "ar": "**Hoe oud ben je?** (= كم عمرك؟) → **Ik ben … jaar.** (= عمري … سنوات.) **Waar kom je vandaan?** (= من أين أنت؟) → **Ik kom uit …** (= أنا من …)",
  "uk": "**Hoe oud ben je?** (= Скільки тобі років?) → **Ik ben … jaar.** (= Мені … років.) **Waar kom je vandaan?** (= Звідки ти?) → **Ik kom uit …** (= Я з …)",
  "tr": "**Hoe oud ben je?** (= Kaç yaşındasın?) → **Ik ben … jaar.** (= … yaşındayım.) **Waar kom je vandaan?** (= Nerelisin?) → **Ik kom uit …** (= …'den geliyorum.)",
  "ro": "**Hoe oud ben je?** (= Câți ani ai?) → **Ik ben … jaar.** (= Am … ani.) **Waar kom je vandaan?** (= De unde ești?) → **Ik kom uit …** (= Sunt din …)",
  "bg": "**Hoe oud ben je?** (= На колко години си?) → **Ik ben … jaar.** (= Аз съм на … години.) **Waar kom je vandaan?** (= Откъде си?) → **Ik kom uit …** (= Аз съм от …)"
 },
 "Vriendelijk": {
  "en": "Friendly",
  "ar": "بلطف",
  "uk": "Привітно",
  "tr": "Nazik ol",
  "ro": "Prietenos",
  "bg": "Приятелски"
 },
 "Kijk het kind aan. Lach. Dat helpt meer dan woorden.": {
  "en": "Look at the child. Smile. That helps more than words.",
  "ar": "انظر إلى الطفل. ابتسم. هذا يساعد أكثر من الكلمات.",
  "uk": "Подивися на дитину. Усміхнися. Це допомагає більше, ніж слова.",
  "tr": "Çocuğa bak. Gülümse. Bu, kelimelerden daha çok yardım eder.",
  "ro": "Uită-te la copil. Zâmbește. Asta ajută mai mult decât cuvintele.",
  "bg": "Погледни детето. Усмихни се. Това помага повече от думите."
 },
 "heten": {
  "en": "to be called",
  "ar": "يُسمّى",
  "uk": "зватися",
  "tr": "adı … olmak",
  "ro": "a se numi",
  "bg": "казвам се"
 },
 "Je naam hebben. Ik heet Sam.": {
  "en": "To have your name. \"Ik heet Sam.\" (= My name is Sam.)",
  "ar": "أن يكون لك اسم. «Ik heet Sam» = اسمي سام.",
  "uk": "Мати ім'я. Мене звати Сем.",
  "tr": "Bir adının olması. Benim adım Sam.",
  "ro": "Să ai numele tău. Mă cheamă Sam.",
  "bg": "Да имаш име. Казвам се Сам."
 },
 "Hoe heet je? → Ik heet …": {
  "en": "\"Hoe heet je?\" (= What is your name?) → \"Ik heet …\" (= My name is …)",
  "ar": "«Hoe heet je?» (ما اسمك؟) → «Ik heet …» (اسمي …)",
  "uk": "«Hoe heet je?» (= Як тебе звати?) → «Ik heet …» (= Мене звати …)",
  "tr": "\"Hoe heet je?\" (Adın ne?) → \"Ik heet …\" (Benim adım …)",
  "ro": "„Hoe heet je?” (= Cum te cheamă?) → „Ik heet …” (= Mă cheamă …)",
  "bg": "„Hoe heet je?“ (= Как се казваш?) → „Ik heet …“ (= Казвам се …)"
 },
 "Hoe heet je? Ik heet Amira.": {
  "en": "\"Hoe heet je? Ik heet Amira.\" (= What is your name? My name is Amira.)",
  "ar": "«Hoe heet je? Ik heet Amira.» = ما اسمك؟ اسمي أميرة.",
  "uk": "Як тебе звати? Мене звати Аміра.",
  "tr": "Adın ne? Benim adım Amira.",
  "ro": "Cum te cheamă? Mă cheamă Amira.",
  "bg": "Как се казваш? Казвам се Амира."
 },
 "Hoe oud ben je? Ik ben negen jaar.": {
  "en": "\"Hoe oud ben je? Ik ben negen jaar.\" (= How old are you? I am nine years old.)",
  "ar": "«Hoe oud ben je? Ik ben negen jaar.» = كم عمرك؟ عمري تسع سنوات.",
  "uk": "Скільки тобі років? Мені дев'ять років.",
  "tr": "Kaç yaşındasın? Dokuz yaşındayım.",
  "ro": "Câți ani ai? Am nouă ani.",
  "bg": "На колко години си? На девет години съм."
 },
 "Ik heet + naam.": {
  "en": "\"Ik heet\" + name.",
  "ar": "«Ik heet» + الاسم.",
  "uk": "«Ik heet» (= Мене звати) + ім'я.",
  "tr": "\"Ik heet\" + ad.",
  "ro": "„Ik heet” (= Mă cheamă) + numele.",
  "bg": "„Ik heet“ (= Казвам се) + име."
 },
 "Zeg: Ik heet … en je naam.": {
  "en": "Say: \"Ik heet …\" (= My name is …) and your name.",
  "ar": "قل: «Ik heet …» ثم اسمك.",
  "uk": "Скажи: «Ik heet …» (= Мене звати …) і своє ім'я.",
  "tr": "Söyle: \"Ik heet …\" (Benim adım …) ve adın.",
  "ro": "Spune: „Ik heet …” (= Mă cheamă …) și numele tău.",
  "bg": "Кажи: „Ik heet …“ (= Казвам се …) и името си."
 },
 "Ik heet Sam.": {
  "en": "My name is Sam.",
  "ar": "«Ik heet Sam.» = اسمي سام.",
  "uk": "Мене звати Сем.",
  "tr": "Benim adım Sam.",
  "ro": "Mă cheamă Sam.",
  "bg": "Казвам се Сам."
 },
 "Ik heet …": {
  "en": "My name is …",
  "ar": "«Ik heet …» = اسمي …",
  "uk": "Мене звати …",
  "tr": "Benim adım …",
  "ro": "Mă cheamă …",
  "bg": "Казвам се …"
 },
 "Vraag of je mee mag doen.": {
  "en": "Ask if you can join in.",
  "ar": "اسأل إن كان يمكنك أن تلعب معهم.",
  "uk": "Запитай, чи можна тобі гратися разом.",
  "tr": "Katılıp katılamayacağını sor.",
  "ro": "Întreabă dacă poți să te joci și tu.",
  "bg": "Попитай дали може да играеш и ти."
 },
 "Je bedankt iemand.": {
  "en": "You thank someone.",
  "ar": "تشكر شخصًا.",
  "uk": "Ти дякуєш комусь.",
  "tr": "Birine teşekkür ediyorsun.",
  "ro": "Mulțumești cuiva.",
  "bg": "Благодариш на някого."
 },
 "Je mag altijd nee zeggen.": {
  "en": "You may always say no.",
  "ar": "يمكنك دائمًا أن تقول لا.",
  "uk": "Ти завжди можеш сказати «ні».",
  "tr": "Her zaman hayır diyebilirsin.",
  "ro": "Poți întotdeauna să spui „nu”.",
  "bg": "Винаги можеш да кажеш „не“."
 },
 "Aan het eind van de dag zeg je dag.": {
  "en": "At the end of the day you say bye.",
  "ar": "في نهاية اليوم تقول «dag» (مع السلامة).",
  "uk": "Наприкінці дня ти кажеш «dag» (= бувай).",
  "tr": "Günün sonunda hoşça kal dersin.",
  "ro": "La sfârșitul zilei spui „dag” (= pa).",
  "bg": "В края на деня казваш „dag“ (= чао)."
 },
 "Woorden — je eerste Nederlandse woorden (nieuwkomers)": {
  "en": "Words — your first Dutch words (newcomers)",
  "ar": "كلمات — أول كلماتك الهولندية (للقادمين الجدد)",
  "uk": "Слова — твої перші нідерландські слова (новенькі)",
  "tr": "Kelimeler — ilk Felemenkçe kelimelerin (yeni gelenler)",
  "ro": "Cuvinte — primele tale cuvinte în neerlandeză (nou-veniți)",
  "bg": "Думи — първите ти думи на нидерландски (новодошли)"
 },
 "Twintig woorden voor school, thuis, eten, lichaam, kleuren en doe-woorden. Het woord staat in jouw taal; jij kiest het Nederlandse woord. ~12 min.": {
  "en": "Twenty words for school, home, food, body, colours and action words. The word is in your language; you pick the Dutch word. ~12 min.",
  "ar": "عشرون كلمة للمدرسة والبيت والطعام والجسم والألوان وكلمات الأفعال. الكلمة مكتوبة بلغتك؛ وأنت تختار الكلمة الهولندية. ~12 دقيقة.",
  "uk": "Двадцять слів про школу, дім, їжу, тіло, кольори і дії. Слово написане твоєю мовою; ти вибираєш нідерландське слово. ~12 хв.",
  "tr": "Okul, ev, yemek, vücut, renkler ve eylemler için yirmi kelime. Kelime senin dilinde yazar; sen Felemenkçe kelimeyi seçersin. ~12 dk.",
  "ro": "Douăzeci de cuvinte pentru școală, acasă, mâncare, corp, culori și cuvinte de acțiune. Cuvântul este în limba ta; tu alegi cuvântul în neerlandeză. ~12 min.",
  "bg": "Двайсет думи за училище, дом, храна, тяло, цветове и думи за действия. Думата е на твоя език; ти избираш нидерландската дума. ~12 мин."
 },
 "Thuis en eten": {
  "en": "Home and food",
  "ar": "البيت والطعام",
  "uk": "Дім і їжа",
  "tr": "Ev ve yemek",
  "ro": "Acasă și mâncare",
  "bg": "Вкъщи и храна"
 },
 "Lichaam en kleuren": {
  "en": "Body and colours",
  "ar": "الجسم والألوان",
  "uk": "Тіло і кольори",
  "tr": "Vücut ve renkler",
  "ro": "Corp și culori",
  "bg": "Тяло и цветове"
 },
 "Je ziet een woord in **jouw taal**. Kies het **Nederlandse** woord.\n\nLeer elk woord met **de** of **het** ervoor: de tafel, het boek.": {
  "en": "You see a word in **your language**. Pick the **Dutch** word.\n\nLearn each word with **de** or **het** in front: \"de tafel\" (the table), \"het boek\" (the book).",
  "ar": "ترى كلمة **بلغتك**. اختر الكلمة **الهولندية**.\n\nتعلّم كل كلمة مع **de** أو **het** قبلها: «de tafel» (الطاولة)، «het boek» (الكتاب).",
  "uk": "Ти бачиш слово **твоєю мовою**. Вибери **нідерландське** слово.\n\nВчи кожне слово з **de** або **het** перед ним: «de tafel» (= стіл), «het boek» (= книжка).",
  "tr": "**Senin dilinde** bir kelime görürsün. **Felemenkçe** kelimeyi seç.\n\nHer kelimeyi önünde **de** veya **het** ile öğren: \"de tafel\" (masa), \"het boek\" (kitap).",
  "ro": "Vezi un cuvânt în **limba ta**. Alege cuvântul în **neerlandeză**.\n\nÎnvață fiecare cuvânt cu **de** sau **het** în față: „de tafel” (= masa), „het boek” (= cartea).",
  "bg": "Виждаш дума на **твоя език**. Избери **нидерландската** дума.\n\nУчи всяка дума с **de** или **het** отпред: „de tafel“ (= масата), „het boek“ (= книгата)."
 },
 "Kijk naar het woord in jouw taal. Welk Nederlands woord past?": {
  "en": "Look at the word in your language. Which Dutch word fits?",
  "ar": "انظر إلى الكلمة بلغتك. أي كلمة هولندية تناسبها؟",
  "uk": "Подивися на слово твоєю мовою. Яке нідерландське слово підходить?",
  "tr": "Senin dilindeki kelimeye bak. Hangi Felemenkçe kelime uyuyor?",
  "ro": "Uită-te la cuvântul în limba ta. Care cuvânt în neerlandeză se potrivește?",
  "bg": "Погледни думата на твоя език. Коя нидерландска дума подхожда?"
 },
 "Zo werkt dit": {
  "en": "How this works",
  "ar": "هكذا يعمل هذا",
  "uk": "Як це працює",
  "tr": "Nasıl çalışır",
  "ro": "Așa funcționează",
  "bg": "Така работи"
 },
 "Je ziet een woord in **jouw taal**. Kies het **Nederlandse** woord dat hetzelfde betekent.": {
  "en": "You see a word in **your language**. Pick the **Dutch** word that means the same.",
  "ar": "ترى كلمة **بلغتك**. اختر الكلمة **الهولندية** التي لها نفس المعنى.",
  "uk": "Ти бачиш слово **твоєю мовою**. Вибери **нідерландське** слово, яке означає те саме.",
  "tr": "**Senin dilinde** bir kelime görürsün. Aynı anlama gelen **Felemenkçe** kelimeyi seç.",
  "ro": "Vezi un cuvânt în **limba ta**. Alege cuvântul în **neerlandeză** care înseamnă același lucru.",
  "bg": "Виждаш дума на **твоя език**. Избери **нидерландската** дума, която означава същото."
 },
 "De tafel": {
  "en": "The table",
  "ar": "الطاولة",
  "uk": "Стіл («de tafel»)",
  "tr": "Masa",
  "ro": "Masa („de tafel”)",
  "bg": "Масата („de tafel“)"
 },
 "Aan een **tafel** zit je. Je werkt eraan. Je eet eraan.": {
  "en": "You sit at a **tafel** (table). You work at it. You eat at it.",
  "ar": "تجلس إلى **الطاولة** («tafel»). تعمل عليها. تأكل عليها.",
  "uk": "За **столом** («tafel») ти сидиш. Ти за ним працюєш. Ти за ним їси.",
  "tr": "**Masada** (\"tafel\") oturursun. Orada çalışırsın. Orada yemek yersin.",
  "ro": "La **masă** („tafel”) stai. Lucrezi la ea. Mănânci la ea.",
  "bg": "На **масата** („tafel“) седиш. Работиш на нея. Ядеш на нея."
 },
 "de en het": {
  "en": "de and het",
  "ar": "«de» و«het»",
  "uk": "de і het",
  "tr": "\"de\" ve \"het\"",
  "ro": "de și het",
  "bg": "de и het"
 },
 "In het Nederlands hoort **de** of **het** bij een woord. Leer ze samen: **de tafel**, **het raam**.": {
  "en": "In Dutch, **de** or **het** goes with a word. Learn them together: **de tafel** (the table), **het raam** (the window).",
  "ar": "في الهولندية تأتي **de** أو **het** مع الكلمة. تعلّمهما معًا: **de tafel** (الطاولة)، **het raam** (النافذة).",
  "uk": "У нідерландській мові до слова належить **de** або **het**. Вчи їх разом: **de tafel** (= стіл), **het raam** (= вікно).",
  "tr": "Felemenkçede bir kelimenin önüne **de** veya **het** gelir. Onları birlikte öğren: **de tafel** (masa), **het raam** (pencere).",
  "ro": "În neerlandeză, **de** sau **het** merge cu un cuvânt. Învață-le împreună: **de tafel** (= masa), **het raam** (= fereastra).",
  "bg": "В нидерландския **de** или **het** върви с думата. Учи ги заедно: **de tafel** (= масата), **het raam** (= прозорецът)."
 },
 "de tafel": {
  "en": "the table",
  "ar": "الطاولة",
  "uk": "стіл",
  "tr": "masa",
  "ro": "masa",
  "bg": "масата"
 },
 "Daar zit je aan.": {
  "en": "You sit at it.",
  "ar": "تجلس إليها.",
  "uk": "За ним ти сидиш.",
  "tr": "Onun başında oturursun.",
  "ro": "La ea stai.",
  "bg": "На нея седиш."
 },
 "de stoel": {
  "en": "the chair",
  "ar": "الكرسي",
  "uk": "стілець",
  "tr": "sandalye",
  "ro": "scaunul",
  "bg": "столът"
 },
 "Daar zit je op.": {
  "en": "You sit on it.",
  "ar": "تجلس عليه.",
  "uk": "На ньому ти сидиш.",
  "tr": "Onun üstüne oturursun.",
  "ro": "Pe el stai.",
  "bg": "На него седиш."
 },
 "Leer het woord altijd mét de of het.": {
  "en": "Always learn the word with \"de\" or \"het\".",
  "ar": "تعلّم الكلمة دائمًا مع «de» أو «het».",
  "uk": "Завжди вчи слово разом з de або het.",
  "tr": "Kelimeyi her zaman \"de\" veya \"het\" ile öğren.",
  "ro": "Învață cuvântul întotdeauna cu de sau het.",
  "bg": "Учи думата винаги с de или het."
 },
 "de tafel, de stoel, de deur": {
  "en": "the table, the chair, the door",
  "ar": "«de tafel, de stoel, de deur» = الطاولة، الكرسي، الباب",
  "uk": "de tafel, de stoel, de deur (= стіл, стілець, двері)",
  "tr": "de tafel (masa), de stoel (sandalye), de deur (kapı)",
  "ro": "de tafel, de stoel, de deur (= masa, scaunul, ușa)",
  "bg": "de tafel, de stoel, de deur (= масата, столът, вратата)"
 },
 "het raam, het boek, het bord": {
  "en": "the window, the book, the board",
  "ar": "«het raam, het boek, het bord» = النافذة، الكتاب، اللوح",
  "uk": "het raam, het boek, het bord (= вікно, книжка, дошка)",
  "tr": "het raam (pencere), het boek (kitap), het bord (tahta)",
  "ro": "het raam, het boek, het bord (= fereastra, cartea, tabla)",
  "bg": "het raam, het boek, het bord (= прозорецът, книгата, дъската)"
 },
 "Zeg het woord hardop met de of het ervoor.": {
  "en": "Say the word out loud with \"de\" or \"het\" in front.",
  "ar": "قل الكلمة بصوت عالٍ مع «de» أو «het» قبلها.",
  "uk": "Скажи слово вголос з de або het перед ним.",
  "tr": "Kelimeyi önünde \"de\" veya \"het\" ile yüksek sesle söyle.",
  "ro": "Spune cuvântul cu voce tare cu de sau het în față.",
  "bg": "Кажи думата на глас с de или het отпред."
 },
 "Kies het Nederlandse woord.": {
  "en": "Pick the Dutch word.",
  "ar": "اختر الكلمة الهولندية.",
  "uk": "Вибери нідерландське слово.",
  "tr": "Felemenkçe kelimeyi seç.",
  "ro": "Alege cuvântul în neerlandeză.",
  "bg": "Избери нидерландската дума."
 },
 "Kijk naar jouw taal. Welk woord is dat in het Nederlands?": {
  "en": "Look at your language. What is that word in Dutch?",
  "ar": "انظر إلى لغتك. ما هذه الكلمة بالهولندية؟",
  "uk": "Подивися на свою мову. Як це слово нідерландською?",
  "tr": "Kendi diline bak. Bu kelime Felemenkçede ne?",
  "ro": "Uită-te la limba ta. Cum este cuvântul acela în neerlandeză?",
  "bg": "Погледни твоя език. Коя е тази дума на нидерландски?"
 },
 "Woorden voor **thuis** en **eten**.\n\nZeg ze hardop. Wijs ze aan in huis.": {
  "en": "Words for **home** and **food**.\n\nSay them out loud. Point at them in the house.",
  "ar": "كلمات عن **البيت** و**الطعام**.\n\nقلها بصوت عالٍ. أشِر إليها في البيت.",
  "uk": "Слова про **дім** і **їжу**.\n\nКажи їх уголос. Показуй їх удома.",
  "tr": "**Ev** ve **yemek** için kelimeler.\n\nOnları yüksek sesle söyle. Evde onları göster.",
  "ro": "Cuvinte pentru **acasă** și **mâncare**.\n\nSpune-le cu voce tare. Arată-le în casă.",
  "bg": "Думи за **дома** и **храната**.\n\nКажи ги на глас. Посочи ги вкъщи."
 },
 "Thuis": {
  "en": "Home",
  "ar": "في البيت",
  "uk": "Дім",
  "tr": "Ev",
  "ro": "Acasă",
  "bg": "Вкъщи"
 },
 "**Thuis** is waar je woont. Dat is je **huis**.": {
  "en": "**Thuis** (home) is where you live. That is your **huis** (house).",
  "ar": "**البيت** («thuis») هو المكان الذي تسكن فيه. هذا **بيتك** («huis»).",
  "uk": "**Вдома** («thuis») — там, де ти живеш. Це твій **дім** («huis»).",
  "tr": "**Ev** (\"thuis\") yaşadığın yerdir. Orası senin **evin** (\"huis\").",
  "ro": "**Acasă** („thuis”) este locul unde locuiești. Aceea este **casa** ta („huis”).",
  "bg": "**Вкъщи** („thuis“) е там, където живееш. Това е твоят **дом** („huis“)."
 },
 "In huis": {
  "en": "In the house",
  "ar": "داخل البيت",
  "uk": "У домі",
  "tr": "Evde",
  "ro": "În casă",
  "bg": "В къщата"
 },
 "In huis zijn de **keuken** (koken), de **kamer** (zitten) en de **slaapkamer** (slapen).": {
  "en": "In the house there is the **keuken** (kitchen, for cooking), the **kamer** (room, for sitting) and the **slaapkamer** (bedroom, for sleeping).",
  "ar": "في البيت يوجد **المطبخ** («keuken») للطبخ، و**الغرفة** («kamer») للجلوس، و**غرفة النوم** («slaapkamer») للنوم.",
  "uk": "У домі є **кухня** («keuken», готувати), **кімната** («kamer», сидіти) і **спальня** («slaapkamer», спати).",
  "tr": "Evde **mutfak** (\"keuken\", yemek pişirmek), **oda** (\"kamer\", oturmak) ve **yatak odası** (\"slaapkamer\", uyumak) var.",
  "ro": "În casă sunt **bucătăria** („keuken”, gătit), **camera** („kamer”, stat) și **dormitorul** („slaapkamer”, dormit).",
  "bg": "В къщата има **кухня** („keuken“, готвене), **стая** („kamer“, седене) и **спалня** („slaapkamer“, спане)."
 },
 "Eten": {
  "en": "Food",
  "ar": "الطعام",
  "uk": "Їжа",
  "tr": "Yemek",
  "ro": "Mâncare",
  "bg": "Храна"
 },
 "**Brood**, **water**, **melk**, **appel**: woorden die je elke dag hoort.": {
  "en": "**Brood** (bread), **water** (water), **melk** (milk), **appel** (apple): words you hear every day.",
  "ar": "**Brood** (خبز)، **water** (ماء)، **melk** (حليب)، **appel** (تفاحة): كلمات تسمعها كل يوم.",
  "uk": "**Хліб** («brood»), **вода** («water»), **молоко** («melk»), **яблуко** («appel»): слова, які ти чуєш щодня.",
  "tr": "**Ekmek** (\"brood\"), **su** (\"water\"), **süt** (\"melk\"), **elma** (\"appel\"): her gün duyduğun kelimeler.",
  "ro": "**Pâine** („brood”), **apă** („water”), **lapte** („melk”), **măr** („appel”): cuvinte pe care le auzi în fiecare zi.",
  "bg": "**Хляб** („brood“), **вода** („water“), **мляко** („melk“), **ябълка** („appel“): думи, които чуваш всеки ден."
 },
 "het huis": {
  "en": "the house",
  "ar": "البيت",
  "uk": "дім",
  "tr": "ev",
  "ro": "casa",
  "bg": "къщата"
 },
 "Waar je woont.": {
  "en": "Where you live.",
  "ar": "حيث تسكن.",
  "uk": "Де ти живеш.",
  "tr": "Yaşadığın yer.",
  "ro": "Unde locuiești.",
  "bg": "Където живееш."
 },
 "de keuken": {
  "en": "the kitchen",
  "ar": "المطبخ",
  "uk": "кухня",
  "tr": "mutfak",
  "ro": "bucătăria",
  "bg": "кухнята"
 },
 "Waar je kookt.": {
  "en": "Where you cook.",
  "ar": "حيث تطبخ.",
  "uk": "Де ти готуєш їжу.",
  "tr": "Yemek pişirdiğin yer.",
  "ro": "Unde gătești.",
  "bg": "Където готвиш."
 },
 "Huis = waar je woont.": {
  "en": "House = where you live.",
  "ar": "«huis» = حيث تسكن.",
  "uk": "Дім («huis») = де ти живеш.",
  "tr": "Ev = yaşadığın yer.",
  "ro": "Casa („huis”) = unde locuiești.",
  "bg": "Къща („huis“) = където живееш."
 },
 "Ik ga naar huis.": {
  "en": "I am going home.",
  "ar": "«Ik ga naar huis.» = أنا ذاهب إلى البيت.",
  "uk": "Я йду додому.",
  "tr": "Eve gidiyorum.",
  "ro": "Mă duc acasă.",
  "bg": "Отивам си вкъщи."
 },
 "Mama is in de keuken.": {
  "en": "Mum is in the kitchen.",
  "ar": "«Mama is in de keuken.» = ماما في المطبخ.",
  "uk": "Мама на кухні.",
  "tr": "Annem mutfakta.",
  "ro": "Mama este în bucătărie.",
  "bg": "Мама е в кухнята."
 },
 "Zeg elke dag één woord hardop in huis.": {
  "en": "Say one word out loud at home every day.",
  "ar": "قل كل يوم كلمة واحدة بصوت عالٍ في البيت.",
  "uk": "Щодня кажи вдома одне слово вголос.",
  "tr": "Her gün evde bir kelimeyi yüksek sesle söyle.",
  "ro": "Spune în fiecare zi un cuvânt cu voce tare în casă.",
  "bg": "Казвай всеки ден по една дума на глас вкъщи."
 },
 "Waar je woont = het huis.": {
  "en": "Where you live = \"het huis\" (the house).",
  "ar": "حيث تسكن = «het huis» (البيت).",
  "uk": "Де ти живеш = дім («het huis»).",
  "tr": "Yaşadığın yer = ev (\"het huis\").",
  "ro": "Unde locuiești = casa („het huis”).",
  "bg": "Където живееш = къщата („het huis“)."
 },
 "Woorden voor je **lichaam** en voor **kleuren**.\n\nWijs aan wat je zegt. Zo onthoud je het.": {
  "en": "Words for your **body** and for **colours**.\n\nPoint at what you say. That way you remember it.",
  "ar": "كلمات عن **جسمك** وعن **الألوان**.\n\nأشِر إلى ما تقوله. هكذا تتذكره.",
  "uk": "Слова про твоє **тіло** і про **кольори**.\n\nПоказуй те, що кажеш. Так ти запам'ятаєш.",
  "tr": "**Vücudun** ve **renkler** için kelimeler.\n\nSöylediğin şeyi göster. Böyle aklında kalır.",
  "ro": "Cuvinte pentru **corpul** tău și pentru **culori**.\n\nArată ce spui. Așa ții minte.",
  "bg": "Думи за твоето **тяло** и за **цветовете**.\n\nПосочвай това, което казваш. Така го запомняш."
 },
 "Je lichaam": {
  "en": "Your body",
  "ar": "جسمك",
  "uk": "Твоє тіло",
  "tr": "Vücudun",
  "ro": "Corpul tău",
  "bg": "Твоето тяло"
 },
 "**Hoofd** (boven), **buik** (midden), **voet** (onder). **Hand**: daar pak je mee.": {
  "en": "**Hoofd** (head, at the top), **buik** (tummy, in the middle), **voet** (foot, at the bottom). **Hand** (hand): you hold things with it.",
  "ar": "**Hoofd** (الرأس، في الأعلى)، **buik** (البطن، في الوسط)، **voet** (القدم، في الأسفل). **Hand** (اليد): بها تمسك الأشياء.",
  "uk": "**Голова** («hoofd», вгорі), **живіт** («buik», посередині), **стопа** («voet», внизу). **Рука** («hand»): нею ти береш.",
  "tr": "**Baş** (\"hoofd\", yukarıda), **karın** (\"buik\", ortada), **ayak** (\"voet\", aşağıda). **El** (\"hand\"): onunla tutarsın.",
  "ro": "**Capul** („hoofd”, sus), **burta** („buik”, la mijloc), **piciorul** („voet”, jos). **Mâna** („hand”): cu ea apuci.",
  "bg": "**Главата** („hoofd“, горе), **коремът** („buik“, в средата), **стъпалото** („voet“, долу). **Ръката** („hand“): с нея хващаш."
 },
 "Kleuren": {
  "en": "Colours",
  "ar": "الألوان",
  "uk": "Кольори",
  "tr": "Renkler",
  "ro": "Culori",
  "bg": "Цветове"
 },
 "**Rood**, **blauw**, **geel**, **groen**. Kijk om je heen: wat is rood?": {
  "en": "**Rood** (red), **blauw** (blue), **geel** (yellow), **groen** (green). Look around you: what is red?",
  "ar": "**Rood** (أحمر)، **blauw** (أزرق)، **geel** (أصفر)، **groen** (أخضر). انظر حولك: ما الشيء الأحمر؟",
  "uk": "**Червоний** («rood»), **синій** («blauw»), **жовтий** («geel»), **зелений** («groen»). Подивися навколо: що червоне?",
  "tr": "**Kırmızı** (\"rood\"), **mavi** (\"blauw\"), **sarı** (\"geel\"), **yeşil** (\"groen\"). Etrafına bak: ne kırmızı?",
  "ro": "**Roșu** („rood”), **albastru** („blauw”), **galben** („geel”), **verde** („groen”). Uită-te în jur: ce este roșu?",
  "bg": "**Червено** („rood“), **синьо** („blauw“), **жълто** („geel“), **зелено** („groen“). Огледай се: кое е червено?"
 },
 "Wijs aan": {
  "en": "Point",
  "ar": "أشِر",
  "uk": "Покажи",
  "tr": "Göster",
  "ro": "Arată",
  "bg": "Посочи"
 },
 "Zeg het woord en **wijs** het aan. Zo onthoud je het sneller.": {
  "en": "Say the word and **point** at it. That way you remember it faster.",
  "ar": "قل الكلمة و**أشِر** إليها. هكذا تتذكرها أسرع.",
  "uk": "Скажи слово і **покажи** його. Так ти запам'ятаєш швидше.",
  "tr": "Kelimeyi söyle ve onu **göster**. Böyle daha hızlı aklında kalır.",
  "ro": "Spune cuvântul și **arată-l**. Așa ții minte mai repede.",
  "bg": "Кажи думата и я **посочи**. Така я запомняш по-бързо."
 },
 "het hoofd": {
  "en": "the head",
  "ar": "الرأس",
  "uk": "голова",
  "tr": "baş",
  "ro": "capul",
  "bg": "главата"
 },
 "Bovenaan je lichaam.": {
  "en": "At the top of your body.",
  "ar": "في أعلى جسمك.",
  "uk": "Найвище на твоєму тілі.",
  "tr": "Vücudunun en üstü.",
  "ro": "În partea de sus a corpului tău.",
  "bg": "Най-отгоре на тялото ти."
 },
 "de hand": {
  "en": "the hand",
  "ar": "اليد",
  "uk": "рука",
  "tr": "el",
  "ro": "mâna",
  "bg": "ръката"
 },
 "Daar pak je mee.": {
  "en": "You hold things with it.",
  "ar": "بها تمسك الأشياء.",
  "uk": "Нею ти береш.",
  "tr": "Onunla tutarsın.",
  "ro": "Cu ea apuci.",
  "bg": "С нея хващаш."
 },
 "Wijs aan wat je zegt.": {
  "en": "Point at what you say.",
  "ar": "أشِر إلى ما تقوله.",
  "uk": "Показуй те, що кажеш.",
  "tr": "Söylediğin şeyi göster.",
  "ro": "Arată ce spui.",
  "bg": "Посочвай това, което казваш."
 },
 "Dit is mijn hand.": {
  "en": "This is my hand.",
  "ar": "«Dit is mijn hand.» = هذه يدي.",
  "uk": "Це моя рука.",
  "tr": "Bu benim elim.",
  "ro": "Aceasta este mâna mea.",
  "bg": "Това е моята ръка."
 },
 "De appel is rood.": {
  "en": "The apple is red.",
  "ar": "«De appel is rood.» = التفاحة حمراء.",
  "uk": "Яблуко червоне.",
  "tr": "Elma kırmızı.",
  "ro": "Mărul este roșu.",
  "bg": "Ябълката е червена."
 },
 "Woord + aanwijzen.": {
  "en": "Word + pointing.",
  "ar": "كلمة + إشارة.",
  "uk": "Слово + показати.",
  "tr": "Kelime + göstermek.",
  "ro": "Cuvânt + arătat.",
  "bg": "Дума + посочване."
 },
 "Bovenaan je lichaam = het hoofd.": {
  "en": "At the top of your body = \"het hoofd\" (the head).",
  "ar": "في أعلى جسمك = «het hoofd» (الرأس).",
  "uk": "Найвище на тілі = голова («het hoofd»).",
  "tr": "Vücudunun en üstü = baş (\"het hoofd\").",
  "ro": "În partea de sus a corpului = capul („het hoofd”).",
  "bg": "Най-отгоре на тялото = главата („het hoofd“)."
 },
 "Rekenen tot 20 (nieuwkomers, groep 3-4)": {
  "en": "Maths up to 20 (newcomers, year 1-2)",
  "ar": "الحساب حتى 20 (للقادمين الجدد، الصف 3-4)",
  "uk": "Лічба до 20 (новенькі, група 3-4)",
  "tr": "20'ye kadar matematik (yeni gelenler, 3-4. sınıf)",
  "ro": "Matematică până la 20 (nou-veniți, groep 3-4)",
  "bg": "Смятане до 20 (новодошли, група 3-4)"
 },
 "Tellen tot 20, erbij en eraf tot 10, over de 10 heen, en sommen met woorden. Korte zinnen, elke som met uitleg. Ook voor kinderen die nog Nederlands leren. ~10 min.": {
  "en": "Counting to 20, adding and taking away up to 10, going past 10, and word sums. Short sentences, every sum explained. Also for children who are still learning Dutch. ~10 min.",
  "ar": "العدّ حتى 20، الجمع والطرح حتى 10، تجاوز الـ10، ومسائل بالكلمات. جمل قصيرة، وكل مسألة مع شرح. أيضًا للأطفال الذين ما زالوا يتعلمون الهولندية. ~10 دقائق.",
  "uk": "Лічба до 20, додавання й віднімання до 10, перехід через 10 і задачі зі словами. Короткі речення, кожен приклад з поясненням. Також для дітей, які ще вчать нідерландську. ~10 хв.",
  "tr": "20'ye kadar saymak, 10'a kadar ekleme ve çıkarma, 10'u geçmek ve sözlü problemler. Kısa cümleler, her işlem açıklamalı. Felemenkçe öğrenen çocuklar için de. ~10 dk.",
  "ro": "Numărat până la 20, adunat și scăzut până la 10, trecut peste 10 și probleme cu cuvinte. Propoziții scurte, fiecare exercițiu cu explicație. Și pentru copiii care încă învață neerlandeza. ~10 min.",
  "bg": "Броене до 20, събиране и изваждане до 10, преминаване през 10 и задачи с думи. Кратки изречения, всяка задача с обяснение. Също за деца, които още учат нидерландски. ~10 мин."
 },
 "Tellen tot 20": {
  "en": "Counting to 20",
  "ar": "العدّ حتى 20",
  "uk": "Лічба до 20",
  "tr": "20'ye kadar saymak",
  "ro": "Numărat până la 20",
  "bg": "Броене до 20"
 },
 "Erbij tot 10": {
  "en": "Adding up to 10",
  "ar": "الجمع حتى 10",
  "uk": "Додавання до 10",
  "tr": "10'a kadar ekleme",
  "ro": "Adunare până la 10",
  "bg": "Събиране до 10"
 },
 "Eraf tot 10": {
  "en": "Taking away up to 10",
  "ar": "الطرح حتى 10",
  "uk": "Віднімання до 10",
  "tr": "10'a kadar çıkarma",
  "ro": "Scădere până la 10",
  "bg": "Изваждане до 10"
 },
 "Over de 10 heen": {
  "en": "Going past 10",
  "ar": "تجاوز الـ10",
  "uk": "Через 10",
  "tr": "10'u geçmek",
  "ro": "Peste 10",
  "bg": "През 10"
 },
 "Sommen uit de klas": {
  "en": "Sums from class",
  "ar": "مسائل من الصف",
  "uk": "Задачі з класу",
  "tr": "Sınıftan problemler",
  "ro": "Probleme din clasă",
  "bg": "Задачи от класа"
 },
 "We tellen van **1 tot 20**.\n\nTellen is steeds **één erbij**: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nZeg de rij hardop. Gebruik je vingers.": {
  "en": "We count from **1 to 20**.\n\nCounting is always **one more**: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nSay the row out loud. Use your fingers.",
  "ar": "نعدّ من **1 إلى 20**.\n\nالعدّ هو دائمًا **زيادة واحد**: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nقل الأرقام بصوت عالٍ. استعمل أصابعك.",
  "uk": "Ми лічимо від **1 до 20**.\n\nЛічити — це щоразу **додати один** («één erbij»): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nСкажи ряд уголос. Використовуй пальці.",
  "tr": "**1'den 20'ye** kadar sayıyoruz.\n\nSaymak hep **bir eklemektir**: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nSırayı yüksek sesle söyle. Parmaklarını kullan.",
  "ro": "Numărăm de la **1 la 20**.\n\nA număra înseamnă mereu **unu în plus** („één erbij”): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nSpune șirul cu voce tare. Folosește degetele.",
  "bg": "Броим от **1 до 20**.\n\nДа броиш значи всеки път **едно в повече** („één erbij“): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nКажи редицата на глас. Използвай пръстите си."
 },
 "Tel: 3, en dan één erbij.": {
  "en": "Count: 3, and then one more.",
  "ar": "عُدّ: 3، ثم زِد واحدًا.",
  "uk": "Лічи: 3, а потім ще один.",
  "tr": "Say: 3, sonra bir ekle.",
  "ro": "Numără: 3, și apoi unu în plus.",
  "bg": "Брой: 3, и после едно в повече."
 },
 "Tellen is één erbij": {
  "en": "Counting is one more",
  "ar": "العدّ هو زيادة واحد",
  "uk": "Лічити — це додати один",
  "tr": "Saymak bir eklemektir",
  "ro": "A număra înseamnă unu în plus",
  "bg": "Броенето е едно в повече"
 },
 "Als je telt, doe je steeds **één erbij**. Na 5 komt 6. Na 6 komt 7.": {
  "en": "When you count, you always add **one more**. After 5 comes 6. After 6 comes 7.",
  "ar": "عندما تعدّ، تضيف دائمًا **واحدًا**. بعد 5 يأتي 6. بعد 6 يأتي 7.",
  "uk": "Коли ти лічиш, ти щоразу **додаєш один**. Після 5 іде 6. Після 6 іде 7.",
  "tr": "Sayarken hep **bir eklersin**. 5'ten sonra 6 gelir. 6'dan sonra 7 gelir.",
  "ro": "Când numeri, adaugi mereu **unu în plus**. După 5 vine 6. După 6 vine 7.",
  "bg": "Когато броиш, всеки път добавяш **едно в повече**. След 5 идва 6. След 6 идва 7."
 },
 "Gebruik je vingers": {
  "en": "Use your fingers",
  "ar": "استعمل أصابعك",
  "uk": "Використовуй пальці",
  "tr": "Parmaklarını kullan",
  "ro": "Folosește degetele",
  "bg": "Използвай пръстите си"
 },
 "Zeg het getal. Doe **één vinger** omhoog. Zeg het volgende getal.": {
  "en": "Say the number. Put **one finger** up. Say the next number.",
  "ar": "قل الرقم. ارفع **إصبعًا واحدًا**. قل الرقم التالي.",
  "uk": "Скажи число. Підніми **один палець**. Скажи наступне число.",
  "tr": "Sayıyı söyle. **Bir parmağını** kaldır. Sonraki sayıyı söyle.",
  "ro": "Spune numărul. Ridică **un deget**. Spune numărul următor.",
  "bg": "Кажи числото. Вдигни **един пръст**. Кажи следващото число."
 },
 "De rij tot 20": {
  "en": "The row to 20",
  "ar": "الأرقام حتى 20",
  "uk": "Ряд до 20",
  "tr": "20'ye kadar sıra",
  "ro": "Șirul până la 20",
  "bg": "Редицата до 20"
 },
 "na": {
  "en": "after",
  "ar": "بعد",
  "uk": "після",
  "tr": "sonra",
  "ro": "după",
  "bg": "след"
 },
 "Wat erna komt. Na 3 komt 4.": {
  "en": "What comes next. After 3 comes 4.",
  "ar": "ما يأتي بعده. بعد 3 يأتي 4.",
  "uk": "Те, що йде далі. Після 3 іде 4.",
  "tr": "Sonra gelen. 3'ten sonra 4 gelir.",
  "ro": "Ce vine după. După 3 vine 4.",
  "bg": "Това, което идва после. След 3 идва 4."
 },
 "tellen": {
  "en": "counting",
  "ar": "العدّ",
  "uk": "лічити",
  "tr": "saymak",
  "ro": "a număra",
  "bg": "броене"
 },
 "1, 2, 3, 4… steeds één erbij.": {
  "en": "1, 2, 3, 4… always one more.",
  "ar": "1, 2, 3, 4… كل مرة زيادة واحد.",
  "uk": "1, 2, 3, 4… щоразу на один більше.",
  "tr": "1, 2, 3, 4… hep bir fazla.",
  "ro": "1, 2, 3, 4… mereu unu în plus.",
  "bg": "1, 2, 3, 4… всеки път едно в повече."
 },
 "Tellen = steeds één erbij.": {
  "en": "Counting = always one more.",
  "ar": "العدّ = كل مرة زيادة واحد.",
  "uk": "Лічити = щоразу додати один.",
  "tr": "Saymak = hep bir eklemek.",
  "ro": "A număra = mereu unu în plus.",
  "bg": "Броене = всеки път едно в повече."
 },
 "Na 9 komt 10.": {
  "en": "After 9 comes 10.",
  "ar": "بعد 9 يأتي 10.",
  "uk": "Після 9 іде 10.",
  "tr": "9'dan sonra 10 gelir.",
  "ro": "După 9 vine 10.",
  "bg": "След 9 идва 10."
 },
 "Na 14 komt 15.": {
  "en": "After 14 comes 15.",
  "ar": "بعد 14 يأتي 15.",
  "uk": "Після 14 іде 15.",
  "tr": "14'ten sonra 15 gelir.",
  "ro": "După 14 vine 15.",
  "bg": "След 14 идва 15."
 },
 "Zeg de rij hardop. Het getal dat je daarna zegt, is het antwoord.": {
  "en": "Say the row out loud. The number you say next is the answer.",
  "ar": "قل الأرقام بصوت عالٍ. الرقم الذي تقوله بعده هو الجواب.",
  "uk": "Скажи ряд уголос. Число, яке ти скажеш далі, — це відповідь.",
  "tr": "Sırayı yüksek sesle söyle. Sonra söylediğin sayı cevaptır.",
  "ro": "Spune șirul cu voce tare. Numărul pe care îl spui după aceea este răspunsul.",
  "bg": "Кажи редицата на глас. Числото, което казваш след това, е отговорът."
 },
 "Tel één verder.": {
  "en": "Count one further.",
  "ar": "عُدّ واحدًا إلى الأمام.",
  "uk": "Лічи на один далі.",
  "tr": "Bir ileri say.",
  "ro": "Numără unu mai departe.",
  "bg": "Брой едно по-нататък."
 },
 "Zeg het getal en dan het volgende getal.": {
  "en": "Say the number and then the next number.",
  "ar": "قل الرقم ثم الرقم التالي.",
  "uk": "Скажи число, а потім наступне число.",
  "tr": "Sayıyı söyle, sonra sonraki sayıyı.",
  "ro": "Spune numărul și apoi numărul următor.",
  "bg": "Кажи числото и после следващото число."
 },
 "Eén erbij.": {
  "en": "One more.",
  "ar": "زيادة واحد.",
  "uk": "Ще один.",
  "tr": "Bir ekle.",
  "ro": "Unu în plus.",
  "bg": "Едно в повече."
 },
 "Tel: 15, en dan één erbij.": {
  "en": "Count: 15, and then one more.",
  "ar": "عُدّ: 15، ثم زِد واحدًا.",
  "uk": "Лічи: 15, а потім ще один.",
  "tr": "Say: 15, sonra bir ekle.",
  "ro": "Numără: 15, și apoi unu în plus.",
  "bg": "Брой: 15, и после едно в повече."
 },
 "Tel: 4, en dan één erbij.": {
  "en": "Count: 4, and then one more.",
  "ar": "عُدّ: 4، ثم زِد واحدًا.",
  "uk": "Лічи: 4, а потім ще один.",
  "tr": "Say: 4, sonra bir ekle.",
  "ro": "Numără: 4, și apoi unu în plus.",
  "bg": "Брой: 4, и после едно в повече."
 },
 "Tel: 10, en dan één erbij.": {
  "en": "Count: 10, and then one more.",
  "ar": "عُدّ: 10، ثم زِد واحدًا.",
  "uk": "Лічи: 10, а потім ще один.",
  "tr": "Say: 10, sonra bir ekle.",
  "ro": "Numără: 10, și apoi unu în plus.",
  "bg": "Брой: 10, и после едно в повече."
 },
 "**Plus** (+) is **erbij**.\n\n3 + 2: begin bij 3, tel 2 verder: 4, 5. Het antwoord is **5**.\n\nBegin bij het **grootste** getal. Dan tel je korter.": {
  "en": "**Plus** (+) is **erbij** (adding).\n\n3 + 2: start at 3, count 2 further: 4, 5. The answer is **5**.\n\nStart at the **biggest** number. Then you count less.",
  "ar": "**Plus** (+) يعني **erbij** (= نضيف).\n\n3 + 2: ابدأ من 3، وعُدّ 2 إلى الأمام: 4, 5. الجواب هو **5**.\n\nابدأ من الرقم **الأكبر**. هكذا تعدّ أقل.",
  "uk": "**Plus** (+) (= плюс) — це **erbij** (= додати).\n\n3 + 2: почни з 3, лічи ще 2: 4, 5. Відповідь — **5**.\n\nПочни з **більшого** числа. Тоді лічити коротше.",
  "tr": "**Artı** (+, \"plus\") **eklemek** (\"erbij\") demektir.\n\n3 + 2: 3'ten başla, 2 ileri say: 4, 5. Cevap **5**.\n\n**En büyük** sayıdan başla. O zaman daha kısa sayarsın.",
  "ro": "**Plus** (+) (= plus) înseamnă **erbij** (= a aduna).\n\n3 + 2: începe de la 3, numără 2 mai departe: 4, 5. Răspunsul este **5**.\n\nÎncepe de la numărul **cel mai mare**. Atunci numeri mai puțin.",
  "bg": "**Plus** (+) (= плюс) е **erbij** (= прибавяне).\n\n3 + 2: започни от 3, брой 2 нататък: 4, 5. Отговорът е **5**.\n\nЗапочни от **най-голямото** число. Тогава броиш по-малко."
 },
 "Begin bij 4. Tel er 3 bij.": {
  "en": "Start at 4. Add 3.",
  "ar": "ابدأ من 4. أضف 3.",
  "uk": "Почни з 4. Додай 3.",
  "tr": "4'ten başla. 3 ekle.",
  "ro": "Începe de la 4. Adună 3.",
  "bg": "Започни от 4. Прибави 3."
 },
 "Erbij = tellen": {
  "en": "Adding = counting",
  "ar": "الإضافة («erbij») = العدّ",
  "uk": "«Erbij» (= додати) = лічити",
  "tr": "Eklemek = saymak",
  "ro": "„Erbij” (= a aduna) = a număra",
  "bg": "„Erbij“ (= прибавяне) = броене"
 },
 "**Plus** (+) betekent **erbij**. 3 + 2: begin bij 3 en tel 2 verder: 4, 5. Het antwoord is 5.": {
  "en": "**Plus** (+) means **erbij** (adding). 3 + 2: start at 3 and count 2 further: 4, 5. The answer is 5.",
  "ar": "**Plus** (+) يعني **erbij** (= نضيف). 3 + 2: ابدأ من 3 وعُدّ 2 إلى الأمام: 4, 5. الجواب هو 5.",
  "uk": "**Plus** (+) (= плюс) означає **erbij** (= додати). 3 + 2: почни з 3 і лічи ще 2: 4, 5. Відповідь — 5.",
  "tr": "**Artı** (+, \"plus\") **eklemek** (\"erbij\") demektir. 3 + 2: 3'ten başla ve 2 ileri say: 4, 5. Cevap 5.",
  "ro": "**Plus** (+) (= plus) înseamnă **erbij** (= a aduna). 3 + 2: începe de la 3 și numără 2 mai departe: 4, 5. Răspunsul este 5.",
  "bg": "**Plus** (+) (= плюс) означава **erbij** (= прибавяне). 3 + 2: започни от 3 и брой 2 нататък: 4, 5. Отговорът е 5."
 },
 "Met je vingers": {
  "en": "With your fingers",
  "ar": "بأصابعك",
  "uk": "Пальцями",
  "tr": "Parmaklarınla",
  "ro": "Cu degetele",
  "bg": "С пръстите"
 },
 "Doe 3 vingers omhoog. Doe er 2 bij. Tel alle vingers.": {
  "en": "Put 3 fingers up. Add 2 more. Count all the fingers.",
  "ar": "ارفع 3 أصابع. أضف 2. عُدّ كل الأصابع.",
  "uk": "Підніми 3 пальці. Додай ще 2. Порахуй усі пальці.",
  "tr": "3 parmağını kaldır. 2 tane daha ekle. Bütün parmakları say.",
  "ro": "Ridică 3 degete. Mai ridică 2. Numără toate degetele.",
  "bg": "Вдигни 3 пръста. Вдигни още 2. Преброй всички пръсти."
 },
 "Het grootste eerst": {
  "en": "The biggest first",
  "ar": "الأكبر أولًا",
  "uk": "Спочатку більше",
  "tr": "Önce en büyüğü",
  "ro": "Cel mai mare mai întâi",
  "bg": "Първо най-голямото"
 },
 "Begin altijd bij het **grootste** getal. Dat is korter tellen.": {
  "en": "Always start at the **biggest** number. Then you count less.",
  "ar": "ابدأ دائمًا من الرقم **الأكبر**. هكذا يكون العدّ أقصر.",
  "uk": "Завжди починай з **більшого** числа. Так лічити коротше.",
  "tr": "Her zaman **en büyük** sayıdan başla. Böyle daha kısa sayarsın.",
  "ro": "Începe întotdeauna de la numărul **cel mai mare**. Așa numeri mai puțin.",
  "bg": "Винаги започвай от **най-голямото** число. Така броиш по-малко."
 },
 "plus": {
  "en": "plus",
  "ar": "زائد",
  "uk": "плюс",
  "tr": "artı",
  "ro": "plus",
  "bg": "плюс"
 },
 "Het teken +. Erbij.": {
  "en": "The sign +. Adding.",
  "ar": "العلامة +. نضيف.",
  "uk": "Знак +. Додати.",
  "tr": "+ işareti. Eklemek.",
  "ro": "Semnul +. A aduna.",
  "bg": "Знакът +. Прибавяне."
 },
 "erbij": {
  "en": "adding",
  "ar": "نضيف",
  "uk": "додати",
  "tr": "ekle",
  "ro": "a aduna",
  "bg": "прибавяне"
 },
 "Meer maken.": {
  "en": "Making more.",
  "ar": "نجعله أكثر.",
  "uk": "Зробити більше.",
  "tr": "Daha çok yapmak.",
  "ro": "A face mai mult.",
  "bg": "Да станат повече."
 },
 "Plus = erbij = verder tellen.": {
  "en": "\"Plus\" = \"erbij\" (adding) = counting on.",
  "ar": "«plus» = «erbij» = نعدّ إلى الأمام.",
  "uk": "Плюс («plus») = додати («erbij») = лічити далі.",
  "tr": "Artı = ekle = ileri say.",
  "ro": "Plus („plus”) = a aduna („erbij”) = a număra mai departe.",
  "bg": "Плюс („plus“) = прибавяне („erbij“) = броене нататък."
 },
 "4 + 3: 5, 6, 7. Antwoord 7.": {
  "en": "4 + 3: 5, 6, 7. Answer 7.",
  "ar": "4 + 3: 5, 6, 7. الجواب 7.",
  "uk": "4 + 3: 5, 6, 7. Відповідь 7.",
  "tr": "4 + 3: 5, 6, 7. Cevap 7.",
  "ro": "4 + 3: 5, 6, 7. Răspuns 7.",
  "bg": "4 + 3: 5, 6, 7. Отговор 7."
 },
 "6 + 2: 7, 8. Antwoord 8.": {
  "en": "6 + 2: 7, 8. Answer 8.",
  "ar": "6 + 2: 7, 8. الجواب 8.",
  "uk": "6 + 2: 7, 8. Відповідь 8.",
  "tr": "6 + 2: 7, 8. Cevap 8.",
  "ro": "6 + 2: 7, 8. Răspuns 8.",
  "bg": "6 + 2: 7, 8. Отговор 8."
 },
 "Begin bij het grootste getal en tel het kleinste erbij.": {
  "en": "Start at the biggest number and add the smallest.",
  "ar": "ابدأ من الرقم الأكبر وأضف إليه الأصغر.",
  "uk": "Почни з більшого числа і додай менше.",
  "tr": "En büyük sayıdan başla ve küçüğü ekle.",
  "ro": "Începe de la numărul cel mai mare și adună-l pe cel mai mic.",
  "bg": "Започни от най-голямото число и прибави най-малкото."
 },
 "Tel het tweede getal erbij.": {
  "en": "Add the second number.",
  "ar": "أضف الرقم الثاني.",
  "uk": "Додай друге число.",
  "tr": "İkinci sayıyı ekle.",
  "ro": "Adună al doilea număr.",
  "bg": "Прибави второто число."
 },
 "Begin bij het eerste getal. Tel verder.": {
  "en": "Start at the first number. Count on.",
  "ar": "ابدأ من الرقم الأول. عُدّ إلى الأمام.",
  "uk": "Почни з першого числа. Лічи далі.",
  "tr": "İlk sayıdan başla. İleri say.",
  "ro": "Începe de la primul număr. Numără mai departe.",
  "bg": "Започни от първото число. Брой нататък."
 },
 "Erbij = verder tellen.": {
  "en": "Adding = counting on.",
  "ar": "الإضافة («erbij») = العدّ إلى الأمام.",
  "uk": "Додати («erbij») = лічити далі.",
  "tr": "Ekle = ileri say.",
  "ro": "A aduna („erbij”) = a număra mai departe.",
  "bg": "Прибавяне („erbij“) = броене нататък."
 },
 "Begin bij 1. Tel er 1 bij.": {
  "en": "Start at 1. Add 1.",
  "ar": "ابدأ من 1. أضف 1.",
  "uk": "Почни з 1. Додай 1.",
  "tr": "1'den başla. 1 ekle.",
  "ro": "Începe de la 1. Adună 1.",
  "bg": "Започни от 1. Прибави 1."
 },
 "Begin bij 2. Tel er 6 bij.": {
  "en": "Start at 2. Add 6.",
  "ar": "ابدأ من 2. أضف 6.",
  "uk": "Почни з 2. Додай 6.",
  "tr": "2'den başla. 6 ekle.",
  "ro": "Începe de la 2. Adună 6.",
  "bg": "Започни от 2. Прибави 6."
 },
 "Begin bij 5. Tel er 3 bij.": {
  "en": "Start at 5. Add 3.",
  "ar": "ابدأ من 5. أضف 3.",
  "uk": "Почни з 5. Додай 3.",
  "tr": "5'ten başla. 3 ekle.",
  "ro": "Începe de la 5. Adună 3.",
  "bg": "Започни от 5. Прибави 3."
 },
 "Begin bij 6. Tel er 4 bij.": {
  "en": "Start at 6. Add 4.",
  "ar": "ابدأ من 6. أضف 4.",
  "uk": "Почни з 6. Додай 4.",
  "tr": "6'dan başla. 4 ekle.",
  "ro": "Începe de la 6. Adună 4.",
  "bg": "Започни от 6. Прибави 4."
 },
 "**Min** (−) is **eraf**.\n\n7 − 2: begin bij 7, tel 2 terug: 6, 5. Het antwoord is **5**.\n\nBij eraf wordt het getal **kleiner**.": {
  "en": "**Min** (−) is **eraf** (taking away).\n\n7 − 2: start at 7, count back 2: 6, 5. The answer is **5**.\n\nWhen you take away, the number gets **smaller**.",
  "ar": "**Min** (−) يعني **eraf** (= ننقص).\n\n7 − 2: ابدأ من 7، وعُدّ 2 إلى الوراء: 6, 5. الجواب هو **5**.\n\nعند الطرح يصبح الرقم **أصغر**.",
  "uk": "**Min** (−) (= мінус) — це **eraf** (= відняти).\n\n7 − 2: почни з 7, лічи 2 назад: 6, 5. Відповідь — **5**.\n\nКоли віднімаєш, число стає **меншим**.",
  "tr": "**Eksi** (−, \"min\") **çıkarmak** (\"eraf\") demektir.\n\n7 − 2: 7'den başla, 2 geri say: 6, 5. Cevap **5**.\n\nÇıkarınca sayı **küçülür**.",
  "ro": "**Min** (−) (= minus) înseamnă **eraf** (= a scădea).\n\n7 − 2: începe de la 7, numără 2 înapoi: 6, 5. Răspunsul este **5**.\n\nCând scazi, numărul devine **mai mic**.",
  "bg": "**Min** (−) (= минус) е **eraf** (= изваждане).\n\n7 − 2: започни от 7, брой 2 назад: 6, 5. Отговорът е **5**.\n\nПри изваждане числото става **по-малко**."
 },
 "Begin bij 3. Tel 2 terug.": {
  "en": "Start at 3. Count back 2.",
  "ar": "ابدأ من 3. عُدّ 2 إلى الوراء.",
  "uk": "Почни з 3. Лічи 2 назад.",
  "tr": "3'ten başla. 2 geri say.",
  "ro": "Începe de la 3. Numără 2 înapoi.",
  "bg": "Започни от 3. Брой 2 назад."
 },
 "Eraf = terug tellen": {
  "en": "Taking away = counting back",
  "ar": "الطرح («eraf») = العدّ إلى الوراء",
  "uk": "«Eraf» (= відняти) = лічити назад",
  "tr": "Çıkarmak = geri saymak",
  "ro": "„Eraf” (= a scădea) = a număra înapoi",
  "bg": "„Eraf“ (= изваждане) = броене назад"
 },
 "**Min** (−) betekent **eraf**. 7 − 2: begin bij 7 en tel 2 terug: 6, 5. Het antwoord is 5.": {
  "en": "**Min** (−) means **eraf** (taking away). 7 − 2: start at 7 and count back 2: 6, 5. The answer is 5.",
  "ar": "**Min** (−) يعني **eraf** (= ننقص). 7 − 2: ابدأ من 7 وعُدّ 2 إلى الوراء: 6, 5. الجواب هو 5.",
  "uk": "**Min** (−) (= мінус) означає **eraf** (= відняти). 7 − 2: почни з 7 і лічи 2 назад: 6, 5. Відповідь — 5.",
  "tr": "**Eksi** (−, \"min\") **çıkarmak** (\"eraf\") demektir. 7 − 2: 7'den başla ve 2 geri say: 6, 5. Cevap 5.",
  "ro": "**Min** (−) (= minus) înseamnă **eraf** (= a scădea). 7 − 2: începe de la 7 și numără 2 înapoi: 6, 5. Răspunsul este 5.",
  "bg": "**Min** (−) (= минус) означава **eraf** (= изваждане). 7 − 2: започни от 7 и брой 2 назад: 6, 5. Отговорът е 5."
 },
 "Doe 7 vingers omhoog. Doe er 2 naar beneden. Tel de vingers die nog omhoog zijn.": {
  "en": "Put 7 fingers up. Put 2 down. Count the fingers that are still up.",
  "ar": "ارفع 7 أصابع. أنزل 2 منها. عُدّ الأصابع التي ما زالت مرفوعة.",
  "uk": "Підніми 7 пальців. Опусти 2. Порахуй пальці, які ще підняті.",
  "tr": "7 parmağını kaldır. 2 tanesini indir. Hâlâ yukarıda olan parmakları say.",
  "ro": "Ridică 7 degete. Lasă 2 în jos. Numără degetele care sunt încă sus.",
  "bg": "Вдигни 7 пръста. Свали 2. Преброй пръстите, които още са вдигнати."
 },
 "Het wordt minder": {
  "en": "It gets less",
  "ar": "يصبح أقل",
  "uk": "Стає менше",
  "tr": "Azalır",
  "ro": "Devine mai puțin",
  "bg": "Става по-малко"
 },
 "Bij eraf wordt het getal altijd **kleiner**. Is je antwoord groter? Dan klopt het niet.": {
  "en": "When you take away, the number always gets **smaller**. Is your answer bigger? Then it is wrong.",
  "ar": "عند الطرح يصبح الرقم دائمًا **أصغر**. هل جوابك أكبر؟ إذن هو غير صحيح.",
  "uk": "Коли віднімаєш, число завжди стає **меншим**. Твоя відповідь більша? Тоді це неправильно.",
  "tr": "Çıkarınca sayı her zaman **küçülür**. Cevabın daha mı büyük? O zaman doğru değil.",
  "ro": "Când scazi, numărul devine întotdeauna **mai mic**. Răspunsul tău este mai mare? Atunci nu este corect.",
  "bg": "При изваждане числото винаги става **по-малко**. Отговорът ти е по-голям? Тогава не е вярно."
 },
 "min": {
  "en": "minus",
  "ar": "ناقص",
  "uk": "мінус",
  "tr": "eksi",
  "ro": "minus",
  "bg": "минус"
 },
 "Het teken −. Eraf.": {
  "en": "The sign −. Taking away.",
  "ar": "العلامة −. ننقص.",
  "uk": "Знак −. Відняти.",
  "tr": "− işareti. Çıkarmak.",
  "ro": "Semnul −. A scădea.",
  "bg": "Знакът −. Изваждане."
 },
 "eraf": {
  "en": "taking away",
  "ar": "ننقص",
  "uk": "відняти",
  "tr": "çıkar",
  "ro": "a scădea",
  "bg": "изваждане"
 },
 "Minder maken.": {
  "en": "Making less.",
  "ar": "نجعله أقل.",
  "uk": "Зробити менше.",
  "tr": "Daha az yapmak.",
  "ro": "A face mai puțin.",
  "bg": "Да станат по-малко."
 },
 "Min = eraf = terug tellen.": {
  "en": "\"Min\" (minus) = \"eraf\" (taking away) = counting back.",
  "ar": "«min» = «eraf» = نعدّ إلى الوراء.",
  "uk": "Мінус («min») = відняти («eraf») = лічити назад.",
  "tr": "Eksi = çıkar = geri say.",
  "ro": "Minus („min”) = a scădea („eraf”) = a număra înapoi.",
  "bg": "Минус („min“) = изваждане („eraf“) = броене назад."
 },
 "9 − 3: 8, 7, 6. Antwoord 6.": {
  "en": "9 − 3: 8, 7, 6. Answer 6.",
  "ar": "9 − 3: 8, 7, 6. الجواب 6.",
  "uk": "9 − 3: 8, 7, 6. Відповідь 6.",
  "tr": "9 − 3: 8, 7, 6. Cevap 6.",
  "ro": "9 − 3: 8, 7, 6. Răspuns 6.",
  "bg": "9 − 3: 8, 7, 6. Отговор 6."
 },
 "5 − 5 = 0. Alles eraf.": {
  "en": "5 − 5 = 0. All taken away.",
  "ar": "5 − 5 = 0. نأخذ الكل.",
  "uk": "5 − 5 = 0. Усе відняли.",
  "tr": "5 − 5 = 0. Hepsi gitti.",
  "ro": "5 − 5 = 0. Totul scăzut.",
  "bg": "5 − 5 = 0. Всичко е извадено."
 },
 "Tel terug op je vingers.": {
  "en": "Count back on your fingers.",
  "ar": "عُدّ إلى الوراء على أصابعك.",
  "uk": "Лічи назад на пальцях.",
  "tr": "Parmaklarınla geri say.",
  "ro": "Numără înapoi pe degete.",
  "bg": "Брой назад на пръсти."
 },
 "Tel het tweede getal terug.": {
  "en": "Count back the second number.",
  "ar": "عُدّ الرقم الثاني إلى الوراء.",
  "uk": "Лічи друге число назад.",
  "tr": "İkinci sayı kadar geri say.",
  "ro": "Numără al doilea număr înapoi.",
  "bg": "Брой второто число назад."
 },
 "Begin bij het eerste getal. Tel terug.": {
  "en": "Start at the first number. Count back.",
  "ar": "ابدأ من الرقم الأول. عُدّ إلى الوراء.",
  "uk": "Почни з першого числа. Лічи назад.",
  "tr": "İlk sayıdan başla. Geri say.",
  "ro": "Începe de la primul număr. Numără înapoi.",
  "bg": "Започни от първото число. Брой назад."
 },
 "Eraf = terug tellen.": {
  "en": "Taking away = counting back.",
  "ar": "الطرح («eraf») = العدّ إلى الوراء.",
  "uk": "Відняти («eraf») = лічити назад.",
  "tr": "Çıkar = geri say.",
  "ro": "A scădea („eraf”) = a număra înapoi.",
  "bg": "Изваждане („eraf“) = броене назад."
 },
 "Begin bij 6. Tel 3 terug.": {
  "en": "Start at 6. Count back 3.",
  "ar": "ابدأ من 6. عُدّ 3 إلى الوراء.",
  "uk": "Почни з 6. Лічи 3 назад.",
  "tr": "6'dan başla. 3 geri say.",
  "ro": "Începe de la 6. Numără 3 înapoi.",
  "bg": "Започни от 6. Брой 3 назад."
 },
 "Begin bij 2. Tel 1 terug.": {
  "en": "Start at 2. Count back 1.",
  "ar": "ابدأ من 2. عُدّ 1 إلى الوراء.",
  "uk": "Почни з 2. Лічи 1 назад.",
  "tr": "2'den başla. 1 geri say.",
  "ro": "Începe de la 2. Numără 1 înapoi.",
  "bg": "Започни от 2. Брой 1 назад."
 },
 "Begin bij 2. Tel 2 terug.": {
  "en": "Start at 2. Count back 2.",
  "ar": "ابدأ من 2. عُدّ 2 إلى الوراء.",
  "uk": "Почни з 2. Лічи 2 назад.",
  "tr": "2'den başla. 2 geri say.",
  "ro": "Începe de la 2. Numără 2 înapoi.",
  "bg": "Започни от 2. Брой 2 назад."
 },
 "Begin bij 5. Tel 1 terug.": {
  "en": "Start at 5. Count back 1.",
  "ar": "ابدأ من 5. عُدّ 1 إلى الوراء.",
  "uk": "Почни з 5. Лічи 1 назад.",
  "tr": "5'ten başla. 1 geri say.",
  "ro": "Începe de la 5. Numără 1 înapoi.",
  "bg": "Започни от 5. Брой 1 назад."
 },
 "8 + 5 is meer dan 10. Dat doen we in **twee stapjes**.\n\nStap 1: maak 10 vol. 8 + 2 = 10.\nStap 2: de rest erbij. 10 + 3 = **13**.\n\nBij eraf: ga eerst naar 10, dan de rest eraf.": {
  "en": "8 + 5 is more than 10. We do that in **two small steps**.\n\nStep 1: fill up 10. 8 + 2 = 10.\nStep 2: add the rest. 10 + 3 = **13**.\n\nWhen taking away: go to 10 first, then take away the rest.",
  "ar": "8 + 5 أكثر من 10. نحلّها في **خطوتين صغيرتين**.\n\nالخطوة 1: أكمل الـ10. 8 + 2 = 10.\nالخطوة 2: أضف الباقي. 10 + 3 = **13**.\n\nعند الطرح: اذهب أولًا إلى 10، ثم اطرح الباقي.",
  "uk": "8 + 5 — це більше, ніж 10. Це ми робимо у **два кроки**.\n\nКрок 1: доповни до 10. 8 + 2 = 10.\nКрок 2: додай решту. 10 + 3 = **13**.\n\nКоли віднімаєш: спочатку дійди до 10, потім відніми решту.",
  "tr": "8 + 5, 10'dan fazla. Bunu **iki küçük adımda** yaparız.\n\nAdım 1: 10'u tamamla. 8 + 2 = 10.\nAdım 2: kalanı ekle. 10 + 3 = **13**.\n\nÇıkarırken: önce 10'a git, sonra kalanı çıkar.",
  "ro": "8 + 5 este mai mult decât 10. Facem asta în **doi pași mici**.\n\nPasul 1: umple până la 10. 8 + 2 = 10.\nPasul 2: adună restul. 10 + 3 = **13**.\n\nLa scădere: mergi mai întâi la 10, apoi scade restul.",
  "bg": "8 + 5 е повече от 10. Правим го на **две малки стъпки**.\n\nСтъпка 1: допълни до 10. 8 + 2 = 10.\nСтъпка 2: прибави остатъка. 10 + 3 = **13**.\n\nПри изваждане: първо стигни до 10, после извади остатъка."
 },
 "Maak eerst 10: 5 + 5 = 10. Dan nog 3 erbij.": {
  "en": "Make 10 first: 5 + 5 = 10. Then add 3 more.",
  "ar": "اصنع 10 أولًا: 5 + 5 = 10. ثم أضف 3 أيضًا.",
  "uk": "Спочатку зроби 10: 5 + 5 = 10. Потім додай ще 3.",
  "tr": "Önce 10 yap: 5 + 5 = 10. Sonra 3 daha ekle.",
  "ro": "Fă mai întâi 10: 5 + 5 = 10. Apoi încă 3.",
  "bg": "Първо направи 10: 5 + 5 = 10. После още 3."
 },
 "Eerst naar 10": {
  "en": "First to 10",
  "ar": "أولًا إلى 10",
  "uk": "Спочатку до 10",
  "tr": "Önce 10'a",
  "ro": "Mai întâi la 10",
  "bg": "Първо до 10"
 },
 "8 + 5. Maak eerst **10**: 8 + 2 = 10. Je had 5, je hebt 2 gebruikt. Er blijft 3 over. 10 + 3 = **13**.": {
  "en": "8 + 5. Make **10** first: 8 + 2 = 10. You had 5, you used 2. 3 are left. 10 + 3 = **13**.",
  "ar": "8 + 5. اصنع **10** أولًا: 8 + 2 = 10. كان عندك 5، استعملت 2. يبقى 3. 10 + 3 = **13**.",
  "uk": "8 + 5. Спочатку зроби **10**: 8 + 2 = 10. У тебе було 5, ти використав 2. Залишилося 3. 10 + 3 = **13**.",
  "tr": "8 + 5. Önce **10** yap: 8 + 2 = 10. 5'in vardı, 2'sini kullandın. 3 kaldı. 10 + 3 = **13**.",
  "ro": "8 + 5. Fă mai întâi **10**: 8 + 2 = 10. Aveai 5, ai folosit 2. Rămân 3. 10 + 3 = **13**.",
  "bg": "8 + 5. Първо направи **10**: 8 + 2 = 10. Имаше 5, използва 2. Остават 3. 10 + 3 = **13**."
 },
 "In twee stukjes": {
  "en": "In two pieces",
  "ar": "في قطعتين",
  "uk": "На дві частини",
  "tr": "İki parçada",
  "ro": "În două bucăți",
  "bg": "На две части"
 },
 "Knip het tweede getal in **twee stukjes**. Eén stukje maakt 10 vol. Het andere stukje komt erbij.": {
  "en": "Cut the second number into **two pieces**. One piece fills up 10. The other piece gets added.",
  "ar": "قسّم الرقم الثاني إلى **قطعتين**. قطعة تكمل الـ10. والقطعة الأخرى تضيفها.",
  "uk": "Розріж друге число на **дві частини**. Одна частина доповнює до 10. Другу частину ти додаєш.",
  "tr": "İkinci sayıyı **iki parçaya** böl. Bir parça 10'u tamamlar. Öbür parça eklenir.",
  "ro": "Taie al doilea număr în **două bucăți**. O bucată umple până la 10. Cealaltă bucată se adună.",
  "bg": "Раздели второто число на **две части**. Едната част допълва до 10. Другата част се прибавя."
 },
 "10 vingers vol? Dan begin je opnieuw en tel je verder: 11, 12, 13.": {
  "en": "10 fingers full? Then start again and count on: 11, 12, 13.",
  "ar": "امتلأت 10 أصابع؟ إذن ابدأ من جديد وعُدّ إلى الأمام: 11, 12, 13.",
  "uk": "Усі 10 пальців підняті? Тоді почни знову і лічи далі: 11, 12, 13.",
  "tr": "10 parmak doldu mu? O zaman yeniden başla ve saymaya devam et: 11, 12, 13.",
  "ro": "Toate cele 10 degete sus? Atunci începe din nou și numără mai departe: 11, 12, 13.",
  "bg": "Всичките 10 пръста са вдигнати? Тогава започни отначало и брой нататък: 11, 12, 13."
 },
 "tien vol": {
  "en": "ten full",
  "ar": "إكمال العشرة",
  "uk": "повний десяток",
  "tr": "10'u tamamla",
  "ro": "zece plin",
  "bg": "пълна десетица"
 },
 "Eerst tot 10 tellen. Dan verder.": {
  "en": "First count to 10. Then go on.",
  "ar": "عُدّ أولًا حتى 10. ثم تابع.",
  "uk": "Спочатку лічи до 10. Потім далі.",
  "tr": "Önce 10'a kadar say. Sonra devam et.",
  "ro": "Numără mai întâi până la 10. Apoi mai departe.",
  "bg": "Първо брой до 10. После нататък."
 },
 "Over de 10: eerst 10 vol maken, dan de rest erbij.": {
  "en": "Past 10: first fill up 10, then add the rest.",
  "ar": "تجاوز الـ10: أكمل 10 أولًا، ثم أضف الباقي.",
  "uk": "Через 10: спочатку доповни до 10, потім додай решту.",
  "tr": "10'u geçmek: önce 10'u tamamla, sonra kalanı ekle.",
  "ro": "Peste 10: mai întâi umple până la 10, apoi adună restul.",
  "bg": "През 10: първо допълни до 10, после прибави остатъка."
 },
 "7 + 6: 7 + 3 = 10, dan 10 + 3 = 13.": {
  "en": "7 + 6: 7 + 3 = 10, then 10 + 3 = 13.",
  "ar": "7 + 6: 7 + 3 = 10، ثم 10 + 3 = 13.",
  "uk": "7 + 6: 7 + 3 = 10, потім 10 + 3 = 13.",
  "tr": "7 + 6: 7 + 3 = 10, sonra 10 + 3 = 13.",
  "ro": "7 + 6: 7 + 3 = 10, apoi 10 + 3 = 13.",
  "bg": "7 + 6: 7 + 3 = 10, после 10 + 3 = 13."
 },
 "14 − 6: 14 − 4 = 10, dan 10 − 2 = 8.": {
  "en": "14 − 6: 14 − 4 = 10, then 10 − 2 = 8.",
  "ar": "14 − 6: 14 − 4 = 10، ثم 10 − 2 = 8.",
  "uk": "14 − 6: 14 − 4 = 10, потім 10 − 2 = 8.",
  "tr": "14 − 6: 14 − 4 = 10, sonra 10 − 2 = 8.",
  "ro": "14 − 6: 14 − 4 = 10, apoi 10 − 2 = 8.",
  "bg": "14 − 6: 14 − 4 = 10, после 10 − 2 = 8."
 },
 "10 is een tussenstop. Ga eerst naar 10.": {
  "en": "10 is a stop on the way. Go to 10 first.",
  "ar": "10 محطة في الطريق. اذهب أولًا إلى 10.",
  "uk": "10 — це зупинка посередині. Спочатку дійди до 10.",
  "tr": "10 bir ara duraktır. Önce 10'a git.",
  "ro": "10 este o oprire pe drum. Mergi mai întâi la 10.",
  "bg": "10 е спирка по пътя. Първо стигни до 10."
 },
 "Maak eerst 10 vol, dan de rest.": {
  "en": "Fill up 10 first, then the rest.",
  "ar": "أكمل 10 أولًا، ثم الباقي.",
  "uk": "Спочатку доповни до 10, потім решта.",
  "tr": "Önce 10'u tamamla, sonra kalanı.",
  "ro": "Umple mai întâi până la 10, apoi restul.",
  "bg": "Първо допълни до 10, после остатъка."
 },
 "Knip het getal in twee stukjes. Eén stukje tot 10.": {
  "en": "Cut the number into two pieces. One piece up to 10.",
  "ar": "قسّم الرقم إلى قطعتين. قطعة حتى 10.",
  "uk": "Розріж число на дві частини. Одна частина — до 10.",
  "tr": "Sayıyı iki parçaya böl. Bir parça 10'a kadar.",
  "ro": "Taie numărul în două bucăți. O bucată până la 10.",
  "bg": "Раздели числото на две части. Едната част — до 10."
 },
 "Eerst naar 10.": {
  "en": "First to 10.",
  "ar": "أولًا إلى 10.",
  "uk": "Спочатку до 10.",
  "tr": "Önce 10'a.",
  "ro": "Mai întâi la 10.",
  "bg": "Първо до 10."
 },
 "Ga eerst naar 10: 11 − 1 = 10. Dan nog 3 eraf.": {
  "en": "Go to 10 first: 11 − 1 = 10. Then take away 3 more.",
  "ar": "اذهب أولًا إلى 10: 11 − 1 = 10. ثم اطرح 3 أيضًا.",
  "uk": "Спочатку дійди до 10: 11 − 1 = 10. Потім відніми ще 3.",
  "tr": "Önce 10'a git: 11 − 1 = 10. Sonra 3 daha çıkar.",
  "ro": "Mergi mai întâi la 10: 11 − 1 = 10. Apoi scade încă 3.",
  "bg": "Първо стигни до 10: 11 − 1 = 10. После извади още 3."
 },
 "Maak eerst 10: 7 + 3 = 10. Dan nog 5 erbij.": {
  "en": "Make 10 first: 7 + 3 = 10. Then add 5 more.",
  "ar": "اصنع 10 أولًا: 7 + 3 = 10. ثم أضف 5 أيضًا.",
  "uk": "Спочатку зроби 10: 7 + 3 = 10. Потім додай ще 5.",
  "tr": "Önce 10 yap: 7 + 3 = 10. Sonra 5 daha ekle.",
  "ro": "Fă mai întâi 10: 7 + 3 = 10. Apoi încă 5.",
  "bg": "Първо направи 10: 7 + 3 = 10. После още 5."
 },
 "Ga eerst naar 10: 18 − 8 = 10. Dan nog 1 eraf.": {
  "en": "Go to 10 first: 18 − 8 = 10. Then take away 1 more.",
  "ar": "اذهب أولًا إلى 10: 18 − 8 = 10. ثم اطرح 1 أيضًا.",
  "uk": "Спочатку дійди до 10: 18 − 8 = 10. Потім відніми ще 1.",
  "tr": "Önce 10'a git: 18 − 8 = 10. Sonra 1 daha çıkar.",
  "ro": "Mergi mai întâi la 10: 18 − 8 = 10. Apoi scade încă 1.",
  "bg": "Първо стигни до 10: 18 − 8 = 10. После извади още 1."
 },
 "Maak eerst 10: 6 + 4 = 10. Dan nog 4 erbij.": {
  "en": "Make 10 first: 6 + 4 = 10. Then add 4 more.",
  "ar": "اصنع 10 أولًا: 6 + 4 = 10. ثم أضف 4 أيضًا.",
  "uk": "Спочатку зроби 10: 6 + 4 = 10. Потім додай ще 4.",
  "tr": "Önce 10 yap: 6 + 4 = 10. Sonra 4 daha ekle.",
  "ro": "Fă mai întâi 10: 6 + 4 = 10. Apoi încă 4.",
  "bg": "Първо направи 10: 6 + 4 = 10. После още 4."
 },
 "Nu sommen met **woorden**.\n\nLees goed. **Komen er dingen bij?** Dan plus. **Gaan er dingen weg?** Dan min.\n\nSchrijf de som op. Reken uit.": {
  "en": "Now sums with **words**.\n\nRead carefully. **Are things added?** Then plus. **Do things go away?** Then minus.\n\nWrite the sum down. Work it out.",
  "ar": "الآن مسائل **بالكلمات**.\n\nاقرأ جيدًا. **هل تأتي أشياء أكثر؟** إذن زائد («plus»). **هل تذهب أشياء؟** إذن ناقص («min»).\n\nاكتب المسألة. احسبها.",
  "uk": "Тепер задачі зі **словами**.\n\nЧитай уважно. **Щось додається?** Тоді плюс. **Щось зникає?** Тоді мінус.\n\nЗапиши приклад. Порахуй.",
  "tr": "Şimdi **kelimelerle** işlemler.\n\nİyi oku. **Bir şeyler ekleniyor mu?** O zaman artı. **Bir şeyler gidiyor mu?** O zaman eksi.\n\nİşlemi yaz. Hesapla.",
  "ro": "Acum probleme cu **cuvinte**.\n\nCitește cu atenție. **Vin lucruri în plus?** Atunci plus. **Pleacă lucruri?** Atunci minus.\n\nScrie exercițiul. Calculează.",
  "bg": "Сега задачи с **думи**.\n\nЧети внимателно. **Идват ли неща в повече?** Тогава плюс. **Отиват ли си неща?** Тогава минус.\n\nЗапиши задачата. Сметни."
 },
 "Lees de som nog een keer. Is het erbij of eraf?": {
  "en": "Read the sum one more time. Is it adding or taking away?",
  "ar": "اقرأ المسألة مرة أخرى. هل هي إضافة («erbij») أم طرح («eraf»)؟",
  "uk": "Прочитай задачу ще раз. Треба додати чи відняти?",
  "tr": "İşlemi bir kez daha oku. Ekleme mi, çıkarma mı?",
  "ro": "Citește problema încă o dată. Este adunare sau scădere?",
  "bg": "Прочети задачата още веднъж. Прибавяне ли е или изваждане?"
 },
 "Erbij of eraf?": {
  "en": "Adding or taking away?",
  "ar": "إضافة («erbij») أم طرح («eraf»)؟",
  "uk": "Додати чи відняти?",
  "tr": "Ekleme mi, çıkarma mı?",
  "ro": "Adunare sau scădere?",
  "bg": "Прибавяне или изваждане?"
 },
 "Lees de som. **Komen er kinderen bij?** Dan is het **plus**. **Gaan er weg?** Dan is het **min**.": {
  "en": "Read the sum. **Do more children come?** Then it is **plus**. **Do some go away?** Then it is **minus**.",
  "ar": "اقرأ المسألة. **هل يأتي أطفال أكثر؟** إذن هي **زائد** («plus»). **هل يذهب بعضهم؟** إذن هي **ناقص** («min»).",
  "uk": "Прочитай задачу. **Діти приходять?** Тоді це **плюс**. **Діти йдуть?** Тоді це **мінус**.",
  "tr": "İşlemi oku. **Çocuklar geliyor mu?** O zaman **artı**. **Gidiyorlar mı?** O zaman **eksi**.",
  "ro": "Citește problema. **Vin copii în plus?** Atunci este **plus**. **Pleacă unii?** Atunci este **minus**.",
  "bg": "Прочети задачата. **Идват ли още деца?** Тогава е **плюс**. **Отиват ли си някои?** Тогава е **минус**."
 },
 "Schrijf de som op": {
  "en": "Write the sum down",
  "ar": "اكتب المسألة",
  "uk": "Запиши приклад",
  "tr": "İşlemi yaz",
  "ro": "Scrie exercițiul",
  "bg": "Запиши задачата"
 },
 "6 kinderen, 3 komen erbij: **6 + 3**. Dat is 9.": {
  "en": "6 children, 3 more come: **6 + 3**. That is 9.",
  "ar": "6 أطفال، ويأتي 3 آخرون: **6 + 3**. هذا 9.",
  "uk": "6 дітей, приходять ще 3: **6 + 3**. Це 9.",
  "tr": "6 çocuk, 3 tane daha geliyor: **6 + 3**. Bu 9 eder.",
  "ro": "6 copii, mai vin 3: **6 + 3**. Asta este 9.",
  "bg": "6 деца, идват още 3: **6 + 3**. Това е 9."
 },
 "Woorden die helpen": {
  "en": "Words that help",
  "ar": "كلمات تساعد",
  "uk": "Слова, які допомагають",
  "tr": "Yardım eden kelimeler",
  "ro": "Cuvinte care ajută",
  "bg": "Думи, които помагат"
 },
 "**Erbij, komen, samen** = plus. **Weg, eten, geven** = min.": {
  "en": "**Erbij, komen, samen** (more, come, together) = plus. **Weg, eten, geven** (away, eat, give) = minus.",
  "ar": "**Erbij, komen, samen** (= إضافة، يأتون، معًا) = زائد. **Weg, eten, geven** (= يذهب، يأكل، يعطي) = ناقص.",
  "uk": "**Erbij, komen, samen** (= ще, приходять, разом) = плюс. **Weg, eten, geven** (= геть, їсти, давати) = мінус.",
  "tr": "**Erbij, komen, samen** (= eklenmek, gelmek, birlikte) = artı. **Weg, eten, geven** (= gitmek, yemek, vermek) = eksi.",
  "ro": "**Erbij, komen, samen** (= în plus, vin, împreună) = plus. **Weg, eten, geven** (= pleacă, mănâncă, dă) = minus.",
  "bg": "**Erbij, komen, samen** (= в повече, идват, заедно) = плюс. **Weg, eten, geven** (= няма го, ядат, дават) = минус."
 },
 "samen": {
  "en": "together",
  "ar": "معًا",
  "uk": "разом",
  "tr": "birlikte",
  "ro": "împreună",
  "bg": "заедно"
 },
 "Alles bij elkaar. Plus.": {
  "en": "All together. Plus.",
  "ar": "الكل مع بعض. زائد.",
  "uk": "Усе разом. Плюс.",
  "tr": "Hepsi bir arada. Artı.",
  "ro": "Toate la un loc. Plus.",
  "bg": "Всичко заедно. Плюс."
 },
 "weg": {
  "en": "away",
  "ar": "ذهب",
  "uk": "геть",
  "tr": "gitti",
  "ro": "plecat",
  "bg": "няма го"
 },
 "Niet meer. Min.": {
  "en": "Not there anymore. Minus.",
  "ar": "لم يعد موجودًا. ناقص.",
  "uk": "Більше немає. Мінус.",
  "tr": "Artık yok. Eksi.",
  "ro": "Nu mai este. Minus.",
  "bg": "Вече го няма. Минус."
 },
 "Zoek het woord dat zegt: plus of min.": {
  "en": "Find the word that says: plus or minus.",
  "ar": "ابحث عن الكلمة التي تقول: زائد أو ناقص.",
  "uk": "Знайди слово, яке каже: плюс чи мінус.",
  "tr": "Artı mı eksi mi diyen kelimeyi bul.",
  "ro": "Caută cuvântul care spune: plus sau minus.",
  "bg": "Намери думата, която казва: плюс или минус."
 },
 "3 komen erbij → +3.": {
  "en": "3 more come → +3.",
  "ar": "يأتي 3 آخرون («erbij») → +3.",
  "uk": "3 приходять («erbij») → +3.",
  "tr": "3 tane geliyor → +3.",
  "ro": "Mai vin 3 („erbij”) → +3.",
  "bg": "Идват още 3 („erbij“) → +3."
 },
 "4 geef je weg → −4.": {
  "en": "You give away 4 → −4.",
  "ar": "تعطي 4 («weg») → −4.",
  "uk": "4 ти віддаєш («weg») → −4.",
  "tr": "4 tane veriyorsun → −4.",
  "ro": "Dai 4 („weg”) → −4.",
  "bg": "Даваш 4 („weg“) → −4."
 },
 "Onderstreep het woord: erbij of weg.": {
  "en": "Underline the word: \"erbij\" (more) or \"weg\" (away).",
  "ar": "ضع خطًا تحت الكلمة: «erbij» أو «weg».",
  "uk": "Підкресли слово: «erbij» (= ще) чи «weg» (= геть).",
  "tr": "Kelimenin altını çiz: \"erbij\" (ekle) mi, \"weg\" (gitti) mi.",
  "ro": "Subliniază cuvântul: „erbij” (= în plus) sau „weg” (= plecat).",
  "bg": "Подчертай думата: „erbij“ (= в повече) или „weg“ (= няма го)."
 },
 "Kijk of het plus of min is.": {
  "en": "Check if it is plus or minus.",
  "ar": "انظر هل هي زائد أم ناقص.",
  "uk": "Подивися, це плюс чи мінус.",
  "tr": "Artı mı eksi mi, bak.",
  "ro": "Uită-te dacă este plus sau minus.",
  "bg": "Виж дали е плюс или минус."
 },
 "Komen erbij = plus. Gaan weg = min.": {
  "en": "More come = plus. Go away = minus.",
  "ar": "يأتون («komen erbij») = زائد. يذهبون («gaan weg») = ناقص.",
  "uk": "Приходять = плюс. Ідуть геть = мінус.",
  "tr": "Geliyorlar = artı. Gidiyorlar = eksi.",
  "ro": "Vin în plus = plus. Pleacă = minus.",
  "bg": "Идват = плюс. Отиват си = минус."
 },
 "Erbij = plus.": {
  "en": "More = plus.",
  "ar": "«erbij» = زائد.",
  "uk": "Ще («erbij») = плюс.",
  "tr": "Ekle = artı.",
  "ro": "În plus („erbij”) = plus.",
  "bg": "В повече („erbij“) = плюс."
 },
 "Rekenen tot 100 (nieuwkomers, groep 4)": {
  "en": "Maths up to 100 (newcomers, year 2)",
  "ar": "الحساب حتى 100 (للقادمين الجدد، الصف 4)",
  "uk": "Лічба до 100 (новенькі, група 4)",
  "tr": "100'e kadar matematik (yeni gelenler, 4. sınıf)",
  "ro": "Matematică până la 100 (nou-veniți, groep 4)",
  "bg": "Смятане до 100 (новодошли, група 4)"
 },
 "Tientallen en eenheden, erbij en eraf in sprongen, over het tiental heen, en sommen met geld. Korte zinnen, elke som met uitleg. Ook voor kinderen die nog Nederlands leren. ~10 min.": {
  "en": "Tens and ones, adding and taking away in jumps, going past the ten, and sums with money. Short sentences, every sum explained. Also for children who are still learning Dutch. ~10 min.",
  "ar": "العشرات والآحاد، الجمع والطرح بالقفزات، تجاوز العشرة، ومسائل بالنقود. جمل قصيرة، وكل مسألة مع شرح. أيضًا للأطفال الذين ما زالوا يتعلمون الهولندية. ~10 دقائق.",
  "uk": "Десятки й одиниці, додавання і віднімання стрибками, перехід через десяток і задачі з грошима. Короткі речення, кожен приклад з поясненням. Також для дітей, які ще вчать нідерландську. ~10 хв.",
  "tr": "Onluklar ve birlikler, atlamalarla ekleme ve çıkarma, onluğu geçmek ve parayla işlemler. Kısa cümleler, her işlem açıklamalı. Felemenkçe öğrenen çocuklar için de. ~10 dk.",
  "ro": "Zeci și unități, adunare și scădere în sărituri, trecut peste zece și probleme cu bani. Propoziții scurte, fiecare exercițiu cu explicație. Și pentru copiii care încă învață neerlandeza. ~10 min.",
  "bg": "Десетици и единици, събиране и изваждане със скокове, преминаване през десетицата и задачи с пари. Кратки изречения, всяка задача с обяснение. Също за деца, които още учат нидерландски. ~10 мин."
 },
 "Tientallen en eenheden": {
  "en": "Tens and ones",
  "ar": "العشرات والآحاد",
  "uk": "Десятки й одиниці",
  "tr": "Onluklar ve birlikler",
  "ro": "Zeci și unități",
  "bg": "Десетици и единици"
 },
 "Erbij tot 100": {
  "en": "Adding up to 100",
  "ar": "الجمع حتى 100",
  "uk": "Додавання до 100",
  "tr": "100'e kadar ekleme",
  "ro": "Adunare până la 100",
  "bg": "Събиране до 100"
 },
 "Eraf tot 100": {
  "en": "Taking away up to 100",
  "ar": "الطرح حتى 100",
  "uk": "Віднімання до 100",
  "tr": "100'e kadar çıkarma",
  "ro": "Scădere până la 100",
  "bg": "Изваждане до 100"
 },
 "Over het tiental heen": {
  "en": "Going past the ten",
  "ar": "تجاوز العشرة",
  "uk": "Через десяток",
  "tr": "Onluğu geçmek",
  "ro": "Peste zece",
  "bg": "През десетицата"
 },
 "Sommen uit de winkel": {
  "en": "Sums from the shop",
  "ar": "مسائل من المتجر",
  "uk": "Задачі з магазину",
  "tr": "Dükkândan problemler",
  "ro": "Probleme de la magazin",
  "bg": "Задачи от магазина"
 },
 "Een getal tot 100 heeft **twee cijfers**.\n\nHet eerste cijfer zijn de **tientallen** (groepjes van 10). Het tweede cijfer zijn de **eenheden** (losse).\n\n**34** = 3 tientallen en 4 eenheden = 30 + 4.": {
  "en": "A number up to 100 has **two digits**.\n\nThe first digit is the **tens** (groups of 10). The second digit is the **ones** (single ones).\n\n**34** = 3 tens and 4 ones = 30 + 4.",
  "ar": "العدد حتى 100 له **رقمان**.\n\nالرقم الأول هو **العشرات** (مجموعات من 10). الرقم الثاني هو **الآحاد** (المفردة).\n\n**34** = 3 عشرات و4 آحاد = 30 + 4.",
  "uk": "Число до 100 має **дві цифри**.\n\nПерша цифра — це **десятки** (групки по 10). Друга цифра — це **одиниці** (окремі).\n\n**34** = 3 десятки і 4 одиниці = 30 + 4.",
  "tr": "100'e kadar bir sayının **iki rakamı** var.\n\nİlk rakam **onluklardır** (10'luk gruplar). İkinci rakam **birliklerdir** (tek tek).\n\n**34** = 3 onluk ve 4 birlik = 30 + 4.",
  "ro": "Un număr până la 100 are **două cifre**.\n\nPrima cifră sunt **zecile** (grupe de 10). A doua cifră sunt **unitățile** (cele singure).\n\n**34** = 3 zeci și 4 unități = 30 + 4.",
  "bg": "Едно число до 100 има **две цифри**.\n\nПървата цифра са **десетиците** (групи по 10). Втората цифра са **единиците** (отделните).\n\n**34** = 3 десетици и 4 единици = 30 + 4."
 },
 "3 tientallen = 30. Dan 3 erbij.": {
  "en": "3 tens = 30. Then add 3.",
  "ar": "3 عشرات = 30. ثم أضف 3.",
  "uk": "3 десятки = 30. Потім додай 3.",
  "tr": "3 onluk = 30. Sonra 3 ekle.",
  "ro": "3 zeci = 30. Apoi încă 3.",
  "bg": "3 десетици = 30. После още 3."
 },
 "Tientallen zijn groepjes van 10": {
  "en": "Tens are groups of 10",
  "ar": "العشرات مجموعات من 10",
  "uk": "Десятки — це групки по 10",
  "tr": "Onluklar 10'luk gruplardır",
  "ro": "Zecile sunt grupe de 10",
  "bg": "Десетиците са групи по 10"
 },
 "**Een tiental** is 10. **3 tientallen** is 10, 20, 30. Dus 30.": {
  "en": "**One ten** is 10. **3 tens** is 10, 20, 30. So 30.",
  "ar": "**عشرة واحدة** («een tiental») هي 10. **3 عشرات** هي 10, 20, 30. إذن 30.",
  "uk": "**Один десяток** — це 10. **3 десятки** — це 10, 20, 30. Отже, 30.",
  "tr": "**Bir onluk** 10'dur. **3 onluk** 10, 20, 30'dur. Yani 30.",
  "ro": "**O zece** este 10. **3 zeci** sunt 10, 20, 30. Deci 30.",
  "bg": "**Една десетица** е 10. **3 десетици** са 10, 20, 30. Значи 30."
 },
 "Eenheden zijn losse": {
  "en": "Ones are single",
  "ar": "الآحاد مفردة",
  "uk": "Одиниці — окремі",
  "tr": "Birlikler tek tektir",
  "ro": "Unitățile sunt cele singure",
  "bg": "Единиците са отделните"
 },
 "**Eenheden** zijn losse. 3 tientallen en 4 eenheden: 30 en 4 = **34**.": {
  "en": "**Ones** are single. 3 tens and 4 ones: 30 and 4 = **34**.",
  "ar": "**الآحاد** («eenheden») مفردة. 3 عشرات و4 آحاد: 30 و4 = **34**.",
  "uk": "**Одиниці** — окремі. 3 десятки і 4 одиниці: 30 і 4 = **34**.",
  "tr": "**Birlikler** tek tektir. 3 onluk ve 4 birlik: 30 ve 4 = **34**.",
  "ro": "**Unitățile** sunt cele singure. 3 zeci și 4 unități: 30 și 4 = **34**.",
  "bg": "**Единиците** са отделните. 3 десетици и 4 единици: 30 и 4 = **34**."
 },
 "Zo schrijf je het": {
  "en": "This is how you write it",
  "ar": "هكذا تكتبه",
  "uk": "Так це записують",
  "tr": "Böyle yazılır",
  "ro": "Așa se scrie",
  "bg": "Така се записва"
 },
 "Het eerste cijfer = tientallen. Het tweede cijfer = eenheden. **34** = 3 tientallen, 4 eenheden.": {
  "en": "The first digit = tens. The second digit = ones. **34** = 3 tens, 4 ones.",
  "ar": "الرقم الأول = العشرات. الرقم الثاني = الآحاد. **34** = 3 عشرات، 4 آحاد.",
  "uk": "Перша цифра = десятки. Друга цифра = одиниці. **34** = 3 десятки, 4 одиниці.",
  "tr": "İlk rakam = onluklar. İkinci rakam = birlikler. **34** = 3 onluk, 4 birlik.",
  "ro": "Prima cifră = zeci. A doua cifră = unități. **34** = 3 zeci, 4 unități.",
  "bg": "Първата цифра = десетици. Втората цифра = единици. **34** = 3 десетици, 4 единици."
 },
 "tiental": {
  "en": "ten",
  "ar": "عشرة",
  "uk": "десяток",
  "tr": "onluk",
  "ro": "zece",
  "bg": "десетица"
 },
 "Een groepje van 10.": {
  "en": "A group of 10.",
  "ar": "مجموعة من 10.",
  "uk": "Групка з 10.",
  "tr": "10'luk bir grup.",
  "ro": "O grupă de 10.",
  "bg": "Група от 10."
 },
 "eenheid": {
  "en": "one",
  "ar": "واحد",
  "uk": "одиниця",
  "tr": "birlik",
  "ro": "unitate",
  "bg": "единица"
 },
 "Eén losse.": {
  "en": "One single.",
  "ar": "واحد مفرد.",
  "uk": "Одна окрема.",
  "tr": "Tek bir tane.",
  "ro": "Una singură.",
  "bg": "Една отделна."
 },
 "Getal = tientallen en eenheden.": {
  "en": "Number = tens and ones.",
  "ar": "العدد = عشرات وآحاد.",
  "uk": "Число = десятки й одиниці.",
  "tr": "Sayı = onluklar ve birlikler.",
  "ro": "Număr = zeci și unități.",
  "bg": "Число = десетици и единици."
 },
 "5 tientallen, 2 eenheden = 52.": {
  "en": "5 tens, 2 ones = 52.",
  "ar": "5 عشرات، 2 آحاد = 52.",
  "uk": "5 десятків, 2 одиниці = 52.",
  "tr": "5 onluk, 2 birlik = 52.",
  "ro": "5 zeci, 2 unități = 52.",
  "bg": "5 десетици, 2 единици = 52."
 },
 "70 = 7 tientallen, 0 eenheden.": {
  "en": "70 = 7 tens, 0 ones.",
  "ar": "70 = 7 عشرات، 0 آحاد.",
  "uk": "70 = 7 десятків, 0 одиниць.",
  "tr": "70 = 7 onluk, 0 birlik.",
  "ro": "70 = 7 zeci, 0 unități.",
  "bg": "70 = 7 десетици, 0 единици."
 },
 "Tel de tientallen: 10, 20, 30… Dan de eenheden erbij.": {
  "en": "Count the tens: 10, 20, 30… Then add the ones.",
  "ar": "عُدّ العشرات: 10, 20, 30… ثم أضف الآحاد.",
  "uk": "Лічи десятки: 10, 20, 30… Потім додай одиниці.",
  "tr": "Onlukları say: 10, 20, 30… Sonra birlikleri ekle.",
  "ro": "Numără zecile: 10, 20, 30… Apoi adună unitățile.",
  "bg": "Брой десетиците: 10, 20, 30… После прибави единиците."
 },
 "Tientallen × 10, dan eenheden erbij.": {
  "en": "Tens × 10, then add the ones.",
  "ar": "العشرات × 10، ثم أضف الآحاد.",
  "uk": "Десятки × 10, потім додай одиниці.",
  "tr": "Onluklar × 10, sonra birlikleri ekle.",
  "ro": "Zeci × 10, apoi adună unitățile.",
  "bg": "Десетици × 10, после прибави единиците."
 },
 "3 tientallen = 30. Dan 4 erbij = 34.": {
  "en": "3 tens = 30. Then add 4 = 34.",
  "ar": "3 عشرات = 30. ثم أضف 4 = 34.",
  "uk": "3 десятки = 30. Потім додай 4 = 34.",
  "tr": "3 onluk = 30. Sonra 4 ekle = 34.",
  "ro": "3 zeci = 30. Apoi adună 4 = 34.",
  "bg": "3 десетици = 30. После прибави 4 = 34."
 },
 "Eerst 30, dan 4.": {
  "en": "First 30, then 4.",
  "ar": "أولًا 30، ثم 4.",
  "uk": "Спочатку 30, потім 4.",
  "tr": "Önce 30, sonra 4.",
  "ro": "Mai întâi 30, apoi 4.",
  "bg": "Първо 30, после 4."
 },
 "Tien erbij: 40 + 10.": {
  "en": "Add ten: 40 + 10.",
  "ar": "أضف عشرة: 40 + 10.",
  "uk": "Додай десять: 40 + 10.",
  "tr": "On ekle: 40 + 10.",
  "ro": "Adună zece: 40 + 10.",
  "bg": "Прибави десет: 40 + 10."
 },
 "7 tientallen = 70. Dan 6 erbij.": {
  "en": "7 tens = 70. Then add 6.",
  "ar": "7 عشرات = 70. ثم أضف 6.",
  "uk": "7 десятків = 70. Потім додай 6.",
  "tr": "7 onluk = 70. Sonra 6 ekle.",
  "ro": "7 zeci = 70. Apoi adună 6.",
  "bg": "7 десетици = 70. После прибави 6."
 },
 "Tien erbij: 60 + 10.": {
  "en": "Add ten: 60 + 10.",
  "ar": "أضف عشرة: 60 + 10.",
  "uk": "Додай десять: 60 + 10.",
  "tr": "On ekle: 60 + 10.",
  "ro": "Adună zece: 60 + 10.",
  "bg": "Прибави десет: 60 + 10."
 },
 "8 tientallen = 80. Dan 5 erbij.": {
  "en": "8 tens = 80. Then add 5.",
  "ar": "8 عشرات = 80. ثم أضف 5.",
  "uk": "8 десятків = 80. Потім додай 5.",
  "tr": "8 onluk = 80. Sonra 5 ekle.",
  "ro": "8 zeci = 80. Apoi adună 5.",
  "bg": "8 десетици = 80. После прибави 5."
 },
 "Erbij doen we in **sprongen**.\n\nEerst sprongen van **10**: 34 + 20 = 54.\nDan sprongen van **1**: 54 + 3 = 57.": {
  "en": "We add in **jumps**.\n\nFirst jumps of **10**: 34 + 20 = 54.\nThen jumps of **1**: 54 + 3 = 57.",
  "ar": "نجمع **بالقفزات**.\n\nأولًا قفزات من **10**: 34 + 20 = 54.\nثم قفزات من **1**: 54 + 3 = 57.",
  "uk": "Додаємо **стрибками**.\n\nСпочатку стрибки по **10**: 34 + 20 = 54.\nПотім стрибки по **1**: 54 + 3 = 57.",
  "tr": "Eklemeyi **atlamalarla** yaparız.\n\nÖnce **10**'luk atlamalar: 34 + 20 = 54.\nSonra **1**'lik atlamalar: 54 + 3 = 57.",
  "ro": "Adunăm în **sărituri**.\n\nMai întâi sărituri de **10**: 34 + 20 = 54.\nApoi sărituri de **1**: 54 + 3 = 57.",
  "bg": "Събираме със **скокове**.\n\nПърво скокове по **10**: 34 + 20 = 54.\nПосле скокове по **1**: 54 + 3 = 57."
 },
 "Eerst de tientallen, dan de eenheden.": {
  "en": "First the tens, then the ones.",
  "ar": "أولًا العشرات، ثم الآحاد.",
  "uk": "Спочатку десятки, потім одиниці.",
  "tr": "Önce onluklar, sonra birlikler.",
  "ro": "Mai întâi zecile, apoi unitățile.",
  "bg": "Първо десетиците, после единиците."
 },
 "Eerst de tientallen": {
  "en": "First the tens",
  "ar": "أولًا العشرات",
  "uk": "Спочатку десятки",
  "tr": "Önce onluklar",
  "ro": "Mai întâi zecile",
  "bg": "Първо десетиците"
 },
 "34 + 20. Tel eerst de **tientallen**: 34 + 20 = **54**.": {
  "en": "34 + 20. First count the **tens**: 34 + 20 = **54**.",
  "ar": "34 + 20. عُدّ أولًا **العشرات**: 34 + 20 = **54**.",
  "uk": "34 + 20. Спочатку додай **десятки**: 34 + 20 = **54**.",
  "tr": "34 + 20. Önce **onlukları** say: 34 + 20 = **54**.",
  "ro": "34 + 20. Numără mai întâi **zecile**: 34 + 20 = **54**.",
  "bg": "34 + 20. Първо брой **десетиците**: 34 + 20 = **54**."
 },
 "Dan de eenheden": {
  "en": "Then the ones",
  "ar": "ثم الآحاد",
  "uk": "Потім одиниці",
  "tr": "Sonra birlikler",
  "ro": "Apoi unitățile",
  "bg": "После единиците"
 },
 "34 + 5. Tel de **eenheden** erbij: 34 + 5 = **39**. De 3 blijft staan.": {
  "en": "34 + 5. Add the **ones**: 34 + 5 = **39**. The 3 stays the same.",
  "ar": "34 + 5. أضف **الآحاد**: 34 + 5 = **39**. الـ3 تبقى كما هي.",
  "uk": "34 + 5. Додай **одиниці**: 34 + 5 = **39**. 3 не змінюється.",
  "tr": "34 + 5. **Birlikleri** ekle: 34 + 5 = **39**. 3 aynı kalır.",
  "ro": "34 + 5. Adună **unitățile**: 34 + 5 = **39**. Cifra 3 rămâne la fel.",
  "bg": "34 + 5. Прибави **единиците**: 34 + 5 = **39**. Числото 3 си остава."
 },
 "Met sprongen": {
  "en": "With jumps",
  "ar": "بالقفزات",
  "uk": "Стрибками",
  "tr": "Atlamalarla",
  "ro": "Cu sărituri",
  "bg": "Със скокове"
 },
 "Spring met 10: 34, 44, 54. Spring met 1: 54, 55, 56.": {
  "en": "Jump by 10: 34, 44, 54. Jump by 1: 54, 55, 56.",
  "ar": "اقفز 10: 34, 44, 54. اقفز 1: 54, 55, 56.",
  "uk": "Стрибай по 10: 34, 44, 54. Стрибай по 1: 54, 55, 56.",
  "tr": "10'ar atla: 34, 44, 54. 1'er atla: 54, 55, 56.",
  "ro": "Sari cu 10: 34, 44, 54. Sari cu 1: 54, 55, 56.",
  "bg": "Скачай по 10: 34, 44, 54. Скачай по 1: 54, 55, 56."
 },
 "sprong van 10": {
  "en": "jump of 10",
  "ar": "قفزة من 10",
  "uk": "стрибок на 10",
  "tr": "10'luk atlama",
  "ro": "săritură de 10",
  "bg": "скок с 10"
 },
 "Tien erbij in één keer.": {
  "en": "Add ten in one go.",
  "ar": "إضافة عشرة مرة واحدة.",
  "uk": "Десять більше за один раз.",
  "tr": "Bir kerede on ekle.",
  "ro": "Zece în plus dintr-o dată.",
  "bg": "Десет в повече наведнъж."
 },
 "Tientallen erbij: het eerste cijfer wordt groter. Eenheden erbij: het tweede cijfer.": {
  "en": "Adding tens: the first digit gets bigger. Adding ones: the second digit.",
  "ar": "إضافة العشرات: الرقم الأول يكبر. إضافة الآحاد: الرقم الثاني يكبر.",
  "uk": "Додаєш десятки: перша цифра стає більшою. Додаєш одиниці: друга цифра.",
  "tr": "Onluk eklersen: ilk rakam büyür. Birlik eklersen: ikinci rakam.",
  "ro": "Aduni zeci: prima cifră devine mai mare. Aduni unități: a doua cifră.",
  "bg": "Прибавяш десетици: първата цифра става по-голяма. Прибавяш единици: втората цифра."
 },
 "Grote sprongen eerst (10), dan kleine (1).": {
  "en": "Big jumps first (10), then small ones (1).",
  "ar": "القفزات الكبيرة أولًا (10)، ثم الصغيرة (1).",
  "uk": "Спочатку великі стрибки (10), потім малі (1).",
  "tr": "Önce büyük atlamalar (10), sonra küçük (1).",
  "ro": "Mai întâi săriturile mari (10), apoi cele mici (1).",
  "bg": "Първо големите скокове (10), после малките (1)."
 },
 "Eerst tientallen, dan eenheden.": {
  "en": "First tens, then ones.",
  "ar": "أولًا العشرات، ثم الآحاد.",
  "uk": "Спочатку десятки, потім одиниці.",
  "tr": "Önce onluklar, sonra birlikler.",
  "ro": "Mai întâi zeci, apoi unități.",
  "bg": "Първо десетици, после единици."
 },
 "Spring met 10, dan met 1.": {
  "en": "Jump by 10, then by 1.",
  "ar": "اقفز 10، ثم 1.",
  "uk": "Стрибай по 10, потім по 1.",
  "tr": "10'ar atla, sonra 1'er.",
  "ro": "Sari cu 10, apoi cu 1.",
  "bg": "Скачай по 10, после по 1."
 },
 "Eerst 10 erbij.": {
  "en": "First add 10.",
  "ar": "أضف 10 أولًا.",
  "uk": "Спочатку додай 10.",
  "tr": "Önce 10 ekle.",
  "ro": "Mai întâi adună 10.",
  "bg": "Първо прибави 10."
 },
 "Eraf is **terug springen**.\n\nEerst met **10**: 56 − 20 = 36.\nDan met **1**: 36 − 4 = 32.\n\nHet getal wordt **kleiner**.": {
  "en": "Taking away is **jumping back**.\n\nFirst by **10**: 56 − 20 = 36.\nThen by **1**: 36 − 4 = 32.\n\nThe number gets **smaller**.",
  "ar": "الطرح هو **القفز إلى الوراء**.\n\nأولًا بـ **10**: 56 − 20 = 36.\nثم بـ **1**: 36 − 4 = 32.\n\nالعدد يصبح **أصغر**.",
  "uk": "Віднімати — це **стрибати назад**.\n\nСпочатку по **10**: 56 − 20 = 36.\nПотім по **1**: 36 − 4 = 32.\n\nЧисло стає **меншим**.",
  "tr": "Çıkarmak **geri atlamaktır**.\n\nÖnce **10** ile: 56 − 20 = 36.\nSonra **1** ile: 36 − 4 = 32.\n\nSayı **küçülür**.",
  "ro": "A scădea înseamnă **a sări înapoi**.\n\nMai întâi cu **10**: 56 − 20 = 36.\nApoi cu **1**: 36 − 4 = 32.\n\nNumărul devine **mai mic**.",
  "bg": "Изваждането е **скачане назад**.\n\nПърво по **10**: 56 − 20 = 36.\nПосле по **1**: 36 − 4 = 32.\n\nЧислото става **по-малко**."
 },
 "Eerst de tientallen eraf, dan de eenheden.": {
  "en": "First take away the tens, then the ones.",
  "ar": "اطرح العشرات أولًا، ثم الآحاد.",
  "uk": "Спочатку відніми десятки, потім одиниці.",
  "tr": "Önce onlukları çıkar, sonra birlikleri.",
  "ro": "Mai întâi scade zecile, apoi unitățile.",
  "bg": "Първо извади десетиците, после единиците."
 },
 "Tientallen eraf": {
  "en": "Taking away tens",
  "ar": "طرح العشرات",
  "uk": "Відняти десятки",
  "tr": "Onlukları çıkar",
  "ro": "Scădem zeci",
  "bg": "Изваждане на десетици"
 },
 "56 − 20. Spring **terug met 10**: 56, 46, 36. Antwoord **36**.": {
  "en": "56 − 20. Jump **back by 10**: 56, 46, 36. Answer **36**.",
  "ar": "56 − 20. اقفز **10 إلى الوراء**: 56, 46, 36. الجواب **36**.",
  "uk": "56 − 20. Стрибай **назад по 10**: 56, 46, 36. Відповідь **36**.",
  "tr": "56 − 20. **10'ar geri** atla: 56, 46, 36. Cevap **36**.",
  "ro": "56 − 20. Sari **înapoi cu 10**: 56, 46, 36. Răspuns **36**.",
  "bg": "56 − 20. Скачай **назад по 10**: 56, 46, 36. Отговор **36**."
 },
 "Eenheden eraf": {
  "en": "Taking away ones",
  "ar": "طرح الآحاد",
  "uk": "Відняти одиниці",
  "tr": "Birlikleri çıkar",
  "ro": "Scădem unități",
  "bg": "Изваждане на единици"
 },
 "56 − 4. Tel **terug met 1**: 55, 54, 53, 52. Antwoord **52**.": {
  "en": "56 − 4. Count **back by 1**: 55, 54, 53, 52. Answer **52**.",
  "ar": "56 − 4. عُدّ **1 إلى الوراء**: 55, 54, 53, 52. الجواب **52**.",
  "uk": "56 − 4. Лічи **назад по 1**: 55, 54, 53, 52. Відповідь **52**.",
  "tr": "56 − 4. **1'er geri** say: 55, 54, 53, 52. Cevap **52**.",
  "ro": "56 − 4. Numără **înapoi cu 1**: 55, 54, 53, 52. Răspuns **52**.",
  "bg": "56 − 4. Брой **назад по 1**: 55, 54, 53, 52. Отговор **52**."
 },
 "Het wordt kleiner": {
  "en": "It gets smaller",
  "ar": "يصبح أصغر",
  "uk": "Стає менше",
  "tr": "Küçülür",
  "ro": "Devine mai mic",
  "bg": "Става по-малко"
 },
 "Bij eraf wordt het getal **kleiner**. Groter? Dan klopt het niet.": {
  "en": "When you take away, the number gets **smaller**. Bigger? Then it is wrong.",
  "ar": "عند الطرح يصبح العدد **أصغر**. أكبر؟ إذن هو غير صحيح.",
  "uk": "Коли віднімаєш, число стає **меншим**. Більше? Тоді це неправильно.",
  "tr": "Çıkarınca sayı **küçülür**. Büyüdü mü? O zaman doğru değil.",
  "ro": "Când scazi, numărul devine **mai mic**. Mai mare? Atunci nu este corect.",
  "bg": "При изваждане числото става **по-малко**. По-голямо? Тогава не е вярно."
 },
 "terug springen": {
  "en": "jumping back",
  "ar": "القفز إلى الوراء",
  "uk": "стрибати назад",
  "tr": "geri atlamak",
  "ro": "a sări înapoi",
  "bg": "скачане назад"
 },
 "Tien eraf in één keer.": {
  "en": "Take away ten in one go.",
  "ar": "طرح عشرة مرة واحدة.",
  "uk": "Десять менше за один раз.",
  "tr": "Bir kerede on çıkar.",
  "ro": "Zece mai puțin dintr-o dată.",
  "bg": "Десет по-малко наведнъж."
 },
 "Eraf = terug springen. Eerst met 10, dan met 1.": {
  "en": "Taking away = jumping back. First by 10, then by 1.",
  "ar": "الطرح = القفز إلى الوراء. أولًا بـ 10، ثم بـ 1.",
  "uk": "Відняти = стрибати назад. Спочатку по 10, потім по 1.",
  "tr": "Çıkarmak = geri atlamak. Önce 10 ile, sonra 1 ile.",
  "ro": "A scădea = a sări înapoi. Mai întâi cu 10, apoi cu 1.",
  "bg": "Изваждане = скачане назад. Първо по 10, после по 1."
 },
 "Spring terug op de getallenlijn.": {
  "en": "Jump back on the number line.",
  "ar": "اقفز إلى الوراء على خط الأعداد.",
  "uk": "Стрибай назад на числовій прямій.",
  "tr": "Sayı doğrusunda geri atla.",
  "ro": "Sari înapoi pe linia numerelor.",
  "bg": "Скачай назад по числовата линия."
 },
 "Eerst tientallen eraf, dan eenheden.": {
  "en": "First take away tens, then ones.",
  "ar": "اطرح العشرات أولًا، ثم الآحاد.",
  "uk": "Спочатку відніми десятки, потім одиниці.",
  "tr": "Önce onlukları çıkar, sonra birlikleri.",
  "ro": "Mai întâi scade zecile, apoi unitățile.",
  "bg": "Първо извади десетици, после единици."
 },
 "Spring terug met 10, dan met 1.": {
  "en": "Jump back by 10, then by 1.",
  "ar": "اقفز إلى الوراء بـ 10، ثم بـ 1.",
  "uk": "Стрибай назад по 10, потім по 1.",
  "tr": "10'ar geri atla, sonra 1'er.",
  "ro": "Sari înapoi cu 10, apoi cu 1.",
  "bg": "Скачай назад по 10, после по 1."
 },
 "Eerst 10 eraf.": {
  "en": "First take away 10.",
  "ar": "اطرح 10 أولًا.",
  "uk": "Спочатку відніми 10.",
  "tr": "Önce 10 çıkar.",
  "ro": "Mai întâi scade 10.",
  "bg": "Първо извади 10."
 },
 "38 + 5 gaat over de 40 heen. Dat doen we in **twee stapjes**.\n\nStap 1: maak het tiental vol. 38 + 2 = 40.\nStap 2: de rest erbij. 40 + 3 = **43**.\n\nBij eraf: ga eerst naar het ronde getal, dan de rest eraf.": {
  "en": "38 + 5 goes past 40. We do that in **two small steps**.\n\nStep 1: fill up the ten. 38 + 2 = 40.\nStep 2: add the rest. 40 + 3 = **43**.\n\nWhen taking away: go to the round number first, then take away the rest.",
  "ar": "38 + 5 يتجاوز الـ40. نحلّها في **خطوتين صغيرتين**.\n\nالخطوة 1: أكمل العشرة. 38 + 2 = 40.\nالخطوة 2: أضف الباقي. 40 + 3 = **43**.\n\nعند الطرح: اذهب أولًا إلى العدد المدوّر، ثم اطرح الباقي.",
  "uk": "38 + 5 переходить через 40. Це ми робимо у **два кроки**.\n\nКрок 1: доповни десяток. 38 + 2 = 40.\nКрок 2: додай решту. 40 + 3 = **43**.\n\nКоли віднімаєш: спочатку дійди до круглого числа, потім відніми решту.",
  "tr": "38 + 5, 40'ı geçer. Bunu **iki küçük adımda** yaparız.\n\nAdım 1: onluğu tamamla. 38 + 2 = 40.\nAdım 2: kalanı ekle. 40 + 3 = **43**.\n\nÇıkarırken: önce yuvarlak sayıya git, sonra kalanı çıkar.",
  "ro": "38 + 5 trece peste 40. Facem asta în **doi pași mici**.\n\nPasul 1: umple zecea. 38 + 2 = 40.\nPasul 2: adună restul. 40 + 3 = **43**.\n\nLa scădere: mergi mai întâi la numărul rotund, apoi scade restul.",
  "bg": "38 + 5 минава през 40. Правим го на **две малки стъпки**.\n\nСтъпка 1: допълни десетицата. 38 + 2 = 40.\nСтъпка 2: прибави остатъка. 40 + 3 = **43**.\n\nПри изваждане: първо стигни до кръглото число, после извади остатъка."
 },
 "Maak eerst het tiental vol: 29 + 1 = 30. Dan nog 3 erbij.": {
  "en": "Fill up the ten first: 29 + 1 = 30. Then add 3 more.",
  "ar": "أكمل العشرة أولًا: 29 + 1 = 30. ثم أضف 3 أيضًا.",
  "uk": "Спочатку доповни десяток: 29 + 1 = 30. Потім додай ще 3.",
  "tr": "Önce onluğu tamamla: 29 + 1 = 30. Sonra 3 daha ekle.",
  "ro": "Umple mai întâi zecea: 29 + 1 = 30. Apoi încă 3.",
  "bg": "Първо допълни десетицата: 29 + 1 = 30. После още 3."
 },
 "Eerst het tiental vol": {
  "en": "First fill up the ten",
  "ar": "أكمل العشرة أولًا",
  "uk": "Спочатку доповни десяток",
  "tr": "Önce onluğu tamamla",
  "ro": "Mai întâi umple zecea",
  "bg": "Първо допълни десетицата"
 },
 "38 + 5. Maak eerst **40**: 38 + 2 = 40. Je had 5, je hebt 2 gebruikt. Er blijft 3 over. 40 + 3 = **43**.": {
  "en": "38 + 5. Make **40** first: 38 + 2 = 40. You had 5, you used 2. 3 are left. 40 + 3 = **43**.",
  "ar": "38 + 5. اصنع **40** أولًا: 38 + 2 = 40. كان عندك 5، استعملت 2. يبقى 3. 40 + 3 = **43**.",
  "uk": "38 + 5. Спочатку зроби **40**: 38 + 2 = 40. У тебе було 5, ти використав 2. Залишилося 3. 40 + 3 = **43**.",
  "tr": "38 + 5. Önce **40** yap: 38 + 2 = 40. 5'in vardı, 2'sini kullandın. 3 kaldı. 40 + 3 = **43**.",
  "ro": "38 + 5. Fă mai întâi **40**: 38 + 2 = 40. Aveai 5, ai folosit 2. Rămân 3. 40 + 3 = **43**.",
  "bg": "38 + 5. Първо направи **40**: 38 + 2 = 40. Имаше 5, използва 2. Остават 3. 40 + 3 = **43**."
 },
 "Knip het kleine getal in **twee stukjes**. Eén stukje maakt het tiental vol.": {
  "en": "Cut the small number into **two pieces**. One piece fills up the ten.",
  "ar": "قسّم العدد الصغير إلى **قطعتين**. قطعة تكمل العشرة.",
  "uk": "Розріж менше число на **дві частини**. Одна частина доповнює десяток.",
  "tr": "Küçük sayıyı **iki parçaya** böl. Bir parça onluğu tamamlar.",
  "ro": "Taie numărul mic în **două bucăți**. O bucată umple zecea.",
  "bg": "Раздели малкото число на **две части**. Едната част допълва десетицата."
 },
 "Bij eraf net zo": {
  "en": "Taking away works the same",
  "ar": "والطرح بنفس الطريقة",
  "uk": "З відніманням так само",
  "tr": "Çıkarırken de aynı",
  "ro": "La scădere la fel",
  "bg": "При изваждане е същото"
 },
 "43 − 5. Ga eerst naar **40**: 43 − 3 = 40. Dan nog 2 eraf: **38**.": {
  "en": "43 − 5. Go to **40** first: 43 − 3 = 40. Then take away 2 more: **38**.",
  "ar": "43 − 5. اذهب أولًا إلى **40**: 43 − 3 = 40. ثم اطرح 2 أيضًا: **38**.",
  "uk": "43 − 5. Спочатку дійди до **40**: 43 − 3 = 40. Потім відніми ще 2: **38**.",
  "tr": "43 − 5. Önce **40**'a git: 43 − 3 = 40. Sonra 2 daha çıkar: **38**.",
  "ro": "43 − 5. Mergi mai întâi la **40**: 43 − 3 = 40. Apoi scade încă 2: **38**.",
  "bg": "43 − 5. Първо стигни до **40**: 43 − 3 = 40. После извади още 2: **38**."
 },
 "tiental vol": {
  "en": "ten full",
  "ar": "إكمال العشرة",
  "uk": "повний десяток",
  "tr": "onluğu tamamla",
  "ro": "zecea plină",
  "bg": "пълна десетица"
 },
 "Naar 10, 20, 30, 40…": {
  "en": "To 10, 20, 30, 40…",
  "ar": "إلى 10, 20, 30, 40…",
  "uk": "До 10, 20, 30, 40…",
  "tr": "10, 20, 30, 40… sayısına kadar.",
  "ro": "La 10, 20, 30, 40…",
  "bg": "До 10, 20, 30, 40…"
 },
 "Over het tiental: eerst naar het ronde getal, dan de rest.": {
  "en": "Past the ten: first to the round number, then the rest.",
  "ar": "تجاوز العشرة: أولًا إلى العدد المدوّر، ثم الباقي.",
  "uk": "Через десяток: спочатку до круглого числа, потім решта.",
  "tr": "Onluğu geçmek: önce yuvarlak sayıya, sonra kalan.",
  "ro": "Peste zece: mai întâi la numărul rotund, apoi restul.",
  "bg": "През десетицата: първо до кръглото число, после остатъка."
 },
 "Het ronde getal is een tussenstop.": {
  "en": "The round number is a stop on the way.",
  "ar": "العدد المدوّر محطة في الطريق.",
  "uk": "Кругле число — це зупинка посередині.",
  "tr": "Yuvarlak sayı bir ara duraktır.",
  "ro": "Numărul rotund este o oprire pe drum.",
  "bg": "Кръглото число е спирка по пътя."
 },
 "Eerst naar het ronde getal, dan de rest.": {
  "en": "First to the round number, then the rest.",
  "ar": "أولًا إلى العدد المدوّر، ثم الباقي.",
  "uk": "Спочатку до круглого числа, потім решта.",
  "tr": "Önce yuvarlak sayıya, sonra kalanı.",
  "ro": "Mai întâi la numărul rotund, apoi restul.",
  "bg": "Първо до кръглото число, после остатъка."
 },
 "Knip het getal in twee stukjes.": {
  "en": "Cut the number into two pieces.",
  "ar": "قسّم العدد إلى قطعتين.",
  "uk": "Розріж число на дві частини.",
  "tr": "Sayıyı iki parçaya böl.",
  "ro": "Taie numărul în două bucăți.",
  "bg": "Раздели числото на две части."
 },
 "Eerst naar 40.": {
  "en": "First to 40.",
  "ar": "أولًا إلى 40.",
  "uk": "Спочатку до 40.",
  "tr": "Önce 40'a.",
  "ro": "Mai întâi la 40.",
  "bg": "Първо до 40."
 },
 "Ga eerst naar het tiental: 43 − 3 = 40. Dan nog 6 eraf.": {
  "en": "Go to the ten first: 43 − 3 = 40. Then take away 6 more.",
  "ar": "اذهب أولًا إلى العشرة: 43 − 3 = 40. ثم اطرح 6 أيضًا.",
  "uk": "Спочатку дійди до десятка: 43 − 3 = 40. Потім відніми ще 6.",
  "tr": "Önce onluğa git: 43 − 3 = 40. Sonra 6 daha çıkar.",
  "ro": "Mergi mai întâi la zece: 43 − 3 = 40. Apoi scade încă 6.",
  "bg": "Първо стигни до десетицата: 43 − 3 = 40. После извади още 6."
 },
 "Maak eerst het tiental vol: 42 + 8 = 50. Dan nog 0 erbij.": {
  "en": "Fill up the ten first: 42 + 8 = 50. Then add 0 more.",
  "ar": "أكمل العشرة أولًا: 42 + 8 = 50. ثم أضف 0.",
  "uk": "Спочатку доповни десяток: 42 + 8 = 50. Потім додай ще 0.",
  "tr": "Önce onluğu tamamla: 42 + 8 = 50. Sonra 0 ekle.",
  "ro": "Umple mai întâi zecea: 42 + 8 = 50. Apoi încă 0.",
  "bg": "Първо допълни десетицата: 42 + 8 = 50. После още 0."
 },
 "Ga eerst naar het tiental: 73 − 3 = 70. Dan nog 3 eraf.": {
  "en": "Go to the ten first: 73 − 3 = 70. Then take away 3 more.",
  "ar": "اذهب أولًا إلى العشرة: 73 − 3 = 70. ثم اطرح 3 أيضًا.",
  "uk": "Спочатку дійди до десятка: 73 − 3 = 70. Потім відніми ще 3.",
  "tr": "Önce onluğa git: 73 − 3 = 70. Sonra 3 daha çıkar.",
  "ro": "Mergi mai întâi la zece: 73 − 3 = 70. Apoi scade încă 3.",
  "bg": "Първо стигни до десетицата: 73 − 3 = 70. После извади още 3."
 },
 "Maak eerst het tiental vol: 21 + 9 = 30. Dan nog 0 erbij.": {
  "en": "Fill up the ten first: 21 + 9 = 30. Then add 0 more.",
  "ar": "أكمل العشرة أولًا: 21 + 9 = 30. ثم أضف 0.",
  "uk": "Спочатку доповни десяток: 21 + 9 = 30. Потім додай ще 0.",
  "tr": "Önce onluğu tamamla: 21 + 9 = 30. Sonra 0 ekle.",
  "ro": "Umple mai întâi zecea: 21 + 9 = 30. Apoi încă 0.",
  "bg": "Първо допълни десетицата: 21 + 9 = 30. После още 0."
 },
 "Sommen met **woorden** en **geld**.\n\n**Samen** = plus. **Uitgeven, weg, over** = min.\n\nSchrijf de som op. Reken in stapjes.": {
  "en": "Sums with **words** and **money**.\n\n**Samen** (together) = plus. **Uitgeven, weg, over** (spend, away, left) = minus.\n\nWrite the sum down. Work it out in small steps.",
  "ar": "مسائل **بالكلمات** و**النقود**.\n\n**Samen** (= معًا) = زائد. **Uitgeven, weg, over** (= تصرف، ذهب، باقٍ) = ناقص.\n\nاكتب المسألة. احسب خطوة خطوة.",
  "uk": "Задачі зі **словами** і **грошима**.\n\n**Samen** (= разом) = плюс. **Uitgeven, weg, over** (= витратити, геть, залишилося) = мінус.\n\nЗапиши приклад. Рахуй кроками.",
  "tr": "**Kelimelerle** ve **parayla** işlemler.\n\n**Samen** (= birlikte) = artı. **Uitgeven, weg, over** (= harcamak, gitti, kalan) = eksi.\n\nİşlemi yaz. Adım adım hesapla.",
  "ro": "Probleme cu **cuvinte** și **bani**.\n\n**Samen** (= împreună) = plus. **Uitgeven, weg, over** (= a cheltui, plecat, rămas) = minus.\n\nScrie exercițiul. Calculează în pași mici.",
  "bg": "Задачи с **думи** и **пари**.\n\n**Samen** (= заедно) = плюс. **Uitgeven, weg, over** (= харча, няма го, остава) = минус.\n\nЗапиши задачата. Смятай на стъпки."
 },
 "Lees de som nog een keer. Samen = plus. Weg, uit, over = min.": {
  "en": "Read the sum one more time. \"Samen\" (together) = plus. \"Weg, uit, over\" (away, spend, left) = minus.",
  "ar": "اقرأ المسألة مرة أخرى. «samen» = زائد. «weg، uit، over» = ناقص.",
  "uk": "Прочитай задачу ще раз. «Samen» (= разом) = плюс. «Weg, uit, over» (= геть, витратити, залишилося) = мінус.",
  "tr": "İşlemi bir kez daha oku. \"Samen\" (birlikte) = artı. \"Weg, uit, over\" (gitti, harcadı, kalan) = eksi.",
  "ro": "Citește problema încă o dată. „Samen” (= împreună) = plus. „Weg, uit, over” (= plecat, cheltuit, rămas) = minus.",
  "bg": "Прочети задачата още веднъж. „Samen“ (= заедно) = плюс. „Weg, uit, over“ (= няма го, харча, остава) = минус."
 },
 "Plus of min?": {
  "en": "Plus or minus?",
  "ar": "زائد أم ناقص؟",
  "uk": "Плюс чи мінус?",
  "tr": "Artı mı eksi mi?",
  "ro": "Plus sau minus?",
  "bg": "Плюс или минус?"
 },
 "**Samen** betekent **plus**. 12 euro en 15 euro samen: 12 + 15.": {
  "en": "**Samen** (together) means **plus**. 12 euros and 15 euros together: 12 + 15.",
  "ar": "**Samen** (= معًا) يعني **زائد**. 12 يورو و15 يورو معًا: 12 + 15.",
  "uk": "**Samen** (= разом) означає **плюс**. 12 євро і 15 євро разом: 12 + 15.",
  "tr": "**Samen** (= birlikte) **artı** demektir. 12 euro ve 15 euro birlikte: 12 + 15.",
  "ro": "**Samen** (= împreună) înseamnă **plus**. 12 euro și 15 euro împreună: 12 + 15.",
  "bg": "**Samen** (= заедно) означава **плюс**. 12 евро и 15 евро заедно: 12 + 15."
 },
 "Reken in stapjes": {
  "en": "Work it out in steps",
  "ar": "احسب خطوة خطوة",
  "uk": "Рахуй кроками",
  "tr": "Adım adım hesapla",
  "ro": "Calculează în pași",
  "bg": "Смятай на стъпки"
 },
 "12 + 15: eerst 12 + 10 = 22. Dan 22 + 5 = **27**.": {
  "en": "12 + 15: first 12 + 10 = 22. Then 22 + 5 = **27**.",
  "ar": "12 + 15: أولًا 12 + 10 = 22. ثم 22 + 5 = **27**.",
  "uk": "12 + 15: спочатку 12 + 10 = 22. Потім 22 + 5 = **27**.",
  "tr": "12 + 15: önce 12 + 10 = 22. Sonra 22 + 5 = **27**.",
  "ro": "12 + 15: mai întâi 12 + 10 = 22. Apoi 22 + 5 = **27**.",
  "bg": "12 + 15: първо 12 + 10 = 22. После 22 + 5 = **27**."
 },
 "Check": {
  "en": "Check",
  "ar": "تحقّق",
  "uk": "Перевір",
  "tr": "Kontrol et",
  "ro": "Verifică",
  "bg": "Провери"
 },
 "Samen moet **meer** zijn dan elk los getal. 27 is meer dan 12 en meer dan 15. Klopt.": {
  "en": "Together must be **more** than each number on its own. 27 is more than 12 and more than 15. Correct.",
  "ar": "المجموع يجب أن يكون **أكثر** من كل عدد وحده. 27 أكثر من 12 وأكثر من 15. صحيح.",
  "uk": "Разом має бути **більше**, ніж кожне окреме число. 27 більше за 12 і більше за 15. Правильно.",
  "tr": "Birlikte, her bir sayıdan **daha çok** olmalı. 27, 12'den ve 15'ten çok. Doğru.",
  "ro": "Împreună trebuie să fie **mai mult** decât fiecare număr singur. 27 este mai mult decât 12 și mai mult decât 15. Corect.",
  "bg": "Заедно трябва да е **повече** от всяко число само. 27 е повече от 12 и повече от 15. Вярно."
 },
 "Bij elkaar. Plus.": {
  "en": "All together. Plus.",
  "ar": "مع بعض. زائد.",
  "uk": "Усе разом. Плюс.",
  "tr": "Bir arada. Artı.",
  "ro": "La un loc. Plus.",
  "bg": "Всичко заедно. Плюс."
 },
 "over": {
  "en": "left",
  "ar": "الباقي",
  "uk": "залишилося",
  "tr": "kalan",
  "ro": "rămas",
  "bg": "остава"
 },
 "Wat je nog hebt. Min.": {
  "en": "What you still have. Minus.",
  "ar": "ما بقي معك. ناقص.",
  "uk": "Те, що в тебе ще є. Мінус.",
  "tr": "Hâlâ elinde olan. Eksi.",
  "ro": "Ce mai ai. Minus.",
  "bg": "Това, което още имаш. Минус."
 },
 "Samen = plus. Uitgeven, weg, over = min.": {
  "en": "\"Samen\" (together) = plus. \"Uitgeven, weg, over\" (spend, away, left) = minus.",
  "ar": "«samen» = زائد. «uitgeven، weg، over» = ناقص.",
  "uk": "«Samen» (= разом) = плюс. «Uitgeven, weg, over» (= витратити, геть, залишилося) = мінус.",
  "tr": "\"Samen\" (birlikte) = artı. \"Uitgeven, weg, over\" (harcamak, gitti, kalan) = eksi.",
  "ro": "„Samen” (= împreună) = plus. „Uitgeven, weg, over” (= a cheltui, plecat, rămas) = minus.",
  "bg": "„Samen“ (= заедно) = плюс. „Uitgeven, weg, over“ (= харча, няма го, остава) = минус."
 },
 "Zoek het woord: samen of weg.": {
  "en": "Find the word: \"samen\" (together) or \"weg\" (away).",
  "ar": "ابحث عن الكلمة: «samen» أو «weg».",
  "uk": "Знайди слово: «samen» (= разом) чи «weg» (= геть).",
  "tr": "Kelimeyi bul: \"samen\" (birlikte) mi, \"weg\" (gitti) mi.",
  "ro": "Caută cuvântul: „samen” (= împreună) sau „weg” (= plecat).",
  "bg": "Намери думата: „samen“ (= заедно) или „weg“ (= няма го)."
 },
 "Samen = plus.": {
  "en": "\"Samen\" (together) = plus.",
  "ar": "«samen» = زائد.",
  "uk": "Разом («samen») = плюс.",
  "tr": "\"Samen\" (birlikte) = artı.",
  "ro": "Împreună („samen”) = plus.",
  "bg": "Заедно („samen“) = плюс."
 },
 "Twee dingen bij elkaar = plus.": {
  "en": "Two things together = plus.",
  "ar": "شيئان مع بعض = زائد.",
  "uk": "Дві речі разом = плюс.",
  "tr": "İki şey bir arada = artı.",
  "ro": "Două lucruri la un loc = plus.",
  "bg": "Две неща заедно = плюс."
 },
 "Plus.": {
  "en": "Plus.",
  "ar": "زائد.",
  "uk": "Плюс.",
  "tr": "Artı.",
  "ro": "Plus.",
  "bg": "Плюс."
 },
 "Hoe voel je je?": {
  "en": "How do you feel?",
  "ar": "كيف تشعر؟",
  "uk": "Як ти почуваєшся?",
  "tr": "Nasıl hissediyorsun?",
  "ro": "Cum te simți?",
  "bg": "Как се чувстваш?"
 },
 "Zeggen hoe je je **voelt** mag **altijd**.\n\n**Ik ben** blij · bang · boos · moe · verdrietig.\n**Ik heb** pijn · honger.\n**Ik voel me niet goed.**\n\nDe juf of meester wil het weten en helpt je.": {
  "en": "Saying how you **voelt** (feel) is **altijd** (always) okay.\n\n**Ik ben** (I am) happy · scared · angry · tired · sad.\n**Ik heb** (I have) pain · hunger.\n**Ik voel me niet goed.** (I don't feel good.)\n\nThe teacher wants to know and helps you.",
  "ar": "يمكنك **دائمًا** أن تقول كيف **تشعر**.\n\n**أنا** (Ik ben) سعيد (blij) · خائف (bang) · غاضب (boos) · متعب (moe) · حزين (verdrietig).\n**عندي** (Ik heb) ألم (pijn) · جوع (honger).\n**لا أشعر أنني بخير (Ik voel me niet goed).**\n\nالمعلمة أو المعلم يريد أن يعرف ويساعدك.",
  "uk": "Казати, як ти себе **почуваєш**, можна **завжди**.\n\n**Я** (Ik ben) радий · наляканий · сердитий · втомлений · сумний.\n**У мене** (Ik heb) біль · голод.\n**Мені погано.** (Ik voel me niet goed.)\n\nВчителька або вчитель хоче це знати і допоможе тобі.",
  "tr": "Nasıl **hissettiğini** söylemek **her zaman** serbest.\n\n**Ben** (Ik ben) mutluyum · korkuyorum · kızgınım · yorgunum · üzgünüm.\n**Benim** (Ik heb) ağrım var · karnım aç.\n**Kendimi iyi hissetmiyorum.** (Ik voel me niet goed.)\n\nÖğretmen bunu bilmek ister ve sana yardım eder.",
  "ro": "Să spui cum te **simți** este **întotdeauna** voie.\n\n**Ik ben** (= Eu sunt) fericit · speriat · supărat · obosit · trist.\n**Ik heb** (= Eu am) durere · foame.\n**Ik voel me niet goed.** (= Nu mă simt bine.)\n\nDoamna sau domnul învățător vrea să știe și te ajută.",
  "bg": "Да кажеш как се **чувстваш** винаги **може**.\n\n**Ik ben** (= Аз съм) радостен · уплашен · ядосан · уморен · тъжен.\n**Ik heb** (= Аз имам) болка · глад.\n**Ik voel me niet goed.** (= Не се чувствам добре.)\n\nУчителката или учителят иска да знае и ще ти помогне."
 },
 "Je hoofd doet zeer. Wat zeg je tegen de juf?": {
  "en": "Your head hurts. What do you say to the teacher?",
  "ar": "رأسك يؤلمك. ماذا تقول للمعلمة؟",
  "uk": "У тебе болить голова. Що ти скажеш учительці?",
  "tr": "Başın ağrıyor. Öğretmene ne dersin?",
  "ro": "Te doare capul. Ce îi spui doamnei învățătoare?",
  "bg": "Боли те главата. Какво казваш на учителката?"
 },
 "Zeer doen = pijn. Zeg dat tegen de juf.": {
  "en": "Hurts = pain. Tell that to the teacher.",
  "ar": "يؤلم (zeer doen) = ألم (pijn). قل ذلك للمعلمة.",
  "uk": "Боліти (zeer doen) = біль (pijn). Скажи це вчительці.",
  "tr": "Acımak (zeer doen) = ağrı (pijn). Bunu öğretmene söyle.",
  "ro": "A durea (zeer doen) = durere (pijn). Spune asta doamnei învățătoare.",
  "bg": "Боли (zeer doen) = болка (pijn). Кажи това на учителката."
 },
 "Het mag altijd": {
  "en": "It's always okay",
  "ar": "يمكنك ذلك دائمًا",
  "uk": "Це можна завжди",
  "tr": "Her zaman serbest",
  "ro": "Este întotdeauna voie",
  "bg": "Винаги може"
 },
 "Zeggen hoe je je **voelt** mag altijd. De juf of meester wil het weten en helpt je.": {
  "en": "Saying how you **voelt** (feel) is always okay. The teacher wants to know and helps you.",
  "ar": "يمكنك دائمًا أن تقول كيف **تشعر**. المعلمة أو المعلم يريد أن يعرف ويساعدك.",
  "uk": "Казати, як ти себе **почуваєш**, можна завжди. Вчителька або вчитель хоче це знати і допоможе тобі.",
  "tr": "Nasıl **hissettiğini** söylemek her zaman serbest. Öğretmen bunu bilmek ister ve sana yardım eder.",
  "ro": "Să spui cum te **simți** este întotdeauna voie. Doamna sau domnul învățător vrea să știe și te ajută.",
  "bg": "Да кажеш как се **чувстваш** винаги може. Учителката или учителят иска да знае и ще ти помогне."
 },
 "Zo zeg je het": {
  "en": "This is how you say it",
  "ar": "هكذا تقولها",
  "uk": "Так це кажуть",
  "tr": "Böyle söylersin",
  "ro": "Așa spui",
  "bg": "Така се казва"
 },
 "**Ik heb pijn.** **Ik voel me niet goed.** **Ik ben bang.** **Ik ben moe.**": {
  "en": "**Ik heb pijn.** (I have pain.) **Ik voel me niet goed.** (I don't feel good.) **Ik ben bang.** (I am scared.) **Ik ben moe.** (I am tired.)",
  "ar": "**عندي ألم (Ik heb pijn).** **لا أشعر أنني بخير (Ik voel me niet goed).** **أنا خائف (Ik ben bang).** **أنا متعب (Ik ben moe).**",
  "uk": "**У мене болить.** (Ik heb pijn.) **Мені погано.** (Ik voel me niet goed.) **Мені страшно.** (Ik ben bang.) **Я втомився.** (Ik ben moe.)",
  "tr": "**Ağrım var.** (Ik heb pijn.) **Kendimi iyi hissetmiyorum.** (Ik voel me niet goed.) **Korkuyorum.** (Ik ben bang.) **Yorgunum.** (Ik ben moe.)",
  "ro": "**Mă doare.** (Ik heb pijn.) **Nu mă simt bine.** (Ik voel me niet goed.) **Mi-e frică.** (Ik ben bang.) **Sunt obosit.** (Ik ben moe.)",
  "bg": "**Боли ме.** (Ik heb pijn.) **Не се чувствам добре.** (Ik voel me niet goed.) **Страх ме е.** (Ik ben bang.) **Уморен съм.** (Ik ben moe.)"
 },
 "Wijs het aan": {
  "en": "Point at it",
  "ar": "أشِر إليه",
  "uk": "Покажи пальцем",
  "tr": "Göster",
  "ro": "Arată cu degetul",
  "bg": "Посочи с пръст"
 },
 "Weet je het woord niet? **Wijs** aan waar het zeer doet. Of tik op de zin voor jouw taal.": {
  "en": "Don't know the word? **Wijs** (Point) at where it hurts. Or tap the sentence for your language.",
  "ar": "لا تعرف الكلمة؟ **أشِر** إلى المكان الذي يؤلمك. أو اضغط على الجملة لترى لغتك.",
  "uk": "Не знаєш слова? **Покажи**, де болить. Або натисни на речення, щоб почути свою мову.",
  "tr": "Kelimeyi bilmiyor musun? Nerenin acıdığını **göster**. Ya da kendi dilin için cümleye dokun.",
  "ro": "Nu știi cuvântul? **Arată** unde te doare. Sau apasă pe propoziție pentru limba ta.",
  "bg": "Не знаеш думата? **Посочи** къде те боли. Или натисни изречението за твоя език."
 },
 "pijn": {
  "en": "pain",
  "ar": "ألم",
  "uk": "біль",
  "tr": "ağrı",
  "ro": "durere",
  "bg": "болка"
 },
 "Het doet zeer.": {
  "en": "It hurts.",
  "ar": "إنه يؤلم.",
  "uk": "Болить.",
  "tr": "Acıyor.",
  "ro": "Doare.",
  "bg": "Боли."
 },
 "bang": {
  "en": "scared",
  "ar": "خائف",
  "uk": "наляканий, страшно",
  "tr": "korkmuş",
  "ro": "speriat, frică",
  "bg": "уплашен, страх"
 },
 "Je bent ergens van geschrokken of je vindt iets eng.": {
  "en": "You got scared of something, or you think something is scary.",
  "ar": "شيء ما أفزعك، أو تجد شيئًا مخيفًا.",
  "uk": "Ти чогось злякався, або щось тобі страшне.",
  "tr": "Bir şeyden irkildin ya da bir şeyi korkutucu buluyorsun.",
  "ro": "Te-ai speriat de ceva sau ceva ți se pare înfricoșător.",
  "bg": "Уплашил си се от нещо или нещо ти се струва страшно."
 },
 "verdrietig": {
  "en": "sad",
  "ar": "حزين",
  "uk": "сумний",
  "tr": "üzgün",
  "ro": "trist",
  "bg": "тъжен"
 },
 "Je bent niet blij; misschien moet je huilen.": {
  "en": "You are not happy; maybe you want to cry.",
  "ar": "لست سعيدًا؛ ربما تريد أن تبكي.",
  "uk": "Ти не радий; можливо, тобі хочеться плакати.",
  "tr": "Mutlu değilsin; belki ağlaman geliyor.",
  "ro": "Nu ești fericit; poate îți vine să plângi.",
  "bg": "Не си радостен; може би ти се плаче."
 },
 "Ik ben + gevoel. Ik heb + pijn of honger.": {
  "en": "I am + feeling. I have + pain or hunger.",
  "ar": "أنا (Ik ben) + شعور. عندي (Ik heb) + ألم أو جوع.",
  "uk": "Ik ben (я) + почуття. Ik heb (у мене) + біль або голод.",
  "tr": "Ik ben (ben …im) + duygu. Ik heb (benim … var) + ağrı ya da açlık.",
  "ro": "Ik ben (= eu sunt) + un sentiment. Ik heb (= eu am) + durere sau foame.",
  "bg": "Ik ben (= аз съм) + чувство. Ik heb (= аз имам) + болка или глад."
 },
 "Ik ben blij.": {
  "en": "I am happy.",
  "ar": "أنا سعيد.",
  "uk": "Я радий.",
  "tr": "Mutluyum. (Ik ben blij.)",
  "ro": "Sunt fericit.",
  "bg": "Радостен съм."
 },
 "Ik heb pijn in mijn buik.": {
  "en": "I have pain in my tummy.",
  "ar": "عندي ألم في بطني.",
  "uk": "У мене болить живіт.",
  "tr": "Karnım ağrıyor. (Ik heb pijn in mijn buik.)",
  "ro": "Mă doare burta.",
  "bg": "Боли ме коремът."
 },
 "Ik ben bang, blij, boos, moe. Ik heb pijn, honger.": {
  "en": "I am scared, happy, angry, tired. I have pain, hunger.",
  "ar": "أنا (Ik ben) خائف، سعيد، غاضب، متعب. عندي (Ik heb) ألم، جوع.",
  "uk": "Ik ben (я): наляканий, радий, сердитий, втомлений. Ik heb (у мене): біль, голод.",
  "tr": "Korkuyorum, mutluyum, kızgınım, yorgunum. (Ik ben bang, blij, boos, moe.) Ağrım var, karnım aç. (Ik heb pijn, honger.)",
  "ro": "Ik ben (= eu sunt): speriat, fericit, supărat, obosit. Ik heb (= eu am): durere, foame.",
  "bg": "Ik ben (= аз съм): уплашен, радостен, ядосан, уморен. Ik heb (= аз имам): болка, глад."
 },
 "Zeg: Ik heb pijn.": {
  "en": "Say: Ik heb pijn (I have pain).",
  "ar": "قل: عندي ألم (Ik heb pijn).",
  "uk": "Скажи: У мене болить. (Ik heb pijn.)",
  "tr": "Söyle: Ağrım var. (Ik heb pijn.)",
  "ro": "Spune: Mă doare. (Ik heb pijn.)",
  "bg": "Кажи: Боли ме. (Ik heb pijn.)"
 },
 "Zeer = pijn.": {
  "en": "Hurts = pain.",
  "ar": "يؤلم (zeer) = ألم (pijn).",
  "uk": "Zeer (боляче) = pijn (біль).",
  "tr": "Acı (zeer) = ağrı (pijn).",
  "ro": "Zeer (= doare) = pijn (= durere).",
  "bg": "Zeer (= боли) = pijn (= болка)."
 },
 "Ik heb pijn.": {
  "en": "I have pain.",
  "ar": "عندي ألم.",
  "uk": "У мене болить.",
  "tr": "Ağrım var. (Ik heb pijn.)",
  "ro": "Mă doare.",
  "bg": "Боли ме."
 },
 "Ik heb honger.": {
  "en": "I have hunger.",
  "ar": "أنا جائع.",
  "uk": "Я голодний.",
  "tr": "Karnım aç. (Ik heb honger.)",
  "ro": "Mi-e foame.",
  "bg": "Гладен съм."
 },
 "Ik ben klaar.": {
  "en": "I am done.",
  "ar": "انتهيت.",
  "uk": "Я закінчив.",
  "tr": "Bitirdim. (Ik ben klaar.)",
  "ro": "Am terminat.",
  "bg": "Готов съм."
 },
 "Je bent ziek. Wat zeg je tegen de juf?": {
  "en": "You are sick. What do you say to the teacher?",
  "ar": "أنت مريض. ماذا تقول للمعلمة؟",
  "uk": "Ти хворий. Що ти скажеш учительці?",
  "tr": "Hastasın. Öğretmene ne dersin?",
  "ro": "Ești bolnav. Ce îi spui doamnei învățătoare?",
  "bg": "Болен си. Какво казваш на учителката?"
 },
 "Ziek zijn = je voelt je niet goed.": {
  "en": "Being sick = you don't feel good.",
  "ar": "مريض (ziek zijn) = لا تشعر أنك بخير.",
  "uk": "Бути хворим (ziek zijn) = тобі погано.",
  "tr": "Hasta olmak (ziek zijn) = kendini iyi hissetmemek.",
  "ro": "A fi bolnav (ziek zijn) = nu te simți bine.",
  "bg": "Да си болен (ziek zijn) = не се чувстваш добре."
 },
 "Ik voel me niet goed.": {
  "en": "I don't feel good.",
  "ar": "لا أشعر أنني بخير.",
  "uk": "Мені погано.",
  "tr": "Kendimi iyi hissetmiyorum. (Ik voel me niet goed.)",
  "ro": "Nu mă simt bine.",
  "bg": "Не се чувствам добре."
 },
 "Mag ik meedoen?": {
  "en": "Can I join in?",
  "ar": "هل يمكنني أن ألعب معكم؟",
  "uk": "Можна мені з вами?",
  "tr": "Ben de oynayabilir miyim? (Mag ik meedoen?)",
  "ro": "Pot să mă joc și eu?",
  "bg": "Може ли да играя с вас?"
 },
 "Tot morgen!": {
  "en": "See you tomorrow!",
  "ar": "إلى اللقاء غدًا!",
  "uk": "До завтра!",
  "tr": "Yarın görüşürüz! (Tot morgen!)",
  "ro": "Pe mâine!",
  "bg": "До утре!"
 },
 "Een hond blaft heel hard. Je schrikt. Hoe voel je je?": {
  "en": "A dog barks very loud. You get scared. How do you feel?",
  "ar": "كلب ينبح بصوت عالٍ جدًا. أنت تفزع. كيف تشعر؟",
  "uk": "Собака дуже голосно гавкає. Ти лякаєшся. Як ти почуваєшся?",
  "tr": "Bir köpek çok yüksek sesle havlıyor. İrkiliyorsun. Nasıl hissediyorsun?",
  "ro": "Un câine latră foarte tare. Te sperii. Cum te simți?",
  "bg": "Едно куче лае много силно. Ти се стряскаш. Как се чувстваш?"
 },
 "Schrikken van iets engs = bang.": {
  "en": "Getting scared of something scary = scared.",
  "ar": "الفزع من شيء مخيف = خائف (bang).",
  "uk": "Злякатися чогось страшного = страшно (bang).",
  "tr": "Korkutucu bir şeyden irkilmek = korkmuş (bang).",
  "ro": "Să te sperii de ceva înfricoșător = frică (bang).",
  "bg": "Да се стреснеш от нещо страшно = страх (bang)."
 },
 "Ik ben bang.": {
  "en": "I am scared.",
  "ar": "أنا خائف.",
  "uk": "Мені страшно.",
  "tr": "Korkuyorum. (Ik ben bang.)",
  "ro": "Mi-e frică.",
  "bg": "Страх ме е."
 },
 "Iemand pakt steeds je bal af. Hoe voel je je?": {
  "en": "Someone keeps taking your ball. How do you feel?",
  "ar": "شخص يأخذ كرتك كل مرة. كيف تشعر؟",
  "uk": "Хтось весь час забирає в тебе м'яч. Як ти почуваєшся?",
  "tr": "Biri sürekli topunu alıyor. Nasıl hissediyorsun?",
  "ro": "Cineva îți ia mereu mingea. Cum te simți?",
  "bg": "Някой все ти взема топката. Как се чувстваш?"
 },
 "Iemand doet iets wat niet mag. Dan ben je niet blij, maar…": {
  "en": "Someone does something that's not allowed. Then you are not happy, but…",
  "ar": "شخص يفعل شيئًا غير مسموح. عندها لست سعيدًا، بل…",
  "uk": "Хтось робить те, що не можна. Тоді ти не радий, а…",
  "tr": "Biri yasak bir şey yapıyor. O zaman mutlu değilsin, ama…",
  "ro": "Cineva face ceva ce nu este voie. Atunci nu ești fericit, ci…",
  "bg": "Някой прави нещо, което не е позволено. Тогава не си радостен, а…"
 },
 "Ik ben boos.": {
  "en": "I am angry.",
  "ar": "أنا غاضب.",
  "uk": "Я сердитий.",
  "tr": "Kızgınım. (Ik ben boos.)",
  "ro": "Sunt supărat.",
  "bg": "Ядосан съм."
 },
 "Ik ben moe.": {
  "en": "I am tired.",
  "ar": "أنا متعب.",
  "uk": "Я втомився.",
  "tr": "Yorgunum. (Ik ben moe.)",
  "ro": "Sunt obosit.",
  "bg": "Уморен съм."
 },
 "Je hebt slecht geslapen. Hoe voel je je?": {
  "en": "You slept badly. How do you feel?",
  "ar": "نمت نومًا سيئًا. كيف تشعر؟",
  "uk": "Ти погано спав. Як ти почуваєшся?",
  "tr": "Kötü uyudun. Nasıl hissediyorsun?",
  "ro": "Ai dormit prost. Cum te simți?",
  "bg": "Спал си зле. Как се чувстваш?"
 },
 "Weinig slaap = je wilt graag slapen.": {
  "en": "Little sleep = you really want to sleep.",
  "ar": "نوم قليل = تريد أن تنام.",
  "uk": "Мало сну = тобі дуже хочеться спати.",
  "tr": "Az uyku = uyumak istiyorsun.",
  "ro": "Puțin somn = vrei tare mult să dormi.",
  "bg": "Малко сън = много ти се спи."
 },
 "Doe-woorden in de klas": {
  "en": "Action words in class",
  "ar": "كلمات الفعل في الصف",
  "uk": "Слова-дії в класі",
  "tr": "Sınıfta eylem kelimeleri",
  "ro": "Cuvinte de acțiune în clasă",
  "bg": "Думи за действия в клас"
 },
 "De juf of meester zegt vaak wat je moet **doen**.\n\n**Schrijf**, **knip**, **luister**, **ruim op**, **kleur**.\n\nDoe het woord meteen na: pak een pen als je **schrijven** hoort. Zo onthoud je het.": {
  "en": "The teacher often says what you need to **doen** (do).\n\n**Schrijf** (Write), **knip** (Cut), **luister** (Listen), **ruim op** (Tidy up), **kleur** (Colour).\n\nDo the word right away: pick up a pen when you hear **schrijven** (write). That way you remember it.",
  "ar": "المعلمة أو المعلم يقول لك كثيرًا ماذا **تفعل**.\n\n**اكتب** (Schrijf)، **قُصّ** (knip)، **استمع** (luister)، **رتّب** (ruim op)، **لوّن** (kleur).\n\nقلّد الكلمة فورًا: خذ قلمًا عندما تسمع **يكتب** (schrijven). هكذا تتذكرها.",
  "uk": "Вчителька або вчитель часто каже, що тобі треба **робити**.\n\n**Пиши** (schrijf), **виріж** (knip), **слухай** (luister), **прибери** (ruim op), **розфарбуй** (kleur).\n\nОдразу зроби цю дію: візьми ручку, коли чуєш **писати** (schrijven). Так ти це запам'ятаєш.",
  "tr": "Öğretmen sık sık ne **yapman** gerektiğini söyler.\n\n**Yaz** (schrijf), **kes** (knip), **dinle** (luister), **topla** (ruim op), **boya** (kleur).\n\nKelimeyi hemen yap: **yazmak** (schrijven) kelimesini duyunca bir kalem al. Böyle aklında kalır.",
  "ro": "Doamna sau domnul învățător spune des ce trebuie să **faci**.\n\n**Scrie** (schrijf), **taie** (knip), **ascultă** (luister), **fă ordine** (ruim op), **colorează** (kleur).\n\nFă imediat ce spune cuvântul: ia un pix când auzi **a scrie** (schrijven). Așa ții minte.",
  "bg": "Учителката или учителят често казва какво трябва да **правиш**.\n\n**Пиши** (schrijf), **режи** (knip), **слушай** (luister), **разтреби** (ruim op), **оцвети** (kleur).\n\nВеднага направи това, което казва думата: вземи химикалка, когато чуеш **пиша** (schrijven). Така го запомняш."
 },
 "Doe-woorden": {
  "en": "Action words",
  "ar": "كلمات الفعل",
  "uk": "Слова-дії",
  "tr": "Eylem kelimeleri",
  "ro": "Cuvinte de acțiune",
  "bg": "Думи за действия"
 },
 "Een **doe-woord** zegt wat je **doet**: schrijven, knippen, luisteren.": {
  "en": "A **doe-woord** (action word) says what you **doet** (do): write, cut, listen.",
  "ar": "**كلمة الفعل** (doe-woord) تقول ماذا **تفعل**: يكتب (schrijven)، يقصّ (knippen)، يستمع (luisteren).",
  "uk": "**Слово-дія** (doe-woord) каже, що ти **робиш**: писати, вирізати, слухати.",
  "tr": "Bir **eylem kelimesi** (doe-woord) ne **yaptığını** söyler: yazmak (schrijven), kesmek (knippen), dinlemek (luisteren).",
  "ro": "Un **cuvânt de acțiune** (doe-woord) spune ce **faci**: a scrie, a tăia, a asculta.",
  "bg": "**Дума за действие** (doe-woord) казва какво **правиш**: пиша, режа, слушам."
 },
 "Doe het na": {
  "en": "Do it too",
  "ar": "قلّده",
  "uk": "Зроби так само",
  "tr": "Sen de yap",
  "ro": "Fă la fel",
  "bg": "Направи го и ти"
 },
 "Hoor je **schrijven**? Pak je pen. Hoor je **luisteren**? Wees stil en kijk naar de juf.": {
  "en": "Do you hear **schrijven** (write)? Pick up your pen. Do you hear **luisteren** (listen)? Be quiet and look at the teacher.",
  "ar": "هل تسمع **يكتب** (schrijven)؟ خذ قلمك. هل تسمع **يستمع** (luisteren)؟ اسكت وانظر إلى المعلمة.",
  "uk": "Чуєш **писати** (schrijven)? Візьми ручку. Чуєш **слухати** (luisteren)? Будь тихо і дивись на вчительку.",
  "tr": "**Yazmak** (schrijven) mı duydun? Kalemini al. **Dinlemek** (luisteren) mi duydun? Sessiz ol ve öğretmene bak.",
  "ro": "Auzi **a scrie** (schrijven)? Ia pixul. Auzi **a asculta** (luisteren)? Stai liniștit și uită-te la doamna învățătoare.",
  "bg": "Чуваш **пиша** (schrijven)? Вземи химикалката. Чуваш **слушам** (luisteren)? Бъди тих и гледай учителката."
 },
 "In de klas": {
  "en": "In class",
  "ar": "في الصف",
  "uk": "У класі",
  "tr": "Sınıfta",
  "ro": "În clasă",
  "bg": "В клас"
 },
 "De juf zegt vaak: **Schrijf** je naam. **Knip** het uit. **Ruim** je tafel **op**.": {
  "en": "The teacher often says: **Schrijf** (Write) your name. **Knip** (Cut) it out. **Ruim** your table **op** (tidy up).",
  "ar": "المعلمة تقول كثيرًا: **اكتب** اسمك (Schrijf je naam). **قُصّه** (Knip het uit). **رتّب** طاولتك (**Ruim** je tafel **op**).",
  "uk": "Вчителька часто каже: **Напиши** (schrijf) своє ім'я. **Виріж** (knip) це. **Прибери** (ruim op) свою парту.",
  "tr": "Öğretmen sık sık der: Adını **yaz** (schrijf). Onu **kes** (knip). **Masanı** **topla** (ruim op).",
  "ro": "Doamna învățătoare spune des: **Scrie** (schrijf) numele tău. **Taie** (knip) asta. **Fă ordine** (ruim op) pe banca ta.",
  "bg": "Учителката често казва: **Напиши** (schrijf) името си. **Изрежи** (knip) това. **Разтреби** (ruim op) чина си."
 },
 "schrijven": {
  "en": "to write",
  "ar": "يكتب",
  "uk": "писати",
  "tr": "yazmak",
  "ro": "a scrie",
  "bg": "пиша"
 },
 "Letters maken met een pen of potlood.": {
  "en": "Making letters with a pen or pencil.",
  "ar": "رسم الحروف بقلم حبر أو قلم رصاص.",
  "uk": "Робити букви ручкою або олівцем.",
  "tr": "Kalemle ya da kurşun kalemle harf yapmak.",
  "ro": "A face litere cu un pix sau un creion.",
  "bg": "Правене на букви с химикалка или молив."
 },
 "opruimen": {
  "en": "to tidy up",
  "ar": "يرتّب",
  "uk": "прибирати",
  "tr": "toplamak, toparlamak",
  "ro": "a face ordine",
  "bg": "разтребвам"
 },
 "Alles terugleggen op zijn plek.": {
  "en": "Putting everything back in its place.",
  "ar": "إرجاع كل شيء إلى مكانه.",
  "uk": "Класти все назад на своє місце.",
  "tr": "Her şeyi yerine geri koymak.",
  "ro": "A pune totul înapoi la locul lui.",
  "bg": "Слагане на всичко обратно на мястото му."
 },
 "Doe-woord = wat je doet.": {
  "en": "Action word = what you do.",
  "ar": "كلمة الفعل (doe-woord) = ما تفعله.",
  "uk": "Слово-дія (doe-woord) = те, що ти робиш.",
  "tr": "Eylem kelimesi (doe-woord) = ne yaptığın.",
  "ro": "Cuvânt de acțiune (doe-woord) = ce faci.",
  "bg": "Дума за действие (doe-woord) = това, което правиш."
 },
 "Schrijf je naam.": {
  "en": "Write your name.",
  "ar": "اكتب اسمك.",
  "uk": "Напиши своє ім'я.",
  "tr": "Adını yaz. (Schrijf je naam.)",
  "ro": "Scrie-ți numele.",
  "bg": "Напиши името си."
 },
 "Knip het uit.": {
  "en": "Cut it out.",
  "ar": "قُصّه.",
  "uk": "Виріж це.",
  "tr": "Onu kes. (Knip het uit.)",
  "ro": "Taie-l.",
  "bg": "Изрежи го."
 },
 "Doe het woord meteen na met je handen.": {
  "en": "Do the word right away with your hands.",
  "ar": "قلّد الكلمة فورًا بيديك.",
  "uk": "Одразу покажи це слово руками.",
  "tr": "Kelimeyi hemen ellerinle yap.",
  "ro": "Fă imediat cuvântul cu mâinile.",
  "bg": "Веднага покажи думата с ръце."
 },
 "Letters maken met een pen = schrijven.": {
  "en": "Making letters with a pen = to write.",
  "ar": "رسم الحروف بالقلم = يكتب (schrijven).",
  "uk": "Робити букви ручкою = писати (schrijven).",
  "tr": "Kalemle harf yapmak = yazmak (schrijven).",
  "ro": "A face litere cu un pix = a scrie (schrijven).",
  "bg": "Правене на букви с химикалка = пиша (schrijven)."
 },
 "Rekentaal — de woorden achter de sommen (nieuwkomers)": {
  "en": "Math words — the words behind the sums (newcomers)",
  "ar": "لغة الحساب — الكلمات وراء المسائل (للقادمين الجدد)",
  "uk": "Мова математики — слова в прикладах (для новеньких)",
  "tr": "Matematik dili — işlemlerin arkasındaki kelimeler (yeni gelenler)",
  "ro": "Limbajul matematicii — cuvintele din spatele exercițiilor (nou-veniți)",
  "bg": "Езикът на математиката — думите зад задачите (новодошли)"
 },
 "Meer, minder, samen, weg, over, keer en verdelen: de woorden die in elke rekenles terugkomen. Met steun in je eigen taal. ~10 min.": {
  "en": "More, less, together, away, left over, times, and share: the words that come back in every math lesson. With help in your own language. ~10 min.",
  "ar": "أكثر (meer)، أقل (minder)، معًا (samen)، ذهب (weg)، باقٍ (over)، ضرب (keer) وتقسيم (verdelen): كلمات تأتي في كل درس حساب. مع مساعدة بلغتك. ~10 دقائق.",
  "uk": "Більше, менше, разом, геть, залишилось, рази і ділити: слова, які є на кожному уроці математики. З допомогою твоєю мовою. ~10 хв.",
  "tr": "Daha çok (meer), daha az (minder), toplam (samen), gitti (weg), kalan (over), kere (keer) ve paylaştırmak (verdelen): her matematik dersinde geçen kelimeler. Kendi dilinde yardımla. ~10 dk.",
  "ro": "Mai mult, mai puțin, împreună, plecat, rămas, ori și a împărți: cuvintele care apar la fiecare oră de matematică. Cu sprijin în limba ta. ~10 min.",
  "bg": "Повече, по-малко, заедно, няма го, остава, по и делене: думите, които се връщат във всеки урок по математика. С помощ на твоя език. ~10 мин."
 },
 "Meer, minder, evenveel": {
  "en": "More, less, the same",
  "ar": "أكثر، أقل، متساوٍ",
  "uk": "Більше, менше, порівну",
  "tr": "Daha çok, daha az, eşit (meer, minder, evenveel)",
  "ro": "Mai mult, mai puțin, la fel de mult",
  "bg": "Повече, по-малко, поравно"
 },
 "Samen, weg, over": {
  "en": "Together, away, left over",
  "ar": "معًا، ذهب، باقٍ",
  "uk": "Разом, геть, залишилось",
  "tr": "Toplam, gitti, kalan (samen, weg, over)",
  "ro": "Împreună, plecat, rămas",
  "bg": "Заедно, няма го, остава"
 },
 "Keer en verdelen": {
  "en": "Times and share",
  "ar": "الضرب والتقسيم",
  "uk": "Рази і ділити",
  "tr": "Kere ve paylaştırmak (keer, verdelen)",
  "ro": "Ori și a împărți",
  "bg": "По и делене"
 },
 "Welke groep is groter?\n\n**Meer**: een groter aantal. **Minder**: een kleiner aantal. **Evenveel**: hetzelfde aantal.\n\n**De meeste** = het allergrootste. **De minste** = het allerkleinste.": {
  "en": "Which group is bigger?\n\n**Meer** (More): a bigger number. **Minder** (Less): a smaller number. **Evenveel** (The same): the same number.\n\n**De meeste** (The most) = the biggest of all. **De minste** (The least) = the smallest of all.",
  "ar": "أي مجموعة أكبر؟\n\n**أكثر** (Meer): عدد أكبر. **أقل** (Minder): عدد أصغر. **متساوٍ** (Evenveel): نفس العدد.\n\n**الأكثر** (De meeste) = الأكبر من الكل. **الأقل** (De minste) = الأصغر من الكل.",
  "uk": "Яка група більша?\n\n**Більше** (meer): більша кількість. **Менше** (minder): менша кількість. **Порівну** (evenveel): однакова кількість.\n\n**Найбільше** (de meeste) = більше за всіх. **Найменше** (de minste) = менше за всіх.",
  "tr": "Hangi grup daha büyük?\n\n**Daha çok** (meer): daha büyük bir sayı. **Daha az** (minder): daha küçük bir sayı. **Eşit** (evenveel): aynı sayı.\n\n**En çok** (de meeste) = en büyüğü. **En az** (de minste) = en küçüğü.",
  "ro": "Care grup este mai mare?\n\n**Mai mult** (meer): un număr mai mare. **Mai puțin** (minder): un număr mai mic. **La fel de mult** (evenveel): același număr.\n\n**Cel mai mult** (de meeste) = cel mai mare dintre toate. **Cel mai puțin** (de minste) = cel mai mic dintre toate.",
  "bg": "Коя група е по-голяма?\n\n**Повече** (meer): по-голямо количество. **По-малко** (minder): по-малко количество. **Поравно** (evenveel): същото количество.\n\n**Най-много** (de meeste) = най-голямото от всички. **Най-малко** (de minste) = най-малкото от всички."
 },
 "Ali heeft 5 knikkers. Sam heeft 3 knikkers. Wie heeft meer?": {
  "en": "Ali has 5 marbles. Sam has 3 marbles. Who has more?",
  "ar": "علي عنده 5 كرات زجاجية. سام عنده 3 كرات زجاجية. من عنده أكثر؟",
  "uk": "В Алі 5 кульок. У Сема 3 кульки. У кого більше?",
  "tr": "Ali'nin 5 bilyesi var. Sam'in 3 bilyesi var. Kimde daha çok var?",
  "ro": "Ali are 5 bile. Sam are 3 bile. Cine are mai multe?",
  "bg": "Али има 5 топчета. Сам има 3 топчета. Кой има повече?"
 },
 "Meer = het grotere getal. Welk getal is groter: 5 of 3?": {
  "en": "More = the bigger number. Which number is bigger: 5 or 3?",
  "ar": "أكثر (meer) = العدد الأكبر. أي عدد أكبر: 5 أو 3؟",
  "uk": "Більше = більше число. Яке число більше: 5 чи 3?",
  "tr": "Daha çok (meer) = en büyük sayı. Hangi sayı daha büyük: 5 mi 3 mü?",
  "ro": "Mai mult = numărul mai mare. Care număr este mai mare: 5 sau 3?",
  "bg": "Повече = по-голямото число. Кое число е по-голямо: 5 или 3?"
 },
 "Meer": {
  "en": "More",
  "ar": "أكثر",
  "uk": "Більше",
  "tr": "Daha çok",
  "ro": "Mai mult",
  "bg": "Повече"
 },
 "**Meer** betekent: een groter aantal. 5 is **meer** dan 3.": {
  "en": "**Meer** (More) means: a bigger number. 5 is **meer** (more) than 3.",
  "ar": "**أكثر** (Meer) يعني: عدد أكبر. 5 **أكثر** من 3.",
  "uk": "**Більше** (meer) означає: більша кількість. 5 — це **більше**, ніж 3.",
  "tr": "**Daha çok** (meer) demek: daha büyük bir sayı. 5, 3'ten **daha çok**.",
  "ro": "**Mai mult** (meer) înseamnă: un număr mai mare. 5 este **mai mult** decât 3.",
  "bg": "**Повече** (meer) означава: по-голямо количество. 5 е **повече** от 3."
 },
 "Minder": {
  "en": "Less",
  "ar": "أقل",
  "uk": "Менше",
  "tr": "Daha az",
  "ro": "Mai puțin",
  "bg": "По-малко"
 },
 "**Minder** betekent: een kleiner aantal. 3 is **minder** dan 5.": {
  "en": "**Minder** (Less) means: a smaller number. 3 is **minder** (less) than 5.",
  "ar": "**أقل** (Minder) يعني: عدد أصغر. 3 **أقل** من 5.",
  "uk": "**Менше** (minder) означає: менша кількість. 3 — це **менше**, ніж 5.",
  "tr": "**Daha az** (minder) demek: daha küçük bir sayı. 3, 5'ten **daha az**.",
  "ro": "**Mai puțin** (minder) înseamnă: un număr mai mic. 3 este **mai puțin** decât 5.",
  "bg": "**По-малко** (minder) означава: по-малко количество. 3 е **по-малко** от 5."
 },
 "Evenveel": {
  "en": "The same",
  "ar": "متساوٍ",
  "uk": "Порівну",
  "tr": "Eşit",
  "ro": "La fel de mult",
  "bg": "Поравно"
 },
 "**Evenveel** betekent: hetzelfde aantal. 4 en 4 is **evenveel**.": {
  "en": "**Evenveel** (The same) means: the same number. 4 and 4 is **evenveel** (the same).",
  "ar": "**متساوٍ** (Evenveel) يعني: نفس العدد. 4 و 4 **متساويان**.",
  "uk": "**Порівну** (evenveel) означає: однакова кількість. 4 і 4 — це **порівну**.",
  "tr": "**Eşit** (evenveel) demek: aynı sayı. 4 ve 4 **eşit**.",
  "ro": "**La fel de mult** (evenveel) înseamnă: același număr. 4 și 4 este **la fel de mult**.",
  "bg": "**Поравно** (evenveel) означава: същото количество. 4 и 4 е **поравно**."
 },
 "meer": {
  "en": "more",
  "ar": "أكثر",
  "uk": "більше",
  "tr": "daha çok",
  "ro": "mai mult",
  "bg": "повече"
 },
 "Een groter aantal.": {
  "en": "A bigger number.",
  "ar": "عدد أكبر.",
  "uk": "Більша кількість.",
  "tr": "Daha büyük bir sayı.",
  "ro": "Un număr mai mare.",
  "bg": "По-голямо количество."
 },
 "minder": {
  "en": "less",
  "ar": "أقل",
  "uk": "менше",
  "tr": "daha az",
  "ro": "mai puțin",
  "bg": "по-малко"
 },
 "Een kleiner aantal.": {
  "en": "A smaller number.",
  "ar": "عدد أصغر.",
  "uk": "Менша кількість.",
  "tr": "Daha küçük bir sayı.",
  "ro": "Un număr mai mic.",
  "bg": "По-малко количество."
 },
 "evenveel": {
  "en": "the same amount",
  "ar": "متساوٍ",
  "uk": "порівну",
  "tr": "eşit",
  "ro": "la fel de mult",
  "bg": "поравно"
 },
 "Hetzelfde aantal.": {
  "en": "The same number.",
  "ar": "نفس العدد.",
  "uk": "Однакова кількість.",
  "tr": "Aynı sayı.",
  "ro": "Același număr.",
  "bg": "Същото количество."
 },
 "Meer = groter getal. Minder = kleiner getal. Evenveel = hetzelfde getal.": {
  "en": "More = bigger number. Less = smaller number. The same = the same number.",
  "ar": "أكثر (meer) = عدد أكبر. أقل (minder) = عدد أصغر. متساوٍ (evenveel) = نفس العدد.",
  "uk": "Більше (meer) = більше число. Менше (minder) = менше число. Порівну (evenveel) = однакове число.",
  "tr": "Daha çok (meer) = daha büyük sayı. Daha az (minder) = daha küçük sayı. Eşit (evenveel) = aynı sayı.",
  "ro": "Mai mult (meer) = număr mai mare. Mai puțin (minder) = număr mai mic. La fel de mult (evenveel) = același număr.",
  "bg": "Повече (meer) = по-голямо число. По-малко (minder) = по-малко число. Поравно (evenveel) = същото число."
 },
 "7 is meer dan 2.": {
  "en": "7 is more than 2.",
  "ar": "7 أكثر من 2.",
  "uk": "7 — це більше, ніж 2.",
  "tr": "7, 2'den daha çok.",
  "ro": "7 este mai mult decât 2.",
  "bg": "7 е повече от 2."
 },
 "1 is minder dan 6.": {
  "en": "1 is less than 6.",
  "ar": "1 أقل من 6.",
  "uk": "1 — це менше, ніж 6.",
  "tr": "1, 6'dan daha az.",
  "ro": "1 este mai puțin decât 6.",
  "bg": "1 е по-малко от 6."
 },
 "Tel allebei. Welk getal komt later bij het tellen? Dat is meer.": {
  "en": "Count both. Which number comes later when counting? That is more.",
  "ar": "عُدّ الاثنين. أي عدد يأتي بعد الآخر عند العدّ؟ هذا هو الأكثر (meer).",
  "uk": "Порахуй обидва. Яке число йде далі, коли рахуєш? Це більше.",
  "tr": "İkisini de say. Sayarken hangi sayı daha sonra gelir? O daha çok.",
  "ro": "Numără-le pe amândouă. Care număr vine mai târziu la numărat? Acela este mai mult.",
  "bg": "Преброй и двете. Кое число идва по-късно при броене? То е повече."
 },
 "Kijk welk getal groter is.": {
  "en": "Look at which number is bigger.",
  "ar": "انظر أي عدد أكبر.",
  "uk": "Подивись, яке число більше.",
  "tr": "Hangi sayının daha büyük olduğuna bak.",
  "ro": "Uită-te care număr este mai mare.",
  "bg": "Виж кое число е по-голямо."
 },
 "5 of 3: welk getal is groter?": {
  "en": "5 or 3: which number is bigger?",
  "ar": "5 أو 3: أي عدد أكبر؟",
  "uk": "5 чи 3: яке число більше?",
  "tr": "5 mi 3 mü: hangi sayı daha büyük?",
  "ro": "5 sau 3: care număr este mai mare?",
  "bg": "5 или 3: кое число е по-голямо?"
 },
 "5 is meer dan 3.": {
  "en": "5 is more than 3.",
  "ar": "5 أكثر من 3.",
  "uk": "5 — це більше, ніж 3.",
  "tr": "5, 3'ten daha çok.",
  "ro": "5 este mai mult decât 3.",
  "bg": "5 е повече от 3."
 },
 "Ali": {
  "en": "Ali",
  "ar": "علي",
  "uk": "Алі",
  "tr": "Ali",
  "ro": "Ali",
  "bg": "Али"
 },
 "Sam": {
  "en": "Sam",
  "ar": "سام",
  "uk": "Сем",
  "tr": "Sam",
  "ro": "Sam",
  "bg": "Сам"
 },
 "Ze hebben evenveel.": {
  "en": "They have the same.",
  "ar": "عندهما نفس العدد.",
  "uk": "У них порівну.",
  "tr": "İkisinde eşit var.",
  "ro": "Au la fel de mult.",
  "bg": "Имат поравно."
 },
 "Lina heeft 2 appels. Tom heeft 6 appels. Wie heeft minder?": {
  "en": "Lina has 2 apples. Tom has 6 apples. Who has less?",
  "ar": "لينا عندها 2 من التفاح. توم عنده 6 من التفاح. من عنده أقل؟",
  "uk": "У Ліни 2 яблука. У Тома 6 яблук. У кого менше?",
  "tr": "Lina'nın 2 elması var. Tom'un 6 elması var. Kimde daha az var?",
  "ro": "Lina are 2 mere. Tom are 6 mere. Cine are mai puține?",
  "bg": "Лина има 2 ябълки. Том има 6 ябълки. Кой има по-малко?"
 },
 "Minder = het kleinere getal. Welk getal is kleiner: 2 of 6?": {
  "en": "Less = the smallest number. Which number is smaller: 2 or 6?",
  "ar": "أقل (minder) = العدد الأصغر. أي عدد أصغر: 2 أو 6؟",
  "uk": "Менше = менше число. Яке число менше: 2 чи 6?",
  "tr": "Daha az (minder) = en küçük sayı. Hangi sayı daha küçük: 2 mi 6 mı?",
  "ro": "Mai puțin = numărul mai mic. Care număr este mai mic: 2 sau 6?",
  "bg": "По-малко = по-малкото число. Кое число е по-малко: 2 или 6?"
 },
 "Lina": {
  "en": "Lina",
  "ar": "لينا",
  "uk": "Ліна",
  "tr": "Lina",
  "ro": "Lina",
  "bg": "Лина"
 },
 "Tom": {
  "en": "Tom",
  "ar": "توم",
  "uk": "Том",
  "tr": "Tom",
  "ro": "Tom",
  "bg": "Том"
 },
 "Noor heeft 4 pennen. Adam heeft 4 pennen. Wat is waar?": {
  "en": "Noor has 4 pens. Adam has 4 pens. What is true?",
  "ar": "نور عندها 4 أقلام. آدم عنده 4 أقلام. ما الصحيح؟",
  "uk": "У Нур 4 ручки. В Адама 4 ручки. Що правда?",
  "tr": "Noor'un 4 kalemi var. Adam'ın 4 kalemi var. Hangisi doğru?",
  "ro": "Noor are 4 pixuri. Adam are 4 pixuri. Ce este adevărat?",
  "bg": "Нур има 4 химикалки. Адам има 4 химикалки. Кое е вярно?"
 },
 "Kijk naar de twee getallen. Zijn ze hetzelfde?": {
  "en": "Look at the two numbers. Are they the same?",
  "ar": "انظر إلى العددين. هل هما نفس العدد؟",
  "uk": "Подивись на два числа. Вони однакові?",
  "tr": "İki sayıya bak. Aynılar mı?",
  "ro": "Uită-te la cele două numere. Sunt la fel?",
  "bg": "Погледни двете числа. Еднакви ли са?"
 },
 "Noor heeft meer.": {
  "en": "Noor has more.",
  "ar": "نور عندها أكثر.",
  "uk": "У Нур більше.",
  "tr": "Noor'da daha çok var.",
  "ro": "Noor are mai multe.",
  "bg": "Нур има повече."
 },
 "Adam heeft meer.": {
  "en": "Adam has more.",
  "ar": "آدم عنده أكثر.",
  "uk": "В Адама більше.",
  "tr": "Adam'da daha çok var.",
  "ro": "Adam are mai multe.",
  "bg": "Адам има повече."
 },
 "Eva heeft 3 boeken. Omar heeft 8 boeken. Mila heeft 5 boeken. Wie heeft de meeste boeken?": {"en":"Eva has 3 books. Omar has 8 books. Mila has 5 books. Who has the most books?","ar":"إيفا عندها 3 كتب. عمر عنده 8 كتب. ميلا عندها 5 كتب. من عنده أكثر عدد من الكتب؟","uk":"У Еви 3 книжки. В Омара 8 книжок. У Міли 5 книжок. У кого найбільше книжок?","tr":"Eva'nın 3 kitabı var. Omar'ın 8 kitabı var. Mila'nın 5 kitabı var. En çok kitap kimde?","ro":"Eva are 3 cărți. Omar are 8 cărți. Mila are 5 cărți. Cine are cele mai multe cărți?","bg":"Ева има 3 книги. Омар има 8 книги. Мила има 5 книги. Кой има най-много книги?"},
 "De meeste = het allergrootste getal van de drie.": {
  "en": "The most = the biggest number of the three.",
  "ar": "الأكثر (de meeste) = أكبر عدد من الثلاثة.",
  "uk": "Найбільше (de meeste) = найбільше число з трьох.",
  "tr": "En çok (de meeste) = üçünün en büyük sayısı.",
  "ro": "Cele mai multe (de meeste) = cel mai mare număr dintre cele trei.",
  "bg": "Най-много (de meeste) = най-голямото число от трите."
 },
 "Omar": {
  "en": "Omar",
  "ar": "عمر",
  "uk": "Омар",
  "tr": "Omar",
  "ro": "Omar",
  "bg": "Омар"
 },
 "Eva": {
  "en": "Eva",
  "ar": "إيفا",
  "uk": "Єва",
  "tr": "Eva",
  "ro": "Eva",
  "bg": "Ева"
 },
 "Mila": {
  "en": "Mila",
  "ar": "ميلا",
  "uk": "Міла",
  "tr": "Mila",
  "ro": "Mila",
  "bg": "Мила"
 },
 "Jan heeft 7 stickers. Sara heeft 2 stickers. Yusuf heeft 4 stickers. Wie heeft de minste stickers?": {"en":"Jan has 7 stickers. Sara has 2 stickers. Yusuf has 4 stickers. Who has the fewest stickers?","ar":"يان عنده 7 ملصقات. سارة عندها ملصقان. يوسف عنده 4 ملصقات. من عنده أقل عدد من الملصقات؟","uk":"У Яна 7 наліпок. У Сари 2 наліпки. У Юсуфа 4 наліпки. У кого найменше наліпок?","tr":"Jan'ın 7 çıkartması var. Sara'nın 2 çıkartması var. Yusuf'un 4 çıkartması var. En az çıkartma kimde?","ro":"Jan are 7 abțibilduri. Sara are 2 abțibilduri. Yusuf are 4 abțibilduri. Cine are cele mai puține abțibilduri?","bg":"Ян има 7 стикера. Сара има 2 стикера. Юсуф има 4 стикера. Кой има най-малко стикери?"},
 "De minste = het allerkleinste getal van de drie.": {
  "en": "The fewest = the smallest number of the three.",
  "ar": "الأقل (de minste) = أصغر عدد من الثلاثة.",
  "uk": "Найменше (de minste) = найменше число з трьох.",
  "tr": "En az (de minste) = üçünün en küçük sayısı.",
  "ro": "Cele mai puține (de minste) = cel mai mic număr dintre cele trei.",
  "bg": "Най-малко (de minste) = най-малкото число от трите."
 },
 "Sara": {
  "en": "Sara",
  "ar": "سارة",
  "uk": "Сара",
  "tr": "Sara",
  "ro": "Sara",
  "bg": "Сара"
 },
 "Jan": {
  "en": "Jan",
  "ar": "يان",
  "uk": "Ян",
  "tr": "Jan",
  "ro": "Jan",
  "bg": "Ян"
 },
 "Yusuf": {
  "en": "Yusuf",
  "ar": "يوسف",
  "uk": "Юсуф",
  "tr": "Yusuf",
  "ro": "Yusuf",
  "bg": "Юсуф"
 },
 "Rekenwoorden zeggen welke som je maakt.\n\n**Samen** en **erbij** = plus (+).\n**Weg**, **eraf** en **over** = min (−).\n\nZoek eerst het rekenwoord. Dan weet je de som.": {
  "en": "Math words tell you which sum to make.\n\n**Samen** (together) and **erbij** (added) = plus (+).\n**Weg** (away), **eraf** (taken off) and **over** (left) = minus (−).\n\nFirst find the math word. Then you know the sum.",
  "ar": "كلمات الحساب تقول لك أي مسألة تحل.\n\n**معًا** (Samen) و**زيادة** (erbij) = جمع (+).\n**ذهب** (Weg) و**نقص** (eraf) و**باقٍ** (over) = طرح (−).\n\nابحث أولًا عن كلمة الحساب. عندها تعرف المسألة.",
  "uk": "Слова з математики кажуть, який приклад ти робиш.\n\n**Разом** (samen) і **ще** (erbij) = плюс (+).\n**Геть** (weg), **забрати** (eraf) і **залишилось** (over) = мінус (−).\n\nСпочатку знайди це слово. Тоді ти знаєш приклад.",
  "tr": "Matematik kelimeleri hangi işlemi yapacağını söyler.\n\n**Toplam** (samen) ve **eklenince** (erbij) = artı (+).\n**Gitti** (weg), **çıkınca** (eraf) ve **kalan** (over) = eksi (−).\n\nÖnce matematik kelimesini bul. Sonra işlemi bilirsin.",
  "ro": "Cuvintele de la matematică îți spun ce exercițiu faci.\n\n**Împreună** (samen) și **în plus** (erbij) = plus (+).\n**Plecat** (weg), **scăzut** (eraf) și **rămas** (over) = minus (−).\n\nCaută mai întâi cuvântul de la matematică. Atunci știi exercițiul.",
  "bg": "Думите от математиката казват коя задача правиш.\n\n**Заедно** (samen) и **в повече** (erbij) = плюс (+).\n**Няма го** (weg), **извадено** (eraf) и **остава** (over) = минус (−).\n\nПърво намери думата от математиката. Тогава знаеш задачата."
 },
 "Je hebt 3 ballen. Je krijgt er 2 bij. Hoeveel ballen heb je samen?": {
  "en": "You have 3 balls. You get 2 more. How many balls do you have together?",
  "ar": "عندك 3 كرات. تأخذ 2 زيادة. كم كرة عندك معًا؟",
  "uk": "У тебе 3 м'ячі. Тобі дають ще 2. Скільки м'ячів у тебе разом?",
  "tr": "3 topun var. 2 tane daha alıyorsun. Toplam kaç topun var?",
  "ro": "Ai 3 mingi. Mai primești 2. Câte mingi ai împreună?",
  "bg": "Имаш 3 топки. Получаваш още 2. Колко топки имаш заедно?"
 },
 "Erbij en samen = plus. 3 + 2.": {
  "en": "Added and together = plus. 3 + 2.",
  "ar": "زيادة (erbij) ومعًا (samen) = جمع. 3 + 2.",
  "uk": "Ще (erbij) і разом (samen) = плюс. 3 + 2.",
  "tr": "Eklenince (erbij) ve toplam (samen) = artı. 3 + 2.",
  "ro": "În plus (erbij) și împreună (samen) = plus. 3 + 2.",
  "bg": "В повече (erbij) и заедно (samen) = плюс. 3 + 2."
 },
 "Samen": {
  "en": "Together",
  "ar": "معًا",
  "uk": "Разом",
  "tr": "Toplam",
  "ro": "Împreună",
  "bg": "Заедно"
 },
 "**Samen** en **erbij** betekenen: **plus** (+). Alles bij elkaar.": {
  "en": "**Samen** (together) and **erbij** (added) mean: **plus** (+). Everything combined.",
  "ar": "**معًا** (Samen) و**زيادة** (erbij) تعنيان: **جمع** (plus) (+). كل شيء مع بعضه.",
  "uk": "**Разом** (samen) і **ще** (erbij) означають: **плюс** (+). Усе докупи.",
  "tr": "**Toplam** (samen) ve **eklenince** (erbij) demek: **artı** (plus) (+). Hepsi bir arada.",
  "ro": "**Împreună** (samen) și **în plus** (erbij) înseamnă: **plus** (+). Totul la un loc.",
  "bg": "**Заедно** (samen) и **в повече** (erbij) означават: **плюс** (+). Всичко накуп."
 },
 "Weg": {
  "en": "Away",
  "ar": "ذهب",
  "uk": "Геть",
  "tr": "Gitti",
  "ro": "Plecat",
  "bg": "Няма го"
 },
 "**Weg**, **eraf** en **opeten** betekenen: **min** (−). Er gaat iets af.": {
  "en": "**Weg** (away), **eraf** (taken off) and **opeten** (eaten up) mean: **min** (minus) (−). Something goes away.",
  "ar": "**ذهب** (Weg) و**نقص** (eraf) و**أكل** (opeten) تعني: **طرح** (min) (−). شيء ما ينقص.",
  "uk": "**Геть** (weg), **забрати** (eraf) і **з'їсти** (opeten) означають: **мінус** (−). Щось забирають.",
  "tr": "**Gitti** (weg), **çıkınca** (eraf) ve **yemek** (opeten) demek: **eksi** (min) (−). Bir şey eksilir.",
  "ro": "**Plecat** (weg), **scăzut** (eraf) și **mâncat** (opeten) înseamnă: **minus** (−). Ceva se ia.",
  "bg": "**Няма го** (weg), **извадено** (eraf) и **изядено** (opeten) означават: **минус** (−). Нещо се маха."
 },
 "Over": {
  "en": "Left",
  "ar": "باقٍ",
  "uk": "Залишилось",
  "tr": "Kalan",
  "ro": "Rămas",
  "bg": "Остава"
 },
 "**Over** betekent: wat je nog hebt, als er iets weg is. Dat is ook **min**.": {
  "en": "**Over** (Left) means: what you still have, when something is gone. That is also **min** (minus).",
  "ar": "**باقٍ** (Over) يعني: ما بقي عندك بعد أن ذهب شيء. هذا أيضًا **طرح** (min).",
  "uk": "**Залишилось** (over) означає: що в тебе ще є, коли щось забрали. Це теж **мінус**.",
  "tr": "**Kalan** (over) demek: bir şey gidince hâlâ elinde olan. Bu da **eksi** (min).",
  "ro": "**Rămas** (over) înseamnă: ce mai ai, când ceva a plecat. Asta este tot **minus**.",
  "bg": "**Остава** (over) означава: това, което още имаш, когато нещо го няма. Това също е **минус**."
 },
 "Het is er niet meer. Min.": {
  "en": "It is not there anymore. Minus.",
  "ar": "لم يعد موجودًا. طرح.",
  "uk": "Цього вже немає. Мінус.",
  "tr": "Artık yok. Eksi.",
  "ro": "Nu mai este acolo. Minus.",
  "bg": "Вече го няма. Минус."
 },
 "Samen, erbij = plus. Weg, eraf, over = min.": {
  "en": "Together, added = plus. Away, taken off, left = minus.",
  "ar": "معًا (samen)، زيادة (erbij) = جمع. ذهب (weg)، نقص (eraf)، باقٍ (over) = طرح.",
  "uk": "Разом (samen), ще (erbij) = плюс. Геть (weg), забрати (eraf), залишилось (over) = мінус.",
  "tr": "Toplam (samen), eklenince (erbij) = artı. Gitti (weg), çıkınca (eraf), kalan (over) = eksi.",
  "ro": "Împreună (samen), în plus (erbij) = plus. Plecat (weg), scăzut (eraf), rămas (over) = minus.",
  "bg": "Заедно (samen), в повече (erbij) = плюс. Няма го (weg), извадено (eraf), остава (over) = минус."
 },
 "3 en 2 samen: 3 + 2 = 5.": {
  "en": "3 and 2 together: 3 + 2 = 5.",
  "ar": "3 و 2 معًا: 3 + 2 = 5.",
  "uk": "3 і 2 разом: 3 + 2 = 5.",
  "tr": "3 ve 2 toplam: 3 + 2 = 5.",
  "ro": "3 și 2 împreună: 3 + 2 = 5.",
  "bg": "3 и 2 заедно: 3 + 2 = 5."
 },
 "6 appels, 2 weg: 6 − 2 = 4 over.": {
  "en": "6 apples, 2 away: 6 − 2 = 4 left.",
  "ar": "6 تفاحات، 2 ذهبت: 6 − 2 = 4 باقية.",
  "uk": "6 яблук, 2 геть: 6 − 2 = 4 залишилось.",
  "tr": "6 elma, 2 gitti: 6 − 2 = 4 kalan.",
  "ro": "6 mere, 2 plecate: 6 − 2 = 4 rămase.",
  "bg": "6 ябълки, 2 ги няма: 6 − 2 = 4 остават."
 },
 "Zoek het rekenwoord in de zin. Dat zegt: plus of min.": {
  "en": "Find the math word in the sentence. That tells you: plus or minus.",
  "ar": "ابحث عن كلمة الحساب في الجملة. هي تقول: جمع أو طرح.",
  "uk": "Знайди слово з математики в реченні. Воно каже: плюс чи мінус.",
  "tr": "Cümlede matematik kelimesini bul. O sana söyler: artı mı eksi mi.",
  "ro": "Caută cuvântul de la matematică în propoziție. El îți spune: plus sau minus.",
  "bg": "Намери думата от математиката в изречението. Тя казва: плюс или минус."
 },
 "Je krijgt er 2 bij. Tel 2 verder vanaf 3.": {
  "en": "You get 2 more. Count 2 further from 3.",
  "ar": "تأخذ 2 زيادة. عُدّ 2 بعد 3.",
  "uk": "Тобі дають ще 2. Рахуй далі на 2 від 3.",
  "tr": "2 tane daha alıyorsun. 3'ten 2 ileri say.",
  "ro": "Mai primești 2. Numără 2 mai departe de la 3.",
  "bg": "Получаваш още 2. Брой 2 нататък от 3."
 },
 "Je hebt 6 appels. Je eet er 2 op. Hoeveel appels heb je over?": {
  "en": "You have 6 apples. You eat 2 of them. How many apples do you have left?",
  "ar": "عندك 6 تفاحات. تأكل 2 منها. كم تفاحة بقيت عندك؟",
  "uk": "У тебе 6 яблук. Ти з'їдаєш 2. Скільки яблук у тебе залишилось?",
  "tr": "6 elman var. 2 tanesini yiyorsun. Kaç elman kaldı?",
  "ro": "Ai 6 mere. Mănânci 2. Câte mere îți rămân?",
  "bg": "Имаш 6 ябълки. Изяждаш 2. Колко ябълки ти остават?"
 },
 "Opeten = weg = min. Over = wat je nog hebt. 6 − 2.": {
  "en": "Eaten up = away = minus. Left = what you still have. 6 − 2.",
  "ar": "أكل (opeten) = ذهب (weg) = طرح. باقٍ (over) = ما بقي عندك. 6 − 2.",
  "uk": "З'їсти (opeten) = геть (weg) = мінус. Залишилось (over) = що в тебе ще є. 6 − 2.",
  "tr": "Yemek (opeten) = gitti (weg) = eksi. Kalan (over) = hâlâ elinde olan. 6 − 2.",
  "ro": "Mâncat (opeten) = plecat (weg) = minus. Rămas (over) = ce mai ai. 6 − 2.",
  "bg": "Изядено (opeten) = няма го (weg) = минус. Остава (over) = това, което още имаш. 6 − 2."
 },
 "Wat betekent het woord 'samen' bij een som?": {
  "en": "What does the word 'together' mean in a sum?",
  "ar": "ماذا تعني كلمة 'samen' (معًا) في المسألة؟",
  "uk": "Що означає слово 'samen' (разом) у прикладі?",
  "tr": "İşlemde 'samen' (toplam) kelimesi ne demek?",
  "ro": "Ce înseamnă cuvântul 'samen' (împreună) într-un exercițiu?",
  "bg": "Какво означава думата 'samen' (заедно) в задача?"
 },
 "Samen = alles bij elkaar.": {
  "en": "Together = everything combined.",
  "ar": "معًا (samen) = كل شيء مع بعضه.",
  "uk": "Разом (samen) = усе докупи.",
  "tr": "Toplam (samen) = hepsi bir arada.",
  "ro": "Împreună (samen) = totul la un loc.",
  "bg": "Заедно (samen) = всичко накуп."
 },
 "plus (+)": {
  "en": "plus (+)",
  "ar": "جمع (+)",
  "uk": "плюс (+)",
  "tr": "artı (+)",
  "ro": "plus (+)",
  "bg": "плюс (+)"
 },
 "min (−)": {
  "en": "minus (−)",
  "ar": "طرح (−)",
  "uk": "мінус (−)",
  "tr": "eksi (−)",
  "ro": "minus (−)",
  "bg": "минус (−)"
 },
 "keer (×)": {
  "en": "times (×)",
  "ar": "ضرب (×)",
  "uk": "помножити (×)",
  "tr": "kere (×)",
  "ro": "ori (×)",
  "bg": "по (×)"
 },
 "Wat betekent het woord 'weg' bij een som?": {
  "en": "What does the word 'away' mean in a sum?",
  "ar": "ماذا تعني كلمة 'weg' (ذهب) في المسألة؟",
  "uk": "Що означає слово 'weg' (геть) у прикладі?",
  "tr": "İşlemde 'weg' (gitti) kelimesi ne demek?",
  "ro": "Ce înseamnă cuvântul 'weg' (plecat) într-un exercițiu?",
  "bg": "Какво означава думата 'weg' (няма го) в задача?"
 },
 "Weg = er gaat iets af.": {
  "en": "Away = something goes away.",
  "ar": "ذهب (weg) = شيء ما ينقص.",
  "uk": "Геть (weg) = щось забирають.",
  "tr": "Gitti (weg) = bir şey eksilir.",
  "ro": "Plecat (weg) = ceva se ia.",
  "bg": "Няма го (weg) = нещо се маха."
 },
 "Er zitten 8 vogels in een boom. Er vliegen 3 vogels weg. Hoeveel vogels zijn er over?": {
  "en": "There are 8 birds in a tree. 3 birds fly away. How many birds are left?",
  "ar": "على الشجرة 8 عصافير. طارت 3 عصافير. كم عصفورًا بقي؟",
  "uk": "На дереві сидять 8 пташок. 3 пташки відлітають. Скільки пташок залишилось?",
  "tr": "Bir ağaçta 8 kuş var. 3 kuş uçup gidiyor. Kaç kuş kaldı?",
  "ro": "Într-un copac sunt 8 păsări. 3 păsări zboară. Câte păsări rămân?",
  "bg": "На едно дърво има 8 птици. 3 птици отлитат. Колко птици остават?"
 },
 "Wegvliegen = weg = min. 8 − 3.": {
  "en": "Flying away = away = minus. 8 − 3.",
  "ar": "طار (wegvliegen) = ذهب (weg) = طرح. 8 − 3.",
  "uk": "Відлітати (wegvliegen) = геть (weg) = мінус. 8 − 3.",
  "tr": "Uçup gitmek (wegvliegen) = gitti (weg) = eksi. 8 − 3.",
  "ro": "A zbura (wegvliegen) = plecat (weg) = minus. 8 − 3.",
  "bg": "Отлитат (wegvliegen) = няма го (weg) = минус. 8 − 3."
 },
 "**Keer** (×) = groepjes van hetzelfde. 3 keer 2 = 2 + 2 + 2.\n\n**Eerlijk verdelen** = iedereen krijgt evenveel.\n\n**De helft** = in twee gelijke stukken.": {
  "en": "**Keer** (Times) (×) = groups of the same thing. 3 times 2 = 2 + 2 + 2.\n\n**Eerlijk verdelen** (Sharing fairly) = everyone gets the same.\n\n**De helft** (Half) = in two equal parts.",
  "ar": "**ضرب** (Keer) (×) = مجموعات متشابهة. 3 مرات 2 = 2 + 2 + 2.\n\n**التقسيم بالعدل** (Eerlijk verdelen) = كل واحد يأخذ نفس العدد.\n\n**النصف** (De helft) = قطعتان متساويتان.",
  "uk": "**Рази** (keer) (×) = однакові групи. 3 рази по 2 = 2 + 2 + 2.\n\n**Чесно поділити** (eerlijk verdelen) = кожен отримує порівну.\n\n**Половина** (de helft) = на дві однакові частини.",
  "tr": "**Kere** (keer) (×) = aynı sayıda gruplar. 3 kere 2 = 2 + 2 + 2.\n\n**Eşit paylaştırmak** (eerlijk verdelen) = herkes eşit alır.\n\n**Yarım** (de helft) = iki eşit parçaya.",
  "ro": "**Ori** (keer) (×) = grupe de același lucru. 3 ori 2 = 2 + 2 + 2.\n\n**A împărți cinstit** (eerlijk verdelen) = fiecare primește la fel de mult.\n\n**Jumătate** (de helft) = în două bucăți egale.",
  "bg": "**По** (keer) (×) = еднакви групи. 3 по 2 = 2 + 2 + 2.\n\n**Честно делене** (eerlijk verdelen) = всеки получава поравно.\n\n**Половината** (de helft) = на две еднакви части."
 },
 "3 groepjes van 2 kinderen. Hoeveel kinderen zijn het samen?": {
  "en": "3 groups of 2 children. How many children is that together?",
  "ar": "3 مجموعات من 2 أطفال. كم طفلًا معًا؟",
  "uk": "3 групи по 2 дитини. Скільки всього дітей разом?",
  "tr": "2 çocuklu 3 grup. Toplam kaç çocuk var?",
  "ro": "3 grupe de câte 2 copii. Câți copii sunt împreună?",
  "bg": "3 групи по 2 деца. Колко деца са заедно?"
 },
 "3 groepjes van 2 = 2 + 2 + 2.": {
  "en": "3 groups of 2 = 2 + 2 + 2.",
  "ar": "3 مجموعات من 2 = 2 + 2 + 2.",
  "uk": "3 групи по 2 = 2 + 2 + 2.",
  "tr": "2'li 3 grup = 2 + 2 + 2.",
  "ro": "3 grupe de câte 2 = 2 + 2 + 2.",
  "bg": "3 групи по 2 = 2 + 2 + 2."
 },
 "Groepjes": {
  "en": "Groups",
  "ar": "مجموعات",
  "uk": "Групи",
  "tr": "Gruplar",
  "ro": "Grupe",
  "bg": "Групи"
 },
 "**3 groepjes van 2** = 2 + 2 + 2 = 6. Dat is ook **3 keer 2** (3 × 2).": {
  "en": "**3 groepjes van 2** (3 groups of 2) = 2 + 2 + 2 = 6. That is also **3 keer 2** (3 times 2) (3 × 2).",
  "ar": "**3 مجموعات من 2** = 2 + 2 + 2 = 6. هذا أيضًا **3 مرات 2** (3 × 2).",
  "uk": "**3 групи по 2** = 2 + 2 + 2 = 6. Це теж **3 рази по 2** (3 × 2).",
  "tr": "**2'li 3 grup** = 2 + 2 + 2 = 6. Bu da **3 kere 2** (3 keer 2) (3 × 2).",
  "ro": "**3 grupe de câte 2** = 2 + 2 + 2 = 6. Asta este și **3 ori 2** (3 × 2).",
  "bg": "**3 групи по 2** = 2 + 2 + 2 = 6. Това е също **3 по 2** (3 × 2)."
 },
 "Verdelen": {
  "en": "Sharing",
  "ar": "التقسيم",
  "uk": "Ділити",
  "tr": "Paylaştırmak",
  "ro": "A împărți",
  "bg": "Делене"
 },
 "**Eerlijk verdelen**: iedereen krijgt **evenveel**. 8 snoepjes voor 2 kinderen: ieder 4.": {
  "en": "**Eerlijk verdelen** (Sharing fairly): everyone gets **evenveel** (the same). 8 candies for 2 children: each gets 4.",
  "ar": "**التقسيم بالعدل** (Eerlijk verdelen): كل واحد يأخذ **نفس العدد** (evenveel). 8 حلويات لـ 2 أطفال: كل واحد 4.",
  "uk": "**Чесно поділити** (eerlijk verdelen): кожен отримує **порівну**. 8 цукерок для 2 дітей: кожному 4.",
  "tr": "**Eşit paylaştırmak** (eerlijk verdelen): herkes **eşit** (evenveel) alır. 2 çocuk için 8 şeker: her birine 4.",
  "ro": "**A împărți cinstit** (eerlijk verdelen): fiecare primește **la fel de mult** (evenveel). 8 bomboane pentru 2 copii: fiecare 4.",
  "bg": "**Честно делене** (eerlijk verdelen): всеки получава **поравно** (evenveel). 8 бонбона за 2 деца: всеки по 4."
 },
 "De helft": {
  "en": "Half",
  "ar": "النصف",
  "uk": "Половина",
  "tr": "Yarım",
  "ro": "Jumătate",
  "bg": "Половината"
 },
 "**De helft** = in twee gelijke stukken. De helft van 10 is 5.": {
  "en": "**De helft** (Half) = in two equal parts. Half of 10 is 5.",
  "ar": "**النصف** (De helft) = قطعتان متساويتان. نصف 10 هو 5.",
  "uk": "**Половина** (de helft) = на дві однакові частини. Половина від 10 — це 5.",
  "tr": "**Yarım** (de helft) = iki eşit parçaya. 10'un yarısı 5.",
  "ro": "**Jumătate** (de helft) = în două bucăți egale. Jumătate din 10 este 5.",
  "bg": "**Половината** (de helft) = на две еднакви части. Половината от 10 е 5."
 },
 "keer": {
  "en": "times",
  "ar": "ضرب",
  "uk": "рази",
  "tr": "kere",
  "ro": "ori",
  "bg": "по"
 },
 "Steeds hetzelfde getal erbij. 3 keer 2 = 2 + 2 + 2.": {
  "en": "Adding the same number each time. 3 times 2 = 2 + 2 + 2.",
  "ar": "نزيد نفس العدد كل مرة. 3 مرات 2 = 2 + 2 + 2.",
  "uk": "Щоразу додаєш те саме число. 3 рази по 2 = 2 + 2 + 2.",
  "tr": "Hep aynı sayıyı eklemek. 3 kere 2 = 2 + 2 + 2.",
  "ro": "Mereu același număr în plus. 3 ori 2 = 2 + 2 + 2.",
  "bg": "Всеки път същото число в повече. 3 по 2 = 2 + 2 + 2."
 },
 "verdelen": {
  "en": "to share out",
  "ar": "يقسّم",
  "uk": "ділити",
  "tr": "paylaştırmak",
  "ro": "a împărți",
  "bg": "деля"
 },
 "Uitdelen, zodat iedereen evenveel krijgt.": {
  "en": "Handing out, so everyone gets the same.",
  "ar": "نوزّع، حتى يأخذ كل واحد نفس العدد.",
  "uk": "Роздати так, щоб кожен отримав порівну.",
  "tr": "Herkes eşit alsın diye dağıtmak.",
  "ro": "A da fiecăruia, astfel încât toți să primească la fel de mult.",
  "bg": "Раздаване, така че всеки да получи поравно."
 },
 "de helft": {
  "en": "half",
  "ar": "النصف",
  "uk": "половина",
  "tr": "yarım, yarısı",
  "ro": "jumătate",
  "bg": "половината"
 },
 "Een van de twee gelijke stukken.": {
  "en": "One of the two equal parts.",
  "ar": "واحدة من قطعتين متساويتين.",
  "uk": "Одна з двох однакових частин.",
  "tr": "İki eşit parçadan biri.",
  "ro": "Una dintre cele două bucăți egale.",
  "bg": "Една от двете еднакви части."
 },
 "Keer = groepjes van hetzelfde. Verdelen = eerlijk uitdelen.": {
  "en": "Times = groups of the same thing. Sharing = handing out fairly.",
  "ar": "ضرب (keer) = مجموعات متشابهة. تقسيم (verdelen) = توزيع بالعدل.",
  "uk": "Рази (keer) = однакові групи. Ділити (verdelen) = чесно роздати.",
  "tr": "Kere (keer) = aynı sayıda gruplar. Paylaştırmak (verdelen) = eşit dağıtmak.",
  "ro": "Ori (keer) = grupe de același lucru. A împărți (verdelen) = a da cinstit fiecăruia.",
  "bg": "По (keer) = еднакви групи. Делене (verdelen) = честно раздаване."
 },
 "2 keer 5 = 5 + 5 = 10.": {
  "en": "2 times 5 = 5 + 5 = 10.",
  "ar": "2 مرات 5 = 5 + 5 = 10.",
  "uk": "2 рази по 5 = 5 + 5 = 10.",
  "tr": "2 kere 5 = 5 + 5 = 10.",
  "ro": "2 ori 5 = 5 + 5 = 10.",
  "bg": "2 по 5 = 5 + 5 = 10."
 },
 "6 koekjes voor 3 kinderen: ieder 2.": {
  "en": "6 cookies for 3 children: each gets 2.",
  "ar": "6 بسكويتات لـ 3 أطفال: كل واحد 2.",
  "uk": "6 печивок для 3 дітей: кожному 2.",
  "tr": "3 çocuk için 6 kurabiye: her birine 2.",
  "ro": "6 biscuiți pentru 3 copii: fiecare 2.",
  "bg": "6 бисквити за 3 деца: всеки по 2."
 },
 "Verdelen? Deel één voor één uit, zoals kaarten bij een spel.": {
  "en": "Sharing? Hand them out one by one, like cards in a game.",
  "ar": "تقسيم؟ وزّع واحدًا واحدًا، مثل الأوراق في اللعبة.",
  "uk": "Ділиш? Роздавай по одному, як карти в грі.",
  "tr": "Paylaştırmak mı? Bir oyunda kart dağıtır gibi tek tek dağıt.",
  "ro": "Împarți? Dă câte unul pe rând, ca la cărțile de joc.",
  "bg": "Делиш? Раздавай едно по едно, като карти в игра."
 },
 "Tel de groepjes bij elkaar op.": {
  "en": "Add the groups together.",
  "ar": "اجمع المجموعات معًا.",
  "uk": "Додай групи разом.",
  "tr": "Grupları topla.",
  "ro": "Adună grupele la un loc.",
  "bg": "Събери групите заедно."
 },
 "Wat betekent '2 keer 4'?": {
  "en": "What does '2 times 4' mean?",
  "ar": "ماذا تعني '2 keer 4' (2 مرات 4)؟",
  "uk": "Що означає '2 keer 4' (2 рази по 4)?",
  "tr": "'2 keer 4' (2 kere 4) ne demek?",
  "ro": "Ce înseamnă '2 keer 4' (2 ori 4)?",
  "bg": "Какво означава '2 keer 4' (2 по 4)?"
 },
 "Keer = hetzelfde getal een paar keer bij elkaar. Kijk: welk getal, en hoe vaak?": {
  "en": "Times = the same number added together a few times. Look: which number, and how many times?",
  "ar": "الضرب (keer) = نفس العدد يُجمع عدة مرات. انظر: أي عدد، وكم مرة؟",
  "uk": "Множення (keer) = те саме число кілька разів разом. Подивись: яке число і скільки разів?",
  "tr": "Kere (keer) = aynı sayıyı birkaç kez toplamak. Bak: hangi sayı ve kaç kere?",
  "ro": "Ori (keer) = același număr de câteva ori la un loc. Uită-te: care număr și de câte ori?",
  "bg": "По (keer) = същото число няколко пъти заедно. Виж: кое число и колко пъти?"
 },
 "Je verdeelt 8 snoepjes eerlijk over 2 kinderen. Hoeveel krijgt ieder kind?": {
  "en": "You share 8 candies fairly between 2 children. How many does each child get?",
  "ar": "تقسم 8 حلويات بالعدل على 2 أطفال. كم يأخذ كل طفل؟",
  "uk": "Ти чесно ділиш 8 цукерок між 2 дітьми. Скільки отримає кожна дитина?",
  "tr": "8 şekeri 2 çocuğa eşit paylaştırıyorsun. Her çocuk kaç tane alır?",
  "ro": "Împarți cinstit 8 bomboane la 2 copii. Câte primește fiecare copil?",
  "bg": "Делиш честно 8 бонбона между 2 деца. Колко получава всяко дете?"
 },
 "Eerlijk = iedereen krijgt evenveel. Deel één voor één uit.": {
  "en": "Fair = everyone gets the same. Hand them out one by one.",
  "ar": "بالعدل (eerlijk) = كل واحد يأخذ نفس العدد. وزّع واحدًا واحدًا.",
  "uk": "Чесно (eerlijk) = кожен отримує порівну. Роздавай по одному.",
  "tr": "Eşit (eerlijk) = herkes eşit alır. Tek tek dağıt.",
  "ro": "Cinstit (eerlijk) = fiecare primește la fel de mult. Dă câte unul pe rând.",
  "bg": "Честно (eerlijk) = всеки получава поравно. Раздавай едно по едно."
 },
 "Wat is de helft van 10?": {
  "en": "What is half of 10?",
  "ar": "ما هو نصف 10؟",
  "uk": "Скільки буде половина від 10?",
  "tr": "10'un yarısı kaç?",
  "ro": "Cât este jumătate din 10?",
  "bg": "Колко е половината от 10?"
 },
 "De helft = in twee gelijke stukken.": {
  "en": "Half = in two equal parts.",
  "ar": "النصف (de helft) = قطعتان متساويتان.",
  "uk": "Половина (de helft) = на дві однакові частини.",
  "tr": "Yarım (de helft) = iki eşit parçaya.",
  "ro": "Jumătate (de helft) = în două bucăți egale.",
  "bg": "Половината (de helft) = на две еднакви части."
 },
 "Je verdeelt 6 koekjes eerlijk over 3 kinderen. Hoeveel krijgt ieder kind?": {
  "en": "You share 6 cookies fairly between 3 children. How many does each child get?",
  "ar": "تقسم 6 بسكويتات بالعدل على 3 أطفال. كم يأخذ كل طفل؟",
  "uk": "Ти чесно ділиш 6 печивок між 3 дітьми. Скільки отримає кожна дитина?",
  "tr": "6 kurabiyeyi 3 çocuğa eşit paylaştırıyorsun. Her çocuk kaç tane alır?",
  "ro": "Împarți cinstit 6 biscuiți la 3 copii. Câți primește fiecare copil?",
  "bg": "Делиш честно 6 бисквити между 3 деца. Колко получава всяко дете?"
 },
 "Deel uit: één voor jou, één voor jou, één voor jou… tot alles op is.": {
  "en": "Hand them out: one for you, one for you, one for you… until it's all gone.",
  "ar": "وزّع: واحدة لك، واحدة لك، واحدة لك… حتى ينتهي كل شيء.",
  "uk": "Роздавай: одне тобі, одне тобі, одне тобі… поки все не закінчиться.",
  "tr": "Dağıt: biri sana, biri sana, biri sana… hepsi bitene kadar.",
  "ro": "Dă pe rând: unul pentru tine, unul pentru tine, unul pentru tine… până se termină totul.",
  "bg": "Раздавай: едно за теб, едно за теб, едно за теб… докато свърши всичко."
 },
 // Hoofdstuktitels als vraag (Mark 25 sep 2026: "Hoofdstuk 1 — hoe stel ik vragen aan de juf of meester").
 "Hoe vraag ik iets aan de juf of meester?": {"en": "How do I ask the teacher something?", "ar": "كيف أسأل المعلّم أو المعلّمة عن شيء؟", "uk": "Як мені щось запитати в учителя чи вчительки?", "tr": "Öğretmene nasıl bir şey sorarım?", "ro": "Cum întreb ceva pe doamna sau domnul învățător?", "bg": "Как да попитам нещо учителката или учителя?"},
 "Waar is alles op school?": {"en": "Where is everything at school?", "ar": "أين يوجد كل شيء في المدرسة؟", "uk": "Де що є в школі?", "tr": "Okulda her şey nerede?", "ro": "Unde este totul la școală?", "bg": "Къде е всичко в училище?"},
 "Hoe speel ik mee met andere kinderen?": {"en": "How do I join in with other children?", "ar": "كيف ألعب مع الأطفال الآخرين؟", "uk": "Як мені гратися з іншими дітьми?", "tr": "Diğer çocuklarla nasıl oynarım?", "ro": "Cum mă joc împreună cu alți copii?", "bg": "Как да играя с други деца?"},
 "Hoe zeg ik hoe ik me voel?": {"en": "How do I say how I feel?", "ar": "كيف أقول ما أشعر به؟", "uk": "Як мені сказати, що я відчуваю?", "tr": "Nasıl hissettiğimi nasıl söylerim?", "ro": "Cum spun cum mă simt?", "bg": "Как да кажа как се чувствам?"},
 "Welke woorden hoor ik op school?": {"en": "Which words do I hear at school?", "ar": "ما الكلمات التي أسمعها في المدرسة؟", "uk": "Які слова я чую в школі?", "tr": "Okulda hangi kelimeleri duyarım?", "ro": "Ce cuvinte aud la școală?", "bg": "Кои думи чувам в училище?"},
 "Welke woorden hoor ik thuis en bij het eten?": {"en": "Which words do I hear at home and at meals?", "ar": "ما الكلمات التي أسمعها في البيت وعند الأكل؟", "uk": "Які слова я чую вдома і під час їжі?", "tr": "Evde ve yemekte hangi kelimeleri duyarım?", "ro": "Ce cuvinte aud acasă și la masă?", "bg": "Кои думи чувам вкъщи и на масата?"},
 "Hoe heten mijn lichaam en de kleuren?": {"en": "What are the names of my body parts and the colours?", "ar": "ما أسماء أجزاء جسمي والألوان؟", "uk": "Як називаються частини тіла і кольори?", "tr": "Vücudumun ve renklerin adları ne?", "ro": "Cum se numesc corpul meu și culorile?", "bg": "Как се казват частите на тялото ми и цветовете?"},
 "Wat moet ik doen in de klas?": {"en": "What do I have to do in class?", "ar": "ماذا يجب أن أفعل في الصف؟", "uk": "Що мені треба робити в класі?", "tr": "Sınıfta ne yapmam gerekiyor?", "ro": "Ce trebuie să fac în clasă?", "bg": "Какво трябва да правя в клас?"},
 "Wat betekent meer, minder en evenveel?": {"en": "What do more, less and the same mean?", "ar": "ماذا تعني أكثر وأقل ومتساوٍ؟", "uk": "Що означає більше, менше й однаково?", "tr": "Daha çok, daha az ve eşit ne demek?", "ro": "Ce înseamnă mai mult, mai puțin și la fel de mult?", "bg": "Какво означава повече, по-малко и поравно?"},
 "Wat betekent samen, weg en over?": {"en": "What do together, away and left over mean?", "ar": "ماذا تعني معًا وذهب وبقي؟", "uk": "Що означає разом, забрали й залишилося?", "tr": "Toplam, gitti ve kalan ne demek?", "ro": "Ce înseamnă împreună, plecat și rămas?", "bg": "Какво означава заедно, няма го и остава?"},
 "Wat betekent keer en verdelen?": {"en": "What do times and sharing mean?", "ar": "ماذا يعني الضرب والتقسيم؟", "uk": "Що означає помножити й поділити?", "tr": "Çarpı ve paylaştırmak ne demek?", "ro": "Ce înseamnă ori și a împărți?", "bg": "Какво означава по и делене?"},
 "Hoe tel ik tot 20?": {"en": "How do I count to 20?", "ar": "كيف أعدّ حتى 20؟", "uk": "Як мені рахувати до 20?", "tr": "20'ye kadar nasıl sayarım?", "ro": "Cum număr până la 20?", "bg": "Как броя до 20?"},
 "Hoe doe ik erbij tot 10?": {"en": "How do I add up to 10?", "ar": "كيف أجمع حتى 10؟", "uk": "Як мені додавати до 10?", "tr": "10'a kadar nasıl toplarım?", "ro": "Cum adun până la 10?", "bg": "Как събирам до 10?"},
 "Hoe doe ik eraf tot 10?": {"en": "How do I take away up to 10?", "ar": "كيف أطرح حتى 10؟", "uk": "Як мені віднімати до 10?", "tr": "10'a kadar nasıl çıkarırım?", "ro": "Cum scad până la 10?", "bg": "Как изваждам до 10?"},
 "Hoe reken ik over de 10 heen?": {"en": "How do I calculate past 10?", "ar": "كيف أحسب بعد العدد 10؟", "uk": "Як мені рахувати через 10?", "tr": "10'u geçerek nasıl hesaplarım?", "ro": "Cum calculez peste 10?", "bg": "Как смятам през 10?"},
 "Hoe maak ik een som uit de klas?": {"en": "How do I solve a sum from class?", "ar": "كيف أحلّ مسألة من الصف؟", "uk": "Як мені розв'язати задачу з класу?", "tr": "Sınıftan bir işlemi nasıl yaparım?", "ro": "Cum rezolv un exercițiu din clasă?", "bg": "Как решавам задача от класа?"},
 "Wat zijn tientallen en eenheden?": {"en": "What are tens and ones?", "ar": "ما العشرات والآحاد؟", "uk": "Що таке десятки й одиниці?", "tr": "Onluklar ve birlikler nedir?", "ro": "Ce sunt zecile și unitățile?", "bg": "Какво са десетиците и единиците?"},
 "Hoe doe ik erbij tot 100?": {"en": "How do I add up to 100?", "ar": "كيف أجمع حتى 100؟", "uk": "Як мені додавати до 100?", "tr": "100'e kadar nasıl toplarım?", "ro": "Cum adun până la 100?", "bg": "Как събирам до 100?"},
 "Hoe doe ik eraf tot 100?": {"en": "How do I take away up to 100?", "ar": "كيف أطرح حتى 100؟", "uk": "Як мені віднімати до 100?", "tr": "100'e kadar nasıl çıkarırım?", "ro": "Cum scad până la 100?", "bg": "Как изваждам до 100?"},
 "Hoe reken ik over het tiental heen?": {"en": "How do I calculate past a ten?", "ar": "كيف أحسب بعد العشرة؟", "uk": "Як мені рахувати через десяток?", "tr": "Onluğu geçerek nasıl hesaplarım?", "ro": "Cum calculez peste zece?", "bg": "Как смятам през десетицата?"},
 "Hoe reken ik in de winkel?": {"en": "How do I calculate in the shop?", "ar": "كيف أحسب في المتجر؟", "uk": "Як мені рахувати в магазині?", "tr": "Markette nasıl hesap yaparım?", "ro": "Cum calculez la magazin?", "bg": "Как смятам в магазина?"},
 // In de klas 2 (2 okt 2026) — door Claude vertaald, nog door moedertaalsprekers laten nakijken.
 "In de klas 2 — zelf werken en fijne gevoelens (nieuwkomers)": {"en":"In class 2 — working on your own and good feelings (newcomers)","ar":"في الصف 2 — العمل بنفسك والمشاعر الجميلة (للقادمين الجدد)","uk":"У класі 2 — працюємо самостійно і приємні почуття (новенькі)","tr":"Sınıfta 2 — kendi başına çalışmak ve güzel duygular (yeni gelenler)","ro":"În clasă 2 — lucrul singur și sentimente plăcute (nou-veniți)","bg":"В клас 2 — работа сам и хубави чувства (новодошли)"},
 "Zelf aan het werk, wat je doet als je klaar bent, wat je doet als de juf bezig is, en hoe je zegt dat je je fijn voelt. Met steun in je eigen taal. ~10 min.": {"en":"Working on your own, what to do when you are finished, what to do when the teacher is busy, and how to say you feel good. With help in your own language. ~10 min.","ar":"العمل بنفسك، ماذا تفعل عندما تنتهي، ماذا تفعل عندما تكون المعلمة مشغولة، وكيف تقول إنك تشعر بشعور جميل. مع مساعدة بلغتك. ~10 دقائق.","uk":"Працюєш сам, що робити, коли ти закінчив, що робити, коли вчителька зайнята, і як сказати, що тобі добре. З підтримкою твоєю мовою. ~10 хв.","tr":"Kendi başına çalışmak, bitirince ne yapacağın, öğretmen meşgulken ne yapacağın ve kendini iyi hissettiğini nasıl söyleyeceğin. Kendi dilinde destekle. ~10 dk.","ro":"Lucrezi singur, ce faci când ai terminat, ce faci când doamna învățătoare e ocupată și cum spui că te simți bine. Cu sprijin în limba ta. ~10 min.","bg":"Работиш сам, какво правиш, когато си готов, какво правиш, когато учителката е заета, и как казваш, че ти е хубаво. С помощ на твоя език. ~10 мин."},
 "Hoe begin ik aan mijn werk?": {"en":"How do I start my work?","ar":"كيف أبدأ عملي؟","uk":"Як мені почати роботу?","tr":"İşime nasıl başlarım?","ro":"Cum încep lucrul?","bg":"Как да започна работата си?"},
 "Ik ben klaar. Wat nu?": {"en":"I am finished. What now?","ar":"انتهيت. ماذا الآن؟","uk":"Я закінчив. Що тепер?","tr":"Bitirdim. Şimdi ne yapayım?","ro":"Am terminat. Și acum?","bg":"Готов съм. Сега какво?"},
 "De juf is bezig. Wat doe ik?": {"en":"The teacher is busy. What do I do?","ar":"المعلمة مشغولة. ماذا أفعل؟","uk":"Учителька зайнята. Що мені робити?","tr":"Öğretmen meşgul. Ne yaparım?","ro":"Doamna învățătoare e ocupată. Ce fac?","bg":"Учителката е заета. Какво да правя?"},
 "Hoe zeg ik dat ik me fijn voel?": {"en":"How do I say that I feel good?","ar":"كيف أقول إنني أشعر بشعور جميل؟","uk":"Як сказати, що мені добре?","tr":"Kendimi iyi hissettiğimi nasıl söylerim?","ro":"Cum spun că mă simt bine?","bg":"Как да кажа, че ми е хубаво?"},
 "Aan het werk": {"en":"Getting to work","ar":"إلى العمل","uk":"До роботи","tr":"İşe başla","ro":"La lucru","bg":"На работа"},
 "De juf of meester zegt wat je gaat doen.\n\n**Pak je werkboek.** **Begin maar.** **Werk zachtjes.**\n\nWeet je iets niet? Vraag: **Welke bladzijde?** of **Mag ik je potlood lenen?**": {"en":"The teacher tells you what you are going to do.\n\n**Pak je werkboek.** (= Get your workbook.) **Begin maar.** (= You can start.) **Werk zachtjes.** (= Work quietly.)\n\nDon't know something? Ask: **Welke bladzijde?** (= Which page?) or **Mag ik je potlood lenen?** (= Can I borrow your pencil?)","ar":"المعلمة أو المعلم يقول لك ماذا ستفعل.\n\n**Pak je werkboek.** (= خذ كتاب التمارين.) **Begin maar.** (= ابدأ.) **Werk zachtjes.** (= اعمل بهدوء.)\n\nلا تعرف شيئًا؟ اسأل: **Welke bladzijde?** (= أي صفحة؟) أو **Mag ik je potlood lenen?** (= هل يمكنني استعارة قلمك؟)","uk":"Учителька або вчитель каже, що ти будеш робити.\n\n**Pak je werkboek.** (= Візьми робочий зошит.) **Begin maar.** (= Починай.) **Werk zachtjes.** (= Працюй тихо.)\n\nЧогось не знаєш? Запитай: **Welke bladzijde?** (= Яка сторінка?) або **Mag ik je potlood lenen?** (= Можна позичити твій олівець?)","tr":"Öğretmen ne yapacağını söyler.\n\n**Pak je werkboek.** (= Çalışma kitabını al.) **Begin maar.** (= Başlayabilirsin.) **Werk zachtjes.** (= Sessizce çalış.)\n\nBir şeyi bilmiyor musun? Sor: **Welke bladzijde?** (= Hangi sayfa?) ya da **Mag ik je potlood lenen?** (= Kalemini ödünç alabilir miyim?)","ro":"Doamna sau domnul învățător îți spune ce vei face.\n\n**Pak je werkboek.** (= Ia caietul de lucru.) **Begin maar.** (= Poți începe.) **Werk zachtjes.** (= Lucrează în liniște.)\n\nNu știi ceva? Întreabă: **Welke bladzijde?** (= Ce pagină?) sau **Mag ik je potlood lenen?** (= Pot să împrumut creionul tău?)","bg":"Учителката или учителят казва какво ще правиш.\n\n**Pak je werkboek.** (= Вземи работната тетрадка.) **Begin maar.** (= Започвай.) **Werk zachtjes.** (= Работи тихо.)\n\nНе знаеш нещо? Попитай: **Welke bladzijde?** (= Коя страница?) или **Mag ik je potlood lenen?** (= Може ли да взема молива ти?)"},
 "De juf zegt: pak je werkboek. Wat doe je?": {"en":"The teacher says: get your workbook. What do you do?","ar":"المعلمة تقول: خذ كتاب التمارين. ماذا تفعل؟","uk":"Учителька каже: візьми робочий зошит. Що ти робиш?","tr":"Öğretmen diyor ki: çalışma kitabını al. Ne yaparsın?","ro":"Doamna învățătoare spune: ia caietul de lucru. Ce faci?","bg":"Учителката казва: вземи работната тетрадка. Какво правиш?"},
 "Ik pak mijn werkboek.": {"en":"I get my workbook.","ar":"آخذ كتاب التمارين.","uk":"Я беру свій робочий зошит.","tr":"Çalışma kitabımı alırım.","ro":"Îmi iau caietul de lucru.","bg":"Вземам работната си тетрадка."},
 "Ik pak mijn jas.": {"en":"I get my coat.","ar":"آخذ معطفي.","uk":"Я беру свою куртку.","tr":"Montumu alırım.","ro":"Îmi iau geaca.","bg":"Вземам якето си."},
 "Ik ga naar buiten.": {"en":"I go outside.","ar":"أخرج إلى الخارج.","uk":"Я йду надвір.","tr":"Dışarı çıkarım.","ro":"Ies afară.","bg":"Излизам навън."},
 "Ik ga slapen.": {"en":"I go to sleep.","ar":"أذهب لأنام.","uk":"Я йду спати.","tr":"Uyumaya giderim.","ro":"Mă duc să dorm.","bg":"Отивам да спя."},
 "Je weet niet welke bladzijde. Wat vraag je?": {"en":"You don't know which page. What do you ask?","ar":"لا تعرف أي صفحة. ماذا تسأل؟","uk":"Ти не знаєш, яка сторінка. Що ти запитаєш?","tr":"Hangi sayfa olduğunu bilmiyorsun. Ne sorarsın?","ro":"Nu știi la ce pagină. Ce întrebi?","bg":"Не знаеш коя страница. Какво питаш?"},
 "Welke bladzijde?": {"en":"Which page?","ar":"أي صفحة؟","uk":"Яка сторінка?","tr":"Hangi sayfa?","ro":"Ce pagină?","bg":"Коя страница?"},
 "Is het pauze?": {"en":"Is it break time?","ar":"هل هي الاستراحة؟","uk":"Зараз перерва?","tr":"Teneffüs mü?","ro":"E pauză?","bg":"Междучасие ли е?"},
 "Hoe heet je?": {"en":"What is your name?","ar":"ما اسمك؟","uk":"Як тебе звати?","tr":"Adın ne?","ro":"Cum te cheamă?","bg":"Как се казваш?"},
 "Waar is de bal?": {"en":"Where is the ball?","ar":"أين الكرة؟","uk":"Де м'яч?","tr":"Top nerede?","ro":"Unde e mingea?","bg":"Къде е топката?"},
 "Je hebt geen potlood. Wat vraag je aan het kind naast je?": {"en":"You don't have a pencil. What do you ask the child next to you?","ar":"ليس معك قلم رصاص. ماذا تسأل الطفل الذي بجانبك؟","uk":"У тебе немає олівця. Що ти запитаєш у дитини поруч?","tr":"Kalemin yok. Yanındaki çocuğa ne sorarsın?","ro":"Nu ai creion. Ce îl întrebi pe copilul de lângă tine?","bg":"Нямаш молив. Какво питаш детето до теб?"},
 "Mag ik je potlood lenen?": {"en":"Can I borrow your pencil?","ar":"هل يمكنني استعارة قلمك؟","uk":"Можна позичити твій олівець?","tr":"Kalemini ödünç alabilir miyim?","ro":"Pot să împrumut creionul tău?","bg":"Може ли да взема молива ти?"},
 "Ga weg!": {"en":"Go away!","ar":"اذهب بعيدًا!","uk":"Іди геть!","tr":"Git buradan!","ro":"Pleacă!","bg":"Махай се!"},
 "De juf zegt: werk zachtjes. Wat doe je?": {"en":"The teacher says: work quietly. What do you do?","ar":"المعلمة تقول: اعمل بهدوء. ماذا تفعل؟","uk":"Учителька каже: працюй тихо. Що ти робиш?","tr":"Öğretmen diyor ki: sessizce çalış. Ne yaparsın?","ro":"Doamna învățătoare spune: lucrează în liniște. Ce faci?","bg":"Учителката казва: работи тихо. Какво правиш?"},
 "Ik praat zachtjes.": {"en":"I talk quietly.","ar":"أتكلم بهدوء.","uk":"Я говорю тихо.","tr":"Sessizce konuşurum.","ro":"Vorbesc încet.","bg":"Говоря тихо."},
 "Ik roep heel hard.": {"en":"I shout very loudly.","ar":"أصرخ بصوت عالٍ جدًا.","uk":"Я кричу дуже голосно.","tr":"Çok yüksek sesle bağırırım.","ro":"Strig foarte tare.","bg":"Викам много силно."},
 "Ik ga zingen.": {"en":"I start singing.","ar":"أبدأ بالغناء.","uk":"Я починаю співати.","tr":"Şarkı söylemeye başlarım.","ro":"Încep să cânt.","bg":"Започвам да пея."},
 "Ik loop weg.": {"en":"I walk away.","ar":"أمشي بعيدًا.","uk":"Я йду геть.","tr":"Yürüyüp giderim.","ro":"Plec.","bg":"Тръгвам си."},
 "De juf zegt: begin maar. Wat doe je?": {"en":"The teacher says: you can start. What do you do?","ar":"المعلمة تقول: ابدأ. ماذا تفعل؟","uk":"Учителька каже: починай. Що ти робиш?","tr":"Öğretmen diyor ki: başlayabilirsin. Ne yaparsın?","ro":"Doamna învățătoare spune: poți începe. Ce faci?","bg":"Учителката казва: започвай. Какво правиш?"},
 "Ik begin met mijn werk.": {"en":"I start my work.","ar":"أبدأ عملي.","uk":"Я починаю свою роботу.","tr":"İşime başlarım.","ro":"Încep lucrul.","bg":"Започвам работата си."},
 "Ik ga spelen.": {"en":"I go and play.","ar":"أذهب لألعب.","uk":"Я йду гратися.","tr":"Oynamaya giderim.","ro":"Mă duc să mă joc.","bg":"Отивам да играя."},
 "Ik doe niets.": {"en":"I do nothing.","ar":"لا أفعل شيئًا.","uk":"Я нічого не роблю.","tr":"Hiçbir şey yapmam.","ro":"Nu fac nimic.","bg":"Не правя нищо."},
 "Ik ben klaar": {"en":"I am finished","ar":"انتهيت","uk":"Я закінчив","tr":"Bitirdim","ro":"Am terminat","bg":"Готов съм"},
 "Je werk is af. Wat nu?\n\nVraag: **Wat moet ik nu doen?**\nKijk op het **bord**: daar staat soms wat je mag doen.\nLeg je boek netjes in je **la**.\n\nAndere kinderen werken nog: wees **stil**.": {"en":"Your work is done. What now?\n\nAsk: **Wat moet ik nu doen?** (= What should I do now?)\nLook at the **bord** (= board): sometimes it says what you may do.\nPut your book neatly in your **la** (= drawer).\n\nOther children are still working: be **stil** (= quiet).","ar":"عملك انتهى. ماذا الآن؟\n\nاسأل: **Wat moet ik nu doen?** (= ماذا يجب أن أفعل الآن؟)\nانظر إلى **bord** (= السبورة): أحيانًا مكتوب ماذا يمكنك أن تفعل.\nضع كتابك بترتيب في **la** (= الدرج).\n\nالأطفال الآخرون ما زالوا يعملون: كن **stil** (= هادئًا).","uk":"Твоя робота готова. Що тепер?\n\nЗапитай: **Wat moet ik nu doen?** (= Що мені тепер робити?)\nПодивись на **bord** (= дошку): там іноді написано, що можна робити.\nАкуратно поклади книжку в **la** (= шухляду).\n\nІнші діти ще працюють: будь **stil** (= тихо).","tr":"İşin bitti. Şimdi ne olacak?\n\nSor: **Wat moet ik nu doen?** (= Şimdi ne yapmalıyım?)\n**Bord**'a (= tahtaya) bak: bazen orada ne yapabileceğin yazar.\nKitabını düzgünce **la**'na (= çekmecene) koy.\n\nDiğer çocuklar hâlâ çalışıyor: **stil** (= sessiz) ol.","ro":"Ai terminat lucrul. Și acum?\n\nÎntreabă: **Wat moet ik nu doen?** (= Ce trebuie să fac acum?)\nUită-te la **bord** (= tablă): uneori scrie acolo ce ai voie să faci.\nPune cartea frumos în **la** (= sertar).\n\nAlți copii încă lucrează: fii **stil** (= liniștit).","bg":"Работата ти е готова. Сега какво?\n\nПопитай: **Wat moet ik nu doen?** (= Какво да правя сега?)\nПогледни **bord** (= дъската): понякога там пише какво можеш да правиш.\nПрибери книгата си спретнато в **la** (= чекмеджето).\n\nДругите деца още работят: бъди **stil** (= тих)."},
 "Je bent klaar met je werk. Wat vraag je aan de juf?": {"en":"You finished your work. What do you ask the teacher?","ar":"أنهيت عملك. ماذا تسأل المعلمة؟","uk":"Ти закінчив роботу. Що ти запитаєш у вчительки?","tr":"İşini bitirdin. Öğretmene ne sorarsın?","ro":"Ai terminat lucrul. Ce o întrebi pe doamna învățătoare?","bg":"Свърши работата си. Какво питаш учителката?"},
 "Wat moet ik nu doen?": {"en":"What should I do now?","ar":"ماذا يجب أن أفعل الآن؟","uk":"Що мені тепер робити?","tr":"Şimdi ne yapmalıyım?","ro":"Ce trebuie să fac acum?","bg":"Какво да правя сега?"},
 "Mag ik naar huis?": {"en":"Can I go home?","ar":"هل يمكنني الذهاب إلى البيت؟","uk":"Можна мені додому?","tr":"Eve gidebilir miyim?","ro":"Pot să merg acasă?","bg":"Може ли да си отида вкъщи?"},
 "Op het bord staat: klaar? Lees een boek. Je bent klaar. Wat doe je?": {"en":"The board says: finished? Read a book. You are finished. What do you do?","ar":"مكتوب على السبورة: انتهيت؟ اقرأ كتابًا. أنت انتهيت. ماذا تفعل؟","uk":"На дошці написано: закінчив? Читай книжку. Ти закінчив. Що ти робиш?","tr":"Tahtada yazıyor: bitirdin mi? Kitap oku. Bitirdin. Ne yaparsın?","ro":"Pe tablă scrie: ai terminat? Citește o carte. Ai terminat. Ce faci?","bg":"На дъската пише: готов ли си? Чети книга. Готов си. Какво правиш?"},
 "Ik pak een boek en lees.": {"en":"I get a book and read.","ar":"آخذ كتابًا وأقرأ.","uk":"Я беру книжку й читаю.","tr":"Bir kitap alır ve okurum.","ro":"Iau o carte și citesc.","bg":"Вземам книга и чета."},
 "Ik ga praten.": {"en":"I start talking.","ar":"أبدأ بالكلام.","uk":"Я починаю розмовляти.","tr":"Konuşmaya başlarım.","ro":"Încep să vorbesc.","bg":"Започвам да говоря."},
 "Je bent klaar. Waar leg je je werkboek?": {"en":"You are finished. Where do you put your workbook?","ar":"انتهيت. أين تضع كتاب التمارين؟","uk":"Ти закінчив. Куди ти кладеш робочий зошит?","tr":"Bitirdin. Çalışma kitabını nereye koyarsın?","ro":"Ai terminat. Unde pui caietul de lucru?","bg":"Готов си. Къде слагаш работната тетрадка?"},
 "In mijn la.": {"en":"In my drawer.","ar":"في درجي.","uk":"У свою шухляду.","tr":"Çekmeceme.","ro":"În sertarul meu.","bg":"В чекмеджето си."},
 "Op de grond.": {"en":"On the floor.","ar":"على الأرض.","uk":"На підлогу.","tr":"Yere.","ro":"Pe jos.","bg":"На пода."},
 "In de prullenbak.": {"en":"In the bin.","ar":"في سلة المهملات.","uk":"У смітник.","tr":"Çöp kutusuna.","ro":"În coșul de gunoi.","bg":"В кошчето."},
 "Buiten.": {"en":"Outside.","ar":"في الخارج.","uk":"Надворі.","tr":"Dışarıya.","ro":"Afară.","bg":"Навън."},
 "Je wilt dat de juf je werk nakijkt. Wat vraag je?": {"en":"You want the teacher to check your work. What do you ask?","ar":"تريد أن تصحح المعلمة عملك. ماذا تسأل؟","uk":"Ти хочеш, щоб учителька перевірила твою роботу. Що ти запитаєш?","tr":"Öğretmenin işini kontrol etmesini istiyorsun. Ne sorarsın?","ro":"Vrei ca doamna învățătoare să-ți verifice lucrul. Ce întrebi?","bg":"Искаш учителката да провери работата ти. Какво питаш?"},
 "Wilt u mijn werk nakijken?": {"en":"Will you check my work?","ar":"هل يمكنك تصحيح عملي؟","uk":"Перевірте, будь ласка, мою роботу?","tr":"İşimi kontrol eder misiniz?","ro":"Vă rog, puteți să-mi verificați lucrul?","bg":"Ще проверите ли работата ми?"},
 "Mag ik naar buiten?": {"en":"Can I go outside?","ar":"هل يمكنني الخروج؟","uk":"Можна мені надвір?","tr":"Dışarı çıkabilir miyim?","ro":"Pot să ies afară?","bg":"Може ли да изляза навън?"},
 "Jij bent klaar. Een ander kind nog niet. Wat doe je?": {"en":"You are finished. Another child is not yet. What do you do?","ar":"أنت انتهيت. طفل آخر لم ينتهِ بعد. ماذا تفعل؟","uk":"Ти закінчив. Інша дитина ще ні. Що ти робиш?","tr":"Sen bitirdin. Başka bir çocuk henüz bitirmedi. Ne yaparsın?","ro":"Tu ai terminat. Alt copil încă nu. Ce faci?","bg":"Ти си готов. Друго дете още не е. Какво правиш?"},
 "Ik ben stil en wacht.": {"en":"I am quiet and wait.","ar":"أكون هادئًا وأنتظر.","uk":"Я сиджу тихо й чекаю.","tr":"Sessiz olur ve beklerim.","ro":"Stau liniștit și aștept.","bg":"Тих съм и чакам."},
 "Ik praat heel hard.": {"en":"I talk very loudly.","ar":"أتكلم بصوت عالٍ جدًا.","uk":"Я говорю дуже голосно.","tr":"Çok yüksek sesle konuşurum.","ro":"Vorbesc foarte tare.","bg":"Говоря много силно."},
 "Ik pak zijn werk af.": {"en":"I take his work away.","ar":"آخذ عمله منه.","uk":"Я забираю в нього роботу.","tr":"Onun işini elinden alırım.","ro":"Îi iau lucrul.","bg":"Взимам му работата."},
 "Ik loop door de klas.": {"en":"I walk around the classroom.","ar":"أتجول في الصف.","uk":"Я ходжу по класу.","tr":"Sınıfta dolaşırım.","ro":"Mă plimb prin clasă.","bg":"Разхождам се из класа."},
 "De juf is bezig": {"en":"The teacher is busy","ar":"المعلمة مشغولة","uk":"Учителька зайнята","tr":"Öğretmen meşgul","ro":"Doamna învățătoare e ocupată","bg":"Учителката е заета"},
 "Soms helpt de juf of meester een ander kind. Dan mag je even niet storen.\n\n1. **Kijk zelf** nog een keer.\n2. **Vraag een kind** naast je: **Kun je mij helpen?**\n3. **Wacht** rustig. Ga verder met de **volgende som**.\n\nDe juf komt straks bij je.": {"en":"Sometimes the teacher is helping another child. Then you should not disturb for a moment.\n\n1. **Kijk zelf** (= Look yourself) one more time.\n2. **Vraag een kind** (= Ask a child) next to you: **Kun je mij helpen?** (= Can you help me?)\n3. **Wacht** (= Wait) calmly. Go on with the **volgende som** (= next sum).\n\nThe teacher will come to you soon.","ar":"أحيانًا تساعد المعلمة أو المعلم طفلًا آخر. عندها لا تقاطع للحظة.\n\n1. **Kijk zelf** (= انظر بنفسك) مرة أخرى.\n2. **Vraag een kind** (= اسأل طفلًا) بجانبك: **Kun je mij helpen?** (= هل يمكنك مساعدتي؟)\n3. **Wacht** (= انتظر) بهدوء. أكمل **volgende som** (= المسألة التالية).\n\nالمعلمة ستأتي إليك بعد قليل.","uk":"Іноді вчителька або вчитель допомагає іншій дитині. Тоді трохи не заважай.\n\n1. **Kijk zelf** (= Подивись сам) ще раз.\n2. **Vraag een kind** (= Запитай дитину) поруч: **Kun je mij helpen?** (= Можеш мені допомогти?)\n3. **Wacht** (= Чекай) спокійно. Роби далі **volgende som** (= наступний приклад).\n\nУчителька скоро підійде до тебе.","tr":"Bazen öğretmen başka bir çocuğa yardım eder. O zaman bir süre rahatsız etme.\n\n1. Bir kez daha **kijk zelf** (= kendin bak).\n2. Yanındaki bir **kind**'e sor (vraag een kind): **Kun je mij helpen?** (= Bana yardım edebilir misin?)\n3. Sakince **wacht** (= bekle). **Volgende som** (= sonraki işlem) ile devam et.\n\nÖğretmen birazdan yanına gelir.","ro":"Uneori doamna sau domnul învățător ajută alt copil. Atunci nu deranja un pic.\n\n1. **Kijk zelf** (= Uită-te singur) încă o dată.\n2. **Vraag een kind** (= Întreabă un copil) de lângă tine: **Kun je mij helpen?** (= Mă poți ajuta?)\n3. **Wacht** (= Așteaptă) liniștit. Continuă cu **volgende som** (= exercițiul următor).\n\nDoamna învățătoare vine la tine imediat.","bg":"Понякога учителката или учителят помага на друго дете. Тогава за малко не пречи.\n\n1. **Kijk zelf** (= Погледни сам) още веднъж.\n2. **Vraag een kind** (= Попитай дете) до теб: **Kun je mij helpen?** (= Можеш ли да ми помогнеш?)\n3. **Wacht** (= Чакай) спокойно. Продължи със **volgende som** (= следващата задача).\n\nУчителката скоро ще дойде при теб."},
 "De juf helpt een ander kind. Je hebt een vraag. Wat doe je eerst?": {"en":"The teacher is helping another child. You have a question. What do you do first?","ar":"المعلمة تساعد طفلًا آخر. عندك سؤال. ماذا تفعل أولًا؟","uk":"Учителька допомагає іншій дитині. У тебе є питання. Що ти робиш спочатку?","tr":"Öğretmen başka bir çocuğa yardım ediyor. Bir sorun var. Önce ne yaparsın?","ro":"Doamna învățătoare ajută alt copil. Ai o întrebare. Ce faci mai întâi?","bg":"Учителката помага на друго дете. Имаш въпрос. Какво правиш първо?"},
 "Ik kijk zelf nog een keer.": {"en":"I look again myself.","ar":"أنظر بنفسي مرة أخرى.","uk":"Я сам дивлюся ще раз.","tr":"Kendim bir kez daha bakarım.","ro":"Mă mai uit o dată singur.","bg":"Поглеждам сам още веднъж."},
 "Ik roep: juf, juf!": {"en":"I shout: teacher, teacher!","ar":"أصرخ: يا معلمة، يا معلمة!","uk":"Я кричу: вчителько, вчителько!","tr":"Bağırırım: öğretmenim, öğretmenim!","ro":"Strig: doamna, doamna!","bg":"Викам: госпожо, госпожо!"},
 "Ik stop met werken.": {"en":"I stop working.","ar":"أتوقف عن العمل.","uk":"Я перестаю працювати.","tr":"Çalışmayı bırakırım.","ro":"Mă opresc din lucru.","bg":"Спирам да работя."},
 "Ik ga huilen.": {"en":"I start crying.","ar":"أبدأ بالبكاء.","uk":"Я починаю плакати.","tr":"Ağlamaya başlarım.","ro":"Încep să plâng.","bg":"Започвам да плача."},
 "Je snapt het nog niet. De juf is bezig. Wat doe je?": {"en":"You still don't understand. The teacher is busy. What do you do?","ar":"ما زلت لا تفهم. المعلمة مشغولة. ماذا تفعل؟","uk":"Ти ще не розумієш. Учителька зайнята. Що ти робиш?","tr":"Hâlâ anlamadın. Öğretmen meşgul. Ne yaparsın?","ro":"Încă nu înțelegi. Doamna învățătoare e ocupată. Ce faci?","bg":"Още не разбираш. Учителката е заета. Какво правиш?"},
 "Ik vraag het aan een kind naast mij.": {"en":"I ask a child next to me.","ar":"أسأل طفلًا بجانبي.","uk":"Я питаю дитину поруч.","tr":"Yanımdaki bir çocuğa sorarım.","ro":"Întreb un copil de lângă mine.","bg":"Питам дете до мен."},
 "Ik loop naar buiten.": {"en":"I walk outside.","ar":"أمشي إلى الخارج.","uk":"Я виходжу надвір.","tr":"Dışarı yürürüm.","ro":"Ies afară.","bg":"Излизам навън."},
 "Ik gooi mijn werk weg.": {"en":"I throw my work away.","ar":"أرمي عملي.","uk":"Я викидаю свою роботу.","tr":"İşimi atarım.","ro":"Îmi arunc lucrul.","bg":"Изхвърлям работата си."},
 "Hoe vraag je hulp aan het kind naast je?": {"en":"How do you ask the child next to you for help?","ar":"كيف تطلب المساعدة من الطفل الذي بجانبك؟","uk":"Як попросити допомоги в дитини поруч?","tr":"Yanındaki çocuktan nasıl yardım istersin?","ro":"Cum îi ceri ajutor copilului de lângă tine?","bg":"Как молиш детето до теб за помощ?"},
 "Kun je mij helpen?": {"en":"Can you help me?","ar":"هل يمكنك مساعدتي؟","uk":"Можеш мені допомогти?","tr":"Bana yardım edebilir misin?","ro":"Mă poți ajuta?","bg":"Можеш ли да ми помогнеш?"},
 "De juf heeft nu geen tijd. Wat doe je met je vraag?": {"en":"The teacher has no time right now. What do you do with your question?","ar":"المعلمة ليس لديها وقت الآن. ماذا تفعل بسؤالك؟","uk":"Учителька зараз не має часу. Що ти робиш зі своїм питанням?","tr":"Öğretmenin şimdi vakti yok. Sorunla ne yaparsın?","ro":"Doamna învățătoare nu are timp acum. Ce faci cu întrebarea ta?","bg":"Учителката сега няма време. Какво правиш с въпроса си?"},
 "Ik wacht tot de juf tijd heeft.": {"en":"I wait until the teacher has time.","ar":"أنتظر حتى يكون لدى المعلمة وقت.","uk":"Я чекаю, поки вчителька матиме час.","tr":"Öğretmenin vakti olana kadar beklerim.","ro":"Aștept până are doamna învățătoare timp.","bg":"Чакам, докато учителката има време."},
 "Ik ga schreeuwen.": {"en":"I start screaming.","ar":"أبدأ بالصراخ.","uk":"Я починаю кричати.","tr":"Bağırmaya başlarım.","ro":"Încep să țip.","bg":"Започвам да крещя."},
 "Ik doe niets meer.": {"en":"I don't do anything anymore.","ar":"لا أفعل شيئًا بعد ذلك.","uk":"Я більше нічого не роблю.","tr":"Artık hiçbir şey yapmam.","ro":"Nu mai fac nimic.","bg":"Вече не правя нищо."},
 "Je kunt niet verder met een som. Wat doe je terwijl je wacht?": {"en":"You can't go on with a sum. What do you do while you wait?","ar":"لا تستطيع إكمال مسألة. ماذا تفعل وأنت تنتظر؟","uk":"Ти не можеш розв'язати приклад далі. Що ти робиш, поки чекаєш?","tr":"Bir işlemde ilerleyemiyorsun. Beklerken ne yaparsın?","ro":"Nu poți continua un exercițiu. Ce faci cât aștepți?","bg":"Не можеш да продължиш една задача. Какво правиш, докато чакаш?"},
 "Ik ga verder met de volgende som.": {"en":"I go on with the next sum.","ar":"أكمل المسألة التالية.","uk":"Я роблю далі наступний приклад.","tr":"Sonraki işlemle devam ederim.","ro":"Continui cu exercițiul următor.","bg":"Продължавам със следващата задача."},
 "Ik pak een spel.": {"en":"I get a game.","ar":"آخذ لعبة.","uk":"Я беру гру.","tr":"Bir oyun alırım.","ro":"Iau un joc.","bg":"Вземам игра."},
 "Fijne gevoelens": {"en":"Good feelings","ar":"مشاعر جميلة","uk":"Приємні почуття","tr":"Güzel duygular","ro":"Sentimente plăcute","bg":"Хубави чувства"},
 "Je kunt ook zeggen dat je je **fijn** voelt.\n\n**Ik ben blij.** **Ik ben trots.** **Ik voel me goed.**\n**Het gaat goed, dank u.**\n\nDe juf of meester vindt het fijn om dat te horen.": {"en":"You can also say that you feel **fijn** (= good).\n\n**Ik ben blij.** (= I am happy.) **Ik ben trots.** (= I am proud.) **Ik voel me goed.** (= I feel good.)\n**Het gaat goed, dank u.** (= I am fine, thank you.)\n\nThe teacher likes to hear that.","ar":"يمكنك أيضًا أن تقول إنك تشعر بشعور **fijn** (= جميل).\n\n**Ik ben blij.** (= أنا سعيد.) **Ik ben trots.** (= أنا فخور.) **Ik voel me goed.** (= أشعر أنني بخير.)\n**Het gaat goed, dank u.** (= أنا بخير، شكرًا.)\n\nالمعلمة أو المعلم يحب أن يسمع ذلك.","uk":"Ти можеш також сказати, що тобі **fijn** (= добре).\n\n**Ik ben blij.** (= Я радий.) **Ik ben trots.** (= Я пишаюся.) **Ik voel me goed.** (= Мені добре.)\n**Het gaat goed, dank u.** (= Усе добре, дякую.)\n\nУчительці або вчителю приємно це чути.","tr":"Kendini **fijn** (= iyi) hissettiğini de söyleyebilirsin.\n\n**Ik ben blij.** (= Mutluyum.) **Ik ben trots.** (= Gururluyum.) **Ik voel me goed.** (= Kendimi iyi hissediyorum.)\n**Het gaat goed, dank u.** (= İyiyim, teşekkür ederim.)\n\nÖğretmen bunu duymaktan hoşlanır.","ro":"Poți spune și că te simți **fijn** (= bine).\n\n**Ik ben blij.** (= Sunt fericit.) **Ik ben trots.** (= Sunt mândru.) **Ik voel me goed.** (= Mă simt bine.)\n**Het gaat goed, dank u.** (= Îmi merge bine, mulțumesc.)\n\nDoamnei sau domnului învățător îi place să audă asta.","bg":"Можеш да кажеш и че ти е **fijn** (= хубаво).\n\n**Ik ben blij.** (= Радостен съм.) **Ik ben trots.** (= Горд съм.) **Ik voel me goed.** (= Чувствам се добре.)\n**Het gaat goed, dank u.** (= Добре съм, благодаря.)\n\nНа учителката или учителя им е приятно да го чуят."},
 "Je hebt een mooie tekening gemaakt. Hoe voel je je?": {"en":"You made a beautiful drawing. How do you feel?","ar":"رسمت رسمة جميلة. كيف تشعر؟","uk":"Ти намалював гарний малюнок. Як ти почуваєшся?","tr":"Güzel bir resim yaptın. Nasıl hissediyorsun?","ro":"Ai făcut un desen frumos. Cum te simți?","bg":"Нарисува хубава рисунка. Как се чувстваш?"},
 "Ik ben trots.": {"en":"I am proud.","ar":"أنا فخور.","uk":"Я пишаюся.","tr":"Gururluyum.","ro":"Sunt mândru.","bg":"Горд съм."},
 "Je speelt met een vriend. Het is leuk. Hoe voel je je?": {"en":"You are playing with a friend. It is fun. How do you feel?","ar":"تلعب مع صديق. الأمر ممتع. كيف تشعر؟","uk":"Ти граєшся з другом. Це весело. Як ти почуваєшся?","tr":"Bir arkadaşınla oynuyorsun. Eğlenceli. Nasıl hissediyorsun?","ro":"Te joci cu un prieten. E distractiv. Cum te simți?","bg":"Играеш с приятел. Забавно е. Как се чувстваш?"},
 "De juf vraagt: hoe gaat het? Het gaat goed. Wat zeg je?": {"en":"The teacher asks: how are you? You are fine. What do you say?","ar":"المعلمة تسأل: كيف حالك؟ أنت بخير. ماذا تقول؟","uk":"Учителька питає: як справи? У тебе все добре. Що ти скажеш?","tr":"Öğretmen soruyor: nasılsın? İyisin. Ne dersin?","ro":"Doamna învățătoare întreabă: ce faci? Îți merge bine. Ce spui?","bg":"Учителката пита: как си? Добре си. Какво казваш?"},
 "Het gaat goed, dank u.": {"en":"I am fine, thank you.","ar":"أنا بخير، شكرًا.","uk":"Усе добре, дякую.","tr":"İyiyim, teşekkür ederim.","ro":"Îmi merge bine, mulțumesc.","bg":"Добре съм, благодаря."},
 "Ik ben ziek.": {"en":"I am sick.","ar":"أنا مريض.","uk":"Я хворий.","tr":"Hastayım.","ro":"Sunt bolnav.","bg":"Болен съм."},
 "Ik snap het niet.": {"en":"I don't understand it.","ar":"لا أفهم.","uk":"Я не розумію.","tr":"Anlamıyorum.","ro":"Nu înțeleg.","bg":"Не разбирам."},
 "Het was een fijne dag op school. Wat zeg je thuis?": {"en":"It was a nice day at school. What do you say at home?","ar":"كان يومًا جميلًا في المدرسة. ماذا تقول في البيت؟","uk":"Це був гарний день у школі. Що ти скажеш удома?","tr":"Okulda güzel bir gündü. Evde ne dersin?","ro":"A fost o zi frumoasă la școală. Ce spui acasă?","bg":"Беше хубав ден в училище. Какво казваш вкъщи?"},
 "Ik had een leuke dag.": {"en":"I had a nice day.","ar":"كان يومي جميلًا.","uk":"У мене був гарний день.","tr":"Güzel bir gün geçirdim.","ro":"Am avut o zi frumoasă.","bg":"Имах хубав ден."},
 "De som was moeilijk, maar nu snap je hem. Hoe voel je je?": {"en":"The sum was hard, but now you understand it. How do you feel?","ar":"كانت المسألة صعبة، لكنك الآن تفهمها. كيف تشعر؟","uk":"Приклад був важкий, але тепер ти його розумієш. Як ти почуваєшся?","tr":"İşlem zordu ama şimdi anlıyorsun. Nasıl hissediyorsun?","ro":"Exercițiul a fost greu, dar acum îl înțelegi. Cum te simți?","bg":"Задачата беше трудна, но сега я разбираш. Как се чувстваш?"},
 "Ik voel me goed.": {"en":"I feel good.","ar":"أشعر أنني بخير.","uk":"Мені добре.","tr":"Kendimi iyi hissediyorum.","ro":"Mă simt bine.","bg":"Чувствам се добре."},
 "Ik ben verdrietig.": {"en":"I am sad.","ar":"أنا حزين.","uk":"Мені сумно.","tr":"Üzgünüm.","ro":"Sunt trist.","bg":"Тъжен съм."},
 "De juf wil dat je gaat werken.": {"en":"The teacher wants you to start working.","ar":"المعلمة تريد أن تبدأ العمل.","uk":"Учителька хоче, щоб ти почав працювати.","tr":"Öğretmen çalışmaya başlamanı istiyor.","ro":"Doamna învățătoare vrea să începi lucrul.","bg":"Учителката иска да започнеш работа."},
 "Je zoekt de goede bladzijde in je boek.": {"en":"You are looking for the right page in your book.","ar":"تبحث عن الصفحة الصحيحة في كتابك.","uk":"Ти шукаєш правильну сторінку в книжці.","tr":"Kitabında doğru sayfayı arıyorsun.","ro":"Cauți pagina potrivită în carte.","bg":"Търсиш правилната страница в книгата си."},
 "Je wilt even een potlood van een ander kind.": {"en":"You want to use another child's pencil for a moment.","ar":"تريد قلم رصاص من طفل آخر لفترة قصيرة.","uk":"Ти хочеш ненадовго олівець іншої дитини.","tr":"Kısa bir süre başka bir çocuğun kalemini istiyorsun.","ro":"Vrei pentru puțin creionul altui copil.","bg":"Искаш за малко молива на друго дете."},
 "Zachtjes = niet hard.": {"en":"Zachtjes (= quietly) = not loud.","ar":"zachtjes (= بهدوء) = ليس بصوت عالٍ.","uk":"Zachtjes (= тихо) = не голосно.","tr":"Zachtjes (= sessizce) = yüksek sesle değil.","ro":"Zachtjes (= încet) = nu tare.","bg":"Zachtjes (= тихо) = не силно."},
 "Beginnen = nu gaan werken.": {"en":"Beginnen (= to start) = start working now.","ar":"beginnen (= يبدأ) = ابدأ العمل الآن.","uk":"Beginnen (= почати) = зараз почати працювати.","tr":"Beginnen (= başlamak) = şimdi çalışmaya başlamak.","ro":"Beginnen (= a începe) = să începi lucrul acum.","bg":"Beginnen (= започвам) = да започнеш работа сега."},
 "Je werk is af. Je wilt weten wat je daarna doet.": {"en":"Your work is done. You want to know what to do next.","ar":"عملك انتهى. تريد أن تعرف ماذا تفعل بعد ذلك.","uk":"Твоя робота готова. Ти хочеш знати, що робити далі.","tr":"İşin bitti. Sonra ne yapacağını bilmek istiyorsun.","ro":"Ai terminat lucrul. Vrei să știi ce faci după aceea.","bg":"Работата ти е готова. Искаш да знаеш какво правиш после."},
 "Kijk wat er op het bord staat.": {"en":"Look at what is written on the board.","ar":"انظر ماذا مكتوب على السبورة.","uk":"Подивись, що написано на дошці.","tr":"Tahtada ne yazdığına bak.","ro":"Uită-te ce scrie pe tablă.","bg":"Виж какво пише на дъската."},
 "Je boek moet netjes weg.": {"en":"Your book has to be put away neatly.","ar":"يجب أن تضع كتابك بترتيب.","uk":"Книжку треба акуратно прибрати.","tr":"Kitabını düzgünce kaldırman gerekir.","ro":"Cartea trebuie pusă frumos la loc.","bg":"Книгата трябва да се прибере спретнато."},
 "Nakijken = kijken of het goed is.": {"en":"Nakijken (= to check) = look whether it is right.","ar":"nakijken (= يصحح) = يرى إن كان صحيحًا.","uk":"Nakijken (= перевірити) = подивитися, чи правильно.","tr":"Nakijken (= kontrol etmek) = doğru mu diye bakmak.","ro":"Nakijken (= a verifica) = a vedea dacă e corect.","bg":"Nakijken (= проверявам) = да видиш дали е правилно."},
 "Het andere kind is nog aan het werk.": {"en":"The other child is still working.","ar":"الطفل الآخر ما زال يعمل.","uk":"Інша дитина ще працює.","tr":"Diğer çocuk hâlâ çalışıyor.","ro":"Celălalt copil încă lucrează.","bg":"Другото дете още работи."},
 "Misschien vind je het antwoord zelf.": {"en":"Maybe you can find the answer yourself.","ar":"ربما تجد الجواب بنفسك.","uk":"Можливо, ти сам знайдеш відповідь.","tr":"Belki cevabı kendin bulursun.","ro":"Poate găsești singur răspunsul.","bg":"Може би ще намериш отговора сам."},
 "Een ander kind kan je ook helpen.": {"en":"Another child can also help you.","ar":"طفل آخر يمكنه أيضًا مساعدتك.","uk":"Інша дитина теж може тобі допомогти.","tr":"Başka bir çocuk da sana yardım edebilir.","ro":"Și alt copil te poate ajuta.","bg":"И друго дете може да ти помогне."},
 "Je wilt hulp. Vraag het vriendelijk.": {"en":"You want help. Ask nicely.","ar":"تريد مساعدة. اطلبها بلطف.","uk":"Ти хочеш допомоги. Попроси ввічливо.","tr":"Yardım istiyorsun. Kibarca sor.","ro":"Vrei ajutor. Cere frumos.","bg":"Искаш помощ. Помоли учтиво."},
 "De juf komt straks. Even geduld.": {"en":"The teacher will come soon. Be patient for a moment.","ar":"المعلمة ستأتي بعد قليل. اصبر قليلًا.","uk":"Учителька скоро підійде. Трохи терпіння.","tr":"Öğretmen birazdan gelir. Biraz sabret.","ro":"Doamna învățătoare vine imediat. Puțină răbdare.","bg":"Учителката ще дойде скоро. Малко търпение."},
 "Je kunt al wel iets anders doen.": {"en":"You can already do something else.","ar":"يمكنك أن تفعل شيئًا آخر.","uk":"Ти вже можеш зробити щось інше.","tr":"Şimdiden başka bir şey yapabilirsin.","ro":"Poți face deja altceva.","bg":"Вече можеш да направиш нещо друго."},
 "Je hebt iets moois gemaakt. Dat voelt goed.": {"en":"You made something beautiful. That feels good.","ar":"صنعت شيئًا جميلًا. هذا شعور جميل.","uk":"Ти зробив щось гарне. Це приємно.","tr":"Güzel bir şey yaptın. Bu iyi hissettirir.","ro":"Ai făcut ceva frumos. E o senzație bună.","bg":"Направи нещо хубаво. Това е приятно."},
 "Leuk spelen = je lacht.": {"en":"Playing nicely = you laugh.","ar":"اللعب الممتع = تضحك.","uk":"Весело гратися = ти смієшся.","tr":"Eğlenceli oyun = gülersin.","ro":"Joc distractiv = râzi.","bg":"Забавна игра = смееш се."},
 "Het gaat goed met je. Zeg dat.": {"en":"You are doing well. Say that.","ar":"أنت بخير. قل ذلك.","uk":"У тебе все добре. Скажи це.","tr":"İyisin. Bunu söyle.","ro":"Îți merge bine. Spune asta.","bg":"Добре си. Кажи го."},
 "Fijn = leuk.": {"en":"Fijn (= nice) = leuk (= fun).","ar":"fijn (= جميل) = leuk (= ممتع).","uk":"Fijn (= приємний) = leuk (= веселий).","tr":"Fijn (= güzel) = leuk (= eğlenceli).","ro":"Fijn (= plăcut) = leuk (= distractiv).","bg":"Fijn (= приятен) = leuk (= забавен)."},
 "Eindelijk snap je het. Dat voelt fijn.": {"en":"Finally you understand it. That feels nice.","ar":"أخيرًا فهمته. هذا شعور جميل.","uk":"Нарешті ти зрозумів. Це приємно.","tr":"Sonunda anladın. Bu güzel hissettirir.","ro":"În sfârșit înțelegi. E o senzație plăcută.","bg":"Най-сетне разбираш. Това е приятно."},
 // Woorden 3 (2 okt 2026) — door Claude vertaald, nog door moedertaalsprekers laten nakijken.
 "Woorden 3 — kleuren, vormen, tijd en praten (nieuwkomers)": {"en":"Words 3 — colours, shapes, time and talking (newcomers)","ar":"كلمات 3 — الألوان والأشكال والوقت والكلام (للقادمين الجدد)","uk":"Слова 3 — кольори, фігури, час і розмова (новенькі)","tr":"Kelimeler 3 — renkler, şekiller, zaman ve konuşmak (yeni gelenler)","ro":"Cuvinte 3 — culori, forme, timp și vorbit (nou-veniți)","bg":"Думи 3 — цветове, форми, време и говорене (новодошли)"},
 "Kleuren, vormen, groot en klein, waar en wanneer, en woorden om te denken en te vertellen. Met steun in je eigen taal. ~15 min.": {"en":"Colours, shapes, big and small, where and when, and words for thinking and telling. With help in your own language. ~15 min.","ar":"الألوان، الأشكال، كبير وصغير، أين ومتى، وكلمات للتفكير والحكي. مع مساعدة بلغتك. ~15 دقيقة.","uk":"Кольори, фігури, великий і маленький, де і коли, і слова, щоб думати й розповідати. З підтримкою твоєю мовою. ~15 хв.","tr":"Renkler, şekiller, büyük ve küçük, nerede ve ne zaman, düşünmek ve anlatmak için kelimeler. Kendi dilinde destekle. ~15 dk.","ro":"Culori, forme, mare și mic, unde și când, și cuvinte ca să gândești și să povestești. Cu sprijin în limba ta. ~15 min.","bg":"Цветове, форми, голямо и малко, къде и кога, и думи, за да мислиш и разказваш. С помощ на твоя език. ~15 мин."},
 "Welke kleur is het?": {"en":"What colour is it?","ar":"ما لونه؟","uk":"Якого це кольору?","tr":"Hangi renk?","ro":"Ce culoare are?","bg":"Какъв цвят е?"},
 "Welke vorm? Groot of klein?": {"en":"Which shape? Big or small?","ar":"أي شكل؟ كبير أم صغير؟","uk":"Яка фігура? Великий чи маленький?","tr":"Hangi şekil? Büyük mü küçük mü?","ro":"Ce formă? Mare sau mic?","bg":"Каква форма? Голямо или малко?"},
 "Waar is het? Hoeveel?": {"en":"Where is it? How many?","ar":"أين هو؟ كم؟","uk":"Де це? Скільки?","tr":"Nerede? Kaç tane?","ro":"Unde este? Câte?","bg":"Къде е? Колко?"},
 "Wanneer? Wie is aan de beurt?": {"en":"When? Whose turn is it?","ar":"متى؟ دور من؟","uk":"Коли? Чия черга?","tr":"Ne zaman? Sıra kimde?","ro":"Când? Cine e la rând?","bg":"Кога? Кой е на ред?"},
 "Denken en vertellen": {"en":"Thinking and telling","ar":"التفكير والحكي","uk":"Думати й розповідати","tr":"Düşünmek ve anlatmak","ro":"A gândi și a povesti","bg":"Мислене и разказване"},
 "Alles om je heen heeft een **kleur**.\n\n**bruin** · **grijs** · **paars** · **roze** · **zwart**\n\nVraag: **Welke kleur is het?**": {"en":"Everything around you has a **kleur** (= colour).\n\n**bruin** (= brown) · **grijs** (= grey) · **paars** (= purple) · **roze** (= pink) · **zwart** (= black)\n\nAsk: **Welke kleur is het?** (= What colour is it?)","ar":"كل شيء حولك له **kleur** (= لون).\n\n**bruin** (= بني) · **grijs** (= رمادي) · **paars** (= بنفسجي) · **roze** (= وردي) · **zwart** (= أسود)\n\nاسأل: **Welke kleur is het?** (= ما لونه؟)","uk":"Усе навколо тебе має **kleur** (= колір).\n\n**bruin** (= коричневий) · **grijs** (= сірий) · **paars** (= фіолетовий) · **roze** (= рожевий) · **zwart** (= чорний)\n\nЗапитай: **Welke kleur is het?** (= Якого це кольору?)","tr":"Etrafındaki her şeyin bir **kleur**'u (= rengi) var.\n\n**bruin** (= kahverengi) · **grijs** (= gri) · **paars** (= mor) · **roze** (= pembe) · **zwart** (= siyah)\n\nSor: **Welke kleur is het?** (= Hangi renk?)","ro":"Tot ce e în jurul tău are o **kleur** (= culoare).\n\n**bruin** (= maro) · **grijs** (= gri) · **paars** (= mov) · **roze** (= roz) · **zwart** (= negru)\n\nÎntreabă: **Welke kleur is het?** (= Ce culoare are?)","bg":"Всичко около теб има **kleur** (= цвят).\n\n**bruin** (= кафяв) · **grijs** (= сив) · **paars** (= лилав) · **roze** (= розов) · **zwart** (= черен)\n\nПопитай: **Welke kleur is het?** (= Какъв цвят е?)"},
 "Welke kleur heeft chocola?": {"en":"What colour is chocolate?","ar":"ما لون الشوكولاتة؟","uk":"Якого кольору шоколад?","tr":"Çikolata ne renk?","ro":"Ce culoare are ciocolata?","bg":"Какъв цвят е шоколадът?"},
 "Bruin.": {"en":"Brown.","ar":"بني.","uk":"Коричневий.","tr":"Kahverengi.","ro":"Maro.","bg":"Кафяв."},
 "Groen.": {"en":"Green.","ar":"أخضر.","uk":"Зелений.","tr":"Yeşil.","ro":"Verde.","bg":"Зелен."},
 "Roze.": {"en":"Pink.","ar":"وردي.","uk":"Рожевий.","tr":"Pembe.","ro":"Roz.","bg":"Розов."},
 "Wit.": {"en":"White.","ar":"أبيض.","uk":"Білий.","tr":"Beyaz.","ro":"Alb.","bg":"Бял."},
 "Welke kleur heeft een olifant?": {"en":"What colour is an elephant?","ar":"ما لون الفيل؟","uk":"Якого кольору слон?","tr":"Fil ne renk?","ro":"Ce culoare are un elefant?","bg":"Какъв цвят е слонът?"},
 "Grijs.": {"en":"Grey.","ar":"رمادي.","uk":"Сірий.","tr":"Gri.","ro":"Gri.","bg":"Сив."},
 "Geel.": {"en":"Yellow.","ar":"أصفر.","uk":"Жовтий.","tr":"Sarı.","ro":"Galben.","bg":"Жълт."},
 "Paars.": {"en":"Purple.","ar":"بنفسجي.","uk":"Фіолетовий.","tr":"Mor.","ro":"Mov.","bg":"Лилав."},
 "Rood.": {"en":"Red.","ar":"أحمر.","uk":"Червоний.","tr":"Kırmızı.","ro":"Roșu.","bg":"Червен."},
 "Rood en blauw samen. Welke kleur krijg je?": {"en":"Red and blue together. What colour do you get?","ar":"الأحمر والأزرق معًا. ما اللون الذي تحصل عليه؟","uk":"Червоний і синій разом. Який колір вийде?","tr":"Kırmızı ve mavi birlikte. Hangi renk olur?","ro":"Roșu și albastru împreună. Ce culoare iese?","bg":"Червено и синьо заедно. Какъв цвят се получава?"},
 "Welke kleur heeft een varken?": {"en":"What colour is a pig?","ar":"ما لون الخنزير؟","uk":"Якого кольору свиня?","tr":"Domuz ne renk?","ro":"Ce culoare are un porc?","bg":"Какъв цвят е прасето?"},
 "Blauw.": {"en":"Blue.","ar":"أزرق.","uk":"Синій.","tr":"Mavi.","ro":"Albastru.","bg":"Син."},
 "Zwart.": {"en":"Black.","ar":"أسود.","uk":"Чорний.","tr":"Siyah.","ro":"Negru.","bg":"Черен."},
 "Het is nacht. Welke kleur heeft de lucht?": {"en":"It is night. What colour is the sky?","ar":"إنه الليل. ما لون السماء؟","uk":"Зараз ніч. Якого кольору небо?","tr":"Gece oldu. Gökyüzü ne renk?","ro":"E noapte. Ce culoare are cerul?","bg":"Нощ е. Какъв цвят е небето?"},
 "Vormen, groot en klein": {"en":"Shapes, big and small","ar":"الأشكال، كبير وصغير","uk":"Фігури, великий і маленький","tr":"Şekiller, büyük ve küçük","ro":"Forme, mare și mic","bg":"Форми, голямо и малко"},
 "**Een cirkel** is rond. **Een driehoek** heeft drie hoeken.\n\n**groot** ↔ **klein** · **hoog** · **dik** ↔ **dun**": {"en":"**Een cirkel** (= a circle) is round. **Een driehoek** (= a triangle) has three corners.\n\n**groot** (= big) ↔ **klein** (= small) · **hoog** (= high/tall) · **dik** (= thick) ↔ **dun** (= thin)","ar":"**Een cirkel** (= دائرة) مستديرة. **Een driehoek** (= مثلث) له ثلاث زوايا.\n\n**groot** (= كبير) ↔ **klein** (= صغير) · **hoog** (= عالٍ) · **dik** (= سميك) ↔ **dun** (= رفيع)","uk":"**Een cirkel** (= коло) кругле. **Een driehoek** (= трикутник) має три кути.\n\n**groot** (= великий) ↔ **klein** (= маленький) · **hoog** (= високий) · **dik** (= товстий) ↔ **dun** (= тонкий)","tr":"**Een cirkel** (= daire) yuvarlaktır. **Een driehoek**'in (= üçgen) üç köşesi var.\n\n**groot** (= büyük) ↔ **klein** (= küçük) · **hoog** (= yüksek) · **dik** (= kalın) ↔ **dun** (= ince)","ro":"**Een cirkel** (= un cerc) este rotund. **Een driehoek** (= un triunghi) are trei colțuri.\n\n**groot** (= mare) ↔ **klein** (= mic) · **hoog** (= înalt) · **dik** (= gros) ↔ **dun** (= subțire)","bg":"**Een cirkel** (= кръг) е кръгъл. **Een driehoek** (= триъгълник) има три ъгъла.\n\n**groot** (= голям) ↔ **klein** (= малък) · **hoog** (= висок) · **dik** (= дебел) ↔ **dun** (= тънък)"},
 "Welke vorm heeft een bord?": {"en":"What shape is a plate?","ar":"ما شكل الصحن؟","uk":"Якої форми тарілка?","tr":"Tabak hangi şekilde?","ro":"Ce formă are o farfurie?","bg":"Каква форма има чинията?"},
 "Een cirkel.": {"en":"A circle.","ar":"دائرة.","uk":"Коло.","tr":"Bir daire.","ro":"Un cerc.","bg":"Кръг."},
 "Een driehoek.": {"en":"A triangle.","ar":"مثلث.","uk":"Трикутник.","tr":"Bir üçgen.","ro":"Un triunghi.","bg":"Триъгълник."},
 "Een lijn.": {"en":"A line.","ar":"خط.","uk":"Лінія.","tr":"Bir çizgi.","ro":"O linie.","bg":"Линия."},
 "Een vierkant.": {"en":"A square.","ar":"مربع.","uk":"Квадрат.","tr":"Bir kare.","ro":"Un pătrat.","bg":"Квадрат."},
 "Een vorm met drie hoeken. Hoe heet die?": {"en":"A shape with three corners. What is it called?","ar":"شكل له ثلاث زوايا. ما اسمه؟","uk":"Фігура з трьома кутами. Як вона називається?","tr":"Üç köşeli bir şekil. Adı ne?","ro":"O formă cu trei colțuri. Cum se numește?","bg":"Форма с три ъгъла. Как се казва?"},
 "Een olifant is groot. Een muis is…": {"en":"An elephant is big. A mouse is…","ar":"الفيل كبير. الفأر…","uk":"Слон великий. Миша…","tr":"Fil büyüktür. Fare…","ro":"Un elefant e mare. Un șoarece e…","bg":"Слонът е голям. Мишката е…"},
 "Klein.": {"en":"Small.","ar":"صغير.","uk":"Маленька.","tr":"Küçük.","ro":"Mic.","bg":"Малка."},
 "Groot.": {"en":"Big.","ar":"كبير.","uk":"Великий.","tr":"Büyük.","ro":"Mare.","bg":"Голям."},
 "Hoog.": {"en":"High.","ar":"عالٍ.","uk":"Високий.","tr":"Yüksek.","ro":"Înalt.","bg":"Висок."},
 "Dik.": {"en":"Thick.","ar":"سميك.","uk":"Товстий.","tr":"Kalın.","ro":"Gros.","bg":"Дебел."},
 "Een toren gaat tot in de lucht. De toren is…": {"en":"A tower goes up into the sky. The tower is…","ar":"البرج يصل إلى السماء. البرج…","uk":"Вежа сягає неба. Вежа…","tr":"Bir kule gökyüzüne kadar çıkıyor. Kule…","ro":"Un turn ajunge până la cer. Turnul este…","bg":"Кулата стига до небето. Кулата е…"},
 "Dun.": {"en":"Thin.","ar":"رفيع.","uk":"Тонкий.","tr":"İnce.","ro":"Subțire.","bg":"Тънък."},
 "Kort.": {"en":"Short.","ar":"قصير.","uk":"Короткий.","tr":"Kısa.","ro":"Scurt.","bg":"Къс."},
 "Welk boek heeft veel bladzijden?": {"en":"Which book has a lot of pages?","ar":"أي كتاب فيه صفحات كثيرة؟","uk":"Яка книжка має багато сторінок?","tr":"Hangi kitabın çok sayfası var?","ro":"Care carte are multe pagini?","bg":"Коя книга има много страници?"},
 "Het dikke boek.": {"en":"The thick book.","ar":"الكتاب السميك.","uk":"Товста книжка.","tr":"Kalın kitap.","ro":"Cartea groasă.","bg":"Дебелата книга."},
 "Het dunne boek.": {"en":"The thin book.","ar":"الكتاب الرفيع.","uk":"Тонка книжка.","tr":"İnce kitap.","ro":"Cartea subțire.","bg":"Тънката книга."},
 "Het kleine boek.": {"en":"The small book.","ar":"الكتاب الصغير.","uk":"Маленька книжка.","tr":"Küçük kitap.","ro":"Cartea mică.","bg":"Малката книга."},
 "Het lege boek.": {"en":"The empty book.","ar":"الكتاب الفارغ.","uk":"Порожня книжка.","tr":"Boş kitap.","ro":"Cartea goală.","bg":"Празната книга."},
 "Waar? Hoeveel?": {"en":"Where? How many?","ar":"أين؟ كم؟","uk":"Де? Скільки?","tr":"Nerede? Kaç tane?","ro":"Unde? Câte?","bg":"Къде? Колко?"},
 "**dichtbij** ↔ **ver weg**\n**erop** (op iets) · **eruit** (uit iets)\n**half** = de helft\n\nTellen: … vier, vijf, **zes**, **zeven** …": {"en":"**dichtbij** (= close by) ↔ **ver weg** (= far away)\n**erop** (= on it) · **eruit** (= out of it)\n**half** (= half) = de helft\n\nCounting: … vier, vijf, **zes** (= six), **zeven** (= seven) …","ar":"**dichtbij** (= قريب) ↔ **ver weg** (= بعيد)\n**erop** (= عليه) · **eruit** (= منه، إلى الخارج)\n**half** (= نصف) = de helft\n\nالعدّ: … vier، vijf، **zes** (= ستة)، **zeven** (= سبعة) …","uk":"**dichtbij** (= близько) ↔ **ver weg** (= далеко)\n**erop** (= на це) · **eruit** (= з цього)\n**half** (= половина) = de helft\n\nЛічба: … vier, vijf, **zes** (= шість), **zeven** (= сім) …","tr":"**dichtbij** (= yakın) ↔ **ver weg** (= uzak)\n**erop** (= üstüne) · **eruit** (= içinden dışarı)\n**half** (= yarım) = de helft\n\nSayma: … vier, vijf, **zes** (= altı), **zeven** (= yedi) …","ro":"**dichtbij** (= aproape) ↔ **ver weg** (= departe)\n**erop** (= pe el) · **eruit** (= afară din el)\n**half** (= jumătate) = de helft\n\nNumărat: … vier, vijf, **zes** (= șase), **zeven** (= șapte) …","bg":"**dichtbij** (= близо) ↔ **ver weg** (= далеч)\n**erop** (= върху него) · **eruit** (= навън от него)\n**half** (= половин) = de helft\n\nБроене: … vier, vijf, **zes** (= шест), **zeven** (= седем) …"},
 "De school is naast je huis. Is de school ver weg of dichtbij?": {"en":"The school is next to your house. Is the school far away or close by?","ar":"المدرسة بجانب بيتك. هل المدرسة بعيدة أم قريبة؟","uk":"Школа поруч із твоїм домом. Школа далеко чи близько?","tr":"Okul evinin yanında. Okul uzak mı yakın mı?","ro":"Școala e lângă casa ta. Școala e departe sau aproape?","bg":"Училището е до къщата ти. Далеч ли е училището или близо?"},
 "Dichtbij.": {"en":"Close by.","ar":"قريبة.","uk":"Близько.","tr":"Yakın.","ro":"Aproape.","bg":"Близо."},
 "Ver weg.": {"en":"Far away.","ar":"بعيدة.","uk":"Далеко.","tr":"Uzak.","ro":"Departe.","bg":"Далеч."},
 "Leeg.": {"en":"Empty.","ar":"فارغ.","uk":"Порожній.","tr":"Boş.","ro":"Gol.","bg":"Празен."},
 "Leg het boek op de tafel. Waar is het boek nu?": {"en":"Put the book on the table. Where is the book now?","ar":"ضع الكتاب على الطاولة. أين الكتاب الآن؟","uk":"Поклади книжку на стіл. Де тепер книжка?","tr":"Kitabı masaya koy. Kitap şimdi nerede?","ro":"Pune cartea pe masă. Unde e cartea acum?","bg":"Сложи книгата на масата. Къде е книгата сега?"},
 "Het boek ligt erop.": {"en":"The book is lying on it.","ar":"الكتاب موضوع عليها.","uk":"Книжка лежить на ньому.","tr":"Kitap üstünde duruyor.","ro":"Cartea stă pe ea.","bg":"Книгата лежи върху нея."},
 "Het boek ligt eruit.": {"en":"The book is lying out of it.","ar":"الكتاب موضوع خارجها.","uk":"Книжка лежить поза ним.","tr":"Kitap dışında duruyor.","ro":"Cartea stă afară din ea.","bg":"Книгата лежи навън от нея."},
 "Het boek ligt ver weg.": {"en":"The book is lying far away.","ar":"الكتاب موضوع بعيدًا.","uk":"Книжка лежить далеко.","tr":"Kitap uzakta duruyor.","ro":"Cartea stă departe.","bg":"Книгата лежи далеч."},
 "Het boek is weg.": {"en":"The book is gone.","ar":"الكتاب اختفى.","uk":"Книжки немає.","tr":"Kitap kayboldu.","ro":"Cartea a dispărut.","bg":"Книгата я няма."},
 "Pak de pen uit je etui. Wat doe je met de pen?": {"en":"Take the pen out of your pencil case. What do you do with the pen?","ar":"أخرج القلم من المقلمة. ماذا تفعل بالقلم؟","uk":"Візьми ручку з пенала. Що ти робиш із ручкою?","tr":"Kalemi kalem kutundan al. Kalemle ne yaparsın?","ro":"Ia pixul din penar. Ce faci cu pixul?","bg":"Вземи химикалката от несесера. Какво правиш с химикалката?"},
 "Ik haal de pen eruit.": {"en":"I take the pen out of it.","ar":"أُخرج القلم منها.","uk":"Я виймаю ручку з нього.","tr":"Kalemi içinden çıkarırım.","ro":"Scot pixul din el.","bg":"Изваждам химикалката от него."},
 "Ik leg de pen erop.": {"en":"I put the pen on it.","ar":"أضع القلم عليها.","uk":"Я кладу ручку на нього.","tr":"Kalemi üstüne koyarım.","ro":"Pun pixul pe el.","bg":"Слагам химикалката върху него."},
 "Ik gooi de pen weg.": {"en":"I throw the pen away.","ar":"أرمي القلم.","uk":"Я викидаю ручку.","tr":"Kalemi atarım.","ro":"Arunc pixul.","bg":"Изхвърлям химикалката."},
 "Ik eet de pen.": {"en":"I eat the pen.","ar":"آكل القلم.","uk":"Я їм ручку.","tr":"Kalemi yerim.","ro":"Mănânc pixul.","bg":"Ям химикалката."},
 "Je eet de helft van je appel. Wat heb je nog?": {"en":"You eat half of your apple. What do you have left?","ar":"تأكل نصف تفاحتك. ماذا بقي معك؟","uk":"Ти з'їв половину яблука. Що в тебе залишилось?","tr":"Elmanın yarısını yiyorsun. Elinde ne kaldı?","ro":"Mănânci jumătate din măr. Ce ți-a rămas?","bg":"Изяждаш половината ябълка. Какво ти остава?"},
 "Een halve appel.": {"en":"Half an apple.","ar":"نصف تفاحة.","uk":"Половина яблука.","tr":"Yarım elma.","ro":"O jumătate de măr.","bg":"Половин ябълка."},
 "Een hele appel.": {"en":"A whole apple.","ar":"تفاحة كاملة.","uk":"Ціле яблуко.","tr":"Bütün bir elma.","ro":"Un măr întreg.","bg":"Цяла ябълка."},
 "Twee appels.": {"en":"Two apples.","ar":"تفاحتان.","uk":"Два яблука.","tr":"İki elma.","ro":"Două mere.","bg":"Две ябълки."},
 "Geen appel.": {"en":"No apple.","ar":"لا تفاحة.","uk":"Жодного яблука.","tr":"Hiç elma yok.","ro":"Niciun măr.","bg":"Никаква ябълка."},
 "Hoeveel dagen heeft een week?": {"en":"How many days does a week have?","ar":"كم يومًا في الأسبوع؟","uk":"Скільки днів у тижні?","tr":"Bir haftada kaç gün var?","ro":"Câte zile are o săptămână?","bg":"Колко дни има една седмица?"},
 "Zeven.": {"en":"Seven.","ar":"سبعة.","uk":"Сім.","tr":"Yedi.","ro":"Șapte.","bg":"Седем."},
 "Zes.": {"en":"Six.","ar":"ستة.","uk":"Шість.","tr":"Altı.","ro":"Șase.","bg":"Шест."},
 "Vijf.": {"en":"Five.","ar":"خمسة.","uk":"П'ять.","tr":"Beş.","ro":"Cinci.","bg":"Пет."},
 "Tien.": {"en":"Ten.","ar":"عشرة.","uk":"Десять.","tr":"On.","ro":"Zece.","bg":"Десет."},
 "Tel: vier, vijf, … Welk getal komt nu?": {"en":"Count: four, five, … Which number comes next?","ar":"عُدّ: أربعة، خمسة، … ما العدد التالي؟","uk":"Лічи: чотири, п'ять, … Яке число далі?","tr":"Say: dört, beş, … Sırada hangi sayı var?","ro":"Numără: patru, cinci, … Ce număr urmează?","bg":"Брой: четири, пет, … Кое число идва сега?"},
 "Drie.": {"en":"Three.","ar":"ثلاثة.","uk":"Три.","tr":"Üç.","ro":"Trei.","bg":"Три."},
 "Tijd en beurt": {"en":"Time and turns","ar":"الوقت والدور","uk":"Час і черга","tr":"Zaman ve sıra","ro":"Timp și rând","bg":"Време и ред"},
 "**gisteren** → **vandaag** → **morgen**\nNa 12 uur is het **middag**.\n\n**Aan de beurt** = nu mag jij.\nIets zeggen? **Steek je vinger op.**": {"en":"**gisteren** (= yesterday) → **vandaag** (= today) → **morgen** (= tomorrow)\nAfter 12 o'clock it is **middag** (= afternoon).\n\n**Aan de beurt** (= your turn) = now you may.\nWant to say something? **Steek je vinger op.** (= Put your finger up.)","ar":"**gisteren** (= أمس) → **vandaag** (= اليوم) → **morgen** (= غدًا)\nبعد الساعة 12 يكون **middag** (= بعد الظهر).\n\n**Aan de beurt** (= دورك) = الآن يمكنك.\nتريد أن تقول شيئًا؟ **Steek je vinger op.** (= ارفع إصبعك.)","uk":"**gisteren** (= учора) → **vandaag** (= сьогодні) → **morgen** (= завтра)\nПісля 12 години — **middag** (= день, після обіду).\n\n**Aan de beurt** (= твоя черга) = тепер можна тобі.\nХочеш щось сказати? **Steek je vinger op.** (= Підніми руку.)","tr":"**gisteren** (= dün) → **vandaag** (= bugün) → **morgen** (= yarın)\nSaat 12'den sonra **middag** (= öğleden sonra) olur.\n\n**Aan de beurt** (= sıra sende) = şimdi sen.\nBir şey mi söylemek istiyorsun? **Steek je vinger op.** (= Parmağını kaldır.)","ro":"**gisteren** (= ieri) → **vandaag** (= azi) → **morgen** (= mâine)\nDupă ora 12 este **middag** (= după-amiază).\n\n**Aan de beurt** (= e rândul tău) = acum poți tu.\nVrei să spui ceva? **Steek je vinger op.** (= Ridică degetul.)","bg":"**gisteren** (= вчера) → **vandaag** (= днес) → **morgen** (= утре)\nСлед 12 часа е **middag** (= следобед).\n\n**Aan de beurt** (= твой ред е) = сега можеш ти.\nИскаш да кажеш нещо? **Steek je vinger op.** (= Вдигни пръст.)"},
 "Niet gisteren, niet morgen, maar nu. Hoe heet die dag?": {"en":"Not yesterday, not tomorrow, but now. What is that day called?","ar":"ليس أمس، ولا غدًا، بل الآن. ما اسم هذا اليوم؟","uk":"Не вчора, не завтра, а зараз. Як називається цей день?","tr":"Dün değil, yarın değil, şimdi. O günün adı ne?","ro":"Nu ieri, nu mâine, ci acum. Cum se numește ziua aceea?","bg":"Не вчера, не утре, а сега. Как се казва този ден?"},
 "Vandaag.": {"en":"Today.","ar":"اليوم.","uk":"Сьогодні.","tr":"Bugün.","ro":"Azi.","bg":"Днес."},
 "Gisteren.": {"en":"Yesterday.","ar":"أمس.","uk":"Учора.","tr":"Dün.","ro":"Ieri.","bg":"Вчера."},
 "Morgen.": {"en":"Tomorrow.","ar":"غدًا.","uk":"Завтра.","tr":"Yarın.","ro":"Mâine.","bg":"Утре."},
 "Week.": {"en":"Week.","ar":"أسبوع.","uk":"Тиждень.","tr":"Hafta.","ro":"Săptămână.","bg":"Седмица."},
 "De dag vóór vandaag. Hoe heet die?": {"en":"The day before today. What is it called?","ar":"اليوم الذي قبل اليوم. ما اسمه؟","uk":"День перед сьогодні. Як він називається?","tr":"Bugünden önceki gün. Adı ne?","ro":"Ziua dinainte de azi. Cum se numește?","bg":"Денят преди днес. Как се казва?"},
 "Middag.": {"en":"Afternoon.","ar":"بعد الظهر.","uk":"День (після обіду).","tr":"Öğleden sonra.","ro":"După-amiază.","bg":"Следобед."},
 "Het is 12 uur. Je hebt gegeten. Welk deel van de dag begint nu?": {"en":"It is 12 o'clock. You have eaten. Which part of the day starts now?","ar":"الساعة 12. أكلت. أي جزء من اليوم يبدأ الآن؟","uk":"Зараз 12 година. Ти поїв. Яка частина дня починається?","tr":"Saat 12. Yemek yedin. Günün hangi bölümü başlıyor?","ro":"E ora 12. Ai mâncat. Ce parte a zilei începe acum?","bg":"12 часът е. Ти се нахрани. Коя част от деня започва сега?"},
 "De middag.": {"en":"The afternoon.","ar":"بعد الظهر.","uk":"Друга половина дня.","tr":"Öğleden sonra.","ro":"După-amiaza.","bg":"Следобедът."},
 "De nacht.": {"en":"The night.","ar":"الليل.","uk":"Ніч.","tr":"Gece.","ro":"Noaptea.","bg":"Нощта."},
 "De ochtend.": {"en":"The morning.","ar":"الصباح.","uk":"Ранок.","tr":"Sabah.","ro":"Dimineața.","bg":"Сутринта."},
 "De week.": {"en":"The week.","ar":"الأسبوع.","uk":"Тиждень.","tr":"Hafta.","ro":"Săptămâna.","bg":"Седмицата."},
 "De juf zegt: jij bent aan de beurt. Wat betekent dat?": {"en":"The teacher says: it is your turn. What does that mean?","ar":"المعلمة تقول: إنه دورك. ماذا يعني ذلك؟","uk":"Учителька каже: твоя черга. Що це означає?","tr":"Öğretmen diyor ki: sıra sende. Bu ne demek?","ro":"Doamna învățătoare spune: e rândul tău. Ce înseamnă asta?","bg":"Учителката казва: твой ред е. Какво означава това?"},
 "Nu mag jij.": {"en":"Now you may.","ar":"الآن يمكنك أنت.","uk":"Тепер можна тобі.","tr":"Şimdi sen yapabilirsin.","ro":"Acum poți tu.","bg":"Сега можеш ти."},
 "Je moet stil zijn.": {"en":"You have to be quiet.","ar":"يجب أن تكون هادئًا.","uk":"Ти маєш бути тихо.","tr":"Sessiz olmalısın.","ro":"Trebuie să stai liniștit.","bg":"Трябва да мълчиш."},
 "Je mag naar huis.": {"en":"You may go home.","ar":"يمكنك الذهاب إلى البيت.","uk":"Можеш іти додому.","tr":"Eve gidebilirsin.","ro":"Poți merge acasă.","bg":"Можеш да си отидеш вкъщи."},
 "Je bent klaar.": {"en":"You are finished.","ar":"أنت انتهيت.","uk":"Ти закінчив.","tr":"Bitirdin.","ro":"Ai terminat.","bg":"Готов си."},
 "Je wilt iets zeggen in de klas. Wat doe je eerst?": {"en":"You want to say something in class. What do you do first?","ar":"تريد أن تقول شيئًا في الصف. ماذا تفعل أولًا؟","uk":"Ти хочеш щось сказати в класі. Що ти робиш спочатку?","tr":"Sınıfta bir şey söylemek istiyorsun. Önce ne yaparsın?","ro":"Vrei să spui ceva în clasă. Ce faci mai întâi?","bg":"Искаш да кажеш нещо в класа. Какво правиш първо?"},
 "Ik steek mijn vinger op.": {"en":"I put my finger up.","ar":"أرفع إصبعي.","uk":"Я піднімаю руку.","tr":"Parmağımı kaldırırım.","ro":"Ridic degetul.","bg":"Вдигам пръст."},
 "Ik loop naar de juf.": {"en":"I walk to the teacher.","ar":"أمشي إلى المعلمة.","uk":"Я йду до вчительки.","tr":"Öğretmenin yanına yürürüm.","ro":"Merg la doamna învățătoare.","bg":"Отивам при учителката."},
 "Ik ga staan.": {"en":"I stand up.","ar":"أقف.","uk":"Я встаю.","tr":"Ayağa kalkarım.","ro":"Mă ridic în picioare.","bg":"Ставам прав."},
 "**Ik denk even na.** **Ik wil iets vertellen.**\n**Waarom?** → **Omdat …**\n\n**makkelijk** ↔ **moeilijk**\n**Ik ben gelukkig.** **Ik durf het!**": {"en":"**Ik denk even na.** (= I think for a moment.) **Ik wil iets vertellen.** (= I want to tell something.)\n**Waarom?** (= Why?) → **Omdat …** (= Because …)\n\n**makkelijk** (= easy) ↔ **moeilijk** (= difficult)\n**Ik ben gelukkig.** (= I am happy.) **Ik durf het!** (= I dare to do it!)","ar":"**Ik denk even na.** (= أفكر قليلًا.) **Ik wil iets vertellen.** (= أريد أن أحكي شيئًا.)\n**Waarom?** (= لماذا؟) → **Omdat …** (= لأن …)\n\n**makkelijk** (= سهل) ↔ **moeilijk** (= صعب)\n**Ik ben gelukkig.** (= أنا سعيد جدًا.) **Ik durf het!** (= أتجرأ على ذلك!)","uk":"**Ik denk even na.** (= Я трохи подумаю.) **Ik wil iets vertellen.** (= Я хочу щось розповісти.)\n**Waarom?** (= Чому?) → **Omdat …** (= Тому що …)\n\n**makkelijk** (= легко) ↔ **moeilijk** (= важко)\n**Ik ben gelukkig.** (= Я щасливий.) **Ik durf het!** (= Я наважуюсь!)","tr":"**Ik denk even na.** (= Biraz düşünüyorum.) **Ik wil iets vertellen.** (= Bir şey anlatmak istiyorum.)\n**Waarom?** (= Neden?) → **Omdat …** (= Çünkü …)\n\n**makkelijk** (= kolay) ↔ **moeilijk** (= zor)\n**Ik ben gelukkig.** (= Mutluyum.) **Ik durf het!** (= Cesaret ediyorum!)","ro":"**Ik denk even na.** (= Mă gândesc puțin.) **Ik wil iets vertellen.** (= Vreau să povestesc ceva.)\n**Waarom?** (= De ce?) → **Omdat …** (= Pentru că …)\n\n**makkelijk** (= ușor) ↔ **moeilijk** (= greu)\n**Ik ben gelukkig.** (= Sunt fericit.) **Ik durf het!** (= Îndrăznesc!)","bg":"**Ik denk even na.** (= Ще помисля малко.) **Ik wil iets vertellen.** (= Искам да разкажа нещо.)\n**Waarom?** (= Защо?) → **Omdat …** (= Защото …)\n\n**makkelijk** (= лесно) ↔ **moeilijk** (= трудно)\n**Ik ben gelukkig.** (= Щастлив съм.) **Ik durf het!** (= Смея!)"},
 "Je weet het antwoord niet meteen. Wat doe je?": {"en":"You don't know the answer right away. What do you do?","ar":"لا تعرف الجواب فورًا. ماذا تفعل؟","uk":"Ти не знаєш відповіді одразу. Що ти робиш?","tr":"Cevabı hemen bilmiyorsun. Ne yaparsın?","ro":"Nu știi imediat răspunsul. Ce faci?","bg":"Не знаеш отговора веднага. Какво правиш?"},
 "Ik denk even na.": {"en":"I think for a moment.","ar":"أفكر قليلًا.","uk":"Я трохи подумаю.","tr":"Biraz düşünürüm.","ro":"Mă gândesc puțin.","bg":"Помислям малко."},
 "Ik stop.": {"en":"I stop.","ar":"أتوقف.","uk":"Я зупиняюся.","tr":"Dururum.","ro":"Mă opresc.","bg":"Спирам."},
 "Ik roep: weet ik niet!": {"en":"I shout: don't know!","ar":"أصرخ: لا أعرف!","uk":"Я кричу: не знаю!","tr":"Bağırırım: bilmiyorum!","ro":"Strig: nu știu!","bg":"Викам: не знам!"},
 "Je wilt de juf iets over je weekend vertellen. Wat zeg je?": {"en":"You want to tell the teacher something about your weekend. What do you say?","ar":"تريد أن تحكي للمعلمة شيئًا عن عطلة نهاية الأسبوع. ماذا تقول؟","uk":"Ти хочеш розповісти вчительці щось про свої вихідні. Що ти скажеш?","tr":"Öğretmene hafta sonun hakkında bir şey anlatmak istiyorsun. Ne dersin?","ro":"Vrei să-i povestești doamnei învățătoare ceva despre weekendul tău. Ce spui?","bg":"Искаш да разкажеш на учителката нещо за уикенда си. Какво казваш?"},
 "Ik wil iets vertellen.": {"en":"I want to tell something.","ar":"أريد أن أحكي شيئًا.","uk":"Я хочу щось розповісти.","tr":"Bir şey anlatmak istiyorum.","ro":"Vreau să povestesc ceva.","bg":"Искам да разкажа нещо."},
 "Waarom heb je een jas aan?": {"en":"Why are you wearing a coat?","ar":"لماذا تلبس معطفًا؟","uk":"Чому ти в куртці?","tr":"Neden mont giyiyorsun?","ro":"De ce porți geacă?","bg":"Защо си с яке?"},
 "Omdat het koud is.": {"en":"Because it is cold.","ar":"لأن الجو بارد.","uk":"Тому що холодно.","tr":"Çünkü hava soğuk.","ro":"Pentru că e frig.","bg":"Защото е студено."},
 "Omdat het warm is.": {"en":"Because it is warm.","ar":"لأن الجو دافئ.","uk":"Тому що тепло.","tr":"Çünkü hava sıcak.","ro":"Pentru că e cald.","bg":"Защото е топло."},
 "Omdat ik blij ben.": {"en":"Because I am happy.","ar":"لأنني سعيد.","uk":"Тому що я радий.","tr":"Çünkü mutluyum.","ro":"Pentru că sunt fericit.","bg":"Защото съм радостен."},
 "Omdat het pauze is.": {"en":"Because it is break time.","ar":"لأنها الاستراحة.","uk":"Тому що перерва.","tr":"Çünkü teneffüs.","ro":"Pentru că e pauză.","bg":"Защото е междучасие."},
 "Een som is niet moeilijk. De som is…": {"en":"A sum is not difficult. The sum is…","ar":"المسألة ليست صعبة. المسألة…","uk":"Приклад не важкий. Приклад…","tr":"Bir işlem zor değil. İşlem…","ro":"Un exercițiu nu e greu. Exercițiul este…","bg":"Задачата не е трудна. Задачата е…"},
 "Makkelijk.": {"en":"Easy.","ar":"سهلة.","uk":"Легкий.","tr":"Kolay.","ro":"Ușor.","bg":"Лесна."},
 "Moeilijk.": {"en":"Difficult.","ar":"صعبة.","uk":"Важкий.","tr":"Zor.","ro":"Greu.","bg":"Трудна."},
 "Eng.": {"en":"Scary.","ar":"مخيفة.","uk":"Страшний.","tr":"Korkunç.","ro":"Înfricoșător.","bg":"Страшна."},
 "Je hebt een nieuwe vriend. Je bent heel blij. Hoe voel je je?": {"en":"You have a new friend. You are very happy. How do you feel?","ar":"عندك صديق جديد. أنت سعيد جدًا. كيف تشعر؟","uk":"У тебе новий друг. Ти дуже радий. Як ти почуваєшся?","tr":"Yeni bir arkadaşın var. Çok mutlusun. Nasıl hissediyorsun?","ro":"Ai un prieten nou. Ești foarte bucuros. Cum te simți?","bg":"Имаш нов приятел. Много се радваш. Как се чувстваш?"},
 "Ik ben gelukkig.": {"en":"I am happy (very happy).","ar":"أنا سعيد جدًا.","uk":"Я щасливий.","tr":"Çok mutluyum.","ro":"Sunt fericit.","bg":"Щастлив съм."},
 "Je bent een beetje bang, maar je doet het toch. Wat zeg je?": {"en":"You are a little scared, but you do it anyway. What do you say?","ar":"أنت خائف قليلًا، لكنك تفعلها رغم ذلك. ماذا تقول؟","uk":"Тобі трохи страшно, але ти все одно це робиш. Що ти скажеш?","tr":"Biraz korkuyorsun ama yine de yapıyorsun. Ne dersin?","ro":"Ți-e puțin frică, dar o faci totuși. Ce spui?","bg":"Малко те е страх, но все пак го правиш. Какво казваш?"},
 "Ik durf het!": {"en":"I dare to do it!","ar":"أتجرأ على ذلك!","uk":"Я наважуюсь!","tr":"Cesaret ediyorum!","ro":"Îndrăznesc!","bg":"Смея!"},
 "Ik wil naar huis.": {"en":"I want to go home.","ar":"أريد أن أذهب إلى البيت.","uk":"Я хочу додому.","tr":"Eve gitmek istiyorum.","ro":"Vreau acasă.","bg":"Искам да си отида вкъщи."},
 "Denk aan een reep chocola.": {"en":"Think of a chocolate bar.","ar":"فكّر في لوح شوكولاتة.","uk":"Згадай плитку шоколаду.","tr":"Bir çikolatayı düşün.","ro":"Gândește-te la o tabletă de ciocolată.","bg":"Помисли за блокче шоколад."},
 "Een olifant is niet vrolijk gekleurd.": {"en":"An elephant is not brightly coloured.","ar":"الفيل ليس ملوّنًا بألوان زاهية.","uk":"Слон не яскравого кольору.","tr":"Fil rengârenk değildir.","ro":"Un elefant nu are culori vesele.","bg":"Слонът не е с ярък цвят."},
 "Meng rood met blauw.": {"en":"Mix red with blue.","ar":"اخلط الأحمر مع الأزرق.","uk":"Змішай червоний із синім.","tr":"Kırmızıyı maviyle karıştır.","ro":"Amestecă roșu cu albastru.","bg":"Смеси червено със синьо."},
 "Een varken is lichtrood.": {"en":"A pig is light red.","ar":"الخنزير أحمر فاتح.","uk":"Свиня світло-червона.","tr":"Domuz açık kırmızıdır.","ro":"Un porc este roșu deschis.","bg":"Прасето е светлочервено."},
 "In de nacht is het donker.": {"en":"At night it is dark.","ar":"في الليل يكون الجو مظلمًا.","uk":"Уночі темно.","tr":"Gece karanlıktır.","ro":"Noaptea e întuneric.","bg":"През нощта е тъмно."},
 "Een bord is rond.": {"en":"A plate is round.","ar":"الصحن مستدير.","uk":"Тарілка кругла.","tr":"Tabak yuvarlaktır.","ro":"O farfurie este rotundă.","bg":"Чинията е кръгла."},
 "Drie hoeken = drie-hoek.": {"en":"Three corners = drie-hoek (triangle).","ar":"ثلاث زوايا = drie-hoek (مثلث).","uk":"Три кути = drie-hoek (трикутник).","tr":"Üç köşe = drie-hoek (üçgen).","ro":"Trei colțuri = drie-hoek (triunghi).","bg":"Три ъгъла = drie-hoek (триъгълник)."},
 "Een muis is het tegenovergestelde van groot.": {"en":"A mouse is the opposite of big.","ar":"الفأر عكس الكبير.","uk":"Миша — протилежність великого.","tr":"Fare büyüğün tersidir.","ro":"Un șoarece e opusul lui mare.","bg":"Мишката е обратното на голямо."},
 "Hij gaat ver naar boven.": {"en":"It goes far up.","ar":"يرتفع كثيرًا إلى الأعلى.","uk":"Вона йде високо вгору.","tr":"Çok yukarıya çıkar.","ro":"Merge mult în sus.","bg":"Тя стига много нагоре."},
 "Veel bladzijden = dik.": {"en":"Many pages = dik (thick).","ar":"صفحات كثيرة = dik (سميك).","uk":"Багато сторінок = dik (товста).","tr":"Çok sayfa = dik (kalın).","ro":"Multe pagini = dik (gros).","bg":"Много страници = dik (дебела)."},
 "Naast je huis = niet ver.": {"en":"Next to your house = not far.","ar":"بجانب بيتك = ليست بعيدة.","uk":"Поруч із домом = недалеко.","tr":"Evinin yanı = uzak değil.","ro":"Lângă casa ta = nu departe.","bg":"До къщата ти = не е далеч."},
 "Op de tafel = erop.": {"en":"On the table = erop (on it).","ar":"على الطاولة = erop (عليها).","uk":"На столі = erop (на ньому).","tr":"Masanın üstü = erop (üstünde).","ro":"Pe masă = erop (pe ea).","bg":"На масата = erop (върху нея)."},
 "Uit het etui = eruit.": {"en":"Out of the pencil case = eruit (out of it).","ar":"من المقلمة = eruit (منها).","uk":"З пенала = eruit (з нього).","tr":"Kalem kutusundan = eruit (içinden).","ro":"Din penar = eruit (din el).","bg":"От несесера = eruit (от него)."},
 "De helft = half.": {"en":"De helft (the half) = half.","ar":"de helft (النصف) = half.","uk":"De helft (половина) = half.","tr":"De helft (yarısı) = half.","ro":"De helft (jumătatea) = half.","bg":"De helft (половината) = half."},
 "Maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag.": {"en":"Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.","ar":"الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت، الأحد.","uk":"Понеділок, вівторок, середа, четвер, п'ятниця, субота, неділя.","tr":"Pazartesi, salı, çarşamba, perşembe, cuma, cumartesi, pazar.","ro":"Luni, marți, miercuri, joi, vineri, sâmbătă, duminică.","bg":"Понеделник, вторник, сряда, четвъртък, петък, събота, неделя."},
 "Na vijf komt één meer.": {"en":"After five comes one more.","ar":"بعد خمسة يأتي واحد أكثر.","uk":"Після п'яти — на одне більше.","tr":"Beşten sonra bir fazlası gelir.","ro":"După cinci vine cu unu mai mult.","bg":"След пет идва с едно повече."},
 "De dag van nu.": {"en":"The day of now.","ar":"يوم الآن.","uk":"День, який зараз.","tr":"Şimdiki gün.","ro":"Ziua de acum.","bg":"Денят сега."},
 "Die dag is al voorbij.": {"en":"That day is already over.","ar":"ذلك اليوم انتهى.","uk":"Той день уже минув.","tr":"O gün geçti bile.","ro":"Ziua aceea a trecut deja.","bg":"Този ден вече мина."},
 "Na 12 uur is het…": {"en":"After 12 o'clock it is…","ar":"بعد الساعة 12 يكون…","uk":"Після 12 години…","tr":"Saat 12'den sonra…","ro":"După ora 12 este…","bg":"След 12 часа е…"},
 "Aan de beurt = nu jij.": {"en":"Aan de beurt (your turn) = now you.","ar":"aan de beurt (دورك) = الآن أنت.","uk":"Aan de beurt (твоя черга) = тепер ти.","tr":"Aan de beurt (sıra sende) = şimdi sen.","ro":"Aan de beurt (e rândul tău) = acum tu.","bg":"Aan de beurt (твой ред) = сега ти."},
 "Zo laat je de juf zien dat je iets wilt zeggen.": {"en":"This way you show the teacher you want to say something.","ar":"هكذا تُظهر للمعلمة أنك تريد أن تقول شيئًا.","uk":"Так ти показуєш учительці, що хочеш щось сказати.","tr":"Böylece öğretmene bir şey söylemek istediğini gösterirsin.","ro":"Așa îi arăți doamnei că vrei să spui ceva.","bg":"Така показваш на учителката, че искаш да кажеш нещо."},
 "Neem even de tijd.": {"en":"Take your time for a moment.","ar":"خذ وقتك قليلًا.","uk":"Не поспішай.","tr":"Biraz zaman ayır.","ro":"Ia-ți puțin timp.","bg":"Не бързай."},
 "Vertellen = iets zeggen over wat je deed.": {"en":"Vertellen (to tell) = say something about what you did.","ar":"vertellen (يحكي) = تقول شيئًا عما فعلت.","uk":"Vertellen (розповідати) = казати щось про те, що ти робив.","tr":"Vertellen (anlatmak) = yaptığın şey hakkında bir şey söylemek.","ro":"Vertellen (a povesti) = să spui ceva despre ce ai făcut.","bg":"Vertellen (разказвам) = да кажеш нещо за това, което си правил."},
 "Een jas houdt je warm.": {"en":"A coat keeps you warm.","ar":"المعطف يبقيك دافئًا.","uk":"Куртка зігріває.","tr":"Mont seni sıcak tutar.","ro":"Geaca te ține de cald.","bg":"Якето те топли."},
 "Niet moeilijk = makkelijk.": {"en":"Not difficult = makkelijk (easy).","ar":"ليست صعبة = makkelijk (سهلة).","uk":"Не важко = makkelijk (легко).","tr":"Zor değil = makkelijk (kolay).","ro":"Nu e greu = makkelijk (ușor).","bg":"Не е трудно = makkelijk (лесно)."},
 "Heel blij = gelukkig.": {"en":"Very happy = gelukkig.","ar":"سعيد جدًا = gelukkig.","uk":"Дуже радий = gelukkig (щасливий).","tr":"Çok mutlu = gelukkig.","ro":"Foarte bucuros = gelukkig (fericit).","bg":"Много радостен = gelukkig (щастлив)."},
 "Durven = het toch doen.": {"en":"Durven (to dare) = do it anyway.","ar":"durven (يتجرأ) = تفعلها رغم ذلك.","uk":"Durven (наважуватися) = все одно це зробити.","tr":"Durven (cesaret etmek) = yine de yapmak.","ro":"Durven (a îndrăzni) = să o faci totuși.","bg":"Durven (осмелявам се) = все пак да го направиш."},
 // 3 okt 2026: trede 3 "De brug" — Opdrachtwoorden + Rekenverhaaltjes.
 "Op je blad staat: omcirkel de appel. Wat doe je?": {"en":"Your sheet says: circle the apple. What do you do?","ar":"مكتوب في ورقتك: ضع دائرة حول التفاحة. ماذا تفعل؟","uk":"На твоєму аркуші написано: обведи яблуко. Що ти робиш?","tr":"Kâğıdında yazıyor: elmanın etrafına daire çiz. Ne yaparsın?","ro":"Pe foaia ta scrie: încercuiește mărul. Ce faci?","bg":"На листа ти пише: огради ябълката. Какво правиш?"},
 "Ik zet een rondje om de appel.": {"en":"I draw a circle around the apple.","ar":"أرسم دائرة حول التفاحة.","uk":"Я обводжу яблуко колом.","tr":"Elmanın etrafına bir daire çizerim.","ro":"Desenez un cerc în jurul mărului.","bg":"Рисувам кръгче около ябълката."},
 "Ik zet een kruisje op de appel.": {"en":"I put a cross on the apple.","ar":"أضع علامة إكس على التفاحة.","uk":"Я ставлю хрестик на яблуко.","tr":"Elmanın üstüne çarpı koyarım.","ro":"Pun un x pe măr.","bg":"Слагам кръстче върху ябълката."},
 "Ik kleur de appel rood.": {"en":"I colour the apple red.","ar":"ألوّن التفاحة باللون الأحمر.","uk":"Я розфарбовую яблуко в червоний колір.","tr":"Elmayı kırmızıya boyarım.","ro":"Colorez mărul cu roșu.","bg":"Оцветявам ябълката в червено."},
 "Ik schrijf het woord appel op.": {"en":"I write down the word apple.","ar":"أكتب كلمة تفاحة.","uk":"Я записую слово «яблуко».","tr":"Elma kelimesini yazarım.","ro":"Scriu cuvântul măr.","bg":"Записвам думата ябълка."},
 "Op je blad staat: onderstreep het woord. Wat doe je?": {"en":"Your sheet says: underline the word. What do you do?","ar":"مكتوب في ورقتك: ضع خطًا تحت الكلمة. ماذا تفعل؟","uk":"На твоєму аркуші написано: підкресли слово. Що ти робиш?","tr":"Kâğıdında yazıyor: kelimenin altını çiz. Ne yaparsın?","ro":"Pe foaia ta scrie: subliniază cuvântul. Ce faci?","bg":"На листа ти пише: подчертай думата. Какво правиш?"},
 "Ik zet een streep onder het woord.": {"en":"I draw a line under the word.","ar":"أرسم خطًا تحت الكلمة.","uk":"Я проводжу лінію під словом.","tr":"Kelimenin altına bir çizgi çekerim.","ro":"Trag o linie sub cuvânt.","bg":"Чертая линия под думата."},
 "Ik zet een rondje om het woord.": {"en":"I draw a circle around the word.","ar":"أرسم دائرة حول الكلمة.","uk":"Я обводжу слово колом.","tr":"Kelimenin etrafına bir daire çizerim.","ro":"Desenez un cerc în jurul cuvântului.","bg":"Рисувам кръгче около думата."},
 "Ik gum het woord uit.": {"en":"I rub out the word.","ar":"أمسح الكلمة بالممحاة.","uk":"Я стираю слово гумкою.","tr":"Kelimeyi silgiyle silerim.","ro":"Șterg cuvântul cu guma.","bg":"Изтривам думата с гумичка."},
 "Ik lees het woord hardop.": {"en":"I read the word out loud.","ar":"أقرأ الكلمة بصوت عالٍ.","uk":"Я читаю слово вголос.","tr":"Kelimeyi sesli okurum.","ro":"Citesc cuvântul cu voce tare.","bg":"Чета думата на глас."},
 "Op je blad staat: kruis het goede antwoord aan. Wat doe je?": {"en":"Your sheet says: tick the right answer. What do you do?","ar":"مكتوب في ورقتك: ضع علامة عند الجواب الصحيح. ماذا تفعل؟","uk":"На твоєму аркуші написано: познач хрестиком правильну відповідь. Що ти робиш?","tr":"Kâğıdında yazıyor: doğru cevabı işaretle. Ne yaparsın?","ro":"Pe foaia ta scrie: bifează răspunsul corect. Ce faci?","bg":"На листа ти пише: отбележи верния отговор с кръстче. Какво правиш?"},
 "Ik zet een kruisje bij het goede antwoord.": {"en":"I put a cross next to the right answer.","ar":"أضع علامة إكس بجانب الجواب الصحيح.","uk":"Я ставлю хрестик біля правильної відповіді.","tr":"Doğru cevabın yanına çarpı koyarım.","ro":"Pun un x lângă răspunsul corect.","bg":"Слагам кръстче до верния отговор."},
 "Ik zet een kruisje bij alle antwoorden.": {"en":"I put a cross next to all the answers.","ar":"أضع علامة إكس بجانب كل الأجوبة.","uk":"Я ставлю хрестик біля всіх відповідей.","tr":"Bütün cevapların yanına çarpı koyarım.","ro":"Pun un x lângă toate răspunsurile.","bg":"Слагам кръстче до всички отговори."},
 "Ik schrijf het antwoord over.": {"en":"I copy the answer.","ar":"أنسخ الجواب.","uk":"Я переписую відповідь.","tr":"Cevabı aynen yazarım.","ro":"Copiez răspunsul.","bg":"Преписвам отговора."},
 "Ik kleur het hele blad.": {"en":"I colour the whole sheet.","ar":"ألوّن الورقة كلها.","uk":"Я розфарбовую весь аркуш.","tr":"Bütün kâğıdı boyarım.","ro":"Colorez toată foaia.","bg":"Оцветявам целия лист."},
 "Op je blad staat: zet een streep door het foute woord. Wat doe je?": {"en":"Your sheet says: cross out the wrong word. What do you do?","ar":"مكتوب في ورقتك: اشطب الكلمة الخاطئة. ماذا تفعل؟","uk":"На твоєму аркуші написано: закресли неправильне слово. Що ти робиш?","tr":"Kâğıdında yazıyor: yanlış kelimenin üstünü çiz. Ne yaparsın?","ro":"Pe foaia ta scrie: tăie cuvântul greșit. Ce faci?","bg":"На листа ти пише: задраскай грешната дума. Какво правиш?"},
 "Ik zet een streep door het foute woord.": {"en":"I draw a line through the wrong word.","ar":"أرسم خطًا على الكلمة الخاطئة.","uk":"Я закреслюю неправильне слово.","tr":"Yanlış kelimenin üstüne bir çizgi çekerim.","ro":"Trag o linie peste cuvântul greșit.","bg":"Задрасквам грешната дума с линия."},
 "Ik zet een streep onder het goede woord.": {"en":"I draw a line under the right word.","ar":"أرسم خطًا تحت الكلمة الصحيحة.","uk":"Я підкреслюю правильне слово.","tr":"Doğru kelimenin altına bir çizgi çekerim.","ro":"Trag o linie sub cuvântul corect.","bg":"Подчертавам вярната дума."},
 "Ik schrijf het foute woord nog een keer.": {"en":"I write the wrong word again.","ar":"أكتب الكلمة الخاطئة مرة أخرى.","uk":"Я ще раз пишу неправильне слово.","tr":"Yanlış kelimeyi bir kez daha yazarım.","ro":"Scriu cuvântul greșit încă o dată.","bg":"Пиша грешната дума още веднъж."},
 "Ik zet een rondje om het foute woord.": {"en":"I draw a circle around the wrong word.","ar":"أرسم دائرة حول الكلمة الخاطئة.","uk":"Я обводжу неправильне слово колом.","tr":"Yanlış kelimenin etrafına bir daire çizerim.","ro":"Desenez un cerc în jurul cuvântului greșit.","bg":"Рисувам кръгче около грешната дума."},
 "Op je blad staat: trek een lijn van de hond naar het hok. Wat doe je?": {"en":"Your sheet says: draw a line from the dog to the kennel. What do you do?","ar":"مكتوب في ورقتك: ارسم خطًا من الكلب إلى بيته. ماذا تفعل؟","uk":"На твоєму аркуші написано: проведи лінію від собаки до будки. Що ти робиш?","tr":"Kâğıdında yazıyor: köpekten kulübeye bir çizgi çiz. Ne yaparsın?","ro":"Pe foaia ta scrie: trage o linie de la câine la cușcă. Ce faci?","bg":"На листа ти пише: начертай линия от кучето до колибката. Какво правиш?"},
 "Ik trek een lijn van de hond naar het hok.": {"en":"I draw a line from the dog to the kennel.","ar":"أرسم خطًا من الكلب إلى بيته.","uk":"Я проводжу лінію від собаки до будки.","tr":"Köpekten kulübeye bir çizgi çekerim.","ro":"Trag o linie de la câine la cușcă.","bg":"Чертая линия от кучето до колибката."},
 "Ik teken een nieuwe hond.": {"en":"I draw a new dog.","ar":"أرسم كلبًا جديدًا.","uk":"Я малюю нового собаку.","tr":"Yeni bir köpek çizerim.","ro":"Desenez un câine nou.","bg":"Рисувам ново куче."},
 "Ik kleur het hok.": {"en":"I colour the kennel.","ar":"ألوّن بيت الكلب.","uk":"Я розфарбовую будку.","tr":"Kulübeyi boyarım.","ro":"Colorez cușca.","bg":"Оцветявам колибката."},
 "Ik zet een kruisje op de hond.": {"en":"I put a cross on the dog.","ar":"أضع علامة إكس على الكلب.","uk":"Я ставлю хрестик на собаку.","tr":"Köpeğin üstüne çarpı koyarım.","ro":"Pun un x pe câine.","bg":"Слагам кръстче върху кучето."},
 "Op je blad staat: vul in. Er staat een lege plek. Wat doe je?": {"en":"Your sheet says: fill in. There is an empty space. What do you do?","ar":"مكتوب في ورقتك: املأ الفراغ. هناك مكان فارغ. ماذا تفعل؟","uk":"На твоєму аркуші написано: заповни. Там є порожнє місце. Що ти робиш?","tr":"Kâğıdında yazıyor: boşluğu doldur. Boş bir yer var. Ne yaparsın?","ro":"Pe foaia ta scrie: completează. Este un loc gol. Ce faci?","bg":"На листа ти пише: попълни. Има празно място. Какво правиш?"},
 "Ik schrijf het goede woord op de lege plek.": {"en":"I write the right word in the empty space.","ar":"أكتب الكلمة الصحيحة في المكان الفارغ.","uk":"Я пишу правильне слово в порожнє місце.","tr":"Doğru kelimeyi boş yere yazarım.","ro":"Scriu cuvântul corect în locul gol.","bg":"Пиша вярната дума на празното място."},
 "Ik laat de plek leeg.": {"en":"I leave the space empty.","ar":"أترك المكان فارغًا.","uk":"Я залишаю місце порожнім.","tr":"Yeri boş bırakırım.","ro":"Las locul gol.","bg":"Оставям мястото празно."},
 "Ik teken een bloem op de plek.": {"en":"I draw a flower in the space.","ar":"أرسم زهرة في المكان.","uk":"Я малюю квітку на цьому місці.","tr":"O yere bir çiçek çizerim.","ro":"Desenez o floare în acel loc.","bg":"Рисувам цвете на мястото."},
 "Ik gum de zin uit.": {"en":"I rub out the sentence.","ar":"أمسح الجملة بالممحاة.","uk":"Я стираю речення гумкою.","tr":"Cümleyi silgiyle silerim.","ro":"Șterg propoziția cu guma.","bg":"Изтривам изречението с гумичка."},
 "De juf zegt: schrijf je naam erboven. Wat doe je?": {"en":"The teacher says: write your name at the top. What do you do?","ar":"تقول المعلمة: اكتب اسمك في الأعلى. ماذا تفعل؟","uk":"Вчителька каже: напиши своє ім'я зверху. Що ти робиш?","tr":"Öğretmen diyor ki: adını en üste yaz. Ne yaparsın?","ro":"Doamna învățătoare spune: scrie-ți numele sus. Ce faci?","bg":"Учителката казва: напиши името си най-горе. Какво правиш?"},
 "Ik schrijf mijn naam bovenaan het blad.": {"en":"I write my name at the top of the sheet.","ar":"أكتب اسمي في أعلى الورقة.","uk":"Я пишу своє ім'я вгорі аркуша.","tr":"Adımı kâğıdın en üstüne yazarım.","ro":"Îmi scriu numele în partea de sus a foii.","bg":"Пиша името си най-горе на листа."},
 "Ik schrijf mijn naam onderaan het blad.": {"en":"I write my name at the bottom of the sheet.","ar":"أكتب اسمي في أسفل الورقة.","uk":"Я пишу своє ім'я внизу аркуша.","tr":"Adımı kâğıdın en altına yazarım.","ro":"Îmi scriu numele în partea de jos a foii.","bg":"Пиша името си най-долу на листа."},
 "Ik zeg mijn naam hardop.": {"en":"I say my name out loud.","ar":"أقول اسمي بصوت عالٍ.","uk":"Я кажу своє ім'я вголос.","tr":"Adımı sesli söylerim.","ro":"Îmi spun numele cu voce tare.","bg":"Казвам името си на глас."},
 "Ik schrijf de naam van de juf.": {"en":"I write the teacher's name.","ar":"أكتب اسم المعلمة.","uk":"Я пишу ім'я вчительки.","tr":"Öğretmenin adını yazarım.","ro":"Scriu numele doamnei învățătoare.","bg":"Пиша името на учителката."},
 "Op je blad staat: schrijf het antwoord op. Wat doe je?": {"en":"Your sheet says: write down the answer. What do you do?","ar":"مكتوب في ورقتك: اكتب الجواب. ماذا تفعل؟","uk":"На твоєму аркуші написано: запиши відповідь. Що ти робиш?","tr":"Kâğıdında yazıyor: cevabı yaz. Ne yaparsın?","ro":"Pe foaia ta scrie: scrie răspunsul. Ce faci?","bg":"На листа ти пише: запиши отговора. Какво правиш?"},
 "Ik schrijf het antwoord met mijn potlood.": {"en":"I write the answer with my pencil.","ar":"أكتب الجواب بقلم الرصاص.","uk":"Я пишу відповідь олівцем.","tr":"Cevabı kurşun kalemimle yazarım.","ro":"Scriu răspunsul cu creionul meu.","bg":"Пиша отговора с молива си."},
 "Ik zeg het antwoord tegen een vriend.": {"en":"I tell the answer to a friend.","ar":"أقول الجواب لصديق.","uk":"Я кажу відповідь другові.","tr":"Cevabı bir arkadaşıma söylerim.","ro":"Îi spun răspunsul unui prieten.","bg":"Казвам отговора на приятел."},
 "Ik denk aan het antwoord.": {"en":"I think about the answer.","ar":"أفكر في الجواب.","uk":"Я думаю про відповідь.","tr":"Cevabı düşünürüm.","ro":"Mă gândesc la răspuns.","bg":"Мисля за отговора."},
 "Ik wijs het antwoord aan.": {"en":"I point to the answer.","ar":"أشير إلى الجواب.","uk":"Я показую на відповідь пальцем.","tr":"Cevabı parmağımla gösteririm.","ro":"Arăt răspunsul cu degetul.","bg":"Посочвам отговора."},
 "Op je blad staat: maak de zin af. De zin is: Ik eet een … Wat doe je?": {"en":"Your sheet says: finish the sentence. The sentence is: I eat a … What do you do?","ar":"مكتوب في ورقتك: أكمل الجملة. الجملة هي: آكل … ماذا تفعل؟","uk":"На твоєму аркуші написано: закінчи речення. Речення таке: Я їм … Що ти робиш?","tr":"Kâğıdında yazıyor: cümleyi tamamla. Cümle şu: Ben bir … yiyorum. Ne yaparsın?","ro":"Pe foaia ta scrie: termină propoziția. Propoziția este: Eu mănânc un … Ce faci?","bg":"На листа ти пише: довърши изречението. Изречението е: Аз ям … Какво правиш?"},
 "Ik schrijf een woord aan het eind, bijvoorbeeld appel.": {"en":"I write a word at the end, for example apple.","ar":"أكتب كلمة في النهاية، مثلًا تفاحة.","uk":"Я пишу слово в кінці, наприклад «яблуко».","tr":"Sona bir kelime yazarım, örneğin elma.","ro":"Scriu un cuvânt la sfârșit, de exemplu măr.","bg":"Пиша дума накрая, например ябълка."},
 "Ik begin een nieuwe zin.": {"en":"I start a new sentence.","ar":"أبدأ جملة جديدة.","uk":"Я починаю нове речення.","tr":"Yeni bir cümleye başlarım.","ro":"Încep o propoziție nouă.","bg":"Започвам ново изречение."},
 "Ik lees de zin en ga verder.": {"en":"I read the sentence and carry on.","ar":"أقرأ الجملة وأكمل.","uk":"Я читаю речення і йду далі.","tr":"Cümleyi okurum ve devam ederim.","ro":"Citesc propoziția și merg mai departe.","bg":"Чета изречението и продължавам."},
 "De juf zegt: sla de bladzijde om. Wat doe je?": {"en":"The teacher says: turn the page. What do you do?","ar":"تقول المعلمة: اقلب الصفحة. ماذا تفعل؟","uk":"Вчителька каже: переверни сторінку. Що ти робиш?","tr":"Öğretmen diyor ki: sayfayı çevir. Ne yaparsın?","ro":"Doamna învățătoare spune: întoarce pagina. Ce faci?","bg":"Учителката казва: обърни страницата. Какво правиш?"},
 "Ik ga naar de volgende bladzijde.": {"en":"I go to the next page.","ar":"أنتقل إلى الصفحة التالية.","uk":"Я переходжу на наступну сторінку.","tr":"Bir sonraki sayfaya geçerim.","ro":"Merg la pagina următoare.","bg":"Отивам на следващата страница."},
 "Ik doe mijn boek dicht.": {"en":"I close my book.","ar":"أغلق كتابي.","uk":"Я закриваю свою книжку.","tr":"Kitabımı kapatırım.","ro":"Închid cartea.","bg":"Затварям книгата си."},
 "Ik scheur de bladzijde eruit.": {"en":"I tear the page out.","ar":"أمزّق الصفحة وأخرجها.","uk":"Я вириваю сторінку.","tr":"Sayfayı koparırım.","ro":"Rup pagina din carte.","bg":"Скъсвам страницата."},
 "Ik begin weer bij de eerste bladzijde.": {"en":"I start again at the first page.","ar":"أبدأ من جديد من الصفحة الأولى.","uk":"Я знову починаю з першої сторінки.","tr":"Yeniden ilk sayfadan başlarım.","ro":"Încep din nou de la prima pagină.","bg":"Започвам отново от първата страница."},
 "Op je blad staat: lees de zin. Wat doe je?": {"en":"Your sheet says: read the sentence. What do you do?","ar":"مكتوب في ورقتك: اقرأ الجملة. ماذا تفعل؟","uk":"На твоєму аркуші написано: прочитай речення. Що ти робиш?","tr":"Kâğıdında yazıyor: cümleyi oku. Ne yaparsın?","ro":"Pe foaia ta scrie: citește propoziția. Ce faci?","bg":"На листа ти пише: прочети изречението. Какво правиш?"},
 "Ik kijk naar de woorden en lees ze.": {"en":"I look at the words and read them.","ar":"أنظر إلى الكلمات وأقرأها.","uk":"Я дивлюся на слова і читаю їх.","tr":"Kelimelere bakarım ve okurum.","ro":"Mă uit la cuvinte și le citesc.","bg":"Гледам думите и ги чета."},
 "Ik schrijf de zin over.": {"en":"I copy the sentence.","ar":"أنسخ الجملة.","uk":"Я переписую речення.","tr":"Cümleyi aynen yazarım.","ro":"Copiez propoziția.","bg":"Преписвам изречението."},
 "Ik teken de zin.": {"en":"I draw the sentence.","ar":"أرسم الجملة.","uk":"Я малюю речення.","tr":"Cümleyi çizerim.","ro":"Desenez propoziția.","bg":"Рисувам изречението."},
 "Ik sla de zin over.": {"en":"I skip the sentence.","ar":"أتخطى الجملة.","uk":"Я пропускаю речення.","tr":"Cümleyi atlarım.","ro":"Sar peste propoziție.","bg":"Пропускам изречението."},
 "Op je blad staat: tel de ballen. Wat doe je?": {"en":"Your sheet says: count the balls. What do you do?","ar":"مكتوب في ورقتك: عُدّ الكرات. ماذا تفعل؟","uk":"На твоєму аркуші написано: порахуй м'ячі. Що ти робиш?","tr":"Kâğıdında yazıyor: topları say. Ne yaparsın?","ro":"Pe foaia ta scrie: numără mingile. Ce faci?","bg":"На листа ти пише: преброй топките. Какво правиш?"},
 "Ik tel hoeveel ballen er zijn.": {"en":"I count how many balls there are.","ar":"أعدّ كم كرة هناك.","uk":"Я рахую, скільки там м'ячів.","tr":"Kaç tane top olduğunu sayarım.","ro":"Număr câte mingi sunt.","bg":"Броя колко топки има."},
 "Ik kleur de ballen.": {"en":"I colour the balls.","ar":"ألوّن الكرات.","uk":"Я розфарбовую м'ячі.","tr":"Topları boyarım.","ro":"Colorez mingile.","bg":"Оцветявам топките."},
 "Ik teken een bal erbij.": {"en":"I draw one more ball.","ar":"أرسم كرة إضافية.","uk":"Я домальовую ще один м'яч.","tr":"Bir top daha çizerim.","ro":"Mai desenez o minge.","bg":"Дорисувам още една топка."},
 "Ik zet een kruisje op één bal.": {"en":"I put a cross on one ball.","ar":"أضع علامة إكس على كرة واحدة.","uk":"Я ставлю хрестик на один м'яч.","tr":"Bir topun üstüne çarpı koyarım.","ro":"Pun un x pe o minge.","bg":"Слагам кръстче върху една топка."},
 "Op je blad staat: reken uit. 4 + 3 = … Wat doe je?": {"en":"Your sheet says: work it out. 4 + 3 = … What do you do?","ar":"مكتوب في ورقتك: احسب. 4 + 3 = … ماذا تفعل؟","uk":"На твоєму аркуші написано: обчисли. 4 + 3 = … Що ти робиш?","tr":"Kâğıdında yazıyor: hesapla. 4 + 3 = … Ne yaparsın?","ro":"Pe foaia ta scrie: calculează. 4 + 3 = … Ce faci?","bg":"На листа ти пише: пресметни. 4 + 3 = … Какво правиш?"},
 "Ik reken het antwoord uit en schrijf 7.": {"en":"I work out the answer and write 7.","ar":"أحسب الجواب وأكتب 7.","uk":"Я рахую відповідь і пишу 7.","tr":"Cevabı hesaplarım ve 7 yazarım.","ro":"Calculez răspunsul și scriu 7.","bg":"Пресмятам отговора и пиша 7."},
 "Ik schrijf de som over.": {"en":"I copy the sum.","ar":"أنسخ العملية الحسابية.","uk":"Я переписую приклад.","tr":"İşlemi aynen yazarım.","ro":"Copiez exercițiul.","bg":"Преписвам задачата."},
 "Ik zet een rondje om de 4.": {"en":"I draw a circle around the 4.","ar":"أرسم دائرة حول الرقم 4.","uk":"Я обводжу колом цифру 4.","tr":"4'ün etrafına bir daire çizerim.","ro":"Desenez un cerc în jurul lui 4.","bg":"Рисувам кръгче около 4."},
 "Ik laat het leeg.": {"en":"I leave it empty.","ar":"أتركه فارغًا.","uk":"Я залишаю це порожнім.","tr":"Boş bırakırım.","ro":"Îl las gol.","bg":"Оставям го празно."},
 "Op je blad staat: vergelijk. Welke toren is hoger? Wat doe je?": {"en":"Your sheet says: compare. Which tower is taller? What do you do?","ar":"مكتوب في ورقتك: قارن. أي برج أعلى؟ ماذا تفعل؟","uk":"На твоєму аркуші написано: порівняй. Яка вежа вища? Що ти робиш?","tr":"Kâğıdında yazıyor: karşılaştır. Hangi kule daha yüksek? Ne yaparsın?","ro":"Pe foaia ta scrie: compară. Care turn este mai înalt? Ce faci?","bg":"На листа ти пише: сравни. Коя кула е по-висока? Какво правиш?"},
 "Ik kijk naar allebei en zoek de hoogste.": {"en":"I look at both and find the tallest.","ar":"أنظر إلى الاثنين وأبحث عن الأعلى.","uk":"Я дивлюся на обидві і шукаю найвищу.","tr":"İkisine de bakarım ve en yüksek olanı bulurum.","ro":"Mă uit la amândouă și îl caut pe cel mai înalt.","bg":"Гледам и двете и търся най-високата."},
 "Ik kijk alleen naar de eerste toren.": {"en":"I only look at the first tower.","ar":"أنظر فقط إلى البرج الأول.","uk":"Я дивлюся тільки на першу вежу.","tr":"Sadece ilk kuleye bakarım.","ro":"Mă uit doar la primul turn.","bg":"Гледам само първата кула."},
 "Ik teken een nieuwe toren.": {"en":"I draw a new tower.","ar":"أرسم برجًا جديدًا.","uk":"Я малюю нову вежу.","tr":"Yeni bir kule çizerim.","ro":"Desenez un turn nou.","bg":"Рисувам нова кула."},
 "Ik tel de torens.": {"en":"I count the towers.","ar":"أعدّ الأبراج.","uk":"Я рахую вежі.","tr":"Kuleleri sayarım.","ro":"Număr turnurile.","bg":"Броя кулите."},
 "Op je blad staat: hoeveel meer? Tim heeft 5 knikkers. Sara heeft 3. Wat reken je uit?": {"en":"Your sheet says: how many more? Tim has 5 marbles. Sara has 3. What do you work out?","ar":"مكتوب في ورقتك: كم أكثر؟ عند تيم 5 كرات زجاجية. عند سارة 3. ماذا تحسب؟","uk":"На твоєму аркуші написано: на скільки більше? У Тіма 5 кульок. У Сари 3. Що ти рахуєш?","tr":"Kâğıdında yazıyor: kaç tane fazla? Tim'in 5 bilyesi var. Sara'nın 3. Neyi hesaplarsın?","ro":"Pe foaia ta scrie: cu cât mai multe? Tim are 5 bile. Sara are 3. Ce calculezi?","bg":"На листа ти пише: с колко повече? Тим има 5 топчета. Сара има 3. Какво пресмяташ?"},
 "Hoeveel Tim er meer heeft dan Sara.": {"en":"How many more Tim has than Sara.","ar":"كم عند تيم أكثر من سارة.","uk":"На скільки в Тіма більше, ніж у Сари.","tr":"Tim'in Sara'dan kaç tane fazlası olduğunu.","ro":"Cu câte are Tim mai multe decât Sara.","bg":"С колко Тим има повече от Сара."},
 "Hoeveel knikkers ze samen hebben.": {"en":"How many marbles they have together.","ar":"كم كرة عندهما معًا.","uk":"Скільки кульок у них разом.","tr":"Birlikte kaç bilyeleri olduğunu.","ro":"Câte bile au împreună.","bg":"Колко топчета имат заедно."},
 "Hoeveel knikkers Sara heeft.": {"en":"How many marbles Sara has.","ar":"كم كرة عند سارة.","uk":"Скільки кульок у Сари.","tr":"Sara'nın kaç bilyesi olduğunu.","ro":"Câte bile are Sara.","bg":"Колко топчета има Сара."},
 "Hoe oud Tim is.": {"en":"How old Tim is.","ar":"كم عمر تيم.","uk":"Скільки років Тімові.","tr":"Tim'in kaç yaşında olduğunu.","ro":"Câți ani are Tim.","bg":"На колко години е Тим."},
 "Op je blad staat: kies het goede woord. Wat doe je?": {"en":"Your sheet says: choose the right word. What do you do?","ar":"مكتوب في ورقتك: اختر الكلمة الصحيحة. ماذا تفعل؟","uk":"На твоєму аркуші написано: вибери правильне слово. Що ти робиш?","tr":"Kâğıdında yazıyor: doğru kelimeyi seç. Ne yaparsın?","ro":"Pe foaia ta scrie: alege cuvântul corect. Ce faci?","bg":"На листа ти пише: избери вярната дума. Какво правиш?"},
 "Ik kies één woord dat past.": {"en":"I choose one word that fits.","ar":"أختار كلمة واحدة مناسبة.","uk":"Я вибираю одне слово, яке підходить.","tr":"Uyan bir kelime seçerim.","ro":"Aleg un cuvânt care se potrivește.","bg":"Избирам една дума, която пасва."},
 "Ik schrijf alle woorden op.": {"en":"I write down all the words.","ar":"أكتب كل الكلمات.","uk":"Я записую всі слова.","tr":"Bütün kelimeleri yazarım.","ro":"Scriu toate cuvintele.","bg":"Записвам всички думи."},
 "Ik kies geen woord.": {"en":"I don't choose a word.","ar":"لا أختار أي كلمة.","uk":"Я не вибираю жодного слова.","tr":"Hiçbir kelime seçmem.","ro":"Nu aleg niciun cuvânt.","bg":"Не избирам нито една дума."},
 "Ik verzin een nieuw woord.": {"en":"I make up a new word.","ar":"أخترع كلمة جديدة.","uk":"Я вигадую нове слово.","tr":"Yeni bir kelime uydururum.","ro":"Inventez un cuvânt nou.","bg":"Измислям нова дума."},
 "Op je blad staat: welke hoort er niet bij? Appel, peer, banaan, schoen. Wat zoek je?": {"en":"Your sheet says: which one does not belong? Apple, pear, banana, shoe. What are you looking for?","ar":"مكتوب في ورقتك: أيّها لا ينتمي إلى المجموعة؟ تفاحة، كمثرى، موزة، حذاء. عمّ تبحث؟","uk":"На твоєму аркуші написано: що тут зайве? Яблуко, груша, банан, черевик. Що ти шукаєш?","tr":"Kâğıdında yazıyor: hangisi gruba uymaz? Elma, armut, muz, ayakkabı. Ne ararsın?","ro":"Pe foaia ta scrie: care nu se potrivește? Măr, pară, banană, pantof. Ce cauți?","bg":"На листа ти пише: кое не е от групата? Ябълка, круша, банан, обувка. Какво търсиш?"},
 "Het ding dat anders is dan de rest.": {"en":"The thing that is different from the rest.","ar":"الشيء المختلف عن الباقي.","uk":"Те, що відрізняється від інших.","tr":"Diğerlerinden farklı olan şeyi.","ro":"Lucrul care este diferit de celelalte.","bg":"Нещото, което е различно от останалите."},
 "Het ding dat ik het lekkerst vind.": {"en":"The thing I like eating most.","ar":"الشيء الذي أحبه أكثر.","uk":"Те, що мені найсмачніше.","tr":"En sevdiğim şeyi.","ro":"Lucrul care mi se pare cel mai gustos.","bg":"Нещото, което ми е най-вкусно."},
 "Het eerste woord.": {"en":"The first word.","ar":"الكلمة الأولى.","uk":"Перше слово.","tr":"İlk kelimeyi.","ro":"Primul cuvânt.","bg":"Първата дума."},
 "Het langste woord.": {"en":"The longest word.","ar":"أطول كلمة.","uk":"Найдовше слово.","tr":"En uzun kelimeyi.","ro":"Cel mai lung cuvânt.","bg":"Най-дългата дума."},
 "Op je blad staat: is het goed of fout? 2 + 2 = 5. Wat doe je?": {"en":"Your sheet says: is it right or wrong? 2 + 2 = 5. What do you do?","ar":"مكتوب في ورقتك: هل هذا صحيح أم خطأ؟ 2 + 2 = 5. ماذا تفعل؟","uk":"На твоєму аркуші написано: правильно чи неправильно? 2 + 2 = 5. Що ти робиш?","tr":"Kâğıdında yazıyor: doğru mu yanlış mı? 2 + 2 = 5. Ne yaparsın?","ro":"Pe foaia ta scrie: este corect sau greșit? 2 + 2 = 5. Ce faci?","bg":"На листа ти пише: вярно ли е или грешно? 2 + 2 = 5. Какво правиш?"},
 "Ik kijk of het klopt. Het is fout.": {"en":"I check if it is right. It is wrong.","ar":"أتحقق إن كان صحيحًا. إنه خطأ.","uk":"Я перевіряю, чи це правильно. Це неправильно.","tr":"Doğru mu diye bakarım. Yanlış.","ro":"Verific dacă este corect. Este greșit.","bg":"Проверявам дали е вярно. Грешно е."},
 "Ik schrijf 2 + 2 = 5 over.": {"en":"I copy 2 + 2 = 5.","ar":"أنسخ 2 + 2 = 5.","uk":"Я переписую 2 + 2 = 5.","tr":"2 + 2 = 5'i aynen yazarım.","ro":"Copiez 2 + 2 = 5.","bg":"Преписвам 2 + 2 = 5."},
 "Ik zeg dat het goed is.": {"en":"I say that it is right.","ar":"أقول إنه صحيح.","uk":"Я кажу, що це правильно.","tr":"Doğru olduğunu söylerim.","ro":"Spun că este corect.","bg":"Казвам, че е вярно."},
 "Ik sla de vraag over.": {"en":"I skip the question.","ar":"أتخطى السؤال.","uk":"Я пропускаю запитання.","tr":"Soruyu atlarım.","ro":"Sar peste întrebare.","bg":"Пропускам въпроса."},
 "Op je blad staat: zet in de goede volgorde. 3, 1, 2. Wat doe je?": {"en":"Your sheet says: put them in the right order. 3, 1, 2. What do you do?","ar":"مكتوب في ورقتك: رتّبها بالترتيب الصحيح. 3، 1، 2. ماذا تفعل؟","uk":"На твоєму аркуші написано: розстав у правильному порядку. 3, 1, 2. Що ти робиш?","tr":"Kâğıdında yazıyor: doğru sıraya koy. 3, 1, 2. Ne yaparsın?","ro":"Pe foaia ta scrie: pune în ordinea corectă. 3, 1, 2. Ce faci?","bg":"На листа ти пише: подреди в правилния ред. 3, 1, 2. Какво правиш?"},
 "Ik zet ze zo neer: 1, 2, 3.": {"en":"I put them like this: 1, 2, 3.","ar":"أرتبها هكذا: 1، 2، 3.","uk":"Я ставлю їх так: 1, 2, 3.","tr":"Onları şöyle dizerim: 1, 2, 3.","ro":"Le pun așa: 1, 2, 3.","bg":"Подреждам ги така: 1, 2, 3."},
 "Ik laat ze zo staan.": {"en":"I leave them as they are.","ar":"أتركها كما هي.","uk":"Я залишаю їх так, як є.","tr":"Onları olduğu gibi bırakırım.","ro":"Le las așa cum sunt.","bg":"Оставям ги така, както са."},
 "Ik tel ze bij elkaar op.": {"en":"I add them together.","ar":"أجمعها معًا.","uk":"Я додаю їх разом.","tr":"Onları toplarım.","ro":"Le adun.","bg":"Събирам ги."},
 "Ik zet ze zo neer: 3, 2, 1.": {"en":"I put them like this: 3, 2, 1.","ar":"أرتبها هكذا: 3، 2، 1.","uk":"Я ставлю їх так: 3, 2, 1.","tr":"Onları şöyle dizerim: 3, 2, 1.","ro":"Le pun așa: 3, 2, 1.","bg":"Подреждам ги така: 3, 2, 1."},
 "De juf zegt: leg uit hoe je het weet. Wat doe je?": {"en":"The teacher says: explain how you know. What do you do?","ar":"تقول المعلمة: اشرح كيف عرفت. ماذا تفعل؟","uk":"Вчителька каже: поясни, як ти це знаєш. Що ти робиш?","tr":"Öğretmen diyor ki: nasıl bildiğini açıkla. Ne yaparsın?","ro":"Doamna învățătoare spune: explică de unde știi. Ce faci?","bg":"Учителката казва: обясни откъде знаеш. Какво правиш?"},
 "Ik vertel waarom mijn antwoord klopt.": {"en":"I say why my answer is right.","ar":"أقول لماذا جوابي صحيح.","uk":"Я розповідаю, чому моя відповідь правильна.","tr":"Cevabımın neden doğru olduğunu anlatırım.","ro":"Spun de ce răspunsul meu este corect.","bg":"Разказвам защо отговорът ми е верен."},
 "Ik zeg alleen het antwoord.": {"en":"I only say the answer.","ar":"أقول الجواب فقط.","uk":"Я кажу тільки відповідь.","tr":"Sadece cevabı söylerim.","ro":"Spun doar răspunsul.","bg":"Казвам само отговора."},
 "Ik zeg: ik weet het niet.": {"en":"I say: I don't know.","ar":"أقول: لا أعرف.","uk":"Я кажу: я не знаю.","tr":"Bilmiyorum derim.","ro":"Spun: nu știu.","bg":"Казвам: не знам."},
 "Ik ben stil.": {"en":"I stay quiet.","ar":"أبقى صامتًا.","uk":"Я мовчу.","tr":"Sessiz kalırım.","ro":"Tac.","bg":"Мълча."},
 "Tim heeft 5 knikkers. Hij krijgt er 3 bij. Hoeveel knikkers heeft hij nu?": {"en":"Tim has 5 marbles. He gets 3 more. How many marbles does he have now?","ar":"عند تيم 5 كرات زجاجية. يحصل على 3 أخرى. كم كرة عنده الآن؟","uk":"У Тіма 5 кульок. Він отримує ще 3. Скільки кульок у нього тепер?","tr":"Tim'in 5 bilyesi var. 3 tane daha alıyor. Şimdi kaç bilyesi var?","ro":"Tim are 5 bile. Mai primește 3. Câte bile are acum?","bg":"Тим има 5 топчета. Получава още 3. Колко топчета има сега?"},
 "Sara heeft 7 stiften. Ahmed heeft 6 stiften. Hoeveel stiften hebben ze samen?": {"en":"Sara has 7 markers. Ahmed has 6 markers. How many markers do they have together?","ar":"عند سارة 7 أقلام تلوين. عند أحمد 6 أقلام تلوين. كم قلمًا عندهما معًا؟","uk":"У Сари 7 фломастерів. В Ахмеда 6 фломастерів. Скільки фломастерів у них разом?","tr":"Sara'nın 7 keçeli kalemi var. Ahmed'in 6 keçeli kalemi var. Birlikte kaç kalemleri var?","ro":"Sara are 7 carioci. Ahmed are 6 carioci. Câte carioci au împreună?","bg":"Сара има 7 флумастера. Ахмед има 6 флумастера. Колко флумастера имат заедно?"},
 "In de klas zitten 12 meisjes en 11 jongens. Hoeveel kinderen zijn het samen?": {"en":"There are 12 girls and 11 boys in the class. How many children are there together?","ar":"في الصف 12 بنتًا و11 ولدًا. كم طفلًا معًا؟","uk":"У класі 12 дівчаток і 11 хлопчиків. Скільки дітей разом?","tr":"Sınıfta 12 kız ve 11 erkek var. Toplam kaç çocuk var?","ro":"În clasă sunt 12 fete și 11 băieți. Câți copii sunt împreună?","bg":"В класа има 12 момичета и 11 момчета. Колко деца са заедно?"},
 "Olena heeft 20 stickers. Ze krijgt er 15 bij. Hoeveel stickers heeft ze nu?": {"en":"Olena has 20 stickers. She gets 15 more. How many stickers does she have now?","ar":"عند أولينا 20 ملصقًا. تحصل على 15 أخرى. كم ملصقًا عندها الآن؟","uk":"В Олени 20 наліпок. Вона отримує ще 15. Скільки наліпок у неї тепер?","tr":"Olena'nın 20 çıkartması var. 15 tane daha alıyor. Şimdi kaç çıkartması var?","ro":"Olena are 20 de abțibilduri. Mai primește 15. Câte abțibilduri are acum?","bg":"Олена има 20 стикера. Получава още 15. Колко стикера има сега?"},
 "Er staan 30 stoelen in de zaal. De juf zet er 8 bij. Hoeveel stoelen staan er nu?": {"en":"There are 30 chairs in the hall. The teacher adds 8 more. How many chairs are there now?","ar":"في القاعة 30 كرسيًا. تضيف المعلمة 8 كراسٍ. كم كرسيًا هناك الآن؟","uk":"У залі стоїть 30 стільців. Вчителька ставить ще 8. Скільки стільців тепер?","tr":"Salonda 30 sandalye var. Öğretmen 8 tane daha koyuyor. Şimdi kaç sandalye var?","ro":"În sală sunt 30 de scaune. Doamna mai pune 8. Câte scaune sunt acum?","bg":"В залата има 30 стола. Учителката слага още 8. Колко стола има сега?"},
 "Mehmet heeft 9 snoepjes. Hij eet er 4 op. Hoeveel snoepjes heeft hij nog over?": {"en":"Mehmet has 9 sweets. He eats 4. How many sweets does he have left?","ar":"عند محمد 9 حلويات. يأكل 4 منها. كم حلوى بقيت عنده؟","uk":"У Мехмета 9 цукерок. Він з'їдає 4. Скільки цукерок у нього залишилося?","tr":"Mehmet'in 9 şekeri var. 4 tanesini yiyor. Kaç şekeri kaldı?","ro":"Mehmet are 9 bomboane. Mănâncă 4. Câte bomboane i-au mai rămas?","bg":"Мехмет има 9 бонбона. Изяжда 4. Колко бонбона му остават?"},
 "Er zitten 15 vogels op het dak. Er vliegen 6 vogels weg. Hoeveel vogels zijn er over?": {"en":"There are 15 birds on the roof. 6 birds fly away. How many birds are left?","ar":"على السطح 15 طائرًا. يطير 6 طيور بعيدًا. كم طائرًا بقي؟","uk":"На даху сидять 15 пташок. 6 пташок відлітають. Скільки пташок залишилося?","tr":"Çatıda 15 kuş var. 6 kuş uçup gidiyor. Kaç kuş kaldı?","ro":"Pe acoperiș sunt 15 păsări. Zboară 6 păsări. Câte păsări au rămas?","bg":"На покрива има 15 птици. 6 птици отлитат. Колко птици остават?"},
 "Ana heeft 20 euro. Ze koopt een boek van 8 euro. Hoeveel euro heeft ze over?": {"en":"Ana has 20 euros. She buys a book for 8 euros. How many euros does she have left?","ar":"عند آنا 20 يورو. تشتري كتابًا بـ8 يورو. كم يورو بقي معها؟","uk":"В Ани 20 євро. Вона купує книжку за 8 євро. Скільки євро в неї залишилося?","tr":"Ana'nın 20 eurosu var. 8 euroluk bir kitap alıyor. Kaç eurosu kaldı?","ro":"Ana are 20 de euro. Cumpără o carte de 8 euro. Câți euro i-au rămas?","bg":"Ана има 20 евро. Купува книга за 8 евро. Колко евро ѝ остават?"},
 "In de bus zitten 40 mensen. Bij de halte stappen er 10 uit. Hoeveel mensen zitten er nog in de bus?": {"en":"There are 40 people on the bus. At the stop, 10 get off. How many people are still on the bus?","ar":"في الحافلة 40 شخصًا. عند المحطة ينزل 10. كم شخصًا ما زال في الحافلة؟","uk":"В автобусі 40 людей. На зупинці виходять 10. Скільки людей ще в автобусі?","tr":"Otobüste 40 kişi var. Durakta 10 kişi iniyor. Otobüste hâlâ kaç kişi var?","ro":"În autobuz sunt 40 de oameni. La stație coboară 10. Câți oameni mai sunt în autobuz?","bg":"В автобуса има 40 души. На спирката слизат 10. Колко души са още в автобуса?"},
 "De juf heeft 50 potloden. Ze geeft er 25 weg. Hoeveel potloden heeft ze over?": {"en":"The teacher has 50 pencils. She gives 25 away. How many pencils does she have left?","ar":"عند المعلمة 50 قلم رصاص. تعطي 25 منها. كم قلمًا بقي عندها؟","uk":"У вчительки 50 олівців. Вона віддає 25. Скільки олівців у неї залишилося?","tr":"Öğretmenin 50 kalemi var. 25 tanesini veriyor. Kaç kalemi kaldı?","ro":"Doamna are 50 de creioane. Dă 25. Câte creioane i-au rămas?","bg":"Учителката има 50 молива. Дава 25. Колко молива ѝ остават?"},
 "Sara heeft 8 kaarten. Tim heeft 5 kaarten. Hoeveel kaarten heeft Sara meer dan Tim?": {"en":"Sara has 8 cards. Tim has 5 cards. How many more cards does Sara have than Tim?","ar":"عند سارة 8 بطاقات. عند تيم 5 بطاقات. كم بطاقة عند سارة أكثر من تيم؟","uk":"У Сари 8 карток. У Тіма 5 карток. На скільки карток у Сари більше, ніж у Тіма?","tr":"Sara'nın 8 kartı var. Tim'in 5 kartı var. Sara'nın Tim'den kaç kartı fazla?","ro":"Sara are 8 cărți de joc. Tim are 5. Cu câte cărți are Sara mai mult decât Tim?","bg":"Сара има 8 карти. Тим има 5 карти. С колко карти повече има Сара от Тим?"},
 "Ahmed is 9 jaar. Zijn zus is 6 jaar. Hoeveel jaar is Ahmed ouder?": {"en":"Ahmed is 9 years old. His sister is 6. How many years older is Ahmed?","ar":"عمر أحمد 9 سنوات. عمر أخته 6 سنوات. كم سنة أحمد أكبر؟","uk":"Ахмедові 9 років. Його сестрі 6 років. На скільки років Ахмед старший?","tr":"Ahmed 9 yaşında. Kız kardeşi 6 yaşında. Ahmed kaç yaş büyük?","ro":"Ahmed are 9 ani. Sora lui are 6 ani. Cu câți ani este Ahmed mai mare?","bg":"Ахмед е на 9 години. Сестра му е на 6. С колко години е по-голям Ахмед?"},
 "Olena heeft 12 knikkers. Ana heeft 7 knikkers. Hoeveel knikkers heeft Ana minder dan Olena?": {"en":"Olena has 12 marbles. Ana has 7 marbles. How many fewer marbles does Ana have than Olena?","ar":"عند أولينا 12 كرة زجاجية. عند آنا 7. كم كرة عند آنا أقل من أولينا؟","uk":"В Олени 12 кульок. В Ани 7 кульок. На скільки кульок в Ани менше, ніж в Олени?","tr":"Olena'nın 12 bilyesi var. Ana'nın 7 bilyesi var. Ana'nın Olena'dan kaç bilyesi eksik?","ro":"Olena are 12 bile. Ana are 7 bile. Cu câte bile are Ana mai puțin decât Olena?","bg":"Олена има 12 топчета. Ана има 7. С колко топчета по-малко има Ана от Олена?"},
 "Tim leest 20 bladzijden. Mehmet leest 14 bladzijden. Wat is het verschil?": {"en":"Tim reads 20 pages. Mehmet reads 14 pages. What is the difference?","ar":"يقرأ تيم 20 صفحة. يقرأ محمد 14 صفحة. ما الفرق؟","uk":"Тім читає 20 сторінок. Мехмет читає 14 сторінок. Яка різниця?","tr":"Tim 20 sayfa okuyor. Mehmet 14 sayfa okuyor. Fark ne kadar?","ro":"Tim citește 20 de pagini. Mehmet citește 14 pagini. Care este diferența?","bg":"Тим чете 20 страници. Мехмет чете 14 страници. Каква е разликата?"},
 "Een pen kost 6 euro. Een schrift kost 2 euro. Hoeveel euro is de pen duurder?": {"en":"A pen costs 6 euros. A notebook costs 2 euros. How many euros more expensive is the pen?","ar":"ثمن القلم 6 يورو. ثمن الدفتر 2 يورو. بكم يورو القلم أغلى؟","uk":"Ручка коштує 6 євро. Зошит коштує 2 євро. На скільки євро ручка дорожча?","tr":"Bir kalem 6 euro. Bir defter 2 euro. Kalem kaç euro daha pahalı?","ro":"Un pix costă 6 euro. Un caiet costă 2 euro. Cu câți euro este pixul mai scump?","bg":"Една химикалка струва 6 евро. Една тетрадка струва 2 евро. С колко евро е по-скъпа химикалката?"},
 "Sara heeft 4 appels. Ahmed heeft het dubbele. Hoeveel appels heeft Ahmed?": {"en":"Sara has 4 apples. Ahmed has double. How many apples does Ahmed have?","ar":"عند سارة 4 تفاحات. عند أحمد الضعف. كم تفاحة عند أحمد؟","uk":"У Сари 4 яблука. В Ахмеда вдвічі більше. Скільки яблук в Ахмеда?","tr":"Sara'nın 4 elması var. Ahmed'in iki katı var. Ahmed'in kaç elması var?","ro":"Sara are 4 mere. Ahmed are dublu. Câte mere are Ahmed?","bg":"Сара има 4 ябълки. Ахмед има двойно повече. Колко ябълки има Ахмед?"},
 "Tim heeft 10 koekjes. Hij geeft de helft aan Olena. Hoeveel koekjes krijgt Olena?": {"en":"Tim has 10 biscuits. He gives half to Olena. How many biscuits does Olena get?","ar":"عند تيم 10 بسكويتات. يعطي النصف لأولينا. كم بسكويتة تحصل أولينا؟","uk":"У Тіма 10 печивок. Він дає половину Олені. Скільки печивок отримує Олена?","tr":"Tim'in 10 kurabiyesi var. Yarısını Olena'ya veriyor. Olena kaç kurabiye alıyor?","ro":"Tim are 10 biscuiți. Îi dă jumătate Olenei. Câți biscuiți primește Olena?","bg":"Тим има 10 бисквити. Дава половината на Олена. Колко бисквити получава Олена?"},
 "3 kinderen krijgen elk 2 snoepjes. Hoeveel snoepjes zijn het samen?": {"en":"3 children each get 2 sweets. How many sweets is that together?","ar":"3 أطفال يحصل كل واحد على 2 حلوى. كم حلوى معًا؟","uk":"3 дитини отримують по 2 цукерки. Скільки цукерок разом?","tr":"3 çocuğun her biri 2 şeker alıyor. Toplam kaç şeker eder?","ro":"3 copii primesc fiecare câte 2 bomboane. Câte bomboane sunt în total?","bg":"3 деца получават по 2 бонбона. Колко бонбона са общо?"},
 "4 kinderen hebben elk 5 kaarten. Hoeveel kaarten zijn het samen?": {"en":"4 children each have 5 cards. How many cards is that together?","ar":"4 أطفال مع كل واحد 5 بطاقات. كم بطاقة معًا؟","uk":"У 4 дітей по 5 карток. Скільки карток разом?","tr":"4 çocuğun her birinin 5 kartı var. Toplam kaç kart eder?","ro":"4 copii au fiecare câte 5 cărți. Câte cărți sunt în total?","bg":"4 деца имат по 5 карти. Колко карти са общо?"},
 "Mehmet heeft 16 knikkers. Hij verdeelt ze eerlijk over 2 zakjes. Hoeveel knikkers zitten er in elk zakje?": {"en":"Mehmet has 16 marbles. He shares them fairly between 2 bags. How many marbles are in each bag?","ar":"عند محمد 16 كرة زجاجية. يقسمها بالعدل على كيسين. كم كرة في كل كيس؟","uk":"У Мехмета 16 кульок. Він ділить їх порівну на 2 мішечки. Скільки кульок у кожному мішечку?","tr":"Mehmet'in 16 bilyesi var. Onları 2 torbaya eşit paylaştırıyor. Her torbada kaç bilye var?","ro":"Mehmet are 16 bile. Le împarte în mod egal în 2 pungi. Câte bile sunt în fiecare pungă?","bg":"Мехмет има 16 топчета. Разделя ги поравно в 2 торбички. Колко топчета има във всяка торбичка?"},
 "Komt er iets bij of gaat er iets af?": {"en":"Is something added or taken away?","ar":"هل يُضاف شيء أم يُطرح شيء؟","uk":"Щось додається чи щось забирають?","tr":"Bir şey ekleniyor mu, çıkarılıyor mu?","ro":"Se adaugă ceva sau se ia ceva?","bg":"Добавя ли се нещо, или се отнема?"},
 "Gaat er iets weg? Wat heb je dan nog?": {"en":"Does something go away? What do you still have then?","ar":"هل يذهب شيء؟ ماذا يبقى معك إذن؟","uk":"Щось зникає? Що тоді в тебе залишається?","tr":"Bir şey gidiyor mu? O zaman elinde ne kalıyor?","ro":"Pleacă ceva? Ce mai ai atunci?","bg":"Отива ли си нещо? Какво ти остава тогава?"},
 "Hoeveel moet er bij het kleine getal, tot het grote getal?": {"en":"How much do you add to the small number to reach the big number?","ar":"كم يجب أن تضيف إلى العدد الصغير حتى تصل إلى العدد الكبير؟","uk":"Скільки треба додати до меншого числа, щоб дійти до більшого?","tr":"Küçük sayıya kaç eklersen büyük sayıya ulaşırsın?","ro":"Cât trebuie adăugat la numărul mic ca să ajungi la numărul mare?","bg":"Колко трябва да добавиш към малкото число, за да стигнеш голямото?"},
 "Is het twee keer zoveel, of de helft? Of steeds hetzelfde getal?": {"en":"Is it twice as much, or half? Or the same number each time?","ar":"هل هو الضعف أم النصف؟ أم نفس العدد كل مرة؟","uk":"Це вдвічі більше чи половина? Чи щоразу те саме число?","tr":"İki katı mı, yarısı mı? Yoksa her seferinde aynı sayı mı?","ro":"Este de două ori mai mult sau jumătate? Sau de fiecare dată același număr?","bg":"Двойно ли е, или половината? Или всеки път същото число?"},
};

export default NIEUWKOMERS_STEUN;
