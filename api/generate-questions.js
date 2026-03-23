export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { subject, level, count = 5, textbook } = req.body;

  const levelDescriptions = {
    groep5: "groep 5-6 basisschool (10-11 jaar), makkelijke vragen",
    groep7: "groep 7-8 basisschool (12-13 jaar), gemiddelde vragen",
    klas1: "klas 1-2 middelbare school (13-15 jaar), uitdagende vragen",
    klas3: "klas 3-4 middelbare school (15-17 jaar), moeilijke vragen",
  };

  const subjectNames = {
    rekenen: "Rekenen / Wiskunde",
    taal: "Nederlandse Taal",
    aardrijkskunde: "Aardrijkskunde",
    geschiedenis: "Geschiedenis",
    natuur: "Natuur & Techniek",
    engels: "Engelse Taal",
  };

  let prompt;

  if (textbook && textbook.bookName) {
    // Textbook-specific question generation
    prompt = `Je bent een ervaren Nederlandse docent. Genereer ${count} quizvragen gebaseerd op een specifiek schoolboek.

SCHOOLBOEK INFORMATIE:
- Methode/Boek: ${textbook.bookName}
${textbook.edition ? `- Editie/Deel: ${textbook.edition}` : ""}
${textbook.chapter ? `- Hoofdstuk/Paragraaf: ${textbook.chapter}` : ""}
${textbook.topic ? `- Onderwerp: ${textbook.topic}` : ""}
${textbook.level ? `- Niveau: ${levelDescriptions[textbook.level] || textbook.level}` : ""}

JE TAAK:
Je bent een ervaren Nederlandse docent die deze methode jarenlang heeft gebruikt. Je kent de opbouw, terminologie en leerdoelen van dit boek.

STRIKTE REGELS VOOR DE VRAGEN:
1. De vragen MOETEN gaan over de exacte leerstof van het genoemde hoofdstuk/paragraaf. NIET over andere onderwerpen.
2. Gebruik PRECIES dezelfde terminologie, notatie en methode als het boek. Bijvoorbeeld:
   - Getal & Ruimte gebruikt andere notaties dan Moderne Wiskunde
   - Stepping Stones gebruikt andere grammatica-termen dan All Right!
   - Elke methode heeft een eigen aanpak en volgorde
3. Houd je aan het niveau: vraag ALLEEN dingen die leerlingen op dit punt in het boek al geleerd hebben.
4. De vragen moeten lijken op de oefeningen en toetsvragen uit het boek zelf.
5. Maak een mix van:
   - Kennisvragen (definities, feiten)
   - Toepassingsvragen (berekeningen, voorbeelden)
   - Inzichtvragen (waarom, verklaar)
6. De foute antwoorden moeten veelgemaakte fouten zijn die leerlingen echt maken.
7. De uitleg moet verwijzen naar de theorie/regels uit dit specifieke hoofdstuk.

Als je dit specifieke hoofdstuk niet met 100% zekerheid kent, genereer dan vragen die passen bij het onderwerp dat standaard in dit hoofdstuk behandeld wordt volgens het Nederlandse curriculum voor dit niveau. Verzin NOOIT vragen over onderwerpen die niet bij dit hoofdstuk horen.

Antwoord ALLEEN met een JSON array, geen andere tekst:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Uitleg (1-2 zinnen) die verwijst naar de theorie uit dit hoofdstuk. Bijv: 'Volgens de regels uit §6.2 geldt dat...'"
  }
]

Geef ALLEEN de JSON array terug, geen markdown, geen backticks`;
  } else {
    prompt = `Genereer ${count} quizvragen voor het vak "${subjectNames[subject] || subject}" op niveau "${levelDescriptions[level] || level}".

Antwoord ALLEEN met een JSON array, geen andere tekst:
[
  {
    "q": "De vraag",
    "options": ["optie A", "optie B", "optie C", "optie D"],
    "answer": 0,
    "explanation": "Korte uitleg waarom dit het juiste antwoord is (1-2 zinnen, helder en leerzaam)"
  }
]

Regels:
- "answer" is de index (0-3) van het juiste antwoord in de options array
- Maak de vragen gevarieerd en leerzaam
- De foute antwoorden moeten plausibel zijn
- De uitleg moet kort en begrijpelijk zijn voor het genoemde niveau
- Vragen moeten in het Nederlands zijn (behalve bij Engels)
- Bij Engels mogen de vragen in het Engels zijn maar de uitleg in het Nederlands
- Geef ALLEEN de JSON array terug, geen markdown, geen backticks`;
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
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || "";
    
    const cleaned = text.replace(/```json|```/g, "").trim();
    const questions = JSON.parse(cleaned);
    
    return res.status(200).json({ questions });
  } catch (error) {
    console.error("AI generation error:", error);
    return res.status(500).json({ error: "Failed to generate questions" });
  }
}
