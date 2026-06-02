// WishesBoard — openbaar "Tips aan de maker"-bord. Mensen sturen wensen/mening
// (optioneel 1-5 sterren), kunnen elkaars tips beleefd steunen (👍) en erop
// reageren. ALLES komt eerst in de wachtrij: pas zichtbaar na review (Mark).
// Scheld-/vieze-woorden-filter blokkeert direct; review is de definitieve check.
// Admin (Mark) ziet de wachtrij inline en keurt goed/af.

import { useEffect, useState } from "react";
import {
  submitWish, listApprovedWishes, listPendingWishes, moderateWish, supportWish,
} from "../data/repos/wishesRepo.js";

const ADMIN_EMAIL = "mark-smulders@hotmail.com";

// Soft-filter: blokkeert direct met vriendelijke melding. Review vangt de rest.
const BAD_WORDS = [
  "kanker", "kenker", "kut", "lul", "hoer", "slet", "klootzak", "tyfus", "tering",
  "mongool", "kech", "neuk", "fuck", "shit", "bitch", "stomme", "debiel", "idioot",
  "achterlijk", "homo", "flikker", "kkr", "godver", "rot op", "sukkel",
];
function bevatScheldwoord(tekst) {
  const t = " " + tekst.toLowerCase().replace(/[^a-zà-ÿ ]/g, " ") + " ";
  return BAD_WORDS.some((w) => t.includes(" " + w + " ") || t.includes(w));
}

const VOORBEELDEN = [
  "Ik mis uitleg over…",
  "Het zou fijn zijn als…",
  "Ik snap … nog niet goed",
  "Kunnen jullie … toevoegen?",
];

const SUPPORTED_KEY = "lk_wish_supported_v1";
function getSupported() {
  try { return new Set(JSON.parse(localStorage.getItem(SUPPORTED_KEY) || "[]")); } catch { return new Set(); }
}
function markSupported(id) {
  try {
    const s = getSupported(); s.add(id);
    localStorage.setItem(SUPPORTED_KEY, JSON.stringify([...s]));
  } catch {}
}

function fmt(iso) {
  try { return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "short" }); } catch { return ""; }
}

