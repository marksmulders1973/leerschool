// Leerpad: Begrijpend lezen — strategieën voor groep 5-8
// 7 stappen in 4 hoofdstukken (A t/m D).
// Doelgroep: groep 5-8 basisschool. Kern-Cito-onderdeel.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  info: "#5d9cec",
  betogend: "#ec407a",
  verhalend: "#69f0ae",
  signaal: "#ffd54f",
};

const stepEmojis = ["📖","📝","🚦","🎯","👀","❓","🏆"];

const chapters = [
  { letter: "A", title: "Wat lees je?", emoji: "📖", from: 0, to: 1 },
  { letter: "B", title: "Signaalwoorden + opbouw", emoji: "🚦", from: 2, to: 3 },
  { letter: "C", title: "Slim lezen + vragen", emoji: "👀", from: 4, to: 5 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 6, to: 6 },
];

function tekstsoortenSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">3 tekstsoorten — verschillende doelen</text>

<rect x="20" y="40" width="280" height="50" rx="8" fill="${COLORS.info}" opacity="0.30" stroke="${COLORS.info}" stroke-width="1"/>
<text x="40" y="60" fill="${COLORS.info}" font-size="14" font-family="Arial" font-weight="bold">📰 Informatief</text>
<text x="40" y="78" fill="${COLORS.text}" font-size="11" font-family="Arial">Doel: weten. Bv. krantenartikel, schoolboek, encyclopedie.</text>

<rect x="20" y="100" width="280" height="50" rx="8" fill="${COLORS.betogend}" opacity="0.30" stroke="${COLORS.betogend}" stroke-width="1"/>
<text x="40" y="120" fill="${COLORS.betogend}" font-size="14" font-family="Arial" font-weight="bold">💬 Betogend</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">Doel: overtuigen. Bv. opiniestuk, reclame, debat.</text>

<rect x="20" y="160" width="280" height="50" rx="8" fill="${COLORS.verhalend}" opacity="0.30" stroke="${COLORS.verhalend}" stroke-width="1"/>
<text x="40" y="180" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">📚 Verhalend</text>
<text x="40" y="198" fill="${COLORS.text}" font-size="11" font-family="Arial">Doel: vermaken. Bv. roman, kort verhaal, sprookje.</text>
</svg>`;
}

function signaalwoordenSvg() {
  const groepen = [
    { type: "Tijd", woorden: "eerst, daarna, nu, later, vroeger, intussen", kleur: COLORS.info },
    { type: "Oorzaak/Gevolg", woorden: "omdat, doordat, daardoor, dus, daarom", kleur: COLORS.betogend },
    { type: "Opsomming", woorden: "ten eerste, ook, bovendien, verder, ten slotte", kleur: COLORS.verhalend },
    { type: "Tegenstelling", woorden: "maar, echter, toch, hoewel, desondanks", kleur: COLORS.signaal },
    { type: "Voorbeeld", woorden: "bijvoorbeeld, zoals, als illustratie, namelijk", kleur: COLORS.alt },
    { type: "Conclusie", woorden: "kortom, dus, samenvattend, concluderend", kleur: COLORS.good },
  ];
  return `<svg viewBox="0 0 320 320">
<rect x="0" y="0" width="320" height="320" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Signaalwoorden — wat ze je vertellen</text>

