import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

interface Props {
  variant?: 'primary' | 'secondary'
  href: string
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  href,
  children,
  variant = 'primary',
}) => {
  const className =
    'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default Button
