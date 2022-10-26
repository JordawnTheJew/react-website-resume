import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
    <div className='cards'>
            <h1>See my work!</h1>

            { /*Project Card*/}

            <div className="cards__container">
             <div className="cards__wrapper">
                 <ul className="cards_items">
                 <CardItem 
                 src="images/PyCraft.png"
                 text="Experience in : Python, JavaScript,
                 Git, React, SQL, Data Modeling, UI Design"
                 label='Projects'
                 path='/projects'
                 />
            
                 </ul>
                 { /*About Card*/}
                 <CardItem 
                 src="images/aboutme.jpg"
                 text="Get to know me"
                 label='About Me'
                 path='/AboutMe'
                 />
             </div>
            </div>
        </div>
    )
}

export default Cards;
