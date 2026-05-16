import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header.jsx";
import {
  EXAMENS,
  VAK_LABELS,
  NIVEAU_LABELS,
  getExamenUrl,
  getCorrectieUrl,
  getBijlageUrl,
  getUitwerkbijlageUrl,
} from "../data/examens.js";
import { isExamenSpeelbaar } from "../data/examenQuizzes/index.js";
import pathManifest from "../learnPaths/pathManifest.generated.json";

// Examens-pagina (Mark idee 2026-05-08, herzien 2026-05-11, samengevoegd 2026-05-16):
// ÉÉN GECOMBINEERDE VIEW per vak — Mark wens "wat je kunt: echte examens
// inzien én oefenen, twee blokken naast elkaar". Per vak 1 accordion met
// dual-teller (oefen X/8 + PDF Y/8). Bij open: 8 slots, elke slot heeft
// links de 🎯 oefen-knop (indien beschikbaar) en rechts de 📜 PDF-knoppen.
// Prop `initialMode` blijft voor backwards-compat (alle ankers naar dezelfde
// sectie nu).

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  warm: "#ffd54f",
  accent: "#ff6b35",
  oefen: "#00e676",
  pdf: "#a78bfa",
};

export default function ExamensPage({ onBack, onHome, prefilterVak, onPlayExamen, onPickPath, initialMode = "leren" }) {
  const sectionRef = useRef(null);

  // Examen-leerpaden (id startsWith "examen-") — onze oefen-modus.
  const examenLeerpaden = useMemo(() => {
    return pathManifest.filter((p) => p.id && p.id.startsWith("examen-"));
  }, []);
  const examenLeerpadIds = useMemo(() => new Set(examenLeerpaden.map((p) => p.id)), [examenLeerpaden]);

  // 4 haalbare vakken met 8/8-pattern (oefen + PDF). Maatschappij wordt apart
  // gerendered want geen PDF-archief (private aanbieder). Niet-haalbare = PDF-only.
  const HAALBARE_VAKKEN = ["biologie", "economie", "engels", "geschiedenis"];
  const NIET_HAALBARE_VAKKEN = ["wiskunde", "nederlands", "aardrijkskunde"];
  const ALLE_EXAMEN_JAREN = [2025, 2024, 2023, 2022];
  const ALLE_TIJDVAKKEN = [1, 2];

  // EXAMEN-PDF index — snel opzoeken via {vak, jaar, tijdvak}.
  const pdfByKey = useMemo(() => {
    const out = new Map();
    for (const e of EXAMENS) {
      const vak = e.vak === "maatschappijleer" ? "maatschappijkunde" : e.vak;
      const key = `${vak}-${e.jaar}-${e.tijdvak}`;
      out.set(key, e);
    }
    return out;
  }, []);

  // Per vak: lijst van 8 slots ({jaar, tijdvak, pad, pdf}).
  // Voor maatschappij: alleen bestaande oefen-paden (geen 8-target).
  const slotsBySubject = useMemo(() => {
    const result = {};
    for (const vak of [...HAALBARE_VAKKEN, ...NIET_HAALBARE_VAKKEN]) {
      const slots = [];
      for (const jaar of ALLE_EXAMEN_JAREN) {
        for (const tijdvak of ALLE_TIJDVAKKEN) {
          const expectedPadId = `examen-${vak}-${jaar}-t${tijdvak}`;
          const pad = examenLeerpaden.find((p) => p.id === expectedPadId) || null;
          const pdf = pdfByKey.get(`${vak}-${jaar}-${tijdvak}`) || null;
          slots.push({ jaar, tijdvak, expectedPadId, pad, pdf });
        }
      }
      result[vak] = slots;
    }
    // Maatschappij: alleen bestaande paden. PDFs zijn er ook. Subject in
    // pathManifest is "maatschappijleer" maar pad-id-prefix is "maatschappijkunde".
    const maPaden = examenLeerpaden.filter((p) => p.id && p.id.startsWith("examen-maatschappijkunde-"));
    if (maPaden.length) {
      result.maatschappijkunde = maPaden.map((p) => {
        const m = p.id.match(/^examen-maatschappijkunde-(\d{4})-t(\d)$/);
        const jaar = m ? Number(m[1]) : 0;
        const tijdvak = m ? Number(m[2]) : 0;
        // Voor maatschappij staan PDFs onder e.vak === "maatschappijleer"
        const pdf = EXAMENS.find((e) => e.vak === "maatschappijleer" && e.jaar === jaar && e.tijdvak === tijdvak) || null;
        return { jaar, tijdvak, expectedPadId: p.id, pad: p, pdf };
      }).sort((a, b) => `${b.jaar}-${b.tijdvak}`.localeCompare(`${a.jaar}-${a.tijdvak}`));
    }
    return result;
  }, [examenLeerpaden, pdfByKey]);

  // Reden waarom oefen-versie er nog niet is (voor niet-haalbare vakken).
  const NIET_HAALBAAR_REDEN = {
    wiskunde: "Wiskunde-examens hebben open vragen (berekenen/tekenen) — onze 4-keuze-uitleg past nog niet zonder open-vraag-grading.",
    nederlands: "Nederlandse leesteksten zijn 500+ woorden per vraag — moeilijk te verwerken in een didactische 15-minuten-loop.",
    aardrijkskunde: "Aardrijkskunde leunt op kaarten en foto's — die bron-render-infra staat klaar maar is nog niet gevuld.",
  };

  // Vakfilter — Mark idee: 1 lijst is overzichtelijk maar bij scrollen op
  // mobiel handig om 1 vak te kunnen kiezen.
  const [vakFilter, setVakFilter] = useState(prefilterVak || "alle");
  const alleVakken = ["alle", ...HAALBARE_VAKKEN, ...NIET_HAALBARE_VAKKEN];
  if (slotsBySubject.maatschappijkunde) alleVakken.push("maatschappijkunde");

  // Vakken in vaste, sensible volgorde (haalbare eerst, dan maatschappij, dan niet-haalbaar).
  const vakkenInVolgorde = useMemo(() => {
    const order = [...HAALBARE_VAKKEN];
    if (slotsBySubject.maatschappijkunde) order.push("maatschappijkunde");
    order.push(...NIET_HAALBARE_VAKKEN);
    return order.filter((v) => slotsBySubject[v] && slotsBySubject[v].length > 0);
  }, [slotsBySubject]);

  const [openVakken, setOpenVakken] = useState(() => {
    // Open standaard de eerste haalbare als filter "alle"; anders het gekozen vak.
    return new Set(prefilterVak ? [prefilterVak] : []);
  });

  const toggleVak = (vak) => {
    setOpenVakken((prev) => {
      const next = new Set(prev);
      if (next.has(vak)) next.delete(vak); else next.add(vak);
      return next;
    });
  };

  // Scroll naar examens-sectie bij mount.
  useEffect(() => {
    const t = setTimeout(() => {
      if (sectionRef.current) sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(t);
  }, [initialMode]);

  const zichtbareVakken = vakFilter === "alle"
    ? vakkenInVolgorde
    : vakkenInVolgorde.filter((v) => v === vakFilter);

  return (
    <div style={{ minHeight: "100dvh", background: C.bg, color: C.text, fontFamily: "var(--font-body)" }}>
      <Header
        title="Examens 🎓"
        subtitle="Per vak: échte examens oefenen mét uitleg óf inzien als PDF"
        onBack={onBack}
        onHome={onHome}
      />

      <div style={{ padding: "16px 18px 32px" }} ref={sectionRef}>
        {/* ─── Intro + legenda ─── */}
        <div style={{
          padding: "12px 14px",
          marginBottom: 16,
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${C.border}`,
          borderRadius: 12,
          fontSize: 13,
          color: C.muted,
          lineHeight: 1.5,
        }}>
          <div style={{ marginBottom: 6, color: C.text, fontWeight: 700, fontSize: 14 }}>
            🎓 Eindexamens VMBO GL/TL — twee manieren om te leren
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 8 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{
                width: 12, height: 12, borderRadius: 3,
                background: "rgba(0,230,118,0.25)", border: `1.5px solid ${C.oefen}`,
              }} />
              <span><strong style={{ color: C.oefen }}>Oefenen met uitleg</strong> — vraag voor vraag + uitleg + leerpad</span>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{
                width: 12, height: 12, borderRadius: 3,
                background: "rgba(167,139,250,0.25)", border: `1.5px solid ${C.pdf}`,
              }} />
              <span><strong style={{ color: C.pdf }}>PDF inzien</strong> — hele examen + correctievoorschrift</span>
            </span>
          </div>
        </div>

        {/* ─── Vakfilter ─── */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 6 }}>
            Vak
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {alleVakken.map((o) => {
              const active = vakFilter === o;
              const lbl = o === "alle" ? "Alle vakken" : (VAK_LABELS[o]?.label || o);
              return (
                <button
                  key={o}
                  onClick={() => setVakFilter(o)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    border: active ? `1.5px solid ${C.warm}` : `1px solid ${C.border}`,
                    background: active ? "rgba(255,213,79,0.15)" : "rgba(255,255,255,0.04)",
                    color: active ? C.warm : C.muted,
                    fontFamily: "var(--font-body)",
                    fontSize: 12, fontWeight: 600,
                    cursor: "pointer",
                  }}
                >{lbl}</button>
              );
            })}
          </div>
        </div>

        {/* ─── Per vak: gecombineerde accordion ─── */}
        {zichtbareVakken.map((vak) => {
          const slots = slotsBySubject[vak];
          if (!slots || slots.length === 0) return null;

          const vakInfo = VAK_LABELS[vak] || { label: vak, icon: "📄", color: C.warm };
          const isOpen = openVakken.has(vak);
          const oefenAanwezig = slots.filter((s) => s.pad).length;
          const pdfAanwezig = slots.filter((s) => s.pdf).length;
          const totaal = slots.length;
          const isNietHaalbaar = NIET_HAALBARE_VAKKEN.includes(vak);
          const isMaatschappij = vak === "maatschappijkunde";

          return (
            <div key={vak} style={{ marginBottom: 12 }}>
              <button
                onClick={() => toggleVak(vak)}
                aria-expanded={isOpen}
                style={{
                  display: "flex", alignItems: "center", gap: 10, width: "100%",
                  padding: "12px 14px", marginBottom: isOpen ? 10 : 0,
                  background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  cursor: "pointer", color: C.text, fontFamily: "var(--font-body)",
                  textAlign: "left", minHeight: 44,
                  transition: "background 0.15s",
                }}
                onMouseOver={(ev) => { ev.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseOut={(ev) => { ev.currentTarget.style.background = isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)"; }}
              >
                <span style={{ fontSize: 22 }} aria-hidden="true">{vakInfo.icon}</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: 17, color: vakInfo.color, fontWeight: 700,
                  flex: 1, minWidth: 0,
                }}>{vakInfo.label}</span>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontSize: 11, fontWeight: 700,
                  color: oefenAanwezig === 0 ? C.muted : C.oefen,
                  padding: "3px 8px", borderRadius: 999,
                  border: `1px solid ${oefenAanwezig === 0 ? C.border : "rgba(0,230,118,0.4)"}`,
                  background: oefenAanwezig === 0 ? "transparent" : "rgba(0,230,118,0.10)",
                }} title="Oefen-paden met uitleg">
                  🎯 {isMaatschappij ? oefenAanwezig : `${oefenAanwezig}/${totaal}`}
                </span>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontSize: 11, fontWeight: 700,
                  color: pdfAanwezig === 0 ? C.muted : C.pdf,
                  padding: "3px 8px", borderRadius: 999,
                  border: `1px solid ${pdfAanwezig === 0 ? C.border : "rgba(167,139,250,0.4)"}`,
                  background: pdfAanwezig === 0 ? "transparent" : "rgba(167,139,250,0.10)",
                }} title="PDF-examens">
                  📄 {isMaatschappij ? pdfAanwezig : `${pdfAanwezig}/${totaal}`}
                </span>
                <span style={{
                  fontSize: 14, color: C.muted, marginLeft: 4,
                  transition: "transform 0.15s", display: "inline-block",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                }} aria-hidden="true">›</span>
              </button>
              {isOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {isNietHaalbaar && (
                    <div style={{
                      padding: "10px 12px",
                      background: "rgba(91,134,184,0.10)",
                      border: "1px solid rgba(91,134,184,0.30)",
                      borderRadius: 8,
                      fontSize: 12,
                      color: C.muted,
                      lineHeight: 1.5,
                    }}>
                      ℹ️ <strong style={{ color: C.text }}>Voor {vakInfo.label} is alleen de PDF-versie beschikbaar:</strong>{" "}
                      {NIET_HAALBAAR_REDEN[vak]}
                    </div>
                  )}
                  {slots.map((slot) => (
                    <SlotRij
                      key={slot.expectedPadId}
                      slot={slot}
                      vakInfo={vakInfo}
                      onPickPath={onPickPath}
                      onPlayExamen={onPlayExamen}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* ─── Tip onder de lijst ─── */}
        <div style={{
          marginTop: 16,
          padding: "12px 14px",
          background: "rgba(255,213,79,0.06)",
          border: "1px dashed rgba(255,213,79,0.25)",
          borderRadius: 12,
          fontSize: 12, color: C.muted, lineHeight: 1.5,
        }}>
          💡 <strong style={{ color: C.warm }}>Tip</strong>: oefen eerst met de groene
          🎯-knop — bij een fout antwoord opent een uitleg en kun je doorklikken
          naar het leerpad over dat onderwerp. Voor de eindsprint: print de PDF
          en maak het examen op papier.
        </div>
      </div>
    </div>
  );
}

// SlotRij = één jaar+tijdvak per vak. Links de oefen-knop (groen), rechts
// de PDF-knoppen (paars). Op mobiel stapelen ze automatisch (flexbox wrap).
function SlotRij({ slot, vakInfo, onPickPath, onPlayExamen }) {
  const { jaar, tijdvak, pad, pdf } = slot;

  return (
    <div style={{
      background: C.card,
      border: `1px solid ${C.border}`,
      borderRadius: 12,
      padding: "12px 14px",
    }}>
      <div style={{
        fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 10,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ fontSize: 16 }} aria-hidden="true">📅</span>
        <span>{vakInfo.label} {jaar} — tijdvak {tijdvak}</span>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 10,
      }}>
        {/* Linker kolom: 🎯 Oefenen met uitleg */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {pad ? (
            <button
              onClick={() => onPickPath && onPickPath(pad.id)}
              disabled={!onPickPath}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 10,
                border: `1.5px solid ${C.oefen}`,
                background: "linear-gradient(135deg, rgba(0,230,118,0.18), rgba(0,230,118,0.06))",
                color: C.oefen,
                fontFamily: "var(--font-display)",
                fontSize: 13, fontWeight: 700,
                cursor: onPickPath ? "pointer" : "default",
                textAlign: "left",
                display: "flex", flexDirection: "column", gap: 4,
                minHeight: 64,
                transition: "background 0.15s",
              }}
              onMouseOver={(ev) => { if (onPickPath) ev.currentTarget.style.background = "linear-gradient(135deg, rgba(0,230,118,0.30), rgba(0,230,118,0.10))"; }}
              onMouseOut={(ev) => { ev.currentTarget.style.background = "linear-gradient(135deg, rgba(0,230,118,0.18), rgba(0,230,118,0.06))"; }}
              title="Oefen dit examen vraag voor vraag met didactische uitleg"
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 16 }}>🎯</span>
                <span>Oefenen met uitleg</span>
              </span>
              <span style={{
                fontSize: 10, fontWeight: 600, color: "rgba(0,230,118,0.85)", textTransform: "uppercase", letterSpacing: 0.4,
              }}>
                {pad.checkCount ? `${pad.checkCount} vragen · ` : ""}vraag → uitleg → leerpad
              </span>
            </button>
          ) : (
            <div style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: `1px dashed ${C.border}`,
              background: "rgba(255,255,255,0.02)",
              color: C.muted,
              fontSize: 12,
              minHeight: 64,
              display: "flex", flexDirection: "column", justifyContent: "center", gap: 4,
              opacity: 0.7,
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 14, opacity: 0.5 }}>🎯</span>
                <span style={{ fontWeight: 600 }}>Oefen-versie nog niet beschikbaar</span>
              </span>
              <span style={{ fontSize: 10, opacity: 0.7 }}>
                Pak de PDF →
              </span>
            </div>
          )}
        </div>

        {/* Rechter kolom: 📄 PDF-blok */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {pdf ? (
            <div style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: `1.5px solid ${C.pdf}`,
              background: "linear-gradient(135deg, rgba(167,139,250,0.14), rgba(167,139,250,0.04))",
              minHeight: 64,
              display: "flex", flexDirection: "column", gap: 6,
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                color: C.pdf, display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ fontSize: 16 }}>📄</span>
                <span>PDF inzien</span>
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                <PdfPill href={getExamenUrl(pdf)} label="Opgaven" />
                {getBijlageUrl(pdf) && <PdfPill href={getBijlageUrl(pdf)} label="Bijlage" />}
                {getCorrectieUrl(pdf) && <PdfPill href={getCorrectieUrl(pdf)} label="Antwoorden" />}
                {getUitwerkbijlageUrl(pdf) && <PdfPill href={getUitwerkbijlageUrl(pdf)} label="Uitwerk." />}
              </div>
              {isExamenSpeelbaar(pdf.id) && onPlayExamen && (
                <button
                  onClick={() => onPlayExamen(pdf)}
                  style={{
                    width: "100%",
                    padding: "6px 10px",
                    marginTop: 2,
                    borderRadius: 8,
                    border: `1px solid ${C.warm}`,
                    background: "rgba(255,213,79,0.12)",
                    color: C.warm,
                    fontFamily: "var(--font-display)",
                    fontSize: 11, fontWeight: 700,
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
                  }}
                  title="Speel deze PDF in de app als examenmodus (geen hints)"
                >
                  ▶ Speel in app
                </button>
              )}
            </div>
          ) : (
            <div style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 10,
              border: `1px dashed ${C.border}`,
              background: "rgba(255,255,255,0.02)",
              color: C.muted,
              fontSize: 12,
              minHeight: 64,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0.6,
            }}>
              PDF niet beschikbaar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PdfPill({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: 11, fontWeight: 600,
        color: C.pdf,
        padding: "3px 8px",
        border: `1px solid rgba(167,139,250,0.4)`,
        borderRadius: 6,
        textDecoration: "none",
        whiteSpace: "nowrap",
        background: "rgba(167,139,250,0.06)",
        transition: "background 0.15s",
      }}
      onMouseOver={(ev) => ev.currentTarget.style.background = "rgba(167,139,250,0.18)"}
      onMouseOut={(ev) => ev.currentTarget.style.background = "rgba(167,139,250,0.06)"}
      title={`Open ${label}-PDF in nieuw tabblad`}
    >
      {label} ↗
    </a>
  );
}
