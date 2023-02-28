<template>
  <nav class="nav">
    <div class="nav-summary-wrapper">
      <span class="nav-summary-title">Australia</span>
      <div class="nav-summary-container" >
        <span class="nav-summary-subtitle">Live</span>
        <Vue3Lottie :animationData="LivePulsingBarsJSON" :width="15" :height="15" loop autoPlay />
      </div>
    </div>
    <router-link class="router-link" to="/">Home</router-link>
    <router-link class="router-link" to="/qualifying">Qualifying</router-link>
  </nav>
  <router-view/>
</template>

<script>
import 'vue3-lottie/dist/style.css'
import LivePulsingBarsJSON from '@/assets/lottie/white-pulsing-bars.json'
import { Vue3Lottie } from "vue3-lottie";

export default {
  components: {
    Vue3Lottie,
  },
  data () {
    return {
      LivePulsingBarsJSON
    }
  }
}
</script>

<style lang="sass">
@use '@/assets/global.sass' as _global

.nav
  display: flex
  flex-direction: row
  align-items: flex-start
  background-color: _global.$primary
  padding: 0 1em

  .nav-summary-wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
    margin: auto 2em auto 1em
    color: _global.$font-light
    text-decoration: none
    text-align: start

  .nav-summary-title
    font-weight: bold

  .nav-summary-container
    display: flex
    flex-direction: row
    width: 100%
    justify-content: space-between
    gap: 1em

    .nav-summary-subtitle
      font-weight: normal

    .lottie-animation-container
      margin: 0

  .router-link
    font-weight: bold
    color: _global.$font-light
    text-decoration: none
    padding: 1.5em 1em

    &.router-link-exact-active
      border-bottom: _global.$font-light .2em solid

    &:hover
      background-color: _global.$primary-light
      border-bottom: _global.$primary-dark .2em solid

</style>
