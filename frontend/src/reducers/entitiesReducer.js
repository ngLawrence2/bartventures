import {combineReducers} from 'redux';
import SearchReducer from './search_reducer.js';
import BartStationsReducer from './BartStationsReducer.js';

const entitiesReducer = combineReducers({
  search: SearchReducer,
  allBart: BartStationsReducer
});

export default entitiesReducer;
