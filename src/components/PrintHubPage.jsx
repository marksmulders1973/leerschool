// Print-hub "/printen" — één overzicht van ALLES wat je bij Leerkwartier kunt
// printen (Mark 2026-07-02, uitgebreid 16 aug 2026). Drie lagen, als etalage:
//   1. Gratis — 6 pakketten die gratis blijven (blijft de kern).
//   2. 🔒 Familie — op maat voor jouw kind (oefenboekje op maat, uitleg-kaart,
//      weekschema, diploma). Nu bèta-gratis, hoort straks bij Familie.
//   3. 🔒 Pro — voor de klas (werkblad met eigen logo + klassenset).
// Papier werkt: geen schermtijd-discussie, voelt als school, en de
// antwoordsleutels maken de ouder de bijlesdocent. Elke tegel → eigen pagina.
// Op élke subpagina staat de knop "📄 Opslaan als PDF" naast "🖨️ Printen".

import { useEffect } from "react";
import { BRAND } from "../brand.js";
import { track } from "../utils.js";
import { GratisBadge } from "../subscription/ProBadge.jsx";
import HubSter from "../shared/ui/HubSter.jsx";
import GratisLesmateriaal from "./GratisLesmateriaal.jsx";

// ── Laag 1: gratis, blijft gratis ─────────────────────────────────────
const GRATIS = [
  {
    page: "oefenpakket",
    emoji: "📄",
    titel: "Doorstroomtoets-oefenpakket",
    groep: "groep 7-8",
    tekst: "Compleet oefenwerkboek — rekenen, taal en studievaardigheden in hoofdstukken, met ouder-uitleg en antwoordsleutel. Kies zelf de onderdelen en de omvang.",
    accent: "#42a5f5",
  },
  {
    page: "leesladder",
    emoji: "🪜",
    titel: "De Leesladder — begrijpend lezen",
    groep: "groep 5-8",
    tekst: "Begint bij teksten van 5 zinnen en bouwt in 4 treden op naar echte toets-lengte. Drie versies met elk 15 teksten — na een fout oefen je met verse verhalen verder. Antwoordsleutel legt per vraag de lees-truc uit.",
    accent: "#00C853",
  },
  {
    page: "tafelbladen",
    emoji: "✖️",
    titel: "Tafel-werkbladen + diploma",
    groep: "groep 4-8",
    tekst: "Kies je tafels en print werkbladen (op volgorde, door elkaar, deelsommen), een mix-blad, een 5-minuten-tempo-toets en een invulbaar tafeldiploma. Elke keer verse sommen.",
    accent: "#ffb300",
  },
  {
    page: "redactiebladen",
    emoji: "📝",
    titel: "Redactiesommen-bundel",
    groep: "groep 5-8",
    tekst: "Verhaaltjessommen in Doorstroomtoets-stijl: van signaalwoorden herkennen tot twee-stap-sommen. Met kladruimte per som, ouder-stappenplan en antwoordsleutel met uitleg.",
    accent: "#ab47bc",
  },
  {
    page: "dictees",
    emoji: "🔤",
    titel: "Spelling-dictees",
    groep: "groep 5-8",
    tekst: "Zes voorlees-dictees per spellingregel (ei/ij, au/ou, d/t, bomen/bommen, verkleinwoorden, weetwoorden). Jij leest voor van het ouderblad, je kind schrijft op het invulblad.",
    accent: "#ef5350",
  },
  {
    page: "brugklas",
    emoji: "🎒",
    titel: "Brugklas-oefenbundel",
    groep: "klas 1 havo/vwo",
    tekst: "Toetsweek in de brugklas? Oefenvragen wiskunde, Nederlands en Engels op klas 1-niveau — met kladruimte per vraag en een antwoordsleutel die per vraag de regel uitlegt.",
    accent: "#26c6da",
  },
];

// ── Laag 2: op maat, hoort bij Familie (nu bèta-gratis) ───────────────
const FAMILIE = [
  {
    page: "oefenboekje",
    emoji: "📚",
    titel: "Oefenboekje op maat",
    tekst: "Een persoonlijk boekje, samengesteld uit precies de onderwerpen waar jouw kind nog fouten op maakt — met antwoordsleutel. Op maat, niet 'kies zelf maar iets'.",
    accent: "#ffb300",
  },
  {
    page: "ouderkaart",
    emoji: "🧑‍🏫",
    titel: "Uitleg-kaart voor thuis",
    tekst: "'Zo leg je 't uit'-kaart per onderwerp (breuken, staartdeling, spelling…): waar het over gaat, een zin die je letterlijk kunt zeggen, de veelgemaakte fout. Voor op de koelkast.",
    accent: "#ffb300",
  },
  {
    page: "weekschema",
    emoji: "📅",
    titel: "Koelkast-weekschema",
    tekst: "Een invulbaar weekschema: welk kwartiertje op welke dag. Op de koelkast geeft het rust en regelmaat — de motor onder het kwartier-per-dag.",
    accent: "#ffb300",
  },
  {
    page: "diploma",
    emoji: "🏅",
    titel: "Printbaar diploma",
    tekst: "Een echt diploma op naam als je kind een onderwerp afrondt. Trots aan de muur werkt beter dan welke badge op een scherm ook.",
    accent: "#ffb300",
  },
];

