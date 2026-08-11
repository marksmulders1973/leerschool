import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header.jsx";
import styles from "../../styles.js";
import Card from "../../shared/ui/Card.jsx";
import supabase from "../../supabase.js";
import { loadMasteryForPlayer, recommendNextTopic, MASTERY_LABELS } from "../mastery/mastery.js";
import { loadResume } from "../learn/KwartierPauze.jsx";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { SUBJECTS as SUBJECT_LABELS } from "../../shared/subjects.js";
import { track } from "../../utils.js";
import { AvatarSvg, AVATAR_DELEN, AVATAR_PLAATJES, loadAvatarConfig, saveAvatarConfig, saveAvatarFoto } from "./avatar.jsx";

// ─────────────────────────────────────────────────────────────────────
// Mijn Leerkwartier — persoonlijke pagina (WhatsApp-feedback 11 aug).
// Eén thuisbasis op naam: verder waar je was, waar je staat, je doel
// mét doorstroomtoets-countdown, en je abonnement. Bewust GEEN vraag-
// van-de-dag of ander los speelgoed hier (Mark 16:41: "alleen echte
// dingen waar je iets aan hebt").
//
// Eerlijkheid eerst: de vak-labels gebruiken de Zeker-weten-gedachte —
// "Beheerst" zeggen we alleen bij goud (veel vragen, hoog percentage);
// alles daaronder heet eerlijk "goed op weg" of "nog niet zeker".
// ─────────────────────────────────────────────────────────────────────

const PATHS_BY_ID = Object.fromEntries(pathManifest.map((p) => [p.id, p]));

// Doorstroomtoets 2027: afname eind januari / begin februari.
const DOORSTROOMTOETS_DATUM = new Date(2027, 1, 1); // 1 feb 2027

// Avatar: opgebouwd poppetje, door het kind zelf samen te stellen —
// zie ./avatar.jsx (huid, haar, shirt, postuur; geen foto).

// Zeker-weten-labels: eerlijker dan "beheerst" bij weinig bewijs.
const VAK_STATUS = {
  gold: { tekst: "Beheerst", kleur: "#ffd700", emoji: "🥇" },
  silver: { tekst: "Goed op weg", kleur: "#c0c0c0", emoji: "🥈" },
  bronze: { tekst: "Geoefend — nog niet zeker", kleur: "#cd7f32", emoji: "🥉" },
  unmeasured: { tekst: "Nog te weinig gedaan om iets te zeggen", kleur: "#8899aa", emoji: "🌱" },
};

function parseGroep(userLevel) {
  const m = String(userLevel || "").match(/groep\s*(\d+)/i);
  return m ? Number(m[1]) : null;
}

// ── Startbeeld per groep (Mark 11 aug: "jij weet wat iemand per groep moet
// beheersen — zet klaar wat hij of zij nog moet doen, ook zonder cijfers") ──

const HOOFDVAKKEN = ["rekenen", "taal", "spelling", "begrijpend-lezen"];

// Hoort dit pad bij deze groep? ("groep3-5" → 3 t/m 5)
function padBijGroep(level, groep) {
  const m = String(level || "").toLowerCase().match(/groep\s*(\d)(?:\s*-\s*(\d))?/);
  if (!m) return false;
  const lo = Number(m[1]), hi = Number(m[2] || m[1]);
  return groep >= lo && groep <= hi;
}

// De hoofdvak-paden die bij deze groep horen — dit ís "wat je ongeveer moet
// kunnen": de leerpaden zijn per groep en vak opgebouwd langs de leerlijnen.
function groepPaden(groep) {
  if (!groep) return [];
  // Binnen een vak: Cito-/leerlijn-kernpaden (referentieniveau of "Cito" in de
  // titel) vóór de uitstapjes — zodat "Belasting snappen" niet vóór "Breuken" komt.
  const kern = (p) => (/cito|doorstroomtoets/i.test(p.title || "") ? 0 : p.referentieNiveau ? 1 : 2);
  return pathManifest
    .filter((p) => HOOFDVAKKEN.includes(p.subject) && padBijGroep(p.level, groep))
    .sort((a, b) =>
      (HOOFDVAKKEN.indexOf(a.subject) - HOOFDVAKKEN.indexOf(b.subject))
      || (kern(a) - kern(b))
      || String(a.title).localeCompare(String(b.title), "nl"));
}

// Intake ("Charley wil je leren kennen"): per hoofdvak 💪 goed / 😅 lastig /
// 🤷 weet niet. Lokaal opgeslagen; beide beweringen worden daarna gewoon
// nagelopen door te oefenen — de meting corrigeert het zelfbeeld vanzelf.
function intakeKey(player) {
  return `lk_intake:${(player || "").trim() || "speler"}`;
}
function loadIntake(player) {
  try { return JSON.parse(localStorage.getItem(intakeKey(player)) || "{}"); } catch { return {}; }
}
function saveIntake(player, obj) {
  try { localStorage.setItem(intakeKey(player), JSON.stringify(obj)); } catch {}
}

const VAK_NAAM = {
  rekenen: { titel: "Rekenen", emoji: "🔢" },
  taal: { titel: "Taal", emoji: "✏️" },
  spelling: { titel: "Spelling", emoji: "📝" },
  "begrijpend-lezen": { titel: "Begrijpend lezen", emoji: "📖" },
};

// ── Ouder/juf-weergave — helpers ─────────────────────────────────────

const DAG_LABELS = ["ma", "di", "wo", "do", "vr", "za", "zo"];

