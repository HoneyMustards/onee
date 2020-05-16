import { combineReducers } from 'redux';
import count from './count/reducer';
import filter from './filter';

export default combineReducers({
  count,
  filter
})
