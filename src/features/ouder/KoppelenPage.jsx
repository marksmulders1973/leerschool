// 🔗 /koppelen — één pagina die ouder én kind stap voor stap door de koppeling
// loopt (Mark 14 okt 2026: "de ouderkoppeling werkt niet, of we komen er niet
// uit … een pagina die echt heel simpel alle stappen laat zien").
//
// Kind: code typen (of al ingevuld via ?code=ABC123 uit WhatsApp) → naam kiezen
// → 🎉. Ouder: drie stappen in beeld + "Loopt het vast?" met de vijf echte
// valkuilen. Bewust géén AI-chat: de problemen zijn vijf vaste gevallen; een
// klikbare lijst lost ze sneller en foutloos op.
import { useEffect, useState } from "react";
import { BRAND } from "../../brand.js";
import { track } from "../../utils.js";
import { claimKoppelcode, normaliseerKoppelcode } from "../../shared/koppelcode.js";
import { koppelingVoor } from "../../shared/koppeling.js";
import { codeUitUrl } from "./koppelcodes.js";
import KoppelFeedback from "./KoppelFeedback.jsx";

const F = {
  kop: { fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#fff", margin: 0 },
  sub: { fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.55 },
  kaart: { borderRadius: 16, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", padding: 16 },
  primair: (uit) => ({ width: "100%", padding: "14px 16px", borderRadius: 12, border: "none", background: uit ? "rgba(0,176,255,0.3)" : "#00b0ff", color: "#08121f", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, cursor: uit ? "default" : "pointer" }),
  tab: (aan) => ({ flex: 1, padding: "12px 8px", borderRadius: 12, border: aan ? "2px solid #00b0ff" : "1.5px solid rgba(255,255,255,0.2)", background: aan ? "rgba(0,176,255,0.14)" : "rgba(255,255,255,0.04)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, cursor: "pointer" }),
  input: { width: "100%", boxSizing: "border-box", padding: "14px 12px", borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, letterSpacing: 5, textAlign: "center", outline: "none" },
};

// Getekend mini-schermpje: laat zien hoe het er op de telefoon uitziet.
function MiniScherm({ children }) {
  return (
    <div aria-hidden="true" style={{ margin: "10px auto 0", width: 190, borderRadius: 18, border: "2px solid rgba(255,255,255,0.25)", background: "#0b1224", padding: "12px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
      {children}
    </div>
  );
}
const mini = {
  regel: (t, kleur = "rgba(255,255,255,0.75)") => <div style={{ fontFamily: "var(--font-body)", fontSize: 10.5, color: kleur, lineHeight: 1.3 }}>{t}</div>,
  knop: (t, bg = "#00b0ff", kleur = "#08121f") => <div style={{ borderRadius: 8, background: bg, color: kleur, fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 800, textAlign: "center", padding: "6px 4px" }}>{t}</div>,
  code: (t) => <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "#00b0ff", letterSpacing: 4, textAlign: "center", padding: "4px 0" }}>{t}</div>,
};

function Stap({ nr, titel, children }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span aria-hidden="true" style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "#00b0ff", color: "#08121f", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>{nr}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{titel}</div>
        {children}
      </div>
    </div>
  );
}

const VALKUILEN = [
  { v: "Ik zie geen code", a: <>Codes staan in het ouder-overzicht, bovenaan in het blok <strong>Koppelcodes</strong>. Je ziet ze alleen als je daar bent ingelogd (Google of e-mail). Staat er geen code? Tik op <strong>1</strong>, <strong>2</strong> of <strong>3</strong> — je krijgt er meteen één per kind.</> },
  { v: "Mijn kind oefent op mijn eigen telefoon", a: <>Dan is er géén code nodig. In het ouder-overzicht: <strong>voeg je kind hier toe</strong> (onder de koppelcodes). Je telefoon kent daarna beide: jij als ouder, je kind als leerling.</> },
  { v: "De code werkt niet", a: <>Een code werkt <strong>één keer</strong>. Is hij al gebruikt, dan maak je een nieuwe (ouder-overzicht → Koppelcodes). Let bij overtypen op: er zit geen 0, O, 1 of I in een code.</> },
  { v: "Mijn kind heeft een nieuw toestel", a: <>Open in het ouder-overzicht de kaart van je kind en tik op <strong>Nieuwe code</strong>. Die typt je kind op het nieuwe toestel in op {BRAND.domain}/koppelen — de oude voortgang blijft bewaard.</> },
  { v: "Ik zie nog niks van mijn kind", a: <>Je ziet pas iets zodra je kind na het koppelen heeft geoefend. Het weekrapport komt elke vrijdag om 16:00 per mail.</> },
];

export default function KoppelenPage({ userName = "", onNaamInvullen, onKlaar, onMijn }) {
  // ?rol=ouder (uit het koppel-blok in de profielkiezer) opent de ouder-tab.
  const [tab, setTab] = useState(() => { try { return new URLSearchParams(window.location.search).get("rol") === "ouder" ? "ouder" : "kind"; } catch { return "kind"; } });
  const [code, setCode] = useState(() => codeUitUrl(window.location.search, sessionStorage));
  const [stap, setStap] = useState(() => (codeUitUrl(window.location.search, sessionStorage) ? 2 : 1));
  const [naam, setNaam] = useState(() => (userName || "").trim());
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");
  const [foutCode, setFoutCode] = useState(null); // 18 okt: welke fout, voor de vraag 'wat ging er mis?'
  const [klaar, setKlaar] = useState(null); // { naam, vanWie, rol }

  const namen = (() => {
    try {
      const l = JSON.parse(localStorage.getItem("lk_namen") || "[]").filter((x) => x && x.toLowerCase() !== "speler");
      const u = (userName || "").trim();
      return [...new Set([u, ...l].filter(Boolean))].slice(0, 6);
    } catch { return (userName || "").trim() ? [userName.trim()] : []; }
  })();

  useEffect(() => { try { track("koppelen_open", { metCode: !!code, tab }); } catch { /* */ } }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const alGekoppeld = naam && (koppelingVoor(naam)?.ouder || koppelingVoor(naam)?.leraar);

  const koppel = async () => {
    const n = (naam || "").trim();
    if (!n) { setFout("Typ eerst je naam."); return; }
    setBezig(true); setFout("");
    const r = await claimKoppelcode(code, n);
    setBezig(false);
    if (r.ok) {
      try { sessionStorage.removeItem("lk_koppelcode_voorstel"); } catch { /* */ }
      try { onNaamInvullen?.(n); } catch { /* */ }
      try { track("koppelen_klaar", { rol: r.rol }); } catch { /* */ }
      setKlaar({ naam: n, vanWie: r.vanWie, rol: r.rol });
      return;
    }
    try { track("koppelen_fout", { fout: r.fout }); } catch { /* */ }
    if (r.fout !== "alGekoppeld") setFoutCode(r.fout);
    setFout(
      r.fout === "verlopen" ? "Deze code is al gebruikt of klopt niet. Vraag thuis om een nieuwe code (ouder-overzicht → Koppelcodes)."
        : r.fout === "alGekoppeld" ? `Je bent op dit toestel al gekoppeld, ${n}. Je hoeft niets meer te doen.`
          : r.fout === "geenVerbinding" ? "Geen verbinding. Probeer het zo nog eens."
            : r.fout === "leeg" ? "De code is te kort. Kijk nog eens op de telefoon van thuis."
              : "Dat lukte niet. Probeer het nog eens.",
    );
  };

  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)", padding: "16px 16px 48px" }}>
      <div style={{ maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)", fontSize: 13, textDecoration: "none" }}>← {BRAND.name}</a>
          <button type="button" onClick={onMijn} style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", fontSize: 12, padding: "5px 10px", cursor: "pointer" }}>Mijn pagina</button>
        </div>
        <h1 style={F.kop}>Koppelen met thuis</h1>
        <div style={F.sub}>Een ouder of verzorger kan dan meekijken hoe het gaat en oefenwerk voor je klaarzetten. Wie ben jij?</div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" onClick={() => setTab("kind")} style={F.tab(tab === "kind")} data-tab="kind">Ik ben het kind</button>
          <button type="button" onClick={() => setTab("ouder")} style={F.tab(tab === "ouder")} data-tab="ouder">Ik ben de ouder</button>
        </div>

        {tab === "kind" && (
          <div style={F.kaart}>
            {klaar ? (
              <div style={{ textAlign: "center" }} data-koppel-klaar>
                <div style={{ fontSize: 44, lineHeight: 1 }} aria-hidden="true">🎉</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#69f0ae", marginTop: 8 }}>Gelukt, {klaar.naam}!</div>
                <div style={{ ...F.sub, marginTop: 6 }}>
                  {klaar.rol === "leraar" ? "Je juf of meester" : (klaar.vanWie || "Thuis")} kan nu meekijken en werk voor je klaarzetten. Kijk straks op je eigen pagina bij <strong style={{ color: "#ff9fb2" }}>💛 speciaal voor jou klaargezet</strong>.
                </div>
                <button type="button" onClick={onKlaar} style={{ ...F.primair(false), marginTop: 14 }}>Naar mijn pagina</button>
                <KoppelFeedback route="kind-code" extra={{ rol: klaar.rol }} />
              </div>
            ) : (
              <>
                <Stap nr={1} titel="Typ de code van thuis">
                  <div style={{ ...F.sub, fontSize: 13, marginBottom: 8 }}>De code staat op de telefoon van je ouder, bij <strong>Koppelcodes</strong>. Zes letters en cijfers.</div>
                  <input
                    value={code}
                    onChange={(e) => { setCode(normaliseerKoppelcode(e.target.value)); setFout(""); if (stap > 1 && normaliseerKoppelcode(e.target.value).length < 4) setStap(1); }}
                    onKeyDown={(e) => { if (e.key === "Enter" && code.length >= 4) setStap(2); }}
                    placeholder="ABC123" autoCapitalize="characters" autoCorrect="off" spellCheck={false} inputMode="text" maxLength={8}
                    aria-label="Koppelcode" data-koppel-code style={F.input}
                  />
                  {stap === 1 && (
                    <button type="button" disabled={code.length < 4} onClick={() => setStap(2)} style={{ ...F.primair(code.length < 4), marginTop: 10 }} data-koppel-verder>Verder</button>
                  )}
                </Stap>

                {stap >= 2 && (
                  <div style={{ marginTop: 18 }}>
                    <Stap nr={2} titel="Wie ben jij?">
                      {alGekoppeld && (
                        <div style={{ ...F.sub, fontSize: 12.5, color: "#69f0ae", marginBottom: 8 }}>✅ {naam} is op dit toestel al gekoppeld. Een nieuwe code mag, bijvoorbeeld voor een andere ouder.</div>
                      )}
                      {namen.length > 0 && (
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                          {namen.map((n) => (
                            <button key={n} type="button" onClick={() => { setNaam(n); setFout(""); }} data-koppel-naam={n}
                              style={{ padding: "8px 14px", borderRadius: 999, border: naam === n ? "2px solid #00b0ff" : "1.5px solid rgba(255,255,255,0.25)", background: naam === n ? "rgba(0,176,255,0.16)" : "rgba(255,255,255,0.04)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                              {n}
                            </button>
                          ))}
                        </div>
                      )}
                      <input
                        value={naam}
                        onChange={(e) => { setNaam(e.target.value); setFout(""); }}
                        onKeyDown={(e) => { if (e.key === "Enter") koppel(); }}
                        placeholder={namen.length ? "Of typ een andere naam" : "Typ je voornaam"}
                        aria-label="Je naam" data-koppel-naam-invoer autoComplete="given-name"
                        style={{ ...F.input, fontSize: 18, letterSpacing: 0, textAlign: "left", fontFamily: "var(--font-body)", fontWeight: 600 }}
                      />
                      <button type="button" disabled={bezig || !naam.trim()} onClick={koppel} style={{ ...F.primair(bezig || !naam.trim()), marginTop: 10 }} data-koppel-knop>
                        {bezig ? "Even…" : "Koppel mij"}
                      </button>
                      {fout && <div role="alert" style={{ ...F.sub, color: "#ffab91", fontSize: 13, marginTop: 8 }} data-koppel-fout>{fout}</div>}
                      {fout && foutCode && <KoppelFeedback route="kind-fout" extra={{ fout: foutCode }} />}
                    </Stap>
                  </div>
                )}

                <div style={{ marginTop: 18, opacity: stap >= 2 ? 1 : 0.5 }}>
                  <Stap nr={3} titel="Klaar 🎉">
                    <div style={{ ...F.sub, fontSize: 13 }}>Thuis zien ze dan jouw naam staan. Jij hoeft verder niets te doen — gewoon je kwartier oefenen.</div>
                  </Stap>
                </div>
              </>
            )}
          </div>
        )}

        {tab === "ouder" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={F.kaart}>
              <Stap nr={1} titel="Log in op het ouder-overzicht">
                <div style={{ ...F.sub, fontSize: 13 }}>Met Google of met je e-mailadres (je krijgt een inloglink per mail). Alleen het ouder-overzicht vraagt een account; je kind heeft er geen nodig.</div>
                <MiniScherm>
                  {mini.regel("Volg je kind", "#fff")}
                  {mini.knop("Inloggen met Google", "#fff", "#333")}
                  {mini.knop("Inloglink per e-mail", "rgba(255,255,255,0.12)", "#fff")}
                </MiniScherm>
                <a href="/ouder" style={{ ...F.primair(false), display: "block", textAlign: "center", textDecoration: "none", marginTop: 12, boxSizing: "border-box" }} data-naar-ouder>Naar het ouder-overzicht</a>
              </Stap>
            </div>
            <div style={F.kaart}>
              <Stap nr={2} titel="Kies hoeveel kinderen: 1, 2 of 3">
                <div style={{ ...F.sub, fontSize: 13 }}>Je krijgt meteen een code per kind. Die blijft bovenaan je overzicht staan tot je kind 'm gebruikt — of tot jij 'm wist.</div>
                <MiniScherm>
                  {mini.regel("Koppelcodes", "#fff")}
                  {mini.regel("Hoeveel kinderen wil je koppelen?")}
                  <div style={{ display: "flex", gap: 4 }}>{mini.knop("1")}{mini.knop("2")}{mini.knop("3")}</div>
                  {mini.code("H7KP2Q")}
                  {mini.knop("Stuur via WhatsApp", "#25D366")}
                </MiniScherm>
              </Stap>
            </div>
            <div style={F.kaart}>
              <Stap nr={3} titel="Laat je kind de code zien">
                <div style={{ ...F.sub, fontSize: 13 }}>Je kind gaat op de eigen telefoon of tablet naar <strong style={{ color: "#00b0ff" }}>{BRAND.domain}/koppelen</strong>, typt de code en kiest zijn of haar naam. Of je stuurt de code via WhatsApp: dan staat hij met één tik al ingevuld.</div>
                <MiniScherm>
                  {mini.regel("Koppelen met thuis", "#fff")}
                  {mini.regel("1. Typ de code van thuis")}
                  {mini.code("H7KP2Q")}
                  {mini.regel("2. Wie ben jij?")}
                  {mini.knop("Brian", "rgba(0,176,255,0.2)", "#fff")}
                  {mini.knop("Koppel mij")}
                </MiniScherm>
                <div style={{ ...F.sub, fontSize: 13, marginTop: 10 }}>Oefent je kind op <strong>jouw</strong> telefoon? Dan is geen code nodig: in het ouder-overzicht tik je op <em>voeg je kind hier toe</em>.</div>
              </Stap>
            </div>

            <div style={F.kaart}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Loopt het vast?</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {VALKUILEN.map((k) => (
                  <details key={k.v} style={{ borderRadius: 10, background: "rgba(255,255,255,0.04)", padding: "8px 12px" }} onToggle={(e) => { if (e.currentTarget.open) { try { track("koppelen_valkuil", { v: k.v }); } catch { /* */ } } }}>
                    <summary style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "#fff", cursor: "pointer" }}>{k.v}</summary>
                    <div style={{ ...F.sub, fontSize: 13, marginTop: 6 }}>{k.a}</div>
                  </details>
                ))}
              </div>
              <div style={{ ...F.sub, fontSize: 12.5, marginTop: 10 }}>Nog steeds niet gelukt? Mail <a href={`mailto:${BRAND.email || "hallo@leerkwartier.app"}?subject=${encodeURIComponent("Koppelen lukt niet")}`} style={{ color: "#00b0ff" }}>{BRAND.email || "hallo@leerkwartier.app"}</a> — we kijken er dezelfde dag naar.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
