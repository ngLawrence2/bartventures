import {combineReducers} from 'redux';
import BartStationsReducer from './BartStationsReducer.js';
import AttractionReducer from './AttractionReducer.js';

const entitiesReducer = combineReducers({
  bart: BartStationsReducer,
  attraction: AttractionReducer
});

export default entitiesReducer;
