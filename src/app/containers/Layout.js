import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Box from '../components/Box';
import theme from '../components/ThemeProvider/theme';

const Layout = ({ children }) => (
  <div>
    <Header height={theme.headerHeight} />
    <Box height="100vh" pt={theme.headerHeight}>
      {children}
    </Box>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
