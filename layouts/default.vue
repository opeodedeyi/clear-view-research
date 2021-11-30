<template>
  <div>
    <app-header />
    <Nuxt />
    <app-footer @show-menu="showMenu()"/>
  </div>
</template>

<script>
import header from "~/components/header/header";
import footer from "~/components/footer/footer";

export default {
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
      console.log("clicked");
    }
  }
}
</script>

<style>

</style>
