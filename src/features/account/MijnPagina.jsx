import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../../components/Header.jsx";
import styles from "../../styles.js";
import Card from "../../shared/ui/Card.jsx";
import supabase from "../../supabase.js";
import { loadMasteryForPlayer, recommendNextTopic, MASTERY_LABELS } from "../mastery/mastery.js";
import { loadResume } from "../learn/KwartierPauze.jsx";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { SUBJECTS as SUBJECT_LABELS } from "../../shared/subjects.js";
import { track } from "../../utils.js";
import { AvatarSvg, loadAvatarConfig, saveAvatarConfig, saveAvatarFoto, saveAvatarKiezerBeeld } from "./avatar.jsx";
import "./avatarStorageShim.js";
import AvatarKiezer from "./AvatarKiezer.jsx";
import DiplomaKast from "../../shared/ui/DiplomaKast.jsx";
import { VAK_INFO, vakkenVoorGroep, vakNotitie, VAK_INFO_KLAS, vakkenVoorKlas, klasNotitie } from "./vakkenPerGroep.js";
import { leesLijstje, toggleLijstje, LIJSTJE_EVENT } from "../../shared/mijnLijstje.js";
import { THEMAS, themaVan, kiesThema, goudVerdiend, THEMA_EVENT } from "../../shared/mijnThema.js";

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

// Niveau uit het profiel: basisschool ("groep7") óf middelbare school
// ("klas1", "klas3", …). Mark 12 aug: "en voor de studenten" — de kaart
// werkt nu voor allebei.
function parseNiveau(userLevel) {
  const s = String(userLevel || "");
  // "groep12" is het kleuter-niveau "Groep 1-2" (constants.js) — niet groep
  // twaalf. Mark zag 12 aug "Groep 12" op de kaart staan: deze regex at beide
  // cijfers op. Kleuters rekenen we als groep 2 met een eigen label.
  if (/groep\s*12\b/i.test(s)) return { soort: "groep", nr: 2, label: "Groep 1-2" };
  let m = s.match(/groep\s*(\d)/i);
  if (m) return { soort: "groep", nr: Number(m[1]) };
  m = s.match(/klas\s*(\d+)/i);
  if (m) return { soort: "klas", nr: Number(m[1]) };
  return null;
}

// ── Startbeeld per groep (Mark 11 aug: "jij weet wat iemand per groep moet
// beheersen — zet klaar wat hij of zij nog moet doen, ook zonder cijfers") ──

// Alle curriculum-vakken (Mark 12 aug: "Je vakken" toonde er maar 2 voor
// groep 4) — de volledige kaart per groep leeft in vakkenPerGroep.js.
const CURRICULUM_VAKKEN = Object.keys(VAK_INFO);

// Hoort dit pad bij deze groep? ("groep3-5" → 3 t/m 5)
function padBijGroep(level, groep) {
  const m = String(level || "").toLowerCase().match(/groep\s*(\d)(?:\s*-\s*(\d))?/);
  if (!m) return false;
  const lo = Number(m[1]), hi = Number(m[2] || m[1]);
  return groep >= lo && groep <= hi;
}

// Hoort dit pad bij deze klas? VO-levels zijn bont: "klas1-2", "klas2-3-vmbo-
// vwo", "havo4-5-vwo", "havo-vwo-4-5", "vmbo-gt-4", "vwo" — allemaal vangen.
function padBijKlas(level, klas) {
  const l = String(level || "").toLowerCase();
  const m = l.match(/klas\s*(\d)(?:\s*-\s*(\d))?/);
  if (m) {
    const lo = Number(m[1]), hi = Number(m[2] || m[1]);
    if (klas >= lo && klas <= hi) return true;
  }
  if (/havo\s*-?\s*vwo\s*-?\s*4\s*-\s*5|havo\s*4\s*-\s*5/.test(l)) return klas >= 4 && klas <= 6;
  if (/vmbo-gt-4/.test(l)) return klas === 3 || klas === 4;
  if (l === "vwo") return klas >= 4 && klas <= 6;
  return false;
}

