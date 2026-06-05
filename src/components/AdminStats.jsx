// AdminStats — admin-only statistieken-dashboard + dagrapport-snapshot.
// Haalt alles in één call op via RPC get_admin_stats() (security definer,
// alleen admin-e-mail krijgt data; anders { error:'forbidden' }).
// Onderdeel van het analytics-rapport (2026-06-05): managementdashboard + dagrapport.

import { useEffect, useState, useCallback } from "react";
import supabase from "../supabase.js";

function fmtDuur(sec) {
  sec = Math.round(sec || 0);
  const m = Math.floor(sec / 60), s = sec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}
function vandaagNL() {
  try { return new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" }); }
  catch { return ""; }
}

export default function AdminStats({ onBack, onHome }) {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState("laden"); // laden | ok | forbidden | error

  const laad = useCallback(async () => {
    setStatus("laden");
    const { data, error } = await supabase.rpc("get_admin_stats");
    if (error) { setStatus("error"); return; }
    if (data?.error === "forbidden") { setStatus("forbidden"); return; }
    setStats(data); setStatus("ok");
  }, []);
  useEffect(() => { laad(); }, [laad]);

  const C = { bg: "#0a0e1a", card: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", tekst: "#e7edf6", muted: "rgba(231,237,246,0.6)", groen: "#69f0ae", goud: "#ffd54f" };
  const wrap = { minHeight: "100dvh", background: C.bg, color: C.tekst, fontFamily: "'Nunito',sans-serif", padding: "20px 16px 90px" };
  const card = { background: C.card, border: C.border, borderRadius: 14, padding: "14px 16px" };
  const btnGhost = { padding: "7px 12px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: C.tekst, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };

  const b = stats?.bezoekers || {};
  const topBron = (stats?.top_bronnen || [])[0];

  return (
    <div style={wrap}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h1 style={{ fontFamily: "'Fredoka',sans-serif", fontSize: 24, margin: 0, color: C.groen }}>📊 Statistieken</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={laad} style={btnGhost}>↻ Ververs</button>
            {onBack && <button onClick={onBack} style={btnGhost}>← Terug</button>}
            {onHome && <button onClick={onHome} style={btnGhost}>🏠</button>}
          </div>
        </div>

        {status === "laden" && <div style={{ textAlign: "center", color: C.muted, padding: 30 }}>Laden…</div>}
        {status === "forbidden" && <div style={{ ...card, color: "#ff8a8a" }}>Geen toegang — log in met het admin-account.</div>}
        {status === "error" && <div style={{ ...card, color: "#ff8a8a" }}>Er ging iets mis bij het ophalen.</div>}

        {status === "ok" && stats && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Dagrapport-snapshot */}
            <div style={{ ...card, borderColor: "rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.06)" }}>
              <div style={{ fontFamily: "'Fredoka',sans-serif", fontWeight: 700, color: C.goud, marginBottom: 6 }}>📋 Dagrapport — {vandaagNL()}</div>
              <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(231,237,246,0.9)" }}>
                👥 <strong>{b.vandaag ?? 0}</strong> bezoekers vandaag (week: {b.week ?? 0}) ·
                ⏱️ gem. sessie <strong>{fmtDuur(stats.gem_duur_sec)}</strong> ·
                📈 beste bron <strong>{topBron ? `${topBron.bron} (${topBron.sessies})` : "—"}</strong><br />
                💬 <strong>{stats.wishes_pending}</strong> nieuwe suggesties (wachtrij) ·
                🐞 <strong>{stats.feedback_open}</strong> open meldingen ·
                🔗 <strong>{stats.qr_scans}</strong> QR-scans
              </div>
            </div>

            {/* Bezoekers */}
            <div style={card}>
              <H>👥 Bezoekers (unieke sessies)</H>
              <Grid>
                <Stat label="Vandaag" val={b.vandaag} />
                <Stat label="Deze week" val={b.week} />
                <Stat label="Deze maand" val={b.maand} />
                <Stat label="Totaal" val={b.totaal} />
              </Grid>
              <div style={{ marginTop: 10, display: "flex", gap: 18, flexWrap: "wrap" }}>
                <Stat label="Accounts (leerlingen)" val={stats.accounts} klein />
                <Stat label="Events totaal" val={stats.events_totaal} klein />
                <Stat label="Gem. sessieduur" val={fmtDuur(stats.gem_duur_sec)} klein />
                <Stat label="15-min behaald" val={stats.kwartier_behaald_totaal} klein />
              </div>
            </div>

            {/* Marketing: bronnen */}
            <div style={card}>
              <H>📈 Verkeer per bron</H>
              <Lijst rows={(stats.top_bronnen || []).map(r => [r.bron, r.sessies])} eenheid="sessies" />
              <div style={{ marginTop: 8, fontSize: 12, color: C.muted }}>🔗 QR-scans (?bron=qr): <strong>{stats.qr_scans}</strong></div>
            </div>

            {/* Populairste pagina's + acties */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={card}>
                <H>🔥 Populairste pagina's</H>
                <Lijst rows={(stats.top_paden || []).map(r => [r.pad, r.n])} eenheid="x" />
              </div>
              <div style={card}>
                <H>🖱️ Meest gebruikte acties</H>
                <Lijst rows={(stats.top_events || []).map(r => [r.name, r.n])} eenheid="x" />
              </div>
            </div>

            {/* Feedback */}
            <div style={card}>
              <H>💬 Feedback</H>
              <Grid>
                <Stat label="Suggesties (wachtrij)" val={stats.wishes_pending} />
                <Stat label="Open meldingen" val={stats.feedback_open} />
              </Grid>
            </div>

            <div style={{ fontSize: 11, color: C.muted, textAlign: "center" }}>
              Gegenereerd: {stats.gegenereerd_op ? new Date(stats.gegenereerd_op).toLocaleString("nl-NL") : "—"} · anonieme, cookieloze cijfers
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function H({ children }) {
  return <div style={{ fontFamily: "'Fredoka',sans-serif", fontSize: 15, fontWeight: 700, color: "#9be069", marginBottom: 10 }}>{children}</div>;
}
function Grid({ children }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10 }}>{children}</div>;
}
function Stat({ label, val, klein }) {
  return (
    <div>
      <div style={{ fontSize: klein ? 18 : 26, fontWeight: 800, color: "#69f0ae", fontFamily: "'Fredoka',sans-serif" }}>{val ?? "—"}</div>
      <div style={{ fontSize: 12, color: "rgba(231,237,246,0.6)" }}>{label}</div>
    </div>
  );
}
function Lijst({ rows, eenheid }) {
  if (!rows || rows.length === 0) return <div style={{ color: "rgba(231,237,246,0.5)", fontSize: 13 }}>Nog geen data.</div>;
  const max = Math.max(...rows.map(r => Number(r[1]) || 0), 1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {rows.map(([label, n], i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</div>
            <div style={{ height: 4, borderRadius: 999, background: "rgba(255,255,255,0.08)", marginTop: 3 }}>
              <div style={{ width: `${(Number(n) / max) * 100}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#00c853,#69f0ae)" }} />
            </div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#ffd54f", minWidth: 48, textAlign: "right" }}>{n} {eenheid}</div>
        </div>
      ))}
    </div>
  );
}
