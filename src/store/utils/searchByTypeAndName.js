export default (state, type, name) => {
  const ddd = state[type + 's'].find(el => el.name === name)
  return ddd
}
