import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((m, index) => (
          <MissionCard
            key={ `${m.name} = ${index}` }
            name={ m.name }
            year={ m.year }
            country={ m.country }
            destination={ m.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
