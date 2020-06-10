import { SET_INSTANT_BOOKING, SET_FILTERS } from './actions.type';

export const setInstantBooking = (status) => {
  return {
    type: SET_INSTANT_BOOKING,
  };
}

export const setFilter = (persistState) => {
  return {
    type: SET_FILTERS,
    persistState, 
  };
}