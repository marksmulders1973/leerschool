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

/**
 * Code claimen voor deze kindnaam.
 * → { ok: true, rol, vanWie, linkId, childName }
 * → { ok: false, fout: "leeg" | "verlopen" | "alGekoppeld" | "geenVerbinding" | "onbekend" }
 */
export async function claimKoppelcode(ruweCode, naam) {
  const code = normaliseerKoppelcode(ruweCode);
  const kind = String(naam || "").trim();
  if (code.length < 4) return { ok: false, fout: "leeg" };
  if (!kind) return { ok: false, fout: "onbekend" };
  try {
    const { data, error } = await supabase.rpc("claim_link_code", { p_code: code, p_child_name: kind });
    if (error) return { ok: false, fout: "geenVerbinding" };
    if (data?.ok) {
      const rol = data.rol || "ouder";
      bewaarKoppeling({ naam: kind, linkId: data.link_id, rol, vanWie: data.van_wie });
      return { ok: true, rol, vanWie: String(data.van_wie || "").trim(), linkId: data.link_id, childName: data.child_name || kind };
    }
    if (data?.error === "code_invalid_or_expired") {
      // Al gekoppeld op dit apparaat? Dan is een "verlopen" code geen probleem.
      return { ok: false, fout: koppelingVoor(kind)?.ouder || koppelingVoor(kind)?.leraar ? "alGekoppeld" : "verlopen" };
    }
    return { ok: false, fout: "onbekend" };
  } catch {
    return { ok: false, fout: "geenVerbinding" };
  }
}
