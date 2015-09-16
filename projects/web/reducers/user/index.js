import { combineReducers } from 'redux';
import * as listReducers from './list';

// The final reducers for workspace list.
const finalReducers = combineReducers({
  ...listReducers
});

export default finalReducers;
