import { describe, it, expect } from "vitest";
import {
  categoryToLearnSubject,
  categoryToLearnSubjects,
  hasLearnPathsForCategory,
  countLearnPathsForCategory,
} from "./subjectMapping.js";

describe("categoryToLearnSubjects", () => {
  it("returnt array van één voor enkelvoudige mapping", () => {
    expect(categoryToLearnSubjects("wiskunde")).toEqual(["wiskunde"]);
    expect(categoryToLearnSubjects("nederlands")).toEqual(["taal"]);
    expect(categoryToLearnSubjects("engels")).toEqual(["engels"]);
  });

  it("returnt array van meerdere voor bundle-mapping", () => {
    expect(categoryToLearnSubjects("nask")).toEqual(["biologie", "natuurkunde", "scheikunde"]);
    expect(categoryToLearnSubjects("natuur")).toContain("biologie");
    expect(categoryToLearnSubjects("natuur")).toContain("aardrijkskunde");
  });

  it("returnt lege array voor onbekende categorie", () => {
    expect(categoryToLearnSubjects("onbekend")).toEqual([]);
    expect(categoryToLearnSubjects("")).toEqual([]);
    expect(categoryToLearnSubjects(null)).toEqual([]);
  });

  it("mapt PO-varianten naar dezelfde subject", () => {
    expect(categoryToLearnSubjects("aardrijkskunde-po")).toEqual(["aardrijkskunde"]);
    expect(categoryToLearnSubjects("geschiedenis-po")).toEqual(["geschiedenis"]);
    expect(categoryToLearnSubjects("engels-po")).toEqual(["engels"]);
  });
});

describe("categoryToLearnSubject (legacy single-value)", () => {
  it("returnt enkele waarde of array zoals geconfigureerd", () => {
    expect(categoryToLearnSubject("wiskunde")).toBe("wiskunde");
    expect(categoryToLearnSubject("nask")).toEqual(["biologie", "natuurkunde", "scheikunde"]);
  });

  it("returnt null voor onbekende", () => {
    expect(categoryToLearnSubject("onbekend")).toBeNull();
  });
});

describe("hasLearnPathsForCategory", () => {
  it("true voor wiskunde (heeft veel paden)", () => {
    expect(hasLearnPathsForCategory("wiskunde")).toBe(true);
  });

  it("true voor nederlands (heeft taal-paden)", () => {
    expect(hasLearnPathsForCategory("nederlands")).toBe(true);
  });

  it("false voor onbekende categorie", () => {
    expect(hasLearnPathsForCategory("onbekend")).toBe(false);
  });

  it("true voor nask (gebundelde subjects bevat paden)", () => {
    expect(hasLearnPathsForCategory("nask")).toBe(true);
  });
});

describe("countLearnPathsForCategory", () => {
  it("telt meer dan 0 paden voor wiskunde", () => {
    expect(countLearnPathsForCategory("wiskunde")).toBeGreaterThan(0);
  });

  it("telt 0 voor onbekende categorie", () => {
    expect(countLearnPathsForCategory("onbekend")).toBe(0);
  });

  it("nask telt som van bio + nat + sch paden", () => {
    const nask = countLearnPathsForCategory("nask");
    const bio = countLearnPathsForCategory("biologie");
    expect(nask).toBeGreaterThanOrEqual(bio);
  });
});
