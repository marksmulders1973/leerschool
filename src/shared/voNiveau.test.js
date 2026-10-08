import { describe, it, expect } from "vitest";
import { padPastBijSchoolType, voLabel, maxJaar, voKeuzes } from "./voNiveau.js";

describe("voNiveau (Noa 8 okt 2026: niveau + leerjaar)", () => {
  it("leerjaren per niveau: mavo 4, havo 5, vwo 6", () => {
    expect(maxJaar("vmbo-gt")).toBe(4);
    expect(maxJaar("mavo")).toBe(4);
    expect(maxJaar("havo")).toBe(5);
    expect(maxJaar("vwo")).toBe(6);
    expect(maxJaar("gym")).toBe(6);
  });
  it("labels", () => {
    expect(voLabel("vmbo-gt", 2)).toBe("Mavo 2");
    expect(voLabel("havo", 4)).toBe("Havo 4");
    expect(voLabel("havo-vwo", 1)).toBe("Brugklas havo/vwo, klas 1");
    expect(voLabel("havo-vwo", 5)).toBe("Havo/vwo 5");
    expect(voLabel("", 3)).toBe("Klas 3");
  });
  it("mavo krijgt geen havo/vwo-paden, wel gemengde en vmbo-paden", () => {
    expect(padPastBijSchoolType("havo4-5-vwo", "vmbo-gt")).toBe(false);
    expect(padPastBijSchoolType("havo-vwo-4-5", "mavo")).toBe(false);
    expect(padPastBijSchoolType("vmbo-gt-4", "vmbo-gt")).toBe(true);
    expect(padPastBijSchoolType("klas2-3-vmbo-vwo", "vmbo-gt")).toBe(true);
    expect(padPastBijSchoolType("klas1-2", "vmbo-bk")).toBe(true);
  });
  it("havo/vwo-paden voor havo en vwo, niet vwo-only voor havo", () => {
    expect(padPastBijSchoolType("havo4-5-vwo", "havo")).toBe(true);
    expect(padPastBijSchoolType("vwo", "havo")).toBe(false);
    expect(padPastBijSchoolType("vwo", "vwo")).toBe(true);
    expect(padPastBijSchoolType("klas1-vwo", "havo-vwo")).toBe(true);
    expect(padPastBijSchoolType("vmbo-gt-4", "vmbo-bk")).toBe(false);
  });
  it("zonder bekend niveau (oud profiel) past alles", () => {
    expect(padPastBijSchoolType("havo4-5-vwo", "")).toBe(true);
    expect(padPastBijSchoolType("vmbo-gt-4", "brugklas")).toBe(true);
  });
  it("keuzelijst: 4+4+5+6+2+2 opties", () => {
    expect(voKeuzes().reduce((n, g) => n + g.opties.length, 0)).toBe(23);
  });
});
