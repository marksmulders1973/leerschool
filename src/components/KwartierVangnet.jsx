// KwartierVangnet (dagrapport-idee #16, 2026-08-08).
// Vangt anonieme oefenaars op hun warmste moment: het kwartier is gehaald,
// of hun score kon niet op het scorebord omdat er geen naam is
// (event `leaderboard_skipped_no_name`, 7 aug live gezien in de data).
// Eén vriendelijke kaart: naam invullen → voortgang/reeks bewaard + score
// alsnog op het scorebord; daarna optioneel het e-mailadres van een ouder
// of verzorger voor het wekelijkse berichtje (→ upgrade_waitlist).
//
// Regels: max 1× per dag tonen, nooit tijdens het spelen van een quiz,
// nooit voor ingelogde gebruikers, en na "klaar" nooit meer.
import { useEffect, useRef, useState } from "react";
import { getDailyGoal } from "../shared/dailyGoal.js";
import { track } from "../utils.js";
import supabase from "../supabase.js";

const STATUS_KEY = "lk_vangnet_v1";

// Alleen op rustige paginas tonen — nooit midden in een quiz, leerpad of spel.
const TOON_PAGINAS = new Set([
  "results", "student-home", "home", "learn-paths-hub", "examens",
  "self-study", "vandaag", "my-mastery", "cito", "tafels",
  "redactiesommen", "begrijpend-lezen", "woordenschat", "spelling",
]);

function dagStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function leesStatus() {
  try {
    const raw = localStorage.getItem(STATUS_KEY);
    const obj = raw ? JSON.parse(raw) : null;
    return obj && typeof obj === "object" ? obj : {};
  } catch { return {}; }
}

function schrijfStatus(status) {
  try { localStorage.setItem(STATUS_KEY, JSON.stringify(status)); } catch { /* private mode */ }
}

// Naam ook in ls_user bewaren, zodat de app 'm bij een volgende start
// terugvindt (zelfde plek waar HomePage de naam wegschrijft).
function bewaarNaamLokaal(naam) {
  try {
    const raw = localStorage.getItem("ls_user");
    const d = raw ? JSON.parse(raw) : {};
    d.name = naam;
    localStorage.setItem("ls_user", JSON.stringify(d));
  } catch { /* private mode */ }
}

const geldigEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

