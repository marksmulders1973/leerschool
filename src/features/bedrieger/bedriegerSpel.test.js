// @vitest-environment jsdom
// Wie is de bedrieger? — één hele ronde doorlopen: precies één speler krijgt de bedrieger-kaart,
// de anderen hetzelfde woord, en de meetpunten bevatten geen namen.
import { describe, it, expect, beforeEach } from "vitest";
import { startBedrieger } from "./bedriegerSpel.js";

const klik = (app, tekst) => {
  const knop = [...app.querySelectorAll("button")].find((b) => b.textContent.trim() === tekst);
  if (!knop) throw new Error("knop niet gevonden: " + tekst + " | " + app.textContent.slice(0, 120));
  knop.click();
};

describe("bedriegerspel", () => {
  let app, meldingen;
  beforeEach(() => {
    localStorage.clear();
    window.scrollTo = () => {};
    document.body.replaceChildren();
    app = document.createElement("div");
    document.body.appendChild(app);
    meldingen = [];
    startBedrieger(app, { meld: (naam, extra) => meldingen.push([naam, extra]), onTerug: () => meldingen.push(["terug"]) });
  });

  it("start niet zonder namen en zegt waarom", () => {
    klik(app, "Start spel");
    expect(app.querySelector("#err").textContent).toMatch(/naam/);
    expect(meldingen).toEqual([]);
  });

  it("speelt een ronde: één bedrieger, de rest hetzelfde woord", () => {
    const namen = ["Anna", "Bram", "Cato", "Daan"];
    klik(app, "+ Speler toevoegen");
    app.querySelectorAll("input[type=text]").forEach((inp, i) => { inp.value = namen[i]; inp.dispatchEvent(new Event("input")); });
    klik(app, "Start spel");

    const woorden = [];
    let bedriegers = 0;
    for (let i = 0; i < namen.length; i++) {
      expect(app.querySelector(".pass-name").textContent).toBe(namen[i]);
      klik(app, "Toon mijn kaart");
      const kaart = app.querySelector(".card");
      if (kaart.classList.contains("imp")) { bedriegers++; expect(kaart.querySelector(".word").textContent).toBe("Bedrieger"); }
      else woorden.push(kaart.querySelector(".word").textContent);
      klik(app, i === namen.length - 1 ? "Verberg en begin met praten" : "Verberg en geef door");
    }
    expect(bedriegers).toBe(1);
    expect(new Set(woorden).size).toBe(1);

    klik(app, "Onthul de bedrieger");
    expect(app.querySelector(".card .word").textContent).toBe(woorden[0]);
    expect(namen).toContain(app.querySelector(".bad").textContent);

    expect(meldingen.map((m) => m[0])).toEqual(["bedrieger_ronde", "bedrieger_onthuld"]);
    expect(meldingen[0][1]).toEqual({ spelers: 4, bedriegers: 1, niveaus: "12" });
    expect(JSON.stringify(meldingen)).not.toMatch(/Anna|Bram|Cato|Daan/);
  });

  it("tips: elke speler een andere, de bedrieger geen, en alleen bij makkelijke woorden", () => {
    const speel = (levels) => {
      localStorage.setItem("bedrieger-v1", JSON.stringify({ players: ["Anna", "Bram", "Cato", "Daan"], levels }));
      const el = document.createElement("div");
      document.body.appendChild(el);
      startBedrieger(el, {});
      klik(el, "Start spel");
      const tips = [];
      for (let i = 0; i < 4; i++) {
        klik(el, "Toon mijn kaart");
        const kaart = el.querySelector(".card");
        const eigen = [...kaart.querySelectorAll(".tips span")].map((s) => s.textContent);
        if (kaart.classList.contains("imp")) expect(eigen).toEqual([]);
        else tips.push(eigen);
        klik(el, i === 3 ? "Verberg en begin met praten" : "Verberg en geef door");
      }
      return tips;
    };
    for (let ronde = 0; ronde < 20; ronde++) {
      const makkelijk = speel([1]);
      expect(makkelijk.every((t) => t.length === 1)).toBe(true);
      expect(new Set(makkelijk.map((t) => t[0])).size).toBe(3);
      expect(speel([2, 3, 4]).every((t) => t.length === 0)).toBe(true);
    }
  });

  it("nergens staat nog 'imposter' op het scherm, en Terug werkt", () => {
    expect(app.textContent.toLowerCase()).not.toContain("imposter");
    klik(app, "← Terug");
    expect(meldingen).toEqual([["terug"]]);
  });
});
