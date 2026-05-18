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

// 3 marker-kleuren (Mark wens 2026-05-18). Geel = klassiek, blauw +
// roze als extra opties zodat kinderen verschillende soorten info kunnen
// markeren (bv. geel = sleutelwoorden, blauw = vraag-info, roze = onzeker).
const MARKER_KLEUREN = [
  { id: "geel", fill: "rgba(255,235,59,0.55)",  rand: "#fbc02d", label: "Geel" },
  { id: "blauw", fill: "rgba(100,181,246,0.55)", rand: "#1976d2", label: "Blauw" },
  { id: "roze", fill: "rgba(244,143,177,0.55)", rand: "#c2185b", label: "Roze" },
];

export default function BronTekstInteractief({ body, woorden, resetKey }) {
  const [actief, setActief] = useState(null); // { woordIdx, x, y } | null
  const [markeringen, setMarkeringen] = useState([]); // [{ start, eind, kleurId }] character offsets
  const [activeKleur, setActiveKleur] = useState("geel"); // gekozen marker-kleur
  const containerRef = useRef(null);

  // Reset markeringen + popover bij check-wissel
  useEffect(() => {
    setActief(null);
    setMarkeringen([]);
    // Kleur-keuze bewaren — voorkeur volgt de leerling
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
      // Merge alleen met markeringen van DEZELFDE kleur. Anders blijven ze
      // afzonderlijk (kid markeert keyword geel + vraag-stuk blauw bovenop
      // — beide moeten zichtbaar blijven). Render-laag combineert ze.
      const nieuw = { start: offs.start, eind: offs.eind, kleurId: activeKleur };
      const overlaptZelfde = prev.filter(m => m.kleurId === activeKleur && m.start < nieuw.eind && m.eind > nieuw.start);
      const rest = prev.filter(m => !(m.kleurId === activeKleur && m.start < nieuw.eind && m.eind > nieuw.start));
      const merged = overlaptZelfde.length > 0
        ? {
            start: Math.min(nieuw.start, ...overlaptZelfde.map(m => m.start)),
            eind: Math.max(nieuw.eind, ...overlaptZelfde.map(m => m.eind)),
            kleurId: activeKleur,
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

    // Split segment in stukken die wel/niet gemarkeerd zijn — overlappen
    // van verschillende kleuren: laatst-toegevoegde wint visueel (we tonen
    // alleen 1 kleur per character, eenvoudig + voorspelbaar).
    const parts = [];
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
      // Top-marker: laatste in array die hier overlapt (= meest recent)
      const omsluitend = overlappend.filter(m => m.start <= a && m.eind >= b);
      const top = omsluitend[omsluitend.length - 1];
      parts.push({ tekst: stuk, mark: top });
    }
    return (
      <span key={key} style={baseStyle} onClick={onWoordClick}>
        {parts.map((p, pi) => {
          if (!p.mark) return <span key={pi}>{p.tekst}</span>;
          const kleur = MARKER_KLEUREN.find(k => k.id === p.mark.kleurId) || MARKER_KLEUREN[0];
          return (
            <span
              key={pi}
              onClick={(e) => { e.stopPropagation(); verwijderMarkering(p.mark.mi); }}
              style={{
                background: kleur.fill,
                color: "#1a1a1a",
                padding: "1px 2px",
                borderRadius: 3,
                cursor: "pointer",
              }}
              title="Klik om markering te verwijderen"
            >{p.tekst}</span>
          );
        })}
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

  const activeKleurDef = MARKER_KLEUREN.find(k => k.id === activeKleur) || MARKER_KLEUREN[0];

  return (
    <div style={{ position: "relative", display: "flex", gap: 8 }} onClick={() => setActief(null)}>
      {/* Markeerstift-kleur-keuze links — Mark wens 2026-05-18: 'kies je marker
          dan geel/blauw/roze'. Verticale stack zodat de tekst niet smaller wordt. */}
      <div style={{
        display: "flex", flexDirection: "column", gap: 6, alignItems: "center",
        paddingTop: 4, flexShrink: 0,
      }}>
        <div style={{
          fontSize: 9, opacity: 0.55, textTransform: "uppercase", letterSpacing: 1,
          writingMode: "horizontal-tb", textAlign: "center", lineHeight: 1.1,
        }}>🖍️<br/>marker</div>
        {MARKER_KLEUREN.map((k) => {
          const isActief = k.id === activeKleur;
          return (
            <button
              key={k.id}
              onClick={(e) => { e.stopPropagation(); setActiveKleur(k.id); }}
              title={`Marker — ${k.label}`}
              aria-label={`Kies ${k.label} marker`}
              style={{
                width: 28, height: 28, borderRadius: 8,
                background: k.fill.replace("0.55", "0.85"),
                border: `2px solid ${isActief ? k.rand : "rgba(255,255,255,0.15)"}`,
                cursor: "pointer",
                boxShadow: isActief ? `0 0 12px ${k.rand}, 0 2px 6px rgba(0,0,0,0.3)` : "none",
                transform: isActief ? "scale(1.1)" : "scale(1)",
                transition: "all 160ms ease",
                padding: 0,
              }}
            />
          );
        })}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
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
        {/* Help-tekst onderaan */}
        <div style={{
          marginTop: 6, fontSize: 11, opacity: 0.6,
          display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap",
        }}>
          <span>Sleep om te markeren met <strong style={{ color: activeKleurDef.rand }}>{activeKleurDef.label.toLowerCase()}</strong> · klik om weg te halen</span>
          {markeringen.length > 0 && (
            <button onClick={() => setMarkeringen([])} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
              color: "var(--color-text-muted)", borderRadius: 6,
              padding: "2px 8px", fontSize: 10, cursor: "pointer",
              fontFamily: "var(--font-body)",
            }}>Wis alle</button>
          )}
        </div>
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
