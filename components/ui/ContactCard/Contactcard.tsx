import Contact from 'components/common/Contact'
import React from 'react'
import Button from '../Button'

const Contactcard = () => {
  return (
    <div className='w-[34rem] shadow-black shadow-md bg-pri'>
      <div className='h-[4.4rem] flex center-all  bg-sec'>
        <div className='kanit pri text-3xl font-medium'>Gwarimpa</div>
      </div>
      <div className='py-7 px-14'>

        <Contact />
      </div>
      {/* accordion */}
      <div className='py-7 px-14'>
      <Button children={"book your seat now"}></Button>
      </div>
    </div>
  )
}

export default Contactcard