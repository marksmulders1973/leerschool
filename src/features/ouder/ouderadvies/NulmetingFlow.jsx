// 🧭 Nulmeting voor het kind: drie blokjes van vijf minuten, elk apart bewaard.
// Standaard één blokje per dag; na een blokje vraagt de app het KIND of het
// nog een blokje wil (niet verplicht). "Ga verder" weet welk blokje openstaat,
// ook op een ander gekoppeld apparaat (zodra de server-opslag live staat).
import { useEffect, useRef, useState } from "react";
import { getLearnPath } from "../../../learnPaths/pathLoaders.js";
import { blokkenVoorGroep, kwartiercheckVragen, leerpadVragen, maakBlokSessie, volgendBlok, blokkenVandaag, BLOK_DUUR_SEC, WEET_NIET } from "./nulmeting.js";
import { bewaarBlok, haalStand } from "./opslag.js";
import { teksten } from "./teksten.js";
import { isOpenbaar, vergeetMij } from "./kindsleutel.js";
import { vergeetLokaal } from "./opslag.js";
import { F, BlokTreden } from "./ui.jsx";
import { track } from "../../../utils.js";

async function laadVragen(blok) {
  const uit = {};
  for (const c of blok.concepten) {
    if (c.bron === "leerpad") {
      try { uit[c.id] = leerpadVragen(await getLearnPath(c.leerpadId)); } catch { uit[c.id] = { 1: [], 2: [] }; }
    } else {
      // Binnen een niveau schudden, zodat een tweede keer andere vragen geeft.
      const v = kwartiercheckVragen(c.id);
      const schud = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
      uit[c.id] = { 1: schud(v[1]), 2: schud(v[2]) };
    }
  }
  return uit;
}

