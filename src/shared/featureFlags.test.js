import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { gameVisibleForUser } from "./featureFlags.js";

describe("gameVisibleForUser", () => {
  const ORIGINAL_ENV = { ...import.meta.env };

  afterEach(() => {
    Object.assign(import.meta.env, ORIGINAL_ENV);
    delete import.meta.env.VITE_HIDE_GAME_FOR_GUESTS;
  });

  it("ingelogd: altijd zichtbaar (zelfs als flag aan)", () => {
    import.meta.env.VITE_HIDE_GAME_FOR_GUESTS = "true";
    expect(gameVisibleForUser({ id: "x" })).toBe(true);
  });

  it("niet-ingelogd + flag uit: zichtbaar (huidig gedrag)", () => {
    delete import.meta.env.VITE_HIDE_GAME_FOR_GUESTS;
    expect(gameVisibleForUser(null)).toBe(true);
    import.meta.env.VITE_HIDE_GAME_FOR_GUESTS = "false";
    expect(gameVisibleForUser(null)).toBe(true);
  });

  it("niet-ingelogd + flag aan + geen deeplink: verborgen", () => {
    import.meta.env.VITE_HIDE_GAME_FOR_GUESTS = "true";
    expect(gameVisibleForUser(null, false)).toBe(false);
  });

  it("niet-ingelogd + flag aan + deeplink: zichtbaar (viral hook)", () => {
    import.meta.env.VITE_HIDE_GAME_FOR_GUESTS = "true";
    expect(gameVisibleForUser(null, true)).toBe(true);
  });

  it("flag accepteert verschillende waar/onwaar-vormen", () => {
    import.meta.env.VITE_HIDE_GAME_FOR_GUESTS = "1";
    expect(gameVisibleForUser(null)).toBe(false);
    import.meta.env.VITE_HIDE_GAME_FOR_GUESTS = "yes";
    expect(gameVisibleForUser(null)).toBe(false);
    import.meta.env.VITE_HIDE_GAME_FOR_GUESTS = "0";
    expect(gameVisibleForUser(null)).toBe(true);
  });
});
