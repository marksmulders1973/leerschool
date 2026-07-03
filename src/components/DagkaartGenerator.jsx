// Dagkaart-generator "/dagkaart" — maakt van de vraag-van-de-dag een net,
// branded Leerkwartier-kaartje (PNG) om op social te posten (Mark 3 jul).
//
// Waarom eigen kaart: Instagram eist een afbeelding, en nieuwsfoto's van
// NOS/Jeugdjournaal mogen we NIET overnemen (auteursrecht). Daarom tekenen we
// zelf een kaart met de merk-kleuren en een groot topic-emoji als vrolijke,
// veilige illustratie. Bronvermelding staat erop; de bron-foto niet.
//
// Bron van de vraag: de actuele Jeugdjournaal-vraag (als die er is), anders de
// vaste dagvraag uit de pool. Alles client-side op een canvas → geen extra
// dependency, en de kaart is ook headless te renderen voor latere automatisering.

import { useEffect, useRef, useState } from "react";
import { BRAND } from "../brand.js";
import { getSocialVraag, vraagVanVandaagId } from "../socialVragen.js";
import { track } from "../utils.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const FORMATEN = {
  "45": { w: 1080, h: 1350, label: "Staand 4:5 (feed)" },
  "11": { w: 1080, h: 1080, label: "Vierkant 1:1" },
};

// Kwart-cirkel merkteken (zelfde vorm als het SVG-logo: pie-slice rechtsboven).
function tekenMerk(ctx, cx, cy, r) {
  ctx.save();
  ctx.fillStyle = "#00C853";
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, r, -Math.PI / 2, 0, false);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Woord-wrap: geeft regels terug die binnen maxW passen bij het huidige font.
function wikkel(ctx, tekst, maxW) {
  const woorden = String(tekst).split(/\s+/);
  const regels = [];
  let regel = "";
  for (const w of woorden) {
    const test = regel ? regel + " " + w : w;
    if (ctx.measureText(test).width > maxW && regel) {
      regels.push(regel);
      regel = w;
    } else {
      regel = test;
    }
  }
  if (regel) regels.push(regel);
  return regels;
}

