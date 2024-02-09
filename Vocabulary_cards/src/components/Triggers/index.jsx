import React from 'react';
import s from './index.module.css';

export default function Triggers({ changeToEnglish, changeToRussian, deleteAll }) {
  return (
    <div className={s.triggers_styles}>
      <div onClick={changeToEnglish}>ENG</div>
      <div onClick={changeToRussian}>RUS</div>
      <div onClick={deleteAll}>Delete</div>
    </div>
  )
}
