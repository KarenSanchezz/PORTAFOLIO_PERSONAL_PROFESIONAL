// service-worker.js

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('karen-portfolio-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        // Agrega aquí los archivos que deseas que se almacenen en caché
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
