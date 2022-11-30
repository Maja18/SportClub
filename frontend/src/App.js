import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';

const App = props => {
    return (
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
        </div>
      </BrowserRouter>
    );
}

export default App;
