// /api/dagkaart-image — publieke PNG van de vraag-van-de-dag als branded
// Leerkwartier-kaart (Mark 3 jul: voorbereiding auto-post). Instagram's
// Content Publishing API kan alleen een afbeelding van een PUBLIEKE URL
// posten (geen lokaal bestand) — dit endpoint is die URL.
//
// Rendert met @vercel/og (Satori) op de edge. Eigen merk-beeld + groot
// topic-emoji als illustratie; NOOIT een nieuwsfoto (auteursrecht). Zelfde
// look als de client-side /dagkaart, maar server-side zodat een cron 'm kan
// gebruiken. Formaat via ?fmt=45 (1080x1350, default) of ?fmt=11 (1080x1080).
//
// GEEN JSX (Vercel's builder transpileert die niet voor dit Vite-project) —
// we bouwen de element-boom met React.createElement.

import { ImageResponse } from "@vercel/og";
import { createElement as h } from "react";

export const config = { runtime: "edge" };

const LETTERS = ["A", "B", "C", "D", "E", "F"];

// Satori ondersteunt geen woff2 — we laden één woff-font (Fredoka, merk-font).
let FONT_CACHE = null;
async function laadFont() {
  if (FONT_CACHE) return FONT_CACHE;
  try {
    const r = await fetch("https://cdn.jsdelivr.net/npm/@fontsource/fredoka@5.0.20/files/fredoka-latin-500-normal.woff");
    if (r.ok) FONT_CACHE = await r.arrayBuffer();
  } catch { /* val terug op default-font */ }
  return FONT_CACHE;
}

export default async function handler(req) {
  const url = new URL(req.url);
  const fmt = url.searchParams.get("fmt") === "11" ? "11" : "45";
  const W = 1080, H = fmt === "11" ? 1080 : 1350;

  // Vraag van vandaag ophalen (genereert 'm lazy als hij er nog niet is).
  let vraag = null;
  try {
    const r = await fetch(url.origin + "/api/actuele-vraag");
    if (r.ok) {
      const d = await r.json();
      const v = d?.actueel?.vraag;
      if (v?.options) vraag = { vraag: v.vraag, options: v.options, emoji: v.emoji || "🗞️", actueel: true, bronTitel: d.actueel.bron_titel };
    }
  } catch { /* geen actuele → generieke kaart */ }
  if (!vraag) {
    vraag = { vraag: "Vraag van de dag — oefen mee voor de Doorstroomtoets!", options: [], emoji: "🎯", actueel: false, bronTitel: null };
  }

  const font = await laadFont();
  const ff = font ? "Fredoka" : "sans-serif";
  const opts = (vraag.options || []).slice(0, 4);

  const header = h("div", { style: { display: "flex", alignItems: "center", marginBottom: 10 } },
    h("div", { style: { display: "flex", width: 44, height: 44, marginRight: 14 } },
      h("svg", { width: 44, height: 44, viewBox: "0 0 100 100" },
        h("path", { d: "M50,8 A42,42 0 0,1 92,50 L50,50 Z", fill: "#00C853" }))),
    h("div", { style: { fontSize: 46, fontWeight: 700 } }, "Leerkwartier"));

  const badge = h("div", {
    style: {
      display: "flex", alignSelf: "flex-start", fontSize: 28, fontWeight: 700,
      color: vraag.actueel ? "#a9d4fb" : "#c9b6f8",
      background: vraag.actueel ? "rgba(66,165,245,0.18)" : "rgba(124,58,237,0.20)",
      border: `2px solid ${vraag.actueel ? "rgba(66,165,245,0.6)" : "rgba(167,139,250,0.6)"}`,
      borderRadius: 40, padding: "10px 24px", marginBottom: 6,
    },
  }, vraag.actueel ? "🗞️  Vraag van de dag · uit het nieuws" : "🎯  Doorstroomtoets · vraag van de dag");

  const emoji = h("div", { style: { display: "flex", justifyContent: "center", width: "100%", fontSize: fmt === "11" ? 130 : 160, marginTop: 8, marginBottom: 8 } }, vraag.emoji);

  const vraagEl = h("div", { style: { display: "flex", fontSize: fmt === "11" ? 46 : 52, fontWeight: 700, lineHeight: 1.25 } }, String(vraag.vraag || "").replace(/\*\*/g, ""));

  const optiesEl = h("div", { style: { display: "flex", flexDirection: "column", marginTop: 22 } },
    ...opts.map((o, i) => h("div", { key: i, style: { display: "flex", alignItems: "center", background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: "12px 16px", marginBottom: 12 } },
      h("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 20, background: "#00C853", color: "#0b1a2e", fontSize: 26, fontWeight: 700, marginRight: 16 } }, LETTERS[i]),
      h("div", { style: { display: "flex", fontSize: 32, color: "rgba(255,255,255,0.95)" } }, String(o).replace(/\*\*/g, "").slice(0, 42)))));

  const footerKinderen = [
    h("div", { key: "cta", style: { display: "flex", alignSelf: "flex-start", background: "#00C853", color: "#0b1a2e", fontSize: fmt === "11" ? 30 : 34, fontWeight: 700, borderRadius: 34, padding: "14px 26px" } },
      "Antwoord + uitleg op 3 niveaus → leerkwartier.app/vandaag"),
  ];
  if (vraag.actueel && vraag.bronTitel) {
    footerKinderen.push(h("div", { key: "bron", style: { display: "flex", fontSize: 24, color: "rgba(255,255,255,0.55)", marginTop: 16 } }, ("Bron: NOS Jeugdjournaal — " + vraag.bronTitel).slice(0, 70)));
  }
  const footer = h("div", { style: { display: "flex", flexDirection: "column", marginTop: "auto" } }, ...footerKinderen);

  const kaart = h("div", {
    style: { display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: 72, color: "#fff", fontFamily: ff, backgroundImage: "linear-gradient(135deg,#16233f 0%,#1d3358 55%,#24406a 100%)" },
  }, header, badge, emoji, vraagEl, optiesEl, footer);

  return new ImageResponse(kaart, {
    width: W,
    height: H,
    emoji: "twemoji",
    ...(font ? { fonts: [{ name: "Fredoka", data: font, weight: 500, style: "normal" }] } : {}),
    headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" },
  });
}
