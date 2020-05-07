/* Список карточек (под строкой поиска)*/
import React from 'react';

function CardsList(props) {
  return (
    <div className="CardsList">
      {props.children} 
    </div>
  );
}

export default CardsList;