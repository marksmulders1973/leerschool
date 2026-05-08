// PWA-install hook: vangt beforeinstallprompt-event, detecteert platform,
// geeft een uniforme API voor de install-knop overal in de app.
//
// Achtergrond (Mark feedback 2026-05-08, install-knop werkte niet):
//   - Chrome/Edge/Samsung Internet vuren `beforeinstallprompt` af zodra
//     de PWA-criteria gehaald zijn (manifest + SW met fetch + HTTPS +
//     gebruikersinteractie). Wij vangen dat in index.html en bewaren
//     het event op `window.__pwaInstallPrompt`. Deze hook leest dat.
//   - iOS Safari heeft GEEN beforeinstallprompt — daar moet handmatige
//     "Deel → Zet op beginscherm". `canPromptNatively=false` op iOS.
//   - Firefox desktop heeft geen install (alleen Android-Firefox).
//   - Als app al draait als PWA (`display-mode: standalone`): hide knop.
//
// Returns:
//   {
//     canShow,            // moet er überhaupt een install-knop getoond?
//     canPromptNatively,  // gaat klikken een native prompt openen?
//     platform,           // "ios" | "android" | "desktop" | "other"
//     browser,            // "chrome" | "edge" | "firefox" | "safari" | "samsung" | "other"
//     installing,         // staat de prompt nu open?
//     promptInstall,      // async: trigger de native prompt
//     getManualInstructions, // wat moet de gebruiker doen als geen native prompt?
//   }

import { useEffect, useState, useCallback } from "react";

function detectPlatform() {
  if (typeof navigator === "undefined") return { platform: "other", browser: "other" };
  const ua = navigator.userAgent;
  const lc = ua.toLowerCase();

  // Platform.
  let platform = "other";
  if (/iphone|ipad|ipod/i.test(ua)) platform = "ios";
  else if (/android/i.test(ua)) platform = "android";
  else if (/windows|macintosh|linux/i.test(ua) && !/mobile/i.test(ua)) platform = "desktop";

  // Browser (volgorde matters — Edge bevat 'chrome', Samsung bevat 'chrome').
  let browser = "other";
  if (/edg\//i.test(ua)) browser = "edge";
  else if (/samsungbrowser/i.test(lc)) browser = "samsung";
  else if (/firefox|fxios/i.test(lc)) browser = "firefox";
  else if (/chrome|crios/i.test(lc)) browser = "chrome";
  else if (/safari/i.test(lc) && !/chrome|crios/i.test(lc)) browser = "safari";

  return { platform, browser };
}

function isStandaloneNow() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(display-mode: standalone)").matches) return true;
  if (window.matchMedia?.("(display-mode: minimal-ui)").matches) return true;
  // iOS Safari legacy:
  if (window.navigator.standalone) return true;
  return false;
}

