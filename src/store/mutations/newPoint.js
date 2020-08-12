import { UPDATE_VAR } from './mutationTypes'

export default {
  [UPDATE_VAR](state, { name, value }) {
    state.vars[name] = value
  }
}
