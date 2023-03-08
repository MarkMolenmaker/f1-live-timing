<template>
  <nav class="nav-links-wrapper">
    <slot class="router-link"/>
  </nav>
</template>

<!--<template>-->
<!--  <nav class="nav">-->
<!--    <nav-info-display title="Australia" subtitle="Live" />-->
<!--    <div class="nav-links-wrapper">-->
<!--      <router-link class="router-link" to="/">Home</router-link>-->
<!--      <router-link class="router-link" to="/leaderboard">Leaderboard</router-link>-->
<!--    </div>-->
<!--    <nav-info-display title="Q1 - Qualifying" subtitle="7:12" subtitle-position="end" />-->
<!--  </nav>-->
<!--</template>-->

<script>
export default {
  name: "NavSubBar"
}
</script>

<style lang="sass" scoped>
@use '@/assets/global.sass' as _global

.nav-links-wrapper
  display: grid
  grid-auto-flow: column
  overflow-x: scroll
  scroll-snap-type: x mandatory
  align-items: center
  justify-content: center

  background-color: _global.$font-light
  width: 100%

  height: 1.5rem
  font-size: .75rem
  @include _global.tablet
    height: 2rem
    font-size: .85rem
  @include _global.desktop
    height: 3rem
    font-size: 1rem

  :slotted(a)
    font-family: "Formula1 Display Regular", sans-serif
    font-weight: bold
    color: _global.$font-dark
    text-decoration: none
    display: flex
    padding: 0 1rem
    align-items: center
    scroll-snap-align: start
    cursor: pointer
    transition: 150ms ease-out
    height: calc(100% - .3rem)
    border-bottom: .3rem solid transparent

    &.router-link-active
      border-bottom: .3rem solid _global.$primary

    &:hover
      color: _global.$font-light
      transition: none
      background-color: _global.$primary

</style>