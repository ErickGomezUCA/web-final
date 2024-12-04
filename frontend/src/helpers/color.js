export const calculateLuminancePercentage = (hex) => {
  // Remove starting #
  hex = hex.replace(/^#/, '');

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};
