import { describe, it, expect } from "vitest";
import { koppelLijntjes } from "./profielKoppeling.js";

const profielen = [
  { naam: "Brian", role: "leerling" }, { naam: "Olivia", role: "leerling" }, { naam: "Noa", role: "leerling" },
  { naam: "Mark", role: "ouder" }, { naam: "Deianera", role: "ouder" }, { naam: "Juf Els", role: "teacher" },
];
const kop = {
  brian: { ouder: { van_wie: "Mark" }, leraar: { van_wie: "Juf Els" } },
  olivia: { ouder: { van_wie: "mark" } },
  noa: { ouder: { van_wie: "" } },
};
const koppelingVoor = (n) => kop[n.toLowerCase()] || null;

describe("koppelLijntjes", () => {
  it("ouder → kinderen van dit toestel die met hem gekoppeld zijn (hoofdletter-ongevoelig)", () => {
    const m = koppelLijntjes(profielen, koppelingVoor);
    expect(m.get("mark")).toBe("gekoppeld met Brian en Olivia");
    expect(m.has("deianera")).toBe(false);
  });
  it("kind → thuis/naam ouder, plus school", () => {
    const m = koppelLijntjes(profielen, koppelingVoor);
    expect(m.get("brian")).toBe("gekoppeld met Mark en Juf Els");
    expect(m.get("olivia")).toBe("gekoppeld met mark");
    expect(m.get("noa")).toBe("gekoppeld met thuis");
  });
  it("leerkracht → leerlingen op dit toestel", () => {
    expect(koppelLijntjes(profielen, koppelingVoor).get("juf els")).toBe("gekoppeld met Brian");
  });
  it("account-kinderen komen bij de ouder erbij, zonder dubbelen; drie namen met komma", () => {
    const m = koppelLijntjes(profielen, koppelingVoor, ["Brian", "Sem"]);
    expect(m.get("mark")).toBe("gekoppeld met Brian, Olivia en Sem");
  });
  it("niets gekoppeld → lege map", () => {
    expect(koppelLijntjes(profielen, () => null).size).toBe(0);
  });
});
