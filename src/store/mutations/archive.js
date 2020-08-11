import {
  START_GET_ARCHIVE,
  SUCCESS_GET_ARCHIVE,
  ERROR_GET_ARCHIVE
} from './mutationTypes'

export default {
  [START_GET_ARCHIVE](state) {
    state.loading = true
  },
  [SUCCESS_GET_ARCHIVE](state, payload) {
    state.archive = payload
    state.loading = false
  },
  [ERROR_GET_ARCHIVE](state, payload) {
    state.error = payload
  }
}
