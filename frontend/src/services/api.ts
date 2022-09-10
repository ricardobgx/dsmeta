import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const api = axios.create({ baseURL });

export default api;
