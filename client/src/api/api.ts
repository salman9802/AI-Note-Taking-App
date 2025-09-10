import axios from "axios";

const SERVER_URL = import.meta.env.PROD ? "/" : "http://localhost";

export default axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
});

export const authApi = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
