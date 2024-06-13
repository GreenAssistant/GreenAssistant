import axios from "axios";

// Backend Server
const baseURL = 'https://greenassistant.ai.tha.de:7000'
export const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 110000,
    headers: {
        'X-CSRFToken' : '',
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});