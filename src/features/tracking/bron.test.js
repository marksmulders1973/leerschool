import { describe, it, expect, vi } from "vitest";

vi.mock("../../utils.js", () => ({ track: () => true }));

import { schoonLabel } from "./bron.js";

// Idee 10 (15 okt 2026): de punt achter een link in een mail splitste één bron in
// twee labels. Leestekens aan begin en eind moeten weg, de rest blijft gelijk.
describe("schoonLabel", () => {
  it("haalt een punt aan het eind weg", () => {
    expect(schoonLabel("bibliotheek.")).toBe("bibliotheek");
  });
  it("haalt meerdere leestekens aan begin en eind weg", () => {
    expect(schoonLabel("..gezin-_.")).toBe("gezin");
  });
  it("laat punten en streepjes in het midden staan", () => {
    expect(schoonLabel("facebook-ad")).toBe("facebook-ad");
    expect(schoonLabel("site.nl")).toBe("site.nl");
  });
  it("haalt vreemde tekens weg zoals voorheen", () => {
    expect(schoonLabel("bso!? ")).toBe("bso");
  });
  it("lege invoer blijft leeg", () => {
    expect(schoonLabel("")).toBe("");
    expect(schoonLabel(null)).toBe("");
  });
});
