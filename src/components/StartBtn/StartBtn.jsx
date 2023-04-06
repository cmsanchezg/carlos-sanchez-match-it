import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './StartBtn.scss';
import Gameboard from '../Gameboard/Gameboard';

export const api = "http://localhost:0914";

function shuffleImages(array) {
  for(let i = array.length; i > 0; i--) {
      const randomImage = Math.floor(Math.random() * i);
      const currentImage = i - 1;
      const temp = array[currentImage];
      array[currentImage] = array[randomImage];
      array[randomImage] = temp;
  }
  return array;
};

function StartBtn() {

const [images, setImages] = useState([]);
const [viewImages, setViewImages] = useState(false);
const [flipImages, setFlipImages] = useState(false);

useEffect(() => {
  getImages();

}, []);

function getImages () {
  axios
  .get (`${api}/images`)
  .then((res) => {
    // console.log(res.data);
    const shuffledImages = shuffleImages(res.data);
      setImages(shuffledImages);
  })
  .catch((error) => {
      console.log("error", error);
  });
}

const handleStartBtn = () => {
    setViewImages(!viewImages);
  };

  return (    
    <>
    <section className='single__player'>

        <NavLink className='single__player__start__btn'>
            <button images={images} onClick={handleStartBtn} >Start Game!</button>
        </NavLink>

        {viewImages ? <Gameboard images={images} setImages={setImages} /> : ""}
  
    </section>
    </>
  );
}

export default StartBtn;