import {
  CHECK_PLANET,
  ADD_STAR,
  DEL_STAR,
  RANDOM_OC_AND_T,
  CALC_AV_OC_AND_T
} from '../mutations/mutationTypes'

import searchByTypeAndName from '../utils/searchByTypeAndName'
import averageOCAndT from '../utils/averageOCAndT'

const createBeginStar = number => ({
  name: parseInt(number),
  results: [],
  avOC: null,
  avT: null,
  link: `/location/checked-list/${number}?type=star`
})

const randomRes = () => Math.round(Math.random() * 10000) / 100

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
  //dev
  async randomOCAndT({ commit, dispatch }, { type, name }) {
    const payload = { type, name, OC: randomRes(), T: randomRes() }
    commit(RANDOM_OC_AND_T, payload)
    await dispatch('calcAvOCAndT', { type, name })
  },
  calcAvOCAndT({state, commit}, { type, name }) {
    const element = searchByTypeAndName(state, type, name)
    const avs = averageOCAndT(element.results)
    commit(CALC_AV_OC_AND_T, {type, name, ...avs})
  }
}
