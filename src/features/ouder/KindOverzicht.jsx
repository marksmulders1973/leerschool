// 📊 KindOverzicht — totaaloverzicht per gekoppeld kind (Mark 1 sep 2026:
// "als het dagrapport, maar dan de voortgang van je kind"). Fullscreen-overlay
// vanaf de gekoppelde-kind-kaart in OuderInzicht (👶 Mijn kinderen → 📊).
// Gedeeld ontwerp: dezelfde component kan later ook de leerkracht-kant dienen
// (leraar-leerling-koppeling staat sinds v532 op gelijk niveau).
//
// Databronnen (allemaal via de RLS-rechten die de ouder al heeft):
// - leaderboard (incl. `detail` per-vraag-json sinds 1 sep — oudere rijen null)
// - pathManifest voor leerpad-titels bij "Wat nu?"
// Privacy: alléén renderen voor een geverifieerde koppeling (caller bewaakt).

import { useEffect, useMemo, useState } from "react";
import supabase from "../../supabase.js";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { track } from "../../utils.js";

const PATHS_BY_ID = Object.fromEntries(pathManifest.map((p) => [p.id, p]));

const vakLabel = (s) => (s === "cito" ? "Doorstroomtoets" : (s || "overig"));
const pct = (r) => (r.percentage != null ? r.percentage : Math.round(((r.score || 0) / (r.total || 1)) * 100));
const pctKleur = (p) => (p >= 70 ? "#69f0ae" : p >= 50 ? "#ffc107" : "#ff8a65");
const datumKort = (iso) => {
  try { return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "short" }); } catch { return ""; }
};

