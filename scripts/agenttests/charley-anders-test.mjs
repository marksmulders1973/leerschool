// Stuurt de situatie van Marks schermafbeelding (29 sep 2026) naar de live tutor: "Leg het anders uit" bij de pacing-vraag.
const BASE = process.env.BASE || "https://leerkwartier.app";
const body = {
  messages: [{ role: "user", content: "Leg het anders uit" }],
  context: {
    pathId: "cito-strategieen-groep8", pathTitle: "Doorstroomtoets — strategieën groep 8", stepTitle: "Tijd-management — pacing",
    stepExplanation: "Bij vastlopen: sla de vraag over en kom aan het einde terug. Liever 2 vragen verderop dan 5 minuten op 1 vraag.",
    currentCheckQuestion: "Wat doe je als je vastloopt op een moeilijke vraag?",
    checkOptions: ["Overslaan en aan het einde terugkomen", "Blijven proberen tot je het weet", "Gokken en nooit meer terugkijken", "Stoppen met de toets"],
    weetjes: { leeftijd: 11 },
  },
};
await new Promise((r) => setTimeout(r, +(process.env.WACHT || 0)));
for (let i = 0; i < +(process.env.N || 4); i++) {
  const r = await fetch(BASE + "/api/tutor-chat", { method: "POST", headers: { "content-type": "application/json", origin: "https://leerkwartier.app", referer: "https://leerkwartier.app/leren/pad" }, body: JSON.stringify(body) });
  const j = await r.json().catch(() => ({}));
  console.log(`--- ${i + 1} (${r.status}, ${j.provider || "?"})\n${j.reply || JSON.stringify(j).slice(0, 200)}`);
}
