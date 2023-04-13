import './Header.scss';
import Logo from '../../assets/logo/logo-1.jpg';

function Header() {

    return (
        <section className='header'>
            <img className='header__image' src={Logo} alt="Match It! Logo" />           
        </section>
    );
}

export default Header;