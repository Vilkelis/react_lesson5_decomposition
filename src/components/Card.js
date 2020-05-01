/* Карточка */
import React from 'react';
import CardModel from '../models/CardModel';

function Card(props) {
  return (
    <div className="Card">
      <div className="card__title">
        <a className="card__a" href={props.href}>
          {props.title}
        </a>
      </div> 
      {props.content()} 
    </div>
  );
}

Card.propTypes = CardModel();

export default Card;