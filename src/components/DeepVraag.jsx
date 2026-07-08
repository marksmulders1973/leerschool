import { useState, useEffect, useRef } from "react";
import { getSocialVraag } from "../socialVragen.js";
import { track, bronDatumTijd } from "../utils.js";
import { BRAND } from "../brand.js";
import GratisLesmateriaal from "./GratisLesmateriaal.jsx";
import DeelVraagKnop from "./DeelVraagKnop.jsx";
import { telAntwoordVoorVriend } from "../features/referral/referral.js";

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

export default function DeepVraag({ id, setPage, onOpenLeerpad, actueelEerst = false }) {
  // 🗞️ /vandaag toont — als die er is — de actuele Jeugdjournaal-vraag i.p.v.
  // de pool-vraag (Mark 2026-07-02: "altijd actueel overkomen"). De poolvraag
  // rendert direct; we wisselen alleen zolang er nog niet geantwoord is.
  const [actueel, setActueel] = useState(null);
  const gekozenRef = useRef(false);
  useEffect(() => {
    if (!actueelEerst) return;
    let weg = false;
    fetch("/api/actuele-vraag")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (weg || gekozenRef.current || !d?.actueel?.vraag?.options) return;
        const v = d.actueel.vraag;
        setActueel({
          id: v.id,
          tekst: v.tekst || "",
          truc: v.truc || "",
          vraag: v.vraag,
          options: v.options,
          answer: v.answer,
          emoji: v.emoji || "🗞️",
          actueel: true,
          bronTitel: d.actueel.bron_titel,
          bronUrl: d.actueel.bron_url,
          bronDatum: d.actueel.datum,
          bronCreated: d.actueel.created_at,
          uitlegPad: { niveaus: { basis: v.uitleg, ...(v.simpeler ? { simpeler: v.simpeler } : {}) } },
        });
      })
      .catch(() => {});
    return () => { weg = true; };
  }, [actueelEerst]);

  const vraag = actueel || getSocialVraag(id);
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
    gekozenRef.current = true;
    setGekozen(i);
    telAntwoordVoorVriend(); // 🤝 telt mee voor vriend-activatie (?vriend=CODE)
    track("deeplink_answer", { id: String(vraag.id || id).slice(0, 40), goed: i === vraag.answer, actueel: !!vraag.actueel });
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

      {/* Compact boven de vouw (trechter-fix 2 jul): 27 van de 28 bezoekers
          antwoordden niet — de foto van 360px duwde de antwoordknoppen op een
          telefoon uit beeld. Alles strakker zodat vraag + A/B/C/D samen op één
          scherm passen; de reveal-video (ná antwoord) mag wél groot. */}
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: GROEN_LICHT, margin: "12px 0 6px" }}>
        Geef hier je antwoord 👇
      </div>

      {vraag.actueel && (
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: "inline-block", background: "rgba(66,165,245,0.15)", border: "1px solid rgba(66,165,245,0.45)", color: "#90caf9", borderRadius: 999, padding: "5px 14px", fontSize: 13, fontWeight: 700 }}>
            {vraag.emoji} 🗞️ uit het nieuws van vandaag
          </div>
          {/* Bronvermelding altijd zichtbaar (Mark 3 jul): we vertellen het
              nieuwsfeit na met eigen woorden en linken netjes naar de bron.
              Nieuwsfoto's nemen we NIET over (auteursrecht). */}
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
      )}
      {vraag.doelgroep && (
        <div style={{ display: "inline-block", background: "rgba(124,58,237,0.18)", border: "1px solid rgba(167,139,250,0.4)", color: "#c4b5fd", borderRadius: 999, padding: "4px 12px", fontSize: 12.5, fontWeight: 700, marginBottom: 8 }}>
          {vraag.doelgroep}
        </div>
      )}
      {/* Leestekst bij een begrijpend-lezen-vraag: eerst het (eigen-woorden)
          berichtje lezen, dan de vraag erover. Het antwoord staat in de tekst. */}
      {vraag.tekst && (
        <div style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "11px 13px", marginBottom: 10, whiteSpace: "pre-line" }}>
          {renderTekst(vraag.tekst)}
        </div>
      )}

      <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.35, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
        {renderTekst(vraag.vraag)}
      </div>

      {/* Bron-beeld (Mark 2026-06-14): stille foto bij de vraag; zodra je geantwoord
          hebt (gekozen != null) speelt de reveal-video — bv. de auto van rechts. */}
      {vraag.bronAfbeelding?.src && (
        <div style={{ marginBottom: 12, borderRadius: 12, overflow: "hidden", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}>
          {vraag.bronVideo && gekozen != null ? (
            <video src={vraag.bronVideo} autoPlay muted playsInline loop
              style={{ width: "100%", maxHeight: 320, objectFit: "contain", display: "block" }} />
          ) : (
            <img src={vraag.bronAfbeelding.src} alt={vraag.bronAfbeelding.alt || ""} loading="lazy"
              style={{ width: "100%", maxHeight: 180, objectFit: "contain", display: "block" }} />
          )}
        </div>
      )}

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
                padding: "12px 14px", borderRadius: 12, background: bg, border, color: kleur,
                fontFamily: "var(--font-body, sans-serif)", fontSize: 15.5, fontWeight: 700,
                cursor: gekozen == null ? "pointer" : "default", transition: "background 0.15s, border 0.15s", minHeight: 48,
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

      {/* Lees-truc: benoemt de leesstrategie die je bij deze vraag oefent. */}
      {beantwoord && vraag.truc && (
        <div style={{ display: "inline-block", background: "rgba(66,165,245,0.15)", border: "1px solid rgba(66,165,245,0.4)", color: "#90caf9", borderRadius: 999, padding: "5px 13px", fontSize: 12.5, fontWeight: 700, marginBottom: 12 }}>
          🔑 Lees-truc: {vraag.truc}
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
          <GratisLesmateriaal
            source="deeplink-vraag"
            compact
            title={<><span aria-hidden="true">📘</span> Gratis oefenpakket + elke week een oefenvraag</>}
            onPrintPakket={() => { track("deeplink_cta", { id: String(vraag.id || id).slice(0, 40), naar: "oefenpakket" }); setPage && setPage("oefenpakket"); }}
          />
        </div>
      )}

      {/* CTA-nudge na antwoord */}
      {beantwoord && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16 }}>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", marginBottom: 12, textAlign: "center", lineHeight: 1.5 }}>
            {gekozen === vraag.answer
              ? <>✅ <strong style={{ color: "#fff" }}>Goed gedaan!</strong> Ben jij klaar voor de Doorstroomtoets? Test het hieronder.</>
              : <>Geen zorgen — <strong style={{ color: "#fff" }}>zó</strong> snap je 'm wél. Leer dit stap voor stap:</>}
          </div>
          {/* Volgorde op maat (Mark 2026-06-14, /v/-trechter-fix): bij een goed
              antwoord eerst de oefentoets (ben je er klaar voor?), bij een fout
              antwoord eerst het leerpad (leer het stap voor stap). Sluit de USP-lus. */}
          {(() => {
            const goed = gekozen === vraag.answer;
            const leerpadBtn = (vraag.leerpadLink && onOpenLeerpad) ? (
              <button type="button" key="lp"
                onClick={() => { track("deeplink_cta", { id: String(vraag.id || id).slice(0, 40), naar: "leerpad", pad: vraag.leerpadLink.id }); onOpenLeerpad(vraag.leerpadLink.id); }}
                style={{
                  display: "block", width: "100%", marginBottom: 10, padding: "13px 14px",
                  background: "rgba(0,200,83,0.10)", border: `1.5px solid ${GROEN}`, borderRadius: 12,
                  color: GROEN_LICHT, fontFamily: "var(--font-body, sans-serif)", fontSize: 15, fontWeight: 800, cursor: "pointer",
                }}>
                📚 Leer dit helemaal: {vraag.leerpadLink.title} →
              </button>
            ) : null;
            const toetsBtn = (
              <div key="toets" style={{ marginBottom: 10 }}>
                <PrimaryCTA onClick={() => { track("deeplink_cta", { id: String(vraag.id || id).slice(0, 40), naar: "toets" }); setPage && setPage("cito-leerpad-toets"); }}>
                  Doe de gratis oefentoets →
                </PrimaryCTA>
              </div>
            );
            return goed ? [toetsBtn, leerpadBtn] : [leerpadBtn, toetsBtn].filter(Boolean);
          })()}
          {/* Mond-tot-mond: deel-knop sluit de groei-bal (bezoek → nieuwe bezoeker). */}
          <div style={{ marginTop: 10 }}>
            {!vraag.actueel && <DeelVraagKnop id={id} />}
          </div>
          <button type="button"
            onClick={() => { track("deeplink_cta", { id: String(vraag.id || id).slice(0, 40), naar: "home" }); setPage && setPage("home"); }}
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
