import { CHECK_PLANET, ADD_STAR, DEL_STAR } from '../mutations/mutationTypes'

export default {
  checkPlanet(context, payload) {
    console.log(payload)
    context.commit(CHECK_PLANET, payload)
  },
  addStar(context, payload) {
    context.commit(ADD_STAR, parseInt(payload))
  },
  delStar(context) {
    context.commit(DEL_STAR)
  }
}
