// import { countActionTypes } from './action'
// import { updateFilter } from './actions';

import { SET_INSTANT_BOOKING, SET_FILTERS } from './actions.type';

const initialState = {
  price: {
      min: 100,
      max: 250
  },
  bedrooms: {
      room: 1,
      bed:  2
  },
  instantBooking: false,
  sort: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      console.log(action.persistState);
      return Object.assign({}, action.persistState)
    case SET_INSTANT_BOOKING:      
      return Object.assign({}, state, {
        instantBooking: true
      })
    default:
      return state
  }
}

