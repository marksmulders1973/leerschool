// Gepersonaliseerde avatar (WhatsApp-feedback 11 aug, 17:34 + 20:30):
// een opgebouwd poppetje — géén foto (privacy) — dat het kind zelf
// samenstelt: huidskleur, haarkleur, shirtkleur en postuur.
// Opslag: JSON in localStorage `lk_avatar:<naam>`; oude opslag (een los
// kleurcombinatie-nummer) wordt automatisch omgezet.

const HUID = ["#F0C9A4", "#EBB98C", "#D9A066", "#8D5A3B", "#5E3A25", "#F5DCC4"];
const HAAR = ["#3B2A1E", "#1B1310", "#C96A2B", "#7A6650", "#E8C46A", "#4A4A58"];
const SHIRT = ["#17BFA0", "#FFC53D", "#E8467C", "#5A8DEE", "#B06AE8", "#00c853"];
const POSTUUR = [
  { id: "smal", label: "Smal", schaal: 0.85 },
  { id: "gewoon", label: "Gewoon", schaal: 1 },
  { id: "stevig", label: "Stevig", schaal: 1.2 },
];

export const AVATAR_DELEN = { HUID, HAAR, SHIRT, POSTUUR };

// Legacy kleurcombinaties (v250 sloeg alleen een index 0-5 op).
const LEGACY_COMBOS = [
  { huid: HUID[0], haar: HAAR[0], shirt: SHIRT[0] },
  { huid: HUID[3], haar: HAAR[1], shirt: SHIRT[1] },
  { huid: HUID[5], haar: HAAR[2], shirt: SHIRT[2] },
  { huid: HUID[4], haar: HAAR[1], shirt: SHIRT[3] },
  { huid: HUID[1], haar: HAAR[3], shirt: SHIRT[4] },
  { huid: HUID[2], haar: HAAR[0], shirt: SHIRT[5] },
];

const DEFAULT_CONFIG = { huid: HUID[0], haar: HAAR[0], shirt: SHIRT[0], postuur: "gewoon" };

function avatarKey(player) {
  return `lk_avatar:${(player || "").trim() || "speler"}`;
}

export function loadAvatarConfig(player) {
  try {
    const raw = localStorage.getItem(avatarKey(player));
    if (!raw) return { ...DEFAULT_CONFIG };
    if (/^\d+$/.test(raw.trim())) {
      const combo = LEGACY_COMBOS[Number(raw) % LEGACY_COMBOS.length] || LEGACY_COMBOS[0];
      return { ...DEFAULT_CONFIG, ...combo };
    }
    const obj = JSON.parse(raw);
    return { ...DEFAULT_CONFIG, ...obj };
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

export function saveAvatarConfig(player, config) {
  try { localStorage.setItem(avatarKey(player), JSON.stringify(config)); } catch {}
}

export function AvatarSvg({ config, size = 72, rond = true }) {
  const c = { ...DEFAULT_CONFIG, ...(config || {}) };
  const schaal = (POSTUUR.find((p) => p.id === c.postuur) || POSTUUR[1]).schaal;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ borderRadius: rond ? "50%" : 12, display: "block", flexShrink: 0 }}
      aria-hidden="true"
    >
      <rect width="100" height="100" fill="#2C3E63" />
      {/* Romp — postuur schaalt de breedte rond het midden */}
      <g transform={`translate(50 0) scale(${schaal} 1) translate(-50 0)`}>
        <path d="M50 62c19 0 32 14 32 30v8H18v-8c0-16 13-30 32-30z" fill={c.shirt} />
      </g>
      <rect x="42" y="52" width="16" height="14" rx="7" fill={c.huid} />
      <circle cx="50" cy="40" r="20" fill={c.huid} />
      <path d="M30 38c0-12 9-19 20-19s20 7 20 19c0 0-6-6-20-6s-20 6-20 6z" fill={c.haar} />
      <circle cx="43" cy="41" r="2.6" fill="#16233F" />
      <circle cx="57" cy="41" r="2.6" fill="#16233F" />
      <path d="M44 48c3 3 9 3 12 0" stroke="#16233F" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
