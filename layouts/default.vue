<template>
  <div>
    <app-header/>
    <Nuxt />
    <app-footer/>
  </div>
</template>

<script>
import header from "~/components/header/header";
import footer from "~/components/footer/footer";

export default {
  components: {
    'app-header': header,
    'app-footer': footer
  }
}
</script>

<style>

</style>
