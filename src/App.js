import React from 'react';
import './App.css';
import Ad from './components/Ad'; 
import NewsList from './components/NewsList';
import Recomendations from './components/Recomendation';
import SearchPanel from './components/SearchPanel';
import CardsList from './components/CardsList';
import Card from './components/Card';
import ExchangeRatesList from './components/ExchangeRatesList';

function App() {
  
  const newsList = [
    {image: '/news1.png',
     alt:   'Риа-Новости',
     href:  '#',
     text:  'Контактировавших с Мишустиным изолируют и проверят на коронавирус' 
    },
    {image: '/news2.png',
     alt:   'Известия',
     href:  '#',
     text:  'Демонтирована мозаика с изображением Путина в храме Вооруженных сил' 
    },
    {image: '/news3.png',
     alt:   'REGNUM',
     href:  '#',
     text:  'Попова рассказала о процессе снятия ограничений из-за коронавируса' 
    }
  ];
  
  const exchangeRates = [{currency: 'USD',
                          rate: 120.5,
                          rateChange: 20,
                          href: '/'},
                         {currency: 'EUR',
                          rate: 140.5,
                          rateChange: 30,
                          href: '/'},  
                         {currency: 'НЕФТЬ',
                          rate: 1.5,
                          rateChange: -20,
                          href: '/'}                                                  
                        ];

  const recomendation = {image: '/Recomendation.png',
                         alt:   'Open-kids',
                         href:  '#',
                         text:  'Развитие речи не выходя из дома',
                         description: 'С поп-группой Open-kids',
                         age: '0+'
                        };

  const ad = {image: '/Ad.png',
              alt:   'Рекламма',
              href:  '/'};         

  return (
    <div className="App">
      <div className="app__title">
        <NewsList items={newsList}>
          <ExchangeRatesList items={exchangeRates} />
        </NewsList>  
        <Recomendations {...recomendation} />
      </div>
      <div className="app__content">
        <SearchPanel exampleText={'фаза луны сегодня'} />        
      </div>
      <div className="app__footer">
        <Ad {...ad}/>
        <CardsList>
          <Card title={'Погода'} href={'/'}>
            <div>+10 днем</div>         
          </Card>
          <Card title={'Посещаемое'} href={'/'}>
            <ul>
              <li>Недвижимость</li>
              <li>Маркет</li>
              <li>Авто.ру</li>
            </ul>          
          </Card>  
          <Card title={'Карта Германии'} href={'/'}>
            <a href="/">Расписания</a>          
          </Card>                  
        </CardsList>
      </div>
    </div>
  );
}

export default App;
 