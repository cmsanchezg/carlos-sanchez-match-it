import "./SinglePlayerGameboard.scss";
import Card from "../Card/Card";
import SinglePlayerScoreboard from "../SinglePlayerScoreboard/SinglePlayerScoreboard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

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

function SinglePlayerGameboard({playerOneName}) {

  const [cardsDetails, setCardsDetails] = useState([]); 
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [disableCards, setDisableCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [playerOnePairs, setPlayerOnePairs] = useState(0);
  const timeout = useRef(null);
  const [cards, setCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState("");
  const [viewWinner, setViewWinner] = useState(false);
  
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
      if (currentPlayer === 1) {
        setPlayerOnePairs((playerOnePairs) => playerOnePairs +1);  
      }
      setOpenCards([])
      gameOver();
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

const handleCardClick = (index) => {  
    if (openCards.length === 1 && currentPlayer === 1) {
      setOpenCards ((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      setCurrentPlayer(1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

const gameOver = () => {
    if (playerOnePairs === 7) {
      setWinner(`${playerOneName}, you have an amazing memory!!`)
      setViewWinner(true)
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
    getCards();
    setClearedCards({});
    setOpenCards([]);
    setMoves(0);
    setPlayerOnePairs(0);
    setCurrentPlayer(1);
    setDisableCards(false);
    setCards(shuffleCards(cardsDetails.concat(cardsDetails)));
    setWinner("");
    setViewWinner(false);
  };
  
  return (
    <>
      <section className="single__player__gameboard">
      <Header/>
      
      <SinglePlayerScoreboard moves={moves} playerOneName={playerOneName} playerOnePairs={playerOnePairs} />

      <div className="single__player__gameboard__board">
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
        <div className="single__player__gameboard__restart__link">
          <button onClick={handleRestartBtn} className='single__player__gameboard__restart__btn'>Restart</button>
        </div>
        
        {viewWinner ? 
        <div className="single__player__gameboard__pop__up" >
            <p className="single__player__gameboard__winner__name">{winner}</p>
            <div className="single__player__gameboard__restart__link">
                <button onClick={handleRestartBtn} className='single__player__gameboard__restart__btn'>Restart</button>
            </div>
            <NavLink className="single__player__gameboard__home__link" to={"/"}>
                <button className='single__player__gameboard__home__btn'>Home</button>
            </NavLink>
        </div>
         : ""}
    </section>
    </>
  );
}

export default SinglePlayerGameboard;