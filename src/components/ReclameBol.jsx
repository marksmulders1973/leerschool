// ReclameBol — verborgen promo-/showcase-scherm voor de 3D-wereldbol.
// Bereikbaar via ?reclamebol (afgevangen in main.jsx, vóór de App-router, zodat
// de hook-volgorde van App.jsx ongemoeid blijft). Doel: laten zien hoe mooi de
// site eruitziet + een klikbare route naar het echte leerpad (deeplink).
//
// Wordt gebruikt om een GIF/video van de draaiende bol op te nemen voor social
// (FB/IG/Threads) en als klikbare web-promo / landingspagina.
import React, { Suspense, lazy, useEffect, useState } from "react";
import supabase from "../supabase.js";
import { track, getIncomingRef } from "../utils.js";

const Wereldbol = lazy(() => import("./learn/geo/Wereldbol.jsx"));

// Deeplink naar het echte leerpad waar de bol in zit.
const DEEPLINK = "/?pad=continenten-wereld-po";
// Lokaal vlaggetje zodat we het e-mail-blok niet opnieuw tonen na aanmelden.
const EMAIL_DONE_KEY = "lk_reclamebol_email_done";

export default function ReclameBol() {
  // Trechter meetbaar maken: log dat iemand via de wereldbol-reclame binnenkwam
  // (1× per bezoek). Interne bezoeken (Mark/Claude) worden door track() zelf
  // overgeslagen, dus deze cijfers zijn schoon.
  useEffect(() => { track("reclamebol_open"); }, []);

  // E-mail-haakje: verschijnt pas ná ~25 sec spelen (eerst de bol laten ontdekken),
  // tenzij iemand zich hier al eerder aanmeldde.
  const [emailZichtbaar, setEmailZichtbaar] = useState(false);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("idle"); // idle | busy | done | error

  useEffect(() => {
    let al = false;
    try { al = localStorage.getItem(EMAIL_DONE_KEY) === "1"; } catch {}
    if (al) { setEmailStatus("done"); return; }
    const t = setTimeout(() => {
      setEmailZichtbaar(true);
      track("reclamebol_email_shown");
    }, 25000);
    return () => clearTimeout(t);
  }, []);

  const meldEmailAan = async (e) => {
    e?.preventDefault?.();
    if (emailStatus === "busy") return;
    if (!email.includes("@") || !email.includes(".")) { setEmailStatus("error"); return; }
    setEmailStatus("busy");
    try {
      const { error } = await supabase.from("upgrade_waitlist").insert({
        email: email.trim(),
        plan: "wereldbol",
        source: "reclamebol",
        consent_at: new Date().toISOString(),
        ref: getIncomingRef(),
      });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(EMAIL_DONE_KEY, "1"); } catch {}
      track("reclamebol_email");
      setEmailStatus("done");
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: "28px 18px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Fredoka', system-ui, sans-serif",
        color: "#eaf2fb",
        background:
          "radial-gradient(1200px 700px at 50% -10%, #16365c 0%, #0b1f36 45%, #060d18 100%)",
      }}
    >
      {/* Merk-kop */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <img
          src="/icons/icon-512.png"
          alt="Leerkwartier"
          width={46}
          height={46}
          style={{ borderRadius: 12, boxShadow: "0 4px 14px rgba(0,0,0,0.4)" }}
        />
        <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.5px" }}>
          Leerkwartier
        </span>
      </div>
      <p style={{ margin: "0 0 4px", fontSize: 16, color: "#bcd6f2", fontWeight: 600 }}>
        Draai de <span style={{ color: "#ffd54f" }}>wereld</span> rond je vinger 🌍
      </p>
      <p style={{ margin: "0 0 18px", fontSize: 13.5, color: "#8fb2d6" }}>
        Werelddelen · landen · hoofdsteden — ontdek of oefen op een échte 3D-bol
      </p>

      {/* Glas-kaart met de echte bol */}
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 22,
          padding: "16px 16px 10px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Suspense
          fallback={
            <div style={{ height: 460, display: "grid", placeItems: "center", color: "#9fc0e0" }}>
              🌍 De aardbol laadt…
            </div>
          }
        >
          <Wereldbol modus="werelddeel" />
        </Suspense>
      </div>

      {/* Klikbare CTA → echte leerpad (deeplink) */}
      <a
        href={DEEPLINK}
        onClick={() => track("reclamebol_cta")}
        style={{
          marginTop: 22,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "15px 30px",
          borderRadius: 999,
          background: "linear-gradient(180deg, #ffd54f 0%, #ffb300 100%)",
          color: "#3a2600",
          fontSize: 18,
          fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 10px 30px rgba(255,179,0,0.4)",
        }}
      >
        🌍 Probeer de wereldbol — gratis
        <span style={{ fontSize: 20 }}>→</span>
      </a>
      <p style={{ marginTop: 14, fontSize: 13, color: "#7fa3c8" }}>
        leerkwartier.app · een kwartier per dag, écht begrijpen wat je leert
      </p>

      {/* E-mail-haakje — verschijnt na ~25s spelen: bewaar voortgang + gratis
          oefenblad. Schrijft naar upgrade_waitlist (plan 'wereldbol'). */}
      {emailZichtbaar && (
        <form
          onSubmit={meldEmailAan}
          style={{
            marginTop: 24, width: "100%", maxWidth: 460,
            background: "rgba(0,200,83,0.10)",
            border: "1.5px solid rgba(0,200,83,0.35)",
            borderRadius: 16, padding: "16px 18px", textAlign: "center",
            animation: "lkFadeUp 0.4s ease",
          }}
        >
          <style>{`@keyframes lkFadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
          {emailStatus === "done" ? (
            <div style={{ color: "#69f0ae", fontWeight: 700, fontSize: 15 }}>
              ✅ Gelukt! We sturen je het gratis oefenblad. Tot snel 🌍
            </div>
          ) : (
            <>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#69f0ae", marginBottom: 4 }}>
                📩 Wil je het gratis topografie-oefenblad?
              </div>
              <p style={{ margin: "0 0 12px", fontSize: 13, color: "#bcd6f2" }}>
                Laat je e-mail achter — we sturen je het printbare oefenblad (PDF) +
                af en toe een tip. Uitschrijven kan altijd.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (emailStatus === "error") setEmailStatus("idle"); }}
                  placeholder="jouw@email.nl"
                  style={{
                    flex: "1 1 200px", minWidth: 0, boxSizing: "border-box",
                    padding: "11px 14px", borderRadius: 10,
                    border: "2px solid rgba(255,255,255,0.18)",
                    background: "#0e2236", color: "#eaf2fb",
                    fontFamily: "'Fredoka', sans-serif", fontSize: 15,
                  }}
                />
                <button
                  type="submit"
                  disabled={emailStatus === "busy"}
                  style={{
                    padding: "11px 20px", borderRadius: 10, border: "none",
                    background: "linear-gradient(180deg,#00e676,#00c853)",
                    color: "#04210f", fontWeight: 800, fontSize: 15,
                    cursor: emailStatus === "busy" ? "default" : "pointer",
                    whiteSpace: "nowrap", fontFamily: "'Fredoka', sans-serif",
                  }}
                >
                  {emailStatus === "busy" ? "Versturen…" : "Stuur me het oefenblad"}
                </button>
              </div>
              {emailStatus === "error" && (
                <div style={{ marginTop: 8, color: "#ff8a8a", fontSize: 13 }}>
                  Vul een geldig e-mailadres in.
                </div>
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
}
