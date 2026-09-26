// 🌍 Steun-tik (Nieuwkomer-pakket, Mark 24 sep 2026): "als je op die zin klikt,
// vertaalt de zin". Nederlands blijft de hoofdtaal en staat altijd; de eigen taal
// verschijnt pas ná een tik en verdwijnt weer bij een tweede tik. Zo blijft het
// Nederlands-leren hoog, maar bij onbegrip is er meteen een sterk hulpmiddel.
// - <SteunVraag steun={...}>…</SteunVraag>  → de hele vraagzin is tikbaar.
// - <SteunOptie steun={check.steunOpties} opt={tekst}>…</SteunOptie> → antwoordknop
//   krijgt een klein taalknopje rechts (de knop zelf kiest het antwoord, dus de tik
//   zit ernaast). `steunOpties` is een map Nederlandse optie → {en,ar,uk,tr}: op tekst,
//   niet op positie, want LearnPath schudt de opties (les 24 sep: verkeerde vertaling).
// - Mark 24 sep: "ALLES moet vertaalbaar zijn, anders kunnen ze het niet lezen."
//   <SteunCtx.Provider value={map}> (LearnPath, bij paden met `steunPad`) + <SteunTekst nl="…">
//   maakt elke tekst tikbaar: uitleg, hints, foutscherm, knoppen, eindscherm. `map` = NL-tekst
//   → {en,ar,uk,tr}; knop-teksten staan hieronder in UI_STEUN, padteksten in het pad zelf.
//   Buiten een Provider (gewone leerpaden) doet <SteunTekst> niets.
// Taal uit localStorage lk_steuntaal (gekozen op /nieuwkomers); "nl" of geen
// steun-veld → niets extra's. Zonder keuze: Engels. Arabisch van rechts naar links.
import { createContext, useContext, useState } from "react";
import { track } from "../../utils.js";

export const STEUNTAAL_KEY = "lk_steuntaal";
const LABEL = { en: "EN", ar: "AR", uk: "UK", tr: "TR" };

export const SteunCtx = createContext(null);

