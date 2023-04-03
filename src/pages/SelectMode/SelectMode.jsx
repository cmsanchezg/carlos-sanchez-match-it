import '../SelectMode/SelectMode.scss';

function SelectModePage() {

  return (    
    <>
    <section className='select'>
        <NavLink to="/home/selectmode" className='home__start__btn'>
            <button></button>
        </NavLink>
        <NavLink to="/home/selectmode" className='home__start__btn'>
            <button>start</button>
        </NavLink>
    </section>
    </>
  );
}

export default SelectModePage;