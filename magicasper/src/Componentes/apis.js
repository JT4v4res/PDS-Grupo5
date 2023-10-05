import axios from "axios";

const api = axios.create({
    baseURL: 'http://api-casper:8080',
});

export default api;