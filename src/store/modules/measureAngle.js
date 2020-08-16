import actions from '../actions/measureAngle'
import mutations from '../mutations/measureAngle'

export default {
  namespaced: true,
  state: {
    results: [
      {
        OC: 4343,
        T: 323232
      },
      {
        OC: 4343,
        T: 323232
      },
      {
        OC: 4343,
        T: 323232
      },
      {
        OC: 4343,
        T: 323232
      }
    ],
    avOC: 111.11,
    avT: 122.22,
    skp: 111.4511,
    deviation: 12151
  },
  mutations,
  actions
}
