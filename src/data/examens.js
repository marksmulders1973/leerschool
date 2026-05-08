// Bibliotheek van oude examens.
// Audit-2 v2 + Mark's idee 2026-05-08: leerlingen kunnen oude examens
// inzien om Cito-/eindexamen-stijl te leren herkennen.
//
// TWEE OPSLAG-VARIANTEN per examen:
//   - Lokaal: PDF in public/examens/<id>.pdf — werkt offline, maar
//     groeit het repo en heeft copyright-grijs-gebied.
//   - Extern: link naar examenblad.nl — geen lokale opslag, altijd
//     officiële versie, juridisch veiligst. AANBEVOLEN.
//
// Toevoegen van een nieuw examen — extern (aanbevolen):
//   { id, vak, niveau, jaar, tijdvak, titel, bron: "examenblad.nl",
//     externalUrl, correctieUrl }
//
// Toevoegen lokaal (offline-mode of bijzondere bron):
//   1. Sla PDF op in `public/examens/<id>.pdf`
//   2. Voeg entry toe zonder externalUrl
//
// Velden:
//   id            — unieke key
//   vak           — wiskunde / nederlands / engels / ...
//   niveau        — vmbo-bb / vmbo-kb / vmbo-gltl / havo / vwo
//   jaar          — int
//   tijdvak       — 1, 2 of "herkansing"
//   titel         — leesbare titel
//   bron          — bv. "examenblad.nl" of "Cito"
//   externalUrl   — link naar opgaven (PDF op externe site)
//   correctieUrl  — link naar correctievoorschrift (optioneel)

// Helper om examenblad.nl-URLs te bouwen volgens hun vaste patroon.
// vakCode is een 4-cijferige code per vak (bv "0153" = wisk-vmbo-gltl).
// niveauPad is "vmbo-gl" voor vmbo-gltl/vmbo-gl, "havo" voor havo, etc.
function eb(jaar, tijdvak, niveauPad, vakCode, niveauPrefix, type) {
  // Voorbeeld: https://www.examenblad.nl/2024/vmbo-gl/documenten/cse-1/gt-0153-a-24-1-o
  const yy = String(jaar).slice(-2);
  return `https://www.examenblad.nl/${jaar}/${niveauPad}/documenten/cse-${tijdvak}/${niveauPrefix}-${vakCode}-a-${yy}-${tijdvak}-${type}`;
}

// Vaste codes per (vak, niveau) — bron: examenblad.nl URL-patronen.
const W_VMBO_GLTL = { vakCode: "0153", niveauPad: "vmbo-gl", niveauPrefix: "gt" };

export const EXAMENS = [
  // ── Lokale PDF (Mark's dochter heeft 't gemaakt 2026-05-08) ──────
  {
    id: "wiskunde-vmbo-gltl-2024-tijdvak1",
    vak: "wiskunde",
    niveau: "vmbo-gltl",
    jaar: 2024,
    tijdvak: 1,
    titel: "Wiskunde — VMBO GL/TL",
    bron: "examenblad.nl",
    correctieUrl: eb(2024, 1, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
  },
  // ── Externe links 2025-2021 (5 jaar, beide tijdvakken) ──────────
  {
    id: "wiskunde-vmbo-gltl-2025-tijdvak1",
    vak: "wiskunde", niveau: "vmbo-gltl", jaar: 2025, tijdvak: 1,
    titel: "Wiskunde — VMBO GL/TL", bron: "examenblad.nl",
    externalUrl: eb(2025, 1, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "o"),
    correctieUrl: eb(2025, 1, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
  },
  {
    id: "wiskunde-vmbo-gltl-2025-tijdvak2",
    vak: "wiskunde", niveau: "vmbo-gltl", jaar: 2025, tijdvak: 2,
    titel: "Wiskunde — VMBO GL/TL", bron: "examenblad.nl",
    externalUrl: eb(2025, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "o"),
    correctieUrl: eb(2025, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
  },
  {
    id: "wiskunde-vmbo-gltl-2024-tijdvak2",
    vak: "wiskunde", niveau: "vmbo-gltl", jaar: 2024, tijdvak: 2,
    titel: "Wiskunde — VMBO GL/TL", bron: "examenblad.nl",
    externalUrl: eb(2024, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "o"),
    correctieUrl: eb(2024, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
  },
  {
    id: "wiskunde-vmbo-gltl-2023-tijdvak1",
    vak: "wiskunde", niveau: "vmbo-gltl", jaar: 2023, tijdvak: 1,
    titel: "Wiskunde — VMBO GL/TL", bron: "examenblad.nl",
    externalUrl: eb(2023, 1, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "o"),
    correctieUrl: eb(2023, 1, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
  },
  {
    id: "wiskunde-vmbo-gltl-2023-tijdvak2",
    vak: "wiskunde", niveau: "vmbo-gltl", jaar: 2023, tijdvak: 2,
    titel: "Wiskunde — VMBO GL/TL", bron: "examenblad.nl",
    externalUrl: eb(2023, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "o"),
    correctieUrl: eb(2023, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
  },
  {
    id: "wiskunde-vmbo-gltl-2022-tijdvak1",
    vak: "wiskunde", niveau: "vmbo-gltl", jaar: 2022, tijdvak: 1,
    titel: "Wiskunde — VMBO GL/TL", bron: "examenblad.nl",
    externalUrl: eb(2022, 1, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "o"),
    correctieUrl: eb(2022, 1, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
  },
  {
    id: "wiskunde-vmbo-gltl-2022-tijdvak2",
    vak: "wiskunde", niveau: "vmbo-gltl", jaar: 2022, tijdvak: 2,
    titel: "Wiskunde — VMBO GL/TL", bron: "examenblad.nl",
    externalUrl: eb(2022, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "o"),
    correctieUrl: eb(2022, 2, W_VMBO_GLTL.niveauPad, W_VMBO_GLTL.vakCode, W_VMBO_GLTL.niveauPrefix, "c"),
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

// Geeft de URL voor de opgaven-PDF: extern als externalUrl gezet,
// anders lokaal in /examens/<id>.pdf.
export function getExamenUrl(examen) {
  if (typeof examen === "string") {
    // backwards-compat: als id-string meegegeven wordt
    return `/examens/${examen}.pdf`;
  }
  if (examen?.externalUrl) return examen.externalUrl;
  return `/examens/${examen.id}.pdf`;
}

// Correctievoorschrift-URL (alleen extern beschikbaar voor nu).
export function getCorrectieUrl(examen) {
  return examen?.correctieUrl || null;
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
