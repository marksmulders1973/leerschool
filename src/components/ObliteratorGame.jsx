import { useEffect, useRef, useState } from "react";
import supabase from "../supabase.js";
import { track } from "../utils.js";

const TOP_LIMIT = 25;

async function laadTopScores() {
  try {
    const { data, error } = await supabase
      .from("obliterator_scores")
      .select("player_name, score, level, created_at")
      .order("score", { ascending: false })
      .order("created_at", { ascending: true })
      .limit(TOP_LIMIT);
    if (error) return [];
    return (data || []).map(d => ({ naam: d.player_name, score: d.score, level: d.level || null, datum: d.created_at?.slice(0, 10) }));
  } catch { return []; }
}

// Pending high-scores die nog niet naar Supabase zijn gepusht (offline gespeeld).
// Wordt geflusht bij component-mount en bij 'online' event.
const PENDING_SCORES_KEY = "obliterator-pending-scores";

function leesPendingScores() {
  try {
    const raw = localStorage.getItem(PENDING_SCORES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function schrijfPendingScores(arr) {
  try { localStorage.setItem(PENDING_SCORES_KEY, JSON.stringify(arr || [])); } catch {}
}
function pushNaarPendingQueue(payload) {
  const queue = leesPendingScores();
  queue.push({ ...payload, _gespeeld_op: Date.now() });
  // cap op 50 om localStorage-bloat te voorkomen
  if (queue.length > 50) queue.splice(0, queue.length - 50);
  schrijfPendingScores(queue);
}

async function schrijfScore(naam, userId, score, level) {
  if (!score || score <= 0) return;
  const payload = {
    player_name: (naam || "Speler").slice(0, 30),
    user_id: userId || null,
    score,
    level: level || null,
  };
  // Direct queue-en zodra offline; vermijdt onnodige network-call die zeker faalt.
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    pushNaarPendingQueue(payload);
    return;
  }
  try {
    const { error } = await supabase.from("obliterator_scores").insert(payload);
    if (error) throw error;
  } catch {
    // Network-failure of API-fout: bewaar lokaal en flush bij volgende online-moment.
    pushNaarPendingQueue(payload);
  }
}

async function flushPendingScores() {
  if (typeof navigator !== "undefined" && navigator.onLine === false) return;
  const queue = leesPendingScores();
  if (!queue.length) return;
  const overgebleven = [];
  for (const item of queue) {
    try {
      const { error } = await supabase.from("obliterator_scores").insert({
        player_name: item.player_name,
        user_id: item.user_id,
        score: item.score,
        level: item.level,
      });
      if (error) overgebleven.push(item);
    } catch {
      overgebleven.push(item);
    }
  }
  schrijfPendingScores(overgebleven);
}

const SESSIE_KEY_PREFIX = "obliterator-sessies-";
const BONUS_KEY_PREFIX = "obliterator-bonus-";
const MUNTEN_KEY_PREFIX = "obliterator-munten-";

// Vaste lijst van admin-spelernamen (lowercase). Het admin-paneel blijft
// bij deze namen — verandert NIET als iemand het wereld-record verbreekt.
// Voeg een naam toe om iemand admin te maken.
const OBLIVION_ADMINS = ["brian"];

// Decoratie-catalogus voor de custom-level-editor. Visueel-only, geen collisie.
// `bob` = optionele auto-animatie (snelheid/amp) voor zwevende elementen.
const DECOR_CATALOG = [
  { id: "decor_boom",         label: "Boom",         emoji: "🌳", grootte: 36 },
  { id: "decor_palm",         label: "Palm",         emoji: "🌴", grootte: 36 },
  { id: "decor_cactus",       label: "Cactus",       emoji: "🌵", grootte: 30 },
  { id: "decor_bloem",        label: "Bloem",        emoji: "🌸", grootte: 22 },
  { id: "decor_tulp",         label: "Tulp",         emoji: "🌷", grootte: 22 },
  { id: "decor_gras",         label: "Gras",         emoji: "🌾", grootte: 22 },
  { id: "decor_paddenstoel",  label: "Paddenstoel",  emoji: "🍄", grootte: 24 },
  { id: "decor_wolk",         label: "Wolk",         emoji: "☁️", grootte: 32, alpha: 0.85, bob: { snelheid: 0.6, amp: 4 } },
  { id: "decor_maan",         label: "Maan",         emoji: "🌙", grootte: 28, alpha: 0.9 },
  { id: "decor_ster",         label: "Ster",         emoji: "⭐", grootte: 22, bob: { snelheid: 1.5, amp: 2 } },
  { id: "decor_vlinder",      label: "Vlinder",      emoji: "🦋", grootte: 24, bob: { snelheid: 4, amp: 6 } },
  { id: "decor_vogel",        label: "Vogel",        emoji: "🐦", grootte: 24, bob: { snelheid: 3, amp: 5 } },
  { id: "decor_rots",         label: "Rots",         emoji: "🪨", grootte: 28 },
  { id: "decor_fakkel",       label: "Fakkel",       emoji: "🔥", grootte: 26, bob: { snelheid: 6, amp: 1.5 } },
];
const DECOR_RENDER = Object.fromEntries(DECOR_CATALOG.map((d) => [d.id, d]));

// Speler-skins. unlockLevel = level dat behaald moet zijn (1 = altijd open,
// null = via speciale unlock zoals Oblivion Pulse).
const SKINS = [
  { id: "default",   label: "Studiebol",  emoji: "🔴", unlockLevel: 1 },
  { id: "spider",    label: "Spin",       emoji: "🕷️", unlockLevel: 10 },
  { id: "popje",     label: "Popje",      emoji: "🪆", unlockLevel: 20 },
  { id: "elephant",  label: "Olifant",    emoji: "🐘", unlockLevel: 30 },
  { id: "trollface", label: "Trollface",  emoji: "😈", unlockLevel: 40 },
  { id: "triangle",  label: "Driehoek",   emoji: "🔺", unlockLevel: 50 },
  { id: "xbox",      label: "Xbox",       emoji: "🎮", unlockLevel: 60 },
  { id: "gorilla",   label: "Gorilla",    emoji: "🦍", unlockLevel: 70 },
  { id: "yinyang",   label: "Yin Yang",   emoji: "☯️", unlockLevel: 80 },
  { id: "eye",       label: "Oog",         emoji: "👁️", unlockLevel: 90 },
  { id: "lvl100",    label: "Level 100",  emoji: "💎", unlockLevel: 100 },
  { id: "blackhole", label: "Black Hole", emoji: "🕳️", unlockLevel: null },
];
const SKIN_BY_ID = Object.fromEntries(SKINS.map((s) => [s.id, s]));

// Mulberry32 — deterministische 32-bit RNG. Beide PvP-spelers gebruiken
// dezelfde seed → identieke obstakel-spawns zonder data uit te wisselen.
function makeMulberry32(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Moeilijkheid-emoji op basis van level (gebruikt in canvas + level-keuze-knoppen).
function moeilijkheidEmoji(lvl) {
  if (lvl <= 5) return "😊";
  if (lvl <= 15) return "🙂";
  if (lvl <= 30) return "😬";
  if (lvl <= 50) return "🔥";
  if (lvl <= 75) return "💀";
  return "👹";
}
function leesInt(key) {
  try { return parseInt(localStorage.getItem(key) || "0", 10) || 0; } catch { return 0; }
}
function schrijfInt(key, val) {
  try { localStorage.setItem(key, String(val)); } catch {}
}

export default function ObliteratorGame({ userName, authUser, wrongQuestions, vanDeelLink, onNaarStudiebol, onClose, onChallengeFriend, pvpMatch, pvpSub, pvpRole, pvpStartsAt }) {
  const pvpMode = !!pvpMatch;
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const springRef = useRef(() => {}); // wordt door game-loop ingevuld
  const prRef = useRef(0); // persoonlijk record (refs voor game-loop closure)
  const wrRef = useRef(0); // wereldrecord (top score)
  const startLevelRef = useRef(1); // bij welk level deze sessie begint (1..MAX_LEVEL)
  const eindLevelRef = useRef(1); // level bij game-over (voor highscore-opslag)
  // Top-3 namen voor de spandoek-fans op de grond (rouleren door highscores).
  // Default-fallback als Supabase nog niet geladen heeft of leeg is.
  const topSpelersRef = useRef(["Brian", "Anouk", "Mark"]);
  const [fase, setFase] = useState(pvpMatch ? "spelen" : "menu"); // PvP slaat menu over
  // Custom-level-editor state
  const [editorObstakels, setEditorObstakels] = useState([]); // [{type, x, y?}]
  const [editorTool, setEditorTool] = useState("spike");
  const [editorLevelNaam, setEditorLevelNaam] = useState("Mijn level");
  const [editorOpslaan, setEditorOpslaan] = useState({ bezig: false, error: null, ok: false });
  const [editorLengte, setEditorLengte] = useState(4000);
  const [editorTab, setEditorTab] = useState("maken"); // "maken" | "mijn" | "spelen"
  // Welke palet-categorie open staat in de Maken-editor
  const [paletCategorie, setPaletCategorie] = useState("mechanica"); // "mechanica" | "decor"
  // Scrollbare editor-canvas: ref naar de scroll-container + huidige scroll-positie
  const editorScrollRef = useRef(null);
  const [editorScrollPx, setEditorScrollPx] = useState(0);
  const [editorViewportW, setEditorViewportW] = useState(320);
  const [communityLevels, setCommunityLevels] = useState([]);
  const [communityLevelsLaden, setCommunityLevelsLaden] = useState(false);
  const [mijnLevels, setMijnLevels] = useState([]);
  const [mijnLevelsLaden, setMijnLevelsLaden] = useState(false);
  // Bumpen om community/mijn-lijst opnieuw te laden na save/delete/toggle
  const [levelsReloadTick, setLevelsReloadTick] = useState(0);
  const [actiefCustomLevel, setActiefCustomLevel] = useState(null); // {id, naam, obstakels, lengte, maker_naam}
  const customLevelRef = useRef(null);
  useEffect(() => { customLevelRef.current = actiefCustomLevel; }, [actiefCustomLevel]);
  // Levels laden zodra speler-tab opent — featured eerst, dan populair, dan recent
  useEffect(() => {
    if (fase !== "custom-editor" || editorTab !== "spelen") return;
    let cancelled = false;
    setCommunityLevelsLaden(true);
    supabase
      .from("obliterator_user_levels")
      .select("id, naam, maker_naam, obstakels, lengte, plays, featured, created_at")
      .eq("publiek", true)
      .order("featured", { ascending: false })
      .order("plays", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && Array.isArray(data)) setCommunityLevels(data);
        setCommunityLevelsLaden(false);
      });
    return () => { cancelled = true; };
  }, [fase, editorTab, levelsReloadTick]);
  // Editor-scroll: meet container-breedte + observeer resizes voor mini-map viewport-rect
  useEffect(() => {
    if (fase !== "custom-editor" || editorTab !== "maken") return;
    const measure = () => {
      const w = editorScrollRef.current?.clientWidth;
      if (w && w !== editorViewportW) setEditorViewportW(w);
    };
    measure();
    window.addEventListener("resize", measure);
    const id = setTimeout(measure, 100); // re-meet na render
    return () => { window.removeEventListener("resize", measure); clearTimeout(id); };
  }, [fase, editorTab, editorViewportW]);
  // Reset scroll-positie als level-lengte verandert
  useEffect(() => {
    if (editorScrollRef.current) editorScrollRef.current.scrollLeft = 0;
    setEditorScrollPx(0);
  }, [editorLengte]);
  // Eigen levels laden zodra "Mijn"-tab opent (vereist login)
  useEffect(() => {
    if (fase !== "custom-editor" || editorTab !== "mijn") return;
    if (!authUser?.id) { setMijnLevels([]); return; }
    let cancelled = false;
    setMijnLevelsLaden(true);
    supabase
      .from("obliterator_user_levels")
      .select("id, naam, maker_naam, obstakels, lengte, plays, publiek, featured, created_at")
      .eq("maker_user_id", authUser.id)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && Array.isArray(data)) setMijnLevels(data);
        setMijnLevelsLaden(false);
      });
    return () => { cancelled = true; };
  }, [fase, editorTab, authUser?.id, levelsReloadTick]);
  // Ghost-state voor PvP: opponent's laatst-bekende positie + score
  const ghostStateRef = useRef({ y: 0, vy: 0, score: 0, alive: true, name: "" });
  // PvP-eindstand (winner + scores) zodra match is afgerond
  const [pvpResult, setPvpResult] = useState(null);
  const [eindScore, setEindScore] = useState(0);
  const [highscores, setHighscores] = useState([]);
  const [nieuwRecord, setNieuwRecord] = useState(false);
  const [laden, setLaden] = useState(true);

  const sessieKey = SESSIE_KEY_PREFIX + (userName || "anon");
  const bonusKey = BONUS_KEY_PREFIX + (userName || "anon");
  const muntenKey = MUNTEN_KEY_PREFIX + (userName || "anon");
  const [bonusLeven, setBonusLeven] = useState(() => leesInt(bonusKey));
  // Munten = lifetime ring-pickups. Linear: 1 ring = 1 munt.
  // Wordt later valuta voor custom-level-editor (premium obstakels).
  const [munten, setMunten] = useState(() => leesInt(muntenKey));
  const muntenRef = useRef(munten);
  useEffect(() => { muntenRef.current = munten; }, [munten]);
  // Bij elke fase-overgang vanuit 'spelen' (dood, vraag, welkom, menu): herlees munten
  // uit localStorage — de game-loop heeft 'm tijdens spelen geupdate via de ref.
  useEffect(() => {
    if (fase !== "spelen") {
      try {
        const fresh = leesInt(muntenKey);
        if (fresh !== munten) setMunten(fresh);
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, muntenKey]);

  // vraag-state
  const [vraag, setVraag] = useState(null);
  const [vraagAntwoord, setVraagAntwoord] = useState(null); // null | index
  const [vraagBeloning, setVraagBeloning] = useState(false); // toon "+1 leven" feedback

  // share
  const [linkGekopieerd, setLinkGekopieerd] = useState(false);
  const [shareToast, setShareToast] = useState(null);

  // Audio-instellingen (persist in localStorage)
  const [geluidAan, setGeluidAan] = useState(() => {
    try { return localStorage.getItem("obliterator-geluid-aan") !== "0"; } catch { return true; }
  });
  const [volume, setVolume] = useState(() => {
    try {
      const v = parseFloat(localStorage.getItem("obliterator-volume") || "");
      return isNaN(v) ? 0.7 : Math.max(0, Math.min(1, v));
    } catch { return 0.7; }
  });
  // Settings-panel zichtbaar (uit/aan toggle in menu)
  const [settingsOpen, setSettingsOpen] = useState(false);
  // Skin-systeem — 11 skins die je per 10 levels ontgrendelt + Black Hole
  // (via Oblivion Pulse). Admins (vaste lijst, bv. Brian) krijgen alles
  // automatisch.
  const isObliterAdmin = OBLIVION_ADMINS.includes(((userName || "").trim().toLowerCase()));
  const [unlockedSkins, setUnlockedSkins] = useState(() => {
    try {
      const raw = localStorage.getItem("obliterator-unlocked-skins");
      let arr = raw ? JSON.parse(raw) : ["default"];
      if (!Array.isArray(arr)) arr = ["default"];
      if (!arr.includes("default")) arr = ["default", ...arr];
      // Admins krijgen ALLES (alle skins inclusief blackhole)
      if (isObliterAdmin) {
        for (const s of SKINS) if (!arr.includes(s.id)) arr.push(s.id);
      }
      return arr;
    } catch { return isObliterAdmin ? SKINS.map((s) => s.id) : ["default"]; }
  });
  // Als userName ná mount alsnog Brian wordt: alles ontgrendelen
  useEffect(() => {
    if (!isObliterAdmin) return;
    setUnlockedSkins((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const s of SKINS) if (!next.has(s.id)) { next.add(s.id); changed = true; }
      return changed ? [...next] : prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isObliterAdmin]);
  // (Retroactief unlocken op basis van max-bereikt level — verplaatst naar
  // ná de declaraties van anonMaxLevel en levelRecords om TDZ-crash te voorkomen)
  const [selectedSkin, setSelectedSkin] = useState(() => {
    try { return localStorage.getItem("obliterator-selected-skin") || "default"; } catch { return "default"; }
  });
  useEffect(() => {
    try { localStorage.setItem("obliterator-unlocked-skins", JSON.stringify(unlockedSkins)); } catch {}
  }, [unlockedSkins]);
  useEffect(() => {
    try { localStorage.setItem("obliterator-selected-skin", selectedSkin); } catch {}
  }, [selectedSkin]);
  // Ref naar de audio-master-gain zodat de useEffect-loop volume kan instellen
  const audioVolumeRef = useRef({ aan: true, volume: 0.7 });
  // Ref naar selected skin zodat de game-loop hem kan lezen zonder remount
  const skinRef = useRef(selectedSkin);
  useEffect(() => { skinRef.current = selectedSkin; }, [selectedSkin]);
  // Trigger ref voor admin-activatie van Oblivion Pulse cutscene
  const oblivionTriggerRef = useRef({ trigger: false, lastSeenEventId: 0 });
  // 2× munten-event (admin-getriggerd, wereldwijd)
  const muntenMultiplierRef = useRef(1);
  const [bonusEventEinde, setBonusEventEinde] = useState(null); // ms-timestamp of null
  const [bonusTik, setBonusTik] = useState(0); // dwingt re-render voor countdown
  // 🌈 Rainbow-event (admin) — 2 min lang heeft elke gespawnde ring 10% kans
  // op rainbow-vorm = 5 munten per stuk (× actieve multipliers).
  const rainbowActiefRef = useRef(false);
  const [rainbowEventEinde, setRainbowEventEinde] = useState(null);
  // Initiële fetch: is er nu een actief event (2×-munten of rainbow)?
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase
          .from("obliterator_bonus_events")
          .select("event_type, expires_at")
          .in("event_type", ["munten_2x", "rainbow"])
          .gt("expires_at", new Date().toISOString())
          .order("expires_at", { ascending: false });
        if (cancelled || !data) return;
        const muntenEv = data.find((e) => e.event_type === "munten_2x");
        if (muntenEv) {
          const t = new Date(muntenEv.expires_at).getTime();
          if (t > Date.now()) {
            muntenMultiplierRef.current = 2;
            setBonusEventEinde(t);
          }
        }
        const rainbowEv = data.find((e) => e.event_type === "rainbow");
        if (rainbowEv) {
          const t = new Date(rainbowEv.expires_at).getTime();
          if (t > Date.now()) {
            rainbowActiefRef.current = true;
            setRainbowEventEinde(t);
          }
        }
      } catch {}
    })();
    return () => { cancelled = true; };
  }, []);
  // Realtime: live picken op nieuwe bonus-events (munten-2x én rainbow)
  useEffect(() => {
    const channel = supabase
      .channel(`bonus-events-${Math.random().toString(36).slice(2, 8)}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "obliterator_bonus_events" },
        (payload) => {
          const ev = payload?.new;
          if (!ev) return;
          const t = new Date(ev.expires_at).getTime();
          if (!(t > Date.now())) return;
          if (ev.event_type === "munten_2x") {
            muntenMultiplierRef.current = 2;
            setBonusEventEinde(t);
          } else if (ev.event_type === "rainbow") {
            rainbowActiefRef.current = true;
            setRainbowEventEinde(t);
          }
        }
      )
      .subscribe();
    return () => { try { supabase.removeChannel(channel); } catch {} };
  }, []);
  // Polling-fallback: elke 30s opnieuw checken of er een actief event is.
  // Vangt het geval op dat de Realtime-websocket gedropt is (mobiel achter-
  // grond, slechte wifi, sleep/wake) en de INSERT-broadcast gemist is.
  useEffect(() => {
    let cancelled = false;
    const poll = async () => {
      try {
        const { data } = await supabase
          .from("obliterator_bonus_events")
          .select("event_type, expires_at")
          .in("event_type", ["munten_2x", "rainbow"])
          .gt("expires_at", new Date().toISOString())
          .order("expires_at", { ascending: false });
        if (cancelled || !data) return;
        const muntenEv = data.find((e) => e.event_type === "munten_2x");
        if (muntenEv) {
          const t = new Date(muntenEv.expires_at).getTime();
          if (t > Date.now() && muntenMultiplierRef.current !== 2) {
            muntenMultiplierRef.current = 2;
            setBonusEventEinde(t);
          }
        }
        const rainbowEv = data.find((e) => e.event_type === "rainbow");
        if (rainbowEv) {
          const t = new Date(rainbowEv.expires_at).getTime();
          if (t > Date.now() && !rainbowActiefRef.current) {
            rainbowActiefRef.current = true;
            setRainbowEventEinde(t);
          }
        }
      } catch {}
    };
    const id = setInterval(poll, 30000);
    return () => { cancelled = true; clearInterval(id); };
  }, []);
  // Per-seconde tik om expiry te checken + countdown te updaten
  useEffect(() => {
    const id = setInterval(() => {
      let tikje = false;
      if (bonusEventEinde && Date.now() >= bonusEventEinde) {
        muntenMultiplierRef.current = 1;
        setBonusEventEinde(null);
      } else if (bonusEventEinde) tikje = true;
      if (rainbowEventEinde && Date.now() >= rainbowEventEinde) {
        rainbowActiefRef.current = false;
        setRainbowEventEinde(null);
      } else if (rainbowEventEinde) tikje = true;
      if (tikje) setBonusTik((n) => n + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [bonusEventEinde, rainbowEventEinde]);

  // Realtime: subscribe op oblivion_events zodat een admin-knop wereldwijd
  // bij iedereen die op dat moment speelt de cutscene triggert.
  // Als de speler op het MENU staat: automatisch in 'spelen' fase springen
  // zodat de cutscene meteen kan afgaan (anders blijft de trigger zitten
  // tot de speler zelf op START drukt).
  const faseRef = useRef("menu");
  useEffect(() => { faseRef.current = fase; }, [fase]);
  useEffect(() => {
    let mounted = true;
    // Eerst de hoogste bestaande id ophalen zodat we OUDE events niet alsnog triggeren
    (async () => {
      try {
        const { data } = await supabase
          .from("oblivion_events")
          .select("id")
          .order("id", { ascending: false })
          .limit(1);
        if (mounted && data && data[0]) {
          oblivionTriggerRef.current.lastSeenEventId = data[0].id;
        }
      } catch {}
    })();
    const myNameLower = (userName || "").trim().toLowerCase();
    const channel = supabase
      .channel(`oblivion-events-${Math.random().toString(36).slice(2, 8)}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "oblivion_events" },
        (payload) => {
          const ev = payload?.new;
          if (!ev || !ev.id) return;
          // Skip eigen events — admin-knop triggert lokaal, geen realtime-echo
          // nodig (anders wordt admin telkens uit z'n menu getrokken).
          const triggererLower = (ev.triggered_by_name || "").trim().toLowerCase();
          if (myNameLower && triggererLower === myNameLower) {
            oblivionTriggerRef.current.lastSeenEventId = ev.id;
            return;
          }
          // Skip events ouder dan 90 sec (na app-reload niet retroactief triggeren)
          try {
            const t = new Date(ev.triggered_at).getTime();
            if (Date.now() - t > 90_000) return;
          } catch {}
          // Vermijd dubbele trigger op hetzelfde event
          if (ev.id <= oblivionTriggerRef.current.lastSeenEventId) return;
          oblivionTriggerRef.current.lastSeenEventId = ev.id;
          oblivionTriggerRef.current.trigger = true;
          // Als de speler op het menu staat: forceer naar spelen-fase zodat
          // de game-loop start en de trigger meteen wordt geconsumeerd.
          // Admins NIET auto-jumpen — die hebben hun eigen knop.
          if (faseRef.current === "menu" && !pvpMatch && !isObliterAdmin) {
            try { setFase("spelen"); } catch {}
          }
        }
      )
      .subscribe();
    return () => {
      mounted = false;
      try { supabase.removeChannel(channel); } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    audioVolumeRef.current = { aan: geluidAan, volume };
    try { localStorage.setItem("obliterator-geluid-aan", geluidAan ? "1" : "0"); } catch {}
    try { localStorage.setItem("obliterator-volume", String(volume)); } catch {}
  }, [geluidAan, volume]);

  // Levels-state (records per level voor deze speler) — alleen ingelogd
  const [levelRecords, setLevelRecords] = useState({}); // { level: record_score }
  const [gekozenStartLevel, setGekozenStartLevel] = useState(1);
  // Hoogste bereikte level voor anonieme spelers (uit obliterator_scores op naam)
  const [anonMaxLevel, setAnonMaxLevel] = useState(1);
  // Retroactief unlocken: zodra levelRecords/anonMaxLevel laden, ontgrendel
  // skins waarvan de unlock-level al is bereikt.
  useEffect(() => {
    const recordKeys = Object.keys(levelRecords || {}).map(Number).filter((n) => !isNaN(n));
    const recordsMax = recordKeys.length > 0 ? Math.max(...recordKeys) : 0;
    const maxBereikt = Math.max(anonMaxLevel || 0, recordsMax);
    if (maxBereikt < 10) return;
    const eligible = SKINS.filter((s) => s.unlockLevel != null && s.unlockLevel <= maxBereikt);
    if (eligible.length === 0) return;
    setUnlockedSkins((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const s of eligible) if (!next.has(s.id)) { next.add(s.id); changed = true; }
      return changed ? [...next] : prev;
    });
  }, [anonMaxLevel, levelRecords]);
  const MAX_LEVEL_UI = 100;
  const heeftLogin = !!authUser?.id;
  // hoogste level waar je een record op hebt = "vrijgespeeld tot en met"
  // Ingelogd: max(record_level)+1 uit obliterator_levels.
  // Anoniem: max(level) uit obliterator_scores op naam (mag weer starten op hoogste level dat hij bereikte).
  const maxVrijgespeeld = Math.max(1, Math.max(...Object.keys(levelRecords).map(k => parseInt(k, 10) + 1), 1));
  const maxKiesbaar = heeftLogin
    ? Math.min(MAX_LEVEL_UI, maxVrijgespeeld)
    : Math.min(MAX_LEVEL_UI, anonMaxLevel);
  useEffect(() => {
    if (!authUser?.id) { setLevelRecords({}); return; }
    supabase.from("obliterator_levels")
      .select("level, record_score")
      .eq("user_id", authUser.id)
      .then(({ data }) => {
        if (!data) return;
        const m = {};
        data.forEach(r => { m[r.level] = r.record_score; });
        setLevelRecords(m);
        // default-keuze: hoogste vrijgespeelde level
        const top = Math.min(MAX_LEVEL_UI, Math.max(1, Math.max(...data.map(r => r.level + 1), 1)));
        setGekozenStartLevel(top);
      })
      .catch(() => {});
  }, [authUser?.id]);
  // Anonieme spelers: haal hoogste bereikte level uit obliterator_scores op basis van naam.
  useEffect(() => {
    if (authUser?.id || !userName?.trim()) { setAnonMaxLevel(1); return; }
    supabase.from("obliterator_scores")
      .select("level")
      .ilike("player_name", userName.trim())
      .not("level", "is", null)
      .order("level", { ascending: false })
      .limit(1)
      .then(({ data }) => {
        if (!data || !data.length) return;
        const top = Math.min(MAX_LEVEL_UI, Math.max(1, data[0].level || 1));
        setAnonMaxLevel(top);
        setGekozenStartLevel(top);
      })
      .catch(() => {});
  }, [authUser?.id, userName]);
  // update startLevelRef bij elke keuze (game-loop leest ref)
  useEffect(() => { startLevelRef.current = gekozenStartLevel; }, [gekozenStartLevel]);
  const SHARE_URL = "https://www.studiebol.online?play=obliterator";
  const shareTekst = (score) =>
    score > 0
      ? `🛸 Ik scoorde ${score} punten bij OBLITERATOR! 🔥 Kun jij me verslaan? Speel gratis op Studiebol: ${SHARE_URL}`
      : `🛸 Speel OBLITERATOR — gratis Geometry-Dash-stijl mini-game op Studiebol! 👽 ${SHARE_URL}`;

  const trackShare = (platform) => {
    const naam = (userName || "").trim().slice(0, 60);
    if (naam && naam.toLowerCase() !== "speler") {
      try { supabase.from("share_events").insert({ shared_by: naam, platform: `obliterator-${platform}` }).then(() => {}).catch(() => {}); } catch {}
    }
    setShareToast(naam && naam.toLowerCase() !== "speler"
      ? "🌟 Bedankt! Je staat in de Hall of Fame voor delers"
      : "🌟 Bedankt voor het delen!");
    setTimeout(() => setShareToast(null), 3500);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareTekst(eindScore))}`, "_blank");
    trackShare("whatsapp");
  };
  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(shareTekst(eindScore))}`, "_blank");
    trackShare("facebook");
  };
  const handleX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTekst(eindScore))}`, "_blank");
    trackShare("x");
  };
  const handleCopy = async () => {
    try {
      const tekst = shareTekst(eindScore);
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(tekst);
      else {
        const ta = document.createElement("textarea");
        ta.value = tekst; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
      }
      setLinkGekopieerd(true);
      setTimeout(() => setLinkGekopieerd(false), 2000);
      trackShare("copy");
    } catch {}
  };
  const handleNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "OBLITERATOR · Studiebol", text: shareTekst(eindScore), url: SHARE_URL });
        trackShare("native");
      } catch {}
    } else {
      handleCopy();
    }
  };

  // top 25 ophalen bij mount + na elke game-over
  useEffect(() => {
    let actief = true;
    laadTopScores().then(s => {
      if (!actief) return;
      setHighscores(s);
      setLaden(false);
      // Update top-3 ref voor spandoek-fans
      const namen = (s || []).slice(0, 3).map(x => x.naam).filter(Boolean);
      if (namen.length > 0) topSpelersRef.current = namen;
    });
    return () => { actief = false; };
  }, [fase]);

  // Offline-scores syncen: flush queue bij mount, en automatisch zodra browser weer online komt.
  // Maakt dat scores die offline (bv. in de auto) zijn gespeeld alsnog meetellen voor leaderboard.
  useEffect(() => {
    flushPendingScores().then(() => laadTopScores().then(s => setHighscores(s))).catch(() => {});
    const opOnline = () => {
      flushPendingScores().then(() => laadTopScores().then(s => setHighscores(s))).catch(() => {});
    };
    window.addEventListener("online", opOnline);
    return () => window.removeEventListener("online", opOnline);
  }, []);

  const persoonlijkRecord = highscores
    .filter(h => h.naam === (userName || "Speler"))
    .reduce((m, h) => Math.max(m, h.score), 0);
  const wereldRecord = highscores[0]?.score || 0;
  useEffect(() => { prRef.current = persoonlijkRecord; wrRef.current = wereldRecord; }, [persoonlijkRecord, wereldRecord]);

  // ref om fullscreen-state in berekenCanvas te lezen zonder TDZ/closure-issues
  const fsRef = useRef(false);

  // canvas-grootte: 2:1 ratio, fit binnen viewport (W én H), reageert op rotatie
  function berekenCanvas() {
    if (typeof window === "undefined") return [800, 400];
    // in fullscreen veel minder reserve (geen lichtkrant, kleinere header)
    const fsActief = fsRef.current || (typeof document !== "undefined" && (document.fullscreenElement || document.webkitFullscreenElement));
    const reserveH = fsActief ? 80 : 200;
    const horizPadding = fsActief ? 16 : 24;
    const maxW = Math.max(280, Math.min(fsActief ? 1600 : 800, window.innerWidth - horizPadding));
    const maxH = Math.max(140, window.innerHeight - reserveH);
    // breedste mogelijk binnen 2:1 ratio
    let w = Math.min(maxW, maxH * 2);
    w = Math.max(280, w);
    return [Math.round(w), Math.round(w / 2)];
  }
  const [canvasSize, setCanvasSize] = useState(berekenCanvas);
  const [canvasW, canvasH] = canvasSize;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(typeof window !== "undefined" && window.innerHeight > window.innerWidth);
  useEffect(() => { fsRef.current = isFullscreen; }, [isFullscreen]);

  useEffect(() => {
    const onResize = () => {
      setCanvasSize(berekenCanvas());
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    const onFsChange = () => {
      const fsActief = !!(document.fullscreenElement || document.webkitFullscreenElement);
      // alleen synced bij browser-fs; bij CSS-only laat state staan
      if (!fsActief) setIsFullscreen(false);
      setTimeout(() => setCanvasSize(berekenCanvas()), 50);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
    };
  }, []);

  function toggleFullscreen() {
    if (isFullscreen) {
      // exit
      try {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      } catch {}
      try { window.screen?.orientation?.unlock?.(); } catch {}
      setIsFullscreen(false);
    } else {
      // enter — set state direct (CSS-only werkt altijd), probeer browser-fs op de achtergrond
      setIsFullscreen(true);
      const el = wrapperRef.current;
      try {
        if (el?.requestFullscreen) el.requestFullscreen().catch(() => {});
        else if (el?.webkitRequestFullscreen) el.webkitRequestFullscreen();
      } catch {}
      // probeer orientation lock naar landscape (Android Chrome in fullscreen)
      setTimeout(() => {
        try { window.screen?.orientation?.lock?.("landscape").catch(() => {}); } catch {}
      }, 150);
      // canvas herrekenen na CSS-shift
      setTimeout(() => setCanvasSize(berekenCanvas()), 50);
    }
  }

  useEffect(() => {
    if (fase !== "spelen") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // High-DPI rendering: scherp canvas op moderne telefoons (iPhone, Galaxy, Pixel — DPR 2-3).
    // Cap op 2 zodat 3x-DPR devices niet 9x meer pixels hoeven te renderen.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.width;
    const cssH = canvas.height;
    if (dpr > 1) {
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      ctx.scale(dpr, dpr);
    }
    const W = cssW;
    const H = cssH;
    // schalen tov originele 800x400
    const SCHAAL = W / 800;
    const PLAFOND_HOOGTE = 60 * SCHAAL;
    const GROND_Y = 340 * SCHAAL;
    const SPELER_GROOTTE = 42 * SCHAAL;
    const ZWAARTEKRACHT = 0.75 * SCHAAL;
    const SPRING_KRACHT = -13.5 * SCHAAL;
    const START_SNELHEID = 6 * SCHAAL;
    const MAX_SNELHEID = 10 * SCHAAL;
    const BAKSTEEN_W = 60 * SCHAAL;
    const BAKSTEEN_H = 30 * SCHAAL;

    let spelSnelheid = START_SNELHEID;
    // effSnelheid = spelSnelheid * (slowMul) — wordt elke frame in update() gezet,
    // moet in outer scope staan zodat tekenDecoraties/tekenFakkels/tekenGlasInLood
    // (gedefinieerd buiten update()) erbij kunnen.
    let effSnelheid = START_SNELHEID;
    let frameTeller = 0;
    let score = 0;
    let spelLoopt = true;
    let volgendObstakelOver = 60;
    let shakeKracht = 0;
    let raf;
    let scoreElText = 0;
    const startLevens = 3;     // Mark: extra levens weg, altijd 3 om te beginnen.
    const MAX_LEVENS = 3;      // Cap op 3 — geen extra levens via pickups boven de basis.
    // ── HP-systeem (NEW) ──
    // Per leven krijgt speler 100% hp. Spike-hit = -25% hp. Bij hp ≤ 0 →
    // 1 leven kwijt + hp reset naar 100. Hartjes/schatkist herstellen +25%
    // hp eerst, en pas wanneer hp al 100 is geven ze +1 leven.
    const HP_MAX = 100;
    const HP_PER_HIT = 25;
    let hp = HP_MAX;
    let hpFlashTeller = 0; // visuele flash bij hit
    // ── Afremmen door blok-obstakel (NEW) ──
    // Blokken (type 2) doen geen schade meer maar remmen de wereld af.
    // Voor solo én later co-op (snelheids-modus): tijd-verlies ipv leven-verlies.
    let afgeremFrames = 0;
    const AFGEREMD_DUUR = 35;
    const AFGEREMD_FACTOR = 0.30; // wereld op 30% snelheid tijdens afremmen
    let blokHitX = -999; // laatste blok-X om dubbele-hit te voorkomen
    // ── PERISCOOP + BONUS-MINI-GAME (NEW) ──
    // Soms zakt er een periscoop uit het plafond. Speler die er precies in
    // springt, start een 5-sec bonus-fase: wereld bevriest, lasers schieten
    // met spatie/klik, bonus-ringen vliegen voorbij, hits = +5 score elk.
    let periscoop = null; // { x, faseNaam: 'uit'|'hang'|'in', faseFrames }
    let periscoopSpawnTeller = 2400; // eerste ~40 sec na start (Mark: 75% minder vaak)
    const PERISCOOP_UIT_FRAMES = 30;   // zakt uit
    const PERISCOOP_HANG_FRAMES = 360; // 6 sec bereikbaar (was 4 — Mark vond te scherp)
    const PERISCOOP_IN_FRAMES = 30;    // trekt zich terug
    const PERISCOOP_LENS_R = 32;       // hitbox-radius (was 22 — ruimere collision)
    let bonusFase = false;
    let bonusFrames = 0;
    const BONUS_DUUR = 900; // 15 sec actief schieten/aanraken
    let bonusIntroFrames = 0;
    const BONUS_INTRO_DUUR = 120; // 2 sec "BONUS LEVEL" voorscherm
    const bonusRingen = [];
    let bonusRingSpawnTeller = 20;
    let bonusScore = 0;
    let bonusEindFlash = 0; // toont +totaal na bonus
    let levens = startLevens;
    let streak = 0;
    let multiplier = 1;
    let multiplierFlashTeller = 0; // frames voor "x3!" flash
    let aantalObstakelsTotaal = 0;
    const bonusHarten = [];
    const COUNTDOWN_FRAMES = 130; // ~2.2 sec @ 60fps (3 stappen van ~43)
    let countdown = COUNTDOWN_FRAMES;
    // Levels: 30 sec per level, max 100 levels (= 50 min totaal voor MAX)
    const LEVEL_DUUR_FRAMES = 1800; // 30 sec @ 60fps
    const MAX_LEVEL = 100;
    // PvP forceert L1 zodat beide spelers identieke start-condities hebben.
    let huidigLevel = pvpMatch ? 1 : (startLevelRef.current || 1);
    // ── CUSTOM LEVEL ── speel een door iemand gemaakt level uit DB
    const customLevel = customLevelRef.current;
    const customLevelMode = !!customLevel;
    const customSorted = customLevel ? [...(customLevel.obstakels || [])].sort((a, b) => (a.x || 0) - (b.x || 0)) : [];
    let customScrollX = 0;
    let customSpawnIdx = 0;
    let customLevelEinde = false;
    let levelGehaaldFlash = 0;
    let levelGehaaldNummer = 0;
    const sessieLevelRecords = {}; // { level: maxScore behaald in dat level } voor opslag bij eindeSessie
    let scoreBijLevelStart = 0;
    // Boss-fights — na elk 5e level (5, 10, 15 ... 95)
    // Boss vaker: eerste op level 4, daarna elke 4 levels (was: vanaf 5, elke 5).
    const BOSS_TRIGGER_LEVELS = (() => { const a = []; for (let i = 4; i <= 96; i += 4) a.push(i); return a; })();
    const BOSS_MAX_HP_BASE = 100;       // op L5; schaalt met level
    const BOSS_LASER_DAMAGE = 6;        // constant — verlengt dood-tijd bij hoger HP
    const BOSS_AANVAL_INTERVAL_BASE = 90; // 1.5 sec op L5; sneller bij hoger
    const BOSS_PROJECTIEL_SNELHEID = 7 * SCHAAL;
    const SPELER_LASER_SNELHEID = 12 * SCHAAL;
    const BOSS_NA_LEVEL_VLAGGEN = new Set(); // welke triggers in deze sessie al gespeeld
    let bossActief = false;
    let bossHp = 0;
    let bossMaxHpHuidig = BOSS_MAX_HP_BASE;
    let bossAanvalIntervalHuidig = BOSS_AANVAL_INTERVAL_BASE;
    let bossX = W * 0.78;
    let bossY = H * 0.4;
    const bossGrootte = Math.min(160 * SCHAAL, H * 0.4); // half scherm hoog max
    let bossAanvalTeller = 60;
    const bossLasers = [];   // projectielen van boss naar speler
    const spelerLasers = []; // projectielen van speler naar boss
    let bossWinAnim = 0;     // frames voor "BOSS DEFEATED!" hoera
    let bossInkomendLevel = 0; // het level waarnaar we doorgaan na de boss
    let bossPulse = 0;       // visueel pulserend
    // Boss-fight heeft eigen 3-levens: speler kan 3× geraakt worden voordat normale leven verloren gaat
    const BOSS_LEVENS_MAX = 3;
    let bossLevens = BOSS_LEVENS_MAX;
    let bossHitInvincibility = 0; // frames waarin speler niet geraakt kan worden na hit
    // vlieg-power-up
    let vliegFrames = 0; // > 0 = immune
    const VLIEG_DUUR = 600; // 10 sec
    // bubbel-shield (vis-pickup) — vernietigt haaien op contact i.p.v. damage
    let bubbelFrames = 0;
    const BUBBEL_DUUR = 300; // 5 sec
    const raketten = []; // pickups in lucht
    // FLIP-power-up (gravity-inversie)
    let flipPending = 0;       // 2-sec countdown na pickup
    const FLIP_PENDING_DUUR = 120;
    let flipFrames = 0;        // > 0 = gevlipt
    const FLIP_DUUR = 600;     // 10 sec
    const flipPickups = [];
    // MAGNEET-power-up (ringen vliegen naar je toe)
    let magneetFrames = 0;
    const MAGNEET_DUUR = 480;     // 8 sec
    const MAGNEET_RADIUS = 220 * SCHAAL;
    const MAGNEET_TREK = 9 * SCHAAL; // px per frame max
    const magneetPickups = [];
    // SLOW-MO-power-up (wereld in halve snelheid)
    let slowFrames = 0;
    const SLOW_DUUR = 300;        // 5 sec
    const SLOW_FACTOR = 0.5;
    const slowMoPickups = [];
    // BOMB-power-up (vernietigt alle obstakels op het scherm)
    const bombPickups = [];
    let bombFlash = 0;
    // ── BLIKSEM-FLITS (vanaf L50, frequentie ↑ tot L100) ──
    let bliksemFlash = 0;       // > 0 = flash zichtbaar (frames)
    let bliksemTimer = 1200;    // countdown tot volgende flits
    let bliksemBoltPath = null; // gegenereerde zigzag-pad voor de bliksem
    const PLAFOND_NIVEAU = PLAFOND_HOOGTE + 12;
    // gouden ringen — primary score-bron (Sonic-stijl)
    const ringen = [];
    let ringSpawnTeller = 60; // eerste ring na ~1 sec
    // lichtblauwe platforms (halverwege canvas, veilig om op te rollen)
    const platforms = [];
    let platformSpawnTeller = 240; // eerste platform na 4 sec
    // plafond-stekels (raakbaar, hangen vanaf plafond) — eigen spawn-teller
    const plafondStekels = [];
    let plafondStekelSpawnTeller = 240; // eerste plafond-stekel na ~4 sec

    // Zwevende mijnen (raakbaar, in de middenzone tussen plafond en grond).
    // Bedoeld om "blijven zweven om obstakels te skippen" te ontmoedigen —
    // ze hangen precies in de jump-zone en zwiepen langzaam op-en-neer.
    const zwevendeMinen = [];
    let zwevendeMineSpawnTeller = 360; // eerste mijn na ~6 sec
    // Studiebol-logo als subtiele achtergrond-decoratie (af en toe)
    const studiebolLogos = [];
    let logoSpawnTeller = 360; // eerste logo na ~6 sec
    // record-banner state — voor spanning-melding bij PR/WR
    let recordBannerTekst = "";
    let recordBannerKleur = "#fff";
    let recordBannerTeller = 0;
    let prHintGedaan = false, prFlashGedaan = false;
    let wrHintGedaan = false, wrFlashGedaan = false;
    const logoImg = new Image();
    let logoGeladen = false;
    logoImg.onload = () => { logoGeladen = true; };
    logoImg.onerror = () => { logoGeladen = false; };
    logoImg.src = "/icons/icon-192.png";
    const PLATFORM_HOOGTE = 14 * SCHAAL;
    const PLATFORM_Y = 220 * SCHAAL; // top-Y, halverwege tussen plafond en grond

    // ---------- BIOMES ----------
    // 10 biomes — één per level. Sci-fi/space/alien-thema (school-veilig).
    const BIOMES = [
      // Level 1 — Asteroid Field
      { naam:'ASTEROID FIELD', emoji:['🪨','☄️','🌑','⭐','🛸'], bgTop:[10,10,14], bgBot:[20,16,28], bakstenenLicht:[42,37,48], bakstenenDonker:[21,17,26], bakstenenHighlight:[80,70,90], lichtbundel:[255,220,100], schedel:[180,170,200], glow:[255,200,100], grondLicht:[42,37,48], grondDonker:[14,10,20] },
      // Level 2 — Space Lab
      { naam:'SPACE LAB', emoji:['🧪','🔬','⚗️','💊','🤖'], bgTop:[25,12,20], bgBot:[50,25,40], bakstenenLicht:[80,45,50], bakstenenDonker:[40,20,28], bakstenenHighlight:[140,90,100], lichtbundel:[255,180,100], schedel:[220,180,240], glow:[255,130,200], grondLicht:[60,30,38], grondDonker:[20,8,14] },
      // Level 3 — Wormhole
      { naam:'WORMHOLE', emoji:['🌀','✨','⭐','🌙','🛸'], bgTop:[10,0,20], bgBot:[30,10,50], bakstenenLicht:[58,37,64], bakstenenDonker:[26,13,42], bakstenenHighlight:[106,74,128], lichtbundel:[200,120,255], schedel:[200,150,255], glow:[220,130,255], grondLicht:[42,26,58], grondDonker:[10,0,20] },
      // Level 4 — Satellite Graveyard (verlaten ruimtestations)
      { naam:'SATELLITE FIELD', emoji:['🛰️','🚀','⚙️','🌑','🛸'], bgTop:[4,8,24], bgBot:[12,18,48], bakstenenLicht:[40,50,75], bakstenenDonker:[18,22,38], bakstenenHighlight:[80,100,140], lichtbundel:[180,200,255], schedel:[220,230,255], glow:[150,180,255], grondLicht:[22,28,50], grondDonker:[6,8,16] },
      // Level 5 — Solar Forge (gloeiende ster)
      { naam:'SOLAR FORGE', emoji:['☀️','🔥','⚡','🌟','🌋'], bgTop:[16,4,4], bgBot:[40,12,6], bakstenenLicht:[58,32,24], bakstenenDonker:[26,10,8], bakstenenHighlight:[106,53,48], lichtbundel:[255,130,50], schedel:[255,180,140], glow:[255,100,40], grondLicht:[58,16,16], grondDonker:[10,0,0] },
      // Level 6 — Ice Planet
      { naam:'ICE PLANET', emoji:['❄️','🧊','🪐','⛄','🌌'], bgTop:[8,18,30], bgBot:[20,40,60], bakstenenLicht:[58,82,108], bakstenenDonker:[24,40,60], bakstenenHighlight:[120,170,210], lichtbundel:[180,230,255], schedel:[200,240,255], glow:[140,220,255], grondLicht:[34,52,76], grondDonker:[10,16,28] },
      // Level 7 — Alien Jungle (groen-buitenaards)
      { naam:'ALIEN JUNGLE', emoji:['🌿','🍄','🦠','🪲','👽'], bgTop:[8,22,8], bgBot:[18,46,16], bakstenenLicht:[40,72,32], bakstenenDonker:[18,36,14], bakstenenHighlight:[80,140,60], lichtbundel:[160,255,80], schedel:[200,255,180], glow:[120,255,100], grondLicht:[26,52,18], grondDonker:[8,18,4] },
      // Level 8 — Alien Hive (rood-organisch ruimteschip)
      { naam:'ALIEN HIVE', emoji:['👽','🛸','🥚','🦠','⚡'], bgTop:[20,2,4], bgBot:[60,8,14], bakstenenLicht:[80,20,28], bakstenenDonker:[40,8,12], bakstenenHighlight:[160,40,56], lichtbundel:[255,80,100], schedel:[255,200,200], glow:[255,40,80], grondLicht:[60,12,18], grondDonker:[16,2,4] },
      // Level 9 — Crystal Asteroid (geel-amber-saffraan)
      { naam:'CRYSTAL ASTEROID', emoji:['💎','✨','⚡','🌟','🔱'], bgTop:[28,18,4], bgBot:[60,42,8], bakstenenLicht:[110,80,30], bakstenenDonker:[60,42,14], bakstenenHighlight:[200,160,60], lichtbundel:[255,220,80], schedel:[255,240,180], glow:[255,200,60], grondLicht:[80,52,18], grondDonker:[24,14,4] },
      // Level 10 — Black Hole (zwart met paars-roze accent)
      { naam:'BLACK HOLE', emoji:['🌌','🕳️','🪐','⭐','🛸'], bgTop:[6,2,16], bgBot:[18,4,30], bakstenenLicht:[60,20,80], bakstenenDonker:[26,10,40], bakstenenHighlight:[140,60,200], lichtbundel:[200,80,255], schedel:[230,180,255], glow:[180,80,255], grondLicht:[36,12,52], grondDonker:[8,2,16] },
    ];
    // 10 bass-tonen + 10 BPM-waarden per level (gradueel sneller bij hoger level)
    const BIOOM_BASSWORTELS = [55, 65, 49, 73, 58, 62, 69, 51, 78, 46];
    const BPM_PER_LEVEL = [150, 154, 158, 162, 165, 168, 170, 172, 175, 180];
    let huidigBioom = 0, nextBioom = 1, bioomFade = 1, laatsteWisselScore = 0;
    let levelUpFlash = 0;       // frames dat de overgang-flash zichtbaar is
    let levelUpNaam = '';       // naam van het nieuwe biome dat we tonen
    const BIOOM_FADE_DUUR = 60;
    const LEVEL_UP_DUUR = 110;
    const lerp = (a, b, t) => a + (b - a) * t;
    function biomeKleur(eig, alpha) {
      const c1 = BIOMES[huidigBioom][eig], c2 = BIOMES[nextBioom][eig];
      const t = 1 - bioomFade;
      const r = Math.round(lerp(c1[0], c2[0], t)), g = Math.round(lerp(c1[1], c2[1], t)), b = Math.round(lerp(c1[2], c2[2], t));
      return alpha !== undefined ? `rgba(${r},${g},${b},${alpha})` : `rgb(${r},${g},${b})`;
    }
    function checkBioomWissel() {
      // Biome volgt nu het level (1 op 1). Wissel-actie wordt getriggerd vanuit
      // level-overgang in update(), niet meer via score-modulo.
      if (bioomFade < 1) bioomFade = Math.min(1, bioomFade + 1 / BIOOM_FADE_DUUR);
      if (levelUpFlash > 0) levelUpFlash--;
    }
    function startBoss(naLevel, naarLevel) {
      bossActief = true;
      // Boss-HP schaalt met level: L5=100, L10=140, L20=220, L50=500, L95=860, L100=onhaalbaar
      bossHp = BOSS_MAX_HP_BASE + Math.floor((naLevel - 5) / 5) * 40;
      bossMaxHpHuidig = bossHp;
      // attack-interval sneller bij hoger boss-level (max 2x sneller)
      bossAanvalIntervalHuidig = Math.max(35, BOSS_AANVAL_INTERVAL_BASE - Math.floor((naLevel - 5) / 5) * 6);
      bossX = W * 0.78;
      bossY = H * 0.42;
      bossInkomendLevel = naarLevel;
      bossAanvalTeller = 90;
      bossLevens = BOSS_LEVENS_MAX;
      bossHitInvincibility = 0;
      bossLasers.length = 0;
      spelerLasers.length = 0;
      // clear normale game-elementen (geen botsing tijdens boss)
      obstakels.length = 0;
      customDecoraties.length = 0;
      ringen.length = 0;
      platforms.length = 0;
      plafondStekels.length = 0;
      zwevendeMinen.length = 0;
      bonusHarten.length = 0;
      raketten.length = 0;
      flipPickups.length = 0;
      magneetPickups.length = 0;
      slowMoPickups.length = 0;
      bombPickups.length = 0;
      magneetFrames = 0;
      slowFrames = 0;
      bombFlash = 0;
      // spawn-tellers ophogen zodat tijdens boss niets nieuws verschijnt
      volgendObstakelOver = 999999;
      ringSpawnTeller = 999999;
      platformSpawnTeller = 999999;
      plafondStekelSpawnTeller = 999999;
      zwevendeMineSpawnTeller = 999999;
      logoSpawnTeller = 999999;
      // Hell-mode bij boss reset (boss neemt het over)
      hellMode = false;
      hellFrames = 0;
      hellFadeIn = 0;
      hellFadeOut = 0;
      vonken.length = 0;
      // Oblivion-mode bij boss reset
      oblivionMode = false;
      oblivionFrames = 0;
      oblivionFadeOut = 0;
      cutsceneFase = "geen";
      cutsceneFrames = 0;
      warpStrepen.length = 0;
      // dramatische intro: piep + confetti
      piep(196, 0.30, "sawtooth", 0.20); // dreigend laag
      setTimeout(() => piep(220, 0.25, "sawtooth", 0.18), 200);
      setTimeout(() => piep(165, 0.40, "sawtooth", 0.20), 500);
      shakeKracht = 18;
      spawnParticles(bossX, bossY, 30, "#ff4040", { spread: 12, opwaarts: 0, leven: 50, grootte: 5, zwaartekracht: 0.05, glow: 20 });
    }

    function bossWin() {
      // groot hoera-moment
      bossActief = false;
      bossWinAnim = 180; // 3 sec
      // mega-explosie waar boss stond
      for (let i = 0; i < 80; i++) {
        const k = ["#ffd700", "#69f0ae", "#ff4040", "#ffaa20", "#ffffff"][i % 5];
        spawnParticles(bossX, bossY, 1, k, { spread: 16, opwaarts: 4, leven: 90, grootte: 6, zwaartekracht: 0.18, glow: 22 });
      }
      // victory fanfare
      piep(523, 0.12, "sine", 0.18);
      setTimeout(() => piep(659, 0.12, "sine", 0.18), 120);
      setTimeout(() => piep(784, 0.14, "sine", 0.18), 240);
      setTimeout(() => piep(1047, 0.20, "sine", 0.18), 380);
      // beloning: +50 score + 1 leven (max blijft 5)
      score += 50;
      scoreElText = score;
      if (levens < MAX_LEVENS) levens++;
      shakeKracht = 14;
      // na anim: doorgaan naar volgende level
      setTimeout(() => {
        scoreBijLevelStart = score;
        huidigLevel = bossInkomendLevel;
        levelGehaaldNummer = bossInkomendLevel - 1;
        levelGehaaldFlash = 130;
        setBiomeVoorLevel(bossInkomendLevel);
        // spawn-tellers terug naar normaal zodat gameplay hervat
        volgendObstakelOver = 60;
        ringSpawnTeller = 60;
        platformSpawnTeller = 240;
        plafondStekelSpawnTeller = 240;
        logoSpawnTeller = 360;
      }, 1800);
    }

    function spelerSchiet() {
      // laser vanuit speler-positie naar rechts
      const cx = speler.x + speler.breedte;
      const cy = speler.y + speler.hoogte / 2;
      spelerLasers.push({ x: cx, y: cy });
      piep(880, 0.04, "square", 0.08);
      spawnParticles(cx, cy, 4, "#69f0ae", { spread: 1, opwaarts: 0, leven: 12, grootte: 2, zwaartekracht: 0, glow: 10 });
    }

    function setBiomeVoorLevel(lvl) {
      const idx = Math.min(BIOMES.length - 1, lvl - 1);
      if (idx === huidigBioom) return;
      huidigBioom = idx;
      nextBioom = idx; // beide zelfde -> interpolatie geeft constant deze biome
      bioomFade = 1;
      muziek.bassWortel = BIOOM_BASSWORTELS[idx] || 55;
      muziek.bpm = BPM_PER_LEVEL[idx] || 160;
      // LEVEL UP flash met nieuwe biome-naam
      levelUpFlash = LEVEL_UP_DUUR;
      levelUpNaam = BIOMES[idx]?.naam || '';
    }

    // ---------- AUDIO ----------
    let audioCtx = null;
    let masterFilter = null; // lowpass-filter op alle output (haalt hoge harmonics weg)
    let masterVolume = null; // master-gain die volume-slider + mute-toggle uitvoert
    function aud() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        masterFilter = audioCtx.createBiquadFilter();
        masterFilter.type = "lowpass";
        masterFilter.frequency.setValueAtTime(2800, audioCtx.currentTime); // cutoff ~2.8 kHz
        masterFilter.Q.setValueAtTime(0.7, audioCtx.currentTime);
        masterVolume = audioCtx.createGain();
        const v0 = audioVolumeRef.current || { aan: true, volume: 0.7 };
        masterVolume.gain.value = v0.aan ? v0.volume : 0;
        masterFilter.connect(masterVolume);
        masterVolume.connect(audioCtx.destination);
      }
      return audioCtx;
    }
    // Piep met zachte attack-ramp (geen click), kleine frequentie-jitter
    // (geen monotonie), en lowpass via masterFilter (geen scherpe harmonics).
    function piep(freq, duur, type = "triangle", volume = 0.10) {
      try {
        const a = aud();
        const osc = a.createOscillator(), gain = a.createGain();
        // Auto-replace harde sawtooth/square door zachtere triangle
        const safeType = (type === "sawtooth" || type === "square") ? "triangle" : type;
        osc.type = safeType;
        // ±2% frequentie-jitter zodat herhaalde piep niet exact zelfde toon is
        const jittered = freq * (1 + (Math.random() - 0.5) * 0.04);
        osc.frequency.setValueAtTime(jittered, a.currentTime);
        // Attack: 5ms ramp van 0 naar volume (geen click), dan exp decay
        gain.gain.setValueAtTime(0.0001, a.currentTime);
        gain.gain.linearRampToValueAtTime(volume, a.currentTime + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + duur);
        osc.connect(gain); gain.connect(masterFilter);
        osc.start(); osc.stop(a.currentTime + duur);
      } catch {}
    }
    function springGeluid() { piep(330, 0.08, "triangle", 0.07); setTimeout(() => piep(495, 0.06, "triangle", 0.06), 30); }
    function scoreGeluid() { piep(880, 0.05, "sine", 0.06); setTimeout(() => piep(1320, 0.05, "sine", 0.05), 40); }
    function doodGeluid() {
      try {
        const a = aud();
        const osc = a.createOscillator(), gain = a.createGain();
        osc.type = "triangle"; // was sawtooth — minder schor
        osc.frequency.setValueAtTime(180, a.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, a.currentTime + 0.5);
        gain.gain.setValueAtTime(0.0001, a.currentTime);
        gain.gain.linearRampToValueAtTime(0.18, a.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + 0.5);
        osc.connect(gain); gain.connect(masterFilter);
        osc.start(); osc.stop(a.currentTime + 0.5);
      } catch {}
    }

    // ---------- HARDCORE MUZIEK ----------
    const muziek = {
      draait: false, bpm: 160, beat: 0, startTijd: 0, masterGain: null, noiseBuffer: null,
      bassRiff: [0,0,7,0,0,5,0,3,0,0,7,0,10,8,7,5], bassWortel: 55, schedTimer: null
    };
    function maakNoiseBuffer() {
      if (muziek.noiseBuffer) return muziek.noiseBuffer;
      const a = aud();
      const buf = a.createBuffer(1, a.sampleRate * 0.5, a.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      muziek.noiseBuffer = buf; return buf;
    }
    function muziekKick(t) {
      const a = aud();
      const osc = a.createOscillator(), gain = a.createGain();
      osc.type = "sine"; osc.frequency.setValueAtTime(140, t); osc.frequency.exponentialRampToValueAtTime(38, t + 0.10);
      gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(0.55, t + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.connect(gain).connect(muziek.masterGain); osc.start(t); osc.stop(t + 0.2);
      const klik = a.createOscillator(), klikGain = a.createGain();
      klik.type = "square"; klik.frequency.setValueAtTime(2000, t);
      klikGain.gain.setValueAtTime(0.15, t); klikGain.gain.exponentialRampToValueAtTime(0.001, t + 0.012);
      klik.connect(klikGain).connect(muziek.masterGain); klik.start(t); klik.stop(t + 0.015);
    }
    function muziekSnare(t) {
      const a = aud();
      const src = a.createBufferSource(); src.buffer = maakNoiseBuffer();
      const filter = a.createBiquadFilter(); filter.type = "highpass"; filter.frequency.value = 1500;
      const gain = a.createGain();
      gain.gain.setValueAtTime(0.35, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
      src.connect(filter).connect(gain).connect(muziek.masterGain); src.start(t); src.stop(t + 0.15);
      const osc = a.createOscillator(), oscGain = a.createGain();
      osc.type = "triangle"; osc.frequency.setValueAtTime(180, t); osc.frequency.exponentialRampToValueAtTime(80, t + 0.08);
      oscGain.gain.setValueAtTime(0.18, t); oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.connect(oscGain).connect(muziek.masterGain); osc.start(t); osc.stop(t + 0.1);
    }
    function muziekHat(t, open = false) {
      const a = aud();
      const src = a.createBufferSource(); src.buffer = maakNoiseBuffer();
      const filter = a.createBiquadFilter(); filter.type = "highpass"; filter.frequency.value = 7000;
      const gain = a.createGain();
      const decay = open ? 0.18 : 0.04;
      gain.gain.setValueAtTime(0.18, t); gain.gain.exponentialRampToValueAtTime(0.001, t + decay);
      src.connect(filter).connect(gain).connect(muziek.masterGain); src.start(t); src.stop(t + decay);
    }
    function muziekBass(t, halveTonen, lengte) {
      const a = aud();
      const freq = muziek.bassWortel * Math.pow(2, halveTonen / 12);
      const osc = a.createOscillator(), gain = a.createGain(), filter = a.createBiquadFilter();
      filter.type = "lowpass"; filter.frequency.setValueAtTime(800, t);
      filter.frequency.exponentialRampToValueAtTime(180, t + lengte * 0.8); filter.Q.value = 8;
      osc.type = "sawtooth"; osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(0.28, t + 0.005);
      gain.gain.setValueAtTime(0.28, t + lengte * 0.7); gain.gain.exponentialRampToValueAtTime(0.001, t + lengte);
      osc.connect(filter).connect(gain).connect(muziek.masterGain); osc.start(t); osc.stop(t + lengte);
    }
    function muziekStem(t, halveTonen, lengte) {
      const a = aud();
      const freq = muziek.bassWortel * 4 * Math.pow(2, halveTonen / 12);
      const osc = a.createOscillator(), gain = a.createGain();
      osc.type = "sawtooth"; osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(0.06, t + 0.05);
      gain.gain.setValueAtTime(0.06, t + lengte * 0.7); gain.gain.exponentialRampToValueAtTime(0.001, t + lengte);
      osc.connect(gain).connect(muziek.masterGain); osc.start(t); osc.stop(t + lengte);
    }
    function muziekStart() {
      if (muziek.draait) return;
      try {
        const a = aud(); if (a.state === "suspended") a.resume();
        if (!muziek.masterGain) { muziek.masterGain = a.createGain(); muziek.masterGain.gain.value = 0.4; muziek.masterGain.connect(masterVolume || a.destination); }
        muziek.draait = true; muziek.beat = 0; muziek.startTijd = a.currentTime + 0.1;
        plan();
      } catch {}
    }
    function muziekStop() {
      muziek.draait = false;
      if (muziek.schedTimer) clearTimeout(muziek.schedTimer);
    }

    // Rustige ambient — geen drums, alleen langzame pad + sparse sine-melodie.
    // Per-biome variatie via muziek.bassWortel (grondtoon) + muziek.bpm (tempo).
    function muziekPad(t, halveTonen, lengte) {
      const a = aud();
      const freq = muziek.bassWortel * Math.pow(2, halveTonen / 12);
      const osc = a.createOscillator(), gain = a.createGain();
      const filter = a.createBiquadFilter();
      filter.type = "lowpass"; filter.frequency.value = 1000;
      osc.type = "sine"; osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.07, t + lengte * 0.3);
      gain.gain.linearRampToValueAtTime(0.07, t + lengte * 0.7);
      gain.gain.linearRampToValueAtTime(0.001, t + lengte);
      osc.connect(filter).connect(gain).connect(muziek.masterGain);
      osc.start(t); osc.stop(t + lengte + 0.05);
    }
    function muziekKalmeNoot(t, halveTonen, lengte) {
      const a = aud();
      const freq = muziek.bassWortel * 4 * Math.pow(2, halveTonen / 12);
      const osc = a.createOscillator(), gain = a.createGain();
      osc.type = "sine"; osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.06, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + lengte);
      osc.connect(gain).connect(muziek.masterGain);
      osc.start(t); osc.stop(t + lengte + 0.05);
    }

    // Eenvoudige 16-stap motief — undefined = stilte. Speelt rustig over de pad.
    const KALM_MOTIEF = [0, undefined, 7, undefined, 12, undefined, 7, undefined,
                         5, undefined, 3, undefined, 0, undefined, undefined, undefined];

    // Intense motief (L50+) — 16 stappen, mineur-getint, snelle arpeggio's.
    // Halve-tonen vanaf bassWortel (transponeerd per biome).
    const INTENSE_MELODIE = [
      0, 12, 15, 19, 12, 0, 7, 15,
      0, 12, 15, 19, 22, 15, 12, 7,
    ];
    // Drum-pattern (16 stappen) — kick op 1+9 (4-on-floor halve), snare op 5+13,
    // hat op alle even stappen.
    const KICK_HITS = [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0];
    const SNARE_HITS = [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0];
    const HAT_HITS = [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0];

    function plan() {
      if (!muziek.draait) return;
      const a = aud();
      // Tempo voor calm: 60% van BPM_PER_LEVEL. Voor intense: 100% (vol BPM).
      const intens = (typeof huidigLevel !== "undefined") && huidigLevel >= 50;
      const effBpm = muziek.bpm * (intens ? 1.0 : 0.6);
      const tijdPer16 = 60 / effBpm / 4;
      const lookahead = 0.15;
      while (muziek.startTijd + muziek.beat * tijdPer16 < a.currentTime + lookahead) {
        const t = muziek.startTijd + muziek.beat * tijdPer16;
        const stap = muziek.beat % 16;

        if (intens) {
          // L50+ intense track: drums + bass + arpeggio-melodie.
          if (KICK_HITS[stap]) muziekKick(t);
          if (SNARE_HITS[stap]) muziekSnare(t);
          if (HAT_HITS[stap]) muziekHat(t, stap % 4 === 2);
          // bass volgt bassRiff op halve-snelheid (elke 2 stappen één noot)
          if (stap % 2 === 0) {
            const bRif = muziek.bassRiff[Math.floor(stap / 2) % muziek.bassRiff.length];
            muziekBass(t, bRif - 12, tijdPer16 * 2 * 0.95);
          }
          // arpeggio-melodie: sneller dan calm, octaaf hoger
          const noot = INTENSE_MELODIE[stap];
          if (noot !== undefined) muziekStem(t, noot, tijdPer16 * 1.5);
        } else {
          // Calm track (L1-49): pad + sparse melodie
          if (stap === 0) muziekPad(t, 0, tijdPer16 * 16);
          if (stap === 8) muziekPad(t, 7, tijdPer16 * 8);
          const noot = KALM_MOTIEF[stap];
          if (noot !== undefined) muziekKalmeNoot(t, noot, tijdPer16 * 3);
        }

        muziek.beat++;
      }
      muziek.schedTimer = setTimeout(plan, 30);
    }

    // ---------- PARTICLES ----------
    class Particle {
      constructor(x, y, kleur, opt = {}) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * (opt.spread || 4);
        this.vy = (Math.random() - 0.5) * (opt.spread || 4) - (opt.opwaarts || 0);
        this.leven = opt.leven || 30; this.maxLeven = this.leven;
        this.grootte = opt.grootte || 3; this.kleur = kleur;
        this.zwaartekracht = opt.zwaartekracht !== undefined ? opt.zwaartekracht : 0.15;
        this.krimp = opt.krimp !== undefined ? opt.krimp : true;
        this.glow = opt.glow !== undefined ? opt.glow : 12;
      }
      update() { this.x += this.vx; this.y += this.vy; this.vy += this.zwaartekracht; this.leven--; }
      teken() {
        const alpha = this.leven / this.maxLeven;
        const g = this.krimp ? this.grootte * alpha : this.grootte;
        ctx.save();
        ctx.globalAlpha = alpha;
        if (this.glow) { ctx.shadowBlur = this.glow; ctx.shadowColor = this.kleur; }
        ctx.fillStyle = this.kleur;
        ctx.fillRect(this.x - g / 2, this.y - g / 2, g, g);
        ctx.restore();
      }
      get dood() { return this.leven <= 0; }
    }
    const particles = [];
    const spawnParticles = (x, y, n, k, o) => { for (let i = 0; i < n; i++) particles.push(new Particle(x, y, k, o)); };

    // ---------- DECOR ----------
    function huidigeEmojiSet() {
      return BIOMES[huidigBioom]?.emoji || ["🪨","☄️","🌑","⭐","🛸"];
    }
    const decoraties = [];
    for (let i = 0; i < 8; i++) decoraties.push({
      x: 150 + i * 200 + Math.random() * 80, y: (90 + Math.random() * 180) * SCHAAL,
      grootte: (32 + Math.random() * 28) * SCHAAL, emoji: (() => { const set = huidigeEmojiSet(); return set[Math.floor(Math.random() * set.length)]; })(),
      parallax: 0.3 + Math.random() * 0.25, rotatie: (Math.random() - 0.5) * 0.4
    });
    function tekenDecoraties() {
      for (const d of decoraties) {
        d.x -= effSnelheid * d.parallax;
        if (d.x < -80) {
          d.x = W + 80 + Math.random() * 200;
          d.y = (90 + Math.random() * 180) * SCHAAL;
          d.grootte = (32 + Math.random() * 28) * SCHAAL;
          d.emoji = (() => { const set = huidigeEmojiSet(); return set[Math.floor(Math.random() * set.length)]; })();
          d.rotatie = (Math.random() - 0.5) * 0.4;
        }
        ctx.save();
        ctx.translate(d.x, d.y); ctx.rotate(d.rotatie);
        ctx.globalAlpha = 0.55; ctx.shadowBlur = 18; ctx.shadowColor = biomeKleur("glow", 0.8);
        ctx.font = `${d.grootte}px serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(d.emoji, 0, 0);
        ctx.restore();
      }
    }


    const fakkels = [];
    for (let i = 0; i < 3; i++) fakkels.push({ x: 200 + i * 280 + Math.random() * 80, y: (130 + Math.random() * 80) * SCHAAL, grootte: 36 * SCHAAL });
    function tekenFakkels() {
      for (const f of fakkels) {
        f.x -= effSnelheid * 0.4;
        if (f.x < -60) { f.x = W + 60 + Math.random() * 200; f.y = (130 + Math.random() * 80) * SCHAAL; }
        if (frameTeller % 2 === 0) particles.push(new Particle(f.x + (Math.random() - 0.5) * 4, f.y - 8, Math.random() < 0.5 ? "#ff7820" : "#ffcc40", { spread: 0.8, leven: 30, grootte: 4, zwaartekracht: -0.08, krimp: true, glow: 16 }));
        if (frameTeller % 5 === 0) particles.push(new Particle(f.x + (Math.random() - 0.5) * 6, f.y - 4, "#ffffaa", { spread: 0.5, leven: 18, grootte: 3, zwaartekracht: -0.1, krimp: true, glow: 12 }));
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.shadowBlur = 20; ctx.shadowColor = "#ff6020";
        ctx.font = `${f.grootte}px serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🔥", 0, 0);
        ctx.restore();
      }
    }

    const glasVensters = [];
    for (let i = 0; i < 2; i++) glasVensters.push({ x: 150 + i * 500, y: 110 * SCHAAL, breedte: 90 * SCHAAL, hoogte: 130 * SCHAAL });
    function tekenGlasInLood() {
      for (const g of glasVensters) {
        g.x -= effSnelheid * 0.4;
        if (g.x + g.breedte < -50) g.x = W + 100 + Math.random() * 200;
        if (g.x > W + 100) continue;
        ctx.save();
        ctx.fillStyle = "rgba(20,15,25,0.8)";
        ctx.fillRect(g.x - 6, g.y - 6, g.breedte + 12, g.hoogte + 12);
        const cx = g.x + g.breedte / 2;
        ctx.shadowBlur = 25; ctx.shadowColor = biomeKleur("glow", 0.7);
        ctx.beginPath();
        ctx.moveTo(g.x, g.y + g.hoogte);
        ctx.lineTo(g.x, g.y + 20);
        ctx.quadraticCurveTo(cx, g.y - 10, g.x + g.breedte, g.y + 20);
        ctx.lineTo(g.x + g.breedte, g.y + g.hoogte);
        ctx.closePath();
        ctx.fillStyle = biomeKleur("lichtbundel", 0.3); ctx.fill();
        ctx.shadowBlur = 0;
        const patches = [
          { x: 0.2, y: 0.25, w: 0.25, h: 0.2, kleur: "#ff4080" },
          { x: 0.55, y: 0.25, w: 0.25, h: 0.2, kleur: "#40c0ff" },
          { x: 0.25, y: 0.55, w: 0.5, h: 0.15, kleur: "#ffcc40" },
          { x: 0.3, y: 0.75, w: 0.4, h: 0.18, kleur: "#80ff60" }
        ];
        for (const p of patches) {
          ctx.fillStyle = p.kleur; ctx.globalAlpha = 0.45;
          ctx.fillRect(g.x + g.breedte * p.x, g.y + g.hoogte * p.y, g.breedte * p.w, g.hoogte * p.h);
        }
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "rgba(20,15,25,0.9)"; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(g.x, g.y + g.hoogte * 0.5); ctx.lineTo(g.x + g.breedte, g.y + g.hoogte * 0.5);
        ctx.moveTo(g.x + g.breedte / 2, g.y + 10); ctx.lineTo(g.x + g.breedte / 2, g.y + g.hoogte);
        ctx.stroke();
        ctx.strokeStyle = "rgba(60,50,70,0.9)"; ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(g.x, g.y + g.hoogte);
        ctx.lineTo(g.x, g.y + 20);
        ctx.quadraticCurveTo(cx, g.y - 10, g.x + g.breedte, g.y + 20);
        ctx.lineTo(g.x + g.breedte, g.y + g.hoogte);
        ctx.stroke();
        ctx.restore();
      }
    }

    function tekenMist() {
      const grondTop = GROND_Y + SPELER_GROOTTE;
      ctx.save();
      for (let i = 0; i < 3; i++) {
        const offset = (frameTeller * (0.3 + i * 0.1)) % W;
        const grad = ctx.createLinearGradient(0, grondTop - 40, 0, grondTop + 10);
        grad.addColorStop(0, "rgba(180,170,200,0)");
        grad.addColorStop(1, `rgba(180,170,200,${0.08 + i * 0.04})`);
        ctx.fillStyle = grad;
        for (let x = -W; x < W * 2; x += 200) {
          const wx = x + offset - i * 50;
          ctx.beginPath();
          ctx.ellipse(wx, grondTop - 5, 120, 25, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    }

    // ---------- ACHTERGROND ----------
    function tekenBakstenenMuur() {
      const grondTop = GROND_Y + SPELER_GROOTTE;
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, biomeKleur("bgTop")); bg.addColorStop(1, biomeKleur("bgBot"));
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      const offset = (frameTeller * spelSnelheid * 0.15) % BAKSTEEN_W;
      ctx.save();
      ctx.globalAlpha = 0.55;
      for (let y = PLAFOND_HOOGTE; y < grondTop; y += BAKSTEEN_H) {
        const rij = Math.floor((y - PLAFOND_HOOGTE) / BAKSTEEN_H);
        const xOff = rij % 2 === 0 ? 0 : BAKSTEEN_W / 2;
        for (let x = -BAKSTEEN_W - offset + xOff; x < W + BAKSTEEN_W; x += BAKSTEEN_W) {
          const grad = ctx.createLinearGradient(x, y, x, y + BAKSTEEN_H);
          grad.addColorStop(0, biomeKleur("bakstenenLicht"));
          grad.addColorStop(1, biomeKleur("bakstenenDonker"));
          ctx.fillStyle = grad;
          ctx.fillRect(x + 1, y + 1, BAKSTEEN_W - 2, BAKSTEEN_H - 2);
          ctx.fillStyle = biomeKleur("bakstenenHighlight", 0.3);
          ctx.fillRect(x + 1, y + 1, BAKSTEEN_W - 2, 2);
          ctx.fillStyle = "rgba(0,0,0,0.4)";
          ctx.fillRect(x + 1, y + BAKSTEEN_H - 3, BAKSTEEN_W - 2, 2);
        }
      }
      ctx.restore();
    }
    function tekenLichtbundels() {
      ctx.save();
      const bundels = [{ x: 80, b: 50 }, { x: 280, b: 70 }, { x: 480, b: 60 }, { x: 680, b: 55 }];
      for (const bb of bundels) {
        const x = (bb.x - frameTeller * spelSnelheid * 0.25) % (W + 150);
        const echtX = x < -100 ? x + W + 200 : x;
        const pulse = 0.4 + Math.sin(frameTeller * 0.04 + bb.x) * 0.15;
        const grad = ctx.createLinearGradient(echtX, PLAFOND_HOOGTE, echtX, GROND_Y + SPELER_GROOTTE);
        grad.addColorStop(0, biomeKleur("lichtbundel", pulse * 0.6));
        grad.addColorStop(0.5, biomeKleur("lichtbundel", pulse * 0.3));
        grad.addColorStop(1, biomeKleur("lichtbundel", pulse * 0.05));
        ctx.fillStyle = grad;
        ctx.fillRect(echtX - bb.b / 2, PLAFOND_HOOGTE, bb.b, GROND_Y + SPELER_GROOTTE - PLAFOND_HOOGTE);
      }
      ctx.restore();
    }
    function tekenPlafond() {
      // alleen vlak plafond + glow-rand. Echte raakbare stekels worden via
      // plafondStekels[] dynamisch gespawnd voor visuele duidelijkheid:
      // "tand zichtbaar = gevaar".
      const grad = ctx.createLinearGradient(0, 0, 0, PLAFOND_HOOGTE);
      grad.addColorStop(0, "#1a1620"); grad.addColorStop(1, "#3a3340");
      ctx.fillStyle = grad; ctx.fillRect(0, 0, W, PLAFOND_HOOGTE - 4);
      ctx.save();
      ctx.shadowBlur = 14; ctx.shadowColor = biomeKleur("glow", 0.5);
      ctx.fillStyle = biomeKleur("bakstenenHighlight", 0.6);
      ctx.fillRect(0, PLAFOND_HOOGTE - 6, W, 2);
      ctx.restore();
    }
    function tekenPlafondStekel(x, b, h) {
      // omgedraaide stekel: basis bovenaan tegen plafond, punt naar beneden
      const yTop = PLAFOND_HOOGTE - 4;
      const yBot = yTop + h;
      ctx.save();
      ctx.shadowBlur = 14;
      ctx.shadowColor = "rgba(255,200,200,0.5)";
      const grad = ctx.createLinearGradient(x, yTop, x, yBot);
      grad.addColorStop(0, "#7a7a85");
      grad.addColorStop(0.5, "#bababf");
      grad.addColorStop(1, "#f0f0f5");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(x, yTop);
      ctx.lineTo(x + b, yTop);
      ctx.lineTo(x + b / 2, yBot);
      ctx.closePath();
      ctx.fill();
      // donker randje rechts
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.beginPath();
      ctx.moveTo(x + b / 2, yBot);
      ctx.lineTo(x + b, yTop);
      ctx.lineTo(x + b - 4, yTop);
      ctx.closePath();
      ctx.fill();
      // wit highlight links
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.beginPath();
      ctx.moveTo(x, yTop);
      ctx.lineTo(x + b / 2, yBot);
      ctx.lineTo(x + b / 2 - 1, yBot - 2);
      ctx.lineTo(x + 3, yTop);
      ctx.closePath();
      ctx.fill();
      // outline
      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, yTop);
      ctx.lineTo(x + b, yTop);
      ctx.lineTo(x + b / 2, yBot);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
    function tekenGhost() {
      const g = ghostStateRef.current;
      if (!g) return;
      // Ghost iets achter de speler getekend (60px naar links) zodat-ie niet
      // overlapt. Semi-transparant, blauwgloeiende rand zodat duidelijk is
      // wie wie is. Naam + score boven de ghost.
      const cx = speler.basisX - 60 * SCHAAL + speler.breedte / 2;
      const cy = (g.y || GROND_Y) + speler.hoogte / 2;
      const r = speler.breedte / 2;
      ctx.save();
      ctx.globalAlpha = g.alive ? 0.7 : 0.25;
      // glow + body
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#42a5f5";
      const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 2, cx, cy, r);
      grad.addColorStop(0, "#80c0ff");
      grad.addColorStop(0.6, "#1976d2");
      grad.addColorStop(1, "#0d47a1");
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
      // outline
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255,255,255,0.85)";
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, r - 0.5, 0, Math.PI * 2); ctx.stroke();
      // naam-pill boven ghost
      ctx.globalAlpha = 1;
      ctx.font = `bold ${11 * SCHAAL}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "bottom";
      ctx.fillStyle = "rgba(0,0,0,0.65)";
      const text = `${g.name || "Tegenstander"} · ${g.score || 0}`;
      const padding = 4 * SCHAAL;
      const m = ctx.measureText(text);
      const tw = m.width + padding * 2;
      const th = 16 * SCHAAL;
      ctx.fillRect(cx - tw / 2, cy - r - 24 * SCHAAL, tw, th);
      ctx.fillStyle = "#80c0ff";
      ctx.fillText(text, cx, cy - r - 24 * SCHAAL + th - 3 * SCHAAL);
      ctx.restore();
    }
    function tekenZwevendeMine(m) {
      // donkere bol met 6 spikes + rode pulserende glow
      const cx = m.x;
      const cy = m.y + Math.sin(m.fase) * m.amp;
      const r = m.r;
      ctx.save();
      const pulseGlow = 18 + Math.sin(m.fase * 2) * 8;
      ctx.shadowBlur = pulseGlow;
      ctx.shadowColor = "#ff3030";
      // spikes (6 driehoekjes rondom)
      const spikeLen = r * 0.55;
      ctx.fillStyle = "#3a2020";
      for (let i = 0; i < 6; i++) {
        const a = m.fase * 0.3 + (i * Math.PI) / 3;
        const x1 = cx + Math.cos(a - 0.15) * r;
        const y1 = cy + Math.sin(a - 0.15) * r;
        const x2 = cx + Math.cos(a + 0.15) * r;
        const y2 = cy + Math.sin(a + 0.15) * r;
        const xt = cx + Math.cos(a) * (r + spikeLen);
        const yt = cy + Math.sin(a) * (r + spikeLen);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(xt, yt);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.fill();
      }
      // bol-body (donker grijs/zwart met radial gradient)
      const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 1, cx, cy, r);
      grad.addColorStop(0, "#5a4040");
      grad.addColorStop(0.7, "#1a0808");
      grad.addColorStop(1, "#0a0000");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      // pulserend rood lampje in het midden
      ctx.shadowBlur = 12;
      const blink = 0.5 + Math.sin(m.fase * 4) * 0.5;
      ctx.fillStyle = `rgba(255, ${40 + blink * 80}, 40, ${0.7 + blink * 0.3})`;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.22, 0, Math.PI * 2);
      ctx.fill();
      // ring-outline voor leesbaarheid
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255, 80, 80, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.85, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    function tekenGrond() {
      const grondTop = GROND_Y + SPELER_GROOTTE;
      const grad = ctx.createLinearGradient(0, grondTop, 0, H);
      grad.addColorStop(0, biomeKleur("grondLicht")); grad.addColorStop(1, biomeKleur("grondDonker"));
      ctx.fillStyle = grad; ctx.fillRect(0, grondTop, W, H - grondTop);
      const offset = (frameTeller * spelSnelheid) % BAKSTEEN_W;
      ctx.save();
      ctx.globalAlpha = 0.5;
      for (let y = grondTop; y < H; y += BAKSTEEN_H) {
        const rij = Math.floor((y - grondTop) / BAKSTEEN_H);
        const xOff = rij % 2 === 0 ? 0 : BAKSTEEN_W / 2;
        for (let x = -BAKSTEEN_W - offset + xOff; x < W + BAKSTEEN_W; x += BAKSTEEN_W) {
          ctx.fillStyle = biomeKleur("bakstenenDonker");
          ctx.fillRect(x + 1, y + 1, BAKSTEEN_W - 2, BAKSTEEN_H - 2);
          ctx.fillStyle = biomeKleur("bakstenenHighlight", 0.25);
          ctx.fillRect(x + 1, y + 1, BAKSTEEN_W - 2, 2);
        }
      }
      ctx.restore();
      ctx.save();
      ctx.shadowBlur = 18; ctx.shadowColor = biomeKleur("glow", 0.7);
      ctx.strokeStyle = biomeKleur("glow", 0.7); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, grondTop); ctx.lineTo(W, grondTop); ctx.stroke();
      ctx.restore();
    }

    // ---------- SPELER ----------
    const speler = { x: 100 * SCHAAL, basisX: 100 * SCHAAL, y: GROND_Y, breedte: SPELER_GROOTTE, hoogte: SPELER_GROOTTE, snelheidX: 0, snelheidY: 0, springt: false, rotatie: 0, trailTeller: 0, sprongTeller: 0 };
    function spelerBots() { const m = 4 * SCHAAL; return { x: speler.x + m, y: speler.y + m, breedte: speler.breedte - m * 2, hoogte: speler.hoogte - m * 2 }; }
    function tekenSpeler() {
      const cx = speler.x + speler.breedte / 2;
      const cy = speler.y + speler.hoogte / 2;
      const r = speler.breedte / 2;

      // Tijdens vliegen: speler groeit naar 2.5x — grow eerste 30f, shrink laatste 30f
      let vliegSchaal = 1;
      if (vliegFrames > 0) {
        if (vliegFrames > VLIEG_DUUR - 30) {
          // grow phase (begin)
          const t = (VLIEG_DUUR - vliegFrames) / 30;
          vliegSchaal = 1 + t * 1.5;
        } else if (vliegFrames < 30) {
          // shrink phase (einde)
          vliegSchaal = 1 + (vliegFrames / 30) * 1.5;
        } else {
          vliegSchaal = 2.5;
        }
      }

      // gouden schild tijdens vliegen (immune) — schaalt mee met spelergrootte
      // zodat het schild altijd even ruim om het poppetje sluit, ook als die
      // groter wordt
      if (vliegFrames > 0) {
        ctx.save();
        ctx.translate(cx, cy);
        const pulse = 0.6 + Math.sin(frameTeller * 0.3) * 0.3;
        ctx.shadowBlur = 35 * vliegSchaal; ctx.shadowColor = "#ffcc40";
        ctx.strokeStyle = `rgba(255,204,64,${pulse})`;
        ctx.lineWidth = 3 * vliegSchaal;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.6 * vliegSchaal, 0, Math.PI * 2);
        ctx.stroke();
        // tweede ring
        ctx.strokeStyle = `rgba(255,255,255,${pulse * 0.5})`;
        ctx.lineWidth = 1.5 * vliegSchaal;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.9 * vliegSchaal, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      ctx.save();
      // hit-knipper tijdens boss-invincibility (speler half doorzichtig in cycli)
      if (bossHitInvincibility > 0 && Math.floor(bossHitInvincibility / 6) % 2 === 0) {
        ctx.globalAlpha = 0.35;
      }
      ctx.translate(cx, cy);
      if (vliegSchaal !== 1) ctx.scale(vliegSchaal, vliegSchaal);
      ctx.rotate(speler.rotatie);
      ctx.shadowBlur = vliegFrames > 0 ? 35 : 25;
      ctx.shadowColor = vliegFrames > 0 ? "#ffcc40" : "#ff2030";

      const skin = skinRef.current;
      const skinMeta = SKIN_BY_ID[skin];
      const isEmojiSkin = skin && skin !== "default" && skin !== "blackhole" && !!skinMeta;
      if (isEmojiSkin) {
        // Emoji-skin: donkere bol-achtergrond + emoji groot in het midden
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#a040ff";
        const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 2, 0, 0, r);
        grad.addColorStop(0, "rgba(60, 60, 80, 0.9)");
        grad.addColorStop(0.7, "rgba(20, 20, 35, 0.95)");
        grad.addColorStop(1, "rgba(0, 0, 0, 1)");
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
        // outline
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(0, 0, r - 0.5, 0, Math.PI * 2); ctx.stroke();
        // emoji centraal — gebruik systeem-emoji-font voor consistente render
        ctx.font = `${r * 1.55}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // emoji renderen zonder rotatie meeschalend zodat ze niet ondersteboven staan
        ctx.save();
        ctx.rotate(-speler.rotatie);
        ctx.fillText(skinMeta.emoji, 0, r * 0.05);
        ctx.restore();
      } else if (skinRef.current === "blackhole") {
        // BLACK HOLE skin: donkere bol + roterende oranje accretion-ring
        ctx.shadowBlur = 28;
        ctx.shadowColor = "#a040ff";
        // accretion-disc ring (oranje-paars) — staat onder de bol getekend
        const ringSpin = frameTeller * 0.08;
        ctx.save();
        ctx.rotate(ringSpin);
        const discGrad = ctx.createRadialGradient(0, 0, r * 0.7, 0, 0, r * 1.5);
        discGrad.addColorStop(0, "rgba(255, 200, 80, 0)");
        discGrad.addColorStop(0.5, "rgba(255, 130, 40, 0.85)");
        discGrad.addColorStop(0.85, "rgba(180, 60, 220, 0.75)");
        discGrad.addColorStop(1, "rgba(80, 0, 140, 0)");
        ctx.fillStyle = discGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, r * 1.5, r * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // event-horizon: pure zwarte bol
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#000";
        const bhGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        bhGrad.addColorStop(0, "#000");
        bhGrad.addColorStop(0.85, "#0a0010");
        bhGrad.addColorStop(1, "#1a0030");
        ctx.fillStyle = bhGrad;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
        // licht-gebogen randje (gravitational lensing-effect)
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(200, 100, 255, 0.7)";
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(0, 0, r - 0.5, 0, Math.PI * 2); ctx.stroke();
      } else if (logoGeladen) {
        // Studiebol-logo als speler — image binnen cirkel-clip + witte rand
        ctx.save();
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.clip();
        // donker achtergrondje binnen cirkel zodat logo contrast heeft
        ctx.fillStyle = "#0a0a14";
        ctx.fillRect(-r, -r, r * 2, r * 2);
        // image schalen (de bol in icon-192 zit gecentreerd onder de "Studiebol"-tekst)
        ctx.drawImage(logoImg, -r * 1.05, -r * 1.05, r * 2.1, r * 2.1);
        ctx.restore();
        // dunne witte rand om de bol
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(0, 0, r - 0.5, 0, Math.PI * 2); ctx.stroke();
      } else {
        // fallback: rode bol met witte band (oude weergave)
        const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 2, 0, 0, r);
        grad.addColorStop(0, "#ff5060"); grad.addColorStop(0.6, "#cc1525"); grad.addColorStop(1, "#7a0010");
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#ffffff"; ctx.fillRect(-r, -3 * SCHAAL, r * 2, 6 * SCHAAL);
        ctx.fillStyle = "#aa1020"; ctx.fillRect(-r, -1 * SCHAAL, r * 2, 2 * SCHAAL);
        // alleen voor fallback (geen logo geladen): witte rand + glans
        ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(0, 0, r - 1, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath(); ctx.arc(-r * 0.4, -r * 0.4, r * 0.18, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }

    // ---------- OBSTAKELS ----------
    const obstakels = [];
    // Custom-level decoraties — boom/wolk/etc. uit user-built levels. Alleen
    // visueel, geen collisie. Apart van de biome-decoraties (die zijn
    // willekeurig en horen bij het level-bioom).
    const customDecoraties = [];
    // Schansen + loopings — bij contact super-jump + safe-zone + arc-pickups.
    // schansen[] = { x, y, breedte, hoogte, type: 'schans'|'loop', geactiveerd }
    const schansen = [];
    // Frames-teller voor 'safe-zone' direct na een schans: zo lang > 0 worden
    // er geen nieuwe grond-obstakels gespawnd zodat speler niet direct op een
    // spike landt na de super-sprong.
    let schansVeiligeFrames = 0;
    // Loop-animatie state — als loopActief, volgt speler de circulaire baan
    // van loopRef (1 volledige revolutie in LOOP_DUUR frames). Wereld is
    // bevroren (effSnelheid = 0) tijdens de animatie.
    let loopActief = false;
    let loopRef = null;
    let loopProgress = 0;          // 0 → 1, fractie van loop-rit
    let loopRadiusX = 0;
    let loopRadiusY = 0;
    const LOOP_DUUR = 70;          // frames voor de hele loop-rit (was 55, iets dramatischer)
    // Entry op de bodem (canvas π/2 = 6 o'clock) — exact onder het visuele
    // gap. Tangent is daar +x = natuurlijke rechtwaartse motion van speler.
    // Sweep -2π = volledige counter-clockwise revolutie (zoals een achtbaan
    // omhoog via de RECHTERkant, over de top, neer via LINKS — past bij
    // links-naar-rechts running). Eindigt op zelfde spot, dan kicker.
    const LOOP_ENTRY = 0.5 * Math.PI;
    const LOOP_SWEEP = -2 * Math.PI;
    // ──────── DUNGEON-WERELD (Fase 1) ────────
    // Portal-pickup spawnt af en toe; bij contact gaat speler 25 sec naar
    // 'dungeon-mode' (dark-blue overlay + brick-edges). Bestaande gameplay
    // loopt door — alleen het scherm ziet er anders uit. Bij overleven:
    // bonus-hart + score-boost. Dood = normaal life-verlies, geen extra straf.
    const portals = []; // entries kunnen `type: 'dungeon'` (default) of `type: 'hell'` zijn
    let dungeonMode = false;
    let dungeonFrames = 0;
    let dungeonFadeIn = 0;        // > 0 = aan het inkomen
    let dungeonFadeOut = 0;       // > 0 = aan het uitgaan
    const DUNGEON_DUUR = 1500;    // ~25 sec @ 60fps
    const DUNGEON_FADE = 30;      // frames voor fade-in / fade-out

    // ── HELL-MODE ── Geometry-Dash-stijl block-platformer over lava.
    // Activeert via een rood hell-portaal (zeldzaam, vanaf score 100).
    // Tijdens hellMode: vlakke grond = lava (HP-damage bij staan), platforms
    // spawnen vaker en op meerdere hoogtes — speler MOET van blok naar blok.
    let hellMode = false;
    let hellFrames = 0;
    let hellFadeIn = 0;
    let hellFadeOut = 0;
    const HELL_DUUR = 1800;       // ~30 sec
    const HELL_FADE = 30;
    let lavaDamageCooldown = 0;   // anti-spam-i-frames bovenop hpFlashTeller
    const vonken = [];            // opstijgende lava-vonkjes (visueel)
    let vonkSpawnTeller = 0;

    // ── OBLIVION PULSE — admin-only special level ──
    // Cutscene-fase: portaal → warp door ruimte → black-hole-instorting → land in Oblivion Pulse
    // Tijdens oblivionMode: extreme moeilijkheid in space-thema. Overleven 60 sec = Black Hole skin.
    let cutsceneFase = "geen"; // "geen" | "portal" | "warp" | "blackhole" | "settle"
    let cutsceneFrames = 0;
    const CUTSCENE_PORTAL_DUUR = 90;     // 1.5 sec portaal-zoom
    const CUTSCENE_WARP_DUUR = 150;      // 2.5 sec starfield-warp
    const CUTSCENE_BLACKHOLE_DUUR = 100; // ~1.7 sec black-hole-instorting
    const CUTSCENE_SETTLE_DUUR = 40;     // 0.7 sec settle in Oblivion
    let oblivionMode = false;
    let oblivionFrames = 0;
    let oblivionFadeOut = 0;
    const OBLIVION_DUUR_VOOR_UNLOCK = 3600; // 60 sec overleven = unlock
    const OBLIVION_FADE = 40;
    let oblivionUnlockGedaan = false;
    // visuele warp-strepen tijdens cutscene
    const warpStrepen = [];
    // pre-init: starfield voor space achtergrond
    const ruimteSterren = [];
    for (let i = 0; i < 80; i++) {
      ruimteSterren.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0.5 + Math.random() * 1.8,
        snel: 0.2 + Math.random() * 0.6,
        helderheid: 0.4 + Math.random() * 0.6,
      });
    }
    // Haaien — alleen tijdens dungeon-mode. Zwemmen aan vloerniveau,
    // bij contact: levenVerlies (geen spikes meer in dungeon, water erbij).
    const haaien = [];
    let haaiSpawnTeller = 180;
    // Vissen — kleurige decoratie in dungeon-water (geen schade).
    const vissen = [];
    const VIS_KLEUREN = ["#ffaa30", "#ff5588", "#ffee60", "#80e8ff", "#a0ff80", "#ff80c0", "#ff5040"];
    let visSpawnTeller = 30;
    // Bubbels stijgen op vanaf de bodem — pure decoratie tijdens dungeon-mode
    const bubbels = [];
    // Schatkisten — zeldzame pickup in dungeon-water voor +score bonus
    const schatkisten = [];
    let schatkistSpawnTeller = 480; // eerste ~8 sec na entry, dan random
    // ──────── FAN-SPANDOEKEN ────────
    // Mannetjes met spandoek met de naam van de top-3 highscore-spelers.
    // Spawnt periodiek vanaf rechter rand, rolt langs zoals decoratie.
    const fans = [];              // { x, naam, tekst, breedte, hoogte }
    let fanSpawnTeller = 600;     // eerste banner ~10 sec na start
    const FAN_INTERVAL = 1500;    // daarna elke ~25 sec
    function tekenStenenStekel(x, y, b, h) {
      ctx.save(); ctx.shadowBlur = 12; ctx.shadowColor = "rgba(255,255,255,0.4)";
      const grad = ctx.createLinearGradient(x, y, x, y + h);
      grad.addColorStop(0, "#f0f0f5"); grad.addColorStop(0.6, "#a8a8b0"); grad.addColorStop(1, "#5a5a65");
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x + b / 2, y); ctx.lineTo(x + b, y + h); ctx.closePath(); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.beginPath(); ctx.moveTo(x + b / 2, y); ctx.lineTo(x + b, y + h); ctx.lineTo(x + b - 4, y + h); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x + b / 2, y); ctx.lineTo(x + b / 2 - 1, y + 2); ctx.lineTo(x + 3, y + h); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.7)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x + b / 2, y); ctx.lineTo(x + b, y + h); ctx.closePath(); ctx.stroke();
      ctx.restore();
    }
    function tekenStenenBlok(x, y, b, h) {
      ctx.save(); ctx.shadowBlur = 10; ctx.shadowColor = "rgba(255,255,255,0.3)";
      const grad = ctx.createLinearGradient(x, y, x, y + h);
      grad.addColorStop(0, "#dadae3"); grad.addColorStop(1, "#6a6a75");
      ctx.fillStyle = grad; ctx.fillRect(x, y, b, h);
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.fillRect(x, y, b, 3); ctx.fillRect(x, y, 3, h);
      ctx.fillStyle = "rgba(0,0,0,0.4)"; ctx.fillRect(x + b - 3, y, 3, h); ctx.fillRect(x, y + h - 3, b, 3);
      ctx.strokeStyle = "rgba(0,0,0,0.3)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x + b / 2, y + 6); ctx.lineTo(x + b / 2, y + h - 6);
      ctx.moveTo(x + 6, y + h / 2); ctx.lineTo(x + b - 6, y + h / 2); ctx.stroke();
      ctx.restore();
    }
    function botst(a, b) { return a.x < b.x + b.breedte && a.x + a.breedte > b.x && a.y < b.y + b.hoogte && a.y + a.hoogte > b.y; }
    // Spawn een obstakel uit een custom-level-record. Push naar dezelfde
    // arrays als de random-spawn — bestaande collision/render werkt automatisch.
    function spawnUitCustom(obs) {
      if (!obs || !obs.type) return;
      const yScaled = obs.y != null ? obs.y * SCHAAL : null;
      if (obs.type === "spike") {
        const breedte = 24 * SCHAAL, hoogte = 32 * SCHAAL;
        obstakels.push({ type: 0, x: W, breedte, hoogte, y: GROND_Y + SPELER_GROOTTE - hoogte, gescoord: false });
      } else if (obs.type === "blok") {
        const breedte = 30 * SCHAAL, hoogte = 50 * SCHAAL;
        obstakels.push({ type: 2, x: W, breedte, hoogte, y: GROND_Y + SPELER_GROOTTE - hoogte, gescoord: false });
      } else if (obs.type === "ring") {
        ringen.push({ x: W + 30, y: yScaled || 200 * SCHAAL, fase: 0, opgepakt: false, grootte: 24 * SCHAAL });
      } else if (obs.type === "plafondstekel") {
        plafondStekels.push({ x: W + 40, breedte: 26 * SCHAAL, hoogte: 30 * SCHAAL });
      } else if (obs.type === "mijn") {
        const r = 20 * SCHAAL;
        const baseY = yScaled || ((PLAFOND_HOOGTE - 4) + 80 * SCHAAL);
        zwevendeMinen.push({ x: W + 60, y: baseY, r, fase: 0, amp: 8 * SCHAAL });
      } else if (obs.type === "platform") {
        platforms.push({ x: W + 20, y: PLATFORM_Y, breedte: 200 * SCHAAL });
      } else if (obs.type === "schans") {
        const hoogte = 0.25 * H, breedte = 0.36 * H;
        schansen.push({
          x: W + 40, y: GROND_Y + SPELER_GROOTTE - hoogte,
          breedte, hoogte, type: "schans", geactiveerd: false,
        });
      } else if (obs.type === "hart") {
        bonusHarten.push({ x: W + 40, y: yScaled || 220 * SCHAAL, grootte: 28 * SCHAAL, fase: 0, opgepakt: false });
      } else if (obs.type === "magneet") {
        magneetPickups.push({ x: W + 40, y: yScaled || 220 * SCHAAL, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
      } else if (obs.type === "bom") {
        bombPickups.push({ x: W + 40, y: yScaled || 220 * SCHAAL, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
      } else if (obs.type === "spookje") {
        // Stationaire vliegende spike — zelfde collision als type-0, ander visueel
        const breedte = 32 * SCHAAL, hoogte = 32 * SCHAAL;
        const baseY = yScaled != null ? yScaled - hoogte / 2 : 200 * SCHAAL;
        obstakels.push({ type: 0, x: W, breedte, hoogte, y: baseY, gescoord: false, render: "ghost", baseY });
      } else if (typeof obs.type === "string" && obs.type.startsWith("decor_")) {
        // Visueel-only — geen collisie, scrollt mee met de wereld
        customDecoraties.push({
          x: W + 20,
          y: yScaled != null ? yScaled : 110 * SCHAAL,
          type: obs.type,
          fase: Math.random() * Math.PI * 2,
        });
      }
    }
    function maakObstakel() {
      const r = Math.random();
      let type = 0;
      if (score > 2 && r < 0.30) type = 1;
      else if (score > 6 && r < 0.50) type = 2;
      // Tijdens dungeon-modus: geen spikes (water op de vloer maakt ze
      // onzichtbaar). In plaats daarvan altijd block-type + haaien als
      // hazard.
      if (dungeonMode) type = 2;
      const breedte = type === 0 ? 24 * SCHAAL : type === 1 ? 54 * SCHAAL : 30 * SCHAAL;
      const hoogte = type === 2 ? 50 * SCHAAL : 32 * SCHAAL;
      obstakels.push({ type, x: W, breedte, hoogte, y: GROND_Y + SPELER_GROOTTE - hoogte, gescoord: false });
    }
    function tekenObstakel(o) {
      if (o.render === "ghost") {
        // 👻 met zachte hover-animatie + paarse glow
        const t = performance.now() / 1000;
        const hover = Math.sin(t * 3 + (o.x * 0.01)) * 4 * SCHAAL;
        const cx = o.x + o.breedte / 2;
        const cy = o.y + o.hoogte / 2 + hover;
        ctx.save();
        ctx.shadowBlur = 14;
        ctx.shadowColor = "rgba(180, 130, 255, 0.85)";
        ctx.font = `${o.hoogte * 1.05}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("👻", cx, cy);
        ctx.restore();
        return;
      }
      if (o.type === 0) tekenStenenStekel(o.x, o.y, o.breedte, o.hoogte);
      else if (o.type === 1) {
        tekenStenenStekel(o.x, o.y, 24 * SCHAAL, o.hoogte);
        tekenStenenStekel(o.x + 30 * SCHAAL, o.y, 24 * SCHAAL, o.hoogte);
      } else tekenStenenBlok(o.x, o.y, o.breedte, o.hoogte);
    }
    function spawnFanGroep() {
      const namen = topSpelersRef.current && topSpelersRef.current.length > 0
        ? topSpelersRef.current
        : ["Speler"];
      // Kies een random index uit top-3; index = rang - 1
      const idx = Math.floor(Math.random() * Math.min(namen.length, 3));
      const naam = namen[idx];
      const rang = idx + 1;
      const naamUp = String(naam).toUpperCase().slice(0, 14);
      const tekst = `GEFELICITEERD ${naamUp} MET JE HIGH SCORE ${rang}E PLAATS!`;
      // Banner-breedte schaalt mee met tekstlengte (ruwweg)
      const tekstW = Math.max(280, tekst.length * 14) * SCHAAL;
      fans.push({
        x: W + 40,
        naam,
        rang,
        tekst,
        breedte: tekstW,
        hoogte: 130 * SCHAAL,
      });
    }
    function tekenFanGroep(f) {
      const grondTop = GROND_Y + SPELER_GROOTTE;
      const figH = 70 * SCHAAL;          // was 32 — ruim 2× zo groot
      const figW = 26 * SCHAAL;          // was 14
      const figLeftX = f.x;
      const figRightX = f.x + f.breedte - figW;
      const baseY = grondTop;             // mannetjes staan op de grond
      const headTopY = baseY - figH;      // hoofd-niveau
      const bannerY = headTopY - 50 * SCHAAL;
      const bannerH = 40 * SCHAAL;        // was 22
      const bannerL = figLeftX + figW / 2 - 6 * SCHAAL;
      const bannerR = figRightX + figW / 2 + 6 * SCHAAL;
      const bannerW = bannerR - bannerL;

      ctx.save();
      // Stokjes (paaltjes): van top-hand omhoog naar banner
      ctx.strokeStyle = "#8a6a40";
      ctx.lineWidth = 4 * SCHAAL;
      ctx.beginPath();
      ctx.moveTo(figLeftX + figW / 2, headTopY + 12 * SCHAAL);
      ctx.lineTo(figLeftX + figW / 2, bannerY + bannerH);
      ctx.moveTo(figRightX + figW / 2, headTopY + 12 * SCHAAL);
      ctx.lineTo(figRightX + figW / 2, bannerY + bannerH);
      ctx.stroke();

      // Banner-schaduw (subtiel onder de banner)
      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.fillRect(bannerL + 3 * SCHAAL, bannerY + 3 * SCHAAL, bannerW, bannerH);
      // Banner — wit met rode rand
      ctx.fillStyle = "rgba(255, 250, 235, 0.97)";
      ctx.fillRect(bannerL, bannerY, bannerW, bannerH);
      ctx.strokeStyle = "#ff5252";
      ctx.lineWidth = 3 * SCHAAL;
      ctx.strokeRect(bannerL, bannerY, bannerW, bannerH);

      // Banner-tekst
      ctx.fillStyle = "#1a1a1a";
      ctx.font = `bold ${Math.floor(bannerH * 0.62)}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(f.tekst, bannerL + bannerW / 2, bannerY + bannerH / 2);

      // Hoedkleur per rang: goud / zilver / brons
      const hoedKleur = f.rang === 1 ? "#ffd700" : f.rang === 2 ? "#d8d8d8" : "#cd7f32";
      const hoedRand = f.rang === 1 ? "#a08000" : f.rang === 2 ? "#888888" : "#7a4a18";
      // Shirt-kleuren per mannetje verschillend zodat ze niet identiek zijn
      const shirtL = f.rang === 1 ? "#e84545" : f.rang === 2 ? "#3070d0" : "#69b840";
      const shirtR = f.rang === 1 ? "#3070d0" : f.rang === 2 ? "#e84545" : "#a040c0";
      // Lichte zwaai-animatie via frameTeller voor levendigheid
      const wave = Math.sin(frameTeller * 0.18) * 3 * SCHAAL;

      // Stick-figures (links en rechts) — kleurig + partyhoedje + gezichtje
      const sides = [
        { fx: figLeftX, shirt: shirtL, mirror: 1 },
        { fx: figRightX, shirt: shirtR, mirror: -1 },
      ];
      for (const s of sides) {
        const cx = s.fx + figW / 2;
        const headR = 11 * SCHAAL;
        const headCx = cx;
        const headCy = headTopY + headR;

        // Lichaam (gekleurd shirt) — eerst onder hoofd
        ctx.strokeStyle = s.shirt;
        ctx.lineWidth = 7 * SCHAAL;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(cx, headCy + headR);
        ctx.lineTo(cx, baseY - 22 * SCHAAL);
        ctx.stroke();

        // Armen — eentje omhoog naar de paal, andere zwaait
        ctx.lineWidth = 4 * SCHAAL;
        ctx.strokeStyle = "#ffcc88";  // huid
        ctx.beginPath();
        // Vasthoudende arm omhoog
        ctx.moveTo(cx, headCy + headR + 4 * SCHAAL);
        ctx.lineTo(cx, headCy + headR * 0.2);
        // Zwaaiende vrije arm aan de buitenkant
        const buitenX = cx + s.mirror * (10 + Math.abs(wave * 0.6)) * SCHAAL;
        const buitenY = headCy + headR + 4 * SCHAAL + wave;
        ctx.moveTo(cx, headCy + headR + 6 * SCHAAL);
        ctx.lineTo(buitenX, buitenY);
        ctx.stroke();
        // Hand (klein cirkeltje aan einde zwaai)
        ctx.fillStyle = "#ffcc88";
        ctx.beginPath();
        ctx.arc(buitenX, buitenY, 2.5 * SCHAAL, 0, Math.PI * 2);
        ctx.fill();

        // Hoofd (rond, huid-kleurig met lichte randje)
        ctx.fillStyle = "#ffd9a8";
        ctx.beginPath();
        ctx.arc(headCx, headCy, headR, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#a06030";
        ctx.lineWidth = 1.5 * SCHAAL;
        ctx.stroke();

        // Gezichtje — twee zwarte oogjes + vrolijke mond
        ctx.fillStyle = "#222";
        ctx.beginPath();
        ctx.arc(headCx - 3 * SCHAAL, headCy - 1 * SCHAAL, 1.5 * SCHAAL, 0, Math.PI * 2);
        ctx.arc(headCx + 3 * SCHAAL, headCy - 1 * SCHAAL, 1.5 * SCHAAL, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 1.5 * SCHAAL;
        ctx.beginPath();
        ctx.arc(headCx, headCy + 2 * SCHAAL, 4 * SCHAAL, 0.15 * Math.PI, 0.85 * Math.PI);
        ctx.stroke();

        // Partyhoedje boven het hoofd — driehoek met pompom
        const hoedH = 14 * SCHAAL;
        const hoedB = headR * 1.5;
        const hoedTopY = headCy - headR - hoedH;
        ctx.fillStyle = hoedKleur;
        ctx.beginPath();
        ctx.moveTo(headCx - hoedB / 2, headCy - headR + 2 * SCHAAL);
        ctx.lineTo(headCx + hoedB / 2, headCy - headR + 2 * SCHAAL);
        ctx.lineTo(headCx, hoedTopY);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = hoedRand;
        ctx.lineWidth = 1.5 * SCHAAL;
        ctx.stroke();
        // Pompom op de top
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(headCx, hoedTopY, 3 * SCHAAL, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = hoedRand;
        ctx.lineWidth = 1 * SCHAAL;
        ctx.stroke();
        // Streep onderaan hoed
        ctx.fillStyle = hoedRand;
        ctx.fillRect(headCx - hoedB / 2, headCy - headR + 1 * SCHAAL, hoedB, 2 * SCHAAL);

        // Benen (donker)
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 5 * SCHAAL;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(cx, baseY - 22 * SCHAAL);
        ctx.lineTo(cx - 9 * SCHAAL, baseY - 1 * SCHAAL);
        ctx.moveTo(cx, baseY - 22 * SCHAAL);
        ctx.lineTo(cx + 9 * SCHAAL, baseY - 1 * SCHAAL);
        ctx.stroke();
      }
      ctx.restore();
    }
    function tekenHaai(h) {
      ctx.save();
      const cx = h.x + h.breedte / 2;
      const cy = h.y + h.hoogte / 2;
      const swayY = Math.sin(h.fase) * 1.5 * SCHAAL;
      // Sterke rood-oranje glow-halo zodat haai duidelijk opvalt
      ctx.shadowBlur = 26;
      ctx.shadowColor = "rgba(255, 80, 40, 0.85)";
      // Donkere outline-laag (stevige zwarte rand voor max contrast)
      ctx.fillStyle = "#0a1020";
      ctx.beginPath();
      ctx.ellipse(cx, cy + swayY, h.breedte / 2 + 3 * SCHAAL, h.hoogte / 2 + 3 * SCHAAL, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      // Body — sterker contrast: donkere rug, lichte buik
      const grad = ctx.createLinearGradient(0, h.y, 0, h.y + h.hoogte);
      grad.addColorStop(0, "#3a4a60");
      grad.addColorStop(0.55, "#5a6a82");
      grad.addColorStop(0.7, "#f0f4f8");
      grad.addColorStop(1, "#dde5f0");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(cx, cy + swayY, h.breedte / 2, h.hoogte / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      // Dikke witte outline rond body
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3.5 * SCHAAL;
      ctx.beginPath();
      ctx.ellipse(cx, cy + swayY, h.breedte / 2, h.hoogte / 2, 0, 0, Math.PI * 2);
      ctx.stroke();
      // Schaduw onder haai (op vloer)
      ctx.fillStyle = "rgba(0,0,0,0.30)";
      ctx.beginPath();
      ctx.ellipse(cx, h.y + h.hoogte + 3 * SCHAAL, h.breedte / 2.5, 4 * SCHAAL, 0, 0, Math.PI * 2);
      ctx.fill();
      // Staart — grote driehoek aan rechter (achter)kant
      ctx.fillStyle = "#5a6a85";
      ctx.beginPath();
      ctx.moveTo(h.x + h.breedte, cy + swayY);
      ctx.lineTo(h.x + h.breedte + 18 * SCHAAL, h.y - 6 * SCHAAL + swayY);
      ctx.lineTo(h.x + h.breedte + 18 * SCHAAL, h.y + h.hoogte + 6 * SCHAAL + swayY);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1.5 * SCHAAL;
      ctx.stroke();
      // Rugvin — groter, scherper
      ctx.fillStyle = "#5a6a85";
      ctx.beginPath();
      ctx.moveTo(cx - 8 * SCHAAL, h.y + 2 * SCHAAL + swayY);
      ctx.lineTo(cx + 4 * SCHAAL, h.y - 22 * SCHAAL + swayY);
      ctx.lineTo(cx + 14 * SCHAAL, h.y + 2 * SCHAAL + swayY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // ─── BOOS GEZICHT ───
      const eyeX = h.x + h.breedte * 0.22;
      const eyeY = cy + swayY - 3 * SCHAAL;
      // Rode gloeiende oog
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#ff2020";
      ctx.fillStyle = "#ff5050";
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 4.5 * SCHAAL, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      // Pupil zwart
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 2 * SCHAAL, 0, Math.PI * 2);
      ctx.fill();
      // Boze wenkbrauw (V-vorm) boven oog
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2.8 * SCHAAL;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(eyeX - 8 * SCHAAL, eyeY - 9 * SCHAAL);
      ctx.lineTo(eyeX + 6 * SCHAAL, eyeY - 4 * SCHAAL);
      ctx.stroke();
      // Open mond — donker gat
      ctx.fillStyle = "#2a0d0d";
      ctx.beginPath();
      ctx.moveTo(h.x + 1 * SCHAAL, cy + swayY + 1 * SCHAAL);
      ctx.lineTo(h.x + h.breedte * 0.32, cy + swayY + 5 * SCHAAL);
      ctx.lineTo(h.x + h.breedte * 0.32, cy + swayY + 11 * SCHAAL);
      ctx.lineTo(h.x + 1 * SCHAAL, cy + swayY + 9 * SCHAAL);
      ctx.closePath();
      ctx.fill();
      // Tanden — bovenrij + onderrij, scherp wit
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.lineWidth = 0.8 * SCHAAL;
      for (let t = 0; t < 5; t++) {
        const tx = h.x + 3 * SCHAAL + t * 5.5 * SCHAAL;
        const tyTop = cy + swayY + 2 * SCHAAL;
        const tyBot = cy + swayY + 11 * SCHAAL;
        // Boven (omlaag wijzend)
        ctx.beginPath();
        ctx.moveTo(tx, tyTop);
        ctx.lineTo(tx + 2.5 * SCHAAL, tyTop + 5 * SCHAAL);
        ctx.lineTo(tx + 5 * SCHAAL, tyTop);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Onder (omhoog wijzend)
        ctx.beginPath();
        ctx.moveTo(tx + 1.2 * SCHAAL, tyBot);
        ctx.lineTo(tx + 3.5 * SCHAAL, tyBot - 5 * SCHAAL);
        ctx.lineTo(tx + 6 * SCHAAL, tyBot);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();
    }
    // Y-positie van de periscoop-lens op basis van fase (uitzakken /
    // hangen op vaste hoogte / intrekken)
    function periscoopLensY() {
      if (!periscoop) return 0;
      // Lens lager (was +80, nu +140) zodat single-jump-peak 'm kan raken.
      // Speler-jump bereikt y≈219 vanaf GROND_Y=340; lens nu op y≈200 met
      // hitbox-radius 32 = ruime overlap.
      const eindY = (PLAFOND_HOOGTE + 140) * SCHAAL;
      const startY = PLAFOND_HOOGTE * SCHAAL;
      if (periscoop.faseNaam === "uit") {
        const t = periscoop.faseFrames / PERISCOOP_UIT_FRAMES;
        return startY + (eindY - startY) * t;
      } else if (periscoop.faseNaam === "hang") {
        // lichte bobbing tijdens hangen
        return eindY + Math.sin(periscoop.faseFrames * 0.1) * 2 * SCHAAL;
      } else { // "in"
        const t = periscoop.faseFrames / PERISCOOP_IN_FRAMES;
        return eindY + (startY - eindY) * t;
      }
    }
    function startBonusFase() {
      bonusFase = true;
      bonusFrames = BONUS_DUUR;
      bonusScore = 0;
      bonusIntroFrames = BONUS_INTRO_DUUR; // 2 sec "BONUS LEVEL" intro
      bonusRingen.length = 0;
      bonusRingSpawnTeller = 18;
      spelerLasers.length = 0;
      // CLEAN SLATE: alles wat damage kan doen of in de weg staat opruimen
      // zodat speler NIET af kan tijdens bonus (Mark: 'nu ging ik af, niet leuk').
      obstakels.length = 0;
      customDecoraties.length = 0;
      haaien.length = 0;
      plafondStekels.length = 0;
      schansen.length = 0;
      portals.length = 0;
      schatkisten.length = 0;
      vissen.length = 0;
      bubbels.length = 0;
      // Reguliere pickups ook weg — focus is alleen ringen-schieten
      ringen.length = 0;
      bonusHarten.length = 0;
      raketten.length = 0;
      flipPickups.length = 0;
      magneetPickups.length = 0;
      slowMoPickups.length = 0;
      bombPickups.length = 0;
      // periscoop trekt zich snel terug
      if (periscoop) {
        periscoop.faseNaam = "in";
        periscoop.faseFrames = PERISCOOP_IN_FRAMES - 8;
      }
      // Speler reset naar basis-positie zodat 'ie niet midden in een
      // sprong-arc vastzit
      speler.snelheidX = 0;
      // start-fanfare
      piep(660, 0.10, "sine", 0.14);
      setTimeout(() => piep(880, 0.10, "sine", 0.14), 80);
      setTimeout(() => piep(1320, 0.14, "sine", 0.14), 180);
      setTimeout(() => piep(1760, 0.18, "sine", 0.12), 300);
      // gouden flash
      spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 30, "#ffd700", { spread: 10, opwaarts: 2, leven: 40, grootte: 5, glow: 22 });
      spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 16, "#ffffff", { spread: 6, opwaarts: 1.5, leven: 32, grootte: 3, glow: 16 });
    }
    function eindeBonusFase() {
      bonusFase = false;
      bonusFrames = 0;
      bonusEindFlash = 110;
      bonusRingen.length = 0;
      spelerLasers.length = 0;
      // closing-tone
      piep(990, 0.14, "sine", 0.12);
      setTimeout(() => piep(660, 0.18, "sine", 0.10), 100);
    }
    function tekenPeriscoop() {
      if (!periscoop) return;
      const lensY = periscoopLensY();
      const cxP = periscoop.x;
      const cilTop = 0;
      const cilB = 18 * SCHAAL;
      ctx.save();
      // verticale lichtbundel naar beneden — extra zichtbaarheid
      const bundelGrad = ctx.createLinearGradient(0, lensY, 0, H);
      bundelGrad.addColorStop(0, "rgba(255, 248, 160, 0.45)");
      bundelGrad.addColorStop(1, "rgba(255, 248, 160, 0)");
      ctx.fillStyle = bundelGrad;
      ctx.fillRect(cxP - 28 * SCHAAL, lensY, 56 * SCHAAL, H - lensY);
      // cilinder (donker metaal met highlight)
      const cilGrad = ctx.createLinearGradient(cxP - cilB / 2, 0, cxP + cilB / 2, 0);
      cilGrad.addColorStop(0, "#3a3a48");
      cilGrad.addColorStop(0.4, "#7a7a90");
      cilGrad.addColorStop(0.55, "#c0c0d0");
      cilGrad.addColorStop(0.7, "#7a7a90");
      cilGrad.addColorStop(1, "#3a3a48");
      ctx.fillStyle = cilGrad;
      ctx.fillRect(cxP - cilB / 2, cilTop, cilB, lensY - cilTop);
      // verticale lijntjes voor metaal-detail
      ctx.strokeStyle = "rgba(20, 20, 30, 0.6)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cxP - 4 * SCHAAL, cilTop);
      ctx.lineTo(cxP - 4 * SCHAAL, lensY);
      ctx.moveTo(cxP + 4 * SCHAAL, cilTop);
      ctx.lineTo(cxP + 4 * SCHAAL, lensY);
      ctx.stroke();
      // lens (gloeiend gele cirkel)
      ctx.shadowBlur = 24;
      ctx.shadowColor = "#fff8a0";
      const lensGrad = ctx.createRadialGradient(cxP - 4 * SCHAAL, lensY - 4 * SCHAAL, 1, cxP, lensY, PERISCOOP_LENS_R * SCHAAL);
      lensGrad.addColorStop(0, "#ffffff");
      lensGrad.addColorStop(0.4, "#ffe060");
      lensGrad.addColorStop(0.8, "#cc8020");
      lensGrad.addColorStop(1, "#604010");
      ctx.fillStyle = lensGrad;
      ctx.beginPath();
      ctx.arc(cxP, lensY, PERISCOOP_LENS_R * SCHAAL, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      // lens-rand donker metaal
      ctx.strokeStyle = "#1a1a22";
      ctx.lineWidth = 2.5 * SCHAAL;
      ctx.beginPath();
      ctx.arc(cxP, lensY, PERISCOOP_LENS_R * SCHAAL, 0, Math.PI * 2);
      ctx.stroke();
      // lens-cross-hair tijdens hang fase (target-feel)
      if (periscoop.faseNaam === "hang") {
        ctx.strokeStyle = "rgba(20, 20, 22, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cxP - PERISCOOP_LENS_R * SCHAAL * 0.7, lensY);
        ctx.lineTo(cxP + PERISCOOP_LENS_R * SCHAAL * 0.7, lensY);
        ctx.moveTo(cxP, lensY - PERISCOOP_LENS_R * SCHAAL * 0.7);
        ctx.lineTo(cxP, lensY + PERISCOOP_LENS_R * SCHAAL * 0.7);
        ctx.stroke();
      }
      ctx.restore();
    }
    function tekenBonusFase() {
      if (!bonusFase) return;
      ctx.save();
      // VOLLEDIG ZWARTE achtergrond — bonus is een aparte mini-game,
      // wereld eronder verdwijnt. Mark: 'gewoon zwarte achtergrond'.
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);
      // Speler bovenop de zwarte achtergrond zodat 'ie zichtbaar blijft
      tekenSpeler();
      // subtiele paarse sterren-achtergrond voor sfeer
      const t = (BONUS_DUUR - bonusFrames);
      for (let i = 0; i < 40; i++) {
        const sx = ((i * 37 + t * 0.5) % W);
        const sy = ((i * 73) % H);
        const tw = 0.3 + Math.sin(t * 0.05 + i) * 0.3;
        ctx.fillStyle = `rgba(180, 120, 255, ${tw * 0.6})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      // INTRO-overlay: "BONUS LEVEL" 2 sec lang
      if (bonusIntroFrames > 0) {
        const t2 = bonusIntroFrames / BONUS_INTRO_DUUR; // 1 -> 0
        const fadeIn = Math.min(1, (1 - t2) * 4);       // snelle fade-in
        const fadeOut = Math.min(1, t2 * 5);            // fade-out aan einde
        const alpha = Math.min(fadeIn, fadeOut);
        const scale = 1 + Math.sin((1 - t2) * Math.PI) * 0.15;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(W / 2, H / 2);
        ctx.scale(scale, scale);
        ctx.shadowBlur = 30;
        ctx.shadowColor = "#ffd700";
        ctx.fillStyle = "#ffd700";
        ctx.font = `bold ${64 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("BONUS LEVEL", 0, -20 * SCHAAL);
        // sub-tekst
        ctx.shadowBlur = 16;
        ctx.shadowColor = "#fff8a0";
        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${22 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.fillText("KLIK = SCHIETEN + SPRINGEN", 0, 32 * SCHAAL);
        ctx.font = `${16 * SCHAAL}px 'Nunito', sans-serif`;
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.fillText("raak alle ringen — +5 punten elk!", 0, 60 * SCHAAL);
        ctx.restore();
        ctx.restore();
        return; // skip ringen/lasers/UI tijdens intro
      }
      // bonus-ringen
      for (const r of bonusRingen) {
        if (r.opgepakt) continue;
        const pulse = 0.85 + Math.sin(r.fase * 2) * 0.15;
        ctx.save();
        ctx.translate(r.x, r.y);
        ctx.scale(pulse, 1);
        ctx.shadowBlur = 26;
        ctx.shadowColor = "#fff8a0";
        ctx.strokeStyle = "rgba(255, 248, 160, 0.6)";
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(0, 0, r.grootte * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 30;
        ctx.shadowColor = "#ffd700";
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, r.grootte * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(255,255,200,0.85)";
        ctx.beginPath();
        ctx.arc(-r.grootte * 0.18, -r.grootte * 0.18, r.grootte * 0.10, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      // lasers
      for (const l of spelerLasers) {
        ctx.shadowBlur = 16;
        ctx.shadowColor = "#69f0ae";
        ctx.strokeStyle = "#69f0ae";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(l.x - 14, l.y);
        ctx.lineTo(l.x + 4, l.y);
        ctx.stroke();
      }
      // tijd-balk + tekst bovenin
      const balkX = W * 0.2;
      const balkY = 18;
      const balkW = W * 0.6;
      const balkH = 10 * SCHAAL;
      const fractie = bonusFrames / BONUS_DUUR;
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(balkX - 2, balkY - 2, balkW + 4, balkH + 4);
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#ffd700";
      ctx.fillStyle = "#ffd700";
      ctx.fillRect(balkX, balkY, balkW * fractie, balkH);
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#fff";
      ctx.font = `bold ${20 * SCHAAL}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.shadowBlur = 14;
      ctx.shadowColor = "#ffd700";
      ctx.fillText(`🎯 BONUS! +${bonusScore}  ·  RAAK OF SCHIET RINGEN!`, W / 2, balkY + balkH + 6);
      ctx.restore();
    }
    function tekenBonusEindFlash() {
      if (bonusEindFlash <= 0) return;
      ctx.save();
      const fade = bonusEindFlash / 110;
      ctx.fillStyle = `rgba(255, 215, 0, ${0.18 * fade})`;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = `rgba(255, 255, 255, ${fade})`;
      ctx.font = `bold ${42 * SCHAAL}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowBlur = 24;
      ctx.shadowColor = "#ffd700";
      ctx.fillText(`BONUS SCORE BEHAALD: ${bonusScore}`, W / 2, H / 2);
      ctx.restore();
    }
    function tekenSchatkist(s) {
      ctx.save();
      const x = s.x;
      const y = s.y + Math.sin(s.fase) * 3;
      const b = s.breedte;
      const h = s.hoogte;

      // Pulserend gouden aura — duidelijke "pakken!"-signaal
      const pulse = 0.6 + Math.sin(s.fase * 1.5) * 0.3;
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(255, 215, 0, ${pulse * 0.20})`;
      ctx.beginPath();
      ctx.ellipse(x + b / 2, y + h / 2, b * 1.0, h * 1.1, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(255, 215, 0, ${pulse * 0.35})`;
      ctx.beginPath();
      ctx.ellipse(x + b / 2, y + h / 2, b * 0.75, h * 0.85, 0, 0, Math.PI * 2);
      ctx.fill();

      // Schatkist body (bruin met houtnerf)
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#ffd700";
      const bodyGrad = ctx.createLinearGradient(x, y + h * 0.4, x, y + h);
      bodyGrad.addColorStop(0, "#a86028");
      bodyGrad.addColorStop(1, "#5a3010");
      ctx.fillStyle = bodyGrad;
      ctx.fillRect(x, y + h * 0.4, b, h * 0.6);
      ctx.shadowBlur = 0;
      // Houtnerf
      ctx.strokeStyle = "rgba(60, 30, 10, 0.6)";
      ctx.lineWidth = 1 * SCHAAL;
      for (let i = 1; i < 3; i++) {
        const yy = y + h * 0.4 + (i / 3) * h * 0.6;
        ctx.beginPath();
        ctx.moveTo(x + 2, yy);
        ctx.lineTo(x + b - 2, yy);
        ctx.stroke();
      }

      // Deksel (bovenkant, gewelfd)
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#ffd700";
      ctx.fillStyle = "#8a4818";
      ctx.beginPath();
      ctx.moveTo(x, y + h * 0.45);
      ctx.lineTo(x, y + h * 0.25);
      ctx.quadraticCurveTo(x + b / 2, y - h * 0.05, x + b, y + h * 0.25);
      ctx.lineTo(x + b, y + h * 0.45);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;

      // Gouden banden (twee horizontale strips)
      ctx.fillStyle = "#ffd700";
      ctx.fillRect(x, y + h * 0.45, b, 4 * SCHAAL);
      ctx.fillRect(x, y + h * 0.78, b, 3 * SCHAAL);
      // Donkere randen voor diepte
      ctx.fillStyle = "rgba(120, 80, 0, 0.6)";
      ctx.fillRect(x, y + h * 0.45 + 4 * SCHAAL, b, 1.5 * SCHAAL);

      // Slot — gouden cirkel met sleutelgat
      const slotCx = x + b / 2;
      const slotCy = y + h * 0.62;
      const slotR = h * 0.13;
      ctx.fillStyle = "#ffd700";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#fff8a0";
      ctx.beginPath();
      ctx.arc(slotCx, slotCy, slotR, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#5a3010";
      ctx.beginPath();
      ctx.arc(slotCx, slotCy - slotR * 0.15, slotR * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(slotCx - 1, slotCy - slotR * 0.15, 2, slotR * 0.6);

      // Sparkle-sterretjes om de schatkist (3 stuks die roteren)
      for (let i = 0; i < 3; i++) {
        const a = s.fase * 0.7 + i * (Math.PI * 2 / 3);
        const sx = x + b / 2 + Math.cos(a) * b * 0.7;
        const sy = y + h / 2 + Math.sin(a) * h * 0.9;
        const sz = 2 + Math.sin(s.fase * 2 + i) * 1;
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#fff8a0";
        ctx.beginPath();
        ctx.arc(sx, sy, sz * SCHAAL, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    function tekenVis(v) {
      ctx.save();
      ctx.translate(v.x, v.y);
      const gr = v.grootte;
      // Pickup-look: pulserend wit aura zodat duidelijk is "pakken!"
      const pulse = 0.55 + Math.sin(frameTeller * 0.18 + v.fase) * 0.25;
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(255, 255, 255, ${pulse * 0.18})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, gr * 1.7, gr * 1.0, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(255, 255, 255, ${pulse * 0.30})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, gr * 1.35, gr * 0.78, 0, 0, Math.PI * 2);
      ctx.fill();

      // Sterke glow zodat vis duidelijk afsteekt tegen donkere dungeon
      ctx.shadowBlur = 22;
      ctx.shadowColor = v.kleur;

      // Body — ovaal in volle kleur (geen wit-blend meer — verloor te veel kleur)
      ctx.fillStyle = v.kleur;
      ctx.beginPath();
      ctx.ellipse(0, 0, gr, gr * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      // Lichte highlight bovenop voor 3D-effect
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.beginPath();
      ctx.ellipse(-gr * 0.1, -gr * 0.2, gr * 0.55, gr * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();
      // Stevige donker outline voor max contrast
      ctx.strokeStyle = "#0a1830";
      ctx.lineWidth = 2.5 * SCHAAL;
      ctx.beginPath();
      ctx.ellipse(0, 0, gr, gr * 0.55, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Staart — driehoek die met fase wiebelt voor leven
      const swish = Math.sin(v.fase) * 4 * SCHAAL;
      ctx.shadowBlur = 16;
      ctx.shadowColor = v.kleur;
      ctx.fillStyle = v.kleur;
      ctx.beginPath();
      ctx.moveTo(gr * 0.85, 0);
      ctx.lineTo(gr * 1.6, -gr * 0.55 + swish);
      ctx.lineTo(gr * 1.6, gr * 0.55 + swish);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "#0a1830";
      ctx.lineWidth = 2 * SCHAAL;
      ctx.stroke();

      // Oog — wit met zwart pupil, opvallend
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(-gr * 0.55, -gr * 0.15, gr * 0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#0a1830";
      ctx.lineWidth = 1 * SCHAAL;
      ctx.stroke();
      ctx.fillStyle = "#0a1830";
      ctx.beginPath();
      ctx.arc(-gr * 0.6, -gr * 0.15, gr * 0.10, 0, Math.PI * 2);
      ctx.fill();

      // Vrolijke mond
      ctx.strokeStyle = "#0a1830";
      ctx.lineWidth = 1.5 * SCHAAL;
      ctx.beginPath();
      ctx.arc(-gr * 0.7, gr * 0.15, gr * 0.18, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();

      ctx.restore();
    }
    function tekenPortal(p) {
      // Hell-portaal: rood-oranje, ruwer en dreigender. Dungeon: paars-swirl.
      const isHell = p.type === "hell";
      ctx.save();
      const cx = p.x;
      const cy = p.y;
      const r = p.grootte / 2;
      if (isHell) {
        ctx.shadowBlur = 28;
        ctx.shadowColor = "#ff3020";
        // buitenste vlam-ring
        ctx.strokeStyle = "rgba(255, 80, 30, 0.9)";
        ctx.lineWidth = 5 * SCHAAL;
        ctx.beginPath();
        ctx.arc(cx, cy, r, p.fase, p.fase + Math.PI * 1.6);
        ctx.stroke();
        // middelste hete ring
        ctx.strokeStyle = "rgba(255, 200, 80, 0.85)";
        ctx.lineWidth = 3.5 * SCHAAL;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.65, -p.fase * 1.4, -p.fase * 1.4 + Math.PI * 1.6);
        ctx.stroke();
        // centrum-glow
        ctx.shadowBlur = 0;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.45);
        grad.addColorStop(0, "rgba(255, 240, 180, 0.95)");
        grad.addColorStop(0.6, "rgba(255, 100, 30, 0.6)");
        grad.addColorStop(1, "rgba(120, 20, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.shadowBlur = 22;
        ctx.shadowColor = "#a040ff";
        ctx.strokeStyle = "rgba(160, 64, 255, 0.85)";
        ctx.lineWidth = 4 * SCHAAL;
        ctx.beginPath();
        ctx.arc(cx, cy, r, p.fase, p.fase + Math.PI * 1.7);
        ctx.stroke();
        ctx.strokeStyle = "rgba(220, 140, 255, 0.75)";
        ctx.lineWidth = 3 * SCHAAL;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.65, -p.fase * 1.3, -p.fase * 1.3 + Math.PI * 1.7);
        ctx.stroke();
        ctx.shadowBlur = 0;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.4);
        grad.addColorStop(0, "rgba(255, 200, 255, 0.85)");
        grad.addColorStop(1, "rgba(120, 40, 200, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    function tekenLavaGrond() {
      // Geometry-Dash-stijl lava: bright orange-yellow body + zigzag-tanden boven.
      const grondTop = GROND_Y + SPELER_GROOTTE;
      const grad = ctx.createLinearGradient(0, grondTop - 6 * SCHAAL, 0, H);
      grad.addColorStop(0, "#ffe060");
      grad.addColorStop(0.3, "#ffaa20");
      grad.addColorStop(0.7, "#ff5010");
      grad.addColorStop(1, "#7a0408");
      ctx.fillStyle = grad;
      ctx.fillRect(0, grondTop, W, H - grondTop);
      // Zigzag-tanden bovenop de lava (vlammen die naar boven happen)
      ctx.save();
      ctx.shadowBlur = 22;
      ctx.shadowColor = "#ffaa30";
      ctx.fillStyle = "#ffd040";
      const offset = (frameTeller * 1.4) % 28;
      const tandB = 14 * SCHAAL;
      const tandH = 9 * SCHAAL;
      ctx.beginPath();
      ctx.moveTo(-30, grondTop);
      for (let x = -30 + offset; x < W + 30; x += tandB) {
        ctx.lineTo(x + tandB / 2, grondTop - tandH);
        ctx.lineTo(x + tandB, grondTop);
      }
      ctx.lineTo(W + 30, H);
      ctx.lineTo(-30, H);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      // Donkere rotsige onderlaag onder de lava (suggestie van bodem)
      ctx.save();
      ctx.fillStyle = "rgba(60, 4, 8, 0.85)";
      ctx.fillRect(0, H - 16 * SCHAAL, W, 16 * SCHAAL);
      // randstreepjes (faceted rock onderaan)
      ctx.fillStyle = "rgba(30, 0, 4, 0.95)";
      for (let x = 0; x < W; x += 18 * SCHAAL) {
        const off = (Math.floor(x * 0.13)) % 4;
        ctx.beginPath();
        ctx.moveTo(x, H);
        ctx.lineTo(x + 9 * SCHAAL + off, H - 12 * SCHAAL);
        ctx.lineTo(x + 18 * SCHAAL, H);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }
    function tekenHellAchtergrond() {
      // Geometry-Dash hell-look: paars/magenta gradient + cartoon-wolken +
      // parallax cliffs achterin + spike-towers + hangende toorts-icoontjes.
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, "#3a1452");
      bg.addColorStop(0.55, "#5a1a6a");
      bg.addColorStop(1, "#7a1830");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Achterste cliff-laag (heel donker paars, langzame parallax)
      ctx.save();
      ctx.fillStyle = "rgba(30, 8, 50, 0.9)";
      const farOff = (frameTeller * 0.25) % 240;
      for (let i = -1; i < Math.ceil(W / 240) + 1; i++) {
        const bx = i * 240 - farOff;
        ctx.beginPath();
        ctx.moveTo(bx, H);
        ctx.lineTo(bx + 30, H * 0.55);
        ctx.lineTo(bx + 80, H * 0.42);
        ctx.lineTo(bx + 130, H * 0.58);
        ctx.lineTo(bx + 180, H * 0.45);
        ctx.lineTo(bx + 220, H * 0.55);
        ctx.lineTo(bx + 240, H);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // Cartoon-wolken (parallax langzaam)
      ctx.save();
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "rgba(0,0,0,0.4)";
      ctx.lineWidth = 2;
      const wolkenOff = (frameTeller * 0.6) % 320;
      const wolkPunten = [
        { x: 40, y: H * 0.18, r: 22 },
        { x: 180, y: H * 0.12, r: 28 },
        { x: 380, y: H * 0.22, r: 24 },
        { x: 560, y: H * 0.15, r: 30 },
      ];
      for (let lap = -1; lap < Math.ceil(W / 320) + 1; lap++) {
        for (const wp of wolkPunten) {
          const cx = wp.x + lap * 320 - wolkenOff;
          if (cx < -60 || cx > W + 60) continue;
          // 3-4 ronde bobbels tegen elkaar voor cartoon-cloud
          ctx.beginPath();
          ctx.arc(cx, wp.y, wp.r, 0, Math.PI * 2);
          ctx.arc(cx + wp.r * 0.7, wp.y - wp.r * 0.2, wp.r * 0.85, 0, Math.PI * 2);
          ctx.arc(cx + wp.r * 1.4, wp.y, wp.r * 0.9, 0, Math.PI * 2);
          ctx.arc(cx + wp.r * 0.6, wp.y + wp.r * 0.2, wp.r * 0.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
      ctx.restore();

      // Spike-towers — vertikale rode pilaren met groen-gele spikes (parallax sneller)
      ctx.save();
      const towerOff = (frameTeller * 0.9) % 360;
      const towerPosities = [80, 220, 470, 640]; // x-baseline binnen 360-cycle
      for (let lap = -1; lap < Math.ceil(W / 360) + 1; lap++) {
        for (const tx0 of towerPosities) {
          const tx = tx0 + lap * 360 - towerOff;
          if (tx < -60 || tx > W + 80) continue;
          tekenSpikeTower(tx, H * 0.55);
        }
      }
      ctx.restore();

      // Lava-glow van onderaf
      ctx.save();
      const lavaGlow = ctx.createLinearGradient(0, H * 0.6, 0, H);
      lavaGlow.addColorStop(0, "rgba(255, 100, 30, 0)");
      lavaGlow.addColorStop(1, "rgba(255, 160, 60, 0.45)");
      ctx.fillStyle = lavaGlow;
      ctx.fillRect(0, H * 0.6, W, H * 0.4);
      ctx.restore();
    }
    // ── OBLIVION-PULSE renderers ──
    function tekenRuimteAchtergrond() {
      // Diepzwarte gradient → paars-blauw onderaan, sterren, planeten parallax
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, "#000005");
      bg.addColorStop(0.6, "#080014");
      bg.addColorStop(1, "#180428");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      // sterren — twinkelen + langzaam horizontaal scrollen
      const sterOff = (frameTeller * 0.3) % W;
      ctx.save();
      for (const s of ruimteSterren) {
        const sx = (s.x - sterOff * s.snel + W * 2) % W;
        const tw = 0.6 + Math.sin(frameTeller * 0.05 + s.x) * 0.4;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.helderheid * tw})`;
        ctx.beginPath();
        ctx.arc(sx, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      // planeten als achtergrondcirkels (4 vaste posities, parallax)
      const planetOff = (frameTeller * 0.5) % 600;
      const planeten = [
        { x: 100, y: H * 0.18, r: 38, c1: "#ff8050", c2: "#a02010" },
        { x: 380, y: H * 0.30, r: 22, c1: "#80c0ff", c2: "#2050a0" },
        { x: 600, y: H * 0.12, r: 30, c1: "#a0ff90", c2: "#208040" },
        { x: 850, y: H * 0.22, r: 26, c1: "#ffd060", c2: "#a06010" },
      ];
      ctx.save();
      for (let lap = -1; lap < 3; lap++) {
        for (const pl of planeten) {
          const px = pl.x + lap * 600 - planetOff;
          if (px < -60 || px > W + 60) continue;
          ctx.shadowBlur = 20;
          ctx.shadowColor = pl.c1;
          const grad = ctx.createRadialGradient(px - pl.r * 0.3, pl.y - pl.r * 0.3, 1, px, pl.y, pl.r);
          grad.addColorStop(0, pl.c1);
          grad.addColorStop(1, pl.c2);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, pl.y, pl.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
      // metallic vloer (donkergrijs met paarse stripes)
      const grondTop = GROND_Y + SPELER_GROOTTE;
      const vloerGrad = ctx.createLinearGradient(0, grondTop, 0, H);
      vloerGrad.addColorStop(0, "#2a1a3a");
      vloerGrad.addColorStop(0.5, "#1a0a28");
      vloerGrad.addColorStop(1, "#08000a");
      ctx.fillStyle = vloerGrad;
      ctx.fillRect(0, grondTop, W, H - grondTop);
      // bovenrand vloer: lila glow-streep
      ctx.save();
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#a040ff";
      ctx.fillStyle = "rgba(180, 80, 240, 0.85)";
      ctx.fillRect(0, grondTop, W, 2);
      ctx.restore();
      // panelen-streepjes op de vloer
      ctx.fillStyle = "rgba(140, 60, 220, 0.20)";
      const paneelOff = (frameTeller * 4) % 60;
      for (let x = -60 + paneelOff; x < W; x += 60) {
        ctx.fillRect(x, grondTop + 4, 1, H - grondTop - 4);
      }
    }
    function tekenCutscene() {
      if (cutsceneFase === "geen") return;
      const cx = W / 2;
      const cy = H / 2;
      ctx.save();
      // PORTAL FASE — radiale swirl die naar binnen zoomt
      if (cutsceneFase === "portal") {
        const t = cutsceneFrames / CUTSCENE_PORTAL_DUUR; // 0 → 1
        // donker oppervlak
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(0, 0, W, H);
        // groeiend portaal
        const r = 50 + t * Math.max(W, H) * 0.6;
        ctx.shadowBlur = 40;
        ctx.shadowColor = "#a040ff";
        // 3 ringen draaien
        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = `rgba(${180 + i * 20}, ${60 + i * 30}, ${220 + i * 10}, ${0.85 - i * 0.15})`;
          ctx.lineWidth = (5 - i) * SCHAAL;
          ctx.beginPath();
          ctx.arc(cx, cy, r * (1 - i * 0.15), frameTeller * 0.05 * (i + 1), frameTeller * 0.05 * (i + 1) + Math.PI * 1.7);
          ctx.stroke();
        }
        // helder centrum (warm wit met paars rand)
        const centerR = r * 0.4;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, centerR);
        grad.addColorStop(0, "rgba(255, 240, 255, 1)");
        grad.addColorStop(0.5, "rgba(220, 140, 255, 0.85)");
        grad.addColorStop(1, "rgba(120, 40, 200, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, centerR, 0, Math.PI * 2);
        ctx.fill();
      }
      // WARP FASE — strepen van centrum schieten naar buiten (hyperspace)
      else if (cutsceneFase === "warp") {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H);
        // donkere paarse glow op achtergrond
        const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(W, H));
        bgGrad.addColorStop(0, "rgba(80, 30, 140, 0.5)");
        bgGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);
        // strepen (sterren-streaks)
        for (const s of warpStrepen) {
          const x1 = cx + Math.cos(s.angle) * s.dist;
          const y1 = cy + Math.sin(s.angle) * s.dist;
          const x2 = cx + Math.cos(s.angle) * (s.dist + s.len);
          const y2 = cy + Math.sin(s.angle) * (s.dist + s.len);
          ctx.shadowBlur = 12;
          ctx.shadowColor = s.kleur;
          ctx.strokeStyle = s.kleur;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
      // BLACK HOLE FASE — alles spiraalt naar het centrum, donker zwart gat groeit
      else if (cutsceneFase === "blackhole") {
        const t = cutsceneFrames / CUTSCENE_BLACKHOLE_DUUR;
        // achtergrond donker paars
        ctx.fillStyle = "#08000c";
        ctx.fillRect(0, 0, W, H);
        // spiralerende warp-strepen die naar binnen worden gezogen
        for (const s of warpStrepen) {
          s.dist = Math.max(0, s.dist - 6);
          s.angle += 0.05;
          if (s.dist > 5) {
            const x1 = cx + Math.cos(s.angle) * s.dist;
            const y1 = cy + Math.sin(s.angle) * s.dist;
            const x2 = cx + Math.cos(s.angle) * (s.dist + s.len * 0.7);
            const y2 = cy + Math.sin(s.angle) * (s.dist + s.len * 0.7);
            ctx.strokeStyle = s.kleur;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
        // accretion-disc (groeit + roteert)
        const discR = 50 + t * Math.min(W, H) * 0.45;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(frameTeller * 0.06);
        const disc = ctx.createRadialGradient(0, 0, discR * 0.3, 0, 0, discR);
        disc.addColorStop(0, "rgba(255, 200, 80, 0)");
        disc.addColorStop(0.4, "rgba(255, 130, 40, 0.85)");
        disc.addColorStop(0.85, "rgba(180, 60, 220, 0.7)");
        disc.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = disc;
        ctx.beginPath();
        ctx.ellipse(0, 0, discR, discR * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // event-horizon (zwart gat) groeit
        const ehR = 30 + t * Math.min(W, H) * 0.35;
        ctx.shadowBlur = 30;
        ctx.shadowColor = "#a040ff";
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(cx, cy, ehR, 0, Math.PI * 2);
        ctx.fill();
        // randje paars gloed
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(180, 80, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, ehR, 0, Math.PI * 2);
        ctx.stroke();
        // tekst "OBLIVION PULSE" verschijnt
        if (t > 0.5) {
          ctx.fillStyle = `rgba(255, 200, 255, ${(t - 0.5) * 2})`;
          ctx.font = `bold ${28 * SCHAAL}px Impact, Arial Black, sans-serif`;
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.shadowBlur = 22; ctx.shadowColor = "#a040ff";
          ctx.fillText("OBLIVION PULSE", cx, cy + ehR + 36 * SCHAAL);
        }
      }
      // SETTLE FASE — fade in naar Oblivion-niveau
      else if (cutsceneFase === "settle") {
        const t = 1 - cutsceneFrames / CUTSCENE_SETTLE_DUUR; // 1 → 0
        tekenRuimteAchtergrond();
        // dark veil dat oplost
        ctx.fillStyle = `rgba(0,0,0,${t})`;
        ctx.fillRect(0, 0, W, H);
      }
      ctx.restore();
    }
    function tekenSpikeTower(x, topY) {
      // Vertikale rode rotspilaar met groen-gele spikes aan de randen
      const grondTop = GROND_Y + SPELER_GROOTTE;
      const tHoogte = grondTop - topY;
      const tBreedte = 36 * SCHAAL;
      ctx.save();
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#ff3060";
      // body — rode rocky pilaar
      const grad = ctx.createLinearGradient(x, topY, x + tBreedte, topY);
      grad.addColorStop(0, "#5a0c1c");
      grad.addColorStop(0.5, "#8a1830");
      grad.addColorStop(1, "#3a0410");
      ctx.fillStyle = grad;
      ctx.fillRect(x, topY, tBreedte, tHoogte);
      // faceted rock-pattern — een paar driehoekjes voor 3D-feel
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 80, 110, 0.25)";
      for (let dy = 8 * SCHAAL; dy < tHoogte - 8; dy += 22 * SCHAAL) {
        ctx.beginPath();
        ctx.moveTo(x + 4, topY + dy);
        ctx.lineTo(x + tBreedte * 0.5, topY + dy + 6 * SCHAAL);
        ctx.lineTo(x + tBreedte - 4, topY + dy);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      for (let dy = 18 * SCHAAL; dy < tHoogte - 8; dy += 22 * SCHAAL) {
        ctx.beginPath();
        ctx.moveTo(x + 4, topY + dy);
        ctx.lineTo(x + tBreedte * 0.5, topY + dy + 6 * SCHAAL);
        ctx.lineTo(x + tBreedte - 4, topY + dy);
        ctx.closePath();
        ctx.fill();
      }
      // spikes aan de zijkanten (groen-geel, naar buiten wijzend)
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#a0e040";
      ctx.fillStyle = "#c0f060";
      const spikeStap = 16 * SCHAAL;
      for (let dy = 6 * SCHAAL; dy < tHoogte; dy += spikeStap) {
        // links naar buiten
        ctx.beginPath();
        ctx.moveTo(x, topY + dy);
        ctx.lineTo(x - 8 * SCHAAL, topY + dy + spikeStap / 2);
        ctx.lineTo(x, topY + dy + spikeStap);
        ctx.closePath();
        ctx.fill();
        // rechts naar buiten
        ctx.beginPath();
        ctx.moveTo(x + tBreedte, topY + dy);
        ctx.lineTo(x + tBreedte + 8 * SCHAAL, topY + dy + spikeStap / 2);
        ctx.lineTo(x + tBreedte, topY + dy + spikeStap);
        ctx.closePath();
        ctx.fill();
      }
      // top-spike (driehoekje bovenop, ook groen)
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x + tBreedte / 2, topY - 18 * SCHAAL);
      ctx.lineTo(x + tBreedte, topY);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    function tekenVonken() {
      ctx.save();
      for (const v of vonken) {
        const alpha = Math.min(1, v.leven / 30);
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 14;
        ctx.shadowColor = v.kleur;
        ctx.fillStyle = v.kleur;
        ctx.beginPath();
        ctx.arc(v.x, v.y, v.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    function tekenHellPlatform(p) {
      // Geometry-Dash-stijl: groen-gras top + chunky rocky pilaar tot lava-niveau.
      // Collision-platform is alleen de bovenste PLATFORM_HOOGTE pixels — de rest
      // is puur visueel (rotspilaar onder die naar lava scrollt).
      const grondTop = GROND_Y + SPELER_GROOTTE;
      const collisionH = PLATFORM_HOOGTE;
      const pilaarBot = grondTop - 2 * SCHAAL;       // pilaar stopt vlak boven lava
      const pilaarH = Math.max(collisionH, pilaarBot - p.y);
      const grasH = 6 * SCHAAL;
      ctx.save();
      // ─── Pilaar-body: rode gefaceteerde rotsen ───
      // Driedimensionale-look via diagonale facet-stripes met sterke
      // licht/donker-contrast en horizontale top-naar-onder donker-fade.
      ctx.shadowBlur = 16;
      ctx.shadowColor = "#ff3060";
      // base-fill: verticale gradient (top licht, bodem donker) voor diepte
      const baseGrad = ctx.createLinearGradient(p.x, p.y + grasH, p.x, p.y + pilaarH);
      baseGrad.addColorStop(0, "#a02038");
      baseGrad.addColorStop(0.4, "#7a1828");
      baseGrad.addColorStop(1, "#1a0408");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(p.x, p.y + grasH, p.breedte, pilaarH - grasH);
      // Linker-zijde licht, rechter-zijde donker — geeft cylindrische depth
      const sideShade = ctx.createLinearGradient(p.x, p.y, p.x + p.breedte, p.y);
      sideShade.addColorStop(0, "rgba(255, 120, 140, 0.18)");
      sideShade.addColorStop(0.5, "rgba(255, 80, 110, 0.04)");
      sideShade.addColorStop(1, "rgba(0, 0, 0, 0.35)");
      ctx.fillStyle = sideShade;
      ctx.fillRect(p.x, p.y + grasH, p.breedte, pilaarH - grasH);

      // Diepe rotspatronen: scherpe diagonale facetten als chiseled stenen
      ctx.shadowBlur = 0;
      const facetW = 22 * SCHAAL;
      const facetH = 16 * SCHAAL;
      const stenen = []; // verzamel posities zodat we eerst body, dan rand kunnen tekenen
      for (let row = 0; row < 8; row++) {
        const ry = p.y + grasH + 4 + row * (facetH * 0.6);
        if (ry > pilaarBot - 4) break;
        const rowOff = (row % 2) * (facetW / 2);
        for (let dx = -facetW; dx < p.breedte + facetW; dx += facetW) {
          stenen.push({ x: p.x + dx + rowOff, y: ry, row });
        }
      }
      // Steen-lichaam: lichte top, donkere bodem (3D shading per steen)
      for (const s of stenen) {
        // light-side van steen (boven-links → bovenkant van trapezium)
        ctx.fillStyle = s.row % 2 === 0 ? "rgba(255, 110, 140, 0.55)" : "rgba(220, 70, 100, 0.50)";
        ctx.beginPath();
        ctx.moveTo(s.x + 2, s.y);
        ctx.lineTo(s.x + facetW * 0.5, s.y + facetH * 0.4);
        ctx.lineTo(s.x + facetW - 2, s.y);
        ctx.lineTo(s.x + facetW * 0.85, s.y - 2);
        ctx.lineTo(s.x + facetW * 0.15, s.y - 2);
        ctx.closePath();
        ctx.fill();
        // dark-side van steen (onder-rechts schaduw)
        ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
        ctx.beginPath();
        ctx.moveTo(s.x + facetW * 0.5, s.y + facetH * 0.4);
        ctx.lineTo(s.x + facetW - 2, s.y);
        ctx.lineTo(s.x + facetW + 2, s.y + facetH * 0.6);
        ctx.lineTo(s.x + facetW * 0.5, s.y + facetH * 0.85);
        ctx.closePath();
        ctx.fill();
        // donkere crevice-lijn onder elke steen
        ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
        ctx.fillRect(s.x, s.y + facetH * 0.55, facetW, 1.5);
      }

      // top-edge: bright pink neon strepen voor 3D-feel (trekken aandacht)
      ctx.shadowBlur = 14;
      ctx.shadowColor = "#ff80a0";
      ctx.fillStyle = "rgba(255, 130, 170, 0.9)";
      ctx.fillRect(p.x, p.y + grasH, p.breedte, 2 * SCHAAL);
      // links/rechts neon outline
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#ff3060";
      ctx.strokeStyle = "#ff5080";
      ctx.lineWidth = 1.6;
      ctx.strokeRect(p.x + 0.5, p.y + 0.5, p.breedte - 1, pilaarH - 1);

      // ─── Groene gras-top met blade-silhouetten ───
      ctx.shadowBlur = 14;
      ctx.shadowColor = "#a0f060";
      const grasGrad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + grasH);
      grasGrad.addColorStop(0, "#b0ff70");
      grasGrad.addColorStop(0.6, "#60a030");
      grasGrad.addColorStop(1, "#2a5010");
      ctx.fillStyle = grasGrad;
      ctx.fillRect(p.x, p.y, p.breedte, grasH);
      // top-highlight stripje (cyaan-wit, hint van zon)
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 255, 220, 0.65)";
      ctx.fillRect(p.x + 2, p.y + 1, p.breedte - 4, 1);
      // grasspriet-driehoekjes bovenop (zigzag-rand)
      ctx.fillStyle = "#c0ff70";
      const sprietB = 8 * SCHAAL;
      for (let dx = 0; dx < p.breedte; dx += sprietB) {
        const h = 4 * SCHAAL + ((Math.floor((p.x + dx) * 0.13)) % 3) * SCHAAL;
        ctx.beginPath();
        ctx.moveTo(p.x + dx, p.y);
        ctx.lineTo(p.x + dx + sprietB / 2, p.y - h);
        ctx.lineTo(p.x + dx + sprietB, p.y);
        ctx.closePath();
        ctx.fill();
      }
      // dunne donkere lijn onder gras (scheiding gras/rots)
      ctx.fillStyle = "rgba(0, 30, 0, 0.6)";
      ctx.fillRect(p.x, p.y + grasH - 1, p.breedte, 1);
      ctx.restore();
    }
    function tekenDungeonOverlay() {
      if (!dungeonMode && dungeonFadeOut === 0) return;
      ctx.save();
      const waterY = H - 70 * SCHAAL;
      const waveOff = frameTeller * 1.2;

      // 1. Lichte blauw-tint over alleen het BOVEN-water gebied (= lucht).
      //    Voorheen 0.62 alpha donker over hele scherm — Mark's klacht
      //    'achtergrond niet helder'. Nu lichter en alleen boven het water,
      //    zodat de water-laag eronder zelf de tint mag bepalen.
      ctx.fillStyle = "rgba(80, 150, 210, 0.30)";
      ctx.fillRect(0, 0, W, waterY + 4 * SCHAAL);

      // 2. Water aan de onderkant — DEKKEND zodat de stenen muur er niet
      //    doorheen schemert. Mark's klacht: 'stenen muur loopt zichtbaar
      //    door het water'. Twee lagen: ondoorzichtige basis + lichtere
      //    glans erbovenop voor diepte.
      ctx.fillStyle = "#0e3c70"; // dekkend diep oceaanblauw
      ctx.beginPath();
      ctx.moveTo(0, waterY + Math.sin(waveOff * 0.04) * 3 * SCHAAL);
      for (let x = 0; x <= W; x += 6) {
        const wy = waterY + Math.sin((x + waveOff) * 0.045) * 4 * SCHAAL
                          + Math.sin((x - waveOff) * 0.06) * 2 * SCHAAL;
        ctx.lineTo(x, wy);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      ctx.fill();
      // Lichtere blauwe glans bovenaan het water (gradient van licht naar dieper)
      const watGrad = ctx.createLinearGradient(0, waterY, 0, H);
      watGrad.addColorStop(0, "rgba(80, 180, 230, 0.55)");
      watGrad.addColorStop(0.5, "rgba(40, 100, 180, 0.20)");
      watGrad.addColorStop(1, "rgba(10, 30, 70, 0)");
      ctx.fillStyle = watGrad;
      ctx.beginPath();
      ctx.moveTo(0, waterY + Math.sin(waveOff * 0.04) * 3 * SCHAAL);
      for (let x = 0; x <= W; x += 6) {
        const wy = waterY + Math.sin((x + waveOff) * 0.045) * 4 * SCHAAL
                          + Math.sin((x - waveOff) * 0.06) * 2 * SCHAAL;
        ctx.lineTo(x, wy);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      ctx.fill();
      // Schuim-streep bovenaan het water
      ctx.strokeStyle = "rgba(230, 240, 255, 0.85)";
      ctx.lineWidth = 2 * SCHAAL;
      ctx.beginPath();
      ctx.moveTo(0, waterY + Math.sin(waveOff * 0.04) * 3 * SCHAAL);
      for (let x = 0; x <= W; x += 6) {
        const wy = waterY + Math.sin((x + waveOff) * 0.045) * 4 * SCHAAL
                          + Math.sin((x - waveOff) * 0.06) * 2 * SCHAAL;
        ctx.lineTo(x, wy);
      }
      ctx.stroke();

      // 3. Zon-stralen door het water, schuin van bovenaf — geeft sfeer +
      //    helderheid (vervangt de doelloze hangende kettingen).
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const baseY = 0;
      for (let i = 0; i < 5; i++) {
        const baseX = (i * 220 + frameTeller * 0.4) % (W + 300) - 100;
        const pulse = 0.18 + Math.sin(frameTeller * 0.025 + i) * 0.06;
        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.lineTo(baseX + 70 * SCHAAL, baseY);
        ctx.lineTo(baseX + 200 * SCHAAL, H);
        ctx.lineTo(baseX + 130 * SCHAAL, H);
        ctx.closePath();
        const sg = ctx.createLinearGradient(baseX, 0, baseX + 100, H);
        sg.addColorStop(0, `rgba(255, 250, 200, ${pulse})`);
        sg.addColorStop(1, "rgba(255, 250, 200, 0)");
        ctx.fillStyle = sg;
        ctx.fill();
      }
      ctx.restore();

      // 4. Zeewier vanaf de bodem — lange wuivende strengen, geeft
      //    dynamiek + onderwater-thema (vervangt kettingen). Vaste posities
      //    voor stabiliteit, hoogtes en kleuren wisselend.
      const zeewierGroepen = [
        { x: W * 0.08, h: 95, kleur: "#1a8a3a" },
        { x: W * 0.22, h: 70, kleur: "#229a44" },
        { x: W * 0.36, h: 55, kleur: "#1a8a3a" },
        { x: W * 0.55, h: 88, kleur: "#16703a" },
        { x: W * 0.72, h: 65, kleur: "#229a44" },
        { x: W * 0.88, h: 100, kleur: "#1a8a3a" },
      ];
      for (let i = 0; i < zeewierGroepen.length; i++) {
        const z = zeewierGroepen[i];
        const len = z.h * SCHAAL;
        const baseXz = z.x;
        const baseYz = H;
        // strepen van 3 dunner wordende strengen per groep
        for (let s = -1; s <= 1; s++) {
          const offsetX = s * 5 * SCHAAL;
          ctx.strokeStyle = z.kleur;
          ctx.lineWidth = (3 - Math.abs(s)) * SCHAAL;
          ctx.lineCap = "round";
          ctx.shadowBlur = 8;
          ctx.shadowColor = z.kleur;
          ctx.beginPath();
          for (let h = 0; h <= len; h += 5 * SCHAAL) {
            const sway = Math.sin(frameTeller * 0.04 + i + h * 0.05) * (h / len) * 8 * SCHAAL;
            const yy = baseYz - h;
            const xx = baseXz + offsetX + sway;
            if (h === 0) ctx.moveTo(xx, yy);
            else ctx.lineTo(xx, yy);
          }
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
        // klein lichter blaadje aan de top
        ctx.fillStyle = "#5acc6a";
        const sway = Math.sin(frameTeller * 0.04 + i + len * 0.05) * 8 * SCHAAL;
        ctx.beginPath();
        ctx.ellipse(baseXz + sway, baseYz - len, 4 * SCHAAL, 8 * SCHAAL, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Bubbels stijgen op vanaf de bodem — extra leven in het water
      if (frameTeller % 8 === 0 && bubbels.length < 30) {
        bubbels.push({
          x: Math.random() * W,
          y: H + 4,
          grootte: (2 + Math.random() * 6) * SCHAAL,
          snelheid: (0.5 + Math.random()) * SCHAAL,
          wiebel: Math.random() * Math.PI * 2,
        });
      }
      for (let bi = bubbels.length - 1; bi >= 0; bi--) {
        const b = bubbels[bi];
        b.y -= b.snelheid;
        b.wiebel += 0.06;
        b.x += Math.sin(b.wiebel) * 0.3;
        if (b.y < waterY - 4) { bubbels.splice(bi, 1); continue; }
        ctx.strokeStyle = "rgba(220, 240, 255, 0.6)";
        ctx.lineWidth = 1.2 * SCHAAL;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.grootte / 2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 6. Lichte vignette — minder donker dan voorheen (0.65 -> 0.40)
      //    zodat het beeld niet zo somber voelt. Mark: 'achtergrond niet
      //    helder'.
      const vGrad = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.4, W / 2, H / 2, Math.max(W, H) * 0.8);
      vGrad.addColorStop(0, "rgba(0,0,0,0)");
      vGrad.addColorStop(1, "rgba(0,0,0,0.40)");
      ctx.fillStyle = vGrad;
      ctx.fillRect(0, 0, W, H);

      // Fade-in/out
      if (dungeonFadeIn > 0) {
        ctx.fillStyle = `rgba(0,0,0,${(dungeonFadeIn / DUNGEON_FADE) * 0.90})`;
        ctx.fillRect(0, 0, W, H);
      }
      if (dungeonFadeOut > 0) {
        ctx.fillStyle = `rgba(0,0,0,${((DUNGEON_FADE - dungeonFadeOut) / DUNGEON_FADE) * 0.90})`;
        ctx.fillRect(0, 0, W, H);
      }
      ctx.restore();
    }
    function tekenOblivionOverlay() {
      if (!oblivionMode && oblivionFadeOut === 0) return;
      ctx.save();
      // tijd-balk + banner
      if (oblivionMode && !oblivionUnlockGedaan) {
        const balkX = W * 0.18;
        const balkY = 38 * SCHAAL;
        const balkW = W * 0.64;
        const balkH = 9 * SCHAAL;
        const fractie = oblivionFrames / OBLIVION_DUUR_VOOR_UNLOCK;
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#a040ff";
        ctx.fillStyle = "rgba(8, 0, 16, 0.8)";
        ctx.fillRect(balkX, balkY, balkW, balkH);
        const fillGrad = ctx.createLinearGradient(balkX, 0, balkX + balkW, 0);
        fillGrad.addColorStop(0, "#6020a0");
        fillGrad.addColorStop(0.5, "#a040ff");
        fillGrad.addColorStop(1, "#ff80a0");
        ctx.fillStyle = fillGrad;
        ctx.fillRect(balkX, balkY, balkW * fractie, balkH);
        ctx.shadowBlur = 24;
        ctx.fillStyle = "#e0a0ff";
        ctx.font = `bold ${20 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const restSec = Math.max(0, Math.ceil((OBLIVION_DUUR_VOOR_UNLOCK - oblivionFrames) / 60));
        ctx.fillText(`🌌 OBLIVION PULSE — ${restSec}s tot Black Hole skin`, W / 2, balkY + balkH + 4);
      }
      // unlock-celebration
      if (oblivionUnlockGedaan) {
        const fade = Math.min(1, oblivionFadeOut / (OBLIVION_FADE * 2));
        ctx.fillStyle = `rgba(160, 60, 220, ${0.18 * fade})`;
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = `rgba(255, 240, 255, ${fade})`;
        ctx.font = `bold ${44 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = 26;
        ctx.shadowColor = "#a040ff";
        ctx.fillText("🌑 BLACK HOLE SKIN", W / 2, H * 0.45);
        ctx.font = `bold ${24 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.fillStyle = `rgba(220, 180, 255, ${fade})`;
        ctx.fillText("ONTGRENDELD!", W / 2, H * 0.55);
      }
      ctx.restore();
    }
    function tekenHellOverlay() {
      if (!hellMode && hellFadeOut === 0) return;
      ctx.save();
      // vonken (opstijgende lava-spats)
      tekenVonken();
      // fade-in: zwart tint dat oplost
      if (hellFadeIn > 0) {
        ctx.fillStyle = `rgba(40, 4, 0, ${(hellFadeIn / HELL_FADE) * 0.95})`;
        ctx.fillRect(0, 0, W, H);
      }
      if (hellFadeOut > 0) {
        ctx.fillStyle = `rgba(40, 4, 0, ${((HELL_FADE - hellFadeOut) / HELL_FADE) * 0.95})`;
        ctx.fillRect(0, 0, W, H);
      }
      // "HELL MODE" banner + tijd-balk bovenaan tijdens actieve mode
      if (hellMode && hellFadeIn === 0 && hellFadeOut === 0) {
        const balkX = W * 0.2;
        const balkY = 38 * SCHAAL;
        const balkW = W * 0.6;
        const balkH = 8 * SCHAAL;
        const fractie = 1 - hellFrames / HELL_DUUR;
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#ff5040";
        ctx.fillStyle = "rgba(20, 0, 0, 0.7)";
        ctx.fillRect(balkX, balkY, balkW, balkH);
        const fillGrad = ctx.createLinearGradient(balkX, 0, balkX + balkW, 0);
        fillGrad.addColorStop(0, "#ff3020");
        fillGrad.addColorStop(1, "#ffa040");
        ctx.fillStyle = fillGrad;
        ctx.fillRect(balkX, balkY, balkW * fractie, balkH);
        ctx.shadowBlur = 22;
        ctx.fillStyle = "#ffe080";
        ctx.font = `bold ${22 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText("🔥 HELL MODE — SPRING! 🔥", W / 2, balkY + balkH + 4);
      }
      ctx.restore();
    }
    function tekenSchans(sc) {
      ctx.save();
      if (sc.type === "loop") {
        // Looping als echte race-baan-loop (Carrera-stijl):
        //   - achterste rail (parallax-shift voor 3D)
        //   - voorste rail met highlight bovenaan
        //   - radiale track-segmenten (rails-detail)
        //   - montage-voetjes onderaan op de grond
        //   - subtiele oranje glow-halo om interactiviteit te signaleren
        // Gat aan de onderkant = entry/exit (hoeken 0.4π t/m 0.6π skip).
        const cx = sc.x + sc.breedte / 2;
        const cy = sc.y + sc.hoogte / 2;
        const rx = sc.breedte / 2;
        const ry = sc.hoogte / 2;
        const startAng = 0.6 * Math.PI;
        const endAng   = 2.4 * Math.PI;

        // 1. Glow-halo (interactief signaal)
        ctx.save();
        ctx.shadowBlur = 22;
        ctx.shadowColor = "#ffaa20";
        ctx.strokeStyle = "rgba(255, 170, 32, 0.40)";
        ctx.lineWidth = 14 * SCHAAL;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, startAng, endAng, false);
        ctx.stroke();
        ctx.restore();

        // 2. Achterste rail (parallax shift naar links-boven voor diepte)
        ctx.strokeStyle = "#15151c";
        ctx.lineWidth = 10 * SCHAAL;
        ctx.beginPath();
        ctx.ellipse(cx - 7 * SCHAAL, cy - 5 * SCHAAL, rx, ry, 0, startAng, endAng, false);
        ctx.stroke();

        // 3. Voorste rail (hoofdloop)
        ctx.strokeStyle = "#2c2c36";
        ctx.lineWidth = 11 * SCHAAL;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, startAng, endAng, false);
        ctx.stroke();

        // 4. Highlight bovenaan voorste rail (metaal-reflectie)
        ctx.strokeStyle = "rgba(180, 180, 200, 0.55)";
        ctx.lineWidth = 2 * SCHAAL;
        ctx.beginPath();
        ctx.ellipse(cx, cy - 2 * SCHAAL, rx + 1 * SCHAAL, ry + 1 * SCHAAL, 0, 1.15 * Math.PI, 1.85 * Math.PI, false);
        ctx.stroke();

        // 5. Track-segmenten (radiale dashes voor rails-detail)
        ctx.strokeStyle = "rgba(110, 110, 125, 0.65)";
        ctx.lineWidth = 1.5 * SCHAAL;
        for (let a = 0.66 * Math.PI; a <= 2.34 * Math.PI; a += Math.PI * 0.10) {
          const x1 = cx + (rx - 5 * SCHAAL) * Math.cos(a);
          const y1 = cy + (ry - 5 * SCHAAL) * Math.sin(a);
          const x2 = cx + (rx + 5 * SCHAAL) * Math.cos(a);
          const y2 = cy + (ry + 5 * SCHAAL) * Math.sin(a);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        // 6. Montage-voetjes onderaan (verbinding met grond)
        const footH = 10 * SCHAAL;
        const footW = 18 * SCHAAL;
        const footY = sc.y + sc.hoogte;
        const lFx = cx + rx * Math.cos(0.6 * Math.PI) - footW / 2;
        const rFx = cx + rx * Math.cos(0.4 * Math.PI) - footW / 2;
        ctx.fillStyle = "#15151c";
        ctx.fillRect(lFx, footY - footH, footW, footH);
        ctx.fillRect(rFx, footY - footH, footW, footH);
        // bovenkant-highlight op voetjes
        ctx.fillStyle = "rgba(140, 140, 160, 0.45)";
        ctx.fillRect(lFx, footY - footH, footW, 2 * SCHAAL);
        ctx.fillRect(rFx, footY - footH, footW, 2 * SCHAAL);
      } else {
        // Schans als skate-ramp: gebogen slope (convex, kicker-stijl) +
        // kort vlak deck bovenop + verticale achterkant. Donker materiaal met
        // panel-lijnen en witte arrow-grafiek. Speler raakt eerst slope-tip
        // (links-onder), 'rolt' over de boog naar de deck.
        const xL = sc.x;                          // linker (slope-tip op grond)
        const yB = sc.y + sc.hoogte;              // grondniveau
        const yT = sc.y;                          // bovenkant (deck-niveau)
        const xR = sc.x + sc.breedte;             // rechter (achterkant)
        // Curve gaat van slope-tip omhoog naar 85% breedte op deck-niveau,
        // dan kort vlak naar volle breedte. Control point boven straight-line
        // = convexe bocht (uitstekend, kicker-vorm).
        const xDeckStart = xL + sc.breedte * 0.85;
        const cpx = xL + sc.breedte * 0.55;
        const cpy = yB - sc.hoogte * 0.92;        // hoog → meer ronding

        // Body fill — donker grijs gradient
        ctx.shadowBlur = 14;
        ctx.shadowColor = "rgba(0,0,0,0.7)";
        const grad = ctx.createLinearGradient(0, yT, 0, yB);
        grad.addColorStop(0, "#3a3a44");
        grad.addColorStop(1, "#1a1a22");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(xL, yB);
        ctx.quadraticCurveTo(cpx, cpy, xDeckStart, yT);
        ctx.lineTo(xR, yT);                       // deck
        ctx.lineTo(xR, yB);                       // achterkant omlaag
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;

        // Slope-rand accent (witte hoogte-lijn over de boog)
        ctx.strokeStyle = "rgba(220, 220, 230, 0.65)";
        ctx.lineWidth = 2 * SCHAAL;
        ctx.beginPath();
        ctx.moveTo(xL, yB);
        ctx.quadraticCurveTo(cpx, cpy, xDeckStart, yT);
        ctx.lineTo(xR, yT);
        ctx.stroke();

        // Panel-lijnen — horizontale segmenten zoals op echte skate-ramp
        ctx.strokeStyle = "rgba(255,255,255,0.10)";
        ctx.lineWidth = 1 * SCHAAL;
        for (let frac = 0.2; frac < 1.0; frac += 0.2) {
          const yPanel = yB - sc.hoogte * frac;
          // Vind x op de curve voor deze hoogte (approximatie via lineair zoeken)
          let xPanel = xL;
          for (let t = 0; t <= 1; t += 0.02) {
            const cy_t = (1 - t) * (1 - t) * yB + 2 * (1 - t) * t * cpy + t * t * yT;
            if (cy_t <= yPanel) {
              const cx_t = (1 - t) * (1 - t) * xL + 2 * (1 - t) * t * cpx + t * t * xDeckStart;
              xPanel = cx_t;
              break;
            }
          }
          ctx.beginPath();
          ctx.moveTo(xPanel, yPanel);
          ctx.lineTo(xR, yPanel);
          ctx.stroke();
        }

        // Witte arrow-grafiek (zoals op de echte ramp) midden op de boog
        ctx.fillStyle = "rgba(220, 230, 240, 0.85)";
        ctx.font = `bold ${Math.floor(sc.hoogte * 0.36)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("↗", xL + sc.breedte * 0.55, yB - sc.hoogte * 0.45);

        // Subtiele groene glow-halo om interactiviteit te signaleren
        ctx.save();
        ctx.shadowBlur = 16;
        ctx.shadowColor = "#69f0ae";
        ctx.strokeStyle = "rgba(105, 240, 174, 0.30)";
        ctx.lineWidth = 3 * SCHAAL;
        ctx.beginPath();
        ctx.moveTo(xL, yB);
        ctx.quadraticCurveTo(cpx, cpy, xDeckStart, yT);
        ctx.lineTo(xR, yT);
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();
    }
    function obstRaakt(o) {
      const s = spelerBots();
      if (o.type === 1) {
        const a1 = { x: o.x, y: o.y, breedte: 24 * SCHAAL, hoogte: o.hoogte };
        const b1 = { x: o.x + 30 * SCHAAL, y: o.y, breedte: 24 * SCHAAL, hoogte: o.hoogte };
        return botst(s, a1) || botst(s, b1);
      }
      return botst(s, { x: o.x, y: o.y, breedte: o.breedte, hoogte: o.hoogte });
    }

    // ---------- INPUT ----------
    function spring() {
      if (!spelLoopt) return;
      if (loopActief) return; // input genegeerd tijdens loop-animatie
      // Tijdens bonus-fase: tap = schieten EN springen tegelijk zodat
      // speler kan rondzweven en hoge ringen kan raken (Mark: 'ik kon
      // er niet jumpen').
      if (bonusFase) {
        spelerSchiet();
        // niet return — laat ook de jump-logica hieronder lopen
      }
      muziekStart();
      // Tijdens boss: tap = jump + laser tegelijk
      if (bossActief) spelerSchiet();
      // ONBEPERKT springen — geen cap meer
      {
        const sprongNr = speler.sprongTeller; // 0 = eerste, 1 = tweede, daarna alle vervolg
        // krachten: 100% / 85% / 75% (75% voor elke verdere sprong)
        const kracht = sprongNr === 0 ? 1 : sprongNr === 1 ? 0.85 : 0.75;
        // tijdens FLIP: omgekeerd (omlaag duiken)
        const richting = flipFrames > 0 ? -1 : 1;
        speler.snelheidY = SPRING_KRACHT * kracht * richting;
        // Lichte voorwaartse zet bij sprong — minder statisch dan puur op-en-neer.
        // Decay komt via update; bal drift terug naar basisX als 'ie weer op de grond is.
        // Cap zodat multi-jumps de bal niet ver buiten beeld duwen.
        const MAX_VOORWAARTS = 70 * SCHAAL;
        if (speler.x < speler.basisX + MAX_VOORWAARTS) {
          speler.snelheidX = Math.max(speler.snelheidX, 2.4 * SCHAAL * kracht);
        }
        speler.springt = true;
        speler.sprongTeller++;
        springGeluid();
        const cx = speler.x + speler.breedte / 2;
        const cy = speler.y + speler.hoogte / 2;
        if (sprongNr === 0) {
          spawnParticles(speler.x + 8 * SCHAAL, speler.y + speler.hoogte, 8, "#ffaa20", { spread: 3, opwaarts: 0, leven: 18, grootte: 4, zwaartekracht: 0.05, glow: 14 });
          spawnParticles(speler.x + 16 * SCHAAL, speler.y + speler.hoogte, 4, "#ffee60", { spread: 2, opwaarts: 0, leven: 14, grootte: 3, zwaartekracht: 0.02, glow: 12 });
        } else if (sprongNr === 1) {
          // tweede sprong: blauwe energie-burst
          spawnParticles(cx, cy, 14, "#40c0ff", { spread: 6, opwaarts: 0, leven: 24, grootte: 4, zwaartekracht: 0.02, krimp: true, glow: 18 });
          spawnParticles(cx, cy, 8, "#ffffff", { spread: 4, opwaarts: 0, leven: 18, grootte: 3, zwaartekracht: 0, krimp: true, glow: 14 });
          piep(660, 0.07, "sine", 0.10);
        } else {
          // derde sprong: paars-roze redding-burst
          spawnParticles(cx, cy, 18, "#c060ff", { spread: 7, opwaarts: 0, leven: 26, grootte: 4, zwaartekracht: 0.02, krimp: true, glow: 20 });
          spawnParticles(cx, cy, 10, "#ff80ff", { spread: 5, opwaarts: 0, leven: 20, grootte: 3, zwaartekracht: 0, krimp: true, glow: 16 });
          piep(880, 0.09, "sine", 0.12);
        }
      }
    }
    // expose spring naar buiten (voor outer pointerdown handler)
    springRef.current = spring;

    const onKey = (e) => {
      if (e.code !== "Space") return;
      if (!spelLoopt) return;
      e.preventDefault();
      spring();
    };
    const onPointer = (e) => {
      if (e.target !== canvas) return;
      e.preventDefault();
      spring();
    };
    window.addEventListener("keydown", onKey);
    canvas.addEventListener("pointerdown", onPointer, { passive: false });

    // Extra blokkades om scroll-gestures te voorkomen tijdens spelen
    const blockTouch = (e) => { e.preventDefault(); };
    canvas.addEventListener("touchstart", blockTouch, { passive: false });
    canvas.addEventListener("touchmove", blockTouch, { passive: false });
    canvas.addEventListener("touchend", blockTouch, { passive: false });
    // body-scroll volledig uit tijdens spel-loop (terugzetten in cleanup)
    const origBodyOverflow = document.body.style.overflow;
    const origBodyTouchAction = document.body.style.touchAction;
    const origHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.documentElement.style.overflow = "hidden";

    // ---------- TRAIL ----------
    function trail() {
      const cx = speler.x + 4 * SCHAAL, cy = speler.y + speler.hoogte / 2;
      if (speler.trailTeller % 2 === 0) {
        particles.push(new Particle(cx + Math.random() * 4 - 2, cy + (Math.random() - 0.5) * 8, Math.random() < 0.5 ? "#ff7820" : "#ffcc40", { spread: 1.2, leven: 18, grootte: 5, zwaartekracht: -0.02, krimp: true, glow: 16 }));
      }
      if (speler.trailTeller % 4 === 0) {
        particles.push(new Particle(cx, cy + (Math.random() - 0.5) * 6, "#ffffaa", { spread: 0.8, leven: 12, grootte: 3, zwaartekracht: 0, krimp: true, glow: 10 }));
      }
      speler.trailTeller++;
    }

    // ---------- LOOP ----------
    function update() {
      if (!spelLoopt) return;
      frameTeller++;
      // Realtime/admin trigger? → start cutscene mid-game
      checkOblivionTrigger();

      // ── CUTSCENE update (Oblivion Pulse intro) ──
      if (cutsceneFase !== "geen") {
        cutsceneFrames++;
        // warp-strepen voortbewegen tijdens warp-fase
        if (cutsceneFase === "warp") {
          if (cutsceneFrames % 2 === 0) {
            // spawn nieuwe streep vanuit centrum
            const angle = Math.random() * Math.PI * 2;
            warpStrepen.push({
              angle,
              dist: 5,
              snel: 4 + Math.random() * 8,
              kleur: Math.random() < 0.7 ? "#ffffff" : (Math.random() < 0.5 ? "#a0d8ff" : "#ffe080"),
              len: 8 + Math.random() * 14,
            });
          }
          for (let i = warpStrepen.length - 1; i >= 0; i--) {
            const s = warpStrepen[i];
            s.dist += s.snel;
            s.snel *= 1.06; // accelerate
            if (s.dist > Math.max(W, H)) warpStrepen.splice(i, 1);
          }
        }
        // fase-transities
        if (cutsceneFase === "portal" && cutsceneFrames >= CUTSCENE_PORTAL_DUUR) {
          cutsceneFase = "warp";
          cutsceneFrames = 0;
          warpStrepen.length = 0;
          shakeKracht = 6;
          piep(140, 0.6, "sawtooth", 0.18);
        } else if (cutsceneFase === "warp" && cutsceneFrames >= CUTSCENE_WARP_DUUR) {
          cutsceneFase = "blackhole";
          cutsceneFrames = 0;
          shakeKracht = 12;
          piep(50, 0.9, "sine", 0.22);
          setTimeout(() => piep(36, 1.0, "sine", 0.18), 200);
        } else if (cutsceneFase === "blackhole" && cutsceneFrames >= CUTSCENE_BLACKHOLE_DUUR) {
          cutsceneFase = "settle";
          cutsceneFrames = 0;
        } else if (cutsceneFase === "settle" && cutsceneFrames >= CUTSCENE_SETTLE_DUUR) {
          cutsceneFase = "geen";
          cutsceneFrames = 0;
          oblivionMode = true;
          oblivionFrames = 0;
          oblivionUnlockGedaan = false;
          // reset speler positie + hp
          speler.y = GROND_Y;
          speler.snelheidY = 0;
          hp = HP_MAX;
          piep(220, 0.30, "triangle", 0.16);
          setTimeout(() => piep(330, 0.25, "triangle", 0.14), 80);
        }
        // Tijdens cutscene gaat de gewone spel-update niet door — alleen
        // particles + frametellers updaten zodat scene "leeft".
        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          if (particles[i].dood) particles.splice(i, 1);
        }
        if (shakeKracht > 0.5) shakeKracht *= 0.94;
        return;
      }

      // ── OBLIVION-MODE update (extreme space-level) ──
      if (oblivionMode) {
        oblivionFrames++;
        // Unlock op 60 sec (eenmalig)
        if (!oblivionUnlockGedaan && oblivionFrames >= OBLIVION_DUUR_VOOR_UNLOCK) {
          oblivionUnlockGedaan = true;
          score += 500;
          // Black Hole skin ontgrendelen via React state-setter
          try {
            setUnlockedSkins((prev) => prev.includes("blackhole") ? prev : [...prev, "blackhole"]);
            setSelectedSkin("blackhole");
          } catch {}
          // grote viering — confetti + ring-flits
          for (let i = 0; i < 40; i++) {
            const k = ["#a040ff", "#ffd54f", "#69f0ae", "#ff80a0"][i % 4];
            spawnParticles(W / 2, H / 2, 3, k, { spread: 14, opwaarts: 5, leven: 70, grootte: 6, glow: 22 });
          }
          piep(660, 0.20, "sine", 0.18);
          setTimeout(() => piep(990, 0.20, "sine", 0.16), 100);
          setTimeout(() => piep(1320, 0.25, "sine", 0.14), 220);
          setTimeout(() => piep(1760, 0.30, "sine", 0.12), 380);
          oblivionFadeOut = OBLIVION_FADE * 2;
        }
        // Na unlock: fade-out → terug naar normaal (game gaat door, score blijft)
        if (oblivionUnlockGedaan) {
          if (oblivionFadeOut > 0) oblivionFadeOut--;
          if (oblivionFadeOut <= 0) {
            oblivionMode = false;
            oblivionFrames = 0;
          }
        }
      }


      // ───── LOOP-RIT — speler gaat van links-onder over de top naar rechts-onder ─────
      if (loopActief) {
        loopProgress += 1 / LOOP_DUUR;
        if (loopProgress >= 1) {
          // Klaar — exit-ramp boost (helling waardoor speler nog even
          // hoog schiet zoals Mark vroeg) + terug naar fixed x=100
          loopActief = false;
          loopRef = null;
          speler.x = speler.basisX;
          speler.snelheidX = 0;
          speler.y = GROND_Y;
          speler.snelheidY = SPRING_KRACHT * 1.0; // omhoog-boost als kicker
          speler.springt = true;
          speler.sprongTeller = 0;
          speler.rotatie = 0;
          schansVeiligeFrames = 60;
          spawnParticles(
            speler.x + speler.breedte / 2, speler.y,
            18, "#ffeb3b",
            { spread: 6, opwaarts: 4, leven: 28, grootte: 5, glow: 16 }
          );
          springGeluid();
        } else {
          // Mid-loop: positie volgt LOOP_SWEEP (-2π = 360° CCW), rotatie ook
          // CCW (= negatief in canvas) zodat hoofd-eerst de loop-richting volgt
          // en speler upright eindigt na 360°.
          const cx = loopRef.x + loopRef.breedte / 2;
          const cy = loopRef.y + loopRef.hoogte / 2;
          const ang = LOOP_ENTRY + loopProgress * LOOP_SWEEP;
          speler.x = cx + loopRadiusX * Math.cos(ang) - speler.breedte / 2;
          speler.y = cy + loopRadiusY * Math.sin(ang) - speler.hoogte / 2;
          speler.rotatie = -loopProgress * 2 * Math.PI;
          return; // skip alles — wereld bevroren
        }
      }

      // countdown bij start van een sessie / na respawn
      if (countdown > 0) {
        const stap = Math.ceil(countdown / (COUNTDOWN_FRAMES / 3));
        const vorigStap = Math.ceil((countdown - 1) / (COUNTDOWN_FRAMES / 3));
        if (stap !== vorigStap && vorigStap > 0) {
          // tick-geluid bij elke nieuwe count
          piep(660, 0.06, "sine", 0.10);
        } else if (countdown === 1) {
          // GO! geluid
          piep(990, 0.10, "sine", 0.14);
          setTimeout(() => piep(1320, 0.10, "sine", 0.12), 60);
        }
        countdown--;
        return; // alle game-logic pauzeren
      }

      checkBioomWissel();
      spelSnelheid = START_SNELHEID; // constant — moeilijkheid via obstakel-density
      // SLOW-MO: vermenigvuldig alle scroll-snelheden met deze factor (zonder spelSnelheid zelf te wijzigen,
      // anders zou de level-tijd-progressie ook in de war raken). Achtergrond-pattern-offsets blijven op
      // spelSnelheid om visuele jitter bij in/uit-fade te voorkomen.
      const slowMul = slowFrames > 0 ? SLOW_FACTOR : 1;
      // afgeremFrames > 0 = botste tegen blok, wereld op AFGEREMD_FACTOR snelheid
      const afremMul = afgeremFrames > 0 ? AFGEREMD_FACTOR : 1;
      // Tijdens bonus-fase staat de wereld stil
      const bonusMul = bonusFase ? 0 : 1;
      effSnelheid = spelSnelheid * slowMul * afremMul * bonusMul;
      if (afgeremFrames > 0) afgeremFrames--;
      if (hpFlashTeller > 0) hpFlashTeller--;
      // Live audio-instellingen toepassen (mute/volume vanuit settings-panel)
      if (masterVolume && audioVolumeRef.current) {
        const v = audioVolumeRef.current;
        const target = v.aan ? v.volume : 0;
        if (Math.abs(masterVolume.gain.value - target) > 0.001) {
          masterVolume.gain.value = target;
        }
      }
      if (bonusEindFlash > 0) bonusEindFlash--;

      // ── PERISCOOP: spawn + animatie + collision ──
      // Teller telt ALTIJD af (ook tijdens boss/dungeon/bonus) zodat je
      // 'm meteen na een boss-fight of dungeon zien kan i.p.v. nog 25 sec
      // wachten. Spawn zelf gebeurt alleen in 'vrije' state.
      if (!periscoop) periscoopSpawnTeller--;
      if (!bonusFase && !bossActief && !dungeonMode && !hellMode && !customLevelMode) {
        if (!periscoop && periscoopSpawnTeller <= 0) {
          // Spawn op 0.85 W zodat 'ie binnen de hang-fase bij speler (x=100)
          // aankomt. Te ver rechts (W+30) was te scherpe timing — Mark
          // haalde 'm niet 1x.
          periscoop = {
            x: W * 0.85,
            faseNaam: "uit",
            faseFrames: 0,
          };
          periscoopSpawnTeller = 3600 + Math.floor(Math.random() * 2400); // 60-100 sec tussen periscoops (75% minder vaak dan 15-25 sec)
          piep(440, 0.20, "sine", 0.10);
          setTimeout(() => piep(660, 0.18, "sine", 0.08), 120);
        }
      }
      if (periscoop) {
        periscoop.faseFrames++;
        // Periscoop schuift constant naar links zodat speler (vast op
        // x=100) gegarandeerd onder de lens komt. Snelheid lager dan
        // voorheen — Mark vond timing te scherp. Het venster waarin
        // hitbox overlapt (~76px) duurt nu ~50 frames = 0.83 sec.
        const slideSpeed = 1.5 * SCHAAL;
        periscoop.x -= slideSpeed;
        if (periscoop.faseNaam === "uit" && periscoop.faseFrames >= PERISCOOP_UIT_FRAMES) {
          periscoop.faseNaam = "hang";
          periscoop.faseFrames = 0;
        } else if (periscoop.faseNaam === "hang" && periscoop.faseFrames >= PERISCOOP_HANG_FRAMES) {
          periscoop.faseNaam = "in";
          periscoop.faseFrames = 0;
        } else if (periscoop.faseNaam === "in" && periscoop.faseFrames >= PERISCOOP_IN_FRAMES) {
          periscoop = null;
        }
        // Als 'ie te ver naar links is gevaren (voorbij speler), trek
        // 'm vroegtijdig terug — anders verdwijnt 'ie buiten beeld
        if (periscoop && periscoop.x < -40 && periscoop.faseNaam !== "in") {
          periscoop.faseNaam = "in";
          periscoop.faseFrames = 0;
        }
        // Collision-check tijdens uit/hang fase: lens-cirkel raakt speler-bbox
        if (periscoop && (periscoop.faseNaam === "uit" || periscoop.faseNaam === "hang")) {
          const lensY = periscoopLensY();
          const cxP = periscoop.x;
          const sb = spelerBots();
          const sCx = sb.x + sb.breedte / 2;
          const sCy = sb.y + sb.hoogte / 2;
          const dx = sCx - cxP;
          const dy = sCy - lensY;
          if (Math.sqrt(dx * dx + dy * dy) < PERISCOOP_LENS_R * SCHAAL + sb.breedte / 2) {
            startBonusFase();
          }
        }
      }

      // ── BONUS-FASE: ringen spawnen + lasers + collision ──
      if (bonusFase) {
        // Intro-fase: 2 sec "BONUS LEVEL" voorscherm voordat de ringen
        // beginnen, zodat speler weet wat er komt en kan zich richten.
        if (bonusIntroFrames > 0) {
          bonusIntroFrames--;
        }
        bonusFrames--;
        if (bonusFrames <= 0) {
          eindeBonusFase();
        } else if (bonusIntroFrames > 0) {
          // tijdens intro: nog geen ringen spawnen, alleen aankondiging
        } else {
          // bonus-ringen spawnen in willekeurige y, vliegen naar links
          bonusRingSpawnTeller--;
          if (bonusRingSpawnTeller <= 0) {
            const aantal = 1 + Math.floor(Math.random() * 3); // 1-3 ringen per wave
            const startY = (PLAFOND_HOOGTE + 30 + Math.random() * 220) * SCHAAL;
            for (let i = 0; i < aantal; i++) {
              bonusRingen.push({
                x: W + 30 + i * 38 * SCHAAL,
                y: startY + i * 8 * SCHAAL,
                grootte: 22 * SCHAAL,
                fase: i * 0.4,
                opgepakt: false,
                vx: -3.5 - Math.random() * 1.2,
              });
            }
            bonusRingSpawnTeller = 22 + Math.floor(Math.random() * 14);
          }
          // bonus-ringen bewegen + speler-aanraking telt ook als raak.
          // Rect-circle collision met volle speler-bounding-box (geen krimp)
          // en sweep over prev/mid/curr ring-x, zodat snelle ringen niet
          // doortunnelen en hoeken van speler óók tellen.
          {
            const spX = speler.x;
            const spY = speler.y;
            const spRight = spX + speler.breedte;
            const spBottom = spY + speler.hoogte;
            for (let i = bonusRingen.length - 1; i >= 0; i--) {
              const r = bonusRingen[i];
              const prevX = r.x;
              r.x += r.vx;
              r.fase += 0.18;
              if (!r.opgepakt) {
                const ringR = r.grootte * 1.0; // royaal: visuele radius is 0.5
                const ringR2 = ringR * ringR;
                let hit = false;
                const testXs = [prevX, (prevX + r.x) * 0.5, r.x];
                for (let t = 0; t < 3; t++) {
                  const tx = testXs[t];
                  const cx = tx < spX ? spX : tx > spRight ? spRight : tx;
                  const cy = r.y < spY ? spY : r.y > spBottom ? spBottom : r.y;
                  const ddx = tx - cx;
                  const ddy = r.y - cy;
                  if (ddx * ddx + ddy * ddy < ringR2) { hit = true; break; }
                }
                if (hit) {
                  r.opgepakt = true;
                  bonusScore += 5;
                  score += 5;
                  spawnParticles(r.x, r.y, 18, "#ffd700", { spread: 7, opwaarts: 1.5, leven: 30, grootte: 5, glow: 22 });
                  spawnParticles(r.x, r.y, 10, "#ffffff", { spread: 5, opwaarts: 1.2, leven: 22, grootte: 3, glow: 16 });
                  piep(880 + Math.random() * 200, 0.05, "sine", 0.10);
                }
              }
              if (r.x < -40 || r.opgepakt) bonusRingen.splice(i, 1);
            }
          }
          // lasers bewegen + raken bonus-ringen?
          for (let li = spelerLasers.length - 1; li >= 0; li--) {
            const l = spelerLasers[li];
            const lPrev = l.x;            // x voor deze frame
            l.x += SPELER_LASER_SNELHEID; // verplaats
            let raak = false;
            for (const r of bonusRingen) {
              if (r.opgepakt) continue;
              // Sweep-collision: laser is een lijntje tussen lPrev en l.x.
              // Pakt rings die ertussen liggen, ook al passeert de laser
              // ze binnen één frame (12 px verplaatsing per frame is groot
              // genoeg om kleine ringen te skippen). Hitbox-radius 0.85
              // van ring-grootte voor genadige collision (was 0.55).
              const ringR = r.grootte * 0.85;
              const dy = l.y - r.y;
              const inX = (r.x + ringR >= lPrev) && (r.x - ringR <= l.x);
              if (inX && Math.abs(dy) < ringR) {
                r.opgepakt = true;
                bonusScore += 5;
                score += 5;
                spawnParticles(r.x, r.y, 14, "#ffd700", { spread: 6, opwaarts: 1.5, leven: 26, grootte: 4, glow: 18 });
                spawnParticles(r.x, r.y, 8, "#ffffff", { spread: 4, opwaarts: 1, leven: 20, grootte: 3, glow: 14 });
                piep(880 + Math.random() * 200, 0.05, "sine", 0.10);
                raak = true;
                break;
              }
            }
            if (raak || l.x > W + 20) spelerLasers.splice(li, 1);
          }
        }
      }
      // tijdens boss: spelTijd telt niet door (level-progressie pauzeert)
      if (bossActief) frameTeller--;

      // Level-detectie: huidigLevel klimt op basis van speltijd vanaf level-startpunt
      const tijdInLevel = frameTeller - (startLevelRef.current - 1) * LEVEL_DUUR_FRAMES;
      const nieuwLevel = Math.min(MAX_LEVEL, startLevelRef.current + Math.floor(tijdInLevel / LEVEL_DUUR_FRAMES));
      if (nieuwLevel !== huidigLevel) {
        // sla record op voor het level dat we nét hebben afgesloten
        const scoreInDitLevel = score - scoreBijLevelStart;
        sessieLevelRecords[huidigLevel] = Math.max(sessieLevelRecords[huidigLevel] || 0, scoreInDitLevel);

        const oudLevel = huidigLevel;
        // BOSS-TRIGGER: na L5 / L10 (boss vóór doorgaan naar volgend level)
        if (BOSS_TRIGGER_LEVELS.includes(oudLevel) && !BOSS_NA_LEVEL_VLAGGEN.has(oudLevel)) {
          BOSS_NA_LEVEL_VLAGGEN.add(oudLevel);
          startBoss(oudLevel, nieuwLevel);
          // huidigLevel blijft staan; pas na win → naar nieuwLevel
        } else {
          // begin nieuw level
          scoreBijLevelStart = score;
          huidigLevel = nieuwLevel;
          levelGehaaldNummer = nieuwLevel - 1; // het level dat zojuist gehaald is
          levelGehaaldFlash = 130; // ~2 sec banner
          // wissel biome + muziek (bass + BPM) per level
          setBiomeVoorLevel(nieuwLevel);
          // bonus piep
          piep(880, 0.10, "sine", 0.15);
          setTimeout(() => piep(1320, 0.12, "sine", 0.14), 100);
          // confetti
          spawnParticles(W * 0.5, H * 0.3, 24, "#69f0ae", { spread: 10, opwaarts: 4, leven: 60, grootte: 5, zwaartekracht: 0.18, glow: 18 });
          // SKIN UNLOCK: nieuw level bereikt = nieuwe skin?
          const skinHit = SKINS.find((s) => s.unlockLevel === nieuwLevel);
          if (skinHit) {
            try {
              setUnlockedSkins((prev) => prev.includes(skinHit.id) ? prev : [...prev, skinHit.id]);
            } catch {}
            // groot feest: gouden particles + 3-tonen jingle
            spawnParticles(W * 0.5, H * 0.3, 30, "#ffd54f", { spread: 12, opwaarts: 5, leven: 70, grootte: 6, glow: 22 });
            spawnParticles(W * 0.5, H * 0.3, 18, "#ff80a0", { spread: 9, opwaarts: 4, leven: 55, grootte: 5, glow: 18 });
            piep(880, 0.18, "sine", 0.16);
            setTimeout(() => piep(1320, 0.18, "sine", 0.14), 120);
            setTimeout(() => piep(1760, 0.22, "sine", 0.13), 260);
            // banner via levelUpFlash + naam wordt al getoond — voor skin-melding
            // hangen we 'm aan levelUpNaam
            levelUpNaam = `🎁 SKIN: ${skinHit.emoji} ${skinHit.label}`;
            levelUpFlash = 200;
          }
        }
      }
      if (levelGehaaldFlash > 0) levelGehaaldFlash--;
      // ── BLIKSEM-FLITS update (vanaf L50 OF tijdens boss; frequentie schaalt) ──
      if (bliksemFlash > 0) bliksemFlash--;
      const bliksemBronAanwezig = (huidigLevel >= 50 || bossActief) && !bonusFase;
      if (bliksemBronAanwezig) {
        bliksemTimer--;
        if (bliksemTimer <= 0) {
          // intervallen:
          //   L50 = ~900f (15s) gemiddeld, L100 = ~120f (2s)
          //   BOSS = ~80f (1.3s) — donder ratelt continu
          // flash-duur: 8-22 frames
          bliksemFlash = bossActief
            ? 10 + Math.floor(Math.random() * 8)
            : 8 + Math.min(14, Math.floor((huidigLevel - 50) / 4));
          // genereer zigzag-pad met meerdere takken
          const path = [];
          let x = 60 + Math.random() * (W - 120);
          let y = 0;
          path.push({ x, y });
          while (y < H) {
            y += 14 + Math.random() * 22;
            x += (Math.random() - 0.5) * 90;
            path.push({ x, y });
          }
          bliksemBoltPath = path;
          shakeKracht = Math.max(shakeKracht, 9 + (huidigLevel - 50) * 0.12);
          // donder-stack: meer lagen, luider
          piep(55, 0.65, "triangle", 0.22);
          setTimeout(() => piep(95, 0.45, "triangle", 0.16), 80);
          setTimeout(() => piep(40, 0.85, "sine", 0.20), 180);
          setTimeout(() => piep(75, 0.50, "triangle", 0.14), 320);
          setTimeout(() => piep(38, 0.45, "sine", 0.13), 480);
          // vuur-burst op random plek op de grond — visuele klap
          const fireX = 60 + Math.random() * (W - 120);
          const fireY = GROND_Y + SPELER_GROOTTE - 4 * SCHAAL;
          spawnParticles(fireX, fireY, 22, "#ffaa30", { spread: 9, opwaarts: 5, leven: 50, grootte: 6, zwaartekracht: 0.10, glow: 22 });
          spawnParticles(fireX, fireY, 14, "#ff5020", { spread: 7, opwaarts: 4, leven: 42, grootte: 5, zwaartekracht: 0.08, glow: 20 });
          spawnParticles(fireX, fireY, 8, "#fff080", { spread: 5, opwaarts: 3.5, leven: 30, grootte: 4, zwaartekracht: 0.06, glow: 18 });
          // 40% kans op een double-flash 6-12 frames later
          if (Math.random() < 0.40) {
            setTimeout(() => {
              bliksemFlash = Math.max(bliksemFlash, 8);
              const path2 = [];
              let x2 = 60 + Math.random() * (W - 120);
              let y2 = 0;
              path2.push({ x: x2, y: y2 });
              while (y2 < H) {
                y2 += 14 + Math.random() * 22;
                x2 += (Math.random() - 0.5) * 90;
                path2.push({ x: x2, y: y2 });
              }
              bliksemBoltPath = path2;
              shakeKracht = Math.max(shakeKracht, 7);
              piep(68, 0.50, "triangle", 0.18);
            }, (6 + Math.random() * 6) * 16);
          }
          // reset timer met scaling
          let basis;
          if (bossActief) {
            basis = 80; // BOSS: ~1.3 sec gemiddeld → bijna constant donderen
          } else {
            basis = Math.max(120, 900 - (huidigLevel - 50) * 16);
          }
          bliksemTimer = Math.floor(basis * (0.5 + Math.random()));
        }
        // Periodieke vuur-eruptie tussen flashes door (alleen L50+, niet tijdens boss)
        if (huidigLevel >= 50 && !bossActief && frameTeller % Math.max(20, 90 - (huidigLevel - 50) * 1.2) === 0) {
          const fx = 40 + Math.random() * (W - 80);
          const fy = GROND_Y + SPELER_GROOTTE - 4 * SCHAAL;
          spawnParticles(fx, fy, 6, "#ffaa30", { spread: 4, opwaarts: 3, leven: 32, grootte: 4, zwaartekracht: 0.10, glow: 16 });
          spawnParticles(fx, fy, 3, "#ff5020", { spread: 3, opwaarts: 2.5, leven: 26, grootte: 3, zwaartekracht: 0.08, glow: 14 });
        }
      } else {
        bliksemTimer = 800; // reset zodat lager-level geen achterstallige flash uitspuwt
      }
      // gravity: inverteren tijdens FLIP
      speler.snelheidY += flipFrames > 0 ? -ZWAARTEKRACHT : ZWAARTEKRACHT;
      const yVorig = speler.y;
      speler.y += speler.snelheidY;
      // Horizontale push tijdens sprong + drift-terug op grond — geeft jump
      // een natuurlijke arc-feel ipv puur statisch op-en-neer.
      // Niet tijdens loop-animatie (die zet x zelf). Tijdens bonus mag
      // het wel zodat speler kan zweven om ringen te richten.
      if (!loopActief) {
        speler.x += speler.snelheidX;
        speler.snelheidX *= 0.93; // decay tijdens sprong
        if (!speler.springt && Math.abs(speler.snelheidX) < 0.05) {
          // op de grond — drift terug naar basisX
          const dx = speler.basisX - speler.x;
          if (Math.abs(dx) > 0.3) speler.x += dx * 0.05;
          else speler.x = speler.basisX;
          speler.snelheidX = 0;
        }
      }
      // rotatie: tijdens springen sneller, op grond/plafond constant rollen (logo-bol draait altijd)
      if (speler.springt) {
        speler.rotatie += flipFrames > 0 ? -0.18 : 0.18;
      } else {
        speler.rotatie += flipFrames > 0 ? -0.10 : 0.10; // langzamer rollen op vaste ondergrond
      }

      // platform-landing: alleen tijdens normale gravity, alleen bij vallen
      // (van bovenaf landen — niet vanuit onderkant doorheen)
      if (flipFrames === 0 && speler.snelheidY > 0) {
        for (const p of platforms) {
          const horizOverlap = (speler.x + speler.breedte > p.x) && (speler.x < p.x + p.breedte);
          if (!horizOverlap) continue;
          const voetVorig = yVorig + speler.hoogte;
          const voetNu = speler.y + speler.hoogte;
          // voet ging van boven platform naar onder platform-top in deze frame -> land
          if (voetVorig <= p.y + 1 && voetNu >= p.y) {
            speler.y = p.y - speler.hoogte;
            speler.snelheidY = 0;
            if (speler.springt) {
              spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte, 6, "#80c0ff", { spread: 2, opwaarts: 0.5, leven: 16, grootte: 3, zwaartekracht: 0.08, glow: 12 });
            }
            speler.springt = false;
            speler.rotatie = 0;
            speler.sprongTeller = 0;
            break;
          }
        }
      }

      if (flipFrames > 0) {
        // plafond-clamp tijdens FLIP
        if (speler.y <= PLAFOND_NIVEAU) {
          if (speler.springt) {
            spawnParticles(speler.x + 4 * SCHAAL, speler.y, 8, "#80c0ff", { spread: 3, opwaarts: -1, leven: 16, grootte: 3, zwaartekracht: -0.1, glow: 12 });
          }
          speler.y = PLAFOND_NIVEAU; speler.snelheidY = 0; speler.springt = false; speler.rotatie = 0; speler.sprongTeller = 0;
        }
        // grond-stop tijdens FLIP: bereik je toch de grond, dan stuit je terug ipv dood
        if (speler.y >= GROND_Y) {
          speler.y = GROND_Y;
          speler.snelheidY = -8 * SCHAAL; // bounce omhoog (richting plafond)
          spawnParticles(speler.x + 16 * SCHAAL, speler.y + speler.hoogte, 6, "#888888", { spread: 2, opwaarts: 0.5, leven: 16, grootte: 3, zwaartekracht: 0.08, glow: 0 });
        }
      } else {
        // normale grond-clamp
        if (speler.y >= GROND_Y) {
          if (speler.springt) {
            spawnParticles(speler.x + 4 * SCHAAL, speler.y + speler.hoogte, 8, "#ffaa30", { spread: 3, opwaarts: 1, leven: 16, grootte: 3, zwaartekracht: 0.1, glow: 12 });
            spawnParticles(speler.x + 16 * SCHAAL, speler.y + speler.hoogte, 6, "#888888", { spread: 2, opwaarts: 0.5, leven: 20, grootte: 3, zwaartekracht: 0.08, glow: 0 });
          }
          speler.y = GROND_Y; speler.snelheidY = 0; speler.springt = false; speler.rotatie = 0; speler.sprongTeller = 0;
          // HELL-MODE: lava-damage zodra speler op de grond is. hpFlashTeller
          // (45-frame i-frames) regelt de cooldown — geen extra logic nodig.
          if (hellMode && hellFadeIn === 0 && vliegFrames === 0 && flipFrames === 0) {
            // sissende stoom-particles als hint
            spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte, 8, "#ffaa30", { spread: 4, opwaarts: 2, leven: 24, grootte: 4, zwaartekracht: -0.05, glow: 14 });
            spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte, 4, "#ff5040", { spread: 3, opwaarts: 1.5, leven: 18, grootte: 3, zwaartekracht: -0.04, glow: 16 });
            hitTotale();
            if (!spelLoopt) return;
          }
        }
        // plafond-clamp: speler kan niet boven het plafond uit (anders vliegt hij buiten beeld)
        const minY = PLAFOND_HOOGTE + 2;
        if (speler.y < minY) {
          speler.y = minY;
          if (speler.snelheidY < 0) {
            speler.snelheidY = Math.max(0, speler.snelheidY * -0.3); // zachte bonk + klein stuiterterugje
            spawnParticles(speler.x + speler.breedte / 2, speler.y, 6, "#cccccc", { spread: 2.5, opwaarts: -0.5, leven: 14, grootte: 2, zwaartekracht: 0.1, glow: 0 });
          }
        }
      }
      trail();
      // Decrement safe-zone teller (na schans-sprong)
      if (schansVeiligeFrames > 0) schansVeiligeFrames--;
      // Tijdens bonus-fase: alle spawn-tellers stilzetten zodat er geen
      // items pieleren bij W (effSnelheid=0 = ze bewegen niet maar zouden
      // wel spawnen). Mark: 'na bonus zie ik veel ringen, dingen dubbel'.
      if (!bonusFase) volgendObstakelOver--;
      if (!bonusFase && volgendObstakelOver <= 0) {
        if (schansVeiligeFrames > 0 || dungeonMode || hellMode || customLevelMode) {
          // Geen grond-obstakels tijdens vlucht/landing na schans, niet
          // in dungeon/hell/custom-level mode (custom = saved spawns ipv random).
          volgendObstakelOver = 30;
        } else {
          maakObstakel();
          // Grond-obstakels minder dicht op elkaar — het luchtgevaar
          // (plafond-stekels + zwevende mijnen) doet nu een groter deel
          // van het werk. Mark: 'minder obstakels op de vloer'.
          // L1  : 110-155 frames (rustig)
          // L20 : 88-118 frames
          // L50 : 60-86 frames
          // L100: 26-42 frames
          // OBLIVION PULSE: extreme — 30-50 frames vanaf het begin.
          let minA, variatie;
          if (customLevelMode) {
            minA = 999999; variatie = 0; // custom: geen random-spawn
          } else if (oblivionMode) {
            minA = 30; variatie = 20;
          } else {
            minA = Math.max(26, 110 - huidigLevel * 0.55 - score * 0.18);
            variatie = Math.max(14, 45 - huidigLevel * 0.28);
          }
          volgendObstakelOver = Math.floor(minA) + Math.floor(Math.random() * variatie);
        }
      }
      // ── CUSTOM LEVEL spawn-loop ──
      if (customLevelMode && !customLevelEinde && !bonusFase) {
        customScrollX += effSnelheid;
        while (customSpawnIdx < customSorted.length && customSorted[customSpawnIdx].x <= customScrollX) {
          spawnUitCustom(customSorted[customSpawnIdx]);
          customSpawnIdx++;
        }
        // Einde: alle obstakels gespawnd én scroll voorbij level-lengte
        if (customSpawnIdx >= customSorted.length && customScrollX > (customLevel.lengte || 4000) + W) {
          customLevelEinde = true;
          // Win-feedback + eindeSessie roept score-flow aan
          spawnParticles(speler.x + 16 * SCHAAL, speler.y + 16 * SCHAAL, 30, "#ffd54f", { spread: 10, opwaarts: 4, leven: 60, grootte: 5, glow: 22 });
          piep(660, 0.15, "sine", 0.16);
          setTimeout(() => piep(990, 0.15, "sine", 0.14), 100);
          setTimeout(() => piep(1320, 0.18, "sine", 0.12), 220);
          eindeSessie();
          return;
        }
      }
      // Custom-decoraties scrollen mee met de wereld — geen collisie, alleen visueel
      for (let i = customDecoraties.length - 1; i >= 0; i--) {
        const d = customDecoraties[i];
        d.x -= effSnelheid;
        if (d.x < -80 * SCHAAL) customDecoraties.splice(i, 1);
      }
      for (let i = obstakels.length - 1; i >= 0; i--) {
        const o = obstakels[i];
        o.x -= effSnelheid;
        if (!bonusFase && vliegFrames === 0 && flipFrames === 0 && obstRaakt(o)) {
          // Type 0/1 = spikes → HP-damage; type 2 = blok → afremmen ipv damage
          if (o.type === 2) afremTotale(o);
          else { hitTotale(); if (!spelLoopt) return; }
        }
        if (!o.gescoord && o.x + o.breedte < speler.x) {
          o.gescoord = true;
          aantalObstakelsTotaal++; // teller voor pickups (niet voor score)
          // GEEN power-ups in Oblivion Pulse — extreme difficulty, geen schild, geen reddingsboei.
          if (!oblivionMode && !customLevelMode) {
            // bonus-hart spawn (elke ~25 obstakels, 40% kans)
            if (aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 25 === 0 && Math.random() < 0.4 && levens < MAX_LEVENS) {
              const yMin = (200 + Math.random() * 60) * SCHAAL;
              bonusHarten.push({ x: W + 40, y: yMin, grootte: 28 * SCHAAL, fase: 0, opgepakt: false });
            }
            // raket-pickup: elke ~16 obstakels, 65% kans (effectief elke ~25 obstakels = 1x per ~15 sec)
            if (aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 16 === 0 && Math.random() < 0.65 && vliegFrames === 0) {
              const yPos = (180 + Math.random() * 80) * SCHAAL;
              raketten.push({ x: W + 40, y: yPos, grootte: 32 * SCHAAL, fase: 0, opgepakt: false });
            }
            // FLIP-pickup: elke ~22 obstakels, 65% kans (effectief elke ~34 obstakels = 1x per ~20 sec)
            if (aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 22 === 0 && Math.random() < 0.65 && flipFrames === 0 && flipPending === 0) {
              const yPos = (170 + Math.random() * 100) * SCHAAL;
              flipPickups.push({ x: W + 40, y: yPos, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
            }
            // MAGNEET-pickup: elke ~18 obstakels, 70% kans (was 28 / 50%)
            if (aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 18 === 0 && Math.random() < 0.7 && magneetFrames === 0) {
              const yPos = (180 + Math.random() * 80) * SCHAAL;
              magneetPickups.push({ x: W + 40, y: yPos, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
            }
            // SLOW-MO-pickup: elke ~34 obstakels, 45% kans
            if (aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 34 === 0 && Math.random() < 0.45 && slowFrames === 0) {
              const yPos = (170 + Math.random() * 100) * SCHAAL;
              slowMoPickups.push({ x: W + 40, y: yPos, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
            }
            // BOMB-pickup: elke ~40 obstakels, 35% kans (zeldzaam, krachtig effect)
            if (aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 40 === 0 && Math.random() < 0.35) {
              const yPos = (180 + Math.random() * 80) * SCHAAL;
              bombPickups.push({ x: W + 40, y: yPos, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
            }
          }
          // PORTAL naar dungeon-wereld — elke ~8 obstakels, 90% kans
          // Niet tijdens boss/flip/loop/dungeon/hell zelf.
          if (
            !bossActief && flipFrames === 0 && !loopActief && !dungeonMode && !hellMode && !oblivionMode && !customLevelMode &&
            aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 8 === 0 &&
            Math.random() < 0.9
          ) {
            const yPos = (170 + Math.random() * 90) * SCHAAL;
            portals.push({
              x: W + 40,
              y: yPos,
              grootte: 50 * SCHAAL,
              fase: 0,
              opgepakt: false,
              type: "dungeon",
            });
          }
          // HELL-PORTAAL — zeldzaam, vanaf score 100. Elke ~32 obstakels, 60% kans.
          // Niet tijdens boss/dungeon/hell/flip/loop. Rood + ander effect.
          if (
            !bossActief && flipFrames === 0 && !loopActief && !dungeonMode && !hellMode && !oblivionMode && !customLevelMode &&
            score >= 100 &&
            aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 32 === 0 &&
            Math.random() < 0.6
          ) {
            const yPos = (170 + Math.random() * 90) * SCHAAL;
            portals.push({
              x: W + 40,
              y: yPos,
              grootte: 56 * SCHAAL,
              fase: 0,
              opgepakt: false,
              type: "hell",
            });
          }
          // SCHANS / LOOPING — elke ~6 obstakels, 85% kans. Skip tijdens boss,
          // FLIP en dungeon (super-jump in dungeon = vlieg door plafond-stekels
          // = direct dood).
          if (
            !bossActief && flipFrames === 0 && !dungeonMode && !hellMode && !oblivionMode && !customLevelMode &&
            aantalObstakelsTotaal > 0 && aantalObstakelsTotaal % 6 === 0 &&
            Math.random() < 0.85
          ) {
            const isLoop = Math.random() < 0.3;
            // Schans: ~25% van scherm-hoogte. Looping: ~40% — kleiner zodat
            // speler en omgeving zichtbaar blijven tijdens de loop-rit.
            const hoogte  = isLoop ? 0.40 * H : 0.25 * H;
            const breedte = isLoop ? 0.38 * H : 0.36 * H;
            schansen.push({
              x: W + 40,
              y: GROND_Y + SPELER_GROOTTE - hoogte,
              breedte,
              hoogte,
              type: isLoop ? "loop" : "schans",
              geactiveerd: false,
            });
            // Voorkom dat het volgende obstakel direct ná deze schans spawnt
            // — duwt 'm naar achter zodat de safe-zone na de schans niet
            // meteen op een nieuwe spike valt.
            volgendObstakelOver = Math.max(volgendObstakelOver, 110);
          }
          // (plafond-stekel-spawn werkt nu via eigen plafondStekelSpawnTeller, hieronder)
        }
        if (o.x + o.breedte < 0) obstakels.splice(i, 1);
      }
      // ---------- SCHANSEN + LOOPINGS ----------
      // Beweeg, render, en check collision met speler. Bij contact:
      //   - super-jump (1.7× normale sprongkracht)
      //   - safe-zone van 70 frames (geen nieuwe grond-obstakels)
      //   - ringen verspreid over de boog (4 voor schans, 7 voor loop)
      //   - 1 piek-cadeau (40% hartje, 20% magneet, 20% slow-mo, 20% bom)
      for (let i = schansen.length - 1; i >= 0; i--) {
        const sc = schansen[i];
        sc.x -= effSnelheid;

        // (Render gebeurt in teken() via tekenSchans, niet hier.)

        // Collision (alleen één keer + niet tijdens boss/flip/loop-animatie)
        if (!sc.geactiveerd && !bossActief && flipFrames === 0 && !loopActief) {
          const sb = spelerBots();
          const overlapt =
            sb.x + sb.breedte > sc.x &&
            sb.x < sc.x + sc.breedte &&
            sb.y + sb.hoogte > sc.y;
          if (overlapt) {
            const isLoop = sc.type === "loop";
            // Loop triggert direct op AABB-overlap. Speler teleporteert naar
            // de vaste entry-hoek (0.7π = lower-left van loop) en draait dan
            // rechtsom door de hele revolutie. Particle-burst verbergt de
            // teleport. Distance-check zorgde anders dat trigger nooit
            // afging omdat speler op de grond altijd verder dan rx/2 is.

            if (isLoop) {
              // ── LOOP — speler gaat ECHT door de loop heen ─────
              sc.geactiveerd = true;
              loopActief = true;
              loopRef = sc;
              loopProgress = 0;
              loopRadiusX = sc.breedte / 2 - speler.breedte / 2 - 6 * SCHAAL;
              loopRadiusY = sc.hoogte / 2 - speler.hoogte / 2 - 6 * SCHAAL;
              speler.snelheidY = 0;
              speler.springt = false;
              speler.sprongTeller = 0;
              spawnParticles(
                speler.x + speler.breedte / 2,
                speler.y + speler.hoogte / 2,
                20, "#ffaa20",
                { spread: 6, opwaarts: 2, leven: 26, grootte: 5, glow: 16 }
              );
              springGeluid();
              // Spawn rings langs de loop-baan zodat speler ze tijdens de
              // rit oppakt. 5 rings, gelijk verdeeld over de sweep-hoek.
              const cxR = sc.x + sc.breedte / 2;
              const cyR = sc.y + sc.hoogte / 2;
              const ringRx = sc.breedte / 2 - 8 * SCHAAL;
              const ringRy = sc.hoogte / 2 - 8 * SCHAAL;
              for (let r = 1; r <= 5; r++) {
                const t = r / 6; // 1/6, 2/6, ... 5/6 — overslaan begin/eind
                const ringAng = LOOP_ENTRY + t * LOOP_SWEEP;
                ringen.push({
                  x: cxR + ringRx * Math.cos(ringAng) - 11 * SCHAAL,
                  y: cyR + ringRy * Math.sin(ringAng) - 11 * SCHAAL,
                  grootte: 22 * SCHAAL,
                  fase: r * 0.6,
                  opgepakt: false,
                });
              }
            } else {
              // ── SCHANS — super-jump + arc-pickups (originele gedrag) ─────
              sc.geactiveerd = true;
              const superKracht = SPRING_KRACHT * 1.7;
              speler.snelheidY = superKracht;
              speler.springt = true;
              speler.sprongTeller = 0;
              schansVeiligeFrames = 70;
              spawnParticles(
                speler.x + speler.breedte / 2,
                speler.y + speler.hoogte / 2,
                16, "#69f0ae",
                { spread: 6, opwaarts: 4, leven: 30, grootte: 5, zwaartekracht: 0.05, glow: 18 }
              );
              springGeluid();

              // Arc-collectibles — y(t) = GROND_Y + super·t + ½·g·t²
              const ringFrames = [14, 26, 38, 50];
              for (const t of ringFrames) {
                const yArc = GROND_Y + superKracht * t + 0.5 * ZWAARTEKRACHT * t * t;
                ringen.push({
                  x: speler.x + effSnelheid * t,
                  y: Math.max(60 * SCHAAL, yArc),
                  grootte: 22 * SCHAAL,
                  fase: 0,
                  opgepakt: false,
                });
              }
              // Piek-cadeau op t=26 (hoogste punt van de boog)
              const tPiek = 26;
              const yPiekRaw = GROND_Y + superKracht * tPiek + 0.5 * ZWAARTEKRACHT * tPiek * tPiek;
              const yPiek = Math.max(50 * SCHAAL, yPiekRaw - 18 * SCHAAL);
              const xPiek = speler.x + effSnelheid * tPiek;
              const r = Math.random();
              if (r < 0.4 && levens < MAX_LEVENS) {
                bonusHarten.push({ x: xPiek, y: yPiek, grootte: 28 * SCHAAL, fase: 0, opgepakt: false });
              } else if (r < 0.6 && magneetFrames === 0) {
                magneetPickups.push({ x: xPiek, y: yPiek, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
              } else if (r < 0.8 && slowFrames === 0) {
                slowMoPickups.push({ x: xPiek, y: yPiek, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
              } else {
                bombPickups.push({ x: xPiek, y: yPiek, grootte: 30 * SCHAAL, fase: 0, opgepakt: false });
              }
            }
          }
        }

        if (sc.x + sc.breedte < 0) schansen.splice(i, 1);
      }
      // ───── PORTALS — beweeg, render-state, en check contact ─────
      for (let i = portals.length - 1; i >= 0; i--) {
        const p = portals[i];
        p.x -= effSnelheid;
        p.fase += 0.10;
        // Pickup-collision (enkel als niet al in dungeon/hell en geen boss/flip/loop)
        if (!p.opgepakt && !dungeonMode && !hellMode && !bossActief && flipFrames === 0 && !loopActief) {
          const dx = (speler.x + speler.breedte / 2) - p.x;
          const dy = (speler.y + speler.hoogte / 2) - p.y;
          if (Math.sqrt(dx * dx + dy * dy) < (p.grootte + speler.breedte) / 2) {
            p.opgepakt = true;
            if (p.type === "hell") {
              hellMode = true;
              hellFrames = 0;
              hellFadeIn = HELL_FADE;
              // ruim alles op wat niet bij Hell hoort
              obstakels.length = 0;
              customDecoraties.length = 0;
              plafondStekels.length = 0;
              schansen.length = 0;
              fans.length = 0;
              spawnParticles(p.x, p.y, 30, "#ff4020", { spread: 9, opwaarts: 2, leven: 36, grootte: 6, glow: 24 });
              spawnParticles(p.x, p.y, 16, "#ffaa30", { spread: 6, opwaarts: 1, leven: 28, grootte: 4, glow: 18 });
              shakeKracht = Math.max(shakeKracht, 8);
              piep(110, 0.30, "sawtooth", 0.20);
              setTimeout(() => piep(85, 0.35, "sawtooth", 0.18), 120);
            } else {
              // dungeon (default)
              dungeonMode = true;
              dungeonFrames = 0;
              dungeonFadeIn = DUNGEON_FADE;
              spawnParticles(p.x, p.y, 24, "#a040ff", { spread: 7, opwaarts: 1, leven: 30, grootte: 5, glow: 18 });
              piep(440, 0.18, "sine", 0.14);
              setTimeout(() => piep(660, 0.16, "sine", 0.12), 80);
            }
          }
        }
        if (p.x + p.grootte < 0 || p.opgepakt) portals.splice(i, 1);
      }
      // ───── FAN-SPANDOEKEN ─────
      // Periodieke spandoek-spawn met top-3 highscore-namen
      if (!bonusFase) fanSpawnTeller--;
      if (fanSpawnTeller <= 0 && !bossActief && !dungeonMode && !hellMode) {
        spawnFanGroep();
        fanSpawnTeller = FAN_INTERVAL;
      }
      for (let i = fans.length - 1; i >= 0; i--) {
        fans[i].x -= effSnelheid;
        if (fans[i].x + fans[i].breedte < -50) fans.splice(i, 1);
      }
      // ───── DUNGEON-MODE-TIMER + HAAIEN + VISSEN ─────
      if (dungeonMode) {
        dungeonFrames++;
        if (dungeonFadeIn > 0) dungeonFadeIn--;
        // Spawn af en toe een haai (alleen tijdens dungeon, niet tijdens fade-in)
        haaiSpawnTeller--;
        if (dungeonFadeIn === 0 && haaiSpawnTeller <= 0) {
          haaien.push({
            x: W + 40 * SCHAAL,
            y: GROND_Y + SPELER_GROOTTE - 36 * SCHAAL, // op vloerniveau (in water)
            breedte: 90 * SCHAAL,                      // groter
            hoogte: 36 * SCHAAL,                       // groter
            fase: 0,
            dood: false,
          });
          haaiSpawnTeller = 180 + Math.floor(Math.random() * 180); // 3-6 sec
        }
        // Spawn vissen — max 2 tegelijk in beeld zodat de bubbel-shield
        // niet doorlopend wordt ververst door pickups (haaien moeten gevaar
        // blijven). Mark's feedback: 'heel veel minder van deze vissen, max 2'.
        visSpawnTeller--;
        if (dungeonFadeIn === 0 && visSpawnTeller <= 0 && vissen.length < 2) {
          const waterTop = H - 70 * SCHAAL;
          vissen.push({
            x: W + 30 * SCHAAL,
            // Vissen zwemmen in het water-gebied (onder waterTop, boven de bodem)
            y: waterTop + 12 * SCHAAL + Math.random() * (H - waterTop - 24 * SCHAAL),
            grootte: (16 + Math.random() * 10) * SCHAAL,
            fase: Math.random() * Math.PI * 2,
            kleur: VIS_KLEUREN[Math.floor(Math.random() * VIS_KLEUREN.length)],
            snelheid: 0.6 + Math.random() * 0.6,
          });
          visSpawnTeller = 240 + Math.floor(Math.random() * 180);
        }
        // SCHATKIST — zeldzame bonus-pickup tijdens dungeon (max 1 in beeld).
        // Springen/raken = +25 score + gouden burst. Mark's input: 'weinig
        // spannends al een schans, bedenk iets leuks'.
        schatkistSpawnTeller--;
        if (dungeonFadeIn === 0 && schatkistSpawnTeller <= 0 && schatkisten.length < 1) {
          schatkisten.push({
            x: W + 50 * SCHAAL,
            y: (200 + Math.random() * 80) * SCHAAL,  // op springhoogte, varieert
            breedte: 40 * SCHAAL,
            hoogte: 32 * SCHAAL,
            fase: 0,
            opgepakt: false,
          });
          schatkistSpawnTeller = 540 + Math.floor(Math.random() * 360); // 9-15 sec
        }
        // Bij DUNGEON_DUUR: start exit-fade
        if (dungeonFrames === DUNGEON_DUUR) {
          dungeonFadeOut = DUNGEON_FADE;
        }
        if (dungeonFrames > DUNGEON_DUUR) {
          dungeonFadeOut--;
          if (dungeonFadeOut <= 0) {
            // Exit dungeon — geef reward
            dungeonMode = false;
            dungeonFrames = 0;
            if (levens < MAX_LEVENS) levens++;
            score += 100;
            spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 30, "#ffd54f", { spread: 8, opwaarts: 3, leven: 40, grootte: 5, glow: 22 });
            piep(660, 0.10, "sine", 0.14);
            setTimeout(() => piep(990, 0.10, "sine", 0.12), 90);
            setTimeout(() => piep(1320, 0.12, "sine", 0.10), 180);
          }
        }
      }
      // ───── HELL-MODE-TIMER + lava-vonk-spawn ─────
      if (hellMode) {
        hellFrames++;
        if (hellFadeIn > 0) hellFadeIn--;
        // opstijgende lava-vonkjes — visueel decor
        vonkSpawnTeller--;
        if (vonkSpawnTeller <= 0 && hellFadeIn === 0) {
          const vx = Math.random() * W;
          vonken.push({
            x: vx,
            y: H - 8 * SCHAAL,
            vy: -(0.6 + Math.random() * 1.2) * SCHAAL,
            vx: (Math.random() - 0.5) * 0.4,
            r: (1.5 + Math.random() * 2) * SCHAAL,
            leven: 60 + Math.random() * 30,
            kleur: Math.random() < 0.6 ? "#ffaa30" : "#ff6020",
          });
          vonkSpawnTeller = 4 + Math.floor(Math.random() * 6);
        }
        // Bij HELL_DUUR: start exit-fade
        if (hellFrames === HELL_DUUR) {
          hellFadeOut = HELL_FADE;
        }
        if (hellFrames > HELL_DUUR) {
          hellFadeOut--;
          if (hellFadeOut <= 0) {
            // Exit hell — beloning
            hellMode = false;
            hellFrames = 0;
            score += 150;
            spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 36, "#ffd54f", { spread: 10, opwaarts: 4, leven: 50, grootte: 6, glow: 24 });
            spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 16, "#ff7040", { spread: 8, opwaarts: 3, leven: 42, grootte: 5, glow: 22 });
            piep(660, 0.12, "sine", 0.14);
            setTimeout(() => piep(990, 0.12, "sine", 0.14), 100);
            setTimeout(() => piep(1320, 0.14, "sine", 0.12), 200);
          }
        }
      }
      // vonkjes updaten (blijven ook tijdens fade-out leven)
      for (let i = vonken.length - 1; i >= 0; i--) {
        const v = vonken[i];
        v.x += v.vx;
        v.y += v.vy;
        v.vy += 0.005;
        v.leven--;
        if (v.leven <= 0 || v.y < -10) vonken.splice(i, 1);
      }
      // Beweeg + check collision met haaien (los van dungeonMode-status,
      // bestaande haaien blijven uitscrollen ook na dungeon-end)
      for (let i = haaien.length - 1; i >= 0; i--) {
        const h = haaien[i];
        h.x -= effSnelheid * 0.95;
        h.fase += 0.10;
        if (!h.dood && !bonusFase && vliegFrames === 0 && flipFrames === 0 && !loopActief) {
          const sb = spelerBots();
          if (botst(sb, { x: h.x, y: h.y, breedte: h.breedte, hoogte: h.hoogte })) {
            if (bubbelFrames > 0) {
              // Bubbel-shield vernietigt de haai i.p.v. dat speler damage neemt
              h.dood = true;
              piep(440, 0.12, "sine", 0.12);
              setTimeout(() => piep(880, 0.10, "sine", 0.08), 60);
              spawnParticles(h.x + h.breedte / 2, h.y + h.hoogte / 2, 22, "#80e8ff", { spread: 8, opwaarts: 2, leven: 30, grootte: 4, glow: 18 });
              spawnParticles(h.x + h.breedte / 2, h.y + h.hoogte / 2, 12, "#ffffff", { spread: 6, opwaarts: 1.5, leven: 22, grootte: 3, glow: 12 });
            } else {
              levenVerlies();
              h.dood = true;
              spawnParticles(h.x + h.breedte / 2, h.y + h.hoogte / 2, 16, "#80c0ff", { spread: 6, opwaarts: 2, leven: 24, grootte: 4, glow: 14 });
            }
          }
        }
        if (h.x + h.breedte < -60 || h.dood) haaien.splice(i, 1);
      }
      // Beweeg + check pickup voor vissen
      for (let i = vissen.length - 1; i >= 0; i--) {
        const v = vissen[i];
        v.x -= effSnelheid * 0.85 + v.snelheid;
        v.fase += 0.18;
        // lichte op-en-neer wiebel
        v.y += Math.sin(v.fase) * 0.4;
        // pickup: speler raakt vis -> +5 punten + bubbel-shield
        const sb = spelerBots();
        const visBox = { x: v.x - v.grootte, y: v.y - v.grootte * 0.55, breedte: v.grootte * 2, hoogte: v.grootte * 1.1 };
        if (!loopActief && botst(sb, visBox)) {
          score += 5;
          bubbelFrames = BUBBEL_DUUR;
          piep(880, 0.06, "sine", 0.10);
          setTimeout(() => piep(1320, 0.06, "sine", 0.08), 50);
          setTimeout(() => piep(1760, 0.08, "sine", 0.06), 110);
          spawnParticles(v.x, v.y, 18, v.kleur, { spread: 6, opwaarts: 2, leven: 28, grootte: 4, glow: 16 });
          spawnParticles(v.x, v.y, 10, "#ffffff", { spread: 4, opwaarts: 1.5, leven: 22, grootte: 3, glow: 12 });
          vissen.splice(i, 1);
          continue;
        }
        if (v.x + v.grootte * 2 < -40) vissen.splice(i, 1);
      }
      // Bubbel-shield aftellen
      if (bubbelFrames > 0) bubbelFrames--;
      // Schatkisten — bewegen + pickup
      for (let i = schatkisten.length - 1; i >= 0; i--) {
        const s = schatkisten[i];
        s.x -= effSnelheid;
        s.fase += 0.08;
        const sb = spelerBots();
        const kBox = { x: s.x, y: s.y + Math.sin(s.fase) * 3, breedte: s.breedte, hoogte: s.hoogte };
        if (!s.opgepakt && !loopActief && botst(sb, kBox)) {
          s.opgepakt = true;
          score += 25;
          // schatkist herstelt ook 25% hp (water-wereld bonus voelt nu écht waardevol)
          hp = Math.min(HP_MAX, hp + HP_PER_HIT);
          piep(660, 0.08, "sine", 0.12);
          setTimeout(() => piep(990, 0.08, "sine", 0.10), 60);
          setTimeout(() => piep(1320, 0.10, "sine", 0.10), 130);
          setTimeout(() => piep(1760, 0.14, "sine", 0.08), 220);
          // gouden burst
          spawnParticles(s.x + s.breedte / 2, s.y + s.hoogte / 2, 24, "#ffd700", { spread: 8, opwaarts: 2, leven: 32, grootte: 5, glow: 20 });
          spawnParticles(s.x + s.breedte / 2, s.y + s.hoogte / 2, 12, "#ffffff", { spread: 6, opwaarts: 2, leven: 26, grootte: 3, glow: 14 });
          spawnParticles(s.x + s.breedte / 2, s.y + s.hoogte / 2, 8, "#ff8030", { spread: 7, opwaarts: 1.5, leven: 28, grootte: 4, glow: 16 });
        }
        if (s.x + s.breedte < -20 || s.opgepakt) schatkisten.splice(i, 1);
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].dood) particles.splice(i, 1);
      }

      // bonus-harten
      for (let i = bonusHarten.length - 1; i >= 0; i--) {
        const h = bonusHarten[i];
        h.x -= effSnelheid;
        h.fase += 0.08;
        h.y += Math.sin(h.fase) * 0.5;
        // pickup-check
        const dx = (speler.x + speler.breedte / 2) - h.x;
        const dy = (speler.y + speler.hoogte / 2) - h.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!h.opgepakt && dist < (h.grootte + speler.breedte) / 2) {
          h.opgepakt = true;
          // Eerst hp herstellen tot 100, daarna pas een leven erbij.
          // Bij 100 hp én max levens → bonus-punten.
          if (hp < HP_MAX) {
            hp = Math.min(HP_MAX, hp + HP_PER_HIT);
          } else if (levens < MAX_LEVENS) {
            levens++;
          } else {
            score += 5; // alles vol: bonus-punten ipv leven
          }
          piep(880, 0.06, "sine", 0.15);
          setTimeout(() => piep(1320, 0.08, "sine", 0.12), 50);
          spawnParticles(h.x, h.y, 16, "#ff4040", { spread: 6, opwaarts: 2, leven: 30, grootte: 4, zwaartekracht: 0.05, glow: 20 });
          spawnParticles(h.x, h.y, 8, "#ffaaaa", { spread: 3, opwaarts: 1, leven: 25, grootte: 3, zwaartekracht: 0, glow: 14 });
        }
        if (h.x < -50 || h.opgepakt) bonusHarten.splice(i, 1);
      }

      // platform spawn — lichtblauwe rust-blokjes halverwege canvas.
      // In HELL-MODE: agressievere spawn op 3 hoogtes met gaten ertussen
      // (lava onder = HP-damage als je staat, dus platforms zijn verplicht).
      if (!bonusFase) platformSpawnTeller--;
      if (hellMode && hellFadeIn === 0 && platformSpawnTeller <= 0) {
        // 3 hoogte-tiers
        const LOW_Y = GROND_Y - 60 * SCHAAL;
        const MID_Y = PLATFORM_Y;
        const HIGH_Y = PLATFORM_Y - 80 * SCHAAL;
        const tiers = [LOW_Y, MID_Y, HIGH_Y];
        const py1 = tiers[Math.floor(Math.random() * 3)];
        const breedte1 = (110 + Math.random() * 70) * SCHAAL; // smaller dan normaal
        platforms.push({ x: W + 20, y: py1, breedte: breedte1, hell: true });
        // ~40% kans: tweede platform op andere hoogte direct erna (stepped)
        if (Math.random() < 0.40) {
          const otherTier = tiers.filter((y) => y !== py1)[Math.floor(Math.random() * 2)];
          const gap = (50 + Math.random() * 60) * SCHAAL;
          const breedte2 = (90 + Math.random() * 80) * SCHAAL;
          platforms.push({ x: W + 20 + breedte1 + gap, y: otherTier, breedte: breedte2, hell: true });
        }
        platformSpawnTeller = 80 + Math.floor(Math.random() * 50); // 1.3-2.2 sec
      } else if (!hellMode && platformSpawnTeller <= 0) {
        const breedte = (160 + Math.random() * 140) * SCHAAL; // langer: 160-300
        platforms.push({ x: W + 20, y: PLATFORM_Y, breedte });
        const variant = Math.random();
        if (variant < 0.30) {
          // 30%: tweede platform BOVEN de eerste — extra sprong omhoog
          // hoog genoeg om met enkele sprong te halen, met ringen-rij erboven
          const breedte2 = (110 + Math.random() * 100) * SCHAAL;
          const xOff = Math.max(20 * SCHAAL, (breedte - breedte2) / 2);
          const platform2X = W + 20 + xOff;
          const platform2Y = PLATFORM_Y - 95 * SCHAAL;
          platforms.push({ x: platform2X, y: platform2Y, breedte: breedte2 });
          // bonus-ringen boven de hoge platform (4-5 op een rij)
          const aantalRingen = 4 + Math.floor(Math.random() * 2);
          const ringTussenruimte = Math.min(36 * SCHAAL, (breedte2 - 20 * SCHAAL) / aantalRingen);
          const ringStartX = platform2X + (breedte2 - ringTussenruimte * (aantalRingen - 1)) / 2;
          for (let i = 0; i < aantalRingen; i++) {
            ringen.push({
              x: ringStartX + i * ringTussenruimte,
              y: platform2Y - 28 * SCHAAL,
              fase: i * 0.4, opgepakt: false, grootte: 24 * SCHAAL,
            });
          }
          platformSpawnTeller = 360 + Math.floor(Math.random() * 240);
        } else if (variant < 0.55) {
          // 25%: tweede platform NAAST de eerste — platform-naar-platform sprong
          const gap = (40 + Math.random() * 60) * SCHAAL;
          const breedte2 = (140 + Math.random() * 120) * SCHAAL;
          platforms.push({ x: W + 20 + breedte + gap, y: PLATFORM_Y, breedte: breedte2 });
          platformSpawnTeller = 360 + Math.floor(Math.random() * 240);
        } else {
          // 45%: enkele platform
          platformSpawnTeller = 240 + Math.floor(Math.random() * 200);
        }
      }
      // platforms scrollen
      for (let i = platforms.length - 1; i >= 0; i--) {
        platforms[i].x -= effSnelheid;
        if (platforms[i].x + platforms[i].breedte < -20) platforms.splice(i, 1);
      }

      // Studiebol-logo achtergrond — af en toe een subtiel logo dat mee-scrollt
      if (!bonusFase) logoSpawnTeller--;
      if (logoSpawnTeller <= 0 && logoGeladen) {
        const grootte = (110 + Math.random() * 80) * SCHAAL;
        const y = (90 + Math.random() * 110) * SCHAAL;
        studiebolLogos.push({ x: W + grootte, y, grootte });
        logoSpawnTeller = 720 + Math.floor(Math.random() * 600); // 12-22 sec
      }
      for (let i = studiebolLogos.length - 1; i >= 0; i--) {
        studiebolLogos[i].x -= effSnelheid * 0.4; // langzaam = parallax
        if (studiebolLogos[i].x + studiebolLogos[i].grootte < -10) studiebolLogos.splice(i, 1);
      }

      // plafond-stekel spawn (~50/50 met grond-stekels)
      // start vanaf score 3 zodat speler eerst veilig kan inkomen
      // niet tijdens dungeon-mode (= onderwater, plafond-stekels onlogisch)
      if (!bonusFase) plafondStekelSpawnTeller--;
      if (plafondStekelSpawnTeller <= 0 && (score >= 3 || oblivionMode) && !dungeonMode && !hellMode && !bonusFase && !customLevelMode) {
        plafondStekels.push({
          x: W + 40,
          breedte: 26 * SCHAAL,
          hoogte: (24 + Math.random() * 14) * SCHAAL,
        });
        // Iets dichter dan voorheen (was 90+60) — meer luchtgevaar zodat
        // 'blijven zweven' niet langer een gratis safe-strategie is.
        // OBLIVION PULSE: extreem dicht (40-70 frames) — spikes overal.
        plafondStekelSpawnTeller = oblivionMode
          ? 40 + Math.floor(Math.random() * 30)
          : 70 + Math.floor(Math.random() * 50);
      }

      // plafond-stekels scrollen + collision
      for (let i = plafondStekels.length - 1; i >= 0; i--) {
        const ps = plafondStekels[i];
        ps.x -= effSnelheid;
        if (!bonusFase && vliegFrames === 0 && flipFrames === 0) {
          const stekelBot = (PLAFOND_HOOGTE - 4) + ps.hoogte;
          // hitbox iets krapper voor genadigheid
          const m = 4 * SCHAAL;
          if (
            speler.x + speler.breedte - m > ps.x + m
            && speler.x + m < ps.x + ps.breedte - m
            && speler.y + m < stekelBot
          ) {
            // plafond-stekel = spike → HP-damage ipv instant kill
            hitTotale();
            if (!spelLoopt) return;
          }
        }
        if (ps.x + ps.breedte < -10) plafondStekels.splice(i, 1);
      }

      // ── ZWEVENDE MIJNEN — middenzone-gevaar tegen 'altijd zweven' ──
      // Spawn vanaf score >= 5 zodat speler eerst de basis kan oefenen.
      // Niet tijdens dungeon (haaien doen het werk), niet tijdens schans-
      // veilig-frames, niet tijdens bonus.
      if (!bonusFase) zwevendeMineSpawnTeller--;
      if (
        zwevendeMineSpawnTeller <= 0
        && (score >= 5 || oblivionMode)
        && !dungeonMode
        && !hellMode
        && !bonusFase
        && !bossActief
        && !customLevelMode
        && schansVeiligeFrames <= 0
      ) {
        const r = (16 + Math.random() * 6) * SCHAAL;
        // middenzone tussen plafond en grond, met 60px marge boven/onder
        const yMin = (PLAFOND_HOOGTE - 4) + 60 * SCHAAL + r;
        const yMax = GROND_Y - 60 * SCHAAL - r;
        const baseY = yMin + Math.random() * Math.max(1, yMax - yMin);
        zwevendeMinen.push({
          x: W + 60,
          y: baseY,
          r,
          fase: Math.random() * Math.PI * 2,
          amp: (8 + Math.random() * 6) * SCHAAL, // bobbing-amplitude
        });
        // L1: 180-260 frames (3-4.3 sec) · L50: 100-160 frames · L100: 60-120
        // OBLIVION: 35-65 frames — overal mijnen
        let minM, varM;
        if (oblivionMode) {
          minM = 35; varM = 30;
        } else {
          minM = Math.max(60, 180 - huidigLevel * 1.2);
          varM = Math.max(40, 80 - huidigLevel * 0.4);
        }
        zwevendeMineSpawnTeller = Math.floor(minM) + Math.floor(Math.random() * varM);
      }

      // mijnen scrollen + bobbing + collision
      for (let i = zwevendeMinen.length - 1; i >= 0; i--) {
        const m = zwevendeMinen[i];
        m.x -= effSnelheid;
        m.fase += 0.08;
        if (!bonusFase && vliegFrames === 0 && flipFrames === 0) {
          // bol-vs-rect collision (royaler dan center-distance)
          const cy = m.y + Math.sin(m.fase) * m.amp;
          const sb = spelerBots();
          const closestX = Math.max(sb.x, Math.min(m.x, sb.x + sb.breedte));
          const closestY = Math.max(sb.y, Math.min(cy, sb.y + sb.hoogte));
          const dx = m.x - closestX;
          const dy = cy - closestY;
          const hitR = m.r * 0.85; // iets genadiger dan visuele radius
          if (dx * dx + dy * dy < hitR * hitR) {
            // explodeert — verwijder mijn, spawn rode flits
            zwevendeMinen.splice(i, 1);
            spawnParticles(m.x, cy, 18, "#ff5040", { spread: 9, opwaarts: 2, leven: 36, grootte: 5, zwaartekracht: 0.12, glow: 22 });
            spawnParticles(m.x, cy, 10, "#ffaa40", { spread: 6, opwaarts: 1.5, leven: 28, grootte: 4, zwaartekracht: 0.10, glow: 18 });
            piep(120, 0.18, "sawtooth", 0.16);
            hitTotale();
            if (!spelLoopt) return;
            continue;
          }
        }
        if (m.x + m.r < -20) zwevendeMinen.splice(i, 1);
      }

      // gouden ringen spawn — soms 1, soms een rij
      if (!bonusFase && !customLevelMode) ringSpawnTeller--;
      if (!bonusFase && !customLevelMode && ringSpawnTeller <= 0) {
        const isRij = Math.random() < 0.45;
        const yBase = (170 + Math.random() * 110) * SCHAAL;
        if (isRij) {
          const aantal = 3 + Math.floor(Math.random() * 3); // 3-5
          const tussenruimte = 36 * SCHAAL;
          // soms recht, soms boog (omhoog/omlaag)
          const boog = (Math.random() - 0.5) * 0.6; // -0.3 .. 0.3
          for (let i = 0; i < aantal; i++) {
            const yOff = boog * (i - (aantal - 1) / 2) * 30 * SCHAAL;
            const rainbow = rainbowActiefRef.current && Math.random() < 0.10;
            ringen.push({ x: W + 40 + i * tussenruimte, y: yBase + yOff, fase: i * 0.4, opgepakt: false, grootte: 24 * SCHAAL, rainbow });
          }
          ringSpawnTeller = 100 + Math.floor(Math.random() * 60);
        } else {
          const rainbow = rainbowActiefRef.current && Math.random() < 0.10;
          ringen.push({ x: W + 40, y: yBase, fase: 0, opgepakt: false, grootte: 24 * SCHAAL, rainbow });
          ringSpawnTeller = 70 + Math.floor(Math.random() * 50);
        }
      }
      // ringen update + pickup
      for (let i = ringen.length - 1; i >= 0; i--) {
        const r = ringen[i];
        r.x -= effSnelheid;
        // MAGNEET: trek ring naar speler binnen straal
        if (magneetFrames > 0 && !r.opgepakt) {
          const dxM = (speler.x + speler.breedte / 2) - r.x;
          const dyM = (speler.y + speler.hoogte / 2) - r.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < MAGNEET_RADIUS && distM > 0.1) {
            // trek-snelheid: sterker dichterbij
            const trek = MAGNEET_TREK * (1 - distM / MAGNEET_RADIUS) + 2;
            r.x += (dxM / distM) * trek;
            r.y += (dyM / distM) * trek;
          }
        }
        r.fase += 0.10;
        const dx = (speler.x + speler.breedte / 2) - r.x;
        const dy = (speler.y + speler.hoogte / 2) - r.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!r.opgepakt && dist < (r.grootte + speler.breedte) / 2) {
          r.opgepakt = true;
          streak++;
          // Munten: 1 ring = 1 munt (× 2 tijdens 2×-event, × 5 als rainbow-ring)
          const ringMunten = (r.rainbow ? 5 : 1) * (muntenMultiplierRef.current || 1);
          muntenRef.current += ringMunten;
          try { schrijfInt(muntenKey, muntenRef.current); } catch {}
          if (r.rainbow) {
            // extra particle-burst voor rainbow
            const rainbowKleuren = ["#ff5050", "#ffaa30", "#ffe040", "#69f0ae", "#40c0ff", "#a060ff"];
            for (let k = 0; k < 6; k++) {
              spawnParticles(r.x, r.y, 4, rainbowKleuren[k], { spread: 7, opwaarts: 3, leven: 40, grootte: 4, glow: 18 });
            }
          }
          const oudeMultiplier = multiplier;
          multiplier = Math.min(5, 1 + Math.floor(streak / 5));
          if (multiplier > oudeMultiplier) {
            multiplierFlashTeller = 60;
            spawnParticles(speler.x + 16 * SCHAAL, speler.y + 16 * SCHAAL, 18, "#69f0ae", { spread: 8, opwaarts: 3, leven: 35, grootte: 4, zwaartekracht: 0.15, glow: 18 });
            piep(660, 0.06, "sine", 0.12);
            setTimeout(() => piep(990, 0.06, "sine", 0.12), 60);
            setTimeout(() => piep(1320, 0.08, "sine", 0.10), 120);
          }
          // Level-bonus: hogere levels geven meer punten per ring zodat high-score
          // op L20+ haalbaar blijft ondanks de hogere obstakel-density.
          // Curve: L1=1×, L5=~1.6×, L10=~2.4×, L20=~3.9×, L50=~8.4×, L100=~15.9×.
          const levelFactor = 1 + (huidigLevel - 1) * 0.15;
          score += Math.max(1, Math.round(multiplier * levelFactor));
          scoreElText = score;

          // record-checks voor spanning-melding
          const pr = prRef.current;
          const wr = wrRef.current;
          if (pr > 0 && !prHintGedaan && score >= pr - 4 && score < pr) {
            prHintGedaan = true;
            recordBannerTekst = `🔥 Nog ${pr - score + 1} tot je record!`;
            recordBannerKleur = "#ffaa40";
            recordBannerTeller = 110;
          }
          if (pr > 0 && !prFlashGedaan && score > pr) {
            prFlashGedaan = true;
            recordBannerTekst = "🎉 NIEUW PERSOONLIJK RECORD!";
            recordBannerKleur = "#69f0ae";
            recordBannerTeller = 160;
            // confetti
            for (let p = 0; p < 24; p++) {
              const k = ["#69f0ae", "#ffd700", "#ffaa40"][p % 3];
              spawnParticles(W / 2 + (Math.random() - 0.5) * 200, H * 0.3, 1, k, { spread: 10, opwaarts: 4, leven: 60, grootte: 5, zwaartekracht: 0.18, glow: 18 });
            }
            piep(523, 0.1, "sine", 0.14);
            setTimeout(() => piep(659, 0.1, "sine", 0.14), 100);
            setTimeout(() => piep(784, 0.12, "sine", 0.14), 200);
          }
          if (wr > pr && !wrHintGedaan && score >= wr - 4 && score < wr) {
            wrHintGedaan = true;
            recordBannerTekst = `🌟 Nog ${wr - score + 1} tot WERELDRECORD!`;
            recordBannerKleur = "#ffd700";
            recordBannerTeller = 130;
          }
          if (wr > 0 && !wrFlashGedaan && score > wr && score > pr) {
            wrFlashGedaan = true;
            recordBannerTekst = "🌟 NIEUW WERELDRECORD! 🌟";
            recordBannerKleur = "#ffd700";
            recordBannerTeller = 200;
            // mega confetti
            for (let p = 0; p < 50; p++) {
              const k = ["#ffd700", "#ffaa00", "#fff", "#69f0ae"][p % 4];
              spawnParticles(W / 2 + (Math.random() - 0.5) * 300, H * 0.3, 1, k, { spread: 14, opwaarts: 5, leven: 80, grootte: 6, zwaartekracht: 0.18, glow: 22 });
            }
            piep(523, 0.1, "sine", 0.16);
            setTimeout(() => piep(659, 0.1, "sine", 0.16), 100);
            setTimeout(() => piep(784, 0.1, "sine", 0.16), 200);
            setTimeout(() => piep(1047, 0.20, "sine", 0.16), 300);
          }

          // ching!-sound
          piep(1320, 0.04, "sine", 0.10);
          setTimeout(() => piep(1760, 0.05, "sine", 0.08), 25);
          // gouden particles burst
          spawnParticles(r.x, r.y, 10, "#ffd700", { spread: 4, opwaarts: 1, leven: 22, grootte: 4, zwaartekracht: 0.08, glow: 18 });
          spawnParticles(r.x, r.y, 5, "#ffffaa", { spread: 2, opwaarts: 0.5, leven: 16, grootte: 3, zwaartekracht: 0, glow: 12 });
        }
        if (r.x < -50 || r.opgepakt) ringen.splice(i, 1);
      }

      // raket pickups
      for (let i = raketten.length - 1; i >= 0; i--) {
        const r = raketten[i];
        r.x -= effSnelheid;
        r.fase += 0.10;
        r.y += Math.sin(r.fase) * 0.4;
        const dx = (speler.x + speler.breedte / 2) - r.x;
        const dy = (speler.y + speler.hoogte / 2) - r.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!r.opgepakt && dist < (r.grootte + speler.breedte) / 2) {
          r.opgepakt = true;
          vliegFrames = VLIEG_DUUR;
          piep(523, 0.08, "sine", 0.14);
          setTimeout(() => piep(784, 0.08, "sine", 0.14), 60);
          setTimeout(() => piep(1047, 0.10, "sine", 0.14), 120);
          setTimeout(() => piep(1568, 0.14, "sine", 0.12), 200);
          spawnParticles(r.x, r.y, 24, "#ffcc40", { spread: 9, opwaarts: 2, leven: 35, grootte: 5, zwaartekracht: 0.05, glow: 22 });
          spawnParticles(r.x, r.y, 12, "#ff8050", { spread: 5, opwaarts: 3, leven: 28, grootte: 4, zwaartekracht: 0, glow: 18 });
        }
        if (r.x < -50 || r.opgepakt) raketten.splice(i, 1);
      }

      // vliegFrames decrement
      if (vliegFrames > 0) {
        vliegFrames--;
        // continue trail-emission tijdens vliegen
        if (frameTeller % 2 === 0) {
          spawnParticles(speler.x, speler.y + speler.hoogte / 2, 2, "#ffcc40", { spread: 1, opwaarts: 0, leven: 16, grootte: 3, zwaartekracht: 0, glow: 14 });
        }
      }

      // FLIP-pickups
      for (let i = flipPickups.length - 1; i >= 0; i--) {
        const f = flipPickups[i];
        f.x -= effSnelheid;
        f.fase += 0.10;
        f.y += Math.sin(f.fase) * 0.4;
        const dx = (speler.x + speler.breedte / 2) - f.x;
        const dy = (speler.y + speler.hoogte / 2) - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!f.opgepakt && dist < (f.grootte + speler.breedte) / 2) {
          f.opgepakt = true;
          flipPending = FLIP_PENDING_DUUR;
          piep(440, 0.10, "sine", 0.14);
          setTimeout(() => piep(330, 0.10, "sine", 0.14), 120);
          spawnParticles(f.x, f.y, 22, "#80c0ff", { spread: 8, opwaarts: 2, leven: 32, grootte: 5, zwaartekracht: 0.05, glow: 22 });
          spawnParticles(f.x, f.y, 12, "#c060ff", { spread: 5, opwaarts: 3, leven: 28, grootte: 4, zwaartekracht: 0, glow: 18 });
        }
        if (f.x < -50 || f.opgepakt) flipPickups.splice(i, 1);
      }

      // MAGNEET-pickups
      for (let i = magneetPickups.length - 1; i >= 0; i--) {
        const m = magneetPickups[i];
        m.x -= effSnelheid;
        m.fase += 0.10;
        m.y += Math.sin(m.fase) * 0.4;
        const dx = (speler.x + speler.breedte / 2) - m.x;
        const dy = (speler.y + speler.hoogte / 2) - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!m.opgepakt && dist < (m.grootte + speler.breedte) / 2) {
          m.opgepakt = true;
          magneetFrames = MAGNEET_DUUR;
          piep(660, 0.06, "sine", 0.14);
          setTimeout(() => piep(880, 0.06, "sine", 0.14), 50);
          setTimeout(() => piep(1100, 0.10, "sine", 0.12), 110);
          spawnParticles(m.x, m.y, 22, "#40c0ff", { spread: 8, opwaarts: 2, leven: 32, grootte: 5, zwaartekracht: 0.05, glow: 22 });
          spawnParticles(m.x, m.y, 12, "#80e0ff", { spread: 5, opwaarts: 3, leven: 28, grootte: 4, zwaartekracht: 0, glow: 18 });
        }
        if (m.x < -50 || m.opgepakt) magneetPickups.splice(i, 1);
      }
      if (magneetFrames > 0) {
        magneetFrames--;
        // visuele aura: af en toe een blauw deeltje rond speler
        if (frameTeller % 6 === 0) {
          spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 1, "#80e0ff", { spread: 4, opwaarts: 0, leven: 18, grootte: 3, zwaartekracht: 0, glow: 14 });
        }
      }

      // SLOW-MO-pickups
      for (let i = slowMoPickups.length - 1; i >= 0; i--) {
        const s = slowMoPickups[i];
        s.x -= effSnelheid;
        s.fase += 0.10;
        s.y += Math.sin(s.fase) * 0.4;
        const dx = (speler.x + speler.breedte / 2) - s.x;
        const dy = (speler.y + speler.hoogte / 2) - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!s.opgepakt && dist < (s.grootte + speler.breedte) / 2) {
          s.opgepakt = true;
          slowFrames = SLOW_DUUR;
          piep(440, 0.12, "sine", 0.12);
          setTimeout(() => piep(330, 0.14, "sine", 0.12), 100);
          setTimeout(() => piep(220, 0.18, "sine", 0.10), 220);
          spawnParticles(s.x, s.y, 22, "#a060ff", { spread: 8, opwaarts: 2, leven: 32, grootte: 5, zwaartekracht: 0.05, glow: 22 });
          spawnParticles(s.x, s.y, 12, "#c080ff", { spread: 5, opwaarts: 3, leven: 28, grootte: 4, zwaartekracht: 0, glow: 18 });
        }
        if (s.x < -50 || s.opgepakt) slowMoPickups.splice(i, 1);
      }
      if (slowFrames > 0) slowFrames--;

      // BOMB-pickups
      for (let i = bombPickups.length - 1; i >= 0; i--) {
        const b = bombPickups[i];
        b.x -= effSnelheid;
        b.fase += 0.10;
        b.y += Math.sin(b.fase) * 0.4;
        const dx = (speler.x + speler.breedte / 2) - b.x;
        const dy = (speler.y + speler.hoogte / 2) - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!b.opgepakt && dist < (b.grootte + speler.breedte) / 2) {
          b.opgepakt = true;
          bombFlash = 30;
          // explosie-particles op alle obstakel-locaties (grond + plafond)
          for (const o of obstakels) {
            const cx = o.x + (o.breedte || 12) / 2;
            const cy = o.y + (o.hoogte || 30) / 2;
            spawnParticles(cx, cy, 12, "#ff5040", { spread: 8, opwaarts: 4, leven: 35, grootte: 5, zwaartekracht: 0.15, glow: 22 });
            spawnParticles(cx, cy, 6, "#ffaa40", { spread: 5, opwaarts: 3, leven: 28, grootte: 4, zwaartekracht: 0.1, glow: 18 });
          }
          for (const ps of plafondStekels) {
            const cx = ps.x + (ps.breedte || 12) / 2;
            const cy = ps.y + (ps.hoogte || 30) / 2;
            spawnParticles(cx, cy, 10, "#ff5040", { spread: 8, opwaarts: -3, leven: 35, grootte: 5, zwaartekracht: 0.15, glow: 22 });
          }
          for (const m of zwevendeMinen) {
            const cy = m.y + Math.sin(m.fase) * m.amp;
            spawnParticles(m.x, cy, 14, "#ff5040", { spread: 9, opwaarts: 2, leven: 38, grootte: 5, zwaartekracht: 0.12, glow: 22 });
            spawnParticles(m.x, cy, 8, "#ffaa40", { spread: 6, opwaarts: 1.5, leven: 28, grootte: 4, zwaartekracht: 0.10, glow: 18 });
          }
          obstakels.length = 0;
          customDecoraties.length = 0;
          plafondStekels.length = 0;
          zwevendeMinen.length = 0;
          shakeKracht = Math.max(shakeKracht, 10);
          // explosie-sound: lage rumble + hoge fizz
          piep(80, 0.25, "sawtooth", 0.18);
          piep(140, 0.20, "square", 0.10);
          setTimeout(() => piep(220, 0.20, "sawtooth", 0.12), 80);
          setTimeout(() => piep(440, 0.10, "sine", 0.10), 200);
        }
        if (b.x < -50 || b.opgepakt) bombPickups.splice(i, 1);
      }
      if (bombFlash > 0) bombFlash--;

      // FLIP pending countdown -> trigger flip
      if (flipPending > 0) {
        flipPending--;
        if (flipPending === 0) {
          // kick off de flip!
          flipFrames = FLIP_DUUR;
          speler.y = PLAFOND_NIVEAU;
          speler.snelheidY = 0;
          speler.springt = false;
          speler.sprongTeller = 0;
          shakeKracht = 12;
          // GO sound
          piep(660, 0.10, "sine", 0.14);
          setTimeout(() => piep(990, 0.12, "sine", 0.14), 80);
        }
      }

      // FLIP frames decrement
      if (flipFrames > 0) {
        flipFrames--;
        // trail bij plafond (omhoog wijzend)
        if (frameTeller % 3 === 0) {
          spawnParticles(speler.x, speler.y + speler.hoogte / 2, 2, "#80c0ff", { spread: 1, opwaarts: -0.5, leven: 18, grootte: 3, zwaartekracht: -0.05, glow: 14 });
        }
        if (flipFrames === 0) {
          // flip-eind: GO terug naar normaal
          shakeKracht = 8;
          piep(330, 0.12, "sine", 0.12);
        }
      }

      if (multiplierFlashTeller > 0) multiplierFlashTeller--;
      if (recordBannerTeller > 0) recordBannerTeller--;
      if (shakeKracht > 0) shakeKracht *= 0.85;

      // ───── BOSS-FASE ─────
      if (bossActief) {
        bossPulse += 0.08;
        // boss zweeft licht op-en-neer
        bossY = H * 0.42 + Math.sin(bossPulse * 0.5) * 18 * SCHAAL;

        // SPELER-LASERS scrollen naar rechts, raken boss?
        for (let i = spelerLasers.length - 1; i >= 0; i--) {
          const l = spelerLasers[i];
          l.x += SPELER_LASER_SNELHEID;
          // raak boss?
          const dx = l.x - bossX;
          const dy = l.y - bossY;
          if (Math.abs(dx) < bossGrootte / 2 && Math.abs(dy) < bossGrootte / 2) {
            bossHp -= BOSS_LASER_DAMAGE;
            spawnParticles(l.x, l.y, 8, "#ffcc40", { spread: 4, opwaarts: 1, leven: 18, grootte: 3, zwaartekracht: 0, glow: 14 });
            piep(440 + Math.random() * 200, 0.04, "square", 0.06);
            spelerLasers.splice(i, 1);
            shakeKracht = Math.max(shakeKracht, 4);
            if (bossHp <= 0) { bossWin(); break; }
            continue;
          }
          if (l.x > W + 20) spelerLasers.splice(i, 1);
        }

        // BOSS ATTACKS — schiet projectielen naar speler
        bossAanvalTeller--;
        if (bossAanvalTeller <= 0 && bossHp > 0) {
          bossAanvalTeller = Math.max(20, bossAanvalIntervalHuidig - Math.floor((bossMaxHpHuidig - bossHp) / 20) * 10); // sneller bij lager HP
          // schiet richting speler-positie op moment van vuren
          const tgtX = speler.x + speler.breedte / 2;
          const tgtY = speler.y + speler.hoogte / 2;
          const dx = tgtX - bossX;
          const dy = tgtY - bossY;
          const len = Math.sqrt(dx * dx + dy * dy);
          bossLasers.push({
            x: bossX - bossGrootte * 0.3,
            y: bossY,
            vx: (dx / len) * BOSS_PROJECTIEL_SNELHEID,
            vy: (dy / len) * BOSS_PROJECTIEL_SNELHEID,
          });
          piep(165, 0.10, "sawtooth", 0.10);
        }

        // BOSS-LASERS bewegen + collision met speler
        const sb = spelerBots();
        if (bossHitInvincibility > 0) bossHitInvincibility--;
        for (let i = bossLasers.length - 1; i >= 0; i--) {
          const bl = bossLasers[i];
          bl.x += bl.vx;
          bl.y += bl.vy;
          // trail particle voor zichtbaarheid
          if (frameTeller % 2 === 0) {
            particles.push(new Particle(bl.x, bl.y, "#ff8050", { spread: 1, opwaarts: 0, leven: 14, grootte: 3, zwaartekracht: 0, glow: 8 }));
          }
          // raakt speler? alleen als geen vlieg-immune en geen recente hit-cooldown
          if (vliegFrames === 0 && bossHitInvincibility === 0
              && bl.x >= sb.x && bl.x <= sb.x + sb.breedte
              && bl.y >= sb.y && bl.y <= sb.y + sb.hoogte) {
            bossLasers.splice(i, 1);
            bossLevens--;
            // hit-effects
            shakeKracht = 16;
            spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 18, "#ff4040", { spread: 8, opwaarts: 2, leven: 30, grootte: 4, zwaartekracht: 0.1, glow: 18 });
            piep(220, 0.15, "sawtooth", 0.18);
            if (bossLevens <= 0) {
              // alle boss-levens op = leven kwijt, boss reset (kun je opnieuw proberen)
              levenVerlies();
              return;
            }
            // korte invincibility na hit (1 sec) zodat snelle vuren niet alles weghaalt
            bossHitInvincibility = 60;
          }
          if (bl.x < -20 || bl.x > W + 20 || bl.y < -20 || bl.y > H + 20) {
            bossLasers.splice(i, 1);
          }
        }
      }
      if (bossWinAnim > 0) bossWinAnim--;
    }
    function tekenLevens() {
      ctx.save();
      ctx.font = `${22 * SCHAAL}px serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      for (let i = 0; i < startLevens; i++) {
        const heeft = i < levens;
        ctx.globalAlpha = heeft ? 1 : 0.3;
        if (heeft) { ctx.shadowBlur = 14; ctx.shadowColor = "#ff4040"; } else { ctx.shadowBlur = 0; }
        ctx.fillText(heeft ? "❤️" : "🖤", 12 + i * 28 * SCHAAL, 78 * SCHAAL);
      }
      ctx.restore();
      // HP-balk vlak onder de hartjes — toont schade-buffer voor huidige leven
      tekenHpBalk();
    }
    function tekenHpBalk() {
      const balkX = 12;
      const balkY = (78 + 28) * SCHAAL;
      const balkW = 110 * SCHAAL;
      const balkH = 8 * SCHAAL;
      const fractie = Math.max(0, Math.min(1, hp / HP_MAX));

      ctx.save();
      // achtergrond donker
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(balkX - 1, balkY - 1, balkW + 2, balkH + 2);
      // gevulde gedeelte: groen → geel → rood naarmate hp daalt
      let kleur;
      if (fractie > 0.6) kleur = "#69f0ae";
      else if (fractie > 0.3) kleur = "#ffcc40";
      else kleur = "#ff5040";
      // pulserend rood-flits net na hit
      const flits = hpFlashTeller > 0 ? Math.sin(frameTeller * 0.5) * 0.3 + 0.7 : 1;
      ctx.shadowBlur = 10;
      ctx.shadowColor = kleur;
      ctx.fillStyle = kleur;
      ctx.globalAlpha = flits;
      ctx.fillRect(balkX, balkY, balkW * fractie, balkH);
      ctx.globalAlpha = 1;
      // outline + kleine HP-tekst
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth = 1;
      ctx.strokeRect(balkX - 0.5, balkY - 0.5, balkW + 1, balkH + 1);
      ctx.fillStyle = "#ffffff";
      ctx.font = `bold ${10 * SCHAAL}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(`HP ${Math.round(hp)}`, balkX + balkW + 6, balkY - 1);
      ctx.restore();
    }

    function tekenLevelProgressie() {
      // Tijdens boss: HP-balk is voldoende, balk verbergen
      if (bossActief || bossWinAnim > 0) return;
      // Balk helemaal bovenaan canvas (boven score-rij die op y=28 staat)
      const balkX = 28 * SCHAAL;
      const balkY = 8 * SCHAAL;
      const balkW = W - balkX - 28 * SCHAAL;
      const balkH = 12 * SCHAAL;

      // tijd binnen huidigLevel berekenen (vanaf level-startpunt)
      const tijdInDitLevel = frameTeller - (huidigLevel - 1) * LEVEL_DUUR_FRAMES;
      const fractie = Math.max(0, Math.min(1, tijdInDitLevel / LEVEL_DUUR_FRAMES));

      const isBossNext = BOSS_TRIGGER_LEVELS.includes(huidigLevel);
      const bossNextNr = Math.floor((huidigLevel + 5) / 5) - 1; // welk boss-nummer komt er
      const bossEmojiSet = ["🤖","👽","🛸","🦑","👁️","🐙","🦠","☄️","🪐","⚡","🚀","🌌","🛰️","🦂","🐲","🔱","🌑","⚙️","🦖"];
      const eindEmoji = isBossNext ? bossEmojiSet[Math.min(bossEmojiSet.length - 1, Math.max(0, bossNextNr - 1))] : "🏁";
      const eindKleur = isBossNext ? "#ff4040" : "#69f0ae";
      const fillKleur = isBossNext && fractie > 0.7 ? "#ff8050" : "#69f0ae";

      ctx.save();
      // background
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(balkX, balkY, balkW, balkH);
      // border
      ctx.strokeStyle = `rgba(${isBossNext ? "255,80,80" : "255,255,255"},0.5)`;
      ctx.lineWidth = 1;
      ctx.strokeRect(balkX, balkY, balkW, balkH);
      // progress fill
      ctx.fillStyle = fillKleur;
      ctx.shadowBlur = 10;
      ctx.shadowColor = fillKleur;
      ctx.fillRect(balkX + 2, balkY + 2, (balkW - 4) * fractie, balkH - 4);

      // begin-icoon (links, kasteel)
      ctx.shadowBlur = 0;
      ctx.font = `${balkH * 1.1}px serif`;
      ctx.textAlign = "right"; ctx.textBaseline = "middle";
      ctx.fillStyle = "#fff";
      ctx.fillText("🏰", balkX - 4, balkY + balkH / 2);

      // eind-icoon (rechts, vlag of monster) — pulserend bij boss-next
      const pulseEnd = isBossNext ? 0.7 + Math.sin(frameTeller * 0.15) * 0.3 : 1;
      ctx.globalAlpha = pulseEnd;
      ctx.textAlign = "left"; ctx.textBaseline = "middle";
      ctx.fillText(eindEmoji, balkX + balkW + 4, balkY + balkH / 2);
      ctx.globalAlpha = 1;

      // speler-marker (witte pulserende punt)
      const playerMarkX = balkX + 2 + (balkW - 4) * fractie;
      const pulse = 0.7 + Math.sin(frameTeller * 0.2) * 0.3;
      ctx.shadowBlur = 14;
      ctx.shadowColor = "#fff";
      ctx.fillStyle = `rgba(255,255,255,${pulse})`;
      ctx.beginPath();
      ctx.arc(playerMarkX, balkY + balkH / 2, balkH * 0.55, 0, Math.PI * 2);
      ctx.fill();

      // label onder balk: groter "LEVEL 3" + waarschuwing als boss-next
      ctx.shadowBlur = 8;
      ctx.shadowColor = isBossNext ? "#ff5030" : "#69f0ae";
      ctx.fillStyle = isBossNext ? "#ff8050" : "#69f0ae";
      ctx.font = `bold ${17 * SCHAAL}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText(
        `${moeilijkheidEmoji(huidigLevel)} LEVEL ${huidigLevel}${huidigLevel >= MAX_LEVEL ? " (MAX)" : ""}${isBossNext ? " — BOSS NEXT!" : ""}`,
        balkX + balkW / 2,
        balkY + balkH + 4,
      );

      ctx.restore();
    }
    function teken() {
      // Cutscene? — overschrijft alles met de Oblivion-Pulse intro.
      if (cutsceneFase !== "geen") {
        tekenCutscene();
        return;
      }
      ctx.save();
      if (shakeKracht > 0.5) ctx.translate((Math.random() - 0.5) * shakeKracht, (Math.random() - 0.5) * shakeKracht);
      if (oblivionMode) {
        // Oblivion-Pulse mode: ruimte-achtergrond
        tekenRuimteAchtergrond();
      } else if (bossActief) {
        // BOSS: pikzwarte bg met donker-rode vignette voor dreiging
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H);
        const bossGlow = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.18, W / 2, H / 2, Math.max(W, H) * 0.75);
        bossGlow.addColorStop(0, "rgba(60, 0, 0, 0)");
        bossGlow.addColorStop(0.6, "rgba(80, 0, 0, 0.30)");
        bossGlow.addColorStop(1, "rgba(140, 0, 0, 0.55)");
        ctx.fillStyle = bossGlow;
        ctx.fillRect(0, 0, W, H);
        // grond moet wel zichtbaar — speler heeft 'm nodig
        tekenGrond();
      } else if (hellMode) {
        // Hell-mode: dark-red bg + parallax-rotsen + lava-grond. Skip de
        // bakstenen-muur, glas-in-lood, lichtbundels, fakkels, plafond.
        tekenHellAchtergrond();
        tekenLavaGrond();
      } else {
        tekenBakstenenMuur(); tekenGlasInLood();
        // Studiebol-logo subtiel op de muur (achter lichtbundels en decoratie)
        if (logoGeladen && studiebolLogos.length) {
          ctx.save();
          ctx.globalAlpha = 0.42;
          for (const l of studiebolLogos) {
            ctx.drawImage(logoImg, l.x, l.y, l.grootte, l.grootte);
          }
          ctx.restore();
        }
        tekenLichtbundels(); tekenDecoraties(); tekenFakkels(); tekenPlafond(); tekenGrond(); tekenMist();
      }

      // tint tijdens FLIP
      if (flipFrames > 0) {
        const eindigtBijna = flipFrames < 90;
        ctx.save();
        ctx.globalCompositeOperation = "overlay";
        ctx.fillStyle = eindigtBijna
          ? `rgba(255,80,80,${0.15 + Math.sin(frameTeller * 0.3) * 0.05})`
          : `rgba(80,140,255,0.20)`;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
      }
      // tint tijdens SLOW-MO (paars-violet)
      if (slowFrames > 0) {
        ctx.save();
        ctx.globalCompositeOperation = "overlay";
        ctx.fillStyle = `rgba(160,96,255,0.16)`;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
      }
      // BOMB-flash (witte explosie-flash, fade-out)
      if (bombFlash > 0) {
        const alpha = bombFlash / 30;
        ctx.save();
        ctx.fillStyle = `rgba(255,200,100,${alpha * 0.5})`;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
      }
      // BLIKSEM-FLITS: witte flash over hele scherm + zigzag-bolt
      if (bliksemFlash > 0) {
        const t = bliksemFlash / 13; // genormaliseerd 0-1
        // witte flash met blauwe tint
        ctx.save();
        ctx.fillStyle = `rgba(220,235,255,${0.55 + t * 0.35})`;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
        // zigzag-bolt
        if (bliksemBoltPath && bliksemBoltPath.length > 1) {
          ctx.save();
          ctx.shadowBlur = 28;
          ctx.shadowColor = "#a0d8ff";
          ctx.strokeStyle = "rgba(255,255,255,0.95)";
          ctx.lineWidth = 4 * SCHAAL;
          ctx.beginPath();
          ctx.moveTo(bliksemBoltPath[0].x, bliksemBoltPath[0].y);
          for (let i = 1; i < bliksemBoltPath.length; i++) {
            ctx.lineTo(bliksemBoltPath[i].x, bliksemBoltPath[i].y);
          }
          ctx.stroke();
          // glow-rand eromheen (dikkere transparante lijn)
          ctx.strokeStyle = "rgba(160,210,255,0.6)";
          ctx.lineWidth = 12 * SCHAAL;
          ctx.stroke();
          ctx.restore();
        }
      }

      for (const p of particles) p.teken();
      // platforms (achter de speler getekend) — Hell-stijl tijdens hellMode
      for (const p of platforms) {
        if (hellMode || p.hell) { tekenHellPlatform(p); continue; }
        ctx.save();
        // glow rondom platform
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#80c0ff";
        // body — gradient van licht naar donkerder cyaan
        const grad = ctx.createLinearGradient(0, p.y, 0, p.y + PLATFORM_HOOGTE);
        grad.addColorStop(0, "#a0e0ff");
        grad.addColorStop(0.5, "#60a8e8");
        grad.addColorStop(1, "#3070b8");
        ctx.fillStyle = grad;
        ctx.fillRect(p.x, p.y, p.breedte, PLATFORM_HOOGTE);
        // wit highlight bovenaan
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(255,255,255,0.65)";
        ctx.fillRect(p.x + 2, p.y + 1, p.breedte - 4, 2);
        // donkere randje onder
        ctx.fillStyle = "rgba(20,40,80,0.6)";
        ctx.fillRect(p.x, p.y + PLATFORM_HOOGTE - 2, p.breedte, 2);
        // outline
        ctx.strokeStyle = "rgba(255,255,255,0.8)";
        ctx.lineWidth = 1;
        ctx.strokeRect(p.x + 0.5, p.y + 0.5, p.breedte - 1, PLATFORM_HOOGTE - 1);
        ctx.restore();
      }
      // Custom-decoraties — visueel-only background (boom/wolk/etc. uit custom-levels)
      if (customDecoraties.length > 0) {
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        for (const d of customDecoraties) {
          const meta = DECOR_RENDER[d.type];
          if (!meta) continue;
          const grootte = meta.grootte * SCHAAL;
          ctx.font = `${grootte}px sans-serif`;
          // Subtiele bob voor lucht-decor (vlinder/vogel/wolk/maan)
          let dy = 0;
          if (meta.bob) {
            const t = performance.now() / 1000;
            dy = Math.sin(t * meta.bob.snelheid + (d.fase || 0)) * meta.bob.amp * SCHAAL;
          }
          ctx.globalAlpha = meta.alpha != null ? meta.alpha : 1;
          ctx.fillText(meta.emoji, d.x, d.y + dy);
        }
        ctx.restore();
      }
      // Fans (spandoek met highscore-naam) op achtergrond, vóór speler/obstakels
      for (const f of fans) tekenFanGroep(f);
      tekenSpeler();
      // PvP ghost — toon tegenstander iets links naast speler in semi-transparant
      if (pvpMatch) tekenGhost();
      for (const o of obstakels) tekenObstakel(o);
      for (const sc of schansen) tekenSchans(sc);
      for (const p of portals) tekenPortal(p);
      for (const ps of plafondStekels) tekenPlafondStekel(ps.x, ps.breedte, ps.hoogte);
      for (const m of zwevendeMinen) tekenZwevendeMine(m);

      // ───── BOSS render ─────
      if (bossActief) {
        // boss-tint shift: licht (volle HP) → rood (HP=0)
        const hpFractie = Math.max(0, bossHp / bossMaxHpHuidig);
        const r = 255;
        const g = Math.floor(180 * hpFractie);
        const b = Math.floor(120 * hpFractie);
        // pulserend glow
        const pulse = 0.7 + Math.sin(bossPulse) * 0.2;
        ctx.save();
        ctx.translate(bossX, bossY);
        ctx.shadowBlur = 30 + (1 - hpFractie) * 25; // intenser bij minder HP
        ctx.shadowColor = `rgb(${r},${g},${b})`;
        // monster-cirkel
        const grad = ctx.createRadialGradient(-bossGrootte * 0.2, -bossGrootte * 0.2, bossGrootte * 0.1, 0, 0, bossGrootte * 0.55);
        grad.addColorStop(0, `rgba(${r},${Math.min(255, g + 50)},${Math.min(255, b + 50)},${pulse})`);
        grad.addColorStop(0.6, `rgb(${r},${g},${b})`);
        grad.addColorStop(1, `rgba(${Math.floor(r * 0.6)},${Math.floor(g * 0.4)},${Math.floor(b * 0.4)},1)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, bossGrootte * 0.5, 0, Math.PI * 2);
        ctx.fill();
        // donker outline
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(80,0,0,0.7)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, bossGrootte * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        // monster-emoji wisselt per boss-fight nummer (1=L5, 2=L10, ... 19=L95)
        const bossEmojis = ["🤖","👽","🛸","🦑","👁️","🐙","🦠","☄️","🪐","⚡","🚀","🌌","🛰️","🦂","🐲","🔱","🌑","⚙️","🦖"];
        const bossNr = Math.floor(huidigLevel / 5) - 1; // L5→0, L10→1, L95→18
        const emoji = bossEmojis[Math.min(bossEmojis.length - 1, Math.max(0, bossNr))];
        ctx.shadowBlur = 12; ctx.shadowColor = "#000";
        ctx.font = `${bossGrootte * 0.55}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(emoji, 0, 0);
        ctx.restore();

        // HP-balk boven boss
        ctx.save();
        const hpBalkW = bossGrootte * 0.9;
        const hpBalkH = 10 * SCHAAL;
        const hpBalkX = bossX - hpBalkW / 2;
        const hpBalkY = bossY - bossGrootte * 0.55 - 18 * SCHAAL;
        // background
        ctx.fillStyle = "rgba(0,0,0,0.65)";
        ctx.fillRect(hpBalkX - 2, hpBalkY - 2, hpBalkW + 4, hpBalkH + 4);
        // fill (kleur shift met HP)
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(hpBalkX, hpBalkY, hpBalkW * hpFractie, hpBalkH);
        // border
        ctx.strokeStyle = "rgba(255,255,255,0.7)";
        ctx.lineWidth = 1;
        ctx.strokeRect(hpBalkX, hpBalkY, hpBalkW, hpBalkH);
        // text
        ctx.fillStyle = "#fff";
        ctx.shadowBlur = 8; ctx.shadowColor = "#000";
        ctx.font = `bold ${10 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`BOSS HP ${Math.max(0, Math.ceil(bossHp))} / ${bossMaxHpHuidig}`, bossX, hpBalkY + hpBalkH / 2);
        ctx.restore();

        // BOSS-LEVENS hartjes (links bovenin, naast normale levens)
        ctx.save();
        ctx.font = `${20 * SCHAAL}px serif`;
        ctx.textAlign = "left"; ctx.textBaseline = "top";
        ctx.shadowBlur = 12; ctx.shadowColor = "#ff4040";
        for (let i = 0; i < BOSS_LEVENS_MAX; i++) {
          const heeft = i < bossLevens;
          ctx.globalAlpha = heeft ? 1 : 0.25;
          ctx.fillText(heeft ? "💚" : "🤍", 12 + i * 26 * SCHAAL, 108 * SCHAAL);
        }
        ctx.restore();

        // SPELER lasers — dik cyaan-groen met witte kern voor maximale zichtbaarheid
        for (const l of spelerLasers) {
          ctx.save();
          // outer glow
          ctx.shadowBlur = 24; ctx.shadowColor = "#69f0ae";
          ctx.strokeStyle = "#a0ffce";
          ctx.lineWidth = 7 * SCHAAL;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(l.x - 28 * SCHAAL, l.y);
          ctx.lineTo(l.x, l.y);
          ctx.stroke();
          // witte kern
          ctx.shadowBlur = 0;
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 3 * SCHAAL;
          ctx.beginPath();
          ctx.moveTo(l.x - 28 * SCHAAL, l.y);
          ctx.lineTo(l.x, l.y);
          ctx.stroke();
          ctx.restore();
        }
        // BOSS lasers — grote 3-laagse rode bol + gele kern
        for (const bl of bossLasers) {
          ctx.save();
          // outer glow
          ctx.shadowBlur = 26; ctx.shadowColor = "#ff3030";
          ctx.fillStyle = "#ff3030";
          ctx.beginPath();
          ctx.arc(bl.x, bl.y, 13 * SCHAAL, 0, Math.PI * 2);
          ctx.fill();
          // middle oranje
          ctx.shadowBlur = 0;
          ctx.fillStyle = "#ffaa20";
          ctx.beginPath();
          ctx.arc(bl.x, bl.y, 8 * SCHAAL, 0, Math.PI * 2);
          ctx.fill();
          // kern wit-geel
          ctx.fillStyle = "#ffffaa";
          ctx.beginPath();
          ctx.arc(bl.x, bl.y, 3.5 * SCHAAL, 0, Math.PI * 2);
          ctx.fill();
          // pulsende witte rand
          ctx.strokeStyle = `rgba(255,255,255,${0.6 + Math.sin(frameTeller * 0.4) * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(bl.x, bl.y, 13 * SCHAAL, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }

      // BOSS WIN banner
      if (bossWinAnim > 0) {
        const fade = Math.min(1, bossWinAnim / 30);
        ctx.save();
        ctx.globalAlpha = fade;
        ctx.fillStyle = "rgba(0,80,40,0.85)";
        ctx.fillRect(0, H * 0.30, W, H * 0.40);
        ctx.fillStyle = "#69f0ae";
        ctx.shadowBlur = 35; ctx.shadowColor = "#69f0ae";
        ctx.font = `bold ${44 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🏆 BOSS DEFEATED!", W / 2, H * 0.42);
        ctx.font = `bold ${20 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.fillStyle = "#fff";
        ctx.fillText("+50 SCORE · +1 LEVEN", W / 2, H * 0.55);
        ctx.restore();
      }

      // gouden ringen tekenen (rainbow-rings krijgen regenboog-stroke)
      for (const r of ringen) {
        const pulse = 0.85 + Math.sin(r.fase * 2) * 0.15;
        ctx.save();
        ctx.translate(r.x, r.y);
        ctx.scale(pulse, 1);
        if (r.rainbow) {
          // Rainbow ring — 6 kleur-segmenten + sterke glow
          ctx.shadowBlur = 28;
          ctx.shadowColor = "#ff80ff";
          const kleuren = ["#ff5050", "#ffaa30", "#ffe040", "#69f0ae", "#40c0ff", "#a060ff"];
          ctx.lineWidth = 5;
          for (let k = 0; k < 6; k++) {
            ctx.strokeStyle = kleuren[k];
            ctx.beginPath();
            ctx.arc(0, 0, r.grootte * 0.5, (k / 6) * Math.PI * 2 + r.fase, ((k + 1) / 6) * Math.PI * 2 + r.fase);
            ctx.stroke();
          }
          ctx.restore();
          continue; // skip rest van standaard rendering
        }
        // Extra dikke glow tijdens dungeon-mode zodat ringen niet wegtinten
        // achter de blauwe water-overlay (Mark's klacht: 'ringen niet helder').
        if (dungeonMode) {
          ctx.shadowBlur = 30;
          ctx.shadowColor = "#fff8a0";
          ctx.strokeStyle = "rgba(255, 248, 160, 0.55)";
          ctx.lineWidth = 9;
          ctx.beginPath();
          ctx.arc(0, 0, r.grootte * 0.5, 0, Math.PI * 2);
          ctx.stroke();
        }
        // outer gouden ring
        ctx.shadowBlur = dungeonMode ? 40 : 22;
        ctx.shadowColor = "#ffd700";
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = dungeonMode ? 5.5 : 4;
        ctx.beginPath();
        ctx.arc(0, 0, r.grootte * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        // inner darker rim
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "#cc9900";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, r.grootte * 0.5 - 3, 0, Math.PI * 2);
        ctx.stroke();
        // wit glansje (sonic-stijl highlight)
        ctx.fillStyle = "rgba(255,255,200,0.85)";
        ctx.beginPath();
        ctx.arc(-r.grootte * 0.18, -r.grootte * 0.18, r.grootte * 0.07, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // schild-pickups tekenen (was vroeger 🚀, nu 🛡️ — past beter bij effect "onkwetsbaar")
      for (const r of raketten) {
        ctx.save();
        ctx.translate(r.x, r.y);
        // pulserende cirkel rondom schild
        ctx.shadowBlur = 24;
        ctx.shadowColor = "#ffcc40";
        ctx.strokeStyle = `rgba(255,204,64,${0.4 + Math.sin(r.fase * 2) * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, r.grootte * 0.75, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = `${r.grootte}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🛡️", 0, 0);
        ctx.restore();
      }

      // FLIP-pickups tekenen
      for (const f of flipPickups) {
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.shadowBlur = 24;
        ctx.shadowColor = "#80c0ff";
        ctx.strokeStyle = `rgba(128,192,255,${0.4 + Math.sin(f.fase * 2) * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, f.grootte * 0.75, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = `${f.grootte}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🔄", 0, 0);
        ctx.restore();
      }

      // MAGNEET-pickups tekenen
      for (const m of magneetPickups) {
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.shadowBlur = 24;
        ctx.shadowColor = "#40c0ff";
        ctx.strokeStyle = `rgba(64,192,255,${0.4 + Math.sin(m.fase * 2) * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, m.grootte * 0.75, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = `${m.grootte}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🧲", 0, 0);
        ctx.restore();
      }

      // SLOW-MO-pickups tekenen
      for (const s of slowMoPickups) {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.shadowBlur = 24;
        ctx.shadowColor = "#a060ff";
        ctx.strokeStyle = `rgba(160,96,255,${0.4 + Math.sin(s.fase * 2) * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, s.grootte * 0.75, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = `${s.grootte}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🐌", 0, 0);
        ctx.restore();
      }

      // BOMB-pickups tekenen
      for (const b of bombPickups) {
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.shadowBlur = 24;
        ctx.shadowColor = "#ff5040";
        ctx.strokeStyle = `rgba(255,80,64,${0.4 + Math.sin(b.fase * 2) * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, b.grootte * 0.75, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = `${b.grootte}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("💥", 0, 0);
        ctx.restore();
      }

      // bonus-harten tekenen
      for (const h of bonusHarten) {
        ctx.save();
        ctx.translate(h.x, h.y);
        ctx.shadowBlur = 22;
        ctx.shadowColor = "#ff4040";
        ctx.font = `${h.grootte}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("❤️", 0, 0);
        // pulserend wit randje
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(255,255,255,${0.3 + Math.sin(h.fase * 2) * 0.2})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, h.grootte * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // score + record
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffeb3b";
      ctx.font = `bold ${22 * SCHAAL}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "left";
      ctx.fillText(`SCORE: ${scoreElText}`, 12, 56 * SCHAAL);
      ctx.fillStyle = "#ff8050";
      ctx.textAlign = "right";
      ctx.fillText(`RECORD: ${persoonlijkRecord}`, W - 12, 56 * SCHAAL);

      // (LEVEL-label nu in tekenLevelProgressie() — duidelijker daar)

      // multiplier-display (alleen bij streak)
      if (multiplier > 1) {
        ctx.fillStyle = multiplier >= 5 ? "#ff4040" : multiplier >= 3 ? "#ffcc40" : "#69f0ae";
        ctx.shadowBlur = 12; ctx.shadowColor = ctx.fillStyle;
        ctx.font = `bold ${18 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`STREAK x${multiplier}`, W / 2, 56 * SCHAAL);
      }

      // vlieg-timer (boven score)
      if (vliegFrames > 0) {
        const seconden = Math.ceil(vliegFrames / 60);
        ctx.fillStyle = "#ffcc40";
        ctx.shadowBlur = 16; ctx.shadowColor = "#ffcc40";
        ctx.font = `bold ${16 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`🚀 ONKWETSBAAR ${seconden}s`, W / 2, 78 * SCHAAL);
      }

      // FLIP-timer (rechts naast vlieg-timer of op zelfde plek)
      if (flipFrames > 0) {
        const sec = Math.ceil(flipFrames / 60);
        const eindigtBijna = flipFrames < 90;
        ctx.fillStyle = eindigtBijna ? "#ff6060" : "#80c0ff";
        ctx.shadowBlur = 16; ctx.shadowColor = ctx.fillStyle;
        ctx.font = `bold ${16 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`🔄 FLIP ${sec}s${eindigtBijna ? " — EINDIGT!" : ""}`, W / 2, vliegFrames > 0 ? 98 * SCHAAL : 78 * SCHAAL);
      }
      // MAGNEET-timer
      if (magneetFrames > 0) {
        const sec = Math.ceil(magneetFrames / 60);
        ctx.fillStyle = "#40c0ff";
        ctx.shadowBlur = 16; ctx.shadowColor = ctx.fillStyle;
        ctx.font = `bold ${16 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        // stack onder vlieg/flip — bereken vrij Y-niveau
        const yMag = (vliegFrames > 0 ? 98 : 78) * SCHAAL + (flipFrames > 0 ? 20 * SCHAAL : 0);
        ctx.fillText(`🧲 MAGNEET ${sec}s`, W / 2, yMag);
      }
      // SLOW-MO-timer
      if (slowFrames > 0) {
        const sec = Math.ceil(slowFrames / 60);
        ctx.fillStyle = "#a060ff";
        ctx.shadowBlur = 16; ctx.shadowColor = ctx.fillStyle;
        ctx.font = `bold ${16 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        const ySlow = (vliegFrames > 0 ? 98 : 78) * SCHAAL + (flipFrames > 0 ? 20 * SCHAAL : 0) + (magneetFrames > 0 ? 20 * SCHAAL : 0);
        ctx.fillText(`🐌 SLOW-MO ${sec}s`, W / 2, ySlow);
      }

      // FLIP pending: "FLIP IN N SEC" — kleine centered box bovenaan (niet zicht-blokkerend)
      if (flipPending > 0) {
        const sec = Math.ceil(flipPending / 60);
        const boxW = Math.min(360 * SCHAAL, W * 0.6);
        const boxH = 60 * SCHAAL;
        const boxX = (W - boxW) / 2;
        const boxY = H * 0.10;
        ctx.save();
        ctx.fillStyle = "rgba(40,80,180,0.78)";
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = "rgba(128,192,255,0.9)";
        ctx.lineWidth = 2;
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 18; ctx.shadowColor = "#80c0ff";
        ctx.font = `bold ${24 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`🔄 FLIP IN ${sec} — HOU JE VAST!`, W / 2, boxY + boxH / 2);
        ctx.restore();
      }

      // RAKET eindigt: laatste 3 sec — countdown banner
      if (vliegFrames > 0 && vliegFrames <= 180) {
        const sec = Math.ceil(vliegFrames / 60);
        const boxW = Math.min(420 * SCHAAL, W * 0.7);
        const boxH = 56 * SCHAAL;
        const boxX = (W - boxW) / 2;
        const boxY = H * 0.10;
        ctx.save();
        ctx.fillStyle = "rgba(180,120,40,0.78)";
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = "#ffcc40";
        ctx.lineWidth = 2;
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 18; ctx.shadowColor = "#ffcc40";
        ctx.font = `bold ${22 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`🛡️ SCHILD STOPT IN ${sec}`, W / 2, boxY + boxH / 2);
        ctx.restore();
      }

      // FLIP eindigt: laatste 3 sec — "BACK TO NORMAL IN N" (kleine box, zelfde positie)
      if (flipFrames > 0 && flipFrames <= 180) {
        const sec = Math.ceil(flipFrames / 60);
        const boxW = Math.min(420 * SCHAAL, W * 0.7);
        const boxH = 60 * SCHAAL;
        const boxX = (W - boxW) / 2;
        const boxY = H * 0.10;
        ctx.save();
        ctx.fillStyle = "rgba(180,80,40,0.78)";
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = "rgba(255,170,64,0.9)";
        ctx.lineWidth = 2;
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 18; ctx.shadowColor = "#ffaa40";
        ctx.font = `bold ${22 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`BACK TO NORMAL IN ${sec} — NAAR DE GROND!`, W / 2, boxY + boxH / 2);
        ctx.restore();
      }

      // LEVEL GEHAALD banner — kleine box bovenaan, niet zicht-blokkerend
      if (levelGehaaldFlash > 0) {
        const fade = Math.min(1, levelGehaaldFlash / 24);
        const boxW = Math.min(360 * SCHAAL, W * 0.7);
        const boxH = 56 * SCHAAL;
        const boxX = (W - boxW) / 2;
        const boxY = H * 0.10;
        ctx.save();
        ctx.globalAlpha = fade;
        ctx.fillStyle = "rgba(0,80,40,0.78)";
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = "#69f0ae";
        ctx.lineWidth = 2;
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.fillStyle = "#69f0ae";
        ctx.shadowBlur = 22; ctx.shadowColor = "#69f0ae";
        ctx.font = `bold ${22 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`🏆 LEVEL ${levelGehaaldNummer} GEHAALD!`, W / 2, boxY + boxH / 2);
        ctx.restore();
      }

      // record-banner (PR-naderen, PR-gebroken, WR-naderen, WR-gebroken)
      if (recordBannerTeller > 0) {
        const fade = Math.min(1, recordBannerTeller / 24);
        const boxW = Math.min(440 * SCHAAL, W * 0.78);
        const boxH = 50 * SCHAAL;
        const boxX = (W - boxW) / 2;
        const boxY = H * 0.20;
        ctx.save();
        ctx.globalAlpha = fade;
        ctx.fillStyle = "rgba(0,0,0,0.62)";
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeStyle = recordBannerKleur;
        ctx.lineWidth = 2;
        ctx.strokeRect(boxX, boxY, boxW, boxH);
        ctx.fillStyle = recordBannerKleur;
        ctx.shadowBlur = 20; ctx.shadowColor = recordBannerKleur;
        ctx.font = `bold ${22 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(recordBannerTekst, W / 2, boxY + boxH / 2);
        ctx.restore();
      }

      // big flash bij multiplier-upgrade
      if (multiplierFlashTeller > 0) {
        const t = multiplierFlashTeller / 60;
        ctx.globalAlpha = t;
        ctx.fillStyle = "#69f0ae";
        ctx.shadowBlur = 30; ctx.shadowColor = "#69f0ae";
        ctx.font = `bold ${48 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`x${multiplier}!`, W / 2, H * 0.5);
        ctx.globalAlpha = 1;
      }

      // LEVEL UP flash (biome-overgang): "WORLD 2" + biome-naam
      if (levelUpFlash > 0) {
        const t = levelUpFlash / LEVEL_UP_DUUR; // 1 → 0
        // donkere overlay-band (semi-transparant) bovenop alles
        const fadeIn = Math.min(1, (1 - t) * 4);     // snelle fade-in
        const fadeOut = Math.min(1, t * 2.5);         // langere zichtbare fase
        const alpha = Math.min(fadeIn, fadeOut);

        ctx.globalAlpha = alpha * 0.55;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, H * 0.32, W, H * 0.36);

        ctx.globalAlpha = alpha;
        // "WORLD N" klein label
        ctx.fillStyle = "#ffcc40";
        ctx.shadowBlur = 16; ctx.shadowColor = "#ff5030";
        ctx.font = `bold ${16 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`WORLD ${huidigBioom + 1} / ${BIOMES.length}`, W / 2, H * 0.42);

        // biome-naam groot
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 26; ctx.shadowColor = biomeKleur("glow", 1);
        ctx.font = `bold ${36 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.fillText(levelUpNaam, W / 2, H * 0.52);

        // emoji rand
        const emojiSet = BIOMES[huidigBioom]?.emoji || [];
        if (emojiSet.length) {
          ctx.shadowBlur = 14;
          ctx.font = `${22 * SCHAAL}px serif`;
          ctx.fillText(emojiSet.slice(0, 4).join(' '), W / 2, H * 0.62);
        }

        ctx.globalAlpha = 1;
      }

      ctx.restore();
      tekenLevens();
      tekenLevelProgressie();

      // countdown overlay (bovenop alles)
      if (countdown > 0) {
        const total = COUNTDOWN_FRAMES;
        const stap = Math.ceil(countdown / (total / 3)); // 3, 2, 1
        const stapText = stap >= 3 ? "3" : stap === 2 ? "2" : "1";
        const fadeIn = 1 - ((countdown % (total / 3)) / (total / 3));
        ctx.save();
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "#ffcc40";
        ctx.shadowBlur = 30; ctx.shadowColor = "#ff5030";
        ctx.font = `bold ${110 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.globalAlpha = 0.4 + fadeIn * 0.6;
        ctx.fillText(stapText, W / 2, H / 2);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff";
        ctx.shadowBlur = 12;
        ctx.font = `bold ${20 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.fillText("KLAARMAKEN...", W / 2, H * 0.78);
        ctx.restore();
      } else if (countdown === 0 && frameTeller < 50) {
        // korte "GO!" flits direct na countdown
        const go_alpha = Math.max(0, 1 - frameTeller / 50);
        ctx.save();
        ctx.globalAlpha = go_alpha;
        ctx.fillStyle = "#69f0ae";
        ctx.shadowBlur = 30; ctx.shadowColor = "#69f0ae";
        ctx.font = `bold ${90 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("GO!", W / 2, H / 2);
        ctx.restore();
      }
      // Dungeon-overlay ALS ALLERLAATSTE — boven alles
      tekenDungeonOverlay();
      tekenHellOverlay();
      tekenOblivionOverlay();
      // Speler NOG EEN KEER tijdens dungeon — anders dekt het ondoorzichtige
      // water (#0e3c70) de rode bal volledig af (alleen schild-glow steekt
      // boven water uit). Mark's klacht: 'onder water ben ik onzichtbaar
      // in gewone staat'. Buiten dungeon overslaan zodat speler niet boven
      // obstakels komt te staan in normale gameplay.
      if (dungeonMode || dungeonFadeOut > 0) tekenSpeler();
      // Vissen + haaien + schatkisten NA de overlay zodat ze niet grijs getint worden
      for (const v of vissen) tekenVis(v);
      for (const h of haaien) tekenHaai(h);
      for (const s of schatkisten) tekenSchatkist(s);
      // Periscoop + bonus-fase boven alles (incl. dungeon-overlay)
      tekenPeriscoop();
      tekenBonusFase();
      tekenBonusEindFlash();
      // Bubbel-shield rond speler (van vis-pickup) — ook na overlay zodat 'ie helder blijft
      if (bubbelFrames > 0) {
        const cx = speler.x + speler.breedte / 2;
        const cy = speler.y + speler.hoogte / 2;
        const r = speler.breedte * 0.85;
        const pulse = 1 + Math.sin(frameTeller * 0.18) * 0.06;
        // laatste 30 frames knipperen om "bijna op" te tonen
        const knipper = bubbelFrames < 30 && frameTeller % 6 < 3 ? 0.35 : 1;
        ctx.save();
        ctx.shadowBlur = 22;
        ctx.shadowColor = "#80e8ff";
        ctx.strokeStyle = `rgba(160, 232, 255, ${0.85 * knipper})`;
        ctx.lineWidth = 3 * SCHAAL;
        ctx.beginPath();
        ctx.arc(cx, cy, r * pulse, 0, Math.PI * 2);
        ctx.stroke();
        // binnenste lichte vulling
        ctx.fillStyle = `rgba(208, 240, 255, ${0.10 * knipper})`;
        ctx.beginPath();
        ctx.arc(cx, cy, r * pulse, 0, Math.PI * 2);
        ctx.fill();
        // hoogtepunt links-boven
        ctx.fillStyle = `rgba(255, 255, 255, ${0.55 * knipper})`;
        ctx.beginPath();
        ctx.arc(cx - r * 0.45, cy - r * 0.45, r * 0.16, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    // Frame-cap op 60 FPS zodat de game niet 2× zo snel draait op 120Hz/144Hz schermen (Galaxy S23 etc).
    const TARGET_FRAME_MS = 1000 / 60;
    let laatsteFrameTijd = 0;
    function lus() {
      const nu = performance.now();
      if (nu - laatsteFrameTijd >= TARGET_FRAME_MS - 1) {
        laatsteFrameTijd = nu;
        update(); teken();
      }
      if (spelLoopt) raf = requestAnimationFrame(lus);
    }
    // Spike-hit: trekt HP_PER_HIT van hp af. Bij hp ≤ 0 → leven kwijt
    // + hp reset. Korte i-frames via hpFlashTeller voorkomen dat 1 spike
    // direct meerdere keren raakt.
    function hitTotale() {
      if (hpFlashTeller > 0) return; // i-frames actief
      hp -= HP_PER_HIT;
      hpFlashTeller = 45; // ~0.75 sec invincibility na hit
      shakeKracht = Math.max(shakeKracht, 10);
      // rode hit-burst
      spawnParticles(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, 14, "#ff4040", { spread: 6, opwaarts: 1.5, leven: 22, grootte: 4, glow: 14 });
      piep(180, 0.10, "triangle", 0.14);
      if (hp <= 0) {
        hp = HP_MAX; // reset voor volgende leven
        levenVerlies();
      }
    }
    // Blok-hit: remt de wereld af, geen damage. Korte cooldown via blokHitX
    // zodat dezelfde blok-collision niet elke frame hertriggert.
    function afremTotale(o) {
      if (blokHitX === o.x) return; // al geraakt deze blok
      blokHitX = o.x;
      afgeremFrames = AFGEREMD_DUUR;
      shakeKracht = Math.max(shakeKracht, 6);
      spawnParticles(speler.x + speler.breedte, speler.y + speler.hoogte / 2, 10, "#ffcc40", { spread: 4, opwaarts: 1, leven: 18, grootte: 3, glow: 10 });
      spawnParticles(speler.x + speler.breedte, speler.y + speler.hoogte / 2, 6, "#ffffff", { spread: 3, opwaarts: 1, leven: 14, grootte: 2.5, glow: 8 });
      piep(140, 0.06, "triangle", 0.10);
    }
    function levenVerlies() {
      spelLoopt = false;
      shakeKracht = 22;
      muziekStop();
      doodGeluid();
      // streak breekt bij dood
      streak = 0;
      multiplier = 1;
      multiplierFlashTeller = 0;
      levelUpFlash = 0;
      // record-banner state niet resetten — score loopt door tijdens dezelfde sessie
      // (sessieEinde reset alles via component-mount)
      for (let i = 0; i < 50; i++) {
        const k = i % 3 === 0 ? "#ff2030" : (i % 3 === 1 ? "#ffaa20" : "#ffee60");
        particles.push(new Particle(speler.x + speler.breedte / 2, speler.y + speler.hoogte / 2, k, { spread: 12, opwaarts: 3, leven: 55, grootte: 4, zwaartekracht: 0.2, glow: 16 }));
      }
      const isLaatste = levens <= 1;
      let teller = 0;
      function uitloop() {
        teller++;
        ctx.save();
        if (shakeKracht > 0.5) ctx.translate((Math.random() - 0.5) * shakeKracht, (Math.random() - 0.5) * shakeKracht);
        if (hellMode) {
          tekenHellAchtergrond();
          tekenLavaGrond();
        } else {
          tekenBakstenenMuur(); tekenGlasInLood();
          if (logoGeladen && studiebolLogos.length) {
            ctx.save(); ctx.globalAlpha = 0.42;
            for (const l of studiebolLogos) ctx.drawImage(logoImg, l.x, l.y, l.grootte, l.grootte);
            ctx.restore();
          }
          tekenLichtbundels(); tekenDecoraties(); tekenFakkels(); tekenPlafond(); tekenGrond(); tekenMist();
        }
        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update(); particles[i].teken();
          if (particles[i].dood) particles.splice(i, 1);
        }
        for (const f of fans) tekenFanGroep(f);
        for (const o of obstakels) tekenObstakel(o);
        for (const h of haaien) tekenHaai(h);
        for (const sc of schansen) tekenSchans(sc);
        for (const p of portals) tekenPortal(p);
        for (const ps of plafondStekels) tekenPlafondStekel(ps.x, ps.breedte, ps.hoogte);
        for (const m of zwevendeMinen) tekenZwevendeMine(m);
        ctx.restore();
        tekenLevens();
        // overlay tekst
        if (teller > 20) {
          ctx.save();
          ctx.fillStyle = "rgba(0,0,0,0.5)";
          ctx.fillRect(0, H * 0.35, W, H * 0.3);
          ctx.fillStyle = isLaatste ? "#ff4040" : "#ffcc40";
          ctx.font = `bold ${30 * SCHAAL}px Impact, Arial Black, sans-serif`;
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.shadowBlur = 18; ctx.shadowColor = ctx.fillStyle;
          if (isLaatste) {
            ctx.fillText("OBLITERATED!", W / 2, H * 0.45);
          } else {
            ctx.fillText("💔 LEVEN VERLOREN", W / 2, H * 0.43);
            ctx.font = `bold ${18 * SCHAAL}px Impact, Arial Black, sans-serif`;
            ctx.fillStyle = "#ffffff";
            ctx.fillText(`${levens - 1} ${levens - 1 === 1 ? "LEVEN" : "LEVENS"} OVER`, W / 2, H * 0.55);
          }
          ctx.restore();
        }
        if (shakeKracht > 0.5) shakeKracht *= 0.9;
        if (teller < 70) raf = requestAnimationFrame(uitloop);
        else {
          levens--;
          if (levens > 0) respawn();
          else eindeSessie();
        }
      }
      uitloop();
    }

    function respawn() {
      // clear obstakels + particles + bonusHarten + raketten + flipPickups, reset speler, score blijft
      obstakels.length = 0;
      customDecoraties.length = 0;
      particles.length = 0;
      bonusHarten.length = 0;
      raketten.length = 0;
      flipPickups.length = 0;
      magneetPickups.length = 0;
      slowMoPickups.length = 0;
      bombPickups.length = 0;
      magneetFrames = 0;
      slowFrames = 0;
      bombFlash = 0;
      ringen.length = 0;
      ringSpawnTeller = 60;
      platforms.length = 0;
      platformSpawnTeller = 240;
      plafondStekels.length = 0;
      plafondStekelSpawnTeller = 240;
      zwevendeMinen.length = 0;
      zwevendeMineSpawnTeller = 360;
      studiebolLogos.length = 0;
      logoSpawnTeller = 360;
      // boss-state reset zodat je 'm opnieuw kunt verslaan na respawn
      bossActief = false;
      bossLasers.length = 0;
      spelerLasers.length = 0;
      bossWinAnim = 0;
      BOSS_NA_LEVEL_VLAGGEN.clear();
      vliegFrames = 0;
      bubbelFrames = 0;
      flipFrames = 0;
      flipPending = 0;
      schatkisten.length = 0;
      bubbels.length = 0;
      schatkistSpawnTeller = 480;
      hp = HP_MAX;
      hpFlashTeller = 0;
      afgeremFrames = 0;
      blokHitX = -999;
      periscoop = null;
      // Bij respawn: ~40 sec teller — periscoop is een zeldzame bonus
      // (Mark: 75% minder vaak), dus na dood ook niet direct weer in beeld.
      periscoopSpawnTeller = 2400;
      bonusFase = false;
      bonusFrames = 0;
      bonusIntroFrames = 0;
      bonusRingen.length = 0;
      bonusScore = 0;
      // Hell-mode reset bij respawn
      hellMode = false;
      hellFrames = 0;
      hellFadeIn = 0;
      hellFadeOut = 0;
      vonken.length = 0;
      // Oblivion-mode reset bij respawn (cutscene niet — die hoort bij admin-trigger)
      oblivionMode = false;
      oblivionFrames = 0;
      oblivionFadeOut = 0;
      cutsceneFase = "geen";
      cutsceneFrames = 0;
      warpStrepen.length = 0;
      bonusEindFlash = 0;
      speler.x = speler.basisX;
      speler.y = GROND_Y;
      speler.snelheidX = 0;
      speler.snelheidY = 0;
      speler.springt = false;
      speler.rotatie = 0;
      speler.trailTeller = 0;
      speler.sprongTeller = 0;
      shakeKracht = 0;
      volgendObstakelOver = 90; // iets meer ademruimte na respawn
      countdown = COUNTDOWN_FRAMES; // re-arm countdown
      spelLoopt = true;
      muziekStart();
      raf = requestAnimationFrame(lus);
    }

    function eindeSessie() {
      // PvP-mode: finalize match in DB en broadcast end
      if (pvpMatch && pvpSub) {
        const ownScore = score;
        const opponentScore = ghostStateRef.current.score || 0;
        const winner = ownScore > opponentScore ? pvpRole
          : ownScore < opponentScore ? (pvpRole === "host" ? "guest" : "host")
          : "draw";
        try {
          import("../games/obliterator/pvp.js").then(({ finalizeMatch }) => {
            const hostScore = pvpRole === "host" ? ownScore : opponentScore;
            const guestScore = pvpRole === "guest" ? ownScore : opponentScore;
            finalizeMatch({ code: pvpMatch.id, hostScore, guestScore, winner });
          });
        } catch {}
        try {
          const hostScore = pvpRole === "host" ? ownScore : opponentScore;
          const guestScore = pvpRole === "guest" ? ownScore : opponentScore;
          pvpSub.sendEnd(winner, { host: hostScore, guest: guestScore });
        } catch {}
        setEindScore(ownScore);
        setPvpResult({
          winner,
          scores: {
            host: pvpRole === "host" ? ownScore : opponentScore,
            guest: pvpRole === "guest" ? ownScore : opponentScore,
          },
        });
        setFase("pvp-finished");
        return;
      }
      // sla level-records op naar Supabase (alleen voor ingelogde users)
      // huidige level krijgt ook een record (score sinds level-start)
      const scoreInHuidigLevel = score - scoreBijLevelStart;
      sessieLevelRecords[huidigLevel] = Math.max(sessieLevelRecords[huidigLevel] || 0, scoreInHuidigLevel);
      eindLevelRef.current = huidigLevel;
      const naam = (userName || "").trim();
      if (authUser?.id && naam) {
        Object.entries(sessieLevelRecords).forEach(([lvl, sc]) => {
          if (sc <= 0) return;
          const lvlInt = parseInt(lvl, 10);
          // upsert: insert of update als score hoger
          supabase.from("obliterator_levels")
            .select("record_score")
            .eq("user_id", authUser.id)
            .eq("level", lvlInt)
            .maybeSingle()
            .then(({ data }) => {
              if (!data) {
                supabase.from("obliterator_levels").insert({
                  user_id: authUser.id, player_name: naam, level: lvlInt, record_score: sc,
                }).then(() => {}).catch(() => {});
              } else if (sc > (data.record_score || 0)) {
                supabase.from("obliterator_levels")
                  .update({ record_score: sc, laatst_bijgewerkt: new Date().toISOString() })
                  .eq("user_id", authUser.id).eq("level", lvlInt)
                  .then(() => {}).catch(() => {});
              }
            }).catch(() => {});
        });
      }

      // bonus verbruiken
      schrijfInt(bonusKey, 0);
      // sessie-counter ophogen
      const aantal = leesInt(sessieKey) + 1;
      schrijfInt(sessieKey, aantal);
      // tracking: hoe vaak sessie afgemaakt + score-niveau
      try {
        track("obliterator_session_complete", {
          score,
          aantal_sessies_speler: aantal,
          source: vanDeelLink ? "deeplink" : "in_app",
          nieuw_persoonlijk_record: score > prRef.current,
          nieuw_wereldrecord: score > wrRef.current && wrRef.current > 0,
        });
      } catch {}
      const driedeSessie = aantal % 3 === 0;
      const triggerWelkom = driedeSessie && vanDeelLink; // deeplink-bezoeker -> Studiebol-conversie
      const triggerVraag = !triggerWelkom && driedeSessie && wrongQuestions && wrongQuestions.length > 0;

      const huidigBeste = highscores.find(h => h.naam === (userName || "Speler"))?.score || 0;
      setNieuwRecord(score > huidigBeste && score > 0);
      setEindScore(score);
      setBonusLeven(0);

      schrijfScore(userName, authUser?.id, score, eindLevelRef.current).then(() => {
        laadTopScores().then(s => setHighscores(s));
        if (triggerWelkom) {
          setFase("welkom");
        } else if (triggerVraag) {
          const idx = Math.floor(Math.random() * wrongQuestions.length);
          setVraag(wrongQuestions[idx]);
          setVraagAntwoord(null);
          setVraagBeloning(false);
          setFase("vraag");
        } else {
          setFase("dood");
        }
      });
    }

    // Initialiseer biome + muziek voor het start-level (level 1 of hoger)
    setBiomeVoorLevel(pvpMatch ? 1 : startLevelRef.current);
    levelUpFlash = 0; // we tonen geen "level X gehaald" voor de start zelf
    if (!pvpMatch && startLevelRef.current > 1) {
      // pre-set frameTeller zodat density-formule meteen op level-niveau zit
      frameTeller = (startLevelRef.current - 1) * LEVEL_DUUR_FRAMES;
      score = startLevelRef.current * 5;
      scoreElText = score;
      scoreBijLevelStart = score;
    }

    // Helper: Oblivion-Pulse trigger (kan elk moment afgaan via lokale admin-knop
    // OF via realtime broadcast vanaf een andere speler).
    function checkOblivionTrigger() {
      if (
        oblivionTriggerRef.current &&
        oblivionTriggerRef.current.trigger &&
        cutsceneFase === "geen" &&
        !oblivionMode &&
        !bossActief
      ) {
        oblivionTriggerRef.current.trigger = false;
        cutsceneFase = "portal";
        cutsceneFrames = 0;
        // ruim alles op zodat cutscene zuiver begint — score blijft staan
        obstakels.length = 0;
        customDecoraties.length = 0;
        ringen.length = 0;
        platforms.length = 0;
        plafondStekels.length = 0;
        zwevendeMinen.length = 0;
        schansen.length = 0;
        portals.length = 0;
        fans.length = 0;
        bonusHarten.length = 0;
        raketten.length = 0;
        bombPickups.length = 0;
        magneetPickups.length = 0;
        slowMoPickups.length = 0;
        flipPickups.length = 0;
        vonken.length = 0;
        shakeKracht = 14;
      }
    }
    // Eerste check meteen bij init — admin die start met de knop ziet 'm direct
    checkOblivionTrigger();

    // ── PvP-INTEGRATIE ──
    // Hook tick/end-handlers en start een 20Hz broadcast-loop met eigen state.
    let pvpTickInterval = null;
    if (pvpMatch && pvpSub) {
      ghostStateRef.current.name = pvpRole === "host" ? pvpMatch.guest_name : pvpMatch.host_name;
      pvpSub.setHandlers({
        onTick: (payload) => {
          if (!payload || payload.from === pvpRole) return;
          ghostStateRef.current = {
            y: payload.y || 0,
            vy: payload.vy || 0,
            score: payload.score || 0,
            alive: !!payload.alive,
            name: ghostStateRef.current.name,
          };
        },
        onEnd: (payload) => {
          if (!payload) return;
          setPvpResult({ winner: payload.winner, scores: payload.scores });
        },
      });
      pvpTickInterval = setInterval(() => {
        try {
          pvpSub.sendTick({
            y: speler.y,
            vy: speler.snelheidY,
            score,
            alive: spelLoopt,
          });
        } catch {}
      }, 50); // 20Hz
    }

    raf = requestAnimationFrame(lus);

    return () => {
      spelLoopt = false;
      cancelAnimationFrame(raf);
      muziekStop();
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", onPointer);
      canvas.removeEventListener("touchstart", blockTouch);
      canvas.removeEventListener("touchmove", blockTouch);
      canvas.removeEventListener("touchend", blockTouch);
      document.body.style.overflow = origBodyOverflow;
      document.body.style.touchAction = origBodyTouchAction;
      document.documentElement.style.overflow = origHtmlOverflow;
      springRef.current = () => {};
      if (pvpTickInterval) clearInterval(pvpTickInterval);
      try { audioCtx?.close(); } catch {}
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, userName, canvasW]);

  // ---------- VRAAG-HANDLERS ----------
  function beantwoordVraag(idx) {
    if (vraagAntwoord !== null) return;
    setVraagAntwoord(idx);
    if (vraag && idx === vraag.correct) {
      setVraagBeloning(true);
      setBonusLeven(1);
      schrijfInt(bonusKey, 1);
    }
  }

  function vraagAfsluiten() {
    setFase("dood");
    setVraag(null);
    setVraagAntwoord(null);
    setVraagBeloning(false);
  }

  // ---------- LICHTKRANT ----------
  const lichtkrantTekst = highscores.length > 0
    ? highscores.map((h, i) => `🏆 #${i + 1} ${h.naam}${h.level ? ` (L${h.level})` : ""} — ${h.score}`).join("    •    ")
    : "Nog geen high scores — wees de eerste! 👽";

  return (
    <div
      onPointerDown={(e) => {
        // tijdens spelen: hele zwarte ruimte buiten knoppen werkt als spring-zone
        if (fase !== "spelen") return;
        // laat clicks op knoppen ongemoeid (sluit/fullscreen werken normaal)
        if (e.target.closest && e.target.closest("button")) return;
        // canvas heeft eigen handler — voorkom dubbele trigger
        if (e.target.tagName === "CANVAS") return;
        e.preventDefault();
        springRef.current?.();
      }}
      onTouchMove={(e) => {
        // tijdens spelen: geen scroll/swipe-gesture toelaten — blijft canvas stabiel
        if (fase === "spelen") e.preventDefault();
      }}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 9999,
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: (fase === "dood" || fase === "vraag" || (fase === "menu" && !isPortrait)) ? "flex-start" : "center",
        padding: 12,
        paddingBottom: (fase === "dood" || fase === "vraag" || fase === "menu") ? 90 : 12,
        overflowY: fase === "spelen" ? "hidden" : "auto",
        overscrollBehavior: fase === "spelen" ? "contain" : "auto",
        touchAction: fase === "spelen" ? "none" : "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {shareToast && (
        <div style={{
          position: "fixed", left: "50%", bottom: 20, transform: "translateX(-50%)",
          zIndex: 100001, padding: "12px 18px", borderRadius: 14,
          background: "linear-gradient(135deg, #ffd700, #ffaa00)",
          color: "#1a1a00", fontFamily: "'Fredoka', sans-serif",
          fontSize: 14, fontWeight: 700, letterSpacing: 0.3,
          boxShadow: "0 4px 20px rgba(255,215,0,0.5)",
          maxWidth: "calc(100vw - 24px)", textAlign: "center",
        }}>
          {shareToast}
        </div>
      )}
      {/* Lichtkrant — altijd bovenaan zichtbaar */}
      <div style={{
        width: canvasW, marginBottom: 8, borderRadius: 8,
        background: "linear-gradient(90deg, rgba(40,5,15,0.9), rgba(60,10,25,0.9))",
        border: "1px solid rgba(255,80,40,0.5)",
        boxShadow: "0 0 20px rgba(255,80,40,0.4)",
        overflow: "hidden", height: 32, position: "relative"
      }}>
        <div style={{
          whiteSpace: "nowrap",
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: 16, letterSpacing: 1.5,
          color: "#ffcc40",
          textShadow: "0 0 8px rgba(255,150,40,0.8)",
          position: "absolute", top: 6, left: 0,
          animation: "obliterator-marquee 22s linear infinite",
          paddingLeft: "100%"
        }}>
          {lichtkrantTekst}    •    {lichtkrantTekst}
        </div>
      </div>

      <div ref={wrapperRef} style={{
        width: isFullscreen ? "100vw" : canvasW,
        height: isFullscreen ? "100vh" : "auto",
        padding: isFullscreen ? 16 : 10,
        borderRadius: isFullscreen ? 0 : 12,
        background: isFullscreen
          ? "#000"
          : "linear-gradient(135deg, #0a0414, #1a0a2e)",
        boxShadow: isFullscreen ? "none" : "0 0 40px rgba(255,80,40,0.5)",
        border: isFullscreen ? "none" : "2px solid #ff5030",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: isFullscreen ? "center" : "flex-start"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, width: "100%" }}>
          <span style={{
            fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: 22, letterSpacing: 4,
            background: "linear-gradient(180deg, #fff 0%, #ffcc40 50%, #ff3030 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 6px rgba(255,80,40,0.8))"
          }}>OBLITERATOR</span>
          <div style={{ display: "flex", gap: 4 }}>
            <button onClick={toggleFullscreen} title={isFullscreen ? "Sluit fullscreen" : "Open fullscreen"} style={{
              background: "none", border: "none", color: "#ffcc40", fontSize: 18, cursor: "pointer",
              padding: "0 6px", lineHeight: 1
            }}>{isFullscreen ? "↙" : "⛶"}</button>
            <button onClick={onClose} style={{
              background: "none", border: "none", color: "#ffcc40", fontSize: 22, cursor: "pointer",
              padding: "0 6px"
            }}>✕</button>
          </div>
        </div>

        {fase === "menu" && (
          <div style={{ textAlign: "center", padding: isPortrait ? "30px 12px" : "8px 12px" }}>
            <div style={{ fontSize: isPortrait ? 56 : 32, marginBottom: isPortrait ? 8 : 2 }}>👽🛸👽</div>
            <p style={{ color: "#ffcc40", fontFamily: "'Fredoka', sans-serif", fontSize: isPortrait ? 18 : 15, fontWeight: 700, marginBottom: isPortrait ? 6 : 2 }}>Spring over de stekels!</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: isPortrait ? 13 : 11, marginBottom: isPortrait ? 6 : 2 }}>
              <strong style={{ color: "#ff8050" }}>SPATIE</strong> of <strong style={{ color: "#ff8050" }}>KLIK</strong> = springen · <strong style={{ color: "#c060ff" }}>oneindig</strong> doortikken om hoog te blijven!
            </p>
            {isPortrait && (
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginBottom: 20 }}>
                Hoe verder je komt, hoe meer obstakels op elkaar. Achtergrond verandert om de 8 punten.
              </p>
            )}
            {persoonlijkRecord > 0 && (
              <p style={{ color: "#ffcc40", fontSize: isPortrait ? 14 : 12, marginBottom: isPortrait ? 6 : 2 }}>
                Jouw record: <strong>{persoonlijkRecord}</strong>
              </p>
            )}
            <p style={{ color: "#ff8050", fontSize: isPortrait ? 14 : 12, marginBottom: 6 }}>
              {Array(3).fill("❤️").join(" ")}
            </p>
            <p style={{ color: "#ffd54f", fontSize: isPortrait ? 14 : 12, marginBottom: isPortrait ? 8 : 4, fontWeight: 700 }}>
              💍 {munten} {munten === 1 ? "munt" : "munten"}
              <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500, marginLeft: 6, fontSize: isPortrait ? 11 : 10 }}>
                (uit gepakte ringen — geef uit in custom-editor)
              </span>
            </p>
            {bonusEventEinde && Date.now() < bonusEventEinde && (
              <div style={{
                background: "linear-gradient(135deg, rgba(255,213,79,0.25), rgba(249,168,37,0.15))",
                border: "1px solid #ffd54f",
                borderRadius: 10,
                padding: "8px 12px",
                marginBottom: 8,
                color: "#ffd54f",
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 13, fontWeight: 700,
                textAlign: "center",
                animation: "pulse 1.5s ease-in-out infinite",
              }}>
                ✨ 2× MUNTEN EVENT actief — {Math.max(0, Math.ceil((bonusEventEinde - Date.now()) / 60000))} min over
              </div>
            )}
            {rainbowEventEinde && Date.now() < rainbowEventEinde && (
              <div style={{
                background: "linear-gradient(90deg, rgba(255,80,80,0.25), rgba(255,170,48,0.25), rgba(255,224,64,0.25), rgba(105,240,174,0.25), rgba(64,192,255,0.25), rgba(160,96,255,0.25))",
                border: "1px solid #ff80ff",
                borderRadius: 10,
                padding: "8px 12px",
                marginBottom: 12,
                color: "#fff",
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 13, fontWeight: 800,
                textAlign: "center",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                animation: "pulse 1.5s ease-in-out infinite",
              }}>
                🌈 RAINBOW EVENT — {Math.max(0, Math.ceil((rainbowEventEinde - Date.now()) / 1000))}s · pak rainbow-ringen voor 5× munten
              </div>
            )}
            {/* Logout-waarschuwing */}
            {!authUser && (
              <div style={{
                background: "rgba(255,184,0,0.15)",
                border: "1px solid rgba(255,184,0,0.45)",
                borderRadius: 10,
                padding: "8px 12px",
                marginBottom: 12,
                color: "#ffcc40",
                fontSize: 12, lineHeight: 1.4,
                textAlign: "left",
              }}>
                <strong>⚠️ Niet ingelogd</strong> — je munten + skins worden alleen op deze browser bewaard.
                Levels die je opslaat worden anoniem opgeslagen. <strong>Log in</strong> via de homepage om alles op je account te bewaren.
              </div>
            )}

            {/* Mini legenda — compact in landscape */}
            <div style={{
              marginBottom: isPortrait ? 16 : 8, padding: isPortrait ? "10px 12px" : "6px 10px", borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,150,40,0.25)",
              textAlign: "left", fontSize: isPortrait ? 12 : 11, lineHeight: isPortrait ? 1.6 : 1.4,
              fontFamily: "'Nunito', sans-serif", color: "rgba(255,255,255,0.75)"
            }}>
              <div style={{ color: "#ffcc40", fontWeight: 700, marginBottom: isPortrait ? 4 : 2, textAlign: "center", letterSpacing: 1 }}>HOE PUNTEN PAKKEN?</div>
              <div>💍 <strong style={{ color: "#ffd700" }}>Gouden ringen pakken</strong> = +punten (5× op rij = streak x2 → x5!)</div>
              <div>🔺 <strong style={{ color: "#ffeb3b" }}>Stekels (op grond én aan plafond)</strong> = vermijden (raken kost 1 leven)</div>
              <div>🟦 <strong style={{ color: "#80c0ff" }}>Lichtblauwe blokken</strong> = veilig om op te springen en overheen te rollen</div>
              <div>❤️ <strong style={{ color: "#ff6b6b" }}>Hartje pakken</strong> = +1 leven (max 5)</div>
              <div>🛡️ <strong style={{ color: "#ffcc40" }}>Schild pakken</strong> = 10 sec ONKWETSBAAR (geen schade van stekels!)</div>
              <div>🔄 <strong style={{ color: "#80c0ff" }}>FLIP pakken</strong> = 10 sec ondersteboven op het plafond (na 2 sec waarschuwing)</div>
              <div>🧲 <strong style={{ color: "#40c0ff" }}>Magneet pakken</strong> = 8 sec lang vliegen alle ringen naar je toe</div>
              <div>🐌 <strong style={{ color: "#a060ff" }}>Slow-mo pakken</strong> = 5 sec wereld in halve snelheid (adempauze!)</div>
              <div>💥 <strong style={{ color: "#ff5040" }}>Bom pakken</strong> = ALLE stekels op het scherm vernietigen!</div>
              <div>🐠 <strong style={{ color: "#ffaa30" }}>Vis pakken</strong> = +5 punten + 5 sec bubbel-shield (haaien gaan dood bij contact!)</div>
              <div>💰 <strong style={{ color: "#ffd700" }}>Schatkist pakken</strong> (water-wereld) = +25 punten + 25 HP BONUS!</div>
              <div>🔭 <strong style={{ color: "#fff8a0" }}>Periscoop</strong> = exact erin springen = 15 sec BONUS-RONDE (ringen schieten OF aanraken = +5 elk!)</div>
              <div>🏆 <strong style={{ color: "#69f0ae" }}>5 werelden</strong> ontgrendelen om de 8 punten</div>
            </div>
            {isFullscreen && isPortrait && (
              <div style={{
                marginBottom: 16, padding: "12px 16px", borderRadius: 10,
                background: "rgba(105,240,174,0.12)",
                border: "1px solid rgba(105,240,174,0.4)",
                animation: "pulse 1.8s ease-in-out infinite"
              }}>
                <p style={{ color: "#69f0ae", fontSize: 14, fontWeight: 700, margin: 0 }}>
                  📱 ➡️ 📱 Draai je telefoon liggend
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: "4px 0 0 0" }}>
                  Daarna op START drukken voor de beste ervaring
                </p>
              </div>
            )}
            {/* Custom Levels-tegel — opent de editor */}
            <button
              onClick={() => {
                setEditorOpslaan({ bezig: false, error: null, ok: false });
                setFase("custom-editor");
              }}
              style={{
                width: "100%",
                padding: "12px 14px",
                marginBottom: 12,
                borderRadius: 12,
                background: "linear-gradient(135deg, #ff9d40, #cc6020)",
                border: "none",
                color: "#fff",
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 15, fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(255,157,64,0.4)",
                letterSpacing: 0.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <span>🎨 Custom Levels</span>
              <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.9, background: "rgba(0,0,0,0.25)", padding: "3px 8px", borderRadius: 999 }}>
                💍 {munten} · open editor
              </span>
            </button>

            {/* 1v1-uitdaging via WhatsApp — alleen als parent-component dit ondersteunt */}
            {onChallengeFriend && (
              <button
                onClick={() => onChallengeFriend()}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  marginBottom: 14,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  border: "none",
                  color: "#fff",
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: 15, fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 18px rgba(37,211,102,0.40)",
                  letterSpacing: 0.5,
                }}
              >
                🥊 Daag een vriend uit (1v1 via WhatsApp)
              </button>
            )}

            {/* Settings-panel — uitklapbaar */}
            <div style={{ marginBottom: 14 }}>
              <button
                onClick={() => setSettingsOpen((o) => !o)}
                style={{
                  width: "100%",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 10,
                  color: "#fff",
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: 14, fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <span>⚙️ Instellingen</span>
                <span style={{ fontSize: 16, transform: settingsOpen ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>›</span>
              </button>
              {settingsOpen && (
                <div style={{
                  marginTop: 8, padding: "12px 14px", borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}>
                  {/* Geluid aan/uit */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ color: "#fff", fontSize: 13 }}>{geluidAan ? "🔊" : "🔇"} Muziek + geluid</span>
                    <button
                      onClick={() => setGeluidAan((v) => !v)}
                      style={{
                        padding: "5px 14px", borderRadius: 999,
                        border: "none",
                        background: geluidAan ? "linear-gradient(135deg, #00c853, #69f0ae)" : "rgba(255,255,255,0.10)",
                        color: geluidAan ? "#0d1b2e" : "rgba(255,255,255,0.7)",
                        fontFamily: "'Fredoka', sans-serif", fontSize: 12, fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {geluidAan ? "AAN" : "UIT"}
                    </button>
                  </div>
                  {/* Volume slider */}
                  <div style={{ opacity: geluidAan ? 1 : 0.4 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ color: "#fff", fontSize: 13 }}>🎚️ Volume</span>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{Math.round(volume * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0" max="100" step="1"
                      value={Math.round(volume * 100)}
                      onChange={(e) => setVolume(parseInt(e.target.value, 10) / 100)}
                      disabled={!geluidAan}
                      style={{ width: "100%", accentColor: "#69f0ae" }}
                    />
                  </div>
                  {/* Skin-selector */}
                  <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                    <div style={{ color: "#fff", fontSize: 13, marginBottom: 6 }}>👕 Skin · ontgrendel elke 10 levels</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(78px, 1fr))", gap: 6 }}>
                      {SKINS.map((s) => {
                        const ontgrendeld = unlockedSkins.includes(s.id);
                        const isActive = selectedSkin === s.id;
                        return (
                          <button
                            key={s.id}
                            onClick={() => ontgrendeld && setSelectedSkin(s.id)}
                            disabled={!ontgrendeld}
                            style={{
                              padding: "6px 4px", borderRadius: 10,
                              border: isActive ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.15)",
                              background: isActive ? "rgba(105,240,174,0.15)" : "rgba(255,255,255,0.04)",
                              color: ontgrendeld ? "#fff" : "rgba(255,255,255,0.4)",
                              fontFamily: "'Fredoka', sans-serif", fontSize: 10,
                              cursor: ontgrendeld ? "pointer" : "not-allowed",
                              filter: ontgrendeld ? "none" : "grayscale(0.85)",
                            }}
                            title={ontgrendeld ? s.label : `Ontgrendel bij Level ${s.unlockLevel ?? "?"}`}
                          >
                            <div style={{ fontSize: 22, marginBottom: 2 }}>{s.emoji}</div>
                            <div style={{ fontSize: 9, lineHeight: 1.2 }}>{s.label}</div>
                            {!ontgrendeld && (
                              <div style={{ fontSize: 8, opacity: 0.7, marginTop: 2 }}>
                                🔒 {s.unlockLevel != null ? `L${s.unlockLevel}` : "Oblivion"}
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, marginTop: 10, marginBottom: 0, textAlign: "center" }}>
                    Taal (NL/EN) volgt later
                  </p>
                </div>
              )}
            </div>

            {/* Admin-paneel — alleen voor namen in OBLIVION_ADMINS (vast, niet leaderboard-gebonden) */}
            {(() => {
              const myName = (userName || "").trim().toLowerCase();
              const isAdmin = myName.length > 0 && OBLIVION_ADMINS.includes(myName);
              if (!isAdmin) return null;
              return (
                <div style={{
                  marginBottom: 14, padding: "12px 14px", borderRadius: 10,
                  background: "linear-gradient(135deg, rgba(180,60,220,0.20), rgba(80,20,120,0.15))",
                  border: "1px solid rgba(180,60,220,0.5)",
                  boxShadow: "0 0 18px rgba(180,60,220,0.3)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 22 }}>👑</span>
                    <div>
                      <div style={{ color: "#e0a0ff", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 13 }}>
                        ADMIN PANEEL
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
                        Welkom, {userName}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={async () => {
                      // 1. Lokaal direct triggeren zodat admin geen lag voelt
                      oblivionTriggerRef.current.trigger = true;
                      // 2. Wereldwijd broadcasten via Supabase — alle spelers
                      //    die op dit moment in OBLITERATOR zitten zien 'm.
                      try {
                        const { data: ins } = await supabase
                          .from("oblivion_events")
                          .insert({ triggered_by_name: (userName || "Admin").trim() })
                          .select("id")
                          .single();
                        if (ins?.id) {
                          // markeer als gezien zodat de eigen Realtime-subscribe niet
                          // opnieuw triggert (dubbele cutscene)
                          oblivionTriggerRef.current.lastSeenEventId = ins.id;
                        }
                      } catch {}
                      track("obliterator_started", {
                        source: "oblivion_admin",
                        personal_record: persoonlijkRecord || 0,
                        bonus_leven: bonusLeven || 0,
                        start_level: 1,
                      });
                      if (fase !== "spelen") setFase("spelen");
                    }}
                    style={{
                      width: "100%", padding: "12px 14px", borderRadius: 10,
                      background: "linear-gradient(135deg, #b440e0, #6020a0)",
                      border: "none",
                      color: "#fff",
                      fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 4px 18px rgba(180,60,220,0.45)",
                      letterSpacing: 0.5,
                    }}
                  >
                    🌌 Activeer Oblivion Pulse
                  </button>
                  <p style={{ color: "rgba(220,180,255,0.6)", fontSize: 10, marginTop: 6, marginBottom: 0, textAlign: "center" }}>
                    Cutscene → ruimte → black hole → 60 sec overleven = Black Hole skin
                  </p>
                  {/* 2× MUNTEN-event */}
                  <button
                    onClick={async () => {
                      const duurMin = 10;
                      const expires = new Date(Date.now() + duurMin * 60 * 1000).toISOString();
                      try {
                        await supabase.from("obliterator_bonus_events").insert({
                          event_type: "munten_2x",
                          triggered_by_name: (userName || "Admin").trim(),
                          expires_at: expires,
                        });
                      } catch {}
                      // lokaal direct activeren
                      muntenMultiplierRef.current = 2;
                      setBonusEventEinde(Date.now() + duurMin * 60 * 1000);
                    }}
                    disabled={bonusEventEinde && Date.now() < bonusEventEinde}
                    style={{
                      width: "100%", marginTop: 8,
                      padding: "10px 14px", borderRadius: 10,
                      background: bonusEventEinde && Date.now() < bonusEventEinde
                        ? "rgba(255,213,79,0.18)"
                        : "linear-gradient(135deg, #ffd54f, #f9a825)",
                      border: "none",
                      color: bonusEventEinde && Date.now() < bonusEventEinde ? "rgba(255,213,79,0.7)" : "#1a0008",
                      fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700,
                      cursor: bonusEventEinde && Date.now() < bonusEventEinde ? "not-allowed" : "pointer",
                      letterSpacing: 0.4,
                    }}
                  >
                    {bonusEventEinde && Date.now() < bonusEventEinde
                      ? `✨ 2× MUNTEN actief (${Math.max(0, Math.ceil((bonusEventEinde - Date.now()) / 60000))} min over)`
                      : "✨ Activeer 2× MUNTEN event (10 min)"}
                  </button>
                  <p style={{ color: "rgba(255,213,79,0.6)", fontSize: 10, marginTop: 4, marginBottom: 0, textAlign: "center" }}>
                    Wereldwijd — alle spelers krijgen 2 munten per ring tijdens dit event
                  </p>
                  {/* 🌈 RAINBOW-event */}
                  <button
                    onClick={async () => {
                      const duurMin = 2;
                      const expires = new Date(Date.now() + duurMin * 60 * 1000).toISOString();
                      try {
                        await supabase.from("obliterator_bonus_events").insert({
                          event_type: "rainbow",
                          triggered_by_name: (userName || "Admin").trim(),
                          expires_at: expires,
                        });
                      } catch {}
                      rainbowActiefRef.current = true;
                      setRainbowEventEinde(Date.now() + duurMin * 60 * 1000);
                    }}
                    disabled={rainbowEventEinde && Date.now() < rainbowEventEinde}
                    style={{
                      width: "100%", marginTop: 8,
                      padding: "10px 14px", borderRadius: 10,
                      background: rainbowEventEinde && Date.now() < rainbowEventEinde
                        ? "rgba(160,96,255,0.18)"
                        : "linear-gradient(135deg, #ff5050, #ffaa30, #ffe040, #69f0ae, #40c0ff, #a060ff)",
                      border: "none",
                      color: rainbowEventEinde && Date.now() < rainbowEventEinde ? "rgba(255,255,255,0.7)" : "#1a0008",
                      fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 800,
                      cursor: rainbowEventEinde && Date.now() < rainbowEventEinde ? "not-allowed" : "pointer",
                      letterSpacing: 0.5,
                      textShadow: rainbowEventEinde && Date.now() < rainbowEventEinde ? "none" : "0 1px 2px rgba(255,255,255,0.45)",
                    }}
                  >
                    {rainbowEventEinde && Date.now() < rainbowEventEinde
                      ? `🌈 RAINBOW actief (${Math.max(0, Math.ceil((rainbowEventEinde - Date.now()) / 1000))}s over)`
                      : "🌈 Activeer Rainbow event (2 min)"}
                  </button>
                  <p style={{ color: "rgba(220,180,255,0.7)", fontSize: 10, marginTop: 4, marginBottom: 0, textAlign: "center" }}>
                    10% kans per ring op rainbow-versie = 5× munten elk
                  </p>
                </div>
              );
            })()}

            {/* Level-keuze — voor iedereen die iets heeft bereikt boven L1. Records per level alleen voor ingelogd. */}
            {maxKiesbaar > 1 && (
              <div style={{ marginBottom: 14, padding: "10px 12px", borderRadius: 10, background: "rgba(105,240,174,0.08)", border: "1px solid rgba(105,240,174,0.3)" }}>
                <div style={{ color: "#69f0ae", fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 6, textAlign: "center" }}>
                  KIES JE STARTLEVEL
                </div>
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: 4,
                  justifyContent: "center",
                  maxHeight: 180, overflowY: "auto",
                  padding: "4px 2px",
                }}>
                  {Array.from({ length: maxKiesbaar }).map((_, i) => {
                    const lvl = i + 1;
                    const rec = levelRecords[lvl];
                    const isSelected = gekozenStartLevel === lvl;
                    const isBossLvl = lvl % 5 === 0;
                    return (
                      <button key={lvl} onClick={() => setGekozenStartLevel(lvl)} style={{
                        padding: "5px 8px", borderRadius: 7, border: isBossLvl ? "1px solid rgba(255,80,80,0.5)" : "none",
                        background: isSelected
                          ? "linear-gradient(135deg, #00c853, #69f0ae)"
                          : isBossLvl ? "rgba(255,80,80,0.15)" : "rgba(255,255,255,0.08)",
                        color: isSelected ? "#0d1b2e" : isBossLvl ? "#ff8050" : "#fff",
                        fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: 12, letterSpacing: 0.5,
                        fontWeight: 700, cursor: "pointer", minWidth: 32,
                      }}>
                        {moeilijkheidEmoji(lvl)} L{lvl}{isBossLvl ? " ⚔️" : ""}{rec ? <span style={{ display: "block", fontSize: 8, fontWeight: 600, opacity: 0.85 }}>{rec}</span> : null}
                      </button>
                    );
                  })}
                </div>
                {maxKiesbaar < MAX_LEVEL_UI && (
                  <p style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.45)", margin: "6px 0 0 0" }}>
                    Speel verder om Level {maxKiesbaar + 1} vrij te spelen
                  </p>
                )}
              </div>
            )}
            {!heeftLogin && (
              <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>
                💡 Log in om records per level apart te bewaren
              </p>
            )}

            <div style={{
              position: isPortrait ? "sticky" : "static",
              bottom: 0, marginTop: 8,
              padding: "10px 0 6px",
              background: isPortrait
                ? "linear-gradient(to top, rgba(10,5,20,0.96) 60%, rgba(10,5,20,0.4) 100%)"
                : "transparent",
              zIndex: isPortrait ? 5 : "auto",
            }}>
              <button onClick={() => {
                track("obliterator_started", {
                  source: vanDeelLink ? "deeplink" : (wrongQuestions && wrongQuestions.length > 0 ? "results_page" : "menu"),
                  personal_record: persoonlijkRecord || 0,
                  bonus_leven: bonusLeven || 0,
                  start_level: gekozenStartLevel,
                });
                setFase("spelen");
              }} style={{
                width: "100%",
                padding: isPortrait ? "14px 32px" : "10px 28px",
                background: "linear-gradient(135deg, #ffcc40 0%, #ff5030 100%)",
                border: "none", borderRadius: 14, color: "#1a0008",
                fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: isPortrait ? 20 : 17, letterSpacing: 3,
                fontWeight: 700, cursor: "pointer",
                boxShadow: "0 0 20px rgba(255,100,60,0.6)"
              }}>
                🔥 START
              </button>
            </div>
          </div>
        )}

        {fase === "spelen" && (
          <canvas
            ref={canvasRef}
            width={canvasW}
            height={canvasH}
            style={{ display: "block", borderRadius: 8, touchAction: "none", width: canvasW, height: canvasH, background: "#0a0a0e" }}
          />
        )}

        {fase === "vraag" && vraag && (
          <div style={{ padding: "12px 8px" }}>
            <div style={{ textAlign: "center", marginBottom: 14 }}>
              <div style={{ fontSize: 38, marginBottom: 4 }}>👽📚</div>
              <p style={{
                fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: 22, letterSpacing: 2,
                color: "#ffcc40", marginBottom: 4,
                textShadow: "0 0 10px rgba(255,180,60,0.7)"
              }}>OEFENVRAAG</p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, letterSpacing: 1 }}>
                Even oefenen wat je moeilijk vond — goed antwoord = +1 leven volgende keer
              </p>
            </div>

            <div style={{
              padding: "14px 16px", borderRadius: 10, marginBottom: 12,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,150,40,0.3)"
            }}>
              <p style={{ color: "#fff", fontSize: 15, lineHeight: 1.4, fontFamily: "'Nunito', sans-serif" }}>
                {vraag.q}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {vraag.options.map((opt, i) => {
                const isAnswered = vraagAntwoord !== null;
                const isJuist = i === vraag.correct;
                const isGekozen = i === vraagAntwoord;
                let bg = "rgba(255,255,255,0.06)";
                let border = "rgba(255,150,40,0.3)";
                let kleur = "#fff";
                if (isAnswered) {
                  if (isJuist) { bg = "rgba(0,200,83,0.2)"; border = "#00c853"; kleur = "#69f0ae"; }
                  else if (isGekozen) { bg = "rgba(244,67,54,0.2)"; border = "#f44336"; kleur = "#ff6b6b"; }
                  else { bg = "rgba(255,255,255,0.03)"; kleur = "rgba(255,255,255,0.45)"; }
                }
                return (
                  <button
                    key={i}
                    onClick={() => beantwoordVraag(i)}
                    disabled={isAnswered}
                    style={{
                      padding: "12px 14px", borderRadius: 10, textAlign: "left",
                      background: bg, border: `1.5px solid ${border}`,
                      color: kleur, fontSize: 14, fontWeight: 600,
                      cursor: isAnswered ? "default" : "pointer",
                      fontFamily: "'Nunito', sans-serif",
                      transition: "transform 0.1s",
                    }}
                  >
                    <span style={{ marginRight: 8, fontWeight: 700 }}>
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {opt}
                    {isAnswered && isJuist && <span style={{ float: "right" }}>✓</span>}
                    {isAnswered && isGekozen && !isJuist && <span style={{ float: "right" }}>✗</span>}
                  </button>
                );
              })}
            </div>

            {vraagAntwoord !== null && (
              <div style={{ marginTop: 14 }}>
                <div style={{
                  padding: "12px 14px", borderRadius: 10,
                  background: vraagBeloning ? "rgba(0,200,83,0.15)" : "rgba(255,180,60,0.12)",
                  border: `1px solid ${vraagBeloning ? "#00c853" : "rgba(255,180,60,0.4)"}`
                }}>
                  <p style={{ color: vraagBeloning ? "#69f0ae" : "#ffcc40", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
                    {vraagBeloning ? "🎉 Goed! +1 extra leven volgende keer ❤️" : "Geen straf — je leert door 💪"}
                  </p>
                  {vraag.explanation && (
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.4 }}>
                      💡 {vraag.explanation}
                    </p>
                  )}
                </div>
                <button onClick={vraagAfsluiten} style={{
                  marginTop: 10, width: "100%", padding: "12px",
                  background: "linear-gradient(135deg, #ffcc40, #ff5030)",
                  border: "none", borderRadius: 12, color: "#1a0008",
                  fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: 16, letterSpacing: 2,
                  fontWeight: 700, cursor: "pointer"
                }}>
                  ➡️ DOOR NAAR SCOREBORD
                </button>
              </div>
            )}

            {vraagAntwoord === null && (
              <button onClick={vraagAfsluiten} style={{
                marginTop: 14, width: "100%", padding: "8px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, color: "rgba(255,255,255,0.5)",
                fontSize: 12, cursor: "pointer"
              }}>
                Liever overslaan
              </button>
            )}
          </div>
        )}

        {fase === "welkom" && (
          <div style={{ textAlign: "center", padding: "24px 14px" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🎓✨</div>
            <p style={{
              fontFamily: "'Fredoka', sans-serif", fontSize: 22, fontWeight: 700,
              color: "#69f0ae", marginBottom: 6,
              textShadow: "0 0 12px rgba(105,240,174,0.5)"
            }}>Welkom bij Studiebol!</p>
            <p style={{ color: "#ffcc40", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>
              Score: {eindScore}
            </p>
            <div style={{
              padding: "14px 16px", borderRadius: 12, marginBottom: 16,
              background: "rgba(105,240,174,0.08)",
              border: "1px solid rgba(105,240,174,0.35)",
              textAlign: "left", fontFamily: "'Nunito', sans-serif",
              fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.85)"
            }}>
              <div style={{ color: "#69f0ae", fontWeight: 700, marginBottom: 6, fontSize: 14 }}>
                Leuk dat je OBLITERATOR speelt!
              </div>
              <div style={{ marginBottom: 6 }}>
                Studiebol is de <strong>gratis leer-app</strong> waar dit spel in zit:
              </div>
              <div>📚 Cito-eindtoets · spelling · rekenen · wiskunde · talen</div>
              <div>🎓 Voor groep 1-8, MAVO, HAVO, VWO en gymnasium</div>
              <div>🏆 Verdien medailles, kom in de Hall of Fame</div>
              <div>💯 Alles gratis — geen advertenties, geen abonnement</div>
            </div>
            <button onClick={() => onNaarStudiebol?.()} style={{
              width: "100%", padding: "14px 20px",
              background: "linear-gradient(135deg, #00c853, #69f0ae)",
              border: "none", borderRadius: 14, color: "#0d1b2e",
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 17, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,200,83,0.4)",
              marginBottom: 8
            }}>
              🚀 Ontdek Studiebol
            </button>
            <button onClick={() => setFase("menu")} style={{
              width: "100%", padding: "10px 18px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 12, color: "rgba(255,255,255,0.7)",
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 14, fontWeight: 600, cursor: "pointer"
            }}>
              Nog 1 keer spelen
            </button>
          </div>
        )}

        {fase === "custom-editor" && (
          <div style={{ width: "100%", maxWidth: 720, padding: "12px 14px", color: "#fff" }}>
            {(() => {
              const MECHANICA = [
                { id: "spike",         label: "Spike",         emoji: "🔺", kost: 0 },
                { id: "blok",          label: "Blok",          emoji: "🟦", kost: 0 },
                { id: "ring",          label: "Ring",          emoji: "💍", kost: 0 },
                { id: "platform",      label: "Platform",      emoji: "🪂", kost: 0 },
                { id: "plafondstekel", label: "Plafondstekel", emoji: "⬇️", kost: 5 },
                { id: "schans",        label: "Schans",        emoji: "📐", kost: 5 },
                { id: "magneet",       label: "Magneet",       emoji: "🧲", kost: 10 },
                { id: "mijn",          label: "Mijn",          emoji: "💣", kost: 10 },
                { id: "spookje",       label: "Spookje",       emoji: "👻", kost: 5 },
                { id: "hart",          label: "Hartje",        emoji: "❤️", kost: 15 },
                { id: "bom",           label: "Bom",           emoji: "💥", kost: 20 },
              ];
              const DECOR_TOOLS = DECOR_CATALOG.map((d) => ({
                id: d.id, label: d.label, emoji: d.emoji, kost: 0,
              }));
              const ALL_TOOLS = [...MECHANICA, ...DECOR_TOOLS];
              const TOOLS_HUIDIG = paletCategorie === "decor" ? DECOR_TOOLS : MECHANICA;
              const LEVEL_LENGTE = editorLengte;
              const TRACK_HOOGTE = 220;
              // Schaalfactor: hoeveel pixels per game-unit in de editor-canvas.
              // 0.4 = 1 viewport (~320px) toont ongeveer 1 game-screen-width (~800u).
              const PIX_PER_UNIT = 0.4;
              const editorBreedte = LEVEL_LENGTE;
              const innerCanvasW = editorBreedte * PIX_PER_UNIT;
              const tool = ALL_TOOLS.find((t) => t.id === editorTool) || MECHANICA[0];
              const isAdmin = isObliterAdmin;
              const handleScroll = () => {
                const sl = editorScrollRef.current?.scrollLeft || 0;
                if (sl !== editorScrollPx) setEditorScrollPx(sl);
              };
              const handleCanvasTap = (e) => {
                // Tap is op de inner-div (innerCanvasW breed) — getBoundingClientRect
                // geeft inner bounds, dus tapX is positie in inner-canvas (al inclusief scroll).
                const rect = e.currentTarget.getBoundingClientRect();
                const innerX = e.clientX - rect.left;
                const innerY = e.clientY - rect.top;
                if (innerX < 0 || innerY < 0 || innerX > rect.width || innerY > rect.height) return;
                const wereldX = Math.round((innerX / rect.width) * editorBreedte);
                const wereldY = Math.max(0, Math.min(TRACK_HOOGTE, Math.round((innerY / rect.height) * TRACK_HOOGTE)));
                // Kost-check (admin negeert)
                if (!isAdmin && tool.kost > 0 && munten < tool.kost) {
                  setEditorOpslaan({ bezig: false, error: `Niet genoeg munten (${tool.kost} nodig, je hebt er ${munten})`, ok: false });
                  return;
                }
                if (!isAdmin && tool.kost > 0) {
                  setMunten((m) => {
                    const nieuw = Math.max(0, m - tool.kost);
                    try { schrijfInt(muntenKey, nieuw); } catch {}
                    return nieuw;
                  });
                }
                // Vrije Y voor alles — speler bepaalt zelf de hoogte
                setEditorObstakels((arr) => [...arr, { type: tool.id, x: wereldX, y: wereldY }]);
                setEditorOpslaan({ bezig: false, error: null, ok: false });
              };
              const handleMiniMapTap = (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                const targetScroll = (ratio * innerCanvasW) - (editorViewportW / 2);
                if (editorScrollRef.current) {
                  editorScrollRef.current.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
                }
              };
              const handleVerwijderLaatste = () => {
                setEditorObstakels((arr) => arr.slice(0, -1));
              };
              const handleClear = () => {
                if (window.confirm("Alles verwijderen?")) setEditorObstakels([]);
              };
              const handleSave = async (wilPubliek) => {
                if (!authUser?.id) {
                  setEditorOpslaan({ bezig: false, error: "Log in om levels op te slaan", ok: false });
                  return;
                }
                if (editorObstakels.length === 0) {
                  setEditorOpslaan({ bezig: false, error: "Plaats eerst minstens 1 obstakel", ok: false });
                  return;
                }
                setEditorOpslaan({ bezig: true, error: null, ok: false });
                try {
                  const { error } = await supabase
                    .from("obliterator_user_levels")
                    .insert({
                      maker_naam: (userName || "Anoniem").trim(),
                      maker_user_id: authUser.id,
                      naam: editorLevelNaam.trim() || "Naamloos level",
                      obstakels: editorObstakels,
                      lengte: editorLengte,
                      publiek: wilPubliek === true,
                    });
                  if (error) throw error;
                  setEditorOpslaan({ bezig: false, error: null, ok: true });
                  setLevelsReloadTick((t) => t + 1);
                  setTimeout(() => setEditorOpslaan((s) => ({ ...s, ok: false })), 2500);
                } catch (e) {
                  // Trigger-foutmeldingen (max 3 / max 1 publiek) komen ook hier binnen
                  setEditorOpslaan({ bezig: false, error: e?.message || "Opslaan mislukt", ok: false });
                }
              };
              const handleToggleMijnPubliek = async (lv) => {
                try {
                  const { error } = await supabase
                    .from("obliterator_user_levels")
                    .update({ publiek: !lv.publiek })
                    .eq("id", lv.id);
                  if (error) throw error;
                  setLevelsReloadTick((t) => t + 1);
                } catch (e) {
                  alert(e?.message || "Wijzigen mislukt");
                }
              };
              const handleVerwijderMijn = async (lv) => {
                if (!window.confirm(`"${lv.naam}" definitief verwijderen?`)) return;
                try {
                  const { error } = await supabase
                    .from("obliterator_user_levels")
                    .delete()
                    .eq("id", lv.id);
                  if (error) throw error;
                  setLevelsReloadTick((t) => t + 1);
                } catch (e) {
                  alert(e?.message || "Verwijderen mislukt");
                }
              };
              return (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <button
                      onClick={() => setFase("menu")}
                      style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "#fff", cursor: "pointer", fontFamily: "'Fredoka', sans-serif", fontSize: 13 }}
                    >
                      ← Menu
                    </button>
                    <div style={{ fontSize: 12, color: "#ffd54f", fontWeight: 700 }}>💍 {munten} {isAdmin && "(admin = gratis)"}</div>
                  </div>
                  <h2 style={{ fontFamily: "Impact, sans-serif", fontSize: 22, color: "#ff9d40", letterSpacing: 1.5, marginBottom: 8 }}>
                    🎨 CUSTOM LEVELS
                  </h2>
                  {/* Tabs */}
                  <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                    <button
                      onClick={() => setEditorTab("maken")}
                      style={{ flex: 1, padding: "8px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: editorTab === "maken" ? "rgba(255,157,64,0.18)" : "rgba(255,255,255,0.04)", color: editorTab === "maken" ? "#ff9d40" : "rgba(255,255,255,0.6)", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
                    >
                      🛠️ Maken
                    </button>
                    <button
                      onClick={() => setEditorTab("mijn")}
                      style={{ flex: 1, padding: "8px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: editorTab === "mijn" ? "rgba(128,192,255,0.18)" : "rgba(255,255,255,0.04)", color: editorTab === "mijn" ? "#80c0ff" : "rgba(255,255,255,0.6)", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
                    >
                      👤 Mijn
                    </button>
                    <button
                      onClick={() => setEditorTab("spelen")}
                      style={{ flex: 1, padding: "8px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: editorTab === "spelen" ? "rgba(105,240,174,0.15)" : "rgba(255,255,255,0.04)", color: editorTab === "spelen" ? "#69f0ae" : "rgba(255,255,255,0.6)", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
                    >
                      🎮 Spelen
                    </button>
                  </div>
                  {editorTab === "spelen" ? (
                    <div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>
                        Publieke levels — 🏆 Featured staan bovenaan, daarna populair en recent.
                      </div>
                      {communityLevelsLaden && (
                        <div style={{ textAlign: "center", padding: 20, color: "rgba(255,255,255,0.5)" }}>Levels laden…</div>
                      )}
                      {!communityLevelsLaden && communityLevels.length === 0 && (
                        <div style={{ textAlign: "center", padding: 20, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                          Nog geen publieke levels — wees de eerste in "🛠️ Maken"!
                        </div>
                      )}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {communityLevels.map((lv) => (
                          <div
                            key={lv.id}
                            style={{
                              display: "flex", alignItems: "center", gap: 10,
                              padding: "10px 12px", borderRadius: 10,
                              background: lv.featured ? "rgba(255,200,60,0.08)" : "rgba(255,255,255,0.04)",
                              border: lv.featured ? "1px solid rgba(255,200,60,0.45)" : "1px solid rgba(255,255,255,0.10)",
                            }}
                          >
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
                                {lv.featured && <span style={{ fontSize: 11, color: "#ffcc40", background: "rgba(255,200,60,0.15)", padding: "2px 6px", borderRadius: 6, fontWeight: 700, letterSpacing: 0.3 }}>🏆 FEATURED</span>}
                                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{lv.naam}</span>
                              </div>
                              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                                door {lv.maker_naam} · {Array.isArray(lv.obstakels) ? lv.obstakels.length : 0} obstakels · {lv.plays || 0}× gespeeld
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                supabase.rpc("increment_user_level_plays", { level_id: lv.id }).then(() => {});
                                setActiefCustomLevel({
                                  id: lv.id,
                                  naam: lv.naam,
                                  obstakels: Array.isArray(lv.obstakels) ? lv.obstakels : [],
                                  lengte: lv.lengte || 4000,
                                  maker_naam: lv.maker_naam,
                                });
                                setFase("spelen");
                              }}
                              style={{
                                padding: "8px 14px", borderRadius: 8, border: "none",
                                background: "linear-gradient(135deg, #00c853, #00a040)",
                                color: "#0d1b2e", fontFamily: "'Fredoka', sans-serif",
                                fontSize: 12, fontWeight: 800, cursor: "pointer",
                                whiteSpace: "nowrap",
                              }}
                            >
                              ▶️ Spelen
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : editorTab === "mijn" ? (
                    <div>
                      {!authUser?.id ? (
                        <div style={{ textAlign: "center", padding: "30px 16px", color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
                          <div style={{ fontSize: 32, marginBottom: 8 }}>🔒</div>
                          <div style={{ fontWeight: 700, color: "#fff", marginBottom: 6 }}>Log in om je levels te zien</div>
                          <div>Je eigen levels zijn gekoppeld aan je Studiebol-account.</div>
                        </div>
                      ) : (
                        <>
                          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>
                            Je eigen levels — max 3, waarvan max 1 publiek gedeeld.
                          </div>
                          {mijnLevelsLaden && (
                            <div style={{ textAlign: "center", padding: 20, color: "rgba(255,255,255,0.5)" }}>Laden…</div>
                          )}
                          {!mijnLevelsLaden && mijnLevels.length === 0 && (
                            <div style={{ textAlign: "center", padding: 20, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                              Nog geen eigen levels — bouw er een in "🛠️ Maken"!
                            </div>
                          )}
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {mijnLevels.map((lv) => (
                              <div
                                key={lv.id}
                                style={{
                                  display: "flex", alignItems: "center", gap: 8,
                                  padding: "10px 12px", borderRadius: 10,
                                  background: "rgba(255,255,255,0.04)",
                                  border: "1px solid rgba(255,255,255,0.10)",
                                }}
                              >
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
                                    {lv.featured && <span style={{ fontSize: 10, color: "#ffcc40", background: "rgba(255,200,60,0.15)", padding: "2px 6px", borderRadius: 6, fontWeight: 700 }}>🏆</span>}
                                    <span style={{ fontSize: 10, color: lv.publiek ? "#69f0ae" : "rgba(255,255,255,0.5)", background: lv.publiek ? "rgba(105,240,174,0.12)" : "rgba(255,255,255,0.06)", padding: "2px 6px", borderRadius: 6, fontWeight: 700 }}>
                                      {lv.publiek ? "🌐 PUBLIEK" : "🔒 PRIVÉ"}
                                    </span>
                                    <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{lv.naam}</span>
                                  </div>
                                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                                    {Array.isArray(lv.obstakels) ? lv.obstakels.length : 0} obstakels · {lv.plays || 0}× gespeeld
                                  </div>
                                </div>
                                <button
                                  onClick={() => {
                                    setActiefCustomLevel({
                                      id: lv.id,
                                      naam: lv.naam,
                                      obstakels: Array.isArray(lv.obstakels) ? lv.obstakels : [],
                                      lengte: lv.lengte || 4000,
                                      maker_naam: lv.maker_naam,
                                    });
                                    setFase("spelen");
                                  }}
                                  title="Spelen"
                                  style={{ padding: "8px 10px", borderRadius: 8, border: "none", background: "linear-gradient(135deg, #00c853, #00a040)", color: "#0d1b2e", fontSize: 14, fontWeight: 800, cursor: "pointer" }}
                                >
                                  ▶️
                                </button>
                                <button
                                  onClick={() => handleToggleMijnPubliek(lv)}
                                  title={lv.publiek ? "Op privé zetten" : "Publiek delen (max 1)"}
                                  style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
                                >
                                  {lv.publiek ? "🔒" : "🌐"}
                                </button>
                                <button
                                  onClick={() => handleVerwijderMijn(lv)}
                                  title="Verwijderen"
                                  style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,80,40,0.4)", background: "rgba(255,80,40,0.10)", color: "#ff8060", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
                                >
                                  🗑️
                                </button>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : !authUser?.id ? (
                    <div style={{ textAlign: "center", padding: "30px 16px", color: "rgba(255,255,255,0.85)" }}>
                      <div style={{ fontSize: 48, marginBottom: 10 }}>🔐</div>
                      <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
                        Log in om levels te bouwen
                      </div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 16, maxWidth: 360, margin: "0 auto 16px" }}>
                        Je hebt een Studiebol-account nodig om levels te maken, opslaan en delen. Spelen kan zonder account — kies "🎮 Spelen" hierboven.
                      </div>
                      <button
                        onClick={() => onClose?.()}
                        style={{ padding: "12px 22px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #00c853, #69f0ae)", color: "#0d1b2e", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
                      >
                        Naar Studiebol om in te loggen
                      </button>
                    </div>
                  ) : (
                  <>
                  <input
                    type="text"
                    value={editorLevelNaam}
                    onChange={(e) => setEditorLevelNaam(e.target.value)}
                    placeholder="Naam van je level"
                    style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.3)", color: "#fff", fontSize: 14, marginBottom: 8, boxSizing: "border-box" }}
                  />
                  {/* Lengte-keuze */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>📏 Lengte:</span>
                    {[4000, 6000, 8000, 12000, 20000].map((len) => (
                      <button
                        key={len}
                        onClick={() => setEditorLengte(len)}
                        style={{
                          padding: "5px 10px", borderRadius: 7,
                          border: editorLengte === len ? "2px solid #ff9d40" : "1px solid rgba(255,255,255,0.18)",
                          background: editorLengte === len ? "rgba(255,157,64,0.15)" : "rgba(255,255,255,0.04)",
                          color: editorLengte === len ? "#ff9d40" : "rgba(255,255,255,0.65)",
                          fontFamily: "'Fredoka', sans-serif", fontSize: 11, fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {len === 4000 ? "Kort" : len === 6000 ? "Mid" : len === 8000 ? "Lang" : len === 12000 ? "Extra" : "Mega"} · {len}
                      </button>
                    ))}
                  </div>
                  {/* Palet-categorie */}
                  <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                    <button
                      onClick={() => setPaletCategorie("mechanica")}
                      style={{ flex: 1, padding: "6px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.18)", background: paletCategorie === "mechanica" ? "rgba(255,157,64,0.18)" : "rgba(255,255,255,0.04)", color: paletCategorie === "mechanica" ? "#ff9d40" : "rgba(255,255,255,0.65)", fontFamily: "'Fredoka', sans-serif", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
                    >
                      🎮 Mechanica
                    </button>
                    <button
                      onClick={() => setPaletCategorie("decor")}
                      style={{ flex: 1, padding: "6px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.18)", background: paletCategorie === "decor" ? "rgba(105,240,174,0.15)" : "rgba(255,255,255,0.04)", color: paletCategorie === "decor" ? "#69f0ae" : "rgba(255,255,255,0.65)", fontFamily: "'Fredoka', sans-serif", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
                    >
                      🌳 Decor
                    </button>
                  </div>
                  {/* Tools voor de actieve categorie */}
                  <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                    {TOOLS_HUIDIG.map((t) => {
                      const actief = editorTool === t.id;
                      const betaalbaar = isAdmin || t.kost === 0 || munten >= t.kost;
                      return (
                        <button
                          key={t.id}
                          onClick={() => setEditorTool(t.id)}
                          disabled={!betaalbaar}
                          style={{
                            padding: "8px 10px", borderRadius: 10,
                            border: actief ? "2px solid #ff9d40" : "1px solid rgba(255,255,255,0.2)",
                            background: actief ? "rgba(255,157,64,0.18)" : "rgba(255,255,255,0.04)",
                            color: betaalbaar ? "#fff" : "rgba(255,255,255,0.4)",
                            cursor: betaalbaar ? "pointer" : "not-allowed",
                            fontFamily: "'Fredoka', sans-serif", fontSize: 12,
                            display: "flex", alignItems: "center", gap: 4,
                          }}
                          title={t.kost > 0 ? `${t.kost} munten per stuk` : "Gratis"}
                        >
                          <span style={{ fontSize: 18 }}>{t.emoji}</span>
                          <span>{t.label}</span>
                          {t.kost > 0 && (
                            <span style={{ fontSize: 10, color: "#ffd54f", marginLeft: 2 }}>
                              💍{t.kost}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>
                    Tap op het track om <strong>{tool.emoji} {tool.label}</strong> te plaatsen — vrije X &amp; Y
                    {!isAdmin && tool.kost > 0 && ` · kost ${tool.kost} munten`}
                  </div>
                  {/* Track-canvas — scrollable, inner div is editorBreedte * PIX_PER_UNIT breed */}
                  <div
                    ref={editorScrollRef}
                    onScroll={handleScroll}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: TRACK_HOOGTE,
                      overflowX: "auto",
                      overflowY: "hidden",
                      WebkitOverflowScrolling: "touch",
                      background: "linear-gradient(180deg, #1a2740 0%, #2a3f5f 100%)",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.15)",
                      marginBottom: 6,
                    }}
                  >
                    <div
                      onClick={handleCanvasTap}
                      style={{
                        position: "relative",
                        width: innerCanvasW,
                        height: TRACK_HOOGTE,
                        cursor: "crosshair",
                      }}
                    >
                      {/* grond-lijn */}
                      <div style={{ position: "absolute", left: 0, right: 0, bottom: 30, height: 2, background: "rgba(255,255,255,0.3)", pointerEvents: "none" }} />
                      {/* plafond-lijn */}
                      <div style={{ position: "absolute", left: 0, right: 0, top: 18, height: 2, background: "rgba(255,255,255,0.2)", pointerEvents: "none" }} />
                      {/* Start- en eind-vlaggen */}
                      <div style={{ position: "absolute", left: 4, top: 4, fontSize: 10, color: "rgba(105,240,174,0.85)", fontWeight: 700, pointerEvents: "none" }}>▶ START</div>
                      <div style={{ position: "absolute", right: 4, top: 4, fontSize: 10, color: "rgba(255,200,60,0.85)", fontWeight: 700, pointerEvents: "none" }}>FINISH 🏁</div>
                      {editorObstakels.map((o, i) => {
                        const meta = ALL_TOOLS.find((tt) => tt.id === o.type);
                        const isDecor = typeof o.type === "string" && o.type.startsWith("decor_");
                        const xPct = (o.x / editorBreedte) * 100;
                        // Vrije Y — gebruik o.y, met fallback voor backward-compat (oude items zonder y)
                        let yVal = o.y;
                        if (yVal == null) {
                          if (o.type === "plafondstekel") yVal = 18;
                          else if (o.type === "platform") yVal = 110;
                          else yVal = 175;
                        }
                        const yPct = (yVal / TRACK_HOOGTE) * 100;
                        return (
                          <div
                            key={i}
                            style={{
                              position: "absolute",
                              left: `${xPct}%`,
                              top: `${yPct}%`,
                              transform: "translate(-50%, -50%)",
                              fontSize: isDecor ? 18 : 22,
                              opacity: isDecor ? 0.85 : 1,
                              pointerEvents: "none",
                              filter: isDecor ? "drop-shadow(0 1px 2px rgba(0,0,0,0.4))" : "none",
                            }}
                          >
                            {meta?.emoji || "❓"}
                          </div>
                        );
                      })}
                      {editorObstakels.length === 0 && (
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.35)", fontSize: 13, pointerEvents: "none" }}>
                          Tap hier om {paletCategorie === "decor" ? "decor" : "obstakels"} te plaatsen
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Mini-map: hele level in vogelvlucht + viewport-rechthoek */}
                  <div
                    onClick={handleMiniMapTap}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 50,
                      background: "rgba(0,0,0,0.35)",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,0.12)",
                      overflow: "hidden",
                      cursor: "pointer",
                      marginBottom: 8,
                    }}
                    title="Tap om naar dit deel van het level te scrollen"
                  >
                    {/* Decor + obstakel-dots */}
                    {editorObstakels.map((o, i) => {
                      const isDecor = typeof o.type === "string" && o.type.startsWith("decor_");
                      const xPct = (o.x / editorBreedte) * 100;
                      let yVal = o.y;
                      if (yVal == null) yVal = o.type === "plafondstekel" ? 18 : o.type === "platform" ? 110 : 175;
                      const yPct = (yVal / TRACK_HOOGTE) * 100;
                      return (
                        <div
                          key={i}
                          style={{
                            position: "absolute",
                            left: `${xPct}%`,
                            top: `${yPct}%`,
                            transform: "translate(-50%, -50%)",
                            width: isDecor ? 4 : 5,
                            height: isDecor ? 4 : 5,
                            borderRadius: 2,
                            background: isDecor ? "rgba(105,240,174,0.7)" : "rgba(255,200,60,0.95)",
                            pointerEvents: "none",
                          }}
                        />
                      );
                    })}
                    {/* Viewport-rechthoek */}
                    {innerCanvasW > 0 && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: `${(editorScrollPx / innerCanvasW) * 100}%`,
                          width: `${Math.min(100, (editorViewportW / innerCanvasW) * 100)}%`,
                          height: "100%",
                          background: "rgba(255,200,60,0.10)",
                          border: "2px solid rgba(255,200,60,0.6)",
                          borderRadius: 4,
                          pointerEvents: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                    {editorObstakels.length} obstakel{editorObstakels.length === 1 ? "" : "s"} geplaatst · level-lengte {LEVEL_LENGTE}px
                  </div>
                  {editorOpslaan.error && (
                    <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(255,80,40,0.18)", border: "1px solid rgba(255,80,40,0.5)", color: "#ff8060", fontSize: 12, marginBottom: 8 }}>
                      ⚠️ {editorOpslaan.error}
                    </div>
                  )}
                  {editorOpslaan.ok && (
                    <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(105,240,174,0.18)", border: "1px solid rgba(105,240,174,0.5)", color: "#69f0ae", fontSize: 12, marginBottom: 8 }}>
                      ✅ Level opgeslagen!
                    </div>
                  )}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 6 }}>
                    <button
                      onClick={handleVerwijderLaatste}
                      disabled={editorObstakels.length === 0}
                      style={{ padding: "10px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: editorObstakels.length === 0 ? "rgba(255,255,255,0.3)" : "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: editorObstakels.length === 0 ? "not-allowed" : "pointer" }}
                    >
                      ↩️ Laatste weg
                    </button>
                    <button
                      onClick={handleClear}
                      disabled={editorObstakels.length === 0}
                      style={{ padding: "10px", borderRadius: 10, border: "1px solid rgba(255,80,40,0.4)", background: "rgba(255,80,40,0.10)", color: editorObstakels.length === 0 ? "rgba(255,255,255,0.3)" : "#ff8060", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: editorObstakels.length === 0 ? "not-allowed" : "pointer" }}
                    >
                      🗑️ Alles wissen
                    </button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
                    <button
                      onClick={() => handleSave(false)}
                      disabled={editorOpslaan.bezig || editorObstakels.length === 0}
                      style={{ padding: "12px 8px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: editorObstakels.length === 0 ? "not-allowed" : "pointer", opacity: editorObstakels.length === 0 ? 0.5 : 1 }}
                    >
                      {editorOpslaan.bezig ? "…" : "🔒 Opslaan privé"}
                    </button>
                    <button
                      onClick={() => handleSave(true)}
                      disabled={editorOpslaan.bezig || editorObstakels.length === 0}
                      style={{ padding: "12px 8px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #00c853, #00a040)", color: "#0d1b2e", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 800, cursor: editorObstakels.length === 0 ? "not-allowed" : "pointer", opacity: editorObstakels.length === 0 ? 0.5 : 1 }}
                    >
                      {editorOpslaan.bezig ? "…" : "🌐 Opslaan & delen"}
                    </button>
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", textAlign: "center", lineHeight: 1.45 }}>
                    Max 3 levels per speler · max 1 publiek tegelijk gedeeld.<br />
                    Bekijk + beheer je levels onder "👤 Mijn".
                  </div>
                  </>
                  )}
                </>
              );
            })()}
          </div>
        )}

        {fase === "pvp-finished" && pvpResult && (
          <div style={{ textAlign: "center", padding: isPortrait ? "30px 12px" : "12px" }}>
            {(() => {
              const won = pvpResult.winner === pvpRole;
              const draw = pvpResult.winner === "draw";
              const ownScore = pvpRole === "host" ? pvpResult.scores.host : pvpResult.scores.guest;
              const opScore = pvpRole === "host" ? pvpResult.scores.guest : pvpResult.scores.host;
              const opName = pvpRole === "host" ? pvpMatch.guest_name : pvpMatch.host_name;
              return (
                <>
                  <div style={{ fontSize: isPortrait ? 64 : 42, marginBottom: 8 }}>
                    {draw ? "🤝" : won ? "🏆" : "💀"}
                  </div>
                  <p style={{
                    fontFamily: "Impact, 'Arial Black', sans-serif",
                    fontSize: isPortrait ? 30 : 24, letterSpacing: 2.5,
                    color: draw ? "#ffcc40" : won ? "#69f0ae" : "#ff4040",
                    marginBottom: 14,
                    textShadow: `0 0 12px ${draw ? "rgba(255,200,60,0.9)" : won ? "rgba(105,240,174,0.9)" : "rgba(255,60,40,0.9)"}`,
                  }}>
                    {draw ? "GELIJKSPEL" : won ? "GEWONNEN!" : "VERLOREN"}
                  </p>
                  <div style={{
                    display: "flex", justifyContent: "center", gap: 16,
                    marginBottom: 18, fontSize: isPortrait ? 18 : 16,
                  }}>
                    <div style={{ background: "rgba(255,255,255,0.06)", padding: "10px 18px", borderRadius: 12 }}>
                      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Jij</div>
                      <div style={{ color: "#ffcc40", fontSize: 22, fontWeight: 700 }}>{ownScore}</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.06)", padding: "10px 18px", borderRadius: 12 }}>
                      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{opName}</div>
                      <div style={{ color: "#80c0ff", fontSize: 22, fontWeight: 700 }}>{opScore}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      try { pvpSub?.unsub(); } catch {}
                      onClose?.();
                    }}
                    style={{
                      padding: "12px 22px", borderRadius: 12,
                      background: "linear-gradient(135deg, #25d366, #128c7e)",
                      border: "none", color: "#fff",
                      fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    ✓ Klaar — terug naar home
                  </button>
                </>
              );
            })()}
          </div>
        )}
        {fase === "dood" && (
          <div style={{ textAlign: "center", padding: isPortrait ? "20px 12px" : "10px 12px" }}>
            <div style={{ fontSize: isPortrait ? 56 : 36, marginBottom: isPortrait ? 8 : 4 }}>{nieuwRecord ? "🏆" : "👽"}</div>
            <p style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              fontSize: isPortrait ? 28 : 22, letterSpacing: 3,
              color: "#ff4040", marginBottom: isPortrait ? 8 : 4,
              textShadow: "0 0 12px rgba(255,60,40,0.9)"
            }}>OBLITERATED!</p>
            <p style={{ color: "#ffcc40", fontSize: isPortrait ? 22 : 18, marginBottom: 6, fontWeight: 700 }}>Score: {eindScore}</p>
            {nieuwRecord && (
              <p style={{ color: "#69f0ae", fontSize: isPortrait ? 15 : 13, marginBottom: 8, fontWeight: 700 }}>
                🎉 Nieuw persoonlijk record!
              </p>
            )}

            {/* Top high scores — compact in landscape */}
            <div style={{
              marginTop: 10, marginBottom: 12, padding: "10px 14px", borderRadius: 10,
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,150,40,0.3)",
              maxHeight: isPortrait ? 280 : 120, overflowY: "auto"
            }}>
              <div style={{ color: "#ffcc40", fontSize: 13, fontWeight: 700, marginBottom: 4, letterSpacing: 1 }}>
                🏆 SCOREBORD TOP {Math.min(highscores.length, TOP_LIMIT)}
              </div>
              {highscores.slice(0, isPortrait ? 10 : 5).map((h, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between",
                  fontSize: 13, color: h.naam === (userName || "Speler") ? "#69f0ae" : "rgba(255,255,255,0.75)",
                  padding: "2px 0", fontFamily: "'Nunito', sans-serif"
                }}>
                  <span>#{i + 1} {h.naam}{h.level ? <span style={{ color: "rgba(255,204,64,0.85)", marginLeft: 6, fontWeight: 700 }}>L{h.level}</span> : null}</span>
                  <span style={{ fontWeight: 700 }}>{h.score}</span>
                </div>
              ))}
              {highscores.length === 0 && !laden && (
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>Nog geen scores — wees de eerste!</div>
              )}
              {laden && (
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>Scorebord laden…</div>
              )}
            </div>

            {/* DEEL knoppen — share je score */}
            <div style={{
              marginBottom: 14, padding: "10px 12px", borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,150,40,0.25)"
            }}>
              <div style={{ color: "#ffcc40", fontSize: 12, fontWeight: 700, marginBottom: 8, letterSpacing: 1, textAlign: "center" }}>
                📢 DEEL JE SCORE
              </div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={handleWhatsApp} title="WhatsApp" style={{
                  padding: "8px 12px", background: "#25D366", border: "none", borderRadius: 8,
                  color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  fontFamily: "'Fredoka', sans-serif", display: "flex", alignItems: "center", gap: 4
                }}>💬 WhatsApp</button>
                <button onClick={handleFacebook} title="Facebook" style={{
                  padding: "8px 12px", background: "#1877F2", border: "none", borderRadius: 8,
                  color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  fontFamily: "'Fredoka', sans-serif", display: "flex", alignItems: "center", gap: 4
                }}>📘 Facebook</button>
                <button onClick={handleX} title="X (Twitter)" style={{
                  padding: "8px 12px", background: "#000", border: "1px solid #444", borderRadius: 8,
                  color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  fontFamily: "'Fredoka', sans-serif", display: "flex", alignItems: "center", gap: 4
                }}>𝕏 X</button>
                <button onClick={handleCopy} title="Kopieer link" style={{
                  padding: "8px 12px", background: linkGekopieerd ? "#00c853" : "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8,
                  color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  fontFamily: "'Fredoka', sans-serif", display: "flex", alignItems: "center", gap: 4
                }}>{linkGekopieerd ? "✓ Gekopieerd!" : "🔗 Kopieer"}</button>
                {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
                  <button onClick={handleNative} title="Deel via..." style={{
                    padding: "8px 12px", background: "linear-gradient(135deg, #ffcc40, #ff5030)",
                    border: "none", borderRadius: 8, color: "#1a0008",
                    fontSize: 13, fontWeight: 700, cursor: "pointer",
                    fontFamily: "'Fredoka', sans-serif"
                  }}>📤 Deel...</button>
                )}
              </div>
            </div>

            <div style={{
              position: "sticky", bottom: 0, marginTop: 4,
              padding: "12px 0 8px",
              background: "linear-gradient(to top, rgba(10,5,20,0.96) 60%, rgba(10,5,20,0.4) 100%)",
              display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap",
              zIndex: 5,
            }}>
              <button onClick={() => { setFase("menu"); }} style={{
                padding: "12px 24px",
                background: "linear-gradient(135deg, #ffcc40, #ff5030)",
                border: "none", borderRadius: 12, color: "#1a0008",
                fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: 16, letterSpacing: 2,
                fontWeight: 700, cursor: "pointer"
              }}>🔄 OPNIEUW</button>
              <button onClick={onClose} style={{
                padding: "12px 24px", background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12,
                color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer"
              }}>✕ Sluiten</button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes obliterator-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
