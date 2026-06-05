// Publieke hook-pagina /kubus.html — deelbaar op social.
// De kubus groeit/krimpt en toont de inhoud; tik erop → door naar de homepage
// van Leerkwartier (de originele 3D-kubus). Mee-gebouwd via vite.config input.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KubusGroeiAnimatie from "./components/learn/3d/KubusGroeiAnimatie.jsx";

const APP_URL = "https://leerkwartier.app/";

function KubusLanding() {
  return (
    <>
      <KubusGroeiAnimatie height={320} linkHref={APP_URL} />
      <p className="lk-intro">
        Een kwartier per dag — écht begrijpen wat je leert.{" "}
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
