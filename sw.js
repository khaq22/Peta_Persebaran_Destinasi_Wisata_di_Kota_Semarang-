const CACHE_NAME = 'smarttour-cache-v1';
const urlsToCache = [
  '/PrototypeSmartTourism_App/',
  '/PrototypeSmartTourism_App/index.html',
  // Tambahkan file CSS atau JS utama Anda di sini jika ada, contoh:
  // '/PrototypeSmartTourism_App/style.css'
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
