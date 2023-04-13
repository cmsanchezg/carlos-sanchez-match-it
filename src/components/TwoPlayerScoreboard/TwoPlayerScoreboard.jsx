import './TwoPlayerScoreboard.scss';

function TwoPlayerScoreboard({moves, playerOneName, playerOnePairs, playerTwoName, playerTwoPairs, turn}) {

    return (
        <section className='scoreboard2'>
        <div className='scoreboard2__players'>
            <div>
                <p className='scoreboard2__player__name'>{playerOneName}</p>
                <p className='scoreboard2__player__points'>Points: {playerOnePairs} </p>
            </div>
            <div>    
                <p className='scoreboard2__player__name'>{playerTwoName}</p>
                <p className='scoreboard2__player__points'>Points: {playerTwoPairs} </p>
            </div>
            <p className='scoreboard2__total__moves'>Moves: {moves} </p>
            <p className='scoreboard2__turn'>Turn: {turn} </p>
        </div>
        </section>
    );
}

export default TwoPlayerScoreboard;