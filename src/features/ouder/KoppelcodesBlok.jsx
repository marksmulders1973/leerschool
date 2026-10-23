// 🔑 Blok "Koppelcodes" bovenaan het ouder-dashboard (Mark 14 okt 2026).
//
// Vraag eerst "Hoeveel kinderen wil je koppelen?" → 1/2/3 → meteen zoveel
// codes. Die blijven hier staan tot een kind ze gebruikt (dan wordt het een
// kind-kaart) of de ouder ze wist. Het kind kijkt mee op de telefoon van de
// ouder en typt de code op het eigen toestel in op leerkwartier.app/koppelen.
// Presentatie-component: alle server-werk zit in OuderInzicht.
import { useEffect, useState } from "react";
import { BRAND } from "../../brand.js";
import { MAX_CODES, koppelLink } from "./koppelcodes.js";
import { track } from "../../utils.js";

// 🩺 Koppelhulp ouder-kant (Mark 23 okt 2026). Meting: twee echte ouders maakten elk 3 codes,
// en geen enkele werd ingetypt. Daarom: (1) een QR-code — zit het kind naast je, dan scant het
// de code met de camera en hoeft het niets over te typen; (2) hoe lang de code al wacht, met
// een duwtje als hij na een dag nog niet gebruikt is.
function dagenGeleden(iso) {
  const t = new Date(iso || "").getTime();
  if (!t) return null;
  return Math.max(0, Math.floor((Date.now() - t) / 86400000));
}
function wachtTekst(d) {
  if (d === null) return "wacht op een kind";
  if (d === 0) return "gemaakt vandaag · wacht op een kind";
  return `${d === 1 ? "1 dag" : `${d} dagen`} niet gebruikt`;
}
function CodeQr({ code }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    let levend = true;
    import("qrcode")
      .then((QR) => QR.toDataURL(koppelLink(code), { margin: 1, width: 220, color: { dark: "#111111", light: "#ffffff" } }))
      .then((u) => { if (levend) setUrl(u); })
      .catch(() => { /* geen QR: de code zelf staat er nog */ });
    return () => { levend = false; };
  }, [code]);
  if (!url) return <div style={{ ...F.sub, fontSize: 12, textAlign: "center", padding: 12 }}>QR-code maken…</div>;
  return (
    <div data-koppel-qr={code} style={{ margin: "10px auto 0", width: 196, padding: 10, borderRadius: 12, background: "#fff", textAlign: "center", color: "#111" }}>
      <img src={url} alt={`QR-code voor koppelcode ${code}`} width={176} height={176} style={{ display: "block", margin: "0 auto" }} />
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.35, marginTop: 6 }}>Scan met de camera van je kind. De code staat dan al ingevuld.</div>
    </div>
  );
}

const F = {
  kop: { fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 8 },
  sub: { fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 },
  knop: (extra) => ({ padding: "9px 12px", borderRadius: 10, fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: "#fff", ...extra }),
};

