// Publieke hook-pagina /kubus.html — deelbaar op social.
// De kubus groeit/krimpt en toont de inhoud; tik erop → door naar de homepage
// van Leerkwartier (de originele 3D-kubus). Mee-gebouwd via vite.config input.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KubusGroeiAnimatie from "./components/learn/3d/KubusGroeiAnimatie.jsx";

const APP_URL = "https://leerkwartier.app/";

// ?z=N zet de kubus stil op maat N (2/4/6…) — voor reclame-stills; ?ref=M
// bepaalt de camera-referentie zodat een reeks (2→4→6) zichtbaar groeit.
function KubusLanding() {
  const params = new URLSearchParams(window.location.search);
  const vastZ = Number(params.get("z")) || null;
  const cameraRef = vastZ ? Number(params.get("ref")) || Math.max(vastZ, 4) : null;
  return (
    <>
      <KubusGroeiAnimatie height={320} linkHref={APP_URL} vastZ={vastZ} cameraRef={cameraRef} />
      <p className="lk-intro">
        Een kwartier per dag leren, een leven lang slimmer.{" "}
        <a href={APP_URL}>Leerkwartier.app →</a>
      </p>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KubusLanding />
  </StrictMode>,
);
