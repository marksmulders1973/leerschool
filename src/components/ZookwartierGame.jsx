// ZookwartierGame — pagina-wrapper voor "Mijn Park" (3D verzamel-dierentuin).
// Vast mini-park (paden/draaimolen/poppetje/verblijven) + zelf dieren plaatsen
// (kost muntjes), verplaatsen, of weghalen (muntjes terug). Indeling + muntjes
// bewaard in Supabase. Muntjes verdien je met dagelijks inloggen + kwartier leren.
//
// De zware three.js-scene laadt lazy, zodat de leer-app snel blijft.
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import DiplomaKast from "../shared/ui/DiplomaKast.jsx";
import { getDailyGoal } from "../shared/dailyGoal";
import { loadZooState, saveZooState, defaultState, STARTER_LAYOUT, getShareCode, saneerLayout } from "../features/zoo/zooState";
import { meldParkAan } from "../data/repos/galerijRepo";
import { applyDailyLogin, applyKwartierReward, inkomstenPerDag, groeiBabies, verwaarloosCheck, dagenVerschil, vandaag, BABY_BONUS, MAX_DAGEN_INKOMST, loonkostenPerDag, VERKOPER_LOON, VERKOPER_LOON_EURO, KWARTIER_REWARD, PARK_INKOMST_CAP_PER_DAG } from "../features/zoo/zooEconomy";
import { PLAATSBARE_DIEREN, PLAATSBARE_BOUWWERKEN, PLAATSBARE_ATTRACTIES, PLAATSBARE_LEERPLEIN, PLAATSBARE_HEKKEN, PLAATSBARE_NATUUR, PLAATSBARE_BLOKKEN, isBlok, getAsset, cellsVan, isManipuleerbaar, maatConfig, KRAAM_SOORTEN, KRAAM_KEYS, KRAAM_PRODUCTEN, CHARACTERS, CHARACTER_BY_ID, DEFAULT_AVATAR } from "../features/zoo/AssetRegistry";
import { HALF, CELL, KUB, footprint, cellKey, cellToWorld } from "../features/zoo/grid";
import { serialize as serTerrain, deserialize as deserTerrain } from "../features/zoo/terrain";
import { computeWater, bronRaaktCel } from "../features/zoo/water";
import { GROUND_TYPES } from "../features/zoo/ground";
import { track } from "../utils.js";
import { loadMasteryForPlayer, recommendNextTopic } from "../features/mastery/mastery.js";
import Loonstrook, { InkoopBon } from "./EconomieUitleg";
import { splitsBtw, btwTarief } from "../features/zoo/btw";
import { nieuweVrijspeelDieren, VRIJSPEEL_DIEREN, vrijspeelDier, DINO_MIJLPALEN, telPadStappen, gedanePaden } from "../features/zoo/unlocks";
import { berekenParkTaken } from "../features/zoo/parkTaken";
import { haalLeerKandidaten, leerZinVoor } from "../features/zoo/volgendeLeerstap";
import BuddyPicker from "../features/zoo/BuddyPicker";
import BuddyChat from "../features/zoo/BuddyChat";
import { gekozenBuddy, heeftGekozen, telGeleerdeStappen, buddyNaam as buddyNaamVan, BUDDY_BY_ID, volgendeBuddyVraag, beantwoordBuddyVraag, stelBuddyVraagUit, wisBuddyWeetjes } from "../features/zoo/buddies";
import { TAFEREEL_BY_ID } from "../features/zoo/uitvindersData";
import { PARK_LEERMOMENTEN, LEERMOMENT_BY_ASSET, POORT_ASSETS, niveauLabelVoorLeerpad, hierContextVoor } from "../features/zoo/parkLeermomenten";
import { VULKAAN } from "../features/zoo/eilandVorm";
// spawn-plek voor ?scene=vulkaan: 30 m vóór de voet (je ziet de hele berg), op de lijn parkmidden → vulkaan
const VULKAAN_SPAWN = (() => { const d = Math.hypot(VULKAAN.x, VULKAAN.z), r = VULKAAN.R + 30; return [VULKAAN.x - (VULKAAN.x / d) * r, 0, VULKAAN.z - (VULKAAN.z / d) * r]; })();
// camera-yaw die vanaf die plek naar de vulkaan kijkt (de camera staat aan de
// yaw-kant van het poppetje: yaw π = camera op +z, kijkt naar -z)
const VULKAAN_KIJK_YAW = Math.atan2(VULKAAN.x, VULKAAN.z);
import { WANDEL_ROUTES, ROUTE_BY_ID, leesWandeling, startWandeling, volgendeStop, stopWandeling, stopsVan, kiesStopsVoorPark, herstelWandeling } from "../features/zoo/wandelRoutes";
import { LINT_BANDEN } from "../features/zoo/leerpadLint";
import { WANDEL_REWARD } from "../features/zoo/zooEconomy";
import { spreek, stopSpreken, gidsIsStil, zetGidsStil } from "../features/zoo/parkGids";
import { parkAudioStart, parkAudioStil, parkAudioStop } from "../features/zoo/parkAudio";
import BuddyKop from "../features/zoo/BuddyKop";
import ParkErrorBoundary from "../features/zoo/ParkErrorBoundary";
import { useGLTF } from "@react-three/drei";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));
// Maatje-hulp bij de reken-vragen (zelfde tutor als in de leerpaden — het
// maatje dat in het park rondloopt, denkt óók mee). Lazy: laadt pas bij gebruik.
const AITutor = lazy(() => import("../features/learn/AITutor.jsx"));
const PiramideInhoud = lazy(() => import("./learn/PiramideInhoud.jsx"));
const KubusInhoud = lazy(() => import("./learn/KubusInhoud.jsx"));
const KegelInhoud = lazy(() => import("./learn/KegelInhoud.jsx"));
const BolInhoud = lazy(() => import("./learn/BolInhoud.jsx"));

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
  // Vangnet: bij een klein antwoord (bv. 1 of 2) verwierp de lus bijna alle
  // kandidaten (≤0) → soms maar 2 opties = 50/50 gokken i.p.v. 3 keuzes. Vul
  // altijd aan tot 3 met positieve, unieke waarden. (bug-jacht 2026-07-31)
  let extra = 1;
  while (set.size < 3) { const cand = antwoord + extra; if (cand > 0) set.add(cand); extra++; }
  const opties = [...set].sort(() => Math.random() - 0.5);
  return { vraag, antwoord, opties, emoji: kraam?.emoji || "🧮" };
}

// 🧮 Reken-vraag bij een 3D-leer-vorm (piramide/kubus/bol/kegel/koepel), met de
// HUIDIGE maat van de vorm. Kern = het schaal-inzicht (Mark 17 aug, "leren >
// leuk"): maak je 'm 2× zo groot, dan past er 8× zoveel in (niet 2×!). Dat werkt
// voor élke vorm — inhoud = lengte × breedte × hoogte, dus ×k → ×k³. Dat kun je
// alleen in een interactief park écht voelen; op papier blijft het abstract.
const VORM_WOORD = { piramide: "piramide", kubus: "kubus", kegel: "kegel", cilinder: "cilinder", bol: "bol", halvebol: "koepel" };
function maakVormVraag(assetId, maat) {
  const woord = VORM_WOORD[assetId] || "vorm";
  // Clamp per vorm (de piramide loopt 4..11, de rest 2..6 — zie AssetRegistry).
  const isPyr = assetId === "piramide";
  const m = Math.max(isPyr ? 4 : 2, Math.min(isPyr ? 11 : 6, Math.round(maat || (isPyr ? 8 : 3))));
  const rond = Math.round;
  // 3 opties = goed antwoord + 2 STRUCTUURfouten (⅓ vergeten, r² i.p.v. r³,
  // hele i.p.v. halve bol) — géén dichtbij-rekenfoutjes, zodat schatten met
  // π ≈ 3 je bij het goede antwoord brengt. Afleiders uniek gefilterd (bug-les
  // 18 aug: bij ribbe 2 viel een afleider samen met het antwoord) + vangnet.
  const optiesVan = (antwoord, fouten) => {
    const extra = [...new Set(fouten.map(rond).filter((c) => c > 0 && c !== antwoord))].slice(0, 2);
    const stap = Math.max(3, rond(antwoord * 0.5));
    while (extra.length < 2) { const c = antwoord + (extra.length + 1) * stap; if (!extra.includes(c)) extra.push(c); }
    return [antwoord, ...extra].sort(() => Math.random() - 0.5);
  };

  // ── Type A (helft van de keren): reken de ÉCHTE inhoud, met de maten die nu
  // bij de vorm staan. De formule staat in de vraag — het gaat om TOEPASSEN,
  // niet om uit je hoofd kennen (Mark 17 aug: tonen → schaal-inzicht → echt
  // uitrekenen als ladder).
  if (Math.random() < 0.5) {
    if (assetId === "kubus") {
      const antwoord = m * m * m;
      return {
        vraag: `Deze kubus heeft een ribbe van ${m} m. Hoeveel blokjes van 1 m³ passen erin?`,
        antwoord, opties: optiesVan(antwoord, [m * m, m * m * 2, m * m * m - m]), eenheid: "m³", emoji: "🧊", vorm: true,
        onthulling: `Reken laag voor laag: ${m} × ${m} = ${m * m} blokjes in één laag, en ${m} lagen → ${m * m} × ${m} = ${antwoord} blokjes.`,
      };
    }
    if (isPyr) {
      const antwoord = rond((m * m * m) / 3);
      return {
        vraag: `Deze piramide heeft zijde ${m} m en hoogte ${m} m. Inhoud = ⅓ × grondvlak × hoogte. Hoeveel m³ is dat ongeveer?`,
        antwoord, opties: optiesVan(antwoord, [m * m * m, m * m]), eenheid: "m³", emoji: "🔺", vorm: true,
        onthulling: `Grondvlak = ${m} × ${m} = ${m * m} m². Keer de hoogte: ${m * m} × ${m} = ${m * m * m}. En dan ⅓ ervan: ${m * m * m} ÷ 3 ≈ ${antwoord} m³. Een piramide is precies een derde van een blok met dezelfde bodem en hoogte!`,
      };
    }
    if (assetId === "bol") {
      const antwoord = rond((4 / 3) * Math.PI * m * m * m);
      return {
        vraag: `Deze bol heeft straal ${m} m (de rode lijn). Inhoud = 4/3 × π × r³, en π ≈ 3. Hoeveel m³ is dat ongeveer?`,
        antwoord, opties: optiesVan(antwoord, [Math.PI * m * m * m, (4 / 3) * Math.PI * m * m]), eenheid: "m³", emoji: "🔮", vorm: true,
        onthulling: `r³ = ${m} × ${m} × ${m} = ${m * m * m}. Schat met π ≈ 3: 4/3 × 3 × ${m * m * m} = ${4 * m * m * m}. Precies is het ${antwoord} m³ — schatten bracht je er dus al bijna!`,
      };
    }
    if (assetId === "cilinder") {
      const h = 2 * m;
      const antwoord = rond(Math.PI * m * m * h);
      return {
        vraag: `Deze cilinder heeft straal ${m} m (rood) en hoogte ${h} m (blauw). Inhoud = π × r² × h, en π ≈ 3. Hoeveel m³ ongeveer?`,
        antwoord, opties: optiesVan(antwoord, [(1 / 3) * Math.PI * m * m * h, Math.PI * m * h, 2 * Math.PI * m * m * h]), eenheid: "m³", emoji: "🛢️", vorm: true,
        onthulling: `r² = ${m} × ${m} = ${m * m}. Schat met π ≈ 3: 3 × ${m * m} × ${h} = ${3 * m * m * h}. Precies: ${antwoord} m³. En onthoud: een kegel met dezelfde bodem en hoogte is hier precies een DERDE van!`,
      };
    }
    if (assetId === "kegel") {
      const h = 2 * m;
      const antwoord = rond((1 / 3) * Math.PI * m * m * h);
      return {
        vraag: `Deze kegel heeft straal ${m} m (rood) en hoogte ${h} m (blauw). Inhoud = ⅓ × π × r² × h, en π ≈ 3. Hoeveel m³ ongeveer?`,
        antwoord, opties: optiesVan(antwoord, [Math.PI * m * m * h, (1 / 3) * Math.PI * m * h]), eenheid: "m³", emoji: "🔻", vorm: true,
        onthulling: `r² = ${m} × ${m} = ${m * m}. Schat met π ≈ 3: ⅓ × 3 × ${m * m} × ${h} = ${m * m * h}. Precies: ${antwoord} m³. Vergeet de ⅓ niet — een kegel is precies een derde van een blikje (cilinder) met dezelfde bodem en hoogte!`,
      };
    }
    if (assetId === "halvebol") {
      const antwoord = rond((2 / 3) * Math.PI * m * m * m);
      return {
        vraag: `Deze koepel is een HALVE bol met straal ${m} m. Inhoud = ⅔ × π × r³, en π ≈ 3. Hoeveel m³ ongeveer?`,
        antwoord, opties: optiesVan(antwoord, [(4 / 3) * Math.PI * m * m * m, (2 / 3) * Math.PI * m * m]), eenheid: "m³", emoji: "🥅", vorm: true,
        onthulling: `Schat met π ≈ 3: ⅔ × 3 × ${m * m * m} = ${2 * m * m * m} m³ (precies ${antwoord}). Let op de ⅔: een héle bol is 4/3, een halve dus de helft daarvan — ⅔!`,
      };
    }
  }

  // ── Type B: universeel schaal-inzicht (geen π nodig): elke maat ×k → inhoud
  // ×k³. De afleiders k (lineair) en k² (oppervlakte) zijn precies de klassieke
  // denkfouten — kiezen tussen 2/4/8 maakt het inzicht scherp.
  const k = 2 + Math.floor(Math.random() * 2);   // 2 of 3
  const antwoord = k * k * k;                     // 8 of 27
  const opties = [k, k * k, k * k * k].sort(() => Math.random() - 0.5);
  return {
    vraag: `Je maakt deze ${woord} ${k}× zo groot (elke maat keer ${k}). Hoeveel KEER zoveel past er dan in?`,
    antwoord, opties, eenheid: "×", emoji: "📐", vorm: true,
    onthulling: `Elke maat wordt ${k}× zo lang, maar inhoud = lengte × breedte × hoogte. Dus ${k} × ${k} × ${k} = ${antwoord}× zoveel! Zo groeit de inhoud veel sneller dan de lengte.`,
  };
}

// Winkel: alles plaatsbaar, opgebouwd uit de AssetRegistry, per categorie.
const mkItem = (id) => { const a = getAsset(id); return { assetId: id, emoji: a.emoji, label: a.name, price: a.price, kind: a.kind }; };
const DIEREN_SHOP = PLAATSBARE_DIEREN.map(mkItem);
const BOUW_SHOP = PLAATSBARE_BOUWWERKEN.map(mkItem);
const ATTRACTIE_SHOP = PLAATSBARE_ATTRACTIES.map(mkItem);
const LEERPLEIN_SHOP = PLAATSBARE_LEERPLEIN.map(mkItem);
const HEK_SHOP = PLAATSBARE_HEKKEN.map(mkItem);
const NATUUR_SHOP = PLAATSBARE_NATUUR.map(mkItem);
const BLOK_SHOP = PLAATSBARE_BLOKKEN.map(mkItem);
const SHOP_CATS = [
  { key: "dier", label: "🦊 Dieren", items: DIEREN_SHOP },
  { key: "leerplein", label: "🎡 Leerplein", items: LEERPLEIN_SHOP },
  { key: "blok", label: "🧱 Blokken", items: BLOK_SHOP },
  { key: "hek", label: "🚧 Hekken", items: HEK_SHOP },
  { key: "gebouw", label: "🏠 Gebouwen", items: BOUW_SHOP },
  { key: "attractie", label: "🎠 Attracties", items: ATTRACTIE_SHOP },
  { key: "natuur", label: "🌳 Natuur & bouwen", items: NATUUR_SHOP },
];
const MAX_BLOKKEN = 2000; // totaal-cap (instanced → 2 draw-calls, ook op telefoons vlot)
const MAX_STAPEL = 10;    // max bouwhoogte in kubus-lagen (10 m)

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

// 🏗️ Bouwplannen voor auto-bouw (Mark 8 jul): niet meer N× exact hetzelfde
// huisje ("saai"), maar kiezen — "van jouw munten kan ik dit voor je bouwen:
// A, B of C — welke zal ik bouwen?". Elke keuze = één themaverblijf. Binnen
// een plan wisselen huisje, dieren, bomen en bloemen per keer, zodat twee
// keer hetzelfde plan er tóch anders uitziet.
// kiesUit onthoudt per groep de vorige keuze: twee keer achter elkaar bouwen
// geeft dan nooit exact hetzelfde huisje/dier (dat was juist de klacht).
const abVorigeKeuze = {};
const kiesUit = (arr, groep) => {
  let x = arr[Math.floor(Math.random() * arr.length)];
  if (groep && arr.length > 1 && x === abVorigeKeuze[groep]) x = arr[(arr.indexOf(x) + 1) % arr.length];
  if (groep) abVorigeKeuze[groep] = x;
  return x;
};
const AB_HUISJES = ["houseA", "houseB", "houseC", "houseD", "houseF", "houseG", "huisRood", "huisBlauw", "huisGroen", "huisGeel"];
const AB_BOERDERIJ = ["cow", "sheep", "pig", "alpaca", "donkey", "horse"];
const AB_WILD = ["wolf", "zebra", "deer", "stag", "fox", "husky"];
const AB_DINOS = ["velociraptor", "triceratops", "stegosaurus", "trex"];
const AB_BLOEMEN = ["flowerRed", "flowerYellow", "flowerPurple"];
const AB_BOMEN = ["tree", "treeOak", "treePalm"];

// Slots zijn posities bínnen het 6×5-verblijf (rand = hek). [2,2] is de
// huisje-plek die de oude auto-bouw ook gebruikte; de rest is losse 1-vaks-spul.
function maakBouwplannen() {
  const wild = [...AB_WILD].sort(() => Math.random() - 0.5).slice(0, 3);
  const plannen = [
    { key: "boerderij", emoji: "🐄", naam: "Boerderij-verblijf", hek: true, vulling: [
      { id: kiesUit(AB_HUISJES, "huis"), slot: [2, 2] }, { id: kiesUit(AB_BOERDERIJ, "boerderijdier"), slot: [4, 1] },
      { id: kiesUit(AB_BLOEMEN), slot: [4, 2] }, { id: kiesUit(AB_BOMEN), slot: [4, 3] },
    ] },
    { key: "wild", emoji: "🦌", naam: "Wilde-dieren-verblijf", hek: true, vulling: [
      { id: wild[0], slot: [1, 1] }, { id: wild[1], slot: [2, 2] }, { id: wild[2], slot: [3, 1] },
      { id: "boomstronk", slot: [4, 2] }, { id: kiesUit(AB_BOMEN), slot: [4, 3] },
    ] },
    { key: "dino", emoji: "🦖", naam: "Dino-verblijf", hek: true, vulling: [
      { id: kiesUit(AB_DINOS, "dino"), slot: [2, 2] }, { id: kiesUit(AB_BOMEN), slot: [4, 1] },
      { id: kiesUit(AB_BOMEN), slot: [1, 3] }, { id: "boomstronk", slot: [4, 3] },
    ] },
    { key: "tuin", emoji: "🌳", naam: "Bloementuin", hek: false, vulling: [
      { id: kiesUit(AB_BOMEN), slot: [1, 1] }, { id: kiesUit(AB_BOMEN), slot: [3, 3] }, { id: kiesUit(AB_BOMEN), slot: [4, 1] },
      { id: kiesUit(AB_BLOEMEN), slot: [2, 1] }, { id: kiesUit(AB_BLOEMEN), slot: [2, 2] },
      { id: kiesUit(AB_BLOEMEN), slot: [3, 2] }, { id: kiesUit(AB_BLOEMEN), slot: [2, 3] },
      { id: "boomstronk", slot: [4, 3] },
    ] },
  ];
  // Hek-kosten: exact de geometrie van de bouwer — 4 hoeken + 13 panelen + 1 poort.
  const hekKosten = 4 * prijsVan("hekHoek") + 13 * prijsVan("hekPaneel") + prijsVan("hekPoort");
  return plannen.map((p) => ({
    ...p,
    prijs: (p.hek ? hekKosten : 0) + p.vulling.reduce((s, v) => s + prijsVan(v.id), 0),
    inhoud: p.vulling.map((v) => getAsset(v.id)?.emoji || "").join(" ") + (p.hek ? " + hek met poort" : ""),
  }));
}

