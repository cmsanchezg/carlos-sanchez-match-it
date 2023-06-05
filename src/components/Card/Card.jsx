import "./Card.scss";
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
            <img className="card__image" src={card.cover} alt="Theme Cover" />
          </div>
          
          <div className="card__face card__face__back">
            <img className="card__image" src={card.image} alt={card.description}/>
          </div>

      </div>
    </>
  );
}

export default Card;