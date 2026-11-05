// 📬 ThuisMailKaart (5 nov 2026, marketeer-ronde, Mark "bouw alles wat je kunt").
// De ouder ontbrak in de trechter: kinderen oefenen anoniem, thuis ziet niets, en
// in januari verkopen we Familie aan iemand die de app nooit zag (662 accounts,
// 19 ouders). Daarom op het eindscherm van het kwartier, ná minstens drie
// bezoekdagen, één rustige vraag: "Wil je dat thuis ziet hoe het gaat?" + het
// e-mailadres van thuis.
//
// Rijdt op de bewezen route van 27 okt (v1016, optie B): de anonieme sessie van
// dit toestel wordt de "ouder" (RPC gezin_koppel_zelfde_apparaat, verified), het
// adres gaat naar /api/partner-uitnodiging → bevestig-mail → na één tik staat
// thuis elke vrijdag in ouder_weekrapport_kandidaten. Dubbele opt-in: zonder tik
// van thuis gebeurt er niets. Zelfde adres als een al gekoppelde ouder → één mail
// (send-ouder-rapport groepeert per adres).
//
// Regels: alleen met een echte naam (geen "Speler"), ≥3 bezoekdagen, niet als dit
// toestel al een ouder-koppeling voor deze naam kent, max 3× tonen met 3 dagen
// ertussen, na "gelukt" of "liever niet" nooit meer. Events: thuis_mail_toon /
// thuis_mail_verstuurd / thuis_mail_weg / thuis_mail_fout.
import { useEffect, useRef, useState } from "react";
import Card from "../../shared/ui/Card.jsx";
import Button from "../../shared/ui/Button.jsx";
import supabase from "../../supabase.js";
import { ensureSession } from "../../auth.js";
import { track } from "../../utils.js";
import { aantalBezoekdagen } from "../account/trouweGast.js";
import { koppelingVoor } from "../../shared/koppeling.js";
import { groepUitNiveau } from "../account/profielKoppeling.js";

const KEY = "lk_thuis_mail_v1";
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
  const st = lees();
  if (st.klaar) return false;
  if ((st.keer || 0) >= MAX_KEER) return false;
  if (st.laatst && Date.now() - st.laatst < TUSSEN_MS) return false;
  return true;
}

export default function ThuisMailKaart({ userName, userLevel }) {
  const [tonen] = useState(() => thuisMailTonen(userName));
  const [email, setEmail] = useState("");
  const [staat, setStaat] = useState("idle"); // idle | bezig | ok | fout | weg
  const [fout, setFout] = useState("");
  const gemeld = useRef(false);

  useEffect(() => {
    if (!tonen || gemeld.current) return;
    gemeld.current = true;
    const st = lees();
    schrijf({ ...st, keer: (st.keer || 0) + 1, laatst: Date.now() });
    try { track("thuis_mail_toon", { keer: (st.keer || 0) + 1 }); } catch { /* */ }
  }, [tonen]);

  if (!tonen || staat === "weg") return null;

  const naam = (userName || "").trim();

  const stuur = async (e) => {
    e?.preventDefault?.();
    const adres = email.trim().toLowerCase();
    if (!geldigEmail(adres)) { setFout("Dat e-mailadres klopt nog niet helemaal."); return; }
    setFout(""); setStaat("bezig");
    try {
      const sessie = await ensureSession();
      const token = sessie?.access_token;
      if (!token) throw new Error("geen-sessie");
      // 1) dit toestel = de ouder van deze naam (zelfde RPC als het koppelblok in "Wie oefent er?")
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
      // 2) adres → bevestig-mail naar thuis
      const r = await fetch("/api/partner-uitnodiging", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ email: adres }) });
      if (!r.ok) throw new Error("mail-" + r.status);
      schrijf({ ...lees(), klaar: true });
      setStaat("ok");
      try { track("thuis_mail_verstuurd", {}); } catch { /* */ }
    } catch (err) {
      // "maximaal 3 kinderen per gezin" (gedeeld toestel): niet nog eens vragen.
      if (/maximaal 3/i.test(String(err?.message || err))) { schrijf({ ...lees(), klaar: true }); setStaat("weg"); return; }
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

  if (staat === "ok") {
    return (
      <Card variant="study" padding="md" style={{ marginTop: 12 }}>
        <div style={kop}>📬 Gelukt!</div>
        <p style={{ ...tekst, margin: 0 }}>Thuis krijgt nu één mailtje om het te bevestigen. Daarna komt er elke vrijdag een berichtje over hoe het gaat.</p>
      </Card>
    );
  }

  return (
    <Card variant="study" padding="md" style={{ marginTop: 12 }}>
      <div style={kop}>📬 Wil je dat thuis ziet hoe het gaat?</div>
      <p style={tekst}>Vul het e-mailadres van thuis in. Zij krijgen elke vrijdag een kort berichtje: wat {naam} heeft geoefend en wat al goed gaat. Thuis bevestigt het eerst zelf.</p>
      <form onSubmit={stuur}>
        <input
          type="email" inputMode="email" autoComplete="email" placeholder="e-mail van thuis" aria-label="E-mailadres van thuis"
          value={email} onChange={(e) => setEmail(e.target.value)} style={invoer}
        />
        {(fout || staat === "fout") && (
          <div style={{ fontSize: 13, color: "var(--color-danger, #ff8a65)", marginBottom: 8 }}>{fout || "Dat lukte nu even niet. Probeer het later nog eens."}</div>
        )}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Button type="submit" size="sm" disabled={staat === "bezig"}>{staat === "bezig" ? "Even bezig…" : "Stuur naar thuis"}</Button>
          <Button type="button" variant="ghost" size="sm" onClick={weg}>Liever niet</Button>
        </div>
      </form>
    </Card>
  );
}
