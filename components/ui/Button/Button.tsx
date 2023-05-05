import React from 'react'
import Link from 'next/Link'
import clsx from 'clsx'
const Button = ({href, children, className}) => {
  return (
    <button className={clsx(className, 'border-2 text-white border-white py-4 uppercase text-sm px-6 rounded-md')}>
      <Link className='flex center-all gap-4' href={href ? href : ""}>
        {children}
        </Link>
    </button>
  )
}

export default Button