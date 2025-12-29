import axios from "axios";


export const axiosInstance=axios.create({
    baseURL:"https://chattifiy.vercel.app/api",
    withCredentials: true,
});
