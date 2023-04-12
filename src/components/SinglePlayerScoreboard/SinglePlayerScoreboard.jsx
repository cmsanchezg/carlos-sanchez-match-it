import './SinglePlayerScoreboard.scss';

function SinglePlayerScoreboard({moves, playerOneName, playerOnePairs}) {

    return (
        <section className='scoreboard'>
        <div className='scoreboard__player'>
            <p className='scoreboard__player__one'>{playerOneName}</p>
            <p className='scoreboard__player__one'>Pairs: {playerOnePairs} </p>
        </div>
    
        <div>
            <p className='scoreboard__moves'>Moves: {moves} </p>
        </div>
      
        </section>
    );
}

export default SinglePlayerScoreboard;