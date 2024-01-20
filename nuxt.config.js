export default {
  mode: "universal",
  target: "server",
  server: {
    port: 3000,
    host: "localhost",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Список новостей RSS",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxt/http"
  ],
  bootstrapVue: {
    // Установите плагин `IconsPlugin` (в дополнение к плагину `BootstrapVue`)
    icons: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Server Middleware
  serverMiddleware: {
    "/api": "~/server/api",
  },
};
