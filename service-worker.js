if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4c539db2440bf375206dcb0c03e86b28","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"4c539db2440bf375206dcb0c03e86b28","url":"index.html"},{"revision":"2111fa540b7e29f99f15f2a9d3492c67","url":"static/css/12.34d0513d.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"d9c202c9eaca1e3d16eaf8e1749dbe39","url":"static/js/0.a5141e1b.chunk.js"},{"revision":"485cdb49490d6c16b632ac91a2d838ec","url":"static/js/1.ccbd0a0b.chunk.js"},{"revision":"30b6d65423ba3b151a02908b286a8c20","url":"static/js/10.958d9b96.chunk.js"},{"revision":"db71e60cf80f43dc714514401187a881","url":"static/js/11.e2a8de3a.chunk.js"},{"revision":"a21afbcc7c18609bc0064db9378780d1","url":"static/js/12.a8cb8551.chunk.js"},{"revision":"4e54edfaaee87be77a2ec9f545f70ba1","url":"static/js/13.016f83c3.chunk.js"},{"revision":"418b1ebc758421885919df2dc5a64403","url":"static/js/14.8dcdb590.chunk.js"},{"revision":"11b357a8e71f406dd89c3f2c1ce6dc5d","url":"static/js/15.9be193cb.chunk.js"},{"revision":"feba74df4f4517cd5cf13c51408a81ba","url":"static/js/16.42bb1af1.chunk.js"},{"revision":"da01a4d5a64e7af88035be88d4b24a38","url":"static/js/17.8edc9079.chunk.js"},{"revision":"d984b28d2800e8ade09ca49e565f414a","url":"static/js/18.5593021e.chunk.js"},{"revision":"56ad4c067f02b411dce17a6bbc9a895f","url":"static/js/19.25e872fc.chunk.js"},{"revision":"1c3c502b0cfda7b27727b805eb93e63d","url":"static/js/2.cf3cbd85.chunk.js"},{"revision":"aac6660a04ab9332253a8e8dd2f0b2c2","url":"static/js/20.575e654b.chunk.js"},{"revision":"124b6873294fcf3be6323d02385afb76","url":"static/js/21.83c19d2b.chunk.js"},{"revision":"915e66923f161910ff4be47bebe33fb2","url":"static/js/22.7e67c211.chunk.js"},{"revision":"2f9a2a86e5a5ae58e57a5a856969faa9","url":"static/js/23.35cf8e69.chunk.js"},{"revision":"d6a0fc1059a578759f0392755335769a","url":"static/js/24.91386401.chunk.js"},{"revision":"3d2392deeca76e141f0322f72616b6ba","url":"static/js/25.9a34927b.chunk.js"},{"revision":"b6e8c11e66b5d704cb610166d783b3d8","url":"static/js/5.bf6ea03d.chunk.js"},{"revision":"60a817c435d61bc4bc3e758abcc91f98","url":"static/js/6.4cf091a5.chunk.js"},{"revision":"62b85046f9fc81fe6fa50d3a6e556106","url":"static/js/7.6780a5ce.chunk.js"},{"revision":"1b649d9b9bf8de769083ee0613802348","url":"static/js/8.c87344bc.chunk.js"},{"revision":"c2f7d6b7e026b830a4ee2f389af2087e","url":"static/js/9.0e696428.chunk.js"},{"revision":"f43d096621b5220466f0412bb6775e53","url":"static/js/main.e425ddb3.chunk.js"},{"revision":"1fdf241f994e0c5f2638e67ff997657e","url":"static/js/runtime-main.6996ba2c.js"}]);

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
