// TopicPicker — Mark UX 2026-05-18.
// Toont alle leerpaden van een vak als klikbare onderwerpen ("topics").
// Klik → start een oefen-quiz over dat onderwerp (alle check-vragen in het pad,
// didactische modus mét hints + uitlegPad-trigger bij fout).
//
// Verschilt van LearnPathsHub (Leren = doorlopen van de stappen) en
// TextbookQuiz (Oefenen = via boek/hoofdstuk):
//   📚 Leren            → leerpad met stappen, uitleg, didactische volgorde
//   🎯 Oefenen-boek     → kies methode + hoofdstuk → AI-vragen
//   🔍 Per onderwerp    → kies topic → alle check-vragen direct oefenen

import { useMemo, useState } from "react";
import Header from "../../components/Header.jsx";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { categoryToLearnSubjects } from "../../learnPaths/subjectMapping.js";
import styles from "../../styles.js";

const VAK_LABELS = {
  rekenen: "Rekenen",
  wiskunde: "Wiskunde",
  taal: "Nederlands",
  nederlands: "Nederlands",
  spelling: "Spelling",
  "begrijpend-lezen": "Begrijpend lezen",
  engels: "Engels",
  biologie: "Biologie",
  geschiedenis: "Geschiedenis",
  aardrijkskunde: "Aardrijkskunde",
  natuurkunde: "Natuurkunde",
  scheikunde: "Scheikunde",
  economie: "Economie",
  beco: "Bedrijfseconomie",
  duits: "Duits",
  frans: "Frans",
  maatschappijleer: "Maatschappijleer",
  nask: "NaSk",
  natuur: "Wereldoriëntatie",
};

export default function TopicPicker({ categoryId, onBack, onHome, onPickTopic }) {
  const [zoek, setZoek] = useState("");

  const subjects = useMemo(() => {
    if (!categoryId) return [];
    return categoryToLearnSubjects(categoryId);
  }, [categoryId]);

  // Filter pathManifest op de geconfigureerde leerpad-subjects.
  // Examen-paden en mix-paden weghalen (id begint met "examen-").
  const topics = useMemo(() => {
    const set = new Set(subjects);
    return pathManifest
      .filter((p) => p && p.id && !p.id.startsWith("examen-") && set.has(p.subject))
      .sort((a, b) => (a.title || "").localeCompare(b.title || "", "nl"));
  }, [subjects]);

  // Tekst-zoekfilter op title.
  const gefilterd = useMemo(() => {
    const q = zoek.trim().toLowerCase();
    if (!q) return topics;
    return topics.filter((p) => (p.title || "").toLowerCase().includes(q));
  }, [topics, zoek]);

  const titel = VAK_LABELS[categoryId] || categoryId || "Onderwerp";

  return (
    <div style={styles.page}>
      <Header
        title={`${titel} — kies een onderwerp 🔍`}
        subtitle="Klik op een topic om er direct over te oefenen"
        onBack={onBack}
        onHome={onHome}
      />
      <div style={{ ...styles.content, maxWidth: 760 }}>
        {topics.length === 0 ? (
          <div style={{
            padding: "24px 16px",
            textAlign: "center",
            color: "rgba(255,255,255,0.7)",
            background: "rgba(255,255,255,0.04)",
            border: "1px dashed rgba(255,255,255,0.18)",
            borderRadius: 12,
          }}>
            Voor <strong>{titel}</strong> staan nog geen onderwerpen klaar.
            <br />
            <span style={{ fontSize: 12, opacity: 0.7 }}>
              Probeer "📚 Leren" of "🎯 Oefenen uit je boek".
            </span>
          </div>
        ) : (
          <>
            <input
              type="text"
              value={zoek}
              onChange={(e) => setZoek(e.target.value)}
              placeholder={`Zoek in ${topics.length} onderwerpen...`}
              style={{
                width: "100%",
                padding: "10px 14px",
                marginBottom: 14,
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.06)",
                color: "var(--color-text-strong)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                outline: "none",
              }}
            />
            {gefilterd.length === 0 && (
              <div style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", padding: "16px 0" }}>
                Geen onderwerpen gevonden voor "{zoek}".
              </div>
            )}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 10,
            }}>
              {gefilterd.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onPickTopic && onPickTopic(p.id)}
                  style={{
                    background: "rgba(167,139,250,0.10)",
                    border: "1.5px solid rgba(167,139,250,0.35)",
                    borderRadius: 12,
                    padding: "12px 14px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    color: "var(--color-text-strong)",
                    fontFamily: "var(--font-body)",
                    transition: "background 150ms, transform 150ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(167,139,250,0.20)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(167,139,250,0.10)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 18 }}>{p.emoji || "📘"}</span>
                    <strong style={{ fontFamily: "var(--font-display)", fontSize: 14 }}>{p.title}</strong>
                  </span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
                    {p.checkCount ? `${p.checkCount} vragen` : ""}
                    {p.level ? ` · ${p.level}` : ""}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