// ── Laag 3: voor de klas, hoort bij Pro ───────────────────────────────
const PRO = [
  {
    page: "werkblad",
    emoji: "🖨️",
    titel: "Klassenset-werkbladen (met je logo)",
    tekst: "Voor leerkrachten: per onderwerp een A4-werkblad (opgaven + antwoordblad) met een QR-code waarmee de klas thuis gratis verder oefent. De losse werkbladen zijn gratis; met Pro zet je je eigen logo erop en print je een hele klassenset.",
    accent: "#26c6da",
  },
];

export default function PrintHubPage({ setPage } = {}) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Gratis printbaar oefenmateriaal (PDF/werkbladen) — " + BRAND.name;
    window.scrollTo(0, 0);
    track("printhub_open");
    return () => { document.title = prevTitle; };
  }, []);

  const kies = (page) => { track("printhub_kies", { pakket: page }); setPage && setPage(page); };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px 16px 80px" }}>
      <button
        onClick={() => setPage && setPage("home")}
        aria-label="Naar de homepage van Leerkwartier"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer", padding: 0, marginBottom: 14 }}
      >
        <svg viewBox="0 0 100 100" style={{ width: 22, height: 22, flexShrink: 0 }} aria-hidden="true">
          <path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" />
        </svg>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--color-text, #e8edf5)" }}>{BRAND.name}</span>
        <span style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>· naar home</span>
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", margin: "0 0 8px" }}>
        <h1 style={{ fontSize: 26, margin: 0, color: "var(--color-text, #e8edf5)" }}>
          🖨️ Alles wat je kunt printen
        </h1>
        <HubSter id="hub:printen" titel="Printbaar oefenen" emoji="🖨️" page="printen" />
      </div>
      <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 22px", lineHeight: 1.55 }}>
        Soms werkt papier gewoon beter: geen scherm, net als op school, en jij kijkt
        samen na. Elke pagina print je thuis — of bewaar je als <strong style={{ color: "var(--color-text, #e8edf5)" }}>PDF</strong>{" "}
        (de knop <em>“📄 Opslaan als PDF”</em> staat op elke pagina naast “Printen”).
      </p>

      {/* ── Laag 1: gratis ─────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 10px" }}>
        <h2 style={{ fontSize: 15, fontWeight: 800, color: "var(--color-text, #e8edf5)", margin: 0 }}>6 gratis printbare pakketten</h2>
        <GratisBadge size="sm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 14 }}>
        {GRATIS.map((p) => (
          <Tegel key={p.page} p={p} onClick={() => kies(p.page)} />
        ))}
      </div>

      {/* 📬 Weekpakket — mail-exclusief printpakket (25 aug): de print-bezoeker
          is precies de doelgroep; de code komt alleen per mail (leadmagnet). */}
      <a
        href="/weekpakket.html"
        onClick={() => track("printhub_weekpakket")}
        style={{
          display: "flex", alignItems: "flex-start", gap: 14, textDecoration: "none",
          background: "rgba(0,200,83,0.08)", border: "1.5px dashed rgba(0,200,83,0.55)",
          borderRadius: 16, padding: "16px 18px", marginBottom: 26,
        }}
      >
        <span aria-hidden="true" style={{ fontSize: 34, flexShrink: 0, lineHeight: 1 }}>📬</span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16.5, color: "#fff", marginBottom: 2 }}>
            Nieuw: het Weekpakket — elke week vers, alleen per mail
            <span style={{ marginLeft: 8, fontSize: 11.5, fontWeight: 700, color: "#69f0ae", border: "1px solid rgba(105,240,174,0.55)", borderRadius: 999, padding: "2px 9px", verticalAlign: "2px" }}>gratis</span>
          </span>
          <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>
            Elke week een nieuw printpakket: rekenen, taal en begrijpend lezen richting de
            Doorstroomtoets, met antwoordblad én een berichtje van de maker. Je krijgt de
            code wekelijks per mail.
          </span>
        </span>
        <span aria-hidden="true" style={{ fontSize: 20, color: "#69f0ae", flexShrink: 0, alignSelf: "center" }}>→</span>
      </a>

      {/* ── Laag 2: Familie ────────────────────────────────────── */}
      <SlotKop kleur="#ffb300" titel="Op maat — met Familie" chip="Familie" />
      <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 12px", fontSize: 13, lineHeight: 1.55 }}>
        Persoonlijk, afgestemd op jóuw kind. Deze horen bij <strong style={{ color: "#ffd54f" }}>Familie</strong> (vanaf 2027).
        Tijdens de bèta kun je ze nu al gratis proberen.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
        {FAMILIE.map((p) => (
          <Tegel key={p.page} p={p} slot chip="Familie" onClick={() => kies(p.page)} />
        ))}
      </div>

      {/* ── Laag 3: Pro ────────────────────────────────────────── */}
      <SlotKop kleur="#26c6da" titel="Voor de klas — met Pro" chip="Pro" />
      <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 12px", fontSize: 13, lineHeight: 1.55 }}>
        Voor leerkrachten. Losse werkbladen zijn gratis; <strong style={{ color: "#4dd0e1" }}>Pro</strong> voegt je eigen logo
        en een hele klassenset toe (vanaf 2027).
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {PRO.map((p) => (
          <Tegel key={p.page} p={p} slot chip="Pro" onClick={() => kies(p.page)} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <a href="/abonnement.html" onClick={() => track("printhub_naar_abonnement")}
          style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13, textDecoration: "underline" }}>
          Wat zit er in Familie &amp; Pro? →
        </a>
      </div>

      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "14px 18px", marginBottom: 18 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: "var(--color-text, #e8edf5)", marginBottom: 6 }}>💡 Print-tips</div>
        <ul style={{ margin: 0, paddingLeft: 18, color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, lineHeight: 1.7 }}>
          <li>Geen printer bij de hand? Kies in het printvenster <em>Opslaan als PDF</em> — dan bewaar je het bestand.</li>
          <li>Print dubbelzijdig — scheelt de helft papier.</li>
          <li>Print alleen de pagina's die je vandaag nodig hebt (elk onderdeel begint op een nieuwe pagina).</li>
          <li>Antwoordsleutels zitten achteraan — die kun je er los bij houden.</li>
        </ul>
      </div>

      {/* Idee #60 (20 aug): print-moment = betrokken ouder of verzorger — rustige
          e-mailvraag, zelfde blok als op de andere succes-momenten. */}
      <div style={{ marginBottom: 18 }}>
        <GratisLesmateriaal source="printhub" compact />
      </div>

      <div style={{ background: "rgba(0,200,83,0.07)", border: "1px solid rgba(0,200,83,0.3)", borderRadius: 14, padding: "14px 18px", marginBottom: 22 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: "var(--color-text, #e8edf5)", marginBottom: 4 }}>💚 Mis je iets?</div>
        <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, lineHeight: 1.6 }}>
          Welk printbaar oefenmateriaal zou jou helpen? Zet het op het{" "}
          <a href="/tips" style={{ color: "#69f0ae" }}>wensenbord</a> — daar lezen we alles.
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, marginBottom: 8 }}>
          Liever online oefenen? Daar krijgt je kind bij elke fout uitleg op 3 niveaus.
        </div>
        <button onClick={() => setPage && setPage("cito")} style={{ padding: "11px 22px", borderRadius: 12, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>
          Naar Doorstroomtoets oefenen →
        </button>
      </div>
    </div>
  );
}

