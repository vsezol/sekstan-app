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
        avOC: null,
        avT: null,
        link: '/location/checked-list/mars?type=planet'
      },
      {
        name: 'jupiter',
        checked: false,
        iconSrc: require('@/assets/img/icons/jupiter.svg'),
        results: [],
        avOC: null,
        avT: null,
        link: '/location/checked-list/jupiter?type=planet'
      },
      {
        name: 'moon',
        checked: false,
        iconSrc: require('@/assets/img/icons/moon.svg'),
        results: [],
        avOC: null,
        avT: null,
        link: '/location/checked-list/moon?type=planet'
      },
      {
        name: 'saturn',
        checked: false,
        iconSrc: require('@/assets/img/icons/saturn.svg'),
        results: [],
        avOC: null,
        avT: null,
        link: '/location/checked-list/saturn?type=planet'
      },
      {
        name: 'sun',
        checked: false,
        iconSrc: require('@/assets/img/icons/sun.svg'),
        results: [],
        avOC: null,
        avT: null,
        link: '/location/checked-list/sun?type=planet'
      },
      {
        name: 'venus',
        checked: false,
        iconSrc: require('@/assets/img/icons/venus.svg'),
        results: [],
        avOC: null,
        avT: null,
        link: '/location/checked-list/venus?type=planet'
      }
    ],
    currentLamp: {
      name: '',
      type: ''
    },
    stars: [],
    skp: null,
    deviation: null,
    initLoading: true,
    initError: null
  },
  mutations,
  actions,
  getters
}
