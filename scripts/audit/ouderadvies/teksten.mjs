// Schrijft docs/audit/OUDERADVIES-TEKSTEN.md uit de échte teksten-code
// (src/features/ouder/ouderadvies/teksten.js), per groep 3 t/m 8 en brugklas.
// Gebruik: node scripts/audit/ouderadvies/teksten.mjs
import { writeFileSync } from "node:fs";
import { teksten, blokNamen } from "../../../src/features/ouder/ouderadvies/teksten.js";
import { GROEPEN } from "../../../src/features/ouder/ouderadvies/nulmeting.js";

const NAAM = "Sam";
const uitvoer = (v) => (typeof v === "function" ? (v.length >= 2 ? v("rekenen", "wankel") : v(2)) : v);
const voorbeeld = { voorlopig: 'voorbeeld: vak = "rekenen", uitslag = "wankel"', wachtOpBlok: "voorbeeld: blok 2", blokKop: "voorbeeld: blok 2", knopVerder: "voorbeeld: blok 2", blokKlaar: "voorbeeld: blok 2", nogEen: "voorbeeld: volgend blok 2", vraagVan: "voorbeeld: 1 van 3" };
const fmt = (v, k) => {
  if (typeof v === "function") {
    const r = k === "vraagVan" ? v(1, 3) : v.length >= 2 ? v("rekenen", "wankel") : v(2);
    return `${r}  _(${voorbeeld[k] || "met voorbeeldwaarde"})_`;
  }
  return v;
};
function sectie(obj, prefix = "") {
  const r = [];
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === "object" && typeof v !== "function") {
      r.push(`- **${prefix}${k}**:`);
      for (const [k2, v2] of Object.entries(v)) r.push(`  - ${k2}: ${fmt(v2, k2)}`);
    } else r.push(`- **${prefix}${k}**: ${fmt(v, k)}`);
  }
  return r.join("\n");
}

const md = [];
md.push("# Ouderadvies — alle schermteksten per groep");
md.push("");
md.push(`Gegenereerd op ${new Date().toISOString().slice(0, 10)} uit \`src/features/ouder/ouderadvies/teksten.js\` met \`node scripts/audit/ouderadvies/teksten.mjs\`. Voorbeeldnaam: **${NAAM}**. Niets hiervan staat live; alles wacht op akkoord van de maker.`);
md.push("");
md.push("Regels die de teksten volgen: B1, je-vorm, meedenkend en zonder verkoop of schuldgevoel; \"ouder of verzorger\" in plaats van alleen \"ouder\"; vijf minuten zegt alleen *gaat goed / wankel / nog niet* (nooit een cijfer of niveau); contact hallo@leerkwartier.app; gratis oefenen gegarandeerd t/m 2031; nooit \"altijd gratis\"; geen concurrenten bij naam. De prijs (Familie €39 per 12 maanden) staat bewust níét in dit spoor: het advies is geen verkoopmoment.");
md.push("");
md.push("## Wat verschilt per groep (overzicht)");
md.push("");
md.push("| Groep | Blok 1 | Blok 2 | Blok 3 | Kind-welkom |");
md.push("|---|---|---|---|---|");
for (const g of GROEPEN) {
  const b = blokNamen(g);
  md.push(`| ${g === "brugklas" ? "brugklas" : "groep " + g} | ${b[0].kind} | ${b[1].kind} | ${b[2].kind} | ${teksten(g, NAAM).kind.welkom} |`);
}
md.push("");
md.push("De voorstellen zelf (welke lessen) staan per groep in `docs/audit/ouderadvies/drietal-per-groep.txt`.");
for (const g of GROEPEN) {
  const T = teksten(g, NAAM);
  md.push("");
  md.push(`## ${g === "brugklas" ? "Brugklas" : "Groep " + g}`);
  md.push("");
  md.push("### Voor de ouder of verzorger");
  md.push(sectie(T.ouder));
  md.push("");
  md.push("### Voor het kind (nulmeting)");
  md.push(sectie(T.kind));
  if (g === GROEPEN[0]) {
    md.push("");
    md.push("### Wie oefent er? (gedeeld apparaat) — gelijk voor alle groepen");
    md.push(sectie(T.profielen));
    md.push("");
    md.push("### Koppelen (eigen telefoon, school) — gelijk voor alle groepen");
    md.push(sectie(T.koppelen));
  }
}
md.push("");
md.push("## Teksten die in de bestaande app zijn aangepast (koppelcode-fouten)");
md.push("");
md.push("Alleen waar de tekst fout was (verwees naar een knop die niet bestaat):");
md.push("");
md.push("| Plek | Vóór | Na |");
md.push("|---|---|---|");
md.push("| Gezinsstart stap 3 en kind-kaart (OuderInzicht) | In de app: **Koppel met ouder**, code invoeren, klaar. | In de app: **Code gekregen?**, code invoeren, klaar. |");
md.push("| WhatsApp-bericht met code | …en voer deze koppelcode in bij 'Koppel met ouder': | …tik op 'Code gekregen?' en vul deze koppelcode in: |");
md.push("| WhatsApp-herinnering | Open de app en voer 'm in bij 'Koppel met ouder' 😊 | Open de app, tik op 'Code gekregen?' en vul 'm in 😊 |");
md.push("| Mail met code | …en voer de koppelcode X in bij 'Koppel met ouder'. | …tik op 'Code gekregen?' en vul de koppelcode X in. |");
md.push("| Kaart 'Nog niet bevestigd' | …invoeren bij **Instellingen → Koppel met ouder**. | …invoeren bij **Code gekregen?** (startpagina) of **Koppelcode van thuis of school?** (eigen pagina). |");
md.push("| Herstel-code-uitleg | (bij **Koppel met ouder**) | (bij **Code gekregen?**) |");
md.push("| App-gids (vraag over koppelen) | Tik op \"Voeg je kind toe\" … (bij \"Koppel met ouder\") | Vul de voornaam en groep van je kind in en kies bij de vraag over het apparaat \"Nee, op een ander apparaat\" … (bij \"Code gekregen?\" op de startpagina) |");
md.push("| Kind-banner, nieuw | — | Deze code is al gebruikt, maar je bent op dit apparaat al gekoppeld. Je hoeft niets meer te doen. |");
md.push("");
writeFileSync("docs/audit/OUDERADVIES-TEKSTEN.md", md.join("\n") + "\n");
console.log("geschreven: docs/audit/OUDERADVIES-TEKSTEN.md", md.length, "regels");
