import { useEffect, useRef, useState } from "react";
import supabase from "../supabase.js";
import { track } from "../utils.js";

const TOP_LIMIT = 25;

async function laadTopScores() {
  try {
    const { data, error } = await supabase
      .from("obliterator_scores")
      .select("player_name, score, created_at")
      .order("score", { ascending: false })
      .order("created_at", { ascending: true })
      .limit(TOP_LIMIT);
    if (error) return [];
    return (data || []).map(d => ({ naam: d.player_name, score: d.score, datum: d.created_at?.slice(0, 10) }));
  } catch { return []; }
}

async function schrijfScore(naam, userId, score) {
  if (!score || score <= 0) return;
  try {
    await supabase.from("obliterator_scores").insert({
      player_name: (naam || "Speler").slice(0, 30),
      user_id: userId || null,
      score,
    });
  } catch {}
}

const SESSIE_KEY_PREFIX = "obliterator-sessies-";
const BONUS_KEY_PREFIX = "obliterator-bonus-";

function leesInt(key) {
  try { return parseInt(localStorage.getItem(key) || "0", 10) || 0; } catch { return 0; }
}
function schrijfInt(key, val) {
  try { localStorage.setItem(key, String(val)); } catch {}
}

export default function ObliteratorGame({ userName, authUser, wrongQuestions, vanDeelLink, onNaarStudiebol, onClose }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const springRef = useRef(() => {}); // wordt door game-loop ingevuld
  const prRef = useRef(0); // persoonlijk record (refs voor game-loop closure)
  const wrRef = useRef(0); // wereldrecord (top score)
  const startLevelRef = useRef(1); // bij welk level deze sessie begint (1..MAX_LEVEL)
  const [fase, setFase] = useState("menu"); // "menu" | "spelen" | "dood" | "vraag"
  const [eindScore, setEindScore] = useState(0);
  const [highscores, setHighscores] = useState([]);
  const [nieuwRecord, setNieuwRecord] = useState(false);
  const [laden, setLaden] = useState(true);

  const sessieKey = SESSIE_KEY_PREFIX + (userName || "anon");
  const bonusKey = BONUS_KEY_PREFIX + (userName || "anon");
  const [bonusLeven, setBonusLeven] = useState(() => leesInt(bonusKey));

  // vraag-state
  const [vraag, setVraag] = useState(null);
  const [vraagAntwoord, setVraagAntwoord] = useState(null); // null | index
  const [vraagBeloning, setVraagBeloning] = useState(false); // toon "+1 leven" feedback

  // share
  const [linkGekopieerd, setLinkGekopieerd] = useState(false);
  const [shareToast, setShareToast] = useState(null);

  // Levels-state (records per level voor deze speler) — alleen ingelogd
  const [levelRecords, setLevelRecords] = useState({}); // { level: record_score }
  const [gekozenStartLevel, setGekozenStartLevel] = useState(1);
  const MAX_LEVEL_UI = 10;
  const heeftLogin = !!authUser?.id;
  // hoogste level waar je een record op hebt = "vrijgespeeld tot en met"
  const maxVrijgespeeld = Math.max(1, Math.max(...Object.keys(levelRecords).map(k => parseInt(k, 10) + 1), 1));
  const maxKiesbaar = Math.min(MAX_LEVEL_UI, maxVrijgespeeld);
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
  // update startLevelRef bij elke keuze (game-loop leest ref)
  useEffect(() => { startLevelRef.current = gekozenStartLevel; }, [gekozenStartLevel]);
  const SHARE_URL = "https://www.studiebol.online?play=obliterator";
  const shareTekst = (score) =>
    score > 0
      ? `💀 Ik scoorde ${score} punten bij OBLITERATOR! 🔥 Kun jij me verslaan? Speel gratis op Studiebol: ${SHARE_URL}`
      : `💀 Speel OBLITERATOR — gratis Geometry-Dash-stijl mini-game op Studiebol! 🔥 ${SHARE_URL}`;

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
    });
    return () => { actief = false; };
  }, [fase]);

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

    const W = canvas.width;
    const H = canvas.height;
    // schalen tov originele 800x400
    const SCHAAL = W / 800;
    const PLAFOND_HOOGTE = 60 * SCHAAL;
    const GROND_Y = 340 * SCHAAL;
    const SPELER_GROOTTE = 32 * SCHAAL;
    const ZWAARTEKRACHT = 0.75 * SCHAAL;
    const SPRING_KRACHT = -13.5 * SCHAAL;
    const START_SNELHEID = 6 * SCHAAL;
    const MAX_SNELHEID = 10 * SCHAAL;
    const BAKSTEEN_W = 60 * SCHAAL;
    const BAKSTEEN_H = 30 * SCHAAL;

    let spelSnelheid = START_SNELHEID;
    let frameTeller = 0;
    let score = 0;
    let spelLoopt = true;
    let volgendObstakelOver = 60;
    let shakeKracht = 0;
    let raf;
    let scoreElText = 0;
    const startLevens = 3 + bonusLeven;
    const MAX_LEVENS = 5;
    let levens = startLevens;
    let streak = 0;
    let multiplier = 1;
    let multiplierFlashTeller = 0; // frames voor "x3!" flash
    let aantalObstakelsTotaal = 0;
    const bonusHarten = [];
    const COUNTDOWN_FRAMES = 130; // ~2.2 sec @ 60fps (3 stappen van ~43)
    let countdown = COUNTDOWN_FRAMES;
    // Levels: 30 sec per level, max 10 levels (= 5 min totaal voor MAX)
    const LEVEL_DUUR_FRAMES = 1800; // 30 sec @ 60fps
    const MAX_LEVEL = 10;
    let huidigLevel = startLevelRef.current || 1; // start-level uit menu
    let levelGehaaldFlash = 0;
    let levelGehaaldNummer = 0;
    const sessieLevelRecords = {}; // { level: maxScore behaald in dat level } voor opslag bij eindeSessie
    let scoreBijLevelStart = 0;
    // vlieg-power-up
    let vliegFrames = 0; // > 0 = immune
    const VLIEG_DUUR = 600; // 10 sec
    const raketten = []; // pickups in lucht
    // FLIP-power-up (gravity-inversie)
    let flipPending = 0;       // 2-sec countdown na pickup
    const FLIP_PENDING_DUUR = 120;
    let flipFrames = 0;        // > 0 = gevlipt
    const FLIP_DUUR = 600;     // 10 sec
    const flipPickups = [];
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
    // 10 biomes — één per level. Eerst 5 originele, dan 5 nieuwe variaties.
    const BIOMES = [
      // Level 1
      { naam:'GOTHIC CRYPT', emoji:['💀','🦴','☠️','🕷️','⛧'], bgTop:[10,10,14], bgBot:[20,16,28], bakstenenLicht:[42,37,48], bakstenenDonker:[21,17,26], bakstenenHighlight:[80,70,90], lichtbundel:[255,220,100], schedel:[180,170,200], glow:[255,200,100], grondLicht:[42,37,48], grondDonker:[14,10,20] },
      // Level 2
      { naam:"WIZARD'S LAIR", emoji:['🧙','🔮','📚','🕯️','⚗️'], bgTop:[25,12,20], bgBot:[50,25,40], bakstenenLicht:[80,45,50], bakstenenDonker:[40,20,28], bakstenenHighlight:[140,90,100], lichtbundel:[255,180,100], schedel:[220,180,240], glow:[255,130,200], grondLicht:[60,30,38], grondDonker:[20,8,14] },
      // Level 3
      { naam:'MAGIC PORTAL', emoji:['🔮','✨','⭐','🌙','⛧'], bgTop:[10,0,20], bgBot:[30,10,50], bakstenenLicht:[58,37,64], bakstenenDonker:[26,13,42], bakstenenHighlight:[106,74,128], lichtbundel:[200,120,255], schedel:[200,150,255], glow:[220,130,255], grondLicht:[42,26,58], grondDonker:[10,0,20] },
      // Level 4
      { naam:'GRAVEYARD', emoji:['🪦','🌕','🦇','👻','🕯️'], bgTop:[4,8,24], bgBot:[12,18,48], bakstenenLicht:[40,50,75], bakstenenDonker:[18,22,38], bakstenenHighlight:[80,100,140], lichtbundel:[180,200,255], schedel:[220,230,255], glow:[150,180,255], grondLicht:[22,28,50], grondDonker:[6,8,16] },
      // Level 5
      { naam:'INFERNO', emoji:['💀','🔥','⚔️','🗡️','☠️'], bgTop:[16,4,4], bgBot:[40,12,6], bakstenenLicht:[58,32,24], bakstenenDonker:[26,10,8], bakstenenHighlight:[106,53,48], lichtbundel:[255,130,50], schedel:[255,180,140], glow:[255,100,40], grondLicht:[58,16,16], grondDonker:[10,0,0] },
      // Level 6 — Frozen Crypt (ijs/cyaan)
      { naam:'FROZEN CRYPT', emoji:['❄️','🧊','💀','⛄','🦴'], bgTop:[8,18,30], bgBot:[20,40,60], bakstenenLicht:[58,82,108], bakstenenDonker:[24,40,60], bakstenenHighlight:[120,170,210], lichtbundel:[180,230,255], schedel:[200,240,255], glow:[140,220,255], grondLicht:[34,52,76], grondDonker:[10,16,28] },
      // Level 7 — Toxic Swamp (groen-paars)
      { naam:'TOXIC SWAMP', emoji:['🐸','🍄','☠️','🦠','🪲'], bgTop:[8,22,8], bgBot:[18,46,16], bakstenenLicht:[40,72,32], bakstenenDonker:[18,36,14], bakstenenHighlight:[80,140,60], lichtbundel:[160,255,80], schedel:[200,255,180], glow:[120,255,100], grondLicht:[26,52,18], grondDonker:[8,18,4] },
      // Level 8 — Blood Cathedral (zwart-rood)
      { naam:'BLOOD CATHEDRAL', emoji:['🩸','✝️','💀','🦇','⛓️'], bgTop:[20,2,4], bgBot:[60,8,14], bakstenenLicht:[80,20,28], bakstenenDonker:[40,8,12], bakstenenHighlight:[160,40,56], lichtbundel:[255,80,100], schedel:[255,200,200], glow:[255,40,80], grondLicht:[60,12,18], grondDonker:[16,2,4] },
      // Level 9 — Crystal Cave (geel-amber-saffraan)
      { naam:'CRYSTAL CAVE', emoji:['💎','✨','⚡','🌟','🔱'], bgTop:[28,18,4], bgBot:[60,42,8], bakstenenLicht:[110,80,30], bakstenenDonker:[60,42,14], bakstenenHighlight:[200,160,60], lichtbundel:[255,220,80], schedel:[255,240,180], glow:[255,200,60], grondLicht:[80,52,18], grondDonker:[24,14,4] },
      // Level 10 — Void Dimension (zwart met paars-roze accent)
      { naam:'VOID DIMENSION', emoji:['🌌','🕳️','👁️','⛓️','💀'], bgTop:[6,2,16], bgBot:[18,4,30], bakstenenLicht:[60,20,80], bakstenenDonker:[26,10,40], bakstenenHighlight:[140,60,200], lichtbundel:[200,80,255], schedel:[230,180,255], glow:[180,80,255], grondLicht:[36,12,52], grondDonker:[8,2,16] },
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
    function aud() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); return audioCtx; }
    function piep(freq, duur, type = "square", volume = 0.15) {
      try {
        const a = aud();
        const osc = a.createOscillator(), gain = a.createGain();
        osc.type = type; osc.frequency.setValueAtTime(freq, a.currentTime);
        gain.gain.setValueAtTime(volume, a.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, a.currentTime + duur);
        osc.connect(gain); gain.connect(a.destination);
        osc.start(); osc.stop(a.currentTime + duur);
      } catch {}
    }
    function springGeluid() { piep(330, 0.08, "sawtooth", 0.1); setTimeout(() => piep(495, 0.06, "sawtooth", 0.08), 30); }
    function scoreGeluid() { piep(880, 0.05, "sine", 0.08); setTimeout(() => piep(1320, 0.05, "sine", 0.06), 40); }
    function doodGeluid() {
      try {
        const a = aud();
        const osc = a.createOscillator(), gain = a.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, a.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, a.currentTime + 0.5);
        gain.gain.setValueAtTime(0.25, a.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, a.currentTime + 0.5);
        osc.connect(gain); gain.connect(a.destination);
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
        if (!muziek.masterGain) { muziek.masterGain = a.createGain(); muziek.masterGain.gain.value = 0.5; muziek.masterGain.connect(a.destination); }
        muziek.draait = true; muziek.beat = 0; muziek.startTijd = a.currentTime + 0.1;
        plan();
      } catch {}
    }
    function muziekStop() {
      muziek.draait = false;
      if (muziek.schedTimer) clearTimeout(muziek.schedTimer);
    }
    function plan() {
      if (!muziek.draait) return;
      const a = aud();
      const tijdPer16 = 60 / muziek.bpm / 4;
      const lookahead = 0.12;
      while (muziek.startTijd + muziek.beat * tijdPer16 < a.currentTime + lookahead) {
        const t = muziek.startTijd + muziek.beat * tijdPer16;
        const stap = muziek.beat % 16;
        if (stap % 4 === 0) muziekKick(t);
        if (stap === 14) muziekKick(t);
        if (stap === 4 || stap === 12) muziekSnare(t);
        if (stap % 2 === 1) muziekHat(t, stap === 7 || stap === 15);
        const bn = muziek.bassRiff[stap];
        if (bn !== undefined && (stap % 2 === 0 || stap === 7 || stap === 11)) muziekBass(t, bn - 12, tijdPer16 * 1.5);
        if (stap === 0) muziekStem(t, 0, tijdPer16 * 8);
        if (stap === 8) muziekStem(t, 7, tijdPer16 * 4);
        muziek.beat++;
      }
      muziek.schedTimer = setTimeout(plan, 25);
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
      return BIOMES[huidigBioom]?.emoji || ["💀","🦴","☠️","🕷️","⛧"];
    }
    const decoraties = [];
    for (let i = 0; i < 8; i++) decoraties.push({
      x: 150 + i * 200 + Math.random() * 80, y: (90 + Math.random() * 180) * SCHAAL,
      grootte: (32 + Math.random() * 28) * SCHAAL, emoji: (() => { const set = huidigeEmojiSet(); return set[Math.floor(Math.random() * set.length)]; })(),
      parallax: 0.3 + Math.random() * 0.25, rotatie: (Math.random() - 0.5) * 0.4
    });
    function tekenDecoraties() {
      for (const d of decoraties) {
        d.x -= spelSnelheid * d.parallax;
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

    const vleermuizen = [];
    for (let i = 0; i < 3; i++) {
      const y = (80 + Math.random() * 180) * SCHAAL;
      vleermuizen.push({ x: Math.random() * W, y, basisY: y, grootte: (22 + Math.random() * 12) * SCHAAL, fase: Math.random() * Math.PI * 2, snelheid: 1.5 + Math.random() });
    }
    function tekenVleermuizen() {
      for (const v of vleermuizen) {
        v.x -= v.snelheid + spelSnelheid * 0.25;
        v.fase += 0.15;
        v.y = v.basisY + Math.sin(v.fase) * 18;
        if (v.x < -50) { v.x = W + 50; v.basisY = (80 + Math.random() * 180) * SCHAAL; v.snelheid = 1.5 + Math.random(); }
        ctx.save();
        ctx.translate(v.x, v.y);
        const flap = 0.7 + Math.abs(Math.sin(v.fase * 2)) * 0.3;
        ctx.scale(flap, 1);
        ctx.globalAlpha = 0.85; ctx.shadowBlur = 12; ctx.shadowColor = biomeKleur("glow", 0.6);
        ctx.font = `${v.grootte}px serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🦇", 0, 0);
        ctx.restore();
      }
    }

    const fakkels = [];
    for (let i = 0; i < 3; i++) fakkels.push({ x: 200 + i * 280 + Math.random() * 80, y: (130 + Math.random() * 80) * SCHAAL, grootte: 36 * SCHAAL });
    function tekenFakkels() {
      for (const f of fakkels) {
        f.x -= spelSnelheid * 0.4;
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
        g.x -= spelSnelheid * 0.4;
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
    const speler = { x: 100 * SCHAAL, y: GROND_Y, breedte: SPELER_GROOTTE, hoogte: SPELER_GROOTTE, snelheidY: 0, springt: false, rotatie: 0, trailTeller: 0, sprongTeller: 0 };
    function spelerBots() { const m = 4 * SCHAAL; return { x: speler.x + m, y: speler.y + m, breedte: speler.breedte - m * 2, hoogte: speler.hoogte - m * 2 }; }
    function tekenSpeler() {
      const cx = speler.x + speler.breedte / 2;
      const cy = speler.y + speler.hoogte / 2;
      const r = speler.breedte / 2;

      // gouden aura tijdens vliegen (immune)
      if (vliegFrames > 0) {
        ctx.save();
        ctx.translate(cx, cy);
        // pulserend gouden schild
        const pulse = 0.6 + Math.sin(frameTeller * 0.3) * 0.3;
        ctx.shadowBlur = 35; ctx.shadowColor = "#ffcc40";
        ctx.strokeStyle = `rgba(255,204,64,${pulse})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.6, 0, Math.PI * 2);
        ctx.stroke();
        // tweede ring
        ctx.strokeStyle = `rgba(255,255,255,${pulse * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.9, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      ctx.save();
      ctx.translate(cx, cy); ctx.rotate(speler.rotatie);
      ctx.shadowBlur = 25; ctx.shadowColor = vliegFrames > 0 ? "#ffcc40" : "#ff2030";
      const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, 2, 0, 0, r);
      grad.addColorStop(0, "#ff5060"); grad.addColorStop(0.6, "#cc1525"); grad.addColorStop(1, "#7a0010");
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff"; ctx.fillRect(-r, -3 * SCHAAL, r * 2, 6 * SCHAAL);
      ctx.fillStyle = "#aa1020"; ctx.fillRect(-r, -1 * SCHAAL, r * 2, 2 * SCHAAL);
      ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(0, 0, r - 1, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.beginPath(); ctx.arc(-r * 0.4, -r * 0.4, r * 0.18, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }

    // ---------- OBSTAKELS ----------
    const obstakels = [];
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
    function maakObstakel() {
      const r = Math.random();
      let type = 0;
      if (score > 2 && r < 0.30) type = 1;
      else if (score > 6 && r < 0.50) type = 2;
      const breedte = type === 0 ? 24 * SCHAAL : type === 1 ? 54 * SCHAAL : 30 * SCHAAL;
      const hoogte = type === 2 ? 50 * SCHAAL : 32 * SCHAAL;
      obstakels.push({ type, x: W, breedte, hoogte, y: GROND_Y + SPELER_GROOTTE - hoogte, gescoord: false });
    }
    function tekenObstakel(o) {
      if (o.type === 0) tekenStenenStekel(o.x, o.y, o.breedte, o.hoogte);
      else if (o.type === 1) {
        tekenStenenStekel(o.x, o.y, 24 * SCHAAL, o.hoogte);
        tekenStenenStekel(o.x + 30 * SCHAAL, o.y, 24 * SCHAAL, o.hoogte);
      } else tekenStenenBlok(o.x, o.y, o.breedte, o.hoogte);
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
      muziekStart();
      // ONBEPERKT springen — geen cap meer
      {
        const sprongNr = speler.sprongTeller; // 0 = eerste, 1 = tweede, daarna alle vervolg
        // krachten: 100% / 85% / 75% (75% voor elke verdere sprong)
        const kracht = sprongNr === 0 ? 1 : sprongNr === 1 ? 0.85 : 0.75;
        // tijdens FLIP: omgekeerd (omlaag duiken)
        const richting = flipFrames > 0 ? -1 : 1;
        speler.snelheidY = SPRING_KRACHT * kracht * richting;
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

      // Level-detectie: huidigLevel klimt op basis van speltijd vanaf level-startpunt
      const tijdInLevel = frameTeller - (startLevelRef.current - 1) * LEVEL_DUUR_FRAMES;
      const nieuwLevel = Math.min(MAX_LEVEL, startLevelRef.current + Math.floor(tijdInLevel / LEVEL_DUUR_FRAMES));
      if (nieuwLevel !== huidigLevel) {
        // sla record op voor het level dat we nét hebben afgesloten
        const scoreInDitLevel = score - scoreBijLevelStart;
        sessieLevelRecords[huidigLevel] = Math.max(sessieLevelRecords[huidigLevel] || 0, scoreInDitLevel);
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
      }
      if (levelGehaaldFlash > 0) levelGehaaldFlash--;
      // gravity: inverteren tijdens FLIP
      speler.snelheidY += flipFrames > 0 ? -ZWAARTEKRACHT : ZWAARTEKRACHT;
      const yVorig = speler.y;
      speler.y += speler.snelheidY;
      if (speler.springt) speler.rotatie += flipFrames > 0 ? -0.18 : 0.18;

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
      volgendObstakelOver--;
      if (volgendObstakelOver <= 0) {
        maakObstakel();
        // grond-stekels rustiger sinds plafond ze nu aanvult (~50/50)
        // score 0  -> 80-115 frames
        // score 30 -> 50-75 frames
        const minA = Math.max(50, 80 - score * 1.0);
        const variatie = Math.max(15, 35 - score * 0.5);
        volgendObstakelOver = Math.floor(minA) + Math.floor(Math.random() * variatie);
      }
      for (let i = obstakels.length - 1; i >= 0; i--) {
        const o = obstakels[i];
        o.x -= spelSnelheid;
        if (vliegFrames === 0 && flipFrames === 0 && obstRaakt(o)) { levenVerlies(); return; }
        if (!o.gescoord && o.x + o.breedte < speler.x) {
          o.gescoord = true;
          aantalObstakelsTotaal++; // teller voor pickups (niet voor score)
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
          // (plafond-stekel-spawn werkt nu via eigen plafondStekelSpawnTeller, hieronder)
        }
        if (o.x + o.breedte < 0) obstakels.splice(i, 1);
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].dood) particles.splice(i, 1);
      }

      // bonus-harten
      for (let i = bonusHarten.length - 1; i >= 0; i--) {
        const h = bonusHarten[i];
        h.x -= spelSnelheid;
        h.fase += 0.08;
        h.y += Math.sin(h.fase) * 0.5;
        // pickup-check
        const dx = (speler.x + speler.breedte / 2) - h.x;
        const dy = (speler.y + speler.hoogte / 2) - h.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!h.opgepakt && dist < (h.grootte + speler.breedte) / 2) {
          h.opgepakt = true;
          if (levens < MAX_LEVENS) {
            levens++;
          } else {
            score += 5; // cap bereikt: bonus-punten ipv leven
          }
          piep(880, 0.06, "sine", 0.15);
          setTimeout(() => piep(1320, 0.08, "sine", 0.12), 50);
          spawnParticles(h.x, h.y, 16, "#ff4040", { spread: 6, opwaarts: 2, leven: 30, grootte: 4, zwaartekracht: 0.05, glow: 20 });
          spawnParticles(h.x, h.y, 8, "#ffaaaa", { spread: 3, opwaarts: 1, leven: 25, grootte: 3, zwaartekracht: 0, glow: 14 });
        }
        if (h.x < -50 || h.opgepakt) bonusHarten.splice(i, 1);
      }

      // platform spawn — lichtblauwe rust-blokjes halverwege canvas
      platformSpawnTeller--;
      if (platformSpawnTeller <= 0) {
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
        platforms[i].x -= spelSnelheid;
        if (platforms[i].x + platforms[i].breedte < -20) platforms.splice(i, 1);
      }

      // Studiebol-logo achtergrond — af en toe een subtiel logo dat mee-scrollt
      logoSpawnTeller--;
      if (logoSpawnTeller <= 0 && logoGeladen) {
        const grootte = (110 + Math.random() * 80) * SCHAAL;
        const y = (90 + Math.random() * 110) * SCHAAL;
        studiebolLogos.push({ x: W + grootte, y, grootte });
        logoSpawnTeller = 720 + Math.floor(Math.random() * 600); // 12-22 sec
      }
      for (let i = studiebolLogos.length - 1; i >= 0; i--) {
        studiebolLogos[i].x -= spelSnelheid * 0.4; // langzaam = parallax
        if (studiebolLogos[i].x + studiebolLogos[i].grootte < -10) studiebolLogos.splice(i, 1);
      }

      // plafond-stekel spawn (~50/50 met grond-stekels)
      // start vanaf score 3 zodat speler eerst veilig kan inkomen
      plafondStekelSpawnTeller--;
      if (plafondStekelSpawnTeller <= 0 && score >= 3) {
        plafondStekels.push({
          x: W + 40,
          breedte: 26 * SCHAAL,
          hoogte: (24 + Math.random() * 14) * SCHAAL,
        });
        // vergelijkbare cadans als grond, lichte variatie
        plafondStekelSpawnTeller = 90 + Math.floor(Math.random() * 60);
      }

      // plafond-stekels scrollen + collision
      for (let i = plafondStekels.length - 1; i >= 0; i--) {
        const ps = plafondStekels[i];
        ps.x -= spelSnelheid;
        if (vliegFrames === 0 && flipFrames === 0) {
          const stekelBot = (PLAFOND_HOOGTE - 4) + ps.hoogte;
          // hitbox iets krapper voor genadigheid
          const m = 4 * SCHAAL;
          if (
            speler.x + speler.breedte - m > ps.x + m
            && speler.x + m < ps.x + ps.breedte - m
            && speler.y + m < stekelBot
          ) {
            levenVerlies();
            return;
          }
        }
        if (ps.x + ps.breedte < -10) plafondStekels.splice(i, 1);
      }

      // gouden ringen spawn — soms 1, soms een rij
      ringSpawnTeller--;
      if (ringSpawnTeller <= 0) {
        const isRij = Math.random() < 0.45;
        const yBase = (170 + Math.random() * 110) * SCHAAL;
        if (isRij) {
          const aantal = 3 + Math.floor(Math.random() * 3); // 3-5
          const tussenruimte = 36 * SCHAAL;
          // soms recht, soms boog (omhoog/omlaag)
          const boog = (Math.random() - 0.5) * 0.6; // -0.3 .. 0.3
          for (let i = 0; i < aantal; i++) {
            const yOff = boog * (i - (aantal - 1) / 2) * 30 * SCHAAL;
            ringen.push({ x: W + 40 + i * tussenruimte, y: yBase + yOff, fase: i * 0.4, opgepakt: false, grootte: 24 * SCHAAL });
          }
          ringSpawnTeller = 100 + Math.floor(Math.random() * 60);
        } else {
          ringen.push({ x: W + 40, y: yBase, fase: 0, opgepakt: false, grootte: 24 * SCHAAL });
          ringSpawnTeller = 70 + Math.floor(Math.random() * 50);
        }
      }
      // ringen update + pickup
      for (let i = ringen.length - 1; i >= 0; i--) {
        const r = ringen[i];
        r.x -= spelSnelheid;
        r.fase += 0.10;
        const dx = (speler.x + speler.breedte / 2) - r.x;
        const dy = (speler.y + speler.hoogte / 2) - r.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (!r.opgepakt && dist < (r.grootte + speler.breedte) / 2) {
          r.opgepakt = true;
          streak++;
          const oudeMultiplier = multiplier;
          multiplier = Math.min(5, 1 + Math.floor(streak / 5));
          if (multiplier > oudeMultiplier) {
            multiplierFlashTeller = 60;
            spawnParticles(speler.x + 16 * SCHAAL, speler.y + 16 * SCHAAL, 18, "#69f0ae", { spread: 8, opwaarts: 3, leven: 35, grootte: 4, zwaartekracht: 0.15, glow: 18 });
            piep(660, 0.06, "sine", 0.12);
            setTimeout(() => piep(990, 0.06, "sine", 0.12), 60);
            setTimeout(() => piep(1320, 0.08, "sine", 0.10), 120);
          }
          score += multiplier;
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
        r.x -= spelSnelheid;
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
        f.x -= spelSnelheid;
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
        ctx.fillText(heeft ? "❤️" : "🖤", 12 + i * 28 * SCHAAL, 50 * SCHAAL);
      }
      ctx.restore();
    }
    function teken() {
      ctx.save();
      if (shakeKracht > 0.5) ctx.translate((Math.random() - 0.5) * shakeKracht, (Math.random() - 0.5) * shakeKracht);
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
      tekenLichtbundels(); tekenDecoraties(); tekenFakkels(); tekenVleermuizen(); tekenPlafond(); tekenGrond(); tekenMist();

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

      for (const p of particles) p.teken();
      // platforms (achter de speler getekend)
      for (const p of platforms) {
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
      tekenSpeler();
      for (const o of obstakels) tekenObstakel(o);
      for (const ps of plafondStekels) tekenPlafondStekel(ps.x, ps.breedte, ps.hoogte);

      // gouden ringen tekenen
      for (const r of ringen) {
        const pulse = 0.85 + Math.sin(r.fase * 2) * 0.15;
        ctx.save();
        ctx.translate(r.x, r.y);
        ctx.scale(pulse, 1);
        // outer gouden ring
        ctx.shadowBlur = 22;
        ctx.shadowColor = "#ffd700";
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = 4;
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

      // raketten tekenen
      for (const r of raketten) {
        ctx.save();
        ctx.translate(r.x, r.y);
        // pulserende cirkel rondom raket
        ctx.shadowBlur = 24;
        ctx.shadowColor = "#ffcc40";
        ctx.strokeStyle = `rgba(255,204,64,${0.4 + Math.sin(r.fase * 2) * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, r.grootte * 0.75, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = `${r.grootte}px serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("🚀", 0, 0);
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
      ctx.fillText(`SCORE: ${scoreElText}`, 12, 28 * SCHAAL);
      ctx.fillStyle = "#ff8050";
      ctx.textAlign = "right";
      ctx.fillText(`RECORD: ${persoonlijkRecord}`, W - 12, 28 * SCHAAL);

      // Level + voortgang naar volgend level
      const tijdInLevel = frameTeller - (startLevelRef.current - 1) * LEVEL_DUUR_FRAMES;
      const fractieInLevel = (tijdInLevel % LEVEL_DUUR_FRAMES) / LEVEL_DUUR_FRAMES;
      ctx.fillStyle = "#69f0ae";
      ctx.shadowBlur = 8; ctx.shadowColor = "#69f0ae";
      ctx.font = `bold ${14 * SCHAAL}px Impact, Arial Black, sans-serif`;
      ctx.textAlign = "left";
      ctx.fillText(`LEVEL ${huidigLevel}${huidigLevel < MAX_LEVEL ? "" : " (MAX)"}`, 12, 50 * SCHAAL);
      // dunne progressie-balk onder level-tekst
      ctx.shadowBlur = 0;
      const balkW = 90 * SCHAAL;
      ctx.fillStyle = "rgba(105,240,174,0.2)";
      ctx.fillRect(12, 56 * SCHAAL, balkW, 4);
      ctx.fillStyle = "#69f0ae";
      ctx.fillRect(12, 56 * SCHAAL, balkW * fractieInLevel, 4);

      // multiplier-display (alleen bij streak)
      if (multiplier > 1) {
        ctx.fillStyle = multiplier >= 5 ? "#ff4040" : multiplier >= 3 ? "#ffcc40" : "#69f0ae";
        ctx.shadowBlur = 12; ctx.shadowColor = ctx.fillStyle;
        ctx.font = `bold ${18 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`STREAK x${multiplier}`, W / 2, 28 * SCHAAL);
      }

      // vlieg-timer (boven score)
      if (vliegFrames > 0) {
        const seconden = Math.ceil(vliegFrames / 60);
        ctx.fillStyle = "#ffcc40";
        ctx.shadowBlur = 16; ctx.shadowColor = "#ffcc40";
        ctx.font = `bold ${16 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`🚀 ONKWETSBAAR ${seconden}s`, W / 2, 50 * SCHAAL);
      }

      // FLIP-timer (rechts naast vlieg-timer of op zelfde plek)
      if (flipFrames > 0) {
        const sec = Math.ceil(flipFrames / 60);
        const eindigtBijna = flipFrames < 90;
        ctx.fillStyle = eindigtBijna ? "#ff6060" : "#80c0ff";
        ctx.shadowBlur = 16; ctx.shadowColor = ctx.fillStyle;
        ctx.font = `bold ${16 * SCHAAL}px Impact, Arial Black, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`🔄 FLIP ${sec}s${eindigtBijna ? " — EINDIGT!" : ""}`, W / 2, vliegFrames > 0 ? 70 * SCHAAL : 50 * SCHAAL);
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
    }
    function lus() {
      update(); teken();
      if (spelLoopt) raf = requestAnimationFrame(lus);
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
        tekenBakstenenMuur(); tekenGlasInLood();
        if (logoGeladen && studiebolLogos.length) {
          ctx.save(); ctx.globalAlpha = 0.42;
          for (const l of studiebolLogos) ctx.drawImage(logoImg, l.x, l.y, l.grootte, l.grootte);
          ctx.restore();
        }
        tekenLichtbundels(); tekenDecoraties(); tekenFakkels(); tekenVleermuizen(); tekenPlafond(); tekenGrond(); tekenMist();
        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update(); particles[i].teken();
          if (particles[i].dood) particles.splice(i, 1);
        }
        for (const o of obstakels) tekenObstakel(o);
        for (const ps of plafondStekels) tekenPlafondStekel(ps.x, ps.breedte, ps.hoogte);
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
      particles.length = 0;
      bonusHarten.length = 0;
      raketten.length = 0;
      flipPickups.length = 0;
      ringen.length = 0;
      ringSpawnTeller = 60;
      platforms.length = 0;
      platformSpawnTeller = 240;
      plafondStekels.length = 0;
      plafondStekelSpawnTeller = 240;
      studiebolLogos.length = 0;
      logoSpawnTeller = 360;
      vliegFrames = 0;
      flipFrames = 0;
      flipPending = 0;
      speler.x = 100 * SCHAAL;
      speler.y = GROND_Y;
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
      // sla level-records op naar Supabase (alleen voor ingelogde users)
      // huidige level krijgt ook een record (score sinds level-start)
      const scoreInHuidigLevel = score - scoreBijLevelStart;
      sessieLevelRecords[huidigLevel] = Math.max(sessieLevelRecords[huidigLevel] || 0, scoreInHuidigLevel);
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

      schrijfScore(userName, authUser?.id, score).then(() => {
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
    setBiomeVoorLevel(startLevelRef.current);
    levelUpFlash = 0; // we tonen geen "level X gehaald" voor de start zelf
    if (startLevelRef.current > 1) {
      // pre-set frameTeller zodat density-formule meteen op level-niveau zit
      frameTeller = (startLevelRef.current - 1) * LEVEL_DUUR_FRAMES;
      score = startLevelRef.current * 5;
      scoreElText = score;
      scoreBijLevelStart = score;
    }

    raf = requestAnimationFrame(lus);

    return () => {
      spelLoopt = false;
      cancelAnimationFrame(raf);
      muziekStop();
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", onPointer);
      springRef.current = () => {};
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
    ? highscores.map((h, i) => `🏆 #${i + 1} ${h.naam} — ${h.score}`).join("    •    ")
    : "Nog geen high scores — wees de eerste! 💀";

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
        paddingBottom: fase === "dood" || fase === "vraag" ? 80 : 12,
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
            <div style={{ fontSize: isPortrait ? 56 : 32, marginBottom: isPortrait ? 8 : 2 }}>💀🔥💀</div>
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
            <p style={{ color: "#ff8050", fontSize: isPortrait ? 14 : 12, marginBottom: isPortrait ? 14 : 6 }}>
              {Array(3 + bonusLeven).fill("❤️").join(" ")}
              {bonusLeven > 0 && <span style={{ color: "#69f0ae", marginLeft: 8 }}>(+1 bonus!)</span>}
            </p>

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
              <div>🚀 <strong style={{ color: "#ffcc40" }}>Raket pakken</strong> = 10 sec ONKWETSBAAR (geen schade van stekels!)</div>
              <div>🔄 <strong style={{ color: "#80c0ff" }}>FLIP pakken</strong> = 10 sec ondersteboven op het plafond (na 2 sec waarschuwing)</div>
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
            {/* Level-keuze (alleen voor ingelogde users) */}
            {heeftLogin && (
              <div style={{ marginBottom: 14, padding: "10px 12px", borderRadius: 10, background: "rgba(105,240,174,0.08)", border: "1px solid rgba(105,240,174,0.3)" }}>
                <div style={{ color: "#69f0ae", fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 6, textAlign: "center" }}>
                  KIES JE STARTLEVEL
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                  {Array.from({ length: maxKiesbaar }).map((_, i) => {
                    const lvl = i + 1;
                    const rec = levelRecords[lvl];
                    const isSelected = gekozenStartLevel === lvl;
                    return (
                      <button key={lvl} onClick={() => setGekozenStartLevel(lvl)} style={{
                        padding: "6px 10px", borderRadius: 8, border: "none",
                        background: isSelected
                          ? "linear-gradient(135deg, #00c853, #69f0ae)"
                          : "rgba(255,255,255,0.08)",
                        color: isSelected ? "#0d1b2e" : "#fff",
                        fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: 13, letterSpacing: 1,
                        fontWeight: 700, cursor: "pointer", minWidth: 36,
                      }}>
                        L{lvl}{rec ? <span style={{ display: "block", fontSize: 9, fontWeight: 600, opacity: 0.85 }}>{rec}</span> : null}
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
                💡 Log in om je level-progressie en records op te slaan
              </p>
            )}

            <button onClick={() => {
              track("obliterator_started", {
                source: vanDeelLink ? "deeplink" : (wrongQuestions && wrongQuestions.length > 0 ? "results_page" : "menu"),
                personal_record: persoonlijkRecord || 0,
                bonus_leven: bonusLeven || 0,
                start_level: heeftLogin ? gekozenStartLevel : 1,
              });
              setFase("spelen");
            }} style={{
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
              <div style={{ fontSize: 38, marginBottom: 4 }}>💀📚</div>
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

        {fase === "dood" && (
          <div style={{ textAlign: "center", padding: isPortrait ? "20px 12px" : "10px 12px" }}>
            <div style={{ fontSize: isPortrait ? 56 : 36, marginBottom: isPortrait ? 8 : 4 }}>{nieuwRecord ? "🏆" : "💀"}</div>
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
                  <span>#{i + 1} {h.naam}</span>
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
