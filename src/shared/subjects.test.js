import { describe, it, expect } from "vitest";
import { SUBJECTS, subjectMeta, subjectsLabel, subjectsEmoji } from "./subjects.js";

describe("SUBJECTS", () => {
  it("bevat alle 14 leerpad-subjects", () => {
    const expected = [
      "wiskunde",
      "taal",
      "engels",
      "biologie",
      "geschiedenis",
      "aardrijkskunde",
      "natuurkunde",
      "scheikunde",
      "economie",
      "beco",
      "duits",
      "frans",
      "maatschappijleer",
      "natuur",
    ];
    for (const key of expected) {
      expect(SUBJECTS[key], `mist ${key}`).toBeDefined();
    }
  });

  it("elk subject heeft title + emoji", () => {
    for (const [key, meta] of Object.entries(SUBJECTS)) {
      expect(meta.title, `${key} mist title`).toBeTruthy();
      expect(meta.emoji, `${key} mist emoji`).toBeTruthy();
    }
  });
});

describe("subjectMeta", () => {
  it("geeft het juiste object voor bekende subject", () => {
    expect(subjectMeta("wiskunde")).toEqual({ title: "Wiskunde", emoji: "📐" });
    expect(subjectMeta("taal").title).toBe("Nederlands");
  });

  it("geeft een fallback voor onbekend subject", () => {
    const fb = subjectMeta("onbekend");
    expect(fb.title).toBe("onbekend");
    expect(fb.emoji).toBeTruthy();
  });

  it("geeft fallback voor null/undefined zonder crash", () => {
    expect(subjectMeta(null).title).toBe("Vak");
    expect(subjectMeta(undefined).title).toBe("Vak");
  });
});

describe("subjectsLabel", () => {
  it("één subject → enkele titel", () => {
    expect(subjectsLabel("wiskunde")).toBe("Wiskunde");
    expect(subjectsLabel(["taal"])).toBe("Nederlands");
  });

  it("meerdere subjects → samengevoegd met +", () => {
    expect(subjectsLabel(["biologie", "natuurkunde", "scheikunde"])).toBe(
      "Biologie + Natuurkunde + Scheikunde"
    );
  });

  it("lege input → lege string", () => {
    expect(subjectsLabel(null)).toBe("");
    expect(subjectsLabel([])).toBe("");
  });
});

describe("subjectsEmoji", () => {
  it("één subject → eigen emoji", () => {
    expect(subjectsEmoji("wiskunde")).toBe("📐");
  });

  it("meerdere subjects → bundle-emoji", () => {
    expect(subjectsEmoji(["biologie", "natuurkunde"])).toBe("🔬");
  });
});
