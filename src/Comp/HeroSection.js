import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className ='hero-container'>
      <video src= '/videos/home-background.mp4'
      autoPlay loop muted />
      <h1>Hi, I'm Jordawn House,</h1>
      <h2> A Junior Developer.</h2>
      <p>Why did the programmer quit his job?
      -- They never got arrays.</p>
      <div className='hero-btns'>
         <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
         About Me
         </Button>
         <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
         Lets Connect <i className='fa-brands fa-linkedin' />
         </Button>
      </div>
    </div>
      
    
  );
}

export default HeroSection;
