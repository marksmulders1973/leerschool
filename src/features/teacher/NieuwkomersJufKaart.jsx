// 🌍 Startpunt voor nieuwkomers in de leerkrachten-omgeving (3 okt 2026, Mark: "ook de code moet
// daar komen zodat de leerlingen kunnen inloggen. evt een qr code?"). Nieuwkomers hebben geen
// account nodig: de juf brengt ze met de code WELKOMNIEUWKOMER (code-balk op de startpagina) of met
// een QR naar /nieuwkomers. "Toon groot" = de hele klas scant tegelijk vanaf het digibord.
// via=qr-juf / qr-digibord komt terug in het event nieuwkomers_open {via}.
import { useEffect, useState } from "react";
import { track } from "../../utils.js";

const CODE = "WELKOMNIEUWKOMER";
const LINK = "https://leerkwartier.app/nieuwkomers";

function useQr(url, width) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    let weg = false;
    import("qrcode")
      .then((QR) => QR.toDataURL(url, { margin: 1, width, color: { dark: "#0f2a44", light: "#ffffff" } }))
      .then((d) => { if (!weg) setSrc(d); })
      .catch(() => { /* geen QR = code + adres blijven bruikbaar */ });
    return () => { weg = true; };
  }, [url, width]);
  return src;
}

export default function NieuwkomersJufKaart() {
  const [groot, setGroot] = useState(false);
  const qrKlein = useQr(`${LINK}?via=qr-juf`, 220);
  const qrGroot = useQr(`${LINK}?via=qr-digibord`, 900);

  useEffect(() => {
    if (!groot) return undefined;
    const esc = (e) => { if (e.key === "Escape") setGroot(false); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [groot]);

  const knop = { padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(255,183,77,0.5)", background: "rgba(255,183,77,0.12)", color: "#ffcc80", fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 800, cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap" };

  return (
    <div style={{ marginBottom: 16, padding: "12px 14px", borderRadius: 14, background: "rgba(255,183,77,0.07)", border: "1px solid rgba(255,183,77,0.35)" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "#ffcc80" }}>🌍 Nieuwkomers in de klas?</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.45, marginTop: 2 }}>
            Eerste Nederlandse woorden en klaszinnen, met voorlezen en steun in zes talen. Gratis, en leerlingen hebben geen account nodig.
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.5 }}>
            Laat je leerling naar <b>leerkwartier.app</b> gaan en deze code typen:
          </div>
          <div style={{ display: "inline-block", marginTop: 4, padding: "4px 10px", borderRadius: 8, background: "#fff", color: "#0f2a44", fontFamily: "ui-monospace, monospace", fontSize: 15, fontWeight: 900, letterSpacing: 1 }}>{CODE}</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>Of laat de QR-code scannen.</div>
        </div>
        {qrKlein && <img src={qrKlein} alt="QR-code naar het startpunt voor nieuwkomers" width={96} height={96} style={{ width: 96, height: 96, borderRadius: 8, background: "#fff", flex: "none" }} />}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
        <button type="button" style={knop} onClick={() => { try { track("juf_nk_digibord"); } catch { /* */ } setGroot(true); }}>📺 Toon groot op het digibord</button>
        <a href="/nieuwkomers" style={knop} onClick={() => { try { track("juf_naar_nieuwkomers", { plek: "teacher-home" }); } catch { /* */ } }}>Open het startpunt →</a>
        <a href="/drukwerk/nieuwkomers-thuisbrief.html" target="_blank" rel="noopener" style={knop} onClick={() => { try { track("nk_thuisbrief_open", { via: "teacher-home" }); } catch { /* */ } }}>🖨️ Briefje voor thuis</a>
      </div>

      {groot && (
        <div role="dialog" aria-modal="true" aria-label="Startpunt voor nieuwkomers" onClick={() => setGroot(false)}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#fff", color: "#0f2a44", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2vh", padding: 20, textAlign: "center", fontFamily: "system-ui" }}>
          <button type="button" onClick={() => setGroot(false)} aria-label="Sluiten"
            style={{ position: "absolute", top: 16, right: 16, width: 52, height: 52, borderRadius: 999, border: "none", background: "#0f2a44", color: "#fff", fontSize: 26, cursor: "pointer" }}>✕</button>
          <div style={{ fontSize: "clamp(22px, 3.6vw, 44px)", fontWeight: 900 }}>🌍 Leerkwartier, het startpunt voor nieuwkomers</div>
          {qrGroot && <img src={qrGroot} alt="QR-code naar het startpunt voor nieuwkomers" style={{ width: "min(46vh, 80vw)", height: "min(46vh, 80vw)" }} />}
          <div style={{ fontSize: "clamp(18px, 2.6vw, 30px)", fontWeight: 700 }}>Scan de code. Of ga naar <b>leerkwartier.app</b> en typ:</div>
          <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "clamp(30px, 6vw, 76px)", fontWeight: 900, letterSpacing: 3, background: "#fff4cc", borderRadius: 16, padding: "6px 22px" }}>{CODE}</div>
        </div>
      )}
    </div>
  );
}
