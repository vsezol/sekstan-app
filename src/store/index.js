import Vue from 'vue'
import Vuex from 'vuex'
import archive from './modules/archive'
import newPoint from './modules/newPoint'
import checkPlanets from './modules/checkPlanets'
import location from './modules/location'
import measureAngle from './modules/measureAngle'

import { INIT } from './mutations/mutationTypes'

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
            res()
          }
          socket.onerror = () => {
            console.log(`Ошибка подключения по сокету`)
            rej()
          }
        })
        commit(INIT, { socket })
      } catch (error) {
        alert(error)
      }
    }
  },
  mutations: {
    [INIT](state, { socket }) {
      console.log(INIT)
      state.socket = socket
    }
  }
})

export default store