// De hoofdvak-paden die bij dit niveau horen — dit ís "wat je ongeveer moet
// kunnen": de leerpaden zijn per groep/klas en vak opgebouwd langs de leerlijnen.
function niveauPaden(niveau) {
  if (!niveau) return [];
  const vakken = niveau.soort === "klas" ? Object.keys(VAK_INFO_KLAS) : CURRICULUM_VAKKEN;
  const past = (p) => (niveau.soort === "klas" ? padBijKlas(p.level, niveau.nr) : padBijGroep(p.level, niveau.nr));
  // Binnen een vak: Cito-/leerlijn-kernpaden (referentieniveau of "Cito" in de
  // titel) vóór de uitstapjes — zodat "Belasting snappen" niet vóór "Breuken" komt.
  const kern = (p) => (/cito|doorstroomtoets/i.test(p.title || "") ? 0 : p.referentieNiveau ? 1 : 2);
  return pathManifest
    .filter((p) => vakken.includes(p.subject) && past(p))
    .sort((a, b) =>
      (vakken.indexOf(a.subject) - vakken.indexOf(b.subject))
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

// Labels leven centraal in vakkenPerGroep.js (VAK_INFO / VAK_INFO_KLAS);
// per-niveau opzoeken gebeurt via vakMeta() in de component.

// Oefenminuten van vandaag (zelfde bron als de kwartier-teller in App.jsx).
function minutenVandaag() {
  try {
    const sec = parseInt(localStorage.getItem(`lk_leertijd_${ymd(new Date())}`) || "0", 10) || 0;
    return Math.round(sec / 60);
  } catch { return 0; }
}

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
  onVak,
  onGoLeren,
  onGoCito,
  onGoVoortgang,
  onOuderDashboard,
  userRole,
  authUser,
  onLeerkrachtHome,
  onLeerkrachtActie,
  onWisselProfiel,
  onBack,
  onHome,
}) {
  const player = (userName || "").trim();
  const niveau = useMemo(() => parseNiveau(userLevel), [userLevel]);
  const groep = niveau?.soort === "groep" ? niveau.nr : null;
  // "groep 4" of "klas 2" — voor alle zichtbare teksten op de kaart.
  const niveauLabel = niveau ? `${niveau.soort} ${niveau.nr}` : null;
  const vakMeta = (vak) => (niveau?.soort === "klas" ? VAK_INFO_KLAS[vak] : VAK_INFO[vak]) || VAK_INFO[vak] || { titel: vak, emoji: "📘" };
  const notitieVoor = (vak) => (niveau ? (niveau.soort === "klas" ? klasNotitie(niveau.nr, vak) : vakNotitie(niveau.nr, vak)) : "");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  // ⭐ Mijn lijstje (bewaar-voor-later, Mark 13 aug): leeft in localStorage;
  // het ster-event houdt dit blok live in sync met sterretjes elders.
  const [lijstje, setLijstje] = useState(() => leesLijstje(player));
  useEffect(() => {
    const sync = () => setLijstje(leesLijstje(player));
    sync();
    window.addEventListener(LIJSTJE_EVENT, sync);
    return () => window.removeEventListener(LIJSTJE_EVENT, sync);
  }, [player]);
  // 🎨 Eigen achtergrond (Mark 13 aug): thema per speler + goud-ontgrendeling.
  const [themaTeller, setThemaTeller] = useState(0);
  useEffect(() => {
    const sync = () => setThemaTeller((n) => n + 1);
    window.addEventListener(THEMA_EVENT, sync);
    return () => window.removeEventListener(THEMA_EVENT, sync);
  }, []);
  const thema = useMemo(() => themaVan(player), [player, themaTeller]);
  const goudOpen = useMemo(() => goudVerdiend(player), [player, themaTeller]);
  // Kind- of ouder/juf-weergave (WhatsApp-feedback 11 aug, punt "ook een
  // maken voor familie en pro"): zelfde pagina, andere bril.
  const [weergave, setWeergave] = useState("kind");
  const [week, setWeek] = useState(null);
  // Gezins-koppeling (Mark 12 aug, "meerdere kinderen in 1 gezin"): is de
  // kijker een ingelogde ouder met gekoppelde kinderen, toon die dan als
  // chips in de ouder-weergave — één tik door naar het thuis-overzicht.
  const [gezinsKinderen, setGezinsKinderen] = useState([]);
  // Profiel-wissel (Mark 12 aug): andere namen die dit apparaat gebruikten.
  const [wisselOpen, setWisselOpen] = useState(false);
  const andereNamen = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("lk_namen") || "[]")
        .filter((n) => n && n !== player)
        .slice(0, 6)
        .map((n) => {
          // Rol tonen in de chip (Mark 12 aug: "is daar ook plek voor de
          // leraar/school?") — juf/student/kind herkenbaar in de lijst.
          let rol = "";
          try { rol = (JSON.parse(localStorage.getItem(`lk_profiel:${n}`) || "{}").role) || ""; } catch {}
          return { naam: n, emoji: rol === "teacher" ? "🧑‍🏫" : rol === "student" ? "🎓" : "👦" };
        });
    } catch { return []; }
  }, [player]);
  useEffect(() => {
    if (!authUser?.id) { setGezinsKinderen([]); return undefined; }
    let weg = false;
    supabase.from("parent_child_links")
      .select("id, child_name, verified")
      .eq("parent_user_id", authUser.id)
      .order("created_at", { ascending: true })
      .then(({ data }) => { if (!weg) setGezinsKinderen(data || []); });
    return () => { weg = true; };
  }, [authUser?.id]);
  const openThuisOverzicht = (kindNaam) => {
    try { if (kindNaam) localStorage.setItem("lk_ouder_kind", kindNaam); } catch {}
    track("mijn_naar_ouderdashboard", { via: kindNaam ? "gezinschip" : "knop" });
    onOuderDashboard?.();
  };
  // "Wat moet ik kennen in groep X?" — uitklap in het doel-blok (Mark 21:00).
  const [doelOpen, setDoelOpen] = useState(false);
  const [avatarConfig, setAvatarConfig] = useState(() => loadAvatarConfig(player));
  const [avatarBewerken, setAvatarBewerken] = useState(false);
  // Mark's AvatarKiezer (exact artifact) meldt keuzes via onChange; wij
  // vangen even later het canvas-beeld zodat de avatar overal zichtbaar is.
  const kiezerWrap = useRef(null);
  const kiezerTimer = useRef(null);
  const vangKiezerKeuze = (keuze) => {
    clearTimeout(kiezerTimer.current);
    kiezerTimer.current = setTimeout(() => {
      const canvas = kiezerWrap.current?.querySelector("canvas");
      if (!canvas) return;
      try {
        const beeld = canvas.toDataURL("image/jpeg", 0.9);
        saveAvatarKiezerBeeld(player, beeld);
        setAvatarConfig((vorige) => {
          const nieuw = { ...vorige, soort: "kiezer", kiezer: keuze, kiezerKleur: keuze.kleurHex, kiezerUrl: beeld };
          saveAvatarConfig(player, nieuw);
          return nieuw;
        });
        track("avatar_kiezer_bewaard", { avatar: keuze.avatarId });
      } catch {}
    }, 700);
  };
  useEffect(() => () => clearTimeout(kiezerTimer.current), []);

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

  // Curriculum-vakken van deze groep (wat een kind op school krijgt) +
  // welke daarvan al oefenstof in de app hebben. "Je vakken" toont het
  // curriculum; de intake en het klaarzetten werken op wat beschikbaar is.
  const groepVakken = useMemo(() => {
    if (!niveau) return [];
    return niveau.soort === "klas" ? vakkenVoorKlas(niveau.nr) : vakkenVoorGroep(niveau.nr);
  }, [niveau]);
  const beschikbareVakken = useMemo(() => {
    const set = new Set(niveauPaden(niveau).map((p) => p.subject));
    return groepVakken.filter((v) => set.has(v));
  }, [niveau, groepVakken]);
  const intakeCompleet = beschikbareVakken.length > 0 && beschikbareVakken.every((v) => intake[v]);

  // 🔔 Interesse in vakken die nog gebouwd worden — meet de vraag én geeft
  // het kind/de ouder een stem (learn_path_waitlist, bestaande tabel).
  const [vakInteresse, setVakInteresse] = useState(() => {
    try { return JSON.parse(localStorage.getItem(`lk_vak_interesse:${player}`) || "{}"); } catch { return {}; }
  });
  const zetVakInteresse = (vak) => {
    if (vakInteresse[vak]) return;
    const nieuw = { ...vakInteresse, [vak]: true };
    setVakInteresse(nieuw);
    try { localStorage.setItem(`lk_vak_interesse:${player}`, JSON.stringify(nieuw)); } catch {}
    track("vak_interesse", { vak, groep, klas: niveau?.soort === "klas" ? niveau.nr : undefined });
    supabase.from("learn_path_waitlist").insert({ player_name: player || "speler", subject_id: vak }).then(() => {}, () => {});
  };

  // "Dit staat voor jou klaar" — de kern van het startbeeld: ook op dag één,
  // zónder cijfers, staat er een lijst klaar op basis van de groep. Volgorde:
  // 1. lastig-vakken (intake) die nog niet gemeten zijn — daar valt het meest
  //    te winnen; 2. wat de meting zegt (herhalen/zwak); 3. "laat maar zien"-
  //    checks voor de vakken waar je zegt goed in te zijn (nalopen!);
  // 4. overige nulmetingen van jouw groep.
  const klaargezet = useMemo(() => {
    const byId = Object.fromEntries(records.map((r) => [r.pathId, r]));
    const paden = niveauPaden(niveau);
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
    for (const vak of beschikbareVakken.filter((v) => intake[v] === "lastig")) {
      paden.filter((p) => p.subject === vak && ongemeten(p)).slice(0, 2)
        .forEach((p) => voeg(p, "lastig"));
    }
    // 2. Meting: herhalen / zwakste eerst
    const eerste = recommendNextTopic(records);
    if (eerste?.path) voeg(eerste.path.id ? { ...eerste.path, id: eerste.pathId } : null, eerste.reason === "due" ? "herhalen" : "zwak");
    records.filter((r) => r.level === "bronze").slice(0, 2)
      .forEach((r) => r.path && voeg({ ...r.path, id: r.pathId }, "zwak"));
    // 3. "Goed in"-vakken: één check-pad om het na te lopen
    for (const vak of beschikbareVakken.filter((v) => intake[v] === "goed")) {
      const p = paden.find((q) => q.subject === vak && ongemeten(q));
      if (p) voeg(p, "laatzien");
    }
    // 4. Overige nulmetingen van deze groep
    paden.filter(ongemeten).forEach((p) => voeg(p, "nulmeting"));
    return lijst.slice(0, 6);
  }, [records, niveau, beschikbareVakken, intake]);

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
    <div style={{ ...styles.page, ...(thema.pageStyle || {}) }}>
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
              <div style={{ position: "relative", flexShrink: 0, width: 84, height: 84, display: "grid", placeItems: "center" }}>
                {/* Kwartier-ring (dial uit het voorbeeld): vult zich met de
                    oefenminuten van vandaag, vol bij 15. */}
                {(() => {
                  const min = Math.min(minutenVandaag(), 15);
                  const R = 40, OMTREK = 2 * Math.PI * R;
                  return (
                    <svg viewBox="0 0 84 84" width={84} height={84} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }} aria-hidden="true">
                      <circle cx="42" cy="42" r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="5" />
                      <circle cx="42" cy="42" r={R} fill="none" stroke="#00c853" strokeWidth="5" strokeLinecap="round"
                        strokeDasharray={OMTREK} strokeDashoffset={OMTREK * (1 - min / 15)} style={{ transition: "stroke-dashoffset 0.6s" }} />
                    </svg>
                  );
                })()}
                <AvatarSvg config={avatarConfig} size={70} />
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
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--color-text-strong)", lineHeight: 1.15 }}>
                    {player}
                  </div>
                  {/* Profiel-wissel (Mark 12 aug): meerdere kinderen op één
                      apparaat wisselen hier — groep/rol wisselt automatisch mee. */}
                  {onWisselProfiel && (andereNamen.length > 0 || wisselOpen) && (
                    <button
                      onClick={() => setWisselOpen(!wisselOpen)}
                      aria-expanded={wisselOpen}
                      style={{
                        padding: "4px 10px", borderRadius: 999, cursor: "pointer",
                        border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)",
                        color: "var(--color-text-muted, #8899aa)", fontFamily: "var(--font-body)",
                        fontSize: 11.5, fontWeight: 700,
                      }}
                    >
                      🔁 wissel {wisselOpen ? "▴" : "▾"}
                    </button>
                  )}
                </div>
                {wisselOpen && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "8px 0 2px" }}>
                    {andereNamen.map((n) => (
                      <button
                        key={n.naam}
                        onClick={() => { track("mijn_profiel_wissel", {}); setWisselOpen(false); onWisselProfiel(n.naam); }}
                        style={{
                          padding: "7px 13px", borderRadius: 999, cursor: "pointer",
                          border: n.emoji === "🧑‍🏫" ? "1px solid rgba(167,139,250,0.5)" : "1px solid rgba(0,200,83,0.4)",
                          background: n.emoji === "🧑‍🏫" ? "rgba(124,58,237,0.14)" : "rgba(0,200,83,0.1)",
                          color: n.emoji === "🧑‍🏫" ? "#c4b5fd" : "#69f0ae",
                          fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                        }}
                      >
                        {n.emoji} {n.naam}
                      </button>
                    ))}
                    {onHome && (
                      <button
                        onClick={onHome}
                        title="Nieuwe naam invullen op de startpagina"
                        style={{
                          padding: "7px 13px", borderRadius: 999, cursor: "pointer",
                          border: "1px dashed rgba(255,255,255,0.3)", background: "transparent",
                          color: "var(--color-text-muted, #8899aa)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                        }}
                      >
                        ➕ nieuwe naam
                      </button>
                    )}
                  </div>
                )}
                {userLevel && (
                  <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", marginTop: 2 }}>
                    {niveau ? (niveau.label || `${niveau.soort === "groep" ? "Groep" : "Klas"} ${niveau.nr}`) : userLevel}
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

            {/* ── Avatar bewerken = Mark's AvatarKiezer (exact claude.ai-
                artifact, ONGEWIJZIGD; opslag via avatarStorageShim, beeld-
                vangst via de wrapper). Oude poppetjes-maker + plaatjes-keuze
                verwijderd op Mark's verzoek 12 aug ("potlood direct naar
                jouw programma"); eigen-foto blijft als kleine optie eronder. */}
            {avatarBewerken && (
              <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(255,213,79,0.4)" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
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

                <div ref={kiezerWrap} style={{ borderRadius: 18, overflow: "hidden" }}>
                  <AvatarKiezer onChange={vangKiezerKeuze} />
                </div>

                {/* Eigen foto (Mark 11 aug, ouderen/leerkrachten) — blijft op dit apparaat */}
                <div style={{ marginTop: 14 }}>
                  {avatarConfig.soort === "foto" && avatarConfig.fotoUrl ? (
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <img src={avatarConfig.fotoUrl} alt="Jouw foto" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", display: "block" }} />
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
                    <label style={{ display: "inline-block", padding: "8px 14px", borderRadius: 9, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "var(--color-text-muted, #8899aa)", fontWeight: 700, fontSize: 12.5, cursor: "pointer", fontFamily: "var(--font-display)" }}>
                      📷 Liever een eigen foto? Kies er een…
                      <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => kiesFoto(e.target.files?.[0])} />
                    </label>
                  )}
                  <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", marginTop: 6, lineHeight: 1.5 }}>
                    🔒 Een eigen foto blijft <strong style={{ color: "var(--color-text)" }}>alleen op dit apparaat</strong> — vooral voor oudere leerlingen, ouders en leerkrachten.
                  </div>
                </div>
              </Card>
            )}

            {/* ── Leerkracht met Pro (Mark 12 aug): dit ÍS ook jouw persoonlijke
            pagina — jouw eigen oefenwerk staat hieronder; je klas-werk
            (toetsen klaarzetten, deelcodes, resultaten) leeft op het
            leerkracht-overzicht. Eén tik i.p.v. zoeken. ── */}
        {userRole === "teacher" && onLeerkrachtHome && (
          <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1.5px solid rgba(167,139,250,0.55)", background: "rgba(124,58,237,0.13)" }}>
            <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--color-text)", marginBottom: 10 }}>
              🧑‍🏫 <strong>Jouw klas</strong> — alles wat je als leerkracht kunt, direct vanaf hier.
              <span style={{ color: "var(--color-text-muted, #8899aa)" }}> Verderop staat je eigen oefenwerk.</span>
            </div>
            {/* Alle leerkracht-acties als snelkoppelingen (Mark 12 aug:
                "staat alles waar een leraar iets mee kan op zijn pagina?") —
                zelfde bestemmingen als het leerkracht-overzicht. */}
            {onLeerkrachtActie && (
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 10 }}>
                {[
                  { p: "create-quiz", label: "📝 Toets maken" },
                  { p: "takenlijst-maker", label: "✅ Takenlijst klaarzetten" },
                  { p: "werkblad", label: "🖨️ Werkblad printen" },
                  { p: "teacher-progress", label: "📊 Scores & voortgang" },
                  { p: "class-manager", label: "🏫 Mijn klassen" },
                ].map((a) => (
                  <button
                    key={a.p}
                    onClick={() => { track("mijn_leerkracht_actie", { actie: a.p }); onLeerkrachtActie(a.p); }}
                    style={{
                      padding: "8px 13px", borderRadius: 999, cursor: "pointer",
                      border: "1px solid rgba(167,139,250,0.5)", background: "rgba(124,58,237,0.18)",
                      color: "#d6ccff", fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700,
                    }}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            )}
            <button
              onClick={() => { track("mijn_naar_leerkracht", {}); onLeerkrachtHome(); }}
              style={{
                padding: "9px 15px", borderRadius: 10, border: "none", cursor: "pointer",
                background: "rgba(124,58,237,0.3)", color: "#e6ddff",
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800,
              }}
            >
              Volledig leerkracht-overzicht (met je toetsen &amp; deelcodes) →
            </button>
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
            {/* ── Vandaag: het kwartier (naar het claude.ai-voorbeeld dat Mark
                mooi vond — 20:56): minuten-blokjes + één grote verder-knop. ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)", background: "linear-gradient(120deg, rgba(0,200,83,0.18), rgba(15,165,196,0.14))", border: "1px solid rgba(0,200,83,0.4)" }}>
              <div style={eyebrowStijl}>Vandaag</div>
              {(() => {
                const min = Math.min(minutenVandaag(), 15);
                const klaarVandaag = min >= 15;
                return (
                  <>
                    <div style={{ fontSize: 17, fontWeight: 800, color: "var(--color-text-strong)", fontFamily: "var(--font-display)", margin: "2px 0 10px", lineHeight: 1.3 }}>
                      {klaarVandaag
                        ? "Je kwartier zit erop — lekker bezig! 🎉"
                        : min > 0
                          ? `Nog ${15 - min} ${15 - min === 1 ? "minuut" : "minuten"} en je kwartier zit erop`
                          : "Vandaag nog niet geoefend — een kwartier is genoeg"}
                    </div>
                    <div style={{ display: "flex", gap: 4, marginBottom: 12 }} aria-label={`${min} van de 15 minuten geoefend`}>
                      {Array.from({ length: 15 }, (_, i) => (
                        <span key={i} style={{
                          flex: 1, height: 22, borderRadius: 5,
                          background: i < min ? "#69f0ae" : "rgba(255,255,255,0.18)",
                        }} />
                      ))}
                    </div>
                    {resume && (
                      <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", marginBottom: 8 }}>
                        Je was bezig met: <strong style={{ color: "var(--color-text)" }}>{resume.path.emoji ? `${resume.path.emoji} ` : ""}{resume.path.title}</strong>
                      </div>
                    )}
                    <button
                      onClick={() => resume ? (onResumePath && onResumePath(resume.pathId, resume.stepIdx)) : onGoLeren && onGoLeren()}
                      style={{
                        padding: "13px 20px", borderRadius: 11, border: "none", cursor: "pointer",
                        background: "linear-gradient(135deg, #00c853, #69f0ae)", color: "#003a15",
                        fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, width: "100%",
                        boxShadow: "0 3px 0 rgba(0,0,0,0.25)",
                      }}
                    >
                      {resume ? "▶ Verder oefenen" : "📚 Kies een onderwerp"}
                    </button>
                  </>
                );
              })()}
            </Card>

            {/* ── Jouw doel + countdown (niet voor leerkrachten — agent-test
                12 aug: "overgaan naar het volgende jaar" is kind-taal) ── */}
            {userRole !== "teacher" && (
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
                  <strong>{groep ? `Klaar zijn voor groep ${Math.min(groep + 1, 8)}` : niveau?.soort === "klas" ? (niveau.nr >= 4 ? "Slagen voor je eindexamen" : `Klaar zijn voor klas ${niveau.nr + 1}`) : "Overgaan naar het volgende jaar"}</strong> — dát is je doel.
                  Een kwartier per dag is hoe je er komt. {streak > 0
                    ? `Je zit nu op ${streak} ${streak === 1 ? "dag" : "dagen"} op rij. Knap!`
                    : "Begin vandaag, dan start je reeks."}
                </div>
              )}
              {/* Uitklap: wat hoort er bij jouw groep? (Mark 21:00: "maak de
                  blokken klikbaar — voor groep 4 moet je dit en dat kennen") */}
              {niveau && groepVakken.length > 0 && (
                <div style={{ marginTop: 12 }}>
                  <button
                    onClick={() => { setDoelOpen(!doelOpen); if (!doelOpen) track("mijn_doel_uitklap", { groep, klas: niveau?.soort === "klas" ? niveau.nr : undefined }); }}
                    aria-expanded={doelOpen}
                    style={{
                      width: "100%", textAlign: "left", cursor: "pointer",
                      padding: "10px 14px", borderRadius: 10,
                      border: "1px dashed rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.04)",
                      color: "var(--color-text)", fontWeight: 700, fontSize: 13,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    🎒 Wat moet ik kennen in {niveauLabel}? {doelOpen ? "▴" : "▾"}
                  </button>
                  {doelOpen && (
                    <div style={{ marginTop: 10 }}>
                      {groepVakken.map((vak) => {
                        const meta = vakMeta(vak);
                        const paden = niveauPaden(niveau).filter((p) => p.subject === vak).slice(0, 4);
                        return (
                          <div key={vak} style={{ marginBottom: 10 }}>
                            <div style={{ fontSize: 12, fontWeight: 800, color: "var(--color-text-strong)", marginBottom: 5 }}>
                              {meta.emoji} {meta.titel}
                              {notitieVoor(vak) && <span style={{ fontWeight: 500, color: "var(--color-text-muted, #8899aa)" }}> — {notitieVoor(vak)}</span>}
                            </div>
                            {paden.length === 0 && (
                              <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)" }}>
                                🔨 Hier bouwen we aan — oefenstof komt eraan.
                              </div>
                            )}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                              {paden.map((p) => (
                                <button
                                  key={p.id}
                                  onClick={() => onPickPath && onPickPath(p.id)}
                                  style={{
                                    padding: "6px 11px", borderRadius: 999, cursor: "pointer",
                                    border: "1px solid rgba(0,200,83,0.35)", background: "rgba(0,200,83,0.08)",
                                    color: "var(--color-text)", fontSize: 12, fontWeight: 600,
                                  }}
                                >
                                  {p.emoji} {p.title.replace(/\s*\(.*?\)\s*$/, "").replace(/\s*—\s*Cito.*$/i, "").replace(/\s*groep\s*\d(\s*-\s*\d)?\s*$/i, "")}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                      <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.45 }}>
                        Dit zijn de onderwerpen langs de leerlijnen van {niveauLabel} — tik er een aan om te beginnen. Alles mag, ook hoger of lager.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
            )}

            {/* ── Waar je staat ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Waar je staat</div>
              <div style={kaartTitelStijl}>Je vakken</div>
              {loading && <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>Laden…</div>}
              {/* Curriculum-weergave (Mark 12 aug): ALLE vakken die bij deze
                  groep horen — gemeten (balk), beschikbaar (nulmeting) of
                  eerlijk "hieraan bouwen we" mét interesse-knopje. */}
              {!loading && groepVakken.length > 0 && (() => {
                const gemeten = new Map(perVak.map((v) => [v.subj, v]));
                const beschikbaar = new Set(beschikbareVakken);
                const extraGemeten = perVak.filter((v) => !groepVakken.includes(v.subj));
                const balkGemeten = (v, meta, notitie) => {
                  const st = VAK_STATUS[v.level];
                  return (
                    <div
                      key={v.subj}
                      role="button"
                      tabIndex={0}
                      onClick={() => onVak && onVak(v.subj)}
                      onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && onVak) onVak(v.subj); }}
                      title={`Oefen ${meta.titel || meta.title}`}
                      style={{ marginBottom: 12, cursor: onVak ? "pointer" : "default" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, gap: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-text-strong)" }}>
                          {meta.emoji} {meta.titel || meta.title}
                        </span>
                        <span style={{ fontSize: 11.5, color: st.kleur, fontWeight: 700, textAlign: "right" }}>
                          {st.emoji} {st.tekst}
                        </span>
                      </div>
                      <div style={{ height: 10, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                        <div style={{ width: `${v.pct}%`, height: "100%", borderRadius: 99, background: v.pct >= 70 ? "#00c853" : v.pct >= 50 ? "#ffd54f" : "#ff8c42", transition: "width 0.4s" }} />
                      </div>
                      <div style={{ fontSize: 11, color: "var(--color-text-muted, #8899aa)", marginTop: 2 }}>
                        {v.pct}% goed · {v.attempts} {v.attempts === 1 ? "vraag" : "vragen"} gedaan{notitie ? ` · ${notitie}` : ""}
                      </div>
                    </div>
                  );
                };
                return (
                  <>
                    {groepVakken.map((vak) => {
                      const meta = vakMeta(vak);
                      const notitie = notitieVoor(vak);
                      const m = gemeten.get(vak);
                      if (m) return balkGemeten(m, meta, notitie);
                      if (beschikbaar.has(vak)) {
                        return (
                          <div key={vak} style={{ marginBottom: 12 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, gap: 8 }}>
                              <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-text-strong)" }}>
                                {meta.emoji} {meta.titel}
                              </span>
                              <span style={{ fontSize: 11.5, color: "#8899aa", fontWeight: 700 }}>📏 Nulmeting — nog niets gemeten</span>
                            </div>
                            <div style={{ height: 10, borderRadius: 99, background: "rgba(255,255,255,0.08)" }} />
                            {notitie && <div style={{ fontSize: 11, color: "var(--color-text-muted, #8899aa)", marginTop: 2 }}>{notitie}</div>}
                          </div>
                        );
                      }
                      return (
                        <div key={vak} style={{ marginBottom: 12, opacity: 0.75 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-text-muted, #8899aa)" }}>
                              {meta.emoji} {meta.titel}
                              {notitie && <span style={{ fontWeight: 500, fontSize: 11.5 }}> · {notitie}</span>}
                            </span>
                            <button
                              onClick={() => zetVakInteresse(vak)}
                              disabled={!!vakInteresse[vak]}
                              style={{
                                padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                                border: "1px dashed rgba(255,255,255,0.25)",
                                background: vakInteresse[vak] ? "rgba(0,200,83,0.1)" : "transparent",
                                color: vakInteresse[vak] ? "#69f0ae" : "var(--color-text-muted, #8899aa)",
                                cursor: vakInteresse[vak] ? "default" : "pointer",
                                fontFamily: "var(--font-body)",
                              }}
                            >
                              {vakInteresse[vak] ? "✓ we laten het je weten" : "🔨 hieraan bouwen we — 🔔 houd me op de hoogte"}
                            </button>
                          </div>
                          <div style={{ height: 10, borderRadius: 99, marginTop: 4, background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 6px, rgba(255,255,255,0.1) 6px, rgba(255,255,255,0.1) 12px)" }} />
                        </div>
                      );
                    })}
                    {extraGemeten.map((v) => balkGemeten(v, SUBJECT_LABELS[v.subj] || { title: v.subj, emoji: "📘" }, "extra vak"))}
                    {perVak.length === 0 && (
                      <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
                        Dit zijn de vakken van {niveauLabel}. Start hieronder bij "Dit staat voor jou klaar" — na elke oefening vullen de balken zich met jouw échte meting.
                      </div>
                    )}
                  </>
                );
              })()}
              {!loading && groepVakken.length === 0 && perVak.length === 0 && (
                <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.5 }}>
                  Nog geen metingen. Doe een paar vragen bij een onderwerp — daarna zie je hier eerlijk waar je staat.
                </div>
              )}
              {!loading && groepVakken.length === 0 && perVak.map((v) => {
                const meta = SUBJECT_LABELS[v.subj] || { title: v.subj, emoji: "📘" };
                const st = VAK_STATUS[v.level];
                return (
                  <div
                    key={v.subj}
                    role="button"
                    tabIndex={0}
                    onClick={() => onVak && onVak(v.subj)}
                    onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && onVak) onVak(v.subj); }}
                    title={`Oefen ${meta.title}`}
                    style={{ marginBottom: 12, cursor: onVak ? "pointer" : "default" }}>
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

            {/* ── Charley's kennismaking (intake) — alleen over vakken waar
                de app al oefenstof voor heeft. ── */}
            {beschikbareVakken.length > 0 && !intakeCompleet && (
              <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 22 }} aria-hidden="true">🐶</span>
                  <div style={{ ...kaartTitelStijl, marginBottom: 0 }}>Charley wil je leren kennen</div>
                </div>
                <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", marginBottom: 10, lineHeight: 1.5 }}>
                  Waar ben je goed in, en wat vind je lastig? Dan weet ik wat ik voor je klaarzet. (We kijken daarna samen of het klopt!)
                </div>
                {beschikbareVakken.map((vak) => {
                  const meta = vakMeta(vak);
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

            {/* ── ⭐ Mijn lijstje — bewaar-voor-later (Mark-idee 13 aug): het
                kind bladert, tikt een ster bij een les, en die wacht hier.
                Eigen keuzes bovenaan = eigenaarschap. ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(255,213,79,0.35)" }}>
              <div style={eyebrowStijl}>Zelf gekozen</div>
              <div style={kaartTitelStijl}>⭐ Mijn lijstje</div>
              {lijstje.length === 0 ? (
                <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
                  Zie je bij het bladeren een les die je later wilt doen? Tik op de ⭐ en hij komt hier te staan — net als een foto bij je favorieten.
                </div>
              ) : (
                lijstje.map((it) => (
                  <div key={it.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px dashed rgba(255,255,255,0.1)" }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }} aria-hidden="true">{it.emoji || "📘"}</span>
                    <div style={{ flex: 1, minWidth: 0, fontWeight: 700, fontSize: 13.5, color: "var(--color-text-strong)" }}>{it.titel}</div>
                    <button
                      onClick={() => onPickPath && onPickPath(it.id)}
                      style={{ flexShrink: 0, padding: "8px 14px", borderRadius: 9, border: "none", cursor: "pointer", background: "rgba(255,213,79,0.18)", color: "#ffd54f", fontWeight: 800, fontSize: 12.5, fontFamily: "var(--font-display)" }}
                    >
                      Start
                    </button>
                    <button
                      onClick={() => toggleLijstje(player, it)}
                      aria-label={`${it.titel} van je lijstje halen`}
                      title="Van je lijstje halen"
                      style={{ flexShrink: 0, background: "none", border: "none", color: "var(--color-text-muted, #8899aa)", cursor: "pointer", fontSize: 15, padding: 4 }}
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </Card>

            {/* ── Dit staat voor jou klaar ── */}
            {klaargezet.length > 0 && (
              <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
                <div style={eyebrowStijl}>{niveau ? (niveau.label || `${niveau.soort === "groep" ? "Groep" : "Klas"} ${niveau.nr}`) : "Voor jou"}</div>
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

            {/* ── Diploma-kast (beloning-lus, 12 aug): beste score per
                onderwerp = mini-diploma met datum + %, printbaar als PDF.
                Tuin-les: groei zichtbaar, nooit straf. ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(255,213,79,0.4)" }}>
              <div style={eyebrowStijl}>Jouw prijzenkast</div>
              <div style={kaartTitelStijl}>🏆 Diploma-kast</div>
              <DiplomaKast player={player} naamVoorDiploma={player} bron="mijn" />
            </Card>

            {/* ── 🎨 Eigen achtergrond (Mark 13 aug): gekozen palet i.p.v.
                vrije foto's — rustig en veilig; goud verdien je met je
                eerste échte diploma. ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Jouw pagina, jouw kleur</div>
              <div style={kaartTitelStijl}>🎨 Kies je achtergrond</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {THEMAS.map((t) => {
                  const opSlot = t.id === "goud" && !goudOpen;
                  const actief = thema.id === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => { if (!opSlot) kiesThema(player, t.id); }}
                      title={opSlot ? `Verdien dit met ${t.verdienMet}` : t.naam}
                      aria-label={opSlot ? `${t.naam} — nog op slot, verdien dit met ${t.verdienMet}` : `Achtergrond ${t.naam}`}
                      style={{
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                        padding: "8px 10px", borderRadius: 12, cursor: opSlot ? "not-allowed" : "pointer",
                        background: t.swatch, minWidth: 64,
                        border: actief ? "2px solid #ffd54f" : "2px solid rgba(255,255,255,0.15)",
                        opacity: opSlot ? 0.55 : 1,
                        color: "#fff", fontFamily: "inherit",
                      }}
                    >
                      <span style={{ fontSize: 18 }}>{opSlot ? "🔒" : t.emoji}</span>
                      <span style={{ fontSize: 10.5, fontWeight: 700 }}>{t.naam}</span>
                    </button>
                  );
                })}
              </div>
              {!goudOpen && (
                <div style={{ fontSize: 11.5, color: "var(--color-text-muted, #8899aa)", marginTop: 8 }}>
                  🏆 Het gouden thema verdien je met je eerste échte diploma uit de kast hierboven.
                </div>
              )}
            </Card>

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
                {/* Koppelcode-regel is kind-taal — leerkracht ziet hem niet
                    (agent-test 12 aug). */}
                {userRole !== "teacher" && (
                  <div style={{ marginBottom: 6 }}>
                    👨‍👩‍👧 Een ouder of verzorger kan met een <strong>koppelcode</strong> meekijken met je voortgang — vraag het thuis, of kijk op het thuis-overzicht.
                  </div>
                )}
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

            {/* ── Gezins-kaart (12 aug): ingelogde ouder mét koppelingen ziet
                hier zijn kinderen — één tik naar het thuis-overzicht, met het
                juiste kind voorgeselecteerd (localStorage lk_ouder_kind). ── */}
            {gezinsKinderen.length > 0 && (
              <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "1px solid rgba(0,176,255,0.4)" }}>
                <div style={eyebrowStijl}>Jouw gezin</div>
                <div style={kaartTitelStijl}>👨‍👩‍👧 Gekoppelde kinderen</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                  {gezinsKinderen.map((k) => (
                    <button
                      key={k.id}
                      onClick={() => openThuisOverzicht(k.child_name)}
                      title={k.verified ? `Bekijk ${k.child_name} in het thuis-overzicht` : "Nog niet bevestigd door je kind"}
                      style={{
                        padding: "8px 14px", borderRadius: 999, cursor: "pointer",
                        border: "1px solid rgba(0,176,255,0.45)", background: "rgba(0,176,255,0.12)",
                        color: "#4fc3f7", fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 800,
                      }}
                    >
                      👦 {k.child_name}{k.verified ? "" : " 🔐"}
                    </button>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
                  Tik op een naam voor scores, weekrapport-instellingen en het Kwartierplan — alles per kind, in je eigen tempo.
                </div>
              </Card>
            )}

            {/* ── Ouder/juf: zelf volgen ── */}
            <Card padding="md" style={{ marginBottom: "var(--space-4)" }}>
              <div style={eyebrowStijl}>Zelf volgen</div>
              <div style={kaartTitelStijl}>Meekijken op je eigen telefoon</div>
              <div style={{ fontSize: 13.5, color: "var(--color-text)", lineHeight: 1.6 }}>
                <div style={{ marginBottom: 6 }}>
                  👨‍👩‍👧 Maak op je eigen telefoon een account als <strong>ouder of verzorger</strong> en koppel {player} met een <strong>koppelcode</strong> — dan zie je dit overzicht altijd, plus elke maandag een <strong>weekrapport per e-mail</strong>.
                </div>
                {/* Adoptie-gat (12 aug): de uitleg stond er, maar zonder knop —
                    een geïnteresseerde ouder moest /ouder zelf zien te vinden. */}
                {onOuderDashboard && (
                  <button
                    onClick={() => openThuisOverzicht(null)}
                    style={{
                      display: "inline-block", margin: "4px 0 10px", padding: "10px 16px",
                      borderRadius: 10, border: "none", cursor: "pointer",
                      background: "rgba(0,176,255,0.2)", color: "#4fc3f7",
                      fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 800,
                    }}
                  >
                    👨‍👩‍👧 Naar het thuis-overzicht — koppelen &amp; weekrapport →
                  </button>
                )}
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
