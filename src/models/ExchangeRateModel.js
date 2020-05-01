import PropTypes from 'prop-types';

function ExchangeRateModel() {
  return {currency: PropTypes.string.isRequired,
          rate:  PropTypes.number.isRequired,
          rateChange:  PropTypes.number.isRequired,
          href: PropTypes.string.isRequired
         };
}
  
export default ExchangeRateModel;