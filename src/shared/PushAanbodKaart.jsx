import { useEffect, useState } from "react";
import { track } from "../utils.js";
import { isPushSupported, getPermissionState, enablePush } from "./pushSubscription.js";

// Punt-1 bereik (Mark 4 aug 2026): push-aanbod op het leerpad-klaar-moment.
// Zelf-gatend: rendert alleen als push kan, nog niet gekozen is, en de kaart
// niet recent is weggeklikt. Op het klaar-scherm geldt: max één capture-kaart
// tegelijk — deze verschijnt pas als de e-mail al binnen is (zie LearnPath).
const WEG_KEY = "lk_push_aanbod_weg";
const WEG_DAGEN = 30;

function recentWeggeklikt() {
  try {
    const v = localStorage.getItem(WEG_KEY);
    if (!v) return false;
    return (Date.now() - new Date(v).getTime()) < WEG_DAGEN * 24 * 60 * 60 * 1000;
  } catch { return false; }
}

export default function PushAanbodKaart({ playerName, plek = "onbekend" }) {
  const [status, setStatus] = useState("idle"); // idle | busy | aan | weg
  const [tonen, setTonen] = useState(false);

  useEffect(() => {
    if (isPushSupported() && getPermissionState() === "default" && !recentWeggeklikt()) {
      setTonen(true);
      track("push_aanbod_getoond", { plek });
    }
  }, [plek]);

  if (!tonen || status === "weg") return null;

  const zetAan = async () => {
    setStatus("busy");
    const r = await enablePush({ playerName });
    if (r.ok) {
      setStatus("aan");
      track("push_aanbod_aan", { plek });
    } else {
      // Geweigerd of technisch mis — niet zeuren, kaart weg.
      setStatus("weg");
      track("push_aanbod_mislukt", { plek, reden: r.reason || "" });
    }
  };
  const nietNu = () => {
    try { localStorage.setItem(WEG_KEY, new Date().toISOString()); } catch {}
    setStatus("weg");
    track("push_aanbod_weg", { plek });
  };

  if (status === "aan") {
    return (
      <div style={{ ...wrap, borderColor: "rgba(0,200,83,0.45)", background: "rgba(0,200,83,0.08)" }}>
        <span style={{ fontSize: 22 }} aria-hidden="true">✅</span>
        <span style={{ flex: 1, lineHeight: 1.4, fontSize: 13 }}>
          <strong>Staat aan!</strong> Je krijgt een seintje als er weer een kwartier voor je klaarstaat.
        </span>
      </div>
    );
  }

  return (
    <div style={wrap}>
      <span style={{ fontSize: 22 }} aria-hidden="true">🔔</span>
      <span style={{ flex: 1, lineHeight: 1.4, fontSize: 13 }}>
        <strong>Goed bezig! Wil je morgen een seintje voor je volgende kwartier?</strong>
        <br />
        <span style={{ fontSize: 12, color: "var(--color-text)" }}>
          Eén berichtje per dag, alleen als er iets voor je klaarstaat.
        </span>
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
        <button onClick={zetAan} disabled={status === "busy"} style={jaBtn}>
          {status === "busy" ? "Bezig…" : "Ja, zet aan"}
        </button>
        <button onClick={nietNu} style={neeBtn}>Niet nu</button>
      </span>
    </div>
  );
}

const wrap = {
  display: "flex", alignItems: "center", gap: 10, marginTop: 12,
  padding: "12px 14px", borderRadius: 12,
  background: "rgba(155,77,224,0.10)", border: "1px solid rgba(155,77,224,0.45)",
  color: "var(--color-text-strong)", fontFamily: "var(--font-body)",
};
const jaBtn = {
  padding: "8px 14px", borderRadius: 10, border: "none", cursor: "pointer",
  background: "linear-gradient(135deg, #9b4de0, #7c3aed)", color: "#fff",
  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800, minHeight: 36,
};
const neeBtn = {
  padding: 0, background: "none", border: "none", cursor: "pointer",
  color: "var(--color-text-soft)", fontSize: 12, textDecoration: "underline",
  fontFamily: "var(--font-body)",
};
