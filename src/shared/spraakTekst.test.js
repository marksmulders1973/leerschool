import { describe, it, expect } from "vitest";
import { schoonVoorSpraak } from "./spraakTekst.js";

describe("schoonVoorSpraak", () => {
  it("stript emoji's zodat de stem geen 'hond' zegt bij 🐕", () => {
    expect(schoonVoorSpraak("Oké Brian, ik snap dat het raar voelt! 🐕")).toBe(
      "Oké Brian, ik snap dat het raar voelt!"
    );
  });

  it("stript ook samengestelde en gevarieerde emoji's", () => {
    expect(schoonVoorSpraak("Goed zo! 👍🏽 Ga door ✨ 🇳🇱 1️⃣")).toBe("Goed zo! Ga door 1");
  });

  it("vervangt 'vs' door 'of' (reis vs rijst)", () => {
    expect(schoonVoorSpraak("reis vs rijst")).toBe("reis of rijst");
    expect(schoonVoorSpraak("reis vs. rijst")).toBe("reis of rijst");
  });

  it("laat hoofdletter-VS (Verenigde Staten) en woorden met vs erin met rust", () => {
    expect(schoonVoorSpraak("de VS is een groot land")).toBe("de VS is een groot land");
    expect(schoonVoorSpraak("vsst is geen woord")).toBe("vsst is geen woord");
  });

  it("stript markdown-tekens zoals de oude speak() deed", () => {
    expect(schoonVoorSpraak("**Goed** gedaan `Brian`!")).toBe("Goed gedaan Brian!");
  });

  it("kan tegen lege of rare invoer", () => {
    expect(schoonVoorSpraak("")).toBe("");
    expect(schoonVoorSpraak(null)).toBe("");
    expect(schoonVoorSpraak("🐕🐕🐕")).toBe("");
  });
});
