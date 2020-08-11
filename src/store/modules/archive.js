import mutations from '../mutations/archive'
import actions from '../actions/archive'

const chat = {
  namespaced: true,
  state: {
    loading: true,
    error: null,
    archive: []
  },
  mutations,
  actions
}

export default chat
