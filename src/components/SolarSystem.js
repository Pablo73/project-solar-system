import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          { planets.map((planet, index) => (
            <PlanetCard
              key={ `${planet.name} = ${index}` }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
