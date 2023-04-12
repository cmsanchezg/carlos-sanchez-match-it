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
    <section className='single__player'>
        
        {viewForm ?
        <div>
            <label htmlFor="playerOneName">Enter Player One Name</label>
            <input 
              type="text" 
              name="playerOneName" 
              id="playerOneName" 
              value={playerOneName}
              placeholder="Please Enter Your Name"
              onChange={handlePlayerOneName}/>
            
            <label htmlFor="playerTwoName">Enter Player Two Name</label>
            <input 
              type="text" 
              name="playerTwoName" 
              id="playerTwoName" 
              value={playerTwoName}
              placeholder="Please Enter Your Name"
              onChange={handlePlayerTwoName}/>
            
            <div className='single__player__start__btn'>
              <button onClick={handleStartBtn}>Start Game!</button>
            </div>
        </div>
        : ""}

        {viewCards ? <TwoPlayerGameboard playerOneName={playerOneName} playerTwoName={playerTwoName}/> : ""}
        
    </section>
    </>
  );
}

export default TwoPlayerStartBtn;