/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css';
import ChangePicture from './ChangePicture';

function Signup(props) {
  const [pseudo, setPseudo] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [race, setRace] = useState('');
  const [gender, setGender] = useState('');
  const photoOK = localStorage.getItem('picture');
  const [enableCreation, setEnableCreation] = useState(false);

  const [pictureUploaded, setPictureUploaded] = useState(false);

  const history = useHistory();

  if (
    pseudo &&
    birthday &&
    email &&
    race &&
    gender &&
    photoOK &&
    !enableCreation
  )
    setEnableCreation(true);

  const handleClic = () => {
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);
    localStorage.setItem('race', race);
    localStorage.setItem('gender', gender);
    history.push('/match');
  };

  return (
    <div className='ProfileCreation'>
      <h1 className='spacemeet'>Sign-up</h1>
      <div className={pictureUploaded ? 'pictureUp' : 'picture'}>
        <ChangePicture
          pictureUploaded={pictureUploaded}
          setPictureUploaded={setPictureUploaded}
        />
      </div>
      <div className='infos'>
        <form className='pseudoContainer'>
          <label htmlFor='pseudo' className='pseudo'>
            <input
              className='input-pseudo'
              type='text'
              name='pseudo'
              id='pseudo'
              placeholder='Pseudo'
              onChange={(event) => setPseudo(event.target.value)}
              value={pseudo}
            />
          </label>
        </form>

        <form className='birthdayContainer'>
          <label htmlFor='birthday' className='birthday'>
            <input
              className='input-birthday'
              type='date'
              name='birthday'
              id='birthday'
              onChange={(event) => setBirthday(event.target.value)}
              value={birthday}
            />
          </label>
        </form>
        <form className='emailContainer'>
          <label htmlFor='email' className='email'>
            <input
              className='input-email'
              type='email'
              name='email'
              id='email'
              placeholder='spacemeet@mail.com'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </label>
        </form>
        <form className='raceContainer'>
          <label>
            <select
              className='input-race'
              type='text'
              name='race'
              id='race'
              onChange={(event) => setRace(event.target.value)}
              value={race}
            >
              <option value='' disabled selected>
                Select your race
              </option>
              <option value='Human'>Human</option>
              <option value='Turian'>Turian</option>
              <option value='Asari'>Asari</option>
              <option value='Quarian'>Quarian</option>
              <option value='Krogan'>Krogan</option>
              <option value='Geth'>Geth</option>
              <option value='Salarian'>Salarian</option>
              <option value='Drell'>Drell</option>
              <option value='A.I.'>A.I.</option>
              <option value='Prothean'>Prothean</option>
              <option value='Reaper'>Reaper</option>
              <option value='Collector'>Collector</option>
              <option value='Yagh'>Yagh</option>
            </select>
          </label>
        </form>
        <div className='genderContainer'>
          <div className='form-check form-check-inline'>
            <label>
              <select
                className='input-gender'
                type='text'
                name='gender'
                id='gender'
                onChange={(event) => setGender(event.target.value)}
                value={gender}
              >
                <option value='' disabled selected>
                  Select your gender
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='A.I.'>A.I.</option>
                <option value='Other'>Other</option>
              </select>
            </label>
            <form className='submit'>
              <button
                className='signup-btn'
                type='submit'
                id='submit'
                onClick={handleClic}
                disabled={!enableCreation}
              >
                Créer mon compte
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
