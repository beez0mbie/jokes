import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke'

function App() {
  return (
    <div className='jokes'>
      <Joke 
      name = 'Сиськи'
      question = 'xxx: Сиськи, пресс...xxx: Вот у меня парень хочет, чтобы у меня аура была большая.'
      punchLine = 'xxx: А у меня от этих медитаций минус к защите'/>
      <Joke 
      name = 'Обязанности пешеходов'
      question = {`xxx: При отсутствии тротуаров, пешеходных дорожек, 
      велопешеходных дорожек или обочин,
      а также в случае отсутствия шоссе, 
      трасс, магистралей, узколеек, перегонов, 
      просек, собачьих упряжек, плотов, барж и снегоступов 
      пешеход один хрен`}
      punchLine = 'обязан припиз@%#ить к 09.00 на работу, блеать!!!11'/>
      <Joke 
      name = 'Бонд'
      question = {`Съёмки 25-го «Бонда» приостановили из-за травмы Дэниела Крэйга
      xxx: Только сегодня читал, что у них еще сценарий не дописан, а тут еще и травма...`}
      punchLine = 'yyy: Зато сценарий допишут :D'/>
      <Joke 
      punchLine = 'It’s hard to explain puns to kleptomaniacs because they always take things literally'/>
    </div>
  );
}

export default App;
