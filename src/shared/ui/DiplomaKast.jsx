// 🏆 Diploma-kast — beloning-lus met de Rekentuin-les (Mark 12 aug 2026):
// zichtbare groei per vaardigheid, nooit straf. De kast vult zichzelf uit
// échte toets-resultaten (leaderboard): per onderwerp het BESTE resultaat
// als mini-diploma ("77% op 12 aug"), printbaar als PDF via /diploma.
//
// VERDIEND-REGELS (Mark 13 aug: "een medaille moet écht verdiend zijn"):
// een diploma hangt pas in de kast als het kind voor dat onderwerp
// (1) minstens 10 vragen heeft gemaakt (alle pogingen samen) én
// (2) de beste toets 60% of hoger was (bv. 6 van de 10 goed).
// Nog niet zover? Dan staat het onderwerp bij "🌱 Bijna een diploma" met
// precies wat er nog nodig is — groei tonen, geen straf.
// Tik op een diploma → "zo is het verdiend" (vragen, pogingen, datums) —
// zo zien ouders en verzorgers dat het papiertje ergens voor staat.
//
// Gebruikt op /mijn (kind), in het thuis-overzicht (ouder, via scores-prop)
// en in het park (prijzenkast). Concurrentie-vondst 12 aug: geen enkele
// concurrent heeft een diploma-overzicht mét print — dit is uniek.
import { useEffect, useMemo, useState } from "react";
import supabase from "../../supabase.js";
import { SUBJECTS } from "../subjects.js";
import { track } from "../../utils.js";
import { ontgrendelGoud } from "../mijnThema.js";

export const DIPLOMA_MIN_VRAGEN = 10;
export const DIPLOMA_MIN_PROCENT = 60;

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

// Per onderwerp alle pogingen optellen en het beste resultaat bewaren.
// Verdiend = ≥ DIPLOMA_MIN_VRAGEN vragen gemaakt én beste ≥ DIPLOMA_MIN_PROCENT.
export function bouwDiplomas(rows) {
  const per = new Map();
  (rows || []).forEach((r) => {
    if (r?.percentage == null || !r.subject) return;
    const key = `${r.subject}|${r.level || ""}`;
    const d = per.get(key) || {
      subject: r.subject, level: r.level || "",
      pogingen: 0, totVragen: 0, totGoed: 0,
      beste: null, eersteDatum: r.completed_at, laatsteDatum: r.completed_at,
    };
    d.pogingen += 1;
    d.totVragen += Number(r.total) || 0;
    d.totGoed += Number(r.score) || 0;
    if (r.completed_at && (!d.eersteDatum || r.completed_at < d.eersteDatum)) d.eersteDatum = r.completed_at;
    if (r.completed_at && (!d.laatsteDatum || r.completed_at > d.laatsteDatum)) d.laatsteDatum = r.completed_at;
    if (!d.beste || r.percentage > d.beste.percentage) {
      d.beste = { percentage: Math.round(r.percentage), goed: Number(r.score) || null, van: Number(r.total) || null, datum: r.completed_at };
    }
    per.set(key, d);
  });
  const alles = [...per.values()].map((d) => ({
    ...d,
    percentage: d.beste?.percentage ?? 0,
    datum: d.beste?.datum,
    verdiend: d.totVragen >= DIPLOMA_MIN_VRAGEN && (d.beste?.percentage ?? 0) >= DIPLOMA_MIN_PROCENT,
  }));
  return alles.sort((a, b) => new Date(b.datum) - new Date(a.datum));
}

