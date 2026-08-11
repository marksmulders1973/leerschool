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
//   makeRekenOefenRonde({ soort, aantal, tafels, totMax, jong })
//     soort   "keer" | "delen" | "optellen" | "aftrekken" | "mix" | array
//     aantal  hoeveel verschillende sommen in de ronde (standaard 12)
//     tafels  welke tafels bij keer/delen (standaard [2..9])
//     totMax  bovengrens bij optellen/aftrekken (standaard 100)
//     jong    true = onderbouw-modus (Mark 11 aug: "groep t/m 5 ziet weinig
//             plaatjes — maak het leuker"): telbare emoji-plaatjes bij de som
//             (concreet → abstract), vrolijke kleuren, emoji-confetti + zacht
//             geluidje bij goed (WebAudio, aan/uit-knop), en een 🔊-knop die
//             de som voorleest (onderbouw leest nog niet vlot).
// ============================================================================

import { useEffect, useRef, useState } from "react";
import { track } from "../../utils.js";

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

// ── Onderbouw-extra's (jong-modus) ──────────────────────────────────────────
const OBJECTEN = ["🍎", "🎈", "⭐", "🐟", "🌸", "🚗", "🐞", "🧁", "🍓", "🐥"];

// Telbare plaatjes bij kleine sommen: 3+4 = 🍎🍎🍎 + 🍎🍎🍎🍎. Aftrekken laat
// de weggehaalde vervagen; keer toont groepjes. Boven ~24 objecten: geen
// plaatjes (niet meer telbaar), dan alleen kleur/geluid.
function plaatjesVoor(som, obj) {
  const m = som.q.match(/^(\d+) ([+−×÷]) (\d+)$/);
  if (!m) return null;
  const a = +m[1], op = m[2], b = +m[3];
  if (op === "+" && a + b <= 24) {
    return { rijen: [Array(a).fill({ o: obj }), Array(b).fill({ o: obj })], teken: "+" };
  }
  if (op === "−" && a <= 24) {
    // a objecten, de laatste b vervaagd + doorgestreept = "weggehaald"
    const rij = Array.from({ length: a }, (_, i) => ({ o: obj, weg: i >= a - b }));
    return { rijen: [rij], teken: null };
  }
  if (op === "×" && a * b <= 24) {
    // a groepjes van b (zelfde taal als tafelsPo: "3 × 4 = 3 groepjes van 4")
    return { rijen: Array.from({ length: a }, () => Array(b).fill({ o: obj })), teken: "groepjes" };
  }
  return null;
}

// Kort synth-geluidje via WebAudio (geen audiobestanden). Goed = vrolijk
// arpeggiootje omhoog; fout = één zacht laag boepje — nooit straffend.
let audioCtx = null;
function toontje(goed) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const noten = goed ? [523.25, 659.25, 783.99] : [196];
    noten.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = audioCtx.currentTime + i * 0.11;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(goed ? 0.12 : 0.07, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t); osc.stop(t + 0.3);
    });
  } catch { /* geen audio? stil verder */ }
}

function spreekSom(som) {
  try {
    const tekst = som.q.replace("+", "plus").replace("−", "min").replace("×", "keer").replace("÷", "gedeeld door") + ". Hoeveel is dat?";
    window.speechSynthesis?.cancel();
    const u = new SpeechSynthesisUtterance(tekst);
    u.lang = "nl-NL"; u.rate = 0.92;
    window.speechSynthesis?.speak(u);
  } catch { /* geen stem? stil verder */ }
}

const GELUID_KEY = "lk_oefen_geluid";
const geluidStaatAan = () => { try { return localStorage.getItem(GELUID_KEY) !== "uit"; } catch { return true; } };

