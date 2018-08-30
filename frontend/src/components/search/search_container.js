import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  budget: state.budget,
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
