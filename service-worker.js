if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"abc9388de23f780372845bae35c3d360","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"abc9388de23f780372845bae35c3d360","url":"index.html"},{"revision":"81c62d44312363fda6890a7fc7a5e4af","url":"static/css/14.b82d8140.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"731ae925769ada56ef52a44982e41c8f","url":"static/js/0.8fd03d18.chunk.js"},{"revision":"1db2e9d547506e97a35cbcedbf379163","url":"static/js/1.4af6ebd8.chunk.js"},{"revision":"2ddfbc775c00da0df3d60f3355e2b9f6","url":"static/js/10.88fdb957.chunk.js"},{"revision":"6a75fb5f935b25aec179789ad0ed0bbd","url":"static/js/11.f0ba94cb.chunk.js"},{"revision":"b698de6f519398c31ff7efce540393e2","url":"static/js/12.8ef30b04.chunk.js"},{"revision":"875899cfe2363fe8581f387b20b39b47","url":"static/js/13.49fafaf7.chunk.js"},{"revision":"aa3f5cbdc37aa861780052f47b9e9674","url":"static/js/14.8b081cd4.chunk.js"},{"revision":"e6a8a845efa58746549625d62af3c01b","url":"static/js/15.8e76a342.chunk.js"},{"revision":"21e051a00e8fd4452b8ce0c6f235d705","url":"static/js/16.507f0fe2.chunk.js"},{"revision":"4a0182857b9885375a8bd448bdd5ee01","url":"static/js/17.9ec9db26.chunk.js"},{"revision":"0fca39f5cc442bbc143cd8cecc27b075","url":"static/js/18.c81a14ae.chunk.js"},{"revision":"5b2a8510193db842e04526177acffd92","url":"static/js/19.66fe96a1.chunk.js"},{"revision":"eb0a9cc0cff6e3ad91f25c1cb90d1f34","url":"static/js/2.a39083eb.chunk.js"},{"revision":"8851a7ff170610bb1cfe7000b1f199c2","url":"static/js/20.27184230.chunk.js"},{"revision":"995bbf3bde807dee528d463e31e154c2","url":"static/js/21.023c2a47.chunk.js"},{"revision":"80d01b3edb9d93c178af14a8ae7b19fc","url":"static/js/22.3266a87e.chunk.js"},{"revision":"83710b735dbac986e05d78a08143b30c","url":"static/js/23.b929b083.chunk.js"},{"revision":"484addc2ee6eb40b3f8be1252289b370","url":"static/js/24.ebf3145c.chunk.js"},{"revision":"e8d1bf6a05cd5810bdac9f9047fbb574","url":"static/js/25.7c04532b.chunk.js"},{"revision":"4d2632275c24e92e71f465ee3248ff5a","url":"static/js/26.6bf20708.chunk.js"},{"revision":"286354afd4cf30920a4b2ffad24c5986","url":"static/js/27.c2d72b81.chunk.js"},{"revision":"b198f050b2cff7b026fca1777eabf964","url":"static/js/28.89b82f6f.chunk.js"},{"revision":"56316ad5ff62370f699fda8773e3cdee","url":"static/js/3.0ee99e69.chunk.js"},{"revision":"f576c1f9eb3c17d658469f0a0b5990b0","url":"static/js/6.b5e7a621.chunk.js"},{"revision":"600fb53781bd037edc1fbe2035a7f6d4","url":"static/js/7.bc1a36d0.chunk.js"},{"revision":"889e1e730947c8f27d4cfc894e6624b0","url":"static/js/8.bfd36db2.chunk.js"},{"revision":"da237dd545fbead7d049d4cb82f5c55a","url":"static/js/9.191fbc71.chunk.js"},{"revision":"1a20fc3f659196bf88801c177eef23b2","url":"static/js/main.959f2b7e.chunk.js"},{"revision":"10434c5e56b033d64873f67b98134f5f","url":"static/js/runtime-main.1a4d7d83.js"}]);

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
