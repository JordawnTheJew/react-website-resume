import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './bar.css';
import { Button } from './Button';

function Bar() {

  const[click, setClick] = useState(false); //Click function for ham menu
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); //True to Click flase
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else{
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  },[]);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='Bar'>
            <div className="Bar-container">
               <Link to="/" className="Bar-logo" onClick={closeMobileMenu}>
                 JH <i class="fa-solid fa-code"></i>
               </Link> 
               <div className= 'menu-icon' onClick={handleClick}>
                <i className={click ? 'fas-times' : 'fa-solid fa-ellipsis-vertical'}/>
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                 Home Page
                 </Link>
                </li>
                <li className='nav-item'>
                <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
                </Link>
               </li>
               <li className='nav-item'>
               <Link to='/AboutMe' className='nav-links' onClick={closeMobileMenu}>
               About Me
               </Link>
              </li>
              <li className='nav-item'>
              <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
              Contact Me
              </Link>
             </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'> Contact Me</Button>}
            </div>
        </nav>
    </>
  )
}

export default Bar
