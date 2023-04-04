import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../SinglePlayerPage/SinglePlayerPage.scss';
import GamePage from '../GamePage/GamePage';

export const api = "http://localhost:0914";

function SinglePlayerPage() {

  const [viewImages, setViewImages] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  function getImages () {
    axios
    .get (`${api}/images`)
    .then((res) => {
        setImages(res.data);
    })
    .catch((error) => {
        console.log("error", error);
    });
  }  
  
  const handleOnClick = () => {
    setViewImages(!viewImages);
  };

  return (    
    <>
    <section className='single__player'>
        <p>Single Player Page</p>

        <form action="">
            <label htmlFor="">Player Name</label>
            <input type="text" placeholder='Player Name' />
        </form>

        <NavLink className='single__player__start__btn'>
            <button onClick={handleOnClick}>Start Game!</button>
        </NavLink>

        {viewImages ? <GamePage images={images}/> : ""}

    </section>
    </>
  );
}

export default SinglePlayerPage;