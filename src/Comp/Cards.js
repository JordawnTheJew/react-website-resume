import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
    <div className='cards'>
            <h1>See my work</h1>

            { /*Project Card*/}

            <div className="cards__container">
             <div className="cards__wrapper">
                 <ul className="cards_items">
                 <CardItem 
                 src="images/img-9.jpg"
                 text="Project 1"
                 label='Projects'
                 path='/projects'
                 />
            { /*About Card*/}
                 <CardItem 
                 src="images/img-3.jpg"
                 text="About Me"
                 label='About Me'
                 path='/AboutMe'
                 />
                 </ul>
             </div>
            </div>
        </div>
    )
}

export default Cards;
