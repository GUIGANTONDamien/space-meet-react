import './MatchChat.css';
import React from 'react';
import { useState } from 'react';
import send from '../img/send.png';
import message from '../img/message.png';

const messages = [
  'Totally :)',
  'Of course !',
  'Hehehe...',
  'Nope...',
  'Absolutely',
];

const randomMessage = () =>
  messages[Math.floor(Math.random() * messages.length)];

function MatchChat({ currentPnj }) {
  const [msgs, setMsgs] = useState(JSON.parse(localStorage.getItem('chat')));

  const [userInput, setuserInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setuserInput('');
    let temp = [];
    if (msgs === null) {
      temp = [
        {
          charId: currentPnj.characterId,
          id: 0,
          from: 'user',
          msg: userInput,
        },
      ];
    } else {
      temp = [
        ...msgs,
        {
          charId: currentPnj.characterId,
          id: msgs.length,
          from: 'user',
          msg: userInput,
        },
      ];
    }

    setMsgs(temp);

    setTimeout(() => {
      temp = [
        ...temp,
        {
          charId: currentPnj.characterId,
          id: temp.length,
          from: 'pnj',
          msg: randomMessage(),
        },
      ];
      setMsgs(temp);
      localStorage.setItem('chat', JSON.stringify(temp));
    }, 2000);
  };

  return (
    <>
      <div className='match-chat'>
        {currentPnj.name ? (
          <div>
            {`Chat with ${currentPnj.name}`}
            <ul className='messages'>
              {msgs !== null &&
                msgs
                  .filter(
                    (message) => message.charId === currentPnj.characterId
                  )
                  .map((message, index) => (
                    <li
                      key={index}
                      className={
                        message.from === 'pnj' ? 'message-pnj' : 'message-user'
                      }
                    >
                      {message.msg}
                    </li>
                  ))}
            </ul>
          </div>
        ) : (
          <div className='startChat'>
            <p>Start a chat with :</p>
            <img src={message} alt='msgIcon' className='msgIcon' />
          </div>
        )}
      </div>
      <div className='match-input'>
        <form onSubmit={handleSubmit} className='chat-box'>
          <input
            className='input-chat'
            type='text'
            value={userInput}
            onChange={(event) => setuserInput(event.target.value)}
          />
          <button className='send-btn'>
            <img alt='' src={send} className='send-btn-icon' />
          </button>
        </form>
      </div>
    </>
  );
}

export default MatchChat;
