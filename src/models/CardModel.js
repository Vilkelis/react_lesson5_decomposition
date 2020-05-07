import PropTypes from 'prop-types';

function CardModel() {
  return {title: PropTypes.string.isRequired,
          href:  PropTypes.string.isRequired
         };
}
  
export default CardModel;