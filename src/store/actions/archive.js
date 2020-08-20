import {
  START_GET_ARCHIVE,
  SUCCESS_GET_ARCHIVE,
  ERROR_GET_ARCHIVE
} from '../mutations/mutationTypes'

import axios from '@/plugins/axios'

export default {
  async getArchive({ commit }) {
    commit(START_GET_ARCHIVE)
    try {
      const response = await axios.get('/archive')
      const externalArchive = response.data.archive
      commit(SUCCESS_GET_ARCHIVE, externalArchive)
    } catch (error) {
      commit(ERROR_GET_ARCHIVE, error)
    }
  }
}
