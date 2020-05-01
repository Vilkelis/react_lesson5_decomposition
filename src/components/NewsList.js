/* Список новостей (над строкой поиска) */
import React from 'react';
import PropTypes from 'prop-types';
import News from './News';
import NewsModel from '../models/NewsModel';

function NewsList(props) {
  return (
    <div className="NewsList">
      <div className="news-list__news">
       {props.items.map( (item, index) => <News key={index} {...item} /> )} 
      </div>
      {props.children}
    </div>
  );
}

NewsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(NewsModel())).isRequired 
}

export default NewsList;