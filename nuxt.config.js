require('dotenv').config()
import Cookie from 'js-cookie';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ClearView Research',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'ClearView Research, Minority Audiences Research, Inclusive Research, Equity in Research, Social Impact Research, Youth Violence Research, Media Representation Studies, Healthcare Accessibility Research, Education Equity Research, Workplace Diversity Studies, Public Opinion Research, Social Policy Research, Market Research, Data Analysis, Survey Research, Qualitative Research, Quantitative Research, Research Consultancy, Data-Driven Decision Making, Community Engagement Research' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // loading indicator
  loading: { height: '5px', color: '#002047', failedColor: '#E35326', duration: 10000, throttle: 0 },

  publicRuntimeConfig: {
    theSpaceId: process.env.YOUR_SPACE_ID,
    theAccessToken: process.env.CONTENT_DELIVERY_API_ACCESS_TOKEN,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/shorten-text.js',
    '~plugins/swiper.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
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
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    // disableScriptLoader: Cookie.get("disableAnalytics") || false,
    disabled: Cookie.get("disableAnalytics") || false,
  }
}
