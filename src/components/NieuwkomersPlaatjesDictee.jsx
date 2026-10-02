// ✏️ Plaatjesdictee voor nieuwkomers (Mark 29 sep 2026: "een plaatje van een appel … hij kan het
// zelfs in hun thuistaal vragen, bv. 'spell home' — je geeft dan niets weg want in het Nederlands is
// het huis"). Twee standen met hetzelfde plaatje:
//   Nederlands: de app zegt "de appel", het kind schrijft appel (echt dictee).
//   Mijn taal:  de app zegt het woord in de thuistaal ("apple", "elma"); het kind moet het
//               Nederlandse woord zélf weten. Geen stem voor die taal op dit toestel? Dan staat het
//               woord in de thuistaal groot op het scherm (dat kan het kind wél lezen).
// Schrijven met lettertegels (veel nieuwkomers kennen ons toetsenbord niet), of zelf typen.
// Daarna het lidwoord kiezen: de of het — precies wat nieuwkomers het lastigst vinden.
// Hulp: na 1 fout de eerste letter, na 2 fouten zegt de app het Nederlandse woord langzaam.
import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "../utils.js";
import { plaatjeVan } from "../learnPaths/nieuwkomersPicto.js";
import { VERTALINGEN } from "../learnPaths/nieuwkomersVertalingen.js";
import { zeg, zegInTaal, heeftStem, stopZeggen, ZEG } from "../shared/voorleesModus.js";

const RONDE = 6;
const schud = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const ABC = "abdefgijklmnoprstuvwz";
// Alleen gewone kleine letters (geen "T-shirt": hoofdletter en streepje zijn met tegels onhandig).
const splits = (woord) => { const m = String(woord).match(/^(de|het)\s+([a-z]+)$/); return m ? { lidwoord: m[1], kaal: m[2] } : null; };

// Vertalingen: vaste lijst per plaatjeswoord (nieuwkomersVertalingen.js: "de appel" → { en, ar, uk, tr, ro, bg }).
// Ontbreekt een woord of taal, dan is er geen eigen-taal-stand voor dat woord.

const KOP = {
  nl: { nl: "Nederlands", eigen: "Mijn taal", typen: "Zelf typen", tegels: "Letters", welk: "de of het?", nogEens: "Nog een keer", klaar: "Klaar!", check: "Klaar", pt: "punten", uit: "Je hebt {a} van de {b} punten verdiend!", rec: "Je record: {r} punten", nieuw: "Nieuw record!", lof: ["Super gedaan!","Goed bezig!","Goed geoefend! Probeer het nog eens."] },
  en: { nl: "Dutch", eigen: "My language", typen: "Type it", tegels: "Letters", welk: "de or het?", nogEens: "Again", klaar: "Done!", check: "Done", pt: "points", uit: "You earned {a} of {b} points!", rec: "Your record: {r} points", nieuw: "New record!", lof: ["Great job!","Well done!","Good practice! Try again."] },
  ar: { nl: "الهولندية", eigen: "لغتي", typen: "اكتب بنفسك", tegels: "حروف", welk: "de أو het؟", nogEens: "مرة أخرى", klaar: "انتهيت!", check: "تمّ", pt: "نقاط", uit: "لقد ربحت {a} من {b} نقطة!", rec: "رقمك القياسي: {r} نقطة", nieuw: "رقم قياسي جديد!", lof: ["عمل رائع!","أحسنت!","تدريب جيد! حاول مرة أخرى."] },
  uk: { nl: "Нідерландська", eigen: "Моя мова", typen: "Набрати самому", tegels: "Літери", welk: "de чи het?", nogEens: "Ще раз", klaar: "Готово!", check: "Готово", pt: "балів", uit: "Ти заробив {a} з {b} балів!", rec: "Твій рекорд: {r} балів", nieuw: "Новий рекорд!", lof: ["Чудово!","Молодець!","Гарне тренування! Спробуй ще раз."] },
  tr: { nl: "Hollandaca", eigen: "Benim dilim", typen: "Kendin yaz", tegels: "Harfler", welk: "de mi het mi?", nogEens: "Bir daha", klaar: "Bitti!", check: "Tamam", pt: "puan", uit: "{b} puanın {a} tanesini kazandın!", rec: "Rekorun: {r} puan", nieuw: "Yeni rekor!", lof: ["Harika!","Aferin!","İyi çalıştın! Bir daha dene."] },
  ro: { nl: "Olandeză", eigen: "Limba mea", typen: "Scrie singur", tegels: "Litere", welk: "de sau het?", nogEens: "Încă o dată", klaar: "Gata!", check: "Gata", pt: "puncte", uit: "Ai câștigat {a} din {b} puncte!", rec: "Recordul tău: {r} puncte", nieuw: "Record nou!", lof: ["Super!","Bravo!","Ai exersat bine! Mai încearcă o dată."] },
  bg: { nl: "Нидерландски", eigen: "Моят език", typen: "Напиши сам", tegels: "Букви", welk: "de или het?", nogEens: "Още веднъж", klaar: "Готово!", check: "Готово", pt: "точки", uit: "Спечели {a} от {b} точки!", rec: "Твоят рекорд: {r} точки", nieuw: "Нов рекорд!", lof: ["Супер!","Браво!","Добре се упражни! Опитай пак."] },
};

