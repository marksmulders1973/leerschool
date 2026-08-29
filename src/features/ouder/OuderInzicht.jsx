import { useState, useEffect, useRef, useCallback } from "react";
import supabase from "../../supabase.js";
import { isLaunchPromoActive } from "../../constants.js";
import { BRAND } from "../../brand.js";
import { clearAll as clearAdaptive } from "../../shared/adaptiveStore.js";
import DoorstroomtoetsLogo from "../../components/DoorstroomtoetsLogo.jsx";
import ProBadge from "../../subscription/ProBadge.jsx";
import { trackProUse } from "../../subscription/proPlan.js";
import { track } from "../../utils.js";
import DiplomaKast from "../../shared/ui/DiplomaKast.jsx";
import KwartierplanSectie from "../kwartierplan/KwartierplanSectie.jsx";
import VriendenWerven from "../referral/VriendenWerven.jsx";
import { haalKlaargezetVoorLink, haalWeg, KLAARGEZET_EVENT } from "../../shared/ouderKlaargezet.js";

// Gedeeld ouder-inzicht-blok (Mark 14 aug): dezelfde ouder-functionaliteit —
// kind koppelen (code via WhatsApp/e-mail/kopiëren), partner-mail, betalen en
// de voortgang per kind — op TWEE plekken: het volledige /ouder-dashboard én
// ingebouwd op de persoonlijke pagina /mijn (embedded). Eén codebase, twee
// deuren; zo lopen de twee locaties nooit uit elkaar. De pagina-chrome (Header,
// achtergrond) zit in de wrapper eromheen, niet hier.

const SUBJECT_LABELS = {
  rekenen: "Rekenen", taal: "Taal", aardrijkskunde: "Aardrijkskunde",
  geschiedenis: "Geschiedenis", natuur: "Natuur", engels: "Engels",
  spelling: "Spelling", "begrijpend-lezen": "Begrijpend Lezen",
  cito: "Doorstroomtoets", wiskunde: "Wiskunde", biologie: "Biologie",
};

// Familie feature 7 (Mark 1 aug): een gezin koppelt tot 3 kinderen op één
// account. Datamodel (parent_child_links) ondersteunt al meerdere; deze cap +
// het "wij oefenen samen"-gevoel maken het een Familie-troef zonder broer/zus-
// vergelijking (ongezond). Geen schema-wijziging.
const MAX_KINDEREN = 3;

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

// Voortgangsbalk voor de koppel-kaarten: 3 segmenten, gevuld t/m `stap`
// (1-3). Zo ziet ouder én kind in één blik "stap x van 3".
function ProgressBar({ stap, kleur }) {
  return (
    <div style={{ display: "flex", gap: 4, marginTop: 6 }} aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <div key={n} style={{ flex: 1, height: 5, borderRadius: 3, background: n <= stap ? kleur : "rgba(255,255,255,0.12)", transition: "background 0.3s" }} />
      ))}
    </div>
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

