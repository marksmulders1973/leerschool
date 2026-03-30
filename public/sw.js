const CACHE = "studiebol-v1";

const APP_SHELL = [
  "/",
  "/src/main.jsx",
  "/manifest.json",
  "/icons/icon.svg",
  "/intro.mp4",
];

// Installeren: cache de app shell
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

// Activeren: verwijder oude caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: netwerk eerst, cache als fallback
self.addEventListener("fetch", (e) => {
  // Sla API-calls altijd over (altijd netwerk)
  if (e.request.url.includes("/api/")) return;

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Sla succesvolle responses op in cache
        if (res.ok && e.request.method === "GET") {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
