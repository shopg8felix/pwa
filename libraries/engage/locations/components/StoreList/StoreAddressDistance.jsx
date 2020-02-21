// @flow
import React from 'react';
import { I18n } from '@shopgate/engage/components';
import { i18n } from '@shopgate/engage/core';
import { storeDistance } from './style';

type Props = {
  distance?: string;
  unitSystem?: string;
}

export const UNIT_SYSTEM_METRIC = 'metric';
export const UNIT_SYSTEM_IMPERIAL = 'imperial';

/**
 * Renders a single store distance.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const StoreAddressDistance = ({ distance, unitSystem }: Props) => {
  if (!distance) {
    return null;
  }

  return (
    <I18n.Text
      className={storeDistance}
      string={`locations.distance_${unitSystem}`}
      params={{ distance: i18n.number(distance, 2) }}
    />
  );
};

StoreAddressDistance.defaultProps = {
  distance: null,
  unitSystem: UNIT_SYSTEM_METRIC,
};

export default StoreAddressDistance;
