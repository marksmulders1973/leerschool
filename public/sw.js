const CACHE_SHELL = "studiebol-shell-v4";
const CACHE_ASSETS = "studiebol-assets-v4";

const APP_SHELL = [
  "/",
  "/manifest.json",
  "/icons/icon.svg",
];

// Static asset extensions that get cache-first treatment
const STATIC_EXTENSIONS = /\.(js|css|png|jpg|jpeg|svg|woff2|woff|ttf|ico)(\?.*)?$/;

// Installeren: cache de app shell
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_SHELL)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activeren: verwijder oude caches
self.addEventListener("activate", (e) => {
  const CURRENT_CACHES = [CACHE_SHELL, CACHE_ASSETS];
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => !CURRENT_CACHES.includes(k))
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch strategy:
// - API calls: always network, no cache
// - Static assets (js/css/images/fonts): cache-first
// - HTML navigation: network-first, fall back to cache
self.addEventListener("fetch", (e) => {
  const url = e.request.url;

  // Skip non-GET requests
  if (e.request.method !== "GET") return;

  // API calls: always network only
  if (url.includes("/api/")) return;

  // Static assets: cache-first
  if (STATIC_EXTENSIONS.test(url)) {
    e.respondWith(
      caches.open(CACHE_ASSETS).then(async (cache) => {
        const cached = await cache.match(e.request);
        if (cached) return cached;

        try {
          const response = await fetch(e.request);
          if (response.ok) {
            cache.put(e.request, response.clone());
          }
          return response;
        } catch {
          return cached || new Response("Offline", { status: 503 });
        }
      })
    );
    return;
  }

  // HTML / navigation: network-first, fall back to cache
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
