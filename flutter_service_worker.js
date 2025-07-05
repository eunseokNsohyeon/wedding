'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"favicon.ico": "55d1bb6f2a6ebd48b124ffaddf3e06dd",
"manifest.json": "31e7c2c6af001e2496b0ee305fb34798",
"main.dart.js": "06740d48642ca8e50f96317dcff9dc4a",
"style.css": "32252940f3d678e7832a370e5d189beb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"index.html": "7adf056f1738abd80a15eff144fcde38",
"/": "7adf056f1738abd80a15eff144fcde38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "284b7ff327dd42e32bd1adbee7215e4d",
"assets/AssetManifest.bin": "605a529eab8921e5569d13b721bf62c2",
"assets/NOTICES": "4c9d1e4c7dc4dade4a157f17c7f555db",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/photo_08.jpg": "099334b41dbc9b1560f0caa54aef68d7",
"assets/assets/images/fourth_03.jpg": "8c903c2ed6520b7e3bce1fbd9ec6eaee",
"assets/assets/images/og_image.jpg": "12e76024531caa158a1695c5a03ffdac",
"assets/assets/images/photo_03.jpg": "d831797fa65b438d325c1c54f6b88170",
"assets/assets/images/second.jpg": "070ac381da6226bad53c1816de96ecce",
"assets/assets/images/photo_21.jpg": "e85e57638891fde2965fce6e6d3ec1e7",
"assets/assets/images/photo_22.jpg": "12e76024531caa158a1695c5a03ffdac",
"assets/assets/images/photo_10.jpg": "efeb1ede1d3ef007a3181b1aec1cb1b3",
"assets/assets/images/photo_09.jpg": "45f8ce3a61afaa53f206ae9d02baa328",
"assets/assets/images/photo_17.jpg": "f3c95301c1136429e1f3a8fa45503093",
"assets/assets/images/first.jpg": "0bea654c215fdfa40aca8ba05b5cc683",
"assets/assets/images/photo_02.jpg": "b06920dbb0c963caa2a225536a73db74",
"assets/assets/images/photo_19.jpg": "3ed7cc4b094b6a1cc4915fb9d3b84a41",
"assets/assets/images/photo_16.jpg": "fd088ee230e6faaba8fc3b99a742a945",
"assets/assets/images/photo_20.jpg": "825459f66fd8987eb3a1196b141136e8",
"assets/assets/images/photo_11.jpg": "3f3a08163d5aabc5a871460fa863d146",
"assets/assets/images/photo_04.jpg": "52ac25d7004d1631a3e10cce6c322a5a",
"assets/assets/images/photo_18.jpg": "ea6ae787966e3a9102a28b6302ac8c94",
"assets/assets/images/photo_06.jpg": "dcbc297fbc8e7bfbacbba182f44cb81c",
"assets/assets/images/photo_01.jpg": "33a11062c4fb0eacc2bc4854bc95a852",
"assets/assets/images/bar.jpeg": "cd28b5c1455c4dba615fe036ba79bb12",
"assets/assets/images/fourth_02.jpg": "bfa89c0336d83bcbcfadaa374269d410",
"assets/assets/images/third.jpg": "afd991df69a3f7776079563129d3c84e",
"assets/assets/images/photo_05.jpg": "23d2d847bd004d184a41a63da339b6d5",
"assets/assets/images/t_map.png": "d91e15910c3e3a10c64923e53f8a76b9",
"assets/assets/images/naver_map.png": "0a639e19a375dea8889b207c995e0687",
"assets/assets/images/third_button.png": "6741119c442db5c1e48631f7033b3e10",
"assets/assets/images/gallery.jpg": "9090d3ea27eb0f54693d16629691ef9d",
"assets/assets/images/photo_13.jpg": "4911632f503782c3c8864dc68b502aca",
"assets/assets/images/photo_07.jpg": "c2f6fe8bf42c87bac0d288027b1c9583",
"assets/assets/images/fourth_04.jpg": "9862ba90de07a2c894d0178e6e3e96d4",
"assets/assets/images/photo_15.jpg": "f907b7df3e875a21daeef5d3093694df",
"assets/assets/images/kakao_map.png": "532188f2967dfc86cddabf7f8eac8ea0",
"assets/assets/images/photo_14.jpg": "6aeae83b0d540671f60e1c7bc7c93bf6",
"assets/assets/images/fourth_01.jpg": "c4d2c4470da368f88b3da3d8a49bd5ac",
"assets/assets/images/photo_12.jpg": "7bf36ad661acc11a0d8950ccef620388",
"assets/AssetManifest.json": "b709b40be084b10f92f4ef514f33d55a",
"assets/fonts/MaterialIcons-Regular.otf": "771322eda8df530e1843c857f1189591",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter_bootstrap.js": "2c3757613479122be23a8065a13b1339",
"version.json": "3d0a8b3e454aa8006e8b32fefcd8e5e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
