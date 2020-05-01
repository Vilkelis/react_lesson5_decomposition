/* Курс валюты */
import React from 'react';
import ExchangeRateModel from '../models/ExchangeRateModel';

function ExchangeRate(props) {
  
  const digit = (number) => { return (number >= 0 ? '+' : '-');};
  const rateChangeText = (rateChange) => {
    return digit(rateChange) + Math.abs(rateChange);
  };

  return (     
    <a className="exchange-rate" href={props.href}>
      <span className="exchange-rate__currency">{props.currency}</span>
      <span className="exchange-rate__rate">{props.rate}</span> 
      <span className="exchange-rate__rate-change">{rateChangeText(props.rateChange)}</span>          
    </a>    
  );
}

ExchangeRate.propTypes = ExchangeRateModel();

export default ExchangeRate;