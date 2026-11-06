import { describe, it, expect } from "vitest";
import {
  parsePvpJoinCode,
  parseInitialPage,
  GO_PARAM_TO_PAGE,
} from "./initialPage.js";

describe("parsePvpJoinCode", () => {
  it("haalt 4-12 char alfanumerieke code uit /duel/:code", () => {
    expect(parsePvpJoinCode("/duel/abc1")).toBe("abc1");
    expect(parsePvpJoinCode("/duel/Xy42abc7")).toBe("xy42abc7");
  });

  it("returnt null voor niet-duel paden", () => {
    expect(parsePvpJoinCode("/")).toBeNull();
    expect(parsePvpJoinCode("/leren")).toBeNull();
    expect(parsePvpJoinCode("/duel/")).toBeNull();
    expect(parsePvpJoinCode("/duel/abc")).toBeNull(); // te kort
  });

  it("returnt null voor lege pathname", () => {
    expect(parsePvpJoinCode("")).toBeNull();
    expect(parsePvpJoinCode(null)).toBeNull();
    expect(parsePvpJoinCode(undefined)).toBeNull();
  });
});

describe("parseInitialPage", () => {
  it("default home zonder query of pathname", () => {
    expect(parseInitialPage()).toBe("home");
    expect(parseInitialPage({ pathname: "/", search: "" })).toBe("home");
  });

  it("/duel/:code wint van alle queries", () => {
    expect(parseInitialPage({ pathname: "/duel/abcd", search: "?go=cito" })).toBe("pvp-lobby");
  });

  it("?play=obliterator → obliteratorDirect", () => {
    expect(parseInitialPage({ pathname: "/", search: "?play=obliterator" })).toBe(
      "obliteratorDirect"
    );
  });

  it("?go=<key> → corresponderende page volgens GO_PARAM_TO_PAGE", () => {
    expect(parseInitialPage({ pathname: "/", search: "?go=cito" })).toBe("cito");
    expect(parseInitialPage({ pathname: "/", search: "?go=schoolboeken" })).toBe("textbook");
    expect(parseInitialPage({ pathname: "/", search: "?go=leerkracht" })).toBe("teacher-home");
  });

  it("onbekende ?go-waarde valt terug op home", () => {
    expect(parseInitialPage({ pathname: "/", search: "?go=onbekend" })).toBe("home");
  });

  it("?play=anders dan obliterator wordt genegeerd", () => {
    expect(parseInitialPage({ pathname: "/", search: "?play=iets" })).toBe("home");
  });
});

describe("GO_PARAM_TO_PAGE", () => {
  it("alle waarden zijn niet-leeg", () => {
    for (const [k, v] of Object.entries(GO_PARAM_TO_PAGE)) {
      expect(typeof v, k).toBe("string");
      expect(v.length, k).toBeGreaterThan(0);
    }
  });
});

describe("parseInitialPage — ?pad= op het oefenboekje (idee 60, 6 nov 2026)", () => {
  it("laat /oefenboekje?pad=… bij het boekje (valt terug op home → pageForPath)", () => {
    expect(parseInitialPage({ pathname: "/oefenboekje", search: "?pad=delen-po" })).toBe("home");
  });
  it("houdt de gewone leerpad-deeplink op /", () => {
    expect(parseInitialPage({ pathname: "/", search: "?pad=delen-po" })).toBe("learn-path");
  });
  it("werkblad-route gebruikt ?werkblad= en wordt niet gekaapt", () => {
    expect(parseInitialPage({ pathname: "/print/pad", search: "?werkblad=verhoudingen-po" })).toBe("home");
  });
});
