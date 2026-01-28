import axios from "axios";

const API = axios.create({
  baseURL: "https://full-stack-proj-rxfi.onrender.com"
});

export default API;
