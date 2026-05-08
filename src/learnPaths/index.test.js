import { describe, it, expect } from "vitest";
import { ALL_LEARN_PATHS, findLearnPathForQuestion, levelToBucket, levelsCompatible } from "./index.js";

describe("ALL_LEARN_PATHS", () => {
  it("heeft minstens 25 leerpaden", () => {
    expect(Object.keys(ALL_LEARN_PATHS).length).toBeGreaterThanOrEqual(25);
  });

  it("elk pad heeft id, title, subject, steps, chapters", () => {
    for (const [key, path] of Object.entries(ALL_LEARN_PATHS)) {
      expect(path.id, `pad ${key} mist id`).toBeTruthy();
      expect(path.title, `pad ${key} mist title`).toBeTruthy();
      expect(path.subject, `pad ${key} mist subject`).toBeTruthy();
      expect(Array.isArray(path.steps), `pad ${key} steps is geen array`).toBe(true);
      expect(path.steps.length, `pad ${key} heeft 0 stappen`).toBeGreaterThan(0);
      expect(Array.isArray(path.chapters), `pad ${key} chapters is geen array`).toBe(true);
    }
  });

  it("elke stap heeft title + checks", () => {
    for (const [pathKey, path] of Object.entries(ALL_LEARN_PATHS)) {
      path.steps.forEach((step, i) => {
        expect(step.title, `${pathKey} stap ${i} mist title`).toBeTruthy();
        expect(Array.isArray(step.checks), `${pathKey} stap ${i} checks is geen array`).toBe(true);
      });
    }
  });

  it("alle paden hebben een uniek id", () => {
    const ids = Object.values(ALL_LEARN_PATHS).map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

describe("findLearnPathForQuestion", () => {
  it("returnt null voor lege input", () => {
    expect(findLearnPathForQuestion("")).toBeNull();
    expect(findLearnPathForQuestion(null)).toBeNull();
    expect(findLearnPathForQuestion(undefined)).toBeNull();
  });

  it("vindt iets bij keyword-match in een wiskunde-pad", () => {
    // 'parabool' staat in triggerKeywords van het parabolen-pad
    const result = findLearnPathForQuestion("Wat is een parabool?");
    expect(result).not.toBeNull();
    expect(result.pathId).toBeTruthy();
  });

  it("respecteert allowedSubjects-filter", () => {
    // Een vraag over mediaan zou normaal het wiskunde-statistiek pad raken.
    // Met allowedSubjects=['taal'] mag dat niet gebeuren.
    const wiskundeResult = findLearnPathForQuestion("Wat is de mediaan?", ["wiskunde"]);
    const taalResult = findLearnPathForQuestion("Wat is de mediaan?", ["taal"]);
    expect(wiskundeResult).not.toBeNull();
    // Voor taal moet hij geen wiskunde-pad vinden:
    if (taalResult) {
      // Als hij iets vindt, mag het pad-subject niet wiskunde zijn
      const path = ALL_LEARN_PATHS[taalResult.pathId];
      expect(path.subject).not.toBe("wiskunde");
    }
  });

  it("returnt object met pathId en stepIdx", () => {
    const result = findLearnPathForQuestion("Wat is een parabool?");
    if (result) {
      expect(result).toHaveProperty("pathId");
      expect(result).toHaveProperty("stepIdx");
      expect(typeof result.stepIdx).toBe("number");
    }
  });

  it("blokkeert PO-quiz van VO-pad via niveau-filter", () => {
    // Groep 4 leerling met rekenvraag over verhoudingen mag NIET in
    // verhoudingen-pad (level: klas1-vwo) belanden — dat is de bug van
    // 2026-05-08 die we hier voorkomen.
    const result = findLearnPathForQuestion(
      "Wat is een goede verhouding van siroop en water?",
      ["wiskunde"],
      "groep4",
    );
    if (result) {
      const path = ALL_LEARN_PATHS[result.pathId];
      // Pad mag niet vo-niveau hebben
      expect(levelToBucket(path.level)).not.toBe("vo-onder");
      expect(levelToBucket(path.level)).not.toBe("vo-boven");
    }
  });
});

describe("levelToBucket", () => {
  it("groep* → po", () => {
    expect(levelToBucket("groep4")).toBe("po");
    expect(levelToBucket("groep5-7")).toBe("po");
    expect(levelToBucket("groep8")).toBe("po");
  });
  it("klas1-3 / klas1-vwo → vo-onder", () => {
    expect(levelToBucket("klas1-vwo")).toBe("vo-onder");
    expect(levelToBucket("klas2-3")).toBe("vo-onder");
    expect(levelToBucket("klas3")).toBe("vo-onder");
  });
  it("havo4-5 / vwo5-6 / vmbo-gt-4 → vo-boven", () => {
    expect(levelToBucket("havo4-5")).toBe("vo-boven");
    expect(levelToBucket("havo4-5-vwo")).toBe("vo-boven");
    expect(levelToBucket("vmbo-gt-4")).toBe("vo-boven");
  });
  it("nvt of leeg → null", () => {
    expect(levelToBucket("nvt")).toBeNull();
    expect(levelToBucket("")).toBeNull();
    expect(levelToBucket(null)).toBeNull();
  });
});

describe("levelsCompatible", () => {
  it("zelfde bucket → compatible", () => {
    expect(levelsCompatible("groep4", "groep5-7")).toBe(true);
    expect(levelsCompatible("klas1", "klas2-3")).toBe(true);
    expect(levelsCompatible("havo4", "vwo5")).toBe(true);
  });
  it("verschillende bucket → niet compatible", () => {
    expect(levelsCompatible("groep4", "klas1-vwo")).toBe(false);
    expect(levelsCompatible("klas1", "havo4-5")).toBe(false);
  });
  it("onbekende kant → fallback compatible", () => {
    expect(levelsCompatible(null, "klas1")).toBe(true);
    expect(levelsCompatible("groep4", null)).toBe(true);
  });
});
