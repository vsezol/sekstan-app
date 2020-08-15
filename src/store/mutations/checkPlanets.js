import {
  ADD_STAR,
  DEL_STAR,
  CHECK_PLANET,
  RANDOM_OC_AND_T,
  CALC_AV_OC_AND_T
} from './mutationTypes'

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
    state[type + 's'].find(el => el.name === name).results.push({ OC, T })
  },
  [CALC_AV_OC_AND_T](state, { type, name, avOC, avT }) {
    state[type + 's'].find(el => el.name === name).avOC = avOC
    state[type + 's'].find(el => el.name === name).avT = avT
  }
}