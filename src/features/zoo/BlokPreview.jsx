// BlokPreview — plat voorkantje (SVG) van een blok-poppetje, voor de
// poppetjes-kiezer in het park. Zelfde palet + stijl als BlockyCharacter, zodat
// het kind ziet wat het kiest (geen emoticon als icoon — Mark 11 sep 2026).
export default function BlokPreview({ palette = {}, size = 56 }) {
  const P = { huid: "#f0c8a0", haar: "#3a2a1a", shirt: "#4a90d9", broek: "#35485c", schoen: "#26292c", ...palette };
  const stijl = P.stijl || (P.pet ? "pet" : "kort");
  const pet = P.petKleur || P.haar;
  const muts = P.muts || "#e53935";
  const doek = P.doek || "#6a1b9a";
  return (
    <svg viewBox="0 0 40 64" width={size} height={size * 1.6} aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
      {/* lang haar en hoofddoek lopen achter de schouders door */}
      {stijl === "lang" && <rect x="7" y="14" width="26" height="30" rx="3" fill={P.haar} />}
      {stijl === "hoofddoek" && <rect x="6" y="12" width="28" height="34" rx="6" fill={doek} />}
      {/* benen + schoenen */}
      <rect x="11" y="44" width="8" height="14" fill={P.broek} />
      <rect x="21" y="44" width="8" height="14" fill={P.broek} />
      <rect x="10" y="57" width="10" height="5" rx="1" fill={P.schoen} />
      <rect x="20" y="57" width="10" height="5" rx="1" fill={P.schoen} />
      {/* romp + armen + handen */}
      <rect x="10" y="26" width="20" height="19" fill={P.shirt} />
      <rect x="4" y="26" width="6" height="14" fill={P.shirt} />
      <rect x="30" y="26" width="6" height="14" fill={P.shirt} />
      <rect x="4" y="40" width="6" height="5" fill={P.huid} />
      <rect x="30" y="40" width="6" height="5" fill={P.huid} />
      {/* hoofd */}
      <rect x="10" y="6" width="20" height="20" fill={P.huid} />
      {/* kapsel */}
      {stijl === "kort" && <rect x="9" y="4" width="22" height="7" fill={P.haar} />}
      {stijl === "lang" && <rect x="9" y="4" width="22" height="8" fill={P.haar} />}
      {stijl === "krullen" && (
        <g fill={P.haar}>
          <rect x="8" y="3" width="24" height="9" rx="3" />
          <circle cx="10" cy="5" r="3.2" /><circle cx="17" cy="2.6" r="3.2" /><circle cx="24" cy="2.6" r="3.2" /><circle cx="31" cy="5" r="3.2" />
          <rect x="7" y="9" width="4" height="9" rx="2" /><rect x="29" y="9" width="4" height="9" rx="2" />
        </g>
      )}
      {stijl === "staartjes" && (
        <g fill={P.haar}>
          <rect x="9" y="4" width="22" height="7" />
          <rect x="4" y="10" width="5" height="13" rx="2" /><rect x="31" y="10" width="5" height="13" rx="2" />
          <rect x="4" y="12" width="5" height="2.5" fill="#ff4081" /><rect x="31" y="12" width="5" height="2.5" fill="#ff4081" />
        </g>
      )}
      {stijl === "knot" && (
        <g fill={P.haar}>
          <rect x="9" y="4" width="22" height="7" />
          <rect x="15" y="0" width="10" height="6" rx="2.5" />
        </g>
      )}
      {stijl === "pet" && (
        <g>
          <rect x="8" y="3" width="24" height="7" rx="1.5" fill={pet} />
          <rect x="8" y="8" width="28" height="3" rx="1.5" fill={pet} />
          <rect x="9" y="10" width="3" height="5" fill={P.haar} /><rect x="28" y="10" width="3" height="5" fill={P.haar} />
        </g>
      )}
      {stijl === "muts" && (
        <g>
          <rect x="8" y="2" width="24" height="10" rx="3" fill={muts} />
          <rect x="7" y="9" width="26" height="4" rx="1" fill={muts} />
          <circle cx="20" cy="1.6" r="2.4" fill="#f5f5f5" />
        </g>
      )}
      {stijl === "hoofddoek" && <rect x="8" y="3" width="24" height="9" rx="3" fill={doek} />}
      {/* ogen, mond */}
      <rect x="13" y="13" width="4" height="4.5" fill="#fff" /><rect x="23" y="13" width="4" height="4.5" fill="#fff" />
      <rect x="15" y="14" width="2" height="2.8" fill="#2a3a55" /><rect x="25" y="14" width="2" height="2.8" fill="#2a3a55" />
      <rect x="17" y="21" width="6" height="1.6" fill="#a05a4a" />
      {P.bril && (
        <g fill="none" stroke="#1d2a45" strokeWidth="1.3">
          <rect x="11.5" y="11.8" width="7" height="6.5" rx="1.5" /><rect x="21.5" y="11.8" width="7" height="6.5" rx="1.5" />
          <line x1="18.5" y1="15" x2="21.5" y2="15" />
        </g>
      )}
    </svg>
  );
}
