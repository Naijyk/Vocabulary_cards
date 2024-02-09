import React from 'react';
import s from './index.module.css';

export default function AddCardForm({ addNewWord }) {

  const formSubmit = event => {
    event.preventDefault();

    const { rus, eng } = event.target;

    const new_word = {
      id: Date.now(),
      lang: 'en',
      rus: rus.value,
      eng: eng.value
    }

    addNewWord(new_word);

    event.target.reset();
  }

  return (
      <form className={s.add_card_form} onSubmit={formSubmit}>
        <input type="text" placeholder='RUS' name='rus' />
        <input type="text" placeholder='ENG' name='eng' />
        <button>Add word</button>
      </form>
  )
}
