import { useState, useEffect, useRef, useCallback } from "react";
import supabase from "../../supabase.js";
import { haalScoresVoorKind, haalLeerpadVoortgangVoorKind } from "./kindData.js";
import LesVoortgang, { PATHS_BY_ID } from "../../shared/ui/LesVoortgang.jsx";
import LesDetail from "../../shared/ui/LesDetail.jsx";
import ToetsDetail from "../../shared/ui/ToetsDetail.jsx";
import { isLaunchPromoActive } from "../../constants.js";
import { BRAND } from "../../brand.js";
import { clearAll as clearAdaptive } from "../../shared/adaptiveStore.js";
import DoorstroomtoetsLogo from "../../components/DoorstroomtoetsLogo.jsx";
import ProBadge from "../../subscription/ProBadge.jsx";
import FamilieAfsluiten from "../../subscription/FamilieAfsluiten.jsx";
import { trackProUse } from "../../subscription/proPlan.js";
import { track } from "../../utils.js";
import DiplomaKast from "../../shared/ui/DiplomaKast.jsx";
import KwartierplanSectie from "../kwartierplan/KwartierplanSectie.jsx";
import { haalKlaargezetVoorLink, haalWeg, KLAARGEZET_EVENT } from "../../shared/ouderKlaargezet.js";
import KindOverzicht from "./KindOverzicht.jsx";
import CharleyTip from "../../components/CharleyTip.jsx";
import Gezinsstart, { VoorkeurEditor, MAX_KINDEREN } from "./Gezinsstart.jsx";
import { bewaarVoorkeur, voorkeurSamenvatting } from "../vandaag/voorkeur.js";
import { koppelingVoor } from "../../shared/koppeling.js";
import EmailLogin from "../../auth/EmailLogin.jsx";

// 🏠 Gezinsstart (30 sep 2026): het moment waarop het weekrapport de deur uit
// gaat, op één plek — staat in de blokken "Weekrapport" en in de wizard.
// ⚠️ api/send-ouder-rapport.js verstuurt op dit moment op MAANDAGochtend
// (vanuit de lesmateriaal-cron); Mark wil vrijdag 16:00 — cron nog verzetten.
const WEEKRAPPORT_MOMENT = "Elke vrijdag om 16:00";
const GROEP_OPTIES = ["3", "4", "5", "6", "7", "8", "brugklas"];


// Gedeeld ouder-inzicht-blok (Mark 14 aug): dezelfde ouder-functionaliteit —
// kind koppelen (code via WhatsApp/e-mail/kopiëren), partner-mail, betalen en
// de voortgang per kind — op TWEE plekken: het volledige /ouder-dashboard én
// ingebouwd op de persoonlijke pagina /mijn (embedded). Eén codebase, twee
// deuren; zo lopen de twee locaties nooit uit elkaar. De pagina-chrome (Header,
// achtergrond) zit in de wrapper eromheen, niet hier.

const SUBJECT_LABELS = {
  rekenen: "Rekenen", taal: "Taal", aardrijkskunde: "Aardrijkskunde",
  geschiedenis: "Geschiedenis", natuur: "Natuur", engels: "Engels",
  spelling: "Spelling", "begrijpend-lezen": "Begrijpend lezen",
  cito: "Doorstroomtoets", wiskunde: "Wiskunde", biologie: "Biologie",
};

// Familie feature 7 (Mark 1 aug): een gezin koppelt tot 3 kinderen op één
// account (MAX_KINDEREN komt uit Gezinsstart.jsx). Datamodel
// (parent_child_links) ondersteunt al meerdere; deze cap + het "wij oefenen
// samen"-gevoel maken het een Familie-troef zonder broer/zus-vergelijking.

// Vinkje/pijl als SVG (geen emoticon als icoon, Mark 11 sep).
function Bolletje({ kleur, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke={kleur} strokeWidth="2" />
      <path d="M7.5 12.5l3 3 6-6" stroke={kleur} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BlokKop({ children, kleur = "rgba(255,255,255,0.85)" }) {
  return <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: kleur, marginBottom: 8 }}>{children}</div>;
}

function ScoreBadge({ pct }) {
  // Robuust bij een nullable/corrupte scorebord-rij: toon "—" i.p.v. "null%".
  const n = Number(pct);
  const geldig = Number.isFinite(n);
  const color = !geldig ? "rgba(255,255,255,0.4)" : n >= 80 ? "var(--color-brand-primary-100)" : n >= 60 ? "#ffb74d" : "#ff7043";
  const bg = !geldig ? "rgba(255,255,255,0.06)" : n >= 80 ? "rgba(105,240,174,0.12)" : n >= 60 ? "rgba(255,183,77,0.12)" : "rgba(255,112,67,0.12)";
  return (
    <span style={{ padding: "2px 8px", borderRadius: 8, background: bg, color, fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700 }}>
      {geldig ? `${n}%` : "—"}
    </span>
  );
}

// Datum-helper: nullable/ongeldige completed_at gaf "Invalid Date" in de UI.
function fmtDatum(x, opts) {
  if (!x) return "";
  const d = new Date(x);
  return isNaN(d.getTime()) ? "" : d.toLocaleDateString("nl-NL", opts);
}

function generateCode() {
  // Audit 16-07: crypto-random i.p.v. Math.random — koppelcodes zijn een
  // beveiligingsmiddel (toegang tot kind-voortgang), geen visueel gimmickje.
  // Alfabet zonder verwarrende tekens (0/O, 1/I/L) voor overtypen vanaf WhatsApp.
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}


