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

// Vaste codes per (vak, niveau) — bron: examenblad.nl URL-patronen
// (zie reference_examenblad_urls.md in memory voor het patroon).
const NIVEAU_VMBO_GLTL = { niveauPad: "vmbo-gl", niveauPrefix: "gt" };

// Vakcode-tabel — geverifieerd via curl (alle URLs HTTP 200 in 2026-05-08).
// heeftBijlage: of er een apart bijlage-PDF (-b) bestaat met teksten/bronnen.
// Geverifieerd 2026-05-09 voor 2022-2025, beide tijdvakken — talen + zaakvakken
// hebben bijlage; wiskunde/biologie/aardrijkskunde hebben bronnen in opgaven zelf.
const VAKCODES_VMBO_GLTL = {
  wiskunde:        { code: "0153", titel: "Wiskunde — VMBO GL/TL",       heeftBijlage: false },
  nederlands:      { code: "0011", titel: "Nederlands — VMBO GL/TL",     heeftBijlage: true  },
  engels:          { code: "0071", titel: "Engels — VMBO GL/TL",         heeftBijlage: true  },
  biologie:        { code: "0191", titel: "Biologie — VMBO GL/TL",       heeftBijlage: false },
  economie:        { code: "0233", titel: "Economie — VMBO GL/TL",       heeftBijlage: true  },
  geschiedenis:    { code: "0125", titel: "Geschiedenis — VMBO GL/TL",   heeftBijlage: true  },
  aardrijkskunde:  { code: "0131", titel: "Aardrijkskunde — VMBO GL/TL", heeftBijlage: false },
};

// Helper: genereer entries voor 1 vak × meerdere jaren × 2 tijdvakken.
function genVakSet({ vak, niveau, niveauInfo, vakCode, titel, jaren, heeftBijlage }) {
  const out = [];
  for (const jaar of jaren) {
    for (const tijdvak of [1, 2]) {
      const entry = {
        id: `${vak}-${niveau}-${jaar}-tijdvak${tijdvak}`,
        vak,
        niveau,
        jaar,
        tijdvak,
        titel,
        bron: "examenblad.nl",
        externalUrl: eb(jaar, tijdvak, niveauInfo.niveauPad, vakCode, niveauInfo.niveauPrefix, "o"),
        correctieUrl: eb(jaar, tijdvak, niveauInfo.niveauPad, vakCode, niveauInfo.niveauPrefix, "c"),
      };
      if (heeftBijlage) {
        entry.bijlageUrl = eb(jaar, tijdvak, niveauInfo.niveauPad, vakCode, niveauInfo.niveauPrefix, "b");
      }
      out.push(entry);
    }
  }
  return out;
}

// Bouw alle examens-entries via genereer-helper.
const VMBO_GLTL_JAREN = [2025, 2024, 2023, 2022];

const _vmboGltlExterneEntries = Object.entries(VAKCODES_VMBO_GLTL).flatMap(
  ([vak, info]) => genVakSet({
    vak,
    niveau: "vmbo-gltl",
    niveauInfo: NIVEAU_VMBO_GLTL,
    vakCode: info.code,
    titel: info.titel,
    jaren: VMBO_GLTL_JAREN,
    heeftBijlage: info.heeftBijlage,
  })
);

// Lokale PDF van wiskunde-vmbo-gltl-2024-tijdvak1 — Mark's dochter heeft
// 'm fysiek thuis. Vervang de externe entry voor diezelfde id door de
// lokale variant zodat de PDF in public/examens/ ipv extern wordt
// geserveerd (mocht offline gebruik nodig zijn).
const _vmboGltlEntries = _vmboGltlExterneEntries.map((e) => {
  if (e.id === "wiskunde-vmbo-gltl-2024-tijdvak1") {
    const { externalUrl: _drop, ...rest } = e;
    return rest; // geen externalUrl → valt terug op lokale PDF
  }
  return e;
});

export const EXAMENS = _vmboGltlEntries;

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

// Bijlage-URL — bevat de teksten/bronnen die bij de opgaven horen.
// Talen (Nederlands, Engels) en zaakvakken (economie, geschiedenis) hebben
// een aparte bijlage; wiskunde/biologie/aardrijkskunde hebben bronnen in
// het opgavenboekje zelf en geven hier null terug.
export function getBijlageUrl(examen) {
  return examen?.bijlageUrl || null;
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
