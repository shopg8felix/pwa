// @flow
import {
  PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP,
  PRODUCT_FULFILLMENT_METHOD_IN_STORE_PICKUP,
} from './constants';

type LocationType = {
  code: string;
  name: string;
}

type LocationOperationHours = {
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

type LocationProductInventory = {
  isAvailable: boolean;
  visible: number;
}

export type LocationAddress = {
  code: string;
  name: string;
  street: string;
  street2: string | null;
  street3: string | null;
  street4: string | null;
  postalCode: string;
  city: string;
  region: string;
  country: string;
  phoneNumber: string;
  faxNumber: string;
  emailAddress: string;
  isPrimary: boolean;
}

export type Location = {
  code: string;
  name: string;
  status: string;
  supportedFulfillmentMethods: string[];
  latitude: number;
  longitude: number;
  timeZone: string;
  localeCode: string;
  isComingSoon: boolean;
  isDefault: boolean;
  type: LocationType;
  operationHours?: LocationOperationHours;
  addresses: LocationAddress[];
  productInventory: LocationProductInventory;
  unitSystem: string;
}

type ProductLocations = {
  isFetching: boolean;
  expires: number;
  locations: Location[];
}

export type LocationsByIdState = {
  [code: string]: Location;
}

export type LocationsByProductIdState = {
  [productId: string]: ProductLocations
}

export type UserLocationState = {
  code: string;
  name: string;
  productCode: string;
  visibleInventory: number;
  addressCode: string;
  fulfillmentMethod: typeof PRODUCT_FULFILLMENT_METHOD_DIRECT_SHIP
  | typeof PRODUCT_FULFILLMENT_METHOD_IN_STORE_PICKUP;
}

export type UserFormInputState = {
  [string]: string | null;
}

export type LocationsState = {
  locationsById: LocationsByIdState | {};
  locationsByProductId: LocationsByProductIdState | {};
  userLocation: UserLocationState | {};
  userFormInput: UserFormInputState | {};
}
