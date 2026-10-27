// 🔗 Koppel-kaarten in "Wie oefent er?" (Mark 23 okt 2026, plan docs/PLAN-KOPPELING-WERKEND.md):
//  • Kindkaart     — ouder of leerkracht tikt op een gekoppeld kind: "Je bekijkt de voortgang van …"
//  • OuderWilKaart — kind tikt op een gekoppelde volwassene: "Pappa Mark wil dat je werkt aan …"
//
// Privacy: alles wordt gelezen op het link_id van déze koppeling, nooit op naam (een naam-zoektocht
// zou naamgenoten uit andere gezinnen laten zien). Lesstappen en klaargezette lessen vallen onder de
// leesregels van de database: alleen het ingelogde account van de ouder ziet ze. Is dat er niet,
// dan zegt de kaart dat eerlijk.
import { useEffect, useState } from "react";
import { AvatarSvg, loadAvatarConfig } from "./avatar.jsx";
import supabase from "../../supabase.js";
import { track } from "../../utils.js";
import { haalKlaargezetVoorLink, zetKlaar } from "../../shared/ouderKlaargezet.js";
import { weekSamenvatting, wanneerTekst, sterkEnZwak, tipVoorVanavond, doorstroomMeter, MIN_VRAGEN } from "./kindkaart.js";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { BERICHT_ZINNEN, MAX_BERICHT, stuurBericht, laatsteBerichtVoorLink, berichtenVoorKind, markeerBerichtGelezen } from "../../shared/thuisBericht.js";

const F = {
  scherm: { maxWidth: 520, margin: "0 auto", textAlign: "left", color: "#fff" },
  kaart: { borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", padding: "12px 14px", marginTop: 12 },
  kop: { fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 6 },
  tekst: { fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.78)", lineHeight: 1.5 },
  knop: (bg, kleur = "#08121f") => ({ display: "block", width: "100%", boxSizing: "border-box", padding: "13px 14px", borderRadius: 12, border: "none", background: bg, color: kleur, fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 800, cursor: "pointer", textAlign: "center", textDecoration: "none" }),
  terug: { background: "none", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 10, color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, padding: "8px 14px", cursor: "pointer" },
};

function Kop({ naam, kleur, regel1, regel2, onTerug }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 16, border: `2px solid ${kleur}`, background: `${kleur}1a` }}>
      <span style={{ flexShrink: 0 }}><AvatarSvg config={loadAvatarConfig(naam)} size={52} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700, color: kleur }}>{regel1}</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 800, lineHeight: 1.2, wordBreak: "break-word" }}>{regel2}</div>
      </div>
      <button type="button" onClick={onTerug} style={F.terug} data-kaart-terug>Terug</button>
    </div>
  );
}

const naarOuderOverzicht = (kind, wat) => {
  try { track("kindkaart_naar_overzicht", { wat }); } catch { /* */ }
  try { localStorage.setItem("lk_ouder_kind", kind); } catch { /* */ }
  window.location.href = "/ouder";
};

