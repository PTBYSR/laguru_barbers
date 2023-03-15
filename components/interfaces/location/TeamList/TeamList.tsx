import SectionTitle from 'components/ui/SectionTitle';
import React, { useState } from 'react';

import { TeamListUtils } from './TeamList.utils';
import TeamMiniCard from './TeamMiniCard';

const TeamList = () => {
  const [teams, setTeams] = useState(TeamListUtils);
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle>Team</SectionTitle>
      <div className="flex flex-col gap-5">
        {teams.map((team, index) => (
          <TeamMiniCard
            key={index}
            team={team.name}
            position={team.position}
            img={team.img}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
