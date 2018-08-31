import axios from 'axios';

export const RECEIVE_BART_STATIONS = 'RECEIVE_BART_STATIONS';
export const GET_ERRORS = 'GET_ERRORS';

export const receiveBartStations = bartStations => {
  return {
    type:RECEIVE_BART_STATIONS,
    bartStations: bartStations.data.filter( obj => obj!==null)
  }
}

export const getBartStations = (budget, currentBartStation) => dispatch => {
  axios
    .get(`/api/search/${budget}/${currentBartStation}`)
    .then( res=> {
      console.log(res);
      dispatch(receiveBartStations(res))
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
      });
    })
};
