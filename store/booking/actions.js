import { NEXT_STEP, PREV_STEP, SET_BOOKING } from './actions.type';

export const nextStep = () => {
  return {
    type: NEXT_STEP,
  }
};

export const prevStep = () => {
  return {
    type: PREV_STEP,
  }
};

export const setBooking = payload => {
  return {
    type: SET_BOOKING,
    payload: payload
  }
};