import { useState } from 'react';
import './SinglePlayerStartBtn.scss';
import SinglePlayerGameboard from '../SinglePlayerGameboard/SinglePlayerGameboard';

function SinglePlayerStartBtn() {

  const [viewCards, setViewCards] = useState(false);
  const [viewForm, setViewForm] = useState (true);
  const [playerOneName, setPlayerOneName] = useState("");
  
  const handlePlayerOneName = (event) => {
    setPlayerOneName(event.target.value);
  };

  const handleStartBtn = () => {
    setViewCards(!viewCards);
    setViewForm(!viewForm);
  };

  return (    
    <>

    <section className='single__player'>
        
        {viewForm ?
        <div className='single__player__enter__name'>
            <label className='single__player__label' htmlFor="playerOneName">Enter Player Name:</label>
            <input 
              className='single__player__input'
              type="text" 
              name="playerOneName" 
              id="playerOneName" 
              value={playerOneName}
              placeholder="Please Enter Player Name"
              onChange={handlePlayerOneName}/>
            
            <div className='single__player__start__link'>
              <button className='single__player__start__btn' onClick={handleStartBtn}>Start Game!</button>
            </div>
        </div>
        : ""}

        {viewCards ? <SinglePlayerGameboard playerOneName={playerOneName}/> : ""}
        
    </section>
    </>
  );
}

export default SinglePlayerStartBtn;