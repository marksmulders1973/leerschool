// AI-tutor endpoint — leerling kan vragen stellen over de huidige stap.
// Context (pad-titel, stap-titel, uitleg, optionele check + fout-poging) wordt
// als system-prompt meegegeven. Antwoord is altijd kort en didactisch:
// stuurt richting begrip, geeft niet zomaar het juiste antwoord weg.
//
// Mark Sprint-0 audit 2026-05-13 fixes (2026-05-14):
// - Socratisch verplicht: antwoord MOET met vraag terug beginnen
// - Juiste antwoord NIET meer in system prompt (privacy + lek-risico)
// - Leeftijds-adaptief: po-paden krijgen simpeler toon dan havo
// - Gemini-fallback bij Anthropic-failure (kosten + uptime)

import { guardRequest, dailyQuotaCheck } from "./_guard.js";

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

// Bepaal leeftijdsgroep uit pad-id-prefix.
// po-* / *-po = groep 4-8 (~8-12 jaar)
// vmbo-* / mavo-* = klas 1-4 (~12-16 jaar)
// havo-* / vwo-* = klas 1-6 (~12-18 jaar)
function inferAgeGroup(pathId) {
  if (!pathId) return "vo";
  const id = String(pathId).toLowerCase();
  if (id.startsWith("po-") || id.endsWith("-po") || id.includes("groep")) return "po";
  if (id.startsWith("examen-")) return "vmbo"; // examen-paden zijn vmbo-mavo
  if (id.includes("havo") || id.includes("vwo")) return "havo";
  if (id.includes("vmbo") || id.includes("mavo")) return "vmbo";
  return "vo";
}

function ageInstructie(ageGroup) {
  switch (ageGroup) {
    case "po":
      return "De leerling is 8-12 jaar (basisschool). Gebruik héél eenvoudige woorden en korte zinnen. Geef altijd 1 concreet voorbeeld uit de leefwereld (broer, fiets, snoep, klas).";
    case "vmbo":
      return "De leerling is 12-16 jaar (vmbo/mavo). Schrijf duidelijk + concreet, vermijd academisch jargon. Eén voorbeeld helpt.";
    case "havo":
      return "De leerling is 13-18 jaar (havo/vwo). Mag iets abstracter — vraag-terug + 1 voorbeeld blijft kern.";
    default:
      return "Schrijf in duidelijke taal, met 1 concreet voorbeeld.";
  }
}

function buildSystemPrompt(ctx = {}) {
  const ageGroup = inferAgeGroup(ctx.pathId);
  const lines = [];
  lines.push(
    "Je bent een vriendelijke leerbegeleider voor Leerkwartier, een Nederlandse " +
      "leerapp. De leerling werkt aan een specifieke uitleg-stap. Help met BEGRIP " +
      "— NOOIT door het antwoord weg te geven."
  );
  lines.push("");
  lines.push("KERNREGEL (Socratisch):");
  lines.push(
    "Begin elk antwoord MET een vraag terug aan de leerling. Pas in het volgende " +
      "bericht mag je een korte uitleg of voorbeeld geven. Doel: leerling laat " +
      "zélf nadenken; jij stuurt alleen bij."
  );
  lines.push("");
  lines.push("REGELS:");
  lines.push("- Maximum 3 zinnen. Eenvoudig Nederlands. Geen lange opsommingen.");
  lines.push(ageInstructie(ageGroup));
  lines.push(
    "- Bij een fout antwoord: stel een terug-vraag die naar het juiste denkpad leidt, " +
      "geen kant-en-klare oplossing. Bv. 'Wat denk je dat er gebeurt als…?'"
  );
  lines.push(
    "- Bij 'leg het anders uit': geef een NIEUW voorbeeld of vergelijking — niet " +
      "dezelfde uitleg in andere woorden."
  );
  lines.push(
    "- Off-topic vraag: vriendelijk terugleiden. ('Goede vraag, maar laten we " +
      "eerst dit afmaken.')"
  );
  lines.push(
    "- Hooguit 1 emoji per antwoord, alleen als het echt past. Spreek met je/jij."
  );
  lines.push(
    "- GEEN antwoord-letter (A/B/C/D) en GEEN optie-tekst direct teruggeven, ook " +
      "niet als de leerling erom vraagt. Stel een wedervraag."
  );
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
    // Audit 2026-05-14: juiste antwoord NIET meer in context. AI moet uit
    // uitleg + opties zelf afleiden welke optie correct is. Voorkomt
    // lek-risico ("Het juiste antwoord is C, omdat...").
  }
  if (ctx.lastWrongAnswer) {
    lines.push(`De leerling koos zojuist fout: "${ctx.lastWrongAnswer}".`);
  }
  return lines.join("\n");
}

