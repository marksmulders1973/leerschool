// ZookwartierGame — pagina-wrapper voor "Mijn Park" (3D verzamel-dierentuin).
// Vast mini-park (paden/draaimolen/poppetje/verblijven) + zelf dieren plaatsen
// (kost muntjes), verplaatsen, of weghalen (muntjes terug). Indeling + muntjes
// bewaard in Supabase. Muntjes verdien je met dagelijks inloggen + kwartier leren.
//
// De zware three.js-scene laadt lazy, zodat de leer-app snel blijft.
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { getDailyGoal } from "../shared/dailyGoal";
import { loadZooState, saveZooState, defaultState, STARTER_LAYOUT, getShareCode } from "../features/zoo/zooState";
import { applyDailyLogin, applyKwartierReward, inkomstenPerDag, groeiBabies, verwaarloosCheck, dagenVerschil, vandaag, BABY_BONUS, MAX_DAGEN_INKOMST, loonkostenPerDag, VERKOPER_LOON, VERKOPER_LOON_EURO } from "../features/zoo/zooEconomy";
import { PLAATSBARE_DIEREN, PLAATSBARE_BOUWWERKEN, PLAATSBARE_ATTRACTIES, PLAATSBARE_HEKKEN, PLAATSBARE_NATUUR, PLAATSBARE_BLOKKEN, isBlok, getAsset, cellsVan, KRAAM_SOORTEN, KRAAM_KEYS, KRAAM_PRODUCTEN, CHARACTERS, CHARACTER_BY_ID, DEFAULT_AVATAR } from "../features/zoo/AssetRegistry";
import { HALF, CELL, KUB, footprint, cellKey, cellToWorld } from "../features/zoo/grid";
import { serialize as serTerrain, deserialize as deserTerrain } from "../features/zoo/terrain";
import { computeWater, bronRaaktCel } from "../features/zoo/water";
import { GROUND_TYPES } from "../features/zoo/ground";
import { track } from "../utils.js";
import { loadMasteryForPlayer, recommendNextTopic } from "../features/mastery/mastery.js";
import Loonstrook, { InkoopBon } from "./EconomieUitleg";
import { splitsBtw, btwTarief } from "../features/zoo/btw";
import { nieuweVrijspeelDieren, VRIJSPEEL_DIEREN, vrijspeelDier, DINO_MIJLPALEN } from "../features/zoo/unlocks";
import BuddyPicker from "../features/zoo/BuddyPicker";
import BuddyChat from "../features/zoo/BuddyChat";
import { gekozenBuddy, heeftGekozen, telGeleerdeStappen, buddyNaam as buddyNaamVan, BUDDY_BY_ID, volgendeBuddyVraag, beantwoordBuddyVraag, stelBuddyVraagUit, wisBuddyWeetjes } from "../features/zoo/buddies";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));
// Maatje-hulp bij de reken-vragen (zelfde tutor als in de leerpaden — het
// maatje dat in het park rondloopt, denkt óók mee). Lazy: laadt pas bij gebruik.
const AITutor = lazy(() => import("../features/learn/AITutor.jsx"));

// Vinger als aanwijzer (telefoon/tablet) → joystick tonen; met een muis (laptop/
// desktop) niet: daar loop je met WASD/pijltjes en draai je de camera met slepen.
const COARSE_POINTER = typeof window !== "undefined" && !!window.matchMedia?.("(pointer: coarse)")?.matches;

// Touch-joystick (telefoon) om het poppetje te laten lopen. Schrijft naar
// inputRef.current.joy (genormaliseerd -1..1). Werkt ook met de muis.
function Joystick({ inputRef }) {
  const base = useRef(null);
  const active = useRef(false);
  const [knob, setKnob] = useState({ x: 0, y: 0 });
  const R = 44;
  const naar = (cx, cy) => {
    const r = base.current.getBoundingClientRect();
    let dx = cx - (r.left + r.width / 2);
    let dy = cy - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = (dx / d) * R; dy = (dy / d) * R; }
    setKnob({ x: dx, y: dy });
    inputRef.current.joy = { x: dx / R, y: dy / R };
  };
  const stop = () => { active.current = false; setKnob({ x: 0, y: 0 }); inputRef.current.joy = { x: 0, y: 0 }; };
  return (
    <div
      ref={base}
      onPointerDown={(e) => { active.current = true; try { e.currentTarget.setPointerCapture(e.pointerId); } catch {} naar(e.clientX, e.clientY); }}
      onPointerMove={(e) => { if (active.current) naar(e.clientX, e.clientY); }}
      onPointerUp={stop}
      onPointerCancel={stop}
      style={{ position: "absolute", left: 16, bottom: 92, width: 104, height: 104, borderRadius: "50%", background: "rgba(255,255,255,0.26)", border: "2px solid rgba(255,255,255,0.55)", zIndex: 12, touchAction: "none", boxShadow: "0 3px 10px rgba(0,0,0,.2)" }}
    >
      <div style={{ position: "absolute", left: "50%", top: "50%", width: 44, height: 44, marginLeft: -22, marginTop: -22, transform: `translate(${knob.x}px, ${knob.y}px)`, borderRadius: "50%", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 6px rgba(0,0,0,.3)" }} />
    </div>
  );
}

// Eerstepersoons-besturing: richten + lopen met muis of vinger. Schrijft naar
// inputRef.current.look = { active, dx, dy } (active = ingedrukt → vooruit).
//  • Muis (laptop): beweeg om rond te kijken (positie t.o.v. midden draait/kijkt,
//    met dode zone in het midden); linkerknop ingedrukt houden = vooruit lopen.
//  • Touch (telefoon): vinger neerzetten = lopen; tijdens vasthouden links/rechts
//    vegen = draaien, omhoog/omlaag = omhoog/omlaag kijken.
function LookControl({ inputRef }) {
  const ref = useRef(null);
  const drag = useRef(null);
  const set = (patch) => { const l = inputRef.current.look || (inputRef.current.look = { active: false, dx: 0, dy: 0 }); Object.assign(l, patch); };
  const clamp = (v) => Math.max(-1, Math.min(1, v));
  const dz = (v) => { const a = Math.abs(v); return a < 0.18 ? 0 : Math.sign(v) * Math.min(1, (a - 0.18) / 0.6); };
  const onDown = (e) => {
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    if (e.pointerType === "touch") drag.current = { x: e.clientX, y: e.clientY };
    set({ active: true });
  };
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    if (e.pointerType === "touch") {
      if (!drag.current) return;
      set({ dx: clamp((e.clientX - drag.current.x) / (r.width * 0.22)), dy: clamp((e.clientY - drag.current.y) / (r.height * 0.22)) });
    } else {
      set({ dx: dz((e.clientX - (r.left + r.width / 2)) / (r.width / 2)), dy: dz((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) });
    }
  };
  const onUp = (e) => {
    drag.current = null;
    if (e.pointerType === "touch") set({ active: false, dx: 0, dy: 0 });
    else set({ active: false });
  };
  const leave = () => { drag.current = null; set({ active: false, dx: 0, dy: 0 }); };
  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={leave}
      onPointerLeave={(e) => { if (e.pointerType !== "touch") leave(); }}
      style={{ position: "absolute", inset: 0, zIndex: 5, touchAction: "none", cursor: "crosshair" }}
    />
  );
}

// Echte reken-vraag bij een kraam, met de eigen cijfers (inkoop/verkoop) zodat het
// kind winst/prijs leert rekenen terwijl het speelt. Meerkeuze (3 opties). Geen AI
// nodig — gewone sommen die we zelf maken.
function maakRekenVraag(kraam) {
  const inkoop = kraam?.inkoop ?? 2;
  const verkoop = kraam?.verkoop ?? 4;
  const label = (kraam?.label || "product").toLowerCase();
  const winst = verkoop - inkoop;
  const kanWinst = winst > 0;
  const rnd = (n) => Math.floor(Math.random() * n);
  // Bij winst ≤ 0 alleen vragen die niet op winst leunen (prijs zoeken / omzet).
  const types = kanWinst ? [0, 1, 2, 3] : [2, 3];
  const type = types[rnd(types.length)];
  let vraag, antwoord;
  if (type === 0) {
    vraag = `Je koopt een ${label} in voor ${inkoop} 🪙 en verkoopt 'm voor ${verkoop} 🪙. Hoeveel winst maak je per stuk?`;
    antwoord = verkoop - inkoop;
  } else if (type === 1) {
    const n = 2 + rnd(4);
    vraag = `Je verkoopt ${n} keer een ${label} met ${winst} 🪙 winst per stuk. Hoeveel winst in totaal?`;
    antwoord = n * winst;
  } else if (type === 2) {
    const doel = 2 + rnd(4);
    vraag = `Een ${label} kost jou ${inkoop} 🪙 inkoop. Je wilt er ${doel} 🪙 winst op maken. Voor hoeveel moet je 'm verkopen?`;
    antwoord = inkoop + doel;
  } else {
    const n = 2 + rnd(4);
    vraag = `Je verkoopt ${n} keer een ${label} voor ${verkoop} 🪙 per stuk. Hoeveel muntjes krijg je binnen?`;
    antwoord = n * verkoop;
  }
  // Twee plausibele afleiders rond het juiste antwoord.
  const set = new Set([antwoord]);
  let pogingen = 0;
  while (set.size < 3 && pogingen++ < 30) {
    const delta = rnd(5) - 2;            // -2..2
    const cand = antwoord + (delta === 0 ? 3 : delta);
    if (cand > 0 && cand !== antwoord) set.add(cand);
  }
  const opties = [...set].sort(() => Math.random() - 0.5);
  return { vraag, antwoord, opties, emoji: kraam?.emoji || "🧮" };
}

// Winkel: alles plaatsbaar, opgebouwd uit de AssetRegistry, per categorie.
const mkItem = (id) => { const a = getAsset(id); return { assetId: id, emoji: a.emoji, label: a.name, price: a.price, kind: a.kind }; };
const DIEREN_SHOP = PLAATSBARE_DIEREN.map(mkItem);
const BOUW_SHOP = PLAATSBARE_BOUWWERKEN.map(mkItem);
const ATTRACTIE_SHOP = PLAATSBARE_ATTRACTIES.map(mkItem);
const HEK_SHOP = PLAATSBARE_HEKKEN.map(mkItem);
const NATUUR_SHOP = PLAATSBARE_NATUUR.map(mkItem);
const BLOK_SHOP = PLAATSBARE_BLOKKEN.map(mkItem);
const SHOP_CATS = [
  { key: "dier", label: "🦊 Dieren", items: DIEREN_SHOP },
  { key: "blok", label: "🧱 Blokken", items: BLOK_SHOP },
  { key: "hek", label: "🚧 Hekken", items: HEK_SHOP },
  { key: "gebouw", label: "🏠 Gebouwen", items: BOUW_SHOP },
  { key: "attractie", label: "🎠 Attracties", items: ATTRACTIE_SHOP },
  { key: "natuur", label: "🌳 Natuur & bouwen", items: NATUUR_SHOP },
];
const MAX_BLOKKEN = 2000; // totaal-cap (instanced → 2 draw-calls, ook op telefoons vlot)
const MAX_STAPEL = 10;    // max bouwhoogte in kubus-lagen (10 m)

// Migratie (2 jul, kleinere blokken): oude "grote" blokken (2×2 m plaat op
// cel+h) worden bij het laden omgezet naar 4 kubussen van 1×1×1 m per laag —
// alles blijft staan, maar nu fijn verbouwbaar.
function migreerBlokken(layout) {
  if (!Array.isArray(layout)) return layout;
  return layout.flatMap((it) => {
    if (!isBlok(it.assetId) || it.kx != null || !it.cell) return [it];
    const [wx, wz] = cellToWorld(it.cell[0], it.cell[1]);
    const kubs = [];
    for (const dx of [-0.5, 0.5]) {
      for (const dz of [-0.5, 0.5]) {
        kubs.push({ assetId: it.assetId, kx: Math.floor(wx + dx), kz: Math.floor(wz + dz), kh: it.h || 0, price: 0 });
      }
    }
    return kubs;
  });
}

// 🏠 Bouwpakketten (Mark 2 jul): kant-en-klare blok-gebouwtjes als startpunt.
// Elk pakket wordt neergezet als LOSSE blokken → kinderen kunnen er daarna
// blokje voor blokje aan verbouwen (weghalen, ramen bijzetten, hoger maken).
function blauwdruk(naam) {
  // Maten in KUBUSSEN van 1×1×1 m (fijn raster) — dx/dz relatief, h = laag.
  const b = [];
  const zet = (dx, dz, h, id) => b.push({ dx, dz, h, id });
  if (naam === "huis") {
    // 9×7 m huisje: baksteen-muren 3 hoog, ramen van 2 kubussen, deuropening
    // van 2 hoog, houten plafond en een dak-nok van punt-kubussen.
    for (let x = -4; x <= 4; x++) {
      for (let z = -3; z <= 3; z++) {
        const rand = x === -4 || x === 4 || z === -3 || z === 3;
        if (rand) {
          const deur = (x === 0 || x === 1) && z === 3;
          const raam = (x === -4 || x === 4) ? Math.abs(z) === 1 : (z === -3 && Math.abs(x) === 2);
          for (let h = 0; h <= 2; h++) {
            if (deur && h <= 1) continue;
            zet(x, z, h, raam && h === 1 ? "blokGlas" : "blokBaksteen");
          }
        }
        zet(x, z, 3, "blokHout");
      }
    }
    for (let x = -4; x <= 4; x++) { zet(x, 0, 4, "blokHout"); zet(x, 0, 5, "blokDak"); }
  } else if (naam === "toren") {
    // 5×5 m kasteel-toren, 7 hoog, kijkgaten, kantelen + dak-punten.
    for (let h = 0; h < 7; h++) {
      for (let x = -2; x <= 2; x++) {
        for (let z = -2; z <= 2; z++) {
          if (Math.abs(x) !== 2 && Math.abs(z) !== 2) continue;
          if (x === 0 && z === 2 && h <= 1) continue; // deuropening
          const raam = h === 5 && (x === 0 || z === 0);
          zet(x, z, h, raam ? "blokGlas" : "blokSteen");
        }
      }
    }
    for (let x = -2; x <= 2; x += 2) for (let z = -2; z <= 2; z += 2) zet(x, z, 7, "blokDak");
  } else if (naam === "hok") {
    // 7×5 m open dierenhok: houten muurtje 1 hoog met een brede ingang.
    for (let x = -3; x <= 3; x++) {
      for (let z = -2; z <= 2; z++) {
        const rand = Math.abs(x) === 3 || Math.abs(z) === 2;
        if (rand && !((x === 0 || x === 1) && z === 2)) zet(x, z, 0, "blokHout");
      }
    }
  }
  return b;
}
const PAKKETTEN = [
  { key: "huis", emoji: "🏠", label: "Huisje" },
  { key: "toren", emoji: "🏰", label: "Toren" },
  { key: "hok", emoji: "🐴", label: "Dierenhok" },
];
// Stabiele lege grond-map (zelfde referentie) → terrein herberekent niet onnodig.
const EMPTY_GROUND = {};
const isDier = (assetId) => getAsset(assetId)?.kind === "animal";
const kindVan = (assetId) => getAsset(assetId)?.kind;
const prijsVan = (assetId) => getAsset(assetId)?.price ?? 0;

