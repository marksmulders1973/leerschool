// 📬 ThuisMailKaart (5 nov 2026, marketeer-ronde, Mark "bouw alles wat je kunt").
// De ouder ontbrak in de trechter: kinderen oefenen anoniem, thuis ziet niets, en
// in januari verkopen we Familie aan iemand die de app nooit zag (662 accounts,
// 19 ouders). Daarom op het eindscherm van het kwartier, ná minstens drie
// bezoekdagen, één rustige vraag: "Wil je dat thuis ziet hoe het gaat?".
//
// Rijdt op de bewezen route van 27 okt (v1016, optie B): de anonieme sessie van
// dit toestel wordt de "ouder" (RPC gezin_koppel_zelfde_apparaat, verified), het
// adres gaat naar /api/partner-uitnodiging → bevestig-mail → na één tik staat
// thuis elke vrijdag in ouder_weekrapport_kandidaten. Dubbele opt-in: zonder tik
// van thuis gebeurt er niets. Zelfde adres als een al gekoppelde ouder → één mail
// (send-ouder-rapport groepeert per adres).
//
// 📱 23 nov 2026 (idee 89, Mark "doe maar alles"): in vier weken zagen 25 kinderen
// deze kaart en vulde 1 het adres in. Een kind weet het e-mailadres van thuis niet.
// Nu is de eerste keus "Laat de code zien": één tik maakt een QR-code; de ouder of
// verzorger scant die met de eigen telefoon en vult dáár het adres in
// (public/thuis.html → /api/partner-uitnodiging met `thuiscode`). Zelf het adres
// typen kan nog, als tweede keus. De teller begint opnieuw (sleutel v2), maar wie
// bij de oude kaart "liever niet" zei of al een adres stuurde, krijgt hem niet terug.
//
// Regels: alleen met een echte naam (geen "Speler"), ≥3 bezoekdagen, niet als dit
// toestel al een ouder-koppeling voor deze naam kent, max 3× tonen met 3 dagen
// ertussen, na "gelukt" of "liever niet" nooit meer. Events: thuis_mail_toon {vorm:"qr"} /
// thuis_qr_open / thuis_qr_fout / thuis_mail_zelf / thuis_mail_verstuurd / thuis_mail_weg /
// thuis_mail_fout; op de telefoon van thuis: thuis_scan_open / thuis_scan_mail / thuis_scan_fout.
import { useEffect, useRef, useState } from "react";
import Card from "../../shared/ui/Card.jsx";
import Button from "../../shared/ui/Button.jsx";
import supabase from "../../supabase.js";
import { ensureSession } from "../../auth.js";
import { track } from "../../utils.js";
import { aantalBezoekdagen } from "../account/trouweGast.js";
import { koppelingVoor } from "../../shared/koppeling.js";
import { groepUitNiveau } from "../account/profielKoppeling.js";

const KEY = "lk_thuis_mail_v2";
const KEY_OUD = "lk_thuis_mail_v1";
const MIN_DAGEN = 3;
const MAX_KEER = 3;
const TUSSEN_MS = 3 * 24 * 60 * 60 * 1000;

function lees() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { return {}; } }
function schrijf(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch { /* private mode */ } }

const geldigEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

/** Mag de kaart nu op het scherm? Puur op wat dit toestel weet. */
export function thuisMailTonen(userName) {
  const naam = (userName || "").trim();
  if (naam.length < 2 || /^speler$/i.test(naam)) return false;
  let dagen = 0; try { dagen = aantalBezoekdagen(); } catch { /* */ }
  if (dagen < MIN_DAGEN) return false;
  try { if (koppelingVoor(naam)?.ouder) return false; } catch { /* */ }
  // Gedeeld toestel (klas, digibord): meer dan 3 namen op dit toestel → geen thuis-mail
  // (de RPC staat max 3 kinderen per "ouder"-sessie toe; kliktocht 5 nov).
  try { const namen = JSON.parse(localStorage.getItem("lk_namen") || "[]"); if (Array.isArray(namen) && namen.length > 3) return false; } catch { /* */ }
  // Oude kaart: adres al verstuurd of "liever niet" gezegd → dat blijft gelden.
  try { if ((JSON.parse(localStorage.getItem(KEY_OUD) || "{}") || {}).klaar) return false; } catch { /* */ }
  const st = lees();
  if (st.klaar) return false;
  if ((st.keer || 0) >= MAX_KEER) return false;
  if (st.laatst && Date.now() - st.laatst < TUSSEN_MS) return false;
  return true;
}

