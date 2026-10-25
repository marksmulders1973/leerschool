// 📒 Rapport — ouderwets schoolrapport bovenaan Mijn pagina (Mark 24 okt 2026:
// "ik wil wie oefent er houden maar ook een simpele mijn pagina, speciaal met
// een ouderwets rapport, zoals je vroeger op school kreeg").
// Keuzes van Mark: echte cijfers 1-10 (ook een onvoldoende, die staat in rood
// zoals vroeger), altijd de stand van nu, een cijfer pas vanaf 10 vragen per
// vak, en een korte opmerking van de meester onderaan.
// Mark 25 okt: "10 vragen is een begin voor een cijfer, voor een vast cijfer wel 50".
// Het cijfer is het gemiddelde over álle vragen (10× een 5 + 10× een 7 = een 6, zoals
// op school). 10-49 vragen = voorlopig (potlood), vanaf 50 = vast (inkt). Balkje toont
// hoeveel vragen er nog nodig zijn.

import { track } from "../../utils.js";

const MIN_VRAGEN = 10;
const VAST_VRAGEN = 50;
const POTLOOD = "#6b6457";
const PAPIER = "#fbf6e6";
const INKT = "#1f3a93";
const ROOD = "#c0392b";
const DONKER = "#3b2f1e";
const LIJN = "#c9b58f";
const HAND = "'Segoe Print', 'Bradley Hand', 'Comic Neue', cursive";
const SCHOOL = "Georgia, 'Times New Roman', serif";

export function cijferVoor(correct, attempts) {
  if (!attempts || attempts < MIN_VRAGEN) return null;
  return Math.max(1, Math.round((correct / attempts) * 20) / 2);
}
const toonCijfer = (c) => (Number.isInteger(c) ? String(c) : `${Math.floor(c)}½`);

function Balkje({ nu, doel, kleur }) {
  const pct = Math.max(4, Math.min(100, Math.round((nu / doel) * 100)));
  return (
    <span aria-hidden="true" style={{ display: "inline-block", width: 54, height: 6, borderRadius: 3, background: "rgba(160,130,80,0.22)", verticalAlign: "middle", marginRight: 6, overflow: "hidden" }}>
      <span style={{ display: "block", width: pct + "%", height: "100%", background: kleur }} />
    </span>
  );
}

function opmerking(naam, vakken) {
  const metCijfer = vakken.filter((v) => v.cijfer !== null);
  const zonder = vakken.filter((v) => v.cijfer === null);
  if (metCijfer.length === 0) {
    return `Nog geen cijfers, ${naam}. Na ${MIN_VRAGEN} vragen in een vak schrijf ik hier je cijfer op. Begin maar met een kwartiertje!`;
  }
  const best = metCijfer.reduce((a, b) => (b.cijfer > a.cijfer ? b : a));
  const zwak = metCijfer.reduce((a, b) => (b.cijfer < a.cijfer ? b : a));
  let tekst;
  if (zwak.cijfer >= 8) tekst = `Wat een mooi rapport, ${naam}! Ga zo door.`;
  else if (zwak !== best && zwak.cijfer < 6) tekst = `${best.titel} gaat goed. Bij ${zwak.titel.toLowerCase()} valt nog wat te leren: een kwartiertje extra helpt echt.`;
  else tekst = `Je werkt goed mee, ${naam}. ${best.titel} is je sterkste vak.`;
  if (zonder.length > 0) tekst += ` Probeer ook eens ${zonder[0].titel.toLowerCase()}.`;
  return tekst;
}

