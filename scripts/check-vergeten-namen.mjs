// 🚦 Vergeten namen — poort vóór elke build (9 nov 2026).
//
// Aanleiding: twee keer stond er een naam in de code die nergens bestond, en beide keren kwam dat pas
// bij een bezoeker boven als "Iets ging mis":
//   * PakketUitleg.jsx riep useSubscription() aan zonder import (v1067, 6 nov) → het hele
//     leerling-startscherm viel om, drie dagen lang;
//   * LearnPathsHub.jsx gebruikte expandedSubjects/toggleSubject die op 2 mei waren weggehaald →
//     de Leren-knop op /oefenen viel om bij elk vak dat uit twee vakken bestaat.
// De bundelaar (Vite) en de tests merken zoiets niet: een onbekende naam is voor JavaScript een
// globale variabele, en de fout komt pas als die regel echt draait.
//
// Wat dit doet: elk .js/.jsx-bestand in src/ en api/ ontleden en alle namen opvragen die nergens
// gedeclareerd of geïmporteerd zijn (ook componenten in JSX, bv. <Knop /> zonder import). Wat geen
// bekende browser- of Node-naam is, is een fout. Met --gate stopt de build (exit 1).
//
// Gebruik:  node scripts/check-vergeten-namen.mjs [--gate] [map …]
// Parser: @babel/parser + @babel/traverse (komen mee met @vitejs/plugin-react).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";

const traverse = _traverse.default || _traverse;

// Namen die de browser, de service worker of de bouwomgeving levert. Alles wat Node zelf kent
// (console, fetch, URL, setTimeout, process …) komt er automatisch bij via globalThis.
const BEKEND = new Set([
  ...Object.getOwnPropertyNames(globalThis),
  "window", "document", "localStorage", "sessionStorage", "navigator", "location", "history", "screen",
  "alert", "confirm", "prompt", "matchMedia", "getComputedStyle", "requestAnimationFrame", "cancelAnimationFrame",
  "requestIdleCallback", "cancelIdleCallback", "scrollTo", "scrollY", "innerWidth", "innerHeight", "devicePixelRatio",
  "addEventListener", "removeEventListener", "dispatchEvent", "open", "close", "print", "self", "top", "parent", "caches",
  "indexedDB", "speechSynthesis", "SpeechSynthesisUtterance", "SpeechRecognition", "webkitSpeechRecognition",
  "Notification", "Image", "Audio", "AudioContext", "webkitAudioContext", "OfflineAudioContext", "MediaRecorder",
  "FileReader", "DOMParser", "XMLSerializer", "XMLHttpRequest", "IntersectionObserver", "ResizeObserver",
  "MutationObserver", "HTMLElement", "HTMLCanvasElement", "HTMLImageElement", "HTMLInputElement", "SVGElement",
  "Element", "Node", "KeyboardEvent", "MouseEvent", "PointerEvent", "TouchEvent", "PopStateEvent", "ClipboardItem",
  "Path2D", "ImageData", "OffscreenCanvas", "createImageBitmap", "DOMRect", "CSS", "visualViewport", "Worker",
  "PublicKeyCredential", "isSecureContext", "reportError", "gtag", "dataLayer", "fbq", "__APP_VERSION__",
  // CommonJS in een enkel script
  "require", "module", "exports", "__dirname", "__filename",
]);

/** Namen in `code` die nergens gedeclareerd of geïmporteerd zijn: [{ naam, regel }]. */
export function vindVergetenNamen(code, bestand = "onbekend.jsx") {
  const ast = parse(code, { sourceType: "module", sourceFilename: bestand, plugins: ["jsx"], errorRecovery: false });
  const uit = [];
  traverse(ast, {
    Program(p) {
      for (const [naam, knoop] of Object.entries(p.scope.globals)) {
        if (BEKEND.has(naam)) continue;
        uit.push({ naam, regel: knoop?.loc?.start?.line ?? 0 });
      }
      p.stop();
    },
  });
  return uit.sort((a, b) => a.regel - b.regel);
}

function bestandenIn(map, uit = []) {
  for (const e of fs.readdirSync(map, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = path.join(map, e.name);
    if (e.isDirectory()) bestandenIn(p, uit);
    else if (/\.(js|jsx|mjs)$/.test(e.name) && !/\.test\.(js|jsx)$/.test(e.name)) uit.push(p);
  }
  return uit;
}

/** Alle vondsten in de mappen: [{ bestand, naam, regel }] plus het aantal nagekeken bestanden. */
export function controleerMappen(mappen) {
  const vondsten = [];
  let aantal = 0;
  for (const map of mappen) {
    if (!fs.existsSync(map)) continue;
    for (const bestand of bestandenIn(map)) {
      aantal++;
      const code = fs.readFileSync(bestand, "utf8");
      try {
        for (const v of vindVergetenNamen(code, bestand)) vondsten.push({ bestand, ...v });
      } catch (e) {
        vondsten.push({ bestand, naam: `(niet te ontleden: ${String(e.message).slice(0, 80)})`, regel: e.loc?.line ?? 0 });
      }
    }
  }
  return { vondsten, aantal };
}

const direct = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (direct) {
  const args = process.argv.slice(2);
  const gate = args.includes("--gate");
  const wortel = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const mappen = args.filter((a) => !a.startsWith("--"));
  const { vondsten, aantal } = controleerMappen((mappen.length ? mappen : ["src", "api"]).map((m) => path.resolve(wortel, m)));
  if (!vondsten.length) {
    console.log(`[vergeten-namen] ${aantal} bestanden nagekeken, geen onbekende namen`);
  } else {
    console.error(`[vergeten-namen] ${vondsten.length} onbekende naam/namen in ${aantal} bestanden:`);
    for (const v of vondsten) console.error(`  ${path.relative(wortel, v.bestand).split(path.sep).join("/")}:${v.regel}  ${v.naam}`);
    console.error("  → import of declaratie vergeten? Is het een echte browser-naam, zet hem dan in BEKEND in dit script.");
    if (gate) process.exit(1);
  }
}
