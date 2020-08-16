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
  modules: {
    archive,
    newPoint,
    checkPlanets,
    location,
    measureAngle
  }
})

export default store
