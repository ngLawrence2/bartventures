import {combineReducers} from 'redux';
import SearchReducer from './search_reducer.js';

const entitiesReducer = combineReducers({
  search: SearchReducer
});

export default entitiesReducer;