export default function ZookwartierGame({ onHome, userName, authUser, onPlayObliterator, onOpenLeerpad, onOpenLeerpaden, onOpenMaatje }) {
  const naam = (userName || "").trim();
  const parkNaam = naam ? `${naam}'s Park` : "Mijn Park";
  const userId = authUser?.id || null;

  const [meta, setMeta] = useState(null);
  const [placedItems, setPlacedItems] = useState(STARTER_LAYOUT);
  const [placing, setPlacing] = useState(null); // { assetId, price, moveIdx? }
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [reward, setReward] = useState(null);
  const [loonstrook, setLoonstrook] = useState(null); // {netto, niveau} — opt-in loonstrookje na kwartier
  const [inkoopBon, setInkoopBon] = useState(null); // bonnetje (btw zichtbaar) bij het kopen van een dier
  const inkoopBonGetoondRef = useRef(false); // bon hooguit 1× per parksessie — breekt de speelflow nooit
  const [unlockMelding, setUnlockMelding] = useState(null); // viering bij een nieuw vrijgespeeld dier
  const unlockCheckedRef = useRef(false); // unlock-check hooguit 1× per parksessie
  const [saleStats, setSaleStats] = useState({}); // per kraamsoort: {count, opbrengst} deze parksessie
  const [kraamOverzicht, setKraamOverzicht] = useState(null); // welke kraamsoort z'n dagoverzicht open is
  const [melding, setMelding] = useState(null);
  const [panel, setPanel] = useState(null); // 'uitleg' | 'gids' | 'delen' | 'autobouw' | null
  const [autoBudget, setAutoBudget] = useState(0); // 🏗️ muntjes-inzet voor auto-bouw
  const [shareUrl, setShareUrl] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [shopCat, setShopCat] = useState("dier");
  const [colorMode, setColorMode] = useState(false);   // huis-onderdelen inkleuren
  const [brushColor, setBrushColor] = useState("#e2574c"); // gekozen verfkleur
  const [houseParts, setHouseParts] = useState(null);   // gevonden onderdelen (basiskleuren) van het gekozen huis
  const [activePart, setActivePart] = useState(0);      // welk onderdeel je nu kleurt
  const [followCam, setFollowCam] = useState(false);    // vrij rondkijken (orbit + volgt poppetje)
  const [firstPerson, setFirstPerson] = useState(false); // eerstepersoons (door de ogen van je poppetje)
  const [buddyEye, setBuddyEye] = useState(false);      // 🐉 door de ogen van je buddy
  const [rideTrain, setRideTrain] = useState(false);    // 🚂 camera rijdt mee met de trein
  const [rideIdx, setRideIdx] = useState(null);         // 🎠 in welke attractie zit je? (index)
  const [zweef, setZweef] = useState(false);            // 🪽 zweef-modus (Minecraft-fly): snel + over alles heen
  // Standaard (alle uit) = derde-persoons achter de speler (poppetje + buddy in beeld).
  // 🐾 maatje — Charley is het STANDAARD maatje (Mark 1 jul); wie zelf iets koos
  // houdt z'n keuze.
  const [buddyId, setBuddyId] = useState(() => gekozenBuddy() || "charley");
  const [buddyNaamEff, setBuddyNaamEff] = useState(() => { const id = gekozenBuddy() || "charley"; return buddyNaamVan(id, BUDDY_BY_ID[id]?.naam || ""); });
  const [buddyPickerOpen, setBuddyPickerOpen] = useState(false);
  const [buddyChatOpen, setBuddyChatOpen] = useState(false); // 💬 praten met je maatje (AI)
  const [geleerdeStappen, setGeleerdeStappen] = useState(0); // voor maatjes-ontgrendeling
  const [menuOpen, setMenuOpen] = useState(false);       // ☰-menu (fullscreen) met alle extra functies
  const [bouwen, setBouwen] = useState(false);           // bouw-modus: winkelbalk in beeld (anders alleen park)
  const [besturingHint, setBesturingHint] = useState(!COARSE_POINTER); // korte WASD/sleep-hint op laptop
  const [bouwTip, setBouwTip] = useState(false);         // eenmalige maatje-tip "je kunt zelf bouwen!"
  const [buddyVraag, setBuddyVraag] = useState(null);    // 💬 dagelijks kennismakings-vraagje van het maatje
  const [buddyAntwoord, setBuddyAntwoord] = useState("");
  // 🎒 Blokjes-rugzak (12-agent-review): weghakken = verzamelen. Het aantal
  // per bloksoort staat als badge op de blok-knop; terugplaatsen haalt het
  // er weer uit. Puur verzamel-plezier (blokken kosten toch niks).
  const [rugzak, setRugzak] = useState(() => { try { return JSON.parse(localStorage.getItem("lk_blok_rugzak") || "{}") || {}; } catch { return {}; } });
  const zetRugzak = (fn) => setRugzak((r) => { const n = fn({ ...r }); try { localStorage.setItem("lk_blok_rugzak", JSON.stringify(n)); } catch { /* */ } return n; });
  const pakIn = (id) => { if (isBlok(id)) zetRugzak((r) => { r[id] = (r[id] || 0) + 1; return r; }); };
  const pakUit = (id) => zetRugzak((r) => { if (r[id] > 0) r[id] -= 1; if (!r[id]) delete r[id]; return r; });
  const bouwCursorRef = useRef(null);                    // 🎯 waar het richt-blok nu staat {cell, h}
  const [welkomWeg, setWelkomWeg] = useState(false);     // onboarding-hint weggeklikt?
  const [goedeScore, setGoedeScore] = useState(null);    // mooie Leerkwartier-score → bezoeker maakt er een compliment over
  const [oefenPad, setOefenPad] = useState(null);        // aanbevolen onderwerp om te oefenen { id, title, subject }
  const [zwakVak, setZwakVak] = useState("");            // vak dat het lastigst gaat → bezoeker kan ernaar vragen
  const [dialoog, setDialoog] = useState(null);          // open praatje met een bezoeker { step, reply? }
  const [rekenVraag, setRekenVraag] = useState(null);    // open reken-vraag bij een kraam
  const [rekenUitslag, setRekenUitslag] = useState(null);// null | "goed" | "fout"
  const [rekenFout, setRekenFout] = useState(null);      // laatst gekozen foute optie (context voor maatje-hulp)
  const [rekenHulpOpen, setRekenHulpOpen] = useState(false); // 🐾 maatje denkt mee met de som
  const rekenVraagNr = useRef(0);                         // telt sommen → eigen chat per som
  const rekenBonusRef = useRef(0);                        // session-cap op de muntjesbonus
  const [terrain, setTerrain] = useState(null);          // hoogteveld van de vloer
  const [sculptMode, setSculptMode] = useState(false);   // vloer boetseren
  const [sculptDir, setSculptDir] = useState(1);         // +1 omhoog, -1 omlaag
  const [waterMode, setWaterMode] = useState(false);     // meertjes maken in dalen
  const [groundMode, setGroundMode] = useState(false);   // grondsoort schilderen
  const [groundType, setGroundType] = useState("zand");  // gekozen grondsoort
  const rewardTimer = useRef(null);
  const meldingTimer = useRef(null);
  const inputRef = useRef({ keys: {}, joy: { x: 0, y: 0 }, look: { active: false, dx: 0, dy: 0 }, cam: { yaw: Math.PI, pitch: 0.32, dist: 5.4 } }); // besturing poppetje + camera

  // Bezoekers kopen bij je kraampjes → jij verdient de WINST (verkoop − inkoop) in
  // muntjes. Verkoop je te goedkoop (≤ inkoop), dan verdien je niets — zo leert het
  // kind dat je boven je inkoopprijs moet verkopen. Gelimiteerd per bezoek-sessie.
  const saleCountRef = useRef(0);
  const kraamLiveRef = useRef({}); // laatste kraam-data (product/inkoop/verkoop) voor de loop
  const buyApi = useRef({
    onBuy: (kind, verkoop = 1) => {
      if (saleCountRef.current >= 400) return;             // session-cap op verdienste
      if (saleCountRef.current === 0) { try { track("park_sale"); } catch { /* niet laten breken */ } }
      saleCountRef.current += 1;
      const inkoop = kraamLiveRef.current?.[kind]?.inkoop ?? 0;
      const winst = Math.max(0, verkoop - inkoop);         // verlies kost geen muntjes (kind raakt niet in de min)
      // Dagoverzicht: tel élke verkoop + de opbrengst mee (ook bij 0 winst),
      // zodat het kind in het kraam-overzicht ziet wat er binnenkwam vs. wat het kostte.
      setSaleStats((s) => {
        const c = s[kind] || { count: 0, opbrengst: 0, inkoopkosten: 0 };
        return { ...s, [kind]: { count: c.count + 1, opbrengst: c.opbrengst + verkoop, inkoopkosten: c.inkoopkosten + inkoop } };
      });
      if (winst <= 0) return;
      setMeta((m) => (m ? { ...m, coins: m.coins + winst } : m));
    },
  }).current;

  // Meten hoeveel mensen het park spelen: één event per keer openen.
  useEffect(() => { try { track("park_open"); } catch { /* nooit laten breken */ } }, []);

  // Echte Leerkwartier-score ophalen (alleen ingelogd + met naam) → een bezoeker
  // maakt er een persoonlijk compliment over ("ik hoorde dat je 80% goed had bij
  // biologie!"). Kies de hoogste score met genoeg vragen; faalt stil.
  useEffect(() => {
    if (!userId || !naam) return;
    let cancel = false;
    (async () => {
      try {
        const recs = await loadMasteryForPlayer(naam, userId);
        if (cancel) return;
        // Beste vak → compliment.
        const goed = (recs || []).filter((r) => r.attempts >= 5 && r.correct / r.attempts >= 0.7);
        if (goed.length) {
          goed.sort((a, b) => b.correct / b.attempts - a.correct / a.attempts);
          const r = goed[0];
          const vak = r.path?.subject || r.path?.title;
          if (vak) setGoedeScore({ vak, pct: Math.round((r.correct / r.attempts) * 100) });
        }
        // Volgende onderwerp om te oefenen → "ga oefenen"-knop in het praatje.
        const rec = recommendNextTopic(recs || []);
        if (rec?.path) setOefenPad({ id: rec.pathId, title: rec.path.title, subject: rec.path.subject });
        // Lastigste vak (laagste %, genoeg vragen) → bezoeker kan ernaar vragen.
        const zwak = (recs || []).filter((r) => r.attempts >= 5 && r.correct / r.attempts < 0.7);
        if (zwak.length) {
          zwak.sort((a, b) => a.correct / a.attempts - b.correct / b.attempts);
          const v = zwak[0].path?.subject || zwak[0].path?.title;
          if (v) setZwakVak(v);
        }
      } catch { /* geen compliment, geen probleem */ }
    })();
    return () => { cancel = true; };
  }, [userId, naam]);

  // 🐾 Maatjes: geleerde-stappen tellen (voedt de ontgrendeling) + de eerste keer
  // het keuze-scherm openen zodat een nieuwe speler meteen een maatje kiest.
  useEffect(() => {
    let cancel = false;
    (async () => {
      const n = await telGeleerdeStappen(naam);
      if (cancel) return;
      setGeleerdeStappen(n);
      // Geen auto-picker meer: Charley is het standaard maatje en loopt al mee.
      // Zelf een ander maatje kiezen kan via het ⚙️-menu → "🐾 Kies je maatje".
    })();
    return () => { cancel = true; };
  }, [naam]);
  // Open het maatjes-scherm (ververst eerst de geleerde-stappen-teller).
  const openBuddyPicker = async () => {
    try { setGeleerdeStappen(await telGeleerdeStappen(naam)); } catch { /* */ }
    setBuddyPickerOpen(true);
  };

  // Toetsenbord-besturing (laptop): pijltjes / WASD. Spatie = zweven aan/uit.
  useEffect(() => {
    const codes = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD"]);
    const down = (e) => {
      if (/INPUT|TEXTAREA|SELECT/.test(e.target?.tagName || "")) return; // typen in een veld ≠ lopen
      if (e.code === "Space") { e.preventDefault(); setZweef((v) => !v); return; }
      if (codes.has(e.code)) { inputRef.current.keys[e.code] = true; if (e.code.startsWith("Arrow")) e.preventDefault(); }
    };
    const up = (e) => { if (codes.has(e.code)) inputRef.current.keys[e.code] = false; };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  // Camera slepen (derde-persoons): 1 vinger of muis over het park = camera
  // draaien (yaw + omhoog/omlaag), 2 vingers = knijp-zoom, scrollwiel = zoom.
  // De vinger op de joystick (die z'n eigen pointer vangt) doet hier niet mee,
  // dus lopen en rondkijken kan tegelijk. Uit in bouw-/boetseer-modi, zodat
  // slepen daar gewoon boetseren/plaatsen blijft.
  const camDrag = useRef({ ptrs: new Map(), enabled: true });
  camDrag.current.enabled = !placing && !sculptMode && !waterMode && !groundMode && !firstPerson && !buddyEye && !rideTrain && !followCam && rideIdx == null;
  const camDown = (e) => {
    if (!camDrag.current.enabled) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    camDrag.current.ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  };
  const camWheel = (e) => {
    if (!camDrag.current.enabled) return;
    const cam = inputRef.current.cam;
    cam.dist = Math.max(2.6, Math.min(12, cam.dist + e.deltaY * 0.008));
  };
  useEffect(() => {
    const move = (e) => {
      const s = camDrag.current;
      const p = s.ptrs.get(e.pointerId);
      if (!p) return;
      const cam = inputRef.current.cam;
      if (s.ptrs.size >= 2) {
        // Knijp-zoom: afstand tussen de twee vingers vóór en na deze beweging.
        const ander = [...s.ptrs.entries()].find(([id]) => id !== e.pointerId)?.[1];
        if (ander) {
          const voor = Math.hypot(p.x - ander.x, p.y - ander.y);
          const na = Math.hypot(e.clientX - ander.x, e.clientY - ander.y);
          if (voor > 12 && na > 12) cam.dist = Math.max(2.6, Math.min(12, cam.dist * (voor / na)));
        }
      } else {
        const sens = e.pointerType === "touch" ? 0.0062 : 0.0042;
        cam.yaw -= (e.clientX - p.x) * sens;
        cam.pitch = Math.max(-0.12, Math.min(1.15, cam.pitch + (e.clientY - p.y) * sens));
      }
      p.x = e.clientX; p.y = e.clientY;
    };
    const stop = (e) => camDrag.current.ptrs.delete(e.pointerId);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", stop); window.removeEventListener("pointercancel", stop); };
  }, []);

  // Besturing-hint verdwijnt vanzelf na een paar tellen.
  useEffect(() => {
    if (!besturingHint) return;
    const t = setTimeout(() => setBesturingHint(false), 10000);
    return () => clearTimeout(t);
  }, [besturingHint]);

  // Vers park → meteen in bouw-modus, zodat een nieuwe speler direct kan plaatsen
  // (de welkomst-hint wijst naar de winkelbalk).
  useEffect(() => {
    if (loaded && placedItems.length <= STARTER_LAYOUT.length) setBouwen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  // 🐾 Eenmalige maatje-tip: wie nog nooit een blok bouwde krijgt na een halve
  // minuut spelen een vriendelijk duwtje van z'n maatje (Mark 2 jul: "laat
  // Charley tips geven"). "Laat zien" opent meteen de blokken-winkel.
  useEffect(() => {
    if (!loaded) return;
    let gezien = false;
    try { gezien = !!localStorage.getItem("lk_bouwtip_gezien"); } catch { /* */ }
    if (gezien || placedItems.some((it) => isBlok(it.assetId))) return;
    const t = setTimeout(() => setBouwTip(true), 30000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  const sluitBouwTip = () => {
    setBouwTip(false);
    try { localStorage.setItem("lk_bouwtip_gezien", "1"); } catch { /* */ }
  };

  // 💬 Buddy leert je kennen (Mark 2 jul): max 1 vraagje per dag (naam,
  // leeftijd, lievelingseten/-kleur/-dier). Antwoorden blijven op dit
  // apparaat en komen terug in praatjes + de leer-hulp.
  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => {
      const v = volgendeBuddyVraag();
      if (!v) return;
      setBuddyVraag(v);
      // Naam al bekend uit het account? Voor-invullen — het maatje "let op".
      if (v.key === "naam" && naam) setBuddyAntwoord(naam);
    }, 12000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  const stuurBuddyAntwoord = () => {
    if (!buddyVraag) return;
    const antw = buddyAntwoord.trim();
    if (!antw) return;
    beantwoordBuddyVraag(buddyVraag.key, antw);
    setBuddyVraag(null);
    setBuddyAntwoord("");
    flits(buddyVraag.key === "naam" ? `Hoi ${antw.slice(0, 30)}! Wat een leuke naam — die onthoud ik! 🐾` : "Leuk om te weten — dat onthoud ik! 🐾");
  };

  const flits = (tekst) => {
    setMelding(tekst);
    clearTimeout(meldingTimer.current);
    // Langere teksten (dier-gedachten!) langer laten staan — een groep 5-lezer
    // leest ~2 woorden per seconde.
    meldingTimer.current = setTimeout(() => setMelding(null), Math.max(2200, 1200 + String(tekst).length * 55));
  };

  // Laden + dagbeloningen bij binnenkomst.
  useEffect(() => {
    let cancel = false;
    (async () => {
      const row = await loadZooState(userId);
      const d = defaultState();
      // owned (jsonb) bewaart de kraampjes-prijzen als object; oude rijen hadden
      // hier een lege array → val terug op de standaardprijzen.
      const ownedObj = row && row.owned && !Array.isArray(row.owned) ? row.owned : d.owned;
      const base = row
        ? { coins: row.coins, streak: row.streak, last_login: row.last_login, last_kwartier_date: row.last_kwartier_date, owned: ownedObj }
        : { coins: d.coins, streak: d.streak, last_login: d.last_login, last_kwartier_date: d.last_kwartier_date, owned: d.owned };
      const layout = migreerBlokken(row && Array.isArray(row.layout) && row.layout.length ? row.layout : STARTER_LAYOUT);

      const prevLogin = base.last_login;          // vóór de login-update
      const isNieuweDag = prevLogin !== vandaag();
      const login = applyDailyLogin(base);
      const kw = applyKwartierReward(login.state, !!getDailyGoal().completed);
      let finalMeta = kw.state;
      let finalLayout = layout;
      let parkGain = 0, births = 0, weggelopen = 0, loon = 0;

      // Park-groei: op een nieuwe dag levert je park muntjes op. Verzorging is PER
      // DIER (it.fed): recent gevoerd → eerder jonkies; een gekocht dier dat >= 3
      // dagen geen hooi kreeg loopt weg (starters blijven).
      if (isNieuweDag) {
        const dagen = Math.min(MAX_DAGEN_INKOMST, Math.max(1, dagenVerschil(prevLogin)));
        // Bruto parkopbrengst − loon van de verkopers (vaste kost). Netto nooit
        // negatief: te veel kramen eet je winst op, maar je raakt nooit in de min.
        const brutoPark = inkomstenPerDag(layout, kindVan) * dagen;
        loon = loonkostenPerDag(layout) * dagen;
        parkGain = Math.max(0, brutoPark - loon);
        const g = groeiBabies(layout, isDier);
        finalLayout = g.layout;
        births = g.births;
        const v = verwaarloosCheck(finalLayout, isDier);
        finalLayout = v.layout;
        weggelopen = v.weggelopen;
        finalMeta = { ...finalMeta, coins: finalMeta.coins + parkGain + births * BABY_BONUS };
      }
      const gained = login.gained + kw.gained + parkGain + births * BABY_BONUS;

      if (cancel) return;
      setMeta(finalMeta);
      setPlacedItems(finalLayout);
      setTerrain(deserTerrain(row?.terrain));
      setLoaded(true);
      if (gained > 0 || weggelopen > 0) {
        setReward({ total: gained, login: login.gained, kwartier: kw.gained, park: parkGain, loon, births, weggelopen });
        clearTimeout(rewardTimer.current);
        rewardTimer.current = setTimeout(() => setReward(null), 6000);
      }
      if (userId) saveZooState(userId, { ...finalMeta, layout: finalLayout });
    })();
    return () => { cancel = true; clearTimeout(rewardTimer.current); clearTimeout(meldingTimer.current); };
  }, [userId]);

  // Debounced opslaan na wijzigingen (incl. het geboetseerde terrein).
  useEffect(() => {
    if (!loaded || !userId || !meta) return;
    const t = setTimeout(() => saveZooState(userId, { ...meta, layout: placedItems, terrain: serTerrain(terrain) }), 2000);
    return () => clearTimeout(t);
  }, [placedItems, meta, terrain, loaded, userId]);

  const coins = meta?.coins ?? 0;
  const streak = meta?.streak ?? 0;
  const econLevel = meta?.owned?.econLevel || "po"; // niveau van de economie-uitleg (po/vo)

  // Welke vrijspeel-dieren bezit dit park al (in owned.unlocked).
  const unlockedDieren = (meta?.owned && !Array.isArray(meta.owned) && Array.isArray(meta.owned.unlocked)) ? meta.owned.unlocked : [];
  // Zelfde sleutel als de leerpaden gebruiken voor learn_progress.
  const leerNaam = (userName || "Speler").trim() || "Speler";

  // Vrijspeel-check: heeft de speler een leerpad 100% afgerond → dier verdienen?
  // Draait 1× per parksessie nadat het park geladen is. Voegt nieuwe dieren toe
  // aan owned.unlocked (autosave pakt het op) en toont een viering.
  useEffect(() => {
    if (!loaded || !meta || unlockCheckedRef.current) return;
    unlockCheckedRef.current = true;
    let cancel = false;
    (async () => {
      const nieuw = await nieuweVrijspeelDieren(leerNaam, unlockedDieren);
      if (cancel || !nieuw.length) return;
      setMeta((m) => {
        if (!m) return m;
        const o = (m.owned && !Array.isArray(m.owned)) ? m.owned : {};
        const cur = Array.isArray(o.unlocked) ? o.unlocked : [];
        return { ...m, owned: { ...o, unlocked: [...new Set([...cur, ...nieuw])] } };
      });
      const eerste = vrijspeelDier(nieuw[0]);
      setUnlockMelding(eerste);
      try { track("zoo_unlock", { dier: nieuw[0], pad: eerste?.pad }); } catch { /* nooit laten breken */ }
    })();
    return () => { cancel = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, meta]);

  // Gekozen speler-poppetje (avatar). Opgeslagen in meta.owned.avatar.
  const avatarId = (meta?.owned && !Array.isArray(meta.owned) && meta.owned.avatar) || DEFAULT_AVATAR;
  const avatarUrl = (CHARACTER_BY_ID[avatarId] || CHARACTERS[0]).url;
  const kiesAvatar = (id) => {
    setMeta((m) => { if (!m) return m; const o = (m.owned && !Array.isArray(m.owned)) ? m.owned : {}; return { ...m, owned: { ...o, avatar: id } }; });
    flits("Poppetje gekozen ✓");
  };

  // Verzorging is PER DIER: elk dier heeft een eigen `fed`-datum. Recent voeren →
  // eerder jonkies; een gekocht dier dat te lang geen hooi kreeg loopt weg.
  const isDierItem = (it) => kindVan(it.assetId) === "animal";
  const dierGevoerdVandaag = (it) => it?.fed === vandaag();
  const dieren = placedItems.filter(isDierItem);
  const alleGevoerd = dieren.length > 0 && dieren.every(dierGevoerdVandaag);
  const enigDierHongerig = dieren.some((it) => !it.fed || dagenVerschil(it.fed) >= 2);
  const hongerAantal = dieren.filter((it) => !dierGevoerdVandaag(it)).length; // badge op de 🌾-knop
  // Voer één dier (op index in placedItems).
  const voerDier = (idx) => {
    setPlacedItems((items) => items.map((it, i) => (i === idx ? { ...it, fed: vandaag() } : it)));
    flits("Gevoerd! 🌾");
  };
  // 🤗 Aaien (Mark 2 jul: "naar de dieren en bv aaien of gedachten zien"):
  // het dier reageert met een gedachte die past bij hoe het zich voelt.
  const aaiDier = (idx) => {
    const it = placedItems[idx];
    const naam = getAsset(it?.assetId)?.name || "Het dier";
    const honger = !it?.fed || dagenVerschil(it.fed) >= 2;
    const gedachten = honger
      ? [`💭 "Ik heb wel trek in hooi..." — geef ${naam.toLowerCase()} eens te eten! 🌾`, `💭 "Mijn buik knort!" 🌾`]
      : dierGevoerdVandaag(it)
        ? [`❤️ ${naam} straalt: "Dit is de fijnste dag ooit!"`, `❤️ "Nog een keer aaien, alsjeblieft?" 🥰`, `❤️ ${naam} leunt blij tegen je aan.`]
        : [`💛 ${naam} vindt het fijn — "Kriebel je ook even achter mijn oor?"`, `💛 "Jij bent mijn lievelingsmens!"`];
    flits(gedachten[Math.floor(Math.random() * gedachten.length)]);
  };
  // Voer alle dieren tegelijk (header-knop, handig bij een groot park).
  const voerAlles = () => {
    if (!dieren.length) { flits("Je hebt nog geen dieren om te voeren."); return; }
    if (alleGevoerd) { flits("Alle dieren zijn vandaag al gevoerd 🌾"); return; }
    setPlacedItems((items) => items.map((it) => (isDierItem(it) ? { ...it, fed: vandaag() } : it)));
    flits("Alle dieren gevoerd! 🌾");
  };

  const startKopen = (p) => {
    if (coins < p.price) { flits("Niet genoeg muntjes — leer een kwartier om te sparen!"); return; }
    setSelectedIdx(null);
    setPlacing({ assetId: p.assetId, price: p.price, rot: 0, ...(p.pakket ? { pakket: p.pakket, pakketLabel: p.label } : {}) });
  };

  const draai = () => setPlacing((p) => (p ? { ...p, rot: (p.rot || 0) + Math.PI / 2 } : p));

  // Laagste vrije kubus-laag op (kx,kz).
  const vrijeKubLaag = (kx, kz) => {
    const bezetH = new Set(placedItems.filter((it) => isBlok(it.assetId) && it.kx === kx && it.kz === kz).map((it) => it.kh || 0));
    let kh = 0;
    while (bezetH.has(kh)) kh++;
    return kh;
  };
  // Valt deze kubus binnen een gebouw/hek/attractie? (paden/dieren zijn oké)
  const kubBotstMetItem = (kx, kz) => placedItems.some((it) => {
    if (isBlok(it.assetId)) return false;
    const a = getAsset(it.assetId);
    if (!a || a.procedural === "path" || a.kind === "animal") return false;
    return footprint(it.cell[0], it.cell[1], cellsVan(it.assetId)).some(([cx, cz]) => {
      const [wx, wz] = cellToWorld(cx, cz);
      return kx >= Math.floor(wx) - 1 && kx <= Math.floor(wx) && kz >= Math.floor(wz) - 1 && kz <= Math.floor(wz);
    });
  });

  const plaatsOpVakje = (cell, punt) => {
    if (!placing) return;
    const KLIM = HALF * CELL - 1;
    // 🏠 Bouwpakket: rol de blauwdruk (in kubussen) uit rond het klikpunt.
    if (placing.pakket) {
      const ax = punt ? Math.floor(punt.x) : cell[0] * CELL, az = punt ? Math.floor(punt.z) : cell[1] * CELL;
      const b = blauwdruk(placing.pakket);
      const bezetKub = new Set(placedItems.filter((it) => isBlok(it.assetId)).map((it) => `${it.kx},${it.kz},${it.kh || 0}`));
      const botst = b.some(({ dx, dz, h }) => {
        const kx = ax + dx, kz = az + dz;
        return Math.abs(kx) > KLIM || Math.abs(kz) > KLIM || bezetKub.has(`${kx},${kz},${h}`) || (h === 0 && kubBotstMetItem(kx, kz));
      });
      if (botst) { flits("Niet genoeg vrije ruimte — zoek een open plek."); return; }
      if (placedItems.filter((it) => isBlok(it.assetId)).length + b.length > MAX_BLOKKEN) { flits(`Maximum bereikt: ${MAX_BLOKKEN} blokken in je park.`); return; }
      setPlacedItems((items) => [...items, ...b.map(({ dx, dz, h, id }) => ({ assetId: id, kx: ax + dx, kz: az + dz, kh: h, price: 0 }))]);
      setPlacing(null);
      flits("Klaar! Verbouw het zoals jij wilt — blokjes weghakken of bijbouwen. 🧱");
      return;
    }
    // 🧊 Losse kubus op de grond: precies op de meter waar je klikte.
    if (isBlok(placing.assetId)) {
      if (!punt) return;
      plaatsBlokOp({ kx: Math.floor(punt.x), kz: Math.floor(punt.z), kh: vrijeKubLaag(Math.floor(punt.x), Math.floor(punt.z)) });
      return;
    }
    const rot = placing.rot || 0;
    // Verplaatsen: bestaand item naar nieuw vakje (met huidige draaihoek).
    if (placing.moveIdx != null) {
      setPlacedItems((items) => items.map((it, i) => (i === placing.moveIdx ? { ...it, cell, rotation: rot } : it)));
      setPlacing(null);
      return;
    }
    // Kopen + plaatsen.
    if (coins < placing.price) { flits("Niet genoeg muntjes."); setPlacing(null); return; }
    // Nieuw dier start "gevoerd" (vandaag), zodat het niet meteen honger heeft.
    const nieuw = { assetId: placing.assetId, cell, rotation: rot, price: placing.price };
    const isAnimal = kindVan(placing.assetId) === "animal";
    if (isAnimal) nieuw.fed = vandaag();
    setPlacedItems((items) => [...items, nieuw]);
    // 12-agent-review 2 jul: deze aftrek sneuvelde bij de blok-refactor —
    // kopen was even gratis (en weghalen betaalde wél terug).
    if (placing.price > 0) setMeta((m) => (m ? { ...m, coins: m.coins - placing.price } : m));
    // Bonnetje: laat bij de éérste dier-aankoop (≥10 🪙) zien dat er btw in de
    // prijs zit. Hooguit 1× per parksessie — anders breekt het de speelflow.
    if (isAnimal && placing.price >= 10 && !inkoopBonGetoondRef.current) {
      inkoopBonGetoondRef.current = true;
      const a = getAsset(placing.assetId);
      const { incl, excl, btw, tarief } = splitsBtw(placing.price, btwTarief("animal"));
      setInkoopBon({ emoji: a?.emoji || "🐾", label: a?.name || "dier", incl, excl, btw, tarief, niveau: econLevel });
      try { track("econ_open", { scherm: "inkoopbon", niveau: econLevel }); } catch { /* nooit laten breken */ }
    }
    // Vrijspeel-dier: precies één per park → meteen uit koop-modus. Anders:
    // blijf in koop-modus zolang er muntjes zijn (handig om er meerdere te zetten).
    if (vrijspeelDier(placing.assetId)) setPlacing(null);
    else if (coins - placing.price < placing.price) setPlacing(null);
  };

  // 🧊 Minecraft-plaatsing: kubus op het fijne raster (via richt-cursor of
  // tegen een kubus-vlak aan). Zwevende kubussen mogen (overhang, brug).
  const plaatsBlokOp = ({ kx, kz, kh, fx = 0, fz = 0 }) => {
    if (!placing) return;
    if (placing.pakket) {
      // Pakket-anker een gebouw-helft extra vooruit, zodat je er niet ín staat.
      const schuif = { huis: 7, toren: 5, hok: 6 }[placing.pakket] || 6;
      plaatsOpVakje(null, { x: kx + 0.5 + Math.round(fx * schuif), z: kz + 0.5 + Math.round(fz * schuif) });
      return;
    }
    if (!isBlok(placing.assetId)) return;
    const KLIM = HALF * CELL - 1;
    if (Math.abs(kx) > KLIM || Math.abs(kz) > KLIM) { flits("Dat is buiten je park."); return; }
    if (kh < 0) { flits("Onder de grond bouwen kan niet."); return; }
    if (kh >= MAX_STAPEL) { flits(`Niet hoger dan ${MAX_STAPEL} blokjes.`); return; }
    if (placedItems.filter((it) => isBlok(it.assetId)).length >= MAX_BLOKKEN) { flits(`Maximum bereikt: ${MAX_BLOKKEN} blokjes in je park.`); return; }
    if (placedItems.some((it) => isBlok(it.assetId) && it.kx === kx && it.kz === kz && (it.kh || 0) === kh)) return; // plek al bezet
    if (kubBotstMetItem(kx, kz)) { flits("Daar staat al iets."); return; }
    setPlacedItems((items) => [...items, { assetId: placing.assetId, kx, kz, kh, price: 0 }]);
    pakUit(placing.assetId); // uit je rugzak, als je er nog had
  };

  // ⛏️ Weghakken (Minecraft-stijl): de kubus met de zwarte markeer-rand
  // (bovenste kubus van de stapel waar je op richt) verdwijnt.
  const hakWeg = () => {
    const c = bouwCursorRef.current;
    if (!c || c.hakH == null) { flits("Loop naar een blokje toe — de zwarte rand laat zien wat je weghakt."); return; }
    const geraakt = placedItems.find((it) => isBlok(it.assetId) && it.kx === c.kx && it.kz === c.kz && (it.kh || 0) === c.hakH);
    if (geraakt) pakIn(geraakt.assetId);
    setPlacedItems((items) => {
      const idx = items.findIndex((it) => isBlok(it.assetId) && it.kx === c.kx && it.kz === c.kz && (it.kh || 0) === c.hakH);
      return idx < 0 ? items : items.filter((_, i) => i !== idx);
    });
  };

  // 🧱 Verbouwen (Mark 2 jul): een kant-en-klaar huis omzetten in de losse
  // blokjes waaruit het is opgebouwd — muren 3 hoog, glazen ramen, houten
  // zoldervloer en een dak-nok. Daarna is het écht Minecraft: per blokje
  // weghakken, andere kleur terugzetten of bijbouwen.
  const HUIS_MUURBLOK = {
    houseA: "blokZand", houseB: "blokSneeuw", houseC: "blokZand", houseD: "blokHout",
    houseE: "blokSneeuw", houseF: "blokZand", houseG: "blokSneeuw", houseH: "blokBaksteen",
    huisRood: "blokBaksteen", huisBlauw: "blokSneeuw", huisGroen: "blokHout", huisGeel: "blokZand",
  };
  const verbouwHuis = () => {
    if (selectedIdx == null) return;
    const it = placedItems[selectedIdx];
    if (!it?.cell) return;
    const muur = HUIS_MUURBLOK[it.assetId] || "blokBaksteen";
    const ax = it.cell[0] * CELL, az = it.cell[1] * CELL;
    // Rotatie snappen op 90° — bij een schuine hoek zouden deur-as en
    // deur-cel (ZooScene) anders uit elkaar lopen.
    const hoek = Math.round((it.rotation || 0) / (Math.PI / 2)) * (Math.PI / 2);
    const dirx = Math.round(Math.sin(hoek)), dirz = Math.round(Math.cos(hoek));
    const b = [];
    for (let x = -3; x <= 2; x++) {
      for (let z = -3; z <= 2; z++) {
        const rand = x === -3 || x === 2 || z === -3 || z === 2;
        if (rand) {
          const hoekblok = (x === -3 || x === 2) && (z === -3 || z === 2);
          const deurKant = dirz === 1 ? z === 2 : dirz === -1 ? z === -3 : dirx === 1 ? x === 2 : x === -3;
          const midden = dirx === 0 ? (x === -1 || x === 0) : (z === -1 || z === 0);
          const deur = deurKant && midden && !hoekblok;
          const raamPos = !hoekblok && ((z === -3 || z === 2) ? (x === -1 || x === 0) : (z === -1 || z === 0));
          for (let h = 0; h <= 2; h++) {
            if (deur && h <= 1) continue;
            const raam = h === 1 && !deur && !deurKant && raamPos;
            b.push({ assetId: raam ? "blokGlas" : muur, kx: ax + x, kz: az + z, kh: h, price: 0 });
          }
        }
        b.push({ assetId: "blokHout", kx: ax + x, kz: az + z, kh: 3, price: 0 });
      }
    }
    // Dak-nok loopt haaks op de deur-kant (zoals het echte BlokHuis-zadeldak).
    if (dirz !== 0) { for (let z = -3; z <= 2; z++) { b.push({ assetId: "blokDak", kx: ax - 1, kz: az + z, kh: 4, price: 0 }, { assetId: "blokDak", kx: ax, kz: az + z, kh: 4, price: 0 }); } }
    else { for (let x = -3; x <= 2; x++) { b.push({ assetId: "blokDak", kx: ax + x, kz: az - 1, kh: 4, price: 0 }, { assetId: "blokDak", kx: ax + x, kz: az, kh: 4, price: 0 }); } }
    // Plekken die al bezet zijn (iemand bouwde tegen het huis aan) of buiten
    // de parkgrens vallen (huis op de rand) overslaan.
    const GRENS = HALF * CELL - 1;
    const bezetKub = new Set(placedItems.filter((k) => isBlok(k.assetId)).map((k) => `${k.kx},${k.kz},${k.kh || 0}`));
    const vrij = b.filter((k) => !bezetKub.has(`${k.kx},${k.kz},${k.kh}`) && Math.abs(k.kx) <= GRENS && Math.abs(k.kz) <= GRENS);
    if (placedItems.filter((k) => isBlok(k.assetId)).length + vrij.length > MAX_BLOKKEN) { flits(`Maximum bereikt: ${MAX_BLOKKEN} blokjes in je park.`); return; }
    const weg = selectedIdx;
    setPlacedItems((items) => [...items.filter((_, i) => i !== weg), ...vrij]);
    sluitSelectie();
    flits("Verbouwd naar losse blokjes! Hak weg, zet een andere kleur terug of bouw bij. 🧱⛏️");
  };

  const verplaatsGeselecteerde = () => {
    if (selectedIdx == null) return;
    const it = placedItems[selectedIdx];
    setPlacing({ assetId: it.assetId, price: it.price ?? prijsVan(it.assetId), moveIdx: selectedIdx, rot: it.rotation || 0 });
    setSelectedIdx(null);
  };

  const weghaalGeselecteerde = () => {
    if (selectedIdx == null) return;
    const it = placedItems[selectedIdx];
    const terug = it.price ?? prijsVan(it.assetId);
    setMeta((m) => ({ ...m, coins: m.coins + terug }));
    setPlacedItems((items) => items.filter((_, i) => i !== selectedIdx));
    setSelectedIdx(null);
    if (terug > 0) flits(`Weggehaald — +${terug} 🪙 terug`);
  };

  // 🏗️ AUTO-BOUW (Mark 2026-06-27): zet muntjes in en laat het park zelf nette
  // verblijven bouwen — een hek met een poort, een huisje erin en een dier. Het
  // bouwt zoveel mogelijk complete verblijven tot het budget op is of er geen
  // plek meer is. Varieert het dier per verblijf zodat het levendig blijft.
  const autoBouw = (budget) => {
    if (!meta) return;
    budget = Math.min(Math.floor(budget || 0), coins);
    const PLOT_W = 6, PLOT_H = 5;
    const HEK_PANEEL = getAsset("hekPaneel")?.price ?? 4;
    const HEK_POORT = getAsset("hekPoort")?.price ?? 6;
    const HUIS = getAsset("houseA")?.price ?? 60;
    const BOOM = getAsset("tree")?.price ?? 8;
    const BLOEM = getAsset("flowerRed")?.price ?? 2;
    const dierVoorraad = ["cow", "sheep", "pig", "alpaca", "donkey", "horse", "deer", "husky", "wolf", "zebra"];
    // 17 panelen + 1 poort + huis + dier (gem. ~15) + boom + bloem
    const dierKost = 15;
    const VOL_PLOT = 17 * HEK_PANEEL + HEK_POORT + HUIS + dierKost + BOOM + BLOEM;
    const MINI_PLOT = 17 * HEK_PANEEL + HEK_POORT + dierKost + BOOM; // zonder huis
    if (budget < MINI_PLOT) { flits(`Zet wat meer muntjes in (min. ${MINI_PLOT}) 🪙`); return; }

    const blokkeert = (id) => { const a = getAsset(id); return !(a && a.procedural === "path"); };
    const bezet = new Set();
    placedItems.forEach((it) => {
      if (!blokkeert(it.assetId)) return;
      for (const [cx, cz] of footprint(it.cell[0], it.cell[1], cellsVan(it.assetId))) bezet.add(cellKey(cx, cz));
    });
    const blokVrij = (x0, z0) => {
      for (let dx = 0; dx < PLOT_W; dx++) for (let dz = 0; dz < PLOT_H; dz++) {
        const cx = x0 + dx, cz = z0 + dz;
        if (cx < -HALF || cx > HALF || cz < -HALF || cz > HALF) return false;
        if (bezet.has(cellKey(cx, cz))) return false;
      }
      return true;
    };
    const zoekBlok = () => {
      for (let x0 = -HALF; x0 + PLOT_W - 1 <= HALF; x0++)
        for (let z0 = -HALF; z0 + PLOT_H - 1 <= HALF; z0++)
          if (blokVrij(x0, z0)) return [x0, z0];
      return null;
    };

    const nieuwe = [];
    let kosten = 0, gebouwd = 0, dierIdx = 0;
    const mk = (id, x, z, rotation = 0) => { const p = prijsVan(id); const it = { assetId: id, cell: [x, z], rotation, price: p }; if (kindVan(id) === "animal") it.fed = vandaag(); nieuwe.push(it); kosten += p; };

    while (true) {
      const rest = budget - kosten;
      if (rest < MINI_PLOT) break;
      const metHuis = rest >= VOL_PLOT;
      const spot = zoekBlok();
      if (!spot) break;
      const [x0, z0] = spot;
      const x1 = x0, z1 = z0, x2 = x0 + PLOT_W - 1, z2 = z0 + PLOT_H - 1;
      // reserveer het hele blok zodat het volgende verblijf niet overlapt
      for (let dx = 0; dx < PLOT_W; dx++) for (let dz = 0; dz < PLOT_H; dz++) bezet.add(cellKey(x0 + dx, z0 + dz));
      // hek-rand die netjes aansluit: hoeken + panelen (Z-wand 90° gedraaid), poort midden-voor
      const poortX = Math.round((x1 + x2) / 2);
      mk("hekHoek", x1, z1, 0);
      mk("hekHoek", x2, z1, -Math.PI / 2);
      mk("hekHoek", x1, z2, Math.PI / 2);
      mk("hekHoek", x2, z2, Math.PI);
      for (let x = x1 + 1; x < x2; x++) { mk("hekPaneel", x, z1, 0); mk(x === poortX ? "hekPoort" : "hekPaneel", x, z2, 0); }
      for (let z = z1 + 1; z < z2; z++) { mk("hekPaneel", x1, z, Math.PI / 2); mk("hekPaneel", x2, z, Math.PI / 2); }
      // huisje (3×3) in het verblijf
      if (metHuis) mk("houseA", x1 + 2, z1 + 2);
      // dier + boom + bloem in de vrije rechterkolom
      mk(dierVoorraad[dierIdx % dierVoorraad.length], x2 - 1, z1 + 1);
      dierIdx++;
      mk("tree", x2 - 1, z1 + 3);
      mk("flowerRed", x2 - 1, z1 + 2);
      gebouwd++;
      if (gebouwd >= 12) break; // veiligheidslimiet
    }

    if (gebouwd === 0) { flits("Geen vrije plek meer voor een verblijf 🐾"); return; }
    setMeta((m) => ({ ...m, coins: m.coins - kosten }));
    setPlacedItems((items) => [...items, ...nieuwe]);
    setPanel(null);
    flits(`🏗️ ${gebouwd} verblijf${gebouwd > 1 ? "en" : ""} gebouwd voor ${kosten} 🪙!`);
  };

  const selKind = selectedIdx != null ? kindVan(placedItems[selectedIdx]?.assetId) : null;
  const selIsHuis = selKind === "building" && /^(house[A-H]|huis(Rood|Blauw|Groen|Geel))$/.test(String(placedItems[selectedIdx]?.assetId || ""));
  // Kraampje geselecteerd? Dan kies je het product + de verkoopprijs (reken-moment).
  const selVoorziet = selectedIdx != null ? getAsset(placedItems[selectedIdx]?.assetId)?.voorziet : null;

  // Per kraam: welk product je verkoopt + voor welke prijs. Bewaard in meta.owned
  // als `<soort>Product` (index) en `<soort>Price` (jouw verkoopprijs).
  const productIdxVanKraam = (kind) => {
    const max = KRAAM_PRODUCTEN[kind].length - 1;
    return Math.max(0, Math.min(max, meta?.owned?.[`${kind}Product`] ?? 0));
  };
  const productVanKraam = (kind) => KRAAM_PRODUCTEN[kind][productIdxVanKraam(kind)];
  const prijsVanKraam = (kind) => meta?.owned?.[`${kind}Price`] ?? (productVanKraam(kind).inkoop * 2);
  // Alle kraam-info bij elkaar voor de simulatie (verkoop/inkoop/fair = ~2× inkoop).
  const kramen = Object.fromEntries(KRAAM_KEYS.map((k) => {
    const p = productVanKraam(k);
    return [k, { verkoop: prijsVanKraam(k), inkoop: p.inkoop, fair: p.inkoop * 2, label: p.label, emoji: p.emoji, id: p.id }];
  }));
  kraamLiveRef.current = kramen; // de bezoekers-loop leest de laatste inkoopprijs hieruit
  const selKraam = selVoorziet ? kramen[selVoorziet] : null;
  const selWinst = selKraam ? selKraam.verkoop - selKraam.inkoop : 0;
  const setPrice = (kind, val) => {
    const v = Math.max(1, Math.min(20, val));
    setMeta((m) => {
      if (!m) return m;
      const o = m.owned && !Array.isArray(m.owned) ? m.owned : {};
      return { ...m, owned: { ...o, [`${kind}Price`]: v } };
    });
  };
  // Ander product kiezen → verkoopprijs terug naar een verstandig startpunt (2× inkoop).
  const setProduct = (kind, idx) => {
    setMeta((m) => {
      if (!m) return m;
      const o = m.owned && !Array.isArray(m.owned) ? m.owned : {};
      const suggestie = (KRAAM_PRODUCTEN[kind][idx]?.inkoop ?? 2) * 2;
      return { ...m, owned: { ...o, [`${kind}Product`]: idx, [`${kind}Price`]: suggestie } };
    });
  };

  const HUIS_KLEUREN = ["#e2574c", "#e8833c", "#f2cd4a", "#7bbf5a", "#3cb5a8", "#4a90d9", "#8a6ad8", "#e58fb0", "#8a5a3c", "#f5f0e2", "#b9b6ab", "#3a3f47"];
  const setHuisKleur = (idx, grp, hex) => {
    setPlacedItems((items) => items.map((it, i) => (i === idx ? { ...it, colors: { ...(it.colors || {}), [grp]: hex } } : it)));
  };
  // [r,g,b] in 0..1 → #rrggbb (voor de onderdeel-chips).
  const rgbHex = (c) => "#" + c.map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, "0")).join("");
  // Een "verf-cursor" in de gekozen kleur, zodat je op de laptop ziet welke kleur
  // actief is: klik dan op een huis-onderdeel om het te verven (paint-bucket).
  const verfCursor = (hex) => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><circle cx='15' cy='15' r='9' fill='${hex}' stroke='#ffffff' stroke-width='3'/><circle cx='15' cy='15' r='10.5' fill='none' stroke='#000000' stroke-width='1'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 15 15, crosshair`;
  };
  // Huidige kleur van een onderdeel: jouw keuze, anders de basiskleur uit de textuur.
  const huidigeDeelKleur = (i) => {
    const ov = placedItems[selectedIdx]?.colors?.[i];
    if (ov) return ov;
    return houseParts && houseParts[i] ? rgbHex(houseParts[i]) : "#cccccc";
  };
  const sluitSelectie = () => { setSelectedIdx(null); setColorMode(false); setHouseParts(null); setActivePart(0); };

  // Deel je park: onraadbare link → vriend opent 'm en bekijkt je park (alleen
  // kijken). Geen namen/chat → veilig. Link via WhatsApp of kopiëren.
  const openDelen = async () => {
    setPanel("delen");
    setShareCopied(false);
    if (!shareUrl && userId) {
      const code = await getShareCode(userId);
      if (code) setShareUrl(`${window.location.origin}/dierentuin?bezoek=${code}`);
    }
  };
  const kopieerLink = async () => {
    if (!shareUrl) return;
    try { await navigator.clipboard.writeText(shareUrl); setShareCopied(true); setTimeout(() => setShareCopied(false), 2000); }
    catch { flits("Kopiëren lukte niet — selecteer de link handmatig"); }
  };
  const whatsappLink = shareUrl ? `https://wa.me/?text=${encodeURIComponent("Kom mijn park bekijken! " + shareUrl)}` : null;

  // Park terugzetten naar het standaard begin-park (poort + pad + dier + huis).
  // Muntjes blijven; alleen de indeling + het geboetseerde terrein gaan terug.
  const resetPark = () => {
    setPlacing(null); setSelectedIdx(null); setColorMode(false); setSculptMode(false); setWaterMode(false); setGroundMode(false);
    const schoonOwned = defaultState().owned; // wist grond-verf + waterbronnen, reset kraampjes-prijzen
    setPlacedItems(STARTER_LAYOUT);
    setTerrain(null);
    setMeta((m) => (m ? { ...m, owned: schoonOwned } : m));
    if (userId && meta) saveZooState(userId, { ...meta, owned: schoonOwned, layout: STARTER_LAYOUT, terrain: null });
    setPanel(null);
    flits("Je park staat weer op het begin ✓");
  };

  // Water-bronnen (meertjes) staan in meta.owned.water als lijst van [gx,gz].
  const waterSeeds = (meta?.owned && !Array.isArray(meta.owned) && Array.isArray(meta.owned.water)) ? meta.owned.water : [];
  // Tik in water-modus: plaats een waterbron (het water stroomt vanzelf de
  // laagste weg naar beneden en vult dalen) of haal een bron + z'n water weg.
  const onWaterTik = (cell) => {
    const { streams, pools } = computeWater(terrain, waterSeeds);
    const inWater = streams.some((p) => p.some((c) => c[0] === cell[0] && c[1] === cell[1]))
      || pools.some((c) => c[0] === cell[0] && c[1] === cell[1]);
    let next;
    if (inWater) {
      next = waterSeeds.filter((s) => !bronRaaktCel(terrain, s, cell[0], cell[1]));
      flits("Water weggehaald");
    } else {
      next = [...waterSeeds, cell];
      flits("Waterbron geplaatst 💧");
    }
    setMeta((m) => { if (!m) return m; const o = (m.owned && !Array.isArray(m.owned)) ? m.owned : {}; return { ...m, owned: { ...o, water: next } }; });
  };

  // Geschilderde grondsoorten staan in meta.owned.ground als { "gx,gz": type }.
  const ground = (meta?.owned && !Array.isArray(meta.owned) && meta.owned.ground) ? meta.owned.ground : EMPTY_GROUND;
  // Tik in grond-modus: schilder een penseel (3×3) met de gekozen grondsoort.
  // "gras" wist → terug naar de natuurlijke hoogte-kleur.
  const onGroundTik = (cell) => {
    const [cx, cz] = cell;
    setMeta((m) => {
      if (!m) return m;
      const o = (m.owned && !Array.isArray(m.owned)) ? m.owned : {};
      const g = { ...(o.ground || {}) };
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        const k = `${cx + dx},${cz + dz}`;
        if (groundType === "gras") delete g[k]; else g[k] = groundType;
      }
      return { ...m, owned: { ...o, ground: g } };
    });
  };

  // Handmatig opslaan (naast het automatische opslaan).
  const opslaan = async () => {
    if (!userId || !meta) { flits("Nog niet ingelogd — opslaan lukt zo niet"); return; }
    await saveZooState(userId, { ...meta, layout: placedItems, terrain: serTerrain(terrain) });
    flits("Park opgeslagen ✓");
  };

  // Eerstepersoons aan/uit met een korte hint bij het aanzetten (werkt ook op
  // telefoon, waar een title-tooltip niets doet).
  const toggleFirstPerson = () => {
    const aan = !firstPerson;
    setFirstPerson(aan);
    if (aan) {
      setFollowCam(false); setBuddyEye(false); setPlacing(null); setSelectedIdx(null);
      flits("👁️ Beweeg om rond te kijken · houd ingedrukt om te lopen");
    }
  };

  // Tik op een bezoeker → praatje openen (niet tijdens bouwen/plaatsen/selecteren).
  const tapBezoeker = () => {
    if (placing || sculptMode || waterMode || groundMode || selectedIdx != null) return;
    setDialoog({ step: 0 });
    // Trechter-meting (park → leren): praatje geopend.
    try { track("park_praatje"); } catch { /* nooit laten breken */ }
  };
  // Vak waar het praatje over gaat: aanbevolen oefenpad, anders je beste vak.
  const praatVak = oefenPad?.subject || oefenPad?.title || goedeScore?.vak || "rekenen";
  const gaOefenen = () => {
    setDialoog(null);
    // Trechter-meting: vanuit het park doorgeklikt naar een leerpad (of de hub).
    try { track("park_naar_leren", { pad: oefenPad?.id || null }); } catch { /* nooit laten breken */ }
    if (oefenPad?.id && onOpenLeerpad) onOpenLeerpad(oefenPad.id);
    else if (onOpenLeerpaden) onOpenLeerpaden();
    else onHome && onHome();
  };

  // Reken-vraag bij de geselecteerde kraam.
  const REKEN_BONUS = 2;            // muntjes per goed antwoord
  const REKEN_BONUS_CAP = 30;       // max bonus-antwoorden per sessie (geen farmen)
  const openRekenVraag = () => {
    if (!selKraam) return;
    setRekenVraag(maakRekenVraag(selKraam));
    setRekenUitslag(null);
    setRekenFout(null);
    setRekenHulpOpen(false);
    rekenVraagNr.current += 1; // nieuwe som → eigen (leeg) hulp-gesprek
    try { track("park_rekenvraag"); } catch { /* nooit laten breken */ }
  };
  const beantwoordReken = (optie) => {
    if (!rekenVraag || rekenUitslag === "goed") return;
    if (optie === rekenVraag.antwoord) {
      setRekenUitslag("goed");
      try { track("park_rekenvraag_goed"); } catch { /* niet laten breken */ }
      if (rekenBonusRef.current < REKEN_BONUS_CAP) {
        rekenBonusRef.current += 1;
        setMeta((m) => (m ? { ...m, coins: m.coins + REKEN_BONUS } : m));
      }
    } else {
      setRekenUitslag("fout");
      setRekenFout(optie);
    }
  };

  // ☰-menu: helpers. Bij het kiezen van een functie sluit het menu vanzelf.
  const sluitMenu = () => setMenuOpen(false);
  const doeEnSluit = (fn) => { fn(); sluitMenu(); };
  // Frosted-glass tegels op een donkere blur-achtergrond — rustig en modern.
  const menuTegelStijl = (actief) => ({ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, padding: "14px 6px", borderRadius: 16, border: actief ? "2px solid #7ef0a2" : "1px solid rgba(255,255,255,0.16)", background: actief ? "rgba(46,125,50,0.55)" : "rgba(255,255,255,0.10)", color: "#fff", font: "800 12.5px system-ui", cursor: "pointer", textAlign: "center", lineHeight: 1.25 });
  const MenuTegel = ({ emoji, label, fn, actief = false }) => (
    <button onClick={() => doeEnSluit(fn)} style={menuTegelStijl(actief)}>
      <span style={{ fontSize: 26, lineHeight: 1 }}>{emoji}</span>{label}
    </button>
  );
  const menuKop = { font: "800 11.5px system-ui", color: "rgba(255,255,255,0.62)", textTransform: "uppercase", letterSpacing: 0.8, margin: "16px 2px 8px" };
  const menuGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 };
  // Onboarding: een vers park (alleen het startpark, nog niets bijgekocht).
  const versPark = loaded && placedItems.length <= STARTER_LAYOUT.length;

  return (
    <div style={{ position: "fixed", inset: 0, background: "#aaddff", overflow: "hidden" }}>
      {/* Header. */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, padding: "10px 12px", background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))", pointerEvents: "none" }}>
        <div style={{ color: "#fff", font: "800 16px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.35)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "38vw" }}>🐾 {parkNaam}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Voeren = de enige dagelijkse zorgactie → altijd zichtbaar, met hint bij honger. */}
          <button onClick={voerAlles} title="Dieren voeren" style={{ position: "relative", pointerEvents: "auto", border: enigDierHongerig ? "2px solid #d9853b" : "none", borderRadius: 999, width: 38, height: 38, font: "700 16px system-ui", color: "#234", background: alleGevoerd ? "#cdeccb" : "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>
            🌾
            {hongerAantal > 0 && <span style={{ position: "absolute", top: -4, right: -4, minWidth: 18, height: 18, padding: "0 4px", borderRadius: 999, background: "#e23b3b", color: "#fff", font: "800 11px system-ui", display: "grid", placeItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,.3)" }}>{hongerAantal}</span>}
          </button>
          <span style={{ font: "800 14px system-ui", color: "#5b3d00", background: "#ffe08a", padding: "7px 12px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>
            🪙 {coins}{streak > 1 ? `  ·  🔥${streak}` : ""}
          </span>
          {/* Altijd-zichtbare deur naar leren (Titan 3 jul): 276 park-opens → maar
              1 keer "ga oefenen", want die knop zat verstopt achter een praatje.
              Deze knop staat pal vast in de HUD en koppelt leren aan de munt-
              economie die het kind al motiveert. */}
          {(onOpenLeerpaden || onOpenLeerpad) && (
            <button
              onClick={() => { try { track("park_leren_knop"); track("park_naar_leren", { via: "hud_knop" }); } catch { /* */ } if (onOpenLeerpaden) onOpenLeerpaden(); else if (onOpenLeerpad) onOpenLeerpad(); }}
              title="Leren verdient munten voor je park"
              style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "7px 13px", font: "800 13.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 2px 8px rgba(46,158,79,.45)", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              📚 Verdien 🪙
            </button>
          )}
          {/* Alle overige functies gebundeld in één ☰-menu → tijdens spelen bijna alleen park in beeld. */}
          <button onClick={() => setMenuOpen((v) => !v)} title="Menu" style={{ pointerEvents: "auto", border: (menuOpen || followCam || firstPerson || sculptMode || waterMode || groundMode || bouwen) ? "2px solid #2e7d32" : "none", borderRadius: 999, width: 38, height: 38, font: "800 17px system-ui", color: "#234", background: menuOpen ? "#cdeccb" : "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>☰</button>
          <button onClick={onHome} style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "8px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>← Terug</button>
        </div>
      </div>

      {/* ☰-menu: volledig scherm, frosted-glass, alle extra functies gegroepeerd.
          Tik buiten de inhoud of op ✕ = terug het park in. */}
      {menuOpen && (
        <div onClick={sluitMenu} style={{ position: "absolute", inset: 0, zIndex: 14, background: "rgba(8,16,10,0.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", overflowY: "auto", animation: "zooMenuFade .18s ease-out" }}>
          <style>{`@keyframes zooMenuFade{from{opacity:0}to{opacity:1}}@keyframes zooMenuIn{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}`}</style>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 620, margin: "0 auto", padding: "16px 16px calc(28px + env(safe-area-inset-bottom))", animation: "zooMenuIn .22s ease-out" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <div style={{ color: "#fff", font: "900 20px system-ui", textShadow: "0 1px 6px rgba(0,0,0,.4)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>🐾 {parkNaam}</div>
              <button onClick={sluitMenu} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, width: 40, height: 40, font: "800 16px system-ui", color: "#fff", background: "rgba(255,255,255,0.14)", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ color: "rgba(255,255,255,0.75)", font: "700 12.5px system-ui", margin: "6px 0 16px" }}>
              🪙 {coins}{streak > 1 ? ` · 🔥 ${streak} dagen op rij` : ""} · 📈 je park verdient 🪙{inkomstenPerDag(placedItems, kindVan)} per dag
            </div>

            {/* Bouwen = de grote actie bovenaan. */}
            <button onClick={() => doeEnSluit(() => { setBouwen(true); setFirstPerson(false); setBuddyEye(false); setRideTrain(false); })} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, border: "none", borderRadius: 18, padding: "15px 18px", font: "900 16px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 6px 22px rgba(0,0,0,.32)", cursor: "pointer", textAlign: "left" }}>
              <span style={{ fontSize: 28, lineHeight: 1 }}>🏗️</span>
              <span>Bouwen<br /><span style={{ font: "700 12px system-ui", opacity: 0.9 }}>dieren, hekken, gebouwen en meer neerzetten</span></span>
            </button>

            <div style={menuKop}>📷 Camera</div>
            <div style={menuGrid}>
              <MenuTegel emoji="👁️" label="Door je eigen ogen" fn={toggleFirstPerson} actief={firstPerson} />
              {buddyId && <MenuTegel emoji="🐉" label="Door de ogen van je buddy" fn={() => { setBuddyEye((v) => !v); setFirstPerson(false); setFollowCam(false); }} actief={buddyEye} />}
              {placedItems.some((it) => it.assetId === "rail") && <MenuTegel emoji="🚂" label="Meerijden met de trein" fn={() => { setRideTrain((v) => !v); setFirstPerson(false); setFollowCam(false); }} actief={rideTrain} />}
              <MenuTegel emoji="🗺️" label="Vogelvlucht (ver uitzoomen)" fn={() => { setFollowCam((v) => !v); setFirstPerson(false); setBuddyEye(false); }} actief={followCam} />
            </div>

            <div style={menuKop}>🛠️ Landschap</div>
            <div style={menuGrid}>
              <MenuTegel emoji="⛰️" label="Heuvels boetseren" fn={() => { setSculptMode((v) => !v); setWaterMode(false); setGroundMode(false); setPlacing(null); setSelectedIdx(null); }} actief={sculptMode} />
              <MenuTegel emoji="💧" label="Water / meertjes" fn={() => { setWaterMode((v) => !v); setSculptMode(false); setGroundMode(false); setPlacing(null); setSelectedIdx(null); }} actief={waterMode} />
              <MenuTegel emoji="🏖️" label="Grond schilderen" fn={() => { setGroundMode((v) => !v); setSculptMode(false); setWaterMode(false); setPlacing(null); setSelectedIdx(null); }} actief={groundMode} />
              <MenuTegel emoji="🏗️" label="Auto-bouw (muntjes inzetten)" fn={() => { setAutoBudget(coins); setPanel("autobouw"); }} />
            </div>

            <div style={menuKop}>🏡 Mijn park</div>
            <div style={menuGrid}>
              <MenuTegel emoji="👤" label="Mijn poppetje kiezen" fn={() => setPanel("karakter")} />
              <MenuTegel emoji="🐾" label="Kies je maatje" fn={openBuddyPicker} />
              <MenuTegel emoji="🫧" label="Maatje-weetjes wissen" fn={() => { wisBuddyWeetjes(); setMenuOpen(false); flits("Je maatje is alles weer vergeten — hij stelt zijn vraagjes gewoon opnieuw. 🐾"); }} />
              {onOpenMaatje && <MenuTegel emoji="📱" label="Mijn maatje (altijd bij je)" fn={onOpenMaatje} />}
              <MenuTegel emoji="💾" label="Park opslaan" fn={opslaan} />
              <MenuTegel emoji="📤" label="Delen met een vriend" fn={openDelen} />
              <MenuTegel emoji="♻️" label="Opnieuw beginnen" fn={() => setPanel("reset")} />
            </div>

            <div style={menuKop}>🎮 Extra</div>
            <div style={menuGrid}>
              {onPlayObliterator && <MenuTegel emoji="🎮" label="OBLITERATOR — extra spel" fn={onPlayObliterator} />}
              <MenuTegel emoji="ℹ️" label="Hoe werkt het?" fn={() => setPanel("uitleg")} />
              <MenuTegel emoji="📖" label="Diergids" fn={() => setPanel("gids")} />
            </div>
          </div>
        </div>
      )}

      {/* Onboarding: vers park → wijs het kind naar de winkelbalk. */}
      {versPark && !welkomWeg && bouwen && !placing && !dialoog && !menuOpen && (
        <div style={{ position: "absolute", left: "50%", bottom: 150, transform: "translateX(-50%)", zIndex: 9, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, pointerEvents: "none", maxWidth: "92%" }}>
          <div style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: 10, background: "#fffef8", color: "#234", borderRadius: 14, padding: "10px 12px 10px 14px", boxShadow: "0 6px 20px rgba(0,0,0,.28)", font: "800 13.5px system-ui" }}>
            <span style={{ fontSize: 20 }}>👋</span>
            <span>Welkom{naam ? ` ${naam}` : ""}! Kies hieronder een dier en zet het in je park 🦊</span>
            <button onClick={() => setWelkomWeg(true)} style={{ border: "none", borderRadius: 999, width: 26, height: 26, font: "700 13px system-ui", background: "#eee", cursor: "pointer", flex: "0 0 auto" }}>✕</button>
          </div>
          <span style={{ fontSize: 22, lineHeight: 1, filter: "drop-shadow(0 2px 3px rgba(0,0,0,.3))" }}>⬇️</span>
        </div>
      )}

      {/* Beloning-melding bij binnenkomst. */}
      {reward && (
        <div style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", zIndex: 11, background: "rgba(255,255,255,0.96)", color: "#234", borderRadius: 14, padding: "10px 16px", boxShadow: "0 6px 20px rgba(0,0,0,.25)", font: "700 14px system-ui", textAlign: "center", maxWidth: "90%" }}>
          {reward.total > 0 ? `🎉 +${reward.total} muntjes!` : (reward.weggelopen > 0 ? "🐾 Er is iets veranderd in je park" : "")}
          <div style={{ font: "600 12px system-ui", opacity: 0.78, marginTop: 2 }}>
            {[
              reward.login > 0 && `Inloggen +${reward.login}`,
              reward.kwartier > 0 && `Kwartier +${reward.kwartier}`,
              reward.park > 0 && `Je park +${reward.park}`,
              reward.loon > 0 && `🧑 Verkopers-loon −${reward.loon}`,
              reward.goedVerzorgd && `🌾 Goed verzorgd!`,
              reward.births > 0 && `🐣 ${reward.births} jonkie${reward.births > 1 ? "s" : ""} geboren! +${reward.births * BABY_BONUS}`,
            ].filter(Boolean).join("  ·  ")}
          </div>
          {reward.kwartier > 0 && (
            <button
              onClick={() => { setLoonstrook({ netto: reward.kwartier, niveau: econLevel }); try { track("econ_open", { scherm: "loonstrook", niveau: econLevel }); } catch { /* nooit laten breken */ } }}
              style={{ marginTop: 8, border: "none", background: "linear-gradient(135deg,#1c7d3c,#0a9d4a)", color: "#fff", font: "800 12px system-ui", padding: "8px 14px", borderRadius: 999, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,.18)" }}
            >
              📄 Bekijk je loonstrookje
            </button>
          )}
          {reward.weggelopen > 0 && (
            <div style={{ font: "700 12px system-ui", color: "#c0392b", marginTop: 4 }}>🐾 Een dier liep weg — het kreeg te lang geen hooi. Geef ze elke dag 🌾!</div>
          )}
        </div>
      )}
      {/* Loonstrookje (opt-in na kwartier leren) — bruto → belasting → netto, met doorklik naar leerpaden. */}
      {loonstrook && (
        <Loonstrook
          netto={loonstrook.netto}
          niveau={loonstrook.niveau}
          onOpenLeerpad={(id) => { setLoonstrook(null); if (onOpenLeerpad) onOpenLeerpad(id); else if (onOpenLeerpaden) onOpenLeerpaden(); }}
          onClose={() => setLoonstrook(null)}
          track={track}
        />
      )}
      {/* Inkoop-bonnetje (bij het kopen van een dier) — prijs → btw → totaal, met doorklik naar leerpaden. */}
      {inkoopBon && (
        <InkoopBon
          {...inkoopBon}
          onOpenLeerpad={(id) => { setInkoopBon(null); if (onOpenLeerpad) onOpenLeerpad(id); else if (onOpenLeerpaden) onOpenLeerpaden(); }}
          onClose={() => setInkoopBon(null)}
          track={track}
        />
      )}
      {/* Vrijspeel-viering: een leerpad 100% af → bijzonder dier verdiend. */}
      {unlockMelding && (
        <div onClick={() => setUnlockMelding(null)} style={{ position: "absolute", inset: 0, zIndex: 32, background: "rgba(8,14,28,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 340, background: "#fff", borderRadius: 20, boxShadow: "0 14px 44px rgba(0,0,0,.4)", overflow: "hidden", textAlign: "center", font: "system-ui" }}>
            <div style={{ background: "linear-gradient(135deg,#f6c84c,#f59e0b)", padding: "20px 18px 16px" }}>
              <div style={{ fontSize: 52, lineHeight: 1 }}>{unlockMelding.emoji}</div>
              <div style={{ font: "900 18px system-ui", color: "#3a2a00", marginTop: 6 }}>{unlockMelding.naam} vrijgespeeld! ✨</div>
            </div>
            <div style={{ padding: "16px 18px 4px", font: "600 14px system-ui", color: "#56627a", lineHeight: 1.5 }}>{unlockMelding.waarom}</div>
            <div style={{ padding: "12px 16px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              <button onClick={() => { setShopCat("dier"); startKopen({ assetId: unlockMelding.assetId, price: 0, emoji: unlockMelding.emoji, label: unlockMelding.naam }); setUnlockMelding(null); }} style={{ width: "100%", border: "none", background: "linear-gradient(135deg,#00C853,#00a846)", color: "#fff", font: "800 15px system-ui", padding: "13px", borderRadius: 12, cursor: "pointer" }}>{unlockMelding.emoji} Zet 'm in je park</button>
              <button onClick={() => setUnlockMelding(null)} style={{ width: "100%", border: "none", background: "transparent", color: "#8a939c", font: "700 13px system-ui", padding: "6px", cursor: "pointer" }}>Later</button>
            </div>
          </div>
        </div>
      )}
      {/* Kraam-dagoverzicht: opbrengst − inkoop − loon = nettowinst (vaste kosten leren). */}
      {kraamOverzicht && kramen[kraamOverzicht] && (() => {
        const kr = kramen[kraamOverzicht];
        const st = saleStats[kraamOverzicht] || { count: 0, opbrengst: 0, inkoopkosten: 0 };
        const brutowinst = st.opbrengst - st.inkoopkosten;
        const netto = brutowinst - VERKOPER_LOON;
        const Rij = ({ label, waarde, sub, sterk, kleur }) => (
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, padding: sterk ? "10px 0 2px" : "5px 0", borderTop: sterk ? "2px solid #e7ebf1" : "none" }}>
            <span style={{ font: sterk ? "800 14px system-ui" : "600 13px system-ui", color: "#46506a" }}>{label}{sub && <span style={{ font: "500 11px system-ui", color: "#9aa3b2" }}> {sub}</span>}</span>
            <span style={{ font: sterk ? "900 16px system-ui" : "800 14px system-ui", color: kleur || "#1c2840", whiteSpace: "nowrap" }}>{waarde}</span>
          </div>
        );
        return (
          <div onClick={() => setKraamOverzicht(null)} style={{ position: "absolute", inset: 0, zIndex: 32, background: "rgba(8,14,28,0.5)", display: "grid", placeItems: "center", padding: 16 }}>
            <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 380, background: "#fff", borderRadius: 18, boxShadow: "0 14px 44px rgba(0,0,0,.38)", overflow: "hidden", font: "system-ui" }}>
              <div style={{ background: "linear-gradient(135deg,#0a9d4a,#0a7d3c)", color: "#fff", padding: "14px 18px" }}>
                <div style={{ font: "900 16px system-ui" }}>📊 {KRAAM_SOORTEN[kraamOverzicht]?.label} — dagoverzicht</div>
                <div style={{ font: "700 12px system-ui", opacity: 0.92, marginTop: 3 }}>📋 In de aanbieding: {kr.emoji} {kr.label} voor {kr.verkoop} 🪙</div>
              </div>
              <div style={{ padding: "10px 18px 4px" }}>
                <Rij label="Verkocht" sub="(deze parksessie)" waarde={`${st.count} stuks`} />
                <Rij label="Opbrengst" sub="(alles wat binnenkwam)" waarde={`${st.opbrengst} 🪙`} kleur="#0a7d3c" />
                <Rij label={`Inkoopkosten`} sub={`(${st.count} × ${kr.inkoop} 🪙)`} waarde={`− ${st.inkoopkosten} 🪙`} kleur="#c0392b" />
                <Rij label="Brutowinst" waarde={`${brutowinst} 🪙`} sterk kleur={brutowinst >= 0 ? "#0a7d3c" : "#c0392b"} />
                <Rij label="🧑 Verkopers-loon" sub="(vaste kost / dag)" waarde={`− ${VERKOPER_LOON} 🪙`} kleur="#c0392b" />
                <Rij label="Nettowinst vandaag" waarde={`${netto} 🪙`} sterk kleur={netto >= 0 ? "#0a7d3c" : "#c0392b"} />
              </div>
              <div style={{ margin: "8px 18px 0", padding: "9px 12px", background: "#fff8e6", border: "1px solid #f3e0a8", borderRadius: 12, font: "600 12px system-ui", color: "#7a5b00", lineHeight: 1.45 }}>
                💶 In het echt kost een verkoper ongeveer <b>€{VERKOPER_LOON_EURO} per dag</b>. Je betaalt 'm élke dag — ook als er weinig verkocht wordt. Daarom moet je genoeg verkopen om je verkoper te kunnen betalen.
              </div>
              <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
                <button onClick={() => { setKraamOverzicht(null); try { track("econ_naar_leren", { scherm: "kraam_overzicht", pad: "winst-rekenen-po" }); } catch { /* */ } if (onOpenLeerpad) onOpenLeerpad("winst-rekenen-po"); else if (onOpenLeerpaden) onOpenLeerpaden(); }} style={{ width: "100%", border: "none", background: "linear-gradient(135deg,#00C853,#00a846)", color: "#fff", font: "800 14px system-ui", padding: "12px", borderRadius: 12, cursor: "pointer" }}>💡 Leer hoe winst & kosten werken →</button>
                <button onClick={() => setKraamOverzicht(null)} style={{ width: "100%", border: "none", background: "#eef1f5", color: "#33404f", font: "800 13px system-ui", padding: "10px", borderRadius: 12, cursor: "pointer" }}>Sluiten</button>
              </div>
            </div>
          </div>
        );
      })()}
      {/* Korte info-melding. */}
      {melding && (
        <div style={{ position: "absolute", top: 110, left: "50%", transform: "translateX(-50%)", zIndex: 11, background: "rgba(20,30,20,0.86)", color: "#fff", borderRadius: 12, padding: "8px 14px", font: "700 13px system-ui", textAlign: "center", maxWidth: "90%" }}>
          {melding}
        </div>
      )}

      {/* Sleep-laag om de 3D-scene: registreert camera-drags (bubbelt vanaf de
          canvas, blokkeert niets — tikken op dieren/bezoekers blijft werken). */}
      <div style={{ position: "absolute", inset: 0 }} onPointerDown={camDown} onWheel={camWheel}>
      <Suspense fallback={<div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#3a5a2a", font: "600 15px system-ui" }}>Park laden…</div>}>
        <ZooScene
          placingAsset={placing?.assetId || null}
          placingRot={placing?.rot || 0}
          placedItems={placedItems}
          onPlace={plaatsOpVakje}
          onPlaceBlok={plaatsBlokOp}
          onHakBlok={(k) => {
            if (k.assetId) pakIn(k.assetId);
            setPlacedItems((items) => {
              const idx = items.findIndex((it) => isBlok(it.assetId) && it.kx === k.kx && it.kz === k.kz && (it.kh || 0) === (k.kh || 0));
              return idx < 0 ? items : items.filter((_, ix) => ix !== idx);
            });
          }}
          bouwCursorRef={bouwCursorRef}
          bouwModus={bouwen}
          onSelectPlaced={(idx) => { setPlacing(null); setColorMode(false); setSelectedIdx(idx); }}
          onClearSelection={sluitSelectie}
          onBuy={buyApi.onBuy}
          kramen={kramen}
          onPickPart={(idx, grp) => { setHuisKleur(idx, grp, brushColor); flits("Onderdeel gekleurd ✓"); }}
          onHouseParts={setHouseParts}
          paintCursor={colorMode && selIsHuis ? verfCursor(brushColor) : null}
          colorEditIdx={colorMode && selIsHuis ? selectedIdx : -1}
          followCam={followCam}
          firstPerson={firstPerson}
          rideTrain={rideTrain}
          rideIdx={rideIdx}
          zweef={zweef}
          spelerNaam={naam}
          goedeScore={goedeScore}
          zwakVak={zwakVak}
          onTapBezoeker={tapBezoeker}
          terrain={terrain}
          onTerrainChange={setTerrain}
          sculptMode={sculptMode}
          sculptDir={sculptDir}
          selectedIdx={selectedIdx}
          moveIdx={placing?.moveIdx ?? -1}
          inputRef={inputRef}
          parkNaam={parkNaam}
          waterMode={waterMode}
          waterSeeds={waterSeeds}
          onWater={onWaterTik}
          ground={ground}
          groundMode={groundMode}
          onGround={onGroundTik}
          avatarUrl={avatarUrl}
          buddyId={buddyId}
          buddyGroei={geleerdeStappen}
          buddyNaam={buddyNaamEff}
          onBuddyPraat={() => setBuddyChatOpen(true)}
          buddyEye={buddyEye}
        />
      </Suspense>
      </div>

      {/* 🐾 Maatjes-kiezer (eerste keer automatisch; daarna via ⚙️-menu). */}
      <BuddyPicker
        open={buddyPickerOpen}
        onClose={() => setBuddyPickerOpen(false)}
        geleerdeStappen={geleerdeStappen}
        currentId={buddyId}
        onChoose={(id) => { setBuddyId(id); setBuddyNaamEff(buddyNaamVan(id, BUDDY_BY_ID[id]?.naam || "")); try { track("buddy_gekozen", { id }); } catch { /* */ } }}
        onRename={(id, n) => { if (id === buddyId) setBuddyNaamEff(n); try { track("buddy_naam", { id }); } catch { /* */ } }}
        onLeren={onOpenLeerpaden ? () => { setBuddyPickerOpen(false); onOpenLeerpaden(); } : undefined}
      />

      {/* 💬 Praten met je maatje (AI, kindveilig). Maatje is ook parkgids. */}
      {buddyId && (
        <BuddyChat
          open={buddyChatOpen}
          onClose={() => setBuddyChatOpen(false)}
          buddyId={buddyId}
          buddyNaam={buddyNaamEff}
          onNaarLeren={() => {
            setBuddyChatOpen(false);
            // Trechter-meting: leren gestart vanuit het maatje-praatje (nieuwe brug 5 jul).
            try { track("park_naar_leren", { via: "buddy_chat", pad: oefenPad?.id || null }); } catch { /* nooit laten breken */ }
            if (oefenPad?.id && onOpenLeerpad) onOpenLeerpad(oefenPad.id);
            else if (onOpenLeerpaden) onOpenLeerpaden();
          }}
          facts={{ naam, zwakVak }}
          park={(() => {
            let dieren = 0, attracties = 0, gebouwen = 0, kraampjes = 0, bomen = 0;
            placedItems.forEach((it) => {
              const a = getAsset(it.assetId); if (!a) return;
              if (a.voorziet) kraampjes++;
              else if (a.kind === "animal") dieren++;
              else if (a.kind === "attraction") attracties++;
              else if (a.kind === "building") gebouwen++;
              else if (["tree", "bush", "fern", "stump"].includes(a.procedural)) bomen++;
            });
            return { dieren, attracties, gebouwen, kraampjes, bomen, muntjes: coins };
          })()}
        />
      )}

      {/* Touch-joystick om te lopen — alleen op aanraakschermen (op laptop/desktop
          loop je met WASD/pijltjes). Verborgen tijdens plaatsen/selecteren/boetseren
          en in eerstepersoons — daar bestuur je met de muis/vinger over het beeld. */}
      {COARSE_POINTER && !firstPerson && !placing && !sculptMode && !waterMode && !groundMode && selectedIdx == null && <Joystick inputRef={inputRef} />}

      {/* 🐾 Eenmalige maatje-tip: "je kunt hier zélf bouwen!" met snelknop. */}
      {bouwTip && !menuOpen && !placing && !dialoog && (
        <div style={{ position: "absolute", left: "50%", bottom: bouwen ? 170 : 24, transform: "translateX(-50%)", zIndex: 13, width: "min(420px, 94vw)", background: "#fffef8", borderRadius: 16, boxShadow: "0 10px 32px rgba(0,0,0,.35)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28, flex: "0 0 auto" }}>{BUDDY_BY_ID[buddyId]?.emoji || "🐾"}</span>
          <div style={{ flex: 1, font: "700 13.5px/1.4 system-ui", color: "#234" }}>
            <b>{buddyNaamEff || "Je maatje"}</b>: "Hoi{naam ? ` ${naam}` : ""}! Wist je dat je hier zélf mag bouwen? Een huis, een hok, een toren — wat jij wilt! 🧱"
          </div>
          <button onClick={() => { sluitBouwTip(); setBouwen(true); setShopCat("blok"); setFirstPerson(false); }} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "10px 14px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>🧱 Laat zien</button>
          <button onClick={sluitBouwTip} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, width: 28, height: 28, font: "700 13px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
        </div>
      )}

      {/* 💬 Dagelijks kennismakings-vraagje: het maatje leert je écht kennen.
          Antwoord blijft lokaal op het apparaat (geen adres/school gevraagd). */}
      {buddyVraag && !bouwTip && !menuOpen && !placing && !dialoog && !(versPark && !welkomWeg) && (
        <div style={{ position: "absolute", left: "50%", ...(COARSE_POINTER ? { top: 66 } : { bottom: bouwen ? 170 : 24 }), transform: "translateX(-50%)", zIndex: 13, width: "min(440px, 94vw)", background: "#fffef8", borderRadius: 16, boxShadow: "0 10px 32px rgba(0,0,0,.35)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ fontSize: 28, flex: "0 0 auto" }}>{BUDDY_BY_ID[buddyId]?.emoji || "🐾"}</span>
          <div style={{ flex: "1 1 140px", font: "700 13.5px/1.4 system-ui", color: "#234" }}>
            <b>{buddyNaamEff || "Je maatje"}</b>: "{buddyVraag.vraag}"
          </div>
          <input
            value={buddyAntwoord}
            onChange={(e) => setBuddyAntwoord(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") stuurBuddyAntwoord(); e.stopPropagation(); }}
            placeholder={buddyVraag.placeholder}
            maxLength={30}
            style={{ flex: "1 1 130px", minWidth: 110, border: "2px solid #d8d2c0", borderRadius: 999, padding: "9px 14px", font: "600 13.5px system-ui", color: "#234", outline: "none", background: "#fff" }}
          />
          <button onClick={stuurBuddyAntwoord} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "10px 16px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>Vertel!</button>
          <button onClick={() => { stelBuddyVraagUit(); setBuddyVraag(null); }} title="Vandaag niet" style={{ flex: "0 0 auto", border: "none", borderRadius: 999, width: 40, height: 40, font: "700 14px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
          <div style={{ flex: "1 1 100%", font: "600 11px system-ui", color: "#8a8574", textAlign: "center" }}>Blijft op dit apparaat · wissen kan via ☰</div>
        </div>
      )}

      {/* 🪽 Zweef-knop (Minecraft-fly): snel door je park, over alles heen.
          Op laptop ook met de spatiebalk aan/uit. */}
      {!firstPerson && rideIdx == null && !rideTrain && (
        <button
          onClick={() => setZweef((v) => !v)}
          title={zweef ? "Weer lopen (of druk spatie)" : "Zweven — snel door je park (of druk spatie)"}
          style={{ position: "absolute", right: 16, bottom: 150, zIndex: 12, border: zweef ? "3px solid #fff" : "none", borderRadius: "50%", width: 54, height: 54, font: "700 22px system-ui", background: zweef ? "linear-gradient(135deg,#38bdf8,#2563eb)" : "rgba(255,255,255,0.92)", boxShadow: "0 4px 14px rgba(0,0,0,.28)", cursor: "pointer" }}
        >
          {zweef ? "🚶" : "🪽"}
        </button>
      )}

      {/* 🎠 In een attractie: grote duidelijke uitstap-knop. */}
      {rideIdx != null && (
        <button
          onClick={() => setRideIdx(null)}
          style={{ position: "absolute", left: "50%", bottom: "calc(24px + env(safe-area-inset-bottom))", transform: "translateX(-50%)", zIndex: 13, border: "none", borderRadius: 999, padding: "13px 26px", font: "900 15px system-ui", color: "#fff", background: "linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow: "0 6px 20px rgba(0,0,0,.35)", cursor: "pointer" }}
        >
          ✕ Uitstappen
        </button>
      )}

      {/* Korte besturing-hint voor laptop/desktop (verdwijnt vanzelf). */}
      {!COARSE_POINTER && !firstPerson && !buddyEye && besturingHint && (
        <div style={{ position: "absolute", left: "50%", bottom: 18, transform: "translateX(-50%)", zIndex: 6, pointerEvents: "none", background: "rgba(20,30,20,0.62)", color: "#fff", borderRadius: 999, padding: "8px 16px", font: "700 12.5px system-ui", whiteSpace: "nowrap", maxWidth: "94%", overflow: "hidden", textOverflow: "ellipsis" }}>
          🕹️ Lopen: WASD of pijltjes · 🖱️ Rondkijken: slepen · Zoomen: scrollen
        </div>
      )}

      {/* Eerstepersoons-besturing: richten + lopen over het hele beeld. */}
      {firstPerson && !placing && !sculptMode && !waterMode && !groundMode && selectedIdx == null && (
        <>
          <LookControl inputRef={inputRef} />
          <div style={{ position: "absolute", left: "50%", bottom: 96, transform: "translateX(-50%)", zIndex: 6, pointerEvents: "none", background: "rgba(20,30,20,0.7)", color: "#fff", borderRadius: 999, padding: "7px 14px", font: "700 12.5px system-ui", textAlign: "center", maxWidth: "92%" }}>
            👁️ Beweeg om rond te kijken · <b>ingedrukt houden = lopen</b>
          </div>
          {/* Praten kan in eerstepersoons niet door te tikken → aparte knop. */}
          <button onClick={tapBezoeker} style={{ position: "absolute", left: 16, bottom: 92, zIndex: 7, pointerEvents: "auto", border: "none", borderRadius: 999, padding: "11px 16px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>💬 Praat</button>
          {/* Duidelijke uitknop (de 👁️-knop zit nu in het ⚙️-menu). */}
          <button onClick={() => setFirstPerson(false)} title="Terug naar normaal beeld" style={{ position: "absolute", right: 16, bottom: 92, zIndex: 7, pointerEvents: "auto", border: "none", borderRadius: 999, padding: "11px 16px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✕ Normaal</button>
          {/* Vast richtkruis in het midden. */}
          <div style={{ position: "absolute", left: "50%", top: "50%", width: 10, height: 10, marginLeft: -5, marginTop: -5, zIndex: 6, pointerEvents: "none", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.85)", boxShadow: "0 0 4px rgba(0,0,0,.5)" }} />
        </>
      )}

      {/* 🚂 Meerijden-modus: zichtbare stop-knop. */}
      {rideTrain && (
        <button onClick={() => setRideTrain(false)} title="Stop met meerijden" style={{ position: "absolute", right: 16, bottom: 92, zIndex: 8, pointerEvents: "auto", border: "none", borderRadius: 999, padding: "11px 16px", font: "800 14px system-ui", color: "#fff", background: "#c0392b", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>🚂 ✕ Stop meerijden</button>
      )}

      {/* 🐉 Buddy-blik-modus: zichtbare stop-knop. */}
      {buddyEye && (
        <button onClick={() => setBuddyEye(false)} title="Terug naar normaal beeld" style={{ position: "absolute", right: 16, bottom: 92, zIndex: 8, pointerEvents: "auto", border: "none", borderRadius: 999, padding: "11px 16px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>🐉 ✕ Normaal beeld</button>
      )}

      {/* Onderbalk: contextueel. */}
      {/* Onderbalk: alléén in bouw-modus of een actieve doe-modus in beeld —
          tijdens gewoon spelen is het hele scherm park. */}
      {(bouwen || placing || sculptMode || waterMode || groundMode || selectedIdx != null) && (
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10, padding: "12px 14px calc(12px + env(safe-area-inset-bottom))", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0))", flexWrap: "wrap", animation: "zooBalkIn .22s ease-out" }}>
        <style>{`@keyframes zooBalkIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}`}</style>
        {groundMode ? (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
              🏖️ Kies een <b>grondsoort</b> en tik op de grond om te schilderen. "Gras" maakt het weer normaal.
            </span>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              {GROUND_TYPES.map((g) => (
                <button key={g.key} onClick={() => setGroundType(g.key)} title={g.label} style={{ border: groundType === g.key ? "3px solid #2e7d32" : "2px solid rgba(255,255,255,0.85)", borderRadius: 12, padding: "7px 12px", font: "800 13px system-ui", color: "#234", background: g.color || "#7cbf5a", boxShadow: "0 2px 6px rgba(0,0,0,.25)", cursor: "pointer", transform: groundType === g.key ? "scale(1.08)" : "none" }}>{g.emoji} {g.label}</button>
              ))}
              <button onClick={() => setGroundMode(false)} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
            </div>
          </div>
        ) : waterMode ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
              💧 Tik om een <b>waterbron</b> te plaatsen — het water stroomt vanzelf naar beneden (graaf geultjes met ⛰️⬇️) en vult dalen · tik op water om het weg te halen
            </div>
            <button onClick={() => setWaterMode(false)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
          </>
        ) : sculptMode ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              ⛰️ Tik op de grond om de vloer {sculptDir > 0 ? "omhoog" : "omlaag"} te boetseren
            </div>
            <button onClick={() => setSculptDir(1)} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: sculptDir > 0 ? "#fff" : "#234", background: sculptDir > 0 ? "#2e7d32" : "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>⬆️ Omhoog</button>
            <button onClick={() => setSculptDir(-1)} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: sculptDir < 0 ? "#fff" : "#234", background: sculptDir < 0 ? "#2e7d32" : "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>⬇️ Omlaag</button>
            <button onClick={() => setSculptMode(false)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
          </>
        ) : placing ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
              {placing.pakket
                ? `Loop naar een open plek en druk "Zet neer" — daar komt je ${placing.pakketLabel || "bouwwerk"} (bij de groene pijl).`
                : isBlok(placing.assetId)
                  ? "Wijs met de muis: klik op een blokje = ertegenaan bouwen, rechts-klik = weghakken. Of loop en gebruik de knoppen."
                  : `Tik op een groen vak om neer te ${placing.moveIdx != null ? "verplaatsen" : "zetten"}`}
            </div>
            {isBlok(placing.assetId) && placing.moveIdx == null && (
              <>
                <button
                  onClick={() => { if (bouwCursorRef.current) plaatsBlokOp(bouwCursorRef.current); }}
                  style={{ border: "none", borderRadius: 999, padding: "12px 22px", font: "900 15px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 4px 14px rgba(46,158,79,.45)", cursor: "pointer" }}
                >
                  🧱 Zet neer
                </button>
                <button
                  onClick={hakWeg}
                  style={{ border: "none", borderRadius: 999, padding: "12px 20px", font: "900 15px system-ui", color: "#fff", background: "linear-gradient(135deg,#8a5a3a,#6a4228)", boxShadow: "0 4px 14px rgba(0,0,0,.3)", cursor: "pointer" }}
                >
                  ⛏️ Hak weg
                </button>
              </>
            )}
            <button onClick={draai} title="Draaien" style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>↻ Draai</button>
            <button onClick={() => setPlacing(null)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
          </>
        ) : selectedIdx != null && colorMode ? (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
              🎨 Kies een <b>kleur</b> en tik dan op een deel van het huis (dak, muur, deur…). Andere kleur kiezen en opnieuw tikken = wijzigen.
            </span>
            {/* Eén simpele rij kleuren — altijd te gebruiken. Kies een kleur (de
                gekozen kleur licht op) en tik daarna het onderdeel op het huis. */}
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              {HUIS_KLEUREN.map((c) => (
                <button key={c} onClick={() => setBrushColor(c)} title="Kies deze kleur" style={{ width: 38, height: 38, borderRadius: "50%", border: brushColor === c ? "4px solid #fff" : "2px solid rgba(255,255,255,0.6)", background: c, cursor: "pointer", boxShadow: brushColor === c ? "0 0 0 3px #2e7d32, 0 2px 8px rgba(0,0,0,.35)" : "0 2px 6px rgba(0,0,0,.25)", transform: brushColor === c ? "scale(1.18)" : "none" }} />
              ))}
              <button onClick={() => { setColorMode(false); setHouseParts(null); }} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
            </div>
          </div>
        ) : selectedIdx != null && selVoorziet ? (
          <div style={{ width: "100%", maxWidth: 560, display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
            <span style={{ color: "#fff", font: "800 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
              {KRAAM_SOORTEN[selVoorziet]?.emoji} {KRAAM_SOORTEN[selVoorziet]?.label} — kies wat je verkoopt en bepaal je prijs
            </span>
            {/* Product kiezen. */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
              {KRAAM_PRODUCTEN[selVoorziet].map((p, i) => {
                const actief = p.id === selKraam?.id;
                return (
                  <button key={p.id} onClick={() => setProduct(selVoorziet, i)} style={{ border: actief ? "2px solid #2e7d32" : "1px solid rgba(255,255,255,0.6)", borderRadius: 12, padding: "6px 11px", font: "800 13px system-ui", color: "#234", background: actief ? "#cdeccb" : "rgba(255,255,255,0.92)", boxShadow: "0 2px 6px rgba(0,0,0,.2)", cursor: "pointer", whiteSpace: "nowrap" }}>{p.emoji} {p.label}</button>
                );
              })}
            </div>
            {/* Reken-rij: inkoop (vast) → verkoop (instelbaar) → winst (live). */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center", background: "rgba(255,255,255,0.96)", borderRadius: 16, padding: "8px 12px", boxShadow: "0 3px 10px rgba(0,0,0,.22)" }}>
              <span style={{ font: "800 13px system-ui", color: "#555" }}>Inkoop <b style={{ color: "#234", fontSize: 16 }}>{selKraam?.inkoop} 🪙</b></span>
              <span style={{ font: "900 16px system-ui", color: "#999" }}>→</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ font: "800 13px system-ui", color: "#555" }}>Verkoop</span>
                <button onClick={() => setPrice(selVoorziet, selKraam.verkoop - 1)} style={{ border: "none", borderRadius: "50%", width: 34, height: 34, font: "900 19px system-ui", color: "#fff", background: "#d9534f", cursor: "pointer" }}>−</button>
                <span style={{ font: "900 18px system-ui", color: "#234", minWidth: 52, textAlign: "center" }}>{selKraam?.verkoop} 🪙</span>
                <button onClick={() => setPrice(selVoorziet, selKraam.verkoop + 1)} style={{ border: "none", borderRadius: "50%", width: 34, height: 34, font: "900 19px system-ui", color: "#fff", background: "#2e7d32", cursor: "pointer" }}>+</button>
              </div>
              <span style={{ font: "900 16px system-ui", color: "#999" }}>=</span>
              <span style={{ font: "900 14px system-ui", color: selWinst > 0 ? "#1f7a3a" : "#c0392b", background: selWinst > 0 ? "#e7f3e2" : "#fdecea", borderRadius: 999, padding: "5px 11px" }}>
                {selWinst > 0 ? `Winst ${selWinst} 🪙` : "Geen winst!"}
              </span>
            </div>
            <span style={{ color: "#fff", font: "700 11.5px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.45)", textAlign: "center", maxWidth: 420 }}>
              {selWinst <= 0
                ? `Verkoop duurder dan je inkoop (${selKraam?.inkoop} 🪙), anders verdien je niets.`
                : selKraam?.verkoop > selKraam?.fair + 2
                  ? "Best duur — dan haken sommige bezoekers af. Lagere prijs = meer kopers."
                  : "Mooie prijs! Veel bezoekers kopen dit."}
            </span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              <button onClick={() => { setKraamOverzicht(selVoorziet); try { track("kraam_overzicht_open", { kraam: selVoorziet }); } catch { /* */ } }} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#0a9d4a,#0a7d3c)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>📊 Dagoverzicht</button>
              <button onClick={openRekenVraag} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#3a6ad8,#2546b0)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🧮 Reken-vraag</button>
              <button onClick={verplaatsGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>↔ Verplaatsen</button>
              <button onClick={weghaalGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#fff", background: "#d9534f", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🗑 Weghalen (+{placedItems[selectedIdx]?.price ?? prijsVan(placedItems[selectedIdx]?.assetId)} 🪙)</button>
              <button onClick={sluitSelectie} style={{ border: "none", borderRadius: 999, padding: "9px 14px", font: "700 13px system-ui", color: "#234", background: "rgba(255,255,255,0.7)", cursor: "pointer" }}>✕</button>
            </div>
          </div>
        ) : selectedIdx != null ? (
          <>
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              {selKind === "animal" ? "🦊 Dier loopt vrij rond — bouw er zelf een hek omheen met 🚧 Hekken:" : "Gekozen:"}
            </span>
            {/* 🎠 Instappen: in de draaimolen/reuzenrad/zweefmolen meedraaien;
                bij de trein via het bestaande meerijden. */}
            {selKind === "attraction" && (
              <button
                onClick={() => {
                  const pr = getAsset(placedItems[selectedIdx]?.assetId)?.procedural;
                  if (pr === "rail" || pr === "train") { setRideTrain(true); }
                  else { setRideIdx(selectedIdx); }
                  setFirstPerson(false); setBuddyEye(false); setFollowCam(false);
                  sluitSelectie();
                }}
                style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}
              >
                🎠 Instappen
              </button>
            )}
            {selKind === "animal" && <button onClick={() => voerDier(selectedIdx)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: dierGevoerdVandaag(placedItems[selectedIdx]) ? "#cdeccb" : "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🌾 {dierGevoerdVandaag(placedItems[selectedIdx]) ? "Gevoerd ✓" : "Voeren"}</button>}
            {selKind === "animal" && <button onClick={() => aaiDier(selectedIdx)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🤗 Aaien</button>}
            <button onClick={verplaatsGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>↔ Verplaatsen</button>
            {selIsHuis && <button onClick={() => { setColorMode(true); setActivePart(0); }} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🎨 Kleuren</button>}
            {selIsHuis && <button onClick={verbouwHuis} title="Je huis wordt losse blokjes die je per stuk kunt weghakken of vervangen" style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#8a5a3a,#6a4228)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🧱 Maak losse blokjes</button>}
            <button onClick={weghaalGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#d9534f", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🗑 Weghalen</button>
            <button onClick={sluitSelectie} style={{ border: "none", borderRadius: 999, padding: "10px 14px", font: "700 13px system-ui", color: "#234", background: "rgba(255,255,255,0.7)", cursor: "pointer" }}>✕</button>
          </>
        ) : (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <span style={{ color: "#fff", font: "700 12px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              📈 Je park verdient 🪙{inkomstenPerDag(placedItems, kindVan)} per dag · kies iets en zet het neer · tik iets aan om te verplaatsen of weg te halen
            </span>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
              {SHOP_CATS.map((c) => (
                <button key={c.key} onClick={() => setShopCat(c.key)} style={{ border: "none", borderRadius: 999, padding: "5px 11px", font: "800 12px system-ui", color: shopCat === c.key ? "#fff" : "#234", background: shopCat === c.key ? "#2e7d32" : "rgba(255,255,255,0.9)", boxShadow: "0 2px 6px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap" }}>{c.label}</button>
              ))}
              <button onClick={() => { setBouwen(false); setPlacing(null); setSelectedIdx(null); }} style={{ border: "none", borderRadius: 999, padding: "5px 13px", font: "800 12px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 2px 6px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap" }}>✓ Klaar met bouwen</button>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", flexWrap: "wrap", maxWidth: "100%", padding: "2px 4px 4px" }}>
              {/* 🏠 Bouwpakketten: kant-en-klare gebouwtjes als startpunt —
                  daarna blokje voor blokje te verbouwen. */}
              {shopCat === "blok" && PAKKETTEN.map((pk) => (
                <button
                  key={pk.key}
                  onClick={() => startKopen({ assetId: "blokHout", price: 0, emoji: pk.emoji, label: pk.label, pakket: pk.key })}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, border: placing?.pakket === pk.key ? "3px solid #fff" : "2px solid rgba(255,255,255,0.6)", borderRadius: 12, padding: "6px 10px", background: "linear-gradient(135deg,#5a7fd6,#3a5ab0)", boxShadow: "0 2px 8px rgba(0,0,0,.25)", cursor: "pointer", transform: placing?.pakket === pk.key ? "scale(1.1)" : "none" }}
                >
                  <span style={{ fontSize: 20, lineHeight: 1, filter: "drop-shadow(0 1px 2px rgba(0,0,0,.4))" }}>{pk.emoji}</span>
                  <span style={{ font: "800 10.5px system-ui", color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,.55)", whiteSpace: "nowrap" }}>{pk.label}</span>
                </button>
              ))}
              {/* Blokken: direct zichtbare gekleurde knoppen — een dropdown was
                  hier onvindbaar (Mark 2 jul: "ik weet niet hoe ik kan bouwen"). */}
              {shopCat === "blok" && SHOP_CATS.find((c) => c.key === "blok").items.map((p) => {
                const a = getAsset(p.assetId);
                const actief = placing?.assetId === p.assetId;
                // ✨ Verdien-blok nog niet vrijgespeeld → spaar-knop naar het leren.
                if ((a?.verdienStappen || 0) > geleerdeStappen) {
                  const rest = a.verdienStappen - geleerdeStappen;
                  return (
                    <button key={p.assetId} onClick={() => { if (onOpenLeerpaden) onOpenLeerpaden(); }} title={`Speel het ${p.label.toLowerCase()} vrij door te leren`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, border: "2px dashed #c9b06a", borderRadius: 12, padding: "6px 8px", background: "rgba(255,255,255,0.55)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>
                      <span style={{ fontSize: 20, lineHeight: 1 }}>🔒</span>
                      <span style={{ font: "800 10px system-ui", color: "#8a7a4a", whiteSpace: "nowrap" }}>{p.emoji} nog {rest} st.</span>
                    </button>
                  );
                }
                const opZak = rugzak[p.assetId] || 0;
                return (
                  <button
                    key={p.assetId}
                    onClick={() => startKopen(p)}
                    disabled={coins < p.price}
                    title={`${p.label}${opZak > 0 ? ` — ${opZak} in je rugzak` : ""}`}
                    style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, border: actief ? "3px solid #fff" : "2px solid rgba(255,255,255,0.5)", borderRadius: 12, padding: "6px 8px", background: coins < p.price ? "rgba(120,120,120,0.5)" : (a?.blokKleur || "#a97e4e"), boxShadow: actief ? "0 0 0 3px #2e7d32, 0 3px 10px rgba(0,0,0,.3)" : "0 2px 8px rgba(0,0,0,.25)", cursor: coins < p.price ? "not-allowed" : "pointer", transform: actief ? "scale(1.1)" : "none" }}
                  >
                    {opZak > 0 && <span style={{ position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, padding: "0 4px", borderRadius: 999, background: "#fff", color: "#234", font: "800 10.5px/18px system-ui", boxShadow: "0 1px 4px rgba(0,0,0,.3)" }}>🎒{opZak > 99 ? "99+" : opZak}</span>}
                    <span style={{ fontSize: 20, lineHeight: 1, filter: "drop-shadow(0 1px 2px rgba(0,0,0,.4))" }}>{p.emoji}</span>
                    <span style={{ font: "800 10.5px system-ui", color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,.55)", whiteSpace: "nowrap" }}>{p.label.replace("blok", "").replace("Blok", "").trim() || p.label}{p.price > 0 ? ` ${p.price}🪙` : ""}</span>
                  </button>
                );
              })}
              {/* Overige tabs: compacte dropdown (Mark 1 jul: rustiger scherm). */}
              {shopCat !== "blok" && (() => {
                const items = SHOP_CATS.find((c) => c.key === shopCat)?.items || [];
                return (
                  <select
                    value=""
                    onChange={(e) => { const it = items.find((i) => i.assetId === e.target.value); if (it) startKopen(it); e.currentTarget.value = ""; }}
                    aria-label="Kies iets om te plaatsen"
                    style={{ maxWidth: 280, border: "none", borderRadius: 12, padding: "11px 12px", font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.96)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}
                  >
                    <option value="" disabled>➕ Kies iets om te plaatsen…</option>
                    {items.map((p) => (
                      <option key={p.assetId} value={p.assetId} disabled={coins < p.price}>
                        {p.emoji} {p.label} — {p.price} 🪙{coins < p.price ? "  (te duur)" : ""}
                      </option>
                    ))}
                  </select>
                );
              })()}
              {/* Vrijspeel-dieren (alleen in Dieren-tab): te verdienen door te leren,
                  niet te koop. Vergrendeld → tik = naar het leerpad (loop terug). */}
              {/* Vrijspeel-dieren (Dieren-tab): vrijgespeelde tonen we als gouden
                  kaart; van de grote dino's tonen we alléén de eerstvolgende te
                  verdienen dino (geen muur van sloten) + het spaarvarken. */}
              {shopCat === "dier" && VRIJSPEEL_DIEREN.filter((v) => {
                if (unlockedDieren.includes(v.assetId)) return true;
                if (typeof v.stappen === "number") {
                  // alleen de laagste nog-niet-verdiende mijlpaal-dino
                  return DINO_MIJLPALEN.find((d) => !unlockedDieren.includes(d.assetId))?.assetId === v.assetId;
                }
                return true; // spaarvarken (pad) als nog niet vrij
              }).map((v) => {
                const isUnlocked = unlockedDieren.includes(v.assetId);
                const alGeplaatst = placedItems.some((it) => it.assetId === v.assetId);
                if (isUnlocked) {
                  return (
                    <button key={v.assetId} disabled={alGeplaatst} onClick={() => { if (!alGeplaatst) startKopen({ assetId: v.assetId, price: 0, emoji: v.emoji, label: v.naam }); }} title={alGeplaatst ? "Staat al in je park" : `${v.naam} plaatsen`} style={{ flex: "0 0 auto", border: "2px solid #f6c84c", borderRadius: 14, padding: "8px 12px", font: "800 13px system-ui", color: "#7a5b00", background: alGeplaatst ? "rgba(246,200,76,0.25)" : "rgba(255,247,224,0.98)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: alGeplaatst ? "default" : "pointer", whiteSpace: "nowrap", textAlign: "center", opacity: alGeplaatst ? 0.7 : 1 }}>
                      <span style={{ fontSize: 18 }}>{v.emoji}</span> {v.naam}<br />
                      <span style={{ fontSize: 11, opacity: 0.85 }}>{alGeplaatst ? "✓ in je park" : "vrijgespeeld ✨"}</span>
                    </button>
                  );
                }
                const isMijlpaal = typeof v.stappen === "number";
                const rest = isMijlpaal ? Math.max(0, v.stappen - geleerdeStappen) : 0;
                const sub = isMijlpaal
                  ? (rest === 0 ? "bijna vrij — speel verder ✨" : `nog ${rest} leer-stap${rest === 1 ? "" : "pen"} ✨`)
                  : "leer sparen → speel vrij";
                return (
                  <button key={v.assetId} onClick={() => { try { track("zoo_unlock_klik", { dier: v.assetId, pad: v.pad, stappen: v.stappen }); } catch { /* */ } if (v.pad && onOpenLeerpad) onOpenLeerpad(v.pad); else if (onOpenLeerpaden) onOpenLeerpaden(); else if (onOpenLeerpad) onOpenLeerpad(v.pad); }} title={`Speel ${v.naam} vrij door te leren`} style={{ flex: "0 0 auto", border: "2px dashed #c9b06a", borderRadius: 14, padding: "8px 12px", font: "800 13px system-ui", color: "#8a7a4a", background: "rgba(255,255,255,0.55)", boxShadow: "0 3px 10px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap", textAlign: "center" }}>
                    <span style={{ fontSize: 18 }}>🔒</span> {v.naam}<br />
                    <span style={{ fontSize: 10, opacity: 0.9 }}>{sub}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      )}

      {/* Praatje met een bezoeker → leidt terug naar leren ("ga oefenen"). */}
      {dialoog && (
        <div onClick={() => setDialoog(null)} style={{ position: "absolute", inset: 0, zIndex: 22, background: "rgba(10,20,10,0.5)", display: "grid", placeItems: "end center", padding: "0 14px calc(20px + env(safe-area-inset-bottom))" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(440px, 96vw)", background: "#fffef8", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "16px 18px", marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ fontSize: 34, lineHeight: 1, flex: "0 0 auto" }}>🧑</div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: "2px 0 0", font: "700 15.5px/1.45 system-ui", color: "#234" }}>
                  {dialoog.step === 0
                    ? `${naam ? "Hoi " + naam + "! " : "Hoi! "}Hoe gaat het met ${String(praatVak).toLowerCase()}?`
                    : dialoog.reply === "lastig"
                      ? "Niet erg — samen oefenen maakt het zo makkelijker. Zullen we?"
                      : "Knap! Nog even oefenen om het goed vast te houden?"}
                </p>
              </div>
              <button onClick={() => setDialoog(null)} style={{ border: "none", borderRadius: 999, width: 30, height: 30, font: "700 15px system-ui", background: "#eee", cursor: "pointer", flex: "0 0 auto" }}>✕</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14, justifyContent: "flex-end" }}>
              {dialoog.step === 0 ? (
                <>
                  <button onClick={() => setDialoog({ step: 1, reply: "goed" })} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: "#234", background: "#e7f3e2", boxShadow: "0 2px 6px rgba(0,0,0,.12)", cursor: "pointer" }}>Goed! 😄</button>
                  <button onClick={() => setDialoog({ step: 1, reply: "lastig" })} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: "#234", background: "#fdeede", boxShadow: "0 2px 6px rgba(0,0,0,.12)", cursor: "pointer" }}>Best lastig 😅</button>
                </>
              ) : (
                <>
                  <button onClick={() => setDialoog(null)} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>Misschien later</button>
                  <button onClick={gaOefenen} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>
                    ▶ {oefenPad?.title ? `Oefen: ${oefenPad.title}` : "Ga oefenen"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reken-vraag bij de kraam → echte winst-/prijs-som + muntjesbonus. */}
      {rekenVraag && (
        <div onClick={() => setRekenVraag(null)} style={{ position: "absolute", inset: 0, zIndex: 23, background: "rgba(10,20,10,0.5)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(440px, 96vw)", background: "#fffef8", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 18px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ font: "800 16px system-ui", color: "#234" }}>🧮 Reken-vraag</div>
              <button onClick={() => setRekenVraag(null)} style={{ border: "none", borderRadius: 999, width: 30, height: 30, font: "700 15px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ margin: "0 0 14px", font: "700 15.5px/1.5 system-ui", color: "#234" }}>{rekenVraag.vraag}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {rekenVraag.opties.map((opt) => {
                const goedGekozen = rekenUitslag === "goed" && opt === rekenVraag.antwoord;
                return (
                  <button
                    key={opt}
                    onClick={() => beantwoordReken(opt)}
                    disabled={rekenUitslag === "goed"}
                    style={{ flex: "1 1 28%", border: "none", borderRadius: 14, padding: "14px 8px", font: "900 18px system-ui", color: goedGekozen ? "#fff" : "#234", background: goedGekozen ? "#2e9e4f" : "rgba(0,0,0,0.05)", boxShadow: "0 2px 6px rgba(0,0,0,.12)", cursor: rekenUitslag === "goed" ? "default" : "pointer" }}
                  >
                    {opt} 🪙
                  </button>
                );
              })}
            </div>
            {rekenUitslag === "fout" && (
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
                <p style={{ margin: 0, font: "800 13.5px system-ui", color: "#c0392b", textAlign: "center" }}>Bijna! Probeer nog een keer 💪</p>
                {/* Je parkmaatje denkt mee (Mark 2 jul): zelfde buddy-tutor als in
                    de leerpaden — hints, nooit het antwoord. */}
                <button
                  onClick={() => setRekenHulpOpen(true)}
                  style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 13.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#3a6ad8,#2546b0)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}
                >
                  {BUDDY_BY_ID[buddyId]?.emoji || "🐾"} Vraag hulp aan {buddyNaamEff || "je maatje"}
                </button>
              </div>
            )}
            {rekenUitslag === "goed" && (
              <div style={{ marginTop: 12 }}>
                <p style={{ margin: "0 0 6px", font: "800 14px system-ui", color: "#1f7a3a", textAlign: "center" }}>Goed gerekend! {rekenBonusRef.current <= REKEN_BONUS_CAP ? `+${REKEN_BONUS} 🪙` : ""} 🎉</p>
                {/* Park→leren-brug (Titan 2026-06-29): koppel leren aan de munt-economie
                    die het kind al motiveert. Leren 15 min geeft echt extra munten
                    (kwartier_reached → zooEconomy). Zo voedt het park het leren i.p.v.
                    het op te eten — park_naar_leren was 2 vs 17 goede rekenvragen. */}
                <p style={{ margin: "0 0 10px", font: "600 12.5px/1.45 system-ui", color: "#5a6b50", textAlign: "center" }}>💡 Goed in rekenen? Verdien <b>véél meer 🪙 munten</b> met een echt leerkwartier — <b>leren = munten voor je park!</b></p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                  <button onClick={openRekenVraag} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 13px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>🔁 Nog een vraag</button>
                  <button onClick={() => { try { track("park_rekenvraag_naar_leren"); } catch {} setRekenVraag(null); gaOefenen(); }} style={{ border: "none", borderRadius: 999, padding: "11px 20px", font: "900 14.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 3px 12px rgba(46,158,79,.4)", cursor: "pointer" }}>▶ Verdien 🪙 — start een leerkwartier</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 🐾 Maatje-hulp bij de reken-vraag: zelfde Socratische tutor als in de
          leerpaden (hints in stapjes, nooit het antwoord), met de stem en het
          gezicht van je eigen parkmaatje. */}
      {rekenHulpOpen && rekenVraag && (
        <Suspense fallback={null}>
          <AITutor
            open
            onClose={() => setRekenHulpOpen(false)}
            pathTitle="Rekenen in je park"
            pathId="park-rekenvraag"
            stepTitle="Reken-vraag bij je kraampje"
            stepIdx={rekenVraagNr.current}
            stepExplanation={`De leerling runt een kraampje in een dierentuin-spel en krijgt een reken-vraag over kopen en verkopen. Handige begrippen: winst per stuk = verkoopprijs min inkoopprijs; totale winst = aantal keer winst per stuk; omzet = aantal keer verkoopprijs. Help stap voor stap, in taal voor een kind van ~10.`}
            currentCheck={{ q: rekenVraag.vraag, options: rekenVraag.opties.map((o) => `${o} muntjes`) }}
            lastWrongAnswer={rekenFout != null ? `${rekenFout} muntjes` : undefined}
          />
        </Suspense>
      )}

      {/* Overlays: uitleg + diergids. */}
      {(panel === "uitleg" || panel === "gids") && (
        <div
          onClick={() => setPanel(null)}
          style={{ position: "absolute", inset: 0, zIndex: 20, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(560px, 96vw)", maxHeight: "86vh", overflowY: "auto", background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 20px" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <h2 style={{ margin: 0, font: "800 20px system-ui", color: "#234" }}>
                {panel === "uitleg" ? "ℹ️ Hoe werkt je park?" : "📖 Diergids"}
              </h2>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, width: 34, height: 34, font: "700 16px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>

            {panel === "uitleg" ? (
              <div style={{ font: "500 14.5px/1.5 system-ui", color: "#333" }}>
                <p style={{ marginTop: 0 }}>In <b>{parkNaam}</b> verzamel je dieren en laat je je eigen dierentuin groeien.</p>
                <p><b>🪙 Muntjes verdien je zo:</b></p>
                <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
                  <li>Elke dag <b>inloggen</b> (+5, met streak-bonus 🔥 die oploopt).</li>
                  <li>Elke dag je <b>kwartier leren</b> afronden (+8).</li>
                  <li>Je <b>park zelf</b> levert muntjes op: hoe meer verblijven en jonkies, hoe meer per dag.</li>
                  <li><b>Kraampjes</b> 🍟🥤🍦🍿: bezoekers krijgen honger, dorst of zin in iets lekkers. Zet een <b>patat-</b>, <b>drank-</b>, <b>ijsco-</b> of <b>popcornkraam</b> neer en kies de prijs — elke verkoop levert muntjes op. Bezoekers verlangen naar wat jij aanbiedt; te duur? Dan haken ze af, dus zoek de juiste prijs!</li>
                </ul>
                <p><b>🦊 Dieren:</b> koop een dier — het <b>loopt vrij rond</b> in je park. Tik een dier aan om het te <b>verplaatsen</b> of <b>weg te halen</b> (je krijgt de muntjes terug).</p>
                <p><b>🚧 Hekken:</b> wil je een dier insluiten? Koop <b>losse hekpanelen</b> en zet ze aan elkaar — in een vierkant, T- of L-vorm, wat je wilt. Elk paneel kun je los weghalen of er een gelijke bij kopen. Een <b>hek-poort</b> maakt een nette ingang.</p>
                <p><b>🐣 Jonkies:</b> dieren kunnen er met de tijd een jonkie bij krijgen — dat levert extra muntjes op.</p>
                <p><b>🕹️ Rondkijken:</b> sleep om te draaien, scroll of knijp om in/uit te zoomen.</p>
                <p style={{ color: "#777", fontSize: 12.5 }}>Het park is nog volop in opbouw 🚧 — er komt steeds meer bij (attracties, paden en meer).</p>
                <p><b>⛰️ Bergen & dalen:</b> tik op de <b>⛰️-knop</b> bovenin, kies <b>omhoog</b> of <b>omlaag</b> en tik dan op de grond om heuvels te maken of kuilen te graven.</p>
                <p><b>💧 Water:</b> tik op de <b>💧-knop</b> en zet een waterbron neer — het water stroomt vanzelf naar beneden en vult dalen.</p>
                <p><b>♻️ Opnieuw beginnen:</b> met de <b>♻️-knop</b> bovenin zet je je park terug naar het begin.</p>
              </div>
            ) : (
              <div>
                <p style={{ font: "500 13.5px system-ui", color: "#555", marginTop: 0 }}>Alles wat je kunt kopen. Dieren lopen vrij rond; met losse hekpanelen bouw je zelf een kooi.</p>
                {[{ titel: "🦊 Dieren", lijst: DIEREN_SHOP }, { titel: "🚧 Hekken", lijst: HEK_SHOP }, { titel: "🏠 Gebouwen & kraampjes", lijst: BOUW_SHOP }, { titel: "🎠 Attracties", lijst: ATTRACTIE_SHOP }, { titel: "🌳 Natuur & bouwen", lijst: NATUUR_SHOP }].map((sec) => (
                  <div key={sec.titel} style={{ marginBottom: 12 }}>
                    <div style={{ font: "800 14px system-ui", color: "#234", margin: "4px 0 6px" }}>{sec.titel}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8 }}>
                      {sec.lijst.map((p) => (
                        <div key={p.assetId} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "#f5f3ea", borderRadius: 12 }}>
                          <span style={{ fontSize: 24 }}>{p.emoji}</span>
                          <div style={{ lineHeight: 1.2 }}>
                            <div style={{ font: "800 13.5px system-ui", color: "#234" }}>{p.label}</div>
                            <div style={{ font: "600 12px system-ui", color: "#7a5b00" }}>{p.price} 🪙</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <p style={{ color: "#777", fontSize: 12.5, marginBottom: 0 }}>🚧 Binnenkort: nog meer attracties en paden.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Deel-modal: link om je park te laten bekijken (alleen kijken). */}
      {panel === "delen" && (
        <div onClick={() => setPanel(null)} style={{ position: "absolute", inset: 0, zIndex: 20, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(460px, 96vw)", background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <h2 style={{ margin: 0, font: "800 20px system-ui", color: "#234" }}>📤 Deel je park</h2>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, width: 34, height: 34, font: "700 16px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>
            {!userId ? (
              <p style={{ font: "500 14.5px/1.5 system-ui", color: "#555", marginTop: 0 }}>Log eerst in om je eigen park te kunnen delen.</p>
            ) : !shareUrl ? (
              <p style={{ font: "500 14.5px/1.5 system-ui", color: "#555", marginTop: 0 }}>Link maken…</p>
            ) : (
              <div style={{ font: "500 14.5px/1.5 system-ui", color: "#333" }}>
                <p style={{ marginTop: 0 }}>Stuur deze link naar een vriend. Wie 'm opent, mag jouw park <b>bekijken en erin rondlopen</b> — maar niets veranderen. 🔒</p>
                <div style={{ display: "flex", gap: 6, alignItems: "center", background: "#f0eee4", borderRadius: 10, padding: "8px 10px", margin: "10px 0" }}>
                  <input readOnly value={shareUrl} onFocus={(e) => e.target.select()} style={{ flex: 1, border: "none", background: "transparent", font: "600 13px system-ui", color: "#234", outline: "none", minWidth: 0 }} />
                  <button onClick={kopieerLink} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "7px 12px", font: "800 12.5px system-ui", color: "#fff", background: shareCopied ? "#2e7d32" : "#4a90d9", cursor: "pointer" }}>{shareCopied ? "Gekopieerd ✓" : "Kopieer"}</button>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", textDecoration: "none", border: "none", borderRadius: 999, padding: "11px 14px", font: "800 14.5px system-ui", color: "#fff", background: "#25d366", boxShadow: "0 3px 10px rgba(0,0,0,.18)" }}>💬 Deel via WhatsApp</a>
                <p style={{ color: "#777", fontSize: 12, marginBottom: 0, marginTop: 12 }}>De link toont geen naam en niemand kan je park veranderen. Wil je 'm niet meer delen? Vraag het me dan — we kunnen een nieuwe link maken.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Karakter-kiezer: kies je eigen poppetje (jongens/meisjes). */}
      {panel === "karakter" && (
        <div onClick={() => setPanel(null)} style={{ position: "absolute", inset: 0, zIndex: 20, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(460px, 96vw)", background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <h2 style={{ margin: 0, font: "800 20px system-ui", color: "#234" }}>👤 Kies je poppetje</h2>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, width: 34, height: 34, font: "700 16px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ font: "500 13.5px system-ui", color: "#555", marginTop: 0 }}>Dit is het poppetje waarmee jij door je park loopt.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 8 }}>
              {CHARACTERS.map((c) => (
                <button key={c.id} onClick={() => kiesAvatar(c.id)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 12, border: avatarId === c.id ? "3px solid #2e7d32" : "2px solid #e7e3d6", background: avatarId === c.id ? "#eaf6e8" : "#f5f3ea", cursor: "pointer", font: "800 13px system-ui", color: "#234" }}>
                  <span style={{ fontSize: 24 }}>{c.emoji}</span>{c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reset-modal: park terug naar het standaard begin-park (met bevestiging). */}
      {panel === "autobouw" && (
        <div onClick={() => setPanel(null)} style={{ position: "absolute", inset: 0, zIndex: 20, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(420px, 96vw)", background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <h2 style={{ margin: 0, font: "800 20px system-ui", color: "#234" }}>🏗️ Auto-bouw</h2>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, width: 34, height: 34, font: "700 16px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ font: "500 14px/1.5 system-ui", color: "#333", marginTop: 0 }}>Zet muntjes in en het park bouwt zelf nette verblijven — een <b>hek met een poort</b>, een <b>huisje</b> en een <b>dier</b>. Hoe meer muntjes, hoe meer verblijven.</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", font: "800 15px system-ui", color: "#234", marginBottom: 4 }}>
              <span>Inzet</span>
              <span style={{ color: "#5b3d00", background: "#ffe08a", padding: "4px 12px", borderRadius: 999 }}>🪙 {autoBudget}</span>
            </div>
            <input type="range" min={0} max={coins} step={5} value={autoBudget} onChange={(e) => setAutoBudget(parseInt(e.target.value, 10) || 0)} style={{ width: "100%", accentColor: "#2e7d32" }} />
            <div style={{ display: "flex", justifyContent: "space-between", font: "600 11px system-ui", color: "#777", marginTop: 2 }}>
              <span>0</span><span>je hebt 🪙 {coins}</span>
            </div>
            <p style={{ font: "600 12px/1.4 system-ui", color: "#777", margin: "8px 0 0" }}>≈ {Math.max(0, Math.floor(autoBudget / 157))} compleet verblijf{Math.floor(autoBudget / 157) === 1 ? "" : "en"} (huis + hek + dier). Ongebruikte muntjes blijven van jou.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 14 }}>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "#eee", cursor: "pointer" }}>Annuleer</button>
              <button onClick={() => autoBouw(autoBudget)} disabled={autoBudget < 1} style={{ border: "none", borderRadius: 999, padding: "10px 20px", font: "800 14px system-ui", color: "#fff", background: autoBudget < 1 ? "#9bbf9b" : "linear-gradient(135deg,#00C853,#00a846)", boxShadow: "0 3px 10px rgba(0,0,0,.2)", cursor: autoBudget < 1 ? "default" : "pointer" }}>🏗️ Bouw!</button>
            </div>
          </div>
        </div>
      )}
      {panel === "reset" && (
        <div onClick={() => setPanel(null)} style={{ position: "absolute", inset: 0, zIndex: 20, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(420px, 96vw)", background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <h2 style={{ margin: 0, font: "800 20px system-ui", color: "#234" }}>♻️ Park resetten</h2>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, width: 34, height: 34, font: "700 16px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>
            <p style={{ font: "500 14.5px/1.5 system-ui", color: "#333", marginTop: 0 }}>Weet je het zeker? Je hele park gaat terug naar het <b>begin-park</b> (poort, pad, een dier en een huis). Je <b>muntjes blijven</b>.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "#eee", cursor: "pointer" }}>Annuleer</button>
              <button onClick={resetPark} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#d9534f", boxShadow: "0 3px 10px rgba(0,0,0,.2)", cursor: "pointer" }}>Ja, reset mijn park</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
