export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { subject, level, count = 5, textbook, topic } = req.body;

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
      return res.status(400).json({
        error: 'Ongepaste invoer gedetecteerd.',
        questions: []
      });
    }
  }

  const levelDescriptions = {
    groep12: "groep 1-2 basisschool (4-6 jaar, kleuters) — UITSLUITEND rekenen (tellen tot 20, vormen herkennen, meer/minder/evenveel) of taal (klanken, rijmwoorden, eerste letters herkennen). Gebruik maximaal 6 woorden per vraag. Alledaagse voorbeelden met dieren of speelgoed. Absoluut geen rekensommen met meer dan 10. NOOIT: optellen/aftrekken boven 10, tafel, breuken, spelling, grammatica.",
    groep3: "groep 3-4 basisschool (6-8 jaar) — rekenen: optellen en aftrekken tot 100, tafels van 2, 5 en 10; taal: lezen, schrijven, eenvoudige spelling en woordenschat; natuur: dieren, planten en seizoenen op belevingsniveau. Korte zinnen, concrete situaties uit het dagelijks leven. NOOIT: breuken, procenten, vermenigvuldigen buiten de opgegeven tafels, lange deling, abstracte grammatica.",
    groep5: "groep 5-6 basisschool (9-11 jaar) — rekenen: getallen tot 10.000, vermenigvuldigen en delen, eenvoudige breuken (½, ¼), meten en wegen; taal: grammatica basis, woordenschat, begrijpend lezen; aardrijkskunde: Nederland en Europa (hoofdsteden, rivieren); geschiedenis: de tien tijdvakken globaal; natuur & techniek: ecosystemen, eenvoudige machines; engels: basiswoorden en korte zinnen. NOOIT: procenten, decimalen, wortels, machten, algebra, vergelijkingen oplossen.",
    groep7: "groep 7-8 basisschool (11-13 jaar) — rekenen: procenten, breuken, kommagetallen, oppervlakte en inhoud, eenvoudige statistiek (gemiddelde, modus); taal: grammatica (persoonsvorm, lijdend voorwerp, meewerkend voorwerp), spelling d/t, werkwoordvormen; aardrijkskunde: wereld en klimaatzones; geschiedenis: tijdvakken uitgebreider; natuur & techniek: sterrenstelsel, menselijk lichaam; engels: gesprekjes voeren, woordenschat breder. NOOIT: wortels, machten, algebra, vergelijkingen met letters, pythagoras, goniometrie — dat is middelbare school stof.",
    klas1: "klas 1-2 middelbare school / vmbo-t/havo/vwo (13-15 jaar) — wiskunde: eenvoudige vergelijkingen (ax+b=c), pythagoras, machten en wortels, meetkunde, statistiek; nederlands: stijlfiguren, zinsdelen, tekstsoorten; Engels/Duits/Frans: grammatica en teksten; aardrijkskunde en geschiedenis op VO-niveau. Duits en Frans mogen vanaf dit niveau. NOOIT: differentiëren, integreren, goniometrie, logaritmen — dat is bovenbouw.",
    klas3: "klas 3-4 middelbare school / havo/vwo bovenbouw (15-17 jaar) — wiskunde: goniometrie, differentiëren, logaritmen, integralen; scheikunde, biologie, natuurkunde, economie, maatschappijleer op examenniveau. Abstracte concepten en formules zijn passend.",
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
    "svg": "<svg viewBox='0 0 300 200'>...</svg> of null als geen diagram nodig"
  }
]

REGELS:
- answer = index (0-3) van het juiste antwoord
- source: vermeld ALTIJD het gevonden onderwerp uit de inhoudsopgave + eventuele externe bron
- Het antwoord MOET wiskundig/vakinhoudelijk correct zijn. Controleer dit!
- SVG: teken een diagram bij vragen over grafieken, meetkunde, figuren etc. Gebruik viewBox="0 0 300 200", kleuren: #5b86b8, #8eaadb, #e0e6f0 (licht, voor dark theme), font-family="Arial". Zet null als geen diagram nodig.
- Minstens 40% van wiskunde-vragen moet een SVG hebben
- Geef ALLEEN de JSON array terug, geen markdown, geen backticks`;
  } else {
    const topicLine = topic ? `\n- Onderwerp: ${topic}\n\nBELANGRIJK: ALLE vragen moeten gaan over "${topic}". Maak de vragen leerzaam en interessant over dit specifieke onderwerp.` : "";

    prompt = `Genereer ${count} quizvragen voor:
