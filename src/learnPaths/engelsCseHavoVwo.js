// Leerpad: Engels CSE HAVO/VWO — leesvaardigheid + literair fragment.
// Dieper dan VMBO-pad (cseStrategieEngelsVmbo): langere teksten, meer nuance,
// literair fragment voor VWO, journalistieke + opinie + wetenschap-teksten.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  blauw: "#1565c0",
  rood: "#c62828",
  groen: "#00897b",
  goud: "#ffd54f",
};

const stepEmojis = ["📋", "❓", "📖", "🎭", "🏆"];

const chapters = [
  { letter: "A", title: "Examen-format HAVO/VWO", emoji: "📋", from: 0, to: 0 },
  { letter: "B", title: "Vraagsoorten + register", emoji: "❓", from: 1, to: 1 },
  { letter: "C", title: "Lange teksten + strategie", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "Literair fragment + tone", emoji: "🎭", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Examen-format ─────────────────────────────────────
  {
    title: "Examen-format Engels HAVO/VWO — wat te verwachten",
    explanation:
      "Het Engels-CSE op HAVO/VWO test alleen **leesvaardigheid** + **woordenschat-in-context**. Geen spreken, schrijven, luisteren (die zijn schoolexamen).\n\n**HAVO Engels CSE**:\n• Duur: **150 minuten** (eerder 120, sinds 2024 langer).\n• ~50 vragen over ~7-8 teksten.\n• Tekstlengte: 400-900 woorden per tekst.\n• Soorten: krantenartikel / opinie / wetenschappelijke samenvatting / interview / column.\n• Vraagstijl: meerkeuze + open + invul-vragen.\n\n**VWO Engels CSE**:\n• Duur: **150 minuten**.\n• ~50 vragen over ~7-8 teksten.\n• Eén tekst is een **literair fragment** (roman/short story) — extra nuance vereist.\n• Tekstlengte: 600-1500 woorden (langer dan HAVO).\n• Bredere woordenschat — academic English, archaïsche vormen.\n\n**Verschil met VMBO**:\n• VMBO: simpelere teksten, vooral feit-vragen, leesvaardigheid het hoofd-doel.\n• HAVO/VWO: nuance-vragen, intentie, register, ironie, literaire analyse (VWO).\n\n**Tijdsbudget HAVO/VWO** (150 min, 50 vragen):\n• ~3 min per vraag gemiddeld.\n• 1e tekst kost vaak 15-20 min (overzicht + vragen).\n• Reserveer **15 min eind** voor terugcheck.\n\n**Toegestane hulpmiddelen**:\n• Woordenboek Engels-Nederlands (papier).\n• **Geen elektronisch woordenboek**.\n• Geen vertaal-app.\n• Tip: gebruik woordenboek **spaarzaam** — kost veel tijd.\n\n**Cijfer-opbouw**:\n• Open vragen: scoring-model met deelpunten.\n• Meerkeuze: alleen-juist-of-fout.\n• Sufficiency-score HAVO ~5,5 (afhankelijk N-term).\n\n**Verschil tekst-soorten**:\n• **Krantenartikel**: feiten + duiding. Doel = informeren.\n• **Opinion column**: subjectief + provocatief. Doel = mening uiten/overtuigen.\n• **Feature-article**: lange achtergrondsessie. Doel = uitdiepen.\n• **Interview**: Q&A-vorm met expert/persoon.\n• **Literair fragment**: roman-snippet. Doel = vermaak + reflectie.\n• **Scientific summary**: onderzoek-vertaling voor leek. Doel = uitleg.",
    checks: [
      {
        q: "Hoe lang duurt het **VWO Engels CSE**?",
        options: ["150 minuten","90 minuten","180 minuten","120 minuten"],
        answer: 0,
        wrongHints: [null, "Niet — dat is VMBO.", "Te lang.", "Voorheen, sinds 2024 verlengd."],
        uitlegPad: {
          stappen: [{ titel: "150 min sinds 2024", tekst: "Beide HAVO en VWO **150 min** sinds examen-jaar 2024 (eerder 120-150 min wisselend). ~50 vragen over 7-8 teksten." }],
          theorie: "Examenblad.nl-info: officiële regelgeving per jaar. Check altijd actuele duur per examenjaar.",
          niveaus: { basis: "150 minuten. A.", simpeler: "VWO CSE = 150 min = A.", nogSimpeler: "150 = A." },
        },
      },
      {
        q: "Welk hulpmiddel is **toegestaan** op CSE Engels HAVO/VWO?",
        options: ["Papieren woordenboek Engels-NL","Google Translate","Smartphone","Elektronisch woordenboek"],
        answer: 0,
        wrongHints: [null, "Niet — geen elektronische apparaten.", "Niet — niet op CSE.", "Niet — wel verboden."],
        uitlegPad: {
          stappen: [{ titel: "Papier wel, elektronisch niet", tekst: "**Alleen papieren woordenboek** Engels-NL (of Engels-Engels). Geen elektronische woordenboeken, geen vertaal-apps, geen telefoon. Niet alle scholen leveren woordenboeken — vraag tijdig of zelf meenemen." }],
          theorie: "Tip: gebruik woordenboek spaarzaam. Per opzoek 30-60 sec verloren. Beter eerst raden uit context.",
          niveaus: { basis: "Papieren woordenboek. A.", simpeler: "Woordenboek papier OK = A.", nogSimpeler: "Papieren = A." },
        },
      },
      {
        q: "Wat is uniek voor **VWO Engels** (niet HAVO)?",
        options: ["Literair fragment","Geen tijdslimiet","Mondelinge toets","Geen leesvaardigheid"],
        answer: 0,
        wrongHints: [null, "Niet — 150 min.", "Niet — CSE = schriftelijk.", "Niet — dat is hoofd-onderdeel."],
        uitlegPad: {
          stappen: [{ titel: "VWO heeft fictie-tekst", tekst: "**VWO**: een van de teksten is een **literair fragment** (uit roman / short story). Vereist andere skills: tone, irony, character-analyse, sub-tekst. **HAVO**: meer journalistiek + non-fictie." }],
          theorie: "Literair fragment heeft typisch ~10-15 vragen — kan groot deel van examen-cijfer bepalen.",
          niveaus: { basis: "Literair fragment. A.", simpeler: "VWO = fictie-fragment = A.", nogSimpeler: "Fictie = A." },
        },
      },
      {
        q: "Hoeveel tijd per vraag heb je gemiddeld op HAVO/VWO Engels (150 min / 50 vragen)?",
        options: ["3 minuten","6 minuten","1 minuut","10 minuten"],
        answer: 0,
        wrongHints: [null, "Te ruim — kom je niet door.", "Te krap — leesvaardigheid heeft tijd nodig.", "Veel te ruim."],
        uitlegPad: {
          stappen: [{ titel: "150/50 = 3", tekst: "**150 min / 50 vragen = 3 min/vraag** gemiddeld. Realistisch: korter voor scan-vragen (1 min), langer voor inhouds-vragen (4-5 min)." }],
          theorie: "Trek 10-15 min eind-check af → effectief ~2,7 min/vraag. Houd timer per pagina.",
          niveaus: { basis: "3 min. A.", simpeler: "150/50 = 3 = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Welke tekstsoort heeft vooral **subjectieve mening** + provocatie?",
        options: ["Opinion column","Krantenbericht","Scientific summary","Interview"],
        answer: 0,
        wrongHints: [null, "Niet — feitelijk + neutraal.", "Niet — uitleg van onderzoek.", "Bevat meningen maar van geïnterviewde, niet auteur."],
        uitlegPad: {
          stappen: [{ titel: "Opinion = mening", tekst: "**Opinion column** (vaak in The Guardian, NY Times etc.) = persoonlijke mening van schrijver, vaak controversieel. CSE-favoriet voor intentie- en toon-vragen." }],
          theorie: "Cito-tip: in opinion column zit auteur-mening duidelijk; in nieuws-artikel pas op met 'mening van schrijver vs van geïnterviewde'.",
          niveaus: { basis: "Opinion column. A.", simpeler: "Subjectief = opinion = A.", nogSimpeler: "Opinion = A." },
        },
      },
    ],
  },

  // ─── B. Vraagsoorten + register ───────────────────────────
  {
    title: "Vraagsoorten + register op HAVO/VWO",
    explanation:
      "HAVO/VWO Engels CSE heeft **complexere vraagsoorten** dan VMBO. Plus: **register** (formeel/informeel) speelt grote rol.\n\n**Uitgebreide vraagsoorten** (boven VMBO-niveau):\n\n**1. Intentie/purpose** ('What is the author's purpose?'):\n• To inform / persuade / entertain / warn / criticise.\n• Strategie: kijk naar **toon** + **slot**. Vooral laatste alinea.\n\n**2. Argumentation** ('On which argument does the author rely?'):\n• Type argumenten herkennen (feit / voorbeeld / autoriteit).\n• Drogredenen identificeren.\n\n**3. Function** ('What is the function of paragraph 4?'):\n• Inleiden / toelichten / nuanceren / weerleggen / concluderen.\n• Strategie: vraag wat paragraaf **toevoegt** aan tekst.\n\n**4. Implication** ('What is implied/suggested?'):\n• Niet letterlijk gezegd maar gesuggereerd.\n• Strategie: lees **tussen de regels** + 'als-dan' afleiden.\n\n**5. Tone/mood**:\n• Sarcastic / cynical / nostalgic / hopeful / critical / neutral / ironic.\n• Cito-pattern: zoek emotie-woorden + word-choice.\n\n**6. Register** (formaliteit-niveau):\n• Very formal: academic English, complex zinnen.\n• Formal: news / professional letter.\n• Neutral: standaard-Engels.\n• Informal: spreektaal, idioms.\n• Slang/colloquial: 'gonna', 'wanna', 'yeah'.\n\n**Cito-register-vraag-favoriet**:\n• 'How would you describe the register of this article?'\n• Strategie: kijk naar **woordkeuze** (Latin-derived = formeler) + **zinslengte** + **gebruik 'I/we'**.\n\n**7. Vergelijking-vraag**:\n• 'How do paragraph 2 and 5 relate?'\n• Soorten: contrast / continuatie / illustratie / weerlegging.\n\n**8. Title-keuze**:\n• 'Which would be the best title?'\n• Strategie: titel moet **hoofdgedachte** weerspiegelen.\n\n**Signaalwoorden HAVO/VWO** (uitbreiding):\n• **Causaal**: consequently, hence, accordingly, owing to.\n• **Concessie**: notwithstanding, albeit, granted that.\n• **Vergelijking**: similarly, likewise, in the same vein.\n• **Versterking**: indeed, in fact, moreover, furthermore.\n• **Tegenstelling**: nonetheless, conversely, on the other hand.\n• **Klassieke val**: 'However' staat soms na lange concessie — let op.\n\n**Cito-truc — toonvragen**:\nCheck **drie elementen**: word-choice (positief/negatief/emotioneel) + figuur-spraak (irony/hyperbool) + auteur-intentie. Combo geeft toon.",
    checks: [
      {
        q: "*'What is the author's purpose in the final paragraph?'* — welke vraag-type?",
        options: ["Intentie","Detail","Verwijzing","Register"],
        answer: 0,
        wrongHints: [null, "Niet — purpose is breder dan detail.", "Niet — verwijswoorden.", "Niet — toon vs purpose verschilt."],
        uitlegPad: {
          stappen: [{ titel: "Purpose = intentie/doel", tekst: "**Purpose** = WAAROM schrijver dit deel schreef. Niet 'wat staat er' (detail) of 'hoe formeel is 't' (register), maar 'wat wil schrijver bereiken'. Vaak: conclude / persuade / warn / criticise." }],
          theorie: "Cito-strategie: lees laatste alinea zorgvuldig + kijk naar zinnen die actie/conclusie suggereren.",
          niveaus: { basis: "Intentie. A.", simpeler: "Purpose = intentie = A.", nogSimpeler: "Purpose = A." },
        },
      },
      {
        q: "Een artikel gebruikt veel woorden als 'consequently', 'notwithstanding', 'whereupon'. Wat is het **register**?",
        options: ["Formal/academic","Informal","Slang","Mixed"],
        answer: 0,
        wrongHints: [null, "Niet — Latin-origin woorden = formeel.", "Niet — slang gebruikt korte woorden.", "Niet — consistent formal."],
        uitlegPad: {
          stappen: [{ titel: "Lange Latin-words = academisch", tekst: "**Consequently** (vs 'so'), **notwithstanding** (vs 'although'), **whereupon** (vs 'then'). Allemaal **Latijns-Frans-derived** = formeel/academic register. Tegenovergesteld: 'cuz', 'gonna' = informeel/slang." }],
          woorden: [{ woord: "register", uitleg: "Formaliteit-niveau van taal (formal / neutral / informal)." }],
          theorie: "Engelse taal heeft 2 lagen: Germaans (kortere woorden, informeler) en Latijns/Frans (langere, formeler). Buy vs purchase. Help vs assist. Sweat vs perspire.",
          niveaus: { basis: "Formal. A.", simpeler: "Lange Latin-woorden = formal = A.", nogSimpeler: "Formal = A." },
        },
      },
      {
        q: "*'However, this study has been challenged.'* Wat doet 'however' hier?",
        options: ["Contrast-signaal","Versterking","Voorbeeld","Conclusie"],
        answer: 0,
        wrongHints: [null, "Niet — however = tegenstelling.", "Niet — geen voorbeeld.", "Niet — geen samenvatting."],
        uitlegPad: {
          stappen: [{ titel: "However = tegenstelling", tekst: "**However** = klassiek contrast-signaalwoord. Voorgaande zin zei iets positiefs over studie; deze keert om: 'maar is bekritiseerd'. Vooral belangrijk bij conclusie-vragen — zin na 'however' is vaak echte mening." }],
          theorie: "Cito-trick: kijk altijd zin NA 'however' / 'nonetheless' / 'on the contrary' voor hoofdstandpunt.",
          niveaus: { basis: "Contrast. A.", simpeler: "However = maar = contrast = A.", nogSimpeler: "Contrast = A." },
        },
      },
      {
        q: "Welke toon past bij: *'Oh great, another rainy day. Just what I needed.'*?",
        options: ["Sarcastisch/ironisch","Enthousiast","Neutraal","Wetenschappelijk"],
        answer: 0,
        wrongHints: [null, "Niet — bedoeld tegenovergestelde.", "Niet — emotie.", "Niet — niet zakelijk."],
        uitlegPad: {
          stappen: [{ titel: "Sarcasme = positief woord, negatieve bedoeling", tekst: "**Sarcastisch**: 'great' + 'just what I needed' in regen-context = duidelijk tegenovergestelde bedoeling. Cynisme/sarcasm in tekst herkennen aan **mismatch** tussen woordkeuze + context." }],
          theorie: "Cito-truc: bij toon-vragen — past de letterlijke betekenis bij wat schrijver écht bedoelt? Mismatch = irony of sarcasme.",
          niveaus: { basis: "Sarcastisch. A.", simpeler: "Positief woord + slechte situatie = sarcasme = A.", nogSimpeler: "Sarcastisch = A." },
        },
      },
      {
        q: "*'What is the FUNCTION of paragraph 3?'* — wat moet je doen?",
        options: ["Bepalen wat deze alinea toevoegt aan tekst","Vertaling geven","Tellen aantal woorden","Spelling controleren"],
        answer: 0,
        wrongHints: [null, "Niet — geen vertaling.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Function = rol binnen tekst", tekst: "**Function** = welke ROL deze alinea heeft in de tekst-structuur. Opties: introduceren / illustreren / nuanceren / weerleggen / contrasteren / concluderen. Kijk naar **inhoud relatie** met omringende alinea's." }],
          niveaus: { basis: "Wat alinea toevoegt. A.", simpeler: "Function = rol in tekst = A.", nogSimpeler: "Rol = A." },
        },
      },
    ],
  },

  // ─── C. Lange teksten + strategie ─────────────────────────
  {
    title: "Lange teksten — strategie voor 1000+ woorden",
    explanation:
      "HAVO/VWO-teksten zijn vaak 600-1500 woorden — veel langer dan VMBO. **Strategie-aanpak** is essentieel.\n\n**5-stappen-strategie lange tekst**:\n\n**Stap 1 — Pre-read (30 sec)**:\n• Lees **titel** + **inleider** (vaak vetgedrukt boven artikel).\n• Lees **eerste alinea** + **laatste alinea**.\n• Conclusie: waar gaat tekst over? Wat is hoofd-standpunt?\n\n**Stap 2 — Vraag-scan (1 min)**:\n• Lees alle **vragen** voor die tekst voordat je tekst leest.\n• Markeer **trefwoorden** in vragen.\n• Krijg overzicht: wat moet ik zoeken?\n\n**Stap 3 — Skim-lezen (2-3 min)**:\n• Lees titel + **eerste + laatste zin elke alinea**.\n• Schrijf alinea-thema's in margin (1-2 woorden per alinea).\n• Nu weet je waar info zit.\n\n**Stap 4 — Per vraag detail-lezen**:\n• Scan voor trefwoord → vind relevante alinea.\n• Lees alinea **3x** als nodig.\n• Antwoord + ga door.\n\n**Stap 5 — Twijfel-vragen markeren**:\n• Onzeker antwoord? **Markeer** met * + ga door.\n• Niet vastlopen — tijd is kostbaar.\n• Aan eind: terug naar markeerde vragen.\n\n**Tijdsbudget per tekst**:\n• 8 teksten × ~17 min = 136 min.\n• 10-15 min eind-check.\n• Variabel: korte tekst (~10 min), lange tekst (~25 min).\n\n**Markeren in tekst** (toegestaan op klad of eigen tekst):\n• Onderstreep trefwoorden uit vraag.\n• Omcirkel signaalwoorden ('however', 'therefore').\n• Tel zinnen of alinea's met nummers.\n• 'P3 = critique' in margin (kort thema).\n\n**Lange-tekst-valstrikken**:\n• **Verloren in detail**: blijf hangen in 1 alinea, vergeet rest.\n• **Tijds-illusie**: denkt 'ik heb nog tijd' tot helft over is.\n• **Vraag-vergeten**: leest tekst, vergeet wat vraag was.\n• **Eind-haasten**: laatste 5 vragen in 5 min = punten missen.\n\n**Anti-valstrikken**:\n• Houd **klok in gaten** elke 2 vragen.\n• Lees vraag **opnieuw** voor je antwoordt.\n• Schrap **direct foute opties** (sluit uit).\n• Vertrouw **eerste indruk** vaak — niet eindeloos heroverwegen.\n\n**Bij open vragen** (HAVO/VWO heeft die):\n• Antwoord in **Nederlands** (tenzij anders gevraagd).\n• **Vol/zinnen** schrijven.\n• **2-3 bewijspunten** uit tekst.\n• Geen overbodige info — concreet en gericht.\n• Voorbeeld: 'De schrijver vindt klimaatbeleid traag omdat (1) politici onvoldoende actie ondernemen en (2) bedrijven veel uitstel krijgen.'",
    checks: [
      {
        q: "Wat doe je het EERST bij een lange tekst?",
        options: ["Titel + eerste/laatste alinea lezen (pre-read)","Hele tekst lezen","Vragen invullen","Woordenboek pakken"],
        answer: 0,
        wrongHints: [null, "Te langzaam.", "Niet — eerst overzicht.", "Niet — eerst lezen."],
        uitlegPad: {
          stappen: [{ titel: "Pre-read = oriëntatie", tekst: "**Pre-read** = snel overzicht krijgen. Titel + 1e/laatste alinea = wat is hoofdpunt. Daarna pas details bekijken. Bespaart tijd + voorkomt verdwalen." }],
          niveaus: { basis: "Pre-read. A.", simpeler: "Eerst overzicht = pre-read = A.", nogSimpeler: "Pre-read = A." },
        },
      },
      {
        q: "Wanneer is **markeren** (vragen overslaan) handig?",
        options: ["Bij twijfel-vraag waar je langer over zou denken","Bij elke vraag","Nooit","Alleen open vragen"],
        answer: 0,
        wrongHints: [null, "Niet — alleen voor moeilijke.", "Wel handig bij specifieke vragen.", "Werkt voor zowel mc als open."],
        uitlegPad: {
          stappen: [{ titel: "Markeer + door", tekst: "Bij **twijfel/onzeker** vraag: markeer met **\\*** of cirkel rond vraag-nummer + ga **door** naar volgende. Aan eind terug. Voorkomt tijd-verlies + frisse blik op tweede beurt." }],
          theorie: "Cito-strategie: max 2-3 min per vraag. Daarna markeren + door. Niet 8 min op 1 vraag besteden.",
          niveaus: { basis: "Bij twijfel. A.", simpeler: "Twijfel = markeer + door = A.", nogSimpeler: "Markeer = A." },
        },
      },
      {
        q: "Hoe schrijf je een **open vraag-antwoord** op HAVO/VWO?",
        options: ["NL volledige zin met 2-3 bewijspunten uit tekst","Engels woord-voor-woord","Alleen trefwoord","Lang essay"],
        answer: 0,
        wrongHints: [null, "Niet — open vragen meestal in NL.", "Te kort — geen volle antwoord.", "Te lang — overbodig."],
        uitlegPad: {
          stappen: [{ titel: "NL + bewijs uit tekst", tekst: "Open vragen: **Nederlands volledige zin** + **2-3 bewijspunten** uit tekst. 'De schrijver vindt X omdat (1) ... en (2) ...'. Punten per bewijspunt." }],
          theorie: "Cito-scoring: 1 bewijs = 1 punt, 2 = 2 punten. Geen extra punten voor lang antwoord.",
          niveaus: { basis: "NL volledig + bewijs. A.", simpeler: "Open = NL volle zin + bewijs = A.", nogSimpeler: "NL + bewijs = A." },
        },
      },
      {
        q: "Wat doe je als je een **onbekend woord** tegenkomt in lange tekst?",
        options: ["Eerst context + 1-2 zinnen rond lezen","Direct woordenboek","Woord overslaan + door","Vraag overslaan"],
        answer: 0,
        wrongHints: [null, "Niet — kost veel tijd.", "Soms wel — maar eerst context.", "Niet voor de vraag overslaan."],
        uitlegPad: {
          stappen: [{ titel: "Context > woordenboek", tekst: "**Eerst context lezen** (zin met onbekend woord + 1-2 ervoor/erna). Vaak kun je betekenis raden uit context. Pas als context niet helpt: woordenboek (30-60 sec verlies). Direct woordenboek = tijd-verlies." }],
          theorie: "Cito-tip: ~80% van onbekende woorden is uit context te raden bij HAVO/VWO-leerlingen.",
          niveaus: { basis: "Context eerst. A.", simpeler: "Onbekend = context lezen = A.", nogSimpeler: "Context = A." },
        },
      },
      {
        q: "Welk **valstrik** is meest schadelijk bij HAVO/VWO lang examen?",
        options: ["Eind-haasten (laatste vragen in 5 min)","Te traag lezen","Markeren","Klok kijken"],
        answer: 0,
        wrongHints: [null, "Niet — wel risico maar minder dan eind-haasten.", "Markeren is JUIST strategie.", "Klok kijken is goed."],
        uitlegPad: {
          stappen: [{ titel: "Eind-haasten = punten missen", tekst: "Klassieke val: leerling besteedt teveel tijd aan begin → laatste 10-15 vragen in 10 min → veel punten missen. **Voorkom door tijd-check elke 2 vragen** + markeren bij twijfel + door." }],
          theorie: "Cito-strategie: berekening hoeveel tijd je hebt per pagina/tekst → blijf daaronder.",
          niveaus: { basis: "Eind-haasten. A.", simpeler: "Eind-haasten = punten missen = A.", nogSimpeler: "Eind-haasten = A." },
        },
      },
    ],
  },

  // ─── D. Literair fragment + tone ──────────────────────────
  {
    title: "Literair fragment (VWO) + tone-analyse",
    explanation:
      "**VWO** heeft op CSE altijd **1 literair fragment** (roman / short story / soms gedicht). Vereist andere skills dan journalistiek.\n\n**Verschil met non-fictie**:\n| | Journalistiek | Literair |\n|---|---|---|\n| Doel | Informeren / overtuigen | Vermaak + reflectie |\n| Toon | Vast (formal/neutral) | Wisselend, vaak ambigu |\n| Personage | Auteur zelf | Verteller (≠ auteur) + characters |\n| Vraag-typen | Feit / argument | Tone / character / sub-text |\n| Tijd | Heden | Vaak verleden / dialogue |\n\n**Verteller-soorten** (POV — point of view):\n• **First-person (I/we)**: hoofdpersoon vertelt. Subjectief.\n• **Third-person limited (he/she)**: weet alleen wat hoofdpersoon weet.\n• **Third-person omniscient**: alwetende verteller.\n• **Second-person (you)**: zeldzaam — lezer wordt aangesproken.\n\n**Character-analyse**:\n• **Round character**: complex, ontwikkelt zich (protagonist).\n• **Flat character**: 1-dimensionaal (vaak supporting).\n• **Static**: verandert niet.\n• **Dynamic**: verandert door verhaal.\n\n**Tone in literatuur**:\n• Auteur kan **andere toon** dan personage hebben.\n• 'Reliable narrator': we vertrouwen de verteller.\n• 'Unreliable narrator': verteller liegt of mist info — lezer moet doorzien.\n\n**Sub-text** (wat NIET letterlijk gezegd):\n• Personage zegt 'It's fine.' maar context suggereert dat 't NIET fine is.\n• Cito-favoriet: 'What does X really feel?'\n\n**Literaire stijlmiddelen** (engels):\n• **Metaphor**: 'The world is a stage.'\n• **Simile** (met 'as' of 'like'): 'as cold as ice.'\n• **Personification**: 'The wind whispered.'\n• **Foreshadowing**: voorspellen toekomst-gebeurtenis in verhaal.\n• **Flashback**: terugkijken naar verleden.\n• **Symbolism**: object/locatie staat voor abstract idee.\n• **Irony**: tegenovergestelde van wat lijkt (situational / verbal / dramatic).\n• **Mood vs tone**:\n  - **Mood** = sfeer die lezer voelt.\n  - **Tone** = houding schrijver.\n  - Voorbeeld: somber mood + sarcastic tone in dystopie-roman.\n\n**Cito-VWO-literair-strategie**:\n1. **Lees fragment 2x**: 1e voor verhaal-overzicht, 2e voor details.\n2. **Identificeer verteller-POV**.\n3. **Markeer character-emoties** in margin.\n4. **Zoek symbolen + recurring images**.\n5. **Vraag jezelf**: WAT zegt fragment ZONDER te zeggen?\n\n**Veel-gevraagde VWO-vraag-typen**:\n• 'How does X feel at this moment?'\n• 'What does the [object/setting] symbolise?'\n• 'What is the tone of the narrator?'\n• 'What does the dialogue reveal about character?'\n• 'How does the fragment build tension?'",
    checks: [
      {
        q: "Wat is het verschil tussen **mood** en **tone**?",
        options: ["Mood = sfeer voor lezer; tone = houding auteur","Hetzelfde","Mood = personage; tone = verteller","Mood = goede toon; tone = slechte"],
        answer: 0,
        wrongHints: [null, "Niet — verschillen.", "Niet relevant.", "Niet — geen kwaliteit-oordeel."],
        uitlegPad: {
          stappen: [{ titel: "Mood ≠ tone", tekst: "**Mood** = sfeer/atmosfeer die LEZER voelt (gloomy / hopeful / tense). **Tone** = houding van AUTEUR/verteller (sarcastic / earnest / detached). Kan verschillen: somber mood + ironic tone tegelijk." }],
          theorie: "Cito-VWO-favoriet om dit verschil te testen. Onthouden: mood = atmosfeer, tone = attitude.",
          niveaus: { basis: "Mood=sfeer, tone=houding. A.", simpeler: "Mood = lezer-sfeer, tone = auteur-houding = A.", nogSimpeler: "Verschillen = A." },
        },
      },
      {
        q: "Een **unreliable narrator** is een verteller die:",
        options: ["De lezer misleidt of belangrijke info mist","Altijd betrouwbaar is","Niet bestaat","Wetenschappelijke uitleg geeft"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — dat is reliable.", "Wel — komt vaak voor in moderne literatuur.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Unreliable = lezer moet doorzien", tekst: "**Unreliable narrator** = verteller die liegt / details vergeet / overdrijft / cognitief beperkt is. Lezer moet **tussen de regels** lezen om 'echte' verhaal te vinden. Klassieke voorbeelden: Catcher in the Rye (Holden), Lolita (Humbert), Gone Girl." }],
          theorie: "Cito-VWO-strategie: bij first-person-vertelling — denk altijd 'is dit echt zo of liegt verteller?'.",
          niveaus: { basis: "Misleidende verteller. A.", simpeler: "Unreliable = liegt/mist info = A.", nogSimpeler: "Misleidt = A." },
        },
      },
      {
        q: "Wat is **foreshadowing**?",
        options: ["Hint vooraf op latere gebeurtenis","Terugflash","Beeldspraak","Karakter-beschrijving"],
        answer: 0,
        wrongHints: [null, "Niet — dat is flashback.", "Niet — dat is metaphor.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Voorspel-hint", tekst: "**Foreshadowing** = auteur geeft subtiel **hint over toekomstige gebeurtenis** in verhaal. Vroeg in verhaal: kraai vliegt over → later: dood van personage. Lezer voelt achteraf 'ik had het kunnen zien'." }],
          theorie: "Klassiek voorbeeld: Harry Potter — Trelawney-voorspelling die later uitkomt.",
          niveaus: { basis: "Hint vooraf. A.", simpeler: "Foreshadowing = hint toekomst = A.", nogSimpeler: "Hint = A." },
        },
      },
      {
        q: "*'She walked into the empty house, her footsteps echoing in the silence.'* Welke mood?",
        options: ["Eenzaam/spookachtig","Vrolijk","Zakelijk","Romantisch"],
        answer: 0,
        wrongHints: [null, "Niet — woordkeuze is somber.", "Niet — geen feiten-toon.", "Niet — geen romance."],
        uitlegPad: {
          stappen: [{ titel: "Woordkeuze = mood", tekst: "**Empty / echoing / silence** = somber, vacuüm, eenzaam. Lezer voelt zelf onbehagen. Klassieke woorden voor 'lonely / eerie mood'." }],
          theorie: "Cito-tip: bij mood-vragen — zoek **3-5 adjectieven/zelfstandige naamwoorden** met emotie-lading.",
          niveaus: { basis: "Eenzaam. A.", simpeler: "Empty + echoing = lonely mood = A.", nogSimpeler: "Eenzaam = A." },
        },
      },
      {
        q: "Een **first-person narrator** gebruikt:",
        options: ["'I' en 'we'","'He' en 'she'","'You'","Geen voornaamwoorden"],
        answer: 0,
        wrongHints: [null, "Niet — dat is third-person.", "Niet — dat is second-person.", "Niet — wel."],
        uitlegPad: {
          stappen: [{ titel: "First-person = ik", tekst: "**First-person**: 'I went to the store.' Verteller = personage. **Subjectief** — beperkt tot wat dit personage weet. Catcher in the Rye, To Kill a Mockingbird etc." }],
          theorie: "VWO-CSE-vraag: 'From whose POV is this fragment told?' Antwoord: kijk naar voornaamwoorden + bewustzijn.",
          niveaus: { basis: "I/we. A.", simpeler: "First-person = ik-verteller = A.", nogSimpeler: "I = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — HAVO/VWO Engels mix",
    explanation:
      "Mix van strategie + register + vraagsoorten + literaire elementen.\n\nVeel succes!",
    checks: [
      {
        q: "*'Notwithstanding the criticism, the experiment yielded valuable results.'* Wat doet 'notwithstanding'?",
        options: ["Concessie/contrast (ondanks)","Versterking","Reden","Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet — geen oorzaak.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Notwithstanding = ondanks", tekst: "**Notwithstanding** = 'in spite of' = 'ondanks'. Formal concessie-signaalwoord. Synoniemen: despite, in spite of, notwithstanding the fact that." }],
          theorie: "Formal vocabulary CSE-favoriet: notwithstanding, albeit, henceforth, nonetheless.",
          niveaus: { basis: "Concessie. A.", simpeler: "Notwithstanding = ondanks = A.", nogSimpeler: "Ondanks = A." },
        },
      },
      {
        q: "Een **opinion column** met sarcastische toon test typisch:",
        options: ["Intentie + ironie herkennen","Spelling","Datums onthouden","Statistiek"],
        answer: 0,
        wrongHints: [null, "Niet relevant op leesvaardigheid.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Opinion + sarcasme = tone-vraag", tekst: "Bij **opinion column met sarcasme** test Cito: kan leerling de **echte mening** achter sarcastisch oppervlak herkennen? Vraag-soort: tone / intentie / implication." }],
          niveaus: { basis: "Intentie + ironie. A.", simpeler: "Sarcasme = ironie-vraag = A.", nogSimpeler: "Ironie = A." },
        },
      },
      {
        q: "Welke vraag is **typisch literair-fragment**-vraag (VWO)?",
        options: ["'What does the silence at the dinner table reveal?'","'When was the law passed?'","'What is the GDP in 2020?'","'Define 'mitochondria'.'"],
        answer: 0,
        wrongHints: [null, "Niet — feit-vraag.", "Niet — feit-vraag.", "Niet — definitie."],
        uitlegPad: {
          stappen: [{ titel: "Sub-text + character", tekst: "**Literair-fragment-vragen** gaan om **sub-tekst**, character-emoties, symbolisme. 'What does silence reveal?' = wat zegt deze stilte over personages/relatie? Klassiek lit-vraag." }],
          niveaus: { basis: "Eerste. A.", simpeler: "Sub-text-vraag = literair = A.", nogSimpeler: "Eerste = A." },
        },
      },
      {
        q: "Voor een open vraag schrijf je antwoord het beste in:",
        options: ["Nederlandse volle zin met bewijs uit tekst","Engelse korte zin","Steekwoorden","Lang essay"],
        answer: 0,
        wrongHints: [null, "Niet — meestal NL.", "Te kort.", "Te lang."],
        uitlegPad: {
          stappen: [{ titel: "NL + bewijs = goed", tekst: "Open vragen: **NL volledige zin** + 2-3 bewijspunten uit tekst. 'De schrijver vindt X omdat (1)...(2)...'. Punten per bewijspunt." }],
          niveaus: { basis: "NL volle zin. A.", simpeler: "Open = NL + bewijs = A.", nogSimpeler: "NL + bewijs = A." },
        },
      },
      {
        q: "Een tekst zegt: *'The findings, while preliminary, suggest a new direction.'* Wat zegt dit over de bevindingen?",
        options: ["Voorlopig + suggestief, niet definitief","Definitief bewezen","Verkeerd","Compleet onaf"],
        answer: 0,
        wrongHints: [null, "Niet — 'preliminary' is voorlopig.", "Niet — wel suggestief.", "Niet — wel zinvol."],
        uitlegPad: {
          stappen: [{ titel: "Preliminary + suggest = voorzichtig", tekst: "**'While preliminary, suggest'** = voorzichtig + voorlopig. Niet definitief, maar wijst wel in richting. Wetenschappelijke voorzichtigheid-toon." }],
          theorie: "Cito-vocab: 'preliminary' (voorlopig), 'tentative' (aarzelend), 'inconclusive' (geen conclusie mogelijk) = vaak in onderzoek-teksten.",
          niveaus: { basis: "Voorlopig. A.", simpeler: "Preliminary = voorlopig + nieuwe richting = A.", nogSimpeler: "Voorlopig = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const engelsCseHavoVwo = {
  id: "engels-cse-havo-vwo",
  title: "Engels CSE leesvaardigheid (HAVO/VWO)",
  emoji: "📕",
  level: "havo4-5-vwo",
  subject: "engels",
  referentieNiveau: "havo-vwo-CSE",
  sloThema: "Engels HAVO/VWO — leesvaardigheid CSE + literair fragment VWO",
  prerequisites: [
    { id: "cse-strategie-engels-vmbo", title: "CSE-strategie Engels (VMBO basis)", niveau: "vmbo-gt-CSE" },
    { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "vmbo-gt-CSE" },
    { id: "woordenschat-engels-po", title: "Woordenschat Engels (basis)", niveau: "po-1F" },
  ],
  intro:
    "Engels CSE HAVO/VWO — leesvaardigheid op lange teksten (1000+ woorden) + register-analyse + 8 vraagsoorten + literair fragment (alleen VWO) + tone/mood/character-analyse. Diepe-uitbreiding van VMBO-strategie-pad. ~15 min.",
  triggerKeywords: [
    "Engels CSE", "HAVO Engels", "VWO Engels",
    "leesvaardigheid Engels",
    "register", "formal", "informal", "academic English",
    "tone", "mood", "irony", "sarcasm",
    "literair fragment", "literary fragment",
    "narrator", "POV", "first-person", "third-person",
    "unreliable narrator",
    "foreshadowing", "flashback", "symbolism",
    "metaphor", "simile", "personification",
    "intentie", "purpose", "function", "implication",
    "however", "notwithstanding", "consequently",
    "open vraag Engels",
  ],
  chapters,
  steps,
};

export default engelsCseHavoVwo;
