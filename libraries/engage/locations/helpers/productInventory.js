/**
 * Check if product inventory is orderable.
 * @param {Object} location The location to check.
 * @returns {boolean}
 */
export function isProductAvailable(location = {}) {
  const {
    productInventory: {
      isAvailable = false,
      visible = 0,
    } = {},
  } = location;

  if (isAvailable === false) {
    return false;
  }

  if (visible === null) {
    // Blind mode
    return true;
  }
  return visible > 0;
}
