// 🌍 Steun-tik (Nieuwkomer-pakket, Mark 24 sep 2026): "als je op die zin klikt,
// vertaalt de zin". Nederlands blijft de hoofdtaal en staat altijd; de eigen taal
// verschijnt pas ná een tik en verdwijnt weer bij een tweede tik. Zo blijft het
// Nederlands-leren hoog, maar bij onbegrip is er meteen een sterk hulpmiddel.
// - <SteunVraag steun={...}>…</SteunVraag>  → de hele vraagzin is tikbaar.
// - <SteunOptie steun={check.steunOpties} opt={tekst}>…</SteunOptie> → antwoordknop
//   krijgt een klein taalknopje rechts (de knop zelf kiest het antwoord, dus de tik
//   zit ernaast). `steunOpties` is een map Nederlandse optie → {en,ar,uk,tr,ro,bg}: op tekst,
//   niet op positie, want LearnPath schudt de opties (les 24 sep: verkeerde vertaling).
// - Mark 24 sep: "ALLES moet vertaalbaar zijn, anders kunnen ze het niet lezen."
//   <SteunCtx.Provider value={map}> (LearnPath, bij paden met `steunPad`) + <SteunTekst nl="…">
//   maakt elke tekst tikbaar: uitleg, hints, foutscherm, knoppen, eindscherm. `map` = NL-tekst
//   → {en,ar,uk,tr}; knop-teksten staan hieronder in UI_STEUN, padteksten in het pad zelf.
//   Buiten een Provider (gewone leerpaden) doet <SteunTekst> niets.
// Taal uit localStorage lk_steuntaal (gekozen op /nieuwkomers); "nl" of geen
// steun-veld → niets extra's. Zonder keuze: Engels. Arabisch van rechts naar links.
// 30 sep 2026: Roemeens (ro) en Bulgaars (bg) erbij op verzoek van een nieuwkomersschool; beide ltr.
import { createContext, useContext, useState } from "react";
import { track } from "../../utils.js";

export const STEUNTAAL_KEY = "lk_steuntaal";
const LABEL = { en: "EN", ar: "AR", uk: "UK", tr: "TR", ro: "RO", bg: "BG" };

export const SteunCtx = createContext(null);

