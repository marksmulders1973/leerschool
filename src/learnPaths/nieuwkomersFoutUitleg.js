// ❌→💡 Fout antwoord = zeg wat er niet klopt (Mark 25 sep 2026, na het Woordenpad: "ik zeg
// 'de tas', maar ik zie niet: nee, een tas is iets om je spullen in te doen" — "doe hetzelfde
// bij de andere nieuwkomerpaden"). Elk fout antwoord krijgt "Nee, <waarom niet>." vóór de
// bestaande hint. Rekenfouten worden herkend (plus i.p.v. min, cijfers omgedraaid, één te
// veel…); zinnen krijgen een korte uitleg wanneer je ze wél zegt. De vertaling voor het
// taalknopje wordt meteen in NIEUWKOMERS_STEUN gezet (NL-tekst → en/ar/uk/tr).
import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";

const TALEN = ["en", "ar", "uk", "tr"];
const NEE = { nl: "Nee,", en: "No,", ar: "لا،", uk: "Ні,", tr: "Hayır," };
const kaal = (s) => String(s || "").replace(/\*\*/g, "").replace(/…/g, " ");
const r5 = (nl, en, ar, uk, tr) => ({ nl, en, ar, uk, tr });

// ── Rekenen: waarom is dit getal fout? ──────────────────────────────
export function rekenReden(check, optie) {
  const G = Number(check.options[check.answer]);
  const X = Number(optie);
  if (!Number.isFinite(G) || !Number.isFinite(X) || X === G) return null;
  const q = kaal(check.q);
  const nums = (q.match(/\d+/g) || []).map(Number);

  if (/Wat komt na/i.test(q)) {
    const N = nums[nums.length - 1];
    const tien = /tien/i.test(q);
    if (X === N) return r5(`${X} staat al in de vraag. Wat komt erna?`, `${X} is already in the question. What comes after it?`, `${X} موجود في السؤال. ماذا يأتي بعده؟`, `${X} вже є в запитанні. Що йде після нього?`, `${X} zaten soruda var. Ondan sonra ne gelir?`);
    if (X < N) return r5(`${X} komt vóór ${N}, niet erna.`, `${X} comes before ${N}, not after.`, `${X} يأتي قبل ${N}، لا بعده.`, `${X} іде перед ${N}, а не після.`, `${X}, ${N} sayısından önce gelir, sonra değil.`);
    if (tien && X === N + 1) return r5(`${X} is er één bij. Je moet er tien bij doen.`, `${X} is one more. You need ten more.`, `${X} هو واحد زيادة. تحتاج عشرة زيادة.`, `${X} — це на один більше. Треба на десять більше.`, `${X} bir fazlası. On fazlası lazım.`);
  }

  if (/tientallen/i.test(q) && nums.length >= 2) {
    const [t, e] = nums;
    if (X === t + e) return r5(`je telde ${t} + ${e}. Maar ${t} tientallen is ${t * 10}.`, `you added ${t} + ${e}. But ${t} tens is ${t * 10}.`, `جمعت ${t} + ${e}. لكن ${t} عشرات = ${t * 10}.`, `ти додав ${t} + ${e}. Але ${t} десятків — це ${t * 10}.`, `${t} + ${e} topladın. Ama ${t} onluk = ${t * 10}.`);
    if (X === e * 10 + t) return r5(`je draaide de cijfers om. Eerst de tientallen: ${t * 10}.`, `you swapped the digits. Tens first: ${t * 10}.`, `قلبت الرقمين. العشرات أولًا: ${t * 10}.`, `ти переставив цифри. Спочатку десятки: ${t * 10}.`, `rakamların yerini değiştirdin. Önce onluklar: ${t * 10}.`);
  }

  if (nums.length >= 2) {
    const [a, b] = nums;
    const soort = /groepjes van/i.test(q) ? "keer" : /verdeel/i.test(q) ? "delen" : q.includes("+") ? "plus" : q.includes("−") ? "min" : G === a + b ? "plus" : G === a - b ? "min" : null;
    const groot = Math.max(a, b), klein = Math.min(a, b);
    if (soort === "plus" && X === groot - klein) return r5(`${X} is ${groot} − ${klein}. Maar hier komt er iets bij (+).`, `${X} is ${groot} − ${klein}. But here something is added (+).`, `${X} هو ${groot} − ${klein}. لكن هنا نضيف (+).`, `${X} — це ${groot} − ${klein}. Але тут треба додати (+).`, `${X}, ${groot} − ${klein} demek. Ama burada ekleme var (+).`);
    if (soort === "min" && X === a + b) return r5(`${X} is ${a} + ${b}. Maar hier gaat er iets af (−).`, `${X} is ${a} + ${b}. But here something is taken away (−).`, `${X} هو ${a} + ${b}. لكن هنا نطرح (−).`, `${X} — це ${a} + ${b}. Але тут треба відняти (−).`, `${X}, ${a} + ${b} demek. Ama burada çıkarma var (−).`);
    if (soort === "keer" && X === a + b) return r5(`${X} is ${a} + ${b}. Maar het zijn ${a} groepjes van ${b}.`, `${X} is ${a} + ${b}. But it is ${a} groups of ${b}.`, `${X} هو ${a} + ${b}. لكنها ${a} مجموعات من ${b}.`, `${X} — це ${a} + ${b}. Але це ${a} групи по ${b}.`, `${X}, ${a} + ${b} demek. Ama ${b} kişilik ${a} grup var.`);
    if (soort === "delen") {
      const som = X === a - b ? `${a} − ${b}` : X === a + b ? `${a} + ${b}` : X === a * b ? `${a} × ${b}` : null;
      if (som) return r5(`${X} is ${som}. Maar je deelt ${a} eerlijk uit.`, `${X} is ${som}. But you share ${a} fairly.`, `${X} هو ${som}. لكنك تقسم ${a} بالعدل.`, `${X} — це ${som}. Але ти ділиш ${a} порівну.`, `${X}, ${som} demek. Ama ${a} tanesini eşit paylaştırıyorsun.`);
    }
  }
  if (/helft/i.test(q) && nums.length && X === nums[0] * 2) return r5(`${X} is het dubbele van ${nums[0]}. De helft is kleiner.`, `${X} is double ${nums[0]}. Half is smaller.`, `${X} هو ضعف ${nums[0]}. النصف أصغر.`, `${X} — це вдвічі більше за ${nums[0]}. Половина менша.`, `${X}, ${nums[0]} sayısının iki katı. Yarısı daha küçük.`);
  if (nums.includes(X)) return r5(`${X} staat al in de vraag. Je moet nog rekenen.`, `${X} is already in the question. You still need to calculate.`, `${X} موجود في السؤال. ما زلت تحتاج أن تحسب.`, `${X} вже є в запитанні. Треба ще порахувати.`, `${X} zaten soruda var. Hâlâ hesaplaman gerekiyor.`);
  const d = X - G;
  if (Math.abs(d) === 10) return d > 0
    ? r5(`${X} is tien te veel. Kijk goed naar de tientallen.`, `${X} is ten too many. Look carefully at the tens.`, `${X} أكثر بعشرة. انظر جيدًا إلى العشرات.`, `${X} — на десять більше. Уважно подивись на десятки.`, `${X} on fazla. Onluklara iyi bak.`)
    : r5(`${X} is tien te weinig. Kijk goed naar de tientallen.`, `${X} is ten too few. Look carefully at the tens.`, `${X} أقل بعشرة. انظر جيدًا إلى العشرات.`, `${X} — на десять менше. Уважно подивись на десятки.`, `${X} on eksik. Onluklara iyi bak.`);
  if (Math.abs(d) === 1) return d > 0
    ? r5(`${X} is één te veel. Tel nog eens precies.`, `${X} is one too many. Count again carefully.`, `${X} أكثر بواحد. عُدّ مرة أخرى بدقة.`, `${X} — на один більше. Порахуй ще раз уважно.`, `${X} bir fazla. Tekrar dikkatle say.`)
    : r5(`${X} is één te weinig. Tel nog eens precies.`, `${X} is one too few. Count again carefully.`, `${X} أقل بواحد. عُدّ مرة أخرى بدقة.`, `${X} — на один менше. Порахуй ще раз уважно.`, `${X} bir eksik. Tekrar dikkatle say.`);
  return d > 0
    ? r5(`${X} is te veel.`, `${X} is too many.`, `${X} أكثر من اللازم.`, `${X} — забагато.`, `${X} fazla.`)
    : r5(`${X} is te weinig.`, `${X} is too few.`, `${X} أقل من اللازم.`, `${X} — замало.`, `${X} az.`);
}

