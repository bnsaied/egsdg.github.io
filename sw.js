'use strict';


importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@2.1.2/build/importScripts/workbox-sw.prod.v2.1.2.min.js');
const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});

workbox.router.registerRoute(/(.*)img(.*)\.(?:png|gif|jpg|html)/,
  workbox.strategies.networkFirst(),
                             

);

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox For Webpack';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
workbox.precache([
   {
    "url": "404.html",
    "revision": "6a0fe4d94e0a00f270f545554ec682e7"
  },
  {
    "url": "about/index.html",
    "revision": "eccf02f8193622bfb8e82f69056a29af"
  },
  {
    "url": "app.1.js",
    "revision": "0063b2b2a446a83eb65a7005cce9e427"
  },
  {
    "url": "app.2.js",
    "revision": "680db3a221638152f1fda9d48124b318"
  },
  {
    "url": "app.js",
    "revision": "680db3a221638152f1fda9d48124b318"
  },
  {
    "url": "assets/main.css",
    "revision": "3ccc41e0ee906e813d6386b0f2625688"
  },
  {
    "url": "blog/index.html",
    "revision": "74ec38a332be9664754c94023a0dc348"
  },
  {
    "url": "cost/saving/2017/12/08/Cost-Saving.html",
    "revision": "22f086e0c17d4d734144ae2815933d75"
  },
  {
    "url": "css/body.css",
    "revision": "a6a5c3d339b1ef21e5afee8bd30da767"
  },
  {
    "url": "css/card.css",
    "revision": "0e86894fc8d32e774a4cc35472e32feb"
  },
  {
    "url": "css/normalize.css",
    "revision": "3bc2f546340fb700ab9a155ff6bf45ab"
  },
  {
    "url": "css/pattern.css",
    "revision": "6cc3a4b5498b4518efeaed881a4bd2a7"
  },
  {
    "url": "feed.xml",
    "revision": "8238f03a45c9570a0dc33eb6d84cc2a5"
  },
  {
    "url": "fonts/font-awesome/css/font-awesome.css",
    "revision": "3f05a51a1e5260f4179db8ca65307a6a"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "f7c2b4b747b1a225eb8dee034134a1b0"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "2980083682e94d33a66eef2e7d612519"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.ttf",
    "revision": "706450d7bba6374ca02fe167d86685cb"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "d9ee23d59d0e0e727b51368b458a0bff"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "97493d3f11c0a3bd5cbd959f5d19b699"
  },
  {
    "url": "fonts/font-awesome/fonts/FontAwesome.otf",
    "revision": "0b462f5cc07779cab3bef252c0271f2b"
  },
  {
    "url": "gis/2017/12/08/gis.html",
    "revision": "c1f606d8542d71148c0ec8b8ad9422be"
  },
  {
    "url": "gmp/2017/12/08/Good-Manufacturing-Practice.html",
    "revision": "b16023b1518c24de8642cde43f281238"
  },
  {
    "url": "img/authors/ahmedcanvip.jpg",
    "revision": "224a664f849489f84ec4d8e7a4a84bbe"
  },
  {
    "url": "img/authors/alaa.jpg",
    "revision": "a21c94806e15a87f3f3d182eefbb3f0f"
  },
  {
    "url": "img/authors/mm.jpg",
    "revision": "94560eb27bce9cf083dcaa1b709632c4"
  },
  {
    "url": "img/authors/moh.jpg",
    "revision": "665f706eb6b8b7fe29d27dc22017805d"
  },
  {
    "url": "img/authors/photo.jpg",
    "revision": "0004cc30e1156aa1dbc9a75436746ef0"
  },
  {
    "url": "img/e.jpg",
    "revision": "1ab1e67c99f1a1b149725f2c8b247564"
  },
  {
    "url": "img/favicon.ico",
    "revision": "de6c8ec71804205aa9074b3600fa7a1d"
  },
  {
    "url": "img/gis.jpg",
    "revision": "ecbcc6310967d4bed745d12f99f3ac2c"
  },
  {
    "url": "index.html",
    "revision": "4be4c7e4704de65931c850a0e066cee1"
  },
  {
    "url": "js/Card-circle.js",
    "revision": "975fde631c7ab4fbc611e49b0bfbce9f"
  },
  {
    "url": "js/modern-blog.js",
    "revision": "de087ab1ed99ecebdaa58e79514441c3"
  },
  {
    "url": "js/vendors/cash.min.js",
    "revision": "9a9f1e5b7458c5d31f75ee6c129f3cdd"
  },
  {
    "url": "js/vendors/html5.min.js",
    "revision": "7823f6077f5a74235073650bb753a4df"
  },
  {
    "url": "js/vendors/ScrollToPlugin.min.js",
    "revision": "aadb7767cc8d6e50b1760809c3212c1a"
  },
  {
    "url": "js/vendors/trianglify.min.js",
    "revision": "04965e43cb508724836343712ebd6bcb"
  },
  {
    "url": "js/vendors/TweenMax.min.js",
    "revision": "1d4514e6131e1758432e33301e4bf1a4"
  },
  {
    "url": "manifest.json",
    "revision": "b882061d5365225b38804452ef094ed9"
  },
  {
    "url": "package.json",
    "revision": "674acfcaf212c8d96fd069ed82574193"
  },
  {
    "url": "sw.1.js",
    "revision": "ef125b5c6243945db0c76dfd83293702"
  },
  {
    "url": "sw.2.js",
    "revision": "15d3d3f1803abcfe0ed002d6d5673136"
  },
  {
    "url": "sw.js",
    "revision": "15d3d3f1803abcfe0ed002d6d5673136"
  },
  {
    "url": "usage/of/renewable/energy/sources/2017/12/08/Usage-of-Renewable-Energy-sources.html",
    "revision": "703b30c1c50b30d6ba5d753e16a205b0"
  },
  {
    "url": "workbox-cli-config.js",
    "revision": "3bee42d17c7ea6a501b2097cfd01d8a9"
  }
]);












self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());