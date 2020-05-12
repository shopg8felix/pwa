import { connect } from 'react-redux';
import { getShopSettings, getConfigFetching } from '@shopgate/engage/core/config';
import { makeGetUserLocationAddress } from '@shopgate/engage/locations/selectors';
import { getCheckoutBillingAddress } from '@shopgate/engage/checkout/selectors/order';
import { getRequiredGuestCheckoutFields } from '@shopgate/engage/checkout/selectors/guestCheckout';
import { updateDefaultBillingContact } from '@shopgate/engage/checkout';
import { historyPop } from '@shopgate/engage/core';

/**
 * @returns {Function}
 */
function makeMapStateToProps() {
  const getUserLocationAddress = makeGetUserLocationAddress();

  /**
   * @param {Object} state The application state.
   * @returns {Object}
   */
  return state => ({
    isDataReady: !getConfigFetching(state),
    shopSettings: getShopSettings(state),
    userLocation: getUserLocationAddress(state),
    billingAddress: getCheckoutBillingAddress(state),
    requiredFields: getRequiredGuestCheckoutFields(state),
  });
}

const mapDispatchToProps = {
  historyPop,
  updateBilling: updateDefaultBillingContact,
};

export default connect(makeMapStateToProps, mapDispatchToProps);
