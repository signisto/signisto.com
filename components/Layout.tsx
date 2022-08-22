import Head from 'next/head'
import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

const defaultTitle = 'Signisto'
const defaultDescription = 'Software Development &amp; Consultancy'

interface Props {
  navbar?: boolean
  footer?: boolean
  title?: string
  description?: string
  children?: any
}

const Layout: React.FC<Props> = ({
  navbar = true,
  footer = true,
  title = defaultTitle,
  description = defaultDescription,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='desription' content={description} />
      <link
        rel='stylesheet'
        href='//fonts.googleapis.com/css?family=Exo:400,800'
      />
      <link rel='icon' href='/favicon.png' />
      <meta name='author' content='https://marcqualie.com' />
    </Head>
    {navbar && <Navbar />}
    {children}
    {footer && <Footer />}
  </>
)

export default Layout
