/* Реклама под строкой поиска */
import React from 'react';
import AdModel from '../models/AdModel';

function Ad(props) {
  return (
    <div className="Ad">
      <a href={props.href} className="ad__a" target="blank">
        <img className="ad__image" src={props.image} alt={props.alt} />
      </a>
    </div>
  );
}

Ad.propTypes = AdModel();

export default Ad;
