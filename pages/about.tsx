import { NextPage } from 'next'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout title="About Signisto">
    <div className="viewport-header bg-dark">
      <h1 className="viewport-header-title">
        About Signisto
      </h1>
      <p className="viewport-header-tagline">
        We are a Software Development company
      </p>
    </div>
  </Layout>
)

export default Page
