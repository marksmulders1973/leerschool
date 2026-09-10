// StartKwartier — de eerste 15 minuten van een nieuwe leerling (Mark 7 sep 2026).
//
// 5 vragen op groepsniveau, afgewisseld met 4 kaartjes die de sterke kanten
// laten zien: hulp bij elke vraag, printpakketten, het 3D-park, echte toetsen
// en examens. Altijd te stoppen (knop rechtsboven) → persoonlijke pagina.
// Zie docs/ACTIVATIE-NULMETING-SEP2026.md voor het waarom.
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import Button from "../../shared/ui/Button.jsx";
import Card from "../../shared/ui/Card.jsx";
import MdInline from "../../shared/ui/MdInline.jsx";
import { sanitizeSvg } from "../../shared/sanitizeSvg.js";
import { recordAnswerForPath } from "../mastery/mastery.js";
import { track, getIncomingRef } from "../../utils.js";
import supabase from "../../supabase.js";
import { telAntwoordVoorVriend } from "../referral/referral.js";
import { actievePartnerCode, partnerFamilieTot } from "../referral/partnerCode.js";
import { PARTNER_NAMEN } from "../../components/PartnerWelkom.jsx";
import { bouwStartVragen, markeerStartKwartierGedaan, parseGroep } from "./startKwartier.js";

// Three.js pas laden als het park-kaartje in beeld komt (zelfde patroon als BuddyPicker).
const MaatjeMini3D = lazy(() => import("../zoo/MaatjeMini3D.jsx"));

const SHOWCASES = ["hulp", "printen", "park", "toetsen"];

const S = {
  wrap: { maxWidth: 560, margin: "0 auto", padding: "12px 14px 96px", color: "var(--color-text)", fontFamily: "var(--font-body)" },
  top: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 10 },
  titel: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, margin: 0 },
  dots: { display: "flex", gap: 5, margin: "0 0 14px" },
  dot: (st) => ({
    height: 6, flex: 1, borderRadius: 3,
    background: st === "gedaan" ? "var(--color-success)" : st === "nu" ? "var(--color-brand-primary)" : st === "show" ? "var(--color-warning)" : "var(--color-border-soft)",
    opacity: st === "later" ? 0.5 : 1,
  }),
  vraag: { fontSize: 19, lineHeight: 1.4, fontWeight: 700, margin: "0 0 14px" },
  optie: (state) => ({
    display: "block", width: "100%", textAlign: "left", padding: "12px 14px", marginBottom: 8, borderRadius: 12, fontSize: 16, lineHeight: 1.35,
    fontFamily: "var(--font-body)", cursor: state === "idle" ? "pointer" : "default", color: "var(--color-text)",
    background: state === "goed" ? "var(--color-success-soft)" : state === "fout" ? "var(--color-danger-soft)" : "var(--color-bg-surface)",
    border: "2px solid " + (state === "goed" ? "var(--color-success)" : state === "fout" ? "var(--color-danger)" : "var(--color-border-soft)"),
    opacity: state === "dim" ? 0.55 : 1,
  }),
  feedback: (goed) => ({
    padding: "10px 12px", borderRadius: 10, margin: "6px 0 12px", fontSize: 15, lineHeight: 1.45,
    background: goed ? "var(--color-success-soft)" : "var(--color-warning-soft)",
    borderLeft: "4px solid " + (goed ? "var(--color-success)" : "var(--color-warning)"),
  }),
  showKop: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, margin: "0 0 6px", lineHeight: 1.25 },
  showTekst: { fontSize: 15, lineHeight: 1.5, color: "var(--color-text-muted)", margin: "0 0 14px" },
  pill: { display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase", color: "var(--color-warning)", marginBottom: 6 },
  knoppen: { display: "flex", gap: 8, flexWrap: "wrap" },
  tegel: { display: "flex", alignItems: "center", gap: 10, padding: "12px 12px", borderRadius: 12, background: "var(--color-bg-surface)", border: "1px solid var(--color-border-soft)", color: "var(--color-text)", cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "var(--font-body)", fontSize: 15 },
};

