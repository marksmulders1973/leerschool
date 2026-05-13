// VraagUitlegPad — dynamisch uitleg-paneel per examenvraag
// Pilot 2026-05-10 (Mark wens, blauwdruk economie):
// Toont 6 uitleg-elementen voor 1 vraag: stappen, woorden, theorie,
// voorbeelden, basiskennis, 3 niveaus van uitleg.
//
// Gebruikt op 2 plekken in LearnPath:
// - Knop "❓ Ik begrijp de vraag niet" (vóór antwoord)
// - Knop "📚 Hier is de uitleg" (na fout antwoord)
//
// Adaptiviteit (pilot): leerling-fouten per vraag in localStorage.
// Bij ≥2 fouten op zelfde vraag start uitleg automatisch op niveau "simpeler".
// Knop "Nog simpeler" toont niveau "nogSimpeler".

import { useEffect, useMemo, useState } from "react";
import MdInline from "../../shared/ui/MdInline.jsx";

const STORE_KEY = "lk_vraag_fouten_v1";

export function getVraagFouten(vraagId) {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return 0;
    return JSON.parse(raw)[vraagId] || 0;
  } catch {
    return 0;
  }
}

export function bumpVraagFouten(vraagId) {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    data[vraagId] = (data[vraagId] || 0) + 1;
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
    return data[vraagId];
  } catch {
    return 0;
  }
}

