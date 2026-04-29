import { describe, it, expect } from "vitest";
import { ALL_LEARN_PATHS, findLearnPathForQuestion } from "./index.js";

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
});
