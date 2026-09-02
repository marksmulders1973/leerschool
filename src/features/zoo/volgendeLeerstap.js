// 🧭 Eén kiezer voor "wat moet ik nu leren?" in het park (samenhang-plan
// 2 sep 2026, sprint 2). Vóór dit bestand gaven de leer-invite, het
// maatje-praatje en de AI-chat een ánder antwoord (recommendNextTopic) dan de
// wandeling (klaargezet → herhaling → zwak). Nu één volgorde, één bron:
//
//   1. wat juf/thuis heeft klaargezet (💛)      → reden "klaargezet-juf"/"-thuis"
//   2. herhaling die eraan toe is (spaced rep.) → reden "herhalen"
//   3. zwakste concepten uit de mastery         → reden "oefenen"
//
// De wandeling gebruikt de hele lijst (3 stops), de invite/chat het eerste item.

import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { loadMasteryForPlayer, loadDueTopics } from "../mastery/mastery.js";
import { kiesZwakkeConcepten } from "../oefenboekje/opMaat.js";
import { haalKlaargezetVoorKind } from "../../shared/ouderKlaargezet.js";

const titelVan = (pathId) => pathManifest.find((p) => p.id === pathId)?.title || pathId;

/** Alle kandidaten op volgorde van belang: [{ pathId, reden, title }]. */
export async function haalLeerKandidaten(naam, userId = null) {
  if (!naam) return [];
  try {
    const [klaargezet, due, recs] = await Promise.all([
      haalKlaargezetVoorKind(naam).catch(() => []),
      loadDueTopics(naam).catch(() => []),
      loadMasteryForPlayer(naam, userId).catch(() => []),
    ]);
    const zwak = kiesZwakkeConcepten(recs || [], { maxConcepten: 4 });
    const lijst = [
      ...(klaargezet || []).filter((k) => !k.gedaan && k.path_id).map((k) => ({ pathId: k.path_id, reden: k.bron === "leraar" ? "klaargezet-juf" : "klaargezet-thuis" })),
      ...(due || []).map((d) => ({ pathId: d.pathId, reden: "herhalen" })),
      ...(zwak || []).map((z) => ({ pathId: z.id, reden: "oefenen" })),
    ];
    // Dubbele paden eruit (zelfde pad kan klaargezet én zwak zijn) — eerste wint.
    const gezien = new Set();
    return lijst.filter((k) => k.pathId && !gezien.has(k.pathId) && gezien.add(k.pathId)).map((k) => ({ ...k, title: titelVan(k.pathId) }));
  } catch {
    return [];
  }
}

/** Zin voor het maatje bij een kandidaat — in kind-taal, met de reden erin. */
export function leerZinVoor(kandidaat, maatjeNaam = "Je maatje") {
  if (!kandidaat) return null;
  const t = kandidaat.title || "iets nieuws";
  switch (kandidaat.reden) {
    case "klaargezet-juf": return `Je juf of meester heeft "${t}" voor je klaargezet. Zullen we? Dan verdien je meteen munten 🪙`;
    case "klaargezet-thuis": return `Thuis staat "${t}" voor je klaar 💛 Zullen we die samen doen? Munten erbij 🪙`;
    case "herhalen": return `"${t}" zakt een beetje weg — een kwartier herhalen en het zit weer vast. Munten erbij 🪙`;
    case "oefenen": return `"${t}" vind je nog lastig. Samen oefenen? Elke stap = munten voor je park 🪙`;
    default: return `Zullen we "${t}" oefenen? Dan verdien je munten voor je park 🪙`;
  }
}
