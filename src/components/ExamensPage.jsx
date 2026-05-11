import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header.jsx";
import {
  EXAMENS,
  VAK_LABELS,
  NIVEAU_LABELS,
  getExamenUrl,
  getCorrectieUrl,
  getBijlageUrl,
} from "../data/examens.js";
import { isExamenSpeelbaar } from "../data/examenQuizzes/index.js";
import { ALL_LEARN_PATHS } from "../learnPaths/index.js";

// Examens-pagina (Mark idee 2026-05-08, herzien 2026-05-11):
// TWEE gelijkwaardige modi (beide kern-feature, geen mag worden weggemoffeld):
// 1. 🎯 OEFENEN MET UITLEG — examen-leerpaden (id startsWith "examen-"). Echte
//    examenvragen mét voorkennisKeten + uitlegPad + leerpad-link. USP van NL.
// 2. 📄 INZIEN ALS PDF — hele eindexamens (EXAMENS) + correctievoorschrift.
//    Voor zelfstudie/printen/oefenen-op-papier.
// Prop `initialMode` ("leren" | "pdf") bepaalt naar welke sectie de pagina
// bij mount scrolt. Beide secties zijn altijd zichtbaar.

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  warm: "#ffd54f",
  accent: "#ff6b35",
};

export default function ExamensPage({ onBack, onHome, prefilterVak, onPlayExamen, onPickPath, initialMode = "leren" }) {
  const [niveauFilter, setNiveauFilter] = useState("alle");
  const [vakFilter, setVakFilter] = useState(prefilterVak || "alle");
  const lerenSectionRef = useRef(null);
  const pdfSectionRef = useRef(null);

  // Examen-leerpaden (id startsWith "examen-") — onze "echt leren"-modus.
  // Gegroepeerd per subject voor visuele indeling.
  const examenLeerpaden = useMemo(() => {
    return Object.values(ALL_LEARN_PATHS).filter((p) => p.id && p.id.startsWith("examen-"));
  }, []);

  const examenPathsBySubject = useMemo(() => {
    const out = {};
    for (const p of examenLeerpaden) {
      const subj = p.subject || "overig";
      if (!out[subj]) out[subj] = [];
      out[subj].push(p);
    }
    // Sorteer per vak op id (jaar+tijdvak natuurlijk gesorteerd via ID)
    for (const k of Object.keys(out)) out[k].sort((a, b) => a.id.localeCompare(b.id));
    return out;
  }, [examenLeerpaden]);

  // Scroll naar gevraagde sectie bij mount (en wanneer Mark de pagina opnieuw
  // opent met andere mode). Beide secties blijven zichtbaar — alleen scroll-positie.
  useEffect(() => {
    const t = setTimeout(() => {
      const target = initialMode === "pdf" ? pdfSectionRef.current : lerenSectionRef.current;
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(t);
  }, [initialMode]);

  const niveaus = useMemo(() => {
    const set = new Set(EXAMENS.map((e) => e.niveau));
    return ["alle", ...Array.from(set)];
  }, []);

  const vakken = useMemo(() => {
    const set = new Set(EXAMENS.map((e) => e.vak));
    return ["alle", ...Array.from(set)];
  }, []);

  const gefilterd = useMemo(() => {
    return EXAMENS.filter((e) => {
      if (niveauFilter !== "alle" && e.niveau !== niveauFilter) return false;
      if (vakFilter !== "alle" && e.vak !== vakFilter) return false;
      return true;
    });
  }, [niveauFilter, vakFilter]);

  const grouped = useMemo(() => {
    const out = {};
    for (const e of gefilterd) {
      if (!out[e.vak]) out[e.vak] = [];
      out[e.vak].push(e);
    }
    for (const k of Object.keys(out)) {
      out[k].sort((a, b) => b.jaar - a.jaar);
    }
    return out;
  }, [gefilterd]);

  return (
    <div style={{ minHeight: "100dvh", background: C.bg, color: C.text, fontFamily: "var(--font-body)" }}>
      <Header
        title="Examens 🎓"
        subtitle="Oefenen met uitleg óf inzien als PDF"
        onBack={onBack}
        onHome={onHome}
      />

      <div style={{ padding: "16px 18px 32px" }}>
        {/* ─── SECTIE 1: OEFENEN MET UITLEG (examen-leerpaden) ─── */}
        <div ref={lerenSectionRef} style={{ scrollMarginTop: 16 }}>
          <SectieKop
            icon="🎯"
            kleur={C.warm}
            titel="Oefenen met uitleg"
            subtitel={`${examenLeerpaden.length} examens — echte vragen + waarom het antwoord klopt + doorklik naar leerpad`}
          />
          {examenLeerpaden.length === 0 && (
            <div style={{ ...cardStyle(), textAlign: "center", padding: "20px 14px", color: C.muted }}>
              Nog geen interactieve examen-paden.
            </div>
          )}
          {Object.entries(examenPathsBySubject).map(([vak, lijst]) => {
            const vakInfo = VAK_LABELS[vak] || { label: vak, icon: "📄", color: C.warm };
            return (
              <div key={vak} style={{ marginBottom: 18 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 10, marginBottom: 8,
                  paddingBottom: 4, borderBottom: `1px solid ${C.border}`,
                }}>
                  <span style={{ fontSize: 20 }} aria-hidden="true">{vakInfo.icon}</span>
                  <h4 style={{
                    fontFamily: "var(--font-display)", fontSize: 16, color: vakInfo.color, margin: 0,
                  }}>{vakInfo.label}</h4>
                  <span style={{ marginLeft: "auto", fontSize: 11, color: C.muted }}>
                    {lijst.length} {lijst.length === 1 ? "pad" : "paden"}
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
                  {lijst.map((p) => {
                    const aantalVragen = (p.steps || []).reduce((s, st) => s + (st.checks?.length || 0), 0);
                    return (
                      <button
                        key={p.id}
                        onClick={() => onPickPath && onPickPath(p.id)}
                        disabled={!onPickPath}
                        style={{
                          textAlign: "left",
                          background: "rgba(255,213,79,0.08)",
                          border: `1.5px solid rgba(255,213,79,0.45)`,
                          borderRadius: 12,
                          padding: "12px 14px",
                          color: C.text,
                          cursor: onPickPath ? "pointer" : "default",
                          fontFamily: "var(--font-body)",
                          minHeight: 44,
                          transition: "background 0.15s",
                        }}
                        onMouseOver={(ev) => { if (onPickPath) ev.currentTarget.style.background = "rgba(255,213,79,0.15)"; }}
                        onMouseOut={(ev) => { ev.currentTarget.style.background = "rgba(255,213,79,0.08)"; }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 22 }} aria-hidden="true">{p.emoji || "🎓"}</span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: C.warm, marginBottom: 2 }}>
                              {p.title || p.id}
                            </div>
                            <div style={{ fontSize: 11, color: C.muted }}>
                              {aantalVragen > 0 ? `${aantalVragen} vragen · ` : ""}met uitleg waarom het juiste antwoord klopt
                            </div>
                          </div>
                          <span style={{ fontSize: 16, color: "rgba(255,213,79,0.75)" }} aria-hidden="true">›</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div style={{
            marginTop: 8, marginBottom: 24,
            padding: "10px 14px",
            background: "rgba(255,213,79,0.06)",
            border: "1px dashed rgba(255,213,79,0.25)",
            borderRadius: 12,
            fontSize: 12, color: C.muted, lineHeight: 1.5,
          }}>
            💡 <strong style={{ color: C.warm }}>Tip</strong>: bij een fout antwoord opent de uitleg ('begrijp je dit?').
            Klik door naar het leerpad over het onderwerp en kom terug bij de vraag.
          </div>
        </div>

        {/* ─── SECTIE 2: HELE EXAMENS ALS PDF ─── */}
        <div ref={pdfSectionRef} style={{ scrollMarginTop: 16 }}>
          <SectieKop
            icon="📄"
            kleur="#a78bfa"
            titel="Hieronder kun je hele examens inzien (PDF)"
            subtitel="Volledige examens + correctievoorschrift — handig voor zelfstudie op papier"
          />
        </div>

        {EXAMENS.length === 0 && (
          <div style={{ ...cardStyle(), textAlign: "center", padding: "30px 14px" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>📚</div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Nog geen examens</div>
            <div style={{ fontSize: 13, color: C.muted }}>
              Mark voegt binnenkort de eerste examens toe.
            </div>
          </div>
        )}

        {EXAMENS.length > 0 && (
          <>
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 14, lineHeight: 1.5 }}>
              Echte oude eindexamens. Goed om de stijl en moeilijkheidsgraad te leren kennen.
              <br/>
              Klik op een examen → opent in een nieuwe tab.
            </p>

            {vakken.length > 2 && (
              <FilterRij
                label="Vak"
                opties={vakken}
                value={vakFilter}
                onChange={setVakFilter}
                renderLabel={(v) => v === "alle" ? "Alle vakken" : (VAK_LABELS[v]?.label || v)}
              />
            )}

            {niveaus.length > 2 && (
              <FilterRij
                label="Niveau"
                opties={niveaus}
                value={niveauFilter}
                onChange={setNiveauFilter}
                renderLabel={(v) => v === "alle" ? "Alle niveaus" : (NIVEAU_LABELS[v] || v.toUpperCase())}
              />
            )}

            {Object.keys(grouped).length === 0 && (
              <div style={{ ...cardStyle(), textAlign: "center", padding: "20px 14px", color: C.muted }}>
                Geen examens met deze filters.
              </div>
            )}

            {Object.entries(grouped).map(([vak, lijst]) => {
              const vakInfo = VAK_LABELS[vak] || { label: vak, icon: "📄", color: C.warm };
              return (
                <div key={vak} style={{ marginBottom: 22 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                    paddingBottom: 6,
                    borderBottom: `1px solid ${C.border}`,
                  }}>
                    <span style={{ fontSize: 22 }} aria-hidden="true">{vakInfo.icon}</span>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      color: vakInfo.color,
                      margin: 0,
                    }}>
                      {vakInfo.label}
                    </h3>
                    <span style={{ marginLeft: "auto", fontSize: 12, color: C.muted }}>
                      {lijst.length} examen{lijst.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {lijst.map((e) => {
                      const opgaveUrl = getExamenUrl(e);
                      const correctieUrl = getCorrectieUrl(e);
                      const bijlageUrl = getBijlageUrl(e);
                      const speelbaar = isExamenSpeelbaar(e.id);
                      const isExtern = !!e.externalUrl;
                      return (
                        <div
                          key={e.id}
                          style={{
                            background: C.card,
                            border: `1px solid ${C.border}`,
                            borderRadius: 12,
                            padding: "12px 14px",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                            <span style={{ fontSize: 18 }} aria-hidden="true">📚</span>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
                                {e.titel}
                              </div>
                              <div style={{ fontSize: 11, color: C.muted, display: "flex", flexWrap: "wrap", gap: 8 }}>
                                <span>{NIVEAU_LABELS[e.niveau] || e.niveau}</span>
                                <span aria-hidden="true">·</span>
                                <span>{e.jaar}{e.tijdvak ? ` — tijdvak ${e.tijdvak}` : ""}</span>
                                {e.bron && (
                                  <>
                                    <span aria-hidden="true">·</span>
                                    <span style={{ opacity: 0.7 }}>{e.bron}{isExtern ? " ↗" : ""}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          {speelbaar && onPlayExamen && (
                            <button
                              onClick={() => onPlayExamen(e)}
                              style={{
                                width: "100%",
                                marginBottom: 8,
                                padding: "12px 14px",
                                borderRadius: 10,
                                border: `1.5px solid ${C.warm}`,
                                background: "rgba(255,213,79,0.15)",
                                color: C.warm,
                                fontFamily: "var(--font-display)",
                                fontSize: 14,
                                fontWeight: 700,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                transition: "all 0.15s",
                              }}
                              onMouseOver={(ev) => ev.currentTarget.style.background = "rgba(255,213,79,0.28)"}
                              onMouseOut={(ev) => ev.currentTarget.style.background = "rgba(255,213,79,0.15)"}
                            >
                              ▶ Speel in de app (oefenmodus)
                            </button>
                          )}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            <PdfKnop
                              href={opgaveUrl}
                              icon="📜"
                              label="Opgaven"
                              sublabel="vragen"
                              kleur={C.text}
                              border={C.border}
                              hoverBg="rgba(255,255,255,0.06)"
                            />
                            {bijlageUrl && (
                              <PdfKnop
                                href={bijlageUrl}
                                icon="📑"
                                label="Bijlage"
                                sublabel="teksten/bronnen"
                                kleur={C.accent}
                                border="rgba(255,107,53,0.5)"
                                hoverBg="rgba(255,107,53,0.12)"
                              />
                            )}
                            {correctieUrl && (
                              <PdfKnop
                                href={correctieUrl}
                                icon="✅"
                                label="Antwoorden"
                                sublabel="correctievoorschrift"
                                kleur={C.muted}
                                border={C.border}
                                hoverBg="rgba(255,213,79,0.1)"
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div style={{
              marginTop: 24,
              padding: "12px 14px",
              background: "rgba(255,213,79,0.08)",
              border: "1px dashed rgba(255,213,79,0.3)",
              borderRadius: 12,
              fontSize: 12,
              color: C.muted,
              lineHeight: 1.5,
            }}>
              💡 <strong style={{ color: C.warm }}>Tip</strong>: maak het examen eerst zelf op
              papier, leg de antwoordzijde af. Daarna controleer je. Geeft de
              meest realistische test-ervaring.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FilterRij({ label, opties, value, onChange, renderLabel }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {opties.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              onClick={() => onChange(o)}
              style={{
                padding: "6px 12px",
                borderRadius: 999,
                border: active ? `1.5px solid ${C.warm}` : `1px solid ${C.border}`,
                background: active ? "rgba(255,213,79,0.15)" : "rgba(255,255,255,0.04)",
                color: active ? C.warm : C.muted,
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {renderLabel(o)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PdfKnop({ href, icon, label, sublabel, kleur, border, hoverBg }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flex: "1 1 0",
        minWidth: 90,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "10px 8px",
        borderRadius: 8,
        border: `1px solid ${border}`,
        background: "rgba(255,255,255,0.03)",
        color: kleur,
        textDecoration: "none",
        textAlign: "center",
        transition: "background 0.15s",
      }}
      onMouseOver={(ev) => ev.currentTarget.style.background = hoverBg}
      onMouseOut={(ev) => ev.currentTarget.style.background = "rgba(255,255,255,0.03)"}
    >
      <span style={{ fontSize: 18 }} aria-hidden="true">{icon}</span>
      <span style={{ fontSize: 12, fontWeight: 700 }}>{label}</span>
      <span style={{ fontSize: 10, opacity: 0.7 }}>{sublabel}</span>
    </a>
  );
}

function cardStyle() {
  return {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 14,
    padding: "14px 16px",
  };
}

// SectieKop = puur visuele scheiding tussen secties op ExamensPage.
// Mark feedback 2026-05-11: oorspronkelijk had het een rand-frame met
// gekleurde border — leek klikbaar maar was het niet. Aangepast naar
// hoofdstuk-stijl: icon + tekst + onderlijn. Geen knop-look.
function SectieKop({ icon, kleur, titel, subtitel }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 12,
      padding: "16px 4px 12px",
      marginBottom: 12,
      borderBottom: `1px solid ${kleur}`,
    }}>
      <span style={{ fontSize: 28, lineHeight: 1 }} aria-hidden="true">{icon}</span>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: kleur,
          margin: 0,
        }}>{titel}</h3>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{subtitel}</div>
      </div>
    </div>
  );
}
