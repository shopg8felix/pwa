import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import { getHistoryPathname } from '@shopgate/pwa-common/selectors/history';
import { userDidLogout$ } from '@shopgate/pwa-common/streams/user';
import {
  requestReviewSubmit$,
  responseReviewSubmit$,
  successReviewSubmit$,
} from '@shopgate/pwa-common-commerce/reviews/streams';
import goBackHistory from '@shopgate/pwa-common/actions/history/goBackHistory';
import setViewLoading from '@shopgate/pwa-common/actions/view/setViewLoading';
import unsetViewLoading from '@shopgate/pwa-common/actions/view/unsetViewLoading';
import createToast from '@shopgate/pwa-common/actions/toast/createToast';
import getUserReview from '@shopgate/pwa-common-commerce/reviews/actions/getUserReview';
import flushUserReview from '@shopgate/pwa-common-commerce/reviews/actions/flushUserReview';
import { reviewsRoutesWillEnter$ } from './streams';

/**
 * @param {Function} subscribe The subscribe function.
 */
export default function writeReview(subscribe) {
  subscribe(reviewsRoutesWillEnter$, ({ action, dispatch, getState }) => {
    const state = getState();
    const { productId } = action.route.params;

    if (!productId || !state.user.login.isLoggedIn) {
      return;
    }

    dispatch(getUserReview(hex2bin(productId)));
  });

  /**
   * Get triggered when a review submit is requested.
   */
  subscribe(requestReviewSubmit$, ({ dispatch, getState }) => {
    dispatch(setViewLoading(getHistoryPathname(getState())));
  });

  /**
   * Get triggered when a review submitted got a response.
   */
  subscribe(responseReviewSubmit$, ({ dispatch, getState }) => {
    dispatch(unsetViewLoading(getHistoryPathname(getState())));
  });

  /**
   * Get triggered when a review was successfully submitted
   */
  subscribe(successReviewSubmit$, ({ dispatch }) => {
    dispatch(goBackHistory());
    dispatch(createToast({ message: 'reviews.success_message' }));
  });
  /**
   * When user is logged out reviews relation should be removed.
   */
  subscribe(userDidLogout$, ({ dispatch }) => dispatch(flushUserReview()));
}