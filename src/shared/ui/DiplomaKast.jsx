// 🏆 Diploma-kast — beloning-lus met de Rekentuin-les (Mark 12 aug 2026):
// zichtbare groei per vaardigheid, nooit straf. De kast vult zichzelf uit
// échte toets-resultaten (leaderboard): per onderwerp het BESTE resultaat
// als mini-diploma ("77% op 12 aug"), printbaar als PDF via /diploma.
// Gebruikt op /mijn (kind), in het thuis-overzicht (ouder, via scores-prop)
// en in het park (prijzenkast). Concurrentie-vondst 12 aug: geen enkele
// concurrent heeft een diploma-overzicht mét print — dit is uniek.
import { useEffect, useMemo, useState } from "react";
import supabase from "../../supabase.js";
import { SUBJECTS } from "../subjects.js";
import { track } from "../../utils.js";

const MAANDEN = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

function nlDatum(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getDate()} ${MAANDEN[d.getMonth()]} ${d.getFullYear()}`;
}

function vakLabel(subject, level) {
  if (subject === "cito") return "Doorstroomtoets-oefening";
  const s = SUBJECTS[subject];
  const naam = s?.title || (subject ? subject.charAt(0).toUpperCase() + subject.slice(1).replace(/-/g, " ") : "Oefentoets");
  return level ? `${naam} (${level})` : naam;
}

function vakEmoji(subject) {
  if (subject === "cito") return "🎯";
  return SUBJECTS[subject]?.emoji || "📘";
}

// Beste resultaat per onderwerp = het diploma; nieuwe hogere score
// vervangt hem vanzelf (dat is de "groei" uit de tuin-les).
export function bouwDiplomas(rows) {
  const beste = new Map();
  (rows || []).forEach((r) => {
    if (r?.percentage == null || !r.subject) return;
    const key = `${r.subject}|${r.level || ""}`;
    const oud = beste.get(key);
    if (!oud || r.percentage > oud.percentage) {
      beste.set(key, { subject: r.subject, level: r.level || "", percentage: Math.round(r.percentage), datum: r.completed_at, pogingen: 1 });
    } else {
      oud.pogingen += 1;
    }
  });
  return [...beste.values()].sort((a, b) => new Date(b.datum) - new Date(a.datum));
}

export default function DiplomaKast({ player, scores, naamVoorDiploma, bron = "mijn", maxItems = 12 }) {
  const [eigenRows, setEigenRows] = useState(null);
  const extern = Array.isArray(scores);

  useEffect(() => {
    if (extern || !player) return undefined;
    let weg = false;
    supabase.from("leaderboard")
      .select("subject, level, percentage, completed_at")
      .eq("player_name", player)
      .order("completed_at", { ascending: false })
      .limit(100)
      .then(({ data }) => { if (!weg) setEigenRows(data || []); });
    return () => { weg = true; };
  }, [player, extern]);

  const diplomas = useMemo(() => bouwDiplomas(extern ? scores : eigenRows).slice(0, maxItems), [extern, scores, eigenRows, maxItems]);
  const laden = !extern && eigenRows === null;
  const naam = (naamVoorDiploma || player || "").trim();

  if (laden) return <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>Diploma-kast laden…</div>;

  if (diplomas.length === 0) {
    return (
      <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.55 }}>
        🏆 De kast is nog leeg — en dat is niet erg! Rond een <strong style={{ color: "var(--color-text, #e8edf5)" }}>oefentoets</strong> af
        en je eerste diploma hangt hier, met je score en de datum erop. Printen mag altijd.
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "grid", gap: 8 }}>
        {diplomas.map((d) => {
          const printUrl = `/diploma?naam=${encodeURIComponent(naam)}&onderwerp=${encodeURIComponent(vakLabel(d.subject, d.level))}&score=${d.percentage}&datum=${encodeURIComponent(nlDatum(d.datum))}`;
          return (
            <div key={`${d.subject}|${d.level}`} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
              padding: "9px 12px", borderRadius: 12,
              border: "1px solid rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.07)",
            }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 800, color: "var(--color-text-strong, #fff)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {vakEmoji(d.subject)} {vakLabel(d.subject, d.level)}
                </div>
                <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)", marginTop: 2 }}>
                  🏅 <strong style={{ color: "#ffd54f" }}>{d.percentage}%</strong> · {nlDatum(d.datum)}
                  {d.pogingen > 1 ? ` · beste van ${d.pogingen} pogingen` : ""}
                </div>
              </div>
              <a
                href={printUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("diploma_kast_print", { bron, subject: d.subject })}
                style={{
                  flexShrink: 0, textDecoration: "none", padding: "8px 12px", borderRadius: 9,
                  background: "rgba(255,213,79,0.18)", border: "1px solid rgba(255,213,79,0.5)",
                  color: "#ffd54f", fontFamily: "var(--font-display, system-ui)", fontSize: 12, fontWeight: 800,
                }}
              >
                🖨️ Print
              </a>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", marginTop: 8, lineHeight: 1.5 }}>
        Elk diploma toont je <strong>beste</strong> score — haal je een hogere, dan groeit je diploma vanzelf mee. 🌱
      </div>
    </div>
  );
}
