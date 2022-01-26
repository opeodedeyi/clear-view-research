<template>
  <div>
    <app-header :menuTrigger="menuTrigger" />
    <Nuxt />
    <app-footer @show-menu="showMenu()"/>
    <cookiepopup v-if="showCookieWarning" @close-popup="showCookieWarning=false" @accept-analytics-cookie="acceptAnalyticsCookie" @reject-analytics-cookie="rejectAnalyticsCookie"/>
  </div>
</template>

<script>
import header from "~/components/header/header";
import footer from "~/components/footer/footer";
import cookiepopup from "~/components/utilities/cookiepopup";
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
    'app-footer': footer,
    cookiepopup
  },
  props: ['onAppSend'],
  methods: {
    showMenu() {
      this.menuTrigger++
    },
    getCookies() {
      if (Cookie.get("showCookieWarning")) {
        return this.showCookieWarning = false
      }
      return this.showCookieWarning = true
    },
    setCookies() {
      Cookie.set('showCookieWarning', true);
      Cookie.set('disableAnalytics', false);
    },
    acceptAnalyticsCookie() {
      Cookie.set('disableAnalytics', false);
      Cookie.set('showCookieWarning', false);
      return this.showCookieWarning = false
    },
    rejectAnalyticsCookie() {
      Cookie.set('disableAnalytics', true);
      Cookie.set('showCookieWarning', false);
      return this.showCookieWarning = false
    }
  },
  mounted() {
    this.getCookies()
  },
}
</script>

<style>

</style>
