import React from 'react';
import Bar from'./Comp/bar';
import { BrowserRouter as Router, Routes, Route,  } from 
'react-router-dom';
import './App.css';

export function App() {
  return (
    <>
    <Router>
      <Bar />
      <Routes>
       <Route path='/' exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
