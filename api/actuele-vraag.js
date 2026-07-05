// /api/actuele-vraag — dagelijkse nieuwsvraag uit het NOS Jeugdjournaal
// (Mark 2026-07-02: "elke ochtend het nieuws lezen en daar een vraag van de
// dag over maken, zodat we actueel overkomen").
//
// LAZY i.p.v. cron (beide Vercel-Hobby-cron-plekken zijn bezet): de eerste
// aanvraag van de dag genereert de vraag en slaat hem op in `actuele_vraag`;
// alle latere aanvragen krijgen de opgeslagen versie. De frontend toont
// ondertussen gewoon de vaste pool-vraag en wisselt alleen als de bezoeker
// nog niet geantwoord heeft — niemand wacht dus op de AI.
//
// Veiligheid & kwaliteit:
//  - Bron = NOS Jeugdjournaal RSS (kindgericht; wij vatten alleen samen en
//    linken naar de bron — geen tekstovername).
//  - De generator mag alleen luchtige onderwerpen kiezen (natuur, dieren,
//    sport, wetenschap, techniek, cultuur); oorlog/misdrijf/ongeluk = skip.
//  - Een tweede AI-call controleert de vraag tegen het bronbericht; bij
//    twijfel wordt er NIETS opgeslagen (de vaste pool is het vangnet).
//  - Kosten: 2 Haiku-calls per dag ≈ minder dan een cent.
//
// Handmatig her-genereren: GET /api/actuele-vraag?key=<CRON_SECRET>&force=1

const RSS_URL = "https://feeds.nos.nl/jeugdjournaal";
const MODEL = "claude-haiku-4-5-20251001";

function nlDatum() {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Amsterdam" });
}

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });
}

// Mini-RSS-parser: alleen titel/beschrijving/link van de eerste items.
function parseRss(xml, max = 12) {
  const items = [];
  const blokken = xml.split("<item>").slice(1, max + 1);
  for (const b of blokken) {
    const pak = (tag) => {
      const m = b.match(new RegExp(`<${tag}>\\s*(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?\\s*</${tag}>`));
      return m ? m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";
    };
    const titel = pak("title");
    if (titel) items.push({ titel, beschrijving: pak("description").slice(0, 400), link: pak("link") });
  }
  return items;
}

async function callAnthropic(apiKey, system, user, maxTokens = 700) {
  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({
      model: MODEL, max_tokens: maxTokens, temperature: 0.4, system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!resp.ok) throw new Error(`Anthropic ${resp.status}: ${(await resp.text()).slice(0, 200)}`);
  const data = await resp.json();
  return data?.content?.[0]?.text?.trim() || "";
}

async function callGemini(apiKey, system, user, maxTokens = 700) {
  const resp = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: "user", parts: [{ text: user }] }],
        generationConfig: { maxOutputTokens: maxTokens, temperature: 0.4 },
      }),
    }
  );
  if (!resp.ok) throw new Error(`Gemini ${resp.status}: ${(await resp.text()).slice(0, 200)}`);
  const data = await resp.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
}

async function ai(system, user, maxTokens) {
  const a = process.env.ANTHROPIC_API_KEY;
  const g = process.env.GOOGLE_API_KEY;
  if (a) {
    try { return { tekst: await callAnthropic(a, system, user, maxTokens), model: MODEL }; }
    catch (e) { console.warn("[actuele-vraag] Anthropic faalde:", e.message); }
  }
  if (g) return { tekst: await callGemini(g, system, user, maxTokens), model: "gemini-2.0-flash" };
  throw new Error("Geen AI-key geconfigureerd");
}

function parseJson(tekst) {
  const schoon = tekst.replace(/```json|```/g, "").trim();
  const start = schoon.indexOf("{");
  const eind = schoon.lastIndexOf("}");
  if (start < 0 || eind <= start) throw new Error("Geen JSON in AI-antwoord");
  return JSON.parse(schoon.slice(start, eind + 1));
}

