console.warn("It is running successfully!");

const VERSION = "v1";

/* self.addEventListener("install", (event) => {
    event.waitUntil(preCache());
});

async function preCache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/bundle.js',
        'https://fonts.gstatic.com/s/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
        'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',
        'https://api.escuelajs.co/api/v1/products',
        'http://localhost:3005/12d651c0175c627ed301.png',
        'chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js',
        'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Roboto:wght@700&display=swap'
    ]);
}

self.addEventListener("fetch", (event) => {
    const request = event.request;
    if(request.method !== "GET") {
        return;
    }

    // search on cache.
    event.respondWith(cachedResponse(request));


});

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response;
} */