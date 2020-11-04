import axios from 'axios';

const {baseURL} = process.env;

const api = axios.create({baseURL});

export default api;
