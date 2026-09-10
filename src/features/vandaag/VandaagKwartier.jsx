// ⭐ Het kwartier van vandaag — speelt het plan van de Vandaag-motor af
// (Mark 10 sep 2026, "bouw de motor"). Blokjes:
//   vragen      → 5 vragen uit één leerpad, hier op de pagina (VraagKaart uit het start-kwartier)
//   dictee      → stuurt naar /dictee in kwartier-modus (5 woorden), die komt hier terug
//   werkwoorden → idem naar /werkwoorden
//   klaargezet  → toont wat ouder/juf klaarzette; het kind kiest en gaat de les in
// Eindscherm: score per blokje, "klaar voor vandaag", terug naar je pagina.
import { useEffect, useRef, useState } from "react";
import Button from "../../shared/ui/Button.jsx";
import Card from "../../shared/ui/Card.jsx";
import { track } from "../../utils.js";
import { buildTopicQuiz } from "../practice/buildTopicQuiz.js";
import { recordAnswerForPath } from "../mastery/mastery.js";
import { telAntwoordVoorVriend } from "../referral/referral.js";
import { VraagKaart } from "../onboarding/StartKwartier.jsx";
import { kwartierStand, huidigBlok, blokKlaar, stopKwartier } from "./kwartier.js";

const S = {
  wrap: { maxWidth: 560, margin: "0 auto", padding: "12px 14px 96px", color: "var(--color-text)", fontFamily: "var(--font-body)" },
  top: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 },
  titel: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, margin: 0 },
  sub: { fontSize: 13.5, color: "var(--color-text-muted)", margin: "0 0 10px" },
  dots: { display: "flex", gap: 5, margin: "0 0 14px" },
  dot: (st) => ({ height: 6, flex: 1, borderRadius: 3, background: st === "gedaan" ? "var(--color-success)" : st === "nu" ? "var(--color-brand-primary)" : "var(--color-border-soft)", opacity: st === "later" ? 0.5 : 1 }),
};

function VragenBlok({ blok, userName, authUser, onKlaar }) {
  const [vragen, setVragen] = useState(null);
  const [i, setI] = useState(0);
  const score = useRef({ goed: 0, totaal: 0 });
  useEffect(() => {
    let dood = false;
    buildTopicQuiz({ pathId: blok.pathId, aantal: blok.n })
      .then(({ quiz, questions }) => { if (!dood) setVragen(questions.slice(0, blok.n).map((q) => ({ ...q, pathId: blok.pathId, padTitel: quiz.title }))); })
      .catch(() => { if (!dood) setVragen([]); });
    return () => { dood = true; };
  }, [blok.pathId, blok.n]);
  if (vragen === null) return <Card variant="study" padding="md"><p style={{ margin: 0 }}>⏳ Je vragen komen eraan…</p></Card>;
  if (!vragen.length) return <Card variant="study" padding="md"><p style={{ margin: "0 0 10px" }}>Dit onderwerp laadt nu even niet.</p><Button onClick={() => onKlaar({ goed: 0, totaal: 0, overgeslagen: true })}>Volgende blokje →</Button></Card>;
  const v = vragen[i];
  return (
    <VraagKaart
      key={i}
      vraag={v}
      nummer={i + 1}
      totaal={vragen.length}
      onBeantwoord={(goed) => {
        score.current = { goed: score.current.goed + (goed ? 1 : 0), totaal: score.current.totaal + 1 };
        try { track("question_answered", { bron: "vandaag", pad: v.pathId, is_correct: goed }); } catch { /* */ }
        try { recordAnswerForPath({ playerName: userName || "Speler", pathId: v.pathId, isCorrect: goed, userId: authUser?.id || null }); } catch { /* */ }
        try { telAntwoordVoorVriend(); } catch { /* */ }
      }}
      onVerder={() => { if (i + 1 < vragen.length) setI(i + 1); else onKlaar(score.current); }}
    />
  );
}

function KlaargezetBlok({ blok, onPickPath, onKlaar }) {
  return (
    <Card variant="study" padding="md">
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>💛 Voor jou klaargezet</div>
      <p style={{ fontSize: 14.5, color: "var(--color-text-muted)", margin: "0 0 10px" }}>Kies er één; die telt als je kwartier van vandaag. De rest blijft op je pagina staan.</p>
      {blok.items.map((it) => (
        <button key={it.id || it.path_id} onClick={() => { try { track("vandaag_klaargezet_open", { pad: it.path_id, bron: it.bron }); } catch { /* */ } blokKlaar({ goed: null, totaal: null, pad: it.path_id }); onPickPath(it.path_id); }}
          style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", padding: "12px", marginBottom: 8, borderRadius: 12, border: "1px solid var(--color-border-soft)", background: "var(--color-bg-surface)", color: "var(--color-text)", cursor: "pointer" }}>
          <span style={{ fontSize: 24 }}>{it.emoji || "📘"}</span>
          <span style={{ flex: 1 }}><b>{it.titel || "Een les"}</b><br /><span style={{ fontSize: 12, color: it.bron === "leraar" ? "#8ec9ff" : "#ff9fb2", fontWeight: 700 }}>{it.bron === "leraar" ? "🍎 van je juf of meester" : "💛 van thuis"}</span></span>
          <span>▶</span>
        </button>
      ))}
      <Button variant="ghost" size="sm" onClick={() => onKlaar({ goed: null, totaal: null, overgeslagen: true })}>Liever iets anders vandaag →</Button>
    </Card>
  );
}

