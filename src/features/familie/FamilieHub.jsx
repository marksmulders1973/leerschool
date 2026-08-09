// ══════════════════════════════════════════════════════════════════════
// Familie-abonnement — publieke bèta-hub (Mark 31 jul 2026; open sinds
// 1 aug: "niet meer geheim, deel-voor-deel live met bèta-label").
//
// Eén plek waar de hele Familie-laag samenkomt. Bereikbaar voor iedereen
// via "✨ Familie-extra's (bèta)" op HomePage + StudentHome. Ook "Leg het
// uit" (LegUit.jsx) is publiek sinds 9 aug (kosten begrensd door dag-quota).
// Zie memory project_studiebol_familie_tier_features.
// ══════════════════════════════════════════════════════════════════════

import { PRO_GRATIS_BASIS } from "../../subscription/proPlan.js";
import { FamiliePill } from "./familieUi.jsx";

// De 8 gekozen Familie-haken (Mark 31 jul). status: 'klaar' | 'bouw'.
const FEATURES = [
  { nr: 1, emoji: "🚦", titel: "Doorstroomtoets-paraatheid", tekst: "In één blik groen/oranje/rood per onderdeel — komt het goed?", status: "klaar", page: "paraatheid" },
  { nr: 3, emoji: "📄", titel: "Oefenboekje op maat", tekst: "Printbaar boekje met precies dat waar je kind moeite mee heeft.", status: "klaar", page: "oefenboekje" },
  { nr: 3.1, emoji: "👪", titel: "Kaart voor thuis — zo leg je 't uit", tekst: "Een spiekbriefje voor de ouder of verzorger: hoe je een onderwerp in gewone woorden uitlegt aan je kind.", status: "klaar", page: "ouderkaart" },
  { nr: 2, emoji: "🐉", titel: "Vonk onbeperkt", tekst: "De AI-bijlesdocent altijd beschikbaar — €37/uur bijles vs €39/jaar.", status: "klaar", page: "vonk" },
  { nr: 4, emoji: "✉️", titel: "Weekmail 2.0", tekst: "Zit nu in je maandag-weekmail: van cijfer naar to-do — 'focus deze week op breuken, hier is de kaart voor thuis'.", status: "klaar" },
  { nr: 5, emoji: "📅", titel: "Koelkast-weekschema", tekst: "Afvinkbaar weekschema van een kwartier per dag — print en hang op de koelkast.", status: "klaar", page: "weekschema" },
  { nr: 6, emoji: "🎉", titel: "Trots-momenten", tekst: "Een positief seintje bij mijlpalen — verschijnt vanzelf tijdens het oefenen.", status: "klaar", page: "trots" },
  { nr: 7, emoji: "👨‍👩‍👧", titel: "Gezin — tot 3 kinderen", tekst: "Koppel tot 3 kinderen op één account — elk een eigen overzicht, samen oefenen.", status: "klaar", page: "ouder-dashboard" },
  { nr: 8, emoji: "🏅", titel: "Printbaar diploma", tekst: "Een certificaat bij het afronden van een onderwerp — kind blij, en jij trots.", status: "klaar", page: "diploma" },
];

export default function FamilieHub({ setPage }) {
  const klaar = FEATURES.filter((f) => f.status === "klaar").length;
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "18px 16px 60px" }}>
        <button onClick={() => setPage && setPage("home")} style={linkBtn}>← terug</button>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 900, margin: 0 }}>
            👨‍👩‍👧 Familie-abonnement
          </h1>
          <FamiliePill />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>
bèta
          </span>
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>
          De Familie-laag voor ouders en verzorgers — nu gratis om uit te proberen. Alles wat vandaag gratis is, blíjft gratis; dit komt er als
          extra bovenop. Prijsanker: <i>oefenboek €30, bijles €37/uur → Familie €39 per jaar voor het hele gezin.</i>
        </p>
        <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", marginBottom: 14 }}>
          {klaar} van {FEATURES.length} onderdelen klaar.{klaar < FEATURES.length ? " De rest komt binnenkort." : " Alles staat live om uit te proberen."}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[...FEATURES].sort((a, b) => a.nr - b.nr).map((f) => {
            const klaar = f.status === "klaar";
            const clickable = klaar && !!f.page;
            return (
              <button
                key={f.nr}
                onClick={() => clickable && setPage && setPage(f.page)}
                disabled={!clickable}
                style={{
                  textAlign: "left", cursor: klaar ? "pointer" : "default",
                  padding: "14px 16px", borderRadius: 14,
                  background: klaar ? "rgba(105,240,174,0.06)" : "rgba(255,255,255,0.03)",
                  border: klaar ? "1px solid rgba(105,240,174,0.35)" : "1px solid rgba(255,255,255,0.08)",
                  color: "inherit", width: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800 }}>
                    {f.emoji} {f.titel}
                  </div>
                  <span style={{ fontSize: 11.5, fontWeight: 800, padding: "3px 9px", borderRadius: 20, whiteSpace: "nowrap",
                    background: klaar ? "rgba(105,240,174,0.16)" : "rgba(255,255,255,0.07)",
                    color: klaar ? "#69f0ae" : "#8899aa" }}>
                    {clickable ? "▶ bekijk" : klaar ? "✓ actief" : "binnenkort"}
                  </span>
                </div>
                <div style={{ marginTop: 4, fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.5 }}>{f.tekst}</div>
              </button>
            );
          })}
        </div>

        {/* Contrast-blok (Mark 9 aug 2026): je ziet pas wat Familie waard is
            als je óók ziet wat er sowieso gratis blijft. Groen = gratis,
            goud = Familie — zelfde kleurtaal als de tier-badges. */}
        <div style={{ marginTop: 18, padding: "14px 16px", borderRadius: 14, border: "1px solid rgba(105,240,174,0.3)", background: "rgba(105,240,174,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#69f0ae", marginBottom: 8 }}>
            <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "#69f0ae" }} />
            En dit blijft gewoon gratis — ook zonder Familie
          </div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.7, color: "var(--color-text-muted, #9aa4c7)" }}>
            {PRO_GRATIS_BASIS.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>

        <div style={{ marginTop: 20, fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
          ✨ Bèta — gratis om uit te proberen. We verbeteren dit nog; straks onderdeel van het Familie-abonnement.
        </div>
      </div>
    </div>
  );
}

const linkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };
