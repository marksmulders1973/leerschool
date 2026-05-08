// Bibliotheek van oude examens (PDF's in public/examens/).
// Audit-2 v2 + Mark's idee 2026-05-08: leerlingen kunnen oude examens
// downloaden / inzien om Cito-/eindexamen-stijl te leren herkennen.
//
// Toevoegen van een nieuw examen:
//   1. Sla de PDF op in `public/examens/<id>.pdf`
//   2. Voeg een entry toe aan EXAMENS hieronder
//
// Velden:
//   id        — bestandsnaam zonder .pdf, ook gebruikt als unieke key
//   vak       — wiskunde / nederlands / engels / ...
//   niveau    — vmbo-bb / vmbo-kb / vmbo-gltl / havo / vwo
//   jaar      — int
//   tijdvak   — 1, 2 of "herkansing"
//   titel     — leesbare titel
//   bron      — bv. "examenblad.nl" of "Cito"
//   pagina_s  — geschat aantal pagina's (UI-hint)

export const EXAMENS = [
  {
    id: "wiskunde-vmbo-gltl-2024-tijdvak1",
    vak: "wiskunde",
    niveau: "vmbo-gltl",
    jaar: 2024,
    tijdvak: 1,
    titel: "Wiskunde — VMBO GL/TL",
    bron: "examenblad.nl",
    pagina_s: null,
  },
];

// Vak-labels (voor UI). Gebruik dezelfde keys als `vak` in EXAMENS.
export const VAK_LABELS = {
  wiskunde: { label: "Wiskunde", icon: "🔢", color: "var(--color-brand-primary)" },
  nederlands: { label: "Nederlands", icon: "📝", color: "#00b0ff" },
  engels: { label: "Engels", icon: "📕", color: "#ef4444" },
  biologie: { label: "Biologie", icon: "🧬", color: "#10b981" },
  natuurkunde: { label: "Natuurkunde", icon: "⚗️", color: "#a855f7" },
  scheikunde: { label: "Scheikunde", icon: "🧪", color: "#f59e0b" },
  geschiedenis: { label: "Geschiedenis", icon: "🏛️", color: "#a78bfa" },
  aardrijkskunde: { label: "Aardrijkskunde", icon: "🌍", color: "#2bbd7e" },
  economie: { label: "Economie", icon: "📈", color: "#f59e0b" },
  maatschappijleer: { label: "Maatschappijleer", icon: "⚖️", color: "#06b6d4" },
};

export const NIVEAU_LABELS = {
  "vmbo-bb": "VMBO-BB",
  "vmbo-kb": "VMBO-KB",
  "vmbo-gltl": "VMBO-GL/TL",
  havo: "HAVO",
  vwo: "VWO",
};

export function getExamenUrl(id) {
  return `/examens/${id}.pdf`;
}

// Helpers voor filtering/sortering (gebruikt door ExamensPage).
export function examensPerVak() {
  const out = {};
  for (const e of EXAMENS) {
    if (!out[e.vak]) out[e.vak] = [];
    out[e.vak].push(e);
  }
  // Per vak nieuwste examens eerst.
  for (const k of Object.keys(out)) {
    out[k].sort((a, b) => b.jaar - a.jaar || (b.tijdvak === "herkansing" ? 1 : -1));
  }
  return out;
}

export function examensVoorVak(vak) {
  return EXAMENS
    .filter((e) => e.vak === vak)
    .sort((a, b) => b.jaar - a.jaar);
}
