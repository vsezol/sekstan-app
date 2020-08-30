import {
  MEASURE_ANGLE_START_INIT,
  MEASURE_ANGLE_ERROR_INIT,
  MEASURE_ANGLE_SUCCESS_INIT,
  SET_MEASURE,
  UNSET_MEASURE,
  MEASURE_ANGLE_ADD_RESULT,
  MEASURE_ANGLE_DEL_RES,
  MEASURE_ANGLE_UPDATE_AV_OC_AV_T_SKP_DEV
} from '../mutations/mutationTypes'

export default {
  [MEASURE_ANGLE_START_INIT](state) {
    state.initLoading = true
    state.initError = null
  },
  [MEASURE_ANGLE_SUCCESS_INIT](state) {
    state.initLoading = false
    state.initError = null
  },
  [MEASURE_ANGLE_ERROR_INIT](state, error) {
    state.initLoading = false
    state.initError = error
  },
  [SET_MEASURE]() {},
  [UNSET_MEASURE]() {},
  [MEASURE_ANGLE_ADD_RESULT](state, payload) {
    const { OC, T, avOC, avT, skp, deviation } = payload
    state.results.push({ OC, T })
    state.avOC = avOC
    state.avT = avT
    state.skp = skp
    state.deviation = deviation
  },
  [MEASURE_ANGLE_DEL_RES](state, { index }) {
    state.results.splice(index, 1)
  },
  [MEASURE_ANGLE_UPDATE_AV_OC_AV_T_SKP_DEV](
    state,
    { avOC, avT, skp, deviation }
  ) {
    state.avOC = avOC
    state.avT = avT
    state.skp = skp
    state.deviation = deviation
  }
}
