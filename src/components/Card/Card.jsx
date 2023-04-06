// import { useState } from 'react';
import "./Card.scss";
// import fifa from '../../assets/images/images/soccer_back_cover.jpg';

function Card({
  key,
  index,
  image,
  description,
  cover,
  id,
  handleImageClick,
  flipped,
}) {
  

  return (
    <>
      <div className="card" onClick={()=> handleImageClick(id)}>
        {flipped ? (
          <div className="card__front">
            <img className="card__front--image" src={image} alt={description} />
          </div>
        ) : (
          <div className="card__back">
            <img className="card__back--image" src={cover} alt="fifa logo" />
          </div>
        )}
      </div>
    </>
  );
}

export default Card;