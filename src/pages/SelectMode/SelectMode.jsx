import '../SelectMode/SelectMode.scss';
import { NavLink } from 'react-router-dom';

function SelectModePage() {

  return (    
    <>
    <section className='select__mode'>

        <p>Select Mode</p>

        <NavLink to="/single_player_game" className='select__mode__sincle__player__mode__btn'>
            <button>Single Player Mode</button>
        </NavLink>
    
        <NavLink to="/two_player_game" className='select__mode__two__player__mode__btn'>
            <button>Two Player Mode</button>
        </NavLink>


        {/* <form action="">
            <label htmlFor="">Select Category</label>
            <input type="text" placeholder='Select Category' />
        </form> */}
    </section>
    </>
  );
}

export default SelectModePage;