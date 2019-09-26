/**
 * @typedef {Object} ThemeColors
 * @property background
 * @property light
 * @property dark
 * @property accent
 * @property placeholder
 * @property primary
 * @property darkGray
 * @property shade3
 * @property shade4
 * @property shade5
 * @property shade6
 * @property shade7
 * @property shade8
 * @property shade9
 * @property shade10
 * @property shade11
 * @property shade12
 * @property success
 * @property warning
 * @property error
 */
const colors = {
  background: '#f8f8f8',
  light: '#fff',
  dark: '#000',
  accent: '#5ccee3',
  placeholder: '#f2f2f2',
  primary: '#fa5400',
  darkGray: '#eaeaea',
  shade3: '#9a9a9a',
  shade4: '#b5b5b5',
  shade5: '#ccc',
  shade6: '#656565',
  shade7: '#eaeaea',
  shade8: '#f7f7f7',
  shade9: '#8d8d8d',
  shade10: '#f4f4f4',
  shade11: '#747474',
  shade12: '#939393',
  success: '#35cc29',
  warning: '#ff9300',
  error: '#ff0000',
};

/**
 * @typedef {Object} ThemeShadows
 */
const shadows = {
  material: '0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647)',
  navDrawer: '0 0 15px rgba(0, 0, 0, .24)',
  widget: '0 4px 8px rgba(0, 0, 0, 0.16)',
  productCard: '0 4px 8px rgba(0, 0, 0, 0.16)',
  productImage: 'inset 0 0 20px rgba(0, 0, 0, .05)',
  appBar: {
    cartBadge: '0 1px 1px rgba(0, 0, 0, 0.25)',
  },
  tabBar: '0 -1px 0 0 rgba(0, 0, 0, 0.1)',
  filter: {
    sort: 'rgba(0, 0, 0, 0.16) 0 2px 2px',
    priceSlider: '0 0 8px rgba(0, 0, 0, .16)',
  },
  cart: {
    paymentBar: '0 -4px 5px -2px rgba(0, 0, 0, 0.1)',
  },
  dialog: '0 0.75em 3em 0 rgba(0, 0, 0, 0.5)',
  toast: '0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)',
  contextMenu: '0 2px 6px rgba(0, 0, 0, .4)',
  buttons: {
    disabled: '0 3px 4px rgba(0, 0, 0, 0.13)',
    elevated: '0 8px 13px rgba(0, 0, 0, 0.25)',
  },
  scannerBar: '0 0 0 1px rgba(0, 0, 0, 0.1)',
  sheet: '0 -2px 4px rgba(0, 0, 0, 0.1)',
};

/**
 *
 * @typedef {Object} ThemeVariables
 */
const variables = {
  materialShadow: shadows.material,
  gap: {
    xsmall: 4,
    small: 8,
    big: 16,
    bigger: 20,
    xbig: 32,
    xxbig: 64,
  },
  emptyPage: {
    icon: 216,
    titleTopGap: 36,
    buttonVerticalGap: 24,
  },
  navbar: {
    height: 56,
  },
  toast: {
    duration: 5000,
  },
  navigator: {
    height: 56,
    shadow: shadows.material,
  },
  filterbar: {
    height: 48,
  },
  loadingIndicator: {
    size: 32,
    strokeWidth: 3,
  },
  paymentBar: {
    height: 78,
  },
  buttonBase: {
    borderRadius: 2,
    fontWeight: 500,
    fontSize: 17,
    padding: 0,
    textTransform: 'uppercase',
  },
  discountBadgeBase: {
    borderRadius: 2,
    fontSize: '0.75rem',
  },
  priceStrikedBase: {
    color: colors.shade3,
  },
  productSliderWidget: {
    borderRadius: 11,
    boxShadow: shadows.widget,
  },
  liveshoppingWidget: {
    borderRadius: 11,
    boxShadow: shadows.widget,
  },
};

