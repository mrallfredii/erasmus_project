import axios from "axios";

//axios for api backend url
export const makeRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});
