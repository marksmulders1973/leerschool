// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from "vitest";
vi.mock("../supabase.js", () => ({ default: { rpc: vi.fn(() => Promise.resolve({})) } }));
import { zetKoppelNamen, koppelingVoor, oudersVoor, linkIdVoor } from "./koppeling.js";

const zet = (obj) => localStorage.setItem("lk_koppelingen", JSON.stringify(obj));
beforeEach(() => localStorage.clear());

describe("zetKoppelNamen — verdwenen koppelingen opruimen (24 okt 2026)", () => {
  it("enige ouder-koppeling weg → kind heeft geen koppeling meer", () => {
    zet({ brian: { ouder: { link_id: "dood", van_wie: "Brian" } } });
    zetKoppelNamen([{ link_id: "dood", rol: "weg" }]);
    expect(koppelingVoor("Brian")).toBe(null);
  });
  it("twee ouders, de laatste is weg → de andere wordt de hoofdkoppeling (oefenwerk gaat daarheen)", () => {
    zet({ brian: { ouder: { link_id: "b2" }, ouders: [{ link_id: "b1", voornaam: "Deianera" }, { link_id: "b2" }] } });
    zetKoppelNamen([{ link_id: "b2", rol: "weg" }, { link_id: "b1", rol: "ouder", voornaam: "Deianera" }]);
    expect(oudersVoor("Brian").map((o) => o.link_id)).toEqual(["b1"]);
    expect(linkIdVoor("Brian")).toBe("b1");
  });
  it("leerkracht weg, ouder blijft; levende koppelingen blijven onaangeroerd", () => {
    zet({ olivia: { ouder: { link_id: "o1" }, leraar: { link_id: "l-dood" } } });
    zetKoppelNamen([{ link_id: "l-dood", rol: "weg" }, { link_id: "o1", rol: "ouder", voornaam: "Mark" }]);
    const k = koppelingVoor("Olivia");
    expect(k.leraar).toBeUndefined();
    expect(k.ouder.link_id).toBe("o1");
    expect(k.ouder.voornaam).toBe("Mark");
  });
  it("zonder 'weg'-rijen verdwijnt er niets", () => {
    zet({ brian: { ouder: { link_id: "b1" } } });
    zetKoppelNamen([{ link_id: "b1", rol: "ouder", voornaam: "Deianera" }]);
    expect(linkIdVoor("Brian")).toBe("b1");
  });
});
