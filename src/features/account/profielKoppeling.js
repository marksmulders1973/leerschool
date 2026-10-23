// 🔗 Koppel-lijntjes in de profielkiezer "Wie oefent er?" (Mark 14 okt 2026,
// schermafbeelding: "als ze gekoppeld zijn wordt het oranje met een lijntje,
// bv. ouder 1 is gekoppeld met kind 1 en kind 2").
//
// Bron = wat dit toestel weet (lk_koppelingen per kindnaam: ouder {van_wie},
// leraar {van_wie}) plus, voor een ingelogde ouder, de bevestigde kinderen van
// het account (parent_child_links). Pure functie, los testbaar.
//
// 21 okt 2026: herbouwd tot koppelGraaf (hieronder) — labels, lijnen, kleuren, één-tik-kandidaten
// en de toestel-sync komen nu uit één functie. Tekenen van de lijnen: KoppelLijnen in WieOefentEr.jsx.

const laag = (s) => String(s || "").trim().toLowerCase();

function opsom(namen) {
  const l = [...new Set(namen.map((n) => String(n || "").trim()).filter(Boolean))];
  if (l.length <= 1) return l.join("");
  return l.slice(0, -1).join(", ") + " en " + l[l.length - 1];
}

// ─────────────────────────────────────────────────────────────────────────────
// 🧭 koppelGraaf — één bron van waarheid voor "wie is met wie gekoppeld" op dit
// toestel (Mark 21 okt 2026: lijntjes tussen de profielen; "bouw het goed, dit is
// het hart van het verdienmodel").
//
// Waarom één functie: tot 21 okt keken het ouder-label, de kindkaart en de
// koppelknop elk naar een andere bron. Gevolg op Marks telefoon: "Marksmul —
// gekoppeld met Olivia" (uit het account) én tegelijk de knop "Koppel Olivia aan
// Marksmul" (want op de telefoon zelf stond Olivia niet gekoppeld).
//
// Bronnen:
//  1. toestel: lk_koppelingen per kindnaam → { ouder?:{van_wie,link_id}, leraar?:{…} }
//  2. account: bevestigde parent_child_links van het INGELOGDE ouder-account.
//     Die horen bij één ouderprofiel op dit toestel ("accountOuder"): het enige
//     ouderprofiel, of anders het actieve profiel als dat een ouder is. Is dat niet
//     eenduidig (bv. Mama én Papa op de tablet, kind actief), dan tekenen we geen
//     account-lijnen: liever geen lijn dan een lijn naar de verkeerde ouder.
//
// Uitkomst:
//  lijnen   [{ van, naar, soort:"ouder"|"leraar", bron:"toestel"|"account" }]  — beide kanten op dit toestel
//  extern   [{ kind, soort, label }]  — gekoppeld met iemand die hier geen profiel heeft ("thuis", "school", naam)
//  labels   Map(naam lower → "gekoppeld met …")
//  kleur    Map(naam lower → kleur) — per volwassene een eigen kleur; kind krijgt die van zijn eerste lijn
//  kandidaten [{ kind, ouder }] — één-tik-koppelen; alleen kinderen zonder enige ouder-koppeling, en bij een
//             ingelogd account alleen met accountOuder (de RPC koppelt altijd aan het ingelogde account)
//  sync     [{ kind, linkId, vanWie }] — account kent de koppeling, toestel nog niet: zelfde als de één-tik-knop,
//             zodat het oefenwerk van dit kind voortaan het link_id meekrijgt (ouder ziet het in het dashboard)
// ─────────────────────────────────────────────────────────────────────────────

//  buiten   [{ sleutel, naam, soort, kinderen }] — (23 okt) wie op een ánder toestel meekijkt, gebundeld per
//           naam: krijgt een eigen blokje in "Op een ander toestel", met een pijl naar elk kind
//
// 23 okt 2026 (Mark: "zeg liefst de naam, bv. pappa Mark, anders mijn toestel of andere telefoon";
// "sommige kinderen worden bekeken door 2 ouders, andere maar door één"): een kind kan meerdere
// ouder-koppelingen hebben (kop.ouders); de naam = koppelNaam(van_wie, voornaam).

export const KOPPEL_KLEUREN = { ouder: ["#ffb74d", "#64b5f6", "#81c784", "#f48fb1", "#4dd0e1"], leraar: "#ce93d8" };
export const ONBEKEND_TOESTEL = "Ander toestel";

