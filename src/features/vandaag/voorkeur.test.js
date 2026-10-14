// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { vakOptiesVoor, wisselVakKeuze, MAX_FAVORIET, MAX_VAKKEN } from "./voorkeur.js";

const ids = (l) => l.map((v) => v.id);

describe("vakOptiesVoor", () => {
  it("groep 8: basisschoolvakken mét Doorstroomtoets, zonder tafels/VO-vakken", () => {
    const l = ids(vakOptiesVoor("groep8"));
    expect(l).toContain("doorstroomtoets"); expect(l).toContain("studievaardigheden"); expect(l).toContain("engels");
    expect(l).not.toContain("tafels"); expect(l).not.toContain("wiskunde"); expect(l).not.toContain("biologie");
  });
  it("groep 4: tafels wel, Doorstroomtoets en studievaardigheden niet", () => {
    const l = ids(vakOptiesVoor("groep4"));
    expect(l).toContain("tafels"); expect(l).not.toContain("doorstroomtoets"); expect(l).not.toContain("studievaardigheden");
  });
  it("onbekend niveau = basisschool zonder groepsbeperking", () => {
    const l = ids(vakOptiesVoor(""));
    expect(l).toContain("rekenen"); expect(l).toContain("doorstroomtoets"); expect(l).not.toContain("wiskunde");
  });
  it("middelbare school: VO-vakken, examens pas vanaf klas 3", () => {
    expect(ids(vakOptiesVoor("klas1|havo"))).not.toContain("examens");
    const l = ids(vakOptiesVoor("klas4|havo"));
    expect(l).toContain("wiskunde"); expect(l).toContain("examens"); expect(l).toContain("engels"); expect(l).not.toContain("rekenen"); expect(l).not.toContain("tafels");
    expect(ids(vakOptiesVoor("3", "vmbo-gt"))).toContain("examens");
  });
});

describe("wisselVakKeuze", () => {
  it("tik = kiezen, nog eens = favoriet, derde = weg", () => {
    let s = { vakken: [], favoriet: [] };
    s = wisselVakKeuze(s, "rekenen"); expect(s).toEqual({ vakken: ["rekenen"], favoriet: [] });
    s = wisselVakKeuze(s, "rekenen"); expect(s).toEqual({ vakken: ["rekenen"], favoriet: ["rekenen"] });
    s = wisselVakKeuze(s, "rekenen"); expect(s).toEqual({ vakken: [], favoriet: [] });
  });
  it("hoogstens 3 favorieten: vierde ster haalt het vak weg i.p.v. een ster te geven", () => {
    let s = { vakken: ["a", "b", "c", "d"], favoriet: ["a", "b", "c"] };
    s = wisselVakKeuze(s, "d");
    expect(s.favoriet).toEqual(["a", "b", "c"]); expect(s.vakken).not.toContain("d");
    expect(MAX_FAVORIET).toBe(3);
  });
  it("hoogstens 10 gekozen", () => {
    const tien = Array.from({ length: 10 }, (_, i) => "v" + i);
    const s = wisselVakKeuze({ vakken: tien, favoriet: [] }, "extra");
    expect(s.vakken).toHaveLength(MAX_VAKKEN); expect(s.vakken).not.toContain("extra");
  });
});
