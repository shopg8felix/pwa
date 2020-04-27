import { css } from 'glamor';
import { useScrollContainer } from '@shopgate/engage/core';
import { responsiveMediaQuery } from '@shopgate/engage/styles';

export default css({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  ...(useScrollContainer() ? {
    bottom: 0,
    top: 0,
    overflowScrolling: 'touch',
    position: 'absolute',
    WebkitOverflowScrolling: 'touch',
  } : {
  }),
  [responsiveMediaQuery('>xs', { webOnly: true })]: {
    width: 'var(--page-content-width)',
    backgroundColor: 'var(--page-background-color)',
  },
});
