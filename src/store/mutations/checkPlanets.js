import { ADD_STAR, DEL_STAR, CHECK_PLANET } from './mutationTypes'

export default {
  [CHECK_PLANET](state, { i, checked }) {
    state.planets[i].checked = checked
  },
  [ADD_STAR](state, payload) {
    state.stars.push(payload)
  },
  [DEL_STAR](state) {
    state.stars.pop()
  }
}
