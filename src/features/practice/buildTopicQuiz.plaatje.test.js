// 23 nov 2026 — melding 18 nov ("Plaatje hoort er niet bij, het gaat over boeken"): een vraag die
// zijn eigen gegevens in de tekst heeft, mag niet het plaatje van het deel erboven krijgen.
import { describe, it, expect } from "vitest";
import { vraagWilStapPlaatje } from "./buildTopicQuiz.js";

describe("vraagWilStapPlaatje", () => {
  it("vraag met eigen gegevens ('in een tabel staat: …') krijgt geen plaatje van het deel", () => {
    expect(vraagWilStapPlaatje("In een tabel over gelezen boeken staat: **Sanne**: september 3, oktober 5. Hoeveel boeken las **Daan in oktober**?")).toBe(false);
    expect(vraagWilStapPlaatje("In een tabel staat: ma 12, di 8, wo 18. Hoeveel is dat **samen**?")).toBe(false);
    expect(vraagWilStapPlaatje("In een cirkeldiagram is voetbal 50%, hockey 25% en zwemmen 15%. Hoeveel procent is de **rest**?")).toBe(false);
    expect(vraagWilStapPlaatje("Op een kaart met **schaal 1 : 50.000** is een afstand **4 cm**. Hoe ver is dat in het echt?")).toBe(false);
  });
  it("begripsvraag over 'een grafiek' krijgt geen plaatje", () => {
    expect(vraagWilStapPlaatje("**Welke as** is meestal **horizontaal** in een grafiek?")).toBe(false);
    expect(vraagWilStapPlaatje("Een **legenda** op een kaart laat zien...")).toBe(false);
  });
  it("vraag die naar het plaatje van het deel wijst, houdt het plaatje", () => {
    expect(vraagWilStapPlaatje("Kijk in de tabel 'IJsjes-verkoop per dag'. Op welke dag werden de meeste ijsjes verkocht?")).toBe(true);
    expect(vraagWilStapPlaatje("Hoeveel kinderen kozen voetbal volgens de grafiek?")).toBe(true);
    expect(vraagWilStapPlaatje("Welke breuk zie je in het plaatje?")).toBe(true);
    expect(vraagWilStapPlaatje("Kijk naar een van de staven hieronder. Welke is het hoogst?")).toBe(true);
    expect(vraagWilStapPlaatje("Hoe laat is het op deze klok?")).toBe(true);
  });
  it("vraag zonder verwijzing krijgt nooit een plaatje", () => {
    expect(vraagWilStapPlaatje("Hoeveel is 1248 + 567?")).toBe(false);
    expect(vraagWilStapPlaatje("")).toBe(false);
  });
});
