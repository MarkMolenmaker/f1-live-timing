<template>
  <div class="nav-summary-wrapper">
    <span class="nav-summary-title">{{ this.title }}</span>
    <div class="nav-summary-container" :class="this.subtitlePosition">
      <span class="nav-summary-subtitle">{{ this.subtitle }}</span>
      <Vue3Lottie :animationData="LivePulsingBarsJSON" :width="18" :height="18" loop autoPlay />
    </div>
  </div>
</template>

<script>
import 'vue3-lottie/dist/style.css'
import { Vue3Lottie } from "vue3-lottie";
import LivePulsingBarsJSON from '@/assets/lottie/white-pulsing-bars.json'

export default {
  name: "NavInfoDisplay",
  components: { Vue3Lottie },
  props: {
    title: {
      type: String,
      default: "Title"
    },
    subtitle: {
      type: String,
      default: "Subtitle"
    },
    subtitlePosition: {
      type: String,
      default: "start"
    }
  },
  data () {
    return {
      LivePulsingBarsJSON
    }
  }
}
</script>

<style lang="sass" scoped>
@use '@/assets/global.sass' as _global

.nav-summary-wrapper
  display: flex
  margin: auto 1rem
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
  color: _global.$font-light
  text-decoration: none
  text-align: start
  cursor: default

  .nav-summary-title
    font-family: "Formula1 Display Regular", sans-serif
    font-weight: bold

  .nav-summary-container
    display: flex
    width: 100%
    flex-direction: row
    justify-content: space-between
    gap: 1rem

    .nav-summary-subtitle
      font-family: "Formula1 Display Torque", sans-serif
      font-weight: normal

    .lottie-animation-container
      margin: 0
</style>