/** vakken: [{ subj, titel, attempts, correct }] in rapport-volgorde. */
export default function Rapport({ naam, niveauLabel, vakken, onVak }) {
  const rijen = vakken.map((v) => ({ ...v, cijfer: cijferVoor(v.correct, v.attempts) }));
  const datum = new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div style={{
      background: `repeating-linear-gradient(0deg, transparent 0 27px, rgba(160,130,80,0.10) 27px 28px), ${PAPIER}`,
      color: DONKER, borderRadius: 6, padding: "18px 18px 16px", marginBottom: "var(--space-4)",
      border: `3px double ${LIJN}`, boxShadow: "0 6px 18px rgba(0,0,0,0.35)", fontFamily: SCHOOL,
    }}>
      <div style={{ textAlign: "center", borderBottom: `2px solid ${LIJN}`, paddingBottom: 8, marginBottom: 10 }}>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 6 }}>RAPPORT</div>
        <div style={{ fontSize: 12.5, fontStyle: "italic", opacity: 0.8 }}>Leerkwartier · stand van {datum}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", fontSize: 14.5, marginBottom: 10 }}>
        <span>Naam: <span style={{ fontFamily: HAND, color: INKT, fontSize: 17 }}>{naam}</span></span>
        {niveauLabel && (() => {
          const groep = /^groep (\d+)$/i.exec(niveauLabel);
          return <span>{groep ? "Groep" : "Klas"}: <span style={{ fontFamily: HAND, color: INKT, fontSize: 17 }}>{groep ? groep[1] : niveauLabel}</span></span>;
        })()}
      </div>

      {rijen.length === 0 && (
        <div style={{ fontSize: 14, fontStyle: "italic", padding: "6px 0 10px" }}>Nog geen vakken geoefend.</div>
      )}
      {rijen.map((v) => (
        <div key={v.subj} role={onVak ? "button" : undefined} tabIndex={onVak ? 0 : undefined}
          onClick={() => { if (!onVak) return; try { track("mijn_rapport_vak", { vak: v.subj }); } catch { /* */ } onVak(v.subj); }}
          onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && onVak) onVak(v.subj); }}
          title={onVak ? `Oefen ${v.titel}` : undefined}
          style={{ display: "flex", alignItems: "baseline", gap: 6, height: 30, lineHeight: "30px", cursor: onVak ? "pointer" : "default", fontSize: 15.5 }}>
          <span style={{ whiteSpace: "nowrap" }}>{v.titel}</span>
          <span aria-hidden="true" style={{ flex: 1, borderBottom: `2px dotted ${LIJN}`, transform: "translateY(-4px)", minWidth: 16 }} />
          {v.cijfer !== null && (v.attempts || 0) >= VAST_VRAGEN ? (
            <span style={{ fontFamily: HAND, fontSize: 21, lineHeight: "30px", fontWeight: 700, color: v.cijfer < 5.5 ? ROOD : INKT, minWidth: 34, textAlign: "right" }}>
              {toonCijfer(v.cijfer)}
            </span>
          ) : v.cijfer !== null ? (
            <span style={{ display: "flex", alignItems: "center", gap: 2, whiteSpace: "nowrap" }} title={`Voorlopig: nog ${VAST_VRAGEN - v.attempts} vragen tot een vast cijfer`}>
              <Balkje nu={v.attempts} doel={VAST_VRAGEN} kleur={POTLOOD} />
              <span style={{ fontSize: 10.5, fontStyle: "italic", opacity: 0.75, marginRight: 4 }}>voorlopig</span>
              <span style={{ fontFamily: HAND, fontSize: 19, lineHeight: "30px", fontStyle: "italic", color: v.cijfer < 5.5 ? "#a0574e" : POTLOOD, minWidth: 30, textAlign: "right" }}>
                {toonCijfer(v.cijfer)}
              </span>
            </span>
          ) : (
            <span style={{ display: "flex", alignItems: "center", fontSize: 12, fontStyle: "italic", opacity: 0.8, whiteSpace: "nowrap" }}>
              <Balkje nu={v.attempts || 0} doel={MIN_VRAGEN} kleur={INKT} />
              nog {MIN_VRAGEN - (v.attempts || 0)} {MIN_VRAGEN - (v.attempts || 0) === 1 ? "vraag" : "vragen"}
            </span>
          )}
        </div>
      ))}

      <div style={{ borderTop: `2px solid ${LIJN}`, marginTop: 10, paddingTop: 8 }}>
        <div style={{ fontSize: 12.5, fontStyle: "italic", opacity: 0.8, marginBottom: 2 }}>Opmerking:</div>
        <div style={{ fontFamily: HAND, color: INKT, fontSize: 16, lineHeight: 1.55 }}>
          {opmerking(naam, rijen)}
        </div>
        <div style={{ fontFamily: HAND, color: INKT, fontSize: 15, textAlign: "right", marginTop: 4 }}>~ de meester</div>
      </div>
      <div style={{ fontSize: 11, opacity: 0.6, marginTop: 8, textAlign: "center" }}>
        Cijfer = gemiddeld hoeveel je goed had. Vanaf {MIN_VRAGEN} vragen een voorlopig cijfer (potlood), vanaf {VAST_VRAGEN} een vast cijfer (inkt). Tik op een vak om te oefenen.
      </div>
    </div>
  );
}
