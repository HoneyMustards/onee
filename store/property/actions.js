import { SET_PROPERTY } from './actions.type';

export const setProperty = (property) => {
  return {
    type: SET_PROPERTY,
    payload: property
  }
};