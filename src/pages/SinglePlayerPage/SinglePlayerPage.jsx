import '../SinglePlayerPage/SinglePlayerPage.scss';
import { NavLink } from 'react-router-dom';

function SinglePlayerPage() {

  return (    
    <>
    <section className='single__player'>
        <p>Single Player Page</p>

        <form action="">
            <label htmlFor="">Player Name</label>
            <input type="text" placeholder='Player Name' />
        </form>

        <NavLink to="/game" className='single__player__start__btn'>
            <button>Start Game!</button>
        </NavLink>
    </section>
    </>
  );
}

export default SinglePlayerPage;