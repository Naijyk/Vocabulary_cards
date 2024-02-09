import React from 'react';
import s from './index.module.css';
import { RxCross1 } from "react-icons/rx";

export default function Card({ id, lang, rus, eng, deleteCard, changeLang }) {

  const text = lang === 'en' ? eng : rus;

  const card_styles = {
    backgroundColor: lang === 'en' ? 'rgb(41, 128, 185)' : 'white',
    color: lang === 'en' ? 'white' : 'rgb(41, 128, 185)'
  }

  const deleteWord = (event) => {
    deleteCard(id);
    event.stopPropagation();
  }

  return (
    <div style={card_styles}
         className={s.card}
         onClick={() => changeLang(id)}  >
      <RxCross1 className={s.cross} onClick={deleteWord} />
      <p>{ text }</p>
    </div>
  )
}
