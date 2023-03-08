<template>
  <nav-main-bar />
  <router-view />
</template>

<script>
import NavMainBar from "@/components/navigation/NavMainBar.vue";

export default {
  name: "App",
  components: { NavMainBar }
}
</script>

<style lang="sass">
@use '@/assets/global.sass' as _global
#app
  width: 100%
  height: 100%
</style>
