// 🙋 Klassikaal op het digibord (Mark 25 sep 2026): "de juf zegt: wie kiest antwoord A? 10 kinderen
// steken hun hand op, wie B? 5 kinderen… De juf geeft de aantallen in achter elk antwoord en dan:
// 74% van de klas had deze vraag goed. En dat de juf de vragen zelf kan kiezen, op volgorde kan
// zetten en evt. uitprinten." Geen accounts voor kinderen: de juf telt handen (of A-B-C-D-kaarten).
// Werkt op een toets uit "Mijn toetsen" (vragen: { q, options, answer, explanation }).
// Uitslagen blijven op dit apparaat (localStorage lk_digibord_uitslagen) voor vergelijken later.
import { useMemo, useState } from "react";
import { track } from "../../utils.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];
const MAX_KLAS = 40;
const UITSLAG_KEY = "lk_digibord_uitslagen";
const KLEUR_GOED = "#00c853";
const KLEUR_FOUT = "#ff7043";

const pct = (goed, totaal) => (totaal > 0 ? Math.round((goed / totaal) * 100) : 0);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function bewaarUitslag(quiz, rijen) {
  try {
    const alle = JSON.parse(localStorage.getItem(UITSLAG_KEY) || "[]");
    alle.unshift({ quizId: quiz?.id || null, titel: quiz?.title || quiz?.topic || "Toets", datum: new Date().toISOString(), rijen });
    localStorage.setItem(UITSLAG_KEY, JSON.stringify(alle.slice(0, 50)));
  } catch { /* opslaan is een extraatje */ }
}

function vorigeUitslag(quiz) {
  try {
    const alle = JSON.parse(localStorage.getItem(UITSLAG_KEY) || "[]");
    return alle.find((u) => u.quizId && u.quizId === quiz?.id) || null;
  } catch { return null; }
}

// Kaartenvel (Mark 25 sep 2026: "ieder kind 4 kaartjes met de letters a, b, c, d, zodat ze die
// ook zo kunnen uitprinten"): één A4 per kind met vier grote kaartjes om uit te knippen.
// Wit met gekleurde rand = weinig inkt; de juf kiest het aantal kinderen en print één set.
function printKaarten(aantal) {
  const w = window.open("", "_blank");
  if (!w) return;
  const n = Math.max(1, Math.min(MAX_KLAS, aantal || 1));
  const kleur = ["#1e88e5", "#43a047", "#fb8c00", "#8e24aa"];
  const vel = `<div class="vel">${["A", "B", "C", "D"].map((l, i) =>
    `<div class="kaart" style="border-color:${kleur[i]};color:${kleur[i]}"><span>${l}</span><small>Leerkwartier</small></div>`).join("")}</div>`;
  w.document.write(`<!doctype html><html lang="nl"><head><meta charset="utf-8"><title>A-B-C-D-kaartjes (${n}×)</title>
  <style>@page{size:A4 portrait;margin:8mm}*{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif}
  .vel{width:194mm;height:279mm;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;page-break-after:always;border:1px dashed #999}
  .vel:last-child{page-break-after:auto}
  .kaart{position:relative;margin:5mm;border:6mm solid;border-radius:8mm;display:flex;align-items:center;justify-content:center;background:#fff}
  .kaart span{font-size:78mm;font-weight:900;line-height:1}
  .kaart small{position:absolute;bottom:3mm;font-size:9pt;color:#777}
  .vel{background-image:linear-gradient(#999,#999),linear-gradient(#999,#999);background-size:100% 1px,1px 100%;background-position:center,center;background-repeat:no-repeat}</style></head><body>
  ${Array.from({ length: n }, () => vel).join("")}
  <script>setTimeout(function(){window.print()},300)</script></body></html>`);
  w.document.close();
  track("digibord_kaarten_print", { aantal: n });
}

