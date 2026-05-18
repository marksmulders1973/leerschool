// 2026-05-18 — Interactieve bron-tekst voor examen-vragen.
// Mark wens: 'moeilijke woorden dikker + klikbaar (uitleg + NL-vertaling).
// Plus markeerstift zodat kinderen tekst kunnen markeren — doen ze op echt
// examen ook.'
//
// Werkt voor alle vakken automatisch wanneer een check een uitlegPad.woorden
// array heeft. Engels-examens hebben deze al (bv. "consume → verbruiken").
//
// Twee features:
// 1) Auto-bold + click-popover voor woorden uit de woorden-lijst
// 2) Geel-markeerstift: selecteer tekst met muis/touch → markeer geel.
//    Click op markering = verwijderen. State per check, reset bij wissel.

import { useMemo, useState, useRef, useEffect } from "react";

// Escape voor regex
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Splits tekst in segments: { type: 'tekst' | 'woord', value, woordIdx? }
// Match case-insensitive, hele woorden alleen (woord-grenzen).
function splitOpWoorden(tekst, woorden) {
  if (!woorden || woorden.length === 0) return [{ type: "tekst", value: tekst }];
  // Sorteer op lengte aflopend zodat langere combinaties eerst matchen
  const lijst = [...woorden].map((w, idx) => ({ w: w.woord, idx, len: (w.woord || "").length }))
    .filter(w => w.w && w.w.length > 1)
    .sort((a, b) => b.len - a.len);
  if (lijst.length === 0) return [{ type: "tekst", value: tekst }];
  const pattern = new RegExp(`\\b(${lijst.map(w => escapeRe(w.w)).join("|")})\\b`, "gi");
  const segments = [];
  let last = 0;
  let m;
  while ((m = pattern.exec(tekst)) !== null) {
    if (m.index > last) segments.push({ type: "tekst", value: tekst.slice(last, m.index) });
    const matchTekst = m[0];
    const norm = matchTekst.toLowerCase();
    const woordRef = lijst.find(w => w.w.toLowerCase() === norm);
    segments.push({ type: "woord", value: matchTekst, woordIdx: woordRef ? woordRef.idx : null });
    last = m.index + matchTekst.length;
  }
  if (last < tekst.length) segments.push({ type: "tekst", value: tekst.slice(last) });
  return segments;
}

