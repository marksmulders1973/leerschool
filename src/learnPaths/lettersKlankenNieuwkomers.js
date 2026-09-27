// Leerpad: Letters en klanken (nieuwkomers) — doorgroeiplan stap 4, trede 2 "Letters en woorden"
// (26-27 sep 2026, docs/NIEUWKOMERS-DOORGROEI-PLAN.md). Veel nieuwkomers (Syrië, Eritrea,
// Oekraïne) kennen een ánder schrift. Dit pad oefent de brug naar lezen en schrijven in het
// Nederlands: welke klank hoor je vooraan, hakken en plakken (t-a-s → tas), en twee letters
// die samen één klank maken (aa, oo, ee, oe). Klankzuivere woorden uit de klas, dezelfde als
// in het nieuwkomer-dictee. De voorleesknop laat het woord horen. Géén alfabetiseringsmethode.
// Vertalingen: vraagkaders + uitleg in TEKST_STEUN (door Claude, moedertaalcheck open);
// de letters en woorden zelf worden bewust níét vertaald (dat is de opgave).

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";

const stepEmojis = ["👂", "🧩", "👯"];
const chapters = [
  { letter: "A", title: "Welke klank hoor je vooraan?", emoji: "👂", from: 0, to: 0 },
  { letter: "B", title: "Hoe hak en plak ik een woord?", emoji: "🧩", from: 1, to: 1 },
  { letter: "C", title: "Welke twee letters maken één klank?", emoji: "👯", from: 2, to: 2 },
];

const S = (en, ar, uk, tr) => ({ en, ar, uk, tr });
const v = (q, steun, options, answer, hint, extra = {}) => ({ q, steun, options, answer, wrongHints: options.map((_, i) => (i === answer ? null : hint)), ...extra });

const H_VOORAAN = "Zeg het woord heel langzaam. Wat hoor je als eerste?";
const H_PLAK = "Zeg de klanken snel achter elkaar. Welk woord hoor je?";
const H_HAK = "Zeg het woord langzaam. Elke klank is één stukje.";
const H_TWEE = "Twee letters, één klank. Zeg het woord langzaam en luister naar het midden.";

const vooraan = [
  v("Welke klank hoor je vooraan in 'maan'?", S("Which sound do you hear at the start of 'maan'?", "ما الصوت الذي تسمعه في بداية 'maan'؟", "Який звук ти чуєш на початку 'maan'?", "'maan' kelimesinin başında hangi sesi duyuyorsun?"),
    ["m", "n", "a"], 0, H_VOORAAN, { uitlegPad: {
      stappen: [
        { titel: "Luister", tekst: "Zeg **maan** heel langzaam: **mmm**-aa-n. De eerste klank is **m**." },
        { titel: "Letter", tekst: "Elke klank heeft een letter. De klank **mmm** schrijf je als **m**." },
        { titel: "Jij", tekst: "Zeg een woord langzaam. Stop na de eerste klank. Welke letter is dat?" },
      ],
      woorden: [{ woord: "klank", uitleg: "Wat je hoort als je een letter zegt." }, { woord: "letter", uitleg: "Het teken dat je schrijft voor een klank." }],
      theorie: "Een woord bestaat uit klanken. Elke klank schrijf je met een letter.",
      voorbeelden: [{ type: "stap", tekst: "vis: vvv-i-s → v" }, { type: "stap", tekst: "tas: t-a-s → t" }],
      basiskennis: [{ onderwerp: "Truc", uitleg: "Druk op 'Lees voor' en luister naar het begin." }],
      niveaus: { basis: "Luister naar de eerste klank.", simpeler: "mmm… aan. Wat hoor je eerst?", nogSimpeler: "m" },
    } }),
  v("Welke klank hoor je vooraan in 'vis'?", S("Which sound do you hear at the start of 'vis'?", "ما الصوت الذي تسمعه في بداية 'vis'؟", "Який звук ти чуєш на початку 'vis'?", "'vis' kelimesinin başında hangi sesi duyuyorsun?"), ["v", "s", "i"], 0, H_VOORAAN),
  v("Welke klank hoor je vooraan in 'bus'?", S("Which sound do you hear at the start of 'bus'?", "ما الصوت الذي تسمعه في بداية 'bus'؟", "Який звук ти чуєш на початку 'bus'?", "'bus' kelimesinin başında hangi sesi duyuyorsun?"), ["b", "d", "p"], 0, H_VOORAAN),
  v("Welk woord begint met de klank 'k'?", S("Which word starts with the sound 'k'?", "أي كلمة تبدأ بالصوت 'k'؟", "Яке слово починається зі звуку 'k'?", "Hangi kelime 'k' sesiyle başlar?"), ["kip", "pen", "tas"], 0, H_VOORAAN),
  v("Welk woord begint met de klank 'z'?", S("Which word starts with the sound 'z'?", "أي كلمة تبدأ بالصوت 'z'؟", "Яке слово починається зі звуку 'z'?", "Hangi kelime 'z' sesiyle başlar?"), ["zon", "sok", "jas"], 0, H_VOORAAN),
];

