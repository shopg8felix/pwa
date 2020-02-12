import {
  SELECT_LOCATION,
  STORE_FULFILLMENT_METHOD,
  PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP,
} from '../constants';

const defaultState = {
  code: null,
  name: null,
  productCode: null,
  visibleInventory: null,
  addressCode: null,
  fulfillmentMethod: PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP,
};

/**
 * Stores the user's selected pickup location.
 * @param {Object} state The current state.
 * @param {Object} action The action object.
 * @return {Object} The new state.
 */
export default function userLocation(state = defaultState, action) {
  switch (action.type) {
    case SELECT_LOCATION:
      return {
        ...state,
        ...action.location,
      };
    case STORE_FULFILLMENT_METHOD:
      return {
        ...state,
        fulfillmentMethod: action.method,
      };
    default:
      return state;
  }
}
