// Idee 1 (10 sep 2026): nieuwsbrief-utm → partner-code, zonder overtypen.
import { describe, it, expect, vi } from "vitest";
vi.mock("../../supabase.js", () => ({ default: { rpc: async () => ({ data: true }) } }));
vi.mock("../../utils.js", () => ({ track: () => {} }));
import { codeUitUrl } from "./partnerCode.js";

const P = (q) => new URLSearchParams(q);
describe("codeUitUrl", () => {
  it("?partner= wint altijd", () => {
    expect(codeUitUrl(P("?partner=vbrotterdam2027&utm_source=clang"))).toEqual({ code: "VBROTTERDAM2027", via: "partner" });
  });
  it("Kinderhulp-nieuwsbrief (Clang) geeft KINDERHULP2027", () => {
    expect(codeUitUrl(P("?utm_source=clang&utm_medium=email&utm_campaign=newsletter_20260910_nieuwsbrief%20intermediairs_B"))).toEqual({ code: "KINDERHULP2027", via: "nieuwsbrief" });
    expect(codeUitUrl(P("?utm_source=Kinderhulp"))).toEqual({ code: "KINDERHULP2027", via: "nieuwsbrief" });
  });
  it("een andere Clang-gebruiker krijgt NIET de Kinderhulp-code", () => {
    expect(codeUitUrl(P("?utm_source=clang&utm_campaign=gemeente_nieuws_okt")).code).toBe(null);
  });
  it("onbekende utm of geen params = geen code", () => {
    expect(codeUitUrl(P("?utm_source=trots")).code).toBe(null);
    expect(codeUitUrl(P("")).code).toBe(null);
    expect(codeUitUrl(P("?partner=te-lang-en-raar-teken-!!!!!")).code).toBe(null);
  });
});
