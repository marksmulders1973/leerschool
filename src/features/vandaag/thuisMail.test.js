import { describe, it, expect, beforeEach, vi } from "vitest";

// ThuisMailKaart importeert supabase/auth; die hebben we voor de toon-regel niet nodig.
vi.mock("../../supabase.js", () => ({ default: { rpc: vi.fn() } }));
vi.mock("../../auth.js", () => ({ ensureSession: vi.fn() }));

import { thuisMailTonen, thuisScanLink } from "./ThuisMailKaart.jsx";

function zetDagen(n) {
  const dagen = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    dagen.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
  }
  localStorage.setItem("lk_bezoekdagen", JSON.stringify({ dagen }));
}

describe("ThuisMailKaart — wanneer tonen", () => {
  beforeEach(() => { localStorage.clear(); });

  it("niet zonder echte naam", () => {
    zetDagen(5);
    expect(thuisMailTonen("")).toBe(false);
    expect(thuisMailTonen("Speler")).toBe(false);
    expect(thuisMailTonen("A")).toBe(false);
  });

  it("niet vóór drie bezoekdagen, wel vanaf drie", () => {
    zetDagen(2);
    expect(thuisMailTonen("Noor")).toBe(false);
    zetDagen(3);
    expect(thuisMailTonen("Noor")).toBe(true);
  });

  it("niet als dit toestel al een ouder-koppeling voor deze naam kent", () => {
    zetDagen(4);
    localStorage.setItem("lk_koppelingen", JSON.stringify({ noor: { ouder: { link_id: "x", van_wie: "mama" } } }));
    expect(thuisMailTonen("Noor")).toBe(false);
  });

  it("na 'klaar' nooit meer; max 3 keer met 3 dagen ertussen", () => {
    zetDagen(4);
    localStorage.setItem("lk_thuis_mail_v2", JSON.stringify({ klaar: true }));
    expect(thuisMailTonen("Noor")).toBe(false);
    localStorage.setItem("lk_thuis_mail_v2", JSON.stringify({ keer: 3, laatst: 0 }));
    expect(thuisMailTonen("Noor")).toBe(false);
    localStorage.setItem("lk_thuis_mail_v2", JSON.stringify({ keer: 1, laatst: Date.now() - 1000 }));
    expect(thuisMailTonen("Noor")).toBe(false);
    localStorage.setItem("lk_thuis_mail_v2", JSON.stringify({ keer: 1, laatst: Date.now() - 4 * 24 * 3600 * 1000 }));
    expect(thuisMailTonen("Noor")).toBe(true);
  });
});

describe("ThuisMailKaart — code voor thuis (idee 89, 23 nov 2026)", () => {
  beforeEach(() => { localStorage.clear(); });
  it("wie bij de oude kaart klaar was (adres gestuurd of 'liever niet'), krijgt de nieuwe niet", () => {
    zetDagen(4);
    localStorage.setItem("lk_thuis_mail_v1", JSON.stringify({ klaar: true }));
    expect(thuisMailTonen("Noor")).toBe(false);
  });
  it("wie de oude kaart alleen zag, krijgt de nieuwe wel (teller begint opnieuw)", () => {
    zetDagen(4);
    localStorage.setItem("lk_thuis_mail_v1", JSON.stringify({ keer: 3, laatst: Date.now() }));
    expect(thuisMailTonen("Noor")).toBe(true);
  });
  it("de scanlink draagt code, naam en de score van vandaag", () => {
    const u = new URL(thuisScanLink("abc.123.def", "Noor de Vries", 8, 10));
    expect(u.origin + u.pathname).toBe("https://leerkwartier.app/thuis.html");
    expect(u.searchParams.get("t")).toBe("abc.123.def");
    expect(u.searchParams.get("n")).toBe("Noor de Vries");
    expect(u.searchParams.get("g")).toBe("8");
    expect(u.searchParams.get("v")).toBe("10");
    expect(new URL(thuisScanLink("abc", "Noor")).searchParams.has("g")).toBe(false);
  });
});

describe("ThuisMailKaart — gedeeld toestel", () => {
  beforeEach(() => { localStorage.clear(); });
  it("niet op een toestel met meer dan 3 namen (klas/digibord)", () => {
    zetDagen(4);
    localStorage.setItem("lk_namen", JSON.stringify(["Noor", "Sem", "Lina", "Yusuf"]));
    expect(thuisMailTonen("Noor")).toBe(false);
    localStorage.setItem("lk_namen", JSON.stringify(["Noor", "Sem"]));
    expect(thuisMailTonen("Noor")).toBe(true);
  });
});