const S = {
  kaart: { background: "#ffffff", color: "#0f2a44", borderRadius: 18, padding: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.18)" },
  knop: { border: "none", borderRadius: 999, padding: "10px 16px", fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "inherit" },
  vak: (st) => ({ width: 38, height: 46, borderRadius: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 800,
    background: st === "goed" ? "#e7f6ec" : st === "fout" ? "#fdecea" : st === "hint" ? "#fff7d6" : "#f1f4f9",
    border: `2px solid ${st === "goed" ? "#2e9d57" : st === "fout" ? "#e53935" : st === "hint" ? "#e0a800" : "#c9d3e0"}`, color: "#0f2a44" }),
  tegel: (weg) => ({ width: 46, height: 50, borderRadius: 12, fontSize: 26, fontWeight: 800, border: "2px solid #9db8e8", background: weg ? "transparent" : "#eef4ff", color: "#0f2a44",
    opacity: weg ? 0.15 : 1, cursor: weg ? "default" : "pointer", fontFamily: "inherit" }),
};

const Luidspreker = ({ kleur = "#3a2600" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke={kleur} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill={kleur} /><path d="M15.5 9a4 4 0 0 1 0 6" /><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
  </svg>
);

export default function NieuwkomersPlaatjesDictee({ thema, taal = "nl" }) {
  const k = KOP[taal] || KOP.nl;
  const [stand, setStand] = useState(taal !== "nl" ? "eigen" : "nl"); // "nl" | "eigen"
  const [typen, setTypen] = useState(false);
  const [stemOk, setStemOk] = useState(() => heeftStem(taal));
  // stemmen komen op Android pas na 'voiceschanged'
  useEffect(() => {
    const f = () => setStemOk(heeftStem(taal));
    f(); try { window.speechSynthesis?.addEventListener("voiceschanged", f); } catch { /* */ }
    return () => { try { window.speechSynthesis?.removeEventListener("voiceschanged", f); } catch { /* */ } };
  }, [taal]);

  const maakRonde = () => schud((thema.woorden || []).filter((w) => splits(w) && plaatjeVan(w))).slice(0, RONDE);
  const [ronde, setRonde] = useState(maakRonde);
  const [i, setI] = useState(0);
  const score = useRef(0);
  // ⭐ Punten (Mark 2 okt 2026): 10 per letter die het kind zelf goed legt, vóór het klokje. Klok-letters = 0, fout = 0 (geen minpunten).
  const PUNT = 10;
  const [punten, setPunten] = useState(0);
  const maxPunten = useMemo(() => ronde.reduce((n, w) => n + (splits(w)?.kaal.length || 0) * PUNT, 0), [ronde]);
  const [uitslag, setUitslag] = useState(null); // { record, nieuw }
  const klaar = i >= ronde.length;
  const woord = ronde[i];
  const delen = woord ? splits(woord) : null;
  const eigenWoord = woord && VERTALINGEN[woord]?.[taal] ? String(VERTALINGEN[woord][taal]).replace(/^the\s+/i, "") : null;
  const eigenKan = taal !== "nl" && !!eigenWoord;
  const echteStand = stand === "eigen" && eigenKan ? "eigen" : "nl";

  const vraag = () => {
    if (!woord) return;
    if (echteStand === "eigen") { if (!zegInTaal(eigenWoord, taal)) stopZeggen(); }
    else zeg(woord, { rate: 0.8 });
  };
  useEffect(() => { if (klaar) return undefined; const t = setTimeout(vraag, 350); return () => { clearTimeout(t); stopZeggen(); }; }, [i, ronde, echteStand]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!klaar) return;
    const recKey = `lk_nkd_record_${thema.id}`;
    let oud = 0; try { oud = Number(localStorage.getItem(recKey)) || 0; } catch { /* */ }
    const nieuw = punten > oud;
    if (nieuw) { try { localStorage.setItem(recKey, String(punten)); } catch { /* */ } }
    setUitslag({ record: Math.max(oud, punten), nieuw: nieuw && oud > 0 });
    const pct = maxPunten ? punten / maxPunten : 0;
    zeg(`Je hebt ${punten} van de ${maxPunten} punten verdiend. ${pct >= 0.9 ? "Super gedaan!" : pct >= 0.6 ? "Goed bezig!" : "Goed geoefend!"}`);
    try { track("nk_dictee_klaar", { thema: thema.id, stand: echteStand, goed: score.current, totaal: ronde.length, typen: typen ? 1 : 0, punten, max: maxPunten }); } catch { /* */ }
  }, [klaar]); // eslint-disable-line react-hooks/exhaustive-deps

  if (klaar) {
    return (
      <div style={{ ...S.kaart, textAlign: "center" }}>
        <div style={{ fontSize: 26, fontWeight: 800 }}>{k.klaar}</div>
        <div style={{ fontSize: 40, fontWeight: 900, color: "#e0a800", marginTop: 6 }}>{punten} <span style={{ fontSize: 18, color: "#0f2a44" }}>/ {maxPunten}</span></div>
        <div style={{ fontSize: 17, fontWeight: 800, marginTop: 2 }} dir="auto">{k.uit.replace("{a}", punten).replace("{b}", maxPunten)}</div>
        <div style={{ fontSize: 16, marginTop: 4 }} dir="auto">{k.lof[maxPunten && punten / maxPunten >= 0.9 ? 0 : maxPunten && punten / maxPunten >= 0.6 ? 1 : 2]}</div>
        {uitslag && <div style={{ fontSize: 14, marginTop: 6, color: uitslag.nieuw ? "#2e9d57" : "#5a6a86", fontWeight: uitslag.nieuw ? 800 : 600 }} dir="auto">{uitslag.nieuw ? k.nieuw + " " : ""}{k.rec.replace("{r}", uitslag.record)}</div>}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "12px 0", flexWrap: "wrap" }} aria-label={`${score.current} van ${ronde.length} goed`}>
          {ronde.map((_, n) => (
            <svg key={n} width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill={n < score.current ? "#f5b800" : "#dfe5ee"} /></svg>
          ))}
        </div>
        <button type="button" onClick={() => { score.current = 0; setPunten(0); setUitslag(null); setRonde(maakRonde()); setI(0); }} style={{ ...S.knop, background: "#2e9d57", color: "#fff" }}>{k.nogEens}</button>
      </div>
    );
  }
  if (!woord || !delen) return <div style={S.kaart}>…</div>;

  return (
    <div>
      {/* stand + invoer kiezen */}
      <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
        {taal !== "nl" && [["nl", k.nl], ["eigen", k.eigen]].map(([id, label]) => (
          <button key={id} type="button" onClick={() => setStand(id)} aria-pressed={stand === id}
            style={{ ...S.knop, fontSize: 13.5, padding: "8px 12px", background: stand === id ? "#2e9d57" : "#ffffff", color: stand === id ? "#fff" : "#0f2a44" }}>{label}</button>
        ))}
        <button type="button" onClick={() => setTypen((x) => !x)} style={{ ...S.knop, fontSize: 13.5, padding: "8px 12px", marginLeft: "auto", background: "#ffffff", color: "#0f2a44" }}>
          {typen ? k.tegels : k.typen}
        </button>
      </div>
      <Opgave key={`${i}-${woord}-${typen}`} woord={woord} delen={delen} k={k} typen={typen}
        eigenWoord={echteStand === "eigen" ? eigenWoord : null} toonEigen={echteStand === "eigen" && !stemOk}
        nr={i + 1} totaal={ronde.length} onVraag={vraag} punten={punten} ptLabel={k.pt}
        onKlaar={(zonderFout, verdiend) => { if (zonderFout) score.current += 1; setPunten((p) => p + (verdiend || 0)); setI((x) => x + 1); }} />
    </div>
  );
}

