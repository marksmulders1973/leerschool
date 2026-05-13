import { useEffect, useState } from "react";
import supabase from "../supabase.js";

// AI-referrer-log dashboard (Mark request 2026-05-13).
// Toont welke AI-engines verkeer naar leerkwartier.app sturen.
// Twee soorten ingangen:
//   1. Crawlers (is_crawler=true) → AI-bot bezoekt zelf de site (training/search)
//   2. Doorklikkers (is_crawler=false) → mens klikt vanuit AI-chat naar de site
// Vereist admin-email login (RLS-policy in 20260513_ai_referrer_log.sql).

const SOURCE_LABELS = {
  chatgpt: "🟢 ChatGPT (OpenAI)",
  claude: "🟠 Claude (Anthropic)",
  perplexity: "🔵 Perplexity",
  gemini: "🟣 Gemini (Google)",
  copilot: "🔷 Copilot (Microsoft)",
  commoncrawl: "⚫ Common Crawl",
  meta: "🔵 Meta AI",
  bytedance: "⚫ Bytedance (TikTok)",
  apple: "🍎 Apple",
};

function sourceLabel(s) {
  return SOURCE_LABELS[s] || `❔ ${s}`;
}

function fmtDatum(iso) {
  return new Date(iso).toLocaleString("nl-NL", { dateStyle: "short", timeStyle: "short" });
}

export default function AdminAIReferrers({ onBack, onHome }) {
  const [rows, setRows] = useState(null);
  const [period, setPeriod] = useState(7);
  const [filter, setFilter] = useState("all"); // all | crawler | human

  const load = async () => {
    setRows(null);
    const since = new Date(Date.now() - period * 24 * 3600 * 1000).toISOString();
    let q = supabase
      .from("ai_referrer_log")
      .select("*")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(500);
    if (filter === "crawler") q = q.eq("is_crawler", true);
    if (filter === "human") q = q.eq("is_crawler", false);
    const { data, error } = await q;
    if (error) {
      console.warn("[ai-ref-log] read error", error);
    }
    setRows(data || []);
  };

  useEffect(() => { load(); }, [period, filter]);

  // Aggregeer naar top-bronnen + per dag
  const summary = (() => {
    if (!rows) return null;
    const bySource = {};
    const byDay = {};
    rows.forEach((r) => {
      bySource[r.ai_source] = (bySource[r.ai_source] || 0) + 1;
      const day = r.created_at.slice(0, 10);
      byDay[day] = (byDay[day] || 0) + 1;
    });
    const sources = Object.entries(bySource).sort((a, b) => b[1] - a[1]);
    const days = Object.entries(byDay).sort((a, b) => a[0].localeCompare(b[0]));
    return { sources, days, total: rows.length };
  })();

  return (
    <div style={{ minHeight: "100dvh", background: "#0a0e1a", padding: "20px 16px 60px", color: "var(--color-text-strong)", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: "#00d4ff", margin: 0 }}>🤖 AI-verkeer</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={onBack} style={{ padding: "8px 12px", background: "rgba(255,255,255,0.08)", color: "var(--color-text-strong)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>← Terug</button>
            <button onClick={onHome} style={{ padding: "8px 12px", background: "rgba(255,255,255,0.08)", color: "var(--color-text-strong)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>🏠 Home</button>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 14 }}>
          Welke AI-engines hebben naar leerkwartier.app verwezen? Crawlers (bots die zelf bezoeken voor training) + doorklikkers (mensen uit een AI-chat).
        </p>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {[7, 30, 90].map((d) => (
            <button
              key={d}
              onClick={() => setPeriod(d)}
              style={{
                padding: "6px 12px",
                background: period === d ? "rgba(0,212,255,0.20)" : "rgba(255,255,255,0.04)",
                color: period === d ? "#00d4ff" : "rgba(255,255,255,0.7)",
                border: `1px solid ${period === d ? "rgba(0,212,255,0.40)" : "rgba(255,255,255,0.10)"}`,
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Laatste {d} dagen
            </button>
          ))}
          <span style={{ width: 12 }} />
          {[
            ["all", "Alles"],
            ["crawler", "🤖 Crawlers"],
            ["human", "👤 Doorklikkers"],
          ].map(([k, label]) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              style={{
                padding: "6px 12px",
                background: filter === k ? "rgba(0,212,255,0.20)" : "rgba(255,255,255,0.04)",
                color: filter === k ? "#00d4ff" : "rgba(255,255,255,0.7)",
                border: `1px solid ${filter === k ? "rgba(0,212,255,0.40)" : "rgba(255,255,255,0.10)"}`,
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {rows === null ? (
          <p style={{ color: "rgba(255,255,255,0.5)" }}>Laden…</p>
        ) : rows.length === 0 ? (
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 12, padding: 18 }}>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", margin: 0 }}>
              Nog geen AI-verkeer gemeten in deze periode.
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: "8px 0 0" }}>
              Dit kan komen doordat (1) de log net actief is en nog niets is binnengekomen, of (2) AI-engines de site nog niet vinden. Check terug over 1-2 weken.
            </p>
          </div>
        ) : (
          <>
            {/* Top sources */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: 18, marginBottom: 14 }}>
              <h2 style={{ fontSize: 14, color: "#00d4ff", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Top bronnen ({summary.total} totaal)
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {summary.sources.map(([src, count]) => {
                  const pct = Math.round((count / summary.total) * 100);
                  return (
                    <div key={src} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 180, fontSize: 13 }}>{sourceLabel(src)}</div>
                      <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg, #00d4ff, #5db3ff)" }} />
                      </div>
                      <div style={{ width: 60, fontSize: 13, textAlign: "right", color: "rgba(255,255,255,0.75)" }}>
                        {count} ({pct}%)
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Per dag */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: 18, marginBottom: 14 }}>
              <h2 style={{ fontSize: 14, color: "#00d4ff", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Per dag (laatste {period} dagen)
              </h2>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80 }}>
                {summary.days.map(([day, count]) => {
                  const max = Math.max(...summary.days.map(d => d[1]));
                  const h = max ? Math.max(4, (count / max) * 70) : 4;
                  return (
                    <div key={day} title={`${day}: ${count}`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{ width: "100%", height: h, background: "linear-gradient(180deg, #00d4ff, #5db3ff)", borderRadius: "3px 3px 0 0" }} />
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>{day.slice(5)}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent entries */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: 18 }}>
              <h2 style={{ fontSize: 14, color: "#00d4ff", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Recent (max 50)
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {rows.slice(0, 50).map((r) => (
                  <div key={r.id} style={{ display: "flex", gap: 10, padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderRadius: 8, fontSize: 12 }}>
                    <div style={{ minWidth: 110, color: "rgba(255,255,255,0.55)" }}>{fmtDatum(r.created_at)}</div>
                    <div style={{ minWidth: 130 }}>{sourceLabel(r.ai_source)}</div>
                    <div style={{ minWidth: 60, color: r.is_crawler ? "#ff8c5a" : "#00e676" }}>
                      {r.is_crawler ? "🤖 bot" : "👤 mens"}
                    </div>
                    <div style={{ flex: 1, color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {r.path}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
