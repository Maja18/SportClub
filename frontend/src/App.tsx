import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/auth-context';

function App() {
  return (
    //<AuthContextProvider>
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
      </div>
    </BrowserRouter>
    //</AuthContextProvider>
  );
}

export default App;
