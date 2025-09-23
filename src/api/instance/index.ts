import axios, { AxiosError } from "axios"
import { getToken } from "../../features/user/utils/storeToken"

export const domain = import.meta.env.VITE_API_DOMAIN

const API_URL = domain + "/api/v1"


const api = axios.create({
    baseURL: API_URL,
// withCredentials: true,
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    }
})

api.interceptors.response.use(null, (ctx: AxiosError) => {
    const res = ctx
    console.log(ctx);

    if (res.code == "ERR_NETWORK") {
        //alert("ошибка соединения")

    }
    return res
})

api.interceptors.request.use((config) => {
    const publicEndpoints = [
        "/auth/login",
        "/auth/register",
        "/cities",
    ];

    if (publicEndpoints.some(url => config.url?.includes(url))) {
        return config; // Пропускаем добавление токена
    }

    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export {
    api,
}