import axios, { AxiosError } from "axios"
export const ip = "http://192.168.43.223:8000"

const devMode = false
const API_URL = devMode ? import.meta.env.VITE_API_DOMAIN : ip + "/api/v1/"

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