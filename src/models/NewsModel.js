import PropTypes from 'prop-types';

function NewsModel() {
  return {image: PropTypes.string.isRequired,
          alt:   PropTypes.string.isRequired,
          href:  PropTypes.string.isRequired,
          text:  PropTypes.string.isRequired
         };
}
  
export default NewsModel;