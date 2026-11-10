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

  it("nergens staat nog 'imposter' op het scherm, en Terug werkt", () => {
    expect(app.textContent.toLowerCase()).not.toContain("imposter");
    klik(app, "← Terug");
    expect(meldingen).toEqual([["terug"]]);
  });
});
