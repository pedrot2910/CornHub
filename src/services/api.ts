import axios from "axios";

const API_KEY = "0ea97d2178b9e85ccaa37465a9f1e9a5";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: API_KEY,
        language: "pt-BR"
    }
});