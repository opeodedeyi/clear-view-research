<template>
  <div>
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import header from "~/components/header/header";

export default {
  components: {
    'app-header': header
  }
}
</script>