function maakSommen({ soort, aantal, tafels, totMax }) {
  // soort mag ook een array zijn, bv. ["optellen","aftrekken"] voor een plus/min-ronde.
  const soorten = Array.isArray(soort) ? soort
    : soort === "mix" ? ["optellen", "aftrekken", "keer", "delen"] : [soort];
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

export function makeRekenOefenRonde({ soort = "keer", aantal = 12, tafels = [2, 3, 4, 5, 6, 7, 8, 9], totMax = 100, emoji = "🧮", meervoud = "sommen", jong = false } = {}) {
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
    const [geluid, setGeluid] = useState(() => geluidStaatAan());
    const inputRef = useRef(null);

    const som = wachtrij[0];
    // Stabiel object per som (zelfde som = zelfde plaatje), wisselend per ronde
    const objVoor = (s) => OBJECTEN[(s.q.length + s.antwoord) % OBJECTEN.length];
    const plaatjes = jong && som ? plaatjesVoor(som, objVoor(som)) : null;
    const zetGeluid = (aan) => { setGeluid(aan); try { localStorage.setItem(GELUID_KEY, aan ? "aan" : "uit"); } catch { /* */ } };

    // Meting (dagrapport-idee #25, 11 aug): zonder events waren de ronden
    // onzichtbaar in het dagrapport — start + einde (alles/gestopt) vastleggen.
    const rondeId = Array.isArray(soort) ? soort.join("-") : soort;
    useEffect(() => { track("oefenronde_start", { ronde: `reken-${rondeId}`, jong: !!jong }); }, []);

    const volgende = (wasGoedInEen) => {
      setInvoer(""); setMissers(0); setToonAntwoord(false); setGoedFlits(false); setFoutFlits(false);
      if (wasGoedInEen) {
        const n = gekend + 1;
        setGekend(n);
        setWachtrij((w) => w.slice(1));
        if (n === totaal) {
          setEind("alles");
          track("oefenronde_eind", { ronde: `reken-${rondeId}`, resultaat: "alles", gekend: n, totaal });
        }
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
        if (jong && geluid) toontje(true);
        setTimeout(() => volgende(inEenKeer), jong ? 1300 : 900);
      } else {
        const nieuweMissers = missers + 1;
        setMissers(nieuweMissers);
        setFoutFlits(true);
        if (jong && geluid) toontje(false);
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

    const stop = () => {
      if (eind) return;
      setEind("gestopt");
      track("oefenronde_eind", { ronde: `reken-${rondeId}`, resultaat: "gestopt", gekend, totaal });
    };
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
      <div style={{ padding: "0.5rem 0", position: "relative" }}>
        {/* Emoji-confetti bij goed (jong-modus) — lichtgewicht CSS-regen */}
        {jong && goedFlits && (
          <>
            <style>{`@keyframes lkval { 0% { transform: translateY(-10px) rotate(0deg); opacity: 1; } 100% { transform: translateY(150px) rotate(200deg); opacity: 0; } }`}</style>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 2 }}>
              {["🎉", "⭐", "🎈", "✨", "🌟", "🎊", "⭐", "✨"].map((c, i) => (
                <span key={i} style={{ position: "absolute", left: `${8 + i * 12}%`, top: 0, fontSize: 22 + (i % 3) * 6, animation: `lkval ${0.9 + (i % 4) * 0.25}s ease-in ${i * 0.06}s forwards` }}>{c}</span>
              ))}
            </div>
          </>
        )}

        {/* Voortgang + geluid + stop */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 4 }}>
              {emoji} ✔ {gekend} van {totaal} gekend
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.10)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${(gekend / totaal) * 100}%`, height: "100%", background: jong ? "linear-gradient(90deg,#1d9e75,#ffd54f)" : C.goed, transition: "width 300ms" }} />
            </div>
          </div>
          {jong && (
            <button type="button" onClick={() => zetGeluid(!geluid)} aria-label={geluid ? "Geluid uitzetten" : "Geluid aanzetten"}
              style={{ padding: "8px 10px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: C.muted, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
              {geluid ? "🔔" : "🔕"}
            </button>
          )}
          <button type="button" onClick={stop}
            style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: C.muted, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            🛑 Stoppen
          </button>
        </div>

        {/* Telbare plaatjes (jong-modus): eerst concreet zien, dan het getal */}
        {plaatjes && (
          <div style={{ textAlign: "center", marginBottom: 12, background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.25)", borderRadius: 14, padding: "10px 12px" }}>
            {plaatjes.teken === "+" || plaatjes.teken === null ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                {plaatjes.rijen.map((rij, r) => (
                  <span key={r} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                    {r > 0 && <span style={{ fontSize: 26, fontWeight: 800, color: C.highlight }}>+</span>}
                    <span style={{ fontSize: rij.length > 12 ? 20 : 26, lineHeight: 1.3, maxWidth: 340, display: "inline-block" }}>
                      {rij.map((it, i) => (
                        <span key={i} style={it.weg ? { opacity: 0.25, filter: "grayscale(1)", textDecoration: "line-through" } : undefined}>{it.o}</span>
                      ))}
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              /* keer: groepjes naast elkaar */
              <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
                {plaatjes.rijen.map((rij, r) => (
                  <span key={r} style={{ fontSize: 22, background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "4px 8px", border: "1px dashed rgba(255,255,255,0.2)" }}>
                    {rij.map((it) => it.o).join("")}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* De som */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: jong ? 42 : 34, fontWeight: 800, color: goedFlits ? C.goed : C.tekst, letterSpacing: 1, marginBottom: 12, fontVariantNumeric: "tabular-nums" }}>
            {som.q} = {goedFlits ? som.antwoord : "?"}
            {jong && !goedFlits && (
              <button type="button" onClick={() => spreekSom(som)} aria-label="Lees de som voor"
                style={{ marginLeft: 10, padding: "6px 10px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", fontSize: 18, cursor: "pointer", verticalAlign: "middle", fontFamily: "inherit" }}>
                🔊
              </button>
            )}
          </div>

          {goedFlits ? (
            <div style={{ fontSize: jong ? 20 : 16, fontWeight: 800, color: C.goed }}>{jong ? "🎉 Goed zo!" : "✔ Goed!"}</div>
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
