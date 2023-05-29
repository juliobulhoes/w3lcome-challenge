import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BASEURL
  ? `${process.env.REACT_APP_BASEURL}/api/`
  : 'http://localhost:3333/api/';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