export default function BronTekstInteractief({ body, woorden, resetKey }) {
  const [actief, setActief] = useState(null); // { woordIdx, x, y } | null
  const [markeringen, setMarkeringen] = useState([]); // [{ start, eind }] character offsets in body
  const containerRef = useRef(null);

  // Reset markeringen + popover bij check-wissel
  useEffect(() => {
    setActief(null);
    setMarkeringen([]);
  }, [resetKey]);

  const segments = useMemo(() => splitOpWoorden(body || "", woorden), [body, woorden]);

  // Geel-marker logic: bij onMouseUp/onTouchEnd zoek selection range binnen container.
  // Range mapper-functie: van DOM range naar character offset in body.
  function offsetVanRange(range) {
    if (!containerRef.current) return null;
    const pre = range.cloneRange();
    pre.selectNodeContents(containerRef.current);
    pre.setEnd(range.startContainer, range.startOffset);
    const start = pre.toString().length;
    const eind = start + range.toString().length;
    return { start, eind };
  }

  function onSelectie() {
    const sel = typeof window !== "undefined" ? window.getSelection() : null;
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    if (!containerRef.current || !containerRef.current.contains(range.commonAncestorContainer)) return;
    const offs = offsetVanRange(range);
    if (!offs || offs.eind - offs.start < 2) return;
    setMarkeringen((prev) => {
      // Merge met overlappende markeringen
      const nieuw = { start: offs.start, eind: offs.eind };
      const overlapt = prev.filter(m => m.start < nieuw.eind && m.eind > nieuw.start);
      const rest = prev.filter(m => m.start >= nieuw.eind || m.eind <= nieuw.start);
      const merged = overlapt.length > 0
        ? {
            start: Math.min(nieuw.start, ...overlapt.map(m => m.start)),
            eind: Math.max(nieuw.eind, ...overlapt.map(m => m.eind)),
          }
        : nieuw;
      return [...rest, merged].sort((a, b) => a.start - b.start);
    });
    try { sel.removeAllRanges(); } catch {}
  }

  function verwijderMarkering(idx) {
    setMarkeringen((prev) => prev.filter((_, i) => i !== idx));
  }

  // Rendering: combineer woord-segments + markeer-ranges.
  // Werkwijze: voor elk segment, check welke markeringen ermee overlappen, split.
  function renderSegment(seg, offsetStart, key) {
    const lengte = seg.value.length;
    const segEind = offsetStart + lengte;
    const overlappend = markeringen
      .map((m, mi) => ({ ...m, mi }))
      .filter(m => m.start < segEind && m.eind > offsetStart);

    const baseStyle = seg.type === "woord" ? {
      fontWeight: 800,
      color: "#ffd54f",
      cursor: "pointer",
      borderBottom: "1px dotted rgba(255,213,79,0.55)",
      padding: "0 1px",
    } : null;

    const onWoordClick = (e) => {
      if (seg.type !== "woord" || seg.woordIdx == null) return;
      e.stopPropagation();
      const rect = e.currentTarget.getBoundingClientRect();
      const contRect = containerRef.current?.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - (contRect?.left || 0);
      const y = rect.bottom - (contRect?.top || 0) + 6;
      setActief({ woordIdx: seg.woordIdx, x, y });
    };

    if (overlappend.length === 0) {
      return (
        <span key={key} style={baseStyle} onClick={onWoordClick}>
          {seg.value}
        </span>
      );
    }

    // Split segment in stukken die wel/niet gemarkeerd zijn
    const parts = [];
    let cur = offsetStart;
    const grenzen = new Set();
    for (const m of overlappend) {
      grenzen.add(Math.max(offsetStart, m.start));
      grenzen.add(Math.min(segEind, m.eind));
    }
    grenzen.add(offsetStart);
    grenzen.add(segEind);
    const sorteerlijst = [...grenzen].sort((a, b) => a - b);
    for (let i = 0; i < sorteerlijst.length - 1; i++) {
      const a = sorteerlijst[i];
      const b = sorteerlijst[i + 1];
      if (b <= a) continue;
      const stuk = seg.value.slice(a - offsetStart, b - offsetStart);
      const ergens = overlappend.find(m => m.start <= a && m.eind >= b);
      parts.push({ tekst: stuk, gemarkeerd: !!ergens, markIdx: ergens?.mi });
      cur = b;
    }
    void cur;
    return (
      <span key={key} style={baseStyle} onClick={onWoordClick}>
        {parts.map((p, pi) => p.gemarkeerd ? (
          <span
            key={pi}
            onClick={(e) => { e.stopPropagation(); verwijderMarkering(p.markIdx); }}
            style={{
              background: "rgba(255,235,59,0.5)",
              color: "#1a1a1a",
              padding: "1px 2px",
              borderRadius: 3,
              cursor: "pointer",
            }}
            title="Klik om markering te verwijderen"
          >{p.tekst}</span>
        ) : (
          <span key={pi}>{p.tekst}</span>
        ))}
      </span>
    );
  }

  // Build offsets per segment voor markeer-overlay
  let offset = 0;
  const renderedSegs = segments.map((seg, i) => {
    const r = renderSegment(seg, offset, i);
    offset += seg.value.length;
    return r;
  });

  const activeWoord = actief != null && woorden ? woorden[actief.woordIdx] : null;

  return (
    <div style={{ position: "relative" }} onClick={() => setActief(null)}>
      <div
        ref={containerRef}
        onMouseUp={onSelectie}
        onTouchEnd={onSelectie}
        style={{
          fontSize: 13,
          lineHeight: 1.55,
          color: "var(--color-text)",
          whiteSpace: "pre-wrap",
          maxHeight: "30vh",
          overflowY: "auto",
          userSelect: "text",
          cursor: "text",
          padding: "2px 4px",
        }}
      >
        {renderedSegs}
      </div>
      {/* Markeer-stift help-tekst onderaan */}
      <div style={{
        marginTop: 6, fontSize: 11, opacity: 0.6,
        display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap",
      }}>
        <span>🖍️ Sleep om tekst te markeren · klik markering om weg te halen</span>
        {markeringen.length > 0 && (
          <button onClick={() => setMarkeringen([])} style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
            color: "var(--color-text-muted)", borderRadius: 6,
            padding: "2px 8px", fontSize: 10, cursor: "pointer",
            fontFamily: "var(--font-body)",
          }}>Wis alle</button>
        )}
      </div>
      {/* Woord-popover */}
      {activeWoord && actief && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            left: Math.min(Math.max(actief.x - 130, 8), (containerRef.current?.clientWidth || 300) - 268),
            top: actief.y,
            width: 260,
            background: "rgba(20,15,30,0.96)",
            border: "1px solid #ffd54f",
            borderRadius: 10,
            padding: "10px 12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 18px rgba(255,213,79,0.25)",
            zIndex: 20,
            fontFamily: "var(--font-body)",
            fontSize: 13,
            lineHeight: 1.4,
            color: "var(--color-text)",
            animation: "slideUp 160ms ease-out",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 800, color: "#ffd54f", marginBottom: 4 }}>
            {activeWoord.woord}
          </div>
          <div>{activeWoord.uitleg}</div>
          <button
            onClick={() => setActief(null)}
            style={{
              position: "absolute", top: 4, right: 6,
              background: "transparent", border: "none",
              color: "var(--color-text-muted)", fontSize: 16, cursor: "pointer",
              padding: 0, lineHeight: 1,
            }}
            aria-label="Sluiten"
          >×</button>
        </div>
      )}
    </div>
  );
}
