'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "91e60672269d888f709aeb0e7117e3c4",
".git/config": "c404b5f83b8be7443ac6867bab2ecf98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "337fe9aef4bef757fdbd2ccf07c0dab1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5547f2ac1097d936aef766eee20a95a7",
".git/logs/refs/heads/main": "73e5ac83c1641cf710f7d1b9bb92393d",
".git/logs/refs/heads/master": "2e67d4404bdec0de4ffb06a795db4265",
".git/logs/refs/remotes/origin/main": "3c35dc93e56ec859551c2032ee8379ed",
".git/objects/0e/e5e3d3581935c55248e3cf2659cd8aa6281321": "d0de16761514f836b2b2670abc9f3451",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/24/42affbf6570d23c0b2b270cca8d49535df27bf": "538d932d1b9806e9100542b30c19db99",
".git/objects/2d/0448f4be5c3d3fdaac73e8c7591bd1c61337c3": "be00ab93e7b1f1f8423e2a2183525bdd",
".git/objects/34/bd800e36d7682bb446fcbf26cf7f372a836247": "00b1d4490d63453cf0d751fdbba73acc",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/42/2ec38d031e7b0f3ef6c99bc2cc137a43d47dda": "901c61b11403cf2747b1c6ad348048ad",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/2cad56632b020a3b76c709ba810f1b40c5f3f5": "9275ed575f3cb2da87dc9ecc86dacef6",
".git/objects/52/3fd02688664bea865557a7a42448e0b03a1384": "635b584944dd3c7e2ee72816f7bebc8d",
".git/objects/54/8a10c70c8acfbe8c31193953a20103031c406d": "67b0738a814814f72430cf6570efa736",
".git/objects/56/ef72cdb92044d6e3e66b9ef3ac7eb9c3959f27": "683f90ecdf788e6f091ec06a0f64cb81",
".git/objects/57/b9bcf2dc5817e54def005aa2a554ba70d92dff": "273d5f89be0e4a5ef64b890ef64f2482",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/5104e3f1e2607ec4f130cafe549dd16da78d52": "c2d36fb0fcbe34cfec3520b825d694a7",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/c69934690f4a64d069481c4553b1c5390fbb42": "b344fa5c0085af7000700ec1f338b683",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/301fa13814383df33befe9100ddc473db8ceec": "5d3eafc27e59653e077d4213808da63a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/62dd1e4ee1357a3b8513c37734ee9fe1d4f982": "6a053e50a5d43419b09c8b3516199866",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/86/ac66fc1a05ef23712b1897892c2840eb52c0c9": "d65bcab08de4635181850cc4b122d550",
".git/objects/87/75fac54e010d89199eedc03af0e8e9e68cefb1": "1a0b286df04c4b13a99d21752ef9c800",
".git/objects/8b/3d70eef2603f3ec7b17f6a95101e46e136f936": "9185e09f19b4e5d1c1025454028ca19d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/ffa6e19295074e7315e59701c9372bb8bbfe8a": "8bf522b8a4f10463946728a6788cbdc4",
".git/objects/96/7dbab3a7ca77dd1133bc0543b5190ab4a37698": "4b60f55fc993cc5ea80989990434793c",
".git/objects/9c/7be02b68a6e1201994e43bfb651083c3773189": "9f4d003f51ca7a901219b9428c354d04",
".git/objects/ac/0b716f000e5782bc996dcf8a41d382dea20f19": "9c2a8b7d956d68815bed32631a6e5d14",
".git/objects/ac/a478c084ba7afc61a44ffdbc86c985992c6397": "8da19eecd209f87ea8bb5739729db03d",
".git/objects/b3/c4932c618efae431b9368099acc521cecabefe": "40e4c100bca31a162cc7a0b0691c210c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/0257f195fb1dd6e42b1ff604443f9b9fa7971c": "cd2f1b2d91dbaacda2e50f216a906568",
".git/objects/c6/a2721cd288357461a0756c8d630ccff56f6ab6": "24c24663ae4dfb4df81d1d8761d149a2",
".git/objects/c6/d7a34aa8469f1aaeae50ca9cb171a8148a4a92": "a55974aa004dc94bc393470bc15e3e9e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/de/3f2804d28a00cb45ada4ed8296fc691b0e3651": "9a3950b638c2c1481b9c96e25c57817a",
".git/objects/ea/0e717781e53ada9f8e9274a5d6b9d446a0421b": "249fd10dc94b47e189fd5e304783fe3e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f6/8f8c112dcc485a4a21d2df3548c7b3bdef474a": "b4e522072264bb9175072d2da785e0e9",
".git/objects/f8/8f45629ea4cf63ee9bbe52aad6b9a6460eee74": "5b94a3b3e3150b3a9133ef203986424c",
".git/objects/fd/069cb007aedd8c2b70957aeaa78853df54653d": "4970c109dc85e8dc25716643948f6d7a",
".git/ORIG_HEAD": "6b5483b03ea3d7abf8ec7e30ec9f3831",
".git/refs/heads/main": "0fafa235f14af425efe947a6fb72471c",
".git/refs/heads/master": "6b5483b03ea3d7abf8ec7e30ec9f3831",
".git/refs/remotes/origin/main": "0fafa235f14af425efe947a6fb72471c",
"assets/AssetManifest.bin": "841f54d23b557fe21229ea4c7cd12369",
"assets/AssetManifest.bin.json": "bbb8e80c469f56fdb4c7075f7bbff7a9",
"assets/AssetManifest.json": "2a698311f7e9802bae389b9460b83114",
"assets/assets/fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/assets/images/sample.avif": "d741d761dd1940901e9b138b091ff6df",
"assets/assets/images/sample.jpg": "0097f34af352eafc6800eea68e2f193a",
"assets/FontManifest.json": "3d0102ee5aabed31e51c8f6bbc7a3982",
"assets/fonts/MaterialIcons-Regular.otf": "6590ec40485e17a27f9d92ff39aeaee8",
"assets/NOTICES": "f26f21de316ff03192013df3770f9106",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3b0c18704e85fb1b84aa49c19e4a4bd6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2edb84efc06cabd70da63d751dddc101",
"icons/Icon-192.png": "3b0c18704e85fb1b84aa49c19e4a4bd6",
"icons/Icon-512.png": "3b0c18704e85fb1b84aa49c19e4a4bd6",
"icons/Icon-maskable-192.png": "3b0c18704e85fb1b84aa49c19e4a4bd6",
"icons/Icon-maskable-512.png": "3b0c18704e85fb1b84aa49c19e4a4bd6",
"index.html": "5d4c6637cf3d2eca939881685a48d884",
"/": "5d4c6637cf3d2eca939881685a48d884",
"main.dart.js": "d7376fd22d88da2e0290c7b64c834bcd",
"manifest.json": "0644a2f68493bcc3745aa4648bb0bfae",
"version.json": "185f26ebeddf704501049ca172567d3d"};
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
