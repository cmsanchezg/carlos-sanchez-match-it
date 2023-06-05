import '../SelectMode/SelectMode.scss';
import { NavLink } from 'react-router-dom';

function SelectModePage() {

  return (    
    <>

    <section className='select__mode'>

      <div className='select__mode__number__players'>
        <p className='select__mode__labels'>Select Mode:</p>

        <NavLink to="/single_player_game" className='select__mode__link'>
          <button className='select__mode__btn'>Single Player Mode</button>
        </NavLink>
      
        <NavLink to="/two_player_game" className='select__mode__link'>
          <button className='select__mode__btn'>Two Player Mode</button>
        </NavLink>
      </div>
    </section>
    </>
  );
}

export default SelectModePage;