const hakPlak = [
  v("Plak de klanken: t - a - s. Welk woord is het?", S("Glue the sounds together: t - a - s. Which word is it?", "اجمع الأصوات: t - a - s. ما هي الكلمة؟", "Склей звуки: t - a - s. Яке це слово?", "Sesleri birleştir: t - a - s. Hangi kelime?"),
    ["tas", "tak", "kas"], 0, H_PLAK, { uitlegPad: {
      stappen: [
        { titel: "Hakken", tekst: "**Hakken**: je zegt een woord in stukjes. **tas** → **t - a - s**." },
        { titel: "Plakken", tekst: "**Plakken**: je zegt de stukjes snel achter elkaar. **t - a - s** → **tas**." },
        { titel: "Lezen", tekst: "Zo lees je een nieuw woord: letter voor letter, en dan plakken." },
      ],
      woorden: [{ woord: "hakken", uitleg: "Een woord in klanken zeggen: t - a - s." }, { woord: "plakken", uitleg: "De klanken samen zeggen: tas." }],
      theorie: "Hakken = woord in klanken. Plakken = klanken samen tot een woord.",
      voorbeelden: [{ type: "stap", tekst: "p - e - n → pen" }, { type: "stap", tekst: "kip → k - i - p" }],
      basiskennis: [{ onderwerp: "Truc", uitleg: "Tik bij elke klank met je vinger op tafel." }],
      niveaus: { basis: "Zeg t, a, s steeds sneller.", simpeler: "t-a-s … ta-s … tas", nogSimpeler: "tas" },
    } }),
  v("Plak de klanken: p - e - n. Welk woord is het?", S("Glue the sounds together: p - e - n. Which word is it?", "اجمع الأصوات: p - e - n. ما هي الكلمة؟", "Склей звуки: p - e - n. Яке це слово?", "Sesleri birleştir: p - e - n. Hangi kelime?"), ["pen", "pan", "ben"], 0, H_PLAK),
  v("Plak de klanken: m - e - l - k. Welk woord is het?", S("Glue the sounds together: m - e - l - k. Which word is it?", "اجمع الأصوات: m - e - l - k. ما هي الكلمة؟", "Склей звуки: m - e - l - k. Яке це слово?", "Sesleri birleştir: m - e - l - k. Hangi kelime?"), ["melk", "mel", "elk"], 0, H_PLAK),
  v("Hak het woord 'kat' in klanken.", S("Chop the word 'kat' into sounds.", "قسّم كلمة 'kat' إلى أصوات.", "Розбий слово 'kat' на звуки.", "'kat' kelimesini seslere ayır."), ["k - a - t", "ka - t", "k - at"], 0, H_HAK),
  v("Hoeveel klanken hoor je in 'jas'?", S("How many sounds do you hear in 'jas'?", "كم صوتًا تسمع في 'jas'؟", "Скільки звуків ти чуєш у 'jas'?", "'jas' kelimesinde kaç ses duyuyorsun?"), ["3", "2", "4"], 0, H_HAK),
];