/**
 * @typedef {Object} ThemeIcons
 * @property {string} accountBox
 * @property {string} addMore
 * @property {string} arrowDrop
 * @property {string} arrow
 * @property {string} arrowShadowed
 * @property {string} barcodeScanner
 * @property {string} box
 * @property {string} browse
 * @property {string} burger
 * @property {string} cart
 * @property {string} cartPlus
 * @property {string} checked
 * @property {string} check
 * @property {string} chevron
 * @property {string} creditCard
 * @property {string} cross
 * @property {string} description
 * @property {string} filter
 * @property {string} flashDisabled
 * @property {string} flashEnabled
 * @property {string} grid
 * @property {string} heart
 * @property {string} heartOutline
 * @property {string} home
 * @property {string} info
 * @property {string} infoOutline
 * @property {string} list
 * @property {string} localShipping
 * @property {string} lock
 * @property {string} logout
 * @property {string} magnifier
 * @property {string} more
 * @property {string} moreVert
 * @property {string} placeholder
 * @property {string} radioChecked
 * @property {string} radioUnchecked
 * @property {string} security
 * @property {string} shoppingCart
 * @property {string} sort
 * @property {string} starHalf
 * @property {string} star
 * @property {string} starOutline
 * @property {string} tick
 * @property {string} trash
 * @property {string} unchecked
 * @property {string} viewList
 * @property {string} visibility
 * @property {string} visibilityOff
 * @property {string} share
 */
