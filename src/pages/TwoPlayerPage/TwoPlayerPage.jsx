import '../TwoPlayerPage/TwoPlayerPage.scss';
import { NavLink } from 'react-router-dom';

function TwoPlayerPage() {

  return (    
    <>
    <section className='two__player'>
        <p>Two Player Page</p>

        <form action="">
            <label htmlFor="">Player One Name</label>
            <input type="text" placeholder='Player One Name' />
        </form>

        <form action="">
            <label htmlFor="">Player Two Name</label>
            <input type="text" placeholder='Player Two Name' />
        </form>

        <NavLink to="/game" className='two__player__start__btn'>
            <button>Start Game!</button>
        </NavLink>
    </section>
    </>
  );
}

export default TwoPlayerPage;