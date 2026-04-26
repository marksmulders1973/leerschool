export const config = { runtime: 'edge', maxDuration: 60 };

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

export default async function handler(req) {
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json({ error: 'API key not configured' }, 500);
  }

  const { subject, level, count = 5, textbook, topic } = await req.json();

  // ─── Content Safety Filter ─────────────────────────────────────
  // Educatieve onderwerpen die altijd toegestaan zijn
  const EDUCATIONAL_WHITELIST = [
    'seksuele voorlichting', 'sexuele voorlichting', 'seksualiteit',
    'puberteit', 'voortplanting', 'menstruatie', 'anticonceptie',
    'geslachtsorganen', 'geslachtsdelen', 'zwangerschap', 'geboorte',
    'drugs en samenleving', 'drugsbeleid', 'drugs en alcohol', 'verslaving',
    'alcohol en gezondheid', 'roken en gezondheid', 'roken & drugs',
    'ehbo', 'eerste hulp', 'reanimeren', 'pesten', 'grensoverschrijdend gedrag',
  ];

  // Expliciet ongepaste termen (niet de educatieve varianten)
  const BLOCKED_WORDS = [
    'porno', 'porn', 'xxx', 'onlyfans', 'fetish', 'bdsm',
    'orgasm', 'prostitu', 'verkracht', 'naaktfoto', 'sextape', 'sexting',
    'nazi', 'hitler', 'terrorist',
    'hack', 'wachtwoord', 'password', 'gokken',
    'cocaine', 'heroïne', 'mdma', 'xtc', 'wiet', 'joint', 'blowen',
    'fuck', 'shit', 'kut', 'hoer', 'slet', 'lul', 'kanker', 'tyfus',
    'nude', 'naked', 'kill', 'murder', 'bomb', 'weapon', 'gun',
    'wapen', 'bom', 'moord', 'suicide',
  ];

  const checkInput = (text) => {
    if (!text) return true;
    const lower = text.toLowerCase();
    // Whitelist gaat voor: educatieve onderwerpen altijd toegestaan
    if (EDUCATIONAL_WHITELIST.some(phrase => lower.includes(phrase))) return true;
    return !BLOCKED_WORDS.some(word => lower.includes(word));
  };

  const allInputs = [
    textbook?.bookName, textbook?.edition, textbook?.chapter,
    textbook?.topic, subject, topic
  ].filter(Boolean);

  for (const input of allInputs) {
    if (!checkInput(input)) {
      return json({ error: 'Ongepaste invoer gedetecteerd.', questions: [] }, 400);
    }
  }

  const levelDescriptions = {
    groep12: "groep 1-2 basisschool (4-6 jaar, kleuters) — UITSLUITEND rekenen (tellen tot 20, vormen herkennen, meer/minder/evenveel) of taal (klanken, rijmwoorden, eerste letters herkennen). Gebruik maximaal 6 woorden per vraag. Alledaagse voorbeelden met dieren of speelgoed. Absoluut geen rekensommen met meer dan 10. NOOIT: optellen/aftrekken boven 10, tafel, breuken, spelling, grammatica.",
    groep3: "groep 3-4 basisschool (6-8 jaar) — rekenen: optellen en aftrekken tot 100, tafels van 2, 5 en 10; taal: lezen, schrijven, eenvoudige spelling en woordenschat; natuur: dieren, planten en seizoenen op belevingsniveau. Korte zinnen, concrete situaties uit het dagelijks leven. NOOIT: breuken, procenten, vermenigvuldigen buiten de opgegeven tafels, lange deling, abstracte grammatica.",
    groep5: "groep 5-6 basisschool (9-11 jaar) — rekenen: getallen tot 10.000, vermenigvuldigen en delen, eenvoudige breuken (½, ¼), meten en wegen; taal: grammatica basis, woordenschat, begrijpend lezen; aardrijkskunde: Nederland en Europa (hoofdsteden, rivieren); geschiedenis: de tien tijdvakken globaal; natuur & techniek: ecosystemen, eenvoudige machines; engels: basiswoorden en korte zinnen. NOOIT: procenten, decimalen, wortels, machten, algebra, vergelijkingen oplossen.",
    groep7: "groep 7-8 basisschool (11-13 jaar) — rekenen: procenten, breuken, kommagetallen, oppervlakte en inhoud, eenvoudige statistiek (gemiddelde, modus); taal: grammatica (persoonsvorm, lijdend voorwerp, meewerkend voorwerp), spelling d/t, werkwoordvormen; aardrijkskunde: wereld en klimaatzones; geschiedenis: tijdvakken uitgebreider; natuur & techniek: sterrenstelsel, menselijk lichaam; engels: gesprekjes voeren, woordenschat breder. NOOIT: wortels, machten, algebra, vergelijkingen met letters, pythagoras, goniometrie — dat is middelbare school stof.",
    klas1: "klas 1-2 middelbare school / vmbo-t/havo/vwo (13-15 jaar) — wiskunde: eenvoudige vergelijkingen (ax+b=c), pythagoras, machten en wortels, meetkunde, statistiek; nederlands: stijlfiguren, zinsdelen, tekstsoorten; Engels/Duits/Frans: grammatica en teksten; aardrijkskunde en geschiedenis op VO-niveau. Duits en Frans mogen vanaf dit niveau. NOOIT: differentiëren, integreren, goniometrie, logaritmen — dat is bovenbouw.",
    "klas1-mavo": "klas 1-2 MAVO/VMBO-t (13-15 jaar) — onderbouw MAVO. Basisstof VO: eenvoudige vergelijkingen, meetkunde, nederlandstalige teksten, Engels basistaal. Concrete en toegankelijke vragen passend bij MAVO-niveau.",
    "klas1-havo": "klas 1-2 HAVO onderbouw (13-15 jaar) — vergelijkingen, pythagoras, statistiek, teksten analyseren. Iets abstracter dan MAVO, minder diepgaand dan VWO.",
    "klas1-vwo": "klas 1-2 VWO onderbouw (13-15 jaar) — vergelijkingen, pythagoras, meetkunde, statistiek; hogere taalvaardigheid en analytisch denkvermogen dan HAVO. Meer abstractie en redeneren vereist.",
    "klas1-gym": "klas 1-2 Gymnasium onderbouw (13-15 jaar) — VWO-niveau met extra klassieke talen. Naast reguliere VO-vakken ook Latijn en Grieks basis. Hoog taal- en analytisch niveau.",
    klas3: "klas 3-4 middelbare school / havo/vwo bovenbouw (15-17 jaar) — wiskunde: goniometrie, differentiëren, logaritmen, integralen; scheikunde, biologie, natuurkunde, economie, maatschappijleer op examenniveau. Abstracte concepten en formules zijn passend.",
    klas5: "klas 5 middelbare school HAVO/VWO (16-17 jaar) — HAVO: eindexamenstof, vragen op HAVO-examenniveau; VWO bovenbouw: verdieping en uitbreiding. Wiskunde A/B: differentiëren en integreren, statistiek, goniometrie, complexe getallen; exacte vakken op examenniveau. Hogere denkvaardigheden, analyseren, bewijzen en redeneren worden verwacht.",
    klas6: "klas 6 middelbare school VWO/Gymnasium (17-18 jaar) — eindexamenniveau VWO. Wiskunde B: geavanceerd differentiëren en integreren, vectoren, complexe getallen, ruimtemeetkunde. Gymnasium: ook Latijn en Grieks. Hoogste VO-niveau, vragen zijn vergelijkbaar met echte VWO-eindexamens. Maximale abstractie en redeneerdiepte.",
    "klas3-mavo": "klas 3-4 MAVO/VMBO-t (15-17 jaar) — eindexamenniveau MAVO. Wiskunde: basisalgebra, verbanden, statistiek; exacte vakken en maatschappijleer op MAVO-examenniveau. Concreet en toepassingsgericht, minder abstract dan HAVO/VWO.",
    "klas3-havo": "klas 3-4 HAVO bovenbouw (15-17 jaar) — HAVO examenstof. Wiskunde A/B onderbouw bovenbouw: goniometrie, differentiëren, statistiek; exacte vakken op HAVO-niveau. Abstracte concepten passend bij HAVO, niet zo diepgaand als VWO.",
    "klas3-vwo": "klas 3-4 VWO bovenbouw (15-17 jaar) — VWO examenstof. Wiskunde B: goniometrie, differentiëren, logaritmen, integralen; exacte vakken op VWO-niveau. Diepgaande redeneervaardigheden en abstractievermogen vereist.",
    "klas3-gym": "klas 3-4 Gymnasium bovenbouw (15-17 jaar) — VWO+ niveau met klassieke talen. Wiskunde en exacte vakken op VWO-niveau. Gymnasium-context: ook Latijn, Grieks, antieke cultuur. Hogere talige en analytische eisen dan regulier VWO.",
    "klas5-mavo": "klas 5 MAVO eindexamen (16-17 jaar) — eindexamenstof MAVO/VMBO-t. Vragen direct bruikbaar als examenvoorbereiding. Concreet, toepassingsgericht, geen VWO-abstractieniveau.",
    "klas5-havo": "klas 5 HAVO eindexamen (16-17 jaar) — eindexamenstof HAVO. Vragen op HAVO CE-niveau: redeneren, analyseren, toepassen. Wiskunde A/B: differentiëren, integreren, statistiek, kansen. Exacte vakken op HAVO-examenniveau.",
    "klas5-vwo": "klas 5 VWO bovenbouw (16-17 jaar) — VWO niveau, voorbereiding op eindexamen. Wiskunde B: geavanceerde analyse, goniometrie, ruimtemeetkunde. Vragen vergelijkbaar met VWO HAVO+1 jaar extra diepgang.",
    "klas5-gym": "klas 5 Gymnasium (16-17 jaar) — VWO+ met Latijn en Grieks. Wiskunde en exacte vakken op hoog VWO-niveau. Gymnasium-specifiek: klassieke teksten, antieke geschiedenis, retorica.",
    "klas6-vwo": "klas 6 VWO eindexamen (17-18 jaar) — eindexamenstof VWO. Vragen op VWO CE-niveau: hoogste abstractieniveau middelbaar onderwijs. Wiskunde B: complexe getallen, vectoren, geavanceerde analyse. Alle vakken op eindexamenniveau.",
    "klas6-gym": "klas 6 Gymnasium eindexamen (17-18 jaar) — VWO eindexamenniveau met Gymnasium-profiel. Naast alle VWO-vakken ook Latijn en/of Grieks op eindexamenniveau. Hoogste niveau middelbaar onderwijs.",
  };

  const subjectNames = {
    rekenen: "Rekenen / Wiskunde", taal: "Nederlandse Taal",
    aardrijkskunde: "Aardrijkskunde", geschiedenis: "Geschiedenis",
    natuur: "Natuur & Techniek", engels: "Engelse Taal",
    wiskunde: "Wiskunde", nederlands: "Nederlands",
    biologie: "Biologie", natuurkunde: "Natuurkunde",
    scheikunde: "Scheikunde", economie: "Economie", basisschool: "Basisschool",
    vrij: "Vrij onderwerp",
  };

  const subjectLabel = subjectNames[subject] || subject;
  const levelLabel = levelDescriptions[level] || level;

  let prompt;

  if (textbook && textbook.bookName) {
    prompt = `JE TAAK: Genereer ${count} quizvragen die EXACT aansluiten bij een specifiek schoolboek-hoofdstuk.

STAP 1 - ZOEK DE INHOUDSOPGAVE:
Zoek via web search naar de ECHTE inhoudsopgave van dit boek:
- Boek: ${textbook.bookName}
- ${textbook.edition ? `Deel/Editie: ${textbook.edition}` : ""}
- ${textbook.chapter ? `Hoofdstuk/Paragraaf: ${textbook.chapter}` : ""}
- Niveau: ${levelLabel}

Zoek op:
- "${textbook.bookName} ${textbook.edition || ""} inhoudsopgave"
- "${textbook.bookName} ${textbook.chapter || ""} onderwerpen"
- Site: noordhoff.nl, malmberg.nl, thiememeulenhoff.nl (uitgevers)
- Site: studeersnel.nl, scholieren.com (samenvattingen met hoofdstukindeling)
- Site: wiskunde.net, toets-mij.nl (uitwerkingen per hoofdstuk)

STAP 2 - BEPAAL HET EXACTE ONDERWERP:
Uit de gevonden inhoudsopgave: welke SPECIFIEKE onderwerpen worden behandeld in ${textbook.chapter || "dit hoofdstuk"}?
Noteer de exacte paragraaftitels en onderwerpen.

STAP 3 - ZOEK ECHTE TOETSVRAGEN:
Zoek nu naar echte toets- en examenvragen over deze SPECIFIEKE onderwerpen:
- "${textbook.bookName} ${textbook.chapter || ""} toets"
- "oefentoets ${subjectLabel} ${textbook.chapter || ""}"
- Zoek op examenblad.nl, wiskundeacademie.nl, toets-mij.nl

STAP 4 - GENEREER VRAGEN:
Maak ${count} vragen die PRECIES gaan over de onderwerpen uit de gevonden inhoudsopgave.

Antwoord ALLEEN met een JSON array:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Uitleg waarom dit het juiste antwoord is",
    "source": "Bron: bijv. 'Onderwerp uit H7: Meten - §7.2 Oppervlakte' of 'Gebaseerd op eindexamen havo 2023'",
    "svg": "<svg viewBox='0 0 300 200'>...</svg> of null als geen diagram nodig",
    "imageSearch": "Nederlandse Wikipedia-zoekterm als een foto/kaart helpt (bijv. 'Kalimantan', 'Fotosynthese', 'Hart menselijk lichaam') of null",
    "imageInExplanation": false
  }
]

REGELS:
- answer = index (0-3) van het juiste antwoord. CONTROLE: classificeer voor elke vraag eerst alle 4 opties los als "CORRECT" of "FOUT" met reden. Er moet PRECIES 1 correct zijn. Kopieer dan de tekst van die optie letterlijk en tel de positie (0–3) — dat is "answer". Niet gokken.
- source: vermeld ALTIJD het gevonden onderwerp uit de inhoudsopgave + eventuele externe bron
- Het antwoord MOET wiskundig/vakinhoudelijk correct zijn. Controleer dit!
- ANTWOORDLENGTE: alle vier opties moeten VERGELIJKBAAR lang zijn (± dezelfde woordenlengte). Het juiste antwoord mag NIET langer of uitgebreider zijn dan de foute opties. Leerlingen raden anders het juiste antwoord door simpelweg de langste optie te kiezen.
- SVG: teken een diagram bij vragen over grafieken, meetkunde, figuren etc. Gebruik viewBox="0 0 300 200", kleuren: #5b86b8, #8eaadb, #e0e6f0 (licht, voor dark theme), font-family="Arial". Zet null als geen diagram nodig.
- Minstens 40% van wiskunde-vragen moet een SVG hebben
- Geef ALLEEN de JSON array terug, geen markdown, geen backticks`;
  } else {
    const isVrijOnderwerp = subject === "vrij" && topic;
    // Als een specifiek onderwerp is opgegeven bij een vak, laat het onderwerp de vragen bepalen
    const hasCustomTopic = !!topic && !isVrijOnderwerp;

    const vakRegel = isVrijOnderwerp
      ? `- Onderwerp: ${topic}\n- Niveau (alleen voor moeilijkheidsgraad): ${levelLabel}\n\nSTAP 1 — ZOEK HET ONDERWERP OP:\nZoek via web search naar "${topic.trim().split(/[:—\n]/)[0].trim()}" om te begrijpen wat het is.\n- Wat is het? (bedrijf, persoon, plek, concept, gebeurtenis?)\n- Wat doet/deed het? Hoe werkt het?\n- Welke feiten, cijfers, namen, datums zijn relevant?\n\nSTAP 2 — MAAK DE VRAGEN:\nMaak ${count} kennisquizvragen UITSLUITEND over "${topic.trim().split(/[:—\n]/)[0].trim()}" op basis van wat je hebt gevonden.\n- GEEN rekensommen tenzij het onderwerp expliciet over rekenen gaat\n- Vragen over feiten, processen, begrippen, geschiedenis of weetjes van dit specifieke onderwerp\n- Gebruik de gevonden informatie als basis voor correcte antwoorden`
      : hasCustomTopic
        ? `- Onderwerp: ${topic}\n- Vak-context: ${subjectLabel} (gebruik dit alleen als het past bij het onderwerp)\n- Niveau (alleen voor moeilijkheid): ${levelLabel}\n\nBELANGRIJK: ALLE vragen moeten gaan over "${topic}". Het onderwerp is leidend — niet het vak. Maak kennisquizvragen over feiten, begrippen, geschiedenis of weetjes over "${topic}". Gebruik de vak-context alleen als die logisch past. NIET automatisch ${subjectLabel.toLowerCase()}-vragen maken als het onderwerp er niets mee te maken heeft.`
        : `- Vak: ${subjectLabel}\n- Niveau: ${levelLabel}`;

    prompt = `Genereer ${count} quizvragen voor:
${vakRegel}

Antwoord ALLEEN met een JSON array:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Uitleg waarom dit het juiste antwoord is (1-2 zinnen)",
    "svg": "<svg viewBox='0 0 300 200'>...</svg> of null",
    "imageSearch": "Wikipedia-zoekterm of null",
    "imageInExplanation": false
  }
]

Regels:
- answer = index (0-3) van het juiste antwoord
- Maak de vragen gevarieerd en leerzaam, passend bij het niveau: ${levelLabel}
${isVrijOnderwerp || hasCustomTopic ? `- Het niveau bepaalt alleen de moeilijkheidsgraad van de taal en vragen — NIET het soort vragen. Maak geen reken- of taalsommen tenzij het onderwerp daar expliciet om vraagt.` : `- Voor groep 1-2 (kleuters): tellen tot 20, rijmen, letters herkennen. NOOIT sommen boven 10, NOOIT breuken of abstracte begrippen.
- Voor groep 3-4: optellen/aftrekken tot 100, tafels van 2/5/10. NOOIT breuken, procenten, lange deling of wortels.
- Voor groep 5-6: eenvoudige breuken (½, ¼), getallen tot 10.000, meten. NOOIT procenten, decimalen, wortels, machten of algebra.
- Voor groep 7-8: procenten, breuken, kommagetallen, oppervlakte. NOOIT wortels, machten, algebra met letters, vergelijkingen oplossen, pythagoras of goniometrie — dat is VO-stof.
- Voor VO klas 1-2: vergelijkingen, pythagoras, machten en wortels, meetkunde. Duits en Frans beschikbaar. NOOIT differentiëren of goniometrie.
- Voor VO klas 3-4: goniometrie, differentiëren, logaritmen, examenstof. Alle exacte vakken beschikbaar.
- Voor VO klas 5 HAVO: eindexamenstof HAVO, vragen op CE-niveau. Wiskunde A/B differentiëren, integreren, statistiek.
- Voor VO klas 5 VWO/Gymnasium: hogere abstractie dan HAVO, VWO-examenstof, geavanceerde wiskunde B.
- Voor VO klas 6 VWO/Gymnasium: eindexamenniveau VWO, complexe getallen, vectoren, alle vakken op eindexamen CE-niveau.`}
- Foute antwoorden moeten veelgemaakte fouten zijn
- ANTWOORDLENGTE: alle vier opties moeten VERGELIJKBAAR lang zijn (± dezelfde woordenlengte). Het juiste antwoord mag NIET langer of uitgebreider zijn dan de foute opties. Leerlingen raden anders het juiste antwoord door de langste optie te kiezen.
- SVG bij meetkunde/grafieken, viewBox="0 0 300 200", kleuren: #00c853, #69f0ae, #e0e6f0. Zet null als geen diagram nodig
- imageSearch: geef een Nederlandse Wikipedia-zoekterm mee als een foto of kaart de vraag verduidelijkt. Gebruik dit bij: landen/eilanden/steden (bijv. "Kalimantan"), historische personen (bijv. "Anne Frank"), dieren/planten (bijv. "Blauwe vinvis"), vlaggen (bijv. "Vlag van Brazilië"), gebouwen/monumenten. Gebruik null als geen afbeelding de vraag verbetert.
- imageInExplanation: zet dit op true als het Wikipedia-plaatje het antwoord zou verraden als leerlingen het VOOR het antwoorden zien. Dit geldt voor: formules (bijv. a²+b²=c²), berekeningen (bijv. 3/4=0,75), grafieken die de oplossing tonen, of diagrammen die het juiste antwoord direct zichtbaar maken. Bij twijfel: true. Bij foto's van personen, dieren, steden, kaarten: false.
- Voor meetkundevragen met specifieke maten (bijv. oppervlakte van een rechthoek van 8×6 cm): gebruik GEEN imageSearch maar teken een SVG met de maten erop — zo ziet de leerling de figuur zonder dat Wikipedia een gelabelde afbeelding toont met dezelfde maten als de vraag.
- Vragen in het Nederlands (behalve bij Engels/Frans/Duits: vragen mogen in die taal, uitleg in Nederlands)

KWALITEITSCONTROLE — doe dit STAP VOOR STAP voor elke vraag VOORDAT je de JSON schrijft:
1. ELKE OPTIE AFZONDERLIJK CLASSIFICEREN: voor optie 0, 1, 2 én 3 — bepaal apart "CORRECT" of "FOUT" met een korte reden. Doe dit ZELFS als je denkt het juiste antwoord al te weten. Voorbeeld voor "Welke zin klopt?":
   - Optie 0 "Hij slaap goed." — FOUT, mist persoonsvorm-t bij hij.
   - Optie 1 "Hij slaapt goed." — CORRECT, stam+t.
   - Optie 2 "Hij slaapt goeds." — FOUT, "goeds" bestaat niet.
   - Optie 3 "Hij slaaps goed." — FOUT, -s is geen NL-vervoeging.
   Tel daarna: er moet PRECIES 1 optie CORRECT zijn. Zo niet → herschrijf de vraag.
2. ANSWER-INDEX BEPALEN: kopieer de tekst van de CORRECT-optie letterlijk en zoek de positie (0–3) op in je options-array. Zet die positie in "answer". Niet gokken — letterlijk de index tellen.
3. Klopt de uitleg feitelijk? De uitleg moet de REDEN geven, niet alleen het antwoord herhalen.
4. EXTRA STRENG — rangordeningen en statistieken (grootste, langste, meeste, hoogste, diepste, rijkste, hoofdstad, vlag, bevolking, oppervlakte): verifieer elk getal en elke rangorde met zekerheid. Controleer of het juiste antwoord ook echt de #1 of #2 is in de lijst, NIET per ongeluk #3 of #4. Twijfel = sla deze vraag over en maak een andere.
5. EXTRA STRENG — Aardrijkskunde en Geschiedenis: dubbelcheck landen, grenzen, hoofdsteden, datums, namen van personen. Fouten hierin worden direct opgemerkt door leerlingen en docenten.
6. Speciale regels voor Nederlandse taal:
   - d/t spelling: stam + t bij hij/zij/het tegenwoordige tijd (hij wordt, hij fietst). "Geen t na enkelvoud" is FOUT — het is juist WEL een t na hij/zij/het.
   - Verleden tijd zwak werkwoord: eindigt stam op t/k/f/s/ch/p (het kofschip) → -te/-ten, anders -de/-den.
   - Persoonsvorm: het werkwoord dat vervoegd is naar persoon en tijd.
   - "Welke zin klopt?"-vragen: pas stap 1 hierboven extra strikt toe — leerlingen kunnen niet "ongeveer" goed antwoorden bij grammatica.
7. Speciale regels voor rekenen: controleer alle berekeningen nogmaals.
8. Als je twijfelt over WELK antwoord correct is: maak een ANDERE vraag waarover je 100% zeker bent. Liever een makkelijkere zekere vraag dan een twijfelachtige moeilijke vraag.
9. ANTWOORDLENGTE CHECK: tel het aantal woorden van elke optie. Als het juiste antwoord meer dan 3 woorden langer is dan de kortste foute optie → herschrijf de foute opties zodat ze even lang zijn. Leerlingen mogen NIET kunnen gokken op basis van lengte.

- Geef ALLEEN de JSON array, geen markdown, geen backticks`;
  }

  const useTextbookSearch = !!(textbook && textbook.bookName);
  // Vrij onderwerp met eigen topic → web search zodat Claude het onderwerp online kan opzoeken
  const useTopicSearch = !!(subject === "vrij" && topic && topic.trim().length > 0);
  const useWebSearch = useTextbookSearch || useTopicSearch;

  const requestBody = {
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4000,
      system: useTextbookSearch
        ? "Je bent een Nederlandse docent die quizvragen zoekt voor schoolkinderen. Je MOET web search gebruiken om eerst de ECHTE inhoudsopgave van het schoolboek te vinden voordat je vragen maakt. Vragen MOETEN aansluiten bij de werkelijke lesstof van het opgegeven hoofdstuk. Je genereert UITSLUITEND schoolvragen. De veiligheid van kinderen is je hoogste prioriteit."
        : useTopicSearch
        ? "Je bent een Nederlandse schooldocent die quizvragen maakt voor kinderen over een specifiek onderwerp. Gebruik web search om het onderwerp op te zoeken zodat je accurate, feitelijk correcte vragen kunt stellen. Geef UITSLUITEND de JSON array terug, geen andere tekst. De veiligheid van kinderen is je hoogste prioriteit."
        : "Je bent een Nederlandse schooldocent die quizvragen maakt voor kinderen. Genereer gevarieerde, leerzame vragen die passen bij het opgegeven vak en niveau. BELANGRIJK: controleer elk antwoord en elke uitleg op feitelijke juistheid voordat je de JSON teruggeeft. Een fout antwoord of foutieve uitleg is erger dan geen vraag. De veiligheid en correctheid voor kinderen is je hoogste prioriteit. Je genereert UITSLUITEND schoolvragen.",
      messages: [{ role: "user", content: prompt }],
    };

    if (useWebSearch) {
      requestBody.tools = [{ type: "web_search_20250305", name: "web_search" }];
    }

  const callAnthropic = async (body) => {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    if (!resp.ok) {
      const msg = data?.error?.message || data?.error || `HTTP ${resp.status}`;
      throw new Error(msg);
    }
    return data;
  };

  const parseQuestions = (data) => {
    let text = "";
    for (const block of (data.content || [])) {
      if (block.type === "text" && block.text) text += block.text;
    }
    if (!text) throw new Error("Geen tekst ontvangen van de AI");
    const cleaned = text.replace(/```json|```/g, "").trim();
    const jsonMatch = cleaned.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error("AI gaf geen geldige JSON terug");
    return JSON.parse(jsonMatch[0]);
  };

  const shuffleArr = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  try {
    let data;
    try {
      data = await callAnthropic(requestBody);
    } catch (firstErr) {
      // Fallback: als web search of Sonnet faalt → probeer Haiku zonder web search
      if (useWebSearch) {
        console.warn("Web search mislukt, probeer zonder:", firstErr.message);
        const fallbackBody = { ...requestBody, model: "claude-haiku-4-5-20251001", tools: undefined };
        delete fallbackBody.tools;
        data = await callAnthropic(fallbackBody);
      } else {
        throw firstErr;
      }
    }

    const questions = parseQuestions(data);

    for (const q of questions) {
      if (Array.isArray(q.options) && typeof q.answer === 'number' && q.answer >= 0 && q.answer < q.options.length) {
        const correct = q.options[q.answer];
        q.options = shuffleArr(q.options);
        q.answer = q.options.indexOf(correct);
      }
    }

    return json({ questions });
  } catch (error) {
    console.error("Question generation error:", error.message);
    return json({ error: error.message || "Kon geen vragen genereren" }, 500);
  }
}
