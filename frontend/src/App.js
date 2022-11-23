import React, { Component } from 'react';
import './App.css';
import Login from './components/LogIn/Login';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
