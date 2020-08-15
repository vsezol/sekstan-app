import searchByTypeAndName from '../utils/searchByTypeAndName'

export default {
  onlyChecked: ({ planets, stars }) => ({
    planets: planets.filter(({ checked }) => checked),
    stars
  }),
  getByTypeAndName: state => (type, name) =>
    searchByTypeAndName(state, type, name)
}
