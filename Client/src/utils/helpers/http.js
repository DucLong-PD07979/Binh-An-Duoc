import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const http = axios.create({
  baseURL: `${apiUrl}/api/v1`,
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'multipart/form-data'
  },
  withCredentials: true
});
export default http;
// config axios
