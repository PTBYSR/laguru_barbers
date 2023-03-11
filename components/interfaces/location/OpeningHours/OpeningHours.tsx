import SectionTitle from 'components/ui/SectionTitle'
import React from 'react'
import Week from './DaysCard/Week'

const OpeningHours = () => {
  return (
    <div className='w-[25rem] bg-pri flex flex-col gap-6'>
      <SectionTitle>opening hours</SectionTitle>
      <Week />
      </div>
  )
}

export default OpeningHours