import { useState, useEffect, useRef } from "react";
import { getSocialVraag } from "../socialVragen.js";
import { track } from "../utils.js";
import { BRAND } from "../brand.js";
import GratisLesmateriaal from "./GratisLesmateriaal.jsx";
import DeelVraagKnop from "./DeelVraagKnop.jsx";

/**
 * DeepVraag — landingspagina voor de social-deep-link /v/<id>.
 * De kijker komt van een social-post ("geef hier je antwoord") en belandt
 * direct op die vraag, nu interactief: kies A/B/C/D → denkprikkel + 3-niveau-
 * uitleg → nudge naar de gratis oefentoets. Antwoorden kan zónder account
 * (geen drempel vóór de waarde). Tracking is anoniem/eerstepartij (AVG-ok).
 * Toegevoegd 2026-06-04 (Mark's deep-link-trechter-concept).
 */

const GROEN = "#00C853";
const GROEN_LICHT = "#69f0ae";
const LETTERS = ["A", "B", "C", "D", "E", "F"];

// Mini-markdown: **vet** → <strong>. Houdt de component zelfstandig.
function renderTekst(s) {
  if (!s) return null;
  return s.split(/(\*\*[^*]+\*\*)/g).map((deel, i) => {
    if (deel.startsWith("**") && deel.endsWith("**")) {
      return <strong key={i} style={{ color: "#fff" }}>{deel.slice(2, -2)}</strong>;
    }
    return <span key={i}>{deel}</span>;
  });
}

