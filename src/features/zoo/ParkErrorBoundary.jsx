// ParkErrorBoundary (park-zwerm 17 jul): zonder deze boundary gooide één
// park-fout (mislukte GLB-fetch op wankel mobiel internet, WebGL-faal op een
// oude Android-GPU) de HELE app naar de technische "Iets ging mis"-pagina.
// Nu blijft de schade beperkt tot het park, met een kindvriendelijke melding
// en een echte tweede kans. Patroon = TeaserErrorBoundary (HomePage.jsx).
import { Component } from "react";

export default class ParkErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { fout: false };
  }

  static getDerivedStateFromError() {
    return { fout: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.warn("[park] scene-fout opgevangen:", error?.message);
  }

  render() {
    if (this.state.fout) {
      return (
        <div style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 14, padding: 24,
          background: "linear-gradient(180deg, #9fd8ff 0%, #cfeee0 100%)",
          textAlign: "center", fontFamily: "system-ui",
        }}>
          <div style={{ fontSize: 52 }}>😴</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#1d3a24" }}>Het park wil even niet laden</div>
          <div style={{ fontSize: 14, color: "#33523d", maxWidth: 320, lineHeight: 1.5 }}>
            Geen zorgen — je muntjes en je park zijn veilig opgeslagen. Check je internet en probeer het opnieuw.
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => { this.setState({ fout: false }); this.props.onRetry && this.props.onRetry(); }}
              style={{ padding: "12px 22px", borderRadius: 12, border: "none", background: "#00C853", color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer", minHeight: 44 }}
            >
              🔄 Opnieuw proberen
            </button>
            {this.props.onHome && (
              <button
                onClick={this.props.onHome}
                style={{ padding: "12px 22px", borderRadius: 12, border: "2px solid rgba(0,0,0,0.18)", background: "rgba(255,255,255,0.7)", color: "#1d3a24", fontWeight: 700, fontSize: 15, cursor: "pointer", minHeight: 44 }}
              >
                🏠 Terug naar leren
              </button>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
