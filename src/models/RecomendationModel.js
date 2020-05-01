import PropTypes from 'prop-types';

function RecomendationModel() {
  return  { image: PropTypes.string.isRequired,
            alt:   PropTypes.string.isRequired,
            href:  PropTypes.string.isRequired,
            text:  PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            age:  PropTypes.string.isRequired
          };
}
  
export default RecomendationModel;