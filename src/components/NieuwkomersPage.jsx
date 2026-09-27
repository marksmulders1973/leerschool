// 🌍 Nieuwkomer-pakket — losse pagina (Mark 24 sep 2026, na de mail van een
// nieuwkomersleerkracht: "de meeste kinderen zitten op het niveau van groep 3/4").
// Regels van Mark: los van al het andere (geen Familiepakket, geen partnercode),
// "minder maar beter passend", iedereen die de code WELKOMNIEUWKOMER intikt komt hier.
// Steuntaal (24 sep, Marks idee "vier talen laten kiezen"): het kind kiest zijn
// thuistaal (Engels, Arabisch, Oekraïens, Turks); de vragen blijven Nederlands, maar
// een tik op een vraag (of het knopje bij een antwoord) toont dezelfde zin in de eigen
// taal (SteunTik.jsx leest localStorage `lk_steuntaal`). Geen vertaling van de app: steun.
import { PICTO_BRON } from "../learnPaths/nieuwkomersPicto.js";
import { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { track } from "../utils.js";
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";
import { aantalTeHerhalen } from "../shared/herhaalNieuwkomers.js";

const NieuwkomersHerhaal = lazy(() => import("./NieuwkomersHerhaal.jsx"));
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
const TREDE_2_AANTAL = 2; // tegels 5-6 = trede 2 "Letters en woorden" (doorgroeiplan stap 4)

export const STEUNTAAL_KEY = "lk_steuntaal";
export const STEUNTALEN = [
  { id: "nl", naam: "Nederlands", eigen: "Nederlands" },
  { id: "en", naam: "Engels", eigen: "English" },
  { id: "ar", naam: "Arabisch", eigen: "العربية", rtl: true },
  { id: "uk", naam: "Oekraïens", eigen: "Українська" },
  { id: "tr", naam: "Turks", eigen: "Türkçe" },
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
      { id: "dictee", soort: "pagina", nk: true, titel: "Dictee", uitleg: "Charley zegt een woord. Jij schrijft het. Elke letter is een klank." },
      { id: "rekenen-tot-100-nieuwkomers", soort: "pad", titel: "Rekenen tot 100", uitleg: "Tientallen en eenheden. Sprongen van 10." },
      { id: "leesladder", soort: "pagina", titel: "Lezen", uitleg: "Begin met vijf korte zinnen. De knop leest voor." },
      { id: "tafels", soort: "pagina", titel: "Tafels", uitleg: "Steeds een stukje." },
    ],
    voorlees: "Overal staat een knop 'Lees voor'. Druk erop. Dan hoor je de tekst.",
    juf: "Voor de leerkracht: alles op deze pagina is gratis, ook op het digibord, gegarandeerd tot en met 31 december 2028. Zet de code WELKOMNIEUWKOMER op het bord; ieder kind komt dan hier.",
    terug: "← Terug",
    herhaalKop: "Vandaag herhalen",
    herhaalUitleg: "Woorden en zinnen van eerder. Zo onthoud je ze.",
    trede1: "Trede 1 · Welkom",
    trede2: "Trede 2 · Letters en woorden",
    verder: "Verder oefenen",
    testKop: "Trede-testje",
    testUitleg: "Klaar met 1 tot en met 4? Doe het testje en haal je diploma.",
    testGehaald: "Trede 1 gehaald! Je mag het testje altijd opnieuw doen.",
    testUitleg2: "Klaar met 5 en 6? Doe het testje en haal je diploma.",
    instapKop: "Nieuw hier? Doe het instap-testje",
    overKop: "Klaar voor de gewone Leerkwartier?",
    overUitleg: "Rekenen en taal voor jouw groep. Daar staat alles in het Nederlands, zonder vertaalknop. Je kunt altijd terug naar deze pagina.",
    overGroep: "In welke groep zit je?",
    instapUitleg: "Een paar vragen. Dan weet je waar je begint.",
    hierBegin: "Hier begin je",
    testGehaald2: "Trede 2 gehaald! Je mag het testje altijd opnieuw doen.",
  },
  en: { overKop: "Ready for the normal Leerkwartier?", overUitleg: "Maths and language for your class. There everything is in Dutch, without the translate button. You can always come back to this page.", overGroep: "Which class (groep) are you in?", instapKop: "New here? Do the starting test", instapUitleg: "A few questions. Then you know where to start.", hierBegin: "Start here", testUitleg2: "Done with 5 and 6? Do the test and get your certificate.", testGehaald2: "Step 2 passed! You can always do the test again.", trede1: "Step 1 · Welcome", trede2: "Step 2 · Letters and words", verder: "Keep practising", testKop: "Step test", testUitleg: "Done with 1 to 4? Do the test and get your certificate.", testGehaald: "Step 1 passed! You can always do the test again.", herhaalKop: "Practise again today", herhaalUitleg: "Words and sentences from before. This way you remember them.", sub: "Free. No account. Short sentences. Every sum with an explanation.", juf: "For the teacher: everything on this page is free, also on the classroom board, guaranteed until 31 December 2028. Write the code WELKOMNIEUWKOMER on the board; every child will come here.", tegels: [["In class","What do you say to the teacher? How do you make friends?"],["Words","Your first Dutch words. Tap the small button next to a word to see it in your language."],["Maths words","More, less, together, away, sharing: the words in every maths lesson."],["Counting to 20","Counting, adding and taking away. You may use your fingers."],["Letters and sounds","Which sound do you hear? t-a-s becomes tas."],["Dictation","Charley says a word. You write it. Every letter is a sound."],["Counting to 100","Tens and ones. Jumps of 10."],["Reading","Start with five short sentences. The button reads them aloud."],["Times tables","A little bit at a time."]], taalvraag: "Which language do you speak at home?", taaluitleg: "Everything stays in Dutch. Tap a sentence, or the small button next to an answer, to see your language.", intro: "This is for children who are still learning Dutch. Start at 1. Do a little every day.", voorlees: "Everywhere there is a button 'Lees voor' (read aloud). Press it to hear the text." },
  ar: { overKop: "هل أنت جاهز لـ Leerkwartier العادي؟", overUitleg: "الحساب واللغة لصفّك. هناك كل شيء بالهولندية، بدون زر الترجمة. يمكنك دائمًا العودة إلى هذه الصفحة.", overGroep: "في أي صف (groep) أنت؟", instapKop: "جديد هنا؟ قم باختبار البداية", instapUitleg: "بعض الأسئلة. ثم تعرف من أين تبدأ.", hierBegin: "ابدأ من هنا", testUitleg2: "انتهيت من 5 و 6؟ قم بالاختبار واحصل على شهادتك.", testGehaald2: "نجحت في الدرجة 2! يمكنك إعادة الاختبار دائمًا.", trede1: "الدرجة 1 · أهلًا", trede2: "الدرجة 2 · الحروف والكلمات", verder: "تابع التدريب", testKop: "اختبار الدرجة", testUitleg: "انتهيت من 1 إلى 4؟ قم بالاختبار واحصل على شهادتك.", testGehaald: "نجحت في الدرجة 1! يمكنك إعادة الاختبار دائمًا.", herhaalKop: "مراجعة اليوم", herhaalUitleg: "كلمات وجمل من قبل. هكذا تتذكّرها.", sub: "مجاني. بدون حساب. جمل قصيرة. كل عملية حسابية مع شرح.", juf: "للمعلّم: كل شيء في هذه الصفحة مجاني، أيضًا على السبّورة الذكية، ومضمون حتى 31 ديسمبر 2028. اكتب الرمز WELKOMNIEUWKOMER على السبّورة؛ وسيصل كل طفل إلى هنا.", tegels: [["في الصف","ماذا تقول للمعلّمة؟ كيف تكوّن أصدقاء؟"],["كلمات","أول كلماتك الهولندية. اضغط على الزر الصغير بجانب الكلمة لتراها بلغتك."],["كلمات الحساب","أكثر، أقل، معًا، ذهب، التوزيع: الكلمات في كل درس حساب."],["الحساب حتى 20","العدّ والجمع والطرح. يمكنك استخدام أصابعك."],["الحروف والأصوات","أي صوت تسمع؟ t-a-s تصبح tas."],["إملاء","تشارلي يقول كلمة. أنت تكتبها. كل حرف هو صوت."],["الحساب حتى 100","العشرات والآحاد. قفزات من 10."],["القراءة","ابدأ بخمس جمل قصيرة. الزر يقرأها بصوت عالٍ."],["جداول الضرب","قليلًا في كل مرة."]], taalvraag: "ما هي اللغة التي تتكلمها في البيت؟", taaluitleg: "كل شيء يبقى بالهولندية. اضغط على الجملة أو على الزر الصغير بجانب الجواب لترى لغتك.", intro: "هذا للأطفال الذين ما زالوا يتعلمون الهولندية. ابدأ من 1. تعلّم قليلًا كل يوم.", voorlees: "في كل مكان يوجد زر 'Lees voor' (اقرأ بصوت عالٍ). اضغط عليه لتسمع النص." },
  uk: { overKop: "Готовий до звичайного Leerkwartier?", overUitleg: "Математика й мова для твого класу. Там усе нідерландською, без кнопки перекладу. Ти завжди можеш повернутися на цю сторінку.", overGroep: "У якому ти класі (groep)?", instapKop: "Ти тут новенький? Пройди вступний тест", instapUitleg: "Кілька запитань. Тоді ти знаєш, з чого почати.", hierBegin: "Починай тут", testUitleg2: "Закінчив 5 і 6? Пройди тест і отримай диплом.", testGehaald2: "Сходинку 2 пройдено! Тест можна пройти ще раз будь-коли.", trede1: "Сходинка 1 · Ласкаво просимо", trede2: "Сходинка 2 · Літери й слова", verder: "Тренуйся далі", testKop: "Тест сходинки", testUitleg: "Закінчив 1–4? Пройди тест і отримай диплом.", testGehaald: "Сходинку 1 пройдено! Тест можна пройти ще раз будь-коли.", herhaalKop: "Повторити сьогодні", herhaalUitleg: "Слова і речення, які ти вже вчив. Так ти їх запам'ятаєш.", sub: "Безкоштовно. Без акаунта. Короткі речення. Кожен приклад із поясненням.", juf: "Для вчителя: усе на цій сторінці безкоштовне, також на інтерактивній дошці, гарантовано до 31 грудня 2028 року. Напишіть на дошці код WELKOMNIEUWKOMER — і кожна дитина потрапить сюди.", tegels: [["У класі","Що ти кажеш учительці? Як знайти друзів?"],["Слова","Твої перші нідерландські слова. Натисни на кнопочку біля слова, щоб побачити його своєю мовою."],["Слова для математики","Більше, менше, разом, забрали, поділити: слова з кожного уроку математики."],["Рахуємо до 20","Лічба, додавання і віднімання. Можна на пальцях."],["Літери й звуки","Який звук ти чуєш? t-a-s стає tas."],["Диктант","Чарлі каже слово. Ти його пишеш. Кожна літера — це звук."],["Рахуємо до 100","Десятки й одиниці. Стрибки по 10."],["Читання","Почни з п'яти коротких речень. Кнопка читає вголос."],["Таблиця множення","Потроху."]], taalvraag: "Якою мовою ти розмовляєш удома?", taaluitleg: "Усе залишається нідерландською. Натисни на речення або на кнопочку біля відповіді, щоб побачити свою мову.", intro: "Це для дітей, які ще вчать нідерландську. Почни з 1. Займайся потроху щодня.", voorlees: "Скрізь є кнопка 'Lees voor' (прочитати вголос). Натисни її, щоб почути текст." },
  tr: { overKop: "Normal Leerkwartier için hazır mısın?", overUitleg: "Sınıfın için matematik ve dil. Orada her şey Hollandaca, çeviri düğmesi yok. Bu sayfaya her zaman geri dönebilirsin.", overGroep: "Hangi sınıftasın (groep)?", instapKop: "Yeni misin? Başlangıç testini yap", instapUitleg: "Birkaç soru. Sonra nereden başlayacağını bilirsin.", hierBegin: "Buradan başla", testUitleg2: "5 ve 6 bitti mi? Testi yap ve diplomanı al.", testGehaald2: "2. basamak geçildi! Testi istediğin zaman tekrar yapabilirsin.", trede1: "1. basamak · Hoş geldin", trede2: "2. basamak · Harfler ve kelimeler", verder: "Çalışmaya devam", testKop: "Basamak testi", testUitleg: "1-4 bitti mi? Testi yap ve diplomanı al.", testGehaald: "1. basamak geçildi! Testi istediğin zaman tekrar yapabilirsin.", herhaalKop: "Bugün tekrar et", herhaalUitleg: "Daha önceki kelimeler ve cümleler. Böylece onları hatırlarsın.", sub: "Ücretsiz. Hesap yok. Kısa cümleler. Her işlem açıklamalı.", juf: "Öğretmen için: bu sayfadaki her şey ücretsizdir, akıllı tahtada da; 31 Aralık 2028'e kadar garantili. WELKOMNIEUWKOMER kodunu tahtaya yazın; her çocuk buraya gelir.", tegels: [["Sınıfta","Öğretmene ne dersin? Nasıl arkadaş edinirsin?"],["Kelimeler","İlk Hollandaca kelimelerin. Kelimenin yanındaki küçük düğmeye dokun, kendi dilinde gör."],["Matematik kelimeleri","Daha çok, daha az, birlikte, gitti, paylaştırmak: her matematik dersindeki kelimeler."],["20'ye kadar sayılar","Saymak, toplamak ve çıkarmak. Parmaklarını kullanabilirsin."],["Harfler ve sesler","Hangi sesi duyuyorsun? t-a-s, tas olur."],["Dikte","Charley bir kelime söyler. Sen yazarsın. Her harf bir sestir."],["100'e kadar sayılar","Onluklar ve birlikler. 10'ar atlamalar."],["Okuma","Beş kısa cümleyle başla. Düğme sesli okur."],["Çarpım tablosu","Her seferinde biraz."]], taalvraag: "Evde hangi dili konuşuyorsun?", taaluitleg: "Her şey Hollandaca kalır. Bir cümleye ya da cevabın yanındaki küçük düğmeye dokun, kendi dilini görürsün.", intro: "Bu, hâlâ Hollandaca öğrenen çocuklar için. 1'den başla. Her gün biraz yap.", voorlees: "Her yerde 'Lees voor' (sesli oku) düğmesi var. Metni duymak için bas." },
};

