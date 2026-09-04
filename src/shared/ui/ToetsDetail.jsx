// 📝 "Wat heeft mijn kind bij deze toets precies gedaan?" — per vraag
// goed / fout / overgeslagen, met wat het kind koos en wat goed was.
//
// Mark 4 sep 2026: "bouw de toets-kant ook, per vraag goed/fout/overgeslagen".
// De data bestond al: sinds v527 (1 sep) schrijft elke afgeronde toets een
// `detail`-array naar leaderboard via bouwToetsDetail() — voor de
// oefen-Doorstroomtoets én gewone toetsen (quizDetail → bouwToetsDetail).
// Alleen las het ouder-overzicht die kolom nooit. Dit component maakt 'm
// zichtbaar; de datalaag hoefde niet te veranderen.
//
// Vorm van één element:
//   { v: vraagtekst, a: gekozen antwoord | null, j: juiste antwoord,
//     goed: bool, ond: onderwerp | null, pad: leerpad-id | null }
// a == null betekent: niet beantwoord. In een toets kán je een vraag laten
// staan — anders dan in een leerpad. Dat is dus het echte "overgeslagen".

const KLEUR = {
  goed: "#69f0ae",
  fout: "#ff8a80",
  over: "rgba(255,255,255,0.38)",
};

function status(item) {
  if (item?.a == null) return "over";
  return item?.goed ? "goed" : "fout";
}

/** Telt goed/fout/overgeslagen — ook bruikbaar voor een samenvattingsregel elders. */
export function telToets(detail) {
  const t = { goed: 0, fout: 0, over: 0, totaal: 0 };
  for (const it of Array.isArray(detail) ? detail : []) {
    t[status(it)] += 1;
    t.totaal += 1;
  }
  return t;
}

function VraagRegel({ nummer, item, onOefen }) {
  const s = status(item);
  const kleur = KLEUR[s];
  const icoon = s === "goed" ? "✓" : s === "fout" ? "✗" : "○";
  const label = s === "goed" ? "goed" : s === "fout" ? "fout" : "overgeslagen";
  return (
    <div style={{ padding: "5px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
        <span style={{ color: kleur, fontWeight: 700, fontSize: 12, width: 12, flexShrink: 0, textAlign: "center" }} aria-hidden="true">
          {icoon}
        </span>
        <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.68)", flex: 1, minWidth: 0, lineHeight: 1.45 }}>
          {nummer}. {item?.v || "(vraag zonder tekst)"}
        </span>
        <span style={{ fontSize: 10.5, color: kleur, flexShrink: 0, fontWeight: 700 }}>{label}</span>
      </div>
      {/* Bij fout: wat koos het kind, en wat was goed — dát is waar een ouder
          het gesprek mee begint. Bij goed alleen het antwoord, kort. */}
      {s === "fout" && (
        <div style={{ marginLeft: 20, marginTop: 3, fontSize: 11, lineHeight: 1.5 }}>
          <span style={{ color: "rgba(255,138,128,0.85)" }}>koos: {item.a}</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}> · </span>
          <span style={{ color: "rgba(105,240,174,0.85)" }}>goed was: {item.j}</span>
          {item.pad && onOefen && (
            <>
              <span style={{ color: "rgba(255,255,255,0.3)" }}> · </span>
              <button
                onClick={() => onOefen(item.pad)}
                style={{ background: "none", border: "none", padding: 0, color: "#ff9fb2", fontSize: 11, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}
              >
                oefen dit
              </button>
            </>
          )}
        </div>
      )}
      {s === "over" && item?.j && (
        <div style={{ marginLeft: 20, marginTop: 3, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
          goed was: {item.j}
        </div>
      )}
      {s === "goed" && item?.j && (
        <div style={{ marginLeft: 20, marginTop: 2, fontSize: 10.5, color: "rgba(255,255,255,0.32)" }}>
          antwoord: {item.j}
        </div>
      )}
      {item?.ond && (
        <div style={{ marginLeft: 20, marginTop: 2, fontSize: 10, color: "rgba(255,255,255,0.28)" }}>{item.ond}</div>
      )}
    </div>
  );
}

/**
 * @param {Array}    detail   leaderboard.detail
 * @param {string}   naam     naam van het kind/de leerling
 * @param {Function} onOefen  (padId) => void — opent het leerpad bij een fout (optioneel)
 */
export default function ToetsDetail({ detail, naam = "je kind", onOefen }) {
  if (!Array.isArray(detail) || detail.length === 0) {
    return (
      <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)", padding: "8px 0", lineHeight: 1.5 }}>
        Van deze toets is niet per vraag bewaard hoe het ging — dat doen we pas
        sinds 1 september. Bij een nieuwe toets zie je hier elke vraag.
      </div>
    );
  }
  const t = telToets(detail);
  return (
    <div style={{ marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 8 }}>
      <div style={{ display: "flex", gap: 12, fontSize: 11.5, fontWeight: 700, marginBottom: 6 }}>
        <span style={{ color: KLEUR.goed }}>✓ {t.goed} goed</span>
        <span style={{ color: KLEUR.fout }}>✗ {t.fout} fout</span>
        <span style={{ color: KLEUR.over }}>○ {t.over} overgeslagen</span>
      </div>
      {t.over > 0 && (
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 6, lineHeight: 1.5 }}>
          {naam} liet {t.over === 1 ? "één vraag" : `${t.over} vragen`} open — bij de echte Doorstroomtoets telt een open vraag als fout, dus gokken is altijd beter dan overslaan.
        </div>
      )}
      <div>
        {detail.map((item, i) => (
          <VraagRegel key={i} nummer={i + 1} item={item} onOefen={onOefen} />
        ))}
      </div>
    </div>
  );
}
