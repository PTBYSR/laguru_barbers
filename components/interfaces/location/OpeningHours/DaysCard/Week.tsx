import React, {useState} from 'react'
import DaysCard from './DaysCard'
import { DaysCardUtils } from './DaysCard.utils'


const Week = () => {
  const [days, setDays] = useState(DaysCardUtils)

  return (
    <div>
      {
        days.map((day, index) => (
          <DaysCard key={index} day={day.day} time={day.time} />
        ))
      }
    </div>
  )
}

export default Week