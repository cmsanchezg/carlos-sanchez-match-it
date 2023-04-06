import "./Gameboard.scss";
import Card from "../Card/Card";
import Scoreboard from "../Scoreboard/Scoreboard";
import { useEffect, useRef, useState } from "react";

function Gameboard({ images, setImages }) {
  // const [click1, setClick1] = useState(0);
  // const [click2, setClick2] = useState(0);

  const handleImageClick = (id) => {
    console.log(id);

    console.log(images);

    const foundImage = images.findIndex(image=> image.id === id);
    images[foundImage].flipped =  !images[foundImage].flipped;

    const updatedImages = [...images ];

    setImages(updatedImages);
    // if (click1 === 0) {
    //   setClick1(id);
    // } else {
    //   setClick2(id);
    // }
    // console.log("click one:", setClick1)
    // console.log("click two:", setClick2)

    // if (click1 !== 0 && click2 !== 0 && click1 === click2) {
    //   return 'matched'; // do something to keep them flipped up
    // } else {
    //   setClick1(0);
    //   setClick2(0);
    // }
  };

  return (
    <article className="gameboard">
      <Scoreboard />

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
