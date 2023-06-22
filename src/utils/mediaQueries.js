const breakpoints = Object.freeze({
  mobile: '480px',
  tablet: '768px',
  desktop: '1200px',
});

//desktop-first
export const device = Object.freeze({
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
  tablet: `@media screen and (max-width: ${breakpoints.desktop})`,
  onlyTablet: `@media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  biggerThanMobile: `@media screen and (min-width: ${breakpoints.tablet})`,
  mobile: `@media screen and (max-width: ${breakpoints.tablet})`,
  smallerThanMobile: `@media screen and (max-width: ${breakpoints.mobile})`,
});
