import { NextPage } from 'next'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout title='About Signisto'>
    <div className='viewport-header bg-primary bg-secondary text-white pt-20 text-center'>
      <div className='container mx-auto py-20'>
        <h1 className='text-4xl mb-4 font-bold'>
          About Signisto
        </h1>
        <p>
          We are a Software Development company
        </p>
      </div>
    </div>
  </Layout>
)

export default Page
