// Topografie-check — eerste vak van de "Leerkwartier-ouder-check".
// Flow: ouder laat kind 10 vragen doen → uitslag → ouder laat e-mail achter →
// krijgt direct een persoonlijk oefenblad (de foute vragen + uitleg + antwoord-
// sleutel) via api/send-oefenblad.js, en komt op de wekelijkse lijst.
//
// Bewust vak-onafhankelijk opgezet: `VAK` + de vragenbank zijn het enige
// vak-specifieke. Later kopiëren we dit naar rekenen/taal met een andere bank.
import React, { useState } from "react";
import { track } from "../utils.js";
import { TOPO_VRAGEN, kiesToetsVragen } from "../data/topografieVragen.js";

const VAK = "topografie";
const AANTAL = 10;

const C = {
  groen: "#69f0ae", groen2: "#00c853", tekst: "#eaf2fb", zacht: "#bcd6f2",
  paper: "rgba(255,255,255,0.05)", rand: "rgba(255,255,255,0.12)",
  fout: "#ff8a8a", veld: "#0e2236",
};

export default function TopografieCheck() {
  const [fase, setFase] = useState("intro"); // intro | quiz | klaar
  const [vragen, setVragen] = useState([]);
  const [idx, setIdx] = useState(0);
  const [foutIds, setFoutIds] = useState([]);
  const [gekozen, setGekozen] = useState(null); // index van net-gekozen optie (feedback-flits)
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | busy | done | error

  const start = () => {
    setVragen(kiesToetsVragen(TOPO_VRAGEN, AANTAL));
    setIdx(0); setFoutIds([]); setGekozen(null);
    setFase("quiz");
    track("topocheck_start", { vak: VAK });
  };

  const kies = (optieIdx) => {
    if (gekozen !== null) return;
    const v = vragen[idx];
    const goed = optieIdx === v.antwoord;
    setGekozen(optieIdx);
    if (!goed) setFoutIds((cur) => [...cur, v.id]);
    setTimeout(() => {
      setGekozen(null);
      if (idx + 1 >= vragen.length) {
        setFase("klaar");
        track("topocheck_done", { vak: VAK, score: vragen.length - (foutIds.length + (goed ? 0 : 1)), totaal: vragen.length });
      } else {
        setIdx((i) => i + 1);
      }
    }, 850);
  };

  const score = vragen.length - foutIds.length;

  const meldAan = async (e) => {
    e?.preventDefault?.();
    if (status === "busy") return;
    if (!email.includes("@") || !email.includes(".")) { setStatus("error"); return; }
    setStatus("busy");
    try {
      const r = await fetch("/api/send-oefenblad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), vak: VAK, foutIds, score, totaal: vragen.length }),
      });
      if (!r.ok) throw new Error("send-failed");
      track("topocheck_email", { vak: VAK, score, fout: foutIds.length });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  // ── INTRO ──
  if (fase === "intro") {
    return (
      <Kaart>
        <div style={{ fontSize: 22, fontWeight: 800, color: C.groen, marginBottom: 6 }}>
          👨‍👧 Doe samen de topografie-check
        </div>
        <p style={{ margin: "0 0 6px", fontSize: 15, color: C.tekst, lineHeight: 1.5 }}>
          Laat je kind <b>10 korte vragen</b> beantwoorden over werelddelen, landen en hoofdsteden.
        </p>
        <p style={{ margin: "0 0 18px", fontSize: 14.5, color: C.zacht, lineHeight: 1.5 }}>
          Daarna krijg jij als ouder per mail de <b>uitslag</b> + <b>10 oefenvragen mét uitleg</b> —
          precies de onderwerpen waar je kind nog moeite mee heeft. Kind maakt ze op papier, jij kijkt na. 💪
        </p>
        <Knop onClick={start}>Start de check (10 vragen) →</Knop>
      </Kaart>
    );
  }

  // ── QUIZ ──
  if (fase === "quiz") {
    const v = vragen[idx];
    return (
      <Kaart>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.zacht, marginBottom: 10 }}>
          Vraag {idx + 1} / {vragen.length}
        </div>
        <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.4 }}>
          {v.vraag}
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          {v.opties.map((opt, i) => {
            const isGekozen = gekozen === i;
            const isGoed = i === v.antwoord;
            let bg = C.paper, rand = C.rand, kleur = C.tekst;
            if (gekozen !== null && isGoed) { bg = "rgba(0,200,83,0.22)"; rand = C.groen2; kleur = C.groen; }
            else if (isGekozen && !isGoed) { bg = "rgba(255,80,80,0.18)"; rand = C.fout; kleur = C.fout; }
            return (
              <button
                key={i}
                onClick={() => kies(i)}
                disabled={gekozen !== null}
                style={{
                  textAlign: "left", padding: "13px 16px", borderRadius: 12,
                  border: `2px solid ${rand}`, background: bg, color: kleur,
                  fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 600,
                  cursor: gekozen === null ? "pointer" : "default",
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </Kaart>
    );
  }

  // ── KLAAR + e-mail-gate ──
  const perfect = foutIds.length === 0;
  return (
    <Kaart>
      <div style={{ fontSize: 22, fontWeight: 800, color: C.groen, marginBottom: 4 }}>
        {perfect ? "🎉 Knap gedaan!" : "✅ Klaar!"}
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 14 }}>
        Score: {score} / {vragen.length} goed
      </div>

      {status === "done" ? (
        <div style={{ background: "rgba(0,200,83,0.12)", border: `1.5px solid ${C.groen2}`, borderRadius: 14, padding: "16px 18px" }}>
          <div style={{ color: C.groen, fontWeight: 800, fontSize: 16, marginBottom: 4 }}>📬 Check je mail!</div>
          <p style={{ margin: 0, fontSize: 14, color: C.zacht, lineHeight: 1.5 }}>
            De uitslag + 10 oefenvragen mét uitleg zijn onderweg. Laat je kind ze op papier maken — jij hebt de antwoordsleutel.
          </p>
        </div>
      ) : (
        <form onSubmit={meldAan}>
          <p style={{ margin: "0 0 12px", fontSize: 14.5, color: C.zacht, lineHeight: 1.5 }}>
            {perfect
              ? "Wil je 10 nieuwe oefenvragen mét uitleg om scherp te blijven? Vul je e-mail in — je krijgt ze meteen toegestuurd."
              : <>Wil je de <b>{foutIds.length} {foutIds.length === 1 ? "vraag" : "vragen"}</b> waar het misging — aangevuld tot 10 — mét uitleg in je mail? Vul je (ouder-)e-mail in.</>}
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
              placeholder="jouw@email.nl"
              style={{
                flex: "1 1 200px", minWidth: 0, boxSizing: "border-box", padding: "12px 14px",
                borderRadius: 10, border: `2px solid ${C.rand}`, background: C.veld, color: C.tekst,
                fontFamily: "'Fredoka', sans-serif", fontSize: 15,
              }}
            />
            <Knop type="submit" disabled={status === "busy"}>
              {status === "busy" ? "Versturen…" : "Stuur het oefenblad"}
            </Knop>
          </div>
          {status === "error" && (
            <div style={{ marginTop: 8, color: C.fout, fontSize: 13 }}>Vul een geldig e-mailadres in.</div>
          )}
          <p style={{ marginTop: 12, fontSize: 12, color: "#7fa3c8", lineHeight: 1.5 }}>
            Je krijgt het oefenblad direct + wekelijks een nieuwe set. Uitschrijven kan altijd met één klik.
          </p>
        </form>
      )}
    </Kaart>
  );
}

function Kaart({ children }) {
  return (
    <div
      style={{
        width: "100%", maxWidth: 480, marginTop: 24,
        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 22, padding: "22px 22px", boxShadow: "0 24px 70px rgba(0,0,0,0.5)",
        fontFamily: "'Fredoka', sans-serif",
      }}
    >
      {children}
    </div>
  );
}

function Knop({ children, ...rest }) {
  return (
    <button
      {...rest}
      style={{
        padding: "13px 22px", borderRadius: 12, border: "none",
        background: "linear-gradient(180deg,#00e676,#00c853)", color: "#04210f",
        fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 16,
        cursor: rest.disabled ? "default" : "pointer", whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}
