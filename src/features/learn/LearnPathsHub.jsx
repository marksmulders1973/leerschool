import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { ALL_LEARN_PATHS } from "../../learnPaths";
import { CURRICULA, curriculumTotalSteps } from "../../curricula";
import { SUBJECTS as SUBJECT_LABELS } from "../../shared/subjects.js";

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  cardHover: "rgba(40,60,90,0.8)",
  border: "#2a3f5f",
  text: "var(--color-text)",
  muted: "var(--color-text-muted)",
  good: "#00c853",
  warm: "#ffd54f",
  accent: "#5b86b8",
};

// Per pad een gradient + accent-kleur (voor visuele herkenning)
const PATH_THEMES = {
  breuken: { gradient: "linear-gradient(135deg, #ff8a65, #d84315)", accent: "#ffccbc" },
  procenten: { gradient: "linear-gradient(135deg, #66bb6a, #2e7d32)", accent: "#a5d6a7" },
  "negatieve-getallen": { gradient: "linear-gradient(135deg, #455a64, #263238)", accent: "#90a4ae" },
  verhoudingen: { gradient: "linear-gradient(135deg, #ab47bc, #6a1b9a)", accent: "#ce93d8" },
  parabolen: { gradient: "linear-gradient(135deg, #00c853, #00a040)", accent: "var(--color-brand-primary-100)" },
  ruimtemeetkunde: { gradient: "linear-gradient(135deg, #00a8c8, #007a96)", accent: "#80deea" },
  "kwadraten-wortels": { gradient: "linear-gradient(135deg, #9c27b0, #6a1b9a)", accent: "#ce93d8" },
  pythagoras: { gradient: "linear-gradient(135deg, #ff7043, #d84315)", accent: "#ffab91" },
  "kwadratische-vergelijkingen": { gradient: "linear-gradient(135deg, #ffd54f, #f9a825)", accent: "#fff59d" },
  "lineaire-formules": { gradient: "linear-gradient(135deg, #1976d2, #0d47a1)", accent: "#90caf9" },
  "rekenen-met-letters": { gradient: "linear-gradient(135deg, #00897b, #00695c)", accent: "#80cbc4" },
  "vlakke-figuren": { gradient: "linear-gradient(135deg, #ec407a, #ad1457)", accent: "#f48fb1" },
  goniometrie: { gradient: "linear-gradient(135deg, #c62828, #7f0000)", accent: "#ef9a9a" },
  statistiek: { gradient: "linear-gradient(135deg, #00bcd4, #006064)", accent: "#80deea" },
  werkwoordsvervoeging: { gradient: "linear-gradient(135deg, #00e676, #00a040)", accent: "#b9f6ca" },
  argumentatieleer: { gradient: "linear-gradient(135deg, #5e35b1, #311b92)", accent: "#b39ddb" },
  schrijfvaardigheid: { gradient: "linear-gradient(135deg, #1976d2, #0d47a1)", accent: "#90caf9" },
  tekstanalyse: { gradient: "linear-gradient(135deg, #00897b, #004d40)", accent: "#80cbc4" },
  literatuurgeschiedenis: { gradient: "linear-gradient(135deg, #bf8f30, #6d4c1d)", accent: "#ffd54f" },
  spelling: { gradient: "linear-gradient(135deg, #26a69a, #00695c)", accent: "#80cbc4" },
  zinsontleding: { gradient: "linear-gradient(135deg, #7e57c2, #4527a0)", accent: "#b39ddb" },
  coordinatenstelsel: { gradient: "linear-gradient(135deg, #43a047, #1b5e20)", accent: "#a5d6a7" },
  "vergelijkingen-oplossen": { gradient: "linear-gradient(135deg, #ffb300, #e65100)", accent: "#ffe082" },
  machten: { gradient: "linear-gradient(135deg, #5e35b1, #311b92)", accent: "#b39ddb" },
  stelsels: { gradient: "linear-gradient(135deg, #d81b60, #880e4f)", accent: "#f48fb1" },
  kansrekening: { gradient: "linear-gradient(135deg, #00acc1, #006064)", accent: "#80deea" },
  exponentieel: { gradient: "linear-gradient(135deg, #f4511e, #bf360c)", accent: "#ffab91" },
  differentieren: { gradient: "linear-gradient(135deg, #3949ab, #1a237e)", accent: "#9fa8da" },
  logaritmen: { gradient: "linear-gradient(135deg, #00838f, #006064)", accent: "#80deea" },
  periodiek: { gradient: "linear-gradient(135deg, #ec407a, #ad1457)", accent: "#f48fb1" },
  "onregelmatige-werkwoorden-engels": { gradient: "linear-gradient(135deg, #c62828, #1565c0)", accent: "#90caf9" },
  "present-tenses-engels": { gradient: "linear-gradient(135deg, #1976d2, #283593)", accent: "#90caf9" },
  "past-tenses-engels": { gradient: "linear-gradient(135deg, #ad1457, #4527a0)", accent: "#ce93d8" },
  "woordsoorten-nederlands": { gradient: "linear-gradient(135deg, #00897b, #1565c0)", accent: "#80deea" },
  "woordenschat-engels": { gradient: "linear-gradient(135deg, #1565c0, #6a1b9a)", accent: "#ce93d8" },
  "nederlandse-staat-maatschappijleer": { gradient: "linear-gradient(135deg, #c62828, #1565c0)", accent: "#90caf9" },
  "dieren-seizoenen-natuur": { gradient: "linear-gradient(135deg, #66bb6a, #43a047)", accent: "#a5d6a7" },
  "cel-biologie": { gradient: "linear-gradient(135deg, #00b84d, #1b5e20)", accent: "#a5d6a7" },
  "tijdvakken-geschiedenis": { gradient: "linear-gradient(135deg, #6d4c41, #3e2723)", accent: "#bcaaa4" },
  "klimaten-aardrijkskunde": { gradient: "linear-gradient(135deg, #43a047, #1565c0)", accent: "#90caf9" },
  "krachten-natuurkunde": { gradient: "linear-gradient(135deg, #fb8c00, #d84315)", accent: "#ffab91" },
  "atoombouw-scheikunde": { gradient: "linear-gradient(135deg, #ad1457, #4a148c)", accent: "#ce93d8" },
  "vraag-aanbod-economie": { gradient: "linear-gradient(135deg, #f9a825, #ef6c00)", accent: "#ffe082" },
  "balans-beco": { gradient: "linear-gradient(135deg, #e65100, #bf360c)", accent: "#ffab91" },
  "naamvallen-duits": { gradient: "linear-gradient(135deg, #424242, #212121)", accent: "#bdbdbd" },
  "passe-compose-frans": { gradient: "linear-gradient(135deg, #1565c0, #b71c1c)", accent: "#90caf9" },
};

