import App, { Container, AppContext } from 'next/app'
import Router from 'next/router'
import React from 'react'

declare global {
  interface Window {
    ga: (action: 'send', type: 'pageview', path: string) => void
  }
}

interface Props {
  Component: React.Component
  pageProps: object
}

export default class MyApp extends App<Props> {
  componentDidMount() {
    Router.events.on('routeChangeComplete', url => {
      console.log('$pageview', url)
      if (window.ga) {
        window.ga('send', 'pageview', url)
      }
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps}/>
      </Container>
    )
  }
}
