#!/usr/bin/env node
// claude-bridge.mjs — CLI-bridge naar Claude via Anthropic API (geen browser).
// Bouwt voort op pattern in api/tutor-chat.js: direct fetch, geen SDK-dep.
// Gebruikt ANTHROPIC_API_KEY (primair) of GOOGLE_API_KEY (fallback Gemini).
//
// Gebruik:
//   node scripts/claude-bridge.mjs "<prompt>"
//   node scripts/claude-bridge.mjs --system "<systeem-prompt>" "<prompt>"
//   node scripts/claude-bridge.mjs --model claude-opus-4-7 --max 2000 "<prompt>"
//   node scripts/claude-bridge.mjs --json "<prompt>"             # JSON-output
//   node scripts/claude-bridge.mjs --file prompt.txt              # prompt uit file
//   node scripts/claude-bridge.mjs --stdin                        # prompt via stdin
//   cat vragen.txt | node scripts/claude-bridge.mjs --stdin --json --max 4000
//
// Env (in .env of process.env):
//   ANTHROPIC_API_KEY   primair
//   GOOGLE_API_KEY      fallback wanneer Anthropic faalt of geen key
//   CLAUDE_MODEL        default model (default: claude-opus-4-7)

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

// ── .env-loader (geen npm-dep) ──────────────────────────────────────
async function laadDotEnv() {
  const cwd = process.cwd();
  const kandidaten = [".env.local", ".env"];
  for (const naam of kandidaten) {
    const p = path.join(cwd, naam);
    if (!existsSync(p)) continue;
    const inhoud = await readFile(p, "utf-8");
    for (const regel of inhoud.split(/\r?\n/)) {
      if (!regel || regel.startsWith("#") || !regel.includes("=")) continue;
      const idx = regel.indexOf("=");
      const k = regel.slice(0, idx).trim();
      let v = regel.slice(idx + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      if (k && process.env[k] === undefined) process.env[k] = v;
    }
  }
}

// ── Anthropic-call ──────────────────────────────────────────────────
async function callAnthropic({ apiKey, system, prompt, model, maxTokens }) {
  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      temperature: 0.4,
      ...(system ? { system } : {}),
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`Anthropic ${resp.status}: ${txt.slice(0, 300)}`);
  }
  const data = await resp.json();
  const tekst = data?.content?.[0]?.text?.trim() || "";
  if (!tekst) throw new Error("Leeg Anthropic-antwoord");
  return {
    provider: "anthropic",
    model,
    text: tekst,
    usage: data.usage || null,
    stop_reason: data.stop_reason,
  };
}

// ── Gemini-fallback ─────────────────────────────────────────────────
async function callGemini({ apiKey, system, prompt, maxTokens }) {
  const inhoud = system ? `${system}\n\n---\n${prompt}` : prompt;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;
  const resp = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: inhoud }] }],
      generationConfig: { maxOutputTokens: maxTokens, temperature: 0.4 },
    }),
  });
  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`Gemini ${resp.status}: ${txt.slice(0, 300)}`);
  }
  const data = await resp.json();
  const tekst = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
  if (!tekst) throw new Error("Leeg Gemini-antwoord");
  return { provider: "gemini", model: "gemini-2.0-flash-exp", text: tekst };
}

// ── Args-parser ─────────────────────────────────────────────────────
function parseArgs(argv) {
  const opts = { system: "", model: "", max: 2000, json: false, file: "", stdin: false, prompt: "" };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--system") opts.system = argv[++i] || "";
    else if (a === "--model") opts.model = argv[++i] || "";
    else if (a === "--max" || a === "--max-tokens") opts.max = parseInt(argv[++i] || "2000", 10);
    else if (a === "--json") opts.json = true;
    else if (a === "--file") opts.file = argv[++i] || "";
    else if (a === "--stdin") opts.stdin = true;
    else if (a === "-h" || a === "--help") opts.help = true;
    else rest.push(a);
  }
  opts.prompt = rest.join(" ");
  return opts;
}

function showHelp() {
  console.log(`claude-bridge.mjs — Anthropic API CLI (Gemini fallback)

Gebruik:
  node scripts/claude-bridge.mjs [opties] "<prompt>"

Opties:
  --system "<text>"     Systeem-prompt (rol/regels voor Claude)
  --model <id>          Model (default: env CLAUDE_MODEL of claude-opus-4-7)
  --max <n>             Max tokens (default: 2000)
  --json                JSON-output: {provider,model,text,usage,stop_reason}
  --file <pad>          Lees prompt uit bestand
  --stdin               Lees prompt uit stdin (pipe)
  -h, --help            Deze hulp

Env vars:
  ANTHROPIC_API_KEY     Primair
  GOOGLE_API_KEY        Fallback wanneer Anthropic faalt
  CLAUDE_MODEL          Default model

Voorbeelden:
  node scripts/claude-bridge.mjs "Wat is 2+2?"
  node scripts/claude-bridge.mjs --system "Je bent een Cito-docent." --max 1500 "Leg breuken uit voor groep 6"
  echo "samenvat:" | node scripts/claude-bridge.mjs --stdin --json
  node scripts/claude-bridge.mjs --file research-prompt.txt --max 4000
`);
}

async function leesStdin() {
  return new Promise((resolve) => {
    let data = "";
    process.stdin.setEncoding("utf-8");
    process.stdin.on("data", (chunk) => { data += chunk; });
    process.stdin.on("end", () => resolve(data));
  });
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  await laadDotEnv();
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) { showHelp(); return; }

  // Prompt-bron resolven
  let prompt = opts.prompt;
  if (opts.file) {
    if (!existsSync(opts.file)) {
      console.error(`Bestand niet gevonden: ${opts.file}`);
      process.exit(2);
    }
    prompt = await readFile(opts.file, "utf-8");
  } else if (opts.stdin) {
    prompt = await leesStdin();
  }
  prompt = (prompt || "").trim();
  if (!prompt) {
    console.error("Geen prompt — geef een argument, --file of --stdin.");
    showHelp();
    process.exit(2);
  }

  const model = opts.model || process.env.CLAUDE_MODEL || "claude-opus-4-7";
  const anthKey = process.env.ANTHROPIC_API_KEY;
  const gemKey = process.env.GOOGLE_API_KEY;

  if (!anthKey && !gemKey) {
    console.error("Geen API-key gevonden. Zet ANTHROPIC_API_KEY (of GOOGLE_API_KEY) in .env of env.");
    process.exit(3);
  }

  let resultaat;
  let lastError = null;
  if (anthKey) {
    try {
      resultaat = await callAnthropic({ apiKey: anthKey, system: opts.system, prompt, model, maxTokens: opts.max });
    } catch (e) {
      lastError = e;
      if (gemKey) {
        process.stderr.write(`[anthropic-fail → gemini-fallback] ${e.message}\n`);
        resultaat = await callGemini({ apiKey: gemKey, system: opts.system, prompt, maxTokens: opts.max });
      } else {
        throw e;
      }
    }
  } else {
    resultaat = await callGemini({ apiKey: gemKey, system: opts.system, prompt, maxTokens: opts.max });
  }

  if (opts.json) {
    process.stdout.write(JSON.stringify(resultaat, null, 2) + "\n");
  } else {
    process.stdout.write(resultaat.text + "\n");
  }
  void lastError;
}

main().catch((e) => {
  console.error(`Fout: ${e.message}`);
  process.exit(1);
});
