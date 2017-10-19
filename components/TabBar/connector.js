/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { connect } from 'react-redux';
import {
  getActiveTab,
  isTabBarVisible,
  getVisibleTabs,
} from './selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  activeTab: getActiveTab(state),
  isVisible: isTabBarVisible(state),
  visibleTabs: getVisibleTabs(),
});

export default Component => (
  connect(mapStateToProps)(Component)
);

