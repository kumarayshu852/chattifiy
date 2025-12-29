import axios from "axios";


export const axiosInstance=axios.create({
    baseURL:"http://localhost:5001/api" : "https://chattifiy.vercel.app/api",
    withCredentials: true,
});
