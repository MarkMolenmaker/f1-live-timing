import io from 'socket.io-client'
const socket = io('http://192.168.178.110:5000', {
    cors: {
        origin: '*'
    }
})

export const requestDrivers = () => {
    socket.emit('commands', 'get_drivers')
}

// Disable eslint for this file
/* eslint-disable */
export const StoreSocketIO = () => {
    return (store) => {
        socket.on('car_timing', (payload) => {
            store.commit('updateCarTiming', payload)
            // console.log(payload)
        })
        socket.on('car', (payload) => {
            store.commit('updateCar', payload)
            // console.log(payload)
        })
        socket.on('drivers', (payload) => {
            store.commit('setDrivers', payload)
            // console.log(payload)
        })
        socket.on('connect', (payload) => {
            // console.log(payload)
        })
    }
}