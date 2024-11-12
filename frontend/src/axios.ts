import axios from "axios";
import {baseURL} from "./types";


// configure timeout when deploy
export const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 110000,
    headers: {
        'X-CSRFToken' : '',
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
});