import React from 'react';
import CardItem from './CardItem';
import './Cards copy.css';

function Cards_copy() {
    return (
    <div className='hero_container'>
    <image src= 'images/PyCraft.png' />
            <h1>Projects:</h1>
            <h1>Click for Source Code</h1>

            { /*PyCraft*/}

            <div className="cards__container">
             <div className="cards__wrapper">
                 <ul className="cards_items">
                 <CardItem 
                 src="images/PyCraft.png"
                 text="Creation and Manipulation of Models, Textures, Coordinate and Collision systems, Game Logic in Ursina Engine powered by Python"
                 label='PyCraft'
                 path='//github.com/JordawnTheJew/Anything-i-want/tree/main/CS100B/Project/MineCraft%20project'
                 />
            
                 </ul>
                 { /*Python Arcade Jump Man*/}
                 <CardItem 
                 src="images/jump.png"
                 text="Sprite manipulation, Hitboxes, Physics engine manipulation W/PyMunk, powered by Python"
                 label='JumpMan'
                 path='//github.com/JordawnTheJew/Anything-i-want/tree/main/CS100A/Python%20Arcade'
                 />
             </div>
            </div>
        </div>
    )
}

export default Cards_copy;
