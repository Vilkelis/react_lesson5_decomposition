import PropTypes from 'prop-types';

function AdModel() {
  return {image: PropTypes.string.isRequired,
          alt:   PropTypes.string.isRequired,
          href:  PropTypes.string.isRequired
         };
}
  
export default AdModel;