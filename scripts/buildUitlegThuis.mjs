#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────
// buildUitlegThuis.mjs — genereert public/uitleg-thuis.html uit de gecureerde
// ouderkaarten (src/features/familie/ouderkaartContent.js).
//
// WAAROM: de interactieve /ouderkaart-pagina is een client-gerenderde SPA-route
// en dus ONZICHTBAAR voor zoekmachines én AI-crawlers (ChatGPT/Claude/Perplexity).
// Ouders vragen een AI juist "hoe leg ik breuken/staartdeling/werkwoordspelling
// uit aan mijn kind" — precies wat deze kaarten beantwoorden. Deze statische
// pagina maakt die inhoud crawlbaar + citeerbaar, met HowTo- en FAQ-structured
// data (die LLM's en Google graag oppikken). Eén bron van waarheid: dit script
// leest dezelfde data als de app, dus de pagina loopt nooit uit sync.
//
// Draait mee in "prebuild" (zie package.json), dus regenereert bij elke build.
// ─────────────────────────────────────────────────────────────────────────
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { OUDERKAARTEN } from "../src/features/familie/ouderkaartContent.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/uitleg-thuis.html");
const SITE = "https://leerkwartier.app";

const esc = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Concepten in vaste, zinnige volgorde (Marks 3 preview-kaarten eerst).
const VOLGORDE = ["breuken", "staartdeling", "werkwoordspelling", "delen", "tafels", "spelling-ei-ij", "kommagetallen"];
const concepten = VOLGORDE.filter((id) => OUDERKAARTEN[id]).map((id) => ({ id, ...OUDERKAARTEN[id] }));

// ── Structured data ──────────────────────────────────────────────────────
// Per concept een HowTo ("Zo leg je X uit aan je kind") — ideaal citeer-object.
const howTos = concepten.map((k) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `Zo leg je ${k.titel.toLowerCase()} uit aan je kind`,
  description: k.intro,
  inLanguage: "nl-NL",
  step: k.stappen.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.titel,
    text: s.tekst,
  })),
}));

