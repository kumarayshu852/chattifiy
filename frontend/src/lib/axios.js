import axios from "axios";


export const axiosInstance=axios.create({
    baseURL:"https://chattifiy.onrender.com",
    withCredentials: true,
});
