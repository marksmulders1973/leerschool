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
import { haalKlaargezetVoorLink } from "../../shared/ouderKlaargezet.js";
import { weekSamenvatting, wanneerTekst, sterkEnZwak, tipVoorVanavond } from "./kindkaart.js";

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

// ── 📋 Kindkaart ─────────────────────────────────────────────────────────
export function Kindkaart({ kind, linkId, ingelogd, kleur = "#ffb74d", onTerug, onLaatOefenen }) {
  const [data, setData] = useState(null); // { scores, perPad, klaar, stappenGelezen }
  useEffect(() => {
    let weg = false;
    try { track("kindkaart_open", { link: !!linkId, ingelogd }); } catch { /* */ }
    (async () => {
      if (!linkId) { setData({ geenLink: true, scores: [], perPad: {}, klaar: [] }); return; }
      const [sc, lp, kl] = await Promise.all([
        supabase.from("leaderboard").select("id, subject, percentage, completed_at, time_taken").eq("link_id", linkId).order("completed_at", { ascending: false }).limit(80),
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

      {data && (sterk.length > 0 || zwak.length > 0) && (
        <div style={F.kaart} data-kindkaart-vakken>
          {sterk.length > 0 && <div style={F.tekst}><strong style={{ color: "#69f0ae" }}>Gaat goed:</strong> {sterk.map((x) => x.naam).join(", ")}</div>}
          {zwak.length > 0 && <div style={{ ...F.tekst, marginTop: sterk.length ? 4 : 0 }}><strong style={{ color: "#ffd54f" }}>Nog oefenen:</strong> {zwak.map((x) => x.naam).join(", ")}</div>}
        </div>
      )}

      {data && (
        <div style={{ ...F.kaart, borderColor: "rgba(105,240,174,0.35)", background: "rgba(105,240,174,0.06)" }} data-kindkaart-tip>
          <div style={F.kop}>Tip voor vanavond</div>
          <div style={F.tekst}>{tipVoorVanavond(kind, zwak, week)}</div>
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