export default function VandaagKwartier({ userName, userLevel, authUser, onDictee, onWerkwoorden, onPickPath, onKlaar, onMijn }) {
  const [stand, setStand] = useState(() => kwartierStand());
  const blok = stand && !stand.klaar ? stand.blokjes[stand.idx] : null;

  // dictee/werkwoorden lopen op hun eigen pagina (kwartier-modus); daar komen ze terug.
  useEffect(() => {
    if (!blok) return;
    if (blok.soort === "dictee" && onDictee) onDictee();
    if (blok.soort === "werkwoorden" && onWerkwoorden) onWerkwoorden();
  }, [blok?.soort, stand?.idx]); // eslint-disable-line react-hooks/exhaustive-deps

  const klaar = (res) => { const k = blokKlaar(res); setStand(k ? { ...k } : kwartierStand()); try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch { /* */ } };

  if (!stand) {
    return (
      <div style={S.wrap}>
        <Card variant="study" padding="md">
          <p style={{ margin: "0 0 10px" }}>Er staat nog geen kwartier klaar voor vandaag. Op je eigen pagina kies je 'Start je kwartier van vandaag'.</p>
          <Button onClick={onMijn}>Naar mijn pagina</Button>
        </Card>
      </div>
    );
  }

  if (stand.klaar) {
    const goed = stand.resultaten.reduce((s, r) => s + (r?.goed || 0), 0);
    const totaal = stand.resultaten.reduce((s, r) => s + (r?.totaal || 0), 0);
    return (
      <div style={S.wrap}>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ fontSize: 54 }}>{totaal && goed === totaal ? "🏆" : "🎉"}</div>
          <h2 style={{ ...S.titel, fontSize: 24 }}>Je kwartier van vandaag zit erop!</h2>
          {totaal > 0 && <div style={{ color: "var(--color-text-muted)", marginTop: 4 }}>{goed} van de {totaal} goed</div>}
        </div>
        <Card variant="study" padding="md">
          {stand.resultaten.map((r, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderTop: i ? "1px solid var(--color-border-soft)" : "none", fontSize: 14.5 }}>
              <span>{r?.titel || r?.soort}</span>
              <b>{r?.overgeslagen ? "overgeslagen" : r?.totaal ? `${r.goed}/${r.totaal}` : "✓"}</b>
            </div>
          ))}
        </Card>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
          <Button size="lg" onClick={onKlaar}>🏅 Naar mijn pagina</Button>
          <Button variant="ghost" onClick={() => { stopKwartier(); onMijn(); }}>Nog een rondje</Button>
        </div>
        <p style={{ fontSize: 12.5, color: "var(--color-text-muted)", marginTop: 12 }}>Je scores tellen mee op je pagina en in het weekrapport voor thuis. Morgen staat er weer een nieuw kwartier klaar.</p>
      </div>
    );
  }

  const n = stand.blokjes.length;
  return (
    <div style={S.wrap}>
      <div style={S.top}>
        <h2 style={S.titel}>⏱️ Kwartier van vandaag</h2>
        <Button variant="ghost" size="sm" onClick={() => { try { track("vandaag_stop", { idx: stand.idx }); } catch { /* */ } onMijn(); }} aria-label="Stop">Stop ✕</Button>
      </div>
      <p style={S.sub}>{stand.uitleg} · blokje {stand.idx + 1} van {n}: <b>{blok?.titel}</b></p>
      <div style={S.dots}>{stand.blokjes.map((_, i) => <div key={i} style={S.dot(i < stand.idx ? "gedaan" : i === stand.idx ? "nu" : "later")} />)}</div>
      {blok?.soort === "vragen" && <VragenBlok key={stand.idx} blok={blok} userName={userName} authUser={authUser} onKlaar={klaar} />}
      {blok?.soort === "klaargezet" && <KlaargezetBlok blok={blok} onPickPath={onPickPath} onKlaar={klaar} />}
      {(blok?.soort === "dictee" || blok?.soort === "werkwoorden") && (
        <Card variant="study" padding="md">
          <p style={{ margin: "0 0 10px" }}>We gaan naar {blok.soort === "dictee" ? "het dictee" : "de werkwoorden"}…</p>
          <Button onClick={() => (blok.soort === "dictee" ? onDictee() : onWerkwoorden())}>▶ Open</Button>
        </Card>
      )}
    </div>
  );
}
