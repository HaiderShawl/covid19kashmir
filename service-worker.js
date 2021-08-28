if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"76712a1006b97426877fbb564d0d82bd","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"76712a1006b97426877fbb564d0d82bd","url":"index.html"},{"revision":"66d4ed5e28ff8e98826e4a85059ce35f","url":"static/css/14.0e2f6be8.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"d07f022e9f8ab5eda7141972b65d18b1","url":"static/js/0.1c59163a.chunk.js"},{"revision":"aaa203f6ba109715f64be6d53458e805","url":"static/js/1.92024f8d.chunk.js"},{"revision":"81f879afe0791181d031ffd53406bffb","url":"static/js/10.c8d65370.chunk.js"},{"revision":"50de547be9724d8a4951e512b17668f9","url":"static/js/11.a64552c6.chunk.js"},{"revision":"d00321a9fab67bb038b76be66b917803","url":"static/js/12.3e05c02e.chunk.js"},{"revision":"ac03729faadf8434de106b9900b00e9d","url":"static/js/13.fd1588f4.chunk.js"},{"revision":"a7f67a40884a9e9c0656008f9e6f9aca","url":"static/js/14.3b4118c5.chunk.js"},{"revision":"c468ecce3b163b9a9bf6670243ec90f2","url":"static/js/15.dfa81d0d.chunk.js"},{"revision":"b32076a903904b829062a5848634bb84","url":"static/js/16.0f8aedb0.chunk.js"},{"revision":"ee701d7404a88eb47307420145cf8e10","url":"static/js/17.7cc39d37.chunk.js"},{"revision":"d46622c20b671e3d23a08db07b8bfc56","url":"static/js/18.3bfc8a1a.chunk.js"},{"revision":"bc1238e626ff5abd3475bbc2a5261cae","url":"static/js/19.d7bb2821.chunk.js"},{"revision":"6f609ad839d48732c5a5f8e5fe139a8d","url":"static/js/2.4804c404.chunk.js"},{"revision":"543bb8489ccb9d402b9882f1ee11b00c","url":"static/js/20.373af6f6.chunk.js"},{"revision":"c830f66d24b098eae14393b705e34035","url":"static/js/21.01d48303.chunk.js"},{"revision":"8f0b99ab56c183e15be66a76c597fb7d","url":"static/js/22.83760ce6.chunk.js"},{"revision":"33230d41f7ac0c6dc8e2dc320a9332ea","url":"static/js/23.0339e95f.chunk.js"},{"revision":"b4a568a86a00cb6454e12e6663ada032","url":"static/js/24.c516e48c.chunk.js"},{"revision":"e8218bc6593d4d5bef0c7c3dc7a70b00","url":"static/js/25.3bf77d66.chunk.js"},{"revision":"9b2e78ac356a5b76ffa61dd94d51beec","url":"static/js/26.6a3322e9.chunk.js"},{"revision":"3ba5fdb3c45717e8d40fd8a68e1641ac","url":"static/js/27.fb077d1c.chunk.js"},{"revision":"c04cebd95d3ad89846a1eb039fb57b6a","url":"static/js/28.66be2d51.chunk.js"},{"revision":"b66b0bb6abefc8e9ef792ecd164e8a58","url":"static/js/3.fe0fc55f.chunk.js"},{"revision":"91356e113ffee233655932b0f375aca1","url":"static/js/6.faa91cb4.chunk.js"},{"revision":"ef3d7b5775ba3c55f2d05224ecb16350","url":"static/js/7.5e35180f.chunk.js"},{"revision":"5fa714f779a48191dd4b74269ca50609","url":"static/js/8.30cb73dd.chunk.js"},{"revision":"c22800a88c3786b3ac5ae838cf88d569","url":"static/js/9.0cc13ef5.chunk.js"},{"revision":"055b6f49a20aaa30f499e30b26b24bcd","url":"static/js/main.14f71240.chunk.js"},{"revision":"8f02c11fe434962262f7c0005a1e60c5","url":"static/js/runtime-main.c25dc134.js"}]);

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
