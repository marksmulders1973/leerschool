// Leerpad: Verwijswoorden — dé klassieke Doorstroomtoets-vraagvorm
// "Naar wie of wat verwijst het woord 'die'?" Kinderen leren de vaste
// strategie: verwijswoord gevonden → zoek TERUG in de tekst (meestal
// vlak ervoor) → controleer of het klopt (enkelvoud/meervoud, persoon/ding).
//
// Alle teksten zijn 100% eigen werk. 4 stappen, 17 checks totaal.

const stepEmojis = ["🔍", "🐱", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een verwijswoord?", emoji: "🔍", from: 0, to: 0 },
  { letter: "B", title: "Verwijswoorden in een tekst", emoji: "🐱", from: 1, to: 1 },
  { letter: "C", title: "Lastige gevallen", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Doorstroomtoets-oefening", emoji: "🏆", from: 3, to: 3 },
];

// ── Tekst voor stap 2: eigen tekst over een huisdier (~150 woorden) ──
const tekstSnuffel = `**Snuffel de kat**

Fenna heeft een kat. Ze heet Snuffel en is drie jaar oud. Elke ochtend springt Snuffel op het bed van Fenna. Daar wacht ze geduldig tot Fenna wakker wordt. Soms duurt dat lang, want Fenna slaapt graag uit.

Gisteren was er iets mis. Snuffel wilde niet eten en lag stil in haar mand. Fenna's vader maakte zich zorgen. Hij belde meteen de dierenarts. Die zei dat ze direct langs mochten komen.

Bij de dierenarts kreeg Snuffel een prikje. Dat vond ze niet leuk: ze blies naar de mevrouw in de witte jas. Gelukkig was het snel voorbij. De dierenarts gaf Fenna's vader een doosje pilletjes mee, verstopt in een brokje moest Snuffel er elke dag één innemen.

Na twee dagen was Snuffel weer de oude. Ze sprong 's ochtends vrolijk op het bed. Fenna was opgelucht: haar kat was weer beter.`;

// ── Tekst voor stap 4: eigen tekst schoolreisje (~200 woorden) ──────
const tekstBoerderij = `**Het uitje naar de kinderboerderij**

Vorige week ging groep zeven op stap. Meester Ruben had een uitje geregeld naar de kinderboerderij aan de rand van het dorp. Daar wonen geiten, kippen, konijnen en een oude ezel.

Bij de ingang stond boerin Els al te wachten. Zij vertelde eerst de regels: rustig lopen, niet rennen en de dieren niet voeren zonder toestemming. Daarna mochten de kinderen de stal in.

Jara liep meteen naar de geiten. Die kwamen nieuwsgierig op haar af, want ze hoopten op eten. Eén geitje knabbelde zelfs aan haar jas. Jara moest er hard om lachen.

Sem had minder geluk. Hij wilde de ezel aaien, maar het dier draaide zich om en liep weg. Boerin Els troostte hem: "Balthasar moet eerst even aan je wennen. Kom straks nog eens terug."

Aan het einde van de middag mochten de kinderen de konijnen voeren. Dit vonden ze het allerleukst van de hele dag. In de bus terug werd er nog lang over nagepraat.

Meester Ruben was tevreden. Volgend jaar wil hij weer zo'n uitje plannen — misschien dan naar de schaapskooi.`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Wat is een verwijswoord?",
    explanation: `Lees deze twee zinnen: *"Lisa heeft een nieuwe fiets. Hij is knalrood."*

Wacht eens... wie is 'hij'? Er staat toch geen jongen in de zin? Klopt! Het woord 'hij' verwijst hier naar **de fiets**. Zo'n woord noemen we een **verwijswoord**: een kort woord dat terugwijst naar iemand of iets dat al eerder in de tekst genoemd is. Zo hoeft de schrijver niet steeds "de fiets, de fiets, de fiets" te herhalen.

Bekende verwijswoorden zijn: **hij, zij, ze, het, die, dat, deze, daar, er, hem, haar, hun**.

Op de Doorstroomtoets krijg je hier bijna altijd een vraag over: *"Naar wie of wat verwijst het woord 'die'?"* Gebruik dan deze vaste strategie:

1. **Vind** het verwijswoord in de tekst.
2. **Zoek terug** — het antwoord staat meestal vlak vóór het verwijswoord, vaak in de zin ervoor.
3. **Controleer** je antwoord: klopt het qua **enkelvoud of meervoud** ('ze' bij meer personen, 'hij' bij één)? En klopt het qua **persoon of ding**?

Vul je gevonden antwoord in op de plek van het verwijswoord. Klinkt de zin dan nog logisch? Dan zit je goed! Oefen maar met de vragen hieronder.`,
    checks: [
      {
        q: "*\"Lisa heeft een nieuwe fiets. Hij is knalrood.\"* — Naar wie of wat verwijst 'hij'?",
        options: ["De fiets", "Lisa", "De kleur rood", "De vader van Lisa"],
        answer: 0,
        evidence: "Lisa heeft een nieuwe fiets.",
        wrongHints: [
          null,
          "Kan Lisa knalrood zijn? Vul je antwoord eens in op de plek van 'hij' en luister of de zin klopt.",
          "De kleur wordt pas ná 'hij' genoemd. Zoek eens terug: wat werd er vlak vóór 'hij' genoemd?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vind het verwijswoord", tekst: "Het verwijswoord in de vraag is 'hij'. Dat is stap 1: je weet nu welk woord je moet oplossen." },
            { titel: "Zoek terug", tekst: "Lees de zin ervóór: 'Lisa heeft een nieuwe fiets.' Daar staan twee dingen genoemd: Lisa en de fiets. Eén van die twee is het antwoord." },
            { titel: "Controleer", tekst: "Vul in: 'Lisa is knalrood' — raar. 'De fiets is knalrood' — logisch! In het Nederlands zeggen we over een fiets vaak 'hij', ook al is het een ding." },
          ],
          woorden: [
            { woord: "verwijswoord", uitleg: "Een kort woord (hij, ze, die, dat, daar...) dat wijst naar iemand of iets dat al eerder in de tekst genoemd is." },
            { woord: "verwijzen", uitleg: "Wijzen naar — het woord zegt: 'kijk terug, daar staat over wie of wat ik het heb'." },
          ],
          theorie: "**De invul-truc**\n\nTwijfel je waar een verwijswoord naar wijst? Vul je antwoord in op de plek van het verwijswoord en lees de zin opnieuw:\n\n- 'De fiets is knalrood.' → klinkt goed ✓\n- 'Lisa is knalrood.' → klinkt gek ✗\n\nDe zin die logisch klinkt, geeft het juiste antwoord. Let op: 'hij' hoeft geen jongen te zijn! Over dingen zoals een fiets, een boom of een stoel zeggen we in het Nederlands ook vaak 'hij'.",
          voorbeelden: [
            { type: "invullen", tekst: "'Papa bakt een taart. Hij ruikt heerlijk.' Vul in: 'de taart ruikt heerlijk' (logisch) of 'papa ruikt heerlijk' (kan, maar de zin gaat over bakken). Hier wijst 'hij' naar de taart." },
            { type: "ding", tekst: "'Waar is mijn pen? Hij lag net nog hier.' → 'hij' = de pen. Een ding dus, geen persoon." },
          ],
          basiskennis: [
            { onderwerp: "Terugzoeken", uitleg: "Het woord waar een verwijswoord naar wijst, staat bijna altijd VÓÓR het verwijswoord — vaak in de zin ervoor." },
          ],
          niveaus: {
            basis: "Zoek terug in de zin ervoor: wat wordt daar genoemd dat knalrood kan zijn?",
            simpeler: "Vul elk antwoord in op de plek van 'hij' en lees hardop. Welke zin klinkt logisch? '... is knalrood.'",
            nogSimpeler: "Wat heeft Lisa net gekregen dat een kleur kan hebben?",
          },
        },
      },
      {
        q: "*\"Opa en oma komen morgen op bezoek. Ze nemen vast weer taart mee.\"* — Naar wie verwijst 'ze'?",
        options: ["Opa en oma", "Alleen oma", "De taart", "De buren"],
        answer: 0,
        evidence: "Opa en oma komen morgen op bezoek.",
        wrongHints: [
          null,
          "'Ze nemen' — dat werkwoord past bij meer dan één persoon. Wie komen er samen op bezoek?",
          "Kan een taart zichzelf meenemen? Zoek terug naar wie er iets kan meenemen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vind en zoek terug", tekst: "Het verwijswoord is 'ze'. Lees de zin ervoor: 'Opa en oma komen morgen op bezoek.' Wie worden daar genoemd?" },
            { titel: "Controleer enkelvoud/meervoud", tekst: "'Ze nemen mee' — 'nemen' is een meervoudsvorm. Dus 'ze' zijn hier meer personen tegelijk. Wie zijn er samen met z'n tweeën?" },
            { titel: "Controleer de betekenis", tekst: "Vul in: kunnen die personen taart meenemen? Ja, bezoekers nemen vaak iets lekkers mee. Klopt dus." },
          ],
          woorden: [
            { woord: "enkelvoud", uitleg: "Eén persoon of ding: de kat, het kind, oma." },
            { woord: "meervoud", uitleg: "Meer dan één: de katten, de kinderen, opa en oma samen." },
          ],
          theorie: "**Controleer altijd: enkelvoud of meervoud?**\n\nHet woordje 'ze' is een lastpak: het kan naar één vrouw wijzen ('ze' = zij) óf naar een groep ('ze' = meerdere mensen of dingen).\n\nHet werkwoord verklapt het:\n- 'Ze neemt taart mee' → één persoon (neemt)\n- 'Ze nemen taart mee' → meer personen (nemen)\n\nKijk dus goed naar het werkwoord achter het verwijswoord — dat is een gratis hint!",
          voorbeelden: [
            { type: "meervoud", tekst: "'De vogels vliegen weg. Ze schrokken van de kat.' → 'ze schrokken' (meervoud) = de vogels." },
            { type: "enkelvoud", tekst: "'Mijn zus is jarig. Ze wordt tien.' → 'ze wordt' (enkelvoud) = mijn zus, één persoon." },
          ],
          basiskennis: [
            { onderwerp: "Het werkwoord helpt", uitleg: "Werkwoord in meervoud (nemen, lopen, komen)? Dan wijst het verwijswoord naar meer dan één persoon of ding." },
          ],
          niveaus: {
            basis: "'Ze nemen' is meervoud — zoek in de zin ervoor naar meer dan één persoon.",
            simpeler: "Er staat 'ze nemen', niet 'ze neemt'. Dus je zoekt een groepje. Welk tweetal komt er morgen op bezoek?",
            nogSimpeler: "Zoek de twee mensen die vlak vóór 'ze' genoemd worden.",
          },
        },
      },
      {
        q: "*\"De hond blafte hard. Hij rende naar de deur.\"* — Naar wie of wat verwijst 'hij'?",
        options: ["De hond", "De deur", "De buurman", "Het geluid"],
        answer: 0,
        wrongHints: [
          null,
          "Kan een deur ergens naartoe rennen? Zoek wie of wat er in de zin ervóór wordt genoemd.",
          "Er wordt geen buurman genoemd. Zoek terug in de zin ervoor.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor noemt één ding: de hond. Dat is de enige kandidaat voor 'hij'." },
            { titel: "Controleer", tekst: "Vul in: 'De hond rende naar de deur.' Logisch — een hond rende hard en wil dan weten wie er aan de deur is." },
            { titel: "Check het verwijswoord", tekst: "'Hij' past bij een mannelijk ding of wezen. Een hond kan 'hij' zijn." },
          ],
          niveaus: {
            basis: "Kijk in de zin ervoor: wat wordt daar als enige genoemd?",
            simpeler: "Er staat maar één dier in de zin ervoor. Wie rende er naar de deur?",
            nogSimpeler: "Welk dier blafte er vlak voor 'hij rende'?",
          },
        },
      },
      {
        q: "Wat doet een verwijswoord in een tekst?",
        options: [
          "Het wijst naar iemand of iets dat (meestal eerder) in de tekst genoemd is",
          "Het maakt de zin extra lang en moeilijk",
          "Het geeft de mening van de schrijver",
          "Het is altijd de naam van een persoon",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom juist — denk aan waarom een schrijver niet steeds 'de fiets, de fiets' herhaalt.",
          "Een mening herken je aan woorden als 'ik vind'. Wat doet 'hij' in 'de fiets... hij is rood'?",
          "Is 'die' of 'daar' een naam? Denk terug aan de voorbeeldzinnen.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waarom bestaan verwijswoorden?", tekst: "Zonder verwijswoorden wordt een tekst houterig: 'Fenna heeft een kat. De kat heet Snuffel. De kat is drie jaar.' Met verwijswoorden leest het lekkerder: 'Ze heet Snuffel en is drie jaar.'" },
            { titel: "Wat doet het woord?", tekst: "Een verwijswoord is een soort pijltje: het wijst naar iets dat al genoemd is. De lezer moet zelf even terugkijken waar het pijltje naartoe wijst." },
            { titel: "Waarom vraagt de toets dit?", tekst: "Als je verwijswoorden verkeerd 'oplost', begrijp je de tekst verkeerd. Daarom test de Doorstroomtoets of jij het pijltje goed kunt volgen." },
          ],
          woorden: [
            { woord: "verwijswoord", uitleg: "Kort woord dat wijst naar iets of iemand die al genoemd is: hij, ze, die, dat, daar, er, deze..." },
            { woord: "herhaling", uitleg: "Steeds hetzelfde woord opnieuw gebruiken. Verwijswoorden voorkomen saaie herhaling." },
          ],
          theorie: "**Verwijswoorden — het spiekbriefje**\n\n| Verwijswoord | Wijst vaak naar |\n|---|---|\n| hij, hem | één persoon (man/jongen) of één ding |\n| zij, ze, haar | één vrouw/meisje óf een groep |\n| het | één ding of het-woord |\n| die, deze | persoon óf ding, net genoemd |\n| dat, dit | ding, of een hele gebeurtenis |\n| daar, er | een plek |\n\nJe hoeft dit rijtje niet uit je hoofd te leren — als je maar weet: klein woordje dat terugwijst? Dan terugzoeken!",
          voorbeelden: [
            { type: "zonder", tekst: "Zonder: 'Tom pakt Toms tas. Toms tas is zwaar.' Met: 'Tom pakt zijn tas. Die is zwaar.' Veel prettiger om te lezen." },
          ],
          basiskennis: [
            { onderwerp: "Klein woord, grote rol", uitleg: "Verwijswoorden zijn korte woordjes, maar als je ze verkeerd leest, snap je de hele tekst verkeerd." },
          ],
          niveaus: {
            basis: "Denk aan 'de fiets... hij is rood': wat deed 'hij' daar?",
            simpeler: "Een verwijswoord is als een pijltje in de tekst. Waar wijst het pijltje naartoe: naar iets nieuws, of naar iets dat al genoemd was?",
            nogSimpeler: "Denk aan het pijltje: wijst het vooruit naar niets, of terug naar iets bekends?",
          },
        },
      },
      {
        q: "*\"Mijn fiets stond voor de deur. Die was leeg.\"* — Naar wat verwijst 'die'?",
        options: ["De fiets (de band was leeg)", "De deur", "Mijn", "De straat"],
        answer: 0,
        wrongHints: [
          null,
          "Kan een deur 'leeg' zijn? Zoek iets dat leeg kan zijn vlak vóór 'die'.",
          "'Mijn' is geen zelfstandig ding dat leeg kan zijn. Zoek het dichtstbijzijnde woord dat past.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "Vlak voor 'die' staat 'de deur' en daarvoor 'fiets'. Twee kandidaten." },
            { titel: "Controleer betekenis", tekst: "Vul in: 'De deur was leeg' — een deur kan niet leeg zijn. 'De fiets was leeg' — een band kan leeg zijn! Dus 'die' wijst naar de fiets (de band ervan)." },
            { titel: "Let op", tekst: "Soms staat het dichtstbijzijnde woord er bewust als valstrik. De betekenis beslist." },
          ],
          niveaus: {
            basis: "Wat kan er leeg zijn: een fiets(band) of een deur? Dat bepaalt waarnaar 'die' wijst.",
            simpeler: "Vul beide kandidaten in: 'de fiets was leeg' of 'de deur was leeg'. Welke zin klopt?",
            nogSimpeler: "Wat van een fiets kan leeg zijn? Zou dat hier bedoeld worden?",
          },
        },
      },
      {
        q: "*\"De kinderen spelen buiten. ___ hebben veel plezier.\"* — Welk verwijswoord past op de lege plek?",
        options: ["Ze", "Hij", "Het", "Deze week"],
        answer: 0,
        wrongHints: [
          null,
          "'Hij' past bij één persoon. Over hoeveel kinderen gaat de eerste zin?",
          "Past 'het' bij een groep spelende kinderen? Kijk naar het werkwoord 'hebben'.",
          "'Deze week' zegt iets over tijd, niet over wie er plezier hebben.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat moet het verwijswoord doen?", tekst: "De lege plek moet terugwijzen naar 'de kinderen' uit de eerste zin. Je zoekt dus een woord dat bij een gróép past." },
            { titel: "Kijk naar het werkwoord", tekst: "Er staat 'hebben' — meervoud. Het verwijswoord moet dus ook meervoud zijn." },
            { titel: "Kies en controleer", tekst: "Vul in en lees hardop: '... hebben veel plezier.' Welk woord klinkt goed én wijst naar de kinderen?" },
          ],
          woorden: [
            { woord: "meervoud", uitleg: "Meer dan één: de kinderen, de dieren, wij, ze." },
            { woord: "passen bij", uitleg: "Het verwijswoord moet kloppen met het woord waar het naar wijst: zelfde aantal (één/meer) en soort (persoon/ding)." },
          ],
          theorie: "**Andersom denken**\n\nMeestal krijg je een verwijswoord en zoek je waar het naar wijst. Hier is het andersom: je weet waar het naartoe moet wijzen (de kinderen) en kiest het juiste verwijswoord.\n\nDe controle blijft hetzelfde:\n1. Eén of meer? De kinderen = meer → meervoudswoord nodig.\n2. Persoon of ding? Personen → hij/ze/zij kan, 'het' meestal niet.\n3. Invullen en hardop lezen: klinkt het goed?",
          voorbeelden: [
            { type: "invullen", tekst: "'De hond blaft. ___ heeft honger.' Eén dier → 'Hij heeft honger' past." },
            { type: "invullen", tekst: "'Mijn zusjes zingen. ___ oefenen voor een optreden.' Meer personen → 'Ze oefenen' past." },
          ],
          basiskennis: [
            { onderwerp: "Twee kanten op", uitleg: "Verwijswoord → terugzoeken waar het naar wijst. Of andersom: eerst kijken naar wie het moet wijzen, dan het passende woord kiezen." },
          ],
          niveaus: {
            basis: "'De kinderen' is meervoud en 'hebben' is meervoud — welk verwijswoord past daarbij?",
            simpeler: "Lees de opties één voor één in de zin: '... hebben veel plezier.' Streep weg wat gek klinkt of niet naar de kinderen wijst.",
            nogSimpeler: "Zoek het woordje dat bij een hele groep kinderen past.",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Verwijswoorden in een tekst",
    explanation: tekstSnuffel + `

Nu ga je de strategie gebruiken in een echte tekst. Dat is precies wat je op de Doorstroomtoets ook doet. In een tekst staan veel meer namen en dingen dan in één losse zin — dus terugzoeken wordt belangrijker!

**Zo pak je het aan:**
1. Lees de vraag: welk verwijswoord moet je oplossen? Zoek de zin op in de tekst.
2. Lees de zin ervóór (en soms nog een zin verder terug). Welke personen of dingen worden daar genoemd?
3. Controleer: enkelvoud of meervoud? Persoon of ding? Vul in en luister of het klopt.

Let op: het antwoord is meestal het **laatst genoemde** woord dat past. In *"Fenna heeft een kat. Ze heet Snuffel"* worden Fenna én de kat allebei vlak voor 'ze' genoemd — maar wie krijgt er een kattennaam? Juist. Controleren blijft dus altijd nodig. Beantwoord nu de vier vragen over de tekst hierboven.`,
    checks: [
      {
        q: "*\"Fenna heeft een kat. Ze heet Snuffel...\"* — Naar wie of wat verwijst 'ze' in deze zin?",
        options: ["De kat", "Fenna", "De moeder van Fenna", "De dierenarts"],
        answer: 0,
        evidence: "Fenna heeft een kat. Ze heet Snuffel en is drie jaar oud.",
        wrongHints: [
          null,
          "Fenna wordt ook vlak ervoor genoemd — maar vul eens in: heet Fenna Snuffel? Wie krijgt de naam?",
          null,
          "De dierenarts komt pas veel later in de tekst. Zoek vlak vóór het woordje 'ze'.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor is: 'Fenna heeft een kat.' Twee kandidaten dus: Fenna en de kat." },
            { titel: "Vul beide in", tekst: "'Fenna heet Snuffel' — maar Fenna heet al Fenna! 'De kat heet Snuffel' — ja, dát klopt: een huisdier krijgt een naam." },
            { titel: "Dit is de valstrik", tekst: "Op de toets staan er vaak twéé mogelijke woorden vlak voor het verwijswoord. Alleen invullen en nadenken vertelt je welke van de twee klopt." },
          ],
          woorden: [
            { woord: "kandidaat", uitleg: "Een mogelijk antwoord. Bij verwijswoorden: elk woord in de buurt waar het verwijswoord naar zou kúnnen wijzen." },
          ],
          theorie: "**Twee kandidaten vlak voor het verwijswoord — wat nu?**\n\nDit is dé favoriete valstrik van toetsenmakers. In 'Fenna heeft een kat. Ze heet Snuffel' passen Fenna en de kat allebei bij 'ze' (allebei vrouwelijk enkelvoud!).\n\nDan wint de **betekenis-controle**: vul beide kandidaten in en kies de zin die logisch is. Fenna heeft haar naam al — dus de nieuwe naam Snuffel hoort bij de kat.",
          voorbeelden: [
            { type: "valstrik", tekst: "'Mama gaf Roos een knuffel. Ze was zacht.' Wie is zacht — mama of Roos? Geen van beide: de knúffel is zacht. Altijd betekenis checken!" },
          ],
          basiskennis: [
            { onderwerp: "Invullen beslist", uitleg: "Als meerdere woorden qua vorm passen, kies dan het woord waarmee de zin ook qua betekenis logisch is." },
          ],
          niveaus: {
            basis: "Er zijn twee kandidaten in de zin ervoor. Vul ze allebei in: wie kan er 'Snuffel heten'?",
            simpeler: "Fenna heeft al een naam (Fenna!). Wie in de zin heeft nog géén naam en krijgt er hier een?",
            nogSimpeler: "Zoek wie er net nieuw genoemd is en een naam nodig heeft.",
          },
        },
      },
      {
        q: "*\"Hij belde meteen de dierenarts.\"* — Naar wie verwijst 'hij'?",
        options: ["Fenna's vader", "Fenna", "Snuffel", "De dierenarts"],
        answer: 0,
        evidence: "Fenna's vader maakte zich zorgen. Hij belde meteen de dierenarts.",
        wrongHints: [
          null,
          "Zou je over Fenna 'hij' zeggen? Controleer of het verwijswoord past bij de persoon.",
          "Kan een kat de telefoon pakken? Denk aan de betekenis-controle.",
          "De dierenarts wordt gebéld — kan diegene dan zelf de beller zijn? Zoek terug, niet vooruit.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor: 'Fenna's vader maakte zich zorgen.' Daar wordt één persoon genoemd." },
            { titel: "Controleer persoon", tekst: "'Hij' past bij een man of jongen. Fenna's vader is een man — dat klopt." },
            { titel: "Controleer betekenis", tekst: "Wie belt er als een huisdier ziek is? Degene die zich zorgen maakt. Logisch verhaal — antwoord gevonden." },
          ],
          woorden: [
            { woord: "zich zorgen maken", uitleg: "Bang of ongerust zijn dat er iets mis is." },
          ],
          theorie: "**'Hij' en 'zij' verklappen de persoon**\n\nSommige verwijswoorden geven gratis informatie:\n- 'hij/hem' → man, jongen, of een ding\n- 'zij/ze/haar' → vrouw, meisje, of een groep\n\nStaat er 'hij' en zoek je tussen een vader, een moeder en een dochter? Dan valt meer dan de helft meteen af. Gebruik die gratis hint!",
          voorbeelden: [
            { type: "gratis-hint", tekst: "'Oma en opa wandelen. Hij draagt de tas.' → 'hij' kan alleen opa zijn. Het woordje zelf wijst je de weg." },
          ],
          basiskennis: [
            { onderwerp: "Terug, niet vooruit", uitleg: "Zoek eerst in de tekst VÓÓR het verwijswoord. Iemand die pas ná het verwijswoord genoemd wordt, is bijna nooit het antwoord." },
          ],
          niveaus: {
            basis: "Lees de zin vóór 'hij belde'. Welke persoon maakte zich daar zorgen?",
            simpeler: "'Hij' past bij een man. Welke man komt in dit stukje tekst voor?",
            nogSimpeler: "Zoek de man die vlak vóór 'hij' genoemd wordt.",
          },
        },
      },
      {
        q: "*\"Die zei dat ze direct langs mochten komen.\"* — Naar wie verwijst 'die'?",
        options: ["De dierenarts", "Fenna's vader", "Snuffel", "Fenna"],
        answer: 0,
        evidence: "Hij belde meteen de dierenarts. Die zei dat ze direct langs mochten komen.",
        wrongHints: [
          null,
          "Fenna's vader belde juist óp — wie neemt er dan op en geeft antwoord?",
          "Kan de zieke kat zeggen dat ze langs mogen komen? Denk aan wie er kan praten aan de telefoon.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor: 'Hij belde meteen de dierenarts.' Wie is het láátst genoemd, vlak voor 'die'? De dierenarts." },
            { titel: "Controleer betekenis", tekst: "Er wordt gebeld. Wie 'zegt' er dan iets terug? Degene die opneemt: de dierenarts. Dat klopt met de zin." },
            { titel: "Onthoud de vuistregel", tekst: "'Die' wijst heel vaak naar het laatst genoemde woord ervóór. Controleer altijd even, maar begin daar met zoeken." },
          ],
          woorden: [
            { woord: "die", uitleg: "Verwijswoord dat naar een persoon of ding kan wijzen — meestal het laatst genoemde." },
          ],
          theorie: "**'Die' pakt meestal het dichtstbijzijnde woord**\n\nIn een zin als 'Hij belde de dierenarts. Die zei...' staat 'die' direct na 'de dierenarts'. Dat is geen toeval: 'die' wijst bijna altijd naar het laatst genoemde zelfstandig naamwoord.\n\nVergelijk:\n- 'De juf van mijn broer, die jarig is...' — hier moet je oppassen: wie is er jarig? Lees dan de rest van de zin voor de betekenis.\n\nVuistregel: begin bij het dichtstbijzijnde woord, en controleer met de betekenis.",
          voorbeelden: [
            { type: "dichtbij", tekst: "'Sanne leent een boek van de meester. Die vindt lezen belangrijk.' → 'die' = de meester (laatst genoemd, en het klopt qua betekenis)." },
          ],
          basiskennis: [
            { onderwerp: "Laatst genoemd = eerste gok", uitleg: "Bij 'die' en 'deze': check eerst het woord dat het dichtst ervóór staat. Meestal raak." },
          ],
          niveaus: {
            basis: "'Die' wijst meestal naar het laatst genoemde. Wat is het laatste dat vóór 'die' genoemd wordt?",
            simpeler: "Er wordt getelefoneerd: de vader belt, en iemand antwoordt ('zei'). Wie geeft er antwoord aan de telefoon?",
            nogSimpeler: "Zoek wie er vlak vóór 'die' gebeld wordt.",
          },
        },
      },
      {
        q: "*\"De dierenarts gaf Fenna's vader een doosje pilletjes mee, verstopt in een brokje moest Snuffel er elke dag één innemen.\"* — Naar wat verwijst 'er'?",
        options: ["In het brokje (de plek waar het pilletje in gaat)", "De dierenarts", "Het doosje", "Fenna's vader"],
        answer: 0,
        wrongHints: [
          null,
          "De dierenarts is een persoon, geen plek. 'Er' wijst naar een plek. Welke plek staat er vlak voor?",
          null,
          "Fenna's vader is ook een persoon. 'Er' is hier een plek-verwijswoord — zoek de plek.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "'Er' = plek-verwijswoord", tekst: "Net als 'daar' wijst 'er' vaak naar een plek. 'Verstopt in een brokje moest Snuffel er één innemen' — het 'er' staat voor 'in het brokje'." },
            { titel: "Controleer", tekst: "Vul in: 'Verstopt in een brokje moest Snuffel in het brokje één innemen.' Bijna hetzelfde — 'er' vervangt 'in het brokje' zodat je het niet hoeft te herhalen." },
            { titel: "Gebruik de context", tekst: "Je kunt een pilletje verstoppen in een stukje voedsel. De vorige zin noemt een brokje — dat is de plek waar het pilletje in gaat." },
          ],
          niveaus: {
            basis: "'Er' wijst naar een plek. Welke plek wordt er vlak ervoor in de zin genoemd?",
            simpeler: "Waar verstop je het pilletje — in de dierenarts, of in iets wat Snuffel opeet?",
            nogSimpeler: "Zoek het woordje 'brokje' in de zin. Dáár gaat het pilletje in — dat is waarnaar 'er' wijst.",
          },
        },
      },
      {
        q: "*\"Elke ochtend springt Snuffel op het bed van Fenna. Daar wacht ze geduldig...\"* — Naar welke plek verwijst 'daar'?",
        options: ["Het bed van Fenna", "De mand van Snuffel", "De keuken", "De dierenarts"],
        answer: 0,
        evidence: "Elke ochtend springt Snuffel op het bed van Fenna. Daar wacht ze geduldig tot Fenna wakker wordt.",
        wrongHints: [
          null,
          "De mand komt pas later in de tekst voor, bij het zieke stukje. Waar springt Snuffel 's ochtends op?",
          "Een keuken komt in de hele tekst niet voor — zoek de plek in de zin ervóór.",
          "Dat is geen plek waar Snuffel elke ochtend wacht. Kijk in de zin ervoor.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "'Daar' = een plek", tekst: "Het verwijswoord 'daar' wijst altijd naar een plááts. Je zoekt dus geen persoon, maar een plek in de tekst." },
            { titel: "Zoek terug", tekst: "De zin ervoor: 'springt Snuffel op het bed van Fenna'. Welke plek staat daar? Het bed." },
            { titel: "Controleer", tekst: "Vul in: 'Op het bed wacht ze geduldig tot Fenna wakker wordt.' Logisch — de kat zit op het bed te wachten bij de slapende Fenna." },
          ],
          woorden: [
            { woord: "daar", uitleg: "Verwijswoord voor een plek: 'We gingen naar het park. Daar speelden we.'" },
            { woord: "geduldig", uitleg: "Rustig kunnen wachten zonder boos of druk te worden." },
          ],
          theorie: "**Plaats-verwijswoorden: daar en er**\n\nSommige verwijswoorden wijzen niet naar een persoon of ding, maar naar een **plek**:\n- 'daar' → 'We fietsten naar het strand. Daar was het druk.'\n- 'er' → 'Ken je de nieuwe speeltuin? Ik ben er gisteren geweest.'\n\nZie je 'daar' of 'er' in een toetsvraag? Zoek dan in de zinnen ervoor naar een plaats: een gebouw, een kamer, een stad, een meubel waar je op of in kunt zijn.",
          voorbeelden: [
            { type: "plek", tekst: "'Beau zit graag in de boomhut. Daar leest hij strips.' → 'daar' = in de boomhut." },
          ],
          basiskennis: [
            { onderwerp: "Soort antwoord voorspellen", uitleg: "Het verwijswoord verklapt wat voor soort antwoord je zoekt: 'daar' = plek, 'hij' = persoon/ding, 'toen' = tijdstip." },
          ],
          niveaus: {
            basis: "'Daar' wijst naar een plek. Welke plek staat in de zin ervóór?",
            simpeler: "Waar springt Snuffel elke ochtend op? Op die plek blijft ze ook wachten.",
            nogSimpeler: "Zoek de plek waar Snuffel naartoe springt, vlak vóór 'daar'.",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Lastige gevallen",
    explanation: `Je kent nu de basisstrategie. Maar de Doorstroomtoets test ook drie **lastige gevallen**. Wie die kent, laat zich niet foppen!

**1. 'Dit' of 'dat' wijst soms naar een héle zin.**
*"Mees vergat zijn gymtas. Dat gebeurt hem wel vaker."* Hier wijst 'dat' niet naar de gymtas, maar naar de hele gebeurtenis: *het vergeten van de gymtas*. Truc: vul de hele vorige zin in — klinkt dat logisch? Dan wijst het woord naar de hele zin.

**2. 'Er' en 'daar' wijzen naar een plek.**
*"We fietsten naar het zwembad. Daar was het druk."* Je zoekt dan geen persoon, maar een plaats. Ook 'hierdoor' en 'daardoor' zijn familie: die wijzen naar een **oorzaak** die eerder genoemd is.

**3. Soms wijst een verwijswoord VOORUIT.**
Meestal zoek je terug, maar niet altijd! *"Voordat hij de klas binnenkwam, klopte Daan op de deur."* Hier komt 'hij' éérder in de zin dan Daan — het verwijswoord wijst vooruit. Vind je terugzoekend niets dat past? Lees dan ook de rest van de zin.

De strategie blijft hetzelfde: vind het verwijswoord, zoek (terug óf vooruit), en controleer of je antwoord logisch klinkt.`,
    checks: [
      {
        q: "*\"Lena ging naar het park. Ze vond er een egel.\"* — Naar welke plek verwijst 'er'?",
        options: ["Het park", "Lena's huis", "De egel", "De straat"],
        answer: 0,
        wrongHints: [
          null,
          "Lena's huis staat niet in de tekst. Zoek de plek in de zin ervoor.",
          "De egel is een dier, geen plek. 'Er' wijst naar een plaats.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "'Er' = plek", tekst: "'Ze vond er een egel' — het woordje 'er' staat voor een plek. Welke plek werd er vlak ervoor genoemd?" },
            { titel: "Zoek terug", tekst: "De zin ervoor: 'Lena ging naar het park.' De plek is het park." },
            { titel: "Controleer", tekst: "Vul in: 'Ze vond in het park een egel.' Logisch — egels leven in parken." },
          ],
          niveaus: {
            basis: "'Er' wijst naar een plek. Welke plek werd er net vóór 'er' genoemd?",
            simpeler: "Waar ging Lena naartoe? Op díé plek vond ze de egel.",
            nogSimpeler: "Zoek de plek die vlak voor 'er' wordt beschreven.",
          },
        },
      },
      {
        q: "*\"Mees vergat zijn gymtas. Dat gebeurt hem wel vaker.\"* — Naar wat verwijst 'dat'?",
        options: [
          "Dat Mees zijn gymtas vergat (de hele gebeurtenis)",
          "De gymtas",
          "Mees",
          "De gymles",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vul eens in: 'De gymtas gebeurt hem wel vaker.' Klinkt dat logisch? Wat kan er wél 'gebeuren'?",
          "Kan een persoon 'gebeuren'? Denk aan wat er zojuist gebeurd is.",
          "Een gymles wordt nergens genoemd. Wat is er in de eerste zin gebeurd?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Probeer eerst een los woord", tekst: "Vul in: 'De gymtas gebeurt wel vaker' — onzin. 'Mees gebeurt wel vaker' — ook onzin. Geen enkel los woord past!" },
            { titel: "Dan: probeer de hele zin", tekst: "Vul de hele vorige zin in: 'Dat Mees zijn gymtas vergat, gebeurt hem wel vaker.' Dát klinkt logisch." },
            { titel: "Conclusie", tekst: "'Dat' wijst hier naar de hele gebeurtenis, niet naar één woord. Dit gebeurt vooral bij 'dat', 'dit', 'hierdoor' en 'daardoor'." },
          ],
          woorden: [
            { woord: "gebeurtenis", uitleg: "Iets dat gebeurt of gebeurd is — een hele actie, niet één ding. Bijvoorbeeld: dat je je tas vergeet." },
          ],
          theorie: "**'Dat' en 'dit' kunnen naar een hele zin wijzen**\n\nStappenplan als je twijfelt:\n1. Probeer eerst losse woorden uit de vorige zin in te vullen.\n2. Past er geen enkel los woord? Vul dan de héle vorige zin in (begin met 'dat...').\n3. Klinkt dat logisch? Dan is de hele gebeurtenis het antwoord.\n\nSignaal-werkwoorden waarbij dit vaak gebeurt: 'dat gebeurt', 'dat vind ik', 'dat is jammer', 'dit betekent'. Je kunt namelijk geen tas 'vinden dat het jammer is' — alleen een gebeurtenis.",
          voorbeelden: [
            { type: "hele-zin", tekst: "'Het regende de hele dag. Dit vond iedereen jammer.' → 'dit' = dat het de hele dag regende (de hele gebeurtenis)." },
            { type: "los-woord", tekst: "'Roos kocht een ijsje. Dat was aardbeiensmaak.' → hier past een los woord wél: het ijsje was aardbeiensmaak." },
          ],
          basiskennis: [
            { onderwerp: "Eerst klein, dan groot", uitleg: "Probeer eerst een los woord in te vullen. Pas als niets past, probeer je de hele vorige zin." },
          ],
          niveaus: {
            basis: "Geen los woord past bij 'gebeurt wel vaker'. Wat kun je dan nog meer invullen?",
            simpeler: "Wat kan er 'wel vaker gebeuren': een tas, een jongen — of iets dat iemand dóét, zoals iets vergeten?",
            nogSimpeler: "Vul de hele eerste zin in op de plek van 'dat' en luister of het klopt.",
          },
        },
      },
      {
        q: "*\"De merel zong in de tuin. Ik hoorde hem al vroeg in de ochtend.\"* — Naar wie of wat verwijst 'hem'?",
        options: ["De merel", "De tuin", "Ik", "De ochtend"],
        answer: 0,
        wrongHints: [
          null,
          "Een tuin kun je niet horen — je hoort een geluid. Welk geluid veroorzaakte de merel?",
          "'Ik' is degene die hoort, niet de merel die gehoord wordt. Wie maakte het geluid?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor noemt de merel. 'Hem' wijst naar dat mannetjesvogeltje." },
            { titel: "Controleer", tekst: "Vul in: 'Ik hoorde de merel al vroeg in de ochtend.' Logisch — een merel zingt vroeg." },
            { titel: "Let op", tekst: "'Hem' past bij een mannelijk wezen of ding. Een merel (mannetje) past daarbij." },
          ],
          niveaus: {
            basis: "Wie of wat zong er vlak vóór 'hem'? Wat hoorde jij?",
            simpeler: "Wat kon je horen in die tuin — een merel of een tuin zelf?",
            nogSimpeler: "Welk dier zong er en wordt daarna 'hem' genoemd?",
          },
        },
      },
      {
        q: "*\"Voordat hij de klas binnenkwam, klopte Daan op de deur.\"* — Naar wie verwijst 'hij'?",
        options: ["Daan", "De meester", "De deur", "Dat kun je niet weten"],
        answer: 0,
        wrongHints: [
          null,
          "Er komt in deze zin helemaal geen meester voor. Lees de héle zin — wie wordt er wél genoemd?",
          "Kan een deur ergens binnenkomen? Zoek een persoon in de zin.",
          "Jawel! Lees de zin tot het einde — soms staat de naam ná het verwijswoord.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Terugzoeken lukt niet", tekst: "Vóór 'hij' staat alleen 'voordat'. Geen persoon te vinden. Wat nu?" },
            { titel: "Lees vooruit", tekst: "Lees de rest van de zin: '...klopte Daan op de deur.' Daar staat een naam: Daan!" },
            { titel: "Controleer", tekst: "Vul in: 'Voordat Daan de klas binnenkwam, klopte Daan op de deur.' Logisch — het gaat twee keer over dezelfde jongen. 'Hij' wijst hier vooruit." },
          ],
          woorden: [
            { woord: "vooruitwijzen", uitleg: "Het verwijswoord komt éérder in de zin dan de naam waar het bij hoort. Komt vooral voor in zinnen die beginnen met 'voordat', 'toen', 'terwijl', 'omdat'." },
          ],
          theorie: "**Vooruitwijzen — de omgekeerde pijl**\n\nMeestal wijst een verwijswoord terug. Maar in zinnen die beginnen met woorden als **voordat, toen, terwijl, omdat, nadat** staat het verwijswoord soms vóór de naam:\n\n- 'Toen ze de uitslag hoorde, juichte Amber.' → 'ze' = Amber\n- 'Omdat hij moe was, ging Ties vroeg naar bed.' → 'hij' = Ties\n\nHerken je zo'n zin? En vind je terugzoekend niets? Lees dan de hele zin uit — de naam komt er meestal nog aan.",
          voorbeelden: [
            { type: "vooruit", tekst: "'Terwijl ze op de bus wachtte, at Isa haar appel op.' → 'ze' = Isa, die verderop in dezelfde zin genoemd wordt." },
          ],
          basiskennis: [
            { onderwerp: "Niet gevonden? Doorlezen!", uitleg: "Vind je terugzoekend geen passend woord, dan is de zin nog niet af — lees door tot je de naam tegenkomt." },
          ],
          niveaus: {
            basis: "Vóór 'hij' staat geen naam. Lees de zin dan helemaal uit — welke naam kom je tegen?",
            simpeler: "Deze zin begint met 'voordat' — dan komt de naam vaak pas later in de zin. Wie klopte er op de deur?",
            nogSimpeler: "Zoek de jongen die verderop in dezelfde zin genoemd wordt.",
          },
        },
      },
      {
        q: "*\"We fietsten naar het zwembad. Daar was het veel te druk.\"* — Naar wat verwijst 'daar'?",
        options: ["Het zwembad", "De fietsen", "De weg ernaartoe", "Het weer"],
        answer: 0,
        evidence: "We fietsten naar het zwembad. Daar was het veel te druk.",
        wrongHints: [
          null,
          "'Daar' wijst naar een plek waar het druk kan zijn — zijn fietsen een plek?",
          "Ze fietsten er wel overheen, maar wáár kwamen ze aan? Zoek het doel van het fietstochtje.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "'Daar' = plek", tekst: "Je zoekt een plaats. Welke plek wordt in de eerste zin genoemd? Het zwembad." },
            { titel: "Controleer", tekst: "Vul in: 'In het zwembad was het veel te druk.' Logisch — zwembaden zijn vaak druk op warme dagen." },
            { titel: "Vergelijk met 'er'", tekst: "Je kunt ook zeggen: 'Het was er veel te druk.' Het woordje 'er' doet dan hetzelfde werk als 'daar'." },
          ],
          woorden: [
            { woord: "er", uitleg: "Klein verwijswoord dat vaak naar een plek wijst: 'Ik was er gisteren ook.' Familie van 'daar'." },
          ],
          theorie: "**'Er' en 'daar' — kleine woordjes, zelfde truc**\n\nBeide wijzen meestal naar een plek die eerder genoemd is:\n- 'We liepen door het bos. Daar was het stil.' → in het bos\n- 'Ga je mee naar de markt? Ik moet er groente kopen.' → op de markt\n\nLet op: 'er' heeft in het Nederlands ook andere baantjes ('er loopt een hond' — dan wijst het nergens naar). Op de toets gaat de vraag bijna altijd over de plek-betekenis: zoek dan de laatst genoemde plaats.",
          voorbeelden: [
            { type: "plek", tekst: "'Oma woont in Zwolle. Wij komen daar elk weekend.' → 'daar' = in Zwolle." },
          ],
          basiskennis: [
            { onderwerp: "Plek-woorden herkennen", uitleg: "Zie je 'daar' of 'er' in de vraag? Zoek in de tekst naar plaatsen: gebouwen, steden, kamers, plekken buiten." },
          ],
          niveaus: {
            basis: "Zoek de plek in de eerste zin — waar fietsten ze naartoe?",
            simpeler: "Op welke plek kan het 'veel te druk' zijn: op een plek waar veel mensen komen. Welke plek uit de zin past daarbij?",
            nogSimpeler: "Zoek de plek waar de fietstocht naartoe ging, vlak vóór 'daar'.",
          },
        },
      },
      {
        q: "*\"Bo deed haar rugzak op. Daarna liep ze de school in.\"* — Naar wie verwijst 'ze'?",
        options: ["Bo", "De school", "De rugzak", "De leraar"],
        answer: 0,
        wrongHints: [
          null,
          "Kan een school ergens in lopen? 'Ze' wijst naar een persoon die zelf kan lopen.",
          "Een rugzak kan niet lopen. Zoek de persoon vlak voor 'ze'.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor noemt Bo en haar rugzak. Twee kandidaten — maar alleen een persoon kan 'lopen'." },
            { titel: "Betekenis-check", tekst: "Vul in: 'Bo liep de school in' → logisch. 'De rugzak liep de school in' → een rugzak loopt niet." },
            { titel: "Conclusie", tekst: "'Ze' wijst naar Bo." },
          ],
          niveaus: {
            basis: "Wie of wat kan er in een school lopen — een rugzak of een meisje?",
            simpeler: "Vul Bo en rugzak in op de plek van 'ze'. Welke zin klinkt logisch?",
            nogSimpeler: "Wie is er van de twee in staat om de school in te lopen?",
          },
        },
      },
      {
        q: "*\"Tom kocht een boek. Hij las het meteen uit.\"* — Naar wat verwijst 'het'?",
        options: ["Het boek", "Tom", "De winkel", "Het geld"],
        answer: 0,
        wrongHints: [
          null,
          "Tom is een persoon, geen ding. 'Het' wijst naar een onzijdig ding.",
          "Er wordt geen winkel genoemd in de zinnen. Zoek terug.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor noemt Tom en een boek. 'Het' past bij het-woorden." },
            { titel: "Controleer", tekst: "Vul in: 'Hij las het boek meteen uit' → logisch. Je leest een boek uit." },
            { titel: "Klein woordje, grote rol", tekst: "'Het' verwijst hier naar het boek — het onzijdig ding dat net gekocht werd." },
          ],
          niveaus: {
            basis: "'Het' past bij een onzijdig ding. Welk ding werd er vlak voor 'het' gekocht?",
            simpeler: "Wat kocht Tom, en wat kan je daarna meteen uitlezen?",
            nogSimpeler: "Wat las Tom meteen uit — Tom zelf, of het ding dat hij kocht?",
          },
        },
      },
      {
        q: "*\"Noor liet haar beker vallen. Hierdoor lag de hele tafel vol melk.\"* — Naar wat verwijst 'hierdoor'?",
        options: [
          "Dat Noor haar beker liet vallen",
          "De tafel",
          "De melk",
          "Noor",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De tafel is het gevólg (die ligt vol melk) — 'hierdoor' wijst juist naar de óórzaak. Wat gebeurde er eerst?",
          "De melk is wat je zíét na afloop. Waardoor kwam die melk daar terecht?",
          "Niet Noor zelf, maar iets dat zij dééd. Wat deed ze?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "'Hierdoor' = oorzaak-pijl", tekst: "'Hierdoor' betekent: 'door wat ik net vertelde'. Het wijst naar de óórzaak die in de zin ervoor staat." },
            { titel: "Zoek de oorzaak", tekst: "Wat gebeurde er eerst? Noor liet haar beker vallen. Dát is de oorzaak." },
            { titel: "Controleer", tekst: "Vul in: 'Doordat Noor haar beker liet vallen, lag de hele tafel vol melk.' Oorzaak → gevolg. Klopt helemaal." },
          ],
          woorden: [
            { woord: "oorzaak", uitleg: "Waardoor iets komt. De oorzaak gebeurt eerst." },
            { woord: "gevolg", uitleg: "Wat er daarna gebeurt dóór de oorzaak. Beker valt (oorzaak) → melk op tafel (gevolg)." },
            { woord: "hierdoor", uitleg: "Verwijswoord dat naar een oorzaak wijst die net genoemd is. Familie: daardoor, daarom, daardoor kwam het dat..." },
          ],
          theorie: "**Hierdoor, daardoor, daarom — oorzaak-verwijzers**\n\nDeze woorden wijzen bijna altijd naar een **hele gebeurtenis** in de zin(nen) ervoor — namelijk de oorzaak:\n\n- 'Het vroor vannacht. Hierdoor waren de wegen glad.' → oorzaak = dat het vroor\n- 'Jip oefende elke dag. Daardoor werd hij steeds beter.' → oorzaak = dat Jip elke dag oefende\n\nStrategie: vraag jezelf 'wáárdoor gebeurde dit?' en zoek de gebeurtenis in de vorige zin. Losse woorden (tafel, melk) zijn bijna nooit het antwoord — een oorzaak is iets dat gebéúrt.",
          voorbeelden: [
            { type: "oorzaak-gevolg", tekst: "'De wekker ging niet af. Hierdoor kwam Lot te laat op school.' → 'hierdoor' = dat de wekker niet afging." },
          ],
          basiskennis: [
            { onderwerp: "Oorzaak eerst, gevolg erna", uitleg: "In teksten staat de oorzaak meestal vóór het gevolg. 'Hierdoor' staat aan het begin van het gevolg en wijst terug naar de oorzaak." },
          ],
          niveaus: {
            basis: "'Hierdoor' wijst naar een oorzaak. Wat gebeurde er in de eerste zin?",
            simpeler: "Vraag jezelf: wáárdoor lag de tafel vol melk? Het antwoord is iets dat gebeurde, geen los ding.",
            nogSimpeler: "Zoek wat Noor deed, vlak vóór 'hierdoor'.",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Doorstroomtoets-oefening — de mix",
    explanation: tekstBoerderij + `

Dit is 'm: een tekst met vragen zoals je ze écht op de Doorstroomtoets krijgt. Alle soorten door elkaar — terugwijzen, een plek, een hele gebeurtenis, en natuurlijk een paar slimme valstrikken met twee kandidaten.

Pak bij elke vraag je vaste strategie erbij: **vind** het verwijswoord in de tekst, **zoek terug** (of vooruit als terug niets oplevert), en **controleer** met de invul-truc of je antwoord logisch klinkt. Neem de tijd om de goede zin in de tekst op te zoeken — dat opzoeken hoort bij de toets. Succes!`,
    checks: [
      {
        q: "*\"Jara liep meteen naar de geiten. Die kwamen nieuwsgierig op haar af...\"* — Naar wie of wat verwijst 'die'?",
        options: ["De geiten", "Jara", "De kinderen", "De konijnen"],
        answer: 0,
        evidence: "Jara liep meteen naar de geiten. Die kwamen nieuwsgierig op haar af, want ze hoopten op eten.",
        wrongHints: [
          null,
          "'Die kwamen... op haar af' — 'haar' is Jara zelf. Kan Jara dan ook 'die' zijn? Wie komen er op haar af?",
          "De kinderen worden hier niet genoemd — zoek in de zin vlak ervóór.",
          "De konijnen komen pas aan het einde van de tekst. Waar liep Jara naartoe?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor: 'Jara liep meteen naar de geiten.' Twee kandidaten: Jara en de geiten." },
            { titel: "Controleer meervoud", tekst: "'Die kwámen' — meervoud! Jara is één persoon, de geiten zijn met meer. Dat wijst naar de geiten." },
            { titel: "Controleer betekenis", tekst: "'De geiten kwamen nieuwsgierig op haar af' — en 'haar' is Jara. Klopt: de dieren komen naar het meisje toe. Alles past." },
          ],
          woorden: [
            { woord: "nieuwsgierig", uitleg: "Graag willen weten of ontdekken wat er aan de hand is." },
          ],
          theorie: "**Dubbele controle bij twee kandidaten**\n\nHier zie je hoe de controle-stap je redt:\n1. Meervoud-check: 'kwamen' is meervoud → het antwoord moet meer dan één zijn.\n2. Betekenis-check: in dezelfde zin staat 'op haar af' — 'haar' is Jara, dus 'die' kan Jara niet óók zijn. Twee verwijswoorden in één zin wijzen bijna nooit naar dezelfde persoon als dat dubbelop zou zijn.\n\nZo blijft er maar één antwoord over.",
          voorbeelden: [
            { type: "meervoud-check", tekst: "'Tom keek naar de vogels. Die vlogen weg.' → 'vlogen' is meervoud → de vogels, niet Tom." },
          ],
          basiskennis: [
            { onderwerp: "Werkwoord als bewijs", uitleg: "Enkelvoud of meervoud van het werkwoord achter het verwijswoord is hard bewijs — gebruik het altijd." },
          ],
          niveaus: {
            basis: "'Kwamen' is meervoud. Welke kandidaat uit de zin ervoor is met meer dan één?",
            simpeler: "In de zin staat ook 'op haar af' — dat is Jara al. Wie komen er dan op haar af gelopen?",
            nogSimpeler: "Zoek de dieren waar Jara vlak vóór 'die' naartoe liep.",
          },
        },
      },
      {
        q: "*\"Zij vertelde eerst de regels...\"* — Naar wie verwijst 'zij'?",
        options: ["Boerin Els", "Jara", "Groep zeven", "Meester Ruben"],
        answer: 0,
        evidence: "Bij de ingang stond boerin Els al te wachten. Zij vertelde eerst de regels",
        wrongHints: [
          null,
          "Jara komt pas een alinea later in beeld. Wie stond er bij de ingang te wachten?",
          "Zou een hele klas tegelijk 'de regels vertellen'? Wie kent de regels van de boerderij het best?",
          "Controleer het verwijswoord zelf eens: past 'zij' bij deze persoon?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor: 'Bij de ingang stond boerin Els al te wachten.' Daar staat één persoon: boerin Els." },
            { titel: "Controleer persoon", tekst: "'Zij' past bij een vrouw. Boerin Els is een vrouw — klopt. Meester Ruben zou 'hij' zijn." },
            { titel: "Controleer betekenis", tekst: "Wie vertelt de regels van de kinderboerderij? Degene die er werkt. Logisch dat de boerin dat doet." },
          ],
          woorden: [
            { woord: "boerin", uitleg: "Een vrouw die op een boerderij werkt of er de baas is." },
          ],
          theorie: "**Alinea-grenzen helpen bij het zoeken**\n\nEen verwijswoord aan het begin van een alinea wijst meestal naar iemand uit de zin(nen) direct ervoor — vaak de laatste zin van de vorige alinea of de eerste zin van dezelfde alinea.\n\nJe hoeft dus niet de hele tekst opnieuw te lezen: begin vlak boven het verwijswoord en werk zin voor zin terug tot je iemand vindt die past qua persoon (man/vrouw, één/meer) én betekenis.",
          voorbeelden: [
            { type: "dichtbij-zoeken", tekst: "Staat 'zij vertelde' in regel 8? Lees dan eerst regel 7. Pas als daar niemand past, ga je verder terug." },
          ],
          basiskennis: [
            { onderwerp: "Zij = vrouw of groep", uitleg: "'Zij' kan één vrouw zijn ('zij vertelde') of een groep ('zij vertelden'). Het werkwoord maakt het verschil." },
          ],
          niveaus: {
            basis: "Lees de zin vlak vóór 'zij vertelde'. Wie staat daar te wachten?",
            simpeler: "'Zij vertelde' is enkelvoud én vrouwelijk. Welke vrouw is net genoemd?",
            nogSimpeler: "Zoek de vrouw die vlak vóór 'zij' bij de ingang staat.",
          },
        },
      },
      {
        q: "*\"Daar wonen geiten, kippen, konijnen en een oude ezel.\"* — Naar welke plek verwijst 'daar'?",
        options: ["De kinderboerderij", "Het dorp", "De school", "De bus"],
        answer: 0,
        evidence: "Meester Ruben had een uitje geregeld naar de kinderboerderij aan de rand van het dorp. Daar wonen geiten, kippen, konijnen en een oude ezel.",
        wrongHints: [
          null,
          "Het dorp wordt wel genoemd, maar wonen de geiten en de ezel in het hele dorp — of op één plek aan de rand ervan?",
          "De school komt in deze zinnen niet voor. Waar was het uitje naartoe?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "'Daar' = plek, maar er zijn er twee!", tekst: "In de zin ervoor staan twee plekken: de kinderboerderij én het dorp. Allebei kandidaat." },
            { titel: "Controleer met betekenis", tekst: "Waar wonen geiten, kippen, konijnen en een ezel bij elkaar? Niet verspreid door een heel dorp, maar op een kinderboerderij." },
            { titel: "Extra check", tekst: "'Aan de rand van het dorp' vertelt alleen wáár de boerderij ligt. De hoofdplek van de zin is de kinderboerderij — daar ging het uitje naartoe." },
          ],
          woorden: [
            { woord: "aan de rand van", uitleg: "Aan de buitenkant van iets — niet in het midden. 'Aan de rand van het dorp' = net buiten het centrum." },
          ],
          theorie: "**Twee plekken in één zin — welke wint?**\n\nToetsenmakers stoppen graag twee plaatsen in één zin: 'de kinderboerderij aan de rand van het dorp'. Welke plek pakt 'daar' dan?\n\nVraag jezelf: waar gaat de zin écht over? Het uitje ging naar de **kinderboerderij** — het dorp beschrijft alleen de ligging. Bovendien: controleer met de betekenis. 'In het dorp wonen geiten, kippen én een ezel bij elkaar' klinkt vreemd; op een kinderboerderij is dat precies wat je verwacht.",
          voorbeelden: [
            { type: "twee-plekken", tekst: "'We picknickten in het park bij het station. Daar stonden oude eiken.' → oude eiken staan in het park, niet op het station. Betekenis beslist." },
          ],
          basiskennis: [
            { onderwerp: "Hoofdplek vs bijzin-plek", uitleg: "Als een zin twee plekken noemt, wijst 'daar' meestal naar de plek waar de zin echt over gaat — niet naar de plek die alleen de ligging beschrijft." },
          ],
          niveaus: {
            basis: "Er staan twee plekken in de zin ervoor. Op welke van de twee wonen al die dieren bij elkaar?",
            simpeler: "Denk na: lopen er geiten en een ezel los door een heel dorp? Of horen die op één speciale plek thuis?",
            nogSimpeler: "Zoek de plek waar het uitje naartoe ging, vlak vóór 'daar'.",
          },
        },
      },
      {
        q: "*\"Dit vonden ze het allerleukst van de hele dag.\"* — Naar wat verwijst 'dit'?",
        options: [
          "Het voeren van de konijnen",
          "De konijnen zelf",
          "De busreis terug",
          "Het aaien van de ezel",
        ],
        answer: 0,
        evidence: "Aan het einde van de middag mochten de kinderen de konijnen voeren. Dit vonden ze het allerleukst van de hele dag.",
        wrongHints: [
          null,
          "Bijna! Maar vonden ze de díéren het leukst, of iets dat ze mochten dóén? Vul de hele vorige zin eens in.",
          "De bus komt pas ná deze zin. Zoek terug, niet vooruit.",
          "Dat ging juist mis — de ezel liep weg. Wat mochten de kinderen aan het einde van de middag doen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken het patroon", tekst: "'Dit vonden ze het leukst' — hier past zelden één los woord. 'Dit' wijst vaak naar iets dat je dóét: een activiteit of gebeurtenis." },
            { titel: "Zoek de gebeurtenis", tekst: "De zin ervoor: 'mochten de kinderen de konijnen voeren'. De activiteit is: het voeren van de konijnen." },
            { titel: "Controleer", tekst: "Vul in: 'Het voeren van de konijnen vonden ze het allerleukst.' Perfect logisch. 'De konijnen vonden ze het allerleukst' kan óók bijna — maar de tekst zegt dat het móment van voeren het hoogtepunt was: de hele activiteit dus." },
          ],
          woorden: [
            { woord: "activiteit", uitleg: "Iets dat je doet: voeren, zwemmen, knutselen. Een doe-ding, geen voorwerp." },
          ],
          theorie: "**'Dit' + mening-werkwoord = vaak een activiteit**\n\nZinnen als 'dit vonden ze leuk', 'dat was spannend', 'dit ging goed' wijzen meestal naar iets dat gebéúrde — niet naar een los voorwerp.\n\nDe slimme valstrik hier: 'de konijnen zelf' klinkt bijna goed. Maar lees precies: wat gebeurde er aan het einde van de middag? De kinderen mochten **voeren**. Dát moment — de activiteit — was het leukst. Op de Doorstroomtoets is het beste antwoord altijd het antwoord dat het meest precies bij de tekst past.",
          voorbeelden: [
            { type: "activiteit", tekst: "'In de gymles mochten we touwklimmen. Dit ging Femke heel goed af.' → 'dit' = het touwklimmen (de activiteit)." },
          ],
          basiskennis: [
            { onderwerp: "Kies het meest precieze antwoord", uitleg: "Als twee opties bijna kloppen, wint de optie die het preciest zegt wat er in de tekst staat." },
          ],
          niveaus: {
            basis: "'Dit' wijst hier naar iets dat de kinderen mochten dóén. Wat mochten ze aan het einde van de middag doen?",
            simpeler: "Vul de hele vorige zin in: '... vonden ze het allerleukst.' Gaat het om de dieren als voorwerp, of om wat de kinderen ermee mochten doen?",
            nogSimpeler: "Zoek de activiteit die vlak vóór 'dit' beschreven wordt.",
          },
        },
      },
      {
        q: "*\"Meester Ruben was tevreden. Volgend jaar wil hij weer zo'n uitje plannen.\"* — Naar wie verwijst 'hij'?",
        options: ["Meester Ruben", "Boerin Els", "Sem", "Balthasar de ezel"],
        answer: 0,
        evidence: "Meester Ruben was tevreden. Volgend jaar wil hij weer zo'n uitje plannen",
        wrongHints: [
          null,
          "Boerin Els is een vrouw — past 'hij' daarbij?",
          "Sem wordt niet in de laatste alinea genoemd. Zoek wie er wél vlak vóór 'hij' staat.",
          "Balthasar is de ezel — kan een ezel een uitje plannen?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "De zin ervoor noemt alleen Meester Ruben. Dat is de enige kandidaat." },
            { titel: "Controleer persoon", tekst: "'Hij' past bij een man. Meester Ruben is een man — klopt." },
            { titel: "Controleer betekenis", tekst: "Wie regelde het uitje? Meester Ruben, want dat staat in de eerste alinea. Logisch dat híj het volgend jaar weer wil plannen." },
          ],
          niveaus: {
            basis: "Lees de zin ervóór: wie wordt daar als enige genoemd?",
            simpeler: "'Hij' past bij een man. Welke man staat vlak voor 'hij' in dezelfde alinea?",
            nogSimpeler: "Wie regelde het uitje aan het begin van het verhaal? En wie wil het volgend jaar weer doen?",
          },
        },
      },
      {
        q: "*\"In de bus terug werd er nog lang over nagepraat.\"* — Naar wat verwijst 'er' (in 'over nagepraat')?",
        options: [
          "De hele dag op de kinderboerderij",
          "De bus zelf",
          "De chauffeur van de bus",
          "De reis heen",
        ],
        answer: 0,
        evidence: "Aan het einde van de middag mochten de kinderen de konijnen voeren. Dit vonden ze het allerleukst van de hele dag. In de bus terug werd er nog lang over nagepraat.",
        wrongHints: [
          null,
          "Wordt er over de bus nagepraat? Of over wat er die dag beleefd werd?",
          null,
          "'Er over napraten' — over de dag die ze hadden, niet over de heenreis. Wat beleefden ze die dag?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "'Er over napraten' = over een onderwerp praten", tekst: "'Er' verwijst hier naar de inhoud van het gesprek — het onderwerp. In de context: wat hebben ze die dag gedaan?" },
            { titel: "Zoek het onderwerp", tekst: "De zinnen ervoor gaan over het konijnen voeren en de hele dag op de boerderij. Dáár praatten ze over in de bus." },
            { titel: "Controleer", tekst: "'Ze praatten erover' = ze praatten over de dag op de kinderboerderij. Logisch: na een leuk uitje vertel je er thuis over." },
          ],
          niveaus: {
            basis: "Waar praatten de kinderen in de bus over? Wat hadden ze zojuist beleefd?",
            simpeler: "Lees de zinnen vlak vóór 'er werd lang over nagepraat'. Waar ging die dag over?",
            nogSimpeler: "Na een uitje praat je in de bus over… de dag die je net had. Wat deden de kinderen die dag?",
          },
        },
      },
      {
        q: "*\"Boerin Els troostte hem...\"* — Naar wie verwijst 'hem'?",
        options: ["Sem", "De ezel", "Meester Ruben", "Het geitje"],
        answer: 0,
        evidence: "Hij wilde de ezel aaien, maar het dier draaide zich om en liep weg. Boerin Els troostte hem",
        wrongHints: [
          null,
          "De ezel liep zelf weg — die is niet verdrietig. Wie had er 'minder geluk' en heeft troost nodig?",
          "Meester Ruben komt in deze alinea niet voor. Lees het stukje over de ezel nog eens.",
          "Het geitje hoort bij Jara's stukje, een alinea eerder. Over wie gaat dít stukje?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug — met beleid", tekst: "Vlak vóór 'hem' staat 'het dier' (de ezel). Maar pas op: het dichtstbijzijnde woord is niet áltijd het antwoord!" },
            { titel: "Controleer met betekenis", tekst: "Troosten doe je bij iemand die verdrietig of teleurgesteld is. De ezel liep zelf weg — die heeft geen troost nodig. Sem wilde aaien en het lukte niet: híj baalt." },
            { titel: "Extra bewijs", tekst: "Boerin Els zegt: 'Balthasar moet eerst aan JE wennen. Kom straks nog eens terug.' Ze praat tégen een kind, over de ezel. Dus ze troost Sem." },
          ],
          woorden: [
            { woord: "troosten", uitleg: "Iemand die verdrietig of teleurgesteld is weer een beter gevoel geven." },
            { woord: "teleurgesteld", uitleg: "Verdrietig omdat iets anders liep dan je hoopte." },
          ],
          theorie: "**De dichtstbijzijnde-woord-valstrik**\n\nDe vuistregel 'pak het laatst genoemde woord' klopt váák — maar niet altijd. Hier staat 'het dier' dichterbij dan Sem, en toch is Sem het antwoord.\n\nDaarom is stap 3 (controleren!) nooit overbodig:\n1. Wie kán er getroost worden? Iemand die baalt.\n2. Wie baalt er in dit stukje? Sem — zijn aai-poging mislukte.\n3. Tegen wie wordt er gepráát ('aan je wennen')? Tegen Sem.\n\nDrie keer hetzelfde antwoord — dan weet je het zeker. Op de toets staat de valstrik-optie er altijd tussen; de controle-stap haalt 'm eruit.",
          voorbeelden: [
            { type: "valstrik", tekst: "'Bram gooide de bal naar de hond. Toen sprong hij in de sloot.' Wie sprong: de bal, de hond of Bram? Alleen de betekenis (wie kán springen en waarom?) geeft het antwoord — hier de hond, die achter de bal aanging." },
          ],
          basiskennis: [
            { onderwerp: "Controleren is stap 3 — altijd", uitleg: "Sla de controle nooit over, zeker niet als er een dier of ding dichterbij staat dan de persoon." },
          ],
          niveaus: {
            basis: "Wie heeft er troost nodig: degene die wegliep, of degene bij wie het aaien mislukte?",
            simpeler: "Boerin Els zegt: 'Balthasar moet eerst aan je wennen.' Tegen wie zegt ze dat — tegen de ezel of tegen een kind?",
            nogSimpeler: "Zoek de jongen uit dit stukje die baalt en getroost wordt.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verwijswoordenBegrijpendLezenPo = {
  id: "verwijswoorden-begrijpend-lezen-po",
  title: "Verwijswoorden — naar wie of wat verwijst het?",
  emoji: "🔗",
  level: "groep6-8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — verwijsrelaties in teksten",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "\"Naar wie of wat verwijst het woord 'die'?\" — dé klassieke vraagvorm op de Doorstroomtoets begrijpend lezen. Leer de vaste strategie: verwijswoord vinden, terugzoeken in de tekst en controleren of je antwoord klopt. Met eigen oefenteksten en een toets-stijl eindopdracht.",
  triggerKeywords: [
    "verwijswoorden", "verwijswoord", "naar wie verwijst", "naar wat verwijst",
    "die dat deze", "hij zij het", "daar er", "hierdoor daardoor",
    "terugverwijzen", "verwijsrelaties", "begrijpend lezen", "doorstroomtoets lezen",
    "cito begrijpend lezen", "tekstverbanden",
  ],
  chapters,
  steps,
};

export default verwijswoordenBegrijpendLezenPo;
