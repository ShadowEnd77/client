import { isExpired, decodeToken } from "react-jwt";
import { getToken } from "./storeToken";

export const validateToken = (token: string) => {
    if (!token || isExpired(token)) {
        console.log("token doesn't exist or expired");

        return false
    }

    const decoded = decodeToken(token) as { user_id?: string } || {};
    const hasUserId = "user_id" in decoded;
    console.log(`token has user id: ${hasUserId}`);

    return hasUserId
}

export const checkUserToken = () => {
    return true;
    const token = getToken()
    return validateToken(token)
}