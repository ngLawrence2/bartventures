import {DISPLAY_CLICKED_ATTRACTION} from '../util/map_util.js';

const DisplayAttractionReducer = (state=[],action) => {
  Object.freeze(state);
  switch (action.type) {
    case DISPLAY_CLICKED_ATTRACTION:
      return action.loc;
    default:
      return state;
  }
}

export default DisplayAttractionReducer;