export default function KoppelcodesBlok({ codes = [], aantalKinderen = 0, over = MAX_CODES, bezig = false, copiedCode = "", onMaak, onWis, onWhatsApp, onKopieer, onKindHier }) {
  const [wisVraag, setWisVraag] = useState(null); // id van de code waarvoor "echt wissen?" openstaat
  const [qrOpen, setQrOpen] = useState(null); // code waarvan de QR openstaat
  const leeg = codes.length === 0 && aantalKinderen === 0;

  return (
    <div data-koppelcodes style={{ borderRadius: 16, border: "1px solid rgba(0,176,255,0.35)", background: "rgba(0,176,255,0.06)", padding: 16 }}>
      <div style={F.kop}>Koppelcodes</div>

      {leeg ? (
        <>
          <div style={{ ...F.sub, color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Hoeveel kinderen wil je koppelen?</div>
          <div style={{ ...F.sub, marginBottom: 10 }}>Je krijgt meteen een code per kind. Die blijft hier staan tot je kind 'm gebruikt.</div>
          <div style={{ display: "flex", gap: 8 }}>
            {[1, 2, 3].map((n) => (
              <button key={n} type="button" disabled={bezig} onClick={() => onMaak?.(n)} data-maak-codes={n}
                style={{ flex: 1, padding: "14px 0", borderRadius: 12, border: "none", background: "#00b0ff", color: "#08121f", fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, cursor: bezig ? "default" : "pointer", opacity: bezig ? 0.6 : 1 }}>
                {n}
              </button>
            ))}
          </div>
        </>
      ) : codes.length > 0 ? (
        <div style={{ ...F.sub, marginBottom: 10 }}>
          <strong style={{ color: "rgba(255,255,255,0.85)" }}>Laat je kind deze code zien.</strong> Op zijn of haar eigen telefoon of tablet: ga naar <strong style={{ color: "#00b0ff" }}>{BRAND.domain}/koppelen</strong>, typ de code, kies je naam — klaar. De code werkt één keer en verloopt niet.
        </div>
      ) : null}

      {codes.map((iv, i) => (
        <div key={iv.id} data-koppelcode={iv.code} style={{ marginTop: 10, padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <span style={{ ...F.sub, fontSize: 12 }} data-code-wacht={dagenGeleden(iv.created_at) ?? ""}>Code {i + 1}{codes.length > 1 ? ` van ${codes.length}` : ""} · {wachtTekst(dagenGeleden(iv.created_at))}</span>
            {wisVraag === iv.id ? (
              <span style={{ display: "flex", gap: 6 }}>
                <button type="button" onClick={() => { setWisVraag(null); onWis?.(iv.id); }} style={F.knop({ padding: "5px 9px", fontSize: 11.5, background: "rgba(255,112,67,0.18)", border: "1px solid rgba(255,112,67,0.6)", color: "#ffab91" })}>Ja, wissen</button>
                <button type="button" onClick={() => setWisVraag(null)} style={F.knop({ padding: "5px 9px", fontSize: 11.5 })}>Nee</button>
              </span>
            ) : (
              <button type="button" onClick={() => setWisVraag(iv.id)} aria-label={`Code ${iv.code} wissen`} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)", fontSize: 12, cursor: "pointer", padding: "4px 6px" }}>wissen</button>
            )}
          </div>
          <div style={{ textAlign: "center", padding: "8px 0 10px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 700, color: "#00b0ff", letterSpacing: 7 }}>{iv.code}</div>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button type="button" onClick={() => onWhatsApp?.(iv.code)} style={F.knop({ flex: "1 1 110px", border: "none", background: "#25D366", color: "#08121f" })}>Stuur via WhatsApp</button>
            <button type="button" onClick={() => onKopieer?.(koppelLink(iv.code))} style={F.knop({ flex: "1 1 110px", background: copiedCode === koppelLink(iv.code) ? "rgba(105,240,174,0.14)" : "rgba(255,255,255,0.05)", color: copiedCode === koppelLink(iv.code) ? "#69f0ae" : "#fff" })}>
              {copiedCode === koppelLink(iv.code) ? "✓ Link gekopieerd" : "Kopieer link"}
            </button>
            <button type="button" data-toon-qr={iv.code} onClick={() => { const open = qrOpen === iv.code ? null : iv.code; setQrOpen(open); if (open) { try { track("koppel_qr_open", {}); } catch { /* */ } } }}
              style={F.knop({ flex: "1 1 100%", background: qrOpen === iv.code ? "rgba(0,176,255,0.14)" : "rgba(255,255,255,0.05)" })}>
              {qrOpen === iv.code ? "QR-code verbergen" : "Zit je kind naast je? Toon QR-code"}
            </button>
          </div>
          {qrOpen === iv.code && <CodeQr code={iv.code} />}
          {(dagenGeleden(iv.created_at) ?? 0) >= 1 && (
            <div data-code-duwtje style={{ ...F.sub, fontSize: 12.5, marginTop: 10, padding: "8px 10px", borderRadius: 10, background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.35)", color: "rgba(255,255,255,0.85)" }}>
              Nog niet gebruikt. Het makkelijkst: stuur de link via WhatsApp naar de telefoon of tablet waar je kind op oefent. Eén tik en de code staat al ingevuld. Zit je kind naast je, laat het dan de QR-code scannen.
            </div>
          )}
        </div>
      ))}

      {!leeg && over > 0 && (
        <div style={{ marginTop: 10 }}>
          <button type="button" disabled={bezig} onClick={() => onMaak?.(1)} data-maak-codes="extra" style={F.knop({ width: "100%", background: "rgba(0,176,255,0.12)", border: "1px solid rgba(0,176,255,0.45)", color: "#00b0ff" })}>
            + Nog een code (voor een {aantalKinderen + codes.length > 0 ? "volgend" : ""} kind)
          </button>
        </div>
      )}

      <div style={{ ...F.sub, fontSize: 12, marginTop: 12, display: "flex", flexDirection: "column", gap: 4 }}>
        <span>Oefent je kind op <strong>déze</strong> telefoon? Dan is geen code nodig — <button type="button" onClick={onKindHier} style={{ background: "none", border: "none", padding: 0, color: "#00b0ff", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>voeg je kind hier toe</button>.</span>
        <span>Lukt het niet? <a href="/koppelen" style={{ color: "#00b0ff", fontWeight: 700 }}>Stap voor stap uitgelegd →</a></span>
      </div>
    </div>
  );
}
