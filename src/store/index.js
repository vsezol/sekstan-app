import Vue from 'vue'
import Vuex from 'vuex'
import archive from './modules/archive'
import newPoint from './modules/newPoint'
import checkPlanets from './modules/checkPlanets'
import location from './modules/location'
import measureAngle from './modules/measureAngle'

Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,
  socket: null,
  modules: {
    archive,
    newPoint,
    checkPlanets,
    location,
    measureAngle
  },
  actions: {
    async init({ commit }) {
      const socket = new WebSocket('ws://localhost:5000')
      try {
        await new Promise((res, rej) => {
          socket.onopen = () => {
            console.log('Соединение по сокету установлено')
            socket.send('connect')
            res()
          }
          socket.onerror = () => {
            console.log(`Ошибка подключения по сокету`)
            rej()
          }
        })
        console.log('connect')
        commit('INIT', socket)
      } catch (error) {
        alert(error)
      }
    }
  },
  mutations: {
    INIT(state, payload) {
      state.socket = payload.socket
    }
  }
})

export default store