// ── Rekentaal: namen vergelijken en rekenwoorden ─────────────────────
const REKENWOORD = {
  "plus (+)": r5("plus is als er iets bij komt.", "plus is when something is added.", "الجمع عندما يُضاف شيء.", "плюс — це коли щось додається.", "artı, bir şey eklenince."),
  "min (−)": r5("min is als er iets weggaat.", "minus is when something goes away.", "الطرح عندما يذهب شيء.", "мінус — це коли щось забирають.", "eksi, bir şey gidince."),
  "keer (×)": r5("keer is hetzelfde getal een paar keer.", "times is the same number a few times.", "الضرب هو نفس العدد عدة مرات.", "помножити — це те саме число кілька разів.", "çarpı, aynı sayının birkaç kez olması."),
  "2 + 4": r5("2 + 4 is plus, geen keer.", "2 + 4 is plus, not times.", "2 + 4 جمع، وليس ضربًا.", "2 + 4 — це плюс, а не множення.", "2 + 4 artı, çarpı değil."),
  "4 − 2": r5("4 − 2 is min, geen keer.", "4 − 2 is minus, not times.", "4 − 2 طرح، وليس ضربًا.", "4 − 2 — це мінус, а не множення.", "4 − 2 eksi, çarpı değil."),
};
export function rekentaalReden(check, optie) {
  if (REKENWOORD[optie]) return REKENWOORD[optie];
  const q = kaal(check.q);
  const paren = [...q.matchAll(/([A-Z][a-z]+) (?:heeft )?(\d+)/g)].map((m) => ({ naam: m[1], n: Number(m[2]) }));
  if (paren.length < 2) return rekenReden(check, optie);
  const wilMin = /minder|minste/i.test(q);
  const getallen = paren.map((p) => p.n);
  const doel = wilMin ? Math.min(...getallen) : Math.max(...getallen);
  const allemaalGelijk = getallen.every((n) => n === getallen[0]);
  if (/evenveel/i.test(optie) && !allemaalGelijk) {
    const [a, b] = getallen;
    return r5(`${a} en ${b} is niet evenveel.`, `${a} and ${b} are not the same.`, `${a} و ${b} ليسا متساويين.`, `${a} і ${b} — не однаково.`, `${a} ve ${b} eşit değil.`);
  }
  if (/heeft meer/i.test(optie) && allemaalGelijk) {
    const n = getallen[0];
    return r5(`ze hebben allebei ${n}.`, `they both have ${n}.`, `لدى كلٍّ منهما ${n}.`, `в обох по ${n}.`, `ikisinde de ${n} var.`);
  }
  const p = paren.find((x) => x.naam === optie);
  if (p) return wilMin
    ? r5(`${p.naam} heeft ${p.n}. Dat is meer dan ${doel}.`, `${p.naam} has ${p.n}. That is more than ${doel}.`, `عند ${p.naam} ${p.n}. هذا أكثر من ${doel}.`, `У ${p.naam} — ${p.n}. Це більше, ніж ${doel}.`, `${p.naam}: ${p.n}. Bu, ${doel} sayısından fazla.`)
    : r5(`${p.naam} heeft ${p.n}. Dat is minder dan ${doel}.`, `${p.naam} has ${p.n}. That is less than ${doel}.`, `عند ${p.naam} ${p.n}. هذا أقل من ${doel}.`, `У ${p.naam} — ${p.n}. Це менше, ніж ${doel}.`, `${p.naam}: ${p.n}. Bu, ${doel} sayısından az.`);
  return rekenReden(check, optie);
}

