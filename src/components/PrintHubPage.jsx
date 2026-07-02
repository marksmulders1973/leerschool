// Print-hub "/printen" — één overzicht van alles wat je bij Leerkwartier
// gratis kunt printen (Mark 2026-07-02, na het Leesladder-succes: "maak in de
// app duidelijk wat er allemaal printbaar leverbaar is"). Papier werkt: geen
// schermtijd-discussie, voelt als school, en de antwoordsleutels maken de
// ouder de bijlesdocent. Elke tegel → eigen pagina met print-opties.

import { useEffect } from "react";
import { BRAND } from "../brand.js";
import { track } from "../utils.js";

const PAKKETTEN = [
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
    tekst: "Begint bij teksten van 5 zinnen en bouwt in 4 treden op naar echte toets-lengte. 15 teksten, 46 vragen, antwoordsleutel die per vraag de lees-truc uitlegt.",
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
];

export default function PrintHubPage({ setPage } = {}) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Gratis printbaar oefenmateriaal (PDF/werkbladen) — " + BRAND.name;
    window.scrollTo(0, 0);
    track("printhub_open");
    return () => { document.title = prevTitle; };
  }, []);

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

      <h1 style={{ fontSize: 26, margin: "0 0 8px", color: "var(--color-text, #e8edf5)" }}>
        🖨️ Printbaar oefenen — allemaal gratis
      </h1>
      <p style={{ color: "var(--color-text-muted, #8899aa)", margin: "0 0 22px", lineHeight: 1.55 }}>
        Soms werkt papier gewoon beter: geen scherm, net als op school, en jij kijkt
        samen na. Alles hieronder print je thuis gratis — of sla het op als PDF.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {PAKKETTEN.map((p) => (
          <button
            key={p.page}
            onClick={() => { track("printhub_kies", { pakket: p.page }); setPage && setPage(p.page); }}
            style={{
              display: "flex", alignItems: "flex-start", gap: 14, textAlign: "left", cursor: "pointer",
              background: "rgba(255,255,255,0.05)", border: `1.5px solid ${p.accent}55`,
              borderRadius: 16, padding: "16px 18px", width: "100%",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: 34, flexShrink: 0, lineHeight: 1 }}>{p.emoji}</span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16.5, color: "#fff", marginBottom: 2 }}>
                {p.titel}
                <span style={{ marginLeft: 8, fontSize: 11.5, fontWeight: 700, color: p.accent, border: `1px solid ${p.accent}88`, borderRadius: 999, padding: "2px 9px", verticalAlign: "2px" }}>{p.groep}</span>
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>{p.tekst}</span>
            </span>
            <span aria-hidden="true" style={{ fontSize: 20, color: p.accent, flexShrink: 0, alignSelf: "center" }}>→</span>
          </button>
        ))}
      </div>

      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "14px 18px", marginBottom: 18 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: "var(--color-text, #e8edf5)", marginBottom: 6 }}>💡 Print-tips</div>
        <ul style={{ margin: 0, paddingLeft: 18, color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, lineHeight: 1.7 }}>
          <li>Geen printer bij de hand? Kies in het printvenster <em>Opslaan als PDF</em>.</li>
          <li>Print dubbelzijdig — scheelt de helft papier.</li>
          <li>Print alleen de pagina's die je vandaag nodig hebt (elk onderdeel begint op een nieuwe pagina).</li>
          <li>Antwoordsleutels zitten achteraan — die kun je er los bij houden.</li>
        </ul>
      </div>

      <div style={{ background: "rgba(0,200,83,0.07)", border: "1px solid rgba(0,200,83,0.3)", borderRadius: 14, padding: "14px 18px", marginBottom: 22 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: "var(--color-text, #e8edf5)", marginBottom: 4 }}>🔜 Hier werken we aan</div>
        <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 13.5, lineHeight: 1.6 }}>
          Redactiesommen-bundel (verhaaltjessommen) en spelling-dictees. Iets anders op je
          verlanglijstje? Zet het op het{" "}
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
