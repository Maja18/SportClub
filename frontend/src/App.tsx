import React, { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Figma from './components/Figma/Figma';

function App() {
  const [isFigma, setIsFigma] = useState(false)

  return (
    <BrowserRouter>
      <div>
       <NavBar isFigma={isFigma}></NavBar> 
      </div>
    </BrowserRouter>
  );
}

export default App;
