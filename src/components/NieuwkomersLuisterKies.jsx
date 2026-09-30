// 👂 Woordkaarten + Luister en kies (Mark 29 sep 2026: "doe stap 1 en 2" — ingang voor
// nieuwkomers die nog niet kunnen lezen, na de mail van een nieuwkomers-directeur).
//   Woordkaarten: groot plaatje, het woord eronder, tik = de app zegt het woord.
//   Luister en kies: de app zegt een woord, het kind tikt het juiste plaatje uit vier.
//   Pas ná het kiezen verschijnt het woord onder de plaatjes — anders verklapt de tekst het
//   antwoord aan kinderen die wél lezen.
// Plaatjes: Mulberry Symbols (CC BY-SA 4.0), zie learnPaths/nieuwkomersPicto.js. Geen tekst nodig
// om te spelen: alles wordt gezegd, de knoppen hebben een plaatje of een luisterknop.
import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "../utils.js";
import { WOORDKAARTEN, plaatjeVan, PICTO_BRON } from "../learnPaths/nieuwkomersPicto.js";
import { zeg, stopZeggen, ZEG } from "../shared/voorleesModus.js";
import LuisterKnop from "../shared/ui/LuisterKnop.jsx";
import NieuwkomersPlaatjesDictee from "./NieuwkomersPlaatjesDictee.jsx";

const RONDE = 8;
const schud = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

// Een paar vaste kopjes in de taal van het kind (de rest wordt gezegd, niet gelezen).
const KOP = {
  nl: { dictee: "Plaatjesdictee", kaarten: "Woordkaarten", kies: "Luister en kies", onderwerp: "Kies een onderwerp", terug: "Terug", nogEens: "Nog een keer", klaar: "Klaar!" },
  en: { dictee: "Picture dictation", kaarten: "Word cards", kies: "Listen and choose", onderwerp: "Choose a topic", terug: "Back", nogEens: "Again", klaar: "Done!" },
  ar: { dictee: "إملاء بالصور", kaarten: "بطاقات الكلمات", kies: "استمع واختر", onderwerp: "اختر موضوعًا", terug: "رجوع", nogEens: "مرة أخرى", klaar: "انتهيت!" },
  uk: { dictee: "Диктант з картинками", kaarten: "Картки зі словами", kies: "Слухай і вибирай", onderwerp: "Вибери тему", terug: "Назад", nogEens: "Ще раз", klaar: "Готово!" },
  tr: { dictee: "Resimli dikte", kaarten: "Kelime kartları", kies: "Dinle ve seç", onderwerp: "Bir konu seç", terug: "Geri", nogEens: "Bir daha", klaar: "Bitti!" },
  ro: { dictee: "Dictare cu imagini", kaarten: "Cartonașe cu cuvinte", kies: "Ascultă și alege", onderwerp: "Alege o temă", terug: "Înapoi", nogEens: "Încă o dată", klaar: "Gata!" },
  bg: { dictee: "Диктовка с картинки", kaarten: "Карти с думи", kies: "Слушай и избери", onderwerp: "Избери тема", terug: "Назад", nogEens: "Още веднъж", klaar: "Готово!" },
};

const S = {
  kaart: { background: "#ffffff", color: "#0f2a44", borderRadius: 18, padding: 14, boxShadow: "0 4px 16px rgba(0,0,0,0.18)" },
  knop: { border: "none", borderRadius: 999, padding: "12px 18px", fontWeight: 800, fontSize: 16, cursor: "pointer", fontFamily: "inherit" },
  plaatje: (maat) => ({ width: maat, height: maat, objectFit: "contain", display: "block", margin: "0 auto" }),
};

// Getekende pijltjes/knoppen i.p.v. emoji (feedback_geen_emoticons_als_icoon).
const Pijl = ({ links = false, kleur = "#0f2a44" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke={kleur} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    {links ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
  </svg>
);

function Kop({ tekst, onTerug, terugLabel }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <button type="button" onClick={onTerug} aria-label={terugLabel} style={{ ...S.knop, padding: 8, background: "#ffffff", display: "inline-flex" }}>
        <Pijl links />
      </button>
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, flex: 1 }}>{tekst}</h2>
      <LuisterKnop tekst={tekst} maat={40} licht />
    </div>
  );
}

