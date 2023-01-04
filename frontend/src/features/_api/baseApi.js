import axios from "axios";
import { getToken } from "../../utils/actionToken";

const token = getToken()?.accessToken;

export default axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_API || `https://course.wdpf50.tech/api`,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
