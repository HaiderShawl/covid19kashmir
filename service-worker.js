if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"69e69814ece3d98aad833b636cccd2d8","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"69e69814ece3d98aad833b636cccd2d8","url":"index.html"},{"revision":"66d4ed5e28ff8e98826e4a85059ce35f","url":"static/css/14.0e2f6be8.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"3b29dc8e4decb4968bc675b28e91d61f","url":"static/js/0.292229f8.chunk.js"},{"revision":"b133c8ffa53172745008624ef9ed3be5","url":"static/js/1.c9fe0953.chunk.js"},{"revision":"7a590aca64aa9178bfb355f1ee0dd778","url":"static/js/10.c0b83166.chunk.js"},{"revision":"4601753dbcb142cd44e4d4fc3f43feeb","url":"static/js/11.978db558.chunk.js"},{"revision":"d00321a9fab67bb038b76be66b917803","url":"static/js/12.3e05c02e.chunk.js"},{"revision":"ac03729faadf8434de106b9900b00e9d","url":"static/js/13.fd1588f4.chunk.js"},{"revision":"001d407abd4b3f7dd55ed0f015ecd8fe","url":"static/js/14.941779a7.chunk.js"},{"revision":"1032b266250ef73dd8bf1794e4ee3b96","url":"static/js/15.813273a4.chunk.js"},{"revision":"7d285739fb1bb90ee7ca9112a20ed413","url":"static/js/16.6dee3c95.chunk.js"},{"revision":"ee701d7404a88eb47307420145cf8e10","url":"static/js/17.7cc39d37.chunk.js"},{"revision":"d46622c20b671e3d23a08db07b8bfc56","url":"static/js/18.3bfc8a1a.chunk.js"},{"revision":"5c52d28b332c084a4927d0d24f824bd3","url":"static/js/19.34c97b16.chunk.js"},{"revision":"6f609ad839d48732c5a5f8e5fe139a8d","url":"static/js/2.4804c404.chunk.js"},{"revision":"9f785ad51d148cb897ca2ae6fe6b0193","url":"static/js/20.5eab6855.chunk.js"},{"revision":"953e4b1fa6d56529783b1bdef461e478","url":"static/js/21.f55c6f37.chunk.js"},{"revision":"600d456dd901fe45f1b54a6aca3c2f83","url":"static/js/22.cf2a9caa.chunk.js"},{"revision":"a5d9d246d0134ad644243c84b5d106a7","url":"static/js/23.16a00ca7.chunk.js"},{"revision":"b4a568a86a00cb6454e12e6663ada032","url":"static/js/24.c516e48c.chunk.js"},{"revision":"e74ff7505708bb765db685172aa66e2d","url":"static/js/25.9b5ab575.chunk.js"},{"revision":"9b2e78ac356a5b76ffa61dd94d51beec","url":"static/js/26.6a3322e9.chunk.js"},{"revision":"41ac4c4ef8e9bfde7dbc356982283fd9","url":"static/js/27.d7ff9d56.chunk.js"},{"revision":"c04cebd95d3ad89846a1eb039fb57b6a","url":"static/js/28.66be2d51.chunk.js"},{"revision":"b66b0bb6abefc8e9ef792ecd164e8a58","url":"static/js/3.fe0fc55f.chunk.js"},{"revision":"93f6b2a0b81944ce041e695606bcbf2e","url":"static/js/6.a042b433.chunk.js"},{"revision":"0e0f612e9eaf1b3063c40270482457e2","url":"static/js/7.c436759e.chunk.js"},{"revision":"276b4852f5acd7890fdff8a3523b2270","url":"static/js/8.93ce73b5.chunk.js"},{"revision":"f7c3507511a9db4d2f11e0238dbc1fab","url":"static/js/9.498c84af.chunk.js"},{"revision":"ff0000c4f66a3b2d964091b2ae14b4dd","url":"static/js/main.2fd644dc.chunk.js"},{"revision":"3e2eae7a1f0d35499c051b67c91b3b33","url":"static/js/runtime-main.fbc8800a.js"}]);

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
