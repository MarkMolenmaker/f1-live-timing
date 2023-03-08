<template>
  <nav-sub-bar>
    <router-link to="/leaderboard/laps" >Laps</router-link>
    <router-link to="/leaderboard/sectors" >Sectors</router-link>
  </nav-sub-bar>
</template>

<script>
import NavSubBar from "@/components/navigation/NavSubBar.vue";

export default {
  name: "SectorsLeaderboardView",
  components: { NavSubBar }
}
</script>

<style lang="sass" scoped>

</style>