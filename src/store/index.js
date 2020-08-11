import Vue from 'vue'
import Vuex from 'vuex'
import archive from './modules/archive'

Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,
  modules: {
    archive
  }
})

export default store
