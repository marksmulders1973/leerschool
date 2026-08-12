// Gepersonaliseerde avatar (WhatsApp-feedback 11 aug, 17:34 + 20:30 + 21:04):
// het kind kiest eerst een BASIS-personage (zoals Mark's voorbeeld-plaatjes:
// getekende kinderen met een Leerkwartier-shirt) en maakt hem daarna
// persoonlijker met kleuren: huid, haar, shirt en postuur. Geen foto's —
// alles is een tekening (privacy).
//
// Opslag: JSON in localStorage `lk_avatar:<naam>`; oudere opslagvormen
// (kleur-index of JSON zonder basis) worden automatisch omgezet.

const HUID = ["#F0C9A4", "#EBB98C", "#D9A066", "#8D5A3B", "#5E3A25", "#F5DCC4"];
const HAAR = ["#3B2A1E", "#14100C", "#C96A2B", "#7A6650", "#E8C46A", "#4A4A58"];
const SHIRT = ["#1B2E5B", "#17BFA0", "#FFC53D", "#E8467C", "#5A8DEE", "#00c853"];
const POSTUUR = [
  { id: "smal", label: "Smal", schaal: 0.85 },
  { id: "gewoon", label: "Gewoon", schaal: 1 },
  { id: "stevig", label: "Stevig", schaal: 1.2 },
];
const BASES = [
  { id: "lang", label: "Lang haar" },
  { id: "kort", label: "Kort haar" },
  { id: "krullen", label: "Krullen" },
  { id: "staartjes", label: "Staartjes" },
  { id: "kuif", label: "Kuif" },
  { id: "bril", label: "Bril" },
];

export const AVATAR_DELEN = { HUID, HAAR, SHIRT, POSTUUR, BASES };
export { PLAATJES as AVATAR_PLAATJES };

// Legacy kleurcombinaties (v250 sloeg alleen een index 0-5 op).
const LEGACY_COMBOS = [
  { huid: HUID[0], haar: HAAR[0], shirt: SHIRT[1] },
  { huid: HUID[3], haar: HAAR[1], shirt: SHIRT[2] },
  { huid: HUID[5], haar: HAAR[2], shirt: SHIRT[3] },
  { huid: HUID[4], haar: HAAR[1], shirt: SHIRT[4] },
  { huid: HUID[1], haar: HAAR[3], shirt: SHIRT[5] },
  { huid: HUID[2], haar: HAAR[0], shirt: SHIRT[0] },
];

// Exacte illustraties (Mark 11 aug ~22u: "ik wil exacte avatars gebruiken") —
// de getekende Leerkwartier-personages uit Mark's voorbeelden. Meer plaatjes
// toevoegen = bestand in public/avatars/ + regel hierbij.
const PLAATJES = [
  { id: "p1", src: "/avatars/plaatje-1.jpg", label: "Meisje met lang zwart haar" },
  { id: "p2", src: "/avatars/plaatje-2.jpg", label: "Jongen met zwarte krullen" },
  { id: "p3", src: "/avatars/plaatje-3.jpg", label: "Jongen met kort donker haar" },
];

// soort: "zelf" (aanpasbaar getekend poppetje) | "plaatje" (exacte illustratie)
// | "foto" (eigen foto — blijft op het apparaat, wordt nooit geüpload)
// | "kiezer" (Mark's inkleur-avatar 12 aug: gezicht kiezen + haar/huid/ogen
//   schuiven; het ingekleurde beeld wordt lokaal bewaard als data-URL).
const DEFAULT_CONFIG = { soort: "zelf", basis: "lang", huid: HUID[0], haar: HAAR[0], shirt: SHIRT[0], postuur: "gewoon", plaatje: "p1", kiezer: null, kiezerKleur: null };

function avatarKey(player) {
  return `lk_avatar:${(player || "").trim() || "speler"}`;
}

function fotoKey(player) {
  return `lk_avatar_foto:${(player || "").trim() || "speler"}`;
}

function kiezerKey(player) {
  return `lk_avatar_kiezer:${(player || "").trim() || "speler"}`;
}

// Ingekleurd kiezer-beeld: net als de foto een aparte (grotere) sleutel,
// lokaal op het apparaat.
export function loadAvatarKiezerBeeld(player) {
  try { return localStorage.getItem(kiezerKey(player)) || null; } catch { return null; }
}

export function saveAvatarKiezerBeeld(player, dataUrl) {
  try {
    if (dataUrl) localStorage.setItem(kiezerKey(player), dataUrl);
    else localStorage.removeItem(kiezerKey(player));
    return true;
  } catch { return false; }
}

