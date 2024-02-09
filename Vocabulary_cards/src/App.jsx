import React from 'react';
import { useState } from 'react';
import { words_data } from './data/words_data';
import AddCardForm from './components/AddCardForm';
import CardsContainer from './components/CardsContainer';
import Triggers from './components/Triggers';

const App = () => {

  let [ cards, setCards ] = useState(words_data);

  const changeToEnglish = () => {
    setCards(cards.map(el => {
      el.lang = 'en'
      return el
    }))
  }

  const changeToRussian = () => {
    setCards(cards.map(el => {
      el.lang = 'ru'
      return el
    }))
  }

  const deleteAll = () => setCards(cards = []);

  const addNewWord = (new_word) => setCards([...cards, new_word]);

  const deleteCard = id => setCards(cards.filter(el => el.id !== id));

  const changeLang = id => {

    const target_card = cards.find(el => el.id === id);

    target_card.lang = target_card.lang === 'en' ? 'ru' : 'en';

    setCards([...cards]);
  }

  return (
    <div>
      <AddCardForm addNewWord={addNewWord} />
      <CardsContainer cards={cards} deleteCard={deleteCard} changeLang={changeLang} />
      <Triggers changeToRussian={changeToRussian}
                changeToEnglish={changeToEnglish}
                deleteAll={deleteAll} />
    </div>
  )
}

export default App