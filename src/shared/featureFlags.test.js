import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { gameVisibleForUser, teacherFeaturesVisibleForUser, interactive3DEnabled } from "./featureFlags.js";

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

describe("teacherFeaturesVisibleForUser", () => {
  afterEach(() => {
    delete import.meta.env.VITE_HIDE_TEACHER_FOR_NON_TEACHERS;
  });

  it("flag uit: zichtbaar voor iedereen (huidig gedrag)", () => {
    delete import.meta.env.VITE_HIDE_TEACHER_FOR_NON_TEACHERS;
    expect(teacherFeaturesVisibleForUser(null)).toBe(true);
    expect(teacherFeaturesVisibleForUser({ id: "x" }, "leerling")).toBe(true);
  });

  it("flag aan + teacher-rol: zichtbaar", () => {
    import.meta.env.VITE_HIDE_TEACHER_FOR_NON_TEACHERS = "true";
    expect(teacherFeaturesVisibleForUser({ id: "x" }, "teacher")).toBe(true);
    expect(teacherFeaturesVisibleForUser({ id: "x" }, "leerkracht")).toBe(true);
  });

  it("flag aan + niet-teacher: verborgen", () => {
    import.meta.env.VITE_HIDE_TEACHER_FOR_NON_TEACHERS = "true";
    expect(teacherFeaturesVisibleForUser(null)).toBe(false);
    expect(teacherFeaturesVisibleForUser({ id: "x" }, "leerling")).toBe(false);
    expect(teacherFeaturesVisibleForUser({ id: "x" }, "ouder")).toBe(false);
    expect(teacherFeaturesVisibleForUser({ id: "x" }, null)).toBe(false);
  });

  it("admin (Mark) altijd zichtbaar zelfs met flag aan", () => {
    import.meta.env.VITE_HIDE_TEACHER_FOR_NON_TEACHERS = "true";
    expect(teacherFeaturesVisibleForUser({ email: "Mark-smulders@hotmail.com" })).toBe(true);
  });
});

describe("interactive3DEnabled", () => {
  afterEach(() => {
    delete import.meta.env.VITE_HIDE_3D_IN_PATHS;
  });

  it("default: 3D aan (huidig gedrag)", () => {
    delete import.meta.env.VITE_HIDE_3D_IN_PATHS;
    expect(interactive3DEnabled()).toBe(true);
  });

  it("flag aan: 3D uit", () => {
    import.meta.env.VITE_HIDE_3D_IN_PATHS = "true";
    expect(interactive3DEnabled()).toBe(false);
  });

  it("flag false expliciet: 3D aan", () => {
    import.meta.env.VITE_HIDE_3D_IN_PATHS = "false";
    expect(interactive3DEnabled()).toBe(true);
  });
});
