import axios from 'axios';

let apiUrl;

const apiURLs = {
    production: "https://seinfeld-backend-api-346bac98d725.herokuapp.com/api",
    development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
    apiURLs.development;
} else {
    apiURLs.production;
}

const api = axios.create({
    baseURL: apiUrl,
});

export default api;