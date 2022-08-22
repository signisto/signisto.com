import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout navbar={false}>
    <div className='h-screen bg-primary bg-bitmap flex flex-col items-center content-center text-center text-white'>
      <div className='mt-auto'>
        <Image
          src='/images/logo-light-shadow.svg'
          alt='Signisto Logo'
          className='mt-auto w-48 md:w-64'
          width={256}
          height={256}
        />
      </div>

      <h1 className='mt-10 mb-3 text-3xl md:text-5xl'>
        Software Development &amp; Consulting
      </h1>
      <p>
        <span className='ml-1'>We specialize in creating</span>
        <br className='sm:hidden' />
        <span className='ml-1 font-bold'>data rich applications</span>
        <br className='sm:hidden' />
        <span className='ml-1'>for your business</span>
      </p>

      <div className='mb-auto mt-10'>
        <Button href='/contact-us'>Get in touch</Button>
      </div>
    </div>
  </Layout>
)

export default Page
