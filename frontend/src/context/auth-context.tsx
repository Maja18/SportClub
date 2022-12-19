import React, { useState } from 'react';
import axios from 'axios';
import personAxiosInstance from '../axios-api/person_axios_instance';

interface AppContextInterface {
  isAuth: boolean,
  role:string,
  auth: () => void
}

export const AuthContext = React.createContext<AppContextInterface>({
  isAuth: false,
  role:'',
  auth: () => {}
});

const AuthContextProvider : React.FunctionComponent<React.PropsWithChildren<{}>> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<string>('');

  const authHandler = () => {
    if (localStorage.getItem('token') === null){
      setIsAuthenticated(false)
    }else{
      personAxiosInstance.get('')
      .then(response => {
        setRole(response.data.role.substring(5))
        setIsAuthenticated(true);
     }).catch(res => {
            alert("Error");
            console.log(res);
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth: authHandler, isAuth: isAuthenticated, role: role }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;