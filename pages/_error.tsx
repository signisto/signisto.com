import React, { Component } from 'react'

import Layout from '../components/Layout'

interface Props {
  statusCode: number
}

interface Context {
  res?: any
  err?: any
}

class Error extends Component<Props> {
  static getInitialProps({ res, err }: Context) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    const errorMessage = statusCode === 404 ? 'Page not found' : 'Unknown error'
    const errorDescription = statusCode === 404 ? 'The page you were looking for is not here' : 'Plese try again later'

    return (
      <Layout>
        <div className="viewport-header bg-red-800 text-white text-center pt-20">
          <div className="container mx-auto py-32 xl:py-48">
            <h1 className="text-4xl mb-4 font-bold">
              Error {statusCode}: {errorMessage}
            </h1>
            <p>
              {errorDescription}
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Error
