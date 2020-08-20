import { UPDATE_VAR } from '../mutations/mutationTypes'
import axios from '@/plugins/axios'
export default {
  updateVar(context, payload) {
    context.commit(UPDATE_VAR, payload)
  },
  async submitVars({ state }) {
    const { vars } = state
    try {
      const response = await axios.put('/begin-vars', vars)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
