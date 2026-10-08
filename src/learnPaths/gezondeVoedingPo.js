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
      "Eten = **brandstof** voor je lichaam. Net als een auto benzine nodig heeft.\n\n**Waarom moet je eten?**\n• **Energie** *(om te lopen, leren, sporten)*.\n• **Groei** *(als kind groei je nog)*.\n• **Reparatie** *(cellen vervangen)*.\n• **Bescherming** *(immuunsysteem)*.\n• **Hersenen** *(20% van je energie gaat naar hersenen)*.\n\n**Voedingsstoffen** = wat in eten zit:\n\n**1. Koolhydraten** *(suikers + zetmeel)* 🍞:\n• **Snelle energie**.\n• Zit in: brood, pasta, rijst, aardappelen, granen, fruit.\n• Hoeveel: ~50-60% van je voeding.\n• **Vezels** *(koolhydraat die je niet verteert)*: zit in volkoren + groente. Goed voor darmen.\n\n**2. Eiwitten** *(proteïne)* 🍗:\n• Voor **groei + spieropbouw + reparatie**.\n• Zit in: vlees, vis, eieren, melk, kaas, peulvruchten *(bonen, linzen)*, noten, soja, tofoe.\n• Hoeveel: ~15% van voeding.\n• Veganistische bron: bonen + linzen + tofoe + quinoa.\n\n**3. Vetten** 🥑:\n• **Brandstof** + bouwsteen voor cellen + hormonen.\n• **Goede vetten**: olijfolie, noten, avocado, vette vis.\n• **Slechte vetten**: koek, frituur, vet vlees, palmolie *(vermijden)*.\n• Hoeveel: ~30% van voeding.\n\n**4. Vitamines** 💊:\n• **Mini-stoffen** maar essentieel.\n• **Vitamine A**: zien, huid *(wortels, vis)*.\n• **B-vitamines**: energie, zenuwen *(vlees, granen)*.\n• **Vitamine C**: immuunsysteem *(sinaasappel, paprika)*.\n• **Vitamine D**: botten *(zon, vis)* — sommige mensen, zoals kinderen tot 4 jaar, krijgen in NL extra vitamine D.\n• **Vitamine E + K** ook.\n\n**5. Mineralen**:\n• **Calcium**: botten *(melk, kaas)*.\n• **IJzer**: bloed *(vlees, spinazie)*.\n• **Magnesium, zink, jood** ook belangrijk.\n\n**6. Water** 💧:\n• Lichaam = **60% water**!\n• Drink **1,5-2 liter per dag**.\n• Verlies via plassen, zweten, ademen.\n• Te weinig = dorst + hoofdpijn.\n\n**Hoeveel eten per dag?**\n• Kind 6-13 jaar: ~1800-2200 kcal/dag.\n• Volwassen: 2000-2500 kcal.\n• Sporters: meer.\n\n**Drie maaltijden + 2-3 tussendoortjes** = aanbevolen.\n\n**Toets-feitje**:\n**1 kilo lichaamsvet** = ongeveer **7700 kcal**. Om af te vallen moet je 7700 kcal minder eten of meer bewegen. Daarom werkt 'snel afvallen' bijna nooit op lange termijn.",
    checks: [
      {
        q: "Waarvoor zijn **eiwitten** vooral?",
        options: ["Groei + spieren + reparatie", "Energie", "Vitamines", "Water"],
        answer: 0,
        wrongHints: [null, "Koolhydraten/vetten.", "Niet eiwit.", "Water is geen taak van eiwit."],
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
        q: "Hoeveel **water** per dag drinken?",
        options: ["1,5-2 liter", "Geen", "5 liter", "100 ml"],
        answer: 0,
        wrongHints: [null, "Wel nodig.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom water belangrijk is", tekst: "Je lichaam bestaat voor **60% uit water**. Elke dag verlies je water (plassen, zweten, ademen). Dat moet je aanvullen — anders krijg je dorst, hoofdpijn en moeheid." },
            { titel: "Hoeveel?", tekst: "Aanbeveling: **1,5 tot 2 liter** per dag voor een kind/volwassene. Dat is ongeveer **6-8 glazen** water (200-250 ml per glas)." },
            { titel: "Telt thee/melk/sap ook mee?", tekst: "Ja — alle drinken telt mee voor je vocht-inname. Maar **water** is de gezondste keuze. Frisdrank + suiker-sapjes geven wel vocht maar ook veel suiker." },
          ],
          woorden: [
            { woord: "vocht-inname", uitleg: "Hoeveel water/drinken je per dag binnenkrijgt." },
            { woord: "uitdroging", uitleg: "Te weinig water = lichaam werkt slechter." },
          ],
          theorie: "Toets-feit: **60% water** in lichaam. **1,5-2 liter** drink-advies per dag. Tekenen van te weinig: donkere urine, dorst, hoofdpijn, moe.",
          voorbeelden: [
            { type: "stap", tekst: "Bij sport of warm weer: meer water nodig (door zweten verlies je extra)." },
            { type: "stap", tekst: "5 liter per dag is te veel — kan zelfs gevaarlijk zijn (water-vergiftiging). 100 ml is veel te weinig." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: 6-8 glazen water per dag = 1,5-2 liter. Plan zelf: 2 bij ontbijt, 2 bij lunch, 2 tussendoor, 2 bij avondeten." }],
          niveaus: {
            basis: "1,5-2 liter water per dag.",
            simpeler: "Ongeveer 6-8 glazen water (250 ml elk).",
            nogSimpeler: "1,5-2 liter",
          },
        },
      },
      {
        q: "Wat heeft **vezels**?",
        options: ["Volkoren + groente", "Snoep", "Frisdrank", "Boter"],
        answer: 0,
        wrongHints: [null, "Snoep is vooral suiker — vezels zitten in dingen die uit planten komen.", "Frisdrank is water met suiker — waar zitten de 'draadjes' van de plant in?", "Boter is vet — vezels komen uit graan en planten. Welke optie past?"],
      },
      {
        q: "Welke vitamine vooral uit **zon**?",
        options: ["D", "C", "A", "K"],
        answer: 0,
        wrongHints: [null, "Sinaasappel.", "Wortel.", "Groene bladgroente."],
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
      "**Schijf van Vijf** = NL-richtlijn voor gezond eten. Door **Voedingscentrum**.\n\nVerdeeld in **5 vakken**:\n\n**Vak 1: Groente + fruit** 🥕🍎\n• **250 gram groente** per dag *(2 stukken)*.\n• **2 stuks fruit** per dag *(1 stuk = ongeveer 100 g).*\n• Liefst **variatie** in kleuren *(kleurrijke borden = veel vitamines)*.\n• Vers en diepvries zijn allebei prima. Uit blik of pot mag ook — let dan op zout en suiker.\n\n**Vak 2: Brood + graanproducten + aardappelen** *(ook rijst, pasta, ontbijtgranen)* 🍞🥔\n• Liefst **volkoren** *(meer vezels)*.\n• Aantal: ~4-6 sneetjes brood + 1 keer warm met aardappel/pasta/rijst per dag.\n\n**Vak 3: Zuivel, noten, vis, ei, vlees + peulvruchten** — zuivel + noten 🥛🥜\n• Melk, yoghurt, kwark, kaas.\n• 2-3 porties per dag.\n• Bevat calcium + eiwit + B12.\n\n**Vak 3 (vervolg): vlees, vis, ei + plantaardige eiwitten** 🐟🥚\n• 1-2 keer per dag.\n• 1 x **vis per week** *(omega-3)*.\n• Plantaardige alternatieven *(peulvruchten, tofu)*.\n• Limiet vlees: max 500 g per week *(daarvan max 300 g rood vlees)*.\n\n**Vak 4: Smeer- en kookvetten** 🌻\n• Liefst **plantaardige** olie *(olijfolie, zonnebloemolie)*.\n• Liever zachte margarine of halvarine dan roomboter.\n• Beperkt — kleinste vak.\n\n**Vak 5: Dranken** 💧\n• Water, thee, koffie *(zonder suiker)*.\n• 1,5-2 liter per dag.\n\n**Buiten de schijf**:\n• Snoep, frisdrank, koek, frituur, chips.\n• Af en toe een beetje kan, maar ze bevatten weinig goede stoffen.\n• Alcohol staat er ook buiten — en is voor kinderen helemaal niet.\n\n**Visuele tips**:\n• **Helft bord** = groente + fruit.\n• **Kwart bord** = volkoren-koolhydraten.\n• **Kwart bord** = eiwit *(vis/vlees/peul)*.\n• Beetje **gezond vet**.\n\n**3 maaltijden + tussendoortjes**:\n\n**Ontbijt** 🍳:\n• Volkoren brood + kaas + tomaat.\n• Of: havermout met fruit + yoghurt.\n• **Belangrijkste maaltijd** *(energie voor school)*.\n• Niet overslaan!\n\n**Lunch** 🥪:\n• Volkoren brood + beleg *(vis, kaas, vlees, hummus)*.\n• + 1 stuk fruit.\n• + glas melk/water.\n\n**Avondeten** 🍝:\n• Aardappel/rijst/pasta + groente + vis/vlees/peulvrucht.\n• Variatie in kleuren.\n• Eet langzaam = beter verzadigd.\n\n**Tussendoortjes** 🍎:\n• Fruit *(altijd goed)*.\n• Handvol noten.\n• Glas melk.\n• Volkoren-koek af en toe.\n• **Niet**: zak chips, snoep, frisdrank.\n\n**Veganistisch / vegetarisch**:\n• **Vegetarisch** = geen vlees + vis, wel zuivel + ei.\n• **Veganistisch** = geen dierlijke producten.\n• Kan gezond als gevarieerd.\n• Let op: B12, ijzer, calcium *(soms supplement)*.\n\n**Toets-feitje**:\n**Vegetarisch eten** bespaart **veel CO₂** + water. Een kilo rundvlees produceren kost ongeveer **15.000 liter water** + **20-50 kg CO₂**. Een kilo bonen kost ~4.000 liter water + 1-2 kg CO₂. Vandaar 'minder vlees' = klimaattip.",
    checks: [
      {
        q: "Hoeveel **groente** per dag?",
        options: ["250 gram", "1 kilo", "10 gram", "Geen aanbeveling"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Wel."],
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
        q: "Hoeveel **vis per week**?",
        options: ["1 keer", "Elke dag", "Nooit", "Maandelijks"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Wel goed.", "Te weinig."],
      },
      {
        q: "Welke maaltijd moet je niet overslaan, omdat hij je **energie voor de ochtend op school** geeft?",
        options: ["Ontbijt", "Lunch", "Avondeten", "Snack"],
        answer: 0,
        wrongHints: [null, "Die eet je pas halverwege de schooldag.", "Die eet je pas na school.", "Een tussendoortje is geen hoofdmaaltijd."],
      },
      {
        q: "Wat is **vegetarisch**?",
        options: ["Geen vlees en geen vis", "Geen enkel dierlijk product", "Alleen brood en groente", "Alleen vis, geen vlees"],
        answer: 0,
        wrongHints: [null, "Dat is veganistisch.", "Een vegetariër eet veel meer dan dat.", "Vis eet een vegetariër ook niet."],
      },
    ],
  },
  {
    title: "Wat te beperken — suiker + zout + frituur",
    explanation:
      "Sommige dingen lekker, maar **te veel = niet gezond**.\n\n**SUIKER** 🍬:\n• **Maximaal 25 g** suiker per dag *(WHO-advies kind)*.\n• 1 glas frisdrank = ~30 g suiker = al boven.\n• 1 Mars-reep = ~30 g.\n• 1 ijsje = ~20 g.\n• Snel **op** maar daarna **moe** *('sugar crash')*.\n• Veroorzaakt: **gaatjes** in tanden, **overgewicht**, **diabetes-risico**.\n• Verborgen suikers: ketchup, brood, zuivel met smaak, ontbijtgranen.\n• Lees **etiket** — 'koolhydraten waarvan suikers'.\n\n**ZOUT** 🧂:\n• **Maximaal 5 g** zout per dag *(kind 6-12: 4 g)*.\n• 1 zakje chips kan al 1-2 g hebben.\n• Te veel = **hoge bloeddruk** + hart-vat-ziektes.\n• Verborgen zout: kant-en-klaar maaltijden, kaas, soep, brood.\n\n**TRANSVET / VERZADIGD VET** 🍔:\n• In frituur, koek, chips, gefrituurde snacks.\n• Verhoogt slecht cholesterol.\n• Veroorzaakt hart-vatziektes.\n• Vervangen door **olijfolie + noten** = beter.\n\n**ALCOHOL** 🍷:\n• Onder 18 jaar: **0,0** *(verboden)*.\n• Volwassenen: max 1 glas per dag.\n• Geen-alcohol-aanbeveling is beter *(WHO 2023)*.\n• Schadelijk voor lever + hersenen.\n• Bij kinderen kan al 1 glas hersenen beschadigen.\n\n**FRISDRANK + ENERGIEDRANKEN** 🥤:\n• Veel suiker + soms cafeïne.\n• 1 blikje cola = 7 suikerklontjes.\n• Energiedrankjes: cafeïne + suiker — niet voor kinderen onder 18.\n\n**KANT-EN-KLAAR EN FAST FOOD** 🍕:\n• Vaak veel zout + vet + suiker.\n• Conserveermiddelen + smaakversterkers (E-nummers).\n• Niet 'fout' maar liever beperkt.\n\n**Wat te eten als je trek hebt?**\n• In plaats van chips → handvol noten.\n• In plaats van frisdrank → water + citroen.\n• In plaats van snoep → fruit.\n• In plaats van koek → volkoren-cracker met hummus.\n\n**Eten + emoties**:\n• Eten bij stress = vaak ongezond.\n• Eet **bewust** — wat heb je echt nodig?\n• Eten is sociaal *(samen eten met familie)* — niet alleen.\n\n**Overgewicht** *(NL kids)*:\n• ~14% van NL-kinderen *(2024)* heeft overgewicht.\n• Risico's: diabetes, hartziekte, depressie.\n• Belangrijk: **gezond eten + bewegen** *(beweegnorm 1 uur per dag)*.\n\n**Hulp nodig?**\n• Praat met je ouder of verzorger, schoolarts, huisarts.\n• Niet je vergelijken met sociale media-influencers — die laten 'ideaal' zien dat vaak nep is.\n\n**Toets-feitje**:\n**Ultraprocessed food** *(zwaar bewerkt voedsel — koek, chips, zoete ontbijtgranen, kant-en-klaar)*: meer dan de helft van wat NL-kinderen eten. Onderzoekers waarschuwen — minder = beter. Vers + zelf koken = altijd beter.",
    checks: [
      {
        q: "Hoeveel **suiker** max per dag (WHO kind)?",
        options: ["25 g", "100 g", "0 g", "1 kilo"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te streng.", "Onmogelijk."],
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
        q: "Hoeveel **alcohol** onder 18?",
        options: ["Niets", "1 glas", "Veel", "Geen regel"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel."],
      },
      {
        q: "1 glas frisdrank = **hoeveel suikerklontjes**?",
        options: ["~7", "1", "0", "100"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Wel suiker.", "Te veel."],
      },
      {
        q: "**Beweegnorm** kind per dag?",
        options: ["1 uur bewegen", "Niets", "8 uur", "5 minuten"],
        answer: 0,
        wrongHints: [null, "Slecht.", "Te veel.", "Te weinig."],
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
      { q: "Waar zit **vitamine C** vooral?", options: ["Sinaasappel + paprika", "Vlees", "Boter", "Suiker"], answer: 0, wrongHints: [null, "Vlees geeft vooral eiwit en ijzer — vitamine C komt uit iets vers en plantaardigs.", "Boter is vooral vet — denk aan fruit en verse groente.", "Suiker geeft alleen energie, geen vitamines — wat eet je vers?"] },
      { q: "Hoeveel **water** per dag?", options: ["1,5-2 liter", "Geen", "5 L", "100 ml"], answer: 0, wrongHints: [null, "Wel.", "Te veel.", "Te weinig."] },
      { q: "Wat in **Schijf van Vijf** moet het meest?", options: ["Groente + fruit", "Vet", "Snoep", "Frisdrank"], answer: 0, wrongHints: [null, "Klein.", "Buiten schijf.", "Buiten schijf."] },
      { q: "**Veganistisch** = ?", options: ["Geen dierlijke producten", "Geen vlees alleen", "Alleen vlees", "Alleen geen melk"], answer: 0, wrongHints: [null, "Vegetariër.", "Tegenovergesteld.", "Een veganist laat meer weg dan alleen melk."] },
      { q: "Wat is **goed vet**?", options: ["Olijfolie", "Frituurvet", "Boter", "Geen vet"], answer: 0, wrongHints: [null, "Frituren maakt vet ongezonder.", "Vooral verzadigd vet — liever beperken.", "Je lichaam heeft wel vet nodig."] },
      { q: "**Eiwitten** vooral voor?", options: ["Groei + spieren", "Snelle energie", "Water", "Vitamine"], answer: 0, wrongHints: [null, "Koolhydraat.", "Niet.", "Niet."] },
      {
        q: "Wat is een **gezond ontbijt** voor een kind in groep 7-8?",
        options: ["Volkorenbrood, kaas en fruit", "Frietjes + frisdrank", "Niks — overslaan", "Alleen koek"],
        answer: 0,
        wrongHints: [null, "Geen ontbijt-voedsel — energie te kort + suiker-piek.", "Onderzoek toont: ontbijt-overslaan = minder concentratie school.", "Te eenzijdig — alleen suiker, geen eiwit of vezels."],
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
          niveaus: { basis: "Volkoren + kaas + fruit + melk.", simpeler: "Goed ontbijt = brood + eiwit + fruit + drinken = balans van Schijf van Vijf.", nogSimpeler: "Volkoren-combo" },
        },
      },
      {
        q: "**'Light'-producten** zijn altijd gezond — waar of niet?",
        options: ["Niet waar — vaak meer zoetstof of toevoegingen", "Altijd waar — minder calorieën = gezonder", "Waar voor diabetici", "Verboden in NL"],
        answer: 0,
        wrongHints: [null, "Marketing-claim — 'light' is GEEN gezondheidsgarantie.", "Niet automatisch geldig — context-afhankelijk.", "Niet — gewoon in supermarkt."],
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
          niveaus: { basis: "'Light' ≠ gezond.", simpeler: "Light = minder van iets, maar vaak vervangen door zoetstof/zout. Lees etiket, vertrouw geen marketing.", nogSimpeler: "Niet altijd" },
        },
      },
      {
        q: "Waardoor wordt de kans op **diabetes type 2** kleiner?",
        options: ["Gezond eten + bewegen + niet roken", "Veel suiker eten als kind", "Geen vlees eten", "Niets — erfelijk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — veel suiker verhoogt risico.", "Niet — alleen geen vlees eten voorkomt het niet.", "Erfelijkheid speelt mee, maar je leefstijl maakt veel uit."],
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
          niveaus: { basis: "Leefstijl.", simpeler: "Gezond eten + bewegen + niet roken maakt de kans op type-2-diabetes veel kleiner.", nogSimpeler: "Leefstijl" },
        },
      },
      { q: "Hoeveel **groente** per dag is aanbevolen (Schijf van Vijf)?", options: ["250 gram","50 gram","1 kilo","Geen norm"], answer: 0, wrongHints: [null, "Veel te weinig.", "Veel te veel.", "Wel — Voedingscentrum norm."] },
      { q: "Welke voedingsstof geeft je **energie** voor het dagelijks bewegen?", options: ["Koolhydraten","Vitamine C","Calcium","IJzer"], answer: 0, wrongHints: [null, "Niet primair energie.", "Bouwstof voor botten.", "Bloed-bouwstof."] },
      { q: "Voor wie geldt **0,0 alcohol** wettelijk?", options: ["Iedereen onder 18 jaar", "Iedereen onder 21", "Alleen kinderen onder 12", "Bestuurders"], answer: 0, wrongHints: [null, "Niet in NL.", "Ook oudere tieners horen erbij.", "Voor bestuurders geldt een lage grens, geen 0,0 — voor welke groep geldt 0,0 wél?"] },
      { q: "Hoeveel **suiker** per dag is max-norm (WHO)?", options: ["~25 gram", "100 gram", "250 gram", "Geen norm"], answer: 0, wrongHints: [null, "Te veel — krijg je snel binnen.", "Veel te veel.", "Wel — WHO norm."] },
      { q: "Hoeveel **maaltijden** per dag is gezond?", options: ["3 hoofdmaaltijden + 2-3 tussendoor", "1 grote maaltijd", "10 kleine maaltijden", "Geen norm"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Wel."] },
      { q: "Welke **kleur** zou een gezond bord moeten zijn?", options: ["Veel kleuren", "Bruin alleen", "Wit alleen", "Alles geel"], answer: 0, wrongHints: [null, "Alleen bruin = weinig afwisseling.", "Alleen wit = weinig afwisseling.", "Alleen geel = weinig afwisseling."] },
      { q: "Welk type **vet** is gezond?", options: ["Onverzadigd (vis, noten, olijfolie)","Verzadigd (chips)","Geen vet eten","Friet"], answer: 0, wrongHints: [null, "Niet primair gezond.", "Niet — wel iets nodig.", "Niet."] },
      { q: "Wat is **eiwit** vooral voor?", options: ["Spieren/cellen bouwen","Energie","Stollen","Zien"], answer: 0, wrongHints: [null, "Koolhydraten.", "Bloedplaatjes.", "Vitamine A."] },
      { q: "Welke voeding heeft veel **calcium**?", options: ["Melk + zuivel","Chips","Cola","Snoep"], answer: 0, wrongHints: [null, "Chips is vooral zout en vet — calcium is voor je bótten. Wat drink je daarvoor?", "Cola bevat suiker en zuur, geen bouwstof voor botten.", "Snoep is suiker — welk voedsel maakt je botten sterk?"] },
      { q: "Welke voeding heeft **vitamine C**?", options: ["Sinaasappel/paprika","Brood","Patat","Vlees"], answer: 0, wrongHints: [null, "Niet primair.", "Niet.", "Niet primair."] },
      { q: "Hoeveel **fruit** per dag (Schijf van Vijf)?", options: ["2 stuks","1 stuk","5 stuks","10 stuks"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Veel te veel."] },
      { q: "**Vegetarisch** eten betekent?", options: ["Geen vlees + vis","Geen suiker","Niets","Alleen plantaardig"], answer: 0, wrongHints: [null, "Niet specifiek.", "Wel iets.", "Veganistisch."] },
      { q: "**Veganistisch** eten?", options: ["Geen dierlijke producten", "Geen vis", "Geen vlees", "Geen suiker"], answer: 0, wrongHints: [null, "Niet alleen vis.", "Vegetarisch.", "Dat heeft niets met dieren te maken."] },
      { q: "Wat is **gezond ontbijt**?", options: ["Volkoren + fruit + zuivel","Snoep","Niets","Alleen drinken"], answer: 0, wrongHints: [null, "Niet.", "Verkeerd start.", "Onvoldoende."] },
      { q: "Wat doet **water drinken**?", options: ["Hydrateert + dorst stillen","Niets","Maakt zwaar","Schaadt"], answer: 0, wrongHints: [null, "Wel iets.", "Niet.", "Niet."] },
      { q: "Wat is **vezel**?", options: ["Onverteerbaar plantendeel", "Suiker", "Vet", "Eiwit"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Eiwit is een bouwstof."] },
      { q: "Welke voeding heeft veel **vezels**?", options: ["Volkoren + groenten","Wit brood","Snoep","Frisdrank"], answer: 0, wrongHints: [null, "Vezelarm.", "Geen vezels.", "Geen."] },
      { q: "Hoeveel **lichaamsbeweging** per dag?", options: ["~1 uur","5 min","Geen","8 uur"], answer: 0, wrongHints: [null, "Te weinig.", "Niet gezond.", "Te veel."] },
      { q: "**Bewerkt voedsel** is meestal?", options: ["Meer toegevoegd zout/suiker", "Gezonder", "Altijd vers", "Vitaminerijker"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Bewerkt is juist niet vers.", "Bij bewerken gaan juist vaak vitamines verloren."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const gezondeVoedingPo = {
  id: "gezonde-voeding-po",
  title: "Gezonde voeding (Doorstroomtoets groep 6-8)",
  emoji: "🍎",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / gezondheid",
  prerequisites: [
    { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "1F" },
  ],
  intro:
    "Gezonde voeding voor Doorstroomtoets groep 6-8 — voedingsstoffen (koolhydraat/eiwit/vet/vitamine/mineraal/water) + Schijf van Vijf (groente 250g, vis 1x/week) + wat te beperken (suiker max 25g, zout max 5g, alcohol 0,0 onder 18) + vegetarisch/veganistisch. Sluit op lichaam-gezondheid. ~15 min.",
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
