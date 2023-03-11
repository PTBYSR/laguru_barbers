import React from 'react'

const ServiceDetails = ({title, description, icon}) => {
  return (
    <div >
      <div className="mb-5 uppercase text-xs text-gray-100 tracking-widest font-extrabold">
        {title}
      </div>
      <div>
      <div className=' bg-sec text-sm pri kanit flex gap-3 items-center  w-56 py-2 px-4 rounded-sm'>
      <div>{icon}</div>
        {description}
      </div>
      </div>
    </div>
  )
}

export default ServiceDetails