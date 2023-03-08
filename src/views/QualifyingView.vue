<template>
  <div class="wrapper">
    <table class="table">
      <thead class="table-head">
        <tr class="table-head-row">
          <th colspan="3">Driver</th>
          <th>Laptime</th>
          <th>Sector 1</th>
          <th>Sector 2</th>
          <th>Sector 3</th>
        </tr>
      </thead>
      <tbody class="driver-lap-data">
        <tr class="top-row">
          <td class="driver-data">
            <span class="driver-position">1</span>
            <div class="driver-colour"/>
            <span class="driver-name">Verstappen</span>
          </td>
          <td class="lap-time">1:27.776</td>
          <td class="sector-time">25.123</td>
          <td class="sector-time">25.123</td>
          <td class="sector-time">25.123</td>
        </tr>
        <tr class="bottom-row">
          <td />
          <td class="lap-delta">+1.734</td>
          <td class="minisector-wrapper"><div class="minisector-segment" v-for="index in 5" :key="index"/></td>
          <td class="minisector-wrapper"><div class="minisector-segment" v-for="index in 5" :key="index"/></td>
          <td class="minisector-wrapper"><div class="minisector-segment" v-for="index in 5" :key="index"/></td>
        </tr>
      </tbody>
      <tbody class="driver-lap-data">
        <tr class="top-row">
          <td class="driver-data">
            <span class="driver-position">20</span>
            <div class="driver-colour"/>
            <span class="driver-name">Zhou</span>
          </td>
          <td class="lap-time">1:27.776</td>
          <td class="sector-time">25.123</td>
          <td class="sector-time">25.123</td>
          <td class="sector-time">25.123</td>
        </tr>
        <tr class="bottom-row">
          <td />
          <td class="lap-delta">+1.734</td>
          <td class="minisector-wrapper"><div class="minisector-segment" v-for="index in 5" :key="index"/></td>
          <td class="minisector-wrapper"><div class="minisector-segment" v-for="index in 5" :key="index"/></td>
          <td class="minisector-wrapper"><div class="minisector-segment" v-for="index in 5" :key="index"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'QualifyingView'
}
</script>

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

  .information-wrapper
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    width: 100%
    background-color: _global.$background

    .session-information
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: flex-start
      padding: 1em
      width: 100%
      background-color: _global.$background-light

      .session-name
        font-size: 1rem
        font-weight: bold
        color: _global.$font-light

      .time-remaining
        font-size: 1.5rem
        color: _global.$font-light

  .table
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    background-color: _global.$background

    .table-head
      display: flex
      flex-direction: row
      align-items: center
      justify-content: center
      width: 100%
      padding: 0 1em
      box-sizing: border-box
      background-color: _global.$background-light

      .table-head-row
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        width: 100%
        background-color: _global.$background-light

        th
          display: flex
          flex-direction: row
          width: 100%
          align-items: flex-start

    .driver-lap-data
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      width: 100%
      background-color: _global.$background
      margin-bottom: 1em

      tr
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        width: 100%
        padding: 0 1em
        box-sizing: border-box
        background-color: _global.$background-light

        &.top-row
          display: grid
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr
          background-color: _global.$background-light

        &.bottom-row
          display: grid
          grid-template-columns:  1fr 1fr 1fr 1fr 1fr
          background-color: _global.$background-light

        td
          display: flex
          flex-direction: row
          align-items: center
          justify-content: center
          width: 100%
          padding: 1em
          font-size: 1rem
          font-weight: bold
          color: _global.$font-light

          &.driver-data

            &.driver-position


            .driver-colour
              height: 100%
              background-color: _global.$mercedes-color

            &.driver-name


          &.lap-time


          &.sector-time


          &.lap-delta


        .minisector-wrapper
          display: flex
          flex-direction: row
          align-items: center
          justify-content: center
          width: 100%

          .minisector-segment
            display: block
            width: 100%
            height: 1em
            background-color: _global.$purple


</style>