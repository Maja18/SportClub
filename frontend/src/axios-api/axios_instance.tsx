import axios from "axios"; 

export const getToken = () => localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token")!)
  : null;

const axiosInstance = axios.create({
    baseURL : 'http://localhost:8080/api',
    headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${getToken()}`
    }

});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem("token")!);

    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
);

  
export default axiosInstance;