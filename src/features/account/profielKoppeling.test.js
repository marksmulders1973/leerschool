import { describe, it, expect } from "vitest";
import { koppelGraaf, groepUitNiveau, KOPPEL_KLEUREN } from "./profielKoppeling.js";

const kv = (map) => (n) => map[String(n).toLowerCase()] || null;
const lijn = (van, naar, soort = "ouder", bron = "toestel") => ({ van, naar, soort, bron });

describe("koppelGraaf — Marks telefoon 21 okt 2026 (de screenshot)", () => {
  // Marksmul ingelogd (account heeft Olivia), Olivia actief; Brian gekoppeld via code met Deianera
  // (van_wie leeg op dit toestel), Mark nog niet gekoppeld.
  const profielen = [
    { naam: "Marksmul", role: "ouder" },
    { naam: "Olivia", role: "student" }, { naam: "Brian", role: "leerling" }, { naam: "Mark", role: "leerling" },
  ];
  const kop = kv({ brian: { ouder: { van_wie: "", link_id: "b1" } } });
  const g = koppelGraaf(profielen, kop, { ingelogd: true, huidigeNaam: "Olivia", accountKinderen: [{ naam: "Olivia", linkId: "d48c" }] });

  it("lijn Marksmul → Olivia uit het account; Brian extern 'thuis'", () => {
    expect(g.lijnen).toEqual([lijn("Marksmul", "Olivia", "ouder", "account")]);
    expect(g.extern).toEqual([{ kind: "Brian", soort: "ouder", label: "thuis" }]);
  });
  it("label en kaart zeggen hetzelfde (de oude tegenstrijdigheid)", () => {
    expect(g.labels.get("marksmul")).toBe("gekoppeld met Olivia");
    expect(g.labels.get("olivia")).toBe("gekoppeld met Marksmul");
    expect(g.labels.get("brian")).toBe("gekoppeld met thuis");
    expect(g.labels.has("mark")).toBe(false);
  });
  it("geen knop 'Koppel Olivia' meer; alleen Mark (en Brian heeft al een ouder)", () => {
    expect(g.kandidaten).toEqual([{ kind: "Mark", ouder: "Marksmul" }]);
  });
  it("toestel krijgt Olivia's koppeling erbij (zelfde als de één-tik-knop)", () => {
    expect(g.sync).toEqual([{ kind: "Olivia", linkId: "d48c", vanWie: "Marksmul" }]);
  });
  it("kleuren: ouder 1 oranje, Olivia dezelfde kleur, Brian extern", () => {
    expect(g.kleur.get("marksmul")).toBe(KOPPEL_KLEUREN.ouder[0]);
    expect(g.kleur.get("olivia")).toBe(KOPPEL_KLEUREN.ouder[0]);
    expect(g.kleur.get("brian")).toBe(KOPPEL_KLEUREN.extern);
    expect(g.kleur.has("mark")).toBe(false);
  });
  it("na de sync (toestel kent Olivia nu): zelfde plaatje, geen dubbele lijn, geen sync meer", () => {
    const kop2 = kv({ brian: { ouder: { van_wie: "" } }, olivia: { ouder: { van_wie: "Marksmul", link_id: "d48c" } } });
    const g2 = koppelGraaf(profielen, kop2, { ingelogd: true, huidigeNaam: "Olivia", accountKinderen: [{ naam: "Olivia", linkId: "d48c" }] });
    expect(g2.lijnen).toEqual([lijn("Marksmul", "Olivia")]);
    expect(g2.sync).toEqual([]);
    expect(g2.labels.get("olivia")).toBe("gekoppeld met Marksmul");
  });
});

describe("koppelGraaf — twee ouders op één toestel", () => {
  const profielen = [
    { naam: "Mama", role: "ouder" }, { naam: "Papa", role: "ouder" },
    { naam: "Sam", role: "leerling" }, { naam: "Noa", role: "leerling" },
  ];
  const acc = [{ naam: "Sam", linkId: "s1" }];

  it("kind actief: onduidelijk van wie het account is → géén account-lijn, geen sync (liever geen lijn dan een verkeerde)", () => {
    const g = koppelGraaf(profielen, () => null, { ingelogd: true, huidigeNaam: "Sam", accountKinderen: acc });
    expect(g.lijnen).toEqual([]);
    expect(g.sync).toEqual([]);
    expect(g.labels.has("mama")).toBe(false);
    expect(g.labels.has("papa")).toBe(false);
  });
  it("Papa actief → account hoort bij Papa: lijn en sync naar Papa, Mama niets", () => {
    const g = koppelGraaf(profielen, () => null, { ingelogd: true, huidigeNaam: "papa", accountKinderen: acc });
    expect(g.lijnen).toEqual([lijn("Papa", "Sam", "ouder", "account")]);
    expect(g.sync).toEqual([{ kind: "Sam", linkId: "s1", vanWie: "Papa" }]);
    expect(g.labels.get("papa")).toBe("gekoppeld met Sam");
    expect(g.labels.has("mama")).toBe(false);
  });
  it("ingelogd als Papa: één-tik alleen met Papa (de RPC koppelt aan het ingelogde account)", () => {
    const g = koppelGraaf(profielen, () => null, { ingelogd: true, huidigeNaam: "Papa", accountKinderen: [] });
    expect(g.kandidaten).toEqual([{ kind: "Sam", ouder: "Papa" }, { kind: "Noa", ouder: "Papa" }]);
  });
  it("niet ingelogd: één-tik met elke ouder (knop vraagt eerst om in te loggen)", () => {
    const g = koppelGraaf(profielen, () => null, { ingelogd: false });
    expect(g.kandidaten).toHaveLength(4);
  });
  it("kleuren per ouder verschillend", () => {
    const kop = kv({ sam: { ouder: { van_wie: "Mama" } }, noa: { ouder: { van_wie: "papa" } } });
    const g = koppelGraaf(profielen, kop);
    expect(g.kleur.get("mama")).toBe(KOPPEL_KLEUREN.ouder[0]);
    expect(g.kleur.get("papa")).toBe(KOPPEL_KLEUREN.ouder[1]);
    expect(g.kleur.get("sam")).toBe(KOPPEL_KLEUREN.ouder[0]);
    expect(g.kleur.get("noa")).toBe(KOPPEL_KLEUREN.ouder[1]);
  });
});

