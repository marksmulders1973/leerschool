// 🧭 Ouderkant per kind: geen chat, maar korte voorstellen.
//  0 blokjes  → "Ik adviseer je om <naam> te laten beginnen met een korte basistest…"
//  1-2 blokjes → voorlopig voorstel per afgerond vak
//  3 blokjes  → het drietal, "Goed zo, of wil je iets wisselen?"
//  daarna     → wekelijks vervolg: dit ging goed, dit nog niet, volgende week dit.
import { useEffect, useMemo, useState } from "react";
import { drietal, voorstelVoorBlok, wissel, weekVervolg } from "./advies.js";
import { teksten } from "./teksten.js";
import { VAK_NAAM } from "./nulmeting.js";
import { leesKeuzes, bewaarKeuzes } from "./opslag.js";
import { zetKlaar } from "../../../shared/ouderKlaargezet.js";
import { F, UitslagLabel, BlokTreden } from "./ui.jsx";
import { track } from "../../../utils.js";

function VoorstelKaart({ v, T, open, onOpen, onWissel }) {
  return (
    <div style={{ ...F.kaartRustig, marginBottom: 10, padding: 14 }} data-voorstel={v.padId}>
      <button type="button" onClick={onOpen} aria-expanded={open} style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 24 }} aria-hidden="true">{v.emoji}</span>
          <div style={{ flex: 1 }}>
            <div style={F.kopKlein}>{v.titel}</div>
            <div style={{ ...F.sub, margin: "0 0 4px" }}>{VAK_NAAM[v.vak] || v.vak}{v.minuten ? ` · ongeveer ${v.minuten} minuten` : ""}</div>
            <div style={{ ...F.sub, margin: 0, color: "rgba(255,255,255,0.75)" }}>{T.ouder.reden[v.reden] || ""}</div>
          </div>
          <span style={{ ...F.sub, margin: 0, color: "#69f0ae", whiteSpace: "nowrap" }}>wissel ▾</span>
        </div>
      </button>
      {open && (
        <div style={{ marginTop: 10 }} data-alternatieven>
          <div style={{ ...F.sub, marginBottom: 4 }}>{T.ouder.wisselKop}</div>
          {v.alternatieven.map((a) => (
            <button key={a.padId} type="button" onClick={() => onWissel(a.padId)} style={F.optie} data-alternatief={a.padId}>
              {a.emoji} {a.titel}
              <div style={{ ...F.sub, margin: "2px 0 0" }}>{T.ouder.reden[a.reden] || ""}</div>
            </button>
          ))}
          <button type="button" onClick={onOpen} style={F.link}>{T.ouder.wisselTerug}</button>
        </div>
      )}
    </div>
  );
}

/**
 * @param {object} p
 * @param {string} p.naam
 * @param {string} p.groep
 * @param {object} p.blokken          nulmeting-stand { 1: {...}, 2: ..., 3: ... }
 * @param {string|null} p.linkId      ouder-koppeling (null = alleen op dit apparaat)
 * @param {boolean} p.ouderAccount    is de volwassene echt ingelogd (klaarzetten via server)?
 * @param {object} [p.voortgang]      { [padId]: { stappenGedaan, goed, fout } } voor het weekvervolg
 * @param {()=>void} [p.onLaatBeginnen]
 */
