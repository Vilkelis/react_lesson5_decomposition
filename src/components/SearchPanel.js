/* Панель поиска */
import React from 'react';
import PropTypes from 'prop-types';

function SearchPanel(props) {
  return (
    <div className="SearchPanel">
      <div className="search-panel__logo">
        Яндекс
      </div>        
      <div className="search-panel__right">
        <div className="search-panel__menu">
          <a href="/">Видео</a>
          <a href="/">Картинки</a>
          <a href="/">Новости</a>
          <a href="/">Карты</a>
          <a href="/">Маркет</a>
          <a href="/">Переводчик</a>
          <a href="/">Эфир</a>
          <a href="/">еще</a>
        </div>
        <div className="search-panel__input">
          <input type="text"/>
          <button>Найти</button>
        </div>
        <div className="search-panel__example">
          <span>Найдется все. Например ,</span>
          <a href="/">{props.exampleText}</a>
        </div>        
      </div>

    </div>
  );
}

SearchPanel.propTypes = {
  exampleText: PropTypes.string.isRequired
}

export default SearchPanel;