function tekenKaart(canvas, vraag, fmt) {
  const { w, h } = FORMATEN[fmt];
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const PAD = 84;
  const disp = "'Fredoka', 'Nunito', system-ui, sans-serif";

  // Achtergrond — merk-gradient (donkerblauw) + zachte groene gloed bovenin.
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#16233f");
  bg.addColorStop(0.55, "#1d3358");
  bg.addColorStop(1, "#24406a");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  const glow = ctx.createRadialGradient(w * 0.5, -80, 60, w * 0.5, -80, w * 0.9);
  glow.addColorStop(0, "rgba(0,200,83,0.18)");
  glow.addColorStop(1, "rgba(0,200,83,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  // ── Header: merkteken + woordmerk ──
  tekenMerk(ctx, PAD + 20, PAD + 22, 26);
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "alphabetic";
  ctx.font = `800 46px ${disp}`;
  ctx.fillText(BRAND.name, PAD + 62, PAD + 42);

  // ── Badge ──
  const badge = vraag.actueel ? "🗞️  Vraag van de dag · uit het nieuws" : "🎯  Doorstroomtoets · vraag van de dag";
  ctx.font = `700 30px ${disp}`;
  const bw = ctx.measureText(badge).width + 52;
  const by = PAD + 92;
  ctx.fillStyle = vraag.actueel ? "rgba(66,165,245,0.18)" : "rgba(124,58,237,0.20)";
  const strokeC = vraag.actueel ? "rgba(66,165,245,0.6)" : "rgba(167,139,250,0.6)";
  roundRect(ctx, PAD, by, bw, 58, 29);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = strokeC;
  roundRect(ctx, PAD, by, bw, 58, 29);
  ctx.stroke();
  ctx.fillStyle = vraag.actueel ? "#a9d4fb" : "#c9b6f8";
  ctx.fillText(badge, PAD + 26, by + 39);

  // ── Groot emoji als illustratie (veilig; geen nieuwsfoto) ──
  const emoji = vraag.emoji || (vraag.actueel ? "🗞️" : "🎯");
  const emSize = fmt === "11" ? 104 : 132;
  ctx.font = `${emSize}px ${disp}`;
  ctx.textAlign = "center";
  ctx.fillText(emoji, w / 2, by + 112 + emSize);
  ctx.textAlign = "left";

  // ── Vraagtekst (gewikkeld) ── (alles hierna stroomt mee → geen overlap)
  let y = by + 112 + emSize + (fmt === "11" ? 44 : 56);
  ctx.fillStyle = "#ffffff";
  const vraagFont = fmt === "11" ? 46 : 54;
  ctx.font = `800 ${vraagFont}px ${disp}`;
  const schoon = String(vraag.vraag || "").replace(/\*\*/g, "");
  const regels = wikkel(ctx, schoon, w - PAD * 2);
  for (const r of regels.slice(0, 5)) {
    ctx.fillText(r, PAD, y);
    y += vraagFont + 10;
  }

  // ── Opties A–D ──
  y += 18;
  const opts = (vraag.options || []).slice(0, 4);
  const rowH = fmt === "11" ? 60 : 68;
  ctx.font = `600 34px ${disp}`;
  for (let i = 0; i < opts.length; i++) {
    ctx.fillStyle = "rgba(255,255,255,0.07)";
    roundRect(ctx, PAD, y, w - PAD * 2, rowH, 16);
    ctx.fill();
    // letter-cirkel
    ctx.fillStyle = "rgba(0,200,83,0.85)";
    ctx.beginPath();
    ctx.arc(PAD + 34, y + rowH / 2, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#0b1a2e";
    ctx.font = `800 28px ${disp}`;
    ctx.textAlign = "center";
    ctx.fillText(LETTERS[i], PAD + 34, y + rowH / 2 + 10);
    ctx.textAlign = "left";
    // optie-tekst (afgekapt op 1 regel)
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = `600 33px ${disp}`;
    let t = String(opts[i]).replace(/\*\*/g, "");
    const maxT = w - PAD * 2 - 92;
    while (ctx.measureText(t).width > maxT && t.length > 4) t = t.slice(0, -2);
    if (t !== String(opts[i]).replace(/\*\*/g, "")) t = t.replace(/…?$/, "…");
    ctx.fillText(t, PAD + 74, y + rowH / 2 + 11);
    y += rowH + 12;
  }

  // ── Footer: CTA + bron — stromen ná de opties (nooit overlap) ──
  // Als er onderaan ruimte over is, duwen we CTA+bron naar beneden zodat de
  // kaart mooi gevuld oogt; anders staan ze direct onder de laatste optie.
  const bronH = vraag.actueel && vraag.bronTitel ? 44 : 0;
  const naOpties = y + 8;                     // direct onder de laatste optie
  const bodemPlek = h - PAD - 66 - bronH;     // netjes onderaan bij korte vragen
  const cy2 = Math.max(naOpties, bodemPlek);  // nooit ómhoog → nooit overlap
  const cta = "Antwoord + uitleg op 3 niveaus  →  " + BRAND.domain + "/vandaag";
  ctx.font = `800 ${fmt === "11" ? 30 : 34}px ${disp}`;
  const cw = Math.min(ctx.measureText(cta).width + 56, w - PAD * 2);
  const grad = ctx.createLinearGradient(PAD, 0, PAD + cw, 0);
  grad.addColorStop(0, "#00C853");
  grad.addColorStop(1, "#00a846");
  ctx.fillStyle = grad;
  roundRect(ctx, PAD, cy2, cw, 66, 33);
  ctx.fill();
  ctx.fillStyle = "#0b1a2e";
  ctx.fillText(cta, PAD + 28, cy2 + 43);

  // Bronvermelding (alleen bij nieuws) — foto niet, tekst-credit wel.
  if (bronH) {
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = `500 24px ${disp}`;
    let bron = "Bron: NOS Jeugdjournaal — " + vraag.bronTitel;
    while (ctx.measureText(bron).width > w - PAD * 2 && bron.length > 30) bron = bron.slice(0, -2);
    ctx.fillText(bron, PAD, cy2 + 66 + 32);
  }
}

// Afgeronde rechthoek helper.
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export default function DagkaartGenerator({ setPage } = {}) {
  const canvasRef = useRef(null);
  const [fmt, setFmt] = useState("45");
  const [vraag, setVraag] = useState(null);
  const [status, setStatus] = useState("laden");

  // Actuele nieuwsvraag ophalen; anders de vaste pool-dagvraag.
  useEffect(() => {
    let weg = false;
    document.title = "Dagkaart maken — " + BRAND.name;
    fetch("/api/actuele-vraag")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (weg) return;
        if (d?.actueel?.vraag?.options) {
          const v = d.actueel.vraag;
          setVraag({ vraag: v.vraag, options: v.options, answer: v.answer, emoji: v.emoji || "🗞️", actueel: true, bronTitel: d.actueel.bron_titel });
        } else {
          const p = getSocialVraag(vraagVanVandaagId());
          if (p) setVraag({ vraag: p.vraag, options: p.options, answer: p.answer, emoji: "🎯", actueel: false });
        }
        setStatus("klaar");
      })
      .catch(() => {
        const p = getSocialVraag(vraagVanVandaagId());
        if (p) setVraag({ vraag: p.vraag, options: p.options, answer: p.answer, emoji: "🎯", actueel: false });
        setStatus("klaar");
      });
    return () => { weg = true; };
  }, []);

  // Tekenen zodra vraag/format er is (na font-load voor scherpe merk-tekst).
  useEffect(() => {
    if (!vraag || !canvasRef.current) return;
    const doe = () => tekenKaart(canvasRef.current, vraag, fmt);
    if (document.fonts?.ready) document.fonts.ready.then(doe).catch(doe);
    else doe();
  }, [vraag, fmt]);

  const download = () => {
    const c = canvasRef.current;
    if (!c) return;
    track("dagkaart_download", { fmt, actueel: !!vraag?.actueel });
    c.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const d = new Date();
      a.download = `leerkwartier-dagkaart-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}-${fmt}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }, "image/png");
  };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px 16px 80px" }}>
      <button onClick={() => setPage && setPage("home")} aria-label="Naar home" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer", padding: 0, marginBottom: 14 }}>
        <svg viewBox="0 0 100 100" style={{ width: 22, height: 22 }} aria-hidden="true"><path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" /></svg>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--color-text, #e8edf5)" }}>{BRAND.name}</span>
        <span style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>· naar home</span>
      </button>

      <h1 style={{ fontSize: 24, margin: "0 0 6px", color: "var(--color-text, #e8edf5)" }}>🖼️ Dagkaart maken</h1>
      <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 16px", lineHeight: 1.5, fontSize: 14 }}>
        Een branded Leerkwartier-kaart van de vraag van de dag — klaar om op Instagram/Facebook/Threads te posten.
        {vraag?.actueel ? " Vandaag: de actuele nieuwsvraag (mét bronvermelding; géén nieuwsfoto)." : " Vandaag: de vaste dagvraag."}
      </p>

      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {Object.entries(FORMATEN).map(([k, f]) => (
          <button key={k} onClick={() => setFmt(k)} style={{
            padding: "8px 14px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
            border: fmt === k ? "1.5px solid var(--color-accent, #42a5f5)" : "1.5px solid rgba(255,255,255,0.15)",
            background: fmt === k ? "rgba(66,165,245,0.15)" : "transparent",
            color: fmt === k ? "var(--color-text, #e8edf5)" : "var(--color-text-muted, #8899aa)",
          }}>{fmt === k ? "✓ " : ""}{f.label}</button>
        ))}
        <button onClick={download} disabled={!vraag} style={{
          marginLeft: "auto", padding: "8px 20px", borderRadius: 10, border: "none",
          background: vraag ? "var(--color-accent, #42a5f5)" : "rgba(255,255,255,0.1)",
          color: vraag ? "#0b1224" : "#888", fontSize: 14, fontWeight: 800, cursor: vraag ? "pointer" : "not-allowed",
        }}>⬇️ Download PNG</button>
      </div>

      <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", background: "#0b1a2e" }}>
        {status === "laden" ? (
          <div style={{ padding: 40, textAlign: "center", color: "var(--color-text-muted, #8899aa)" }}>Kaart laden…</div>
        ) : (
          <canvas ref={canvasRef} style={{ width: "100%", height: "auto", display: "block" }} />
        )}
      </div>

      <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 12.5, marginTop: 12, lineHeight: 1.5 }}>
        💡 Op Instagram: download de PNG en post 'm via de app (link in bio → {BRAND.domain}/vandaag). Op Facebook/Threads
        kun je de kaart met een klikbare /vandaag-link posten.
      </p>
    </div>
  );
}