// Vaste knop- en schermteksten van het leerpad (LearnPath/VraagUitlegPad/VoorleesBlok).
export const UI_STEUN = {
  "Naar de vragen ▶": { en: "To the questions ▶", ar: "إلى الأسئلة ◀", uk: "До запитань ▶", tr: "Sorulara geç ▶" },
  "Naar de vraag ▶": { en: "To the question ▶", ar: "إلى السؤال ◀", uk: "До запитання ▶", tr: "Soruya geç ▶" },
  "Volgend deel ▶": { en: "Next part ▶", ar: "الجزء التالي ◀", uk: "Наступна частина ▶", tr: "Sonraki bölüm ▶" },
  "Dat is juist!": { en: "That is right!", ar: "هذا صحيح!", uk: "Правильно!", tr: "Doğru!" },
  "Dit is lastig, hè? Zullen we eerst de uitleg samen doen?": { en: "This is hard, isn't it? Shall we do the explanation together first?", ar: "هذا صعب، أليس كذلك؟ هل نقرأ الشرح معًا أولًا؟", uk: "Це складно, правда? Давай спочатку разом прочитаємо пояснення?", tr: "Bu zor, değil mi? Önce açıklamayı birlikte yapalım mı?" },
  "Ja, eerst de uitleg": { en: "Yes, the explanation first", ar: "نعم، الشرح أولًا", uk: "Так, спочатку пояснення", tr: "Evet, önce açıklama" },
  "Nee, ik probeer verder": { en: "No, I'll keep trying", ar: "لا، سأواصل المحاولة", uk: "Ні, я пробую далі", tr: "Hayır, denemeye devam edeceğim" },
  "Nog niet helemaal": { en: "Not quite yet", ar: "ليس تمامًا بعد", uk: "Ще не зовсім", tr: "Henüz tam değil" },
  "Probeer het nog eens, kijk goed naar de uitleg hierboven.": { en: "Try again. Look carefully at the explanation above.", ar: "حاول مرة أخرى. انظر جيدًا إلى الشرح في الأعلى.", uk: "Спробуй ще раз. Уважно подивись на пояснення вище.", tr: "Tekrar dene. Yukarıdaki açıklamaya iyi bak." },
  "Probeer opnieuw": { en: "Try again", ar: "حاول مرة أخرى", uk: "Спробуй ще раз", tr: "Tekrar dene" },
  "Hier is de uitleg": { en: "Here is the explanation", ar: "هذا هو الشرح", uk: "Ось пояснення", tr: "İşte açıklama" },
  "Lees uitleg opnieuw": { en: "Read the explanation again", ar: "اقرأ الشرح مرة أخرى", uk: "Прочитай пояснення ще раз", tr: "Açıklamayı tekrar oku" },
  "Ik begrijp de vraag niet — help mij": { en: "I don't understand the question — help me", ar: "لا أفهم السؤال — ساعدني", uk: "Я не розумію запитання — допоможи мені", tr: "Soruyu anlamıyorum — bana yardım et" },
  "Terug naar de tekst": { en: "Back to the text", ar: "العودة إلى النص", uk: "Назад до тексту", tr: "Metne geri dön" },
  "Verberg tekst": { en: "Hide text", ar: "إخفاء النص", uk: "Сховати текст", tr: "Metni gizle" },
  "Vraag hulp": { en: "Ask for help", ar: "اطلب المساعدة", uk: "Попроси допомоги", tr: "Yardım iste" },
  "Lees voor": { en: "Read aloud", ar: "اقرأ بصوت عالٍ", uk: "Прочитати вголос", tr: "Sesli oku" },
  "Stem": { en: "Voice", ar: "الصوت", uk: "Голос", tr: "Ses" },
  "Stap voltooid!": { en: "Part finished!", ar: "انتهى الجزء!", uk: "Частину завершено!", tr: "Bölüm bitti!" },
  "Goed bezig. Wat wil je nu?": { en: "Well done. What do you want now?", ar: "أحسنت. ماذا تريد الآن؟", uk: "Молодець. Що ти хочеш зараз?", tr: "Aferin. Şimdi ne yapmak istersin?" },
  "Helemaal klaar — laatste stap geweest!": { en: "All done — that was the last part!", ar: "انتهيت تمامًا — كان هذا الجزء الأخير!", uk: "Усе готово — це була остання частина!", tr: "Hepsi bitti — bu son bölümdü!" },
  "Mini-toets": { en: "Mini test", ar: "اختبار صغير", uk: "Міні-тест", tr: "Küçük test" },
  "3 vragen over deze stap": { en: "3 questions about this part", ar: "3 أسئلة عن هذا الجزء", uk: "3 запитання про цю частину", tr: "Bu bölümle ilgili 3 soru" },
  "Volgend deel": { en: "Next part", ar: "الجزء التالي", uk: "Наступна частина", tr: "Sonraki bölüm" },
  "Doorgaan met dit onderwerp": { en: "Go on with this topic", ar: "تابع هذا الموضوع", uk: "Продовжити цю тему", tr: "Bu konuya devam et" },
  "Klaar — bekijk je resultaat": { en: "Done — see your result", ar: "انتهيت — شاهد نتيجتك", uk: "Готово — подивись свій результат", tr: "Bitti — sonucuna bak" },
  "Je score + wat je hierna kunt doen": { en: "Your score + what you can do next", ar: "نتيجتك + ما يمكنك فعله بعد ذلك", uk: "Твій результат + що робити далі", tr: "Puanın + sonra ne yapabilirsin" },
  "Terug naar paden": { en: "Back to the lessons", ar: "العودة إلى الدروس", uk: "Назад до уроків", tr: "Derslere geri dön" },
  "Andere stap kiezen": { en: "Choose another part", ar: "اختر جزءًا آخر", uk: "Вибери іншу частину", tr: "Başka bir bölüm seç" },
  "Goed gedaan! Je bent klaar.": { en: "Well done! You are finished.", ar: "أحسنت! لقد انتهيت.", uk: "Молодець! Ти закінчив.", tr: "Aferin! Bitirdin." },
  "Terug naar het Nieuwkomer-pakket": { en: "Back to the Newcomer pack", ar: "العودة إلى حزمة القادمين الجدد", uk: "Назад до пакета для новоприбулих", tr: "Yeni gelenler paketine geri dön" },
  "Nog een keer": { en: "One more time", ar: "مرة أخرى", uk: "Ще раз", tr: "Bir kez daha" },
  "Denk eerst hierover": { en: "Think about this first", ar: "فكّر في هذا أولًا", uk: "Спочатку подумай про це", tr: "Önce bunu düşün" },
  "Begin bij deel 1": { en: "Start with part 1", ar: "ابدأ بالجزء 1", uk: "Почни з частини 1", tr: "1. bölümle başla" },
  "Doorgaan": { en: "Continue", ar: "تابع", uk: "Продовжити", tr: "Devam et" },
  "Hulp bij deze vraag": { en: "Help with this question", ar: "مساعدة في هذا السؤال", uk: "Допомога з цим запитанням", tr: "Bu soru için yardım" },
  "Korte uitleg": { en: "Short explanation", ar: "شرح قصير", uk: "Коротке пояснення", tr: "Kısa açıklama" },
  "Stap voor stap door de vraag": { en: "Step by step through the question", ar: "خطوة بخطوة في السؤال", uk: "Крок за кроком через запитання", tr: "Soruyu adım adım çöz" },
  "Moeilijke woorden": { en: "Difficult words", ar: "كلمات صعبة", uk: "Складні слова", tr: "Zor kelimeler" },
  "Theorie achter de vraag": { en: "The idea behind the question", ar: "الفكرة وراء السؤال", uk: "Ідея запитання", tr: "Sorunun arkasındaki fikir" },
  "Voorbeelden uit het echte leven": { en: "Examples from real life", ar: "أمثلة من الحياة", uk: "Приклади з життя", tr: "Gerçek hayattan örnekler" },
  "Basiskennis die je hierbij nodig hebt": { en: "What you need to know first", ar: "ما تحتاج أن تعرفه أولًا", uk: "Що треба знати спочатку", tr: "Önce bilmen gerekenler" },
  "Lees de uitleg van deze stap nog eens": { en: "Read the explanation of this part again", ar: "اقرأ شرح هذا الجزء مرة أخرى", uk: "Прочитай пояснення цієї частини ще раз", tr: "Bu bölümün açıklamasını tekrar oku" },
  "Probeer het straks eerst zelf.": { en: "First try it yourself. Below is help to understand the question. The short explanation with the answer comes after your first try.", ar: "جرّب بنفسك أولًا. في الأسفل مساعدة لفهم السؤال. الشرح القصير مع الجواب يظهر بعد محاولتك الأولى.", uk: "Спочатку спробуй сам. Нижче є допомога, щоб зрозуміти запитання. Коротке пояснення з відповіддю з'явиться після першої спроби.", tr: "Önce kendin dene. Aşağıda soruyu anlamak için yardım var. Cevaplı kısa açıklama ilk denemenden sonra gelir." },
  "Vandaag herhalen": { en: "Practise again today", ar: "مراجعة اليوم", uk: "Повторити сьогодні", tr: "Bugün tekrar et" },
  "Woorden en zinnen van eerder. Zo onthoud je ze.": { en: "Words and sentences from before. This way you remember them.", ar: "كلمات وجمل من قبل. هكذا تتذكّرها.", uk: "Слова і речення, які ти вже вчив. Так ти їх запам'ятаєш.", tr: "Daha önceki kelimeler ve cümleler. Böylece onları hatırlarsın." },
  "Klaar met herhalen!": { en: "Done practising!", ar: "انتهيت من المراجعة!", uk: "Повторення закінчено!", tr: "Tekrar bitti!" },
  "Morgen komen er weer een paar terug.": { en: "Tomorrow a few will come back again.", ar: "غدًا ستعود بعضها مرة أخرى.", uk: "Завтра кілька повернуться знову.", tr: "Yarın birkaçı tekrar gelecek." },
  "Volgende": { en: "Next", ar: "التالي", uk: "Далі", tr: "Sonraki" },
  "Terug": { en: "Back", ar: "رجوع", uk: "Назад", tr: "Geri" },
  "Sluit": { en: "Close", ar: "إغلاق", uk: "Закрити", tr: "Kapat" },
};

