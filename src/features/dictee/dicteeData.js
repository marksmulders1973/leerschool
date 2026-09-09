// ✍️ Dictee met Charley — woordenlijst per groep (9 sep 2026; wens van Djess
// via het wensenbord: "Djess wil graag een dictee doen").
//
// Opzet (Mark): korte zinnen. Charley zegt de hele zin, daarna "schrijf op het
// woord: …". Het kind ziet de zin met een gat en typt alleen dat woord. Bij een
// fout: het goede woord + de regel in één zin, in kindertaal.
//
// Herijkt 9 sep 2026 (avond) na een tweede opinie (leerkracht/taalspecialist,
// cijfer 6,5 → doel 8): niveaus per groep langs de Nederlandse spellingleerlijn
// (Staal/Taal actief/SLO), duplicaten eruit, ontbrekende categorieën erbij
// (f→v/s→z, -heid, au/ou, verkleinwoord-keuze, hoofdletters vanaf groep 5,
// trema, tussen-s, gebeurd/gebeurt), en elke regel in één vast patroon:
// wat hoor je → wat schrijf je → hoe check je het. Eén regel = één struikelblok.
//
// Groep 4 = klankgroepen + eerste regels (d/t verlengen, cht, -ng/-nk, aai/ooi/oei,
//   eeuw/ieuw, au/ou en ei/ij als onthoudwoord, verdubbelaar aan het eind).
// Groep 5 = open/gesloten lettergreep, -ig/-lijk, f→v/s→z, verkleinwoorden,
//   hoofdletters bij namen, verlengen bij bijvoeglijke naamwoorden.
// Groep 6 = -isch, -heid, c als k of s, -tje/-pje/-kje, trema, voorvoegsels,
//   leenwoorden, eerste werkwoordvormen (hij/zij nu).
// Groep 7 = werkwoorden tegenwoordige tijd (t, dt, jij-omkering), verleden tijd
//   zwak, apostrof, tussen-n/-s, hoofdletters bij talen/feestdagen, klinkerbotsing.
// Groep 8 = voltooid deelwoord ('t kofschip), gebeurd/gebeurt, vd + e, Engelse
//   werkwoorden, trema, lastige leenwoorden.
// Elke groep 30 items; een dictee pakt er 10 willekeurig (recente eerst mijden).
// Velden: zin, woord (exact zoals in de zin), regel (kort), cat (label),
// ook (optioneel: andere goede schrijfwijzen, bv. bloempjes).