// "Pappa" + "Mark" → "Pappa Mark"; "Oma Truus" + "Truus" → "Oma Truus"; alleen "Deianera" → "Deianera".
// Een rolwoord (papa, mama, opa, juf…) krijgt de voornaam erachter; een eigen naam blijft zoals hij is.
const ROLWOORD = /^(pap+a|mam+a|pap|mam|pa|ma|opa|oma|opi|omi|vader|moeder|tante|oom|juf|meester|ouder|verzorger|voogd|pleeg\S*|stief\S*|papi|mami)$/i;
const hoofd = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
export function koppelNaam(vanWie, voornaam) {
  const vw = String(vanWie || "").trim().replace(/\s+/g, " ");
  const vn = String(voornaam || "").trim();
  if (!vw) return vn;
  if (vn && laag(vw).startsWith(laag(vn) + " ") && !ROLWOORD.test(vw.split(" ")[0])) return vn; // "Deianera Meinders" → "Deianera"
  if (!vn || laag(vw).includes(laag(vn)) || !ROLWOORD.test(vw)) return hoofd(vw);
  return `${hoofd(vw)} ${vn}`;
}
const ouderKoppelingen = (kop) => (Array.isArray(kop?.ouders) && kop.ouders.length ? kop.ouders.filter(Boolean) : kop?.ouder ? [kop.ouder] : []);

const isOuder = (p) => p.role === "ouder";
const isLeraar = (p) => p.role === "teacher";
const isKind = (p) => !isOuder(p) && !isLeraar(p);

/**
 * @param {Array<{naam:string, role:string}>} profielen  profielen op dit toestel
 * @param {(naam:string)=>({ouder?:{van_wie?:string}, leraar?:{van_wie?:string}}|null)} koppelingVoor
 * @param {{ingelogd?:boolean, accountKinderen?:Array<{naam:string, linkId?:string}>, huidigeNaam?:string}} account
 */