// "N van de M goed" en "Stap N voltooid!" hebben een getal: los opbouwen.
export function steunGoed(n, m) {
  return { en: `${n} of ${m} correct`, ar: `${n} من ${m} صحيحة`, uk: `${n} з ${m} правильно`, tr: `${m} sorudan ${n} doğru` };
}

const norm = (s) => String(s).replace(/\*\*/g, "").replace(/[\s ]+/g, " ").trim();

// Maakt de opzoek-map: NL-tekst (letterlijk én genormaliseerd) → vertalingen.
export function maakSteunMap(...bronnen) {
  const map = {};
  for (const b of bronnen) for (const [nl, v] of Object.entries(b || {})) { map[nl] = v; map[norm(nl)] = v; }
  return map;
}

export function leesSteuntaal() {
  try { return localStorage.getItem(STEUNTAAL_KEY) || "en"; } catch { return "en"; }
}

function steunTekst(steun, taal) {
  if (!steun || taal === "nl") return null;
  if (typeof steun === "string") return steun;
  return steun[taal] || steun.en || null;
}

// Vertaling in het gele blokje: **vet** en regelafbrekingen uit de padteksten blijven heel.
function Rijk({ tekst }) {
  return String(tekst).split("\n").map((regel, i, alle) => (
    <span key={i}>
      {regel.split(/\*\*(.+?)\*\*/g).map((d, j) => (j % 2 ? <strong key={j}>{d}</strong> : d))}
      {i < alle.length - 1 && <br />}
    </span>
  ));
}