export default function NulmetingFlow({ naam, groep, onKlaar, onOefenen, keuzes = [] }) {
  const T = teksten(groep, naam);
  const [stand, setStand] = useState(null); // { blokken, server }
  const [fase, setFase] = useState("intro"); // intro | vraag | blokklaar | gestopt | alles
  const [sessie, setSessie] = useState(null);
  const [huidig, setHuidig] = useState(null);
  const [blokNr, setBlokNr] = useState(null);
  const [bewaard, setBewaard] = useState(null);
  const [toch, setToch] = useState(false);
  const [restSec, setRestSec] = useState(BLOK_DUUR_SEC);
  const [vergeten, setVergeten] = useState(false);
  const vraagStart = useRef(Date.now());
  const blokStart = useRef(Date.now());

  useEffect(() => {
    let weg = false;
    haalStand(naam).then((s) => { if (!weg) { setStand(s); if (!volgendBlok(s.blokken)) setFase("alles"); } });
    return () => { weg = true; };
  }, [naam]);

  // Klok: resterende tijd van het blokje.
  useEffect(() => {
    if (fase !== "vraag") return undefined;
    const id = setInterval(() => setRestSec(Math.max(0, BLOK_DUUR_SEC - Math.round((Date.now() - blokStart.current) / 1000))), 1000);
    return () => clearInterval(id);
  }, [fase]);

  const rondBlokAf = async (s, nr) => {
    const res = s.resultaat({ groep });
    const r = await bewaarBlok(naam, groep, res);
    setBewaard(r);
    setStand((prev) => ({ ...prev, blokken: { ...prev.blokken, [nr]: res } }));
    setFase("blokklaar");
    try { track("nulmeting_blok_klaar", { blok: nr, uitslag: res.uitslag, sec: res.sec, server: String(r.server) }); } catch { /* */ }
  };

  // Tijd op terwijl het kind nog naar een vraag kijkt: blokje netjes afronden.
  useEffect(() => {
    if (fase === "vraag" && restSec === 0 && sessie) { sessie.stop(); rondBlokAf(sessie, blokNr); }
  }, [restSec]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!stand) return <div style={F.sub}>Even laden…</div>;
  const klaar = Object.keys(stand.blokken).map(Number);
  const open = volgendBlok(stand.blokken);
  const vandaag = blokkenVandaag(stand.blokken);

  const startBlok = async (nr) => {
    const blok = blokkenVoorGroep(groep).find((b) => b.nr === nr);
    const vragen = await laadVragen(blok);
    blokStart.current = Date.now();
    const s = maakBlokSessie(blok, vragen, { startMs: blokStart.current });
    setSessie(s); setBlokNr(nr); setRestSec(BLOK_DUUR_SEC); setBewaard(null);
    const v = s.volgende();
    vraagStart.current = Date.now();
    setHuidig(v);
    setFase(v ? "vraag" : "blokklaar");
    try { track("nulmeting_blok_start", { blok: nr, groep: String(groep) }); } catch { /* */ }
  };

  const kies = async (i) => {
    if (!sessie || !huidig) return;
    sessie.antwoord(huidig, i, Date.now() - vraagStart.current);
    const v = sessie.volgende();
    if (!v) { await rondBlokAf(sessie, blokNr); return; }
    vraagStart.current = Date.now();
    setHuidig(v);
  };

  const opslagTekst = bewaard ? (bewaard.server === true ? T.kind.opgeslagenOveral : T.kind.opgeslagenHier) : null;

  // ── Alles af ──────────────────────────────────────────────────────────
  if (fase === "alles" || (!open && fase !== "blokklaar")) {
    return (
      <div data-fase="alles">
        <BlokTreden klaar={[1, 2, 3]} />
        <div style={F.kaart}>
          <div style={F.kop}>{T.kind.allesKlaar}</div>
          <div style={F.kopKlein}>{T.kind.klaargezetKop}</div>
          {keuzes.length ? keuzes.map((k) => (
            <button key={k.padId} type="button" onClick={() => onOefenen?.(k.padId)} style={F.optie}>{k.emoji || "📘"} {k.titel}</button>
          )) : <div style={F.sub}>{T.kind.klaargezetLeeg}</div>}
        </div>
        <SchoolUitlog naam={naam} T={T} vergeten={vergeten} onVergeten={() => { vergeetMij(naam); vergeetLokaal(naam); setVergeten(true); }} />
      </div>
    );
  }

  // ── Vraag ─────────────────────────────────────────────────────────────
  if (fase === "vraag" && huidig) {
    const min = Math.floor(restSec / 60);
    const sec = String(restSec % 60).padStart(2, "0");
    return (
      <div data-fase="vraag" data-blok={blokNr}>
        <BlokTreden klaar={klaar} bezig={blokNr} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={F.stapje}>{T.kind.blokKop(blokNr)}</span>
          <span style={{ ...F.sub, margin: 0 }} aria-label="tijd over">⏱ {min}:{sec}</span>
        </div>
        <div style={F.kaartRustig}>
          <div style={{ ...F.sub, marginBottom: 6 }}>{T.kind.vraagVan(huidig.nr, huidig.van)}</div>
          <div style={{ ...F.tekst, fontSize: 16.5, fontWeight: 600 }} data-vraag-id={huidig.vraag.id}>{huidig.vraag.vraag}</div>
          {huidig.vraag.opties.map((o, i) => (
            <button key={i} type="button" onClick={() => kies(i)} style={F.optie} data-optie={i}>{o}</button>
          ))}
          <button type="button" onClick={() => kies(WEET_NIET)} style={{ ...F.secundair, borderStyle: "dashed" }} data-weet-niet>{T.kind.weetNiet}</button>
        </div>
      </div>
    );
  }

  // ── Blokje klaar → nog een? ──────────────────────────────────────────
  if (fase === "blokklaar") {
    const volgende = volgendBlok(stand.blokken);
    const tijdOp = stand.blokken[blokNr]?.sec >= BLOK_DUUR_SEC;
    return (
      <div data-fase="blokklaar" data-blok={blokNr}>
        <BlokTreden klaar={klaar} />
        <div style={F.kaart}>
          {tijdOp && <div style={F.sub}>{T.kind.tijdOp}</div>}
          <div style={F.kop}>{T.kind.blokKlaar(blokNr)}</div>
          {opslagTekst && <div style={F.ok} data-opslag={String(bewaard?.server)}>✓ {opslagTekst}</div>}
          {volgende ? (
            <>
              <div style={{ ...F.tekst, marginTop: 12 }}>{T.kind.nogEen(volgende)}</div>
              <button type="button" onClick={() => startBlok(volgende)} style={F.primair(false)}>{T.kind.knopNogEen}</button>
              <button type="button" onClick={() => { setFase("gestopt"); onKlaar?.(); try { track("nulmeting_kind_stopt", { na_blok: blokNr }); } catch { /* */ } }} style={F.secundair}>{T.kind.knopStoppen}</button>
            </>
          ) : (
            <button type="button" onClick={() => { setFase("alles"); onKlaar?.(); }} style={F.primair(false)}>{T.kind.allesKlaar}</button>
          )}
        </div>
      </div>
    );
  }

  if (fase === "gestopt") {
    return (
      <div data-fase="gestopt">
        <BlokTreden klaar={klaar} />
        <div style={F.kaart}><div style={F.tekst}>{T.kind.gestopt}</div></div>
        <SchoolUitlog naam={naam} T={T} vergeten={vergeten} onVergeten={() => { vergeetMij(naam); vergeetLokaal(naam); setVergeten(true); }} />
      </div>
    );
  }

  // ── Intro / ga verder ────────────────────────────────────────────────
  const alGedaanVandaag = vandaag >= 1 && !toch;
  return (
    <div data-fase="intro" data-open-blok={open}>
      <BlokTreden klaar={klaar} />
      <div style={F.kaart}>
        <div style={F.kop}>{klaar.length ? T.kind.blokKop(open) : T.kind.welkom}</div>
        {!klaar.length && <div style={F.tekst}>{T.kind.geenToets}</div>}
        {alGedaanVandaag ? (
          <>
            <div style={F.tekst}>{T.kind.morgenWeer}</div>
            <button type="button" onClick={() => setToch(true)} style={F.secundair}>{T.kind.knopToch}</button>
          </>
        ) : (
          <button type="button" onClick={() => startBlok(open)} style={F.primair(false)} data-start-blok={open}>
            {klaar.length ? T.kind.knopVerder(open) : T.kind.knopStart}
          </button>
        )}
      </div>
      <SchoolUitlog naam={naam} T={T} vergeten={vergeten} onVergeten={() => { vergeetMij(naam); vergeetLokaal(naam); setVergeten(true); }} />
    </div>
  );
}

function SchoolUitlog({ naam, T, vergeten, onVergeten }) {
  if (vergeten) return <div style={F.ok}>✓ {T.koppelen.schoolUitlogKlaar}</div>;
  if (!isOpenbaar(naam)) return null;
  return <button type="button" onClick={onVergeten} style={F.secundair} data-vergeet-mij>{T.koppelen.schoolUitlogKnop}</button>;
}