// Kopregel voor een vergrendelde laag: 🔒 + titel + tier-chip.
function SlotKop({ kleur, titel, chip }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 0 4px" }}>
      <span aria-hidden="true" style={{ fontSize: 15 }}>🔒</span>
      <h2 style={{ fontSize: 15, fontWeight: 800, color: "var(--color-text, #e8edf5)", margin: 0 }}>{titel}</h2>
      <span style={{ fontSize: 11, fontWeight: 800, color: kleur, border: `1px solid ${kleur}88`, borderRadius: 999, padding: "2px 9px" }}>{chip}</span>
    </div>
  );
}

// Eén tegel. `slot` = vergrendelde (Familie/Pro) look met een slotje-badge.
function Tegel({ p, onClick, slot = false, chip }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "flex-start", gap: 14, textAlign: "left", cursor: "pointer",
        background: slot ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.05)",
        border: `1.5px solid ${p.accent}${slot ? "33" : "55"}`,
        borderRadius: 16, padding: "16px 18px", width: "100%", position: "relative",
      }}
    >
      <span aria-hidden="true" style={{ fontSize: 34, flexShrink: 0, lineHeight: 1, opacity: slot ? 0.85 : 1 }}>{p.emoji}</span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16.5, color: "#fff", marginBottom: 2 }}>
          {p.titel}
          {p.groep && (
            <span style={{ marginLeft: 8, fontSize: 11.5, fontWeight: 700, color: p.accent, border: `1px solid ${p.accent}88`, borderRadius: 999, padding: "2px 9px", verticalAlign: "2px" }}>{p.groep}</span>
          )}
          {slot && (
            <span style={{ marginLeft: 8, fontSize: 11.5, fontWeight: 800, color: p.accent, border: `1px solid ${p.accent}88`, borderRadius: 999, padding: "2px 9px", verticalAlign: "2px", whiteSpace: "nowrap" }}>🔒 {chip}</span>
          )}
        </span>
        <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>{p.tekst}</span>
      </span>
      <span aria-hidden="true" style={{ fontSize: 20, color: p.accent, flexShrink: 0, alignSelf: "center" }}>→</span>
    </button>
  );
}
