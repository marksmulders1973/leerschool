import { useState, useEffect, useCallback } from "react";
import supabase from "../supabase.js";
import { track } from "../utils.js";

// "Met dank aan"-bedankmuur (Mark 2026-06-05). Eerbetoon aan iedereen die
// bijdraagt aan Leerkwartier:
//   - partners/influencers: naam + link (de 12-maanden-vermelding als dank)
//   - delers/aanbrengers: naam (gegarandeerd vermeld bovenop de win-kans)
// Bezoekers kunnen zichzelf toevoegen (komt op 'pending', Mark keurt goed).
// Admin (Mark) modereert inline: goedkeuren/verwijderen + partner toevoegen.
//
// Props: onBack?, onHome?, authUser?
export default function MetDankAan({ onBack, onHome, authUser }) {
  const isAdmin = (authUser?.email || "").toLowerCase() === "mark-smulders@hotmail.com";
  const [partners, setPartners] = useState([]);
  const [delers, setDelers] = useState([]);
  const [pending, setPending] = useState([]);
  const [naam, setNaam] = useState("");
  const [status, setStatus] = useState("idle"); // idle | busy | done | error
  const [pNaam, setPNaam] = useState("");
  const [pLink, setPLink] = useState("");

  const laad = useCallback(async () => {
    const { data } = await supabase
      .from("contributors")
      .select("id,kind,naam,link,created_at")
      .eq("status", "approved")
      .order("created_at", { ascending: false });
    const rows = data || [];
    setPartners(rows.filter((r) => r.kind === "partner"));
    setDelers(rows.filter((r) => r.kind === "deler"));
    if (isAdmin) {
      const { data: pend } = await supabase.rpc("list_pending_contributors");
      setPending(pend || []);
    }
  }, [isAdmin]);

  useEffect(() => { track("dank_view", {}); laad(); }, [laad]);

  const voegToe = async () => {
    const schoon = naam.trim().slice(0, 30);
    if (!schoon) return;
    setStatus("busy");
    const { error } = await supabase.from("contributors").insert({ kind: "deler", naam: schoon });
    if (error) { setStatus("error"); return; }
    track("dank_aanmelding", {});
    setNaam(""); setStatus("done");
  };

  const adminAddPartner = async () => {
    if (!pNaam.trim()) return;
    await supabase.rpc("add_partner", { p_naam: pNaam.trim(), p_link: pLink.trim() || null });
    setPNaam(""); setPLink(""); laad();
  };
  const goedkeuren = async (id) => { await supabase.rpc("approve_contributor", { p_id: id }); laad(); };
  const verwijderen = async (id) => { await supabase.rpc("remove_contributor", { p_id: id }); laad(); };

  const knop = {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, cursor: "pointer",
    border: "none", borderRadius: 12, padding: "12px 16px", color: "#fff",
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  };
  const card = {
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16, padding: "18px 20px", marginBottom: 16,
  };
  const chip = {
    display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,213,79,0.12)",
    border: "1px solid rgba(255,213,79,0.35)", borderRadius: 999, padding: "6px 12px",
    fontFamily: "var(--font-body)", fontSize: 14, color: "#ffe082", margin: "0 6px 8px 0",
  };

  return (
    <div style={{ minHeight: "100dvh", background: "var(--bg, #0d1117)", color: "#fff", padding: "16px 16px 48px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button onClick={onBack || onHome} style={{ ...knop, background: "rgba(255,255,255,0.08)", padding: "8px 12px", fontSize: 14, marginBottom: 16 }}>← Terug</button>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, margin: "0 0 6px", lineHeight: 1.15 }}>
          💛 Met dank aan
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.85)", marginTop: 0 }}>
          Een eerbetoon aan iedereen die meebouwt aan Leerkwartier — de mensen die
          ons delen en doorsturen, en de partners die ons een warm hart toedragen.
          Zonder jullie geen gratis Leerkwartier. 🙏
        </p>

        {/* Partners */}
        {partners.length > 0 && (
          <div style={card}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12 }}>
              ⭐ Onze partners
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {partners.map((p) => (
                <div key={p.id} style={{ ...chip, background: "rgba(124,77,255,0.15)", border: "1px solid rgba(124,77,255,0.4)", color: "#d1c4ff", fontSize: 15, padding: "8px 14px" }}>
                  {p.link ? (
                    <a href={p.link.startsWith("http") ? p.link : `https://${p.link}`} target="_blank" rel="noopener noreferrer"
                       style={{ color: "#d1c4ff", textDecoration: "none", fontWeight: 700 }}>
                      {p.naam} ↗
                    </a>
                  ) : <strong>{p.naam}</strong>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delers / aanbrengers */}
        <div style={card}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12 }}>
            🤝 Iedereen die deelt &amp; doorstuurt
          </div>
          {delers.length > 0 ? (
            <div>{delers.map((d) => <span key={d.id} style={chip}>💛 {d.naam}</span>)}</div>
          ) : (
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>
              Wees de eerste op de muur! 👇
            </p>
          )}
        </div>

        {/* Zelf toevoegen */}
        <div style={card}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>
            Help je mee? Zet je naam op de muur
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>
            Deel je Leerkwartier met anderen? Dan verdien je een plekje hier — gegarandeerd,
            bovenop je kans op een gratis Pro-jaar. Vul je voornaam in (we plaatsen 'm na een korte check).
          </p>
          {status === "done" ? (
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#69f0ae" }}>
              💛 Bedankt! Je naam komt op de muur zodra we 'm hebben goedgekeurd.
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <input
                value={naam} onChange={(e) => setNaam(e.target.value)} maxLength={30}
                placeholder="Je voornaam"
                style={{ flex: "1 1 180px", minWidth: 160, fontFamily: "var(--font-body)", fontSize: 15,
                  background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10,
                  padding: "10px 12px", color: "#fff" }}
              />
              <button onClick={voegToe} disabled={status === "busy" || !naam.trim()}
                style={{ ...knop, background: naam.trim() ? "linear-gradient(135deg, #ffd54f, #ffb300)" : "rgba(255,255,255,0.1)", color: "#3a2a00" }}>
                💛 Zet me op de muur
              </button>
            </div>
          )}
          {status === "error" && (
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#ff8a80", marginTop: 8 }}>
              Kon je naam niet toevoegen. Probeer het zo nog eens.
            </div>
          )}
        </div>

        {/* Admin-moderatie */}
        {isAdmin && (
          <div style={{ ...card, border: "1px dashed rgba(255,213,79,0.4)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, marginBottom: 10 }}>
              🔧 Admin — moderatie
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>
              Wachtend op goedkeuring ({pending.length}):
            </div>
            {pending.map((p) => (
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: 14 }}>{p.naam}</span>
                <button onClick={() => goedkeuren(p.id)} style={{ ...knop, background: "#00c853", padding: "6px 10px", fontSize: 13 }}>Goedkeuren</button>
                <button onClick={() => verwijderen(p.id)} style={{ ...knop, background: "rgba(255,138,128,0.25)", padding: "6px 10px", fontSize: 13 }}>Weg</button>
              </div>
            ))}
            <div style={{ marginTop: 14, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>
                Partner toevoegen (naam + link, voor de 12-maanden-vermelding):
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <input value={pNaam} onChange={(e) => setPNaam(e.target.value)} placeholder="Naam partner"
                  style={{ flex: "1 1 140px", fontFamily: "var(--font-body)", fontSize: 14, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "8px 10px", color: "#fff" }} />
                <input value={pLink} onChange={(e) => setPLink(e.target.value)} placeholder="Link (optioneel)"
                  style={{ flex: "1 1 140px", fontFamily: "var(--font-body)", fontSize: 14, background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "8px 10px", color: "#fff" }} />
                <button onClick={adminAddPartner} style={{ ...knop, background: "var(--accent, #7c4dff)", padding: "8px 12px", fontSize: 14 }}>+ Partner</button>
              </div>
            </div>
          </div>
        )}

        <button onClick={onHome || onBack} style={{ ...knop, background: "var(--accent, #7c4dff)", width: "100%", padding: "14px" }}>
          Naar Leerkwartier →
        </button>
      </div>
    </div>
  );
}