describe("koppelGraaf — leerkracht, extern en randgevallen", () => {
  const profielen = [
    { naam: "Mark", role: "ouder" }, { naam: "Juf Els", role: "teacher" },
    { naam: "Brian", role: "leerling" }, { naam: "Olivia", role: "leerling" }, { naam: "Noa", role: "leerling" },
  ];
  const kop = kv({
    brian: { ouder: { van_wie: "Mark" }, leraar: { van_wie: "Juf Els" } },
    olivia: { ouder: { van_wie: "mark" } },
    noa: { ouder: { van_wie: "Oma Truus" }, leraar: { van_wie: "" } },
  });
  const g = koppelGraaf(profielen, kop);

  it("lijnen ouder én leerkracht, hoofdletter-ongevoelig", () => {
    expect(g.lijnen).toEqual([lijn("Mark", "Brian"), lijn("Juf Els", "Brian", "leraar"), lijn("Mark", "Olivia")]);
  });
  it("extern met naam als die bekend is, anders thuis/school", () => {
    expect(g.extern).toEqual([{ kind: "Noa", soort: "ouder", label: "Oma Truus" }, { kind: "Noa", soort: "leraar", label: "school" }]);
    expect(g.labels.get("noa")).toBe("gekoppeld met Oma Truus en school");
  });
  it("labels volwassenen", () => {
    expect(g.labels.get("mark")).toBe("gekoppeld met Brian en Olivia");
    expect(g.labels.get("juf els")).toBe("gekoppeld met Brian");
    expect(g.kleur.get("juf els")).toBe(KOPPEL_KLEUREN.leraar);
  });
  it("niet-ingelogd account-kinderen worden genegeerd", () => {
    const g2 = koppelGraaf(profielen, () => null, { ingelogd: false, accountKinderen: [{ naam: "Brian", linkId: "x" }] });
    expect(g2.lijnen).toEqual([]);
    expect(g2.sync).toEqual([]);
  });
  it("account-kind zonder profiel op dit toestel staat wel in het ouder-label, zonder lijn", () => {
    const g3 = koppelGraaf([{ naam: "Mark", role: "ouder" }], () => null, { ingelogd: true, accountKinderen: [{ naam: "Sem", linkId: "z" }] });
    expect(g3.labels.get("mark")).toBe("gekoppeld met Sem");
    expect(g3.lijnen).toEqual([]);
  });
  it("bestaande toestel-koppeling met een andere ouder wordt nooit overschreven", () => {
    const g4 = koppelGraaf([{ naam: "Mark", role: "ouder" }, { naam: "Brian", role: "leerling" }],
      kv({ brian: { ouder: { van_wie: "" } } }), { ingelogd: true, accountKinderen: [{ naam: "Brian", linkId: "b2" }] });
    expect(g4.sync).toEqual([]);
    expect(g4.lijnen).toEqual([lijn("Mark", "Brian", "ouder", "account")]);
    expect(g4.labels.get("brian")).toBe("gekoppeld met Mark en thuis");
  });
  it("lege of rare invoer crasht niet", () => {
    expect(koppelGraaf([], () => null).lijnen).toEqual([]);
    expect(koppelGraaf([{ naam: "  ", role: "ouder" }, null], () => null).kandidaten).toEqual([]);
  });
});

describe("groepUitNiveau", () => {
  it("groep uit niveau", () => {
    expect(groepUitNiveau("groep8")).toBe("8"); expect(groepUitNiveau("groep12")).toBe("2");
    expect(groepUitNiveau("klas1|havo")).toBe("brugklas"); expect(groepUitNiveau("klas3|vwo")).toBe(null); expect(groepUitNiveau("")).toBe(null);
  });
});
