// ✍️ Dictee met Charley — woordenlijst per groep (9 sep 2026; wens van Djess
// via het wensenbord: "Djess wil graag een dictee doen").
//
// Opzet (Mark): korte zinnen. Charley zegt de hele zin, daarna "schrijf op het
// woord: …". Het kind ziet de zin met een gat en typt alleen dat woord. Bij een
// fout: het goede woord + de regel in één zin, in kindertaal.
//
// Categorieën volgen wat op school per groep aan bod komt (spellingcategorieën
// zoals in de gangbare methodes): groep 4 = klankzuiver + eerste regels;
// groep 5 = open/gesloten lettergreep, -ng/-nk, sch/ch; groep 6 = meervoud,
// -ig/-lijk, -isch, verkleinwoorden, leenwoorden; groep 7 = werkwoorden tt,
// 's-/-s, tussen-n, apostrof; groep 8 = vt/vd, voltooid deelwoord, hoofdletters,
// lastige leenwoorden. Elke groep ~20 items; een dictee pakt er 10 willekeurig.
// Velden: zin (met het doelwoord erin, hoofdletters/leestekens zoals in de zin),
// woord (exact zoals het in de zin staat), regel (kort), cat (label).

export const DICTEE = {
  4: [
    { zin: "De hond rent hard.", woord: "hond", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: hon-den.", cat: "d of t" },
    { zin: "Ik eet een broodje kaas.", woord: "kaas", regel: "Lange aa in een gesloten stuk: twee a's.", cat: "lange klank" },
    { zin: "De bal ligt in de tuin.", woord: "tuin", regel: "De ui-klank schrijf je als u-i.", cat: "tweetekenklank" },
    { zin: "Mijn zus is jarig.", woord: "jarig", regel: "Je hoort 'ug', je schrijft -ig.", cat: "-ig" },
    { zin: "Wij lopen naar het park.", woord: "park", regel: "Hoor je een k op het eind? Dan schrijf je ook een k.", cat: "klankzuiver" },
    { zin: "De kat slaapt op de bank.", woord: "bank", regel: "Een nk-woord: je hoort 'ngk', je schrijft n-k.", cat: "-nk" },
    { zin: "Ik zwaai naar de trein.", woord: "trein", regel: "Korte ei: een e en een i. Onthoud: t-r-e-i-n.", cat: "ei/ij" },
    { zin: "Het is koud buiten.", woord: "koud", regel: "Je hoort een t, maar je schrijft een d. Maak langer: kou-de.", cat: "d of t" },
    { zin: "De boot vaart over het water.", woord: "boot", regel: "Je hoort een lange oo en het woord eindigt op een medeklinker: dan schrijf je twee o's: b-oo-t.", cat: "lange klank" },
    { zin: "Oma bakt een appel.", woord: "appel", regel: "Korte a, daarna twee p's: anders lees je 'apel'.", cat: "dubbele medeklinker" },
    { zin: "Het schaap staat in de wei.", woord: "schaap", regel: "Sch-woord: s-c-h aan het begin.", cat: "sch" },
    { zin: "Ik lees een mooi boek.", woord: "boek", regel: "De oe-klank schrijf je als o-e.", cat: "tweetekenklank" },
    { zin: "De vogel zingt.", woord: "vogel", regel: "Open lettergreep: vo-gel, dus maar één o.", cat: "open lettergreep" },
    { zin: "Wij spelen op straat.", woord: "straat", regel: "Lange aa: twee a's, met s-t-r vooraan.", cat: "lange klank" },
    { zin: "De vis zwemt in de kom.", woord: "zwemt", regel: "Zwem + t, want het is hij/zij nu.", cat: "werkwoord nu" },
    { zin: "Ik heb een rode fiets.", woord: "fiets", regel: "De ie-klank schrijf je als i-e.", cat: "tweetekenklank" },
    { zin: "De zon schijnt fel.", woord: "schijnt", regel: "Sch aan het begin, lange ij, en een t op het eind.", cat: "sch + ij" },
    { zin: "Het kind lacht.", woord: "lacht", regel: "Je hoort 'lagt', je schrijft ch-t.", cat: "cht" },
    { zin: "Ik zie een muis.", woord: "muis", regel: "De ui-klank schrijf je als u-i.", cat: "tweetekenklank" },
    { zin: "De bloem is geel.", woord: "geel", regel: "Je hoort een lange ee en het woord eindigt op een medeklinker: dan schrijf je twee e's: g-ee-l.", cat: "lange klank" },
  ],
  5: [
    { zin: "De bakker verkoopt brood.", woord: "bakker", regel: "Korte a, dan twee k's: bak-ker.", cat: "dubbele medeklinker" },
    { zin: "Wij eten bananen.", woord: "bananen", regel: "Open lettergrepen: ba-na-nen, dus overal één letter.", cat: "open lettergreep" },
    { zin: "De ballon vliegt weg.", woord: "vliegt", regel: "Vlieg + t, want het is hij/zij nu.", cat: "werkwoord nu" },
    { zin: "Ik hoor een geluid.", woord: "geluid", regel: "Je hoort een t, maar het is een d: gelui-den.", cat: "d of t" },
    { zin: "De school begint om half negen.", woord: "school", regel: "Sch aan het begin en een lange oo.", cat: "sch" },
    { zin: "Mijn broer speelt gitaar.", woord: "gitaar", regel: "Gi-taar: open lettergreep met één i, lange aa met twee a's.", cat: "open lettergreep" },
    { zin: "De jongen is bang in het donker.", woord: "bang", regel: "Een ng-woord: je hoort één klank, je schrijft n-g.", cat: "-ng" },
    { zin: "De vlinder is prachtig.", woord: "prachtig", regel: "Ch-t in het midden en -ig op het eind, ook al hoor je 'ug'.", cat: "-ig" },
    { zin: "Ik lees een spannend verhaal.", woord: "spannend", regel: "Twee n's na de korte a, en een d op het eind: span-nen-de.", cat: "dubbele medeklinker" },
    { zin: "Het meisje lacht vrolijk.", woord: "vrolijk", regel: "Je hoort 'vrolluk', je schrijft -lijk.", cat: "-lijk" },
    { zin: "De trein rijdt langs de rivier.", woord: "rivier", regel: "Ri-vier: één i in de open lettergreep, dan ie.", cat: "open lettergreep" },
    { zin: "Wij gaan naar de bioscoop.", woord: "bioscoop", regel: "Bi-o-scoop: je hoort kop, maar je schrijft een c. En de laatste klank is lang, dus twee o's.", cat: "leenwoord" },
    { zin: "De kapper knipt mijn haar.", woord: "kapper", regel: "Korte a, dus twee p's: kap-per.", cat: "dubbele medeklinker" },
    { zin: "Het is een grappig verhaal.", woord: "grappig", regel: "Twee p's na de korte a, en -ig op het eind.", cat: "-ig" },
    { zin: "De auto staat in de garage.", woord: "garage", regel: "Een leenwoord uit het Frans: de g klinkt als 'zj', maar je schrijft g.", cat: "leenwoord" },
    { zin: "Ik vind dat een eerlijk antwoord.", woord: "eerlijk", regel: "Lange ee aan het begin, -lijk op het eind.", cat: "-lijk" },
    { zin: "De hond blaft naar de postbode.", woord: "postbode", regel: "Samenstelling: post + bode, aan elkaar.", cat: "samenstelling" },
    { zin: "De vogel zit in de boom.", woord: "vogel", regel: "Vo-gel: open lettergreep, dus één o.", cat: "open lettergreep" },
    { zin: "Ik wacht op de bus.", woord: "wacht", regel: "Je hoort 'wagt', je schrijft ch-t.", cat: "cht" },
    { zin: "De koning draagt een kroon.", woord: "koning", regel: "Ko-ning: één o, en -ng op het eind.", cat: "open lettergreep" },
  ],
  6: [
    { zin: "Er staan drie tafels in de klas.", woord: "tafels", regel: "Meervoud met -s: ta-fels, één a in de open lettergreep.", cat: "meervoud" },
    { zin: "De weg is glad en gevaarlijk.", woord: "gevaarlijk", regel: "-lijk op het eind, ook al hoor je 'luk'.", cat: "-lijk" },
    { zin: "Dat is een logisch antwoord.", woord: "logisch", regel: "Hoor je 'ies' op het eind? Schrijf -isch.", cat: "-isch" },
    { zin: "Het kleine hondje kwispelt.", woord: "hondje", regel: "Verkleinwoord: hond + je. De d blijft staan.", cat: "verkleinwoord" },
    { zin: "Wij spelen een spannende wedstrijd.", woord: "wedstrijd", regel: "Samenstelling wed + strijd, met lange ij.", cat: "samenstelling" },
    { zin: "De kinderen lachen om de grap.", woord: "kinderen", regel: "Meervoud met -eren.", cat: "meervoud" },
    { zin: "Mijn oma is heel gelukkig.", woord: "gelukkig", regel: "Twee k's na de korte u, en -ig op het eind.", cat: "-ig" },
    { zin: "Ik speel graag in het zwembad.", woord: "zwembad", regel: "Samenstelling zwem + bad. Je hoort t, je schrijft d: ba-den.", cat: "samenstelling" },
    { zin: "Het feest was fantastisch.", woord: "fantastisch", regel: "Hoor je 'ies'? Schrijf -isch. Drie letters: s-c-h.", cat: "-isch" },
    { zin: "De bloemetjes staan in de vaas.", woord: "bloemetjes", ook: ["bloempjes"], regel: "Verkleinwoord: bloem + etjes. Bloempjes mag ook.", cat: "verkleinwoord" },
    { zin: "Wij gaan op vakantie naar Frankrijk.", woord: "vakantie", regel: "Leenwoord: -tie klinkt als 'tsie', je schrijft t-i-e.", cat: "leenwoord" },
    { zin: "De computer staat aan.", woord: "computer", regel: "Engels leenwoord: c-o-m, ook al hoor je 'kom'.", cat: "leenwoord" },
    { zin: "De bibliotheek is vandaag open.", woord: "bibliotheek", regel: "Bi-bli-o-theek: met th in het midden en twee e's op het eind.", cat: "leenwoord" },
    { zin: "Zij is een vriendelijk meisje.", woord: "vriendelijk", regel: "Vriend + e + lijk. De d blijft staan.", cat: "-lijk" },
    { zin: "De eieren liggen in het nest.", woord: "eieren", regel: "Meervoud van ei met -eren.", cat: "meervoud" },
    { zin: "Het is een praktische oplossing.", woord: "praktische", regel: "-isch + e wordt -ische.", cat: "-isch" },
    { zin: "De politie helpt mensen.", woord: "politie", regel: "Leenwoord: -tie op het eind, je hoort 'tsie'.", cat: "leenwoord" },
    { zin: "Wij zingen liedjes in de klas.", woord: "liedjes", regel: "Verkleinwoord: lied + jes. De d blijft.", cat: "verkleinwoord" },
    { zin: "Ik ben een beetje moe.", woord: "beetje", regel: "Vaste schrijfwijze: b-e-e-t-j-e.", cat: "verkleinwoord" },
    { zin: "De aardappels zijn gaar.", woord: "aardappels", ook: ["aardappelen"], regel: "Je hoort aart, maar je schrijft aard: maak het langer, aar-de. Aardappelen mag ook.", cat: "meervoud" },
  ],
  7: [
    { zin: "Hij wordt morgen tien jaar.", woord: "wordt", regel: "Hij/zij nu: stam + t. Word + t = wordt.", cat: "werkwoord tt" },
    { zin: "Zij antwoordt altijd snel.", woord: "antwoordt", regel: "Stam antwoord + t: hij/zij nu krijgt -t, ook na een d.", cat: "werkwoord tt" },
    { zin: "Ik vind dit boek leuk.", woord: "vind", regel: "Ik-vorm = alleen de stam: vind, zonder t.", cat: "werkwoord tt" },
    { zin: "Ik zag mama's fiets buiten staan.", woord: "mama's", regel: "Van wie? Van mama. Na een lange klinker aan het eind komt apostrof + s.", cat: "apostrof" },
    { zin: "De pannenkoek smaakt heerlijk.", woord: "pannenkoek", regel: "Tussen-n: het meervoud is pannen, dus pannen-koek.", cat: "tussen-n" },
    { zin: "Het is bijna zomervakantie.", woord: "zomervakantie", regel: "Samenstelling zomer + vakantie, aan elkaar.", cat: "samenstelling" },
    { zin: "De auto's staan in de rij.", woord: "auto's", regel: "Meervoud na o, a, u, i, y: apostrof + s.", cat: "apostrof" },
    { zin: "Word jij ook zo moe?", woord: "Word", regel: "Jij achter het werkwoord: alleen de stam, zonder t.", cat: "werkwoord tt" },
    { zin: "Wij zoeken een verstopte schat.", woord: "verstopte", regel: "Voltooid deelwoord + e: verstop + t + e ('t kofschip).", cat: "'t kofschip" },
    { zin: "De kinderen verheugen zich op het feest.", woord: "verheugen", regel: "Eu-klank in het midden, -en op het eind.", cat: "klank" },
    { zin: "Zij vindt het spannend.", woord: "vindt", regel: "Zij nu: vind + t = vindt.", cat: "werkwoord tt" },
    { zin: "Het interview duurde een uur.", woord: "interview", regel: "Engels leenwoord: schrijf het zoals in het Engels.", cat: "leenwoord" },
    { zin: "De zonnebloem groeit hard.", woord: "zonnebloem", regel: "Zonnebloem is een onthoudwoord: je schrijft zonne, zonder n. Net als zonneschijn en zonnestraal.", cat: "tussen-e" },
    { zin: "Ik heb een cadeau gekregen.", woord: "cadeau", regel: "Frans leenwoord: -eau klinkt als 'oo'.", cat: "leenwoord" },
    { zin: "Hij verhuist volgende week.", woord: "verhuist", regel: "Hij nu: verhuis + t.", cat: "werkwoord tt" },
    { zin: "De boekenkast is vol.", woord: "boekenkast", regel: "Tussen-n: het meervoud is boeken, dus boeken-kast.", cat: "tussen-n" },
    { zin: "Het chocolaatje was lekker.", woord: "chocolaatje", regel: "Verkleinwoord van chocola: dubbele a + tje.", cat: "verkleinwoord" },
    { zin: "De agent regelt het verkeer.", woord: "regelt", regel: "Hij nu: regel + t.", cat: "werkwoord tt" },
    { zin: "Wij bezoeken het museum.", woord: "museum", regel: "Latijns leenwoord: mu-se-um.", cat: "leenwoord" },
    { zin: "Zij houdt van paarden.", woord: "houdt", regel: "Zij nu: houd + t = houdt.", cat: "werkwoord tt" },
  ],
  8: [
    { zin: "Gisteren speelde ik buiten.", woord: "speelde", regel: "Verleden tijd: speel + de ('t kofschip: l staat er niet in, dus -de).", cat: "verleden tijd" },
    { zin: "Hij heeft zijn tas gepakt.", woord: "gepakt", regel: "Voltooid deelwoord: ge + pak + t (k staat in 't kofschip).", cat: "voltooid deelwoord" },
    { zin: "Wij hebben lang gewacht.", woord: "gewacht", regel: "Voltooid deelwoord: ge + wacht + t? Nee: de stam eindigt al op t, dus alleen gewacht.", cat: "voltooid deelwoord" },
    { zin: "Zij antwoordde niet meteen.", woord: "antwoordde", regel: "Verleden tijd: antwoord + de. Twee d's.", cat: "verleden tijd" },
    { zin: "Het feest werd gevierd.", woord: "gevierd", regel: "Voltooid deelwoord: ge + vier + d (r staat niet in 't kofschip).", cat: "voltooid deelwoord" },
    { zin: "In Amsterdam wonen veel mensen.", woord: "Amsterdam", regel: "Namen van plaatsen krijgen een hoofdletter.", cat: "hoofdletter" },
    { zin: "De Nederlandse vlag is rood, wit en blauw.", woord: "Nederlandse", regel: "Woorden die van een land komen krijgen een hoofdletter.", cat: "hoofdletter" },
    { zin: "Hij verbrandde zijn vinger.", woord: "verbrandde", regel: "Verleden tijd: verbrand + de. Twee d's.", cat: "verleden tijd" },
    { zin: "De brandweer bluste het vuur.", woord: "bluste", regel: "Verleden tijd: blus + te (s staat in 't kofschip).", cat: "verleden tijd" },
    { zin: "Zij is naar het buitenland verhuisd.", woord: "verhuisd", regel: "Voltooid deelwoord: verhuis + d, want verhuizen (z niet in 't kofschip).", cat: "voltooid deelwoord" },
    { zin: "Het cadeau was een verrassing.", woord: "verrassing", regel: "Twee r's en twee s's: ver-ras-sing.", cat: "dubbele medeklinker" },
    { zin: "De regering neemt een besluit.", woord: "regering", regel: "Re-ge-ring: open lettergrepen, één e.", cat: "open lettergreep" },
    { zin: "Ik heb de hele dag gefietst.", woord: "gefietst", regel: "Voltooid deelwoord: ge + fiets + t (s staat in 't kofschip).", cat: "voltooid deelwoord" },
    { zin: "Zij heeft een interessant idee.", woord: "interessant", regel: "Leenwoord: dubbele s, en -ant op het eind.", cat: "leenwoord" },
    { zin: "De minister-president sprak op tv.", woord: "minister-president", regel: "Samenstelling van twee gelijke delen: met een streepje.", cat: "streepje" },
    { zin: "Het onderzoek is afgerond.", woord: "afgerond", regel: "Voltooid deelwoord: af + ge + rond. De stam eindigt al op een d, dus er komt geen tweede d bij.", cat: "voltooid deelwoord" },
    { zin: "Zij heeft de brief al beantwoord.", woord: "beantwoord", regel: "Voltooid deelwoord zonder ge- (be-): stam beantwoord, geen extra d of t.", cat: "voltooid deelwoord" },
    { zin: "De Tweede Kamer vergadert vandaag.", woord: "vergadert", regel: "Hij/zij nu: vergader + t.", cat: "werkwoord tt" },
    { zin: "De toets was moeilijker dan gedacht.", woord: "moeilijker", regel: "Moei-lij-ker: -lijk + er.", cat: "-lijk" },
    { zin: "Hij vertrouwde zijn vriend.", woord: "vertrouwde", regel: "Verleden tijd: vertrouw + de (w niet in 't kofschip).", cat: "verleden tijd" },
  ],
};

export const GROEPEN = [4, 5, 6, 7, 8];

/** kies n items voor een groep; recente woorden (localStorage) eerst mijden */
export function kiesDictee(groep, n = 10) {
  const lijst = DICTEE[groep] || DICTEE[6];
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem("lk_dictee_recent") || "[]"); } catch { /* */ }
  const vers = lijst.filter((it) => !recent.includes(it.woord));
  const bron = vers.length >= n ? vers : lijst;
  const kopie = bron.slice();
  for (let i = kopie.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [kopie[i], kopie[j]] = [kopie[j], kopie[i]]; }
  const gekozen = kopie.slice(0, n);
  try { localStorage.setItem("lk_dictee_recent", JSON.stringify([...gekozen.map((g) => g.woord), ...recent].slice(0, 25))); } catch { /* */ }
  return gekozen;
}

/** vergelijk het getypte woord met het doelwoord; geeft per letter goed/fout */
export function vergelijk(getypt, doel, ook = []) {
  const a = String(getypt || "").trim();
  const norm = (s) => s.toLowerCase().replace(/[.,!?;:]+$/, "");
  // tweede opinie 9 sep 2026: ook goede varianten goed rekenen (bloempjes, aardappelen)
  const hoofdletterOk = doel[0] !== doel[0].toUpperCase() || a[0] === doel[0];
  const goed = (norm(a) === norm(doel) && hoofdletterOk) || (ook || []).some((v) => norm(a) === norm(v));
  // letter-voor-letter (eenvoudig: op positie), voor het rood/groen maken
  const letters = [];
  const L = Math.max(a.length, doel.length);
  for (let i = 0; i < L; i++) letters.push({ d: doel[i] || "", g: a[i] || "", ok: (a[i] || "").toLowerCase() === (doel[i] || "").toLowerCase() });
  return { goed, letters };
}
