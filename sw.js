const CACHE_NAME = 'smarttour-cache-v1';
const urlsToCache = [
  '/Peta_Persebaran_Destinasi_Wisata_di_Kota_Semarang-/',
  '/Peta_Persebaran_Destinasi_Wisata_di_Kota_Semarang-/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
