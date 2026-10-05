// 👂 Woordkaarten + Luister en kies (Mark 29 sep 2026: "doe stap 1 en 2" — ingang voor
// nieuwkomers die nog niet kunnen lezen, na de mail van een nieuwkomers-directeur).
//   Woordkaarten: groot plaatje, het woord eronder, tik = de app zegt het woord.
//   Luister en kies: de app zegt een woord, het kind tikt het juiste plaatje uit vier.
//   Pas ná het kiezen verschijnt het woord onder de plaatjes — anders verklapt de tekst het
//   antwoord aan kinderen die wél lezen.
// Zinnen (30 sep 2026, zelfde directeur: "het waardevolst zijn de zinnen"): Zinkaarten + Luister en
//   kies met klaszinnen ("Mag ik naar de wc?"), zie learnPaths/nieuwkomersZinnen.js. Zelfde schermen
//   als bij de woorden; een zinkaart toont ook de zin in de thuistaal (lk_steuntaal).
// Plaatjes: Mulberry Symbols (CC BY-SA 4.0), zie learnPaths/nieuwkomersPicto.js. Geen tekst nodig
// om te spelen: alles wordt gezegd, de knoppen hebben een plaatje of een luisterknop.
import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "../utils.js";
import { WOORDKAARTEN, plaatjeVan, PICTO_BRON } from "../learnPaths/nieuwkomersPicto.js";
import { ZIN_THEMAS, zinnenVan } from "../learnPaths/nieuwkomersZinnen.js";
import { zeg, zegInTaal, heeftStem, stopZeggen, ZEG, zegInStukjes } from "../shared/voorleesModus.js";
import LuisterKnop from "../shared/ui/LuisterKnop.jsx";
import NieuwkomersPlaatjesDictee from "./NieuwkomersPlaatjesDictee.jsx";
import { PUNT, PuntenTeller, PuntenUitslag } from "./nieuwkomersPunten.jsx";

const RONDE = 8;
const schud = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