export default function VraagUitlegPad({ uitlegPad, vraagId, onClose, defaultNiveau = "basis" }) {
  if (!uitlegPad) return null;

  const fouten = useMemo(() => (vraagId ? getVraagFouten(vraagId) : 0), [vraagId]);
  const initieelNiveau = fouten >= 2 ? "simpeler" : defaultNiveau;
  const [niveau, setNiveau] = useState(initieelNiveau);

  // 1 keer per open scherm naar boven scrollen
  useEffect(() => {
    const el = document.getElementById("vraag-uitleg-pad");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const niveauTekst = uitlegPad.niveaus?.[niveau] || uitlegPad.niveaus?.basis;

  return (
    <div
      id="vraag-uitleg-pad"
      style={{
        marginTop: 14,
        padding: 16,
        background: "rgba(66,165,245,0.06)",
        border: "1.5px solid rgba(66,165,245,0.40)",
        borderRadius: 12,
        color: "var(--color-text)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#5db3ff", fontFamily: "var(--font-display)" }}>
          📚 Uitlegpad bij deze vraag
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              padding: "10px 14px",
              background: "transparent",
              color: "var(--color-text-soft)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 12,
              minHeight: 44, // A5: tap-target
              minWidth: 60,
            }}
          >
            sluit
          </button>
        )}
      </div>

      {fouten > 0 && (
        <div style={{
          marginBottom: 12,
          padding: "8px 12px",
          background: "rgba(255,213,79,0.10)",
          border: "1px solid rgba(255,213,79,0.30)",
          borderRadius: 8,
          fontSize: 12,
          color: "#ffd54f",
        }}>
          {fouten === 1
            ? "Je had deze vraag 1 keer fout. We leggen het stap voor stap uit."
            : `Je had deze vraag ${fouten} keer fout. We starten met de simpelere uitleg.`}
        </div>
      )}

      {/* NIVEAU-UITLEG — default DICHT om antwoord-verklap te vermijden.
          niveaus.basis is in veel paden letterlijk het antwoord ("9.", "Ja.")
          en zou de leerling van denken weghouden. Audit 2026-05-13 QW1. */}
      {niveauTekst && (
        <Section title="💡 Korte uitleg" defaultOpen={false}>
          <div style={{ lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
            <MdInline text={niveauTekst} />
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
            {niveau !== "basis" && uitlegPad.niveaus?.basis && (
              <NiveauKnop label="📖 Standaard" actief={niveau === "basis"} onClick={() => setNiveau("basis")} />
            )}
            {uitlegPad.niveaus?.simpeler && (
              <NiveauKnop label="🌱 Simpeler" actief={niveau === "simpeler"} onClick={() => setNiveau("simpeler")} />
            )}
            {uitlegPad.niveaus?.nogSimpeler && (
              <NiveauKnop label="🌟 Nog simpeler" actief={niveau === "nogSimpeler"} onClick={() => setNiveau("nogSimpeler")} />
            )}
          </div>
        </Section>
      )}

      {/* STAPPEN */}
      {uitlegPad.stappen?.length > 0 && (
        <Section title="🪜 Stap voor stap door de vraag">
          <ol style={{ paddingLeft: 20, margin: 0, lineHeight: 1.6 }}>
            {uitlegPad.stappen.map((s, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                {s.titel && <strong>{s.titel}: </strong>}
                {s.tekst}
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* MOEILIJKE WOORDEN */}
      {uitlegPad.woorden?.length > 0 && (
        <Section title="🔤 Moeilijke woorden">
          <dl style={{ margin: 0, lineHeight: 1.55 }}>
            {uitlegPad.woorden.map((w, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <dt style={{ fontWeight: 700, color: "var(--color-text-strong)", display: "inline" }}>
                  {w.woord}:
                </dt>
                <dd style={{ display: "inline", margin: "0 0 0 6px" }}>{w.uitleg}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {/* THEORIE */}
      {uitlegPad.theorie && (
        <Section title="📘 Theorie achter de vraag">
          <div style={{ lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
            <MdInline text={uitlegPad.theorie} />
          </div>
        </Section>
      )}

      {/* VOORBEELDEN */}
      {uitlegPad.voorbeelden?.length > 0 && (
        <Section title="✨ Voorbeelden uit het echte leven">
          <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 1.6 }}>
            {uitlegPad.voorbeelden.map((v, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {v.type && (
                  <span style={{
                    display: "inline-block",
                    fontSize: 10,
                    padding: "2px 6px",
                    background: "rgba(66,165,245,0.18)",
                    color: "#5db3ff",
                    borderRadius: 4,
                    marginRight: 6,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}>
                    {v.type}
                  </span>
                )}
                {v.tekst}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* BASISKENNIS (terug-stap) */}
      {uitlegPad.basiskennis?.length > 0 && (
        <Section title="🧱 Basiskennis die je hierbij nodig hebt">
          {uitlegPad.basiskennis.map((b, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ fontWeight: 700, color: "var(--color-text-strong)" }}>{b.onderwerp}</div>
              <div style={{ lineHeight: 1.55 }}>{b.uitleg}</div>
            </div>
          ))}
        </Section>
      )}
    </div>
  );
}

function Section({ title, children, defaultOpen = false }) {
  // A4 (10-agent mobile 2026-05-10): elke sectie collapsible. Bespaart ~70%
  // scroll op mobile zonder inhoud te verliezen.
  return (
    <details
      open={defaultOpen}
      style={{
        marginBottom: 14,
        padding: "10px 14px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 8,
      }}
    >
      <summary style={{
        fontSize: 13,
        fontWeight: 700,
        color: "var(--color-text-strong)",
        fontFamily: "var(--font-display)",
        cursor: "pointer",
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 32,
      }}>
        <span>{title}</span>
        <span style={{ fontSize: 11, color: "var(--color-text-soft)", marginLeft: 8 }}>tik om te openen</span>
      </summary>
      <div style={{ fontSize: 14, marginTop: 10 }}>{children}</div>
    </details>
  );
}

function NiveauKnop({ label, actief, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 14px",
        background: actief ? "#42a5f5" : "transparent",
        color: actief ? "#0f1729" : "#5db3ff",
        border: "1px solid #42a5f5",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "var(--font-display)",
        minHeight: 44, // A5: tap-target floor
      }}
    >
      {label}
    </button>
  );
}
