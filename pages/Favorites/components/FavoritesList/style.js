/*
 * Copyright (c) 2018, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from 'glamor';
import colors from 'Styles/colors';
import variables from 'Styles/variables';

const container = css({
  background: colors.background,
  flexGrow: 1,
}).toString();

const image = css({
  width: '100%',
}).toString();

const row = css({
  padding: variables.gap.big,
  justifyContent: 'space-between',
}).toString();

const leftColumn = css({
  paddingRight: variables.gap.small,
  flexBasis: 126,
  flexShrink: 0,
  flexGrow: 1,
  minWidth: 126,
  maxWidth: 300,
  width: '35%',
}).toString();

const rightColumn = css({
  paddingLeft: variables.gap.small,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}).toString();

const name = css({
  fontWeight: 500,
  lineHeight: 1.125,
}).toString();

const details = css({

}).toString();

const propertiesContainer = css({
  paddingRight: variables.gap.small,
  fontSize: 14,
}).toString();

const priceContainer = css({
  paddingLeft: variables.gap.small,
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  fontSize: 14,
}).toString();

export default {
  container,
  image,
  leftColumn,
  rightColumn,
  name,
  row,
  details,
  priceContainer,
  propertiesContainer,
};
