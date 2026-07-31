// ══════════════════════════════════════════════════════════════════════
// Doorstroomtoets-paraatheidsmeter — pure logica (Familie-laag, geheim).
//
// Vertaalt de mastery-records van een kind (topic_mastery: attempts/correct
// per leerpad) naar een groen/oranje/rood-signaal per Doorstroomtoets-
// onderdeel (rekenen / taal / studievaardigheden). Doel: de ouder ziet in één
// blik of het goed komt — de #1 ouderangst. Eerlijk: dit is een INDICATIE op
// basis van wat het kind oefende, geen garantie/voorspelling.
//
// Bewust géén kind-facing cijfer (STOPLIST/geen prestatiedruk): dit is een
// ouder-scherm binnen de Familie-laag.
// ══════════════════════════════════════════════════════════════════════

// De drie officiële Doorstroomtoets-onderdelen.
export const ONDERDELEN = [
  { key: "rekenen", label: "Rekenen", emoji: "🔢" },
  { key: "taal", label: "Taal & lezen", emoji: "📝" },
  { key: "studievaardigheden", label: "Studievaardigheden", emoji: "🔎" },
];

// Leerpad-`subject` → Doorstroomtoets-onderdeel. Spiegelt de mapping in
// citoMixVragen.js (SUBJECT_TO_PIJLER). Wereldoriëntatie-vakken vallen onder
// studievaardigheden (zoals op de toets: informatie zoeken/lezen in context).
const SUBJECT_TO_ONDERDEEL = {
  rekenen: "rekenen",
  wiskunde: "rekenen",
  cito: "rekenen",
  taal: "taal",
  spelling: "taal",
  "begrijpend-lezen": "taal",
  engels: "taal",
  studievaardigheden: "studievaardigheden",
  aardrijkskunde: "studievaardigheden",
  geschiedenis: "studievaardigheden",
  biologie: "studievaardigheden",
  natuur: "studievaardigheden",
  wereldorientatie: "studievaardigheden",
  verkeer: "studievaardigheden",
  maatschappijleer: "studievaardigheden",
};

export function onderdeelVoorSubject(subject) {
  return SUBJECT_TO_ONDERDEEL[subject] || null;
}

// Drempels — bewust conservatief zodat "groen" iets betekent.
const MIN_POGINGEN_METEN = 12;   // minder dan dit = nog te weinig zicht
const GROEN_PCT = 0.78;
const GROEN_MIN_POGINGEN = 25;
const GROEN_MIN_ONDERWERPEN = 3;
const ORANJE_PCT = 0.6;

export const STATUS = {
  inopbouw: { kleur: "#8899aa", label: "Nog in opbouw", stip: "⚪" },
  rood: { kleur: "#ff6b6b", label: "Aandacht nodig", stip: "🔴" },
  oranje: { kleur: "#ffb74d", label: "Op weg", stip: "🟠" },
  groen: { kleur: "#69f0ae", label: "Op koers", stip: "🟢" },
};

function bepaalStatus({ pogingen, pct, onderwerpen }) {
  if (pogingen < MIN_POGINGEN_METEN || pct == null) return "inopbouw";
  if (pct >= GROEN_PCT && pogingen >= GROEN_MIN_POGINGEN && onderwerpen >= GROEN_MIN_ONDERWERPEN) return "groen";
  if (pct >= ORANJE_PCT) return "oranje";
  return "rood";
}

function zinVoor(status, label) {
  const l = label.toLowerCase();
  switch (status) {
    case "groen": return `${label} ziet er sterk uit — blijf onderhouden.`;
    case "oranje": return `${label} is op de goede weg; nog wat oefening helpt.`;
    case "rood": return `${l} vraagt aandacht — hier valt de meeste winst te halen.`;
    default: return `Nog te weinig geoefend voor ${l} om iets te kunnen zeggen.`;
  }
}

/**
 * Bereken de paraatheid per onderdeel uit mastery-records.
 * @param {Array<{attempts:number, correct:number, path:{subject:string}}>} records
 * @returns {{ onderdelen: Array, totaalPogingen:number, samenvatting:string }}
 */
export function berekenParaatheid(records) {
  const acc = {};
  for (const o of ONDERDELEN) acc[o.key] = { pogingen: 0, goed: 0, onderwerpen: 0 };

  for (const r of Array.isArray(records) ? records : []) {
    const subject = r?.path?.subject;
    const key = onderdeelVoorSubject(subject);
    if (!key || !acc[key]) continue;
    const att = Number(r.attempts) || 0;
    const cor = Number(r.correct) || 0;
    if (att <= 0) continue;
    acc[key].pogingen += att;
    acc[key].goed += cor;
    acc[key].onderwerpen += 1;
  }

  const onderdelen = ONDERDELEN.map((o) => {
    const a = acc[o.key];
    const pct = a.pogingen > 0 ? a.goed / a.pogingen : null;
    const status = bepaalStatus({ pogingen: a.pogingen, pct, onderwerpen: a.onderwerpen });
    return {
      key: o.key,
      label: o.label,
      emoji: o.emoji,
      pogingen: a.pogingen,
      onderwerpen: a.onderwerpen,
      pct: pct == null ? null : Math.round(pct * 100),
      status,
      zin: zinVoor(status, o.label),
    };
  });

  const totaalPogingen = onderdelen.reduce((s, o) => s + o.pogingen, 0);

  // Samenvatting: welke onderdelen zijn al gemeten en hoe staan ze ervoor.
  const gemeten = onderdelen.filter((o) => o.status !== "inopbouw");
  let samenvatting;
  if (gemeten.length === 0) {
    samenvatting = "Nog te weinig oefening om een beeld te geven — oefen een paar onderwerpen, dan vult de meter zich.";
  } else {
    const rood = gemeten.filter((o) => o.status === "rood");
    const groen = gemeten.filter((o) => o.status === "groen");
    if (rood.length) samenvatting = `Grootste winst zit bij ${rood.map((o) => o.label.toLowerCase()).join(" en ")}.`;
    else if (groen.length === gemeten.length) samenvatting = "Alles wat gemeten is, staat op koers — mooi bezig!";
    else samenvatting = "Goed op weg; nog wat gerichte oefening maakt het compleet.";
  }

  return { onderdelen, totaalPogingen, samenvatting };
}

// Demo-records zodat de meter ook zonder eigen historie te bekijken is (preview).
// Gemengd resultaat: rekenen groen, taal oranje, studievaardigheden rood.
export const DEMO_RECORDS = [
  { attempts: 22, correct: 20, path: { subject: "rekenen", title: "Delen" } },
  { attempts: 18, correct: 16, path: { subject: "rekenen", title: "Breuken" } },
  { attempts: 14, correct: 12, path: { subject: "wiskunde", title: "Verhoudingen" } },
  { attempts: 20, correct: 13, path: { subject: "begrijpend-lezen", title: "Hoofdgedachte" } },
  { attempts: 16, correct: 11, path: { subject: "spelling", title: "Werkwoordspelling" } },
  { attempts: 12, correct: 5, path: { subject: "studievaardigheden", title: "Grafieken lezen" } },
  { attempts: 10, correct: 4, path: { subject: "aardrijkskunde", title: "Kaartlezen" } },
];
