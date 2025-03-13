self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("volt-audio-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/manifest.json",
                "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            ]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
