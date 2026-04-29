import { Component } from "react";

/**
 * ErrorBoundary — vangt runtime errors die anders een witte pagina geven.
 *
 * Wraps de hele app op het hoogste niveau. Bij een crash:
 * - Logt de error in de console (zodat we 'm zien).
 * - Toont een nette fallback met een "Opnieuw laden"-knop.
 * - Toont de error-message zodat de gebruiker hem kan delen.
 *
 * React error boundaries vangen alleen errors in render / lifecycle —
 * niet async errors of event handlers. Voor die gevallen is ergens
 * anders error-handling nodig (try/catch).
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error("[ErrorBoundary] caught:", error, errorInfo);
  }

  handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  handleHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  render() {
    if (this.state.hasError) {
      const msg = this.state.error?.message || String(this.state.error || "Onbekende fout");
      return (
        <div
          style={{
            minHeight: "100vh",
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