export default function OuderInzicht({ authUser, subscription, onUpgrade, onLogin, onRondleiding, onKlaarzetten, onHierOefenen, onOpenLes, embedded = false }) {
  // Welkom-paneel — toont ouders de voordelen + gratis-USP vs Squla/Junior Einstein.
  // Default open zonder gekoppeld kind, daarna in te klappen.
  const [welcomeCollapsed, setWelcomeCollapsed] = useState(() => {
    try {
      const stored = localStorage.getItem("lk-ouder-welcome-collapsed");
      if (stored === "1") return true;
    } catch { /* ignore */ }
    return false; // default open — ouder oriënteert zich vaak vooraf
  });
  const toggleWelcome = () => {
    setWelcomeCollapsed((prev) => {
      const next = !prev;
      try { localStorage.setItem("lk-ouder-welcome-collapsed", next ? "1" : "0"); } catch { /* ignore */ }
      return next;
    });
  };
  const isPro = isLaunchPromoActive() || subscription?.tier === "parent_pro";
  const [children, setChildren] = useState([]);
  // Openstaande koppelcodes (link_codes zonder used_at, nog geldig) = de
  // "wacht op je kind"-kaarten. Samen met `children` vormen ze de plek-status
  // per kind: leeg → wacht → (evt. bevestigen) → ✓ gekoppeld.
  const [openInvites, setOpenInvites] = useState([]);
  // 🏠 Gezinsstart (30 sep 2026): wizard open? null = automatisch (bij 0
  // kinderen), true = via "Nog een kind", false = door de ouder gesloten.
  const [gezinsstartOpen, setGezinsstartOpen] = useState(null);
  // Per kind uit gezin_overzicht(): laatst geoefend (max over mastery/leerpad/
  // toets-rijen op link_id). { [link_id]: iso|null }
  const [laatstActief, setLaatstActief] = useState({});
  const [overzichtGeladen, setOverzichtGeladen] = useState(false);
  // Inline bewerken op de kind-kaart: nadruk (voorkeur) en groep.
  const [voorkeurEditId, setVoorkeurEditId] = useState(null);
  const [voorkeurSaving, setVoorkeurSaving] = useState(false);
  // Welke code is net gekopieerd (voor de feedback per kaart).
  const [copiedCode, setCopiedCode] = useState("");
  const [selectedChild, setSelectedChild] = useState(null);
  // 🔒 Opslag-uitleg (Mark 27 aug: "zet er netjes bij wat wél wordt
  // opgeslagen en hoe dat beveiligd is"): uitklap-blokje onderaan de
  // kinderen-kaart, in gewone taal.
  const [opslagInfoOpen, setOpslagInfoOpen] = useState(false);
  const koppelFlowRef = useRef(null); // scroll-target = de koppel-kaarten
  const [childScores, setChildScores] = useState([]);
  const [citoScores, setCitoScores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scoresLoading, setScoresLoading] = useState(false);
  // true zodra de scores-query voor het geselecteerde kind écht is afgerond —
  // scoresLoading start op false, dus "niet aan het laden" betekent vóór de
  // eerste query nog níét "geladen". De Charley-tips keken daar 1 sep één
  // render-frame te vroeg naar en de geen-resultaten-tip stal de sessie-slot.
  const [scoresGeladen, setScoresGeladen] = useState(false);
  // Koppeling-herstel (Mark 1 sep 2026): nieuw toestel / kind op verkeerd
  // account → één verse code her-koppelt automatisch (claim_link_code verhangt
  // child_user_id naar het account dat de code invoert). We tonen die code
  // INLINE op de gekoppelde-kind-kaart, want een openstaande code voor een
  // al-gekoppeld kind wordt in de slot-lijst juist onderdrukt. { childId, code }.
  const [herstelCode, setHerstelCode] = useState(null);
  // 📊 Kind-overzichtspagina (Mark 1 sep): klik op naam/📊 op de gekoppelde
  // kaart → fullscreen totaaloverzicht van dat kind (KindOverzicht.jsx).
  const [overzichtKind, setOverzichtKind] = useState(null);
  // Partner-mail (Mark 14 aug): tweede adres (partner/verzorger) dat het
  // wekelijkse rapport óók ontvangt. Eén adres per gezín — op alle koppelingen
  // van deze ouder gelijk gehouden (kolom parent_child_links.partner_email).
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerSaving, setPartnerSaving] = useState(false);
  const [partnerSaved, setPartnerSaved] = useState(false);
  const [partnerError, setPartnerError] = useState("");

  // Pro-meting (Mark 2026-06-06): ouder opent het inzicht-dashboard.
  useEffect(() => { trackProUse("parent-dashboard"); }, []);

  // Laad gekoppelde kinderen + openstaande codes in één keer. Herbruikbaar
  // gemaakt (was inline effect) zodat de poll hieronder 'm kan aanroepen: zo
  // springt een "wacht op je kind"-kaart vanzelf om naar ✓ gekoppeld zodra het
  // kind de code op zijn eigen toestel invoert — zonder dat de ouder ververst.
  const laadKoppelStatus = useCallback(async (isPoll = false) => {
    if (!authUser) return;
    const [linksRes, codesRes, overzichtRes] = await Promise.all([
      supabase.from("parent_child_links")
        .select("*")
        .eq("parent_user_id", authUser.id)
        .order("created_at", { ascending: true }),
      supabase.from("link_codes")
        .select("id, code, child_name, expires_at, used_at, created_at")
        .eq("parent_user_id", authUser.id)
        .is("used_at", null)
        .order("created_at", { ascending: true }),
      // Gezinsstart: "laatst geoefend" per kind (gezin_overzicht leest op link_id).
      supabase.rpc("gezin_overzicht").then((r) => r).catch(() => ({ data: null })),
    ]);
    const links = linksRes.data || [];
    setChildren(links);
    try {
      const kinderen = overzichtRes?.data?.kinderen || [];
      setLaatstActief(Object.fromEntries(kinderen.map((k) => [k.link_id, k.laatst_actief || null])));
    } catch { /* overzicht is een extraatje */ }
    setOverzichtGeladen(true);
    // Partner-mail: adres staat op elke koppeling gelijk — pak de eerste die
    // 'm heeft. Alléén bij de eerste load: de 6s-poll (isPoll) zou anders het
    // veld elke tik overschrijven terwijl de ouder er net in typt
    // (Fable-review 30 aug).
    if (!isPoll) setPartnerEmail(links.find((c) => c.partner_email)?.partner_email || "");
    // Poll-pad: koppelde het éérste kind zojuist (wacht-kaart → ✓), selecteer
    // 'm dan meteen zodat de voortgang eronder verschijnt. De initial load
    // regelt z'n eigen voorselectie (lk_ouder_kind) in het effect hieronder.
    if (isPoll) setSelectedChild((huidig) => huidig || links[0]?.child_name || null);
    // Alleen nog-geldige codes tonen als wacht-kaart (verlopen = weg).
    const nu = Date.now();
    setOpenInvites((codesRes.data || []).filter((iv) => !iv.expires_at || new Date(iv.expires_at).getTime() > nu));
    return links;
  }, [authUser]);

  useEffect(() => {
    if (!authUser) return;
    laadKoppelStatus().then((links) => {
      // Voorselectie vanaf /mijn (gezins-chip, 12 aug): lk_ouder_kind; anders
      // het eerste gekoppelde kind, zodat de voortgang meteen zichtbaar is.
      // Alleen bij eerste load (selectedChild nog leeg).
      setSelectedChild((huidig) => {
        if (huidig || !links?.length) return huidig;
        let gewenst = null;
        try { gewenst = localStorage.getItem("lk_ouder_kind"); localStorage.removeItem("lk_ouder_kind"); } catch {}
        const match = gewenst && links.find((c) => c.child_name === gewenst);
        return match ? match.child_name : links[0].child_name;
      });
    });
  }, [authUser, laadKoppelStatus]);

  // 🔄 Live "wacht op je kind": zolang er een openstaande code is, elke 6s
  // opnieuw laden. Zodra het kind koppelt verdwijnt de code (used_at gezet) en
  // verschijnt de ✓-kaart. Stopt vanzelf als er geen open codes meer zijn.
  // Vangnet (Mark 31 aug 2026): stopt sowieso na 10 minuten én slaat een tik
  // over als het tabblad op de achtergrond staat — zo kan dit scherm nooit
  // stilletjes de databundel van een telefoon leegtikken.
  useEffect(() => {
    if (openInvites.length === 0) return undefined;
    const MAX_DUUR = 10 * 60 * 1000; // 10 min harde limiet
    const start = Date.now();
    let interval = null;
    const stop = () => { if (interval) { clearInterval(interval); interval = null; } };
    const tick = () => {
      if (Date.now() - start >= MAX_DUUR) { stop(); return; } // na 10 min klaar
      if (typeof document !== "undefined" && document.hidden) return; // tabblad weg → geen data
      laadKoppelStatus(true);
    };
    interval = setInterval(tick, 6000);
    return () => stop();
  }, [openInvites.length, laadKoppelStatus]);

  // Privacy: alleen scores tonen voor kinderen waarvan de koppeling
  // bevestigd is. parent_child_links.verified moet expliciet TRUE zijn —
  // anders kan elke ouder via naam-rade willekeurig kind volgen
  // (audit-3 K6 / 2026-05-08).
  const selectedChildVerified = children.find(
    (c) => c.child_name === selectedChild && c.verified === true
  );

  // 💛 Klaargezette lessen voor het geselecteerde kind (Mark 15 aug: "laat de
  // map óók op de ouder-pagina zien — dan kunnen ze samen de vragen bekijken
  // en helpen"). Ouder leest z'n eigen koppeling via RLS.
  const [klaarLijst, setKlaarLijst] = useState([]);
  // 📚 Leerpad-voortgang (Mark 4 sep 2026: "ik zie niet wat hij gedaan heeft").
  // `gedaan` in ouder_klaargezet is een handmatig vinkje van het kind, en dat
  // zet een kind zelden aan. De échte voortgang staat in learn_progress; die
  // lezen we er nu naast, zodat een klaargezette les vanzelf meegroeit.
  const [padVoortgang, setPadVoortgang] = useState({});
  // Welke les staat opengeklapt met het "wat is er precies gemaakt"-detail?
  const [openDetail, setOpenDetail] = useState(null);
  // 📝 Welke toets staat opengeklapt met het per-vraag-detail (Mark 4 sep 2026)?
  const [openToets, setOpenToets] = useState(null);
  useEffect(() => {
    const link = selectedChildVerified;
    if (!link?.id) { setKlaarLijst([]); setPadVoortgang({}); return; }
    let cancel = false;
    const laad = () => {
      haalKlaargezetVoorLink(link.id).then((r) => { if (!cancel) setKlaarLijst(r); });
      haalLeerpadVoortgangVoorKind(link).then((r) => { if (!cancel) setPadVoortgang(r); });
    };
    laad();
    window.addEventListener(KLAARGEZET_EVENT, laad);
    return () => { cancel = true; window.removeEventListener(KLAARGEZET_EVENT, laad); };
  }, [selectedChildVerified?.id]);
  // Wat het kind zélf koos = alle leerpaden met voortgang die niet in de
  // klaargezet-lijst staan. Nieuwste bovenaan, hooguit 6 zodat het overzicht
  // een overzicht blijft.
  const klaarIds = new Set(klaarLijst.map((k) => k.path_id));
  const zelfGedaan = Object.entries(padVoortgang)
    .filter(([pathId]) => !klaarIds.has(pathId))
    .map(([pathId, voortgang]) => ({
      pathId,
      voortgang,
      titel: PATHS_BY_ID[pathId]?.title || pathId,
      emoji: PATHS_BY_ID[pathId]?.emoji || "📘",
    }))
    .sort((a, b) => (b.voortgang?.laatste || 0) - (a.voortgang?.laatste || 0))
    .slice(0, 6);

  const verwijderKlaar = async (pathId) => {
    if (!selectedChildVerified?.id) return;
    await haalWeg(selectedChildVerified.id, pathId);
    setKlaarLijst((prev) => prev.filter((x) => x.path_id !== pathId));
  };

  // Laad scores voor geselecteerd kind — alleen bij verified link
  useEffect(() => {
    if (!selectedChild || !selectedChildVerified) {
      setChildScores([]);
      setScoresLoading(false);
      setScoresGeladen(false);
      return;
    }
    setScoresLoading(true);
    setScoresGeladen(false);
    // Naamgenoten-lek (audit 16-07): alleen op voornaam matchen mengt scores
    // van élke "Sophie" in het land. Zelfde fix als de ouder-mail (migratie
    // 20260711): scope op child_user_id waar de koppeling die heeft;
    // legacy-links zonder uid houden naam-match.
    // Stap 2 koppeling-identiteit (2 sep 2026): lezen op link_id (nieuwe rijen)
    // + naam(+uid) voor rijen van vóór de koppeling — zie kindData.js.
    haalScoresVoorKind(
      { id: selectedChildVerified?.id, child_name: selectedChild, child_user_id: selectedChildVerified?.child_user_id },
      { select: "id, subject, level, score, total, percentage, time_taken, completed_at, detail", limit: 50 }
    ).then((rows) => {
      setChildScores(rows || []);
      setScoresLoading(false);
      setScoresGeladen(true);
    });
    // Deps op id/child_user_id, niet het object: de 6s-koppelpoll maakt élke
    // tik een verse children-array → selectedChildVerified is dan een nieuwe
    // referentie en dit effect herlaadde elke 6s mét "Laden..."-flits op /mijn
    // (Mark-melding 1 sep 2026: witte streep om de ~6 sec).
  }, [selectedChild, selectedChildVerified?.id, selectedChildVerified?.child_user_id]);

  // Cito scores apart — alleen bij verified link
  useEffect(() => {
    if (!selectedChild || !selectedChildVerified) {
      setCitoScores([]);
      return;
    }
    haalScoresVoorKind(
      { id: selectedChildVerified.id, child_name: selectedChild, child_user_id: selectedChildVerified.child_user_id },
      { select: "id, subject, level, score, total, percentage, completed_at, detail", subject: "cito", limit: 100 }
    ).then((rows) => setCitoScores(rows || []));
    // Zelfde deps-verfijning als het scores-effect hierboven (6s-poll-flits).
  }, [selectedChild, selectedChildVerified?.id, selectedChildVerified?.child_user_id]);

  const removeChild = async (id) => {
    const kind = children.find((c) => c.id === id);
    if (!window.confirm(`Koppeling met ${kind?.child_name || "dit kind"} verwijderen?\n\nJe ziet dan geen voortgang meer en het weekrapport voor dit kind stopt. De voortgang van je kind zelf blijft gewoon bestaan.`)) return;
    await supabase.from("parent_child_links").delete().eq("id", id);
    setChildren(prev => prev.filter(c => c.id !== id));
    setSelectedChild(prev => children.find(c => c.id !== id)?.child_name || null);
  };

  // Instellingen (Mark 12 aug, Squla-gat "volwassen ouderdashboard"):
  // weekrapport per kind aan/uit. Kolom parent_child_links.weekmail;
  // de maandag-mail (RPC ouder_weekrapport_kandidaten) filtert erop.
  const toggleWeekmail = async (c) => {
    const nieuw = c.weekmail === false; // undefined/null = aan (default true)
    setChildren(prev => prev.map(k => k.id === c.id ? { ...k, weekmail: nieuw } : k));
    const { error } = await supabase.from("parent_child_links").update({ weekmail: nieuw }).eq("id", c.id);
    if (error) setChildren(prev => prev.map(k => k.id === c.id ? { ...k, weekmail: !nieuw } : k));
    else track("ouder_weekmail_toggle", { aan: nieuw });
  };

  // Partner-mail opslaan (Mark 14 aug): één adres per gezin → op álle
  // koppelingen van deze ouder tegelijk zetten, zodat de kandidaten-RPC het
  // meegeeft ongeacht welk kind de mail triggert. Leeg = weer uitzetten (null).
  const savePartnerEmail = async () => {
    if (!authUser) return;
    const email = partnerEmail.trim().toLowerCase();
    setPartnerError("");
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setPartnerError("Dat lijkt geen geldig e-mailadres.");
      return;
    }
    setPartnerSaving(true);
    setPartnerSaved(false);
    if (!email) {
      // Uitzetten: direct, geen bevestiging nodig (mag altijd).
      const { error } = await supabase
        .from("parent_child_links")
        .update({ partner_email: null, partner_token: null, partner_email_bevestigd_at: null })
        .eq("parent_user_id", authUser.id);
      setPartnerSaving(false);
      if (error) { setPartnerError("Opslaan lukte niet. Probeer het later opnieuw."); return; }
      setChildren((prev) => prev.map((c) => ({ ...c, partner_email: null, partner_email_bevestigd_at: null })));
      setPartnerEmail("");
      setPartnerSaved(true);
      track("ouder_partner_mail_ingesteld", { aan: false });
      return;
    }
    // F15 (2 sep 2026): niet stilzwijgend inschrijven — de partner krijgt één
    // uitnodigingsmail en zegt zélf "ja" (api/partner-uitnodiging → /api/bevestig).
    try {
      const { data: sess } = await supabase.auth.getSession();
      const token = sess?.session?.access_token;
      if (!token) throw new Error("geen sessie");
      const r = await fetch("/api/partner-uitnodiging", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ email }),
      });
      const j = await r.json().catch(() => ({}));
      setPartnerSaving(false);
      if (!r.ok) {
        setPartnerError(j?.error === "eigen-adres" ? "Dat is je eigen adres — jij krijgt het rapport al." : j?.error === "geen-koppeling" ? "Koppel eerst een kind, dan kun je iemand laten meelezen." : "Uitnodigen lukte niet. Probeer het later opnieuw.");
        return;
      }
      setChildren((prev) => prev.map((c) => ({ ...c, partner_email: email, partner_email_bevestigd_at: null })));
      setPartnerEmail(email);
      setPartnerSaved(true);
      track("ouder_partner_mail_ingesteld", { aan: true });
    } catch {
      setPartnerSaving(false);
      setPartnerError("Uitnodigen lukte niet. Probeer het later opnieuw.");
    }
  };
  // Status van het partner-adres (uit de koppelingen): null | "wacht" | "bevestigd".
  const partnerStatus = (() => {
    const c = children.find((k) => k.partner_email);
    if (!c) return null;
    return c.partner_email_bevestigd_at ? "bevestigd" : "wacht";
  })();

  // K6/AVG art. 17 (sprint-2 2026-05-08): self-service "Verwijder al mijn data".
  // Werkt op alle tabellen waar user_id = auth.uid OF parent_user_id = auth.uid.
  // Anonieme rijen op player_name laat dit ongemoeid (kan niet veilig matchen
  // zonder eigenaar-bewijs). Voor volledige verwijdering moet leerling-account
  // ook ingelogd zijn — toekomstige feature.
  const [deletingMyData, setDeletingMyData] = useState(false);
  const [deleteDone, setDeleteDone] = useState(false);
  const deleteAllMyData = async () => {
    if (!authUser) return;
    if (!window.confirm(
      "Weet je het zeker?\n\nDit verwijdert alles wat aan je account hangt:\n" +
      "• je gekoppelde kinderen en klaargezette lessen\n" +
      "• je voortgang, scores, doelen en park (waar je ingelogd was)\n" +
      "• je feedback-berichten, e-mailinschrijvingen en een eventuele partner-plek\n" +
      "• je account zelf — je wordt uitgelogd en kunt opnieuw beginnen\n\n" +
      "Anonieme spelers-data (zonder login) blijft staan tot je 'm via e-mail verwijdert.\n\n" +
      "Doorgaan?"
    )) return;
    setDeletingMyData(true);
    // Audit 16-07: de oude client-side deletes verwijderden door ontbrekende
    // DELETE-policies stilletjes 0 rijen (RLS), maar toonden wél "✅ Verwijderd".
    // Nu via de server-side RPC delete_my_data() die als eigenaar écht
    // verwijdert (incl. e-maillijst op accountadres) en tellingen teruggeeft.
    const { data, error } = await supabase.rpc("delete_my_data");
    if (error || !data?.ok) {
      // eslint-disable-next-line no-console
      console.error("[OuderInzicht] delete_my_data faalde:", error?.message || data?.error);
      alert("Het verwijderen is niet gelukt. Probeer het later opnieuw, of mail ons — dan doen wij het handmatig.");
      setDeletingMyData(false);
      return;
    }
    // Adaptieve leer-state (per-vraag fout-tracker, browser-only).
    try { clearAdaptive(); } catch {}
    setDeletingMyData(false);
    setDeleteDone(true);
    setChildren([]);
    setSelectedChild(null);
    // F6 (Fable-review 2 sep 2026): de RPC verwijdert nu óók het auth-account.
    // De lokale sessie is daarmee ongeldig → uitloggen en lokale sporen wissen,
    // na een korte pauze zodat de "✅ Verwijderd"-melding nog zichtbaar is.
    setTimeout(async () => {
      try { await supabase.auth.signOut(); } catch {}
      try {
        Object.keys(localStorage).filter((k) => /^(lk_|ls_|studiebol_|sb-)/.test(k)).forEach((k) => localStorage.removeItem(k));
      } catch {}
      try { window.location.assign("/"); } catch {}
    }, 2500);
  };

  // Koppelcode voor een kind op een ánder apparaat (Gezinsstart stap 3 "Nee",
  // en de kaart "Nog niet gekoppeld"). Geeft de code terug of null. De
  // koppeling zelf bestaat al (gezin_koppel_zelfde_apparaat, verified=false)
  // mét groep/voorkeur; claim_link_code vindt die op ouder + naam en zet 'm
  // op gekoppeld zodra het kind de code invoert.
  const maakCodeVoor = async (childName) => {
    if (!authUser || !childName?.trim()) return null;
    setLoading(true);
    const code = generateCode();
    const expires = new Date(Date.now() + 48 * 3600 * 1000).toISOString();
    // Bug-fix 2026-05-18: link_codes.child_name is NOT NULL. Silent .catch
    // verving door explicit-log zodat insert-fails niet meer onzichtbaar zijn.
    const { error } = await supabase.from("link_codes").insert({
      code, parent_user_id: authUser.id, child_name: childName.trim(), expires_at: expires, van_wie: null,
    });
    setLoading(false);
    if (error) {
      // eslint-disable-next-line no-console
      console.error("[OuderInzicht] maakCodeVoor failed:", error.message);
      return null;
    }
    laadKoppelStatus();
    try { track("ouder_koppelcode_gemaakt", { via: "gezinsstart" }); } catch { /* */ }
    return code;
  };

  // Groep en nadruk (voorkeur) op de kind-kaart bewerken. Staat het kind op dít
  // toestel, dan gaat de nieuwe voorkeur ook meteen in lk_voorkeur, zodat het
  // kwartier van vandaag 'm zonder herladen oppakt.
  const bewaarGroep = async (c, groep) => {
    const nieuw = groep || null;
    setChildren((prev) => prev.map((k) => (k.id === c.id ? { ...k, groep: nieuw } : k)));
    const { error } = await supabase.from("parent_child_links").update({ groep: nieuw }).eq("id", c.id);
    if (error) { setChildren((prev) => prev.map((k) => (k.id === c.id ? { ...k, groep: c.groep } : k))); return; }
    if (koppelingVoor(c.child_name)?.ouder?.link_id === c.id) bewaarVoorkeur(c.child_name, { groep: nieuw });
    try { track("gezin_groep_gewijzigd", {}); } catch { /* */ }
  };
  const bewaarVoorkeurVan = async (c, voorkeur) => {
    setVoorkeurSaving(true);
    const { error } = await supabase.from("parent_child_links").update({ voorkeur }).eq("id", c.id);
    setVoorkeurSaving(false);
    if (error) { alert("Opslaan lukte niet. Probeer het zo nog eens."); return; }
    setChildren((prev) => prev.map((k) => (k.id === c.id ? { ...k, voorkeur } : k)));
    if (koppelingVoor(c.child_name)?.ouder?.link_id === c.id) bewaarVoorkeur(c.child_name, { groep: c.groep || null, voorkeur });
    setVoorkeurEditId(null);
    try { track("gezin_voorkeur_gewijzigd", { vakken: (voorkeur?.vakken || []).length, app_kiest: voorkeur?.app_kiest ? 1 : 0 }); } catch { /* */ }
  };

  // 🔗 Herstel-code voor een AL gekoppeld kind (Mark 1 sep 2026): nieuw toestel,
  // gewiste opslag of kind op een verkeerd account → één verse code lost het op.
  // claim_link_code vindt de bestaande koppeling (zelfde ouder + kindnaam) en
  // verhangt child_user_id naar het account dat de code invoert. We omzeilen de
  // cap-check van maakCodeVoor niet nodig (het kind telt al mee); code inline.
  const maakHerstelCode = async (childName) => {
    if (!authUser || !childName?.trim()) return;
    setLoading(true);
    const code = generateCode();
    const expires = new Date(Date.now() + 48 * 3600 * 1000).toISOString();
    const { error } = await supabase.from("link_codes").insert({
      code, parent_user_id: authUser.id, child_name: childName.trim(), expires_at: expires, van_wie: null,
    });
    setLoading(false);
    if (error) {
      // eslint-disable-next-line no-console
      console.error("[OuderInzicht] maakHerstelCode failed:", error.message);
      alert("Kon code niet opslaan. Probeer later opnieuw.");
      return;
    }
    setHerstelCode({ childName: childName.trim(), code });
    try { track("ouder_koppelcode_herstel", {}); } catch { /* */ }
  };

  // Deel-helpers werken nu per code (elke wacht-kaart heeft z'n eigen code),
  // i.p.v. één globale inviteCode. Zelfde teksten als voorheen (Mark 14 aug):
  // code op eigen regel, plat, makkelijk over te typen vanuit WhatsApp.
  const sendWhatsApp = (code, naam) => {
    const hoi = naam ? `Hoi ${naam}!` : "Hoi!";
    const msg = encodeURIComponent(`${hoi} Open ${BRAND.name} (${BRAND.domain}), tik op 'Code gekregen?' en vul deze koppelcode in:\n\n${code}\n\nDan kan ik jouw voortgang zien 😊 (de code is 48 uur geldig)`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
    try { track("ouder_koppelcode_deel", { via: "whatsapp" }); } catch { /* */ }
  };

  // 🔔 Herinnering opnieuw sturen (Mark 30 aug): zachtere toon dan de eerste
  // keer — "je code staat nog klaar" — zodat het kind 'm alsnog invoert.
  const stuurHerinnering = (code, naam) => {
    const hoi = naam ? `Hoi ${naam}!` : "Hoi!";
    const msg = encodeURIComponent(`${hoi} Je koppelcode voor ${BRAND.name} staat nog klaar:\n\n${code}\n\nOpen de app, tik op 'Code gekregen?' en vul 'm in 😊 (nog even geldig)`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
    try { track("ouder_koppelcode_herinnering", {}); } catch { /* */ }
  };

  // Koppelcode per e-mail: opent de eigen mail-app met de code voorgevuld; de
  // ouder kiest de ontvanger. Geen server/Resend nodig.
  const sendEmailCode = (code) => {
    const subject = encodeURIComponent(`Koppelcode voor ${BRAND.name}`);
    const body = encodeURIComponent(
      `Hoi!\n\nOpen ${BRAND.name} (${BRAND.domain}), tik op 'Code gekregen?' en vul de koppelcode ${code} in. Dan kan ik jouw voortgang volgen.\n\n(De code is 48 uur geldig.)`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    try { track("ouder_koppelcode_deel", { via: "mail" }); } catch { /* */ }
  };

  // Kopieer naar klembord. Kan geweigerd worden (http/oude browser) — dan blijft
  // de code groot in beeld om over te typen.
  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch { /* clipboard geweigerd — code staat groot in beeld */ }
  };

  // Geldigheids-tekst voor de wacht-kaart. Onder het uur géén "nog 0 uur
  // geldig" (afrond-artefact, Fable-review 30 aug) maar een eerlijke tekst.
  const geldigheidsTekst = (iso) => {
    if (!iso) return null;
    const ms = new Date(iso).getTime() - Date.now();
    if (!Number.isFinite(ms) || ms <= 0) return null;
    const uren = Math.floor(ms / 3600000);
    return uren >= 1 ? `nog ${uren} uur geldig` : "nog minder dan een uur geldig";
  };

  // Een openstaande code intrekken (kind heeft 'm niet gebruikt / typefout).
  const trekCodeIn = async (id) => {
    setOpenInvites((prev) => prev.filter((iv) => iv.id !== id));
    await supabase.from("link_codes").delete().eq("id", id);
  };

  // Statistieken berekenen. Alleen rijen met een geldig (eindig) percentage
  // tellen mee: één nullable/corrupte scorebord-rij maakte de som anders NaN,
  // waardoor de ouder "gem. NaN%" te zien kreeg (bug-jacht 2026-07-31).
  const geldigeScores = childScores.filter((r) => Number.isFinite(Number(r.percentage)));
  const subjectStats = geldigeScores.reduce((acc, r) => {
    const key = r.subject;
    if (!acc[key]) acc[key] = { scores: [], label: SUBJECT_LABELS[key] || key };
    acc[key].scores.push(Number(r.percentage));
    return acc;
  }, {});

  const recentScores = childScores.slice(0, 10);
  const avgScore = geldigeScores.length ? Math.round(geldigeScores.reduce((s, r) => s + Number(r.percentage), 0) / geldigeScores.length) : null;
  const strongSubjects = Object.entries(subjectStats).filter(([, v]) => Math.max(...v.scores) >= 80).map(([, v]) => v.label);
  const weakSubjects = Object.entries(subjectStats).filter(([, v]) => Math.max(...v.scores) < 60 && v.scores.length >= 2).map(([, v]) => v.label);

  // Audit 7 okt 2026: de Gezinsstart ging vanzelf open bij 0 kinderen, maar in
  // stap 3 maakt hij zelf de koppeling aan — dan is er 1 kind en verdween de
  // wizard midden in de stap (code + WhatsApp-knop en stap 4 nooit te zien).
  // Eenmaal vanzelf geopend blijft hij nu open tot "Later" of "Naar mijn overzicht".
  // (Hier, vóór de vroege return hieronder: hooks mogen niet achter een return.)
  const leegGezin = overzichtGeladen && children.length === 0 && openInvites.length === 0;
  useEffect(() => { if (gezinsstartOpen === null && leegGezin) setGezinsstartOpen(true); }, [gezinsstartOpen, leegGezin]);

  // Bug-jacht 7/7: anonieme park-sessies tellen óók als authUser, waardoor een
  // ouder koppelingen/doelen aan een wegwerp-anon-account kon hangen die na
  // een echte Google-login onbereikbaar zijn. Ouder-inzicht = altijd met
  // echt account.
  if (!authUser || authUser.is_anonymous) {
    return (
      <div style={{ padding: embedded ? "8px 0" : 32, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ fontSize: 56 }}>👨‍👩‍👧</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--color-text-strong)" }}>Volg je kind — voor ouders en verzorgers</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 280, lineHeight: 1.6 }}>
          Log in met Google om de voortgang van je kind te bekijken, je kind te koppelen en het weekrapport in te stellen.
        </div>
        {/* Voorproefje vóór de login-muur (28 aug 2026): bezoekers zagen hier
            alleen een Google-knop en haakten af — laat eerst zien wat je krijgt. */}
        <ul style={{ listStyle: "none", padding: "12px 16px", margin: 0, maxWidth: 300, textAlign: "left", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.9, color: "rgba(255,255,255,0.8)" }}>
          <li>🔑 Koppel je kind met één korte code</li>
          <li>📊 Voortgang in één oogopslag</li>
          <li>📬 Elke vrijdag om 16:00 een weekrapport per mail</li>
          <li>💛 Zet oefeningen voor je kind klaar</li>
        </ul>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.45)", maxWidth: 290, lineHeight: 1.6 }}>
          Alleen dit thuis-overzicht vraagt een account — <strong style={{ color: "rgba(255,255,255,0.65)" }}>oefenen is gratis, zonder account</strong>.
        </div>
        <button
          onClick={onLogin}
          style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, padding: "13px 22px", borderRadius: 14, border: "none", background: "var(--color-text-strong)", color: "#333", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Inloggen met Google
        </button>
        {/* E-mail-login (30 sep 2026): voor een ouder of verzorger zonder Google-account. */}
        <div style={{ width: "100%", maxWidth: 320 }}>
          <EmailLogin compact />
        </div>
      </div>
    );
  }

  // 🔗 Kind-kaarten: elk kind = een parent_child_links-rij (gekoppeld of nog
  // niet) plus, als die er is, de nieuwste openstaande code op die naam. Een
  // code zonder rij (oude flow) wordt ook een kaart "Nog niet gekoppeld".
  const gekoppeldeNamen = new Set(children.map((c) => (c.child_name || "").trim().toLowerCase()));
  const wachtPerNaam = new Map();
  for (const iv of openInvites) wachtPerNaam.set((iv.child_name || "").trim().toLowerCase(), iv); // oplopend → nieuwste wint
  const kindKaarten = [
    ...children.map((c) => ({ key: `k-${c.id}`, naam: c.child_name, kind: c, invite: c.verified ? null : wachtPerNaam.get((c.child_name || "").trim().toLowerCase()) || null })),
    ...[...wachtPerNaam.entries()].filter(([naam]) => !gekoppeldeNamen.has(naam)).map(([, iv]) => ({ key: `w-${iv.id}`, naam: iv.child_name, kind: null, invite: iv })),
  ];
  // Gezinsstart: vanzelf open zolang er nog niets in het gezin staat (na de
  // eerste load), of expliciet via "Nog een kind".
  const toonGezinsstart = gezinsstartOpen === true || (gezinsstartOpen === null && overzichtGeladen && kindKaarten.length === 0);

  // Partner-invoer (Mark 14 aug, F15 double opt-in): één adres per gezin.
  // Staat in het blok "Ouders" én in stap 4 van de Gezinsstart.
  const partnerInvoer = (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="email"
          value={partnerEmail}
          onChange={(e) => { setPartnerEmail(e.target.value); setPartnerSaved(false); setPartnerError(""); }}
          placeholder="partner@voorbeeld.nl"
          style={{
            flex: "1 1 180px",
            padding: "10px 12px",
            borderRadius: 10,
            border: `1px solid ${partnerError ? "rgba(255,112,67,0.7)" : "rgba(255,255,255,0.18)"}`,
            background: "rgba(255,255,255,0.06)",
            color: "var(--color-text-strong)",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            outline: "none",
          }}
        />
        <button
          onClick={savePartnerEmail}
          disabled={partnerSaving}
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            border: "none",
            background: partnerSaving ? "rgba(0,176,255,0.3)" : "#00b0ff",
            color: "#08121f",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            cursor: partnerSaving ? "default" : "pointer",
          }}
        >
          {partnerSaving ? "Opslaan…" : "Opslaan"}
        </button>
      </div>
      {partnerError && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#ff8a65", marginTop: 8 }}>{partnerError}</div>
      )}
      {partnerSaved && !partnerError && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#69f0ae", marginTop: 8 }}>
          {partnerEmail ? `✓ Uitnodiging gestuurd naar ${partnerEmail} — zodra die op "Ja, ik lees mee" tikt, komt het rapport ook daar aan.` : "✓ Uitgezet — het rapport gaat weer alleen naar jou."}
        </div>
      )}
    </div>
  );

  return (
    <div style={{ padding: embedded ? 0 : "16px 20px 48px", maxWidth: embedded ? "none" : 480, margin: embedded ? 0 : "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Familie-label (Mark 2026-06-06; laag-naam rechtgezet 9 aug — de badge
          zei Familie maar de tekst zei Pro): ouder-inzicht hoort straks bij het
          Familie-pakket, nu nog gratis. Badge laat de waarde zien + meet gebruik. */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", padding: "10px 14px", borderRadius: 12, background: "rgba(255,183,77,0.06)", border: "1px solid rgba(255,183,77,0.22)" }}>
        <ProBadge feature="parent-dashboard" size="md" onInfo={onUpgrade} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>
          Dit ouder-inzicht hoort straks bij het Familie-pakket — <strong style={{ color: "#69f0ae" }}>nu nog helemaal gratis</strong>.
          {" "}<FamilieAfsluiten plek="ouderlabel" variant="link" />
        </span>
      </div>

      {/* 🏠 Gezinsstart-wizard (30 sep 2026): vanzelf bij een gezin zonder
          kinderen, en via "Nog een kind". Het kind ziet hier niets van. */}
      {toonGezinsstart && (
        <Gezinsstart
          authUser={authUser}
          bestaandAantal={children.length}
          bestaandeNamen={[...gekoppeldeNamen]}
          maakCode={maakCodeVoor}
          sendWhatsApp={sendWhatsApp}
          onHierOefenen={onHierOefenen}
          onLater={() => setGezinsstartOpen(false)}
          onKlaar={() => laadKoppelStatus()}
          partnerSlot={partnerInvoer}
          weekrapportMoment={WEEKRAPPORT_MOMENT}
        />
      )}

      {/* ── Ouders ─────────────────────────────────────────────────────── */}
      <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "16px" }}>
        <BlokKop>Ouders of verzorgers</BlokKop>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", borderRadius: 12, background: "rgba(105,240,174,0.06)", border: "1px solid rgba(105,240,174,0.25)" }}>
          <Bolletje kleur="#69f0ae" size={16} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "var(--color-text-strong)", overflowWrap: "anywhere" }}>{authUser.email || "je account"}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Hier komen het weekrapport en de rekening.</div>
          </div>
        </div>
        <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 12, background: "rgba(0,176,255,0.05)", border: "1px solid rgba(0,176,255,0.22)" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 2 }}>Tweede ouder of verzorger</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 8, lineHeight: 1.5 }}>
            {partnerStatus === "bevestigd" && !partnerSaved
              ? <span style={{ color: "#69f0ae" }}>{partnerEmail} leest mee met het weekrapport.</span>
              : partnerStatus === "wacht" && !partnerSaved
                ? <span style={{ color: "#ffd54f" }}>Uitnodiging verstuurd naar {partnerEmail} — wacht op "Ja, ik lees mee". Opnieuw opslaan = opnieuw versturen.</span>
                : children.length === 0
                  ? "Koppel eerst een kind; daarna kun je iemand laten meelezen."
                  : "Die krijgt één uitnodiging en zegt zelf \"ja\". Laat leeg om het weer uit te zetten."}
          </div>
          {children.length > 0 && partnerInvoer}
        </div>
      </div>

      {/* ── Kinderen ───────────────────────────────────────────────────── */}
      <div ref={koppelFlowRef} style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "16px" }}>
        <BlokKop>Kinderen{children.length ? ` (${children.length}/${MAX_KINDEREN})` : ""}</BlokKop>

        {/* 📊 Fullscreen kind-overzicht (fixed overlay — alleen voor gekoppelde kinderen bereikbaar). */}
        {overzichtKind && (
          <KindOverzicht child={overzichtKind} onBack={() => setOverzichtKind(null)} onKlaarzetten={onKlaarzetten} />
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
          {kindKaarten.map((kaart) => {
            const c = kaart.kind; // parent_child_links-rij of null (alleen een openstaande code)
            const naam = kaart.naam;
            const iv = kaart.invite; // openstaande code of null
            const gekoppeld = !!c?.verified;
            const isSel = !!c && selectedChild === c.child_name;
            const laatst = c ? laatstActief[c.id] : null;
            const mailAan = c ? c.weekmail !== false : true;
            const pill = (extra) => ({ borderRadius: 999, padding: "4px 10px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, ...extra });
            const statusKleur = gekoppeld ? "#69f0ae" : "#00b0ff";
            const statusTekst = gekoppeld
              ? (laatst ? `Gekoppeld · laatst geoefend ${fmtDatum(laatst, { day: "numeric", month: "short" })}` : "Gekoppeld · nog niet geoefend")
              : "Nog niet gekoppeld";
            const deelKnop = (extra) => ({ flex: "1 1 90px", padding: "9px 8px", borderRadius: 9, fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5, ...extra });
            return (
              <div key={kaart.key} onClick={() => { if (gekoppeld) setSelectedChild(c.child_name); }} style={{
                borderRadius: 14, padding: "13px 15px", cursor: gekoppeld ? "pointer" : "default",
                border: isSel ? `1px solid ${statusKleur}99` : `1px solid ${statusKleur}47`,
                background: isSel ? "rgba(105,240,174,0.12)" : gekoppeld ? "rgba(105,240,174,0.05)" : "rgba(0,176,255,0.06)",
              }}>
                {/* Naam + groep + verwijderen */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                  <span
                    onClick={(e) => { if (!gekoppeld) return; e.stopPropagation(); setOverzichtKind(c); }}
                    title={gekoppeld ? `Open het totaaloverzicht van ${naam}` : undefined}
                    style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: statusKleur, display: "flex", alignItems: "center", gap: 8, cursor: gekoppeld ? "pointer" : "default", textDecoration: gekoppeld ? "underline" : "none", textDecorationColor: "rgba(105,240,174,0.35)", textUnderlineOffset: 3 }}
                  >
                    {naam}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {c && (
                      <select
                        value={c.groep || ""}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => bewaarGroep(c, e.target.value)}
                        aria-label={`Groep van ${naam}`}
                        style={{ padding: "4px 8px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700 }}
                      >
                        <option value="">Groep?</option>
                        {GROEP_OPTIES.map((g) => <option key={g} value={g}>{g === "brugklas" ? "Brugklas" : `Groep ${g}`}</option>)}
                      </select>
                    )}
                    {c ? (
                      <button onClick={(e) => { e.stopPropagation(); removeChild(c.id); }} aria-label={`Verwijder ${naam}`} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 18, padding: 2 }}>×</button>
                    ) : (
                      <button onClick={() => trekCodeIn(iv.id)} title="Code intrekken" aria-label="Code intrekken" style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 18, padding: 2 }}>×</button>
                    )}
                  </div>
                </div>

                {/* Status-pill */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, padding: "4px 10px", borderRadius: 999, background: `${statusKleur}1f`, border: `1px solid ${statusKleur}59`, fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: statusKleur }}>
                  {gekoppeld && <Bolletje kleur={statusKleur} size={13} />}
                  {statusTekst}
                </div>

                {/* Nadruk (voorkeur) */}
                {c && (
                  <div style={{ marginTop: 8, fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    {c.voorkeur ? voorkeurSamenvatting(c.voorkeur) : "Nog geen nadruk gekozen — de app kiest zelf."}{" "}
                    <button onClick={(e) => { e.stopPropagation(); setVoorkeurEditId(voorkeurEditId === c.id ? null : c.id); }} style={{ background: "none", border: "none", padding: 0, color: "#69f0ae", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>
                      {voorkeurEditId === c.id ? "sluit" : "aanpassen"}
                    </button>
                  </div>
                )}
                {c && voorkeurEditId === c.id && (
                  <VoorkeurEditor groep={c.groep} voorkeur={c.voorkeur} bezig={voorkeurSaving} onOpslaan={(v) => bewaarVoorkeurVan(c, v)} onAnnuleer={() => setVoorkeurEditId(null)} />
                )}

                {/* Nog niet gekoppeld: code + delen */}
                {!gekoppeld && (
                  <div onClick={(e) => e.stopPropagation()} style={{ marginTop: 10 }}>
                    {iv ? (
                      <>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                          Stuur deze code naar {naam}. In de app: <strong>Code gekregen?</strong>, code invoeren, klaar.{geldigheidsTekst(iv.expires_at) ? ` De code is ${geldigheidsTekst(iv.expires_at)}.` : ""}
                        </div>
                        <div style={{ textAlign: "center", padding: "6px 0 8px" }}>
                          <div style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 700, color: "#00b0ff", letterSpacing: 5 }}>{iv.code}</div>
                        </div>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          <button onClick={() => sendWhatsApp(iv.code, naam)} style={deelKnop({ border: "none", background: "#25D366", color: "#08121f" })}>WhatsApp</button>
                          <button onClick={() => sendEmailCode(iv.code)} style={deelKnop({ border: "1px solid rgba(0,176,255,0.45)", background: "rgba(0,176,255,0.10)", color: "#00b0ff" })}>E-mail</button>
                          <button onClick={() => copyCode(iv.code)} style={deelKnop({ border: "1px solid rgba(255,255,255,0.2)", background: copiedCode === iv.code ? "rgba(105,240,174,0.14)" : "rgba(255,255,255,0.05)", color: copiedCode === iv.code ? "#69f0ae" : "rgba(255,255,255,0.75)" })}>{copiedCode === iv.code ? "Gekopieerd" : "Kopieer"}</button>
                        </div>
                        <div style={{ marginTop: 8, fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                          Deze kaart springt vanzelf op "Gekoppeld" zodra {naam} de code invoert.{" "}
                          <button onClick={() => stuurHerinnering(iv.code, naam)} style={{ background: "none", border: "none", padding: 0, color: "#00b0ff", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Nog eens sturen</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 8 }}>
                          Oefent {naam} op een ander apparaat? Maak een code en stuur die door. Op dit apparaat? Dan is geen code nodig.
                        </div>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          <button onClick={() => maakCodeVoor(naam)} disabled={loading} style={deelKnop({ border: "none", background: "#00b0ff", color: "#08121f" })}>{loading ? "Even…" : "Maak een koppelcode"}</button>
                          {onHierOefenen && c && (
                            <button onClick={async () => { const { data } = await supabase.rpc("gezin_koppel_zelfde_apparaat", { p_child_name: naam, p_groep: c.groep || null, p_voorkeur: c.voorkeur || null, p_verified: true }); if (data) { bewaarVoorkeur(naam, { groep: c.groep || null, voorkeur: c.voorkeur || null }); onHierOefenen(data, naam); } }} style={deelKnop({ border: "1px solid rgba(255,213,79,0.5)", background: "rgba(255,213,79,0.12)", color: "#ffd54f" })}>Oefent hier</button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Gekoppeld: bestaande acties */}
                {gekoppeld && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
                    <button onClick={(e) => { e.stopPropagation(); setOverzichtKind(c); }} title={`Totaaloverzicht van ${naam}: resultaten per vak, elke toets tot op de vraag, en wat de volgende stap is`} style={pill({ border: "1px solid rgba(105,240,174,0.5)", background: "rgba(105,240,174,0.12)", color: "#69f0ae" })}>
                      overzicht
                    </button>
                    {onKlaarzetten && (
                      <button onClick={(e) => { e.stopPropagation(); onKlaarzetten(c.id, c.child_name); }} title={`Blader door de app en zet lessen klaar voor ${naam}`} style={pill({ border: "1px solid rgba(255,105,135,0.5)", background: "rgba(255,105,135,0.14)", color: "#ff9fb2" })}>
                        zet lessen klaar
                      </button>
                    )}
                    {/* 🧒 Kind oefent op dít toestel (Mark 2 sep): geen code nodig —
                        de ouder is hier al ingelogd en eigenaar van de koppeling.
                        App.jsx bewaart het link_id onder de kindnaam + wisselt profiel. */}
                    {onHierOefenen && (
                      <button onClick={(e) => { e.stopPropagation(); bewaarVoorkeur(naam, { groep: c.groep || null, voorkeur: c.voorkeur || null }); onHierOefenen(c.id, c.child_name); }} title={`Wissel dit toestel naar ${naam} — alles wat ${naam} hier oefent telt mee in jouw overzicht, zonder code`} style={pill({ border: "1px solid rgba(255,213,79,0.5)", background: "rgba(255,213,79,0.12)", color: "#ffd54f" })}>
                        laat {naam} hier oefenen
                      </button>
                    )}
                    <button onClick={(e) => { e.stopPropagation(); toggleWeekmail(c); }} aria-pressed={mailAan} title={mailAan ? "Weekrapport voor dit kind staat aan — klik om uit te zetten" : "Weekrapport staat uit — klik om aan te zetten"} style={pill(mailAan ? { border: "1px solid rgba(105,240,174,0.5)", background: "rgba(0,200,83,0.14)", color: "#69f0ae" } : { border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)" })}>
                      weekrapport {mailAan ? "aan" : "uit"}
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); herstelCode?.childName === c.child_name ? setHerstelCode(null) : maakHerstelCode(c.child_name); }} title={`Nieuw toestel of ziet ${naam} niks van jou? Maak een verse koppelcode`} style={pill({ border: "1px solid rgba(0,176,255,0.5)", background: "rgba(0,176,255,0.12)", color: "#00b0ff" })}>
                      koppeling werkt niet?
                    </button>
                  </div>
                )}
                {gekoppeld && herstelCode?.childName === c.child_name && (
                  <div onClick={(e) => e.stopPropagation()} style={{ marginTop: 10, padding: "11px 13px", borderRadius: 11, border: "1px solid rgba(0,176,255,0.35)", background: "rgba(0,176,255,0.07)" }}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: 8 }}>
                      Nieuw toestel, of ziet {naam} niks van jou? Laat {naam} deze verse code invoeren op het toestel dat hij/zij <strong>nu</strong> gebruikt (bij <strong>Code gekregen?</strong>). De koppeling schuift dan vanzelf mee naar dat account — je hoeft niets te verwijderen.
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 8 }}>
                      Oefent {naam} op <strong>meer</strong> toestellen (eigen telefoon én de tablet)? Elk toestel heeft één keer zo'n code nodig; daarna telt alles bij elkaar op. Op <strong>dit</strong> toestel hoeft dat niet: gebruik "laat {naam} hier oefenen".
                    </div>
                    <div style={{ textAlign: "center", padding: "2px 0 8px" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "#00b0ff", letterSpacing: 5 }}>{herstelCode.code}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>48 uur geldig</div>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <button onClick={() => sendWhatsApp(herstelCode.code, naam)} style={deelKnop({ border: "none", background: "#25D366", color: "#08121f" })}>WhatsApp</button>
                      <button onClick={() => sendEmailCode(herstelCode.code)} style={deelKnop({ border: "1px solid rgba(0,176,255,0.45)", background: "rgba(0,176,255,0.10)", color: "#00b0ff" })}>E-mail</button>
                      <button onClick={() => copyCode(herstelCode.code)} style={deelKnop({ border: "1px solid rgba(255,255,255,0.2)", background: copiedCode === herstelCode.code ? "rgba(105,240,174,0.14)" : "rgba(255,255,255,0.05)", color: copiedCode === herstelCode.code ? "#69f0ae" : "rgba(255,255,255,0.75)" })}>{copiedCode === herstelCode.code ? "Gekopieerd" : "Kopieer"}</button>
                    </div>
                    <div style={{ marginTop: 8, fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>
                      Tip: laat je kind inloggen met Google — dan werkt de koppeling op elk toestel vanzelf en heb je nooit meer een nieuwe code nodig.
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Nog een kind → Gezinsstart-wizard (naam, groep, nadruk, apparaat). */}
          {kindKaarten.length < MAX_KINDEREN && !toonGezinsstart && (
            <button onClick={() => { setGezinsstartOpen(true); try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch { /* */ } }} style={{ borderRadius: 14, padding: "14px 15px", cursor: "pointer", textAlign: "left", border: "1px dashed rgba(105,240,174,0.4)", background: "rgba(0,200,83,0.05)", color: "#69f0ae", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>
              {kindKaarten.length ? "Nog een kind" : "Eerste kind toevoegen"}
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 400, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>Voornaam, groep en waar de nadruk op ligt — duurt een minuut.</div>
            </button>
          )}

          {kindKaarten.length >= MAX_KINDEREN && (
            <div style={{ borderRadius: 12, border: "1px solid rgba(105,240,174,0.3)", background: "rgba(105,240,174,0.06)", padding: "12px 14px", fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
              Je hebt het maximum van {MAX_KINDEREN} kinderen — genoeg voor de meeste gezinnen. Meer nodig? Mail ons: hallo@leerkwartier.app.
            </div>
          )}
        </div>

        {/* 🐕 Charley-tips (laag 1, 1 sep): advies op twijfel-momenten die de
            data liet zien. Max één per sessie (engine), altijd uitzetbaar.
            Tip A: kind gekoppeld maar 0 resultaten → account-uitleg (de
            Deianera-verwarring van 31 aug). Tip B: kind oefent wél maar er is
            nog nooit iets klaargezet → klaarzetten + printen ontdekken. */}
        {/* Audit 7 okt 2026: de oude tekst ("laat je kind inloggen met hetzelfde
            account") klopte niet — koppelen werkt zonder inloggen, en meestal
            heeft het kind gewoon nog niet geoefend. */}
        {selectedChildVerified && scoresGeladen && childScores.length === 0 && (
          <CharleyTip
            id="ouder-kind-geen-resultaten"
            tekst={`${selectedChild} is gekoppeld, maar er staan nog geen resultaten. Heeft ${selectedChild} nog niet geoefend? Dan verschijnt alles hier zodra ${selectedChild} begint. Oefent ${selectedChild} wél al? Dan gebeurt dat op een apparaat dat nog niet gekoppeld is: met een verse koppelcode op dát apparaat schuift de koppeling mee.`}
            actieLabel="🔗 maak een verse koppelcode"
            onActie={() => maakHerstelCode(selectedChild)}
          />
        )}
        {selectedChildVerified && scoresGeladen && childScores.length > 0 && klaarLijst.length === 0 && onKlaarzetten && (
          <CharleyTip
            id="ouder-nog-niets-klaargezet"
            tekst={`Wist je dat je lessen voor ${selectedChild} kunt klaarzetten? Jij kiest een les, ${selectedChild} ziet 'm thuis onder "💛 voor jou klaargezet". En veel oefeningen kun je ook printen voor aan de keukentafel.`}
            actieLabel={`💛 zet een les klaar voor ${selectedChild}`}
            onActie={() => onKlaarzetten(selectedChildVerified.id, selectedChild)}
          />
        )}

        {/* 💛 Klaargezet voor het geselecteerde kind (Mark 15 aug): dezelfde
            "map" als op de pagina van het kind, nu ook hier — zo zien jullie
            allebei de lessen en kan de ouder ze openen om mee te kijken of te
            helpen bij een vraag. */}
        {selectedChildVerified && klaarLijst.length > 0 && (
          <div style={{ borderRadius: 12, border: "1px solid rgba(255,105,135,0.35)", background: "rgba(255,105,135,0.07)", padding: "12px 14px", margin: "4px 0 10px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, color: "#ff9fb2", marginBottom: 8 }}>
              💛 Klaargezet voor {selectedChild}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {klaarLijst.map((it) => (
                <div key={it.id} style={{ padding: "7px 9px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }} aria-hidden="true">{it.emoji || "📘"}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-strong)" }}>{it.titel || "Een les"}</div>
                    <LesVoortgang item={it} voortgang={padVoortgang[it.path_id]} watNu="je kind" />
                  </div>
                  {/* 🔍 Mark 4 sep: "inzien wat er exact gemaakt is en wat niet" */}
                  <button
                    onClick={() => setOpenDetail(openDetail === it.path_id ? null : it.path_id)}
                    aria-expanded={openDetail === it.path_id}
                    title="Bekijk per vraag hoe het ging"
                    style={{ flexShrink: 0, padding: "6px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5, cursor: "pointer" }}
                  >
                    {openDetail === it.path_id ? "Verberg" : "Wat precies?"}
                  </button>
                  {onOpenLes && (
                    <button
                      onClick={() => onOpenLes(it.path_id)}
                      title="Open de les om mee te kijken of samen te maken"
                      style={{ flexShrink: 0, padding: "6px 12px", borderRadius: 8, border: "1px solid rgba(255,105,135,0.5)", background: "rgba(255,105,135,0.14)", color: "#ff9fb2", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}
                    >
                      Bekijk / help
                    </button>
                  )}
                  <button
                    onClick={() => verwijderKlaar(it.path_id)}
                    aria-label={`Haal ${it.titel || "les"} weg`}
                    title="Haal deze les weer weg"
                    style={{ flexShrink: 0, background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 16, padding: 2 }}
                  >
                    ×
                  </button>
                </div>
                {openDetail === it.path_id && (
                  <LesDetail pathId={it.path_id} voortgang={padVoortgang[it.path_id]} naam={selectedChild} />
                )}
                </div>
              ))}
            </div>
            {onKlaarzetten && (
              <button
                onClick={() => onKlaarzetten(selectedChildVerified.id, selectedChild)}
                style={{ marginTop: 8, background: "none", border: "none", color: "#ff9fb2", cursor: "pointer", fontSize: 12, fontWeight: 700, padding: 0, textDecoration: "underline" }}
              >
                + Meer lessen klaarzetten
              </button>
            )}
          </div>
        )}

        {/* 📚 Zelf gekozen leerpaden (Mark 4 sep 2026). Het overzicht las tot nu
            toe alleen de quiz-scores uit `leaderboard`; een kind dat leerpad-
            stappen doet schrijft naar `learn_progress` en was dus onzichtbaar.
            Hier staat wat je kind uit zichzelf heeft opgepakt — alles wat jij
            hebt klaargezet staat hierboven al. */}
        {selectedChildVerified && zelfGedaan.length > 0 && (
          <div style={{ borderRadius: 12, border: "1px solid rgba(105,240,174,0.28)", background: "rgba(105,240,174,0.06)", padding: "12px 14px", margin: "4px 0 10px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, color: "#69f0ae", marginBottom: 2 }}>
              📚 {selectedChild} pakte dit zelf op
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>
              Lessen die {selectedChild} zonder jouw hulp heeft gekozen.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {zelfGedaan.map((p) => (
                <div key={p.pathId} style={{ padding: "7px 9px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }} aria-hidden="true">{p.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-strong)" }}>{p.titel}</div>
                    <LesVoortgang item={{ path_id: p.pathId, gedaan: false }} voortgang={p.voortgang} watNu="je kind" />
                  </div>
                  <button
                    onClick={() => setOpenDetail(openDetail === p.pathId ? null : p.pathId)}
                    aria-expanded={openDetail === p.pathId}
                    title="Bekijk per vraag hoe het ging"
                    style={{ flexShrink: 0, padding: "6px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5, cursor: "pointer" }}
                  >
                    {openDetail === p.pathId ? "Verberg" : "Wat precies?"}
                  </button>
                  {onOpenLes && (
                    <button
                      onClick={() => onOpenLes(p.pathId)}
                      title="Open de les om mee te kijken"
                      style={{ flexShrink: 0, padding: "6px 12px", borderRadius: 8, border: "1px solid rgba(105,240,174,0.4)", background: "rgba(105,240,174,0.12)", color: "#69f0ae", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}
                    >
                      Bekijk
                    </button>
                  )}
                </div>
                {openDetail === p.pathId && (
                  <LesDetail pathId={p.pathId} voortgang={p.voortgang} naam={selectedChild} />
                )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gezins-gevoel (feature 7): warm "wij oefenen samen" bij ≥2 kinderen,
            bewust ZONDER scores naast elkaar (geen broer/zus-vergelijking). */}
        {children.length >= 2 && (
          <div style={{ borderRadius: 12, border: "1px solid rgba(0,176,255,0.25)", background: "rgba(0,176,255,0.06)", padding: "11px 13px", marginTop: 4, marginBottom: 8, fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
            👨‍👩‍👧 <strong style={{ color: "#00b0ff" }}>Jullie oefenen samen</strong> — {children.map((c) => c.child_name).join(", ")}. Elk in z'n eigen tempo; geen wedstrijdje tussen broers of zussen.
          </div>
        )}

        {/* 🔒 Wat slaan we op + hoe beveiligd (Mark 27 aug). Feiten
            geverifieerd: Supabase-project eu-central-1 (Frankfurt), RLS op
            parent_child_links (auth.uid() = parent_user_id), kind bevestigt
            koppeling, codes crypto-random + 48u. Volledige tekst: /privacy.html. */}
        <div style={{ marginTop: 12 }}>
          <button
            onClick={() => { setOpslagInfoOpen(!opslagInfoOpen); if (!opslagInfoOpen) { try { track("ouder_opslag_uitleg_open", {}); } catch { /* */ } } }}
            aria-expanded={opslagInfoOpen}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6, padding: 0,
              border: "none", background: "none", cursor: "pointer",
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            🔒 Wat slaan we op — en hoe is dat beveiligd? {opslagInfoOpen ? "▴" : "▾"}
          </button>
          {opslagInfoOpen && (
            <div style={{
              marginTop: 8, padding: "12px 14px", borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)",
              fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.6,
            }}>
              <div style={{ fontWeight: 700, color: "var(--color-text-strong, #fff)", marginBottom: 4 }}>Wat we opslaan (in onze databank, Supabase):</div>
              <ul style={{ margin: "0 0 10px 18px", padding: 0 }}>
                <li>de <strong>voornaam</strong> van je kind (die jij hier invult), de <strong>groep</strong> en de <strong>oefenresultaten</strong></li>
                <li>jouw <strong>e-mailadres</strong> — en het adres van je partner als je dat invult (allebei van volwassenen)</li>
                <li><strong>níét:</strong> achternaam, e-mailadres van je kind, adres of foto's</li>
              </ul>
              <div style={{ fontWeight: 700, color: "var(--color-text-strong, #fff)", marginBottom: 4 }}>Hoe dat beveiligd is:</div>
              <ul style={{ margin: "0 0 10px 18px", padding: 0 }}>
                <li>de databank staat op servers <strong>in de EU</strong> (Frankfurt) en de opslag is <strong>versleuteld</strong></li>
                <li>alles gaat over een <strong>versleutelde verbinding</strong> (het slotje in je browser)</li>
                <li><strong>toegangsregels per account:</strong> alleen jij kunt de gegevens van jouw gezin zien — en je kind moet de koppeling eerst zelf in de app bevestigen</li>
                <li>koppelcodes zijn willekeurig en maar <strong>48 uur geldig</strong>; we tonen geen reclame en verkopen niets door</li>
              </ul>
              <a href="/privacy.html" style={{ color: "#69f0ae", fontWeight: 700, fontSize: 12 }}>Lees het volledige privacybeleid →</a>
            </div>
          )}
        </div>
      </div>

      {/* ── Weekrapport ────────────────────────────────────────────────── */}
      <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "16px" }}>
        <BlokKop>Weekrapport</BlokKop>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
          {WEEKRAPPORT_MOMENT} naar <strong style={{ overflowWrap: "anywhere" }}>{authUser.email || "je e-mailadres"}</strong>
          {partnerStatus === "bevestigd" && partnerEmail ? <> en naar <strong style={{ overflowWrap: "anywhere" }}>{partnerEmail}</strong></> : null}
          {children.length ? <>: per kind kort en eerlijk hoe het ging.</> : <>, zodra je een kind hebt gekoppeld.</>}
        </div>
        {children.length > 0 && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 6, lineHeight: 1.5 }}>
            {children.filter((c) => c.weekmail === false).length
              ? `Uit voor: ${children.filter((c) => c.weekmail === false).map((c) => c.child_name).join(", ")} — zet het per kind aan of uit op de kaart hierboven.`
              : "Staat aan voor al je kinderen — per kind aan of uit te zetten op de kaart hierboven."}
            {partnerStatus === "wacht" ? " De tweede ouder of verzorger ontvangt het pas na bevestiging." : ""}
          </div>
        )}
      </div>

      {/* Welkom-paneel — voordelen voor ouder + kind. Alleen op het volledige
          /ouder-dashboard; op /mijn (embedded) tonen we meteen de functies. */}
      {!embedded && (
      <div style={{
        padding: welcomeCollapsed ? "10px 14px" : "16px 18px",
        borderRadius: 14,
        background: welcomeCollapsed ? "rgba(255,255,255,0.04)" : "rgba(0,200,83,0.07)",
        border: `1px solid ${welcomeCollapsed ? "rgba(255,255,255,0.08)" : "rgba(0,200,83,0.25)"}`,
      }}>
        <button
          type="button"
          onClick={toggleWelcome}
          aria-expanded={!welcomeCollapsed}
          style={{
            background: "none",
            border: "none",
            color: welcomeCollapsed ? "rgba(255,255,255,0.55)" : "#69f0ae",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
            justifyContent: "space-between",
            textAlign: "left",
          }}
        >
          <span>👨‍👩‍👧 {welcomeCollapsed ? "Wat krijg ik en mijn kind?" : "Welkom — wat krijg je hier?"}</span>
          <span style={{ fontSize: 12, opacity: 0.7 }}>{welcomeCollapsed ? "▼ Open" : "▲ Klap in"}</span>
        </button>
        {!welcomeCollapsed && (
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#69f0ae", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>VOOR JOU ALS OUDER OF VERZORGER</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                <li>🔑 Koppel je kind met één korte code</li>
                <li>📊 Voortgang in één oogopslag</li>
                <li>🆓 De basis blijft gratis, gegarandeerd t/m 2031 · extra’s later in Familie</li>
                <li>🔒 Geen reclame, AVG-veilig</li>
                <li>📵 Werkt ook offline</li>
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#ffd54f", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>VOOR JE KIND</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                <li>📚 300+ onderwerpen op niveau</li>
                <li>🎯 Doorstroomtoets-voorbereiding (groep 6-8)</li>
                <li>💡 Uitleg op 3 niveaus bij elke fout</li>
                <li>🎓 Echte VMBO/HAVO/VWO-examenvragen</li>
                <li>⏱️ Max 15 min per sessie — daarna pauze of kort spel</li>
              </ul>
            </div>
            <div style={{ gridColumn: "1 / -1", padding: "10px 12px", background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.25)", borderRadius: 8, fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
              <strong style={{ color: "#ffd54f" }}>✨ Wat Leerkwartier anders doet:</strong> bij een fout krijgt je kind geen "fout!" + door, maar uitleg op 3 niveaus om zelf op door te klikken — als een bijlesdocent in de broekzak. En in 2026 is alles gratis (basis blijft daarna ook gratis). Plus complete leerpaden waar elk onderwerp van A tot Z wordt uitgelegd.
            </div>
            {onRondleiding && (
              <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={onRondleiding}
                  style={{
                    padding: "8px 14px",
                    background: "rgba(0,200,83,0.15)",
                    border: "1px solid rgba(0,200,83,0.4)",
                    color: "#69f0ae",
                    borderRadius: 8,
                    fontFamily: "var(--font-display)",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Bekijk de rondleiding →
                </button>
                <button
                  type="button"
                  onClick={toggleWelcome}
                  style={{
                    padding: "8px 14px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.55)",
                    borderRadius: 8,
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Ik snap het, klap in
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      )}

      {/* Familie-gate (9 aug: was "Ouder Pro" in blauw — verkeerde laag én
          verkeerde kleur; ouder-inzicht = Familie = goud, zie proPlan LAGEN). */}
      {!isPro && (
        <div style={{ borderRadius: 16, border: "2px solid rgba(255,183,77,0.45)", background: "rgba(255,183,77,0.08)", padding: "16px 18px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#ffce80", marginBottom: 4, display: "flex", alignItems: "center", gap: 7 }}>
            <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffd54f", display: "inline-block" }} />
            Familie — nu gratis · vanaf 2027 een betaalde extra
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12, lineHeight: 1.5 }}>
            Volg de voortgang van je kind, zie scores per vak en bereid de Doorstroomtoets voor.
            Eén prijs per gezín, niet per kind: € 39 voor 12 maanden, en het stopt vanzelf.
          </div>
          <button onClick={onUpgrade} style={{ padding: "10px 18px", borderRadius: 10, border: "none", background: "#ffd54f", color: "#0b1224", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Meer info & aanmelden →
          </button>
          <div style={{ marginTop: 10 }}>
            <FamilieAfsluiten plek="ouderpagina" variant="knop" />
          </div>
        </div>
      )}

      {/* Dashboard inhoud — alleen als kind geselecteerd */}
      {selectedChild && !selectedChildVerified && (
        <div style={{ borderRadius: 14, border: "1px solid #ffb74d", background: "rgba(255,183,77,0.10)", padding: 20, textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🔐</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "#ffb74d", marginBottom: 6, fontWeight: 700 }}>
            Nog niet bevestigd door {selectedChild}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, maxWidth: 320, margin: "0 auto" }}>
            Voor de privacy van je kind zie je pas scores zodra je kind de
            koppeling bevestigt. Stuur de koppelcode (hierboven) en laat 'm
            die in de app invoeren bij <strong>Code gekregen?</strong> (startpagina) of <strong>Koppelcode van thuis of school?</strong> (eigen pagina).
          </div>
        </div>
      )}
      {/* 🤝 De kaart "Geef Familie gratis weg" (deel-actie 2027) is 29 sep 2026 verwijderd (Mark:
          "kan er wel uit"; teller toonde "1000000 van de 50"). Oude ?vriend=CODE-links blijven werken. */}

      {selectedChild && selectedChildVerified && (
        <>
          {/* Kwartierplan (sessie 1, 2026-07-07): doel + startfoto. Bewust
              BOVEN de scores — juist bij een vers gekoppeld kind zonder
              scores is dit de logische eerste actie voor de ouder. */}
          <KwartierplanSectie authUser={authUser} childName={selectedChild} linkId={selectedChildVerified?.id || null} />

          {/* 🏆 Diploma-kast van dit kind (12 aug): zelfde kast als op /mijn,
              gevoed uit de al geladen childScores — ouder ziet en print de
              mini-diploma's (beste score per onderwerp, met datum + %). */}
          {!scoresLoading && childScores.length > 0 && (
            <div style={{ borderRadius: 16, border: "1px solid rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.05)", padding: "14px 16px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#ffd54f", marginBottom: 10 }}>
                🏆 Diploma-kast van {selectedChild}
              </div>
              <DiplomaKast scores={childScores} naamVoorDiploma={selectedChild} bron="ouder" />
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginTop: 8, lineHeight: 1.5 }}>
                Tip: print er een en hang 'm op de koelkast — trots werkt beter dan druk.
              </div>
            </div>
          )}

          {scoresLoading ? (
            <div style={{ textAlign: "center", padding: 24, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-display)" }}>Laden...</div>
          ) : childScores.length === 0 ? (
            <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🌱</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>{selectedChild} kan aan de slag</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: 330, margin: "0 auto" }}>
                Zodra {selectedChild} — ingelogd als dit account — een oefening of toets <strong style={{ color: "rgba(255,255,255,0.7)" }}>afmaakt</strong>, verschijnen de resultaten hier. Losse vragen tellen nog niet mee; de eerste afgeronde quiz zet {selectedChild} op de kaart. 🎯
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.32)", marginTop: 10, lineHeight: 1.5 }}>
                💡 Tip: laat je kind steeds op hetzelfde account inloggen, dan blijft alle voortgang bij elkaar.
              </div>
            </div>
          ) : (
            <>
              {/* Overzicht stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {[
                  { label: "Gemiddeld", value: avgScore !== null ? `${avgScore}%` : "—", color: avgScore >= 70 ? "var(--color-brand-primary-100)" : "#ffb74d" },
                  { label: "Toetsen", value: childScores.length, color: "#00b0ff" },
                  { label: "Vakken", value: Object.keys(subjectStats).length, color: "#ff6b35" },
                ].map(({ label, value, color }) => (
                  <div key={label} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "12px 10px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color }}>{value}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Sterk en zwak */}
              {(strongSubjects.length > 0 || weakSubjects.length > 0) && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {strongSubjects.length > 0 && (
                    <div style={{ borderRadius: 12, border: "1px solid rgba(105,240,174,0.2)", background: "rgba(105,240,174,0.06)", padding: "12px 14px" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-brand-primary-100)", fontWeight: 700, marginBottom: 6 }}>💪 Goed in</div>
                      {strongSubjects.slice(0, 3).map(s => (
                        <div key={s} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>• {s}</div>
                      ))}
                    </div>
                  )}
                  {weakSubjects.length > 0 && (
                    <div style={{ borderRadius: 12, border: "1px solid rgba(255,152,0,0.2)", background: "rgba(255,152,0,0.06)", padding: "12px 14px" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#ffb74d", fontWeight: 700, marginBottom: 6 }}>📚 Meer oefenen</div>
                      {weakSubjects.slice(0, 3).map(s => (
                        <div key={s} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>• {s}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Scores per vak */}
              <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
                  📚 Per vak
                </div>
                {Object.entries(subjectStats).map(([subj, { scores, label }]) => {
                  const best = Math.max(...scores);
                  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
                  return (
                    <div key={subj} style={{ display: "flex", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{label}</div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>{scores.length}× geoefend · gem. {avg}%</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>beste</div>
                        <ScoreBadge pct={best} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cito sectie */}
              {citoScores.length > 0 && (
                <div style={{ borderRadius: 16, border: "1px solid rgba(255,107,53,0.25)", background: "rgba(255,107,53,0.06)", padding: "14px 16px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#ff8c42", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}><DoorstroomtoetsLogo size={18} /> Doorstroomtoets voortgang</div>
                  {citoScores.slice(0, 5).map((s, i) => (
                    <div key={s.id || i} style={{ marginBottom: 6 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", flex: 1, minWidth: 0 }}>
                          {s.level} — {fmtDatum(s.completed_at, { day: "numeric", month: "short" })}
                          {s.total ? <span style={{ color: "rgba(255,255,255,0.35)" }}> · {s.score}/{s.total}</span> : null}
                        </span>
                        {/* 📝 Per vraag goed/fout/overgeslagen (Mark 4 sep). Alleen als
                            er detail is — toetsen van vóór 1 sep hebben dat niet, en een
                            knop die op "niets" uitkomt is erger dan geen knop. */}
                        {Array.isArray(s.detail) && s.detail.length > 0 && (
                          <button
                            onClick={() => setOpenToets(openToets === s.id ? null : s.id)}
                            aria-expanded={openToets === s.id}
                            title="Bekijk per vraag wat er goed, fout of overgeslagen was"
                            style={{ flexShrink: 0, padding: "4px 9px", borderRadius: 7, border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, cursor: "pointer" }}
                          >
                            {openToets === s.id ? "Verberg" : "Wat precies?"}
                          </button>
                        )}
                        <ScoreBadge pct={s.percentage} />
                      </div>
                      {openToets === s.id && (
                        <ToetsDetail detail={s.detail} naam={selectedChild} onOefen={onOpenLes} vak={s.subject} niveau={s.level} />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Recente activiteit */}
              <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
                  🕐 Recente activiteit
                </div>
                {recentScores.map((s, i) => (
                  <div key={s.id || i} style={{ padding: "9px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                        {SUBJECT_LABELS[s.subject] || s.subject} · {s.level}
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>
                        {fmtDatum(s.completed_at, { weekday: "short", day: "numeric", month: "short" })}
                        {s.time_taken ? ` · ⏱ ${s.time_taken < 60 ? `${s.time_taken}s` : `${Math.floor(s.time_taken / 60)}m ${s.time_taken % 60}s`}` : ""}
                      </div>
                    </div>
                    {Array.isArray(s.detail) && s.detail.length > 0 && (
                      <button
                        onClick={() => setOpenToets(openToets === s.id ? null : s.id)}
                        aria-expanded={openToets === s.id}
                        title="Bekijk per vraag wat er goed, fout of overgeslagen was"
                        style={{ flexShrink: 0, padding: "4px 9px", borderRadius: 7, border: "1px solid rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, cursor: "pointer" }}
                      >
                        {openToets === s.id ? "Verberg" : "Wat precies?"}
                      </button>
                    )}
                    <div style={{ textAlign: "right" }}>
                      <ScoreBadge pct={s.percentage} />
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 2 }}>{s.score}/{s.total}</div>
                    </div>
                  </div>
                  {openToets === s.id && (
                    <ToetsDetail detail={s.detail} naam={selectedChild} onOefen={onOpenLes} vak={s.subject} niveau={s.level} />
                  )}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}

      {/* AVG art. 17 — recht op verwijdering. Self-service, alleen voor
          ingelogde gebruikers (anders kunnen we eigenaar niet verifiëren).
          Alleen op het volledige /ouder-dashboard, niet embedded op /mijn. */}
      {authUser && !embedded && (
        <div style={{ marginTop: 24, padding: 16, borderRadius: 14, border: "1px solid rgba(255,82,82,0.25)", background: "rgba(255,82,82,0.04)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#ff8a80", marginBottom: 6 }}>
            🗑️ Mijn data verwijderen
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 12, lineHeight: 1.5 }}>
            Onder de AVG (art. 17) heb je recht op vergetelheid. Met deze knop
            wis je alle data die aan je Google-account gekoppeld is, inclusief het account zelf.
          </div>
          {deleteDone ? (
            <div style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(105,240,174,0.12)", border: "1px solid rgba(105,240,174,0.4)", color: "var(--color-brand-primary-100)", fontSize: 12, fontWeight: 700 }}>
              ✅ Verwijderd, inclusief je account. Je wordt zo automatisch uitgelogd.
            </div>
          ) : (
            <button
              onClick={deleteAllMyData}
              disabled={deletingMyData}
              style={{
                padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(255,82,82,0.6)",
                background: deletingMyData ? "rgba(255,82,82,0.15)" : "transparent",
                color: "#ff8a80", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700,
                cursor: deletingMyData ? "default" : "pointer",
              }}
            >
              {deletingMyData ? "Bezig met wissen…" : "Verwijder al mijn data"}
            </button>
          )}
        </div>
      )}
      {onRondleiding && !embedded && (
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <button
            type="button"
            onClick={onRondleiding}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-text-muted, #99a3b4)",
              fontSize: 13,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Hoe werkt Leerkwartier?
          </button>
        </div>
      )}
    </div>
  );
}
