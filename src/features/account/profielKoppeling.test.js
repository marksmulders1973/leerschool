import { describe, it, expect } from "vitest";
import { koppelGraaf, groepUitNiveau, koppelNaam, KOPPEL_KLEUREN } from "./profielKoppeling.js";

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

  it("lijn Marksmul → Olivia uit het account; Brian extern zonder naam → blokje 'Ander toestel'", () => {
    expect(g.lijnen).toEqual([lijn("Marksmul", "Olivia", "ouder", "account")]);
    expect(g.extern).toEqual([{ kind: "Brian", soort: "ouder", label: "" }]);
    expect(g.buiten).toEqual([{ sleutel: "buiten:ouder:onbekend", naam: "Ander toestel", soort: "ouder", kinderen: ["Brian"] }]);
  });
  it("label en kaart zeggen hetzelfde (de oude tegenstrijdigheid)", () => {
    expect(g.labels.get("marksmul")).toBe("gekoppeld met Olivia");
    expect(g.labels.get("olivia")).toBe("gekoppeld met Marksmul");
    expect(g.labels.get("brian")).toBe("gekoppeld met een ander toestel");
    expect(g.labels.has("mark")).toBe(false);
  });
  it("geen knop 'Koppel Olivia' meer; alleen Mark (en Brian heeft al een ouder)", () => {
    expect(g.kandidaten).toEqual([{ kind: "Mark", ouder: "Marksmul" }]);
  });
  it("toestel krijgt Olivia's koppeling erbij (zelfde als de één-tik-knop)", () => {
    expect(g.sync).toEqual([{ kind: "Olivia", linkId: "d48c", vanWie: "Marksmul" }]);
  });
  it("kleuren: ouder 1 oranje, Olivia dezelfde kleur, Brian de kleur van zijn blokje", () => {
    expect(g.kleur.get("marksmul")).toBe(KOPPEL_KLEUREN.ouder[0]);
    expect(g.kleur.get("olivia")).toBe(KOPPEL_KLEUREN.ouder[0]);
    expect(g.kleur.get("brian")).toBe(KOPPEL_KLEUREN.ouder[1]);
    expect(g.kleur.get("buiten:ouder:onbekend")).toBe(KOPPEL_KLEUREN.ouder[1]);
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
    expect(g4.labels.get("brian")).toBe("gekoppeld met Mark en een ander toestel");
  });
  it("lege of rare invoer crasht niet", () => {
    expect(koppelGraaf([], () => null).lijnen).toEqual([]);
    expect(koppelGraaf([{ naam: "  ", role: "ouder" }, null], () => null).kandidaten).toEqual([]);
  });
});

describe("koppelGraaf — op een ander toestel (Mark 23 okt 2026)", () => {
  const profielen = [
    { naam: "Marksmul", role: "ouder" },
    { naam: "Brian", role: "leerling" }, { naam: "Olivia", role: "leerling" }, { naam: "Mark", role: "leerling" },
  ];
  it("Deianera (naam opgezocht) kijkt mee bij Brian én Olivia → één blokje, twee pijlen", () => {
    const kop = kv({
      brian: { ouder: { link_id: "b1", van_wie: "", voornaam: "Deianera" } },
      olivia: { ouders: [{ link_id: "o1", van_wie: "Deianera Meinders", voornaam: "Deianera" }], ouder: { link_id: "o1" } },
    });
    const g = koppelGraaf(profielen, kop);
    expect(g.buiten).toEqual([{ sleutel: "buiten:ouder:deianera", naam: "Deianera", soort: "ouder", kinderen: ["Brian", "Olivia"] }]);
    expect(g.labels.get("brian")).toBe("gekoppeld met Deianera");
    expect(g.labels.get("olivia")).toBe("gekoppeld met Deianera");
  });
  it("twee ouders bij één kind: Pappa Mark op een ander toestel + Deianera; Mark maar één", () => {
    const kop = kv({ brian: { ouders: [
      { link_id: "b0", van_wie: "Pappa", voornaam: "Mark" },
      { link_id: "b1", van_wie: "", voornaam: "Deianera" },
    ] } });
    const g = koppelGraaf(profielen, kop);
    expect(g.buiten.map((b) => b.naam)).toEqual(["Pappa Mark", "Deianera"]);
    expect(g.labels.get("brian")).toBe("gekoppeld met Pappa Mark en Deianera");
    expect(g.kandidaten.map((k) => k.kind)).toEqual(["Olivia", "Mark"]);
  });
  it("naam van een ander toestel die hier ook een profiel heeft → gewone lijn, geen blokje", () => {
    const g = koppelGraaf(profielen, kv({ brian: { ouders: [{ link_id: "x", van_wie: "", voornaam: "Marksmul" }] } }));
    expect(g.lijnen).toEqual([lijn("Marksmul", "Brian")]);
    expect(g.buiten).toEqual([]);
  });
  it("dezelfde koppeling dubbel opgeslagen → één lijn", () => {
    const g = koppelGraaf(profielen, kv({ brian: { ouders: [{ van_wie: "Marksmul" }, { van_wie: "marksmul" }] } }));
    expect(g.lijnen).toEqual([lijn("Marksmul", "Brian")]);
  });
});

describe("koppelGraaf — linkVoor (welke koppeling hoort bij welke lijn)", () => {
  it("toestel, ander toestel en account", () => {
    const g = koppelGraaf(
      [{ naam: "Marksmul", role: "ouder" }, { naam: "Brian", role: "leerling" }, { naam: "Olivia", role: "leerling" }],
      kv({ brian: { ouders: [{ link_id: "b1", voornaam: "Deianera" }] }, olivia: { ouder: { link_id: "o-toestel", van_wie: "Marksmul" } } }),
      { ingelogd: true, accountKinderen: [{ naam: "Olivia", linkId: "o-account" }] },
    );
    expect(g.linkVoor.get("buiten:ouder:deianera>brian")).toBe("b1");
    expect(g.linkVoor.get("marksmul>olivia")).toBe("o-account");
  });
});

describe("koppelNaam", () => {
  it("rolwoord + voornaam, anders de naam zelf", () => {
    expect(koppelNaam("Pappa", "Mark")).toBe("Pappa Mark");
    expect(koppelNaam("mama", "Deianera")).toBe("Mama Deianera");
    expect(koppelNaam("Oma Truus", "Truus")).toBe("Oma Truus");
    expect(koppelNaam("Deianera Meinders", "Deianera")).toBe("Deianera");
    expect(koppelNaam("", "Deianera")).toBe("Deianera");
    expect(koppelNaam("Papa", "")).toBe("Papa");
    expect(koppelNaam("Tante Jo", "Joke")).toBe("Tante Jo");
    expect(koppelNaam("", "")).toBe("");
  });
});

describe("groepUitNiveau", () => {
  it("groep uit niveau", () => {
    expect(groepUitNiveau("groep8")).toBe("8"); expect(groepUitNiveau("groep12")).toBe("2");
    expect(groepUitNiveau("klas1|havo")).toBe("brugklas"); expect(groepUitNiveau("klas3|vwo")).toBe(null); expect(groepUitNiveau("")).toBe(null);
  });
});
