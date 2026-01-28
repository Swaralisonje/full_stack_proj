import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-api-cb4x.onrender.com"
});

export default API;
