import { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout navbar={false}>
    <div className="h-screen bg-primary bg-bitmap flex flex-col items-center content-center text-center text-white">
      <img src="/static/images/logo-light-shadow.svg" alt="Signisto Logo" className="mt-auto w-48 md:w-64"/>

      <h1 className="mt-10 text-3xl md:text-5xl">
        Software Development &amp; Consulting
      </h1>
      <p>
        We specialize in creating data rich applications for your business
      </p>

      <div className="mb-auto mt-10">
        <Link href="/services">
          <a className="btn btn-lg btn-primary text-uppercase">
            Learn More
          </a>
        </Link>
        <Link href="/contact-us">
          <a className="ml-4 btn btn-lg btn-light text-uppercase">
            Get in touch
          </a>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Page
