import Layout from '../components/Layout'

export default () => (
  <Layout title="Contact Signisto" description="Get in touch with the Signisto team">
    <div className="viewport-header viewport-header-center bg-green">
      <h2 className="viewport-header-title">
        Contact Us
      </h2>
      <p className="viewport-header-tagline">
        We'd love to hear from you
      </p>
    </div>

    <div className="mt-5 mb-5 text-center">
      <p>
        The best way to get in touch right now is via email
      </p>

      <p>
        <a href="mailto:enquiries@signisto.com">
          enquiries@signisto.com
        </a>
      </p>
    </div>
  </Layout>
)
