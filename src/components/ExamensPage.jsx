import { useMemo, useState } from "react";
import Header from "./Header.jsx";
import {
  EXAMENS,
  VAK_LABELS,
  NIVEAU_LABELS,
  getExamenUrl,
  getCorrectieUrl,
} from "../data/examens.js";

// Examens-bibliotheek (Mark idee 2026-05-08): leerling kan oude
// (eind)examens inzien als PDF. Gegroepeerd per vak met filter-pillen
// op niveau. Klik = open PDF in nieuwe tab.

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  warm: "#ffd54f",
  accent: "#ff6b35",
};

export default function ExamensPage({ onBack, onHome, prefilterVak }) {
  const [niveauFilter, setNiveauFilter] = useState("alle");
  const [vakFilter, setVakFilter] = useState(prefilterVak || "alle");

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
        title="Oude examens 📜"
        subtitle="Bekijk echte eindexamens als PDF"
        onBack={onBack}
        onHome={onHome}
      />

      <div style={{ padding: "16px 18px 32px" }}>
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
                      const isExtern = !!e.externalUrl;
                      return (
                        <div
                          key={e.id}
                          style={{
                            background: C.card,
                            border: `1px solid ${C.border}`,
                            borderRadius: 12,
                          }}
                        >
                          <a
                            href={opgaveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "12px 14px",
                              color: C.text,
                              textDecoration: "none",
                            }}
                            onMouseOver={(ev) => ev.currentTarget.style.background = "rgba(40,60,90,0.8)"}
                            onMouseOut={(ev) => ev.currentTarget.style.background = "transparent"}
                          >
                            <span style={{ fontSize: 20 }} aria-hidden="true">📜</span>
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
                            <span style={{ fontSize: 14, color: C.muted }} aria-hidden="true">↗</span>
                          </a>
                          {correctieUrl && (
                            <a
                              href={correctieUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 14px 10px 46px",
                                color: C.muted,
                                fontSize: 11,
                                textDecoration: "none",
                                borderTop: `1px dashed ${C.border}`,
                              }}
                              onMouseOver={(ev) => ev.currentTarget.style.color = C.warm}
                              onMouseOut={(ev) => ev.currentTarget.style.color = C.muted}
                            >
                              ✅ Correctievoorschrift (antwoorden) ↗
                            </a>
                          )}
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

function cardStyle() {
  return {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 14,
    padding: "14px 16px",
  };
}