// ── Woordkaarten ─────────────────────────────────────────────────
function Woordkaarten({ thema, k, onTerug }) {
  const [i, setI] = useState(0);
  const woord = thema.woorden[i];
  useEffect(() => { const t = setTimeout(() => zeg(woord), 250); return () => { clearTimeout(t); stopZeggen(); }; }, [woord]);
  const ga = (d) => setI((x) => (x + d + thema.woorden.length) % thema.woorden.length);
  return (
    <div>
      <Kop tekst={thema.thema} onTerug={onTerug} terugLabel={k.terug} />
      <button type="button" onClick={() => zeg(woord)} aria-label={`Luister: ${woord}`} style={{ ...S.kaart, width: "100%", border: "none", cursor: "pointer", display: "block" }}>
        <img src={plaatjeVan(woord)} alt="" style={S.plaatje(220)} />
        <div style={{ fontSize: 30, fontWeight: 800, marginTop: 10, textAlign: "center" }}>{woord}</div>
      </button>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
        <button type="button" onClick={() => ga(-1)} aria-label="Vorige" style={{ ...S.knop, background: "#ffffff", display: "inline-flex" }}><Pijl links /></button>
        <span style={{ fontSize: 15, opacity: 0.8 }}>{i + 1} / {thema.woorden.length}</span>
        <button type="button" onClick={() => ga(1)} aria-label="Volgende" style={{ ...S.knop, background: "#2e9d57", display: "inline-flex" }}><Pijl kleur="#ffffff" /></button>
      </div>
    </div>
  );
}

// ── Luister en kies ──────────────────────────────────────────────
function maakRonde(thema) {
  const woorden = thema.woorden.filter((w) => plaatjeVan(w));
  return schud(woorden).slice(0, Math.min(RONDE, woorden.length)).map((doel) => {
    const anders = schud(woorden.filter((w) => w !== doel)).slice(0, 3);
    return { doel, opties: schud([doel, ...anders]) };
  });
}

