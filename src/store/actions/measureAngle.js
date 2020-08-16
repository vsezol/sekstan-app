import { DEL_RES_MEASURE_ANGLE } from '../mutations/mutationTypes'

export default {
  delResult(context, payload) {
    context.commit(DEL_RES_MEASURE_ANGLE, payload)
  }
}
