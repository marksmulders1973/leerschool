// 🪜 Drie treden, één kwartier (Mark 15 sep 2026: "kunnen we de eerste keer het
// kwartier opbreken in drie delen?").
//
// Aanleiding: van 348 nieuwe apparaten haalde 7% het kwartier; wie het haalt komt
// in 46% van de gevallen terug, wie alleen kijkt in 6%. De meeste kinderen stappen
// af bij vraag 1-4 zonder ooit iets "af" te hebben gehad. De dagteller telde al per
// dag op (dailyGoal.js) — een kind mocht dus al 5 + 10 minuten doen — maar niemand
// zag dat. Dit balkje maakt de drie treden zichtbaar: 5 · 10 · 15 minuten.
// De meetlat (kwartier_reached = 15 min) verandert niet; er komt alleen een
// `kwartier_deel`-event bij voor de trechter in het dagrapport.
//
// Bewust géén stopknop na deel 1: vieren en doorgaan. "De rest mag ook later
// vandaag" is al waar (dagteller), dus dat zeggen we gewoon.
import { useEffect, useState } from "react";
import { treden, onKwartierUpdate } from "../dailyGoal.js";

const GEEL = "#ffd54f", GROEN = "#00e676";

export default function KwartierTreden({ compact = false }) {
  const [t, setT] = useState(() => treden());
  useEffect(() => {
    const id = setInterval(() => setT(treden()), 1000);
    const off = onKwartierUpdate(() => setT(treden()));
    return () => { clearInterval(id); off(); };
  }, []);
  const min = Math.max(1, Math.ceil(t.nogSec / 60));
  const tekst = t.klaar
    ? "🏆 Kwartier gehaald — de rest is extra"
    // 25 sep 2026 (N7): geen "Deel 1 van 3" meer — dat botste met "Deel 1 / 4" van het leerpad eronder.
    // De balk gaat over tijd, dus zeggen we het in minuten.
    : t.deel === 0 ? `Jouw kwartier · nog ${min} min`
    : t.deel === 1 ? `⭐ 5 minuten gehaald · nog ${min} min`
    : `⭐⭐ 10 minuten gehaald · nog ${min} min`;
  const kleur = t.klaar ? GROEN : GEEL;
  // Nieuwkomerpad (kliktest 26 sep 2026): de balk hangt buiten het leerpad, dus hier zelf de
  // thuistaal erachter zetten (zelfde taalkeuze als op /nieuwkomers).
  const vert = (() => {
    try {
      if (!/-nieuwkomers$/.test(new URLSearchParams(window.location.search).get("id") || "")) return null;
      const taal = localStorage.getItem("lk_steuntaal") || "en";
      const T = {
        en: [`Your quarter hour · ${min} min left`, `⭐ 5 minutes done · ${min} min left`, `⭐⭐ 10 minutes done · ${min} min left`, "🏆 Quarter hour done — the rest is extra"],
        ar: [`ربع ساعتك · بقي ${min} د`, `⭐ أنهيت 5 دقائق · بقي ${min} د`, `⭐⭐ أنهيت 10 دقائق · بقي ${min} د`, "🏆 أنهيت ربع الساعة — الباقي إضافي"],
        uk: [`Твоя чверть години · ще ${min} хв`, `⭐ 5 хвилин є · ще ${min} хв`, `⭐⭐ 10 хвилин є · ще ${min} хв`, "🏆 Чверть години є — решта понад план"],
        tr: [`Çeyrek saatin · ${min} dk kaldı`, `⭐ 5 dakika tamam · ${min} dk kaldı`, `⭐⭐ 10 dakika tamam · ${min} dk kaldı`, "🏆 Çeyrek saat tamam — gerisi ekstra"],
      }[taal];
      if (!T) return null;
      return t.klaar ? T[3] : T[Math.min(2, t.deel)];
    } catch { return null; }
  })();
  return (
    <div
      aria-label="Jouw kwartier: drie stappen van 5 minuten"
      title="Een kwartier heeft drie delen van 5 minuten. De rest mag ook later vandaag."
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: compact ? "4px 10px" : "6px 12px",
        margin: compact ? "0 0 8px" : "6px auto 2px", maxWidth: 520,
        borderRadius: 999, background: t.klaar ? "rgba(0,230,118,0.10)" : "rgba(255,213,79,0.10)",
        border: `1px solid ${t.klaar ? "rgba(0,230,118,0.35)" : "rgba(255,213,79,0.30)"}`,
        fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: kleur,
        width: compact ? "fit-content" : undefined,
      }}
    >
      <div style={{ display: "flex", gap: 3, flex: "0 0 auto" }} aria-hidden="true">
        {[0, 1, 2].map((i) => {
          const vol = t.deel > i, bezig = t.deel === i && !t.klaar;
          return (
            <div key={i} style={{ width: 26, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.15)", overflow: "hidden" }}>
              <div style={{ width: vol ? "100%" : bezig ? `${t.pct}%` : "0%", height: "100%", background: kleur, transition: "width .8s" }} />
            </div>
          );
        })}
      </div>
      <span>{tekst}{vert && <span dir="auto" style={{ opacity: 0.85, fontWeight: 600 }}> · {vert}</span>}</span>
    </div>
  );
}

/** Flits bij het halen van deel 1 en deel 2 (deel 3 = de bestaande kwartier-felicitatie). */
export function KwartierTredenToast() {
  const [flits, setFlits] = useState(null);
  useEffect(() => {
    let timer = null;
    const off = onKwartierUpdate((g, deelNieuw) => {
      if (deelNieuw !== 1 && deelNieuw !== 2) return;
      setFlits(deelNieuw === 1
        ? { kop: "⭐ Deel 1 van 3 is van jou!", sub: "Nog 10 minuten tot je kwartier. Mag ook later vandaag." }
        : { kop: "⭐⭐ Nog één deel!", sub: "Nog 5 minuten en je kwartier is binnen." });
      try { if (navigator.vibrate) navigator.vibrate(60); } catch { /* */ }
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setFlits(null), 4000);
    });
    return () => { off(); if (timer) clearTimeout(timer); };
  }, []);
  if (!flits) return null;
  return (
    <div role="status" style={{
      position: "fixed", left: "50%", bottom: "calc(96px + env(safe-area-inset-bottom))", transform: "translateX(-50%)",
      zIndex: 10000, background: "#fffef8", color: "#1c2840", borderRadius: 16, padding: "12px 18px",
      boxShadow: "0 8px 24px rgba(0,0,0,.35)", fontFamily: "var(--font-display)", textAlign: "center", maxWidth: "88vw",
    }}>
      <div style={{ fontSize: 17, fontWeight: 900 }}>{flits.kop}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#556", marginTop: 2 }}>{flits.sub}</div>
    </div>
  );
}
