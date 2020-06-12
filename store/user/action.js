import { SET_USER, SET_TOKEN } from './actions.type';

export const setUser = (payload) => {
    return {
      type: SET_USER,
      payload
    };
}

export const setToken = (payload) => {
  return {
    type: SET_TOKEN,
    payload
  };
}