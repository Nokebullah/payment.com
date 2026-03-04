const CACHE_NAME = "garage-pay-v1";
const assets = [
  "./",
  "./index.html",
  "./logo-icon.png",
  "./phonepe-logo.png"
];

// Install Service Worker
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Fetch events for offline support
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
