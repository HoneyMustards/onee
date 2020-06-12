import { SET_USER, SET_TOKEN } from './actions.type';

const initialState = {
    content: {},
    token: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        content: action.payload
    }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
    }
    default:
      return state
  }
}

