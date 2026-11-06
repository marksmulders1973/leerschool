// Dag-6-mail van de proefweek (6 nov 2026): pure delen.
import { describe, it, expect } from "vitest";
import { bouwProefweekMail, isDag6 } from "../../api/_lib/proefweek-mail.js";

const DAG = 86400e3;

describe("isDag6", () => {
  const nu = Date.parse("2026-11-10T06:30:00Z");
  it("één dag vóór het einde = dag 6", () => {
    expect(isDag6(new Date(nu + 1 * DAG).toISOString(), nu)).toBe(true);
  });
  it("vier dagen vóór het einde = nog niet", () => {
    expect(isDag6(new Date(nu + 4 * DAG).toISOString(), nu)).toBe(false);
  });
  it("al verlopen = niet meer", () => {
    expect(isDag6(new Date(nu - 1 * DAG).toISOString(), nu)).toBe(false);
  });
  it("onzin-datum = false", () => {
    expect(isDag6("niet-een-datum", nu)).toBe(false);
  });
});

describe("bouwProefweekMail", () => {
  it("noemt de einddatum, de prijs, 'stopt vanzelf' en de koop-link met .html", () => {
    const m = bouwProefweekMail({ validUntil: "2026-11-11T10:00:00Z", kinderen: [{ naam: "Sam", onderwerpen: 5, dagen: 4 }, { naam: "Noor", onderwerpen: 0, dagen: 0 }] });
    expect(m.onderwerp).toMatch(/proefweek stopt morgen/);
    expect(m.html).toContain("€ 39 voor 12 maanden");
    expect(m.html).toContain("stopt hij vanzelf");
    expect(m.html).toContain("abonnement.html?van=proefweek-dag6#familie");
    expect(m.html).toContain("Sam: 5 onderwerpen geoefend op 4 dagen");
    expect(m.html).not.toContain("Noor:"); // niet-actieve kinderen niet opsommen
    expect(m.text).toContain("Sam: 5 onderwerpen geoefend op 4 dagen");
  });
  it("zonder oefenen: vriendelijke regel, geen lege lijst", () => {
    const m = bouwProefweekMail({ validUntil: "2026-11-11T10:00:00Z", kinderen: [] });
    expect(m.html).toContain("nog niet geoefend");
    expect(m.html).not.toContain("<ul");
  });
  it("geen 'altijd gratis' en geen stille verlenging", () => {
    const m = bouwProefweekMail({ validUntil: "2026-11-11T10:00:00Z" });
    expect(m.html).not.toMatch(/altijd gratis/i);
    expect(m.html).toContain("geen abonnement");
    expect(m.html).toContain("gratis, gegarandeerd t/m 2031");
  });
  it("ontsnapt kindnamen", () => {
    const m = bouwProefweekMail({ validUntil: "2026-11-11T10:00:00Z", kinderen: [{ naam: "<b>x</b>", onderwerpen: 1, dagen: 1 }] });
    expect(m.html).toContain("&lt;b&gt;x&lt;/b&gt;");
  });
});
