import axios, { AxiosError } from "axios"

export const domain = import.meta.env.VITE_API_DOMAIN

const API_URL = domain + "/api/v1/"

const api = axios.create({
    baseURL: API_URL,
    withCredentials: !true,
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
        "Access-Control-Allow-Origin": "*" // Добавляем CORS-заголовок
    }

})

api.interceptors.response.use(null, (res: AxiosError) => {
    console.log("Error interception. Code: ", res.code)
    return res
})

export { api }