export const DICTEE = {
  4: [
    { zin: "De hond rent hard.", woord: "hond", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: hon-den.", cat: "d of t" },
    { zin: "Het is koud buiten.", woord: "koud", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: kou-de.", cat: "d of t" },
    { zin: "Het paard eet gras.", woord: "paard", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: paar-den.", cat: "d of t" },
    { zin: "Ik stoot mijn hoofd.", woord: "hoofd", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: hoof-den.", cat: "d of t" },
    { zin: "Ik lig in mijn bed.", woord: "bed", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: bed-den.", cat: "d of t" },
    { zin: "Ik eet een broodje kaas.", woord: "kaas", regel: "Je hoort een lange aa en het woord eindigt op een medeklinker: dan schrijf je twee a's: k-aa-s.", cat: "lange klank" },
    { zin: "De boot vaart over het water.", woord: "boot", regel: "Je hoort een lange oo en het woord eindigt op een medeklinker: dan schrijf je twee o's: b-oo-t.", cat: "lange klank" },
    { zin: "De bloem is geel.", woord: "geel", regel: "Je hoort een lange ee en het woord eindigt op een medeklinker: dan schrijf je twee e's: g-ee-l.", cat: "lange klank" },
    { zin: "Ik was mijn handen met zeep.", woord: "zeep", regel: "Je hoort een lange ee en het woord eindigt op een medeklinker: twee e's: z-ee-p.", cat: "lange klank" },
    { zin: "Ik eet een boterham met brood.", woord: "brood", regel: "Lange oo, dus twee o's. En op het eind een d: maak het langer, bro-den.", cat: "lange klank" },
    { zin: "De kat slaapt op de bank.", woord: "bank", regel: "Een nk-woord: je hoort ngk, maar je schrijft n-k.", cat: "-nk" },
    { zin: "Ik draag een ring.", woord: "ring", regel: "Een ng-woord: je hoort één klank, maar je schrijft twee letters: n-g.", cat: "-ng" },
    { zin: "Ik zwaai naar de trein.", woord: "trein", regel: "Trein schrijf je met de korte ei. Je hoort het verschil met ij niet: onthoudwoord.", cat: "ei/ij" },
    { zin: "Ik kijk naar de lucht.", woord: "kijk", regel: "Kijk schrijf je met de lange ij. Onthoudwoord.", cat: "ei/ij" },
    { zin: "De lucht is blauw.", woord: "blauw", regel: "Blauw schrijf je met au. Au en ou klinken hetzelfde: dit moet je onthouden.", cat: "au/ou" },
    { zin: "De vrouw loopt naar buiten.", woord: "vrouw", regel: "Vrouw schrijf je met ou. Onthoudwoord.", cat: "au/ou" },
    { zin: "Het schaap staat in de wei.", woord: "schaap", regel: "Je hoort sg aan het begin, maar je schrijft s-c-h.", cat: "sch" },
    { zin: "De school begint om half negen.", woord: "school", regel: "Je hoort sg aan het begin, maar je schrijft s-c-h. Daarna een lange oo: twee o's.", cat: "sch" },
    { zin: "In de nacht is het donker.", woord: "nacht", regel: "Je hoort nagt, maar je schrijft ch-t.", cat: "cht" },
    { zin: "Doe het licht aan.", woord: "licht", regel: "Je hoort ligt, maar je schrijft ch-t.", cat: "cht" },
    { zin: "De koeien staan in de wei.", woord: "koeien", regel: "Hoor je oei? Dan schrijf je o-e-i.", cat: "aai/ooi/oei" },
    { zin: "Ik vind die tekening mooi.", woord: "mooi", regel: "Hoor je ooi? Dan schrijf je o-o-i.", cat: "aai/ooi/oei" },
    { zin: "In de zee zwemt een haai.", woord: "haai", regel: "Hoor je aai? Dan schrijf je a-a-i.", cat: "aai/ooi/oei" },
    { zin: "De leeuw brult hard.", woord: "leeuw", regel: "Na eeu komt altijd een w: l-eeu-w.", cat: "eeuw/ieuw" },
    { zin: "Ik heb een nieuw boek.", woord: "nieuw", regel: "Na ieu komt altijd een w: n-ieu-w.", cat: "eeuw/ieuw" },
    { zin: "Het weer is mooi vandaag.", woord: "weer", regel: "Hoor je eer? Dan schrijf je twee e's en een r: w-ee-r.", cat: "eer/oor/eur" },
    { zin: "De deur staat open.", woord: "deur", regel: "Hoor je eur? Dan schrijf je e-u-r.", cat: "eer/oor/eur" },
    { zin: "Ik hoor het met mijn oor.", woord: "oor", regel: "Hoor je oor? Dan schrijf je twee o's en een r.", cat: "eer/oor/eur" },
    { zin: "Oma bakt een appel.", woord: "appel", regel: "Korte a, daarna twee p's. Met één p lees je apel.", cat: "dubbele medeklinker" },
    { zin: "Ik speel op mijn fluit.", woord: "fluit", regel: "Hoor je ui? Dan schrijf je u-i.", cat: "tweetekenklank" },
  ],
  5: [
    { zin: "Wij eten bananen.", woord: "bananen", regel: "Open lettergrepen: ba-na-nen. Elk stuk eindigt op een lange klank, dus overal één a.", cat: "open lettergreep" },
    { zin: "De vogel zit in de boom.", woord: "vogel", regel: "Vo-gel: het stuk vo eindigt op de klank, dus één o.", cat: "open lettergreep" },
    { zin: "De koning draagt een kroon.", woord: "koning", regel: "Ko-ning: één o, want het stuk ko eindigt op de klank. En -ng op het eind.", cat: "open lettergreep" },
    { zin: "Er staan drie tafels in de klas.", woord: "tafels", regel: "Ta-fels: één a, want het stuk ta eindigt op de klank.", cat: "open lettergreep" },
    { zin: "Wij lopen naar huis.", woord: "lopen", regel: "Lo-pen: één o, want het stuk lo eindigt op de klank.", cat: "open lettergreep" },
    { zin: "De bakker verkoopt brood.", woord: "bakker", regel: "Korte a, dan twee k's: bak-ker. Met één k zou je baker lezen.", cat: "dubbele medeklinker" },
    { zin: "Ik lees een spannend verhaal.", woord: "spannend", regel: "Korte a, dus twee n's: span-nend. Met één n zou je spanend lezen.", cat: "dubbele medeklinker" },
    { zin: "De kinderen lachen om de grap.", woord: "kinderen", regel: "Meervoud van kind: kind + eren.", cat: "meervoud" },
    { zin: "Mijn zus is jarig.", woord: "jarig", regel: "Je hoort ug op het eind, maar je schrijft -ig.", cat: "-ig" },
    { zin: "De vlinder is prachtig.", woord: "prachtig", regel: "Je hoort ug op het eind, maar je schrijft -ig.", cat: "-ig" },
    { zin: "Het is een grappig verhaal.", woord: "grappig", regel: "Je hoort ug op het eind, maar je schrijft -ig. En twee p's na de korte a.", cat: "-ig" },
    { zin: "Mijn oma is heel gelukkig.", woord: "gelukkig", regel: "Je hoort ug op het eind, maar je schrijft -ig.", cat: "-ig" },
    { zin: "Het meisje lacht vrolijk.", woord: "vrolijk", regel: "Je hoort luk op het eind, maar je schrijft -lijk.", cat: "-lijk" },
    { zin: "Ik vind dat een eerlijk antwoord.", woord: "eerlijk", regel: "Je hoort luk op het eind, maar je schrijft -lijk.", cat: "-lijk" },
    { zin: "De weg is glad en gevaarlijk.", woord: "gevaarlijk", regel: "Je hoort luk op het eind, maar je schrijft -lijk.", cat: "-lijk" },
    { zin: "De duiven vliegen weg.", woord: "duiven", regel: "Eén duif, twee duiven: de f wordt een v.", cat: "f wordt v" },
    { zin: "In de straat staan mooie huizen.", woord: "huizen", regel: "Eén huis, twee huizen: de s wordt een z.", cat: "s wordt z" },
    { zin: "De wolven huilen in het bos.", woord: "wolven", regel: "Eén wolf, twee wolven: de f wordt een v.", cat: "f wordt v" },
    { zin: "Het kleine hondje kwispelt.", woord: "hondje", regel: "Verkleinwoord: hond + je. De d blijft staan, ook al hoor je een t.", cat: "verkleinwoord" },
    { zin: "In de tuin staat een klein boompje.", woord: "boompje", regel: "Woorden die op een m eindigen krijgen -pje: boom + pje.", cat: "verkleinwoord" },
    { zin: "Ik heb nog een kwartje.", woord: "kwartje", regel: "Woorden die op een t eindigen krijgen -je: kwart + je.", cat: "verkleinwoord" },
    { zin: "Ik ben een beetje moe.", woord: "beetje", regel: "Woorden die op een t eindigen krijgen -je: beet + je.", cat: "verkleinwoord" },
    { zin: "Het meisje heeft een lange vlecht.", woord: "meisje", regel: "Meisje schrijf je met de korte ei. Onthoudwoord.", cat: "ei/ij" },
    { zin: "De prijs staat op het bord.", woord: "prijs", regel: "Prijs schrijf je met de lange ij. Onthoudwoord.", cat: "ei/ij" },
    { zin: "Mijn zus heet Sanne.", woord: "Sanne", regel: "Namen van mensen krijgen een hoofdletter.", cat: "hoofdletter" },
    { zin: "Wij wonen in Utrecht.", woord: "Utrecht", regel: "Namen van plaatsen krijgen een hoofdletter.", cat: "hoofdletter" },
    { zin: "Het pad is breed.", woord: "breed", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: bre-de.", cat: "d of t" },
    { zin: "De thee is nog heet.", woord: "heet", regel: "Maak het langer: he-te. Je hoort een t en je schrijft een t.", cat: "d of t" },
    { zin: "Ik wacht op de bus.", woord: "wacht", regel: "Je hoort wagt, maar je schrijft ch-t.", cat: "cht" },
    { zin: "Ik hoor een geluid.", woord: "geluid", regel: "Je hoort een t, maar je schrijft een d. Maak het langer: gelui-den.", cat: "d of t" },
  ],
  6: [
    { zin: "Dat is een logisch antwoord.", woord: "logisch", regel: "Je hoort ies op het eind van een woord dat iets beschrijft: dan schrijf je -isch. De ch hoor je niet.", cat: "-isch" },
    { zin: "Het feest was fantastisch.", woord: "fantastisch", regel: "Je hoort ies op het eind, maar je schrijft -isch. De ch hoor je niet.", cat: "-isch" },
    { zin: "Wij spelen twee spannende wedstrijden.", woord: "wedstrijden", regel: "Je hoort wedstrijt, maar je schrijft een d: maak het langer, wedstrij-den.", cat: "d of t" },
    { zin: "Ik speel graag in het zwembad.", woord: "zwembad", regel: "Je hoort zwembat, maar je schrijft een d: maak het langer, ba-den.", cat: "d of t" },
    { zin: "Wij gaan op vakantie naar Frankrijk.", woord: "vakantie", regel: "Je hoort tsie op het eind, maar je schrijft t-i-e.", cat: "leenwoord" },
    { zin: "De politie helpt mensen.", woord: "politie", regel: "Je hoort tsie op het eind, maar je schrijft t-i-e.", cat: "leenwoord" },
    { zin: "De computer staat aan.", woord: "computer", regel: "Engels woord: je hoort kompjoeter, maar je schrijft c-o-m-p-u-t-e-r.", cat: "leenwoord" },
    { zin: "De bibliotheek is vandaag open.", woord: "bibliotheek", regel: "Je hoort een t in het midden, maar je schrijft t-h: biblio-theek.", cat: "leenwoord" },
    { zin: "Wij bezoeken het museum.", woord: "museum", regel: "Je hoort een z in het midden, maar je schrijft een s: mu-se-um.", cat: "leenwoord" },
    { zin: "De auto staat in de garage.", woord: "garage", regel: "Ga-ra-ge: de tweede g klinkt als zj, maar je schrijft toch een g.", cat: "leenwoord" },
    { zin: "Wij gaan naar de bioscoop.", woord: "bioscoop", regel: "Bi-o-scoop: je hoort een k, maar je schrijft een c. En de laatste klank is lang: twee o's.", cat: "leenwoord" },
    { zin: "Teken een cirkel op het bord.", woord: "cirkel", regel: "Voor een i of een e klinkt de c als een s: cirkel.", cat: "c als s" },
    { zin: "De camera staat op tafel.", woord: "camera", regel: "Voor een a, o of u klinkt de c als een k: camera.", cat: "c als k" },
    { zin: "Zij is een vriendelijk meisje.", woord: "vriendelijk", regel: "Vriend + e + lijk. De d van vriend blijft staan.", cat: "-lijk" },
    { zin: "De eieren liggen in het nest.", woord: "eieren", regel: "Meervoud van ei: ei + eren.", cat: "meervoud" },
    { zin: "Wij zingen liedjes in de klas.", woord: "liedjes", regel: "Verkleinwoord: lied + jes. De d blijft staan, ook al hoor je een t.", cat: "verkleinwoord" },
    { zin: "De bloemetjes staan in de vaas.", woord: "bloemetjes", ook: ["bloempjes"], regel: "Verkleinwoord: bloem + etjes. Bloempjes mag ook.", cat: "verkleinwoord" },
    { zin: "Ik stootte mijn duimpje.", woord: "duimpje", regel: "Woorden die op een m eindigen krijgen -pje: duim + pje.", cat: "verkleinwoord" },
    { zin: "In het verhaal komt een klein koninkje voor.", woord: "koninkje", regel: "Woorden op -ing krijgen -kje: koning wordt konin-kje.", cat: "verkleinwoord" },
    { zin: "De aardappels zijn gaar.", woord: "aardappels", ook: ["aardappelen"], regel: "Je hoort aart, maar je schrijft aard: maak het langer, aar-de. Aardappelen mag ook.", cat: "d of t" },
    { zin: "Je moet altijd de waarheid vertellen.", woord: "waarheid", regel: "Je hoort hijd op het eind, maar je schrijft -heid, met de korte ei.", cat: "-heid" },
    { zin: "De auto rijdt met hoge snelheid.", woord: "snelheid", regel: "-heid schrijf je altijd met de korte ei, ook al hoor je hijd.", cat: "-heid" },
    { zin: "We waren met zijn tweeën.", woord: "tweeën", regel: "Twee e's die je apart uitspreekt: puntjes op de tweede e, twee-ën.", cat: "trema" },
    { zin: "Ik heb schaafwonden op mijn knieën.", woord: "knieën", regel: "Na knie begin je opnieuw met een e: puntjes op die e, knie-ën.", cat: "trema" },
    { zin: "Het verhaal was heel verrassend.", woord: "verrassend", regel: "Ver + rassend: het voorvoegsel ver- en dan rassend, dus twee r's.", cat: "voorvoegsel" },
    { zin: "Zij is heel behulpzaam.", woord: "behulpzaam", regel: "Be + hulp + zaam: het voorvoegsel be- schrijf je met een e, ook al hoor je bu.", cat: "voorvoegsel" },
    { zin: "De vis zwemt in de kom.", woord: "zwemt", regel: "Hij of zij nu: stam + t. Zwem + t.", cat: "werkwoord nu" },
    { zin: "De ballon vliegt weg.", woord: "vliegt", regel: "Hij of zij nu: stam + t. Vlieg + t.", cat: "werkwoord nu" },
    { zin: "De zon schijnt fel.", woord: "schijnt", regel: "Hij of zij nu: stam + t. Schijn + t.", cat: "werkwoord nu" },
    { zin: "De toets was moeilijker dan gedacht.", woord: "moeilijker", regel: "Moeilijk + er: je hoort luk, maar je schrijft -lijk.", cat: "-lijk" },
  ],
  7: [
    { zin: "Hij wordt morgen tien jaar.", woord: "wordt", regel: "Hij of zij nu: stam + t. Word + t is wordt.", cat: "werkwoord tt" },
    { zin: "Zij antwoordt altijd snel.", woord: "antwoordt", regel: "Hij of zij nu: stam + t. Antwoord + t, dus dt.", cat: "werkwoord tt" },
    { zin: "Zij vindt het spannend.", woord: "vindt", regel: "Hij of zij nu: stam + t. Vind + t is vindt.", cat: "werkwoord tt" },
    { zin: "Zij houdt van paarden.", woord: "houdt", regel: "Hij of zij nu: stam + t. Houd + t is houdt.", cat: "werkwoord tt" },
    { zin: "Ik vind dit boek leuk.", woord: "vind", regel: "Ik-vorm is alleen de stam: vind, zonder t.", cat: "werkwoord tt" },
    { zin: "Waarom word jij zo snel moe?", woord: "word", regel: "Staat jij achter het werkwoord? Dan alleen de stam, zonder t.", cat: "werkwoord tt" },
    { zin: "Hij verhuist volgende week.", woord: "verhuist", regel: "Hij of zij nu: stam + t. Verhuis + t.", cat: "werkwoord tt" },
    { zin: "De agent regelt het verkeer.", woord: "regelt", regel: "Hij of zij nu: stam + t. Regel + t.", cat: "werkwoord tt" },
    { zin: "De Tweede Kamer vergadert vandaag.", woord: "vergadert", regel: "Hij of zij nu: stam + t. Vergader + t.", cat: "werkwoord tt" },
    { zin: "Hij praat veel te hard.", woord: "praat", regel: "De stam praat eindigt al op een t: er komt geen tweede t bij.", cat: "werkwoord tt" },
    { zin: "Zij zet haar tas op de grond.", woord: "zet", regel: "De stam zet eindigt al op een t: er komt geen tweede t bij.", cat: "werkwoord tt" },
    { zin: "Vorige week werkte papa thuis.", woord: "werkte", regel: "Verleden tijd: werk + te, want de k zit in 't kofschip.", cat: "verleden tijd" },
    { zin: "Ik leerde gisteren mijn woordjes.", woord: "leerde", regel: "Verleden tijd: leer + de, want de r zit niet in 't kofschip.", cat: "verleden tijd" },
    { zin: "Ik zag mama's fiets buiten staan.", woord: "mama's", regel: "Van wie? Van mama. Na een lange klinker aan het eind komt apostrof + s.", cat: "apostrof" },
    { zin: "De auto's staan in de rij.", woord: "auto's", regel: "Meervoud na een losse a, o, u, i of y: apostrof + s.", cat: "apostrof" },
    { zin: "Mijn hobby's zijn voetbal en tekenen.", woord: "hobby's", regel: "Meervoud na een y: apostrof + s.", cat: "apostrof" },
    { zin: "De pannenkoek smaakt heerlijk.", woord: "pannenkoek", regel: "Tussen-n: het meervoud is pannen, dus pannen-koek.", cat: "tussen-n" },
    { zin: "De boekenkast is vol.", woord: "boekenkast", regel: "Tussen-n: het meervoud is boeken, dus boeken-kast.", cat: "tussen-n" },
    { zin: "Mijn vriendinnen komen eten.", woord: "vriendinnen", regel: "Meervoud: vriendin + nen. Korte i, dus twee n's.", cat: "dubbele medeklinker" },
    { zin: "De zonnebloem groeit hard.", woord: "zonnebloem", regel: "Zonnebloem is een onthoudwoord: je schrijft zonne, zonder n. Net als zonneschijn en zonnestraal.", cat: "tussen-e" },
    { zin: "Wij fietsen over het stationsplein.", woord: "stationsplein", regel: "Hoor je een s tussen de twee delen? Die schrijf je ook: station + s + plein.", cat: "tussen-s" },
    { zin: "De dorpsstraat is smal.", woord: "dorpsstraat", regel: "Dorp + s + straat: de s die je hoort schrijf je erbij, dus drie s'en achter elkaar.", cat: "tussen-s" },
    { zin: "Het is bijna zomervakantie.", woord: "zomervakantie", regel: "Samenstelling: zomer + vakantie, aan elkaar. En tsie schrijf je als t-i-e.", cat: "samenstelling" },
    { zin: "Het chocolaatje was lekker.", woord: "chocolaatje", regel: "Verkleinwoord van chocola: de lange aa krijgt twee a's, dan -tje.", cat: "verkleinwoord" },
    { zin: "Ik heb een cadeau gekregen.", woord: "cadeau", regel: "Frans woord: je hoort oo op het eind, maar je schrijft e-a-u.", cat: "leenwoord" },
    { zin: "Het interview duurde een uur.", woord: "interview", regel: "Engels woord: je hoort vjoe op het eind, maar je schrijft v-i-e-w.", cat: "leenwoord" },
    { zin: "Op school spreken wij Nederlands.", woord: "Nederlands", regel: "Namen van talen krijgen een hoofdletter.", cat: "hoofdletter" },
    { zin: "Met Pasen zoeken wij eieren.", woord: "Pasen", regel: "Feestdagen krijgen een hoofdletter.", cat: "hoofdletter" },
    { zin: "We zagen een zee-eend in de sloot.", woord: "zee-eend", regel: "Botsen twee dezelfde klinkers? Zet er een streepje tussen: zee-eend.", cat: "streepje" },
    { zin: "Wij spelen buiten tot het donker wordt.", woord: "buiten", regel: "Bui-ten: het stuk bui eindigt op de klank, dus één klinker en daarna -ten.", cat: "open lettergreep" },
  ],
  8: [
    { zin: "Gisteren speelde ik buiten.", woord: "speelde", regel: "Verleden tijd: speel + de, want de l zit niet in 't kofschip.", cat: "verleden tijd" },
    { zin: "Zij antwoordde niet meteen.", woord: "antwoordde", regel: "Verleden tijd: antwoord + de. Twee d's achter elkaar.", cat: "verleden tijd" },
    { zin: "Hij verbrandde zijn vinger.", woord: "verbrandde", regel: "Verleden tijd: verbrand + de. Twee d's achter elkaar.", cat: "verleden tijd" },
    { zin: "De brandweer bluste het vuur.", woord: "bluste", regel: "Verleden tijd: blus + te, want de s zit in 't kofschip.", cat: "verleden tijd" },
    { zin: "Hij vertrouwde zijn vriend.", woord: "vertrouwde", regel: "Verleden tijd: vertrouw + de, want de w zit niet in 't kofschip.", cat: "verleden tijd" },
    { zin: "Hij heeft zijn tas gepakt.", woord: "gepakt", regel: "Voltooid deelwoord: ge + pak + t, want de k zit in 't kofschip.", cat: "voltooid deelwoord" },
    { zin: "Wij hebben lang gewacht.", woord: "gewacht", regel: "Voltooid deelwoord: ge + wacht. De stam eindigt al op een t, dus er komt geen tweede t bij.", cat: "voltooid deelwoord" },
    { zin: "Het feest werd gevierd.", woord: "gevierd", regel: "Voltooid deelwoord: ge + vier + d, want de r zit niet in 't kofschip.", cat: "voltooid deelwoord" },
    { zin: "Zij is naar het buitenland verhuisd.", woord: "verhuisd", regel: "Voltooid deelwoord: verhuis + d. Kijk naar verhuizen: de z zit niet in 't kofschip.", cat: "voltooid deelwoord" },
    { zin: "Ik heb de hele dag gefietst.", woord: "gefietst", regel: "Voltooid deelwoord: ge + fiets + t, want de s zit in 't kofschip.", cat: "voltooid deelwoord" },
    { zin: "Het onderzoek is afgerond.", woord: "afgerond", regel: "Voltooid deelwoord: af + ge + rond. De stam eindigt al op een d, dus er komt geen tweede d bij.", cat: "voltooid deelwoord" },
    { zin: "Zij heeft de brief al beantwoord.", woord: "beantwoord", regel: "Voltooid deelwoord zonder ge-, want het begint met be-. De stam eindigt al op een d: niets erbij.", cat: "voltooid deelwoord" },
    { zin: "Wat is er gisteren gebeurd?", woord: "gebeurd", regel: "Het is al klaar: voltooid deelwoord. Ge + beur + d, want de r zit niet in 't kofschip.", cat: "gebeurd/gebeurt" },
    { zin: "Er gebeurt hier nooit iets.", woord: "gebeurt", regel: "Het gebeurt nu: stam + t. Gebeur + t.", cat: "gebeurd/gebeurt" },
    { zin: "Jij wordt later vast dokter.", woord: "wordt", regel: "Staat jij vóór het werkwoord? Dan wel een t: jij wordt.", cat: "werkwoord tt" },
    { zin: "Waarom vind jij dat?", woord: "vind", regel: "Staat jij achter het werkwoord? Dan alleen de stam, zonder t.", cat: "werkwoord tt" },
    { zin: "Wij zoeken een verstopte schat.", woord: "verstopte", regel: "Eerst 't kofschip: verstop + t is verstopt. Dan + e: verstopte.", cat: "vd + e" },
    { zin: "Hij liet de geverfde deur zien.", woord: "geverfde", regel: "Eerst 't kofschip: verf + d? Nee, de f zit erin, dus geverfd. Dan + e: geverfde.", cat: "vd + e" },
    { zin: "De gestolen fiets is terecht.", woord: "gestolen", regel: "Sterk werkwoord: stelen wordt gestolen, met -en op het eind.", cat: "vd sterk" },
    { zin: "Ik heb je gisteren gemaild.", woord: "gemaild", regel: "Engels werkwoord: mail + d, want de l zit niet in 't kofschip.", cat: "vd Engels" },
    { zin: "Hij heeft twee keer gescoord.", woord: "gescoord", regel: "Engels werkwoord: scoor + d, want de r zit niet in 't kofschip.", cat: "vd Engels" },
    { zin: "Op de kaart staan drie zeeën.", woord: "zeeën", regel: "Twee e's die je apart zegt: puntjes op de tweede e, zee-ën.", cat: "trema" },
    { zin: "Zij was geërgerd over het lawaai.", woord: "geërgerd", regel: "Ge + ergerd: de e's botsen, dus puntjes op de tweede e.", cat: "trema" },
    { zin: "De Nederlandse vlag is rood, wit en blauw.", woord: "Nederlandse", regel: "Een woord dat van een land of plaats komt, krijgt een hoofdletter: Nederlandse, Amsterdamse.", cat: "hoofdletter" },
    { zin: "Het cadeau was een verrassing.", woord: "verrassing", regel: "Ver + rassing: het voorvoegsel ver- en dan rassing, dus twee r's en twee s'en.", cat: "voorvoegsel" },
    { zin: "Zij heeft een interessant idee.", woord: "interessant", regel: "Eén r na de i, en twee s'en: in-te-res-sant. Interressant is fout.", cat: "leenwoord" },
    { zin: "Kom onmiddellijk hier!", woord: "onmiddellijk", regel: "Twee d's én twee l's: on-mid-del-lijk. En -lijk op het eind.", cat: "dubbele medeklinker" },
    { zin: "De juf was enthousiast over de toets.", woord: "enthousiast", regel: "Je hoort entoesiast, maar je schrijft t-h en o-u: en-thou-si-ast.", cat: "leenwoord" },
    { zin: "Wij lazen een tekst over identiteit.", woord: "identiteit", regel: "-teit schrijf je met de korte ei, ook al hoor je tijt.", cat: "-teit" },
    { zin: "Welke hoeveelheid suiker heb je nodig?", woord: "hoeveelheid", regel: "-heid schrijf je met de korte ei, ook al hoor je hijd.", cat: "-heid" },
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
  const keuze = kopie.slice(0, n);
  try { localStorage.setItem("lk_dictee_recent", JSON.stringify([...keuze.map((k) => k.woord), ...recent].slice(0, 25))); } catch { /* */ }
  return keuze;
}

/**
 * Vergelijk het getypte woord met het doel. `ook` = andere goede schrijfwijzen.
 * Letters worden uitgelijnd (langste gemeenschappelijke reeks), zodat één
 * vergeten letter niet de hele rest rood maakt (tweede opinie 9 sep 2026).
 */
export function vergelijk(getypt, doel, ook = []) {
  const a = String(getypt || "").trim();
  const norm = (s) => s.toLowerCase().replace(/[.,!?;:]+$/, "");
  const hoofdletterOk = doel[0] !== doel[0].toUpperCase() || a[0] === doel[0];
  const goed = (norm(a) === norm(doel) && hoofdletterOk) || (ook || []).some((v) => norm(a) === norm(v));
  // uitlijning via langste gemeenschappelijke deelreeks (kleine woorden, dus O(n·m) is prima)
  const A = a.toLowerCase(), D = doel.toLowerCase();
  const n = A.length, m = D.length;
  const T = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) T[i][j] = A[i] === D[j] ? T[i + 1][j + 1] + 1 : Math.max(T[i + 1][j], T[i][j + 1]);
  const letters = [];
  let i = 0, j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && A[i] === D[j]) { letters.push({ d: doel[j], g: a[i], ok: true }); i++; j++; }
    else if (j < m && (i >= n || T[i][j + 1] >= T[i + 1][j])) { letters.push({ d: doel[j], g: "", ok: false }); j++; }   // letter vergeten
    else { letters.push({ d: "", g: a[i], ok: false }); i++; }                                                              // letter te veel
  }
  return { goed, letters };
}
