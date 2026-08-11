// ============================================================================
// RekenOefenRonde — "ken ze ALLEMAAL"-oefening voor sommen (Mark 11 aug 2026:
// "kun je ook zoiets maken voor bv sommen optellen of keer delen").
// Zelfde didactiek als makeGeoOefenRonde (topografie): geschudde wachtrij,
// in één keer goed = ✔ gekend, fout = som komt later terug, voortgang
// zichtbaar, stoppen mag altijd zonder straf.
//
// Verschil met de kaart: het kind TYPT het antwoord (numeriek toetsenbord op
// mobiel) — echt sommen maken, geen multiple choice-gokken.
//
//   makeRekenOefenRonde({ soort, aantal, tafels, totMax })
//     soort   "keer" | "delen" | "optellen" | "aftrekken" | "mix"
//     aantal  hoeveel verschillende sommen in de ronde (standaard 12)
//     tafels  welke tafels bij keer/delen (standaard [2..9])
//     totMax  bovengrens bij optellen/aftrekken (standaard 100)
// ============================================================================

import { useRef, useState } from "react";

const C = {
  goed: "#1d9e75", fout: "#e24b4a", highlight: "#ffd54f",
  tekst: "#e7edf6", muted: "rgba(231,237,246,0.65)",
};

function schud(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const rnd = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

function maakSom(soort, { tafels, totMax }) {
  if (soort === "keer") {
    const a = tafels[rnd(0, tafels.length - 1)], b = rnd(1, 10);
    return { q: `${a} × ${b}`, antwoord: a * b, hint: `Tel ${b} keer een sprong van ${a}.` };
  }
  if (soort === "delen") {
    const a = tafels[rnd(0, tafels.length - 1)], b = rnd(1, 10);
    return { q: `${a * b} ÷ ${a}`, antwoord: b, hint: `Denk andersom: ${a} × ? = ${a * b}.` };
  }
  if (soort === "aftrekken") {
    const a = rnd(10, totMax), b = rnd(1, a - 1);
    return { q: `${a} − ${b}`, antwoord: a - b, hint: `Spring eerst naar een rond getal.` };
  }
  // optellen (standaard)
  const a = rnd(2, totMax - 2), b = rnd(1, totMax - a);
  return { q: `${a} + ${b}`, antwoord: a + b, hint: `Reken eerst de tientallen, dan de eenheden.` };
}

function maakSommen({ soort, aantal, tafels, totMax }) {
  const soorten = soort === "mix" ? ["optellen", "aftrekken", "keer", "delen"] : [soort];
  const sommen = []; const gezien = new Set();
  let poging = 0;
  while (sommen.length < aantal && poging < aantal * 40) {
    poging++;
    const s = maakSom(soorten[sommen.length % soorten.length], { tafels, totMax });
    if (gezien.has(s.q)) continue;
    gezien.add(s.q);
    sommen.push(s);
  }
  return schud(sommen);
}

export function makeRekenOefenRonde({ soort = "keer", aantal = 12, tafels = [2, 3, 4, 5, 6, 7, 8, 9], totMax = 100, emoji = "🧮", meervoud = "sommen" } = {}) {
  return function RekenOefenRonde({ onAnswer }) {
    const [wachtrij, setWachtrij] = useState(() => maakSommen({ soort, aantal, tafels, totMax }));
    const [gekend, setGekend] = useState(0);
    const totaal = aantal;
    const [invoer, setInvoer] = useState("");
    const [missers, setMissers] = useState(0);       // fouten op de huidige som
    const [toonAntwoord, setToonAntwoord] = useState(false);
    const [goedFlits, setGoedFlits] = useState(false);
    const [foutFlits, setFoutFlits] = useState(false);
    const [eind, setEind] = useState(null);          // null | "alles" | "gestopt"
    const inputRef = useRef(null);

    const som = wachtrij[0];

    const volgende = (wasGoedInEen) => {
      setInvoer(""); setMissers(0); setToonAntwoord(false); setGoedFlits(false); setFoutFlits(false);
      if (wasGoedInEen) {
        const n = gekend + 1;
        setGekend(n);
        setWachtrij((w) => w.slice(1));
        if (n === totaal) setEind("alles");
      } else {
        // Nog niet gekend: achteraan opnieuw oefenen.
        setWachtrij((w) => [...w.slice(1), som]);
      }
      setTimeout(() => inputRef.current?.focus(), 50);
    };

    const check = () => {
      if (goedFlits || eind || invoer.trim() === "") return;
      const getal = parseInt(invoer.trim(), 10);
      if (getal === som.antwoord) {
        const inEenKeer = missers === 0;
        setGoedFlits(true);
        setTimeout(() => volgende(inEenKeer), 900);
      } else {
        const nieuweMissers = missers + 1;
        setMissers(nieuweMissers);
        setFoutFlits(true);
        setInvoer("");
        if (nieuweMissers >= 2) {
          // Na 2 missers: antwoord tonen als leermoment, dan door (som komt terug).
          setToonAntwoord(true);
          setTimeout(() => volgende(false), 2200);
        } else {
          setTimeout(() => setFoutFlits(false), 600);
          inputRef.current?.focus();
        }
      }
    };

    const stop = () => { if (!eind) setEind("gestopt"); };
    const verder = () => onAnswer?.(true, eind === "alles" ? `alle ${totaal} gekend` : `gestopt bij ${gekend}/${totaal}`);

    if (eind) {
      const alles = eind === "alles";
      return (
        <div style={{ padding: "0.5rem 0", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>{alles ? "🏆" : "👍"}</div>
          <p style={{ fontSize: 17, fontWeight: 700, color: C.tekst, margin: "0 0 6px" }}>
            {alles
              ? <>Je kent alle {totaal} {meervoud}!</>
              : <>Goed geoefend — je hebt er al <strong style={{ color: C.goed }}>{gekend}</strong> van de {totaal} in één keer goed.</>}
          </p>
          {!alles && (
            <p style={{ fontSize: 14, color: C.muted, margin: "0 0 12px" }}>
              Stoppen is prima. De rest staat klaar voor de volgende keer.
            </p>
          )}
          <button type="button" onClick={verder}
            style={{ padding: "12px 26px", borderRadius: 12, border: "none", background: C.goed, color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
            Verder →
          </button>
        </div>
      );
    }

    return (
      <div style={{ padding: "0.5rem 0" }}>
        {/* Voortgang + stop */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 4 }}>
              {emoji} ✔ {gekend} van {totaal} gekend
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.10)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${(gekend / totaal) * 100}%`, height: "100%", background: C.goed, transition: "width 300ms" }} />
            </div>
          </div>
          <button type="button" onClick={stop}
            style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: C.muted, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            🛑 Stoppen
          </button>
        </div>

        {/* De som */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: goedFlits ? C.goed : C.tekst, letterSpacing: 1, marginBottom: 12, fontVariantNumeric: "tabular-nums" }}>
            {som.q} = {goedFlits ? som.antwoord : "?"}
          </div>

          {goedFlits ? (
            <div style={{ fontSize: 16, fontWeight: 800, color: C.goed }}>✔ Goed!</div>
          ) : toonAntwoord ? (
            <div style={{ fontSize: 15, color: C.tekst, background: "rgba(226,75,74,0.12)", border: "1px solid rgba(226,75,74,0.4)", borderRadius: 10, padding: "10px 14px", display: "inline-block" }}>
              Het antwoord is <strong style={{ color: C.highlight }}>{som.antwoord}</strong> — deze som komt zo nog een keer terug.
            </div>
          ) : (
            <>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center" }}>
                <input
                  ref={inputRef}
                  value={invoer}
                  onChange={(e) => setInvoer(e.target.value.replace(/[^0-9]/g, ""))}
                  onKeyDown={(e) => { if (e.key === "Enter") check(); }}
                  inputMode="numeric"
                  autoFocus
                  aria-label="Jouw antwoord"
                  style={{
                    width: 120, padding: "12px 14px", fontSize: 24, fontWeight: 800, textAlign: "center",
                    borderRadius: 12, color: C.tekst, background: "rgba(255,255,255,0.06)",
                    border: `2px solid ${foutFlits ? C.fout : "rgba(255,255,255,0.2)"}`,
                    outline: "none", fontFamily: "inherit", fontVariantNumeric: "tabular-nums",
                  }}
                />
                <button type="button" onClick={check}
                  style={{ padding: "14px 20px", borderRadius: 12, border: "none", background: C.goed, color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
                  Check
                </button>
              </div>
              {foutFlits && !toonAntwoord && (
                <div style={{ marginTop: 10, fontSize: 14, color: C.fout, fontWeight: 700 }}>
                  Nog niet goed — probeer nog eens! <span style={{ color: C.muted, fontWeight: 400 }}>💡 {som.hint}</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };
}

export default makeRekenOefenRonde;
