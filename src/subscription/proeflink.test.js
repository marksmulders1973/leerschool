import { describe, it, expect } from "vitest";
import { maakProefLink, leesProefLink } from "../../api/_lib/proeflink.js";

const S = "test-geheim";
const U = "3f2b8c1e-1d2a-4b3c-9d4e-5f6a7b8c9d0e";
const NU = Date.parse("2026-11-13T16:00:00Z");

describe("proefweek-link", () => {
  it("maakt een code die terug te lezen is naar hetzelfde account", async () => {
    const t = await maakProefLink(U, { secret: S, nu: NU });
    expect(t).toMatch(/^[0-9a-f-]{36}\.\d+\.[0-9a-f]{32}$/);
    expect(await leesProefLink(t, { secret: S, nu: NU })).toBe(U);
  });
  it("verlopen code (na 14 dagen) → null", async () => {
    const t = await maakProefLink(U, { secret: S, nu: NU });
    expect(await leesProefLink(t, { secret: S, nu: NU + 15 * 86400e3 })).toBeNull();
  });
  it("ander geheim → null", async () => {
    const t = await maakProefLink(U, { secret: S, nu: NU });
    expect(await leesProefLink(t, { secret: "ander", nu: NU })).toBeNull();
  });
  it("ander account in de code zetten → null", async () => {
    const t = await maakProefLink(U, { secret: S, nu: NU });
    const vals = t.replace(U, "aaaaaaaa-1d2a-4b3c-9d4e-5f6a7b8c9d0e");
    expect(await leesProefLink(vals, { secret: S, nu: NU })).toBeNull();
  });
  it("verloopdatum oprekken → null", async () => {
    const t = await maakProefLink(U, { secret: S, nu: NU });
    const [u, exp, sig] = t.split(".");
    expect(await leesProefLink(`${u}.${Number(exp) + 86400 * 365}.${sig}`, { secret: S, nu: NU })).toBeNull();
  });
  it("rommel, leeg of zonder geheim → null", async () => {
    expect(await leesProefLink("", { secret: S, nu: NU })).toBeNull();
    expect(await leesProefLink("a.b.c", { secret: S, nu: NU })).toBeNull();
    expect(await leesProefLink(null, { secret: S, nu: NU })).toBeNull();
    expect(await maakProefLink(U, { secret: "", nu: NU })).toBeNull();
    expect(await maakProefLink("geen-uuid", { secret: S, nu: NU })).toBeNull();
  });
});

// 23 nov 2026 (idee 89): dezelfde ondertekening met een eigen voorvoegsel voor de thuis-scan.
describe("voorvoegsel houdt de soorten codes uit elkaar", () => {
  const secret = "test-geheim-voor-voorvoegsel";
  const uid = "11111111-2222-3333-4444-555555555555";
  it("een thuiscode is geen proeflink en andersom", async () => {
    const thuis = await maakProefLink(uid, { secret, voorvoegsel: "leerkwartier-thuislink", dagen: 14 });
    const proef = await maakProefLink(uid, { secret });
    expect(await leesProefLink(thuis, { secret, voorvoegsel: "leerkwartier-thuislink" })).toBe(uid);
    expect(await leesProefLink(thuis, { secret })).toBe(null);
    expect(await leesProefLink(proef, { secret, voorvoegsel: "leerkwartier-thuislink" })).toBe(null);
    expect(await leesProefLink(proef, { secret })).toBe(uid);
  });
  it("een thuiscode verloopt na 14 dagen", async () => {
    const nu = 1795430000000;
    const thuis = await maakProefLink(uid, { secret, nu, voorvoegsel: "leerkwartier-thuislink", dagen: 14 });
    expect(await leesProefLink(thuis, { secret, nu: nu + 13 * 86400000, voorvoegsel: "leerkwartier-thuislink" })).toBe(uid);
    expect(await leesProefLink(thuis, { secret, nu: nu + 15 * 86400000, voorvoegsel: "leerkwartier-thuislink" })).toBe(null);
  });
});