export default function DeepVraag({ id, setPage, onOpenLeerpad }) {
  const vraag = getSocialVraag(id);
  const [gekozen, setGekozen] = useState(null);
  const [niveau, setNiveau] = useState("basis");
  // Al aangemeld voor de gratis lesmateriaal-mail? Dan het opt-in-blok niet tonen.
  const [emailAl] = useState(() => {
    try { return !!localStorage.getItem("lk_lesmateriaal_aangemeld"); } catch { return false; }
  });

  // deeplink_open exact 1× per id vuren. Vroeger hing dit aan [id, vraag];
  // `vraag` (uit getSocialVraag) krijgt bij elke re-render een nieuwe
  // referentie, waardoor het event opnieuw vuurde bij o.a. een antwoord-klik
  // (~2× per sessie in de cijfers). Ref-guard op id lost dat op.
  const openGetrackt = useRef(null);
  useEffect(() => {
    if (openGetrackt.current === id) return;
    openGetrackt.current = id;
    track("deeplink_open", { id: String(id || "").slice(0, 40), gevonden: !!vraag });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Onbekende id → vriendelijke fallback met CTA.
  if (!vraag) {
    return (
      <div style={wrap}>
        <Brand />
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <h1 style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>
            Deze vraag staat klaar in de app 🎓
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, margin: "0 0 20px" }}>
            Oefen meteen verder met échte Doorstroomtoets-vragen — mét uitleg op 3 niveaus.
          </p>
          <PrimaryCTA onClick={() => { track("deeplink_cta", { id: "fallback", naar: "toets" }); setPage && setPage("cito-leerpad-toets"); }}>
            Doe de gratis oefentoets →
          </PrimaryCTA>
        </div>
      </div>
    );
  }

  const optie = gekozen != null ? vraag.options[gekozen] : null;
  const isFout = gekozen != null && gekozen !== vraag.answer;
  const isGoed = gekozen != null && gekozen === vraag.answer;
  const beantwoord = gekozen != null;

  const kies = (i) => {
    if (gekozen != null) return;
    setGekozen(i);
    track("deeplink_answer", { id: String(id).slice(0, 40), goed: i === vraag.answer });
  };

  const niveaus = vraag.uitlegPad?.niveaus || {};
  const NIV = [
    { key: "basis", label: "Basis", t: niveaus.basis },
    { key: "simpeler", label: "Simpeler", t: niveaus.simpeler },
    { key: "nogSimpeler", label: "Nog simpeler", t: niveaus.nogSimpeler },
  ].filter((n) => n.t);

  return (
    <div style={wrap}>
      <Brand />

      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: GROEN_LICHT, margin: "18px 0 8px" }}>
        Geef hier je antwoord 👇
      </div>

      <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, color: "rgba(255,255,255,0.95)", marginBottom: 16 }}>
        {renderTekst(vraag.vraag)}
      </div>

      {/* Opties A/B/C/D */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: beantwoord ? 14 : 0 }}>
        {vraag.options.map((o, i) => {
          const gekozenDeze = gekozen === i;
          const onthul = gekozen != null;
          let bg = "rgba(255,255,255,0.05)", border = "1px solid rgba(255,255,255,0.14)", kleur = "rgba(255,255,255,0.92)";
          if (onthul && i === vraag.answer) { bg = "rgba(0,200,83,0.16)"; border = `1.5px solid ${GROEN}`; kleur = GROEN_LICHT; }
          else if (gekozenDeze) { bg = "rgba(255,82,82,0.14)"; border = "1.5px solid #ff5252"; kleur = "#ff8a80"; }
          return (
            <button key={i} type="button" onClick={() => kies(i)} disabled={gekozen != null}
              style={{
                display: "flex", alignItems: "center", gap: 12, textAlign: "left",
                padding: "14px 16px", borderRadius: 12, background: bg, border, color: kleur,
                fontFamily: "var(--font-body, sans-serif)", fontSize: 16, fontWeight: 700,
                cursor: gekozen == null ? "pointer" : "default", transition: "background 0.15s, border 0.15s", minHeight: 52,
              }}>
              <span style={{
                flexShrink: 0, width: 26, height: 26, borderRadius: "50%",
                background: onthul && i === vraag.answer ? GROEN : (gekozenDeze ? "#ff5252" : "rgba(255,255,255,0.12)"),
                color: "#0b1a2e", display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 800,
              }}>{LETTERS[i]}</span>
              <span style={{ flex: 1 }}>{o}</span>
              {onthul && i === vraag.answer && <span aria-hidden="true">✓</span>}
              {gekozenDeze && i !== vraag.answer && <span aria-hidden="true">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Denkprikkel of felicitatie */}
      {isFout && (
        <div style={{ fontSize: 14, color: "#ffcc80", background: "rgba(255,167,38,0.10)", border: "1px solid rgba(255,167,38,0.30)", borderRadius: 10, padding: "10px 14px", marginBottom: 14 }}>
          💭 {vraag.wrongHints?.[gekozen] || "Bijna! Kijk nog eens goed naar de vraag."}
        </div>
      )}
      {isGoed && (
        <div style={{ fontSize: 14, color: GROEN_LICHT, background: "rgba(0,200,83,0.10)", border: `1px solid rgba(0,200,83,0.30)`, borderRadius: 10, padding: "10px 14px", marginBottom: 14 }}>
          🎉 Goed gedaan! En zo leggen we het uit voor wie twijfelde:
        </div>
      )}

      {/* 3-niveau-uitleg */}
      {beantwoord && NIV.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
            {NIV.map((n) => {
              const actief = niveau === n.key;
              return (
                <button key={n.key} type="button" onClick={() => setNiveau(n.key)}
                  style={{
                    padding: "5px 12px", borderRadius: 999,
                    border: actief ? `1.5px solid ${GROEN}` : "1px solid rgba(255,255,255,0.16)",
                    background: actief ? "rgba(0,200,83,0.15)" : "rgba(255,255,255,0.04)",
                    color: actief ? GROEN_LICHT : "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-body, sans-serif)", fontSize: 12.5, fontWeight: 700, cursor: "pointer",
                  }}>{n.label}</button>
              );
            })}
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.92)", background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: "13px 15px", borderLeft: `3px solid ${GROEN}` }}>
            {NIV.find((n) => n.key === niveau)?.t}
          </div>
        </div>
      )}

      {/* E-mail-opt-in op het moment van hoogste interesse: net na de uitleg,
          vóór de CTA. De USP is nu bewezen (3-niveau-uitleg werkte), dus dít is
          de sterkste plek om de gratis-lesmateriaal-mail aan te bieden. */}
      {beantwoord && !emailAl && (
        <div style={{ marginBottom: 18 }}>
          <GratisLesmateriaal source="deeplink-vraag" compact />
        </div>
      )}

      {/* CTA-nudge na antwoord */}
      {beantwoord && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16 }}>
          <div style={{ fontSize: 14.5, color: "rgba(255,255,255,0.85)", marginBottom: 12, textAlign: "center" }}>
            Dit zit achter <strong style={{ color: "#fff" }}>élke</strong> vraag in {BRAND.name}. In 2026 helemaal gratis.
          </div>
          {/* Leerpad-link: sluit de USP-lus (vraag → uitleg → volledig leerpad). */}
          {vraag.leerpadLink && onOpenLeerpad && (
            <button type="button"
              onClick={() => { track("deeplink_cta", { id: String(id).slice(0, 40), naar: "leerpad", pad: vraag.leerpadLink.id }); onOpenLeerpad(vraag.leerpadLink.id); }}
              style={{
                display: "block", width: "100%", marginBottom: 10, padding: "13px 14px",
                background: "rgba(0,200,83,0.10)", border: `1.5px solid ${GROEN}`, borderRadius: 12,
                color: GROEN_LICHT, fontFamily: "var(--font-body, sans-serif)", fontSize: 15, fontWeight: 800, cursor: "pointer",
              }}>
              📚 Leer dit helemaal: {vraag.leerpadLink.title} →
            </button>
          )}
          <PrimaryCTA onClick={() => { track("deeplink_cta", { id: String(id).slice(0, 40), naar: "toets" }); setPage && setPage("cito-leerpad-toets"); }}>
            Doe de gratis oefentoets →
          </PrimaryCTA>
          {/* Mond-tot-mond: deel-knop sluit de groei-bal (bezoek → nieuwe bezoeker). */}
          <div style={{ marginTop: 10 }}>
            <DeelVraagKnop id={id} />
          </div>
          <button type="button"
            onClick={() => { track("deeplink_cta", { id: String(id).slice(0, 40), naar: "home" }); setPage && setPage("home"); }}
            style={{
              display: "block", width: "100%", marginTop: 10, padding: "10px",
              background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12,
              color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body, sans-serif)", fontSize: 13.5, fontWeight: 600, cursor: "pointer",
            }}>
            Ontdek {BRAND.name}
          </button>
        </div>
      )}
    </div>
  );
}

const wrap = {
  minHeight: "100dvh", maxWidth: 560, margin: "0 auto",
  padding: "28px 18px 40px", boxSizing: "border-box",
  fontFamily: "var(--font-body, -apple-system, sans-serif)",
};

function Brand() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg viewBox="0 0 100 100" style={{ width: 30, height: 30 }} aria-hidden="true">
        <path d="M50,6 A44,44 0 0,1 94,50 L50,50 Z" fill="#00C853" />
      </svg>
      <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: 20, fontWeight: 800, color: "#fff" }}>
        {BRAND.name}
      </span>
    </div>
  );
}

function PrimaryCTA({ onClick, children }) {
  return (
    <button type="button" onClick={onClick}
      style={{
        display: "block", width: "100%", padding: "14px",
        background: "linear-gradient(135deg, #00C853, #00a846)", border: "none", borderRadius: 12,
        color: "#fff", fontFamily: "var(--font-body, sans-serif)", fontSize: 16, fontWeight: 800,
        cursor: "pointer", boxShadow: "0 4px 16px rgba(0,200,83,0.35)",
      }}>
      {children}
    </button>
  );
}
