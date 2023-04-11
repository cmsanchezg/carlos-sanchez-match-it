import './Scoreboard.scss';

function Scoreboard({moves, pairs}) {

    return (
        <section>
        <div className='scoreboard'>
            <p className='scoreboard__player__one'>Player One Moves: {moves} </p>
            <p className='scoreboard__player__two'>Player One Pairs: {pairs} </p>
        </div>
        {/* <div className='scoreboard'>
            <p className='scoreboard__player__one'>Player Two Moves: {moves} </p>
            <p className='scoreboard__player__two'>Player Two Pairs: {pairs} </p>
        </div> */}
        </section>
    );
}

export default Scoreboard;