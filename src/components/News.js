/* Новость из списка новостей */
import React from 'react';
import NewsModel from '../models/NewsModel';

function News(props) {
  return (
    <div className="News">
      <a className="news__a" href={props.href}>
        <img className="news__image" src={props.image} alt={props.alt} />
        <span>{props.text}</span>
      </a>
    </div>
  );
}

News.propTypes = NewsModel();

export default News;