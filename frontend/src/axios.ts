import axios from "axios";

// Backend Server
//const baseURL = 'https://greenassistant.ai.tha.de:7000'
// configure timeout when deploy
const baseURL = 'http://127.0.0.1:8000/'

export const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 110000,
    headers: {
        'X-CSRFToken' : '',
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});