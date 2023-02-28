<template>
  <div class="wrapper">
    <div class="filler" />
  </div>
</template>

<style lang="sass" scoped>
@use '@/assets/global.sass' as _global

.wrapper
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  background-color: _global.$background-light

  .filler
    width: 200px
    height: 100px
    background-color: _global.$mercedes-color
</style>