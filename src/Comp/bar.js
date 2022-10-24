import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Bar() {
  const[click, setClick] = useState(false); //Click event for ham menu
  const handleClick = () => setClick(!click); //True to Click flase

  return (
    <>
        <nav className='Bar'>
            <div className="Bar-container">
               <Link to="/" className="Bar-logo">
                 Resume <i class="fa-duotone fa-code"/>
               </Link> 
               <div className= 'menu-icon' onClick={handleClick}>
                <i className={click ? 'fas-times' : 'fas fa-bars'}/>
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                 Home Page
                 </Link>
                </li>
               </ul>
            </div>
        </nav>
    </>
  )
}

export default Bar
