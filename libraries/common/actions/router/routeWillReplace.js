import { getCurrentRoute } from '@shopgate/pwa-common/helpers/router';
import { ACTION_REPLACE } from '@virtuous/conductor/constants';
import * as actions from '../../action-creators/router';
import { getCurrentRoute as getCurrentRouteSelector } from '../../selectors/router';

/**
 * @return {Function} The dispatched action.
 */
export function routeWillReplace() {
  return (dispatch, getState) => {
    const incoming = getCurrentRoute();
    const outgoing = getCurrentRouteSelector(getState());

    dispatch(actions.routeWillLeave(outgoing, ACTION_REPLACE));
    dispatch(actions.routeWillEnter(incoming, ACTION_REPLACE));
  };
}
