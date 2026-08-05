// ============================================================================
// KubusGroeiAnimatie — een kubus die vanzelf groeit en krimpt (1→2→3→4→…→terug),
// met de inhoud (z³ cm³) die meegroeit. Tik op de kubus om 'm te pauzeren en
// de losse blokjes één-voor-één te tellen (oefenen).
//
// Bouwt voort op de bestaande Shape3D-motor:
//   - showUnitCubes + unitCubeColorBy="layer-y"  → kubus uit losse eenheidskubusjes,
//     per laag een kleur, zodat de inhoud zichtbaar als stapel meegroeit.
//   - cameraReferenceDim (vast)                   → camera staat stil, dus de kubus
//     wordt écht groter/kleiner op het scherm.
//   - ref.startTelAnimatie(cb)                    → kleurt de blokjes 1-voor-1 met
//     een live teller (de "tel de blokjes"-oefenstand).
//
// Los component — raakt de LOCKED Mini3DTeaser (homepage) niet aan.
// ============================================================================

import { useCallback, useEffect, useRef, useState } from "react";
import Shape3D from "./Shape3D.jsx";

// Driehoek-golf: 1,2,3,4,3,2, 1,2,3,4,3,2, … → kubus groeit en krimpt vloeiend.
const Z_SEQUENCE = [1, 2, 3, 4, 3, 2];
const STAP_MS = 950;          // hoe lang elke maat in beeld blijft
const MAX_Z = 4;              // vaste camera-referentie zodat z=4 het scherm vult

// vastZ: zet de kubus stil op één maat (bv. 2/4/6 — voor reclame-stills via
// /kubus.html?z=N); cameraRef bepaalt dan t.o.v. welke maat de camera staat,
// zodat een reeks stills (2→4→6) écht zichtbaar groeit.
export default function KubusGroeiAnimatie({ onCTA, height = 320, linkHref = null, vastZ = null, cameraRef = null }) {
  // Promo-modus: tik op de kubus → direct door naar Leerkwartier (originele
  // 3D-kubus op de homepage). Gebruikt op de deelbare hook-pagina /kubus.html.
  // Zonder linkHref = oefen-modus: tik → tel de blokjes.
  const promo = !!linkHref;
  const shape3dRef = useRef(null);
  const idxRef = useRef(0);

  const [z, setZ] = useState(vastZ || 1);
  const [groeit, setGroeit] = useState(true);   // auto-animatie aan/uit
  const [telModus, setTelModus] = useState(false);
  const [teller, setTeller] = useState(0);

  const gaNaarLink = useCallback(() => {
    if (linkHref) window.location.href = linkHref;
  }, [linkHref]);

  // ── Auto groei/krimp ──────────────────────────────────────────────────────
  useEffect(() => {
    if (vastZ || !groeit || telModus) return undefined;
    const id = window.setInterval(() => {
      idxRef.current = (idxRef.current + 1) % Z_SEQUENCE.length;
      setZ(Z_SEQUENCE[idxRef.current]);
    }, STAP_MS);
    return () => window.clearInterval(id);
  }, [groeit, telModus]);

  // ── Tik op de kubus → pauzeer + tel de blokjes ────────────────────────────
  const startTellen = useCallback(() => {
    setGroeit(false);
    setTelModus(true);
    setTeller(0);
    // z staat vast → Shape3D-scene blijft staan → unit-materials zijn geldig.
    requestAnimationFrame(() => {
      shape3dRef.current?.startTelAnimatie((n) => setTeller(n));
    });
  }, []);

  const terugNaarGroeien = useCallback(() => {
    shape3dRef.current?.resetTelAnimatie();
    setTelModus(false);
    setTeller(0);
    setGroeit(true);
  }, []);

  const inhoud = z ** 3;

  return (
    <div style={S.wrap}>
      <div style={S.titel}>
        🧊 Hoe groot wordt een kubus?
      </div>

      {/* ── 3D-canvas ─────────────────────────────────────────────────── */}
      <div
        style={S.canvasBox}
        onClick={promo ? gaNaarLink : (!telModus ? startTellen : undefined)}
        role="button"
        title={promo ? "Tik om zelf te spelen op Leerkwartier" : "Tik om de blokjes te tellen"}
      >
        <Shape3D
          ref={shape3dRef}
          shape="kubus"
          dimensions={{ zijde: z }}
          labels={[{ text: `${z} cm`, axis: "x" }]}
          height={height}
          cameraReferenceDim={cameraRef || MAX_Z}
          cameraDistanceFactor={2.4}
          showUnitCubes
          unitCubeColorBy="layer-y"
          theme="dark-studiebol"
        />

        {/* Live teller tijdens het tellen (alleen oefen-modus) */}
        {!promo && telModus && (
          <div style={S.tellerBadge}>
            {teller} / {inhoud} blokjes
          </div>
        )}

        {/* Hint-pill */}
        {(promo || !telModus) && (
          <div style={S.hintPill}>
            {promo ? "👆 tik en speel zelf" : "👆 tik om te tellen"}
          </div>
        )}
      </div>

      {/* ── Inhoud-uitleg, groeit mee ─────────────────────────────────── */}
      <div style={S.inhoudRij}>
        <div style={S.zPil}>zijde&nbsp;<strong>{z} cm</strong></div>
        <div key={z} style={S.inhoudKaart}>
          inhoud&nbsp;=&nbsp;{z}×{z}×{z}&nbsp;=&nbsp;
          <strong style={S.inhoudGetal}>{inhoud} cm³</strong>
        </div>
      </div>

      {/* ── Knoppen ───────────────────────────────────────────────────── */}
      {!promo && (
        <div style={S.knopRij}>
          {telModus ? (
            <button type="button" onClick={terugNaarGroeien} style={S.btnPrimary}>
              ▶ Speel verder
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setGroeit((v) => !v)}
                style={S.btnSecondary}
              >
                {groeit ? "⏸ Pauze" : "▶ Groeien"}
              </button>
              <button type="button" onClick={startTellen} style={S.btnSecondary}>
                🔢 Tel de blokjes
              </button>
            </>
          )}
        </div>
      )}

      {promo ? (
        <button type="button" onClick={gaNaarLink} style={S.btnCta}>
          Speel zelf op Leerkwartier →
        </button>
      ) : (
        onCTA && (
          <button type="button" onClick={onCTA} style={S.btnCta}>
            Verder met kubussen →
          </button>
        )
      )}
    </div>
  );
}

