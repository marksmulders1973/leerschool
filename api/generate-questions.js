export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { subject, level, count = 5, textbook } = req.body;

  // ─── Content Safety Filter ─────────────────────────────────────
  const BLOCKED_WORDS = [
    'sex', 'porno', 'porn', 'drugs', 'wapen', 'bom', 'moord', 'dood', 'suicide',
    'naak', 'naakt', 'penis', 'vagina', 'borst', 'orgasm', 'prostitu', 'verkracht',
    'nazi', 'hitler', 'terrorist', 'hack', 'wachtwoord', 'password', 'gokken',
    'alcohol', 'cocaine', 'heroïne', 'mdma', 'xtc', 'wiet', 'joint',
    'fuck', 'shit', 'kut', 'hoer', 'slet', 'lul', 'kanker', 'tyfus',
    'naked', 'nude', 'kill', 'murder', 'bomb', 'weapon', 'gun',
    'xxx', 'onlyfans', 'tinder', 'dating', 'fetish', 'bdsm',
  ];

  const checkInput = (text) => {
    if (!text) return true;
    const lower = text.toLowerCase();
    return !BLOCKED_WORDS.some(word => lower.includes(word));
  };

  const allInputs = [
    textbook?.bookName, textbook?.edition, textbook?.chapter,
    textbook?.topic, subject
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
    groep5: "groep 5-6 basisschool (10-11 jaar)",
    groep7: "groep 7-8 basisschool (12-13 jaar)",
    klas1: "klas 1-2 middelbare school / vmbo-t/havo/vwo (13-15 jaar)",
    klas3: "klas 3-4 middelbare school / havo/vwo bovenbouw (15-17 jaar)",
  };

  const subjectNames = {
    rekenen: "Rekenen / Wiskunde", taal: "Nederlandse Taal",
    aardrijkskunde: "Aardrijkskunde", geschiedenis: "Geschiedenis",
    natuur: "Natuur & Techniek", engels: "Engelse Taal",
    wiskunde: "Wiskunde", nederlands: "Nederlands",
    biologie: "Biologie", natuurkunde: "Natuurkunde",
    scheikunde: "Scheikunde", economie: "Economie", basisschool: "Basisschool",
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
    prompt = `Zoek ECHTE toets- en examenvragen voor:
- Vak: ${subjectLabel}
- Niveau: ${levelLabel}
- Aantal: ${count}

STAP 1: Zoek via web search naar echte examenvragen op examenblad.nl, alleexamens.nl, wiskundeacademie.nl, havovwo.nl.
STAP 2: Maak vragen gebaseerd op wat je vindt. Vermeld de bron.

Antwoord ALLEEN met een JSON array:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Uitleg waarom dit het juiste antwoord is",
    "source": "Bron",
    "svg": "<svg>...</svg> of null"
  }
]

Regels:
- answer = index (0-3)
- SVG bij meetkunde/grafieken, viewBox="0 0 300 200", kleuren: #5b86b8, #8eaadb, #e0e6f0
- Geef ALLEEN de JSON array, geen markdown, geen backticks`;
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        system: "Je bent een Nederlandse docent die quizvragen zoekt voor schoolkinderen. Je MOET web search gebruiken om eerst de ECHTE inhoudsopgave van het schoolboek te vinden voordat je vragen maakt. Vragen MOETEN aansluiten bij de werkelijke lesstof van het opgegeven hoofdstuk. Je genereert UITSLUITEND schoolvragen. De veiligheid van kinderen is je hoogste prioriteit.",
        tools: [
          {
            type: "web_search_20250305",
            name: "web_search"
          }
        ],
        messages: [{ role: "user", content: prompt }],
      }),
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
