import {
  CHECK_PLANET,
  ADD_STAR,
  DEL_STAR,
  CHECK_PLANETS_CALC_AV_OC_AND_T,
  CHECK_PLANETS_ADD_RESULT,
  // REMOVE_RESULT,
  CHECK_PLANETS_ERROR_INIT,
  CHECK_PLANETS_START_INIT,
  CHECK_PLANETS_SUCCESS_INIT,
  SET_CURRENT_LAMP
} from '../mutations/mutationTypes'

import searchByTypeAndName from '../utils/searchByTypeAndName'
import averageOCAndT from '../utils/averageOCAndT'

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
    context.commit(SET_CURRENT_LAMP)
  },
  async listenServerEvents(context) {
    measurementResource.listen(CHECK_PLANETS_ADD_RESULT, async data => {
      await context.dispatch('addResult', data)
    })()
  },
  async addResult({ commit }, payload) {
    // остановился здесь!!!!!!!!!
    console.log('addResult:', payload)
    commit(CHECK_PLANETS_ADD_RESULT, payload)
    // await dispatch('calcAvOCAndT', { type: payload.type, name: payload.name })
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
      const response = await checkPlanetsResource.putAllChecked(
        context.getters.onlyChecked
      )
      return response
    } catch (error) {
      return error
    }
  },
  calcAvOCAndT({ state, commit }, { type, name }) {
    const element = searchByTypeAndName(state, type, name)
    const avs = averageOCAndT(element.results)
    commit(CHECK_PLANETS_CALC_AV_OC_AND_T, { type, name, ...avs })
  }
  // async removeResult({ commit, dispatch }, payload) {
  //   commit(REMOVE_RESULT, payload)
  //   // dev
  //   await dispatch('calcAvOCAndT', payload)
  // },
  // //dev
  // async randomOCAndT({ commit, dispatch }, { type, name }) {
  //   const payload = { type, name, OC: randomRes(), T: randomRes() }
  //   commit(RANDOM_OC_AND_T, payload)
  //   await dispatch('calcAvOCAndT', { type, name })
  // },
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
