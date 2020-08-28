import {
  CHECK_PLANET,
  ADD_STAR,
  DEL_STAR,
  CHECK_PLANETS_ADD_RESULT,
  DELETE_RESULT,
  CHECK_PLANETS_ERROR_INIT,
  CHECK_PLANETS_START_INIT,
  CHECK_PLANETS_SUCCESS_INIT,
  SET_CURRENT_LAMP,
  UNSET_CURRENT_LAMP,
  UPDATE_AV_OC_AV_T
} from '../mutations/mutationTypes'

import checkPlanetsResource from '@/resource/checkPlanets.res.js'
import MeasurementResource from '@/resource/measurement.res.js'

const measurementResource = new MeasurementResource()

export default {
  async init(context) {
    context.commit(CHECK_PLANETS_START_INIT)
    try {
      await measurementResource.init()
      context.commit(CHECK_PLANETS_SUCCESS_INIT)
    } catch {
      context.commit(CHECK_PLANETS_ERROR_INIT)
    }
  },
  setCurrentLamp(context, { name, type }) {
    measurementResource.setCurrentLamp(name, type)
    context.commit(SET_CURRENT_LAMP, { name, type })
  },
  unsetCurrentLamp(context) {
    measurementResource.unsetCurrentLamp()
    context.commit(UNSET_CURRENT_LAMP)
  },
  async listenServerEvents(context) {
    measurementResource.listen(CHECK_PLANETS_ADD_RESULT, async data => {
      await context.dispatch('addResult', data)
    })()
  },
  async addResult({ commit }, payload) {
    commit(CHECK_PLANETS_ADD_RESULT, payload)
  },
  checkPlanet(context, payload) {
    context.commit(CHECK_PLANET, payload)
  },
  addStar(context, number) {
    const newStar = createBeginStar(number)
    context.commit(ADD_STAR, newStar)
  },
  delStar(context) {
    context.commit(DEL_STAR)
  },
  async sendAllCheckedToServer(context) {
    try {
      await checkPlanetsResource.putAllChecked(context.getters.onlyChecked)
    } catch (error) {
      return error
    }
  },
  async deleteResult({ commit }, payload) {
    try {
      const response = await measurementResource.deleteResult(payload)
      commit(DELETE_RESULT, payload)
      commit(UPDATE_AV_OC_AV_T, response)
    } catch (error) {
      return error
    }
  }
}

function createBeginStar(number) {
  return {
    name: '' + number,
    results: [],
    avOC: null,
    avT: null,
    link: `/location/checked-list/${number}?type=star`
  }
}
