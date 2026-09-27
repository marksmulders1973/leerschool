// 🪜 Trede-testje (Nieuwkomers-doorgroeiplan stap 2, Mark 26 sep 2026: "testjes afnemen en dan
// doorgroeien"). Aan het eind van trede 1 "Welkom": 20 vragen uit de vier trede-1-paden door
// elkaar, zonder hints en zonder tweede kans. 16 of meer goed (80%) = trede gehaald →
// localStorage lk_nk_trede + een diploma'tje om te printen. Gemiste vragen gaan in het
// herhaaldoosje (morgen terug). Vertaal-tik blijft: dat is leeshulp, geen voorzeggen.
// Een oefentoetsje — nooit een officieel taalniveau (zie docs/NIEUWKOMERS-DOORGROEI-PLAN.md).
import { useEffect, useMemo, useState } from "react";
import { track } from "../utils.js";
import { getLearnPath } from "../learnPaths/pathLoaders.js";
import { noteerAntwoord } from "../shared/herhaalNieuwkomers.js";
import { SteunCtx, SteunTekst, SteunVraag, SteunOptie, UI_STEUN, maakSteunMap } from "../shared/ui/SteunTik.jsx";
import Picto from "../shared/ui/Picto.jsx";
import MdInline from "../shared/ui/MdInline.jsx";

export const TREDE_KEY = "lk_nk_trede";
export const TREDE_1_PADEN = ["in-de-klas-nieuwkomers", "woorden-nieuwkomers", "rekentaal-nieuwkomers", "rekenen-tot-20-nieuwkomers"];
const GRENS = 0.8;
// Per trede: welke paden (en hoeveel vragen per pad) + extra vragen. Trede 2 (stap 4, 27 sep):
// 12 vragen uit Letters en klanken + 8 "welk woord is goed geschreven?" uit het nieuwkomer-dictee.
const TREDES = {
  1: { paden: TREDE_1_PADEN, perPad: 5, naam: "Trede 1 · Welkom", onderdelen: "In de klas · Woorden · Rekentaal · Rekenen tot 20" },
  2: { paden: ["letters-klanken-nieuwkomers"], perPad: 12, spelling: 8, naam: "Trede 2 · Letters en woorden", onderdelen: "Letters en klanken · Dictee" },
};

// "Welk woord is goed geschreven?" — uit de dicteezinnen (DICTEE[NK_GROEP]). Foute opties zijn
// bewust géén echte woorden (anders is 'pen/pan' allebei goed geschreven): de laatste twee
// letters omgewisseld (tas → tsa, klankvolgorde) en een dubbele eindletter (tas → tass).
const KADER = { en: "Which word is spelled correctly?", ar: "أي كلمة مكتوبة بشكل صحيح؟", uk: "Яке слово написане правильно?", tr: "Hangi kelime doğru yazılmış?" };
function spellingOpties(w) {
  const om = w.slice(0, -2) + w[w.length - 1] + w[w.length - 2];
  const dubbel = w + w[w.length - 1];
  return [w, om, dubbel];
}
async function spellingVragen(n) {
  const { DICTEE, NK_GROEP } = await import("../features/dictee/dicteeData.js");
  return schud(DICTEE[NK_GROEP] || []).slice(0, n).map((it) => {
    const zin = it.zin.replace(it.woord, "___");
    return {
      pad: "dictee-nieuwkomers", stap: 0, origAntwoord: it.woord,
      check: { q: `Welk woord is goed geschreven? ${zin}`, steun: Object.fromEntries(Object.entries(it.steun || {}).map(([t, z]) => [t, `${KADER[t] || ""} ${z}`])), options: spellingOpties(it.woord), answer: 0 },
    };
  });
}

// Hoogste gehaalde trede op dit apparaat (0 = nog geen).
export function gehaaldeTrede() {
  try { return Number(localStorage.getItem(TREDE_KEY)) || 0; } catch { return 0; }
}