${groepen.map((g, i) => {
  const y = 40 + i * 45;
  return `
<rect x="20" y="${y}" width="280" height="38" rx="6" fill="${g.kleur}" opacity="0.20" stroke="${g.kleur}" stroke-width="1"/>
<text x="35" y="${y + 16}" fill="${g.kleur}" font-size="12" font-family="Arial" font-weight="bold">${g.type}</text>
<text x="35" y="${y + 31}" fill="${COLORS.text}" font-size="10" font-family="Arial">${g.woorden}</text>`;
}).join('')}
</svg>`;
}

const steps = [
  {
    title: "Wat is begrijpend lezen?",
    explanation: "**Begrijpend lezen** is **niet alleen woorden lezen**, maar **echt snappen** wat de tekst zegt en bedoelt.\n\n**Drie niveaus van lezen**:\n\n**1. Technisch lezen** *(letters → woorden → zinnen)*\nJe leest **wat** er staat. Dit leer je in groep 3-4.\n\n**2. Begrijpend lezen** *(wat betekent het?)*\nJe begrijpt **wat de schrijver bedoelt**. Hoofd-idee, details, oorzaak/gevolg, mening.\n\n**3. Studerend lezen** *(onthouden + toepassen)*\nJe **onthoudt** wat je leest en kan het later **gebruiken**. Bv. voor een toets.\n\n**Waarom is begrijpend lezen lastig?**\n• Veel **moeilijke woorden**: 'desondanks', 'echter', 'concludeert'.\n• Veel **lange zinnen** met komma's, bijzinnen.\n• De **boodschap** zit niet altijd letterlijk in de tekst — je moet soms 'tussen de regels' lezen.\n• De vragen zijn **slim**: ze testen of je het écht begrepen hebt, niet of je het kunt herlezen.\n\n**Op de Cito-toets** zit altijd begrijpend lezen — meestal **3-5 lange teksten** met telkens 3-5 vragen erover.\n\n**Goed nieuws**: het is een **vaardigheid** — je kunt het leren! Niet door slimmer te zijn, maar door **slim aan te pakken**.\n\nIn dit leerpad leer je:\n• Welke **tekstsoorten** er zijn (informatief, betogend, verhalend)\n• **Signaalwoorden** herkennen (omdat, daarom, maar, ...)\n• **Skim + scan**-techniek (snel overzicht + gericht zoeken)\n• Verschillende **vraagsoorten** + hoe je ze aanpakt\n\nVeel succes!",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Wat is **begrijpend lezen**?",
        options: ["Hardop lezen","Echt snappen wat de tekst zegt en bedoelt","Snel lezen","Spelling oefenen"],
        answer: 1,
        wrongHints: [null,"Snap je een tekst beter als je 'm hardop leest, of als je nadenkt over de inhoud?","Gaat lezen om hoe snel je bent, of om wat je ervan begrijpt?","Heeft spelling te maken met begrijpen of met goed schrijven?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is het verschil?", tekst: "Hardop lezen, snel lezen, spelling — dat zijn ANDERE vaardigheden. Begrijpend lezen gaat om SNAPPEN." },
            { titel: "Het kernwoord", tekst: "'Begrijpend' = van 'begrijpen' = snappen. Dus: lezen + snappen wat er staat." },
          ],
          woorden: [
            { woord: "begrijpen", uitleg: "Snappen, doorhebben wat iets betekent." },
            { woord: "vaardigheid", uitleg: "Iets dat je kunt door te oefenen." },
          ],
          theorie: "Drie soorten lezen: TECHNISCH (woorden ontcijferen), BEGRIJPEND (snappen wat er staat), STUDEREND (onthouden + toepassen). Bij Cito wordt vooral begrijpend getoetst.",
          voorbeelden: [{ type: "kern", tekst: "Tekst lezen + er een vraag over kunnen beantwoorden = begrijpend gelezen." }],
          basiskennis: [{ onderwerp: "Lezen ≠ snappen", uitleg: "Je kunt woorden hardop voorlezen zonder te snappen wat er staat." }],
          niveaus: {
            basis: "Begrijpend = snappen. Antwoord B.",
            simpeler: "Het woord zegt het al: 'begrijpend' = begrijpen. Lezen + snappen wat er staat. = B.",
            nogSimpeler: "Snappen = B.",
          },
        },
      },
      {
        q: "Op de Doorstroomtoets — hoe wordt begrijpend lezen getest?",
        options: ["Korte zinnen","3-5 lange teksten + vragen erover","Alleen 1 woord per vraag","Liedjes zingen"],
        answer: 1,
        wrongHints: [null,"Test een toets begrijpend lezen met losse zinnen, of met echte teksten?","Kun je begrijpend lezen testen met maar één woord per vraag?","Hoort zingen bij begrijpend lezen — of bij iets anders?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat zit op de Doorstroomtoets?", tekst: "Bij begrijpend lezen krijg je echte LEESTEKSTEN (200-300 woorden) met vragen erover. Niet losse zinnen." },
            { titel: "Hoeveel?", tekst: "Meestal 3-5 teksten per onderdeel, 3-5 vragen per tekst." },
          ],
          woorden: [
            { woord: "Doorstroomtoets", uitleg: "Landelijke eindtoets in groep 8 (sinds 2024, voorheen Cito-eindtoets) — meet wat je in 8 jaar basisschool hebt geleerd." },
          ],
          theorie: "Doorstroomtoets test of je een ECHTE tekst kunt begrijpen — dus geen losse zinnetjes maar verhalen, krantenartikelen, instructies.",
          voorbeelden: [{ type: "Toets-format", tekst: "Tekst over 'gezond ontbijt' (250 woorden) → 4 vragen: hoofdgedachte, detail, woordbetekenis, conclusie." }],
          basiskennis: [{ onderwerp: "Cito = breed", uitleg: "Cito test rekenen, taal, studievaardigheden — niet alleen lezen." }],
          niveaus: {
            basis: "Cito = lange teksten + vragen. B.",
            simpeler: "Stel je voor: je krijgt een artikel uit de krant en daarna een paar vragen over wat erin stond. Dat is wat Cito doet bij begrijpend lezen. = B.",
            nogSimpeler: "Lange teksten + vragen = B.",
          },
        },
      },
    ],
  },
  {
    title: "3 tekstsoorten — wat is het doel?",
    explanation: "Een **tekst** kan 3 verschillende doelen hebben. Als je weet welk doel, weet je hoe je 'm moet lezen.\n\n**1. Informatief** *(wil je iets WETEN)*\n• **Doel**: feiten en informatie geven.\n• **Voorbeelden**: krantenartikel, schoolboek, encyclopedie, instructie, recept.\n• **Hoe lees je**: zoek de **feiten** en **kerngegevens**. Wat staat er gewoon LETTERLIJK in?\n• **Signaalwoorden** komen vaak voor in informatieve teksten.\n\n**Voorbeeld**: *\"De Eiffeltoren in Parijs is 330 meter hoog en werd in 1889 gebouwd voor de Wereldtentoonstelling.\"* → feiten gepresenteerd.\n\n**2. Betogend** *(de schrijver wil je OVERTUIGEN)*\n• **Doel**: jouw mening beïnvloeden.\n• **Voorbeelden**: opiniestuk, advertentie, debat, columns.\n• **Hoe lees je**: zoek de **mening** van de schrijver + hun **argumenten**. Maar lees kritisch — accept niet alles.\n• **Pas op voor**: emotionele woorden, eenzijdige argumenten, woorden als 'fantastisch', 'verschrikkelijk'.\n\n**Voorbeeld**: *\"Iedereen zou meer fruit moeten eten. Het is gezond, lekker en helpt je beter te leren!\"* → schrijver wil je overtuigen.\n\n**3. Verhalend** *(je wordt VERMAAKT of meegevoerd)*\n• **Doel**: een verhaal vertellen.\n• **Voorbeelden**: roman, kort verhaal, sprookje, dagboek.\n• **Hoe lees je**: zoek de **personages**, het **plot** (wat gebeurt er) en de **boodschap** of moraal.\n\n**Voorbeeld**: *\"Sara was bang. Ze wist niet wat er achter de boom zat. Toen, plotseling, sprong er een konijn tevoorschijn — 'Pff, gelukkig!' dacht ze.\"* → verhaal.\n\n**Trucje om tekstsoort te herkennen**:\n\n| Aanwezig in tekst | Tekstsoort |\n|---|---|\n| Veel feiten + cijfers + namen | Informatief |\n| Mening van schrijver + emotionele woorden | Betogend |\n| Personages + gebeurtenissen + dialoog | Verhalend |\n\nSommige teksten zijn **gemengd**: een verhaal kan ook informatief zijn (bv. historische roman).",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Welke tekstsoort wil je **overtuigen**?",
        options: ["Informatief","Betogend","Verhalend","Beschrijvend"],
        answer: 1,
        wrongHints: [null,"Wil een tekst met alleen feiten je iets laten geloven, of vooral iets weten?","Probeert een verhaal je te overtuigen, of wil het je vooral meenemen in een gebeurtenis?","Geeft 'beschrijven' een mening, of vooral details?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is overtuigen?", tekst: "Iemand zo praten dat hij JOUW MENING gaat geloven." },
            { titel: "Welke tekst doet dat?", tekst: "Een BETOGENDE tekst — geeft een mening en argumenten." },
          ],
          woorden: [
            { woord: "betogend", uitleg: "Een tekst met een mening + argumenten. Wil je overtuigen." },
            { woord: "informatief", uitleg: "Geeft alleen feiten, geen mening." },
            { woord: "verhalend", uitleg: "Vertelt een verhaal, wil je vermaken." },
          ],
          theorie: "3 tekstdoelen: informeren (feiten), betogen (mening), vertellen (verhaal). Alleen betogen wil je overtuigen.",
          voorbeelden: [{ type: "betogen", tekst: "Opiniestuk in de krant 'Iedereen moet meer fruit eten omdat...' = betogend." }],
          basiskennis: [{ onderwerp: "Doel van tekst", uitleg: "Elke tekst heeft een doel — weten, overtuigen of vermaken." }],
          niveaus: {
            basis: "Overtuigen = betogend. B.",
            simpeler: "Stel je voor: iemand wil je laten geloven dat zonnepanelen goed zijn. Hij schrijft een tekst MET argumenten. Dat heet betogen. = B.",
            nogSimpeler: "Mening + overtuigen = betogend = B.",
          },
        },
      },
      {
        q: "Wat is een typische **informatieve** tekst?",
        options: ["Een sprookje","Een krantenartikel met feiten","Een opiniestuk","Een liedjestekst"],
        answer: 1,
        wrongHints: [null,"Wat doet een sprookje vooral: feiten geven of een verhaal vertellen?","Geeft een opiniestuk vooral feiten, of probeert het je iets te laten denken?","Wat doet een liedjestekst vaak — informeren, overtuigen of een verhaal vertellen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is informatief?", tekst: "Een tekst die FEITEN geeft. Geen mening, geen verhaal." },
            { titel: "Welke optie past?", tekst: "Krantenartikel met feiten = pure informatie. Sprookje = verhalend. Opiniestuk = betogend. Liedjestekst = vaak verhalend." },
          ],
          woorden: [
            { woord: "informatief", uitleg: "Geeft feiten + uitleg. Geen mening. Bv. encyclopedie, schoolboek, krantenartikel." },
            { woord: "feit", uitleg: "Iets dat WAAR is, te bewijzen. Bv. 'Brussel is de hoofdstad van België'." },
          ],
          theorie: "Informatieve teksten herken je aan: veel feiten + cijfers + namen, geen 'ik vind', geen verhaal-personages.",
          voorbeelden: [{ type: "informatief", tekst: "'De Eiffeltoren is 330 m hoog en werd in 1889 gebouwd.' = pure feiten = informatief." }],
          basiskennis: [{ onderwerp: "Feit vs mening", uitleg: "Feit = bewijsbaar. Mening = iemands opvatting." }],
          niveaus: {
            basis: "Krantenartikel met feiten = informatief = B.",
            simpeler: "Wat geeft alleen FEITEN? Krantenartikel. Sprookje = verhaal. Opiniestuk = mening. Liedje = vaak verhaal. = B.",
            nogSimpeler: "Feiten = informatief = B.",
          },
        },
      },
      {
        q: "Welk woord helpt herkennen dat een tekst **betogend** is?",
        options: ["bijvoorbeeld","'fantastisch' of 'verschrikkelijk'","gisteren","de man"],
        answer: 1,
        wrongHints: [null,"Komt 'bijvoorbeeld' alleen voor als iemand je wil overtuigen, of ook bij gewone uitleg?","Wijst 'gisteren' naar een mening, of vooral naar wanneer iets gebeurde?","Vertelt 'de man' iets over de toon van een tekst, of is het neutraal?"],
        uitlegPad: {
          stappen: [
            { titel: "Hoe herken je betogend?", tekst: "Door EMOTIONELE woorden — woorden die een mening uitdrukken." },
            { titel: "Welke optie?", tekst: "'fantastisch' of 'verschrikkelijk' = sterke emotionele kleuring = mening = betogend. Andere opties zijn neutraal." },
          ],
          woorden: [
            { woord: "emotioneel woord", uitleg: "Woord dat een gevoel of mening uitdrukt. Bv. 'fantastisch', 'vreselijk', 'geweldig'." },
            { woord: "neutraal", uitleg: "Zonder mening of gevoel. Bv. 'gisteren', 'de man', 'het huis'." },
          ],
          theorie: "Bij betogende teksten kiest de schrijver bewust kleurrijke, emotionele woorden om JOU emotioneel mee te krijgen. Neutrale woorden geven geen mening.",
          voorbeelden: [{ type: "emotioneel", tekst: "'Het is FANTASTISCH om te helpen' = mening (positief) → betogend." }],
          basiskennis: [{ onderwerp: "Toon = signaal", uitleg: "Hoe een schrijver woorden kiest, vertelt vaak meer dan WAT hij zegt." }],
          niveaus: {
            basis: "Emotioneel woord = mening = betogend. B.",
            simpeler: "Welk woord laat een GEVOEL zien? 'Fantastisch' (super positief) of 'verschrikkelijk' (super negatief). Die woorden gebruikt iemand alleen als hij een mening heeft. Dus = betogend. = B.",
            nogSimpeler: "Emotie = mening = B.",
          },
        },
      },
    ],
  },
  {
    title: "Signaalwoorden — woorden die jou helpen",
    explanation: "**Signaalwoorden** zijn kleine woorden die zeggen **wat er gaat komen** of **hoe iets verbonden is**. Ze zijn cruciaal bij begrijpend lezen.\n\n**6 belangrijke groepen**:\n\n**1. Tijd** *(volgorde)*: eerst, daarna, vervolgens, nu, later, intussen, vroeger, tot slot.\n→ De schrijver vertelt iets in **chronologische volgorde**.\n\n**2. Oorzaak & gevolg** *(waarom)*: omdat, doordat, daardoor, dus, daarom, vandaar.\n→ Iets gebeurt **omdat** iets anders gebeurde. *'Omdat het regende, werd de wedstrijd afgelast.'*\n\n**3. Opsomming** *(meerdere dingen)*: ten eerste, ten tweede, ook, bovendien, verder, daarnaast, ten slotte.\n→ Een **lijstje** wordt opgesomd. *'Ten eerste is fruit gezond. Ten tweede is het lekker. Ten derde is het goedkoop.'*\n\n**4. Tegenstelling** *(maar, niet)*: maar, echter, toch, hoewel, desondanks, in tegenstelling tot, daarentegen.\n→ Iets onverwachts of tegenovergestelds komt. *'Het regent, **maar** we gaan toch buiten spelen.'*\n\n**5. Voorbeeld** *(zoals)*: bijvoorbeeld, zoals, als illustratie, namelijk, bijv.\n→ Er komt een **voorbeeld** of toelichting.\n\n**6. Conclusie / samenvatting**: kortom, dus, samenvattend, concluderend, tot slot, eindelijk.\n→ De schrijver **vat samen** of **trekt een conclusie**.\n\n**Waarom belangrijk?**\nSignaalwoorden vertellen je **hoe alinea's of zinnen verbonden zijn**. Als je een **oorzaak/gevolg-vraag** krijgt, zoek dan signaalwoorden zoals 'omdat', 'daardoor'. Als de vraag is over een **tegenstelling**, zoek 'maar' of 'echter'.\n\n**Voorbeeld**:\n*\"Veel kinderen kijken te veel TV. **Daardoor** lezen ze minder. **Daarentegen** zijn er ook kinderen die juist veel boeken lezen. **Bijvoorbeeld** Sara, die elke dag een boek leest. **Kortom**: het verschilt per kind.\"*\n\n• 'Daardoor' = gevolg → 'minder lezen' is gevolg van 'te veel TV'.\n• 'Daarentegen' = tegenstelling → er bestaan ook andere kinderen.\n• 'Bijvoorbeeld' = voorbeeld → Sara als illustratie.\n• 'Kortom' = conclusie → de schrijver vat samen.\n\n**Pro-tip op de Cito**: als de vraag is *\"Wat is het verband tussen X en Y?\"* — kijk naar de signaalwoorden ertussen. Die geven het antwoord meestal letterlijk.",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Welk signaalwoord laat **oorzaak/gevolg** zien?",
        options: ["maar","daardoor","bijvoorbeeld","ten slotte"],
        answer: 1,
        wrongHints: [null,"Wat doet 'maar' — laat het zien dat iets veroorzaakt wordt, of zet het iets tegenover elkaar?","Volgt na 'bijvoorbeeld' een gevolg, of een illustratie?","Komt 'ten slotte' aan het begin of aan het eind van een rijtje?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is oorzaak/gevolg?", tekst: "Iets gebeurt OMDAT iets anders gebeurde. Bv: 'Het regende DAARDOOR werd de wedstrijd afgelast.'" },
            { titel: "Welk woord wijst dat aan?", tekst: "'Daardoor' = 'door dat' = gevolg. 'Maar' = tegenstelling, 'bijvoorbeeld' = illustratie, 'ten slotte' = volgorde-tijd. Alleen B." },
          ],
          woorden: [
            { woord: "oorzaak", uitleg: "Wat ergens VAN komt — de reden." },
            { woord: "gevolg", uitleg: "Wat ERUIT komt — het resultaat." },
            { woord: "signaalwoord", uitleg: "Klein woordje dat aangeeft hoe zinnen verbonden zijn." },
          ],
          theorie: "Oorzaak/gevolg-signaalwoorden: omdat, doordat, daardoor, dus, daarom, vandaar. Allemaal koppelen oorzaak ↔ gevolg.",
          voorbeelden: [{ type: "gevolg", tekst: "'Hij at te veel snoep, DAARDOOR werd hij ziek.' = oorzaak (snoep) → gevolg (ziek)." }],
          basiskennis: [{ onderwerp: "6 signaalgroepen", uitleg: "Tijd / Oorzaak/gevolg / Opsomming / Tegenstelling / Voorbeeld / Conclusie." }],
          niveaus: {
            basis: "'Daardoor' = oorzaak/gevolg. B.",
            simpeler: "Stel: 'Het regende, DAARDOOR werd het modderig.' → regen = oorzaak, modder = gevolg. 'Daardoor' wijst dat verband aan. = B.",
            nogSimpeler: "Daardoor = gevolg = B.",
          },
        },
      },
      {
        q: "Welk signaalwoord introduceert een **tegenstelling**?",
        options: ["dus","echter","ook","bijvoorbeeld"],
        answer: 1,
        wrongHints: [null,"Trekt 'dus' een conclusie, of zet het iets tegenover iets anders?","Voegt 'ook' iets toe aan een rij, of laat het een tegenstelling zien?","Geeft 'bijvoorbeeld' een tegenstelling of een illustratie?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een tegenstelling?", tekst: "Iets ONVERWACHTS of TEGENOVERGESTELDS van wat eraan voorafging. 'Het regent — ECHTER, we gaan toch buiten spelen.'" },
            { titel: "Welk woord wijst dat aan?", tekst: "'Echter' = klassiek tegenstelling-signaal. 'Dus' = conclusie, 'ook' = opsomming, 'bijvoorbeeld' = illustratie. Alleen B." },
          ],
          woorden: [
            { woord: "tegenstelling", uitleg: "Iets dat TEGENOVERGESTELD is van wat ervoor stond." },
            { woord: "echter", uitleg: "Formele variant van 'maar'. Wijst op een tegenstelling." },
          ],
          theorie: "Tegenstelling-signaalwoorden: maar, echter, toch, hoewel, desondanks, daarentegen, in tegenstelling tot.",
          voorbeelden: [{ type: "tegenstelling", tekst: "'Hij studeerde hard. ECHTER, hij zakte voor de toets.' = onverwacht / tegenovergesteld." }],
          basiskennis: [{ onderwerp: "Synoniemen tegenstelling", uitleg: "'Maar' (informeel) = 'echter' (formeel). Beide signaleren tegenstelling." }],
          niveaus: {
            basis: "'Echter' = tegenstelling. B.",
            simpeler: "Stel: 'Het is koud. ECHTER, ik ga zwemmen.' Het tweede is ONVERWACHT (je verwacht dat hij niet gaat). 'Echter' wijst dat aan. = B.",
            nogSimpeler: "Echter = tegen = B.",
          },
        },
      },
      {
        q: "Welk woord vat samen / sluit af?",
        options: ["kortom","ten eerste","echter","gisteren"],
        answer: 0,
        wrongHints: [null,"Komt 'ten eerste' aan het begin of aan het einde?","Sluit 'echter' iets af, of zet het iets tegenover iets anders?","Geeft 'gisteren' een conclusie, of zegt het iets over wanneer iets gebeurde?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet samenvatten?", tekst: "Aan het EINDE van een tekst de belangrijkste punten kort herhalen." },
            { titel: "Welk woord wijst dat aan?", tekst: "'Kortom' = klassiek samenvatting-signaal. 'Ten eerste' = begin, 'echter' = tegenstelling, 'gisteren' = tijd. Alleen A." },
          ],
          woorden: [
            { woord: "kortom", uitleg: "Samenvattend, in het kort. Sluit een tekst of betoog af." },
            { woord: "conclusie", uitleg: "De eindslot — wat je uit het hele verhaal kunt opmaken." },
          ],
          theorie: "Samenvatting/conclusie-signaalwoorden: kortom, dus, samenvattend, concluderend, tot slot.",
          voorbeelden: [{ type: "samenvatten", tekst: "'Argument 1, argument 2, argument 3. KORTOM: ik vind dat iedereen meer moet sporten.' = afsluiten + samenvatten." }],
          basiskennis: [{ onderwerp: "Slot van tekst", uitleg: "De laatste alinea heeft vaak 'kortom' of 'tot slot' om af te ronden." }],
          niveaus: {
            basis: "'Kortom' = samenvatten. A.",
            simpeler: "Stel je vertelt 3 dingen aan een vriend, en wil ze samen optellen tot 1 conclusie. 'KORTOM:...' Dat is samenvatten. = A.",
            nogSimpeler: "Kortom = samenvatten = A.",
          },
        },
      },
    ],
  },
  {
    title: "Tekst-opbouw — alinea's, hoofdgedachte",
    explanation: "Een goede tekst is **niet zomaar een rommeltje van zinnen** — er zit **structuur** in. Als je die structuur kent, lees je veel sneller.\n\n**De alinea**\nEen tekst is opgedeeld in **alinea's** (een blok zinnen die samen één onderwerp behandelen). Elke nieuwe alinea = **nieuw deelonderwerp**.\n\n**De hoofdgedachte**\nDe **hoofdgedachte** is de **kern-boodschap** van de tekst — wat de schrijver echt wil zeggen.\n\nWaar staat de hoofdgedachte vaak?\n• In de **eerste alinea** (introductie).\n• In de **laatste alinea** (samenvatting/conclusie).\n• Soms in de **titel**.\n• Soms in een zin met 'kortom', 'samenvattend' of 'het belangrijkste is...'.\n\n**Voorbeeld**:\n*\"**Te weinig water drinken is slecht voor je lichaam.**\n\nJe lichaam heeft elke dag ongeveer 1,5 liter water nodig. Zonder voldoende water krijg je hoofdpijn, kun je je slechter concentreren, en raak je sneller moe.\n\nVeel kinderen drinken te weinig — vooral op school. Een tip: zet altijd een bidon op je tafel.\n\n**Kortom: drink genoeg water, dat is gezonder.**\"*\n\nDe **hoofdgedachte** staat in de eerste regel én wordt in de laatste regel herhaald: *drink genoeg water*.\n\n**Standaard tekstopbouw — drie delen**:\n\n**1. Inleiding** *(eerste alinea)*\nVertelt **waar de tekst over gaat** + introduceert het onderwerp. Vaak ook de hoofdgedachte.\n\n**2. Kern** *(middenste alinea's)*\nUitleg, voorbeelden, argumenten, details. Hier staan de **antwoorden** op de meeste tekstvragen.\n\n**3. Slot** *(laatste alinea)*\nSamenvatting + conclusie + soms een vraag aan de lezer.\n\n**Trucje voor 'hoofdgedachte'-vragen**:\n• Lees alleen **eerste + laatste zin** van elke alinea.\n• Schrijf in **één zin** op: 'Deze tekst gaat over: ...'\n• Vergelijk met de antwoordopties.\n\n**Veelvoorkomende fout**: kinderen kiezen een **detail** ipv de hoofdgedachte. Bv. 'Sara heeft een bidon' (dat is een detail) ipv 'Drinken is belangrijk' (dat is de hoofdgedachte).\n\n**Pro-tip**: als de vraag is *\"Wat is de boodschap van de tekst?\"* — zoek **iets dat in de hele tekst terugkomt**, niet één detail.",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Wat is de **hoofdgedachte**?",
        options: ["De grote kernboodschap van de tekst","De eerste zin","Een random detail","De titel"],
        answer: 0,
        wrongHints: [null,"Past de boodschap van een hele tekst altijd in alleen die eerste zin?","Is een klein feit hetzelfde als de boodschap van de hele tekst?","Geeft de titel altijd de hele boodschap, of is het meer een hint?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is hoofdgedachte?", tekst: "De ENE belangrijkste boodschap van de hele tekst. Niet 1 zin, niet 1 detail, niet de titel." },
            { titel: "Verschil met andere opties", tekst: "Eerste zin = vaak inleiding-feit, niet altijd boodschap. Detail = klein onderdeel. Titel = hint maar te kort." },
          ],
          woorden: [
            { woord: "kernboodschap", uitleg: "De belangrijkste BOODSCHAP — wat moet je onthouden van de hele tekst." },
            { woord: "detail", uitleg: "Een KLEIN feit, niet het hoofdpunt." },
          ],
          theorie: "Hoofdgedachte = wat in ELKE alinea op een of andere manier terugkomt. De rode draad van het hele stuk.",
          voorbeelden: [{ type: "rode draad", tekst: "Tekst over fiets door 4 alinea's = rode draad VERANDERING. Hoofdgedachte = 'fiets is in 200 jaar veranderd'." }],
          basiskennis: [{ onderwerp: "1 boodschap per tekst", uitleg: "Een tekst heeft 1 hoofdgedachte. Alle alinea's ondersteunen die." }],
          niveaus: {
            basis: "Hoofdgedachte = grote kernboodschap. A.",
            simpeler: "Stel je een vriend vraagt 'waar gaat dat artikel over?'. Jij antwoordt in 1 zin = de hoofdgedachte. = A.",
            nogSimpeler: "Hele boodschap = A.",
          },
        },
      },
      {
        q: "Waar staat de **hoofdgedachte** vaak?",
        options: ["In de inleiding of conclusie","Helemaal in het midden","In een voetnoot","In de spelling van moeilijke woorden"],
        answer: 0,
        wrongHints: [null,"Waar lees jij meestal eerst en laatst — in het midden of aan begin/eind?","Staat de kern van een verhaal vaak weggestopt in een voetnoot?","Heeft moeilijke spelling iets te maken met de boodschap van een tekst?"],
        uitlegPad: {
          stappen: [
            { titel: "Waar zoek je eerst?", tekst: "Begin (inleiding) of einde (conclusie). Daar zet de schrijver vaak zijn boodschap." },
            { titel: "Waarom?", tekst: "Schrijvers willen je VAST PAKKEN met de boodschap (begin) of HERHALEN dat je het onthoudt (einde)." },
          ],
          woorden: [
            { woord: "inleiding", uitleg: "Eerste alinea — introduceert het onderwerp." },
            { woord: "conclusie", uitleg: "Laatste alinea — vat samen of trekt slot-beslissing." },
            { woord: "voetnoot", uitleg: "Klein-tekstje onderaan een pagina met extra info. Niet de hoofdboodschap." },
          ],
          theorie: "**Standaard tekstopbouw**: inleiding → kern → slot. Hoofdgedachte vaak in 1e of laatste alinea, soms in titel.",
          voorbeelden: [{ type: "begin+eind", tekst: "Tekst opent: 'Drinken is belangrijk.' Sluit af: 'Kortom: drink genoeg water.' Hoofdgedachte = drinken belangrijk." }],
          basiskennis: [{ onderwerp: "Eerste + laatste tip", uitleg: "Lees eerste én laatste alinea bij hoofdgedachte-vragen. Dat scheelt heel veel tijd." }],
          niveaus: {
            basis: "Begin of eind van tekst. A.",
            simpeler: "Bij een verhaal of artikel komt het belangrijkste vaak BIJ HET BEGIN of HET EIND. Niet midden in. = A.",
            nogSimpeler: "Begin/eind = A.",
          },
        },
      },
      {
        q: "Hoe vind je snel de hoofdgedachte?",
        options: ["Lees eerste + laatste zin van elke alinea","Lees alleen de moeilijkste woorden","Sla alle alinea's over","Kijk alleen naar de titel"],
        answer: 0,
        wrongHints: [null,"Snap je een tekst als je alleen de moeilijke woorden bekijkt?","Kun je de boodschap vinden zonder de tekst te bekijken?","Is een titel altijd genoeg, of moet je ook in de tekst kijken?"],
        uitlegPad: {
          stappen: [
            { titel: "Strategie", tekst: "Niet de hele tekst woord-voor-woord. Pak de eerste + laatste zin van ELKE alinea — daar staat het belangrijkste." },
            { titel: "Waarom werkt dit?", tekst: "Schrijvers zetten hun KERNBOODSCHAP vaak in de eerste zin van een alinea (= 'topic sentence') en herhalen 'm aan het einde." },
          ],
          woorden: [
            { woord: "skimmen", uitleg: "Snel-overzicht-techniek: lees alleen titels, eerste zinnen, dik-gedrukt." },
            { woord: "topic sentence", uitleg: "Eerste zin van een alinea — geeft vaak het mini-onderwerp aan." },
          ],
          theorie: "Snelle hoofdgedachte-vind-strategie:\n1. Lees titel\n2. Lees eerste zin van elke alinea\n3. Lees laatste zin van laatste alinea\n4. Schrijf in 1 zin: 'Deze tekst gaat over...'",
          voorbeelden: [{ type: "skim", tekst: "4 alinea's? 4 eerste zinnen + 1 laatste = 5 zinnen lezen. In 30 sec heb je de boodschap." }],
          basiskennis: [{ onderwerp: "Tijd is kostbaar", uitleg: "Cito heeft 5-7 min per tekst. Skimmen = sneller, niet minder grondig." }],
          niveaus: {
            basis: "Eerste + laatste zin per alinea. A.",
            simpeler: "Niet alle 200 woorden lezen. Lees alleen de eerste zin van elke alinea — daar staat meestal de hoofdpunt. Plus de laatste zin (die vat vaak samen). = A.",
            nogSimpeler: "Skim eerste/laatste zinnen = A.",
          },
        },
      },
    ],
  },
  {
    title: "Skim + scan — slim lezen",
    explanation: "**Twee technieken** die je veel tijd besparen op de Cito-toets:\n\n**1. SKIMMEN** — *snel overzicht*\nDoel: weten waar de tekst over gaat, zonder hem hele te lezen.\n\n**Hoe**:\n• Lees de **titel** + **eerste zin** van elke alinea.\n• Zoek **vetgedrukte woorden** of woorden met aanhalingstekens.\n• Kijk naar **plaatjes** + onderschriften.\n• Tijd: 30 seconden voor een hele tekst.\n\n**Wanneer**:\n• Aan het **begin** — om in 30 sec te weten waar de tekst over gaat.\n• Voordat je vragen leest.\n\n**2. SCANNEN** — *gericht zoeken*\nDoel: een **specifiek antwoord** vinden zonder alle tekst te lezen.\n\n**Hoe**:\n• Je hebt al de vraag gelezen.\n• Kijk in welk deel van de tekst het antwoord ZOU staan.\n• Loop daar **kris-kras doorheen** met je oog tot je een **kernwoord** uit de vraag tegenkomt.\n• Lees alleen **die zin** + de zin ervoor en erna.\n\n**Wanneer**:\n• Bij **specifieke vragen**: 'Hoeveel jaar leeft een hond gemiddeld?'\n• Niet bij hoofd-idee-vragen — daar moet je echt lezen.\n\n**De ideale leesvolgorde voor Cito**:\n\n**Stap 1**: SKIM de tekst (~30 sec) → wat is het onderwerp?\n**Stap 2**: Lees de **vragen** door (~30 sec) → wat moet je weten?\n**Stap 3**: SCAN voor antwoorden (~2-3 min per vraag) → zoek gericht.\n**Stap 4**: Bij twijfel — lees nogmaals het stukje rond het antwoord.\n\n**Belangrijk: het antwoord staat altijd in de tekst** *(of is logisch af te leiden)*.\n\n**Veelgemaakte fout**: alle teksten woord-voor-woord lezen vanaf de eerste zin tot de laatste. Dat kost veel te veel tijd voor een Cito.\n\n**Pro-trucje**: bij de Cito heb je **~5-7 minuten per tekst** met 3-5 vragen. Verdeel: ~1 min skim + 4-6 min vragen. Niet meer dan 2 min op 1 vraag.\n\n**Wat als je geen antwoord vindt?**\n• Lees de zin **eromheen** in de tekst — soms zit het verstopt.\n• Vraag **anders gesteld**: het antwoord is misschien in andere woorden.\n• Kun je het echt niet vinden? **Skip** + ga door.",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Wat is **skimmen**?",
        options: ["Snel overzicht krijgen door titels en eerste zinnen","Heel langzaam woord-voor-woord","Tekst overslaan","Gokken op vragen"],
        answer: 0,
        wrongHints: [null,"Hoort 'snel overzicht' bij langzaam alles lezen of bij iets anders?","Sla je bij skimmen alles over, of pak je juist de hoofdpunten?","Heeft skimmen te maken met lezen of met kansberekening?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is skimmen?", tekst: "Engels woord voor 'snel overvliegen'. Je leest alleen de KERN — titels, eerste zinnen, vetgedrukt." },
            { titel: "Wat het NIET is", tekst: "Geen langzaam woord-voor-woord. Geen overslaan. Geen gokken. Het is gericht-snel-lezen." },
          ],
          woorden: [
            { woord: "skimmen", uitleg: "Snel overzicht krijgen — 30 sec voor een hele tekst." },
            { woord: "scannen", uitleg: "Gericht zoeken — heel ander iets dan skimmen." },
          ],
          theorie: "Skimmen = water-skiën-vergelijking. Je gaat licht over het water (de tekst) — niet duiken. Pakt alleen het OPPERVLAKKIGE.",
          voorbeelden: [{ type: "skim", tekst: "Krantenartikel met 8 alinea's. Skim: titel + eerste zin elke alinea = je weet het onderwerp in 30 sec." }],
          basiskennis: [{ onderwerp: "Snelle vs grondige", uitleg: "Skimmen = snel oppervlakkig. Diep lezen = grondig. Beide hebben hun moment." }],
          niveaus: {
            basis: "Skimmen = snel overzicht via titels + eerste zinnen. A.",
            simpeler: "Stel je hebt geen tijd om een artikel helemaal te lezen. Wat doe je? Titel kijken + eerste zinnen scannen. Dat is skimmen. = A.",
            nogSimpeler: "Skim = snel overzicht = A.",
          },
        },
      },
      {
        q: "Wat is **scannen**?",
        options: ["Gericht zoeken naar een specifiek antwoord","Langzaam herlezen","De tekst kopiëren","Iemand anders laten lezen"],
        answer: 0,
        wrongHints: [null,"Pak je bij scannen alles weer op, of zoek je iets specifieks?","Hoort kopiëren bij scannen, of bij iets heel anders?","Mag iemand anders jouw werk doen tijdens een toets — en is dat scannen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is scannen?", tekst: "Gericht ZOEKEN naar 1 specifiek antwoord. Net als bij een supermarkt-scanner: zoek de barcode, niet alles." },
            { titel: "Hoe?", tekst: "Je weet de vraag al. Loop met je oog door de tekst, zoek het kernwoord. Lees alleen DIE zin." },
          ],
          woorden: [
            { woord: "scannen", uitleg: "Gericht zoeken naar een specifiek antwoord in een tekst." },
            { woord: "kernwoord", uitleg: "Het belangrijkste woord uit de vraag — wat je in de tekst gaat zoeken." },
          ],
          theorie: "Verschil skim vs scan: Skim = ALL, oppervlakkig. Scan = ÉÉN ding, gericht. Beide zijn snel.",
          voorbeelden: [{ type: "scannen", tekst: "Vraag: 'Hoeveel mensen wonen in Brussel?' Scan tekst voor 'Brussel' of een aantal-cijfer. Lees die zin. Klaar." }],
          basiskennis: [{ onderwerp: "Wanneer wat?", uitleg: "Skim BIJ START. Scan PER VRAAG. Niet alles tegelijk." }],
          niveaus: {
            basis: "Scannen = gericht zoeken. A.",
            simpeler: "Stel je zoekt jouw naam in een ledenlijst van 100 namen. Lees je alle 100? Nee — je SCANT, je oog springt naar 'M' en daar zoek je verder. Dat is scannen. = A.",
            nogSimpeler: "Scan = gericht zoeken = A.",
          },
        },
      },
      {
        q: "Welke is de **ideale** leesvolgorde voor Cito?",
        options: ["Skim → vragen lezen → scannen voor antwoord","Hele tekst woord-voor-woord, dan vragen","Vragen eerst gokken, dan tekst lezen","Alleen vragen lezen, geen tekst"],
        answer: 0,
        wrongHints: [null,"Lukt het je in de tijd om elke zin woord-voor-woord te lezen?","Kun je vragen goed beantwoorden zónder de tekst te bekijken?","Heb je genoeg aan alleen de vragen, of moet de tekst er ook bij?"],
        uitlegPad: {
          stappen: [
            { titel: "3 stappen voor Cito", tekst: "1. SKIM tekst (30 sec) — wat is onderwerp? 2. Lees alle vragen — wat moet je weten? 3. SCAN voor elk antwoord." },
            { titel: "Waarom in deze volgorde?", tekst: "Tekst eerst woord-voor-woord = TE TRAAG. Vragen gokken = onbetrouwbaar. Alleen vragen lezen = niet genoeg info." },
          ],
          woorden: [
            { woord: "leesvolgorde", uitleg: "De stappen waarin je een tekst + vragen aanpakt." },
          ],
          theorie: "Tijd op Cito: ~5-7 min per tekst met 3-5 vragen. Volgorde skim→vragen→scan past in die tijd. Anders loop je achter.",
          voorbeelden: [{ type: "tijd", tekst: "Skim 30 sec + vragen lezen 30 sec + scannen ~3 min = ~4 min. Je hebt 1-3 min over voor twijfelvragen." }],
          basiskennis: [{ onderwerp: "Strategie wint van snelheid", uitleg: "Slim aanpakken > snel lezen. Een goede strategie scheelt minuten." }],
          niveaus: {
            basis: "Skim → vragen → scan. A.",
            simpeler: "Stappen voor Cito: (1) snel overzicht tekst (skim), (2) lees wat je moet vinden (vragen), (3) zoek elk antwoord gericht (scan). Dat is de slimste volgorde. = A.",
            nogSimpeler: "Skim → vragen → scan = A.",
          },
        },
      },
    ],
  },
  {
    title: "Vraagsoorten — verschillende aanpakken",
    explanation: "Er zijn **5 hoofdsoorten** vragen bij begrijpend lezen. Per soort een andere strategie.\n\n**1. Letterlijke vraag** *(staat erin)*\nVoorbeeld: *\"Hoeveel inwoners heeft Brussel?\"*\n• Antwoord staat **letterlijk** in de tekst.\n• Strategie: **scannen** voor het kernwoord, lees die zin.\n\n**2. Inferentie-vraag** *(tussen de regels)*\nVoorbeeld: *\"Waarom denkt de schrijver dat dit slecht is?\"*\n• Antwoord staat **niet letterlijk** — je leidt het af uit context.\n• Strategie: kijk naar emotionele woorden + signaalwoorden.\n\n**3. Hoofdgedachte-vraag**\nVoorbeeld: *\"Wat is de boodschap van de tekst?\"*\n• Strategie: lees inleiding + slotalinea. Zoek wat **in hele tekst** terugkomt.\n• Verwerp opties die alleen één detail beschrijven.\n\n**4. Woordbetekenis-vraag**\nVoorbeeld: *\"Wat betekent het woord 'desondanks'?\"*\n• Strategie: kijk naar de **zin eromheen**. Wat past in die context?\n• Vaak geeft het signaalwoord-type al een hint (tegenstelling, oorzaak, etc.).\n\n**5. Tekstopbouw-vraag**\nVoorbeeld: *\"Hoe is de tekst opgebouwd?\"*\n• Strategie: kijk naar **alinea-onderwerpen**: probleem → oplossing? Vóór → tegen? Tijdslijn? Voorbeelden?\n• Mogelijke patronen:\n  - **Chronologisch**: eerst dit, daarna dat (tijdvolgorde)\n  - **Argumentatief**: standpunt → argumenten → conclusie\n  - **Probleem-oplossing**: probleem beschreven → oplossing voorgesteld\n  - **Voor en tegen**: argumenten pro → argumenten contra\n  - **Algemeen → specifiek**: hoofdregel → voorbeelden\n\n**Pas op voor de strikvragen!**\n\n**Strikvraag 1: NIET-vragen**\n*\"Wat staat er **NIET** in de tekst?\"* — onderlijn 'NIET' om te onthouden! Vergeet je de NIET, kies je het tegenovergestelde antwoord.\n\n**Strikvraag 2: Bijna-identieke opties**\nTwee antwoordopties zien er bijna hetzelfde uit, maar met **één belangrijk verschil**. Lees beide woord-voor-woord.\n\n**Strikvraag 3: Meningvraag**\n*\"Wat zou de schrijver zeggen over...?\"* — gebruik de **toon** en **standpunt** uit de tekst, niet jouw mening.\n\n**Strikvraag 4: Letterlijke woorden in foute optie**\nDe foute optie gebruikt soms **letterlijke woorden uit de tekst** maar in verkeerde context. Lees zorgvuldig.\n\n**Geheugenezel — 'POOL'**:\n• **P**lekken (waar staat het?)\n• **O**mliggende zinnen (lees in context)\n• **O**verkoepelend (hoofdgedachte vs detail)\n• **L**etterlijk vs leiden (staat het er, of moet ik afleiden?)",
    svg: tekstsoortenSvg(),
    checks: [
      {
        q: "Een vraag met **'NIET'** vereist...",
        options: ["Het antwoord dat ECHT NIET in de tekst staat","Het antwoord dat WEL in de tekst staat","Een random gok","Geen antwoord"],
        answer: 0,
        wrongHints: [null,"Vraagt 'NIET' juist het tegenovergestelde, of het normale antwoord?","Levert leeg laten je punten op? En leveren strafpunten op voor fouten?","Wat win je met geen antwoord — punten, of niks?"],
        uitlegPad: {
          stappen: [
            { titel: "NIET-vraag herkennen", tekst: "Het woordje 'NIET' verandert ALLES. Onderlijn het in je hoofd of op papier." },
            { titel: "Wat zoek je?", tekst: "Bij 'wat staat NIET in de tekst': zoek het ENE antwoord dat NIET in de tekst voorkomt." },
          ],
          woorden: [
            { woord: "NIET-vraag", uitleg: "Vraag waarin 'NIET' staat — vraagt het tegenovergestelde van een normale vraag." },
          ],
          theorie: "Bij een NIET-vraag: 3 antwoorden komen WEL in tekst voor (vink af). 1 komt NIET voor. Die ene is het juiste antwoord.",
          voorbeelden: [{ type: "checklist", tekst: "Vraag: 'Welk argument noemt schrijver NIET?' Loop alle 4 opties langs in tekst → 3 staan er, 1 niet → die niet-staande is je antwoord." }],
          basiskennis: [{ onderwerp: "Lees vragen 2x", uitleg: "Vooral bij NIET — anders kies je het tegenovergestelde antwoord." }],
          niveaus: {
            basis: "NIET-vraag = zoek wat NIET in tekst staat. A.",
            simpeler: "Stel: 'Welk dier zit NIET in deze dierentuin?'. Je kijkt welk dier in de tekst voorkomt en welk niet. Het ENE dier dat niet genoemd is = jouw antwoord. = A.",
            nogSimpeler: "NIET = zoek de 1 die er niet is = A.",
          },
        },
      },
      {
        q: "Hoe vind je antwoord op een **inferentie-vraag** (tussen de regels)?",
        options: ["Letten op emoties en signaalwoorden in tekst","Letterlijk woord opzoeken","Gokken","Niet beantwoorden"],
        answer: 0,
        wrongHints: [null,"Staat het antwoord van een 'tussen-de-regels' vraag letterlijk in de tekst?","Werkt gokken zonder de tekst te bekijken bij dit soort vragen?","Levert een leeg antwoord punten op?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is inferentie?", tekst: "Het antwoord staat NIET letterlijk in de tekst. Je moet het AFLEIDEN uit hints." },
            { titel: "Welke hints?", tekst: "Emotionele woorden, signaalwoorden (omdat, daarom), beschrijvingen van personages — die geven samen het antwoord." },
          ],
          woorden: [
            { woord: "inferentie", uitleg: "Iets afleiden uit wat er staat — niet wat letterlijk staat." },
            { woord: "tussen de regels lezen", uitleg: "De boodschap snappen ook al staat ze niet letterlijk." },
          ],
          theorie: "Bij inferentie-vragen ('waarom?' / 'wat denkt schrijver?' / 'hoe voelt personage?'): zoek HINTS in de tekst, niet letterlijke antwoorden. Letterlijk zoeken werkt niet.",
          voorbeelden: [{ type: "afleiden", tekst: "Tekst: 'Sara liet haar hoofd hangen.' = inferentie: Sara is verdrietig. Niet letterlijk gezegd, wel duidelijk." }],
          basiskennis: [{ onderwerp: "Letterlijk vs inferentie", uitleg: "Letterlijk = woord-voor-woord vinden. Inferentie = puzzelstukjes verbinden." }],
          niveaus: {
            basis: "Inferentie = let op emoties + signaalwoorden. A.",
            simpeler: "Stel iemand zucht en kijkt op de klok. Zegt hij 'ik verveel me'? Nee — maar je SNAPT het wel. Dat is tussen de regels lezen. Bij inferentie-vragen werkt het zo. = A.",
            nogSimpeler: "Hints zoeken = A.",
          },
        },
      },
      {
        q: "Wat is een **strikvraag**?",
        options: ["Bedoeld om je af te leiden van het juiste antwoord","Een grappige vraag","Een korte vraag","Een vraag in dialect"],
        answer: 0,
        wrongHints: [null,"Is een strikvraag bedoeld om je te laten lachen, of om je in de val te lokken?","Heeft een strikvraag iets met de lengte te maken, of met de inhoud?","Hoort dialect bij een strikvraag, of is het iets anders?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een strik?", tekst: "Een val die je vangt. Een strikvraag is bedoeld om je in de VAL te lokken — verleiden om het verkeerde antwoord te kiezen." },
            { titel: "Hoe herken je 'm?", tekst: "Verwarrende formulering, NIET-woord verstopt, twee bijna-gelijke opties, of woorden uit tekst in foute volgorde." },
          ],
          woorden: [
            { woord: "strikvraag", uitleg: "Vraag bedoeld om je te misleiden — je in een val te lokken." },
            { woord: "afleiden", uitleg: "Iemand zijn aandacht ergens anders krijgen." },
            { woord: "dialect", uitleg: "Streektaal — bv. Limburgs of Brabants." },
          ],
          theorie: "Veel-voorkomende strikken bij Cito:\n- 'NIET' verstopt in vraag\n- 2 antwoordopties bijna gelijk\n- Foute optie gebruikt LETTERLIJKE woorden uit tekst\n- Vraag draait om jouw mening (gebruik tekst-mening, niet eigen)",
          voorbeelden: [{ type: "strik", tekst: "Vraag: 'Welk argument noemt schrijver NIET?' — als je 'NIET' mist, kies je het verkeerde antwoord." }],
          basiskennis: [{ onderwerp: "Lees zorgvuldig", uitleg: "Bij Cito: liever 30 sec extra lezen dan strik missen." }],
          niveaus: {
            basis: "Strikvraag = bedoeld om je af te leiden. A.",
            simpeler: "Stel: een vraag is zo geformuleerd dat je het verkeerde antwoord kiest. Dat heet strikvraag. Niet om je te plagen — om te testen of je goed leest. = A.",
            nogSimpeler: "Misleidend = strik = A.",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "**Snelle samenvatting**:\n\n**3 tekstsoorten**:\n• Informatief — feiten\n• Betogend — overtuigen\n• Verhalend — vermaken\n\n**6 signaalwoord-groepen**:\n• Tijd, oorzaak/gevolg, opsomming, tegenstelling, voorbeeld, conclusie\n\n**Tekst-opbouw**: inleiding + kern + slot. Hoofdgedachte vaak in 1e of laatste alinea.\n\n**Slim lezen**: skim eerst, scan voor antwoorden.\n\n**Vraagsoorten**: letterlijk, inferentie, hoofdgedachte, woordbetekenis, opbouw — elk een eigen aanpak.\n\n**5 grote tips voor de Cito**:\n1. **Lees de vragen vóór de tekst** — weet wat je zoekt.\n2. **Skim** de tekst eerst — 30 seconden voor overzicht.\n3. **Scan** gericht voor het antwoord — niet alles herlezen.\n4. **Onderlijn 'NIET'** in NIET-vragen.\n5. **Skip** moeilijke vragen + kom later terug.\n\n**Veel succes!**\n\n*\"Begrijpend lezen is geen ijsschots — je hoeft niet alles te begrijpen, je moet de juiste delen vinden.\"*",
    svg: signaalwoordenSvg(),
    checks: [
      {
        q: "Welk signaalwoord betekent **OMDAT** (oorzaak)?",
        options: ["doordat","echter","bijvoorbeeld","kortom"],
        answer: 0,
        wrongHints: [null,"Drukt 'echter' een oorzaak uit, of zet het iets tegenover iets anders?","Geeft 'bijvoorbeeld' een oorzaak, of een illustratie?","Sluit 'kortom' af, of geeft het een reden?"],
        uitlegPad: {
          stappen: [
            { titel: "Synoniemen van 'omdat'", tekst: "'Doordat' is het meest direct synoniem. Allebei: oorzaak aanwijzen." },
            { titel: "Andere opties", tekst: "Echter = tegenstelling, bijvoorbeeld = illustratie, kortom = samenvatten. Niet hetzelfde als 'omdat'." },
          ],
          woorden: [
            { woord: "doordat", uitleg: "Wijst aan: door wat? = de oorzaak. Synoniem van 'omdat'." },
          ],
          theorie: "Oorzaak-signaalwoorden: omdat, doordat, want, vanwege, aangezien. Allemaal wijzen ze op de REDEN.",
          voorbeelden: [{ type: "synoniem", tekst: "'Hij ging naar bed OMDAT hij moe was' = 'Hij ging naar bed DOORDAT hij moe was'." }],
          basiskennis: [{ onderwerp: "Synoniemen kennen", uitleg: "Verschillende woorden voor hetzelfde — handig om te herkennen." }],
          niveaus: {
            basis: "'Doordat' = synoniem van 'omdat'. A.",
            simpeler: "'Omdat' en 'doordat' betekenen praktisch hetzelfde: ze geven de REDEN aan. = A.",
            nogSimpeler: "Doordat = omdat = A.",
          },
        },
      },
      {
        q: "Welke vraag is een **hoofdgedachte-vraag**?",
        options: ["Wat is de boodschap van de tekst?","Hoeveel kinderen zijn er in de klas?","Welk woord betekent X?","Wat staat er in regel 4?"],
        answer: 0,
        wrongHints: [null,"Gaat 'hoeveel kinderen' over de hele tekst, of over één klein feit?","Vraagt 'wat betekent X' naar de hele boodschap, of naar één woord?","Wijst 'regel 4' naar de boodschap van de tekst, of naar één plek?"],
        uitlegPad: {
          stappen: [
            { titel: "Hoofdgedachte = boodschap", tekst: "Hoofdgedachte-vragen vragen naar de HELE tekst, niet één deel." },
            { titel: "Welke optie past?", tekst: "'Boodschap van tekst' = over alles. Andere zijn details: aantal, woord, regel." },
          ],
          woorden: [
            { woord: "boodschap", uitleg: "De grote betekenis van een tekst — wat de schrijver wil overbrengen." },
          ],
          theorie: "Hoofdgedachte-vragen herken je aan: 'boodschap', 'kerngedachte', 'wat is het belangrijkste', 'wat wil schrijver zeggen'. Allemaal gaan ze over de HELE tekst.",
          voorbeelden: [{ type: "boodschap", tekst: "'Wat is de boodschap van het verhaal?' = hoofdgedachte. 'Hoe oud is Sara?' = detail." }],
          basiskennis: [{ onderwerp: "Boodschap vs detail", uitleg: "Boodschap = hele tekst. Detail = klein deel." }],
          niveaus: {
            basis: "'Boodschap' = hoofdgedachte. A.",
            simpeler: "Welke vraag gaat over de HELE tekst en niet één klein feit? 'Wat is de boodschap?' Andere vragen gaan over kleine details. = A.",
            nogSimpeler: "Boodschap = hoofdgedachte = A.",
          },
        },
      },
      {
        q: "Wat doe je **EERST** bij een tekst met vragen?",
        options: ["Skimmen + vragen doorlezen","Hele tekst woord-voor-woord","Antwoorden gokken","Tekst overslaan"],
        answer: 0,
        wrongHints: [null,"Hoeveel tijd kost het om elke zin uit te pluizen — heb je dat?","Kun je antwoord geven zonder iets gelezen te hebben?","Krijg je punten als je geen antwoord geeft?"],
        uitlegPad: {
          stappen: [
            { titel: "EERST overzicht", tekst: "Niet meteen woord-voor-woord lezen. Eerst SKIM (snel overzicht) + lees de vragen." },
            { titel: "Waarom?", tekst: "Als je weet wat je moet zoeken, lees je gerichter. Tijdsbesparing." },
          ],
          woorden: [
            { woord: "skimmen", uitleg: "Snel overzicht, titels + eerste zinnen." },
          ],
          theorie: "Slimme leesvolgorde: 1) skim tekst, 2) lees vragen, 3) scan voor antwoorden. Zo werk je gericht ipv blind.",
          voorbeelden: [{ type: "tijd", tekst: "Skim 30 sec + vragen 30 sec = 1 min. Daarna scan je per vraag. Totaal sneller dan alles woord-voor-woord." }],
          basiskennis: [{ onderwerp: "Tijd is kostbaar", uitleg: "Cito heeft strakke tijd per onderdeel. Strategie wint." }],
          niveaus: {
            basis: "Skim + vragen lezen = eerste stap. A.",
            simpeler: "Stel je krijgt een lange tekst. Begin je woord-voor-woord? Nee — eerst even snel scannen wat erin staat (skim) + bekijk de vragen. Daarna gericht zoeken. = A.",
            nogSimpeler: "Skim eerst = A.",
          },
        },
      },
      {
        q: "Hoeveel tijd heb je ongeveer per tekst (3-5 vragen) op Cito?",
        options: ["~5-7 minuten","30 seconden","30 minuten","1 uur"],
        answer: 0,
        wrongHints: [null,"Lukt het je in een halve minuut om een tekst én 3-5 vragen te doen?","Krijg je echt 30 minuten voor maar één tekst?","Is een uur per tekst realistisch — of moet er meer mee in dat uur?"],
        uitlegPad: {
          stappen: [
            { titel: "Cito-tijd per tekst", tekst: "Bij begrijpend lezen krijg je ~5-7 minuten per tekst-met-vragen. Niet meer, niet minder." },
            { titel: "Hoe verdeel je dat?", tekst: "~30 sec skim + ~30 sec vragen lezen + ~1 min per vraag voor scannen = past in 5-7 min." },
          ],
          woorden: [
            { woord: "tijdsdruk", uitleg: "Het gevoel dat je moet opschieten om alle vragen op tijd te beantwoorden." },
          ],
          theorie: "Doorstroomtoets is timed. Begrijpend lezen heeft ~50 vragen totaal in ~75 min. Per vraag ~1.5 min — bij 5 vragen per tekst = 7.5 min per tekst.",
          voorbeelden: [{ type: "verdeling", tekst: "Tekst met 4 vragen: 30s skim + 30s vragen + 4×1min scan = 5 min. Past." }],
          basiskennis: [{ onderwerp: "Skip moeilijke vraag", uitleg: "Vraag te lastig? Skip + kom later terug. Niet vastlopen." }],
          niveaus: {
            basis: "5-7 min per tekst. A.",
            simpeler: "Bij Cito: ongeveer een minuut of 5-7 voor een tekst plus de vragen erover. Moet je strak op tijd werken. = A.",
            nogSimpeler: "5-7 min = A.",
          },
        },
      },
      {
        q: "Wat helpt bij een NIET-vraag?",
        options: ["Onderlijn of markeer 'NIET'","Skip 'm","Antwoord zonder lezen","Vraag toelichting"],
        answer: 0,
        wrongHints: [null,"Verlies je punten als je 'm overslaat? Wat kan je zelf doen om de NIET niet te missen?","Werkt antwoorden zonder de tekst echt?","Mag dat tijdens een toets, en helpt het je verder?"],
        uitlegPad: {
          stappen: [
            { titel: "Het probleem met 'NIET'", tekst: "'NIET' is klein, makkelijk te missen. Mis je 'm = kies je het tegenovergestelde antwoord = fout." },
            { titel: "Oplossing", tekst: "Onderlijn of markeer 'NIET' direct als je het ziet — zo blijf je je bewust dat je het tegenovergestelde zoekt." },
          ],
          woorden: [
            { woord: "markeren", uitleg: "Met potlood/pen omcirkelen of onderstrepen — om aandacht op iets te vestigen." },
          ],
          theorie: "Strategie bij NIET-vragen: (1) markeer 'NIET' (2) loop ALLE 4 opties langs in tekst (3) 3 staan er, 1 niet, die ene = antwoord.",
          voorbeelden: [{ type: "markeren", tekst: "Vraag: 'Welk dier zit __NIET__ in de dierentuin?' Onderlijnen helpt je herinneren: ik zoek het ene dat MIST." }],
          basiskennis: [{ onderwerp: "Tijdens toets schrijven mag", uitleg: "Bij Cito mag je het examenboekje markeren met potlood." }],
          niveaus: {
            basis: "Onderlijn 'NIET'. A.",
            simpeler: "'NIET' is een klein woord, makkelijk te missen. Onderlijn 'm — dan vergeet je niet dat je het TEGENOVERGESTELDE zoekt. = A.",
            nogSimpeler: "Markeer NIET = A.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const begrijpendLezenStrategie = {
  id: "begrijpend-lezen-strategie",
  title: "Begrijpend lezen — strategieën voor groep 5-8",
  emoji: "📖",
  level: "groep5-8",
  subject: "begrijpend-lezen",
  // SLO-referentieniveau (sprint-4 G4a): 1F + 1S leesvaardigheid.
  // 1F = einde basisschool minimum; 1S = streef voor havo/vwo-bound.
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — zakelijke teksten",
  intro:
    "Hoe je slim leest in plaats van alles woord-voor-woord. Tekstsoorten herkennen (informatief/betogend/verhalend), 6 groepen signaalwoorden, hoofdgedachte vinden, skim+scan-techniek, en 5 vraagsoorten met aparte aanpakken. Cito-relevant.",
  triggerKeywords: [
    "begrijpend lezen","begrijpend","tekst lezen","tekstanalyse",
    "informatieve tekst","betogende tekst","verhalende tekst",
    "signaalwoorden","oorzaak gevolg","tegenstelling","opsomming",
    "hoofdgedachte","tekst opbouw","alinea",
    "skim","scan","slim lezen",
    "letterlijke vraag","inferentie","woordbetekenis",
  ],
  chapters,
  steps,
};

export default begrijpendLezenStrategie;
