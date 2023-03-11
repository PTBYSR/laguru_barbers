import React, {useState} from 'react'
import { TeamListUtils } from './TeamList.utils'
import TeamMiniCard from './TeamMiniCard'

const TeamList = () => {
  const [teams, setTeams] = useState(TeamListUtils)
  return (
    <div>TeamList

      <div className='flex'>
        {
          teams.map((team, index) => (

            <TeamMiniCard  key={index} team={team.name} position={team.position} img={team.img}/>
          ))
        }
      </div>
    </div>
  )
}

export default TeamList