export function koppelGraaf(profielen, koppelingVoor, { ingelogd = false, accountKinderen = [], huidigeNaam = "" } = {}) {
  const lijst = (profielen || []).filter((p) => p && String(p.naam || "").trim());
  const ouders = lijst.filter(isOuder);
  const leraren = lijst.filter(isLeraar);
  const kinderen = lijst.filter(isKind);
  const vind = (groep, naam) => groep.find((p) => laag(p.naam) === laag(naam)) || null;

  let accountOuder = null;
  if (ingelogd) {
    if (ouders.length === 1) accountOuder = ouders[0].naam;
    else accountOuder = vind(ouders, huidigeNaam)?.naam || null;
  }
  const accountPer = new Map((accountKinderen || []).filter((c) => c && String(c.naam || "").trim()).map((c) => [laag(c.naam), c]));

  const lijnen = [], extern = [], sync = [];
  const heeftOuderKoppeling = new Set();
  for (const k of kinderen) {
    const kop = koppelingVoor(k.naam) || null;
    for (const ko of ouderKoppelingen(kop)) {
      heeftOuderKoppeling.add(laag(k.naam));
      const naam = koppelNaam(ko.van_wie, ko.voornaam);
      const o = [naam, ko.van_wie, ko.voornaam].map((n) => (String(n || "").trim() ? vind(ouders, n) : null)).find(Boolean);
      if (o) {
        if (!lijnen.some((x) => x.soort === "ouder" && x.van === o.naam && x.naar === k.naam)) lijnen.push({ van: o.naam, naar: k.naam, soort: "ouder", bron: "toestel" });
      } else if (!extern.some((x) => x.kind === k.naam && x.soort === "ouder" && laag(x.label) === laag(naam))) {
        extern.push({ kind: k.naam, soort: "ouder", label: naam });
      }
    }
    if (kop?.leraar) {
      const naam = koppelNaam(kop.leraar.van_wie, kop.leraar.voornaam);
      const l = [naam, kop.leraar.van_wie].map((n) => (String(n || "").trim() ? vind(leraren, n) : null)).find(Boolean);
      if (l) lijnen.push({ van: l.naam, naar: k.naam, soort: "leraar", bron: "toestel" });
      else extern.push({ kind: k.naam, soort: "leraar", label: naam || "school" });
    }
    const acc = accountOuder ? accountPer.get(laag(k.naam)) : null;
    if (acc) {
      heeftOuderKoppeling.add(laag(k.naam));
      if (!lijnen.some((x) => x.soort === "ouder" && laag(x.van) === laag(accountOuder) && laag(x.naar) === laag(k.naam))) {
        lijnen.push({ van: accountOuder, naar: k.naam, soort: "ouder", bron: "account" });
      }
      // Toestel kent nog geen ouder-koppeling → zelfde vastleggen als de één-tik-knop.
      // Een bestaande toestel-koppeling (bv. met een ouder op een ander toestel) nooit overschrijven.
      if (!kop?.ouder && acc.linkId) sync.push({ kind: k.naam, linkId: acc.linkId, vanWie: accountOuder });
    }
  }

  // Labels: volwassene → kinderen (+ account-kinderen die hier geen profiel hebben); kind → volwassenen.
  const labels = new Map();
  for (const v of [...ouders, ...leraren]) {
    const namen = lijnen.filter((x) => laag(x.van) === laag(v.naam)).map((x) => x.naar);
    if (accountOuder && laag(v.naam) === laag(accountOuder)) {
      for (const c of accountPer.values()) if (!vind(kinderen, c.naam)) namen.push(c.naam);
    }
    if (namen.length) labels.set(laag(v.naam), `gekoppeld met ${opsom(namen)}`);
  }
  for (const k of kinderen) {
    const namen = [
      ...lijnen.filter((x) => laag(x.naar) === laag(k.naam)).map((x) => x.van),
      ...extern.filter((x) => laag(x.kind) === laag(k.naam)).map((x) => x.label || "een ander toestel"),
    ];
    if (namen.length) labels.set(laag(k.naam), `gekoppeld met ${opsom(namen)}`);
  }

  // Wie op een ander toestel meekijkt: één blokje per naam (Deianera met Brian én Olivia = één blokje).
  const buiten = [];
  for (const e of extern) {
    const sleutel = `buiten:${e.soort}:${laag(e.label) || "onbekend"}`;
    let b = buiten.find((x) => x.sleutel === sleutel);
    if (!b) { b = { sleutel, naam: e.label || ONBEKEND_TOESTEL, soort: e.soort, kinderen: [] }; buiten.push(b); }
    if (!b.kinderen.includes(e.kind)) b.kinderen.push(e.kind);
  }

  // Kleuren: per volwassene vast op volgorde van de plekken (ouder 1, ouder 2, leerkracht),
  // daarna de ouders op een ander toestel met de volgende kleuren.
  const kleur = new Map();
  const pal = KOPPEL_KLEUREN.ouder;
  ouders.forEach((o, i) => kleur.set(laag(o.naam), pal[i % pal.length]));
  leraren.forEach((l) => kleur.set(laag(l.naam), KOPPEL_KLEUREN.leraar));
  let volgende = ouders.length;
  for (const b of buiten) kleur.set(b.sleutel, b.soort === "leraar" ? KOPPEL_KLEUREN.leraar : pal[volgende++ % pal.length]);
  for (const k of kinderen) {
    const eerste = lijnen.find((x) => laag(x.naar) === laag(k.naam));
    const eersteBuiten = buiten.find((b) => b.kinderen.some((n) => laag(n) === laag(k.naam)));
    if (eerste) kleur.set(laag(k.naam), kleur.get(laag(eerste.van)));
    else if (eersteBuiten) kleur.set(laag(k.naam), kleur.get(eersteBuiten.sleutel));
  }

  const kandidaatOuders = accountOuder ? ouders.filter((o) => laag(o.naam) === laag(accountOuder)) : ouders;
  const kandidaten = [];
  for (const k of kinderen) {
    if (heeftOuderKoppeling.has(laag(k.naam))) continue;
    for (const o of kandidaatOuders) kandidaten.push({ kind: k.naam, ouder: o.naam });
  }

  return { lijnen, extern, buiten, labels, kleur, kandidaten: kandidaten.slice(0, 6), sync, accountOuder };
}

/** Groep-waarde voor de server ("8", "brugklas") uit een app-niveau ("groep8", "klas1|havo"). */
export function groepUitNiveau(level) {
  const l = String(level || "");
  if (/^groep12$/.test(l)) return "2";
  const m = l.match(/^groep(\d)$/);
  if (m) return m[1];
  if (/^klas1(\||$)/.test(l)) return "brugklas";
  return null;
}