const tweeLetters = [
  v("Welk woord heeft de klank 'oo'?", S("Which word has the sound 'oo'?", "أي كلمة فيها الصوت 'oo'؟", "У якому слові є звук 'oo'?", "Hangi kelimede 'oo' sesi var?"),
    ["boom", "bos", "bal"], 0, H_TWEE, { uitlegPad: {
      stappen: [
        { titel: "Twee letters", tekst: "Soms maken **twee letters samen één klank**: **aa**, **oo**, **ee**, **oe**." },
        { titel: "Lang", tekst: "**boom** = b - **oo** - m. De **oo** klinkt lang. **bos** = b - o - s, kort." },
        { titel: "oe", tekst: "**oe** is een eigen klank: **boek** = b - **oe** - k." },
      ],
      woorden: [{ woord: "aa, oo, ee", uitleg: "Twee dezelfde letters: een lange klank." }, { woord: "oe", uitleg: "o en e samen: één klank, zoals in boek." }],
      theorie: "Twee letters kunnen samen één klank zijn. Dan tel je ze als één stukje.",
      voorbeelden: [{ type: "stap", tekst: "maan = m - aa - n (3 klanken)" }, { type: "stap", tekst: "voet = v - oe - t (3 klanken)" }],
      basiskennis: [{ onderwerp: "Truc", uitleg: "Hoor je een lange klank? Dan schrijf je vaak twee letters." }],
      niveaus: { basis: "Zoek de lange oo.", simpeler: "b - oo - m", nogSimpeler: "boom" },
    } }),
  v("Welk woord heeft de klank 'aa'?", S("Which word has the sound 'aa'?", "أي كلمة فيها الصوت 'aa'؟", "У якому слові є звук 'aa'?", "Hangi kelimede 'aa' sesi var?"), ["raam", "ram", "rok"], 0, H_TWEE),
  v("Welk woord heeft de klank 'oe'?", S("Which word has the sound 'oe'?", "أي كلمة فيها الصوت 'oe'؟", "У якому слові є звук 'oe'?", "Hangi kelimede 'oe' sesi var?"), ["boek", "bok", "bel"], 0, H_TWEE),
  v("Hoeveel klanken hoor je in 'boom'?", S("How many sounds do you hear in 'boom'?", "كم صوتًا تسمع في 'boom'؟", "Скільки звуків ти чуєш у 'boom'?", "'boom' kelimesinde kaç ses duyuyorsun?"), ["3", "4", "2"], 0, "b - oo - m. De twee o's zijn samen één klank."),
  v("Plak de klanken: v - oe - t. Welk woord is het?", S("Glue the sounds together: v - oe - t. Which word is it?", "اجمع الأصوات: v - oe - t. ما هي الكلمة؟", "Склей звуки: v - oe - t. Яке це слово?", "Sesleri birleştir: v - oe - t. Hangi kelime?"), ["voet", "vot", "vet"], 0, H_PLAK),
];