// Vaste knop- en schermteksten van het leerpad (LearnPath/VraagUitlegPad/VoorleesBlok).
export const UI_STEUN = {
  "Naar de vragen ▶": { en: "To the questions ▶", ar: "إلى الأسئلة ◀", uk: "До запитань ▶", tr: "Sorulara geç ▶", ro: "La întrebări ▶", bg: "Към въпросите ▶" },
  "Naar de vraag ▶": { en: "To the question ▶", ar: "إلى السؤال ◀", uk: "До запитання ▶", tr: "Soruya geç ▶", ro: "La întrebare ▶", bg: "Към въпроса ▶" },
  "Volgend deel ▶": { en: "Next part ▶", ar: "الجزء التالي ◀", uk: "Наступна частина ▶", tr: "Sonraki bölüm ▶", ro: "Partea următoare ▶", bg: "Следваща част ▶" },
  "Dat is juist!": { en: "That is right!", ar: "هذا صحيح!", uk: "Правильно!", tr: "Doğru!", ro: "Corect!", bg: "Правилно!" },
  "Dit is lastig, hè? Zullen we eerst de uitleg samen doen?": { en: "This is hard, isn't it? Shall we do the explanation together first?", ar: "هذا صعب، أليس كذلك؟ هل نقرأ الشرح معًا أولًا؟", uk: "Це складно, правда? Давай спочатку разом прочитаємо пояснення?", tr: "Bu zor, değil mi? Önce açıklamayı birlikte yapalım mı?", ro: "E greu, nu? Facem mai întâi explicația împreună?", bg: "Трудно е, нали? Да минем ли първо обяснението заедно?" },
  "Ja, eerst de uitleg": { en: "Yes, the explanation first", ar: "نعم، الشرح أولًا", uk: "Так, спочатку пояснення", tr: "Evet, önce açıklama", ro: "Da, mai întâi explicația", bg: "Да, първо обяснението" },
  "Nee, ik probeer verder": { en: "No, I'll keep trying", ar: "لا، سأواصل المحاولة", uk: "Ні, я пробую далі", tr: "Hayır, denemeye devam edeceğim", ro: "Nu, încerc mai departe", bg: "Не, продължавам да опитвам" },
  "Nog niet helemaal": { en: "Not quite yet", ar: "ليس تمامًا بعد", uk: "Ще не зовсім", tr: "Henüz tam değil", ro: "Încă nu chiar", bg: "Още не съвсем" },
  "Probeer het nog eens, kijk goed naar de uitleg hierboven.": { en: "Try again. Look carefully at the explanation above.", ar: "حاول مرة أخرى. انظر جيدًا إلى الشرح في الأعلى.", uk: "Спробуй ще раз. Уважно подивись на пояснення вище.", tr: "Tekrar dene. Yukarıdaki açıklamaya iyi bak.", ro: "Mai încearcă o dată. Uită-te bine la explicația de mai sus.", bg: "Опитай пак. Погледни внимателно обяснението отгоре." },
  "Probeer opnieuw": { en: "Try again", ar: "حاول مرة أخرى", uk: "Спробуй ще раз", tr: "Tekrar dene", ro: "Încearcă din nou", bg: "Опитай пак" },
  "Hier is de uitleg": { en: "Here is the explanation", ar: "هذا هو الشرح", uk: "Ось пояснення", tr: "İşte açıklama", ro: "Iată explicația", bg: "Ето обяснението" },
  "Lees uitleg opnieuw": { en: "Read the explanation again", ar: "اقرأ الشرح مرة أخرى", uk: "Прочитай пояснення ще раз", tr: "Açıklamayı tekrar oku", ro: "Citește explicația din nou", bg: "Прочети обяснението отново" },
  "Klopt er iets niet?": { en: "Is something wrong?", ar: "هل هناك خطأ؟", uk: "Щось не так?", tr: "Bir şey yanlış mı?", ro: "E ceva greșit?", bg: "Нещо не е наред?" },
  "Wat klopt er niet?": { en: "What is wrong?", ar: "ما الخطأ؟", uk: "Що не так?", tr: "Ne yanlış?", ro: "Ce e greșit?", bg: "Какво не е наред?" },
  "De vraag klopt niet": { en: "The question is wrong", ar: "السؤال خطأ", uk: "Запитання неправильне", tr: "Soru yanlış", ro: "Întrebarea e greșită", bg: "Въпросът е грешен" },
  "Het goede antwoord klopt niet": { en: "The right answer is wrong", ar: "الجواب الصحيح خطأ", uk: "Правильна відповідь неправильна", tr: "Doğru cevap yanlış", ro: "Răspunsul corect e greșit", bg: "Верният отговор е грешен" },
  "De vertaling klopt niet": { en: "The translation is wrong", ar: "الترجمة خطأ", uk: "Переклад неправильний", tr: "Çeviri yanlış", ro: "Traducerea e greșită", bg: "Преводът е грешен" },
  "Iets anders": { en: "Something else", ar: "شيء آخر", uk: "Щось інше", tr: "Başka bir şey", ro: "Altceva", bg: "Нещо друго" },
  "Verstuur": { en: "Send", ar: "أرسل", uk: "Надіслати", tr: "Gönder", ro: "Trimite", bg: "Изпрати" },
  "Dank je! Mark kijkt ernaar.": { en: "Thank you! Mark will look at it.", ar: "شكرًا! سينظر مارك في الأمر.", uk: "Дякую! Марк перегляне це.", tr: "Teşekkürler! Mark bakacak.", ro: "Mulțumesc! Mark se va uita.", bg: "Благодаря! Марк ще го погледне." },
  "Ik begrijp de vraag niet — help mij": { en: "I don't understand the question — help me", ar: "لا أفهم السؤال — ساعدني", uk: "Я не розумію запитання — допоможи мені", tr: "Soruyu anlamıyorum — bana yardım et", ro: "Nu înțeleg întrebarea — ajută-mă", bg: "Не разбирам въпроса — помогни ми" },
  "Terug naar de tekst": { en: "Back to the text", ar: "العودة إلى النص", uk: "Назад до тексту", tr: "Metne geri dön", ro: "Înapoi la text", bg: "Обратно към текста" },
  "Verberg tekst": { en: "Hide text", ar: "إخفاء النص", uk: "Сховати текст", tr: "Metni gizle", ro: "Ascunde textul", bg: "Скрий текста" },
  "Vraag hulp": { en: "Ask for help", ar: "اطلب المساعدة", uk: "Попроси допомоги", tr: "Yardım iste", ro: "Cere ajutor", bg: "Поискай помощ" },
  "Lees voor": { en: "Read aloud", ar: "اقرأ بصوت عالٍ", uk: "Прочитати вголос", tr: "Sesli oku", ro: "Citește cu voce tare", bg: "Прочети на глас" },
  "Stem": { en: "Voice", ar: "الصوت", uk: "Голос", tr: "Ses", ro: "Voce", bg: "Глас" },
  "Stap voltooid!": { en: "Part finished!", ar: "انتهى الجزء!", uk: "Частину завершено!", tr: "Bölüm bitti!", ro: "Partea e gata!", bg: "Частта е готова!" },
  "Goed bezig. Wat wil je nu?": { en: "Well done. What do you want now?", ar: "أحسنت. ماذا تريد الآن؟", uk: "Молодець. Що ти хочеш зараз?", tr: "Aferin. Şimdi ne yapmak istersin?", ro: "Bravo. Ce vrei acum?", bg: "Браво. Какво искаш сега?" },
  "Helemaal klaar — laatste stap geweest!": { en: "All done — that was the last part!", ar: "انتهيت تمامًا — كان هذا الجزء الأخير!", uk: "Усе готово — це була остання частина!", tr: "Hepsi bitti — bu son bölümdü!", ro: "Totul e gata — asta a fost ultima parte!", bg: "Всичко е готово — това беше последната част!" },
  "Mini-toets": { en: "Mini test", ar: "اختبار صغير", uk: "Міні-тест", tr: "Küçük test", ro: "Mini-test", bg: "Мини тест" },
  "3 vragen over deze stap": { en: "3 questions about this part", ar: "3 أسئلة عن هذا الجزء", uk: "3 запитання про цю частину", tr: "Bu bölümle ilgili 3 soru", ro: "3 întrebări despre această parte", bg: "3 въпроса за тази част" },
  "Volgend deel": { en: "Next part", ar: "الجزء التالي", uk: "Наступна частина", tr: "Sonraki bölüm", ro: "Partea următoare", bg: "Следваща част" },
  "Doorgaan met dit onderwerp": { en: "Go on with this topic", ar: "تابع هذا الموضوع", uk: "Продовжити цю тему", tr: "Bu konuya devam et", ro: "Continuă cu acest subiect", bg: "Продължи с тази тема" },
  "Klaar — bekijk je resultaat": { en: "Done — see your result", ar: "انتهيت — شاهد نتيجتك", uk: "Готово — подивись свій результат", tr: "Bitti — sonucuna bak", ro: "Gata — vezi rezultatul tău", bg: "Готово — виж резултата си" },
  "Je score + wat je hierna kunt doen": { en: "Your score + what you can do next", ar: "نتيجتك + ما يمكنك فعله بعد ذلك", uk: "Твій результат + що робити далі", tr: "Puanın + sonra ne yapabilirsin", ro: "Scorul tău + ce poți face după", bg: "Твоят резултат + какво можеш да правиш после" },
  "Terug naar paden": { en: "Back to the lessons", ar: "العودة إلى الدروس", uk: "Назад до уроків", tr: "Derslere geri dön", ro: "Înapoi la lecții", bg: "Обратно към уроците" },
  "Andere stap kiezen": { en: "Choose another part", ar: "اختر جزءًا آخر", uk: "Вибери іншу частину", tr: "Başka bir bölüm seç", ro: "Alege altă parte", bg: "Избери друга част" },
  "Goed gedaan! Je bent klaar.": { en: "Well done! You are finished.", ar: "أحسنت! لقد انتهيت.", uk: "Молодець! Ти закінчив.", tr: "Aferin! Bitirdin.", ro: "Bravo! Ai terminat.", bg: "Браво! Готов си." },
  "Terug naar het Nieuwkomer-pakket": { en: "Back to the Newcomer pack", ar: "العودة إلى حزمة القادمين الجدد", uk: "Назад до пакета для новоприбулих", tr: "Yeni gelenler paketine geri dön", ro: "Înapoi la pachetul pentru nou-veniți", bg: "Обратно към пакета за новодошли" },
  "Nog een keer": { en: "One more time", ar: "مرة أخرى", uk: "Ще раз", tr: "Bir kez daha", ro: "Încă o dată", bg: "Още веднъж" },
  "Denk eerst hierover": { en: "Think about this first", ar: "فكّر في هذا أولًا", uk: "Спочатку подумай про це", tr: "Önce bunu düşün", ro: "Gândește-te mai întâi la asta", bg: "Първо помисли за това" },
  "Begin bij deel 1": { en: "Start with part 1", ar: "ابدأ بالجزء 1", uk: "Почни з частини 1", tr: "1. bölümle başla", ro: "Începe cu partea 1", bg: "Започни с част 1" },
  "Doorgaan": { en: "Continue", ar: "تابع", uk: "Продовжити", tr: "Devam et", ro: "Continuă", bg: "Продължи" },
  "Hulp bij deze vraag": { en: "Help with this question", ar: "مساعدة في هذا السؤال", uk: "Допомога з цим запитанням", tr: "Bu soru için yardım", ro: "Ajutor la această întrebare", bg: "Помощ за този въпрос" },
  "Korte uitleg": { en: "Short explanation", ar: "شرح قصير", uk: "Коротке пояснення", tr: "Kısa açıklama", ro: "Explicație scurtă", bg: "Кратко обяснение" },
  "Stap voor stap door de vraag": { en: "Step by step through the question", ar: "خطوة بخطوة في السؤال", uk: "Крок за кроком через запитання", tr: "Soruyu adım adım çöz", ro: "Pas cu pas prin întrebare", bg: "Стъпка по стъпка през въпроса" },
  "Moeilijke woorden": { en: "Difficult words", ar: "كلمات صعبة", uk: "Складні слова", tr: "Zor kelimeler", ro: "Cuvinte grele", bg: "Трудни думи" },
  "Theorie achter de vraag": { en: "The idea behind the question", ar: "الفكرة وراء السؤال", uk: "Ідея запитання", tr: "Sorunun arkasındaki fikir", ro: "Ideea din spatele întrebării", bg: "Идеята зад въпроса" },
  "Voorbeelden uit het echte leven": { en: "Examples from real life", ar: "أمثلة من الحياة", uk: "Приклади з життя", tr: "Gerçek hayattan örnekler", ro: "Exemple din viața reală", bg: "Примери от живота" },
  "Basiskennis die je hierbij nodig hebt": { en: "What you need to know first", ar: "ما تحتاج أن تعرفه أولًا", uk: "Що треба знати спочатку", tr: "Önce bilmen gerekenler", ro: "Ce trebuie să știi mai întâi", bg: "Какво трябва да знаеш първо" },
  "Lees de uitleg van deze stap nog eens": { en: "Read the explanation of this part again", ar: "اقرأ شرح هذا الجزء مرة أخرى", uk: "Прочитай пояснення цієї частини ще раз", tr: "Bu bölümün açıklamasını tekrar oku", ro: "Citește din nou explicația acestei părți", bg: "Прочети отново обяснението на тази част" },
  "Probeer het straks eerst zelf.": { en: "First try it yourself. Below is help to understand the question. The short explanation with the answer comes after your first try.", ar: "جرّب بنفسك أولًا. في الأسفل مساعدة لفهم السؤال. الشرح القصير مع الجواب يظهر بعد محاولتك الأولى.", uk: "Спочатку спробуй сам. Нижче є допомога, щоб зрозуміти запитання. Коротке пояснення з відповіддю з'явиться після першої спроби.", tr: "Önce kendin dene. Aşağıda soruyu anlamak için yardım var. Cevaplı kısa açıklama ilk denemenden sonra gelir.", ro: "Încearcă mai întâi singur. Mai jos e ajutor ca să înțelegi întrebarea. Explicația scurtă cu răspunsul vine după prima încercare.", bg: "Първо опитай сам. Отдолу има помощ, за да разбереш въпроса. Краткото обяснение с отговора идва след първия ти опит." },
  "Vandaag herhalen": { en: "Practise again today", ar: "مراجعة اليوم", uk: "Повторити сьогодні", tr: "Bugün tekrar et", ro: "Repetă azi", bg: "Повтори днес" },
  "Woorden en zinnen van eerder. Zo onthoud je ze.": { en: "Words and sentences from before. This way you remember them.", ar: "كلمات وجمل من قبل. هكذا تتذكّرها.", uk: "Слова і речення, які ти вже вчив. Так ти їх запам'ятаєш.", tr: "Daha önceki kelimeler ve cümleler. Böylece onları hatırlarsın.", ro: "Cuvinte și propoziții de mai înainte. Așa le ții minte.", bg: "Думи и изречения отпреди. Така ги запомняш." },
  "Klaar met herhalen!": { en: "Done practising!", ar: "انتهيت من المراجعة!", uk: "Повторення закінчено!", tr: "Tekrar bitti!", ro: "Gata cu repetatul!", bg: "Повторението е готово!" },
  "Morgen komen er weer een paar terug.": { en: "Tomorrow a few will come back again.", ar: "غدًا ستعود بعضها مرة أخرى.", uk: "Завтра кілька повернуться знову.", tr: "Yarın birkaçı tekrar gelecek.", ro: "Mâine câteva vor reveni.", bg: "Утре няколко ще се върнат отново." },
  "Volgende": { en: "Next", ar: "التالي", uk: "Далі", tr: "Sonraki", ro: "Următoarea", bg: "Напред" },
  "Terug": { en: "Back", ar: "رجوع", uk: "Назад", tr: "Geri", ro: "Înapoi", bg: "Назад" },
  "Sluit": { en: "Close", ar: "إغلاق", uk: "Закрити", tr: "Kapat", ro: "Închide", bg: "Затвори" },
  // Kliktest 26 sep 2026: navigatie rond de vragen was nog alleen Nederlands.
  "← Vorig deel": { en: "← Previous part", ar: "→ الجزء السابق", uk: "← Попередня частина", tr: "← Önceki bölüm", ro: "← Partea anterioară", bg: "← Предишна част" },
  "Volgend deel →": { en: "Next part →", ar: "الجزء التالي ←", uk: "Наступна частина →", tr: "Sonraki bölüm →", ro: "Partea următoare →", bg: "Следваща част →" },
  "⏸ stop": { en: "⏸ pause (your place is saved)", ar: "⏸ توقّف (يُحفظ مكانك)", uk: "⏸ пауза (твоє місце збережено)", tr: "⏸ dur (yerin kaydedilir)", ro: "⏸ pauză (locul tău e salvat)", bg: "⏸ пауза (мястото ти е запазено)" },
  "Begin": { en: "Start", ar: "ابدأ", uk: "Почати", tr: "Başla", ro: "Începe", bg: "Започни" },
  "Overzicht": { en: "Overview", ar: "نظرة عامة", uk: "Огляд", tr: "Genel bakış", ro: "Prezentare generală", bg: "Преглед" },
  "Terug naar het overzicht": { en: "Back to the overview", ar: "العودة إلى النظرة العامة", uk: "Назад до огляду", tr: "Genel bakışa dön", ro: "Înapoi la prezentarea generală", bg: "Обратно към прегледа" },
  "Kies een ander deel": { en: "Choose another part", ar: "اختر جزءًا آخر", uk: "Вибери іншу частину", tr: "Başka bir bölüm seç", ro: "Alege altă parte", bg: "Избери друга част" },
  "Je plek is bewaard!": { en: "Your place is saved!", ar: "تم حفظ مكانك!", uk: "Твоє місце збережено!", tr: "Yerin kaydedildi!", ro: "Locul tău e salvat!", bg: "Мястото ти е запазено!" },
  "Tot straks — je gaat verder waar je nu bent.": { en: "See you soon — you will continue where you are now.", ar: "إلى اللقاء — ستكمل من حيث أنت الآن.", uk: "До зустрічі — ти продовжиш там, де ти зараз.", tr: "Görüşürüz — şimdi kaldığın yerden devam edeceksin.", ro: "Pe curând — continui de unde ești acum.", bg: "До скоро — ще продължиш оттам, докъдето си сега." },
  // Korte titels van de nieuwkomer-onderdelen (zelfde woorden als de tegels op /nieuwkomers).
  "In de klas": { en: "In class", ar: "في الصف", uk: "У класі", tr: "Sınıfta", ro: "În clasă", bg: "В класа" },
  "Woorden": { en: "Words", ar: "كلمات", uk: "Слова", tr: "Kelimeler", ro: "Cuvinte", bg: "Думи" },
  "Rekentaal": { en: "Maths words", ar: "كلمات الحساب", uk: "Слова для математики", tr: "Matematik kelimeleri", ro: "Cuvinte de matematică", bg: "Думи за смятане" },
  "Rekenen tot 20": { en: "Counting to 20", ar: "الحساب حتى 20", uk: "Рахуємо до 20", tr: "20'ye kadar sayılar", ro: "Numărăm până la 20", bg: "Смятане до 20" },
  "Rekenen tot 100": { en: "Counting to 100", ar: "الحساب حتى 100", uk: "Рахуємо до 100", tr: "100'e kadar sayılar", ro: "Numărăm până la 100", bg: "Смятане до 100" },
};

