<template>
  <nav-sub-bar>
    <router-link to="/leaderboard/laps" >Laps</router-link>
    <router-link to="/leaderboard/sectors" >Sectors</router-link>
  </nav-sub-bar>
  <table class="table">
    <thead class="table-head">
      <tr class="table-row">
        <th class="position">POSITION</th>
        <th class="time">LAP TIME</th>
        <th class="time">GAP</th>
        <th class="time">INTERVAL</th>
        <th class="time">SECTOR 1</th>
        <th class="time">SECTOR 2</th>
        <th class="time">SECTOR 3</th>
        <th class="stat">POS</th>
        <th class="stat">TYRE</th>
        <th class="stat">DRS</th>
        <th class="stat">PIT</th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr class="table-row" v-for="(car, index) in this.$store.getters.cars" :key="car.driver_nr">
        <td class="position">
          <span class="index">{{ index + 1 }}</span>
<!--          <span class="index">{{ car.track_position }}</span>-->
          <div class="color" :style="{ backgroundColor: '#' + car.team_color }"/>
          <span class="name">{{ car.short_hand }}</span>
        </td>
        <td class="time">
          <span :class="{
            green: car.last_lap_green,
            purple: car.last_lap_purple,
            }">{{ formatted_laptime(car.last_lap_time, car.car_track_status) }}</span>
        </td>
        <td class="time transparent"><span>{{ Number(car.gap).toFixed(3) }}</span></td>
        <td class="time transparent">
          <span :class="{yellow: Number(car.interval) < 0.5 && Number(car.interval) > 0}">{{ Number(car.interval) === 0 ? '-' : Number(car.interval).toFixed(3) }}</span>
        </td>
        <td class="time">
          <span v-if="car.sectors[0]" :class="{
            green: car.sectors[0].is_green,
            yellow: car.sectors[0].is_yellow,
            purple: car.sectors[0].is_purple
            }">{{ Number(car.sectors[0].time).toFixed(3) }}</span>
          <span v-else>-</span>
        </td>
        <td class="time">
          <span v-if="car.sectors[1]" :class="{
            green: car.sectors[1].is_green,
            yellow: car.sectors[1].is_yellow,
            purple: car.sectors[1].is_purple
            }">{{ Number(car.sectors[1].time).toFixed(3) }}</span>
          <span v-else>-</span>
        </td>
        <td class="time">
          <span v-if="car.sectors[2]" :class="{
            green: car.sectors[2].is_green,
            yellow: car.sectors[2].is_yellow,
            purple: car.sectors[2].is_purple
            }">{{ Number(car.sectors[2].time).toFixed(3) }}</span>
          <span v-else>-</span>
        </td>
        <td class="stat">{{ formatted_position_changed(car.driver_nr, car.track_position) }}</td>
        <td class="stat">
          <span>10</span>
          <span>M</span>
        </td>
        <td class="stat"><div class="drs" /></td>
        <td class="stat">{{ car.pit_stop_count }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import NavSubBar from "@/components/navigation/NavSubBar.vue";

export default {
  name: "LapsLeaderboardView",
  components: { NavSubBar },
  mounted() {
    if (!this.$store.getters.isConnected)
      this.$store.dispatch('connect')
  },
  methods: {
    formatted_laptime(laptime, track_status) {
      if (laptime === undefined || track_status === undefined)
        return '-'
      switch (track_status) {
        case 'CarTrackStatus.ON_TRACK':
          return laptime.substring(2, 11)
        case 'CarTrackStatus.IN_PIT':
          return "PIT"
        case 'CarTrackStatus.OUTLAP':
          return "PIT EXIT"
        case 'CarTrackStatus.RETIRED':
          return "RETIRED"
        case 'CarTrackStatus.STOPPED':
          return "STOPPED"
      }
    },
    formatted_position_changed(driver_nr, position) {
      const change = this.$store.getters.drivers.find(driver => driver.driver_nr === driver_nr).start_position - position
      if (change === undefined)
        return '-'
      if (change === 0)
        return '-'
      if (change > 0)
        return `+${change}`
      if (change < 0)
        return `${change}`
    }
  }
}

</script>

<style lang="sass" scoped>
@use "@/assets/global.sass" as _global

.table
  font-family: "Formula1 Display Regular", sans-serif
  font-weight: normal
  display: flex
  color: _global.$font-light
  flex-direction: column
  width: 100%

  .table-head
    background-color: _global.$background-dark

  .table-row
    display: flex
    flex-direction: row
    padding: 0 .5rem
    background-color: _global.$background-light

    th, td
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center

      height: auto
      padding: .25rem 0
      font-size: .75rem
      @include _global.tablet
        height: auto
        font-size: .85rem
      @include _global.desktop
        height: auto
        font-size: 1rem

      &.time
        width: 10rem
        span
          font-size: .55rem
          @include _global.tablet
            font-size: .65rem
          @include _global.desktop
            font-size: .8rem
          text-align: center
          padding: .2rem .4rem
          border-radius: 1rem
          background-color: _global.$background-lightest

      &.stat
        width: 5rem
      &.position
        width: 10rem
        justify-content: flex-start
        align-items: center

        .index
          display: flex
          justify-content: center
          align-items: center
          width: 1.75rem
          aspect-ratio: 1/1
          color: _global.$font-dark
          background-color: _global.$font-light
        .color
          margin: 0 .5em
          height: 100%
          width: .3rem
        .name
          display: flex
          align-items: center
          height: 100%
          text-align: left

    &:nth-child(odd)
      background-color: _global.$background

.green
  color: _global.$green
.yellow
  color: _global.$yellow
.purple
  color: _global.$purple

.transparent *
  background: transparent !important
</style>