import './Scoreboard.scss';

function Scoreboard({score}) {

    return (
        <div className='scoreboard'>
            <p className='scoreboard__player__one'>Player One: {score} </p>
            {/* <p className='scoreboard__player__two'>Player Two: {score} </p> */}
        </div>
    );
}

export default Scoreboard;