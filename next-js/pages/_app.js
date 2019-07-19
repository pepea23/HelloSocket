import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from '../components/Core/GlobalStyle'
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://6551dd600abd403d93fa246df642dfea@sentry.io/1506952"});

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
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
        <Head>
          <title>MawinBet</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
