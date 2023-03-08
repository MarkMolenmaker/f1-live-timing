import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/leaderboard',
    redirect: '/leaderboard/laps'
  },
  {
    path: '/leaderboard/laps',
    name: 'laps_leaderboard',
    component: () => import(/* webpackChunkName: "laps_leaderboard" */ '../views/leaderboard/LapsLeaderboardView.vue')
  },
  {
    path: '/leaderboard/sectors',
    name: 'sectors_leaderboard',
    component: () => import(/* webpackChunkName: "sectors_leaderboard" */ '../views/leaderboard/SectorsLeaderboardView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
