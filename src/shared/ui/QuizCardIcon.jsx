// Mini-illustratie van een meerkeuze-vraag: kaartje met vraag-tekstregels
// bovenin en 4 antwoord-rijen, waarvan er 1 als correct gemarkeerd is
// (groene rand + vinkje). Communiceert in één oogopslag 'multiple-choice
// toets' beter dan het generieke 🎯-emoji.
//
// Gebruikt op:
// - Home-tegel "Test je kennis" (groot, vult de bovenste helft van tegel)
// - Bottom-nav "Test"-tab (klein, ~22-26px)
//
// Default: schaal mee met de container (width/height 100%). Voor losstaande
// gebruik (bv. nav-tab) kun je een vaste `size` meegeven in pixels.

export default function QuizCardIcon({ size, accent = "#ff8030", correctHex = "#00c853" }) {
  const dim = size != null ? { width: size, height: size } : { width: "100%", height: "100%" };
  return (
    <svg
      viewBox="0 0 100 100"
      {...dim}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block" }}
    >
      {/* Kaartje achtergrond */}
      <rect x="6" y="10" width="88" height="80" rx="8"
            fill="rgba(255,255,255,0.04)" stroke={`${accent}88`} strokeWidth="1.5"/>
      {/* Vraag-regels (placeholders) */}
      <rect x="14" y="20" width="58" height="3.5" rx="1.5" fill="rgba(255,255,255,0.55)"/>
      <rect x="14" y="27" width="38" height="3.5" rx="1.5" fill="rgba(255,255,255,0.30)"/>
      {/* Antwoord A — correct: groene rand + vinkje */}
      <rect x="12" y="40" width="76" height="10" rx="3"
            fill={`${correctHex}26`} stroke={correctHex} strokeWidth="1.2"/>
      <circle cx="19" cy="45" r="2.8" fill={correctHex}/>
      <path d="M17.4 45 L18.6 46.3 L20.8 43.8" stroke="white" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="25" y="43.5" width="38" height="3" rx="1.2" fill="rgba(255,255,255,0.70)"/>
      {/* Antwoord B */}
      <rect x="12" y="53" width="76" height="10" rx="3"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.20)" strokeWidth="1"/>
      <circle cx="19" cy="58" r="2.8" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1"/>
      <rect x="25" y="56.5" width="44" height="3" rx="1.2" fill="rgba(255,255,255,0.35)"/>
      {/* Antwoord C */}
      <rect x="12" y="66" width="76" height="10" rx="3"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.20)" strokeWidth="1"/>
      <circle cx="19" cy="71" r="2.8" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1"/>
      <rect x="25" y="69.5" width="32" height="3" rx="1.2" fill="rgba(255,255,255,0.35)"/>
      {/* Antwoord D */}
      <rect x="12" y="79" width="76" height="10" rx="3"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.20)" strokeWidth="1"/>
      <circle cx="19" cy="84" r="2.8" fill="none" stroke="rgba(255,255,255,0.40)" strokeWidth="1"/>
      <rect x="25" y="82.5" width="40" height="3" rx="1.2" fill="rgba(255,255,255,0.35)"/>
    </svg>
  );
}