export function leesSteuntaal() { try { return localStorage.getItem(STEUNTAAL_KEY) || "nl"; } catch { return "nl"; } }

export default function NieuwkomersPage({ onLeerpad, onPagina, onHome, onOverstap }) {
  const [taal, setTaal] = useState(leesSteuntaal);
  const [herhaal, setHerhaal] = useState(false);
  const [tredeTest, setTredeTest] = useState(false);
  const [trede, setTrede] = useState(leesTrede);
  const [instap, setInstap] = useState(leesInstap);
  const [teHerhalen, setTeHerhalen] = useState(aantalTeHerhalen);
  const t = T.nl;
  const s = { ...T.nl, ...(T[taal] || {}) };
  const rtl = !!STEUNTALEN.find((x) => x.id === taal)?.rtl;
  // via = de ingetikte code (CodeBalk zet ?via=…), anders "link" (mail, digibord, doorverteld) — Mark 25 sep 2026.
  useEffect(() => {
    let via = "link";
    try { via = new URLSearchParams(window.location.search).get("via") || "link"; } catch { /* */ }
    try { track("nieuwkomers_open", { taal, via }); } catch { /* */ }
  }, []); // eslint-disable-line

  const kiesTaal = (id) => {
    setTaal(id);
    try { localStorage.setItem(STEUNTAAL_KEY, id); } catch { /* */ }
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
        <div style={{ width: 44, height: 44, borderRadius: 12, background: ok ? "#1b7f3b" : "#e0a800", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 22, flex: "none" }}>{ok ? "✓" : "?"}</div>
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
        <div style={{ fontSize: "clamp(19px, 5vw, 22px)", fontWeight: 900 }}>🚀 {t.overKop}</div>
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
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#3a2600", color: "#ffd166", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 20, flex: "none" }}>{teHerhalen}</div>
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
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#2f6fd6", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 22, flex: "none" }}>?</div>
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
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#0f2a44", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 20, flex: "none" }}>{i + 1}</div>
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

        <div style={{ marginTop: 20, background: "rgba(255,255,255,.1)", borderRadius: 14, padding: "12px 14px", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{t.voorlees}<Steun veld="voorlees" klein /></div>
        <div style={{ marginTop: 12, fontSize: 13.5, opacity: .75, lineHeight: 1.5 }}>{t.juf}<Steun veld="juf" klein /></div>
        {/* Naamsvermelding plaatjes (CC BY-SA 4.0 vraagt dat) — zie learnPaths/nieuwkomersPicto.js */}
        <div style={{ marginTop: 10, fontSize: 12, opacity: .6 }}>
          {PICTO_BRON} — <a href="https://mulberrysymbols.org" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>mulberrysymbols.org</a>
        </div>
      </div>
    </div>
  );
}
