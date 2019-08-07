import React from 'react'

import Layout from '../components/Layout'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    const errorMessage = statusCode === 404 ? 'Page not found' : 'Unknown error'
    const errorDescription = statusCode === 404 ? 'The page you were looking for is not here' : 'Plese try again later'

    return (
      <Layout>
        <div className="viewport-header bg-red">
          <h1 className="viewport-header-title">
            Error {statusCode}: {errorMessage}
          </h1>
          <p className="viewport-header-tagline">
            {errorDescription}
          </p>
        </div>
      </Layout>
    )
  }
}

export default Error
