import '../SelectMode/SelectMode.scss';
import { NavLink } from 'react-router-dom';

function SelectModePage() {

  return (    
    <>
    <section className='select__mode'>
      
        <p>Select Mode</p>
        <NavLink to="/singleplayermode" className='select__mode__single__player__mode__btn'>
            <button>Single Player</button>
        </NavLink>
        {/* <NavLink to="/twoplayermode" className='select__mode__two__player__mode__btn'>
            <button>Two Player</button>
        </NavLink> */}

        <form action="">
            <label htmlFor="">Select Category</label>
            <input type="text" placeholder='Select Category' />
        </form>
    </section>
    </>
  );
}

export default SelectModePage;