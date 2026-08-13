// Tips via het maatje → wensenbord (Mark-wens 12 aug 2026).
// Zegt een kind in een chat met zijn maatje (Charley, Vonk, …) iets dat een
// wens, tip of klacht over de app is, dan hangt de AI er een onzichtbare
// [TIP-VOOR-MAKER: …]-regel achteraan. Deze helper plukt die eruit vóór het
// kind het antwoord ziet en zet de tip als 'pending' op het wensenbord —
// dezelfde wachtrij op /tips waar Mark al mee werkt (goedkeuren + 💛 Dank
// van de maker). Zo raakt een wens die alleen aan het maatje is verteld
// nooit meer kwijt.

import { submitWish } from "../data/repos/wishesRepo.js";
import { track } from "../utils.js";

const MARKER = /\[TIP[-\s]?VOOR[-\s]?(?:DE\s)?MAKER:?\s*([^\]]{3,400})\]/i;

export function verwerkMakerTip(replyTekst, { kindNaam = "", buddyNaam = "", bron = "maatje" } = {}) {
  const tekst = String(replyTekst || "");
  const m = tekst.match(MARKER);
  if (!m) return tekst;
  const schoon = tekst
    .replace(MARKER, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  // Kort houden (spam-/injectie-rem, review 13 aug): een wens is 1 zin.
  const tip = m[1].trim().slice(0, 140);
  const kind = String(kindNaam || "").trim().slice(0, 22);
  const maatje = String(buddyNaam || "").trim().slice(0, 14) || "het maatje";
  try {
    // Max 1 doorgegeven tip per 5 minuten per apparaat — voorkomt dat een
    // spelend kind (of een geintje) de moderatie-wachtrij volpompt.
    const nu = Date.now();
    const vorige = Number(localStorage.getItem("lk_makertip_laatst") || 0);
    if (nu - vorige < 5 * 60 * 1000) return schoon || "Ik heb het doorgegeven aan de maker! 🐾";
    localStorage.setItem("lk_makertip_laatst", String(nu));
    submitWish({
      message: `🐾 Via ${maatje} doorgegeven: "${tip}"`,
      displayName: kind ? `${kind} (via ${maatje})` : `Via ${maatje}`,
    });
    track("maker_tip_via_maatje", { bron });
  } catch { /* stil — de chat mag hier nooit op stuklopen */ }
  return schoon || "Ik heb het doorgegeven aan de maker! 🐾";
}
