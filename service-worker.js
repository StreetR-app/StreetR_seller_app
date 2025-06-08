const CACHE_NAME = "streetr-seller-cache-v1";
const urlsToCache = [
  "/StreetR_seller_app/",
  "/StreetR_seller_app/index.html",
  "/StreetR_seller_app/css/style.css",
  "/StreetR_seller_app/manifest.json",
  "/StreetR_seller_app/assets/icon-192x192.png",
  "/StreetR_seller_app/assets/icon-512x512.png",
  "/StreetR_seller_app/js/supabaseClient.js",
  "/StreetR_seller_app/js/auth.js",
  "/StreetR_seller_app/js/profile.js",
  "/StreetR_seller_app/js/menu.js",
  "/StreetR_seller_app/js/orders.js",
  "/StreetR_seller_app/js/main.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
