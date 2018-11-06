import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux';

import createStore from '../stores/createStore';
import ThemeProvider from '../components/ThemeProvider';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Provider store={createStore()}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}