// Eén FAQPage met de natuurlijke ouder-vragen ("Hoe leg ik X uit aan mijn kind?").
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: concepten.map((k) => ({
    "@type": "Question",
    name: `Hoe leg ik ${k.titel.toLowerCase()} uit aan mijn kind?`,
    acceptedAnswer: {
      "@type": "Answer",
      text: `${k.intro} Zeg bijvoorbeeld: "${k.zegDit}" Let op de veelgemaakte fout: ${k.valkuil} Op leerkwartier.app/ouderkaart staat de volledige printbare uitlegkaart.`,
    },
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Zo leg je het uit — voor ouders", item: `${SITE}/uitleg-thuis.html` },
  ],
};

// ── Zichtbare, crawlbare inhoud per concept ──────────────────────────────
function conceptHtml(k) {
  const stappen = k.stappen
    .map((s) => `        <li><strong>${esc(s.titel)}.</strong> ${esc(s.tekst)}</li>`)
    .join("\n");
  const woorden = (k.woorden || [])
    .map((w) => `<strong>${esc(w.woord)}</strong> = ${esc(w.uitleg)}`)
    .join(" · ");
  return `    <section class="concept" id="${esc(k.id)}">
      <h2>${esc(k.emoji)} Zo leg je ${esc(k.titel.toLowerCase())} uit aan je kind</h2>
      <p class="intro">${esc(k.intro)}</p>
      <h3>Stap voor stap</h3>
      <ol>
${stappen}
      </ol>
      <p class="zeg"><strong>💬 Zeg bijvoorbeeld:</strong> "${esc(k.zegDit)}"</p>
      <p class="fout"><strong>⚠️ Veelgemaakte fout:</strong> ${esc(k.valkuil)}</p>
      <p class="voorbeeld"><strong>🤝 Doe samen dit voorbeeld:</strong> ${esc(k.voorbeeld)}</p>
      ${woorden ? `<p class="woorden"><strong>Woorden die helpen:</strong> ${woorden}</p>` : ""}
      <p class="kaartlink"><a href="/ouderkaart?kaart=${esc(k.id)}">📄 Bekijk of print de uitlegkaart voor ${esc(k.titel.toLowerCase())} →</a></p>
    </section>`;
}

const inhoudsopgave = concepten
  .map((k) => `<a href="#${esc(k.id)}">${esc(k.emoji)} ${esc(k.titel)}</a>`)
  .join("\n      ");

const jsonLd = [breadcrumb, faq, ...howTos]
  .map((o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`)
  .join("\n");

const titels = concepten.map((k) => k.titel.toLowerCase()).join(", ");

const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Zo leg je het uit aan je kind: heldere ouder-uitleg voor ${esc(titels)}. In gewone woorden, met een zin die je letterlijk kunt zeggen, de veelgemaakte fout en een voorbeeld om samen te doen. Gratis." />
  <meta name="keywords" content="hoe leg ik breuken uit aan mijn kind, staartdeling uitleggen, werkwoordspelling uitleggen kind, breuken uitleggen groep 7, kind helpen met rekenen, doorstroomtoets thuis helpen, uitleg voor ouders" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
  <link rel="canonical" href="${SITE}/uitleg-thuis.html" />
  <meta property="og:title" content="Zo leg je het uit — heldere uitleg voor ouders · Leerkwartier" />
  <meta property="og:description" content="In gewone woorden uitleggen aan je kind: ${esc(titels)}. Met een zin die je letterlijk kunt zeggen, de veelgemaakte fout en een voorbeeld. Gratis." />
  <meta property="og:image" content="${SITE}/logo.jpg" />
  <meta property="og:url" content="${SITE}/uitleg-thuis.html" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="nl_NL" />
  <meta property="og:site_name" content="Leerkwartier" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Zo leg je het uit — heldere uitleg voor ouders" />
  <meta name="twitter:description" content="In gewone woorden uitleggen aan je kind, met een zin die je letterlijk kunt zeggen." />
  <title>Zo leg je het uit — heldere uitleg voor ouders (breuken, staartdeling, werkwoordspelling) · Leerkwartier</title>
${jsonLd}
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:linear-gradient(160deg,#0f1729 0%,#162033 50%,#1a2744 100%);min-height:100vh;color:#fff;padding:32px 20px 64px}
    .container{max-width:760px;margin:0 auto}
    .logo{display:flex;align-items:center;gap:12px;margin-bottom:22px}
    .logo-icon{font-size:36px}
    .logo-name{font-size:26px;font-weight:800;color:#00d4ff;letter-spacing:-0.5px}
    .breadcrumb{font-size:13px;color:rgba(255,255,255,0.45);margin-bottom:18px}
    .breadcrumb a{color:rgba(255,255,255,0.55);text-decoration:none}
    h1{font-size:31px;font-weight:800;margin-bottom:14px;line-height:1.22}
    .lead{font-size:18px;line-height:1.6;color:rgba(255,255,255,0.95);margin-bottom:20px}
    .toc{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 26px}
    .toc a{font-size:14px;color:#00d4ff;text-decoration:none;background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.25);border-radius:999px;padding:8px 15px}
    .concept{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:16px;padding:22px 24px;margin:0 0 20px}
    h2{font-size:22px;font-weight:800;color:#fff;margin-bottom:10px;line-height:1.25}
    h3{font-size:15px;font-weight:700;color:#00d4ff;margin:16px 0 6px;text-transform:uppercase;letter-spacing:.03em}
    p{font-size:16px;line-height:1.65;color:rgba(255,255,255,0.85);margin-bottom:12px}
    .intro{font-size:16.5px;color:rgba(255,255,255,0.92)}
    ol{margin:4px 0 14px 20px}
    ol li{font-size:15.5px;line-height:1.6;color:rgba(255,255,255,0.85);padding:4px 0}
    .zeg{background:rgba(105,240,174,0.08);border:1px solid rgba(105,240,174,0.30);border-radius:10px;padding:12px 14px}
    .zeg strong{color:#69f0ae}
    .fout{background:rgba(255,138,101,0.08);border:1px solid rgba(255,138,101,0.30);border-radius:10px;padding:12px 14px}
    .fout strong{color:#ff8a65}
    .voorbeeld strong{color:#ffd54f}
    .woorden{font-size:14px;color:rgba(255,255,255,0.65);border-top:1px dashed rgba(255,255,255,0.14);padding-top:10px}
    .kaartlink a{color:#00d4ff;text-decoration:none;font-weight:700}
    .cta{display:inline-flex;align-items:center;gap:10px;margin:10px 0 4px;padding:15px 30px;background:linear-gradient(135deg,#00c853,#00e676);color:#06211a;text-decoration:none;border-radius:14px;font-size:16px;font-weight:800;box-shadow:0 6px 24px rgba(0,200,83,0.35)}
    .intro-block{background:linear-gradient(135deg,rgba(255,213,79,0.10),rgba(255,170,0,0.07));border:1px solid rgba(255,213,79,0.28);border-radius:14px;padding:16px 20px;margin:16px 0 24px}
    .intro-block strong{color:#ffd54f}
    .back{display:inline-block;margin-top:30px;color:rgba(255,255,255,0.5);text-decoration:none;font-size:14px}
    .disambig{font-size:13px;color:rgba(255,255,255,0.5);font-style:italic;margin-top:30px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08)}
    a.inline{color:#69f0ae;text-decoration:none}
  </style>
</head>
<body>
  <div class="container">
    <div class="logo"><span class="logo-icon">👪</span><span class="logo-name">Leerkwartier</span></div>
    <nav class="breadcrumb" aria-label="kruimelpad"><a href="/">Leerkwartier</a> → Zo leg je het uit</nav>

    <h1>Zo leg je het uit aan je kind</h1>
    <p class="lead">Je kind snapt iets even niet — en jij weet zelf ook niet meer precies hóe je het uitlegt. Heel normaal. Hieronder leggen we de lastigste onderwerpen uit in gewone woorden, met telkens <strong style="color:#fff">een zin die je letterlijk kunt zeggen</strong>, de fout die kinderen het vaakst maken, en een voorbeeld om samen te doen.</p>

    <div class="intro-block">
      <strong>Voor de ouder of verzorger — niet voor het kind.</strong>
      <p style="margin:8px 0 0;font-size:15px;color:rgba(255,255,255,0.85)">Dit is jouw spiekbriefje. Elke uitleg is ook als <a class="inline" href="/ouderkaart">printbare kaart voor op de koelkast</a> beschikbaar. En je kind kan alles gratis <a class="inline" href="/cito">zelf oefenen op Leerkwartier</a> — een kwartier per dag.</p>
    </div>

    <div class="toc">
      ${inhoudsopgave}
    </div>

${concepten.map(conceptHtml).join("\n\n")}

    <a class="cta" href="/cito">🎓 Laat je kind gratis oefenen — 15 min/dag</a>

    <h2 style="margin-top:34px">Waarom uitleggen in gewone woorden werkt</h2>
    <p>Een kind onthoudt iets pas echt als het het snapt — niet als het een truc napapegaait. Door een onderwerp in gewone woorden uit te leggen, het te koppelen aan iets bekends (een pizza, geld, de trap op tellen) en samen één voorbeeld te doen, help je je kind van "ik weet het antwoord" naar "ik snap waaróm". Dat is precies waar Leerkwartier op gebouwd is: bij elke fout uitleg op drie niveaus, zodat een kind zelf ziet waar het misging.</p>

    <a class="back" href="/">← Terug naar Leerkwartier</a>
    <p class="disambig">Leerkwartier.app is een Nederlandse onderwijs-app van Smulsoft voor groep 6-8 en het voortgezet onderwijs. In 2026 is Leerkwartier helemaal gratis; oefenen voor de Doorstroomtoets blijft gratis.</p>
  </div>
</body>
</html>
`;

writeFileSync(OUT, html, "utf8");
console.log(`✓ uitleg-thuis.html gegenereerd (${concepten.length} concepten, ${howTos.length} HowTo-blokken) → ${OUT}`);
