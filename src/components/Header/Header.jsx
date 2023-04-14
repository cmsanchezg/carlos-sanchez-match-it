import './Header.scss';
import Logo from '../../assets/logo/logo-1.jpg';
import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <NavLink to={"/"} className='header'>
            <img className='header__image' src={Logo} alt="Match It! Logo" />           
        </NavLink>
    );
}

export default Header;