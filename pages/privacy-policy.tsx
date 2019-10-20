import { NextPage } from 'next'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout title='Signisto Privacy Policy'>
    <div className='viewport-header bg-secondary text-white pt-20 text-center'>
      <div className='container mx-auto py-20'>
        <h1 className='text-4xl mb-4 font-bold'>
          Privacy Policy
        </h1>
        <p>
          <p className='viewport-header-tagline'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </p>
      </div>
    </div>

    <div className='container mx-auto w-full xl:w-1/3 py-8 px-8 xl:px-0'>
      <h2 className='mt-6 font-bold text-2xl'>Cookies</h2>
      <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h2 className='mt-6 font-bold text-2xl'>Personal Information</h2>
      <p className='mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p className='mt-3 mb-3'>
        Questions or concerns? <a href='/contact-us'>Contact us</a>
      </p>
    </div>
  </Layout>
)

export default Page
