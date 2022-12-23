import axios from "axios"; 

export const getToken = () => localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : null;

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosInstance = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers: {
        "Content-type": "application/json",
        'Authorization': getAuthorizationHeader()
    }

});
  
export default axiosInstance;