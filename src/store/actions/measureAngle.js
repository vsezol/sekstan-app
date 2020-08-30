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

import MeasureAngleResource from '@/resource/measureAngle.res.js'

const measureAngleResource = new MeasureAngleResource()

export default {
  async init(context) {
    context.commit(MEASURE_ANGLE_START_INIT)
    try {
      await measureAngleResource.init()
      context.commit(MEASURE_ANGLE_SUCCESS_INIT)
    } catch {
      context.commit(MEASURE_ANGLE_ERROR_INIT)
    }
  },
  setMeasure(context) {
    measureAngleResource.setMeasure()
    context.commit(SET_MEASURE)
  },
  unsetMeasure(context) {
    measureAngleResource.unsetMeasure()
    context.commit(UNSET_MEASURE)
  },
  async listenServerEvents(context) {
    measureAngleResource.listen('CHECK_PLANETS_ADD_RESULT', async data => {
      await context.dispatch('addResult', data)
    })()
  },
  async addResult({ commit }, payload) {
    commit(MEASURE_ANGLE_ADD_RESULT, payload)
  },
  async deleteResult({ commit }, index) {
    try {
      const response = await measureAngleResource.deleteResult(index)
      commit(MEASURE_ANGLE_DEL_RES, index)
      commit(MEASURE_ANGLE_UPDATE_AV_OC_AV_T_SKP_DEV, response)
    } catch (error) {
      return error
    }
  }
}
