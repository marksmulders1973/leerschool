import { describe, it, expect, vi } from "vitest";
vi.mock("../supabase.js", () => ({ default: { rpc: vi.fn() } }));
import { foutUitDiagnose, verbodenTekens, koppelFoutTekst, claimKoppelcode } from "./koppelcode.js";
import supabase from "../supabase.js";

describe("koppelhulp — foutUitDiagnose (Mark 23 okt 2026)", () => {
  it("gebruikt door deze naam, hier al gekoppeld → niets te doen", () => {
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: true }, true)).toBe("alGekoppeld");
  });
  it("gebruikt door deze naam, maar hier niet gekoppeld → ander toestel", () => {
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: true }, false)).toBe("gebruiktAnderToestel");
  });
  it("gebruikt door een andere naam → nieuwe code, ook als dit toestel al iets gekoppeld heeft (2e ouder)", () => {
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: false }, true)).toBe("gebruiktAnder");
    expect(foutUitDiagnose({ status: "gebruikt", zelfde_naam: false }, false)).toBe("gebruiktAnder");
  });
  it("typfout met suggestie, of bestaat niet", () => {
    expect(foutUitDiagnose({ status: "onbekend", suggestie: "V8N9AU" })).toBe("typfout");
    expect(foutUitDiagnose({ status: "onbekend", suggestie: null })).toBe("bestaatNiet");
  });
  it("rem tegen raden: de server zegt te_veel → eigen uitleg, geen 'bestaat niet'", () => {
    expect(foutUitDiagnose({ status: "onbekend", suggestie: null, te_veel: true })).toBe("teVeel");
    expect(koppelFoutTekst("teVeel")).toMatch(/Wacht een uur/);
  });
  it("oud, geldig-maar-mislukt, en geen diagnose", () => {
    expect(foutUitDiagnose({ status: "verlopen" })).toBe("verlopen");
    expect(foutUitDiagnose({ status: "geldig" })).toBe("geenVerbinding");
    expect(foutUitDiagnose(null, false)).toBe("verlopen");
    expect(foutUitDiagnose(null, true)).toBe("alGekoppeld");
  });
});

describe("verbodenTekens", () => {
  it("vindt 0, O, 1, I en L (ook kleine letters), elk één keer", () => {
    expect(verbodenTekens("h7kp2q")).toEqual([]);
    expect(verbodenTekens("H0KP1Q")).toEqual(["0", "1"]);
    expect(verbodenTekens("lol-ok")).toEqual(["L", "O"]);
  });
});

describe("claimKoppelcode — antwoorden van de server (9 nov 2026)", () => {
  it("te_veel_pogingen → teVeel, zonder nog een diagnose te vragen", async () => {
    supabase.rpc.mockReset();
    supabase.rpc.mockResolvedValueOnce({ data: { ok: false, error: "te_veel_pogingen" }, error: null });
    expect(await claimKoppelcode("abc 234", "Testkind")).toEqual({ ok: false, fout: "teVeel" });
    expect(supabase.rpc).toHaveBeenCalledTimes(1);
    expect(supabase.rpc.mock.calls[0]).toEqual(["claim_link_code", { p_code: "ABC234", p_child_name: "Testkind" }]);
  });
  it("gelukt met een andere naam op de code → koppeling staat onder de naam van de code", async () => {
    localStorage.clear();
    supabase.rpc.mockReset();
    supabase.rpc.mockResolvedValue({ data: { ok: true, link_id: "11111111-1111-4111-8111-111111111111", rol: "ouder", van_wie: "mama", naam: "Brian" }, error: null });
    const r = await claimKoppelcode("ABC234", "Bri");
    expect(r).toMatchObject({ ok: true, childName: "Brian", linkId: "11111111-1111-4111-8111-111111111111" });
    expect(Object.keys(JSON.parse(localStorage.getItem("lk_koppelingen")))).toEqual(["brian"]);
  });
});
