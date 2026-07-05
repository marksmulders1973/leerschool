import { useEffect, useState } from "react";
import { getSocialVraag, vraagVanVandaagId } from "../socialVragen.js";
import { track, bronDatumTijd } from "../utils.js";
import DeelVraagKnop from "./DeelVraagKnop.jsx";

// "Doorstroomtoets-vraag van de dag" — een dagelijkse, lichte reden om de app te
// openen. Twee bronnen (Mark 2026-07-02):
//  1. 🗞️ ACTUEEL: een AI-gegenereerde vraag over het NOS Jeugdjournaal van
//     vandaag (/api/actuele-vraag, lazy gegenereerd + feiten-gecheckt).
//  2. 🎯 De vaste /v/-vragenpool als altijd-werkend vangnet.
// De poolvraag verschijnt DIRECT (geen wachten op de API); zodra de actuele
// vraag binnen is, wisselen we alleen als de bezoeker nog niet geantwoord
// heeft. Antwoorden worden per vraag-id bewaard zodat een wissel nooit een
// gegeven antwoord op de verkeerde vraag plakt.

const GROEN = "#00C853";
const GROEN_LICHT = "#69f0ae";
const LETTERS = ["A", "B", "C", "D", "E", "F"];

function renderTekst(s) {
  if (!s) return null;
  return String(s).split(/(\*\*[^*]+\*\*)/g).map((deel, i) =>
    deel.startsWith("**") && deel.endsWith("**")
      ? <strong key={i} style={{ color: "#fff" }}>{deel.slice(2, -2)}</strong>
      : <span key={i}>{deel}</span>
  );
}

function _dagKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Deterministische dag-index zodat iedereen op dezelfde dag dezelfde poolvraag
// ziet. getSocialVraag levert de opties in de vaste, per-id geschudde volgorde.
function _vraagVanVandaag() {
  return getSocialVraag(vraagVanVandaagId());
}

function leesKeuze(key) {
  try {
    const v = localStorage.getItem(key);
    return v != null ? parseInt(v, 10) : null;
  } catch { return null; }
}

