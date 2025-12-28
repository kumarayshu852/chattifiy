import axios from "axios";


export const axiosInstance=axios.create({
    baseURL: import.meta.env.MODE==="development"?"https://chattifiy.vercel.app/api":"/api",
    withCredentials: true,
});
