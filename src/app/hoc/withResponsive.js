import { connect } from 'react-redux';

export default (WrappedComp) => connect((state) => {
  const browser = state.get('browser');
  return {
    browser,
    isMobile: browser.lessThan.lg,
  };
})(WrappedComp);
