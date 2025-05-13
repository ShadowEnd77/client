import { isExpired, decodeToken } from "react-jwt";
import { getToken } from "./storeToken";

export const validateToken = (token: string) => {
    if (!token || isExpired(token)) {
        return false
    }

    const decoded = decodeToken(token) as { user_id?: string } || {};
    const hasUserId = "user_id" in decoded;

    return hasUserId
}

export const checkUserToken = () => {
    const token = getToken()
    return validateToken(token)
}