// Leerpad: Gezonde voeding - groep 6-8 wereldoriëntatie/gezondheid.
// toets-relevant. 1F. 4 stappen.

const stepEmojis = ["🍎", "🥦", "🧂", "🏆"];

const chapters = [
  { letter: "A", title: "Waarom eten?", emoji: "🍎", from: 0, to: 0 },
  { letter: "B", title: "Schijf van Vijf", emoji: "🥦", from: 1, to: 1 },
  { letter: "C", title: "Wat te beperken", emoji: "🧂", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Waarom + wat eten we?",
    explanation:
      "Eten = **brandstof** voor je lichaam. Net als een auto benzine nodig heeft.\n\n**Waarom moet je eten?**\n• **Energie** *(om te lopen, leren, sporten)*.\n• **Groei** *(als kind groei je nog)*.\n• **Reparatie** *(cellen vervangen)*.\n• **Bescherming** *(immuunsysteem)*.\n• **Hersenen** *(20% van je energie gaat naar hersenen)*.\n\n**Voedingsstoffen** = wat in eten zit:\n\n**1. Koolhydraten** *(suikers + zetmeel)* 🍞:\n• **Snelle energie**.\n• Zit in: brood, pasta, rijst, aardappelen, granen, fruit.\n• Hoeveel: ~50-60% van je voeding.\n• **Vezels** *(koolhydraat die je niet verteert)*: zit in volkoren + groente. Goed voor darmen.\n\n**2. Eiwitten** *(proteïne)* 🍗:\n• Voor **groei + spieropbouw + reparatie**.\n• Zit in: vlees, vis, eieren, melk, kaas, peulvruchten *(bonen, linzen)*, noten, soja, tofoe.\n• Hoeveel: ~15% van voeding.\n• Veganistische bron: bonen + linzen + tofoe + quinoa.\n\n**3. Vetten** 🥑:\n• **Brandstof** + bouwsteen voor cellen + hormonen.\n• **Goede vetten**: olijfolie, noten, avocado, vette vis.\n• **Slechte vetten**: koek, frituur, vet vlees, palmolie *(vermijden)*.\n• Hoeveel: ~30% van voeding.\n\n**4. Vitamines** 💊:\n• **Mini-stoffen** maar essentieel.\n• **Vitamine A**: zien, huid *(wortels, vis)*.\n• **B-vitamines**: energie, zenuwen *(vlees, granen)*.\n• **Vitamine C**: immuunsysteem *(sinaasappel, paprika)*.\n• **Vitamine D**: botten *(zon, vis)* — sommige mensen, zoals kinderen tot 4 jaar, krijgen in NL extra vitamine D.\n• **Vitamine E + K** ook.\n\n**5. Mineralen**:\n• **Calcium**: botten *(melk, kaas)*.\n• **IJzer**: bloed *(vlees, spinazie)*.\n• **Magnesium, zink, jood** ook belangrijk.\n\n**6. Water** 💧:\n• Lichaam = **60% water**!\n• Een volwassene drinkt **1,5-2 liter per dag**; een kind van 9-12 jaar ongeveer **1-1,5 liter**.\n• Verlies via plassen, zweten, ademen.\n• Te weinig = dorst + hoofdpijn.\n\n**Hoeveel eten per dag?**\n• Kind 6-13 jaar: ~1800-2200 kcal/dag.\n• Volwassen: 2000-2500 kcal.\n• Sporters: meer.\n\n**Drie maaltijden + 2-3 tussendoortjes** = aanbevolen.\n\n**Toets-feitje**:\n**1 kilo lichaamsvet** = ongeveer **7700 kcal**. Om af te vallen moet je 7700 kcal minder eten of meer bewegen. Daarom werkt 'snel afvallen' bijna nooit op lange termijn.",
    checks: [
      {
        q: "Waarvoor zijn **eiwitten** vooral?",
        options: ["Groei + spieren + reparatie", "Energie + warmte + snelle kracht", "Vitamines + mineralen + vezels", "Vocht + afkoelen + dorst lessen"],
        answer: 0,
        wrongHints: [null, "Energie halen we vooral uit koolhydraten en vetten.", "Dat zijn andere voedingsstoffen.", "Daarvoor drink je water."],
        uitlegPad: {
          stappen: [
            { titel: "3 hoofd-voedingsstoffen", tekst: "Eten heeft 3 grote stof-groepen: koolhydraten (energie), eiwitten (bouwen), vetten (reserve + cel-bouw)." },
            { titel: "Eiwitten = bouwstenen", tekst: "Eiwitten heten ook 'proteïnen'. Ze zijn de BOUWSTENEN van spieren, organen, haren, huid. Vooral nodig om te groeien en wonden te helen." },
            { titel: "Waar zit eiwit in?", tekst: "Vlees, vis, eieren, melk, kaas, bonen, linzen, noten, tofu. Zonder eiwit kun je niet groeien." },
          ],
          woorden: [
            { woord: "eiwit / proteïne", uitleg: "Voor groei + spieropbouw + reparatie." },
            { woord: "koolhydraat", uitleg: "Voor energie (brood, pasta, rijst)." },
            { woord: "vet", uitleg: "Voor reserve + cel-bouw (olie, noten)." },
          ],
          theorie: "Toets-truc voedingsstoffen: koolhydraten = energie. Eiwitten = bouwen. Vetten = reserve. Vitamines = beschermen.",
          voorbeelden: [
            { type: "stap", tekst: "Spieren = grotendeels gemaakt van eiwit." },
            { type: "stap", tekst: "Kinderen hebben extra eiwit nodig om te groeien." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: 'eiwit = bouwsteen'. Energie komt vooral uit koolhydraten." }],
          niveaus: {
            basis: "Eiwit = bouwen + groeien + reparatie.",
            simpeler: "Eiwit zit in vlees/vis/melk en bouwt spieren.",
            nogSimpeler: "Eiwit = bouwsteen.",
          },
        },
      },
      {
        q: "Hoeveel **water** moet een volwassene ongeveer per dag drinken?",
        options: ["1,5-2 liter", "0,5-1 liter", "3-4 liter", "5-6 liter"],
        answer: 0,
        wrongHints: [null, "0,5-1 liter is maar 2 tot 4 glazen. Je verliest elke dag meer vocht door plassen, zweten en ademen.", "3-4 liter is 12 tot 16 glazen. Zoveel heeft een kind niet nodig.", "5-6 liter is meer dan 20 glazen. Zoveel heeft niemand nodig."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom water belangrijk is", tekst: "Je lichaam bestaat voor **60% uit water**. Elke dag verlies je water (plassen, zweten, ademen). Dat moet je aanvullen — anders krijg je dorst, hoofdpijn en moeheid." },
            { titel: "Hoeveel?", tekst: "Aanbeveling: **1,5 tot 2 liter** per dag voor een volwassene (een kind van 9-12 jaar: ongeveer 1-1,5 liter). Dat is ongeveer **6-8 glazen** water (200-250 ml per glas)." },
            { titel: "Telt thee/melk/sap ook mee?", tekst: "Ja — alle drinken telt mee voor je vocht-inname. Maar **water** is de gezondste keuze. Frisdrank + suiker-sapjes geven wel vocht maar ook veel suiker." },
          ],
          woorden: [
            { woord: "vocht-inname", uitleg: "Hoeveel water/drinken je per dag binnenkrijgt." },
            { woord: "uitdroging", uitleg: "Te weinig water = lichaam werkt slechter." },
          ],
          theorie: "Toets-feit: **60% water** in lichaam. **1,5-2 liter** drink-advies per dag voor een volwassene. Tekenen van te weinig: donkere urine, dorst, hoofdpijn, moe.",
          voorbeelden: [
            { type: "stap", tekst: "Bij sport of warm weer: meer water nodig (door zweten verlies je extra)." },
            { type: "stap", tekst: "5 liter per dag is te veel — kan zelfs gevaarlijk zijn (water-vergiftiging). 100 ml is veel te weinig." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: voor een volwassene 6-8 glazen water per dag = 1,5-2 liter. Plan zelf: 2 bij ontbijt, 2 bij lunch, 2 tussendoor, 2 bij avondeten." }],
          niveaus: {
            basis: "Een volwassene drinkt ongeveer 1,5 tot 2 liter water per dag.",
            simpeler: "Ongeveer 6-8 glazen water (250 ml elk).",
            nogSimpeler: "1,5-2 liter",
          },
        },
      },
      {
        q: "Waar zitten veel **vezels** in?",
        options: ["Volkoren en groente", "Kaas en eieren", "Kipfilet en vis", "Melk en yoghurt"],
        answer: 0,
        wrongHints: [null, "Kaas en eieren geven vooral eiwit. Vezels komen uit planten.", "Kip en vis komen van dieren — daar zitten geen vezels in.", "Melk en yoghurt geven vooral calcium. Waar zitten de 'draadjes' van planten in?"],
      },
      {
        q: "Welke vitamine maakt je lichaam vooral met hulp van de **zon**?",
        options: ["D", "C", "A", "K"],
        answer: 0,
        wrongHints: [null, "Vitamine C haal je vooral uit sinaasappel en paprika.", "Vitamine A zit veel in wortels.", "Vitamine K zit vooral in groene bladgroente."],
        uitlegPad: {
          stappen: [
            { titel: "Vitamines = mini-helpers", tekst: "Vitamines zijn kleine stoffen die je lichaam nodig heeft om goed te werken. Elke vitamine heeft een eigen taak." },
            { titel: "Vitamine D = van de zon", tekst: "Zonlicht op je huid maakt vitamine D aan. Vitamine D is nodig voor sterke BOTTEN en tanden." },
            { titel: "In Nederland: soms extra vitamine D", tekst: "In herfst en winter is de zon in NL zwak, dus maakt je huid dan weinig vitamine D. Voor sommige groepen raden artsen extra vitamine D aan (druppeltjes/pilletje), zoals kinderen tot 4 jaar en mensen die weinig buiten komen." },
          ],
          woorden: [
            { woord: "vitamine D", uitleg: "Voor botten + tanden. Van zon (huid) of vis." },
            { woord: "vitamine C", uitleg: "Voor immuunsysteem. Van sinaasappel, paprika, kiwi." },
            { woord: "vitamine A", uitleg: "Voor zien + huid. Van wortels, vis." },
          ],
          theorie: "Toets-truc vitamines: D = zon (denk: D voor 'daglicht'). C = sinaasappel (kleur). A = wortel (ogen). B = energie (granen, vlees).",
          voorbeelden: [
            { type: "stap", tekst: "Vitamine D: zon + vette vis." },
            { type: "stap", tekst: "Vitamine C: fruit/groente met veel kleur." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Te weinig vitamine D = zwakkere botten. Kom je weinig buiten? Vraag de huisarts of je extra vitamine D nodig hebt." }],
          niveaus: {
            basis: "Vitamine D = van zonlicht. Voor botten.",
            simpeler: "D = zon = sterke botten.",
            nogSimpeler: "D = Daglicht!",
          },
        },
      },
    ],
  },
  {
    title: "Schijf van Vijf",
    explanation:
      "**Schijf van Vijf** = NL-richtlijn voor gezond eten. Door **Voedingscentrum**.\n\nVerdeeld in **5 vakken**:\n\n**Vak 1: Groente + fruit** 🥕🍎\n• **250 gram groente** per dag *(2 stukken)*.\n• **2 stuks fruit** per dag *(1 stuk = ongeveer 100 g).*\n• Liefst **variatie** in kleuren *(kleurrijke borden = veel vitamines)*.\n• Vers en diepvries zijn allebei prima. Uit blik of pot mag ook — let dan op zout en suiker.\n\n**Vak 2: Brood + graanproducten + aardappelen** *(ook rijst, pasta, ontbijtgranen)* 🍞🥔\n• Liefst **volkoren** *(meer vezels)*.\n• Aantal: ~4-6 sneetjes brood + 1 keer warm met aardappel/pasta/rijst per dag.\n\n**Vak 3: Zuivel, noten, vis, ei, vlees + peulvruchten** — zuivel + noten 🥛🥜\n• Melk, yoghurt, kwark, kaas.\n• 2-3 porties per dag.\n• Bevat calcium + eiwit + B12.\n\n**Vak 3 (vervolg): vlees, vis, ei + plantaardige eiwitten** 🐟🥚\n• 1-2 keer per dag.\n• 1 x **vis per week** *(omega-3)*.\n• Plantaardige alternatieven *(peulvruchten, tofu)*.\n• Limiet vlees: max 500 g per week *(daarvan max 300 g rood vlees)*.\n\n**Vak 4: Smeer- en kookvetten** 🌻\n• Liefst **plantaardige** olie *(olijfolie, zonnebloemolie)*.\n• Liever zachte margarine of halvarine dan roomboter.\n• Beperkt — kleinste vak.\n\n**Vak 5: Dranken** 💧\n• Water, thee, koffie *(zonder suiker)*.\n• Volwassene 1,5-2 liter per dag; kind 9-12 jaar ongeveer 1-1,5 liter.\n\n**Buiten de schijf**:\n• Snoep, frisdrank, koek, frituur, chips.\n• Af en toe een beetje kan, maar ze bevatten weinig goede stoffen.\n• Alcohol staat er ook buiten — en is voor kinderen helemaal niet.\n\n**Visuele tips**:\n• **Helft bord** = groente + fruit.\n• **Kwart bord** = volkoren-koolhydraten.\n• **Kwart bord** = eiwit *(vis/vlees/peul)*.\n• Beetje **gezond vet**.\n\n**3 maaltijden + tussendoortjes**:\n\n**Ontbijt** 🍳:\n• Volkoren brood + kaas + tomaat.\n• Of: havermout met fruit + yoghurt.\n• **Belangrijkste maaltijd** *(energie voor school)*.\n• Niet overslaan!\n\n**Lunch** 🥪:\n• Volkoren brood + beleg *(vis, kaas, vlees, hummus)*.\n• + 1 stuk fruit.\n• + glas melk/water.\n\n**Avondeten** 🍝:\n• Aardappel/rijst/pasta + groente + vis/vlees/peulvrucht.\n• Variatie in kleuren.\n• Eet langzaam = beter verzadigd.\n\n**Tussendoortjes** 🍎:\n• Fruit *(altijd goed)*.\n• Handvol noten.\n• Glas melk.\n• Volkoren-koek af en toe.\n• **Niet**: zak chips, snoep, frisdrank.\n\n**Veganistisch / vegetarisch**:\n• **Vegetarisch** = geen vlees + vis, wel zuivel + ei.\n• **Veganistisch** = geen dierlijke producten.\n• Kan gezond als gevarieerd.\n• Let op: B12, ijzer, calcium *(soms supplement)*.\n\n**Toets-feitje**:\n**Vegetarisch eten** bespaart **veel CO₂** + water. Een kilo rundvlees produceren kost ongeveer **15.000 liter water** + **20-50 kg CO₂**. Een kilo bonen kost ~4.000 liter water + 1-2 kg CO₂. Vandaar 'minder vlees' = klimaattip.",
    checks: [
      {
        q: "Hoeveel **groente** moet een **volwassene** per dag eten volgens de Schijf van Vijf? (Voor kinderen van 9-13 is het 150-200 gram.)",
        options: ["250 gram", "1 kilo", "50 gram", "100 gram"],
        answer: 0,
        wrongHints: [null, "Een kilo groente per dag is veel meer dan het advies.", "50 gram is maar een paar reepjes wortel. Het advies is meer.", "100 gram is ongeveer één tomaat. Het advies is meer dan dat."],
        uitlegPad: {
          stappen: [
            { titel: "Schijf van Vijf-advies", tekst: "Het Voedingscentrum (Nederlandse instantie) geeft per dag aanbevelingen. Voor groente: **250 gram per dag**." },
            { titel: "Hoeveel is 250 gram?", tekst: "Ongeveer **2 grote stukken** groente. Bv. 1 tomaat + 1 schaal sla + paar reepjes wortel = al snel 250 gram." },
            { titel: "+ 2 stuks fruit", tekst: "Naast groente ook 2 stuks fruit per dag (1 stuk = ongeveer 100 gram, bv. een kleine appel)." },
          ],
          woorden: [
            { woord: "Schijf van Vijf", uitleg: "Nederlandse voedingsrichtlijn met 5 vakken." },
            { woord: "Voedingscentrum", uitleg: "Nederlandse organisatie die voedingsadvies geeft." },
          ],
          theorie: "Toets-feit: 250 g groente + 2 stuks fruit per dag = officieel advies. Hoort bij Schijf van Vijf Vak 1.",
          voorbeelden: [
            { type: "stap", tekst: "Schaal sla bij avondeten = ~100 g. Wortel bij lunch = 50 g. Tomaat snack = 50 g. Snijbonen erbij = nog 50 g. Klaar." },
            { type: "stap", tekst: "Verschillende KLEUREN groente = meer verschillende vitamines." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: 250 g groente + 2 stuks fruit per dag. Te onthouden cijfer voor de Doorstroomtoets." }],
          niveaus: {
            basis: "Aanbeveling: 250 gram groente per dag.",
            simpeler: "Ongeveer 2 grote stukken groente (= een half bord vol).",
            nogSimpeler: "250 g per dag.",
          },
        },
      },
      {
        q: "Hoe vaak is het gezond om **vis** te eten?",
        options: ["1 keer per week", "Elke dag", "3 keer per week", "1 keer per maand"],
        answer: 0,
        wrongHints: [null, "Vis is gezond, maar het advies is niet elke dag.", "Drie keer per week is meer dan het advies van de Schijf van Vijf.", "Eens per maand is minder dan het advies van de Schijf van Vijf."],
      },
      {
        q: "Na een nacht slapen heeft je lichaam al uren niets gekregen. Welke maaltijd vult je **energie** dan weer aan, zodat je op school goed kunt opletten?",
        options: ["Ontbijt", "Lunch", "Avondeten", "Snack"],
        answer: 0,
        wrongHints: [null, "Die eet je pas halverwege de schooldag; dan heb je al uren les gehad.", "Die eet je pas na school, aan het einde van de dag.", "Een tussendoortje is geen hoofdmaaltijd."],
      },
      {
        q: "Wat is **vegetarisch**?",
        options: ["Geen vlees en geen vis", "Geen enkel dierlijk product", "Geen melk en geen eieren", "Geen vlees, wel vis"],
        answer: 0,
        wrongHints: [null, "Dat is veganistisch.", "Melk en eieren mag een vegetariër wel eten.", "Vis eet een vegetariër ook niet."],
      },
    ],
  },
  {
    title: "Wat te beperken — suiker + zout + frituur",
    explanation:
      "Sommige dingen lekker, maar **te veel = niet gezond**.\n\n**SUIKER** 🍬:\n• **Maximaal 25 g** suiker per dag *(WHO-advies kind)*.\n• 1 glas frisdrank = ~30 g suiker = al boven.\n• 1 Mars-reep = ~30 g.\n• 1 ijsje = ~20 g.\n• Snel **op** maar daarna **moe** *('sugar crash')*.\n• Veroorzaakt: **gaatjes** in tanden, **overgewicht**, **diabetes-risico**.\n• Verborgen suikers: ketchup, brood, zuivel met smaak, ontbijtgranen.\n• Lees **etiket** — 'koolhydraten waarvan suikers'.\n\n**ZOUT** 🧂:\n• **Maximaal 5 g** zout per dag *(kind 6-12: 4 g)*.\n• 1 zakje chips kan al 1-2 g hebben.\n• Te veel = **hoge bloeddruk** + hart-vat-ziektes.\n• Verborgen zout: kant-en-klaar maaltijden, kaas, soep, brood.\n\n**TRANSVET / VERZADIGD VET** 🍔:\n• In frituur, koek, chips, gefrituurde snacks.\n• Verhoogt slecht cholesterol.\n• Veroorzaakt hart-vatziektes.\n• Vervangen door **olijfolie + noten** = beter.\n\n**ALCOHOL** 🍷:\n• Onder 18 jaar: **0,0** *(verboden)*.\n• Volwassenen: max 1 glas per dag.\n• Geen-alcohol-aanbeveling is beter *(WHO 2023)*.\n• Schadelijk voor lever + hersenen.\n• Bij kinderen kan al 1 glas hersenen beschadigen.\n\n**FRISDRANK + ENERGIEDRANKEN** 🥤:\n• Veel suiker + soms cafeïne.\n• 1 blikje cola = 7 suikerklontjes.\n• Energiedrankjes: cafeïne + suiker — niet voor kinderen onder 18.\n\n**KANT-EN-KLAAR EN FAST FOOD** 🍕:\n• Vaak veel zout + vet + suiker.\n• Conserveermiddelen + smaakversterkers (E-nummers).\n• Niet 'fout' maar liever beperkt.\n\n**Wat te eten als je trek hebt?**\n• In plaats van chips → handvol noten.\n• In plaats van frisdrank → water + citroen.\n• In plaats van snoep → fruit.\n• In plaats van koek → volkoren-cracker met hummus.\n\n**Eten + emoties**:\n• Eten bij stress = vaak ongezond.\n• Eet **bewust** — wat heb je echt nodig?\n• Eten is sociaal *(samen eten met familie)* — niet alleen.\n\n**Overgewicht** *(NL kids)*:\n• ~14% van NL-kinderen *(2024)* heeft overgewicht.\n• Risico's: diabetes, hartziekte, depressie.\n• Belangrijk: **gezond eten + bewegen** *(beweegnorm 1 uur per dag)*.\n\n**Hulp nodig?**\n• Praat met je ouder of verzorger, schoolarts, huisarts.\n• Niet je vergelijken met sociale media-influencers — die laten 'ideaal' zien dat vaak nep is.\n\n**Toets-feitje**:\n**Ultraprocessed food** *(zwaar bewerkt voedsel — koek, chips, zoete ontbijtgranen, kant-en-klaar)*: meer dan de helft van wat NL-kinderen eten. Onderzoekers waarschuwen — minder = beter. Vers + zelf koken = altijd beter.",
    checks: [
      {
        q: "Hoeveel toegevoegde **suiker** per dag is volgens het WHO-advies ongeveer het maximum voor een kind?",
        options: ["25 gram", "100 gram", "5 gram", "75 gram"],
        answer: 0,
        wrongHints: [null, "100 gram is 25 suikerklontjes — veel te veel.", "5 gram is maar ongeveer één klontje. Het advies is ruimer.", "75 gram is bijna 19 klontjes — ver boven het advies."],
        uitlegPad: {
          stappen: [
            { titel: "WHO-advies: 25 gram suiker per dag", tekst: "De **WHO** (Wereldgezondheidsorganisatie) adviseert voor kinderen maximaal **25 gram toegevoegde suiker** per dag. Dat is ongeveer **6 suikerklontjes**." },
            { titel: "Hoe snel zit je 'eraan'?", tekst: "1 glas **frisdrank** = ~30 g suiker = al BOVEN het advies. 1 Mars-reep = 30 g. 1 portie ontbijtgranen kan 15 g hebben. Snel boven 25 g zonder dat je het door hebt." },
            { titel: "Verborgen suikers", tekst: "Suiker zit niet alleen in snoep. Kijk op het etiket bij: **ketchup, brood, yoghurt met smaak, frisdrank, sapjes, ontbijtgranen**. Het kan veel meer zijn dan je denkt." },
          ],
          woorden: [
            { woord: "WHO", uitleg: "Wereldgezondheidsorganisatie — Nederlandse afkorting WGO." },
            { woord: "toegevoegde suiker", uitleg: "Suiker die EXTRA bij voedsel is gedaan (niet natuurlijk in fruit)." },
          ],
          theorie: "Toets-feit: max 25 g suiker per dag = WHO-advies kind. Suiker in fruit telt minder zwaar (omdat het samen met vezels komt + langzamer wordt opgenomen).",
          voorbeelden: [
            { type: "stap", tekst: "Te veel suiker = gaatjes in tanden, overgewicht, hoger risico op diabetes type 2." },
            { type: "stap", tekst: "Let op: 1 zak Liga-koeken kan 30+ g suiker bevatten. Check etiket." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "25 g = ongeveer 6 suikerklontjes. Onthoud: 1 frisdrank = al boven het advies." }],
          niveaus: {
            basis: "Max 25 g suiker per dag (WHO kind).",
            simpeler: "Maximaal 25 gram = 6 suikerklontjes. 1 frisdrank zit er al boven.",
            nogSimpeler: "25 g",
          },
        },
      },
      {
        q: "Hoeveel **alcohol** mag een kind van 12 drinken?",
        options: ["Helemaal niets", "1 glas per week", "Alleen op feestjes", "Een slokje om te proeven"],
        answer: 0,
        wrongHints: [null, "Ook één glas is schadelijk voor hersenen die nog groeien.", "Ook op een feestje is alcohol slecht voor een lichaam dat nog groeit.", "Ook een slokje went je aan de smaak, terwijl je hersenen nog volop groeien."],
      },
      {
        q: "Hoeveel **suikerklontjes** zitten er in 1 glas frisdrank?",
        options: ["~7", "~2", "~15", "~25"],
        answer: 0,
        wrongHints: [null, "Twee klontjes is maar 8 gram suiker. In een glas cola zit veel meer.", "Een klontje is ongeveer 4 gram. Zoveel klontjes is meer dan in één glas zit.", "Dat is 100 gram suiker — zoveel zit in een grote fles, niet in één glas."],
      },
      {
        q: "Hoelang moet een kind volgens de **beweegnorm** per dag bewegen?",
        options: ["1 uur", "30 minuten", "3 uur", "10 minuten"],
        answer: 0,
        wrongHints: [null, "Een halfuur is het advies voor volwassenen. Kinderen hebben meer nodig.", "Drie uur per dag is veel meer dan de norm vraagt.", "Tien minuten is maar een rondje over het schoolplein. De norm vraagt meer."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de beweegnorm?", tekst: "De **Gezondheidsraad** in NL stelt: kinderen moeten **minstens 1 uur per dag matig tot intensief bewegen**. Dat geldt voor 4-18 jarigen." },
            { titel: "Wat telt mee?", tekst: "Alles waarbij je hart sneller gaat kloppen + je ademt sneller:\n• Fietsen naar school\n• Op het schoolplein rennen\n• Voetbal/sport\n• Buitenspelen\n• Stoeien\n• Skaten/skateboarden." },
            { titel: "Waarom belangrijk?", tekst: "Bewegen helpt:\n• **Hart + longen** sterker\n• **Botten + spieren** groeien\n• **Beter slapen + leren**\n• **Minder kans op overgewicht**\n• **Stress** verminderen.\nKinderen die genoeg bewegen scoren beter op school." },
          ],
          woorden: [
            { woord: "beweegnorm", uitleg: "Aanbevolen hoeveelheid beweging per dag." },
            { woord: "Gezondheidsraad", uitleg: "NL-instantie die advies geeft over gezondheid." },
          ],
          theorie: "Toets-feit: **1 uur per dag** is de NL-beweegnorm voor kinderen. WHO heeft dezelfde aanbeveling. Combineer met gezonde voeding voor beste resultaat.",
          voorbeelden: [
            { type: "stap", tekst: "Fietsen naar school + 30 min schoolplein + thuis buiten = makkelijk 1 uur halen." },
            { type: "stap", tekst: "TV + tablet + gamen = stil-zitten. Probeer max 2 uur per dag scherm voor kinderen 4-12 jaar." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1 uur per dag bewegen. Kan opgeknipt: 20 min fietsen + 30 min sporten + 10 min buiten spelen = al genoeg." },
          ],
          niveaus: {
            basis: "1 uur per dag bewegen.",
            simpeler: "Minstens 60 minuten matig tot intensief bewegen per dag (sport, fietsen, spelen).",
            nogSimpeler: "1 uur",
          },
        },
      },
    ],
  },
  {
    title: "Eind-toets — voeding mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Waar zit **vitamine C** vooral?", options: ["Sinaasappel en paprika", "Biefstuk en kipfilet", "Boter en olijfolie", "Suiker en witbrood"], answer: 0, wrongHints: [null, "Vlees geeft vooral eiwit en ijzer, geen vitamine C.", "Boter en olie bestaan vooral uit vet.", "Suiker en witbrood geven vooral energie en weinig vitamines."] },
      { q: "Hoeveel **water** (of ander drinken) heeft een kind van 9 tot 12 jaar ongeveer per dag nodig?", options: ["1 tot 1,5 liter", "2 glazen", "3 tot 4 liter", "5 liter"], answer: 0, wrongHints: [null, "Twee glazen is maar een halve liter. Je verliest elke dag meer vocht dan dat.", "Drie tot vier liter is 12 tot 16 glazen. Zoveel heeft een kind niet nodig.", "Vijf liter is 20 glazen. Dat is veel meer dan je lichaam kan gebruiken."] },
      { q: "Waarvan moet je volgens de **Schijf van Vijf** het meest eten?", options: ["Groente en fruit", "Smeer- en kookvet", "Vlees, vis en ei", "Melk en kaas"], answer: 0, wrongHints: [null, "Van smeer- en kookvet heb je maar een klein beetje nodig.", "Vlees, vis en ei zijn goed, maar je hebt er minder van nodig dan je denkt.", "Melk en kaas zijn goed voor je botten, maar het grootste deel van je eten is iets anders."] },
      { q: "Wat betekent **veganistisch**?", options: ["Geen dierlijke producten", "Geen vlees en geen vis", "Alleen biologisch eten", "Geen melk, wel vlees"], answer: 0, wrongHints: [null, "Dat is vegetarisch. Een veganist laat nog meer weg.", "Biologisch gaat over hoe iets gekweekt is, niet over dieren.", "Een veganist laat meer weg dan alleen melk."] },
      { q: "Wat is **goed vet**?", options: ["Olijfolie", "Frituurvet", "Boter", "Slagroom"], answer: 0, wrongHints: [null, "Frituurvet is vaak hard vet dat steeds opnieuw heet wordt. Dat maakt het juist ongezonder.", "Boter bestaat vooral uit verzadigd vet. Daar kun je beter weinig van nemen.", "Slagroom zit vol verzadigd vet: lekker, maar niet de gezonde soort."] },
      { q: "Waarvoor heeft je lichaam vooral **eiwitten** nodig?", options: ["Groei en spieren", "Snelle energie", "Sterke botten", "Warm blijven"], answer: 0, wrongHints: [null, "Snelle energie komt vooral uit koolhydraten.", "Voor sterke botten zorgt vooral calcium.", "Een laagje vet houdt je warm. Eiwit doet iets anders."] },
      {
        q: "Wat is een **gezond ontbijt** voor een kind op de basisschool?",
        options: ["Volkorenbrood, kaas en fruit", "Witte boterham met hagelslag", "Alleen een glas vruchtensap", "Cornflakes met een schep suiker"],
        answer: 0,
        wrongHints: [null, "Witbrood met hagelslag geeft snel suiker en weinig vezels. Hoe lang hou je dat vol?", "Alleen sap geeft wat vitamines, maar geen eiwit en weinig vezels. Hoe lang hou je dat vol?", "Veel suiker geeft een korte piek en daarna een dip. Wat geeft langzame energie?"],
        uitlegPad: {
          stappen: [
            { titel: "Goed ontbijt = balans", tekst: "**Koolhydraten** (energie) + **eiwit** (verzadiging) + **vitaminen** (fruit) + **vocht** (melk/water) = goed ontbijt. Geeft langzame energie tot pauze." },
            { titel: "Toets-feit: ontbijt + leren", tekst: "Onderzoek toont dat kinderen die ontbijten **15% hoger scoren** op aandachts- en geheugen-testen. Suiker-rijke ontbijten (cornflakes met veel suiker) geven kortdurende piek, daarna dip vóór pauze." },
            { titel: "Toets-tip: Schijf van Vijf bij ontbijt", tekst: "Probeer 3+ van de 5 vakken in ontbijt:\n1. Groente/fruit ✓ (banaan, appel)\n2. Brood/granen/aardappelen ✓ (volkoren brood)\n3. Zuivel/vis/peulvruchten/vlees/ei ✓ (kaas, ei, melk/yoghurt)\n4. Smeer- en kookvetten ✓ (halvarine of zachte margarine op brood)\n5. Dranken ✓ (water/thee)" },
          ],
          woorden: [
            { woord: "volkoren brood", uitleg: "Brood van hele graan-korrel (vezels behouden). Houdt langer vol dan wit brood." },
            { woord: "Schijf van Vijf", uitleg: "NL-voedingsadvies van Voedingscentrum: 5 vakken = alles wat een gezond dieet nodig heeft." },
          ],
          theorie: "Ontbijt-stappen:\n1. Koolhydraat (volkoren) → langzame energie\n2. Eiwit (zuivel, kaas, ei) → verzadiging\n3. Fruit → vitaminen + vezel\n4. Vocht → hydratatie\n\nFout: alleen suiker (cruesli vol suiker = suikerpiek → snel hongerig).",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Banaan + havermout + melk = perfect schoolontbijt." },
            { type: "voorbeeld", tekst: "Volkorenboterham + kaas + appel = traditioneel + gezond." },
          ],
          basiskennis: [{ onderwerp: "Suikergranen-instinker", uitleg: "Cruesli en gezoete ontbijtgranen lijken gezond maar bevatten vaak veel suiker. Lees etiket — <10% suiker = OK." }],
          niveaus: { basis: "Kijk welk ontbijt je het langst vult. Brood met veel vezels houdt je langer vol dan iets met veel suiker of alleen een drankje.", simpeler: "Een goed ontbijt heeft drie dingen: brood met vezels, iets met eiwit (zoals kaas) en fruit. Welke optie heeft alle drie?", nogSimpeler: "Volkorenbrood met kaas en fruit is het gezonde ontbijt." },
        },
      },
      {
        q: "**'Light'-producten** zijn altijd gezond — waar of niet?",
        options: ["Niet waar — vaak meer zoetstof of toevoegingen", "Waar — minder calorieën is altijd gezonder", "Waar — light betekent dat er geen suiker en geen vet in zit", "Niet waar — in light-producten zit juist altijd méér suiker"],
        answer: 0,
        wrongHints: [null, "'Light' is een reclamewoord, geen belofte over gezondheid. Wat zit er dan wél in zo'n product?", "Light betekent alleen 'minder van iets' dan het gewone product. Lees het etiket: wat is er voor dat beetje in de plaats gekomen?", "'Altijd méér suiker' klopt niet — bij light yoghurt soms wel, bij light frisdrank juist niet. Het verschilt per product."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 'light'?", tekst: "**Light**-product moet wettelijk **minstens 30% minder** van iets (suiker, vet, calorieën, zout) bevatten dan het normale product. **Maar**: vaak vervangen door zoetstof, zout, of meer vet als suiker wordt geschrapt." },
            { titel: "Toets-feit: 'light' kan ongezond zijn", tekst: "Bijvoorbeeld:\n• **Light frisdrank**: geen suiker maar **kunstmatige zoetstoffen** (aspartaam) — debat over effect.\n• **Light chips**: minder vet maar **meer zout**.\n• **Light yoghurt**: minder vet maar **meer suiker** voor smaak.\nLees altijd het etiket! Niet vertrouwen op marketing." },
            { titel: "Schijf van Vijf-advies", tekst: "Voedingscentrum (NL): **'light' GEEN onderdeel van Schijf van Vijf**. Gewone groente, fruit, water = altijd beter dan 'light' bewerkte producten. 'Light' is geen toverwoord." },
          ],
          woorden: [
            { woord: "light", uitleg: "Marketing-term: minstens 30% minder van X dan origineel. GEEN gezondheidsgarantie." },
            { woord: "zoetstof", uitleg: "Vervanger van suiker (aspartaam, sucralose, stevia). Geeft zoete smaak zonder calorieën." },
            { woord: "etiket lezen", uitleg: "Onderkant verpakking: voedingswaarde-tabel met suiker, vet, zout per 100g." },
          ],
          theorie: "Etiket-rode-vlaggen (vuistregel):\n• **>22,5 g suiker / 100g** = veel suiker\n• **>17,5 g vet / 100g** = veel vet\n• **>1,5 g zout / 100g** = veel zout\nHoog op deze waardes? → niet dagelijks eten.",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Light yoghurt: vergelijk met gewone halfvolle yoghurt — meestal beter." },
            { type: "voorbeeld", tekst: "Wortelen (gewoon) = altijd gezonder dan light-koekje." },
          ],
          basiskennis: [{ onderwerp: "'Light' ≠ 'mag onbeperkt'", uitleg: "Veel mensen eten extra van light-producten omdat 'het mag', netto nemen ze meer calorieën binnen dan met origineel." }],
          niveaus: { basis: "'Light' betekent niet automatisch gezond. Het zegt alleen dat er minder van één ding in zit.", simpeler: "Light = minder van iets (suiker, vet of zout), maar daar komt vaak zoetstof of extra zout voor in de plaats. Lees het etiket en vertrouw niet op de reclame.", nogSimpeler: "Niet altijd gezond." },
        },
      },
      {
        q: "Waardoor wordt de kans op **diabetes type 2** kleiner?",
        options: ["Gezond eten en genoeg bewegen", "Elke dag vitaminepillen slikken", "Voortaan vegetarisch gaan eten", "Een keer per jaar naar de dokter"],
        answer: 0,
        wrongHints: [null, "Vitaminepillen helpen niet tegen diabetes type 2. Het gaat om hoe je elke dag leeft.", "Ook vegetariërs kunnen diabetes type 2 krijgen, bijvoorbeeld door veel suiker.", "Een controle bij de dokter is goed, maar voorkomt de ziekte niet. Wat doe je zelf elke dag?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is diabetes type 2?", tekst: "**Diabetes type 2** = lichaam reageert niet goed meer op **insuline** (hormoon dat suiker uit bloed haalt). Bloedsuiker te hoog → schade aan ogen, nieren, hart. **Komt vaak voor bij volwassenen** maar steeds vaker bij kinderen (overgewicht-gerelateerd)." },
            { titel: "Type 1 vs Type 2", tekst: "• **Type 1**: alvleesklier maakt geen insuline. **Niet te voorkomen** — vaak vanaf jonge leeftijd. Insuline-injecties nodig.\n• **Type 2**: cellen 'luisteren niet meer naar' insuline. **Wel te voorkomen** door leefstijl.\nType 2 is verreweg de meest voorkomende vorm (~90% van diabetes-gevallen)." },
            { titel: "Toets-tip: leefstijl-factoren", tekst: "Risico VERHOGEN type 2:\n• Te veel suiker, witte koolhydraten\n• Overgewicht\n• Weinig bewegen\n• Roken + alcohol\n• Stress + slechte slaap\n\nRisico VERLAGEN:\n• Schijf-van-Vijf-dieet\n• 1 uur per dag bewegen\n• Voldoende slaap\n• Geen roken" },
          ],
          woorden: [
            { woord: "insuline", uitleg: "Hormoon uit alvleesklier. Helpt suiker uit bloed in lichaamscellen komen." },
            { woord: "alvleesklier", uitleg: "Orgaan bij maag. Maakt insuline (én verteringssappen)." },
            { woord: "preventie", uitleg: "Voorkomen ipv genezen. Bij type 2 mogelijk; bij type 1 niet." },
          ],
          theorie: "Hoe leefstijl diabetes type 2 voorkomt:\n• **Gezond eten** → minder suiker-pieken → cellen blijven 'luisteren' naar insuline\n• **Bewegen** → spieren gebruiken suiker → minder werk voor insuline\n• **Geen overgewicht** → vetcellen produceren minder ontstekings-stoffen\n• **Niet roken** → bloedvaten gezond\n\nEen kind dat nu gezond leeft, heeft enorme bescherming voor later.",
          voorbeelden: [
            { type: "feit", tekst: "NL: ~1,2 miljoen mensen met diabetes (2024), 90% type 2. Aantal stijgt door overgewicht." },
            { type: "feit", tekst: "Onderzoek toont: 30 min/dag wandelen + gezond eten verlaagt type-2-risico met 58%." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen 'oud-leeftijds-ziekte'", uitleg: "Type 2 komt steeds vaker bij KINDEREN voor — direct gevolg van junkfood + zitten." }],
          niveaus: { basis: "Het gaat om je leefstijl: wat je elke dag eet en hoeveel je beweegt.", simpeler: "Gezond eten, genoeg bewegen en niet roken maken de kans op diabetes type 2 veel kleiner.", nogSimpeler: "Gezond eten en bewegen." },
        },
      },
      { q: "Hoeveel **groente** moet een **volwassene** per dag eten volgens de Schijf van Vijf? (Voor kinderen van 9-13 jaar is het 150-200 gram.)", options: ["250 gram","50 gram","1 kilo","100 gram"], answer: 0, wrongHints: [null, "50 gram is maar een paar reepjes wortel. Het advies is veel meer.", "Een kilo is veel meer dan het advies van het Voedingscentrum.", "100 gram is ongeveer één tomaat. Het advies voor een volwassene is meer."] },
      { q: "Welke voedingsstof geeft je **energie** voor het dagelijks bewegen?", options: ["Koolhydraten","Vitamine C","Calcium","IJzer"], answer: 0, wrongHints: [null, "Vitamine C helpt je afweer, maar levert geen energie.", "Calcium is een bouwstof voor je botten, geen brandstof.", "IJzer heb je nodig voor je bloed, niet als brandstof."] },
      { q: "Voor wie geldt **0,0 alcohol** wettelijk?", options: ["Iedereen onder 18 jaar", "Iedereen onder 21 jaar", "Iedereen onder 16 jaar", "Bestuurders"], answer: 0, wrongHints: [null, "Die grens geldt in sommige andere landen, zoals Amerika, maar niet in Nederland.", "Tot 2014 mocht je vanaf 16 bier drinken. Nu is de grens hoger.", "Voor bestuurders geldt een lage grens, geen 0,0 — voor welke groep geldt 0,0 wél?"] },
      { q: "Hoeveel toegevoegde **suiker** per dag is volgens de WHO ongeveer het maximum voor kinderen?", options: ["25 gram", "100 gram", "250 gram", "10 gram"], answer: 0, wrongHints: [null, "100 gram is 25 klontjes. Het advies is veel lager.", "250 gram is een heel pak suiker van een kwart kilo — veel te veel.", "10 gram is nog geen 3 klontjes. Het advies is iets ruimer."] },
      { q: "Hoeveel **maaltijden** per dag is gezond?", options: ["3 hoofdmaaltijden + 2-3 tussendoor", "2 hoofdmaaltijden, niets tussendoor", "5 hoofdmaaltijden + 1 tussendoortje", "1 grote maaltijd + 4 tussendoortjes"], answer: 0, wrongHints: [null, "Met twee maaltijden sla je er één over. Welke maaltijd ontbreekt er dan?", "Vijf grote maaltijden is te veel. Hoe vaak eet je echt aan tafel?", "Eén maaltijd en veel tussendoortjes: dan eet je vooral snacks."] },
      { q: "Welke **kleur** zou een gezond bord moeten zijn?", options: ["Veel kleuren", "Vooral bruin", "Vooral wit", "Vooral geel"], answer: 0, wrongHints: [null, "Bruin is vaak vlees, jus en friet. Wat mis je dan?", "Wit is vaak rijst, pasta of aardappel. Wat mis je dan?", "Geel is vaak friet, kaas of mais. Wat mis je dan?"] },
      { q: "Welk type **vet** is gezond?", options: ["Onverzadigd (vis, noten, olijfolie)", "Verzadigd (chips, koek, roomboter)", "Geen enkel vet (alles vetvrij eten)", "Frituurvet (friet, kroket, snacks)"], answer: 0, wrongHints: [null, "Verzadigd vet kun je beter weinig eten.", "Je lichaam heeft wel wat vet nodig.", "Frituurvet is niet de gezonde soort."] },
      { q: "Wat is **eiwit** vooral voor?", options: ["Spieren/cellen bouwen", "Snel energie geven", "Bloed laten stollen", "Beter kunnen zien"], answer: 0, wrongHints: [null, "Snelle energie komt vooral uit koolhydraten.", "Daar zorgen bloedplaatjes voor.", "Daar helpt vitamine A bij."] },
      { q: "Welke voeding heeft veel **calcium**?", options: ["Melk en kaas","Appels en peren","Rijst en pasta","Kip en vis"], answer: 0, wrongHints: [null, "Appels en peren geven vitamines en vezels, maar weinig calcium.", "Rijst en pasta geven vooral energie (koolhydraten).", "Kip en vis geven vooral eiwit."] },
      { q: "Welke voeding heeft **vitamine C**?", options: ["Sinaasappel/paprika", "Brood/beschuit", "Patat/frikandel", "Vlees/kipfilet"], answer: 0, wrongHints: [null, "Brood geeft vooral koolhydraten.", "Patat en snacks geven vooral vet.", "Vlees geeft vooral eiwit."] },
      { q: "Hoeveel stuks **fruit** per dag adviseert de Schijf van Vijf?", options: ["2 stuks","1 stuk","4 stuks","6 stuks"], answer: 0, wrongHints: [null, "Eén stuk is minder dan het advies van de Schijf van Vijf.", "Vier stuks is meer dan het advies.", "Zes stuks per dag is veel meer dan het advies."] },
      { q: "Wat betekent **vegetarisch** eten?", options: ["Geen vlees en geen vis","Geen vlees, wel vis","Geen fastfood eten","Alleen plantaardig eten"], answer: 0, wrongHints: [null, "Een vegetariër eet ook geen vis.", "Fastfood laten staan is gezond, maar heeft niets met vegetarisch te maken.", "Alleen plantaardig is veganistisch: dan ook geen melk en eieren."] },
      { q: "Wat betekent **veganistisch** eten?", options: ["Geen dierlijke producten", "Geen vis en geen schaaldieren", "Geen vlees, wel melk en eieren", "Geen suiker en geen snoep"], answer: 0, wrongHints: [null, "Een veganist laat veel meer staan dan alleen vis en schaaldieren.", "Wie wel melk en eieren eet, is vegetarisch — veganistisch gaat verder.", "Suiker en snoep laten staan is gezond, maar heeft niets met veganistisch te maken."] },
      { q: "Wat is een **gezond ontbijt**?", options: ["Volkoren + fruit + zuivel", "Witbrood + chocopasta + sap", "Cornflakes + suiker + chocomelk", "Croissant + jam + limonade"], answer: 0, wrongHints: [null, "Witbrood en chocopasta geven snel suiker en weinig vezels.", "Suiker en chocomelk geven een korte energiepiek, en daarna een dip.", "Een croissant is vooral vet en wit meel, en jam is vooral suiker."] },
      { q: "Wat doet **water drinken**?", options: ["Vult je vocht aan + lest dorst", "Geeft je energie + vitamines", "Maakt je botten sterk + groot", "Verbrandt vet + maakt je slank"], answer: 0, wrongHints: [null, "Water heeft geen calorieën en geeft dus geen energie.", "Sterke botten krijg je vooral van calcium, uit melk en kaas.", "Water verbrandt geen vet."] },
      { q: "Wat is een **vezel** in je eten?", options: ["Onverteerbaar plantendeel", "Zoete stof uit snoep", "Vettige stof uit boter", "Bouwstof uit vlees en eieren"], answer: 0, wrongHints: [null, "Een zoete stof uit snoep is suiker, geen vezel.", "Een vettige stof uit boter is vet, geen vezel.", "De bouwstof uit vlees en eieren is eiwit, geen vezel."] },
      { q: "Welke voeding heeft veel **vezels**?", options: ["Volkoren + groente","Witbrood + kaas","Melk + yoghurt","Vis + gekookt ei"], answer: 0, wrongHints: [null, "Bij witbrood is de vezelrijke schil van het graan eraf. En kaas heeft geen vezels.", "Melk en yoghurt komen van de koe — daar zitten geen vezels in.", "Vis en ei komen van dieren. Vezels zitten in planten."] },
      { q: "Hoeveel moet een kind per dag minstens **bewegen**?", options: ["~1 uur","~10 minuten","~30 minuten","~4 uur"], answer: 0, wrongHints: [null, "Tien minuten is maar heel kort. Kinderen hebben veel meer beweging nodig.", "Een halfuur is het advies voor volwassenen. Kinderen hebben meer nodig.", "Vier uur is veel meer dan de norm vraagt."] },
      { q: "Wat klopt meestal over **bewerkt voedsel**?", options: ["Meer toegevoegd zout/suiker", "Gezonder dan vers eten", "Minder zout dan zelf gekookt", "Rijker aan vitamines en vezels"], answer: 0, wrongHints: [null, "Is een kant-en-klaarmaaltijd gezonder dan zelf koken met verse groente?", "Juist in kant-en-klaar eten zit vaak veel zout.", "Bij bewerken gaan juist vaak vitamines verloren."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const gezondeVoedingPo = {
  id: "gezonde-voeding-po",
  title: "Gezonde voeding (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🍎",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / gezondheid",
  prerequisites: [
    { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "1F" },
  ],
  intro:
    "Gezonde voeding voor groep 6-8, Doorstroomtoets-stof — voedingsstoffen (koolhydraat/eiwit/vet/vitamine/mineraal/water) + Schijf van Vijf (groente 250g, vis 1x/week) + wat te beperken (suiker max 25g, zout max 5g, alcohol 0,0 onder 18) + vegetarisch/veganistisch. Sluit op lichaam-gezondheid. ~15 min.",
  triggerKeywords: [
    "voeding", "eten", "gezond eten",
    "Schijf van Vijf", "Voedingscentrum",
    "koolhydraten", "eiwit", "vet",
    "vitamine", "mineraal",
    "suiker", "zout", "alcohol",
    "vegetarisch", "veganistisch",
    "overgewicht", "beweegnorm",
  ],
  chapters,
  steps,
};

export default gezondeVoedingPo;