export default function WishesBoard({ authUser, userName, onBack, onHome }) {
  const isAdmin = (authUser?.email || "").toLowerCase() === ADMIN_EMAIL;

  const [tops, setTops] = useState([]);
  const [repliesByParent, setRepliesByParent] = useState({});
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [naam, setNaam] = useState(userName || "");
  const [warn, setWarn] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const [supported, setSupported] = useState(getSupported());
  const [replyFor, setReplyFor] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replySent, setReplySent] = useState(false);

  const laad = async () => {
    setLoading(true);
    const { tops, repliesByParent } = await listApprovedWishes();
    setTops(tops); setRepliesByParent(repliesByParent);
    if (isAdmin) setPending(await listPendingWishes());
    setLoading(false);
  };
  useEffect(() => { laad(); /* eslint-disable-next-line */ }, []);

  const verstuur = async () => {
    const m = message.trim();
    if (m.length < 3) { setWarn("Schrijf even iets meer 🙂"); return; }
    if (bevatScheldwoord(m)) { setWarn("Houd het vriendelijk 🙂 — scheldwoorden worden niet geplaatst."); return; }
    setWarn(""); setBusy(true);
    const { ok } = await submitWish({ message: m, rating: rating || null, displayName: naam, userId: authUser?.id || null });
    setBusy(false);
    if (ok) { setSent(true); setMessage(""); setRating(0); }
    else setWarn("Er ging iets mis — probeer het zo nog eens.");
  };

  const steun = async (id) => {
    if (supported.has(id)) return;
    markSupported(id);
    const ns = new Set(supported); ns.add(id); setSupported(ns);
    setTops((t) => t.map((w) => (w.id === id ? { ...w, support_count: (w.support_count || 0) + 1 } : w)));
    await supportWish(id);
  };

  const stuurReactie = async (parentId) => {
    const m = replyText.trim();
    if (m.length < 2) return;
    if (bevatScheldwoord(m)) { setWarn("Houd reacties ook vriendelijk 🙂"); return; }
    setWarn(""); setBusy(true);
    const { ok } = await submitWish({ message: m, displayName: naam, userId: authUser?.id || null, parentId });
    setBusy(false);
    if (ok) { setReplyText(""); setReplyFor(null); setReplySent(true); setTimeout(() => setReplySent(false), 4000); }
  };

  const modereer = async (id, status) => {
    setPending((p) => p.filter((w) => w.id !== id));
    await moderateWish(id, status);
    laad();
  };

  const card = {
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 14, padding: "14px 16px",
  };
  const sterren = (n) => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);

  return (
    <div style={{ minHeight: "100dvh", background: "#0a0e1a", color: "#e7edf6", fontFamily: "'Nunito',sans-serif", padding: "20px 16px 90px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h1 style={{ fontFamily: "'Fredoka',sans-serif", fontSize: 24, margin: 0, color: "#69f0ae" }}>💬 Tips aan de maker</h1>
          <div style={{ display: "flex", gap: 8 }}>
            {onBack && <button onClick={onBack} style={btnGhost}>← Terug</button>}
            {onHome && <button onClick={onHome} style={btnGhost}>🏠</button>}
          </div>
        </div>
        <p style={{ color: "rgba(231,237,246,0.7)", fontSize: 14, lineHeight: 1.5, margin: "4px 0 16px" }}>
          Wat mis je, wat kan beter, of wat vind je juist top? Laat het weten — iedereen mag meelezen en beleefd reageren.
          <br /><strong style={{ color: "#ffd54f" }}>Bij genoeg steun passen we het aan naar jullie wens.</strong>
        </p>

        {/* ── Inzendformulier ── */}
        {sent ? (
          <div style={{ ...card, borderColor: "rgba(105,240,174,0.4)", background: "rgba(105,240,174,0.08)", marginBottom: 22 }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#69f0ae", marginBottom: 4 }}>Bedankt! 🙏</div>
            <div style={{ fontSize: 14, color: "rgba(231,237,246,0.8)" }}>
              Je tip is binnen. Hij verschijnt op het bord <strong>zodra wij 'm hebben bekeken</strong> (zo houden we het netjes).
            </div>
            <button onClick={() => setSent(false)} style={{ ...btnGhost, marginTop: 10 }}>+ Nog een tip</button>
          </div>
        ) : (
          <div style={{ ...card, marginBottom: 22 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              {VOORBEELDEN.map((v) => (
                <button key={v} onClick={() => setMessage(v + " ")} style={chip}>{v}</button>
              ))}
            </div>
            <textarea
              value={message} onChange={(e) => { setMessage(e.target.value); setWarn(""); }}
              placeholder="Schrijf je tip, wens of mening…"
              rows={3} maxLength={1500}
              style={{ width: "100%", boxSizing: "border-box", borderRadius: 10, padding: "10px 12px",
                background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff",
                fontSize: 15, fontFamily: "inherit", resize: "vertical" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", margin: "10px 0" }}>
              <span style={{ fontSize: 13, color: "rgba(231,237,246,0.6)" }}>Cijfer voor de app (optioneel):</span>
              <div style={{ fontSize: 24, letterSpacing: 2, cursor: "pointer" }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} onClick={() => setRating(rating === n ? 0 : n)}
                    style={{ color: n <= rating ? "#ffd54f" : "rgba(255,255,255,0.25)" }}>★</span>
                ))}
              </div>
            </div>
            <input value={naam} onChange={(e) => setNaam(e.target.value)} placeholder="Je naam (optioneel)" maxLength={40}
              style={{ width: "100%", boxSizing: "border-box", borderRadius: 10, padding: "9px 12px", marginBottom: 8,
                background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 14, fontFamily: "inherit" }} />
            {warn && <div style={{ color: "#ffab40", fontSize: 13, marginBottom: 8 }}>{warn}</div>}
            <div style={{ fontSize: 12, color: "rgba(231,237,246,0.5)", marginBottom: 10 }}>
              👀 Je bericht verschijnt pas <strong>nadat wij het hebben bekeken</strong>. Houd het vriendelijk — onbeleefde berichten plaatsen we niet.
            </div>
            <button onClick={verstuur} disabled={busy} style={btnPrimary}>{busy ? "Versturen…" : "Verstuur mijn tip →"}</button>
          </div>
        )}

        {replySent && <div style={{ ...card, borderColor: "rgba(105,240,174,0.4)", background: "rgba(105,240,174,0.08)", marginBottom: 16, fontSize: 14 }}>Je reactie is binnen — zichtbaar na controle. 🙏</div>}

        {/* ── Admin: wachtrij ── */}
        {isAdmin && pending.length > 0 && (
          <div style={{ marginBottom: 22 }}>
            <h2 style={{ fontFamily: "'Fredoka',sans-serif", fontSize: 16, color: "#ffcc40" }}>🔒 Wachtrij — alleen jij ({pending.length})</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {pending.map((w) => (
                <div key={w.id} style={{ ...card, borderColor: "rgba(255,204,64,0.3)", background: "rgba(255,204,64,0.06)" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>
                    {w.parent_id ? "↳ reactie · " : ""}{w.display_name || "anoniem"} · {fmt(w.created_at)} {w.rating ? `· ${sterren(w.rating)}` : ""}
                  </div>
                  <div style={{ fontSize: 14, marginBottom: 8, whiteSpace: "pre-wrap" }}>{w.message}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => modereer(w.id, "approved")} style={btnApprove}>✅ Goedkeuren</button>
                    <button onClick={() => modereer(w.id, "rejected")} style={btnReject}>❌ Afwijzen</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Openbaar bord ── */}
        {loading ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", padding: 30 }}>Laden…</div>
        ) : tops.length === 0 ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", padding: 24 }}>
            Nog geen tips op het bord — wees de eerste! 👆
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {tops.map((w) => {
              const replies = repliesByParent[w.id] || [];
              const heeftGesteund = supported.has(w.id);
              return (
                <div key={w.id} style={card}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(231,237,246,0.55)", marginBottom: 6 }}>
                    <strong style={{ color: "#9be069" }}>{w.display_name || "anoniem"}</strong>
                    <span>{w.rating ? <span style={{ color: "#ffd54f" }}>{sterren(w.rating)}</span> : null} · {fmt(w.created_at)}</span>
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.45, whiteSpace: "pre-wrap", marginBottom: 10 }}>{w.message}</div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <button onClick={() => steun(w.id)} disabled={heeftGesteund} style={{
                      ...btnGhost, color: heeftGesteund ? "#69f0ae" : "#e7edf6",
                      borderColor: heeftGesteund ? "rgba(105,240,174,0.5)" : "rgba(255,255,255,0.15)",
                    }}>👍 Steun{w.support_count ? ` · ${w.support_count}` : ""}</button>
                    <button onClick={() => { setReplyFor(replyFor === w.id ? null : w.id); setReplyText(""); }} style={btnGhost}>💬 Reageer</button>
                  </div>

                  {replyFor === w.id && (
                    <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                      <input value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Reageer beleefd…" maxLength={500}
                        style={{ flex: 1, borderRadius: 8, padding: "8px 10px", background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 14, fontFamily: "inherit" }} />
                      <button onClick={() => stuurReactie(w.id)} disabled={busy} style={btnPrimary}>Plaats</button>
                    </div>
                  )}

                  {replies.length > 0 && (
                    <div style={{ marginTop: 10, borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                      {replies.map((r) => (
                        <div key={r.id} style={{ fontSize: 13.5 }}>
                          <strong style={{ color: "#9be069" }}>{r.display_name || "anoniem"}</strong>
                          <span style={{ color: "rgba(231,237,246,0.45)", fontSize: 11 }}> · {fmt(r.created_at)}</span>
                          <div style={{ whiteSpace: "pre-wrap", color: "rgba(231,237,246,0.85)" }}>{r.message}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const btnGhost = { padding: "7px 12px", borderRadius: 9, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "#e7edf6", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
const btnPrimary = { padding: "10px 16px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#00c853,#00a040)", color: "#fff", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" };
const btnApprove = { padding: "6px 12px", borderRadius: 8, border: "1px solid rgba(105,240,174,0.4)", background: "rgba(105,240,174,0.15)", color: "#69f0ae", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
const btnReject = { padding: "6px 12px", borderRadius: 8, border: "1px solid rgba(244,67,54,0.4)", background: "rgba(244,67,54,0.12)", color: "#ff7043", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
const chip = { padding: "5px 10px", borderRadius: 999, border: "1px dashed rgba(255,255,255,0.2)", background: "transparent", color: "rgba(231,237,246,0.7)", fontSize: 12, cursor: "pointer", fontFamily: "inherit" };
