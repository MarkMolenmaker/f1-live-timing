import { createStore } from 'vuex'
import { StoreSocketIO, requestDrivers } from "@/plugins/StoreSocket.io";

export default createStore({
  plugins: [ StoreSocketIO() ],
  state: {
    // The Data
    connected: false,
    drivers: null,
    cars: []
  },
  getters: {
    // Query the Data
    isConnected(state) {
        return state.connected
    },
    drivers(state) {
        return state.drivers
    },
    cars(state) {
        return state.cars
    }
  },
  mutations: {
    /*
      increment(state, payload) {
        state.counter += payload
      }
      // Use: $store.commit('increment', 10)
    */
    setDrivers(state, payload) {
      state.drivers = payload
      state.cars = [...payload]
      state.cars.forEach(car => {
        car.latest_stint = 0
        car.last_lap_time = '-'
        car.car_track_status = ''
        car.last_lap_green = false
        car.last_lap_purple = false
        car.interval = '-'
        car.gap = '-'
        car.sectors = [null, null, null]
        car.pitStopCount = 0
      })
    },
    setConnected(state, payload) {
        state.connected = payload
    },
    updateCar(state, payload) {
      const car = state.cars.find(car => car.driver_nr === payload.driver_nr)
      state.cars.splice(state.cars.indexOf(car), 1)
      state.cars.splice(payload.track_position - 1, 0, car)
    },
    updateCarTiming(state, payload) {
      const car = state.cars.find(car => car.driver_nr === payload.driver_nr)
      car.latest_stint = payload.latest_stint
      car.track_position = payload.track_position
      car.last_lap_time = payload.latest_timing.last_lap_time
      car.car_track_status = payload.latest_timing.car_track_status
      car.last_lap_green = payload.latest_timing.last_lap_green
      car.last_lap_purple = payload.latest_timing.last_lap_purple
      car.interval = payload.latest_timing.interval
      car.gap = payload.latest_timing.gap_to_leader_time !== 'None' ? payload.latest_timing.gap_to_leader_time : payload.latest_timing.gap_to_leader_laps + ' L'
      car.sectors = payload.latest_timing.sectors
      car.pit_stop_count = payload.latest_timing.pit_stop_count
      // Check if the car is already in the right position
      if (state.cars.indexOf(car) === payload.track_position - 1) return
      state.cars.splice(state.cars.indexOf(car), 1)
      state.cars.splice(payload.track_position - 1, 0, car)
    }
  },
  actions: {
    /*
      incrementAsync({ commit }) {
        setTimeout(() => {
            commit('increment')
      }, 1000)
      // Use: $store.dispatch('incrementAsync', { 10 })
    */
    connect: async ({ commit }) => {
      requestDrivers()
      commit('setConnected', true)
    }
  },
  modules: {
  }
})
