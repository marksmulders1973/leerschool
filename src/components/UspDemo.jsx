import { useState } from "react";

/**
 * UspDemo — laat de kern-USP van Leerkwartier LIVE zien op de homepage:
 * de 3-niveau-uitleg. Een nieuwe ouder klikt op een fout antwoord en ziet
 * meteen "snap je 't niet? wij leggen het ánders uit" met basis / simpeler /
 * nog simpeler. Show-don't-tell — geen extra navigatie-knop, gewoon een
 * zelfstandige mini-demo (geen backend). Toegevoegd 2026-06-04 na UX-review:
 * homepage toonde de sterkste USP nergens → ouder snapt in 30 sec niet
 * waarom dit beter is dan gratis YouTube/ChatGPT.
 */

const VRAAG = "Hoeveel is ¾ van 20?";

const OPTIES = [
  { t: "5", goed: false, hint: "Dat is pas ¼ — één bakje van de vier. Maar hoeveel bakjes wil je hebben?" },
  { t: "12", goed: false, hint: "Reken nog eens na: hoeveel is 20 gedeeld door 4 precies?" },
  { t: "15", goed: true, hint: null },
  { t: "17", goed: false, hint: "Tel je er eentje te veel? Hoeveel zit er in 3 bakjes van 5 samen?" },
];

const NIVEAUS = [
  {
    key: "basis",
    label: "Basis",
    tekst: "¾ betekent: verdeel in 4 gelijke stukken en neem er 3. Eerst 20 ÷ 4 = 5. Dan 3 × 5 = 15.",
  },
  {
    key: "simpeler",
    label: "Simpeler",
    tekst: "Pak eerst ¼ van 20. Dat is 20 verdeeld over 4 = 5. Je wilt 3 van die stukken: 5 + 5 + 5 = 15.",
  },
  {
    key: "nogSimpeler",
    label: "Nog simpeler",
    tekst: "Leg 20 knikkers in 4 even grote bakjes → 5 per bakje. Pak nu 3 bakjes: 5, dan 10, dan 15. Dat zijn er 15.",
  },
];

const GROEN = "#00C853";
const GROEN_LICHT = "#69f0ae";

