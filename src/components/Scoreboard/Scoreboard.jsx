import './Scoreboard.scss';

function Scoreboard({scoreCount}) {

    return (
        <div className='scoreboard'>
            <p className='scoreboard__player__one'>Player One: {scoreCount} </p>
            {/* <p className='scoreboard__player__two'>Player Two: {score} </p> */}
        </div>
    );
}

export default Scoreboard;