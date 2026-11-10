// @vitest-environment jsdom
// Wie is de bedrieger? — hele rondes doorlopen: kaarten, tips, beginner, stemmen, laatste kans, stand.
// De meetpunten mogen geen namen bevatten.
import { describe, it, expect, beforeEach } from "vitest";
import { startBedrieger } from "./bedriegerSpel.js";

const NAMEN = ["Anna", "Bram", "Cato", "Daan"];
const klik = (app, tekst) => {
  const knop = [...app.querySelectorAll("button")].find((b) => b.textContent.trim() === tekst);
  if (!knop) throw new Error("knop niet gevonden: " + tekst + " | " + app.textContent.slice(0, 160));
  knop.click();
};

function nieuwSpel(levels = [1, 2]) {
  localStorage.setItem("bedrieger-v1", JSON.stringify({ players: NAMEN, levels }));
  document.body.replaceChildren();
  const app = document.createElement("div");
  document.body.appendChild(app);
  const meldingen = [];
  startBedrieger(app, { meld: (naam, extra) => meldingen.push([naam, extra]), onTerug: () => meldingen.push(["terug"]) });
  return { app, meldingen };
}

// Deelt de kaarten uit en geeft terug wie de bedrieger is, welk woord en welke tips er waren.
function deelUit(app) {
  const uit = { bedrieger: null, woorden: [], tips: [] };
  for (let i = 0; i < NAMEN.length; i++) {
    expect(app.querySelector(".pass-name").textContent).toBe(NAMEN[i]);
    klik(app, "Toon mijn kaart");
    const kaart = app.querySelector(".card");
    const eigen = [...kaart.querySelectorAll(".tips span")].map((s) => s.textContent);
    if (kaart.classList.contains("imp")) {
      uit.bedrieger = NAMEN[i];
      expect(kaart.querySelector(".word").textContent).toBe("Bedrieger");
      expect(eigen).toEqual([]);
    } else {
      uit.woorden.push(kaart.querySelector(".word").textContent);
      uit.tips.push(eigen);
    }
    klik(app, i === NAMEN.length - 1 ? "Verberg en begin met praten" : "Verberg en geef door");
  }
  return uit;
}

const stand = (app) => Object.fromEntries([...app.querySelectorAll(".stand-rij")].map((r) => [r.querySelector("span").textContent, Number(r.querySelector("b").textContent)]));