// ── In de klas: wanneer zeg je deze zin wél? ─────────────────────────
const ZIN = {
  "Ik ben klaar.": "'Ik ben klaar.' zeg je als je werk af is.",
  "Waar is mijn jas?": "'Waar is mijn jas?' vraag je als je je jas zoekt.",
  "Ik heb honger.": "'Ik heb honger.' zeg je als je wilt eten.",
  "Dank je wel.": "'Dank je wel.' zeg je als iemand je helpt of iets geeft.",
  "Tot morgen!": "'Tot morgen!' zeg je als je naar huis gaat.",
  "Tot morgen.": "'Tot morgen.' zeg je als je naar huis gaat.",
  "Ik ben er.": "'Ik ben er.' zeg je als de juf je naam noemt.",
  "Mag ik naar buiten?": "'Mag ik naar buiten?' vraag je als je naar buiten wilt.",
  "Waar is de bal?": "'Waar is de bal?' vraag je als je de bal zoekt.",
  "Ik ga naar huis.": "'Ik ga naar huis.' zeg je als de school uit is.",
  "Hoe laat is het?": "'Hoe laat is het?' vraag je als je de tijd wilt weten.",
  "Mag ik spelen?": "'Mag ik spelen?' vraag je als je wilt spelen.",
  "Is het pauze?": "'Is het pauze?' vraag je als je wilt weten of je naar buiten mag.",
  "Ik snap het niet.": "'Ik snap het niet.' zeg je als je iets niet begrijpt.",
  "Mag ik naar de wc?": "'Mag ik naar de wc?' vraag je als je moet plassen.",
  "Waar woon je?": "'Waar woon je?' vraag je aan een ander kind.",
  "Naar de wc.": "naar de wc ga je als je moet plassen.",
  "Naar huis.": "naar huis ga je als de school uit is.",
  "Naar de winkel.": "naar de winkel ga je om iets te kopen.",
  "Je moet naar huis.": "naar huis ga je pas als de school uit is.",
  "Er is brand.": "bij brand gaat er een alarm. Dat klinkt anders.",
  "Je krijgt eten.": "de bel zegt niet dat je eten krijgt.",
  "tafel": "aan een tafel zit je. Daar hang je geen jas aan.",
  "deur": "een deur gaat open en dicht.",
  "stoel": "op een stoel zit je.",
  "raam": "door een raam kijk je naar buiten.",
  "bord": "op het bord schrijft de juf.",
  "In de gymzaal.": "in de gymzaal heb je gym, geen pauze.",
  "Op de wc.": "op de wc speel je niet.",
  "In de auto.": "met de auto ga je ergens heen. Daar speel je niet.",
  "Ik heb een hond.": "'Ik heb een hond.' gaat over je huisdier.",
  "Het is mooi weer.": "'Het is mooi weer.' gaat over het weer.",
  "Ik ben acht jaar.": "'Ik ben acht jaar.' zegt hoe oud je bent.",
  "Tot ziens.": "'Tot ziens.' zeg je als je weggaat.",
  "Waar is de juf?": "'Waar is de juf?' vraag je als je de juf zoekt.",
  "Het is koud.": "'Het is koud.' gaat over het weer.",
  "Ik heet Ali.": "'Ik heet Ali.' zeg je als iemand je naam vraagt.",
  "Nee.": "'Nee.' zeg je als je iets niet wilt.",
  "Ja, goed.": "'Ja, goed.' zeg je als je iets wél wilt.",
  "Goedemorgen!": "'Goedemorgen!' zeg je als je 's ochtends binnenkomt.",
  "Mag ik meedoen?": "'Mag ik meedoen?' vraag je als je wilt meespelen.",
  "Ik ben blij.": "'Ik ben blij.' zeg je als je je fijn voelt.",
  "Ik ben moe.": "'Ik ben moe.' zeg je als je wilt slapen.",
  "Ik heb pijn.": "'Ik heb pijn.' zeg je als iets zeer doet.",
  "Ik ben boos.": "'Ik ben boos.' zeg je als iemand iets doet wat niet mag.",
};
export function zinReden(check, optie) {
  const nl = ZIN[optie];
  if (!nl) return null;
  const t = check.steunOpties?.[optie] || NIEUWKOMERS_STEUN[optie];
  const r = { nl };
  // Kliktest 26 sep 2026: geen dubbele punt (vertaling eindigt al op . ! ?) en de Nederlandse zin
  // isoleren (U+2068/U+2069) zodat hij in Arabisch (rechts-naar-links) niet door elkaar komt.
  const nlZin = `⁨${optie}⁩`;
  for (const l of TALEN) r[l] = t?.[l] ? `«${nlZin}» = ${t[l]}${/[.!?…]$/.test(t[l]) ? "" : "."}` : `«${nlZin}».`;
  return r;
}

// ── Toepassen op een pad ────────────────────────────────────────────
// Zet "Nee, <reden>" vóór de bestaande hint van elk fout antwoord en registreert de
// vertaling (reden + oude hint) in NIEUWKOMERS_STEUN, zodat het taalknopje blijft werken.
export function voegFoutUitlegToe(steps, reden) {
  for (const s of steps) {
    for (const c of s.checks || []) {
      if (!Array.isArray(c.options) || !Array.isArray(c.wrongHints)) continue;
      c.wrongHints = c.options.map((o, i) => {
        const oud = c.wrongHints[i];
        if (i === c.answer) return oud ?? null;
        const r = reden(c, o);
        if (!r) return oud;
        const nl = `${NEE.nl} ${r.nl}${oud ? " " + oud : ""}`;
        if (!NIEUWKOMERS_STEUN[nl]) {
          const oudT = oud ? NIEUWKOMERS_STEUN[oud] : null;
          const v = {};
          for (const l of TALEN) v[l] = `${NEE[l]} ${r[l]}${oudT?.[l] ? " " + oudT[l] : ""}`;
          NIEUWKOMERS_STEUN[nl] = v;
        }
        return nl;
      });
    }
  }
  return steps;
}
