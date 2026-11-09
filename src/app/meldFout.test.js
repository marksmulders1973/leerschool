import { describe, it, expect, vi, beforeEach } from "vitest";

const gemeld = [];
vi.mock("../utils.js", () => ({ track: (naam, props) => { gemeld.push([naam, props]); return Promise.resolve(true); } }));

import { meldFout, foutProps, chunkUitStack } from "./meldFout.js";

const fout6nov = Object.assign(new ReferenceError("useSubscription is not defined"), {
  stack: "ReferenceError: useSubscription is not defined\n    at Dn (https://leerkwartier.app/assets/StudentHome-CYuGM-GK.js:2:12405)\n    at Vu (https://leerkwartier.app/assets/vendor-react-DjI-2Vge.js:38:16998)",
});

beforeEach(() => { gemeld.length = 0; sessionStorage.clear(); });

describe("omgevallen scherm als meetpunt", () => {
  it("de fout van 6 nov levert een bruikbaar event op", () => {
    expect(meldFout(fout6nov)).toBe(true);
    expect(gemeld).toEqual([["app_fout", { fout: "useSubscription is not defined", soort: "ReferenceError", plek: "app", chunk: "StudentHome" }]]);
  });

  it("dezelfde melding telt per sessie één keer, een andere wel opnieuw", () => {
    meldFout(fout6nov); meldFout(fout6nov);
    meldFout(new TypeError("x is undefined"));
    expect(gemeld.length).toBe(2);
  });

  it("blijft binnen wat track() doorlaat: hooguit 60 tekens, geen adressen", () => {
    const p = foutProps(new Error("Failed to fetch dynamically imported module: https://leerkwartier.app/assets/Park-abcdefgh.js en nog een heel verhaal erachteraan dat veel te lang is"), "park", true);
    expect(p.fout.length).toBeLessThanOrEqual(60);
    expect(p.fout).not.toMatch(/https?:/);
    expect(p).toMatchObject({ plek: "park", herstel: 1, soort: "Error" });
    for (const k of Object.keys(p)) expect(k).not.toMatch(/e?mail|naam|name|adres/i);
  });

  it("chunk uit de stack, ook met een streepje in de naam of de hash", () => {
    expect(chunkUitStack("at x (http://a/assets/vendor-react-DjI-2Vge.js:1:1)")).toBe("vendor-react");
    expect(chunkUitStack("at x (http://a/assets/main-DA2LBaTP.js:128:50354)")).toBe("main");
    expect(chunkUitStack("geen stack")).toBeNull();
  });

  it("struikelt nooit zelf: geen fout-object, geen stack", () => {
    expect(() => meldFout(null)).not.toThrow();
    expect(() => meldFout("los tekstje", "park")).not.toThrow();
    expect(gemeld.map((g) => g[1].fout)).toEqual(["onbekende fout", "los tekstje"]);
  });
});