function stripSvg(svg) {
  return sanitizeSvg(svg.replace(/<svg\b([^>]*)>/i, (m, attrs) => {
    const cleaned = attrs.replace(/\s(width|height)=("[^"]*"|'[^']*')/gi, "").replace(/\sstyle=("[^"]*"|'[^']*')/gi, "");
    return "<svg" + cleaned + " style=\"width:100%;max-width:460px;height:auto;display:block;\">";
  }));
}

function uitlegVan(v) {
  return v?.uitlegPad?.niveaus?.basis || v?.uitleg || v?.explanation || null;
}

// ── Vraag ─────────────────────────────────────────────────────────
function VraagKaart({ vraag, nummer, totaal, onBeantwoord, onVerder }) {
  const [gekozen, setGekozen] = useState(null);
  const goed = gekozen != null && gekozen === vraag.answer;
  const uitleg = uitlegVan(vraag);
  const hint = gekozen != null && !goed ? vraag.wrongHints?.[gekozen] : null;
  return (
    <Card variant="exercise" padding="md">
      <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 6 }}>
        Vraag {nummer} van {totaal}{vraag.padTitel ? " · " + vraag.padTitel : ""}
      </div>
      <p style={S.vraag}><MdInline text={vraag.q} /></p>
      {vraag.svg && (
        <div
          style={{ display: "flex", justifyContent: "center", padding: 12, background: "#162033", borderRadius: 12, marginBottom: 14 }}
          dangerouslySetInnerHTML={{ __html: stripSvg(vraag.svg) }}
        />
      )}
      {vraag.options.map((opt, i) => {
        const state = gekozen == null ? "idle" : i === vraag.answer ? "goed" : i === gekozen ? "fout" : "dim";
        return (
          <button
            key={i}
            type="button"
            disabled={gekozen != null}
            onClick={() => { setGekozen(i); onBeantwoord(i === vraag.answer); }}
            style={S.optie(state)}
          >
            <MdInline text={String(opt)} />
          </button>
        );
      })}
      {gekozen != null && (
        <>
          <div style={S.feedback(goed)}>
            <strong>{goed ? "Goed zo! ✅" : "Niet helemaal."}</strong>
            {!goed && hint && <> {hint}</>}
            {!goed && !hint && <> Het juiste antwoord is: <MdInline text={String(vraag.options[vraag.answer])} />.</>}
            {uitleg && <div style={{ marginTop: 4 }}><MdInline text={uitleg} /></div>}
          </div>
          <Button fullWidth size="lg" onClick={onVerder}>Verder →</Button>
        </>
      )}
    </Card>
  );
}

// ── Showcase-kaartjes ─────────────────────────────────────────────
function PapierPreview() {
  // Klein "tafelblad" als echt papier — laat zien hoe een printpakket eruitziet.
  const sommen = [3, 6, 4, 8, 7, 9].map((n) => "7 × " + n + " = ____");
  return (
    <div style={{ background: "#fff", color: "#222", borderRadius: 6, padding: "10px 12px", boxShadow: "0 6px 18px rgba(0,0,0,0.35)", transform: "rotate(-2deg)", width: 170, fontFamily: "Georgia, serif", flexShrink: 0 }}>
      <div style={{ fontSize: 11, fontWeight: 700, borderBottom: "1px solid #ccc", paddingBottom: 4, marginBottom: 6 }}>Tafelblad · tafel van 7</div>
      {sommen.map((s) => <div key={s} style={{ fontSize: 11, lineHeight: 1.7 }}>{s}</div>)}
      <div style={{ fontSize: 9, color: "#888", marginTop: 6 }}>leerkwartier.app · gratis</div>
    </div>
  );
}

