// Taalpagina's voor ouders van nieuwkomers (3 okt 2026, Mark: "dit hele nieuwkomers ding, kun je
// dat vindbaar maken voor google, ai etc?"). Een Oekraïense of Arabische ouder zoekt in de eigen
// taal ("Nederlands leren voor kinderen gratis app"), niet in het Nederlands. Per steuntaal één
// statische pagina public/nieuwkomers-<taal>.html met hreflang-cluster (+ de Nederlandse pagina
// nieuwkomers-nederlands-leren.html), FAQPage-JSON-LD en een knop naar /nieuwkomers?taal=<taal>
// (zet de steuntaal meteen). Draait in de prebuild; teksten hieronder aanpassen, niet in de html.
import { writeFileSync } from "node:fs";

const BASE = "https://leerkwartier.app";
const NL_PAGINA = `${BASE}/nieuwkomers-nederlands-leren.html`;
const CODE = "WELKOMNIEUWKOMER";

const T = {
  en: {
    naam: "English", hreflang: "en",
    titel: "Free Dutch for your child — Leerkwartier, the starting point for newcomers",
    omschrijving: "Free app for children who are learning Dutch: classroom sentences, first words, letters and sounds, dictation and maths words. Tap any sentence to see it in English. No account, no ads.",
    h1: "Learn Dutch for school — free, with help in English",
    intro: "Is your child new in the Netherlands or Belgium? Leerkwartier helps children aged about 6 to 12 with the Dutch they need at school. Everything stays in Dutch, but your child can tap a sentence to see it in English, and the app can read everything aloud.",
    stappenKop: "Three steps to the normal class",
    stappen: ["Step 1 · Welcome: classroom sentences (\"May I go to the toilet?\"), first words, maths words and counting to 20.", "Step 2 · Letters and words: sounds, short words, more words and a simple dictation.", "Step 3 · The bridge to the class: the words on worksheets (circle, fill in, tick) and sums in a short story. Then a bridge test with questions from the normal app."],
    stappenNa: "Every step ends with a short test and a certificate to print. On the page your child sees \"What can I do already?\" with ticks.",
    beginKop: "How to start",
    begin: ["Open the page with the button below (English is set automatically).", `Or go to leerkwartier.app and type the code ${CODE}.`, "Choose the language you speak at home. Start at 1. A quarter of an hour a day is enough."],
    knop: "Open the starting point in English",
    jufKop: "For the teacher",
    juf: `Free for schools, guaranteed until 2031. Write the code ${CODE} on the board or show the QR code on the interactive whiteboard. There is a guide for the language class (in Dutch).`,
    faq: [["Is it really free?", "Yes. Practising is free for children, parents and schools, guaranteed until 2031. There are no ads and no subscription."], ["Does my child need an account or an e-mail address?", "No. Your child opens the page and starts. Progress is saved on the device."], ["Is everything translated?", "No, on purpose: everything stays in Dutch, because that is what your child is learning. Your child can tap a sentence to see it in English, Arabic, Ukrainian, Turkish, Romanian or Bulgarian."]],
    meer: "More in Dutch", contact: "Contact",
  },
  ar: {
    naam: "العربية", hreflang: "ar", dir: "rtl",
    titel: "تعلّم الهولندية لطفلك مجانًا — Leerkwartier، نقطة البداية للقادمين الجدد",
    omschrijving: "تطبيق مجاني للأطفال الذين يتعلمون الهولندية: جمل الصف، أول الكلمات، الحروف والأصوات، الإملاء وكلمات الحساب. اضغط على أي جملة لتراها بالعربية. بدون حساب وبدون إعلانات.",
    h1: "تعلّم الهولندية للمدرسة — مجانًا، مع مساعدة بالعربية",
    intro: "هل طفلك جديد في هولندا أو بلجيكا؟ يساعد Leerkwartier الأطفال من عمر 6 إلى 12 سنة تقريبًا على تعلّم الهولندية التي يحتاجونها في المدرسة. كل شيء يبقى بالهولندية، لكن يستطيع طفلك الضغط على جملة ليراها بالعربية، ويمكن للتطبيق قراءة كل شيء بصوت عالٍ.",
    stappenKop: "ثلاث درجات إلى الصف العادي",
    stappen: ["الدرجة 1 · أهلًا: جمل الصف (\"هل يمكنني الذهاب إلى الحمام؟\")، أول الكلمات، كلمات الحساب والعدّ حتى 20.", "الدرجة 2 · الحروف والكلمات: الأصوات، كلمات قصيرة، كلمات أكثر وإملاء بسيط.", "الدرجة 3 · الجسر إلى الصف: الكلمات في أوراق العمل (ضع دائرة، املأ، ضع علامة) ومسائل في قصة قصيرة. ثم اختبار الجسر بأسئلة من التطبيق العادي."],
    stappenNa: "تنتهي كل درجة باختبار قصير وشهادة للطباعة. يرى طفلك في الصفحة \"ماذا أستطيع الآن؟\" مع علامات صح.",
    beginKop: "كيف تبدأ",
    begin: ["افتح الصفحة بالزر أدناه (تُختار العربية تلقائيًا).", `أو اذهب إلى leerkwartier.app واكتب الرمز ${CODE}.`, "اختر اللغة التي تتكلمها في البيت. ابدأ من 1. ربع ساعة في اليوم تكفي."],
    knop: "افتح نقطة البداية بالعربية",
    jufKop: "للمعلّم",
    juf: `مجاني للمدارس، ومضمون حتى عام 2031. اكتب الرمز ${CODE} على السبورة أو اعرض رمز QR على السبورة الذكية. يوجد دليل لصف اللغة (بالهولندية).`,
    faq: [["هل هو مجاني حقًا؟", "نعم. التدريب مجاني للأطفال والأهل والمدارس، ومضمون حتى عام 2031. لا توجد إعلانات ولا اشتراك."], ["هل يحتاج طفلي إلى حساب أو بريد إلكتروني؟", "لا. يفتح طفلك الصفحة ويبدأ. يُحفظ التقدّم على الجهاز."], ["هل كل شيء مترجم؟", "لا، وذلك عن قصد: كل شيء يبقى بالهولندية لأن هذا ما يتعلمه طفلك. يستطيع طفلك الضغط على جملة ليراها بالعربية أو الإنجليزية أو الأوكرانية أو التركية أو الرومانية أو البلغارية."]],
    meer: "المزيد بالهولندية", contact: "تواصل",
  },
  uk: {
    naam: "Українська", hreflang: "uk",
    titel: "Безкоштовна нідерландська для вашої дитини — Leerkwartier, старт для новоприбулих",
    omschrijving: "Безкоштовний застосунок для дітей, які вчать нідерландську: речення для класу, перші слова, літери й звуки, диктант і слова для математики. Натисніть на речення, щоб побачити його українською. Без акаунта й без реклами.",
    h1: "Нідерландська для школи — безкоштовно, з допомогою українською",
    intro: "Ваша дитина нещодавно в Нідерландах чи Бельгії? Leerkwartier допомагає дітям приблизно від 6 до 12 років вивчити нідерландську, потрібну в школі. Усе залишається нідерландською, але дитина може натиснути на речення й побачити його українською, а застосунок може все читати вголос.",
    stappenKop: "Три сходинки до звичайного класу",
    stappen: ["Сходинка 1 · Ласкаво просимо: речення для класу («Можна мені в туалет?»), перші слова, слова для математики й рахунок до 20.", "Сходинка 2 · Літери й слова: звуки, короткі слова, більше слів і простий диктант.", "Сходинка 3 · Міст до класу: слова з робочих аркушів (обведи, впиши, познач) і задачі в короткій історії. Потім тест-міст із запитаннями зі звичайного застосунку."],
    stappenNa: "Кожна сходинка закінчується коротким тестом і дипломом, який можна надрукувати. На сторінці дитина бачить «Що я вже вмію?» з галочками.",
    beginKop: "Як почати",
    begin: ["Відкрийте сторінку кнопкою нижче (українська вмикається автоматично).", `Або перейдіть на leerkwartier.app і введіть код ${CODE}.`, "Виберіть мову, якою ви розмовляєте вдома. Почніть з 1. Чверті години на день достатньо."],
    knop: "Відкрити старт українською",
    jufKop: "Для вчителя",
    juf: `Безкоштовно для шкіл, гарантовано до 2031 року. Напишіть код ${CODE} на дошці або покажіть QR-код на інтерактивній дошці. Є посібник для мовного класу (нідерландською).`,
    faq: [["Це справді безкоштовно?", "Так. Навчання безкоштовне для дітей, батьків і шкіл, гарантовано до 2031 року. Немає реклами й підписки."], ["Чи потрібен дитині акаунт або електронна пошта?", "Ні. Дитина відкриває сторінку й починає. Прогрес зберігається на пристрої."], ["Чи все перекладено?", "Ні, і це навмисно: усе залишається нідерландською, бо саме її вчить дитина. Дитина може натиснути на речення й побачити його українською, англійською, арабською, турецькою, румунською чи болгарською."]],
    meer: "Більше нідерландською", contact: "Контакт",
  },
  tr: {
    naam: "Türkçe", hreflang: "tr",
    titel: "Çocuğunuz için ücretsiz Hollandaca — Leerkwartier, yeni gelenler için başlangıç noktası",
    omschrijving: "Hollandaca öğrenen çocuklar için ücretsiz uygulama: sınıf cümleleri, ilk kelimeler, harfler ve sesler, dikte ve matematik kelimeleri. Bir cümleye dokunun, Türkçesini görün. Hesap yok, reklam yok.",
    h1: "Okul için Hollandaca — ücretsiz, Türkçe yardımla",
    intro: "Çocuğunuz Hollanda'da veya Belçika'da yeni mi? Leerkwartier, yaklaşık 6-12 yaş arası çocuklara okulda ihtiyaç duydukları Hollandacayı öğrenmede yardım eder. Her şey Hollandaca kalır ama çocuğunuz bir cümleye dokunup Türkçesini görebilir ve uygulama her şeyi sesli okuyabilir.",
    stappenKop: "Normal sınıfa üç basamak",
    stappen: ["1. basamak · Hoş geldin: sınıf cümleleri (\"Tuvalete gidebilir miyim?\"), ilk kelimeler, matematik kelimeleri ve 20'ye kadar saymak.", "2. basamak · Harfler ve kelimeler: sesler, kısa kelimeler, daha fazla kelime ve basit bir dikte.", "3. basamak · Sınıfa köprü: çalışma kâğıtlarındaki kelimeler (daire içine al, doldur, işaretle) ve kısa bir hikâyedeki işlemler. Sonra normal uygulamadan sorularla bir köprü testi."],
    stappenNa: "Her basamak kısa bir test ve yazdırılabilir bir diplomayla biter. Çocuğunuz sayfada işaretlerle \"Neler yapabiliyorum?\" bölümünü görür.",
    beginKop: "Nasıl başlanır",
    begin: ["Aşağıdaki düğmeyle sayfayı açın (Türkçe otomatik seçilir).", `Ya da leerkwartier.app adresine gidip ${CODE} kodunu yazın.`, "Evde konuştuğunuz dili seçin. 1'den başlayın. Günde çeyrek saat yeterli."],
    knop: "Başlangıç noktasını Türkçe aç",
    jufKop: "Öğretmen için",
    juf: `Okullar için ücretsiz, 2031'e kadar garantili. ${CODE} kodunu tahtaya yazın veya QR kodunu akıllı tahtada gösterin. Dil sınıfı için bir kılavuz var (Hollandaca).`,
    faq: [["Gerçekten ücretsiz mi?", "Evet. Alıştırma yapmak çocuklar, ebeveynler ve okullar için ücretsizdir, 2031'e kadar garantilidir. Reklam ve abonelik yoktur."], ["Çocuğumun hesaba veya e-posta adresine ihtiyacı var mı?", "Hayır. Çocuğunuz sayfayı açar ve başlar. İlerleme cihazda kaydedilir."], ["Her şey çevrilmiş mi?", "Hayır, bilerek: her şey Hollandaca kalır çünkü çocuğunuz bunu öğreniyor. Çocuğunuz bir cümleye dokunup onu Türkçe, İngilizce, Arapça, Ukraynaca, Romence veya Bulgarca görebilir."]],
    meer: "Hollandaca daha fazlası", contact: "İletişim",
  },
  ro: {
    naam: "Română", hreflang: "ro",
    titel: "Olandeză gratuită pentru copilul tău — Leerkwartier, punctul de pornire pentru nou-veniți",
    omschrijving: "Aplicație gratuită pentru copiii care învață olandeza: propoziții pentru clasă, primele cuvinte, litere și sunete, dictare și cuvinte de matematică. Apasă pe o propoziție ca s-o vezi în română. Fără cont, fără reclame.",
    h1: "Olandeză pentru școală — gratuit, cu ajutor în română",
    intro: "Copilul tău e nou în Olanda sau în Belgia? Leerkwartier îi ajută pe copiii de aproximativ 6–12 ani cu olandeza de care au nevoie la școală. Totul rămâne în olandeză, dar copilul poate apăsa pe o propoziție ca s-o vadă în română, iar aplicația poate citi totul cu voce tare.",
    stappenKop: "Trei trepte până la clasa obișnuită",
    stappen: ["Treapta 1 · Bun venit: propoziții pentru clasă („Pot să merg la toaletă?”), primele cuvinte, cuvinte de matematică și numărat până la 20.", "Treapta 2 · Litere și cuvinte: sunete, cuvinte scurte, mai multe cuvinte și o dictare simplă.", "Treapta 3 · Podul spre clasă: cuvintele de pe fișele de lucru (încercuiește, completează, bifează) și exerciții într-o poveste scurtă. Apoi un test-pod cu întrebări din aplicația obișnuită."],
    stappenNa: "Fiecare treaptă se termină cu un test scurt și o diplomă de printat. Pe pagină copilul vede „Ce știu deja să fac?” cu bife.",
    beginKop: "Cum începi",
    begin: ["Deschide pagina cu butonul de mai jos (româna se alege automat).", `Sau mergi pe leerkwartier.app și scrie codul ${CODE}.`, "Alege limba pe care o vorbiți acasă. Începe de la 1. Un sfert de oră pe zi e destul."],
    knop: "Deschide punctul de pornire în română",
    jufKop: "Pentru învățător",
    juf: `Gratuit pentru școli, garantat până în 2031. Scrieți codul ${CODE} pe tablă sau arătați codul QR pe tabla interactivă. Există un ghid pentru clasa de limbă (în olandeză).`,
    faq: [["Chiar e gratuit?", "Da. Exersarea e gratuită pentru copii, părinți și școli, garantat până în 2031. Fără reclame și fără abonament."], ["Are copilul nevoie de un cont sau de o adresă de e-mail?", "Nu. Copilul deschide pagina și începe. Progresul se salvează pe dispozitiv."], ["E totul tradus?", "Nu, intenționat: totul rămâne în olandeză, pentru că asta învață copilul. Copilul poate apăsa pe o propoziție ca s-o vadă în română, engleză, arabă, ucraineană, turcă sau bulgară."]],
    meer: "Mai mult în olandeză", contact: "Contact",
  },
  bg: {
    naam: "Български", hreflang: "bg",
    titel: "Безплатен нидерландски за детето ви — Leerkwartier, началната точка за новодошли",
    omschrijving: "Безплатно приложение за деца, които учат нидерландски: изречения за класа, първи думи, букви и звукове, диктовка и думи за смятане. Докоснете изречение, за да го видите на български. Без акаунт и без реклами.",
    h1: "Нидерландски за училище — безплатно, с помощ на български",
    intro: "Детето ви е ново в Нидерландия или Белгия? Leerkwartier помага на деца на около 6–12 години с нидерландския, който им трябва в училище. Всичко остава на нидерландски, но детето може да докосне изречение и да го види на български, а приложението може да чете всичко на глас.",
    stappenKop: "Три стъпала до обикновения клас",
    stappen: ["Стъпало 1 · Добре дошъл: изречения за класа („Може ли да отида до тоалетната?“), първи думи, думи за смятане и броене до 20.", "Стъпало 2 · Букви и думи: звукове, кратки думи, още думи и проста диктовка.", "Стъпало 3 · Мостът към класа: думите в работните листове (огради, попълни, отбележи) и задачи в кратка история. После тест-мост с въпроси от обикновеното приложение."],
    stappenNa: "Всяко стъпало завършва с кратък тест и диплома за разпечатване. На страницата детето вижда „Какво вече мога?“ с отметки.",
    beginKop: "Как да започнете",
    begin: ["Отворете страницата с бутона по-долу (българският се избира автоматично).", `Или отидете на leerkwartier.app и въведете кода ${CODE}.`, "Изберете езика, на който говорите вкъщи. Започнете от 1. Четвърт час на ден е достатъчно."],
    knop: "Отвори началната точка на български",
    jufKop: "За учителя",
    juf: `Безплатно за училищата, гарантирано до 2031 г. Напишете кода ${CODE} на дъската или покажете QR кода на интерактивната дъска. Има ръководство за езиковия клас (на нидерландски).`,
    faq: [["Наистина ли е безплатно?", "Да. Упражненията са безплатни за деца, родители и училища, гарантирано до 2031 г. Няма реклами и абонамент."], ["Трябва ли на детето акаунт или имейл адрес?", "Не. Детето отваря страницата и започва. Напредъкът се запазва на устройството."], ["Всичко ли е преведено?", "Не, нарочно: всичко остава на нидерландски, защото детето учи точно това. Детето може да докосне изречение и да го види на български, английски, арабски, украински, турски или румънски."]],
    meer: "Още на нидерландски", contact: "Контакт",
  },
};

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = (taal) => `${BASE}/nieuwkomers-${taal}.html`;
const hreflangs = [
  `<link rel="alternate" hreflang="nl" href="${NL_PAGINA}">`,
  ...Object.entries(T).map(([taal, x]) => `<link rel="alternate" hreflang="${x.hreflang}" href="${url(taal)}">`),
  `<link rel="alternate" hreflang="x-default" href="${NL_PAGINA}">`,
].join("\n");

