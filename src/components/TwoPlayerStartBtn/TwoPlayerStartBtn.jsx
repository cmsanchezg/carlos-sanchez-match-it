import './TwoPlayerStartBtn.scss';
import TwoPlayerGameboard from '../TwoPlayerGameboard/TwoPlayerGameboard';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const api = "http://localhost:0914";

function TwoPlayerStartBtn() {

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState("default");
  const [viewCards, setViewCards] = useState(false);
  const [viewForm, setViewForm] = useState (true);
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories () {
    axios
    .get(`${api}/categories`)
    .then ((res) => {
      setCategories(res.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
  }

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
        <>
        
        <div className='two__player__categories'>
          <label className='two__player__label' htmlFor="categories">Select Theme: </label>
          <select
            className='two__player__dropdown'
            name='categories'
            id='categories'
            defaultValue={value}
            onChange={(e) => setSelected(e.target.value)}>
            {categories
            .map((categories) => {
              return (  
               <> 
              <option value="default" hidden>
                Select Theme..
              </option>  
              <option key={categories.id}>
                {categories.category}
              </option> 
              </>
              )
            })
            }
          </select>
        </div>

        <form className='two__player__enter__name'>
            <label className='two__player__label' htmlFor="playerOneName">Enter Player One Name:</label>
            <input 
              className='two__player__input'
              type="text" 
              name="playerOneName" 
              id="playerOneName" 
              value={playerOneName}
              placeholder="Enter Player Name"
              onChange={handlePlayerOneName}/>
            
            <label className='two__player__label' htmlFor="playerTwoName">Enter Player Two Name:</label>
            <input 
              className='two__player__input'
              type="text" 
              name="playerTwoName" 
              id="playerTwoName" 
              value={playerTwoName}
              placeholder="Enter Player Name"
              onChange={handlePlayerTwoName}/>
            
            <div className='two__player__start__link'>
              <button className='two__player__start__btn' onClick={handleStartBtn}>Start Game!</button>
            </div>
        </form>
        </>
        : ""}

        {viewCards ? <TwoPlayerGameboard playerOneName={playerOneName} playerTwoName={playerTwoName} selected={selected}/> : ""}
        
    </section>
    </>
  );
}

export default TwoPlayerStartBtn;