export default function usePwaInstall() {
  const [installEvent, setInstallEvent] = useState(
    typeof window !== "undefined" ? window.__pwaInstallPrompt || null : null
  );
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [standalone, setStandalone] = useState(isStandaloneNow());
  const { platform, browser } = detectPlatform();

  // Live updates op event en appinstalled.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPrompt = (e) => {
      e.preventDefault();
      window.__pwaInstallPrompt = e;
      setInstallEvent(e);
    };
    const onInstalled = () => {
      setInstalled(true);
      setInstallEvent(null);
      window.__pwaInstallPrompt = null;
    };
    const onModeChange = () => setStandalone(isStandaloneNow());

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    const mq = window.matchMedia?.("(display-mode: standalone)");
    mq?.addEventListener?.("change", onModeChange);

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      mq?.removeEventListener?.("change", onModeChange);
    };
  }, []);

  // iOS heeft NOOIT beforeinstallprompt. Andere browsers: altijd false totdat
  // het event er is (Chrome eist user-engagement, kan even duren).
  const canPromptNatively = !!installEvent;

  // Knop tonen? Niet als al standalone of net geïnstalleerd. Op iOS Safari
  // wel tonen — leidt naar instructie-modal. Op desktop Firefox: niet,
  // want daar kan helemaal niet geïnstalleerd worden.
  const isInstallableBrowser =
    browser === "chrome" || browser === "edge" || browser === "samsung" ||
    (platform === "ios" && browser === "safari");
  const canShow = !standalone && !installed && isInstallableBrowser;

  // Trigger native prompt of poll voor het event.
  const promptInstall = useCallback(async () => {
    if (installing) return { result: "already-running" };
    setInstalling(true);

    // Als het event al binnen is: direct prompten.
    let evt = installEvent || (typeof window !== "undefined" ? window.__pwaInstallPrompt : null);
    if (!evt) {
      // Wacht max 2.5s — Chrome levert het soms vlak nadat de pagina actief is.
      evt = await new Promise((resolve) => {
        let done = false;
        const handler = (e) => {
          if (done) return;
          done = true;
          e.preventDefault();
          window.__pwaInstallPrompt = e;
          resolve(e);
        };
        window.addEventListener("beforeinstallprompt", handler, { once: true });
        const interval = setInterval(() => {
          if (done) return;
          if (window.__pwaInstallPrompt) {
            done = true;
            clearInterval(interval);
            window.removeEventListener("beforeinstallprompt", handler);
            resolve(window.__pwaInstallPrompt);
          }
        }, 200);
        setTimeout(() => {
          if (done) return;
          done = true;
          clearInterval(interval);
          window.removeEventListener("beforeinstallprompt", handler);
          resolve(null);
        }, 2500);
      });
    }

    if (!evt) {
      setInstalling(false);
      return { result: "no-prompt" }; // → toon manual instructions
    }

    try {
      evt.prompt();
      const choice = await evt.userChoice;
      setInstalling(false);
      if (choice.outcome === "accepted") {
        setInstallEvent(null);
        window.__pwaInstallPrompt = null;
        return { result: "accepted" };
      }
      return { result: "dismissed" };
    } catch (err) {
      setInstalling(false);
      return { result: "error", error: err };
    }
  }, [installEvent, installing]);

  // Instructies per platform/browser als native prompt niet kan.
  const getManualInstructions = useCallback(() => {
    if (platform === "ios") {
      if (browser !== "safari") {
        return {
          title: "Open eerst in Safari",
          steps: [
            "Op iPhone/iPad kun je een app alleen via Safari op je beginscherm zetten.",
            "Kopieer deze pagina-link en open 'm in Safari.",
            "Volg daar de stappen om Leerkwartier toe te voegen.",
          ],
        };
      }
      return {
        title: "Op iPhone of iPad",
        steps: [
          "Tik op het Deel-icoon onderaan (vierkant met pijl omhoog ↑).",
          "Scrol naar 'Zet op beginscherm' / 'Add to Home Screen'.",
          "Tik op 'Voeg toe' — Leerkwartier staat nu bij je apps.",
        ],
      };
    }
    if (platform === "android") {
      if (browser === "chrome" || browser === "samsung") {
        return {
          title: "Op Android",
          steps: [
            "Tik op het menu (⋮ rechtsboven).",
            "Kies 'App installeren' of 'Toevoegen aan startscherm'.",
            "Volg de instructie — Leerkwartier verschijnt op je startscherm.",
          ],
        };
      }
      if (browser === "firefox") {
        return {
          title: "Open in Chrome",
          steps: [
            "Firefox Android ondersteunt installeren beperkt — open de site in Chrome of Samsung Internet voor de beste ervaring.",
          ],
        };
      }
    }
    // Desktop:
    if (browser === "chrome" || browser === "edge") {
      return {
        title: "Op de computer",
        steps: [
          "Klik op het installatie-icoon rechts in de adresbalk (een schermpje met pijl).",
          "Of: klik op het menu (⋮ of ...) → 'App installeren' / 'Apps' → 'Deze site installeren'.",
          "Bevestig — Leerkwartier wordt een apart venster.",
        ],
      };
    }
    if (browser === "firefox") {
      return {
        title: "Firefox ondersteunt geen install",
        steps: [
          "Firefox desktop heeft geen ingebouwde PWA-install. Maak in plaats daarvan een bladwijzer (Ctrl/Cmd+D) of gebruik Chrome / Edge.",
        ],
      };
    }
    return {
      title: "App installeren",
      steps: [
        "In je browsermenu vind je meestal de optie 'Toevoegen aan startscherm' of 'App installeren'.",
        "Niet alle browsers ondersteunen dit — probeer Chrome, Edge of Safari (iOS).",
      ],
    };
  }, [platform, browser]);

  return {
    canShow,
    canPromptNatively,
    platform,
    browser,
    installing,
    standalone,
    installed,
    promptInstall,
    getManualInstructions,
  };
}
