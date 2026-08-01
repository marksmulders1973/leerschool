// ══════════════════════════════════════════════════════════════════════
// Vonk onbeperkt — Familie-feature 2 (Mark 1 aug 2026), bèta-live.
//
// Vonk (de AI-bijlesdocent / buddy-tutor) is al gebouwd en zit in het leren.
// Deze pagina is de eerlijke FRAMING als Familie-troef: wat Vonk doet, het
// prijsanker (bijles €37/uur vs Familie €39/jaar), en waar je kind het vindt.
// Rustige, geruststellende toon (concurrenten maken bang — wij stellen gerust).
// GEEN AI-plumbing hier; puur uitleg. Zie memory project_studiebol_familie_tier_features.
// ══════════════════════════════════════════════════════════════════════
import { FamilieKop, FamilieMeer } from "./familieUi.jsx";

export default function VonkPagina({ setPage }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "18px 16px 60px" }}>
        <FamilieKop
          setPage={setPage}
          titel="🐉 Vonk — de bijlesdocent in je broekzak"
          intro={<>Vonk is de rustige AI-bijlesdocent van je kind. Loopt je kind vast op een som of een tekst, dan vraagt het gewoon <i>"ik snap het niet"</i> — en Vonk legt het stap voor stap uit, op het niveau van je kind. Precies op het moment dat het vastloopt, zonder oordeel.</>}
        />

        {/* Prijs-anker */}
        <div style={{ background: "rgba(105,240,174,0.07)", border: "1px solid rgba(105,240,174,0.4)", borderRadius: 12, padding: "14px 16px", margin: "18px 0" }}>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: "#69f0ae", marginBottom: 6 }}>💶 Wat het waard is</div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-text-muted, #cbd3e6)", margin: 0 }}>
            Een echte bijles kost al gauw <b>€37 per uur</b>. In <b>Leerkwartier Familie</b> zit Vonk straks onbeperkt —
            voor het héle gezin, voor ± <b>€39 per jaar</b>. <b style={{ color: "#fff" }}>Nu gratis om te proberen</b>
            (tot 2027).
          </p>
        </div>

        {/* Waar vind je het */}
        <div style={{ fontSize: 15, lineHeight: 1.65, color: "var(--color-text-muted, #cbd3e6)" }}>
          <div style={{ fontWeight: 800, color: "#fff", margin: "6px 0 4px", fontSize: 15.5 }}>🔎 Waar vindt je kind Vonk?</div>
          Je kind komt Vonk <b>vanzelf tegen tijdens het leren</b> — klik in een leerpad op de hulp-knop en stel je vraag.
          Tijdens een <b>toets</b> is Vonk er bewust niet: dan laat je kind zélf zien wat het kan.
        </div>

        {/* Geruststelling */}
        <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-text-muted, #9fb0c6)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "12px 14px", margin: "18px 0" }}>
          💙 Vonk vervangt jou als ouder of verzorger niet — het geeft je kind een steuntje op het juiste moment, zodat
          jij niet de hele avond naast het huiswerk hoeft te zitten. En het geeft nooit zomaar het antwoord: het helpt
          je kind om het zélf te snappen.
        </div>

        <a href="/leren" style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg,#00c853,#00a846)", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 15.5, padding: "13px", borderRadius: 12, marginTop: 8 }}>
          🐉 Begin met leren — en ontmoet Vonk →
        </a>

        <div style={{ marginTop: 20, fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.55 }}>
          ✨ Bèta — Vonk is nu gratis te gebruiken. AI-bijles kost ons wél geld, dus straks hoort onbeperkt gebruik bij
          het Familie-abonnement; een klein gratis-tegoed blijft voor iedereen.
        </div>
      </div>
      <FamilieMeer setPage={setPage} huidig="vonk" />
    </div>
  );
}
