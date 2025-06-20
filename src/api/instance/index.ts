import axios, { AxiosError } from "axios"
const ip = "http://m8y20l-185-247-185-62.ru.tuna.am"

const devMode = false
const API_URL = devMode ? import.meta.env.VITE_API_DOMAIN : ip + "/api/v1/"

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
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