// Proefweek-regels (6 nov 2026): de pure beslisfunctie uit de checkout-API.
import { describe, it, expect } from "vitest";
import { beoordeelProefweek, PROEFWEEK_DAGEN } from "../../api/checkout-session.js";

const NU = Date.parse("2026-11-06T10:00:00Z");
const account = { id: "u1", email: "ouder@example.nl" };
const dag = 86400e3;

describe("beoordeelProefweek", () => {
  it("poort uit → geen proefweek nodig (400)", () => {
    const r = beoordeelProefweek({ poortAan: false, account, bestaand: null, partner: false, nu: NU });
    expect(r.status).toBe(400);
  });
  it("zonder e-mailaccount → eerst inloggen (400 + login)", () => {
    const r = beoordeelProefweek({ poortAan: true, account: null, bestaand: null, partner: false, nu: NU });
    expect(r.status).toBe(400);
    expect(r.login).toBe("/mijn");
  });
  it("partnercode → al Familie (409)", () => {
    const r = beoordeelProefweek({ poortAan: true, account, bestaand: null, partner: true, nu: NU });
    expect(r.status).toBe(409);
    expect(r.alActief).toBe(true);
  });
  it("betaald jaar loopt → geen proefweek (409)", () => {
    const bestaand = { plan: "jaar", status: "active", valid_until: new Date(NU + 200 * dag).toISOString(), trial_started_at: null };
    const r = beoordeelProefweek({ poortAan: true, account, bestaand, partner: false, nu: NU });
    expect(r.status).toBe(409);
    expect(r.alActief).toBe(true);
  });
  it("nieuw account → 7 dagen Familie, plan proefweek, trial_started_at gezet", () => {
    const r = beoordeelProefweek({ poortAan: true, account, bestaand: null, partner: false, nu: NU });
    expect(r.status).toBe(200);
    expect(r.row.tier).toBe("parent_pro");
    expect(r.row.plan).toBe("proefweek");
    expect(r.row.bron).toBe("proefweek");
    expect(r.row.status).toBe("active");
    expect(Date.parse(r.row.valid_until) - NU).toBe(PROEFWEEK_DAGEN * dag);
    expect(Date.parse(r.row.trial_started_at)).toBe(NU);
  });
  it("verlopen jaar zonder eerdere proef → mag wel een proefweek", () => {
    const bestaand = { plan: "jaar", status: "active", valid_until: new Date(NU - 5 * dag).toISOString(), trial_started_at: null };
    const r = beoordeelProefweek({ poortAan: true, account, bestaand, partner: false, nu: NU });
    expect(r.status).toBe(200);
  });
  it("proefweek loopt nog → 409 met einddatum", () => {
    const bestaand = { plan: "proefweek", status: "active", valid_until: new Date(NU + 3 * dag).toISOString(), trial_started_at: new Date(NU - 4 * dag).toISOString() };
    const r = beoordeelProefweek({ poortAan: true, account, bestaand, partner: false, nu: NU });
    expect(r.status).toBe(409);
    expect(r.alActief).toBe(true);
    expect(r.valid_until).toBe(bestaand.valid_until);
  });
  it("proefweek al gebruikt en voorbij → 409 gebruikt, nooit een tweede", () => {
    const bestaand = { plan: "proefweek", status: "active", valid_until: new Date(NU - 1 * dag).toISOString(), trial_started_at: new Date(NU - 8 * dag).toISOString() };
    const r = beoordeelProefweek({ poortAan: true, account, bestaand, partner: false, nu: NU });
    expect(r.status).toBe(409);
    expect(r.gebruikt).toBe(true);
  });
  it("na een proefweek gekocht en weer verlopen → geen tweede proef (trial_started_at blijft staan)", () => {
    const bestaand = { plan: "jaar", status: "active", valid_until: new Date(NU - 1 * dag).toISOString(), trial_started_at: new Date(NU - 400 * dag).toISOString() };
    const r = beoordeelProefweek({ poortAan: true, account, bestaand, partner: false, nu: NU });
    expect(r.status).toBe(409);
    expect(r.gebruikt).toBe(true);
  });
});
