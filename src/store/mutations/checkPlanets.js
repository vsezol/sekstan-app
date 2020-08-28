import {
  ADD_STAR,
  DEL_STAR,
  CHECK_PLANET,
  DELETE_RESULT,
  CHECK_PLANETS_ERROR_INIT,
  CHECK_PLANETS_SUCCESS_INIT,
  CHECK_PLANETS_START_INIT,
  SET_CURRENT_LAMP,
  UNSET_CURRENT_LAMP,
  CHECK_PLANETS_ADD_RESULT,
  UPDATE_AV_OC_AV_T_SKP_DEV
} from './mutationTypes'

import searchByTypeAndName from '../utils/searchByTypeAndName'

export default {
  [CHECK_PLANET](state, { i, checked }) {
    state.planets[i].checked = checked
  },
  [ADD_STAR](state, payload) {
    state.stars.push(payload)
  },
  [DEL_STAR](state) {
    state.stars.pop()
  },
  [DELETE_RESULT](state, { type, name, index }) {
    searchByTypeAndName(state, type, name).results.splice(index, 1)
  },
  [CHECK_PLANETS_START_INIT](state) {
    state.initLoading = true
    state.initError = null
  },
  [CHECK_PLANETS_SUCCESS_INIT](state) {
    state.initLoading = false
    state.initError = null
  },
  [CHECK_PLANETS_ERROR_INIT](state, error) {
    state.initLoading = false
    state.initError = error
  },
  [SET_CURRENT_LAMP](state, payload) {
    state.currentLamp = payload
  },
  [UNSET_CURRENT_LAMP](state) {
    state.currentLamp = {
      name: '',
      type: ''
    }
  },
  [UPDATE_AV_OC_AV_T_SKP_DEV](state, { avOC, avT, skp, deviation }) {
    const currentLamp = searchByTypeAndName(
      state,
      state.currentLamp.type,
      state.currentLamp.name
    )
    currentLamp.avOC = avOC
    currentLamp.avT = avT
    currentLamp.skp = skp
    currentLamp.deviation = deviation
  },
  [CHECK_PLANETS_ADD_RESULT](state, payload) {
    const { type, name, OC, T, avOC, avT, skp, deviation } = payload
    const currentLamp = searchByTypeAndName(state, type, name)
    currentLamp.results.push({ OC, T })
    currentLamp.avOC = avOC
    currentLamp.avT = avT
    currentLamp.skp = skp
    currentLamp.deviation = deviation
  }
}
