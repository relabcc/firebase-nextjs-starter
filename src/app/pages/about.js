import React from 'react';

import Container from '../components/Container';
import Link from '../components/Link';
import Layout from '../containers/Layout';

const AboutPage = () => (
  <Layout>
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default AboutPage;