export default function VraagVanDeDag() {
  const poolVraag = _vraagVanVandaag();
  const [actueel, setActueel] = useState(null);

  // Actuele nieuwsvraag op de achtergrond ophalen — de eerste bezoeker van de
  // dag triggert daarmee de generatie (lazy, zie api/actuele-vraag.js).
  useEffect(() => {
    let weg = false;
    fetch("/api/actuele-vraag")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (weg || !d?.actueel?.vraag?.options) return;
        setActueel(d.actueel);
        track("vraag_vd_dag_actueel_geladen", { id: d.actueel.vraag.id });
      })
      .catch(() => {});
    return () => { weg = true; };
  }, []);

  const actueelVraag = actueel?.vraag
    ? {
        id: actueel.vraag.id,
        tekst: actueel.vraag.tekst || "",
        truc: actueel.vraag.truc || "",
        vraag: actueel.vraag.vraag,
        options: actueel.vraag.options,
        answer: actueel.vraag.answer,
        uitlegPad: {
          niveaus: {
            basis: actueel.vraag.uitleg,
            ...(actueel.vraag.simpeler ? { simpeler: actueel.vraag.simpeler } : {}),
          },
        },
        actueel: true,
        emoji: actueel.vraag.emoji || "🗞️",
        bronTitel: actueel.bron_titel,
        bronUrl: actueel.bron_url,
        bronDatum: actueel.datum,
        bronCreated: actueel.created_at,
      }
    : null;

  const dag = _dagKey();
  const poolKey = poolVraag ? `lk_vraag_vd_dag_${dag}_${poolVraag.id}` : null;
  const actueelKey = actueelVraag ? `lk_vraag_vd_dag_${dag}_${actueelVraag.id}` : null;

  // Actueel tonen zodra hij er is — behálve als de bezoeker de poolvraag al
  // beantwoordde (dan niet onder zijn neus wisselen).
  const poolBeantwoord = poolKey ? leesKeuze(poolKey) != null : false;
  const actueelBeantwoord = actueelKey ? leesKeuze(actueelKey) != null : false;
  const vraag = actueelVraag && (actueelBeantwoord || !poolBeantwoord) ? actueelVraag : poolVraag;
  const dagKey = vraag === actueelVraag ? actueelKey : poolKey;

  const [gekozen, setGekozen] = useState(() => (dagKey ? leesKeuze(dagKey) : null));
  const [niveau, setNiveau] = useState("basis");

  // Bij vraag-wissel (pool → actueel) hoort de opgeslagen keuze van díé vraag.
  useEffect(() => {
    setGekozen(dagKey ? leesKeuze(dagKey) : null);
    setNiveau("basis");
  }, [dagKey]);

  if (!vraag) return null;

  const beantwoord = gekozen != null;
  const isGoed = beantwoord && gekozen === vraag.answer;

  const kies = (i) => {
    if (gekozen != null) return;
    setGekozen(i);
    try { localStorage.setItem(dagKey, String(i)); } catch {}
    track("vraag_vd_dag_answered", { id: vraag.id, goed: i === vraag.answer, actueel: !!vraag.actueel });
  };

  const niveaus = vraag.uitlegPad?.niveaus || {};
  const NIV = [
    { key: "basis", label: "Basis", t: niveaus.basis },
    { key: "simpeler", label: "Simpeler", t: niveaus.simpeler },
    { key: "nogSimpeler", label: "Nog simpeler", t: niveaus.nogSimpeler },
  ].filter((n) => n.t);

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(0,200,83,0.10), rgba(0,200,83,0.03))",
      border: "1.5px solid rgba(0,200,83,0.30)", borderRadius: 16, padding: "16px 18px",
      fontFamily: "var(--font-body, sans-serif)",
    }}>
      <div style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 800, fontSize: 15, color: GROEN_LICHT, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
        {vraag.actueel ? "🗞️ Actuele vraag van de dag" : "🎯 Doorstroomtoets-vraag van de dag"}
      </div>

      {vraag.actueel ? (
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: "inline-block", background: "rgba(66,165,245,0.15)", border: "1px solid rgba(66,165,245,0.45)", color: "#90caf9", borderRadius: 999, padding: "5px 14px", fontSize: 13, fontWeight: 700 }}>
            {vraag.emoji} uit het nieuws van vandaag
          </div>
          {/* Bronvermelding altijd zichtbaar (Mark 3 jul) — eigen samenvatting +
              nette bronlink; nieuwsfoto's nemen we niet over (auteursrecht). */}
          {vraag.bronTitel && (
            <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.55)", marginTop: 6, lineHeight: 1.4 }}>
              Bron: NOS Jeugdjournaal —{" "}
              {vraag.bronUrl
                ? <a href={vraag.bronUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#90caf9" }}>{vraag.bronTitel}</a>
                : <span>{vraag.bronTitel}</span>}
              {bronDatumTijd(vraag.bronDatum, vraag.bronCreated) ? ` · ${bronDatumTijd(vraag.bronDatum, vraag.bronCreated)}` : ""}
            </div>
          )}
        </div>
      ) : (
        vraag.doelgroep && (
          <div style={{ display: "inline-block", background: "rgba(124,58,237,0.18)", border: "1px solid rgba(167,139,250,0.4)", color: "#c4b5fd", borderRadius: 999, padding: "5px 14px", fontSize: 13, fontWeight: 700, marginBottom: 10 }}>
            {vraag.doelgroep}
          </div>
        )
      )}
      {/* Leestekst bij de actuele vraag: het kind leest eerst het (eigen-woorden)
          nieuwsberichtje en beantwoordt daarna een begrijpend-lezen-vraag erover.
          Het antwoord staat altijd in deze tekst → echt leesbegrip oefenen. */}
      {vraag.tekst && (
        <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "12px 14px", marginBottom: 12, whiteSpace: "pre-line" }}>
          {vraag.tekst}
        </div>
      )}

      <div style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.4, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
        {renderTekst(vraag.vraag)}
      </div>

      {vraag.bronAfbeelding?.src && (
        <img src={vraag.bronAfbeelding.src} alt={vraag.bronAfbeelding.alt || "Afbeelding bij de vraag"} loading="lazy"
          style={{ display: "block", width: "100%", maxWidth: 360, margin: "0 auto 12px", borderRadius: 12 }} />
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {vraag.options.map((o, i) => {
          const onthul = beantwoord;
          let bg = "rgba(255,255,255,0.05)", border = "1px solid rgba(255,255,255,0.14)", kleur = "rgba(255,255,255,0.92)";
          if (onthul && i === vraag.answer) { bg = "rgba(0,200,83,0.16)"; border = `1.5px solid ${GROEN}`; kleur = GROEN_LICHT; }
          else if (onthul && i === gekozen) { bg = "rgba(255,82,82,0.14)"; border = "1.5px solid #ff5252"; kleur = "#ff8a80"; }
          return (
            <button key={i} type="button" onClick={() => kies(i)} disabled={beantwoord}
              style={{
                display: "flex", alignItems: "center", gap: 10, textAlign: "left", padding: "11px 13px",
                borderRadius: 11, background: bg, border, color: kleur, fontSize: 14.5, fontWeight: 700,
                cursor: beantwoord ? "default" : "pointer", minHeight: 46,
              }}>
              <span style={{
                flexShrink: 0, width: 23, height: 23, borderRadius: "50%",
                background: onthul && i === vraag.answer ? GROEN : (onthul && i === gekozen ? "#ff5252" : "rgba(255,255,255,0.12)"),
                color: "#0b1a2e", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800,
              }}>{LETTERS[i]}</span>
              <span style={{ flex: 1 }}>{o}</span>
              {onthul && i === vraag.answer && <span aria-hidden="true">✓</span>}
              {onthul && i === gekozen && i !== vraag.answer && <span aria-hidden="true">✗</span>}
            </button>
          );
        })}
      </div>

      {beantwoord && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 13.5, color: isGoed ? GROEN_LICHT : "#ffcc80", marginBottom: 10 }}>
            {isGoed ? "🎉 Goed! En zo leg je het uit voor wie twijfelt:" : `💭 ${vraag.wrongHints?.[gekozen] || "Bijna! Kijk hieronder hoe het zit."}`}
          </div>
          {vraag.truc && (
            <div style={{ display: "inline-block", background: "rgba(66,165,245,0.15)", border: "1px solid rgba(66,165,245,0.4)", color: "#90caf9", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>
              🔑 Lees-truc: {vraag.truc}
            </div>
          )}
          {NIV.length > 0 && (
            <>
              <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                {NIV.map((n) => (
                  <button key={n.key} type="button" onClick={() => setNiveau(n.key)}
                    style={{
                      padding: "4px 11px", borderRadius: 999,
                      border: niveau === n.key ? `1.5px solid ${GROEN}` : "1px solid rgba(255,255,255,0.16)",
                      background: niveau === n.key ? "rgba(0,200,83,0.15)" : "rgba(255,255,255,0.04)",
                      color: niveau === n.key ? GROEN_LICHT : "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, cursor: "pointer",
                    }}>{n.label}</button>
                ))}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.92)", background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: "11px 13px", borderLeft: `3px solid ${GROEN}` }}>
                {NIV.find((n) => n.key === niveau)?.t}
              </div>
            </>
          )}
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", marginTop: 10, marginBottom: 10 }}>
            ✅ Klaar voor vandaag — morgen staat er een nieuwe vraag klaar.
          </div>
          {/* Mond-tot-mond: alleen bij pool-vragen (de /v/<id>-deellink bestaat
              niet voor actuele nieuws-vragen). */}
          {!vraag.actueel && <DeelVraagKnop id={vraag.id} />}
        </div>
      )}
    </div>
  );
}
