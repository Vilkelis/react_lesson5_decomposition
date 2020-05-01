/* Курсы валют (над строкой поиска) */
import React from 'react';
import PropTypes from 'prop-types';
import ExchangeRate from './ExchangeRate';
import ExchangeRateModel from '../models/ExchangeRateModel';

function ExchangeRatesList(props) {
  return (    
    <div className="exchange-rates-list">
      {props.items.map( (item, index) => <ExchangeRate key={index} {...item} /> )} 
    </div>
  );
}

ExchangeRatesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ExchangeRateModel())).isRequired 
}

export default ExchangeRatesList;