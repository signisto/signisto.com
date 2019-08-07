import Head from 'next/head'

import Footer from './Footer'
import Navbar from './Navbar'

import '../stylesheets/application.scss'

const defaultTitle = 'Signisto'
const defaultDescription = 'Software Development &amp; Consultancy'

export default ({ navbar = true, footer = true, title, description, children }) => (
  <>
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="desription" content={description || defaultDescription}/> }
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Exo:400,800"/>
      <link rel="icon" href="/static/favicon.png"/>
      <meta name="author" content="https://marcqualie.com"/>
    </Head>
    { navbar && <Navbar/> }
    <div className="page-content">
      { children }
    </div>
    { footer && <Footer/> }
  </>
)
