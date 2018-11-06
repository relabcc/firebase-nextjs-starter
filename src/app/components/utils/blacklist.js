import { styles } from 'styled-system';

const allPropTypes = Object.keys(styles)
  .map((key) => styles[key])
  .filter((fn) => typeof fn === 'function')
  .reduce((a, fn) => a.concat(Object.keys(fn.propTypes || {})), ['theme']);

export default [
  ...allPropTypes,
  'transform',
  'transition',
  'overflow',
  'opacity',
  'alpha',
  'hoverColor',
  'hoverBg',
  'hoverBorder',
  'dispatch',
];
