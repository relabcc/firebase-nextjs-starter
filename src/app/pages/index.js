import React from 'react'

import Counter from '../containers/Counter'
import Layout from '../containers/Layout';
import Container from '../components/Container'
import Box from '../components/Box'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import Link from '../components/Link'
import withResponsive from '../hoc/withResponsive';
import VerticalCenter from '../components/VerticalCenter'
import { mobileOrDesktop } from '../components/ThemeProvider/theme';

const IndexPage = ({ isMobile }) => (
  <Layout>
    <VerticalCenter>
      <Container py={mobileOrDesktop(0, '2em')}>
        <Box>
          <Text>Styled Components + Styled System is cool!</Text>
          <Text fontSize={mobileOrDesktop('1em', '1.5em')}>isMobile: {String(isMobile)}</Text>
        </Box>
        <Counter />
        <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
        <Box mx="-1em">
          <Button mx="1em" is={Link} to="/about">Go to About</Button>
          <Button.secondary mx="1em">Good Button !</Button.secondary>
          <Button mx="1em" disabled>Not Good</Button>
        </Box>
      </Container>
    </VerticalCenter>
  </Layout>
)

export default withResponsive(IndexPage)