// Volgorde van klas-buckets — gebruikt voor distance-sortering: hoe verder
// een pad-bucket van leerling's bucket, hoe lager z'n positie. Een klas-4
// leerling ziet eerst klas-4 paden, dan klas-3, dan klas-5/bovenbouw, etc.
const BUCKET_ORDER = ["po", "klas-1", "klas-2", "klas-3", "klas-4", "bovenbouw"];

function bucketDistance(a, b) {
  const ai = BUCKET_ORDER.indexOf(a);
  const bi = BUCKET_ORDER.indexOf(b);
  if (ai === -1 || bi === -1) return 99;
  return Math.abs(ai - bi);
}

// Mapt het ad-hoc `level`-veld op een leerpad ("klas1-vwo", "havo4-5",
// "groep4-7", ...) naar een uniforme bucket voor groepering en een
// kleurenpil. Pakt het LAAGSTE start-niveau zodat een pad bv. "klas1-vwo"
// in de Klas-1 bucket valt (vanaf-niveau, niet doel-niveau).
function parseLevel(level) {
  const fallback = { bucketKey: "klas-1", bucketSort: 1, bucketLabel: "Klas 1", badge: { text: "Klas 1", bg: "#69f0ae", fg: "#003d1c" } };
  if (!level) return fallback;
  const l = String(level).toLowerCase();
  if (l.startsWith("groep")) return { bucketKey: "po", bucketSort: 0, bucketLabel: "Basisschool", badge: { text: "PO", bg: "#b9f6ca", fg: "#003d1c" } };
  if (l.includes("klas1")) return { bucketKey: "klas-1", bucketSort: 1, bucketLabel: "Klas 1", badge: { text: "Klas 1", bg: "#69f0ae", fg: "#003d1c" } };
  if (l.includes("klas2")) return { bucketKey: "klas-2", bucketSort: 2, bucketLabel: "Klas 2", badge: { text: "Klas 2", bg: "#00e676", fg: "#003d1c" } };
  if (l.includes("klas3") || l.startsWith("havo3")) return { bucketKey: "klas-3", bucketSort: 3, bucketLabel: "Klas 3", badge: { text: "Klas 3", bg: "#ffd54f", fg: "#1a0a00" } };
  if (l.startsWith("vmbo-gt-4") || l.startsWith("klas4")) return { bucketKey: "klas-4", bucketSort: 4, bucketLabel: "Klas 4 (vmbo)", badge: { text: "Klas 4", bg: "#ff9800", fg: "#1a0a00" } };
  if (l.startsWith("havo")) return { bucketKey: "bovenbouw", bucketSort: 5, bucketLabel: "Havo 4-5 / VWO", badge: { text: "Havo 4-5", bg: "#ef5350", fg: "#ffffff" } };
  if (l.includes("vwo") || l.includes("gymnasium")) return { bucketKey: "bovenbouw", bucketSort: 5, bucketLabel: "Havo 4-5 / VWO", badge: { text: "VWO", bg: "#ab47bc", fg: "#ffffff" } };
  return fallback;
}

