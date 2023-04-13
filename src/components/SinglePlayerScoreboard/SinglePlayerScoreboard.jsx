import './SinglePlayerScoreboard.scss';

function SinglePlayerScoreboard({moves, playerOneName, playerOnePairs}) {

    return (
        <section className='scoreboard'>
        <div className='scoreboard__players'>
            <p className='scoreboard__player__name'>{playerOneName}</p>
            <p className='scoreboard__player__points'>Points: {playerOnePairs} </p>
            <p className='scoreboard__total__moves'>Moves: {moves} </p>
        </div>
      
        </section>
    );
}

export default SinglePlayerScoreboard;