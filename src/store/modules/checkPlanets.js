import actions from '../actions/checkPlanets'
import mutations from '../mutations/checkPlanets'
import getters from '../getters/checkPlanets'

export default {
  namespaced: true,
  state: {
    planets: [
      {
        name: 'mars',
        checked: false,
        iconSrc: require('@/assets/img/icons/mars.svg'),
        results: [],
        h: null,
        link: '/location/checked-list/mars?type=planet'
      },
      {
        name: 'jupiter',
        checked: false,
        iconSrc: require('@/assets/img/icons/jupiter.svg'),
        results: [],
        h: null,
        link: '/location/checked-list/jupiter?type=planet'
      },
      {
        // !!!
        // dev
        // !!!
        name: 'moon',
        checked: true,
        iconSrc: require('@/assets/img/icons/moon.svg'),
        results: [],
        h: null,
        link: '/location/checked-list/moon?type=planet'
      },
      {
        name: 'saturn',
        checked: false,
        iconSrc: require('@/assets/img/icons/saturn.svg'),
        results: [],
        h: null,
        link: '/location/checked-list/saturn?type=planet'
      },
      {
        name: 'sun',
        checked: false,
        iconSrc: require('@/assets/img/icons/sun.svg'),
        results: [],
        h: null,
        link: '/location/checked-list/sun?type=star'
      },
      {
        name: 'venus',
        checked: false,
        iconSrc: require('@/assets/img/icons/venus.svg'),
        results: [],
        h: null,
        link: '/location/checked-list/venus?type=planet'
      }
    ],
    stars: [],
    skp: null,
    deviation: null
  },
  mutations,
  actions,
  getters
}
