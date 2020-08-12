import { UPDATE_VAR } from '../mutations/mutationTypes'

export default {
  updateVar(context, payload) {
    context.commit(UPDATE_VAR, payload)
  }
}
