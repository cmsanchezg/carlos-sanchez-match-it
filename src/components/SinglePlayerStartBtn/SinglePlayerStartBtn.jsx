import './SinglePlayerStartBtn.scss';
import SinglePlayerGameboard from '../SinglePlayerGameboard/SinglePlayerGameboard'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

export const api = "http://localhost:0914";

function SinglePlayerStartBtn() {

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);

  const [viewCards, setViewCards] = useState(false);
  const [viewForm, setViewForm] = useState (true);
  const [playerOneName, setPlayerOneName] = useState("");
  
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

  const handleStartBtn = () => {
    setViewCards(!viewCards);
    setViewForm(!viewForm);
  };

  return (    
    <>

    <section className='single__player'>
        
        {viewForm ?
        <>
           
        <div className='single__player__categories'>
          <label className='single__player__label' htmlFor="categories">Select Theme: </label>
          <select
            className='single__player__dropdown'
            name='categories'
            id='categories'
            onChange={(e) => setSelected(e.target.value)}>
            {categories
            .map((categories) => {
              return (
              <option key={categories.id}>
                {categories.category}
              </option> 
              )
            })
            }
          </select>
        </div>

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
        </>
        : ""}

        {viewCards ? <SinglePlayerGameboard playerOneName={playerOneName} selected={selected}/> : ""}
        
    </section>
    </>
  );
}

export default SinglePlayerStartBtn;