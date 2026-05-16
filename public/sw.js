// __SW_VERSION__ wordt bij `vite build` vervangen door een build-timestamp
// (zie vite.config.js → injectSwVersion plugin). In dev mode blijft de
// placeholder staan; we vallen dan terug op een dev-versie zodat de SW
// nog werkt zonder dat we de browser-cache moeten resetten.
const RAW_VERSION = "__SW_VERSION__";
const CACHE_VERSION = RAW_VERSION.startsWith("__") ? "dev-" + Date.now() : RAW_VERSION;
const CACHE_SHELL = `studiebol-shell-${CACHE_VERSION}`;
const CACHE_ASSETS = `studiebol-assets-${CACHE_VERSION}`;

// __SW_PRECACHE_ASSETS__ wordt bij `vite build` vervangen door een JSON-array
// van kritieke asset-paths (entry-bundle + vendor-react + vendor-router) met
// hun build-hashes. Zonder dit blijft de SW alleen "/" pre-cachen, waardoor
// repeat-visits offline alsnog een netwerk-roundtrip moeten doen voor JS.
// In dev mode blijft de placeholder een lege array zodat dev-server werkt.
const PRECACHE_ASSETS_RAW = "__SW_PRECACHE_ASSETS__";
const PRECACHE_ASSETS = (() => {
  if (PRECACHE_ASSETS_RAW.startsWith("__")) return [];
  try { return JSON.parse(PRECACHE_ASSETS_RAW); } catch { return []; }
})();

const APP_SHELL = [
  "/",
  "/manifest.json",
  "/icons/icon.svg",
  ...PRECACHE_ASSETS,
];

// Static asset extensions
const STATIC_EXTENSIONS = /\.(js|css|png|jpg|jpeg|svg|woff2|woff|ttf|ico)(\?.*)?$/;

// Install: cache de app shell + skipWaiting zodat nieuwe SW direct activeert.
// addAll is atomic: bij failure van 1 asset hele install faalt + oude SW
// blijft actief. Daarom: kritieke shell ("/", manifest, icon) via addAll,
// en de extra precache-assets per stuk via Promise.allSettled zodat een
// individuele hash-mismatch (asset hernoemd tussen builds) de install niet
// onderuit haalt.
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_SHELL).then(async (cache) => {
      await cache.addAll(["/", "/manifest.json", "/icons/icon.svg"]);
      if (PRECACHE_ASSETS.length) {
        await Promise.allSettled(
          PRECACHE_ASSETS.map((asset) =>
            cache.add(asset).catch(() => {})
          )
        );
      }
      await self.skipWaiting();
    })
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

// A12 (10-agent circulariteit-review 2026-05-10) — Web Push voor over-dagen.
// Notification payload (JSON): { title, body, url?, icon?, tag? }
self.addEventListener("push", (e) => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch {}
  const title = data.title || "Leerkwartier";
  const options = {
    body: data.body || "Tijd om te oefenen!",
    icon: data.icon || "/icons/icon.svg",
    badge: data.badge || "/icons/icon.svg",
    data: { url: data.url || "/" },
    tag: data.tag || "leerkwartier-reminder",
    renotify: false,
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// Klik op de notificatie opent of focust de app op de juiste URL.
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const target = e.notification.data?.url || "/";
  e.waitUntil((async () => {
    const clientsList = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of clientsList) {
      if (c.url.includes(self.location.origin)) {
        c.focus();
        try { c.navigate(target); } catch {}
        return;
      }
    }
    await self.clients.openWindow(target);
  })());
});