function ShowcaseKaart({ id, groep, onGa, onVerder }) {
  const ga = (page, label) => { track("startkwartier_showcase_klik", { kaart: id, naar: page }); onGa(page, label); };
  const kop = (tekst) => <span style={S.pill}>{tekst}</span>;

  if (id === "hulp") {
    return (
      <Card variant="study" padding="md">
        {kop("Wist je dat…")}
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <img src="/maatjes/vonk.jpg" alt="Vonk" width={84} height={84} style={{ borderRadius: 16, objectFit: "cover", flexShrink: 0 }} />
          <div>
            <h3 style={S.showKop}>Snap je een vraag niet? Vonk legt het uit.</h3>
            <p style={S.showTekst}>
              Bij elke vraag zit <strong>Hulp bij deze vraag</strong>: uitleg in stappen, een voorbeeld, en nóg simpeler als dat moet.
              Er zijn 346 leerpaden voor groep 1 tot en met 8 en de brugklas. Alles kan voorgelezen worden 🔊.
            </p>
          </div>
        </div>
        <div style={S.knoppen}>
          <Button variant="secondary" onClick={() => ga("learn-paths-hub", "leerpaden")}>Bekijk de leerpaden</Button>
          <Button onClick={onVerder}>Verder →</Button>
        </div>
      </Card>
    );
  }
  if (id === "printen") {
    return (
      <Card variant="study" padding="md">
        {kop("Ook op papier")}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <PapierPreview />
          <div>
            <h3 style={S.showKop}>Liever aan tafel? Print een pakket.</h3>
            <p style={S.showTekst}>
              Tafelbladen, dictees, redactiesommen, de Leesladder en een compleet oefenpakket. Gratis, direct printen, met antwoordblad.
            </p>
          </div>
        </div>
        <div style={S.knoppen}>
          <Button variant="secondary" onClick={() => ga("printen", "printen")}>Naar de printpakketten</Button>
          <Button onClick={onVerder}>Verder →</Button>
        </div>
      </Card>
    );
  }
  if (id === "park") {
    return (
      <Card variant="study" padding="md">
        {kop("Het park")}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ width: 120, height: 120, flexShrink: 0, borderRadius: 16, background: "radial-gradient(circle at 50% 40%, rgba(120,200,255,0.25), transparent 70%)" }}>
            <Suspense fallback={<img src="/maatjes/vonk.jpg" alt="" width={120} height={120} style={{ borderRadius: 16, objectFit: "cover" }} />}>
              <MaatjeMini3D url="/maatjes/vonk.glb" size={120} />
            </Suspense>
          </div>
          <div>
            <h3 style={S.showKop}>Een echt 3D-park, met vulkaan en bergen.</h3>
            <p style={S.showTekst}>
              Wandel met een maatje door het park: vulkaan, hangbrug, kabelbaan, slee. Elke plek stelt één vraag. Dit is Vonk, in 3D.
            </p>
          </div>
        </div>
        <div style={S.knoppen}>
          <Button variant="secondary" onClick={() => ga("zoo", "park")}>Naar het park</Button>
          <Button onClick={onVerder}>Verder →</Button>
        </div>
      </Card>
    );
  }
  // toetsen: doorstroomtoets + echte examens
  const g78 = groep >= 7;
  return (
    <Card variant="study" padding="md">
      {kop("Echte toetsen")}
      <h3 style={S.showKop}>{g78 ? "Klaar voor de doorstroomtoets." : "Oefenen zoals op de echte toets."}</h3>
      <p style={S.showTekst}>
        {g78
          ? "Oefen in de stijl van Cito, IEP, DIA en AMN: rekenen, taal, lezen en studievaardigheden, met uitleg bij elke fout."
          : "In groep 7 en 8 oefen je hier de doorstroomtoets in de stijl van Cito, IEP, DIA en AMN, met uitleg bij elke fout."}
      </p>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
        <img src="/examens/bio-2025-t1-luis.jpg" alt="Fragment uit een echt examen" width={96} style={{ borderRadius: 8, border: "1px solid var(--color-border-soft)", flexShrink: 0 }} />
        <p style={{ ...S.showTekst, margin: 0 }}>
          En voor later, of voor een grote broer of zus: <strong>echte eindexamens</strong> vmbo, havo en vwo, letterlijk zoals ze op Examenblad staan.
        </p>
      </div>
      <div style={S.knoppen}>
        {g78 && <Button variant="secondary" onClick={() => ga("cito", "doorstroomtoets")}>Doorstroomtoets oefenen</Button>}
        <Button variant="secondary" onClick={() => ga("examens", "examens")}>Bekijk de examens</Button>
        <Button onClick={onVerder}>Verder →</Button>
      </div>
    </Card>
  );
}

// ── Partner-strook (QR-flyer, Mark 7 sep) ─────────────────────────
// Wie via ?partner=CODE binnenkwam ziet hier dat de code écht actief is.
// OOIEVAAR-codes blijven neutraal (afspraak bureau Ooievaarspas).
function PartnerStrook() {
  const code = actievePartnerCode();
  if (!code) return null;
  const naam = code.startsWith("OOIEVAAR") ? null : PARTNER_NAMEN[code];
  const tot = partnerFamilieTot();
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 12px", borderRadius: 12, marginBottom: 12, background: "rgba(0,200,83,0.12)", border: "1px solid rgba(0,200,83,0.4)", fontSize: 14, lineHeight: 1.4 }}>
      <span style={{ fontSize: 20 }}>🎟️</span>
      <span>
        <strong>Code {code} is actief</strong>{naam ? " via " + naam : ""}. De Familie-extra's zijn voor jullie gratis{tot ? " tot en met " + new Date(tot).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" }) : ", blijvend"}.
      </span>
    </div>
  );
}

