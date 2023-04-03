import '../HomePage/HomePage.scss';
import Logo from '../../assets/logo/match-it-logo.png'
import { NavLink } from 'react-router-dom';

function HomePage() {

  return (    
    <>
    <section className='home'>
        <img className='home__logo' src={Logo} alt="Match It! Logo" />
        <NavLink to="/home/selectmode" className='home__start__btn'>
            <button>start</button>
        </NavLink>
    </section>
    </>
  );
}

export default HomePage;