function printUitslag(titel, rijen) {
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(`<!doctype html><html lang="nl"><head><meta charset="utf-8"><title>Uitslag ${esc(titel)}</title>
  <style>body{font-family:Arial,sans-serif;margin:24px;color:#111}h1{font-size:20px}table{border-collapse:collapse;width:100%}
  td,th{border:1px solid #ccc;padding:6px 8px;font-size:13px;text-align:left;vertical-align:top}th{background:#f2f2f2}</style></head><body>
  <h1>Uitslag: ${esc(titel)} — ${new Date().toLocaleDateString("nl-NL")}</h1>
  <table><tr><th>#</th><th>Vraag</th><th>Goed antwoord</th><th>Handen per antwoord</th><th>% goed</th></tr>
  ${rijen.map((r) => `<tr><td>${r.nr}</td><td>${esc(r.q)}</td><td>${LETTERS[r.answer]}. ${esc(r.options[r.answer])}</td>
  <td>${r.counts.map((c, i) => `${LETTERS[i]}: ${c}`).join(" · ")}</td><td><b>${r.pct}%</b></td></tr>`).join("")}
  </table><p style="font-size:12px;color:#555">Leerkwartier — leerkwartier.app</p>
  <script>setTimeout(function(){window.print()},300)</script></body></html>`);
  w.document.close();
}

const S = {
  wrap: { maxWidth: 1100, margin: "0 auto", padding: "16px 20px 60px", color: "var(--color-text)", fontFamily: "var(--font-body)" },
  kop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 14, flexWrap: "wrap" },
  titel: { margin: 0, fontFamily: "var(--font-display)", fontSize: 24 },
  knop: { padding: "12px 20px", borderRadius: 12, border: "none", cursor: "pointer", fontWeight: 800, fontSize: 17, fontFamily: "var(--font-display)", background: "var(--color-brand-primary)", color: "#0b1224" },
  knopLicht: { padding: "10px 16px", borderRadius: 12, cursor: "pointer", fontWeight: 700, fontSize: 15, fontFamily: "var(--font-body)", background: "var(--color-bg-surface)", color: "var(--color-text)", border: "1px solid var(--color-border-soft)" },
  kaart: { background: "var(--color-bg-surface)", border: "1px solid var(--color-border-soft)", borderRadius: 16, padding: "18px 20px" },
  mini: { width: 38, height: 38, borderRadius: 10, border: "1px solid var(--color-border-soft)", background: "var(--color-bg-elevated, #1b2440)", color: "var(--color-text)", fontSize: 18, fontWeight: 800, cursor: "pointer" },
};