// Tikbare teksten (titels, uitleg, hints, uitlegPad) — NL → EN/AR/UK/TR.
const TEKST_STEUN = {
  [H_VOORAAN]: S("Say the word very slowly. What do you hear first?", "قل الكلمة ببطء شديد. ماذا تسمع أولًا؟", "Скажи слово дуже повільно. Що ти чуєш першим?", "Kelimeyi çok yavaş söyle. İlk ne duyuyorsun?"),
  [H_PLAK]: S("Say the sounds quickly one after the other. Which word do you hear?", "قل الأصوات بسرعة واحدًا بعد الآخر. أي كلمة تسمع؟", "Скажи звуки швидко один за одним. Яке слово ти чуєш?", "Sesleri hızlıca arka arkaya söyle. Hangi kelimeyi duyuyorsun?"),
  [H_HAK]: S("Say the word slowly. Each sound is one piece.", "قل الكلمة ببطء. كل صوت هو قطعة واحدة.", "Скажи слово повільно. Кожен звук — це один шматочок.", "Kelimeyi yavaşça söyle. Her ses bir parçadır."),
  [H_TWEE]: S("Two letters, one sound. Say the word slowly and listen to the middle.", "حرفان، صوت واحد. قل الكلمة ببطء واستمع إلى الوسط.", "Дві літери — один звук. Скажи слово повільно й послухай середину.", "İki harf, bir ses. Kelimeyi yavaşça söyle ve ortasını dinle."),
  "b - oo - m. De twee o's zijn samen één klank.": S("b - oo - m. The two o's together are one sound.", "b - oo - m. حرفا o معًا صوت واحد.", "b - oo - m. Дві o разом — це один звук.", "b - oo - m. İki o birlikte tek bir sestir."),
  "Welke klank hoor je vooraan?": S("Which sound do you hear at the start?", "ما الصوت الذي تسمعه في البداية؟", "Який звук ти чуєш на початку?", "Başta hangi sesi duyuyorsun?"),
  "Hoe hak en plak ik een woord?": S("How do I chop and glue a word?", "كيف أقسّم الكلمة وأجمعها؟", "Як розбити й склеїти слово?", "Bir kelimeyi nasıl ayırır ve birleştiririm?"),
  "Welke twee letters maken één klank?": S("Which two letters make one sound?", "أي حرفين يصنعان صوتًا واحدًا؟", "Які дві літери дають один звук?", "Hangi iki harf tek bir ses yapar?"),
  "Klanken vooraan": S("Sounds at the start", "الأصوات في البداية", "Звуки на початку", "Baştaki sesler"),
  "Hakken en plakken": S("Chopping and gluing", "التقسيم والجمع", "Розбивати й склеювати", "Ayırmak ve birleştirmek"),
  "Twee letters, één klank": S("Two letters, one sound", "حرفان، صوت واحد", "Дві літери — один звук", "İki harf, bir ses"),
  "Elk woord bestaat uit **klanken**. Zeg een woord heel langzaam: **mmm-aa-n**.\n\nDe eerste klank hoor je vooraan. Elke klank heeft een **letter**.\n\nDruk op **Lees voor** om het woord te horen.":
    S("Every word is made of sounds. Say a word very slowly: mmm-aa-n.\n\nYou hear the first sound at the start. Every sound has a letter.\n\nPress 'Lees voor' to hear the word.", "كل كلمة مكوّنة من أصوات. قل الكلمة ببطء شديد: mmm-aa-n.\n\nالصوت الأول تسمعه في البداية. لكل صوت حرف.\n\nاضغط 'Lees voor' لتسمع الكلمة.", "Кожне слово складається зі звуків. Скажи слово дуже повільно: mmm-aa-n.\n\nПерший звук ти чуєш на початку. Кожен звук має літеру.\n\nНатисни 'Lees voor', щоб почути слово.", "Her kelime seslerden oluşur. Bir kelimeyi çok yavaş söyle: mmm-aa-n.\n\nİlk sesi başta duyarsın. Her sesin bir harfi vardır.\n\nKelimeyi duymak için 'Lees voor'a bas."),
  "**Hakken**: een woord in klanken zeggen. **tas** → **t - a - s**.\n\n**Plakken**: de klanken snel achter elkaar zeggen. **t - a - s** → **tas**.\n\nZo lees je een nieuw woord.":
    S("Chopping: saying a word in sounds. tas → t - a - s.\n\nGluing: saying the sounds quickly one after the other. t - a - s → tas.\n\nThis is how you read a new word.", "التقسيم: قول الكلمة أصواتًا. tas ← t - a - s.\n\nالجمع: قول الأصوات بسرعة واحدًا بعد الآخر. t - a - s ← tas.\n\nهكذا تقرأ كلمة جديدة.", "Розбивати: казати слово по звуках. tas → t - a - s.\n\nСклеювати: казати звуки швидко один за одним. t - a - s → tas.\n\nТак ти читаєш нове слово.", "Ayırmak: kelimeyi seslerle söylemek. tas → t - a - s.\n\nBirleştirmek: sesleri hızlıca arka arkaya söylemek. t - a - s → tas.\n\nYeni bir kelimeyi böyle okursun."),
  "Soms maken **twee letters samen één klank**: **aa**, **oo**, **ee** en **oe**.\n\n**boom** = b - **oo** - m: drie klanken.\n**boek** = b - **oe** - k: ook drie klanken.":
    S("Sometimes two letters together make one sound: aa, oo, ee and oe.\n\nboom = b - oo - m: three sounds.\nboek = b - oe - k: also three sounds.", "أحيانًا يصنع حرفان معًا صوتًا واحدًا: aa و oo و ee و oe.\n\nboom = b - oo - m: ثلاثة أصوات.\nboek = b - oe - k: أيضًا ثلاثة أصوات.", "Іноді дві літери разом дають один звук: aa, oo, ee і oe.\n\nboom = b - oo - m: три звуки.\nboek = b - oe - k: теж три звуки.", "Bazen iki harf birlikte tek bir ses yapar: aa, oo, ee ve oe.\n\nboom = b - oo - m: üç ses.\nboek = b - oe - k: yine üç ses."),
  "Letters en klanken — lezen en schrijven in het Nederlands (nieuwkomers)": S("Letters and sounds — reading and writing in Dutch (newcomers)", "الحروف والأصوات — القراءة والكتابة بالهولندية (للقادمين الجدد)", "Літери й звуки — читати й писати нідерландською (для новоприбулих)", "Harfler ve sesler — Hollandaca okuma ve yazma (yeni gelenler)"),
};

