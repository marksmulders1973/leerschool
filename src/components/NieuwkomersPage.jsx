// 🌍 Nieuwkomer-pakket — losse pagina (Mark 24 sep 2026, na de mail van een
// nieuwkomersleerkracht: "de meeste kinderen zitten op het niveau van groep 3/4").
// Regels van Mark: los van al het andere (geen Familiepakket, geen partnercode),
// "minder maar beter passend", iedereen die de code WELKOMNIEUWKOMER intikt komt hier.
// Steuntaal (24 sep, Marks idee "vier talen laten kiezen"): het kind kiest zijn
// thuistaal (Engels, Arabisch, Oekraïens, Turks); de vragen blijven Nederlands, maar
// een tik op een vraag (of het knopje bij een antwoord) toont dezelfde zin in de eigen
// taal (SteunTik.jsx leest localStorage `lk_steuntaal`). Geen vertaling van de app: steun.
import { lazy, Suspense, useEffect, useState } from "react";
import { track } from "../utils.js";
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";
import { aantalTeHerhalen } from "../shared/herhaalNieuwkomers.js";

const NieuwkomersHerhaal = lazy(() => import("./NieuwkomersHerhaal.jsx"));

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
      { id: "woorden-nieuwkomers", soort: "pad", titel: "Woorden", uitleg: "Je eerste Nederlandse woorden. Tik op een woord: dan zie je het in jouw taal." },
      { id: "rekentaal-nieuwkomers", soort: "pad", titel: "Rekentaal", uitleg: "Meer, minder, samen, weg, verdelen: de woorden in elke rekenles." },
      { id: "rekenen-tot-20-nieuwkomers", soort: "pad", titel: "Rekenen tot 20", uitleg: "Tellen, erbij en eraf. Met je vingers mag." },
      { id: "rekenen-tot-100-nieuwkomers", soort: "pad", titel: "Rekenen tot 100", uitleg: "Tientallen en eenheden. Sprongen van 10." },
      { id: "leesladder", soort: "pagina", titel: "Lezen", uitleg: "Begin met vijf korte zinnen. De knop leest voor." },
      { id: "tafels", soort: "pagina", titel: "Tafels", uitleg: "Steeds een stukje." },
    ],
    voorlees: "Overal staat een knop 'Lees voor'. Druk erop. Dan hoor je de tekst.",
    juf: "Voor de leerkracht: alles op deze pagina is gratis, ook op het digibord. Zet de code WELKOMNIEUWKOMER op het bord; ieder kind komt dan hier.",
    terug: "← Terug",
    herhaalKop: "Vandaag herhalen",
    herhaalUitleg: "Woorden en zinnen van eerder. Zo onthoud je ze.",
  },
  en: { herhaalKop: "Practise again today", herhaalUitleg: "Words and sentences from before. This way you remember them.", sub: "Free. No account. Short sentences. Every sum with an explanation.", juf: "For the teacher: everything on this page is free, also on the classroom board. Write the code WELKOMNIEUWKOMER on the board; every child will come here.", tegels: [["In class","What do you say to the teacher? How do you make friends?"],["Words","Your first Dutch words. Tap a word to see it in your language."],["Maths words","More, less, together, away, sharing: the words in every maths lesson."],["Counting to 20","Counting, adding and taking away. You may use your fingers."],["Counting to 100","Tens and ones. Jumps of 10."],["Reading","Start with five short sentences. The button reads them aloud."],["Times tables","A little bit at a time."]], taalvraag: "Which language do you speak at home?", taaluitleg: "Everything stays in Dutch. Tap a sentence, or the small button next to an answer, to see your language.", intro: "This is for children who are still learning Dutch. Start at 1. Do a little every day.", voorlees: "Everywhere there is a button 'Lees voor' (read aloud). Press it to hear the text." },
  ar: { herhaalKop: "مراجعة اليوم", herhaalUitleg: "كلمات وجمل من قبل. هكذا تتذكّرها.", sub: "مجاني. بدون حساب. جمل قصيرة. كل عملية حسابية مع شرح.", juf: "للمعلّم: كل شيء في هذه الصفحة مجاني، أيضًا على السبّورة الذكية. اكتب الرمز WELKOMNIEUWKOMER على السبّورة؛ وسيصل كل طفل إلى هنا.", tegels: [["في الصف","ماذا تقول للمعلّمة؟ كيف تكوّن أصدقاء؟"],["كلمات","أول كلماتك الهولندية. اضغط على كلمة لتراها بلغتك."],["كلمات الحساب","أكثر، أقل، معًا، ذهب، التوزيع: الكلمات في كل درس حساب."],["الحساب حتى 20","العدّ والجمع والطرح. يمكنك استخدام أصابعك."],["الحساب حتى 100","العشرات والآحاد. قفزات من 10."],["القراءة","ابدأ بخمس جمل قصيرة. الزر يقرأها بصوت عالٍ."],["جداول الضرب","قليلًا في كل مرة."]], taalvraag: "ما هي اللغة التي تتكلمها في البيت؟", taaluitleg: "كل شيء يبقى بالهولندية. اضغط على الجملة أو على الزر الصغير بجانب الجواب لترى لغتك.", intro: "هذا للأطفال الذين ما زالوا يتعلمون الهولندية. ابدأ من 1. تعلّم قليلًا كل يوم.", voorlees: "في كل مكان يوجد زر 'Lees voor' (اقرأ بصوت عالٍ). اضغط عليه لتسمع النص." },
  uk: { herhaalKop: "Повторити сьогодні", herhaalUitleg: "Слова і речення, які ти вже вчив. Так ти їх запам'ятаєш.", sub: "Безкоштовно. Без акаунта. Короткі речення. Кожен приклад із поясненням.", juf: "Для вчителя: усе на цій сторінці безкоштовне, також на інтерактивній дошці. Напишіть на дошці код WELKOMNIEUWKOMER — і кожна дитина потрапить сюди.", tegels: [["У класі","Що ти кажеш учительці? Як знайти друзів?"],["Слова","Твої перші нідерландські слова. Натисни на слово, щоб побачити його своєю мовою."],["Слова для математики","Більше, менше, разом, забрали, поділити: слова з кожного уроку математики."],["Рахуємо до 20","Лічба, додавання і віднімання. Можна на пальцях."],["Рахуємо до 100","Десятки й одиниці. Стрибки по 10."],["Читання","Почни з п'яти коротких речень. Кнопка читає вголос."],["Таблиця множення","Потроху."]], taalvraag: "Якою мовою ти розмовляєш удома?", taaluitleg: "Усе залишається нідерландською. Натисни на речення або на кнопочку біля відповіді, щоб побачити свою мову.", intro: "Це для дітей, які ще вчать нідерландську. Почни з 1. Займайся потроху щодня.", voorlees: "Скрізь є кнопка 'Lees voor' (прочитати вголос). Натисни її, щоб почути текст." },
  tr: { herhaalKop: "Bugün tekrar et", herhaalUitleg: "Daha önceki kelimeler ve cümleler. Böylece onları hatırlarsın.", sub: "Ücretsiz. Hesap yok. Kısa cümleler. Her işlem açıklamalı.", juf: "Öğretmen için: bu sayfadaki her şey ücretsizdir, akıllı tahtada da. WELKOMNIEUWKOMER kodunu tahtaya yazın; her çocuk buraya gelir.", tegels: [["Sınıfta","Öğretmene ne dersin? Nasıl arkadaş edinirsin?"],["Kelimeler","İlk Hollandaca kelimelerin. Bir kelimeye dokun, kendi dilinde gör."],["Matematik kelimeleri","Daha çok, daha az, birlikte, gitti, paylaştırmak: her matematik dersindeki kelimeler."],["20'ye kadar sayılar","Saymak, toplamak ve çıkarmak. Parmaklarını kullanabilirsin."],["100'e kadar sayılar","Onluklar ve birlikler. 10'ar atlamalar."],["Okuma","Beş kısa cümleyle başla. Düğme sesli okur."],["Çarpım tablosu","Her seferinde biraz."]], taalvraag: "Evde hangi dili konuşuyorsun?", taaluitleg: "Her şey Hollandaca kalır. Bir cümleye ya da cevabın yanındaki küçük düğmeye dokun, kendi dilini görürsün.", intro: "Bu, hâlâ Hollandaca öğrenen çocuklar için. 1'den başla. Her gün biraz yap.", voorlees: "Her yerde 'Lees voor' (sesli oku) düğmesi var. Metni duymak için bas." },
};

export function leesSteuntaal() { try { return localStorage.getItem(STEUNTAAL_KEY) || "nl"; } catch { return "nl"; } }

export default function NieuwkomersPage({ onLeerpad, onPagina, onHome }) {
  const [taal, setTaal] = useState(leesSteuntaal);
  const [herhaal, setHerhaal] = useState(false);
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
    if (tegel.soort === "pad") onLeerpad && onLeerpad(tegel.id);
    else onPagina && onPagina(tegel.id);
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

        {herhaal ? (
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

        {!herhaal && <div style={{ display: "grid", gap: 12 }}>
          {t.tegels.map((tegel, i) => (
            <button key={tegel.id} type="button" onClick={() => open(tegel)} style={{
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
          ))}
        </div>}

        <div style={{ marginTop: 20, background: "rgba(255,255,255,.1)", borderRadius: 14, padding: "12px 14px", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{t.voorlees}<Steun veld="voorlees" klein /></div>
        <div style={{ marginTop: 12, fontSize: 13.5, opacity: .75, lineHeight: 1.5 }}>{t.juf}<Steun veld="juf" klein /></div>
      </div>
    </div>
  );
}
