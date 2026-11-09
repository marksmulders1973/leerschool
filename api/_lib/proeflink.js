// 🔗 Proefweek-link uit het weekrapport (9 nov 2026, staande opdracht "10 betalende klanten").
//
// Probleem: een ouder die op vrijdag het weekrapport leest en "proberen" wil, moest via de
// prijspagina, "log eerst in", een inlogmail en terug naar de prijspagina. Te veel stappen.
// Oplossing: de mail bevat een ondertekende code voor precies dát ouder-account. De prijspagina
// toont dan "Start mijn proefweek"; pas na een tik van de ouder zelf start de week
// (POST, geen GET: mailscanners klikken links automatisch aan en zouden anders stil een
// proefweek starten).
//
// De code geeft alleen recht op wat het account toch al mocht: één gratis proefweek, één keer
// per account (beoordeelProefweek in api/checkout-session.js). Doorgestuurd? Dan start hooguit
// de proefweek van de oorspronkelijke ouder. Geen betaling, geen gegevens.
//
// Vorm: <user_id>.<verloopt_sec>.<handtekening 32 hex>. Sleutel = WEEKPAKKET_SECRET (staat
// alleen in de Vercel-env) met een eigen voorvoegsel, zodat deze code nooit een weekcode is.
// Web Crypto, zodat het zowel in de edge-functie als in Node draait.

const VOORVOEGSEL = "leerkwartier-proeflink";
export const PROEFLINK_DAGEN = 14;

async function teken(tekst, secret) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(tekst));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function maakProefLink(userId, { secret = process.env.WEEKPAKKET_SECRET, nu = Date.now(), dagen = PROEFLINK_DAGEN } = {}) {
  if (!secret || !userId || !UUID.test(userId)) return null;
  const exp = Math.floor(nu / 1000) + dagen * 86400;
  return `${userId}.${exp}.${await teken(`${VOORVOEGSEL}|${userId}|${exp}`, secret)}`;
}

// → user_id als de code klopt en niet verlopen is, anders null.
export async function leesProefLink(token, { secret = process.env.WEEKPAKKET_SECRET, nu = Date.now() } = {}) {
  if (!secret || typeof token !== "string" || token.length > 120) return null;
  const delen = token.split(".");
  if (delen.length !== 3) return null;
  const [userId, expTekst, sig] = delen;
  if (!UUID.test(userId) || !/^\d{9,11}$/.test(expTekst) || !/^[0-9a-f]{32}$/.test(sig)) return null;
  if (Number(expTekst) * 1000 < nu) return null;
  const verwacht = await teken(`${VOORVOEGSEL}|${userId}|${expTekst}`, secret);
  let diff = 0;
  for (let i = 0; i < 32; i++) diff |= verwacht.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0 ? userId : null;
}
