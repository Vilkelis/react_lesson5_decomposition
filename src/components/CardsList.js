/* Список карточек (под строкой поиска)*/
import React from 'react';
import PropTypes from 'prop-types';
import CardModel from '../models/CardModel';
import Card from './Card';

function CardsList(props) {
  return (
    <div className="CardsList">
      {props.items.map( (item, index) => <Card key={index} {...item} /> )} 
    </div>
  );
}

CardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(CardModel())).isRequired 
}

export default CardsList;