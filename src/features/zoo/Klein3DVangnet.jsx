// Klein3DVangnet (15 nov 2026): vangnet om de kleine 3D-koppen en mini-maatjes.
//
// Aanleiding: op 15 nov viel /dierentuin om op een toestel dat geen 3D kan tekenen
// ("null is not an object (evaluating 'r.getShaderPrecisionFormat')"). Het park zelf zit
// in ParkErrorBoundary, maar de maatje-kop in de hulp-knoppen en de mini-maatjes in de
// kiezer hebben elk een eigen mini-canvas daarbuiten. Eén mislukte canvas gooide zo het
// hele scherm naar "Iets ging mis". Nu valt alleen het plaatje terug op de emoji (of op
// niets), en de rest van het scherm blijft gewoon werken.
// Meetpunt: app_fout met plek "kop3d" (telt niet als omgevallen scherm).
import { Component } from "react";
import { meldFout } from "../../app/meldFout.js";

export default class Klein3DVangnet extends Component {
  constructor(props) {
    super(props);
    this.state = { fout: false };
  }

  static getDerivedStateFromError() {
    return { fout: true };
  }

  componentDidCatch(error) {
    meldFout(error, "kop3d");
  }

  render() {
    if (this.state.fout) return this.props.fallback ?? null;
    return this.props.children;
  }
}