export default function KindOverzicht({ child, onBack, onKlaarzetten }) {
  const [rows, setRows] = useState(null); // null = laden
  const [openToets, setOpenToets] = useState(null); // leaderboard-rij-id met uitklap
  const [mailStatus, setMailStatus] = useState(""); // "" | "bezig" | "ok" | "fout"

  useEffect(() => { track("kind_overzicht_open", {}); }, []);

  useEffect(() => {
    let cancel = false;
    let q = supabase.from("leaderboard")
      .select("id, subject, level, topic, title, score, total, percentage, time_taken, completed_at, detail")
      .eq("player_name", child.child_name);
    // Zelfde naamgenoten-bescherming als OuderInzicht: scope op het gekoppelde
    // account waar dat kan; legacy-koppelingen zonder uid houden naam-match.
    if (child.child_user_id) q = q.eq("user_id", child.child_user_id);
    q.order("completed_at", { ascending: false }).limit(100)
      .then(({ data }) => { if (!cancel) setRows(data || []); });
    return () => { cancel = true; };
  }, [child.child_name, child.child_user_id]);

  // ── Afleidingen ──────────────────────────────────────────────────────────
  const perVak = useMemo(() => {
    const m = new Map();
    (rows || []).forEach((r) => {
      const key = vakLabel(r.subject);
      const agg = m.get(key) || { vak: key, n: 0, som: 0, beste: 0, laatste: null };
      agg.n += 1; agg.som += pct(r);
      agg.beste = Math.max(agg.beste, pct(r));
      if (!agg.laatste || r.completed_at > agg.laatste) agg.laatste = r.completed_at;
      m.set(key, agg);
    });
    return [...m.values()].sort((a, b) => (b.laatste || "").localeCompare(a.laatste || ""));
  }, [rows]);

  const sterkZwak = useMemo(() => {
    const m = new Map();
    (rows || []).forEach((r) => (r.detail || []).forEach((d) => {
      if (!d?.ond) return;
      const agg = m.get(d.ond) || { ond: d.ond, goed: 0, tot: 0, paden: new Set() };
      agg.tot += 1; if (d.goed) agg.goed += 1;
      if (!d.goed && d.pad) agg.paden.add(d.pad);
      m.set(d.ond, agg);
    }));
    const alle = [...m.values()].map((a) => ({ ...a, p: Math.round((a.goed / a.tot) * 100) }));
    return {
      sterk: alle.filter((a) => a.tot >= 3 && a.p >= 80).sort((x, y) => y.p - x.p).slice(0, 3),
      zwak: alle.filter((a) => a.tot >= 2 && a.p < 60).sort((x, y) => x.p - y.p).slice(0, 3),
    };
  }, [rows]);

  // "Wat nu?": leerpaden die horen bij de fout gemaakte vragen van de zwakste
  // onderwerpen — dat is de kern-lus (fout → begrip) voor thuis.
  const watNu = useMemo(() => {
    const ids = [];
    sterkZwak.zwak.forEach((z) => z.paden.forEach((id) => { if (!ids.includes(id)) ids.push(id); }));
    // Vangnet: geen detail-data (alleen oude toetsen) → niets aanraden i.p.v. gokken.
    return ids.slice(0, 3).map((id) => ({ id, titel: PATHS_BY_ID[id] ? `${PATHS_BY_ID[id].emoji ? PATHS_BY_ID[id].emoji + " " : ""}${PATHS_BY_ID[id].title}` : id }));
  }, [sterkZwak]);

  const mailOverzicht = async () => {
    setMailStatus("bezig");
    try {
      const { data: sess } = await supabase.auth.getSession();
      const token = sess?.session?.access_token;
      if (!token) throw new Error("geen sessie");
      const r = await fetch("/api/kind-overzicht-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          kindNaam: child.child_name,
          perVak: perVak.map((v) => ({ vak: v.vak, n: v.n, gem: Math.round(v.som / v.n), beste: v.beste })),
          sterk: sterkZwak.sterk.map((s) => ({ ond: s.ond, p: s.p, tot: s.tot })),
          zwak: sterkZwak.zwak.map((z) => ({ ond: z.ond, p: z.p, tot: z.tot })),
          watNu: watNu.map((w) => ({ id: w.id, titel: w.titel })),
          recent: (rows || []).slice(0, 8).map((r2) => ({
            titel: r2.title || `${vakLabel(r2.subject)} ${r2.level || ""}`.trim(),
            p: pct(r2), score: r2.score, total: r2.total, datum: r2.completed_at,
          })),
        }),
      });
      if (!r.ok) throw new Error("mail-api " + r.status);
      setMailStatus("ok");
      track("kind_overzicht_mail", {});
    } catch {
      setMailStatus("fout");
    }
  };

  const kaart = { borderRadius: 14, border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.04)", padding: "14px 16px", marginBottom: 12 };
  const kop = { fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 8 };
  const body = { fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "#0d1b2e", overflowY: "auto", padding: "16px 14px 90px", WebkitOverflowScrolling: "touch" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* Kop + acties */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <button onClick={onBack} aria-label="Terug" style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "#fff", borderRadius: 10, padding: "7px 12px", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700 }}>← Terug</button>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 800, color: "#69f0ae" }}>📊 {child.child_name}</div>
        </div>
        <div style={{ ...body, marginBottom: 12 }}>Totaaloverzicht — alles wat {child.child_name} oefende, wat al sterk is en wat de volgende stap is.</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          <button onClick={mailOverzicht} disabled={mailStatus === "bezig" || !rows} style={{ border: "1px solid rgba(0,176,255,0.5)", background: "rgba(0,176,255,0.12)", color: "#00b0ff", borderRadius: 999, padding: "7px 14px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700 }}>
            {mailStatus === "bezig" ? "✉️ Versturen…" : mailStatus === "ok" ? "✓ In je mailbox!" : mailStatus === "fout" ? "✉️ Mislukt — probeer opnieuw" : "✉️ Mail dit overzicht naar mij"}
          </button>
          {onKlaarzetten && (
            <button onClick={() => { onBack?.(); onKlaarzetten(child.id, child.child_name); }} style={{ border: "1px solid rgba(255,105,135,0.5)", background: "rgba(255,105,135,0.14)", color: "#ff9fb2", borderRadius: 999, padding: "7px 14px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700 }}>
              💛 lessen klaarzetten
            </button>
          )}
        </div>

        {rows == null && <div style={{ ...body, textAlign: "center", padding: 30 }}>Laden…</div>}

        {rows != null && rows.length === 0 && (
          <div style={kaart}>
            <div style={kop}>Nog geen resultaten</div>
            <div style={body}>Zodra {child.child_name} (ingelogd op het gekoppelde account) een toets of oefenronde afrondt, verschijnt hier het overzicht.</div>
          </div>
        )}

        {rows != null && rows.length > 0 && (
          <>
            {/* Per vak */}
            <div style={kaart}>
              <div style={kop}>📚 Per vak</div>
              {perVak.map((v) => (
                <div key={v.vak} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={body}><strong style={{ color: "rgba(255,255,255,0.85)" }}>{v.vak}</strong> · {v.n}× geoefend · laatst {datumKort(v.laatste)}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: pctKleur(Math.round(v.som / v.n)) }}>gem. {Math.round(v.som / v.n)}% · top {v.beste}%</div>
                </div>
              ))}
            </div>

            {/* Sterk / nog oefenen */}
            <div style={kaart}>
              <div style={kop}>💪 Sterk &amp; 🎯 nog oefenen</div>
              {sterkZwak.sterk.length === 0 && sterkZwak.zwak.length === 0 ? (
                <div style={body}>Nog te weinig vraag-detail om sterke en zwakke onderwerpen te zien — dit vult zich vanzelf bij elke volgende toets (vanaf 1 sep bewaren we per vraag wat er is geantwoord).</div>
              ) : (
                <>
                  {sterkZwak.sterk.map((s) => (
                    <div key={"s" + s.ond} style={{ ...body, padding: "3px 0" }}>💪 <strong style={{ color: "#69f0ae" }}>{s.ond}</strong> — {s.p}% goed ({s.tot} vragen)</div>
                  ))}
                  {sterkZwak.zwak.map((z) => (
                    <div key={"z" + z.ond} style={{ ...body, padding: "3px 0" }}>🎯 <strong style={{ color: "#ff8a65" }}>{z.ond}</strong> — {z.p}% goed ({z.tot} vragen)</div>
                  ))}
                </>
              )}
            </div>

            {/* Wat nu? */}
            {watNu.length > 0 && (
              <div style={{ ...kaart, border: "1px solid rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.05)" }}>
                <div style={{ ...kop, color: "#ffd54f" }}>🧭 Wat nu? — de volgende stap</div>
                <div style={{ ...body, marginBottom: 8 }}>Deze lessen horen precies bij de vragen die nog fout gingen — samen doorlopen of klaarzetten:</div>
                {watNu.map((w) => (
                  <div key={w.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, padding: "5px 0" }}>
                    <div style={{ ...body, color: "rgba(255,255,255,0.85)" }}>{w.titel}</div>
                    <a href={`/leren/pad?id=${encodeURIComponent(w.id)}`} style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#ffd54f", textDecoration: "none", border: "1px solid rgba(255,213,79,0.4)", borderRadius: 999, padding: "4px 10px", whiteSpace: "nowrap" }}>📖 bekijk les</a>
                  </div>
                ))}
              </div>
            )}

            {/* Toets-historie, klikbaar tot op de vraag */}
            <div style={kaart}>
              <div style={kop}>🕐 Alle resultaten — tik voor het vraag-voor-vraag-verslag</div>
              {rows.map((r) => {
                const open = openToets === r.id;
                const p = pct(r);
                return (
                  <div key={r.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <div onClick={() => setOpenToets(open ? null : r.id)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", cursor: "pointer" }}>
                      <div style={body}>
                        <strong style={{ color: "rgba(255,255,255,0.85)" }}>{r.title || `${vakLabel(r.subject)} ${r.level || ""}`.trim()}</strong>
                        <span style={{ opacity: 0.7 }}> · {datumKort(r.completed_at)} · {r.score}/{r.total}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: pctKleur(p) }}>{p}%</span>
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{open ? "▲" : "▼"}</span>
                      </div>
                    </div>
                    {open && (
                      Array.isArray(r.detail) && r.detail.length > 0 ? (
                        <div style={{ padding: "2px 0 10px" }}>
                          {r.detail.map((d, i) => (
                            <div key={i} style={{ borderRadius: 10, border: `1px solid ${d.goed ? "rgba(105,240,174,0.25)" : "rgba(255,138,101,0.3)"}`, background: d.goed ? "rgba(105,240,174,0.05)" : "rgba(255,138,101,0.06)", padding: "8px 10px", marginBottom: 6 }}>
                              <div style={{ ...body, color: "rgba(255,255,255,0.8)" }}>{d.goed ? "✅" : "❌"} <strong>Vraag {i + 1}.</strong> {d.v}</div>
                              {!d.goed && (
                                <div style={{ ...body, fontSize: 12, marginTop: 3 }}>
                                  {d.a != null ? <>Antwoord van {child.child_name}: <span style={{ color: "#ff8a65" }}>{d.a}</span> · </> : <>Niet beantwoord · </>}
                                  juiste antwoord: <span style={{ color: "#69f0ae" }}>{d.j}</span>
                                  {d.pad && PATHS_BY_ID[d.pad] && (
                                    <> · <a href={`/leren/pad?id=${encodeURIComponent(d.pad)}`} style={{ color: "#ffd54f", fontWeight: 700 }}>📖 bekijk samen de uitleg</a></>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{ ...body, fontSize: 12, padding: "0 0 10px", opacity: 0.7 }}>
                          Van deze toets is geen vraag-detail bewaard (gemaakt vóór 1 september 2026) — vanaf nu bewaren we dat bij elke toets automatisch.
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
