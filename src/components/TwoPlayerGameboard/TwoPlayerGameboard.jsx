import "./TwoPlayerGameboard.scss";
import Card from "../Card/Card";
import TwoPlayerScoreboard from "../TwoPlayerScoreboard/TwoPlayerScoreboard";
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

function TwoPlayerGameboard({playerOneName, playerTwoName}) {

  const [cardsDetails, setCardsDetails] = useState([]); 
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [disableCards, setDisableCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [playerOnePairs, setPlayerOnePairs] = useState(0);
  const [playerTwoPairs, setPlayerTwoPairs] = useState(0);
  const timeout = useRef(null);
  const [cards, setCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [turn, setTurn] = useState(`${playerOneName}'s turn`);
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
      if (currentPlayer === 2) {
        setPlayerOnePairs((playerOnePairs) => playerOnePairs +1);  
      } else if (currentPlayer === 1) {
        setPlayerTwoPairs((playerTwoPairs) => playerTwoPairs +1);
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
    if (openCards.length === 1 && currentPlayer === 2) {
      setOpenCards ((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      setTurn(`${playerOneName}'s turn`);
      setCurrentPlayer(1);
      disable();
    } else if (openCards.length === 1 && currentPlayer === 1) {
      setOpenCards ((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      setTurn(`${playerTwoName}'s turn`);
      setCurrentPlayer(2);
      disable();
    } 
    else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

const gameOver = () => {
  const sum = (playerOnePairs + playerTwoPairs)
  if (sum === 7) {
    if (playerOnePairs > playerTwoPairs) {
      setWinner(`${playerOneName} wins`)
      setViewWinner(true)
    } if (playerOnePairs < playerTwoPairs) {
      setWinner(`${playerTwoName} wins`)
      setViewWinner(true)
    } else if (playerOnePairs === playerTwoPairs) {
      setWinner(`Tie Game`)
      setViewWinner(true)
    }
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
    setPlayerTwoPairs(0);
    setCurrentPlayer(1);
    setDisableCards(false);
    setCards(shuffleCards(cardsDetails.concat(cardsDetails)));
    setTurn(`${playerOneName}'s turn`);
    setWinner("");
  };
  
  return (
    <>
    <section className="two__player__gameboard">
    <Header/>
      
      <TwoPlayerScoreboard moves={moves} playerOneName={playerOneName} playerOnePairs={playerOnePairs} playerTwoName={playerTwoName} playerTwoPairs={playerTwoPairs} turn={turn}/>

      <div className="two__player__gameboard__section">
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
        <div className="two__player__gameboard__restart__link">
          <button onClick={handleRestartBtn} className="two__player__gameboard__restart__btn">Restart</button>
        </div>

        {viewWinner ? 
         <div className="two__player__gameboard__pop__up">
         <p className="two__player__gameboard__winner__name">{winner}</p>
         <div className="two__player__gameboard__restart__link">
            <button onClick={handleRestartBtn} className='two__player__gameboard__restart__btn'>Restart</button>
         </div>
         <NavLink className="two__player__gameboard__home__link" to={"/"}>
         <button className='two__player__gameboard__home__btn'>Home</button>
         </NavLink>
       </div>
         : ""}
    </section>
    </>
  );
}

export default TwoPlayerGameboard;


