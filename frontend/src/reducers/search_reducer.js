import {RECEIVE_BART_STATIONS} from '../util/map_util.js';

const SearchReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BART_STATIONS:
    console.log(action.bartStations);

      return action.bartStations;
    default:
      return state;

  }
}

export default SearchReducer;