const MAAK_SYSTEM = `Je maakt voor de Nederlandse leer-app Leerkwartier één "actuele vraag van de dag" voor kinderen van 9-12 jaar (groep 6-8), gebaseerd op een NOS Jeugdjournaal-bericht.

HARDE REGELS:
- Kies UITSLUITEND een luchtig/positief bericht: natuur, dieren, sport, wetenschap, ruimte, techniek, cultuur, records, weer. NOOIT: oorlog, geweld, misdrijf, ongeluk, ziekte/overlijden, politiek-gevoelig, verdrietig nieuws. Is er geen geschikt bericht, geef dan {"geschikt": false}.
- De vraag toetst BEGRIP of algemene kennis die aan het bericht raakt (rekenen mag ook, bv. met een getal uit het bericht) — geen mening, geen gok zonder houvast.
- BEANTWOORDBAARHEIDS-EIS (belangrijkste regel): een kind dat ALLEEN dit bericht leest, moet het goede antwoord met zekerheid kunnen aanwijzen. Het antwoord staat letterlijk in het bericht of is vaststaande algemene kennis. Kan dat niet? Kies een ander bericht of geef {"geschikt": false}.
- VERBODEN vraagsoorten:
  • Enquête-/peiling-/percentage-vragen ("hoeveel procent van de mensen/kinderen vindt/zei/gaat...") — die kan een lezer niet weten.
  • Meningen, voorspellingen, "wat denk jij", "wat zou jij doen".
  • Zelf-verwijzende vragen: verwijs NOOIT naar "de app", "Leerkwartier", "kinderen die reageerden", "lezers" of welke groep dan ook die niet in het bericht staat. De vraag gaat puur over de INHOUD van het nieuwsbericht.
  • Vragen over een exact getal/percentage dat niet duidelijk in het bericht staat.
- Schrijf op taalniveau van een kind van 10. Geen moeilijke woorden zonder uitleg.
- Verzin GEEN feiten die niet in het bericht staan of geen vaststaande algemene kennis zijn.
- Precies 4 antwoordopties, 1 goed. De 3 foute opties zijn duidelijk fout (niet "ook een beetje waar"). Zet het goede antwoord op een willekeurige positie.
- "uitleg" legt in 2-3 zinnen uit waaróm het antwoord klopt (kindvriendelijk); "simpeler" zegt hetzelfde nóg eenvoudiger in 1-2 zinnen.

Antwoord met ALLEEN dit JSON-object, niets eromheen:
{"geschikt": true, "bronIndex": <nummer van het gekozen bericht>, "emoji": "<1 passende emoji>", "vraag": "<de vraag>", "options": ["...","...","...","..."], "answer": <index 0-3 van het goede antwoord>, "uitleg": "<waarom>", "simpeler": "<nog simpeler>"}`;

