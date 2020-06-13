import axios from '../axios';

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

export const getFilter = () => {
  return async (dispatch, getState) => {
      // await new Promise(
      //   axios.get(`/properties`, null, {headers: {'Authorization': `Bearer ${getState().user.token}`}} )
      //   .then((response) => dispatch(setFilter(response.data)))
      // )
      const response = axios.get(`/properties`, null, {headers: {'Authorization': `Bearer ${getState().user.token}`}});
      return await response;
  }
};