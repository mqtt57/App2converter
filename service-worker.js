self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('beauty-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/contact.html',
        '/gallery.html',
        '/style.css',
        '/script.js',
        '/manifest.json',
        '/images/icon.svg',
        '/images/before.svg',
        '/images/after.svg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