/** Adres van de pagina die thuis opent na het scannen (public/thuis.html). */
export function thuisScanLink(code, naam, goed = null, totaal = null) {
  const q = new URLSearchParams({ t: String(code || ""), n: String(naam || "").trim().slice(0, 30) });
  if (Number.isFinite(goed) && Number.isFinite(totaal) && totaal > 0 && goed >= 0 && goed <= totaal) { q.set("g", String(goed)); q.set("v", String(totaal)); }
  return `https://leerkwartier.app/thuis.html?${q.toString()}`;
}

export default function ThuisMailKaart({ userName, userLevel, goed = null, totaal = null }) {
  const [tonen] = useState(() => thuisMailTonen(userName));
  const [email, setEmail] = useState("");
  const [staat, setStaat] = useState("idle"); // idle | bezig | ok | fout | weg
  const [fout, setFout] = useState("");
  const [qr, setQr] = useState("");               // data-url van de QR-code
  const [qrStaat, setQrStaat] = useState("idle"); // idle | bezig | toon | fout
  const [zelfTypen, setZelfTypen] = useState(false);
  const gemeld = useRef(false);

  useEffect(() => {
    if (!tonen || gemeld.current) return;
    gemeld.current = true;
    const st = lees();
    schrijf({ ...st, keer: (st.keer || 0) + 1, laatst: Date.now() });
    try { track("thuis_mail_toon", { keer: (st.keer || 0) + 1, vorm: "qr" }); } catch { /* */ }
  }, [tonen]);

  if (!tonen || staat === "weg") return null;

  const naam = (userName || "").trim();

  // Dit toestel wordt de "ouder" van deze naam (zelfde RPC als het koppelblok in "Wie oefent er?").
  // Nodig voor allebei de routes: de code voor thuis én zelf het adres typen.
  const koppelDitToestel = async () => {
    const sessie = await ensureSession();
    const token = sessie?.access_token;
    if (!token) throw new Error("geen-sessie");
    let level = userLevel || "";
    try { level = level || (JSON.parse(localStorage.getItem(`lk_profiel:${naam}`) || "{}") || {}).level || ""; } catch { /* */ }
    const { data: linkId, error } = await supabase.rpc("gezin_koppel_zelfde_apparaat", { p_child_name: naam, p_groep: groepUitNiveau(level) || null, p_voorkeur: null, p_verified: true });
    if (error || !linkId) throw error || new Error("geen-link");
    try {
      // onthouden voor de overname als thuis later op dít toestel inlogt (useAuth → gezin_koppelingen_overnemen)
      const uid = sessie?.user?.id;
      const oud = JSON.parse(localStorage.getItem("lk_koppel_anon") || "null") || { uid, linkIds: [] };
      const ids = oud.uid === uid ? oud.linkIds : [];
      if (!ids.includes(linkId)) ids.push(linkId);
      localStorage.setItem("lk_koppel_anon", JSON.stringify({ uid, linkIds: ids.slice(-12) }));
    } catch { /* */ }
    return token;
  };

  // "maximaal 3 kinderen per gezin" (gedeeld toestel): niet nog eens vragen.
  const teVeelKinderen = (err) => {
    if (!/maximaal 3/i.test(String(err?.message || err))) return false;
    schrijf({ ...lees(), klaar: true }); setStaat("weg");
    return true;
  };

  const toonCode = async () => {
    setQrStaat("bezig");
    try {
      const token = await koppelDitToestel();
      const r = await fetch("/api/partner-uitnodiging", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ actie: "thuiscode" }) });
      const j = r.ok ? await r.json().catch(() => ({})) : {};
      if (!j?.code) throw new Error("code-" + r.status);
      const QR = await import("qrcode");
      const url = await QR.toDataURL(thuisScanLink(j.code, naam, goed, totaal), { margin: 1, width: 264, color: { dark: "#111111", light: "#ffffff" } });
      setQr(url); setQrStaat("toon");
      try { track("thuis_qr_open", {}); } catch { /* */ }
    } catch (err) {
      if (teVeelKinderen(err)) return;
      setQrStaat("fout"); setZelfTypen(true);
      try { track("thuis_qr_fout", { reden: String(err?.message || err).slice(0, 40) }); } catch { /* */ }
    }
  };

  const stuur = async (e) => {
    e?.preventDefault?.();
    const adres = email.trim().toLowerCase();
    if (!geldigEmail(adres)) { setFout("Dat e-mailadres klopt nog niet helemaal."); return; }
    setFout(""); setStaat("bezig");
    try {
      const token = await koppelDitToestel();
      const r = await fetch("/api/partner-uitnodiging", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ email: adres }) });
      if (!r.ok) throw new Error("mail-" + r.status);
      schrijf({ ...lees(), klaar: true });
      setStaat("ok");
      try { track("thuis_mail_verstuurd", {}); } catch { /* */ }
    } catch (err) {
      if (teVeelKinderen(err)) return;
      setStaat("fout");
      try { track("thuis_mail_fout", { reden: String(err?.message || err).slice(0, 40) }); } catch { /* */ }
    }
  };

  const weg = () => {
    schrijf({ ...lees(), klaar: true });
    setStaat("weg");
    try { track("thuis_mail_weg", {}); } catch { /* */ }
  };

  const kop = { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, margin: "0 0 6px" };
  const tekst = { fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-text-muted)", margin: "0 0 10px", lineHeight: 1.45 };
  const invoer = {
    width: "100%", boxSizing: "border-box", padding: "11px 12px", borderRadius: 10, fontSize: 16,
    fontFamily: "var(--font-body)", border: "1px solid var(--color-border-soft)", background: "var(--color-bg-surface)", color: "var(--color-text)",
    marginBottom: 8,
  };
  const linkKnop = { background: "none", border: 0, padding: 0, color: "var(--color-text-muted)", textDecoration: "underline", fontSize: 13.5, fontFamily: "var(--font-body)", cursor: "pointer" };

  if (staat === "ok") {
    return (
      <Card variant="study" padding="md" style={{ marginTop: 12 }}>
        <div style={kop}>Gelukt!</div>
        <p style={{ ...tekst, margin: 0 }}>Thuis krijgt nu één mailtje om het te bevestigen. Daarna komt er elke vrijdag een berichtje over hoe het gaat.</p>
      </Card>
    );
  }

  const formulier = (
    <form onSubmit={stuur} style={{ marginTop: 10 }}>
      <input
        type="email" inputMode="email" autoComplete="email" placeholder="e-mail van thuis" aria-label="E-mailadres van thuis"
        value={email} onChange={(e) => setEmail(e.target.value)} style={invoer}
      />
      {(fout || staat === "fout") && (
        <div style={{ fontSize: 13, color: "var(--color-danger, #ff8a65)", marginBottom: 8 }}>{fout || "Dat lukte nu even niet. Probeer het later nog eens."}</div>
      )}
      <Button type="submit" size="sm" disabled={staat === "bezig"}>{staat === "bezig" ? "Even bezig…" : "Stuur naar thuis"}</Button>
    </form>
  );

  if (qrStaat === "toon") {
    return (
      <Card variant="study" padding="md" style={{ marginTop: 12 }}>
        <div style={kop}>Laat dit thuis zien</div>
        <p style={tekst}>Vraag je papa, mama of verzorger om deze code te scannen met de camera van hun telefoon. Zij kunnen dan elke vrijdag een berichtje krijgen over wat {naam} heeft geoefend.</p>
        <div style={{ background: "#ffffff", borderRadius: 14, padding: 10, width: "fit-content", margin: "0 auto 10px" }}>
          <img src={qr} alt="Code om thuis te scannen" width={220} height={220} style={{ display: "block" }} />
        </div>
        <p style={{ ...tekst, textAlign: "center", margin: "0 0 4px" }}>De code blijft twee weken geldig.</p>
        {!zelfTypen && <div style={{ textAlign: "center" }}><button type="button" style={linkKnop} onClick={() => { setZelfTypen(true); try { track("thuis_mail_zelf", { na: "code" }); } catch { /* */ } }}>Scannen lukt niet? Vul het e-mailadres van thuis in</button></div>}
        {zelfTypen && formulier}
      </Card>
    );
  }

  return (
    <Card variant="study" padding="md" style={{ marginTop: 12 }}>
      <div style={kop}>Wil je dat thuis ziet hoe het gaat?</div>
      <p style={tekst}>Laat thuis een code scannen. Dan krijgen zij elke vrijdag een kort berichtje: wat {naam} heeft geoefend en wat al goed gaat. Thuis zet het zelf aan.</p>
      {qrStaat === "fout" && <div style={{ fontSize: 13, color: "var(--color-danger, #ff8a65)", marginBottom: 8 }}>De code maken lukte nu even niet. Je kunt ook het e-mailadres van thuis invullen.</div>}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Button type="button" size="sm" disabled={qrStaat === "bezig"} onClick={toonCode}>{qrStaat === "bezig" ? "Even bezig…" : "Laat de code zien"}</Button>
        <Button type="button" variant="ghost" size="sm" onClick={weg}>Liever niet</Button>
      </div>
      {!zelfTypen && <div style={{ marginTop: 10 }}><button type="button" style={linkKnop} onClick={() => { setZelfTypen(true); try { track("thuis_mail_zelf", { na: "start" }); } catch { /* */ } }}>Of vul zelf het e-mailadres van thuis in</button></div>}
      {zelfTypen && formulier}
    </Card>
  );
}