// ─── Anthropic-call ────────────────────────────────────────────────
async function callAnthropic(apiKey, system, messages) {
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
      messages: messages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: String(m.content || "").slice(0, 2000),
      })),
    }),
  });
  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`Anthropic ${resp.status}: ${txt.slice(0, 200)}`);
  }
  const data = await resp.json();
  const reply = data?.content?.[0]?.text?.trim() || "";
  if (!reply) throw new Error("Leeg Anthropic-antwoord");
  return reply;
}

// ─── Gemini-fallback ───────────────────────────────────────────────
// Activeert wanneer Anthropic 5xx/timeout geeft of er geen
// ANTHROPIC_API_KEY is. Vereist GOOGLE_API_KEY env-var.
async function callGemini(apiKey, system, messages) {
  // Gemini neemt geen aparte 'system'-rol — we prepend de system prompt
  // aan de eerste user-message.
  const formatted = messages.map((m, i) => {
    let content = String(m.content || "").slice(0, 2000);
    if (i === 0 && m.role === "user") {
      content = `${system}\n\n--- LEERLING-VRAAG ---\n${content}`;
    }
    return {
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: content }],
    };
  });
  const resp = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        contents: formatted,
        generationConfig: { maxOutputTokens: 400, temperature: 0.4 },
      }),
    }
  );
  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`Gemini ${resp.status}: ${txt.slice(0, 200)}`);
  }
  const data = await resp.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
  if (!reply) throw new Error("Leeg Gemini-antwoord");
  return reply;
}

export default async function handler(req) {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const blocked = guardRequest(req);
  if (blocked) return blocked;

  // Audit-1 QW6: daily cost-cap voor AI-endpoint (default 5000/dag).
  const quotaBlocked = await dailyQuotaCheck("tutor-chat");
  if (quotaBlocked) return quotaBlocked;

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const geminiKey = process.env.GOOGLE_API_KEY;
  if (!anthropicKey && !geminiKey) {
    return json({ error: "Geen AI-key geconfigureerd" }, 500);
  }

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
  const trimmed = messages.slice(-12);

  const lastUser = [...trimmed].reverse().find((m) => m.role === "user");
  if (lastUser && !isClean(lastUser.content)) {
    return json({
      reply:
        "Laten we het bij de leerstof houden. Wat snap je niet aan deze stap?",
    });
  }

  const system = buildSystemPrompt(context);

  // Eerst Anthropic (primair), Gemini als fallback bij failure.
  let lastError = null;
  if (anthropicKey) {
    try {
      const reply = await callAnthropic(anthropicKey, system, trimmed);
      return json({ reply, provider: "anthropic" });
    } catch (e) {
      lastError = e;
      console.warn("[tutor-chat] Anthropic faalde, val terug op Gemini:", e.message);
    }
  }
  if (geminiKey) {
    try {
      const reply = await callGemini(geminiKey, system, trimmed);
      return json({ reply, provider: "gemini" });
    } catch (e) {
      lastError = e;
      console.warn("[tutor-chat] Gemini ook gefaald:", e.message);
    }
  }
  return json(
    { error: `AI niet bereikbaar: ${lastError?.message || "onbekend"}` },
    502
  );
}