export default function OuderInzicht({ authUser, subscription, onUpgrade, onLogin, onRondleiding, onKlaarzetten, onOpenLes, embedded = false }) {
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
  // Welke lege plek staat open in "voeg kind toe"-modus (index), en welke code
  // is net gekopieerd (voor de ✓-feedback per wacht-kaart).
  const [addingSlot, setAddingSlot] = useState(false);
  const [copiedCode, setCopiedCode] = useState("");
  const [selectedChild, setSelectedChild] = useState(null);
  // 🔒 Opslag-uitleg (Mark 27 aug: "zet er netjes bij wat wél wordt
  // opgeslagen en hoe dat beveiligd is"): uitklap-blokje onderaan de
  // kinderen-kaart, in gewone taal.
  const [opslagInfoOpen, setOpslagInfoOpen] = useState(false);
  const koppelFlowRef = useRef(null); // scroll-target = de koppel-kaarten
  const inviteNaamRef = useRef(null); // focus bij "voeg kind toe"
  const [childScores, setChildScores] = useState([]);
  const [citoScores, setCitoScores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scoresLoading, setScoresLoading] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [inviteSent, setInviteSent] = useState(false);
  const [copied, setCopied] = useState(false);
  // Bug-fix 2026-05-18: link_codes.child_name is NOT NULL. Ouder moet
  // naam-in-app van kind opgeven vóór code-generatie.
  const [inviteChildName, setInviteChildName] = useState("");
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
  const laadKoppelStatus = useCallback(async () => {
    if (!authUser) return;
    const [linksRes, codesRes] = await Promise.all([
      supabase.from("parent_child_links")
        .select("*")
        .eq("parent_user_id", authUser.id)
        .order("created_at", { ascending: true }),
      supabase.from("link_codes")
        .select("id, code, child_name, expires_at, used_at, created_at")
        .eq("parent_user_id", authUser.id)
        .is("used_at", null)
        .order("created_at", { ascending: true }),
    ]);
    const links = linksRes.data || [];
    setChildren(links);
    // Partner-mail: adres staat op elke koppeling gelijk — pak de eerste
    // die 'm heeft (leeg = niet ingesteld).
    setPartnerEmail(links.find((c) => c.partner_email)?.partner_email || "");
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
  useEffect(() => {
    if (openInvites.length === 0) return;
    const t = setInterval(() => { laadKoppelStatus(); }, 6000);
    return () => clearInterval(t);
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
  useEffect(() => {
    const linkId = selectedChildVerified?.id;
    if (!linkId) { setKlaarLijst([]); return; }
    let cancel = false;
    const laad = () => haalKlaargezetVoorLink(linkId).then((r) => { if (!cancel) setKlaarLijst(r); });
    laad();
    window.addEventListener(KLAARGEZET_EVENT, laad);
    return () => { cancel = true; window.removeEventListener(KLAARGEZET_EVENT, laad); };
  }, [selectedChildVerified?.id]);
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
      return;
    }
    setScoresLoading(true);
    // Naamgenoten-lek (audit 16-07): alleen op voornaam matchen mengt scores
    // van élke "Sophie" in het land. Zelfde fix als de ouder-mail (migratie
    // 20260711): scope op child_user_id waar de koppeling die heeft;
    // legacy-links zonder uid houden naam-match.
    let scoresQuery = supabase.from("leaderboard")
      // Bug-fix 2026-07-07: leaderboard heeft completed_at, geen created_at —
      // deze query gaf 400 en het dashboard bleef leeg voor élke ouder.
      .select("subject, level, score, total, percentage, time_taken, completed_at")
      .eq("player_name", selectedChild);
    if (selectedChildVerified?.child_user_id) scoresQuery = scoresQuery.eq("user_id", selectedChildVerified.child_user_id);
    scoresQuery
      .order("completed_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        setChildScores(data || []);
        setScoresLoading(false);
      });
  }, [selectedChild, selectedChildVerified]);

  // Cito scores apart — alleen bij verified link
  useEffect(() => {
    if (!selectedChild || !selectedChildVerified) {
      setCitoScores([]);
      return;
    }
    let citoQuery = supabase.from("leaderboard")
      .select("subject, level, percentage, completed_at")
      .eq("player_name", selectedChild)
      .eq("subject", "cito");
    if (selectedChildVerified?.child_user_id) citoQuery = citoQuery.eq("user_id", selectedChildVerified.child_user_id);
    citoQuery
      .order("completed_at", { ascending: false })
      .then(({ data }) => setCitoScores(data || []));
  }, [selectedChild, selectedChildVerified]);

  const removeChild = async (id) => {
    const kind = children.find((c) => c.id === id);
    if (!window.confirm(`Koppeling met ${kind?.child_name || "dit kind"} verwijderen?\n\nJe ziet dan geen voortgang meer en het maandag-weekrapport voor dit kind stopt. De voortgang van je kind zelf blijft gewoon bestaan.`)) return;
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
    const { error } = await supabase
      .from("parent_child_links")
      .update({ partner_email: email || null })
      .eq("parent_user_id", authUser.id);
    setPartnerSaving(false);
    if (error) {
      // eslint-disable-next-line no-console
      console.error("[OuderInzicht] savePartnerEmail failed:", error.message);
      setPartnerError("Opslaan lukte niet. Probeer het later opnieuw.");
      return;
    }
    setChildren((prev) => prev.map((c) => ({ ...c, partner_email: email || null })));
    setPartnerEmail(email);
    setPartnerSaved(true);
    track("ouder_partner_mail_ingesteld", { aan: !!email });
  };

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
      "Weet je het zeker?\n\nDit verwijdert al je gekoppelde data:\n" +
      "• je gekoppelde kinderen\n" +
      "• je voortgang en scores (waar je ingelogd was)\n" +
      "• je feedback-berichten\n\n" +
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
  };

  const generateInvite = async () => {
    if (!authUser) return;
    if (children.length >= MAX_KINDEREN) return; // cap: max 3 kinderen per gezin
    const childName = inviteChildName.trim();
    // 27 aug: zonder naam deed de knop stilletjes niets — Mark liep er bij het
    // testen tegenaan. Nu een duidelijke melding.
    if (!childName) { alert("Vul eerst de naam van je kind in (zoals in de app), dan maken we de code."); return; }
    setLoading(true);
    const code = generateCode();
    const expires = new Date(Date.now() + 48 * 3600 * 1000).toISOString();
    // Bug-fix 2026-05-18: link_codes.child_name is NOT NULL. Silent .catch
    // verving door explicit-log zodat insert-fails niet meer onzichtbaar zijn.
    const { error } = await supabase.from("link_codes").insert({
      code, parent_user_id: authUser.id, child_name: childName, expires_at: expires,
    });
    if (error) {
      // eslint-disable-next-line no-console
      console.error("[OuderInzicht] generateInvite failed:", error.message);
      alert("Kon code niet opslaan. Probeer later opnieuw.");
      setLoading(false);
      return;
    }
    setInviteCode(code);
    setInviteSent(false);
    setCopied(false);
    setLoading(false);
    // Sluit de "voeg kind toe"-modus en herlaad — de verse code verschijnt nu
    // als "wacht op je kind"-kaart met deelknoppen + teller.
    setAddingSlot(false);
    setInviteChildName("");
    laadKoppelStatus();
    try { track("ouder_koppelcode_gemaakt", {}); } catch { /* */ }
  };

  // Deel-helpers werken nu per code (elke wacht-kaart heeft z'n eigen code),
  // i.p.v. één globale inviteCode. Zelfde teksten als voorheen (Mark 14 aug):
  // code op eigen regel, plat, makkelijk over te typen vanuit WhatsApp.
  const sendWhatsApp = (code, naam) => {
    const hoi = naam ? `Hoi ${naam}!` : "Hoi!";
    const msg = encodeURIComponent(`${hoi} Open ${BRAND.name} (${BRAND.domain}) en voer deze koppelcode in bij 'Koppel met ouder':\n\n${code}\n\nDan kan ik jouw voortgang zien 😊 (de code is 48 uur geldig)`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
    try { track("ouder_koppelcode_deel", { via: "whatsapp" }); } catch { /* */ }
  };

  // 🔔 Herinnering opnieuw sturen (Mark 30 aug): zachtere toon dan de eerste
  // keer — "je code staat nog klaar" — zodat het kind 'm alsnog invoert.
  const stuurHerinnering = (code, naam) => {
    const hoi = naam ? `Hoi ${naam}!` : "Hoi!";
    const msg = encodeURIComponent(`${hoi} Je koppelcode voor ${BRAND.name} staat nog klaar:\n\n${code}\n\nOpen de app en voer 'm in bij 'Koppel met ouder' 😊 (nog even geldig)`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
    try { track("ouder_koppelcode_herinnering", {}); } catch { /* */ }
  };

  // Koppelcode per e-mail: opent de eigen mail-app met de code voorgevuld; de
  // ouder kiest de ontvanger. Geen server/Resend nodig.
  const sendEmailCode = (code) => {
    const subject = encodeURIComponent(`Koppelcode voor ${BRAND.name}`);
    const body = encodeURIComponent(
      `Hoi!\n\nOpen ${BRAND.name} (${BRAND.domain}) en voer de koppelcode ${code} in bij 'Koppel met ouder'. Dan kan ik jouw voortgang volgen.\n\n(De code is 48 uur geldig.)`
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

  // Uren tot verval (voor de "nog 47 uur geldig"-teller op de wacht-kaart).
  const urenTot = (iso) => {
    if (!iso) return null;
    const ms = new Date(iso).getTime() - Date.now();
    if (!Number.isFinite(ms)) return null;
    return Math.max(0, Math.round(ms / 3600000));
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
          <li>📬 Elke maandag een weekrapport per mail</li>
          <li>💛 Zet oefeningen voor je kind klaar</li>
        </ul>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.45)", maxWidth: 290, lineHeight: 1.6 }}>
          Alleen dit thuis-overzicht vraagt een account — <strong style={{ color: "rgba(255,255,255,0.65)" }}>oefenen kan altijd gratis, zonder account</strong>.
        </div>
        <button
          onClick={onLogin}
          style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, padding: "13px 22px", borderRadius: 14, border: "none", background: "var(--color-text-strong)", color: "#333", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Inloggen met Google
        </button>
      </div>
    );
  }

  // 🔗 Slot-model: elke "plek" is óf een gekoppeld/te-bevestigen kind
  // (parent_child_links) óf een openstaande code (link_codes = wacht op kind).
  // Een openstaande code waarvan het kind inmiddels koppelde (zelfde naam in
  // children) tonen we niet dubbel. Rest = lege plekken tot MAX_KINDEREN.
  const gekoppeldeNamen = new Set(children.map((c) => (c.child_name || "").trim().toLowerCase()));
  const wachtInvites = openInvites.filter((iv) => !gekoppeldeNamen.has((iv.child_name || "").trim().toLowerCase()));
  const slots = [
    ...children.map((c) => ({ key: `k-${c.id}`, type: c.verified ? "gekoppeld" : "bevestigen", kind: c })),
    ...wachtInvites.map((iv) => ({ key: `w-${iv.id}`, type: "wacht", invite: iv })),
  ];
  const vrijePlekken = Math.max(0, MAX_KINDEREN - slots.length);

  return (
    <div style={{ padding: embedded ? 0 : "16px 20px 48px", maxWidth: embedded ? "none" : 480, margin: embedded ? 0 : "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Familie-label (Mark 2026-06-06; laag-naam rechtgezet 9 aug — de badge
          zei Familie maar de tekst zei Pro): ouder-inzicht hoort straks bij het
          Familie-pakket, nu nog gratis. Badge laat de waarde zien + meet gebruik. */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", padding: "10px 14px", borderRadius: 12, background: "rgba(255,183,77,0.06)", border: "1px solid rgba(255,183,77,0.22)" }}>
        <ProBadge feature="parent-dashboard" size="md" onInfo={onUpgrade} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>
          Dit ouder-inzicht hoort straks bij het Familie-pakket — <strong style={{ color: "#69f0ae" }}>nu nog helemaal gratis</strong>.
        </span>
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
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#69f0ae", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>VOOR JOU ALS OUDER</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                <li>🔑 Koppel je kind met één korte code</li>
                <li>📊 Voortgang in één oogopslag</li>
                <li>🆓 In 2026 helemaal gratis · daarna basis-functies vrij</li>
                <li>🔒 Geen reclame, AVG-veilig</li>
                <li>📵 Werkt ook offline (PWA)</li>
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
              <strong style={{ color: "#ffd54f" }}>✨ Anders dan Squla / Junior Einstein:</strong> bij een fout krijgt je kind geen "fout!" + door, maar uitleg op 3 niveaus om zelf op door te klikken — als een bijlesdocent in de broekzak. En in 2026 is alles gratis (basis blijft daarna ook gratis). Plus complete leerpaden waar elk onderwerp van A tot Z wordt uitgelegd.
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
            Eén prijs per gezín, niet per kind — of een Seizoenspas die vanzelf stopt.
          </div>
          <button onClick={onUpgrade} style={{ padding: "10px 18px", borderRadius: 10, border: "none", background: "#ffd54f", color: "#0b1224", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Meer info & aanmelden →
          </button>
        </div>
      )}

      {/* Kinderen koppelen */}
      <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "16px" }}>
        {/* 👶 Kop + korte uitleg. De plekken hieronder zijn elk een
            mini-stappenplan dat meebeweegt met de status: leeg → wacht op je
            kind → ✓ gekoppeld (Mark 29 aug — koppelen als ruggengraat). De
            per-kind-acties (weekmail/klaarzetten/verwijderen) zitten nu ín de
            gekoppelde kaart; dit verving de dropdown-lijst van 27 aug. */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
          👶 Mijn kinderen{slots.length ? ` (${children.length}/${MAX_KINDEREN})` : ""}
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 12, lineHeight: 1.5 }}>
          Koppel tot {MAX_KINDEREN} kinderen — elk met een eigen code. Je volgt zo per kind hoe het gaat richting de Doorstroomtoets.
        </div>

        <div ref={koppelFlowRef} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
          {slots.map((slot) => {
            // ── ✓ GEKOPPELD ──────────────────────────────────────────────
            if (slot.type === "gekoppeld") {
              const c = slot.kind;
              const isSel = selectedChild === c.child_name;
              const mailAan = c.weekmail !== false;
              const pill = (extra) => ({ borderRadius: 999, padding: "4px 10px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, ...extra });
              return (
                <div key={slot.key} onClick={() => setSelectedChild(c.child_name)} style={{
                  borderRadius: 14, padding: "13px 15px", cursor: "pointer",
                  border: isSel ? "1px solid rgba(105,240,174,0.6)" : "1px solid rgba(105,240,174,0.28)",
                  background: isSel ? "rgba(105,240,174,0.12)" : "rgba(105,240,174,0.05)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#69f0ae", display: "flex", alignItems: "center", gap: 8 }}>
                      👦 {c.child_name} <span style={{ fontSize: 12.5 }}>✓ gekoppeld</span>
                    </span>
                    <button onClick={(e) => { e.stopPropagation(); removeChild(c.id); }} aria-label={`Verwijder ${c.child_name || "kind"}`} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 16, padding: 2 }}>×</button>
                  </div>
                  <ProgressBar stap={3} kleur="#69f0ae" />
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", margin: "8px 0 10px", lineHeight: 1.5 }}>
                    {isSel ? "Je voortgang staat hieronder." : "Tik om de voortgang te bekijken."}
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {onKlaarzetten && (
                      <button onClick={(e) => { e.stopPropagation(); onKlaarzetten(c.id, c.child_name); }} title={`Blader door de app en zet lessen klaar voor ${c.child_name}`} style={pill({ border: "1px solid rgba(255,105,135,0.5)", background: "rgba(255,105,135,0.14)", color: "#ff9fb2" })}>
                        💛 zet lessen klaar
                      </button>
                    )}
                    <button onClick={(e) => { e.stopPropagation(); toggleWeekmail(c); }} aria-pressed={mailAan} title={mailAan ? "Elke maandag het weekrapport in je mail — klik om uit te zetten" : "Weekrapport staat uit — klik om aan te zetten"} style={pill(mailAan ? { border: "1px solid rgba(105,240,174,0.5)", background: "rgba(0,200,83,0.14)", color: "#69f0ae" } : { border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)" })}>
                      📩 weekmail {mailAan ? "aan" : "uit"}
                    </button>
                  </div>
                </div>
              );
            }
            // ── 🔐 BIJNA KLAAR (code ingevoerd, nog te bevestigen) ────────
            if (slot.type === "bevestigen") {
              const c = slot.kind;
              return (
                <div key={slot.key} style={{ borderRadius: 14, padding: "13px 15px", border: "1px solid rgba(255,183,77,0.4)", background: "rgba(255,183,77,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#ffb74d", display: "flex", alignItems: "center", gap: 8 }}>👦 {c.child_name} <span style={{ fontSize: 12.5 }}>bijna klaar</span></span>
                    <button onClick={() => removeChild(c.id)} aria-label={`Verwijder ${c.child_name || "kind"}`} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 16, padding: 2 }}>×</button>
                  </div>
                  <ProgressBar stap={2} kleur="#ffb74d" />
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.7)", marginTop: 8, lineHeight: 1.5 }}>
                    {c.child_name} moet de koppeling nog even zelf bevestigen in de app — daar op <strong>"Ja, dit is mijn ouder of verzorger"</strong> tikken. Daarna zie je meteen de voortgang.
                  </div>
                </div>
              );
            }
            // ── ⏳ WACHT OP JE KIND (openstaande code) ────────────────────
            const iv = slot.invite;
            const uren = urenTot(iv.expires_at);
            const isCopied = copiedCode === iv.code;
            const deelKnop = (extra) => ({ flex: "1 1 90px", padding: "9px 8px", borderRadius: 9, fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 5, ...extra });
            return (
              <div key={slot.key} style={{ borderRadius: 14, padding: "13px 15px", border: "1px solid rgba(0,176,255,0.4)", background: "rgba(0,176,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#00b0ff", display: "flex", alignItems: "center", gap: 8 }}>👦 {iv.child_name} <span style={{ fontSize: 12.5 }}>koppelen loopt…</span></span>
                  <button onClick={() => trekCodeIn(iv.id)} title="Code intrekken" aria-label="Code intrekken" style={{ background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: 16, padding: 2 }}>×</button>
                </div>
                <ProgressBar stap={2} kleur="#00b0ff" />
                <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 9 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#69f0ae", fontWeight: 700 }}>✓ Stap 1 — code gemaakt</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--color-text-strong)", fontWeight: 700, marginBottom: 4 }}>➤ Stap 2 — stuur de code naar {iv.child_name}</div>
                    <div style={{ textAlign: "center", padding: "4px 0 8px" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 700, color: "#00b0ff", letterSpacing: 5 }}>{iv.code}</div>
                      {uren !== null && <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>nog {uren} uur geldig</div>}
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <button onClick={() => sendWhatsApp(iv.code, iv.child_name)} style={deelKnop({ border: "none", background: "#25D366", color: "#08121f" })}>💬 WhatsApp</button>
                      <button onClick={() => sendEmailCode(iv.code)} style={deelKnop({ border: "1px solid rgba(0,176,255,0.45)", background: "rgba(0,176,255,0.10)", color: "#00b0ff" })}>✉️ E-mail</button>
                      <button onClick={() => copyCode(iv.code)} style={deelKnop({ border: "1px solid rgba(255,255,255,0.2)", background: isCopied ? "rgba(105,240,174,0.14)" : "rgba(255,255,255,0.05)", color: isCopied ? "#69f0ae" : "rgba(255,255,255,0.75)" })}>{isCopied ? "✓ Gekopieerd" : "📋 Kopieer"}</button>
                    </div>
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>○ Stap 3 — {iv.child_name} opent de app en typt de code in bij <strong>Koppel met ouder</strong></div>
                </div>
                <div style={{ marginTop: 10, padding: "8px 10px", borderRadius: 9, background: "rgba(0,176,255,0.08)", border: "1px solid rgba(0,176,255,0.2)", fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                  ⏳ We wachten tot {iv.child_name} de code invoert — deze kaart springt <strong>vanzelf</strong> op ✓ zodra het gelukt is.
                  <div style={{ marginTop: 6 }}>
                    <button onClick={() => stuurHerinnering(iv.code, iv.child_name)} style={{ background: "none", border: "none", padding: 0, color: "#00b0ff", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>
                      🔔 Nog niet gelukt? Stuur de code nog eens
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Lege plekken → "voeg kind toe"; de eerste klapt open als stap-1-formulier. */}
          {Array.from({ length: vrijePlekken }, (_, i) => {
            const nr = slots.length + i + 1;
            const woord = nr === 1 ? "eerste" : nr === 2 ? "tweede" : "derde";
            if (i === 0 && addingSlot) {
              return (
                <div key={`add-${nr}`} style={{ borderRadius: 14, padding: "13px 15px", border: "1px solid rgba(0,176,255,0.4)", background: "rgba(0,176,255,0.06)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#00b0ff" }}>➕ Kind toevoegen</div>
                  <ProgressBar stap={1} kleur="#00b0ff" />
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "8px 0 10px", lineHeight: 1.5 }}>
                    Stap 1 — vul de naam van je kind in zoals die in de app staat. Daarna maken we de code die je kunt delen.
                  </div>
                  <input ref={inviteNaamRef} value={inviteChildName} onChange={(e) => setInviteChildName(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && inviteChildName.trim()) generateInvite(); }} placeholder="Naam van je kind (zoals in de app)" style={{ width: "100%", padding: "10px 12px", marginBottom: 8, borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={generateInvite} disabled={loading || !inviteChildName.trim()} style={{ flex: 1, padding: "11px", borderRadius: 10, border: "none", background: loading || !inviteChildName.trim() ? "rgba(0,176,255,0.3)" : "#00b0ff", color: "#08121f", fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 700, cursor: loading || !inviteChildName.trim() ? "not-allowed" : "pointer" }}>{loading ? "Even…" : "Maak de code →"}</button>
                    <button onClick={() => { setAddingSlot(false); setInviteChildName(""); }} style={{ padding: "11px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background: "none", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)", fontSize: 13, cursor: "pointer" }}>Annuleer</button>
                  </div>
                </div>
              );
            }
            return (
              <button key={`vrij-${nr}`} onClick={() => { setAddingSlot(true); setInviteChildName(""); setTimeout(() => { try { inviteNaamRef.current?.focus(); } catch { /* */ } }, 50); }} disabled={addingSlot} style={{ borderRadius: 14, padding: "16px 15px", cursor: addingSlot ? "default" : "pointer", textAlign: "left", border: "1px dashed rgba(105,240,174,0.4)", background: "rgba(0,200,83,0.05)", color: "#69f0ae", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, opacity: addingSlot ? 0.4 : 1 }}>
                ➕ Voeg je {woord} kind toe
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 400, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>In 3 stappen — duurt een minuut.</div>
              </button>
            );
          })}

          {slots.length >= MAX_KINDEREN && (
            <div style={{ borderRadius: 12, border: "1px solid rgba(105,240,174,0.3)", background: "rgba(105,240,174,0.06)", padding: "12px 14px", fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
              👨‍👩‍👧 Je hebt het maximum van {MAX_KINDEREN} kinderen — genoeg voor de meeste gezinnen. Meer nodig? Laat het weten via <em>Tips aan maker</em>.
            </div>
          )}
        </div>

        {children.length > 0 && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.4)", margin: "0 2px 8px", lineHeight: 1.5 }}>
            📩 Elke maandag krijg je per gekoppeld kind een weekrapport in je mail — zet 'm per kaart aan of uit.
          </div>
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
                <div key={it.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 9px", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }} aria-hidden="true">{it.emoji || "📘"}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-strong)" }}>{it.titel || "Een les"}</div>
                    <div style={{ fontSize: 11, color: it.gedaan ? "#69f0ae" : "rgba(255,255,255,0.45)", fontWeight: 700 }}>
                      {it.gedaan ? "✓ je kind heeft dit gedaan" : "nog te doen"}
                    </div>
                  </div>
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

        {/* Partner-mail (Mark 14 aug): stuur het weekrapport ook naar een
            tweede adres — bv. je partner of medeverzorger. Eén adres per gezin. */}
        {children.length > 0 && (
          <div style={{ borderRadius: 12, border: "1px solid rgba(0,176,255,0.22)", background: "rgba(0,176,255,0.05)", padding: "12px 14px", marginTop: 4, marginBottom: 4 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, color: "#00b0ff", marginBottom: 4 }}>
              👥 Stuur het weekrapport ook naar je partner
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 10, lineHeight: 1.5 }}>
              Vul het e-mailadres van je partner of medeverzorger in — dan krijgen jullie allebei elke maandag hetzelfde rapport. Laat leeg om het weer uit te zetten.
            </div>
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
                {partnerEmail ? "✓ Opgeslagen — je partner krijgt het rapport voortaan ook." : "✓ Uitgezet — het rapport gaat weer alleen naar jou."}
              </div>
            )}
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
            die in de app invoeren bij <strong>Instellingen → Koppel met ouder</strong>.
          </div>
        </div>
      )}
      {/* 🤝 Vrienden werven (Mark 8 jul): volwassenen-programma — 5 geworven
          gezinnen = 6 maanden Pro. Bewust hier (ouder-context) en nergens
          in kinder-schermen. */}
      <VriendenWerven authUser={authUser} />

      {selectedChild && selectedChildVerified && (
        <>
          {/* Kwartierplan (sessie 1, 2026-07-07): doel + startfoto. Bewust
              BOVEN de scores — juist bij een vers gekoppeld kind zonder
              scores is dit de logische eerste actie voor de ouder. */}
          <KwartierplanSectie authUser={authUser} childName={selectedChild} />

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
              <div style={{ fontSize: 36, marginBottom: 8 }}>🎮</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Nog geen scores voor {selectedChild}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Zodra je kind oefent, zie je hier de resultaten.</div>
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
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                        {s.level} — {fmtDatum(s.completed_at, { day: "numeric", month: "short" })}
                      </span>
                      <ScoreBadge pct={s.percentage} />
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
                  <div key={i} style={{ display: "flex", alignItems: "center", padding: "9px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                        {SUBJECT_LABELS[s.subject] || s.subject} · {s.level}
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>
                        {fmtDatum(s.completed_at, { weekday: "short", day: "numeric", month: "short" })}
                        {s.time_taken ? ` · ⏱ ${s.time_taken < 60 ? `${s.time_taken}s` : `${Math.floor(s.time_taken / 60)}m ${s.time_taken % 60}s`}` : ""}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <ScoreBadge pct={s.percentage} />
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 2 }}>{s.score}/{s.total}</div>
                    </div>
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
            wis je alle data die aan je Google-account gekoppeld is.
          </div>
          {deleteDone ? (
            <div style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(105,240,174,0.12)", border: "1px solid rgba(105,240,174,0.4)", color: "var(--color-brand-primary-100)", fontSize: 12, fontWeight: 700 }}>
              ✅ Verwijderd. Log uit om de browser-state te wissen.
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
