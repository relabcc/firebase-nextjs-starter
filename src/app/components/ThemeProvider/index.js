import React from 'react';
import { ThemeProvider } from 'styled-components';

import './global-styles';

import theme from './theme';
import Box from '../Box';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Box height="100%" fontSize={[14, null, 16]} {...props} />
  </ThemeProvider>
);
