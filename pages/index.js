import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/Layout'

export default () => (
  <Layout navbar={false}>
    <div className="viewport-stretch bg-primary bg-bitmap">
      <img src="https://signisto.com/assets/logo-light-shadow-bd20ce7b42cf32c0d58d7869afd1fe84ee4f1248f03fb5b7c0efc739b20ac668.svg" alt="Signisto Logo" className="logo-main"/>

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