function ymd(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Laatste 7 dagen (oud → vandaag) met oefenminuten van dit apparaat
// (lk_leertijd_<datum> in localStorage, sinds v251 een week bewaard).
function leesWeekMinuten() {
  const dagen = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    let sec = 0;
    try { sec = parseInt(localStorage.getItem(`lk_leertijd_${ymd(d)}`) || "0", 10) || 0; } catch {}
    dagen.push({ ymd: ymd(d), label: DAG_LABELS[(d.getDay() + 6) % 7], minuten: Math.round(sec / 60), toetsen: 0 });
  }
  return dagen;
}

// Thuis-tips per vak — kort en doenbaar (2 min, geen huiswerk-erbij).
const THUIS_TIPS = {
  rekenen: "Laat je kind bij het tafeldekken of boodschappen hardop rekenen — 13 koekjes over 4 mensen, wat kost 3× die appel? Twee minuten is genoeg: korte herhaling werkt beter dan lang oefenen.",
  taal: "Kies samen één lastig woord uit een gesprek of tv-programma en laat je kind het in een eigen zin gebruiken. Woorden beklijven door ze te gebruiken, niet door ze te lezen.",
  spelling: "Laat je kind één zin van een boodschappenbriefje of appje schrijven en zelf nakijken. Hardop spellen van één lastig woord per dag doet meer dan een lange oefensessie.",
  "begrijpend-lezen": "Lees samen een kort stukje (nieuwsbericht, bijsluiter, recept) en vraag: waar gaat dit vooral over? Eén vraag per tekst is genoeg.",
  natuur: "Stel bij het koken of buiten lopen één waarom-vraag: waarom smelt suiker, waarom vallen bladeren? Samen het antwoord bedenken telt als oefenen.",
  wereld: "Pak bij het journaal of een vakantieverhaal de kaart erbij: waar ligt dat? Landen en plaatsen blijven hangen als ze ergens bij horen.",
  anders: "Vraag na het oefenen niet 'wat was je score?' maar 'wat heb je geleerd?' — dat ene gesprek maakt oefenen waardevoller dan tien extra vragen.",
};

