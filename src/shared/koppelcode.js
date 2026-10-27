// 🔐 Koppelcode invoeren — één plek voor schoonmaken, claimen en foutmeldingen
// (audit ouderadvies, 7 okt 2026).
//
// Gevonden bij de audit:
//  • Een code met een spatie of streepje ("ABC 123", "ABC-123", zoals mensen
//    hem uit WhatsApp overtypen) werd niet herkend: KoppelcodeBanner deed
//    alleen trim(), CodeBalk testte /^[A-Z0-9]{4,8}$/ en stuurde zo'n code
//    door naar de partnercode-check ("Deze code kennen we niet").
//  • Een code twee keer invoeren op een apparaat dat al gekoppeld is, gaf
//    "Deze code werkt niet meer" — terwijl er niets mis was.
// De koppelcodes zelf bevatten alleen A-Z (zonder I, L, O) en 2-9.

import supabase from "../supabase.js";
import { bewaarKoppeling, koppelingVoor } from "./koppeling.js";

/** Hoofdletters, en spaties/streepjes/puntjes eruit. */
export function normaliseerKoppelcode(ruw) {
  return String(ruw || "").toUpperCase().replace(/[\s\-._]/g, "");
}

/** Ziet dit eruit als een koppelcode (4-8 letters/cijfers)? */
export function lijktKoppelcode(ruw) {
  return /^[A-Z0-9]{4,8}$/.test(normaliseerKoppelcode(ruw));
}

/** Tekens die nooit in een koppelcode zitten (alfabet zonder 0/O/1/I/L). */
export function verbodenTekens(ruw) {
  return [...new Set(normaliseerKoppelcode(ruw).match(/[01OIL]/g) || [])];
}

/**
 * 🩺 Koppelhulp (Mark 23 okt 2026: "een koppel-assistent zodat het altijd lukt"): uit de
 * diagnose van de server (RPC koppel_diagnose) de fout halen waar het scherm een eigen
 * uitleg + volgende stap voor heeft. Puur, los getest.
 *  alGekoppeld           — gebruikt door deze naam, en dít toestel is al gekoppeld: niets te doen
 *  gebruiktAnderToestel  — gebruikt door deze naam, maar op een ander toestel/browser: nieuwe code nodig
 *  gebruiktAnder         — gebruikt door een andere naam: elke code werkt één keer
 *  verlopen              — oude code (48-uursregel van vóór 14 okt)
 *  typfout               — bestaat niet, maar er is precies één vrije code die één teken scheelt
 *  bestaatNiet           — bestaat niet en lijkt nergens op
 *  geenVerbinding        — code is wél geldig, de claim faalde om een andere reden
 */
export function foutUitDiagnose(diag, alGekoppeldHier = false) {
  const s = diag?.status;
  if (s === "gebruikt") {
    if (diag.zelfde_naam) return alGekoppeldHier ? "alGekoppeld" : "gebruiktAnderToestel";
    return "gebruiktAnder";
  }
  if (s === "verlopen") return "verlopen";
  if (s === "onbekend") return diag.suggestie ? "typfout" : "bestaatNiet";
  if (s === "geldig") return "geenVerbinding";
  return alGekoppeldHier ? "alGekoppeld" : "verlopen"; // geen diagnose: oud gedrag
}

/** Uitleg bij elke koppelfout, gedeeld door /koppelen en de koppelcode-balk op de eigen pagina. */
export function koppelFoutTekst(fout, n = "") {
  switch (fout) {
    case "alGekoppeld": return `Je bent op dit toestel al gekoppeld, ${n}. Je hoeft niets meer te doen.`;
    case "gebruiktAnderToestel": return `Deze code is al gebruikt door ${n}, maar op een ander toestel of in een andere browser. Een code werkt één keer. Op dit toestel heb je dus een nieuwe code nodig.`;
    case "gebruiktAnder": return "Deze code is al gebruikt, door een ander kind of met een andere naam. Een code werkt maar één keer. Vraag thuis om een nieuwe code.";
    case "verlopen": return "Deze code is te oud. Vraag thuis om een nieuwe code: die blijft geldig tot je hem gebruikt.";
    case "typfout": return "Bijna goed! Er zit één letter of cijfer anders in.";
    case "bestaatNiet": return "Deze code bestaat niet. Kijk letter voor letter nog eens op de telefoon van thuis. Of vraag of ze je de link sturen: dan staat de code al ingevuld.";
    case "geenVerbinding": return "Het lukte even niet om verbinding te maken. Controleer je internet en tik nog een keer op Koppel mij.";
    case "leeg": return "De code is te kort. Kijk nog eens op de telefoon van thuis.";
    // 27 okt 2026: nieuwe antwoorden van claim_link_code (migratie koppel_privacy).
    case "maxKinderen": return "Bij dit account staan al drie kinderen. Vraag thuis om er eerst één weg te halen in het ouder-overzicht.";
    case "naamLeeg": return "Typ eerst je naam.";
    default: return "Dat lukte niet. Probeer het nog eens.";
  }
}
/**
 * Code claimen voor deze kindnaam.
 * → { ok: true, rol, vanWie, linkId, childName }
 * → { ok: false, fout, suggestie? } — fout: "leeg" | "onbekend" | "geenVerbinding" | één van foutUitDiagnose
 */
export async function claimKoppelcode(ruweCode, naam) {
  const code = normaliseerKoppelcode(ruweCode);
  const kind = String(naam || "").trim();
  if (code.length < 4) return { ok: false, fout: "leeg" };
  if (!kind) return { ok: false, fout: "onbekend" };
  try {
    let { data, error } = await supabase.rpc("claim_link_code", { p_code: code, p_child_name: kind });
    if (error) {
      // Eén keer opnieuw: een haperende verbinding op een schooltablet is de meest voorkomende storing.
      await new Promise((r) => setTimeout(r, 1500));
      ({ data, error } = await supabase.rpc("claim_link_code", { p_code: code, p_child_name: kind }));
    }
    if (error) return { ok: false, fout: "geenVerbinding" };
    if (data?.ok) {
      const rol = data.rol || "ouder";
      // 27 okt 2026: de naam óp de code (herstelcode "Brian") wint op de server; het toestel volgt die naam.
      const naamServer = String(data.naam || data.child_name || kind).trim() || kind;
      bewaarKoppeling({ naam: naamServer, linkId: data.link_id, rol, vanWie: data.van_wie });
      return { ok: true, rol, vanWie: String(data.van_wie || "").trim(), linkId: data.link_id, childName: naamServer };
    }
    if (data?.error === "max_kinderen") return { ok: false, fout: "maxKinderen" };
    if (data?.error === "naam_leeg") return { ok: false, fout: "naamLeeg" };
    if (data?.error === "code_invalid_or_expired") {
      const hier = !!(koppelingVoor(kind)?.ouder || koppelingVoor(kind)?.leraar);
      let diag = null;
      try {
        const r = await supabase.rpc("koppel_diagnose", { p_code: code, p_child_name: kind });
        if (!r.error) diag = r.data;
      } catch { /* zonder diagnose: oud gedrag */ }
      return { ok: false, fout: foutUitDiagnose(diag, hier), suggestie: diag?.suggestie || null };
    }
    return { ok: false, fout: "onbekend" };
  } catch {
    return { ok: false, fout: "geenVerbinding" };
  }
}