export default function DigibordKlassikaal({ quiz, vragen: startVragen, onStop }) {
  const [vragen, setVragen] = useState(() => (startVragen || []).filter((v) => v && Array.isArray(v.options) && v.options.length >= 2));
  const [fase, setFase] = useState("klaarzetten"); // klaarzetten → vraag → klaar
  const [idx, setIdx] = useState(0);
  const [tellingen, setTellingen] = useState({}); // idx → [aantallen per antwoord]
  const [toon, setToon] = useState(false);
  const [aantalKinderen, setAantalKinderen] = useState(28);
  const titel = quiz?.title || quiz?.topic || "Toets";
  const vorige = useMemo(() => vorigeUitslag(quiz), [quiz]);

  const verplaats = (i, d) => setVragen((l) => { const n = l.slice(); const j = i + d; if (j < 0 || j >= n.length) return l; [n[i], n[j]] = [n[j], n[i]]; return n; });
  const haalWeg = (i) => setVragen((l) => l.filter((_, k) => k !== i));

  const start = (lijst = vragen) => {
    setVragen(lijst); setTellingen({}); setIdx(0); setToon(false); setFase("vraag");
    track("digibord_start", { vragen: lijst.length });
    try { window.scrollTo({ top: 0 }); } catch { /* */ }
  };

  const v = vragen[idx];
  const tel = tellingen[idx] || (v ? v.options.map(() => 0) : []);
  const totaal = tel.reduce((a, b) => a + b, 0);
  // Altijd vanaf de actuele stand rekenen: snel achter elkaar op + tikken mag geen tik verliezen.
  const pas = (i, f) => setTellingen((t) => { const rij = (t[idx] || v.options.map(() => 0)).slice(); rij[i] = Math.max(0, Math.min(MAX_KLAS, f(rij[i] || 0))); return { ...t, [idx]: rij }; });
  const zet = (i, n) => pas(i, () => n);

  const rijen = vragen.map((vr, i) => {
    const c = tellingen[i] || vr.options.map(() => 0);
    const t = c.reduce((a, b) => a + b, 0);
    return { nr: i + 1, q: vr.q, options: vr.options, answer: vr.answer, counts: c, totaal: t, pct: pct(c[vr.answer] || 0, t) };
  });

  const toonUitslag = () => {
    setToon(true);
    track("digibord_vraag", { nr: idx + 1, handen: totaal, pct: pct(tel[v.answer] || 0, totaal) });
  };
  const volgende = () => {
    if (idx + 1 < vragen.length) { setIdx(idx + 1); setToon(false); try { window.scrollTo({ top: 0 }); } catch { /* */ } return; }
    const beantwoord = rijen.filter((r) => r.totaal > 0);
    bewaarUitslag(quiz, beantwoord);
    track("digibord_klaar", { vragen: vragen.length, gemiddeld: beantwoord.length ? Math.round(beantwoord.reduce((a, r) => a + r.pct, 0) / beantwoord.length) : 0 });
    setFase("klaar");
  };

  // ── 1. Klaarzetten: volgorde, weghalen, kaarten printen ──
  if (fase === "klaarzetten") {
    return (
      <div style={S.wrap}>
        <div style={S.kop}>
          <h2 style={S.titel}>🙋 Klassikaal op het digibord · {titel}</h2>
          <button style={S.knopLicht} onClick={onStop}>← Terug</button>
        </div>
        <div style={{ ...S.kaart, marginBottom: 14, fontSize: 16, lineHeight: 1.55 }}>
          <strong>Zo werkt het:</strong> zet dit scherm op het <strong>digibord</strong>. Lees de vraag voor. De kinderen houden hun kaartje omhoog (of steken hun hand op bij <em>"Wie kiest A?"</em>). Tel en tik het aantal in bij A, dan bij B, C en D. Tik op <strong>Toon uitslag</strong>: je ziet meteen hoeveel procent van de klas het goed had. De kinderen hebben geen account nodig.
        </div>
        <div style={{ ...S.kaart, marginBottom: 14, fontSize: 15.5, lineHeight: 1.55 }}>
          <strong>Beter dan handen: A-B-C-D-kaartjes.</strong> Ieder kind krijgt vier kaartjes met A, B, C en D. Bij elke vraag houdt iedereen <strong>tegelijk</strong> één kaartje omhoog. Zo zie je in één keer wat de klas denkt, en kijken kinderen minder bij elkaar af dan bij handen opsteken.
          <ol style={{ margin: "8px 0 10px", paddingLeft: 22 }}>
            <li>Vul in hoeveel kinderen er in je klas zitten en print: één A4 per kind.</li>
            <li>Laat de kinderen de vier kaartjes langs de stippellijn uitknippen.</li>
            <li>Vraag: <em>"Kaartje omhoog!"</em> Tel per letter en tik de aantallen in.</li>
          </ol>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <label style={{ fontSize: 15 }}>Aantal kinderen:{" "}
              <input type="number" min={1} max={MAX_KLAS} value={aantalKinderen} onChange={(e) => setAantalKinderen(Math.max(1, Math.min(MAX_KLAS, parseInt(e.target.value, 10) || 1)))}
                style={{ width: 70, padding: "6px 8px", fontSize: 16, borderRadius: 8, border: "1px solid var(--color-border-soft)", background: "var(--color-bg-base, #0f1729)", color: "var(--color-text)" }} />
            </label>
            <button style={S.knopLicht} onClick={() => printKaarten(aantalKinderen)}>🖨️ Print {aantalKinderen} kaartenvellen</button>
          </div>
          <div style={{ marginTop: 6, fontSize: 13.5, color: "var(--color-text-muted)" }}>Tip: plastificeer ze of print op dik papier, dan gaan ze het hele jaar mee.</div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
          <button style={S.knop} disabled={!vragen.length} onClick={() => start()}>▶ Start op het digibord ({vragen.length} vragen)</button>
        </div>
        {vorige && (
          <p style={{ margin: "0 0 12px", fontSize: 14, color: "var(--color-text-muted)" }}>
            Vorige keer ({new Date(vorige.datum).toLocaleDateString("nl-NL")}): gemiddeld {vorige.rijen.length ? Math.round(vorige.rijen.reduce((a, r) => a + r.pct, 0) / vorige.rijen.length) : 0}% goed.
          </p>
        )}
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Volgorde van de vragen <span style={{ fontWeight: 400, color: "var(--color-text-muted)", fontSize: 14 }}>(met ▲ ▼ verplaatsen, ✕ weghalen)</span></div>
        {vragen.map((vr, i) => (
          <div key={i + vr.q} style={{ ...S.kaart, padding: "10px 12px", marginBottom: 8, display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontWeight: 800, width: 28 }}>{i + 1}.</span>
            <span style={{ flex: 1, fontSize: 15 }}>{vr.q}</span>
            <button style={S.mini} aria-label="Omhoog" disabled={i === 0} onClick={() => verplaats(i, -1)}>▲</button>
            <button style={S.mini} aria-label="Omlaag" disabled={i === vragen.length - 1} onClick={() => verplaats(i, 1)}>▼</button>
            <button style={S.mini} aria-label="Weghalen" onClick={() => haalWeg(i)}>✕</button>
          </div>
        ))}
        {!vragen.length && <p>Er staan geen vragen in deze toets.</p>}
      </div>
    );
  }

  // ── 3. Klaar: overzicht, moeilijkste eerst ──
  if (fase === "klaar") {
    const beantwoord = rijen.filter((r) => r.totaal > 0);
    const gem = beantwoord.length ? Math.round(beantwoord.reduce((a, r) => a + r.pct, 0) / beantwoord.length) : 0;
    const moeilijk = beantwoord.filter((r) => r.pct < 60);
    return (
      <div style={S.wrap}>
        <div style={S.kop}>
          <h2 style={S.titel}>🎉 Klaar · gemiddeld {gem}% goed</h2>
          <button style={S.knopLicht} onClick={onStop}>← Terug naar mijn toetsen</button>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
          {moeilijk.length > 0 && (
            <button style={S.knop} onClick={() => start(moeilijk.map((r) => vragen[r.nr - 1]))}>🔁 Oefen de {moeilijk.length} moeilijke nog eens</button>
          )}
          <button style={S.knopLicht} onClick={() => printUitslag(titel, beantwoord)}>🖨️ Print de uitslag</button>
          <button style={S.knopLicht} onClick={() => setFase("klaarzetten")}>Opnieuw met deze vragen</button>
        </div>
        {[...beantwoord].sort((a, b) => a.pct - b.pct).map((r) => (
          <div key={r.nr} style={{ ...S.kaart, padding: "12px 14px", marginBottom: 8, display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ fontWeight: 900, fontSize: 22, minWidth: 64, color: r.pct >= 60 ? KLEUR_GOED : KLEUR_FOUT }}>{r.pct}%</span>
            <span style={{ flex: 1, fontSize: 15.5 }}>{r.nr}. {r.q}</span>
            <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{r.counts.map((c, i) => `${LETTERS[i]} ${c}`).join(" · ")}</span>
          </div>
        ))}
      </div>
    );
  }

  // ── 2. Eén vraag op het digibord ──
  const goedPct = pct(tel[v.answer] || 0, totaal);
  const meestFout = toon && totaal > 0 ? tel.map((c, i) => ({ c, i })).filter((x) => x.i !== v.answer).sort((a, b) => b.c - a.c)[0] : null;
  return (
    <div style={S.wrap}>
      <div style={S.kop}>
        <span style={{ fontSize: 16, color: "var(--color-text-muted)", fontWeight: 700 }}>🙋 Klassikaal · vraag {idx + 1} van {vragen.length}</span>
        <button style={S.knopLicht} onClick={() => setFase("klaarzetten")}>Stop</button>
      </div>
      <div style={{ ...S.kaart, marginBottom: 14 }}>
        <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.3 }}>{v.q}</div>
      </div>
      {v.options.map((opt, i) => {
        const n = tel[i] || 0;
        const isGoed = i === v.answer;
        const breedte = totaal > 0 ? Math.round((n / totaal) * 100) : 0;
        return (
          <div key={i} style={{ ...S.kaart, padding: "12px 14px", marginBottom: 10, display: "flex", alignItems: "center", gap: 14, position: "relative", overflow: "hidden",
            borderColor: toon && isGoed ? KLEUR_GOED : "var(--color-border-soft)", borderWidth: toon && isGoed ? 3 : 1 }}>
            {toon && <div aria-hidden style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: breedte + "%", background: isGoed ? "rgba(0,200,83,0.22)" : "rgba(255,112,67,0.16)" }} />}
            <span style={{ position: "relative", width: 48, height: 48, borderRadius: 12, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 900, background: "var(--color-brand-primary)", color: "#0b1224", flexShrink: 0 }}>{LETTERS[i]}</span>
            <span style={{ position: "relative", flex: 1, fontSize: 24, fontWeight: 600 }}>{opt}{toon && isGoed ? "  ✓" : ""}</span>
            {toon ? (
              <span style={{ position: "relative", fontSize: 22, fontWeight: 800, minWidth: 110, textAlign: "right" }}>{n} {n === 1 ? "hand" : "handen"}</span>
            ) : (
              <span style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
                <button style={{ ...S.mini, width: 48, height: 48, fontSize: 24 }} aria-label={`Minder handen bij ${LETTERS[i]}`} onClick={() => pas(i, (x) => x - 1)}>−</button>
                <input type="number" min={0} max={MAX_KLAS} inputMode="numeric" value={n} aria-label={`Aantal handen bij ${LETTERS[i]}`}
                  onChange={(e) => zet(i, parseInt(e.target.value, 10) || 0)}
                  style={{ width: 70, height: 48, fontSize: 24, fontWeight: 800, textAlign: "center", borderRadius: 10, border: "1px solid var(--color-border-soft)", background: "var(--color-bg-base, #0f1729)", color: "var(--color-text)" }} />
                <button style={{ ...S.mini, width: 48, height: 48, fontSize: 24 }} aria-label={`Meer handen bij ${LETTERS[i]}`} onClick={() => pas(i, (x) => x + 1)}>+</button>
              </span>
            )}
          </div>
        );
      })}
      {!toon && (
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginTop: 6 }}>
          <button style={S.knop} disabled={totaal === 0} onClick={toonUitslag}>Toon uitslag</button>
          <span style={{ fontSize: 16, color: totaal > MAX_KLAS ? KLEUR_FOUT : "var(--color-text-muted)" }}>
            {totaal} {totaal === 1 ? "hand" : "handen"} geteld{totaal > MAX_KLAS ? " — meer dan " + MAX_KLAS + "? Tel nog eens." : ""}
          </span>
        </div>
      )}
      {toon && (
        <div style={{ ...S.kaart, marginTop: 6, borderColor: goedPct >= 60 ? KLEUR_GOED : KLEUR_FOUT }}>
          <div style={{ fontSize: 34, fontWeight: 900, color: goedPct >= 60 ? KLEUR_GOED : KLEUR_FOUT }}>{goedPct}% van de klas had deze goed</div>
          <div style={{ fontSize: 18, marginTop: 4 }}>Het goede antwoord is <strong>{LETTERS[v.answer]}: {v.options[v.answer]}</strong>.</div>
          {meestFout && meestFout.c > 0 && goedPct < 80 && (
            <div style={{ fontSize: 16, marginTop: 6, color: "var(--color-text-muted)" }}>{meestFout.c} {meestFout.c === 1 ? "kind koos" : "kinderen kozen"} {LETTERS[meestFout.i]}. Vraag eens hoe ze daarop kwamen.</div>
          )}
          {v.explanation && <div style={{ fontSize: 17, marginTop: 10, lineHeight: 1.5 }}>💡 {v.explanation}</div>}
          <button style={{ ...S.knop, marginTop: 14 }} onClick={volgende}>{idx + 1 < vragen.length ? "Volgende vraag ▶" : "Bekijk het overzicht ▶"}</button>
        </div>
      )}
    </div>
  );
}
