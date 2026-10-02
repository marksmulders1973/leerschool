// 🌍 Nieuwkomer-pakket — losse pagina (Mark 24 sep 2026, na de mail van een
// nieuwkomersleerkracht: "de meeste kinderen zitten op het niveau van groep 3/4").
// Regels van Mark: los van al het andere (geen Familiepakket, geen partnercode),
// "minder maar beter passend", iedereen die de code WELKOMNIEUWKOMER intikt komt hier.
// Steuntaal (24 sep, Marks idee "vier talen laten kiezen"): het kind kiest zijn
// thuistaal (Engels, Arabisch, Oekraïens, Turks; 30 sep 2026 ook Roemeens en Bulgaars); de vragen blijven Nederlands, maar
// een tik op een vraag (of het knopje bij een antwoord) toont dezelfde zin in de eigen
// taal (SteunTik.jsx leest localStorage `lk_steuntaal`). Geen vertaling van de app: steun.
import { PICTO_BRON } from "../learnPaths/nieuwkomersPicto.js";
import NieuwkomersMijnPunten from "./NieuwkomersMijnPunten.jsx";
import { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { track } from "../utils.js";
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";
import LuisterKnop from "../shared/ui/LuisterKnop.jsx";
import VoorleesSchakelaar from "../shared/ui/VoorleesSchakelaar.jsx";
import { voorleesAltijd, useVanzelfZeggen } from "../shared/voorleesModus.js";
import { aantalTeHerhalen } from "../shared/herhaalNieuwkomers.js";
import { submitWish } from "../data/repos/wishesRepo.js";

const NieuwkomersHerhaal = lazy(() => import("./NieuwkomersHerhaal.jsx"));
const NieuwkomersLuisterKies = lazy(() => import("./NieuwkomersLuisterKies.jsx"));

// 👂 Kijken en luisteren (29 sep 2026, mail nieuwkomers-directeur: "het merendeel is ongeletterd"):
// vier ingangen zonder lezen (30 sep: + Zinnen, "Mag ik naar de wc?"). Kopjes in de thuistaal; de knoppen zelf spreken ook.
const LUISTER_KOP = {
  nl: ["Kijken en luisteren", "Ook als je nog niet kunt lezen.", "Woordkaarten", "Luister en kies", "Plaatjesdictee", "Zinnen"],
  en: ["Look and listen", "Also if you cannot read yet.", "Word cards", "Listen and choose", "Picture dictation", "Sentences"],
  ar: ["انظر واستمع", "حتى لو كنت لا تستطيع القراءة بعد.", "بطاقات الكلمات", "استمع واختر", "إملاء بالصور", "جمل"],
  uk: ["Дивись і слухай", "Навіть якщо ти ще не вмієш читати.", "Картки зі словами", "Слухай і вибирай", "Диктант з картинками", "Речення"],
  tr: ["Bak ve dinle", "Henüz okuyamasan da olur.", "Kelime kartları", "Dinle ve seç", "Resimli dikte", "Cümleler"],
  ro: ["Privește și ascultă", "Chiar dacă nu știi încă să citești.", "Cartonașe cu cuvinte", "Ascultă și alege", "Dictare cu imagini", "Propoziții"],
  bg: ["Гледай и слушай", "Дори ако още не можеш да четеш.", "Карти с думи", "Слушай и избери", "Диктовка с картинки", "Изречения"],
};
// Doorgroeiplan stap 2 (26 sep 2026): trede-testje na tegels 1-4.
const NieuwkomersTredeTest = lazy(() => import("./NieuwkomersTredeTest.jsx"));
const TREDE_KEY = "lk_nk_trede";
// Welke tredes zijn gehaald (lk_nk_tredes, sinds v755); oudere apparaten hebben alleen lk_nk_trede = 1.
const leesTrede = () => {
  try {
    const g = JSON.parse(localStorage.getItem("lk_nk_tredes") || "null");
    if (Array.isArray(g)) return g;
    return Number(localStorage.getItem(TREDE_KEY)) >= 1 ? [1] : [];
  } catch { return []; }
};
// Instap-testje (stap 5): uitkomst 1, 2 of 3 (= "Verder oefenen") in lk_nk_instap.
const leesInstap = () => { try { return Number(localStorage.getItem("lk_nk_instap")) || 0; } catch { return 0; } };
const TREDE_1_AANTAL = 4; // tegels 1-4 = trede 1 "Welkom"
const TREDE_2_AANTAL = 3; // tegels 5-7 = trede 2 "Letters en woorden" (stap 4; Meer woorden erbij 27 sep)

export const STEUNTAAL_KEY = "lk_steuntaal";
export const STEUNTALEN = [
  { id: "nl", naam: "Nederlands", eigen: "Nederlands" },
  { id: "en", naam: "Engels", eigen: "English" },
  { id: "ar", naam: "Arabisch", eigen: "العربية", rtl: true },
  { id: "uk", naam: "Oekraïens", eigen: "Українська" },
  { id: "tr", naam: "Turks", eigen: "Türkçe" },
  { id: "ro", naam: "Roemeens", eigen: "Română" },
  { id: "bg", naam: "Bulgaars", eigen: "Български" },
];

const T = {
  nl: {
    kop: "Nieuwkomer-pakket",
    sub: "Gratis. Geen account. Korte zinnen. Elke som met uitleg.",
    taalvraag: "Welke taal spreek je thuis?",
    taaluitleg: "Alles blijft Nederlands. Tik op een zin of op het knopje bij een antwoord. Dan zie je jouw taal.",
    intro: "Dit is voor kinderen die nog Nederlands leren. Begin bij 1. Doe elke dag een beetje.",
    tegels: [
      { id: "in-de-klas-nieuwkomers", soort: "pad", titel: "In de klas", uitleg: "Wat zeg je tegen de juf? Hoe maak je vrienden?" },
      { id: "woorden-nieuwkomers", soort: "pad", titel: "Woorden", uitleg: "Je eerste Nederlandse woorden. Tik op het knopje naast een woord: dan zie je het in jouw taal." },
      { id: "rekentaal-nieuwkomers", soort: "pad", titel: "Rekentaal", uitleg: "Meer, minder, samen, weg, verdelen: de woorden in elke rekenles." },
      { id: "rekenen-tot-20-nieuwkomers", soort: "pad", titel: "Rekenen tot 20", uitleg: "Tellen, erbij en eraf. Met je vingers mag." },
      { id: "letters-klanken-nieuwkomers", soort: "pad", titel: "Letters en klanken", uitleg: "Welke klank hoor je? t-a-s wordt tas." },
      { id: "woorden-2-nieuwkomers", soort: "pad", titel: "Meer woorden", uitleg: "Kleding, eten, thuis, buiten en je lichaam." },
      { id: "dictee", soort: "pagina", nk: true, titel: "Dictee", uitleg: "Charley zegt een woord. Jij schrijft het. Elke letter is een klank." },
      { id: "in-de-klas-2-nieuwkomers", soort: "pad", titel: "In de klas 2", uitleg: "Zelf werken, klaar en wat nu, de juf is bezig, en fijne gevoelens." },
      { id: "woorden-3-nieuwkomers", soort: "pad", titel: "Woorden 3", uitleg: "Kleuren, vormen, groot en klein, gisteren en vandaag, denken en vertellen." },
      { id: "rekenen-tot-100-nieuwkomers", soort: "pad", titel: "Rekenen tot 100", uitleg: "Tientallen en eenheden. Sprongen van 10." },
      { id: "leesladder", soort: "pagina", titel: "Lezen", uitleg: "Begin met vijf korte zinnen. De knop leest voor." },
      { id: "tafels", soort: "pagina", titel: "Tafels", uitleg: "Steeds een stukje." },
    ],
    // 29 sep 2026: de oude zin ("overal een knop Lees voor") klopte niet → nu wat er echt is.
    voorlees: "Kun je nog niet (goed) lezen? Zet bovenaan de knop 'Ik kan nog niet (goed) lezen' aan. Dan leest de app de vragen voor. Tik op een luidspreker: dan hoor je het nog een keer.",
    luisterTip: "Tik op een luidspreker: dan hoor je wat er staat.",
    juf: "Voor de leerkracht: alles op deze pagina is gratis, ook op het digibord, gegarandeerd tot en met 2031. Zet de code WELKOMNIEUWKOMER op het bord; ieder kind komt dan hier.",
    terug: "← Terug",
    herhaalKop: "Vandaag herhalen",
    herhaalUitleg: "Woorden en zinnen van eerder. Zo onthoud je ze.",
    trede1: "Trede 1 · Welkom",
    trede2: "Trede 2 · Letters en woorden",
    verder: "Verder oefenen",
    testKop: "Trede-testje",
    testUitleg: "Klaar met 1 tot en met 4? Doe het testje en haal je diploma.",
    testGehaald: "Trede 1 gehaald! Je mag het testje altijd opnieuw doen.",
    testUitleg2: "Klaar met 5 tot en met 7? Doe het testje en haal je diploma.",
    instapKop: "Nieuw hier? Doe het instap-testje",
    overKop: "Klaar voor de gewone Leerkwartier?",
    overUitleg: "Rekenen en taal voor jouw groep. Daar staat alles in het Nederlands, zonder vertaalknop. Je kunt altijd terug naar deze pagina.",
    overGroep: "In welke groep zit je?",
    instapUitleg: "Een paar vragen. Dan weet je waar je begint.",
    hierBegin: "Hier begin je",
    thuisbrief: "Voor de leerkracht: print het briefje voor thuis (5 talen)",
    deelKop: "Ken je een school of gezin voor wie dit handig is? Deel deze pagina:",
    tipKop: "💬 Tip, wens, of klopt er iets niet?",
    tipIk: "Ik ben:",
    tipRollen: ["leerkracht", "ouder", "leerling"],
    tipVoorbeeld: "Bijvoorbeeld: deze Arabische zin klopt niet · wij missen de taal Tigrinya · graag meer rekenen",
    tipStuur: "Verstuur",
    tipDank: "Dank je wel! Mark leest elke tip. Wil je een antwoord? Mail naar hallo@leerkwartier.app.",
    deelTekst: "Gratis Nederlands leren voor nieuwkomers, met hulp in de eigen taal (Arabisch, Oekraïens, Turks, Roemeens, Bulgaars, Engels). Zonder account.",
    deelKopieer: "Deel of kopieer link",
    deelGekopieerd: "Link gekopieerd",
    testGehaald2: "Trede 2 gehaald! Je mag het testje altijd opnieuw doen.",
  },
  en: { tipKop: "Tip, wish, or is something wrong? Write it here (any language is fine).", overKop: "Ready for the normal Leerkwartier?", overUitleg: "Maths and language for your class. There everything is in Dutch, without the translate button. You can always come back to this page.", overGroep: "Which class (groep) are you in?", instapKop: "New here? Do the starting test", instapUitleg: "A few questions. Then you know where to start.", hierBegin: "Start here", testUitleg2: "Done with 5 to 7? Do the test and get your certificate.", testGehaald2: "Step 2 passed! You can always do the test again.", trede1: "Step 1 · Welcome", trede2: "Step 2 · Letters and words", verder: "Keep practising", testKop: "Step test", testUitleg: "Done with 1 to 4? Do the test and get your certificate.", testGehaald: "Step 1 passed! You can always do the test again.", herhaalKop: "Practise again today", herhaalUitleg: "Words and sentences from before. This way you remember them.", sub: "Free. No account. Short sentences. Every sum with an explanation.", juf: "For the teacher: everything on this page is free, also on the classroom board, guaranteed until 31 December 2028. Write the code WELKOMNIEUWKOMER on the board; every child will come here.", tegels: [["In class","What do you say to the teacher? How do you make friends?"],["Words","Your first Dutch words. Tap the small button next to a word to see it in your language."],["Maths words","More, less, together, away, sharing: the words in every maths lesson."],["Counting to 20","Counting, adding and taking away. You may use your fingers."],["Letters and sounds","Which sound do you hear? t-a-s becomes tas."],["More words","Clothes, food, home, outside and your body."],["Dictation","Charley says a word. You write it. Every letter is a sound."],["In class 2","Working on your own, finished and what now, the teacher is busy, and good feelings."],["Words 3","Colours, shapes, big and small, yesterday and today, thinking and telling."],["Counting to 100","Tens and ones. Jumps of 10."],["Reading","Start with five short sentences. The button reads them aloud."],["Times tables","A little bit at a time."]], taalvraag: "Which language do you speak at home?", taaluitleg: "Everything stays in Dutch. Tap a sentence, or the small button next to an answer, to see your language.", intro: "This is for children who are still learning Dutch. Start at 1. Do a little every day.", voorlees: "Can't read (well) yet? Turn on the button 'Ik kan nog niet (goed) lezen' (I can't read well yet) at the top. Then the app reads the questions aloud. Tap a speaker to hear it again.", schakelaar: "Can't read (well) yet? Tap this button: then the app reads the questions and answers aloud." },
  ar: { tipKop: "نصيحة أو أمنية أو هناك خطأ؟ اكتبه هنا (بأي لغة).", overKop: "هل أنت جاهز لـ Leerkwartier العادي؟", overUitleg: "الحساب واللغة لصفّك. هناك كل شيء بالهولندية، بدون زر الترجمة. يمكنك دائمًا العودة إلى هذه الصفحة.", overGroep: "في أي صف (groep) أنت؟", instapKop: "جديد هنا؟ قم باختبار البداية", instapUitleg: "بعض الأسئلة. ثم تعرف من أين تبدأ.", hierBegin: "ابدأ من هنا", testUitleg2: "انتهيت من 5 إلى 7؟ قم بالاختبار واحصل على شهادتك.", testGehaald2: "نجحت في الدرجة 2! يمكنك إعادة الاختبار دائمًا.", trede1: "الدرجة 1 · أهلًا", trede2: "الدرجة 2 · الحروف والكلمات", verder: "تابع التدريب", testKop: "اختبار الدرجة", testUitleg: "انتهيت من 1 إلى 4؟ قم بالاختبار واحصل على شهادتك.", testGehaald: "نجحت في الدرجة 1! يمكنك إعادة الاختبار دائمًا.", herhaalKop: "مراجعة اليوم", herhaalUitleg: "كلمات وجمل من قبل. هكذا تتذكّرها.", sub: "مجاني. بدون حساب. جمل قصيرة. كل عملية حسابية مع شرح.", juf: "للمعلّم: كل شيء في هذه الصفحة مجاني، أيضًا على السبّورة الذكية، ومضمون حتى 31 ديسمبر 2028. اكتب الرمز WELKOMNIEUWKOMER على السبّورة؛ وسيصل كل طفل إلى هنا.", tegels: [["في الصف","ماذا تقول للمعلّمة؟ كيف تكوّن أصدقاء؟"],["كلمات","أول كلماتك الهولندية. اضغط على الزر الصغير بجانب الكلمة لتراها بلغتك."],["كلمات الحساب","أكثر، أقل، معًا، ذهب، التوزيع: الكلمات في كل درس حساب."],["الحساب حتى 20","العدّ والجمع والطرح. يمكنك استخدام أصابعك."],["الحروف والأصوات","أي صوت تسمع؟ t-a-s تصبح tas."],["كلمات أكثر","الملابس، الطعام، البيت، الخارج وجسمك."],["إملاء","تشارلي يقول كلمة. أنت تكتبها. كل حرف هو صوت."],["في الصف 2","العمل بنفسك، انتهيت فماذا الآن، المعلمة مشغولة، والمشاعر الجميلة."],["كلمات 3","الألوان، الأشكال، كبير وصغير، أمس واليوم، التفكير والحكي."],["الحساب حتى 100","العشرات والآحاد. قفزات من 10."],["القراءة","ابدأ بخمس جمل قصيرة. الزر يقرأها بصوت عالٍ."],["جداول الضرب","قليلًا في كل مرة."]], taalvraag: "ما هي اللغة التي تتكلمها في البيت؟", taaluitleg: "كل شيء يبقى بالهولندية. اضغط على الجملة أو على الزر الصغير بجانب الجواب لترى لغتك.", intro: "هذا للأطفال الذين ما زالوا يتعلمون الهولندية. ابدأ من 1. تعلّم قليلًا كل يوم.", voorlees: "لا تستطيع القراءة (جيدًا) بعد؟ شغّل الزر 'Ik kan nog niet (goed) lezen' (لا أستطيع القراءة جيدًا بعد) في الأعلى. عندها يقرأ التطبيق الأسئلة بصوت عالٍ. اضغط على مكبّر الصوت لتسمعها مرة أخرى.", schakelaar: "لا تستطيع القراءة (جيدًا) بعد؟ اضغط على هذا الزر: عندها يقرأ التطبيق الأسئلة والأجوبة بصوت عالٍ." },
  uk: { tipKop: "Порада, побажання чи щось не так? Напиши тут (можна будь-якою мовою).", overKop: "Готовий до звичайного Leerkwartier?", overUitleg: "Математика й мова для твого класу. Там усе нідерландською, без кнопки перекладу. Ти завжди можеш повернутися на цю сторінку.", overGroep: "У якому ти класі (groep)?", instapKop: "Ти тут новенький? Пройди вступний тест", instapUitleg: "Кілька запитань. Тоді ти знаєш, з чого почати.", hierBegin: "Починай тут", testUitleg2: "Закінчив 5–7? Пройди тест і отримай диплом.", testGehaald2: "Сходинку 2 пройдено! Тест можна пройти ще раз будь-коли.", trede1: "Сходинка 1 · Ласкаво просимо", trede2: "Сходинка 2 · Літери й слова", verder: "Тренуйся далі", testKop: "Тест сходинки", testUitleg: "Закінчив 1–4? Пройди тест і отримай диплом.", testGehaald: "Сходинку 1 пройдено! Тест можна пройти ще раз будь-коли.", herhaalKop: "Повторити сьогодні", herhaalUitleg: "Слова і речення, які ти вже вчив. Так ти їх запам'ятаєш.", sub: "Безкоштовно. Без акаунта. Короткі речення. Кожен приклад із поясненням.", juf: "Для вчителя: усе на цій сторінці безкоштовне, також на інтерактивній дошці, гарантовано до 31 грудня 2028 року. Напишіть на дошці код WELKOMNIEUWKOMER — і кожна дитина потрапить сюди.", tegels: [["У класі","Що ти кажеш учительці? Як знайти друзів?"],["Слова","Твої перші нідерландські слова. Натисни на кнопочку біля слова, щоб побачити його своєю мовою."],["Слова для математики","Більше, менше, разом, забрали, поділити: слова з кожного уроку математики."],["Рахуємо до 20","Лічба, додавання і віднімання. Можна на пальцях."],["Літери й звуки","Який звук ти чуєш? t-a-s стає tas."],["Більше слів","Одяг, їжа, дім, надворі й твоє тіло."],["Диктант","Чарлі каже слово. Ти його пишеш. Кожна літера — це звук."],["У класі 2","Працюєш сам, закінчив — що тепер, учителька зайнята, і приємні почуття."],["Слова 3","Кольори, фігури, великий і маленький, учора й сьогодні, думати й розповідати."],["Рахуємо до 100","Десятки й одиниці. Стрибки по 10."],["Читання","Почни з п'яти коротких речень. Кнопка читає вголос."],["Таблиця множення","Потроху."]], taalvraag: "Якою мовою ти розмовляєш удома?", taaluitleg: "Усе залишається нідерландською. Натисни на речення або на кнопочку біля відповіді, щоб побачити свою мову.", intro: "Це для дітей, які ще вчать нідерландську. Почни з 1. Займайся потроху щодня.", voorlees: "Ще не вмієш (добре) читати? Увімкни вгорі кнопку 'Ik kan nog niet (goed) lezen' (Я ще не вмію добре читати). Тоді застосунок читатиме запитання вголос. Натисни на динамік, щоб почути ще раз.", schakelaar: "Ще не вмієш (добре) читати? Натисни цю кнопку: тоді застосунок читатиме запитання й відповіді вголос." },
  tr: { tipKop: "Bir ipucu, dilek ya da yanlış bir şey mi var? Buraya yaz (her dil olur).", overKop: "Normal Leerkwartier için hazır mısın?", overUitleg: "Sınıfın için matematik ve dil. Orada her şey Hollandaca, çeviri düğmesi yok. Bu sayfaya her zaman geri dönebilirsin.", overGroep: "Hangi sınıftasın (groep)?", instapKop: "Yeni misin? Başlangıç testini yap", instapUitleg: "Birkaç soru. Sonra nereden başlayacağını bilirsin.", hierBegin: "Buradan başla", testUitleg2: "5-7 bitti mi? Testi yap ve diplomanı al.", testGehaald2: "2. basamak geçildi! Testi istediğin zaman tekrar yapabilirsin.", trede1: "1. basamak · Hoş geldin", trede2: "2. basamak · Harfler ve kelimeler", verder: "Çalışmaya devam", testKop: "Basamak testi", testUitleg: "1-4 bitti mi? Testi yap ve diplomanı al.", testGehaald: "1. basamak geçildi! Testi istediğin zaman tekrar yapabilirsin.", herhaalKop: "Bugün tekrar et", herhaalUitleg: "Daha önceki kelimeler ve cümleler. Böylece onları hatırlarsın.", sub: "Ücretsiz. Hesap yok. Kısa cümleler. Her işlem açıklamalı.", juf: "Öğretmen için: bu sayfadaki her şey ücretsizdir, akıllı tahtada da; 31 Aralık 2028'e kadar garantili. WELKOMNIEUWKOMER kodunu tahtaya yazın; her çocuk buraya gelir.", tegels: [["Sınıfta","Öğretmene ne dersin? Nasıl arkadaş edinirsin?"],["Kelimeler","İlk Hollandaca kelimelerin. Kelimenin yanındaki küçük düğmeye dokun, kendi dilinde gör."],["Matematik kelimeleri","Daha çok, daha az, birlikte, gitti, paylaştırmak: her matematik dersindeki kelimeler."],["20'ye kadar sayılar","Saymak, toplamak ve çıkarmak. Parmaklarını kullanabilirsin."],["Harfler ve sesler","Hangi sesi duyuyorsun? t-a-s, tas olur."],["Daha fazla kelime","Kıyafet, yiyecek, ev, dışarısı ve vücudun."],["Dikte","Charley bir kelime söyler. Sen yazarsın. Her harf bir sestir."],["Sınıfta 2","Kendi başına çalışmak, bitirince ne yapılır, öğretmen meşgul ve güzel duygular."],["Kelimeler 3","Renkler, şekiller, büyük ve küçük, dün ve bugün, düşünmek ve anlatmak."],["100'e kadar sayılar","Onluklar ve birlikler. 10'ar atlamalar."],["Okuma","Beş kısa cümleyle başla. Düğme sesli okur."],["Çarpım tablosu","Her seferinde biraz."]], taalvraag: "Evde hangi dili konuşuyorsun?", taaluitleg: "Her şey Hollandaca kalır. Bir cümleye ya da cevabın yanındaki küçük düğmeye dokun, kendi dilini görürsün.", intro: "Bu, hâlâ Hollandaca öğrenen çocuklar için. 1'den başla. Her gün biraz yap.", voorlees: "Henüz (iyi) okuyamıyor musun? Yukarıdaki 'Ik kan nog niet (goed) lezen' (Henüz iyi okuyamıyorum) düğmesini aç. O zaman uygulama soruları sesli okur. Tekrar duymak için bir hoparlöre dokun.", schakelaar: "Henüz (iyi) okuyamıyor musun? Bu düğmeye dokun: o zaman uygulama soruları ve cevapları sesli okur." },
  ro: { tipKop: "Un sfat, o dorință sau ceva nu e în regulă? Scrie aici (în orice limbă).", overKop: "Ești gata pentru Leerkwartier obișnuit?", overUitleg: "Matematică și limbă pentru clasa ta. Acolo totul este în olandeză, fără butonul de traducere. Poți reveni oricând la această pagină.", overGroep: "În ce clasă (groep) ești?", instapKop: "Nou aici? Fă testul de început", instapUitleg: "Câteva întrebări. Apoi știi de unde să începi.", hierBegin: "Începe aici", testUitleg2: "Ai terminat 5 până la 7? Fă testul și ia-ți diploma.", testGehaald2: "Treapta 2 reușită! Poți reface testul oricând.", trede1: "Treapta 1 · Bun venit", trede2: "Treapta 2 · Litere și cuvinte", verder: "Exersează mai departe", testKop: "Testul treptei", testUitleg: "Ai terminat 1 până la 4? Fă testul și ia-ți diploma.", testGehaald: "Treapta 1 reușită! Poți reface testul oricând.", herhaalKop: "Repetă azi", herhaalUitleg: "Cuvinte și propoziții de mai înainte. Așa le ții minte.", sub: "Gratuit. Fără cont. Propoziții scurte. Fiecare exercițiu cu explicație.", juf: "Pentru învățător: tot ce este pe această pagină este gratuit, și pe tabla interactivă, garantat până la 31 decembrie 2028. Scrieți codul WELKOMNIEUWKOMER pe tablă; fiecare copil ajunge atunci aici.", tegels: [["În clasă","Ce îi spui învățătoarei? Cum îți faci prieteni?"],["Cuvinte","Primele tale cuvinte olandeze. Apasă pe butonul mic de lângă un cuvânt ca să-l vezi în limba ta."],["Cuvinte de matematică","Mai mult, mai puțin, împreună, luat, împărțit: cuvintele din fiecare lecție de matematică."],["Numărăm până la 20","Numărat, adunat și scăzut. Poți folosi degetele."],["Litere și sunete","Ce sunet auzi? t-a-s devine tas."],["Mai multe cuvinte","Haine, mâncare, acasă, afară și corpul tău."],["Dictare","Charley spune un cuvânt. Tu îl scrii. Fiecare literă este un sunet."],["În clasă 2","Lucrezi singur, ai terminat și ce urmează, doamna e ocupată, și sentimente plăcute."],["Cuvinte 3","Culori, forme, mare și mic, ieri și azi, a gândi și a povesti."],["Numărăm până la 100","Zeci și unități. Salturi de 10."],["Citit","Începe cu cinci propoziții scurte. Butonul le citește cu voce tare."],["Tabla înmulțirii","Câte puțin, pe rând."]], taalvraag: "Ce limbă vorbești acasă?", taaluitleg: "Totul rămâne în olandeză. Apasă pe o propoziție sau pe butonul mic de lângă un răspuns ca să vezi limba ta.", intro: "Asta e pentru copiii care încă învață olandeza. Începe de la 1. Fă câte puțin în fiecare zi.", voorlees: "Nu știi încă să citești (bine)? Pornește sus butonul 'Ik kan nog niet (goed) lezen' (Încă nu pot citi bine). Atunci aplicația citește întrebările cu voce tare. Apasă pe un difuzor ca să auzi din nou.", schakelaar: "Nu știi încă să citești (bine)? Apasă pe acest buton: atunci aplicația citește întrebările și răspunsurile cu voce tare." },
  bg: { tipKop: "Съвет, желание или нещо не е наред? Напиши го тук (на всеки език).", overKop: "Готов ли си за обикновения Leerkwartier?", overUitleg: "Смятане и език за твоя клас. Там всичко е на нидерландски, без бутон за превод. Винаги можеш да се върнеш на тази страница.", overGroep: "В кой клас (groep) си?", instapKop: "Нов тук? Направи началния тест", instapUitleg: "Няколко въпроса. После знаеш откъде да започнеш.", hierBegin: "Започни оттук", testUitleg2: "Готов с 5 до 7? Направи теста и вземи дипломата си.", testGehaald2: "Стъпало 2 е взето! Винаги можеш да направиш теста отново.", trede1: "Стъпало 1 · Добре дошъл", trede2: "Стъпало 2 · Букви и думи", verder: "Продължавай да се упражняваш", testKop: "Тест за стъпалото", testUitleg: "Готов с 1 до 4? Направи теста и вземи дипломата си.", testGehaald: "Стъпало 1 е взето! Винаги можеш да направиш теста отново.", herhaalKop: "Повтори днес", herhaalUitleg: "Думи и изречения отпреди. Така ги запомняш.", sub: "Безплатно. Без акаунт. Кратки изречения. Всяка задача с обяснение.", juf: "За учителя: всичко на тази страница е безплатно, също и на интерактивната дъска, гарантирано до 31 декември 2028 г. Напишете кода WELKOMNIEUWKOMER на дъската; всяко дете ще попадне тук.", tegels: [["В класа","Какво казваш на учителката? Как си намираш приятели?"],["Думи","Първите ти нидерландски думи. Докосни малкото копче до думата, за да я видиш на твоя език."],["Думи за смятане","Повече, по-малко, заедно, махнато, разделяне: думите във всеки урок по смятане."],["Смятане до 20","Броене, събиране и изваждане. Може и на пръсти."],["Букви и звукове","Кой звук чуваш? t-a-s става tas."],["Още думи","Дрехи, храна, вкъщи, навън и твоето тяло."],["Диктовка","Чарли казва дума. Ти я пишеш. Всяка буква е звук."],["В класа 2","Работиш сам, готов си и какво сега, учителката е заета, и хубави чувства."],["Думи 3","Цветове, форми, голямо и малко, вчера и днес, мислене и разказване."],["Смятане до 100","Десетици и единици. Скокове по 10."],["Четене","Започни с пет кратки изречения. Бутонът ги чете на глас."],["Таблица за умножение","По малко всеки път."]], taalvraag: "Какъв език говориш вкъщи?", taaluitleg: "Всичко остава на нидерландски. Докосни изречение или малкото копче до отговора, за да видиш твоя език.", intro: "Това е за деца, които още учат нидерландски. Започни от 1. Прави по малко всеки ден.", voorlees: "Още не можеш да четеш (добре)? Включи горе бутона 'Ik kan nog niet (goed) lezen' (Още не мога да чета добре). Тогава приложението чете въпросите на глас. Докосни високоговорител, за да го чуеш пак.", schakelaar: "Още не можеш да четеш (добре)? Докосни този бутон: тогава приложението чете въпросите и отговорите на глас." },
};

export function leesSteuntaal() { try { return localStorage.getItem(STEUNTAAL_KEY) || "nl"; } catch { return "nl"; } }

export default function NieuwkomersPage({ onLeerpad, onPagina, onHome, onOverstap }) {
  const [taal, setTaal] = useState(leesSteuntaal);
  const [herhaal, setHerhaal] = useState(false);
  // Kijken en luisteren heeft een eigen adres (/nieuwkomers?kijken=kies): de terugknop van de telefoon
  // brengt je dan terug naar /nieuwkomers i.p.v. van de pagina af (kliktocht 30 sep 2026), en een juf
  // kan het scherm direct delen.
  const location = useLocation();
  const navigate = useNavigate();
  const kijkParam = new URLSearchParams(location.search).get("kijken");
  const luister = ["kaarten", "kies", "dictee", "zinnen"].includes(kijkParam) ? kijkParam : null;
  const setLuister = (soort) => {
    if (soort) navigate(`/nieuwkomers?kijken=${soort}`);
    else if ((window.history.state?.idx ?? 0) > 0) navigate(-1);
    else navigate("/nieuwkomers", { replace: true });
  };
  const [tredeTest, setTredeTest] = useState(false);
  const [trede, setTrede] = useState(leesTrede);
  const [instap, setInstap] = useState(leesInstap);
  const [gekopieerd, setGekopieerd] = useState(false);
  // 💬 Tip/wens (Mark 28 sep 2026): naar het wensenbord (status pending → alleen Mark ziet het).
  const [tipOpen, setTipOpen] = useState(false);
  const [tipRol, setTipRol] = useState(null);
  const [tipTekst, setTipTekst] = useState("");
  const [tipStand, setTipStand] = useState(null); // null | "bezig" | "klaar" | "fout"
  const stuurTip = async () => {
    const tekst = tipTekst.trim();
    if (tekst.length < 3 || tipStand === "bezig") return;
    setTipStand("bezig");
    const { ok } = await submitWish({ message: `[nieuwkomers · ${tipRol || "onbekend"} · taal ${taal}] ${tekst}`, displayName: tipRol ? `Nieuwkomers (${tipRol})` : "Nieuwkomers" });
    setTipStand(ok ? "klaar" : "fout");
    try { track("nk_tip", { rol: tipRol || "?", taal, ok }); } catch { /* */ }
  };
  const [teHerhalen, setTeHerhalen] = useState(aantalTeHerhalen);
  const t = T.nl;
  const s = { ...T.nl, ...(T[taal] || {}) };
  const rtl = !!STEUNTALEN.find((x) => x.id === taal)?.rtl;
  // 🔊 Stond "alles voorlezen" al aan bij openen → intro vanzelf voorlezen. Alleen bij openen: wie de
  // schakelaar nú aanzet hoort diens eigen uitleg (die zou anders meteen worden afgebroken).
  const [introVanzelf] = useState(voorleesAltijd);
  useVanzelfZeggen(`${t.kop}. ${t.intro} ${t.luisterTip}`, introVanzelf);
  // Nummer/teken van een kaart met de luisterknop eronder: vaste plek links, de tekst houdt zijn breedte.
  const metLuister = (blok, tekst) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: "none" }}>
      {blok}
      <LuisterKnop tekst={tekst} maat={44} licht />
    </div>
  );
  // via = de ingetikte code (CodeBalk zet ?via=…), anders "link" (mail, digibord, doorverteld) — Mark 25 sep 2026.
  useEffect(() => {
    let via = "link";
    try { via = new URLSearchParams(window.location.search).get("via") || "link"; } catch { /* */ }
    try { track("nieuwkomers_open", { taal, via }); } catch { /* */ }
  }, []); // eslint-disable-line

  const kiesTaal = (id) => {
    setTaal(id);
    try { localStorage.setItem(STEUNTAAL_KEY, id); } catch { /* */ }
    // Mark 30 sep 2026: de vertaalknop in het gewone start-kwartier is alleen voor wie als nieuwkomer binnenkwam.
    try { if (id !== "nl") localStorage.setItem("lk_nieuwkomer", "1"); } catch { /* */ }
    try { track("nieuwkomers_taal", { taal: id }); } catch { /* */ }
  };
  const open = (tegel) => {
    try { track("nieuwkomers_tegel", { id: tegel.id, taal }); } catch { /* */ }
    if (tegel.nk) { try { sessionStorage.setItem("lk_dictee_nk", "1"); } catch { /* */ } }
    if (tegel.soort === "pad") onLeerpad && onLeerpad(tegel.id);
    else onPagina && onPagina(tegel.id);
  };
  // Trede-testje-kaart onder de tegels van trede n (doorgroeiplan stap 2 en 4).
  const testKaart = (n) => {
    const ok = trede.includes(n);
    const uitleg = (x) => (ok ? x[`testGehaald${n === 1 ? "" : n}`] : x[`testUitleg${n === 1 ? "" : n}`]);
    return (
      <button type="button" onClick={() => { setTredeTest(n); try { track("nk_tredetest_open", { trede: n, gehaald: ok, taal }); } catch { /* */ } }} style={{
        display: "flex", alignItems: "center", gap: 16, textAlign: "left", width: "100%",
        background: ok ? "#d7f5df" : "#fff4cc", color: "#0f2a44", border: "3px dashed " + (ok ? "#1b7f3b" : "#e0a800"), borderRadius: 18, padding: "14px 18px", cursor: "pointer",
      }}>
        {metLuister(<div style={{ width: 44, height: 44, borderRadius: 12, background: ok ? "#1b7f3b" : "#e0a800", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 22, flex: "none" }}>{ok ? "✓" : "?"}</div>, `${t.testKop}. ${uitleg(t)}`)}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "clamp(19px, 5vw, 22px)", fontWeight: 900 }}>{t.testKop}</div>
          <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{uitleg(t)}</div>
          {taal !== "nl" && uitleg(s) && (
            <div dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ fontSize: 14, fontWeight: 700, color: "#6b4a00", background: "rgba(255,255,255,.7)", borderRadius: 8, padding: "4px 8px", marginTop: 6 }}>
              {s.testKop} — {uitleg(s)}
            </div>
          )}
        </div>
        <div style={{ fontSize: 26, fontWeight: 900, opacity: .5 }}>›</div>
      </button>
    );
  };
  // 🚪 Overstap naar de gewone app (doorgroeiplan stap 6, 27 sep 2026): het kind kiest zijn
  // groep en start het gewone start-kwartier. Groen omrand als trede 2 gehaald is of het
  // instap-testje "Verder oefenen" zei. Eerlijk: daar is (nog) geen vertaalknop.
  const overstapKaart = () => {
    const klaarVoor = trede.includes(2) || instap === 3;
    return (
      <div style={{ background: "rgba(255,255,255,.96)", color: "#0f2a44", borderRadius: 18, padding: "16px 18px", border: klaarVoor ? "3px solid #1b7f3b" : "3px solid transparent", boxShadow: "0 8px 22px rgba(0,0,0,.25)" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{ flex: 1, minWidth: 0, fontSize: "clamp(19px, 5vw, 22px)", fontWeight: 900 }}>🚀 {t.overKop}</div>
          <LuisterKnop tekst={`${t.overKop} ${t.overUitleg} ${t.overGroep}`} maat={44} licht />
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4, lineHeight: 1.45 }}>{t.overUitleg}</div>
        {taal !== "nl" && (
          <div dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ fontSize: 14, fontWeight: 700, color: "#6b4a00", background: "#fff4cc", borderRadius: 8, padding: "4px 8px", marginTop: 6 }}>
            {s.overKop} — {s.overUitleg}
          </div>
        )}
        <div style={{ fontWeight: 800, fontSize: 15, marginTop: 10 }}>{t.overGroep}{taal !== "nl" && <span dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ display: "block", fontWeight: 600, fontSize: 13.5, opacity: .8 }}>{s.overGroep}</span>}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
          {[3, 4, 5, 6, 7, 8].map((g) => (
            <button key={g} type="button" onClick={() => { try { track("nk_overstap", { groep: g, tredes: trede.join(","), instap, taal }); } catch { /* */ } onOverstap(g); }} style={{
              background: "#0f2a44", color: "#fff", border: "none", borderRadius: 999, padding: "9px 16px", fontWeight: 800, fontSize: 15, cursor: "pointer",
            }}>Groep {g}</button>
          ))}
        </div>
      </div>
    );
  };
  const Steun = ({ veld, klein }) => (taal === "nl" ? null : <span dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ display: "block", fontWeight: 600, opacity: .85, fontSize: klein ? 13.5 : 16, marginTop: 4 }}>{s[veld]}</span>);

  // Kijken en luisteren = een eigen, rustig scherm (kliktest 29 sep 2026: intro en tegels eromheen leidden af).
  if (luister) {
    return (
      <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0f2a44,#173a5e 60%,#1e4a73)", color: "#fff", fontFamily: "system-ui", padding: "18px 16px 40px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <Suspense fallback={null}>
            <NieuwkomersLuisterKies taal={taal} beginSoort={luister} onKlaar={() => { setLuister(null); try { window.scrollTo(0, 0); } catch { /* */ } }} />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0f2a44,#173a5e 60%,#1e4a73)", color: "#fff", fontFamily: "system-ui", padding: "18px 16px 40px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingTop: 14 }}>
          <button type="button" onClick={onHome} style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "none", borderRadius: 999, padding: "8px 14px", fontWeight: 800, cursor: "pointer" }}>{t.terug}</button>
          {/* Echte Leerkwartier-logo (Mark 24 sep: "op de nieuwe pagina's mis ik het logo"). */}
          <img src="/logo.jpg" alt="Leerkwartier" width={64} height={64} style={{ width: 64, height: 64, borderRadius: 15, background: "#fff", objectFit: "contain", boxShadow: "0 4px 14px rgba(0,0,0,.25)" }} />
        </div>
        <h1 style={{ fontSize: "clamp(28px, 7vw, 40px)", margin: "14px 0 4px", fontWeight: 900 }}>{t.kop}</h1>
        <div style={{ fontSize: 15, opacity: .85, fontWeight: 600 }}>{t.sub}<Steun veld="sub" klein /></div>
        {/* 🔊 "Ik kan nog niet (goed) lezen" (29 sep 2026, mail nieuwkomers-directeur): bovenaan, vóór alles wat je moet lezen. */}
        <div style={{ marginTop: 14 }}>
          <VoorleesSchakelaar />
          <Steun veld="schakelaar" klein />
        </div>

        <div style={{ margin: "16px 0 6px", fontWeight: 800, fontSize: 16 }}>{t.taalvraag}<Steun veld="taalvraag" /></div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {STEUNTALEN.map((l) => (
            <button key={l.id} type="button" onClick={() => kiesTaal(l.id)} aria-pressed={taal === l.id} style={{
              background: taal === l.id ? "#ffd166" : "rgba(255,255,255,.14)", color: taal === l.id ? "#3a2600" : "#fff",
              border: "2px solid " + (taal === l.id ? "#ffd166" : "rgba(255,255,255,.3)"), borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontSize: 15, cursor: "pointer",
            }}>{l.eigen}</button>
          ))}
        </div>
        <div style={{ fontSize: 13.5, opacity: .75, marginTop: 6 }}>{t.taaluitleg}<Steun veld="taaluitleg" klein /></div>

        <div style={{ margin: "16px 0 18px", fontSize: "clamp(18px, 4.5vw, 22px)", lineHeight: 1.45, fontWeight: 700 }}>
          <div>{t.intro}</div>
          <Steun veld="intro" />
          <div style={{ marginTop: 8, fontSize: 14, fontWeight: 600 }}><VoorleesBlok tekst={`${t.kop}. ${t.sub} ${t.intro}`} /></div>
        </div>

        {/* Mijn punten (2 okt 2026): totaal, records, diploma's + "Laat zien aan de juf" */}
        {!luister && !tredeTest && !herhaal && <NieuwkomersMijnPunten taal={taal} />}

        {!luister && !tredeTest && !herhaal && (() => {
          const lk = LUISTER_KOP[taal] || LUISTER_KOP.nl;
          const open = (soort) => { setLuister(soort); try { window.scrollTo(0, 0); } catch { /* */ } try { track("nieuwkomers_luister_open", { soort, taal }); } catch { /* */ } };
          return (
            <div style={{ background: "#ffffff", color: "#0f2a44", borderRadius: 18, padding: 14, marginBottom: 16, boxShadow: "0 4px 16px rgba(0,0,0,.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 900, fontSize: 19 }} dir="auto">{lk[0]}</div>
                  <div style={{ fontSize: 14, opacity: .75 }} dir="auto">{lk[1]}</div>
                </div>
                <LuisterKnop tekst="Kijken en luisteren. Ook als je nog niet kunt lezen." licht />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginTop: 10 }}>
                {[["kaarten", "/picto/huis.svg", lk[2], "Woordkaarten"], ["kies", "/picto/luisteren.svg", lk[3], "Luister en kies"], ["dictee", "/picto/schrijven.svg", lk[4], "Plaatjesdictee"], ["zinnen", "/picto/praten.svg", lk[5], "Zinnen"]].map(([id, img, label, nlNaam]) => (
                  <button key={id} type="button" onClick={() => open(id)} style={{ position: "relative", background: "#eef4ff", border: "2px solid #9db8e8", borderRadius: 14, padding: "10px 6px", cursor: "pointer", color: "#0f2a44", fontFamily: "inherit" }}>
                    <img src={img} alt="" style={{ width: 64, height: 64, objectFit: "contain", display: "block", margin: "0 auto", background: "#fff", borderRadius: 10 }} />
                    <div style={{ fontWeight: 800, fontSize: 13.5, marginTop: 6 }} dir="auto">{label}</div>
                    <LuisterKnop tekst={nlNaam} maat={30} licht style={{ position: "absolute", top: 4, right: 4 }} />
                  </button>
                ))}
              </div>
            </div>
          );
        })()}

        {tredeTest ? (
          <Suspense fallback={null}>
            <NieuwkomersTredeTest trede={tredeTest === "instap" ? 1 : tredeTest} instap={tredeTest === "instap"} onKlaar={() => { const wasInstap = tredeTest === "instap"; setTredeTest(false); setTrede(leesTrede()); setInstap(leesInstap()); setTeHerhalen(aantalTeHerhalen()); if (wasInstap) setTimeout(() => { try { document.getElementById(`nk-trede-${leesInstap()}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); } catch { /* */ } }, 150); }} />
          </Suspense>
        ) : herhaal ? (
          <Suspense fallback={null}>
            <NieuwkomersHerhaal onKlaar={() => { setHerhaal(false); setTeHerhalen(aantalTeHerhalen()); }} />
          </Suspense>
        ) : teHerhalen > 0 && (
          // 🔁 Herhalen over dagen: vragen van eerder komen na 1, 2, 4 en 8 dagen terug.
          <button type="button" onClick={() => { setHerhaal(true); try { track("nieuwkomers_herhaal_open", { aantal: teHerhalen, taal }); } catch { /* */ } }} style={{
            display: "flex", alignItems: "center", gap: 16, textAlign: "left", width: "100%", marginBottom: 12,
            background: "#ffd166", color: "#3a2600", border: "none", borderRadius: 18, padding: "16px 18px", cursor: "pointer", boxShadow: "0 8px 22px rgba(0,0,0,.25)",
          }}>
            {metLuister(<div style={{ width: 44, height: 44, borderRadius: 12, background: "#3a2600", color: "#ffd166", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 20, flex: "none" }}>{teHerhalen}</div>, `${t.herhaalKop}. ${t.herhaalUitleg}`)}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "clamp(20px, 5vw, 24px)", fontWeight: 900 }}>{t.herhaalKop}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{t.herhaalUitleg}</div>
              {taal !== "nl" && s.herhaalKop && (
                <div dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ fontSize: 14, fontWeight: 700, background: "rgba(255,255,255,.6)", borderRadius: 8, padding: "4px 8px", marginTop: 6 }}>
                  {s.herhaalKop} — {s.herhaalUitleg}
                </div>
              )}
            </div>
            <div style={{ fontSize: 26, fontWeight: 900, opacity: .6 }}>›</div>
          </button>
        )}

        {!herhaal && !tredeTest && <div style={{ display: "grid", gap: 12 }}>
          {!instap && trede.length === 0 && (
            <button type="button" onClick={() => { setTredeTest("instap"); try { track("nk_instap_open", { taal }); } catch { /* */ } }} style={{
              display: "flex", alignItems: "center", gap: 16, textAlign: "left", width: "100%",
              background: "#e8f1ff", color: "#0f2a44", border: "3px solid #7fb0ff", borderRadius: 18, padding: "14px 18px", cursor: "pointer",
            }}>
              {metLuister(<div style={{ width: 44, height: 44, borderRadius: 12, background: "#2f6fd6", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 22, flex: "none" }}>?</div>, `${t.instapKop}. ${t.instapUitleg}`)}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "clamp(19px, 5vw, 22px)", fontWeight: 900 }}>{t.instapKop}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{t.instapUitleg}</div>
                {taal !== "nl" && (
                  <div dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ fontSize: 14, fontWeight: 700, color: "#0f2a44", background: "rgba(255,255,255,.7)", borderRadius: 8, padding: "4px 8px", marginTop: 6 }}>
                    {s.instapKop} — {s.instapUitleg}
                  </div>
                )}
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, opacity: .5 }}>›</div>
            </button>
          )}
          {t.tegels.map((tegel, i) => (
            <Fragment key={tegel.id}>
            {(i === 0 || i === TREDE_1_AANTAL || i === TREDE_1_AANTAL + TREDE_2_AANTAL) && (
              <div id={`nk-trede-${i === 0 ? 1 : i === TREDE_1_AANTAL ? 2 : 3}`} style={{ marginTop: i === 0 ? 0 : 8, fontWeight: 900, fontSize: 17, letterSpacing: .3, scrollMarginTop: 70 }}>
                {i === 0 ? `🪜 ${t.trede1}` : i === TREDE_1_AANTAL ? `🪜 ${t.trede2}` : t.verder}
                {instap === (i === 0 ? 1 : i === TREDE_1_AANTAL ? 2 : 3) && (
                  <span style={{ display: "inline-block", whiteSpace: "nowrap", marginInlineStart: 10, background: "#1b7f3b", color: "#fff", borderRadius: 999, padding: "3px 10px", fontSize: 13, fontWeight: 900, verticalAlign: "middle" }}>
                    ← {t.hierBegin}{taal !== "nl" && s.hierBegin ? ` · ${s.hierBegin}` : ""}
                  </span>
                )}
                {taal !== "nl" && <span dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ display: "block", fontWeight: 600, fontSize: 14, opacity: .85 }}>{i === 0 ? s.trede1 : i === TREDE_1_AANTAL ? s.trede2 : s.verder}</span>}
              </div>
            )}
            <button type="button" onClick={() => open(tegel)} style={{
              display: "flex", alignItems: "center", gap: 16, textAlign: "left", width: "100%",
              background: "rgba(255,255,255,.96)", color: "#0f2a44", border: "none", borderRadius: 18, padding: "16px 18px",
              cursor: "pointer", boxShadow: "0 8px 22px rgba(0,0,0,.25)",
            }}>
              {metLuister(<div style={{ width: 44, height: 44, borderRadius: 12, background: "#0f2a44", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 20, flex: "none" }}>{i + 1}</div>, `${i + 1}. ${tegel.titel}. ${tegel.uitleg}`)}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "clamp(20px, 5vw, 24px)", fontWeight: 900 }}>{tegel.titel}</div>
                <div style={{ fontSize: 15, fontWeight: 600, opacity: .8, marginTop: 2 }}>{tegel.uitleg}</div>
                {taal !== "nl" && s.tegels?.[i] && (
                  <div dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ fontSize: 14, fontWeight: 700, color: "#6b4a00", background: "#fff4cc", borderRadius: 8, padding: "4px 8px", marginTop: 6 }}>
                    {s.tegels[i][0]} — {s.tegels[i][1]}
                  </div>
                )}
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, opacity: .5 }}>›</div>
            </button>
            {i === TREDE_1_AANTAL - 1 && testKaart(1)}
            {i === TREDE_1_AANTAL + TREDE_2_AANTAL - 1 && testKaart(2)}
            {i === t.tegels.length - 1 && onOverstap && overstapKaart()}
            </Fragment>
          ))}
        </div>}

        <div style={{ marginTop: 20, background: "rgba(255,255,255,.1)", borderRadius: 14, padding: "12px 14px", fontSize: 15, fontWeight: 600, lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div style={{ flex: 1, minWidth: 0 }}>{t.voorlees}<Steun veld="voorlees" klein /></div>
          <LuisterKnop tekst={t.voorlees} maat={40} />
        </div>
        <div style={{ marginTop: 12, fontSize: 13.5, opacity: .75, lineHeight: 1.5 }}>{t.juf}<Steun veld="juf" klein /></div>
        {/* Briefje voor thuis (Mark "ga" 27 sep 2026): één A4 in 5 talen met QR → /nieuwkomers?utm_source=thuisbrief. */}
        <a href="/drukwerk/nieuwkomers-thuisbrief.html" target="_blank" rel="noopener" onClick={() => { try { track("nk_thuisbrief_open", { taal }); } catch { /* */ } }}
          style={{ display: "inline-block", marginTop: 10, background: "rgba(255,255,255,.14)", color: "#fff", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
          🖨️ {t.thuisbrief}
        </a>
        {/* Deelknoppen (Mark 27 sep 2026: "ik had hem hier verwacht"). Links met utm_source, zodat het
            dagrapport per kanaal telt. Op de telefoon eerst het deelmenu van het toestel. */}
        <div style={{ marginTop: 14, background: "rgba(255,255,255,.1)", borderRadius: 14, padding: "12px 14px" }}>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{t.deelKop}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/?text=" + encodeURIComponent(t.deelTekst + " https://leerkwartier.app/nieuwkomers?utm_source=whatsapp") },
              { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent("https://leerkwartier.app/nieuwkomers?utm_source=linkedin") },
            ].map((k) => (
              <a key={k.id} href={k.href} target="_blank" rel="noopener" onClick={() => { try { track("nk_deel", { kanaal: k.id, taal }); } catch { /* */ } }}
                style={{ background: "#fff", color: "#0f2a44", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontSize: 14, textDecoration: "none" }}>
                {k.label}
              </a>
            ))}
            <button type="button" onClick={async () => {
              const url = "https://leerkwartier.app/nieuwkomers?utm_source=deellink";
              try { track("nk_deel", { kanaal: "kopie", taal }); } catch { /* */ }
              try { if (navigator.share) { await navigator.share({ title: "Nieuwkomer-pakket", text: t.deelTekst, url }); return; } } catch { return; }
              try { await navigator.clipboard.writeText(url); setGekopieerd(true); setTimeout(() => setGekopieerd(false), 2500); } catch { /* */ }
            }} style={{ background: "#ffd166", color: "#3a2600", border: "none", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
              {gekopieerd ? "✓ " + t.deelGekopieerd : t.deelKopieer}
            </button>
          </div>
        </div>
        <div style={{ marginTop: 12, background: "rgba(255,255,255,.1)", borderRadius: 14, padding: "12px 14px" }}>
          {!tipOpen ? (
            <button type="button" onClick={() => { setTipOpen(true); try { track("nk_tip_open", { taal }); } catch { /* */ } }} style={{ width: "100%", textAlign: "left", background: "transparent", border: "none", color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer", padding: 0 }}>
              {t.tipKop}
              {taal !== "nl" && s.tipKop && <span dir={rtl ? "rtl" : "ltr"} lang={taal} style={{ display: "block", fontWeight: 600, fontSize: 13.5, opacity: .85, marginTop: 2 }}>{s.tipKop}</span>}
            </button>
          ) : tipStand === "klaar" ? (
            <div style={{ fontSize: 15, fontWeight: 700 }}>✅ {t.tipDank}</div>
          ) : (
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{t.tipKop}</div>
              <div style={{ fontSize: 13.5, fontWeight: 700, marginBottom: 6 }}>{t.tipIk}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                {t.tipRollen.map((r) => (
                  <button key={r} type="button" onClick={() => setTipRol(r)} aria-pressed={tipRol === r} style={{ background: tipRol === r ? "#ffd166" : "rgba(255,255,255,.14)", color: tipRol === r ? "#3a2600" : "#fff", border: "none", borderRadius: 999, padding: "6px 12px", fontWeight: 800, fontSize: 13.5, cursor: "pointer" }}>{r}</button>
                ))}
              </div>
              <textarea value={tipTekst} onChange={(e) => setTipTekst(e.target.value)} rows={3} maxLength={1200} placeholder={t.tipVoorbeeld}
                style={{ width: "100%", boxSizing: "border-box", borderRadius: 10, border: "none", padding: "10px 12px", fontSize: 15, fontFamily: "inherit", color: "#0f2a44", background: "#fff", colorScheme: "light" }} />
              <button type="button" onClick={stuurTip} disabled={tipTekst.trim().length < 3 || tipStand === "bezig"}
                style={{ marginTop: 8, background: "#ffd166", color: "#3a2600", border: "none", borderRadius: 999, padding: "9px 16px", fontWeight: 800, fontSize: 14.5, cursor: "pointer", opacity: tipTekst.trim().length < 3 ? .5 : 1 }}>
                {tipStand === "bezig" ? "…" : t.tipStuur}
              </button>
              {tipStand === "fout" && <div style={{ marginTop: 6, fontSize: 13 }}>Versturen lukte niet. Probeer het nog eens, of mail naar hallo@leerkwartier.app.</div>}
            </div>
          )}
        </div>
        {/* Naamsvermelding plaatjes (CC BY-SA 4.0 vraagt dat) — zie learnPaths/nieuwkomersPicto.js */}
        <div style={{ marginTop: 10, fontSize: 12, opacity: .6 }}>
          {PICTO_BRON} — <a href="https://mulberrysymbols.org" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>mulberrysymbols.org</a>
        </div>
      </div>
    </div>
  );
}
