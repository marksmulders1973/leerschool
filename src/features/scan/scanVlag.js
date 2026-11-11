// 📷 Scan je huiswerk — proefvlag (Mark 11 nov 2026).
// Begon als proef op apparaten waar hij was aangezet; staat sinds de avond van 11 nov voor iedereen aan.
// De schakelaar blijft: VOOR_IEDEREEN op false zet de knop in één regel terug naar "alleen met de link".
//   aanzetten:  leerkwartier.app/scan-huiswerk?scan=1
//   uitzetten:  leerkwartier.app/?scan=0
// Voor iedereen aanzetten = hieronder VOOR_IEDEREEN op true zetten.
const SLEUTEL = "lk_scan_aan";
const VOOR_IEDEREEN = true; // 11 nov 2026 (Mark): knop voor iedereen, vier gratis proefscans, daarna het Familie-pakket

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
