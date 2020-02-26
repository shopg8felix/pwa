// @flow
import * as Redux from 'redux';
import {
  SELECT_LOCATION,
  STORE_FULFILLMENT_METHOD,
  PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP,
} from '../constants';
import { type UserFormInputState } from '../locations.types';

const defaultState: UserFormInputState = {
  code: null,
  name: null,
  fulfillmentMethod: PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP,
};

/**
 * Stores the user's selected pickup location.
 * @param {Object} state The current state.
 * @param {Object} action The action object.
 * @return {Object} The new state.
 */
export default function userLocation(
  state: UserFormInputState = defaultState,
  action: Redux.Action
): UserFormInputState {
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