const icons = {
  // ui-shared icons
  accountBox: '<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/><path d="M0 0h24v24H0z" fill="none"/>',
  addMore: '<g fill="#000" fill-rule="nonzero"><path d="M11.326 20.682a1.193 1.193 0 1 0 2.385-.004 1.193 1.193 0 0 0-2.385.004zm-4.4 0a1.193 1.193 0 1 0 1.192-1.192 1.193 1.193 0 0 0-1.198 1.192h.006zm-2.4-14.8a.906.906 0 0 0-.843-.587h-1.98a.903.903 0 1 0 0 1.806h1.355l2.772 7.217a.906.906 0 0 0 .843.588h6.266a.875.875 0 1 1 0 1.75H6.187a.903.903 0 1 0 0 1.806h6.758a2.677 2.677 0 0 0 1.87-4.596l2.221-4.005a.902.902 0 0 0-.654-1.33H5.537L4.526 5.882zM20.897 6.682H23.8V4.87h-2.903V2h-1.794v2.869h-2.897v1.813h2.897v2.88h1.794z"/></g>',
  arrowDrop: '<path d="M7 10l5 5 5-5z"/>',
  arrow: '<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>',
  arrowShadowed: '<defs><filter id="shadow"><feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />  <feOffset in="blur" dx="0" dy="1" result="offsetBlur" />  <feMerge>    <feMergeNode in="offsetBlur" />    <feMergeNode in="SourceGraphic" />  </feMerge></filter> </defs> <path filter="url(#shadow)" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />',
  barcodeScanner: '<path d="M89.6,129.7h40.1v240.5H89.6V129.7z M149.8,129.7h20.1v240.5h-20.1V129.7z M189.9,129.7H250v240.5h-60.1V129.7z M270.1,129.7h20.1v240.5H270L270.1,129.7L270.1,129.7z M330.2,129.7h40.1v240.5h-40.1V129.7z M390.3,129.7h20.1v240.5h-20.1V129.7z M49.5,89.6v80.2H9.4V89.6c0-10.6,4.2-20.8,11.7-28.3c7.5-7.5,17.7-11.7,28.3-11.7h80.2v40.1H49.5z M450.5,49.5 c10.6,0,20.8,4.2,28.3,11.7c7.5,7.5,11.7,17.7,11.7,28.3v80.2h-40.1V89.6h-80.2V49.5H450.5z M49.5,330.2v80.2h80.2v40.1H49.5 c-5.3,0-10.5-1-15.4-3.1c-4.9-2-9.3-5-13-8.7c-3.7-3.7-6.7-8.2-8.7-13c-2-4.9-3-10.1-3-15.4v-80.1H49.5z M450.5,410.4v-80.2h40.1 v80.2c0,10.6-4.2,20.8-11.7,28.3c-7.5,7.5-17.7,11.7-28.3,11.7h-80.2v-40.1L450.5,410.4z"/>',
  box: '<path d="M 13.900391,1.4433594 1.5996094,4.171875 l 0,0.025391 8.5390626,4.2089844 c 4.073387,-0.9018528 8.163817,-1.7958087 12.24414,-2.69141 z m 8.490221,4.8261718 -11.986328,2.6152344 0.111328,13.4472654 11.875,-2.658203 z M 9.9003906,22.25 c -6.600261,1.166667 -3.3001305,0.583333 0,0 z m 0,0 0,-13.4316406 -8.3007812,-4.0957032 0,13.4589848 z M 4.4238281,9.2304688 c 1.01719,0.50398 2.0367375,1.0052022 3.0546875,1.5078122 0.32345,0.12833 0.4898582,0.544909 0.3300782,0.855469 C 6.7949938,11.0955 5.7712662,10.587588 4.7539062,10.085938 4.4304763,9.9572575 4.2659081,9.5411387 4.4238281,9.2304688 Z" />',
  browse: ' <path fill="currentColor" d="M16799.3,14716.7l-5.8-5.9a8.438,8.438,0,0,1-4.9,1.6,8.7,8.7,0,1,1,8.6-8.7,8.814,8.814,0,0,1-2.2,5.8l5.705,5.8a.966.966,0,0,1,0,1.4.906.906,0,0,1-.705.3A1.054,1.054,0,0,1,16799.3,14716.7Zm-17.3-13a6.748,6.748,0,0,0,6.6,6.7,6.7,6.7,0,1,0-6.6-6.7Zm20,2.3a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Zm-1-4a1,1,0,1,1,0-2h9a1,1,0,1,1,0,2Zm-1-4a1,1,0,0,1,0-2h10a1,1,0,0,1,0,2Z" transform="translate(-27500 -8035.002)" />',
  burger: '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>',
  cart: '<path d="M7.9,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9,18,7.9,18z M17.9,18c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S19,18,17.9,18z M8.1,14.8l0-0.1L9,13h7.5c0.7,0,1.4-0.4,1.7-1l3.9-7l-1.7-1h0l-1.1,2l-2.8,5h-7l-0.1-0.3L7.1,6L6.1,4L5.2,2H1.9v2h2l3.6,7.6L6.2,14c-0.2,0.3-0.2,0.6-0.2,1c0,1.1,0.9,2,2,2h12v-2H8.3C8.2,15,8.1,14.9,8.1,14.8z"/>',
  cartPlus: '<path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>',
  checked: '<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
  check: '<path d="M1 11.248L8.84 19 23 5" stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd"/>',
  chevron: '<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none" />',
  creditCard: '<path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>',
  cross: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
  description: '<path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>',
  filter: '<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>',
  flashDisabled: '<path d="M15.22,3.1,12,9.51l-.8,1.59h3.86l-4,6.83v-6h-3V3.1h7.12M17,2h0Zm0,0H7V13h3v9l7-12H13l4-8Z" />',
  flashEnabled: '<path d="M0 0h24v24H0z" fill="none"/><path d="M7 2v11h3v9l7-12h-4l4-8z"/>',
  grid: ' <rect width="8" height="8" rx="1" transform="translate(3 3)"/> <rect width="8" height="8" rx="1" transform="translate(3 13)"/> <rect width="8" height="8" rx="1" transform="translate(13 3)"/> <rect width="8" height="8" rx="1" transform="translate(13 13)"/>',
  heart: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
  heartOutline: '<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>',
  home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/>',
  info: '<path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',
  infoOutline: '<path d="M0 0h24v24H0z" fill="none"/><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>',
  list: '<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>',
  localShipping: '<path d="M0 0h24v24H0z" fill="none"/><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>',
  lock: '<path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>',
  logout: '<path d="M0 0h24v24H0z" fill="none"/><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>',
  magnifier: '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
  more: '<path fill="currentColor" d="M16343.128,14719.063a3.25,3.25,0,1,1,3.25,3.25A3.249,3.249,0,0,1,16343.128,14719.063Zm-10,0a3.252,3.252,0,1,1,3.25,3.25A3.253,3.253,0,0,1,16333.124,14719.063Zm-10,0a3.25,3.25,0,1,1,3.249,3.25A3.252,3.252,0,0,1,16323.125,14719.063Z" transform="translate(-26852 -8048.063)"/>',
  moreVert: '<path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',
  placeholder: '<circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M0 0h24v24H0z" fill="none"/>',
  radioChecked: '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>',
  radioUnchecked: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>',
  security: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/><path d="M0 0h24v24H0z" fill="none"/>',
  shoppingCart: '<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/>',
  sort: '<path d="M5.5,6C5.2,6,4.9,6.3,4.9,6.7c0,0,0,0,0,0v9l-1.3-1.1c-0.3-0.2-0.7-0.2-0.9,0.1 c-0.2,0.3-0.2,0.7,0.1,0.9l0,0l1,0.9l0,0l0.7,0.6L5,17.6l0,0L5.5,18l0,0L6,17.6l0.3-0.2l1-0.9l0,0l1-0.9c0.3-0.2,0.3-0.7,0.1-0.9 c-0.2-0.3-0.7-0.3-0.9-0.1l0,0l-1.3,1.1v-9C6.2,6.3,5.9,6,5.5,6C5.5,6,5.5,6,5.5,6L5.5,6z M10.4,6.1c-0.4,0-0.7,0.3-0.7,0.7 c0,0.4,0.3,0.7,0.7,0.7l0,0h10.3c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H10.4z M10.4,9.5c-0.4,0-0.7,0.3-0.7,0.7 c0,0.4,0.3,0.7,0.7,0.7l0,0h8.1c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H10.4z M10.4,12.9c-0.4,0-0.7,0.3-0.7,0.7 c0,0.4,0.3,0.7,0.7,0.7l0,0h5.8c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H10.4z M10.4,16.3c-0.4,0-0.7,0.3-0.7,0.7 s0.3,0.7,0.7,0.7H14c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7l0,0H10.4z"/>',
  starHalf: '<defs><path id="a" d="M0 0h24v24H0z"/></defs> <clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath> <path clip-path="ul(#b)" d="M12 2L9.2 8.6 2 9.2 7.5 14l-1.6 7 6.2-3.7m-.1-1.9V6.1m2.8 7.3"/>',
  star: '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>',
  starOutline: '<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>',
  tick: '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
  trash: '<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>',
  unchecked: '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',
  viewList: '<path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/><path d="M0 0h24v24H0z" fill="none"/>',
  visibility: '<path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
  visibilityOff: '<path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>',
  // ui-material icons
  share: '<path d="M18 16.1364C17.24 16.1364 16.56 16.4376 16.04 16.9095L8.91 12.7428C8.96 12.5119 9 12.281 9 12.04C9 11.7991 8.96 11.5682 8.91 11.3372L15.96 7.21072C16.5 7.71273 17.21 8.02397 18 8.02397C19.66 8.02397 21 6.67859 21 5.01193C21 3.34526 19.66 1.99988 18 1.99988C16.34 1.99988 15 3.34526 15 5.01193C15 5.25289 15.04 5.48381 15.09 5.71474L8.04 9.84124C7.5 9.33924 6.79 9.02799 6 9.02799C4.34 9.02799 3 10.3734 3 12.04C3 13.7067 4.34 15.0521 6 15.0521C6.79 15.0521 7.5 14.7408 8.04 14.2388L15.16 18.4155C15.11 18.6264 15.08 18.8473 15.08 19.0682C15.08 20.6846 16.39 21.9999 18 21.9999C19.61 21.9999 20.92 20.6846 20.92 19.0682C20.92 17.4517 19.61 16.1364 18 16.1364Z"/>',
};

/**
 * @typedef {Object} ThemeConfig
 * @property {ThemeColors} colors
 * @property {ThemeShadows} shadows
 * @property {ThemeVariables} variables
 * @property {ThemeIcons} icons
 */
export const themeConfig = {
  typography: {
    family: 'Roboto, Arial, sans-serif',
    rootSize: 16,
    lineHeight: 1.5,
  },
  colors,
  shadows,
  variables,
  icons,
};

// Alias for jest hoisting
export const mockThemeConfig = themeConfig;

