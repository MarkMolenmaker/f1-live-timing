const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'F1 Live-Timing',
    themeColor: '#ee0000',
    msTileColor: '#ee0000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#ee0000',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
}
