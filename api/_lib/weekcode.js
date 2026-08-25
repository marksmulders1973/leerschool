// Weekpakket-codes: per ISO-week een andere code, afgeleid van een geheime
// sleutel (HMAC) — geen cron of database nodig voor de rotatie. De wekelijkse
// mail rekent dezelfde code uit als de api die het materiaal serveert.
// Sleutel staat ALLEEN in de Vercel-env (repo is openbaar): WEEKPAKKET_SECRET.
// Mark's meesterscode: WEEKPAKKET_MASTER (altijd geldig, ook voor het archief).
import crypto from "node:crypto";

// Leesbaar alfabet zonder verwarring (geen 0/O/1/I/L).
const ALFABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

// ISO-8601 weeknummer (weken beginnen op maandag; week 1 bevat de eerste donderdag).
export function isoWeekKey(d = new Date()) {
  const dt = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dag = dt.getUTCDay() || 7;                 // ma=1 … zo=7
  dt.setUTCDate(dt.getUTCDate() + 4 - dag);        // naar de donderdag van deze week
  const jaar = dt.getUTCFullYear();
  const jan1 = new Date(Date.UTC(jaar, 0, 1));
  const week = Math.ceil(((dt - jan1) / 86400000 + 1) / 7);
  return `${jaar}-W${String(week).padStart(2, "0")}`;
}

export function vorigeWeekKey(d = new Date()) {
  const v = new Date(d.getTime() - 7 * 86400000);
  return isoWeekKey(v);
}

// 6-teken-code voor een week_key, bv. "K7MPQ4".
export function weekCode(weekKey, secret = process.env.WEEKPAKKET_SECRET) {
  if (!secret) return null;
  const mac = crypto.createHmac("sha256", secret).update(`leerkwartier-weekpakket-${weekKey}`).digest();
  let code = "";
  for (let i = 0; i < 6; i++) code += ALFABET[mac[i] % ALFABET.length];
  return code;
}

// Welke week ontsluit deze code? Huidige week, vorige week (overlap voor late
// lezers), of alles via de meesterscode. Retour: { ok, master, weekKey }.
export function checkCode(ingevoerd, d = new Date()) {
  const c = String(ingevoerd || "").trim().toUpperCase();
  if (!c) return { ok: false };
  const master = process.env.WEEKPAKKET_MASTER;
  if (master && c === master.toUpperCase()) return { ok: true, master: true, weekKey: isoWeekKey(d) };
  const nu = isoWeekKey(d);
  if (weekCode(nu) === c) return { ok: true, master: false, weekKey: nu };
  const vorige = vorigeWeekKey(d);
  if (weekCode(vorige) === c) return { ok: true, master: false, weekKey: vorige };
  return { ok: false };
}
