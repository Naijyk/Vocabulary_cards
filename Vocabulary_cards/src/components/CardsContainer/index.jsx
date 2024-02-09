import React from 'react';
import Card from '../Card';
import s from './index.module.css';

export default function CardsContainer({ cards, deleteCard, changeLang }) {
  return (
    <div className={s.cards_container}>
      {
        cards.map(el => <Card key={el.id} {...el} deleteCard={deleteCard} changeLang={changeLang} />)
      }
    </div>
  )
}
