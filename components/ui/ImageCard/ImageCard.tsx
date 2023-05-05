import React from 'react'
import Image from 'next/Image'

const ImageCard = ({img}) => {
  return (
    <div className=' rounded-3xl de-border w-80 h-80 mt-20 mr-10'>
      <Image src={img.img} />
    </div>
  )
}

export default ImageCard