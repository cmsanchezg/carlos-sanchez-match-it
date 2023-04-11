import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './StartBtn.scss';
import Gameboard from '../Gameboard/Gameboard';

function StartBtn() {

  const [viewCards, setViewCards] = useState(false);
  
  const handleStartBtn = () => {
    setViewCards(!viewCards);
  };

  return (    
    <>
    <section className='single__player'>

        <NavLink className='single__player__start__btn'>
            <button onClick={handleStartBtn} >Start Game!</button>
        </NavLink>

        {viewCards ? <Gameboard /> : ""}
  
    </section>
    </>
  );
}

export default StartBtn;