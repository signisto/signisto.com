import { NextPage } from 'next'
import Layout from '../components/Layout'

const Company: NextPage = () => {
  return (
    <Layout
      title='Contact Signisto'
      description='Get in touch with the Signisto team'
    >
      <div className='viewport-header bg-gray-200 text-gray-900 text-center'>
        <div className='container mx-auto py-20'>
          <h1 className='text-4xl mb-4 font-bold'>Company Info</h1>
          <p>A little more information about us</p>
        </div>
      </div>

      <div className='py-20 text-center'>
        <address className='py-1 text-sm text-white'>
          Signisto Ltd
          <br />
          <br />
          First Floor
          <br />
          Telecom House
          <br />
          125-135 Preston Road
          <br />
          Brighton
          <br />
          England
          <br />
          BN1 6AF
          <br />
          <br />
          Email:{' '}
          <a href='mailto:enquiries@signisto.com'>enquiries@signisto.com</a>
        </address>{' '}
      </div>
    </Layout>
  )
}

export default Company