describe("bedriegerspel", () => {
  beforeEach(() => { localStorage.clear(); window.scrollTo = () => {}; });

  it("start niet zonder namen en zegt waarom", () => {
    document.body.replaceChildren();
    const app = document.createElement("div");
    document.body.appendChild(app);
    const meldingen = [];
    startBedrieger(app, { meld: (n, e) => meldingen.push([n, e]) });
    klik(app, "Start spel");
    expect(app.querySelector("#err").textContent).toMatch(/naam/);
    expect(meldingen).toEqual([]);
  });

  it("één bedrieger, de rest hetzelfde woord, en de beginner kent het woord", () => {
    for (let ronde = 0; ronde < 25; ronde++) {
      const { app } = nieuwSpel();
      klik(app, "Start spel");
      const u = deelUit(app);
      expect(u.bedrieger).not.toBeNull();
      expect(new Set(u.woorden).size).toBe(1);
      const beginner = app.querySelector(".start-name").textContent;
      expect(beginner).not.toBe(u.bedrieger);
      // de volgorde noemt de drie anderen, ieder één keer
      const daarna = app.querySelector(".order").textContent.replace("Daarna: ", "").split(" → ");
      expect([beginner, ...daarna].sort()).toEqual([...NAMEN].sort());
    }
  });

  it("wie begint gaat de kring rond in de volgorde van de namen, en is nooit de bedrieger", () => {
    for (let spel = 0; spel < 10; spel++) {
      const { app } = nieuwSpel();
      klik(app, "Start spel");
      const bedriegers = [];
      for (let ronde = 0; ronde < 9; ronde++) {
        const u = deelUit(app);
        bedriegers.push(u.bedrieger);
        const k = ronde % NAMEN.length;
        expect(app.querySelector(".start-name").textContent).toBe(NAMEN[k]);
        expect(u.bedrieger).not.toBe(NAMEN[k]);
        const rij = [1, 2, 3].map((d) => NAMEN[(k + d) % NAMEN.length]);
        expect(app.querySelector(".order").textContent).toBe("Daarna: " + rij.join(" → "));
        klik(app, "Tijd om te stemmen");
        klik(app, "Niet stemmen, meteen onthullen");
        klik(app, "Nieuwe ronde");
      }
      // eerlijk blijft het ook: niemand twee rondes achter elkaar, en in 8 rondes iedereen 1 tot 3 keer
      // (precies 2 kan niet altijd: wie begint wordt die ronde overgeslagen en schuift een ronde op)
      for (let i = 1; i < bedriegers.length; i++) expect(bedriegers[i]).not.toBe(bedriegers[i - 1]);
      for (const n of NAMEN) {
        const keer = bedriegers.slice(0, 8).filter((b) => b === n).length;
        expect(keer).toBeGreaterThanOrEqual(1);
        expect(keer).toBeLessThanOrEqual(3);
      }
    }
  });

  it("tips: elke speler een andere, en alleen bij makkelijke woorden", () => {
    for (let ronde = 0; ronde < 20; ronde++) {
      let s = nieuwSpel([1]);
      klik(s.app, "Start spel");
      const makkelijk = deelUit(s.app).tips;
      expect(makkelijk.every((t) => t.length === 1)).toBe(true);
      expect(new Set(makkelijk.map((t) => t[0])).size).toBe(3);
      s = nieuwSpel([2, 3, 4]);
      klik(s.app, "Start spel");
      expect(deelUit(s.app).tips.every((t) => t.length === 0)).toBe(true);
    }
  });

  it("verkeerde aangewezen: de bedrieger ontsnapt en krijgt 2 punten", () => {
    const { app, meldingen } = nieuwSpel();
    klik(app, "Start spel");
    const u = deelUit(app);
    klik(app, "Tijd om te stemmen");
    klik(app, NAMEN.find((n) => n !== u.bedrieger));
    expect(app.querySelector(".bad").textContent).toBe(u.bedrieger);
    expect(app.querySelector(".card .word").textContent).toBe(u.woorden[0]);
    expect(stand(app)[u.bedrieger]).toBe(2);
    expect(meldingen.map((m) => m[0])).toEqual(["bedrieger_ronde", "bedrieger_onthuld"]);
    expect(meldingen[0][1]).toEqual({ spelers: 4, bedriegers: 1, niveaus: "12" });
    expect(meldingen[1][1]).toEqual({ spelers: 4, uitkomst: "ontsnapt" });
    expect(JSON.stringify(meldingen)).not.toMatch(/Anna|Bram|Cato|Daan/);
  });

  it("betrapt: laatste kans, en de stand telt door over de rondes", () => {
    const { app, meldingen } = nieuwSpel();
    klik(app, "Start spel");
    let u = deelUit(app);
    klik(app, "Tijd om te stemmen");
    klik(app, u.bedrieger);
    expect(app.textContent).toContain("Laatste kans");
    expect(app.textContent).not.toContain(u.woorden[0]); // het woord staat nog niet op het scherm
    klik(app, "Niet geraden");
    const eerste = u.bedrieger;
    let s = stand(app);
    expect(s[eerste]).toBe(0);
    expect(NAMEN.filter((n) => n !== eerste).every((n) => s[n] === 1)).toBe(true);

    klik(app, "Nieuwe ronde");
    u = deelUit(app);
    expect(u.bedrieger).not.toBe(eerste); // iedereen eerst één keer
    klik(app, "Tijd om te stemmen");
    klik(app, u.bedrieger);
    klik(app, "Goed geraden");
    s = stand(app);
    expect(s[u.bedrieger]).toBe(2); // 1 uit ronde 1 + 1 voor het raden
    expect(meldingen.filter((m) => m[0] === "bedrieger_onthuld").map((m) => m[1].uitkomst)).toEqual(["betrapt", "geraden"]);

    klik(app, "Stand op nul");
    expect(app.querySelector(".stand")).toBeNull();
  });

  it("niet stemmen kan ook: meteen onthullen, zonder punten", () => {
    const { app, meldingen } = nieuwSpel();
    klik(app, "Start spel");
    const u = deelUit(app);
    klik(app, "Tijd om te stemmen");
    klik(app, "Niet stemmen, meteen onthullen");
    expect(app.querySelector(".bad").textContent).toBe(u.bedrieger);
    expect(app.querySelector(".stand")).toBeNull();
    expect(meldingen[1][1].uitkomst).toBe("overgeslagen");
  });

  it("stoppen en home kunnen op elk scherm; midden in een ronde pas na een tweede tik", () => {
    document.body.replaceChildren();
    localStorage.setItem("bedrieger-v1", JSON.stringify({ players: NAMEN }));
    const app = document.createElement("div");
    document.body.appendChild(app);
    const uit = [];
    startBedrieger(app, { onTerug: () => uit.push("terug"), onHome: () => uit.push("home") });
    klik(app, "Home");
    expect(uit).toEqual(["home"]); // op het instelscherm meteen
    klik(app, "Start spel");
    klik(app, "Home");
    expect(uit).toEqual(["home"]); // eerste tik in een ronde doet nog niets
    klik(app, "Zeker? Tik nog eens");
    expect(uit).toEqual(["home", "home"]);
    klik(app, "Toon mijn kaart");
    klik(app, "✕ Stoppen");
    expect(app.querySelector(".card")).not.toBeNull();
    klik(app, "Zeker? Tik nog eens");
    expect(app.querySelector("#start")).not.toBeNull(); // terug op het instelscherm, namen staan er nog
    expect([...app.querySelectorAll("input")].map((i) => i.value)).toEqual(NAMEN);
  });

  it("nergens staat nog 'imposter' op het scherm, en Terug werkt", () => {
    const { app, meldingen } = nieuwSpel();
    expect(app.textContent.toLowerCase()).not.toContain("imposter");
    klik(app, "← Terug");
    expect(meldingen).toEqual([["terug"]]);
  });
});