function Opgave({ woord, delen, k, typen, eigenWoord, toonEigen, nr, totaal, onVraag, onKlaar, punten = 0, ptLabel = "punten" }) {
  const letters = useMemo(() => [...delen.kaal.toLowerCase()], [delen.kaal]);
  const tegels = useMemo(() => {
    const extra = schud([...ABC].filter((c) => !letters.includes(c))).slice(0, 2);
    return schud([...letters, ...extra]).map((c, n) => ({ c, n }));
  }, [letters]);
  const [gekozen, setGekozen] = useState([]);    // indexen in tegels
  const [getypt, setGetypt] = useState("");
  const [fouten, setFouten] = useState(0);
  const [stapLidwoord, setStapLidwoord] = useState(false);
  const [status, setStatus] = useState(null);    // null | "fout" | "goed"
  const [lidFout, setLidFout] = useState(null);
  const hint = fouten >= 1 ? letters[0] : null;
  const klokTegels = useRef(new Set()); // tegels die het klokje neerlegde (tellen niet mee voor punten)
  const verdiend = useRef(0);
  // live: letters die het kind zelf op de goede plek legde (nog niet "verdiend" tot het woord klopt)
  const liveZelf = status === "goed" || stapLidwoord ? verdiend.current / 10 : typen ? 0 : gekozen.filter((n, idx) => tegels[n].c === letters[idx] && !klokTegels.current.has(n)).length;

  const invoer = typen ? getypt.trim().toLowerCase() : gekozen.map((n) => tegels[n].c).join("");
  const vol = typen ? invoer.length > 0 : gekozen.length === letters.length;

  // ⏱️ Klokje (Mark 2 okt 2026: "steeds 3 seconden, dan geeft de computer de eerste letter, dan de tweede…"):
  // tikt het kind 3 seconden niets, dan legt de app de volgende goede letter neer. Klopt wat er staat niet,
  // dan haalt hij eerst de laatste letter weg. Een woord met hulp telt niet als ster, wel gewoon als klaar.
  const [hulp, setHulp] = useState(0);
  const KLOK_MS = 3000;
  const klokLoopt = !typen && !stapLidwoord && status == null && !vol;
  useEffect(() => {
    if (!klokLoopt) return undefined;
    const t = setTimeout(() => {
      const goedTotNu = gekozen.every((n, idx) => tegels[n].c === letters[idx]);
      if (!goedTotNu) { setGekozen((g) => g.slice(0, -1)); return; }
      const nodig = letters[gekozen.length];
      const idx = tegels.findIndex((tg, n) => tg.c === nodig && !gekozen.includes(n));
      if (idx >= 0) { klokTegels.current.add(idx); setGekozen((g) => [...g, idx]); setHulp((h) => h + 1); }
    }, KLOK_MS);
    return () => clearTimeout(t);
  }, [gekozen, klokLoopt]); // eslint-disable-line react-hooks/exhaustive-deps

  const controleer = () => {
    if (invoer === delen.kaal.toLowerCase()) {
      setStatus("goed");
      verdiend.current = (typen ? letters.length : gekozen.filter((n) => !klokTegels.current.has(n)).length) * 10;
      zeg(`${ZEG.goed} ${delen.kaal}.`);
      setTimeout(() => { setStapLidwoord(true); zeg(`De ${delen.kaal}, of het ${delen.kaal}?`); }, 1300);
      return;
    }
    const f = fouten + 1;
    setFouten(f); setStatus("fout");
    try { track("nk_dictee_fout", { woord, pogingen: f }); } catch { /* */ }
    if (f >= 2) zeg(`Luister goed. ${delen.kaal}.`, { rate: 0.6 });
    else zeg("Nog niet. Probeer het nog eens.");
    setTimeout(() => { setStatus(null); setGekozen([]); setGetypt(""); klokTegels.current = new Set(); }, 1100);
  };
  useEffect(() => { if (!typen && vol && status == null && !stapLidwoord) controleer(); }, [gekozen]); // eslint-disable-line react-hooks/exhaustive-deps

  const kiesLidwoord = (lw) => {
    if (lw === delen.lidwoord) {
      zeg(`${ZEG.goed} ${woord}.`);
      setLidFout(null);
      setTimeout(() => onKlaar(fouten === 0 && lidFout == null && hulp === 0, verdiend.current), 1400);
    } else {
      setLidFout(lw);
      zeg(`Nee, het is ${woord}.`);
    }
  };

  return (
    <div style={S.kaart}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 14, opacity: 0.7 }}>{nr} / {totaal}</span>
        <span style={{ fontSize: 16, fontWeight: 900, color: "#b07d00", background: "#fff7d6", border: "1.5px solid #e0a800", borderRadius: 999, padding: "4px 12px" }} aria-label={`${punten + liveZelf * 10} ${ptLabel}`}>
          ⭐ {punten + liveZelf * 10}
        </span>
        <button type="button" onClick={onVraag} aria-label="Luister nog eens" style={{ ...S.knop, background: "#ffd166", padding: "8px 14px", display: "inline-flex" }}><Luidspreker /></button>
      </div>
      <img src={plaatjeVan(woord)} alt="" style={{ width: 170, height: 170, objectFit: "contain", display: "block", margin: "0 auto" }} />
      {toonEigen && eigenWoord && <div style={{ textAlign: "center", fontSize: 26, fontWeight: 800, margin: "4px 0" }} dir="auto">{eigenWoord}</div>}

      {!stapLidwoord ? (
        <>
          {/* vakjes */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap", margin: "12px 0" }} dir="ltr">
            {typen ? (
              <input value={getypt} onChange={(e) => setGetypt(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && vol) controleer(); }}
                autoFocus autoCapitalize="none" autoCorrect="off" spellCheck={false} aria-label="Schrijf het woord"
                style={{ fontSize: 28, fontWeight: 800, textAlign: "center", width: "80%", padding: "8px 10px", borderRadius: 12, border: `2px solid ${status === "fout" ? "#e53935" : status === "goed" ? "#2e9d57" : "#c9d3e0"}`, color: "#0f2a44", background: "#f7f9fc" }} />
            ) : letters.map((_, n) => {
              const c = gekozen[n] != null ? tegels[gekozen[n]].c : n === 0 && hint ? hint : "";
              const st = status === "goed" ? "goed" : status === "fout" ? "fout" : gekozen[n] == null && n === 0 && hint ? "hint" : null;
              return <span key={n} style={S.vak(st)}>{c}</span>;
            })}
          </div>
          {klokLoopt && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: -4, marginBottom: 8 }} aria-hidden="true">
              <style>{`@keyframes lkKlok { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 62.8; } }`}</style>
              <svg key={`klok-${gekozen.length}`} width="26" height="26" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="#e3e9f2" strokeWidth="3" />
                <circle cx="12" cy="12" r="10" fill="none" stroke="#f5b800" strokeWidth="3" strokeLinecap="round"
                  strokeDasharray="62.8" transform="rotate(-90 12 12)" style={{ animation: `lkKlok ${KLOK_MS}ms linear forwards` }} />
              </svg>
            </div>
          )}
          {typen ? (
            <div style={{ textAlign: "center" }}>
              {hint && <div style={{ fontSize: 14, marginBottom: 6 }}>{hint}…</div>}
              <button type="button" disabled={!vol} onClick={controleer} style={{ ...S.knop, background: "#2e9d57", color: "#fff", opacity: vol ? 1 : 0.5 }}>{k.check}</button>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }} dir="ltr">
              {tegels.map((t, n) => {
                const weg = gekozen.includes(n);
                return <button key={n} type="button" disabled={weg || status != null} onClick={() => setGekozen((g) => [...g, n])} style={S.tegel(weg)}>{t.c}</button>;
              })}
              {gekozen.length > 0 && status == null && (
                <button type="button" onClick={() => setGekozen((g) => g.slice(0, -1))} aria-label="Wis de laatste letter" style={{ ...S.tegel(false), background: "#fdecea", borderColor: "#e8a3a0" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#b3261e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6h11v12H9l-6-6z" /><path d="M12.5 9.5l5 5M17.5 9.5l-5 5" /></svg>
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <div style={{ fontSize: 30, fontWeight: 800, marginBottom: 10 }}>… {delen.kaal}</div>
          <div style={{ fontSize: 15, marginBottom: 8 }}>{k.welk}</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 14 }}>
            {["de", "het"].map((lw) => (
              <button key={lw} type="button" onClick={() => kiesLidwoord(lw)}
                style={{ ...S.knop, fontSize: 26, padding: "12px 26px", background: lidFout === lw ? "#fdecea" : "#eef4ff", color: "#0f2a44", border: `2px solid ${lidFout === lw ? "#e53935" : "#9db8e8"}` }}>{lw}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