function Regel({ tekst, taal, klein }) {
  return (
    <div dir={taal === "ar" ? "rtl" : "ltr"} lang={taal} style={{
      marginTop: 6, padding: "6px 10px", borderRadius: 8,
      background: "rgba(255,213,79,0.14)", border: "1px solid rgba(255,213,79,0.45)",
      fontSize: klein ? 14 : 15, fontWeight: 600, lineHeight: 1.4, color: "inherit", textAlign: "start",
    }}><Rijk tekst={tekst} /></div>
  );
}

function pilStijl(open) {
  return {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    minWidth: 34, height: 24, padding: "0 8px", borderRadius: 999,
    border: "1.5px solid rgba(240,180,0,0.95)", background: open ? "#ffd54f" : "rgba(255,213,79,0.3)",
    color: open ? "#3a2600" : "inherit", fontSize: 12, fontWeight: 800, letterSpacing: 0.5,
    cursor: "pointer", fontFamily: "inherit", lineHeight: 1,
  };
}

// Hele blok tikbaar (tekst zonder knoppen erin).
function TikBlok({ tekst, taal, soort, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((o) => !o);
    if (!open) { try { track("steun_tik", { soort, taal }); } catch { /* */ } }
  };
  return (
    <div role="button" tabIndex={0} onClick={toggle} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
      aria-pressed={open} title="Tik voor jouw taal" style={{ cursor: "pointer" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
        <span aria-hidden="true" style={{ ...pilStijl(open), marginTop: 2, flexShrink: 0 }}>{LABEL[taal] || taal.toUpperCase()}</span>
      </div>
      {open && <Regel tekst={tekst} taal={taal} />}
    </div>
  );
}

// Knop + klein taalknopje ernaast (de knop zelf doet zijn eigen ding).
function TikNaast({ tekst, taal, soort, inline, children }) {
  const [open, setOpen] = useState(false);
  const toggle = (e) => {
    e.stopPropagation();
    e.preventDefault(); // ook in een <summary>: niet het vak open/dicht klappen
    setOpen((o) => !o);
    if (!open) { try { track("steun_tik", { soort, taal }); } catch { /* */ } }
  };
  const pil = (
    <button type="button" onClick={toggle} aria-pressed={open} aria-label={soort === "optie" ? "Vertaal dit antwoord" : "Vertaal dit"} title="Tik voor jouw taal"
      style={{ ...pilStijl(open), alignSelf: "center", flexShrink: 0 }}>{LABEL[taal] || taal.toUpperCase()}</button>
  );
  if (inline) {
    return (
      <span style={{ display: "inline-flex", flexDirection: "column", verticalAlign: "top", marginRight: 6 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>{children}{pil}</span>
        {open && <Regel tekst={tekst} taal={taal} klein />}
      </span>
    );
  }
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "stretch", gap: 6 }}>
        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
        {pil}
      </div>
      {open && <Regel tekst={tekst} taal={taal} klein />}
    </div>
  );
}

// Hele vraagzin tikbaar. `children` = de Nederlandse vraag zoals de ouder hem al toont.
export function SteunVraag({ steun, altijd, children }) {
  const taal = leesSteuntaal();
  const tekst = steunTekst(steun, taal);
  if (!tekst) return children;
  // `altijd` (check.steunAltijd): de eigen taal is hier de OPGAVE, niet hulp
  // (Woorden-pad: "welk Nederlands woord is 'masa'?") → altijd zichtbaar, geen tik.
  if (altijd) return <div>{children}<Regel tekst={tekst} taal={taal} /></div>;
  return <TikBlok tekst={tekst} taal={taal} soort="vraag">{children}</TikBlok>;
}

// Antwoordknop + klein taalknopje ernaast. `children` = de bestaande <button>.
export function SteunOptie({ steun, opt, children }) {
  const taal = leesSteuntaal();
  const tekst = steunTekst(steun && typeof opt === "string" ? steun[opt] : null, taal);
  if (!tekst) return children;
  return <TikNaast tekst={tekst} taal={taal} soort="optie">{children}</TikNaast>;
}

// Opzoeken in de actieve map (null buiten een nieuwkomerpad).
export function useSteun(nl) {
  const map = useContext(SteunCtx);
  if (!map || nl == null) return null;
  const zoek = (t) => (typeof t === "string" ? map[t] || map[norm(t)] || null : t || null);
  // Lijst (bv. [titel, tekst]) → vertalingen per taal aan elkaar met ": ".
  if (Array.isArray(nl)) {
    const delen = nl.filter(Boolean).map(zoek);
    if (!delen.some(Boolean)) return null;
    return Object.fromEntries(["en", "ar", "uk", "tr"].map((k) => [k, delen.map((d, i) => d?.[k] || nl.filter(Boolean)[i]).join(": ")]));
  }
  if (typeof nl === "object") return nl; // al een {en,ar,uk,tr}
  return zoek(nl);
}

// Elke tekst tikbaar. `nl` = de Nederlandse tekst (of direct {en,ar,uk,tr}).
// `knop`: children is een knop → taalknopje ernaast i.p.v. het blok tikbaar maken.
export function SteunTekst({ nl, knop, inline, soort = "tekst", children }) {
  const steun = useSteun(nl);
  const taal = leesSteuntaal();
  const tekst = steunTekst(steun, taal);
  if (!tekst) return children ?? null;
  if (knop || inline) return <TikNaast tekst={tekst} taal={taal} soort={soort} inline={inline}>{children}</TikNaast>;
  return <TikBlok tekst={tekst} taal={taal} soort={soort}>{children}</TikBlok>;
}
