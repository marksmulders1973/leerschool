import { describe, it, expect } from "vitest";
import { schoonVoorSpraak, maakMeeleesPlan, woordIndexBijChar, normaliseerBedragen } from "./spraakTekst.js";

describe("de ziekte ALS wordt gespeld, het woordje als niet (Mark 29 sep 2026)", () => {
  it("ziekte ALS → aa el es", () => {
    expect(schoonVoorSpraak("Hij heeft de ziekte ALS.")).toBe("Hij heeft de ziekte aa el es.");
  });
  it("(ALS) en ALS-patiënt", () => {
    expect(schoonVoorSpraak("amyotrofische laterale sclerose (ALS)")).toBe("amyotrofische laterale sclerose (aa el es)");
    expect(schoonVoorSpraak("Een ALS-patiënt kan steeds minder bewegen.")).toBe("Een aa el es-patiënt kan steeds minder bewegen.");
  });
  it("ALS is een spierziekte / mensen met ALS", () => {
    expect(schoonVoorSpraak("ALS is een spierziekte.")).toBe("aa el es is een spierziekte.");
    expect(schoonVoorSpraak("Mensen met ALS worden steeds zwakker.")).toBe("Mensen met aa el es worden steeds zwakker.");
  });
  it("nadruk en programmeercode blijven 'als'", () => {
    expect(schoonVoorSpraak("Het klinkt ALS twee wekkers.")).toBe("Het klinkt ALS twee wekkers.");
    expect(schoonVoorSpraak("ALS leeftijd 18 is: stemmen")).toBe("ALS leeftijd 18 is: stemmen");
    expect(schoonVoorSpraak("Als het regent, blijf ik thuis.")).toBe("Als het regent, blijf ik thuis.");
  });
  it("meelezen: één getoond woord, gespeld uitgesproken", () => {
    const plan = maakMeeleesPlan("Hij kreeg ALS toen hij vijftig was.");
    expect(plan.gesproken).toBe("Hij kreeg aa el es toen hij vijftig was.");
    expect(plan.grenzen.map((g) => g.woordIdx)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});

describe("normaliseerBedragen (euro-bedragen menselijk uitspreken)", () => {
  it("€1,50 → één euro vijftig", () => {
    expect(normaliseerBedragen("Dat kost €1,50.")).toBe("Dat kost één euro vijftig.");
  });
  it("heel bedrag zonder centen", () => {
    expect(normaliseerBedragen("€2")).toBe("twee euro");
  });
  it("alleen centen → cent", () => {
    expect(normaliseerBedragen("€0,50")).toBe("vijftig cent");
  });
  it("centen met voorloopnul", () => {
    expect(normaliseerBedragen("€1,05")).toBe("één euro vijf");
  });
  it("groter bedrag met duizendtal-punt", () => {
    expect(normaliseerBedragen("€1.250,95")).toBe("duizendtweehonderdvijftig euro vijfennegentig");
  });
  it("het woord euro ná het getal", () => {
    expect(normaliseerBedragen("Ik heb 3 euro over")).toBe("Ik heb drie euro over");
  });
  it("laat een kaal decimaalgetal (geen euro) met rust", () => {
    expect(normaliseerBedragen("Het antwoord is 1,50 meter")).toBe("Het antwoord is 1,50 meter");
  });
  it("werkt via schoonVoorSpraak (park-gids-pad)", () => {
    expect(schoonVoorSpraak("Een ijsje kost €1,50! 🍦")).toBe("Een ijsje kost één euro vijftig!");
  });
});

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

describe("maakMeeleesPlan + woordIndexBijChar (karaoke-meelezen)", () => {
  it("koppelt gesproken tekst terug aan getoonde woord-indexen", () => {
    // tokens: "Oké"(0) "**Brian**!"(1) "🐕"(2, niet gesproken) "reis"(3) "vs"(4) "rijst"(5)
    const plan = maakMeeleesPlan("Oké **Brian**! 🐕 reis vs rijst");
    expect(plan.gesproken).toBe("Oké Brian! reis of rijst");
    expect(plan.grenzen.map((g) => g.woordIdx)).toEqual([0, 1, 3, 4, 5]);
  });

  it("vindt het juiste woord bij een tekenpositie", () => {
    const plan = maakMeeleesPlan("Oké **Brian**! 🐕 reis vs rijst");
    expect(woordIndexBijChar(plan, 0)).toBe(0);              // "Oké"
    expect(woordIndexBijChar(plan, 4)).toBe(1);              // "Brian!"
    expect(woordIndexBijChar(plan, plan.gesproken.indexOf("of"))).toBe(4); // "vs" op scherm
    expect(woordIndexBijChar(plan, plan.gesproken.length - 1)).toBe(5);    // laatste woord
  });

  it("nieuwe regels tellen niet als woorden", () => {
    const plan = maakMeeleesPlan("Dus:\n\n**uitroepteken** !");
    expect(plan.gesproken).toBe("Dus: uitroepteken !");
    expect(plan.grenzen.map((g) => g.woordIdx)).toEqual([0, 1, 2]);
  });

  it("lege tekst geeft een leeg plan", () => {
    const plan = maakMeeleesPlan("🐉");
    expect(plan.gesproken).toBe("");
    expect(plan.grenzen).toEqual([]);
    expect(woordIndexBijChar(plan, 5)).toBe(-1);
  });
});
