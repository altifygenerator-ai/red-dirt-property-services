// Offline app shell only. Customer records are never stored in Cache Storage.
const CACHE = "red-dirt-office-shell-v1";
const SHELL = ["/office", "/office.webmanifest", "/icon-192.png", "/icon-512.png"];
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()).catch(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(Promise.all([
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("red-dirt-office-shell-") && key !== CACHE).map((key) => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const allowed = url.pathname === "/office" || url.pathname === "/office/" || url.pathname.startsWith("/_next/static/") || SHELL.includes(url.pathname);
  if (!allowed) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok && response.type === "basic") {
        const cache = await caches.open(CACHE);
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    } catch {
      const fallback = await caches.match(request);
      if (fallback) return fallback;
      if (request.mode === "navigate") return (await caches.match("/office")) || Response.error();
      return Response.error();
    }
  })());
});
