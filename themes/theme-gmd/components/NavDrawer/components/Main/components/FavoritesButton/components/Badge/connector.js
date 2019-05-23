import { connect } from 'react-redux';
import { hasFavorites } from '@shopgate/engage/favorites';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The application state.
 * @return {Object}
 */
const mapStateToProps = state => ({
  visible: hasFavorites(state),
});

export default connect(mapStateToProps);