export default function DiplomaKast({ player, scores, naamVoorDiploma, bron = "mijn", maxItems = 12 }) {
  const [eigenRows, setEigenRows] = useState(null);
  const [openDetail, setOpenDetail] = useState(null);
  const extern = Array.isArray(scores);

  useEffect(() => {
    if (extern || !player) return undefined;
    let weg = false;
    supabase.from("leaderboard")
      .select("subject, level, score, total, percentage, completed_at")
      .eq("player_name", player)
      .order("completed_at", { ascending: false })
      .limit(100)
      .then(({ data }) => { if (!weg) setEigenRows(data || []); });
    return () => { weg = true; };
  }, [player, extern]);

  const alle = useMemo(() => bouwDiplomas(extern ? scores : eigenRows), [extern, scores, eigenRows]);
  const diplomas = useMemo(() => alle.filter((d) => d.verdiend).slice(0, maxItems), [alle, maxItems]);
  const bijna = useMemo(() => alle.filter((d) => !d.verdiend).slice(0, 4), [alle]);

  // Eerste échte diploma = gouden thema verdiend (zie mijnThema.js).
  useEffect(() => {
    if (player && diplomas.length > 0) ontgrendelGoud(player);
  }, [player, diplomas.length]);
  const laden = !extern && eigenRows === null;
  const naam = (naamVoorDiploma || player || "").trim();

  if (laden) return <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>Even kijken wat je hebt verdiend… 🏅</div>;

  if (diplomas.length === 0 && bijna.length === 0) {
    return (
      <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.55 }}>
        🏆 De kast is nog leeg — en dat is niet erg! Maak <strong style={{ color: "var(--color-text, #e8edf5)" }}>{DIPLOMA_MIN_VRAGEN} vragen</strong> over
        een onderwerp en haal <strong style={{ color: "var(--color-text, #e8edf5)" }}>{DIPLOMA_MIN_PROCENT}%</strong> op een oefentoets — dan hangt je eerste
        échte diploma hier, met je score en de datum erop. Printen mag altijd.
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "grid", gap: 8 }}>
        {diplomas.map((d) => {
          const key = `${d.subject}|${d.level}`;
          const isOpen = openDetail === key;
          const printUrl = `/diploma?naam=${encodeURIComponent(naam)}&onderwerp=${encodeURIComponent(vakLabel(d.subject, d.level))}&score=${d.percentage}&datum=${encodeURIComponent(nlDatum(d.datum))}`
            + (d.beste?.goed != null && d.beste?.van ? `&goed=${d.beste.goed}&van=${d.beste.van}` : "")
            + `&vragen=${d.totVragen}&pogingen=${d.pogingen}`;
          return (
            <div key={key} style={{
              borderRadius: 12,
              border: "1px solid rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.07)",
            }}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => { setOpenDetail(isOpen ? null : key); if (!isOpen) track("diploma_detail", { bron, subject: d.subject }); }}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenDetail(isOpen ? null : key); } }}
                aria-expanded={isOpen}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "9px 12px", cursor: "pointer" }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 800, color: "var(--color-text-strong, #fff)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {vakEmoji(d.subject)} {vakLabel(d.subject, d.level)}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)", marginTop: 2 }}>
                    🏅 <strong style={{ color: "#ffd54f" }}>{d.percentage}%</strong> · {nlDatum(d.datum)}
                    {d.pogingen > 1 ? ` · beste van ${d.pogingen} pogingen` : ""}
                    <span style={{ marginLeft: 6, fontSize: 11 }}>{isOpen ? "▴" : "▾ hoe verdiend?"}</span>
                  </div>
                </div>
                <a
                  href={printUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { e.stopPropagation(); track("diploma_kast_print", { bron, subject: d.subject }); }}
                  style={{
                    flexShrink: 0, textDecoration: "none", padding: "8px 12px", borderRadius: 9,
                    background: "rgba(255,213,79,0.18)", border: "1px solid rgba(255,213,79,0.5)",
                    color: "#ffd54f", fontFamily: "var(--font-display, system-ui)", fontSize: 12, fontWeight: 800,
                  }}
                >
                  👀 Openen
                </a>
              </div>
              {isOpen && (
                <div style={{ padding: "0 12px 10px", fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.6, borderTop: "1px dashed rgba(255,213,79,0.25)" }}>
                  <div style={{ marginTop: 8, fontWeight: 700, color: "#ffd54f" }}>Zo is dit diploma verdiend:</div>
                  <div>
                    • {d.totVragen} vragen gemaakt{d.pogingen > 1 ? ` in ${d.pogingen} toetsen` : ""} (waarvan {d.totGoed} goed)<br />
                    • Beste toets: {d.beste?.goed != null && d.beste?.van ? `${d.beste.goed} van de ${d.beste.van} goed (${d.percentage}%)` : `${d.percentage}%`} op {nlDatum(d.datum)}
                    {d.eersteDatum && d.eersteDatum !== d.datum ? <><br />• Eerste poging: {nlDatum(d.eersteDatum)} — kijk hoe je bent gegroeid 🌱</> : null}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {bijna.length > 0 && (
        <div style={{ marginTop: diplomas.length ? 12 : 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: "var(--color-text-muted, #8899aa)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>
            🌱 Op weg naar een diploma
          </div>
          <div style={{ display: "grid", gap: 6 }}>
            {bijna.map((d) => {
              const nogVragen = Math.max(0, DIPLOMA_MIN_VRAGEN - d.totVragen);
              const tekort = d.percentage < DIPLOMA_MIN_PROCENT;
              const hint = nogVragen > 0
                ? `nog ${nogVragen} ${nogVragen === 1 ? "vraag" : "vragen"} oefenen`
                : tekort
                  ? `beste score ${d.percentage}% — bij ${DIPLOMA_MIN_PROCENT}% is het raak!`
                  : "";
              return (
                <div key={`${d.subject}|${d.level}`} style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "7px 12px", borderRadius: 10,
                  border: "1px dashed rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.03)",
                }}>
                  <span style={{ fontSize: 16 }} aria-hidden="true">{vakEmoji(d.subject)}</span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: 12.5, fontWeight: 700, color: "var(--color-text, #e8edf5)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {vakLabel(d.subject, d.level)}
                  </span>
                  <span style={{ fontSize: 11.5, color: "#8fd694", fontWeight: 700, flexShrink: 0 }}>{hint}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", marginTop: 8, lineHeight: 1.5 }}>
        Een diploma is hier écht <strong>verdiend</strong>: minstens {DIPLOMA_MIN_VRAGEN} vragen gemaakt én {DIPLOMA_MIN_PROCENT}% of hoger.
        Tik op <strong>👀 Openen</strong> om je oorkonde eerst te bekijken — printen of opslaan als PDF kan daar.
        Haal je later een hogere score, dan groeit je diploma vanzelf mee. 🌱
      </div>
    </div>
  );
}
