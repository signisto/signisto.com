import { NextPage } from 'next'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout title='Contact Signisto' description='Get in touch with the Signisto team'>
    <div className='viewport-header bg-green-800 text-white pt-20 text-center'>
      <div className='container mx-auto py-20'>
        <h1 className='text-4xl mb-4 font-bold'>
          Contact Us
        </h1>
        <p>
          We'd love to hear from you
        </p>
      </div>
    </div>

    <div className='py-20 text-center'>
      <p>
        The best way to get in touch right now is via email
      </p>

      <p className='mt-4 text-link'>
        <a href='mailto:enquiries@signisto.com'>
          enquiries@signisto.com
        </a>
      </p>
    </div>
  </Layout>
)

export default Page
