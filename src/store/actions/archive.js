import {
  START_GET_ARCHIVE,
  SUCCESS_GET_ARCHIVE,
  ERROR_GET_ARCHIVE
} from '../mutations/mutationTypes'

import archiveResource from '@/resource/archive.res.js'

export default {
  async getArchive({ commit }) {
    commit(START_GET_ARCHIVE)
    try {
      const archive = await archiveResource.getArchive()
      commit(SUCCESS_GET_ARCHIVE, archive)
    } catch (error) {
      commit(ERROR_GET_ARCHIVE, error)
    }
  }
}
