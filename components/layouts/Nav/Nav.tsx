import React from 'react'
import {navUtils } from './Nav.utils'
import { useState } from 'react'
import NavLink from './NavLink'

const Nav = () => {
  const [nav, setNav] = useState(navUtils)
  console.log(nav)
  return (
    <nav className='w-full mt-4'>
      {/* <ul className='flex center-all md:justify-between w-full flex-wrap'> */}
      <ul className='md:flex gap-3 md:center-all grid grid-cols-2 text-center md:justify-between md:gap-4 w-full'>
        {
          nav.map((x, index) => (
            <NavLink label={x.label} href={x.href} />
          ))
        }

      </ul>
      

    </nav>
  )
}

export default Nav