import { SET_CUSTOMERS } from './actions.type';

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return Object.assign({}, action.payload)
    default:
      return state
  }
}