// Een paar vaste kopjes in de taal van het kind (de rest wordt gezegd, niet gelezen).
const KOP = {
  nl: { zinnen: "Zinnen", zinkaarten: "Zinkaarten", dictee: "Plaatjesdictee", kaarten: "Woordkaarten", kies: "Luister en kies", onderwerp: "Kies een onderwerp", terug: "Terug", nogEens: "Nog een keer", klaar: "Klaar!" },
  en: { zinnen: "Sentences", zinkaarten: "Sentence cards", dictee: "Picture dictation", kaarten: "Word cards", kies: "Listen and choose", onderwerp: "Choose a topic", terug: "Back", nogEens: "Again", klaar: "Done!" },
  ar: { zinnen: "جمل", zinkaarten: "بطاقات الجمل", dictee: "إملاء بالصور", kaarten: "بطاقات الكلمات", kies: "استمع واختر", onderwerp: "اختر موضوعًا", terug: "رجوع", nogEens: "مرة أخرى", klaar: "انتهيت!" },
  uk: { zinnen: "Речення", zinkaarten: "Картки з реченнями", dictee: "Диктант з картинками", kaarten: "Картки зі словами", kies: "Слухай і вибирай", onderwerp: "Вибери тему", terug: "Назад", nogEens: "Ще раз", klaar: "Готово!" },
  tr: { zinnen: "Cümleler", zinkaarten: "Cümle kartları", dictee: "Resimli dikte", kaarten: "Kelime kartları", kies: "Dinle ve seç", onderwerp: "Bir konu seç", terug: "Geri", nogEens: "Bir daha", klaar: "Bitti!" },
  ro: { zinnen: "Propoziții", zinkaarten: "Cartonașe cu propoziții", dictee: "Dictare cu imagini", kaarten: "Cartonașe cu cuvinte", kies: "Ascultă și alege", onderwerp: "Alege o temă", terug: "Înapoi", nogEens: "Încă o dată", klaar: "Gata!" },
  bg: { zinnen: "Изречения", zinkaarten: "Карти с изречения", dictee: "Диктовка с картинки", kaarten: "Карти с думи", kies: "Слушай и избери", onderwerp: "Избери тема", terug: "Назад", nogEens: "Още веднъж", klaar: "Готово!" },
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

// Eén lijst "kaartjes" voor beide soorten: { tekst, plaatje, groep?, vertaling? }.
// Woorden: tekst = het woord. Zinnen: tekst = de zin; `groep` = plaatjes die op elkaar lijken.
const woordItems = (thema) => thema.woorden.filter((w) => plaatjeVan(w)).map((w) => ({ tekst: w, plaatje: plaatjeVan(w) }));
const zinItems = (thema) => zinnenVan(thema.thema).map((z) => ({ tekst: z.zin, plaatje: z.plaatje, groep: z.groep, vertaling: z.vertaling }));
const RTL = new Set(["ar"]);

// Heeft dit toestel een stem voor de thuistaal? De stemmen laden soms pas na een tel (voiceschanged).
function useStem(taal) {
  const [ja, setJa] = useState(() => taal !== "nl" && heeftStem(taal));
  useEffect(() => {
    if (taal === "nl" || typeof window === "undefined" || !window.speechSynthesis) return undefined;
    const f = () => setJa(heeftStem(taal));
    f();
    window.speechSynthesis.addEventListener?.("voiceschanged", f);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", f);
  }, [taal]);
  return ja;
}

// ── Woordkaarten / Zinkaarten ────────────────────────────────────
function Kaarten({ titel, items, k, onTerug, taal = "nl", zin = false }) {
  const [i, setI] = useState(0);
  const item = items[i];
  const stem = useStem(taal);
  // 🐢 Zinkaart (5 okt 2026, directeur WereldKidz: "het gaat nu erg snel"): bij het verschijnen de
  // reeks zin → woord voor woord → zin langzaam (zegInStukjes), met het klinkende woord opgelicht.
  // Een tik daarna zegt alléén de zin, langzaam — anders hoort een kind bij elke tik de hele reeks.
  // Woordkaarten: gewoon het woord, iets rustiger (0,85).
  const [woordIdx, setWoordIdx] = useState(-1);
  const [reeksGedaan, setReeksGedaan] = useState(false);
  const reeks = () => { setReeksGedaan(false); zegInStukjes(item.tekst, { onWoord: setWoordIdx, onEnd: () => { setWoordIdx(-1); setReeksGedaan(true); } }); };
  useEffect(() => {
    setWoordIdx(-1); setReeksGedaan(false);
    const t = setTimeout(() => (zin ? reeks() : zeg(item.tekst, { rate: 0.85 })), 250);
    return () => { clearTimeout(t); stopZeggen(); };
  }, [item.tekst]); // eslint-disable-line react-hooks/exhaustive-deps
  const tik = () => { if (!zin) zeg(item.tekst, { rate: 0.85 }); else if (reeksGedaan) zeg(item.tekst, { rate: 0.8, onWoord: setWoordIdx, onEnd: () => setWoordIdx(-1) }); else reeks(); };
  const ga = (d) => setI((x) => (x + d + items.length) % items.length);
  const eigen = zin && taal !== "nl" ? item.vertaling?.[taal] : null;
  const woorden = item.tekst.split(/\s+/);
  return (
    <div>
      <Kop tekst={titel} onTerug={onTerug} terugLabel={k.terug} />
      <button type="button" onClick={tik} aria-label={`Luister: ${item.tekst}`} style={{ ...S.kaart, width: "100%", border: "none", cursor: "pointer", display: "block" }}>
        <img src={item.plaatje} alt="" style={S.plaatje(zin ? 200 : 220)} />
        <div style={{ fontSize: zin ? 26 : 30, lineHeight: 1.2, fontWeight: 800, marginTop: 10, textAlign: "center" }}>
          {zin ? woorden.map((w, wi) => (
            <span key={wi} style={{ display: "inline-block", padding: "0 4px", borderRadius: 8, background: woordIdx === wi ? "#ffd166" : "transparent", transition: "background 120ms" }}>{w}</span>
          )) : item.tekst}
        </div>
      </button>
      {eigen && (
        // De zin in de eigen taal, klein onder de kaart. Tik = voorlezen in die taal (als het toestel die stem heeft).
        <button type="button" onClick={() => { if (stem) zegInTaal(eigen, taal); }} aria-label={eigen} lang={taal} dir={RTL.has(taal) ? "rtl" : "ltr"}
          style={{ ...S.kaart, width: "100%", marginTop: 10, padding: "8px 12px", border: "none", cursor: stem ? "pointer" : "default", display: "flex", alignItems: "center", gap: 10, background: "#fff4cc", color: "#3a2600", fontSize: 18, fontWeight: 700, textAlign: "start", fontFamily: "inherit", boxShadow: "none" }}>
          <span style={{ flex: 1 }}>{eigen}</span>
          {stem && (
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#3a2600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="#3a2600" /><path d="M15.5 9a4 4 0 0 1 0 6" /><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
            </svg>
          )}
        </button>
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
        <button type="button" onClick={() => ga(-1)} aria-label="Vorige" style={{ ...S.knop, background: "#ffffff", display: "inline-flex" }}><Pijl links /></button>
        <span style={{ fontSize: 15, opacity: 0.8 }}>{i + 1} / {items.length}</span>
        <button type="button" onClick={() => ga(1)} aria-label="Volgende" style={{ ...S.knop, background: "#2e9d57", display: "inline-flex" }}><Pijl kleur="#ffffff" /></button>
      </div>
    </div>
  );
}

// ── Luister en kies ──────────────────────────────────────────────
// Vier plaatjes per vraag. Plaatjes met dezelfde `groep` (lijken op elkaar) komen nooit samen.
function maakRonde(items) {
  const groepVan = (it) => it.groep || `#${it.tekst}`;
  const plaatje = Object.fromEntries(items.map((it) => [it.tekst, it.plaatje]));
  return schud(items).slice(0, Math.min(RONDE, items.length)).map((doel) => {
    const gebruikt = new Set([groepVan(doel)]);
    const anders = [];
    for (const it of schud(items)) {
      if (anders.length === 3) break;
      if (gebruikt.has(groepVan(it))) continue;
      gebruikt.add(groepVan(it)); anders.push(it);
    }
    return { doel: doel.tekst, opties: schud([doel, ...anders].map((it) => it.tekst)), plaatje };
  });
}

function LuisterEnKies({ themaId, titel, items, k, onTerug, zin = false, taal = "nl" }) {
  const [ronde, setRonde] = useState(() => maakRonde(items));
  const [i, setI] = useState(0);
  const [gekozen, setGekozen] = useState(null);
  const [fouten, setFouten] = useState(0);        // pogingen fout bij deze vraag
  const score = useRef(0);
  // ⭐ Punten (Mark 2 okt 2026): 10 per plaatje dat in één keer goed is gekozen.
  const [punten, setPunten] = useState(0);
  const v = ronde[i];
  const klaar = i >= ronde.length;

  useEffect(() => {
    if (klaar || !v) return undefined;
    const t = setTimeout(() => zeg(v.doel, { rate: 0.85 }), 300);
    return () => { clearTimeout(t); stopZeggen(); };
  }, [i, ronde]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!klaar) return;
    try { track("nk_luister_klaar", { thema: themaId, soort: zin ? "zinnen" : "woorden", goed: score.current, totaal: ronde.length, punten }); } catch { /* */ }
  }, [klaar]); // eslint-disable-line react-hooks/exhaustive-deps

  const kies = (w) => {
    if (gekozen === v.doel) return;
    setGekozen(w);
    if (w === v.doel) {
      if (fouten === 0) { score.current += 1; setPunten((p) => p + PUNT); }
      zeg(`${ZEG.goed} ${v.doel}.`, { rate: 0.85 });
      setTimeout(() => { setI((x) => x + 1); setGekozen(null); setFouten(0); }, 1600);
    } else {
      // fout: zeg het nog eens, kind mag opnieuw kiezen (leren, geen toets)
      setFouten((f) => f + 1);
      zeg(zin ? `Nee. Dat is: ${w} Luister: ${v.doel}` : `Nee, dat is ${w}. Luister: ${v.doel}.`, { rate: 0.85 });
    }
  };

  if (klaar) {
    return (
      <div>
        <Kop tekst={titel} onTerug={onTerug} terugLabel={k.terug} />
        <div style={{ ...S.kaart, textAlign: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 800 }}>{k.klaar}</div>
          <PuntenUitslag punten={punten} max={ronde.length * PUNT} taal={taal} recordKey={`lk_nkl_record_${themaId}`} />
          <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "12px 0", flexWrap: "wrap" }} aria-label={`${score.current} van ${ronde.length} goed`}>
            {ronde.map((_, n) => (
              <svg key={n} width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill={n < score.current ? "#f5b800" : "#dfe5ee"} />
              </svg>
            ))}
          </div>
          <button type="button" onClick={() => { score.current = 0; setPunten(0); setRonde(maakRonde(items)); setI(0); setGekozen(null); setFouten(0); }} style={{ ...S.knop, background: "#2e9d57", color: "#fff" }}>{k.nogEens}</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Kop tekst={titel} onTerug={onTerug} terugLabel={k.terug} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
        <button type="button" onClick={() => zeg(v.doel, { rate: 0.85 })} aria-label="Luister nog eens"
          style={{ ...S.knop, background: "#ffd166", color: "#3a2600", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 18 }}>
          <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#3a2600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="#3a2600" /><path d="M15.5 9a4 4 0 0 1 0 6" /><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
          </svg>
        </button>
        <span style={{ fontSize: 15, opacity: 0.8 }}>{i + 1} / {ronde.length}</span>
        <PuntenTeller punten={punten} taal={taal} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {v.opties.map((w) => {
          const isGoed = gekozen != null && w === v.doel && gekozen === v.doel;
          const isFout = gekozen === w && w !== v.doel;
          const toonWoord = gekozen === v.doel || isFout;
          return (
            <button key={w} type="button" onClick={() => kies(w)} aria-label={toonWoord ? w : "plaatje"}
              style={{ ...S.kaart, padding: 10, cursor: "pointer", border: `4px solid ${isGoed ? "#2e9d57" : isFout ? "#e53935" : "transparent"}`, opacity: gekozen === v.doel && !isGoed ? 0.45 : 1 }}>
              <img src={v.plaatje[w]} alt="" style={S.plaatje(120)} />
              <div style={{ minHeight: 24, fontSize: zin ? 15 : 17, lineHeight: 1.2, fontWeight: 800, marginTop: 6, textAlign: "center" }}>{toonWoord ? w : ""}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Keuze: onderwerp + soort ─────────────────────────────────────
// De twee delen van "Zinnen": [id, veld in KOP, naam die de app zegt].
const ZIN_DELEN = [["kaarten", "zinkaarten", "Zinkaarten"], ["kies", "kies", "Luister en kies"]];

export default function NieuwkomersLuisterKies({ taal = "nl", beginSoort = "kies", onKlaar }) {
  const k = KOP[taal] || KOP.nl;
  const [soort, setSoort] = useState(beginSoort); // "kaarten" | "kies" | "dictee" | "zinnen"
  const [zinDeel, setZinDeel] = useState("kaarten"); // bij Zinnen: "kaarten" (Zinkaarten) | "kies"
  const [thema, setThema] = useState(null);
  const themas = useMemo(() => {
    if (soort === "zinnen") return ZIN_THEMAS.filter((t) => zinnenVan(t.thema).length >= 4);
    return (WOORDKAARTEN || []).filter((t) => (t.woorden || []).filter((w) => plaatjeVan(w) && (soort !== "dictee" || /^(de|het) /i.test(w))).length >= 4);
  }, [soort]);
  useEffect(() => () => stopZeggen(), []);
  useEffect(() => { try { track("nk_luister_open", { soort, taal }); } catch { /* */ } }, [soort]); // eslint-disable-line react-hooks/exhaustive-deps

  if (thema) {
    const terug = () => { stopZeggen(); setThema(null); };
    if (soort === "dictee") return <div><Kop tekst={thema.thema} onTerug={terug} terugLabel={k.terug} /><NieuwkomersPlaatjesDictee thema={thema} taal={taal} /></div>;
    if (soort === "zinnen") {
      const items = zinItems(thema);
      return zinDeel === "kaarten"
        ? <Kaarten titel={thema.thema} items={items} k={k} onTerug={terug} taal={taal} zin />
        : <LuisterEnKies themaId={`zin-${thema.id}`} titel={thema.thema} items={items} k={k} onTerug={terug} zin taal={taal} />;
    }
    const items = woordItems(thema);
    return soort === "kaarten"
      ? <Kaarten titel={thema.thema} items={items} k={k} onTerug={terug} taal={taal} />
      : <LuisterEnKies themaId={thema.id} titel={thema.thema} items={items} k={k} onTerug={terug} />;
  }

  const eerstePlaatje = (t) => (soort === "zinnen" ? zinnenVan(t.thema)[0]?.plaatje : plaatjeVan(t.woorden.find((w) => plaatjeVan(w))));
  return (
    <div>
      <Kop tekst={k[soort] || k.kies} onTerug={() => { stopZeggen(); onKlaar && onKlaar(); }} terugLabel={k.terug} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
        {[["kaarten", k.kaarten, "Woordkaarten"], ["kies", k.kies, "Luister en kies"], ["dictee", k.dictee, "Plaatjesdictee"], ["zinnen", k.zinnen, "Zinnen"]].map(([id, label, nlNaam]) => (
          <button key={id} type="button" onClick={() => { setSoort(id); zeg(nlNaam); }} aria-pressed={soort === id}
            style={{ ...S.knop, fontSize: 13.5, padding: "10px 8px", background: soort === id ? "#2e9d57" : "#ffffff", color: soort === id ? "#fff" : "#0f2a44" }}>
            {label}
          </button>
        ))}
      </div>
      {soort === "zinnen" && (
        // Twee delen: eerst de zinnen leren (kaarten), dan horen en kiezen.
        <div role="group" style={{ display: "flex", gap: 8, marginBottom: 14, background: "rgba(255,255,255,.14)", borderRadius: 999, padding: 4 }}>
          {ZIN_DELEN.map(([id, kopVeld, nlNaam]) => (
            <button key={id} type="button" onClick={() => { setZinDeel(id); zeg(nlNaam); }} aria-pressed={zinDeel === id}
              style={{ ...S.knop, flex: 1, fontSize: 14, padding: "9px 8px", background: zinDeel === id ? "#ffd166" : "transparent", color: zinDeel === id ? "#3a2600" : "#ffffff" }}>
              {k[kopVeld]}
            </button>
          ))}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {themas.map((t) => (
          <button key={t.id} type="button" onClick={() => { setThema(t); try { track("nk_luister_thema", { thema: t.id, soort: soort === "zinnen" ? `zinnen-${zinDeel}` : soort }); } catch { /* */ } }}
            style={{ ...S.kaart, cursor: "pointer", border: "none", textAlign: "center", position: "relative" }}>
            <img src={eerstePlaatje(t)} alt="" style={S.plaatje(90)} />
            <div style={{ fontSize: 16, fontWeight: 800, marginTop: 6 }}>{t.thema}</div>
            <LuisterKnop tekst={t.thema} maat={34} licht style={{ position: "absolute", top: 6, right: 6 }} />
          </button>
        ))}
      </div>
      <p style={{ fontSize: 11.5, opacity: 0.7, marginTop: 14 }}>{PICTO_BRON}</p>
    </div>
  );
}
