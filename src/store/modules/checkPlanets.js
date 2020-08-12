import actions from '../actions/checkPlanets'
import mutations from '../mutations/checkPlanets'

export default {
  namespaced: true,
  state: {
    planets: [
      {
        name: 'mars',
        checked: false,
        iconSrc: require('@/assets/img/icons/mars.svg')
      },
      {
        name: 'jupiter',
        checked: false,
        iconSrc: require('@/assets/img/icons/jupiter.svg')
      },
      {
        name: 'moon',
        checked: false,
        iconSrc: require('@/assets/img/icons/moon.svg')
      },
      {
        name: 'saturn',
        checked: false,
        iconSrc: require('@/assets/img/icons/saturn.svg')
      },
      {
        name: 'sun',
        checked: false,
        iconSrc: require('@/assets/img/icons/sun.svg')
      },
      {
        name: 'venus',
        checked: false,
        iconSrc: require('@/assets/img/icons/venus.svg')
      }
    ],
    stars: [11, 33, 55, 1, 566, 3, 55]
  },
  mutations,
  actions
}
