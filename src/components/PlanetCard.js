import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

PlanetCard.propTypes = {
  planetImage: PropTypes.shape({
    image: PropTypes.string,
  }).isRequired,
};

export default PlanetCard;
