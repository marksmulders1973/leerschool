// 🏫 Kind-sleutel: verder op een schoolcomputer of tweede apparaat (prototype, 7 okt 2026).
//
// Probleem: de koppelcode werkt sinds 16 jul 2026 één keer (veiligheid: wie de
// code ziet, kon zich anders aan het gezin koppelen). Een kind dat op zijn
// telefoon gekoppeld is en daarna op school verder wil, heeft dus een nieuwe
// code van thuis nodig.
//
// Voorstel: per koppeling een vaste kind-sleutel van 8 tekens (zelfde alfabet
// als de koppelcode, dus zonder 0/O/1/I/L). De sleutel geeft ALLEEN wat het
// kind-apparaat nu al met een link_id kan: oefenwerk aan de koppeling hangen,
// klaargezette lessen en de nulmeting-stand lezen. Geen e-mailadres, geen
// ouder-account, geen andere kinderen. De ouder of verzorger kan hem met één
// tik vervangen (oude werkt dan niet meer).
//
// ⚠️ De RPC's bestaan nog NIET live. Voorstel:
// docs/audit/ouderadvies/VOORSTEL-migratie-ouderadvies.sql. Zonder die migratie geven
// deze functies { ok:false, fout:"niet-beschikbaar" }.

import supabase from "../../../supabase.js";
import { bewaarKoppeling, vergeetKoppeling } from "../../../shared/koppeling.js";
import { normaliseerKoppelcode } from "../../../shared/koppelcode.js";

const OPENBAAR_KEY = "lk_openbaar_apparaat";
const bestaatNiet = (e) => !!e && (e.code === "PGRST202" || e.code === "42883" || /could not find the function|does not exist/i.test(e.message || ""));

export const lijktKindSleutel = (ruw) => normaliseerKoppelcode(ruw).length === 8;

/** Ouder (ingelogd, eigenaar van de koppeling): sleutel ophalen of vervangen. */
export async function haalKindSleutel(linkId, { nieuw = false } = {}) {
  if (!linkId) return { ok: false, fout: "onbekend" };
  const { data, error } = await supabase.rpc("ouder_kindsleutel", { p_link_id: linkId, p_nieuw: !!nieuw });
  if (bestaatNiet(error)) return { ok: false, fout: "niet-beschikbaar" };
  if (error || !data) return { ok: false, fout: "geenVerbinding" };
  return { ok: true, sleutel: String(data) };
}

/** Kind: met de sleutel dit apparaat koppelen. `openbaar` = schoolcomputer. */
export async function koppelMetSleutel(ruw, naam, { openbaar = false } = {}) {
  const sleutel = normaliseerKoppelcode(ruw);
  const kind = String(naam || "").trim();
  if (sleutel.length !== 8) return { ok: false, fout: "leeg" };
  try {
    const { data, error } = await supabase.rpc("koppel_met_kindsleutel", { p_sleutel: sleutel, p_naam: kind || null });
    if (bestaatNiet(error)) return { ok: false, fout: "niet-beschikbaar" };
    if (error) return { ok: false, fout: "geenVerbinding" };
    if (!data?.ok) return { ok: false, fout: "verlopen" };
    // Naam van de koppeling wint: dan landt het werk bij hetzelfde kind,
    // ook als het kind op school "sam" typt en thuis "Sam" heet.
    const naamKoppeling = String(data.child_name || kind).trim();
    bewaarKoppeling({ naam: naamKoppeling, linkId: data.link_id, rol: "ouder", vanWie: "" });
    if (openbaar) markeerOpenbaar(naamKoppeling);
    return { ok: true, linkId: data.link_id, naam: naamKoppeling, groep: data.groep || null };
  } catch {
    return { ok: false, fout: "geenVerbinding" };
  }
}

function markeerOpenbaar(naam) {
  try {
    const l = JSON.parse(localStorage.getItem(OPENBAAR_KEY) || "[]");
    if (!l.includes(naam)) l.push(naam);
    localStorage.setItem(OPENBAAR_KEY, JSON.stringify(l));
  } catch { /* */ }
}
export function isOpenbaar(naam) {
  try { return JSON.parse(localStorage.getItem(OPENBAAR_KEY) || "[]").includes(naam); } catch { return false; }
}

/** Schoolcomputer: koppeling + profiel van dit kind van het apparaat halen.
 *  Het oefenwerk zelf staat op de server (aan de koppeling) en blijft bewaard. */
export function vergeetMij(naam) {
  vergeetKoppeling(naam);
  try {
    const l = JSON.parse(localStorage.getItem(OPENBAAR_KEY) || "[]").filter((x) => x !== naam);
    localStorage.setItem(OPENBAAR_KEY, JSON.stringify(l));
    const namen = JSON.parse(localStorage.getItem("lk_namen") || "[]").filter((x) => x !== naam);
    localStorage.setItem("lk_namen", JSON.stringify(namen));
    localStorage.removeItem(`lk_profiel:${naam}`);
    const u = JSON.parse(localStorage.getItem("ls_user") || "{}");
    if (u?.name === naam) localStorage.removeItem("ls_user");
  } catch { /* */ }
}
