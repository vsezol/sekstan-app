import { CHECK_PLANET, ADD_STAR, DEL_STAR } from '../mutations/mutationTypes'

const createBeginStar = number => ({
  name: parseInt(number),
  results: [],
  avOC: null,
  avT: null,
  link: `/location/checked-list/${number}?type=star`
})

export default {
  checkPlanet(context, payload) {
    context.commit(CHECK_PLANET, payload)
  },
  addStar(context, number) {
    const newStar = createBeginStar(number)
    context.commit(ADD_STAR, newStar)
  },
  delStar(context) {
    context.commit(DEL_STAR)
  }
}