// `filterSubject` (optioneel): leerpad-subject-key zoals "wiskunde" of "taal".
// Mag ook een array zijn (bv. NaSk = ["biologie","natuurkunde","scheikunde"]).
// Indien gezet, toont alleen paden + curricula van die vakken.
const SUBJECT_TO_CURRICULUM_PREFIX = {
  wiskunde: "wiskunde",
  taal: "nederlands",
};

export default function LearnPathsHub({ userName, authUser, userLevel = null, onPickPath, onPickCurriculum, onHome, onBack, filterSubject = null }) {
  const player = (userName || "Speler").trim() || "Speler";
  const [progressByPath, setProgressByPath] = useState({});
  const [loaded, setLoaded] = useState(false);
  // Klas-filter binnen vak-detail. null = "alle klassen". String = bucketKey
  // ("klas-1" | "klas-2" | "klas-3" | "klas-4" | "bovenbouw" | "po").
  // Default: kies de bucket van de leerling's eigen userLevel als die er is.
  const myBucket = userLevel ? parseLevel(userLevel).bucketKey : null;
  const [classFilter, setClassFilter] = useState(myBucket);
  // Reset class-filter naar "mijn klas" wanneer de leerling van vak wisselt.
  // Anders blijft een vorige keuze hangen die op het nieuwe vak misschien
  // niets oplevert.

  // Voortgang voor alle paden in één query
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase
          .from("learn_progress")
          .select("learn_path_id, step_idx")
          .eq("player_name", player);
        if (cancelled) return;
        const grouped = {};
        if (Array.isArray(data)) {
          data.forEach((r) => {
            if (!grouped[r.learn_path_id]) grouped[r.learn_path_id] = new Set();
            grouped[r.learn_path_id].add(r.step_idx);
          });
        }
        setProgressByPath(grouped);
      } catch (e) {
        // stil falen
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [player]);

  // Vak-grid is het entry-screen (zelfde IA als Oefenen-tab). Klik op tegel →
  // selectedSubject → toon detail-view met curricula + paden voor dat vak.
  // Wanneer filterSubject van bovenaf komt (bv. vanuit Oefenen-tab Leren-knop)
  // skip de grid en spring direct naar de detail-view voor dat vak.
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Bij wisseling van filterSubject van buitenaf (bv. user kiest ander vak via
  // bottom-nav of breadcrumb) selectedSubject resetten zodat we niet vasthangen.
  useEffect(() => {
    if (filterSubject != null) setSelectedSubject(null);
  }, [filterSubject]);

  // Bij wisseling van vak: reset class-filter naar leerling's eigen klas
  // (of "alle" als die niet bekend is).
  useEffect(() => {
    setClassFilter(myBucket);
  }, [selectedSubject, filterSubject, myBucket]);

  const allPaths = Object.values(ALL_LEARN_PATHS);
  // Effective filter = filterSubject (van bovenaf) OF selectedSubject (interne
  // state vanuit vak-grid-klik). filterSubject heeft voorrang. Wanneer beide
  // null zijn: tonen we het vak-grid entry-screen (Oefenen-tab-stijl).
  const effectiveFilter = filterSubject != null ? filterSubject : selectedSubject;
  // Normaliseer effectiveFilter tot een array van toegestane subjects (of null = alles).
  const filterArr = effectiveFilter == null
    ? null
    : Array.isArray(effectiveFilter) ? effectiveFilter : [effectiveFilter];
  const paths = filterArr
    ? allPaths.filter((p) => filterArr.includes(p.subject || "wiskunde"))
    : allPaths;

  // Groepeer per vak
  const grouped = {};
  paths.forEach((p) => {
    const subj = p.subject || "wiskunde";
    if (!grouped[subj]) grouped[subj] = [];
    grouped[subj].push(p);
  });

  const curriculumPrefixes = filterArr
    ? filterArr.map((s) => SUBJECT_TO_CURRICULUM_PREFIX[s]).filter(Boolean)
    : null;
  // Filter curricula op user's klas-bucket: PO-leerling ziet geen VO-leerlijnen,
  // klas-1 ziet klas-1, klas-2 ziet klas-1+2, etc. Geen profiel = alles tonen.
  const curriculumMatchesBucket = (c) => {
    if (!myBucket) return true;
    const id = c.id;
    if (myBucket === "po") return id.includes("groep") || id.includes("-po");
    if (myBucket === "klas-1") return id.includes("klas1");
    if (myBucket === "klas-2") return id.includes("klas1") || id.includes("klas2");
    if (myBucket === "klas-3") return id.includes("klas1") || id.includes("klas2") || id.includes("klas3");
    if (myBucket === "klas-4") return id.includes("klas3") || id.includes("klas4");
    if (myBucket === "bovenbouw") return id.includes("klas3") || id.includes("bovenbouw") || id.includes("havo") || id.includes("vwo");
    return true;
  };
  const visibleCurricula = (curriculumPrefixes
    ? Object.values(CURRICULA).filter((c) => curriculumPrefixes.some((p) => c.id.startsWith(p + "-")))
    : Object.values(CURRICULA)
  ).filter(curriculumMatchesBucket);

  // Toont de vak-grid (entry-screen) wanneer geen filter actief is.
  const showSubjectGrid = filterArr == null;

  let headerTitle = "Leren";
  let headerEmoji = "📚";
  if (filterArr && filterArr.length === 1) {
    const meta = SUBJECT_LABELS[filterArr[0]] || { title: filterArr[0], emoji: "📚" };
    headerTitle = `Leren — ${meta.title}`;
    headerEmoji = meta.emoji;
  } else if (filterArr && filterArr.length > 1) {
    const titles = filterArr.map((s) => (SUBJECT_LABELS[s] || { title: s }).title).join(" + ");
    headerTitle = `Leren — ${titles}`;
    headerEmoji = "🔬";
  }

  // Bij detail-view die intern is gekozen (selectedSubject), back-knop terug
  // naar grid. Bij filter-van-bovenaf: gebruik onBack-prop zoals voorheen.
  const headerBack = (selectedSubject && !filterSubject)
    ? () => setSelectedSubject(null)
    : (onBack || onHome);

  // Vind onafgemaakt pad voor "doorgaan"-banner
  const continuePath = (() => {
    for (const path of paths) {
      const done = progressByPath[path.id];
      if (done && done.size > 0 && done.size < path.steps.length) {
        return path;
      }
    }
    return null;
  })();

  const totalCompleted = Object.values(progressByPath).reduce((sum, s) => sum + s.size, 0);
  const totalSteps = paths.reduce((sum, p) => sum + p.steps.length, 0);

  // Vak-grid (entry-screen) — zelfde IA als Oefenen-tab. Elke vak-tegel toont
  // emoji + label + "X onderwerpen" + voortgangs-pil. Klik → setSelectedSubject
  // → re-render naar detail-view (curricula + paden alfabetisch).
  if (showSubjectGrid) {
    // Reken counts vooraf: per subject het aantal paden + voltooide stappen.
    const subjectStats = {};
    allPaths.forEach((p) => {
      const subj = p.subject || "wiskunde";
      if (!subjectStats[subj]) subjectStats[subj] = { count: 0, total: 0, done: 0 };
      subjectStats[subj].count += 1;
      subjectStats[subj].total += p.steps.length;
      subjectStats[subj].done += progressByPath[p.id]?.size || 0;
    });
    // Sorteer vakken op aantal paden (meest gevulde eerst), met wiskunde+taal
    // als eerste twee zodat de meest-gebruikte vakken bovenin staan.
    const orderedSubjects = Object.keys(subjectStats).sort((a, b) => {
      const aRank = a === "wiskunde" ? -2 : a === "taal" ? -1 : 0;
      const bRank = b === "wiskunde" ? -2 : b === "taal" ? -1 : 0;
      if (aRank !== bRank) return aRank - bRank;
      return subjectStats[b].count - subjectStats[a].count;
    });

    return (
      <div style={pageStyle()}>
        <Header onBack={onBack || onHome} onHome={onHome} title={headerTitle} emoji={headerEmoji} />

        <div style={{ padding: "16px 18px 8px" }}>
          <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.5, margin: "4px 0 14px" }}>
            Kies een vak om te leren — uitleg per stap, met korte vragen om te zien of het is blijven hangen.
          </p>

          {loaded && totalCompleted > 0 && (
            <div style={{ ...cardBase(), marginBottom: 14, padding: "10px 14px" }}>
              <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>
                Totaal voortgang
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.text }}>
                <span>{totalCompleted} van {totalSteps} stappen voltooid</span>
                <span>{Math.round((totalCompleted / totalSteps) * 100)}%</span>
              </div>
              <div style={{ height: 6, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${(totalCompleted / totalSteps) * 100}%`,
                    background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
                    transition: "width 0.4s",
                  }}
                />
              </div>
            </div>
          )}

          {loaded && continuePath && (
            <button
              onClick={() => onPickPath(continuePath.id)}
              style={{
                ...continueBtn(),
                background: PATH_THEMES[continuePath.id]?.gradient || `linear-gradient(135deg, ${C.good}, #00a040)`,
              }}
            >
              <span style={{ fontSize: 22, marginRight: 8 }}>▶</span>
              <div style={{ textAlign: "left", flex: 1 }}>
                <div style={{ fontSize: 12, opacity: 0.85 }}>Doorgaan waar je was</div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{continuePath.emoji} {continuePath.title}</div>
              </div>
              <span style={{ fontSize: 18 }}>›</span>
            </button>
          )}
        </div>

        <div style={{ padding: "8px 14px 32px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}>
            {orderedSubjects.map((subject) => {
              const meta = SUBJECT_LABELS[subject] || { title: subject, emoji: "📘" };
              const stats = subjectStats[subject];
              const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
              const hasProgress = stats.done > 0;
              return (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  style={{
                    background: C.card,
                    border: `1px solid ${hasProgress ? "rgba(0,200,83,0.40)" : C.border}`,
                    borderRadius: 14,
                    padding: "16px 14px",
                    cursor: "pointer",
                    color: C.text,
                    fontFamily: "var(--font-body)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 10,
                    textAlign: "left",
                    minHeight: 110,
                    boxShadow: hasProgress
                      ? "0 1px 2px rgba(0,200,83,0.06), 0 4px 14px rgba(0,200,83,0.10)"
                      : "0 1px 2px rgba(0,0,0,0.20), 0 4px 14px rgba(0,0,0,0.20)",
                    transition: "transform 150ms ease, border-color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = C.good;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = hasProgress ? "rgba(0,200,83,0.40)" : C.border;
                  }}
                >
                  <span style={{ fontSize: 32, lineHeight: 1 }} aria-hidden="true">{meta.emoji}</span>
                  <div style={{ width: "100%", minWidth: 0 }}>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--color-text-strong)",
                      lineHeight: 1.2,
                      marginBottom: 2,
                    }}>
                      {meta.title}
                    </div>
                    <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.3 }}>
                      {stats.count} onderwerp{stats.count === 1 ? "" : "en"}
                      {hasProgress && ` · ${pct}%`}
                    </div>
                    {hasProgress && (
                      <div style={{
                        marginTop: 6,
                        height: 3,
                        background: "#1a2744",
                        borderRadius: 999,
                        overflow: "hidden",
                      }}>
                        <div
                          style={{
                            height: "100%",
                            width: `${pct}%`,
                            background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 18, padding: "14px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 12, border: `1px dashed ${C.border}`, textAlign: "center" }}>
            <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>
              Meer onderwerpen volgen.<br />
              <span style={{ fontSize: 11 }}>Mis je iets? Geef het door via "Tip aan de maker" op de homepage.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle()}>
      <Header onBack={headerBack} onHome={onHome} title={headerTitle} emoji={headerEmoji} />

      <div style={{ padding: "16px 18px 8px" }}>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.5, margin: "4px 0 14px" }}>
          Kies een onderwerp om vanaf de basis op te bouwen — uitleg, plaatjes en mini-toetsen per stap. Je voortgang blijft bewaard.
        </p>

        {loaded && totalCompleted > 0 && (
          <div style={{ ...cardBase(), marginBottom: 14, padding: "10px 14px" }}>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>
              Totaal voortgang
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.text }}>
              <span>{totalCompleted} van {totalSteps} stappen voltooid</span>
              <span>{Math.round((totalCompleted / totalSteps) * 100)}%</span>
            </div>
            <div style={{ height: 6, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${(totalCompleted / totalSteps) * 100}%`,
                  background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
                  transition: "width 0.4s",
                }}
              />
            </div>
          </div>
        )}

        {loaded && continuePath && (
          <button
            onClick={() => onPickPath(continuePath.id)}
            style={{
              ...continueBtn(),
              background: PATH_THEMES[continuePath.id]?.gradient || `linear-gradient(135deg, ${C.good}, #00a040)`,
            }}
          >
            <span style={{ fontSize: 22, marginRight: 8 }}>▶</span>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Doorgaan waar je was</div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{continuePath.emoji} {continuePath.title}</div>
            </div>
            <span style={{ fontSize: 18 }}>›</span>
          </button>
        )}
      </div>

      {/* Vak is de primaire as. Curricula zijn een SUB-onderdeel van een vak
          (geen parallel systeem meer): per uitgeklapt vak verschijnen ze
          bovenaan als geordende-leerlijn-knoppen, daarna alle losse paden
          alfabetisch. Vermijdt de eerdere verwarring waarbij een leerling
          dezelfde paden twee keer met verschillende tellingen zag. */}
      <div style={{ padding: "0 14px 32px" }}>
        {(() => {
          const subjectKeys = Object.keys(grouped);
          // Bij 1 vak (vanuit homepage-vak-knop): geen collapse, altijd open.
          const allowCollapse = subjectKeys.length > 1;
          return subjectKeys.map((subject) => {
            const pathList = grouped[subject];
            const meta = SUBJECT_LABELS[subject] || { title: subject, emoji: "📘" };
            const subjTotal = pathList.reduce((s, p) => s + p.steps.length, 0);
            const subjDone = pathList.reduce((s, p) => s + (progressByPath[p.id]?.size || 0), 0);
            const subjPct = subjTotal ? Math.round((subjDone / subjTotal) * 100) : 0;
            const isOpen = !allowCollapse || expandedSubjects.has(subject);

            // Curricula van dit specifieke vak (geordende leerlijnen). Mappt
            // op `subject` van de curriculum-entries — Wiskunde-curricula
            // hebben subject "wiskunde", Nederlands-curricula "taal", etc.
            const subjectCurricula = visibleCurricula.filter((c) => c.subject === subject);

            // Beschikbare klas-buckets in dit vak (gesorteerd op BUCKET_ORDER)
            const availableBuckets = [...new Set(pathList.map((p) => parseLevel(p.level).bucketKey))]
              .sort((a, b) => BUCKET_ORDER.indexOf(a) - BUCKET_ORDER.indexOf(b));

            // Filter op klas (als classFilter is gezet en bestaat in dit vak),
            // anders toon alles. Als gekozen filter niet bestaat in dit vak →
            // val terug op "alles" zodat we geen lege staat hebben zonder reden.
            const activeFilter = classFilter && availableBuckets.includes(classFilter)
              ? classFilter
              : null;

            const filteredPaths = activeFilter
              ? pathList.filter((p) => parseLevel(p.level).bucketKey === activeFilter)
              : pathList;

            // Sortering: bij "alle klassen" gesorteerd op nabijheid van
            // leerling's eigen klas (zelfde klas eerst, dan op afstand).
            // Bij actieve filter: alfabetisch binnen die klas.
            const sortedPaths = activeFilter
              ? [...filteredPaths].sort((a, b) =>
                  (a.title || "").localeCompare(b.title || "", "nl", { sensitivity: "base" })
                )
              : [...filteredPaths].sort((a, b) => {
                  if (!myBucket) {
                    return (a.title || "").localeCompare(b.title || "", "nl", { sensitivity: "base" });
                  }
                  const da = bucketDistance(parseLevel(a.level).bucketKey, myBucket);
                  const db = bucketDistance(parseLevel(b.level).bucketKey, myBucket);
                  if (da !== db) return da - db;
                  return (a.title || "").localeCompare(b.title || "", "nl", { sensitivity: "base" });
                });

            return (
              <div key={subject} style={{ marginBottom: 14 }}>
                <button
                  onClick={() => allowCollapse && toggleSubject(subject)}
                  style={subjectHeaderStyle(allowCollapse, isOpen)}
                  aria-expanded={isOpen}
                  disabled={!allowCollapse}
                >
                  <span style={{ fontSize: 26 }}>{meta.emoji}</span>
                  <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.2 }}>
                      {meta.title}
                    </div>
                    <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
                      {pathList.length} onderwerp{pathList.length === 1 ? "" : "en"}
                      {subjectCurricula.length > 0 && ` · ${subjectCurricula.length} leerlijn${subjectCurricula.length === 1 ? "" : "en"}`}
                      {subjDone > 0 && ` · ${subjPct}% voltooid`}
                    </div>
                  </div>
                  {allowCollapse && (
                    <span
                      style={{
                        fontSize: 22,
                        color: C.muted,
                        display: "inline-block",
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    >
                      ›
                    </span>
                  )}
                </button>

                {isOpen && (
                  <div style={{ paddingTop: 10 }}>
                    {/* Leerlijnen voor dit vak (curricula) — geordende routes
                        bovenaan zodat leerlingen die hulp willen bij volgorde
                        niet rond hoeven te scrollen. Alleen tonen als er
                        curricula zijn én onPickCurriculum-handler is. */}
                    {onPickCurriculum && subjectCurricula.length > 0 && (
                      <div style={{ marginBottom: 14 }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "2px 4px 8px",
                          fontSize: 11,
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          color: C.muted,
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                        }}>
                          <span>🎓 Volg een complete leerlijn</span>
                        </div>
                        <div className="lp-grid">
                          {subjectCurricula.map((cur) => {
                            const allPathIds = cur.phases.flatMap((p) => p.pathIds);
                            const total = curriculumTotalSteps(cur.id);
                            const done = allPathIds.reduce(
                              (s, pid) => s + (progressByPath[pid]?.size || 0),
                              0
                            );
                            const pct = total ? Math.round((done / total) * 100) : 0;
                            const isStarted = done > 0;
                            const isComplete = done >= total && total > 0;
                            return (
                              <button
                                key={cur.id}
                                onClick={() => onPickCurriculum(cur.id)}
                                style={curriculumCard(isComplete)}
                              >
                                <div
                                  style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 12,
                                    background: isComplete
                                      ? `linear-gradient(135deg, ${C.good}, #00a040)`
                                      : `linear-gradient(135deg, ${C.warm}, #f9a825)`,
                                    color: isComplete ? "var(--color-text-strong)" : "#1a0008",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 22,
                                    flexShrink: 0,
                                    boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                                  }}
                                >
                                  {cur.emoji}
                                </div>
                                <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                                    <span style={{ fontFamily: "var(--font-display)", fontSize: 15, color: "var(--color-text-strong)", fontWeight: 700 }}>
                                      {cur.title}
                                    </span>
                                    {isComplete && <span style={{ fontSize: 13 }}>✅</span>}
                                  </div>
                                  <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.4, marginBottom: isStarted ? 4 : 0 }}>
                                    {allPathIds.length} onderwerpen · {total} stappen
                                  </div>
                                  {isStarted && (
                                    <div>
                                      <div style={{ height: 3, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
                                        <div
                                          style={{
                                            height: "100%",
                                            width: `${pct}%`,
                                            background: `linear-gradient(90deg, ${C.warm}, ${C.good})`,
                                            transition: "width 0.4s",
                                          }}
                                        />
                                      </div>
                                      <div style={{ fontSize: 10, color: C.warm, marginTop: 2, fontWeight: 700 }}>
                                        {done}/{total} · {pct}%
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <span style={{ color: C.muted, fontSize: 16 }}>›</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Alle losse onderwerpen — sortering hangt af van
                        leerling's klas (uit profiel). Pillen-bar erboven om
                        op klas te filteren. Default: leerling's eigen klas
                        als die bekend is, anders "alle". */}
                    <div style={{ marginBottom: 14 }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "2px 4px 8px",
                        fontSize: 11,
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: C.muted,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                      }}>
                        <span>🎯 {subjectCurricula.length > 0 ? "Of pak een los onderwerp" : "Onderwerpen"}</span>
                      </div>

                      {/* Klas-filter pillen — alleen tonen als er meer dan 1
                          klas-bucket bestaat in dit vak (anders zinloos). */}
                      {availableBuckets.length > 1 && (
                        <div style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 6,
                          marginBottom: 12,
                          padding: "0 4px",
                        }}>
                          <ClassFilterPill
                            label="Alle klassen"
                            active={!classFilter}
                            onClick={() => setClassFilter(null)}
                          />
                          {myBucket && availableBuckets.includes(myBucket) && (
                            <ClassFilterPill
                              label={`✦ ${parseLevel(userLevel).bucketLabel} (mijn klas)`}
                              active={classFilter === myBucket}
                              accent
                              onClick={() => setClassFilter(myBucket)}
                            />
                          )}
                          {availableBuckets
                            .filter((b) => b !== myBucket)
                            .map((b) => {
                              const sample = pathList.find((p) => parseLevel(p.level).bucketKey === b);
                              const lbl = sample ? parseLevel(sample.level).bucketLabel : b;
                              return (
                                <ClassFilterPill
                                  key={b}
                                  label={lbl}
                                  active={classFilter === b}
                                  onClick={() => setClassFilter(b)}
                                />
                              );
                            })}
                        </div>
                      )}

                      {/* Empty-state als filter actief is en pad-lijst leeg */}
                      {sortedPaths.length === 0 && (
                        <div style={{
                          padding: "16px 14px",
                          background: "rgba(255,179,0,0.08)",
                          border: `1px solid rgba(255,179,0,0.25)`,
                          borderRadius: 12,
                          marginBottom: 12,
                          fontSize: 13,
                          color: "#ffd54f",
                          textAlign: "center",
                          lineHeight: 1.5,
                        }}>
                          Voor jouw klas staat er voor dit vak nog niets.
                          <br />
                          <button
                            onClick={() => setClassFilter(null)}
                            style={{
                              marginTop: 8,
                              background: "transparent",
                              border: `1px solid rgba(255,213,79,0.5)`,
                              color: "#ffd54f",
                              padding: "5px 12px",
                              borderRadius: 999,
                              fontFamily: "var(--font-body)",
                              fontSize: 12,
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            Toon alle klassen
                          </button>
                        </div>
                      )}
                      <div className="lp-grid">
                        {sortedPaths.map((p) => {
                          const done = progressByPath[p.id]?.size || 0;
                          const total = p.steps.length;
                          const pct = total ? Math.round((done / total) * 100) : 0;
                          const isStarted = done > 0;
                          const isComplete = done >= total;
                          const theme = PATH_THEMES[p.id] || { gradient: `linear-gradient(135deg, ${C.accent}, #2c4d77)`, accent: "#90caf9" };
                          const lvl = parseLevel(p.level);
                          return (
                            <button
                              key={p.id}
                              onClick={() => onPickPath(p.id)}
                              style={pathCard(theme, isComplete)}
                              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                            >
                              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div
                                  style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 12,
                                    background: theme.gradient,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 24,
                                    flexShrink: 0,
                                    boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                                  }}
                                >
                                  {p.emoji}
                                </div>
                                <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
                                    <span style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--color-text-strong)", fontWeight: 700 }}>
                                      {p.title}
                                    </span>
                                    <span style={levelPillStyle(lvl.badge)}>{lvl.badge.text}</span>
                                    {isComplete && <span style={{ fontSize: 14 }}>✅</span>}
                                  </div>
                                  <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.4, marginBottom: isStarted ? 6 : 0 }}>
                                    {total} stappen · {p.chapters?.length || 0} hoofdstukken
                                  </div>
                                  {isStarted && (
                                    <div>
                                      <div style={{ height: 4, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
                                        <div
                                          style={{
                                            height: "100%",
                                            width: `${pct}%`,
                                            background: theme.gradient,
                                            transition: "width 0.4s",
                                          }}
                                        />
                                      </div>
                                      <div style={{ fontSize: 11, color: theme.accent, marginTop: 3, fontWeight: 700 }}>
                                        {done}/{total} · {pct}%
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <span style={{ color: C.muted, fontSize: 18 }}>›</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          });
        })()}

        <div style={{ marginTop: 18, padding: "14px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 12, border: `1px dashed ${C.border}`, textAlign: "center" }}>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>
            Meer onderwerpen volgen.<br />
            <span style={{ fontSize: 11 }}>Mis je iets? Geef het door via "Tip aan de maker" op de homepage.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Klein knop-pilletje voor klas-filter in vak-detail. Active = donkergroen
 *  fill, accent = "mijn klas"-versie met cyaan-getinte border. */
function ClassFilterPill({ label, active, accent = false, onClick }) {
  const baseBorder = active ? "#00C853" : (accent ? "rgba(0,229,255,0.45)" : C.border);
  const baseBg = active ? "rgba(0,200,83,0.20)" : "rgba(255,255,255,0.03)";
  const color = active ? "#69F0AE" : (accent ? "#80deea" : C.muted);
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: baseBg,
        border: `1px solid ${baseBorder}`,
        color,
        padding: "5px 11px",
        borderRadius: 999,
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "background 150ms ease, border-color 150ms ease",
      }}
    >
      {label}
    </button>
  );
}

function Header({ onBack, onHome, title, emoji }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 18px",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <button
        onClick={onBack || onHome}
        style={{ border: "none", background: "transparent", color: C.text, fontSize: 22, cursor: "pointer", padding: 6 }}
      >
        ←
      </button>
      <div style={{ fontSize: 22 }}>{emoji}</div>
      <div style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-text-strong)" }}>{title}</div>
      <button
        onClick={onHome}
        style={{ border: "none", background: "transparent", color: C.text, fontSize: 22, cursor: "pointer", padding: 6 }}
      >
        🏠
      </button>
    </div>
  );
}

// ─── stijlen ─────────────────────────────────────────
function pageStyle() {
  return {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #0f1729 0%, #162033 50%, #1a2744 100%)",
    color: C.text,
    fontFamily: "var(--font-body)",
  };
}

function cardBase() {
  return {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: 12,
  };
}

function continueBtn() {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "none",
    borderRadius: 14,
    padding: "14px 16px",
    color: "var(--color-text-strong)",
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    marginBottom: 14,
    boxShadow: "0 4px 16px rgba(0,200,83,0.25)",
  };
}

function pathCard(theme, isComplete) {
  return {
    background: C.card,
    border: `1px solid ${isComplete ? theme.accent : C.border}`,
    borderRadius: 14,
    padding: 14,
    cursor: "pointer",
    transition: "transform 0.2s, border-color 0.2s",
    fontFamily: "var(--font-body)",
    width: "100%",
  };
}

function subjectHeaderStyle(allowCollapse, isOpen) {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 14px",
    minHeight: 60,
    background: isOpen ? "rgba(40,55,85,0.55)" : "rgba(30,45,70,0.4)",
    border: `1px solid ${isOpen ? "#3a5273" : C.border}`,
    borderRadius: 14,
    cursor: allowCollapse ? "pointer" : "default",
    color: C.text,
    fontFamily: "var(--font-body)",
    transition: "background 0.15s, border-color 0.15s",
  };
}

function bucketChipStyle(badge) {
  return {
    background: badge.bg,
    color: badge.fg,
    fontFamily: "var(--font-display)",
    fontSize: 12,
    fontWeight: 700,
    padding: "3px 12px",
    borderRadius: 999,
    letterSpacing: "0.02em",
    flexShrink: 0,
  };
}

function levelPillStyle(badge) {
  return {
    background: badge.bg,
    color: badge.fg,
    fontFamily: "var(--font-display)",
    fontSize: 10,
    fontWeight: 700,
    padding: "2px 8px",
    borderRadius: 999,
    letterSpacing: "0.02em",
    flexShrink: 0,
  };
}

function curriculumCard(isComplete) {
  return {
    background: "rgba(40,55,85,0.7)",
    border: `2px solid ${isComplete ? C.good : C.warm}`,
    borderRadius: 14,
    padding: 12,
    cursor: "pointer",
    transition: "transform 0.2s, border-color 0.2s",
    fontFamily: "var(--font-body)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxShadow: "0 3px 12px rgba(255,213,79,0.10)",
  };
}
