// ReclameBol — verborgen promo-/showcase-scherm voor de 3D-wereldbol.
// Bereikbaar via ?reclamebol (afgevangen in main.jsx, vóór de App-router, zodat
// de hook-volgorde van App.jsx ongemoeid blijft). Doel: laten zien hoe mooi de
// site eruitziet + een klikbare route naar het echte leerpad (deeplink).
//
// Wordt gebruikt om een GIF/video van de draaiende bol op te nemen voor social
// (FB/IG/Threads) en als klikbare web-promo / landingspagina.
import React, { Suspense, lazy } from "react";

const Wereldbol = lazy(() => import("./learn/geo/Wereldbol.jsx"));

// Deeplink naar het echte leerpad waar de bol in zit.
const DEEPLINK = "/?pad=continenten-wereld-po";

export default function ReclameBol() {
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
    </div>
  );
}
