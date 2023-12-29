'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8ce21367b6299cf1c8d56e88e232420a",
"index.html": "b14f012247201a7cff2e8f74f58f0bee",
"/": "b14f012247201a7cff2e8f74f58f0bee",
"main.dart.js": "f0fe158159c510189b9f7b07f8036743",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "3ea7c48f386f6db97f03ee1479e4b4dd",
"icons/Icon-192.png": "95f1e7108fb54fd82dedbc86e18ab480",
"icons/Icon-maskable-192.png": "95f1e7108fb54fd82dedbc86e18ab480",
"icons/Icon-maskable-512.png": "f8984b84962d1abc120681be278d21cb",
"icons/Icon-512.png": "f8984b84962d1abc120681be278d21cb",
"manifest.json": "b47afa4aca47f00b40e902102b262473",
"assets/AssetManifest.json": "2b2d6e3364eec628cb9078fcfbb2df85",
"assets/NOTICES": "542661d14b1848f5bf0044b031654c26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "43eec796d949d1de3a0fd656248a855a",
"assets/fonts/MaterialIcons-Regular.otf": "5f5954582fd38bcc3c61e06649713eec",
"assets/assets/1025.png": "22fe4d056bbdb4a57500900249c39e29",
"assets/assets/1024.png": "eaf015200e9aa52b2150c985adc014a9",
"assets/assets/home.svg": "e06058076c7fca504faa6f91a48e8960",
"assets/assets/bx_swim.svg": "949fc15b419380603a37f8ec249bc01b",
"assets/assets/ri_24-hours-line.svg": "73300024ed91cd4c0c8215e318f9139c",
"assets/assets/ic_baseline-meeting-room.svg": "3e3e1b84e5ec7fc5b970efeca1f4c78e",
"assets/assets/Vector.svg": "474d146715c1d10a9c7654332ca5565f",
"assets/assets/8.jpg": "ea2029fd2aa0ea1e33ac3cc6c587bc2e",
"assets/assets/600.jpg": "70f3138be0df0f49896679ac132873f6",
"assets/assets/9.jpg": "fb4c85777c3391c92fc15f05e34b4931",
"assets/assets/14.jpg": "c266e494ed796883a82ce483c5d4ab98",
"assets/assets/15.jpg": "e3d93075ee7a8b67dca802f37b04acb6",
"assets/assets/17.jpg": "45debf4489fc0f2a57bb962142f0a8b5",
"assets/assets/16.jpg": "01013b44966662358f9c6cd132b24a33",
"assets/assets/12.jpg": "6c3da8b18242e2a5dfcdcf02ed5ea6a2",
"assets/assets/home.png": "9d62355edd10a4668a7517f88ae5faf8",
"assets/assets/13.jpg": "0b88c98648b8da8282d59b138afc087e",
"assets/assets/11.jpg": "6b01fb9f7eeb809ff4afd8764b878d91",
"assets/assets/10.jpg": "5882e73c1ec1057ec870f89436a39c77",
"assets/assets/21.jpg": "350278a978ae5c6af4b187505c6a42a7",
"assets/assets/20.jpg": "9575710781053c78b2fbd2cc561be58d",
"assets/assets/22.jpg": "30413b8824f34e603471653936a7973b",
"assets/assets/Message.svg": "1e40e913fda22b7f246a532e1ccddb94",
"assets/assets/23.jpg": "1e8daad5c70595fb3dbf6214e5795115",
"assets/assets/ic_outline-elevator.svg": "d0f81d30f0c758de8fd5b67f85c41667",
"assets/assets/18.jpg": "b765b8e8796cb81a4f9f61a0460765b6",
"assets/assets/24.jpg": "3f32d43c955d29ff747b90836bcea8c2",
"assets/assets/19.jpg": "fa76ed6d959ae00c38642b8631dc9287",
"assets/assets/mdi_car-brake-parking.svg": "be37987c47825140016b8d911776636a",
"assets/assets/5.png": "642affe387db155c4f78e16240509076",
"assets/assets/7.jpg": "23dc4372682195af802794122d26ac52",
"assets/assets/fa-solid_wifi.svg": "1f0541f061c33d8bc43a24705c561f86",
"assets/assets/6.jpg": "03ec7ce0b1c6a8f82d0fb4ed3486420c",
"assets/assets/2.png": "3b74063ae229c535620b9a6464a0bb16",
"assets/assets/3.png": "c5922e768e7f27f38a82deb2fee82d8e",
"assets/assets/1.png": "d983950273ba9b1fbe988398b42d1373",
"assets/assets/1000.png": "2645ee05734666f9f574c78fc0b52ab9",
"assets/assets/ic_outline-restaurant-menu.svg": "98aa11a2d585f911a4e973e690f463e0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
