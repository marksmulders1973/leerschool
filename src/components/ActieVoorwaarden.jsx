import { useState, useEffect } from "react";
import supabase from "../supabase.js";
import { track, getMyRefCode } from "../utils.js";

// "Deel & win"-actiepagina (/actie). Mark-go 2026-06-05.
// Deel een oefenvraag met je eigen ref-link; voor elke vriend die zich
// aanmeldt voor de gratis-lesmateriaal-mail maak je kans op een gratis
// Familie-jaar 2027. Wettelijk conform de Gedragscode Promotionele Kansspelen:
// gratis deelname, duidelijke actieperiode, loting, voorwaarden zichtbaar,
// organisator vermeld, prijswaarde < €449 (geen kansspelbelasting).
//
// Props: onBack?, onHome?
export default function ActieVoorwaarden({ onBack, onHome, onDank }) {
  const [code] = useState(getMyRefCode);
  const [aantal, setAantal] = useState(null);
  const [gekopieerd, setGekopieerd] = useState(false);
  // 🤝 Deel-actie 2027 (Mark 29 jul): resterende weggeef-plekken live tonen.
  const [plekken, setPlekken] = useState(null);

  const deelLink = `https://leerkwartier.app/?ref=${code}`;
  const deelTekst = `Ik oefen met Leerkwartier voor de Doorstroomtoets — gratis, met uitleg op 3 niveaus. Probeer het ook: ${deelLink}`;

  useEffect(() => {
    track("actie_view", {});
    let actief = true;
    supabase.rpc("get_ref_count", { code }).then(({ data }) => {
      if (actief && typeof data === "number") setAantal(data);
    }).catch(() => {});
    supabase.rpc("deel_actie_stand").then(({ data }) => {
      if (actief && typeof data === "number") setPlekken(data);
    }).catch(() => {});
    return () => { actief = false; };
  }, [code]);

  const kopieer = async () => {
    try {
      await navigator.clipboard.writeText(deelLink);
      setGekopieerd(true);
      track("actie_kopieer", {});
      setTimeout(() => setGekopieerd(false), 2000);
    } catch { /* clipboard geweigerd */ }
  };

  const deelNatief = async () => {
    track("actie_deel", { via: "native" });
    try {
      if (navigator.share) {
        await navigator.share({ title: "Leerkwartier — deel & win", text: deelTekst, url: deelLink });
      } else {
        kopieer();
      }
    } catch { /* gebruiker annuleerde */ }
  };

  const waUrl = `https://wa.me/?text=${encodeURIComponent(deelTekst)}`;

  const card = {
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16, padding: "18px 20px", marginBottom: 16,
  };
  const knop = {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, cursor: "pointer",
    border: "none", borderRadius: 12, padding: "12px 16px", color: "#fff",
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  };

  return (
    <div style={{ minHeight: "100dvh", background: "var(--bg, #0d1117)", color: "#fff", padding: "16px 16px 48px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <button
          onClick={onBack || onHome}
          style={{ ...knop, background: "rgba(255,255,255,0.08)", padding: "8px 12px", fontSize: 14, marginBottom: 16 }}
        >← Terug</button>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, margin: "0 0 6px", lineHeight: 1.15 }}>
          🤝 Deel Leerkwartier — geef Familie gratis weg
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.85)", marginTop: 0 }}>
          Leerkwartier is en blijft gratis. Help je het verder verspreiden? Delen wordt
          dubbel beloond: je geeft een ander gezin iets, én je maakt zelf kans op een prijs.
        </p>

        {/* 🤝 Weggeef-actie: beide gezinnen Familie gratis tot aug 2027 */}
        <div style={{ ...card, border: "1px solid rgba(0,200,83,0.35)", background: "rgba(0,200,83,0.07)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 6, color: "#69f0ae" }}>
            {plekken !== null && plekken > 0
              ? `Nog ${plekken} van 50 plekken: Familie gratis tot 2027`
              : plekken !== null
                ? "Alle 50 weggeef-plekken zijn vergeven"
                : "50 plekken: Familie gratis tot 2027"}
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", margin: 0 }}>
            Ben je ingelogd als ouder? Dan heb je een persoonlijke gezins-link. Zodra iemand
            via die link écht oefent (3 vragen), krijgen <strong style={{ color: "#fff" }}>jullie allebei</strong> Leerkwartier
            Familie gratis tot augustus 2027.{" "}
            <a href="/ouder" style={{ color: "#69f0ae", fontWeight: 700 }}>Haal je gezins-link op in het ouder-dashboard →</a>
          </p>
        </div>

        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.75)", marginTop: 0 }}>
          📣 <strong>Ook zonder account meedoen?</strong> Deel de link hieronder. Voor elke vriend of
          ouder die zich via jouw link aanmeldt voor de gratis wekelijkse oefenmail, maak je kans op
          een <strong>gratis Familie-jaar in 2027</strong> (mét extra AI-bijles-tegoed).
        </p>

        <div style={card}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
            JOUW PERSOONLIJKE DEEL-LINK
          </div>
          <div style={{
            fontFamily: "var(--font-mono, monospace)", fontSize: 14, background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "10px 12px",
            wordBreak: "break-all", marginBottom: 12,
          }}>{deelLink}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <button onClick={kopieer} style={{ ...knop, background: gekopieerd ? "#00c853" : "var(--accent, #7c4dff)" }}>
              {gekopieerd ? "✓ Gekopieerd!" : "🔗 Kopieer link"}
            </button>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
               onClick={() => track("actie_deel", { via: "whatsapp" })}
               style={{ ...knop, background: "#25D366", textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207z"/></svg>
              WhatsApp
            </a>
            <button onClick={deelNatief} style={{ ...knop, background: "rgba(255,255,255,0.12)" }}>
              📤 Delen
            </button>
          </div>
          {typeof aantal === "number" && (
            <div style={{ marginTop: 14, fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
              👥 Tot nu toe via jouw link aangemeld: <strong>{aantal}</strong>
            </div>
          )}
        </div>

        {onDank && (
          <button onClick={onDank} style={{ ...card, width: "100%", textAlign: "left", cursor: "pointer", color: "#fff", border: "1px solid rgba(255,213,79,0.35)", background: "rgba(255,213,79,0.08)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, marginBottom: 2 }}>
              💛 Iedereen die deelt komt op onze bedankmuur
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.75)" }}>
              Gegarandeerd vermeld — bovenop je win-kans. Bekijk de muur &amp; zet je naam erop →
            </div>
          </button>
        )}

        <details style={{ ...card, marginBottom: 24 }}>
          <summary style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
            Actievoorwaarden
          </summary>
          <ul style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", paddingLeft: 18, marginTop: 12 }}>
            <li><strong>Organisator:</strong> Mark Smulders, Leerkwartier (leerkwartier.app).</li>
            <li><strong>Deelname is gratis</strong> en zonder aankoopverplichting.</li>
            <li><strong>Hoe meedoen:</strong> deel je persoonlijke link. Elke nieuwe aanmelding voor de gratis oefenmail via jouw link = één lot.</li>
            <li><strong>Actieperiode:</strong> tot en met 31 december 2026.</li>
            <li><strong>Prijs:</strong> één gratis Leerkwartier Familie-jaar 2027 + 10 uur AI-bijles-kwartier-tegoed (totale waarde onder € 100).</li>
            <li><strong>Trekking:</strong> de winnaar wordt na afloop willekeurig geloot uit alle loten en persoonlijk via e-mail bericht.</li>
            <li><strong>Privacy:</strong> we bewaren alleen een anonieme deel-code en de aanmeldingen — geen extra persoonsgegevens van wie deelt.</li>
            <li>Deelname betekent akkoord met deze voorwaarden. Vragen? Via de tips-pagina in de app.</li>
          </ul>
        </details>

        <button onClick={onHome || onBack} style={{ ...knop, background: "var(--accent, #7c4dff)", width: "100%", padding: "14px" }}>
          Naar Leerkwartier →
        </button>
      </div>
    </div>
  );
}
