import { style } from 'styled-system';

export const customColor = (prop, cssProperty = 'color') => style ({
  prop,
  cssProperty,
  key: 'colors',
});
