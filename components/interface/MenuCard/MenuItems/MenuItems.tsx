import React, { useState} from 'react'
import MenuItem from './MenuItem'

const MenuItems = ({items}) => {
  console.log(items, "ahah")
  const [menuItems, setItem] = useState(items)
  return (
    <ul className='w-full'>
      {
       menuItems?.map((item) => (
        <MenuItem label={item.label} price={item.price} />
       ))
      }
    </ul>
  )
}

export default MenuItems