function pagina(taal, x) {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", inLanguage: x.hreflang, mainEntity: x.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      { "@type": "LearningResource", name: x.h1, inLanguage: ["nl", x.hreflang], url: `${BASE}/nieuwkomers?taal=${taal}`, isAccessibleForFree: true, educationalLevel: "basisonderwijs (6-12 jaar)", learningResourceType: "oefenapp", teaches: "Nederlands als tweede taal (NT2) voor nieuwkomers", provider: { "@type": "Organization", name: "Leerkwartier", url: BASE } },
    ],
  };
  const talenNav = [`<a href="${NL_PAGINA}" lang="nl">Nederlands</a>`, ...Object.entries(T).map(([t, y]) => (t === taal ? `<b>${esc(y.naam)}</b>` : `<a href="${url(t)}" lang="${y.hreflang}">${esc(y.naam)}</a>`))].join(" · ");
  return `<!doctype html>
<html lang="${x.hreflang}"${x.dir ? ` dir="${x.dir}"` : ""}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- GEGENEREERD door scripts/buildNieuwkomersTalen.mjs — pas de teksten dáár aan. -->
<title>${esc(x.titel)}</title>
<meta name="description" content="${esc(x.omschrijving)}">
<link rel="canonical" href="${url(taal)}">
${hreflangs}
<meta property="og:title" content="${esc(x.titel)}">
<meta property="og:description" content="${esc(x.omschrijving)}">
<meta property="og:url" content="${url(taal)}">
<meta property="og:image" content="${BASE}/social/nieuwkomers-deel.png">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, "Segoe UI", Arial, sans-serif; background: linear-gradient(160deg,#0f2a44,#173a5e 60%,#1e4a73); color: #fff; line-height: 1.55; }
  main { max-width: 680px; margin: 0 auto; padding: 22px 16px 48px; }
  .talen { font-size: 14px; opacity: .85; margin-bottom: 18px; }
  .talen a { color: #ffd166; }
  h1 { font-size: clamp(26px, 6vw, 36px); line-height: 1.2; margin: 6px 0 12px; }
  h2 { font-size: 20px; margin: 26px 0 8px; }
  .kaart { background: rgba(255,255,255,.96); color: #0f2a44; border-radius: 16px; padding: 14px 18px; margin: 10px 0; }
  ol, ul { padding-inline-start: 22px; margin: 6px 0; }
  li { margin: 6px 0; }
  .knop { display: inline-block; margin: 14px 0 4px; background: #ffd166; color: #0f2a44; font-weight: 900; font-size: 18px; padding: 14px 20px; border-radius: 14px; text-decoration: none; }
  .code { font-family: ui-monospace, monospace; font-weight: 900; background: #fff4cc; color: #0f2a44; padding: 1px 8px; border-radius: 6px; }
  details { background: rgba(255,255,255,.1); border-radius: 12px; padding: 10px 14px; margin: 8px 0; }
  summary { font-weight: 800; cursor: pointer; }
  footer { margin-top: 30px; font-size: 13px; opacity: .8; }
  footer a { color: #ffd166; }
</style>
</head>
<body>
<main>
  <div class="talen">${talenNav}</div>
  <h1>🌍 ${esc(x.h1)}</h1>
  <p>${esc(x.intro)}</p>
  <a class="knop" href="/nieuwkomers?taal=${taal}&amp;utm_source=taalpagina-${taal}">▶ ${esc(x.knop)}</a>
  <h2>${esc(x.stappenKop)}</h2>
  <div class="kaart"><ol>${x.stappen.map((s) => `<li>${esc(s)}</li>`).join("")}</ol><p style="margin:8px 0 0">${esc(x.stappenNa)}</p></div>
  <h2>${esc(x.beginKop)}</h2>
  <ol>${x.begin.map((s) => `<li>${esc(s).replace(CODE, `<span class="code">${CODE}</span>`)}</li>`).join("")}</ol>
  <h2>${esc(x.jufKop)}</h2>
  <p>${esc(x.juf).replace(CODE, `<span class="code">${CODE}</span>`)} <a href="/nieuwkomers-handleiding.html" style="color:#ffd166">→</a></p>
  ${x.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("\n  ")}
  <footer>${esc(x.meer)}: <a href="/nieuwkomers-nederlands-leren.html" lang="nl">Nederlands leren voor nieuwkomers</a> · <a href="/contact.html">${esc(x.contact)}</a> · <a href="/privacy.html">Privacy</a><br>Leerkwartier · KvK 42176244 · Een kwartier per dag leren, een leven lang slimmer.</footer>
</main>
</body>
</html>
`;
}

const uit = new URL("../public/", import.meta.url);
for (const [taal, x] of Object.entries(T)) writeFileSync(new URL(`nieuwkomers-${taal}.html`, uit), pagina(taal, x));
console.log(`[nieuwkomers-talen] ${Object.keys(T).length} taalpagina's geschreven`);
