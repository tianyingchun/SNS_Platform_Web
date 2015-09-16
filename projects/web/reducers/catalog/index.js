import { combineReducers } from 'redux';
import * as product from './product';

const finalReducers = combineReducers({
  ...product
});

export default finalReducers;
