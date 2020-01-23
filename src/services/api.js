import axios from 'axios';

const api = axios.create({
    //para celular fisico
    baseURL: 'http://192.168.0.108:3333',
    //para emulador
    // baseURL: 'http://localhost:3333',
});

export default api;