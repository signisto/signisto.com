import { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout navbar={false}>
    <div className="viewport-stretch bg-primary bg-bitmap">
      <img src="/static/images/logo-light-shadow.svg" alt="Signisto Logo" className="logo-main"/>

      <h1 className="viewport-stretch-title">
        Software Development &amp; Consulting
      </h1>

      <p className="viewport-stretch-tagline">
        We specialize in creating data rich applications for your business
      </p>

      <div className="viewport-stretch-buttons">
        <Link href="/services">
          <a className="btn btn-lg btn-primary text-uppercase">
            Learn More
          </a>
        </Link>
        <Link href="/contact-us">
          <a className="btn btn-lg btn-homepage text-uppercase">
            Get in touch
          </a>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Page
