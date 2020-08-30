import actions from '../actions/measureAngle'
import mutations from '../mutations/measureAngle'

export default {
  namespaced: true,
  state: {
    results: [],
    avOC: null,
    avT: null,
    skp: null,
    deviation: null,
    initLoading: true,
    initError: null
  },
  mutations,
  actions
}