// ── 💬 Berichtje sturen (fase 2, Mark 23 okt 2026: "ja perfect") ─────────
export function BerichtSturen({ kind, linkId, kleur }) {
  const [laatste, setLaatste] = useState(undefined);
  const [tekst, setTekst] = useState("");
  const [staat, setStaat] = useState("schrijf"); // schrijf | bezig | verstuurd | mis
  useEffect(() => {
    let weg = false;
    laatsteBerichtVoorLink(linkId).then((b) => { if (!weg) setLaatste(b); }).catch(() => { if (!weg) setLaatste(null); });
    return () => { weg = true; };
  }, [linkId, staat]);
  const stuur = async () => {
    if (!tekst.trim() || staat === "bezig") return;
    setStaat("bezig");
    const r = await stuurBericht(linkId, tekst);
    setStaat(r.ok ? "verstuurd" : "mis");
    if (r.ok) setTekst("");
  };
  return (
    <div style={F.kaart} data-kindkaart-bericht>
      <div style={F.kop}>Stuur {kind} een berichtje</div>
      {laatste && (
        <div style={{ ...F.tekst, fontSize: 12.5, marginBottom: 8 }} data-bericht-laatste>
          Laatste: "{laatste.tekst}" · {wanneerTekst(laatste.created_at)} · {laatste.gelezen_at ? <span style={{ color: "#69f0ae", fontWeight: 700 }}>gelezen</span> : "nog niet gelezen"}
        </div>
      )}
      {staat === "verstuurd" ? (
        <div style={{ ...F.tekst, color: "#69f0ae" }} data-bericht-verstuurd>
          Verstuurd! {kind} ziet het op de eigen pagina.{" "}
          <button type="button" onClick={() => setStaat("schrijf")} style={{ background: "none", border: "none", padding: 0, color: "#00b0ff", fontWeight: 700, cursor: "pointer", textDecoration: "underline", fontSize: 13.5 }}>Nog een</button>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
            {BERICHT_ZINNEN.map((z) => (
              <button key={z} type="button" onClick={() => setTekst(z)} data-bericht-zin
                style={{ padding: "7px 11px", borderRadius: 999, border: tekst === z ? `2px solid ${kleur}` : "1px solid rgba(255,255,255,0.22)", background: tekst === z ? `${kleur}22` : "transparent", color: "#fff", fontFamily: "var(--font-body)", fontSize: 13, cursor: "pointer" }}>{z}</button>
            ))}
          </div>
          <textarea value={tekst} onChange={(e) => setTekst(e.target.value.slice(0, MAX_BERICHT))} rows={2} placeholder="Of typ zelf iets…" aria-label={`Berichtje aan ${kind}`} data-bericht-invoer
            style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "var(--font-body)", fontSize: 15, resize: "none", outline: "none" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
            <span style={{ ...F.tekst, fontSize: 12, flex: 1 }}>{tekst.length}/{MAX_BERICHT}</span>
            <button type="button" onClick={stuur} disabled={!tekst.trim() || staat === "bezig"} data-bericht-stuur
              style={{ padding: "9px 16px", borderRadius: 10, border: "none", background: !tekst.trim() ? "rgba(255,255,255,0.12)" : kleur, color: "#08121f", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, cursor: tekst.trim() ? "pointer" : "default" }}>
              {staat === "bezig" ? "Even…" : "Verstuur"}
            </button>
          </div>
          {staat === "mis" && <div role="alert" style={{ ...F.tekst, color: "#ffab91", fontSize: 13 }}>Versturen lukte niet. Probeer het zo nog eens.</div>}
        </>
      )}
    </div>
  );
}

// Het kind ziet het bericht: tekstballon + "Dank je!" (= gelezen). Gedeeld door OuderWilKaart en de eigen pagina.
export function BerichtBallon({ bericht, kind, kleur = "#ff9fb2", onGelezen }) {
  const [klaar, setKlaar] = useState(!!bericht?.gelezen_at);
  if (!bericht) return null;
  const dank = async () => { setKlaar(true); await markeerBerichtGelezen(bericht.id, kind); onGelezen?.(bericht.id); };
  return (
    <div data-bericht-ballon style={{ padding: "12px 14px", borderRadius: "16px 16px 16px 4px", background: `${kleur}1f`, border: `1.5px solid ${kleur}`, color: "#fff" }}>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: kleur, marginBottom: 4 }}>Bericht van {bericht.van || "thuis"} · {wanneerTekst(bericht.created_at)}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, lineHeight: 1.3, wordBreak: "break-word" }}>{bericht.tekst}</div>
      {klaar
        ? <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#69f0ae", marginTop: 6, fontWeight: 700 }}>Gelezen</div>
        : <button type="button" onClick={dank} data-bericht-dank style={{ marginTop: 8, padding: "8px 14px", borderRadius: 10, border: "none", background: kleur, color: "#2a0a14", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>Dank je!</button>}
    </div>
  );
}

