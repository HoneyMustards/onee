import { combineReducers } from 'redux';
import count from './count/reducer';
import filter from './filter';
import user from './user';
import customers from './customers';

export default combineReducers({
  user,
  filter,
  customers
})
