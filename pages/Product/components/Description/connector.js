import { connect } from 'react-redux';
import { ACTION_PUSH } from '@virtuous/conductor/constants';
import { navigate } from '@shopgate/pwa-common/action-creators/router';
import { getProductDescription } from '@shopgate/pwa-common-commerce/product/selectors/product';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The current component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  html: getProductDescription(state, props),
});

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  navigate: url => dispatch(navigate(ACTION_PUSH, url)),
});

/**
 * Check to see if the product description has arrived.
 * @param {Object} next The next props.
 * @param {Object} prev the previous props.
 * @returns {boolean}
 */
const areStatePropsEqual = (next, prev) => {
  if (!prev.html && next.html) {
    return false;
  }

  return true;
};

export default connect(mapStateToProps, mapDispatchToProps, null, { areStatePropsEqual });