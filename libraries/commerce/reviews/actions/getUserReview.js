import { shouldFetchData } from '@shopgate/pwa-common/helpers/redux';
import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { EUNKNOWN, EACCESS } from '@shopgate/pwa-core/constants/Pipeline';
import requestUserReview from '../action-creators/requestUserReview';
import receiveUserReview from '../action-creators/receiveUserReview';
import errorUserReview from '../action-creators/errorUserReview';

/**
 * Request a user review for a product from server.
 * @param {string} productId The product ID.
 * @returns {Promise} The dispatched action.
 */
const getUserReview = productId => (dispatch, getState) => {
  const data = getState().reviews.userReviewsByProductId[productId];
  if (!shouldFetchData(data)) {
    return new Promise(resolve => resolve());
  }
  dispatch(requestUserReview(productId));
  const request = new PipelineRequest('shopgate.user.getReview')
    .setHandledErrors([EUNKNOWN, EACCESS])
    .setInput({
      productId,
    })
    .dispatch();

  request
    .then(result => dispatch(receiveUserReview(productId, result)))
    .catch(() => {
      dispatch(errorUserReview(productId));
    });

  return request;
};

export default getUserReview;
