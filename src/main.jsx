import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary, { isChunkLoadError, recoverFromChunkError } from "./app/ErrorBoundary.jsx";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
