import axios from "axios";

const api = axios.create({
    baseURL: 'pds-2023-1-05.edge.net.br:9005',
});

export default api;