import conductor from '@virtuous/conductor';
import {
  ACTION_POP,
  ACTION_PUSH,
  ACTION_REPLACE,
  ACTION_RESET,
} from '@virtuous/conductor/constants';
import getCurrentRoute from '@virtuous/conductor-helpers/getCurrentRoute';
import { ProgressBar } from '@shopgate/pwa-ui-shared';
import { logger } from '@shopgate/pwa-core';
import { redirects } from '../collections';
import { navigate } from '../action-creators';
import { historyRedirect } from '../actions/router';
import * as handler from './helpers/handleLinks';
import { navigate$, userDidLogin$ } from '../streams';
import { isUserLoggedIn } from '../selectors/user';
import appConfig from '../helpers/config';
import setViewLoading from '../actions/view/setViewLoading';
import unsetViewLoading from '../actions/view/unsetViewLoading';
import authRoutes from '../collections/AuthRoutes';

/**
 * Router subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function router(subscribe) {
  subscribe(navigate$, async (params) => {
    const { action, dispatch, getState } = params;
    const { params: { action: historyAction, silent, state: routeState } } = action;

    switch (historyAction) {
      case ACTION_POP: {
        conductor.pop();
        return;
      }
      case ACTION_RESET: {
        conductor.reset();
        return;
      }
      default:
        break;
    }

    const state = getState();
    let { pathname: location } = action.params;

    location = handler.sanitizeLink(location);

    // Stop further processing if the location is empty.
    if (!location) {
      return;
    }

    const { pathname: currentPathname } = getCurrentRoute();

    // Prevent the current route from being pushed again.
    if (historyAction === ACTION_PUSH && location === currentPathname) {
      return;
    }

    // Route authentication.
    if (!isUserLoggedIn(state)) {
      // Determine whether or not this location is protected.
      const protector = authRoutes.getProtector(location);

      // If protected then navigate to the protector instead.
      if (protector) {
        dispatch(navigate({
          action: historyAction,
          pathname: protector,
          state: {
            redirect: {
              location,
              state: routeState,
            },
          },
        }));

        return;
      }
    }

    // Check for a redirect and change location if one is found.
    let redirect = redirects.getRedirect(location);

    if (redirect) {
      if (typeof redirect === 'function' || redirect instanceof Promise) {
        const { pathname, pattern } = getCurrentRoute();
        ProgressBar.show(pattern);
        dispatch(setViewLoading(pathname));

        try {
          redirect = await redirect({
            ...params,
            action: {
              ...params.action,
              params: {
                ...params.action.params,
                // Merge the sanitized location into the redirect handler payload.
                pathname: location,
              },
            },
          });
        } catch (e) {
          redirect = null;
          logger.error(e);
        }

        ProgressBar.hide(pattern);
        dispatch(unsetViewLoading(pathname));

        if (!redirect) {
          return;
        }
      }

      location = redirect;
    }

    // Override the location if is Shop link is found.
    if (handler.isShopLink(location)) {
      const { pathname, search } = new URL(location);
      location = `${pathname}${search}`;
    }

    // If there is one of the known protocols in the url.
    if (location && handler.hasKnownProtocols(location)) {
      if (handler.isExternalLink(location)) {
        handler.openExternalLink(location, historyAction);
      } else if (handler.isNativeLink(location)) {
        handler.openNativeLink(location);
      }

      return;
    }

    if (location && handler.isLegacyPage(location)) {
      handler.openLegacy(location, historyAction);
      return;
    }

    if (location && handler.isLegacyLink(location)) {
      handler.openLegacyLink(location, historyAction);
      return;
    }

    switch (historyAction) {
      case ACTION_PUSH: {
        conductor.push(location, routeState, silent);
        break;
      }
      case ACTION_REPLACE: {
        conductor.replace(location, routeState, silent);
        break;
      }
      default:
        break;
    }
  });

  /**
   * Added a 100ms delay here to allow the Redux action to complete.
   * Without it the store would show that the user is still not
   * logged in during the upcoming navigate() action.
   */
  const redirectUser$ = userDidLogin$.delay(100);

  subscribe(redirectUser$, ({ action, dispatch }) => {
    if (appConfig.webCheckoutShopify === null) {
      dispatch(historyRedirect(action.redirect));
    }
  });
}