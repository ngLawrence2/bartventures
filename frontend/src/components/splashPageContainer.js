import {connect} from 'react-redux';
import SplashPage from './splashPage.jsx';
import {getBartStations} from '../util/map_util.js';

const mapStateToProps = state => {

  return {
    allBartStations: state.entities.search,
    allBarts: state.entities.allBart
  };
};

const mapDispatchToProps = dispatch => {

  return {
    getBartStations: (budget, loc) => dispatch(getBartStations(budget, loc))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage);
