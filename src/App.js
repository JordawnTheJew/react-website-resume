import React from 'react';
import Bar from'./Comp/bar';
import { BrowserRouter as Router, Routes, Route,  } from 
'react-router-dom';
import './App.css';
import Home from './Comp/Pages/Home';
import Projects from './Comp/Pages/Projects';
import AboutMe from './Comp/Pages/AboutMe';

//<Route path='/' exact component={Home}/> 'component' depriciated for 'element'
//'Switches' changed to 'Routes'

export function App() {
  return (
    <>
     <Router> 
      <Bar />
      <Routes>
      <Route exact path="/" element={<Home />}/> 
      <Route exact path= "/projects" element={<Projects />} />
      <Route exact path= "/aboutme" element={<AboutMe/>} />
      </Routes> 
    </Router>
    </>
  );
}


export default App;
