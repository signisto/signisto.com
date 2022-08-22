import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => (
  <footer id='footer' className='mt-auto'>
    <div className='py-10 bg-gray-100 border-t-2 border-b-2 border-gray-400'>
      <div className='container flex flex-col px-10 mx-auto md:flex-row xl:px-0'>
        <div className='md:w-1/2'>
          <h4 className='mb-4 text-base font-bold text-gray-800 uppercase'>
            Company
          </h4>
          <address className='py-1 text-sm text-gray-700'>
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
          </address>
        </div>

        <div className='mt-12 md:w-1/4 md:mt-0'>
          <h4 className='mb-4 text-base font-bold text-gray-800 uppercase'>
            Products
          </h4>
          <ul className='text-sm text-link'>
            <li>
              <a
                className='block py-1'
                href='https://gostatic.io'
                target='_blank'
                rel='noreferrer'
              >
                GoStatic
              </a>
            </li>
          </ul>
        </div>

        <div className='mt-12 md:w-1/4 md:mt-0'>
          <h4 className='mb-4 text-base font-bold text-gray-800 uppercase'>
            Services
          </h4>
          <ul className='text-sm text-link'>
            <li>
              <Link href='/services#software-developmen'>
                <a className='block py-1'>Software Development</a>
              </Link>
            </li>
            <li>
              <Link href='/services#performance-consulting'>
                <a className='block py-1'>Performance Consulting</a>
              </Link>
            </li>
            <li>
              <Link href='/services#mobile-development'>
                <a className='block py-1'>Mobile Applications</a>
              </Link>
            </li>
            <li>
              <Link href='/services#machine-learning'>
                <a className='block py-1'>Machine Learning</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='py-10 text-center bg-white'>
      <ul className='flex content-center'>
        <li className='px-4 ml-auto'>
          <a
            className='text-link'
            href='https://twitter.com/signisto'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a>
        </li>
        <li className='px-4'>
          <a
            className='text-link'
            href='https://www.facebook.com/signisto'
            target='_blank'
            rel='noreferrer'
          >
            Facebook
          </a>
        </li>
        <li className='px-4 mr-auto'>
          <a
            className='text-link'
            href='https://www.linkedin.com/company/signisto'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <div className='mt-8 text-sm text-gray-600'>&copy; 2019 Signisto Ltd</div>
    </div>
  </footer>
)

export default Footer
