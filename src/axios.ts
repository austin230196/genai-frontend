import axios from "axios";


const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    validateStatus: status => status >= 200 && status < 600
})


export default instance;