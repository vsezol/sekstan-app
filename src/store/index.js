import Vue from 'vue'
import Vuex from 'vuex'
import archive from './modules/archive'
import newPoint from './modules/newPoint'

Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,
  modules: {
    archive,
    newPoint
  }
})

export default store
