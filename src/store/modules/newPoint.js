import mutations from '../mutations/newPoint'
import actions from '../actions/newPoint'

export default {
  namespaced: true,
  state: {
    vars: {
      c: '',
      t: '',
      p: '',
      u: '',
      s: '',
      v: '',
      py: ''
    }
  },
  mutations,
  actions
}
