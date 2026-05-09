import { useMemo, useState, useEffect } from "react";

// Leerpad-zoeker / "bot" — Mark idee 2026-05-09.
// Olivia (10jr+) typt iets in zoals "rood staan" of "BTW berekenen", en de
// bot zoekt door de triggerKeywords van alle leerpaden naar de top-3
// matches. 1 klik = direct naar dat pad.
//
// MVP: keyword-match (geen AI, geen kosten). Werkt direct dankzij de
// uitgebreide triggerKeywords-lijsten op elk pad.
//
// Onbeantwoorde vragen worden gelogd in localStorage onder
// 'leerpad_bot_misses' zodat Mark kan zien welke onderwerpen ontbreken.
//
// Props:
//   paths       — object van { id: pathObject } (= ALL_LEARN_PATHS uit index.js)
//   onPickPath  — callback (path) => void, opent het gekozen pad
//   subject?    — optioneel: filter op 1 vak ("economie") of array van vakken
//   compact?    — kleinere variant voor inline-gebruik

const C = {
  bg: "rgba(40,55,75,0.85)",
  bgInput: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.15)",
  borderActive: "#42a5f5",
  text: "#e0e6f0",
  muted: "#8899aa",
  warm: "#ffd54f",
  accent: "#42a5f5",
  good: "#69f0ae",
};

// Score een pad tegen een query op basis van triggerKeywords + title.
// Hoger = betere match.
function scorePath(query, path) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const queryWords = q.split(/\s+/).filter((w) => w.length >= 2);
  let score = 0;
  const keywords = path.triggerKeywords || [];
  for (const kw of keywords) {
    const k = String(kw).toLowerCase();
    if (q === k) score += 100;
    else if (q.includes(k)) score += 50;
    else if (k.includes(q) && q.length >= 3) score += 30;
    else {
      for (const w of queryWords) {
        if (k === w) score += 20;
        else if (k.includes(w) && w.length >= 3) score += 10;
        else if (w.includes(k) && k.length >= 4) score += 5;
      }
    }
  }
  const titleLower = String(path.title || "").toLowerCase();
  if (titleLower.includes(q)) score += 40;
  else {
    for (const w of queryWords) {
      if (titleLower.includes(w) && w.length >= 3) score += 15;
    }
  }
  return score;
}

// Bewaar onbeantwoorde vragen in localStorage zodat Mark content-gaps ziet.
function logMiss(query) {
  try {
    const key = "leerpad_bot_misses";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    const trimmed = query.trim();
    if (!trimmed) return;
    existing.push({ query: trimmed, at: new Date().toISOString() });
    // houd lijst beperkt tot laatste 200
    const cropped = existing.slice(-200);
    localStorage.setItem(key, JSON.stringify(cropped));
  } catch {
    // localStorage kan vol of geblokkeerd zijn; negeer stil
  }
}

export default function LeerpadBot({ paths, onPickPath, subject = null, compact = false }) {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Lijst van paden om te doorzoeken. Filter optioneel op 1 of meer vakken.
  const candidates = useMemo(() => {
    const all = Object.values(paths || {}).filter(Boolean);
    if (!subject) return all;
    const allowed = Array.isArray(subject) ? subject : [subject];
    return all.filter((p) => allowed.includes(p.subject));
  }, [paths, subject]);

  // Top-3 matches berekenen.
  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    const scored = candidates
      .map((p) => ({ path: p, score: scorePath(q, p) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    return scored;
  }, [query, candidates]);

  // Bij geen-matches na een 'echte' zoekpoging (>=4 chars, ~1s sinds laatste type):
  // log de query als gemist. Triggert via debounce in useEffect.
  useEffect(() => {
    const q = query.trim();
    if (q.length < 4) return;
    setHasSearched(true);
    const t = setTimeout(() => {
      if (results.length === 0) logMiss(q);
    }, 1200);
    return () => clearTimeout(t);
  }, [query, results.length]);

  return (
    <div style={{
      background: C.bg,
      border: `1px solid ${C.border}`,
      borderRadius: 14,
      padding: compact ? "12px 14px" : "16px 18px",
      marginBottom: compact ? 12 : 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <span style={{ fontSize: 22 }} aria-hidden="true">🔎</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: C.text }}>
            Wat wil je leren of waar heb je moeite mee?
          </div>
          {!compact && (
            <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
              Tip: korte trefwoorden werken het best. Bv. "rood staan", "BTW", "pythagoras", "schaarste".
            </div>
          )}
        </div>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="bv. rood staan, BTW berekenen, pythagoras..."
        aria-label="Zoek een leerpad"
        style={{
          width: "100%",
          padding: "10px 14px",
          fontSize: 14,
          fontFamily: "var(--font-body)",
          background: C.bgInput,
          border: `1.5px solid ${query ? C.borderActive : C.border}`,
          borderRadius: 10,
          color: C.text,
          outline: "none",
          boxSizing: "border-box",
          transition: "border 0.15s",
        }}
      />

      {results.length > 0 && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: 0.5 }}>
            {results.length === 1 ? "Beste match" : `Top ${results.length} suggesties`}
          </div>
          {results.map(({ path, score }, idx) => (
            <button
              key={path.id}
              onClick={() => onPickPath?.(path)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                background: idx === 0 ? "rgba(105,240,174,0.10)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${idx === 0 ? C.good : C.border}`,
                borderRadius: 10,
                color: C.text,
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                textAlign: "left",
                transition: "all 0.15s",
              }}
              onMouseOver={(ev) => ev.currentTarget.style.background = "rgba(66,165,245,0.15)"}
              onMouseOut={(ev) => ev.currentTarget.style.background = idx === 0 ? "rgba(105,240,174,0.10)" : "rgba(255,255,255,0.04)"}
            >
              <span style={{ fontSize: 22 }} aria-hidden="true">{path.emoji || "📚"}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, marginBottom: 2 }}>
                  {path.title}
                </div>
                <div style={{ fontSize: 11, color: C.muted, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <span>{path.subject || "—"}</span>
                  {path.steps?.length > 0 && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{path.steps.length} stappen</span>
                    </>
                  )}
                  {idx === 0 && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span style={{ color: C.good, fontWeight: 700 }}>beste match</span>
                    </>
                  )}
                </div>
              </div>
              <span style={{ fontSize: 16, color: C.muted }} aria-hidden="true">›</span>
            </button>
          ))}
        </div>
      )}

      {hasSearched && query.trim().length >= 4 && results.length === 0 && (
        <div style={{
          marginTop: 12,
          padding: "10px 12px",
          background: "rgba(255,213,79,0.08)",
          border: "1px dashed rgba(255,213,79,0.35)",
          borderRadius: 10,
          color: C.muted,
          fontSize: 12,
          lineHeight: 1.5,
        }}>
          Geen direct pad gevonden voor <strong style={{ color: C.warm }}>"{query.trim()}"</strong>.
          Probeer andere of kortere woorden — bv. een vak-term of begrip uit de les.
        </div>
      )}
    </div>
  );
}
