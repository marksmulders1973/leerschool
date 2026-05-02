import { useEffect, useState } from "react";

// Volgt navigator.onLine + window online/offline events. Returnt boolean
// `isOffline` zodat App.jsx een offline-banner kan tonen wanneer de PWA
// zonder netwerk draait (service worker serveert standaard-vragen).
export function useOnline() {
  const [isOffline, setIsOffline] = useState(
    typeof navigator !== "undefined" ? !navigator.onLine : false
  );
  useEffect(() => {
    const on = () => setIsOffline(false);
    const off = () => setIsOffline(true);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);
  return isOffline;
}
