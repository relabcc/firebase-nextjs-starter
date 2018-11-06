import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import reducer, { increment, decrement } from './reducer';
import injectReducer from '../../utils/injectReducer';

const mapStateToProps = (state) => ({
  count: state.getIn(['counter', 'count']),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment,
  decrement,
}, dispatch);

export const withReducer = injectReducer({ key: 'counter', reducer });

export const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect);