// Eigen foto: bewust ALLEEN lokaal (localStorage, verkleind) — geen upload,
// geen server, dus ook geen opslag van kind-foto's aan onze kant (AVG).
export function loadAvatarFoto(player) {
  try { return localStorage.getItem(fotoKey(player)) || null; } catch { return null; }
}

export function saveAvatarFoto(player, dataUrl) {
  try {
    if (dataUrl) localStorage.setItem(fotoKey(player), dataUrl);
    else localStorage.removeItem(fotoKey(player));
    return true;
  } catch { return false; }
}

export function loadAvatarConfig(player) {
  try {
    const raw = localStorage.getItem(avatarKey(player));
    let cfg;
    if (!raw) cfg = { ...DEFAULT_CONFIG };
    else if (/^\d+$/.test(raw.trim())) {
      const combo = LEGACY_COMBOS[Number(raw) % LEGACY_COMBOS.length] || LEGACY_COMBOS[0];
      cfg = { ...DEFAULT_CONFIG, ...combo };
    } else {
      cfg = { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
    }
    // Foto is een aparte (grote) sleutel — alleen inladen als hij gekozen is.
    if (cfg.soort === "foto") {
      cfg.fotoUrl = loadAvatarFoto(player);
      if (!cfg.fotoUrl) cfg.soort = "zelf"; // foto weg (ander apparaat/gewist)
    }
    if (cfg.soort === "kiezer") {
      cfg.kiezerUrl = loadAvatarKiezerBeeld(player);
      if (!cfg.kiezerUrl) cfg.soort = "zelf"; // beeld weg (ander apparaat/gewist)
    }
    return cfg;
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

export function saveAvatarConfig(player, config) {
  try {
    const { fotoUrl, kiezerUrl, ...rest } = config || {};
    localStorage.setItem(avatarKey(player), JSON.stringify(rest));
  } catch {}
}

// ── Tekenlagen ──────────────────────────────────────────────────────

// Haar ACHTER het hoofd (alleen bases met lang(er) haar).
function HaarAchter({ basis, haar }) {
  if (basis === "lang") {
    return <path d="M27 34 Q27 13 50 13 Q73 13 73 34 L75.5 64 Q74 71 66 72 L34 72 Q26 71 24.5 64 Z" fill={haar} />;
  }
  if (basis === "staartjes") {
    return (
      <g fill={haar}>
        <circle cx="24" cy="37" r="6.5" />
        <circle cx="76" cy="37" r="6.5" />
        <circle cx="22.5" cy="45" r="4.5" />
        <circle cx="77.5" cy="45" r="4.5" />
      </g>
    );
  }
  return null;
}

// Haar VOOR/OP het hoofd, per basis-personage.
function HaarVoor({ basis, haar }) {
  const fringeKort = (
    <path d="M30.5 38 Q29 16 50 16 Q71 16 69.5 38 Q66 25 56 24.5 Q50 24.2 44 25.5 Q34 27.5 30.5 38 Z" fill={haar} />
  );
  if (basis === "lang") {
    return (
      <g fill={haar}>
        <path d="M29.5 40 Q28 15 50 15 Q72 15 70.5 40 Q68 26 57 25 Q51 24.6 44 26 Q33 28.5 29.5 40 Z" />
        {/* Lokken langs het gezicht */}
        <path d="M28 33 Q25.5 55 28.8 66 Q33 60 32.4 42 Z" />
        <path d="M72 33 Q74.5 55 71.2 66 Q67 60 67.6 42 Z" />
      </g>
    );
  }
  if (basis === "krullen") {
    return (
      <g fill={haar}>
        <circle cx="33" cy="29" r="6.5" />
        <circle cx="42" cy="22.5" r="6.5" />
        <circle cx="52" cy="20.5" r="6.5" />
        <circle cx="62" cy="23.5" r="6.5" />
        <circle cx="69" cy="30" r="6" />
        <circle cx="29.5" cy="37" r="5.5" />
        <circle cx="70.5" cy="37" r="5.5" />
      </g>
    );
  }
  if (basis === "kuif") {
    return (
      <path
        d="M31 34 Q31 23 36 23.5 L37.5 14.5 Q41.5 20 44 19 L47 10.5 Q49.5 17 52.5 16 L56.5 10 Q58 17 61.5 18 L66 14 Q66.5 21.5 68.5 24.5 Q70.5 28 69 34 Q62 23.5 50 23.5 Q37.5 23.5 31 34 Z"
        fill={haar}
      />
    );
  }
  // kort, staartjes en bril delen dezelfde nette pony.
  return fringeKort;
}

function Bril() {
  return (
    <g stroke="#1d2a45" strokeWidth="1.9" fill="rgba(255,255,255,0.07)">
      <rect x="35.8" y="38" width="11.4" height="9.6" rx="3.4" />
      <rect x="52.8" y="38" width="11.4" height="9.6" rx="3.4" />
      <line x1="47.2" y1="42.2" x2="52.8" y2="42.2" />
      <line x1="35.8" y1="42" x2="31.5" y2="41.5" />
      <line x1="64.2" y1="42" x2="68.5" y2="41.5" />
    </g>
  );
}

export function AvatarSvg({ config, size = 72, rond = true }) {
  const c = { ...DEFAULT_CONFIG, ...(config || {}) };

  // Eigen foto, ingekleurde kiezer-avatar (beide alleen lokaal opgeslagen)
  // of exacte illustratie gekozen?
  const imgSrc = c.soort === "foto" && c.fotoUrl
    ? c.fotoUrl
    : c.soort === "kiezer" && c.kiezerUrl
      ? c.kiezerUrl
      : c.soort === "plaatje"
        ? (PLAATJES.find((p) => p.id === c.plaatje) || PLAATJES[0])?.src
        : null;
  if (imgSrc) {
    const kiezerRing = c.soort === "kiezer" && c.kiezerKleur;
    return (
      <img
        src={imgSrc}
        alt=""
        aria-hidden="true"
        style={{
          width: size, height: size, borderRadius: rond ? "50%" : 12,
          objectFit: "cover", objectPosition: "top", display: "block",
          flexShrink: 0, background: "#2C3E63",
          ...(kiezerRing ? { border: `${Math.max(2, Math.round(size / 24))}px solid ${c.kiezerKleur}` } : {}),
        }}
      />
    );
  }

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

      <HaarAchter basis={c.basis} haar={c.haar} />

      {/* Shirt (postuur schaalt de breedte) mét het Leerkwartier-kwartje */}
      <g transform={`translate(50 0) scale(${schaal} 1) translate(-50 0)`}>
        <path d="M50 63.5 C33 63.5 24 74 22 92 L21.5 100 L78.5 100 L78 92 C76 74 67 63.5 50 63.5 Z" fill={c.shirt} />
        <path d="M42 64.5 Q50 70.5 58 64.5 L57 68 Q50 73 43 68 Z" fill="rgba(255,255,255,0.22)" />
        <path d="M46.5 86 v-6.5 q0 -1 1 -1 h6.5 a7.5 7.5 0 0 1 -7.5 7.5 Z" fill="#7ac52e" />
      </g>

      {/* Nek met schaduwrandje */}
      <path d="M44.5 56 h11 v7.5 a5.5 5.5 0 0 1 -11 0 Z" fill={c.huid} />
      <path d="M44.5 56 h11 v3 q-5.5 2.6 -11 0 Z" fill="rgba(0,0,0,0.13)" />

      {/* Hoofd + oren */}
      <circle cx="31.5" cy="43" r="3.4" fill={c.huid} />
      <circle cx="68.5" cy="43" r="3.4" fill={c.huid} />
      <ellipse cx="50" cy="41" rx="18.5" ry="19.5" fill={c.huid} />

      {/* Gezicht */}
      <path d="M37.5 36 Q42 33 46 35.4" stroke={c.haar} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M54 35.4 Q58 33 62.5 36" stroke={c.haar} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="42" cy="43" rx="3.8" ry="4.4" fill="#fff" />
      <ellipse cx="58" cy="43" rx="3.8" ry="4.4" fill="#fff" />
      <circle cx="42.4" cy="43.6" r="2.6" fill="#4a2f1d" />
      <circle cx="58.4" cy="43.6" r="2.6" fill="#4a2f1d" />
      <circle cx="42.7" cy="44" r="1.25" fill="#1a1208" />
      <circle cx="58.7" cy="44" r="1.25" fill="#1a1208" />
      <circle cx="41.4" cy="42.4" r="0.95" fill="#fff" />
      <circle cx="57.4" cy="42.4" r="0.95" fill="#fff" />
      <path d="M50 44.5 Q51.4 47 49.6 48.7" stroke="rgba(0,0,0,0.22)" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <path d="M44.5 52.2 Q50 56.8 55.5 52.2" stroke="#9c4a3c" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="37.8" cy="49.3" rx="2.9" ry="1.8" fill="#e8467c" opacity="0.2" />
      <ellipse cx="62.2" cy="49.3" rx="2.9" ry="1.8" fill="#e8467c" opacity="0.2" />

      <HaarVoor basis={c.basis} haar={c.haar} />
      {c.basis === "bril" && <Bril />}
    </svg>
  );
}
