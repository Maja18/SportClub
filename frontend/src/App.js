import React, {  useContext} from 'react';
import './App.css';
import Login from './components/LogIn/Login';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/auth-context';

const App = props => {
  const authContext = useContext(AuthContext);
  
    return (
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
        </div>
      </BrowserRouter>
    );
}

export default App;
