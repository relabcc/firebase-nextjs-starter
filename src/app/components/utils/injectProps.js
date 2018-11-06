import merge from 'lodash/merge';
import { style } from 'styled-system';

const getConfig = (key, options) => merge({
  prop: key,
  cssProperty: key,
}, options);

const injectProps = (key, options) => style(getConfig(key, options));

export default injectProps;
