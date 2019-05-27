import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke'
import jokesData from './jokesData';


function App() {
  const jokeDataFiltered = jokesData.filter(
    joke => {
      if (joke.question){
        return (joke.question).length > 50;
      }
    }
  );
  const jokeComponents = jokeDataFiltered.map(
    joke => <Joke 
    key = {joke.id} 
    question = {joke.question} 
    punchLine = {joke.punchLine} 
    />);
  return (
    <div className='jokes'>
      {jokeComponents}
    </div>
  );
}

export default App;