export default function KwartierVangnet({ page, trigger, userName, authUser, onNaamOpgeslagen }) {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("kwartier"); // "kwartier" | "scorebord"
  const [stap, setStap] = useState("naam"); // "naam" | "mail" | "klaar"
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [foutje, setFoutje] = useState("");
  const [bezig, setBezig] = useState(false);
  const sluitTimer = useRef(null);

  useEffect(() => () => { if (sluitTimer.current) clearTimeout(sluitTimer.current); }, []);

  // Toon-beslissing: alleen anoniem + zonder naam, op een rustige pagina,
  // max 1× per dag, en alleen op een echt moment (kwartier af of scorebord-mis).
  useEffect(() => {
    if (open || authUser) return;
    const huidige = (userName || "").trim();
    if (huidige.length >= 2 && huidige.toLowerCase() !== "speler") return;
    if (!TOON_PAGINAS.has(page)) return;
    const st = leesStatus();
    if (st.klaar) return;
    const vandaag = dagStr();
    if (st.laatstGetoond === vandaag) return;
    const scorebordMoment = !!trigger && trigger !== st.laatsteTrigger;
    const kwartierAf = getDailyGoal().completed;
    if (!scorebordMoment && !kwartierAf) return;
    const via = scorebordMoment ? "scorebord" : "kwartier";
    setVariant(via);
    setStap("naam");
    setOpen(true);
    schrijfStatus({ ...st, laatstGetoond: vandaag, laatsteTrigger: trigger || st.laatsteTrigger || 0 });
    try { track("vangnet_shown", { via }); } catch { /* meten mag nooit storen */ }
  }, [page, trigger, userName, authUser, open]);

  if (!open) return null;

  const sluit = (reden) => {
    setOpen(false);
    if (reden) { try { track("vangnet_weg", { bij: stap, reden }); } catch { /* */ } }
  };

  const naamOpslaan = () => {
    const schoon = naam.trim().slice(0, 20);
    if (schoon.length < 2) { setFoutje("Vul eerst je naam in."); return; }
    setFoutje("");
    bewaarNaamLokaal(schoon);
    try { onNaamOpgeslagen && onNaamOpgeslagen(schoon); } catch { /* */ }
    const st = leesStatus();
    schrijfStatus({ ...st, klaar: true });
    try { track("vangnet_naam", { via: variant }); } catch { /* */ }
    setStap("mail");
  };

  const mailOpslaan = async () => {
    const adres = email.trim().toLowerCase();
    if (!geldigEmail(adres)) { setFoutje("Dat e-mailadres klopt nog niet helemaal."); return; }
    setFoutje("");
    setBezig(true);
    try {
      await supabase.from("upgrade_waitlist").insert({ email: adres, plan: "weekrapport", source: "kwartier_vangnet" });
      try { track("vangnet_email", { via: variant }); } catch { /* */ }
    } catch { /* dubbel adres of offline — voor het kind maakt het niet uit */ }
    setBezig(false);
    setStap("klaar");
    sluitTimer.current = setTimeout(() => sluit(null), 3000);
  };

  const mailOverslaan = () => {
    setStap("klaar");
    sluitTimer.current = setTimeout(() => sluit(null), 2500);
  };

  const accent = variant === "kwartier" ? "#00e676" : "#ffd54f";
  const accentZacht = variant === "kwartier" ? "rgba(0,200,83," : "rgba(255,213,79,";

  const knopPrimair = {
    background: `linear-gradient(135deg, ${accent}, ${variant === "kwartier" ? "#00c853" : "#ffaa00"})`,
    color: "#0c1526",
    border: "none",
    borderRadius: 10,
    padding: "10px 16px",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    minHeight: 40,
  };
  const knopStil = {
    background: "transparent",
    color: "rgba(230,235,245,0.6)",
    border: "none",
    padding: "10px 12px",
    fontSize: 13,
    cursor: "pointer",
    fontFamily: "var(--font-body)",
    minHeight: 40,
  };
  const invoer = {
    width: "100%",
    boxSizing: "border-box",
    background: "#0e1a30",
    color: "rgba(230,235,245,0.95)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: 10,
    padding: "10px 12px",
    fontSize: 15,
    fontFamily: "var(--font-body)",
    marginBottom: 8,
  };

  return (
    <div
      role="dialog"
      aria-label={variant === "kwartier" ? "Kwartier gehaald" : "Score bewaren"}
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 84,
        zIndex: 900,
        width: "min(400px, calc(100vw - 24px))",
        background: "linear-gradient(160deg, #16233d, #0f1a30)",
        border: `1px solid ${accentZacht}0.5)`,
        borderRadius: 16,
        padding: "16px 18px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
        color: "var(--color-text, #e6ebf5)",
      }}
    >
      <button
        type="button"
        onClick={() => sluit("kruisje")}
        aria-label="Sluiten"
        style={{ position: "absolute", top: 8, right: 10, background: "transparent", border: "none", color: "rgba(230,235,245,0.5)", fontSize: 18, cursor: "pointer", padding: 4 }}
      >
        ✕
      </button>

      {stap === "naam" && (
        <>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, color: accent, marginBottom: 6 }}>
            {variant === "kwartier" ? "🎉 Kwartier gehaald!" : "🏆 Goed gedaan!"}
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "rgba(230,235,245,0.85)", marginBottom: 4 }}>
            {variant === "kwartier"
              ? "Knap gewerkt vandaag."
              : "Jouw score kan op het scorebord."}
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "rgba(230,235,245,0.85)", marginBottom: 10 }}>
            Zet je naam erbij — dan bewaren we je voortgang en je 🔥-reeks.
          </div>
          <input
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") naamOpslaan(); }}
            placeholder="Jouw naam"
            maxLength={20}
            aria-label="Jouw naam"
            style={invoer}
          />
          {foutje && <div style={{ fontSize: 12.5, color: "#ff9a9a", marginBottom: 8 }}>{foutje}</div>}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <button type="button" onClick={() => sluit("nu-even-niet")} style={knopStil}>Nu even niet</button>
            <button type="button" onClick={naamOpslaan} style={knopPrimair}>Bewaren</button>
          </div>
        </>
      )}

      {stap === "mail" && (
        <>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, color: accent, marginBottom: 6 }}>
            📬 Berichtje voor thuis?
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "rgba(230,235,245,0.85)", marginBottom: 10 }}>
            Wil je dat je ouder of verzorger elke week een kort berichtje krijgt over hoe goed je oefent? Vul dan hun e-mailadres in. Overslaan mag ook.
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") mailOpslaan(); }}
            placeholder="E-mail van je ouder of verzorger"
            aria-label="E-mailadres van je ouder of verzorger"
            style={invoer}
          />
          {foutje && <div style={{ fontSize: 12.5, color: "#ff9a9a", marginBottom: 8 }}>{foutje}</div>}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <button type="button" onClick={mailOverslaan} style={knopStil}>Overslaan</button>
            <button type="button" onClick={mailOpslaan} disabled={bezig} style={{ ...knopPrimair, opacity: bezig ? 0.6 : 1 }}>
              {bezig ? "Even geduld…" : "Versturen"}
            </button>
          </div>
        </>
      )}

      {stap === "klaar" && (
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: accent, padding: "6px 0" }}>
          ✅ Opgeslagen — veel leerplezier{naam.trim() ? `, ${naam.trim()}` : ""}!
          {variant === "scorebord" && (
            <div style={{ fontSize: 13, fontWeight: 400, color: "rgba(230,235,245,0.8)", marginTop: 4 }}>
              Je score staat nu op het scorebord.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
