if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"912f18fac5b7f4f6d80f01be24ec3a78","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"912f18fac5b7f4f6d80f01be24ec3a78","url":"index.html"},{"revision":"81c62d44312363fda6890a7fc7a5e4af","url":"static/css/14.b82d8140.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a5546bdab4ce0ca26b834fa688e94def","url":"static/js/0.3f6b90de.chunk.js"},{"revision":"c1980b4a0d9153bcaaa4f6b844fe596b","url":"static/js/1.7930650d.chunk.js"},{"revision":"1c29088ea1b856c7d06c4879f974f204","url":"static/js/10.cc528f33.chunk.js"},{"revision":"4d95b708e52650dd7c1f848d63e6fdc7","url":"static/js/11.1e54453a.chunk.js"},{"revision":"188dc51cb7c5cc825a7bc6a58b744f3e","url":"static/js/12.43853ebf.chunk.js"},{"revision":"4867504413920f397b33ad3bc89fcd86","url":"static/js/13.3d8d682a.chunk.js"},{"revision":"e67e3d8d114757e4b80502af83719559","url":"static/js/14.95541929.chunk.js"},{"revision":"f17bbbce69b71051960c92c801fbf203","url":"static/js/15.5e7c1303.chunk.js"},{"revision":"4f2d4b64e2e1f6390450577083f18947","url":"static/js/16.0c90188c.chunk.js"},{"revision":"f03de83461dd5d9c47e73edb411b67f6","url":"static/js/17.f9297cc7.chunk.js"},{"revision":"3893b832ed4ad500f4c1d3b238b28d5c","url":"static/js/18.479bc558.chunk.js"},{"revision":"30d55c3c1c3c1035d56205c2afb8b8d9","url":"static/js/19.85b72f9e.chunk.js"},{"revision":"925af59872dfc4b1a8a54a2958f78ad2","url":"static/js/2.e3826710.chunk.js"},{"revision":"72518f713fe08e7dd1b0329fced1f760","url":"static/js/20.9720e0aa.chunk.js"},{"revision":"053623dbb301ab87484fbfa7f25db857","url":"static/js/21.79f649d8.chunk.js"},{"revision":"35242714ebd693b5671e5b796a610ce7","url":"static/js/22.342d4216.chunk.js"},{"revision":"8f2268b457231ca48d827c72d3f3707c","url":"static/js/23.f0b8ceb1.chunk.js"},{"revision":"4d0d00441d69df6b3deda6079195e7a6","url":"static/js/24.873c0740.chunk.js"},{"revision":"cc61fd21c9815305787bbad2c142ef5f","url":"static/js/25.ba0c0e45.chunk.js"},{"revision":"5bcd684a4e2be6b37c4f205c1fa55e9a","url":"static/js/26.ea254d0c.chunk.js"},{"revision":"a9b50be40b79f36a5937c466ff085818","url":"static/js/27.c834aa94.chunk.js"},{"revision":"501b7079a1650045e38e2e57e6e22131","url":"static/js/28.1b587666.chunk.js"},{"revision":"1f6ddb170610b547decc155d6a7b0cb4","url":"static/js/3.4d6ae504.chunk.js"},{"revision":"e1d06194e2056d4ef4fa6c65a58b5499","url":"static/js/6.d0e07027.chunk.js"},{"revision":"decd823b592a70bbff5da10affe64821","url":"static/js/7.879849f2.chunk.js"},{"revision":"68b9658dbc0c6ac98fc781964deac58c","url":"static/js/8.56cf9e44.chunk.js"},{"revision":"dbcc0b2320d2fde0c61b24ca2fd1d684","url":"static/js/9.4bda5ec6.chunk.js"},{"revision":"97359ef67fc71b52ecabc52cf3fcbe1c","url":"static/js/main.a3a4a275.chunk.js"},{"revision":"f34e5975e83ba1cdfaab6ccfdb7ee193","url":"static/js/runtime-main.880cd19c.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
