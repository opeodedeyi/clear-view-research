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

export default {
  data() {
    return {
      menuTrigger: 0
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
    }
  }
}
</script>

<style>

</style>
