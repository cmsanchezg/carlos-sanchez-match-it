import '../HomePage/HomePage.scss';
import Logo from '../../assets/logo/logo-1.jpg';
import { NavLink } from 'react-router-dom';

function HomePage() {

  return (    
    <>
    <section className='home'>
        <img className='home__logo' src={Logo} alt="Match It! Logo" />
        <NavLink to="/selectmode" className='home__start__link'>
            <button className='home__start__btn'>start</button>
        </NavLink>
    </section>
    </>
  );
}

export default HomePage;