const TEST_STEUN = {
  "Trede-testje": { en: "Step test", ar: "اختبار الدرجة", uk: "Тест сходинки", tr: "Basamak testi" },
  "Geen hulp, één keer kiezen. Doe je best!": { en: "No help, choose once. Do your best!", ar: "بدون مساعدة، اختر مرة واحدة. ابذل جهدك!", uk: "Без підказок, обирай один раз. Старайся!", tr: "Yardım yok, bir kez seç. Elinden geleni yap!" },
  "Goed": { en: "Correct", ar: "صحيح", uk: "Правильно", tr: "Doğru" },
  "Niet goed": { en: "Not correct", ar: "غير صحيح", uk: "Неправильно", tr: "Doğru değil" },
  "Volgende": { en: "Next", ar: "التالي", uk: "Далі", tr: "Sonraki" },
  "Gehaald! Trede 1 is klaar.": { en: "Passed! Step 1 is done.", ar: "نجحت! الدرجة 1 انتهت.", uk: "Склав! Сходинка 1 пройдена.", tr: "Geçtin! 1. basamak bitti." },
  "Gehaald! Trede 2 is klaar.": { en: "Passed! Step 2 is done.", ar: "نجحت! الدرجة 2 انتهت.", uk: "Склав! Сходинка 2 пройдена.", tr: "Geçtin! 2. basamak bitti." },
  "Bijna! Oefen nog even en probeer het over een paar dagen opnieuw.": { en: "Almost! Practise a bit more and try again in a few days.", ar: "تقريبًا! تدرّب قليلًا وحاول مرة أخرى بعد بضعة أيام.", uk: "Майже! Потренуйся ще трохи й спробуй знову через кілька днів.", tr: "Neredeyse! Biraz daha çalış ve birkaç gün sonra tekrar dene." },
  "De vragen die je miste, komen morgen terug bij herhalen.": { en: "The questions you missed come back tomorrow in practice again.", ar: "الأسئلة التي أخطأت فيها تعود غدًا في المراجعة.", uk: "Запитання, які ти пропустив, повернуться завтра в повторенні.", tr: "Kaçırdığın sorular yarın tekrarda geri gelir." },
  "Print je diploma": { en: "Print your certificate", ar: "اطبع شهادتك", uk: "Надрукуй свій диплом", tr: "Diplomanı yazdır" },
  "Terug": { en: "Back", ar: "رجوع", uk: "Назад", tr: "Geri" },
};

const schud = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

