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
    rekenen: "Rekenen / Wiskunde",
    taal: "Nederlandse Taal",
    aardrijkskunde: "Aardrijkskunde",
    geschiedenis: "Geschiedenis",
    natuur: "Natuur & Techniek",
    engels: "Engelse Taal",
    wiskunde: "Wiskunde",
    nederlands: "Nederlands",
    biologie: "Biologie",
    natuurkunde: "Natuurkunde",
    scheikunde: "Scheikunde",
    economie: "Economie",
    basisschool: "Basisschool",
  };

  const subjectLabel = subjectNames[subject] || subject;
  const levelLabel = levelDescriptions[level] || level;

  let prompt;

  if (textbook && textbook.bookName) {
    prompt = `OPDRACHT: Zoek ECHTE toets- en examenvragen voor het volgende vak en niveau. Gebruik web search om bestaande vragen te vinden.

ZOEK NAAR:
- Methode/Boek: ${textbook.bookName}
- ${textbook.edition ? `Editie/Deel: ${textbook.edition}` : ""}
- ${textbook.chapter ? `Hoofdstuk/Paragraaf: ${textbook.chapter}` : ""}
- Vak: ${subjectLabel}
- Niveau: ${levelLabel}

ZOEKSTRATEGIE:
1. Zoek eerst naar echte examenvragen en oefentoetsen voor dit specifieke vak en niveau op sites zoals:
   - examenblad.nl (officiële eindexamens)
   - alleexamens.nl
   - wiskundeacademie.nl / biologiepagina.nl / scheikundeacademie.nl
   - havovwo.nl
   - jouwexamen.nl
   - kfrexamen.nl
2. Zoek ook naar "${textbook.bookName} ${textbook.chapter || ""} oefentoets" of "toetsvragen"
3. Zoek naar het ONDERWERP dat bij dit hoofdstuk hoort en vind echte oefenvragen daarover

BELANGRIJK:
- Baseer je vragen ALLEEN op echte bronnen die je vindt via web search
- Als je exacte examenvragen vindt, gebruik die (herformuleer ze indien nodig naar multiple choice)
- Als je geen exacte vragen vindt, zoek dan het onderwerp op en maak vragen gebaseerd op de echte lesstof die je vindt
- Vermeld bij elke vraag de bron in het "source" veld
- ${count} vragen genereren

Antwoord ALLEEN met een JSON array:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Uitleg waarom dit het juiste antwoord is (1-2 zinnen)",
    "source": "Bron: bijv. 'Eindexamen havo 2023' of 'wiskundeacademie.nl' of 'Gebaseerd op curriculum'",
    "svg": null
  }
]

REGELS:
- answer = index (0-3) van het juiste antwoord
- Foute antwoorden moeten veelgemaakte fouten zijn
- SVG: alleen als een diagram echt nodig is (meetkunde etc.), compact: viewBox="0 0 300 200", kleuren: #FF6B35, #4ECDC4, #2d3436
- source: ALTIJD vermelden waar de vraag vandaan komt
- Geef ALLEEN de JSON array terug, geen markdown, geen backticks`;
  } else {
    prompt = `OPDRACHT: Zoek ECHTE toets- en examenvragen voor:
- Vak: ${subjectLabel}
- Niveau: ${levelLabel}
- Aantal: ${count} vragen

Zoek via web search naar echte examenvragen en oefentoetsen op sites als examenblad.nl, alleexamens.nl, wiskundeacademie.nl, havovwo.nl. 

Baseer je vragen ALLEEN op echte bronnen. Vermeld de bron bij elke vraag.

Antwoord ALLEEN met een JSON array:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Uitleg waarom dit het juiste antwoord is",
    "source": "Bron: bijv. 'Eindexamen vwo 2024' of 'Gebaseerd op curriculum'",
    "svg": null
  }
]

Regels:
- answer = index (0-3) van juiste antwoord
- Foute antwoorden = veelgemaakte fouten
- Vragen in het Nederlands (behalve Engels)
- SVG alleen bij meetkunde/diagrammen
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
        system: "Je bent een Nederlandse docent die quizvragen zoekt voor schoolkinderen. Je gebruikt web search om ECHTE examen- en toetsvragen te vinden. Je genereert UITSLUITEND vragen over schoolvakken. Je weigert ALTIJD ongepaste onderwerpen. De veiligheid van kinderen is je hoogste prioriteit.",
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
    
    // Extract text from response (may have multiple content blocks due to tool use)
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

    // Parse JSON from response
    const cleaned = text.replace(/```json|```/g, "").trim();
    
    // Find the JSON array in the response
    const jsonMatch = cleaned.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error("No JSON array found in response");
    }
    
    const questions = JSON.parse(jsonMatch[0]);
    
    return res.status(200).json({ questions });
  } catch (error) {
    console.error("Question generation error:", error);
    return res.status(500).json({ error: "Failed to generate questions" });
  }
}