export default function OuderVoorstellen({ naam, groep, blokken = {}, linkId = null, ouderAccount = false, voortgang = null, onLaatBeginnen, opDitApparaat = true }) {
  const T = teksten(groep, naam);
  const [keuzes, setKeuzes] = useState(() => leesKeuzes(naam));
  const klaar = Object.keys(blokken).map(Number).sort();
  const [overrides, setOverrides] = useState({}); // blok → voorstel na wisselen
  const [open, setOpen] = useState(null);
  const [akkoord, setAkkoord] = useState(null); // null | "server" | "lokaal" | "fout"

  useEffect(() => { setKeuzes(leesKeuzes(naam)); }, [naam]);

  const basis = useMemo(() => drietal(groep, blokken), [groep, blokken]);
  // Een eerder gemaakte keuze (bv. na blok 1 al gewisseld + "goed zo") blijft staan.
  const eerder = useMemo(() => {
    const uit = {};
    for (const v of basis) {
      const k = keuzes.find((x) => x.blok === v.blok);
      if (k && k.padId !== v.padId) uit[v.blok] = wissel(groep, blokken[v.blok], v, k.padId, { anderen: basis.filter((x) => x.blok !== v.blok).map((x) => x.padId) });
    }
    return uit;
  }, [basis, keuzes, groep, blokken]);
  const voorstellen = basis.map((v) => overrides[v.blok] || eerder[v.blok] || v);

  const doeWissel = (v, padId) => {
    const anderen = voorstellen.filter((x) => x.blok !== v.blok).map((x) => x.padId);
    const nieuw = wissel(groep, blokken[v.blok], v, padId, { anderen });
    setOverrides((o) => ({ ...o, [v.blok]: nieuw }));
    setOpen(null);
    try { track("ouderadvies_wissel", { blok: v.blok }); } catch { /* */ }
  };

  const goedZo = async (lijst) => {
    const metTijd = lijst.map((v) => ({ ...v, at: Date.now() }));
    bewaarKeuzes(naam, metTijd);
    setKeuzes(metTijd);
    let stand = "lokaal";
    if (ouderAccount && linkId) {
      const res = await Promise.all(lijst.map((v) => zetKlaar(linkId, { id: v.padId, titel: v.titel, emoji: v.emoji }, "ouder")));
      stand = res.every((r) => r.ok) ? "server" : "fout";
    }
    setAkkoord(stand);
    try { track("ouderadvies_akkoord", { aantal: lijst.length, stand }); } catch { /* */ }
  };

  // ── Geen blokjes ────────────────────────────────────────────────────
  if (!klaar.length) {
    return (
      <div data-ouder-stand="leeg">
        <div style={F.kaart}>
          <div style={F.tekst}>{T.ouder.adviesNulmeting}</div>
          <div style={F.sub}>{T.ouder.nulmetingUitleg}</div>
          <div style={F.sub}>{T.ouder.eerlijk}</div>
          {onLaatBeginnen && <button type="button" onClick={onLaatBeginnen} style={F.primair(false)}>{T.ouder.knopStart}</button>}
          {!opDitApparaat && <div style={{ ...F.sub, marginTop: 10 }}>{T.ouder.nogNiets}</div>}
        </div>
      </div>
    );
  }

  // ── Wekelijks vervolg (er zijn al keuzes) ───────────────────────────
  // Pas als de ouder het volledige drietal heeft goedgekeurd (ná blok 3), wordt
  // het een wekelijks vervolg. Een keuze van na blok 1 is nog een voorlopig voorstel.
  const laatsteBlok = Math.max(0, ...Object.values(blokken).map((b) => Date.parse(b?.klaarOp || 0) || 0));
  const drietalGekozen = klaar.length === 3 && keuzes.length > 0 && keuzes.every((k) => (k.at || 0) >= laatsteBlok);
  const week = drietalGekozen && voortgang ? weekVervolg(groep, keuzes, voortgang, blokken) : null;

  return (
    <div data-ouder-stand={klaar.length === 3 ? "drietal" : "voorlopig"}>
      <BlokTreden klaar={klaar} />
      <div style={F.kaart}>
        <div style={F.kopKlein}>Nulmeting</div>
        {[1, 2, 3].map((nr) => {
          const b = blokken[nr];
          return (
            <div key={nr} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: nr < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <span style={{ ...F.tekst, margin: 0, fontSize: 14 }}>{b ? (VAK_NAAM[b.vak] || b.vak) : `Blokje ${nr}`}</span>
              {b ? <UitslagLabel uitslag={b.uitslag} tekst={T.ouder.uitslagWoord[b.uitslag]} /> : <span style={{ ...F.sub, margin: 0 }}>nog niet gedaan</span>}
            </div>
          );
        })}
        <div style={{ ...F.sub, marginTop: 8 }}>{T.ouder.eerlijk}</div>
      </div>

      {week ? (
        <WeekBlok week={week} T={T} onAkkoord={() => goedZo(week.volgende)} akkoord={akkoord} />
      ) : (
        <div style={F.kaart}>
          <div style={F.kop}>{klaar.length === 3 ? T.ouder.drietalKop : T.ouder.voorlopigKop}</div>
          <div style={F.tekst}>
            {klaar.length === 3
              ? T.ouder.drietal
              : T.ouder.voorlopig(VAK_NAAM[blokken[klaar[0]].vak], T.ouder.uitslagWoord[blokken[klaar[0]].uitslag])}
          </div>
          <div style={F.sub}>{T.ouder.wisselUitleg}</div>
          {voorstellen.map((v) => (
            <VoorstelKaart key={v.blok} v={v} T={T} open={open === v.blok} onOpen={() => setOpen(open === v.blok ? null : v.blok)} onWissel={(p) => doeWissel(v, p)} />
          ))}
          {klaar.length < 3 && <div style={F.sub}>{T.ouder.wachtOpBlok(klaar.length + 1)}</div>}
          <button type="button" onClick={() => goedZo(voorstellen)} style={F.primair(false)} data-goed-zo>{T.ouder.knopAkkoord}</button>
          {akkoord && <AkkoordMelding stand={akkoord} T={T} />}
        </div>
      )}
      <div style={F.sub}>{T.ouder.gratis} {T.ouder.vragen}</div>
    </div>
  );
}

