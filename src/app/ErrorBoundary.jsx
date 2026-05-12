import { Component } from "react";

/**
 * ErrorBoundary — vangt runtime errors die anders een witte pagina geven.
 *
 * Wraps de hele app op het hoogste niveau. Bij een crash:
 * - Logt de error in de console (zodat we 'm zien).
 * - **Chunk-load-error** (na deploy: oude SW serveert oude HTML die naar
 *   nieuwe-niet-bestaande chunks verwijst) → eenmalig automatisch hard
 *   reloaden om PWA-cache te bypassen. Counter in sessionStorage tegen
 *   infinite loop.
 * - Anders: nette fallback met "Opnieuw laden"-knop + error-message.
 *
 * React error boundaries vangen alleen errors in render / lifecycle —
 * niet async errors of event handlers. Voor async (dynamic imports!)
 * draait een window 'unhandledrejection'-listener in main.jsx.
 */

// Detecteer chunk-load-errors (Vite/Webpack/Rollup geven net andere msg).
export function isChunkLoadError(error) {
  if (!error) return false;
  const msg = (error.message || String(error)).toLowerCase();
  return (
    msg.includes("failed to fetch dynamically imported module") ||
    msg.includes("loading chunk") ||
    msg.includes("loading css chunk") ||
    msg.includes("chunkloaderror") ||
    msg.includes("importing a module script failed") ||
    // Safari-variant
    msg.includes("module specifier")
  );
}

// Recovery: clear SW + cache, dan hard reload met cache-buster.
// Houdt counter bij in sessionStorage om infinite loop te voorkomen
// (als ook na reload nog steeds chunk-fout = écht stuk, toon fallback).
const RELOAD_KEY = "lk_chunk_reload_count";
const MAX_AUTO_RELOAD = 2;

export async function recoverFromChunkError() {
  try {
    const count = parseInt(sessionStorage.getItem(RELOAD_KEY) || "0", 10);
    if (count >= MAX_AUTO_RELOAD) {
      // Al meermalen geprobeerd — toon fallback, gebruiker doet hard reload.
      return false;
    }
    sessionStorage.setItem(RELOAD_KEY, String(count + 1));

    // 1. Service worker afkoppelen zodat hij niet meer oude HTML serveert.
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    // 2. Cache Storage leegmaken.
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch (e) {
    // Negeer fouten in cleanup — gewoon doorgaan met reload.
    // eslint-disable-next-line no-console
    console.warn("[ErrorBoundary] cache cleanup error:", e);
  }
  // 3. Hard reload met cache-buster query.
  const url = new URL(window.location.href);
  url.searchParams.set("_cb", Date.now().toString());
  window.location.replace(url.toString());
  return true;
}

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, recovering: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error("[ErrorBoundary] caught:", error, errorInfo);
    if (isChunkLoadError(error)) {
      // Probeer automatisch te herstellen (SW + cache wipe + reload).
      this.setState({ recovering: true });
      recoverFromChunkError().then((started) => {
        if (!started) {
          // Auto-recovery limiet bereikt — laat normale fallback zien.
          this.setState({ recovering: false });
        }
      });
    }
  }

  handleReload = () => {
    if (typeof window !== "undefined") {
      // Force hard reload zodat oude SW geen oude HTML meer serveert.
      recoverFromChunkError().catch(() => window.location.reload());
    }
  };

  handleHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  render() {
    if (this.state.recovering) {
      return (
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "linear-gradient(160deg, #0f1729 0%, #162033 50%, #1a2744 100%)",
            color: "#e0e6f0",
            fontFamily: "'Nunito', sans-serif",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 360 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>♻️</div>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 20, margin: "0 0 8px" }}>
              Nieuwe versie gevonden
            </h2>
            <p style={{ fontSize: 14, color: "#bcd", margin: 0 }}>
              We laden de nieuwste versie van Leerkwartier...
            </p>
          </div>
        </div>
      );
    }
    if (this.state.hasError) {
      const msg = this.state.error?.message || String(this.state.error || "Onbekende fout");
      return (
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "linear-gradient(160deg, #0f1729 0%, #162033 50%, #1a2744 100%)",
            color: "#e0e6f0",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <div
            style={{
              maxWidth: 480,
              width: "100%",
              padding: 24,
              borderRadius: 16,
              background: "rgba(30,45,70,0.6)",
              border: "1px solid #2a3f5f",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>😵</div>
            <h2
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 22,
                margin: "0 0 8px",
                color: "#fff",
              }}
            >
              Iets ging mis
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.5, color: "#bcd", margin: "0 0 16px" }}>
              De app is een fout tegengekomen en kan niet verder. Probeer opnieuw te laden;
              als het blijft, deel de boodschap hieronder met de maker.
            </p>
            <pre
              style={{
                background: "rgba(0,0,0,0.3)",
                padding: 12,
                borderRadius: 8,
                fontSize: 12,
                color: "#ff8a80",
                overflow: "auto",
                maxHeight: 140,
                textAlign: "left",
                margin: "0 0 16px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {msg}
            </pre>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button
                onClick={this.handleReload}
                style={{
                  padding: "10px 18px",
                  borderRadius: 12,
                  border: "none",
                  background: "linear-gradient(135deg, #00c853, #00a040)",
                  color: "#fff",
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                🔄 Opnieuw laden
              </button>
              <button
                onClick={this.handleHome}
                style={{
                  padding: "10px 18px",
                  borderRadius: 12,
                  border: "1px solid #2a3f5f",
                  background: "transparent",
                  color: "#e0e6f0",
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                🏠 Naar home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
