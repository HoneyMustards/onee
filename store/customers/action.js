import axios from '../axios';

import { SET_CUSTOMERS } from './actions.type';

export const setCustomers = (payload) => {
    return {
      type: SET_CUSTOMERS,
      payload
    };
}

export const getCustomers = () => {
  return async (dispatch, getState) => {
      await axios.get(`/customer`, null, {headers: {'Authorization': `Bearer ${getState().user.token}`}} )
        .then((response) => dispatch(setCustomers(response.data.data.content)))
  }
};