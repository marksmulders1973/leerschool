// 🧪 Proefweek-client (6 nov 2026, staande opdracht "10 betalende klanten").
// Eén functie: vraag de server om 7 dagen Familie voor het ingelogde account.
// Antwoord-vormen (allemaal zonder exceptions, de UI kiest de tekst):
//   { ok: true, validUntil }                        → gelukt, cache gewist, pagina herladen
//   { login: true, tekst }                          → eerst inloggen met e-mail (via /mijn)
//   { alActief: true, tekst } · { gebruikt: true, tekst } · { fout: true, tekst }
import supabase from "../supabase.js";
import { track } from "../utils.js";

const CACHE_KEYS = ["lk_subscription_v1"];

export async function startProefweek(plek = "app") {
  let token = null, user = null;
  try {
    const { data } = await supabase.auth.getSession();
    token = data?.session?.access_token || null;
    user = data?.session?.user || null;
  } catch { /* geen sessie */ }
  if (!token || !user?.email || user.is_anonymous) {
    try { track("proefweek_login_nodig", { plek }); } catch { /* */ }
    return { login: true, tekst: "Log eerst in met je e-mailadres, dan hoort de proefweek bij jouw account en werkt hij op al je apparaten." };
  }
  try {
    const r = await fetch("/api/checkout-session?action=proefweek", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: "{}",
    });
    const d = await r.json().catch(() => ({}));
    if (r.ok && d.ok) {
      CACHE_KEYS.forEach((k) => { try { localStorage.removeItem(k); } catch { /* */ } });
      try { track("proefweek_gestart", { plek }); } catch { /* */ }
      return { ok: true, validUntil: d.valid_until };
    }
    const soort = d.login ? "login" : d.gebruikt ? "gebruikt" : d.alActief ? "al_actief" : "fout";
    try { track("proefweek_geweigerd", { plek, soort }); } catch { /* */ }
    if (d.login) return { login: true, tekst: d.error };
    if (d.gebruikt) return { gebruikt: true, tekst: d.error };
    if (d.alActief) return { alActief: true, tekst: d.error, validUntil: d.valid_until || null };
    return { fout: true, tekst: d.error || "Dat ging niet door. Probeer het later nog eens." };
  } catch {
    try { track("proefweek_geweigerd", { plek, soort: "netwerk" }); } catch { /* */ }
    return { fout: true, tekst: "Geen verbinding. Probeer het later nog eens." };
  }
}

export const datumNL = (d) => new Date(d).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
