import { NextPage } from 'next'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout title="Our Services">
    <div className="viewport-header bg-dark">
      <h1 className="viewport-header-title">
        Our Services
      </h1>
      <p className="viewport-header-tagline">
        We offer many services ranging from <strong>Application Development</strong> to <strong>Machine Learning</strong>
      </p>
    </div>


    {/* Software Development */}
    <a id="software-development"></a>
    <div className="marketing-block">
      <div className="marketing-block-content">
        <h2>Software Development</h2>
        <p>
          Our core offering is based around creating and enhancing full end-to-end platforms such as web portals, APIs and external integrations.
          Our engineers are proficient with <strong>Ruby on Rails</strong>, <strong>React</strong> and <strong>AWS</strong> eco-systems but we can adapt to almost any environment quickly.
        </p>
        <p>
          We can turn your latest idea into an MVP or suppliment your existing development team quickly build out your most requested features.
        </p>
        <p>
          <a href="/contact-us" className="btn btn-primary">Request a Quote</a>
        </p>
      </div>
      <div className="marketing-block-img align-items-right">
        <img src="/static/images/icons/responsive.png"/>
      </div>
    </div>


    {/* Performance Consulting */}
    <a id="performance-consulting"></a>
    <div className="marketing-block">
      <div className="marketing-block-img">
        <img src="/static/images/icons/presentation.png"/>
      </div>
      <div className="marketing-block-content">
        <h2>Performance Consulting</h2>
        <p>
          Not only can we build your platform, but we also ensure it runs at peak efficiency.
          Detection of slow queries, intelligent use of caching and front-end
          delivery optimization are just some of the solutions that can help your
          business outperform the best.
        </p>
        <p>
          <a href="/contact-us" className="btn btn-primary">Request a Quote</a>
        </p>
      </div>
    </div>


    {/* Mobile Applications */}
    <a id="mobile-development"></a>
    <div className="marketing-block">
      <div className="marketing-block-content">
        <h2>Mobile Application Development</h2>
        <p>
          Need a complimentary iOS and/or Android application to consume your highly tuned APIs?
        </p>
        <p>
          We work exclusively with React Native to enable much quicker turn around on multiple platforms.
        </p>
        <p>
          <a href="/contact-us" className="btn btn-primary">Request a Quote</a>
        </p>
      </div>
      <div className="marketing-block-img align-items-right">
        <img src="/static/images/icons/smartphone.png"/>
      </div>
    </div>


    {/* Machine Learning */}
    <a id="machine-learning"></a>
    <div className="marketing-block">
      <div className="marketing-block-img">
        <img src="/static/images/icons/cpu.png"/>
      </div>
      <div className="marketing-block-content">
        <h2>Machine Learning</h2>
        <p>
          The latest offering in our stack is turning your meaningless data into intelligent business insights.
        </p>
        <p>
          Quick integration of services such as Amazon Machine Learning or Google TensorFlow.
        </p>
        <p>
          <a href="/contact-us" className="btn btn-primary">Request a Quote</a>
        </p>
      </div>
    </div>
  </Layout>
)

export default Page
