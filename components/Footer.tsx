import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => (
  <footer id='footer' className='mt-auto'>
    <div className='py-10 text-center bg-white'>
      <ul className='flex flex-col sm:flex-row content-center justify-center items-center'>
        <li className='px-4 py-1'>
          <a
            className='text-link'
            href='https://twitter.com/signisto'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a>
        </li>
        <li className='px-4 py-1'>
          <a
            className='text-link'
            href='https://www.linkedin.com/company/signisto'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li className='px-4 py-1'>
          <a
            className='text-link'
            href='https://readlistenlearn.net'
            target='_blank'
            rel='noreferrer'
          >
            ReadListenLearn
          </a>
        </li>
        <li className='px-4 py-1'>
          <a
            className='text-link'
            href='https://tapto.net'
            target='_blank'
            rel='noreferrer'
          >
            Tapto
          </a>
        </li>
      </ul>

      <div className='mt-8 text-sm text-gray-600'>
        &copy; {new Date().getFullYear()} Signisto Ltd
      </div>
    </div>
  </footer>
)

export default Footer
