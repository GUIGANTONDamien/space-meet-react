import './MatchItem.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import message from '../img/message.png';

function MatchItem(props) {
  const history = useHistory();
  const characters = JSON.parse(localStorage.getItem('characters'));

  function handleClick() {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].characterId === props.id) {
        props.setCurrentPnj(characters[i]);
        history.push('/profilPnjChat');
      }
    }
  }

  function openChat() {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].characterId === props.id) {
        props.setCurrentPnj(characters[i]);
      }
    }
  }

  return (
    <div className='match-item'>
      <img onClick={handleClick} alt='' src={props.img} className='charIcon' />
      <img src={message} alt='msgIcon' className='msgIcon' onClick={openChat} />
    </div>
  );
}

export default MatchItem;
