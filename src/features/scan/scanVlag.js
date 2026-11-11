// 📷 Scan je huiswerk — proefvlag (Mark 11 nov 2026).
// De knop in de onderbalk staat alleen aan op apparaten waar hij is aangezet, zodat we de functie
// eerst zelf met echte bladen kunnen proberen voordat elk kind hem ziet.
//   aanzetten:  leerkwartier.app/scan-huiswerk?scan=1
//   uitzetten:  leerkwartier.app/?scan=0
// Voor iedereen aanzetten = hieronder VOOR_IEDEREEN op true zetten.
const SLEUTEL = "lk_scan_aan";
const VOOR_IEDEREEN = false;

function leesUrl() {
  if (typeof window === "undefined") return;
  try {
    const v = new URLSearchParams(window.location.search).get("scan");
    if (v === "1") localStorage.setItem(SLEUTEL, "1");
    if (v === "0") localStorage.removeItem(SLEUTEL);
  } catch { /* privévenster zonder opslag: dan alleen via de link zelf */ }
}
leesUrl();

export function scanZichtbaar() {
  if (VOOR_IEDEREEN) return true;
  try {
    if (localStorage.getItem(SLEUTEL) === "1") return true;
    return new URLSearchParams(window.location.search).get("scan") === "1";
  } catch { return false; }
}
