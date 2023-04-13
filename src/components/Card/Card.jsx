import "./Card.scss";
import Throne from '../../assets/images/images/throne_back_cover.jpg';
import classnames from "classnames";

function Card({ 
  card,
  index,
  isDisable,
  isInactive,
  isFlipped,
  handleCardClick,
}) {
  
  const handleClick = () => {
    !isFlipped && !isDisable && handleCardClick(index);
  };

  return (
    <>
      <div className={classnames("card", {
        "card__is__flipped": isFlipped, 
        "card__is__inactive": isInactive
      })}
      onClick={handleClick}>

          <div className="card__face card__face__font">
            <img className="card__image" src={Throne} alt="fifa logo" />
          </div>
          
          <div className="card__face card__face__back">
            <img className="card__image" src={card.image} alt={card.description} />
          </div>

      </div>
    </>
  );
}

export default Card;

      // <div className="card" onClick={()=> handleCardClick(id)}>
      //   {flipped ? (
      //     <div className="card__front">
      //       <img className="card__front--image" src={image} alt={description} />
      //     </div>
      //   ) : (
      //     <div className="card__back">
      //       <img className="card__back--image" src={cover} alt="fifa logo" />
      //     </div>
      //   )}
      // </div>