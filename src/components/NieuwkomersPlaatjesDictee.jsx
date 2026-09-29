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

// Vertalingen: vaste lijst per plaatjeswoord (nieuwkomersVertalingen.js: "de appel" → { en, ar, uk, tr }).
// Ontbreekt een woord of taal, dan is er geen eigen-taal-stand voor dat woord.

const KOP = {
  nl: { nl: "Nederlands", eigen: "Mijn taal", typen: "Zelf typen", tegels: "Letters", welk: "de of het?", nogEens: "Nog een keer", klaar: "Klaar!", check: "Klaar" },
  en: { nl: "Dutch", eigen: "My language", typen: "Type it", tegels: "Letters", welk: "de or het?", nogEens: "Again", klaar: "Done!", check: "Done" },
  ar: { nl: "الهولندية", eigen: "لغتي", typen: "اكتب بنفسك", tegels: "حروف", welk: "de أو het؟", nogEens: "مرة أخرى", klaar: "انتهيت!", check: "تمّ" },
  uk: { nl: "Нідерландська", eigen: "Моя мова", typen: "Набрати самому", tegels: "Літери", welk: "de чи het?", nogEens: "Ще раз", klaar: "Готово!", check: "Готово" },
  tr: { nl: "Hollandaca", eigen: "Benim dilim", typen: "Kendin yaz", tegels: "Harfler", welk: "de mi het mi?", nogEens: "Bir daha", klaar: "Bitti!", check: "Tamam" },
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
    zeg(`${ZEG.klaar} ${score.current} van ${ronde.length}.`);
    try { track("nk_dictee_klaar", { thema: thema.id, stand: echteStand, goed: score.current, totaal: ronde.length, typen: typen ? 1 : 0 }); } catch { /* */ }
  }, [klaar]); // eslint-disable-line react-hooks/exhaustive-deps

  if (klaar) {
    return (
      <div style={{ ...S.kaart, textAlign: "center" }}>
        <div style={{ fontSize: 26, fontWeight: 800 }}>{k.klaar}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "12px 0", flexWrap: "wrap" }} aria-label={`${score.current} van ${ronde.length} goed`}>
          {ronde.map((_, n) => (
            <svg key={n} width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill={n < score.current ? "#f5b800" : "#dfe5ee"} /></svg>
          ))}
        </div>
        <button type="button" onClick={() => { score.current = 0; setRonde(maakRonde()); setI(0); }} style={{ ...S.knop, background: "#2e9d57", color: "#fff" }}>{k.nogEens}</button>
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
        nr={i + 1} totaal={ronde.length} onVraag={vraag}
        onKlaar={(zonderFout) => { if (zonderFout) score.current += 1; setI((x) => x + 1); }} />
    </div>
  );
}

function Opgave({ woord, delen, k, typen, eigenWoord, toonEigen, nr, totaal, onVraag, onKlaar }) {
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

  const invoer = typen ? getypt.trim().toLowerCase() : gekozen.map((n) => tegels[n].c).join("");
  const vol = typen ? invoer.length > 0 : gekozen.length === letters.length;

  const controleer = () => {
    if (invoer === delen.kaal.toLowerCase()) {
      setStatus("goed");
      zeg(`${ZEG.goed} ${delen.kaal}.`);
      setTimeout(() => { setStapLidwoord(true); zeg(`De ${delen.kaal}, of het ${delen.kaal}?`); }, 1300);
      return;
    }
    const f = fouten + 1;
    setFouten(f); setStatus("fout");
    try { track("nk_dictee_fout", { woord, pogingen: f }); } catch { /* */ }
    if (f >= 2) zeg(`Luister goed. ${delen.kaal}.`, { rate: 0.6 });
    else zeg("Nog niet. Probeer het nog eens.");
    setTimeout(() => { setStatus(null); setGekozen([]); setGetypt(""); }, 1100);
  };
  useEffect(() => { if (!typen && vol && status == null && !stapLidwoord) controleer(); }, [gekozen]); // eslint-disable-line react-hooks/exhaustive-deps

  const kiesLidwoord = (lw) => {
    if (lw === delen.lidwoord) {
      zeg(`${ZEG.goed} ${woord}.`);
      setLidFout(null);
      setTimeout(() => onKlaar(fouten === 0 && lidFout == null), 1400);
    } else {
      setLidFout(lw);
      zeg(`Nee, het is ${woord}.`);
    }
  };

  return (
    <div style={S.kaart}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 14, opacity: 0.7 }}>{nr} / {totaal}</span>
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
