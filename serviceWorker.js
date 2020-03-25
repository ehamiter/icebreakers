const staticIcebreakers = "icebreakers-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/icebreakers.css",
  "/js/icebreakers.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticIcebreakers).then(cache => {
      cache.addAll(assets)
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});