export default function ZookwartierGame({ onHome, userName, authUser, onPlayObliterator, onOpenLeerpad, onOpenLeerpaden, onOpenMaatje, onOpenGalerij }) {
  const naam = (userName || "").trim();
  const parkNaam = naam ? `${naam}'s Park` : "Mijn Park";
  const userId = authUser?.id || null;

  // Easter egg (Mark 2026-07-25): OBLITERATOR is overal uit het zicht — wie
  // 7× snel op de parknaam in het menu tikt (of /obliterator kent) vindt het
  // geheime spel alsnog.
  const eggTaps = useRef(0);
  const eggTimer = useRef(null);
  const geheimeTik = () => {
    if (!onPlayObliterator) return;
    eggTaps.current += 1;
    clearTimeout(eggTimer.current);
    eggTimer.current = setTimeout(() => { eggTaps.current = 0; }, 1500);
    if (eggTaps.current >= 7) { eggTaps.current = 0; onPlayObliterator(); }
  };

  const [meta, setMeta] = useState(null);
  const [placedItems, setPlacedItems] = useState(STARTER_LAYOUT);
  const [placing, setPlacing] = useState(null); // { assetId, price, moveIdx? }
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [laadFout, setLaadFout] = useState(false); // park kon niet laden — nooit overschrijven (bug-jacht 7/7)
  const [laadPoging, setLaadPoging] = useState(0); // opnieuw-proberen-teller
  const [reward, setReward] = useState(null);
  const [loonstrook, setLoonstrook] = useState(null); // {netto, niveau} — opt-in loonstrookje na kwartier
  const [inkoopBon, setInkoopBon] = useState(null); // bonnetje (btw zichtbaar) bij het kopen van een dier
  const inkoopBonGetoondRef = useRef(false); // bon hooguit 1× per parksessie — breekt de speelflow nooit
  const [unlockMelding, setUnlockMelding] = useState(null); // viering bij een nieuw vrijgespeeld dier
  const unlockCheckedRef = useRef(false); // unlock-check hooguit 1× per parksessie
  const [saleStats, setSaleStats] = useState({}); // per kraamsoort: {count, opbrengst} deze parksessie
  const [kraamOverzicht, setKraamOverzicht] = useState(null); // welke kraamsoort z'n dagoverzicht open is
  const [melding, setMelding] = useState(null);
  const [draagSnack, setDraagSnack] = useState(null); // 🍟 snack in je hand: { id, label, vorm } — loopt mee en gaat vanzelf op
  const [zeppelinRit, setZeppelinRit] = useState(false); // 🛩️ aan boord van de zeppelin → onderbalk weg, bouw-modus dicht
  const [sceneKey, setSceneKey] = useState(0); // bump = verse mount van de 3D-scene (retry na park-fout)
  const [panel, setPanel] = useState(null); // 'uitleg' | 'gids' | 'delen' | 'autobouw' | null
  const [bouwPlannen, setBouwPlannen] = useState(null); // 🏗️ auto-bouw: de aangeboden bouwplannen (A/B/C/D)
  const [shareUrl, setShareUrl] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);
  // 🌍 Park-galerij (Mark 17 aug): opt-in om je park openbaar te tonen (anoniem,
  // komt in de wachtrij → de maker keurt goed). Onthouden per park in localStorage.
  const [galerijAangemeld, setGalerijAangemeld] = useState(false);
  const meldAanGalerij = async () => {
    if (!shareUrl) return;
    const code = shareUrl.split("bezoek=")[1] || "";
    if (!code) return;
    try {
      await meldParkAan({ shareCode: code, userId, profiel: naam });
      setGalerijAangemeld(true);
      try { localStorage.setItem(`lk_galerij_${code}`, "1"); } catch { /* */ }
      try { track("park_galerij_aanmelden"); } catch { /* */ }
    } catch { /* stil — geen kritieke actie */ }
  };
  useEffect(() => {
    if (!shareUrl) return;
    const code = shareUrl.split("bezoek=")[1] || "";
    try { if (code && localStorage.getItem(`lk_galerij_${code}`)) setGalerijAangemeld(true); } catch { /* */ }
  }, [shareUrl]);
  // null = nog geen categorie gekozen → de bouwbalk toont alléén de
  // categorie-rij (Mark 14 jul: max 1 regel tegelijk op mobiel).
  const [shopCat, setShopCat] = useState(null);
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
  const climbRef = useRef(0);                           // 🪽 stijgen/dalen tijdens het zweven: +1 omhoog, −1 omlaag, 0 stil
  // Standaard (alle uit) = derde-persoons achter de speler (poppetje + buddy in beeld).
  // 🐾 maatje — Charley is het STANDAARD maatje (Mark 1 jul); wie zelf iets koos
  // houdt z'n keuze.
  const [buddyId, setBuddyId] = useState(() => gekozenBuddy() || "charley");
  const [buddyNaamEff, setBuddyNaamEff] = useState(() => { const id = gekozenBuddy() || "charley"; return buddyNaamVan(id, BUDDY_BY_ID[id]?.naam || ""); });
  const [buddyPickerOpen, setBuddyPickerOpen] = useState(false);
  const [buddyChatOpen, setBuddyChatOpen] = useState(false); // 💬 praten met je maatje (AI)
  // 🗺️ Takenbord "wat kan ik hier leren?" (samenhang-plan 2 sep 2026): het
  // taak-1-van-8-systeem van 23 aug (parkTaken.js) bestond, maar werd nergens
  // getoond. Nu een HUD-knop + lijst per groep met ✓ voor gedane leerpaden.
  const [takenOpen, setTakenOpen] = useState(false);
  const [gedaneP, setGedaneP] = useState(() => new Set());
  // 🧭 Eén kiezer "wat nu leren" (sprint 2): klaargezet → herhalen → zwak.
  // Voedt de leer-invite, het maatje en de AI-chat; de wandeling gebruikt
  // dezelfde lijst. { pathId, reden, title } of null.
  const [leerVolgende, setLeerVolgende] = useState(null);
  // 📍 "Hier sta je": GidsWatcher schrijft het dichtstbijzijnde leermoment-id
  // (ref, geen re-renders). Eén bron voor maatje-wolkje, AI-chat en poort.
  const hierRef = useRef(null);
  const [geleerdeStappen, setGeleerdeStappen] = useState(0); // voor maatjes-ontgrendeling
  const [inhoudStappen, setInhoudStappen] = useState(0);     // 🥇 voltooide inhoud-pad-stappen → goud per vorm
  const [menuOpen, setMenuOpen] = useState(false);       // ☰-menu (fullscreen) met alle extra functies
  const [prijzenkast, setPrijzenkast] = useState(false); // 🏆 diploma-kast-overlay (beloning-lus 12 aug)
  const [bouwen, setBouwen] = useState(false);           // bouw-modus: winkelbalk in beeld (anders alleen park)
  const [besturingHint, setBesturingHint] = useState(!COARSE_POINTER); // korte WASD/sleep-hint op laptop
  const [bouwTip, setBouwTip] = useState(false);         // eenmalige maatje-tip "je kunt zelf bouwen!"
  const [leerTip, setLeerTip] = useState(false);         // 📚 gids-invite "zullen we hier een les van maken?" (P1 18 jul)
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
  const [rekenPogingen, setRekenPogingen] = useState(0); // foute pogingen op déze som (anti-gok, review 17 jul)
  const rekenVraagNr = useRef(0);                         // telt sommen → eigen chat per som
  const rekenBonusRef = useRef(0);                        // session-cap op de muntjesbonus
  const [rekenBonusGegeven, setRekenBonusGegeven] = useState(true); // kreeg dit antwoord echt de bonus? (cap-eerlijkheid)
  const [vormVraagIdx, setVormVraagIdx] = useState(null); // 🧮 index van de 3D-vorm waar de reken-vraag bij hoort
  const [terrain, setTerrain] = useState(null);          // hoogteveld van de vloer
  const [sculptMode, setSculptMode] = useState(false);   // vloer boetseren
  const [sculptDir, setSculptDir] = useState(1);         // +1 omhoog, -1 omlaag
  const [waterMode, setWaterMode] = useState(false);     // meertjes maken in dalen
  const [groundMode, setGroundMode] = useState(false);   // grondsoort schilderen
  const [groundType, setGroundType] = useState("zand");  // gekozen grondsoort
  const rewardTimer = useRef(null);
  const meldingTimer = useRef(null);
  // 🤫 Rustige binnenkomst (Mark 26 aug: "het begin is te druk — laat alle
  // teksten van Charley minstens 30 seconden uit"): de eerste ~30 s na het
  // openen van het park géén praatjes, popups of vraagjes, zodat je eerst
  // ongestoord het park in kunt lopen. Alles wat proactief praat wacht tot na
  // de rust: gids-praatjes, muntjes-jubel, vrijspeel-viering, maatje-vraagje,
  // leer-invite en bouw-tip.
  const parkStartRef = useRef(Date.now());
  const RUST_MS = 30000;
  const rustFase = () => Date.now() - parkStartRef.current < RUST_MS;
  const naDeRust = (extra = 0) => Math.max(0, RUST_MS - (Date.now() - parkStartRef.current)) + extra;
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
      // 🥇 Inhoud-pad-voortgang → bepaalt welke vormen goud worden.
      // Gouden vormen: PO-pad "maten-omtrek-oppervlakte-po" telt sinds sprint 2 mee
      // (de vormen verwijzen nu standaard dáárheen; brugklas-pad blijft tellen).
      try { const [g1, g2] = await Promise.all([telPadStappen(naam, "ruimtemeetkunde"), telPadStappen(naam, "maten-omtrek-oppervlakte-po")]); if (!cancel) setInhoudStappen(g1 + g2); } catch { /* */ }
      // 🗺️ Gedane leerpaden → ✓ op het takenbord.
      try { const gp = await gedanePaden(naam); if (!cancel) setGedaneP(gp); } catch { /* */ }
      // 🧭 Volgende leerstap (één kiezer) voor invite/maatje/chat.
      try { const k = await haalLeerKandidaten(naam, userId); if (!cancel) { setLeerVolgende(k[0] || null); wandelKandidatenRef.current = k; } } catch { /* */ }
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
    // Max 34 m (was 12 — Mark 26 aug: "verder uitzoomen zodat ik mijn poppetje
    // van een grotere afstand kan bekijken"): mooi overzicht over je park.
    cam.dist = Math.max(2.6, Math.min(34, cam.dist + e.deltaY * 0.008));
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
          if (voor > 12 && na > 12) cam.dist = Math.max(2.6, Math.min(34, cam.dist * (voor / na)));
        }
      } else {
        const sens = e.pointerType === "touch" ? 0.0062 : 0.0042;
        cam.yaw -= (e.clientX - p.x) * sens;
        // Omlaag tot -1.05: camera laag bij de grond die omhoog kijkt — zo kun
        // je de zeppelins en de raket nakijken (Mark 26 aug: "ik wil verder
        // omhoog kunnen kijken"). De spring-arm botst toch niet door de grond.
        cam.pitch = Math.max(-1.05, Math.min(1.15, cam.pitch + (e.clientY - p.y) * sens));
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
    const t = setTimeout(() => setBouwTip(true), naDeRust(60000)); // ~90 s na binnenkomst — ruim na de rust én na de leer-invite
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  const sluitBouwTip = () => {
    setBouwTip(false);
    try { localStorage.setItem("lk_bouwtip_gezien", "1"); } catch { /* */ }
  };

  // 📚 Leer-invite (P1 dagrapport 18 jul): park→leren lekte hard (16 opens →
  // 1 doorklik in 7d). Eén keer per sessie nodigt het maatje ~45s na
  // binnenkomst actief uit om te gaan oefenen — gekoppeld aan het
  // muntjes-motief dat het kind al drijft.
  useEffect(() => {
    if (!loaded) return;
    let gezien = false;
    try { gezien = sessionStorage.getItem("lk_leertip_sessie") === "1"; } catch { /* */ }
    if (gezien) return;
    const t = setTimeout(() => {
      setLeerTip(true);
      try { sessionStorage.setItem("lk_leertip_sessie", "1"); } catch { /* */ }
      try { track("park_leer_invite"); } catch { /* */ }
    }, naDeRust(30000)); // ~60 s na binnenkomst
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

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
    }, naDeRust(10000)); // ~40 s na binnenkomst — pas ná de rust
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
      const { row, loadError } = await loadZooState(userId, naam);
      if (cancel) return;
      // Bug-jacht 7/7 (HOOG): bij een laad-fout NIET doorgaan — anders zou een
      // bestaand park met het starter-park overschreven worden (autosave blijft
      // ook uit doordat `loaded` false blijft). Kind kan het opnieuw proberen.
      if (loadError) {
        setLaadFout(true);
        return;
      }
      const d = defaultState();
      // owned (jsonb) bewaart de kraampjes-prijzen als object; oude rijen hadden
      // hier een lege array → val terug op de standaardprijzen.
      const ownedObj = row && row.owned && !Array.isArray(row.owned) ? row.owned : d.owned;
      const base = row
        ? { coins: row.coins, streak: row.streak, last_login: row.last_login, last_kwartier_date: row.last_kwartier_date, owned: ownedObj }
        : { coins: d.coins, streak: d.streak, last_login: d.last_login, last_kwartier_date: d.last_kwartier_date, owned: d.owned };
      const layout = saneerLayout(row && Array.isArray(row.layout) && row.layout.length ? row.layout : STARTER_LAYOUT);

      const prevLogin = base.last_login;          // vóór de login-update
      const isNieuweDag = prevLogin !== vandaag();
      const login = applyDailyLogin(base);
      const kw = applyKwartierReward(login.state, !!getDailyGoal().completed);
      let finalMeta = kw.state;
      let finalLayout = layout;
      let parkGain = 0, births = 0, verstopt = 0, loon = 0, verstoptNamen = [], goedVerzorgd = false;

      // Park-groei: op een nieuwe dag levert je park muntjes op. Verzorging is PER
      // DIER (it.fed): recent gevoerd → eerder jonkies; een gekocht dier dat >= 3
      // dagen geen hooi kreeg loopt weg (starters blijven).
      if (isNieuweDag) {
        const dagen = Math.min(MAX_DAGEN_INKOMST, Math.max(1, dagenVerschil(prevLogin)));
        // Bruto parkopbrengst − loon van de verkopers (vaste kost). Netto nooit
        // negatief: te veel kramen eet je winst op, maar je raakt nooit in de min.
        // Parkinkomen per dag gecapt (park-megabuild #5): leren blijft de motor.
        const brutoPark = Math.min(PARK_INKOMST_CAP_PER_DAG, inkomstenPerDag(layout, kindVan)) * dagen;
        loon = loonkostenPerDag(layout) * dagen;
        parkGain = Math.max(0, brutoPark - loon);
        const g = groeiBabies(layout, isDier);
        finalLayout = g.layout;
        births = g.births;
        const v = verwaarloosCheck(finalLayout, isDier);
        finalLayout = v.layout;
        verstopt = v.verstopt;
        verstoptNamen = (v.verstoptIds || []).map((id) => getAsset(id)?.name || "een dier");
        // "Goed verzorgd"-compliment (review 17 jul: stond in de UI maar werd
        // nooit gezet): alle gekochte dieren gisteren of vandaag gevoerd.
        const gekocht = finalLayout.filter((it) => isDier(it.assetId) && (it.price || 0) > 0);
        goedVerzorgd = verstopt === 0 && gekocht.length > 0 && gekocht.every((it) => it.fed && dagenVerschil(it.fed) <= 1);
        finalMeta = { ...finalMeta, coins: finalMeta.coins + parkGain + births * BABY_BONUS };
      }
      const gained = login.gained + kw.gained + parkGain + births * BABY_BONUS;

      if (cancel) return;
      setMeta(finalMeta);
      setPlacedItems(finalLayout);
      setTerrain(deserTerrain(row?.terrain));
      setLoaded(true);
      if (gained > 0 || verstopt > 0) {
        // 🤫 Rustige binnenkomst: de muntjes-jubel pas ná de stilte-periode.
        clearTimeout(rewardTimer.current);
        rewardTimer.current = setTimeout(() => {
          setReward({ total: gained, login: login.gained, kwartier: kw.gained, park: parkGain, loon, births, verstopt, verstoptNamen, goedVerzorgd });
          // Een verstopt dier vraagt om actie (voeren) — die melding mag langer
          // blijven staan dan een muntjes-jubel (6s was te kort om te lezen).
          rewardTimer.current = setTimeout(() => setReward(null), verstopt > 0 ? 12000 : 6000);
        }, naDeRust(2000));
      }
      // Alleen opslaan als er echt iets veranderde: een nieuwe dag (last_login +
      // login-/park-beloning moet bewaard blijven), een verdiende kwartier-reward,
      // park-winst, geboortes of een weggelopen dier. Een same-day-remount zonder
      // wijziging schreef eerder onnodig én kon de debounced autosave van de eerste
      // ~2s aan acties overschrijven (dataverlies-race). (bug-jacht 2026-07-31)
      if (userId && (isNieuweDag || gained > 0 || verstopt > 0)) {
        saveZooState(userId, naam, { ...finalMeta, layout: finalLayout });
      }
    })();
    return () => { cancel = true; clearTimeout(rewardTimer.current); clearTimeout(meldingTimer.current); };
  }, [userId, laadPoging]);

  // Debounced opslaan na wijzigingen (incl. het geboetseerde terrein).
  // Flush bij unmount (review 17 jul): wie <2s na een plaatsing op 🏠 tikte,
  // verloor die plaatsing — de pending save werd alleen geannuleerd. De ref
  // houdt de nieuwste save vast; de losse unmount-effect voert hem alsnog uit.
  const pendingSaveRef = useRef(null);
  useEffect(() => {
    if (!loaded || !userId || !meta) return;
    const bewaar = () => { pendingSaveRef.current = null; saveZooState(userId, naam, { ...meta, layout: placedItems, terrain: serTerrain(terrain) }); };
    pendingSaveRef.current = bewaar;
    const t = setTimeout(bewaar, 2000);
    return () => clearTimeout(t);
  }, [placedItems, meta, terrain, loaded, userId]);
  useEffect(() => () => { pendingSaveRef.current?.(); }, []);

  const coins = meta?.coins ?? 0;
  const streak = meta?.streak ?? 0;
  const econLevel = meta?.owned?.econLevel || "po"; // niveau van de economie-uitleg (po/vo)

  // Welke vrijspeel-dieren bezit dit park al (in owned.unlocked).
  const unlockedDieren = (meta?.owned && !Array.isArray(meta.owned) && Array.isArray(meta.owned.unlocked)) ? meta.owned.unlocked : [];
  // Zelfde sleutel als de leerpaden gebruiken voor learn_progress.
  const leerNaam = (userName || "Speler").trim() || "Speler";

  // 🦕 Volgende-dino-hint (park-megabuild #3): de eerstvolgende nog niet
  // verdiende mijlpaal-dino + hoeveel lesjes er nog te gaan zijn. Wordt op het
  // dino-bord bij de groeiplek getoond én in de wandel-viering — het krachtigste
  // "wat komt hier / waarom kom ik morgen terug"-haakje dat het park al heeft.
  const dinoHint = useMemo(() => {
    // Alleen échte dino's op het dino-bord (DINO_MIJLPALEN bevat ook fabels +
    // gouden vormen — die horen niet op de dino-groeiplek).
    const DINO_SET = new Set(["triceratops", "stegosaurus", "parasaurolophus", "trex", "apatosaurus"]);
    const dino = DINO_MIJLPALEN.find((d) => DINO_SET.has(d.assetId) && !unlockedDieren.includes(d.assetId));
    if (!dino) return null; // alle dino's al verdiend
    return { assetId: dino.assetId, naam: dino.naam, emoji: dino.emoji, stappen: dino.stappen, rest: Math.max(0, dino.stappen - geleerdeStappen), gehad: geleerdeStappen };
  }, [unlockedDieren, geleerdeStappen]);

  // 🥇 Gouden-vormen-voortgang per pad (fase 2, park-megabuild #4): elke inhoud-
  // vorm kleurt goud naarmate zijn leerpad vordert. inhoudStappen dekt het
  // ruimtemeetkunde-pad (kubus/piramide); vorm-specifieke paden komen erbij zodra
  // ze bestaan (nu delen de vormen het ruimtemeetkunde-pad — één teller volstaat).
  const leerStappenPerPad = useMemo(() => ({ ruimtemeetkunde: inhoudStappen }), [inhoudStappen]);

  // 🎟️ Wandel-stempelkaart (park-megabuild #2): elke afgeronde wandeling laat een
  // blijvend spoor na — een stempel (datum + routekleur) bewaard in owned. Zo ziet
  // 10 dagen lopen er écht anders uit dan 1 dag. Bij mijlpalen verschijnt een klein
  // blijvend object bij de ingang. Geen migratie (vrij jsonb-veld).
  const wandelStempels = (meta?.owned && !Array.isArray(meta.owned) && Array.isArray(meta.owned.wandelStempels)) ? meta.owned.wandelStempels : [];
  const [stempelKaartOpen, setStempelKaartOpen] = useState(false);
  const STEMPEL_MIJLPALEN = [
    { n: 5, asset: "bankje", cell: [9, 16], naam: "een extra bankje bij de ingang" },
    { n: 10, asset: "treePalm", cell: [-9, 16], naam: "een palmboom bij de ingang" },
    { n: 25, asset: "fountain", cell: [8, 14], naam: "een echte fontein bij de ingang" },
  ];
  const verdienStempel = (routeId) => {
    const route = ROUTE_BY_ID[routeId];
    const stempel = { datum: vandaag(), routeId, kleur: route?.kleur || "#888", naam: route?.naam || "Wandeling" };
    setMeta((m) => {
      if (!m) return m;
      const o = (m.owned && !Array.isArray(m.owned)) ? m.owned : {};
      const cur = Array.isArray(o.wandelStempels) ? o.wandelStempels : [];
      const nieuweLijst = [...cur, stempel];
      const nieuwAantal = nieuweLijst.length;
      // Mijlpaal-object erbij als dit precies een mijlpaal-aantal raakt.
      const mp = STEMPEL_MIJLPALEN.find((x) => x.n === nieuwAantal);
      if (mp) {
        setPlacedItems((items) => {
          if (items.some((it) => it.assetId === mp.asset && it.cell?.[0] === mp.cell[0] && it.cell?.[1] === mp.cell[1])) return items;
          return [...items, { assetId: mp.asset, cell: mp.cell, rotation: 0, price: 0 }];
        });
        setTimeout(() => flits(`🎉 ${nieuwAantal} stempels! Je verdiende ${mp.naam}.`), 400);
      }
      try { track("wandel_stempel", { aantal: nieuwAantal, route: routeId }); } catch { /* */ }
      return { ...m, owned: { ...o, wandelStempels: nieuweLijst } };
    });
  };
  const volgendeStempelMijlpaal = STEMPEL_MIJLPALEN.find((x) => x.n > wandelStempels.length);

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
      // 🤫 Rustige binnenkomst: de vrijspeel-viering pas ná de stilte-periode.
      setTimeout(() => { if (!cancel) setUnlockMelding(eerste); }, naDeRust(5000));
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
  // Voer één dier (op index in placedItems). Was het verstopt (te lang geen
  // hooi), dan komt het door te voeren blij terug — een klein hereniging-moment
  // i.p.v. straf (park-megabuild #1).
  const voerDier = (idx) => {
    const was = placedItems[idx];
    const terug = was?.verstopt;
    setPlacedItems((items) => items.map((it, i) => (i === idx ? { ...it, fed: vandaag(), verstopt: false } : it)));
    if (terug) {
      const naam = getAsset(was?.assetId)?.name || "Je dier";
      flits(`🎉 ${naam} is terug — je hebt 'm gevonden! ❤️`);
      try { track("dier_teruggevonden", { asset: was?.assetId }); } catch { /* */ }
    } else {
      flits("Gevoerd! 🌾");
    }
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
    const terugAantal = dieren.filter((it) => it.verstopt).length;
    setPlacedItems((items) => items.map((it) => (isDierItem(it) ? { ...it, fed: vandaag(), verstopt: false } : it)));
    flits(terugAantal > 0 ? `🎉 Alle dieren gevoerd — je vond ${terugAantal} verstopt dier${terugAantal > 1 ? "en" : ""}! ❤️` : "Alle dieren gevoerd! 🌾");
  };

  // 😋 Zelf klant zijn bij je eigen kraam (Mark 26 aug: "ik wil in het park ook
  // patat kunnen kopen en eten, met muntjes uit de spaarpot — en dieren-eten
  // kopen, zoals een wortel om echt te geven, of een bot voor Charley").
  // Zelf eten kost alleen de INKOOP-prijs: de kraam is van jou, dus de winst-
  // marge betaal je niet aan jezelf — een klein inkoop/verkoop-lesje in het echt.
  const VOER = {
    wortel: { emoji: "🥕", label: "wortel", prijs: 2 },
    bot: { emoji: "🦴", label: "bot", prijs: 3 },
  };
  const HONDEN = new Set(["husky", "shibaInu", "pug", "wolf"]);
  // In je hand bewaren we in meta.owned (kliktocht-review 26 aug): zo eet het
  // park verlaten je gekochte voer niet stilletjes op — je houdt het gewoon vast.
  const inHand = (meta?.owned && !Array.isArray(meta.owned) && meta.owned.voerInHand) || null;
  const setInHand = (v) => setMeta((m) => { if (!m) return m; const o = m.owned && !Array.isArray(m.owned) ? m.owned : {}; return { ...m, owned: { ...o, voerInHand: v || null } }; });
  // Eerlijke niet-genoeg-tekst (zelfde regel als startKopen, review 17 jul): is
  // het kwartier vandaag al uitbetaald, dan geen loze "leer een kwartier"-belofte.
  const flitsTeWeinigMuntjes = () => {
    const kwartierAlGehad = meta?.last_kwartier_date === vandaag();
    flits(kwartierAlGehad
      ? "Niet genoeg muntjes — morgen verdient je leerkwartier weer muntjes! Tip: blokken bouwen is gratis."
      : "Niet genoeg muntjes — leer een kwartier om te sparen!");
  };
  const koopSnackZelf = (produkt, inkoop, soort) => {
    if (!produkt) return;
    if (draagSnack) { flits("Je hebt nog wat lekkers in je hand — eerst opeten! 😋"); return; }
    if (coins < inkoop) { flitsTeWeinigMuntjes(); return; }
    setMeta((m) => (m ? { ...m, coins: m.coins - inkoop } : m));
    // Welke 3D-vorm loopt er mee in je hand?
    const vorm = soort === "drink" ? "drink" : soort === "ice" ? "ijsje" : soort === "popcorn" ? "popcorn" : produkt.id === "patat" ? "friet" : "snack";
    setDraagSnack({ id: produkt.id, label: produkt.label, vorm });
    sluitSelectie();
    flits(`${produkt.emoji} Eet smakelijk! Loop maar lekker rond — ${soort === "drink" ? "slokje voor slokje raakt je beker leeg" : "hap voor hap gaat het op"}.`);
    try { track("park_snack_zelf", { product: produkt.id, prijs: inkoop }); } catch { /* */ }
  };
  // Het bakje is leeg (na ~30 s meelopen) — aangeroepen vanuit de 3D-scene.
  const snackOp = () => {
    if (!draagSnack) return;
    flits(draagSnack.vorm === "drink"
      ? `😋 Ahh... dat was lekker! Je ${draagSnack.label.toLowerCase()} is op.`
      : `😋 Mmm... dat was lekker! De ${draagSnack.label.toLowerCase()} is op.`);
    try { track("park_snack_op", { product: draagSnack.id }); } catch { /* */ }
    setDraagSnack(null);
  };
  const koopVoer = (type) => {
    const v = VOER[type];
    if (!v) return;
    if (inHand) { flits(`Je hebt al een ${VOER[inHand].label} in je hand — geef die eerst!`); return; }
    if (coins < v.prijs) { flitsTeWeinigMuntjes(); return; }
    setMeta((m) => { if (!m) return m; const o = m.owned && !Array.isArray(m.owned) ? m.owned : {}; return { ...m, coins: m.coins - v.prijs, owned: { ...o, voerInHand: type } }; });
    sluitSelectie();
    flits(type === "wortel"
      ? "🥕 Wortel gekocht! Loop naar een dier en tik erop om 'm te geven."
      : `🦴 Bot gekocht! Geef 'm aan ${buddyNaamEff || "je maatje"} (knop bovenin) of tik op een hond.`);
    try { track("park_voer_koop", { type, prijs: v.prijs }); } catch { /* */ }
  };
  // Terugleggen = muntjes terug — geen straf voor per ongeluk kopen.
  const legVoerTerug = () => {
    if (!inHand) return;
    const prijs = VOER[inHand].prijs;
    setMeta((m) => { if (!m) return m; const o = m.owned && !Array.isArray(m.owned) ? m.owned : {}; return { ...m, coins: m.coins + prijs, owned: { ...o, voerInHand: null } }; });
    flits("Teruggelegd — je krijgt je muntjes terug.");
  };
  // Echt geven: het dier eet en telt als gevoerd (een verstopt dier komt terug).
  const geefVoerAanDier = (idx) => {
    if (!inHand) return;
    const it = placedItems[idx];
    const naam = getAsset(it?.assetId)?.name || "Het dier";
    if (inHand === "bot" && !HONDEN.has(it?.assetId)) {
      flits(`💭 ${naam} snuffelt eraan... liever geen bot. Geef 'm aan een hond of aan ${buddyNaamEff || "je maatje"}!`);
      return;
    }
    const terug = it?.verstopt;
    setPlacedItems((items) => items.map((x, i) => (i === idx ? { ...x, fed: vandaag(), verstopt: false } : x)));
    const eetTekst = inHand === "bot"
      ? `🦴 ${naam} kluift smullend op het bot — knaag knaag! ❤️`
      : it?.assetId === "velociraptor"
        ? `🥕 GRRR... njam! ${naam} eet de wortel in één hap op! 😋`
        : `🥕 ${naam} smult van de wortel — knabbel knabbel! 😋`;
    flits(terug ? `🎉 ${naam} komt tevoorschijn voor je ${VOER[inHand].label} — je hebt 'm gevonden! ❤️` : eetTekst);
    try { track("park_voer_gegeven", { type: inHand, aan: it?.assetId }); } catch { /* */ }
    setInHand(null);
  };
  // Het bot aan je maatje geven — Charley (hond) wordt er hélemaal blij van.
  const geefBotAanMaatje = () => {
    if (inHand !== "bot") return;
    const naam = buddyNaamEff || "Je maatje";
    const isHond = (BUDDY_BY_ID[buddyId]?.soort || "").includes("hond");
    setInHand(null);
    flits(isHond
      ? `🦴 WOEF! ${naam} kwispelt wild en kluift smullend op het bot! ❤️`
      : `🦴 ${naam} vindt het bot prachtig en bewaart 'm als schat! ❤️`);
    spreek(isHond ? "Woef woef! Mijn lievelingsbot! Dank je wel!" : "Wauw, een echt bot! Die bewaar ik als schat.");
    try { track("park_voer_gegeven", { type: "bot", aan: "maatje", buddy: buddyId }); } catch { /* */ }
  };

  const startKopen = (p) => {
    if (coins < p.price) {
      flitsTeWeinigMuntjes();
      return;
    }
    setSelectedIdx(null);
    // Park-zwerm 17 jul: het GLB-model alvast binnenhalen terwijl het kind een
    // plek zoekt — anders hapert de ghost-preview op de eerste aankoop.
    // Guard: procedurele assets (bankjes, blokken) hebben geen url.
    try { const url = getAsset(p.assetId)?.url; if (url) useGLTF.preload(url); } catch { /* preload is comfort, geen vereiste */ }
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
    // Bevestigings-flits (review 17 jul): zonder melding kocht een kind dat nog
    // wat rondtikte ongemerkt 2-3 dieren extra — weghalen meldde wél netjes.
    const aGeplaatst = getAsset(placing.assetId);
    const naamGeplaatst = `${aGeplaatst?.emoji || "✨"} ${aGeplaatst?.name || "Gezet"}`;
    if (vrijspeelDier(placing.assetId)) { setPlacing(null); flits(`${naamGeplaatst} geplaatst! ✨`); }
    else if (coins - placing.price < placing.price) { setPlacing(null); flits(placing.price > 0 ? `${naamGeplaatst} geplaatst! −${placing.price} 🪙` : `${naamGeplaatst} geplaatst!`); }
    else flits(placing.price > 0 ? `${naamGeplaatst} geplaatst! −${placing.price} 🪙 · tik nog een vak of druk ✓ Klaar` : `${naamGeplaatst} geplaatst! Tik nog een vak of druk ✓ Klaar`);
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

  // 🔺 Inhoud-vormen in het park kun je stap-voor-stap groter/kleiner maken;
  // de zwevende maten + inhoud + formule veranderen live mee (Mark 16 aug).
  const wijzigMaat = (idx, delta) => {
    setPlacedItems((items) => items.map((it, i) => {
      if (i !== idx) return it;
      // Per object een eigen bereik (Mark 17 aug): piramide 4..11, kleuren-kubus
      // ribbe 2..5, enz. — uit de asset-registry (maatConfig).
      const cfg = maatConfig(it.assetId) || { min: 4, max: 11, standaard: 8 };
      const nieuw = Math.max(cfg.min, Math.min(cfg.max, (it.maat ?? cfg.standaard) + delta));
      return { ...it, maat: nieuw };
    }));
  };

  // 🔄 Draai een leerobject om z'n as (Mark 17 aug: "als je 'm kunt draaien weet
  // je echt hoe 't zit"). Stap van 22,5°; de vormen passen `rotation` al toe.
  const draaiObject = (idx, dir) => {
    setPlacedItems((items) => items.map((it, i) =>
      i === idx ? { ...it, rotation: ((it.rotation || 0) + dir * (Math.PI / 8)) } : it));
  };

  const verplaatsGeselecteerde = () => {
    if (selectedIdx == null) return;
    const it = placedItems[selectedIdx];
    setPlacing({ assetId: it.assetId, price: it.price ?? prijsVan(it.assetId), moveIdx: selectedIdx, rot: it.rotation || 0 });
    setSelectedIdx(null);
  };

  const weghaalGeselecteerde = () => {
    // Bug-jacht 7/7: op een trage verbinding is het park al bespeelbaar terwijl
    // meta nog null is — weghalen crashte dan de hele app (m.coins op null).
    if (selectedIdx == null || !meta) return;
    const it = placedItems[selectedIdx];
    const terug = it.price ?? prijsVan(it.assetId);
    setMeta((m) => (m ? { ...m, coins: m.coins + terug } : m));
    setPlacedItems((items) => items.filter((_, i) => i !== selectedIdx));
    setSelectedIdx(null);
    if (terug > 0) flits(`Weggehaald — +${terug} 🪙 terug`);
  };

  // 🏗️ AUTO-BOUW v2 (Mark 2026-07-08): niet meer N× hetzelfde recept, maar
  // een gekozen bouwplan (boerderij/wild/dino/tuin) uitvoeren. Bouwt precies
  // één themaverblijf; het paneel blijft open zodat je meteen het volgende
  // kunt kiezen (met verse variatie + bijgewerkte muntjes).
  const autoBouw = (plan) => {
    if (!meta || !plan) return;
    if (plan.prijs > coins) { flits(`Nog ${plan.prijs - coins} muntjes sparen voor ${plan.naam} 🪙`); return; }
    const PLOT_W = 6, PLOT_H = 5;

    const blokkeert = (id) => { const a = getAsset(id); return !(a && a.procedural === "path"); };
    const bezet = new Set();
    placedItems.forEach((it) => {
      // Bug-jacht 7/7: bouwkubussen hebben kx/kz/kh en GEEN .cell — die lieten
      // autoBouw crashen zodra er één blokje in het park stond. Kubs zijn
      // loopbaar/overbouwbaar, dus overslaan is ook inhoudelijk juist.
      if (!it.cell || !blokkeert(it.assetId)) return;
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

    const spot = zoekBlok();
    if (!spot) { flits("Geen vrije plek meer voor een verblijf 🐾"); return; }
    const [x0, z0] = spot;
    const x1 = x0, z1 = z0, x2 = x0 + PLOT_W - 1, z2 = z0 + PLOT_H - 1;

    const nieuwe = [];
    let kosten = 0;
    const mk = (id, x, z, rotation = 0) => { const p = prijsVan(id); const it = { assetId: id, cell: [x, z], rotation, price: p }; if (kindVan(id) === "animal") it.fed = vandaag(); nieuwe.push(it); kosten += p; };

    if (plan.hek) {
      // hek-rand die netjes aansluit: hoeken + panelen (Z-wand 90° gedraaid), poort midden-voor
      const poortX = Math.round((x1 + x2) / 2);
      mk("hekHoek", x1, z1, 0);
      mk("hekHoek", x2, z1, -Math.PI / 2);
      mk("hekHoek", x1, z2, Math.PI / 2);
      mk("hekHoek", x2, z2, Math.PI);
      for (let x = x1 + 1; x < x2; x++) { mk("hekPaneel", x, z1, 0); mk(x === poortX ? "hekPoort" : "hekPaneel", x, z2, 0); }
      for (let z = z1 + 1; z < z2; z++) { mk("hekPaneel", x1, z, Math.PI / 2); mk("hekPaneel", x2, z, Math.PI / 2); }
    }
    plan.vulling.forEach((v) => mk(v.id, x0 + v.slot[0], z0 + v.slot[1]));

    setMeta((m) => ({ ...m, coins: m.coins - kosten }));
    setPlacedItems((items) => [...items, ...nieuwe]);
    // Paneel blijft open: verse plannen (nieuwe variatie) voor de volgende keuze.
    setBouwPlannen(maakBouwplannen());
    try { track("park_autobouw", { plan: plan.key, kosten }); } catch { /* */ }
    flits(`🏗️ ${plan.emoji} ${plan.naam} gebouwd voor ${kosten} 🪙!`);
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
  // Het gekozen product van deze kraam (voor "zelf kopen & opeten").
  const selProdukt = selVoorziet ? productVanKraam(selVoorziet) : null;
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
      const code = await getShareCode(userId, naam);
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
    if (userId && meta) saveZooState(userId, naam, { ...meta, owned: schoonOwned, layout: STARTER_LAYOUT, terrain: null });
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
    await saveZooState(userId, naam, { ...meta, layout: placedItems, terrain: serTerrain(terrain) });
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
  // UIT sinds sprint 3 (2 sep 2026): 2× gebruikt in 30 dagen en het vierde
  // praat-systeem naast gids/maatje/chat. Bezoekers houden hun begroetings-
  // wolkje; de leer-ingang loopt nu via maatje, poort en takenbord. Code blijft
  // staan achter deze schakelaar (developer-review: "schrappen, niet uitbreiden").
  const BEZOEKER_PRAATJE_AAN = false;
  const tapBezoeker = () => {
    if (placing || sculptMode || waterMode || groundMode || selectedIdx != null) return;
    setDialoog({ step: 0 });
    // Trechter-meting (park → leren): praatje geopend.
    try { track("park_praatje"); } catch { /* nooit laten breken */ }
  };

  // 🧙 Uitvinders-kabouters: tik op een tafereel → buddy vertelt + leer-link.
  const [tafereel, setTafereel] = useState(null);
  const [speelInhoud, setSpeelInhoud] = useState(false); // 📐 interactieve piramide-inhoud
  const [nabijePiramide, setNabijePiramide] = useState(null); // 🔺 index piramide waar je bij staat
  const [manipMode, setManipMode] = useState("grootte");      // 📏 grootte | 🔄 draaien — wat de +/- doet

  // 🥾 Wandelkwartier M2 (Mark-go 20 aug): kies een gekleurde route (bos-stijl),
  // volg de voetstappen, vind de 3 stops (praatje van het stop-object opent =
  // gevonden), route af = viering. Voortgang per dag in localStorage.
  const [wandeling, setWandeling] = useState(() => leesWandeling());
  const [wandelKies, setWandelKies] = useState(false);
  const [wandelViering, setWandelViering] = useState(false);
  const wandelRoute = wandeling ? ROUTE_BY_ID[wandeling.routeId] : null;
  const wandelStop = wandelRoute && !wandeling.klaar ? stopsVan(wandeling)[wandeling.stopIdx] : null;
  // Welke leermoment-objecten staan er ÉCHT in dit park? (speeltest 20 aug:
  // oudere parken missen leerplein-objecten → stops daarop afstemmen.)
  const aanwezigeMomenten = useMemo(() => {
    const s = new Set();
    (placedItems || []).forEach((it) => {
      const m = it && LEERMOMENT_BY_ASSET[it.assetId];
      if (m) s.add(m);
    });
    return s;
  }, [placedItems]);
  // Aankomst-detectie: positie van het huidige stop-object → ZooScene opent
  // het praatje vanzelf als het kind erbij komt (Brian 20 aug: liep "dood"
  // op de stop zonder te weten dat hij er al was).
  const wandelDoelPos = useMemo(() => {
    if (!wandelStop) return null;
    const it = (placedItems || []).find((x) => x && Array.isArray(x.cell) && LEERMOMENT_BY_ASSET[x.assetId] === wandelStop.moment);
    return it ? { x: it.cell[0] * CELL, z: it.cell[1] * CELL } : null;
  }, [wandelStop, placedItems]);
  const wandelBereikt = () => {
    if (!wandelStop || tafereel) return;
    const m = PARK_LEERMOMENTEN[wandelStop.moment];
    if (!m) return;
    // 🧒 Jong-praatje op de gele route (groep 3-5, park-megabuild #7.3): simpeler
    // uitleg + een makkelijker leerpad-link waar die bestaat.
    const jong = wandeling?.routeId === "geel";
    const mm = jong && m.praatjeJong
      ? { ...m, praatje: m.praatjeJong, ...(m.leerpadIdJong ? { leerpadId: m.leerpadIdJong, leerLabel: m.leerLabelJong || m.leerLabel } : {}) }
      : m;
    setTafereel(mm);
    try { track("park_leermoment", { id: m.id, via: "wandeling", jong }); } catch { /* */ }
  };
  // M2b: kandidaten voor persoonlijke stops (herhaling-die-eraan-toe-is +
  // zwakste concepten) — één keer ophalen zodra het kies-paneel opengaat.
  // Sprint 2 (2 sep 2026): dezelfde kiezer als invite/maatje/chat —
  // haalLeerKandidaten (klaargezet → herhalen → zwak). Wordt al bij het laden
  // gevuld; hier alleen een vangnet als het kies-paneel eerder opengaat.
  const wandelKandidatenRef = useRef(null);
  useEffect(() => {
    if (!wandelKies || wandelKandidatenRef.current || !naam) return;
    let cancel = false;
    haalLeerKandidaten(naam, userId).then((k) => { if (!cancel) wandelKandidatenRef.current = k; }).catch(() => { if (!cancel) wandelKandidatenRef.current = []; });
    return () => { cancel = true; };
  }, [wandelKies, naam, userId]);
  useEffect(() => {
    if (!tafereel || !wandeling || wandeling.klaar || tafereel.via === "takenbord") return;
    const stop = stopsVan(wandeling)[wandeling.stopIdx];
    if (!stop || tafereel.id !== stop.moment) return;
    const nw = volgendeStop(wandeling);
    setWandeling(nw);
    setWandelStopGevonden({ nr: wandeling.stopIdx + 1, van: stopsVan(wandeling).length, klaar: nw.klaar });
    try { track(nw.klaar ? "wandel_route_af" : "wandel_stop_klaar", { route: wandeling.routeId, stop: stop.moment }); } catch { /* */ }
    if (nw.klaar) {
      setWandelViering(true);
      verdienStempel(wandeling.routeId);
      // 🪙 Sprint 3: de wandeling ís het kwartier — 3 stops, 3 vragen → munten,
      // net als een afgemaakt leerkwartier (kleiner bedrag: nadenken ≠ oefenen).
      setMeta((m) => (m ? { ...m, coins: (m.coins || 0) + WANDEL_REWARD } : m));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tafereel]);
  // 🥾 Badge in het paneel: "stop 2 van 3 gevonden" — weg zodra het paneel dicht is.
  const [wandelStopGevonden, setWandelStopGevonden] = useState(null);
  useEffect(() => { if (!tafereel) setWandelStopGevonden(null); }, [tafereel]);
  // ☁️ Wandeling meenemen naar Supabase (owned.wandeling) én terughalen op een
  // ander toestel (sprint 3): lokaal leeg + cloud heeft er één van vandaag → overnemen.
  const wandelCloudKlaar = useRef(false);
  useEffect(() => {
    if (!loaded || !meta || wandelCloudKlaar.current) return;
    wandelCloudKlaar.current = true;
    if (wandeling) return;
    const o = (meta.owned && !Array.isArray(meta.owned)) ? meta.owned : {};
    const w = herstelWandeling(o.wandeling);
    if (w) setWandeling(w);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, meta]);
  useEffect(() => {
    if (!loaded) return;
    setMeta((m) => {
      if (!m) return m;
      const o = (m.owned && !Array.isArray(m.owned)) ? m.owned : {};
      const was = JSON.stringify(o.wandeling || null);
      const nu = JSON.stringify(wandeling || null);
      if (was === nu) return m;
      return { ...m, owned: { ...o, wandeling: wandeling || null } };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wandeling, loaded]);
  // 🗣️ Gids-zin bij binnenkomst (sprint 3): een wandeling van vandaag staat nog
  // open → het maatje zegt waar je heen moet, mét de vraag van die plek. Eén
  // keer per sessie, pas na de rust bij binnenkomst.
  useEffect(() => {
    if (!loaded || !wandeling || wandeling.klaar || !wandelStop || gidsStil) return;
    let gezegd = false;
    try { gezegd = sessionStorage.getItem("lk_wandel_gids_sessie") === "1"; } catch { /* */ }
    if (gezegd) return;
    const t = setTimeout(() => {
      try { sessionStorage.setItem("lk_wandel_gids_sessie", "1"); } catch { /* */ }
      const m = PARK_LEERMOMENTEN[wandelStop.moment];
      spreek(`Je wandeling wacht nog. Loop naar ${wandelStop.label}. ${m?.vraag || ""}`);
    }, 5000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);
  // Vraag→spel-deeplink (P1 cirkel-is-rond): /dierentuin?scene=<id> spawnt je
  // vlak vóór het tafereel en opent het praatje. Param één keer lezen bij mount.
  const [deeplinkScene] = useState(() => {
    try {
      const id = new URLSearchParams(window.location.search).get("scene");
      // Ook park-leermomenten (cirkel fase 2): die hebben geen vaste positie
      // (het object staat waar het kind het zette), dus zonder teleport —
      // alleen het paneel openen.
      return (TAFEREEL_BY_ID[id] || PARK_LEERMOMENTEN[id]) ? id : null;
    } catch { return null; }
  });
  // 🌋 ?scene=vulkaan (Mark 6 sep): de vulkaan staat buiten het hek op een vaste
  // plek — spawn aan de voet, aan de parkkant, met de camera erop gericht.
  const deeplinkSpawn = deeplinkScene === "vulkaan"
    ? VULKAAN_SPAWN
    : deeplinkScene && TAFEREEL_BY_ID[deeplinkScene]
      ? [TAFEREEL_BY_ID[deeplinkScene].pos[0], 0, TAFEREEL_BY_ID[deeplinkScene].pos[1] + 4]
      : null;
  useEffect(() => { if (deeplinkScene === "vulkaan") { inputRef.current.cam.yaw = VULKAAN_KIJK_YAW; inputRef.current.cam.pitch = 0.02; inputRef.current.cam.dist = 14; } }, [deeplinkScene]);
  const deeplinkKlaar = useRef(false);
  useEffect(() => {
    if (!deeplinkScene || !loaded || deeplinkKlaar.current) return;
    deeplinkKlaar.current = true;
    setTafereel(TAFEREEL_BY_ID[deeplinkScene] || PARK_LEERMOMENTEN[deeplinkScene]);
    try { track("park_deeplink_open", { scene: deeplinkScene }); } catch { /* nooit laten breken */ }
    // Param strippen zodat verversen/deel-link niet opnieuw teleporteert.
    try {
      const u = new URL(window.location.href);
      u.searchParams.delete("scene");
      window.history.replaceState({}, "", u.pathname + (u.searchParams.toString() ? "?" + u.searchParams.toString() : ""));
    } catch { /* */ }
  }, [deeplinkScene, loaded]);
  const openTafereel = (id) => {
    if (placing || sculptMode || waterMode || groundMode || selectedIdx != null) return;
    const t = TAFEREEL_BY_ID[id];
    if (!t) return;
    setTafereel(t);
    spreek(`${t.titel}. ${t.praatje} Wist je dat? ${t.weetje}`);
    try { track("park_tafereel", { id }); } catch { /* nooit laten breken */ }
  };
  // 🌍 "Alles is benoembaar" (Mark 12 jul): tik op een park-object (stoomtrein,
  // later boom/achtbaan/…) → zelfde paneel als de taferelen: wat is het, hoe
  // werkt het, één klik naar het leerpad. Registry: parkLeermomenten.js.
  // 🗺️ Takenbord-data: welke leer-dingen staan er in dít park, per groep-band,
  // en welke lessen zijn al (deels) gedaan. Bron: parkTaken.js (23 aug) — nu
  // eindelijk gerenderd (samenhang-plan 2 sep 2026).
  const takenInfo = useMemo(() => {
    const aanwezig = new Set(placedItems.map((it) => LEERMOMENT_BY_ASSET[it.assetId]).filter(Boolean));
    const { taken } = berekenParkTaken(aanwezig, gedaneP);
    const perBand = new Map();
    for (const t of taken) {
      const b = perBand.get(t.band) || { band: t.band, groep: t.groep || "Groep", kleur: t.kleur, tekstKleur: t.tekstKleur, taken: [], gedaan: 0 };
      b.taken.push(t);
      if (t.gedaan) b.gedaan += 1;
      perBand.set(t.band, b);
    }
    const banden = [...perBand.values()].sort((a, b) => a.band - b.band);
    return { taken, banden, totaal: taken.length, gedaan: taken.filter((t) => t.gedaan).length };
  }, [placedItems, gedaneP]);
  const openLeermoment = (id, via = null) => {
    if (placing || sculptMode || waterMode || groundMode || selectedIdx != null) return;
    const m = PARK_LEERMOMENTEN[id];
    if (!m) return;
    // via="takenbord": vanuit de lijst geopend, niet ter plekke → telt NIET als
    // wandel-stop (anders is de wandeling in drie tikken "gelopen").
    setTafereel(via ? { ...m, via } : m);
    // Ook hardop voorlezen (tenzij de gids op stil staat) — "je hoort hoe alles werkt".
    spreek(`${m.titel}. ${m.praatje} Wist je dat? ${m.weetje}`);
    try { track("park_leermoment", { id }); } catch { /* nooit laten breken */ }
  };
  // 🔊 Rondloop-gids (Mark 12 jul): het maatje praat ONGEVRAAGD — hardop via de
  // luidspreker (Web Speech, gratis/lokaal) — wanneer je ~2 s bij een benoembaar
  // object blijft kijken (GidsWatcher in ZooScene). Stil-knop (🔇 in de HUD)
  // zet 'm helemaal uit; keuze blijft bewaard op dit apparaat.
  const [gidsStil, setGidsStilUI] = useState(() => gidsIsStil());
  const [gidsMoment, setGidsMoment] = useState(null);
  const gidsTimer = useRef(null);
  const toggleGidsStil = () => {
    const nieuw = !gidsStil;
    zetGidsStil(nieuw);
    setGidsStilUI(nieuw);
    parkAudioStil(nieuw); // één knop mute alles: gids-stem + sfeergeluid
    if (nieuw) { setGidsMoment(null); }
    try { track("park_gids_stil", { stil: nieuw }); } catch { /* */ }
  };
  // 🔊 Sfeergeluid (Mark 27 aug): wind/vogels/trein/raket, synthetisch via Web
  // Audio (parkAudio.js). Browsers blokkeren audio tot een user-gesture, dus
  // starten op de eerste pointerdown; volgt de bewaarde stil-keuze van de gids.
  useEffect(() => {
    const eersteTik = () => { parkAudioStart(gidsIsStil()); window.removeEventListener("pointerdown", eersteTik); };
    window.addEventListener("pointerdown", eersteTik);
    return () => { window.removeEventListener("pointerdown", eersteTik); parkAudioStop(); };
  }, []);
  const onGidsMoment = (id) => {
    if (gidsStil || rustFase() || tafereel || dialoog || menuOpen || panel || rekenVraag) return;
    const m = PARK_LEERMOMENTEN[id];
    if (!m) return;
    setGidsMoment(m);
    spreek(`${m.titel}. ${m.praatje}`);
    try { track("park_gids_praat", { id }); } catch { /* */ }
    clearTimeout(gidsTimer.current);
    gidsTimer.current = setTimeout(() => setGidsMoment(null), 16000);
  };
  // ✨ Magische poort (Mark 16 aug): loop je door de poort van een landmark, dan
  // "stap je de wereld van dat onderwerp binnen" → een korte flits en het leerpad
  // opent. Cooldown 30 s per object zodat je er niet in blijft hangen tijdens het
  // rondlopen/inrichten. Meting: park_poort_door + park_naar_leren (via=poort).
  // Samenhang-plan 2 sep 2026: de poort was een luik — flits en na 1,4 s
  // zónder vraag het park uit (kind-review: "voelt als een valkuil, dus mijd
  // ik ze" → 1 doorloop in 30 dagen). Nu een uitnodiging: kaart met de vraag
  // van die plek en "▶ Ga mee" / "✕ Later". park_naar_leren pas bij "Ga mee".
  const [poortKaart, setPoortKaart] = useState(null);
  const poortCooldown = useRef(new Map());
  const onPoortDoor = (assetId) => {
    if (placing || sculptMode || waterMode || groundMode || tafereel || dialoog || menuOpen || panel || rekenVraag || selectedIdx != null || poortKaart) return;
    const info = POORT_ASSETS[assetId];
    if (!info) return;
    const nu = Date.now();
    if (nu - (poortCooldown.current.get(assetId) || 0) < 30000) return;
    poortCooldown.current.set(assetId, nu);
    const m = PARK_LEERMOMENTEN[LEERMOMENT_BY_ASSET[assetId]];
    setPoortKaart({ assetId, label: info.label, leerpadId: info.leerpadId, emoji: m?.emoji || "✨", titel: m?.titel || info.label, vraag: m?.vraag || null, momentId: m?.id || null });
    if (!gidsStil) spreek(m?.vraag ? `${m.titel}. ${m.vraag}` : `Je staat bij de poort van ${info.label}.`);
    try { track("park_poort_door", { asset: assetId, pad: info.leerpadId }); } catch { /* */ }
  };
  const poortGaMee = () => {
    const k = poortKaart;
    setPoortKaart(null);
    stopSpreken();
    if (!k) return;
    try { track("park_naar_leren", { via: "poort", pad: k.leerpadId }); } catch { /* */ }
    if (k.leerpadId && onOpenLeerpad) onOpenLeerpad(k.leerpadId);
    else if (onOpenLeerpaden) onOpenLeerpaden();
  };
  // 👁️ Auto-first-person bij de piramide is WEGGEHAALD (Mark 17 aug: "gaat weer
  // draaien"). Het automatisch omschakelen van derde-persoon → door-de-ogen gaf
  // telkens een camera-snap (= een draai) bij naderen/weglopen. De piramide is nu
  // 3× zo groot, dus je leest de som op de vlakken prima in het gewone beeld; de
  // +/- en de studie-panelen blijven verschijnen als je in de buurt komt, en
  // "👁️ Door je eigen ogen" staat gewoon in het menu als je het zelf wilt.
  // Paneel dicht (welke weg dan ook) → stem ook stoppen; nooit napraten.
  useEffect(() => { if (!tafereel) stopSpreken(); }, [tafereel]);
  // Park-zwerm 17 jul: bij het VERLATEN van het park (🏠 of leermoment-deeplink)
  // praatte de gids-stem gewoon door over het volgende scherm heen, en de
  // 16s-timer vuurde setState op een unmounted component. Unmount-cleanup:
  useEffect(() => () => { stopSpreken(); clearTimeout(gidsTimer.current); }, []);
  const tafereelNaarLeren = (padOverride) => {
    if (!tafereel) return;
    // type-veld (park-zwerm): leermomenten en kabouter-taferelen delen dit
    // paneel — zonder label kon het dagrapport niet zien wélke ingang de
    // leer-conversie leverde. Event-naam blijft gelijk (queries breken niet).
    const isLeermoment = !!PARK_LEERMOMENTEN[tafereel.id];
    const padId = padOverride || tafereel.leerpadId;
    try { track("park_tafereel_naar_leren", { id: tafereel.id, pad: padId, type: isLeermoment ? "leermoment" : "tafereel" }); track("park_naar_leren", { via: isLeermoment ? "leermoment" : "tafereel", pad: padId }); } catch { /* */ }
    stopSpreken();
    setTafereel(null);
    if (padId && onOpenLeerpad) onOpenLeerpad(padId);
    else if (onOpenLeerpaden) onOpenLeerpaden();
  };
  // Vak waar het praatje over gaat: aanbevolen oefenpad, anders je beste vak.
  const praatVak = leerVolgende?.title || oefenPad?.subject || oefenPad?.title || goedeScore?.vak || "rekenen";
  // Sprint 2: één kiezer — eerst de volgende leerstap (klaargezet/herhalen/zwak), anders de oude aanbeveling.
  const volgendPadId = leerVolgende?.pathId || oefenPad?.id || null;
  const gaOefenen = () => {
    setDialoog(null);
    // Trechter-meting: vanuit het park doorgeklikt naar een leerpad (of de hub).
    try { track("park_naar_leren", { pad: volgendPadId, reden: leerVolgende?.reden || null }); } catch { /* nooit laten breken */ }
    if (volgendPadId && onOpenLeerpad) onOpenLeerpad(volgendPadId);
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
    setRekenPogingen(0);
    rekenVraagNr.current += 1; // nieuwe som → eigen (leeg) hulp-gesprek
    try { track("park_rekenvraag"); } catch { /* nooit laten breken */ }
  };
  // 🧮 Reken-vraag openen bij een 3D-leer-vorm (piramide/kubus/bol/kegel/koepel)
  // bij de HUIDIGE maat. Hergebruikt dezelfde modal + maatje-hulp als de kramen.
  const openVormVraag = (idx) => {
    const it = placedItems[idx];
    if (!it) return;
    setVormVraagIdx(idx);
    setRekenVraag(maakVormVraag(it.assetId, it.maat));
    setRekenUitslag(null);
    setRekenFout(null);
    setRekenHulpOpen(false);
    setRekenPogingen(0);
    rekenVraagNr.current += 1;
    try { track("park_vormvraag", { vorm: it.assetId }); } catch { /* nooit laten breken */ }
  };
  const beantwoordReken = (optie) => {
    if (!rekenVraag || rekenUitslag === "goed") return;
    if (optie === rekenVraag.antwoord) {
      setRekenUitslag("goed");
      try { track(rekenVraag.vorm ? "park_vormvraag_goed" : "park_rekenvraag_goed"); } catch { /* niet laten breken */ }
      // Bug-jacht 7/7: vastleggen óf de bonus is uitgekeerd — de succes-tekst
      // beloofde anders "+2 🪙" terwijl de cap al bereikt was.
      // Anti-gok (review 17 jul): met 3 opties en onbeperkt proberen loonde
      // elimineren — bonus daarom alléén bij goed-in-één (PARK-VISIE regel 5:
      // geen munten voor raden in het park zelf).
      if (rekenPogingen === 0 && rekenBonusRef.current < REKEN_BONUS_CAP) {
        rekenBonusRef.current += 1;
        setRekenBonusGegeven(true);
        setMeta((m) => (m ? { ...m, coins: m.coins + REKEN_BONUS } : m));
      } else {
        setRekenBonusGegeven(false);
      }
    } else {
      setRekenUitslag("fout");
      setRekenFout(optie);
      setRekenPogingen((p) => p + 1);
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

  // 🔺🧊 Het manipuleerbare leerobject waar de grootte-regelaar bij hoort: die je
  // nadert (nabij) of hebt geselecteerd (piramide, kleuren-kubus, …). Voedt de
  // +/- HUD + (voor de piramide) de studie-stand.
  const pyrIdx = (nabijePiramide != null && isManipuleerbaar(placedItems[nabijePiramide]?.assetId))
    ? nabijePiramide
    : (isManipuleerbaar(placedItems[selectedIdx]?.assetId) ? selectedIdx : null);
  const pyrLeerpad = pyrIdx != null ? (maatConfig(placedItems[pyrIdx]?.assetId)?.leerpad || "ruimtemeetkunde") : "ruimtemeetkunde";
  // Label tussen de +/- benoemt de vorm die je aanpast (Mark 17 aug: "grootte
  // piramide / grootte kubus" i.p.v. kaal "grootte").
  const GROOTTE_WOORD = { piramide: "piramide", kubus: "kubus", kegel: "kegel", cilinder: "cilinder", bol: "bol", halvebol: "koepel" };
  const pyrVormWoord = pyrIdx != null ? (GROOTTE_WOORD[placedItems[pyrIdx]?.assetId] || "") : "";
  const pyrGrootteLabel = `${manipMode === "draaien" ? "draaien" : "grootte"} ${pyrVormWoord}`.trim();

  return (
    <div style={{ position: "fixed", inset: 0, background: "#aaddff", overflow: "hidden" }}>
      {/* 🔺 Piramide-regelaar — vaste HUD rechtsonder bij de duim (Mark 16 aug:
          "plus/min onder in beeld bij de stuur-cirkel" + "als je ernaar kijkt,
          dat het dan verschijnt"). Toont zich zodra je bij/naar een piramide
          staat (of hem aantikt); spiegelbeeld van de loop-joystick linksonder. */}
      {(() => {
        if (pyrIdx == null) return null;
        return (
          <div style={{ position: "absolute", right: 14, bottom: 96, zIndex: 15, display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            {/* 🧮 Reken-vraag over DEZE vorm bij z'n huidige maat (Mark 17 aug:
                "van tonen → laten rekenen"). Kern = het schaal-inzicht 2×→8×. */}
            <button onClick={() => openVormVraag(pyrIdx)} style={{ border: "2px solid #cfe0ff", borderRadius: 14, padding: "10px 14px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#3a6ad8,#2546b0)", boxShadow: "0 4px 14px rgba(0,0,0,.35)", cursor: "pointer" }}>🧮 Reken mee →</button>
            <button onClick={() => onOpenLeerpad && onOpenLeerpad(pyrLeerpad)} style={{ border: "2px solid #ffe08a", borderRadius: 14, padding: "10px 14px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 4px 14px rgba(0,0,0,.35)", cursor: "pointer" }}>🚪 Inhoud oefenen →</button>
            {/* 📏/🔄 Wissel: bepaalt of de +/- vergroot/verkleint óf draait
                (Mark 17 aug: "als je 'm kunt draaien weet je echt hoe 't zit"). */}
            <div style={{ display: "flex", gap: 4, background: "rgba(20,28,44,0.78)", borderRadius: 999, padding: 4, boxShadow: "0 3px 10px rgba(0,0,0,.3)" }}>
              {[["grootte", "📏 grootte"], ["draaien", "🔄 draaien"]].map(([m, lbl]) => (
                <button key={m} onClick={() => setManipMode(m)} style={{ border: "none", borderRadius: 999, padding: "6px 12px", font: "800 12px system-ui", cursor: "pointer", touchAction: "manipulation", color: manipMode === m ? "#1a2233" : "#cfd6e0", background: manipMode === m ? "linear-gradient(135deg,#ffe08a,#ffc93c)" : "transparent" }}>{lbl}</button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(20,28,44,0.78)", borderRadius: 999, padding: "7px 12px", boxShadow: "0 4px 14px rgba(0,0,0,.35)" }}>
              <button onClick={() => manipMode === "draaien" ? draaiObject(pyrIdx, -1) : wijzigMaat(pyrIdx, -1)} title={manipMode === "draaien" ? "Draai naar links" : "Kleiner"} style={{ border: "none", borderRadius: "50%", width: 54, height: 54, font: "800 27px system-ui", color: "#7a5b00", background: "linear-gradient(135deg,#ffe08a,#ffc93c)", boxShadow: "0 3px 8px rgba(0,0,0,.3)", cursor: "pointer", touchAction: "manipulation" }}>{manipMode === "draaien" ? "↺" : "➖"}</button>
              <span style={{ color: "#fff", font: "800 13px system-ui", whiteSpace: "nowrap" }}>{pyrGrootteLabel}</span>
              <button onClick={() => manipMode === "draaien" ? draaiObject(pyrIdx, 1) : wijzigMaat(pyrIdx, 1)} title={manipMode === "draaien" ? "Draai naar rechts" : "Groter"} style={{ border: "none", borderRadius: "50%", width: 54, height: 54, font: "800 27px system-ui", color: "#7a5b00", background: "linear-gradient(135deg,#ffe08a,#ffc93c)", boxShadow: "0 3px 8px rgba(0,0,0,.3)", cursor: "pointer", touchAction: "manipulation" }}>{manipMode === "draaien" ? "↻" : "➕"}</button>
            </div>
          </div>
        );
      })()}
      {/* Laad-fout: park kon niet uit de database komen. NIETS tonen dat op een
          leeg/nieuw park lijkt (en niets opslaan) — alleen opnieuw proberen.
          Zo kan een netwerk-blip nooit meer een bestaand park overschrijven. */}
      {laadFout && (
        <div style={{ position: "absolute", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(20,35,55,0.85)" }}>
          <div style={{ background: "#fff", borderRadius: 18, padding: "26px 28px", maxWidth: 340, textAlign: "center", boxShadow: "0 12px 40px rgba(0,0,0,.35)" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>📡</div>
            <div style={{ font: "800 18px system-ui", color: "#234", marginBottom: 6 }}>Je park kon niet laden</div>
            <div style={{ font: "400 13.5px system-ui", color: "#567", lineHeight: 1.5, marginBottom: 16 }}>
              Geen zorgen — je park is veilig opgeslagen. Controleer je internet en probeer het opnieuw.
            </div>
            <button
              onClick={() => { setLaadFout(false); setLaadPoging((p) => p + 1); }}
              style={{ border: "none", borderRadius: 999, padding: "12px 26px", font: "800 15px system-ui", color: "#fff", background: "#2e7d32", cursor: "pointer", minHeight: 44 }}
            >
              🔄 Opnieuw proberen
            </button>
          </div>
        </div>
      )}
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
          {/* 🗺️ Takenbord: wat kan ik hier leren + x/y gedaan (samenhang-plan 2 sep). */}
          <button
            onClick={() => { setTakenOpen(true); gedanePaden(naam).then((gp) => setGedaneP(gp)).catch(() => {}); try { track("park_takenbord_open", { gedaan: takenInfo.gedaan, totaal: takenInfo.totaal }); } catch { /* */ } }}
            title="Wat kan ik in mijn park leren?"
            style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "7px 12px", font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap" }}
          >
            🗺️ Taken {takenInfo.gedaan}/{takenInfo.totaal}
          </button>
          {/* 🏆 Prijzenkast (beloning-lus 12 aug): je échte diploma's — beste
              score per onderwerp — hangen ín je park. Leren vult de kast. */}
          <button
            onClick={() => { setPrijzenkast(true); try { track("park_prijzenkast_open", {}); } catch { /* */ } }}
            title="Jouw prijzenkast: diploma's van je oefentoetsen"
            style={{ pointerEvents: "auto", border: "none", borderRadius: 999, width: 38, height: 38, font: "800 16px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}
          >
            🏆
          </button>
          {/* 🔊 Parkgids aan/uit: praat hardop over wat je in het park ziet. */}
          <button onClick={toggleGidsStil} title={gidsStil ? "Geluid weer aanzetten (gids + parkgeluiden)" : "Alle geluid uitzetten (gids + parkgeluiden)"} style={{ pointerEvents: "auto", border: "none", borderRadius: 999, width: 38, height: 38, font: "800 15px system-ui", color: "#234", background: gidsStil ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer", opacity: gidsStil ? 0.8 : 1 }}>{gidsStil ? "🔇" : "🔊"}</button>
          {/* Alle overige functies gebundeld in één ☰-menu → tijdens spelen bijna alleen park in beeld. */}
          <button onClick={() => setMenuOpen((v) => !v)} title="Menu" style={{ pointerEvents: "auto", border: (menuOpen || followCam || firstPerson || sculptMode || waterMode || groundMode || bouwen) ? "2px solid #2e7d32" : "none", borderRadius: 999, width: 38, height: 38, font: "800 17px system-ui", color: "#234", background: menuOpen ? "#cdeccb" : "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>☰</button>
          <button onClick={onHome} style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "8px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>← Terug</button>
        </div>
      </div>

      {/* 🥕🦴 In je hand: gekocht dier-voer, tot je het echt geeft (Mark 26 aug). */}
      {inHand && (
        <div style={{ position: "absolute", top: 104, left: "50%", transform: "translateX(-50%)", zIndex: 11, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center", maxWidth: "94vw" }}>
          <span style={{ font: "800 12.5px system-ui", color: "#234", background: "rgba(255,255,255,0.94)", borderRadius: 999, padding: "8px 14px", boxShadow: "0 3px 10px rgba(0,0,0,.25)", textAlign: "center" }}>
            {inHand === "wortel" ? "🥕 Wortel in je hand — tik op een dier om 'm te geven" : "🦴 Bot in je hand — tik op een hond, of:"}
          </span>
          {inHand === "bot" && (
            <button onClick={geefBotAanMaatje} style={{ border: "none", borderRadius: 999, padding: "8px 14px", font: "800 12.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#f59e0b,#d97706)", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>🦴 Geef aan {buddyNaamEff || "je maatje"}</button>
          )}
          <button onClick={legVoerTerug} title="Terugleggen (muntjes terug)" style={{ border: "none", borderRadius: 999, width: 30, height: 30, font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.8)", boxShadow: "0 2px 8px rgba(0,0,0,.2)", cursor: "pointer" }}>✕</button>
        </div>
      )}

      {/* 🏆 Prijzenkast-overlay: de diploma-kast (echte toets-resultaten) ín
          het park — de tuin-les: zichtbare groei, en leren vult de kast. */}
      {prijzenkast && (
        <div onClick={() => setPrijzenkast(false)} style={{ position: "absolute", inset: 0, zIndex: 15, background: "rgba(8,16,10,0.6)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", overflowY: "auto" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 520, margin: "0 auto", padding: "18px 16px calc(28px + env(safe-area-inset-bottom))" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 4 }}>
              <div style={{ color: "#fff", font: "900 20px system-ui", textShadow: "0 1px 6px rgba(0,0,0,.4)" }}>🏆 Jouw prijzenkast</div>
              <button onClick={() => setPrijzenkast(false)} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, width: 40, height: 40, font: "800 16px system-ui", color: "#fff", background: "rgba(255,255,255,0.14)", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ color: "rgba(255,255,255,0.75)", font: "700 12.5px system-ui", margin: "0 0 14px" }}>
              Elke oefentoets die je afmaakt hangt hier als diploma — met je score en de datum. Printen mag!
            </div>
            <div style={{ borderRadius: 16, background: "rgba(10,20,14,0.55)", border: "1px solid rgba(255,213,79,0.3)", padding: "14px 14px" }}>
              <DiplomaKast player={(userName || "").trim()} naamVoorDiploma={(userName || "").trim()} bron="park" />
            </div>
            {(onOpenLeerpaden || onOpenLeerpad) && (
              <button
                onClick={() => { setPrijzenkast(false); try { track("park_naar_leren", { via: "prijzenkast" }); } catch { /* */ } if (onOpenLeerpaden) onOpenLeerpaden(); else if (onOpenLeerpad) onOpenLeerpad(); }}
                style={{ marginTop: 12, width: "100%", border: "none", borderRadius: 12, padding: "13px", font: "900 15px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 4px 14px rgba(46,158,79,.4)", cursor: "pointer" }}
              >
                📚 Verdien je volgende diploma →
              </button>
            )}
          </div>
        </div>
      )}

      {/* ☰-menu: volledig scherm, frosted-glass, alle extra functies gegroepeerd.
          Tik buiten de inhoud of op ✕ = terug het park in. */}
      {menuOpen && (
        <div onClick={sluitMenu} style={{ position: "absolute", inset: 0, zIndex: 14, background: "rgba(8,16,10,0.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", overflowY: "auto", animation: "zooMenuFade .18s ease-out" }}>
          <style>{`@keyframes zooMenuFade{from{opacity:0}to{opacity:1}}@keyframes zooMenuIn{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}`}</style>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 620, margin: "0 auto", padding: "16px 16px calc(28px + env(safe-area-inset-bottom))", animation: "zooMenuIn .22s ease-out" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <div onClick={geheimeTik} style={{ color: "#fff", font: "900 20px system-ui", textShadow: "0 1px 6px rgba(0,0,0,.4)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", userSelect: "none" }}>🐾 {parkNaam}</div>
              <button onClick={sluitMenu} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, width: 40, height: 40, font: "800 16px system-ui", color: "#fff", background: "rgba(255,255,255,0.14)", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ color: "rgba(255,255,255,0.75)", font: "700 12.5px system-ui", margin: "6px 0 16px" }}>
              🪙 {coins}{streak > 1 ? ` · 🔥 ${streak} dagen op rij` : ""} · 📈 je park verdient 🪙{Math.min(PARK_INKOMST_CAP_PER_DAG, inkomstenPerDag(placedItems, kindVan))} per dag{inkomstenPerDag(placedItems, kindVan) > PARK_INKOMST_CAP_PER_DAG ? ` (max ${PARK_INKOMST_CAP_PER_DAG} — 🎓 leren levert méér op!)` : ""}
            </div>

            {/* Bouwen = de grote actie bovenaan. */}
            <button onClick={() => doeEnSluit(() => { setBouwen(true); setShopCat(null); setFirstPerson(false); setBuddyEye(false); setRideTrain(false); flits(`📈 Je park verdient 🪙${inkomstenPerDag(placedItems, kindVan)} per dag — kies hieronder wat je wilt bouwen`); })} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, border: "none", borderRadius: 18, padding: "15px 18px", font: "900 16px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 6px 22px rgba(0,0,0,.32)", cursor: "pointer", textAlign: "left" }}>
              <span style={{ fontSize: 28, lineHeight: 1 }}>🏗️</span>
              <span>Bouwen<br /><span style={{ font: "700 12px system-ui", opacity: 0.9 }}>dieren, hekken, gebouwen en meer neerzetten</span></span>
            </button>

            <div style={menuKop}>📷 Camera</div>
            <div style={menuGrid}>
              <MenuTegel emoji="👁️" label="Door je eigen ogen" fn={toggleFirstPerson} actief={firstPerson} />
              {buddyId && <MenuTegel emoji="🐉" label="Door de ogen van je buddy" fn={() => { setBuddyEye((v) => !v); setFirstPerson(false); setFollowCam(false); }} actief={buddyEye} />}
              {/* ≥2 rails: pas dan bestaat er een rijdbare route (ZooScene railRoute) — bug-jacht 7/7. */}
              {placedItems.filter((it) => it.assetId === "rail").length >= 2 && <MenuTegel emoji="🚂" label="Meerijden met de trein" fn={() => { setRideTrain((v) => !v); setFirstPerson(false); setFollowCam(false); }} actief={rideTrain} />}
              <MenuTegel emoji="🗺️" label="Vogelvlucht (ver uitzoomen)" fn={() => { setFollowCam((v) => !v); setFirstPerson(false); setBuddyEye(false); }} actief={followCam} />
            </div>

            <div style={menuKop}>🛠️ Landschap</div>
            <div style={menuGrid}>
              <MenuTegel emoji="⛰️" label="Heuvels boetseren" fn={() => { setSculptMode((v) => !v); setWaterMode(false); setGroundMode(false); setPlacing(null); setSelectedIdx(null); }} actief={sculptMode} />
              <MenuTegel emoji="💧" label="Water / meertjes" fn={() => { setWaterMode((v) => !v); setSculptMode(false); setGroundMode(false); setPlacing(null); setSelectedIdx(null); }} actief={waterMode} />
              <MenuTegel emoji="🏖️" label="Grond schilderen" fn={() => { setGroundMode((v) => !v); setSculptMode(false); setWaterMode(false); setPlacing(null); setSelectedIdx(null); }} actief={groundMode} />
              <MenuTegel emoji="🏗️" label="Auto-bouw (kies een bouwplan)" fn={() => { setBouwPlannen(maakBouwplannen()); setPanel("autobouw"); }} />
            </div>

            <div style={menuKop}>🏡 Mijn park</div>
            <div style={menuGrid}>
              <MenuTegel emoji="👤" label="Mijn poppetje kiezen" fn={() => setPanel("karakter")} />
              <MenuTegel emoji="🐾" label="Kies je maatje" fn={openBuddyPicker} />
              <MenuTegel emoji="🫧" label="Maatje-weetjes wissen" fn={() => { wisBuddyWeetjes(); setMenuOpen(false); flits("Je maatje is alles weer vergeten — hij stelt zijn vraagjes gewoon opnieuw. 🐾"); }} />
              {onOpenMaatje && <MenuTegel emoji="📱" label="Mijn maatje (altijd bij je)" fn={onOpenMaatje} />}
              <MenuTegel emoji="💾" label="Park opslaan" fn={opslaan} />
              <MenuTegel emoji="📤" label="Delen met een vriend" fn={openDelen} />
              {onOpenGalerij && <MenuTegel emoji="🌍" label="Park-galerij bekijken" fn={onOpenGalerij} />}
              <MenuTegel emoji="♻️" label="Opnieuw beginnen" fn={() => setPanel("reset")} />
            </div>

            <div style={menuKop}>🎮 Extra</div>
            <div style={menuGrid}>
              <MenuTegel emoji="ℹ️" label="Hoe werkt het?" fn={() => setPanel("uitleg")} />
              <MenuTegel emoji="📖" label="Diergids" fn={() => setPanel("gids")} />
            </div>
          </div>
        </div>
      )}

      {/* Onboarding: vers park → wijs het kind naar de winkelbalk. */}
      {versPark && !welkomWeg && bouwen && !shopCat && !placing && !dialoog && !menuOpen && (
        <div style={{ position: "absolute", left: "50%", bottom: 150, transform: "translateX(-50%)", zIndex: 9, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, pointerEvents: "none", maxWidth: "92%" }}>
          <div style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: 10, background: "#fffef8", color: "#234", borderRadius: 14, padding: "10px 12px 10px 14px", boxShadow: "0 6px 20px rgba(0,0,0,.28)", font: "800 13.5px system-ui" }}>
            <span style={{ fontSize: 20 }}>👋</span>
            <span>Welkom{naam ? ` ${naam}` : ""}! Tik hieronder op 🦊 Dieren en zet een dier in je park</span>
            <button onClick={() => setWelkomWeg(true)} style={{ border: "none", borderRadius: 999, width: 26, height: 26, font: "700 13px system-ui", background: "#eee", cursor: "pointer", flex: "0 0 auto" }}>✕</button>
          </div>
          <span style={{ fontSize: 22, lineHeight: 1, filter: "drop-shadow(0 2px 3px rgba(0,0,0,.3))" }}>⬇️</span>
        </div>
      )}

      {/* Beloning-melding bij binnenkomst. */}
      {reward && (
        <div style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", zIndex: 11, background: "rgba(255,255,255,0.96)", color: "#234", borderRadius: 14, padding: "10px 16px", boxShadow: "0 6px 20px rgba(0,0,0,.25)", font: "700 14px system-ui", textAlign: "center", maxWidth: "90%" }}>
          {reward.total > 0 ? `🎉 +${reward.total} muntjes!` : (reward.verstopt > 0 ? "🐾 Er mist een dier — ga het zoeken!" : "")}
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
          {reward.verstopt > 0 && (
            <div style={{ font: "700 12px system-ui", color: "#b46a00", marginTop: 4 }}>
              {reward.verstoptNamen?.length
                ? `🙈 ${reward.verstoptNamen.join(" en ")} ${reward.verstopt > 1 ? "hebben" : "heeft"} zich verstopt — te lang geen hooi. Geef ${reward.verstopt > 1 ? "ze" : "het"} 🌾 en ${reward.verstopt > 1 ? "ze komen" : "het komt"} weer tevoorschijn!`
                : "🙈 Een dier heeft zich verstopt — geef het 🌾 en het komt weer tevoorschijn!"}
            </div>
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
                <div style={{ font: "900 16px system-ui" }}>📊 {KRAAM_SOORTEN[kraamOverzicht]?.label} — kassa-overzicht</div>
                <div style={{ font: "700 12px system-ui", opacity: 0.92, marginTop: 3 }}>📋 In de aanbieding: {kr.emoji} {kr.label} voor {kr.verkoop} 🪙</div>
              </div>
              <div style={{ padding: "10px 18px 4px" }}>
                <Rij label="Verkocht" sub="(sinds je het park opende)" waarde={`${st.count} stuks`} />
                <Rij label="Opbrengst" sub="(alles wat binnenkwam)" waarde={`${st.opbrengst} 🪙`} kleur="#0a7d3c" />
                <Rij label={`Inkoopkosten`} sub={`(${st.count} × ${kr.inkoop} 🪙)`} waarde={`− ${st.inkoopkosten} 🪙`} kleur="#c0392b" />
                <Rij label="Brutowinst" waarde={`${brutowinst} 🪙`} sterk kleur={brutowinst >= 0 ? "#0a7d3c" : "#c0392b"} />
                <Rij label="🧑 Verkopers-loon" sub="(vaste kost / dag)" waarde={`− ${VERKOPER_LOON} 🪙`} kleur="#c0392b" />
                <Rij label="Nettowinst" waarde={`${netto} 🪙`} sterk kleur={netto >= 0 ? "#0a7d3c" : "#c0392b"} />
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
      {/* ParkErrorBoundary (park-zwerm 17 jul): één GLB-/WebGL-fout mag nooit
          meer de hele app omgooien — kindvriendelijke fallback + retry via
          key-bump (verse mount van de scene). */}
      <ParkErrorBoundary onRetry={() => setSceneKey((k) => k + 1)} onHome={onHome}>
      <Suspense fallback={<div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#3a5a2a", font: "600 15px system-ui" }}>Park laden…</div>}>
        <ZooScene
          key={sceneKey}
          wandelToon={wandeling && !wandeling.klaar ? [wandeling.routeId] : null}
          wandelDoel={wandelDoelPos}
          onWandelBereikt={wandelBereikt}
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
          climbRef={climbRef}
          spelerNaam={naam}
          goedeScore={goedeScore}
          zwakVak={zwakVak}
          onTapBezoeker={BEZOEKER_PRAATJE_AAN ? tapBezoeker : undefined}
          onTafereel={openTafereel}
          onLeermoment={openLeermoment}
          onGidsMoment={onGidsMoment}
          onMaat={wijzigMaat}
          onOefenen={(pid) => onOpenLeerpad && onOpenLeerpad(pid)}
          onNearPiramide={setNabijePiramide}
          onPoortDoor={onPoortDoor}
          hierRef={hierRef}
          studiePiramideIdx={pyrIdx}
          leerStappenPerPad={leerStappenPerPad}
          dinoHint={dinoHint}
          spawn={deeplinkSpawn}
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
          draagSnack={draagSnack}
          onSnackOp={snackOp}
          onZeppelinRit={(v) => {
            // Instappen sluit alle doe-modi: de bouw-balk lag anders bóven het
            // cockpit-paneel en dan kon je niet sturen (Mark 26 aug, screenshot).
            setZeppelinRit(v);
            if (v) { setBouwen(false); setShopCat(null); setPlacing(null); setSelectedIdx(null); setMenuOpen(false); setFirstPerson(false); setBuddyEye(false); }
          }}
          onContextLost={() => flits("Het park viel even stil — blijft het beeld bevroren? Doe de pagina dan opnieuw (veeg omlaag of druk F5), je park is veilig opgeslagen.")}
        />
      </Suspense>
      </ParkErrorBoundary>
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
            try { track("park_naar_leren", { via: "buddy_chat", pad: volgendPadId }); } catch { /* nooit laten breken */ }
            if (volgendPadId && onOpenLeerpad) onOpenLeerpad(volgendPadId);
            else if (onOpenLeerpaden) onOpenLeerpaden();
          }}
          facts={{ naam, zwakVak }}
          hier={buddyChatOpen ? hierContextVoor(hierRef.current) : null}
          objecten={buddyChatOpen ? takenInfo.taken.map((t) => ({ titel: PARK_LEERMOMENTEN[t.momentId]?.titel || t.label, les: t.label })) : null}
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
      {bouwTip && !menuOpen && !placing && !dialoog && pyrIdx == null && (
        <div style={{ position: "absolute", left: "50%", bottom: bouwen ? 170 : 24, transform: "translateX(-50%)", zIndex: 13, width: "min(420px, 94vw)", background: "#fffef8", borderRadius: 16, boxShadow: "0 10px 32px rgba(0,0,0,.35)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28, flex: "0 0 auto" }}>{BUDDY_BY_ID[buddyId]?.emoji || "🐾"}</span>
          <div style={{ flex: 1, font: "700 13.5px/1.4 system-ui", color: "#234" }}>
            <b>{buddyNaamEff || "Je maatje"}</b>: "Hoi{naam ? ` ${naam}` : ""}! Wist je dat je hier zélf mag bouwen? Een huis, een hok, een toren — wat jij wilt! 🧱"
          </div>
          <button onClick={() => { sluitBouwTip(); setBouwen(true); setShopCat("blok"); setFirstPerson(false); }} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "10px 14px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>🧱 Laat zien</button>
          <button onClick={sluitBouwTip} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, width: 28, height: 28, font: "700 13px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
        </div>
      )}

      {/* 📚 Leer-invite: het maatje maakt van het park actief een brug naar
          leren — met muntjes-beloning als motief (P1 dagrapport 18 jul). */}
      {leerTip && !bouwTip && !menuOpen && !placing && !dialoog && !buddyChatOpen && pyrIdx == null && (
        <div style={{ position: "absolute", left: "50%", bottom: bouwen ? 170 : 24, transform: "translateX(-50%)", zIndex: 13, width: "min(440px, 94vw)", background: "#fffef8", borderRadius: 16, boxShadow: "0 10px 32px rgba(0,0,0,.35)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28, flex: "0 0 auto" }}>{BUDDY_BY_ID[buddyId]?.emoji || "🐾"}</span>
          <div style={{ flex: 1, font: "700 13.5px/1.4 system-ui", color: "#234" }}>
            <b>{buddyNaamEff || "Je maatje"}</b>: "{leerZinVoor(leerVolgende) || (oefenPad?.title ? `Zullen we samen met ${oefenPad.title} oefenen? Dan verdien je munten voor je park! 🪙` : "Zullen we samen iets gaan oefenen? Dan verdien je munten voor je park! 🪙")}"
          </div>
          <button
            onClick={() => {
              setLeerTip(false);
              try { track("park_naar_leren", { via: "gids_invite", pad: volgendPadId, reden: leerVolgende?.reden || null }); } catch { /* */ }
              if (volgendPadId && onOpenLeerpad) onOpenLeerpad(volgendPadId);
              else if (onOpenLeerpaden) onOpenLeerpaden();
            }}
            style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "10px 14px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}
          >📚 Ga oefenen</button>
          <button onClick={() => setLeerTip(false)} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, width: 28, height: 28, font: "700 13px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
        </div>
      )}

      {/* 💬 Dagelijks kennismakings-vraagje: het maatje leert je écht kennen.
          Antwoord blijft lokaal op het apparaat (geen adres/school gevraagd). */}
      {buddyVraag && !bouwTip && !menuOpen && !placing && !dialoog && !(versPark && !welkomWeg) && pyrIdx == null && (
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
          // Staat de grootte-regelaar rechtsonder (bij een leer-vorm)? Zet de
          // lopen/zweven-knop dan weg van de +/- (Mark 17 aug: "de plus en min
          // staat voor lopen/vliegen"). Op de laptop is linksonder vrij (geen
          // loop-joystick) → daar naartoe; op de telefoon omhoog boven de +/-.
          style={{ position: "absolute", zIndex: 16, ...(pyrIdx != null ? (COARSE_POINTER ? { right: 16, bottom: 240 } : { left: 16, bottom: 24 }) : { right: 16, bottom: 150 }), border: zweef ? "3px solid #fff" : "none", borderRadius: "50%", width: 54, height: 54, font: "700 22px system-ui", background: zweef ? "linear-gradient(135deg,#38bdf8,#2563eb)" : "rgba(255,255,255,0.92)", boxShadow: "0 4px 14px rgba(0,0,0,.28)", cursor: "pointer" }}
        >
          {zweef ? "🚶" : "🪽"}
        </button>
      )}

      {/* 🪽 Hoogte-knoppen: alleen tijdens zweven. Vasthouden = soepel stijgen/
          dalen, zodat je hoog boven het park kunt hangen om het hele pad te zien
          (Mark 23 aug). Laten los = blijf hangen op die hoogte. */}
      {zweef && !firstPerson && rideIdx == null && !rideTrain && (() => {
        const stop = () => { climbRef.current = 0; };
        const knop = (emoji, richting, bottom, titel) => (
          <button
            title={titel}
            onPointerDown={(e) => { e.preventDefault(); climbRef.current = richting; }}
            onPointerUp={stop}
            onPointerLeave={stop}
            onPointerCancel={stop}
            onContextMenu={(e) => e.preventDefault()}
            style={{ position: "absolute", zIndex: 16, right: 80, bottom, touchAction: "none", border: "none", borderRadius: "50%", width: 54, height: 54, font: "700 22px system-ui", background: "rgba(255,255,255,0.92)", boxShadow: "0 4px 14px rgba(0,0,0,.28)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {emoji}
          </button>
        );
        const laag = pyrIdx != null && COARSE_POINTER ? 240 : 150;
        return (
          <>
            {knop("⬆️", 1, laag + 62, "Hoger vliegen (vasthouden)")}
            {knop("⬇️", -1, laag, "Lager vliegen (vasthouden)")}
          </>
        );
      })()}

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
      {!zeppelinRit && (bouwen || placing || sculptMode || waterMode || groundMode || selectedIdx != null) && (
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
            {/* 😋 Zelf klant zijn (Mark 26 aug): koop iets bij je eigen kraam en eet
                het echt op — je betaalt alleen de inkoop. De patatkraam verkoopt
                ook dier-voer: een wortel voor de dieren, een bot voor je maatje. */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              <button onClick={() => koopSnackZelf(selProdukt, selKraam?.inkoop ?? selProdukt?.inkoop ?? 3, selVoorziet)} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#f59e0b,#d97706)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>
                {selProdukt?.emoji} Zelf {selVoorziet === "drink" ? "drinken" : "eten"} — {selKraam?.inkoop ?? selProdukt?.inkoop} 🪙
              </button>
              {selVoorziet === "food" && (
                <button onClick={() => koopVoer("wortel")} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🥕 Wortel voor een dier — 2 🪙</button>
              )}
              {selVoorziet === "food" && (
                <button onClick={() => koopVoer("bot")} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🦴 Bot voor {buddyNaamEff || "je maatje"} — 3 🪙</button>
              )}
            </div>
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
                bij de trein/rails/station via het bestaande meerijden (#7.4). */}
            {(selKind === "attraction" || placedItems[selectedIdx]?.assetId === "station") && (
              <button
                onClick={() => {
                  const pr = getAsset(placedItems[selectedIdx]?.assetId)?.procedural;
                  // 🚂 Instappen bij de trein, de rails ÉN het station (Mark 22 aug,
                  // park-megabuild #7.4 — Sem 8 jr: "ik mag er niet in"). Het station
                  // is de natuurlijke instapplek → tik erop = meerijden als park-taxi.
                  if (pr === "rail" || pr === "train" || pr === "station") {
                    // Bug-jacht 7/7: zonder rijdbare route (≥2 rails) bevroor de
                    // camera en verdween de speler — eerst rails, dan instappen.
                    const rails = placedItems.filter((x) => x.assetId === "rail").length;
                    if (rails < 2) { flits("Leg eerst een paar rails neer — dan kan het treintje rijden 🛤️"); return; }
                    setRideTrain(true);
                    flits("🚂 Instappen maar — je rijdt een rondje door het park!");
                  }
                  else { setRideIdx(selectedIdx); }
                  setFirstPerson(false); setBuddyEye(false); setFollowCam(false);
                  sluitSelectie();
                }}
                style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}
              >
                🎠 Instappen
              </button>
            )}
            {/* De piramide-regelaar (+/- + poort) staat als losse HUD rechtsonder
                bij de duim (zie onder in de render), niet in deze drukke rij. */}
            {/* 💡 Benoembaar object (Mark 12 jul): leg uit wat het is + hoe het
                werkt + leerpad-link — het maatje leest het ook hardop voor. */}
            {LEERMOMENT_BY_ASSET[placedItems[selectedIdx]?.assetId] && (
              <button
                onClick={() => {
                  const m = PARK_LEERMOMENTEN[LEERMOMENT_BY_ASSET[placedItems[selectedIdx]?.assetId]];
                  if (!m) return;
                  sluitSelectie();
                  setTafereel(m);
                  spreek(`${m.titel}. ${m.praatje} Wist je dat? ${m.weetje}`);
                  try { track("park_leermoment", { id: m.id, via: "selectie" }); } catch { /* */ }
                }}
                style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}
              >
                💡 Hoe werkt dit?
              </button>
            )}
            {selKind === "animal" && inHand && (
              <button onClick={() => geefVoerAanDier(selectedIdx)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#f59e0b,#d97706)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>{VOER[inHand].emoji} {inHand === "wortel" ? "Wortel geven" : "Bot geven"}</button>
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
            {/* 📱 Max 1 rij tegelijk (Mark 14 jul, telefoon-test): stap 1 =
                alleen categorieën, stap 2 = alleen de items van die categorie
                in één horizontaal scrollbare rij. De oude status-regel
                ("verdient X/dag · kies iets…") is vervangen door een korte
                eenmalige flits bij het openen van de bouw-modus. */}
            {!shopCat && (
            <div style={{ display: "flex", gap: 6, flexWrap: "nowrap", overflowX: "auto", WebkitOverflowScrolling: "touch", maxWidth: "100%", padding: "2px 4px" }}>
              {SHOP_CATS.map((c) => (
                <button key={c.key} onClick={() => setShopCat(c.key)} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "8px 13px", font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 6px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap" }}>{c.label}</button>
              ))}
              <button onClick={() => { setBouwen(false); setPlacing(null); setSelectedIdx(null); setShopCat(null); }} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "8px 13px", font: "800 13px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 2px 6px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap" }}>✓ Klaar</button>
            </div>
            )}
            {shopCat && (
            <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "flex-start", flexWrap: "nowrap", overflowX: "auto", WebkitOverflowScrolling: "touch", maxWidth: "100%", padding: "2px 4px 4px" }}>
              <button onClick={() => { setShopCat(null); setPlacing(null); }} style={{ flex: "0 0 auto", border: "none", borderRadius: 999, padding: "8px 13px", font: "800 13px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 2px 6px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap" }}>← {SHOP_CATS.find((c) => c.key === shopCat)?.label || "Terug"}</button>
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
                      <span style={{ font: "800 10px system-ui", color: "#8a7a4a", whiteSpace: "nowrap" }}>{p.emoji} nog {rest} lesje{rest === 1 ? "" : "s"}</span>
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
              {/* Dieren-tab: kleurige knoppen i.p.v. dropdown (review 17 jul: de
                  onboarding wijst een nieuw kind naar déze tab — een kale
                  <select> was daar het eerste wat het zag, terwijl de blokken
                  al knoppen kregen omdat "een dropdown onvindbaar" bleek). */}
              {shopCat === "dier" && (SHOP_CATS.find((c) => c.key === "dier")?.items || []).map((p) => {
                const actiefDier = placing && placing.assetId === p.assetId && placing.moveIdx == null;
                const teDuur = coins < p.price;
                return (
                  <button
                    key={p.assetId}
                    onClick={() => startKopen(p)}
                    disabled={teDuur}
                    title={teDuur ? `${p.label} — nog ${p.price - coins} 🪙 sparen` : `${p.label} kopen`}
                    style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, border: actiefDier ? "3px solid #2e7d32" : "2px solid rgba(255,255,255,0.7)", borderRadius: 12, padding: "6px 10px", background: teDuur ? "rgba(200,200,200,0.75)" : "rgba(255,255,255,0.96)", boxShadow: actiefDier ? "0 0 0 3px rgba(46,125,50,0.35), 0 3px 10px rgba(0,0,0,.3)" : "0 2px 8px rgba(0,0,0,.22)", cursor: teDuur ? "not-allowed" : "pointer", transform: actiefDier ? "scale(1.08)" : "none", opacity: teDuur ? 0.75 : 1 }}
                  >
                    <span style={{ fontSize: 22, lineHeight: 1, filter: teDuur ? "grayscale(1)" : "none" }}>{p.emoji}</span>
                    <span style={{ font: "800 10.5px system-ui", color: "#234", whiteSpace: "nowrap" }}>{p.label} {p.price}🪙</span>
                  </button>
                );
              })}
              {/* Overige tabs: compacte dropdown (Mark 1 jul: rustiger scherm). */}
              {shopCat !== "blok" && shopCat !== "dier" && (() => {
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
                // Souvenirs (nu 9) ontdek je via het klaar-scherm van hun leerpad —
                // hier alleen tonen als ze verdiend zijn, anders wordt de dieren-
                // balk een muur van sloten (17 jul).
                return getAsset(v.assetId)?.procedural !== "souvenir";
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
                  ? (rest === 0 ? "bijna vrij — speel verder ✨" : `nog ${rest} lesje${rest === 1 ? "" : "s"} leren ✨`)
                  : "leer sparen → speel vrij";
                return (
                  <button key={v.assetId} onClick={() => { try { track("zoo_unlock_klik", { dier: v.assetId, pad: v.pad, stappen: v.stappen }); } catch { /* */ } if (v.pad && onOpenLeerpad) onOpenLeerpad(v.pad); else if (onOpenLeerpaden) onOpenLeerpaden(); else if (onOpenLeerpad) onOpenLeerpad(v.pad); }} title={`Speel ${v.naam} vrij door te leren`} style={{ flex: "0 0 auto", border: "2px dashed #c9b06a", borderRadius: 14, padding: "8px 12px", font: "800 13px system-ui", color: "#8a7a4a", background: "rgba(255,255,255,0.55)", boxShadow: "0 3px 10px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap", textAlign: "center" }}>
                    <span style={{ fontSize: 18 }}>🔒</span> {v.naam}<br />
                    <span style={{ fontSize: 10, opacity: 0.9 }}>{sub}</span>
                  </button>
                );
              })}
            </div>
            )}
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
                // Anti-gok: na 2 foute tikken eerst het maatje om hulp vragen —
                // anders is het derde antwoord gratis te vinden door eliminatie.
                const opSlot = rekenUitslag !== "goed" && rekenPogingen >= 2 && !rekenHulpOpen;
                const dicht = rekenUitslag === "goed" || opSlot;
                return (
                  <button
                    key={opt}
                    onClick={() => beantwoordReken(opt)}
                    disabled={dicht}
                    style={{ flex: "1 1 28%", border: "none", borderRadius: 14, padding: "14px 8px", font: "900 18px system-ui", color: goedGekozen ? "#fff" : "#234", background: goedGekozen ? "#2e9e4f" : "rgba(0,0,0,0.05)", boxShadow: "0 2px 6px rgba(0,0,0,.12)", cursor: dicht ? "default" : "pointer", opacity: opSlot ? 0.55 : 1 }}
                  >
                    {opt}{rekenVraag.eenheid === "×" ? "×" : ` ${rekenVraag.eenheid || "🪙"}`}
                  </button>
                );
              })}
            </div>
            {rekenUitslag === "fout" && (
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
                <p style={{ margin: 0, font: "800 13.5px system-ui", color: "#c0392b", textAlign: "center" }}>
                  {rekenPogingen >= 2 && !rekenHulpOpen
                    ? "Vraag eerst even hulp aan je maatje — samen kom je eruit 💪"
                    : "Bijna! Probeer nog een keer 💪"}
                </p>
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
                <p style={{ margin: "0 0 6px", font: "800 14px system-ui", color: "#1f7a3a", textAlign: "center" }}>Goed gerekend! {rekenBonusGegeven ? `+${REKEN_BONUS} 🪙` : (rekenPogingen > 0 ? "(muntjes verdien je als het in één keer goed is — die pak je bij de volgende som!)" : "(muntjes-maximum van vandaag bereikt — knap dat je dóórrekent!)")} 🎉</p>
                {/* 💡 De aha bij een vorm-vraag: waaróm inhoud zo snel groeit. Dit is
                    het hoofdpunt (Mark 17 aug) — het inzicht, niet alleen het cijfer. */}
                {rekenVraag.onthulling && (
                  <div style={{ margin: "0 0 10px", background: "linear-gradient(135deg,#fff6da,#ffe9ad)", border: "2px solid #ffd566", borderRadius: 12, padding: "10px 13px", font: "700 12.5px/1.5 system-ui", color: "#6b4e00" }}>💡 {rekenVraag.onthulling}</div>
                )}
                {/* Park→leren-brug (Titan 2026-06-29): koppel leren aan de munt-economie
                    die het kind al motiveert. Leren 15 min geeft echt extra munten
                    (kwartier_reached → zooEconomy). Zo voedt het park het leren i.p.v.
                    het op te eten — park_naar_leren was 2 vs 17 goede rekenvragen. */}
                <p style={{ margin: "0 0 10px", font: "600 12.5px/1.45 system-ui", color: "#5a6b50", textAlign: "center" }}>💡 Goed in rekenen? Verdien <b>véél meer 🪙 munten</b> met een echt leerkwartier — <b>leren = munten voor je park!</b></p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                  <button onClick={() => rekenVraag.vorm ? openVormVraag(vormVraagIdx) : openRekenVraag()} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 13px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>🔁 Nog een vraag</button>
                  <button onClick={() => { try { track("park_rekenvraag_naar_leren"); } catch {} setRekenVraag(null); if (rekenVraag.vorm) { onOpenLeerpad && onOpenLeerpad(maatConfig(placedItems[vormVraagIdx]?.assetId)?.leerpad || "ruimtemeetkunde"); } else { gaOefenen(); } }} style={{ border: "none", borderRadius: 999, padding: "11px 20px", font: "900 14.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 3px 12px rgba(46,158,79,.4)", cursor: "pointer" }}>▶ Verdien 🪙 — start een leerkwartier</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 🔊 Gids-bubbel: het maatje vertelt ongevraagd (hardop) over het object
          waar je naar staat te kijken. Klein en onderin — loopt niet in de weg.
          "Leer er meer over" opent het volledige paneel met de leerpad-knop. */}
      {/* ✨ Magische-poort-flits: "je stapt in de wereld van …" → leerpad opent. */}
      {poortKaart && (
        <div style={{ position: "absolute", inset: 0, zIndex: 30, display: "grid", placeItems: "center", background: "radial-gradient(circle at center, rgba(40,20,80,0.55), rgba(10,10,30,0.82))", pointerEvents: "auto" }} onClick={() => { setPoortKaart(null); stopSpreken(); }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(400px, 92vw)", background: "rgba(255,254,248,0.98)", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.45)", padding: "18px 18px 14px", textAlign: "center", fontFamily: "system-ui", animation: "poortIn .4s ease-out" }}>
            <div style={{ fontSize: 56, lineHeight: 1, filter: "drop-shadow(0 4px 10px rgba(0,0,0,.25))" }}>{poortKaart.emoji}</div>
            <div style={{ font: "700 12px system-ui", color: "#6a4fb3", marginTop: 8, letterSpacing: 0.5 }}>✨ DE POORT VAN</div>
            <div style={{ font: "900 22px system-ui", color: "#234", marginTop: 2 }}>{poortKaart.label}</div>
            {poortKaart.vraag && (
              <p style={{ margin: "10px 0 0", font: "700 15px/1.4 system-ui", color: "#1f5a2e" }}>
                {buddyId ? <span style={{ display: "inline-flex", verticalAlign: "middle", marginRight: 6 }}><BuddyKop buddy={BUDDY_BY_ID[buddyId]} size={30} /></span> : "❓ "}
                {poortKaart.vraag}
              </p>
            )}
            <p style={{ margin: "8px 0 0", font: "600 12.5px/1.4 system-ui", color: "#567" }}>Achter de poort staat de uitleg. Ga je mee? Je park wacht op je — en je verdient 🪙.</p>
            <div style={{ display: "flex", gap: 8, marginTop: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={poortGaMee} style={{ border: "2px solid #ffe08a", borderRadius: 999, padding: "11px 20px", font: "900 14.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 4px 14px rgba(46,158,79,.4)", cursor: "pointer" }}>▶ Ga mee naar de les</button>
              {poortKaart.momentId && (
                <button onClick={() => { const id = poortKaart.momentId; setPoortKaart(null); stopSpreken(); openLeermoment(id); }} style={{ border: "none", borderRadius: 999, padding: "11px 14px", font: "800 13px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>💡 Eerst uitleg</button>
              )}
              <button onClick={() => { setPoortKaart(null); stopSpreken(); }} style={{ border: "none", borderRadius: 999, padding: "11px 14px", font: "800 13px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>✕ Later</button>
            </div>
          </div>
          <style>{"@keyframes poortIn{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:scale(1)}}"}</style>
        </div>
      )}
      {/* 🗺️ Takenbord — "wat kan ik hier leren?" per groep, met ✓ (samenhang-plan 2 sep). */}
      {takenOpen && (
        <div style={{ position: "absolute", inset: 0, zIndex: 31, display: "grid", placeItems: "center", background: "rgba(10,10,30,0.6)", pointerEvents: "auto" }} onClick={() => setTakenOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(440px, 94vw)", maxHeight: "86vh", overflowY: "auto", background: "rgba(255,254,248,0.98)", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.45)", padding: "14px 14px 12px", fontFamily: "system-ui" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <div style={{ font: "900 17px system-ui", color: "#234" }}>🗺️ Wat kan ik hier leren?</div>
              <button onClick={() => setTakenOpen(false)} style={{ border: "none", borderRadius: 999, width: 30, height: 30, font: "700 14px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ font: "600 12.5px/1.45 system-ui", color: "#567", margin: "4px 0 10px" }}>
              Elk ding in je park hoort bij één les. <b>{takenInfo.gedaan} van {takenInfo.totaal}</b> heb je al gedaan. Tik op een regel: je maatje legt uit en je kunt de les openen.
            </div>
            {takenInfo.banden.map((b) => (
              <div key={b.band} style={{ marginBottom: 10 }}>
                <div style={{ display: "inline-block", font: "800 11.5px system-ui", color: b.tekstKleur, background: b.kleur, borderRadius: 999, padding: "2px 9px", marginBottom: 5 }}>
                  {b.groep} · {b.gedaan}/{b.taken.length}
                </div>
                {b.taken.map((t) => (
                  <button key={t.momentId} onClick={() => { setTakenOpen(false); try { track("park_takenbord_tik", { id: t.momentId }); } catch { /* */ } openLeermoment(t.momentId, "takenbord"); }} style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", textAlign: "left", border: "none", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "transparent", padding: "7px 4px", cursor: "pointer", font: "700 13px system-ui", color: t.gedaan ? "#6b7a6e" : "#234" }}>
                    <span style={{ width: 20, textAlign: "center", fontSize: 15 }}>{t.gedaan ? "✅" : "○"}</span>
                    <span style={{ fontSize: 17 }}>{t.objEmoji}</span>
                    <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textDecoration: t.gedaan ? "line-through" : "none" }}>{t.label}</span>
                    <span style={{ font: "700 11px system-ui", color: "#789", whiteSpace: "nowrap" }}>{t.vakEmoji} {t.nr}/{t.van}</span>
                  </button>
                ))}
              </div>
            ))}
            {takenInfo.totaal === 0 && <div style={{ font: "600 13px system-ui", color: "#567" }}>Nog geen leer-dingen in je park. Loop de wandeling, of zet een klok, breukentaart of zwembad neer.</div>}
          </div>
        </div>
      )}

      {/* 🥾 Wandelkwartier: knop → route kiezen; onderweg → voortgang-chip.
          Op touch (COARSE_POINTER) staat linksonder de loop-joystick (bottom 92,
          104 hoog) → knop/chips daar bóven zetten, anders dekt het bord het
          stuur af (Mark-screenshot 27 aug). */}
      {!wandeling && (
        <div style={{ position: "absolute", left: 10, bottom: COARSE_POINTER ? 208 : 104, zIndex: 12, display: "flex", alignItems: "center", gap: 6 }}>
          <button onClick={() => setWandelKies(true)} style={{ border: "none", borderRadius: 999, padding: "9px 14px", font: "800 13px system-ui", color: "#234", background: "rgba(255,254,248,0.95)", boxShadow: "0 4px 14px rgba(0,0,0,.25)", cursor: "pointer" }}>
            🥾 Wandeling
          </button>
          {/* (De geel/groen/blauwe filter-stipjes zijn weg — Mark 26 aug: sinds
              het zwarte leerpad-lint het hoofdpad is, is dat spoor-filter
              overbodig. Tijdens een wandeling zie je je route nog gewoon.) */}
        </div>
      )}
      {wandeling && !wandeling.klaar && wandelStop && (
        <div style={{ position: "absolute", left: 10, bottom: COARSE_POINTER ? 208 : 104, zIndex: 12, maxWidth: "min(320px, 80vw)", background: "rgba(255,254,248,0.96)", borderLeft: `6px solid ${wandelRoute.kleur}`, borderRadius: 12, padding: "8px 34px 8px 12px", font: "700 12.5px/1.4 system-ui", color: "#234", boxShadow: "0 4px 14px rgba(0,0,0,.25)" }}>
          🥾 {wandelRoute.naam} · stop {wandeling.stopIdx + 1} van {stopsVan(wandeling).length}
          <div style={{ font: "800 13px system-ui", marginTop: 2 }}>Loop naar {wandelStop.emoji} {wandelStop.label}!</div>
          {/* 📚 Voor welke groep is deze stop? (Mark 4 sep: "kan hierbij gezet
              worden welke groep, bv groep 8"). De band van het leermoment is
              precies; valt terug op de groep van de route. */}
          {(() => {
            const m = PARK_LEERMOMENTEN[wandelStop.moment];
            const band = typeof m?.band === "number" ? LINT_BANDEN[m.band] : null;
            const groep = band?.groep || wandelRoute.groep;
            return groep ? (
              <div style={{ font: "700 11.5px system-ui", color: "#3b5568", marginTop: 3 }}>
                📚 {groep}
              </div>
            ) : null;
          })()}
          {wandelStop.reden === "klaargezet-juf" && (
            <div style={{ font: "700 11.5px system-ui", color: "#8a4a8a", marginTop: 2 }}>💛 Voor jou klaargezet door je juf of meester!</div>
          )}
          {wandelStop.reden === "klaargezet-thuis" && (
            <div style={{ font: "700 11.5px system-ui", color: "#8a4a8a", marginTop: 2 }}>💛 Voor jou klaargezet door thuis!</div>
          )}
          {wandelStop.reden === "herhalen" && (
            <div style={{ font: "700 11.5px system-ui", color: "#8a6d1a", marginTop: 2 }}>🔁 Die ken je al een beetje — even opfrissen!</div>
          )}
          {wandelStop.reden === "oefenen" && (
            <div style={{ font: "700 11.5px system-ui", color: "#1f5a2e", marginTop: 2 }}>💪 Daar word jij vandaag beter in!</div>
          )}
          <button onClick={() => { stopWandeling(); setWandeling(null); }} title="Wandeling stoppen" style={{ position: "absolute", top: 6, right: 6, border: "none", borderRadius: 999, width: 22, height: 22, font: "700 11px system-ui", background: "rgba(0,0,0,0.07)", cursor: "pointer" }}>✕</button>
        </div>
      )}
      {wandeling && wandeling.klaar && !wandelViering && (
        <div style={{ position: "absolute", left: 10, bottom: COARSE_POINTER ? 208 : 104, zIndex: 12, background: "rgba(255,254,248,0.96)", borderLeft: `6px solid ${wandelRoute.kleur}`, borderRadius: 12, padding: "8px 12px", font: "800 12.5px system-ui", color: "#1f5a2e", boxShadow: "0 4px 14px rgba(0,0,0,.25)" }}>
          ✅ {wandelRoute.naam} af — morgen een nieuwe!
        </div>
      )}

      {/* 🥾 Route-kiezen (bos-stijl bordje). */}
      {wandelKies && (
        <div onClick={() => setWandelKies(false)} style={{ position: "absolute", inset: 0, zIndex: 24, background: "rgba(10,20,10,0.5)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(420px, 96vw)", background: "#fffef8", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: 18 }}>
            <div style={{ font: "800 17px system-ui", color: "#234" }}>🥾 Kies je wandeling</div>
            <p style={{ margin: "4px 0 12px", font: "600 13px/1.45 system-ui", color: "#345" }}>
              Volg de gekleurde voetstappen en vind de 3 stops. Bij elke stop leer je iets — route af = feestje!
            </p>
            {WANDEL_ROUTES.map((r) => {
              // M2b + speeltest-fix: stops die dít kind zou krijgen, afgestemd
              // op de objecten die écht in dit park staan.
              const stops = kiesStopsVoorPark(r, wandelKandidatenRef.current || [], aanwezigeMomenten);
              const persoonlijk = stops.some((s) => s.reden);
              if (!stops.length) {
                return (
                  <div key={r.id} style={{ border: `2.5px dashed ${r.kleur}`, opacity: 0.75, background: "#fff", borderRadius: 14, padding: "10px 13px", marginBottom: 9 }}>
                    <span style={{ font: "800 14px system-ui", color: "#234" }}>{r.naam} · {r.groep}</span>
                    <div style={{ font: "600 12.5px system-ui", color: "#567", marginTop: 2 }}>
                      Nog geen stops in jouw park — zet eerst iets neer uit 🎡 Leerplein (bijv. de klok of de breukentaart), dan opent deze route.
                    </div>
                  </div>
                );
              }
              return (
                <button key={r.id} onClick={() => { const w = startWandeling(r.id, stops); setWandeling(w); setWandelKies(false); try { track("wandel_start", { route: r.id, persoonlijk, stops: stops.length }); } catch { /* */ } }}
                  style={{ display: "block", width: "100%", textAlign: "left", border: `2.5px solid ${r.kleur}`, background: "#fff", borderRadius: 14, padding: "10px 13px", marginBottom: 9, cursor: "pointer" }}>
                  <span style={{ font: "800 14px system-ui", color: "#234" }}>{r.naam} · {r.groep}</span>
                  {persoonlijk && <span style={{ font: "700 10.5px system-ui", color: "#7a5b00", background: "rgba(246,200,76,0.25)", borderRadius: 999, padding: "1px 7px", marginLeft: 6 }}>✨ voor jou gekozen</span>}
                  <div style={{ font: "600 12.5px system-ui", color: "#567", marginTop: 2 }}>
                    {stops.map((s) => `${s.emoji} ${s.label}`).join("  →  ")}
                  </div>
                </button>
              );
            })}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button onClick={() => setWandelKies(false)} style={{ border: "none", borderRadius: 999, padding: "8px 14px", font: "700 13px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>Toch niet</button>
              <button onClick={() => { setWandelKies(false); setStempelKaartOpen(true); }} style={{ border: "none", borderRadius: 999, padding: "8px 14px", font: "800 13px system-ui", color: "#5c4300", background: "#ffd54f", cursor: "pointer" }}>🎟️ Stempelkaart ({wandelStempels.length})</button>
            </div>
          </div>
        </div>
      )}

      {/* 🎉 Route af! */}
      {wandelViering && !tafereel && (
        <div onClick={() => setWandelViering(false)} style={{ position: "absolute", inset: 0, zIndex: 24, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(380px, 96vw)", background: "#fffef8", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "22px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 44 }}>🎉</div>
            <div style={{ font: "800 18px system-ui", color: "#234", marginTop: 4 }}>{wandelRoute?.naam} helemaal af!</div>
            <p style={{ margin: "8px 0 14px", font: "600 13.5px/1.5 system-ui", color: "#345" }}>
              Je vond alle {stopsVan(wandeling).length} stops en dacht bij elke plek over een vraag na. Dat is jouw wandel-kwartier: <b>🪙 +{WANDEL_REWARD} munten</b>. Morgen ligt er weer een verse wandeling klaar — of loop nu een route van een andere kleur.
            </p>
            {/* 🎟️ Stempel verdiend (park-megabuild #2): het dagritueel bouwt iets op. */}
            <div style={{ margin: "0 0 12px", padding: "10px 12px", borderRadius: 12, background: "rgba(246,200,76,0.14)", border: "1px solid rgba(246,200,76,0.5)" }}>
              <div style={{ font: "800 13px system-ui", color: "#7a5b00" }}>🎟️ Stempel verdiend — je hebt er nu {wandelStempels.length}!</div>
              {volgendeStempelMijlpaal && (
                <div style={{ font: "700 11.5px system-ui", color: "#8a6a1a", marginTop: 2 }}>
                  Nog {volgendeStempelMijlpaal.n - wandelStempels.length} tot {volgendeStempelMijlpaal.naam}.
                </div>
              )}
              <button onClick={() => { setWandelViering(false); setStempelKaartOpen(true); }} style={{ marginTop: 8, border: "none", borderRadius: 999, padding: "7px 13px", font: "800 12px system-ui", color: "#5c4300", background: "#ffd54f", cursor: "pointer" }}>🗺️ Bekijk je stempelkaart</button>
            </div>
            {/* 🦕 Terugkom-haakje (park-megabuild #3): waar leren naartoe leidt. */}
            {dinoHint && (
              <div style={{ margin: "0 0 14px", padding: "9px 12px", borderRadius: 12, background: "rgba(46,125,91,0.1)", border: "1px solid rgba(46,125,91,0.3)", font: "700 12.5px/1.45 system-ui", color: "#1c5a3b" }}>
                {dinoHint.emoji} Nog {dinoHint.rest} {dinoHint.rest === 1 ? "lesje" : "lesjes"} en de <b>{dinoHint.naam}</b> stampt je dino-plek binnen!
              </div>
            )}
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <button onClick={() => { setWandelViering(false); stopWandeling(); setWandeling(null); setWandelKies(true); }} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 13.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>🥾 Nog een route</button>
              <button onClick={() => setWandelViering(false)} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "700 13.5px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>Verder spelen</button>
            </div>
          </div>
        </div>
      )}

      {/* 🎟️ Stempelkaart (park-megabuild #2): het blijvende spoor van je wandelingen. */}
      {stempelKaartOpen && (
        <div onClick={() => setStempelKaartOpen(false)} style={{ position: "absolute", inset: 0, zIndex: 25, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(420px, 96vw)", maxHeight: "84vh", overflowY: "auto", background: "#fffef8", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "20px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <div style={{ font: "800 17px system-ui", color: "#234" }}>🗺️ Mijn stempelkaart</div>
              <button onClick={() => setStempelKaartOpen(false)} style={{ border: "none", borderRadius: 999, width: 30, height: 30, font: "700 15px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ font: "700 13px system-ui", color: "#567", marginBottom: 12 }}>
              {wandelStempels.length} {wandelStempels.length === 1 ? "wandeling" : "wandelingen"} gelopen 🥾
              {volgendeStempelMijlpaal && <> · nog {volgendeStempelMijlpaal.n - wandelStempels.length} tot {volgendeStempelMijlpaal.naam}</>}
            </div>
            {wandelStempels.length === 0 ? (
              <p style={{ font: "600 13px/1.5 system-ui", color: "#678", textAlign: "center", padding: "16px 8px" }}>
                Nog geen stempels. Loop een wandelroute helemaal af en verdien je eerste stempel! 🥾
              </p>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))", gap: 10 }}>
                {wandelStempels.slice().reverse().map((s, i) => (
                  <div key={i} title={`${s.naam} — ${s.datum}`} style={{ aspectRatio: "1", borderRadius: "50%", border: `3px dashed ${s.kleur}`, display: "grid", placeItems: "center", background: `${s.kleur}22`, textAlign: "center" }}>
                    <div style={{ font: "800 9px system-ui", color: "#234", lineHeight: 1.15 }}>
                      <div style={{ fontSize: 16 }}>🥾</div>
                      {String(s.datum || "").slice(5).replace("-", "/")}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div style={{ marginTop: 14, padding: "10px 12px", borderRadius: 12, background: "rgba(0,0,0,0.04)", font: "600 11.5px/1.5 system-ui", color: "#567" }}>
              🏅 Bij 5, 10 en 25 stempels verschijnt er een blijvend cadeau bij je ingang: een bankje, een palmboom en een fontein.
            </div>
          </div>
        </div>
      )}

      {gidsMoment && !tafereel && (
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: 84, zIndex: 12, width: "min(430px, 94vw)", pointerEvents: "auto" }}>
          <div style={{ background: "rgba(255,254,248,0.97)", borderRadius: 16, boxShadow: "0 8px 28px rgba(0,0,0,.3)", padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-start" }}>
            {buddyId ? <BuddyKop buddy={BUDDY_BY_ID[buddyId]} size={44} /> : <span style={{ fontSize: 28, lineHeight: 1 }}>{gidsMoment.emoji}</span>}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: "800 13px system-ui", color: "#234" }}>
                {gidsMoment.emoji} {gidsMoment.titel}
                {niveauLabelVoorLeerpad(gidsMoment.leerpadId) && (
                  <span style={{ font: "700 10.5px system-ui", color: "#1e4fa3", background: "#e6f0ff", borderRadius: 999, padding: "1px 7px", marginLeft: 6 }}>
                    🎓 {niveauLabelVoorLeerpad(gidsMoment.leerpadId)}
                  </span>
                )}
              </div>
              {/* Samenhang-plan 2 sep: één vraag + één knop die direct de les
                  opent (kind-review: het dubbele "Leer er meer over" → paneel →
                  wéér "Leer er meer over" was twee keer dezelfde belofte). */}
              <p style={{ margin: "2px 0 0", font: "600 12.5px/1.45 system-ui", color: "#345" }}>
                {buddyId ? <b style={{ color: "#1f5a2e" }}>{buddyNaamEff || "Je maatje"}: </b> : null}
                {gidsMoment.vraag ? <b style={{ color: "#1f5a2e" }}>{gidsMoment.vraag}</b> : gidsMoment.praatje}
              </p>
              <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
                {gidsMoment.leerpadId && onOpenLeerpad && (
                  <button onClick={() => { const m = gidsMoment; setGidsMoment(null); stopSpreken(); try { track("park_naar_leren", { via: "gids", pad: m.leerpadId }); } catch { /* */ } onOpenLeerpad(m.leerpadId); }} style={{ border: "none", borderRadius: 999, padding: "7px 12px", font: "800 12.5px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>▶ Naar de les</button>
                )}
                <button onClick={() => { const m = gidsMoment; setGidsMoment(null); setTafereel(m); try { track("park_leermoment", { id: m.id, via: "gids" }); } catch { /* */ } }} style={{ border: "none", borderRadius: 999, padding: "7px 10px", font: "700 12.5px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>💡 Uitleg</button>
                <button onClick={toggleGidsStil} title="Gids helemaal stil zetten" style={{ border: "none", borderRadius: 999, padding: "7px 10px", font: "700 12.5px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>🔇 Stil</button>
                <button onClick={() => { stopSpreken(); setGidsMoment(null); }} style={{ border: "none", borderRadius: 999, width: 28, height: 28, font: "700 13px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>✕</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🧙 Uitvinders-tafereel: je maatje vertelt wat de kabouters aan het
          doen zijn (zwaartekracht/piramide/Faraday) + één klik naar de les. */}
      {tafereel && (
        <div onClick={() => setTafereel(null)} style={{ position: "absolute", inset: 0, zIndex: 23, background: "rgba(10,20,10,0.5)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(460px, 96vw)", background: "#fffef8", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 18px 16px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, paddingTop: 14 }}>
              {buddyId ? (
                <BuddyKop buddy={BUDDY_BY_ID[buddyId]} size={64} />
              ) : (
                <span style={{ fontSize: 40, lineHeight: 1 }}>{tafereel.emoji}</span>
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ font: "800 16px system-ui", color: "#234", marginBottom: 2 }}>{tafereel.emoji} {tafereel.titel}</div>
                {/* 🎓 Niveau-pill (Mark 20 aug): automatisch uit het leerpad-manifest. */}
                {niveauLabelVoorLeerpad(tafereel.leerpadId) && (
                  <span style={{ display: "inline-block", font: "700 11px system-ui", color: "#1e4fa3", background: "#e6f0ff", borderRadius: 999, padding: "2px 9px", margin: "0 0 4px" }}>
                    🎓 Past bij {niveauLabelVoorLeerpad(tafereel.leerpadId)}
                  </span>
                )}
                <p style={{ margin: 0, font: "600 14px/1.5 system-ui", color: "#345" }}>
                  {buddyId ? <b style={{ color: "#1f5a2e" }}>{buddyNaamEff || "Je maatje"}: </b> : null}
                  {tafereel.praatje}
                </p>
                {/* 🥾 Wandel-stop gevonden (sprint 3): de wandeling ís het kwartier. */}
                {wandelStopGevonden && (
                  <div style={{ display: "inline-block", marginTop: 8, font: "800 12px system-ui", color: wandelRoute?.tekstKleur || "#234", background: wandelRoute?.kleur || "#ffd54f", borderRadius: 999, padding: "3px 10px" }}>
                    🥾 Stop {wandelStopGevonden.nr} van {wandelStopGevonden.van} gevonden{wandelStopGevonden.klaar ? " — route af! 🎉" : ""}
                  </div>
                )}
                {/* ❓ De ene vraag van deze plek (samenhang-plan 2 sep): eerst zelf
                    denken, dan pas de les — geen goed/fout-straf hier. */}
                {tafereel.vraag && (
                  <p style={{ margin: "8px 0 0", padding: "8px 11px", borderRadius: 12, background: "rgba(255,213,79,0.18)", border: "1px solid rgba(255,213,79,0.6)", font: "800 14px/1.45 system-ui", color: "#1f5a2e" }}>
                    ❓ {tafereel.vraag}
                  </p>
                )}
              </div>
              <button onClick={() => setTafereel(null)} style={{ border: "none", borderRadius: 999, width: 30, height: 30, font: "700 15px system-ui", background: "#eee", cursor: "pointer", flex: "0 0 auto" }}>✕</button>
            </div>
            <div style={{ margin: "12px 0 0", background: "#f2f7ee", borderRadius: 12, padding: "10px 13px", font: "600 12.5px/1.5 system-ui", color: "#4a5d3a" }}>
              💡 <b>Wist je dat?</b> {tafereel.weetje}
            </div>
            {/* Souvenir-lijn (P1): vrijgespeeld → wijs naar plaatsen; anders belofte. */}
            {tafereel.souvenirAssetId && (
              <div style={{ margin: "8px 0 0", background: unlockedDieren.includes(tafereel.souvenirAssetId) ? "rgba(246,200,76,0.18)" : "rgba(0,0,0,0.045)", borderRadius: 12, padding: "9px 13px", font: "700 12.5px/1.5 system-ui", color: unlockedDieren.includes(tafereel.souvenirAssetId) ? "#7a5b00" : "#567" }}>
                {unlockedDieren.includes(tafereel.souvenirAssetId)
                  ? <>🎁 Je souvenir <b>{TAFEREEL_BY_ID[tafereel.id].souvenirNaam}</b> is vrijgespeeld — zet 'm neer via Bouwen → Dieren ✨</>
                  : <>🎁 Rond <b>{tafereel.leerLabel}</b> helemaal af en de kabouters bouwen een <b>{tafereel.souvenirNaam}</b> voor jouw eigen park.</>}
              </div>
            )}
            {tafereel.speel && (
              <button onClick={() => setSpeelInhoud(tafereel.speel)} style={{ border: "none", borderRadius: 999, padding: "10px 14px", marginTop: 12, font: "800 14px system-ui", color: "#7a5b00", background: "linear-gradient(135deg,#ffe08a,#ffc93c)", boxShadow: "0 3px 10px rgba(0,0,0,.18)", cursor: "pointer", width: "100%" }}>
                📐 Speel met de inhoud — schuif en zie 'm groeien!
              </button>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14, justifyContent: "flex-end" }}>
              <button onClick={() => setTafereel(null)} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(0,0,0,0.06)", cursor: "pointer" }}>Verder spelen</button>
              <button onClick={() => tafereelNaarLeren()} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>
                ▶ Leer er meer over: {tafereel.leerLabel}
              </button>
              {/* 🎓 Brugklas-versie (sprint 2): de vormen verwijzen standaard naar
                  het PO-pad; wie verder wil, krijgt het vwo-pad als tweede knop. */}
              {tafereel.leerpadIdVo && (
                <button onClick={() => tafereelNaarLeren(tafereel.leerpadIdVo)} style={{ border: "1px solid rgba(30,79,163,0.4)", borderRadius: 999, padding: "10px 16px", font: "800 13.5px system-ui", color: "#1e4fa3", background: "#e6f0ff", cursor: "pointer" }}>
                  🎓 Brugklas-versie: {tafereel.leerLabelVo}
                </button>
              )}
              {tafereel.leerpadId2 && (
                <button onClick={() => tafereelNaarLeren(tafereel.leerpadId2)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#c9862e,#a86a1e)", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>
                  ▶ {tafereel.leerLabel2}
                </button>
              )}
            </div>
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
            stepTitle={rekenVraag.vorm ? "Reken-vraag bij een 3D-vorm" : "Reken-vraag bij je kraampje"}
            stepIdx={rekenVraagNr.current}
            stepExplanation={rekenVraag.vorm
              ? `De leerling speelt met een 3D-vorm in een park en krijgt een reken-vraag over de inhoud (ruimte). Twee soorten vragen: (1) schaal-inzicht — maak je een vorm k× zo groot, dan wordt de inhoud k × k × k = k³ keer zo groot (2× → 8×, 3× → 27×), want inhoud = lengte × breedte × hoogte; (2) de echte inhoud uitrekenen — de formule staat in de vraag (bol 4/3 × π × r³, kegel ⅓ × π × r² × h, cilinder π × r² × h, halve bol ⅔ × π × r³, piramide ⅓ × grondvlak × hoogte, kubus ribbe³; een kegel is precies ⅓ van een cilinder met dezelfde bodem en hoogte); reken-tip: schat met π ≈ 3, dan kom je vanzelf bij het goede antwoord want de foute opties liggen ver weg. Klassieke fouten om op te letten: de ⅓ of ⅔ vergeten, r² in plaats van r³, of de hele in plaats van de halve bol. Help stap voor stap met denkprikkels, nooit het antwoord meteen, in taal voor een kind van ~10.`
              : `De leerling runt een kraampje in een dierentuin-spel en krijgt een reken-vraag over kopen en verkopen. Handige begrippen: winst per stuk = verkoopprijs min inkoopprijs; totale winst = aantal keer winst per stuk; omzet = aantal keer verkoopprijs. Help stap voor stap, in taal voor een kind van ~10.`}
            currentCheck={{ q: rekenVraag.vraag, options: rekenVraag.opties.map((o) => rekenVraag.vorm ? `${o}${rekenVraag.eenheid === "×" ? "×" : ` ${rekenVraag.eenheid || ""}`}` : `${o} muntjes`) }}
            lastWrongAnswer={rekenFout != null ? (rekenVraag.vorm ? `${rekenFout}${rekenVraag.eenheid === "×" ? "×" : ` ${rekenVraag.eenheid || ""}`}` : `${rekenFout} muntjes`) : undefined}
          />
        </Suspense>
      )}

      {/* 📐 Interactieve piramide-inhoud (Mark 16 aug): schuif → inhoud groeit/krimpt. */}
      {speelInhoud && (
        <div onClick={() => setSpeelInhoud(false)} style={{ position: "absolute", inset: 0, zIndex: 26, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(470px, 96vw)", maxHeight: "92vh", overflowY: "auto", background: "#fffef8", borderRadius: 20, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "14px 14px 16px", position: "relative" }}>
            <button onClick={() => setSpeelInhoud(false)} style={{ position: "absolute", top: 10, right: 10, border: "none", borderRadius: 999, width: 30, height: 30, font: "700 15px system-ui", background: "#eee", cursor: "pointer", zIndex: 2 }}>✕</button>
            <Suspense fallback={<div style={{ padding: 30, textAlign: "center", color: "#7a6a3a", font: "600 14px system-ui" }}>Laden…</div>}>
              {speelInhoud === "kubus-inhoud" ? <KubusInhoud /> : speelInhoud === "kegel-inhoud" ? <KegelInhoud /> : speelInhoud === "bol-inhoud" ? <BolInhoud /> : speelInhoud === "halvebol-inhoud" ? <BolInhoud half /> : <PiramideInhoud />}
            </Suspense>
          </div>
        </div>
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
                  {/* Bug-jacht 7/7: was hardcoded "+8" terwijl de echte beloning
                      2 jul naar 25 ging — nu altijd synchroon met zooEconomy. */}
                  <li>Elke dag je <b>kwartier leren</b> afronden (+{KWARTIER_REWARD}).</li>
                  <li>Je <b>park zelf</b> levert muntjes op: hoe meer verblijven en jonkies, hoe meer per dag.</li>
                  <li><b>Kraampjes</b> 🍟🥤🍦🍿: bezoekers krijgen honger, dorst of zin in iets lekkers. Zet een <b>patat-</b>, <b>drank-</b>, <b>ijsco-</b> of <b>popcornkraam</b> neer en kies de prijs — elke verkoop levert muntjes op. Bezoekers verlangen naar wat jij aanbiedt; te duur? Dan haken ze af, dus zoek de juiste prijs!</li>
                </ul>
                <p><b>🦊 Dieren:</b> koop een dier — het <b>loopt vrij rond</b> in je park. Tik een dier aan om het te <b>verplaatsen</b> of <b>weg te halen</b> (je krijgt de muntjes terug).</p>
                <p><b>🚧 Hekken:</b> wil je een dier insluiten? Koop <b>losse hekpanelen</b> en zet ze aan elkaar — in een vierkant, T- of L-vorm, wat je wilt. Elk paneel kun je los weghalen of er een gelijke bij kopen. Een <b>hek-poort</b> maakt een nette ingang.</p>
                <p><b>🐣 Jonkies:</b> dieren kunnen er met de tijd een jonkie bij krijgen — dat levert extra muntjes op.</p>
                <p><b>🕹️ Rondkijken:</b> sleep om te draaien, scroll of knijp om in/uit te zoomen.</p>
                <p style={{ color: "#777", fontSize: 12.5 }}>Het park is nog volop in opbouw 🚧 — er komt steeds meer bij (attracties, paden en meer).</p>
                <p><b>⛰️ Bergen & dalen:</b> open het <b>☰-menu</b> en kies <b>⛰️ Heuvels boetseren</b>, kies <b>omhoog</b> of <b>omlaag</b> en tik dan op de grond om heuvels te maken of kuilen te graven.</p>
                <p><b>💧 Water:</b> open het <b>☰-menu</b>, kies <b>💧 Water / meertjes</b> en zet een waterbron neer — het water stroomt vanzelf naar beneden en vult dalen.</p>
                <p><b>♻️ Opnieuw beginnen:</b> in het <b>☰-menu</b> onder <b>🏡 Mijn park</b> zet je je park terug naar het begin.</p>
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
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px dashed #ddd" }}>
                  <div style={{ font: "800 14px system-ui", color: "#234", marginBottom: 4 }}>🌍 Laat je park aan iedereen zien</div>
                  {galerijAangemeld ? (
                    <p style={{ font: "600 13.5px/1.5 system-ui", color: "#2e7d32", margin: 0 }}>✓ Aangemeld! De maker bekijkt je park even — daarna staat het in de galerij. 💛</p>
                  ) : (
                    <>
                      <p style={{ font: "500 13.5px/1.5 system-ui", color: "#555", margin: "0 0 8px" }}>Wil je je park aan iedereen laten zien? Geef je hier op — anoniem, zonder je naam. De maker kijkt 'm eerst even.</p>
                      <button onClick={meldAanGalerij} style={{ width: "100%", border: "none", borderRadius: 999, padding: "11px 14px", font: "800 14px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" }}>🌍 Zet mijn park in de galerij</button>
                    </>
                  )}
                </div>
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
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(440px, 96vw)", maxHeight: "86vh", overflowY: "auto", background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <h2 style={{ margin: 0, font: "800 20px system-ui", color: "#234" }}>🏗️ Auto-bouw</h2>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, width: 34, height: 34, font: "700 16px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>
            {/* Het maatje doet het aanbod — "welke zal ik voor je bouwen?" (Mark 8 jul) */}
            <p style={{ font: "500 14px/1.5 system-ui", color: "#333", marginTop: 0, background: "#eef7ee", border: "1px solid #cfe7cf", borderRadius: 12, padding: "10px 12px" }}>
              {BUDDY_BY_ID[buddyId]?.emoji || "🐾"} <b>{buddyNaamEff || "Je maatje"}</b>: "Van jouw <b style={{ color: "#5b3d00", background: "#ffe08a", padding: "1px 8px", borderRadius: 999 }}>🪙 {coins}</b> kan ik dit voor je bouwen — welke zal ik bouwen?"
            </p>
            {(bouwPlannen || []).map((p, i) => {
              const kanNiet = p.prijs > coins;
              return (
                <button
                  key={p.key}
                  onClick={() => autoBouw(p)}
                  disabled={kanNiet}
                  style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", border: kanNiet ? "1.5px solid #ddd" : "1.5px solid #bfe0bf", borderRadius: 14, padding: "10px 12px", marginBottom: 8, background: kanNiet ? "#f6f6f2" : "#fff", opacity: kanNiet ? 0.6 : 1, cursor: kanNiet ? "default" : "pointer" }}
                >
                  <span style={{ font: "800 15px system-ui", color: "#2e7d32", width: 20 }}>{String.fromCharCode(65 + i)}.</span>
                  <span style={{ fontSize: 26 }}>{p.emoji}</span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: "block", font: "800 14.5px system-ui", color: "#234" }}>{p.naam}</span>
                    <span style={{ display: "block", font: "600 12px/1.4 system-ui", color: "#777" }}>{p.inhoud}</span>
                    {kanNiet && <span style={{ display: "block", font: "700 11.5px system-ui", color: "#b26a00" }}>nog {p.prijs - coins} muntjes sparen 💪</span>}
                  </span>
                  <span style={{ font: "800 13.5px system-ui", color: "#5b3d00", background: "#ffe08a", padding: "4px 10px", borderRadius: 999, whiteSpace: "nowrap" }}>🪙 {p.prijs}</span>
                </button>
              );
            })}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
              <button onClick={() => setBouwPlannen(maakBouwplannen())} title="Andere huisjes, dieren en kleuren" style={{ border: "none", borderRadius: 999, padding: "9px 14px", font: "800 13px system-ui", color: "#234", background: "#eaf3ea", cursor: "pointer" }}>🎲 Verras me met andere</button>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#234", background: "#eee", cursor: "pointer" }}>Klaar</button>
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
