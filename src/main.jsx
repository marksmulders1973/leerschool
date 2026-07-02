import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { BioPlaatPagina } from "./components/learn/bio/KlikbarePlaat.jsx";
import { BIO_PLATEN } from "./data/bioPlaten.jsx";
import ErrorBoundary, { isChunkLoadError, recoverFromChunkError } from "./app/ErrorBoundary.jsx";
import { Analytics } from "@vercel/analytics/react";
import "./shared/tokens.css";

// PWA chunk-load-error vangen voordat React 'm ziet. Bij async dynamic
// imports (React.lazy in Suspense, route-chunks) komt de fout vaak via
// unhandledrejection — buiten ErrorBoundary om. Dan zelf cache wipen +
// reloaden zodat de browser nieuwe HTML + chunks ophaalt.
if (typeof window !== "undefined") {
  window.addEventListener("unhandledrejection", (event) => {
    if (isChunkLoadError(event.reason)) {
      // eslint-disable-next-line no-console
      console.warn("[chunk-load] auto-recovery vanwege deploy mismatch");
      event.preventDefault();
      recoverFromChunkError().catch(() => window.location.reload());
    }
  });
  window.addEventListener("error", (event) => {
    if (isChunkLoadError(event.error || { message: event.message })) {
      // eslint-disable-next-line no-console
      console.warn("[chunk-load] auto-recovery (sync error)");
      event.preventDefault();
      recoverFromChunkError().catch(() => window.location.reload());
    }
  });
  // Vite's eigen signaal voor een mislukte lazy-import (bv. de park-chunk na een
  // nieuwe deploy). Vuurt direct → meteen herstellen, vóór een witte pagina.
  window.addEventListener("vite:preloadError", (event) => {
    // eslint-disable-next-line no-console
    console.warn("[chunk-load] auto-recovery (vite:preloadError)");
    event.preventDefault();
    recoverFromChunkError().catch(() => window.location.reload());
  });
}

// ?bioplaat=cel — directe showcase van een interactieve biologie-plaat (idee van
// gebruiker "bob"). Vóór de App-router afgevangen zodat we de hook-volgorde van
// App.jsx niet raken én geen rolkeuze/onboarding-chrome tonen.
// (De ?reclamebol-showcaseroute is 18 jun verwijderd — 9 opens → 0 conversie;
// bestaande social-links vallen nu door naar de normale home.)
const _params =
  typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
const bioPlaatId = _params.get("bioplaat");

// Tijdelijk build-stempel (Mark 2 jul, tijdens de park-bouwfase): piepklein
// datum/tijd-label rechtsboven zodat je ziet of je naar de laatste versie
// kijkt. Weghalen = dit blokje + de __BUILD_STEMPEL__-define in vite.config.js.
try {
  const stempel = document.createElement("div");
  stempel.textContent = "bouw " + __BUILD_STEMPEL__;
  stempel.style.cssText = "position:fixed;top:1px;right:5px;z-index:99999;font:600 9px system-ui;color:rgba(30,40,50,0.5);pointer-events:none;text-shadow:0 0 3px rgba(255,255,255,0.9)";
  document.body.appendChild(stempel);
} catch { /* nooit de app laten breken om een label */ }

if (bioPlaatId && BIO_PLATEN[bioPlaatId]) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BioPlaatPagina plaat={BIO_PLATEN[bioPlaatId]} />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
        {/* Vercel Web Analytics — cookieloos, geaggregeerd, geen
            persoonsgegevens. Telt bezoekers + paginaweergaven. Moet in het
            Vercel-dashboard onder Analytics aangezet worden. */}
        <Analytics />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
}
