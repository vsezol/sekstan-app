import { UPDATE_VAR } from '../mutations/mutationTypes'

import newPointResource from '@/resource/newPoint.res.js'

export default {
  updateVar(context, payload) {
    context.commit(UPDATE_VAR, payload)
  },
  async submitVars({ state }) {
    const { vars } = state
    try {
      const response = await newPointResource.putVars(vars)
      return response
    } catch (error) {
      return error
    }
  }
}