const steps = [
  { title: "Klanken vooraan", explanation: "Elk woord bestaat uit **klanken**. Zeg een woord heel langzaam: **mmm-aa-n**.\n\nDe eerste klank hoor je vooraan. Elke klank heeft een **letter**.\n\nDruk op **Lees voor** om het woord te horen.", checks: vooraan },
  { title: "Hakken en plakken", explanation: "**Hakken**: een woord in klanken zeggen. **tas** → **t - a - s**.\n\n**Plakken**: de klanken snel achter elkaar zeggen. **t - a - s** → **tas**.\n\nZo lees je een nieuw woord.", checks: hakPlak },
  { title: "Twee letters, één klank", explanation: "Soms maken **twee letters samen één klank**: **aa**, **oo**, **ee** en **oe**.\n\n**boom** = b - **oo** - m: drie klanken.\n**boek** = b - **oe** - k: ook drie klanken.", checks: tweeLetters },
];
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const lettersKlankenNieuwkomers = {
  id: "letters-klanken-nieuwkomers",
  title: "Letters en klanken — lezen en schrijven in het Nederlands (nieuwkomers)",
  emoji: "🔤",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Beginnende geletterdheid — klanken en letters",
  prerequisites: [],
  intro: "Welke klank hoor je? Hakken en plakken: t-a-s wordt tas. En twee letters die samen één klank maken: aa, oo, oe. Met steun in je eigen taal. ~10 min.",
  triggerKeywords: ["nieuwkomers", "letters", "klanken", "hakken en plakken", "leren lezen", "nt2"],
  chapters,
  steps,
  steunTeksten: { ...NIEUWKOMERS_STEUN, ...TEKST_STEUN }, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default lettersKlankenNieuwkomers;
