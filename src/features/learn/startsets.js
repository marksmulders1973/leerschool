// 🎯 Startsets — de vragen zelf ophalen (zie startsetsData.js voor de lijsten).
// Elke vraag komt via buildTopicQuiz uit zijn eigen leerpad (zelfde plaatjes, leesteksten,
// uitlegPad en optie-schudden als overal), maar in de vaste volgorde van het bestand en
// zonder de "ongezien eerst"-herschikking: de set ligt vast. Beantwoorde vragen worden
// via geziendeVragen.js onthouden, zodat een kind verdergaat waar het was.

import { buildTopicQuiz } from "../practice/buildTopicQuiz.js";
import { isGezien } from "../../shared/geziendeVragen.js";
import { STARTSET_N, startsetVan } from "./startsetsData.js";

const cache = new Map();

/** Alle vragen van de startset, in volgorde (max STARTSET_N). Elke vraag heeft pathId + geziensleutel. */
export async function startsetVragen(sleutel) {
  const s = startsetVan(sleutel);
  if (!s) return [];
  if (cache.has(sleutel)) return cache.get(sleutel);
  const groep = Number(String(sleutel).split("|")[0]) || null;
  const uit = [];
  for (const it of s.items) {
    try {
      const { quiz, questions } = await buildTopicQuiz({ pathId: it.pad, stapIndexen: [it.stap - 1], shuffleQuestions: false, groep });
      const opVolgorde = [...questions].sort((a, b) => (a.volgnr ?? 0) - (b.volgnr ?? 0));
      // Dezelfde vraagtekst vaker in een pad (klokkijken: "Hoe laat is het?" met steeds een andere klok):
      // de gezien-sleutel is een hash van de tekst, dus die krijgt hier een volgnummer erbij, anders
      // telt één beantwoorde klokvraag als "allemaal gezien".
      for (const q of opVolgorde.slice(0, it.n)) {
        let sleutelUniek = q.geziensleutel;
        for (let k = 2; uit.some((u) => u.geziensleutel === sleutelUniek); k++) sleutelUniek = `${q.geziensleutel}#${k}`;
        uit.push({ ...q, geziensleutel: sleutelUniek, pathId: it.pad, padTitel: quiz.title });
      }
    } catch {
      // Pad of stap niet gevonden: de set is dan korter — de test (startsets.test.js) vangt dit vóór een uitrol.
    }
  }
  const set = uit.slice(0, STARTSET_N);
  cache.set(sleutel, set);
  return set;
}

/** { totaal, gedaan, klaar } — hoeveel van de startset dit apparaat al beantwoordde. */
export async function startsetVoortgang(sleutel) {
  const set = await startsetVragen(sleutel);
  const gedaan = set.filter((q) => q.geziensleutel && isGezien(q.geziensleutel)).length;
  return { totaal: set.length, gedaan, klaar: set.length > 0 && gedaan >= set.length };
}

/** De volgende `n` vragen voor een blokje: eerst nog niet beantwoorde, anders (set af) de eerste. */
export async function startsetVolgende(sleutel, n = 5) {
  const set = await startsetVragen(sleutel);
  const open = set.filter((q) => !(q.geziensleutel && isGezien(q.geziensleutel)));
  return (open.length ? open : set).slice(0, n);
}
