import "./Gameboard.scss";
import Card from "../Card/Card";
import Scoreboard from "../Scoreboard/Scoreboard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const api = "http://localhost:0914";

function shuffleCards(array) {
  for(let i = array.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
  }
  return array;
}

function Gameboard() {

  const [cardsDetails, setCardsDetails] = useState([]); 
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [disableCards, setDisableCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [pairs, setPairs] = useState(0);
  const timeout = useRef(null);
  const [cards, setCards] = useState([]);

useEffect(() => {
  getCards();
}, []);

useEffect(() => {
  setCards(shuffleCards(cardsDetails.concat(cardsDetails)));
}, [cardsDetails]);

function getCards () {
  axios
  .get (`${api}/images`)
  .then((res) => {
      setCardsDetails(res.data);
  })
  .catch((error) => {
      console.log("error", error);
  });
}

const disable = () => {
  setDisableCards(true);
};

const enable = () => {
  setDisableCards(false);
};

const match = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].id === cards[second].id) {
      setClearedCards ((prev) => ({...prev, [cards[first].id] : true }));
      setPairs((pairs) => pairs +1);
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

const handleCardClick = (index) => {  
    if (openCards.length === 1) {
      setOpenCards ((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect (() => {
    let timeout = null;
    if (openCards.length === 2 ) {
      timeout = setTimeout(match, 300);
    }
    return () => {
      clearTimeout (timeout);
    };
  }, [openCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.id]);
  };
  
  const handleRestartBtn = () => {
    getCards ();
    setClearedCards ({});
    // setOpenCards  ([]);
    setMoves  (0);
    setPairs (0);
    // setDisableCards (false);
    setCards (shuffleCards(cardsDetails.concat(cardsDetails)));
  };
  
  return (
    <section className="scoreboard">
      
      <Scoreboard moves={moves} pairs={pairs}/>

      <div className="gameboard">
        {cards
        .map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisable={disableCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              handleCardClick={handleCardClick}
            />
          );
        })}
        </div>
        <div>
        <button onClick={handleRestartBtn} className='gameboard__restart__btn'>Restart</button>
        </div>
    </section>
  );
}

export default Gameboard;
