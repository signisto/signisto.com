import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../public/images/logo-light-shadow.svg'

const Navbar: React.FC = () => {
  return (
    <Link href='/'>
      <a className='flex items-center text-white mx-auto py-10'>
        <Image src={logo} alt='Signisto Logo' width={48} height={48} />
        <span className='ml-3 text-4xl'>Signisto</span>
      </a>
    </Link>
  )
}

export default Navbar
