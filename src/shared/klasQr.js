// 📱 QR-hoek op /klas (Mark 25 sep 2026: "in elke hoek een QR-code bij klas, zodat kinderen
// die kunnen scannen voor thuis, en dat per klas"). Het digibord krijgt één keer een eigen
// klas-nummer (localStorage, geen account); dat nummer zit in de QR. Scant een kind thuis,
// dan landt het in het start-kwartier van dezelfde groep en tellen we per klas hoeveel
// kinderen thuis verder gingen (events klas_qr_getoond → klas_qr_thuis, beide met `k`).

const KLAS_ID_KEY = "lk_klas_id";
const VAN_KLAS_KEY = "lk_van_klas";
const TEKENS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // geen 0/O/1/I: leesbaar voor mensen

export function klasId() {
  try {
    let id = localStorage.getItem(KLAS_ID_KEY);
    if (!id) {
      id = Array.from({ length: 5 }, () => TEKENS[Math.floor(Math.random() * TEKENS.length)]).join("");
      localStorage.setItem(KLAS_ID_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
}

export function thuisLink(groep) {
  const k = klasId();
  return `https://leerkwartier.app/start?g=${groep}${k ? `&k=${k}` : ""}&utm_source=klas-qr`;
}

// Bij het openen van de app: kwam dit apparaat binnen via een klas-QR? Dan één keer tellen
// en onthouden van welke klas (voor latere per-klas-cijfers). Geeft de groep terug (of null).
export function noteerKlasQrBezoek(track) {
  try {
    const p = new URLSearchParams(window.location.search);
    const k = (p.get("k") || "").toUpperCase();
    if (!/^[A-Z0-9]{4,8}$/.test(k)) return null;
    const g = parseInt(p.get("g"), 10);
    const groep = [6, 7, 8].includes(g) ? g : null;
    if (localStorage.getItem(VAN_KLAS_KEY) !== k) {
      localStorage.setItem(VAN_KLAS_KEY, k);
      track("klas_qr_thuis", { k, groep });
    }
    return groep;
  } catch {
    return null;
  }
}
