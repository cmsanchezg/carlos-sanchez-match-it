import { useState } from 'react';
import './TwoPlayerStartBtn.scss';
import TwoPlayerGameboard from '../TwoPlayerGameboard/TwoPlayerGameboard';

function TwoPlayerStartBtn() {

  const [viewCards, setViewCards] = useState(false);
  const [viewForm, setViewForm] = useState (true);
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  
  const handlePlayerOneName = (event) => {
    setPlayerOneName(event.target.value);
  };

  const handlePlayerTwoName = (event) => {
    setPlayerTwoName(event.target.value);
  };

  const handleStartBtn = () => {
    setViewCards(!viewCards);
    setViewForm(!viewForm);
  };

  return (    
    <>
    <section className='two__player'>
        
        {viewForm ?
        <div className='two__player__enter__name'>
            <label className='two__player__label' htmlFor="playerOneName">Enter Player One Name:</label>
            <input 
              className='two__player__input'
              type="text" 
              name="playerOneName" 
              id="playerOneName" 
              value={playerOneName}
              placeholder="Please Enter Player Name"
              onChange={handlePlayerOneName}/>
            
            <label className='two__player__label' htmlFor="playerTwoName">Enter Player Two Name:</label>
            <input 
              className='two__player__input'
              type="text" 
              name="playerTwoName" 
              id="playerTwoName" 
              value={playerTwoName}
              placeholder="Please Enter Player Name"
              onChange={handlePlayerTwoName}/>
            
            <div className='two__player__start__link'>
              <button className='two__player__start__btn' onClick={handleStartBtn}>Start Game!</button>
            </div>
        </div>
        : ""}

        {viewCards ? <TwoPlayerGameboard playerOneName={playerOneName} playerTwoName={playerTwoName}/> : ""}
        
    </section>
    </>
  );
}

export default TwoPlayerStartBtn;