import React from 'react'

const MenuItem = ({label, price}) => {
  return (
    <li className='mt-3 w-full text-sm pb-4 justify-between flex text-white md:w-[430px] border-b-2 border-dashed'>
      <div>
        {label}
      </div>
      <div>
        {price}
      </div>
    </li>
    )
}

export default MenuItem