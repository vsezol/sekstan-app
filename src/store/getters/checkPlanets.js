export default {
  onlyChecked: ({ planets, stars }) => ({
    planets: planets.filter(({ checked }) => checked),
    stars
  })
}
