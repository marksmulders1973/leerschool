// Parkmaatje-chat — het droom-maatje uit het Zookwartier-park praat terug met
// het kind. KINDVEILIG opgezet: streng contentfilter, kort in-karakter antwoord,
// nooit vragen om persoonsgegevens, nooit eng/volwassen, altijd terugleiden naar
// het park / leren / iets vrolijks. Geen opslag van het gesprek (stateless).
//
// Hergebruikt dezelfde infra als tutor-chat: ANTHROPIC_API_KEY (Mark's credits),
// Gemini-fallback, _guard (rate-limit + dagelijkse kosten-cap). Goedkoop model
// (Haiku) + kleine max_tokens, want dit is sfeer/aanmoediging, geen lange uitleg.

import { guardRequest, dailyQuotaCheck } from "./_guard.js";

export const config = { runtime: "edge", maxDuration: 30 };

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Streng filter — publiek is 8-12. Bij een hit géén AI-call, maar een
// vriendelijke in-karakter afleiding.
const BLOCKED = [
  "porno", "porn", "xxx", "fuck", "shit", "kanker", "neuk", "sex", "seks",
  "wachtwoord", "password", "creditcard", "credit card", "pincode",
  "adres", "telefoonnummer", "06 ", "waar woon", "welke school",
  "hack", "exploit", "kill", "murder", "moord", "wapen", "gun", "mes ",
  "naked", "nude", "drugs", "wiet", "alcohol", "zelfmoord", "suicide", "dood maken",
];
function isClean(text) {
  if (!text) return true;
  const lower = String(text).toLowerCase();
  return !BLOCKED.some((w) => lower.includes(w));
}

// Korte karakter-omschrijving per soort maatje.
const SOORT = {
  draakje: "een klein, vriendelijk en moedig draakje",
  eenhoorn: "een lieve, zachte eenhoorn die altijd aanmoedigt",
  uil: "een wijze, rustige uil die graag leertips geeft",
  bubbel: "een speels, grappig stuiter-bubbelwezen",
  ster: "een dromerig, kalm sterrenwezen dat fonkelt",
  fenix: "een warme, vrolijke kleine vuurvogel (fenix)",
};

function buildSystemPrompt(ctx = {}) {
  const naam = String(ctx.buddyNaam || "Maatje").slice(0, 20);
  const soort = SOORT[ctx.soort] || "een vrolijk fantasie-maatje";
  const kind = String(ctx.kindNaam || "").trim().slice(0, 20);
  const zwak = String(ctx.zwakVak || "").trim().slice(0, 40);
  const L = [];
  L.push(`Je bent ${naam}, ${soort}. Je bent het droom-maatje van een kind in het spel "Leerkwartier", een Nederlandse leer-app. Je loopt samen met het kind door een eigen mini-dierentuin/pretpark dat groeit als het kind leert.`);
  L.push("");
  L.push("WIE PRAAT MET JE: een kind van ongeveer 8 tot 12 jaar.");
  L.push("");
  L.push("HOE JE PRAAT:");
  L.push("- Heel kort: maximaal 2 zinnen. Eenvoudige, warme, vrolijke taal. Spreek met je/jij.");
  L.push("- Blijf altijd in karakter als knuffelig maatje. Hooguit 1 emoji.");
  if (kind) L.push(`- Het kind heet ${kind}. Gebruik die naam af en toe, niet elke zin.`);
  L.push("- Moedig aan om te leren/oefenen (een kwartiertje), te lezen of een vraag te maken — luchtig, nooit dwingend.");
  if (zwak) L.push(`- Het kind vindt "${zwak}" soms lastig. Je mag het daar speels in aanmoedigen, zonder te pushen.`);
  L.push("- Je mag praten over het park, de dieren, de attracties, het maatje zelf, school en gevoelens (blij/zenuwachtig voor een toets).");
  L.push("");
  L.push("JE BENT OOK DE PARKGIDS — je mag uitleggen hoe het werkt, tips geven, advies geven en je mening geven over hun park (altijd positief en bemoedigend).");
  L.push("HOE HET PARK WERKT (dit is de waarheid, verzin niets anders):");
  L.push("- Je verdient muntjes (🪙) door elke dag in te loggen én door te leren: een kwartiertje oefenen in de leer-app levert muntjes op. Het park groeit dus als je leert.");
  L.push("- Met muntjes koop je dieren, gebouwen, attracties (draaimolen, reuzenrad, zweefmolen, treintje), bomen/planten, hekken, paden en kraampjes. Je kunt alles plaatsen, verschuiven of weghalen (dan krijg je muntjes terug).");
  L.push("- Kraampjes (patat, drinken, ijs, popcorn): bezoekers kopen daar iets en dan verdien jij muntjes. Zet de prijs niet te hoog, anders lopen bezoekers door.");
  L.push("- Dieren kunnen jongen krijgen (extra muntjes) en willen af en toe gevoerd worden, anders worden ze verdrietig.");
  L.push("- Je kunt rondlopen met je poppetje, door je eigen ogen kijken en meerijden met het treintje. Sommige bijzondere dieren verdien je door een leerpad helemaal af te maken.");
  L.push("- Tip die je mag geven: paden tussen de verblijven, een kraampje voor muntjes, en dieren voeren zodat ze blij blijven.");
  if (ctx.park && typeof ctx.park === "object") {
    const p = ctx.park;
    const stukjes = [];
    if (p.dieren != null) stukjes.push(`${p.dieren} dieren`);
    if (p.attracties != null) stukjes.push(`${p.attracties} attracties`);
    if (p.gebouwen != null) stukjes.push(`${p.gebouwen} gebouwen`);
    if (p.kraampjes != null) stukjes.push(`${p.kraampjes} kraampjes`);
    if (p.bomen != null) stukjes.push(`${p.bomen} bomen/planten`);
    if (stukjes.length) L.push(`HUN PARK NU: ${stukjes.join(", ")}${p.muntjes != null ? `, ${p.muntjes} muntjes` : ""}. Geef hier gerust een leuk, concreet advies over (bv. wat een mooi volgend stapje zou zijn), maar alleen als ze ernaar vragen of het past.`);
  }
  L.push("");
  L.push("VEILIGHEID (heel belangrijk):");
  L.push("- Vraag NOOIT naar persoonlijke gegevens (achternaam, adres, telefoonnummer, school, wachtwoord, foto).");
  L.push("- Geef NOOIT enge, gewelddadige, volwassen of verdrietige inhoud. Niets engs of spannends.");
  L.push("- Geen echte-wereld-afspraken, geen links, geen geld, geen kopen.");
  L.push("- Je bent een verzonnen speel-maatje, geen echt mens en geen dokter/leraar. Doe niet alsof je een echt persoon bent.");
  L.push("- Als het kind iets verdrietigs of zorgelijks zegt (pesten, bang, verdriet): wees lief, zeg dat het goed is om met een volwassene die ze vertrouwen (ouder/juf/meester) te praten, en blijf vriendelijk.");
  L.push("- Bij een rare, nare of off-topic vraag: leid vrolijk en zacht terug naar het park of het leren. Word nooit boos.");
  return L.join("\n");
}

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
      max_tokens: 160,
      temperature: 0.8,
      system,
      messages: messages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: String(m.content || "").slice(0, 500),
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