// ── Ouder-e-mail op het eindscherm (Mark 7 sep: "punt 3") ─────────
// Bijna alle nieuwe accounts zijn gasten zonder e-mail → geen weekpakket,
// geen terugkeer. Eén veld + ouder-toestemming, zelfde tabel/consent als
// GratisLesmateriaal. Eén keer per apparaat.
const MAIL_KEY = "lk_startkwartier_mail";
const geldigEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

function OuderMail({ userName, groep }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [fout, setFout] = useState("");
  const [status, setStatus] = useState(() => { try { return localStorage.getItem(MAIL_KEY) ? "klaar" : "idle"; } catch { return "idle"; } });
  if (status === "klaar") {
    return (
      <div style={{ padding: "10px 12px", borderRadius: 12, marginBottom: 12, background: "var(--color-success-soft)", fontSize: 14 }}>
        📬 Het weekpakket komt eraan. Dank je wel!
      </div>
    );
  }
  const verstuur = async (e) => {
    e.preventDefault();
    const adres = email.trim().toLowerCase();
    if (!geldigEmail(adres)) { setFout("Dat e-mailadres klopt nog niet helemaal."); return; }
    if (!consent) { setFout("Vink even aan dat je de ouder of verzorger bent."); return; }
    setFout(""); setStatus("busy");
    try {
      let nieuwId = null;
      try { nieuwId = crypto.randomUUID(); } catch { /* */ }
      const { error } = await supabase.from("upgrade_waitlist").insert({
        ...(nieuwId ? { id: nieuwId } : {}),
        email: adres,
        // plan MOET in de check-constraint van upgrade_waitlist staan
        // ('weekrapport' zit daar niet in → 400; KwartierVangnet heeft dat lek ook).
        plan: "gratis-lesmateriaal",
        source: "startkwartier",
        consent_at: new Date().toISOString(),
        kind_voornaam: (userName || "").trim().slice(0, 40) || null,
        kind_groep: "groep" + groep,
        ref: getIncomingRef(),
      });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(MAIL_KEY, "1"); } catch { /* */ }
      track("startkwartier_mail", { groep });
      setStatus("klaar");
    } catch {
      setStatus("idle");
      setFout("Even geen verbinding. Probeer het zo nog eens.");
    }
  };
  return (
    <form onSubmit={verstuur} style={{ padding: "12px", borderRadius: 12, marginBottom: 12, background: "var(--color-bg-surface)", border: "1px solid var(--color-border-soft)" }}>
      <div style={{ fontWeight: 700, marginBottom: 4 }}>📬 Elke week een gratis oefenpakket in de mail?</div>
      <div style={{ fontSize: 13.5, color: "var(--color-text-muted)", marginBottom: 8, lineHeight: 1.4 }}>
        Vul het e-mailadres van je ouder of verzorger in. Dan komt er elke week een pakketje voor groep {groep}, met antwoorden.
      </div>
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (fout) setFout(""); }}
        placeholder="naam@voorbeeld.nl"
        style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--color-border-soft)", background: "var(--color-bg-elevated)", color: "var(--color-text)", fontSize: 15, marginBottom: 8, fontFamily: "var(--font-body)" }}
      />
      <label style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8, cursor: "pointer" }}>
        <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); if (fout) setFout(""); }} style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0, accentColor: "#00C853" }} />
        <span style={{ fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.45 }}>
          Ik ben de ouder/verzorger en geef toestemming om wekelijks een gratis oefenpakket op dit adres te ontvangen.{" "}
          <a href="/privacy.html" target="_blank" rel="noreferrer" style={{ color: "#69f0ae" }}>Privacybeleid</a>.
        </span>
      </label>
      {fout && <div style={{ color: "var(--color-danger)", fontSize: 13, marginBottom: 6 }}>{fout}</div>}
      <Button type="submit" variant="secondary" fullWidth disabled={status === "busy"}>{status === "busy" ? "Even geduld…" : "Stuur het weekpakket"}</Button>
    </form>
  );
}

