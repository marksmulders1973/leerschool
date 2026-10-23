import { describe, it, expect, vi } from "vitest";
vi.mock("../supabase.js", () => ({ default: { rpc: vi.fn(), from: vi.fn() } }));
import { schoonBericht, BERICHT_ZINNEN, MAX_BERICHT } from "./thuisBericht.js";

describe("bericht van thuis — schoonBericht", () => {
  it("spaties en regeleinden weg, max 140 tekens, leeg = null", () => {
    expect(schoonBericht("  Goed   bezig!\n\nTrots ")).toBe("Goed bezig! Trots");
    expect(schoonBericht("x".repeat(300))).toHaveLength(MAX_BERICHT);
    expect(schoonBericht("   ")).toBe(null);
    expect(schoonBericht(null)).toBe(null);
  });
  it("de kant-en-klare zinnen passen allemaal", () => {
    for (const z of BERICHT_ZINNEN) expect(schoonBericht(z)).toBe(z);
  });
});
