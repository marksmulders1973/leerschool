// Na een modelwissel: de drie Charley-routes live één keer aanroepen en provider + antwoord tonen.
const BASE = process.env.BASE || "https://leerkwartier.app";
const H = { "content-type": "application/json", origin: "https://leerkwartier.app", referer: "https://leerkwartier.app/" };
await new Promise((r) => setTimeout(r, +(process.env.WACHT || 0)));
const calls = [
  ["tutor-chat", { messages: [{ role: "user", content: "Leg het anders uit" }], context: { pathId: "verhoudingen-po", pathTitle: "Verhoudingen", stepTitle: "Verhoudingstabel", stepExplanation: "1 klas heeft 5 tafels, 3 klassen 15 tafels.", currentCheckQuestion: "In 1 klas staan 5 tafels. Hoeveel tafels staan er in 4 klassen?", checkOptions: ["20", "9", "15", "25"], weetjes: { leeftijd: 10 } } }],
  ["buddy-chat", { messages: [{ role: "user", content: "hoi charley, wat vind jij het leukste in het park?" }], context: { buddyNaam: "Charley", buddySoort: "hond" } }],
  ["charley-hulp", { vraag: "hoe kan ik mijn park delen met een vriend?" }],
];
for (const [ep, body] of calls) {
  const t0 = Date.now();
  const r = await fetch(`${BASE}/api/${ep}`, { method: "POST", headers: H, body: JSON.stringify(body) });
  const j = await r.json().catch(() => ({}));
  console.log(`--- ${ep} (${r.status}, ${j.provider || "?"}, ${Date.now() - t0} ms)\n${j.reply || JSON.stringify(j).slice(0, 200)}`);
}