// ── Klaar ─────────────────────────────────────────────────────────
function KlaarKaart({ goed, totaal, groep, userName, onGa }) {
  const tegels = [
    { page: "learn-paths-hub", icoon: "📚", tekst: "Leerpaden voor groep " + groep },
    { page: "zoo", icoon: "🌋", tekst: "Het 3D-park" },
    { page: "printen", icoon: "🖨️", tekst: "Printpakketten" },
    { page: groep >= 7 ? "cito" : "examens", icoon: "📝", tekst: groep >= 7 ? "Doorstroomtoets oefenen" : "Echte examens" },
    { page: "ouder-dashboard", icoon: "💛", tekst: "Ouder of verzorger? Zet oefenwerk klaar" },
  ];
  const tekst = totaal === 0
    ? "Je hebt gezien wat hier kan. Nu zelf proberen!"
    : goed === totaal
      ? "Alles goed. Volgende keer pakken we het iets pittiger."
      : goed >= totaal / 2
        ? "Lekker bezig. Wat fout ging, komt vanzelf terug om te herhalen."
        : "Geen zorgen: precies hiervoor is Leerkwartier. Wat fout ging, komt terug met uitleg.";
  return (
    <Card variant="exercise" padding="md">
      <h3 style={{ ...S.showKop, fontSize: 24 }}>{totaal === 0 ? "Klaar! 🎉" : "Klaar! " + goed + " van " + totaal + " goed 🎉"}</h3>
      <p style={S.showTekst}>{tekst} Je oefentijd telt al mee voor je kwartier van vandaag.</p>
      <Button fullWidth size="lg" onClick={() => onGa("mijn-pagina", "mijn")} style={{ marginBottom: 12 }}>Naar mijn pagina →</Button>
      <OuderMail userName={userName} groep={groep} />
      <div style={{ display: "grid", gap: 8 }}>
        {tegels.map((t) => (
          <button key={t.page} type="button" style={S.tegel} onClick={() => { track("startkwartier_showcase_klik", { kaart: "klaar", naar: t.page }); onGa(t.page, t.tekst); }}>
            <span style={{ fontSize: 22 }}>{t.icoon}</span><span>{t.tekst}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}

// ── Hoofdcomponent ────────────────────────────────────────────────
export default function StartKwartier({ userName, userLevel, authUser, onStop, onGa }) {
  const groep = parseGroep(userLevel) ?? 6;
  const [vragen, setVragen] = useState(null);
  const [stapIdx, setStapIdx] = useState(0);
  const stapIdxRef = useRef(0);
  useEffect(() => { stapIdxRef.current = stapIdx; }, [stapIdx]);
  const [score, setScore] = useState({ goed: 0, totaal: 0 });
  const startRef = useRef(Date.now());
  const afgemeldRef = useRef(false);

  useEffect(() => {
    let dood = false;
    track("startkwartier_start", { groep, level: String(userLevel || "") });
    const t0 = Date.now();
    let eersteGezet = false;
    // Idee 4 (10 sep 2026): vraag 1 zodra het eerste pad binnen is; meting
    // startkwartier_laad (ms tot de eerste vraag / tot alles) voor het dagrapport.
    bouwStartVragen(userLevel, undefined, {
      onEerste: (v) => {
        if (dood || eersteGezet) return;
        eersteGezet = true;
        setVragen(v);
        track("startkwartier_laad", { fase: "eerste", ms: Date.now() - t0, groep });
      },
    }).then((v) => {
      if (dood) return;
      track("startkwartier_laad", { fase: "alles", ms: Date.now() - t0, groep, n: v.length });
      // Zit het kind nog op vraag 1 (of het kaartje erna), dan de volledige
      // om-en-om-lijst nemen; anders de resterende vragen erachter plakken
      // zodat de vraag onder de neus nooit wisselt.
      setVragen((huidig) => {
        if (!huidig || !huidig.length) return v;
        if (stapIdxRef.current <= 1) return v;
        const bekend = new Set(huidig.map((q) => q.id || q.question || JSON.stringify(q)));
        return huidig.concat(v.filter((q) => !bekend.has(q.id || q.question || JSON.stringify(q)))).slice(0, Math.max(huidig.length, v.length));
      });
    }).catch(() => { if (!dood && !eersteGezet) setVragen([]); });
    return () => { dood = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Stappen: vraag, kaartje, vraag, kaartje, … , klaar.
  const stappen = useMemo(() => {
    if (!vragen) return [];
    const s = [];
    const shows = SHOWCASES.slice();
    vragen.forEach((v, i) => {
      s.push({ type: "vraag", vraag: v, nummer: i + 1 });
      if (shows.length && i < vragen.length - 1) s.push({ type: "show", id: shows.shift() });
    });
    shows.forEach((id) => s.push({ type: "show", id }));
    s.push({ type: "klaar" });
    return s;
  }, [vragen]);

  const stap = stappen[stapIdx];
  const totaalVragen = vragen?.length || 0;

  const klaarMelden = (hoe) => {
    markeerStartKwartierGedaan(hoe);
    if (afgemeldRef.current) return;
    afgemeldRef.current = true;
    track("startkwartier_einde", { hoe, stap: stapIdx, goed: score.goed, beantwoord: score.totaal, sec: Math.round((Date.now() - startRef.current) / 1000) });
  };
  const stop = () => { klaarMelden("stop"); onStop(); };
  const ga = (page, label) => { klaarMelden("naar:" + (label || page)); onGa(page); };
  const verder = () => {
    if (stapIdx + 1 < stappen.length) {
      setStapIdx(stapIdx + 1);
      try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch { /* */ }
    }
  };
  const beantwoord = (vraag, isGoed) => {
    setScore((s) => ({ goed: s.goed + (isGoed ? 1 : 0), totaal: s.totaal + 1 }));
    track("startkwartier_vraag", { nummer: stap?.nummer, pad: vraag.pathId, goed: isGoed });
    // meetfix 10 sep 2026: start-kwartier-vragen tellen mee als beantwoorde vragen (dagrapport/Noord-ster)
    track("question_answered", { bron: "startkwartier", pad: vraag.pathId, is_correct: isGoed });
    try {
      recordAnswerForPath({ playerName: userName || "Speler", pathId: vraag.pathId, isCorrect: isGoed, userId: authUser?.id || null });
    } catch { /* */ }
    // Partner-/vriendcode: na 3 antwoorden wordt de gezins-plek geclaimd
    // (zelfde aanroep als PlayQuiz) — zo telt een QR-scanner hier al mee.
    try { telAntwoordVoorVriend(); } catch { /* */ }
  };

  useEffect(() => {
    if (stap?.type === "klaar") klaarMelden("klaar");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stap?.type]);

  const naam = (userName || "").trim();
  const dotStatus = (st, i) => {
    if (i === stapIdx) return "nu";
    if (i > stapIdx) return "later";
    return st.type === "show" ? "show" : "gedaan";
  };

  return (
    <div style={S.wrap}>
      <div style={S.top}>
        <h2 style={S.titel}>🚀 Start-kwartier{naam ? " van " + naam : ""}</h2>
        <Button variant="ghost" size="sm" onClick={stop} aria-label="Stop het start-kwartier">Stop ✕</Button>
      </div>
      {stappen.length > 0 && (
        <div style={S.dots}>
          {stappen.map((st, i) => <div key={i} style={S.dot(dotStatus(st, i))} />)}
        </div>
      )}
      {stapIdx === 0 && <PartnerStrook />}
      {stapIdx === 0 && (
        <p style={{ ...S.showTekst, marginTop: 0 }}>
          {totaalVragen > 0 ? totaalVragen + " vragen voor groep " + groep : "Even kijken wat Leerkwartier kan"}, en tussendoor zie je wat hier allemaal kan. Stoppen mag altijd.
        </p>
      )}

      {!vragen && (
        <Card variant="study" padding="md"><p style={{ margin: 0 }}>⏳ Je eerste vraag voor groep {groep} komt eraan… (een paar tellen)</p></Card>
      )}
      {vragen && vragen.length === 0 && (
        <Card variant="study" padding="md">
          <p style={{ margin: "0 0 10px" }}>De vragen laden nu even niet. Je kunt wel meteen een leerpad kiezen.</p>
          <Button onClick={() => ga("learn-paths-hub", "leren")}>📚 Kies een leerpad</Button>
        </Card>
      )}
      {stap?.type === "vraag" && (
        <VraagKaart
          key={stapIdx}
          vraag={stap.vraag}
          nummer={stap.nummer}
          totaal={totaalVragen}
          onBeantwoord={(isGoed) => beantwoord(stap.vraag, isGoed)}
          onVerder={verder}
        />
      )}
      {stap?.type === "show" && <ShowcaseKaart key={stapIdx} id={stap.id} groep={groep} onGa={ga} onVerder={verder} />}
      {stap?.type === "klaar" && <KlaarKaart goed={score.goed} totaal={score.totaal} groep={groep} userName={userName} onGa={ga} />}
    </div>
  );
}
