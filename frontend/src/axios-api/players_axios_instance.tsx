import axios from "axios"; 

const value = localStorage.getItem('token')!;
var token;
if (value !== null){
    token = value.substring(1,value.length-1);
}

const playersAxiosInstance = axios.create({
    baseURL : 'http://localhost:8080/api/player',
    headers: {
        "Content-type": "application/json",
        'Authorization': 'Bearer ' + token,
    }

});
  
export default playersAxiosInstance;