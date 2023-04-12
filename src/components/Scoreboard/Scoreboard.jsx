import './Scoreboard.scss';

function Scoreboard({moves, playerOneName, playerOnePairs, playerTwoName, playerTwoPairs, turn}) {

    return (
        <section className='scoreboard'>
        <div className='scoreboard__player'>
            <p className='scoreboard__player__one'>{playerOneName}</p>
            <p className='scoreboard__player__one'>Pairs: {playerOnePairs} </p>
        </div>
        <div className='scoreboard__player'>
            <p className='scoreboard__player__two'>{playerTwoName}</p>
            <p className='scoreboard__player__two'>Pairs: {playerTwoPairs} </p>
        </div>
        <div>
            <p className='scoreboard__moves'>Moves: {moves} </p>
        </div>
        <div>
            <p className='scoreboard__turn'>Turn: {turn} </p>
        </div>
        </section>
    );
}

export default Scoreboard;