export default function NieuwkomersTredeTest({ trede = 1, onKlaar }) {
  const cfg = TREDES[trede] || TREDES[1];
  const [vragen, setVragen] = useState(null);
  const [map, setMap] = useState(null);
  const [idx, setIdx] = useState(0);
  const [gekozen, setGekozen] = useState(null);
  const [goed, setGoed] = useState(0);

  useEffect(() => {
    let weg = false;
    (async () => {
      const lijst = [];
      const steun = [];
      for (const id of cfg.paden) {
        let p = null;
        try { p = await getLearnPath(id); } catch { /* */ }
        if (!p) continue;
        if (p.steunTeksten) steun.push(p.steunTeksten);
        const alle = (p.steps || []).flatMap((s, stap) => (s.checks || []).filter((c) => Array.isArray(c.options) && c.options.length > 1).map((c) => ({ c, stap })));
        for (const { c, stap } of schud(alle).slice(0, cfg.perPad)) {
          const volgorde = schud(c.options.map((_, i) => i));
          lijst.push({ pad: id, stap, origAntwoord: c.options[c.answer], check: { ...c, options: volgorde.map((i) => c.options[i]), answer: volgorde.indexOf(c.answer) } });
        }
      }
      if (cfg.spelling) {
        for (const x of await spellingVragen(cfg.spelling)) {
          const volgorde = schud([0, 1, 2]);
          lijst.push({ ...x, check: { ...x.check, options: volgorde.map((i) => x.check.options[i]), answer: volgorde.indexOf(0) } });
        }
      }
      if (weg) return;
      setMap(maakSteunMap(UI_STEUN, TEST_STEUN, ...steun));
      setVragen(schud(lijst));
      try { track("nk_tredetest_start", { trede, aantal: lijst.length }); } catch { /* */ }
    })();
    return () => { weg = true; };
  }, []);

  const huidige = vragen?.[idx]?.check;
  const klaar = vragen && vragen.length > 0 && idx >= vragen.length;
  const geslaagd = klaar && goed >= Math.ceil(vragen.length * GRENS);

  useEffect(() => {
    if (!klaar) return;
    // lk_nk_trede = hoogste gehaalde trede; lk_nk_tredes = welke tredes precies (kaart per trede groen).
    if (geslaagd) {
      try { if (gehaaldeTrede() < trede) localStorage.setItem(TREDE_KEY, String(trede)); } catch { /* */ }
      try { const g = JSON.parse(localStorage.getItem("lk_nk_tredes") || "[]"); if (!g.includes(trede)) localStorage.setItem("lk_nk_tredes", JSON.stringify([...g, trede])); } catch { /* */ }
    }
    try { track("nk_tredetest_klaar", { trede, goed, aantal: vragen.length, geslaagd }); } catch { /* */ }
  }, [klaar]); // eslint-disable-line

  const kies = (i) => {
    if (gekozen !== null) return; // één keer kiezen: het is een testje
    setGekozen(i);
    const v = vragen[idx];
    const ok = i === huidige.answer;
    if (ok) setGoed((g) => g + 1);
    else if (v.pad !== "dictee-nieuwkomers") noteerAntwoord(v.pad, v.stap, v.check.q, false, v.origAntwoord);
    try { track("nk_tredetest_antwoord", { trede, pad: v.pad, goed: ok }); } catch { /* */ }
  };
  const volgende = () => { setGekozen(null); setIdx((n) => n + 1); };

  const kaart = { background: "rgba(255,255,255,.96)", color: "#0f2a44", borderRadius: 18, padding: "16px 18px", boxShadow: "0 8px 22px rgba(0,0,0,.25)" };
  const knop = (primair) => ({ width: "100%", padding: "12px 16px", borderRadius: 12, border: primair ? "none" : "2px solid #0f2a44", background: primair ? "#0f2a44" : "#fff", color: primair ? "#fff" : "#0f2a44", fontWeight: 800, fontSize: 16, cursor: "pointer" });

  const inhoud = useMemo(() => {
    if (!vragen) return <div style={kaart}>…</div>;
    if (klaar) {
      const datum = new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
      return (
        <div style={{ ...kaart, display: "grid", gap: 12 }}>
          {geslaagd ? (
            <>
              {/* Het diploma'tje: bij printen blijft alleen dit blok over (zie @media print). */}
              <div className="nk-diploma" style={{ border: "4px solid #ffd166", borderRadius: 16, padding: "18px 16px", textAlign: "center", background: "#fffbea" }}>
                <img src="/logo.jpg" alt="Leerkwartier" width={56} height={56} style={{ borderRadius: 12 }} />
                <div style={{ fontSize: 26, fontWeight: 900, marginTop: 6 }}>Diploma</div>
                <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4 }}>{cfg.naam}</div>
                <div style={{ fontSize: 15, marginTop: 6 }}>{cfg.onderdelen}</div>
                <div style={{ fontSize: 22, fontWeight: 900, marginTop: 8 }}>{goed} / {vragen.length} ✓</div>
                <div style={{ marginTop: 14, borderBottom: "2px dotted #0f2a44", height: 28 }} />
                <div style={{ fontSize: 12, opacity: .7, marginTop: 4 }}>naam</div>
                <div style={{ fontSize: 13, marginTop: 10 }}>{datum} · leerkwartier.app</div>
                <div style={{ fontSize: 12, fontStyle: "italic", marginTop: 4 }}>Een kwartier per dag leren, een leven lang slimmer.</div>
              </div>
              <SteunTekst nl={`Gehaald! Trede ${trede} is klaar.`}><div style={{ fontSize: 20, fontWeight: 900, color: "#1b7f3b" }}>🎉 Gehaald! Trede {trede} is klaar.</div></SteunTekst>
              <SteunTekst nl="Print je diploma" knop><button type="button" onClick={() => { try { track("nk_tredetest_print", { trede }); } catch { /* */ } window.print(); }} style={knop(false)}>🖨️ Print je diploma</button></SteunTekst>
            </>
          ) : (
            <>
              <div style={{ fontSize: 22, fontWeight: 900 }}>{goed} / {vragen.length} ✓</div>
              <SteunTekst nl="Bijna! Oefen nog even en probeer het over een paar dagen opnieuw."><div style={{ fontSize: 17, fontWeight: 800 }}>Bijna! Oefen nog even en probeer het over een paar dagen opnieuw.</div></SteunTekst>
            </>
          )}
          {goed < vragen.length && <SteunTekst nl="De vragen die je miste, komen morgen terug bij herhalen."><div style={{ fontSize: 15 }}>De vragen die je miste, komen morgen terug bij herhalen.</div></SteunTekst>}
          <SteunTekst nl="Terug" knop><button type="button" onClick={onKlaar} style={knop(true)}>Terug</button></SteunTekst>
          <style>{`@media print { body * { visibility: hidden !important; } .nk-diploma, .nk-diploma * { visibility: visible !important; } .nk-diploma { position: absolute; left: 0; top: 0; width: 100%; } }`}</style>
        </div>
      );
    }
    const c = huidige;
    const isGoed = gekozen !== null && gekozen === c.answer;
    return (
      <div style={{ ...kaart, display: "grid", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 800, opacity: .7 }}>
          <SteunTekst nl="Trede-testje" inline><span>🪜 Trede-testje</span></SteunTekst>
          <span>{idx + 1} / {vragen.length}</span>
        </div>
        {idx === 0 && gekozen === null && (
          <SteunTekst nl="Geen hulp, één keer kiezen. Doe je best!"><div style={{ fontSize: 14, fontWeight: 700, background: "#eef4fa", borderRadius: 10, padding: "6px 10px" }}>Geen hulp, één keer kiezen. Doe je best!</div></SteunTekst>
        )}
        <SteunVraag steun={c.steun} altijd={c.steunAltijd}>
          <div style={{ fontSize: 18, fontWeight: 800 }}><MdInline text={c.q} /></div>
        </SteunVraag>
        {c.options.map((o, i) => {
          const kleur = gekozen === null ? "#fff" : i === c.answer ? "#d7f5df" : i === gekozen ? "#fde0dd" : "#fff";
          const lidwoord = /^(de|het) \S/.test(String(o)) ? (String(o).startsWith("het ") ? "het" : "de") : null;
          return (
            <SteunOptie key={o} steun={c.steunOpties} opt={o}>
              <button type="button" onClick={() => kies(i)} style={{ width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 12, border: "2px solid #c9d6e3", background: kleur, color: "#0f2a44", fontWeight: 700, fontSize: 16, cursor: gekozen === null ? "pointer" : "default" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}><Picto bron={c.picto?.[o]} />
                  {lidwoord ? (<span><span style={{ color: lidwoord === "het" ? "#e65100" : "#1565c0", fontWeight: 900 }}>{lidwoord}</span> <MdInline text={String(o).replace(/^(de|het) /, "")} /></span>) : <MdInline text={o} />}
                </span>
              </button>
            </SteunOptie>
          );
        })}
        {gekozen !== null && (
          <>
            <SteunTekst nl={isGoed ? "Goed" : "Niet goed"}>
              <div style={{ fontWeight: 900, fontSize: 17, color: isGoed ? "#1b7f3b" : "#b3261e" }}>{isGoed ? "✅ Goed" : "❌ Niet goed"}</div>
            </SteunTekst>
            <SteunTekst nl="Volgende" knop><button type="button" onClick={volgende} style={knop(true)}>Volgende ▶</button></SteunTekst>
          </>
        )}
      </div>
    );
  }, [vragen, idx, gekozen, klaar, goed, trede]); // eslint-disable-line

  return <SteunCtx.Provider value={map}>{inhoud}</SteunCtx.Provider>;
}