function LuisterEnKies({ thema, k, onTerug }) {
  const [ronde, setRonde] = useState(() => maakRonde(thema));
  const [i, setI] = useState(0);
  const [gekozen, setGekozen] = useState(null);
  const [fouten, setFouten] = useState(0);        // pogingen fout bij deze vraag
  const score = useRef(0);
  const v = ronde[i];
  const klaar = i >= ronde.length;

  useEffect(() => {
    if (klaar || !v) return undefined;
    const t = setTimeout(() => zeg(v.doel), 300);
    return () => { clearTimeout(t); stopZeggen(); };
  }, [i, ronde]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!klaar) return;
    zeg(`${ZEG.klaar} ${score.current} van ${ronde.length}.`);
    try { track("nk_luister_klaar", { thema: thema.id, goed: score.current, totaal: ronde.length }); } catch { /* */ }
  }, [klaar]); // eslint-disable-line react-hooks/exhaustive-deps

  const kies = (w) => {
    if (gekozen === v.doel) return;
    setGekozen(w);
    if (w === v.doel) {
      if (fouten === 0) score.current += 1;
      zeg(`${ZEG.goed} ${v.doel}.`);
      setTimeout(() => { setI((x) => x + 1); setGekozen(null); setFouten(0); }, 1600);
    } else {
      // fout: zeg het nog eens, kind mag opnieuw kiezen (leren, geen toets)
      setFouten((f) => f + 1);
      zeg(`Nee, dat is ${w}. Luister: ${v.doel}.`);
    }
  };

  if (klaar) {
    return (
      <div>
        <Kop tekst={thema.thema} onTerug={onTerug} terugLabel={k.terug} />
        <div style={{ ...S.kaart, textAlign: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 800 }}>{k.klaar}</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "12px 0", flexWrap: "wrap" }} aria-label={`${score.current} van ${ronde.length} goed`}>
            {ronde.map((_, n) => (
              <svg key={n} width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill={n < score.current ? "#f5b800" : "#dfe5ee"} />
              </svg>
            ))}
          </div>
          <button type="button" onClick={() => { score.current = 0; setRonde(maakRonde(thema)); setI(0); setGekozen(null); setFouten(0); }} style={{ ...S.knop, background: "#2e9d57", color: "#fff" }}>{k.nogEens}</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Kop tekst={thema.thema} onTerug={onTerug} terugLabel={k.terug} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
        <button type="button" onClick={() => zeg(v.doel)} aria-label="Luister nog eens"
          style={{ ...S.knop, background: "#ffd166", color: "#3a2600", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 18 }}>
          <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#3a2600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="#3a2600" /><path d="M15.5 9a4 4 0 0 1 0 6" /><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
          </svg>
        </button>
        <span style={{ fontSize: 15, opacity: 0.8 }}>{i + 1} / {ronde.length}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {v.opties.map((w) => {
          const isGoed = gekozen != null && w === v.doel && gekozen === v.doel;
          const isFout = gekozen === w && w !== v.doel;
          const toonWoord = gekozen === v.doel || isFout;
          return (
            <button key={w} type="button" onClick={() => kies(w)} aria-label={toonWoord ? w : "plaatje"}
              style={{ ...S.kaart, padding: 10, cursor: "pointer", border: `4px solid ${isGoed ? "#2e9d57" : isFout ? "#e53935" : "transparent"}`, opacity: gekozen === v.doel && !isGoed ? 0.45 : 1 }}>
              <img src={plaatjeVan(w)} alt="" style={S.plaatje(120)} />
              <div style={{ minHeight: 24, fontSize: 17, fontWeight: 800, marginTop: 6, textAlign: "center" }}>{toonWoord ? w : ""}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Keuze: onderwerp + soort ─────────────────────────────────────
export default function NieuwkomersLuisterKies({ taal = "nl", beginSoort = "kies", onKlaar }) {
  const k = KOP[taal] || KOP.nl;
  const [soort, setSoort] = useState(beginSoort); // "kaarten" | "kies"
  const [thema, setThema] = useState(null);
  const themas = useMemo(() => (WOORDKAARTEN || []).filter((t) => (t.woorden || []).filter((w) => plaatjeVan(w) && (soort !== "dictee" || /^(de|het) /i.test(w))).length >= 4), [soort]);
  useEffect(() => () => stopZeggen(), []);
  useEffect(() => { try { track("nk_luister_open", { soort, taal }); } catch { /* */ } }, [soort]); // eslint-disable-line react-hooks/exhaustive-deps

  if (thema) {
    const terug = () => { stopZeggen(); setThema(null); };
    if (soort === "dictee") return <div><Kop tekst={thema.thema} onTerug={terug} terugLabel={k.terug} /><NieuwkomersPlaatjesDictee thema={thema} taal={taal} /></div>;
    return soort === "kaarten" ? <Woordkaarten thema={thema} k={k} onTerug={terug} /> : <LuisterEnKies thema={thema} k={k} onTerug={terug} />;
  }

  return (
    <div>
      <Kop tekst={k[soort] || k.kies} onTerug={() => { stopZeggen(); onKlaar && onKlaar(); }} terugLabel={k.terug} />
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {[["kaarten", k.kaarten, "Woordkaarten"], ["kies", k.kies, "Luister en kies"], ["dictee", k.dictee, "Plaatjesdictee"]].map(([id, label, nlNaam]) => (
          <button key={id} type="button" onClick={() => { setSoort(id); zeg(nlNaam); }} aria-pressed={soort === id}
            style={{ ...S.knop, flex: 1, fontSize: 13.5, padding: "10px 8px", background: soort === id ? "#2e9d57" : "#ffffff", color: soort === id ? "#fff" : "#0f2a44" }}>
            {label}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {themas.map((t) => (
          <button key={t.id} type="button" onClick={() => { setThema(t); try { track("nk_luister_thema", { thema: t.id, soort }); } catch { /* */ } }}
            style={{ ...S.kaart, cursor: "pointer", border: "none", textAlign: "center", position: "relative" }}>
            <img src={plaatjeVan(t.woorden.find((w) => plaatjeVan(w)))} alt="" style={S.plaatje(90)} />
            <div style={{ fontSize: 16, fontWeight: 800, marginTop: 6 }}>{t.thema}</div>
            <LuisterKnop tekst={t.thema} maat={34} licht style={{ position: "absolute", top: 6, right: 6 }} />
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11.5, opacity: 0.7, marginTop: 14 }}>{PICTO_BRON}</p>
    </div>
  );
}