export default function UspDemo() {
  const [gekozen, setGekozen] = useState(null); // index of gekozen optie
  const [niveau, setNiveau] = useState("basis");

  const isFout = gekozen != null && !OPTIES[gekozen].goed;
  const isGoed = gekozen != null && OPTIES[gekozen].goed;
  const toonUitleg = gekozen != null; // na elke klik tonen we de uitleg-ladder

  const reset = () => {
    setGekozen(null);
    setNiveau("basis");
  };

  return (
    <section
      aria-label="Zo werkt Leerkwartier"
      style={{
        alignSelf: "stretch",
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 16,
        padding: "16px 16px 14px",
        marginBottom: 18,
        fontFamily: "var(--font-body, -apple-system, sans-serif)",
      }}
    >
      {/* Eyebrow + zichtbare kop = de USP in tekst (audit: geen zichtbare USP/H1) */}
      <div style={{
        fontSize: 11, fontWeight: 800, letterSpacing: "0.08em",
        textTransform: "uppercase", color: GROEN_LICHT, marginBottom: 6,
      }}>
        Zo werkt Leerkwartier
      </div>
      <h2 style={{
        margin: "0 0 4px", fontFamily: "var(--font-display, sans-serif)",
        fontSize: 19, lineHeight: 1.25, fontWeight: 800, color: "#fff",
      }}>
        Snapt je kind iets niet? Wij leggen het op <span style={{ color: GROEN_LICHT }}>3 niveaus</span> uit — tot het kwartje valt.
      </h2>
      <p style={{ margin: "0 0 12px", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
        Probeer het zelf even. Klik op een antwoord 👇
      </p>

      {/* De vraag */}
      <div style={{
        fontSize: 15.5, fontWeight: 700, color: "#fff", marginBottom: 10,
      }}>
        {VRAAG}
      </div>

      {/* Antwoord-opties */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: toonUitleg ? 12 : 0 }}>
        {OPTIES.map((o, i) => {
          const gekozenDeze = gekozen === i;
          const onthul = gekozen != null; // na klik: kleur juist/fout
          let bg = "rgba(255,255,255,0.05)";
          let border = "1px solid rgba(255,255,255,0.14)";
          let kleur = "rgba(255,255,255,0.92)";
          if (onthul && o.goed) {
            bg = "rgba(0,200,83,0.16)"; border = `1.5px solid ${GROEN}`; kleur = GROEN_LICHT;
          } else if (gekozenDeze && !o.goed) {
            bg = "rgba(255,82,82,0.14)"; border = "1.5px solid #ff5252"; kleur = "#ff8a80";
          }
          return (
            <button
              key={i}
              type="button"
              onClick={() => { if (gekozen == null) setGekozen(i); }}
              disabled={gekozen != null}
              style={{
                padding: "12px 10px", borderRadius: 10, background: bg, border,
                color: kleur, fontFamily: "inherit", fontSize: 16, fontWeight: 700,
                cursor: gekozen == null ? "pointer" : "default",
                transition: "background 0.15s, border 0.15s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                minHeight: 46,
              }}
            >
              {o.t}
              {onthul && o.goed && <span aria-hidden="true">✓</span>}
              {gekozenDeze && !o.goed && <span aria-hidden="true">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Na klik: wrongHint (denkprikkel, geen antwoord) of felicitatie */}
      {isFout && (
        <div style={{
          fontSize: 13.5, color: "#ffcc80", background: "rgba(255,167,38,0.10)",
          border: "1px solid rgba(255,167,38,0.30)", borderRadius: 10,
          padding: "9px 12px", marginBottom: 12,
        }}>
          💭 {OPTIES[gekozen].hint}
        </div>
      )}
      {isGoed && (
        <div style={{
          fontSize: 13.5, color: GROEN_LICHT, background: "rgba(0,200,83,0.10)",
          border: `1px solid rgba(0,200,83,0.30)`, borderRadius: 10,
          padding: "9px 12px", marginBottom: 12,
        }}>
          🎉 Goed! En mócht je twijfelen — zó leggen we het uit:
        </div>
      )}

      {/* De 3-niveau-uitleg-ladder (de eigenlijke USP) */}
      {toonUitleg && (
        <div>
          <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
            {NIVEAUS.map((n) => {
              const actief = niveau === n.key;
              return (
                <button
                  key={n.key}
                  type="button"
                  onClick={() => setNiveau(n.key)}
                  style={{
                    padding: "5px 12px", borderRadius: 999,
                    border: actief ? `1.5px solid ${GROEN}` : "1px solid rgba(255,255,255,0.16)",
                    background: actief ? "rgba(0,200,83,0.15)" : "rgba(255,255,255,0.04)",
                    color: actief ? GROEN_LICHT : "rgba(255,255,255,0.7)",
                    fontFamily: "inherit", fontSize: 12.5, fontWeight: 700, cursor: "pointer",
                  }}
                >
                  {n.label}
                </button>
              );
            })}
          </div>
          <div style={{
            fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.92)",
            background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: "12px 14px",
            borderLeft: `3px solid ${GROEN}`,
          }}>
            {NIVEAUS.find((n) => n.key === niveau)?.tekst}
          </div>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 10, marginTop: 12, flexWrap: "wrap",
          }}>
            <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)" }}>
              Dit zit achter <strong style={{ color: "rgba(255,255,255,0.8)" }}>élke</strong> vraag in Leerkwartier.
            </span>
            <button
              type="button"
              onClick={reset}
              style={{
                padding: "6px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent", color: "rgba(255,255,255,0.8)",
                fontFamily: "inherit", fontSize: 12.5, fontWeight: 600, cursor: "pointer",
              }}
            >
              ↺ Opnieuw
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
