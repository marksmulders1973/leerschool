const CACHE_VERSION = "v7";
const CACHE_SHELL = `studiebol-shell-${CACHE_VERSION}`;
const CACHE_ASSETS = `studiebol-assets-${CACHE_VERSION}`;

const APP_SHELL = [
  "/",
  "/manifest.json",
  "/icons/icon.svg",
];

// Static asset extensions
const STATIC_EXTENSIONS = /\.(js|css|png|jpg|jpeg|svg|woff2|woff|ttf|ico)(\?.*)?$/;

// Install: cache de app shell + skipWaiting zodat nieuwe SW direct activeert
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_SHELL)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: oude caches purgen + claim controle over alle clients
self.addEventListener("activate", (e) => {
  const CURRENT_CACHES = [CACHE_SHELL, CACHE_ASSETS];
  e.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => !CURRENT_CACHES.includes(k))
              .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
      .then(() =>
        // alle open tabs/instances melden dat er een nieuwe versie actief is
        self.clients.matchAll({ type: "window" }).then((clients) => {
          clients.forEach((c) => c.postMessage({ type: "SW_UPDATED", version: CACHE_VERSION }));
        })
      )
  );
});

// Stale-while-revalidate voor static assets:
// - cache eerst serveren (snel), parallel netwerk-fetch + cache update
// - bij geen cache: gewoon netwerk-fetch
// HTML/navigation: network-first, fall back naar cache
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  if (e.request.method !== "GET") return;
  if (url.includes("/api/")) return;

  // Cross-origin? laat de browser doen
  try {
    const u = new URL(url);
    if (u.origin !== self.location.origin) return;
  } catch {}

  if (STATIC_EXTENSIONS.test(url)) {
    e.respondWith(
      caches.open(CACHE_ASSETS).then(async (cache) => {
        const cached = await cache.match(e.request);
        // Network fetch + cache update op de achtergrond
        const networkFetch = fetch(e.request)
          .then((response) => {
            if (response.ok) cache.put(e.request, response.clone());
            return response;
          })
          .catch(() => cached);
        // Snel terug met cache, anders wachten op netwerk
        return cached || networkFetch;
      })
    );
    return;
  }

  // HTML / navigation: network-first
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_SHELL).then((cache) => cache.put(e.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});

// Clients kunnen via postMessage een onmiddellijke skipWaiting forceren
// (gebruikt door de auto-update banner: "Nu vernieuwen")
self.addEventListener("message", (e) => {
  if (e.data?.type === "SKIP_WAITING") self.skipWaiting();
});
