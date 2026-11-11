// Icoon voor "Scan je huiswerk". Los bestand: de onderbalk gebruikt het ook, en die mag het scan-scherm zelf niet meeladen.
export default function ScanIcoon({ size = 24, kleur = "currentColor" }) {
  // Vier hoekjes (zoeker) met een blaadje erin. Geen emoticon als icoon (Mark 11 sep 2026).
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={kleur} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
      <rect x="8" y="7" width="8" height="10" rx="1" />
      <path d="M10.5 10.5h3M10.5 13.5h3" />
    </svg>
  );
}
