import { describe, it, expect, vi } from "vitest";

vi.mock("../supabase.js", () => ({ default: {} }));
vi.mock("../utils.js", () => ({ track: () => {} }));

import { maandagVan, weekDagen, vandaagUitPlan, lessenVoor, groepNr, isoDag, PLANNER_VAKKEN } from "./weekplan.js";
import pathManifest from "../learnPaths/pathManifest.generated.json";

describe("weekplanner — datums", () => {
  it("maandag van de week, ook op zondag", () => {
    expect(isoDag(maandagVan(new Date(2026, 10, 9)))).toBe("2026-11-09"); // ma
    expect(isoDag(maandagVan(new Date(2026, 10, 15)))).toBe("2026-11-09"); // zo
    expect(isoDag(maandagVan(new Date(2026, 10, 16)))).toBe("2026-11-16"); // ma erna
  });
  it("zeven dagen ma t/m zo", () => {
    const w = weekDagen(new Date(2026, 10, 9));
    expect(w.map((d) => d.kort)).toEqual(["ma", "di", "wo", "do", "vr", "za", "zo"]);
    expect(w[0].iso).toBe("2026-11-09");
    expect(w[6].iso).toBe("2026-11-15");
  });
  it("vandaag uit het plan", () => {
    const rijen = [{ dag: "2026-11-09", soort: "les" }, { dag: "2026-11-10", soort: "charley" }];
    expect(vandaagUitPlan(rijen, new Date(2026, 10, 10, 18, 0))?.soort).toBe("charley");
    expect(vandaagUitPlan(rijen, new Date(2026, 10, 12))).toBeNull();
  });
});

describe("weekplanner — lesvoorstellen", () => {
  const ids = new Set(pathManifest.map((p) => p.id));
  it("groep uit allerlei vormen", () => {
    expect(groepNr("7")).toBe(7);
    expect(groepNr("groep 3")).toBe(3);
    expect(groepNr("brugklas")).toBeNull();
    expect(groepNr(null)).toBeNull();
  });
  it("voor elk vak en groep 3-8 bestaande lessen, geen nieuwkomer-paden", () => {
    for (const vak of PLANNER_VAKKEN) {
      for (let g = 3; g <= 8; g++) {
        const l = lessenVoor(vak.key, g);
        for (const x of l) {
          expect(ids.has(x.id)).toBe(true);
          expect(x.id).not.toMatch(/nieuwkomer/);
        }
      }
    }
    expect(lessenVoor("rekenen", 7).length).toBeGreaterThan(3);
    expect(lessenVoor("spelling", 7).length).toBeGreaterThan(1);
    expect(lessenVoor("lezen", 6).length).toBeGreaterThan(2);
  });
});
