import React, { useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({
  isAuth: false,
  role:null,
  auth: () => {}
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(false);

  const authHandler = () => {
    //da kupim iz local storage token i ako ga ima isAuth == true else false
    //i onda pozivam ovu metodu svugde gde mi treba
    if (localStorage.getItem('token') === null){
      setIsAuthenticated(false)
    }else{
      let token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1);
        axios.get('http://localhost:8080/api/person',{ 
             headers: {
                'Authorization': 'Bearer ' + token,
            }
         }).then(response => {
           // setUser(response.data)
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