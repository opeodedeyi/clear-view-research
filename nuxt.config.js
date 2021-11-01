require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'clear-view-research',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // loading indicator
  loading: { height: '5px', color: '#002047', failedColor: '#E35326', duration: 10000, throttle: 0 },

  publicRuntimeConfig: {
    theSpaceId: process.env.YOUR_SPACE_ID,
    theAccessToken: process.env.CONTENT_DELIVERY_API_ACCESS_TOKEN,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    'contentful-module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['contentful-module']
  },

  contentful: {
    default: 'master',
    activeEnvironments: ['master'],
    environments: {
      master: {
        space: process.env.YOUR_SPACE_ID,
        accessToken: process.env.CONTENT_DELIVERY_API_ACCESS_TOKEN,
        environment: 'master'
      }
    }
  }
}
