// 🎒 Middelbare school = niveau + leerjaar (Noa, testgroep 8 okt 2026: "vanaf de middelbare is
// het per niveau, niet per klas — mavo heeft 4 leerjaren, havo 5, vwo en gymnasium 6"; Mark:
// "bijvoorbeeld mavo klas 2"). De app bewaart het leerjaar als los cijfer (`level`, "1"-"6") en
// het niveau als `schoolType`. Deze module is de enige plek die weet welke combinaties bestaan,
// hoe ze heten en welke leerpaden erbij passen.

export const VO_TYPES = [
  { key: "vmbo-bk", label: "vmbo basis/kader", kort: "vmbo-bk", jaren: 4 },
  { key: "vmbo-gt", label: "vmbo-gt / mavo", kort: "mavo", jaren: 4 },
  { key: "havo", label: "havo", kort: "havo", jaren: 5 },
  { key: "vwo", label: "vwo / gymnasium", kort: "vwo", jaren: 6 },
];
// Veel scholen hebben gemengde brugklassen; die bestaan alleen in klas 1 en 2.
export const BRUGKLAS_TYPES = [
  { key: "vmbo-havo", label: "brugklas mavo/havo", kort: "mavo/havo", jaren: 2 },
  { key: "havo-vwo", label: "brugklas havo/vwo", kort: "havo/vwo", jaren: 2 },
];
const ALLE = [...VO_TYPES, ...BRUGKLAS_TYPES];
const BY_KEY = Object.fromEntries(ALLE.map((t) => [t.key, t]));
// Oudere sleutels (startpagina, niveau-banner): zelfde betekenis, andere naam.
const ALIAS = { mavo: "vmbo-gt", "vmbo-tl": "vmbo-gt", gym: "vwo", gymnasium: "vwo" };
export function normType(schoolType) { const k = String(schoolType || "").toLowerCase(); return ALIAS[k] || k; }

/** Alle geldige keuzes, gegroepeerd per niveau: [{ type, opties: [{ value, label, klas, schoolType }] }]. */
export function voKeuzes() {
  return ALLE.map((t) => ({
    type: t,
    opties: Array.from({ length: t.jaren }, (_, i) => ({
      value: `klas${i + 1}|${t.key}`,
      label: t.jaren === 2 ? `${cap(t.label)}, klas ${i + 1}` : `${cap(t.kort)} ${i + 1}`,
      klas: i + 1,
      schoolType: t.key,
    })),
  }));
}

const cap = (s) => String(s).charAt(0).toUpperCase() + String(s).slice(1);

/** Bekend, nieuw niveau? (oude profielen hebben "havo-vwo" voor álle klassen of "brugklas"). */
export function isVoType(schoolType) { return !!BY_KEY[normType(schoolType)]; }

/** "Havo 4", "Mavo 2", "Brugklas havo/vwo, klas 1"; onbekend niveau → "Klas 4". */
export function voLabel(schoolType, klas) {
  const t = BY_KEY[normType(schoolType)];
  const k = Number(klas);
  if (!t || !k) return k ? `Klas ${k}` : "Middelbare school";
  // Oude profielen kregen "havo-vwo" voor elke klas: boven klas 2 is dat gewoon "Havo/vwo 4".
  if (t.jaren === 2 && k > 2) return `${cap(t.kort)} ${k}`;
  if (t.jaren === 2) return `${cap(t.label)}, klas ${k}`;
  return `${cap(t.kort)} ${k}`;
}

/** Hoogste leerjaar bij dit niveau (onbekend → 6). */
export function maxJaar(schoolType) { return BY_KEY[normType(schoolType)]?.jaren || 6; }

/**
 * Past een leerpad-`level` bij dit niveau? Alleen het niveau, niet het leerjaar
 * (dat doet padBijKlas). Leerpad-levels zijn bont: "klas1-2" (iedereen),
 * "klas2-3-vmbo-vwo" (iedereen), "klas1-vwo", "havo4-5-vwo", "havo-vwo-4-5",
 * "vmbo-gt-4", "vwo". Zonder bekend niveau (oude profielen) past alles.
 */
export function padPastBijSchoolType(level, schoolTypeRuw) {
  if (!isVoType(schoolTypeRuw)) return true;
  const schoolType = normType(schoolTypeRuw);
  const l = String(level || "").toLowerCase();
  const noemtVmbo = /vmbo|mavo/.test(l);
  const noemtHavo = /havo/.test(l);
  const noemtVwo = /vwo|gym/.test(l);
  if (!noemtVmbo && !noemtHavo && !noemtVwo) return true; // "klas1-2" e.d.: voor iedereen
  // "klas2-3-vmbo-vwo" = van vmbo tot vwo → iedereen
  if (noemtVmbo && noemtVwo) return true;
  const isVmbo = /^vmbo|^vmbo-havo/.test(schoolType);
  const isHavo = schoolType === "havo" || schoolType === "vmbo-havo" || schoolType === "havo-vwo";
  const isVwo = schoolType === "vwo" || schoolType === "havo-vwo";
  // vmbo-gt-examenstof is niet voor basis/kader.
  if (noemtVmbo && /gt|tl|gl/.test(l) && schoolType === "vmbo-bk") return false;
  return (isVmbo && noemtVmbo) || (isHavo && noemtHavo) || (isVwo && noemtVwo);
}