// Teksten met een getal erin (kliktest 26 sep 2026) — als {en,ar,uk,tr}-object voor <SteunTekst nl={…}>.
export const UI_GETAL = {
  deel: (a, b) => ({ en: `Part ${a} / ${b}`, ar: `الجزء ${a} / ${b}`, uk: `Частина ${a} / ${b}`, tr: `Bölüm ${a} / ${b}`, ro: `Partea ${a} / ${b}`, bg: `Част ${a} / ${b}` }),
  delenKlaar: (x, y) => ({ en: `${x} of ${y} parts done`, ar: `أنهيت ${x} من ${y} أجزاء`, uk: `Завершено ${x} з ${y} частин`, tr: `${y} bölümden ${x} tanesi bitti`, ro: `${x} din ${y} părți gata`, bg: `${x} от ${y} части готови` }),
  hoofdstuk: (n) => ({ en: `Chapter ${n}`, ar: `الفصل ${n}`, uk: `Розділ ${n}`, tr: `Ünite ${n}`, ro: `Capitolul ${n}`, bg: `Глава ${n}` }),
  deelKlaar: (n) => ({ en: `Part ${n} done!`, ar: `انتهى الجزء ${n}!`, uk: `Частину ${n} завершено!`, tr: `${n}. bölüm bitti!`, ro: `Partea ${n} e gata!`, bg: `Част ${n} е готова!` }),
  vragenMinuten: (v, m, stand) => {
    const S = { klaar: ["done", "مكتمل", "готово", "bitti", "gata", "готово"], bezig: ["in progress", "قيد التقدّم", "в процесі", "devam ediyor", "în lucru", "в процес"], niet: ["not done yet", "لم يُنجز بعد", "ще не зроблено", "henüz yapılmadı", "încă nefăcut", "още не е направено"] }[stand];
    const v1 = v === 1;
    return {
      en: `${v ? `${v} ${v1 ? "question" : "questions"} · ` : ""}about ${m} ${m === 1 ? "minute" : "minutes"} · ${S[0]}`,
      ar: `${v ? `${v} ${v1 ? "سؤال" : "أسئلة"} · ` : ""}حوالي ${m} ${m === 1 ? "دقيقة" : "دقائق"} · ${S[1]}`,
      uk: `${v ? `${v} ${v1 ? "запитання" : "запитань"} · ` : ""}приблизно ${m} хв · ${S[2]}`,
      tr: `${v ? `${v} soru · ` : ""}yaklaşık ${m} dakika · ${S[3]}`,
      ro: `${v ? `${v} ${v1 ? "întrebare" : "întrebări"} · ` : ""}circa ${m} min · ${S[4]}`,
      bg: `${v ? `${v} ${v1 ? "въпрос" : "въпроса"} · ` : ""}около ${m} мин · ${S[5]}`,
    };
  },
};

// "N van de M goed" en "Stap N voltooid!" hebben een getal: los opbouwen.
export function steunGoed(n, m) {
  return { en: `${n} of ${m} correct`, ar: `${n} من ${m} صحيحة`, uk: `${n} з ${m} правильно`, tr: `${m} sorudan ${n} doğru`, ro: `${n} din ${m} corecte`, bg: `${n} от ${m} верни` };
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
    return Object.fromEntries(["en", "ar", "uk", "tr", "ro", "bg"].map((k) => [k, delen.map((d, i) => d?.[k] || nl.filter(Boolean)[i]).join(": ")]));
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
