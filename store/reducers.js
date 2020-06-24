import { combineReducers } from 'redux';
import filter from './filter';
import user from './user';
import customers from './customers';
import booking from './booking';
import property from './property';

export default combineReducers({
  user,
  filter,
  customers,
  booking,
  property
})