async function callGemini(apiKey, system, messages) {
  const formatted = messages.map((m, i) => {
    let content = String(m.content || "").slice(0, 500);
    if (i === 0 && m.role === "user") content = `${system}\n\n--- KIND ZEGT ---\n${content}`;
    return { role: m.role === "assistant" ? "model" : "user", parts: [{ text: content }] };
  });
  const resp = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ contents: formatted, generationConfig: { maxOutputTokens: 160, temperature: 0.8 } }),
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

  const quotaBlocked = await dailyQuotaCheck("buddy-chat");
  if (quotaBlocked) return quotaBlocked;

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const geminiKey = process.env.GOOGLE_API_KEY;
  if (!anthropicKey && !geminiKey) return json({ error: "Geen AI-key geconfigureerd" }, 500);

  let body;
  try { body = await req.json(); } catch { return json({ error: "Ongeldige JSON" }, 400); }

  const { messages = [], context = {} } = body;
  if (!Array.isArray(messages) || messages.length === 0) return json({ error: "Geen berichten" }, 400);
  const trimmed = messages.slice(-8);

  const naam = String(context.buddyNaam || "je maatje").slice(0, 20);
  const lastUser = [...trimmed].reverse().find((m) => m.role === "user");
  if (lastUser && !isClean(lastUser.content)) {
    return json({ reply: `Hihi, daar wil ik het liever niet over hebben. Zullen we iets leuks in het park doen of samen een vraagje oefenen? 🌟`, safe: true });
  }

  const system = buildSystemPrompt(context);

  let lastError = null;
  if (anthropicKey) {
    try {
      const reply = await callAnthropic(anthropicKey, system, trimmed);
      return json({ reply, provider: "anthropic" });
    } catch (e) {
      lastError = e;
      console.warn("[buddy-chat] Anthropic faalde, val terug op Gemini:", e.message);
    }
  }
  if (geminiKey) {
    try {
      const reply = await callGemini(geminiKey, system, trimmed);
      return json({ reply, provider: "gemini" });
    } catch (e) {
      lastError = e;
      console.warn("[buddy-chat] Gemini ook gefaald:", e.message);
    }
  }
  return json({ error: `AI niet bereikbaar: ${lastError?.message || "onbekend"}` }, 502);
}
