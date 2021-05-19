import './Chat.css';
import React from 'react';
import { useState, useEffect } from 'react';
import MatchItem from './MatchItem';
import MatchChat from './MatchChat';

function Chat({ setCurrentPnj, currentPnj }) {
  const charactersMatched = JSON.parse(localStorage.getItem('characters'));
  const [filteredCharactersMatched, setFilteredCharactersMatched] =
    useState(charactersMatched);

  useEffect(() => {
    setFilteredCharactersMatched(
      charactersMatched.filter(
        (character) => character.like === 1 && character.isRomanceable === true
      )
    );
    setCurrentPnj({
      id: '',
      name: '',
      planet: '',
      race: '',
      age: '',
      gender: '',
      quote: '',
      description: '',
      img: '',
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='chat-container'>
      <div className='match-list'>
        <h3>Matches</h3>
        <div className='match-list-container'>
          {filteredCharactersMatched.map((element) => (
            <MatchItem
              img={element.img}
              id={element.characterId}
              setCurrentPnj={setCurrentPnj}
            />
          ))}
        </div>
      </div>
      <div className='chat-list'>
        <h3>Messages</h3>
        <div className='chat-list-container'>
          <MatchChat currentPnj={currentPnj} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
