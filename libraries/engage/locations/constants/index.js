// ACTION TYPES
export {
  REQUEST_PRODUCT_LOCATIONS,
  RECEIVE_PRODUCT_LOCATIONS,
  ERROR_PRODUCT_LOCATIONS,
} from './ActionTypes';

// PIPELINES
export {
  SHOPGATE_STOREFRONT_GET_PRODUCT_LOCATIONS,
} from './Pipelines';

// PORTALS
export {
  PRODUCT_FULFILLMENT_SELECTOR_BEFORE,
  PRODUCT_FULFILLMENT_SELECTOR,
  PRODUCT_FULFILLMENT_SELECTOR_AFTER,
  PRODUCT_LOCATION_STOCK_INFO_BEFORE,
  PRODUCT_LOCATION_STOCK_INFO,
  PRODUCT_LOCATION_STOCK_INFO_AFTER,
} from './Portals';

export const PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP = 'directShip';
export const PRODUCT_FULFILLMENT_METHOD_IN_STORE_PICKUP = 'inStorePickup';
