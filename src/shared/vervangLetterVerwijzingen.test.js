import { describe, it, expect } from "vitest";
import { vervangLetterVerwijzingen as v, shuffleOpties } from "./shuffleOpties.js";

const opties = ["JPG", "MP3", "TXT", "EXE"];
describe("vervangLetterVerwijzingen", () => {
  it("losse letter wordt de optietekst", () => expect(v("A.", opties)).toBe("'JPG'."));
  it("'Dat is A.' aan het eind", () => expect(v("Samen: 1x rond trappen. Dat is A.", opties)).toBe("Samen: 1x rond trappen. Dat is 'JPG'."));
  it("(=A) midden in de zin", () => expect(v("Antwoord = 1817 (=A) want", opties)).toBe("Antwoord = 1817 (= 'JPG') want"));
  it("antwoord/optie B", () => expect(v("Optie B is 1-op-1, antwoord B dus.", opties)).toBe("Optie 'MP3' is 1-op-1, antwoord 'MP3' dus."));
  it("eind '→ C.'", () => expect(v("Kijk goed → C.", opties)).toBe("Kijk goed → 'TXT'."));
  it("eenheid/symbool blijft staan (letter staat in een optie)", () => {
    expect(v("0,12 A.", ["0,12 A", "1,2 A", "12 A", "0,012 A"])).toBe("0,12 A.");
    expect(v("x³/3 + C.", ["x³/3 + C", "3x²", "x³", "2x"])).toBe("x³/3 + C.");
    expect(v("6 = C. → C.", ["Koolstof (C)", "Stikstof (N)", "Zuurstof (O)", "Helium (He)"])).toBe("6 = C. → C.");
  });
  it("losse letter aan het eind zonder pijl blijft (kan inhoud zijn)", () => expect(v("Zelfde Z, andere A.", opties)).toBe("Zelfde Z, andere A."));
  it("letters als inhoud blijven staan", () => expect(v("zoek bij de C.", ["B", "C", "D", "A"])).toBe("zoek bij de C."));
  it("gewone zinnen ongemoeid", () => expect(v("Een feit kun je controleren.", opties)).toBe("Een feit kun je controleren."));
  it("na schudden wijst de uitleg nog naar de goede optie", () => {
    const q = { options: opties, answer: 0, uitlegPad: { niveaus: { nogSimpeler: "A." } }, explanation: "Dat is A." };
    const s = shuffleOpties(q, () => 0.1);
    expect(s.uitlegPad.niveaus.nogSimpeler).toBe("'JPG'.");
    expect(s.explanation).toBe("Dat is 'JPG'.");
    expect(s.options[s.answer]).toBe("JPG");
  });
});
