// Google Sign-In via Google Identity Services (GIS) + Supabase signInWithIdToken.
//
// Achtergrond: Supabase's standaard `signInWithOAuth({ provider: "google" })`
// stuurt de gebruiker naar Google met een redirect_uri die hardcoded is naar
// `<project>.supabase.co/auth/v1/callback`. Google toont die URL in z'n
// inlogscherm ("Doorgaan naar uxqnzrymyjbcpuzqktdm.supabase.co"), wat
// onprofessioneel oogt. Een custom domain op Supabase oplossen kost een Pro-
// abonnement ($25/mnd).
//
// Met GIS kunnen we de Google-account-picker via een popup tonen zonder
// redirect-flow. We krijgen direct een ID-token in de browser en wisselen
// die in voor een Supabase-sessie via signInWithIdToken. Geen URL-prompt
// meer voor de gebruiker.
//
// Vereisten in Google Cloud Console (eenmalig):
//   - OAuth-client (Web): `https://leerkwartier.app` toevoegen aan
//     "Authorized JavaScript origins" (was al voor redirect-flow)
//
// Vereisten in Supabase: Google-provider geconfigureerd (was al) — geen extra
// instellingen voor signInWithIdToken nodig zolang client-ID matcht.

import supabase from "../supabase.js";

const GOOGLE_CLIENT_ID = "1050759104005-r4be3k7l767p070eeg1nuglsnkj02dum.apps.googleusercontent.com";
const GIS_SCRIPT = "https://accounts.google.com/gsi/client";

let scriptPromise = null;
function loadGisScript() {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) return resolve();
    const existing = document.querySelector(`script[src="${GIS_SCRIPT}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("GIS-script kon niet laden")));
      return;
    }
    const s = document.createElement("script");
    s.src = GIS_SCRIPT;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("GIS-script kon niet laden"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

function bytesToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function makeNonce() {
  const random = new Uint8Array(16);
  crypto.getRandomValues(random);
  const nonce = bytesToHex(random);
  const hashBuf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(nonce));
  const hashed = bytesToHex(new Uint8Array(hashBuf));
  return { nonce, hashed };
}

/**
 * Probeert in te loggen via de GIS-popup. Returnt de Supabase-sessie bij
 * succes, of throwt bij falen (zodat de aanroeper kan terugvallen op de
 * standaard OAuth-redirect-flow).
 */
export async function signInWithGoogleIdToken({ timeoutMs = 90000 } = {}) {
  await loadGisScript();
  if (!window.google?.accounts?.id) {
    throw new Error("Google Identity Services niet beschikbaar");
  }
  const { nonce, hashed } = await makeNonce();

  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = (fn, value) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { window.google.accounts.id.cancel(); } catch (e) {}
      fn(value);
    };
    const timer = setTimeout(() => finish(reject, new Error("Google sign-in timeout")), timeoutMs);

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      nonce: hashed,
      use_fedcm_for_prompt: true,
      callback: async (response) => {
        if (settled) return;
        if (!response?.credential) {
          return finish(reject, new Error("Geen Google ID-token ontvangen"));
        }
        try {
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: "google",
            token: response.credential,
            nonce,
          });
          if (error) finish(reject, error);
          else finish(resolve, data);
        } catch (e) {
          finish(reject, e);
        }
      },
    });

    // Toon de account-picker. Bij FedCM (Chrome 109+) is dit een browser-native
    // overlay; bij oudere browsers een Google-popup. Als 'ie niet vertoond
    // wordt (cookies geblokt, te vaak gedismissed) krijgen we een notification
    // en gooien we — de aanroeper valt dan terug op de redirect-flow.
    window.google.accounts.id.prompt((notification) => {
      if (settled) return;
      if (notification?.isNotDisplayed?.()) {
        const reason = notification.getNotDisplayedReason?.() || "onbekend";
        finish(reject, new Error("Google prompt werd niet getoond: " + reason));
      } else if (notification?.isSkippedMoment?.()) {
        const reason = notification.getSkippedReason?.() || "onbekend";
        finish(reject, new Error("Google prompt overgeslagen: " + reason));
      }
    });
  });
}
