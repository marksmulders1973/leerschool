// AI-tutor endpoint — leerling kan vragen stellen over de huidige stap.
// Context (pad-titel, stap-titel, uitleg, optionele check + fout-poging) wordt
// als system-prompt meegegeven. Antwoord is altijd kort en didactisch:
// stuurt richting begrip, geeft niet zomaar het juiste antwoord weg.

export const config = { runtime: "edge", maxDuration: 30 };

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Light content-filter — voorkomt off-topic / ongepaste prompts.
// Leerkwartier-publiek is 8-18 dus we zijn streng.
const BLOCKED = [
  "porno", "porn", "xxx", "fuck", "shit", "kanker",
  "wachtwoord", "password", "credit card", "creditcard",
  "hack", "exploit", "kill", "murder", "moord", "wapen",
  "naked", "nude", "sex video",
];

function isClean(text) {
  if (!text) return true;
  const lower = String(text).toLowerCase();
  return !BLOCKED.some((w) => lower.includes(w));
}

function buildSystemPrompt(ctx = {}) {
  const lines = [];
  lines.push(
    "Je bent een vriendelijke wiskunde- en taal-tutor voor Leerkwartier, " +
      "een Nederlandse leerapp voor leerlingen van 8 tot 18 jaar. " +
      "De leerling werkt nu aan een specifieke uitleg-stap. Help met BEGRIP, " +
      "niet door het antwoord weg te geven."
  );
  lines.push("");
  lines.push("REGELS:");
  lines.push(
    "- Antwoord in maximaal 3-4 zinnen, in eenvoudig Nederlands. " +
      "Geen lange opsommingen tenzij de leerling daarom vraagt."
  );
  lines.push(
    "- Bij een fout antwoord: leg uit WAAROM het fout is en geef een denkprikkel " +
      "of vraag terug, geen kant-en-klare oplossing."
  );
  lines.push(
    "- Bij 'leg het anders uit': zoek een nieuw voorbeeld of vergelijking, " +
      "niet dezelfde uitleg in andere woorden."
  );
  lines.push(
    "- Als de vraag niets met de huidige stof te maken heeft: stuur vriendelijk " +
      "terug naar de les. ('Goede vraag, maar laten we eerst dit afmaken.')"
  );
  lines.push(
    "- Geen emoji-spam — hooguit één per antwoord, en alleen als het echt past."
  );
  lines.push("- Spreek de leerling met je/jij aan, niet 'u'.");
  lines.push("");
  lines.push("HUIDIGE STAP-CONTEXT:");
  if (ctx.pathTitle) lines.push(`Onderwerp: ${ctx.pathTitle}`);
  if (ctx.stepTitle) lines.push(`Stap: ${ctx.stepTitle}`);
  if (ctx.stepExplanation) {
    const explShort = String(ctx.stepExplanation).slice(0, 1800);
    lines.push("Uitleg die de leerling net heeft gelezen:");
    lines.push(explShort);
  }
  if (ctx.currentCheckQuestion) {
    lines.push("");
    lines.push(`Check-vraag: ${ctx.currentCheckQuestion}`);
    if (Array.isArray(ctx.checkOptions) && ctx.checkOptions.length) {
      lines.push(`Opties: ${ctx.checkOptions.join(" | ")}`);
    }
    if (typeof ctx.correctOption === "string") {
      lines.push(`Juiste antwoord (NIET letterlijk geven): ${ctx.correctOption}`);
    }
  }
  if (ctx.lastWrongAnswer) {
    lines.push(`De leerling koos zojuist fout: "${ctx.lastWrongAnswer}".`);
  }
  return lines.join("\n");
}

export default async function handler(req) {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: "API key niet geconfigureerd" }, 500);

  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Ongeldige JSON" }, 400);
  }

  const { messages = [], context = {} } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: "Geen berichten" }, 400);
  }
  // Begrens chat-lengte zodat we niet eindeloos meegroeien met context-tokens.
  const trimmed = messages.slice(-12);

  // Veiligheidsfilter op de laatste user-prompt
  const lastUser = [...trimmed].reverse().find((m) => m.role === "user");
  if (lastUser && !isClean(lastUser.content)) {
    return json({
      reply:
        "Laten we het bij de leerstof houden. Wat snap je niet aan deze stap?",
    });
  }

  const system = buildSystemPrompt(context);

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        temperature: 0.4,
        system,
        messages: trimmed.map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: String(m.content || "").slice(0, 2000),
        })),
      }),
    });

    if (!resp.ok) {
      const txt = await resp.text();
      return json(
        { error: `AI-fout: ${resp.status}`, detail: txt.slice(0, 200) },
        502
      );
    }
    const data = await resp.json();
    const reply = data?.content?.[0]?.text?.trim() || "";
    if (!reply) return json({ error: "Leeg AI-antwoord" }, 502);
    return json({ reply });
  } catch (e) {
    return json({ error: `Netwerkfout: ${e.message}` }, 502);
  }
}
