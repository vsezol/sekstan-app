import { DEL_RES_MEASURE_ANGLE } from './mutationTypes'

export default {
  [DEL_RES_MEASURE_ANGLE](state, index) {
    state.results.splice(index, 1)
  }
}
