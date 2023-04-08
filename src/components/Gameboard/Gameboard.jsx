import "./Gameboard.scss";
import Card from "../Card/Card";
import Scoreboard from "../Scoreboard/Scoreboard";
import { useEffect, useRef, useState } from "react";

function Gameboard({ images, setImages }) {

  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [score, setScore] = useState(0);
  const timeout = useRef(null);

  // const evaluate = () => {
  //   const [first, second] = openCards;
  //   if (cards[first].type === cards[second].type ) {
  //     setClearedCards ((pev) => ({...prev,[cards[first].type] : true}));
  //     setOpenCards([]);
  //     return;
  //   }
  //   timeout.current = setTimeout(() => {
  //     setOpenCards([]);
  //   }, 500);
  // };
  

 const handleImageClick = (id) => {
  console.log(id);

  const foundImage = images.findIndex(image=> image.id === id);
  images[foundImage].flipped =  !images[foundImage].flipped;
  // console.log(images[foundImage].flipped);

  const updatedImages = [...images ];

  setImages(updatedImages);
}


  //   if (openCards.length === 1) {
  //     console.log(images.length)
  //     setOpenCards ((prev) => [...prev, index]);
  //     setScore((score) => score + 1);
  //   } else {
  //     clearTimeout(timeout.current);
  //     setOpenCards([index]);
  //   }
  // };  
   
  // useEffect (() => {
  //   if (openCards === 2) {
  //     setTimeout (evaluate, 500);
  //   }
  // }, [openCards])

  // const checkIsFlipped = (index) => {
  //   return openCards.includes(index);
  // }

  // const checkIsInactive = (card) => {
  //   return Boolean(clearedCards[card.type]);
  // } 
  

  return (
    <article className="gameboard">
      <Scoreboard score={score}/>

      <section className="gameboard__images">
        {images.map((image, index) => {
          return (
            <Card
              key={image.id}
              index={index}
              id={image.id}
              image={image.image}
              description={image.description}
              cover={image.cover}
              flipped={image.flipped}
              handleImageClick={handleImageClick}
            />
          );
        })}
      </section>
    </article>
  );
}

export default Gameboard;
