import { useEffect, useState } from "react";
import supabase from "../supabase.js";

export default function AdminFeedback({ onBack, onHome }) {
  const [items, setItems] = useState(null);
  const [filter, setFilter] = useState("open");
  const [busy, setBusy] = useState({});

  const laad = async () => {
    let q = supabase.from("feedback").select("*").order("created_at", { ascending: false }).limit(200);
    if (filter === "open") q = q.eq("resolved", false).eq("blocked", false);
    if (filter === "resolved") q = q.eq("resolved", true);
    if (filter === "blocked") q = q.eq("blocked", true);
    const { data } = await q;
    setItems(data || []);
  };
  useEffect(() => { laad(); }, [filter]);

  const update = async (id, patch) => {
    setBusy(b => ({ ...b, [id]: true }));
    await supabase.from("feedback").update(patch).eq("id", id);
    setBusy(b => ({ ...b, [id]: false }));
    laad();
  };

  const fmtDatum = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString("nl-NL", { dateStyle: "short", timeStyle: "short" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e1a", padding: "20px 16px 60px", color: "#fff", fontFamily: "'Nunito', sans-serif" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: "#ffcc40", margin: 0 }}>💡 Tips & Feedback</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={onBack} style={{ padding: "8px 12px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>← Terug</button>
            <button onClick={onHome} style={{ padding: "8px 12px", background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>🏠 Home</button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
          {[
            { id: "open", label: "Open" },
            { id: "resolved", label: "Afgehandeld" },
            { id: "blocked", label: "Geblokkeerd" },
            { id: "all", label: "Alles" },
          ].map(t => (
            <button key={t.id} onClick={() => setFilter(t.id)} style={{
              padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer",
              background: filter === t.id ? "linear-gradient(135deg, #ffcc40, #ffaa00)" : "rgba(255,255,255,0.06)",
              color: filter === t.id ? "#1a1a00" : "rgba(255,255,255,0.7)",
              border: "1px solid " + (filter === t.id ? "transparent" : "rgba(255,255,255,0.1)"),
            }}>{t.label}</button>
          ))}
        </div>

        {items === null ? (
          <div style={{ color: "rgba(255,255,255,0.5)", padding: 30, textAlign: "center" }}>Laden…</div>
        ) : items.length === 0 ? (
          <div style={{ color: "rgba(255,255,255,0.5)", padding: 30, textAlign: "center" }}>
            {filter === "open" ? "Geen openstaande tips. 🎉" : "Geen tips in deze categorie."}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map(item => (
              <div key={item.id} style={{
                background: item.blocked ? "rgba(244,67,54,0.08)" : item.resolved ? "rgba(255,255,255,0.03)" : "rgba(255,204,64,0.06)",
                border: "1px solid " + (item.blocked ? "rgba(244,67,54,0.3)" : item.resolved ? "rgba(255,255,255,0.08)" : "rgba(255,204,64,0.25)"),
                borderRadius: 12, padding: "12px 14px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                  <span><strong style={{ color: "#ffcc40" }}>{item.player_name || "anoniem"}</strong> · {fmtDatum(item.created_at)}</span>
                  <span>#{item.id}</span>
                </div>
                <div style={{ fontSize: 14, color: item.resolved ? "rgba(255,255,255,0.55)" : "#fff", whiteSpace: "pre-wrap", lineHeight: 1.4, marginBottom: 8 }}>
                  {item.message}
                </div>
                {item.screenshot_url && (
                  <a href={item.screenshot_url} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginBottom: 8 }}>
                    <img src={item.screenshot_url} alt="screenshot" style={{ maxWidth: "100%", maxHeight: 240, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)" }} />
                  </a>
                )}
                {item.page_url && (
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 6, wordBreak: "break-all" }}>
                    📍 {item.page_url}
                  </div>
                )}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {!item.resolved && (
                    <button disabled={busy[item.id]} onClick={() => update(item.id, { resolved: true })} style={{ padding: "5px 10px", background: "rgba(105,240,174,0.15)", border: "1px solid rgba(105,240,174,0.4)", color: "#69f0ae", borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>✓ Afhandelen</button>
                  )}
                  {item.resolved && (
                    <button disabled={busy[item.id]} onClick={() => update(item.id, { resolved: false })} style={{ padding: "5px 10px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", borderRadius: 6, fontSize: 11, cursor: "pointer" }}>↺ Heropenen</button>
                  )}
                  {!item.blocked ? (
                    <button disabled={busy[item.id]} onClick={() => update(item.id, { blocked: true, resolved: true })} style={{ padding: "5px 10px", background: "rgba(244,67,54,0.15)", border: "1px solid rgba(244,67,54,0.4)", color: "#ff7043", borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>🚫 Blokkeer</button>
                  ) : (
                    <button disabled={busy[item.id]} onClick={() => update(item.id, { blocked: false })} style={{ padding: "5px 10px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", borderRadius: 6, fontSize: 11, cursor: "pointer" }}>↺ Deblokkeer</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