function AkkoordMelding({ stand, T }) {
  if (stand === "fout") return <div style={F.fout}>Klaarzetten lukte niet helemaal. Probeer het zo nog eens.</div>;
  return <div style={F.ok} data-akkoord={stand}>✓ {stand === "server" ? T.ouder.akkoordKlaar : T.ouder.akkoordLokaal}</div>;
}

function WeekBlok({ week, T, onAkkoord, akkoord }) {
  const regel = (k, extra) => <li key={k.padId} style={{ ...F.tekst, margin: "2px 0" }}>{k.emoji || "📘"} {k.titel}{extra ? <span style={{ color: "rgba(255,255,255,0.55)" }}> — {extra}</span> : null}</li>;
  const leeg = !week.goed.length && !week.nogNiet.length;
  return (
    <div style={F.kaart} data-week>
      <div style={F.kop}>{T.ouder.weekKop}</div>
      {leeg && <div style={F.tekst}>{T.ouder.weekLeeg}</div>}
      {!!week.goed.length && (<><div style={F.kopKlein}>{T.ouder.weekGoed}</div><ul style={{ margin: "0 0 10px", paddingLeft: 18 }}>{week.goed.map((k) => regel(k, k.pct != null ? `${k.stappenGedaan} van ${k.stappen} stappen` : null))}</ul></>)}
      {!!week.nogNiet.length && (<><div style={F.kopKlein}>{T.ouder.weekNogNiet}</div><ul style={{ margin: "0 0 10px", paddingLeft: 18 }}>{week.nogNiet.map((k) => regel(k, `${k.stappenGedaan} van ${k.stappen} stappen`))}</ul></>)}
      {!!week.nietBegonnen.length && !leeg && (<><div style={F.kopKlein}>{T.ouder.weekNietBegonnen}</div><ul style={{ margin: "0 0 10px", paddingLeft: 18 }}>{week.nietBegonnen.map((k) => regel(k))}</ul></>)}
      <div style={F.kopKlein}>{T.ouder.weekVolgende}</div>
      <ul style={{ margin: "0 0 6px", paddingLeft: 18 }}>{week.volgende.map((k) => regel(k, T.ouder.waarom[k.waarom]))}</ul>
      <button type="button" onClick={onAkkoord} style={F.primair(false)}>{T.ouder.knopAkkoord}</button>
      {akkoord && <AkkoordMelding stand={akkoord} T={T} />}
    </div>
  );
}

export { voorstelVoorBlok };
