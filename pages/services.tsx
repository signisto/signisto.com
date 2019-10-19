import { NextPage } from 'next'

import Layout from '../components/Layout'

const Page: NextPage = () => (
  <Layout title='Our Services'>
    <div className='viewport-header bg-primary bg-secondary text-white text-center pt-20'>
      <div className='container mx-auto py-20'>
        <h1 className='text-4xl mb-4 font-bold'>
          Our Services
        </h1>
        <p>
          We offer many services ranging from <strong>Application Development</strong> to <strong>Machine Learning</strong>
        </p>
      </div>
    </div>

    <div className='px-8 w-full xl:w-2/3 mx-auto'>

      {/* Software Development */}
      <a id='software-development'></a>
      <div className='mt-8 xl:mt-16 flex flex-row items-center'>
        <div className='w-2/3'>
          <h2 className='text-3xl font-bold'>Software Development</h2>
          <p className='mt-3 mb-3'>
            Our core offering is based around creating and enhancing full end-to-end platforms such as web portals, APIs and external integrations.
            Our engineers are proficient with <strong>Ruby on Rails</strong>, <strong>React</strong> and <strong>AWS</strong> eco-systems but we can adapt to almost any environment quickly.
          </p>
          <p className='mb-3'>
            We can turn your latest idea into an MVP or suppliment your existing development team quickly build out your most requested features.
          </p>
          <p>
            <a href='/contact-us' className='btn btn-primary'>Request a Quote</a>
          </p>
        </div>
        <div className='w-1/3 flex items-center'>
          <img src='/static/images/icons/responsive.png' className='w-2/3 mx-auto'/>
        </div>
      </div>

      {/* Performance Consulting */}
      <a id='performance-consulting'></a>
      <div className='mt-16 flex flex-row items-center'>
        <div className='w-1/3 flex items-center'>
          <img src='/static/images/icons/presentation.png' className='w-2/3 mx-auto'/>
        </div>
        <div className='w-2/3'>
          <h2 className='text-3xl font-bold'>Performance Consulting</h2>
          <p className='mb-3'>
            Not only can we build your platform, but we also ensure it runs at peak efficiency.
            Detection of slow queries, intelligent use of caching and front-end
            delivery optimization are just some of the solutions that can help your
            business outperform the best.
          </p>
          <p>
            <a href='/contact-us' className='btn btn-primary'>Request a Quote</a>
          </p>
        </div>
      </div>

      {/* Mobile Applications */}
      <a id='mobile-development'></a>
      <div className='mt-16 flex flex-row items-center'>
        <div className='w-2/3'>
          <h2 className='text-3xl font-bold'>Mobile Application Development</h2>
          <p className='mb-3'>
            Need a complimentary iOS and/or Android application to consume your highly tuned APIs?
          </p>
          <p className='mb-3'>
            We work exclusively with React Native to enable much quicker turn around on multiple platforms.
          </p>
          <p>
            <a href='/contact-us' className='btn btn-primary'>Request a Quote</a>
          </p>
        </div>
        <div className='w-1/3 flex items-center'>
          <img src='/static/images/icons/smartphone.png' className='w-2/3 mx-auto'/>
        </div>
      </div>

      {/* Machine Learning */}
      <a id='machine-learning'></a>
      <div className='mt-16 mb-16 flex flex-row items-center'>
        <div className='w-1/3 flex items-center'>
          <img src='/static/images/icons/cpu.png'/>
        </div>
        <div className='w-2/3'>
          <h2 className='text-3xl font-bold'>Machine Learning</h2>
          <p className='mb-3'>
            The latest offering in our stack is turning your meaningless data into intelligent business insights.
          </p>
          <p className='mb-3'>
            Quick integration of services such as Amazon Machine Learning or Google TensorFlow.
          </p>
          <p>
            <a href='/contact-us' className='btn btn-primary'>Request a Quote</a>
          </p>
        </div>
      </div>

    </div>
  </Layout>
)

export default Page