// ── 🎯 Doorstroomtoets-meter (fase 3, Mark 23 okt 2026) ───────────────────
const PAD_PER_ID = new Map(pathManifest.map((x) => [x.id, x]));
const METER_KLEUR = { sterk: "#69f0ae", opweg: "#ffd54f", oefenen: "#ff8a65", weinig: "rgba(255,255,255,0.35)" };
function DoorstroomMeter({ kind, scores, linkId, ingelogd, kleur }) {
  const m = doorstroomMeter(scores, (id) => PAD_PER_ID.get(id));
  const [klaar, setKlaar] = useState({}); // pad-id → "bezig" | "ok" | "mis"
  const zet = async (g) => {
    setKlaar((k) => ({ ...k, [g.id]: "bezig" }));
    const r = await zetKlaar(linkId, { id: g.id, titel: g.titel, emoji: g.emoji }, "ouder").catch(() => ({ ok: false }));
    setKlaar((k) => ({ ...k, [g.id]: r?.ok ? "ok" : "mis" }));
    try { track("meter_zetklaar", { ok: !!r?.ok }); } catch { /* */ }
  };
  return (
    <div style={F.kaart} data-doorstroom-meter>
      <div style={F.kop}>Doorstroomtoets-meter</div>
      {m.totaal === 0 ? (
        <div style={F.tekst}>{kind} heeft de afgelopen 2 maanden nog geen Doorstroomtoets-oefenvragen gemaakt. Na een paar oefentoetsjes zie je hier per onderdeel hoe het gaat.</div>
      ) : (
        <>
          {m.onderdelen.map((o) => (
            <div key={o.key} style={{ marginTop: 10 }} data-meter-onderdeel={o.key}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, ...F.tekst, fontSize: 13 }}>
                <strong style={{ color: "#fff" }}>{o.naam}</strong>
                <span style={{ color: METER_KLEUR[o.oordeel.key], fontWeight: 700, whiteSpace: "nowrap" }}>{o.aantal >= MIN_VRAGEN ? `${o.pct}% goed` : `${o.aantal} vragen`}</span>
              </div>
              <div style={{ height: 10, borderRadius: 6, background: "rgba(255,255,255,0.08)", marginTop: 4, overflow: "hidden" }} aria-hidden="true">
                <div style={{ width: `${o.aantal >= MIN_VRAGEN ? Math.max(4, o.pct) : 0}%`, height: "100%", background: METER_KLEUR[o.oordeel.key] }} />
              </div>
              <div style={{ ...F.tekst, fontSize: 12.5, marginTop: 3 }}>{o.oordeel.tekst}{o.aantal >= MIN_VRAGEN ? ` · ${o.aantal} vragen` : ""}</div>
              {o.aantal > 0 && o.gemist.length > 0 && (
                <div style={{ ...F.tekst, fontSize: 12.5, marginTop: 4 }}>
                  Meest gemist: {o.gemist.map((g, i) => (
                    <span key={g.id}>
                      {i > 0 ? ", " : ""}{g.titel}
                      {ingelogd && linkId && (
                        klaar[g.id] === "ok" ? <span style={{ color: "#69f0ae", fontWeight: 700 }}> (klaargezet)</span>
                          : <button type="button" disabled={klaar[g.id] === "bezig"} onClick={() => zet(g)} data-meter-zetklaar={g.id}
                              style={{ marginLeft: 6, padding: "2px 8px", borderRadius: 8, border: `1px solid ${kleur}`, background: "transparent", color: kleur, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                              {klaar[g.id] === "bezig" ? "…" : klaar[g.id] === "mis" ? "opnieuw" : "zet klaar"}
                            </button>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      )}
      <div style={{ ...F.tekst, fontSize: 11.5, marginTop: 10, color: "rgba(255,255,255,0.5)" }}>
        Een schatting uit de oefenvragen in Leerkwartier van de laatste 2 maanden, geen echte toetsuitslag. Groen: sterk (75% of meer) · geel: op weg · oranje: hier valt het meeste te winnen.
      </div>
    </div>
  );
}

// ── 📋 Kindkaart ─────────────────────────────────────────────────────────
export function Kindkaart({ kind, linkId, ingelogd, kleur = "#ffb74d", onTerug, onLaatOefenen }) {
  const [data, setData] = useState(null); // { scores, perPad, klaar, stappenGelezen }
  useEffect(() => {
    let weg = false;
    try { track("kindkaart_open", { link: !!linkId, ingelogd }); } catch { /* */ }
    (async () => {
      if (!linkId) { setData({ geenLink: true, scores: [], perPad: {}, klaar: [] }); return; }
      const [sc, lp, kl] = await Promise.all([
        supabase.from("leaderboard").select("id, subject, percentage, completed_at, time_taken, detail").eq("link_id", linkId).order("completed_at", { ascending: false }).limit(80),
        supabase.from("learn_progress").select("learn_path_id, step_idx, completed_at").eq("link_id", linkId).order("completed_at", { ascending: false }).limit(300),
        ingelogd ? haalKlaargezetVoorLink(linkId, "ouder") : Promise.resolve([]),
      ].map((p) => Promise.resolve(p).catch(() => ({ data: [] }))));
      const perPad = {};
      for (const r of lp?.data || []) {
        const p = (perPad[r.learn_path_id] ||= { perStap: {} });
        if (!p.perStap[r.step_idx]) p.perStap[r.step_idx] = { wanneer: r.completed_at ? new Date(r.completed_at) : null };
      }
      if (!weg) setData({ scores: sc?.data || [], perPad, klaar: Array.isArray(kl) ? kl : [], stappenGelezen: !lp?.error && ingelogd });
    })();
    return () => { weg = true; };
  }, [linkId, ingelogd]);

  const week = data ? weekSamenvatting(data.scores, data.perPad) : null;
  const { sterk, zwak } = data ? sterkEnZwak(data.scores) : { sterk: [], zwak: [] };
  // Geen zwak vak uit de toetsjes? Dan het zwakste Doorstroomtoets-onderdeel voor de tip van vanavond.
  const meterZwak = data ? doorstroomMeter(data.scores, (id) => PAD_PER_ID.get(id)).onderdelen.filter((o) => o.oordeel.key === "oefenen").sort((a, b) => a.pct - b.pct).map((o) => ({ vak: o.key })) : [];
  const open = (data?.klaar || []).filter((x) => !x.gedaan);
  const gedaan = (data?.klaar || []).filter((x) => x.gedaan);
  const leeg = data && !week.laatste;

  return (
    <div style={F.scherm} data-kindkaart={kind}>
      <Kop naam={kind} kleur={kleur} regel1="Je bekijkt de voortgang van" regel2={kind} onTerug={onTerug} />

      {!data && <div style={{ ...F.tekst, marginTop: 16 }}>Even ophalen…</div>}

      {data?.geenLink && (
        <div style={F.kaart}>
          <div style={F.kop}>Hier nog niet te zien</div>
          <div style={F.tekst}>Deze koppeling is van een oudere versie van de app. In het ouder-overzicht zie je wel alles van {kind}.</div>
        </div>
      )}

      {data && !data.geenLink && leeg && (
        <div style={F.kaart}>
          <div style={F.kop}>Nog niets te zien</div>
          {data.stappenGelezen
            ? <div style={F.tekst}>{kind} heeft sinds het koppelen nog niet geoefend. Zodra {kind} een kwartier doet, zie je het hier.</div>
            : <div style={F.tekst}>Hier zie je zonder inloggen alleen de toetsjes van {kind}, en die zijn er nog niet. Log in als ouder of verzorger om ook de lessen te zien.</div>}
        </div>
      )}

      {data && !data.geenLink && !leeg && (
        <div style={F.kaart} data-kindkaart-week>
          <div style={F.kop}>Deze week</div>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            {week.dagen.map((d, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ height: 26, borderRadius: 8, background: d.actief ? kleur : "rgba(255,255,255,0.08)", border: d.vandaag ? "2px solid #fff" : "none", boxSizing: "border-box" }} aria-label={`${d.naam}: ${d.actief ? "geoefend" : "niet geoefend"}`} />
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 3 }}>{d.naam}</div>
              </div>
            ))}
          </div>
          <div style={F.tekst}>
            <strong style={{ color: "#fff" }}>{week.actieveDagen} van de 7 dagen</strong> geoefend
            {week.stappen > 0 && <> · {week.stappen} {week.stappen === 1 ? "lesstap" : "lesstappen"}</>}
            {week.toetsjes > 0 && <> · {week.toetsjes} {week.toetsjes === 1 ? "toetsje" : "toetsjes"}{week.toetsMinuten > 0 ? ` (${week.toetsMinuten} min)` : ""}</>}
          </div>
          <div style={{ ...F.tekst, fontSize: 12.5, marginTop: 4 }}>Laatst geoefend: {wanneerTekst(week.laatste)}</div>
          {!data.stappenGelezen && <div style={{ ...F.tekst, fontSize: 12, marginTop: 4, color: "rgba(255,255,255,0.55)" }}>Alleen toetsjes. Log in als ouder of verzorger om ook de lessen te zien.</div>}
        </div>
      )}

      {data && (
        <div style={F.kaart} data-kindkaart-todo>
          <div style={F.kop}>Nog te doen</div>
          {ingelogd ? (
            <>
              {open.length === 0 && <div style={F.tekst}>Je hebt nu niets klaargezet{gedaan.length ? ` (${gedaan.length} al gedaan, knap!)` : ""}.</div>}
              {open.map((x) => (
                <div key={x.id} style={{ ...F.tekst, display: "flex", gap: 8, alignItems: "center", padding: "6px 0" }}>
                  <span aria-hidden="true" style={{ fontSize: 18 }}>{x.emoji || "📘"}</span><span style={{ color: "#fff", fontWeight: 700 }}>{x.titel || "Een les"}</span>
                </div>
              ))}
              {gedaan.length > 0 && open.length > 0 && <div style={{ ...F.tekst, fontSize: 12.5 }}>{gedaan.length} al gedaan.</div>}
              <button type="button" onClick={() => naarOuderOverzicht(kind, "klaarzetten")} style={{ ...F.knop("rgba(255,255,255,0.08)", "#fff"), marginTop: 8, border: "1.5px solid rgba(255,255,255,0.25)" }} data-kindkaart-klaarzet>
                Zet iets klaar voor {kind}
              </button>
            </>
          ) : (
            <div style={F.tekst}>
              Log één keer in als ouder of verzorger om te zien en klaar te zetten wat {kind} nog moet doen.
              <button type="button" onClick={() => naarOuderOverzicht(kind, "inloggen")} style={{ ...F.knop("#00b0ff"), marginTop: 8 }}>Inloggen</button>
            </div>
          )}
        </div>
      )}

      {data && ingelogd && linkId && <BerichtSturen kind={kind} linkId={linkId} kleur={kleur} />}

      {data && !data.geenLink && <DoorstroomMeter kind={kind} scores={data.scores} linkId={linkId} ingelogd={ingelogd} kleur={kleur} />}

      {data && (sterk.length > 0 || zwak.length > 0) && (
        <div style={F.kaart} data-kindkaart-vakken>
          {sterk.length > 0 && <div style={F.tekst}><strong style={{ color: "#69f0ae" }}>Gaat goed:</strong> {sterk.map((x) => x.naam).join(", ")}</div>}
          {zwak.length > 0 && <div style={{ ...F.tekst, marginTop: sterk.length ? 4 : 0 }}><strong style={{ color: "#ffd54f" }}>Nog oefenen:</strong> {zwak.map((x) => x.naam).join(", ")}</div>}
        </div>
      )}

      {data && (
        <div style={{ ...F.kaart, borderColor: "rgba(105,240,174,0.35)", background: "rgba(105,240,174,0.06)" }} data-kindkaart-tip>
          <div style={F.kop}>Tip voor vanavond</div>
          <div style={F.tekst}>{tipVoorVanavond(kind, zwak.length ? zwak : meterZwak, week)}</div>
        </div>
      )}

      <div style={{ display: "grid", gap: 8, marginTop: 14 }}>
        <button type="button" onClick={() => naarOuderOverzicht(kind, "alles")} style={F.knop("rgba(255,255,255,0.08)", "#fff")} data-kindkaart-alles>Alles bekijken in het ouder-overzicht →</button>
        <button type="button" onClick={onLaatOefenen} style={F.knop("#00c853")} data-kindkaart-oefenen>Laat {kind} nu oefenen</button>
      </div>
    </div>
  );
}

// ── 💛 OuderWilKaart ─────────────────────────────────────────────────────
export function OuderWilKaart({ ouderNaam, kind, linkId, soort = "ouder", kleur = "#ffb74d", onTerug, onStart, onNaarMijn, onWissel }) {
  const [items, setItems] = useState(null);
  const [bericht, setBericht] = useState(null);
  useEffect(() => {
    if (!linkId || soort === "leraar") return undefined;
    let weg = false;
    berichtenVoorKind(kind, [linkId]).then((l) => { if (!weg) setBericht(l[0] ? { ...l[0], van: ouderNaam } : null); }).catch(() => {});
    return () => { weg = true; };
  }, [kind, linkId, soort, ouderNaam]);
  useEffect(() => {
    let weg = false;
    try { track("ouderblok_open", { soort, link: !!linkId }); } catch { /* */ }
    supabase.rpc("voor_jou_klaargezet", { p_student_name: kind, p_link_id: linkId || null })
      .then(({ data, error }) => {
        if (weg) return;
        const l = !error && Array.isArray(data) ? data : [];
        setItems(l.filter((x) => (soort === "leraar" ? x.bron === "leraar" : x.bron !== "leraar")));
      })
      .catch(() => { if (!weg) setItems([]); });
    return () => { weg = true; };
  }, [kind, linkId, soort]);
  const open = (items || []).filter((x) => !x.gedaan);
  const gedaan = (items || []).filter((x) => x.gedaan);
  return (
    <div style={F.scherm} data-ouderwil={ouderNaam}>
      <Kop naam={ouderNaam} kleur={kleur} regel1={`${kind}, dit is van`} regel2={ouderNaam} onTerug={onTerug} />
      {bericht && <div style={{ marginTop: 12 }}><BerichtBallon bericht={bericht} kind={kind} kleur={kleur} /></div>}
      <div style={F.kaart}>
        <div style={F.kop}>{ouderNaam} wil dat je werkt aan:</div>
        {!items && <div style={F.tekst}>Even kijken…</div>}
        {items && open.length === 0 && (
          <div style={F.tekst}>
            {ouderNaam} heeft nu niets voor je klaargezet{gedaan.length ? `, en wat er klaarstond heb je al gedaan. Knap!` : "."}
          </div>
        )}
        {open.map((x) => (
          <div key={x.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <span aria-hidden="true" style={{ fontSize: 22 }}>{x.emoji || "📘"}</span>
            <span style={{ ...F.tekst, flex: 1, color: "#fff", fontWeight: 700 }}>{x.titel || "Een les"}</span>
            <button type="button" onClick={() => { try { track("ouderblok_start", { soort }); } catch { /* */ } onStart?.(x.path_id); }} data-ouderwil-start={x.path_id}
              style={{ padding: "8px 16px", borderRadius: 10, border: "none", background: kleur, color: "#08121f", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>Start</button>
          </div>
        ))}
      </div>
      {/* Mark 24 okt 2026: "een kind moet weten dat het gekoppeld is, niet dat de ouders stiekem
          kunnen meekijken" → op de kaart van het kind staat altijd in gewone woorden wat de ander ziet. */}
      <div style={{ ...F.kaart, borderColor: "rgba(255,255,255,0.18)" }} data-ouderwil-uitleg>
        <div style={F.tekst}>
          {soort === "leraar"
            ? <>Je bent gekoppeld met <strong style={{ color: "#fff" }}>{ouderNaam}</strong>. Je juf of meester ziet welke lessen je deed en hoe het ging, en kan lessen voor je klaarzetten.</>
            : <>Je bent gekoppeld met <strong style={{ color: "#fff" }}>{ouderNaam}</strong>. {ouderNaam} ziet hoe het oefenen gaat: welke dagen je oefende, wat goed ging en wat nog lastig is. {ouderNaam} kan lessen voor je klaarzetten en je een berichtje sturen.</>}
        </div>
      </div>
      <div style={{ display: "grid", gap: 8, marginTop: 14 }}>
        <button type="button" onClick={onNaarMijn} style={F.knop(items && open.length === 0 ? "#00c853" : "rgba(255,255,255,0.08)", items && open.length === 0 ? "#08121f" : "#fff")} data-ouderwil-zelf>
          {items && open.length === 0 ? "Laat Leerkwartier iets kiezen" : "Naar mijn eigen pagina"}
        </button>
        {onWissel && (
          <button type="button" onClick={onWissel} style={{ ...F.knop("transparent", "rgba(255,255,255,0.7)"), border: "1px solid rgba(255,255,255,0.2)", fontSize: 13.5 }} data-ouderwil-wissel>
            Ik ben {ouderNaam}: naar mijn profiel
          </button>
        )}
      </div>
    </div>
  );
}
