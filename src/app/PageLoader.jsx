/**
 * PageLoader — subtiele fallback voor lazy-route-loads.
 *
 * Vervangt de fullscreen LoadingOverlay als Suspense-fallback. Reden:
 * de fullscreen overlay dekt ook de footer + header af bij elke
 * pagina-transitie, wat eruitziet als 'de app crasht' bij een korte
 * chunk-fetch. Deze loader is een dunne progressbar bovenaan + een
 * subtiele tekst, dus de structuur (header, footer, bottom-nav) blijft
 * zichtbaar tijdens de transitie.
 */
export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: 3,
          background: "linear-gradient(90deg, transparent, var(--color-primary, #00c853), transparent)",
          backgroundSize: "200% 100%",
          animation: "studiebol-loader-shimmer 1.2s linear infinite",
        }}
      />
      <style>{`
        @keyframes studiebol-loader-shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </div>
  );
}
