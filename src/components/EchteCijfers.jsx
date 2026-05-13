import { useEffect, useState } from "react";
import supabase from "../supabase.js";

// EchteCijfers — social proof met geverifieerde DB-cijfers, geen verzonnen
// claims. Mark request 2026-05-13 na advies "geen 1.700+ als je het niet
// weet". Past bij "rustige bijlesdocent"-identiteit: subtiele cijfers,
// geen schreeuwerige tellers of animaties.
//
// Telt:
//   - Toetsen afgenomen (rows in leaderboard)
//   - Leerpad-stappen voltooid (rows in learn_progress)
//   - Shares (rows in share_events)
//
// Vangt edge cases:
//   - Cijfers <10: toon "verse start" ipv getal (geen onderwhelm)
//   - Fout/timeout: render niets (geen broken UI)
//   - Caching: 10 min localStorage zodat geen DB-roundtrip elk page-load

const CACHE_KEY = "lk_echte_cijfers_v1";
const CACHE_TTL_MS = 10 * 60 * 1000;
const MIN_DISPLAY = 10; // onder dit aantal: niet tonen, te weinig social proof-waarde

function fmt(n) {
  // 1234 → "1.234" (NL-locale, punt als duizend-scheider)
  if (n < 1000) return String(n);
  return n.toLocaleString("nl-NL");
}

export default function EchteCijfers() {
  const [cijfers, setCijfers] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    // Probeer cache eerst (snelle render bij refresh).
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
      if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
        setCijfers(cached.data);
        return;
      }
    } catch (_) {}

    let cancelled = false;
    (async () => {
      try {
        // Drie parallelle counts via {count: 'exact', head: true} — alleen
        // het aantal, geen rijen. Snel + lichtgewicht.
        const [toetsenRes, stappenRes, sharesRes] = await Promise.all([
          supabase.from("leaderboard").select("*", { count: "exact", head: true }),
          supabase.from("learn_progress").select("*", { count: "exact", head: true }),
          supabase.from("share_events").select("*", { count: "exact", head: true }),
        ]);
        if (cancelled) return;
        const data = {
          toetsen: toetsenRes.count || 0,
          stappen: stappenRes.count || 0,
          shares: sharesRes.count || 0,
        };
        setCijfers(data);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
        } catch (_) {}
      } catch (e) {
        if (!cancelled) setErr(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (err) return null;
  if (!cijfers) {
    // Skeleton — 3 stille placeholders ipv "Laden...". Vermijdt CLS.
    return (
      <div className="lk-content-wide" style={containerStyle}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={cellStyle}>
            <div style={{ ...numStyle, opacity: 0.3 }}>—</div>
            <div style={labelStyle}>&nbsp;</div>
          </div>
        ))}
      </div>
    );
  }

  // Filter: als alle 3 onder MIN_DISPLAY → render niets (te vroeg voor social proof).
  if (cijfers.toetsen < MIN_DISPLAY && cijfers.stappen < MIN_DISPLAY && cijfers.shares < MIN_DISPLAY) {
    return null;
  }

  const cells = [];
  if (cijfers.toetsen >= MIN_DISPLAY) {
    cells.push({ num: fmt(cijfers.toetsen), label: "toetsen gemaakt" });
  }
  if (cijfers.stappen >= MIN_DISPLAY) {
    cells.push({ num: fmt(cijfers.stappen), label: "leerpad-stappen voltooid" });
  }
  if (cijfers.shares >= MIN_DISPLAY) {
    cells.push({ num: fmt(cijfers.shares), label: "keer gedeeld" });
  }

  if (cells.length === 0) return null;

  return (
    <div className="lk-content-wide" style={containerStyle}>
      {cells.map((c, i) => (
        <div key={i} style={cellStyle}>
          <div style={numStyle}>{c.num}</div>
          <div style={labelStyle}>{c.label}</div>
        </div>
      ))}
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 8,
  padding: "12px 8px",
  marginBottom: 14,
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
};

const cellStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
  flex: 1,
  minWidth: 0,
  textAlign: "center",
};

const numStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 20,
  fontWeight: 800,
  color: "#00d4ff",
  lineHeight: 1.1,
};

const labelStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 11,
  color: "rgba(255,255,255,0.6)",
  lineHeight: 1.3,
};
