<template>
  <nav class="nav">
    <nav-info-display title="Australia" subtitle="Live" />
    <div class="nav-links-wrapper">
      <router-link :class="[$route.fullPath === '' ? 'router-link-active' : '']"
                   class="router-link" to="/">Home</router-link>
      <router-link :class="[$route.fullPath.includes('/leaderboard') ? 'router-link-active' : '']"
                   class="router-link" to="/leaderboard">Leaderboard</router-link>
    </div>
  </nav>
</template>

<script>
import NavInfoDisplay from "@/components/navigation/NavInfoDisplay.vue";

export default {
  name: "NavBar",
  components: { NavInfoDisplay }
}
</script>

<style lang="sass" scoped>
@use '@/assets/global.sass' as _global

.nav
  display: flex
  background-color: _global.$primary
  width: 100%

  height: 2.5rem
  font-size: .75rem
  @include _global.tablet
    height: 3rem
    font-size: .85rem
  @include _global.desktop
    height: 5rem
    font-size: 1rem

  .nav-links-wrapper
    display: grid
    grid-auto-flow: column
    overflow-x: scroll
    scroll-snap-type: x mandatory
    align-items: center
    justify-content: flex-start
    height: 100%

    .router-link
      font-family: "Formula1 Display Regular", sans-serif
      font-weight: bold
      color: _global.$font-light
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
        border-bottom: .3rem solid _global.$font-light

      &:hover
        color: _global.$font-dark
        transition: none
        background-color: _global.$font-light

</style>