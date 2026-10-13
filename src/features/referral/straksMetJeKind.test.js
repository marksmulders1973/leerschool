import { describe, it, expect } from "vitest";
import { straksMoment, straksLink, straksIcs, straksWhatsAppTekst, straksIsVandaag } from "./straksMetJeKind.js";

describe("straksMetJeKind", () => {
  it("overdag: vandaag 19:00", () => {
    const nu = new Date(2026, 9, 13, 13, 45);
    const m = straksMoment(nu);
    expect([m.getDate(), m.getHours(), m.getMinutes()]).toEqual([13, 19, 0]);
    expect(straksIsVandaag(m, nu)).toBe(true);
  });

  it("na 18:30: morgen 19:00, ook over de maandgrens", () => {
    const m = straksMoment(new Date(2026, 9, 31, 20, 10));
    expect([m.getMonth(), m.getDate(), m.getHours()]).toEqual([10, 1, 19]);
  });

  it("link draagt code en utm_source=straks", () => {
    expect(straksLink("KINDERHULP2027")).toBe("https://leerkwartier.app/?partner=KINDERHULP2027&utm_source=straks");
    expect(straksLink(null)).toBe("https://leerkwartier.app/?utm_source=straks");
  });

  it("ics heeft geldige opbouw, CRLF en ge-escapete komma's", () => {
    const ics = straksIcs("HOOGELAND2027", new Date(2026, 9, 13, 10, 0));
    expect(ics.startsWith("BEGIN:VCALENDAR\r\n")).toBe(true);
    expect(ics.endsWith("END:VCALENDAR\r\n")).toBe(true);
    expect(ics).toContain("DTSTART:20261013T190000");
    expect(ics).toContain("DTEND:20261013T191500");
    expect(ics).toContain("partner=HOOGELAND2027&utm_source=straks");
    expect(ics).toContain("Een kwartier per dag leren\\, een leven lang slimmer.");
    expect(ics).not.toMatch(/[^\r]\n/);
  });

  it("WhatsApp-tekst zegt vanavond of morgen", () => {
    expect(straksWhatsAppTekst("X1", new Date(2026, 9, 13, 9, 0))).toMatch(/^Vanavond/);
    expect(straksWhatsAppTekst("X1", new Date(2026, 9, 13, 21, 0))).toMatch(/^Morgen/);
  });
});
