import getters from '../getters/location'

export default {
  namespaced: true,
  state: {
    loading: true,
    phi: {
      degs: 0,
      mins: 5.5,
      direction: 'N'
    },
    lambda: {
      degs: 0,
      mins: 2.8,
      direction: 'E'
    },
    date: '18.09.2020',
    time: '11:31:31'
  },
  getters
}
