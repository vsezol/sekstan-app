export default (state, type, name) =>
  state[type + 's'].find(el => el.name === name)