- Vak: ${subjectLabel}
- Niveau: ${levelLabel}${topicLine}

Antwoord ALLEEN met een JSON array:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Uitleg waarom dit het juiste antwoord is (1-2 zinnen)",
    "svg": "<svg viewBox='0 0 300 200'>...</svg> of null"
  }
]

Regels:
- answer = index (0-3) van het juiste antwoord
- Maak de vragen gevarieerd en leerzaam, STRIKT passend bij het niveau: ${levelLabel}
- Voor groep 1-2 (kleuters): tellen tot 20, rijmen, letters herkennen. NOOIT sommen boven 10, NOOIT breuken of abstracte begrippen.
- Voor groep 3-4: optellen/aftrekken tot 100, tafels van 2/5/10. NOOIT breuken, procenten, lange deling of wortels.
- Voor groep 5-6: eenvoudige breuken (½, ¼), getallen tot 10.000, meten. NOOIT procenten, decimalen, wortels, machten of algebra.
- Voor groep 7-8: procenten, breuken, kommagetallen, oppervlakte. NOOIT wortels, machten, algebra met letters, vergelijkingen oplossen, pythagoras of goniometrie — dat is VO-stof.
- Voor VO klas 1-2: vergelijkingen, pythagoras, machten en wortels, meetkunde. Duits en Frans beschikbaar. NOOIT differentiëren of goniometrie.
- Voor VO klas 3-4: goniometrie, differentiëren, logaritmen, examenstof. Alle exacte vakken beschikbaar.
- Foute antwoorden moeten veelgemaakte fouten zijn
- SVG bij meetkunde/grafieken, viewBox="0 0 300 200", kleuren: #00c853, #69f0ae, #e0e6f0. Zet null als geen diagram nodig
- Vragen in het Nederlands (behalve bij Engels/Frans/Duits: vragen mogen in die taal, uitleg in Nederlands)
- Geef ALLEEN de JSON array, geen markdown, geen backticks`;
  }

  const useWebSearch = !!(textbook && textbook.bookName);

  try {
    const requestBody = {
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      system: useWebSearch
        ? "Je bent een Nederlandse docent die quizvragen zoekt voor schoolkinderen. Je MOET web search gebruiken om eerst de ECHTE inhoudsopgave van het schoolboek te vinden voordat je vragen maakt. Vragen MOETEN aansluiten bij de werkelijke lesstof van het opgegeven hoofdstuk. Je genereert UITSLUITEND schoolvragen. De veiligheid van kinderen is je hoogste prioriteit."
        : "Je bent een Nederlandse schooldocent die quizvragen maakt voor kinderen. Genereer gevarieerde, leerzame vragen die passen bij het opgegeven vak en niveau. De veiligheid van kinderen is je hoogste prioriteit. Je genereert UITSLUITEND schoolvragen.",
      messages: [{ role: "user", content: prompt }],
    };

    if (useWebSearch) {
      requestBody.tools = [{ type: "web_search_20250305", name: "web_search" }];
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    let text = "";
    if (data.content) {
      for (const block of data.content) {
        if (block.type === "text" && block.text) {
          text += block.text;
        }
      }
    }

    if (!text) {
      throw new Error("No text in response");
    }

    const cleaned = text.replace(/```json|```/g, "").trim();
    const jsonMatch = cleaned.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error("No JSON array found");
    }

    const questions = JSON.parse(jsonMatch[0]);
    return res.status(200).json({ questions });
  } catch (error) {
    console.error("Question generation error:", error);
    return res.status(500).json({ error: "Failed to generate questions" });
  }
}
