/* Рекомендация (над строкой поиска) */
import React from 'react';
import RecomendationModel from '../models/RecomendationModel';

function Recomendation(props) {
  return (
    <div className="Recomendation">
      <div className="recomendation__top">  
        <a href={props.href}>
            <img className="recomendation__image" src={props.image} alt={props.alt} />
            <span>{props.text}</span>
        </a>
      </div>
      <div className="recomendation__bottom">
        <span className="recomendation__description">{props.description}</span>
        <span className="recomendation__age">{props.age}</span>
      </div>
    </div>
  );
}

Recomendation.propTypes = RecomendationModel();

export default Recomendation;