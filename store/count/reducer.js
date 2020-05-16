import { countActionTypes } from './action'

const countInitialState = {
  count: 0,
}

export default (state = countInitialState, action) => {
  switch (action.type) {
    case countActionTypes.ADD:
      return Object.assign({}, state, {
        count: action.count,
      })
    default:
      return state
  }
}
