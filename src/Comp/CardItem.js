import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <div>
        <li className='cards_item'>
         <Link className='cards__item__link' to= {props.path}>
             <figure className='cards__item__pic-wrap' data-category={props.label}>
               <img src={props.src} alt='Travel pic'
                className='cards__item__img'/>
           </figure>
             <div className='cards__item__info'>
                 <h1 className='cards__item__text'>{props.text}</h1>
             </div>
          </Link>
        </li>     
    </div>
    );
}

export default CardItem;
