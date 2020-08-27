import {
  ADD_STAR,
  DEL_STAR,
  CHECK_PLANET,
  RANDOM_OC_AND_T,
  CALC_AV_OC_AND_T,
  REMOVE_RESULT,
  CHECK_PLANETS_ERROR_INIT,
  CHECK_PLANETS_SUCCESS_INIT,
  CHECK_PLANETS_START_INIT,
  SET_CURRENT_LAMP
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
  [RANDOM_OC_AND_T](state, { type, name, OC, T }) {
    searchByTypeAndName(state, type, name).results.push({ OC, T })
  },
  [CALC_AV_OC_AND_T](state, { type, name, avOC, avT }) {
    const element = searchByTypeAndName(state, type, name)
    element.avOC = avOC
    element.avT = avT
  },
  [REMOVE_RESULT](state, { type, name, index }) {
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
  [SET_CURRENT_LAMP]() {}
}