// ── Stijl ─────────────────────────────────────────────────────────────────
const S = {
  wrap: {
    width: "100%",
    background: "linear-gradient(135deg, rgba(239,159,39,0.10), rgba(255,213,79,0.06))",
    border: "1px solid rgba(255,213,79,0.30)",
    borderRadius: 16,
    padding: "12px 14px 14px",
    boxShadow: "0 4px 20px rgba(255,213,79,0.10)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  titel: {
    fontFamily: "var(--font-display, inherit)",
    fontSize: 15,
    fontWeight: 800,
    color: "#ffd54f",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  canvasBox: {
    position: "relative",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: 6,
    cursor: "pointer",
  },
  tellerBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    background: "rgba(0,0,0,0.45)",
    border: "1px solid rgba(255,213,79,0.45)",
    padding: "6px 12px",
    borderRadius: 8,
    color: "#ffd54f",
    fontWeight: 700,
    fontSize: 14,
  },
  hintPill: {
    position: "absolute",
    bottom: 12,
    right: 12,
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "4px 10px",
    borderRadius: 999,
    color: "rgba(255,255,255,0.8)",
    fontSize: 11,
    fontWeight: 600,
    pointerEvents: "none",
  },
  inhoudRij: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  zPil: {
    fontSize: 13,
    color: "rgba(224,230,240,0.85)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 999,
    padding: "5px 12px",
  },
  inhoudKaart: {
    fontFamily: "var(--font-body, inherit)",
    fontSize: 15,
    color: "rgba(224,230,240,0.9)",
    background: "rgba(239,159,39,0.12)",
    border: "1px solid rgba(239,159,39,0.30)",
    borderRadius: 12,
    padding: "6px 14px",
    animation: "lk-kubus-pop 0.3s ease-out",
  },
  inhoudGetal: { color: "#ffd54f", fontSize: 18 },
  knopRij: {
    display: "flex",
    gap: 8,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnSecondary: {
    padding: "8px 14px",
    borderRadius: 10,
    border: "1px solid rgba(255,213,79,0.35)",
    background: "rgba(255,255,255,0.05)",
    color: "#ffd54f",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
  },
  btnPrimary: {
    padding: "8px 18px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #00c853, #69f0ae)",
    color: "#0d1b2e",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(0,200,83,0.35)",
  },
  btnCta: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg, #00c853, #69f0ae)",
    color: "#0d1b2e",
    fontFamily: "var(--font-display, inherit)",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(0,200,83,0.35)",
  },
};
