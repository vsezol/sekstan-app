import {
  CHECK_PLANET,
  ADD_STAR,
  DEL_STAR,
  ADD_RESULT,
  CALC_AV_OC_AND_T,
  REMOVE_RESULT
} from '../mutations/mutationTypes'

import searchByTypeAndName from '../utils/searchByTypeAndName'
import averageOCAndT from '../utils/averageOCAndT'

import axios from '@/plugins/axios'

const createBeginStar = number => ({
  name: '' + number,
  results: [],
  avOC: null,
  avT: null,
  link: `/location/checked-list/${number}?type=star`
})

export default {
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
      const response = await axios.put(
        '/checked-planets-stars',
        context.getters.onlyChecked
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  setLamp({ state }, payload) {
    console.log(state)
    const socket = state.socket
    socket.send(
      JSON.stringify({
        request: 'SET_CURRENT_LAMP',
        ...payload
      })
    )
  },
  // listenServer({ dispatch }) {
  //   console.log(state)
  //   // socket.onmessage = evt => {
  //   //   console.log(JSON.parse(evt.data))
  //   // }
  // },
  async removeResult({ commit, dispatch }, payload) {
    commit(REMOVE_RESULT, payload)
    // dev
    await dispatch('calcAvOCAndT', payload)
  },
  async addResult({ commit, dispatch }, payload) {
    commit(ADD_RESULT, payload)
    await dispatch('calcAvOCAndT', { type: payload.type, name: payload.name })
  },
  calcAvOCAndT({ state, commit }, { type, name }) {
    const element = searchByTypeAndName(state, type, name)
    const avs = averageOCAndT(element.results)
    commit(CALC_AV_OC_AND_T, { type, name, ...avs })
  }
}
