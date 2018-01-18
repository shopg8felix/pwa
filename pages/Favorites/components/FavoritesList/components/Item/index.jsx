/**
 * Copyright (c) 2018, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CardItem from 'Components/CardList/components/Item';
import ProductProperties from 'Components/ProductProperties';
import Grid from '@shopgate/pwa-common/components/Grid';
import ProductImage from 'Components/ProductImage';
import AvailableText from 'Components/Availability';
import Price from './components/Price';
import styles from '../../style';

/**
 * Renders Favorites list item.
 * @param {Object} product Product.
 * @returns {XML}
 */
const Item = ({ product }) => (
  <CardItem key={product.id}>
    <Grid className={styles.row}>
      <Grid.Item className={styles.leftColumn}>
        <div className={styles.image}>
          <ProductImage src={product.featuredImageUrl} />
        </div>
      </Grid.Item>
      <Grid.Item grow={1} className={styles.rightColumn}>
        <div className={styles.name}>
          {product.name}
        </div>
        <div className={styles.details}>
          <Grid>
            <Grid.Item className={styles.propertiesContainer}>
              <ProductProperties properties={product.properties} />
              <AvailableText
                text={product.availability.text}
                state={product.availability.state}
              />
            </Grid.Item>
            <Grid.Item className={styles.priceContainer}>
              <Price price={product.price} />
            </Grid.Item>
          </Grid>
        </div>
      </Grid.Item>
    </Grid>
  </CardItem>
);

Item.prototype.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default Item;