const CHECK_SYSTEM = `Je bent een strenge feitencontroleur voor een kindervraag. Je krijgt een nieuwsbericht (titel + samenvatting) en een meerkeuzevraag met antwoord en uitleg. Keur AF (ok:false) zodra ook maar één punt niet klopt:
1. Kan een kind dat ALLEEN dit bericht leest het goede antwoord met zekerheid aanwijzen? Staat het antwoord in het bericht of is het vaststaande algemene kennis? Zo nee → afkeuren.
2. Klopt het aangewezen antwoord echt?
3. Is precies één optie goed (geen tweede verdedigbare optie)?
4. Is het GEEN enquête-/peiling-/percentage-vraag over wat mensen vinden/zeiden/gaan doen, en GEEN mening/voorspelling? Zulke vragen zijn niet te weten → afkeuren.
5. Verwijst de vraag NIET naar "de app", "Leerkwartier", "kinderen/lezers die reageerden" of een groep die niet in het bericht staat? Zo'n zelf-verwijzing → afkeuren.
6. Is het onderwerp geschikt voor kinderen van 9-12 (niets engs of verdrietigs)?
7. Klopt de uitleg met het antwoord?
Bij twijfel: afkeuren. Antwoord met ALLEEN JSON: {"ok": true} of {"ok": false, "reden": "<kort>"}`;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return res.status(500).json({ error: "supabase-config-missing" });

  const vandaag = nlDatum();
  const force = (req.query?.force || "") === "1" && (req.query?.key || "") === process.env.CRON_SECRET;

  // 1. Bestaat de vraag van vandaag al? Dan direct teruggeven.
  if (!force) {
    try {
      const r = await sb(`actuele_vraag?datum=eq.${vandaag}&select=datum,vraag,bron_titel,bron_url`, {}, base, key);
      const rows = await r.json();
      if (Array.isArray(rows) && rows.length) return res.status(200).json({ actueel: rows[0] });
    } catch (e) {
      return res.status(500).json({ error: "db-read", detail: e.message });
    }
  }

  // 2. Genereren. Race-veilig: de insert heeft datum als primary key —
  //    dubbele generatie kost hooguit één extra AI-call, nooit dubbele rijen.
  try {
    const rss = await (await fetch(RSS_URL, { headers: { "user-agent": "leerkwartier-dagvraag" } })).text();
    let items = parseRss(rss);
    // Onderwerpen van de afgelopen dagen niet herhalen (het RSS houdt
    // berichten meerdere dagen vast — anders 2× dezelfde giraffe).
    try {
      const r = await sb(`actuele_vraag?datum=gte.${new Date(Date.now() - 5 * 86400000).toISOString().slice(0, 10)}&select=bron_url`, {}, base, key);
      const oud = new Set(((await r.json()) || []).map((x) => x.bron_url).filter(Boolean));
      const vers = items.filter((it) => !oud.has(it.link));
      if (vers.length) items = vers;
    } catch { /* uitsluiten is best-effort */ }
    if (!items.length) return res.status(200).json({ actueel: null, reden: "rss-leeg" });

    const lijst = items.map((it, i) => `[${i}] ${it.titel} — ${it.beschrijving}`).join("\n");
    const gen = await ai(MAAK_SYSTEM, `Berichten van vandaag:\n${lijst}\n\nMaak de vraag (of {"geschikt": false}).`);
    const v = parseJson(gen.tekst);
    if (!v.geschikt) return res.status(200).json({ actueel: null, reden: "geen-geschikt-bericht" });

    const bron = items[v.bronIndex] || items[0];
    if (
      !v.vraag || !Array.isArray(v.options) || v.options.length !== 4 ||
      !Number.isInteger(v.answer) || v.answer < 0 || v.answer > 3 || !v.uitleg
    ) return res.status(200).json({ actueel: null, reden: "ongeldig-formaat" });

    // 3. Feitencheck door een tweede call — bij twijfel niets opslaan.
    const check = await ai(
      CHECK_SYSTEM,
      `BERICHT: ${bron.titel} — ${bron.beschrijving}\n\nVRAAG: ${v.vraag}\nOPTIES: ${v.options.map((o, i) => `${i}: ${o}`).join(" | ")}\nGOED ANTWOORD: ${v.answer} (${v.options[v.answer]})\nUITLEG: ${v.uitleg}`,
      200
    );
    const oordeel = parseJson(check.tekst);
    if (!oordeel.ok) return res.status(200).json({ actueel: null, reden: `afgekeurd: ${oordeel.reden || "?"}` });

    const vraagJson = {
      id: `actueel-${vandaag}`,
      emoji: v.emoji || "🗞️",
      vraag: v.vraag,
      options: v.options,
      answer: v.answer,
      uitleg: v.uitleg,
      simpeler: v.simpeler || "",
    };
    const ins = await sb(`actuele_vraag${force ? `?datum=eq.${vandaag}` : ""}`, {
      method: force ? "PATCH" : "POST",
      headers: { Prefer: "resolution=ignore-duplicates" },
      body: JSON.stringify(
        force
          ? { vraag: vraagJson, bron_titel: bron.titel, bron_url: bron.link, model: gen.model }
          : { datum: vandaag, vraag: vraagJson, bron_titel: bron.titel, bron_url: bron.link, model: gen.model }
      ),
    }, base, key);
    if (!ins.ok && ins.status !== 409) {
      console.warn("[actuele-vraag] insert faalde:", ins.status, await ins.text());
    }
    return res.status(200).json({ actueel: { datum: vandaag, vraag: vraagJson, bron_titel: bron.titel, bron_url: bron.link } });
  } catch (e) {
    console.warn("[actuele-vraag] generatie faalde:", e.message);
    return res.status(200).json({ actueel: null, reden: "generatie-fout" });
  }
}
