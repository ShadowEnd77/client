import axios, { AxiosError } from "axios"

const API_URL = import.meta.env.VITE_API_DOMAIN + "/api/"

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    }
})

api.interceptors.response.use(null, (res: AxiosError) => {
    console.log("Error interception. Code: ", res.code)
    return res
})

export { api }