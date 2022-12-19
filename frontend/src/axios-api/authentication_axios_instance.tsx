import axios from "axios"; 

const value = localStorage.getItem('token')!;
var token;
if (value !== null){
    token = value.substring(1,value.length-1);
}

const authenticationAxiosInstance = axios.create({
    baseURL : 'http://localhost:8080/api/auth',
    headers: {
        "Content-type": "application/json",
        'Authorization': 'Bearer ' + token
    }

});
  
export default authenticationAxiosInstance;