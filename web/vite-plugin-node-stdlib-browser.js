import nodePolyfills from "rollup-plugin-node-polyfills";

export default function nodeStdlibBrowser() {
  return {
    name: "node-stdlib-browser",
    config: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          stream: "rollup-plugin-node-polyfills/polyfills/stream",
          util: "rollup-plugin-node-polyfills/polyfills/util",
          sys: "util",
          events: "rollup-plugin-node-polyfills/polyfills/events",
          path: "rollup-plugin-node-polyfills/polyfills/path",
          querystring: "rollup-plugin-node-polyfills/polyfills/qs",
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [...(config.optimizeDeps?.include ?? []), "pg"],
      },
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          plugins: [
            ...(config.build?.rollupOptions?.plugins ?? []),
            nodePolyfills(),
          ],
        },
      },
    }),
  };
}
