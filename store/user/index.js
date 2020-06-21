import { SET_USER, SET_TOKEN } from './actions.type';

const initialState = {
    content: {
      given_name:'Ertuğrul Eşlik',
      picture: 'https://s.gravatar.com/avatar/c74ee0e56221f70bbb1ab180fd26f1d2?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fer.png'
    },
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

