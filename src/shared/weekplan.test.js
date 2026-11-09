import { describe, it, expect, vi } from "vitest";

vi.mock("../supabase.js", () => ({ default: {} }));
vi.mock("../utils.js", () => ({ track: () => {} }));

import { maandagVan, weekDagen, vandaagUitPlan, vandaagItems, perDagUitPlan, lessenVoor, lesVak, startsetUit, groepNr, isoDag, PLANNER_VAKKEN } from "./weekplan.js";
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
  it("twee ouders op één dag: eerst wat nog open staat, dag pas groen als alles gedaan is", () => {
    const rijen = [
      { id: "a", dag: "2026-11-10", soort: "les", gedaan: true },
      { id: "b", dag: "2026-11-10", soort: "charley", gedaan: false },
      { id: "c", dag: "2026-11-11", soort: "les", gedaan: true },
    ];
    const nu = new Date(2026, 10, 10, 9, 0);
    expect(vandaagItems(rijen, nu).length).toBe(2);
    expect(vandaagUitPlan(rijen, nu).id).toBe("b");
    expect(perDagUitPlan(rijen)["2026-11-10"].gedaan).toBe(false);
    expect(perDagUitPlan(rijen)["2026-11-11"].gedaan).toBe(true);
    expect(vandaagUitPlan([rijen[0]], nu).id).toBe("a");
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
          if (x.startset) expect(startsetUit(x.id)).toBe(x.startset);
          else expect(ids.has(x.id)).toBe(true);
          expect(x.id).not.toMatch(/nieuwkomer/);
        }
      }
    }
    expect(lessenVoor("rekenen", 7).length).toBeGreaterThan(3);
    expect(lessenVoor("spelling", 7).length).toBeGreaterThan(1);
    expect(lessenVoor("lezen", 6).length).toBeGreaterThan(2);
  });
  it("groep 3 en 4 hebben bij rekenen, taal en spelling altijd iets te kiezen (de eerste 20 vragen)", () => {
    for (const g of [3, 4]) {
      for (const vak of ["rekenen", "taal", "spelling"]) {
        const l = lessenVoor(vak, g);
        expect(l[0]?.startset).toBe(`${g}|${vak}`);
      }
    }
    expect(lesVak("startset:3|rekenen")).toBe("rekenen");
    expect(startsetUit("startset:9|rekenen")).toBeNull();
    expect(startsetUit("breuken-po")).toBeNull();
  });
  it("leerpaden: de kortste eerst", () => {
    const paden = lessenVoor("rekenen", 6).filter((x) => !x.startset);
    for (let i = 1; i < paden.length; i++) expect(paden[i].minuten).toBeGreaterThanOrEqual(paden[i - 1].minuten);
  });
});
