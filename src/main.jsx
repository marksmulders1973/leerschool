import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ReclameBol from "./components/ReclameBol.jsx";
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
}

// Verborgen promo-/showcase-route voor de 3D-wereldbol (?reclamebol). Vóór de
// App-router afgevangen zodat we de hook-volgorde van App.jsx niet raken én geen
// rolkeuze/onboarding-chrome tonen op de opname.
const isReclameBol =
  typeof window !== "undefined" && /[?&]reclamebol\b/.test(window.location.search);

if (isReclameBol) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ErrorBoundary>
        <ReclameBol />
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
