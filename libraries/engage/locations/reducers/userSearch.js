// @flow
import appConfig from '@shopgate/pwa-common/helpers/config';
import { STORE_SEARCH } from '../constants';
import type { StoreSearchActionType } from '../action-creators/storeSearch';

export type UserSearchStateType = {
  postalCode: string,
  countryCode: string,
};

const defState: UserSearchStateType = {
  postalCode: '',
  countryCode: appConfig.marketId,
};

/**
 * Stores the user's search input.
 * @param {Object} state The current state.
 * @param {Object} action The action Object
 * @returns {Object} The new state.
 */
export default function search(
  state: UserSearchStateType = defState,
  action: StoreSearchActionType
) {
  switch (action.type) {
    case STORE_SEARCH:
      return action.search;
    default:
      return state;
  }
}
