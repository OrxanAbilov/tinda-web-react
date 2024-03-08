import axios from "axios";

const token = localStorage.getItem('token')
const instance = axios.create({
    baseURL: 'https://localhost:7243/api/',
    headers: {Authorization: `Bearer ${token}`}
    
  });



  export default instance;