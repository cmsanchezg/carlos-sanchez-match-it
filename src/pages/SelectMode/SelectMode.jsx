import '../SelectMode/SelectMode.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const api = "http://localhost:0914";

function SelectModePage() {

  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);

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

  return (    
    <>

    <section className='select__mode'>

      <div className='select__mode__categories'>
        <label className='select__mode__labels' htmlFor="categories">Select Theme: </label>
        <select
          className='select__mode__dropdown'
          name='categories'
          id='categories'
          onChange={(e) => setOptions(e.target.value)}>
          {categories
          .map((categories) => {
            return (
            <option key={categories.id}>
              {categories.category}              </option> 
            )
          })
          } 
        </select>
      </div>

      <div className='select__mode__number__players'>
        <p className='select__mode__labels'>Select Mode:</p>

        <NavLink to="/single_player_game" className='select__mode__link'>
          <button className='select__mode__btn'>Single Player Mode</button>
        </NavLink>
      
        <NavLink to="/two_player_game" className='select__mode__link'>
          <button className='select__mode__btn'>Two Player Mode</button>
        </NavLink>
      </div>
    </section>
    </>
  );
}

export default SelectModePage;