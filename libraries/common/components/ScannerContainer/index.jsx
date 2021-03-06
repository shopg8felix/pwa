import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppScanner from '@shopgate/pwa-core/classes/Scanner';
import connect from './connector';

/**
 * Wraps the Scanner overlay with functionality to automatically open and close the scanner,
 * as well as triggering the removal and reset of the background.
 */
class ScannerContainer extends PureComponent {
  static propTypes = {
    hasScannerSupport: PropTypes.bool.isRequired,
    scope: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    children: PropTypes.node,
    scannerDidClose: PropTypes.func,
    scannerDidOpen: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    scannerDidClose: () => {},
    scannerDidOpen: () => {},
  }

  /**
   * Starts up the app scanner.
   */
  async componentDidMount() {
    // Avoid trying to open the scanner if the app does not support it.
    if (!this.props.hasScannerSupport) {
      return;
    }

    await AppScanner.open(this.props.scope, this.props.type);
    this.props.scannerDidOpen();
  }

  /**
   * Shut down the app scanner.
   */
  componentWillUnmount() {
    if (!this.props.hasScannerSupport) {
      return;
    }

    this.props.scannerDidClose();
    AppScanner.close();
  }

  /**
   * Does not render anything when the app does not support the scanner.
   * @returns {JSX}
   */
  render() {
    return (
      <Fragment>
        {this.props.hasScannerSupport && this.props.children}
      </Fragment>
    );
  }
}

export default connect(ScannerContainer);
