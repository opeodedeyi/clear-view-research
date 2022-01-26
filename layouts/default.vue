<template>
  <div>
    <app-header :menuTrigger="menuTrigger" />
    <Nuxt />
    <app-footer @show-menu="showMenu()"/>
  </div>
</template>

<script>
import header from "~/components/header/header";
import footer from "~/components/footer/footer";
import Cookie from 'js-cookie';

export default {
  data() {
    return {
      menuTrigger: 0,
      showCookieWarning: false
    }
  },
  props: {
    isvisible: {
      type: Boolean,
      required: false
    }
  },
  components: {
    'app-header': header,
    'app-footer': footer
  },
  props: ['onAppSend'],
  methods: {
    showMenu() {
      this.menuTrigger++
    },
    getCookies() {
      if (Cookie.get("showCookieWarning")) {
        return this.showCookieWarning = Cookie.get('showCookieWarning')
      }
      return this.setCookies()
    },
    setCookies() {
      Cookie.set('showCookieWarning', true);
      Cookie.set('disableAnalytics', true);
    }
  },
  mounted() {
    this.getCookies()
  },
}
</script>

<style>

</style>
