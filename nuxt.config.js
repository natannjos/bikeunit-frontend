import colors from "vuetify/es5/util/colors";
const env = {
  API_URL: process.env.API_URL || "http://192.168.0.3:8000/api",
  API_URL_BROWSER: process.env.API_URL_BROWSER || "http://192.168.0.3:8000/api",
  WS_URL: process.env.WS_URL || "192.168.0.3:8000"
};
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - ciclismo",
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Cabin&display=swap"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Raleway&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/style/app.styl",
    "~/assets/style/font.styl",
    "~/static/css/my-style.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-validation", "~/plugins/vue-currency-field"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/auth",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: false,
    // redirectError: '/auth/login',
    redirectError: {
      401: "/auth/login",
      403: "/auth/login"
    },
    requestInterceptor: (config, { store }) => {
      if (store.state.auth.token) {
        config.headers.common.authorization = `Token ${store.state.auth.token}`;
      }
      return config;
    },
    responseInterceptor: (response, ctx) => {
      // global.console.log(ctx);
      return response;
    }
  },

  auth: {
    // Options

    strategies: {
      local: {
        endpoints: {
          login: {
            url: `${env.API_URL}/auth/login/`,
            method: "post",
            propertyName: "key"
          },
          logout: `${env.API_URL}/auth/logout/`,
          user: {
            url: `${env.API_URL}/auth/user/`,
            method: "get",
            propertyName: false
          }
        }
      }
    },
    redirect: {
      login: "/auth/login/",
      logout: "/auth/logout/",
      home: "/"
    },
    watchLoggedIn: true,
    resetOnError: true,
    tokenType: "Token"
  },
  router: {
    middleware: ["auth"],
    // base: '/',
    mode: "history",
    linkActiveClass: "nuxt-link-active",
    linkExactActiveClass: "nuxt-link-exact-active"

    // Run the middleware/user-agent.js on every pages
    //middleware: ["user-agent"] //, "auth"]
    //extendRoutes(routes, resolve) {
    //  routes.push({
    //    name: "custom",
    //    path: "*",
    //    component: resolve(__dirname, "pages/wizard.vue")
    //  });
    //}
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
  },
  // transition (to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // }

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