export default function MijnPagina({
  userName,
  userLevel,
  streak,
  subscription,
  onResumePath,
  onPickPath,
  onGoLeren,
  onGoCito,
  onGoVoortgang,
  onBack,
  onHome,
}) {
  const player = (userName || "").trim();
  const groep = parseGroep(userLevel);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  // Kind- of ouder/juf-weergave (WhatsApp-feedback 11 aug, punt "ook een
  // maken voor familie en pro"): zelfde pagina, andere bril.
  const [weergave, setWeergave] = useState("kind");
  const [week, setWeek] = useState(null);
  const [avatarConfig, setAvatarConfig] = useState(() => loadAvatarConfig(player));
  const [avatarBewerken, setAvatarBewerken] = useState(false);

  useEffect(() => {
    track("mijn_pagina_open", {});
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (!player) { setLoading(false); return undefined; }
    (async () => {
      const r = await loadMasteryForPlayer(player);
      if (!cancelled) { setRecords(r); setLoading(false); }
    })();
    return () => { cancelled = true; };
  }, [player]);

  // Weekbeeld voor de ouder/juf-weergave: oefenminuten van dit apparaat +
  // afgeronde toetsen uit `leaderboard` (cross-device, zelfde bron als het
  // ouder-dashboard).
  useEffect(() => {
    if (!player || weergave !== "ouder" || week) return undefined;
    let cancelled = false;
    (async () => {
      const dagen = leesWeekMinuten();
      try {
        const sinds = new Date(Date.now() - 7 * 86400000).toISOString();
        const { data } = await supabase
          .from("leaderboard")
          .select("completed_at")
          .eq("player_name", player)
          .gte("completed_at", sinds)
          .limit(300);
        (data || []).forEach((r) => {
          const dag = dagen.find((d) => d.ymd === String(r.completed_at || "").slice(0, 10));
          if (dag) dag.toetsen += 1;
        });
      } catch { /* grafiek toont dan alleen minuten */ }
      if (!cancelled) setWeek(dagen);
    })();
    return () => { cancelled = true; };
  }, [player, weergave, week]);

  const zetAvatarDeel = (deel, waarde) => {
    const nieuw = { ...avatarConfig, [deel]: waarde };
    setAvatarConfig(nieuw);
    saveAvatarConfig(player, nieuw);
  };

  // Eigen foto (Mark 11 aug: "oudere leerlingen en leraren willen gewoon hun
  // foto"): verkleinen naar 256px en ALLEEN lokaal bewaren — geen upload.
  const kiesFoto = (bestand) => {
    if (!bestand) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const N = 256;
        const cv = document.createElement("canvas");
        cv.width = N; cv.height = N;
        const s = Math.max(N / img.width, N / img.height);
        const w = img.width * s, h = img.height * s;
        cv.getContext("2d").drawImage(img, (N - w) / 2, (N - h) / 2 * 0.4, w, h);
        const dataUrl = cv.toDataURL("image/jpeg", 0.85);
        if (saveAvatarFoto(player, dataUrl)) {
          const nieuw = { ...avatarConfig, soort: "foto", fotoUrl: dataUrl };
          setAvatarConfig(nieuw);
          saveAvatarConfig(player, nieuw);
          track("avatar_foto_gekozen", {});
        }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(bestand);
  };

  const wisFoto = () => {
    saveAvatarFoto(player, null);
    const nieuw = { ...avatarConfig, soort: "zelf", fotoUrl: null };
    setAvatarConfig(nieuw);
    saveAvatarConfig(player, nieuw);
  };

  // "Verder waar je was" — exacte plek uit de kwartier-pauze-opslag.
  const resume = useMemo(() => {
    if (!player) return null;
    const r = loadResume(player);
    if (!r?.pathId) return null;
    const path = PATHS_BY_ID[r.pathId];
    return path ? { ...r, path } : null;
  }, [player]);

  // Voortgang per vak (samengevat uit mastery-records).
  const perVak = useMemo(() => {
    const agg = {};
    records.forEach((r) => {
      const subj = r.path?.subject || "anders";
      if (!agg[subj]) agg[subj] = { attempts: 0, correct: 0, paden: 0, goud: 0 };
      agg[subj].attempts += r.attempts;
      agg[subj].correct += r.correct;
      agg[subj].paden += 1;
      if (r.level === "gold") agg[subj].goud += 1;
    });
    return Object.entries(agg)
      .map(([subj, v]) => ({
        subj,
        ...v,
        pct: v.attempts ? Math.round((v.correct / v.attempts) * 100) : 0,
        // Zeker-weten per vak: goud pas als er echt bewijs is.
        level: v.attempts >= 10 && v.correct / v.attempts >= 0.9 ? "gold"
          : v.attempts >= 5 && v.correct / v.attempts >= 0.7 ? "silver"
          : v.attempts >= 5 ? "bronze" : "unmeasured",
      }))
      .sort((a, b) => b.attempts - a.attempts)
      .slice(0, 6);
  }, [records]);

  // Intake-antwoorden (💪/😅 per hoofdvak) — stuurt de klaargezette lijst.
  const [intake, setIntake] = useState(() => loadIntake(player));
  const zetIntake = (vak, waarde) => {
    const nieuw = { ...intake, [vak]: waarde };
    setIntake(nieuw);
    saveIntake(player, nieuw);
    track("mijn_intake", { vak, waarde });
  };

  // Welke hoofdvakken bestaan er voor deze groep in de app?
  const groepVakken = useMemo(() => {
    const set = new Set(groepPaden(groep).map((p) => p.subject));
    return HOOFDVAKKEN.filter((v) => set.has(v));
  }, [groep]);
  const intakeCompleet = groepVakken.length > 0 && groepVakken.every((v) => intake[v]);

  // "Dit staat voor jou klaar" — de kern van het startbeeld: ook op dag één,
  // zónder cijfers, staat er een lijst klaar op basis van de groep. Volgorde:
  // 1. lastig-vakken (intake) die nog niet gemeten zijn — daar valt het meest
  //    te winnen; 2. wat de meting zegt (herhalen/zwak); 3. "laat maar zien"-
  //    checks voor de vakken waar je zegt goed in te zijn (nalopen!);
  // 4. overige nulmetingen van jouw groep.
  const klaargezet = useMemo(() => {
    const byId = Object.fromEntries(records.map((r) => [r.pathId, r]));
    const paden = groepPaden(groep);
    const status = (p) => byId[p.id]?.level || "unmeasured";
    const ongemeten = (p) => status(p) === "unmeasured";
    const lijst = [];
    const gebruikt = new Set();
    const voeg = (p, reden) => {
      if (!p || gebruikt.has(p.id)) return;
      gebruikt.add(p.id);
      lijst.push({ pad: p, record: byId[p.id] || null, reden });
    };
    // 1. Lastige vakken eerst (max 2 per vak)
    for (const vak of groepVakken.filter((v) => intake[v] === "lastig")) {
      paden.filter((p) => p.subject === vak && ongemeten(p)).slice(0, 2)
        .forEach((p) => voeg(p, "lastig"));
    }
    // 2. Meting: herhalen / zwakste eerst
    const eerste = recommendNextTopic(records);
    if (eerste?.path) voeg(eerste.path.id ? { ...eerste.path, id: eerste.pathId } : null, eerste.reason === "due" ? "herhalen" : "zwak");
    records.filter((r) => r.level === "bronze").slice(0, 2)
      .forEach((r) => r.path && voeg({ ...r.path, id: r.pathId }, "zwak"));
    // 3. "Goed in"-vakken: één check-pad om het na te lopen
    for (const vak of groepVakken.filter((v) => intake[v] === "goed")) {
      const p = paden.find((q) => q.subject === vak && ongemeten(q));
      if (p) voeg(p, "laatzien");
    }
    // 4. Overige nulmetingen van deze groep
    paden.filter(ongemeten).forEach((p) => voeg(p, "nulmeting"));
    return lijst.slice(0, 6);
  }, [records, groep, groepVakken, intake]);

  // Doorstroomtoets-countdown (groep 7/8).
  const countdown = useMemo(() => {
    if (!groep || groep < 7) return null;
    const dagen = Math.ceil((DOORSTROOMTOETS_DATUM - new Date()) / 86400000);
    if (dagen <= 0) return null;
    return { dagen, weken: Math.ceil(dagen / 7) };
  }, [groep]);

  const goudTotaal = records.filter((r) => r.level === "gold").length;

  // Foutanalyse (ouder/juf): onderwerpen met genoeg pogingen en de laagste
  // scores — dáár gaat het mis. Eerlijk: pas tonen vanaf 3 pogingen.
  const foutanalyse = useMemo(() =>
    records
      .filter((r) => r.attempts >= 3)
      .map((r) => ({ ...r, pct: Math.round((r.correct / r.attempts) * 100) }))
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3),
  [records]);

  const zwaksteVak = foutanalyse[0]?.path?.subject || null;
  const thuisTip = THUIS_TIPS[zwaksteVak] || THUIS_TIPS.anders;

  // Abonnement-info. PAYWALL staat uit → tier "free", en dat zeggen we
  // eerlijk gekwalificeerd: "in 2026 is alles open" (geen kale gratis-claim).
  const tier = subscription?.tier || "free";
  const tierLabel = tier === "parent_pro" ? "Familie" : tier === "teacher_pro" ? "Pro" : "Gratis";
  const geldigTot = subscription?.valid_until
    ? new Date(subscription.valid_until).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })
    : null;

  const kaartTitelStijl = {
    fontFamily: "var(--font-display)",
    fontSize: 15,
    fontWeight: 700,
    color: "var(--color-text-strong)",
    marginBottom: 10,
  };
  const eyebrowStijl = {
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    color: "var(--color-text-muted, #8899aa)",
    marginBottom: 2,
  };

  return (
    <div style={styles.page}>
      <Header title="🏠 Mijn Leerkwartier" subtitle={player ? `De pagina van ${player}` : ""} onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {!player && (
          <Card padding="md" style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
            Vul eerst je naam in op de startpagina — dan bouwen we hier jouw eigen pagina op.
          </Card>
        )}

        {player && (
          <>
            {/* ── Kop: avatar + naam + merken ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <AvatarSvg config={avatarConfig} size={72} />
                <button
                  onClick={() => { setAvatarBewerken(!avatarBewerken); if (!avatarBewerken) track("avatar_bewerken_open", {}); }}
                  title="Maak je eigen poppetje"
                  aria-label="Maak je eigen poppetje"
                  aria-expanded={avatarBewerken}
                  style={{
                    position: "absolute", right: -4, bottom: -4,
                    width: 28, height: 28, borderRadius: "50%",
                    border: "2px solid var(--color-bg-base, #0f1729)",
                    background: "#ffd54f", color: "#16233F",
                    fontSize: 13, lineHeight: 1, cursor: "pointer",
                    display: "grid", placeItems: "center",
                  }}
                >✏️</button>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--color-text-strong)", lineHeight: 1.15 }}>
                  {player}
                </div>
                {userLevel && (
                  <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", marginTop: 2 }}>
                    {groep ? `Groep ${groep}` : userLevel}
                  </div>
                )}
                <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                  {streak > 0 && (
                    <span style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.4)", color: "#ff8c42", borderRadius: 999, padding: "3px 10px" }}>
                      🔥 {streak} {streak === 1 ? "dag" : "dagen"} op rij
                    </span>
                  )}
                  {goudTotaal > 0 && (
                    <span style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,213,79,0.12)", border: "1px solid rgba(255,213,79,0.4)", color: "#ffd54f", borderRadius: 999, padding: "3px 10px" }}>
                      🥇 {goudTotaal} beheerst
                    </span>
                  )}
                  <span style={{ fontSize: 12, fontWeight: 700, background: "rgba(0,200,83,0.12)", border: "1px solid rgba(0,200,83,0.4)", color: "#69f0ae", borderRadius: 999, padding: "3px 10px" }}>
                    {tierLabel}
                  </span>
                </div>
              </div>
            </Card>

            {/* ── Avatar-maker: zelf je poppetje samenstellen ── */}
            {avatarBewerken && (
              <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(255,213,79,0.4)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ ...kaartTitelStijl, marginBottom: 0 }}>✏️ Maak je eigen poppetje</div>
                  <button
                    onClick={() => setAvatarBewerken(false)}
                    style={{
                      border: "none", cursor: "pointer", borderRadius: 8, padding: "7px 14px",
                      background: "rgba(0,200,83,0.2)", color: "#69f0ae", fontWeight: 800, fontSize: 13,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    ✓ Klaar
                  </button>
                </div>
                {/* Soort-keuze (Mark 11 aug): exact plaatje, zelf-maker of
                    eigen foto (ouderen/leerkrachten). */}
                <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                  {[
                    { id: "zelf", label: "🎨 Zelf maken" },
                    { id: "plaatje", label: "🖼️ Plaatje" },
                    { id: "foto", label: "📷 Eigen foto" },
                  ].map((s) => {
                    const actief = (avatarConfig.soort || "zelf") === s.id;
                    return (
                      <button
                        key={s.id}
                        aria-pressed={actief}
                        onClick={() => { if (s.id !== "foto" || avatarConfig.fotoUrl) zetAvatarDeel("soort", s.id); else zetAvatarDeel("soort", "foto"); }}
                        style={{
                          padding: "8px 14px", borderRadius: 999, cursor: "pointer",
                          border: actief ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.18)",
                          background: actief ? "rgba(0,200,83,0.15)" : "rgba(255,255,255,0.05)",
                          color: actief ? "#69f0ae" : "var(--color-text)",
                          fontWeight: 700, fontSize: 13, fontFamily: "var(--font-display)",
                        }}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>

                {/* Exacte plaatjes */}
                {(avatarConfig.soort || "zelf") === "plaatje" && (
                  <div style={{ marginBottom: 4 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 6 }}>Kies een plaatje</div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {AVATAR_PLAATJES.map((p) => {
                        const actief = avatarConfig.plaatje === p.id;
                        return (
                          <button
                            key={p.id}
                            onClick={() => zetAvatarDeel("plaatje", p.id)}
                            aria-pressed={actief}
                            title={p.label}
                            style={{
                              padding: 3, borderRadius: 14, cursor: "pointer", lineHeight: 0,
                              border: actief ? "3px solid #69f0ae" : "2px solid rgba(255,255,255,0.2)",
                              background: "rgba(255,255,255,0.04)",
                            }}
                          >
                            <img src={p.src} alt={p.label} style={{ width: 72, height: 90, objectFit: "cover", objectPosition: "top", borderRadius: 11, display: "block" }} />
                          </button>
                        );
                      })}
                    </div>
                    <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", marginTop: 8, lineHeight: 1.45 }}>
                      Er komen steeds meer plaatjes bij — wil je zelf kleuren kiezen, gebruik dan 🎨 Zelf maken.
                    </div>
                  </div>
                )}

                {/* Eigen foto — blijft op dit apparaat */}
                {(avatarConfig.soort || "zelf") === "foto" && (
                  <div style={{ marginBottom: 4 }}>
                    {avatarConfig.fotoUrl ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <img src={avatarConfig.fotoUrl} alt="Jouw foto" style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", display: "block" }} />
                        <div style={{ flex: 1 }}>
                          <label style={{ display: "inline-block", padding: "8px 14px", borderRadius: 9, background: "rgba(0,200,83,0.15)", color: "#69f0ae", fontWeight: 700, fontSize: 12.5, cursor: "pointer", fontFamily: "var(--font-display)", marginRight: 8 }}>
                            Andere foto
                            <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => kiesFoto(e.target.files?.[0])} />
                          </label>
                          <button onClick={wisFoto} style={{ padding: "8px 14px", borderRadius: 9, border: "1px solid rgba(255,82,82,0.4)", background: "rgba(255,82,82,0.1)", color: "#ff8a80", fontWeight: 700, fontSize: 12.5, cursor: "pointer", fontFamily: "var(--font-display)" }}>
                            Foto weghalen
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label style={{ display: "inline-block", padding: "10px 18px", borderRadius: 10, background: "rgba(0,200,83,0.18)", color: "#69f0ae", fontWeight: 800, fontSize: 13.5, cursor: "pointer", fontFamily: "var(--font-display)" }}>
                        📷 Kies een foto…
                        <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => kiesFoto(e.target.files?.[0])} />
                      </label>
                    )}
                    <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", marginTop: 8, lineHeight: 1.5 }}>
                      🔒 Je foto blijft <strong style={{ color: "var(--color-text)" }}>alleen op dit apparaat</strong> — hij wordt nergens geüpload en andere leerlingen zien hem nooit. Vooral bedoeld voor oudere leerlingen, ouders en leerkrachten.
                    </div>
                  </div>
                )}

                {(avatarConfig.soort || "zelf") === "zelf" && (<>
                {/* Stap 1: kies een basis-personage (Mark 21:04: "laat er 1
                    kiezen als basis, dan de kleur nog persoonlijker maken") */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 6 }}>Kies je poppetje</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {AVATAR_DELEN.BASES.map((b) => {
                      const actief = (avatarConfig.basis || "lang") === b.id;
                      return (
                        <button
                          key={b.id}
                          onClick={() => zetAvatarDeel("basis", b.id)}
                          aria-pressed={actief}
                          title={b.label}
                          style={{
                            padding: 3, borderRadius: 12, cursor: "pointer", lineHeight: 0,
                            border: actief ? "3px solid #69f0ae" : "2px solid rgba(255,255,255,0.2)",
                            background: actief ? "rgba(0,200,83,0.12)" : "rgba(255,255,255,0.04)",
                          }}
                        >
                          <AvatarSvg config={{ ...avatarConfig, basis: b.id }} size={46} rond={false} />
                        </button>
                      );
                    })}
                  </div>
                </div>
                {[
                  { deel: "huid", label: "Huidskleur", opties: AVATAR_DELEN.HUID },
                  { deel: "haar", label: "Haarkleur", opties: AVATAR_DELEN.HAAR },
                  { deel: "shirt", label: "Shirt", opties: AVATAR_DELEN.SHIRT },
                ].map((rij) => (
                  <div key={rij.deel} style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 6 }}>{rij.label}</div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {rij.opties.map((kleur) => {
                        const actief = avatarConfig[rij.deel] === kleur;
                        return (
                          <button
                            key={kleur}
                            onClick={() => zetAvatarDeel(rij.deel, kleur)}
                            aria-label={`${rij.label} kiezen`}
                            aria-pressed={actief}
                            style={{
                              width: 36, height: 36, borderRadius: "50%", cursor: "pointer",
                              background: kleur,
                              border: actief ? "3px solid #69f0ae" : "2px solid rgba(255,255,255,0.25)",
                              boxShadow: actief ? "0 0 0 2px rgba(0,200,83,0.3)" : "none",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 6 }}>Postuur</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {AVATAR_DELEN.POSTUUR.map((p) => {
                      const actief = (avatarConfig.postuur || "gewoon") === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => zetAvatarDeel("postuur", p.id)}
                          aria-pressed={actief}
                          style={{
                            flex: 1, padding: "9px 0", borderRadius: 10, cursor: "pointer",
                            border: actief ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.18)",
                            background: actief ? "rgba(0,200,83,0.15)" : "rgba(255,255,255,0.05)",
                            color: actief ? "#69f0ae" : "var(--color-text)",
                            fontWeight: 700, fontSize: 13, fontFamily: "var(--font-display)",
                          }}
                        >
                          {p.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                </>)}
              </Card>
            )}

            {/* ── Weergave-schakelaar: kind ↔ ouder/juf ── */}
            <div role="group" aria-label="Weergave kiezen" style={{
              display: "inline-flex", background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999,
              padding: 4, marginBottom: "var(--space-4)",
            }}>
              {[
                { key: "kind", label: `Wat ${player} ziet` },
                { key: "ouder", label: "Wat je ouder of de juf ziet" },
              ].map((t) => {
                const actief = weergave === t.key;
                return (
                  <button
                    key={t.key}
                    aria-pressed={actief}
                    onClick={() => { setWeergave(t.key); if (t.key === "ouder") track("mijn_pagina_ouderweergave", {}); }}
                    style={{
                      border: "none", cursor: "pointer", borderRadius: 999,
                      padding: "8px 16px", fontSize: 13, fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      background: actief ? "rgba(0,200,83,0.25)" : "transparent",
                      color: actief ? "#69f0ae" : "var(--color-text-muted, #8899aa)",
                      transition: "background 0.15s",
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {weergave === "kind" && (<>
            {/* ── Verder waar je was ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)", background: "linear-gradient(120deg, rgba(0,200,83,0.14), rgba(30,136,229,0.10))", border: "1px solid rgba(0,200,83,0.35)" }}>
              <div style={eyebrowStijl}>Verder waar je was</div>
              {resume ? (
                <>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-strong)", margin: "4px 0 10px" }}>
                    {resume.path.emoji ? `${resume.path.emoji} ` : ""}{resume.path.title}
                  </div>
                  <button
                    onClick={() => onResumePath && onResumePath(resume.pathId, resume.stepIdx)}
                    style={{
                      padding: "12px 20px", borderRadius: 10, border: "none", cursor: "pointer",
                      background: "linear-gradient(135deg, #00c853, #69f0ae)", color: "#003a15",
                      fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, width: "100%",
                    }}
                  >
                    ▶ Ga verder waar je was
                  </button>
                </>
              ) : (
                <>
                  <div style={{ fontSize: 13.5, color: "var(--color-text)", margin: "4px 0 10px", lineHeight: 1.5 }}>
                    Je hebt nog niets openstaan. Kies een onderwerp — als je stopt, onthouden we precies waar je was.
                  </div>
                  <button
                    onClick={onGoLeren}
                    style={{
                      padding: "12px 20px", borderRadius: 10, border: "none", cursor: "pointer",
                      background: "linear-gradient(135deg, #00c853, #69f0ae)", color: "#003a15",
                      fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, width: "100%",
                    }}
                  >
                    📚 Kies een onderwerp
                  </button>
                </>
              )}
            </Card>

            {/* ── Jouw doel + countdown ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Jouw doel</div>
              {countdown ? (
                <>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "var(--color-text-strong)", margin: "4px 0 4px", fontFamily: "var(--font-display)" }}>
                    Nog {countdown.weken} {countdown.weken === 1 ? "week" : "weken"} tot de doorstroomtoets
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", marginBottom: 10, lineHeight: 1.5 }}>
                    Dát is je doel: laten zien wat je kunt op de toets, begin februari 2027. Het kwartier per dag is hoe je er komt — begin bij het onderwerp waar het meest te winnen valt.
                  </div>
                  <button
                    onClick={onGoCito}
                    style={{
                      padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,213,79,0.5)",
                      background: "rgba(255,213,79,0.12)", color: "#ffd54f", cursor: "pointer",
                      fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, width: "100%",
                    }}
                  >
                    Oefen in doorstroomtoets-stijl →
                  </button>
                </>
              ) : (
                <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.55, margin: "4px 0 0" }}>
                  {/* Mark 11 aug 20:40: het kwartier is niet het doel maar het
                      middel — het doel is klaar zijn voor de volgende stap. */}
                  <strong>{groep ? `Klaar zijn voor groep ${Math.min(groep + 1, 8)}` : "Overgaan naar het volgende jaar"}</strong> — dát is je doel.
                  Een kwartier per dag is hoe je er komt. {streak > 0
                    ? `Je zit nu op ${streak} ${streak === 1 ? "dag" : "dagen"} op rij. Knap!`
                    : "Begin vandaag, dan start je reeks."}
                </div>
              )}
            </Card>

            {/* ── Waar je staat ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Waar je staat</div>
              <div style={kaartTitelStijl}>Je vakken</div>
              {loading && <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>Laden…</div>}
              {!loading && perVak.length === 0 && groepVakken.length > 0 && (
                <>
                  {/* Nulmeting-startbeeld: ook zonder één gemaakte vraag staan
                      de hoofdvakken van jouw groep hier klaar (Mark 11 aug). */}
                  {groepVakken.map((vak) => {
                    const meta = VAK_NAAM[vak] || { titel: vak, emoji: "📘" };
                    return (
                      <div key={vak} style={{ marginBottom: 12 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, gap: 8 }}>
                          <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-text-strong)" }}>
                            {meta.emoji} {meta.titel}
                          </span>
                          <span style={{ fontSize: 11.5, color: "#8899aa", fontWeight: 700 }}>📏 Nulmeting — nog niets gemeten</span>
                        </div>
                        <div style={{ height: 10, borderRadius: 99, background: "rgba(255,255,255,0.08)" }} />
                      </div>
                    );
                  })}
                  <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
                    Start hieronder bij "Dit staat voor jou klaar" — na elke oefening vullen deze balken zich met jouw échte meting.
                  </div>
                </>
              )}
              {!loading && perVak.length === 0 && groepVakken.length === 0 && (
                <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.5 }}>
                  Nog geen metingen. Doe een paar vragen bij een onderwerp — daarna zie je hier eerlijk waar je staat.
                </div>
              )}
              {!loading && perVak.map((v) => {
                const meta = SUBJECT_LABELS[v.subj] || { title: v.subj, emoji: "📘" };
                const st = VAK_STATUS[v.level];
                return (
                  <div key={v.subj} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, gap: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-text-strong)" }}>
                        {meta.emoji} {meta.title}
                      </span>
                      <span style={{ fontSize: 11.5, color: st.kleur, fontWeight: 700, textAlign: "right" }}>
                        {st.emoji} {st.tekst}
                      </span>
                    </div>
                    <div style={{ height: 10, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                      <div style={{ width: `${v.pct}%`, height: "100%", borderRadius: 99, background: v.pct >= 70 ? "#00c853" : v.pct >= 50 ? "#ffd54f" : "#ff8c42", transition: "width 0.4s" }} />
                    </div>
                    <div style={{ fontSize: 11, color: "var(--color-text-muted, #8899aa)", marginTop: 2 }}>
                      {v.pct}% goed · {v.attempts} {v.attempts === 1 ? "vraag" : "vragen"} gedaan
                    </div>
                  </div>
                );
              })}
              {!loading && records.length > 0 && (
                <button
                  onClick={onGoVoortgang}
                  style={{
                    marginTop: 4, padding: "9px 16px", borderRadius: 10, width: "100%",
                    border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)",
                    color: "var(--color-text)", cursor: "pointer", fontSize: 13, fontWeight: 700,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Alle onderwerpen bekijken →
                </button>
              )}
            </Card>

            {/* ── Charley's kennismaking (intake) ── */}
            {groepVakken.length > 0 && !intakeCompleet && (
              <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 22 }} aria-hidden="true">🐶</span>
                  <div style={{ ...kaartTitelStijl, marginBottom: 0 }}>Charley wil je leren kennen</div>
                </div>
                <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", marginBottom: 10, lineHeight: 1.5 }}>
                  Waar ben je goed in, en wat vind je lastig? Dan weet ik wat ik voor je klaarzet. (We kijken daarna samen of het klopt!)
                </div>
                {groepVakken.map((vak) => {
                  const meta = VAK_NAAM[vak] || { titel: vak, emoji: "📘" };
                  return (
                    <div key={vak} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, fontSize: 13.5, color: "var(--color-text-strong)", minWidth: 150 }}>
                        {meta.emoji} {meta.titel}
                      </span>
                      <div style={{ display: "flex", gap: 6 }}>
                        {[
                          { id: "goed", label: "💪 Goed in" },
                          { id: "lastig", label: "😅 Lastig" },
                          { id: "weetniet", label: "🤷 Weet niet" },
                        ].map((o) => {
                          const actief = intake[vak] === o.id;
                          return (
                            <button
                              key={o.id}
                              onClick={() => zetIntake(vak, o.id)}
                              aria-pressed={actief}
                              style={{
                                padding: "6px 11px", borderRadius: 999, cursor: "pointer", fontSize: 12, fontWeight: 700,
                                border: actief ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.18)",
                                background: actief ? "rgba(0,200,83,0.15)" : "rgba(255,255,255,0.05)",
                                color: actief ? "#69f0ae" : "var(--color-text)",
                                fontFamily: "var(--font-display)",
                              }}
                            >
                              {o.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </Card>
            )}

            {/* ── Dit staat voor jou klaar ── */}
            {klaargezet.length > 0 && (
              <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
                <div style={eyebrowStijl}>{groep ? `Groep ${groep}` : "Voor jou"}</div>
                <div style={kaartTitelStijl}>Dit staat voor jou klaar</div>
                {klaargezet.map(({ pad, record, reden }) => {
                  const st = record ? MASTERY_LABELS[record.level] : null;
                  const redenTekst = {
                    lastig: "😅 Jij zei: lastig — hier oefenen we extra.",
                    herhalen: "🔁 Tijd om te herhalen — zo blijft het hangen.",
                    zwak: "🌱 Hier valt het meest te winnen.",
                    laatzien: "💪 Jij zei: goed in — laat het even zien!",
                    nulmeting: "📏 Nulmeting — nog niet gemeten, hoort bij jouw groep.",
                  }[reden];
                  return (
                    <div key={pad.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px dashed rgba(255,255,255,0.1)" }}>
                      <span style={{ fontSize: 20, flexShrink: 0 }} aria-hidden="true">{pad.emoji || "📘"}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 13.5, color: "var(--color-text-strong)" }}>
                          {pad.title}
                          {st && record.attempts >= 5 && (
                            <span style={{ marginLeft: 6, fontSize: 11, color: st.color, fontWeight: 700 }}>{st.emoji} {st.label}</span>
                          )}
                        </div>
                        <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)" }}>{redenTekst}</div>
                      </div>
                      <button
                        onClick={() => onPickPath && onPickPath(pad.id)}
                        style={{
                          flexShrink: 0, padding: "8px 14px", borderRadius: 9, border: "none", cursor: "pointer",
                          background: "rgba(0,200,83,0.18)", color: "#69f0ae", fontWeight: 800, fontSize: 12.5,
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        Start
                      </button>
                    </div>
                  );
                })}
                {intakeCompleet && (
                  <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", marginTop: 8 }}>
                    Lijst klopt niet meer? Pas je antwoorden aan:{" "}
                    <button onClick={() => { const leeg = {}; setIntake(leeg); saveIntake(player, leeg); }} style={{ background: "none", border: "none", color: "#5db3ff", cursor: "pointer", fontSize: 11.5, padding: 0, textDecoration: "underline" }}>
                      opnieuw kiezen
                    </button>
                  </div>
                )}
              </Card>
            )}

            {/* ── Abonnement & toegang ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Jouw account</div>
              <div style={kaartTitelStijl}>Abonnement &amp; toegang</div>
              <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.6 }}>
                <div style={{ marginBottom: 6 }}>
                  <strong style={{ color: "#69f0ae" }}>{tierLabel}</strong>
                  {tier === "free" && <> — in 2026 is alles vrij te gebruiken.</>}
                  {geldigTot && <> — geldig tot {geldigTot}.</>}
                </div>
                <div style={{ marginBottom: 6 }}>
                  👨‍👩‍👧 Een ouder of verzorger kan met een <strong>koppelcode</strong> meekijken met je voortgang — vraag het thuis, of kijk op het thuis-overzicht.
                </div>
              </div>
              <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
                🔒 <strong style={{ color: "var(--color-text)" }}>Wat is hier zichtbaar:</strong> alleen je voornaam, je groep en je poppetje. Kies je een eigen foto, dan blijft die alleen op dit apparaat — geen achternaam, en andere leerlingen zien deze pagina nooit.
              </div>
            </Card>
            </>)}

            {weergave === "ouder" && (<>
            {/* ── Ouder/juf: afgelopen week ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Oefentijd</div>
              <div style={kaartTitelStijl}>Afgelopen week</div>
              {!week && <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>Laden…</div>}
              {week && (() => {
                const maxMin = Math.max(...week.map((d) => d.minuten), 1);
                const heeftMinuten = week.some((d) => d.minuten > 0);
                const heeftToetsen = week.some((d) => d.toetsen > 0);
                const maxToets = Math.max(...week.map((d) => d.toetsen), 1);
                return (
                  <>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 96, margin: "6px 0 8px" }}>
                      {week.map((d) => {
                        const waarde = heeftMinuten ? d.minuten : d.toetsen;
                        const max = heeftMinuten ? maxMin : maxToets;
                        const h = waarde > 0 ? Math.max(8, Math.round((waarde / max) * 88)) : 3;
                        const isDoel = heeftMinuten && d.minuten >= 15;
                        return (
                          <div key={d.ymd} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%", justifyContent: "flex-end" }}>
                            <div
                              title={heeftMinuten ? `${d.minuten} min` : `${d.toetsen} toets${d.toetsen === 1 ? "" : "en"}`}
                              style={{
                                width: "100%", height: h, borderRadius: "6px 6px 3px 3px",
                                background: waarde === 0 ? "rgba(255,255,255,0.10)" : isDoel ? "#00c853" : "#5db3ff",
                              }}
                            />
                            <span style={{ fontSize: 11, color: "var(--color-text-muted, #8899aa)" }}>{d.label}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
                      {heeftMinuten
                        ? <>Oefenminuten per dag op dit apparaat — <span style={{ color: "#00c853", fontWeight: 700 }}>groen</span> = kwartier gehaald. {heeftToetsen && "Afgeronde toetsen tellen ook mee in het beeld hieronder."}</>
                        : heeftToetsen
                          ? "Afgeronde toetsen per dag (minuten-meting start vanaf nu, per apparaat)."
                          : "Nog geen oefening deze week gemeten. Vanaf nu houden we de minuten per dag bij."}
                    </div>
                  </>
                );
              })()}
            </Card>

            {/* ── Ouder/juf: waar het misgaat ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Foutanalyse</div>
              <div style={kaartTitelStijl}>Waar het misgaat</div>
              {foutanalyse.length === 0 && (
                <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.5 }}>
                  Nog te weinig gemaakt om iets zinnigs te zeggen — vanaf 3 vragen per onderwerp verschijnt hier eerlijk waar het misgaat.
                </div>
              )}
              {foutanalyse.map((r) => (
                <div key={r.pathId} style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-text-strong)" }}>
                      {r.path?.emoji || "📘"} {r.path?.title}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: r.pct < 50 ? "#ff5252" : r.pct < 70 ? "#ffc107" : "#00c853", flexShrink: 0 }}>
                      {r.pct}% goed
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginTop: 3 }}>
                    <span style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)" }}>
                      {r.attempts} {r.attempts === 1 ? "vraag" : "vragen"} gedaan
                    </span>
                    <button
                      onClick={() => onPickPath && onPickPath(r.pathId)}
                      style={{
                        padding: "6px 12px", borderRadius: 8, border: "none", cursor: "pointer",
                        background: "rgba(0,200,83,0.15)", color: "#69f0ae", fontWeight: 800, fontSize: 12,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      Oefen dit samen
                    </button>
                  </div>
                </div>
              ))}
            </Card>

            {/* ── Ouder/juf: thuis-tip ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)", background: "rgba(255,213,79,0.07)", border: "1px solid rgba(255,213,79,0.3)" }}>
              <div style={{ ...kaartTitelStijl, color: "#ffd54f", marginBottom: 6 }}>💡 Wat je thuis kunt doen</div>
              <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.6 }}>{thuisTip}</div>
            </Card>

            {/* ── Ouder/juf: zelf volgen ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Zelf volgen</div>
              <div style={kaartTitelStijl}>Meekijken op je eigen telefoon</div>
              <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.6 }}>
                <div style={{ marginBottom: 6 }}>
                  👨‍👩‍👧 Maak op je eigen telefoon een account als <strong>ouder of verzorger</strong> en koppel {player} met een <strong>koppelcode</strong> — dan zie je dit overzicht altijd, plus elke maandag een <strong>weekrapport per e-mail</strong>.
                </div>
                <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)" }}>
                  🧑‍🏫 Leerkracht? Via het leerkracht-overzicht zet je oefenwerk klaar met een deelcode — leerlingen loggen gewoon als zichzelf in.
                </div>
              </div>
              <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
                🔒 <strong style={{ color: "var(--color-text)" }}>Wat er zichtbaar is:</strong> voornaam, groep en het poppetje (een eigen foto blijft alleen op het apparaat zelf — wij slaan geen foto's op). Geen achternaam, niets zichtbaar voor andere leerlingen. Meting is een indicatie op basis van gemaakte vragen — geen toetsuitslag.
              </div>
            </Card>
            </>)}
          </>
        )}
      </div>
    </div>
  );
}
